const Item = require('./Item');

module.exports = class ItemList{
    constructor (Item, Quantity) {
        this.Item = Item;
        this.Quantity = Quantity;
    }  

    getItem() {
        return this.Item;
    }

    getQuantity(){
        return this.Quantity;
    }
};