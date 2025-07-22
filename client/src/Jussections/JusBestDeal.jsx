

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Jusstyles/JusBestDeal.css';

import bestDeal1 from '../assets/bestDeal1.png';
import bestDeal from '../assets/Bestdeala1.png';
import bestDeal2 from '../assets/bestdeal2.png';
import sideImage from '../assets/bestright.png';

const dealItems = [
  {
    title: "Salted French Friez Bucket",
    description: "100g of French friez salted with tangy tomato sauce",
    tags: "Tasty · Juicy · Affordable",
    image: bestDeal1,
  },
  {
    title: "Zesty Jalapeno Nacho Chips",
    description: "Crispy Jalapeno chips served with mayo and tangy salsa",
    // Crispy Jalapeno chips with mayo and salsa
    tags: "Veg · Spicy · Filling",
    image: bestDeal2,
  },
];

  const  JusBestDeal = () => {
  return (
    <div className="container-fluid container-fluid-deal">
      <div className="row align-items-center flex-wrap flex-lg-row flex-column">

        {/* Left Image */}
        <div className="col-lg-5 mb-4 d-flex justify-content-center justify-content-lg-start">
  <img
    src={bestDeal}
    alt="Left Visual"
    className="img-fluid img-big-deal"
  />
</div>


        {/* Text & Cards */}
        <div className="col-lg-5 text-lg-start text-center mt-4 mt-lg-0 order-2">
          <h6 className="text-muted">Today's</h6>
          <h3 className="deal-heading">Best Deal, grab it as Soon</h3>
          <p className="deal-description mx-auto">
            Don't miss our delicious deals crafted with quality and taste. Perfect for your cravings!
          </p>

       {dealItems.map((item, index) => (
  <div className="card deal-card mx-md-0 mx-auto" key={index}>
    <div className="d-flex align-items-center">
      <div className="deal-img-container  me-3 text-center">
        <img
          src={item.image}
          alt={item.title}
          className="img-fluid"
          style={{ width: '110px', height: '90px', objectFit: 'contain' }}
        />
      </div>
      <div className="card-body p-2">
        <p className="deal-inline-text mb-0">
          <strong>{item.title}</strong><br />
          {item.description}<br />
          <span className="text-muted">{item.tags}</span>
        </p>
      </div>
    </div>
  </div>
))}


          {/* <button
            className="btn order-btn-alt mt-3 w-md-auto w-20"
            onClick={() =>
              window.location.href = "https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205"
            }
          >
            Order Now
          </button> */}

          <button
  className="btn order-btn-alt mt-3 w-md-auto w-20"
  onClick={() =>
    window.open(
      "https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205",
      "_blank"
    )
  }
>
  Order Now
</button>

        </div>

        {/* Right Image */}
        <div className="col-lg-2 d-flex justify-content-center justify-content-lg-end order-3 mt-4 mt-lg-0">
          <img
            src={sideImage}
            alt="Right Visual"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
};

export default  JusBestDeal;

