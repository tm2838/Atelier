const axios = require('axios');
// require('dotenv').config();

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products'
// http://example.com/page?parameter=value&also=another
// routes: /products /products/:product_id /products/:product_id/styles

let getProduct = (id, key, callback) => {
  axios.get(url, {
    headers: { 'Authorization': key },
    params: { product_id: id }
  })
  .then(res => {
    callback(res.data);
  })
  .catch(err => {
    throw err;
  })
}

let getStyles = (id, key, callback) => {
  axios.get(url + '/' + id + '/styles', {
    headers: { 'Authorization': key }
  })
  .then(res => {
    callback(res.data);
  })
  .catch(err => {
    throw err;
  })
}

module.exports = {
  getProduct,
  getStyles
};