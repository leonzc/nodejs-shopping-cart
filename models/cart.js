module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
       
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        storedItem.price = this.fixDecimal(storedItem.price);
        this.totalQty++;

        this.totalPrice += storedItem.item.price;
        this.totalPrice = this.fixDecimal(this.totalPrice);
    };

	this.increaseByOne = function(id) {
		this.items[id].qty++;
		this.items[id].price += this.items[id].item.price;
		this.items[id].price = this.fixDecimal(this.items[id].price);
		this.totalQty++;
		this.totalPrice += this.items[id].item.price;
		
		this.totalPrice = this.fixDecimal(this.totalPrice);
	};
	
    this.reduceByOne = function(id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.items[id].price = this.fixDecimal(this.items[id].price);
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;
		this.totalPrice = this.fixDecimal(this.totalPrice);
        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };

    this.removeItem = function(id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        this.totalPrice = this.fixDecimal(this.totalPrice);
        delete this.items[id];
    };
    
    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
    
    this.fixDecimal = function(number) {
    	return Math.round(number * 100) / 100;
    }
};