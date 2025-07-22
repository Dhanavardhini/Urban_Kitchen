
import React from 'react';
import JusNavbar from '../common-pages/JusNavbar.jsx';
import JusHomePage from '../juspage/JushomePage.jsx';
import JusBestDeal from './JusbestDeal.jsx';
import JusFoodMenu from './JusfoodMenu.jsx';
import JusBlogAndNews from './JusblogandNews.jsx';
import JusEnjoyPage from './JusenjoyPage.jsx';
import JusTestimonials from './JusTestimonials.jsx';
import JusFooter from '../common-pages/JusFooter.jsx';
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
