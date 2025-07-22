import React from 'react'
import BrandHero from './ourbrand/brandhero'
import JusBrand from './ourbrand/jusbrand'
// import Footer from '../common-pages/Footer';
import HealthyBrand from './ourbrand/healthybrand';
import ProteinBrand from './ourbrand/proteinbrand';
import BrandCarousel from './ourbrand/brandcarousel';

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
