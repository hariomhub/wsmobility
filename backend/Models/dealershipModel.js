// server/models/DealershipApplication.js
const mongoose = require('mongoose');

const dealershipSchema = new mongoose.Schema({

  // Application status
  applicationStatus: {
    type: String,
    enum: ['pending', 'under_review', 'approved', 'rejected', 'on_hold'],
    default: 'pending',
    index: true
  },

  reviewNotes: {
    type: String,
    maxlength: [1000, 'Review notes cannot exceed 1000 characters']
  },

  reviewedBy: {
    type: String,
    trim: true
  },

  reviewedAt: {
    type: Date
  },

  // Personal Information
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Full name cannot exceed 100 characters'],
    index: true
  },

  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\+91\d{10}$/, 'Phone number must be in format +91XXXXXXXXXX'],
    unique: true,
    index: true
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    lowercase: true,
    trim: true,
    index: true
  },

  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [18, 'Age must be at least 18'],
    max: [100, 'Age cannot exceed 100']
  },

  // Business Information
  businessType: {
    type: String,
    required: [true, 'Business type is required'],
    enum: {
      values: ['proprietorship', 'partnership', 'private_limited', 'llp'],
      message: 'Invalid business type'
    }
  },

  businessName: {
    type: String,
    trim: true,
    maxlength: [200, 'Business name cannot exceed 200 characters'],
    default: ''
  },

  gstNumber: {
    type: String,
    trim: true,
    match: [/^[0-9A-Z]*$/, 'Invalid GST number format'],
    uppercase: true,
    default: ''
  },

  // Changed to Boolean type
  hasExperience: {
    type: Boolean,
    required: [true, 'Experience field is required']
  },

  experienceDetails: {
    type: String,
    trim: true,
    maxlength: [1000, 'Experience details cannot exceed 1000 characters'],
    default: ''
  },

  // Location Information
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
    maxlength: [100, 'City name cannot exceed 100 characters'],
    index: true
  },

  state: {
    type: String,
    required: [true, 'State is required'],
    enum: [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
      'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
      'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
      'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ]
  },

  pincode: {
    type: String,
    required: [true, 'Pincode is required'],
    match: [/^\d{6}$/, 'Pincode must be 6 digits']
  },

  areaType: {
    type: String,
    required: [true, 'Area type is required'],
    enum: ['tier1', 'tier2', 'tier3']
  },

  dealershipAddress: {
    type: String,
    required: [true, 'Dealership address is required'],
    trim: true,
    maxlength: [500, 'Address cannot exceed 500 characters']
  },

  propertyStatus: {
    type: String,
    required: [true, 'Property status is required'],
    enum: ['owned', 'rented', 'lease']
  },

  // Infrastructure Details - Changed to Boolean type
  showroomSize: {
    type: Number,
    required: [true, 'Showroom size is required'],
    min: [100, 'Showroom size must be at least 100 sq ft']
  },

  hasServiceArea: {
    type: Boolean,
    required: [true, 'Service area field is required']
  },

  hasParkingSpace: {
    type: Boolean,
    required: [true, 'Parking space field is required']
  },

  hasPowerBackup: {
    type: Boolean,
    required: [true, 'Power backup field is required']
  },

  hasChargingStation: {
    type: Boolean,
    required: [true, 'Charging station field is required']
  },

  // Financial Information
  investmentCapacity: {
    type: String,
    required: [true, 'Investment capacity is required'],
    enum: ['5-10', '10-20', '20-50', '50-100', '100+']
  },

  investmentSource: {
    type: String,
    required: [true, 'Investment source is required'],
    enum: ['self', 'bank_loan', 'investor', 'mixed']
  },

  // Changed to Boolean type
  meetTargets: {
    type: Boolean,
    required: [true, 'Meet targets field is required']
  },

  // Team Information
  salesExecutives: {
    type: Number,
    required: [true, 'Number of sales executives is required'],
    min: [1, 'At least 1 sales executive is required']
  },

  technicians: {
    type: Number,
    required: [true, 'Number of technicians is required'],
    min: [1, 'At least 1 technician is required']
  },

  // Changed to Boolean type
  trainStaff: {
    type: Boolean,
    required: [true, 'Train staff field is required']
  },

  // Additional Information
  motivation: {
    type: String,
    required: [true, 'Motivation is required'],
    trim: true,
    maxlength: [1000, 'Motivation cannot exceed 1000 characters'] // Increased from 500
  },

  // Keep as string enum since it has specific business meaning
  exclusivity: {
    type: String,
    required: [true, 'Exclusivity field is required'],
    enum: ['yes', 'no']
  },

  // Document Information - Enhanced with required documents
  documents: {
    idProof: {
      filename: { 
        type: String,
        required: [true, 'ID proof filename is required']
      },
      originalName: { 
        type: String,
        required: [true, 'ID proof original name is required']
      },
      url: { 
        type: String,
        required: [true, 'ID proof URL is required']
      },
      size: { 
        type: Number,
        required: [true, 'ID proof file size is required']
      },
      type: { 
        type: String,
        required: [true, 'ID proof file type is required']
      },
      publicId: { type: String }, // Added for Cloudinary
      uploadedAt: { type: Date, default: Date.now }
    },
    addressProof: {
      filename: { 
        type: String,
        required: [true, 'Address proof filename is required']
      },
      originalName: { 
        type: String,
        required: [true, 'Address proof original name is required']
      },
      url: { 
        type: String,
        required: [true, 'Address proof URL is required']
      },
      size: { 
        type: Number,
        required: [true, 'Address proof file size is required']
      },
      type: { 
        type: String,
        required: [true, 'Address proof file type is required']
      },
      publicId: { type: String }, // Added for Cloudinary
      uploadedAt: { type: Date, default: Date.now }
    },
    businessProof: {
      filename: { type: String },
      originalName: { type: String },
      url: { type: String },
      size: { type: Number },
      type: { type: String },
      publicId: { type: String }, // Added for Cloudinary
      uploadedAt: { type: Date, default: Date.now }
    },
    propertyLayout: {
      filename: { type: String },
      originalName: { type: String },
      url: { type: String },
      size: { type: Number },
      type: { type: String },
      publicId: { type: String }, // Added for Cloudinary
      uploadedAt: { type: Date, default: Date.now }
    }
  },

  // Agreement and Legal
  declaration: {
    type: Boolean,
    required: [true, 'Please accept the declaration'],
    validate: {
      validator: function(v) {
        return v === true;
      },
      message: 'Declaration must be accepted'
    }
  },

  declarationAcceptedAt: {
    type: Date,
    default: Date.now
  },

  // Email tracking
  emailsSent: {
    userConfirmation: {
      sent: { type: Boolean, default: false },
      sentAt: Date,
      emailId: String
    },
    adminNotification: {
      sent: { type: Boolean, default: false },
      sentAt: Date,
      emailId: String
    }
  },

  // Metadata
  submissionIP: String,
  userAgent: String,
  submissionSource: { type: String, default: 'web' }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
dealershipSchema.index({ createdAt: -1 });
dealershipSchema.index({ applicationStatus: 1, createdAt: -1 });
dealershipSchema.index({ state: 1, city: 1 });
dealershipSchema.index({ 'emailsSent.userConfirmation.sent': 1 });
dealershipSchema.index({ 'emailsSent.adminNotification.sent': 1 });

// Virtual for application age
dealershipSchema.virtual('applicationAge').get(function () {
  return Math.floor((Date.now() - this.createdAt) / (1000 * 60 * 60 * 24));
});

// Method to check if application is complete
dealershipSchema.methods.isComplete = function () {
  const requiredFields = [
    'fullName', 'phoneNumber', 'email', 'age', 'businessType',
    'city', 'state', 'pincode', 'areaType', 'dealershipAddress',
    'propertyStatus', 'showroomSize', 'hasServiceArea', 'hasParkingSpace',
    'hasPowerBackup', 'hasChargingStation', 'investmentCapacity',
    'investmentSource', 'meetTargets', 'salesExecutives', 'technicians',
    'trainStaff', 'motivation', 'exclusivity', 'declaration'
  ];

  const hasRequiredFields = requiredFields.every(field => 
    this[field] !== undefined && this[field] !== null && this[field] !== ''
  );

  const hasRequiredDocuments = 
    this.documents?.idProof?.url && 
    this.documents?.addressProof?.url;

  return hasRequiredFields && hasRequiredDocuments;
};

// Method to get application summary
dealershipSchema.methods.getSummary = function () {
  return {
    id: this._id,
    name: this.fullName,
    phone: this.phoneNumber,
    email: this.email,
    city: this.city,
    state: this.state,
    businessType: this.businessType,
    investmentCapacity: this.investmentCapacity,
    status: this.applicationStatus,
    submittedAt: this.createdAt,
    isComplete: this.isComplete()
  };
};

// Static method to get applications by status
dealershipSchema.statics.getByStatus = function (status) {
  return this.find({ applicationStatus: status }).sort({ createdAt: -1 });
};

// Static method to get pending email notifications
dealershipSchema.statics.getPendingEmailNotifications = function () {
  return this.find({
    $or: [
      { 'emailsSent.userConfirmation.sent': false },
      { 'emailsSent.adminNotification.sent': false }
    ]
  });
};

// Pre-save middleware
dealershipSchema.pre('save', function (next) {
  // Ensure phone number has country code
  if (this.phoneNumber && !this.phoneNumber.startsWith('+91')) {
    this.phoneNumber = '+91' + this.phoneNumber.replace(/^\+91/, '');
  }

  // Convert GST number to uppercase
  if (this.gstNumber) {
    this.gstNumber = this.gstNumber.toUpperCase();
  }

  next();
});

module.exports = mongoose.model('DealershipApplication', dealershipSchema);