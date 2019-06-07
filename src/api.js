
const apiKey = '092666ce8b5be26d8e87904c227fb522';
const url = 'https://api.openweathermap.org/data/2.5';
const lang = 'es';

class Api {
  constructor() {
    this.apiKey = apiKey;
    this.url = url;
  }

  getWeather(city) {
    const fetchUrl = `${this.url}/weather?q=${city}&APIKEY=${this.apiKey}&lang=${lang}&units=metric`;
    return fetch(fetchUrl);
  }

  getForecast(city) {
    const fetchUrl = `${this.url}/forecast?q=${city}&APIKEY=${this.apiKey}&lang=${lang}&units=metric`;
    return fetch(fetchUrl);
  }

  find(city) {
    const fetchUrl = `${this.url}/find?q=${city}&APIKEY=${this.apiKey}&lang=${lang}`;
    return fetch(fetchUrl);
  }
}

export default Api;
