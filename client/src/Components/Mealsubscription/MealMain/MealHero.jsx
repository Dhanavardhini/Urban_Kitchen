import React from 'react';
import Slider from 'react-slick';
import '../../../Styles/MealHero.css';
import Meal1 from '../../../assets/Meal/Meal5.png';
import Meal2 from '../../../assets/Meal/Meal6.png';
import Meal3 from '../../../assets/Meal/Meal7.png';

// Custom Next Arrow
function NextArrow({ onClick }) {
  return <div className="arrow next" onClick={onClick}>&#10095;</div>;
}

// Custom Prev Arrow
function PrevArrow({ onClick }) {
  return <div className="arrow prev" onClick={onClick}>&#10094;</div>;
}

const MealHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const slides = [
    { id: 1, image: Meal1 },
    { id: 2, image: Meal2 },
    { id: 3, image: Meal3 }
  ];

  return (
    <div className="meal-hero-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="meal-slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} className="meal-slide-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MealHero;
