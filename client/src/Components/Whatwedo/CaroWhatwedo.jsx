import React from 'react';
import '../../styles/carowhatwedo.css';
import heroImage from '../../assets/w.jpg'; // 🔁 Replace with your actual image path

function CaroWhatwedo() {
  return (
    <div className="caro-whatwedo-container">
      <img src={heroImage} alt="What We Do" className="caro-whatwedo-img" />
    </div>
  );
}

export default CaroWhatwedo;
