/**
 * ==============================================================================
 * PORTFOLIO DATA RENDERER
 * ==============================================================================
 * Synchronizes and dynamically renders all data from `src/data/portfolio.js`
 * into the semantic DOM structures of the portfolio.
 * ==============================================================================
 */

export function renderPortfolio(data) {
  if (!data) return;

  // 1. PROFILE & HERO SECTION
  const heroNameEl = document.getElementById('hero-name');
  const heroTitleEl = document.getElementById('hero-title');
  const heroIntroEl = document.getElementById('hero-intro');
  const heroPhotoImg = document.getElementById('hero-profile-img');
  const brandNameEl = document.getElementById('brand-name');
  const pageTitleEl = document.querySelector('title');

  if (heroNameEl) heroNameEl.textContent = data.profile.fullName;
  if (heroTitleEl) heroTitleEl.textContent = data.profile.title;
  if (heroIntroEl) heroIntroEl.textContent = data.profile.heroIntro;
  if (brandNameEl) brandNameEl.textContent = data.profile.fullName;
  if (pageTitleEl) pageTitleEl.textContent = `${data.profile.fullName} | ${data.profile.title}`;

  if (heroPhotoImg) {
    heroPhotoImg.src = data.profile.photoUrl;
    heroPhotoImg.alt = data.profile.photoAlt || `${data.profile.fullName} Profile Photo`;
  }

  // 2. ABOUT ME SECTION
  const aboutBioLead = document.getElementById('about-bio-lead');
  const objectiveTitle = document.getElementById('objective-title');
  const objectiveFocus = document.getElementById('objective-focus');
  const objectiveDesc = document.getElementById('objective-desc');
  const aboutHighlightsContainer = document.getElementById('about-highlights-grid');

  if (aboutBioLead) aboutBioLead.textContent = data.about.biography;
  if (objectiveTitle) objectiveTitle.textContent = data.about.careerObjective.title;
  if (objectiveFocus) objectiveFocus.textContent = data.about.careerObjective.focus;
  if (objectiveDesc) objectiveDesc.textContent = data.about.careerObjective.description;

  if (aboutHighlightsContainer && data.about.keyHighlights) {
    aboutHighlightsContainer.innerHTML = data.about.keyHighlights.map(h => `
      <div class="highlight-card">
        <div class="highlight-icon-box">
          ${getIconSvg(h.icon)}
        </div>
        <div>
          <div class="highlight-label">${escapeHtml(h.label)}</div>
          <div class="highlight-value">${escapeHtml(h.value)}</div>
        </div>
      </div>
    `).join('');
  }

  // 3. EDUCATION TIMELINE
  const educationTimeline = document.getElementById('education-timeline');
  if (educationTimeline && data.education) {
    educationTimeline.innerHTML = data.education.map(edu => `
      <div class="timeline-item ${edu.current ? 'current' : ''}">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-inst">${escapeHtml(edu.institution)}</h3>
              <div class="timeline-degree">${escapeHtml(edu.degree)}</div>
            </div>
            <span class="timeline-period-badge">${escapeHtml(edu.period)}</span>
          </div>
          ${edu.results ? `<div class="timeline-results">${escapeHtml(edu.results)}</div>` : ''}
          ${edu.expectedGraduation ? `<div style="font-size: 0.85rem; font-weight: 600; color: var(--color-teal-700); margin-bottom: 0.75rem;">${escapeHtml(edu.expectedGraduation)}</div>` : ''}
          <ul class="timeline-details-list">
            ${edu.details.map(d => `<li>${escapeHtml(d)}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // 4. LABORATORY & TECHNICAL SKILLS
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid && data.skills) {
    skillsGrid.innerHTML = data.skills.map(skill => `
      <div class="skill-card">
        <div class="skill-card-header">
          <div class="skill-icon-wrapper">
            ${getIconSvg(skill.icon)}
          </div>
          <div class="skill-card-titles">
            <span class="skill-category-tag">${escapeHtml(skill.category)}</span>
            <h3 class="skill-title">${escapeHtml(skill.title)}</h3>
          </div>
        </div>
        <p class="skill-desc">${escapeHtml(skill.description)}</p>
        <div class="tag-cloud">
          ${skill.tags.map(t => `<span class="tag-item">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // 5. ACADEMIC PROJECTS
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid && data.projects) {
    projectsGrid.innerHTML = data.projects.map(proj => `
      <div class="project-card">
        <div class="project-image-box">
          <img src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.imageAlt)}" class="project-img" loading="lazy" />
          <div class="project-badge-overlay">
            <span class="badge badge-${proj.badgeColor || 'teal'}">${escapeHtml(proj.subject)}</span>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          <p class="project-desc">${escapeHtml(proj.shortDescription)}</p>
          <div class="project-skills-used">
            ${proj.skillsUsed.map(s => `<span class="badge badge-teal">${escapeHtml(s)}</span>`).join('')}
          </div>
          <div class="project-action-bar">
            <button class="btn btn-outline-teal" data-project-id="${proj.id}" style="padding: 0.5rem 1rem; font-size: 0.85rem;" aria-haspopup="dialog">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View Practical Details
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 6. LABORATORY GALLERY
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid && data.laboratoryGallery) {
    galleryGrid.innerHTML = data.laboratoryGallery.map(item => `
      <div class="gallery-item" data-gallery-id="${item.id}" role="button" tabindex="0" aria-label="View photo: ${escapeHtml(item.title)}">
        <div class="gallery-thumb-wrapper">
          <div class="gallery-overlay-badge">
            <span class="badge ${item.isStudentPhoto ? 'badge-mint' : 'badge-navy'}">
              ${escapeHtml(item.badgeText || (item.isStudentPhoto ? 'Student Practical Photo' : 'Illustrative Scientific Visual'))}
            </span>
          </div>
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" class="gallery-thumb" loading="lazy" />
          <div class="gallery-hover-indicator">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
        <div class="gallery-info-bar">
          <div class="gallery-item-title">${escapeHtml(item.title)}</div>
          <div class="gallery-item-category">${escapeHtml(item.category)}</div>
        </div>
      </div>
    `).join('');
  }

  // 7. INTERNSHIP INTERESTS
  const internshipStatement = document.getElementById('internship-statement');
  const internshipCardsGrid = document.getElementById('internship-cards-grid');

  if (internshipStatement && data.internshipInterests) {
    internshipStatement.textContent = `"${data.internshipInterests.statement}"`;
  }

  if (internshipCardsGrid && data.internshipInterests.targetAreas) {
    internshipCardsGrid.innerHTML = data.internshipInterests.targetAreas.map(area => `
      <div class="internship-card">
        <div class="internship-card-icon">
          ${getIconSvg(area.icon)}
        </div>
        <h4 class="internship-card-title">${escapeHtml(area.title)}</h4>
        <p class="internship-card-desc">${escapeHtml(area.description)}</p>
      </div>
    `).join('');
  }

  // 8. CV DOWNLOAD SECTION
  const cvDownloadLink = document.getElementById('cv-download-btn');
  const cvPreviewLink = document.getElementById('cv-preview-btn');
  const cvNavDownloadLink = document.getElementById('cv-nav-btn');
  const cvMobileDownloadLink = document.getElementById('cv-mobile-btn');
  const cvHeroDownloadLink = document.getElementById('cv-hero-btn');

  const cvPath = data.cv.filePath || 'assets/docs/CV_Microbiology_Undergraduate.pdf';
  const cvFilename = data.cv.fileName || 'CV_Microbiology_Undergraduate.pdf';

  [cvDownloadLink, cvNavDownloadLink, cvMobileDownloadLink, cvHeroDownloadLink].forEach(btn => {
    if (btn) {
      btn.href = cvPath;
      btn.setAttribute('download', cvFilename);
    }
  });

  if (cvPreviewLink) {
    cvPreviewLink.href = cvPath;
    cvPreviewLink.target = '_blank';
    cvPreviewLink.rel = 'noopener noreferrer';
  }

  // 9. CONTACT DETAILS
  const emailText = document.getElementById('contact-email-text');
  const emailLink = document.getElementById('contact-email-link');
  const phoneText = document.getElementById('contact-phone-text');
  const phoneLink = document.getElementById('contact-phone-link');
  const locationText = document.getElementById('contact-location-text');
  const linkedinLink = document.getElementById('contact-linkedin-link');
  const linkedinText = document.getElementById('contact-linkedin-text');

  if (emailText) emailText.textContent = data.profile.email;
  if (emailLink) emailLink.href = `mailto:${data.profile.email}`;
  if (phoneText) phoneText.textContent = data.profile.phone;
  if (phoneLink) phoneLink.href = `tel:${data.profile.phone}`;
  if (locationText) locationText.textContent = data.profile.location;
  if (linkedinLink) {
    linkedinLink.href = data.profile.linkedin.startsWith('http') ? data.profile.linkedin : `https://${data.profile.linkedin}`;
  }
  if (linkedinText) linkedinText.textContent = data.profile.linkedin;

  // 10. FOOTER INFO
  const footerYearEl = document.getElementById('footer-year');
  const footerNameEl = document.getElementById('footer-name');
  if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();
  if (footerNameEl) footerNameEl.textContent = data.profile.fullName;
}

// Icon helper returning sharp, clean SVGs
function getIconSvg(name) {
  switch (name) {
    case 'microscope':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 18h8"></path>
          <path d="M3 22h18"></path>
          <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
          <path d="M9 14h2"></path>
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
        </svg>
      `;
    case 'flask':
    case 'flask-conical':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 2v7.31L4.62 19.3A2 2 0 0 0 6.37 22h11.26a2 2 0 0 0 1.75-2.7L14 9.31V2"></path>
          <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
          <line x1="7" y1="14" x2="17" y2="14"></line>
        </svg>
      `;
    case 'eye':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      `;
    case 'check-circle':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `;
    case 'clipboard-list':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="M12 11h4"></path>
          <path d="M12 16h4"></path>
          <path d="M8 11h.01"></path>
          <path d="M8 16h.01"></path>
        </svg>
      `;
    case 'table':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
        </svg>
      `;
    case 'academic':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      `;
    case 'calendar':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      `;
    case 'lab':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 3h6v3H9zM19 19v-4.5a3.5 3.5 0 0 0-3.5-3.5h-7A3.5 3.5 0 0 0 5 14.5V19"></path>
          <circle cx="12" cy="16" r="1.5"></circle>
        </svg>
      `;
    case 'bacteria':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1"></path>
        </svg>
      `;
    case 'atom':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M12 2a10 5 0 0 0 0 20 10 5 0 0 0 0-20"></path>
          <path d="M2 12a5 10 0 0 0 20 0 5 10 0 0 0-20 0"></path>
        </svg>
      `;
    default:
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      `;
  }
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
