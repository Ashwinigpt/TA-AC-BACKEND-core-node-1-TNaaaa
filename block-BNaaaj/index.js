var fs = require('fs');

console.log('Welcome to Nodejs');


var os = require('os');

var cpus = os.cpus().length;
var freeM = os.freemem();
var upTime = os.uptime();
var versions = process.versions;
fs.readFile('./file.js')

console.log(cpus, freeM, versions)



