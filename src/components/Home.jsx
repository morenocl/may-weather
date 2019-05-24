import React from "react";
import CurrentContainer from "./CurrentContainer";
import ForecastContainer from "./ForecastContainer";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
        }
        // need to add this otherwise it dosen work
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event){
        // hacer fetch
        event.preventDefault();
    }
    
    handleOnChange(){
        this.setState({value:event.target.value});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.hanleSubmit}>
                    <input type="text" 
                    placeholder="Enter a City"
                    value ={this.state.value}
                    onChange={this.handleOnChange} />
                    <input type="submit" value="Submit"/>
                </form>
                <CurrentContainer></CurrentContainer>
                <ForecastContainer></ForecastContainer>
            </div>
        );    
    }
}
export default Home;