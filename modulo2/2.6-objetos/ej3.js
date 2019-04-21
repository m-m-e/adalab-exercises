'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
};

adalaber1.showBio = function() {console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`)};

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz',

};

adalaber2.showBio = function() {console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`)};

adalaber1.showBio();
adalaber2.showBio();