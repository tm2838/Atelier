const path = require('path');
const express = require('express'); // npm installed
require('dotenv').config(); // allow server to read .env for environmental variables
const getProduct = require('./products');

const apiKey = process.env.API_KEY;

// commenting out apiKey for now because ESLint is marking an error for unused variables
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

// other configuration...
app.get('/products', (req, res) => {
  let id = req.query.product_id;
  console.log(id);
  getProduct(id, apiKey, (data) => {
    console.log(data)
    // res.send(JSON.stringify(data));
  })
})

app.listen(3000);
