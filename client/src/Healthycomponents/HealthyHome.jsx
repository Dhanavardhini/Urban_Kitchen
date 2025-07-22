import React from 'react';
import '../healthystyles/healthyd.css';
import HealthyNavbar from '../common-pages/HealthyNavbar';
import HealthyHomePage from './HealthyhomePage';
import HealthySection1 from './HealthySection1';
import HealthySection2 from './HealthySection2';
import HealthySection3 from './HealthySection3';
import HealthySection4 from './HealthySection4';
import HealthySection5 from './HealthySection5';
import HealthySection6 from './HealthySection6';
import HealthyFooter from '../common-pages/HealthyFooter';

function HealthyHome() {
  return (
    <div className='healthy'>
      <div id="home"><HealthyNavbar /></div>
      <div><HealthyHomePage /></div>
      <HealthySection1 />
      <div id="plans"><HealthySection2 /></div>
      <HealthySection3 />
      <div id="delivery"><HealthySection4 /></div>
      <div id="gallery"><HealthySection5 /></div>
      <div id="testimonials"><HealthySection6 /></div>
      <div id="contact"><HealthyFooter /></div>
   </div>
  );
}


export default HealthyHome;
