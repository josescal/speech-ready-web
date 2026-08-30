/**
 * SpeechReady Web - Application Entrypoint
 * Orchestrates component assembly, IntersectionObserver scroll storytelling, and interactive tab logic.
 */

import "./styles.css";
import { renderNavbar } from "./components/Navbar";
import { renderHero } from "./components/Hero";
import { renderProblem } from "./components/Problem";
import { renderMetrics } from "./components/Metrics";
import { renderBenchmarks, initBenchmarkTabs } from "./components/Benchmarks";
import { renderProductStory } from "./components/ProductStory";
import { renderHowItWorks } from "./components/HowItWorks";
import { renderEnterprise } from "./components/Enterprise";
import { renderCTA } from "./components/CTA";
import { renderFooter } from "./components/Footer";

function initScrollObserver(): void {
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const elementsToReveal = document.querySelectorAll<HTMLElement>('[data-reveal="fade-up"]');

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elementsToReveal.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.1,
    }
  );

  elementsToReveal.forEach((el) => observer.observe(el));
}

function initApp(): void {
  const appContainer = document.getElementById("app");
  if (!appContainer) return;

  // Assemble full narrative page layout
  appContainer.innerHTML = `
    ${renderNavbar()}
    <main id="main-content">
      ${renderHero()}
      ${renderProblem()}
      ${renderMetrics()}
      ${renderBenchmarks()}
      ${renderProductStory()}
      ${renderHowItWorks()}
      ${renderCTA()}
      ${renderEnterprise()}
    </main>
    ${renderFooter()}
  `;

  // Initialize interactive components
  initBenchmarkTabs();
  initScrollObserver();
}

// Mount when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
