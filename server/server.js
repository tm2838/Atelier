const path = require('path');
const express = require('express');
const multer = require('multer');
const compression = require('compression');

const { getProduct, getStyles, postCart } = require('./products'); // util functions to get product/product styles data
const {
  getReviewMeta,
  getRatingScore,
  getFullReviews,
  markReviewHelpful,
  reportReview,
  postNewReview,
} = require('./reviews'); // util functions to get reviews data
const { getRelatedProducts } = require('./relatedProducts'); // util functions to get related products data
const postInteractions = require('./interactions');

const app = express();
app.use(compression());

app.use('/product/:id', express.static(path.join(__dirname, '/../client/dist')));

app.use(express.json());

app.use((req, res, next) => {
  // middleware that helps the client pass CORS policy and request resources from server
  // an npm middleware to use: cors
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

const upload = multer({ dest: 'uploads/' });

app.get('/products/:id?', (req, res) => {
  const id = req.params.id || 47421;
  const response = {};
  getProduct(id, (product) => {
    response.product = product;
    getStyles(id, (styles) => {
      response.styles = styles;
      getFullReviews(id, response)
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
                          const { reviewMeta } = meta.data;
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
                })
                .catch((error) => {
                  res.status(400).send(error);
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
  getFullReviews(id, response)
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
