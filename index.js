var opener = require('opener');
var path = require('path');
var chalk = require('chalk');
var argv = require('yargs').argv;

var config = require('./config');

var args = argv._;
var confs = getKeys(config);

function getKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }

  return keys;
}

if (args.length === 1) {
  if (confs.indexOf(args[0]) !== -1) {
    var url = config[args[0]].url;
    console.log(chalk.green('Opening ' + url));
    opener(url);
  } else {
    console.log(chalk.red("I don't know ~"));
  }
} else if (args.length === 2) {
  if (confs.indexOf(args[0]) !== -1) {
    var url = path.join(config[args[0]].search, args[1]);
    console.log(chalk.green('Opening ' + url));
    opener(url);
  } else {
    console.log(chalk.red("I don't know ~"));
  }
}
