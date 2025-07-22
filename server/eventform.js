const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json());

// DEBUG: Check if environment variables are loaded
console.log('✅ ENV MAIL_USER:', process.env.MAIL_USER);
console.log('✅ ENV MAIL_PASS:', process.env.MAIL_PASS ? 'Loaded' : 'Missing');

// POST endpoint for event booking email
app.post('/event-mail', async (req, res) => {

  const { name, email, phone, eventType, message } = req.body;

  console.log('📨 Incoming request:', req.body);

  // Create nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log('✅ Gmail transporter verified.');
  } catch (verifyError) {
    console.error('❌ Transporter verification failed:', verifyError);
    return res.status(500).json({ success: false, error: 'Transporter verification failed' });
  }

  // Mail options
  const mailOptions = {
    from: `"${name} via Event Booking Form" <${process.env.MAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email,
    subject: '🎉 New Event Booking Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="text-align: center; color: #333;">🎉 New Event Booking Received</h2>
        <table style="width: 100%; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Name:</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr style="background-color: #f0f0f0;">
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Phone:</td>
            <td style="padding: 8px;">${phone}</td>
          </tr>
          <tr style="background-color: #f0f0f0;">
            <td style="padding: 8px; font-weight: bold;">Event Type:</td>
            <td style="padding: 8px;">${eventType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Message:</td>
            <td style="padding: 8px;">${message || 'N/A'}</td>
          </tr>
          <tr style="background-color: #f0f0f0;">
            <td style="padding: 8px; font-weight: bold;">Submitted At:</td>
            <td style="padding: 8px;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
        <p style="text-align: center; margin-top: 30px; font-size: 12px; color: #777;">
          This email was generated from the event booking form.
        </p>
      </div>
    `
  };

  // Send email
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Events Email  sent successfully:', result.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌Events Error sending email:', error.message, error);
    res.status(500).json({ success: false, error: 'Failed to Events send email' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Events Server  running on port ${PORT}`);
});
