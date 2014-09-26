var mongoose = require('mongoose');


module.exports = (function() {
  var model = mongoose.model('Experience', {
    where: String,
    when: String,
    description: String,
    order: Number
  });

  return {
    model: model
  };
})();
