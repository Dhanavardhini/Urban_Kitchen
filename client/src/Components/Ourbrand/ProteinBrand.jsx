// import React from 'react';
// import '../../Styles/ProteinBrand.css';
// import proteinLogo from '../../assets/a.jpg';
// import proteinImage from '../../assets/protienbrand.jpg';

// function ProteinBrand() {
//   return (
//     <section className="protein-brand">
//       <div className="protein-right">
//         <img src={proteinImage} alt="Protein Xclusive Showcase" className="protein-main-image" />
//       </div>

//       <div className="protein-left">
//         <h2 className="protein-title-h">Protein Xclusive</h2>
//         <img src={proteinLogo} alt="Protein Xclusive Logo" className="protein-logo" />
//         <p className="protein-description">
//           Protein Xclusive is crafted for fitness lovers and health-conscious foodies. We serve high-protein meals, shakes, and snacks
//           that fuel your body and support your active lifestyle. Whether you're looking to build muscle, stay lean, or just eat clean, 
//           our flavorful, nutrient-packed menu helps you stay on track — one bite at a time.
//         </p>
//         <button className="protein-button-h">Explore Menu</button>
//       </div>
//     </section>
//   );
// }

// export default ProteinBrand;


import React from 'react';
import '../../Styles/ProteinBrand.css';
import proteinLogo from '../../assets/px-logo.png';
import proteinImage from '../../assets/protienbrand.jpg';

function ProteinBrand() {
  return (
    <section className="protein-brand">
      <div className="protein-right">
        <img
          src={proteinImage}
          alt="Protein Xclusive Showcase"
          className="protein-main-image"
        />
      </div>

      <div className="protein-left">
        <h2 className="protein-title-h">Protein Xclusive</h2>
        <img
          src={proteinLogo}
          alt="Protein Xclusive Logo"
          className="protein-logo"
        />
        <p className="protein-description">
          Protein Xclusive is crafted for fitness lovers and health-conscious
          foodies. We serve high-protein meals, shakes, and snacks that fuel
          your body and support your active lifestyle. Whether you're looking
          to build muscle, stay lean, or just eat clean, our flavorful,
          nutrient-packed menu helps you stay on track — one bite at a time.
        </p>
        {/* <button className="protein-button-h">Explore Menu</button> */}
        <a
  href="https://proteinxclusive.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="protein-button-h"
>
  Explore Menu
</a>

      </div>
    </section>
  );
}

export default ProteinBrand;
