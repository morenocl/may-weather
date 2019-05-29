import React from "react";
import Forecast from "./Forecast";

function ForecastContainer(prop) {
  return(
    <div>
      <Forecast forecast={prop.forecast}/>
    </div>
  );
}

export default ForecastContainer;