# Proyecto MayWeather

## Indice 

    1. Requisitos 
    2. Componentes

        2.1 Current Container

        2.2 Current Forecast 

    3. Bibliografía 

## Requisitos
```
npm i @babel/preset-env @babel/plugin-transform-runtime @babel/runtime --save-dev
npm i css-loader style-loader --save-dev
Npm i - S react-select
Npm i notistack
```

## Componentes
La siguiente imagen muestra como diseñamos la jerarquía de los componentes en nuestra página.

![jerarquíaComponentes](/diagramas/arbolComponentes.png)

Como podemos observar Home es una de las dos class components que tenemos, pero es la principal, ya que, que cuando llamamos a la función "render" en ``index.js`` le pedimos que renderice la componente Home. Esta componente va a ser la que contenga toda la App, dentro suyo se encuentran **Slide** y **Search**.

### Slide 

Dentro de Slide utilizamos  la componente *Tabs* que nos proporciona Materia-UI, dentro la misma utilizamos otra componente también proporcionada por Material-UI llamada *Tab*, cada Tab tiene una etiqueta para Current y otra para el Forecast. Después tenemos un *Tab Content* que dependiendo de la Tab en la que estoy renderiza una cosa o la otra 

#### Current Container

Si nos dirigimos hacía esta componente vamos a poder oservar que no hay mucho, retornamos a la componente current que previamente le pasamos los parametros del clima.

Dentro de current optamos por usar una componente de Material-UI denominada *Grid* con el objetivo que se nos facilite poder modificar los estilo de la misma. Adentro de esta grilla ponemos los datos del día que nos pide la consigna.


#### Forecast Container

A diferencia de Current Container, Forecast Container tiene un par de cosas más. Lo que retornamos es una *Grilla* que contiene los datos climáticos de los siguientes 5 días, para ello llamamos a la componente Forecast con cada uno de los días.

Dentro de Forecast devolvemos otra grilla que contiene todos los datos (como en Currernt), pero como la Api no nos proporciona la temperatura máxima ni la mínima, decidimos utilizar una *arrow function* para recorrer todas las temperaturas de ese día y poder encontrar esos valores.


## Bibiografía 

    1. [Materials-UI](https://material-ui.com/)

