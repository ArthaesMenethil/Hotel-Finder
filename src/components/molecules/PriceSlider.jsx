import React from 'react';

const PriceSlider = ({ value, onChange }) => {
  return (
    <div className="price-slider">
      <input
        type="range"
        min="10"
        max="200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>${value}</span>
    </div>
  );
};

export default PriceSlider;