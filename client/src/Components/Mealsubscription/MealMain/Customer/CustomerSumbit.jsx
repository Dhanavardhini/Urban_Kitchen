

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import '../../../../Styles/CustomerSumbit.css';
// import CustomerForm from './CustomerFrom';

// function CustomerSumbit() {
//   const location = useLocation();
//   const { selectedItems } = location.state || { selectedItems: [] };

//   return (
//     <>
//       <div className="submit-page">
//         <h2 className="text-center mb-4">Your Selected Meals</h2>
//         <div className="container">
//           <div className="row">
//             {selectedItems.length > 0 ? (
//               selectedItems.map((item) => (
//                 <div key={item.id} className="col-12 col-sm-6 col-md-3 mb-4">
//                   <div className="choice-card">
//                     <img src={item.image} alt={item.title} className="card-img-top" />
//                     <div className="card-body">
//                       {item.category && (
//                         <p className="meal-category mb-3">
//                           <strong>Meal Type:</strong> {item.category}
//                         </p>
//                       )}
//                       <h5 className="meal-title">{item.title}</h5>
//                       <p className="meal-desc">{item.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center">No meals selected.</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <CustomerForm />
//     </>
//   );
// }

// export default CustomerSumbit;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import '../../../../Styles/CustomerSumbit.css';
// import CustomerForm from './CustomerFrom';

// function CustomerSumbit() {
//   const location = useLocation();
//   const initialSelected = location.state?.selectedItems || [];

//   const [selectedItems, setSelectedItems] = useState(initialSelected);

//   const clearSelectedItems = () => {
//     setSelectedItems([]); // clear after submit
//   };

//   return (
//     <>
//       <div className="submit-page">
//         <h2 className="text-center mb-4">Your Selected Meals</h2>
//         <div className="container">
//           <div className="row">
//             {selectedItems.length > 0 ? (
//               selectedItems.map((item) => (
//                 <div key={item.id} className="col-12 col-sm-6 col-md-3 mb-4">
//                   <div className="choice-card">
//                     <img src={item.image} alt={item.title} className="card-img-top" />
//                     <div className="card-body">
//                       {item.category && (
//                         <p className="meal-category mb-3">
//                           <strong>Meal Type:</strong> {item.category}
//                         </p>
//                       )}
//                       <h5 className="meal-title">{item.title}</h5>
//                       <p className="meal-desc">{item.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center">No meals selected.</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <CustomerForm selectedItems={selectedItems} clearSelectedItems={clearSelectedItems} />
//     </>
//   );
// }

// export default CustomerSumbit;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import '../../../../Styles/CustomerSumbit.css';
// import CustomerForm from './CustomerFrom';

// function CustomerSumbit() {
//   const location = useLocation();
//   const initialSelected = location.state?.selectedItems || [];

//   const [selectedItems, setSelectedItems] = useState(initialSelected);

//   const clearSelectedItems = () => {
//     setSelectedItems([]); // clear after submit
//   };

//   return (
//     <>
//       <div className="submit-page">
//         <h2 className="text-center mb-4">Your Selected Meals</h2>
//         <div className="container">
//           <div className="row">
//             {selectedItems.length > 0 ? (
//               selectedItems.map((item) => (
//                 // <div key={item.id} className="col-12 col-sm-6 col-md-3 mb-4">
//                <div key={item.id} className="col-12 col-sm-6 col-md-3 custom-responsive mb-4">


//                   <div className="choice-card">
//                     <img src={item.image} alt={item.title} className="card-img-top" />
//                     <div className="card-body">
//                       {item.category && (
//                         <p className="meal-category mb-3">
//                           <strong>Meal Type:</strong> {item.category}
//                         </p>
//                       )}
//                       <h5 className="meal-title">{item.title}</h5>
//                       <p className="meal-desc">{item.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center">No meals selected.</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <CustomerForm selectedItems={selectedItems} clearSelectedItems={clearSelectedItems} />
//     </>
//   );
// }

// export default CustomerSumbit;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../../../styles/customersumbit.css';
import CustomerForm from './CustomerFrom.jsx';

function CustomerSumbit() {
  const location = useLocation();
  const initialSelected = location.state?.selectedItems || [];

  const [selectedItems, setSelectedItems] = useState(initialSelected);

  const clearSelectedItems = () => {
    setSelectedItems([]); // clear after submit
  };

  return (
    <>
      <div className="submit-page">
        <h2 className="text-center mb-4">Your Selected Meals</h2>
        <div className="card-grid">
          {selectedItems.length > 0 ? (
            selectedItems.map((item) => (
              <div key={item.id} className="choice-card">
                <img src={item.image} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  {item.category && (
                    <p className="meal-category mb-2">
                      <strong>Meal Type:</strong> {item.category}
                    </p>
                  )}
                  <h5 className="meal-title">{item.title}</h5>
                  <p className="meal-desc">{item.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No meals selected.</p>
          )}
        </div>
      </div>
      <CustomerForm selectedItems={selectedItems} clearSelectedItems={clearSelectedItems} />
    </>
  );
}

export default CustomerSumbit;
