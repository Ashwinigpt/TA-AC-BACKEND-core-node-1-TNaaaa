const fs  = require('fs');
var path = require('path');

fs.readFile('./content.md', 'utf8', (err, content) =>  {
    console.log('timeout executed');
    console.timeEnd('task1');
});

// sync code

console.log('Hello World at the first!');

console.time('task1');
for(var i = 0; i < 1000; i++){

}
console.timeEnd('task1');

console.log('Hello World at the end!');

// async code

console.log('Hello World at the first!');

console.time('task1');
setTimeout(() => {
    console.log('timeout executed');
    console.timeEnd('task1');
}, 2000);

console.time('task2');

fs.readFile('./content.md', 'utf8', (err, content) =>  {
    console.log('timeout executed');
    console.timeEnd('task1');
});

console.timeEnd('task1');

console.log('Hello World at the end!');