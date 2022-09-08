require('express-async-errors');
require('dotenv').config();
const express = require('express');

// start up
const docs = require('./src/docs');
const swaggerUi = require('swagger-ui-express');
const routes = require('./src/router.js');
require('./startup/winston')();
require('./startup/mongoose')();
require('./startup/processError')();

// config app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const staticFiles = process.env.STATIC;
app.use(express.static(staticFiles));

// handle routes
app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));

app.get('/', (req, res) => {
  res.send('app is running, api documen path is : /docs');
});

app.use('/', routes);

// start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`the app is runnings in port ${port}`);
});
