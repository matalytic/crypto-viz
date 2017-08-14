import axios from 'axios';

// Fetches general market data
const INFO_ROOT_URL = 'https://api.coinmarketcap.com/v1/ticker/';

// Fetches historical data for graphs
const GRAPH_ROOT_URL = 'https://min-api.cryptocompare.com/data/histoday?fsym=';

export function fetchAllCrypto() {
  const url = `${INFO_ROOT_URL}?limit=30`;
  const request = axios.get(url);

  return {
    type: 'FETCH_ALL_CURRENCIES',
    payload: request,
  };
}

// Fetch a specific currency
export function fetchCrypto(fromType, toType = 'USD') {
  const url = `${INFO_ROOT_URL}${fromType}`;
  const request = axios.get(url);

  return {
    type: 'FETCH_CURRENCY',
    payload: request,
  };
}

export function fetchCryptoGraph(fromType, toType = 'USD') {
  const url = `${GRAPH_ROOT_URL}${fromType}&tsym=USD&allData=true&aggregate=1&limit=100`;
  const request = axios.get(url);

  return {
    type: 'FETCH_GRAPH_DATA',
    payload: request,
    meta: { fromType, toType },
  };
}
