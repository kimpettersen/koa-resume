
module.exports = (function() {
  var rest = {},
      Promise = require('es6-promise').Promise;

  rest.getOne = function(Model, id) {
    return {name: 'getOne', id: id};
  };

  rest.getAll = function (Model) {
    return new Promise(function(resolve, reject){
      Model
        .find()
        .exec(function(err, res){
          if (err) reject(err);
          resolve(res);
        });
    });
  };

  rest.put = function *(Model, id) {
    return {name: 'put'};
  };

  rest.post = function *(Model) {
    var resource = new Model(this.params)
    resource
      .save(function(err, res) {
        return res
      });
  };

  rest.del = function *(Model, id) {
    return {name: 'del'};
  };
  return rest;
})();
