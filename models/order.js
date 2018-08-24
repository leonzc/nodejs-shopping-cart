module.exports = function Order(){
	this.orderId = 0;
	this.orderDatetime = '';
	this.totalPrice = 0;
	this.customerId = 0;
	this.items = [];
};

module.exports.findOrderById = function(orders, oId) {
	var order = undefined;
	orders.forEach(function(o){
		if(o.orderId == oId){
			order = o;
			return o;
		}
	});
	return order;
};

module.exports.findItemById = function(order, iId) {
	var item = undefined;
	order.items.forEach(function(i){
		if(i.itemId == iId){
			item = i;
			return;
		}
	});
	return item;
};
	
module.exports.OrderItem = function OrderItem() {
	this.itemId = 0;
	this.bookId = 0;
	this.bookTitle = '';
	this.bookPrice = 0;
	this.quantity = 0;
	this.itemTotal = 0;
};

