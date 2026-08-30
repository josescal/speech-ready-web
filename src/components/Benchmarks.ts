/**
 * SpeechReady Web - Benchmarks Section Component
 * "Measured, not promised."
 * Interactive multi-profile audio comparison benchmarks driven entirely by src/data/benchmarks.ts.
 */

import { benchmarkData, BenchmarkProfile } from "../data/benchmarks";

function renderProfileTabs(profiles: BenchmarkProfile[], activeId: string): string {
  return `
    <div class="sr-benchmark-tabs" role="tablist" aria-label="Benchmark Acoustic Profiles">
      ${profiles
        .map(
          (p) => `
        <button 
          role="tab" 
          aria-selected="${p.id === activeId ? "true" : "false"}"
          aria-controls="profile-panel-${p.id}"
          id="tab-${p.id}"
          class="sr-tab-btn ${p.id === activeId ? "active" : ""}"
          data-profile-id="${p.id}"
        >
          <span class="sr-tab-title">${p.name}</span>
          ${p.isPlaceholder ? `<span class="sr-tab-pill">Demo</span>` : ""}
        </button>
      `
        )
        .join("")}
    </div>
  `;
}

function renderProfilePanel(profile: BenchmarkProfile, isActive: boolean): string {
  const durationReduction = profile.durationReductionPercent.toFixed(1);
  const sizeReduction = profile.sizeReductionPercent.toFixed(1);
  const werImprovement = (profile.werBeforePercent - profile.werAfterPercent).toFixed(1);
  const werImprovedSign = Number(werImprovement) > 0 ? `-${werImprovement}%` : `Equal (${werImprovement}%)`;

  return `
    <div 
      id="profile-panel-${profile.id}" 
      role="tabpanel" 
      aria-labelledby="tab-${profile.id}"
      class="sr-benchmark-panel ${isActive ? "active" : "hidden"}"
      data-profile-id="${profile.id}"
    >
      <!-- Profile Header Summary -->
      <div class="sr-panel-header">
        <div class="sr-panel-info">
          <h3 class="sr-panel-title">${profile.name}</h3>
          <p class="sr-panel-desc">${profile.description}</p>
        </div>
        <div class="sr-panel-meta">
          <span class="sr-sample-count">${profile.sampleCount} Test Samples</span>
          ${profile.isPlaceholder ? `<span class="sr-placeholder-tag">Placeholder Data</span>` : `<span class="sr-verified-tag">Lab Verified</span>`}
        </div>
      </div>

      <!-- Comparative Metric Matrix -->
      <div class="sr-benchmark-grid">
        
        <!-- 1. DURATION COMPARISON -->
        <div class="sr-bench-card" data-reveal="fade-up">
          <div class="sr-bench-card-label">Duration & Billable Time</div>
          
          <div class="sr-compare-values">
            <div class="sr-val-col before">
              <span class="sr-col-tag">RAW INPUT</span>
              <span class="sr-col-number">${profile.durationBeforeMinutes} min</span>
            </div>
            <div class="sr-val-diff">
              <span class="sr-diff-badge green">-${durationReduction}%</span>
            </div>
            <div class="sr-val-col after">
              <span class="sr-col-tag">SPEECHREADY</span>
              <span class="sr-col-number accent">${profile.durationAfterMinutes} min</span>
            </div>
          </div>

          <!-- Proportional Visual Bar -->
          <div class="sr-bar-comparison">
            <div class="sr-bar-row">
              <span class="sr-bar-label">Raw (100%)</span>
              <div class="sr-bar-track">
                <div class="sr-bar-fill raw" style="width: 100%;"></div>
              </div>
            </div>
            <div class="sr-bar-row">
              <span class="sr-bar-label">SpeechReady (${100 - profile.durationReductionPercent}%)</span>
              <div class="sr-bar-track">
                <div class="sr-bar-fill optimized" style="width: ${100 - profile.durationReductionPercent}%;"></div>
              </div>
            </div>
          </div>
          <p class="sr-bench-insight">Eliminates dead air periods where no party is speaking.</p>
        </div>

        <!-- 2. FILE SIZE & STORAGE SAVINGS -->
        <div class="sr-bench-card" data-reveal="fade-up">
          <div class="sr-bench-card-label">Storage & Ingestion Payload</div>
          
          <div class="sr-compare-values">
            <div class="sr-val-col before">
              <span class="sr-col-tag">${profile.rawFormat.split(' ')[0]}</span>
              <span class="sr-col-number">${profile.rawSizeMb} MB</span>
            </div>
            <div class="sr-val-diff">
              <span class="sr-diff-badge green">-${sizeReduction}%</span>
            </div>
            <div class="sr-val-col after">
              <span class="sr-col-tag">${profile.optimizedFormat.split(' ')[0]}</span>
              <span class="sr-col-number accent">${profile.optimizedSizeMb} MB</span>
            </div>
          </div>

          <!-- Proportional Visual Bar -->
          <div class="sr-bar-comparison">
            <div class="sr-bar-row">
              <span class="sr-bar-label">WAV PCM (100%)</span>
              <div class="sr-bar-track">
                <div class="sr-bar-fill raw" style="width: 100%;"></div>
              </div>
            </div>
            <div class="sr-bar-row">
              <span class="sr-bar-label">FLAC Lossless (${100 - profile.sizeReductionPercent}%)</span>
              <div class="sr-bar-track">
                <div class="sr-bar-fill optimized" style="width: ${100 - profile.sizeReductionPercent}%;"></div>
              </div>
            </div>
          </div>
          <p class="sr-bench-insight">Cuts long-term cloud storage (S3/GCS) and network payloads with bit-exact lossless retention.</p>
        </div>

        <!-- 3. TRANSCRIPTION ACCURACY (WER) -->
        <div class="sr-bench-card" data-reveal="fade-up">
          <div class="sr-bench-card-label">Word Error Rate (WER)</div>
          
          <div class="sr-compare-values">
            <div class="sr-val-col before">
              <span class="sr-col-tag">RAW WER</span>
              <span class="sr-col-number">${profile.werBeforePercent}%</span>
            </div>
            <div class="sr-val-diff">
              <span class="sr-diff-badge ${Number(werImprovement) > 0 ? "green" : "neutral"}">${werImprovedSign}</span>
            </div>
            <div class="sr-val-col after">
              <span class="sr-col-tag">PRE-PROCESSED</span>
              <span class="sr-col-number accent">${profile.werAfterPercent}%</span>
            </div>
          </div>

          <div class="sr-wer-indicator">
            <div class="sr-wer-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34C759" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Zero accuracy degradation; noise conditioning preserves intelligibility.</span>
            </div>
          </div>
          <p class="sr-bench-insight">Clean spectral floor prevents hallucinations on silent pauses.</p>
        </div>

        <!-- 4. PROCESSING THROUGHPUT -->
        <div class="sr-bench-card" data-reveal="fade-up">
          <div class="sr-bench-card-label">Pre-processing Speed</div>
          
          <div class="sr-speed-highlight">
            <div class="sr-speed-factor">${profile.processingRtf}x</div>
            <div class="sr-speed-subtitle">Real-Time Factor (RTF)</div>
          </div>

          <div class="sr-speed-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>${profile.throughputMultiplier}</span>
          </div>

          <p class="sr-bench-insight">Optimized SIMD audio conditioning executes in milliseconds.</p>
        </div>

      </div>

      <!-- Key Insight Footer for Profile -->
      <div class="sr-panel-footer">
        <span class="sr-insight-icon">💡</span>
        <span class="sr-insight-text"><strong>Profile Takeaway:</strong> ${profile.keyInsight}</span>
      </div>
    </div>
  `;
}

export function renderBenchmarks(): string {
  const initialActive = benchmarkData.profiles[0]?.id || "telephony";
  const tabsHtml = renderProfileTabs(benchmarkData.profiles, initialActive);
  const panelsHtml = benchmarkData.profiles
    .map((p) => renderProfilePanel(p, p.id === initialActive))
    .join("");

  return `
    <section class="sr-benchmarks-section sr-section" id="benchmarks" aria-labelledby="benchmarks-headline">
      <div class="sr-container sr-benchmarks-container">
        
        <!-- Section Header -->
        <div class="sr-section-header" data-reveal="fade-up">
          <span class="sr-section-eyebrow">${benchmarkData.sectionTitle}</span>
          <h2 class="sr-section-headline" id="benchmarks-headline">${benchmarkData.sectionHeadline}</h2>
          <p class="sr-section-subhead">${benchmarkData.sectionSubtitle}</p>
        </div>

        <!-- Profile Switcher Tabs -->
        <div class="sr-tabs-wrapper" data-reveal="fade-up">
          ${tabsHtml}
        </div>

        <!-- Tab Panels Container -->
        <div class="sr-panels-wrapper" id="benchmark-panels">
          ${panelsHtml}
        </div>

      </div>
    </section>
  `;
}

/**
 * Initializes tab switching interactivity without heavy libraries.
 */
export function initBenchmarkTabs(): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>(".sr-tab-btn");
  const panels = document.querySelectorAll<HTMLElement>(".sr-benchmark-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const profileId = tab.dataset.profileId;
      if (!profileId) return;

      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      panels.forEach((p) => {
        if (p.dataset.profileId === profileId) {
          p.classList.remove("hidden");
          p.classList.add("active");
        } else {
          p.classList.add("hidden");
          p.classList.remove("active");
        }
      });
    });
  });
}
