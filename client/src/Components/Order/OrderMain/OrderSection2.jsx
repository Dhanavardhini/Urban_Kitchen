import React from 'react';
import '../../../Styles/OrderSection2.css';
import { FaMoneyBillWave, FaTruck } from 'react-icons/fa';
import { GiPartyPopper, GiBroccoli } from 'react-icons/gi';

const features = [
  {
    icon: <FaMoneyBillWave className="ordersection2-icon" />,
    title: 'Affordable Pricing',
    description: 'Delicious and nutritious meals at budget-friendly rates.',
  },
  {
    icon: <GiPartyPopper className="ordersection2-icon" />,
    title: 'Party & Events',
    description: 'Customized catering for birthdays, office events, and more.',
  },
  {
    icon: <GiBroccoli className="ordersection2-icon" />,
    title: 'Fresh Ingredients',
    description: 'We use farm-fresh produce and wholesome ingredients.',
  },
  {
    icon: <FaTruck className="ordersection2-icon" />,
    title: 'Quick Delivery',
    description: 'Fast and reliable doorstep delivery across your city.',
  },
];

function OrderSection2() {
  return (
    <section className="ordersection2-section">
      <div className="ordersection2-container">
        {features.map((feature, index) => (
          <div className="ordersection2-feature" key={index}>
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrderSection2;
