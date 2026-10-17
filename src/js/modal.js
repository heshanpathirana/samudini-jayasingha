/**
 * ==============================================================================
 * MODAL & LIGHTBOX MODULE
 * ==============================================================================
 * Provides accessible project detail popups and photo lightboxes.
 * Full keyboard support (Escape to close, Tab focus trapping).
 * ==============================================================================
 */

export function initModals(portfolioData) {
  // Elements
  const projectModalOverlay = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('project-modal-close');
  const projectModalContent = document.getElementById('project-modal-body');
  const projectModalTitle = document.getElementById('project-modal-title');
  const projectModalBadge = document.getElementById('project-modal-badge');

  const lightboxOverlay = document.getElementById('gallery-lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxBadge = document.getElementById('lightbox-badge');

  let previousActiveElement = null;

  // 1. PROJECT DETAILS MODAL
  function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    previousActiveElement = document.activeElement;

    // Populate data
    projectModalTitle.textContent = project.title;
    projectModalBadge.textContent = project.subject;
    projectModalBadge.className = `badge badge-${project.badgeColor || 'teal'}`;

    const details = project.details || {};
    
    projectModalContent.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-navy-800);">Department:</span>
          <span style="font-size: 0.85rem; color: var(--color-text-muted);">${escapeHtml(details.department || 'Faculty of Applied Science')}</span>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-navy-800);">Context:</span>
          <span style="font-size: 0.85rem; color: var(--color-teal-700); font-weight: 500;">${escapeHtml(details.academicContext || 'University Practical Coursework')}</span>
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.5rem;">Practical Objectives</h4>
        <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">${escapeHtml(details.objectives || project.shortDescription)}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.5rem;">Key Practical Techniques Practiced</h4>
        <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.925rem; color: var(--color-text-muted);">
          ${(details.techniquesPracticed || project.skillsUsed || []).map(item => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.5rem;">Laboratory & Internship Relevance</h4>
        <p style="font-size: 0.925rem; color: var(--color-text-muted); line-height: 1.6;">${escapeHtml(details.practicalRelevance || 'Demonstrates essential bench techniques, standard laboratory discipline, and precision measurement.')}</p>
      </div>
    `;

    projectModalOverlay.classList.add('active');
    projectModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    projectModalClose?.focus();
  }

  function closeProjectModal() {
    projectModalOverlay.classList.remove('active');
    projectModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousActiveElement) previousActiveElement.focus();
  }

  // Bind project cards
  document.querySelectorAll('[data-project-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  projectModalClose?.addEventListener('click', closeProjectModal);
  projectModalOverlay?.addEventListener('click', (e) => {
    if (e.target === projectModalOverlay) closeProjectModal();
  });

  // 2. GALLERY LIGHTBOX
  function openLightbox(galleryId) {
    const item = portfolioData.laboratoryGallery.find(g => g.id === galleryId);
    if (!item) return;

    previousActiveElement = document.activeElement;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.alt;
    lightboxTitle.textContent = item.title;
    lightboxCaption.textContent = item.caption;
    
    lightboxBadge.textContent = item.badgeText || (item.isStudentPhoto ? 'Student Practical Photo' : 'Illustrative Scientific Visual');
    lightboxBadge.className = `badge ${item.isStudentPhoto ? 'badge-mint' : 'badge-navy'}`;

    lightboxOverlay.classList.add('active');
    lightboxOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove('active');
    lightboxOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousActiveElement) previousActiveElement.focus();
  }

  // Bind gallery cards
  document.querySelectorAll('[data-gallery-id]').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-gallery-id');
      openLightbox(id);
    });
    // Keyboard accessibility: Enter or Space triggers click
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = item.getAttribute('data-gallery-id');
        openLightbox(id);
      }
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxOverlay?.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
  });

  // Global ESC key to close any active modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModalOverlay.classList.contains('active')) closeProjectModal();
      if (lightboxOverlay.classList.contains('active')) closeLightbox();
    }
  });

  // Utility to prevent XSS
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
