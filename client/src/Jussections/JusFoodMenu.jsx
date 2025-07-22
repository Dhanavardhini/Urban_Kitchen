
import React from 'react';
import '../Jusstyles/JusFoodMenu.css';
// Import images correctly here, so Vite can resolve them
import FrenchFriezBuckets from "../assets/French Friez Buckets.png";
import VegFriezBuckets from "../assets/Veg Friez Buckets.png";
import ChickenLollipopBucket from "../assets/Chicken Lollipop Bucket.jpg";
import Maggi from "../assets/Maggi.png";
import PunjabiSamosa from "../assets/Punjabi Samosa.png";
import VegMomoBucket from "../assets/Veg Momo Bucket.png";
import ChickenSpringRolls from "../assets/Chicken_Spring_Rolls.png";
import burger from "../assets/burger.jpg";
import keyburger from "../assets/key burger4.png";

const categories = [
  { icon: FrenchFriezBuckets, label: 'French Friez Buckets' },
  { icon: VegFriezBuckets, label: 'Veg Friez Buckets' },
  { icon: ChickenLollipopBucket, label: 'Chicken Lollipop Bucket' },
  { icon: Maggi, label: 'Maggi' },
  { icon: PunjabiSamosa, label: 'Punjabi Samosa' },
  { icon: VegMomoBucket, label: 'Veg Momo Bucket' },
];

const JusFoodMenu = () => {
  return (
    <div className="container my-5 text-center">
      {/* Heading Section */}
      <div className="mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <h1 className=" fw-bold">Jus Friez </h1>
        <h2 className="fw-bold mb-3" style={{ color: '#d32f2f' }}>Popular Menu</h2>
        <p className="text-muted f-p">
          A range of crispy varieties to treat your tastebuds
        </p>
      </div>

      {/* Category Tabs */}
      {/* <div className="row justify-content-center flex-wrap mb-5">
        {categories.map((item, idx) => (
          <div className="col-12 col-lg-auto mb-3" key={idx}>
            <div className="category-card text-center">
              <img
                src={item.icon}
                alt={item.label}
                style={{ height: '90px', width: '90px', objectFit: 'cover' }}
              />
              <p className="mb-0">{item.label}</p>
            </div>
          </div>
        ))}
      </div> */}

  <div className="row justify-content-center gap-5 flex-wrap mb-5">
  {categories.map((item, idx) => (
    <div
      className="col-12 col-lg-auto mb-3"
      key={idx}
      style={{ '--delay': `${idx * 0.15}s` }}
    >
      <div className="category-card text-center">
        <img
          src={item.icon}
          alt={item.label}
          style={{ height: '100px', width: '100px', objectFit: 'cover' }}
        />
        <p className="mb-0">{item.label}</p>
      </div>
    </div>
  ))}
</div>

   <div className="row g-4">
  {/* Left: Two stacked cards */}
  <div className="col-lg-6 ">
    {/* First Card */}
    <div className="mb-4 mt-4  mb-lg-3">
      <div className="card p-3 shadow-sm d-flex flex-column flex-lg-row align-items-center text-center text-lg-start position-relative">
        {/* <div className="price-tag">$8</div> */}
        <img
          src={ChickenSpringRolls}
          alt="Chicken Spring Rolls"
          className="img-fluid rounded mb-3 mb-lg-0"
          style={{ height: '130px', width: '130px', objectFit: 'cover' }}
        />
        <div className="ps-lg-3">
          <h5 className="fw-bold">Chicken Spring Rolls</h5>
          <p className="text-muted">A delicious crispy treat packed with chicken filling.</p>
          <button
            className="btn food-order btn-sm"
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
      </div>
    </div>

    {/* Second Card */}
    <div>
      <div className="card p-3 mt-4      shadow-sm d-flex flex-column flex-lg-row align-items-center text-center text-lg-start position-relative">
        {/* <div className="price-tag">$6</div> */}
        <img
          src={burger}
          alt="Hamburger"
          className="img-fluid rounded mb-3 mb-lg-0"
          style={{ height: '130px', width: '130px', objectFit: 'contain' }}
        />
        <div className="ps-lg-3">
          <h5 className="fw-bold">Purple Pop</h5>
          <p className="text-muted">Black current flavoured fizzy delight with a refreshing energy in every sip!</p>
          {/* <button
            className="btn food-order btn-sm"
            onClick={() =>
              window.location.href =
                "https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205"
            }
          >
            Order Now
          </button> */}
           <button
            className="btn food-order btn-sm"
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
      </div>
    </div>
  </div>

  {/* Right: Tall card */}
  <div className="col-lg-6">
    <div className="card p-3 shadow-sm text-center text-lg-start d-flex flex-column position-relative h-100">
      {/* <div className="price-tag">$10</div> */}
      <img
        src={keyburger}
        alt="Turkey Burgers"
        className="img-fluid mb-3"
        style={{ height: '230px', objectFit: 'contain' }}
      />
      <h5 className="fw-bold">Veg Friez Buckets</h5>
      <p className="text-muted"> A collection of cheesy fries consisting of potato cheese balls cheesy corn triangle cheesy pizza finger</p>
      {/* <button
        className="btn food-order    w-100 btn-sm"
        onClick={() =>
          window.location.href = "https://link.zomato.com/xqzv/rshare?id=108274900305631e5"
        }
      >
        Order Now
      </button> */}

      <button
  className="btn food-order w-100 btn-sm"
  onClick={() =>
    window.open(
      "https://link.zomato.com/xqzv/rshare?id=108274900305631e5",
      "_blank"
    )
  }
>
  Order Now
</button>

    </div>
  </div>
</div>

    </div>
  );
};

export default JusFoodMenu;
