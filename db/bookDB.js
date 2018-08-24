var DBConnect = require('./dbconnect');
var Book = require('../models/book');

var BookDB = {};

BookDB.findAll = function(callback){
			
	DBConnect.connect(function(err, conn){
		if(err){
			DBConnect.disconnect(conn);
			callback(err);
		}else{
			conn.query('SELECT * FROM book', function(err2, result){
				DBConnect.disconnect(conn);
				if(err2){
					callback(err2);
				}
				
				if(result){
					var books = [];
					result.forEach(function(aBook){
						var objbook = new Book();
						objbook.id = aBook.book_id;
						objbook.image = aBook.book_image;
						objbook.title = aBook.title;
						objbook.author = aBook.author;
						objbook.publishdate = aBook.publish_date;
						objbook.price = aBook.price;
						objbook.shortDescription = aBook.short_description;
						objbook.description = aBook.description;
						books.push(objbook);
					});
					
					callback(undefined, books);
				}else{
					callback();
				}
			});
		}
		
	});
};

BookDB.findById = function(id, callback){
			
	DBConnect.connect(function(err, conn){
		if(err){
			DBConnect.disconnect(conn);
			callback(err);
		}else{
			conn.query('SELECT * FROM book WHERE book_id = ?', [id], function(err2, result){
				DBConnect.disconnect(conn);
				
				if(err2){
					callback(err2);
				}
				
				if(result && result[0]){
					var book = new Book();
					book.id = result[0].book_id;
					book.image = result[0].book_image;
					book.title = result[0].title;
					book.author = result[0].author;
					book.publishDate = result[0].publish_date;
					book.price = result[0].price;
					book.shortDescription = result[0].short_description;
					book.description = result[0].description;

					callback(undefined, book);
				}else{
					callback();
				}
			});
		}
		
	});
};

module.exports = BookDB;