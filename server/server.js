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
} = require('./reviews');
const { getRelatedProducts } = require('./relatedProducts');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

// middleware that helps the client pass CORS policy and request resources from server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
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
  // const id = req.query.product_id || 47426;
  const response = {};
  getProduct(id, (product) => {
    response.product = product;
    getStyles(id, (styles) => {
      response.styles = styles;
      res.send(JSON.stringify(response));
    });
  });
});

app.get('/reviews', (req, res) => {
  // using 47421 for now since 47426 doesn't have any reviews
  const id = req.query.product_id || 47428;
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
      response.reviewMeta = reviewMeta;
    })
    .then(() => {
      res.status(200).send(response);
    });
});

app.get('/relatedProducts', (req, res) => {
  const id = req.query.product_id || 47421;
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

app.listen(3000);
