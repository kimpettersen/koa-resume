'use strict';

module.exports = function(app) {
  var sendfile = require('koa-sendfile');

  app
    .get('/index', function *(){
      var stats = yield* sendfile.call(this, './app/index.html');
      if (!this.status) this.throw(404);
    });

  return clientV1;
};
