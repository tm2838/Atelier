const path = require('path');
const express = require('express'); // npm installed
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const { getProduct, getStyles, postCart } = require('./products'); // Atelier api call to get product/product styles data
const {
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
} = require('./reviews');
const { getRelatedProducts } = require('./relatedProducts');
const postInteractions = require('./interactions');

const app = express();

app.use('/product/:id', express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
// middleware that helps the client pass CORS policy and request resources from server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header(
    'Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS',
  );
  next();
});

app.get('/products/:id?', (req, res) => {
  const id = req.params.id || 47421;
  const response = {};
  getProduct(id, (product) => {
    response.product = product;
    getStyles(id, (styles) => {
      response.styles = styles;
      getReviews(id)
        .then((data) => {
          let reviews = addNewestTag(data.data.results);
          reviews = addRelevanceTag(reviews);
          response.reviews = reviews;
        })
        .then(() => getReviewMeta(id))
        .then((data) => {
          const reviewMeta = data.data;
          reviewMeta.ratingScore = getRatingScore(reviewMeta.ratings);
          reviewMeta.recommendationRate = getRecommendationMetric(reviewMeta.recommended);
          reviewMeta.totalReviews = getTotalReviews(reviewMeta.ratings);
          response.reviewMeta = reviewMeta;
        })
        .then(() => {
          getRelatedProducts(id, (err, data) => {
            if (err) {
              throw err;
            } else {
              return Promise.all(data.map((productId) => (
                new Promise((resolve) => {
                  const relatedProduct = {};
                  getProduct(productId, (relProduct) => {
                    relatedProduct.product = relProduct;
                    getStyles(productId, (relStyles) => {
                      relatedProduct.styles = relStyles;
                      getReviewMeta(productId)
                        .then((meta) => {
                          const reviewMeta = meta.data;
                          relatedProduct.product.ratingScore = getRatingScore(reviewMeta.ratings);
                          resolve(relatedProduct);
                        });
                    });
                  });
                })
              )))
                .then((relatedProducts) => {
                  response.relatedProducts = relatedProducts;
                  res.status(200).send(response);
                });
            }
          });
        });
    });
  });
});

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id || 47421;
  const response = {};
  getReviews(id)
    .then((data) => {
      let reviews = addNewestTag(data.data.results);
      reviews = addRelevanceTag(reviews);
      response.reviews = reviews;
    })
    .then(() => getReviewMeta(id))
    .then((data) => {
      const reviewMeta = data.data;
      reviewMeta.ratingScore = getRatingScore(reviewMeta.ratings);
      reviewMeta.recommendationRate = getRecommendationMetric(reviewMeta.recommended);
      reviewMeta.totalReviews = getTotalReviews(reviewMeta.ratings);
      response.reviewMeta = reviewMeta;
    })
    .then(() => {
      res.status(200).send(response);
    });
});

app.post('/cart', (req, res) => {
  const { body } = req;
  postCart(body, (response) => {
    console.log(response.status, 'cart success'); //eslint-disable-line
    res.status(response.status).send();
  });
});

app.put('/reviews/:reviewId/helpful', (req, res) => {
  const id = req.params.reviewId;
  markReviewHelpful(id)
    .then(() => {
      res.status(204).end();
    })
    .catch((e) => console.log(e)); //eslint-disable-line
});

app.put('/reviews/:reviewId/report', (req, res) => {
  const id = req.params.reviewId;
  reportReview(id)
    .then(() => {
      res.status(204).end();
    })
    .catch((e) => console.log(e)); //eslint-disable-line
});

app.post('/reviews', upload.array('photos'), (req, res) => {
  const { body, files } = req;
  postNewReview(body, files)
    .then(() => {
      res.status(201).end();
    })
    .catch((e) => console.log(e)); //eslint-disable-line
});

// eslint-disable-next-line no-unused-vars
app.post('/interactions', (req, res) => {
  const { body } = req;
  if (!Object.keys(body.element).length) {
    body.element = 'unknown-element';
  }
  postInteractions(body, (response) => {
    console.log(response.status); //eslint-disable-line
    res.status(response.status).send();
  });
});

app.listen(3000);
