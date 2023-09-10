let weather = {
    "apiKey": "6a342d639339a58ef951b69b3baaf208",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=6a342d639339a58ef951b69b3baaf208").then((response) => response.json())
        .then((data) => console.log(data))
    }
}