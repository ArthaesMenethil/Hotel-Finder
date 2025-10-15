import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceDetails.css";

const ServiceDetails = ({
  service,
  onBack,
  toggleDarkMode,
  darkMode,
  onLogoClick,
  searchQuery,
  setSearchQuery,
  onAddToCart,
}) => {
  return (
    <div className="service-details-page">
      

      <div className="details-header">
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
        <h1>{service.title}</h1>
      </div>

      <div className="images-container">
        <img src={service.images[0]} alt={service.title} className="main-image" />
        <div className="small-images">
          {service.images.slice(1, 4).map((img, index) => (
            <img key={index} src={img} alt={`${service.title} ${index + 1}`} className="small-image" />
          ))}
        </div>
      </div>

      <div className="details-info-card">
        <div className="details-text">
          <p>{service.description}</p>
          <p><strong>Location:</strong> {service.location}</p>
          <p><strong>Duration:</strong> {service.duration}</p>
          <p><strong>Price:</strong> {service.price}</p>
          <p><strong>Rating:</strong> {service.rating} ⭐</p>
          <button className="more-btn" onClick={() => onAddToCart(service)}>
            Add
          </button>
        </div>
      </div>

    </div>
  );
};

export default ServiceDetails;