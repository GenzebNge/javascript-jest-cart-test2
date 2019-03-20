const hw = require('../../lib/index.js');
const Item = require('../../lib/Item.js');
const Cart = require('../../lib/Cart');
const ItemList = require('../../lib/ItemList')

describe('test suite', () => {
it('should create an action to start loading the message from backend', () => {
   expect(hw.sayHello()).toBe('world');
   expect(hw.sayHi('anil')).toBe('helloanil');
 });
});

describe('testing the items',() => {
        it('input item and print it', () => {
            expect(Cart.itemFilling()).toBe('watch20true');
        })
});

describe('testing the getTotalPrice',() => {
  it('input item and print it', () => {
    let item1 = new Item('watch','2','true');
    var item2 = new Item('tea','10','true');
    let itemList1 = new ItemList(item1,'2');
    let itemList2 = new ItemList(item2,'3');
    let itemWholeList = [itemList1,itemList2];
      expect(Cart.getQuantities(itemWholeList)).toBe(34);
  })
});

describe('testing the itemQuantities',() => {
  it('input item and print it', () => {
    let item1 = new Item('watch','2','true');
    var item2 = new Item('tea','10','true');
    let itemList1 = new ItemList(item1,'2');
    let itemList2 = new ItemList(item2,'3');
    let itemWholeList = [itemList1];
      expect(Cart.itemQuantities(itemWholeList)).toBe('watch X 2');
  })
});