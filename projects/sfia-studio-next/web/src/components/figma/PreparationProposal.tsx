"use client";

/**
 * Living D2 aperçu — single vertical panel aligned to Sas Nora Figma composition.
 * Create CTA lives inside this panel (frame 04). Corrections flow via conversation only.
 */

import type { PreparationProjection } from "@/domains/preparation/projection";
import { canCreateFromProjection } from "@/domains/preparation/projection";
import type { SasPresentationCopy } from "./sas-presentation";
import { shouldShowCreateProjectCta } from "./sas-presentation";

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
  projection: PreparationProjection | null;
  projectionFreshness?: "current" | "stale" | "unavailable" | "legacy";
  presentation: SasPresentationCopy;
  busy: boolean;
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
  // Current open set = D2 projection only (not the historical D4 OPEN catalogue).
  const openCombined = (projection?.openQuestions ?? [])
    .map((q) => q.value.trim())
    .filter(Boolean);
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
  const showCreateCta = shouldShowCreateProjectCta({ created, canCreate });

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
      value: intention || name || props.previewSummary.trim() || "Intention reprise",
      testId: "prep-field-intention",
      provenance: projection?.intention ? statusLabel(projection.intention.status) : undefined,
    });
    if (outcome) {
      sections.push({ key: "outcome", label: "RÉSULTAT CONSERVÉ", value: outcome });
    }
    if (scope) {
      sections.push({ key: "scope", label: "PÉRIMÈTRE CONSERVÉ", value: scope });
    }
    sections.push({
      key: "open",
      label: "POINTS TOUJOURS OUVERTS",
      value: openCombined[0] || "Aucun point ouvert listé",
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

        <div
          className="sas-preview-sections"
          data-testid={hasLiving ? "prep-proposal-ready" : "prep-proposal-empty"}
        >
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

        <div
          className={`sas-maturity ${stage === "base_sufficient" ? "sas-maturity-ok" : ""}`}
          data-testid="prep-nora-assessment"
        >
          <p className="sas-maturity-title">{props.presentation.maturityTitle}</p>
          <p className="sas-maturity-body">
            {explanation || props.presentation.maturityBody}
          </p>
        </div>

        {showCreateCta ? (
          <div
            className={`sas-create-block${stage === "base_sufficient" ? " sas-create-block-ready" : ""}`}
            data-testid="prep-create-block"
          >
            <button
              type="button"
              className="sas-create-btn"
              disabled={props.busy || created || !canCreate}
              onClick={props.onCreateProject}
              data-testid="prep-create-project"
            >
              {created ? "Projet déjà créé" : "Créer le projet"}
            </button>
            <p className="sas-create-hint">
              {stage === "base_sufficient"
                ? "Nora estime la base suffisante — la décision de créer vous appartient."
                : "Vous restez maître de la création — Nora peut encore préciser avec vous."}
            </p>
          </div>
        ) : (
          <p className="sas-preview-foot" data-testid="prep-create-unavailable">
            {created
              ? "Projet créé — continuité disponible dans l’espace projet."
              : "Indiquez un nom de projet dans la conversation pour pouvoir créer."}
          </p>
        )}

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
