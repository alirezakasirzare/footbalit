const baseObject = ({ error = null, data = null, message }) => {
  const success = !error;
  return {
    error,
    data,
    success,
    message,
  };
};

const errorResponse = (error) => {
  return baseObject({ error, message: 'The process encountered an error' });
};

const successResponse = (data) => {
  return baseObject({ data, message: 'The process is successfully completed' });
};

module.exports = {
  errorResponse,
  successResponse,
};
