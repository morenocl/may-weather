import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import AsyncSelect from 'react-select/async';
import Api from '../api';
import '../css/Search.css';

function promiseOptions(inputValue) {
  return new Api().find(inputValue).then(response => response.json()).then((json) => {
    const options = [];
    json.list.map(elem => options.push({
      value: `${elem.name}, ${elem.sys.country}`,
      label: `${elem.name}, ${elem.sys.country}`,
    }));
    return options;
  });
}

function CustomSearch(props) {
  let icon;
  if (props.loading) {
    icon = <CircularProgress size={24} />;
  } else {
    icon = <SearchIcon />;
  }
  return (
    <Paper className="root">
      <AsyncSelect
        className="input"
        placeholder="Seleccionar ciudad"
        onChange={props.onChange}
        loadOptions={promiseOptions}
        cacheOptions
        defaultOptions
      />
      <Divider />
      <IconButton className="iconButton" aria-label="Search" type="submit">
        {icon}
      </IconButton>
    </Paper>
  );
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      loading: props.loading,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: nextProps.loading });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateCity(this.state.search);
  }

  handleOnChange(newCity) {
    this.setState({ search: newCity.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CustomSearch
            value={this.state.value}
            onChange={this.handleOnChange}
            loading={this.state.loading}
          />
        </form>
      </div>
    );
  }
}

export default Search;
