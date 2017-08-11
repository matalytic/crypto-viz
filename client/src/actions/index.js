import axios from 'axios';

const API_URL = "https://api-public.sandbox.gdax.com/",
      SOCKET_URL = "wss://ws-feed.gdax.com"

export const getCryptoData = () => {
  return function (dispatch) {
    axios.get(`${API_URL}products`)
      .then(data => {
        dispatch(setProducts(data));
        dispatch(connectSocket());
      })
      .catch(err => console.log(err))
  };
};

export const connectSocket = () => {
  const ws = new WebSocket(SOCKET_URL);

  return function (dispatch, getState) {
    ws.onopen = () => {
      const state = getState(),
        product_ids = Object.keys(state.prices)
                            .map(k => state.prices[k].id);

      ws.send(JSON.stringify({
        type: 'subscribe',
        product_ids
      }));
    }

    ws.onmessage = (msg) => {
      const { type, price, product_id, reason, size } = JSON.parse(msg.data);
      const value = {
        time: new Date(),
        price: Number(price)
      }

      if (type === 'match' && price) {
        dispatch(addValue(product_id, value));
      }
    }

    ws.onerror = (e) => {
      console.log(e.message);
    }

    ws.onclose = (e) => {
      console.log(e.code, e.reason);
    }
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





