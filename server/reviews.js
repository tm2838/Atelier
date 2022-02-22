/* eslint-disable no-param-reassign */
const axios = require('axios');
const fs = require('fs');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config(); // allow server to read .env for environmental variables

const environment = process.env.ENVIRONMENT;
const bucket = process.env.PROJECT_ATELIER_BUCKET;
const accessKey = process.env.PROJECT_ATELIER_ACCESS_KEY;
const secretAccessKey = process.env.PROJECT_ATELIER_SECRET_ACCESS_KEY;
const s3 = new AWS.S3({ region: 'us-east-1', secretAccessKey, accessKeyId: accessKey });
const imgPlaceHolder = 'no-image-available.png';

const reviewUrl = environment === 'production' ? 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp' : 'http://localhost:8000';
const apiKey = process.env.API_KEY;
const params = environment === 'production' ? { count: 100, page: 1 } : {};
const requestBody = environment === 'production' ? { headers: { Authorization: apiKey } } : {};

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

const getReviews = (id) => axios.get(`${reviewUrl}/reviews`, {
  ...requestBody,
  params: { product_id: id, ...params },
});

const getReviewMeta = (id) => axios.get(`${reviewUrl}/reviews/meta`, {
  ...requestBody,
  params: { product_id: id },
});

const markReviewHelpful = (id) => axios({
  method: 'put',
  url: `${reviewUrl}/reviews/${id}/helpful`,
  ...requestBody,
});

const reportReview = (id) => axios({
  method: 'put',
  url: `${reviewUrl}/reviews/${id}/report`,
  ...requestBody,
});

const getRatingScore = (ratings) => {
  if (!Object.keys(ratings).length) {
    return 0;
  }
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

const getFullReviews = (id, res) => getReviews(id)
  .then((data) => {
    let reviews = addNewestTag(data.data.reviews);
    reviews = addRelevanceTag(reviews);
    reviews.forEach((review) => {
      review.photos.forEach((photo) => {
        if (photo.url.includes('http://localhost:3000') && bucket) {
          photo.url = `https://${bucket}.s3.amazonaws.com/${imgPlaceHolder}`;
        }
      });
    });
    res.reviews = reviews;
  })
  .then(() => getReviewMeta(id))
  .then((data) => {
    const { reviewMeta } = data.data;
    reviewMeta.ratingScore = getRatingScore(reviewMeta.ratings);
    reviewMeta.recommendationRate = getRecommendationMetric(reviewMeta.recommended);
    reviewMeta.totalReviews = getTotalReviews(reviewMeta.ratings);
    res.reviewMeta = reviewMeta;
  })
  .catch((e) => {
    console.log(e); // eslint-disable-line
  });

const postNewReview = (review, files) => {
  const photoURLs = [];
  const promises = [];
  if (bucket) {
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
  } else {
    files.forEach((photo) => {
      photoURLs.push(`http://localhost:3000/${photo.filename}`);
    });
  }

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
      return axios.post(`${reviewUrl}/reviews`, newReview, { ...requestBody });
    });
};

module.exports = {
  getReviewMeta,
  getRatingScore,
  getFullReviews,
  markReviewHelpful,
  reportReview,
  postNewReview,
};
