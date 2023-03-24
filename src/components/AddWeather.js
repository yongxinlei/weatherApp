import React from "react";
import "./addWeather.css";

function AddWeather({ weatherList }) {
  console.log(weatherList, "weatherList");

  return (
    <div className="container">
      {weatherList.map((item) => {
        return (
          <div className="weather-box-add">
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`}
                alt="/"
              />
            </span>
            <h3>Current Weather: {item.name}</h3>
            <h4>Temperature: {item.main.temp}°F</h4>
            <h4>Humidity: {item.main.humidity}%</h4>
          </div>
        );
      })}
    </div>
  );
}

export default AddWeather;
