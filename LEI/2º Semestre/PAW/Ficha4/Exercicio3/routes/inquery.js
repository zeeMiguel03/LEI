const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filesDir = path.join(__dirname, '../files');

router.get('/:code', function(req, res) {
    const code = req.params.code;
    const filePath = path.join(filesDir, `${code}.txt`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("Survey not found");
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error retrieving survey");
        }

        res.json(JSON.parse(data));
    });
});

module.exports = router;