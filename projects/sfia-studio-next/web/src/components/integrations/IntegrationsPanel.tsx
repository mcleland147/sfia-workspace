"use client";

import { useCallback, useEffect, useState } from "react";

type IntegrationView = {
  provider: string;
  providerMode: string;
  status: string;
  repositories: Array<{
    id: string;
    fullName: string;
    defaultBranch: string | null;
    permissions?: { source?: string; contents?: string; pull_requests?: string };
  }>;
};

function statusBanner(status: string): { tone: string; text: string } {
  switch (status) {
    case "CONNECTED":
      return {
        tone: "text-emerald-300",
        text: "GitHub est connecté. Les dépôts ci-dessous sont ceux réellement autorisés côté serveur.",
      };
    case "PENDING_APPROVAL":
      return {
        tone: "text-amber-300",
        text: "Approbation d'organisation en attente — aucun accès anticipé aux dépôts.",
      };
    case "ACCESS_REMOVED":
    case "REVOKED":
      return {
        tone: "text-amber-300",
        text: "Accès GitHub retiré ou révoqué. Les acquis D4 et faits historiques restent conservés.",
      };
    default:
      return {
        tone: "text-amber-300",
        text: "GitHub n'est pas connecté. Studio et Nora restent entièrement utilisables.",
      };
  }
}

export function IntegrationsPanel() {
  const [view, setView] = useState<IntegrationView | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const res = await fetch("/api/integrations/status");
    if (res.ok) setView(await res.json());
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function connect() {
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch("/api/integrations/github/authorize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnPath: "/settings/integrations" }),
      });
      const j = await res.json();
      if (!j.authorizeUrl && !j.state) {
        setMessage("Impossible de démarrer l'autorisation");
        return;
      }
      // SCRIPTED complete only when server chose flow=scripted.
      // Do NOT use providerMode (Git provider SCRIPTED/REAL) — that is orthogonal to D9 OAuth flow.
      if (j.flow === "scripted") {
        const done = await fetch("/api/integrations/github/authorize/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ state: j.state }),
        });
        const statusBody = await done.json();
        if (!done.ok) {
          setMessage(statusBody.message ?? statusBody.error ?? "Autorisation SCRIPTED refusée");
          await refresh();
          return;
        }
        setView(statusBody);
        return;
      }
      if (!j.authorizeUrl || typeof j.authorizeUrl !== "string") {
        setMessage("URL d'autorisation GitHub absente — flux REAL non démarré");
        return;
      }
      window.location.assign(j.authorizeUrl);
    } finally {
      setBusy(false);
    }
  }

  async function disconnect() {
    setBusy(true);
    await fetch("/api/integrations/github/disconnect", { method: "POST" });
    await refresh();
    setBusy(false);
  }

  async function refreshRepos() {
    setBusy(true);
    await fetch("/api/integrations/github/refresh", { method: "POST" });
    await refresh();
    setBusy(false);
  }

  const status = view?.status ?? "DISCONNECTED";
  const banner = statusBanner(status);

  return (
    <div className="space-y-5" data-testid="integrations-panel">
      <header className="space-y-2">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
          Paramètres · Services externes
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">Intégrations</h1>
          {view?.providerMode === "SCRIPTED" ? (
            <span
              className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded border border-[var(--line)] text-[var(--muted)]"
              data-testid="badge-scripted"
            >
              SCRIPTED
            </span>
          ) : null}
        </div>
        <p className="text-base text-[var(--muted)] max-w-3xl">
          Connectez les services utiles à votre travail. Vous gardez la maîtrise des dépôts et des
          permissions.
        </p>
      </header>

      <div
        className={`rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_80%,transparent)] p-4 text-sm font-medium ${banner.tone}`}
        data-testid="integrations-status-banner"
      >
        {banner.text}
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <section className="studio-card p-5 space-y-4" data-testid="github-integration-card">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
              GitHub · Intégration disponible
            </p>
            <h2 className="text-[22px] font-semibold mt-1">GitHub</h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Consulter vos dépôts autorisés, travailler avec Nora et publier des documents sous votre
              contrôle.
            </p>
          </div>

          <div className="space-y-2">
            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
              <p className="text-sm font-semibold">Connexion Studio</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Vous êtes authentifié dans Studio : cela ne donne aucun droit sur les dépôts.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
              <p className="text-sm font-semibold">Accès aux dépôts</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                {status === "CONNECTED"
                  ? "Installation et autorisation utilisateur GitHub App vérifiées côté serveur."
                  : "Aucune installation GitHub App ni autorisation utilisateur n'est présumée."}
              </p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
              <p className="text-sm font-semibold">Publication documentaire</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Les branches, commits, PR et merges nécessitent un mandat distinct.
              </p>
            </div>
          </div>

          {status === "CONNECTED" ? (
            <ul className="text-sm space-y-1" data-testid="repo-list">
              {view?.repositories.map((r) => (
                <li key={r.id} className="mono muted">
                  {r.fullName}
                  {r.defaultBranch ? ` · ${r.defaultBranch}` : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm muted">Aucun dépôt autorisé.</p>
          )}

          <div className="flex flex-wrap gap-3 pt-1">
            {status === "CONNECTED" ? (
              <>
                <button
                  type="button"
                  className="studio-btn"
                  disabled={busy}
                  onClick={() => void refreshRepos()}
                  data-testid="refresh-repos"
                >
                  Actualiser les dépôts
                </button>
                <button
                  type="button"
                  className="studio-btn-secondary"
                  disabled={busy}
                  onClick={() => void disconnect()}
                  data-testid="disconnect-github"
                >
                  Déconnecter
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="studio-btn"
                  disabled={busy}
                  onClick={() => void connect()}
                  data-testid="connect-github"
                >
                  Configurer GitHub
                </button>
                <button type="button" className="studio-btn-secondary" disabled={busy} onClick={() => void refresh()}>
                  Plus tard
                </button>
              </>
            )}
          </div>
        </section>

        <aside className="studio-card p-5 space-y-3">
          <h2 className="text-[20px] font-semibold">Une connexion à la carte</h2>
          <p className="text-sm text-[var(--muted)]">
            Connectez GitHub maintenant, ou seulement lorsqu&apos;un projet en aura besoin.
          </p>
          {[
            ["1 · Choisir le compte", "Sur GitHub, choisissez un compte ou une organisation."],
            ["2 · Sélectionner les dépôts", "Limitez l'installation aux dépôts nécessaires."],
            ["3 · Conserver le contrôle", "Vous pourrez ajouter ou retirer des dépôts plus tard."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3"
            >
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-[var(--muted)] mt-1">{body}</p>
            </div>
          ))}
        </aside>
      </div>

      {message ? <p className="text-sm text-amber-400">{message}</p> : null}
      <p className="text-xs text-[var(--muted)]" data-testid="provider-mode-note">
        {!view
          ? "Chargement du statut d'intégration…"
          : view.providerMode === "SCRIPTED"
            ? "Fournisseur d'effet Git SCRIPTED (fixtures). Orthogonal au flux OAuth user-to-server."
            : "Fournisseur d'effet Git REAL. Orthogonal au statut OAuth CONNECTED — mutations bornées documentary + mandat D6."}
      </p>
    </div>
  );
}
