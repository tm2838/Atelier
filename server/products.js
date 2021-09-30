const axios = require('axios');
require('dotenv').config();

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

// http://example.com/page?parameter=value&also=another
// routes: /products /products/:product_id /products/:product_id/styles
const apiKey = process.env.API_KEY;

const getProduct = (id, callback) => {
  axios.get(`${url}/products/${id}`, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      throw err;
    });
};

const getStyles = (id, callback) => {
  axios.get(`${url}/products/${id}/styles`, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      throw err;
    });
};

const postCart = (sku, callback) => {
  axios.post(`${url}/cart`, sku, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      console.log(error); // eslint-disable-line
    });
};

module.exports = {
  getProduct,
  getStyles,
  postCart,
};
