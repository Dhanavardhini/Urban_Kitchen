// import React from 'react';
// import TextField from '@mui/material/TextField';
// import '../../../../Styles/Form/FL.css';

// function FL({ firstName, lastName, onChange }) {
//   return (
//     <div className="fl-row">
//       <TextField
//         name="firstName"
//         label="First Name"
//         variant="outlined"
//         fullWidth
//         value={firstName}
//         onChange={onChange}
//         required
//       />
//       <TextField
//         name="lastName"
//         label="Last Name"
//         variant="outlined"
//         fullWidth
//         value={lastName}
//         onChange={onChange}
//         required
//       />
//     </div>
//   );
// }

// export default FL;


import React from 'react';
import TextField from '@mui/material/TextField';
import '../../../../Styles/Form/FL.css';

function FL({ firstName, lastName, onChange }) {
  return (
    <div className="fl-row">
      <TextField
        name="firstName"
        label="First Name"
        variant="outlined"
        fullWidth
        value={firstName}
        onChange={onChange}
        required
      />
      <TextField
        name="lastName"
        label="Last Name"
        variant="outlined"
        fullWidth
        value={lastName}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default FL;
