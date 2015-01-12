'use strict';

module.exports = function(app) {
  var rest = require('../utils/rest.js'),
      introduction = require('../models/introduction.js');

  app
    .get('/api/v1/introduction', function *() {
      this.body = yield rest.getAll(introduction.model);
    })
    .get('/api/v1/introduction/:id', function *() {
      this.body = yield rest.getOne(introduction.model, this.params.id);
    })
    .post('/api/v1/introduction', function *() {
      this.body = yield rest.post(introduction.model, this.request.body);
    })
    .put('/api/v1/introduction/:id', function *() {
      this.body = yield rest.put(introduction.model, this.params.id, this.request.body);
    })
    .patch('/api/v1/introduction/:id', function *() {
      this.body = yield rest.patch(introduction.model, this.params.id, this.request.body);
    })
    .del('/api/v1/introduction/:id', function *() {
      this.body = yield rest.del(introduction.model, this.params.id);
    });
};
