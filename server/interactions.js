const axios = require('axios');
require('dotenv').config();

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions';
const apiKey = process.env.API_KEY;

const postInteractions = (body, callback) => {
  axios.post(url, body, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = postInteractions;
