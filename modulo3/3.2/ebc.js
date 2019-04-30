'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.numberOfSides * this.base;
  }
  area() {
    return this.base * this.height;
  }
};

class Square extends Polygon {
  constructor(base) {
    super(4, base, base);
  }

  getBase() {
    console.log(this.base);
  }

  get base() {
    return super.base;
  }

  set base(newBase) {
    super.base = newBase;
  }
};

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }

  area() {
    return super.area() / 2;
  }
}

const square1 = new Square(7);
square1.getBase();

const originalArea = square1.area();
console.log('original area', originalArea);

square1.base = 47;
const newArea = square1.area();
console.log('new area', newArea);