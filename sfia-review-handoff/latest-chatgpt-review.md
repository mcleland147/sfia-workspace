# SFIA Review Pack — FULL
## FINALIZATION-READINESS-PILOT-GUIDANCE-01 — SAME-MACRO CORRECTION (RC-01..RC-04)

Timestamp (UTC): `2026-09-25T12:50:32Z`

## 1. GIT TRUTH

| Field | Value |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Branch | `feat/sfia-studio-finalization-readiness-pilot-guidance-01` |
| HEAD | `6ac7eafb1f9177d3ccb9a129de7cfbc51195de7f` |
| origin/main | `6ac7eafb1f9177d3ccb9a129de7cfbc51195de7f` |
| Remote base drift | **NONE** |
| Candidate | LOCAL DIRTY / UNCOMMITTED |
| Project commit/push/PR | **NOT AUTHORIZED / NOT EXECUTED** |

### Local status

**Modified Product (reviewed five + pack):**
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css` (prior candidate; unchanged this correction)
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts` (GAP-01 prior; unchanged this correction)
- `.tmp-sfia-review/chatgpt-review.md`

**Untracked residual preserved:** `.tmp-sfia-review/**` proof dirs + `finalization-readiness-pilot-guidance/`

**Staged:** none · Unexpected Product paths outside the five: **NONE**

`git diff --check`: clean after EOF trim.

## 2. Qualification

Delivery / EVOL / Critical · Macro `FINALIZATION-READINESS-PILOT-GUIDANCE-01` · `ckc:studio:delivery` · UX companion guidance only · **presentation-led** · assessment engine / eligibility / HD authority / persistence **KEEP / UNCHANGED**

Pre-correction handoff tip (historical): commit `956c3542…` / blob `b69104ce…`

## 3. Review findings → corrections

### RC-01 — Mixed group roll-up

**Finding:** `groupSummaryFor(governed_effects)` fell through to Satisfait when mixed SATISFIED/N/A + TO_QUALIFY; `work_of_cycle` only tested TO_TREAT.

**Correction:** deterministic precedence for both groups:
1. any TO_TREAT → À traiter
2. else any TO_QUALIFY → À qualifier (governed all-unknown still « À décider »)
3. else all NOT_APPLICABLE → Non applicable
4. else Satisfait

### RC-02 — Pilot decision waiting

**Finding:** HD MISSING classified TO_TREAT when not readyExceptFinalize → inflated toTreatCount.

**Correction:**
- `classifyObligationPresentation`: non-satisfied `human_decision` → always `AWAITING_PILOT_DECISION` (before generic MISSING/BLOCKING)
- counters: HD awaiting excluded from `toTreatCount`; `pilotDecisionPending` exposed
- `countLine` / headline / `formatAssessFeedback` omit zero fragments; include N/A and « décision Pilote en attente » when useful
- Pilot group: En attente (no Finaliser) until readyExceptFinalize → Prêt + Finaliser

### RC-03 — N/A code leak

**Finding:** `humanizeSnake(notApplicableReason)` could surface internal codes.

**Correction:** `explainNotApplicable()` maps known `opt:no-*` / Pilot-policy reasons to French business copy; unrecognized → conservative « explicitement déclarée non applicable »; **no** snake_case / humanized enum in UI copy. `humanizeSnake` removed.

### RC-04 — Single Finaliser

**Finding:** `lifecycle-finalize-from-readiness` duplicated generic primary/secondary Finaliser when assessment colocated + ready.

**Correction:** `showGroupedFinalize = colocateGuidance && ready && pilot_authority group present` → suppress generic Finaliser CTAs; both paths still call `runAction("FINALIZE")` only.

### Kept accepted parts

Grouping / readiness heading / assessedAt / UNKNOWN progressive disclosure / colocated trajectory+Reservation+policy+deliverable / recommendation clarity / GAP-01 HOLD wording / CSS tokens — **unchanged**.

## 4. COMPLETE USEFUL DIFFS

### 4.a lifecyclePresentation.ts (full working-tree patch vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
index 62516b61..80c92460 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
@@ -131,7 +131,7 @@ export function presentLifecycleBlockerRows(

 export function obligationStatusLabel(o: FinalizationObligation): string {
   if (o.applicability === "NOT_APPLICABLE") return "Non applicable";
-  if (o.applicability === "UNKNOWN") return "À confirmer";
+  if (o.applicability === "UNKNOWN") return "À qualifier";
   if (o.status === "SATISFIED") return "Satisfait";
   if (o.status === "BLOCKING" || o.blocking) return "Bloquant";
   if (o.status === "PENDING") return "En attente";
@@ -353,3 +353,579 @@ export function lifecycleCtaPresentation(projection: PilotLifecycleProjection):
     readyExceptFinalize: ready && !terminalDisplay,
   };
 }
+
+/* -------------------------------------------------------------------------- */
+/* FINALIZATION-READINESS-PILOT-GUIDANCE-01 — presentation-only helpers       */
+/* UI classification / explanations. Never mutate assessment Truth C.         */
+/* -------------------------------------------------------------------------- */
+
+export type FinalizationReadinessKind =
+  | "SATISFIED"
+  | "NOT_APPLICABLE"
+  | "TO_QUALIFY"
+  | "TO_TREAT"
+  | "AWAITING_PILOT_DECISION";
+
+export type FinalizationConditionGroupId =
+  | "work_of_cycle"
+  | "governed_effects"
+  | "pilot_authority";
+
+const WORK_FAMILIES = new Set(["exit_criteria", "blockers"]);
+const PILOT_FAMILIES = new Set(["human_decision"]);
+
+/**
+ * UI-only readiness class mapped transparently from domain obligation state.
+ */
+export function classifyObligationPresentation(
+  o: FinalizationObligation,
+  _assessment: FinalizationAssessment | null | undefined,
+): FinalizationReadinessKind {
+  if (o.applicability === "UNKNOWN") return "TO_QUALIFY";
+  if (o.applicability === "NOT_APPLICABLE" || o.status === "NOT_APPLICABLE") {
+    return "NOT_APPLICABLE";
+  }
+  if (o.status === "SATISFIED") return "SATISFIED";
+  // RC-02 — final Pilot decision is waiting, never a current "to treat" work item.
+  if (o.family === "human_decision") {
+    return "AWAITING_PILOT_DECISION";
+  }
+  if (
+    o.status === "BLOCKING" ||
+    o.status === "MISSING" ||
+    o.status === "PENDING" ||
+    o.blocking
+  ) {
+    return "TO_TREAT";
+  }
+  return "TO_TREAT";
+}
+
+export function readinessKindLabel(kind: FinalizationReadinessKind): string {
+  switch (kind) {
+    case "SATISFIED":
+      return "Satisfait";
+    case "NOT_APPLICABLE":
+      return "Non applicable";
+    case "TO_QUALIFY":
+      return "À qualifier";
+    case "TO_TREAT":
+      return "À traiter";
+    case "AWAITING_PILOT_DECISION":
+      return "En attente";
+  }
+}
+
+/**
+ * Human explanation for a known obligation. Presentation only — no invention
+ * of provenance. Unknown details fall back to conservative generic wording.
+ */
+export function obligationExplanation(o: FinalizationObligation): string {
+  const detail = typeof o.detail === "string" ? o.detail.trim() : "";
+  const naReason =
+    typeof o.notApplicableReason === "string"
+      ? o.notApplicableReason.trim()
+      : "";
+
+  if (o.applicability === "UNKNOWN") {
+    switch (o.family) {
+      case "artifact":
+        return "Il faut préciser si un livrable est requis pour ce cycle.";
+      case "execution_contract":
+        return "Il faut préciser si une exécution gouvernée est requise pour ce cycle.";
+      case "evidence":
+        return "Il faut préciser si une Evidence est requise pour ce cycle.";
+      case "review_bundle":
+        return "Il faut préciser si un ReviewBundle est requis pour ce cycle.";
+      case "git_repository":
+        return "Il faut préciser si un effet Git est requis pour ce cycle.";
+      default:
+        return "Il faut encore préciser si cet effet s’applique à ce cycle.";
+    }
+  }
+
+  if (o.applicability === "NOT_APPLICABLE" || o.status === "NOT_APPLICABLE") {
+    return explainNotApplicable(o.family, naReason);
+  }
+
+  if (o.status === "SATISFIED") {
+    if (detail === "no_blocking_reservations") {
+      return "Aucune réserve bloquante active.";
+    }
+    if (detail === "trajectory_steps_closed_or_skipped") {
+      return "L’étape de trajectoire liée est clôturée ou écartée.";
+    }
+    if (detail === "bound_trajectory_step_completed") {
+      return "L’étape de trajectoire liée est clôturée.";
+    }
+    if (detail === "artifact_proof_present") {
+      return "Une preuve de livrable est présente pour ce cycle.";
+    }
+    if (detail === "contracts_completed") {
+      return "Les contrats d’exécution requis sont terminés.";
+    }
+    if (detail.startsWith("supporting_evidence:")) {
+      return "Des Evidence de soutien sont disponibles pour ce cycle.";
+    }
+    if (detail.startsWith("accepted_review_bundles:")) {
+      return "Des ReviewBundle acceptés sont disponibles.";
+    }
+    if (detail === "git_proof_present") {
+      return "Une preuve Git requise est présente.";
+    }
+    if (detail.startsWith("finalize_decision:")) {
+      return "La décision Pilote de finalisation est enregistrée.";
+    }
+    return "Condition satisfaite selon l’assessment courant.";
+  }
+
+  if (o.status === "MISSING" || o.status === "BLOCKING" || o.blocking) {
+    if (
+      detail === "finalize_human_decision_absent" ||
+      detail === "human_decision_finalize_missing"
+    ) {
+      return "La décision finale du Pilote n’a pas encore été prise.";
+    }
+    if (
+      detail.startsWith("open_steps:") ||
+      detail === "bound_trajectory_step_incomplete" ||
+      detail === "exit_criteria_incomplete"
+    ) {
+      return "L’étape de trajectoire liée au cycle est encore ouverte.";
+    }
+    if (
+      detail === "artifact_required_but_proof_absent" ||
+      detail === "artifact_missing"
+    ) {
+      return "Un livrable est requis, mais aucune preuve n’est encore présente.";
+    }
+    if (detail === "execution_required_but_no_contract") {
+      return "Une exécution gouvernée est requise, mais aucun contrat n’est présent.";
+    }
+    if (detail.startsWith("open_contracts:")) {
+      return "Des contrats d’exécution restent ouverts.";
+    }
+    if (detail === "evidence_required_but_absent") {
+      return "Une Evidence est requise, mais absente.";
+    }
+    if (detail.startsWith("pending_evidence:")) {
+      return "Des Evidence restent en attente.";
+    }
+    if (detail === "review_required_but_absent") {
+      return "Un ReviewBundle est requis, mais absent.";
+    }
+    if (detail.startsWith("open_review_bundles:")) {
+      return "Des ReviewBundle restent ouverts.";
+    }
+    if (detail === "git_applicable_but_no_proof") {
+      return "Une preuve Git est requise, mais absente.";
+    }
+    if (detail.includes("|") || detail.length > 0) {
+      if (o.family === "blockers" && detail !== "no_blocking_reservations") {
+        return "Une ou plusieurs réserves bloquantes restent actives.";
+      }
+    }
+    if (o.family === "exit_criteria") {
+      return "Des critères de sortie restent ouverts.";
+    }
+    if (o.family === "blockers") {
+      return "Une réserve bloquante empêche la finalisation.";
+    }
+    return "Cette condition n’est pas encore remplie.";
+  }
+
+  if (o.status === "PENDING") {
+    return "Cette condition est encore en cours d’évaluation ou d’attente.";
+  }
+
+  return "État reconnu par l’assessment — vérifier le détail du cycle.";
+}
+
+/**
+ * RC-03 — business-facing N/A copy only. Never surface snake_case / policy ids.
+ */
+function explainNotApplicable(family: string, naReason: string): string {
+  const reason = naReason.trim();
+  if (
+    reason === "pilot_declared_no_governed_effects" ||
+    reason === "pilot_confirmed_no_governed_effects" ||
+    reason.includes("opt:no-governed-effects")
+  ) {
+    return "Le Pilote a confirmé qu’aucun effet gouverné n’est requis pour ce cycle.";
+  }
+  if (reason.includes("opt:no-artifact")) {
+    return "Aucun livrable n’est requis pour ce cycle.";
+  }
+  if (reason.includes("opt:no-execution")) {
+    return "Aucune exécution gouvernée n’est requise pour ce cycle.";
+  }
+  if (reason.includes("opt:no-evidence")) {
+    return "Aucune Evidence n’est requise pour ce cycle.";
+  }
+  if (reason.includes("opt:no-review")) {
+    return "Aucun ReviewBundle n’est requis pour ce cycle.";
+  }
+  if (reason.includes("opt:no-git")) {
+    return "Aucun effet Git n’est requis pour ce cycle.";
+  }
+  if (reason === "no_positive_sources") {
+    return "Aucun signal positif n’a rendu cet effet applicable à ce cycle.";
+  }
+  if (reason.startsWith("pilot_hd_obligation_policy:")) {
+    // Known prefix but unrecognized option — still business-facing, no raw id.
+    switch (family) {
+      case "artifact":
+        return "Aucun livrable n’est requis pour ce cycle.";
+      case "execution_contract":
+        return "Aucune exécution gouvernée n’est requise pour ce cycle.";
+      case "evidence":
+        return "Aucune Evidence n’est requise pour ce cycle.";
+      case "review_bundle":
+        return "Aucun ReviewBundle n’est requis pour ce cycle.";
+      case "git_repository":
+        return "Aucun effet Git n’est requis pour ce cycle.";
+      default:
+        return "Cette condition a été explicitement déclarée non applicable pour ce cycle.";
+    }
+  }
+  if (reason.length > 0) {
+    return "Cette condition a été explicitement déclarée non applicable pour ce cycle.";
+  }
+  switch (family) {
+    case "artifact":
+      return "Aucun livrable n’est requis pour ce cycle.";
+    case "execution_contract":
+      return "Aucune exécution gouvernée n’est requise pour ce cycle.";
+    case "evidence":
+      return "Aucune Evidence n’est requise pour ce cycle.";
+    case "review_bundle":
+      return "Aucun ReviewBundle n’est requis pour ce cycle.";
+    case "git_repository":
+      return "Aucun effet Git n’est requis pour ce cycle.";
+    default:
+      return "Cette condition a été explicitement déclarée non applicable pour ce cycle.";
+  }
+}
+
+export function formatAssessedAt(assessedAt: string | null | undefined): string | null {
+  if (!assessedAt || typeof assessedAt !== "string") return null;
+  const d = new Date(assessedAt);
+  if (Number.isNaN(d.getTime())) return assessedAt;
+  try {
+    return new Intl.DateTimeFormat("fr-FR", {
+      dateStyle: "short",
+      timeStyle: "short",
+    }).format(d);
+  } catch {
+    return assessedAt;
+  }
+}
+
+export type FinalizationReadinessSummary = {
+  readonly satisfiedCount: number;
+  readonly toTreatCount: number;
+  readonly toQualifyCount: number;
+  readonly notApplicableCount: number;
+  /** True when a human_decision obligation is awaiting Pilot (not Satisfied). */
+  readonly pilotDecisionPending: boolean;
+  /**
+   * True when non-human blockers are clear and only finalize HD remains
+   * (`readyExceptFinalizeDecision`). Distinct from pilotDecisionPending.
+   */
+  readonly awaitingPilotDecision: boolean;
+  readonly headline: string;
+  readonly countLine: string;
+  readonly assessedAtLabel: string | null;
+};
+
+/**
+ * Build concise French readiness fragments; omit zero-count parts.
+ */
+export function formatReadinessCountParts(
+  summary: Pick<
+    FinalizationReadinessSummary,
+    | "satisfiedCount"
+    | "toTreatCount"
+    | "toQualifyCount"
+    | "notApplicableCount"
+    | "pilotDecisionPending"
+  >,
+): string[] {
+  const parts: string[] = [];
+  if (summary.satisfiedCount > 0) {
+    parts.push(
+      `${summary.satisfiedCount} satisfaite${summary.satisfiedCount > 1 ? "s" : ""}`,
+    );
+  }
+  if (summary.toTreatCount > 0) {
+    parts.push(`${summary.toTreatCount} à traiter`);
+  }
+  if (summary.toQualifyCount > 0) {
+    parts.push(`${summary.toQualifyCount} à qualifier`);
+  }
+  if (summary.notApplicableCount > 0) {
+    parts.push(
+      `${summary.notApplicableCount} non applicable${summary.notApplicableCount > 1 ? "s" : ""}`,
+    );
+  }
+  if (summary.pilotDecisionPending) {
+    parts.push("décision Pilote en attente");
+  }
+  return parts;
+}
+
+/**
+ * Deterministic readiness summary from current assessment (presentation only).
+ */
+export function summarizeFinalizationReadiness(
+  assessment: FinalizationAssessment | null | undefined,
+): FinalizationReadinessSummary | null {
+  if (!assessment) return null;
+  let satisfiedCount = 0;
+  let toTreatCount = 0;
+  let toQualifyCount = 0;
+  let notApplicableCount = 0;
+  let pilotDecisionPending = false;
+  for (const o of assessment.obligations) {
+    const kind = classifyObligationPresentation(o, assessment);
+    if (kind === "SATISFIED") satisfiedCount += 1;
+    else if (kind === "TO_QUALIFY") toQualifyCount += 1;
+    else if (kind === "NOT_APPLICABLE") notApplicableCount += 1;
+    else if (kind === "AWAITING_PILOT_DECISION") {
+      pilotDecisionPending = true;
+    } else toTreatCount += 1;
+  }
+  const awaitingPilotDecision = readyExceptFinalizeDecision(assessment);
+  const countParts = formatReadinessCountParts({
+    satisfiedCount,
+    toTreatCount,
+    toQualifyCount,
+    notApplicableCount,
+    pilotDecisionPending,
+  });
+  const countLine = countParts.join(" · ");
+  let headline: string;
+  if (awaitingPilotDecision) {
+    headline =
+      "Conditions satisfaites — prêt pour décision du Pilote";
+  } else if (countParts.length > 0) {
+    headline = `Vérification terminée — ${countParts.join(" · ")}`;
+  } else {
+    headline = "Vérification terminée";
+  }
+  return {
+    satisfiedCount,
+    toTreatCount,
+    toQualifyCount,
+    notApplicableCount,
+    pilotDecisionPending,
+    awaitingPilotDecision,
+    headline,
+    countLine,
+    assessedAtLabel: formatAssessedAt(assessment.assessedAt),
+  };
+}
+
+/**
+ * ASSESS feedback — deterministic French summary from returned assessment.
+ */
+export function formatAssessFeedback(
+  assessment: FinalizationAssessment | null | undefined,
+): string {
+  const summary = summarizeFinalizationReadiness(assessment);
+  if (!summary) {
+    return "Vérification terminée — assessment indisponible (fail-closed).";
+  }
+  if (summary.awaitingPilotDecision) {
+    return "Vérification terminée — toutes les conditions non humaines sont satisfaites. Le cycle peut être soumis à la décision finale du Pilote.";
+  }
+  if (summary.countLine.length === 0) {
+    return "Vérification terminée.";
+  }
+  return `Vérification terminée — ${summary.countLine.replace(/ · /g, ", ")}.`;
+}
+
+export type FinalizationConditionRow = {
+  readonly family: string;
+  readonly title: string;
+  readonly kind: FinalizationReadinessKind;
+  readonly statusLabel: string;
+  readonly explanation: string;
+  readonly obligation: FinalizationObligation;
+};
+
+export type FinalizationConditionGroup = {
+  readonly id: FinalizationConditionGroupId;
+  readonly title: string;
+  readonly summaryLabel: string;
+  readonly summaryExplanation: string;
+  readonly rows: readonly FinalizationConditionRow[];
+  readonly allUnknownGoverned: boolean;
+};
+
+function groupSummaryFor(
+  id: FinalizationConditionGroupId,
+  rows: readonly FinalizationConditionRow[],
+  assessment: FinalizationAssessment,
+): { summaryLabel: string; summaryExplanation: string; allUnknownGoverned: boolean } {
+  // RC-01 — deterministic precedence; never claim Satisfait while UNKNOWN remains.
+  const anyTreat = rows.some((r) => r.kind === "TO_TREAT");
+  const anyQualify = rows.some((r) => r.kind === "TO_QUALIFY");
+  const allNa =
+    rows.length > 0 && rows.every((r) => r.kind === "NOT_APPLICABLE");
+  const allUnknown =
+    rows.length > 0 && rows.every((r) => r.kind === "TO_QUALIFY");
+
+  if (id === "governed_effects") {
+    if (anyTreat) {
+      return {
+        summaryLabel: "À traiter",
+        summaryExplanation:
+          "Au moins un effet gouverné applicable n’est pas encore satisfait.",
+        allUnknownGoverned: false,
+      };
+    }
+    if (anyQualify) {
+      if (allUnknown) {
+        return {
+          summaryLabel: "À décider",
+          summaryExplanation:
+            "Il faut préciser si ce cycle doit produire un livrable ou d’autres effets gouvernés.",
+          allUnknownGoverned: true,
+        };
+      }
+      return {
+        summaryLabel: "À qualifier",
+        summaryExplanation:
+          "Certains effets gouvernés restent à qualifier avant finalisation.",
+        allUnknownGoverned: false,
+      };
+    }
+    if (allNa) {
+      return {
+        summaryLabel: "Non applicable",
+        summaryExplanation:
+          "Aucun effet gouverné n’est requis pour ce cycle selon l’assessment.",
+        allUnknownGoverned: false,
+      };
+    }
+    return {
+      summaryLabel: "Satisfait",
+      summaryExplanation: "Les effets gouvernés applicables sont satisfaits.",
+      allUnknownGoverned: false,
+    };
+  }
+  if (id === "work_of_cycle") {
+    if (anyTreat) {
+      return {
+        summaryLabel: "À traiter",
+        summaryExplanation:
+          "Du travail de cycle reste ouvert (critères de sortie ou réserves).",
+        allUnknownGoverned: false,
+      };
+    }
+    if (anyQualify) {
+      return {
+        summaryLabel: "À qualifier",
+        summaryExplanation:
+          "Une condition de travail du cycle reste à qualifier.",
+        allUnknownGoverned: false,
+      };
+    }
+    if (allNa) {
+      return {
+        summaryLabel: "Non applicable",
+        summaryExplanation:
+          "Les conditions de travail du cycle ne s’appliquent pas.",
+        allUnknownGoverned: false,
+      };
+    }
+    return {
+      summaryLabel: "Satisfait",
+      summaryExplanation: "Le travail de cycle requis pour finaliser est satisfait.",
+      allUnknownGoverned: false,
+    };
+  }
+  // pilot_authority
+  if (readyExceptFinalizeDecision(assessment)) {
+    return {
+      summaryLabel: "Prêt pour décision du Pilote",
+      summaryExplanation:
+        "Les conditions précédentes sont satisfaites. Seule la décision « Finaliser » reste.",
+      allUnknownGoverned: false,
+    };
+  }
+  return {
+    summaryLabel: "En attente",
+    summaryExplanation:
+      "Disponible lorsque les conditions précédentes sont satisfaites.",
+    allUnknownGoverned: false,
+  };
+}
+
+/**
+ * Group obligations into Work / Governed effects / Pilot authority.
+ */
+export function groupFinalizationObligations(
+  assessment: FinalizationAssessment | null | undefined,
+): readonly FinalizationConditionGroup[] {
+  if (!assessment) return [];
+  const work: FinalizationConditionRow[] = [];
+  const governed: FinalizationConditionRow[] = [];
+  const pilot: FinalizationConditionRow[] = [];
+  for (const o of assessment.obligations) {
+    const kind = classifyObligationPresentation(o, assessment);
+    const row: FinalizationConditionRow = {
+      family: o.family,
+      title: obligationFamilyLabel(o.family),
+      kind,
+      statusLabel: readinessKindLabel(kind),
+      explanation: obligationExplanation(o),
+      obligation: o,
+    };
+    if (WORK_FAMILIES.has(o.family)) work.push(row);
+    else if (PILOT_FAMILIES.has(o.family)) pilot.push(row);
+    else if (
+      (GOVERNED_EFFECT_FAMILIES as readonly string[]).includes(o.family)
+    ) {
+      governed.push(row);
+    } else {
+      work.push(row);
+    }
+  }
+  const groups: FinalizationConditionGroup[] = [];
+  if (work.length > 0) {
+    const s = groupSummaryFor("work_of_cycle", work, assessment);
+    groups.push({
+      id: "work_of_cycle",
+      title: "Travail du cycle",
+      summaryLabel: s.summaryLabel,
+      summaryExplanation: s.summaryExplanation,
+      rows: work,
+      allUnknownGoverned: false,
+    });
+  }
+  if (governed.length > 0) {
+    const s = groupSummaryFor("governed_effects", governed, assessment);
+    groups.push({
+      id: "governed_effects",
+      title: "Effets gouvernés",
+      summaryLabel: s.summaryLabel,
+      summaryExplanation: s.summaryExplanation,
+      rows: governed,
+      allUnknownGoverned: s.allUnknownGoverned,
+    });
+  }
+  if (pilot.length > 0) {
+    const s = groupSummaryFor("pilot_authority", pilot, assessment);
+    groups.push({
+      id: "pilot_authority",
+      title: "Décision du Pilote",
+      summaryLabel: s.summaryLabel,
+      summaryExplanation: s.summaryExplanation,
+      rows: pilot,
+      allUnknownGoverned: false,
+    });
+  }
+  return groups;
+}

```

### 4.b LifecycleSurface.tsx (full working-tree patch vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index bf43dbe4..8d1cf279 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -9,17 +9,19 @@ import {
 } from "@/features/project-assistant/actions";
 import { projectAssistantPrepareCandidateTrajectoryAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
+import type { FinalizationAssessment } from "@/lib/oa/cycle";
 import { SFIA_ASSISTANT_ANSWERED_EVENT } from "@/features/project-assistant/presentationLabels";
 import {
+  formatAssessFeedback,
+  groupFinalizationObligations,
   lifecycleCtaPresentation,
   lifecycleStatusBadge,
   nonHumanDecisionBlockers,
-  obligationFamilyLabel,
-  obligationStatusLabel,
   presentLifecycleBlockerRows,
   primaryFinalizeRecommendation,
   primaryNextCycleRecommendation,
   readyExceptFinalizeDecision,
+  summarizeFinalizationReadiness,
 } from "./lifecyclePresentation";
 import styles from "./LifecycleSurface.module.css";

@@ -129,7 +131,15 @@ export function LifecycleSurface({
               "Finalisation incomplète — des conditions restent ouvertes.",
           );
         } else if (action === "ASSESS") {
-          setInfo("Conditions de finalisation actualisées.");
+          const assessed =
+            (result.projection?.assessment as
+              | FinalizationAssessment
+              | null
+              | undefined) ??
+            (result.assessment as FinalizationAssessment | null | undefined) ??
+            projection?.assessment ??
+            null;
+          setInfo(formatAssessFeedback(assessed));
         } else {
           setInfo(null);
         }
@@ -257,6 +267,16 @@ export function LifecycleSurface({
     : (projection.reservationSummary ?? null);
   const showAssessment =
     !terminalDisplay && Boolean(projection.assessment);
+  const readinessSummary = summarizeFinalizationReadiness(projection.assessment);
+  const conditionGroups = groupFinalizationObligations(projection.assessment);
+  // When assessment UI is shown, colocate exit/policy CTAs in groups (avoid duplicate strips).
+  const colocateGuidance = showAssessment;
+  // RC-04 — one Finaliser when Pilot authority group already owns it.
+  const showGroupedFinalize =
+    colocateGuidance &&
+    ready &&
+    conditionGroups.some((g) => g.id === "pilot_authority");
+  const suppressGenericFinalize = showGroupedFinalize;

   return (
     <aside
@@ -304,7 +324,7 @@ export function LifecycleSurface({
           </p>
           {finalizeRec ? (
             <p className={styles.recMeta} data-testid="lifecycle-finalize-rec-notice">
-              Nora recommande de finaliser ce cycle
+              Nora recommande d’engager la finalisation de ce cycle.
             </p>
           ) : (
             <p className={styles.recMeta}>
@@ -312,8 +332,16 @@ export function LifecycleSurface({
             </p>
           )}
           <p className={styles.distinction}>
-            Recommandation ≠ décision Pilote · n’active pas le cycle
+            Recommandation ≠ décision Pilote · n’exécute aucune transition
           </p>
+          {finalizeRec ? (
+            <p
+              className={styles.distinction}
+              data-testid="lifecycle-finalize-rec-active-cycle"
+            >
+              Le cycle reste actif tant que le Pilote n’a pas finalisé.
+            </p>
+          ) : null}
         </section>
       ) : (
         <section className={styles.recBlock} data-testid="lifecycle-recommendation-empty">
@@ -328,8 +356,43 @@ export function LifecycleSurface({
         <section
           className={styles.block}
           data-testid="lifecycle-finalization-obligations"
+          aria-labelledby="lifecycle-readiness-heading"
         >
-          <h3 className={styles.blockTitle}>Conditions de finalisation</h3>
+          <h3
+            id="lifecycle-readiness-heading"
+            className={styles.blockTitle}
+          >
+            État de préparation à la finalisation
+          </h3>
+          {readinessSummary ? (
+            <div
+              className={styles.readinessSummary}
+              data-testid="lifecycle-readiness-summary"
+            >
+              <p
+                className={styles.readinessHeadline}
+                data-testid="lifecycle-readiness-headline"
+              >
+                {readinessSummary.headline}
+              </p>
+              {readinessSummary.assessedAtLabel ? (
+                <p
+                  className={styles.muted}
+                  data-testid="lifecycle-assessed-at"
+                >
+                  Dernière vérification : {readinessSummary.assessedAtLabel}
+                </p>
+              ) : null}
+              <p
+                className={styles.muted}
+                data-testid="lifecycle-readiness-counts"
+              >
+                {readinessSummary.countLine.length > 0
+                  ? readinessSummary.countLine
+                  : "Aucun compteur de condition à afficher."}
+              </p>
+            </div>
+          ) : null}
           {ready ? (
             <p className={styles.muted} data-testid="lifecycle-ready-finalize">
               Prêt pour décision de finalisation — seule la décision Pilote
@@ -353,32 +416,256 @@ export function LifecycleSurface({
                 </li>
               ))}
             </ul>
-          ) : (
-            <p className={styles.muted}>
-              Assessment disponible — vérifiez les obligations ci-dessous.
-            </p>
-          )}
-          <ul data-testid="lifecycle-obligation-list">
-            {projection.assessment!.obligations.map((o) => (
-              <li key={o.family} data-family={o.family} data-status={o.status}>
-                {obligationFamilyLabel(o.family)} — {obligationStatusLabel(o)}
-              </li>
-            ))}
-          </ul>
+          ) : null}
+
+          {conditionGroups.map((group) => (
+            <div
+              key={group.id}
+              className={styles.conditionGroup}
+              data-testid={`lifecycle-condition-group-${group.id}`}
+              data-group={group.id}
+            >
+              <h4 className={styles.conditionGroupTitle}>{group.title}</h4>
+              <p
+                className={styles.conditionGroupSummary}
+                data-testid={`lifecycle-condition-group-${group.id}-summary`}
+              >
+                <span className={styles.statusPill} data-kind={group.summaryLabel}>
+                  {group.summaryLabel}
+                </span>
+                {" — "}
+                {group.summaryExplanation}
+              </p>
+
+              {group.id === "governed_effects" && group.allUnknownGoverned ? (
+                <details
+                  className={styles.conditionDetails}
+                  data-testid="lifecycle-governed-effects-details"
+                >
+                  <summary>Voir les familles concernées</summary>
+                  <ul
+                    className={styles.conditionList}
+                    data-testid="lifecycle-obligation-list"
+                  >
+                    {group.rows.map((row) => (
+                      <li
+                        key={row.family}
+                        className={styles.conditionRow}
+                        data-family={row.family}
+                        data-status={row.obligation.status}
+                        data-kind={row.kind}
+                      >
+                        <div className={styles.conditionRowHead}>
+                          <span className={styles.conditionTitle}>
+                            {row.title}
+                          </span>
+                          <span
+                            className={styles.statusPill}
+                            data-kind={row.kind}
+                          >
+                            {row.statusLabel}
+                          </span>
+                        </div>
+                        <p className={styles.conditionExplain}>{row.explanation}</p>
+                      </li>
+                    ))}
+                  </ul>
+                </details>
+              ) : (
+                <ul
+                  className={styles.conditionList}
+                  data-testid={
+                    group.id === "work_of_cycle"
+                      ? "lifecycle-obligation-list-work"
+                      : group.id === "pilot_authority"
+                        ? "lifecycle-obligation-list-pilot"
+                        : "lifecycle-obligation-list"
+                  }
+                >
+                  {group.rows.map((row) => (
+                    <li
+                      key={row.family}
+                      className={styles.conditionRow}
+                      data-family={row.family}
+                      data-status={row.obligation.status}
+                      data-kind={row.kind}
+                    >
+                      <div className={styles.conditionRowHead}>
+                        <span className={styles.conditionTitle}>{row.title}</span>
+                        <span className={styles.statusPill} data-kind={row.kind}>
+                          {row.statusLabel}
+                        </span>
+                      </div>
+                      <p className={styles.conditionExplain}>{row.explanation}</p>
+                      {row.family === "exit_criteria" &&
+                      row.kind === "TO_TREAT" &&
+                      exitOpen ? (
+                        <button
+                          type="button"
+                          className={styles.btnSecondary}
+                          disabled={busy !== null}
+                          data-testid="lifecycle-complete-trajectory-step"
+                          onClick={() => void completeTrajectoryStep()}
+                        >
+                          Clôturer l’étape de trajectoire liée
+                        </button>
+                      ) : null}
+                      {row.family === "blockers" &&
+                      row.kind === "TO_TREAT" &&
+                      onOpenReservations ? (
+                        <button
+                          type="button"
+                          className={styles.btnSecondary}
+                          data-testid="lifecycle-open-reservations-from-condition"
+                          onClick={onOpenReservations}
+                        >
+                          Voir les réserves
+                        </button>
+                      ) : null}
+                      {row.family === "artifact" &&
+                      cta.showRequireArtifactContinuation &&
+                      !suppressGenericNoraCta ? (
+                        <button
+                          type="button"
+                          className={styles.btnSecondary}
+                          disabled={busy !== null}
+                          data-testid="lifecycle-define-deliverable-cta"
+                          onClick={focusAssistantForDeliverable}
+                        >
+                          Définir le livrable avec Nora
+                        </button>
+                      ) : null}
+                    </li>
+                  ))}
+                </ul>
+              )}
+
+              {group.id === "governed_effects" &&
+              (cta.showGroupedObligationPolicy ||
+                cta.showRequireArtifactPolicy) &&
+              policyConfirmKind === null ? (
+                <div
+                  className={styles.ctaRow}
+                  data-testid="lifecycle-obligation-policy"
+                >
+                  {cta.showGroupedObligationPolicy ? (
+                    <button
+                      type="button"
+                      className={styles.btnSecondary}
+                      disabled={busy !== null}
+                      data-testid="lifecycle-obligation-policy-cta"
+                      onClick={() => setPolicyConfirmKind("no-governed-effects")}
+                    >
+                      Confirmer qu’aucun effet gouverné n’est requis pour ce cycle
+                    </button>
+                  ) : null}
+                  {cta.showRequireArtifactPolicy ? (
+                    <button
+                      type="button"
+                      className={styles.btnSecondary}
+                      disabled={busy !== null}
+                      data-testid="lifecycle-require-artifact-cta"
+                      onClick={() => setPolicyConfirmKind("require-artifact")}
+                    >
+                      Un livrable est requis avant finalisation
+                    </button>
+                  ) : null}
+                </div>
+              ) : null}
+
+              {group.id === "governed_effects" &&
+              policyConfirmKind === "no-governed-effects" ? (
+                <div data-testid="lifecycle-obligation-policy-confirm">
+                  <p className={styles.muted}>
+                    Cette décision signifie que ce cycle ne requiert pas de
+                    livrable, d’exécution gouvernée, d’Evidence, de ReviewBundle
+                    ni d’effet Git. Elle n’est jamais automatique et ne finalise
+                    pas le cycle.
+                  </p>
+                  <button
+                    type="button"
+                    className={styles.btnPrimary}
+                    disabled={busy !== null}
+                    data-testid="lifecycle-obligation-policy-confirm-cta"
+                    onClick={() =>
+                      void confirmObligationPolicy("no-governed-effects")
+                    }
+                  >
+                    Confirmer explicitement
+                  </button>
+                  <button
+                    type="button"
+                    className={styles.btnSecondary}
+                    disabled={busy !== null}
+                    data-testid="lifecycle-obligation-policy-cancel"
+                    onClick={() => setPolicyConfirmKind(null)}
+                  >
+                    Annuler
+                  </button>
+                </div>
+              ) : null}
+
+              {group.id === "governed_effects" &&
+              policyConfirmKind === "require-artifact" ? (
+                <div data-testid="lifecycle-require-artifact-confirm">
+                  <p className={styles.muted}>
+                    Un livrable devra être défini et matérialisé avant de
+                    finaliser ce cycle. Aucune exécution automatique n’est
+                    lancée. Vous pourrez ensuite préciser la forme du livrable
+                    avec Nora.
+                  </p>
+                  <button
+                    type="button"
+                    className={styles.btnPrimary}
+                    disabled={busy !== null}
+                    data-testid="lifecycle-require-artifact-confirm-cta"
+                    onClick={() =>
+                      void confirmObligationPolicy("require-artifact")
+                    }
+                  >
+                    Confirmer : livrable requis
+                  </button>
+                  <button
+                    type="button"
+                    className={styles.btnSecondary}
+                    disabled={busy !== null}
+                    data-testid="lifecycle-require-artifact-cancel"
+                    onClick={() => setPolicyConfirmKind(null)}
+                  >
+                    Annuler
+                  </button>
+                </div>
+              ) : null}
+
+              {group.id === "pilot_authority" && showGroupedFinalize ? (
+                <div className={styles.ctaRow}>
+                  <button
+                    type="button"
+                    className={styles.btnPrimary}
+                    disabled={busy !== null || !cta.finalizeEnabled}
+                    data-testid="lifecycle-finalize-from-readiness"
+                    onClick={() => void runAction("FINALIZE")}
+                  >
+                    Finaliser
+                  </button>
+                </div>
+              ) : null}
+            </div>
+          ))}
         </section>
       ) : !terminalDisplay &&
         (projection.selectedStatus === "active" ||
           projection.selectedStatus === "paused" ||
           projection.selectedStatus === "blocked") ? (
         <section className={styles.block} data-testid="lifecycle-assessment-unavailable">
-          <h3 className={styles.blockTitle}>Conditions de finalisation</h3>
+          <h3 className={styles.blockTitle}>État de préparation à la finalisation</h3>
           <p className={styles.muted}>
             Assessment indisponible — fail-closed (aucune finalisation).
           </p>
         </section>
       ) : null}

-      {exitOpen ? (
+      {!colocateGuidance && exitOpen ? (
         <section className={styles.block} data-testid="lifecycle-exit-criteria-resolve">
           <h3 className={styles.blockTitle}>Critères de sortie</h3>
           <p className={styles.muted}>
@@ -466,7 +753,8 @@ export function LifecycleSurface({
         </section>
       ) : null}

-      {cta.showGroupedObligationPolicy || cta.showRequireArtifactPolicy ? (
+      {!colocateGuidance &&
+      (cta.showGroupedObligationPolicy || cta.showRequireArtifactPolicy) ? (
         <section className={styles.block} data-testid="lifecycle-obligation-policy">
           <h3 className={styles.blockTitle}>Effets gouvernés</h3>
           <p className={styles.muted}>
@@ -554,7 +842,9 @@ export function LifecycleSurface({
         </section>
       ) : null}

-      {cta.showRequireArtifactContinuation && !suppressGenericNoraCta ? (
+      {!colocateGuidance &&
+      cta.showRequireArtifactContinuation &&
+      !suppressGenericNoraCta ? (
         <section
           className={styles.block}
           data-testid="lifecycle-require-artifact-continuation"
@@ -644,7 +934,7 @@ export function LifecycleSurface({
             Vérifier les conditions de finalisation
           </button>
         ) : null}
-        {cta.showFinalizePrimary ? (
+        {cta.showFinalizePrimary && !suppressGenericFinalize ? (
           <button
             type="button"
             className={styles.btnPrimary}
@@ -655,7 +945,7 @@ export function LifecycleSurface({
             Finaliser
           </button>
         ) : null}
-        {cta.showFinalizeSecondary ? (
+        {cta.showFinalizeSecondary && !suppressGenericFinalize ? (
           <button
             type="button"
             className={styles.btnSecondary}

```

### 4.c LifecycleSurface.module.css (prior candidate; retained)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
index 6b3fa2c6..96dd9d6d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
@@ -123,3 +123,97 @@
   outline: 2px solid var(--pm6-forest);
   outline-offset: 2px;
 }
+
+.readinessSummary {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-1);
+}
+
+.readinessHeadline {
+  margin: 0;
+  font-size: 0.9rem;
+  font-weight: 600;
+  line-height: 1.4;
+  color: var(--pm6-ink);
+}
+
+.conditionGroup {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  padding-top: var(--pm6-space-3);
+  border-top: 1px solid var(--pm6-border-soft);
+}
+
+.conditionGroupTitle {
+  margin: 0;
+  font-size: 0.78rem;
+  font-weight: 700;
+  color: var(--pm6-ink);
+}
+
+.conditionGroupSummary {
+  margin: 0;
+  font-size: 0.8rem;
+  line-height: 1.45;
+  color: var(--pm6-ink-soft);
+}
+
+.conditionList {
+  margin: 0;
+  padding: 0;
+  list-style: none;
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+}
+
+.conditionRow {
+  display: flex;
+  flex-direction: column;
+  gap: 0.25rem;
+  min-width: 0;
+}
+
+.conditionRowHead {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: baseline;
+  justify-content: space-between;
+  gap: 0.35rem 0.75rem;
+}
+
+.conditionTitle {
+  font-size: 0.84rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+  min-width: 0;
+  overflow-wrap: anywhere;
+}
+
+.statusPill {
+  font-size: 0.72rem;
+  font-weight: 700;
+  letter-spacing: 0.02em;
+  color: var(--pm6-forest);
+  white-space: nowrap;
+}
+
+.conditionExplain {
+  margin: 0;
+  font-size: 0.78rem;
+  line-height: 1.45;
+  color: var(--pm6-muted);
+  overflow-wrap: anywhere;
+}
+
+.conditionDetails {
+  font-size: 0.8rem;
+  color: var(--pm6-ink-soft);
+}
+
+.conditionDetails summary {
+  cursor: pointer;
+  font-weight: 600;
+}

```

### 4.d GAP-01 HOLD wording (prior candidate; retained)

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index bb44df2e..5e30e9d7 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -235,7 +235,7 @@ export const CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE: ConversationGuidance
     kind: "HOLD",
     scope: "BLOCKER_RESOLUTION",
     statement:
-      "Le travail doit rester dans le cycle actif ; aucune transition n'est recommandée sur ce tour.",
+      "Le cycle reste actif sur ce tour ; aucune transition n’est exécutée sans décision du Pilote.",
     rationale: "active_cycle_scope_required",
   });


```

### 4.e lifecyclePresentation.phaseB.d0.test.tsx (FULL exploitable patch — REQUIRED)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
index 9f668d9e..dfaa4bab 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
@@ -3,23 +3,29 @@
  * ZERO REAL — mocked server actions only.
  * @vitest-environment jsdom
  */
-import { cleanup, render, waitFor } from "@testing-library/react";
+import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
 import { LifecycleSurface } from "@/features/pre-m6-product-ui/surfaces/LifecycleSurface";
 import type {
   FinalizationAssessment,
+  FinalizationObligation,
   LifecycleRecommendationEnvelope,
   PilotLifecycleProjection,
 } from "@/lib/oa/cycle";
 import {
   canOfferGroupedNoGovernedEffects,
   canOfferRequireArtifact,
+  classifyObligationPresentation,
+  FINALIZE_HD_BLOCKER,
+  formatAssessFeedback,
+  groupFinalizationObligations,
   lifecycleCtaPresentation,
   lifecycleStatusBadge,
   nonHumanDecisionBlockers,
+  obligationExplanation,
   readyExceptFinalizeDecision,
   showsRequireArtifactContinuation,
-  FINALIZE_HD_BLOCKER,
+  summarizeFinalizationReadiness,
   blockerLabel,
 } from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";

@@ -53,8 +59,9 @@ function fakeFinalizeEnvelope(): LifecycleRecommendationEnvelope {
   };
 }

-const { projectionMock } = vi.hoisted(() => ({
+const { projectionMock, lifecycleActionMock } = vi.hoisted(() => ({
   projectionMock: vi.fn(),
+  lifecycleActionMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/actions", () => ({
@@ -66,7 +73,8 @@ vi.mock("@/features/project-assistant/actions", () => ({
   })),
   projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
     projectionMock(...args),
-  projectAssistantPilotLifecycleAction: vi.fn(),
+  projectAssistantPilotLifecycleAction: (...args: unknown[]) =>
+    lifecycleActionMock(...args),
   projectAssistantRecordObligationPolicyAction: vi.fn(),
   projectAssistantCompleteTrajectoryStepAction: vi.fn(),
   projectAssistantResolveBlockingReservationAction: vi.fn(),
@@ -82,6 +90,7 @@ afterEach(() => {

 beforeEach(() => {
   projectionMock.mockReset();
+  lifecycleActionMock.mockReset();
 });

 function assessment(
@@ -348,4 +357,1123 @@ describe("JOURNEY-INTEGRITY — Lifecycle generic Nora CTA precedence", () => {
       ),
     ).not.toBeNull();
   });
+})
+
+const governedUnknown: FinalizationObligation[] = [
+  {
+    family: "artifact",
+    status: "PENDING",
+    applicability: "UNKNOWN",
+    detail: "artifact_applicability_unknown",
+    blocking: false,
+  },
+  {
+    family: "execution_contract",
+    status: "PENDING",
+    applicability: "UNKNOWN",
+    detail: "execution_contract_applicability_unknown",
+    blocking: false,
+  },
+  {
+    family: "evidence",
+    status: "PENDING",
+    applicability: "UNKNOWN",
+    detail: "evidence_applicability_unknown",
+    blocking: false,
+  },
+  {
+    family: "review_bundle",
+    status: "PENDING",
+    applicability: "UNKNOWN",
+    detail: "review_bundle_applicability_unknown",
+    blocking: false,
+  },
+  {
+    family: "git_repository",
+    status: "PENDING",
+    applicability: "UNKNOWN",
+    detail: "git_repository_applicability_unknown",
+    blocking: false,
+  },
+];
+
+describe("FR — finalization readiness presentation helpers", () => {
+  it("J — unknown internal detail falls back to generic wording (no fabricated reason)", () => {
+    expect(
+      obligationExplanation({
+        family: "artifact",
+        status: "PENDING",
+        applicability: "UNKNOWN",
+        detail: "artifact_applicability_unknown",
+        blocking: false,
+      }),
+    ).toBe("Il faut préciser si un livrable est requis pour ce cycle.");
+    expect(
+      obligationExplanation({
+        family: "artifact",
+        status: "MISSING",
+        applicability: "APPLICABLE",
+        detail: "totally_unknown_code_xyz",
+        blocking: true,
+      }),
+    ).toBe("Cette condition n’est pas encore remplie.");
+    expect(
+      classifyObligationPresentation(
+        {
+          family: "artifact",
+          status: "PENDING",
+          applicability: "UNKNOWN",
+          blocking: false,
+        },
+        null,
+      ),
+    ).toBe("TO_QUALIFY");
+  });
+
+  it("A — all governed effects UNKNOWN → group À décider + transparent families", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: [
+        "artifact_applicability_unknown",
+        "execution_contract_applicability_unknown",
+        "evidence_applicability_unknown",
+        "review_bundle_applicability_unknown",
+        "git_repository_applicability_unknown",
+        FINALIZE_HD_BLOCKER,
+      ],
+      obligations: [
+        {
+          family: "exit_criteria",
+          status: "SATISFIED",
+          applicability: "APPLICABLE",
+          detail: "trajectory_steps_closed_or_skipped",
+          blocking: false,
+        },
+        {
+          family: "blockers",
+          status: "SATISFIED",
+          applicability: "APPLICABLE",
+          detail: "no_blocking_reservations",
+          blocking: false,
+        },
+        ...governedUnknown,
+        {
+          family: "human_decision",
+          status: "MISSING",
+          applicability: "APPLICABLE",
+          detail: "finalize_human_decision_absent",
+          blocking: true,
+        },
+      ],
+    });
+    const groups = groupFinalizationObligations(a);
+    const governed = groups.find((g) => g.id === "governed_effects");
+    expect(governed?.allUnknownGoverned).toBe(true);
+    expect(governed?.summaryLabel).toBe("À décider");
+    expect(governed?.rows).toHaveLength(5);
+    const summary = summarizeFinalizationReadiness(a);
+    expect(summary?.toQualifyCount).toBe(5);
+    expect(formatAssessFeedback(a)).toMatch(/à qualifier/);
+  });
+});
+
+describe("FR — LifecycleSurface readiness guidance", () => {
+  it("A — UNKNOWN governed effects use group summary, not five unexplained primary rows", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: [
+            "artifact_applicability_unknown",
+            "execution_contract_applicability_unknown",
+            "evidence_applicability_unknown",
+            "review_bundle_applicability_unknown",
+            "git_repository_applicability_unknown",
+            FINALIZE_HD_BLOCKER,
+          ],
+          obligations: [
+            {
+              family: "exit_criteria",
+              status: "SATISFIED",
+              applicability: "APPLICABLE",
+              detail: "trajectory_steps_closed_or_skipped",
+              blocking: false,
+            },
+            {
+              family: "blockers",
+              status: "SATISFIED",
+              applicability: "APPLICABLE",
+              detail: "no_blocking_reservations",
+              blocking: false,
+            },
+            ...governedUnknown,
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector("[data-testid='lifecycle-readiness-summary']"),
+      ).not.toBeNull();
+    });
+    expect(
+      document.querySelector(
+        "[data-testid='lifecycle-condition-group-governed_effects-summary']",
+      )?.textContent,
+    ).toMatch(/À décider/);
+    expect(
+      document.querySelector("[data-testid='lifecycle-obligation-policy']"),
+    ).not.toBeNull();
+    expect(
+      document.querySelector("[data-testid='lifecycle-governed-effects-details']"),
+    ).not.toBeNull();
+    expect(
+      document.querySelector("[data-testid='lifecycle-obligation-list']"),
+    ).not.toBeNull();
+  });
+
+  it("B — exit criteria blocking + Reservations satisfied; trajectory action colocated", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
+          obligations: [
+            {
+              family: "exit_criteria",
+              status: "BLOCKING",
+              applicability: "APPLICABLE",
+              detail: "open_steps:step:1",
+              blocking: true,
+            },
+            {
+              family: "blockers",
+              status: "SATISFIED",
+              applicability: "APPLICABLE",
+              detail: "no_blocking_reservations",
+              blocking: false,
+            },
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-complete-trajectory-step']",
+        ),
+      ).not.toBeNull();
+    });
+    const work = document.querySelector(
+      "[data-testid='lifecycle-obligation-list-work']",
+    );
+    expect(work?.textContent).toMatch(/Étape de trajectoire|Critères de sortie/);
+    expect(work?.textContent).toMatch(/Aucune réserve bloquante active/);
+    expect(work?.textContent).not.toMatch(/À confirmer/);
+  });
+
+  it("C — APPLICABLE artifact MISSING → À traiter + continuation action", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: ["artifact_missing", FINALIZE_HD_BLOCKER],
+          obligations: [
+            {
+              family: "artifact",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "artifact_required_but_proof_absent",
+              blocking: true,
+            },
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-define-deliverable-cta']",
+        ),
+      ).not.toBeNull();
+    });
+    const row = document.querySelector('[data-family="artifact"]');
+    expect(row?.textContent).toMatch(/À traiter/);
+    expect(row?.textContent).toMatch(/livrable|preuve/i);
+    expect(row?.textContent).not.toMatch(/artifact_required_but_proof_absent/);
+  });
+
+  it("D — governed effects NOT_APPLICABLE show reasons, not missing", async () => {
+    const naReason = "pilot_hd_obligation_policy:opt:no-governed-effects";
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: [FINALIZE_HD_BLOCKER],
+          obligations: [
+            {
+              family: "artifact",
+              status: "NOT_APPLICABLE",
+              applicability: "NOT_APPLICABLE",
+              notApplicableReason: naReason,
+              blocking: false,
+            },
+            {
+              family: "execution_contract",
+              status: "NOT_APPLICABLE",
+              applicability: "NOT_APPLICABLE",
+              notApplicableReason: naReason,
+              blocking: false,
+            },
+            {
+              family: "evidence",
+              status: "NOT_APPLICABLE",
+              applicability: "NOT_APPLICABLE",
+              notApplicableReason: naReason,
+              blocking: false,
+            },
+            {
+              family: "review_bundle",
+              status: "NOT_APPLICABLE",
+              applicability: "NOT_APPLICABLE",
+              notApplicableReason: naReason,
+              blocking: false,
+            },
+            {
+              family: "git_repository",
+              status: "NOT_APPLICABLE",
+              applicability: "NOT_APPLICABLE",
+              notApplicableReason: naReason,
+              blocking: false,
+            },
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector('[data-family="artifact"]'),
+      ).not.toBeNull();
+    });
+    const artifact = document.querySelector('[data-family="artifact"]');
+    expect(artifact?.textContent).toMatch(/Non applicable/);
+    expect(artifact?.textContent).toMatch(/aucun effet gouverné/i);
+    expect(artifact?.textContent).not.toMatch(/Manquant|À confirmer/);
+    expect(
+      document.querySelector(
+        "[data-testid='lifecycle-condition-group-governed_effects-summary']",
+      )?.textContent,
+    ).toMatch(/Non applicable/);
+  });
+
+  it("E — only finalize HD remains → ready for Pilot + Finaliser", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: [FINALIZE_HD_BLOCKER],
+          obligations: [
+            {
+              family: "exit_criteria",
+              status: "SATISFIED",
+              applicability: "APPLICABLE",
+              detail: "trajectory_steps_closed_or_skipped",
+              blocking: false,
+            },
+            {
+              family: "blockers",
+              status: "SATISFIED",
+              applicability: "APPLICABLE",
+              detail: "no_blocking_reservations",
+              blocking: false,
+            },
+            {
+              family: "artifact",
+              status: "NOT_APPLICABLE",
+              applicability: "NOT_APPLICABLE",
+              notApplicableReason:
+                "pilot_hd_obligation_policy:opt:no-governed-effects",
+              blocking: false,
+            },
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+        currentRecommendations: [fakeFinalizeEnvelope()],
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-finalize-from-readiness']",
+        ),
+      ).not.toBeNull();
+    });
+    expect(
+      document.querySelector("[data-testid='lifecycle-readiness-summary']")
+        ?.textContent,
+    ).toMatch(/prêt pour décision du Pilote/i);
+    expect(
+      document.querySelector(
+        "[data-testid='lifecycle-condition-group-pilot_authority-summary']",
+      )?.textContent,
+    ).toMatch(/Prêt pour décision du Pilote/);
+    const finalize = document.querySelector(
+      "[data-testid='lifecycle-finalize-from-readiness']",
+    ) as HTMLButtonElement;
+    expect(finalize.disabled).toBe(false);
+  });
+
+  it("F — blocking Reservation preserves Voir les réserves action", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: ["blocking_reservations", FINALIZE_HD_BLOCKER],
+          obligations: [
+            {
+              family: "blockers",
+              status: "BLOCKING",
+              applicability: "APPLICABLE",
+              detail: "res:1|blocking",
+              blocking: true,
+            },
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+        blockingReservations: [
+          {
+            epistemicItemId: "epi:res:1",
+            statement: "Réserve bloquante de test",
+          },
+        ],
+        reservationSummary: {
+          activeCount: 1,
+          mayAffectCount: 0,
+          mustResolveCount: 1,
+          toQualifyCount: 0,
+        },
+      }),
+    });
+    render(
+      <LifecycleSurface
+        projectId="prj:ui"
+        onOpenReservations={() => undefined}
+      />,
+    );
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-open-reservations-from-condition']",
+        ),
+      ).not.toBeNull();
+    });
+    const blockers = document.querySelector('[data-family="blockers"]');
+    expect(blockers?.textContent).toMatch(/À traiter/);
+    expect(blockers?.textContent).toMatch(/réserve bloquante/i);
+  });
+
+  it("G — terminal cycle has no assessment/mutation controls", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        selectedStatus: "completed",
+        assessment: null,
+        cta: {
+          canStart: false,
+          canPause: false,
+          canResume: false,
+          canFinalize: false,
+          canCancel: false,
+        },
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector("[data-testid='lifecycle-status-badge']")
+          ?.textContent,
+      ).toMatch(/Terminé/);
+    });
+    expect(
+      document.querySelector("[data-testid='lifecycle-assess-cta']"),
+    ).toBeNull();
+    expect(
+      document.querySelector("[data-testid='lifecycle-finalize-cta-primary']"),
+    ).toBeNull();
+    expect(
+      document.querySelector("[data-testid='lifecycle-finalize-from-readiness']"),
+    ).toBeNull();
+    expect(
+      document.querySelector("[data-testid='lifecycle-readiness-summary']"),
+    ).toBeNull();
+  });
+
+  it("H — ASSESS feedback reflects returned assessment counts; role=status", async () => {
+    const before = assessment({
+      canComplete: false,
+      blockers: [
+        "exit_criteria_open",
+        "artifact_applicability_unknown",
+        FINALIZE_HD_BLOCKER,
+      ],
+      obligations: [
+        {
+          family: "exit_criteria",
+          status: "BLOCKING",
+          applicability: "APPLICABLE",
+          detail: "open_steps:step:1",
+          blocking: true,
+        },
+        ...governedUnknown,
+        {
+          family: "human_decision",
+          status: "MISSING",
+          applicability: "APPLICABLE",
+          detail: "finalize_human_decision_absent",
+          blocking: true,
+        },
+      ],
+    });
+    const after = assessment({
+      assessedAt: "2026-09-25T12:00:00.000Z",
+      canComplete: false,
+      blockers: [
+        "artifact_applicability_unknown",
+        "execution_contract_applicability_unknown",
+        "evidence_applicability_unknown",
+        "review_bundle_applicability_unknown",
+        "git_repository_applicability_unknown",
+        FINALIZE_HD_BLOCKER,
+      ],
+      obligations: [
+        {
+          family: "exit_criteria",
+          status: "SATISFIED",
+          applicability: "APPLICABLE",
+          detail: "trajectory_steps_closed_or_skipped",
+          blocking: false,
+        },
+        {
+          family: "blockers",
+          status: "SATISFIED",
+          applicability: "APPLICABLE",
+          detail: "no_blocking_reservations",
+          blocking: false,
+        },
+        ...governedUnknown,
+        {
+          family: "human_decision",
+          status: "MISSING",
+          applicability: "APPLICABLE",
+          detail: "finalize_human_decision_absent",
+          blocking: true,
+        },
+      ],
+    });
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({ assessment: before }),
+    });
+    lifecycleActionMock.mockResolvedValue({
+      ok: true,
+      assessment: after,
+      projection: baseProjection({ assessment: after }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector("[data-testid='lifecycle-assess-cta']"),
+      ).not.toBeNull();
+    });
+    fireEvent.click(
+      document.querySelector(
+        "[data-testid='lifecycle-assess-cta']",
+      ) as HTMLButtonElement,
+    );
+    await waitFor(() => {
+      const feedback = document.querySelector(
+        "[data-testid='lifecycle-info']",
+      );
+      expect(feedback?.getAttribute("role")).toBe("status");
+      expect(feedback?.textContent).toMatch(/Vérification terminée/);
+      expect(feedback?.textContent).toMatch(/satisfaites/);
+      expect(feedback?.textContent).toMatch(/à qualifier/);
+      expect(feedback?.textContent).not.toBe(
+        "Conditions de finalisation actualisées.",
+      );
+    });
+  });
+
+  it("I — finalize Recommendation clarifies cycle remains active until Pilot finalizes", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        currentRecommendations: [
+          {
+            ...fakeFinalizeEnvelope(),
+            statement:
+              "Je recommande de finaliser le cycle de Cadrage de StudyFlow.",
+          },
+        ],
+        assessment: assessment({
+          canComplete: false,
+          blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
+          obligations: [
+            {
+              family: "exit_criteria",
+              status: "BLOCKING",
+              applicability: "APPLICABLE",
+              detail: "open_steps:step:1",
+              blocking: true,
+            },
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-finalize-rec-active-cycle']",
+        ),
+      ).not.toBeNull();
+    });
+    expect(
+      document.querySelector("[data-testid='lifecycle-finalize-rec-notice']")
+        ?.textContent,
+    ).toMatch(/engager la finalisation/i);
+    expect(
+      document.querySelector(
+        "[data-testid='lifecycle-finalize-rec-active-cycle']",
+      )?.textContent,
+    ).toMatch(/reste actif tant que le Pilote n’a pas finalisé/i);
+  });
+});
+
+
+describe("RC-01 — mixed group roll-up never Satisfait with UNKNOWN", () => {
+  it("A — SATISFIED + TO_QUALIFY → governed group NOT Satisfait", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: ["artifact_applicability_unknown", FINALIZE_HD_BLOCKER],
+      obligations: [
+        {
+          family: "artifact",
+          status: "SATISFIED",
+          applicability: "APPLICABLE",
+          detail: "artifact_proof_present",
+          blocking: false,
+        },
+        {
+          family: "evidence",
+          status: "PENDING",
+          applicability: "UNKNOWN",
+          detail: "evidence_applicability_unknown",
+          blocking: false,
+        },
+      ],
+    });
+    const governed = groupFinalizationObligations(a).find(
+      (g) => g.id === "governed_effects",
+    );
+    expect(governed?.summaryLabel).toBe("À qualifier");
+    expect(governed?.summaryLabel).not.toBe("Satisfait");
+  });
+
+  it("B — NOT_APPLICABLE + TO_QUALIFY → group NOT Satisfait", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: ["evidence_applicability_unknown", FINALIZE_HD_BLOCKER],
+      obligations: [
+        {
+          family: "artifact",
+          status: "NOT_APPLICABLE",
+          applicability: "NOT_APPLICABLE",
+          notApplicableReason: "pilot_hd_obligation_policy:opt:no-artifact",
+          blocking: false,
+        },
+        {
+          family: "evidence",
+          status: "PENDING",
+          applicability: "UNKNOWN",
+          detail: "evidence_applicability_unknown",
+          blocking: false,
+        },
+      ],
+    });
+    const governed = groupFinalizationObligations(a).find(
+      (g) => g.id === "governed_effects",
+    );
+    expect(governed?.summaryLabel).toBe("À qualifier");
+    expect(governed?.summaryLabel).not.toBe("Satisfait");
+  });
+
+  it("C — SATISFIED + NOT_APPLICABLE → Satisfait / resolved without blocker", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: [FINALIZE_HD_BLOCKER],
+      obligations: [
+        {
+          family: "artifact",
+          status: "SATISFIED",
+          applicability: "APPLICABLE",
+          detail: "artifact_proof_present",
+          blocking: false,
+        },
+        {
+          family: "evidence",
+          status: "NOT_APPLICABLE",
+          applicability: "NOT_APPLICABLE",
+          notApplicableReason: "pilot_hd_obligation_policy:opt:no-evidence",
+          blocking: false,
+        },
+      ],
+    });
+    const governed = groupFinalizationObligations(a).find(
+      (g) => g.id === "governed_effects",
+    );
+    expect(governed?.summaryLabel).toBe("Satisfait");
+  });
+
+  it("D — work_of_cycle with TO_QUALIFY → À qualifier, never Satisfait", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: [FINALIZE_HD_BLOCKER],
+      obligations: [
+        {
+          family: "exit_criteria",
+          status: "SATISFIED",
+          applicability: "APPLICABLE",
+          detail: "trajectory_steps_closed_or_skipped",
+          blocking: false,
+        },
+        {
+          family: "blockers",
+          status: "PENDING",
+          applicability: "UNKNOWN",
+          detail: "reservation_applicability_unknown",
+          blocking: false,
+        },
+      ],
+    });
+    const work = groupFinalizationObligations(a).find(
+      (g) => g.id === "work_of_cycle",
+    );
+    expect(work?.summaryLabel).toBe("À qualifier");
+    expect(work?.summaryLabel).not.toBe("Satisfait");
+  });
+});
+
+describe("RC-02 — Pilot decision waiting, not a to-treat work item", () => {
+  it("human decision + another blocker → En attente; toTreat excludes HD; Finaliser absent", async () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
+      obligations: [
+        {
+          family: "exit_criteria",
+          status: "BLOCKING",
+          applicability: "APPLICABLE",
+          detail: "open_steps:step:1",
+          blocking: true,
+        },
+        {
+          family: "human_decision",
+          status: "MISSING",
+          applicability: "APPLICABLE",
+          detail: "finalize_human_decision_absent",
+          blocking: true,
+        },
+      ],
+    });
+    expect(
+      classifyObligationPresentation(a.obligations[1]!, a),
+    ).toBe("AWAITING_PILOT_DECISION");
+    const summary = summarizeFinalizationReadiness(a);
+    expect(summary?.toTreatCount).toBe(1);
+    expect(summary?.pilotDecisionPending).toBe(true);
+    expect(summary?.awaitingPilotDecision).toBe(false);
+    expect(summary?.countLine).toMatch(/décision Pilote en attente/);
+    expect(summary?.countLine).not.toMatch(/2 à traiter/);
+    expect(formatAssessFeedback(a)).toMatch(/décision Pilote en attente/);
+
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({ assessment: a }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-condition-group-pilot_authority-summary']",
+        ),
+      ).not.toBeNull();
+    });
+    expect(
+      document.querySelector(
+        "[data-testid='lifecycle-condition-group-pilot_authority-summary']",
+      )?.textContent,
+    ).toMatch(/En attente/);
+    expect(
+      document.querySelector('[data-family="human_decision"]')?.textContent,
+    ).toMatch(/En attente/);
+    expect(
+      document.querySelector("[data-testid='lifecycle-finalize-from-readiness']"),
+    ).toBeNull();
+    expect(
+      document.querySelector("[data-testid='lifecycle-finalize-cta-primary']"),
+    ).toBeNull();
+  });
+
+  it("only human decision remains → Prêt + Finaliser; N/A count when present", async () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: [FINALIZE_HD_BLOCKER],
+      obligations: [
+        {
+          family: "artifact",
+          status: "NOT_APPLICABLE",
+          applicability: "NOT_APPLICABLE",
+          notApplicableReason:
+            "pilot_hd_obligation_policy:opt:no-governed-effects",
+          blocking: false,
+        },
+        {
+          family: "execution_contract",
+          status: "NOT_APPLICABLE",
+          applicability: "NOT_APPLICABLE",
+          notApplicableReason:
+            "pilot_hd_obligation_policy:opt:no-governed-effects",
+          blocking: false,
+        },
+        {
+          family: "evidence",
+          status: "NOT_APPLICABLE",
+          applicability: "NOT_APPLICABLE",
+          notApplicableReason:
+            "pilot_hd_obligation_policy:opt:no-governed-effects",
+          blocking: false,
+        },
+        {
+          family: "review_bundle",
+          status: "NOT_APPLICABLE",
+          applicability: "NOT_APPLICABLE",
+          notApplicableReason:
+            "pilot_hd_obligation_policy:opt:no-governed-effects",
+          blocking: false,
+        },
+        {
+          family: "git_repository",
+          status: "NOT_APPLICABLE",
+          applicability: "NOT_APPLICABLE",
+          notApplicableReason:
+            "pilot_hd_obligation_policy:opt:no-governed-effects",
+          blocking: false,
+        },
+        {
+          family: "human_decision",
+          status: "MISSING",
+          applicability: "APPLICABLE",
+          detail: "finalize_human_decision_absent",
+          blocking: true,
+        },
+      ],
+    });
+    const summary = summarizeFinalizationReadiness(a);
+    expect(summary?.awaitingPilotDecision).toBe(true);
+    expect(summary?.toTreatCount).toBe(0);
+    expect(summary?.notApplicableCount).toBe(5);
+    expect(summary?.pilotDecisionPending).toBe(true);
+    expect(summary?.headline).toMatch(/prêt pour décision du Pilote/i);
+    // countLine still exposes N/A accounting when useful
+    expect(summary?.countLine).toMatch(/non applicable/);
+
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: a,
+        currentRecommendations: [fakeFinalizeEnvelope()],
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-finalize-from-readiness']",
+        ),
+      ).not.toBeNull();
+    });
+    expect(
+      document.querySelector(
+        "[data-testid='lifecycle-condition-group-pilot_authority-summary']",
+      )?.textContent,
+    ).toMatch(/Prêt pour décision du Pilote/);
+  });
+
+  it("finalize decision satisfied → presentation Satisfait", () => {
+    const o = {
+      family: "human_decision" as const,
+      status: "SATISFIED" as const,
+      applicability: "APPLICABLE" as const,
+      detail: "finalize_decision:hd:1",
+      blocking: false,
+    };
+    expect(classifyObligationPresentation(o, null)).toBe("SATISFIED");
+    expect(obligationExplanation(o)).toMatch(/décision Pilote de finalisation/i);
+  });
+});
+
+describe("RC-03 — never expose internal notApplicableReason codes", () => {
+  it("recognized N/A reasons map to business French", () => {
+    expect(
+      obligationExplanation({
+        family: "artifact",
+        status: "NOT_APPLICABLE",
+        applicability: "NOT_APPLICABLE",
+        notApplicableReason: "pilot_hd_obligation_policy:opt:no-artifact",
+        blocking: false,
+      }),
+    ).toBe("Aucun livrable n’est requis pour ce cycle.");
+    expect(
+      obligationExplanation({
+        family: "execution_contract",
+        status: "NOT_APPLICABLE",
+        applicability: "NOT_APPLICABLE",
+        notApplicableReason: "pilot_hd_obligation_policy:opt:no-execution",
+        blocking: false,
+      }),
+    ).toBe("Aucune exécution gouvernée n’est requise pour ce cycle.");
+    expect(
+      obligationExplanation({
+        family: "evidence",
+        status: "NOT_APPLICABLE",
+        applicability: "NOT_APPLICABLE",
+        notApplicableReason: "pilot_hd_obligation_policy:opt:no-evidence",
+        blocking: false,
+      }),
+    ).toBe("Aucune Evidence n’est requise pour ce cycle.");
+    expect(
+      obligationExplanation({
+        family: "review_bundle",
+        status: "NOT_APPLICABLE",
+        applicability: "NOT_APPLICABLE",
+        notApplicableReason: "pilot_hd_obligation_policy:opt:no-review",
+        blocking: false,
+      }),
+    ).toBe("Aucun ReviewBundle n’est requis pour ce cycle.");
+    expect(
+      obligationExplanation({
+        family: "git_repository",
+        status: "NOT_APPLICABLE",
+        applicability: "NOT_APPLICABLE",
+        notApplicableReason: "pilot_hd_obligation_policy:opt:no-git",
+        blocking: false,
+      }),
+    ).toBe("Aucun effet Git n’est requis pour ce cycle.");
+  });
+
+  it("unknown synthetic reason never surfaces raw code", () => {
+    const reason = "some_new_internal_reason";
+    const text = obligationExplanation({
+      family: "artifact",
+      status: "NOT_APPLICABLE",
+      applicability: "NOT_APPLICABLE",
+      notApplicableReason: reason,
+      blocking: false,
+    });
+    expect(text).toBe(
+      "Cette condition a été explicitement déclarée non applicable pour ce cycle.",
+    );
+    expect(text).not.toContain(reason);
+    expect(text).not.toMatch(/some new internal reason/i);
+    expect(text).not.toMatch(/_/);
+  });
+});
+
+describe("RC-04 — single Finaliser affordance when guidance colocated", () => {
+  it("A — assessment shown + ready → exactly one Finaliser", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: [FINALIZE_HD_BLOCKER],
+          obligations: [
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+        currentRecommendations: [fakeFinalizeEnvelope()],
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-finalize-from-readiness']",
+        ),
+      ).not.toBeNull();
+    });
+    const finalizeButtons = Array.from(
+      document.querySelectorAll("button"),
+    ).filter((b) => b.textContent?.trim() === "Finaliser");
+    expect(finalizeButtons).toHaveLength(1);
+    expect(
+      document.querySelector("[data-testid='lifecycle-finalize-cta-primary']"),
+    ).toBeNull();
+    expect(
+      document.querySelector("[data-testid='lifecycle-finalize-cta-secondary']"),
+    ).toBeNull();
+  });
+
+  it("B — no colocated assessment path preserves generic Finaliser", async () => {
+    // Assessment absent → no grouped Pilot CTA; legacy generic Finaliser when ready.
+    // readyExceptFinalize needs assessment with only HD blocker — without assessment,
+    // finalizeEnabled is false. Use assessment with empty obligations but still
+    // readyExceptFinalize, without pilot_authority row → generic remains.
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: [FINALIZE_HD_BLOCKER],
+          obligations: [],
+        }),
+        currentRecommendations: [fakeFinalizeEnvelope()],
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector("[data-testid='lifecycle-finalize-cta-primary']"),
+      ).not.toBeNull();
+    });
+    expect(
+      document.querySelector(
+        "[data-testid='lifecycle-finalize-from-readiness']",
+      ),
+    ).toBeNull();
+    const finalizeButtons = Array.from(
+      document.querySelectorAll("button"),
+    ).filter((b) => b.textContent?.trim() === "Finaliser");
+    expect(finalizeButtons).toHaveLength(1);
+  });
+
+  it("C — contextual Finaliser invokes FINALIZE once", async () => {
+    projectionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        assessment: assessment({
+          canComplete: false,
+          blockers: [FINALIZE_HD_BLOCKER],
+          obligations: [
+            {
+              family: "human_decision",
+              status: "MISSING",
+              applicability: "APPLICABLE",
+              detail: "finalize_human_decision_absent",
+              blocking: true,
+            },
+          ],
+        }),
+        currentRecommendations: [fakeFinalizeEnvelope()],
+      }),
+    });
+    lifecycleActionMock.mockResolvedValue({
+      ok: true,
+      projection: baseProjection({
+        selectedStatus: "completed",
+        assessment: null,
+        cta: {
+          canStart: false,
+          canPause: false,
+          canResume: false,
+          canFinalize: false,
+          canCancel: false,
+        },
+      }),
+    });
+    render(<LifecycleSurface projectId="prj:ui" />);
+    await waitFor(() => {
+      expect(
+        document.querySelector(
+          "[data-testid='lifecycle-finalize-from-readiness']",
+        ),
+      ).not.toBeNull();
+    });
+    fireEvent.click(
+      document.querySelector(
+        "[data-testid='lifecycle-finalize-from-readiness']",
+      ) as HTMLButtonElement,
+    );
+    await waitFor(() => {
+      expect(lifecycleActionMock).toHaveBeenCalledTimes(1);
+    });
+    expect(lifecycleActionMock.mock.calls[0]?.[0]).toMatchObject({
+      action: "FINALIZE",
+    });
+  });
 });

```

## 5. Tests / validations

| Suite | Result |
|---|---|
| `lifecyclePresentation.phaseB.d0.test.tsx` | **31/31 PASS** (prior FR-A..J + RC-01..RC-04) |
| Adjacent batch (7 files incl. corrProof05/06, lifecycleClosure.phaseB, reservation UI, Nora HOLD) | **217/217 PASS** |
| Full `__tests__/pre-m6-product-ui/` | **14 files / 125 tests PASS** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |

## 6. Runtime visual proof

**RUNTIME VISUAL PROOF — PENDING NATURAL STUDYFLOW REPROOF**

No StudyFlow mutation/capture in this correction. **VISUAL UX PASS — NOT CLAIMED**.

## 7. Remaining reserves

- Natural StudyFlow finalization reproof (authoritative UX)
- Deeper GAP-01 dialogue contradiction if still observed → reproof evidence only
- Roadmap truth-sync / project Git — **NOT AUTHORIZED**

## 8. Anti-claims

- runtime v3 = NON ADOPTED
- READY FOR REAL global = NO
- Nora Cognitive Completion = NOT COMPLETE / NOT PROVEN
- global finalization UX quality = NOT PROVEN until natural StudyFlow reproof
- PROJECT COMMIT / PUSH / PR / MERGE = NOT AUTHORIZED
- ROADMAP TRUTH-SYNC = NOT AUTHORIZED

## 9. Final verdict (local correction)

**FINALIZATION READINESS & PILOT GUIDANCE — SAME-MACRO CORRECTION PASS**

| Gate | Verdict |
|---|---|
| RC-01 MIXED GROUP TRUTH | **PASS** |
| RC-02 PILOT DECISION WAITING | **PASS** |
| RC-03 INTERNAL CODE LEAK | **NOT OBSERVED** |
| RC-04 SINGLE FINALIZE AFFORDANCE | **PASS** |
| FINALIZATION ASSESSMENT ENGINE | **UNCHANGED** |
| FINALIZATION ELIGIBILITY | **UNCHANGED** |
| PRODUCT VALIDATIONS | **PASS** |
| RUNTIME VISUAL PROOF | **PENDING NATURAL STUDYFLOW REPROOF** |

NEXT: ChatGPT re-review. Only after PASS may Morris open the project Git integration gate.
