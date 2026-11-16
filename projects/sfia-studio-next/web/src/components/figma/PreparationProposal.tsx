"use client";

/**
 * Living D2 aperçu — single vertical panel aligned to Sas Nora Figma composition.
 * Create CTA lives inside this panel (frame 04). No separate authority card.
 */

import type { PreparationProjection } from "@/domains/preparation/projection";
import { canCreateFromProjection } from "@/domains/preparation/projection";
import type { SasPresentationCopy } from "./sas-presentation";

export type ProposalOpenPoint = { id: string; statement: string };

function statusLabel(status: string | undefined, sourceKind?: string): string {
  if (status === "PILOT_EXPRESSED") {
    return sourceKind === "PILOT_UI_EDIT" ? "Corrigé (inspection)" : "Exprimé";
  }
  if (status === "NORA_PROPOSED") return "Proposé";
  if (status === "NEEDS_CONFIRMATION") return "À préciser";
  return "—";
}

function badgeClass(tone: SasPresentationCopy["panelBadgeTone"]): string {
  if (tone === "amber") return "sas-badge sas-badge-amber";
  if (tone === "green") return "sas-badge sas-badge-green";
  if (tone === "accent") return "sas-badge sas-badge-accent";
  return "sas-badge sas-badge-muted";
}

type Section = {
  key: string;
  label: string;
  value: string;
  tone?: "default" | "amber" | "quiet";
  provenance?: string;
  testId?: string;
};

export function PreparationProposal(props: {
  projectId: string | null;
  previewName: string;
  previewSummary: string;
  creationRevision: number;
  messageCount: number;
  openPoints: ProposalOpenPoint[];
  projection: PreparationProjection | null;
  projectionFreshness?: "current" | "stale" | "unavailable" | "legacy";
  presentation: SasPresentationCopy;
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
    projection?.name?.value?.trim() || props.previewName.trim() || "";
  const intention = projection?.intention?.value?.trim() || "";
  const outcome = projection?.desiredOutcome?.value?.trim() || "";
  const scope = projection?.initialScope?.value?.trim() || "";
  const assessment = projection?.suggestion?.assessment;
  const explanation = projection?.suggestion?.explanation?.trim() || "";
  const openFromProjection = (projection?.openQuestions ?? []).filter((q) => q.value.trim());
  const openFromKnowledge = props.openPoints;
  const openCombined = [
    ...openFromProjection.map((q) => q.value),
    ...openFromKnowledge.map((o) => o.statement),
  ].filter(Boolean);
  const hasLiving =
    Boolean(name) ||
    Boolean(intention) ||
    Boolean(outcome) ||
    Boolean(scope) ||
    openCombined.length > 0 ||
    Boolean(explanation) ||
    Boolean(props.previewSummary.trim());
  const canCreate = !created && canCreateFromProjection(projection, props.previewName);
  const stage = props.presentation.stage;
  // CTA composition belongs to frame 04; still honors D2 canCreate (no extra Nora gate).
  const showCreateCta =
    !created &&
    canCreate &&
    (stage === "base_sufficient" || assessment === "BASE_SUFFICIENTE");

  const sections: Section[] = [];
  if (stage === "first_intention" && !hasLiving) {
    sections.push(
      {
        key: "intention",
        label: "INTENTION",
        value: "À découvrir ensemble",
        tone: "quiet",
      },
      {
        key: "outcome",
        label: "RÉSULTAT ENVISAGÉ",
        value: "Pas encore défini",
        tone: "quiet",
      },
      {
        key: "open",
        label: "À CLARIFIER",
        value: "Nous partirons de votre première idée.",
        tone: "quiet",
      },
    );
  } else if (stage === "resume") {
    sections.push({
      key: "intention",
      label: "INTENTION CONSERVÉE",
      value: name || intention || props.previewSummary.trim() || "Intention reprise",
      testId: "prep-field-name",
      provenance: projection?.name
        ? statusLabel(projection.name.status, projection.name.source.kind)
        : undefined,
    });
    if (outcome || intention || props.previewSummary.trim()) {
      sections.push({
        key: "acquis",
        label: "ACQUIS",
        value:
          [intention || props.previewSummary.trim(), outcome, scope].filter(Boolean).join(" · ") ||
          "Éléments déjà clarifiés",
        testId: "prep-field-intention",
      });
    }
    sections.push({
      key: "open",
      label: "POINT EN SUSPENS",
      value: openCombined[0] || "À préciser dans la conversation",
      tone: openCombined.length ? "amber" : "quiet",
    });
  } else {
    if (name || stage === "proposal" || stage === "base_sufficient") {
      sections.push({
        key: "name",
        label:
          stage === "base_sufficient"
            ? "NOM PROPOSÉ"
            : stage === "proposal"
              ? "NOM DE TRAVAIL"
              : "NOM",
        value: name || "Projet envisagé",
        testId: "prep-field-name",
        provenance: projection?.name
          ? statusLabel(projection.name.status, projection.name.source.kind)
          : undefined,
      });
    }
    sections.push({
      key: "intention",
      label: stage === "proposal" ? "INTENTION COMPRISE" : "INTENTION",
      value: intention || props.previewSummary.trim() || "À découvrir ensemble",
      tone: intention || props.previewSummary.trim() ? "default" : "quiet",
      testId: "prep-field-intention",
      provenance: projection?.intention ? statusLabel(projection.intention.status) : undefined,
    });
    if (outcome || stage === "clarification" || stage === "proposal" || stage === "base_sufficient") {
      sections.push({
        key: "outcome",
        label:
          stage === "proposal"
            ? "PREMIER RÉSULTAT"
            : stage === "clarification"
              ? "RÉSULTAT VISÉ"
              : "RÉSULTAT ENVISAGÉ",
        value: outcome || (stage === "first_intention" ? "Pas encore défini" : "À préciser"),
        tone: outcome ? "default" : "quiet",
      });
    }
    if (scope) {
      sections.push({
        key: "scope",
        label: stage === "base_sufficient" ? "PREMIER PÉRIMÈTRE" : "PÉRIMÈTRE",
        value: scope,
      });
    }
    sections.push({
      key: "open",
      label:
        stage === "base_sufficient"
          ? "OUVERT POUR LA SUITE"
          : stage === "proposal"
            ? "À CONFIRMER"
            : stage === "clarification"
              ? "À PRÉCISER"
              : "À CLARIFIER",
      value:
        openCombined[0] ||
        (stage === "first_intention"
          ? "Nous partirons de votre première idée."
          : "Aucun point ouvert listé"),
      tone: openCombined.length
        ? stage === "base_sufficient"
          ? "default"
          : "amber"
        : "quiet",
    });
  }

  return (
    <aside className="sas-preview" data-testid="prep-proposal">
      <div className="sas-preview-inner">
        <div className="sas-preview-head">
          <p className="sas-preview-kicker">APERÇU DU PROJET</p>
          <span
            className={badgeClass(props.presentation.panelBadgeTone)}
            data-testid="prep-proposal-state"
          >
            {created ? "Créé" : props.presentation.panelBadge}
          </span>
        </div>

        <h2 className="sas-preview-title" data-testid="prep-proposal-title">
          {name || "Projet envisagé"}
        </h2>
        <p className="sas-preview-sub">Proposition évolutive de Nora · non autorisante</p>

        {props.editing ? (
          <div className="sas-preview-edit space-y-2" data-testid="prep-proposal-edit">
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
          </div>
        ) : (
          <div className="sas-preview-sections" data-testid={hasLiving ? "prep-proposal-ready" : "prep-proposal-empty"}>
            {sections.map((section) => (
              <div key={section.key} className="sas-preview-section">
                <p className="sas-preview-label">{section.label}</p>
                <p
                  className={`sas-preview-value${
                    section.tone === "amber"
                      ? " is-amber"
                      : section.tone === "quiet"
                        ? " is-quiet"
                        : ""
                  }`}
                  data-testid={section.testId}
                >
                  {section.value}
                </p>
                {section.provenance ? (
                  <span className="sas-preview-provenance" data-testid={`${section.testId}-provenance`}>
                    · {section.provenance}
                  </span>
                ) : null}
              </div>
            ))}
            {openCombined.length > 1
              ? openCombined.slice(1, 4).map((q, i) => (
                  <p key={`oq-${i}`} className="sas-preview-open-extra">
                    · {q}
                  </p>
                ))
              : null}
          </div>
        )}

        {!props.editing ? (
          <div
            className={`sas-maturity ${stage === "base_sufficient" ? "sas-maturity-ok" : ""}`}
            data-testid="prep-nora-assessment"
          >
            <p className="sas-maturity-title">{props.presentation.maturityTitle}</p>
            <p className="sas-maturity-body">
              {explanation && stage === "base_sufficient"
                ? explanation
                : props.presentation.maturityBody}
            </p>
          </div>
        ) : null}

        {showCreateCta ? (
          <div className="sas-create-block">
            <button
              type="button"
              className="sas-create-btn"
              disabled={props.busy || created || !canCreate}
              onClick={props.onCreateProject}
              data-testid="prep-create-project"
            >
              {created ? "Projet déjà créé" : "Créer le projet"}
            </button>
            <p className="sas-create-hint">Ou continuer à préciser avec Nora</p>
          </div>
        ) : (
          <p className="sas-preview-foot">
            {created
              ? "Projet créé — continuité disponible dans l’espace projet."
              : "Aucun projet durable créé à ce stade"}
          </p>
        )}

        {!props.editing && !created ? (
          <button
            type="button"
            className="btn secondary sas-preview-adjust"
            onClick={props.onStartConstitute}
            data-testid="prep-constitute"
          >
            Ajuster l&apos;aperçu
          </button>
        ) : null}

        <p className="sas-preview-meta muted text-xs sr-only" data-testid="prep-creation-revision">
          Révision création : {props.creationRevision}
          {props.projectionFreshness === "legacy"
            ? " · aperçu partiel (préparation ancienne)"
            : props.projectionFreshness === "unavailable"
              ? " · projection indisponible — dernière vérité conservée"
              : ""}
          {assessment ? ` · ${assessment}` : ""}
        </p>

        {props.status ? (
          <p className="text-sm muted" data-testid="surface-status">
            {props.status}
          </p>
        ) : null}
      </div>
    </aside>
  );
}
