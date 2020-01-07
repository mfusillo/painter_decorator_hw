const Paint = function(quantity) {
  this.quantityOfLitres = quantity;
};

Paint.prototype.isEmpty = function() {
  return this.quantityOfLitres === 0;
};

module.exports = Paint;
