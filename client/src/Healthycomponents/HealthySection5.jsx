
import React from 'react';
import '../healthystyles/healthysection5.css';

import img1 from '../assets/musk-melon-salad-bowl.jpg';
import img2 from '../assets/apple-milk.jpg';
import img3 from '../assets/mixed-fruit-bowl.jpg';

import img4 from '../assets/coldcoffee .jpg';
import img6 from '../assets/golden-kick.jpg';
import img5 from '../assets/banana-fruit-bowl.jpg';

function HealthySection5() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="section5" id="gallery">
      <h2 className="instagram-heading">
        <a 
          href="https://www.instagram.com/healthy_salad_detox/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span>@Healthy Salads & Detox</span> — Follow Us On Instagram
        </a>
      </h2>

      <div className="insta-gallery">
        {images.map((src, index) => (
          <div className="insta-item" key={index}>
            <img src={src} alt={`Instagram post ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HealthySection5;
