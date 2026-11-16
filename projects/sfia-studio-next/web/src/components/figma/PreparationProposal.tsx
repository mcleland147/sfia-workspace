"use client";

/**
 * Living D2 aperçu — driven by PreparationProjection (and compatible preview fields).
 * « Constituer une proposition » is no longer the primary path; secondary adjust remains
 * for explicit Pilot inspection edits without becoming a second authority.
 */

import type { PreparationProjection } from "@/domains/preparation/projection";
import { canCreateFromProjection } from "@/domains/preparation/projection";

export type ProposalOpenPoint = { id: string; statement: string };

const ASSESSMENT_LABEL: Record<string, string> = {
  EXPLORING: "Exploration",
  CLARIFYING: "Clarification",
  PROPOSAL: "Proposition",
  BASE_SUFFICIENTE: "Base suffisante",
};

function statusLabel(status: string | undefined, sourceKind?: string): string {
  if (status === "PILOT_EXPRESSED") {
    return sourceKind === "PILOT_UI_EDIT" ? "Corrigé (inspection)" : "Exprimé";
  }
  if (status === "NORA_PROPOSED") return "Proposé";
  if (status === "NEEDS_CONFIRMATION") return "À préciser";
  return "—";
}

export function PreparationProposal(props: {
  projectId: string | null;
  previewName: string;
  previewSummary: string;
  creationRevision: number;
  messageCount: number;
  openPoints: ProposalOpenPoint[];
  projection: PreparationProjection | null;
  projectionFreshness?: "current" | "stale" | "unavailable" | "legacy";
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
  const created = Boolean(props.projectId);
  const projection = props.projection;
  const name =
    projection?.name?.value?.trim() ||
    props.previewName.trim() ||
    "";
  const intention = projection?.intention?.value?.trim() || "";
  const outcome = projection?.desiredOutcome?.value?.trim() || "";
  const scope = projection?.initialScope?.value?.trim() || "";
  const assessment = projection?.suggestion?.assessment;
  const explanation = projection?.suggestion?.explanation?.trim() || "";
  const openFromProjection = (projection?.openQuestions ?? []).filter((q) => q.value.trim());
  const openFromKnowledge = props.openPoints;
  const hasLiving =
    Boolean(name) ||
    Boolean(intention) ||
    Boolean(outcome) ||
    Boolean(scope) ||
    openFromProjection.length > 0 ||
    Boolean(explanation) ||
    Boolean(props.previewSummary.trim());
  const canCreate = !created && canCreateFromProjection(projection, props.previewName);

  return (
    <aside className="space-y-3" data-testid="prep-proposal">
      <div className="fig-panel space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="fig-kicker">Aperçu du projet</p>
            <h2 className="fig-panel-title !mb-0" data-testid="prep-proposal-title">
              {name || "En cours de clarification"}
            </h2>
          </div>
          <span
            className={`fig-tag ${created ? "fig-tag-ok" : assessment === "BASE_SUFFICIENTE" ? "fig-tag-ok" : "fig-tag-warn"}`}
            data-testid="prep-proposal-state"
          >
            {created
              ? "Créé"
              : assessment
                ? ASSESSMENT_LABEL[assessment] ?? assessment
                : hasLiving
                  ? "En construction"
                  : "À clarifier"}
          </span>
        </div>

        {!hasLiving && !props.editing ? (
          <div className="fig-empty-list" data-testid="prep-proposal-empty">
            <div className="fig-empty-row">
              <div>
                <div className="font-medium">
                  {props.messageCount === 0
                    ? "Commencez la conversation"
                    : "Nora affine encore l’intention"}
                </div>
                <div className="muted text-xs">
                  L’aperçu évolue avec les échanges. Aucun formulaire préalable n’est requis pour
                  avancer.
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {props.editing ? (
          <div className="space-y-2" data-testid="prep-proposal-edit">
            <p className="text-xs muted">
              Ajustement explicite pour inspection — n&apos;est pas le parcours principal.
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

        {hasLiving && !props.editing ? (
          <div className="space-y-2" data-testid="prep-proposal-ready">
            <div className="fig-msg text-sm space-y-2">
              {name ? (
                <div>
                  <span className="fig-tag fig-tag-muted mr-2">Nom</span>
                  <span className="text-xs" data-testid="prep-field-name">
                    {name}
                  </span>
                  {projection?.name ? (
                    <span className="muted text-xs ml-2" data-testid="prep-field-name-provenance">
                      · {statusLabel(projection.name.status, projection.name.source.kind)}
                    </span>
                  ) : null}
                </div>
              ) : null}
              {intention || props.previewSummary.trim() ? (
                <div>
                  <span className="fig-tag fig-tag-muted mr-2">Intention</span>
                  <p className="mt-1 whitespace-pre-wrap text-sm" data-testid="prep-field-intention">
                    {intention || props.previewSummary.trim()}
                  </p>
                  {projection?.intention ? (
                    <span className="muted text-xs">
                      {statusLabel(projection.intention.status)}
                    </span>
                  ) : null}
                </div>
              ) : null}
              {outcome ? (
                <div>
                  <span className="fig-tag fig-tag-muted mr-2">Résultat</span>
                  <p className="mt-1 whitespace-pre-wrap text-sm">{outcome}</p>
                </div>
              ) : null}
              {scope ? (
                <div>
                  <span className="fig-tag fig-tag-muted mr-2">Périmètre</span>
                  <p className="mt-1 whitespace-pre-wrap text-sm">{scope}</p>
                </div>
              ) : null}
              <div>
                <span className="fig-tag fig-tag-muted mr-2">Ouvert</span>
                <span className="muted text-xs">
                  {openFromProjection.length + openFromKnowledge.length > 0
                    ? `${openFromProjection.length + openFromKnowledge.length} point(s)`
                    : "Aucun point ouvert listé"}
                </span>
              </div>
            </div>
            {openFromProjection.slice(0, 4).map((q, i) => (
              <p key={`pq-${i}`} className="text-xs muted pl-1">
                · {q.value}
              </p>
            ))}
            {openFromKnowledge.slice(0, 4).map((o) => (
              <p key={o.id} className="text-xs muted pl-1">
                · {o.statement}
              </p>
            ))}
            {explanation ? (
              <div className="fig-msg text-sm" data-testid="prep-nora-assessment">
                <span className="fig-tag fig-tag-muted mr-2">Appréciation Nora</span>
                <p className="mt-1 whitespace-pre-wrap text-sm">{explanation}</p>
                <p className="text-xs muted mt-1">
                  Suggestion qualitative — jamais une autorisation de créer.
                </p>
              </div>
            ) : null}
            <button
              type="button"
              className="btn secondary"
              disabled={created}
              onClick={props.onStartConstitute}
              data-testid="prep-constitute"
            >
              Ajuster l&apos;aperçu
            </button>
            <p className="text-xs muted">
              Révision création : {props.creationRevision}
              {props.projectionFreshness === "legacy"
                ? " · aperçu partiel (préparation ancienne)"
                : props.projectionFreshness === "unavailable"
                  ? " · projection indisponible — dernière vérité conservée"
                  : ""}
            </p>
          </div>
        ) : null}

        {!hasLiving && !props.editing ? (
          <button
            type="button"
            className="btn secondary w-full"
            disabled={created}
            onClick={props.onStartConstitute}
            data-testid="prep-constitute"
          >
            Ajuster l&apos;aperçu manuellement
          </button>
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
          disabled={props.busy || created || !canCreate}
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
