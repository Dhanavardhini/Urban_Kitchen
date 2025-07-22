


// import React, { useState } from 'react';
// import axios from 'axios';
// import '../../Styles/BirthdayForm.css';

// function BirthdayForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     message: '',
//   });

//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
//       setSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         eventType: '',
//         message: '',
//       });
//     } catch (err) {
//       alert('Submission failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="custom-form-wrapper">
//       <form className="custom-form" onSubmit={handleSubmit}>
//         <h2 className="form-title">Book Your Event</h2>

//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your full name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="you@example.com"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>Phone</label>
//         <input
//           type="tel"
//           name="phone"
//           placeholder="9876543210"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />

//         <label>Event Type</label>
//         <select name="eventType" value={formData.eventType} onChange={handleChange} required>
//           <option value="" disabled>Select an option</option>
//           <option value="Birthday Celebrations">Birthday Celebrations</option>
//           <option value="Corporate Events">Corporate Events</option>
//           <option value="Family Gatherings">Family Gatherings</option>
//           <option value="Party Platters">Party Platters</option>
//         </select>

//         <label>Message</label>
//         <textarea
//           name="message"
//           placeholder="Any special instructions?"
//           value={formData.message}
//           onChange={handleChange}
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? 'Sending...' : 'Submit Request'}
//         </button>

//         {success && <p className="form-success">✅ Form submitted successfully!</p>}
//       </form>
//     </div>
//   );
// }

// export default BirthdayForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/BirthdayForm.css';

function BirthdayForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
      setError('');
    }, 3000); // 2 minutes = 120,000 ms

    return () => clearTimeout(timer);
  }, [success, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSuccess(false);
  //   setError('');

  //   setLoading(true);
  //   try {
  //     // await axios.post('http://localhost:5000/event-mail', formData);
  //     await axios.post(`${import.meta.env.VITE_BACKEND_URL}/event-mail`, formData);


  //     // await axios.post('https://urban-kitchen.onrender.com/event-mail', formData);

  //     setSuccess(true);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       eventType: '',
  //       message: '',
  //     });
  //   } catch (err) {
  //     setError('❌ Submission failed. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSuccess(false);
  setError('');
  setLoading(true);

  try {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/event-form`, formData);

    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: '',
    });
  } catch (err) {
    console.error(err);
    setError('❌ Submission failed. Please try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="custom-form-wrapper">
      <form className="custom-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Book Your Event</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="9876543210"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Event Type</label>
        <select name="eventType" value={formData.eventType} onChange={handleChange} required>
          <option value="" disabled>Select an option</option>
          <option value="Birthday Celebrations">Birthday Celebrations</option>
          <option value="Corporate Events">Corporate Events</option>
          <option value="Family Gatherings">Family Gatherings</option>
          <option value="Party Platters">Party Platters</option>
        </select>

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Any special instructions?"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit Request'}
        </button>

        {/* Bottom Message Boxes */}
        {success && <div className="message-box success">✅ Form submitted successfully!</div>}
        {error && <div className="message-box error">{error}</div>}
      </form>
    </div>
  );
}

export default BirthdayForm;

