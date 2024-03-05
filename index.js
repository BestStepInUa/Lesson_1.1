// CommonJS
// const nodemon = require('nodemon');

const { admins, clients } = require('./node-CommonJS-module/users');

console.log(`Hello from Node.js!`);
console.log(admins);
console.log(clients);

// const { getCurrentMonth } = require('./node-CommonJS-module/data');
// const currentMonth = getCurrentMonth();
const currentMonth = require('./node-CommonJS-module/data').getCurrentMonth();
console.log(`Now ${currentMonth} month`);
