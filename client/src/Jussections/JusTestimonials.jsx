import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../Jusstyles/JusTestimonials.css'; // Your custom CSS
import t1 from '../assets/man.png';
import t2 from '../assets/woman.png';
import t3 from '../assets/avatar.png';
import terminols from '../assets/terminols.png';
const testimonialsData = [
  {
    name: "Siva",
    rating: 5,
    text: "The crispy fries and flavorful snacks from Jus Friez never disappoint! Always fresh and delivered on time.",
    img: t1,
  },
  {
    name: "Abi",
    rating: 4,
    text: "Great taste and quick delivery. Jus Friez has become my go-to for delicious comfort food.",
    img: t2,
  },
  {
    name: "Sneka",
    rating: 5,
    text: "Amazing service and mouth-watering dishes. I recommend Jus Friez to all my friends and family!",
    img: t3,
  },
];


function JusTestimonials() {
  return (
    <div className="testimonial-section-jus ">
      <Container>
        <Row className="align-items-center">
          {/* Left - Images */}
          <Col md={6} className="position-relative  mt-4  mb-4 mb-md-0">
            <div className="main-img-wrapper">
              <img src={terminols} alt="Main testimonial visual" className="img-fluid main-img" />
            </div>
          </Col>

          {/* Right - Text & Carousel */}
          <Col md={6}>
            <h5 className="fw-bold text-center">Testimonials</h5>
            <h2 className="display-6 fw-bold text-center text-danger mb-3">Love From Clients</h2>
            <p className="text-muted text-center mx-auto" style={{ maxWidth: '400px' }}>
  Hear what our happy customers say about their favorite crispy treats and reliable delivery from Jus Friez.
</p>


            <Carousel indicators interval={3000} >
              {testimonialsData.map(({ name, rating, text, img }, idx) => (
                <Carousel.Item key={idx}>
                  <div className="text-center  mb-3 p-4 shadow-sm bg-white rounded">
                    <img
                      src={img}
                      className="rounded-circle mb-3 client-img"
                      alt={`Client ${name}`}
                      loading="lazy"
                    />
                    <h5 className="fw-bold">{name}</h5>
                    <div className="text-warning mb-2">
                      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                    </div>
                    <p className="text-muted">"{text}"</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default JusTestimonials;



