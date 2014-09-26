
module.exports = (function() {
  var mongoose = require('mongoose'),
      config = {};

  config.dbConnection = mongoose.connect('mongodb://localhost/test');

  return config;
})();
