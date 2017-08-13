import axios from 'axios';

// Fetches general market data
const INFO_ROOT_URL = 'https://min-api.cryptocompare.com/data/pricemultifull?'

// Fetches historical data for graphs
const GRAPH_ROOT_URL = 'https://min-api.cryptocompare.com/data/histoday?fsym='

export function fetchAllCrypto() {
  const url ="https://api.coinmarketcap.com/v1/ticker/?limit=50";
  const request = axios.get(url);

  return {
    type: 'FETCH_ALL_CURRENCIES',
    payload: request
  }
}

export function fetchCrypto(fromType, toType = 'USD') {
  const infoUrl = `${INFO_ROOT_URL}fsyms=${fromType}&tsyms=${toType}`;
  const request = axios.get(infoUrl);

  console.log('REQUEST::', request);
  return {
    type: 'FETCH_CURRENCY',
    payload: request
  }
}

export function fetchCryptoGraph(fromType, toType = 'USD') {
  const url = `${GRAPH_ROOT_URL}${fromType}&tsym=USD&allData=true&aggregate=1&limit=100`
  const request = axios.get(url);

  return {
    type: 'FETCH_GRAPH_DATA',
    payload: request,
    meta: { fromType, toType }
  }
}


export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  products: products.filter(({ quote_currency }) => quote_currency === 'USD')
});

export const addValue = (product, value) => ({
  type: 'ADD_VALUE',
  product,
  value
});



// https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD

