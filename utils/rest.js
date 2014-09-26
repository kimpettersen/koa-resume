
module.exports = (function() {
  var rest = {};

  rest.getOne = function(Model, id) {
    return Model.findOne({_id: id}).exec();
  };

  rest.getAll = function (Model) {
    return Model.find().exec();
  };

  rest.put = function (Model, id, data) {
    return Model.findOneAndUpdate({_id: id}, data).exec();
  };

  //adding support for PATCH, but it's the same implementation as PUT
  rest.patch = rest.put;

  rest.post = function (Model, data) {
    return Model.create(data);
  };

  rest.del = function (Model, id) {
    return Model.remove({_id: id}).exec();
  };

  return rest;
})();
