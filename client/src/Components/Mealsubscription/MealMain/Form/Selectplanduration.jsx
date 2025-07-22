// import React from 'react';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import '../../../../Styles/Form/Selectplanduration.css';


// function Selectplanduration({ value, onChange }) {
//   return (
//     <div className="select-plan-duration">
//        <TextField
//         select
//         name="planDuration"
//         label="Select Plan Duration"
//         value={value}
//         onChange={onChange}
//         fullWidth
//         required
//         SelectProps={{
//           MenuProps: {
//             disablePortal: true,
//             anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
//             transformOrigin: { vertical: 'top', horizontal: 'left' },
//             PaperProps: {
//               style: { maxHeight: 250, zIndex: 1301 }
//             }
//           }
//         }}
//       >
//         <MenuItem value="Weekly">Weekly</MenuItem>
//         <MenuItem value="Fortnightly">Fortnightly</MenuItem>
//         <MenuItem value="Monthly">Monthly</MenuItem>
//         <MenuItem value="3 Month">3 Month - Quarterly</MenuItem>
//         <MenuItem value="6 Month">6 Month - Half Yearly</MenuItem>
//         <MenuItem value="Annual">Annual Membership</MenuItem>
//       </TextField> 

      
//     </div>
//   );
// }

// export default Selectplanduration;


     

import React, { useState } from 'react';
import '../../../../Styles/Form/Selectplanduration.css';

function Selectplanduration({ value, onChange }) {
  const [focused, setFocused] = useState(false);

  const hasValue = value !== '';

  return (
    <div className={`select-field ${focused || hasValue ? 'focused' : ''}`}>
      <label htmlFor="planDuration" className="floating-label">
        Select Plan Duration
      </label>
      <select
        name="planDuration"
        id="planDuration"
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      >
        <option value="" disabled>-- Select Duration --</option>
        <option value="Weekly">Weekly</option>
        <option value="Fortnightly">Fortnightly</option>
        <option value="Monthly">Monthly</option>
        <option value="3 Month">3 Month - Quarterly</option>
        <option value="6 Month">6 Month - Half Yearly</option>
        <option value="Annual">Annual Membership</option>
      </select>
    </div>
  );
}

export default Selectplanduration;
