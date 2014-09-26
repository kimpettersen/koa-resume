
module.exports = function(app) {
  var rest = require('../utils/rest.js'),
      experience = require('../models/experience.js');

  app
    .get('/api/v1/experience', function *() {
      this.body = yield rest.getAll(experience.model);
    })
    .get('/api/v1/experience/:id', function *() {
      var id = this.params.id;
      this.body = yield rest.getOne(experience.model, id);
    })
    .post('/api/v1/experience', function *() {
      console.log(this.request);
      this.body = this.request;
      // this.body = yield experience.model.create(this.request.body);
    })
    .put('/api/v1/experience/:id', function *() {
      this.body = yield rest.put(experience.model, id);
    })
    .del('/api/v1/experience/:id', function *() {
      this.body = yield rest.del(experience.model, id);
});
};
