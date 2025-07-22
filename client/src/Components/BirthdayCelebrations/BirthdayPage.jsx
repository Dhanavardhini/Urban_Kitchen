// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../../Styles/BirthdayPage.css';
// import birthdayImage from '../../assets/Birthday.jpeg';
// import Footer from '../../common-pages/Footer';

// function BirthdayPage() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Force navigation even if already on same route
//     navigate('/birthday', { replace: false }); // `replace: false` ensures it pushes to history
//   };

//   return (
//     <>
//       <section className="birthdaypage-section">
//         <div className="birthdaypage-image-container">
//           <img src={birthdayImage} alt="Birthday Party Setup" className="birthdaypage-main-image" />
//         </div>

//         <div className="birthdaypage-content">
//           <h2 className="birthdaypage-title">Celebrate Birthdays with Us!</h2>
//           <p className="birthdaypage-description">
//             Make your special day unforgettable with Urban Kitchen's custom birthday celebrations.
//             From themed decorations and curated menus to vibrant desserts and party platters —
//             we handle every detail. Whether it's a kid’s party or a classy evening, our team ensures
//             your birthday bash is filled with flavor, fun, and unforgettable moments.
//           </p>
//           <button className="birthdaypage-button" onClick={handleClick}>
//             Plan Your Party
//           </button>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default BirthdayPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/BirthdayPage.css';
import birthdayImage from '../../assets/Birthday.jpeg';
import Footer from '../../common-pages/Footer';

function BirthdayPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/birthday', { replace: false });
  };

  return (
    <>
      <section className="birthdaypage-section">
        <div className="birthdaypage-image-container">
          <img src={birthdayImage} alt="Birthday Party Setup" className="birthdaypage-main-image" />
        </div>

        <div className="birthdaypage-content">
          <h2 className="birthdaypage-title">Celebrate Birthdays with Us!</h2>
          <p className="birthdaypage-description">
            Make your special day unforgettable with Urban Kitchen's custom birthday celebrations.
            From themed decorations and curated menus to vibrant desserts and party platters —
            we handle every detail. Whether it's a kid’s party or a classy evening, our team ensures
            your birthday bash is filled with flavor, fun, and unforgettable moments.
          </p>
          <button className="birthdaypage-button" onClick={handleClick}>
            Plan Your Party
          </button>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default BirthdayPage;
