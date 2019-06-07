import React from 'react';
import Paper from '@material-ui/core/Paper';
import { urlImg } from '../settings';

function WheatherCard(prop) {
  const { list } = prop;

  let max = -99;
  let min = 99;
  list.forEach((elem) => {
    if (elem.main.temp > max) max = elem.main.temp;
    if (elem.main.temp < min) min = elem.main.temp;
  });

  const content = list.map((element) => {
    const tiempo = (new Date(Number(element.dt) * 1000));
    const hora = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const temperatura = element.main.temp;
    const clima = element.weather.main;
    const presion = element.main.pressure;
    const humedad = element.main.humidity;
    const wind = element.wind.speed;
    // La siguiente linea no estoy seguro si es correcta.
    // ¿de donde obtener la probabilidad de lluvia sino?
    const rain = element.clouds.all;
    const url = `${urlImg + element.weather[0].icon}.png`;
    return (
      <Paper>
        <p>
          {' '}
          {hora}
:
          {minutos}
          {' '}
-
          {' '}
          {hora + 3}
:
          {minutos}
          {' '}
        </p>
        { <img src={url} alt="Clima" /> }
        <p>
          {' '}
          {temperatura}
C°
          {' '}
          {clima}
          {' '}
        </p>
        <p>
          {' '}
Preassure:
          {presion}
          {' '}
Humedad:
          {humedad}
          {' '}

        </p>
        <p>
          {' '}
Wind:
          {wind}
          {' '}
Rain:
          {rain}
          {' '}

        </p>
        <p>
          {' '}
Min Temp.:
          {min}
          {' '}
Max Temp.:
          {max}
          {' '}

        </p>
      </Paper>
    );
  });
  return (
    <div>
      {content}
    </div>
  );
}

export default WheatherCard;
