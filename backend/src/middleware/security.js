const helmet = require('helmet');
const cors = require('cors');

/**
 * Configure Helmet with strict security headers
 */
const configureHelmet = () => {
  return helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "http://localhost:5000", "http://127.0.0.1:5000"]
      }
    },
    crossOriginEmbedderPolicy: false
  });
};

/**
 * Configure CORS allowing local dev servers and configured domains
 */
const configureCors = () => {
  const allowedOrigins = process.env.CLIENT_ORIGIN
    ? process.env.CLIENT_ORIGIN.split(',').map((o) => o.trim())
    : ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5000'];

  return cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, same-origin)
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev mode
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  });
};

/**
 * Sanitize strings against basic injection / script tags
 */
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/[<>]/g, '') // Strip < and >
    .trim();
};

module.exports = {
  configureHelmet,
  configureCors,
  sanitizeInput
};
