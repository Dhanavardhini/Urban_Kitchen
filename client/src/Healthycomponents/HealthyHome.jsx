import React from 'react';
import '../healthystyles/healthyd.css';
import HealthyNavbar from '../common-pages/healthynavbar';
import HealthyHomePage from './healthyhomepage';
import HealthySection1 from './healthysection1';
import HealthySection2 from './healthysection2';
import HealthySection3 from './healthysection3';
import HealthySection4 from './healthysection4';
import HealthySection5 from './healthysection5';
import HealthySection6 from './healthysection6';
import HealthyFooter from '../common-pages/healthyfooter';

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
