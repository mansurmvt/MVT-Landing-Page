/**
 * Centralized Error Handling Middleware
 * Prevents stack trace or environment variable leakage in production
 */
const errorHandler = (err, req, res, next) => {
  console.error('💥 [Server Error]:', err);

  const statusCode = err.statusCode || 500;
  const isProd = process.env.NODE_ENV === 'production';

  res.status(statusCode).json({
    success: false,
    error: isProd
      ? 'An unexpected error occurred while processing your request. Please try again or contact us directly.'
      : err.message || 'Internal Server Error',
    ...(isProd ? {} : { stack: err.stack })
  });
};

/**
 * 404 Route Not Found Handler
 */
const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.originalUrl} not found on this server.`
  });
};

module.exports = {
  errorHandler,
  notFoundHandler
};
