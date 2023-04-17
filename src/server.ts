import express from "express";
import dotenv from "dotenv";
import calculator from "./calculator";
import weather from "./weather/weather";
import newsletter from "./newsletter/newsletter";
import bodyParser from "body-parser";
import process from "process";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded());

app.use("/calculator", calculator);

app.use("/weather", weather);

app.use("/newsletter", newsletter);

app.get("/", (req, res) => {
  res.send(
    "<div><ul><li><a href='/calculator'>Calculator Route</a></li><li><a href='/weather'>Weather Route</a></li><li><a href='newsletter'>Newsletter</a></li></ul></div>"
  );
});

app.listen(process.env.PORT || 3000);
