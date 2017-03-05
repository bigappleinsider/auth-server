/*
read in users, if one doesn't exist, save
1. see if a user with a given email exists
2. if a user with email does exist, return an Error
3. respond to request - user created
*/
const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

//JWT is a convention, sub is short for subject - who this token belongs to
//iat  - is created at
function tokenForUser(user) {
  timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  //user already authenticated
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  //pull data from request when it's a post request req.body
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' })
  }

  User.findOne({ email: email }, function(err, existingUser){
    if(err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }

      res.json({token: tokenForUser(user)});
    });
  });
}
