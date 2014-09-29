'use strict';

var koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    path = require('path'),
    routing = require('koa-router'),
    statics = require('koa-static'),
    json = require('koa-json'),
    app = koa();

app.use(bodyParser());
app.use(json());
app.use(routing(app));


require('./config.js'),
require('./routers/APIv1.js')(app);
require('./routers/clientV1.js')(app);

app.use(statics(path.join(__dirname, 'app')));

app.use(function *(){
  this.status = 404;
  this.body = 'Not found';
});

app.listen(3000);
