const mongoose = require('mongoose');
const mLabUri = require('./config');

mongoose.connect(mLabUri);

const db = mongoose.connection;

db.on('error', function() {
  console.log('Mongoose Connection Error');
});

db.once('open', function() {
  console.log('Mongoose Connected Successfully To', mLabUri);
});

module.exports = db;