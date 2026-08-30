/**
 * SpeechReady Web - Impact & Key Performance Indicators Section
 * Renders large-scale typographic numbers directly from src/data/metrics.ts.
 */

import { metricsData, MetricItem } from "../data/metrics";

function renderMetricCard(metric: MetricItem): string {
  const isPlaceholder = metric.status === "demo" || metric.status === "placeholder";
  const statusBadge = isPlaceholder
    ? `<span class="sr-metric-status placeholder" title="Synthetic reference dataset">Representative</span>`
    : `<span class="sr-metric-status verified" title="Empirically verified lab test">Verified</span>`;

  return `
    <div class="sr-kpi-card" data-reveal="fade-up">
      <div class="sr-kpi-header">
        ${statusBadge}
      </div>
      <div class="sr-kpi-number-wrap">
        <span class="sr-kpi-number">${metric.value}</span>
      </div>
      <h3 class="sr-kpi-label">${metric.label}</h3>
      <p class="sr-kpi-description">${metric.description}</p>
    </div>
  `;
}

export function renderMetrics(): string {
  const cardsHtml = metricsData.items.map(renderMetricCard).join("");

  return `
    <section class="sr-metrics-section sr-section" id="metrics" aria-labelledby="metrics-headline">
      <div class="sr-container sr-metrics-container">
        
        <!-- Section Header -->
        <div class="sr-section-header" data-reveal="fade-up">
          <span class="sr-section-eyebrow">Efficiency Impact</span>
          <h2 class="sr-section-headline" id="metrics-headline">${metricsData.title}</h2>
          <p class="sr-section-subhead">${metricsData.subtitle}</p>
        </div>

        <!-- Giant KPI Grid -->
        <div class="sr-kpi-grid">
          ${cardsHtml}
        </div>

        <!-- Status Transparency Footnote -->
        <div class="sr-metrics-footnote" data-reveal="fade-up">
          <div class="sr-footnote-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p class="sr-footnote-text">
            ${metricsData.globalStatusNote}
          </p>
        </div>

      </div>
    </section>
  `;
}
