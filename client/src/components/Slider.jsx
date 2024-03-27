import React, { useState } from 'react';

const Slider = ({ min, max, value, onChange }) => {
    console.log(value)
  const [minPrice, setMinPrice] = useState(value[0]);
  const [maxPrice, setMaxPrice] = useState(value[1]);

  const handleMinChange = (event) => {
    const newMin = Math.min(Number(event.target.value), maxPrice);
    setMinPrice(newMin);
    onChange([newMin, maxPrice]);
  };

  const handleMaxChange = (event) => {
    const newMax = Math.max(Number(event.target.value), minPrice);
    setMaxPrice(newMax);
    onChange([minPrice, newMax]);
  };

  return (
    <div className="w-full max-w-md mx-auto p-2">
      <div className="flex justify-between items-center">
        <input
          type="range"
          value={minPrice}
          onChange={handleMinChange}
          min={min}
          max={max}
          className="w-[60%] mr-4"
        />
        <span className='text-sm'>min: ₹{minPrice}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <input
          type="range"
          value={maxPrice}
          onChange={handleMaxChange}
          min={min}
          max={max}
          className="w-[60%] mr-4"
        />
        <span className='text-sm'>max: ₹{maxPrice}</span>
      </div>
    </div>
  );
};

export default Slider;
