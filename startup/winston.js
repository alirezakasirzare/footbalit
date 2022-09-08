const winston = require('winston');

configWinston = () => {
  const logsFileName = `./${process.env.LOGS}/errors.log`;
  winston.add(
    new winston.transports.File({
      filename: logsFileName,
      level: 'error',
      format: winston.format.json(),
    })
  );

  if (process.env.NODE_ENV !== 'production') {
    winston.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }
};
module.exports = configWinston;
