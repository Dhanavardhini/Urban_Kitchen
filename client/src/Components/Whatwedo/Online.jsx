import React from 'react';
import '../../styles/online.css';

function Online() {
  return (
    <section className="online-section">
      <h2 className="online-title">
        Order <span className="highlight">Food</span> Online
      </h2>
      <p className="online-description">
        Craving our flavors? Find us on Swiggy, Zomato, and Thrive for a quick and convenient way to satisfy your hunger!
      </p>
      <div className="online-buttons">
        <a href="https://swiggy.com" target="_blank" rel="noopener noreferrer" className="online-btn">Swiggy</a>
        <a href="https://zomato.com" target="_blank" rel="noopener noreferrer" className="online-btn">Zomato</a>
        <a href="https://www.thrivenow.in" target="_blank" rel="noopener noreferrer" className="online-btn">Thrive</a>
      </div>
    </section>
  );
}

export default Online;
