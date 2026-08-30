# SpeechReady Web (`speech-ready-web`)

The official public website for **SpeechReady**, an intelligent pre-processing engine that prepares audio before Speech-to-Text (STT) transcription.

This website is designed with an **Apple-inspired editorial storytelling approach**: ultra-clean typography, ample whitespace, progressive scroll disclosure, and a focus on empirical benchmarks and acoustic signal visualizations.

---

## 🌟 Key Capabilities & Structure

- **Narrative Scroll Architecture**: Seamless discovery of the problem, economic waste, empirical benchmarks, and pre-processing pipeline without scroll hijacking.
- **Dynamic Benchmark Engine**: Fully data-driven benchmark comparison (`src/data/benchmarks.ts`) supporting profiles such as *Telephony*, *Generic*, *Meetings*, and *Noisy*.
- **Decoupled Configuration**: All links (RapidAPI, GitHub, LinkedIn, X) and author metadata reside in a single file (`src/config.ts`).
- **Static & Fast**: Built with Vite and TypeScript. Zero backend, zero database, zero telemetry bloat.
- **GitHub Pages Ready**: Fully automated CI/CD deployment via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 📁 Project Structure

```text
speech-ready-web/
├── public/
│   ├── assets/
│   │   └── logo.svg            # Product brand logo SVG
│   └── favicon.svg             # Browser tab favicon SVG
│
├── src/
│   ├── main.ts                 # Application entrypoint & scroll observers
│   ├── styles.css              # Apple design system & responsive styling
│   ├── config.ts               # Central product config & external links
│   │
│   ├── components/
│   │   ├── Navbar.ts           # Frosted glass sticky header
│   │   ├── Hero.ts             # Hero stage & before/after waveform
│   │   ├── Problem.ts          # Duration billing & audio breakdown
│   │   ├── Metrics.ts          # High-impact typographic KPI grid
│   │   ├── Benchmarks.ts       # Profile selector & empirical metrics
│   │   ├── ProductStory.ts     # 6-step vertical processing narrative
│   │   ├── HowItWorks.ts       # Conceptual architecture & REST endpoints
│   │   ├── CTA.ts              # High-conversion RapidAPI CTA
│   │   └── Footer.ts           # Author bio & conditional social links
│   │
│   ├── visuals/
│   │   └── Waveform.ts         # Vector SVG waveform visual engine
│   │
│   └── data/
│       ├── metrics.ts          # Top-level KPIs & transparency status
│       └── benchmarks.ts       # Empirical profile datasets (WER, RTF, Size)
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
│
├── index.html                  # HTML entry with OpenGraph & SEO tags
├── package.json                # Dependencies & build scripts
├── tsconfig.json               # TypeScript compiler config
├── vite.config.ts              # Vite configuration (base: "/speech-ready-web/")
├── DESIGN.md                   # Full design system & architectural specs
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

Clone the repository and install dependencies:

```bash
cd speech-ready-web
npm install
```

### Local Development

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:3000/speech-ready-web/` in your browser.

### Production Build

Compile TypeScript and generate the static bundle into `./dist`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

### 1. Configure RapidAPI & Social Links
Open [`src/config.ts`](./src/config.ts) to set your product links:

```typescript
export const config = {
  productName: "SpeechReady",
  tagline: "Prepare audio for Speech-to-Text.",
  rapidApiUrl: "https://rapidapi.com/joseescalantegalan/api/speechready",
  githubUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/josescal/",
  xUrl: "https://x.com/josescal77",
};
```
> **Note**: If `githubUrl`, `linkedinUrl`, `xUrl`, or `rapidApiUrl` is empty (`""`), the corresponding button or footer link will automatically be omitted from the UI.

---

### 2. Update Key Performance Indicators (KPIs)
Edit [`src/data/metrics.ts`](./src/data/metrics.ts) to update the high-level metrics cards:

```typescript
{
  id: "duration-reduction",
  value: "25%",
  label: "Less Audio Duration",
  description: "Average non-speech dead air compressed without truncating phonemes.",
  status: "verified" // "placeholder" | "demo" | "verified"
}
```

---

### 3. Update Empirical Benchmark Data
Edit [`src/data/benchmarks.ts`](./src/data/benchmarks.ts) to feed real test results across all acoustic profiles (*Telephony*, *Generic*, *Meeting*, *Noisy*):

```typescript
{
  id: "telephony",
  name: "Telephony / Call Center",
  description: "Dual-channel customer service calls with hold music and pauses.",
  isPlaceholder: false, // Switch to false when verified
  sampleCount: 100,
  durationBeforeMinutes: 100,
  durationAfterMinutes: 74,
  durationReductionPercent: 26.0,
  rawFormat: "WAV (Linear PCM)",
  rawSizeMb: 100,
  optimizedFormat: "FLAC (Lossless)",
  optimizedSizeMb: 52,
  sizeReductionPercent: 48.0,
  werBeforePercent: 8.4,
  werAfterPercent: 8.1,
  processingRtf: 0.038,
  throughputMultiplier: "26.3x faster than real-time",
  keyInsight: "Silences during customer lookup compressed without dropping dialogue."
}
```
*The UI will dynamically recalculate comparison bars, difference tags, and WER metrics automatically.*

---

### 4. Customizing Brand Logo & Favicon
- Replace `public/assets/logo.svg` with your vector or raster logo.
- Replace `public/favicon.svg` with your website favicon.

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured to build and deploy to GitHub Pages automatically via GitHub Actions.

### Setup Instructions:
1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/<USERNAME>/speech-ready-web.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push any commit to `main`, and the GitHub Actions workflow will automatically build and publish the site to:
   `https://<USERNAME>.github.io/speech-ready-web/`

### Changing the Base Path
If you deploy to a custom domain (e.g. `https://speechready.com/`) instead of a GitHub Pages subpath:
1. Open [`vite.config.ts`](./vite.config.ts).
2. Change `base: "/speech-ready-web/"` to `base: "/"`.

---

## ♿ Accessibility & Performance

- **Zero Heavy Frameworks**: Pure TypeScript & CSS, achieving maximum Lighthouse performance.
- **Respects Motion Preferences**: Full `@media (prefers-reduced-motion: reduce)` support.
- **High Contrast**: WCAG 2.1 AA compliant typography and colors.
- **Clean Keyboard Navigation**: Clear `:focus-visible` states across all tabs and interactive controls.

---

## 📄 License & Privacy

This public repository contains **no proprietary backend logic, API keys, credentials, or private datasets**. SpeechReady pre-processing algorithms and Cloud Run backend implementations are maintained in a separate private repository.
