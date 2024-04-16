const express = require("express");
const hbs = require("hbs");

const app = express();
const port = 3000;
let weather_key = 'a8cdf646821d5e33d2f5c86c3ab47c92';

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send("Hello, Express");
});

app.get('/weather', async (req, res)=>{
    const city = req.query.city;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_key}&units=metric`;
    let response = await fetch(url);
    let weather = await response.json();
    res.render('weather.hbs', {weather, city});
});

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_key}&units=metric`;
    let response = await fetch(url);
    let weather = await response.json();
    res.render('weather.hbs', {weather, city});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
 
