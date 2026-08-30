/**
 * SpeechReady Web - Reusable SVG Waveform Visual Component System
 *
 * Generates lightweight, responsive, vector-based acoustic representations
 * for speech, dead air compression, noise reduction, loudness leveling,
 * and multi-channel streams.
 */

export interface WaveformOptions {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  secondaryColor?: string;
  noiseColor?: string;
  compact?: boolean;
  animated?: boolean;
}

export class Waveform {
  /**
   * Generates a Before vs After waveform demonstrating Dead Air Compression.
   * "BEFORE" shows spaced out speech bursts with wide silence gaps.
   * "AFTER" shows the compressed stream with minimal silence buffers.
   */
  static renderBeforeAfterComparison(options: WaveformOptions = {}): string {
    const primaryColor = options.color || "var(--color-accent)";
    const rawColor = options.secondaryColor || "var(--color-text-tertiary)";
    const silenceColor = "var(--color-silence-dash)";

    return `
      <div class="sr-waveform-comparison ${options.className || ''}">
        <!-- BEFORE Track -->
        <div class="sr-track-container raw-track">
          <div class="sr-track-header">
            <span class="sr-track-badge before-badge">BEFORE</span>
            <span class="sr-track-label">Raw Audio Track — <strong class="sr-text-highlight">10:00 Total Duration</strong></span>
            <span class="sr-track-meta">2:30 Dead Air</span>
          </div>
          <div class="sr-waveform-svg-wrap">
            <svg viewBox="0 0 800 50" class="sr-waveform-svg" preserveAspectRatio="none" aria-label="Raw audio waveform showing wide dead air gaps">
              <!-- Baseline -->
              <line x1="0" y1="25" x2="800" y2="25" stroke="var(--color-border)" stroke-width="1" />
              
              <!-- Burst 1: Speech (0 - 200px) -->
              <g class="sr-burst speech" fill="${rawColor}">
                <rect x="10" y="16" width="4" height="18" rx="2"/>
                <rect x="20" y="10" width="4" height="30" rx="2"/>
                <rect x="30" y="5" width="4" height="40" rx="2"/>
                <rect x="40" y="8" width="4" height="34" rx="2"/>
                <rect x="50" y="14" width="4" height="22" rx="2"/>
                <rect x="60" y="6" width="4" height="38" rx="2"/>
                <rect x="70" y="11" width="4" height="28" rx="2"/>
                <rect x="80" y="18" width="4" height="14" rx="2"/>
                <rect x="90" y="8" width="4" height="34" rx="2"/>
                <rect x="100" y="4" width="4" height="42" rx="2"/>
                <rect x="110" y="12" width="4" height="26" rx="2"/>
                <rect x="120" y="17" width="4" height="16" rx="2"/>
                <rect x="130" y="9" width="4" height="32" rx="2"/>
                <rect x="140" y="15" width="4" height="20" rx="2"/>
                <rect x="150" y="7" width="4" height="36" rx="2"/>
                <rect x="160" y="19" width="4" height="12" rx="2"/>
              </g>

              <!-- GAP 1: Dead Air (170 - 330px) -->
              <g class="sr-dead-air-gap" stroke="${silenceColor}" stroke-dasharray="3,4" stroke-width="2">
                <line x1="175" y1="25" x2="330" y2="25" />
                <rect x="180" y="8" width="145" height="34" rx="4" fill="rgba(255, 59, 48, 0.04)" stroke="rgba(255, 59, 48, 0.25)" stroke-dasharray="2,3"/>
                <text x="252" y="29" fill="var(--color-danger)" font-size="11" font-weight="600" text-anchor="middle" letter-spacing="0.05em">DEAD AIR (SILENCE)</text>
              </g>

              <!-- Burst 2: Speech (340 - 520px) -->
              <g class="sr-burst speech" fill="${rawColor}">
                <rect x="340" y="15" width="4" height="20" rx="2"/>
                <rect x="350" y="7" width="4" height="36" rx="2"/>
                <rect x="360" y="4" width="4" height="42" rx="2"/>
                <rect x="370" y="12" width="4" height="26" rx="2"/>
                <rect x="380" y="8" width="4" height="34" rx="2"/>
                <rect x="390" y="17" width="4" height="16" rx="2"/>
                <rect x="400" y="5" width="4" height="40" rx="2"/>
                <rect x="410" y="11" width="4" height="28" rx="2"/>
                <rect x="420" y="16" width="4" height="18" rx="2"/>
                <rect x="430" y="9" width="4" height="32" rx="2"/>
                <rect x="440" y="6" width="4" height="38" rx="2"/>
                <rect x="450" y="14" width="4" height="22" rx="2"/>
                <rect x="460" y="10" width="4" height="30" rx="2"/>
                <rect x="470" y="18" width="4" height="14" rx="2"/>
                <rect x="480" y="7" width="4" height="36" rx="2"/>
              </g>

              <!-- GAP 2: Dead Air (495 - 630px) -->
              <g class="sr-dead-air-gap" stroke="${silenceColor}" stroke-dasharray="3,4" stroke-width="2">
                <line x1="495" y1="25" x2="630" y2="25" />
                <rect x="495" y="8" width="130" height="34" rx="4" fill="rgba(255, 59, 48, 0.04)" stroke="rgba(255, 59, 48, 0.25)" stroke-dasharray="2,3"/>
                <text x="560" y="29" fill="var(--color-danger)" font-size="11" font-weight="600" text-anchor="middle" letter-spacing="0.05em">DEAD AIR (SILENCE)</text>
              </g>

              <!-- Burst 3: Speech (640 - 790px) -->
              <g class="sr-burst speech" fill="${rawColor}">
                <rect x="640" y="14" width="4" height="22" rx="2"/>
                <rect x="650" y="8" width="4" height="34" rx="2"/>
                <rect x="660" y="5" width="4" height="40" rx="2"/>
                <rect x="670" y="10" width="4" height="30" rx="2"/>
                <rect x="680" y="16" width="4" height="18" rx="2"/>
                <rect x="690" y="7" width="4" height="36" rx="2"/>
                <rect x="700" y="12" width="4" height="26" rx="2"/>
                <rect x="710" y="4" width="4" height="42" rx="2"/>
                <rect x="720" y="15" width="4" height="20" rx="2"/>
                <rect x="730" y="9" width="4" height="32" rx="2"/>
                <rect x="740" y="18" width="4" height="14" rx="2"/>
                <rect x="750" y="6" width="4" height="38" rx="2"/>
                <rect x="760" y="13" width="4" height="24" rx="2"/>
                <rect x="770" y="19" width="4" height="12" rx="2"/>
              </g>
            </svg>
          </div>
        </div>

        <!-- TRANSFORMATION CONNECTOR ARROW -->
        <div class="sr-transform-indicator" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
          <span class="sr-transform-text">SpeechReady Pre-Processing Engine</span>
        </div>

        <!-- AFTER Track -->
        <div class="sr-track-container optimized-track">
          <div class="sr-track-header">
            <span class="sr-track-badge after-badge">AFTER</span>
            <span class="sr-track-label">SpeechReady Optimized — <strong class="sr-text-accent">07:30 Total Duration (-25%)</strong></span>
            <span class="sr-track-meta green-meta">0% Lossy Distortion • FLAC Lossless</span>
          </div>
          <div class="sr-waveform-svg-wrap">
            <svg viewBox="0 0 800 50" class="sr-waveform-svg" preserveAspectRatio="none" aria-label="Optimized waveform with silences compressed into compact safety buffers">
              <!-- Baseline -->
              <line x1="0" y1="25" x2="800" y2="25" stroke="var(--color-border)" stroke-width="1" />
              
              <!-- Burst 1: Speech (0 - 200px) -->
              <g class="sr-burst speech" fill="${primaryColor}">
                <rect x="10" y="16" width="4" height="18" rx="2"/>
                <rect x="20" y="10" width="4" height="30" rx="2"/>
                <rect x="30" y="5" width="4" height="40" rx="2"/>
                <rect x="40" y="8" width="4" height="34" rx="2"/>
                <rect x="50" y="14" width="4" height="22" rx="2"/>
                <rect x="60" y="6" width="4" height="38" rx="2"/>
                <rect x="70" y="11" width="4" height="28" rx="2"/>
                <rect x="80" y="18" width="4" height="14" rx="2"/>
                <rect x="90" y="8" width="4" height="34" rx="2"/>
                <rect x="100" y="4" width="4" height="42" rx="2"/>
                <rect x="110" y="12" width="4" height="26" rx="2"/>
                <rect x="120" y="17" width="4" height="16" rx="2"/>
                <rect x="130" y="9" width="4" height="32" rx="2"/>
                <rect x="140" y="15" width="4" height="20" rx="2"/>
                <rect x="150" y="7" width="4" height="36" rx="2"/>
                <rect x="160" y="19" width="4" height="12" rx="2"/>
              </g>

              <!-- COMPACT BUFFER 1 (175 - 205px) -->
              <g class="sr-safe-buffer" fill="var(--color-accent-subtle)">
                <rect x="175" y="18" width="30" height="14" rx="3" />
                <text x="190" y="29" fill="var(--color-accent)" font-size="9" font-weight="700" text-anchor="middle">PAD</text>
              </g>

              <!-- Burst 2: Speech (220 - 400px - Shifted closer) -->
              <g class="sr-burst speech" fill="${primaryColor}">
                <rect x="220" y="15" width="4" height="20" rx="2"/>
                <rect x="230" y="7" width="4" height="36" rx="2"/>
                <rect x="240" y="4" width="4" height="42" rx="2"/>
                <rect x="250" y="12" width="4" height="26" rx="2"/>
                <rect x="260" y="8" width="4" height="34" rx="2"/>
                <rect x="270" y="17" width="4" height="16" rx="2"/>
                <rect x="280" y="5" width="4" height="40" rx="2"/>
                <rect x="290" y="11" width="4" height="28" rx="2"/>
                <rect x="300" y="16" width="4" height="18" rx="2"/>
                <rect x="310" y="9" width="4" height="32" rx="2"/>
                <rect x="320" y="6" width="4" height="38" rx="2"/>
                <rect x="330" y="14" width="4" height="22" rx="2"/>
                <rect x="340" y="10" width="4" height="30" rx="2"/>
                <rect x="350" y="18" width="4" height="14" rx="2"/>
                <rect x="360" y="7" width="4" height="36" rx="2"/>
              </g>

              <!-- COMPACT BUFFER 2 (375 - 405px) -->
              <g class="sr-safe-buffer" fill="var(--color-accent-subtle)">
                <rect x="375" y="18" width="30" height="14" rx="3" />
                <text x="390" y="29" fill="var(--color-accent)" font-size="9" font-weight="700" text-anchor="middle">PAD</text>
              </g>

              <!-- Burst 3: Speech (420 - 570px - Shifted closer) -->
              <g class="sr-burst speech" fill="${primaryColor}">
                <rect x="420" y="14" width="4" height="22" rx="2"/>
                <rect x="430" y="8" width="4" height="34" rx="2"/>
                <rect x="440" y="5" width="4" height="40" rx="2"/>
                <rect x="450" y="10" width="4" height="30" rx="2"/>
                <rect x="460" y="16" width="4" height="18" rx="2"/>
                <rect x="470" y="7" width="4" height="36" rx="2"/>
                <rect x="480" y="12" width="4" height="26" rx="2"/>
                <rect x="490" y="4" width="4" height="42" rx="2"/>
                <rect x="500" y="15" width="4" height="20" rx="2"/>
                <rect x="510" y="9" width="4" height="32" rx="2"/>
                <rect x="520" y="18" width="4" height="14" rx="2"/>
                <rect x="530" y="6" width="4" height="38" rx="2"/>
                <rect x="540" y="13" width="4" height="24" rx="2"/>
                <rect x="550" y="19" width="4" height="12" rx="2"/>
              </g>

              <!-- TRIMMED END SPACE -->
              <rect x="575" y="10" width="215" height="30" rx="6" fill="var(--color-bg-subtle)" stroke="var(--color-border)" stroke-dasharray="4,4" />
              <text x="682" y="29" fill="var(--color-text-tertiary)" font-size="11" font-weight="500" text-anchor="middle">ELIMINATED AUDIO DURATION (25%)</text>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Generates single feature visual cards for the "What SpeechReady Does" sequence.
   */
  static renderFeatureVisual(feature: "vad" | "compress" | "denoise" | "normalize" | "multichannel" | "lossless"): string {
    switch (feature) {
      case "vad":
        return `
          <div class="sr-feature-visual-box">
            <div class="sr-vad-canvas">
              <svg viewBox="0 0 500 100" class="sr-feature-svg" preserveAspectRatio="none">
                <!-- VAD Detection boxes -->
                <rect x="30" y="10" width="180" height="80" rx="8" fill="rgba(0, 113, 227, 0.08)" stroke="#0071E3" stroke-width="1.5" stroke-dasharray="4,4"/>
                <text x="120" y="26" fill="#0071E3" font-size="10" font-weight="700" text-anchor="middle">SPEECH DETECTED (CONFIDENCE 99.4%)</text>
                
                <rect x="290" y="10" width="180" height="80" rx="8" fill="rgba(0, 113, 227, 0.08)" stroke="#0071E3" stroke-width="1.5" stroke-dasharray="4,4"/>
                <text x="380" y="26" fill="#0071E3" font-size="10" font-weight="700" text-anchor="middle">SPEECH DETECTED (CONFIDENCE 98.9%)</text>

                <!-- Non-speech label in the center gap -->
                <rect x="220" y="38" width="60" height="24" rx="4" fill="var(--color-bg-card)" stroke="var(--color-border)"/>
                <text x="250" y="54" fill="var(--color-text-tertiary)" font-size="9" font-weight="600" text-anchor="middle">SILENCE</text>

                <!-- Audio waveform inside -->
                <g fill="#1D1D1F">
                  <!-- Speech burst 1 -->
                  <rect x="50" y="38" width="4" height="24" rx="2"/>
                  <rect x="65" y="28" width="4" height="44" rx="2"/>
                  <rect x="80" y="22" width="4" height="56" rx="2"/>
                  <rect x="95" y="32" width="4" height="36" rx="2"/>
                  <rect x="110" y="25" width="4" height="50" rx="2"/>
                  <rect x="125" y="35" width="4" height="30" rx="2"/>
                  <rect x="140" y="20" width="4" height="60" rx="2"/>
                  <rect x="155" y="30" width="4" height="40" rx="2"/>
                  <rect x="170" y="42" width="4" height="16" rx="2"/>
                  <rect x="185" y="45" width="4" height="10" rx="2"/>

                  <!-- Silence baseline -->
                  <line x1="215" y1="50" x2="285" y2="50" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="2,4"/>

                  <!-- Speech burst 2 -->
                  <rect x="310" y="40" width="4" height="20" rx="2"/>
                  <rect x="325" y="26" width="4" height="48" rx="2"/>
                  <rect x="340" y="18" width="4" height="64" rx="2"/>
                  <rect x="355" y="30" width="4" height="40" rx="2"/>
                  <rect x="370" y="22" width="4" height="56" rx="2"/>
                  <rect x="385" y="36" width="4" height="28" rx="2"/>
                  <rect x="400" y="24" width="4" height="52" rx="2"/>
                  <rect x="415" y="38" width="4" height="24" rx="2"/>
                  <rect x="430" y="44" width="4" height="12" rx="2"/>
                </g>
              </svg>
            </div>
          </div>
        `;

      case "compress":
        return `
          <div class="sr-feature-visual-box">
            <div class="sr-compress-canvas">
              <svg viewBox="0 0 500 100" class="sr-feature-svg" preserveAspectRatio="none">
                <!-- Compressing arrows -->
                <path d="M 180 50 L 220 50" stroke="#0071E3" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 320 50 L 280 50" stroke="#0071E3" stroke-width="2"/>
                
                <!-- Speech Segment A -->
                <g fill="#0071E3">
                  <rect x="40" y="35" width="5" height="30" rx="2"/>
                  <rect x="55" y="20" width="5" height="60" rx="2"/>
                  <rect x="70" y="15" width="5" height="70" rx="2"/>
                  <rect x="85" y="28" width="5" height="44" rx="2"/>
                  <rect x="100" y="18" width="5" height="64" rx="2"/>
                  <rect x="115" y="32" width="5" height="36" rx="2"/>
                </g>
                <text x="80" y="95" fill="var(--color-text-secondary)" font-size="10" font-weight="600" text-anchor="middle">Segment A</text>

                <!-- Compact Silence Pad with Safety Margin -->
                <rect x="195" y="35" width="110" height="30" rx="6" fill="rgba(52, 199, 89, 0.1)" stroke="#34C759" stroke-width="1.5"/>
                <text x="250" y="53" fill="#34C759" font-size="10" font-weight="700" text-anchor="middle">150ms Safety Pad</text>

                <!-- Speech Segment B -->
                <g fill="#0071E3">
                  <rect x="380" y="32" width="5" height="36" rx="2"/>
                  <rect x="395" y="16" width="5" height="68" rx="2"/>
                  <rect x="410" y="22" width="5" height="56" rx="2"/>
                  <rect x="425" y="15" width="5" height="70" rx="2"/>
                  <rect x="440" y="30" width="5" height="40" rx="2"/>
                  <rect x="455" y="40" width="5" height="20" rx="2"/>
                </g>
                <text x="420" y="95" fill="var(--color-text-secondary)" font-size="10" font-weight="600" text-anchor="middle">Segment B</text>
              </svg>
            </div>
          </div>
        `;

      case "denoise":
        return `
          <div class="sr-feature-visual-box">
            <div class="sr-denoise-canvas">
              <svg viewBox="0 0 500 100" class="sr-feature-svg" preserveAspectRatio="none">
                <!-- Attenuated Noise floor pattern -->
                <g stroke="rgba(255, 59, 48, 0.2)" stroke-width="1" stroke-linecap="round">
                  <line x1="20" y1="42" x2="20" y2="58"/>
                  <line x1="40" y1="44" x2="40" y2="56"/>
                  <line x1="60" y1="41" x2="60" y2="59"/>
                  <line x1="80" y1="45" x2="80" y2="55"/>
                  <line x1="420" y1="43" x2="420" y2="57"/>
                  <line x1="440" y1="41" x2="440" y2="59"/>
                  <line x1="460" y1="44" x2="460" y2="56"/>
                  <line x1="480" y1="42" x2="480" y2="58"/>
                </g>
                <text x="50" y="30" fill="var(--color-danger)" font-size="9" font-weight="600" opacity="0.8">NOISE FLOOR ATTENUATED</text>

                <!-- Pure Clean Speech Waveform in Foreground -->
                <g fill="#0071E3">
                  <rect x="120" y="36" width="6" height="28" rx="3"/>
                  <rect x="145" y="24" width="6" height="52" rx="3"/>
                  <rect x="170" y="14" width="6" height="72" rx="3"/>
                  <rect x="195" y="28" width="6" height="44" rx="3"/>
                  <rect x="220" y="10" width="6" height="80" rx="3"/>
                  <rect x="245" y="20" width="6" height="60" rx="3"/>
                  <rect x="270" y="12" width="6" height="76" rx="3"/>
                  <rect x="295" y="26" width="6" height="48" rx="3"/>
                  <rect x="320" y="16" width="6" height="68" rx="3"/>
                  <rect x="345" y="30" width="6" height="40" rx="3"/>
                  <rect x="370" y="40" width="6" height="20" rx="3"/>
                </g>
                <text x="250" y="96" fill="#0071E3" font-size="10" font-weight="700" text-anchor="middle">Crystal Clear Speech Envelope</text>
              </svg>
            </div>
          </div>
        `;

      case "normalize":
        return `
          <div class="sr-feature-visual-box">
            <div class="sr-normalize-canvas">
              <svg viewBox="0 0 500 100" class="sr-feature-svg" preserveAspectRatio="none">
                <!-- Target Level Bounds (LUFS Target) -->
                <line x1="20" y1="20" x2="480" y2="20" stroke="rgba(0, 113, 227, 0.3)" stroke-width="1.5" stroke-dasharray="4,4"/>
                <line x1="20" y1="80" x2="480" y2="80" stroke="rgba(0, 113, 227, 0.3)" stroke-width="1.5" stroke-dasharray="4,4"/>
                <text x="475" y="16" fill="#0071E3" font-size="9" font-weight="600" text-anchor="end">OPTIMAL STT LEVEL TARGET</text>

                <!-- Whispered speech (Boosted) -->
                <g fill="#0071E3">
                  <rect x="40" y="26" width="5" height="48" rx="2.5"/>
                  <rect x="60" y="22" width="5" height="56" rx="2.5"/>
                  <rect x="80" y="25" width="5" height="50" rx="2.5"/>
                  <rect x="100" y="21" width="5" height="58" rx="2.5"/>
                  <rect x="120" y="28" width="5" height="44" rx="2.5"/>
                </g>
                <text x="80" y="95" fill="var(--color-text-secondary)" font-size="9" font-weight="600" text-anchor="middle">Soft Speech Boosted</text>

                <!-- Separator -->
                <line x1="250" y1="25" x2="250" y2="75" stroke="var(--color-border)" stroke-width="1"/>

                <!-- Loud speech (Calibrated & Tampered) -->
                <g fill="#0071E3">
                  <rect x="360" y="22" width="5" height="56" rx="2.5"/>
                  <rect x="380" y="20" width="5" height="60" rx="2.5"/>
                  <rect x="400" y="23" width="5" height="54" rx="2.5"/>
                  <rect x="420" y="20" width="5" height="60" rx="2.5"/>
                  <rect x="440" y="25" width="5" height="50" rx="2.5"/>
                </g>
                <text x="400" y="95" fill="var(--color-text-secondary)" font-size="9" font-weight="600" text-anchor="middle">Peak Clamps Controlled</text>
              </svg>
            </div>
          </div>
        `;

      case "multichannel":
        return `
          <div class="sr-feature-visual-box">
            <div class="sr-multichannel-canvas">
              <svg viewBox="0 0 500 120" class="sr-feature-svg" preserveAspectRatio="none">
                <!-- Channel 1: Agent Track -->
                <g class="sr-channel ch1">
                  <rect x="10" y="8" width="90" height="20" rx="4" fill="rgba(0, 113, 227, 0.1)"/>
                  <text x="55" y="22" fill="#0071E3" font-size="10" font-weight="700" text-anchor="middle">CH 1: AGENT</text>
                  
                  <line x1="110" y1="18" x2="490" y2="18" stroke="var(--color-border)" stroke-width="1"/>
                  <!-- Agent speech bursts -->
                  <g fill="#0071E3">
                    <rect x="120" y="10" width="4" height="16" rx="2"/>
                    <rect x="135" y="6" width="4" height="24" rx="2"/>
                    <rect x="150" y="4" width="4" height="28" rx="2"/>
                    <rect x="165" y="8" width="4" height="20" rx="2"/>
                    <rect x="180" y="12" width="4" height="12" rx="2"/>
                    
                    <rect x="340" y="8" width="4" height="20" rx="2"/>
                    <rect x="355" y="4" width="4" height="28" rx="2"/>
                    <rect x="370" y="6" width="4" height="24" rx="2"/>
                    <rect x="385" y="10" width="4" height="16" rx="2"/>
                  </g>
                </g>

                <!-- Channel 2: Customer Track -->
                <g class="sr-channel ch2" transform="translate(0, 60)">
                  <rect x="10" y="8" width="90" height="20" rx="4" fill="rgba(52, 199, 89, 0.1)"/>
                  <text x="55" y="22" fill="#34C759" font-size="10" font-weight="700" text-anchor="middle">CH 2: CALLER</text>
                  
                  <line x1="110" y1="18" x2="490" y2="18" stroke="var(--color-border)" stroke-width="1"/>
                  <!-- Caller speech bursts (Turn-taking) -->
                  <g fill="#34C759">
                    <rect x="220" y="8" width="4" height="20" rx="2"/>
                    <rect x="235" y="4" width="4" height="28" rx="2"/>
                    <rect x="250" y="2" width="4" height="32" rx="2"/>
                    <rect x="265" y="6" width="4" height="24" rx="2"/>
                    <rect x="280" y="10" width="4" height="16" rx="2"/>
                    
                    <rect x="420" y="8" width="4" height="20" rx="2"/>
                    <rect x="435" y="4" width="4" height="28" rx="2"/>
                    <rect x="450" y="6" width="4" height="24" rx="2"/>
                    <rect x="465" y="10" width="4" height="16" rx="2"/>
                  </g>
                </g>
              </svg>
            </div>
            <div class="sr-channel-note">
              <span>Synchronized multi-channel alignment preserved. Zero destructive mono downmixing.</span>
            </div>
          </div>
        `;

      case "lossless":
        return `
          <div class="sr-feature-visual-box">
            <div class="sr-lossless-cards">
              <div class="sr-format-pill active-default">
                <div class="sr-format-badge">DEFAULT</div>
                <div class="sr-format-name">FLAC</div>
                <div class="sr-format-desc">Lossless compression. 45% less bandwidth, bit-for-bit acoustic parity.</div>
              </div>
              <div class="sr-format-pill optional-format">
                <div class="sr-format-badge neutral">OPTIONAL</div>
                <div class="sr-format-name">WAV</div>
                <div class="sr-format-desc">Uncompressed Linear PCM for legacy audio architectures.</div>
              </div>
            </div>
          </div>
        `;
    }
  }
}
