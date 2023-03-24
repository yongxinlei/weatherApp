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
      </div>
    </div>
  );
}

export default WeatherInfo;
