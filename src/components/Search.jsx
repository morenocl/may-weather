import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
        }
        // need to add this otherwise it dosent work
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event){
        event.preventDefault();
    }
    
    handleOnChange(){
        this.setState({value:event.target.value});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="Enter a City"
                    value ={this.state.value}
                    onChange={this.handleOnChange} />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );    
    }
}
export default Search;