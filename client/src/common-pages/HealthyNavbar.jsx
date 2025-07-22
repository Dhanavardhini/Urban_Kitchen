

import React, { useState, useEffect } from 'react';
import '../HealthyStyles/HealthyNavbar.css';
import logo from '../assets/Healthy-Salad-and-Detox-copy.png';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import HealthyMenu from '../Healthycomponents/HealthyMenu';
import HealthyPopup from '../Healthycomponents/HealthyPopup';
import HealthyPopup1 from '../../public/Healthy Salads & Detox Menu Card.pdf';

function HealthyNavbar() {
  const [isMenuOpenh, setIsMenuOpenh] = useState(false);
  const [scrolledh, setScrolledh] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTrigger = window.scrollY > 100;
      setScrolledh(scrollTrigger);
      if (scrollTrigger) setIsMenuOpenh(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenuh = () => {
    setIsMenuOpenh(prev => {
      const newState = !prev;
      if (!newState) setDropdownOpen(false);
      return newState;
    });
  };

  const renderNavLinks = () => (
    <ul className={`nav-links ${scrolledh ? 'scrolled' : ''}`}>
      <li><a href="#home">Home</a></li>
      <li><a href="#plans">Healthy Subscriptions</a></li>
      <li><a href="#delivery">About Delivery</a></li>
      <li><a href="#gallery">Food Gallery</a></li>
      <li><a href="#testimonials">Customer Stories</a></li>
      <li><a href="#contact">Support & Help</a></li>
      <li
        className={`dropdown-nav ${dropdownOpen ? 'open' : ''}`}
        onMouseEnter={() => window.innerWidth >= 1224 && setDropdownOpen(true)}
        onMouseLeave={() => window.innerWidth >= 1224 && setDropdownOpen(false)}
        onClick={() => window.innerWidth < 1224 && setDropdownOpen(prev => !prev)}
      >
        <a className="view-menu-toggle">View Menu ▼</a>
        {dropdownOpen && (
          <ul className="dropdown-content-nav">
            <li onClick={() => setShowPopup(true)}>View Menu Card</li>
            <li>
              <a
                href={HealthyPopup1}
                download
                target="_blank"
                rel="noreferrer"
              >
                Download Menu
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );

  return (
    <>
      {!scrolledh && (
        <div className="top-banner-nav">
          <p>Healthy Inside, Happy Outside – Powered by Healthy Salads & Detox</p>
        </div>
      )}

      {!scrolledh && (
        <div className="middle-header-nav">
          <div className="logo-flex-nav">
            <img src={logo} alt="Logo" className="logo-img-nav" />
            <div>
              <div className="logo-title-nav">Healthy Salads & Detox</div>
              <div className="logo-subtext-nav">Fresh, Crispy & Delicious</div>
            </div>
          </div>

          <div className="icons-nav">
            <a href="https://www.instagram.com/healthy_salad_detox/" className="icon insta" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/people/Healthy-Salads-Detox/61577144504540/" className="icon facebook" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me/919840724068" className="icon whatsapp" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>

          {windowWidth < 1224 && (
            <div className="mobile-menu-icon-nav" onClick={toggleMenuh}>
              {isMenuOpenh ? <FaTimes /> : <FaBars />}
            </div>
          )}
        </div>
      )}

      <nav className={`nav-menu-nav ${scrolledh ? 'sticky' : ''} ${isMenuOpenh ? 'open' : ''}`}>
        <div className={`sticky-layout ${isMenuOpenh ? 'mobile-open' : ''}`}>

          {/* Large screen scroll layout */}
          {windowWidth >= 1224 && scrolledh && (
            <div className="sticky-desktop-layout">
              <div className="sticky-left-logo">
                <img src={logo} alt="Logo" className="sticky-logo-img" />
                <div className="sticky-text">
                  <div className="logo-title-nav white">Healthy Salads & Detox</div>
                  <div className="logo-subtext-nav white">Fresh, Crispy & Delicious</div>
                </div>
              </div>
              <div className="sticky-right-links">
                {renderNavLinks()}
              </div>
            </div>
          )}

          {/* Mobile scroll logo + icon */}
          {windowWidth < 1224 && scrolledh && (
            <div className="sticky-logo-wrapper">
              <div className="logo-flex-nav">
                <img src={logo} alt="Logo" className="logo-img-nav" />
                <div>
                  <div className="logo-title-nav white">Healthy Salads & Detox</div>
                  <div className="logo-subtext-nav white">Fresh, Crispy & Delicious</div>
                </div>
              </div>
              <div className="mobile-menu-icon-nav top-align-icon" onClick={toggleMenuh}>
                {isMenuOpenh ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          )}

          {/* Mobile or fallback nav links */}
          {windowWidth < 1224 || !scrolledh ? renderNavLinks() : null}
        </div>
      </nav>

      {showPopup && (
        <HealthyPopup onClose={() => setShowPopup(false)}>
          <HealthyMenu />
        </HealthyPopup>
      )}
    </>
  );
}

export default HealthyNavbar;

