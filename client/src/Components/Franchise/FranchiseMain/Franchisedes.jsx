// import React from 'react';
// import '../../../Styles/Franchisedes.css';

// function Franchisedes() {
//   return (
//     <section className="franchisedes-section">
//       <h2 className="franchisedes-title">Urban Kitchen Franchise Opportunity</h2>

//       <p className="franchisedes-description">
//         Become a part of one of India’s most exciting food ventures. Urban Kitchen offers a unique multi-brand cloud kitchen model, helping passionate individuals run a profitable food business with minimal risk.
//       </p>

//       <div className="franchisedes-benefits">
//         <h3 className="franchisedes-subtitle">Why Choose Urban Kitchen?</h3>
//         <ul className="franchisedes-list">
//           <li>✅ Multi-brand support – run Jus Friez, Healthy Salads, and Protein Xclusive</li>
//           <li>✅ Low investment – designed for small to mid-level entrepreneurs</li>
//           <li>✅ Easy kitchen setup and supply chain management</li>
//           <li>✅ Full support – from marketing to operations</li>
//           <li>✅ Regular menu innovations and chef training</li>
//         </ul>
//       </div>

//       <div className="franchisedes-apply">
//         <h3 className="franchisedes-subtitle">Who Can Apply?</h3>
//         <p className="franchisedes-description">
//           We welcome passionate food lovers, first-time entrepreneurs, existing restaurant owners, and even home chefs who want to grow. If you have the dedication, we’ll handle the rest!
//         </p>
//       </div>

//       <div className="franchisedes-howitworks">
//         <h3 className="franchisedes-subtitle">How It Works</h3>
//         <ul className="franchisedes-list">
//           <li>📍 Step 1: Choose your location or kitchen space</li>
//           <li>📞 Step 2: Get in touch with our franchise team</li>
//           <li>🛠️ Step 3: We handle setup, branding, and training</li>
//           <li>💼 Step 4: Start selling under our proven food brands</li>
//         </ul>
//       </div>

//       <div className="franchisedes-support">
//         <h3 className="franchisedes-subtitle">What Support Do You Get?</h3>
//         <ul className="franchisedes-list">
//           <li>📦 Centralized raw material supply</li>
//           <li>🎯 Branding, marketing & social media support</li>
//           <li>👨‍🍳 Training for you & your staff</li>
//           <li>🛒 Technology (POS, Online ordering, Dashboard access)</li>
//           <li>📈 Business growth consultation</li>
//         </ul>
//       </div>

//       <div className="franchisedes-conclusion">
//         <h3 className="franchisedes-subtitle">Ready to Get Started?</h3>
//         <p className="franchisedes-description">
//           Join our growing network of franchise partners and take the first step toward becoming a foodpreneur.
//           <br /><br />
//           <strong>Let’s build your dream kitchen — together!</strong>
//         </p>
//         <div className="franchisedes-cta">
//           <a href="/contact" className="franchisedes-cta-btn">Apply for Franchise</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Franchisedes;


// import React, { useState } from 'react';
// import '../../../Styles/Franchisedes.css';
// import FranchisePopup from './FranchisePopup';

// function Franchisedes() {
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <section className="franchisedes-section">
//       <h2 className="franchisedes-title">Urban Kitchen Franchise Opportunity</h2>

//       <p className="franchisedes-description">
//         Become a part of one of India’s most exciting food ventures. Urban Kitchen offers a unique multi-brand cloud kitchen model,
//         helping passionate individuals run a profitable food business with minimal risk. Whether you're looking to grow in your own city
//         or start fresh in a new one, we’ve designed our franchise model to be flexible, affordable, and future-ready.
//       </p>

//       <div className="franchisedes-benefits">
//         <h3 className="franchisedes-subtitle">Why Choose Urban Kitchen?</h3>
//         <ul className="franchisedes-list">
//           <li>✅ Multi-brand support – run Jus Friez, Healthy Salads, and Protein Xclusive</li>
//           <li>✅ Low investment – designed for small to mid-level entrepreneurs</li>
//           <li>✅ Easy kitchen setup and end-to-end supply chain management</li>
//           <li>✅ Full marketing & operational support for a smooth start</li>
//           <li>✅ Chef training, menu R&D, and seasonal innovations</li>
//           <li>✅ Branding and digital media packages included</li>
//         </ul>
//       </div>

//       <div className="franchisedes-apply">
//         <h3 className="franchisedes-subtitle">Who Can Apply?</h3>
//         <p className="franchisedes-description">
//           Passionate food lovers, first-time entrepreneurs, working professionals looking for side income,
//           women-led initiatives, and even home chefs who want to scale. If you're committed — Urban Kitchen is your launchpad.
//         </p>
//       </div>

//       <div className="franchisedes-howitworks">
//         <h3 className="franchisedes-subtitle">How It Works</h3>
//         <ul className="franchisedes-list">
//           <li>📍 Step 1: Choose your city and preferred kitchen space</li>
//           <li>📞 Step 2: Speak with our franchise consultants</li>
//           <li>🛠️ Step 3: Setup, branding, training & launch support</li>
//           <li>💼 Step 4: Operate & grow with our constant support</li>
//         </ul>
//       </div>

//       <div className="franchisedes-support">
//         <h3 className="franchisedes-subtitle">What Support Do You Get?</h3>
//         <ul className="franchisedes-list">
//           <li>📦 Centralized raw material sourcing & logistics</li>
//           <li>🎯 Marketing materials, strategy & local promotion</li>
//           <li>👨‍🍳 Staff hiring & chef training assistance</li>
//           <li>🛒 Online platform integrations & POS dashboard</li>
//           <li>📈 Business coaching & monthly performance reviews</li>
//         </ul>
//       </div>

//       <div className="franchisedes-conclusion">
//         <h3 className="franchisedes-subtitle">Ready to Get Started?</h3>
//         <p className="franchisedes-description">
//           Join our growing network of food entrepreneurs and transform your culinary passion into a thriving business.
//           <br /><br />
//           <strong>Let’s build your dream kitchen — together!</strong>
//         </p>
//         <div className="franchisedes-cta">
//           <button onClick={toggleForm} className="franchisedes-cta-btn">Apply for Franchise</button>
//         </div>
//       </div>

//       {showForm && <FranchisePopup toggleForm={toggleForm} />}
//     </section>
//   );
// }

// export default Franchisedes;

import React, { useState } from 'react';
import '../../../Styles/Franchisedes.css';
import FranchisePopup from './FranchisePopup';
import Footer from '../../../common-pages/Footer';

function Franchisedes() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const whyChoosePoints = [
    'Multi-brand support – run Jus Friez, Healthy Salads, and Protein Xclusive',
    'Low investment – designed for small to mid-level entrepreneurs',
    'Easy kitchen setup and end-to-end supply chain management',
    'Full marketing & operational support for a smooth start',
    'Chef training, menu R&D, and seasonal innovations',
    'Branding and digital media packages included'
  ];

  const howItWorksSteps = [
    'Step 1: Choose your city and preferred kitchen space',
    'Step 2: Speak with our franchise consultants',
    'Step 3: Setup, branding, training & launch support',
    'Step 4: Operate & grow with our constant support'
  ];

  const supportItems = [
    'Centralized raw material sourcing & logistics',
    'Marketing materials, strategy & local promotion',
    'Staff hiring & chef training assistance',
    'Online platform integrations & POS dashboard',
    'Business coaching & monthly performance reviews'
  ];

  return (
    <>
    <section className="franchisedes-section">
      <h2 className="franchisedes-title">Urban Kitchen Franchise Opportunity</h2>

      <p className="franchisedes-description">
        Become a part of one of India’s most exciting food ventures. Urban Kitchen offers a unique multi-brand cloud kitchen model,
        helping passionate individuals run a profitable food business with minimal risk. Whether you're looking to grow in your own city
        or start fresh in a new one, we’ve designed our franchise model to be flexible, affordable, and future-ready.
      </p>

      <div className="franchisedes-benefits">
        <h3 className="franchisedes-subtitle">Why Choose Urban Kitchen?</h3>
        <ul className="franchisedes-list">
          {whyChoosePoints.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="franchisedes-apply">
        <h3 className="franchisedes-subtitle">Who Can Apply?</h3>
        <p className="franchisedes-description">
          Passionate food lovers, first-time entrepreneurs, working professionals looking for side income,
          women-led initiatives, and even home chefs who want to scale. If you're committed — Urban Kitchen is your launchpad.
        </p>
      </div>

      <div className="franchisedes-howitworks">
        <h3 className="franchisedes-subtitle">How It Works</h3>
        <ul className="franchisedes-list">
          {howItWorksSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      <div className="franchisedes-support">
        <h3 className="franchisedes-subtitle">What Support Do You Get?</h3>
        <ul className="franchisedes-list">
          {supportItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="franchisedes-conclusion">
        <h3 className="franchisedes-subtitle">Ready to Get Started?</h3>
        <p className="franchisedes-description">
          Join our growing network of food entrepreneurs and transform your culinary passion into a thriving business.
          <br /><br />
          <strong>Let’s build your dream kitchen — together!</strong>
        </p>
        <div className="franchisedes-cta">
          <button onClick={toggleForm} className="franchisedes-cta-btn">Apply for Franchise</button>
        </div>
      </div>

      {showForm && <FranchisePopup toggleForm={toggleForm} />}
    
    </section>
      {/* <Footer/> */}
      </>
  );
}

export default Franchisedes;
