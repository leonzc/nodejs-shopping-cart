var passport = require('passport');
var Customer = require('../models/customer');
var CustomerDB = require('../db/customerDB');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  CustomerDB.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  req.checkBody('firstName', 'First Name should not be empty').notEmpty();
  req.checkBody('lastName', 'Last Name should not be empty').notEmpty();
  req.checkBody('email', 'Email invalid!').notEmpty().isEmail();
  req.checkBody('password', 'Password at least 4 characters').notEmpty().isLength({
    min: 4
  });

  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach(function(error) {
      messages.push(error.msg);
    });
    return done(null, false, req.flash('error', messages));
  }
  CustomerDB.findByEmail(email, function(err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, false, {
        message: 'Email already exists.'
      });
    }
    var newUser = new Customer();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.phone = req.body.phone;
    newUser.street = req.body.street;
    newUser.city = req.body.city;
    newUser.province = req.body.province;
    newUser.country = req.body.country;
    newUser.zipcode = req.body.zipcode;
    newUser.email = email;
    newUser.password = password;
    
    CustomerDB.add(newUser, function(err, custId) {
      if (err) {
        return done(err);
      }
      newUser.id = custId;
      return done(null, newUser);
    });
    
  });
}));

passport.use('local.signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  req.checkBody('email', 'Email invalid!').notEmpty().isEmail();
  req.checkBody('password', 'Invalid Password!').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach(function(error) {
      messages.push(error.msg);
    });
    return done(null, false, req.flash('error', messages));
  }
  CustomerDB.findByEmail(email, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, {
        message: 'Invalid Email / Password.'
      });
    }
    if (user.password != password) {
      return done(null, false, {
        message: 'Invalid Email / Password!'
      });
    }
    return done(null, user);
  });
}));