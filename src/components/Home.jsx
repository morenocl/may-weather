import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { urlImgLogo } from '../settings';
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
      loading: false,
      checked: false,
      unMount: false,
    };
    this.updateCity = this.updateCity.bind(this);
    this.shiftLoading = this.shiftLoading.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  shiftLoading() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }

  updateCity(newCity) {
    this.setState({
      city: newCity,
    });
    this.updateWeather(newCity);
  }

  async updateWeather(newCity) {
    const { enqueueSnackbar } = this.props;
    this.shiftLoading();
    const api = new Api();
    const responseWeather = await api.getWeather(newCity);
    const responseForecast = await api.getForecast(newCity);
    const jsonWeather = await responseWeather.json();
    const jsonForecast = await responseForecast.json();
    let check = true;
    let unmount = true;

    if (jsonWeather.cod >= '400' && jsonWeather.cod < '500') {
      const variant = 'error';
      enqueueSnackbar('City does not exist!', { variant });
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

    this.shiftLoading();
  }

  handleChange() {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
  }

  render() {
    const { checked, loading, unMount } = this.state;
    return (
      <div>
        <Box className="logo">
          <img src={urlImgLogo} alt="logo" className="media" />
        </Box>
        <Box className="Search">
          <Search
            updateCity={this.updateCity}
            loading={loading}
          />
        </Box>
        { unMount
        && (
        <Fade in={checked}>
          <Card className="Home">
            <Slide {...this.state} />
          </Card>
        </Fade>
        )
        }
      </div>
    );
  }
}



const App = withSnackbar(Home);

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  );
}
