/**
 * ==============================================================================
 * CONTACT FORM & INTERACTIVE FEEDBACK MODULE
 * ==============================================================================
 * Features robust client-side validation, helpful error messages, toast feedback,
 * and a direct mailto client fallback so messages are never falsely claimed to
 * have been sent to a nonexistent backend.
 * ==============================================================================
 */

export function initContact(portfolioData) {
  const form = document.getElementById('contact-form');
  const directMailBtn = document.getElementById('direct-mailto-btn');
  const toastContainer = document.getElementById('toast-container');

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  // Setup direct email link
  const targetEmail = portfolioData.profile.email || '[HER EMAIL]';
  if (directMailBtn) {
    directMailBtn.href = `mailto:${targetEmail}?subject=Microbiology%20Internship%20Inquiry`;
  }

  // Toast notification helper
  function showToast(title, message, isSuccess = true) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${isSuccess 
            ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>' 
            : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
        </svg>
      </div>
      <div class="toast-content">
        <div class="toast-title">${escapeHtml(title)}</div>
        <div class="toast-message">${escapeHtml(message)}</div>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 6000);
  }

  // Clear errors on input
  [
    { input: nameInput, error: nameError },
    { input: emailInput, error: emailError },
    { input: subjectInput, error: subjectError },
    { input: messageInput, error: messageError }
  ].forEach(item => {
    if (item.input) {
      item.input.addEventListener('input', () => {
        item.input.classList.remove('error');
        if (item.error) {
          item.error.classList.remove('visible');
          item.error.textContent = '';
        }
      });
    }
  });

  // Form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // 1. Validate Name
      const nameVal = nameInput.value.trim();
      if (!nameVal || nameVal.length < 2) {
        isValid = false;
        nameInput.classList.add('error');
        nameError.textContent = 'Please enter your name (at least 2 characters).';
        nameError.classList.add('visible');
      }

      // 2. Validate Email
      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        isValid = false;
        emailInput.classList.add('error');
        emailError.textContent = 'Please enter a valid email address.';
        emailError.classList.add('visible');
      }

      // 3. Validate Subject
      const subjectVal = subjectInput.value.trim();
      if (!subjectVal || subjectVal.length < 3) {
        isValid = false;
        subjectInput.classList.add('error');
        subjectError.textContent = 'Please enter a subject (at least 3 characters).';
        subjectError.classList.add('visible');
      }

      // 4. Validate Message
      const messageVal = messageInput.value.trim();
      if (!messageVal || messageVal.length < 10) {
        isValid = false;
        messageInput.classList.add('error');
        messageError.textContent = 'Please enter a message (at least 10 characters).';
        messageError.classList.add('visible');
      }

      if (!isValid) {
        showToast('Form Incomplete', 'Please check the highlighted fields above.', false);
        return;
      }

      // Honest handling of frontend-only form
      const encodedSubject = encodeURIComponent(`[Internship Portfolio] ${subjectVal}`);
      const encodedBody = encodeURIComponent(`Hello,\n\nMy name is ${nameVal} (${emailVal}).\n\n${messageVal}\n\nBest regards,\n${nameVal}`);
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

      showToast(
        'Frontend Demonstration Notice',
        `This is a static portfolio demonstration. Opening your email client to send this message directly to ${targetEmail}...`,
        true
      );

      // Open email client with prefilled fields after short delay
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1000);
    });
  }

  function escapeHtml(text) {
    if (!text) return '';
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
  }
}
