const axios = require('axios');
require('dotenv').config();

const productUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/';
const apiKey = process.env.API_KEY;

const getRelatedProducts = (id, callback) => {
  axios.get(`${productUrl}${id}/related`, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      const ids = [...new Set(res.data)];
      for (let i = 0; i < ids.length; i += 1) {
        if (parseInt(id, 10) === ids[i]) {
          ids.splice(i, 1);
        }
      }
      callback(null, ids);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = {
  getRelatedProducts,
};
