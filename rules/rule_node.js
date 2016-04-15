var url = require('url');

var URL = 'https://nodejs.org/api/';

module.exports = function(name, search) {
  if (search) {
    return url.resolve(URL, search + '.html');
  } else {
    return URL;
  }
}
