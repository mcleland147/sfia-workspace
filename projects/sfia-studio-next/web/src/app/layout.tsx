import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import "../components/figma/tokens.css";
import { StudioShell } from "@/components/shell/StudioShell";

export const metadata: Metadata = {
  title: "SFIA Studio",
  description: "SFIA Studio Next — accès, sas et continuité",
};

/**
 * No next/font/google: CI runners intermittently fail Google font downloads
 * (webpack null deref / turbopack "exactly one entry"). Stack in globals.css
 * still prefers Inter when present, then system UI.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Suspense
          fallback={
            <div className="min-h-screen flex">
              <main className="flex-1 p-4 md:p-8">{children}</main>
            </div>
          }
        >
          <StudioShell>{children}</StudioShell>
        </Suspense>
      </body>
    </html>
  );
}
