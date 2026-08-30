/**
 * SpeechReady Web - Central Configuration
 * All external URLs and product metadata are configured here.
 * If a social or API URL is left empty, the UI will automatically omit the link.
 */

export interface AppConfig {
  productName: string;
  tagline: string;
  rapidApiUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  xUrl: string;
  contactEmail?: string;
}

export const config: AppConfig = {
  productName: "SpeechReady",
  tagline: "Prepare audio for Speech-to-Text.",
  rapidApiUrl: "https://rapidapi.com/joseescalantegalan/api/speechready",
  githubUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/josescal/",
  xUrl: "https://x.com/josescal77",
};
