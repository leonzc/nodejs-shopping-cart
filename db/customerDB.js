var DBConnect = require('./dbconnect');
var Customer = require('../models/customer');

var CustomerDB = {};

CustomerDB.findById = function(id, callback){
			
	DBConnect.connect(function(err, conn){
		if(err){
			DBConnect.disconnect(conn);
			callback(err);
		}else{
			conn.query('SELECT * FROM customer WHERE customer_id = ?', [id], function(err2, result){
				DBConnect.disconnect(conn);
				
				if(err2){
					callback(err2);
				}
				
				if(result && result[0]){
					var customer = new Customer();
					customer.id = result[0].customer_id;
					customer.firstName = result[0].first_name;
					customer.lastName = result[0].last_name;
					customer.email = result[0].email;
					customer.password = result[0].password;
					customer.phone = result[0].phone_number;
					customer.street = result[0].street;
					customer.city = result[0].city;
					customer.province = result[0].province;
					customer.country = result[0].country;
					customer.zipcode = result[0].zipcode;

					callback(undefined, customer);
				}else{
					callback();
				}
			});
		}
		
	});
};

CustomerDB.findByEmail = function(email, callback){
			
	DBConnect.connect(function(err, conn){
		if(err){
			DBConnect.disconnect(conn);
			callback(err);
		}else{
			conn.query('SELECT * FROM customer WHERE email = ?', [email], function(err2, result){
				DBConnect.disconnect(conn);
				
				if(err2){
					callback(err2);
				}
				
				if(result && result[0]){
					var customer = new Customer();
					customer.id = result[0].customer_id;
					customer.firstName = result[0].first_name;
					customer.lastName = result[0].last_name;
					customer.email = result[0].email;
					customer.password = result[0].password;
					customer.phone = result[0].phone_number;
					customer.street = result[0].street;
					customer.city = result[0].city;
					customer.province = result[0].province;
					customer.country = result[0].country;
					customer.zipcode = result[0].zipcode;

					callback(undefined, customer);
				}else{
					callback();
				}
			});
		}
		
	});
};

CustomerDB.add = function(customer, callback){
	DBConnect.connect(function(err, conn){
		if(err){
			DBConnect.disconnect(conn);
			callback(err);
		}else{
			conn.query('INSERT INTO customer (first_name, last_name, email, password, phone_number, street, city, province, country, zipcode) VALUES ?', 
						[[[customer.firstName, customer.lastName, customer.email, customer.password, customer.phone, customer.street, customer.city, customer.province,
						customer.country, customer.zipcode]]], function(err2, result){
				DBConnect.disconnect(conn);
				
				if(err2){
					callback(err2);
				}
				
				if(result){

					callback(undefined, result.insertId);
				}else{
					callback();
				}
			});
		}
		
	});
};


CustomerDB.update = function(customer, callback){
	DBConnect.connect(function(err, conn){
		if(err){
			DBConnect.disconnect(conn);
			callback(err);
		}else{
			conn.query('UPDATE customer SET password = ?, phone_number = ?, street = ?, city = ?, province = ?, country = ?, zipcode = ? WHERE  customer_id = ?', 
						[customer.password, customer.phone, customer.street, customer.city, customer.province, customer.country, customer.zipcode, customer.id], function(err2, result){
				DBConnect.disconnect(conn);
				
				if(err2){
					callback(err2);
				}
				
				if(result){

					callback(undefined, result.insertId);
				}else{
					callback();
				}
			});
		}
		
	});
};

module.exports = CustomerDB;