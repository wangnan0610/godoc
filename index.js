var opener = require('opener');
var path = require('path');
var chalk = require('chalk');
var argv = require('yargs').argv;

var args = argv._;

var Godoc = require('./godoc');

console.log(chalk.yellow('Ready Go: ', args[0], ' ++++ ', args[1] ? args[1] : 'website'));
var godoc = new Godoc(args[0], args[1]);

godoc.go();

