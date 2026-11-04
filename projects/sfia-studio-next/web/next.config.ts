import type { NextConfig } from "next";

/**
 * Operator DEV (:3100) keeps default `.next`.
 * Playwright E2E runner sets STUDIO_E2E=1 → dedicated `.next-e2e` cache.
 */
const isE2E = process.env.STUDIO_E2E === "1";

const nextConfig: NextConfig = {
  distDir: isE2E ? ".next-e2e" : ".next",
};

export default nextConfig;
