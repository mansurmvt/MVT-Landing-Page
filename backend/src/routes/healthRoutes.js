const express = require('express');
const router = express.Router();
const { isSmtpConfigured } = require('../config/mailer');

// GET /api/health - Server health & system status
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Monotonic Vector Technology REST API',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    smtp: {
      configured: isSmtpConfigured(),
      mode: isSmtpConfigured() ? 'live_smtp' : 'dev_simulator'
    }
  });
});

module.exports = router;
