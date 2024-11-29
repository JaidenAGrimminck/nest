const express = require('express');
const fs = require('fs');

let router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('info.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({
                "error": "Internal Server Error"
            });
            return;
        }

        res.json(JSON.parse(data));
    });
});

module.exports = router;