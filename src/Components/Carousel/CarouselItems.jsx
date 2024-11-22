import "./CarouselItems.css";
import propTypes from "prop-types";


export function CarouselItems({ image, title, description }) {
  return (
    <div className="carousel-item-content">
      <img src={image} alt={title} className="carousel-image" />
      <div className="carousel-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

CarouselItems.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};