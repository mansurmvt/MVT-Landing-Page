const { sanitizeInput } = require('../middleware/security');

/**
 * Knowledge Base & AI Assistant Response Engine
 * Provides intelligent, relevant answers regarding MVT's architecture, services, timeline, and direct navigation links.
 */
const knowledgeBase = [
  {
    keywords: ['monotonic', 'axiom', 'principle', 'why monotonic', 'decrease'],
    response: 'Monotonic Vector Technology is built on the mathematical principle that system capability and performance must be **non-decreasing**. As your scale expands, our invariant architectures guarantee sub-millisecond query execution without regressions or software decay.',
    suggestedAction: { label: 'Explore The Principle', link: '#why-monotonic' }
  },
  {
    keywords: ['services', 'what we build', 'ecommerce', 'e-commerce', 'web app', 'portfolio', 'custom'],
    response: 'We build high-performance **E-Commerce Platforms**, **Enterprise Web Applications**, **Vector & AI Search Systems**, **High-Conversion Portfolios**, and **Mission-Critical Business Engines**—all with deterministic zero-regression architecture.',
    suggestedAction: { label: 'View All Services', link: '#services' }
  },
  {
    keywords: ['timeline', 'fast', 'mvp', 'cadence', 'how long', 'sprint'],
    response: 'We deliver production-ready MVPs within **2 to 4 weeks** through bi-weekly continuous sprints. Sprints start with mathematical specification and end with automated chaos testing and zero-downtime deployment.',
    suggestedAction: { label: 'View Engineering Cycle', link: '#engineering-cycle' }
  },
  {
    keywords: ['tech stack', 'technology', 'technologies', 'node', 'react', 'express', 'vector'],
    response: 'Our stack utilizes **Node.js**, **Express.js**, **React**, **Vector Databases (Pinecone/Milvus/Qdrant)**, **PostgreSQL/Redis**, and automated CI/CD pipelines with Blue/Green zero-downtime rollouts.',
    suggestedAction: { label: 'View Tech Stack Proof', link: '#capability' }
  },
  {
    keywords: ['support', 'contact', 'hire', 'start', 'quote', 'project', 'pricing'],
    response: 'Our Solutions Architects meet you mid-journey, not just at the end. You can submit your project requirements directly through our interactive project builder or connect instantly via WhatsApp or Telegram.',
    suggestedAction: { label: 'Start a Project', link: '#contact' }
  }
];

/**
 * Handle AI Chat Messages
 * POST /api/chat
 */
const handleChatMessage = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a non-empty message string.'
      });
    }

    const cleanQuery = sanitizeInput(message).toLowerCase();

    // Match query against knowledge base
    let matchedEntry = null;
    let highestScore = 0;

    for (const entry of knowledgeBase) {
      let score = 0;
      for (const kw of entry.keywords) {
        if (cleanQuery.includes(kw)) {
          score += 1;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        matchedEntry = entry;
      }
    }

    let reply = matchedEntry ? matchedEntry.response : null;
    let action = matchedEntry ? matchedEntry.suggestedAction : null;

    if (!reply) {
      reply = `Thank you for your question regarding "${cleanQuery.slice(0, 50)}...". Our engineering team specializes in custom SaaS, vector database pipelines, and full-stack cloud ecosystems. Would you like to schedule an architecture discovery discussion or explore our service capabilities?`;
      action = { label: 'Initiate Architecture Discussion', link: '#contact' };
    }

    return res.status(200).json({
      success: true,
      reply,
      action,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in handleChatMessage controller:', error);
    return res.status(500).json({
      success: false,
      error: 'Chat engine encountered an issue processing your query. Please try again.'
    });
  }
};

module.exports = {
  handleChatMessage
};
