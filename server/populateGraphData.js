const db = require('../database/index.js');
const Currency = require('../database/Currency');
const currencySymbols = require('./currencySymbols');
const axios = require('axios');

currencySymbols.forEach((item) => {
  axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${item}&tsym=USD&allData=true&aggregate=1&limit=100`)
    .then((currency) => {
      Currency.create({ symbol: item, graphData: currency.data.Data.map(day => day.close) });
    });
});

// for (key in obj) {
//   Currency.create({symbol: key, graphData: obj[key]});
// }

// Currency.find({})
//   .then(data => console.log(data));

// axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${fromType}`)