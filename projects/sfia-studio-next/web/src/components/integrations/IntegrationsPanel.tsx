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

function statusBanner(status: string): { tone: "ok" | "warn"; text: string } {
  switch (status) {
    case "CONNECTED":
      return {
        tone: "ok",
        text: "Votre compte GitHub est connecté. Vos dépôts autorisés sont accessibles.",
      };
    case "PENDING_APPROVAL":
      return {
        tone: "warn",
        text: "Approbation d'organisation en attente — aucun accès anticipé aux dépôts.",
      };
    case "ACCESS_REMOVED":
    case "REVOKED":
      return {
        tone: "warn",
        text: "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
      };
    default:
      return {
        tone: "warn",
        text: "GitHub n'est pas connecté. Studio et Nora restent entièrement utilisables.",
      };
  }
}

const SCOPE_CARDS: Array<{ title: string; body: string }> = [
  {
    title: "Votre compte GitHub",
    body: "Votre connexion est personnelle et distincte de vos projets.",
  },
  {
    title: "Dépôts de vos projets",
    body: "Chaque projet peut associer un ou plusieurs dépôts.",
  },
  {
    title: "Publier avec Nora",
    body: "Demandez à Nora de publier vos documents depuis Travail.",
  },
];

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
  const repos = view?.repositories ?? [];

  if (confirmDisconnect) {
    return (
      <div className="integrations-1106" data-testid="integrations-disconnect-confirm">
        <header className="integrations-1106-header">
          <p className="integrations-1106-eyebrow">PARAMÈTRES / SERVICES EXTERNES</p>
          <h1 className="integrations-1106-title">Déconnecter GitHub</h1>
          <p className="integrations-1106-lead">
            Le retrait de la connexion personnelle affecte les futures lectures Git de tous les
            projets concernés.
          </p>
        </header>
        <div
          className="integrations-1106-banner is-warn"
          data-testid="disconnect-consequence-banner"
        >
          Aucune suppression de dépôt GitHub ni de document Studio ne résulte de cette action.
        </div>
        <div className="integrations-1106-grid">
          <section className="integrations-1106-card" data-testid="disconnect-confirm-card">
            <h2 className="integrations-1106-card-title">Déconnecter le compte GitHub ?</h2>
            <p className="integrations-1106-muted">
              Les accès Git dépendants de cette connexion seront suspendus dans les projets du
              Pilote. Ceci coupe l’accès Studio local — ce n’est pas automatiquement une révocation
              complète de l’installation GitHub.
            </p>
            <div className="integrations-1106-repo">
              <p className="integrations-1106-repo-name">Dépôts associés aux projets</p>
              <p className="integrations-1106-repo-meta">
                Les associations historiques ne sont pas effacées.
              </p>
            </div>
            <div className="integrations-1106-repo">
              <p className="integrations-1106-repo-name">Publications antérieures</p>
              <p className="integrations-1106-repo-meta">
                Les références, commits et PR observés restent dans les preuves du projet.
              </p>
            </div>
            <div className="integrations-1106-actions">
              <button
                type="button"
                className="git-btn-primary"
                disabled={busy}
                onClick={() => void disconnectConfirmed()}
                data-testid="disconnect-github-confirm"
              >
                Confirmer la déconnexion
              </button>
              <button
                type="button"
                className="git-btn-secondary"
                disabled={busy}
                onClick={() => setConfirmDisconnect(false)}
                data-testid="disconnect-github-cancel"
              >
                Annuler
              </button>
            </div>
          </section>
          <aside className="integrations-1106-card" data-testid="integrations-explain-column">
            <h2 className="integrations-1106-aside-title">États des projets</h2>
            {[
              ["Documents Studio", "Toujours disponibles sans Git."],
              ["Nouvelles lectures", "Refusées jusqu’au rétablissement des accès."],
              ["Publications", "Aucune nouvelle publication autorisée sans capacités effectives."],
            ].map(([title, body]) => (
              <div key={title} className="integrations-1106-repo">
                <p className="integrations-1106-repo-name">{title}</p>
                <p className="integrations-1106-repo-meta">{body}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="integrations-1106" data-testid="integrations-panel">
      <header className="integrations-1106-header">
        <p className="integrations-1106-eyebrow">PARAMÈTRES / SERVICES EXTERNES</p>
        <h1 className="integrations-1106-title">Intégrations</h1>
        <p className="integrations-1106-lead">
          Gérez votre connexion GitHub et consultez les dépôts accessibles.
        </p>
      </header>

      <div
        className={`integrations-1106-banner ${banner.tone === "ok" ? "is-ok" : "is-warn"}`}
        data-testid="integrations-status-banner"
        role="status"
      >
        {banner.text}
      </div>

      <div className="integrations-1106-grid" data-testid="integrations-layout-1106">
        <section className="integrations-1106-card" data-testid="github-integration-card">
          <div className="integrations-1106-provider">
            <h2 className="integrations-1106-card-title">GitHub</h2>
            {status === "CONNECTED" ? (
              <span className="integrations-1106-connected" data-testid="github-connected-badge">
                ● Connecté
              </span>
            ) : null}
          </div>

          {status === "CONNECTED" ? (
            <>
              <p className="integrations-1106-muted">
                Dépôts accessibles depuis votre compte GitHub.
              </p>
              {repos.length === 0 ? (
                <p className="integrations-1106-muted" data-testid="repo-list-empty">
                  Aucun dépôt autorisé.
                </p>
              ) : (
                <ul className="integrations-1106-repo-list" data-testid="repo-list">
                  {repos.map((r) => (
                    <li
                      key={r.id}
                      className="integrations-1106-repo"
                      data-testid={`integration-repo-${r.id}`}
                    >
                      <p className="integrations-1106-repo-name">{r.fullName}</p>
                      <p className="integrations-1106-repo-meta">
                        Accessible au compte Pilote
                        {r.defaultBranch ? ` · branche par défaut ${r.defaultBranch}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <div className="integrations-1106-actions">
                <button
                  type="button"
                  className="git-btn-secondary"
                  disabled={busy}
                  onClick={() => void refreshRepos()}
                  data-testid="refresh-repos"
                >
                  Actualiser les accès
                </button>
                <button
                  type="button"
                  className="git-btn-secondary"
                  disabled={busy}
                  onClick={() => setConfirmDisconnect(true)}
                  data-testid="disconnect-github"
                  title="Ouvre la confirmation — aucun appel de déconnexion avant confirmation"
                >
                  Déconnecter GitHub
                </button>
              </div>
              <p className="integrations-1106-write-note" data-testid="integrations-write-boundary">
                Les publications vers GitHub restent soumises à une autorisation distincte. Si les
                écritures ne sont pas activées pour cet environnement, aucune publication distante
                n’est effectuée depuis cette page.
              </p>
            </>
          ) : (
            <>
              <p className="integrations-1106-muted">
                Consultez vos dépôts autorisés, travaillez avec Nora et publiez des documents sous
                votre contrôle.
              </p>
              <p className="integrations-1106-muted" data-testid="repo-list-empty">
                Aucun dépôt autorisé.
              </p>
              <div className="integrations-1106-actions">
                <button
                  type="button"
                  className="git-btn-primary"
                  disabled={busy}
                  onClick={() => void connect()}
                  data-testid="connect-github"
                >
                  Configurer GitHub
                </button>
                <button
                  type="button"
                  className="git-btn-secondary"
                  disabled={busy}
                  onClick={() => void refresh()}
                >
                  Plus tard
                </button>
              </div>
            </>
          )}
        </section>

        <aside className="integrations-1106-card" data-testid="integrations-explain-column">
          <h2 className="integrations-1106-aside-title">À propos de votre connexion</h2>
          {SCOPE_CARDS.map((card) => (
            <div key={card.title} className="integrations-1106-repo">
              <p className="integrations-1106-repo-name">{card.title}</p>
              <p className="integrations-1106-repo-meta">{card.body}</p>
            </div>
          ))}
        </aside>
      </div>

      {message ? (
        <p className="integrations-1106-message" role="alert">
          {message}
        </p>
      ) : null}
    </div>
  );
}
