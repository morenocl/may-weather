import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import '../css/forecast.css';
import { days, urlImg } from '../settings';
import WeatherCard from './WeatherCard';

function Forecast(props) {
  // today contiene el datallado cada 3 horas del dia.
  const { list, index } = props;
  const today = list.filter(
    ele => (new Date(Number(ele.dt) * 1000)).getDay() === ((new Date()).getDay() + index) % 7,
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : null;

  return (
    <Grid item sm>
      <Paper className="gridItem" onClick={handleClick}>
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <WeatherCard list={today} />
      </Popover>
    </Grid>
  );
}

export default Forecast;
