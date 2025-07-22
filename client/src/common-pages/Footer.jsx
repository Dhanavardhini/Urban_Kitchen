
import React from 'react';
import { Link } from 'react-router-dom';
import '../common-styles/Footer.css';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import hsd from '../assets/Healthy-Salad-and-Detox-copy.png';
import jus from '../assets/Jus Friez logo.jpg';
import px from '../assets/px-logo.png';

const socialLinks = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/people/Healthy-Salads-Detox/61577144504540/' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/healthy_salad_detox/' },
];

// const miniBrands = [
//   { src: hsd, alt: 'Urban Kitchen', href: '/healthy-salads' },
//   { src: jus, alt: 'Healthy Salads', href: '/jusfriez' },
//   { src: px, alt: 'Protein Xclusive', href: 'https://proteinxclusive.in/' },
// ];
const miniBrands = [
  { src: hsd, alt: 'Healthy Salads', href: '/healthy-salads', className: 'hsd-logo' },
  { src: px, alt: 'Protein Xclusive', href: 'https://proteinxclusive.in/', className: 'px-logo' },
  { src: jus, alt: 'jus', href: '/jusfriez', className: 'jus-logo' },

];

const quickLinks = [
  { path: '/Whatwedo', label: 'What We Do' },
  { path: '/Ourbrand', label: 'Our Brand' },
  { path: '/Order', label: 'Order' },
  { path: '/Career', label: 'Career' },
  { path: '/Franchise', label: 'Franchise' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container footer-animated">

        <div className="footer-section">
          <h2 className="footer-logo">About Restaurant</h2>
          <p className="footer-text">
            Urban Kitchen proudly serves fresh salads, energizing juices, and protein-rich dishes through our trusted premium brands.
          </p>



          <div className="footer-social-icons">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="footer-icon">
                {link.icon}
              </a>
            ))}
            {/* {miniBrands.map((brand, idx) => (
              <a key={idx} href={brand.href} target="_blank" rel="noopener noreferrer">
                <img src={brand.src} alt={brand.alt} className="footer-mini-logo" />
              </a>
            ))} */}
            {miniBrands.map((brand, idx) => (
              <a key={idx} href={brand.href} target="_blank" rel="noopener noreferrer">
                <img src={brand.src} alt={brand.alt} className={`footer-mini-logo ${brand.className}`} />
              </a>
            ))}

          </div>

        </div>


        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p>
            <a href="tel:+919840724068" className="footer-contact-link">
              <FiPhone className="icon" /> +91 98407 24068
            </a>
          </p>
          <p>
            <a href="mailto:support@urban-kitchens.in" className="footer-contact-link">
              <FiMail className="icon" /> support@urban-kitchens.in
            </a>
          </p>
          {/* <div className="footer-address-row">
            <FaMapMarkerAlt className="icon map-icon" />
            <div className="footer-address-text">
              <strong>Urban Kitchen</strong><br />
              No.10/15, 2nd Cross St,<br />
              Seethammal Extension,<br />
              Teynampet, Chennai - 600018.
            </div>
          </div> */}

          {/* <div className="footer-address-row"> */}
 <a
  href="https://www.google.com/maps?q=Urban+Kitchen,+No.10/15,+2nd+Cross+St,+Seethammal+Extension,+Teynampet,+Chennai+-+600018"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-address-row"
>
  <FaMapMarkerAlt className="icon map-icon" />
  <div className="footer-address-text">
    <strong>Urban Kitchen</strong><br />
    No.10/15, 2nd Cross St,<br />
    Seethammal Extension,<br />
    Teynampet, Chennai - 600018.
  </div>
</a>

{/* </div> */}

        </div>


        <div className="footer-section footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="footer-link">› {link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Opening Hours</h3>
          <p>Mon - Fri: 6:00 AM - 1:00 PM</p>
          <p>Sat - Sun: 5:30 AM - 1:30 AM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Urban Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
