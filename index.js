const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('main page');
})

app.get('/amit', function (req, res) {
    res.send('amit end point');
  })

app.get('/gueta', function (req, res) {
  res.send('gueta end point');
})

app.get('/amosGueta', function (req, res) {
  res.send('new endpoint! amosGueta');
})

app.listen(3000, function () {
  console.log('App listening on port 3000!');
})