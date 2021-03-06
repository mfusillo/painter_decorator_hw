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

describe('Paint', function() {

  let paint1;

  beforeEach(function() {
    paint1 = new Paint(30);
  });

  it('should have a number of litres', function() {
    const actual = paint1.quantityOfLitres;
    assert.strictEqual(actual, 30);
  });

  it('should check if it is empty', function() {
    paint1.quantityOfLitres = 0;
    const actual = paint1.isEmpty();
    assert.strictEqual(actual, true);
  });

  it('should be able to reduce quantity of litres', function(){
    paint1.reduceQuantity();
    const actual = paint1.quantityOfLitres;
    assert.strictEqual(actual, 29);
  });

});

describe('Decorator', function() {

  let decorator;
  let paint1;
  let paint2;
  let paint3;
  let room;

  beforeEach(function() {
    decorator = new Decorator("Muciaccia");
    paint1 = new Paint(0);
    paint2 = new Paint(15);
    paint3 = new Paint(60);
    room = new Room(70);
  });

  it('should start with an empty stock of paint', function() {
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 0)
  });

  it('should be able to add can of paint to the paint stock', function() {
    decorator.addPaintCan(paint1);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to calculate total litres in stock', function() {
    decorator.addPaintCan(paint1);
    decorator.addPaintCan(paint2);
    decorator.addPaintCan(paint3);
    const actual = decorator.totalLitresInStock();
    assert.strictEqual(actual, 75);
  });

  it('should be able to calculate if there is enough paint to paint room', function() {
    decorator.addPaintCan(paint1);
    decorator.addPaintCan(paint2);
    decorator.addPaintCan(paint3);
    const actual = decorator.hasEnoughPaint(room);
    assert.strictEqual(actual, true);
  });

  it('should be able to paint room if enough paint', function() {
    decorator.addPaintCan(paint1);
    decorator.addPaintCan(paint2);
    decorator.addPaintCan(paint3);
    decorator.paintRoom(room);
    const actual = room.paintedArea;
    const actual2 = decorator.totalLitresInStock();
    assert.strictEqual(actual, 70);
    assert.strictEqual(actual2, 5);
  });

  it('should remove empty paint can', function() {
    decorator.addPaintCan(paint1);
    decorator.addPaintCan(paint2);
    decorator.addPaintCan(paint3);
    decorator.removeEmptyCan();
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 2);
  });

});
