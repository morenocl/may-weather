import React from "react";

function Forecast(props){
  return(
    <div>forecast: {props.forecast.city.name}</div>
  );
}

export default Forecast;