import React from 'react';

function Current(props) {
  const url = `http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`;
  return (
    <div>
      <img src={url} alt="Clima" />
      <h2>{props.weather.name}</h2>
      <p>
Humedad:
        {props.weather.main.humidity}
      </p>
      <p>
Presion:
        {props.weather.main.pressure}
      </p>
      <p>
Temperatura minima:
        {props.weather.main.temp_min}
      </p>
      <p>
Temperatura maxima:
        {props.weather.main.temp_max}
      </p>
    </div>
  );
}


export default Current;
