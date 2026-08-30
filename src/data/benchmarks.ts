/**
 * SpeechReady Web - Benchmark Dataset & Profile Definitions
 *
 * Update this file with real empirical test results when available.
 * The UI automatically adapts to changes in values, units, and profiles.
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
  processingRtf: number; // Real-time factor (e.g. 0.04x = 25x faster than real-time)
  throughputMultiplier: string; // e.g. "25x faster than playback"
  
  // Profile specific highlights
  keyInsight: string;
}

export interface BenchmarkCollection {
  sectionTitle: string;
  sectionHeadline: string;
  sectionSubtitle: string;
  profiles: BenchmarkProfile[];
}

export const benchmarkData: BenchmarkCollection = {
  sectionTitle: "Empirical Benchmarks",
  sectionHeadline: "Measured, not promised.",
  sectionSubtitle: "Real-world audio streams evaluated across duration, transcription accuracy (WER), bandwidth, and throughput.",
  profiles: [
    {
      id: "telephony",
      name: "Telephony / Call Center",
      description: "Dual-channel customer service calls with hold music, pauses, and agent turn-taking.",
      isPlaceholder: true,
      sampleCount: 50,
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
      cerBeforePercent: 4.2,
      cerAfterPercent: 4.0,
      processingRtf: 0.038,
      throughputMultiplier: "26.3x faster than real-time",
      keyInsight: "Silences during customer lookup and hold intervals compressed without dropping any dialogue.",
    },
    {
      id: "generic",
      name: "Generic Speech",
      description: "Standard voice recordings, interviews, single-speaker dictations, and podcasts.",
      isPlaceholder: true,
      sampleCount: 40,
      durationBeforeMinutes: 100,
      durationAfterMinutes: 81,
      durationReductionPercent: 19.0,
      rawFormat: "WAV (Linear PCM)",
      rawSizeMb: 100,
      optimizedFormat: "FLAC (Lossless)",
      optimizedSizeMb: 58,
      sizeReductionPercent: 42.0,
      werBeforePercent: 6.2,
      werAfterPercent: 6.0,
      cerBeforePercent: 3.1,
      cerAfterPercent: 3.0,
      processingRtf: 0.035,
      throughputMultiplier: "28.5x faster than real-time",
      keyInsight: "Natural pause compaction with safety margins for zero-clipping of trailing consonants.",
    },
    {
      id: "meeting",
      name: "Meetings & Conferences",
      description: "Multi-party discussions with extensive pauses between slide transitions and speakers.",
      isPlaceholder: true,
      sampleCount: 30,
      durationBeforeMinutes: 100,
      durationAfterMinutes: 68,
      durationReductionPercent: 32.0,
      rawFormat: "WAV (Linear PCM)",
      rawSizeMb: 100,
      optimizedFormat: "FLAC (Lossless)",
      optimizedSizeMb: 46,
      sizeReductionPercent: 54.0,
      werBeforePercent: 11.8,
      werAfterPercent: 11.2,
      cerBeforePercent: 5.9,
      cerAfterPercent: 5.5,
      processingRtf: 0.042,
      throughputMultiplier: "23.8x faster than real-time",
      keyInsight: "Significant reduction in audio duration during screen sharing silences and slide reading.",
    },
    {
      id: "noisy",
      name: "Noisy Environments",
      description: "Field recordings, street audio, and vehicular acoustics with heavy background hum.",
      isPlaceholder: true,
      sampleCount: 35,
      durationBeforeMinutes: 100,
      durationAfterMinutes: 77,
      durationReductionPercent: 23.0,
      rawFormat: "WAV (Linear PCM)",
      rawSizeMb: 100,
      optimizedFormat: "FLAC (Lossless)",
      optimizedSizeMb: 54,
      sizeReductionPercent: 46.0,
      werBeforePercent: 14.5,
      werAfterPercent: 13.6,
      cerBeforePercent: 7.8,
      cerAfterPercent: 7.2,
      processingRtf: 0.045,
      throughputMultiplier: "22.2x faster than real-time",
      keyInsight: "Spectral conditioning removes rumble and HVAC noise floor, yielding measurable WER gains.",
    },
  ],
};
