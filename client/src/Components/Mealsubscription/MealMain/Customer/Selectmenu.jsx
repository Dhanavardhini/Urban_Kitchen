import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const planDurations = [
  { value: 'weekly', label: 'Weekly' },
  { value: 'fortnightly', label: 'Fortnightly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: '3 Month - Quarterly' },
  { value: 'halfYearly', label: '6 Month - Half Yearly' },
  { value: 'annual', label: 'Annual Membership Plans' },
];

export default function Selectmenu() {
  const [plan, setPlan] = React.useState('');

  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '72ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-plan"
          select
          label="Select Plan Duration"
          value={plan}
          onChange={handleChange}
          helperText="Please select your subscription plan"
        >
          {planDurations.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
