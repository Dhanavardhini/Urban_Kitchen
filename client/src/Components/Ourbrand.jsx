import React from 'react'
import BrandHero from './ourbrand/BrandHero.jsx'
import JusBrand from './ourbrand/JusBrand.jsx'
// import Footer from '../common-pages/Footer';
import HealthyBrand from './ourbrand/HealthyBrand.jsx';
import ProteinBrand from './ourbrand/ProteinBrand.jsx';
import BrandCarousel from './ourbrand/BrandCarousel.jsx';

function Ourbrand() {
  return (
    <>
    <BrandCarousel/>
      <BrandHero/>
      <HealthyBrand/>
      <JusBrand/>
      <ProteinBrand/>
      {/* <Footer/> */}
    </>
  )
}

export default Ourbrand
