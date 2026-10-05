import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Hide the Next.js 15 floating « N » route indicator (default bottom-left).
  // It is framework-dev chrome, not Product Nora, and collides with the Mobile
  // Conversation composer at 390px (P5-S01 B1 / P3 Mobile 190:306 has no such control).
  devIndicators: false,
};

export default nextConfig;
