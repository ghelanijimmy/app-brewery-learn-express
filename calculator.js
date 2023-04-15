const express = require('express');
const path = require("path");
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'))
})

router.post('/', (req, res) => {
    const num1 = +req.body.num1;
    const num2 = +req.body.num2;
    const total = num1 + num2;
    res.send(`<h1>The result of the calculation is ${total}</h1>`);
})

module.exports = router;