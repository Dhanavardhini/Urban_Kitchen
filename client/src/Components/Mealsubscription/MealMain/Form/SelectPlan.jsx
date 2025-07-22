import React from 'react';
import TextField from '@mui/material/TextField';
import '../../../../Styles/Form/SelectPlan.css';

function SelectPlan({ value }) {
  return (
    <div className="select-plan-field">
      <TextField
        name="planName"
        label="Selected Plan"
        variant="outlined"
        fullWidth
        value={value}
        InputProps={{ readOnly: true }}
      />
    </div>
  );
}

export default SelectPlan;
