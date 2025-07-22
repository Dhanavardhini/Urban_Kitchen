import React from 'react';
import Section1 from './whatwedo/Section1.jsx';
import Services from './whatwedo/Services.jsx';
import Counts from './whatwedo/Counts.jsx';
import Online from './whatwedo/Online.jsx';
import Testimonals from './whatwedo/Testimonals.jsx';
// import Footer from '../common-pages/Footer';
import CaroWhatwedo from './whatwedo/CaroWhatwedo.jsx';

function Whatwedo() {
  return (
   <>
   <CaroWhatwedo/>
   <Section1/>
   <Services/>
   <Counts/>
   <Online/>
   <Testimonals/>
   {/* <Footer/> */}
   </>
  );
}

export default Whatwedo;
