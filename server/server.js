const path = require('path');
const express = require('express'); // npm installed
require('dotenv').config();
// allow server to read .env for environmental variables
const apiKey = process.env.API_KEY;
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

// other configuration...

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
