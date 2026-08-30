/**
 * SpeechReady Web - The Problem Section Component
 * Illustrates transcription duration billing vs actual speech density.
 */

export function renderProblem(): string {
  return `
    <section class="sr-problem-section sr-section" id="problem" aria-labelledby="problem-headline">
      <div class="sr-container sr-problem-container">
        
        <!-- Eyebrow label -->
        <span class="sr-section-eyebrow" data-reveal="fade-up">The Inefficiency</span>

        <!-- Problem Statement Headline -->
        <h2 class="sr-section-headline" id="problem-headline" data-reveal="fade-up">
          STT providers charge for audio duration.
          <span class="sr-headline-dim">Not all of that audio contains speech.</span>
        </h2>

        <!-- Visual Audio Breakdown Card -->
        <div class="sr-problem-card" data-reveal="fade-up">
          
          <div class="sr-breakdown-header">
            <div class="sr-total-file">
              <span class="sr-total-label">SAMPLE AUDIO RECORDING</span>
              <span class="sr-total-duration">10:00 Total Duration</span>
            </div>
            <span class="sr-example-disclaimer" title="Illustrative sample representation">Visual Example Only</span>
          </div>

          <!-- Multi-segment visual bar -->
          <div class="sr-segmented-bar-wrap" role="img" aria-label="Audio duration breakdown: 67.5% speech, 25% dead air, 7.5% noise">
            <div class="sr-segment speech-segment" style="width: 67.5%;" title="6:45 Speech">
              <span class="sr-segment-label">6:45 Speech</span>
            </div>
            <div class="sr-segment dead-air-segment" style="width: 25.0%;" title="2:30 Dead Air">
              <span class="sr-segment-label">2:30 Dead Air</span>
            </div>
            <div class="sr-segment noise-segment" style="width: 7.5%;" title="0:45 Noise / Rumble">
              <span class="sr-segment-label">0:45 Noise</span>
            </div>
          </div>

          <!-- Breakdown Legend & Key Stats -->
          <div class="sr-breakdown-details">
            <div class="sr-detail-item">
              <div class="sr-detail-indicator speech-dot"></div>
              <div class="sr-detail-content">
                <div class="sr-detail-time">06:45 <span class="sr-detail-pct">(67.5%)</span></div>
                <div class="sr-detail-name">Useful Speech Signal</div>
                <p class="sr-detail-desc">Phonemes, dialogue, and actual linguistic information needed by STT.</p>
              </div>
            </div>

            <div class="sr-detail-item warning-highlight">
              <div class="sr-detail-indicator dead-air-dot"></div>
              <div class="sr-detail-content">
                <div class="sr-detail-time">02:30 <span class="sr-detail-pct">(25.0%)</span></div>
                <div class="sr-detail-name">Dead Air & Long Silences</div>
                <p class="sr-detail-desc">Hold times, turn-taking pauses, and dead silence billed at full rates.</p>
              </div>
            </div>

            <div class="sr-detail-item">
              <div class="sr-detail-indicator noise-dot"></div>
              <div class="sr-detail-content">
                <div class="sr-detail-time">00:45 <span class="sr-detail-pct">(7.5%)</span></div>
                <div class="sr-detail-name">Acoustic Noise / Hum</div>
                <p class="sr-detail-desc">Background rumble, line hiss, and low-frequency interference.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Problem Punchline -->
        <div class="sr-problem-punchline" data-reveal="fade-up">
          <p class="sr-punchline-lead">
            You're paying to process time that contains no speech.
          </p>
          <p class="sr-punchline-solution">
            SpeechReady prepares audio <em>before</em> STT.
          </p>
        </div>

      </div>
    </section>
  `;
}
