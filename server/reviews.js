const axios = require('axios');
require('dotenv').config(); // allow server to read .env for environmental variables

const reviewUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews';
const apiKey = process.env.API_KEY;

const getReviews = (id) => axios.get(reviewUrl, {
  headers: { Authorization: apiKey },
  params: { product_id: id },
});

const getReviewMeta = (id) => axios.get(`${reviewUrl}/meta`, {
  headers: { Authorization: apiKey },
  params: { product_id: id },
});

module.exports = {
  getReviews,
  getReviewMeta,
};
