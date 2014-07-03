/* This is a model of a picnic basket. It holds items.
   Items can be added/removed, but the basket can only hold a
   certain number of them.
*/

function PicnicBasket() {
  this.items = [];
  this.max_items = 3;
}

PicnicBasket.prototype.init = function(config) {
  if (typeof config === 'object') {
    this.items = config.items || this.items;
    this.max_items = config.max_items || this.max_items;
  }
};

PicnicBasket.prototype.addItem = function(item) {
  return this.items.push(item);
};

PicnicBasket.prototype.removeItem = function(item_name) {
  if (item_name) {
    return this.removeSpecifiedItem(item_name);
  } else {
    return this.removeLastItem();
  }
};

PicnicBasket.prototype.removeSpecifiedItem = function(item_name) {
  var item_index;
  this.items.forEach(function(item, index) {
    if (item.name === item_name) item_index = index;
  });
  return this.items.splice(item_index, 1);
};

PicnicBasket.prototype.removeLastItem = function() {
  return this.items.pop();
};

PicnicBasket.prototype.numberOf = function(item_type) {
  var counter = 0;
  basket.items.forEach(function(item) {
    if (item.type === item_type) counter ++;
  });
  return counter;
};

// PROVIDED DRIVER CODE:

/*
*   Now we test what we've written above.
*   NOTE: the way console.log works, it is best to just uncomment only one log at a time.
*   Otherwise you'll get really weird results.
*/

var basket = new PicnicBasket();

basket.init({
  items: [
    {type: 'food', name: 'hot dog'},
    {type: 'food', name: 'chips'},
    {type: 'drink', name: 'water'}
  ],
  max_items: 5
});


// console.log(basket); // should return an obect with 3 items

basket.addItem({type: 'drink', name: 'soda'});

// console.log(basket.items); // should return an object with 4 items

console.log(basket.numberOf('food')); // should return 2

basket.removeItem();

// console.log(basket.items); // should no longer have soda

basket.addItem({type: 'drink', name: 'soda'});

basket.removeItem('chips');

// console.log(basket.items); // should no longer have chips