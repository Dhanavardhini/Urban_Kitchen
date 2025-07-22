
import React from 'react';
import WeightbreakfastItems from './WeightBreakfast';
import WeightlunchItems from './WeightLunch';
import WeightdinnerItems from './WeightDinner';
import '../../../../Styles/WMCard.css';


function LossGainCardSection({ title, items }) {
  return (
    <div className="WMCard-meal-section">
      <h2 className="WMCard-title">{title}</h2>
      <div className="WMCard-list">
        {items.slice(0, 6).map((item, index) => (
          <div key={index} className="WMCard-horizontal-card">
            <img src={item.image} alt={item.title} className="WMCard-horizontal-img" />
            <div className="WMCard-horizontal-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {/* <div className="WMCard-footer">
                <button className="WMCard-order-btn">Order Now</button>
                <span className="WMCard-price">${item.price.toFixed(2)}</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LossGainCard() {
  return (
    <div className="WMCard-wrapper">
      <h2>Weight loss, weight gain</h2>
      <LossGainCardSection title="Breakfast" items={WeightbreakfastItems} />
      <LossGainCardSection title="Lunch" items={WeightlunchItems} />
      <LossGainCardSection title="Dinner" items={WeightdinnerItems} />
    </div>
  );
}
