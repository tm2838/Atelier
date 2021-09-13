const path = require('path');
const express = require('express'); // npm installed
require('dotenv').config(); // allow server to read .env for environmental variables
const { getProduct, getStyles } = require('./products'); // Atelier api call to get product/product styles data

const apiKey = process.env.API_KEY;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

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
app.get('/products', (req, res) => {
  // --Product_id-- Unsure on route handling atm, so just using a single
  // product for testing (id=47425)
  const id = req.query.product_id || 47426;
  const response = {};
  getProduct(id, apiKey, (data) => {
    response.product = data;
    getStyles(id, apiKey, (styles) => {
      response.styles = styles;
      res.send(JSON.stringify(response));
    });
  });
});

app.listen(3000);
