import React from 'react';
import Grid from '@material-ui/core/Grid';

function Current(props) {
  const urlIcon = `http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`;
  const sunrise = new Date(Number(props.weather.sys.sunrise) * 1000);
  const sunset = new Date(Number(props.weather.sys.sunset) * 1000);
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid className="cityName" item xs={12}>
          <h1>{props.weather.name}</h1>
        </Grid>
        <Grid item xs={3}>
          <img src={urlIcon} alt="Clima" />
          <h2>
            {props.weather.main.temp}
            {' '}
C°
          </h2>
        </Grid>
        <Grid item xs={3}>
          <p>
Presion:
            {props.weather.main.pressure}
          </p>
          <p>
Temp min:
            {props.weather.main.temp_min}
          </p>
          <p>
Sunrise:
            {sunrise.getHours()}
          </p>
        </Grid>
        <Grid item xs={3}>
          <p>
Humedad:
            {props.weather.main.humidity}
%
          </p>
          <p>
Temp max:
            {props.weather.main.temp_max}
          </p>
          <p>
Sunset:
            {sunset.getHours()}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}


export default Current;
