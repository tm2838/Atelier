const axios = require('axios');
require('dotenv').config();

const productUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/';
const apiKey = process.env.API_KEY;

const getRelatedProducts = (id, callback) => {
  axios.get(`${productUrl}${id}/related`, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = {
  getRelatedProducts,
};
