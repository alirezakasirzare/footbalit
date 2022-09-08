const winston = require('winston');

const handleProcessError = () => {
  process.on('uncaughtException', (ex) => {
    winston.error(ex.message, ex);
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  });

  process.on('unhandledRejection', (ex) => {
    winston.error(ex.message, ex);
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  });
};

module.exports = handleProcessError;
