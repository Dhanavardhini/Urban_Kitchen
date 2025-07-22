// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config(); // Load .env variables

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // POST route for WMForm (shared form)
// app.post('/common-form', async (req, res) => {
//   const { firstName, lastName, email, phone, planDuration } = req.body;

//   if (!firstName || !lastName || !email || !phone || !planDuration) {
//     return res.status(400).json({ message: 'Please fill all required fields.' });
//   }

//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `"${firstName} ${lastName} via Urban Kitchens" <${process.env.MAIL_USER}>`,
//     to: process.env.RECEIVER_EMAIL,
//     replyTo: email,
//     subject: '🧾 Meal Combo/Plan Request',
//     html: `
//       <div style="font-family: 'Segoe UI', Roboto, sans-serif; background: #f0f4f8; padding: 20px;">
//   <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden;">
//     <div style="background-color: #2ecc71; color: white; padding: 20px;">
//       <h2 style="margin: 0; font-size: 24px;">🍽️ New Meal Plan Request</h2>
//       <p style="margin: 5px 0 0; font-size: 14px;">Submitted via Urban Kitchens</p>
//     </div>
//     <div style="padding: 20px;">
//       <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
//         <tr>
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Name:</td>
//           <td style="padding: 10px; color: #34495e;">${firstName} ${lastName}</td>
//         </tr>
//         <tr style="background-color: #f9f9f9;">
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Email:</td>
//           <td style="padding: 10px; color: #34495e;">${email}</td>
//         </tr>
//         <tr>
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Phone:</td>
//           <td style="padding: 10px; color: #34495e;">${phone}</td>
//         </tr>
//         <tr style="background-color: #f9f9f9;">
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Plan Duration:</td>
//           <td style="padding: 10px; color: #34495e;">${planDuration}</td>
//         </tr>
//         <tr>
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Submitted At:</td>
//           <td style="padding: 10px; color: #34495e;">${new Date().toLocaleString()}</td>
//         </tr>
//       </table>
//     </div>
//     <div style="background-color: #ecf0f1; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d;">
//       This email was generated automatically by Urban Kitchens
//     </div>
//   </div>
// </div>

//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     console.error('Email sending failed:', error);
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const nodemailer = require('nodemailer');
// const router = express.Router();

// router.post('/', async (req, res) => {
//   const { firstName, lastName, email, phone, planDuration } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });

// //   const mailOptions = {
// //     from: `"${firstName} ${lastName} via Urban Kitchens" <${process.env.MAIL_USER}>`,
// //     to: process.env.RECEIVER_EMAIL,
// //     replyTo: email,
// //     subject: '🧾 Meal Combo/Plan Request',
// //     html: `
// //       <div style="font-family: Arial;">
// //         <h2>🍱 Meal Plan Request Details</h2>
// //         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
// //         <p><strong>Email:</strong> ${email}</p>
// //         <p><strong>Phone:</strong> ${phone}</p>
// //         <p><strong>Plan Duration:</strong> ${planDuration}</p>
// //         <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
// //       </div>
// //     `,
// //   };

//   const mailOptions = {
//     from: `"${firstName} ${lastName} via Urban Kitchens" <${process.env.MAIL_USER}>`,
//     to: process.env.RECEIVER_EMAIL,
//     replyTo: email,
//     subject: '🧾 Meal Combo/Plan Request',
//     html: `
//       <div style="font-family: 'Segoe UI', Roboto, sans-serif; background: #f0f4f8; padding: 20px;">
//   <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden;">
//     <div style="background-color: #2ecc71; color: white; padding: 20px;">
//       <h2 style="margin: 0; font-size: 24px;">🍽️ New Meal Plan Request</h2>
//       <p style="margin: 5px 0 0; font-size: 14px;">Submitted via Urban Kitchens</p>
//     </div>
//     <div style="padding: 20px;">
//       <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
//         <tr>
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Name:</td>
//           <td style="padding: 10px; color: #34495e;">${firstName} ${lastName}</td>
//         </tr>
//         <tr style="background-color: #f9f9f9;">
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Email:</td>
//           <td style="padding: 10px; color: #34495e;">${email}</td>
//         </tr>
//         <tr>
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Phone:</td>
//           <td style="padding: 10px; color: #34495e;">${phone}</td>
//         </tr>
//         <tr style="background-color: #f9f9f9;">
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Plan Duration:</td>
//           <td style="padding: 10px; color: #34495e;">${planDuration}</td>
//         </tr>
//         <tr>
//           <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Submitted At:</td>
//           <td style="padding: 10px; color: #34495e;">${new Date().toLocaleString()}</td>
//         </tr>
//       </table>
//     </div>
//     <div style="background-color: #ecf0f1; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d;">
//       This email was generated automatically by Urban Kitchens
//     </div>
//   </div>
// </div>

//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Meal plan request sent successfully.' });
//   } catch (err) {
//     console.error('Email error:', err);
//     res.status(500).json({ message: 'Failed to send email.' });
//   }
// });

// module.exports = router;


const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, planDuration } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName} via Urban Kitchens" <${process.env.MAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email,
    subject: '🧾 Meal Combo/Plan Request',
    html: `
      <div style="font-family: 'Segoe UI', Roboto, sans-serif; background: #f0f4f8; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden;">
          <div style="background-color: #2ecc71; color: white; padding: 20px;">
            <h2 style="margin: 0; font-size: 24px;">🍽️ New Meal Plan Request</h2>
            <p style="margin: 5px 0 0; font-size: 14px;">Submitted via Urban Kitchens</p>
          </div>
          <div style="padding: 20px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Name:</td>
                <td style="padding: 10px; color: #34495e;">${firstName} ${lastName}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Email:</td>
                <td style="padding: 10px; color: #34495e;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Phone:</td>
                <td style="padding: 10px; color: #34495e;">${phone}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Plan Duration:</td>
                <td style="padding: 10px; color: #34495e;">${planDuration}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #2c3e50;">Submitted At:</td>
                <td style="padding: 10px; color: #34495e;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #ecf0f1; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d;">
            This email was generated automatically by Urban Kitchens
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Meal plan request sent successfully.' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

module.exports = router;
