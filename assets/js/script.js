var searchBtn = document.getElementById("searchBtn");
var forecastsEl = document.getElementById("forecasts");

function convertSearch() {
    var input = document.getElementById("input").value.trim();

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + input + "&limit=1&appid=b539f961ee018c36b88d3838ba7bcfc2")
        .then((response) => response.json())
        .then(function (data) {
            var lon = data[0].lon;
            var lat = data[0].lat;
            var city = data[0].name;
            getWeatherData(lon, lat, city);
            document.getElementById("input").value = "";
        })
}

function getWeatherData(lon, lat, city) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely&units=imperial&appid=3235f6ca43f152b21beee3053909231f")
        .then((response) => response.json())
        .then(function (data) {
            currentDay(data, city);
            fiveDay(data);
        })
}

function currentDay (data, city) {

}

function fiveDay(data) {
    
}