const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Bye! World!test argo');
})

app.get('/amit', function (req, res) {
    res.send('Hello, World!!!! test argo');
  })

app.get('/gueta', function (req, res) {
  res.send('another test of argo');
})

app.listen(3000, function () {
  console.log('App listening on port 3000!');
})