const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  username: String,
  password: String
}, {
  timestamps: true
});

let User = module.exports = mongoose.model('User', userSchema);