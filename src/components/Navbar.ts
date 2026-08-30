/**
 * SpeechReady Web - Minimalist Frosted Navigation Header
 */

import { config } from "../config";

export function renderNavbar(): string {
  const rapidApiBtn = config.rapidApiUrl
    ? `<a href="${config.rapidApiUrl}" target="_blank" rel="noopener noreferrer" class="sr-nav-btn">Try on RapidAPI</a>`
    : "";

  return `
    <header class="sr-navbar" id="top-nav" role="banner">
      <div class="sr-nav-inner sr-container">
        <!-- Brand / Logo -->
        <a href="#" class="sr-brand" aria-label="SpeechReady Home">
          <div class="sr-brand-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#0071E3"/>
              <rect x="4" y="10" width="2" height="4" rx="1" fill="#FFF"/>
              <rect x="7" y="7" width="2" height="10" rx="1" fill="#FFF"/>
              <rect x="10" y="5" width="2" height="14" rx="1" fill="#FFF"/>
              <rect x="13" y="8" width="2" height="8" rx="1" fill="#FFF"/>
              <rect x="16" y="6" width="2" height="12" rx="1" fill="#FFF"/>
              <rect x="19" y="10" width="2" height="4" rx="1" fill="#FFF"/>
            </svg>
          </div>
          <span class="sr-brand-text">Speech<strong>Ready</strong></span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="sr-nav-menu" aria-label="Main Navigation">
          <a href="#problem" class="sr-nav-link">The Problem</a>
          <a href="#benchmarks" class="sr-nav-link">Benchmarks</a>
          <a href="#features" class="sr-nav-link">Technology</a>
          <a href="#how-it-works" class="sr-nav-link">Integration</a>
        </nav>

        <!-- Header Actions -->
        <div class="sr-nav-actions">
          ${rapidApiBtn}
        </div>
      </div>
    </header>
  `;
}
