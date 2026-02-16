const express = require('express');
const router = express.Router();
const DealershipApplication = require('../Models/dealershipModel');
require('dotenv').config();
const emailService = require('../services/emailService');
const { body, validationResult, param } = require('express-validator');
const rateLimit = require('express-rate-limit');
const VerifiedEmail = require('../Models/VerifiedEmail');

// Rate limiting for form submission
const submitLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: process.env.NODE_ENV === 'production' ? 3 : 100,
  message: {
    success: false,
    message: 'Too many applications submitted. Please try again after an hour.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Validation rules
const applicationValidationRules = () => {
  return [
    body('fullName').trim().isLength({ min: 2, max: 100 }).withMessage('Full name must be 2-100 characters'),
    body('phoneNumber').matches(/^\+91\d{10}$/).withMessage('Phone number must be in format +91XXXXXXXXXX'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('age').isInt({ min: 18, max: 100 }).withMessage('Age must be between 18 and 100'),
    body('businessType').isIn(['proprietorship', 'partnership', 'private_limited', 'llp']).withMessage('Invalid business type'),

    // Optional fields - don't validate if empty
    body('businessName').optional().trim().isLength({ max: 200 }).withMessage('Business name cannot exceed 200 characters'),
    body('gstNumber').optional().trim().isLength({ max: 15 }).withMessage('GST number cannot exceed 15 characters'),
    body('experienceDetails').optional().trim().isLength({ max: 1000 }).withMessage('Experience details cannot exceed 1000 characters'),

    body('city').trim().isLength({ min: 2, max: 100 }).withMessage('City name must be 2-100 characters'),
    body('state').isIn([
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
      'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
      'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
      'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ]).withMessage('Invalid state'),
    body('pincode').matches(/^\d{6}$/).withMessage('Pincode must be 6 digits'),
    body('areaType').isIn(['tier1', 'tier2', 'tier3']).withMessage('Invalid area type'),
    body('dealershipAddress').trim().isLength({ min: 10, max: 500 }).withMessage('Dealership address must be 10-500 characters'),
    body('propertyStatus').isIn(['owned', 'rented', 'lease']).withMessage('Invalid property status'),
    body('showroomSize').isInt({ min: 100 }).withMessage('Showroom size must be at least 100 sq ft'),

    // Boolean fields should be validated as boolean
    body('hasExperience').isBoolean().withMessage('Has experience must be boolean'),
    body('hasServiceArea').isBoolean().withMessage('Has service area must be boolean'),
    body('hasParkingSpace').isBoolean().withMessage('Has parking space must be boolean'),
    body('hasPowerBackup').isBoolean().withMessage('Has power backup must be boolean'),
    body('hasChargingStation').isBoolean().withMessage('Has charging station must be boolean'),
    body('meetTargets').isBoolean().withMessage('Meet targets must be boolean'),
    body('trainStaff').isBoolean().withMessage('Train staff must be boolean'),

    body('investmentCapacity').isIn(['5-10', '10-20', '20-50', '50-100', '100+']).withMessage('Invalid investment capacity'),
    body('investmentSource').isIn(['self', 'bank_loan', 'investor', 'mixed']).withMessage('Invalid investment source'),
    body('salesExecutives').isInt({ min: 1 }).withMessage('At least 1 sales executive required'),
    body('technicians').isInt({ min: 1 }).withMessage('At least 1 technician required'),
    body('motivation').trim().isLength({ min: 10, max: 1000 }).withMessage('Motivation must be 10-1000 characters'),
    body('exclusivity').isIn(['yes', 'no']).withMessage('Invalid exclusivity option'),
    body('declaration').isBoolean().custom(value => value === true).withMessage('Declaration must be accepted'),

    // Documents validation - make sure they're objects with required properties
    body('documents').isObject().withMessage('Documents must be an object'),

    // ID Proof validation - handle null case and nested structure
    body('documents.idProof').custom((value) => {
      if (!value) {
        throw new Error('ID proof document is required');
      }

      // Check if it's an object with required properties
      if (typeof value !== 'object' || !value.url || !value.filename) {
        throw new Error('ID proof document must have url and filename properties');
      }

      return true;
    }),

    // Address Proof validation - handle null case and nested structure
    body('documents.addressProof').custom((value) => {
      if (!value) {
        throw new Error('Address proof document is required');
      }

      // Check if it's an object with required properties
      if (typeof value !== 'object' || !value.url || !value.filename) {
        throw new Error('Address proof document must have url and filename properties');
      }

      return true;
    }),

    // Optional documents - only validate if they exist
    body('documents.businessProof').optional().custom((value) => {
      if (value && (typeof value !== 'object' || !value.url || !value.filename)) {
        throw new Error('Business proof document must have url and filename properties if provided');
      }
      return true;
    }),

    body('documents.propertyLayout').optional().custom((value) => {
      if (value && (typeof value !== 'object' || !value.url || !value.filename)) {
        throw new Error('Property layout document must have url and filename properties if provided');
      }
      return true;
    })
  ];
};

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

// Submit new dealership application
router.post('/submit', submitLimit, applicationValidationRules(), handleValidationErrors, async (req, res) => {
  try {
    console.log('Received application data:', req.body); // Debug log
    const verified = await VerifiedEmail.findOne({ email: req.body.email });
    const FIFTEEN_MIN = 15 * 60 * 1000; // ms
    if (!verified || !verified.verifiedAt || (Date.now() - new Date(verified.verifiedAt).getTime() > FIFTEEN_MIN)) {
      return res.status(400).json({
        success: false,
        message: 'Email verification expired or not found. Please verify your email again.'
      });
    }

    const existingApplication = await DealershipApplication.findOne({
      $or: [
        { email: req.body.email },
        ...(req.body.supabaseUid ? [{ supabaseUid: req.body.supabaseUid }] : [])
      ]
    });

    if (existingApplication) {
      return res.status(409).json({
        success: false,
        message: 'Application already exists for this user',
        applicationId: existingApplication._id
      });
    }

    // Check for duplicate phone number
    const existingPhone = await DealershipApplication.findOne({
      phoneNumber: req.body.phoneNumber
    });

    if (existingPhone) {
      return res.status(409).json({
        success: false,
        message: 'Application already exists with this phone number'
      });
    }

    // Validate documents structure
    const { documents } = req.body;
    if (!documents || !documents.idProof || !documents.addressProof) {
      return res.status(400).json({
        success: false,
        message: 'Required documents (idProof and addressProof) are missing'
      });
    }

    console.log('Documents received:', documents); // Debug log

    // Add metadata
    const applicationData = {
      ...req.body,
      submissionIP: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      submissionSource: 'web'
    };

    console.log('Final application data:', applicationData); // Debug log

    // Create new application
    const application = new DealershipApplication(applicationData);
    await application.save();

    console.log('Application saved successfully:', application._id);

    (async () => {
      try {
        const [userEmailResult, adminEmailResult] = await Promise.all([
          emailService.sendUserConfirmationEmail(application),
          emailService.sendAdminNotificationEmail(application)
        ]);

        await DealershipApplication.findByIdAndUpdate(application._id, {
          'emailsSent.userConfirmation.sent': userEmailResult.success,
          'emailsSent.userConfirmation.sentAt': userEmailResult.success ? new Date() : undefined,
          'emailsSent.userConfirmation.emailId': userEmailResult.messageId,
          'emailsSent.adminNotification.sent': adminEmailResult.success,
          'emailsSent.adminNotification.sentAt': adminEmailResult.success ? new Date() : undefined,
          'emailsSent.adminNotification.emailId': adminEmailResult.messageId
        });

        console.log('Email notifications sent:', {
          user: userEmailResult.success,
          admin: adminEmailResult.success
        });
      } catch (err) {
        console.error('Error sending emails (async):', err);
      }
    })();

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: {
        applicationId: application._id,
        submittedAt: application.createdAt,
        status: application.applicationStatus
      }
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    console.error('Error stack:', error.stack); // More detailed error info

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        success: false,
        message: `Application with this ${field} already exists`
      });
    }

    // More detailed error response
    res.status(500).json({
      success: false,
      message: 'Error submitting application',
      error: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        stack: error.stack
      } : 'Internal server error'
    });
  }
});


// Get application by ID
router.get('/:id', param('id').isMongoId().withMessage('Invalid application ID'), handleValidationErrors, async (req, res) => {
  try {
    const application = await DealershipApplication.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    res.json({
      success: true,
      data: application
    });

  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching application'
    });
  }
});

// Update application status (Admin only)
router.patch('/:id/status',
  param('id').isMongoId().withMessage('Invalid application ID'),
  body('status').isIn(['pending', 'under_review', 'approved', 'rejected', 'on_hold']).withMessage('Invalid status'),
  body('reviewNotes').optional().trim().isLength({ max: 1000 }).withMessage('Review notes cannot exceed 1000 characters'),
  body('reviewedBy').optional().trim().isLength({ min: 2, max: 100 }).withMessage('Reviewer name must be 2-100 characters'),
  handleValidationErrors,
  async (req, res) => {
    try {
      const { status, reviewNotes, reviewedBy } = req.body;

      const application = await DealershipApplication.findById(req.params.id);
      if (!application) {
        return res.status(404).json({
          success: false,
          message: 'Application not found'
        });
      }

      const oldStatus = application.applicationStatus;

      // Update application
      application.applicationStatus = status;
      application.reviewNotes = reviewNotes;
      application.reviewedBy = reviewedBy;
      application.reviewedAt = new Date();

      await application.save();

      // Send status update email if status changed
      if (oldStatus !== status) {
        emailService.sendStatusUpdateEmail(application, status, reviewNotes)
          .then(result => {
            console.log('Status update email sent:', result.success);
          })
          .catch(error => {
            console.error('Error sending status update email:', error);
          });
      }

      res.json({
        success: true,
        message: 'Application status updated successfully',
        data: {
          applicationId: application._id,
          oldStatus,
          newStatus: status,
          updatedAt: application.reviewedAt
        }
      });

    } catch (error) {
      console.error('Error updating application status:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating application status'
      });
    }
  }
);

// Get all applications (Admin only) with pagination and filtering
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      state,
      city,
      businessType,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      search
    } = req.query;

    // Build filter object
    const filter = {};
    if (status) filter.applicationStatus = status;
    if (state) filter.state = state;
    if (city) filter.city = new RegExp(city, 'i');
    if (businessType) filter.businessType = businessType;
    if (search) {
      filter.$or = [
        { fullName: new RegExp(search, 'i') },
        { email: new RegExp(search, 'i') },
        { phoneNumber: new RegExp(search, 'i') }
      ];
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute queries
    const [applications, totalCount] = await Promise.all([
      DealershipApplication.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(parseInt(limit))
        .select('-documents.idProof -documents.addressProof -documents.businessProof -documents.propertyLayout'),
      DealershipApplication.countDocuments(filter)
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(totalCount / parseInt(limit));
    const hasNextPage = parseInt(page) < totalPages;
    const hasPrevPage = parseInt(page) > 1;

    res.json({
      success: true,
      data: applications,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalCount,
        hasNextPage,
        hasPrevPage,
        limit: parseInt(limit)
      }
    });

  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching applications'
    });
  }
});

// Get application statistics (Admin only)
router.get('/stats/overview', async (req, res) => {
  try {
    const stats = await DealershipApplication.aggregate([
      {
        $group: {
          _id: '$applicationStatus',
          count: { $sum: 1 }
        }
      }
    ]);

    const stateStats = await DealershipApplication.aggregate([
      {
        $group: {
          _id: '$state',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    const monthlyStats = await DealershipApplication.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 }
    ]);

    const totalApplications = await DealershipApplication.countDocuments();

    res.json({
      success: true,
      data: {
        totalApplications,
        statusStats: stats,
        topStates: stateStats,
        monthlyTrend: monthlyStats
      }
    });

  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics'
    });
  }
});

module.exports = router;