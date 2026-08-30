/**
 * SpeechReady Web - How It Works / Integration Section Component
 * Conceptual pipeline architecture and minimal API endpoint overview.
 */

export function renderHowItWorks(): string {
  return `
    <section class="sr-integration-section sr-section" id="how-it-works" aria-labelledby="how-it-works-headline">
      <div class="sr-container sr-integration-container">
        
        <!-- Section Header -->
        <div class="sr-section-header" data-reveal="fade-up">
          <span class="sr-section-eyebrow">Seamless Integration</span>
          <h2 class="sr-section-headline" id="how-it-works-headline">
            Use it before the STT provider you already use.
          </h2>
          <p class="sr-section-subhead">
            Drop SpeechReady into your existing ingestion pipeline with a single REST API call.
          </p>
        </div>

        <!-- Conceptual Flow Architecture -->
        <div class="sr-pipeline-diagram" data-reveal="fade-up">
          
          <div class="sr-flow-node">
            <div class="sr-node-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </div>
            <div class="sr-node-title">Your Audio</div>
            <div class="sr-node-desc">Raw telephony, meeting, or voice files</div>
          </div>

          <div class="sr-flow-connector">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>

          <div class="sr-flow-node highlight-node">
            <div class="sr-node-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071E3" stroke-width="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <div class="sr-node-title accent">SpeechReady</div>
            <div class="sr-node-desc">VAD compaction, cleanup & normalization</div>
          </div>

          <div class="sr-flow-connector">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>

          <div class="sr-flow-node">
            <div class="sr-node-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34C759" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="sr-node-title">STT-Ready Audio</div>
            <div class="sr-node-desc">Lossless FLAC/WAV, zero dead air</div>
          </div>

          <div class="sr-flow-connector">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>

          <div class="sr-flow-node">
            <div class="sr-node-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div class="sr-node-title">Your STT Provider</div>
            <div class="sr-node-desc">Whisper, Deepgram, Google, AssemblyAI, AWS</div>
          </div>

        </div>

        <!-- Two Endpoints Card Grid -->
        <div class="sr-endpoints-grid">
          
          <!-- ANALYZE -->
          <div class="sr-endpoint-card" data-reveal="fade-up">
            <div class="sr-endpoint-header">
              <span class="sr-http-method post">POST</span>
              <code class="sr-endpoint-path">/v1/analyze</code>
            </div>
            <h3 class="sr-endpoint-title">Analyze audio before processing</h3>
            <p class="sr-endpoint-desc">
              Extract acoustic insights, speech ratio, silence distribution, peak levels, and STT readiness metrics without modifying the file.
            </p>
            <div class="sr-endpoint-tags">
              <span>Speech Duration</span>
              <span>Dead Air Ratio</span>
              <span>Clipping Detection</span>
              <span>Channel Layout</span>
            </div>
          </div>

          <!-- OPTIMIZE -->
          <div class="sr-endpoint-card" data-reveal="fade-up">
            <div class="sr-endpoint-header">
              <span class="sr-http-method post">POST</span>
              <code class="sr-endpoint-path">/v1/optimize</code>
            </div>
            <h3 class="sr-endpoint-title">Optimize & get lossless STT-ready audio</h3>
            <p class="sr-endpoint-desc">
              Execute full pipeline: compress dead air, attenuate ambient noise, normalize loudness levels, and export to lossless FLAC or WAV.
            </p>
            <div class="sr-endpoint-tags">
              <span>FLAC Default</span>
              <span>WAV Optional</span>
              <span>Multi-Channel Safe</span>
              <span>Ultra-Fast RTF</span>
            </div>
          </div>

        </div>

        <!-- Single Short Curl Example -->
        <div class="sr-code-showcase" data-reveal="fade-up">
          <div class="sr-code-header">
            <div class="sr-terminal-dots">
              <span></span><span></span><span></span>
            </div>
            <span class="sr-code-filename">Quickstart Execution</span>
            <span class="sr-code-lang">cURL</span>
          </div>
          <pre class="sr-code-body"><code><span class="sr-token-cmd">curl</span> -X POST "https://speechready.p.rapidapi.com/v1/optimize" \
  -H "X-RapidAPI-Key: YOUR_API_KEY" \
  -H "X-RapidAPI-Host: speechready.p.rapidapi.com" \
  -F <span class="sr-token-str">"audio=@call_recording.wav"</span> \
  -F <span class="sr-token-str">"profile=telephony"</span> \
  -F <span class="sr-token-str">"output_format=flac"</span> \
  -o <span class="sr-token-out">optimized_call.flac</span></code></pre>
        </div>

      </div>
    </section>
  `;
}
