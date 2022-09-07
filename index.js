const express = require('express');
require('dotenv').config();
const connectDatabase = require('./db');
require('express-async-errors');
const docs = require('./src/docs');
const swaggerUi = require('swagger-ui-express');
const routes = require('./src/router.js');

// setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// TODO : set cors middlware here
connectDatabase();

// const swaggerDefinition = {
//   openapi: '3.0.0',
//   info: {
//     title: 'Express API for JSONPlaceholder',
//     version: '1.0.0',
//     description:
//       'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
//     license: {
//       name: 'Licensed Under MIT',
//       url: 'https://spdx.org/licenses/MIT.html',
//     },
//     contact: {
//       name: 'JSONPlaceholder',
//       url: 'https://jsonplaceholder.typicode.com',
//     },
//   },
//   servers: [
//     {
//       url: 'http://localhost:3000',
//       description: 'Development server',
//     },
//   ],
// };
// const options = {
//   swaggerDefinition,
//   // Paths to files containing OpenAPI definitions
//   apis: ['./src/routes/*.js'],
// };
// const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));

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
