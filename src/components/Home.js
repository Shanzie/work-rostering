import React from 'react';
import './Home.css'; // Make sure you have this CSS file

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Workplace Rostering Service</h1>
        <p>High-quality application tailored to your businesses needs.</p>
        <button className="btn">Learn More</button>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-items">
          {}
          <div className="service-item">
            <h3>Small Business Package</h3>
            <p>Description of this package.</p>
          </div>
          <div className="service-item">
            <h3>Large Business Package.</h3>
            <p>Description of this package.</p>
          </div>
          {}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <p>WOW the best application for managing workplace rostering!</p>
        {}
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button className="btn">Contact Us</button>
      </section>
    </div>
  );
}

export default Home;
