import React from 'react';
import TextField from '@mui/material/TextField';
import '../../../../Styles/Form/Email.css';

function Email({ value, onChange }) {
  return (
    <div className="email-field">
      <TextField
        name="email"
        label="Email Address"
        type="email"
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Email;
