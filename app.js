'use strict';

var koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    routing = require('koa-router'),
    json = require('koa-json'),
    app = koa();

app.use(bodyParser());
app.use(json());
app.use(routing(app));

require('./config.js'),
require('./routers/APIv1.js')(app);
require('./routers/clientV1.js')(app);

app.use(function *(){
  this.body = {
    status: 404
  };
});

app.listen(3000);
