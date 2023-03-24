import React from "react";
import "./weatherInfo.css";
import moment from "moment";

function WeatherInfo(props) {
  console.log(props, "data");
  const data = props.data;
  let newDate = new Date();
  if (!data) {
    return <div></div>;
  }

  return (
    <div className="container">
      <div className="weather-box">
        {" "}
        <h3>Current Weather: {data.name}</h3>
        <h5>
          {moment(newDate).format("dddd")} | {moment(newDate).format("MM/DD/Y")}
        </h5>
        <span className="flex items-center justify-center w-16 h-16 rounded-full border-2">
          {/* weather logo */}
          <img
            className="w-56"
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            alt="/"
          />
        </span>
        <h4>Temperature: {data.main.temp}°F</h4>
        <h4>Humidity: {data.main.humidity}%</h4>
      </div>
    </div>
  );
}

export default WeatherInfo;
