const express = require('express');
const hbs     = require('hbs');
const path    = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
res.render('index');
});

//add route
app.get('/articles/add', function(req, res) {
  res.render('/articles/add');
  });

app.listen(3000, function() {
  console.log('Server started on port 3000');
})