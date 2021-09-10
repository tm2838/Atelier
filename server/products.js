const axios = require('axios');
require('dotenv').config();

// let productUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'
// http://example.com/page?parameter=value&also=another
// routes: /products /products/:product_id /products/:product_id/styles

let getProduct = (id, key, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, {
    headers: {
      'Authorization': key,
    }
  })
  .then(res => {
    callback(res.data);
  })
  .catch(err => {
    throw err;
  })

}

module.exports = getProduct;