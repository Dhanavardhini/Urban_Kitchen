import React from 'react';
import '../HealthyStyles/HealthySection6.css';
import { FaStar } from 'react-icons/fa';

// ✅ Import images properly from src/assets
import manImg from '../assets/man.png';
import manImg1 from '../assets/people.png';
import womanImg from '../assets/l.png';

const testimonials = [
  {
    name: "Dinesh W.",
    role: "Fitness Enthusiast",
    text: "These detox salads are my go-to post-workout meals. Packed with protein, tasty, and super fresh!",
    img: manImg
  },
  {
    name: "Renu A.",
    role: "Yoga Instructor",
    text: "The immunity booster salad is a game-changer. I feel light, clean, and energized after every meal.",
    img: womanImg
  },
  {
    name: "Suresh J.",
    role: "Working Professional",
    text: "Fast, nutritious, and delicious! Perfect for my busy schedule without compromising health.",
    img: manImg1
  }
];

function HealthySection6() {
  return (
    <section className="section6-healthy ">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container-healthy">
        {testimonials.map((t, index) => (
          <div className="testimonial-card-healthy " key={index}>
            <h4>Verified Review</h4>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#fbc02d" />
              ))}
            </div>
            <p>"{t.text}"</p>
            <div className="user-healthy ">
              <img src={t.img} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HealthySection6;
