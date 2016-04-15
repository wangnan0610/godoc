module.exports = function(name, search) {
  return require('./rule_' + name)(name, search);
}
