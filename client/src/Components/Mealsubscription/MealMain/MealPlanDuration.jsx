// import React from 'react';
// import '../../../Styles/MealPlanDuration.css';

// const durations = [
//   'Weekly',
//   'Fortnightly',
//   'Monthly',
//   '3 Month - Quarterly',
//   '6 Month - Half Yearly',
//   'Annual Membership'
// ];

// function MealPlanDuration() {
//   return (
//     <div className="planduration-section py-1 text-center">
//       <h2 className="planduration-title">Plan Duration</h2>
//       <p className="planduration-subtitle">Pick a plan that matches your schedule and lifestyle.</p>

//       <div className="container mt-4">
//         <div className="row justify-content-center">
//           {durations.map((item, index) => (
//             <div key={index} className="col-12 col-md-4 mb-4 d-flex">
//               <div className="planduration-card w-100">
//                 <div className="planduration-icon mb-3">
//                   <span>{index + 1}</span>
//                 </div>
//                 <h5 className="planduration-card-title">{item}</h5>
//                 <p className="planduration-card-desc">
//                   All above plans can be availed on this duration.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MealPlanDuration;


import React from 'react';
import '../../../styles/mealplanduration.css';

const durations = [
  'Weekly',
  'Fortnightly',
  'Monthly',
  '3 Month - Quarterly',
  '6 Month - Half Yearly',
  'Annual Membership'
];

function MealPlanDuration() {
  return (
    <div className="planduration-section py-1 text-center">
      <h2 className="planduration-title">Plan Duration</h2>
      <p className="planduration-subtitle">Pick a plan that matches your schedule and lifestyle.</p>

      <div className="planduration-grid-container mt-4">
        {durations.map((item, index) => (
          <div key={index} className="planduration-card">
            <div className="planduration-icon mb-3">
              <span>{index + 1}</span>
            </div>
            <h5 className="planduration-card-title">{item}</h5>
            <p className="planduration-card-desc">
              All above plans can be availed on this duration.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealPlanDuration;
