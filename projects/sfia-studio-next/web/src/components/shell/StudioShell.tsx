"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  runOpenPreparation,
  subscribeOpenPreparationBusy,
} from "@/lib/open-preparation";
import { PRODUCT_VERSIONING } from "@/lib/product-version";
import { ProjectSpaceProvider, useProjectSpace } from "./ProjectSpaceContext";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  noteProjectSurfaceNavIntent,
  parsePreparationId,
  parseProjectId,
  parseStudioSurface,
  railStyle,
  resolvePersonalBreadcrumb,
  resolveRailVariant,
} from "./studio-rail";
import "./studio-shell.css";

/** Existing real account destination — integrations settings (no invented account hub). */
const ACCOUNT_HREF = "/settings/integrations";

/** Figma 652:* rail glyphs — decorative, paired with visible labels. */
function railNavGlyph(key: string): string {
  switch (key) {
    case "travail":
      return "◉";
    case "projet":
      return "▦";
    case "journal":
      return "▤";
    case "pilotage":
      return "◇";
    case "sas":
      return "◇";
    default:
      return "·";
  }
}

export function StudioShell({ children }: { children: React.ReactNode }) {
  return (
    <ProjectSpaceProvider>
      <StudioShellInner>{children}</StudioShellInner>
    </ProjectSpaceProvider>
  );
}

function StudioShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const searchParams = useSearchParams();
  const surface = searchParams.get("surface");
  const variant = resolveRailVariant({ pathname, surface, searchParams });
  const tokens = STUDIO_RAIL_VARIANTS[variant];
  const projectId = parseProjectId(pathname);
  const preparationId = parsePreparationId(pathname);
  const { info: projectSpace } = useProjectSpace();
  const projectSpaceReady =
    Boolean(projectId) &&
    projectSpace?.projectId === projectId &&
    projectSpace.available;
  const projectSpaceBlocked =
    Boolean(projectId) &&
    projectSpace?.projectId === projectId &&
    Boolean(projectSpace?.blockNavigation);
  const rawItems = buildShellNav({ pathname, surface });
  // Qualified unavailable: keep Portefeuille only — no deep nav into a dead context.
  const items = projectSpaceBlocked
    ? rawItems.filter((i) => i.key === "portfolio")
    : rawItems;
  const inProductSpace = Boolean(projectId || preparationId);
  const personalSpace = !inProductSpace;
  const portfolioActive = pathname.startsWith("/portfolio") || pathname === "/";
  const accountActive = pathname.startsWith("/settings");
  const breadcrumb = resolvePersonalBreadcrumb(pathname, searchParams);
  const onSasVisual = pathname.startsWith("/dev/sas-visual/");
  const onSasPreparation = Boolean(preparationId) || onSasVisual;
  const [openingPrep, setOpeningPrep] = useState(false);
  const [prepNotice, setPrepNotice] = useState("");
  const activeProjectName = projectSpaceReady ? projectSpace?.projectName ?? null : null;
  const activeProjectSubtitle = projectSpaceReady ? projectSpace?.subtitle ?? null : null;

  useEffect(() => subscribeOpenPreparationBusy(setOpeningPrep), []);

  async function handleOpenPreparation() {
    setPrepNotice("");
    const outcome = await runOpenPreparation(async (result) => {
      if (result.kind === "opened") {
        router.push(`/preparations/${result.preparationId}`);
        return;
      }
      if (result.kind === "unauthorized") {
        router.push("/login");
        return;
      }
      if (result.kind === "refused") {
        setPrepNotice(result.message);
        return;
      }
      // UNCERTAIN: honest message; never navigate by guess.
      setPrepNotice(result.message);
    });
    if (outcome.kind === "busy") return;
  }

  // UX-003: /login is a public entry surface — no private project rail.
  useEffect(() => {
    if (pathname === "/login") {
      document.documentElement.classList.remove("studio-shell-lock");
      return;
    }
    document.documentElement.classList.add("studio-shell-lock");
    return () => {
      document.documentElement.classList.remove("studio-shell-lock");
    };
  }, [pathname]);

  if (pathname === "/login") {
    return (
      <div className="min-h-screen" data-testid="studio-shell-entry" data-shell-mode="entry">
        {children}
      </div>
    );
  }

  return (
    <div
      className="studio-shell-app studio-shell"
      data-rail-variant={variant}
      data-shell-mode={personalSpace ? "personnel" : "produit"}
      data-testid="studio-shell-app"
    >
      <aside
        className="studio-shell-rail hidden md:flex flex-col border-r border-[var(--line)]"
        style={railStyle(tokens)}
        aria-label="Navigation Studio"
        data-testid="studio-rail"
        data-rail-variant={variant}
        data-rail-component-id={tokens.railComponentId}
        data-rail-source-node={tokens.sourceNodeId}
        data-rail-width={tokens.widthPx}
        data-rail-fill={tokens.fill}
      >
        <div className="studio-shell-rail-inner" style={{ gap: tokens.gap }}>
          <div className="flex items-center gap-[11px] shrink-0">
            <span
              aria-hidden
              className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] text-[22px] font-bold leading-none"
              style={{ background: "#656fe1", color: "#f4f6fc" }}
            >
              S
            </span>
            <div className="min-w-0">
              <div className="text-[19px] font-semibold tracking-tight studio-title leading-[27px]">
                SFIA Studio
              </div>
              {personalSpace ? (
                <div className="text-[10px] muted">{PRODUCT_VERSIONING.releaseStatus}</div>
              ) : null}
            </div>
          </div>

          <div className="studio-rail-rule shrink-0" aria-hidden />

          {projectId ? (
            <>
              <div className="studio-rail-section !mt-0" aria-hidden>
                Espace actif
              </div>
              <div
                className="studio-rail-espace-actif shrink-0"
                style={{ background: "#151c29" }}
                data-testid="rail-espace-actif"
              >
                <div
                  className="studio-rail-project-name"
                  title={activeProjectName ?? undefined}
                  data-testid="rail-project-name"
                >
                  {activeProjectName ??
                    (projectSpaceBlocked ? "Projet indisponible" : "Chargement…")}
                </div>
                {activeProjectSubtitle ? (
                  <div
                    className="studio-rail-project-subtitle"
                    data-testid="rail-project-subtitle"
                  >
                    {activeProjectSubtitle}
                  </div>
                ) : null}
                {projectSpaceReady ? (
                  <div className="studio-rail-project-status" data-testid="rail-project-status">
                    <span className="studio-rail-status-dot" aria-hidden />
                    Projet actif
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <div className="studio-rail-section" aria-hidden>
              Votre espace
            </div>
          )}

          <nav
            className="studio-shell-rail-nav text-sm"
            style={{ gap: tokens.gap }}
            aria-label="Principal"
          >
            {items.map((item) => {
              if (item.action === "open-preparation") {
                return (
                  <button
                    key={item.key}
                    type="button"
                    className="studio-rail-nav-item text-left w-full"
                    data-testid={`nav-${item.key}`}
                    disabled={openingPrep}
                    onClick={() => void handleOpenPreparation()}
                  >
                    <span aria-hidden className="studio-rail-nav-glyph">
                      +
                    </span>
                    <span>{openingPrep ? "Ouverture…" : item.label}</span>
                  </button>
                );
              }
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

              if (item.key === "portfolio" && projectId) {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="studio-rail-portfolio-link"
                    data-testid={`nav-${item.key}`}
                  >
                    ←&nbsp;&nbsp;Portefeuille
                  </Link>
                );
              }

              const showNavSection =
                projectId &&
                item.key === "travail" &&
                !projectSpaceBlocked;

              return (
                <div key={item.key} className="contents">
                  {showNavSection ? (
                    <>
                      <div className="studio-rail-rule" aria-hidden />
                      <div className="studio-rail-section">Navigation</div>
                    </>
                  ) : null}
                  <Link
                    href={item.href}
                    className={`studio-rail-nav-item ${item.active ? "is-active" : ""}`}
                    aria-current={item.active ? "page" : undefined}
                    data-testid={`nav-${item.key}`}
                    onClick={() => {
                      const surfaceKey = parseStudioSurface(item.key);
                      if (projectId && surfaceKey) {
                        noteProjectSurfaceNavIntent(projectId, surfaceKey);
                      }
                    }}
                  >
                    {item.key === "portfolio" ? (
                      <span aria-hidden className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 shrink-0">
                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                      </span>
                    ) : (
                      <span aria-hidden className="studio-rail-nav-glyph">
                        {railNavGlyph(item.key)}
                      </span>
                    )}
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
            {prepNotice ? (
              <p className="text-xs text-[var(--bad)] px-2" role="status" data-testid="shell-prep-notice">
                {prepNotice}
              </p>
            ) : null}

            {personalSpace ? (
              <div className="mt-2">
                <div className="studio-rail-section mb-1">Accès</div>
                <Link
                  href={ACCOUNT_HREF}
                  className={`studio-rail-nav-item ${
                    pathname.startsWith("/settings/integrations") ? "is-active" : ""
                  }`}
                  aria-current={pathname.startsWith("/settings/integrations") ? "page" : undefined}
                  data-testid="nav-integrations"
                >
                  <span>Intégrations</span>
                </Link>
              </div>
            ) : null}

            {projectId && projectSpaceReady ? (
              <div className="mt-1 space-y-0.5" data-testid="rail-acces-directs">
                <div className="studio-rail-rule" aria-hidden />
                <div className="studio-rail-section">Accès directs</div>
                <Link
                  href={`/projects/${projectId}?surface=document`}
                  className={`studio-rail-direct-link ${
                    surface === "document" ? "is-active" : ""
                  }`}
                  data-testid="nav-documents"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "document")}
                >
                  <span aria-hidden className="studio-rail-nav-glyph">
                    ▤
                  </span>
                  <span>Documents Nora</span>
                </Link>
                <Link
                  href={`/projects/${projectId}?surface=git`}
                  className={`studio-rail-direct-link ${
                    surface === "git" ? "is-active" : ""
                  }`}
                  data-testid="nav-sources-git"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "git")}
                >
                  <span aria-hidden className="studio-rail-nav-glyph">
                    ◇
                  </span>
                  <span>Sources Git</span>
                </Link>
                <Link
                  href={`/projects/${projectId}?surface=publication`}
                  className={`studio-rail-direct-link ${
                    surface === "publication" ? "is-active" : ""
                  }`}
                  data-testid="nav-resultats"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "publication")}
                  title="Publication Git existante (préparation / autorisation / dispatch) — libellé Figma provisoire"
                >
                  <span aria-hidden className="studio-rail-nav-glyph">
                    ▦
                  </span>
                  <span>Résultats et preuves</span>
                </Link>
              </div>
            ) : null}
          </nav>

          <div className="studio-shell-rail-foot" data-testid="studio-rail-account">
            <Link
              href={ACCOUNT_HREF}
              className="studio-account-link"
              data-testid="nav-account"
              aria-label="Compte — Intégrations"
            >
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shrink-0"
                style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
              >
                P
              </span>
              <div className="text-xs min-w-0">
                <div className="font-semibold text-[14px]">Pilote</div>
                <div className="muted">{inProductSpace ? "Connecté" : "Espace personnel"}</div>
              </div>
              <span aria-hidden className="muted ml-auto text-lg leading-none">
                ⌄
              </span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="studio-shell-column">
        {personalSpace ? (
          <header
            className="studio-shell-topbar"
            data-testid="studio-shell-topbar"
          >
            <div className="flex items-center gap-3 min-w-0 md:hidden">
              <span
                aria-hidden
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[8px] text-sm font-bold"
                style={{ background: "var(--fig-accent)", color: "white" }}
              >
                S
              </span>
              <span className="font-semibold truncate">SFIA Studio</span>
            </div>
            <p
              className="hidden md:block text-sm muted truncate m-0"
              data-testid="studio-shell-breadcrumb"
            >
              {breadcrumb
                ? <>SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{breadcrumb}</>
                : <>SFIA Studio</>}
            </p>
            {onSasPreparation ? (
              <span className="sas-project-badge" data-testid="sas-header-project-status">
                PROJET NON CRÉÉ
              </span>
            ) : (
              <Link
                href={ACCOUNT_HREF}
                className="studio-account-link shrink-0"
                data-testid="nav-account-top"
                aria-label="Compte — Intégrations"
              >
                <span
                  aria-hidden
                  className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full text-[12px] font-bold"
                  style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
                >
                  P
                </span>
                <span className="hidden sm:inline text-[13px] text-[var(--muted)]">Pilote</span>
              </Link>
            )}
          </header>
        ) : (
          <nav
            className="studio-shell-mobile-strip md:hidden"
            aria-label="Navigation Studio mobile"
            data-testid="studio-rail-mobile"
          >
            {items.map((item) => {
              if (!item.href) {
                return (
                  <span
                    key={item.key}
                    className="muted whitespace-nowrap"
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
                  className={`whitespace-nowrap ${item.active ? "font-semibold" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                  data-testid={`nav-${item.key}`}
                  onClick={() => {
                    const surfaceKey = parseStudioSurface(item.key);
                    if (projectId && surfaceKey) {
                      noteProjectSurfaceNavIntent(projectId, surfaceKey);
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        <main
          className={`studio-shell-main ${personalSpace ? "studio-shell-main-mobile-pad" : ""}`}
          data-testid="studio-shell-main"
          data-sas-layout={onSasPreparation ? "1" : undefined}
          data-travail-layout={
            projectId &&
            (parseStudioSurface(surface) ?? "travail") === "travail" &&
            !projectSpaceBlocked
              ? "1"
              : undefined
          }
          data-journal-layout={
            projectId &&
            (parseStudioSurface(surface) ?? "travail") === "journal" &&
            !projectSpaceBlocked
              ? "1"
              : undefined
          }
          data-project-figma-layout={
            projectId &&
            !projectSpaceBlocked &&
            ["projet", "pilotage"].includes(parseStudioSurface(surface) ?? "")
              ? "1"
              : undefined
          }
        >
          {children}
        </main>

        {personalSpace ? (
          <nav
            className="studio-shell-bottom-nav md:hidden"
            aria-label="Navigation personnelle mobile"
            data-testid="studio-mobile-bottom-nav"
          >
            <Link
              href="/portfolio"
              className={portfolioActive ? "is-active" : ""}
              aria-current={portfolioActive ? "page" : undefined}
              data-testid="mobile-nav-portfolio"
            >
              <span className="nav-glyph" aria-hidden>
                ▦
              </span>
              Portefeuille
            </Link>
            <button
              type="button"
              className="studio-shell-bottom-nav-btn"
              data-testid="mobile-nav-create"
              disabled={openingPrep}
              onClick={() => void handleOpenPreparation()}
            >
              <span className="nav-glyph" aria-hidden>
                +
              </span>
              {openingPrep ? "…" : "Créer"}
            </button>
            <Link
              href={ACCOUNT_HREF}
              className={accountActive ? "is-active" : ""}
              aria-current={accountActive ? "page" : undefined}
              data-testid="mobile-nav-account"
            >
              <span className="nav-glyph" aria-hidden>
                ◔
              </span>
              Compte
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
