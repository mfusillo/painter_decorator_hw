const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

describe('Room', function() {

  let room1;

  beforeEach(function() {
    room1 = new Room(70);
  });

  it('should have an area', function() {
    const actual = room1.area;
    assert.strictEqual(actual, 70);
  });

  it('should start not painted', function() {
    const actual = room1.paintedArea;
    assert.strictEqual(actual, 0);
  });

  it('should be able to be painted', function() {
    room1.increasePaintedArea();
    const actual = room1.paintedArea;
    assert.strictEqual(actual, 1);
  });

  it('should not paint if fully painted', function() {
    room1.paintedArea = 70;
    room1.increasePaintedArea();
    const actual = room1.paintedArea;
    assert.strictEqual(actual, 70);
  });

});
