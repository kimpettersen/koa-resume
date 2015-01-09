var mongoose = require('mongoose');

module.exports = (function() {
  var model = mongoose.model('Education', {
    where: String,
    when: String,
    description: String,
    order: Number
  });

  return {
    model: model
  };
})();
