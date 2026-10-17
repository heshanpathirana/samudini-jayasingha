/**
 * ==============================================================================
 * MAIN SCRIPT ENTRY POINT
 * ==============================================================================
 * Connects data, UI modules, animations, and interactive event handlers.
 * ==============================================================================
 */

import { portfolioData } from '../data/portfolio.js';
import { renderPortfolio } from './renderer.js';
import { initNavigation } from './navigation.js';
import { initModals } from './modal.js';
import { initParticles } from './particles.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all data dynamically from portfolio.js
  renderPortfolio(portfolioData);

  // 2. Initialize Navigation & Scrollspy
  initNavigation();

  // 3. Initialize Accessible Modals & Lightbox
  initModals(portfolioData);

  // 4. Initialize Molecular Particle Canvas
  initParticles('hero-canvas');

  // 5. Initialize Contact Form & Feedback
  initContact(portfolioData);

  // 6. Scroll Entrance Animation Observer
  initScrollAnimations();

  // 7. Back-to-Top Button Handler
  initBackToTop();
});

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
