const express = require('express');
const fs = require('fs');

const apiRouter = require('./api');

const app = express();
let port;

app.get('/', (req, res) => {
    // send public/index.html file
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/api', apiRouter);

let data = fs.readFileSync('preferences.json');
let preferences = JSON.parse(data);

port = preferences.port;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});