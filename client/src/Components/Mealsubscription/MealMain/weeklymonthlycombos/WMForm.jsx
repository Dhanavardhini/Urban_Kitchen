


import React, { useState } from 'react';
import '../../../../Styles/WMForm.css';
import FL from '../form/FL';
import Email from '../form/Email';
import Phone from '../form/Phone';
import SelectPlanDuration from '../form/Selectplanduration';

function WMForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    planDuration: '',
  });

  const [toast, setToast] = useState({ type: '', message: '', visible: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempData = { ...formData };
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      planDuration: '',
    });

    try {
      const formDataToSend = new FormData();
      Object.keys(tempData).forEach(key => {
        formDataToSend.append(key, tempData[key]);
      });

//       const res = await fetch('http://localhost:5000/common-form', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(formData),
// });
const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/common-form`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

      if (res.ok) {
        showToast('success', '✔️ Menu was sent successfully!');
      } else {
        showToast('error', '❌ Failed to send menu. Try again.');
      }
    } catch (err) {
      showToast('error', '❌ Something went wrong.');
    }
  };

  const showToast = (type, message) => {
    setToast({ type, message, visible: true });
    setTimeout(() => setToast({ ...toast, visible: false }), 4000);
  };

  return (
    <div className="WMForm-wrapper">
      <h2 className="WMForm-heading">Meal Subscription Form</h2>

      {toast.visible && (
        <div className={`WMForm-toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      <form className="WMForm-form" onSubmit={handleSubmit}>
        <FL
          firstName={formData.firstName}
          lastName={formData.lastName}
          onChange={handleChange}
        />
        <Email value={formData.email} onChange={handleChange} />
        <Phone value={formData.phone} onChange={handleChange} />
        <SelectPlanDuration value={formData.planDuration} onChange={handleChange} />
        <button type="submit" className="WMForm-submit">Submit</button>
      </form>
    </div>
  );
}

export default WMForm;
