import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherInfo from "./components/WeatherInfo";
import { fetchWeatherAction } from "./weatherApi";
import "./app.css";
import AddWeather from "./components/AddWeather";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherList, setWeatherList] = useState([]);

  // Dispatch Action:
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction(""));
  }, [dispatch]);

  // Select state from store:
  const state = useSelector((state) => state);
  const { weather } = state.reducer;

  return (
    <main>
      <div className="container">
        <form className="box">
          <h1 className="title">Weather App</h1>
          <p>Search your local weather</p>
          <div>
            <input
              value={cityName}
              onChange={(event) => setCityName(event.target.value)}
              placeholder="Search City"
            ></input>
            {/* Button */}
            <button
              onClick={() => dispatch(fetchWeatherAction(cityName))}
              type="button"
              className="btn"
            >
              Search
            </button>

            <button
              onClick={() => {
                setWeatherList([...weatherList, weather]);
                console.log(weatherList, "weatherList");
              }}
              type="button"
              className="btn"
            >
              Add
            </button>
          </div>
        </form>

        <WeatherInfo data={weather} />
        <AddWeather weatherList={weatherList} />
      </div>
    </main>
  );
}

export default App;
