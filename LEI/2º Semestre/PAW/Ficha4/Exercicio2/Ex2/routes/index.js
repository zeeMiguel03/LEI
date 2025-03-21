const express = require('express');
const fs = require('fs');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  const {latitude, longitude} = req.body

  const dados = JSON.stringify({ latitude, longitude });

  fs.appendFile('dados.txt', dados, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).send('Error saving data');
    } 
    console.log('Data saved with sucess!');
  });

  res.render('index', { title: 'Express' });
})

module.exports = router;
