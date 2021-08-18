import React from "react";

const IconCard = (props) => {
  return (
    <div class="container">
      <image class="icon" src={} alt="current weather icon" />
      <div class="text-container">
        <p class="temp">12</p>
        <span class="temp-sign">°C</span>
        <p class="day">Monday,</p>
        <span class="time">14:00</span>
      </div>
    </div>
  );
};
export default IconCard;
