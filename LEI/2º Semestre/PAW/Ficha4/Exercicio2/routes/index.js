const { error } = require('console');
const express = require('express');
const router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  const {latitude, longitude} = req.body;

  if (!latitude || !longitude) {
    return res.render('index', { error: "Por favor, insira latitude e longitude." });
  }

  const data = JSON.stringify({latitude, longitude});

  fs.appendFile('dados.txt', data, (err) => {
    if (err) {
      throw new Error("Erro ao escrever no ficheiro: " + err.message);
    }
  });
  
  res.render('index');
});



module.exports = router;
