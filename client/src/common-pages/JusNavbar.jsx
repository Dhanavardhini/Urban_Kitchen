

import React, { useState, useEffect } from 'react';
import '../Jusstyles/JusNavbar.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/Jus Friez logo.jpg';
import dlogo from '../assets/Deliverylogo1.png';
import JusPopup from '../Jussections/JusPopup';
import JusMenu from '../Jussections/JusMenu';
import JusPdf from '../../public/Jus Friez Menu Card.pdf';

const navItems = ['Home', 'Best Deal', 'Food Menu', 'Blog & News'];

const JusNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Automatically close drawer if screen is ≥1200px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMobileOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleNavClick = (item) => {
    const id = item.toLowerCase().replace(/[^a-z]/g, '');
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(id);
    setMobileOpen(false);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('');
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item, index) => {
          const id = item.toLowerCase().replace(/[^a-z]/g, '');
          const isActive = activeNav === id;
          return (
            <ListItem button key={item} onClick={() => handleNavClick(item)}>
              <ListItemText
                primary={item}
                className={isActive ? 'jus-drawer-active' : (index === 0 ? 'jus-drawer-home' : 'jus-drawer-other')}
              />
            </ListItem>
          );
        })}
        <ListItem button onClick={() => { setShowPopup(true); setMobileOpen(false); }}>
          <ListItemText primary="View Menu Card" className="jus-drawer-other" />
        </ListItem>
        <ListItem button component="a" href={JusPdf} download target="_blank" rel="noreferrer">
          <ListItemText primary="Download Menu" className="jus-drawer-other" />
        </ListItem>
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          gap: 1,
          cursor: 'pointer',
          backgroundColor: '#d32f2f',
          color: 'white',
          marginTop: 'auto',
        }}
        onClick={scrollToFooter}
      >
        <ShoppingCartIcon sx={{ color: 'white' }} />
        <Box>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
            Delivered Fast
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
            +91 98407 24068
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" className="jus-navbar-appbar">
        <Toolbar className="jus-navbar-toolbar">
          <Box className="jus-left-side">
            <Box className="jus-logo-flex">
              <img src={logo} alt="Logo" className="jus-logo-img" />
              <Box>
                <Typography variant="h6" className="jus-logo-text">Jus Friez</Typography>
                <Typography variant="caption" className="jus-logo-subtext">Fresh, Crispy & Delicious</Typography>
              </Box>
            </Box>
          </Box>

          <Box className="jus-right-side">
            <Box className="jus-nav-links">
              {navItems.map((item, index) => {
                const id = item.toLowerCase().replace(/[^a-z]/g, '');
                const isActive = activeNav === id;
                return (
                  <Button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={
                      isActive ? 'jus-nav-button-active' :
                      index === 0 ? 'jus-nav-button-home' : 'jus-nav-button-other'
                    }
                  >
                    {item}
                  </Button>
                );
              })}
              <Box className="jus-dropdown-wrapper">
                <Button
                  onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}
                  className="jus-nav-button-other"
                >
                  View Menu ▼
                </Button>
                {Boolean(anchorEl) && (
                  <Box className="jus-dropdown-menu" onMouseLeave={() => setAnchorEl(null)}>
                    {/* <Button
                      onClick={() => {
                        setShowPopup(true);
                        setAnchorEl(null);
                      }}
                      className="jus-dropdown-item jus-dropdown-item-v"
                    >
                      View Menu Card
                    </Button> */}
                    <Button
  onClick={() => {
    setShowPopup(true);
    setAnchorEl(null);
  }}
  className="jus-dropdown-item  jus-dropdown-item-v"
>
  View Menu Card
</Button>

                    <a
                      href={JusPdf}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="jus-dropdown-item"
                    >
                      Download Menu
                    </a>
                  </Box>
                )}
              </Box>
            </Box>

            <Box className="jus-delivery-box" onClick={scrollToFooter}>
              <img src={dlogo} alt="Delivery" className="jus-delivery-logo" />
              <Box>
                <Typography className="jus-delivery-text">Delivered Fast</Typography>
                <Typography className="jus-phone-number">+91 98407 24068</Typography>
              </Box>
            </Box>
          </Box>

          <IconButton edge="end" className="jus-menu-icon" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      {showPopup && (
        <JusPopup onClose={() => setShowPopup(false)}>
          <JusMenu />
        </JusPopup>
      )}
    </>
  );
};

export default JusNavbar;
