import React from "react";
import CardMedia from '@material-ui/core/CardMedia';

function CurrentContainer(props) {
    let url = "http://openweathermap.org/img/w/" + props.weather.weather[0].icon + ".png";
    return (
        <div>
            { props.weather.name &&
                <div>
                <img src={url} alt="Clima"/>
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