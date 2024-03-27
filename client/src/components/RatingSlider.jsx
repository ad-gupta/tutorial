import React from "react";

const RatingSlider = ({ min, onChange, value }) => {
  const handleMinChange = (event) => {
    const newValue = Math.max(Number(event.target.value), min);
    onChange(newValue);
  };

  return (
    <div className="flex justify-between items-center">
      <input
        type="range"
        value={value}
        onChange={handleMinChange}
        min={min}
        max={5}
        className="w-full mr-4"
      />
      <span>max:{value}</span>
    </div>
  );
};

export default RatingSlider;
