let weather = {
    "apiKey": "6a342d639339a58ef951b69b3baaf208",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then((response) => response.json())
        .then((data) => console.log(data))
    },
    displayWeather: function(data) {

    }
}