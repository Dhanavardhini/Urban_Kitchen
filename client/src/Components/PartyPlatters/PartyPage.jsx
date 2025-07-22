import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/partypage.css';
import partyImage from '../../assets/party.jpeg';
// import Footer from '../../common-pages/Footer';

function PartyPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/platters');
  };

  return (
    <>
      <section className="partypage-section">
        <div className="partypage-image-container">
          <img
            src={partyImage}
            alt="Party Platters"
            className="partypage-main-image"
          />
        </div>

        <div className="partypage-content">
          <h2 className="partypage-title">Party Platters for Every Celebration</h2>
          <p className="partypage-description">
            Whether it's a house party, office gathering, or weekend chillout, our party platters
            are made to impress. Choose from cheesy bites, crispy munchies, loaded fries, and more —
            all freshly prepared and perfect for sharing. Let Urban Kitchen make your party
            deliciously unforgettable.
          </p>
          <button className="partypage-button" onClick={handleClick}>
            Explore Platters
          </button>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default PartyPage;
