// import React, { useState, useEffect } from 'react';
// import "../../../../Styles/NutritionForm.css";

// function NutritionForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     email: '',
//     dietaryGoal: '',
//     allergies: '',
//     preferredFoods: '',
//   });

//   const [successPopup, setSuccessPopup] = useState(false);
//   const [errorPopup, setErrorPopup] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!formData.name || !formData.age || !formData.email || !formData.dietaryGoal) {
//       setErrorPopup(true);
//       setTimeout(() => setErrorPopup(false), 3000);
//       return;
//     }

//     console.log(formData);
//     setSuccessPopup(true);
//     setTimeout(() => setSuccessPopup(false), 3000);

//     setFormData({
//       name: '',
//       age: '',
//       email: '',
//       dietaryGoal: '',
//       allergies: '',
//       preferredFoods: '',
//     });
//   };

//   return (
//     <div className="NutritionForm-wrapper">
//       <h2 className="NutritionForm-title">Tell Us About Your Nutrition Needs</h2>

//       {successPopup && (
//         <div className="NutritionForm-toast-success">✅ Form sent successfully!</div>
//       )}
//       {errorPopup && (
//         <div className="NutritionForm-toast-error">❌ Please fill all required fields!</div>
//       )}

//       <form onSubmit={handleSubmit} className="NutritionForm-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="age"
//           placeholder="Your Age"
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="dietaryGoal"
//           placeholder="What is your dietary goal?"
//           value={formData.dietaryGoal}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="allergies"
//           placeholder="Any known allergies?"
//           value={formData.allergies}
//           onChange={handleChange}
//         />

//         <textarea
//           name="preferredFoods"
//           placeholder="Preferred foods or cuisines?"
//           value={formData.preferredFoods}
//           onChange={handleChange}
//         />

//         <button type="submit" className="NutritionForm-submitBtn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default NutritionForm;


import React, { useState } from 'react';
import "../../../../Styles/NutritionForm.css";

function NutritionForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    dietaryGoal: '',
    allergies: '',
    preferredFoods: '',
  });

  const [toast, setToast] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allFilled = formData.name && formData.age && formData.email && formData.dietaryGoal;

    try {
      if (!allFilled) {
        setToast({ type: 'error', message: '❌ Please fill all required fields!' });
      } else {
        const response = await fetch("http://localhost:5000/api/nutrition", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setToast({ type: 'success', message: '✅ Form sent successfully!' });
        } else {
          setToast({ type: 'server', message: '⚠️ Server error! Please try again.' });
        }
      }
    } catch (err) {
      setToast({ type: 'server', message: '⚠️ Server error! Please try again.' });
    }

    // Reset form after submission or error
    setFormData({
      name: '',
      age: '',
      email: '',
      dietaryGoal: '',
      allergies: '',
      preferredFoods: '',
    });

    // Auto-hide toast
    setTimeout(() => setToast({ type: '', message: '' }), 3000);
  };

  return (
    <div className="NutritionForm-wrapper">
      <h2 className="NutritionForm-title">Personalized Nutrition Form</h2>

      {toast.message && (
        <div
          className={
            toast.type === 'success'
              ? 'NutritionForm-toast-success'
              : 'NutritionForm-toast-error'
          }
        >
          {toast.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="NutritionForm-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="dietaryGoal"
          placeholder="What is your dietary goal?"
          value={formData.dietaryGoal}
          onChange={handleChange}
        />
        <textarea
          name="allergies"
          placeholder="Any known allergies?"
          value={formData.allergies}
          onChange={handleChange}
        />
        <textarea
          name="preferredFoods"
          placeholder="Preferred foods or cuisines?"
          value={formData.preferredFoods}
          onChange={handleChange}
        />
        <button type="submit" className="NutritionForm-submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default NutritionForm;
