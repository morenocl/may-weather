import React from "react";
import CurrentContainer from "./CurrentContainer";
import ForecastContainer from "./ForecastContainer";
import Search from "./Search";
import Api from "../api";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.api = new Api(-31, -64);
        console.log(this.api);
    };

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