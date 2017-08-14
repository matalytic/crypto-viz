const mongoose = require('mongoose');

const currencySchema = mongoose.Schema({
  name: String,
  symbol: String,
  info: Object,
  graphData: Array,
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;
