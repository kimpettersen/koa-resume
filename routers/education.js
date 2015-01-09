'use strict';

module.exports = function(app) {
  var rest = require('../utils/rest.js'),
      education = require('../models/education.js');

  app
    .get('/api/v1/education', function *() {
      this.body = yield rest.getAll(education.model);
    })
    .get('/api/v1/education/:id', function *() {
      this.body = yield rest.getOne(education.model, this.params.id);
    })
    .post('/api/v1/education', function *() {
      this.body = yield rest.post(education.model, this.request.body);
    })
    .put('/api/v1/education/:id', function *() {
      this.body = yield rest.put(education.model, this.params.id, this.request.body);
    })
    .patch('/api/v1/education/:id', function *() {
      this.body = yield rest.patch(education.model, this.params.id, this.request.body);
    })
    .del('/api/v1/education/:id', function *() {
      this.body = yield rest.del(education.model, this.params.id);
    });
};
