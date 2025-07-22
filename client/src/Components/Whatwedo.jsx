import React from 'react';
import Section1 from './whatwedo/Section1';
import Services from './whatwedo/Services';
import Counts from './whatwedo/Counts';
import Online from './whatwedo/Online';
import Testimonals from './whatwedo/Testimonals';
// import Footer from '../common-pages/Footer';
import CaroWhatwedo from './whatwedo/CaroWhatwedo';

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
