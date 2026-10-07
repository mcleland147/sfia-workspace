import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

/**
 * P3 Figma primary UI family (file m4g8j0gNbEzfIuH6S9AZJF — Geist on 46:2 /
 * 51:2 / 63:39 / 164:3 / 190:551). Loaded via next/font/google (Next 15).
 */
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SFIA Studio",
  description:
    "SFIA Studio — Delivery P0 frontend (fixtures locales, 4 écrans Figma)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
