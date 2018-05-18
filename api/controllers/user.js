const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.

  user.save((err, newUser) => {
    if (err) return res.send(err); 
    res.status(201).json(newUser);
  });
};

module.exports = {
  createUser
};
