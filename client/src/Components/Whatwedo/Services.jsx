// import React from 'react';
// import '../../Styles/Services.css';
// import icon1 from '../../assets/icon1.png';
// import icon2 from '../../assets/icon2.png';
// import icon3 from '../../assets/icon3.png';
// import icon4 from '../../assets/icon4.png';

// const services = [
//   {
//     icon: icon1,
//     title: 'Premium Ingredients',
//     description: 'We make no compromises in the quality of ingredients in our recipes.',
//     highlight: true,
//   },
//   {
//     icon: icon2,
//     title: 'Freshly Prepared',
//     description: 'Every Cake, Burger, Milkshake is made after an order is received.',
//     highlight: false,
//   },
//   {
//     icon: icon3,
//     title: 'Hygienic Kitchens',
//     description: "Our Kitchen's hygiene standards are always highly maintained.",
//     highlight: true,
//   },
//   {
//     icon: icon4,
//     title: 'Innovation',
//     description: 'We have never stopped to innovate in everything we do.',
//     highlight: false,
//   },
// ];

// function Services() {
//   return (
//     <section className="services-section">
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`service-card ${service.highlight ? 'highlighted' : ''}`}
//           >
//             <div className="service-icon">
//               <img src={service.icon} alt={service.title} />
//             </div>
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;

import React from 'react';
import '../../Styles/Services.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const services = [
  {
    icon: icon1,
    title: 'Premium Ingredients',
    description: 'We make no compromises in the quality of ingredients in our recipes.',
    highlight: true,
  },
  {
    icon: icon2,
    title: 'Freshly Prepared',
    description: 'Every Cake, Burger, Milkshake is made after an order is received.',
    highlight: false,
  },
  {
    icon: icon3,
    title: 'Hygienic Kitchens',
    description: "Our Kitchen's hygiene standards are always highly maintained.",
    highlight: true,
  },
  {
    icon: icon4,
    title: 'Innovation',
    description: 'We have never stopped to innovate in everything we do.',
    highlight: false,
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${service.highlight ? 'highlighted' : ''}`}
          >
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
