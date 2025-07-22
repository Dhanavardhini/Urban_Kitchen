
import '../jusstyles/jushomepage.css';
import logo1 from '../assets/artboard7.png';
import logo2 from '../assets/deliverylogo1.png';
import left from '../assets/homepage.png';
import left1 from '../assets/homeleft.png';
import React, { useState, useEffect } from 'react';



const JusHomePage = () => {
  const [isLgOrBelow, setIsLgOrBelow] = useState(window.innerWidth <= 992);

useEffect(() => {
  const handleResize = () => {
    setIsLgOrBelow(window.innerWidth <= 992);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className="container-fluid jus-container-fluid-home">
      <div className="row align-items-center flex-wrap">

  {/* Right Image (will become left on lg and below) */}
  <div className="col-12 col-lg-5 order-1 order-lg-3 p-0 m-0 d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-0">
    <div className="right-image-wrapper">
      <img src={logo1} alt="Right Visual" className="big-home-img" />
    </div>
  </div>

  {/* Center Text */}
  <div className="col-12 col-lg-5 text-lg-start text-center order-2 order-lg-2 mt-4 mt-lg-0">
    <h6 className="jus-home-h6">Bite Into Happiness</h6>
    <h5 className="jus-home-h3">Delight in every bite at Jus Friez – where flavor meets fun</h5>
    <p className="jus-home-p jus-home-description mx-auto mx-lg-0">
      Delight in every bite at Jus Friez — crispy fries, spicy momos, and more made fresh just for you
    </p>

    {/* 30% OFF Badge */}
    {/* <span className="">Order Now</span> */}
     {/* <button
  type="button"
  className="jus-offer-badge text-center border-none"
  onClick={() => window.location.href = "https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205"}
>
  Order Now
</button> */}

<button
  type="button"
  className="jus-offer-badge text-center border-none"
  onClick={() => window.open("https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205", "_blank")}
>
  Order Now
</button>

    <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-1 mt-0">
      <img src={logo2} alt="Delivery" className="img-fluid jus-home-small-img" />
      {/* <div className="get-delivery text-lg-start text-center">
        <p>Get Free Delivery</p>
        <p><a href="tel:+919840724068">+91 98407 24068</a></p>
         
      </div> */}
      <div className="jus-get-delivery text-lg-start text-center">
  <p>Get Free Delivery</p>
  <p><a href="tel:+919840724068">+91 98407 24068</a></p>
</div>

    </div>
  </div>

  {/* Left Image (will become right on lg and below) */}
  <div className="col-12 col-lg-2 order-3 order-lg-1 mb-lg-0 mt-5 p-0 d-flex justify-content-center justify-content-lg-start animate-left-img">
    <img
      src={isLgOrBelow ? left1 : left}
      alt="Left Visual"
      className="img-fluid home-left-img"
    />
  </div>

</div>

    </div>
  );
};

export default JusHomePage;
