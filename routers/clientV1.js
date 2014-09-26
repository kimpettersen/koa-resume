var Router = require('koa-router'),
    mount = require('koa-mount'),
    sendfile = require('koa-sendfile'),
    clientV1 = new Router();


module.exports = function(app) {
  app.use(mount('/client/v1', clientV1.middleware()));

  clientV1
    .get('/index', function *(){
      var stats = yield* sendfile.call(this, './app/index.html');
      if (!this.status) this.throw(404);
    });

  return clientV1;
};
