const Decorator = function(name) {
  this.name = name;
  this.stock = [];
};

Decorator.prototype.addPaintCan = function(paint) {

  this.stock.push(paint);

};

Decorator.prototype.totalLitresInStock = function() {

  let totalLitres = 0

  for (let i = 0; i < this.stock.length; i++) {
    totalLitres += this.stock[i].quantityOfLitres;
  };

  return totalLitres;

};

Decorator.prototype.hasEnoughPaint = function(room) {

  return this.totalLitresInStock() >= room.area; 

};


module.exports = Decorator;
