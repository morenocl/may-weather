import React from "react";

import Card from '@material-ui/core/Card';
import Search from "./Search";
import Slide from "./Slide";
import Api from "../api";
import '../css/home.css';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            forecast: [],
            city: 'cordoba',
            type: 0,
        }
        this.api = new Api();
        this.updateCity = this.updateCity.bind(this)
    };

    updateCity(newCity) {
        event.preventDefault();
        this.setState({
          city: newCity,
        });
        this.updateWeather(newCity);
    }

    async updateWeather(newCity) {
        const responseWeather = await this.api.getWeather(newCity);
        const jsonWeather = await responseWeather.json();
        this.setState({weather: jsonWeather});
    }

    render() {
        return(
            <Card className="Home">
                <Search updateCity={this.updateCity}></Search>
                <Slide data={this.state}></Slide>
            </Card>
        );    
    }
}
export default Home;
