const Item = require('./Item');
const ItemList = require('./ItemList')

module.exports = {
   itemFilling: () => {
    var item1 = new Item('watch','20','true');
    var item2 = new Item('tea','10','true');
    var itemList = [item1,item2];
      return item1.returnItem(); 
   },

   getQuantities: (ItemWholeList) => {
      var total = 0;
      ItemWholeList.forEach(ItemList => {
       total += (ItemList.Item.getPrice() * ItemList.getQuantity());
      });
      return total;  
   },

   itemQuantities: (ItemWholeList) => {
      var retrunList = [];
      ItemWholeList.forEach(ItemList => {
       retrunList.push(ItemList.Item.getName() + ' X ' + ItemList.Item.getPrice())
      });
      console.log(retrunList);
      return retrunList[0];  
   }
}