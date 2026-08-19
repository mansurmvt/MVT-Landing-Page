/**
 * SECTION 07 / FLOATING FEATURE: AI CONCIERGE CHATBOT
 * High-Tech Cat Assistant connected to Axios REST API (POST /api/chat)
 */

(function () {
  const catBtn = document.getElementById('catSupportBtn');
  const chatModal = document.getElementById('catChatModal');
  const closeBtn = document.getElementById('closeCatChatModal');
  const chatInput = document.getElementById('chatUserInput');
  const sendBtn = document.getElementById('chatSendBtn');
  const messagesList = document.getElementById('chatMessagesList');

  if (!catBtn || !chatModal) return;

  function toggleModal() {
    chatModal.classList.toggle('open');
    if (chatModal.classList.contains('open') && chatInput) {
      chatInput.focus();
    }
  }

  catBtn.addEventListener('click', toggleModal);
  if (closeBtn) closeBtn.addEventListener('click', toggleModal);

  function appendMessage(sender, text, action = null) {
    if (!messagesList) return;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;

    if (action && action.label && action.link) {
      const actionLink = document.createElement('a');
      actionLink.href = action.link;
      actionLink.className = 'btn btn-secondary btn-sm';
      actionLink.style.marginTop = '8px';
      actionLink.style.display = 'inline-block';
      actionLink.textContent = `→ ${action.label}`;
      actionLink.addEventListener('click', () => {
        chatModal.classList.remove('open');
      });
      bubble.appendChild(document.createElement('br'));
      bubble.appendChild(actionLink);
    }

    messagesList.appendChild(bubble);
    messagesList.scrollTop = messagesList.scrollHeight;
  }

  async function handleSend() {
    if (!chatInput) return;
    const query = chatInput.value.trim();
    if (!query) return;

    appendMessage('user', query);
    chatInput.value = '';

    // Typing indicator
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble bot';
    typingBubble.innerHTML = '<em>Analyzing query...</em>';
    messagesList.appendChild(typingBubble);
    messagesList.scrollTop = messagesList.scrollHeight;

    try {
      const res = await window.MvtApi.sendChatMessage(query);
      typingBubble.remove();
      appendMessage('bot', res.reply, res.action);
    } catch (err) {
      typingBubble.remove();
      appendMessage('bot', `Hello! How can our engineering team assist with your SaaS architecture or vector search implementation today?`);
    }
  }

  if (sendBtn) sendBtn.addEventListener('click', handleSend);
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });
  }
})();
