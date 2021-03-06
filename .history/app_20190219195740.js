const express = require('express');
const hbs     = require('hbs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'hbs');

app.get('/', function(req, res) {
res.send('hello world');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
})