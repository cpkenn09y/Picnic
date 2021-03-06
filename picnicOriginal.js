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
}

PicnicBasket.prototype.addItem = function(item) {
  // Should add the item object to the basket
  // Assume only well-formatted items will be entered

}



PicnicBasket.prototype.removeItem = function() {
  // Should remove 1 of the item passed as an argument (if any)
  // or the last item in the array (if no argument is passed)
  // At most 1 argument will be passed

}

PicnicBasket.prototype.numberOf = function(item_type) {
  // Should return the number of items of type item_type

}


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