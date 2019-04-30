'use strict';

import { Dog, FAMOUS_DOGS } from './e3module.js';

const hachiko = new Dog();

console.log(`Some famous dogs in history: ${FAMOUS_DOGS.join(', ')}...`);

hachiko.bark(); 