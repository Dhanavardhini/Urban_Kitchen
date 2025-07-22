import React from 'react';
import Section1 from './whatwedo/section1';
import Services from './whatwedo/services';
import Counts from './whatwedo/counts';
import Online from './whatwedo/online';
import Testimonals from './whatwedo/testimonals';
// import Footer from '../common-pages/Footer';
import CaroWhatwedo from './whatwedo/carowhatwedo';

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
