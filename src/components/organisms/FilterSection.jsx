import React from "react";
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
      <h3>Filters</h3>
      <div className="filter-group">
        <label>
          Duration (hours): {filters.duration[0]} - {filters.duration[1]}
        </label>
        <div className="range-group">
          <input
            type="range"
            min="1"
            max="5"
            value={filters.duration[0]}
            onChange={(e) =>
              handleChange("duration", [e.target.value, filters.duration[1]])
            }
          />
          <input
            type="range"
            min="1"
            max="5"
            value={filters.duration[1]}
            onChange={(e) =>
              handleChange("duration", [filters.duration[0], e.target.value])
            }
          />
        </div>
      </div>

      <div className="filter-group">
        <label>
          Price ($): {filters.price[0]} - {filters.price[1]}
        </label>
        <div className="range-group">
          <input
            type="range"
            min="20"
            max="100"
            value={filters.price[0]}
            onChange={(e) =>
              handleChange("price", [e.target.value, filters.price[1]])
            }
          />
          <input
            type="range"
            min="20"
            max="100"
            value={filters.price[1]}
            onChange={(e) =>
              handleChange("price", [filters.price[0], e.target.value])
            }
          />
        </div>
      </div>

      <div className="filter-group">
        <label>
          Rating: {filters.rating[0]} - {filters.rating[1]}
        </label>
        <div className="range-group">
          <input
            type="range"
            min="0"
            max="5"
            value={filters.rating[0]}
            onChange={(e) =>
              handleChange("rating", [e.target.value, filters.rating[1]])
            }
          />
          <input
            type="range"
            min="0"
            max="5"
            value={filters.rating[1]}
            onChange={(e) =>
              handleChange("rating", [filters.rating[0], e.target.value])
            }
          />
        </div>
      </div>

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
