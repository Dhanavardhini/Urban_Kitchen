import React from 'react'
import BrandHero from './Ourbrand/BrandHero'
import JusBrand from './Ourbrand/JusBrand'
import Footer from '../common-pages/Footer';
import HealthyBrand from './Ourbrand/HealthyBrand';
import ProteinBrand from './Ourbrand/ProteinBrand';
import BrandCarousel from './Ourbrand/BrandCarousel';

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
