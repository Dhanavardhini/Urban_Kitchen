// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config(); // .env for MAIL_USER, MAIL_PASS

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/send-franchise-request', async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.MAIL_USER, // Your Gmail
//       pass: process.env.MAIL_PASS, // App Password
//     },
//   });

//   try {
//     await transporter.verify();
//     console.log('✅ Email transporter ready');
//   } catch (err) {
//     console.error('❌ Transporter verify failed:', err);
//     return res.status(500).json({ success: false, error: 'Transporter verification failed' });
//   }

//   const mailOptions = {
//     from: `"${name} via Franchise Form" <${process.env.MAIL_USER}>`,
//     to: process.env.RECEIVER_EMAIL || process.env.MAIL_USER, // Your inbox
//     replyTo: email, // So you can reply to user directly
//     subject: '📩 New Franchise Request Submitted',
//     // html: `
//     //   <h2>New Franchise Request</h2>
//     //   <p><strong>Name:</strong> ${name}</p>
//     //   <p><strong>Email:</strong> ${email}</p>
//     //   <p><strong>Phone:</strong> ${phone}</p>
//     //   <p><strong>Message:</strong><br>${message || 'N/A'}</p>
//     //   <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
//     // `,
// html: `
//   <div style="max-width: 620px; margin: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #ffffff; border: 1px solid #e6e6e6; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.05); overflow: hidden;">
//     <div style="background-color: #4a90e2; padding: 20px 30px; color: white;">
//       <h2 style="margin: 0; font-size: 22px;">📬 New Franchise Request Received</h2>
//     </div>

//     <div style="padding: 30px;">
//       <table style="width: 100%; font-size: 15px; color: #333;">
//         <tr>
//           <td style="padding: 10px 0; font-weight: 600; width: 140px;">Name:</td>
//           <td>${name}</td>
//         </tr>
//         <tr>
//           <td style="padding: 10px 0; font-weight: 600;">Email:</td>
//           <td>${email}</td>
//         </tr>
//         <tr>
//           <td style="padding: 10px 0; font-weight: 600;">Phone:</td>
//           <td>${phone}</td>
//         </tr>
//         <tr>
//           <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Message:</td>
//           <td style="white-space: pre-line;">${message || 'N/A'}</td>
//         </tr>
//         <tr>
//           <td style="padding: 10px 0; font-weight: 600;">Submitted At:</td>
//           <td>${new Date().toLocaleString()}</td>
//         </tr>
//       </table>
//     </div>

//     <div style="background-color: #f5f5f5; padding: 15px 30px; font-size: 13px; color: #666;">
//       This message was submitted via your website's Franchise Enquiry form.
//     </div>
//   </div>
// `


//   };



//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('✅ Franchise request email sent');
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('❌ Failed to send email:', error);
//     res.status(500).json({ success: false, error: 'Failed to send email' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, location, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // const mailOptions = {
  //   from: `"${name} via Urban Kitchens" <${process.env.MAIL_USER}>`,
  //   to: process.env.RECEIVER_EMAIL,
  //   replyTo: email,
  //   subject: '🏪 Franchise Request',
  //   html: `
  //     <div style="font-family: Arial;">
  //       <h2>🏢 Franchise Inquiry</h2>
  //       <p><strong>Name:</strong> ${name}</p>
  //       <p><strong>Email:</strong> ${email}</p>
  //       <p><strong>Phone:</strong> ${phone}</p>
  //       <p><strong>Location:</strong> ${location}</p>
  //       <p><strong>Message:</strong> ${message}</p>
  //     </div>
  //   `,
  // };

    const mailOptions = {
    from: `"${name} via Franchise Form" <${process.env.MAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL || process.env.MAIL_USER, // Your inbox
    replyTo: email, // So you can reply to user directly
    subject: '📩 New Franchise Request Submitted',
    // html: `
    //   <h2>New Franchise Request</h2>
    //   <p><strong>Name:</strong> ${name}</p>
    //   <p><strong>Email:</strong> ${email}</p>
    //   <p><strong>Phone:</strong> ${phone}</p>
    //   <p><strong>Message:</strong><br>${message || 'N/A'}</p>
    //   <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    // `,
html: `
  <div style="max-width: 620px; margin: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #ffffff; border: 1px solid #e6e6e6; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.05); overflow: hidden;">
    <div style="background-color: #4a90e2; padding: 20px 30px; color: white;">
      <h2 style="margin: 0; font-size: 22px;">📬 New Franchise Request Received</h2>
    </div>

    <div style="padding: 30px;">
      <table style="width: 100%; font-size: 15px; color: #333;">
        <tr>
          <td style="padding: 10px 0; font-weight: 600; width: 140px;">Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600;">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600;">Phone:</td>
          <td>${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Message:</td>
          <td style="white-space: pre-line;">${message || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600;">Submitted At:</td>
          <td>${new Date().toLocaleString()}</td>
        </tr>
      </table>
    </div>

    <div style="background-color: #f5f5f5; padding: 15px 30px; font-size: 13px; color: #666;">
      This message was submitted via your website's Franchise Enquiry form.
    </div>
  </div>
`


  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Franchise request sent successfully.' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

module.exports = router;
