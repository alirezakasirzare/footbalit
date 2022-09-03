const express = require('express');
require('dotenv').config();
const connectDatabase = require('./db');

// setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// TODO : set cors middlware here
connectDatabase();

// routes
app.get('/', (req, res) => {
  res.json('home');
});

// server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`the app is runnings in port ${port}`);
});
