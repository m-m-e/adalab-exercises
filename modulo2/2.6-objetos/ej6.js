'use strict';

const counter = {
  maxValue: 20,
  minValue: 0,
  currentValue: 5,
  initialValue: 0,

  increase: function() {
    if (counter.currentValue < counter.maxValue) {
      counter.currentValue += 1;
    }
  },

  decrease: function() {
    if (counter.currentValue > counter.minValue) {
      counter.currentValue -= 1;
    }
  },

  reset: function() {
    counter.currentValue = counter.initialValue;
  }
};

const test = counter.increase();

console.log(counter.currentValue);

const testDecrease = counter.decrease();

console.log(counter.currentValue);

const testReset = counter.reset();

console.log(counter.currentValue);

const test1 = counter.increase();
console.log(counter.currentValue);

const test2 = counter.increase();
console.log(counter.currentValue);

const test3 = counter.increase();
console.log(counter.currentValue);
