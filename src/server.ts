import express from "express";
import calculator from "./calculator";
import weather from "./weather/weather";
import newsletter from "./newsletter/newsletter";

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

app.use("/calculator", calculator);

app.use("/weather", weather);

app.use("/newsletter", newsletter);

app.get("/", (req, res) => {
  res.send(
    "<div><ul><li><a href='/calculator'>Calculator Route</a></li><li><a href='/weather'>Weather Route</a></li><li><a href='newsletter'>Newsletter</a></li></ul></div>"
  );
});

app.listen(3000, () => {
  console.log("Now Running at port 3000");
});
