const express = require('express');
const router  = express.Router();

const User = require('../models/user');

//get sign up page
router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.post('signup', (req,res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
})



module.exports = router;