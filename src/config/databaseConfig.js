const mongoose = require('mongoose');

const { stringConnection } = require('./generalConfig');

mongoose.connect(stringConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
