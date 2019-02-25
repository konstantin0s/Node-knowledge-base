
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


const User = require("../models/user");

router.get("/signup", (req, res, next) => {
  res.render("signup");
});


// BCrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;

// router.post('/signup', (req, res) => {
//   console.log(req.body)
//   res.send('routerpost works')
// })
router.post("/signup", (req, res) => {
  console.log("reqbody", req.body)
  debugger
  const username = req.body.username;
  const password = req.body.password;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  User.create({
    username,
    password: hashPass
  })
  .then(() => {
    res.redirect("/");
  })
  .catch(error => {
    console.log(error);
  })
});


module.exports = router;