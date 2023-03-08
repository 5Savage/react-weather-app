import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Madrid",
    date: "Tuesday 12:30pm",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "60",
    wind: "70",
    temperature: "70"
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Type a city.."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              Last updated: {weatherData.date}
              <span></span>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                id="icon"
              />
              <strong>{weatherData.temperature} </strong>
              <span className="units"> °F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}mph</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small>
        <a
          href="https://github.com/5Savage/weather-app-final"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced code
        </a>
        by Myah Savage
      </small>
    </div>
  );
}
