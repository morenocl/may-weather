# Proyecto MayWeather

#En el README deben detallar los componentes de terceros que utilizaron, los pasos manuales deinstalación y ejecución (si los hubiere), configuraciones manuales, decisiones de diseño, etc.

## Indice 

1. Requisitos 

2. Componentes

    2.1 Search

    2.2 Current Container

    2.3 Current Forecast 

    2.4 Weather Card

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

### Search 

En Search lo que vamos a hacer es manejar los eventos tales como OnClick, OnChange y por último OnSubmit. Onclick es cuando se apreta (se hace Click) en el buscador para comenzar a escribir. OnChange cada vez que se escribe una letra nueva en el buscador lo que se hace es hacer una *request* a la Api de open Weather para poder obtener todas las posibles ciudades que contengan ese nombre y de esta forma podemos hacer el **auto-completado** , esto lo hacemos con la función *promiseOptions*. Por último cuando cuando ocurre un evento de tipo OnSubmit, es decir, el usuario apreta enter, se hace una *request* a la Api con los datos ingresados por el usuario. En caso de que la *request* falle Home se encarga de generar una notificación para avisar que los datos ingresados son correctos. En el caso contrario la componente Search le devuelve el nombre a la componente Home para que esta pueda pedir los datos a la Api.

### Slide 

Dentro de Slide utilizamos  la componente *Tabs* que nos proporciona Materia-UI, dentro la misma utilizamos otra componente también proporcionada por Material-UI llamada *Tab*, cada Tab tiene una etiqueta para Current y otra para el Forecast. Después tenemos un *Tab Content* que dependiendo de la Tab en la que estoy renderiza una cosa o la otra 

#### Current Container

Si nos dirigimos hacía esta componente vamos a poder oservar que no hay mucho, retornamos a la componente current que previamente le pasamos los parametros del clima.

Dentro de current optamos por usar una componente de Material-UI denominada *Grid* con el objetivo que se nos facilite poder modificar los estilo de la misma. Adentro de esta grilla ponemos los datos del día que nos pide la consigna.


#### Forecast Container

A diferencia de Current Container, Forecast Container tiene un par de cosas más. Lo que retornamos es una *Grilla* que contiene los datos climáticos de los siguientes 5 días, para ello llamamos a la componente Forecast con cada uno de los días.

Dentro de Forecast devolvemos otra grilla que contiene todos los datos (como en Currernt), pero como la Api no nos proporciona la temperatura máxima ni la mínima, decidimos utilizar una *arrow function* para recorrer todas las temperaturas de ese día y poder encontrar esos valores.

#### Weather Card

## Bibiografía 

1. [Materials-UI](https://material-ui.com/)

