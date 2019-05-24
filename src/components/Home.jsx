import React from "react";
import CurrentContainer from "./CurrentContainer";
import ForecastContainer from "./ForecastContainer";
import Search from "./Search"

class Home extends React.Component{
    render() {
        return(
            <div>
                <Search></Search>
                <CurrentContainer></CurrentContainer>
                <ForecastContainer></ForecastContainer>
            </div>
        );    
    }
}
export default Home;