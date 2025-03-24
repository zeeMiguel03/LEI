const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filesDir = path.join(__dirname, '../reviews');

router.get('/', function(req, res, next) {
    res.render('index')
})

router.post('/', function(req, res) {
    const {name, email, book, description, inlineRadioOptions} = req.body;

    console.log(name, email, book, description, inlineRadioOptions);

    if (!name || !email || !book || !description || !inlineRadioOptions) {
        return res.render('index', { error: "Insert all the fields!"});
    }

    console.log(req.body);

    const data = JSON.stringify({name, email, book, description, inlineRadioOptions});

    const myPath = path.join(filesDir, 'Review.txt')

    console.log(myPath);

    fs.readFile(myPath, 'utf8', (err, fileData) => {
        if (err) {
            console.error("Error reading file");
            return res.render('index');
        }

        let reviews = [];

        if (fileData) {
            try {
                reviews = JSON.parse(fileData);
            } catch (parseErr) {
                console.error("Error parsing file data:", parseErr);
                return res.render('index');
            }
        }

        reviews.push({name, email, book, description, inlineRadioOptions});

        fs.writeFile(myPath, JSON.stringify(reviews), (writeErr) => {
            if (writeErr) {
                console.error("Error writing to file:", writeErr);
                return res.render('index');
            }

            console.log("Review added successfully!");
            return res.redirect('/review');
        });
    })
})

router.get('/review/:email/:book', (req, res) => {
    const { email, book } = req.params;

    const myPath = path.join(filesDir, 'Review.txt');

    fs.readFile(myPath, 'utf8', (err, fileData) => {
        if (err) {
            console.error("Error reading file");
            return res.render('index');
        }

        console.log("Cheguei ao 1")

        const findReviews = [];

        if (fileData) {
            try {
                reviews = JSON.parse(fileData);
                console.log("Cheguei ao 2")
            } catch (parseErr) {
                console.error("Error parsing file data:", parseErr);
                return res.render('index');
            }

            reviews.forEach(element => {
                console.log("Cheguei ao 3")
                if (element.email == email && element.book == book) {
                    console.log("Cheguei ao 4")
                    findReviews.push(element);
                }
            });

            res.render('results',{reviews: findReviews});
        }
    })
})

module.exports = router;