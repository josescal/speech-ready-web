# SpeechReady Web — Design System & Narrative Architecture

> **Document Version**: 1.0.0  
> **Target Audience**: Developers, Designers & Product Stakeholders  
> **Deployment Target**: GitHub Pages (`/speech-ready-web/`)  
> **Aesthetic Archetype**: Apple-inspired Editorial & Product Storytelling  

---

## 1. Narrative & Story Arc

The core objective of `speech-ready-web` is not to act as a standard SaaS feature grid, but as a linear, compelling narrative that takes an audio/STT engineer or product owner through an inescapable realization:

```
[1. AWARENESS]      "STT charges per minute, but real audio is full of dead air & noise."
       ↓
[2. THE COST]       "I am literally paying transcription fees for silence and unwanted latency."
       ↓
[3. THE PROOF]      "SpeechReady measured real-world audio datasets. Here are the hard numbers."
       ↓
[4. THE ENGINE]     "SpeechReady prepares audio: detects speech, compresses dead air, denoises, normalizes, preserves channels."
       ↓
[5. INTEGRATION]    "Drop-in pre-processing before Whisper, Deepgram, Google Speech, AssemblyAI, AWS Transcribe, or self-hosted models."
       ↓
[6. CONVERSION]     "Available immediately on RapidAPI. Zero backend lock-in."
```

---

## 2. Textual Wireframe

```
+-----------------------------------------------------------------------------------+
|  [Logo] SpeechReady                                      [Benchmarks] [RapidAPI]  |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                    HERO                                           |
|                     Prepare audio for Speech-to-Text.                             |
|              Reduce dead air. Improve audio quality. Lower STT costs.             |
|                                                                                   |
|                    [ Try on RapidAPI ]    [ See benchmarks ↓ ]                    |
|                                                                                   |
|    BEFORE  ||||||||||..........|||||||||||||..........||||||||                    |
|    AFTER   ||||||||||..|||||||||||||..||||||||                                    |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                THE PROBLEM                                        |
|                     STT providers charge for audio duration.                      |
|                     Not all of that audio contains speech.                        |
|                                                                                   |
|    [  10:00 Total File Duration  ]                                                |
|    ├── 06:45  Speech (Useful signal)      ████████████████████████                |
|    ├── 02:30  Dead Air (Wasted money)     ░░░░░░░░░                               |
|    └── 00:45  Noise / Unusable audio      ▒▒▒                                     |
|                                                                                   |
|            "You're paying to process time that contains no speech."               |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                IMPACT / KPIS                                      |
|                                                                                   |
|         -25%                    -45%                     0%                       |
|   Audio Duration          Output File Size       Quality Loss (Lossless)          |
|                                                                                   |
|   [ DEMO DATA / BENCHMARK IN PROGRESS INDICATOR ]                                 |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                 BENCHMARKS                                        |
|                          "Measured, not promised."                                |
|                                                                                   |
|   [ Profile Selector: Generic | Telephony | Meeting | Noisy ]                     |
|                                                                                   |
|   BEFORE (Raw Audio)                  AFTER (SpeechReady)                         |
|   Duration:    100 min                Duration:    74 min (-26%)                  |
|   Size:        100 MB (WAV)           Size:        54 MB (FLAC)                   |
|   WER:         8.4%                   WER:         8.2%                           |
|   Processing:  0.04x Real-time (Ultra-fast C++ / SIMD pipeline)                   |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                           WHAT SPEECHREADY DOES                                   |
|                "SpeechReady prepares your audio before STT."                      |
|                                                                                   |
|   Step 1: DETECT SPEECH       (VAD waveform segmentation)                         |
|   Step 2: COMPRESS DEAD AIR   (Interactive timeline shrinkage)                    |
|   Step 3: CLEAN AUDIO         (Noise floor dampening)                             |
|   Step 4: NORMALIZE LEVELS    (LUFS / Peak alignment)                             |
|   Step 5: PRESERVE CHANNELS   (Agent / Customer multi-channel intact)             |
|   Step 6: LOSSLESS OUTPUT     (FLAC default / WAV optional)                       |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                HOW IT WORKS                                       |
|                                                                                   |
|     [ Your Audio ] ──> [ SpeechReady API ] ──> [ STT-Ready Audio ] ──> [ Any STT ]|
|                                                                                   |
|   POST /v1/analyze                                                                |
|   POST /v1/optimize                                                               |
|                                                                                   |
|   curl -X POST https://rapidapi.com/.../v1/optimize \                             |
|     -F "audio=@call.wav" -F "profile=telephony" -o optimized.flac                 |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                RAPIDAPI CTA                                       |
|                 Your STT pipeline doesn't need more audio.                        |
|                           It needs better audio.                                  |
|                                                                                   |
|                     [ Open SpeechReady on RapidAPI ]                              |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                   FOOTER                                          |
|   Built by José Manuel Escalante.  •  [LinkedIn] [GitHub] [X]                     |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

---

## 3. Section-by-Section Design & Scroll Behavior

### 3.1 Sticky Navigation Bar
- **Visuals**: Frosted glass (`backdrop-filter: blur(20px)`), ultra-thin bottom border (`rgba(0,0,0,0.06)`), 60px height.
- **Left**: SpeechReady wordmark + iconic stylized waveform symbol.
- **Right**: Clean text links: "Benchmarks", "How It Works", and a subtle pill CTA "Try on RapidAPI".

### 3.2 Hero Section (100vh / Minimalist Stage)
- **Concept**: Maximum breathing space.
- **Headline**: `Prepare audio for Speech-to-Text.` rendered in fluid typography (`clamp(2.5rem, 6vw, 5.5rem)`), high contrast, tightly tracked (`-0.03em`).
- **Subheadline**: Three clean bullets/phrases with muted color:
  `Reduce dead air. Improve audio quality. Lower STT costs.`
- **Hero Transformation Visual**: An interactive/scroll-linked SVG waveform showing a raw audio track containing long periods of dead air (`BEFORE`), transitioning smoothly to the packed, trimmed audio stream (`AFTER`).
- **CTAs**:
  - Primary: `Try SpeechReady on RapidAPI` (Dark obsidian pill button with gentle hover lift).
  - Secondary: `See the benchmarks ↓` (Ghost text button with subtle down chevron).

### 3.3 The Problem Section
- **Concept**: Visually revealing the economic & computational waste.
- **Headline**: `STT providers charge for audio duration. Not all of that audio contains speech.`
- **Visual Breakdown Card**:
  - A clean segmented bar representing a 10-minute audio file.
  - Interactive breakdown:
    - **Speech (6:45)**: Crisp primary blue / dark charcoal.
    - **Dead Air (2:30)**: Faint dotted/dashed neutral bar — "paying for nothing".
    - **Noise (0:45)**: Jagged red/amber subdued tint.
- **Punchline**: `You're paying to process time that contains no speech. SpeechReady prepares audio before STT.`

### 3.4 Impact / KPIs Section
- **Concept**: Huge Apple-style typography numbers that fade and slide up (`translateY(24px) -> 0`) as they cross the viewport.
- **Metrics Grid**:
  - **-25%**: Less audio duration
  - **-45%**: Smaller output files (FLAC vs WAV)
  - **0%**: Quality loss (Lossless preservation)
- **Status Indicator**: Clear, discreet pill badge: `[ Placeholder / Synthetic Benchmark ]` or `[ Verified Benchmark ]` driven directly by `src/data/metrics.ts`.

### 3.5 Benchmarks Section ("Measured, not promised")
- **Concept**: Scientific, clean, transparent.
- **Profile Selector**: Segmented tab control:
  `[ Generic | Telephony | Meeting | Noisy ]`
- **Comparison Visuals**:
  - Side-by-side Before/After cards with proportional bar meters.
  - Duration: `100 min` → `74 min` (`-26% reduction`).
  - Size & Format: `100 MB WAV` → `54 MB FLAC` (`-46% bandwidth`).
  - Accuracy / WER: `8.4% WER` → `8.2% WER` (Equal or improved accuracy).
  - Processing Speed: `0.04x Real-time` (Over 25x faster than real-time playback).
- **Extensible Architecture**: Modifying `src/data/benchmarks.ts` instantly recalculates and re-renders all visual metrics without modifying any DOM/CSS logic.

### 3.6 What SpeechReady Does (Vertical Step-by-Step Story)
Rather than a cluttered 6-card grid, this section unfolds as a vertical timeline with rich custom SVG visual demonstrations for each step:

1. **DETECT SPEECH**: High-accuracy Voice Activity Detection highlighting exact speech boundaries vs acoustic background.
2. **COMPRESS DEAD AIR**: Compresses uninformative silences without clipping sentence onsets or trailing word boundaries.
3. **CLEAN AUDIO**: High-pass and gentle spectral conditioning that attenuates low-end rumble and line hum.
4. **NORMALIZE LEVELS**: Intelligent loudness leveling so whispered phrases and loud utterances reach STT engines at optimal input levels.
5. **PRESERVE CHANNELS**: Multi-channel telephony and conference audio (Agent on Ch 1, Customer on Ch 2) remain multi-channel. Zero destructive downmixing.
6. **LOSSLESS OUTPUT**: Delivers FLAC by default (for massive bandwidth savings) or uncompressed WAV upon request. Zero lossy compression artifacts.

### 3.7 How It Works Section
- **Flow Pipeline**: Minimal horizontal/vertical sequence:
  `[ Raw Audio ] → [ SpeechReady API ] → [ Lossless STT-Ready ] → [ Deepgram / Whisper / Google / Assembly ]`
- **Endpoints & Code Snippet**:
  - `POST /v1/analyze`: Returns acoustic metadata, speech ratio, silence percentage, clipping stats.
  - `POST /v1/optimize`: Returns the cleaned, compressed, lossless audio file.
  - Clean, copyable `curl` tab with instant snippet syntax highlighting.

### 3.8 Conversion Section (CTA RapidAPI)
- **Fullscreen High-Impact Focus**:
  - Large headline: `Your STT pipeline doesn't need more audio. It needs better audio.`
  - Direct action: `Open SpeechReady on RapidAPI`
  - Zero friction, zero complex signups.

### 3.9 Minimalist Footer
- Built by **José Manuel Escalante**.
- Dynamic social links (`LinkedIn`, `GitHub`, `X`) configured centrally in `src/config.ts`.
- Automatically omitted if URLs are blank.

---

## 4. Visual Design System

### 4.1 Color Palette
- **Background Base**: `#FFFFFF` (Pure white) with `#F5F5F7` (Apple off-white/canvas) for elevated cards.
- **Surface Elevation**: `#FFFFFF` with `box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)`.
- **Text Primary**: `#1D1D1F` (Deep obsidian, soft black).
- **Text Secondary / Muted**: `#86868B` (Refined neutral gray).
- **Text Tertiary**: `#A1A1A6` (Subtle metadata).
- **Accent Blue (SpeechReady Signature)**: `#0071E3` (Vibrant electric cobalt) / `#0077ED` (Hover).
- **Accent Background**: `rgba(0, 113, 227, 0.08)`.
- **Success / Efficiency Tint**: `#34C759` / `#30D158`.
- **Border Neutral**: `rgba(0, 0, 0, 0.08)` / `#E5E5EA`.

### 4.2 Typography Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```
- **Headline Display**: `clamp(2.75rem, 7vw, 5.5rem)`, weight `700`, letter-spacing `-0.035em`, line-height `1.05`.
- **Headline Section**: `clamp(2rem, 4.5vw, 3.5rem)`, weight `600`, letter-spacing `-0.025em`, line-height `1.15`.
- **Subheadline**: `clamp(1.15rem, 2vw, 1.5rem)`, weight `400`, letter-spacing `-0.01em`, line-height `1.4`.
- **KPI Number**: `clamp(3.5rem, 8vw, 6.5rem)`, weight `700`, letter-spacing `-0.04em`, line-height `1.0`.
- **Body Text**: `1.0625rem (17px)`, weight `400`, line-height `1.6`, letter-spacing `-0.01em`.
- **Mono / Code**: `SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace`, size `0.875rem`.

---

## 5. Waveform Component Visual System

The Waveform component (`src/visuals/Waveform.ts`) creates scalable, resolution-independent vector graphics (SVG) to represent audio signals in multiple states:

1. **Standard Waveform**: Modulated vertical bars or continuous Bézier curve representing speech bursts.
2. **Dead Air Representation**: Subdued low-opacity dots or thin baseline representing silence between speech bursts.
3. **Compressed State**: Smooth visual animation bringing speech packets closer together, collapsing dead air gaps.
4. **Noise Floor Representation**: Jagged background noise floor around waveform that fades out when "Clean Audio" is activated.
5. **Multi-Channel Display**: Dual aligned tracks (Channel 1: Agent, Channel 2: Customer) highlighting independent speech presence without phase collision.

---

## 6. Technical Architecture & Simplicity

- **Zero Heavy Frameworks**: Pure TypeScript, HTML5 semantic elements, modern CSS with custom properties.
- **Fast Build & Bundling**: Vite with instant HMR and static optimization.
- **IntersectionObserver Engine**: Lightweight scroll triggers that add `.is-visible` classes with minimal CPU overhead.
- **GitHub Pages Ready**:
  - `vite.config.ts` configured with `base: "/speech-ready-web/"`.
  - Automated `.github/workflows/deploy.yml` on push to `main`.
- **Data Decoupling**:
  - `src/config.ts` for all external links & product name.
  - `src/data/metrics.ts` for top-level KPIs and verification status.
  - `src/data/benchmarks.ts` for profile datasets (Telephony, Meeting, Generic, Noisy).

---

## 7. Accessibility & Performance Checklist

- [x] **Semantic HTML5**: Proper landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- [x] **Keyboard Navigable**: Visible outline focus rings (`:focus-visible`).
- [x] **High Contrast**: Compliant with WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large display text).
- [x] **Reduced Motion**: Full `@media (prefers-reduced-motion: reduce)` support with instantaneous transitions and non-animated default states.
- [x] **Zero Telemetry/Tracking Bloat**: No third-party trackers, no cookies, no privacy banners required.
- [x] **SEO Optimized**: Standard OpenGraph, Twitter Cards, description, structured headings, favicon.
