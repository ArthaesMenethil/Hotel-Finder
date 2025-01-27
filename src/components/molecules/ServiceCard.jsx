import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} className="service-image" />
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
