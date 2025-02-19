import React from "react";
import { Range, getTrackBackground } from "react-range";
import "./FilterSection.css";

const FilterSection = ({ filters, setFilters, locations }) => {
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <h3>Filters:</h3>
      
      {/* Duration Filter */}
      <div className="filter-group">
        <label>
          Duration (hours): {filters.duration[0]} - {filters.duration[1]}
        </label>
        <Range
          step={0.5}
          min={1}
          max={5}
          values={filters.duration}
          onChange={(values) => handleChange("duration", values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="range-track"
              style={{
                ...props.style,
                height: "6px",
                borderRadius: "3px",
                background: getTrackBackground({
                  values: filters.duration,
                  colors: ["#ddd", "#4caf50", "#ddd"],
                  min: 1,
                  max: 5,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              className="range-thumb"
              key={`duration-thumb-${index}`}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                borderRadius: "50%",
                backgroundColor: "#4caf50",
              }}
            />
          )}
        />
      </div>

      {/* Price Filter */}
      <div className="filter-group">
        <label>
          Price ($): {filters.price[0]} - {filters.price[1]}
        </label>
        <Range
          step={1}
          min={20}
          max={100}
          values={filters.price}
          onChange={(values) => handleChange("price", values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="range-track"
              style={{
                ...props.style,
                height: "6px",
                borderRadius: "3px",
                background: getTrackBackground({
                  values: filters.price,
                  colors: ["#ddd", "#4caf50", "#ddd"],
                  min: 20,
                  max: 100,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              className="range-thumb"
              key={`price-thumb-${index}`}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                borderRadius: "50%",
                backgroundColor: "#4caf50",
              }}
            />
          )}
        />
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <label>
          Rating: {filters.rating[0]} - {filters.rating[1]}
        </label>
        <Range
          step={0.1}
          min={0}
          max={5}
          values={filters.rating}
          onChange={(values) => handleChange("rating", values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="range-track"
              style={{
                ...props.style,
                height: "6px",
                borderRadius: "3px",
                background: getTrackBackground({
                  values: filters.rating,
                  colors: ["#ddd", "#4caf50", "#ddd"],
                  min: 0,
                  max: 5,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              className="range-thumb"
              key={`rating-thumb-${index}`}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                borderRadius: "50%",
                backgroundColor: "#4caf50",
              }}
            />
          )}
        />
      </div>

      {/* Location Filter */}
      <div className="filter-group">
        <label>Location:</label>
        <select
          value={filters.location}
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <option value="">All</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FilterSection;
