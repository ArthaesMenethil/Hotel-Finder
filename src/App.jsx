import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({ destination: '', priceRange: [10, 200], durationRange: [0, 4], services: [], ratingRange: [0, 5] });

  const services = [
    { title: 'Authentic Balinese Cooking Class', location: 'Ubud', duration: 2, price: 25, rating: 4.8 },
    { title: 'Silver Jewellery Making Workshop', location: 'Sukawati', duration: 2, price: 19, rating: 4.9 },
    { title: 'Wood Carving Master Class', location: 'Ubud', duration: 3, price: 43, rating: 4.6 },
    { title: 'Canggu Puppy Yoga Class', location: 'Sanur', duration: 3, price: 35, rating: 4.9 },
    { title: 'Introduction to Balinese Culture', location: 'Sukawati', duration: 3, price: 120, rating: 4 },
    { title: 'Batik Class with Transfer', location: 'Kuta', duration: 3, price: 34, rating: 4.3 },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedFilters.destination === '' || service.location === selectedFilters.destination) &&
      service.price >= selectedFilters.priceRange[0] &&
      service.price <= selectedFilters.priceRange[1] &&
      service.duration >= selectedFilters.durationRange[0] &&
      service.duration <= selectedFilters.durationRange[1] &&
      service.rating >= selectedFilters.ratingRange[0] &&
      service.rating <= selectedFilters.ratingRange[1]
  );

  return (
    <div className="app-container">
      <header className="header">
        <h1>GreenTravel</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for activities..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button>Search</button>
        </div>
      </header>

      <div className="content">
        <aside className="filter-section">
          <h2>Filter</h2>
          <div>
            <label>Destination</label>
            <select onChange={(e) => handleFilterChange('destination', e.target.value)}>
              <option value="">All</option>
              <option value="Ubud">Ubud</option>
              <option value="Kuta">Kuta</option>
              <option value="Sanur">Sanur</option>
              <option value="Sukawati">Sukawati</option>
            </select>
          </div>
          <div style={{ marginTop: '20px' }}>
            <label>Price Range</label>
            <div className="price-slider">
              <div className="slider-container">
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="1"
                  value={selectedFilters.priceRange[0]}
                  onChange={(e) => handleFilterChange('priceRange', [e.target.valueAsNumber, selectedFilters.priceRange[1]])}
                />
                <span className="left-value">${selectedFilters.priceRange[0]}</span>
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="1"
                  value={selectedFilters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [selectedFilters.priceRange[0], e.target.valueAsNumber])}
                />
                <span className="right-value">${selectedFilters.priceRange[1]}</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <label>Duration Range</label>
            <div className="duration-slider">
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={selectedFilters.durationRange[0]}
                  onChange={(e) => handleFilterChange('durationRange', [e.target.valueAsNumber, selectedFilters.durationRange[1]])}
                />
                <span className="left-value">{selectedFilters.durationRange[0]}h</span>
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={selectedFilters.durationRange[1]}
                  onChange={(e) => handleFilterChange('durationRange', [selectedFilters.durationRange[0], e.target.valueAsNumber])}
                  onMouseDown={(e) => e.target.focus()}
                />
                <span className="right-value">{selectedFilters.durationRange[1]}h</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <label>Rating Range</label>
            <div className="rating-slider">
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={selectedFilters.ratingRange[0]}
                  onChange={(e) => handleFilterChange('ratingRange', [e.target.valueAsNumber, selectedFilters.ratingRange[1]])}
                />
                <span className="left-value">{selectedFilters.ratingRange[0]} ⭐</span>
              </div>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={selectedFilters.ratingRange[1]}
                  onChange={(e) => handleFilterChange('ratingRange', [selectedFilters.ratingRange[0], e.target.valueAsNumber])}
                  onMouseDown={(e) => e.target.focus()}
                />
                <span className="right-value">{selectedFilters.ratingRange[1]} ⭐</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="services-list">
          {filteredServices.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>Location: {service.location}</p>
              <p>Duration: {service.duration}h</p>
              <p>Price: ${service.price} / person</p>
              <p>Rating: {service.rating} ⭐</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;


//First feature