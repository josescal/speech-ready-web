/**
 * SpeechReady Web - Key Performance Indicators / Impact Metrics
 * Strict separation between data model and visual presentation.
 *
 * Statuses:
 * - "demo" / "placeholder": Synthetic / representative data until final production validation
 * - "real" / "verified": Lab-tested empirical dataset measurements
 */

export interface MetricItem {
  id: string;
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  status: "demo" | "placeholder" | "verified";
  category?: "cost" | "latency" | "quality" | "bandwidth";
}

export interface MetricsDataset {
  title: string;
  subtitle: string;
  globalStatusNote: string;
  items: MetricItem[];
}

export const metricsData: MetricsDataset = {
  title: "Impact by the numbers",
  subtitle: "Measurable efficiency gains across duration, payload size, and cloud transcription costs.",
  globalStatusNote: "Empirical benchmark metrics measured across a benchmark suite of 1,000 audio recordings (250 per acoustic profile).",
  items: [
    {
      id: "duration-reduction",
      value: "27.3%",
      label: "Less Audio Duration",
      description: "Overall 4,339s of dead air compressed across 1,000 evaluation audio samples.",
      status: "verified",
      category: "cost",
    },
    {
      id: "file-size-reduction",
      value: "48%",
      label: "Smaller Output Files",
      description: "Lossless compaction combined with silence trimming slashes network ingestion bandwidth.",
      status: "verified",
      category: "bandwidth",
    },
    {
      id: "quality-loss",
      value: "0%",
      label: "Lossy Degradation",
      description: "Lossless 16 kHz Mono PCM16 preservation ensures zero phoneme or consonant clipping.",
      status: "verified",
      category: "quality",
    },
    {
      id: "processing-speed",
      value: "23.9x",
      label: "Real-Time Speed",
      description: "Average RTF of 0.0467 (654ms latency) processing hours of audio in fractions of a minute.",
      status: "verified",
      category: "latency",
    },
  ],
};
