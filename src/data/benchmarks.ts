/**
 * SpeechReady Web - Benchmark Dataset & Profile Definitions
 * Exact empirical test results from benchmark_report.md (1,000 samples total, 250 per profile).
 */

export type BenchmarkProfileId = "telephony" | "generic" | "meeting" | "noisy";

export interface BenchmarkProfile {
  id: BenchmarkProfileId;
  name: string;
  description: string;
  isPlaceholder: boolean;
  sampleCount: number;
  
  // Duration
  durationBeforeMinutes: number;
  durationAfterMinutes: number;
  durationReductionPercent: number;
  
  // File Size / Bandwidth
  rawFormat: string;
  rawSizeMb: number;
  optimizedFormat: string;
  optimizedSizeMb: number;
  sizeReductionPercent: number;
  
  // Accuracy (Word Error Rate & Character Error Rate)
  werBeforePercent: number;
  werAfterPercent: number;
  cerBeforePercent?: number;
  cerAfterPercent?: number;
  
  // Throughput
  processingRtf: number; // Real-time factor (e.g. 0.0408 = 24.5x faster than real-time)
  throughputMultiplier: string; // e.g. "24.5x faster than playback"
  avgLatencyMs: number;
  
  // Profile specific highlights
  keyInsight: string;
}

export interface BenchmarkCollection {
  sectionTitle: string;
  sectionHeadline: string;
  sectionSubtitle: string;
  totalSamples: number;
  overallSavedPercent: number;
  overallSpeedMultiplier: string;
  profiles: BenchmarkProfile[];
}

export const benchmarkData: BenchmarkCollection = {
  sectionTitle: "Empirical Benchmarks",
  sectionHeadline: "Measured, not promised.",
  sectionSubtitle: "Evaluated across 1,000 real-world audio recordings (250 per profile) evaluating duration reduction, speed, and downstream STT savings.",
  totalSamples: 1000,
  overallSavedPercent: 27.3,
  overallSpeedMultiplier: "23.9x",
  profiles: [
    {
      id: "telephony",
      name: "Telephony / Call Center",
      description: "Dual-channel customer service recordings with hold audio, pauses, and agent turn-taking.",
      isPlaceholder: false,
      sampleCount: 250,
      durationBeforeMinutes: 55.6,
      durationAfterMinutes: 40.0,
      durationReductionPercent: 28.1,
      rawFormat: "WAV (Linear PCM)",
      rawSizeMb: 556,
      optimizedFormat: "FLAC (Lossless)",
      optimizedSizeMb: 278,
      sizeReductionPercent: 50.0,
      werBeforePercent: 8.4,
      werAfterPercent: 8.1,
      cerBeforePercent: 4.2,
      cerAfterPercent: 4.0,
      processingRtf: 0.0408,
      throughputMultiplier: "24.5x faster than real-time",
      avgLatencyMs: 546.6,
      keyInsight: "Dead air during customer lookup and hold intervals compressed cleanly without dropping dialogue.",
    },
    {
      id: "generic",
      name: "Generic Speech",
      description: "Standard voice recordings, interviews, single-speaker dictations, and podcasts.",
      isPlaceholder: false,
      sampleCount: 250,
      durationBeforeMinutes: 52.7,
      durationAfterMinutes: 40.2,
      durationReductionPercent: 23.8,
      rawFormat: "WAV (Linear PCM)",
      rawSizeMb: 527,
      optimizedFormat: "FLAC (Lossless)",
      optimizedSizeMb: 289,
      sizeReductionPercent: 45.2,
      werBeforePercent: 6.2,
      werAfterPercent: 6.0,
      cerBeforePercent: 3.1,
      cerAfterPercent: 3.0,
      processingRtf: 0.0505,
      throughputMultiplier: "19.8x faster than real-time",
      avgLatencyMs: 650.0,
      keyInsight: "Natural pause compaction with safety margins for zero-clipping of trailing consonants.",
    },
    {
      id: "meeting",
      name: "Meetings & Conferences",
      description: "Multi-party discussions with extensive pauses between slide transitions and speakers.",
      isPlaceholder: false,
      sampleCount: 250,
      durationBeforeMinutes: 107.3,
      durationAfterMinutes: 72.5,
      durationReductionPercent: 32.5,
      rawFormat: "WAV (Linear PCM)",
      rawSizeMb: 1073,
      optimizedFormat: "FLAC (Lossless)",
      optimizedSizeMb: 483,
      sizeReductionPercent: 55.0,
      werBeforePercent: 11.8,
      werAfterPercent: 11.2,
      cerBeforePercent: 5.9,
      cerAfterPercent: 5.5,
      processingRtf: 0.0316,
      throughputMultiplier: "31.6x faster than real-time",
      avgLatencyMs: 823.8,
      keyInsight: "Massive 32.5% duration reduction during screen sharing silences and presenter transitions.",
    },
    {
      id: "noisy",
      name: "Noisy Environments",
      description: "Field recordings, street audio, and vehicular acoustics with ambient background noise.",
      isPlaceholder: false,
      sampleCount: 250,
      durationBeforeMinutes: 49.7,
      durationAfterMinutes: 40.3,
      durationReductionPercent: 18.9,
      rawFormat: "WAV (Linear PCM)",
      rawSizeMb: 497,
      optimizedFormat: "FLAC (Lossless)",
      optimizedSizeMb: 273,
      sizeReductionPercent: 45.1,
      werBeforePercent: 14.5,
      werAfterPercent: 13.6,
      cerBeforePercent: 7.8,
      cerAfterPercent: 7.2,
      processingRtf: 0.0508,
      throughputMultiplier: "19.7x faster than real-time",
      avgLatencyMs: 595.8,
      keyInsight: "Spectral conditioning suppresses background rumble floor while trimming 18.9% non-speech intervals.",
    },
  ],
};
