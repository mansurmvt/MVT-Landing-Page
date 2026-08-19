/**
 * API Client Module using Axios
 * Connects Frontend seamlessly to the Express REST API backend
 */

// Use relative API path or configured backend endpoint
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000/api'
  : '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * Submit Contact Inquiry to POST /api/contact
 * @param {Object} payload - { name, email, projectType, message, timeline, budget }
 * @returns {Promise<Object>}
 */
async function submitProjectInquiry(payload) {
  try {
    const response = await apiClient.post('/contact', payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || 'Failed to submit inquiry.');
    }
    throw new Error('Could not connect to MVT server. Please check your internet connection or reach out via WhatsApp/Telegram.');
  }
}

/**
 * Send Query to MVT AI Concierge POST /api/chat
 * @param {string} userMessage
 * @returns {Promise<Object>}
 */
async function sendChatMessage(userMessage) {
  try {
    const response = await apiClient.post('/chat', { message: userMessage });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || 'AI Assistant unavailable.');
    }
    throw new Error('Failed to connect to AI assistant. Please try again.');
  }
}

/**
 * Health check GET /api/health
 */
async function checkSystemHealth() {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    return { status: 'offline', error: error.message };
  }
}

// Expose globally for vanilla components
window.MvtApi = {
  submitProjectInquiry,
  sendChatMessage,
  checkSystemHealth
};
