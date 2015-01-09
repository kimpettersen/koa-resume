var config = require('../config.js');

module.exports = function () {
  return function *auth(next){
    var token = this.headers.authorization;

    if (this.method !== 'GET' && (typeof token === 'undefined' || token !== config.apiToken)){
      this.status = 401;
      this.body = 'Unauthorized';
    } else {
      yield next;
    }
  }
};
