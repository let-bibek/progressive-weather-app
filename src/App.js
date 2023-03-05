import React, { useState } from 'react';
import fetchWeather from './api/fetchWeather';
import { FaAirbnb } from "react-icons/fa";
import './App.css';
const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [sunrise, setSunrise] = useState('20');
 
  const search = async (e) => {
    if (e.key == "Enter") {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
      setCity('');
    }
  }


  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search weather..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyUp={search}
      />
      {weather.main && (
        <>
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;</sup>C
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
            <div className="additional-info">
              <h3>Additional info</h3>
              <div className="two-col">
                <div>Min/Max</div>
                <div>
                  {Math.round(weather.main.temp_min) +
                    "/" +
                    Math.round(weather.main.temp_max)}
                  <sup>&deg;</sup>C
                </div>
              </div>
              <br />
              <div className="two-col">
                <div>Humidity</div>
                <div>{Math.round(weather.main.humidity)}%</div>
              </div>
              <br />
              <div className="two-col">
                <div>Wind</div>
                <div>{weather.wind.speed} mph</div>
              </div>
              <br />
              <div className="two-col">
                <div>Visibility</div>
                <div>{weather.visibility}mi</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;