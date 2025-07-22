


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../../styles/customerfrom.css';
import FL from '../form/Fl.jsx';
import Phone from '../form/Phone.jsx';
import Email from '../form/Email.jsx';
import SelectPlan from '../form/SelectPlan.jsx';
import Selectplanduration from '../form/SelectPlanduration.jsx';

function CustomerForm({ selectedItems = [], clearSelectedItems }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    planName: '',
    planDuration: '',
  });

  useEffect(() => {
    if (selectedItems.length > 0) {
      const selectedTitles = selectedItems.map(item => item.title).join(', ');
      setFormData(prev => ({ ...prev, planName: selectedTitles }));
    }
  }, [selectedItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, email, planDuration } = formData;

    if (!firstName || !lastName || !phone || !email || !planDuration) {
      toast.error('Please fill all required fields.', {
        position: 'top-left',
        autoClose: 3000,
      });
      return;
    }

    try {
      // const response = await fetch('http://localhost:5000/customer-form', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, selectedItems }),
      // });

const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/customer-form`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ...formData, selectedItems }),
});



      if (response.ok) {
        toast.success('Selected menu was sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          onClose: () => {
            navigate('/Meal/CustomerChoice');
          },
        });

        // Clear form data
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          planName: '',
          planDuration: '',
        });

        // Clear selected items in parent
        clearSelectedItems?.();
      } else {
        toast.error('Failed to send. Please try again.', {
          position: 'top-left',
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error('Network error. Try again later.', {
        position: 'top-left',
        autoClose: 3000,
      });
    }
  };

  const handleCancel = () => {
    navigate('/Meal/CustomerChoice');
  };

  return (
    <div className="submit-page-1">
      <div className="CustomerForm-container">
        <form onSubmit={handleSubmit} className="customer-form">
          <h2 className="text-center mb-4">Meal Subscription Form</h2>

          <div className="form-row">
            <FL
              firstName={formData.firstName}
              lastName={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <Phone value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-row">
            <Email value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-row">
            <SelectPlan value={formData.planName} onChange={handleChange} />
          </div>

          <div className="form-row">
            <Selectplanduration value={formData.planDuration} onChange={handleChange} />
          </div>

          <div className="form-buttons">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CustomerForm;
