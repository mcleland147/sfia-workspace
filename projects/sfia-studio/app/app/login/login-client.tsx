"use client";

import { useMemo } from "react";
import { authClient } from "@/lib/auth/auth-client";

const ERROR_MESSAGES: Record<string, string> = {
  github_user_not_allowlisted:
    "Votre compte GitHub n'est pas autorisé à accéder à SFIA Studio.",
  github_id_unparseable:
    "Impossible de vérifier l'identité GitHub (identifiant manquant).",
  ALLOWLIST_DENIED:
    "Votre identité GitHub n'est plus dans la liste d'autorisation SFIA.",
  NO_SESSION: "Authentification requise pour accéder à SFIA Studio.",
  PROVIDER_ACCOUNT_MISSING:
    "Session incomplète — reconnectez-vous avec GitHub.",
  AUTH_CONFIG_ERROR:
    "Configuration d'authentification indisponible (fail-closed).",
  provider_not_allowed: "Seul GitHub OAuth est accepté.",
};

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

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #0f172a 100%)",
        color: "#e2e8f0",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <main
        style={{
          width: "min(28rem, 100%)",
          border: "1px solid rgba(148, 163, 184, 0.35)",
          borderRadius: "12px",
          padding: "2rem",
          background: "rgba(15, 23, 42, 0.85)",
        }}
        data-testid="login-surface"
      >
        <p
          style={{
            letterSpacing: "0.12em",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            color: "#94a3b8",
            margin: 0,
          }}
        >
          SFIA Studio
        </p>
        <h1 style={{ margin: "0.75rem 0 0.5rem", fontSize: "1.75rem" }}>
          Connexion
        </h1>
        <p style={{ margin: "0 0 1.5rem", color: "#cbd5e1", lineHeight: 1.5 }}>
          Authentifiez-vous avec GitHub. L&apos;accès Studio est réservé aux
          identités autorisées côté serveur (rôle runtime : Pilote).
        </p>

        {message ? (
          <p
            role="alert"
            data-testid="login-error"
            style={{
              margin: "0 0 1.25rem",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              background: "rgba(127, 29, 29, 0.45)",
              border: "1px solid rgba(248, 113, 113, 0.45)",
              color: "#fecaca",
            }}
          >
            {message}
          </p>
        ) : null}

        <button
          type="button"
          data-testid="login-github"
          onClick={() => {
            void authClient.signIn.social({
              provider: "github",
              callbackURL,
            });
          }}
          style={{
            width: "100%",
            border: 0,
            borderRadius: "8px",
            padding: "0.85rem 1rem",
            background: "#f8fafc",
            color: "#0f172a",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Se connecter avec GitHub
        </button>
      </main>
    </div>
  );
}
