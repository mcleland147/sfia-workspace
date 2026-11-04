import type { Metadata } from "next";
import "./globals.css";
import { PRODUCT_VERSIONING } from "@/lib/product-version";

export const metadata: Metadata = {
  title: "SFIA Studio",
  description: "SFIA Studio Next — accès, sas et continuité",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen flex">
          <aside
            className="hidden md:flex flex-col gap-4 p-4 border-r border-[var(--line)]"
            style={{ width: 246, background: "var(--rail)" }}
            aria-label="Navigation Studio"
          >
            <div>
              <div className="text-lg font-semibold tracking-tight">SFIA Studio</div>
              <div className="text-xs muted mt-1">
                {PRODUCT_VERSIONING.releaseStatus} · STABLE {PRODUCT_VERSIONING.productStableVersion}
              </div>
            </div>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/portfolio">Portefeuille</a>
              <a href="/login">Connexion</a>
            </nav>
            <p className="text-xs muted mt-auto">
              Nora n&apos;est pas globale. Le login Studio n&apos;accorde aucun droit de dépôt Git.
            </p>
          </aside>
          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
