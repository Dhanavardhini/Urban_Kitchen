import React from 'react';
import TextField from '@mui/material/TextField';
import '../../../../styles/form/phone.css';

function Phone({ value, onChange }) {
  return (
    <div className="phone-field">
      <TextField
        name="phone"
        label="Phone Number"
        type="tel"
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Phone;
