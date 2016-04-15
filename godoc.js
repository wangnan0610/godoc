var opener = require('opener');
var chalk = require('chalk');

var rule = require('./rules');

var ERRMSG = 'Are You Kidding Me !!!';

function Godoc(name, search) {
  this.name = name;
  this.search = search;
}

Godoc.prototype.go = function() {
  try {
    var url = rule(this.name, this.search);
    console.log(chalk.green(url));
    opener(url);
  } catch (e) {
    console.log(chalk.red(ERRMSG));
  }
}


module.exports = Godoc;
