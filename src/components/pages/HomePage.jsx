import React from 'react';
import Header from '../templates/Header';
import FilterSection from '../organisms/FilterSection';
import ServicesList from '../templates/ServicesList';

const HomePage = ({
  isDarkMode,
  toggleDarkMode,
  searchQuery,
  setSearchQuery,
  selectedFilters,
  onFilterChange,
  services,
}) => {
  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="content">
        <FilterSection
          selectedFilters={selectedFilters}
          onFilterChange={onFilterChange}
        />
        <ServicesList services={services} />
      </div>
    </div>
  );
};

export default HomePage;