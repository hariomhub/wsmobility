const express=require('express');
const cloudinary=require('cloudinary').v2;
const router=express.Router();
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

router.get('/signature', async (req, res) => {
  try {
    const { folder } = req.query;
    const upload_preset = process.env.CLOUDINARY_UPLOAD_PRESET;
    const timestamp = Math.round(new Date().getTime() / 1000);
    const paramsToSign = { timestamp, folder, upload_preset };

    // 🧠 Debug log
    console.log('🔐 Generating signature for:', paramsToSign);

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET
    );

    console.log('✅ Signature generated:', signature);

    res.json({
      timestamp,
      signature,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      upload_preset,
      folder
    });
  } catch (error) {
    console.error('❌ Error generating Cloudinary signature:', error);
    res.status(500).json({ success: false, message: 'Error generating signature' });
  }
});

module.exports = router;