import React from "react";
import { Row, Col } from "react-grid-system";
import ServiceCard from "../molecules/ServiceCard";
import "./ServicesList.css";

const ServicesList = ({ services }) => {
  return (
    <Row>
      {services.map((service) => (
        <Col key={service.id} xs={12} sm={6} md={4}>
          <ServiceCard service={service} />
        </Col>
      ))}
    </Row>
  );
};

export default ServicesList;
