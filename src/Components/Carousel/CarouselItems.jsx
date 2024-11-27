import "./CarouselItems.css";
import propTypes from "prop-types";


export function CarouselItems({ image, title, description, alternative }) {
  return (
    <div className="carousel-item-content">
      <img src={image} alt={alternative} className="carousel-image" />
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
  alternative: propTypes.string.isRequired,
};