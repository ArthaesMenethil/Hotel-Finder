import React from "react";
import Header from "./Header";
import "./ServiceDetails.css";

const ServiceDetails = ({ service, onBack }) => {
  return (
    <div className="service-details-page">
      <div className="details-header">
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
        <h1>{service.title}</h1>
      </div>
      <div className="details-content">
        <img src={service.image} alt={service.title} className="details-image" />
        <div className="details-text">
          <p>
            {service.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque euismod est lectus, eu volutpat arcu tempus eu.
          </p>
          <p><strong>Location:</strong> {service.location}</p>
          <p><strong>Duration:</strong> {service.duration}</p>
          <p><strong>Price:</strong> {service.price}</p>
          <p><strong>Rating:</strong> {service.rating} ⭐</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
