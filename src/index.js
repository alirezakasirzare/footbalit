const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
  res.json('home');
});

// server
const port = 3000;
app.listen(port, () => {
  console.log('the app is runnings in 3000 port');
});
