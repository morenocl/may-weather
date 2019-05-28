import React from "react";
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import Search from "./Search";
import Slide from "./Slide";
import Api from "../api";
import '../css/home.css';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            forecast: {},
            city: 'cordoba',
            loading: false,
            checked: false,
            unMount: false,
        }
        this.api = new Api();
        this.updateCity = this.updateCity.bind(this)
        this.updateLoading = this.updateLoading.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
    };

    updateLoading() {
        this.setState({
            loading: !this.state.loading,
        });
    }

    updateCity(newCity) {
        event.preventDefault();
        this.setState({
          city: newCity,
        });
        this.updateWeather(newCity);
    }

    async updateWeather(newCity) {
        this.updateLoading();
        const responseWeather = await this.api.getWeather(newCity);
        const jsonWeather = await responseWeather.json();
        let check = true, unmount = true;
        if (jsonWeather.cod == "404") {
            check = false;
            unmount = false;
        }
        this.setState({ checked: check }, () => {
            setTimeout(() => {
                this.setState({ unMount: unmount });
            }, 200);
        });
        
        this.setState({
            weather: jsonWeather,
        });

        this.updateLoading();
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked,
        });
    }
    render() {
        const { checked } = this.state;
        return(
            <div>
            <Card className="Search">
                <Search updateLoading={this.updateLoading} 
                        updateCity={this.updateCity}
                        loading={this.state.loading}></Search>
            </Card>
            { this.state.unMount &&
                <Fade in={checked}>
                    <Card className="Home">
                        {/* { this.state.loading && <LinearProgress /> } */}
                        <Slide data={this.state}></Slide>
                    </Card>
                </Fade>
            }
            </div>
        );    
    }
}
export default Home;
