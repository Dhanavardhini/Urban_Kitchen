


// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// // Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

// // Route: POST /customer-form
// app.post('/customer-form', async (req, res) => {
//   const {
//     firstName,
//     lastName,
//     email,
//     phone,
//     planName,
//     planDuration,
//     selectedItems = [],
//   } = req.body;

//   try {
//     const itemList = selectedItems.length
//       ? selectedItems.map((item, i) => `<li>${i + 1}. ${item.title || 'Unnamed Item'}</li>`).join('')
//       : '<li>No items selected</li>';

// const mailOptions = {
//   from: `"${firstName} ${lastName} via Urban Kitchens" <${process.env.MAIL_USER}>`,
//   to: process.env.RECEIVER_EMAIL,
//   replyTo: email,
//   subject: '🧾 Individual Items Order Request',
//   html: `
//     <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8f9fa; padding: 30px;">
//       <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
//         <div style="background: #2c3e50; color: white; padding: 20px;">
//           <h2 style="margin: 0; font-size: 22px;">🧾 Urban Kitchens - Individual Items Order</h2>
//           <p style="margin: 5px 0 0; font-size: 14px;">Order summary submitted by ${firstName} ${lastName}</p>
//         </div>
        
//         <div style="padding: 25px;">
//           <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #333;">
//             <tr><td style="padding: 8px;"><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
//             <tr><td style="padding: 8px;"><strong>Email:</strong></td><td>${email}</td></tr>
//             <tr><td style="padding: 8px;"><strong>Phone:</strong></td><td>${phone}</td></tr>
//             <tr><td style="padding: 8px;"><strong>Plan Name:</strong></td><td>${planName || 'Not selected'}</td></tr>
//             <tr><td style="padding: 8px;"><strong>Duration:</strong></td><td>${planDuration || 'N/A'}</td></tr>
//             <tr><td style="padding: 8px; vertical-align: top;"><strong>Ordered Items:</strong></td>
//               <td>
//                 <ul style="margin: 0; padding-left: 18px; list-style: square; color: #007bff;">
//                   ${itemList}
//                 </ul>
//               </td>
//             </tr>
//             <tr><td style="padding: 8px;"><strong>Submitted:</strong></td><td>${new Date().toLocaleString()}</td></tr>
//           </table>
//         </div>

//         <div style="background: #f1f1f1; text-align: center; padding: 15px; font-size: 13px; color: #777;">
//           Thank you for choosing <strong>Urban Kitchens</strong>! 🍽️<br/>
//           <em>This is an automated email confirmation.</em>
//         </div>
//       </div>
//     </div>
//   `,
// };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: 'Mail sent successfully' });
//   } catch (error) {
//     console.error('❌ Error sending mail:', error);
//     res.status(500).json({ success: false, message: 'Server error. Mail not sent.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });




// const express = require('express');
// const nodemailer = require('nodemailer');
// const router = express.Router();

// router.post('/', async (req, res) => {
//   const { name, email, phone, selectedItems } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });

//   // const mailOptions = {
//   //   from: `"${name} via Urban Kitchens" <${process.env.MAIL_USER}>`,
//   //   to: process.env.RECEIVER_EMAIL,
//   //   replyTo: email,
//   //   subject: '🥗 New Customer Meal Request',
//   //   html: `
//   //     <div style="font-family: Arial;">
//   //       <h2>🍽️ Customer Meal Request</h2>
//   //       <p><strong>Name:</strong> ${name}</p>
//   //       <p><strong>Email:</strong> ${email}</p>
//   //       <p><strong>Phone:</strong> ${phone}</p>
//   //       <p><strong>Selected Items:</strong> ${selectedItems.join(', ')}</p>
//   //     </div>
//   //   `,
//   // };
//   const mailOptions = {
//   from: `"${firstName} ${lastName} via Urban Kitchens" <${process.env.MAIL_USER}>`,
//   to: process.env.RECEIVER_EMAIL,
//   replyTo: email,
//   subject: '🧾 Individual Items Order Request',
//   html: `
//     <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8f9fa; padding: 30px;">
//       <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
//         <div style="background: #2c3e50; color: white; padding: 20px;">
//           <h2 style="margin: 0; font-size: 22px;">🧾 Urban Kitchens - Individual Items Order</h2>
//           <p style="margin: 5px 0 0; font-size: 14px;">Order summary submitted by ${firstName} ${lastName}</p>
//         </div>
        
//         <div style="padding: 25px;">
//           <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #333;">
//             <tr><td style="padding: 8px;"><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
//             <tr><td style="padding: 8px;"><strong>Email:</strong></td><td>${email}</td></tr>
//             <tr><td style="padding: 8px;"><strong>Phone:</strong></td><td>${phone}</td></tr>
//             <tr><td style="padding: 8px;"><strong>Plan Name:</strong></td><td>${planName || 'Not selected'}</td></tr>
//             <tr><td style="padding: 8px;"><strong>Duration:</strong></td><td>${planDuration || 'N/A'}</td></tr>
//             <tr><td style="padding: 8px; vertical-align: top;"><strong>Ordered Items:</strong></td>
//               <td>
//                 <ul style="margin: 0; padding-left: 18px; list-style: square; color: #007bff;">
//                   ${itemList}
//                 </ul>
//               </td>
//             </tr>
//             <tr><td style="padding: 8px;"><strong>Submitted:</strong></td><td>${new Date().toLocaleString()}</td></tr>
//           </table>
//         </div>

//         <div style="background: #f1f1f1; text-align: center; padding: 15px; font-size: 13px; color: #777;">
//           Thank you for choosing <strong>Urban Kitchens</strong>! 🍽️<br/>
//           <em>This is an automated email confirmation.</em>
//         </div>
//       </div>
//     </div>
//   `,
// };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Customer meal request sent successfully.' });
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
  const { name, email, phone, address, selectedItems } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const itemList = selectedItems?.map(item => `<li>${item}</li>`).join('') || '';

   const mailOptions = {
    from: `"${firstName} ${lastName} via Urban Kitchens" <${process.env.MAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email,
    subject: '🧾 Individual Items Order Request',
    html: `
      <div style="font-family: 'Segoe UI'; background: #f8f9fa; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <div style="background: #2c3e50; color: white; padding: 20px;">
            <h2 style="margin: 0;">🧾 Urban Kitchens - Individual Items Order</h2>
            <p>Order by ${firstName} ${lastName}</p>
          </div>
          <div style="padding: 25px;">
            <table style="width: 100%;">
              <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
              <tr><td><strong>Plan:</strong></td><td>${planName || 'N/A'}</td></tr>
              <tr><td><strong>Duration:</strong></td><td>${planDuration || 'N/A'}</td></tr>
              <tr><td><strong>Items:</strong></td><td><ul>${itemList}</ul></td></tr>
              <tr><td><strong>Date:</strong></td><td>${new Date().toLocaleString()}</td></tr>
            </table>
          </div>
          <div style="background: #f1f1f1; text-align: center; padding: 15px; font-size: 13px; color: #777;">
            Thank you for choosing <strong>Urban Kitchens</strong>! 🍽️<br/>
            <em>This is an automated confirmation email.</em>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Customer form sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send customer form.' });
  }
});

module.exports = router;
