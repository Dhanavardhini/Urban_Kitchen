

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../healthystyles/healthysection2.css';

// ✅ Import different images for each card
import img1 from '../assets/Hi-Protein-Paneer-Chole-Salad-Bowl.jpg';
import img2 from '../assets/Immunity-Booster-Salad.jpg';
import img3 from '../assets/Protein-Rich-Peanut-Salad.jpg';
import img4 from '../assets/Protein-Rich-Rajma-Salad-Bowl.jpg';
import img5 from '../assets/Veggie-Delight-Salad.jpg';
import img6 from '../assets/Spicy-Tikki-Salad.jpg';
import img7 from '../assets/Simple-Cucumber-Salad.jpg';
import img8 from '../assets/Code-Red-Salad.jpg';
import img9 from '../assets/Healthy-Broccoli-MushroomSalad.jpg';
import img10 from '../assets/Lobia-Lentil-Salad-Bowl.jpg';
import img11 from '../assets/Low-Calorie-Pasta-Salad-Bowl.jpg';
import img12 from '../assets/Hi-Protein-Hi-Fibre-Sprouted-Salad.jpg';

const cardsData = [
  { imgSrc: img1, title: 'Hi-Protein Paneer Chole Salad Bowl', desc: 'Loaded with chickpeas & sprouts for a protein punch.' },
  { imgSrc: img2, title: 'Immunity Booster Salad', desc: 'Fresh veggies & citrus blend to boost your body’s defenses.' },
  { imgSrc: img3, title: 'Protein Rich Peanut Salad', desc: 'Crunchy peanuts with fresh greens and a tangy dressing.' },
  { imgSrc: img5, title: 'Veggie Delight Salad', desc: 'Colorful mix of fresh-cut vegetables with healthy herbs.' },
  { imgSrc: img4, title: 'Protein Rich Rajma Salad Bowl', desc: 'Rajma, onions, and greens to support digestive wellness.' },
  { imgSrc: img6, title: 'Spicy Tikki Salad', desc: 'Crispy tikki served with curd and mint chutney dressing.' },
  { imgSrc: img7, title: 'Simple Cucumber Salad', desc: 'Cucumber strips topped with tangy curd dressing.' },
  { imgSrc: img10, title: 'Lobia Lentil Salad Bowl', desc: 'Protein-packed black-eyed peas with desi flavors.' },
  { imgSrc: img8, title: 'Code Red Salad', desc: 'Beetroot, peppers, and citrus for spicy detox cleanse.' },
  { imgSrc: img9, title: 'Healthy Broccoli & Mushroom Salad', desc: 'Roasted mushrooms with steamed broccoli & garlic zest.' },
  { imgSrc: img11, title: 'Low-Calorie Pasta Salad Bowl', desc: 'Wheat pasta with crunchy veggies & light vinaigrette.' },
  { imgSrc: img12, title: 'Hi Protein, Hi Fibre Sprouted Salad', desc: 'Power-packed moong sprouts with cucumber & seeds.' },
];

// const cardsData = [
//   { imgSrc: img1, title: 'Hi-Protein Paneer Bowl', desc: 'Chickpeas, sprouts & paneer for protein boost.' },
//   { imgSrc: img2, title: 'Immunity Booster Salad', desc: 'Veggies & citrus to boost your immunity.' },
//   { imgSrc: img3, title: 'Peanut Protein Salad', desc: 'Peanuts, greens & tangy dressing combo.' },
//   { imgSrc: img4, title: 'Rajma Fiber Salad', desc: 'Rajma, onions & greens for easy digestion.' },
//   { imgSrc: img5, title: 'Veggie Delight Bowl', desc: 'Fresh-cut veggies with herbs & flavors.' },
//   { imgSrc: img6, title: 'Spicy Tikki Salad', desc: 'Tikki with curd & mint chutney topping.' },
//   { imgSrc: img7, title: 'Cucumber Cool Bowl', desc: 'Chilled cucumber with tangy curd mix.' },
//   { imgSrc: img10, title: 'Lobia Lentil Bowl', desc: 'Black-eyed peas with Indian masala flavor.' },
//   { imgSrc: img8, title: 'Code Red Detox Salad', desc: 'Beetroot, citrus & spice for detox power.' },
//   { imgSrc: img9, title: 'Broccoli & Mushroom Mix', desc: 'Roasted mushrooms broccoli & garlic zest.' },
//   { imgSrc: img11, title: 'Low-Cal Pasta Bowl', desc: 'Wheat pasta with veggies & vinaigrette.' },
//   { imgSrc: img12, title: 'Sprouted Detox Salad', desc: 'Moong sprouts with cucumber & seeds.' },
// ];

function HealthySection2() {
  return (
    <section className="swiper-section" id="plans">
      <h2 className="section-title">Crafted for Wellness & Designed for Taste</h2>

      <div className="card__container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          speed={1000}
          navigation={{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
          }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {cardsData.map((card, index) => (
            // <SwiperSlide key={index}>
            //   <div className="card__article">
            //     <div className="card__image">
            //       <img src={card.imgSrc} alt={card.title} className="card__img" />
            //     </div>
            //     <div className="card__data">
            //       <h3 className="card__name">{card.title}</h3>
            //       <p className="card__description">{card.desc}</p>
            //       <button className="card__button">Order Now</button>
            //     </div>
            //   </div>
            // </SwiperSlide>

            <SwiperSlide key={index}>
  <div className="card__article">
    <div className="card__image">
      <img src={card.imgSrc} alt={card.title} className="card__img" />
    </div>
    <div className="card__data">
      <h3 className="card__name">{card.title}</h3>
      <p className="card__description">{card.desc}</p>
      <button
        className="card__button"
        onClick={() =>
          window.open(
            'https://www.swiggy.com/city/chennai/healthy-salads-and-detox-alwarpet-rest1120263?source=sharing',
            '_blank'
          )
        }
      >
        Order Now
      </button>
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>

        <div className="side-arrows">
          <button className="side-btn swiper-btn-prev">‹</button>
          <button className="side-btn swiper-btn-next">›</button>
        </div>
      </div>
    </section>
  );
}

export default HealthySection2;
