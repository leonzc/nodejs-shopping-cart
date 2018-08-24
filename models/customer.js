var bcrypt = require('bcrypt-nodejs');

module.exports = function Customer(){
	this.id = 0;
	this.firstName = '';
	this.lastName = '';
	this.email = '';
	this.password = '';
	this.phone = '';
	this.street = '';
	this.city = '';
	this.province = '';
	this.country = '';
	this.zipcode = '';
	
};