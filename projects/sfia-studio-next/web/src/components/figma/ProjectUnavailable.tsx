"use client";

export type ProjectUnavailableKind =
  | "not_found"
  | "unauthorized"
  | "temporary"
  | "loading";

const COPY: Record<
  Exclude<ProjectUnavailableKind, "loading">,
  { title: string; body: string; retry: boolean }
> = {
  not_found: {
    title: "Projet introuvable",
    body: "Ce projet n’existe pas ou n’est pas accessible pour ce Pilote. Aucune donnée projet n’est affichée.",
    retry: false,
  },
  unauthorized: {
    title: "Session non autorisée",
    body: "Votre session a expiré ou n’autorise pas l’accès à cet espace. Reconnectez-vous pour continuer.",
    retry: false,
  },
  temporary: {
    title: "Projet temporairement indisponible",
    body: "Le chargement a échoué pour une cause technique temporaire. Réessayez, ou revenez au Portefeuille.",
    retry: true,
  },
};

export function ProjectUnavailable(props: {
  kind: ProjectUnavailableKind;
  onRetry?: () => void;
  onLogin?: () => void;
}) {
  if (props.kind === "loading") {
    return (
      <div
        className="project-unavailable fig-page"
        data-testid="project-unavailable"
        data-unavailable-kind="loading"
      >
        <div className="fig-panel max-w-xl space-y-3 p-6">
          <p className="fig-kicker">Espace projet</p>
          <h1 className="fig-hero-title">Chargement du projet…</h1>
          <p className="fig-hero-sub muted">
            Récupération du contexte autorisé. Aucune donnée d’un autre projet n’est réutilisée.
          </p>
        </div>
      </div>
    );
  }

  const copy = COPY[props.kind];
  return (
    <div
      className="project-unavailable fig-page"
      data-testid="project-unavailable"
      data-unavailable-kind={props.kind}
    >
      <div className="fig-panel max-w-xl space-y-4 p-6">
        <p className="fig-kicker">Espace projet</p>
        <h1 className="fig-hero-title">{copy.title}</h1>
        <p className="fig-hero-sub">{copy.body}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          <a className="btn secondary" href="/portfolio" data-testid="unavailable-back-portfolio">
            Retour au Portefeuille
          </a>
          {props.kind === "unauthorized" ? (
            <button
              type="button"
              className="btn"
              data-testid="unavailable-login"
              onClick={props.onLogin}
            >
              Se reconnecter
            </button>
          ) : null}
          {copy.retry && props.onRetry ? (
            <button
              type="button"
              className="btn"
              data-testid="unavailable-retry"
              onClick={props.onRetry}
            >
              Réessayer
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
