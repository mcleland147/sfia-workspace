"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { PRODUCT_VERSIONING } from "@/lib/product-version";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  railStyle,
  resolveRailVariant,
} from "./studio-rail";

export function StudioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const surface = searchParams.get("surface");
  const variant = resolveRailVariant({ pathname, surface });
  const tokens = STUDIO_RAIL_VARIANTS[variant];
  const items = buildShellNav({ pathname, surface });

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
        <div>
          <div className="text-lg font-semibold tracking-tight studio-title">SFIA Studio</div>
          <div className="text-xs muted mt-1">
            {PRODUCT_VERSIONING.releaseStatus} · STABLE {PRODUCT_VERSIONING.productStableVersion}
          </div>
          <div className="text-[10px] muted mt-1 uppercase tracking-wide">{variant}</div>
        </div>
        <nav className="flex flex-col text-sm" style={{ gap: tokens.gap }} aria-label="Principal">
          {items.map((item) => {
            if (!item.href) {
              return (
                <span
                  key={item.key}
                  className="muted"
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
                className={item.active ? "font-semibold text-[var(--ink)]" : undefined}
                aria-current={item.active ? "page" : undefined}
                data-testid={`nav-${item.key}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="text-xs muted mt-auto">
          Nora n&apos;est pas globale. Le login Studio n&apos;accorde aucun droit de dépôt Git.
        </p>
      </aside>

      {/* Mobile: accessible equivalent of authorized surfaces */}
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

      <main className="flex-1 p-4 md:p-8 min-w-0">{children}</main>
    </div>
  );
}
