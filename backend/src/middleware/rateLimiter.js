const rateLimit = require('express-rate-limit');

/**
 * Rate Limiter for Contact Form Submissions
 * Prevents spam and automated bot abuse.
 * Allows 5 submissions per 15-minute window per IP.
 */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many submissions from this connection. Please try again after 15 minutes or connect directly via WhatsApp/Telegram.'
  }
});

/**
 * Rate Limiter for AI Chatbot queries
 * Allows 30 queries per 1-minute window per IP.
 */
const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Chat request rate limit reached. Please wait a moment before sending more messages.'
  }
});

/**
 * General API Limiter
 */
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = {
  contactLimiter,
  chatLimiter,
  generalLimiter
};
