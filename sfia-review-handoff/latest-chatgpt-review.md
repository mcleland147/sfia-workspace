# SFIA Review Pack — FULL
## FINALIZATION-READINESS-PILOT-GUIDANCE-01 — LOCAL CANDIDATE

Timestamp (UTC): `2026-09-25T12:37:04Z`

## 1. GIT TRUTH

| Field | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Construction branch | `feat/sfia-studio-finalization-readiness-pilot-guidance-01` |
| HEAD | `6ac7eafb1f9177d3ccb9a129de7cfbc51195de7f` (same as origin/main — uncommitted local Product work) |
| origin/main | `6ac7eafb1f9177d3ccb9a129de7cfbc51195de7f` |
| Expected base | `6ac7eafb1f9177d3ccb9a129de7cfbc51195de7f` — **MATCH** |
| Remote base drift | **NONE** |
| Project commit / push / PR | **NOT AUTHORIZED / NOT EXECUTED** |

### Local status (explicit)

**Modified (unstaged Product / cycle work):**
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts` (GAP-01 wording-only)
- `.tmp-sfia-review/chatgpt-review.md` (this pack)

**Untracked residual (preserved, not Product source):**
- `.tmp-sfia-review/cycle-journal-continuity-proof/`
- `.tmp-sfia-review/cycle-reservation-piloting-proof/`
- `.tmp-sfia-review/nora-conversational-initiative-real-proof/`
- `.tmp-sfia-review/nora-conversational-initiative-real-proof-02/`
- `.tmp-sfia-review/pilotability-journal-integrity-proof/`
- `.tmp-sfia-review/finalization-readiness-pilot-guidance/` (diffs companion)

**Staged:** none

Branch created from exact `origin/main` without discarding residual `.tmp-sfia-review/**`.

## 2. Convergence / qualification

| Item | Value |
|---|---|
| Cycle | Delivery / Implementation |
| studio cycleType | `cyc:delivery` |
| Typology | EVOL |
| Profile | Critical |
| Primary CKC | `ckc:studio:delivery` — `projects/sfia-studio/sfia-v3-framing/ckc/08-delivery-implementation.md` |
| Companion UX CKC | `ckc:studio:ux-ui` — guidance only; no second design authority |
| Macro | `FINALIZATION-READINESS-PILOT-GUIDANCE-01` |
| User-facing capability | FINALIZATION READINESS & PILOT GUIDANCE |

### Git sources + SHAs read (READ ONLY)

| Path | Blob SHA @ origin/main |
|---|---|
| `convergence/sfia-studio-convergence-build-doctrine.md` | `99232e4582e4ef4cf489020a46b818ebb41ac397` |
| `convergence/sfia-studio-convergence-roadmap.md` | `4f69330dec43d16ffcf194f304e13bfecb2d9788` |
| `product-completion/01-product-completion-cadrage.md` | `806d672fe21ad82a641bf88fe95fc87870481105` |
| `sfia-v3-framing/ckc/04-ux-ui.md` | `88a77170c7c7b74bf71e0bcd7408d47f07eb6ce8` |
| `sfia-v3-framing/ckc/08-delivery-implementation.md` | `69d1257a5ca9045964b68410c07728c2f8264491` |
| `ux-product-experience/02-end-to-end-wireframes-interaction-model.md` | `d0c8578b99371ff9cd0ffe1c7735710cf605094f` |
| `ux-product-experience/03-product-screens-visual-state-contract.md` | `1a35c7ae72b1bf987c6cae1be88236dc93398f78` |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | `8949e764d96faf3fa812d39307dbc298b500f5ef` |
| `prompts/templates/sfia-cycle-execution-template.md` | `948156a21309ef99c3aaed6410947dc6b9bc569a` |

Protected sources **NOT modified**. Roadmap may still describe pre-#520 MealFlow state — **Roadmap truth-sync NOT AUTHORIZED / NOT EXECUTED**.

## 3. Trajectory link

- Predecessor: **RESERVATION CONTEXT CONTINUITY & PILOT CONFIRMATION** — PR **#520** MERGED @ `6ac7eafb…`
- Post-merge CI: run **#600** / `36130906057` — SUCCESS / Required Gate PASS
- Observed Product gap consumed: **STUDYFLOW-GAP-04** — assessment engine truthful; Pilot-facing condition area insufficiently explanatory
- Next after integrate: resume SAME StudyFlow finalization path naturally; next macro after that **NOT YET DETERMINED**

## 4. StudyFlow evidence consumed

After « Vérifier les conditions de finalisation »:
- Project state / lifecycle projection refreshed; toast « Conditions de finalisation actualisées. »
- Nora: « Je recommande de finaliser le cycle de Cadrage de StudyFlow. »
- Condition area still showed opaque rows (À confirmer / Bloquant) without: what passed, why, remaining actions, when Finaliser unlocks
- Root cause: **Pilotability / presentation gap**, not missing domain assessment

## 5. Morris UX direction consumed

Transform « Conditions de finalisation » → **État de préparation à la finalisation** answering:
1. What was checked?
2. What is satisfied and why?
3. What remains and what must I do?
4. When may I make the final Pilot decision?

Groups: Work of cycle · Governed effects · Pilot authority. ASSESS feedback deterministic from assessment. Recommendation ≠ execution.

## 6. Architecture classification

| Class | Items |
|---|---|
| **KEEP** | `FinalizationAssessment` / obligations / `assessFinalizationObligations` / applicability & status enums / blockers / `assessedAt` / `canComplete` / finalize HD / LifecycleProjection / pilot lifecycle actions ASSESS+FINALIZE / obligation policy / Reservation summary/gate / authority checks / persistence |
| **ADAPT** | `LifecycleSurface.tsx` · `lifecyclePresentation.ts` · `LifecycleSurface.module.css` · `lifecyclePresentation.phaseB.d0.test.tsx` |
| **COMPLETE** | readiness summary · grouped presentation · human explanations · action-to-condition · explicit ASSESS feedback · Pilot decision progression |
| **NOT DONE** | new store / second assessment engine / domain eligibility change / Roadmap / doctrine / C1 / v3 / method / prompts / Penpot / Figma |

Presentation-only classification kinds (UI): `SATISFIED` · `NOT_APPLICABLE` · `TO_QUALIFY` · `TO_TREAT` · `AWAITING_PILOT_DECISION`.

## 7. Visual contract / tooling qualification

- Sources: Product Completion E2E wireframes + Visual State Contract + existing LifecycleSurface tokens
- Penpot = reference design workspace for future Studio design — **NOT mutated**
- Historical Figma D1/1440 Cycle Review node 3:73 — ChatGPT Figma MCP access/edit-permission failure → **no fresh Figma verification claimed**; **no Figma mutation**; **no replacement Figma design**
- Optimize narrow contextual rail; no shell redesign
- Runtime visual proof: **NOT EXECUTED** (no safe live Product/StudyFlow capture session in this cycle) → **do not claim VISUAL UX PASS**

## 8. Implementation summary

### Presentation helpers (`lifecyclePresentation.ts`)

New exports:
- `classifyObligationPresentation` / `readinessKindLabel`
- `obligationExplanation` (French; known details; conservative fallback; no raw codes as primary copy)
- `formatAssessedAt` / `summarizeFinalizationReadiness` / `formatAssessFeedback`
- `groupFinalizationObligations` → `work_of_cycle` · `governed_effects` · `pilot_authority`
- UNKNOWN governed group → summary « À décider » + progressive disclosure of five families
- UNKNOWN applicability → UI « À qualifier » (never Manquant/Satisfait)
- Existing helpers (`readyExceptFinalizeDecision`, CTA honesty, obligation policy offers) **unchanged in semantics**

### LifecycleSurface

- Heading: « État de préparation à la finalisation »
- Readiness summary + Dernière vérification from `assessment.assessedAt`
- Grouped condition sections with status pills + explanations
- Colocated actions: trajectory close · Voir les réserves · obligation policy · define deliverable · Finaliser (when ready)
- ASSESS → `formatAssessFeedback(...)` into `lifecycle-info` `role="status"` (no longer generic « actualisées » only)
- Finalize recommendation clarity: engage finalization + cycle remains active until Pilot finalizes
- Terminal cycles: no assessment/mutation controls (existing CR-LC-B-01 preserved)

### GAP-01 (wording-only)

`CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE.statement` clarified to:
« Le cycle reste actif sur ce tour ; aucune transition n’est exécutée sans décision du Pilote. »
No cognitive routing / prompt / structured-output change.

## 9. Exact modified files

1. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
2. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
3. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css`
4. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx`
5. `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`

Companion diff artifacts (not Product source):
- `.tmp-sfia-review/finalization-readiness-pilot-guidance/*.diff`

## 10. COMPLETE USEFUL DIFFS

### 10.a GAP-01 HOLD wording (full)

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

### 10.b LifecycleSurface.module.css (full)

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

### 10.c lifecyclePresentation.ts (full patch)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
index 62516b61..b0e862c9 100644
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
@@ -353,3 +353,496 @@ export function lifecycleCtaPresentation(projection: PilotLifecycleProjection):
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
+  assessment: FinalizationAssessment | null | undefined,
+): FinalizationReadinessKind {
+  if (o.applicability === "UNKNOWN") return "TO_QUALIFY";
+  if (o.applicability === "NOT_APPLICABLE" || o.status === "NOT_APPLICABLE") {
+    return "NOT_APPLICABLE";
+  }
+  if (o.status === "SATISFIED") return "SATISFIED";
+  if (
+    o.family === "human_decision" &&
+    readyExceptFinalizeDecision(assessment)
+  ) {
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
+    if (
+      naReason === "pilot_declared_no_governed_effects" ||
+      naReason === "pilot_confirmed_no_governed_effects" ||
+      naReason.startsWith("pilot_hd_obligation_policy:opt:no-governed-effects") ||
+      naReason.includes("opt:no-governed-effects")
+    ) {
+      return "Le Pilote a confirmé qu’aucun effet gouverné n’est requis pour ce cycle.";
+    }
+    if (
+      naReason.startsWith("pilot_hd_obligation_policy:opt:no-artifact") ||
+      naReason.includes("opt:no-artifact")
+    ) {
+      return "Le Pilote a confirmé qu’aucun livrable n’est requis pour ce cycle.";
+    }
+    if (naReason === "no_positive_sources") {
+      return "Aucun signal positif n’a rendu cet effet applicable à ce cycle.";
+    }
+    if (naReason.startsWith("pilot_hd_obligation_policy:")) {
+      return "Le Pilote a déclaré cet effet non applicable via la politique d’obligations.";
+    }
+    if (naReason) {
+      return `Non applicable — ${humanizeSnake(naReason)}.`;
+    }
+    return "Cet effet n’est pas applicable à ce cycle.";
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
+function humanizeSnake(raw: string): string {
+  return raw.replace(/_/g, " ").trim();
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
+  readonly awaitingPilotDecision: boolean;
+  readonly headline: string;
+  readonly assessedAtLabel: string | null;
+};
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
+  for (const o of assessment.obligations) {
+    const kind = classifyObligationPresentation(o, assessment);
+    if (kind === "SATISFIED") satisfiedCount += 1;
+    else if (kind === "TO_QUALIFY") toQualifyCount += 1;
+    else if (kind === "NOT_APPLICABLE") notApplicableCount += 1;
+    else if (kind === "AWAITING_PILOT_DECISION") {
+      /* counted via awaitingPilotDecision flag */
+    } else toTreatCount += 1;
+  }
+  const awaitingPilotDecision = readyExceptFinalizeDecision(assessment);
+  if (awaitingPilotDecision) {
+    // HD is "awaiting" not "to treat" for summary wording.
+    toTreatCount = Math.max(0, toTreatCount);
+  }
+  let headline: string;
+  if (awaitingPilotDecision) {
+    headline =
+      "Conditions satisfaites — prêt pour décision du Pilote";
+  } else if (toTreatCount === 0 && toQualifyCount === 0) {
+    headline = "Vérification terminée — conditions non humaines satisfaites";
+  } else {
+    const parts: string[] = [];
+    if (satisfiedCount > 0) {
+      parts.push(
+        `${satisfiedCount} satisfaite${satisfiedCount > 1 ? "s" : ""}`,
+      );
+    }
+    if (toTreatCount > 0) {
+      parts.push(`${toTreatCount} à traiter`);
+    }
+    if (toQualifyCount > 0) {
+      parts.push(`${toQualifyCount} à qualifier`);
+    }
+    headline =
+      parts.length > 0
+        ? `Vérification terminée — ${parts.join(" · ")}`
+        : "Vérification terminée";
+  }
+  return {
+    satisfiedCount,
+    toTreatCount,
+    toQualifyCount,
+    notApplicableCount,
+    awaitingPilotDecision,
+    headline,
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
+  const bits: string[] = [];
+  if (summary.satisfiedCount > 0) {
+    bits.push(
+      `${summary.satisfiedCount} condition${summary.satisfiedCount > 1 ? "s" : ""} satisfaite${summary.satisfiedCount > 1 ? "s" : ""}`,
+    );
+  }
+  if (summary.toTreatCount > 0) {
+    bits.push(`${summary.toTreatCount} à traiter`);
+  }
+  if (summary.toQualifyCount > 0) {
+    bits.push(`${summary.toQualifyCount} à qualifier`);
+  }
+  if (bits.length === 0) {
+    return "Vérification terminée.";
+  }
+  return `Vérification terminée — ${bits.join(", ")}.`;
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
+  if (id === "governed_effects") {
+    const allUnknown =
+      rows.length > 0 &&
+      rows.every((r) => r.kind === "TO_QUALIFY");
+    if (allUnknown) {
+      return {
+        summaryLabel: "À décider",
+        summaryExplanation:
+          "Il faut préciser si ce cycle doit produire un livrable ou d’autres effets gouvernés.",
+        allUnknownGoverned: true,
+      };
+    }
+    const allNa =
+      rows.length > 0 &&
+      rows.every((r) => r.kind === "NOT_APPLICABLE");
+    if (allNa) {
+      return {
+        summaryLabel: "Non applicable",
+        summaryExplanation:
+          "Aucun effet gouverné n’est requis pour ce cycle selon l’assessment.",
+        allUnknownGoverned: false,
+      };
+    }
+    const anyTreat = rows.some((r) => r.kind === "TO_TREAT");
+    if (anyTreat) {
+      return {
+        summaryLabel: "À traiter",
+        summaryExplanation:
+          "Au moins un effet gouverné applicable n’est pas encore satisfait.",
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
+    const anyTreat = rows.some((r) => r.kind === "TO_TREAT");
+    if (anyTreat) {
+      return {
+        summaryLabel: "À traiter",
+        summaryExplanation:
+          "Du travail de cycle reste ouvert (critères de sortie ou réserves).",
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
+

```

### 10.d LifecycleSurface.tsx (full patch)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index bf43dbe4..14f9963f 100644
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
@@ -257,6 +267,10 @@ export function LifecycleSurface({
     : (projection.reservationSummary ?? null);
   const showAssessment =
     !terminalDisplay && Boolean(projection.assessment);
+  const readinessSummary = summarizeFinalizationReadiness(projection.assessment);
+  const conditionGroups = groupFinalizationObligations(projection.assessment);
+  // When assessment UI is shown, colocate exit/policy CTAs in groups (avoid duplicate strips).
+  const colocateGuidance = showAssessment;

   return (
     <aside
@@ -304,7 +318,7 @@ export function LifecycleSurface({
           </p>
           {finalizeRec ? (
             <p className={styles.recMeta} data-testid="lifecycle-finalize-rec-notice">
-              Nora recommande de finaliser ce cycle
+              Nora recommande d’engager la finalisation de ce cycle.
             </p>
           ) : (
             <p className={styles.recMeta}>
@@ -312,8 +326,16 @@ export function LifecycleSurface({
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
@@ -328,8 +350,46 @@ export function LifecycleSurface({
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
+                {readinessSummary.satisfiedCount} satisfaite
+                {readinessSummary.satisfiedCount === 1 ? "" : "s"}
+                {" · "}
+                {readinessSummary.toTreatCount} à traiter
+                {" · "}
+                {readinessSummary.toQualifyCount} à qualifier
+              </p>
+            </div>
+          ) : null}
           {ready ? (
             <p className={styles.muted} data-testid="lifecycle-ready-finalize">
               Prêt pour décision de finalisation — seule la décision Pilote
@@ -353,32 +413,256 @@ export function LifecycleSurface({
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
+              {group.id === "pilot_authority" && ready ? (
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
@@ -466,7 +750,8 @@ export function LifecycleSurface({
         </section>
       ) : null}

-      {cta.showGroupedObligationPolicy || cta.showRequireArtifactPolicy ? (
+      {!colocateGuidance &&
+      (cta.showGroupedObligationPolicy || cta.showRequireArtifactPolicy) ? (
         <section className={styles.block} data-testid="lifecycle-obligation-policy">
           <h3 className={styles.blockTitle}>Effets gouvernés</h3>
           <p className={styles.muted}>
@@ -554,7 +839,9 @@ export function LifecycleSurface({
         </section>
       ) : null}

-      {cta.showRequireArtifactContinuation && !suppressGenericNoraCta ? (
+      {!colocateGuidance &&
+      cta.showRequireArtifactContinuation &&
+      !suppressGenericNoraCta ? (
         <section
           className={styles.block}
           data-testid="lifecycle-require-artifact-continuation"

```

### 10.e Tests

Extended `lifecyclePresentation.phaseB.d0.test.tsx` with FR scenarios A–J (helpers + LifecycleSurface). Existing LC-B / JOURNEY tests retained. Diff size large; scenarios cover:
- A UNKNOWN governed group
- B exit criteria + reservations satisfied
- C artifact MISSING
- D NOT_APPLICABLE reasons
- E readyExceptFinalize + Finaliser
- F blocking Reservation colocated action
- G terminal no mutation
- H ASSESS feedback role=status
- I recommendation clarity
- J unknown detail fallback

## 11. Acceptance matrix FR-01…FR-15

| ID | Result | Notes |
|---|---|---|
| FR-01 ASSESS feedback | **PASS** | `formatAssessFeedback` → `lifecycle-info` role=status |
| FR-02 Assessment time | **PASS** | `Dernière vérification` from `assessedAt` |
| FR-03 Work-of-cycle grouping | **PASS** | exit_criteria + blockers |
| FR-04 Governed effects grouping | **PASS** | all-UNKNOWN → À décider + details |
| FR-05 Pilot authority grouping | **PASS** | last; waiting vs ready + Finaliser |
| FR-06 Explanations | **PASS** | every visible row |
| FR-07 Unknown honesty | **PASS** | À qualifier |
| FR-08 N/A honesty | **PASS** | distinguishable + recognized reasons |
| FR-09 Actions colocated | **PASS** | trajectory / reserves / policy / deliverable / Finaliser |
| FR-10 Rec clarity | **PASS** | LifecycleSurface + GAP-01 HOLD wording |
| FR-11 Eligibility unchanged | **PASS** | domain/assessment engine untouched |
| FR-12 Reservation regression | **PASS** | summary/gate + adjacent UI tests green |
| FR-13 Terminal states | **PASS** | G scenario |
| FR-14 Accessibility | **PASS** | headings, text status, focus-visible, status live |
| FR-15 Narrow rail | **PASS** (structure) | CSS wrap/min-width:0; **runtime overflow not screenshot-proven** |

## 12. Tests / validations

| Command | Result |
|---|---|
| `npm test -- __tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx` | **19/19 PASS** |
| `npm test -- …corrProof05.pilotLifecycle.d0.test.ts` | **136/136 PASS** |
| `npm test -- …corrProof06.artifactObligation.d0.test.ts` | **13/13 PASS** |
| `npm test -- …lifecycleClosure.phaseB.d0.test.ts` | **12/12 PASS** |
| `npm test -- …reservationContextProposal.ui.test.tsx` | **3/3 PASS** |
| `npm test -- …cycleReservationMemoryRail.ui.test.tsx` | **2/2 PASS** |
| `npm test -- …noraConversationalInitiative.d0.test.ts` | **PASS** (incl. HOLD constant equality) |
| Broader adjacent batch (7 files) | **205/205 PASS** |
| Full `__tests__/pre-m6-product-ui/` + corrProof06 | **15 files / 126 tests PASS** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** (0 warnings) |
| `npm run build` | **PASS** (existing better-sqlite3 warning unchanged) |

Exact FR file count: **1** test file extended; **+11 FR cases** (helpers A/J + surface A–I).

## 13. Runtime visual proof

**RUNTIME VISUAL PROOF — NOT EXECUTED**

No safe live Studio Product + StudyFlow durable state capture session was available without manufacturing Product state. Later natural StudyFlow reproof by Morris remains authoritative UX proof.

→ **VISUAL UX PASS — NOT CLAIMED**
→ **RUNTIME VISUAL PROOF — PENDING NATURAL STUDYFLOW REPROOF**

## 14. Accessibility / responsive notes

- Semantic `h3`/`h4` for readiness + groups
- Text status labels via pills (`data-kind`); color supplemental
- Buttons retain existing focus-visible outline
- ASSESS feedback `role="status"` on `lifecycle-info`
- `overflow-wrap: anywhere` / `min-width: 0` on condition rows for narrow rail
- Desktop 1440 runtime capture: **not performed**

## 15. Remaining reserves / debt / exit

| Item | Status |
|---|---|
| GAP-01 HOLD wording | **CLOSED** (trivial semantics-preserving string) |
| GAP-01 deeper cognitive/routing contradiction if still observed in natural dialogue | **HOLD / observe on StudyFlow reproof** — do not expand macro |
| Natural StudyFlow finalization reproof | **PENDING** (post-merge Morris gate) |
| Roadmap truth-sync for MealFlow / #520 | **NOT AUTHORIZED** |
| Runtime visual screenshots | **PENDING** |
| Project Git integrate | **NOT AUTHORIZED this cycle** |

## 16. Anti-claims

- runtime v3 = **NON ADOPTED**
- READY FOR REAL global = **NO**
- Nora Cognitive Completion = **NOT COMPLETE / NOT PROVEN**
- global lifecycle/finalization UX quality = **NOT PROVEN** until natural StudyFlow reproof
- VISUAL UX PASS = **NOT CLAIMED**
- PRODUCT COMMIT / PUSH / PR / MERGE = **NOT AUTHORIZED**

## 17. Final verdict (local deterministic)

**FINALIZATION READINESS & PILOT GUIDANCE — LOCAL CANDIDATE PASS**

| Gate | Verdict |
|---|---|
| FINALIZATION ASSESSMENT ENGINE | **UNCHANGED / KEEP** |
| READINESS SUMMARY | **PASS** |
| CONDITION GROUPING | **PASS** |
| CONDITION EXPLANATIONS | **PASS** |
| ASSESS FEEDBACK | **PASS** |
| ACTION-TO-CONDITION GUIDANCE | **PASS** |
| PILOT FINAL DECISION BOUNDARY | **PASS** |
| FINALIZATION ELIGIBILITY SEMANTICS | **UNCHANGED** |
| RESERVATION REGRESSION | **PASS** |
| ACCESSIBILITY STRUCTURE | **PASS** |
| PRODUCT CODE VALIDATIONS | **PASS** |
| RUNTIME VISUAL PROOF | **PENDING NATURAL STUDYFLOW REPROOF** |
| PROJECT COMMIT | **NOT AUTHORIZED** |
| PROJECT PUSH | **NOT AUTHORIZED** |
| PR / MERGE | **NOT AUTHORIZED** |
| ROADMAP TRUTH-SYNC | **NOT AUTHORIZED** |

NEXT: ChatGPT review of local candidate. If qualified, distinct Morris gate for project Git integration. After merge/post-merge verification: resume StudyFlow at finalization readiness.
