var url = require('url');

var URL = 'https://www.npmjs.com/';

module.exports = function(name, search) {
  if (search) {
    return url.resolve(URL, 'package/' + search);
  } else {
    return URL;
  }
}
