const path = require("path")
const express = require("express"); // npm installed
require('dotenv').config(); // allow server to read .env for environmental variables
const api_key = process.env.API_KEY;
const app = express();

app.use(express.static(path.join(__dirname, "/client/dist")));
// other configuration...

app.listen(3000);