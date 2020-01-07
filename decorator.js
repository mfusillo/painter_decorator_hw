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
        // console.log("stock:", this.stock[i].quantityOfLitres);
        }

    } else {
      // for(let j = 0; j < this.stock[i].quantityOfLitres; j++) {
      while(this.stock[i].quantityOfLitres > 0){
        this.stock[i].reduceQuantity();
        room.increasePaintedArea();
        litresToRemove--
      };
      // };
    };

  };

};


module.exports = Decorator;
