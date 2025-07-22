import React from 'react';
import '../healthystyles/healthyd.css';
import HealthyNavbar from '../common-pages/HealthyNavbar.jsx';
import HealthyHomePage from './HealthyhomePage.jsx';
import HealthySection1 from './HealthySection1.jsx';
import HealthySection2 from './HealthySection2.jsx';
import HealthySection3 from './HealthySection3.jsx';
import HealthySection4 from './HealthySection4.jsx';
import HealthySection5 from './HealthySection5.jsx';
import HealthySection6 from './HealthySection6.jsx';
import HealthyFooter from '../common-pages/HealthyFooter.jsx';

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
