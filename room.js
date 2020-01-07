const Room = function(area) {
  this.area = area;
  this.paintedArea = 0;
};

Room.prototype.increasePaintedArea = function () {
  if (this.paintedArea < this.area) {
      this.paintedArea++
  };
};

module.exports = Room;
