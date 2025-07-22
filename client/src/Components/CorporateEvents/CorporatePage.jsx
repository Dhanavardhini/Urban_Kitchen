import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/CorporatePage.css';
import corporateImage from '../../assets/Corporate Events.jpeg';
// import Footer from '../../common-pages/Footer';

function CorporatePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/corporate');
  };

  return (
    <>
      <section className="corporatepage-section">
        <div className="corporatepage-image-container">
          <img
            src={corporateImage}
            alt="Corporate Event"
            className="corporatepage-main-image"
          />
        </div>

        <div className="corporatepage-content">
          <h2 className="corporatepage-title">Host Memorable Corporate Events</h2>
          <p className="corporatepage-description">
            Impress your team and clients with Urban Kitchen's tailored corporate event packages.
            Whether you're organizing a business lunch, product launch, or employee celebration,
            we provide customized menus, professional service, and a premium experience. Let us
            handle the food and ambiance so you can focus on success.
          </p>
          <button className="corporatepage-button" onClick={handleClick}>
            Book Your Event
          </button>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default CorporatePage;
