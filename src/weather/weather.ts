import express, {Response} from "express";
import https from "https";
import path from "path";
import process from "process";
const router = express.Router();

const getWeather = (inputLocation: string, res: Response) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?appid=5b40e0cd26c84c679ac83119d0738c0b';
    const location = inputLocation;
    const unit = 'metric';
    const finalUrl = `${url}&q=${location}&units=${unit}`
    https.get(finalUrl, response => {
        if(response.statusCode !== 200){
            res.send(`Can't find your weather information.`);
        }
         response.on('data', data => {
             const parsedData = JSON.parse(data);
             const temp = parsedData.main.temp;
             const location = parsedData.name;
             const weatherDescription = parsedData.weather[0].description;
             const weatherIcon = parsedData.weather[0].icon;
             const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
             res.write(`<p>Your weather is currently ${weatherDescription}.</p>`);
             res.write(`<h1>The temperature in ${location} is ${temp} degrees Celsius.</h1>`);
             res.write(`<img alt="weather-icon" src="${iconUrl}" />`);
             res.send();
         })
     });
}

router.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'weather', 'weather.html'));
})

router.post('/', (req, res) => {
    getWeather(req.body.city, res);
})

export default router;