import React from 'react';
import PropTypes from 'prop-types';
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

const AsyncSelectStyle = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'white',
    backgroundColor: state.isFocused ? '#444a4c' : '#2d3436',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

function CustomSearch(props) {
  const { loading, onChange } = props;
  let icon;
  if (loading) {
    icon = <CircularProgress size={24} />;
  } else {
    icon = <SearchIcon />;
  }
  return (
    <Paper className="root">
      <AsyncSelect
        className="input"
        placeholder="Seleccionar ciudad"
        onChange={onChange}
        loadOptions={promiseOptions}
        cacheOptions
        defaultOptions
        styles={AsyncSelectStyle}
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
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { updateCity } = this.props;
    const { search } = this.state;
    event.preventDefault();
    updateCity(search);
  }

  handleOnChange(newCity) {
    this.setState({ search: newCity.value });
  }

  render() {
    const { search } = this.state;
    const { loading } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CustomSearch
            value={search}
            onChange={this.handleOnChange}
            loading={loading}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string,
  loading: PropTypes.bool,
};

export default Search;
