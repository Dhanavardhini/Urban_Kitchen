
import React from 'react';
import '../jusstyles/jusfooter.css';
import JusFriezlogo from '../assets/jusfriezlogo.jpg';
import ukIcon from '../assets/urbanlogo.jpg';
import pxIcon from '../assets/px-logo.png';
import hsd from '../assets/healthy-salad-and-detox-copy.png';


const JusFooter = () => {
  const scrollToHome = (e) => {
    e.preventDefault();
    const home = document.getElementById('home');
    if (home) home.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-j bg-dark text-white pt-3 pb-2" id="footer">
      <div className="container">
        {/* Top Section */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <div className="logo-section d-flex align-items-center">
            <img src={JusFriezlogo} alt="Jus Friez" className='logo-img1-j' />
            <div>
              <h4 className="ms-2">Jus Friez</h4>
              <small className="ms-2">Fresh, Crispy & Delicious</small>
            </div>
          </div>
          <div className="order-now d-flex align-items-center">
            <h5 className="me-3 mb-0">Hungry? Order Your Favorite Snacks Now!</h5>
            <button
              className="btn btn-danger"
              onClick={() =>
                window.open("https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205","_blank")
              }
            >
              Order Now
            </button>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Info Grid */}
        <div className="row text-start">
          <div className="col-md-3 mb-4">
            <h5>Our Location</h5>
            {/* Jus Friez

No.10/15, 2nd Cross St,
Seethammal Extension,
Teynampet, */}
{/* Chennai - 600018 */}
            <p className="mb-1">Jus Friez</p>
            <p className="mb-1">
             No.10/15, 2nd Cross St,<br />
Seethammal Extension,<br />
Teynampet, <br />
Chennai - 600018.<br />
            </p>
            <a
              href="https://www.google.com/maps/place/Jus+Friez,+Seethammal+Extension,+Teynampet,+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              View on Google Maps
            </a>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p className="mb-1">Phone: +91 98407 24068</p>
            <p className="mb-1">Email: support@urban-kitchens.in</p>
            <a href="tel:+919840724068" className="footer-link">Call Now</a>
          </div>
          
          

          <div className="col-md-3 mb-4">
            <h5>Working Hours</h5>
            <p className="mb-1">Mon - Sun: 6:00 AM - 1:30 AM</p>
            {/* <p className="mb-1">Saturday: 10:00 AM - 5:00 PM</p> */}
            <a href="#home" onClick={scrollToHome} className="footer-link">
              Visit Us Today
            </a>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <p>Stay updated with latest deals and offers!</p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61574798115989"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/jusfriez"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>

           <a href="/" target="_blank" rel="noopener noreferrer">
  <img src={ukIcon} alt="Urban Kitchen" className="footer-mini-logo-u" />
</a>

        <a href="https://proteinxclusive.in/" target="_blank" rel="noopener noreferrer">
  <img src={pxIcon} alt="Urban Kitchen" className="footer-mini-logo-p" />
</a>

<a href="/healthy-salads" target="_blank" rel="noopener noreferrer">
  <img src={hsd} alt="Healthy Salads" className="footer-mini-logoh" />
</a>

            </div>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        <p className="text-center small mb-0">
          &copy; 2025 Jus Friez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default JusFooter;
