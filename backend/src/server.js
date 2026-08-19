const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env if present
dotenv.config();

const { configureHelmet, configureCors } = require('./middleware/security');
const { generalLimiter } = require('./middleware/rateLimiter');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Route Handlers
const contactRoutes = require('./routes/contactRoutes');
const chatRoutes = require('./routes/chatRoutes');
const healthRoutes = require('./routes/healthRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middleware
app.use(configureHelmet());
app.use(configureCors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use('/api', generalLimiter);

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/health', healthRoutes);

// Serve Frontend Static Files (from ../frontend)
const frontendPath = path.join(__dirname, '../../frontend');
app.use(express.static(frontendPath));

// Fallback to index.html for single-page routing
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
    if (err) next();
  });
});

// 404 & Centralized Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`🚀 [MVT Server Running] Monotonic Vector Technology API`);
    console.log(`🌐 Server Port:     http://localhost:${PORT}`);
    console.log(`📡 Health Check:    http://localhost:${PORT}/api/health`);
    console.log(`🖥️ Frontend Served:  ${frontendPath}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  });
}

module.exports = app;
