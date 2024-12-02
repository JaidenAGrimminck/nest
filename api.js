const express = require('express');
const fs = require('fs');

let router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/info.json');
});

module.exports = router;