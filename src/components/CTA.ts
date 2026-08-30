/**
 * SpeechReady Web - Final Conversion / RapidAPI CTA Section Component
 * High impact, near fullscreen focal point.
 */

import { config } from "../config";

export function renderCTA(): string {
  const rapidApiBtn = config.rapidApiUrl
    ? `<a href="${config.rapidApiUrl}" target="_blank" rel="noopener noreferrer" class="sr-btn sr-btn-cta">
         <span>Open SpeechReady on RapidAPI</span>
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
           <line x1="7" y1="17" x2="17" y2="7"></line>
           <polyline points="7 7 17 7 17 17"></polyline>
         </svg>
       </a>`
    : "";

  return `
    <section class="sr-cta-section sr-section" id="cta" aria-labelledby="cta-headline">
      <div class="sr-container sr-cta-container" data-reveal="fade-up">
        
        <div class="sr-cta-pill-wrap">
          <span class="sr-pill-badge accent-pill">Ready in Minutes</span>
        </div>

        <h2 class="sr-cta-headline" id="cta-headline">
          Your STT pipeline doesn't need more audio.
          <span class="sr-cta-subhead">It needs better audio.</span>
        </h2>

        <p class="sr-cta-lead">Try SpeechReady.</p>

        <div class="sr-cta-action-wrap">
          ${rapidApiBtn}
        </div>

      </div>
    </section>
  `;
}
