import React from "react";
import Current from "./Current";

function CurrentContainer(props) {
    return (
        <div>
            { props.weather.name &&
                <div>
                <h2>{props.weather.name}</h2>
                <p>Humedad: {props.weather.main.humidity}</p>
                <p>Presion: {props.weather.main.pressure}</p>
                <p>Temperatura minima: {props.weather.main.temp_min}</p>
                <p>Temperatura maxima: {props.weather.main.temp_max}</p>
                </div>
            }
        </div>
    )
}

export default CurrentContainer;