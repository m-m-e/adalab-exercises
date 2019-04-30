'use strict';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
};

const person1 = new Person('Megan', 'Edwards');
const person2 = new Person('Aia', 'Rupsom');

console.log(person1.fullName);
console.log(person2.fullName);