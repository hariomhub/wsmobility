const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');
const VerifiedEmail=require('../Models/VerifiedEmail');
const Application=require('../Models/dealershipModel');
const jwt=require('jsonwebtoken');

router.post('/send-verification', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const result = await emailService.sendVerificationEmail(email);
    res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/test', async (req, res) => {
  try {
    const result = await emailService.testEmailConfig();
    res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/verify', async (req, res) => {
  const { token } = req.query;
  try {
    if (!token) {
      console.log("❌ No token found in request query");
      return res.redirect(`${process.env.FRONTEND_URL}/evdealership?verified=false`);
    }

    console.log("🟢 Received token:", token.slice(0, 40) + "..."); 
    console.log("🔑 Using JWT_SECRET:", process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token verified successfully!");
    console.log("📧 Decoded email:", decoded.email);  

    // Save verified email in DB if not already saved
    const existing = await VerifiedEmail.findOne({ email: decoded.email });
    if (!existing) {
      console.log("🆕 New verified email — saving to DB");
      await VerifiedEmail.create({ email: decoded.email });
    } else {
      console.log("🔁 Email already exists — updating verifiedAt timestamp");
      await VerifiedEmail.findOneAndUpdate(
        { email: decoded.email },
        { email: decoded.email, verifiedAt: new Date() },
        { upsert: true }
      );
    }

    console.log("✅ Email verification recorded successfully in DB");

    // db me email verified mark kro and return it to frontend
    return res.redirect(`${process.env.FRONTEND_URL}/evdealership?verified=true&email=${decoded.email}`);
  } catch (err) {
    console.error("❌ Email verification failed:", err.name, "-", err.message);
    return res.redirect(`${process.env.FRONTEND_URL}/evdealership?verified=false`);
  }
});


router.post('/user-confirmation', async (req, res) => {
  try {
    const applicationData = req.body;
    const result = await emailService.sendUserConfirmationEmail(applicationData);
    res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});



router.post('/admin-notification', async (req, res) => {
  try {
    const applicationData = req.body;

    // Check if email is verified
    const verified = await VerifiedEmail.findOne({ email: applicationData.email });
    if (!verified) {
      return res.status(400).json({
        success: false,
        message: 'Email not verified. Please verify before submitting.'
      });
    }

    const result = await emailService.sendAdminNotificationEmail(applicationData);
    res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/status-update', async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(400).send('Missing token.');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, status } = decoded;

    const application = await Application.findById(id);
    if (!application) return res.status(404).send('Application not found.');

    application.applicationStatus = status;
    application.reviewedAt = new Date();
    await application.save();

    await emailService.sendStatusUpdateEmail(application, status, null);

    // Dynamic confirmation message
    let message = '';
    if (status === 'approved') message = '✅ Application Approved Successfully!';
    else if (status === 'rejected') message = '❌ Application Declined Successfully!';
    else if (status === 'under_review') message = '📋 Marked as "Request More Info"';

    return res.send(`
      <div style="font-family: Arial; text-align: center; margin-top: 60px;">
        <h2>${message}</h2>
        <p>The applicant has been notified via email.</p>
      </div>
    `);
  } catch (error) {
    console.error('Error verifying status update token:', error);
    return res.status(400).send('Invalid or expired approval link.');
  }
});


router.post('/bulk', async (req, res) => {
  try {
    const { recipients, subject, template, data } = req.body;
    const results = await emailService.sendBulkEmail(recipients, subject, template, data);
    res.json({ success: true, results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
