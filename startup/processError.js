const winston = require('winston');

/**
 * Handle process error
 *
 */
const handleProcessError = () => {
  // handle normal error
  process.on('uncaughtException', (ex) => {
    winston.error(ex.message, ex);
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  });

  // handle promise rejection error
  process.on('unhandledRejection', (ex) => {
    winston.error(ex.message, ex);
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  });
};

module.exports = handleProcessError;
