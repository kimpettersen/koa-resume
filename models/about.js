var mongoose = require('mongoose');

module.exports = (function() {
  var model = mongoose.model('About', {
    title: String,
    description: String,
    order: Number
  });

  return {
    model: model
  };
})();
