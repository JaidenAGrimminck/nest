const express = require('express');

const apiRouter = require('./api');

const app = express();
const port = 3333;

app.get('/', (req, res) => {
    // send public/index.html file
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});