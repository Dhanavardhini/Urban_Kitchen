import React from 'react'
import BrandHero from './ourbrand/BrandHero'
import JusBrand from './ourbrand/JusBrand'
// import Footer from '../common-pages/Footer';
import HealthyBrand from './ourbrand/HealthyBrand';
import ProteinBrand from './ourbrand/ProteinBrand';
import BrandCarousel from './ourbrand/BrandCarousel';

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
