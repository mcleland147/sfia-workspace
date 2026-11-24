import type { NextConfig } from "next";

/**
 * Operator DEV (:3100) keeps default `.next`.
 * Playwright E2E runner sets STUDIO_E2E=1 → dedicated `.next-e2e` cache.
 */
const isE2E = process.env.STUDIO_E2E === "1";

const nextConfig: NextConfig = {
  distDir: isE2E ? ".next-e2e" : ".next",
  /**
   * Keep @cursor/sdk external — Turbopack otherwise tries to load
   * `*.js.LICENSE.txt` as modules ("Unknown module type") and breaks
   * realization/attempts routes on surface=execution.
   */
  serverExternalPackages: ["@cursor/sdk"],
};

export default nextConfig;
