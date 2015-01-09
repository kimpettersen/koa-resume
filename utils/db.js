
module.exports = (function() {
  var mongoose = require('mongoose'),
      config = require('../config.js'),
      // connectionString = 'mongodb://' + config.mongoUser + ':' + config.mongoPassword + '@ds031581.mongolab.com:31581/resume',
      connectionString = 'mongodb://localhost/test';
      db = {};

  db.dbConnection = mongoose.connect(connectionString);

  return db;
})();
