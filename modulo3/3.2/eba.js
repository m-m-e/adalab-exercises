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
};

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }

  area() {
    return super.area() / 2;
  }
}

const square1 = new Square(4);
const triangle1 = new Triangle(4, 3);

console.log('square area', square1.area());
console.log('square perimeter',square1.perimeter());
console.log('triangle area',triangle1.area());
console.log('triangle perimeter',triangle1.perimeter());