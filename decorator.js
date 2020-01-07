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

Decorator.prototype.paintRoom = function(room) {

  let litresToRemove = room.area;


  for(let i = 0; i < this.stock.length; i++) {

    if(litresToRemove < this.stock[i].quantityOfLitres) {
      while (litresToRemove != 0) {
        this.stock[i].reduceQuantity();
        room.increasePaintedArea();
        litresToRemove--
        }

    } else {
      while(this.stock[i].quantityOfLitres > 0){
        this.stock[i].reduceQuantity();
        room.increasePaintedArea();
        litresToRemove--
      };
    };

  };

};

Decorator.prototype.removeEmptyCan = function() {

  for(let i = this.stock.length -1; i >= 0; i--) {
    if(this.stock[i].quantityOfLitres === 0) {
      this.stock.splice(i, 1);
    }
  };

};


module.exports = Decorator;
