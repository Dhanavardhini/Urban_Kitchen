
import React from 'react';
import breakfastItems from './WmBreakfast.jsx';
import lunchItems from './WmLunch.jsx';
import dinnerItems from './WmDinner.jsx';
import '../../../../styles/wmcard.css';


function WMealSection({ title, items }) {
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

export default function WMCard() {
  return (
    <div className="WMCard-wrapper">
      <h2>Weekly and monthly combos</h2>

      <WMealSection title="Breakfast" items={breakfastItems} />
      <WMealSection title="Lunch" items={lunchItems} />
      <WMealSection title="Dinner" items={dinnerItems} />
    </div>
  );
}
