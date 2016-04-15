var url = require('url');

module.exports = function(name, search) {
  if (search) {
    return 'http://www.yiiframework.com/doc-2.0/index.html';
  } else {
    return 'http://www.yiiframework.com/doc-2.0/guide-README.html';
  }
}
