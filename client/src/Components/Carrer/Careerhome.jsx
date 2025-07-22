

// import React from 'react';
// import '../../Styles/Careerhome.css';
// import deliveryImg from '../../assets/career.jpg'; // Replace with actual image

// function Careerhome() {
//   return (
//     <section className="careerhome-wrapper">
//       <h2 className="careerhome-title">Careers at Urban Kitchen</h2>

//       <div className="careerhome-content">
//         {/* Left section */}
//         <div className="careerhome-left">
//           {/* Image for small screens */}
//           <div className="careerhome-image-mobile">
//             <img src={deliveryImg} alt="Urban Kitchen" className="careerhome-img" />
//           </div>

//           <p className="careerhome-desc">
//             Are you passionate about food and eager to make an impact in the culinary world? At Urban Kitchen,
//             we are on a mission to build India's leading multi-brand cloud kitchen chain. Our journey is guided
//             by three core values: Passion, Innovation, and Responsibility. 
//             We believe in creating opportunities for individuals who share our vision to grow and thrive in a dynamic, fast-paced environment.
//             Whether you're a chef, a marketing professional, or someone who loves operations, there's a place for you here.
//             Our team works together to craft unforgettable food experiences, build strong brands, and contribute to a food ecosystem that values both health and flavor.
//           </p>

//           <div className="careerhome-values">
//             <span className="careerhome-value">Love for Food</span>
//             <span className="careerhome-divider">|</span>
//             <span className="careerhome-value">Do More with Less</span>
//             <span className="careerhome-divider">|</span>
//             <span className="careerhome-value">Act Like an Owner</span>
//           </div>

//           <p className="careerhome-desc careerhome-last-para">
//             These principles shape everything we do — from crafting exceptional food experiences to scaling
//             innovative brands across the country. At Urban Kitchen, your career journey will be full of learning,
//             collaboration, and the chance to make a real difference. Join us and be a part of something deliciously meaningful.
//           </p>
//         </div>

//         {/* Right section for desktop */}
//         <div className="careerhome-right">
//           <img src={deliveryImg} alt="Urban Kitchen" className="careerhome-img" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Careerhome;


import React from 'react';
import '../../Styles/Careerhome.css';
import deliveryImg from '../../assets/career.jpg';

function splitWords(text, baseClass, delayOffset = 0) {
  return text.split(' ').map((word, i) => (
    <span
      key={i}
      className={`${baseClass}`}
      style={{ animationDelay: `${(i + delayOffset) * 0.15}s` }}
    >
      {word}&nbsp;
    </span>
  ));
}

function Careerhome() {
  return (
    <section className="careerhome-wrapper">
      <h2 className="careerhome-title">Careers at Urban Kitchen</h2>

      <div className="careerhome-content">
        {/* Left section */}
        <div className="careerhome-left">
          <div className="careerhome-image-mobile">
            <img src={deliveryImg} alt="Urban Kitchen" className="careerhome-img" />
          </div>

          <p className="careerhome-desc animated-paragraph">
            {splitWords(
              `Are you passionate about food and eager to make an impact in the culinary world? At Urban Kitchen, we are on a mission to build India's leading multi-brand cloud kitchen chain. Our journey is guided by three core values: Passion, Innovation, and Responsibility.`,
              'word'
            )}
          </p>

          <div className="careerhome-values delayed-values">
            <span className="careerhome-value delay-1">Love for Food</span>
            <span className="careerhome-divider">|</span>
            <span className="careerhome-value delay-2">Do More with Less</span>
            <span className="careerhome-divider">|</span>
            <span className="careerhome-value delay-3">Act Like an Owner</span>
          </div>

          <p className="careerhome-desc animated-paragraph paragraph-2">
            {splitWords(
              `These principles shape everything we do — from crafting exceptional food experiences to building strong brands. At Urban Kitchen, your career will be filled with learning, teamwork, and a chance to make a real impact. Join us to be part of something deliciously meaningful.`,
              'word paragraph-2-word',
              40 // ⏳ delay start until .values finish (approx. 6s)
            )}
          </p>
        </div>

        {/* Right section for desktop */}
        <div className="careerhome-right">
          <img src={deliveryImg} alt="Urban Kitchen" className="careerhome-img" />
        </div>
      </div>
    </section>
  );
}

export default Careerhome;
  