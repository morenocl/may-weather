import React from "react";

const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB']

function Forecast(prop){
  // today contiene el datallado cada 3 horas del dia.
  let today = prop.list.filter(
    ele => (new Date(Number(ele.dt)*1000)).getDay() === ((new Date()).getDay() + prop.index) % 7);
  // Calculo de temp max y min del dia.
  var max = 0;
  var min = 99;
  today.forEach(function(p) {
    if(p.main.temp > max) max = p.main.temp;
    if(p.main.temp < min) min = p.main.temp;
  })

  //console.log(q)
  let date = (new Date(Number(today[0].dt)*1000));
  let day = date.getDay();
  let fecha = date.getDate() + '/' + (date.getMonth() + 1);
  let url = "http://openweathermap.org/img/w/" + today[3].weather[0].icon + ".png";
  
  return(<div className="forecastCard">
    <p> { days[day] } </p>
    <p> { fecha } </p>
    <img src={url} alt="Clima"/>
    <p>{max}°C {min}°C</p>
    </div>
  );
}

export default Forecast;