import React from 'react';
import '../../styles/counts.css';

function Counts() {
  return (
    <section className="counts-section">
      <h2 className="counts-title">Hungry? Find us. We’re just 20 minutes away</h2>
      <div className="counts-grid">
        <div className="count-card">
          <h3><span className="count-number">5980+</span></h3>
          <p>Virtual Restaurants</p>
        </div>
        <div className="count-card">
          <h3><span className="count-number">230+</span></h3>
          <p>Cloud Delivery Kitchens</p>
        </div>
        <div className="count-card">
          <h3><span className="count-number">90+</span></h3>
          <p>Cities</p>
        </div>
      </div>
    </section>
  );
}

export default Counts;
