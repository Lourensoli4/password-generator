import React from "react";
import "./Slider.scss";

const Slider = ({ sliderValue, setSliderValue }) => {
  // When the slider input chages, update the slider value,
  // and rerender the component
  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
  };

  return (
    <div className="slider__container">
      <div className="slider__details">
        <p>Character Length:</p>
        <span>{sliderValue}</span>
      </div>
      <input
        type="range"
        min="6"
        max="16"
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Slider;
