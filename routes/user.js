var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var CustomerDB = require('../db/customerDB');
var OrderDB = require('../db/orderDB');

var csrfProtection = csrf();

router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next) {
	 var messages = req.flash('error');
  OrderDB.findByCustomer(req.user.id
  , function(err, orders) {
    if (err) {
      return res.write('Error!');
    }
 
    orders  = orders || [];
    
    res.render('user/profile', {
      csrfToken: req.csrfToken(),
      orders: orders,
      user: req.user,
      messages: messages,
      hasErrors: messages.length > 0
    });
  });
});

router.post('/profile', function(req, res, next) {

  if(req.body.password != '' && req.body.password.length < 4 ){
	  req.flash('error', 'Password at least 4 characters');
  }else if (req.body.email) {
    CustomerDB.findByEmail(req.body.email, function(err, customer) {

      if (err) {
        req.flash('error', 'error in finding customer')
        console.log(err);
      }else {
      	 if(req.body.password != ''){
		  	customer.password = req.body.password;
		  }
		  
		  customer.phone = req.body.phone;
		  customer.street = req.body.street;
		  customer.city = req.body.city;
	      customer.province = req.body.province;
	      customer.country = req.body.country;
	      customer.zipcode = req.body.zipcode;
	       
	      CustomerDB.update(customer, function(err1, res1){
		       if (err1) {
		        req.flash('error', 'error in updating customer info')
		        console.log(err1);
		      }
	      });
      
      }

    });
  } else {
    console.log("email invalid");
  }

  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    res.redirect('/user/profile');
  }

  res.end();

});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/signup', function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});

router.post('/signup', passport.authenticate('local.signup', {
  failureRedirect: '/user/signup',
  failureFlash: true
}), function(req, res, next) {
  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    res.redirect('/');
  }
});

router.get('/signin', function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signin', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});

router.post('/signin', passport.authenticate('local.signin', {
  failureRedirect: '/user/signin',
  failureFlash: true
}), function(req, res, next) {
  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    res.redirect('/');
  }
});

router.use('/', notLoggedIn, function(req, res, next) {
  next();
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}