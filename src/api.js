
const api_key = "092666ce8b5be26d8e87904c227fb522";
const url = "https://api.openweathermap.org/data/2.5";

class Api {
    constructor() {
        this.apiKey = api_key;
        this.url = url;
    };

    getWeather(city) {
        var url = this.url + "/weather?q=" + city + "&APIKEY=" + this.apiKey;
        return fetch(url);
    }

    getForecast(city) {
        let url = this.url + "/forecast?" + city + "&APIKEY=" + this.apiKey;
        return fetch(url);
    }

}

export default Api;