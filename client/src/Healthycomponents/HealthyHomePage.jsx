
import React, { useEffect } from "react";
import '../healthystyles/healthyhome.css';
import img1 from '../assets/code-red-salad.jpg';
import img2 from "../assets/immunity-booster-salad.jpg";
import img3 from '../assets/protein-rich-peanut-salad.jpg';
import img4 from '../assets/lobia-lentil-salad-bowl.jpg';
import img5 from '../assets/h1.png';
import { FaShoppingCart } from 'react-icons/fa';

export default function HealthyHomePage() {
  const items = [
  { name: "Code Red Salad", label: "Spicy Detox", image: img1 },
  { name: "Immunity Booster Salad", label: "Immunity Boost", image: img2 },
  { name: "Protein Rich Peanut Salad", label: "High Protein", image: img3 },
  { name: "Lobia Lentil Salad Bowl", label: "Fiber Rich", image: img4 },
];

const handleOrderClick = () => {
  window.open(
    "https://www.swiggy.com/city/chennai/healthy-salads-and-detox-alwarpet-rest1120263?source=sharing",
    "_blank"
  );
};
// useEffect(() => {
//   console.log("🏠 HomePage mounted once");
// }, []); // this should log only once


  return (
    
    <div className="foodbar-container">
      {/* console.log("helo"); */}
      
      <div className="foodbar-header">
        <div className="foodbar-image">
          <img src={img5} alt="Healthy Salad" />
        </div>
        <div className="foodbar-content">
          <h2>Healthy Salads & Detox</h2>
          <p>
            Our handcrafted salads are made fresh daily, combining high-protein ingredients,
            fiber-rich veggies, and flavorful detox blends to energize your body and support
            a healthy lifestyle.
          </p>
          <div className="cart-section">
            {/* <button className="modern-order-btn-1">
              <div className="icon-circle">
                <span className="cart-icon">🛒</span>
              </div>
              <span className="btn-text">Order Now</span>
            </button> */}
            <button className="modern-order-btn-1" onClick={handleOrderClick}>
  <div className="icon-circle">
    {/* <span className="cart-icon">🛒</span> */}<FaShoppingCart className="cart-icon" />

  </div>
  <span className="btn-text">Order Now</span>
</button>

          </div>
        </div>
      </div>

      <div className="foodbar-items">
        {items.map((item, index) => (
          <div className="foodbar-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="tag">{item.label}</p>

          </div>
        ))}
      </div>
    </div>
  );
}