"use client";

import "./unified-studio-entry.css";
import {
  UNIFIED_ENTRY_COPY,
  type UnifiedEntryVariant,
} from "./unified-entry-variant";

const CAPABILITIES = [
  { num: "01", label: "Échanger avec Nora" },
  { num: "02", label: "Conduire vos projets" },
  { num: "03", label: "Reprendre sans perdre le fil" },
] as const;

export type UnifiedStudioEntryProps = {
  variant: UnifiedEntryVariant;
  busy: boolean;
  notice: string;
  noticeTone?: "error" | "busy" | "info";
  onGitHubContinue: () => void;
  onDevLogin: (pilot: "a" | "b") => void;
};

export function UnifiedStudioEntry({
  variant,
  busy,
  notice,
  noticeTone = "info",
  onGitHubContinue,
  onDevLogin,
}: UnifiedStudioEntryProps) {
  const copy = UNIFIED_ENTRY_COPY[variant];

  return (
    <div
      className="uxe-root"
      data-testid="unified-studio-entry"
      data-entry-variant={variant}
      data-figma-desktop={variant === "session_expired" ? "574:490" : "574:425"}
      data-figma-mobile="574:466"
    >
      <div className="uxe-decor" aria-hidden>
        <img
          className="uxe-decor__halo-blue"
          src="/entry/halo-bleute.svg"
          alt=""
          width={1344}
          height={1344}
        />
        <img
          className="uxe-decor__halo-violet"
          src="/entry/halo-violet.svg"
          alt=""
          width={650}
          height={650}
        />
        <img
          className="uxe-decor__ring-1"
          src="/entry/anneau-01.svg"
          alt=""
          width={760}
          height={760}
        />
        <img
          className="uxe-decor__ring-2"
          src="/entry/anneau-02.svg"
          alt=""
          width={590}
          height={590}
        />
      </div>

      <div className="uxe-shell">
        <header className="uxe-header">
          <div className="uxe-brand">
            <span className="uxe-mark" aria-hidden>
              S
            </span>
            <p className="uxe-brand-name">SFIA Studio</p>
          </div>
          <p className="uxe-header-meta">Espace personnel</p>
        </header>

        <div className="uxe-body">
          <section className="uxe-intro" aria-labelledby="uxe-headline">
            <p className="uxe-eyebrow">Votre espace de pilotage</p>
            <h1 id="uxe-headline" className="uxe-headline">
              Vos projets avancent.
              <br />
              Avec Nora.
            </h1>
            <p className="uxe-lead">
              Cadrer, décider et retrouver votre travail au même endroit.
              <span className="uxe-lead-secondary">
                {" "}
                Nora vous accompagne, du premier échange aux résultats vérifiables.
              </span>
            </p>
            <hr className="uxe-mobile-sep" />
            <hr className="uxe-signature" />
            <ul className="uxe-tiles">
              {CAPABILITIES.map((c) => (
                <li key={c.num} className="uxe-tile">
                  <p className="uxe-tile-num">{c.num}</p>
                  <p className="uxe-tile-label">{c.label}</p>
                </li>
              ))}
            </ul>
            <p className="uxe-model-note">
              Pilote et Nora : une conversation, des décisions maîtrisées, une continuité.
            </p>
          </section>

          <div className="uxe-auth-column">
            <section
              className="uxe-auth"
              aria-labelledby="uxe-auth-title"
              data-testid="unified-entry-auth-panel"
            >
              <div className="uxe-auth-accent" aria-hidden />
              <p className="uxe-auth-eyebrow">{copy.panelEyebrow}</p>
              <h2 id="uxe-auth-title" className="uxe-auth-title">
                {copy.panelTitle}
              </h2>
              <p className="uxe-auth-body">{copy.panelBody}</p>

              <button
                type="button"
                className="uxe-cta"
                data-testid="login-github"
                disabled={busy}
                onClick={onGitHubContinue}
              >
                <span className="uxe-cta-icon" aria-hidden>
                  GH
                </span>
                <span className="uxe-cta-label">{copy.ctaLabel}</span>
                <span className="uxe-cta-arrow" aria-hidden>
                  →
                </span>
              </button>

              <hr className="uxe-auth-sep" />
              <p className="uxe-auth-note">
                GitHub confirme uniquement votre identité Studio.
              </p>
              <p className="uxe-auth-note uxe-auth-note--secondary">
                Les droits d&apos;accès aux dépôts sont gérés séparément.
              </p>

              {notice ? (
                <p
                  className="uxe-status"
                  data-tone={noticeTone}
                  data-testid="login-notice"
                  role="status"
                >
                  {notice}
                </p>
              ) : null}
            </section>

            {/* DEV-only harness — hors panneau Figma ; conservé pour lanes DEV/E2E. */}
            <div className="uxe-dev" data-testid="login-dev-access">
              <p className="uxe-auth-note uxe-auth-note--secondary">
                Accès de test DEV (non OAuth)
              </p>
              <div className="uxe-dev-body">
                <button
                  type="button"
                  className="uxe-dev-btn"
                  disabled={busy}
                  onClick={() => onDevLogin("a")}
                >
                  Pilote A (DEV)
                </button>
                <button
                  type="button"
                  className="uxe-dev-btn"
                  disabled={busy}
                  onClick={() => onDevLogin("b")}
                >
                  Pilote B (DEV)
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="uxe-footer">
          <p>SFIA Studio</p>
          <p className="uxe-footer-right">
            L&apos;accès aux dépôts Git est autorisé séparément.
          </p>
        </footer>
      </div>
    </div>
  );
}
