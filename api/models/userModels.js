const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: {
    type: String,
    require: true,
    unqiue: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', async function(next) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  // Once the password is encrypted, call next() so that your userController and create a user

  try {
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    next();
  }
  catch(err) {
    console.log(err);
    next(err);
  }
});

UserSchema.methods.checkPassword = async function(plainTextPW, callBack) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function

  try {
    const match = await bcrypt.compare(plainTextPW, this.password);
    callBack(null, match);
  }
  catch(err) {
    console.log(err);
    callBack(err);
  }
};

module.exports = mongoose.model('User', UserSchema);
