const express = require('express');
const hbs     = require('hbs');
const path    = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/nodekb', { useNewUrlParser: true });
let db = mongoose.connection;

//check connection
db.once('open', function() {
  console.log('Connected to MongoDb');
});

db.on('error', function(err) {
    console.log(err);
})

const app = express();

//bring in models
let Article = require('./models/article');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  Article.find({}, function(err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.render('index',
      {articles: articles});
    }
    
  });
});

//Get single article
app.get('/article/:id', function(req, res) {
  Article.findById(req.params.id, function(err, article) {
    console.log(article);
    return;
  });
})

//add route
app.get('/articles/add', function(req, res) {
  res.render('add_article');
  });

  //add submit POST route
  app.post('/articles/add', function(req, res) {
   let article = new Article();
   article.title = req.body.title;
   article.author = req.body.author;
   article.body = req.body.body;

   article.save(function(err) {
        if (err) {
          console.log(err);
          return;
        } else {
          res.redirect('/');
        }
   });
  });

  //route for search
  app.get('/search', (req, res) => {
    res.render('search')
  })

  app.get('/search-article', (req, res) => {
   let searchQuery =  req.query.article;
    res.render('index')
  })

app.listen(3000, function() {
  console.log('Server started on port 3000');
})