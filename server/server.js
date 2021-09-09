const path = require('path');
const express = require('express'); // npm installed
require('dotenv').config(); // allow server to read .env for environmental variables

// const apiKey = process.env.API_KEY;
// commenting out apiKey for now because ESLint is marking an error for unused variables
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

// other configuration...

app.listen(3000);
