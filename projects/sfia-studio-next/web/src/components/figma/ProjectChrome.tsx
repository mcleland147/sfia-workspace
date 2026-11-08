"use client";

type Surface = "travail" | "pilotage" | "journal" | "document";

const LABELS: Record<Surface, string> = {
  travail: "Travail avec Nora",
  pilotage: "Pilotage · cycle et décisions",
  journal: "Journal · sujets et acquis",
  document: "Documents · bibliothèque",
};

export function ProjectChrome(props: {
  projectId: string;
  surface: Surface;
  meta?: string;
  onSelectSurface: (s: Surface) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fig-page" data-project-surface={props.surface}>
      <div className="fig-breadcrumb">
        <span>
          SFIA Studio / Projet / {LABELS[props.surface]}
        </span>
        <span className="text-xs muted truncate max-w-[40%]">{props.projectId}</span>
      </div>

      <header className="space-y-2">
        <p className="fig-kicker">Espace projet</p>
        <h1 className="fig-hero-title">
          {props.surface === "travail"
            ? "Nora"
            : props.surface === "document"
              ? "Documents"
              : props.surface === "journal"
                ? "Journal"
                : "Pilotage"}
        </h1>
        <p className="fig-hero-sub">
          {props.surface === "travail"
            ? "Collaborer, produire et approfondir le travail du projet."
            : props.surface === "document"
              ? "Bibliothèque, inspection et révision sous autorité D4."
              : props.surface === "journal"
                ? "Sujets, acquis et points ouverts — présentation sans nouvelle autorité."
                : "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant."}
        </p>
        {props.meta ? <p className="text-xs muted">{props.meta}</p> : null}
      </header>

      <nav className="flex flex-wrap gap-2" aria-label="Surfaces projet">
        {(
          [
            ["travail", "Travail"],
            ["pilotage", "Pilotage"],
            ["journal", "Journal"],
            ["document", "Documents"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`btn ${props.surface === id ? "" : "secondary"}`}
            onClick={() => props.onSelectSurface(id)}
            data-testid={`surface-${id}`}
          >
            {label}
          </button>
        ))}
      </nav>

      {props.children}
    </div>
  );
}
