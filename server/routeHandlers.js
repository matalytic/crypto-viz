const Currency = require('../database/Currency.js');

module.exports.findAll = (req, res) => {
  Currency.find({})
    .then(currencies => {
      res.json(currencies)
    })
}

module.exports.findOne = (req, res) => {
  const query = req.params.id;
  Currency.findOne({symbol: query})
    .then(currency => {
      res.json(currency)
    })
}

