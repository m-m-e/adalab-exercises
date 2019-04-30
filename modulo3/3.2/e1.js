'use strict';

class Square {
  perimeter(side) {
    const perimeter = side * 4;
    console.log(perimeter);
  }

  area(side) {
    const area = side * side;
    console.log(area);
  }
};

const square1 = new Square();

square1.perimeter(9);
square1.area(9);