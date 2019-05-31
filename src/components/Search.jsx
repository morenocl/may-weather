import React from "react";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/Search.css';


import AsyncSelect from 'react-select/async';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const api_key = "092666ce8b5be26d8e87904c227fb522";
const url = "https://api.openweathermap.org/data/2.5";
const lang = "es";

function promiseOptions(inputValue) {
  return fetch(url+"/find?q="+inputValue+"&APIKEY=" + api_key)
  .then((response) => {
    return response.json();
  }).then((json) => {
    var options = [];
    json.list.map(elem => 
      options.push({
        value: elem.name +", "+ elem.sys.country, 
        label: elem.name +", "+ elem.sys.country})
    );
    return options;
  });

}

function CustomSearch(props) {
  let icon;
  if (props.loading) {
    icon =  <CircularProgress size={24}/>
  } else {
    icon = <SearchIcon />
  }
  return (
    <Paper className="root">
      <AsyncSelect
        className="input"
        placeholder="Seleccionar ciudad"
        onChange={props.onChange}
        loadOptions={promiseOptions}
        cacheOptions 
        defaultOptions></AsyncSelect>
      <Divider />
      <IconButton className="iconButton" aria-label="Search" type="submit">
        {icon}
      </IconButton>
    </Paper>
  );
}

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      loading: props.loading,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({loading: nextProps.loading});
  }

  handleSubmit(event){
    console.log(event.target);
    event.preventDefault();
    this.props.updateCity(this.state.search); 
  }
  
  handleOnChange(newCity){
    console.log(newCity.value);
    this.setState({search:newCity.value});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <CustomSearch 
            value={this.state.value}
            onChange={this.handleOnChange}
            loading={this.state.loading}
          >
          </CustomSearch>
        </form>
      </div>
    );    
  }
}

export default Search;