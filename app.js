'use strict';

var koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    path = require('path'),
    routing = require('koa-router'),
    statics = require('koa-static'),
    json = require('koa-json'),
    auth = require('./utils/auth.js'),
    app = koa();

app.use(bodyParser());
app.use(json());
app.use(auth());
app.use(routing(app));


require('./utils/db.js'),
require('./routers/experience.js')(app);
require('./routers/education.js')(app);
require('./routers/project.js')(app);
require('./routers/about.js')(app);
require('./routers/introduction.js')(app);
require('./routers/client.js')(app);

app.use(statics(path.join(__dirname, 'app')));

app.use(function *(){
  this.status = 404;
  this.body = 'Not found';
});

app.listen(3000);
