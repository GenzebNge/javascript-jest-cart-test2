module.exports = class Item{
    constructor (name, price, sale) {
        this.name = name;
        this.price = price;
        this.sale = sale;
    }  

    getName() {
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getSale(){
        return this.sale;
    }
    
    returnItem() {
        return `${this.name}${this.price}${this.sale}`;
    }
};