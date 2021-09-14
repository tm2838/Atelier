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

const getRatingScore = (ratings) => {
  let ratingScore = 0;
  let totalReviews = 0;
  Object.keys(ratings).forEach(
    (key) => {
      ratingScore += parseInt(key, 10) * parseInt(ratings[key], 10);
      totalReviews += parseInt(ratings[key], 10);
    },
  );
  ratingScore /= totalReviews;
  return ratingScore.toFix(1);
};

const getRecommendationMetric = (recommended) => {
  const recommendationRate = parseInt(recommended.true, 10)
    / (parseInt(recommended.true, 10)
    + parseInt(recommended.false, 10));
  return (recommendationRate * 100).toFix(2);
};

module.exports = {
  getReviews,
  getReviewMeta,
  getRatingScore,
  getRecommendationMetric,
};
