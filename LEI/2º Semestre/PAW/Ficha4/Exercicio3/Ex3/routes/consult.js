const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filesDir = path.join(__dirname, '..', 'Files');

let counter = fs.readdirSync(filesDir).length;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', (req, res) => {
  const {name, age, postal, taste, time, ambience} = req.body;

  const dados = JSON.stringify({ name, age, postal, taste, time, ambience });

  counter += 1;

  const filePath = path.join(filesDir, `dados${counter}.txt`);

  fs.appendFile(filePath, dados , (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).send('Error saving data');
    } 

    console.log('Data saved with sucess!');
  })

  res.render('index');
})


router.post('/form', (req, res) => {    
    res.send('fiz um post');
})

module.exports = router;
