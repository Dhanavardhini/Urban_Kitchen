import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/FamilyPage.css';
import familyImage from '../../assets/Family1.jpeg';
// import Footer from '../../common-pages/Footer';

function FamilyPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/family', { replace: false });
  };

  return (
    <>
      <section className="familypage-section">
        <div className="familypage-image-container">
          <img src={familyImage} alt="Family Dining" className="familypage-main-image" />
        </div>

        <div className="familypage-content">
          <h2 className="familypage-title">Enjoy a Cozy Family Dining Experience</h2>
          <p className="familypage-description">
            Urban Kitchen brings your family together with hearty meals and a warm ambiance.
            Whether it's a weekend dinner, festive celebration, or casual lunch, we offer
            comforting dishes that satisfy all age groups. Share laughter, love, and great food
            with those who matter most — because every meal is a memory at Urban Kitchen.
          </p>
          <button className="familypage-button" onClick={handleClick}>
            Dine with Us
          </button>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default FamilyPage;
