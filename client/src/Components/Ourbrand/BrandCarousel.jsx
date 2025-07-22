import React from 'react';
import '../../Styles/BrandCarousel.css';
import a from "../../assets/Salads.png";
import b from "../../assets/jf.jpg";
import c from "../../assets/px.jpg";

const slides = [
  {
    image: a,
    title: "Fresh & Healthy",
    text: "Delicious meals made with love and care.",
    button: "Order Now",
    position: "right",
    link: "/healthy-salads",
  },
  {
    image: b,
    title: "Urban Vibes",
    text: "Perfect place to enjoy with your friends and family.",
    button: "Expand Now",
    position: "left",
    link: "/jusfriez",
  },
  {
    image: c,
    title: "Hot & Spicy",
    text: "Feel the flavor in every bite.",
    button: "Order Now",
    position: "center",
    link: "https://proteinxclusive.in/",
  },
];

function BrandCarousel() {
  return (
    <div className="brand-carousel-container">
      <div
        id="brandCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        {/* Indicators */}
        <div className="brand-carousel-indicators carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#brandCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="brand-carousel-inner carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`brand-carousel-item carousel-item ${index === 0 ? "active" : ""}`}>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img src={slide.image} className="d-block w-100 brand-carousel-img" alt={`Slide ${index + 1}`} />
              </a>
              <div className={`brand-carousel-caption carousel-caption caption-${slide.position}`}>
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <button>{slide.button}</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#brandCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#brandCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default BrandCarousel;
