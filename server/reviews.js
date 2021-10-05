/* eslint-disable no-param-reassign */
const axios = require('axios');
require('dotenv').config(); // allow server to read .env for environmental variables
const fs = require('fs');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const reviewUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews';
const apiKey = process.env.API_KEY;
const bucket = process.env.PROJECT_ATELIER_BUCKET;
const accessKey = process.env.PROJECT_ATELIER_ACCESS_KEY;
const secretAccessKey = process.env.PROJECT_ATELIER_SECRET_ACCESS_KEY;

const s3 = new AWS.S3({ region: 'us-east-1', secretAccessKey, accessKeyId: accessKey });

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

const markReviewHelpful = (id) => axios({
  method: 'put',
  url: `${reviewUrl}/${id}/helpful`,
  headers: { Authorization: apiKey },
});

const reportReview = (id) => axios({
  method: 'put',
  url: `${reviewUrl}/${id}/report`,
  headers: { Authorization: apiKey },
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
  if (recommended.true && !recommended.false) {
    return 100;
  }

  if (!recommended.true) {
    return 0;
  }

  let recommendationRate;
  if (recommended.true && recommended.false) {
    recommendationRate = parseInt(recommended.true, 10)
    / (parseInt(recommended.true, 10)
    + parseInt(recommended.false, 10));
  }

  return (recommendationRate * 100).toFixed(2);
};

const getTotalReviews = (ratings) => Object.values(ratings).reduce(
  (p, c) => parseInt(p, 10) + parseInt(c, 10), 0,
);

const postNewReview = (review, files) => {
  const photoURLs = [];
  const promises = [];
  files.forEach(async (photo) => {
    const id = uuidv4();
    promises.push(s3.upload({
      Bucket: bucket,
      Body: fs.createReadStream(photo.path),
      Key: id,
      ContentType: photo.type,
    })
      .promise()
      .then(() => {
        photoURLs.push(
          `https://${bucket}.s3.amazonaws.com/${id}`,
        );
      })
      .catch((e) => {
        console.log(e); //eslint-disable-line
      }));
  });

  return Promise.all(promises)
    .then(() => {
      const newReview = {
        ...review,
        product_id: parseInt(review.product_id, 10),
        rating: parseInt(review.rating, 10),
        photos: photoURLs,
        characteristics: {},
        recommend: review.recommend === 'true',
      };
      const whiteList = ['body', 'summary', 'product_id', 'rating', 'name', 'email', 'photos', 'recommend'];
      const charsKeys = Object.keys(review).filter((key) => !whiteList.includes(key));
      charsKeys.forEach((key) => {
        newReview.characteristics[key] = parseInt(review[key], 10);
        delete newReview[key];
      });
      return axios.post(reviewUrl, newReview, {
        headers: { Authorization: apiKey },
      });
    });
};

module.exports = {
  getReviews,
  getReviewMeta,
  getRatingScore,
  getRecommendationMetric,
  addNewestTag,
  addRelevanceTag,
  getTotalReviews,
  markReviewHelpful,
  reportReview,
  postNewReview,
};
