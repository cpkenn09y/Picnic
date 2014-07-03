function PicnicBasket() {
  this.items = [];
  this.max_items = 3;
}

var prototype = {

  init : function(config) {
    if (typeof config === 'object') {
      this.items = config.items || this.items;
      this.max_items = config.max_items || this.max_items;
    }
  },

  addItem : function(item) {
    return this.items.push(item);
  },

  removeItem : function(item_name) {
    if (item_name) {
      return this.removeSpecifiedItem(item_name);
    } else {
      return this.removeLastItem();
    }
  },

  removeSpecifiedItem : function(item_name) {
    var item_index;
    this.items.forEach(function(item, index) {
      if (item.name === item_name) item_index = index;
    });
    return this.items.splice(item_index, 1);
  },

  removeLastItem : function() {
    return this.items.pop();
  },

  numberOf : function(item_type) {
    var counter = 0;
    basket.items.forEach(function(item) {
      if (item.type === item_type) counter ++;
    });
    return counter;
  }

};

PicnicBasket.prototype = prototype;