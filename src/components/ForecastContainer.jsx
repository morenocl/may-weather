import React from "react";
import Forecast from "./Forecast";

function ForecastContainer(prop) {
  return(
    <div>
      <Forecast list={prop.forecast.list} index={1} />
      <Forecast list={prop.forecast.list} index={2} />
      <Forecast list={prop.forecast.list} index={3} />
      <Forecast list={prop.forecast.list} index={4} />
      <Forecast list={prop.forecast.list} index={5} />
    </div>
  );
}

export default ForecastContainer;