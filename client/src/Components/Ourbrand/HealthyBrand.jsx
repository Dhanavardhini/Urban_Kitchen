import React from 'react';
import '../../Styles/HealthyBrand.css';
import healthyLogo from '../../assets/Healthy-Salad-and-Detox-copy.png';
import healthyImage from '../../assets/healthybrand.jpg';

function HealthyBrand() {
  return (
    <section className="healthy-brand">
      <div className="healthy-right">
        <img src={healthyImage} alt="Healthy Salads Showcase" className="healthy-main-image" />
      </div>

      <div className="healthy-left">
        <h2 className="healthy-title-h">Healthy Salads & Detox</h2>
        <img src={healthyLogo} alt="Healthy Salads Logo" className="healthy-logo" />
        <p className="healthy-description">
          Healthy Salads & Detox is your one-stop destination for nutritious, wholesome, and refreshing meals.
          From vibrant salads packed with fresh veggies and proteins to rejuvenating detox juices — we promote clean, healthy eating without compromising on taste.
          Whether you're on a fitness journey or simply love to eat clean, our menu supports your wellness goals with every bite.
        </p>
        {/* <button className="healthy-button-h">Explore Menu</button> */}
        <a
  href="/healthy-salads"
  target="_blank"
  rel="noopener noreferrer"
  className="healthy-button-h"
>
  Explore Menu
</a>

      </div>
    </section>
  );
}

export default HealthyBrand;
