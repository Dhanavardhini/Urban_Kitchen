
import React from 'react';
import JusNavbar from '../common-pages/JusNavbar';
import JusHomePage from '../juspage/JushomePage';
import JusBestDeal from './JusbestDeal';
import JusFoodMenu from './JusfoodMenu';
import JusBlogAndNews from './JusblogandNews';
import JusEnjoyPage from './JusenjoyPage';
import JusTestimonials from './JusTestimonials';
import JusFooter from '../common-pages/JusFooter';
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
