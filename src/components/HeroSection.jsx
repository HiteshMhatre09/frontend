import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/resto1.jpg" alt="restaurant" />
      <div className="item">
        <h3>Sweet Wedding</h3>
        <div>
          <h1>Your's Good Wisher </h1>
          <p>
          Where there is love there is life!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;