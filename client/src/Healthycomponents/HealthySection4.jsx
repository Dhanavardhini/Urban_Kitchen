import React from 'react';
import '../healthystyles/healthysection4.css';
import { FaClock, FaShoppingBag, FaMotorcycle } from 'react-icons/fa';

function HealthySection4() {
  return (
    <section className="section4">
      <h2 className="section4-title">About Delivery</h2>
      <div className="section4-grid">
        <div className="section4-card">
          <div className="icon-bg">
            <FaClock className="section4-icon" />
          </div>
          <h3>How long to wait?</h3>
          <p>
            The more content you provide about you and your business, the more
            confident people will be when purchasing from your store.
          </p>
        </div>

        <div className="section4-card">
          <div className="icon-bg">
            <FaShoppingBag className="section4-icon" />
          </div>
          <h3>What will they bring?</h3>
          <p>
            The more content you provide about you and your business, the more
            confident people will be when purchasing from your store.
          </p>
        </div>

        <div className="section4-card">
          <div className="icon-bg">
            <FaMotorcycle className="section4-icon" />
          </div>
          <h3>What will they bring?</h3>
          <p>
            The more content you provide about you and your business, the more
            confident people will be when purchasing from your store.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HealthySection4;
