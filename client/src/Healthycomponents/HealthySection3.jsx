
import React from 'react';
import '../HealthyStyles/HealthySection3.css';
import s31 from '../assets/right.jpeg';
import s32 from '../assets/left.jpeg';

function HealthySection3() {
  const swiggyLink = 'https://www.swiggy.com/city/chennai/healthy-salads-and-detox-alwarpet-rest1120263?source=sharing';

  const handleOrderClick = () => {
    window.open(swiggyLink, '_blank');
  };

  const handleExploreClick = () => {
    window.open(swiggyLink, '_blank');
  };

  return (
    <section className="section3-grid">
      {/* Daily Fresh Detox */}
      <div className="grid-box image-box white-bg">
        <img src={s31} alt="Daily Fresh Detox" />
      </div>
      <div className="grid-box text-box orange-bg">
        <h2>DAILY FRESH DETOX</h2>
        <p>Our salads are made fresh every morning with nutrient-rich ingredients to support your healthy lifestyle every single day.</p>
        <button onClick={handleOrderClick}>ORDER TODAY</button>
      </div>

      {/* Affordable Healthy Living */}
      <div className="grid-box text-box green-bg">
        <h2>HEALTHY LIVING MADE EASY</h2>
        <p>Enjoy affordable, delicious, and customizable detox salads — crafted for every taste, every budget, every goal.</p>
        <button onClick={handleExploreClick}>EXPLORE PLANS</button>
      </div>
      <div className="grid-box image-box white-bg">
        <img src={s32} alt="Affordable Detox Plans" />
      </div>
    </section>
  );
}

export default HealthySection3;
