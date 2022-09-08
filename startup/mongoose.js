const mongoose = require('mongoose');

/**
 * Connect to mongo dataase
 *
 */
connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('connected to database'))
    .catch((ex) => {
      console.log('can not cnnect to database');
      console.log(ex);
    });
};

module.exports = connectDatabase;
