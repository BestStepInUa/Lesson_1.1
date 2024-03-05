// CommonJS
// const nodemon = require('nodemon');
// const { admins, clients } = require('./node-CommonJS-module/users');
// ES6
import users from './node-module-es6-type/users.js';

console.log(`Hello from Node.js!`);
console.log(users);

// CommonJS
// const { getCurrentMonth } = require('./node-CommonJS-module/data');
// ES6
import { getCurrentMonth } from './node-module-es6-type/data/index.js';
const currentMonth = getCurrentMonth();
console.log(`Now ${currentMonth} month`);
