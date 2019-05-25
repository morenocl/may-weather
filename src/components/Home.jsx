import React, { Component, Fragment } from "react";
import CurrentContainer from "./CurrentContainer";
import ForecastContainer from "./ForecastContainer";
import Search from "./Search";
import Api from "../api"

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            forecast: [],
        }
        this.api = new Api(-31, -64);     
    };

    async componentDidMount() {
        const responseWeather = await this.api.getWeather();
        const jsonWeather = await responseWeather.json();
        this.setState({weather: jsonWeather});
        
        const responseForecast = await this.api.getForecast();
        const jsonForecast = await responseForecast.json();
        this.setState({forecast: jsonForecast});
    }

    render() {
        return(
            <div>

                { this.state.weather.name }

                <Search></Search>
                <CurrentContainer></CurrentContainer>
                <ForecastContainer></ForecastContainer>
            </div>
        );    
    }
}
export default Home;