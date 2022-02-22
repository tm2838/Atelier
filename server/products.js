const axios = require('axios');
require('dotenv').config();

const environment = process.env.ENVIRONMENT;
const url = environment === 'production' ? 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products' : 'http://localhost:5000/product';
const apiKey = process.env.API_KEY;
const requestBody = environment === 'production' ? { headers: { Authorization: apiKey } } : {};

// http://example.com/page?parameter=value&also=another
// routes: /products /products/:product_id /products/:product_id/styles

const getProduct = (id, callback) => {
  axios.get(`${url}/${id}`, {
    ...requestBody,
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};

const getStyles = (id, callback) => {
  axios.get(`http://localhost:5000/product/${id}/styles`, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
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
      callback(error);
    });
};

module.exports = {
  getProduct,
  getStyles,
  postCart,
};
