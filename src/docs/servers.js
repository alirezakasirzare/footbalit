const port = process.env.PORT;

module.exports = {
  servers: [
    {
      url: 'http://localhost:' + port,
      description: 'Local server',
    },
  ],
};
