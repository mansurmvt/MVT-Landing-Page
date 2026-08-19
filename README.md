# Monotonic Vector Technology (MVT)

> **Enterprise SaaS & Vector Intelligence Platform**  
> Built with mathematical non-decreasing reliability, zero-regression guarantees, and first-principles software architecture.

---

## 📁 Monorepo Structure

```
MVT Landing Page/
├── frontend/                     # Complete Client Application (HTML5, Modern CSS, Modular JS)
│   ├── assets/
│   │   └── logo.svg              # Official MVT transparent vector logo
│   ├── css/
│   │   ├── index.css             # Base design tokens, dark blue-grey palette, typography
│   │   ├── animations.css        # Traveling border beam, glow pulses, path animations
│   │   ├── components.css        # 3D interactive flip cards, workflow flows, modal styles
│   │   └── footer.css            # Clean, clutter-free footer styling
│   ├── js/
│   │   ├── api.js                # Axios HTTP client configured for REST API communication
│   │   ├── hero-graph.js         # Section 01: Positive monotonic trajectory graph
│   │   ├── story-flow.js         # Section 02: Connected journey (Origin -> Growth)
│   │   ├── workflow-flow.js      # Section 03: Capability workflow pipeline
│   │   ├── services-cards.js     # Section 04: Interactive 3D flip card deck controller
│   │   ├── capability-engine.js  # Section 05: Tech stack proof & execution inspector
│   │   ├── growth-progression.js # Section 06: Connected progression telemetry graph
│   │   ├── contact-experience.js # Section 08: Interactive project selector & Axios form
│   │   ├── chatbot-widget.js     # Section 07: Floating Cat AI Concierge Assistant
│   │   └── app.js                # Global navigation, mobile menu & direct contacts
│   ├── index.html                # Master HTML document (Phases 01 to 10)
│   └── package.json
│
├── backend/                      # Node.js + Express REST API Server
│   ├── src/
│   │   ├── config/
│   │   │   └── mailer.js         # Nodemailer SMTP transporter & email templates
│   │   ├── controllers/
│   │   │   ├── contactController.js # Input sanitization, validation & email dispatch
│   │   │   └── chatController.js    # AI Concierge conversational engine & routing
│   │   ├── middleware/
│   │   │   ├── rateLimiter.js    # Rate limiting for abuse protection
│   │   │   ├── security.js       # Helmet headers, CORS policies, XSS sanitation
│   │   │   └── errorHandler.js   # Centralized error handler
│   │   ├── routes/
│   │   │   ├── contactRoutes.js  # POST /api/contact
│   │   │   ├── chatRoutes.js     # POST /api/chat
│   │   │   └── healthRoutes.js   # GET /api/health
│   │   └── server.js             # Express entry point & static file server
│   ├── .env.example              # Secrets & SMTP configuration template
│   └── package.json
│
├── .gitignore                    # Excludes node_modules, .env, and logs
├── .gitattributes                # Git line-ending configuration
├── package.json                  # Root monorepo orchestration scripts
└── README.md                     # Project documentation
```

---

## 🚀 10-Phase Blueprint Flow (PDF Specification)

| Phase / Section | Feature | Description |
| :--- | :--- | :--- |
| **Phase 01 / Section 01** | **Opening / Hero** | Heading: *"Every Step / Step Ahead"*. Translucent navbar with traveling border light beam, transparent SVG logo, and interactive monotonic trajectory graph. |
| **Phase 02 / Section 02** | **Our Story / Foundation** | Connected physical journey: $\text{Origin} \rightarrow \text{Problem} \rightarrow \text{Idea} \rightarrow \text{Building} \rightarrow \text{Deployment} \rightarrow \text{Growth}$. |
| **Phase 03 / Section 03** | **How We Work (Workflow)** | Capability pipeline: $\text{Client Need} \rightarrow \text{Understand} \rightarrow \text{Design} \rightarrow \text{Build} \rightarrow \text{Test} \rightarrow \text{Deploy} \rightarrow \text{Grow/Improve}$. |
| **Phase 04 / Section 04** | **What We Build (Services)** | Single horizontal **3D Interactive Flip Card Deck** (*E-Commerce, Web Apps, Vector SaaS, Brand Portfolios*). |
| **Phase 05 / Section 05** | **Proof of Capability** | Concrete execution breakdown: $\text{What We Build} \rightarrow \text{How We Build It} \rightarrow \text{Tech Stack} \rightarrow \text{How We Deploy} \rightarrow \text{How We Secure It}$. |
| **Phase 06 / Section 06** | **Growth / Progression** | Connected telemetry graph visualizer: $\text{Build} \rightarrow \text{Deploy} \rightarrow \text{Monitor} \rightarrow \text{Optimize} \rightarrow \text{Grow}$. |
| **Phase 07 (Floating)** | **AI Concierge Assistant** | Floating Cat assistant with live status indicator, prompt chips, and connection to `POST /api/chat`. |
| **Phase 08 / Section 08** | **Unique Contact Experience** | Interactive project builder (*"What are you looking to build?"*), timeline, and Axios REST API submission. |
| **Phase 09** | **Direct Contact Channels** | Verified direct links for Phone, WhatsApp, and Telegram. |
| **Phase 10 / Section 10** | **Clean Footer** | Brand tagline, Navigation, Services, Direct Contacts, Social Links, and Copyright. |

---

## 🛠️ Getting Started

### 1. View Frontend Directly
Open `frontend/index.html` in any modern web browser or run a live server:
```bash
# Using Python Live Server
cd frontend
python -m http.server 3000
```
Or open `http://localhost:3000` in your browser.

---

### 2. Run Full-Stack Backend Server (Node.js + Express)
The Express backend serves both the REST APIs and the static frontend simultaneously.

```bash
# 1. Install backend dependencies
cd backend
npm install

# 2. Configure environment variables (optional for SMTP)
cp .env.example .env

# 3. Start the server
npm run dev
```

* **Server URL**: `http://localhost:5000`
* **Health Check**: `http://localhost:5000/api/health`
* **Frontend Webpage**: `http://localhost:5000/`

---

## 📡 REST API Endpoints

### 1. Submit Project Inquiry
* **Endpoint**: `POST /api/contact`
* **Rate Limit**: 5 submissions per 15 minutes per IP
* **Request Body**:
```json
{
  "name": "Sarah Connor",
  "email": "s.connor@enterprise.io",
  "projectType": "Vector & AI SaaS Platform",
  "timeline": "2-4 Weeks MVP",
  "message": "We need a high-throughput vector search pipeline integrated with PostgreSQL and Redis."
}
```
* **Response (200 OK)**:
```json
{
  "success": true,
  "message": "Your project inquiry has been successfully received. A Senior Solutions Architect will review your technical requirements and respond within 4 hours.",
  "inquiryId": "MVT-LX92P1Q"
}
```

### 2. AI Concierge Query
* **Endpoint**: `POST /api/chat`
* **Rate Limit**: 30 requests per minute per IP
* **Request Body**:
```json
{
  "message": "Tell me about your tech stack"
}
```

### 3. System Health Check
* **Endpoint**: `GET /api/health`
* **Response (200 OK)**:
```json
{
  "status": "online",
  "service": "Monotonic Vector Technology REST API",
  "uptimeSeconds": 142
}
```

---

## 🔒 Security Specifications

* **Helmet**: Secure HTTP response headers against clickjacking, sniffing, and XSS.
* **CORS**: Domain whitelisting for authorized frontend origins.
* **Rate Limiting**: `express-rate-limit` prevents automated bot spam and brute-force abuse.
* **Input Sanitization**: Cleans malicious scripts and dangerous tags prior to processing.
* **Protected Secrets**: SMTP credentials and port configs remain strictly inside `.env` on the server and are never exposed to client-side code.

---

## 📄 License
© 2026 Monotonic Vector Technologies. All rights reserved.
