const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.get('/about', (req, res, ) => {
    res.send("My name is Jimmy and I love to code");
})

app.get('/contact', (req, res, ) => {
    res.send("Contact me at some@some.com");
})

app.get("/hobbies", (req, res, ) => {
    res.send("Code, gaming and movies and shows and much more");
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
