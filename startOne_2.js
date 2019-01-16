const compose = require('docker-compose');
var path = require("path");

process.argv.forEach(function (val, index, array) {
    if (index == 2) {
        compose.upOne(val, { cwd: path.join(__dirname), log: true })
        .then(
            () => { }, 
            err => { console.log('something went wrong:', err.message)}
        );   
    }
});