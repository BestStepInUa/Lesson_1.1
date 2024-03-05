// CommonJS
// const nodemon = require('nodemon');
// const { admins, clients } = require('./node-CommonJS-module/users');
// ES6 mjs
import users from './node-module-es6-mjs/users.mjs';

console.log(`Hello from Node.js!`);
console.log(users);

// CommonJS
// const { getCurrentMonth } = require('./node-CommonJS-module/data');
// ES6 mjs
import { getCurrentMonth } from './node-module-es6-mjs/data/index.mjs';
const currentMonth = getCurrentMonth();
console.log(`Now ${currentMonth} month`);
