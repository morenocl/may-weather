import React from "react";
import Current from "./Current";

function CurrentContainer(props) {
    return (
        <div>
            <h1>current container</h1>
            {props.weather.name}
            <Current></Current>
        </div>
    )
}

export default CurrentContainer;