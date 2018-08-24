var mysql = require('mysql');

var pool	=	mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'password',
    database : 'shoppingcartDB'
});

var DBConnect = {};

DBConnect.connect = function(callback){
	if(pool){
		pool.getConnection(function(err, connection){
			if(err){
				callback(err);
			}else {
				callback(undefined, connection);
			}
		});
	}
};

DBConnect.disconnect = function(conn, callback){
	if(conn){
		conn.release();
	}
};


module.exports = DBConnect;