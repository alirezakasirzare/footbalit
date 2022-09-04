const express = require('express');
require('dotenv').config();
const connectDatabase = require('./db');
require('express-async-errors');
const routes = require('./src/routes/router.js');

// setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// TODO : set cors middlware here
connectDatabase();

// routes
app.get('/', (req, res) => {
  res.send('app is running');
});

app.use('/', routes);

// server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`the app is runnings in port ${port}`);
});
