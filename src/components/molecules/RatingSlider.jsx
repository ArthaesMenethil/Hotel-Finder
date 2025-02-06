import React from 'react';

const RatingSlider = ({ value, onChange }) => {
  return (
    <div className="rating-slider">
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>{value} ⭐</span>
    </div>
  );
};

export default RatingSlider;