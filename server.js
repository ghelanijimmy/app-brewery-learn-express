const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())

const calculatorRoutes = require('./calculator');

app.use('/calculator', calculatorRoutes);

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
