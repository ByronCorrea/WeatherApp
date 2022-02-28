import React, { useState, useEffect } from "react";
import styles from "./styles/Ciudad.module.css";
import WeatherIcon from "./WeatherIcon";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Ciudad() {
  const [city, setCity] = useState(undefined);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCity(ciudad);
        } else {
          setCity(null);
        }
      });
  }, [id]);

  return (
    <div>
      {city === undefined && <h1>Loading...</h1>}
      {city === null && <h1>City not found</h1>}
      {city && (
        <div className={styles.ciudad}>
          <div>
            <h2 className={styles.name}>{city.name}</h2>
            <div className={styles.tarjeta}>
              <div>Temp: {Math.round(city.temp)} ºC</div>
              <div>Min: {city.min}ºC</div>
              <div>Max: {city.max}ºC</div>
              <div>Wind: {Math.round(city.wind)} km/h</div>
              <div>Clouds: {city.clouds}</div>
              <div>Latitud: {Math.round(city.latitud)}º</div>
              <div>Longitud: {Math.round(city.longitud)}º</div>
              <WeatherIcon icon={city.img} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
