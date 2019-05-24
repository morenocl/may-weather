const api_key = "092666ce8b5be26d8e87904c227fb522";
const url = "https://api.openweathermap.org/data/2.5";

class Api {
    constructor(latitude, longitude){
        this.apiKey = api_key;
        this.url = url;
        this.lat = latitude;
        this.long = longitude;
    };

    getWeather(args) {
        var url = this.url + "/weather?" + "lat=" + this.lat + "&lon=" + this.long + "&APIKEY=" + this.apiKey;
        console.log(url);
        var response = {};
        fetch(url).then(res => res.json())
        .then((data) => {
            console.log(data);
            response = data;
        }).catch(console.log)
        return response;
    }

    getForecast(args) {
        // return "";
    }


}

export default Api;