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
            <img 
              src="${import.meta.env.BASE_URL}assets/logo.png" 
              alt="SpeechReady Logo" 
              class="sr-brand-img" 
              width="28" 
              height="28" 
            />
          </div>
          <span class="sr-brand-text">Speech<strong>Ready</strong></span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="sr-nav-menu" aria-label="Main Navigation">
          <a href="#problem" class="sr-nav-link">The Problem</a>
          <a href="#benchmarks" class="sr-nav-link">Benchmarks</a>
          <a href="#features" class="sr-nav-link">Technology</a>
          <a href="#how-it-works" class="sr-nav-link">Integration</a>
          <a href="#enterprise" class="sr-nav-link">Enterprise</a>
        </nav>

        <!-- Header Actions -->
        <div class="sr-nav-actions">
          ${rapidApiBtn}
        </div>
      </div>
    </header>
  `;
}
