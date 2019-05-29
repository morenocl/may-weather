import React from "react";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/Search.css';

class CustomSearch extends React.Component {
  render() {
    let icon;
    if (this.props.loading) {
      icon =  <CircularProgress size={24}/>
    } else {
      icon = <SearchIcon />
    }
    return (
      <Paper className="root">
        <InputBase 
          className="input" 
          value={this.props.value} 
          onChange={this.props.onChange}
          placeholder="Ciudad"/>
        <Divider className="divider" />
        <IconButton className="iconButton" aria-label="Search" type="submit">
          {icon}
        </IconButton>
      </Paper>
    );
  }
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
    event.preventDefault();                       // Bloquea redireccion
    this.props.updateCity(this.state.search); 
  }
  
  handleOnChange(){
    this.setState({search:event.target.value});
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