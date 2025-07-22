
import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import '../../../Styles/Orders.css';

// Import 4 different images
import birthdayImg from '../../../assets/Birthday.jpeg';
import corporateImg from '../../../assets/Corporate Events.jpeg';
import familyImg from '../../../assets/Family1.jpeg';
import platterImg from '../../../assets/party.jpeg';

// Card data with link paths
const cardData = [
  {
    title: 'Birthday Celebrations',
    subtitle: 'Make your day extra special!',
    description:
      'We provide personalized birthday party meals — from cakes to full-course menus. Celebrate your special moments with taste and ease.',
    button: 'Book Now',
    image: birthdayImg,
    link: '/birthday',
  },
  {
    title: 'Corporate Events',
    subtitle: 'Fuel your team, impress your guests.',
    description:
      'Professional catering for office events, meetings, and launches. Delicious food, punctual delivery, and seamless setup.',
    button: 'Enquire',
    image: corporateImg,
    link: '/corporate',
  },
  {
    title: 'Family Gatherings',
    subtitle: 'Moments made tasty.',
    description:
      'From traditional spreads to modern bites — we craft menus that bring families together around great food.',
    button: 'See Menus',
    image: familyImg,
    link: '/family',
  },
  {
    title: 'Party Platters',
    subtitle: 'Crowd-pleasing combos.',
    description:
      'Perfectly packed platters for house parties, game nights, or weekend feasts. Ready-to-eat, easy-to-order.',
    button: 'Order Now',
    image: platterImg,
    link: '/platters',
  },
];

function Orders() {
  const navigate = useNavigate(); // <-- Use navigate

  return (
    <section className="orders-section">
      <div className="orders-grid">
        {cardData.map((card, index) => (
          <div className="orders-card" key={index}>
            <div className="orders-image-wrapper">
              <img src={card.image} alt={card.title} className="orders-image" />
            </div>
            <div className="orders-content">
              <h2 className="orders-title">{card.title}</h2>
              <h4 className="orders-subtitle">{card.subtitle}</h4>
              <p className="orders-description">{card.description}</p>
              <button
                className="orders-button"
                onClick={() => navigate(card.link)} // <-- Navigate to path
              >
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Orders;
