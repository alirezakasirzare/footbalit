const port = process.env.port || 3000;

module.exports = {
  servers: [
    {
      url: 'http://localhost:' + port,
      description: 'Local server',
    },
  ],
};
