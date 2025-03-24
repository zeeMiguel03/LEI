// routes/review.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filesDir = path.join(__dirname, '../reviews');

router.get('/', function(req, res) {
    const myPath = path.join(filesDir, 'Review.txt');

    fs.readFile(myPath, 'utf8', (err, fileData) => {
        if (err) {
            console.error("Error reading reviews file");
            return res.render('review', { review: null }); 
        }

        let reviews = [];
        
        if (fileData) {
            try {
                reviews = JSON.parse(fileData);
            } catch (parseErr) {
                console.error("Error parsing file data:", parseErr);
                return res.render('review', { review: null });
            }
        }

        const lastReview = reviews.length > 0 ? reviews[reviews.length - 1] : null;

        return res.render('review', { review: lastReview });
    });
});

module.exports = router;
