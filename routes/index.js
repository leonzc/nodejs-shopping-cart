var express = require('express');
var router = express.Router();

var BookDB = require('../db/bookDB');
var OrderDB = require('../db/orderDB');
var Order = require('../models/order');
var OrderItem = Order.OrderItem;
var Cart = require('../models/cart');

/* GET home page. */
router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  BookDB.findAll(function(err, books) {
  
  	var bookChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < books.length; i += chunkSize) {
      bookChunks.push(books.slice(i, i + chunkSize));
    }
  	
    res.render('shop/index', {
      title: 'Online Bookstore',
      books: bookChunks,
      successMsg: successMsg,
      noMessages: !successMsg
    });
  });
});

router.get('/book/:id', function(req, res, next) {
	BookDB.findById(req.params.id, function(err, book) {
		res.render('shop/book', {
			book: book
		});
	});
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var bookId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  BookDB.findById(bookId, function(err, book) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(book, book.id);
    req.session.cart = cart;
     req.flash('success', 'Item added to your cart');
    res.redirect('/');
  });
});

router.get('/increase/:id', function(req, res, next) {
  var bookId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.increaseByOne(bookId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/reduce/:id', function(req, res, next) {
  var bookId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(bookId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var bookId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(bookId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {
      books: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {
    items: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkout', {
    total: cart.totalPrice,
    user: req.user,
    errMsg: errMsg,
    noError: !errMsg
  });
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);

	var objOrder = new Order();
	var d = new Date();
	
	objOrder.orderDatetime = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
	
	objOrder.totalPrice = cart.totalPrice;
	objOrder.customerId = req.user.id;
	
	for (var id in cart.items) {
		var cartItem = cart.items[id];
		var oItem = new OrderItem();
		oItem.bookId = id;
		oItem.bookTitle = cartItem.item.title;
		oItem.bookPrice = cartItem.item.price;
		oItem.quantity = cartItem.qty;
		oItem.itemTotal = cartItem.qty * cartItem.item.price;
	    objOrder.items.push(oItem);
	}
	
	OrderDB.add(objOrder, function(err, orderid){
		if(err){
			req.flash('error', 'Error in submitting order.');
     		 return res.redirect('/checkout');
		}else{
			 req.flash('success', 'Order submitted successfully.');
	     	 req.session.cart = null;
	     	 res.redirect('/');
     	 }
	});
  
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}