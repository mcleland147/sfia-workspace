"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { PRODUCT_VERSIONING } from "@/lib/product-version";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  parsePreparationId,
  parseProjectId,
  railStyle,
  resolveRailVariant,
} from "./studio-rail";

export function StudioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const surface = searchParams.get("surface");
  const variant = resolveRailVariant({ pathname, surface, searchParams });
  const tokens = STUDIO_RAIL_VARIANTS[variant];
  const items = buildShellNav({ pathname, surface });
  const projectId = parseProjectId(pathname);
  const preparationId = parsePreparationId(pathname);
  const inProductSpace = Boolean(projectId || preparationId);

  return (
    <div className="min-h-screen flex studio-shell" data-rail-variant={variant}>
      <aside
        className="hidden md:flex flex-col border-r border-[var(--line)]"
        style={railStyle(tokens)}
        aria-label="Navigation Studio"
        data-testid="studio-rail"
        data-rail-variant={variant}
        data-rail-component-id={tokens.railComponentId}
        data-rail-source-node={tokens.sourceNodeId}
        data-rail-width={tokens.widthPx}
        data-rail-fill={tokens.fill}
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-sm font-bold"
            style={{ background: "var(--fig-accent)", color: "white" }}
          >
            S
          </span>
          <div>
            <div className="text-base font-semibold tracking-tight studio-title">SFIA Studio</div>
            <div className="text-[10px] muted">
              {PRODUCT_VERSIONING.releaseStatus}
            </div>
          </div>
        </div>

        {projectId ? (
          <div className="mt-1">
            <div className="text-[10px] muted uppercase tracking-wide">Espace actif</div>
            <div className="text-sm font-medium mt-1 truncate" title={projectId}>
              Projet
            </div>
          </div>
        ) : null}

        <nav className="flex flex-col text-sm" style={{ gap: tokens.gap }} aria-label="Principal">
          {items.map((item) => {
            if (!item.href) {
              return (
                <span
                  key={item.key}
                  className="muted pl-2"
                  title={item.disabledReason}
                  data-testid={`nav-disabled-${item.key}`}
                >
                  {item.label}
                </span>
              );
            }
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-md px-2 py-1.5 ${
                  item.active
                    ? "font-semibold text-[var(--ink)] bg-[color-mix(in_srgb,var(--fig-accent)_22%,transparent)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
                aria-current={item.active ? "page" : undefined}
                data-testid={`nav-${item.key}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {!inProductSpace ? (
          <div className="mt-2">
            <div className="text-[10px] muted uppercase tracking-wide mb-2">Accès personnel</div>
            <Link href="/portfolio" className="text-sm muted block px-2 py-1">
              Tous les projets
            </Link>
            <Link href="/settings/integrations" className="text-sm muted block px-2 py-1" data-testid="nav-integrations">
              Intégrations
            </Link>
          </div>
        ) : null}

        {projectId ? (
          <div className="mt-2 space-y-1">
            <div className="text-[10px] muted uppercase tracking-wide mb-1">Accès directs</div>
            <Link
              href={`/projects/${projectId}?surface=document`}
              className="text-sm muted block px-2 py-1"
            >
              Documents Nora
            </Link>
            <Link
              href={`/projects/${projectId}?surface=git`}
              className="text-sm muted block px-2 py-1"
              data-testid="nav-sources-git"
            >
              Sources Git
            </Link>
          </div>
        ) : null}

        <div className="mt-auto flex items-center gap-2 pt-4 border-t border-[var(--line)]">
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
            style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
          >
            P
          </span>
          <div className="text-xs">
            <div className="font-medium">Pilote</div>
            <div className="muted">{inProductSpace ? "Connecté" : "Accès personnel"}</div>
          </div>
        </div>
      </aside>

      <nav
        className="md:hidden flex gap-3 p-3 border-b border-[var(--line)] text-sm overflow-x-auto"
        aria-label="Navigation Studio mobile"
        data-testid="studio-rail-mobile"
      >
        {items.map((item) => {
          if (!item.href) {
            return (
              <span key={item.key} className="muted whitespace-nowrap" title={item.disabledReason}>
                {item.label}
              </span>
            );
          }
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`whitespace-nowrap ${item.active ? "font-semibold" : ""}`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <main className="flex-1 p-4 md:p-7 min-w-0 bg-[radial-gradient(900px_420px_at_12%_-8%,#1a2433_0%,transparent_55%)]">
        {children}
      </main>
    </div>
  );
}
