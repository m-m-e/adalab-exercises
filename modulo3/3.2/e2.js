'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    const perimeter = this.side * 4;
    console.log(perimeter);
  }

  area() {
    const area = this.side * this.side;
    console.log(area);
  }
};

const square1 = new Square(1);
const square2 = new Square(3);
const square3 = new Square(7);

square1.perimeter();
square1.area();

square2.perimeter();
square2.area();

square3.perimeter();
square3.area();