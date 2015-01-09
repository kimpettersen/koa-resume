'use strict';

module.exports = function(app) {
  var rest = require('../utils/rest.js'),
      experience = require('../models/experience.js');

  app
    .get('/api/v1/experience', function *() {
      this.body = yield rest.getAll(experience.model);
    })
    .get('/api/v1/experience/:id', function *() {
      this.body = yield rest.getOne(experience.model, this.params.id);
    })
    .post('/api/v1/experience', function *() {
      this.body = yield rest.post(experience.model, this.request.body);
    })
    .put('/api/v1/experience/:id', function *() {
      this.body = yield rest.put(experience.model, this.params.id, this.request.body);
    })
    .patch('/api/v1/experience/:id', function *() {
      this.body = yield rest.patch(experience.model, this.params.id, this.request.body);
    })
    .del('/api/v1/experience/:id', function *() {
      this.body = yield rest.del(experience.model, this.params.id);
    });

};
