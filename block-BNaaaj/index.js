console.log('Welcome to Nodejs');


var os = require('os');

var cpus = os.cpus().length;
var freeM = os.freemem();
var upTime = os.uptime();
var versions = process.versions;

console.log(cpus, freeM, upTime, versions)

var { readFile, readFileSync, unlink } = require('fs');

var sync = readFileSync('./app.js');

readFile('./app.js', (err, content) => {
    console.log(err, content.toString);
})