var DBConnect = require('./dbconnect');
var Order = require('../models/order');
var OrderItem = Order.OrderItem;

var OrderDB = {};

OrderDB.findByCustomer = function(custId, callback){
			
	DBConnect.connect(function(err, conn){
		if(err){
			DBConnect.disconnect(conn);
			callback(err);
		}else{
			conn.query('SELECT sellsorder.order_id, sellsorder.order_datetime, sellsorder.totalPrice, sellsorder.customer_id, item.orderitem_id, item.item_total, item.book_id, item.quantity, book.title, book.price FROM sellsorder, orderitem item, book WHERE sellsorder.customer_id = ? AND sellsorder.order_id = item.order_id AND item.book_id = book.book_id', 
			             [custId], function(err2, result){
				DBConnect.disconnect(conn);
				
				if(err2){
					callback(err2);
				}
				
				if(result){
					var orders = [];
					
					result.forEach(function(ord){
						var objOrder = Order.findOrderById(orders, ord.order_id);
						
						if(!objOrder){
							var objOrder = new Order();
							objOrder.orderId = ord.order_id;
							objOrder.orderDatetime = ord.order_datetime;
							objOrder.totalPrice = ord.totalPrice;
							objOrder.customerId = ord.customer_id;
							
							var objItem = new OrderItem();
							objItem.itemId = ord.orderitem_id
							objItem.bookId = ord.book_id;
							objItem.itemTotal = ord.item_total;
							objItem.bookTitle = ord.title;
							objItem.bookPrice = ord.price;
							objItem.quantity = ord.quantity;
							
							objOrder.items.push(objItem);
							
							orders.push(objOrder);
						}else{
							var objItem = Order.findItemById(objOrder, ord.orderitem_id);
							
							if(!objItem){
								var objItem = new OrderItem();
								objItem.itemId = ord.orderitem_id
								objItem.bookId = ord.book_id;
								objItem.bookTitle = ord.title;
								objItem.itemTotal = ord.item_total;
								objItem.bookPrice = ord.price;
								objItem.quantity = ord.quantity;
								
								objOrder.items.push(objItem);
							}
						
						}
					});
					
					callback(undefined, orders);
				}else{
					callback();
				}
			});
		}
		
	});
};

OrderDB.add = function(order, callback){
	DBConnect.connect(function(err, conn){
		if(err){
			DBConnect.disconnect(conn);
			callback(err);
		}else{
			conn.query('INSERT INTO sellsorder (order_datetime, totalPrice, customer_id) VALUES ?', [[[order.orderDatetime, order.totalPrice, order.customerId]]], function(err2, result){
				
				if(err2){
					DBConnect.disconnect(conn);
					callback(err2);
				}else if(result){
					// insert order items
					var orderId = result.insertId;
					
					var insertItems = [];
					
					order.items.forEach(function(i){
						var it = [];
						it.push(i.quantity);
						it.push(orderId);
						it.push(i.bookId);
						it.push(i.itemTotal);
						insertItems.push(it);
					});
					
					conn.query('INSERT INTO orderitem (quantity, order_id, book_id, item_total) VALUES ?', [insertItems], function(err3, result2){
						DBConnect.disconnect(conn);
						
						if(err3){
							callback(err3);
						}else if(result2){
							callback(undefined, orderId);
						}else{
							callback();
						}
					});
				}else{
					DBConnect.disconnect(conn);
					callback();
				}
			});
		}
		
	});
};

module.exports = OrderDB;