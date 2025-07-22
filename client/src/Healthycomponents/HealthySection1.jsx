
import React from 'react';
import '../healthystyles/healthysection1.css';
// import design from '../assets/design.jpeg';
import { FaBoxOpen, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

function HealthySection1() {
  return (
    <section className="section1">
      <h2 className="section-title">Why Choose Healthy Salads & Detox?</h2>
      <div className="section-cards">
        <div className="card-1">
          <div className="icon-wrapper"><FaBoxOpen /></div>
          <h3>Fresh & Nutritious</h3>
          <p>We deliver freshly prepared salads and detox meals made with high-quality, natural ingredients that fuel your body and mind.</p>
        </div>
        <div className="card-1">
          <div className="icon-wrapper"><FaMapMarkerAlt /></div>
          <h3>Fast Local Delivery</h3>
          <p>Get your healthy meals delivered straight to your doorstep on time — fresh, sealed, and ready to enjoy without hassle.</p>
        </div>
        <div className="card-1">
          <div className="icon-wrapper"><FaDollarSign /></div>
          <h3>Affordable Wellness</h3>
          <p>Healthy eating doesn't have to be expensive. Our plans are crafted to offer the best value for your health and wallet.</p>
        </div>
      </div>
    </section>
  );
}

export default HealthySection1;
