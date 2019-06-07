import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

function Current(props) {
  const { weather } = props;
  const urlIcon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  const sunrise = new Date(Number(weather.sys.sunrise) * 1000);
  const sunset = new Date(Number(weather.sys.sunset) * 1000);
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid className="cityName" item xs={12}>
          <h1>{weather.name}</h1>
        </Grid>
        <Grid item xs={3}>
          <img src={urlIcon} alt="Clima" />
          <h2>
            {weather.main.temp}
            {' '}
            C°
          </h2>
        </Grid>
        <Grid item xs={3}>
          <p>
            Presion:
            {weather.main.pressure}
          </p>
          <p>
            Temp min:
            {weather.main.temp_min}
          </p>
          <p>
            Sunrise:
            {sunrise.getHours()}
          </p>
        </Grid>
        <Grid item xs={3}>
          <p>
            Humedad:
            {weather.main.humidity}
            %
          </p>
          <p>
            Temp max:
            {weather.main.temp_max}
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
