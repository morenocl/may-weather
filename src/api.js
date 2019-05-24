const api_key = "092666ce8b5be26d8e87904c227fb522";
const url = "https://api.openweathermap.org/data/2.5";

class Api {
    constructor(latitude, longitude){
        this.apiKey = api_key;
        this.url = url;
        this.lat = latitude;
        this.long = longitude;
    };

    getJson(url){
        const promise = fetch(url).then(res => res.json())
            .then((data) => {
                const d = data;
                return data;
            }).catch(console.log)
        return promise;
    }
    getWeather(args) {
        var url = this.url + "/weather?" + "lat=" + this.lat + "&lon=" + this.long + "&APIKEY=" + this.apiKey;
        return this.getJson(url);
    }

    getForecast(args) {
        // returns the weather of the next 5 days every 3 hours
        let url = this.url + "/forecast?" + "lat=" + this.lat + "&lon=" + this.long + "&APIKEY=" + this.apiKey;
        return this.getJson(url);
    }



}

export default Api;