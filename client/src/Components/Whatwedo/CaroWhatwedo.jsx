import React from 'react';
import '../../Styles/CaroWhatwedo.css';
import heroImage from '../../assets/W.jpg'; // 🔁 Replace with your actual image path

function CaroWhatwedo() {
  return (
    <div className="caro-whatwedo-container">
      <img src={heroImage} alt="What We Do" className="caro-whatwedo-img" />
    </div>
  );
}

export default CaroWhatwedo;
