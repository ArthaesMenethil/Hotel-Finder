import React from "react";
import { Range } from "react-range";
import "./FilterSection.css";

const FilterSection = ({ filters, setFilters, locations }) => {
  const handleRangeChange = (name, values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: values,
    }));
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: value,
    }));
  };

  return (
    <div className="filter-section">
      <h3>Filters</h3>
      <div className="filter-group">
        <label>
          Duration (hours): {filters.duration[0]} - {filters.duration[1]}
        </label>
        <Range
          step={0.5}
          min={1}
          max={5}
          values={filters.duration}
          onChange={(values) => handleRangeChange("duration", values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="range-track"
              style={{
                ...props.style,
              }}
            >
              {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { key: `duration-track-${index}` })
              )}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              className="range-thumb"
              key={`duration-thumb-${index}`}
              style={{
                ...props.style,
              }}
            />
          )}
        />
      </div>
      <div className="filter-group">
        <label>
          Price ($): {filters.price[0]} - {filters.price[1]}
        </label>
        <Range
          step={10}
          min={20}
          max={100}
          values={filters.price}
          onChange={(values) => handleRangeChange("price", values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="range-track"
              style={{
                ...props.style,
              }}
            >
              {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { key: `price-track-${index}` })
              )}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              className="range-thumb"
              key={`price-thumb-${index}`}
              style={{
                ...props.style,
              }}
            />
          )}
        />
      </div>
      <div className="filter-group">
        <label>
          Rating: {filters.rating[0]} - {filters.rating[1]}
        </label>
        <Range
          step={0.1}
          min={0}
          max={5}
          values={filters.rating}
          onChange={(values) => handleRangeChange("rating", values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="range-track"
              style={{
                ...props.style,
              }}
            >
              {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { key: `rating-track-${index}` })
              )}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              className="range-thumb"
              key={`rating-thumb-${index}`}
              style={{
                ...props.style,
              }}
            />
          )}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="location">Location:</label>
        <select
          id="location"
          name="location"
          value={filters.location}
          onChange={handleSelectChange}
        >
          <option value="">All</option>
          {locations.map((loc, index) => (
            <option key={`location-${index}`} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
