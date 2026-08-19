const express = require('express');
const router = express.Router();
const { handleChatMessage } = require('../controllers/chatController');
const { chatLimiter } = require('../middleware/rateLimiter');

// POST /api/chat - Query the MVT AI Concierge
router.post('/', chatLimiter, handleChatMessage);

module.exports = router;
