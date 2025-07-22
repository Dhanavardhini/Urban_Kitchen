import React from 'react';
import '../../../Styles/Ordercarousel.css';

import heroImage from '../../../assets/2.jpg'; // ✅ Choose your main hero image

function OrderHeroBanner() {
  return (
    <div className="order-hero-banner-container">
      <img
        src={heroImage}
        className="order-hero-banner-img"
        alt="Order Hero"
      />
    </div>
  );
}

export default OrderHeroBanner;
