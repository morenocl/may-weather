import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

function CustomSearch(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase 
        className={classes.input} 
        value={props.value} 
        onChange={props.onChange}
        placeholder="Ciudad"/>
      <Divider className={classes.divider} />
      <IconButton className={classes.iconButton} aria-label="Search" type="submit">
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        search: "",
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event){
    event.preventDefault();
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
          >
          </CustomSearch>
        </form>
      </div>
    );    
  }
}
export default Search;