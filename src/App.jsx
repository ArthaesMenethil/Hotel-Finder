import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import Header from "./components/templates/Header";
import FilterSection from "./components/organisms/FilterSection";
import ServicesList from "./components/templates/ServicesList";
import ServiceDetails from "./components/templates/ServiceDetails";
import Footer from "./components/templates/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const services = [
  {
    id: 1,
    title: "Taman Sari Lagoon",
    images: [
      "https://sun9-79.userapi.com/impg/jo28hzlUINAIvCqE_w14Dx6TpoDm5QyPisqOKg/in_rvLEC42Y.jpg?size=1200x800&quality=95&sign=be46bd3f4a7d9cb326176049744b697d&type=album",
      "https://sun9-27.userapi.com/impg/yLy3mi4LIgz6OMM4OzaNRMla64l8JyW1l7-cUQ/3hlE1Nlaklg.jpg?size=1200x799&quality=95&sign=191352fc784eb1756cc4b24be4213452&type=album",
      "https://sun9-57.userapi.com/impg/feehEoLcBBOsSiE1jl53QpxT090jgVkW6kyCLw/Q2nLO1c9rag.jpg?size=1200x698&quality=95&sign=6883541d4d18f3da9033e2f8b45f6bdf&type=album",
      "https://sun23-1.userapi.com/impg/lvzyDfnEDT-n5SG1fIv5crYY9oHR-qrLgkZN6w/AkZ7Qyu_Uec.jpg?size=970x546&quality=95&sign=b3e3777390b0dc3fdb6c47ae6919c52b&type=album"
    ],
    description:
      "A serene retreat nestled amidst lush greenery, offering a tranquil escape with its private lagoon and traditional architecture.",
    location: "Bali, Indonesia",
    duration: "3 days",
    price: "$50",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Gunung Agung Vista",
    images: [
      "https://sun9-28.userapi.com/impg/SHns1tA1CmTVrImUBznHqDfBm73pNwEKT5LqlQ/wb6A8AM119s.jpg?size=2048x900&quality=95&sign=de77e09e96178b3ca41e5b73bec79e55&type=album",
      "https://sun9-49.userapi.com/impg/9VH5cKdtJmF_RHClCEI3330WFRKXSYOAlSzaxg/WvHnROtxMfs.jpg?size=959x634&quality=95&sign=ead1674f1289abae1977d8ef337761ea&type=album",
      "https://sun9-45.userapi.com/impg/nJWUt07oaeq8P9b7MtPPzv3YcSg7FWX-5ejjug/C3tJBsbaGTg.jpg?size=1000x667&quality=95&sign=d7f9252f456cdb625a5e5f59582faba2&type=album",
      "https://sun9-68.userapi.com/impg/2v0WvQDvzPcUT6_nEIDvTWFgQvis3LLx6NE1hA/9ghsUpjUmxY.jpg?size=1024x682&quality=95&sign=0a90175992ec1ca6d792026f9ef701e0&type=album"
    ],
    description:
      "Perched on a hillside overlooking the majestic Mount Agung, this hotel provides breathtaking panoramic views and a peaceful ambiance.",
    location: "Bali, Indonesia",
    duration: "2 days",
    price: "$40",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Samudra Kencana Resort",
    images: [
      "https://sun9-56.userapi.com/impg/u2E2UFbKT2ntSJZcxNthw5Y34yUb2t2UBnlv3g/doRTBuihtrQ.jpg?size=1720x1152&quality=95&sign=50a01b318705e7d392fdba197c332a5b&type=album",
      "https://sun9-49.userapi.com/impg/jJCc_ti9yzfStp5rghLry_wNwwqbD-ofUFRtBw/cnJA8N3h-wc.jpg?size=2048x987&quality=95&sign=09ac0723ffe8f16c70813be6695e44de&type=album",
      "https://sun9-37.userapi.com/impg/fLmqILLg9aix9NP3PHpwMGtNf4FDuuUzW9F6Rg/FhwVK1MvGxY.jpg?size=2500x1669&quality=95&sign=890b90c0c9eb6aa052190b80392f379e&type=album",
      "https://sun9-32.userapi.com/impg/PotiYPSZRsIfm-9mJ1VHW9xDGUlX4tsAYYsDVA/4VsgqZ7dT3c.jpg?size=1920x1080&quality=95&sign=db0eca734436e306217735f6db5b6025&type=album"
    ],
    description:
      "A luxurious beachfront resort boasting pristine white sands, crystal-clear waters, and world-class amenities for an unforgettable tropical getaway.",
    location: "Canggu, Indonesia",
    duration: "2 days",
    price: "$30",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Hutan Raya Retreat",
    images: [
      "https://sun9-61.userapi.com/impg/bemXgpEWpVOTvKoC3ds430__KI-L2S93Q5IBwA/Baygm1x3acM.jpg?size=1280x814&quality=95&sign=afcc2d05f20ae7476245ab4028f62856&type=album",
      "https://sun9-74.userapi.com/impg/MB8rTxmozc2T97US-sTJ8oX8CsFvrN_juC6UDQ/5zj5tND5A3g.jpg?size=2560x1700&quality=95&sign=619412fd69d69a4aee378a836d07ecdb&type=album",
      "https://sun9-5.userapi.com/impg/FzImNzApaduQoYyZBKUQ-iXhL6snrM1ebUmLYw/j4JvBvgVjQA.jpg?size=1280x853&quality=95&sign=101fbdac22c2ea05a0f113a2f67f22ed&type=album",
      "https://sun23-1.userapi.com/impg/ysrDQB44UL05DiNPpUPrBKOPBA1H9SuJA_QChQ/sVj8N1T3hMc.jpg?size=1024x683&quality=95&sign=3c8f4da7bd70a1101a6f9d3bb1122ca8&type=album"
    ],
    description:
      "A haven, surrounded by verdant rainforest, offering guests a unique opportunity to immerse themselves in nature while enjoying modern comforts.",
    location: "Ubud, Indonesia",
    duration: "4 days",
    price: "$60",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Candi Borobudur Lodge",
    images: [
      "https://sun9-70.userapi.com/impg/RWkH_QE182Ygh3lhwI2zHRXlTzBvRn9ORg_wiQ/fQ7Uzei8Woo.jpg?size=2560x1707&quality=95&sign=590498a84e326d64db3085e91b1c9981&type=album",
      "https://sun9-31.userapi.com/impg/QlFGiaiypE2twnT2dF52IyYtHVEYlpJ-7HjBMA/TpIZKIi9nPE.jpg?size=1024x683&quality=95&sign=6106a2793e1dfe346c9c5ceb2804ac3a&type=album",
      "https://sun9-79.userapi.com/impg/U9hpamZouthCgJm17ZXfDDqYGcYW0s05GNYnug/xGNtkjNV9NE.jpg?size=1024x683&quality=95&sign=4c677112234701ba15a3bf63c150f5fd&type=album",
      "https://sun9-13.userapi.com/impg/38oQkmQunaYE9I6mpXYc6Ubq4FkGFEzlQGgElA/qXcKE6oBoCQ.jpg?size=2000x1363&quality=95&sign=83efa2106c610114ba2824eba6ab307b&type=album"
    ],
    description:
      "A charming boutique hotel inspired by the iconic Borobudur temple, showcasing traditional Javanese art and culture with its intricate carvings and elegant decor.",
    location: "Ubud, Indonesia",
    duration: "3 days",
    price: "$70",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Danau Toba Sanctuary",
    images: [
      "https://sun9-25.userapi.com/impg/KyYFZIdToXQEZ2VDrxpbiQczNuDpAcNktv778g/ajJyUHgfHyM.jpg?size=1380x810&quality=95&sign=77006459c4fc372755abdd57ad7069be&type=album",
      "https://sun9-9.userapi.com/impg/HmuMwVHkyH2ox92xEiKQSYgAeE7ece0tzzw2Sg/Do3WEGeHI8Y.jpg?size=2048x1367&quality=95&sign=9ea57fedd3846d5e5e605a1ca12db0cb&type=album",
      "https://sun9-48.userapi.com/impg/DpAeLN2WXbQqJQusDUrvM_NJt2cmeRs9mRFzbQ/bHEO7ZZ3z1E.jpg?size=1280x720&quality=95&sign=aed43218888baffdd9bc60b46a762eb0&type=album",
      "https://sun9-13.userapi.com/impg/DsHoUerqRRLccWrTlBFPVzRiF-tK-sEqkjqUWQ/wI2SBQrp3N8.jpg?size=1024x768&quality=95&sign=cef95dda8cbf0edbf8f13724bee7ef36&type=album"
    ],
    description:
      "A secluded paradise on the shores of Lake Toba, providing guests with a tranquil sanctuary amidst stunning natural beauty and warm hospitality.",
    location: "Bali, Indonesia",
    duration: "5 days",
    price: "$80",
    rating: 4.8,
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    duration: [1, 5],
    price: [20, 100],
    rating: [0, 5],
    location: "",
  });

  const [selectedService, setSelectedService] = useState(null);
  const [detailedService, setDetailedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogoClick = () => {
    setSelectedService(null);
    setDetailedService(null);
  };

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const duration = parseFloat(service.duration);
    const price = parseFloat(service.price.replace("$", ""));
    const rating = parseFloat(service.rating);
    const location = service.location;
    return (
      matchesSearch &&
      duration >= filters.duration[0] &&
      duration <= filters.duration[1] &&
      price >= filters.price[0] &&
      price <= filters.price[1] &&
      rating >= filters.rating[0] &&
      rating <= filters.rating[1] &&
      (filters.location === "" || location === filters.location)
    );
  });

  const uniqueLocations = [
    ...new Set(services.map((service) => service.location)),
  ];

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closeOverlay = () => {
    setSelectedService(null);
  };

  const handleMore = () => {
    setDetailedService(selectedService);
    setSelectedService(null);
  };

  const handleBack = () => {
    setDetailedService(null);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  if (detailedService) {
    return (
      <div className={darkMode ? "app-container dark-mode" : "app-container"}>
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          onLogoClick={handleLogoClick}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ServiceDetails 
        service={detailedService} 
        onBack={handleBack} 
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        onLogoClick={handleLogoClick}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className={darkMode ? "app-container dark-mode" : "app-container"}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        onLogoClick={handleLogoClick}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="main-content">
        <div className="filter-section">
          <FilterSection
            filters={filters}
            setFilters={setFilters}
            locations={uniqueLocations}
          />
        </div>

        <div className="services-list-container">
          <ServicesList services={filteredServices} onCardClick={handleCardClick} />
        </div>
      </div>

      {selectedService && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="card-zoom" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService.title}</h2>
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
            >
              {selectedService.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${selectedService.title} ${index + 1}`}
                    className="service-image"
                  />
                </div>
              ))}
            </Slider>
            <p>{selectedService.description}</p>
            <p><strong>Location:</strong> {selectedService.location}</p>
            <p><strong>Duration:</strong> {selectedService.duration}</p>
            <p><strong>Price:</strong> {selectedService.price}</p>
            <p><strong>Rating:</strong> {selectedService.rating} ⭐</p>
            <button className="more-btn" onClick={handleMore}>
              More
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;