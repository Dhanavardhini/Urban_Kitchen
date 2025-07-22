import React from 'react';
import { MdEmail } from 'react-icons/md'; // <-- Mail icon
import '../../Styles/CareerSec2.css';

function Careersec2() {
  return (
    <div className="career-sec2">
      <h2 className="career-sec2-title">Who Should Join Us?</h2>
      <h3 className="career-sec2-subtitle">We’re on the lookout for passionate individuals who:</h3>
      <ul className="career-sec2-list">
        <li>Have a deep love for food and delivering delightful experiences.</li>
        <li>Thrive in fast-paced environments and take ownership of their work.</li>
        <li>Believe in growing together and bring a collaborative spirit to the team.</li>
      </ul>

      <h2 className="career-sec2-talk">If that sounds like you — we’d love to hear from you!</h2>

      <div className="career-sec2-card">
        <p>
          <strong>Exciting career paths await you</strong> at Urban Kitchen.
        </p>
        <p>
          👉 <a href="https://www.linkedin.com/company/urban-kitchen" target="_blank" rel="noopener noreferrer">
            Visit our LinkedIn page to explore job openings and learn how you can be part of our growing team.
          </a>
        </p>
      </div>

      <h2 className="career-sec2-title">How to Apply?</h2>
      <p className="career-sec2-apply">
        <MdEmail className="mail-icon" />{' '}
        Send your resume to <a href="mailto:careers@urbankitchen.in">careers@urbankitchen.in</a> and tell us why you're excited to join our food journey. 
        Be part of a team that’s redefining how India eats — one kitchen at a time!
      </p>
    </div>
  );
}

export default Careersec2;
