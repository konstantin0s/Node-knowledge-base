const express = require('express');
const hbs     = require('hbs');
const path    = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

mongoose.connect('mongodb://localhost/nodekb', { useNewUrlParser: true })
.then(() => console.log("Mongo DB connected"))
.catch(err => console.log(err))


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


// bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));


// Routing
const authRoute = require('./routes/auth');
const articleRoute = require('./routes/article')
app.use('/atuh/signup', authRoute);
app.use('/', articleRoute);




app.listen(3000, function() {
  console.log('Server started on port 3000');
})