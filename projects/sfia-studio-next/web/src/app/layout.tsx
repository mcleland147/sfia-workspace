import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { StudioShell } from "@/components/shell/StudioShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SFIA Studio",
  description: "SFIA Studio Next — accès, sas et continuité",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
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
