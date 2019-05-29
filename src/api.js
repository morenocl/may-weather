
const api_key = "092666ce8b5be26d8e87904c227fb522";
const url = "https://api.openweathermap.org/data/2.5";
const lang = "es";

class Api {
    constructor() {
        this.apiKey = api_key;
        this.url = url;
    };

    getWeather(city) {
        var url = this.url + "/weather?q=" + city + "&APIKEY=" + this.apiKey + "&lang=" + lang + "&units=metric";
        console.log(url);
        return fetch(url);
    }

    getForecast(city) {
        let url = this.url + "/forecast?" + city + "&APIKEY=" + this.apiKey + "&lang=" + lang;
        return fetch(url);
    }

    find(city) {
        let url = this.url + "/find?q=" + city + "&APIKEY=" + this.apiKey + "&lang=" + lang;
        let json = fetch(url);
        console.log(url);
    }

}

export default Api;