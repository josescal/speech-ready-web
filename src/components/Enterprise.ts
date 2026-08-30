/**
 * SpeechReady Web - Enterprise & Commercial Licensing Component
 * Confident, high-end B2B section for perpetual licensing, on-premise deployments, and IP acquisition.
 */

import { config } from "../config";

export function renderEnterprise(): string {
  const contactUrl = config.linkedinUrl || config.rapidApiUrl;

  return `
    <section class="sr-enterprise-section sr-section" id="enterprise" aria-labelledby="enterprise-headline">
      <div class="sr-container sr-enterprise-container" data-reveal="fade-up">
        
        <!-- Section Header -->
        <div class="sr-section-header sr-text-center">
          <span class="sr-section-category">Enterprise & Licensing</span>
          <h2 class="sr-section-headline" id="enterprise-headline">
            Tailored for high-scale infrastructure.
          </h2>
          <p class="sr-section-lead">
            Beyond our hosted RapidAPI endpoints, SpeechReady offers flexible commercial agreements for high-volume audio platforms, AI labs, and regulated enterprise environments.
          </p>
        </div>

        <!-- Enterprise Models Grid -->
        <div class="sr-enterprise-grid">
          
          <!-- Model 1: Perpetual License -->
          <div class="sr-enterprise-card">
            <div class="sr-card-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 class="sr-enterprise-card-title">Perpetual IP & Source Licensing</h3>
            <p class="sr-enterprise-card-text">
              Incorporate SpeechReady directly into your proprietary stack. Full source code access, zero third-party cloud dependencies, and predictable one-time licensing without recurring per-minute egress fees.
            </p>
            <ul class="sr-enterprise-card-list">
              <li>Complete acoustic DSP source access</li>
              <li>Royalty-free deployment rights</li>
              <li>Zero variable API costs at scale</li>
            </ul>
          </div>

          <!-- Model 2: Air-Gapped & On-Premise -->
          <div class="sr-enterprise-card">
            <div class="sr-card-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3 class="sr-enterprise-card-title">Air-Gapped & Private Cloud</h3>
            <p class="sr-enterprise-card-text">
              Engineered for strictly regulated environments. Deploy containerized pre-processing clusters in your AWS, GCP, or private data centers with zero data egress and strict compliance.
            </p>
            <ul class="sr-enterprise-card-list">
              <li>Docker & Kubernetes native microservices</li>
              <li>HIPAA, SOC2 & GDPR compliant architecture</li>
              <li>~48% lower long-term audio archival storage (S3/GCS)</li>
            </ul>
          </div>

          <!-- Model 3: Strategic Acquisition & Custom IP -->
          <div class="sr-enterprise-card">
            <div class="sr-card-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h3 class="sr-enterprise-card-title">Strategic Acquisition & Tuning</h3>
            <p class="sr-enterprise-card-text">
              For speech AI platforms seeking to acquire and integrate superior acoustic pre-processing technology into their core product offering, including custom fine-tuning for specialized audio domains.
            </p>
            <ul class="sr-enterprise-card-list">
              <li>Full technology transfer & buyout options</li>
              <li>Domain-specific acoustic tuning</li>
              <li>Architectural integration advisory</li>
            </ul>
          </div>

        </div>

        <!-- Enterprise Direct Action Banner -->
        <div class="sr-enterprise-cta-box">
          <div class="sr-enterprise-cta-content">
            <h3 class="sr-enterprise-cta-heading">Interested in commercial terms or private deployment?</h3>
            <p class="sr-enterprise-cta-sub">
              Custom benchmarking on your proprietary audio datasets and mutual NDAs provided upon request.
            </p>
          </div>
          <div class="sr-enterprise-cta-actions">
            <a href="${contactUrl}" target="_blank" rel="noopener noreferrer" class="sr-btn sr-btn-primary">
              <span>Discuss Enterprise Licensing</span>
              <svg class="sr-btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}
