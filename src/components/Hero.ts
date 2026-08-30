/**
 * SpeechReady Web - Hero Section Component
 * Apple-inspired expansive stage with clean typography and central waveform comparison.
 */

import { config } from "../config";
import { Waveform } from "../visuals/Waveform";

export function renderHero(): string {
  const rapidApiBtn = config.rapidApiUrl
    ? `<a href="${config.rapidApiUrl}" target="_blank" rel="noopener noreferrer" class="sr-btn sr-btn-primary">
         <span>Try SpeechReady on RapidAPI</span>
         <svg class="sr-btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
           <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
       </a>`
    : "";

  return `
    <section class="sr-hero-section sr-section" id="hero" aria-labelledby="hero-headline">
      <div class="sr-container sr-hero-container">

        <!-- Main Headline -->
        <h1 class="sr-hero-headline" id="hero-headline">
          Prepare audio for <br class="sr-br-desktop" /><span class="sr-gradient-text">Speech-to-Text.</span>
        </h1>

        <!-- Crisp Subheadline Bullets -->
        <p class="sr-hero-subheadline">
          <span>Reduce dead air.</span>
          <span class="sr-bullet-sep">•</span>
          <span>Improve audio quality.</span>
          <span class="sr-bullet-sep">•</span>
          <span>Lower STT costs.</span>
        </p>

        <!-- CTAs -->
        <div class="sr-hero-cta-group">
          ${rapidApiBtn}
          <a href="#benchmarks" class="sr-btn sr-btn-secondary">
            <span>See the benchmarks</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </div>

        <!-- Hero Waveform Transformation Showcase -->
        <div class="sr-hero-visual-card" data-reveal="fade-up">
          <div class="sr-visual-card-glow"></div>
          ${Waveform.renderBeforeAfterComparison({ className: "hero-waveform-demo" })}
        </div>

      </div>
    </section>
  `;
}
