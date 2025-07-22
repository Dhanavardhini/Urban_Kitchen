import React from 'react';
import Section1 from './Whatwedo/Section1';
import Services from './Whatwedo/Services';
import Counts from './Whatwedo/Counts';
import Online from './Whatwedo/Online';
import Testimonals from './Whatwedo/Testimonals';
import Footer from '../common-pages/Footer';
import CaroWhatwedo from './Whatwedo/CaroWhatwedo';

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
