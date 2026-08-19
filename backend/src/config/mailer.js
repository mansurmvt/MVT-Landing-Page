const nodemailer = require('nodemailer');

/**
 * Configure Nodemailer SMTP Transporter
 * Reads SMTP credentials strictly from environment variables.
 * If credentials are not configured (e.g. initial dev setup), it provides a graceful fallback logger
 * so local frontend testing works without hard crash while reporting status clearly.
 */

const isSmtpConfigured = () => {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_HOST !== 'smtp.example.com'
  );
};

let transporter = null;

if (isSmtpConfigured()) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Verify connection configuration
  transporter.verify((error) => {
    if (error) {
      console.warn('⚠️ [SMTP Warning] Transporter verification failed:', error.message);
    } else {
      console.log('✅ [SMTP Ready] Mail server connection established successfully.');
    }
  });
} else {
  console.log('ℹ️ [SMTP Dev Mode] Real SMTP credentials not provided in .env; email dispatch will log to console.');
}

/**
 * Send Contact Notification Email
 * @param {Object} data - Contact form data { name, email, projectType, message, timeline, budget }
 * @returns {Promise<Object>}
 */
const sendContactNotification = async (data) => {
  const recipient = process.env.INQUIRIES_RECIPIENT_EMAIL || 'inquiries@monotonicvector.io';
  const fromAddress = `"${process.env.SMTP_FROM_NAME || 'MVT Portal'}" <${process.env.SMTP_FROM_EMAIL || 'noreply@monotonicvector.io'}>`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #080f1e; color: #f8fafc; margin: 0; padding: 24px; }
        .card { background: #0f1a34; border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 28px; max-width: 600px; margin: 0 auto; box-shadow: 0 8px 30px rgba(0,0,0,0.5); }
        .header { border-bottom: 1px solid rgba(56, 189, 248, 0.2); padding-bottom: 16px; margin-bottom: 20px; }
        .brand { font-size: 20px; font-weight: 800; color: #00f0ff; letter-spacing: 0.5px; }
        .pill { display: inline-block; padding: 4px 12px; background: rgba(0, 240, 255, 0.1); border: 1px solid #00f0ff; border-radius: 9999px; color: #00f0ff; font-size: 12px; font-weight: bold; margin-top: 8px; }
        .field-label { font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700; letter-spacing: 1px; margin-top: 14px; margin-bottom: 4px; }
        .field-val { font-size: 15px; color: #ffffff; background: #080f1e; padding: 10px 14px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); }
        .message-box { font-size: 14px; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap; background: #080f1e; padding: 14px; border-radius: 8px; border-left: 3px solid #00f0ff; }
        .footer { margin-top: 24px; font-size: 12px; color: #64748b; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="brand">MONOTONIC VECTOR TECHNOLOGY</div>
          <div class="pill">⚡ NEW CLIENT PROJECT INQUIRY</div>
        </div>

        <div class="field-label">Client Name</div>
        <div class="field-val">${data.name}</div>

        <div class="field-label">Client Email</div>
        <div class="field-val"><a href="mailto:${data.email}" style="color: #38bdf8;">${data.email}</a></div>

        <div class="field-label">Target Architecture / Project Type</div>
        <div class="field-val">${data.projectType || 'General Invariant SaaS Platform'}</div>

        ${data.timeline ? `<div class="field-label">Target Delivery Cadence</div><div class="field-val">${data.timeline}</div>` : ''}

        <div class="field-label">Project Scope & Requirements</div>
        <div class="message-box">${data.message}</div>

        <div class="footer">
          Received via Monotonic Vector Technology Portal REST API at ${new Date().toUTCString()}
        </div>
      </div>
    </body>
    </html>
  `;

  if (transporter) {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: data.email,
      subject: `[MVT Inquiry] ${data.projectType || 'New Project'} - ${data.name}`,
      text: `New project inquiry from ${data.name} (${data.email}):\nProject: ${data.projectType}\nMessage: ${data.message}`,
      html: htmlContent
    });
    return { success: true, messageId: info.messageId, mode: 'smtp' };
  } else {
    // Development mode simulator
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📨 [DEV SMTP SIMULATOR] Email Dispatch Captured:');
    console.log(`From:    ${fromAddress}`);
    console.log(`To:      ${recipient}`);
    console.log(`ReplyTo: ${data.email}`);
    console.log(`Subject: [MVT Inquiry] ${data.projectType || 'New Project'} - ${data.name}`);
    console.log(`Body:    ${data.message}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    return { success: true, simulated: true, mode: 'dev_simulator' };
  }
};

module.exports = {
  sendContactNotification,
  isSmtpConfigured
};
