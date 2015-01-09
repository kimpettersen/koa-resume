'use strict';

module.exports = function(app) {
  var rest = require('../utils/rest.js'),
      project = require('../models/project.js');

  app
    .get('/api/v1/project', function *() {
      this.body = yield rest.getAll(project.model);
    })
    .get('/api/v1/project/:id', function *() {
      this.body = yield rest.getOne(project.model, this.params.id);
    })
    .post('/api/v1/project', function *() {
      this.body = yield rest.post(project.model, this.request.body);
    })
    .put('/api/v1/project/:id', function *() {
      this.body = yield rest.put(project.model, this.params.id, this.request.body);
    })
    .patch('/api/v1/project/:id', function *() {
      this.body = yield rest.patch(project.model, this.params.id, this.request.body);
    })
    .del('/api/v1/project/:id', function *() {
      this.body = yield rest.del(project.model, this.params.id);
    });
};
