import React from "react";
import Current from "./Current";

class CurrentContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    };

    render() {
        return(
            <div>
                <h1>current container</h1>
                <Current></Current>
                <Current></Current>
                <Current></Current>
            </div>
        );    
    }
}

export default CurrentContainer;