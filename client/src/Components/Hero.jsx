

import React from 'react';
import '../Styles/Hero.css';
import { Link } from 'react-router-dom';
import UrbanVibes from '../assets/Urban Vibes-Pica.png';
import Healthy from '../assets/Fresh & Healthy-Pica1.png';
import HealthyBowls from '../assets/Healthy Bowls1-Pica1.png';
import HotSpicy from '../assets/Hot & Spicy-Pica1.png';
import TastyDelights from '../assets/Tasty Delights-Pica1.png';
import Footer from '../common-pages/Footer';

const slides = [
  {
    image: Healthy,
    title: 'Fresh & Healthy',
    text: `Start your wellness journey with our Fresh & Healthy menu — a vibrant collection of salads, wraps, smoothies, and detox drinks, all crafted using high-quality, locally sourced ingredients. We believe healthy food should never be boring, which is why every dish bursts with flavor, color, and nutrition.

From protein-packed quinoa bowls to antioxidant-rich greens, our offerings are designed to energize your day and support your active lifestyle. Whether you're grabbing a light lunch or refueling after a workout, we've got something nourishing and satisfying for every mood.`,
    button: 'Order Now',
    link: '/ourbrand/healthysalads',
  },
  {
    image: HotSpicy,
    title: 'Hot & Spicy',
    text: `Turn up the heat with our Hot & Spicy range — where every bite delivers bold spices, smoky flavors, and sizzling satisfaction. Explore fiery grilled meats, spicy noodles, and tangy sauces that are handcrafted for those who crave excitement in their meals.

Perfect for spice lovers, this menu isn’t just about heat — it’s about flavor depth, balance, and a culinary experience that lingers. Whether you're dining in or ordering a late-night snack, our spicy creations promise to ignite your taste buds.`,
    button: 'Order Now',
    link: '/ourbrand/jusfriez',
  },
  {
    image: UrbanVibes,
    title: 'Urban Vibes',
    text: `Urban Vibes is more than food — it's a lifestyle destination. Designed for the modern urban soul, this concept blends comforting meals, cozy interiors, and a relaxed vibe where every visit feels like a break from the everyday hustle.

Whether you're working remotely, hanging out with friends, or enjoying some solo time, Urban Vibes offers signature drinks, soulful playlists, and handcrafted dishes that elevate your mood and your meal. Come for the food, stay for the vibe.`,
    button: 'Explore Now',
    link: '/ourbrand/jusfriez',
  },
  {
    image: TastyDelights,
    title: 'Tasty Delights',
    text: `Satisfy your snack cravings with our Tasty Delights — a collection of indulgent treats that are sweet, salty, crispy, and comforting. From buttery cookies and layered desserts to savory bites that melt in your mouth, each item is made to deliver pure joy.

Whether you're celebrating a small win, hosting guests, or simply enjoying a “me moment,” our delightful snacks make every occasion more flavorful. Go ahead — treat yourself, you deserve it!`,
    button: 'Order Now',
    link: '/ourbrand/proteinxclusive',
  },
  {
    image: HealthyBowls,
    title: 'Healthy Bowls',
    text: `Reimagine clean eating with our signature Healthy Bowls — a satisfying mix of grains, proteins, fresh veggies, and flavorful dressings all in one balanced meal. Customizable and filling, they’re built to keep you energized and satisfied throughout the day.

Choose from classic favorites or build your own bowl to suit your mood or dietary needs. Ideal for gym-goers, busy professionals, or anyone who wants to eat better without sacrificing taste, our bowls are proof that healthy can be hearty.`,
    button: 'Discover',
    link: '/ourbrand/healthysalads',
  },
];


// const slides = [
//   {
//     image: Healthy,
//     title: 'Fresh & Healthy',
//     text: `Our Fresh & Healthy menu is packed with vibrant, nutrient-rich meals crafted to fuel your body and mind. From crisp garden-fresh salads to wholesome wraps and refreshing detox drinks, every item is made with care using high-quality ingredients. Enjoy the perfect balance of flavor and nutrition in every bite — whether you're starting your day or recharging mid-afternoon.`,
//     button: 'Order Now',
//     link: '/ourbrand/healthysalads',
//   },
//   {
//     image: HotSpicy,
//     title: 'Hot & Spicy',
//     text: `Craving a fiery kick? Our Hot & Spicy range delivers bold, unforgettable flavors. Every dish is a burst of heat and excitement — from sizzling grilled meats and spicy noodles to chili-loaded burgers. Perfect for those who love their meals with attitude and a lot of spice. Warning: it's addictively delicious!`,
//     button: 'Order Now',
//     link: '/ourbrand/jusfriez',
//   },
//   {
//     image: UrbanVibes,
//     title: 'Urban Vibes',
//     text: `Urban Vibes is more than just a dining spot — it's a lifestyle. Step into a chill, upbeat atmosphere where modern aesthetics meet gourmet flavors. Whether you're catching up with friends, working remotely, or just vibing solo, our signature drinks, curated playlists, and mouthwatering menu make every visit a vibe to remember.`,
//     button: 'Explore Now',
//     link: '/ourbrand/jusfriez',
//   },
//   {
//     image: TastyDelights,
//     title: 'Tasty Delights',
//     text: `Satisfy your cravings with our Tasty Delights — a handpicked selection of sweet and savory goodness. From crispy snacks to decadent desserts, each item is created to bring joy to your taste buds. Ideal for cheat days, celebrations, or just because you deserve it. Dive into flavors that comfort, surprise, and delight.`,
//     button: 'Order Now',
//     link: '/ourbrand/proteinxclusive',
//   },
//   {
//     image: HealthyBowls,
//     title: 'Healthy Bowls',
//     text: `Discover our signature Healthy Bowls — a perfect fusion of proteins, super grains, fresh veggies, and house-made dressings. Designed to be filling and energizing, each bowl is customizable and made to order. Whether you’re on a fitness journey or just want a wholesome, delicious meal, our bowls are your go-to fuel.`,
//     button: 'Discover',
//     link: '/ourbrand/healthysalads',
//   },
// ];
function Hero() {
  return (
    <div className="hero-carousel-container">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        data-bs-pause="false"
      >
        {/* Custom Indicators */}
        <div className="carousel-indicators custom-indicators">
          {slides.map((_, idx) => (
            <span
              key={idx}
              data-bs-target="#heroCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="hero-carousel-slide">
                <div className="hero-carousel-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <Link to={slide.link}>
                    <button>{slide.button}</button>
                  </Link>
                </div>
                <div className="hero-carousel-image-1">
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="hero-carousel-controls">
          <button className="hero-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            &lt;
          </button>
          <button className="hero-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            &gt;
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Hero;
