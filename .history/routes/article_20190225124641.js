const express = require('express')
const router = express.Router()

//bring in models
let Article = require('./models/article');


router.get('/', function(req, res) {
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
router.get('/article/:id', function(req, res) {
  Article.findById(req.params.id, function(err, article) {
    console.log(article);
    return;
  });
})

//add route
router.get('/articles/add', function(req, res) {
  res.render('add_article');
  });

  //add submit POST route
  router.post('/articles/add', function(req, res) {
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
  router.get('/search', (req, res) => {
    res.render('search')
  })

  router.get('/search-article', (req, res) => {
   let searchQuery =  req.query.articles;
   Article.find({name: searchQuery}, function(err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.render('index',
      {articles: articles});
    }
  })
  })

module.exports = router;