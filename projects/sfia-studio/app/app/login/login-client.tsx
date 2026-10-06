"use client";

import { useMemo } from "react";
import "@/features/pre-m6-product-ui/product-tokens.css";
import styles from "./login-client.module.css";

const ERROR_MESSAGES: Record<string, string> = {
  github_user_not_allowlisted:
    "Votre compte GitHub n'est pas autorisé à accéder à SFIA Studio.",
  github_id_unparseable:
    "Impossible de vérifier l'identité GitHub. Réessayez la connexion.",
  ALLOWLIST_DENIED:
    "Votre identité GitHub n'est plus autorisée pour SFIA Studio.",
  NO_SESSION: "Authentification requise pour accéder à SFIA Studio.",
  PROVIDER_ACCOUNT_MISSING:
    "Session incomplète — reconnectez-vous avec GitHub.",
  AUTH_CONFIG_ERROR:
    "Connexion indisponible pour le moment. Réessayez plus tard.",
  provider_not_allowed: "Seul GitHub est accepté pour se connecter.",
};

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

export function LoginClient({
  errorCode,
  fromPath,
}: {
  errorCode?: string | null;
  fromPath?: string | null;
}) {
  const message = useMemo(() => {
    if (!errorCode) return null;
    return (
      ERROR_MESSAGES[errorCode] ??
      "Accès refusé. Connectez-vous avec un compte GitHub autorisé."
    );
  }, [errorCode]);

  const callbackURL =
    fromPath && fromPath.startsWith("/") && !fromPath.startsWith("//")
      ? fromPath
      : "/studio";

  const githubStartHref = `/api/auth/github-start?from=${encodeURIComponent(callbackURL)}`;

  return (
    <div className={styles.page}>
      <header className={styles.topBrand} aria-hidden="false">
        <span className={styles.mark} aria-hidden="true">
          S
        </span>
        <span className={styles.brandText}>SFIA Studio</span>
      </header>

      <div className={styles.layout}>
        <section className={styles.narrative} aria-labelledby="login-narrative">
          <p className={styles.eyebrow}>Espace projet</p>
          <h1 id="login-narrative" className={styles.narrativeTitle}>
            Un espace de travail calme, continu et gouverné.
          </h1>
          <p className={styles.narrativeBody}>
            Retrouvez vos projets, leur contexte et votre conversation avec
            Nora.
          </p>
        </section>

        <main className={styles.card} data-testid="login-surface">
          <h2 className={styles.title}>Bienvenue dans SFIA Studio</h2>
          <p className={styles.lead}>
            Connectez-vous pour retrouver vos projets et reprendre votre
            travail.
          </p>

          {message ? (
            <p role="alert" data-testid="login-error" className={styles.error}>
              {message}
            </p>
          ) : null}

          {/*
            Native <a> — OAuth must work even when client chunks fail to hydrate.
            No preventDefault: href always navigates to public /api/auth/github-start.
          */}
          <a
            href={githubStartHref}
            data-testid="login-github"
            className={styles.githubCta}
          >
            <GitHubMark className={styles.githubIcon} />
            Continuer avec GitHub
          </a>

          <p className={styles.note}>
            L&apos;accès est réservé aux comptes autorisés.
          </p>
          <p className={styles.sessionHint}>
            Votre session vous ramène à votre espace de travail.
          </p>
        </main>
      </div>
    </div>
  );
}
