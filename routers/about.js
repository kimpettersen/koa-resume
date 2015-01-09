'use strict';

module.exports = function(app) {
  var rest = require('../utils/rest.js'),
      about = require('../models/about.js');

  app
    .get('/api/v1/about', function *() {
      this.body = yield rest.getAll(about.model);
    })
    .get('/api/v1/about/:id', function *() {
      this.body = yield rest.getOne(about.model, this.params.id);
    })
    .post('/api/v1/about', function *() {
      this.body = yield rest.post(about.model, this.request.body);
    })
    .put('/api/v1/about/:id', function *() {
      this.body = yield rest.put(about.model, this.params.id, this.request.body);
    })
    .patch('/api/v1/about/:id', function *() {
      this.body = yield rest.patch(about.model, this.params.id, this.request.body);
    })
    .del('/api/v1/about/:id', function *() {
      this.body = yield rest.del(about.model, this.params.id);
    });
};
