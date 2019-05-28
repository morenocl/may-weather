import React from "react";

class Current extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
        }
    };

    render() {
        return(
            <div>
                <h2>this.state.name</h2>
            </div>
        );    
    }
}

export default Current;