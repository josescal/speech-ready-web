/**
 * SpeechReady Web - Product Story Section Component
 * Vertical storytelling sequence detailing the pre-processing pipeline.
 */

import { Waveform } from "../visuals/Waveform";

export function renderProductStory(): string {
  return `
    <section class="sr-story-section sr-section" id="features" aria-labelledby="story-headline">
      <div class="sr-container sr-story-container">
        
        <!-- Section Intro -->
        <div class="sr-section-header" data-reveal="fade-up">
          <span class="sr-section-eyebrow">The Processing Engine</span>
          <h2 class="sr-section-headline" id="story-headline">
            SpeechReady prepares your audio before STT.
          </h2>
          <p class="sr-section-subhead">
            A non-destructive pre-processing pipeline engineered specifically for speech recognition models.
          </p>
        </div>

        <!-- Vertical Story Sequence -->
        <div class="sr-story-timeline">

          <!-- 1. DETECT SPEECH -->
          <article class="sr-story-step" data-reveal="fade-up">
            <div class="sr-step-number-wrap">
              <span class="sr-step-number">01</span>
            </div>
            <div class="sr-step-content">
              <span class="sr-step-tag">Voice Activity Detection</span>
              <h3 class="sr-step-title">Detect where speech actually happens.</h3>
              <p class="sr-step-desc">
                High-resolution acoustic segmentation distinguishes phonemes and utterances from room ambiance, line tone, and breath noises with sub-millisecond precision.
              </p>
            </div>
            <div class="sr-step-visual">
              ${Waveform.renderFeatureVisual("vad")}
            </div>
          </article>

          <!-- 2. COMPRESS DEAD AIR -->
          <article class="sr-story-step" data-reveal="fade-up">
            <div class="sr-step-number-wrap">
              <span class="sr-step-number">02</span>
            </div>
            <div class="sr-step-content">
              <span class="sr-step-tag">Temporal Compaction</span>
              <h3 class="sr-step-title">Compress long periods where nobody is speaking.</h3>
              <p class="sr-step-desc">
                Extended pauses, hold times, and idle silences are gently compressed down into uniform 150ms safety buffers—maintaining natural cadence without paying for empty minutes.
              </p>
            </div>
            <div class="sr-step-visual">
              ${Waveform.renderFeatureVisual("compress")}
            </div>
          </article>

          <!-- 3. CLEAN AUDIO -->
          <article class="sr-story-step" data-reveal="fade-up">
            <div class="sr-step-number-wrap">
              <span class="sr-step-number">03</span>
            </div>
            <div class="sr-step-content">
              <span class="sr-step-tag">Spectral Conditioning</span>
              <h3 class="sr-step-title">Reduce noise while preserving speech.</h3>
              <p class="sr-step-desc">
                Attenuates low-frequency HVAC rumble, electrical 50/60Hz hum, and microphone pops without introducing robotic phasing or aggressive gating artifacts.
              </p>
            </div>
            <div class="sr-step-visual">
              ${Waveform.renderFeatureVisual("denoise")}
            </div>
          </article>

          <!-- 4. NORMALIZE LEVELS -->
          <article class="sr-story-step" data-reveal="fade-up">
            <div class="sr-step-number-wrap">
              <span class="sr-step-number">04</span>
            </div>
            <div class="sr-step-content">
              <span class="sr-step-tag">Loudness Calibration</span>
              <h3 class="sr-step-title">Normalize levels for more predictable STT input.</h3>
              <p class="sr-step-desc">
                Brings quiet murmurs and loud bursts into the acoustic sweet spot expected by modern deep learning acoustic models and transformer decoders.
              </p>
            </div>
            <div class="sr-step-visual">
              ${Waveform.renderFeatureVisual("normalize")}
            </div>
          </article>

          <!-- 5. PRESERVE CHANNELS -->
          <article class="sr-story-step" data-reveal="fade-up">
            <div class="sr-step-number-wrap">
              <span class="sr-step-number">05</span>
            </div>
            <div class="sr-step-content">
              <span class="sr-step-tag">Multi-Channel Architecture</span>
              <h3 class="sr-step-title">Multi-channel audio stays multi-channel.</h3>
              <p class="sr-step-desc">
                No automatic downmixing to mono. Agent and caller channels remain strictly separated and temporally synchronized for downstream diarization and speaker role classification.
              </p>
            </div>
            <div class="sr-step-visual">
              ${Waveform.renderFeatureVisual("multichannel")}
            </div>
          </article>

          <!-- 6. LOSSLESS OUTPUT -->
          <article class="sr-story-step" data-reveal="fade-up">
            <div class="sr-step-number-wrap">
              <span class="sr-step-number">06</span>
            </div>
            <div class="sr-step-content">
              <span class="sr-step-tag">Output Encoding</span>
              <h3 class="sr-step-title">Lossless output. No extra degradation before STT.</h3>
              <p class="sr-step-desc">
                Delivers bit-exact FLAC by default for maximum bandwidth efficiency, or standard WAV on request. Zero lossy compression generation loss.
              </p>
            </div>
            <div class="sr-step-visual">
              ${Waveform.renderFeatureVisual("lossless")}
            </div>
          </article>

        </div>

      </div>
    </section>
  `;
}
