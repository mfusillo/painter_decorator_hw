const Decorator = function(name) {
  this.name = name;
  this.stock = [];
};

Decorator.prototype.addPaintCan = function(paint) {
  this.stock.push(paint);
};

module.exports = Decorator;
