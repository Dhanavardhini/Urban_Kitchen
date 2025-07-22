
import React from 'react';
import JusNavbar from '../Common-pages/JusNavbar';
import JusHomePage from '../JusPage/JusHomePage';
import JusBestDeal from './JusBestDeal';
import JusFoodMenu from './JusFoodMenu';
import JusBlogAndNews from './JusBlogAndNews';
import JusEnjoyPage from './JusEnjoyPage';
import JusTestimonials from './JusTestimonials';
import JusFooter from '../Common-pages/JusFooter';
import '../Jusstyles/Jusd.css'; 

function JusHome() {
  return (
    <div className='jus'>
      <JusNavbar />

      <div id="home">
        <JusHomePage />
      </div>

      <div id="bestdeal">
        <JusBestDeal />
      </div>

      <div id="foodmenu">
        <JusFoodMenu />
      </div>

      <div id="blognews">
        <JusBlogAndNews />
      </div>

      <JusEnjoyPage />
      <JusTestimonials />

      {/* Footer ID is important for scroll */}
     <div id="footer">
        <JusFooter />
      </div> 
    </div>
  );
}

export default JusHome;
