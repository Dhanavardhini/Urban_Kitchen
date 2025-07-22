

// import React from 'react';
// import '../../Styles/Section1.css';
// import kitchenImage from '../../assets/ab.png';
// import { FaUtensils, FaLeaf } from 'react-icons/fa';

// const cardData = [
//   {
//     icon: <FaUtensils className="card-icon" />,
//     title: 'Fast & Fresh',
//     description: 'Quickly prepared meals without compromising on quality or taste.'
//   },
//   {
//     icon: <FaLeaf className="card-icon" />,
//     title: 'Healthy Choices',
//     description: 'Clean, natural dishes designed to nourish and energize your body.'
//   }
// ];

// function Section1() {
//   return (
//     <section className="section1-container">
//       <div className="section1-content">
//         {/* Left Image */}
//         <div className="section1-image">
//           <img src={kitchenImage} alt="Urban Kitchen" />
//         </div>

//         {/* Right Text + Cards */}
//         <div className="section1-text">
//           <p className="section1-subtitle">About Urban Kitchen</p>
//           <h2 className="section1-title">Wholesome Food, Fresh Ingredients</h2>
//           <p className="section1-description">
//             At Urban Kitchen, we believe in blending traditional flavors with modern, health-conscious recipes.
//             Every meal is made with fresh, locally-sourced ingredients to bring out the best taste and nutrition.
//           </p>

//           <div className="section1-cards">
//             {cardData.map((card, index) => (
//               <div className="section1-card" key={index}>
//                 {card.icon}
//                 <h5>{card.title}</h5>
//                 <p>{card.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Section1;

import React from 'react';
import '../../Styles/Section1.css';
import kitchenImage from '../../assets/ab.png';
import { FaUtensils, FaLeaf } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaUtensils className="card-icon" />,
    title: 'Fast & Fresh',
    description: 'Quickly prepared meals without compromising on quality or taste.'
  },
  {
    icon: <FaLeaf className="card-icon" />,
    title: 'Healthy Choices',
    description: 'Clean, natural dishes designed to nourish and energize your body.'
  }
];

function Section1() {
  return (
    <section className="section1-container">
      <div className="section1-content">
        <div className="section1-image animate-left">
          <img src={kitchenImage} alt="Urban Kitchen" />
        </div>

        <div className="section1-text animate-right">
          <p className="section1-subtitle">About Urban Kitchen</p>
          <h2 className="section1-title">Wholesome Food, Fresh Ingredients</h2>
          <p className="section1-description">
            At Urban Kitchen, we believe in blending traditional flavors with modern, health-conscious recipes.
            Every meal is made with fresh, locally-sourced ingredients to bring out the best taste and nutrition.
          </p>

          <div className="section1-cards">
            {cardData.map((card, index) => (
              <div className="section1-card animate-up" key={index}>
                {card.icon}
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
