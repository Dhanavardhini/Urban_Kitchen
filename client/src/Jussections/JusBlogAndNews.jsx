import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import deliveryperson from '../assets/Online_Shoping.png';
import deliveryleft from '../assets/leftd.png';

import '../Jusstyles/JusBlogAndNews.css';

const JusBlogAndNews = () => {
  // State to track if elements are visible
  const [visible, setVisible] = useState(false);

  // Ref to observe the container
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // Stop observing after animation triggered
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
   <div className="container-fluid my-5" ref={containerRef}>
  <div className="row align-items-center g-0">

    {/* Left Image */}
    <div
      className={`col-md-3 d-flex justify-content-center align-items-center animate-left-img ${visible ? 'animate-fade-slide-up' : ''}`}
    >
      <img
        src={deliveryleft}
        alt="Delivery Left"
        className="blog-left-img"
      />
    </div>

    {/* Center Content */}
    <div
      className={`col-md-5 text-center text-md-start p-4 animate-text-content ${visible ? 'animate-fade-slide-up' : ''}`}
    >
      <h6 className="text-danger  b-h6 ">Delivery</h6>
      <h3 className="fw-bold b-h3">A Moment of Delivered on Right Time & Place</h3>
     <p className="my-3 mx-auto text-md-start text-center para-text">
  We understand the importance of timely delivery, bringing your meals fresh and hot exactly when and where you expect. Our commitment is to make every delivery seamless, so you can enjoy delicious food without any delays.
    </p>
    <p className="mb-4 mx-auto text-md-start text-center para-text">
      Delivering food with precision and care, we promise your favorite dishes arrive fresh, hot, and right on schedule. Trust us to bring convenience and taste together, wherever you are. From kitchen to doorstep, our goal is to make every delivery perfect in timing and location.
    </p>

      <button
        className="btn btn-danger px-4 place-order-btn"
        onClick={() =>
          window.open("https://link.zomato.com/xqzv/rshare?id=108274900305631e5","_blank")
          // "https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205"
        }
      >
        Place Order
      </button>
    </div>

    {/* Right Image */}
    <div
      className={`col-md-4 animate-right-img pe-0 ${visible ? 'animate-fade-slide-up' : ''}`}
    >
      <img
        src={deliveryperson}
        alt="Delivery Right"
        className="blog-right-img w-100 h-100"
      />
    </div>
  </div>
</div>

  );
};

export default JusBlogAndNews;

// Discover our delicious range of snacks and bites at Jus Friez! Enjoy crispy Veg Fries and Veg Friez Buckets, perfect for sharing. Try our French Friez Buckets or Momo Buckets for a tasty treat. Savor cheesy Nachos, flavorful Chicken Friez Buckets, and the ever-popular Maggi Mania. For non-veg lovers, our Non Veg Fries and juicy Momos are sure to satisfy. Refresh yourself with our Zingy Pops beverages — the perfect complement to your meal!