const express = require('express');
const hbs     = require('hbs';)

const app = express();

app.get('/', function(req, res) {
res.send('hello world');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
})