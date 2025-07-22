import React from 'react';
import '../../Styles/JusBrand.css';
import jusLogo from '../../assets/Jus Friez logo.jpg';
import jusImage from '../../assets/maggi.jpg';

function JusBrand() {
  return (
    <section className="jus-brand">
      <div className="jus-right">
        <img src={jusImage} alt="Jus Friez Showcase" className="jus-main-image" />
      </div>

      <div className="jus-left">
        <h2 className="jus-title">Jus Friez</h2>
        <img src={jusLogo} alt="Jus Friez Logo" className="jus-logo" />
        <p className="jus-description">
          Jus Friez is your ultimate stop for loaded fries, cheesy snacks, and crispy indulgent treats.
          Whether you're craving classic fries, spicy peri-peri bites, or fully loaded cheese-topped baskets, we’ve got it all.
          Our menu is designed for flavor lovers who enjoy bold, satisfying bites made fresh and served fast.
          Perfect for quick munching, late-night snacking, or pairing with your favorite drink — Jus Friez brings the crunch with every bite.
        </p>
        {/* <button className="jus-button">Explore Menu</button> */}
        <a
  href="/jusfriez"
  target="_blank"
  rel="noopener noreferrer"
  className="jus-button"
>
  Explore Menu
</a>

      </div>
    </section>
  );
}

export default JusBrand;


