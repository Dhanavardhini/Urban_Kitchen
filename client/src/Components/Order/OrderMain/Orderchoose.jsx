import React from 'react';
import '../../../Styles/Orderchoose.css';
import { FaConciergeBell } from 'react-icons/fa';
import { MdTableRestaurant, MdOutlinePhoneIphone } from 'react-icons/md';

const features = [
  {
    icon: <FaConciergeBell className="orderchoose-icon" />,
    title: 'Farm Fresh',
    description: 'We use handpicked veggies, fruits, and wholesome grains — fresh from farm to fork.',
  },
  {
    icon: <MdTableRestaurant className="orderchoose-icon" />,
    title: 'Quick Booking',
    description: 'Reserve a table in seconds through our website and skip the queue for a smooth experience.',
  },
  {
    icon: <MdOutlinePhoneIphone className="orderchoose-icon" />,
    title: 'Easy Ordering',
    description: 'Craving a salad or snack? Order online in just a few taps and get it delivered hot and fresh.',
  },
];

function Orderchoose() {
  return (
    <section className="orderchoose-section" id="chooseus">
      <div className="orderchoose-wrapper">
        <div className="orderchoose-left">
          <h4 className="orderchoose-subtitle">🍅 Why Choose Us</h4>
          <h2 className="orderchoose-heading">Freshness Meets Nutrition</h2>
          <p className="orderchoose-description">
            Urban Kitchen offers fresh, wholesome meals made with real ingredients — perfect for clean eating,
            healthy living, and enjoying great taste every single day.
          </p>
        </div>

        <div className="orderchoose-features">
          {features.map((feature, index) => (
            <div className="orderchoose-box" key={index}>
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Orderchoose;
