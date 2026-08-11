/**
 * FLOATING CAT SUPPORT ASSISTANT & AI CONVERSATION ENGINE
 * Features:
 * 1. Bottom-right Cat trigger button
 * 2. "Start a Conversation" interactive Client-to-AI chat
 * 3. "Need Support?" direct channels (WhatsApp & Telegram)
 */

(function () {
  const catBtn = document.getElementById('catSupportBtn');
  const chatModal = document.getElementById('catChatModal');
  const closeModalBtn = document.getElementById('closeCatChatModal');
  const needSupportBtn = document.getElementById('needSupportActionBtn');
  const channelsDrawer = document.getElementById('supportChannelsDrawer');
  
  // Interactive Chat Elements
  const startConversationBtn = document.getElementById('startConversationBtn');
  const aiChatInterface = document.getElementById('aiChatInterface');
  const chatMessagesList = document.getElementById('chatMessagesList');
  const chatInput = document.getElementById('chatUserInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatChips = document.querySelectorAll('.chat-prompt-chip');

  if (!catBtn || !chatModal) return;

  function toggleModal() {
    chatModal.classList.toggle('open');
  }

  catBtn.addEventListener('click', toggleModal);

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      chatModal.classList.remove('open');
    });
  }

  // 1. Toggle Channels (WhatsApp / Telegram)
  if (needSupportBtn && channelsDrawer) {
    needSupportBtn.addEventListener('click', () => {
      channelsDrawer.classList.toggle('active');
      if (channelsDrawer.classList.contains('active')) {
        needSupportBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
          Select Your Priority Channel
        `;
      } else {
        needSupportBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          Need Support?
        `;
      }
    });
  }

  // 2. "Start a Conversation" Client <-> AI Mode
  if (startConversationBtn && aiChatInterface) {
    startConversationBtn.addEventListener('click', () => {
      aiChatInterface.classList.toggle('active');
      if (aiChatInterface.classList.contains('active')) {
        startConversationBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          End Conversation
        `;
        if (chatInput) chatInput.focus();
        scrollToBottom();
      } else {
        startConversationBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          Start a Conversation
        `;
      }
    });
  }

  function scrollToBottom() {
    if (chatMessagesList) {
      chatMessagesList.scrollTop = chatMessagesList.scrollHeight;
    }
  }

  function appendMessage(sender, text) {
    if (!chatMessagesList) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user' ? 'chat-msg-user' : 'chat-msg-ai';

    if (sender === 'user') {
      msgDiv.innerHTML = `<div class="user-bubble-text">${escapeHtml(text)}</div>`;
    } else {
      msgDiv.innerHTML = `
        <div class="ai-avatar-mini">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2">
            <path d="M12 5c-4.4 0-8 3.6-8 8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </div>
        <div class="ai-bubble-text">${text}</div>
      `;
    }

    chatMessagesList.appendChild(msgDiv);
    scrollToBottom();
  }

  function escapeHtml(string) {
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getAiResponse(userText) {
    const lower = userText.toLowerCase();

    if (lower.includes('monotonic') || lower.includes('speciality') || lower.includes('why')) {
      return `<strong>Monotonic Architecture</strong> means your system's performance and value strictly never decrease. Under exponential traffic and data growth, our vector-indexed databases and invariant contracts ensure deterministic, zero-regression SLAs.`;
    } else if (lower.includes('vector') || lower.includes('ai') || lower.includes('search')) {
      return `We implement high-throughput multi-modal vector search, semantic embeddings, and real-time classification engines capable of sub-15ms lookups over billions of dimensions.`;
    } else if (lower.includes('price') || lower.includes('cost') || lower.includes('timeline') || lower.includes('time')) {
      return `Our typical engineering sprints run on rapid 2-week bi-directional cycles, with MVP architecture deployed within 4–6 weeks. Fill out our contact form or connect via WhatsApp for an immediate feasibility proposal!`;
    } else if (lower.includes('support') || lower.includes('whatsapp') || lower.includes('telegram')) {
      return `You can connect with a Lead Architect right now on WhatsApp or Telegram using the <strong>"Need Support?"</strong> button above!`;
    } else {
      return `Thank you for reaching out! At <strong>Monotonic Vector Technology</strong>, we engineer scalable SaaS platforms and intelligent systems built from first principles. Would you like to start a project or schedule an architecture deep-dive?`;
    }
  }

  function handleSendMessage() {
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    chatInput.value = '';

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg-ai typing-indicator';
    typingDiv.id = 'aiTypingBubble';
    typingDiv.innerHTML = `
      <div class="ai-avatar-mini">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2">
          <path d="M12 5c-4.4 0-8 3.6-8 8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </div>
      <div class="ai-bubble-text" style="color: var(--accent-cyan); font-style: italic;">
        MVT AI is calculating response...
      </div>
    `;
    chatMessagesList.appendChild(typingDiv);
    scrollToBottom();

    setTimeout(() => {
      const typingEl = document.getElementById('aiTypingBubble');
      if (typingEl) typingEl.remove();

      const aiReply = getAiResponse(text);
      appendMessage('ai', aiReply);
    }, 700);
  }

  if (chatSendBtn) {
    chatSendBtn.addEventListener('click', handleSendMessage);
  }

  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    });
  }

  // Quick prompt chips
  chatChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      if (query && chatInput) {
        chatInput.value = query;
        handleSendMessage();
      }
    });
  });

  // Close modal when clicking outside
  document.addEventListener('click', (e) => {
    if (!catBtn.contains(e.target) && !chatModal.contains(e.target) && chatModal.classList.contains('open')) {
      chatModal.classList.remove('open');
    }
  });
})();
