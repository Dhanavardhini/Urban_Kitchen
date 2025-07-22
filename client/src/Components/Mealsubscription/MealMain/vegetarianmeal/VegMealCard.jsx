
import React from 'react';
import vegbreakfastItems from './vegmealbreakfast';
import veglunchItems from './vegmeallunch';
import vegdinnerItems from './vegmealdinner';
import '../../../../styles/wmcard.css';


function VMealSection({ title, items }) {
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

export default function VegMealCard() {
  return (
    <div className="WMCard-wrapper">
      <h2>Vegetarian Meal</h2>
      <VMealSection title="Breakfast" items={vegbreakfastItems} />
      <VMealSection title="Lunch" items={veglunchItems} />
      <VMealSection title="Dinner" items={vegdinnerItems} />
    </div>
  );
}
