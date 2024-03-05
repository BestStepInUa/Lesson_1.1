// CommonJS
// const nodemon = require('nodemon');
// const { admins, clients } = require('./node-CommonJS-module/users');
// ES6 mjs
import { admins, clients } from './node-CommonJS-module/users.mjs';

console.log(`Hello from Node.js!`);
console.log(admins);
console.log(clients);

// CommonJS
// const { getCurrentMonth } = require('./node-CommonJS-module/data');
// ES6 mjs
import { getCurrentMonth } from './node-CommonJS-module/data/index.mjs';
const currentMonth = getCurrentMonth();
console.log(`Now ${currentMonth} month`);
