import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import enjoy from '../assets/leftter.jpg';
import '../Jusstyles/JusEnjoyPage.css';  // make sure path is correct


function JusEnjoyPage() {
  return (
    <div className="container-fluid bg-black   my-2 ">
      <div className="row align-items-center  ">
        {/* Left - Image */}
        <div className="col-md-5   mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
  <img
    src={enjoy}
    alt="Enjoy Offer"
    className="img-fluid rounded enjoy-image"
    style={{ maxHeight: '350px', objectFit: 'cover' }}
  />
</div>


        {/* Right - Text content */}
        <div className="col-md-7 text-center text-md-start">
          <h2 className="mb-3 text-white">Enjoy 25% Off on Your Favorite Crispy Treats!</h2>
          <p className="mb-4 text-white">Savor the crunch and flavor with our exclusive 25% discount on all your favorite fries, buckets, and snacks. Whether you're craving Veg Fries, Momos, now's the perfect time to indulge and save big. Hurry, this tasty offer is just for you!</p>
          {/* <button className="btn btn-warning fw-bold px-4 py-2">Enjoy Now</button> */}
        <button
  className="btn fw-bold px-4 py-2 mb-2 enjoy-btn"
  onClick={() =>
     window.open("https://link.zomato.com/xqzv/rshare?id=108274900305631e5","_blank")
  }
>
  Enjoy Now
</button>


        </div>
      </div>
    </div>
  );
}

export default JusEnjoyPage;
