var mongoose = require('mongoose');

module.exports = (function() {
  var model = mongoose.model('Introduction', {
    description: String,
    order: Number
  });

  return {
    model: model
  };
})();
