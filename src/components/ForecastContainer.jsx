import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Forecast from './Forecast';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
});

function ForecastContainer(prop) {
  return (
    <Grid container spacing={2}>
      <Forecast list={prop.forecast.list} index={1} />
      <Forecast list={prop.forecast.list} index={2} />
      <Forecast list={prop.forecast.list} index={3} />
      <Forecast list={prop.forecast.list} index={4} />
      <Forecast list={prop.forecast.list} index={5} />
    </Grid>
  );
}

export default ForecastContainer;
