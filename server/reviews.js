/* eslint-disable no-param-reassign */
const axios = require('axios');
require('dotenv').config(); // allow server to read .env for environmental variables

const reviewUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews';
const apiKey = process.env.API_KEY;

const addNewestTag = (reviews) => {
  // higher number indicates more recent
  const sorted = reviews.slice();
  const updatedReviews = reviews.slice();
  sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
  updatedReviews.forEach((review) => { review.newest = sorted.indexOf(review) + 1; });
  return updatedReviews;
};

const addRelevanceTag = (reviews) => {
  // higher number indicates more relevant
  const updatedReviews = reviews.slice();
  updatedReviews.forEach(
    (review) => { review.relevant = review.helpfulness * 0.6 + review.newest * 0.4; },
  );
  updatedReviews.sort((a, b) => b.relevant - a.relevant);
  return updatedReviews;
};

const getReviews = (id) => axios.get(reviewUrl, {
  headers: { Authorization: apiKey },
  params: { product_id: id, count: 100, page: 1 },
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
  return ratingScore.toFixed(1);
};

const getRecommendationMetric = (recommended) => {
  const recommendationRate = parseInt(recommended.true, 10)
    / (parseInt(recommended.true, 10)
    + parseInt(recommended.false, 10));
  return (recommendationRate * 100).toFixed(2);
};

module.exports = {
  getReviews,
  getReviewMeta,
  getRatingScore,
  getRecommendationMetric,
  addNewestTag,
  addRelevanceTag,
};
