const path = require('path');
const express = require('express'); // npm installed
const { getProduct, getStyles } = require('./products'); // Atelier api call to get product/product styles data
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

// other configuration...

// --Product Overview Widget-- GET handler that builds a response object
// from product and styles api data to send to client
app.get('/products/:id?', (req, res) => { // added optional id param to route
  // --Product_id-- Unsure on route handling atm,
  // so just using a single product for testing (id=47425)
  const id = req.params.id || 47421;
  const response = {};
  getProduct(id, (product) => {
    response.product = product;
    getStyles(id, (styles) => {
      response.styles = styles;
      res.send(JSON.stringify(response));
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

app.get('/relatedProducts/:id', (req, res) => {
  const id = req.params.id || 47421;
  getRelatedProducts(id, (err, data) => {
    if (err) {
      throw err;
    } else {
      return Promise.all(data.map((productId) => (
        new Promise((resolve) => {
          const relatedProduct = {};
          getProduct(productId, (product) => {
            relatedProduct.product = product;
            getStyles(productId, (styles) => {
              relatedProduct.styles = styles;
              resolve(relatedProduct);
            });
          });
        })
      )))
        .then((relatedProducts) => {
          res.status(200).send(relatedProducts).end();
        });
    }
  });
});

// eslint-disable-next-line no-unused-vars
app.post('/interactions', (req, res) => {
  const { body } = req;
  postInteractions(body, (response) => {
    console.log(response.status); //eslint-disable-line
    res.status(response.status).send();
  });
});

app.listen(3000);
