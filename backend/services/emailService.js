const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const jwt=require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

class EmailService {
  constructor() {
    this.transporter = null;
    this.templates = new Map();
    this.initializeTransporter();
  }

  // Initialize email transporter
  initializeTransporter() {
    try {
      this.transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD // Use app password for Gmail
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      // Verify transporter
      this.transporter.verify((error, success) => {
        if (error) {
          console.error('Email transporter verification failed:', error);
        } else {
          console.log('Email transporter ready');
        }
      });
    } catch (error) {
      console.error('Error initializing email transporter:', error);
    }
  }


  // Send verification email with link to dealership form
async sendVerificationEmail(email) {
  try {
    if (!email) throw new Error('Email is required');

    // ✅ You can add a verification token here later if needed
    const token=jwt.sign({email}, process.env.JWT_SECRET, { expiresIn:'15m'});

    const verificationLink = `${process.env.BACKEND_URL}/api/email/verify?token=${token}`;


    const mailOptions = {
      from: {
        name: process.env.COMPANY_NAME || 'EV Dealership',
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: 'Verify Your Email - EV Dealership Application',
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
          <div style="max-width: 600px; background: white; padding: 30px; border-radius: 10px; margin: auto;">
            <img src="cid:company-logo" alt="Company Logo" style="width: 120px; display: block; margin: 0 auto 20px;" />
            <h2 style="text-align: center; color: #333;">Verify your email to continue</h2>
            <p style="text-align: center; color: #555;">
              Click the button below to verify your email address and proceed to the dealership application form.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationLink}" style="background-color: #007bff; color: white; padding: 12px 25px; border-radius: 5px; text-decoration: none;">
                Verify Email
              </a>
            </div>
            <p style="text-align: center; font-size: 14px; color: #777;">
              If you didn’t request this, please ignore this email.
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(__dirname, '../assets/logo.png'),
          cid: 'company-logo'
        }
      ]
    };

    const result = await this.transporter.sendMail(mailOptions);

    return {
      success: true,
      message: `Verification email sent to ${email}`,
      messageId: result.messageId
    };
  } catch (error) {
    console.error('Error sending verification email:', error);
    return { success: false, error: error.message };
  }
}



  // Load and compile email template
  async loadTemplate(templateName) {
    try {
      if (this.templates.has(templateName)) {
        return this.templates.get(templateName);
      }

      const templatePath = path.join(__dirname, '../templates', `${templateName}.hbs`);
      const templateSource = await fs.readFile(templatePath, 'utf8');
      const compiledTemplate = handlebars.compile(templateSource);
      
      this.templates.set(templateName, compiledTemplate);
      return compiledTemplate;
    } catch (error) {
      console.error(`Error loading template ${templateName}:`, error);
      throw new Error(`Template ${templateName} not found`);
    }
  }

  // Send user confirmation email
  async sendUserConfirmationEmail(applicationData) {
    try {
      const template = await this.loadTemplate('userConfirmation');
      const htmlContent = template({
        fullName: applicationData.fullName,
        applicationId: applicationData._id,
        submissionDate: new Date(applicationData.createdAt).toLocaleDateString('en-IN'),
        city: applicationData.city,
        state: applicationData.state,
        businessType: this.formatBusinessType(applicationData.businessType),
        investmentCapacity: this.formatInvestmentRange(applicationData.investmentCapacity),
        contactEmail: process.env.CONTACT_EMAIL,
        contactPhone: process.env.CONTACT_PHONE,
        companyName: process.env.COMPANY_NAME || 'EV Dealership'
      });

      const mailOptions = {
        from: {
          name: process.env.COMPANY_NAME || 'EV Dealership',
          address: process.env.EMAIL_USER
        },
        to: applicationData.email,
        subject: 'Application Received - EV Dealership Partnership',
        html: htmlContent,
        attachments: [
          {
            filename: 'logo.png',
            path: path.join(__dirname, '../assets/logo.png'),
            cid: 'company-logo'
          }
        ]
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      return {
        success: true,
        messageId: result.messageId,
        response: result.response
      };
    } catch (error) {
      console.error('Error sending user confirmation email:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

 // Send admin notification email for new application
  async sendAdminNotificationEmail(applicationData) {
  try {
    const template = await this.loadTemplate('adminNotification');

    // ✅ Generate short-lived signed tokens for approve/reject (1 hour validity)
    const approveToken = jwt.sign(
      { id: applicationData._id, status: 'approved' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    const rejectToken = jwt.sign(
      { id: applicationData._id, status: 'rejected' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const reviewToken = jwt.sign(
      { id: applicationData._id, status: 'under_review' }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    // ✅ Secure URLs with tokens instead of plain IDs
    const approvalUrl = `${process.env.BACKEND_URL}/api/email/status-update?token=${approveToken}`;
    const rejectionUrl = `${process.env.BACKEND_URL}/api/email/status-update?token=${rejectToken}`;
    const reviewUrl = `${process.env.BACKEND_URL}/api/email/status-update?token=${reviewToken}`;
    const adminDashboardUrl = `${process.env.ADMIN_DASHBOARD_URL}/applications/${applicationData._id}`;

    // ✅ Render email template with both URLs
    const htmlContent = template({
      fullName: applicationData.fullName,
      applicationId: applicationData._id,
      submissionDate: new Date(applicationData.createdAt).toLocaleString('en-IN'),
      phoneNumber: applicationData.phoneNumber,
      email: applicationData.email,
      city: applicationData.city,
      state: applicationData.state,
      businessType: this.formatBusinessType(applicationData.businessType),
      businessName: applicationData.businessName || 'Not provided',
      investmentCapacity: this.formatInvestmentRange(applicationData.investmentCapacity),
      showroomSize: applicationData.showroomSize,
      hasExperience: applicationData.hasExperience === 'yes' ? 'Yes' : 'No',
      experienceDetails: applicationData.experienceDetails || 'Not provided',
      motivation: applicationData.motivation,
      approvalUrl,
      reviewUrl,
      rejectionUrl,
      adminDashboardUrl
    });

    // ✅ Email details for admin
    const mailOptions = {
      from: {
        name: process.env.COMPANY_NAME || 'EV Dealership System',
        address: process.env.EMAIL_USER
      },
      to: process.env.ADMIN_EMAIL,
      cc: process.env.ADMIN_CC_EMAILS ? process.env.ADMIN_CC_EMAILS.split(',') : [],
      subject: `New Dealership Application - ${applicationData.fullName} (${applicationData.city})`,
      html: htmlContent,
      priority: 'high'
    };

    const result = await this.transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: result.messageId,
      response: result.response
    };
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Send application status update email to applicant
async sendStatusUpdateEmail(applicationData, newStatus, reviewNotes) {
  try {
    const template = await this.loadTemplate('status-update');

    const statusMessages = {
      under_review: 'Your application is under review',
      approved: 'Congratulations! Your dealership application has been approved 🎉',
      rejected: 'We regret to inform you that your dealership application was not approved'
    };

    const htmlContent = template({
  fullName: applicationData.fullName,
  applicationId: applicationData._id,
  statusMessage: statusMessages[newStatus],
  isApproved: newStatus === 'approved',
  isRejected: newStatus === 'rejected',
  reviewNotes: reviewNotes || '',
  companyName: process.env.COMPANY_NAME,
  contactEmail: process.env.CONTACT_EMAIL,
  contactPhone: process.env.CONTACT_PHONE,
  frontendUrl: process.env.FRONTEND_URL,
  year: new Date().getFullYear()
});

    const mailOptions = {
      from: {
        name: process.env.COMPANY_NAME || 'EV Dealership',
        address: process.env.EMAIL_USER
      },
      to: applicationData.email,
      subject: `Application Update - ${statusMessages[newStatus]}`,
      html: htmlContent,
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(__dirname, '../assets/logo.png'),
          cid: 'company-logo'
        }
      ]
    };

    const result = await this.transporter.sendMail(mailOptions);

    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending status update email:', error);
    return { success: false, error: error.message };
  }
}


  // Format business type for display
  formatBusinessType(type) {
    const types = {
      proprietorship: 'Proprietorship',
      partnership: 'Partnership',
      private_limited: 'Private Limited Company',
      llp: 'Limited Liability Partnership'
    };
    return types[type] || type;
  }

  // Format investment range for display
  formatInvestmentRange(range) {
    const ranges = {
      '5-10': '₹5-10 Lakhs',
      '10-20': '₹10-20 Lakhs',
      '20-50': '₹20-50 Lakhs',
      '50-100': '₹50 Lakhs - 1 Crore',
      '100+': '₹1 Crore+'
    };
    return ranges[range] || range;
  }

  // Send bulk emails (for newsletters, updates, etc.)
  async sendBulkEmail(recipients, subject, template, data) {
    try {
      const compiledTemplate = await this.loadTemplate(template);
      const results = [];
      
      // Send emails in batches to avoid rate limiting
      const batchSize = 10;
      for (let i = 0; i < recipients.length; i += batchSize) {
        const batch = recipients.slice(i, i + batchSize);
        
        const batchPromises = batch.map(async (recipient) => {
          try {
            const htmlContent = compiledTemplate({
              ...data,
              recipientName: recipient.name,
              recipientEmail: recipient.email
            });

            const mailOptions = {
              from: {
                name: process.env.COMPANY_NAME || 'EV Dealership',
                address: process.env.EMAIL_USER
              },
              to: recipient.email,
              subject: subject,
              html: htmlContent
            };

            const result = await this.transporter.sendMail(mailOptions);
            return {
              email: recipient.email,
              success: true,
              messageId: result.messageId
            };
          } catch (error) {
            return {
              email: recipient.email,
              success: false,
              error: error.message
            };
          }
        });

        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);
        
        // Add delay between batches
        if (i + batchSize < recipients.length) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      return results;
    } catch (error) {
      console.error('Error sending bulk emails:', error);
      throw error;
    }
  }

  // Test email configuration
  async testEmailConfig() {
    try {
      if (!this.transporter) {
        throw new Error('Email transporter not initialized');
      }

      const testMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Email Configuration Test',
        text: 'This is a test email to verify email configuration.',
        html: '<p>This is a test email to verify email configuration.</p>'
      };

      const result = await this.transporter.sendMail(testMailOptions);
      return {
        success: true,
        messageId: result.messageId,
        message: 'Test email sent successfully'
      };
    } catch (error) {
      console.error('Email configuration test failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

module.exports = new EmailService();