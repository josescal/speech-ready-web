/**
 * SpeechReady Web - Corporate Minimalist Footer Component
 * Professional enterprise layout with official brand SVG icons for social channels.
 */

import { config } from "../config";

export function renderFooter(): string {
  const socialLinks: string[] = [];

  if (config.linkedinUrl && config.linkedinUrl.trim() !== "") {
    socialLinks.push(`
      <a 
        href="${config.linkedinUrl}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="sr-social-btn" 
        aria-label="LinkedIn"
        title="Follow SpeechReady on LinkedIn"
      >
        <svg class="sr-social-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64 1.64 1.64 0 0 0-1.64 1.64c0 .91.73 1.64 1.64 1.64m1.39 9.74v-8.37H5.07v8.37h2.78Z"/>
        </svg>
        <span>LinkedIn</span>
      </a>
    `);
  }

  if (config.xUrl && config.xUrl.trim() !== "") {
    socialLinks.push(`
      <a 
        href="${config.xUrl}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="sr-social-btn" 
        aria-label="X (formerly Twitter)"
        title="Follow SpeechReady on X"
      >
        <svg class="sr-social-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        <span>X</span>
      </a>
    `);
  }

  if (config.githubUrl && config.githubUrl.trim() !== "") {
    socialLinks.push(`
      <a 
        href="${config.githubUrl}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="sr-social-btn" 
        aria-label="GitHub"
        title="SpeechReady on GitHub"
      >
        <svg class="sr-social-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2Z"/>
        </svg>
        <span>GitHub</span>
      </a>
    `);
  }

  const socialHtml = socialLinks.length > 0 
    ? `<div class="sr-footer-social-group">${socialLinks.join("")}</div>` 
    : "";

  return `
    <footer class="sr-footer" role="contentinfo">
      <div class="sr-container sr-footer-container">
        
        <!-- Corporate Brand & Mission Summary -->
        <div class="sr-footer-main">
          <div class="sr-footer-brand-col">
            <div class="sr-brand">
              <div class="sr-brand-icon" aria-hidden="true">
                <img 
                  src="${import.meta.env.BASE_URL}assets/logo.png" 
                  alt="SpeechReady Logo" 
                  class="sr-brand-img" 
                  width="30" 
                  height="30" 
                />
              </div>
              <span class="sr-brand-text">Speech<strong>Ready</strong></span>
            </div>
            <p class="sr-footer-tagline">
              Enterprise-grade audio pre-processing and temporal compaction for high-accuracy Speech-to-Text pipelines.
            </p>
          </div>

          <!-- Social & Connect Column -->
          <div class="sr-footer-connect-col">
            <div class="sr-connect-label">Connect & Updates</div>
            ${socialHtml}
          </div>
        </div>

        <!-- Bottom Corporate Meta Bar -->
        <div class="sr-footer-bottom">
          <div class="sr-footer-copyright">
            &copy; ${new Date().getFullYear()} ${config.productName}. All rights reserved.
          </div>
          
          <div class="sr-footer-meta-links">
            <a href="${config.rapidApiUrl}" target="_blank" rel="noopener noreferrer">RapidAPI Listing</a>
            <span class="sr-dot-sep">•</span>
            <a href="#benchmarks">Empirical Benchmarks</a>
            <span class="sr-dot-sep">•</span>
            <a href="#how-it-works">API Documentation</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}
