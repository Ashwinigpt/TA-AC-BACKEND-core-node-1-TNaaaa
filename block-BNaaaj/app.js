const area = require('./area');
let r = require('./area');

var area_circle = area.circle(10);
console.log(area_circle);


let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff1.write('Welcome to node.js');

console.log(buff1.toString());