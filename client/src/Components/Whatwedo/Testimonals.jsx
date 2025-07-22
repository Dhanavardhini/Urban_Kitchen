// import React, { useState, useEffect } from 'react';
// import '../../Styles/Testimonals.css';
// import user1 from '../../assets/a.jpg';
// import user2 from '../../assets/a.jpg';
// import user3 from '../../assets/a.jpg';
// import saladImage from '../../assets/a.jpg';

// const testimonials = [
//   {
//     quote:
//       "Absolutely love the fresh salads and protein bowls! Urban Kitchen never disappoints — my go-to for healthy food.",
//     name: "Divya Ramesh",
//     role: "Nutritionist",
//     image: user1,
//     rating: 5,
//   },
//   {
//     quote:
//       "Quick delivery, great taste, and clean ingredients. Their fruit bowls and juices are part of my daily diet.",
//     name: "Arjun Mehta",
//     role: "Fitness Coach",
//     image: user2,
//     rating: 5,
//   },
//   {
//     quote:
//       "The variety of healthy meals is amazing. I ordered for my team lunch and everyone enjoyed the flavors!",
//     name: "Shruthi Menon",
//     role: "Corporate Manager",
//     image: user3,
//     rating: 4,
//   },
// ];


// function  Testimonals() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 7000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="urban-testimonial-section">
//       <div className="urban-testimonial-text-area">
//         <h5 className="urban-testimonial-sub">Testimonials</h5>
//         <h2 className="urban-testimonial-title">What customer saying About Services</h2>

//         <div className="urban-testimonial-card">
//           <p className="urban-testimonial-quote">{testimonials[current].quote}</p>
//           <div className="urban-testimonial-user">
//             <img
//               src={testimonials[current].image}
//               alt={testimonials[current].name}
//               className="urban-user-img"
//             />
//             <div className="urban-user-info">
//               <h4>{testimonials[current].name}</h4>
//               <p>{testimonials[current].role}</p>
//             </div>
//             <div className="urban-rating">{'★'.repeat(testimonials[current].rating)}</div>
//           </div>
//         </div>
//       </div>

//       <div className="urban-testimonial-image-area">
//         <img src={saladImage} alt="Salad Bowl" className="urban-salad-img" />
//         <div className="urban-pagination-dots">
//           {testimonials.map((_, idx) => (
//             <span
//               key={idx}
//               className={`urban-dot ${current === idx ? 'urban-active' : ''}`}
//               onClick={() => setCurrent(idx)}
//             >
//               {idx + 1}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonals;


// import React, { useState, useEffect } from 'react';
// import '../../Styles/Testimonals.css';
// import user1 from '../../assets/a.jpg';
// import user2 from '../../assets/a.jpg';
// import user3 from '../../assets/a.jpg';
// import saladImage from '../../assets/a.jpg';

// const testimonials = [
//   {
//     quote: "Absolutely love the fresh salads and protein bowls! Urban Kitchen never disappoints — my go-to for healthy food.",
//     name: "Divya Ramesh", role: "Nutritionist", image: user1, rating: 5,
//   },
//   {
//     quote: "Quick delivery, great taste, and clean ingredients. Their fruit bowls and juices are part of my daily diet.",
//     name: "Arjun Mehta", role: "Fitness Coach", image: user2, rating: 5,
//   },
//   {
//     quote: "The variety of healthy meals is amazing. I ordered for my team lunch and everyone enjoyed the flavors!",
//     name: "Shruthi Menon", role: "Corporate Manager", image: user3, rating: 4,
//   },
// ];

// function Testimonals() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrent(prev => (prev + 1) % testimonials.length), 7000);
//     return () => clearInterval(timer);
//   }, []);

//   const { quote, name, role, image, rating } = testimonials[current];

//   return (
//     <section className="testimonial">
//       <div className="text">
//         <h5 className="sub">Testimonials</h5>
//         <h2 className="title">What customer saying About Services</h2>
//       </div>

//       <div className="image">
//         <img src={saladImage} alt="Salad" className="salad" />
//         <div className="dots">
//           {testimonials.map((_, i) => (
//             <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}>
//               {i + 1}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="card">
//         <p className="quote">{quote}</p>
//         <div className="user">
//           <img src={image} alt={name} className="avatar" />
//           <div className="info">
//             <h4>{name}</h4>
//             <p>{role}</p>
//           </div>
//           <div className="rating">{'★'.repeat(rating)}</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonals;


import React, { useState, useEffect } from 'react';
import '../../Styles/Testimonals.css';
import user1 from '../../assets/girl1.png';
import user2 from '../../assets/man.png';
import user3 from '../../assets/girl2.png';
import saladImage from '../../assets/tes.png';

const testimonials = [
  {
    quote:
      "Absolutely love the fresh salads and protein bowls! Urban Kitchen never disappoints — my go-to for healthy food.",
    name: "Divya Ramesh",
    role: "Nutritionist",
    image: user1,
    rating: 5,
  },
  {
    quote:
      "Quick delivery, great taste, and clean ingredients. Their fruit bowls and juices are part of my daily diet.",
    name: "Arjun Mehta",
    role: "Fitness Coach",
    image: user2,
    rating: 5,
  },
  {
    quote:
      "The variety of healthy meals is amazing. I ordered for my team lunch and everyone enjoyed the flavors!",
    name: "Shruthi Menon",
    role: "Corporate Manager",
    image: user3,
    rating: 4,
  },
];

function Testimonals() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial">
      {/* Left Side: Title + Subtitle wrapped together */}
      <div className="text-wrapper">
        {/* <div className="text " style={{marginTop:"60px"}}>
          <h5 className="sub">Testimonials</h5>
        </div> */}
        <div
  className="text"
  style={window.innerWidth >= 1323 ? { marginTop: "60px" } : {}}
>
  <h5 className="sub">Testimonials</h5>
</div>

        <div className="subtext">
          <h2 className="title">What customer saying About Services</h2>
        </div>
      </div>

      {/* Right Side: Image + dots */}
      <div className="image">
        <img src={saladImage} alt="Salad" className="salad" />
        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>

      {/* Card Section */}
      <div className="card">
        <p className="quote">{testimonials[current].quote}</p>
        <div className="user">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="avatar"
          />
          <div className="info">
            <h4>{testimonials[current].name}</h4>
            <p>{testimonials[current].role}</p>
          </div>
          <div className="rating">{'★'.repeat(testimonials[current].rating)}</div>
        </div>
      </div>
    </section>
  );
}

export default Testimonals;
