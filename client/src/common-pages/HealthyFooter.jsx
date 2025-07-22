
import React from 'react';
import '../Healthystyles/HealthyFooter.css';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import ukIcon from '../assets/urbanlogo.jpg';
import pxIcon from '../assets/px-logo.png';
import jus from '../assets/Jus Friez logo.jpg';


function HealthyFooter() {
  return (
    <footer className="footer-h animated-footer">
      <div className="footer-container-h  ">

        {/* Brand Info */}
        <div className="footer-section-h  brand-section">
          <h2 className="footer-logo-h">Healthy Salads & Detox</h2>
          <p className="footer-text-h ">
            Fresh, high-protein salads crafted to fuel your day. Detox naturally with our clean,
            nutrient-packed bowls designed for health-conscious lifestyles.
          </p>
          <div className="social-icons-h ">
            <a href="https://www.facebook.com/people/Healthy-Salads-Detox/61577144504540/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/healthy_salad_detox/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.google.com/maps/dir//Ground+floor,+No.10%2F15,+2nd+Cross+St,+Seethamma+Extension,+Seethammal+Extension,+Teynampet,+Chennai,+Tamil+Nadu+600018/@13.0348002,80.1661606,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5267a17f7571c3:0x4163dd3efc418d06!2m2!1d80.2485625!2d13.0348132?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt />
            </a>
               
            
            <a href="/jusfriez" target="_blank" rel="noopener noreferrer">
              <img src={jus} alt="Healthy Salads" className="footer-mini-logo" />
            </a>

                       <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={ukIcon} alt="Urban Kitchen" className="footer-mini-logo-u" />
            </a>
            
                    <a href="https://proteinxclusive.in/" target="_blank" rel="noopener noreferrer">
              <img src={pxIcon} alt="Urban Kitchen" className="footer-mini-logo-p" />
            </a>
            
          
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section-h contact-section">
          <h3 className="footer-heading-h">Contact Us</h3>
          <p>
            <a href="tel:+919840724068" className="contact-link-h ">
              <FiPhone className="icon-h" /> +91 98407 24068
            </a>
          </p>
          <p>
            <a href="mailto:support@urban-kitchens.in" className="contact-link-h">
              <FiMail className="icon-h" /> support@urban-kitchens.in
            </a>
          </p>
          <a
            href="https://www.google.com/maps/dir//Ground+floor,+No.10%2F15,+2nd+Cross+St,+Seethamma+Extension,+Seethammal+Extension,+Teynampet,+Chennai,+Tamil+Nadu+600018/@13.0348002,80.1661606,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5267a17f7571c3:0x4163dd3efc418d06!2m2!1d80.2485625!2d13.0348132?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address-h "
          >
            <FaMapMarkerAlt className="icon-h " />
            <div>
              <strong>Healthy Salads & Detox</strong><br />
              No.10/15, 2nd Cross St,<br />
              Seethammal Extension,<br />
              Teynampet,<br />
              Chennai - 600018.
            </div>
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-section-h  links-section-h ">
          <h3 className="footer-heading-h ">Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#plans">Healthy Subscriptions</a></li>
            <li><a href="#delivery">About Delivery</a></li>
            <li><a href="#gallery">Food Gallery</a></li>
            <li><a href="#testimonials">Customer Stories</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-hours-h  footer-section-h ">
          <h3 className="footer-heading-h ">Opening Hours</h3>
          <p>Mon - Fri: 6:00 AM - 1:00 PM</p>
          <p>Sat - Sun: 5:30 AM - 1:30 AM</p>
          {/* Mon - Sun: 6:00 AM - 1:30 PM */}
        </div>
      </div>

      <div className="footer-bottom-h ">
        <p>© {new Date().getFullYear()} Healthy Salads & Detox. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default HealthyFooter;
