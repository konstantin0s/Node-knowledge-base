const express = require('express');
const hbs     = require('hbs');
const path    = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  let articles = [
 {
  id: 1,
  titke: 'Article One',
  author: 'Je je',
  body: "Thsi is article one"
 },
 {
  id: 2,
  titke: 'Article One',
  author: 'Parle ',
  body: "Thsi is article one"
 },
 {
  id: 3,
  titke: 'Article One',
  author: 'France',
  body: "Thsi is article one"
 }
  ];
res.render('index');
});

//add route
app.get('/articles/add', function(req, res) {
  res.render('add_article');
  });

app.listen(3000, function() {
  console.log('Server started on port 3000');
})