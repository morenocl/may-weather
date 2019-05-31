import React from 'react';
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Search from './Search';
import Slide from './Slide';
import Api from '../api';
import '../css/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      forecast: {},
      city: '',
      loading: false,
      checked: false,
      unMount: false, // Renderizar informacion
    };
    this.api = new Api();
    this.updateCity = this.updateCity.bind(this);
    this.updateLoading = this.updateLoading.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateLoading() {
    this.setState({
      loading: !this.state.loading,
    });
  }

  updateCity(newCity) {
    // event.preventDefault();
    this.setState({
      city: newCity,
    });
    this.updateWeather(newCity);
  }

  async updateWeather(newCity) {
    this.updateLoading();
    const responseWeather = await this.api.getWeather(newCity);
    const responseForecast = await this.api.getForecast(newCity);
    const jsonWeather = await responseWeather.json();
    const jsonForecast = await responseForecast.json();
    let check = true; let
      unmount = true;

    if (jsonWeather.cod == '400' || jsonWeather.cod == '404') { // Cambiar
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
      forecast: jsonForecast,
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
    return (
      <div>
        <Box className="Search">
          <Search
            updateLoading={this.updateLoading}
            updateCity={this.updateCity}
            loading={this.state.loading}
          />
        </Box>
        { this.state.unMount
        && (
        <Fade in={checked}>
          <Card className="Home">
            <Slide data={this.state} />
          </Card>
        </Fade>
        )
      }
      </div>
    );
  }
}
export default Home;
