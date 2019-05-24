import React, { Component, Fragment } from "react";
import CurrentContainer from "./CurrentContainer";
import ForecastContainer from "./ForecastContainer";
import Search from "./Search";
import Api from "../api";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            forecast: null,
        }
        this.api = new Api(-31, -64);     
        // console.log(this.state.weather);
    };

    componentDidMount() {
        this.api.getWeather().then(json => this.setState({weather: JSON.stringify(json)}));
        this.api.getForecast().then(json => this.setState({forecast: JSON.stringify(json)}));
    }


    render() {
        const promise = this.state.weather;
        const list = ['1','2','3','7','5','9'];
        return(
            <div>
                { list.map(el => <li>{ el }</li>) }
                <Search></Search>
                <CurrentContainer></CurrentContainer>
                <ForecastContainer></ForecastContainer>
            </div>
        );    
    }
}
export default Home;