import React from "react";
import "./ServiceCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceCard = ({ service, onCardClick }) => {
  const handleClick = (e) => {
    if (e.target.closest(".slick-arrow") || e.target.closest(".slick-dots")) {
      return;
    }
    onCardClick(service);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="service-card" onClick={handleClick}>
      <Slider {...settings}>
        {service.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${service.title} ${index + 1}`} className="service-image" />
          </div>
        ))}
      </Slider>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-details">
        <p><strong>Location:</strong> {service.location}</p>
        <p><strong>Duration:</strong> {service.duration}</p>
        <p><strong>Price:</strong> {service.price}</p>
        <p><strong>Rating:</strong> {service.rating} ⭐</p>
      </div>
    </div>
  );
};

export default ServiceCard;
