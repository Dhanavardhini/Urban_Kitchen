
import React from 'react';
import JusNavbar from '../common-pages/jusnavbar';
import JusHomePage from '../juspage/jushomepage';
import JusBestDeal from './jusbestdeal';
import JusFoodMenu from './jusfoodmenu';
import JusBlogAndNews from './jusblogandnews';
import JusEnjoyPage from './jusenjoypage';
import JusTestimonials from './justestimonials';
import JusFooter from '../common-pages/jusfooter';
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
