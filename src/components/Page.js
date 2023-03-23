import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./page.css";

function Page() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const onCityNameChange = (e) => {
    setCityName(e.target.value);
  };

  const onClearClick = (e) => {
    setWeatherData(null);
    setCityName("");
  };

  const onSearchFormSubmit = async (e) => {
    e.preventDefault();

    const lowercaseName = cityName.toLocaleLowerCase();
    const url = `${api.base}weather?q=${lowercaseName}&units=imperial,&APPID=9d4bc884118c415fc015ad23d6dec881`;
    setWeatherData(null);
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Bad API request");
      }
      const json = await response.json();
      setWeatherData(json);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <main>
      <div className="container">
        <form className="box" onSubmit={onSearchFormSubmit}>
          <h1 className="title">Weather App</h1>
          <p>Search your local weather</p>
          <div>
            <input
              id="city-name"
              type="text"
              value={cityName}
              onChange={onCityNameChange}
              label="Enter City"
              variant="filled"
            />
          </div>
          <div>
            <button
              type="submit"
              value={isLoading ? "Searching" : "Search"}
              disabled={isLoading}
              variant="contained"
            >
              Search
            </button>
          </div>
          <div>
            <button type="button" value="Clear" onClick={onClearClick}>
              Clear
            </button>
          </div>
        </form>

        {weatherData && <WeatherInfo data={weatherData} />}
      </div>
    </main>
  );
}

export default Page;
