import React, { useState } from "react";
import "./Carousel.css";
import propTypes from "prop-types";

export function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-btn prev" aria-label="Elemento anterior" onClick={handlePrev}>
        ◀
      </button>
      <div className="carousel-content">
        {React.Children.map(children, (child, index) => (
          <div
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-btn next" aria-label="Siguiente elemento" onClick={handleNext}>
        ▶
      </button>
    </div>
  );
}

Carousel.propTypes = {
    children: propTypes.node.isRequired,
};