import React from "react";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
        }
    };

    handleSubmit(event){
        // hacer fetch
    }
    handleOnChange(){
        this.setState({value:event.target.value});
    }

    render() {
        return(
            <form onSubmit={this.hanleSubmit}>
                <input type="text" 
                placeholder="Enter a City"
                value ={this.state.value}
                onChange={this.handleOnChange} />
                <input type="submit" value="Submit"/>
            </form>
        );    
    }
}
export default Home;