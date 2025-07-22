
import React, { useState, useEffect } from "react";
import {
  FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp,
  FaBars, FaTimes
} from "react-icons/fa";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../common-styles/Navbar.css";
import logo from "../assets/urbanlogo.jpg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuTop, setMenuTop] = useState(113);
  const [showBrandMenu, setShowBrandMenu] = useState(false);
  const [showOrderMenu, setShowOrderMenu] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 1112) setMenuOpen(!menuOpen);
  };

  const handleSubmenuToggle = (type) => {
    if (type === "brand") {
      setShowBrandMenu(!showBrandMenu);
      setShowOrderMenu(false);
    } else if (type === "order") {
      setShowOrderMenu(!showOrderMenu);
      setShowBrandMenu(false);
    }
  };

  const handleMainLinkClick = (type) => {
    if (window.innerWidth <= 1112) {
      navigate(`/${type}`);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen && window.innerWidth <= 1112) {
      const scrollY = window.scrollY;
      Object.assign(document.body.style, {
        position: "fixed",
        top: `-${scrollY}px`,
        overflowY: "hidden",
        width: "100%",
      });
      document.body.dataset.scrollY = scrollY;
    } else {
      const y = parseInt(document.body.dataset.scrollY || 0);
      Object.assign(document.body.style, {
        position: "", top: "", overflowY: "", width: ""
      });
      window.scrollTo(0, y);
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        const scrollTop = window.scrollY;
        if (scrollTop > 15) {
          setIsScrolled(true);
          setMenuTop(70);
          document.body.classList.add("scrolled");
        } else {
          setIsScrolled(false);
          setMenuTop(113);
          document.body.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth > 1112 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [menuOpen]);

  const hideTop = menuOpen || (isScrolled && window.innerWidth > 992);

  const navLinks = [
    { href: '', text: "HOME" },
    { href: "Whatwedo", text: "WHAT WE DO" },
    {
      href: "Ourbrand",
      text: "OUR BRAND",
      submenu: [
        { href: "/ourbrand/healthysalads", text: "Healthy Salads" },
        { href: "/ourbrand/jusfriez", text: "Jus Friez" },
        { href: "/ourbrand/proteinxclusive", text: "Protein Xclusive" }
      ]
    },
    {
      href: "Order",
      text: "ORDER",
      submenu: [
        { href: "/order/birthday", text: "Birthday Celebrations" },
        { href: "/order/corporate", text: "Corporate Events" },
        { href: "/order/family", text: "Family Gatherings" },
        { href: "/order/partyplatters", text: "Party Platters" }
      ]
    },
    { href: "Career", text: "CAREER" },
    { href: "Franchise", text: "FRANCHISE" } ,
    { href: "mealsubscription", text: "MEAL SUBSCRIPTION" } 
  ];

  const socialIcons = [
    { icon: <FaFacebook />, class: "facebook-icon", url: "https://www.facebook.com/people/Jus-Friez/61574798115989/" },
    { icon: <FaInstagram />, class: "instagram-icon", url: "https://www.instagram.com/jusfriez/" },
    { icon: <FaWhatsapp />, class: "whatsapp-icon", url: "https://wa.me/919876543210" },
  ];

  return (
    <header>
      {/* Topbar - Mobile */}
      <div className="uk-nav-mobile-topbar">
        <div className="uk-nav-contact-info">
          <a href="mailto:support@urban-kitchens.in"><FaEnvelope className="email-icon" /><span>support@urban-kitchens.in</span></a>
        </div>
        <div className="uk-nav-mobile-social-icons">
          {socialIcons.map(({ icon, class: c, url }) => (
            <a key={c} href={url} className={c} target="_blank" rel="noreferrer">{icon}</a>
          ))}
        </div>
      </div>

      {/* Topbar - Desktop */}
      <div className={`uk-nav-top-bar ${hideTop ? "uk-nav-hide-top" : ""}`}>
        <div className="uk-nav-contact-info">
          <a href="mailto:support@urban-kitchens.in"><FaEnvelope className="email-icon" /><span>support@urban-kitchens.in</span></a>
        </div>
        <div className="uk-nav-address-social">
          <div className="uk-nav-location"><FaMapMarkerAlt /><span>Teynampet,Chennai</span></div>
          <div className="uk-nav-social-icons">
            {socialIcons.map(({ icon, class: c, url }) => (
              <a key={c} href={url} className={c} target="_blank" rel="noreferrer">{icon}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`uk-nav-main-navbar ${isScrolled ? "uk-nav-sticky-nav" : ""}`}>
        <Link to="/" className="uk-nav-logo-section" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="logo" />
          <div className="uk-nav-logo-title">
            <h1>Urban Kitchen</h1>
            <p>Wholesome Meals, Urban Vibes</p>
          </div>
        </Link>

        <ul className="uk-nav-links-desktop">
          {navLinks.map(link =>
            link.submenu ? (
              <li className="uk-has-submenu" key={link.text}>
                <div className="uk-nav-submenu-parent">
                  <Link
                    to={`/${link.href}`}
                    className={location.pathname === `/${link.href}` ? "active" : ""}
                    onClick={() => {
                      if (window.innerWidth <= 1112) handleMainLinkClick(link.href);
                    }}
                  >
                    {link.text}
                  </Link>
                  <span
                    className="uk-submenu-toggle"
                    onClick={() => handleSubmenuToggle(link.href === "Ourbrand" ? "brand" : "order")}
                  >
                    ▼
                  </span>
                </div>
                <ul className={`uk-submenu ${
                  (link.href === "Ourbrand" && showBrandMenu) ||
                  (link.href === "Order" && showOrderMenu) ? "show" : ""
                }`}>
                  {link.submenu.map((sublink) => (
                    <li key={sublink.href}>
                      <Link
                        to={sublink.href}
                        className={location.pathname === sublink.href ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                      >
                        {sublink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  to={`/${link.href}`}
                  className={location.pathname === `/${link.href}` ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="uk-nav-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`uk-nav-mobile-menu ${menuOpen ? "open" : ""}`}
        style={{ top: `${menuTop}px`, height: `calc(100vh - ${menuTop}px)` }}
      >
        <ul>
          {navLinks.map(link =>
            link.submenu ? (
              <li key={link.text}>
                <div className="uk-nav-submenu-parent">
                  <Link
                    to={`/${link.href}`}
                    className={location.pathname === `/${link.href}` ? "active" : ""}
                    onClick={() => handleMainLinkClick(link.href)}
                  >
                    {link.text}
                  </Link>
                  <span
                    className="uk-submenu-toggle"
                    onClick={() => handleSubmenuToggle(link.href === "Ourbrand" ? "brand" : "order")}
                  >
                    ▼
                  </span>
                </div>
                <ul className={`uk-submenu-mobile ${
                  (link.href === "Ourbrand" && showBrandMenu) ||
                  (link.href === "Order" && showOrderMenu) ? "show" : ""
                }`}>
                  {link.submenu.map((sublink) => (
                    <li key={sublink.href}>
                      <Link
                        to={sublink.href}
                        className={location.pathname === sublink.href ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                      >
                        {sublink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  to={`/${link.href}`}
                  className={location.pathname === `/${link.href}` ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="uk-nav-social-icons">
          {socialIcons.map(({ icon, class: c, url }) => (
            <a key={c} href={url} className={c} target="_blank" rel="noreferrer">{icon}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
