const { sendContactNotification } = require('../config/mailer');
const { sanitizeInput } = require('../middleware/security');

/**
 * Handle Contact Form Submission
 * POST /api/contact
 */
const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, projectType, message, timeline, budget } = req.body;

    // Validation checks
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your full name.'
      });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid work email address.'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        error: 'Please describe your project scope or architectural requirements (at least 5 characters).'
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      projectType: sanitizeInput(projectType || 'General Invariant SaaS Platform'),
      timeline: sanitizeInput(timeline || 'Standard Iteration'),
      budget: sanitizeInput(budget || 'Enterprise / Custom'),
      message: sanitizeInput(message)
    };

    // Dispatch notification via Nodemailer
    const dispatchResult = await sendContactNotification(sanitizedData);

    return res.status(200).json({
      success: true,
      message: 'Your project inquiry has been successfully received. A Senior Solutions Architect will review your technical requirements and respond within 4 hours.',
      inquiryId: `MVT-${Date.now().toString(36).toUpperCase()}`,
      dispatched: dispatchResult
    });

  } catch (error) {
    console.error('Error in submitContactForm controller:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send inquiry due to mail server communication error. Please try again or reach us directly via WhatsApp / Telegram.'
    });
  }
};

module.exports = {
  submitContactForm
};
