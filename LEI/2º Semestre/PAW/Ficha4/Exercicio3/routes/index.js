const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filesDir = path.join(__dirname, '../files');

let counter = fs.readdirSync(filesDir).length;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  const {name, age, postal, taste, time, ambiance} = req.body;

  if (!name || !age || !postal || !taste || !time || !ambiance) {
    return res.render('index', { error: "Insert all the fields!"});
  }

  const dados = JSON.stringify({name, age, postal, taste, time, ambiance});

  counter++;

  const filePath = path.join(filesDir, `data${counter}.txt`);

  fs.appendFile(filePath, dados, (err) => {
    if (err) {
      console.error("Error", err);
      return; 
    }
  })

  res.render('index');
})

module.exports = router;
