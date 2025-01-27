import React from "react";
import "./ServicesList.css";
import ServiceCard from "../molecules/ServiceCard";

const ServicesList = ({ services }) => {
  return (
    <div className="services-list">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
