import React from "react";
import Forecast from "./Forecast";

class ForecastContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  };

  render() {
    return(
      <div>
        <Forecast></Forecast>
      </div>
    );
  }
}

export default ForecastContainer;