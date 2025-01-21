import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSlidersH, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({ destination: '', priceRange: [10, 200], durationRange: [0, 24], ratingRange: [0, 5] });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const services = [
    { title: 'Authentic Balinese Cooking Class', location: 'Ubud', duration: 2, price: 25, rating: 4.8, image: 'https://sun9-26.userapi.com/impg/HjehGC3QWZuTV0AJ5XVEZKwxSgFm_DprE-FwAQ/VlOiNMfJXrU.jpg?size=900x600&quality=95&sign=a1a9aacee0deb995fce50d428d6feb6b&type=album' },
    { title: 'Silver Jewellery Making Workshop', location: 'Sukawati', duration: 2, price: 19, rating: 4.9, image: 'https://sun9-57.userapi.com/impg/pfuWxXI915TKR0ytukVc3R3REHpksjLWVmW-_A/v2GjIavxKBQ.jpg?size=1159x1500&quality=95&sign=dbeacd65391eb98a047b40af1860d844&type=album' },
    { title: 'Wood Carving Master Class', location: 'Ubud', duration: 3, price: 43, rating: 4.6, image: 'https://sun9-28.userapi.com/impg/peT4crZ6FpMYe_frXBxy65oGyX1UoV828rAD6Q/5vDkHx4-GiU.jpg?size=1185x616&quality=95&sign=a4a3bdb424bdb2f4a9fd7fc45d820536&type=album' },
    { title: 'Canggu Puppy Yoga Class', location: 'Sanur', duration: 3, price: 35, rating: 4.9, image: 'https://sun9-47.userapi.com/impg/RxbpHrq7OiHm3v5znsab1olvc5eMecwztqip8g/03Woe9eXL0M.jpg?size=532x532&quality=95&sign=469d451d92ccb52df038f032835c4340&type=album' },
    { title: 'Introduction to Balinese Culture', location: 'Sukawati', duration: 3, price: 120, rating: 4, image: 'https://sun9-58.userapi.com/impg/uQizukC7u_alwsRVCT2SajUe0kUv5IRuo2R_1w/ffZwpvHw8Uk.jpg?size=1280x900&quality=95&sign=f8cc0dfb61bdf5b114f20c3bcd6d4352&type=album' },
    { title: 'Batik Class with Transfer', location: 'Kuta', duration: 3, price: 34, rating: 4.3, image: 'https://sun9-16.userapi.com/impg/ypxtiN3xOD-_plJxfF3dz77z5tstfRdGxyvYSw/O2frEqN7J0M.jpg?size=1185x616&quality=95&sign=690199a0b45933ea0a741c7159a24074&type=album' },
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>GreenTravel</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for activities..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </header>

      <div className="content">
        <aside className="filter-section">
          <h2>
            <FontAwesomeIcon icon={faSlidersH} /> Filter
          </h2>
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
                  max="24"
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
                  max="24"
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
              <img src={service.image} alt={service.title} className="service-image" />
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
