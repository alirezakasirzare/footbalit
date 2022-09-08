const port = process.env.port;

module.exports = {
  servers: [
    {
      url: 'http://localhost:' + port,
      description: 'Local server',
    },
  ],
};
