// import React, { useState, useEffect } from 'react';
// import '../../../Styles/FranchisePopup.css';

// const FranchisePopup = ({ toggleForm }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [showToast, setShowToast] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.endsWith('@gmail.com')) newErrors.email = 'Only Gmail addresses allowed';
//     if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 10 digits';
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData)
//         });
//         if (response.ok) {
//           setShowToast(true);  // Show toast
//         }
//       } catch {
//         alert('Something went wrong. Please try again later.');
//       }
//     }
//   };

//   // Close popup after toast disappears
//   useEffect(() => {
//     if (showToast) {
//       const timer = setTimeout(() => {
//         setShowToast(false);
//         toggleForm(); // Close the popup
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showToast, toggleForm]);

//   return (
//     <>
//       {showToast && (
//         <div className="toast-notification">
//           ✅ Thank you! Your request has been submitted.
//         </div>
//       )}

//       {!showToast && (
//         <div className="franchise-form-overlay" onClick={toggleForm}>
//           <div className="franchise-form-popup" onClick={(e) => e.stopPropagation()}>
//             <h3>Franchise Application Form</h3>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Full Name
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   required
//                 />
//                 {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
//               </label>

//               <label>
//                 Email Address
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="example@gmail.com"
//                   required
//                 />
//                 {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
//               </label>

//               <label>
//                 Phone Number
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   maxLength="10"
//                   placeholder="9876543210"
//                   required
//                 />
//                 {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
//               </label>

//               <label>
//                 Message
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us about your location and interest..."
//                   rows="4"
//                   required
//                 ></textarea>
//               </label>

//               <button type="submit">Submit</button>
//               <button type="button" onClick={toggleForm} className="close-btn">Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default FranchisePopup;


import React, { useState, useEffect } from 'react';
import '../../../Styles/FranchisePopup.css';

const FranchisePopup = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!formData.email.endsWith('@gmail.com')) {
      newErrors.email = 'Only Gmail addresses are accepted.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowErrorToast(true);
    } else {
      try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        const response = await fetch('http://localhost:5000/send-franchise-request', {

          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setShowToast(true);
        }
      } catch {
        alert('Something went wrong. Please try again later.');
      }
    }
  };

  // Hide success toast and close popup
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        toggleForm();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast, toggleForm]);

  // Hide error toast
  useEffect(() => {
    if (showErrorToast) {
      const timer = setTimeout(() => setShowErrorToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showErrorToast]);

  return (
    <>
      {/* Success message */}
      {showToast && (
        <div className="toast-notification top-right">
          ✅ Thank you! Your request has been submitted.
        </div>
      )}

      {/* Error message */}
      {showErrorToast && (
        <div className="toast-notification top-left error">
          ⚠️ Please fix the errors in the form before submitting.
        </div>
      )}

      {/* Form */}
      {!showToast && (
        <div className="franchise-form-overlay" onClick={toggleForm}>
          <div className="franchise-form-popup" onClick={(e) => e.stopPropagation()}>
            <h3>Franchise Application Form</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
              </label>

              <label>
                Email Address (Gmail only)
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Tell us your location and interest..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>

              <button type="submit">Submit</button>
              <button type="button" onClick={toggleForm} className="close-btn">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FranchisePopup;
