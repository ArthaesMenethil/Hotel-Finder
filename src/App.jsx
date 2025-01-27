import React, { useState } from "react";
import Header from "./components/templates/Header";
import FilterSection from "./components/organisms/FilterSection";
import ServicesList from "./components/templates/ServicesList";
import "./App.css";

const services = [
  {
    id: 1,
    title: "Authentic Balinese Cooking Class",
    image: "https://sun9-26.userapi.com/impg/HjehGC3QWZuTV0AJ5XVEZKwxSgFm_DprE-FwAQ/VlOiNMfJXrU.jpg?size=900x600&quality=95&sign=a1a9aacee0deb995fce50d428d6feb6b&type=album",
    description: "Learn to cook traditional Balinese dishes with local chefs in a friendly atmosphere.",
    location: "Bali, Indonesia",
    duration: "3 hours",
    price: "$50",
    rating: 4.8
  },
  {
    id: 2,
    title: "Batik Class with Transfer",
    image: "https://sun9-16.userapi.com/impg/ypxtiN3xOD-_plJxfF3dz77z5tstfRdGxyvYSw/O2frEqN7J0M.jpg?size=1185x616&quality=95&sign=690199a0b45933ea0a741c7159a24074&type=album",
    description: "Create your own Batik designs and bring home a unique souvenir.",
    location: "Bali, Indonesia",
    duration: "2 hours",
    price: "$40",
    rating: 4.5
  },
  {
    id: 3,
    title: "Canggu Puppy Yoga Class",
    image: "https://sun9-47.userapi.com/impg/RxbpHrq7OiHm3v5znsab1olvc5eMecwztqip8g/03Woe9eXL0M.jpg?size=532x532&quality=95&sign=469d451d92ccb52df038f032835c4340&type=album",
    description: "Practice yoga while adorable puppies play around you in a relaxed setting.",
    location: "Canggu, Indonesia",
    duration: "1.5 hours",
    price: "$30",
    rating: 4.9
  },
  {
    id: 4,
    title: "Introduction to Balinese Culture",
    image: "https://sun9-58.userapi.com/impg/uQizukC7u_alwsRVCT2SajUe0kUv5IRuo2R_1w/ffZwpvHw8Uk.jpg?size=1280x900&quality=95&sign=f8cc0dfb61bdf5b114f20c3bcd6d4352&type=album",
    description: "Explore Balinese traditions and cultural practices with local guides.",
    location: "Ubud, Indonesia",
    duration: "4 hours",
    price: "$60",
    rating: 4.7
  },
  {
    id: 5,
    title: "Silver Jewellery Making Workshop",
    image: "https://sun9-57.userapi.com/impg/pfuWxXI915TKR0ytukVc3R3REHpksjLWVmW-_A/v2GjIavxKBQ.jpg?size=1159x1500&quality=95&sign=dbeacd65391eb98a047b40af1860d844&type=album",
    description: "Design and craft your own silver jewelry guided by skilled artisans.",
    location: "Ubud, Indonesia",
    duration: "3 hours",
    price: "$70",
    rating: 4.6
  },
  {
    id: 6,
    title: "Wood Carving Master Class",
    image: "https://sun9-28.userapi.com/impg/peT4crZ6FpMYe_frXBxy65oGyX1UoV828rAD6Q/5vDkHx4-GiU.jpg?size=1185x616&quality=95&sign=a4a3bdb424bdb2f4a9fd7fc45d820536&type=album",
    description: "Learn the ancient art of wood carving from master craftsmen.",
    location: "Bali, Indonesia",
    duration: "5 hours",
    price: "$80",
    rating: 4.8
  }
];


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    duration: [1, 5],
    price: [20, 100],
    rating: [0, 5],
    location: "",
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredServices = services.filter((service) => {
    const duration = parseFloat(service.duration);
    const price = parseFloat(service.price.replace("$", ""));
    const rating = parseFloat(service.rating);
    const location = service.location;

    return (
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

  return (
    <div className={darkMode ? "app-container dark-mode" : "app-container"}>
      <Header toggleDarkMode={toggleDarkMode} />
      <div className="main-content">
        <FilterSection
          filters={filters}
          setFilters={setFilters}
          locations={uniqueLocations}
        />
        <ServicesList services={filteredServices} />
      </div>
    </div>
  );
};

export default App;