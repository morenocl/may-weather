import React from "react";
import Current from "./Current";

function CurrentContainer(props) {
    return (
        <div>
            { props.weather.name &&
                <Current></Current>
            }
        </div>
    )
}

export default CurrentContainer;