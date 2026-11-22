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
        text: "GitHub connecté — accès fournisseur vérifié. Aucun mandat de publication n’est accordé par cette seule connexion.",
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
        text: "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
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
  const [confirmDisconnect, setConfirmDisconnect] = useState(false);

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

  async function disconnectConfirmed() {
    setBusy(true);
    try {
      await fetch("/api/integrations/github/disconnect", { method: "POST" });
      await refresh();
      setConfirmDisconnect(false);
    } finally {
      setBusy(false);
    }
  }

  async function refreshRepos() {
    setBusy(true);
    await fetch("/api/integrations/github/refresh", { method: "POST" });
    await refresh();
    setBusy(false);
  }

  const status = view?.status ?? "DISCONNECTED";
  const banner = statusBanner(status);

  if (confirmDisconnect) {
    return (
      <div className="space-y-5" data-testid="integrations-disconnect-confirm">
        <header className="space-y-2">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
            PARAMÈTRES / SERVICES EXTERNES
          </p>
          <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">
            Déconnecter GitHub
          </h1>
          <p className="text-base text-[var(--muted)] max-w-3xl">
            Le retrait de la connexion personnelle affecte les futures lectures Git de tous les
            projets concernés.
          </p>
        </header>
        <div
          className="rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,#3d3021_80%,transparent)] p-4 text-sm font-medium text-amber-300"
          data-testid="disconnect-consequence-banner"
        >
          Aucune suppression de dépôt GitHub ni de document Studio ne résulte de cette action.
        </div>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <section className="studio-card p-5 space-y-4" data-testid="disconnect-confirm-card">
            <h2 className="text-[22px] font-semibold">Déconnecter le compte GitHub ?</h2>
            <p className="text-sm text-[var(--muted)]">
              Les accès Git dépendants de cette connexion seront suspendus dans les projets du
              Pilote. Ceci coupe l’accès Studio local — ce n’est pas automatiquement une révocation
              complète de l’installation GitHub.
            </p>
            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
              <p className="text-sm font-semibold">Dépôts associés aux projets</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Les associations historiques ne sont pas effacées.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
              <p className="text-sm font-semibold">Publications antérieures</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Les références, commits et PR observés restent dans les preuves du projet.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                className="studio-btn"
                disabled={busy}
                onClick={() => void disconnectConfirmed()}
                data-testid="disconnect-github-confirm"
              >
                Confirmer la déconnexion
              </button>
              <button
                type="button"
                className="studio-btn-secondary"
                disabled={busy}
                onClick={() => setConfirmDisconnect(false)}
                data-testid="disconnect-github-cancel"
              >
                Annuler
              </button>
            </div>
          </section>
          <aside className="studio-card p-5 space-y-3">
            <h2 className="text-[20px] font-semibold">États des projets</h2>
            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
              <p className="text-sm font-semibold">Documents Studio</p>
              <p className="text-xs text-[var(--muted)] mt-1">Toujours disponibles sans Git.</p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
              <p className="text-sm font-semibold">Nouvelles lectures</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Refusées jusqu’au rétablissement des accès.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
              <p className="text-sm font-semibold">Publications</p>
              <p className="text-xs text-[var(--muted)] mt-1">
                Aucune nouvelle publication autorisée sans capacités effectives.
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5" data-testid="integrations-panel">
      <header className="space-y-2">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
          PARAMÈTRES / SERVICES EXTERNES
        </p>
        <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">Intégrations</h1>
        <p className="text-base text-[var(--muted)] max-w-3xl">
          Gérer la connexion personnelle GitHub et consulter les dépôts réellement autorisés.
        </p>
      </header>

      <div
        className={`rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_80%,transparent)] p-4 text-sm font-medium ${banner.tone}`}
        data-testid="integrations-status-banner"
      >
        {banner.text}
      </div>

      <div
        className="grid gap-5 lg:grid-cols-[minmax(0,858fr)_minmax(0,482fr)]"
        data-testid="integrations-layout-1106"
      >
        <section className="studio-card p-5 space-y-4" data-testid="github-integration-card">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-[22px] font-semibold m-0">GitHub</h2>
            {status === "CONNECTED" ? (
              <span className="git-badge-ok" data-testid="github-connected-badge">
                ● Connecté
              </span>
            ) : null}
          </div>

          {status === "CONNECTED" ? (
            <>
              <p className="text-sm text-[var(--muted)] m-0">
                Dépôts autorisés par la GitHub App — affichés côté serveur.
              </p>
              {(view?.repositories?.length ?? 0) === 0 ? (
                <p className="text-sm muted" data-testid="repo-list-empty">
                  Aucun dépôt autorisé.
                </p>
              ) : (
                <ul className="space-y-2 m-0 p-0 list-none" data-testid="repo-list">
                  {view!.repositories.map((r) => (
                    <li
                      key={r.id}
                      className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-4 py-3"
                      data-testid={`integration-repo-${r.id}`}
                    >
                      <p className="text-sm font-semibold m-0 mono">{r.fullName}</p>
                      <p className="text-xs text-[var(--muted)] mt-1 mb-0">
                        Accessible au compte Pilote
                        {r.defaultBranch ? ` · branche par défaut ${r.defaultBranch}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  className="studio-btn"
                  disabled={busy}
                  onClick={() => void refreshRepos()}
                  data-testid="refresh-repos"
                >
                  Actualiser
                </button>
                <button
                  type="button"
                  className="studio-btn-secondary"
                  disabled={busy}
                  onClick={() => setConfirmDisconnect(true)}
                  data-testid="disconnect-github"
                  title="Ouvre la confirmation — aucun appel de déconnexion avant confirmation"
                >
                  Déconnecter
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-[var(--muted)]">
                Consulter vos dépôts autorisés, travailler avec Nora et publier des documents sous
                votre contrôle.
              </p>
              <p className="text-sm muted">Aucun dépôt autorisé.</p>
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  className="studio-btn"
                  disabled={busy}
                  onClick={() => void connect()}
                  data-testid="connect-github"
                >
                  Configurer GitHub
                </button>
                <button
                  type="button"
                  className="studio-btn-secondary"
                  disabled={busy}
                  onClick={() => void refresh()}
                >
                  Plus tard
                </button>
              </div>
            </>
          )}
        </section>

        <aside className="studio-card p-5 space-y-3" data-testid="integrations-explain-column">
          <h2 className="text-[20px] font-semibold">Une connexion à la carte</h2>
          {[
            [
              "Connexion personnelle",
              "Autorisation GitHub propre au Pilote, distincte des projets.",
            ],
            [
              "Rattachements projet",
              "Chaque projet choisit les dépôts utiles, un ou plusieurs.",
            ],
            [
              "Publication documentaire",
              "Nora propose, le Pilote inspecte et autorise un mandat distinct.",
            ],
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
    </div>
  );
}
