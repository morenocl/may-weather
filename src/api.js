const api_key = "092666ce8b5be26d8e87904c227fb522";
const url = "api.openweathermap.org/data/2.5";

class Api {
    constructor(latitude, longitude){
        this.apiKey = api_key;
        this.url = url;
        this.lat = latitude;
        this.long = longitude;
    };

    getWeather(args) {
        let url = this.url + "/weather?" + "&lat=" + this.lat + "&lon=" + this.long + "&APIKEY=" + this.apiKey;
        
        return "gon puto";
    }

    getForecast(args) {
        return "gon putardo nea";
    }


}

export default Api;