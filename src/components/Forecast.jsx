import React from "react";

const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB']

function Forecast(prop){
  // today contiene el datallado cada 3 horas del dia.
  let today = prop.list.filter(
    ele => (new Date(Number(ele.dt)*1000)).getDay() === ((new Date()).getDay() + prop.index) % 7);
  //console.log(q)
  let date = (new Date(Number(today[0].dt)*1000));
  let day = date.getDay();
  let fecha = date.getDate() + '/' + (date.getMonth() + 1);
  let url = "http://openweathermap.org/img/w/" + today[3].weather[0].icon + ".png";
  console.log(today[3].weather);
  return(<div>
    <p> { days[day] } </p>
    <p> { fecha } </p>
    <img src={url} alt="Clima"/>
    </div>
  );
}

export default Forecast;