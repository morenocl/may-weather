
const api_key = "092666ce8b5be26d8e87904c227fb522";
const url = "https://api.openweathermap.org/data/2.5";

class Api {
    constructor(latitude, longitude){
        this.apiKey = api_key;
        this.url = url;
        this.lat = latitude;
        this.long = longitude;
    };

    getWeather() {
        var url = this.url + "/weather?" + "lat=" + this.lat + "&lon=" + this.long + "&APIKEY=" + this.apiKey;
        console.log(url);
        return fetch(url);
    }

    getForecast() {
        // returns the weather of the next 5 days every 3 hours
        let url = this.url + "/forecast?" + "lat=" + this.lat + "&lon=" + this.long + "&APIKEY=" + this.apiKey;
        return fetch(url);
    }

}

export default Api;