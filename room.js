const Room = function(area) {
  this.area = area;
  this.paintedArea = 0;
};

Room.prototype.increasePaintedArea = function () {
  this.paintedArea++
};

module.exports = Room;
