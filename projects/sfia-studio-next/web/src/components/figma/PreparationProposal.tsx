"use client";

/**
 * Non-authorizing D2 proposal panel.
 * Proposal fields come only from stored previewName/previewSummary (PATCH)
 * or from an explicit Pilot constitution act — never silent NLP extraction.
 */

export type ProposalOpenPoint = { id: string; statement: string };

export function PreparationProposal(props: {
  projectId: string | null;
  previewName: string;
  previewSummary: string;
  creationRevision: number;
  messageCount: number;
  openPoints: ProposalOpenPoint[];
  busy: boolean;
  editing: boolean;
  draftName: string;
  draftSummary: string;
  onDraftName: (v: string) => void;
  onDraftSummary: (v: string) => void;
  onStartConstitute: () => void;
  onAdoptLastNoraSummary: () => void;
  canAdoptLastNora: boolean;
  onSaveProposal: () => void;
  onCancelEdit: () => void;
  onCreateProject: () => void;
  status?: string;
}) {
  const hasStored =
    props.previewName.trim().length > 0 || props.previewSummary.trim().length > 0;
  const created = Boolean(props.projectId);

  return (
    <aside className="space-y-3" data-testid="prep-proposal">
      <div className="fig-panel space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="fig-kicker">Aperçu de la proposition</p>
            <h2 className="fig-panel-title !mb-0">
              {hasStored ? props.previewName.trim() || "Projet envisagé" : "Projet envisagé"}
            </h2>
          </div>
          <span className={`fig-tag ${created ? "fig-tag-ok" : "fig-tag-warn"}`}>
            {created ? "Créé" : "Non créé"}
          </span>
        </div>

        {!hasStored && !props.editing ? (
          <div className="fig-empty-list" data-testid="prep-proposal-empty">
            {props.messageCount === 0 ? (
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Pas encore de proposition</div>
                  <div className="muted text-xs">
                    Discutez d&apos;abord avec Nora. La proposition n&apos;apparaît qu&apos;après un
                    acte explicite de votre part.
                  </div>
                </div>
              </div>
            ) : (
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Échange en cours</div>
                  <div className="muted text-xs">
                    Aucune proposition enregistrée. Constituez-en une pour inspecter avant création.
                  </div>
                </div>
              </div>
            )}
            <button
              type="button"
              className="btn secondary mt-2 w-full"
              disabled={created || props.messageCount === 0}
              onClick={props.onStartConstitute}
              data-testid="prep-constitute"
            >
              Constituer une proposition
            </button>
          </div>
        ) : null}

        {props.editing ? (
          <div className="space-y-2" data-testid="prep-proposal-edit">
            <p className="text-xs muted">
              Ajustement secondaire après inspection — n&apos;est pas le parcours principal.
            </p>
            <label className="block text-xs muted" htmlFor="prep-prop-name">
              Nom envisagé
            </label>
            <input
              id="prep-prop-name"
              className="input"
              value={props.draftName}
              onChange={(e) => props.onDraftName(e.target.value)}
              placeholder="Nom du projet envisagé"
              data-testid="prep-proposal-name"
            />
            <label className="block text-xs muted" htmlFor="prep-prop-summary">
              Résumé inspecté
            </label>
            <textarea
              id="prep-prop-summary"
              className="textarea"
              value={props.draftSummary}
              onChange={(e) => props.onDraftSummary(e.target.value)}
              placeholder="Intention, résultat visé, points ouverts…"
              data-testid="prep-proposal-summary"
            />
            {props.canAdoptLastNora ? (
              <button
                type="button"
                className="btn secondary"
                onClick={props.onAdoptLastNoraSummary}
                data-testid="prep-adopt-nora"
              >
                Reprendre le dernier message Nora comme résumé
              </button>
            ) : null}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn"
                disabled={props.busy}
                onClick={props.onSaveProposal}
                data-testid="prep-proposal-save"
              >
                Enregistrer pour inspection
              </button>
              <button
                type="button"
                className="btn secondary"
                disabled={props.busy}
                onClick={props.onCancelEdit}
              >
                Annuler
              </button>
            </div>
            <p className="text-xs muted">Révision création courante : {props.creationRevision}</p>
          </div>
        ) : null}

        {hasStored && !props.editing ? (
          <div className="space-y-2" data-testid="prep-proposal-ready">
            <div className="fig-msg text-sm space-y-2">
              <div>
                <span className="fig-tag fig-tag-muted mr-2">Intention</span>
                <span className="muted text-xs">
                  {props.previewName.trim() || "— (nom non renseigné)"}
                </span>
              </div>
              <div>
                <span className="fig-tag fig-tag-muted mr-2">Résumé</span>
                <p className="mt-1 whitespace-pre-wrap text-sm">
                  {props.previewSummary.trim() || "— (résumé non renseigné)"}
                </p>
              </div>
              <div>
                <span className="fig-tag fig-tag-muted mr-2">Ouvert</span>
                <span className="muted text-xs">
                  {props.openPoints.length > 0
                    ? `${props.openPoints.length} point(s) capitalisé(s)`
                    : "Aucun point ouvert capitalisé"}
                </span>
              </div>
            </div>
            {props.openPoints.slice(0, 4).map((o) => (
              <p key={o.id} className="text-xs muted pl-1">
                · {o.statement}
              </p>
            ))}
            <button
              type="button"
              className="btn secondary"
              disabled={created}
              onClick={props.onStartConstitute}
              data-testid="prep-proposal-adjust"
            >
              Ajuster la proposition
            </button>
            <p className="text-xs muted">Révision création : {props.creationRevision}</p>
          </div>
        ) : null}
      </div>

      <div className="fig-panel space-y-3" style={{ background: "rgba(101,111,225,0.08)" }}>
        <h3 className="fig-panel-title">Vous restez maître de la création</h3>
        <p className="text-sm muted">
          Une réponse Nora n&apos;est jamais une création. Le projet n&apos;existe qu&apos;après votre
          confirmation explicite sur l&apos;aperçu inspecté.
        </p>
        <button
          type="button"
          className="btn w-full"
          disabled={props.busy || created || !hasStored}
          onClick={props.onCreateProject}
          data-testid="prep-create-project"
        >
          {created ? "Projet déjà créé" : "Créer le projet"}
        </button>
        <p className="text-xs muted">
          Tu peux reprendre cette préparation quand tu le souhaites.
        </p>
      </div>

      {props.status ? (
        <p className="text-sm muted" data-testid="surface-status">
          {props.status}
        </p>
      ) : null}
    </aside>
  );
}
