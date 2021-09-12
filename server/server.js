const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');

require('dotenv').config(); // allow server to read .env for environmental variables
const getProduct = require('./products').getProduct; // Atelier api call to get product data
const getStyles = require('./products').getStyles; //Atelier api call to get product styles data

const apiKey = process.env.API_KEY;

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

// middleware that helps the client pass CORS policy and request resources from server
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// other configuration...

// --Product Overview Widget-- GET handler that builds a response object from product and styles api data to send to client
app.get('/products', (req, res) => {
  let id = req.query.product_id || 47426; // --Product_id-- Unsure on route handling atm, so just using a single product for testing (id=47425)
  let response = {};
  getProduct(id, apiKey, (data) => {
    response.product = data;
    getStyles(id, apiKey, (data) => {
      response.styles = data;
      res.send(JSON.stringify(response))
    })
  })
})

app.get('/reviews', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews', {
    headers: {
      Authorization: apiKey,
    },
    params: { product_id: 47421 },
  })
    .then((data) => {
      console.log(data.data.results);
      res.status(200).send(data.data.results);
    });
});

app.listen(3000);
