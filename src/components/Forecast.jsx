import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/forecast.css';
import { days, urlImg } from '../settings';

function Forecast(props) {
  // today contiene el datallado cada 3 horas del dia.
  const today = props.list.filter(
    ele => (new Date(Number(ele.dt) * 1000)).getDay() === ((new Date()).getDay() + props.index) % 7,
  );
  // Calculo de temp max y min del dia.
  let max = -99;
  let min = 99;
  today.forEach((elem) => {
    if (elem.main.temp > max) max = elem.main.temp;
    if (elem.main.temp < min) min = elem.main.temp;
  });

  const date = (new Date(Number(today[0].dt) * 1000));
  const day = date.getDay();
  const fecha = `${date.getDate()}/${date.getMonth() + 1}`;
  const url = `${urlImg + today[3].weather[0].icon}.png`;

  return (
    <Grid item sm>
      <Paper className="gridItem">
        <p>
          {' '}
          { days[day] }
          {' '}
        </p>
        <p>
          {' '}
          { fecha }
          {' '}
        </p>
        { <img src={url} alt="Clima" /> }
        <p>
          {Math.round(max)}
°C
          {' '}
          {Math.round(min)}
°C
        </p>
      </Paper>
    </Grid>
  );
}

export default Forecast;
