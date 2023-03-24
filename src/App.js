import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherInfo from "./components/WeatherInfo";
import { fetchWeatherAction } from "./weatherApi";
import "./app.css";

function App() {
  const [cityName, setCityName] = useState("");

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
            >
              Search
            </button>
          </div>
        </form>

        <WeatherInfo data={weather} />
      </div>
    </main>
  );
}

export default App;
