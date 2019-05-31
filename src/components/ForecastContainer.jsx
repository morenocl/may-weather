import React from "react";
import Forecast from "./Forecast";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
  return(
    <Grid container spacing={3}>
      <Forecast list={prop.forecast.list} index={1} />
      <Forecast list={prop.forecast.list} index={2} />
      <Forecast list={prop.forecast.list} index={3} />
      <Forecast list={prop.forecast.list} index={4} />
      <Forecast list={prop.forecast.list} index={5} />
    </Grid>
  );
}

export default ForecastContainer;