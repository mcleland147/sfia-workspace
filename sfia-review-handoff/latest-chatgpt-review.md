# SFIA Review Pack FULL — ML4D Sas Nora UX CTA + RECETTE
Date: 2026-11-16
GO: Morris CRITICAL — finalisation UX + mise à disposition RECETTE
Verdict: RECETTE DEPLOYED WITH RESERVES — MORRIS UX REVIEW PENDING

## 1. GO Morris
- Correctif CTA D2 (pas de gate Nora BASE_SUFFICIENTE)
- Tests / non-régressions
- Commit candidat unique
- Build RECETTE indépendant + bascule contrôlée + smoke
- FULL pack + L3 handoff
- Pas de PR/merge/STABLE/Gate C/ML5/ADOPTED
- Pas de nouvelle campagne pixel Cursor
- Acceptation visuelle = Morris personnellement sur RECETTE

## 2. Git Truth Check
| Item | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Branche | feat/next-ml4d-sas-nora-convergence-20261116 |
| HEAD départ | e52cec0d0bd72b1731f61f60f3db54e0e9a70d1c |
| Tree web départ | 1f40b42cfc86b89b16f27fff7f08960588daeb0a |
| HEAD candidat | ec7405f323f86a0533dc507a1bfffc60ca1e5d0e |
| Parent | e52cec0d0bd72b1731f61f60f3db54e0e9a70d1c |
| Tree web candidat | 3aa4b6556ffbb7c94ebbbd2a76da8dd3debca8f4 |
| main distante | 997d4c4e8204993de7107552898c8cc08cd3b0ed |
| Handoff UX précédent | 286fd63c / blob dcc060f0 |
| RECETTE avant | cd091385de10262918cf79bf8c86ad1d725cb9d1 / E3J7wVO4MsKgl5aCTDhed |
| Status pré-cycle | clean hors pack temporaire |
| Ascendance | HEAD descendant de e52cec0d — PASS |

## 3. Correctif CTA (SAS-F-07 / AF-06)
Écart: showCreateCta exigeait stage base_sufficient / assessment BASE_SUFFICIENTE en plus de D2 canCreate.
Correction: shouldShowCreateProjectCta({ created, canCreate }) — éligibilité D2 seule.
Emphase frame 04 conservée via sas-create-block-ready sans gate métier.
Message utile si !canCreate: nom requis dans l'aperçu.
Explication Nora affichée à tout stage (conseil ≠ autorité).
Non modifié: createProjectCommand, unicité, idempotence, projection_json, qualification Nora.

## 4. Code / diff
```
commit ec7405f323f86a0533dc507a1bfffc60ca1e5d0e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 14:59:36 2026 +0100

    fix(next): restore D2 canCreate as sole Sas create CTA gate

    Nora BASE_SUFFICIENTE must not hide Créer le projet when D2 preconditions
    are met (SAS-F-07 / AF-06); keep frame-04 emphasis without a business gate.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../as-built-ml4d-sas-nora-convergence-20261116.md |  30 +++---
 .../construction/delivery-history.md               |  17 ++++
 .../src/components/figma/PreparationProposal.tsx   |  29 +++---
 .../web/src/components/figma/sas-presentation.ts   |  11 +++
 .../web/src/components/figma/tokens.css            |   5 +
 .../web/tests/e2e/g4-chat-first-sas.spec.ts        |   2 +-
 .../web/tests/e2e/ml4d-sas-nora-projection.spec.ts |   5 +-
 .../web/tests/unit/sas-presentation.test.ts        | 107 +++++++++++++++++++++
 8 files changed, 178 insertions(+), 28 deletions(-)
```

### Diff ciblé (Proposal + presentation + unit CTA)
```
commit ec7405f323f86a0533dc507a1bfffc60ca1e5d0e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 14:59:36 2026 +0100

    fix(next): restore D2 canCreate as sole Sas create CTA gate

    Nora BASE_SUFFICIENTE must not hide Créer le projet when D2 preconditions
    are met (SAS-F-07 / AF-06); keep frame-04 emphasis without a business gate.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
index 285eaeb6..0855ba63 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
@@ -8,6 +8,7 @@
 import type { PreparationProjection } from "@/domains/preparation/projection";
 import { canCreateFromProjection } from "@/domains/preparation/projection";
 import type { SasPresentationCopy } from "./sas-presentation";
+import { shouldShowCreateProjectCta } from "./sas-presentation";

 export type ProposalOpenPoint = { id: string; statement: string };

@@ -85,11 +86,9 @@ export function PreparationProposal(props: {
     Boolean(props.previewSummary.trim());
   const canCreate = !created && canCreateFromProjection(projection, props.previewName);
   const stage = props.presentation.stage;
-  // CTA composition belongs to frame 04; still honors D2 canCreate (no extra Nora gate).
-  const showCreateCta =
-    !created &&
-    canCreate &&
-    (stage === "base_sufficient" || assessment === "BASE_SUFFICIENTE");
+  // CTA lives in the aperçu panel (Figma frame 04 composition). Eligibility is D2 only —
+  // Nora assessment must not gate the Pilote's right to create (SAS-F-07 / AF-06).
+  const showCreateCta = shouldShowCreateProjectCta({ created, canCreate });

   const sections: Section[] = [];
   if (stage === "first_intention" && !hasLiving) {
@@ -323,15 +322,17 @@ export function PreparationProposal(props: {
           >
             <p className="sas-maturity-title">{props.presentation.maturityTitle}</p>
             <p className="sas-maturity-body">
-              {explanation && stage === "base_sufficient"
-                ? explanation
-                : props.presentation.maturityBody}
+              {/* Nora qualitative advice stays visible at any stage; it never gates create. */}
+              {explanation || props.presentation.maturityBody}
             </p>
           </div>
         ) : null}

         {showCreateCta ? (
-          <div className="sas-create-block">
+          <div
+            className={`sas-create-block${stage === "base_sufficient" ? " sas-create-block-ready" : ""}`}
+            data-testid="prep-create-block"
+          >
             <button
               type="button"
               className="sas-create-btn"
@@ -341,13 +342,17 @@ export function PreparationProposal(props: {
             >
               {created ? "Projet déjà créé" : "Créer le projet"}
             </button>
-            <p className="sas-create-hint">Ou continuer à préciser avec Nora</p>
+            <p className="sas-create-hint">
+              {stage === "base_sufficient"
+                ? "Nora estime la base suffisante — la décision de créer vous appartient."
+                : "Vous restez maître de la création — Nora peut encore préciser avec vous."}
+            </p>
           </div>
         ) : (
-          <p className="sas-preview-foot">
+          <p className="sas-preview-foot" data-testid="prep-create-unavailable">
             {created
               ? "Projet créé — continuité disponible dans l’espace projet."
-              : "Aucun projet durable créé à ce stade"}
+              : "Indiquez un nom de projet dans l’aperçu pour pouvoir créer."}
           </p>
         )}

diff --git a/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts b/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
index f7e19c6e..b314201b 100644
--- a/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
+++ b/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
@@ -44,6 +44,17 @@ export function resolveSasPresentationStage(input: {
   return "clarification";
 }

+/**
+ * Create CTA visibility — D2 eligibility only (SAS-F-07 / AF-06).
+ * Nora assessment may colour advice; it must never gate the Pilote's create action.
+ */
+export function shouldShowCreateProjectCta(input: {
+  created: boolean;
+  canCreate: boolean;
+}): boolean {
+  return !input.created && input.canCreate;
+}
+
 export function sasPresentationCopy(stage: SasPresentationStage): SasPresentationCopy {
   switch (stage) {
     case "clarification":
diff --git a/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts b/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
index 03caa3c3..ff0b1b2a 100644
--- a/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
@@ -2,7 +2,10 @@ import { describe, expect, it } from "vitest";
 import {
   resolveSasPresentationStage,
   sasPresentationCopy,
+  shouldShowCreateProjectCta,
 } from "@/components/figma/sas-presentation";
+import { canCreateFromProjection } from "@/domains/preparation/projection";
+import type { PreparationProjection } from "@/domains/preparation/projection";

 describe("Sas Nora presentation stage", () => {
   it("maps assessment to Figma stages without text heuristics", () => {
@@ -71,3 +74,107 @@ describe("Sas Nora presentation stage", () => {
     expect(sasPresentationCopy("resume").headerBreadcrumb).toBe("Préparation reprise");
   });
 });
+
+describe("Create CTA eligibility (D2 only — no Nora gate)", () => {
+  function namedProjection(
+    suggestion: PreparationProjection["suggestion"],
+  ): PreparationProjection {
+    return {
+      schemaVersion: 1,
+      preparationId: "prep-test",
+      revision: 1,
+      updatedFromTurnKey: null,
+      observedAt: null,
+      name: {
+        value: "Projet Atlas",
+        status: "PILOT_EXPRESSED",
+        source: { kind: "PILOT_UI_EDIT", ref: "ui" },
+        isCurrent: true,
+      },
+      intention: null,
+      desiredOutcome: null,
+      initialScope: null,
+      openQuestions: [],
+      suggestion,
+    };
+  }
+
+  it("T01 — hides CTA when D2 canCreate is false", () => {
+    const canCreate = canCreateFromProjection(null, "");
+    expect(canCreate).toBe(false);
+    expect(shouldShowCreateProjectCta({ created: false, canCreate })).toBe(false);
+  });
+
+  it("T02 — shows CTA when D2 canCreate true even if CLARIFYING", () => {
+    const projection = namedProjection({
+      assessment: "CLARIFYING",
+      explanation: "Besoin de préciser le résultat",
+      sourceTurnKey: "t1",
+    });
+    const canCreate = canCreateFromProjection(projection, "");
+    expect(canCreate).toBe(true);
+    expect(shouldShowCreateProjectCta({ created: false, canCreate })).toBe(true);
+  });
+
+  it("T03 — shows CTA when D2 canCreate true for PROPOSAL", () => {
+    const projection = namedProjection({
+      assessment: "PROPOSAL",
+      explanation: "Proposition enrichie",
+      sourceTurnKey: "t2",
+    });
+    expect(
+      shouldShowCreateProjectCta({
+        created: false,
+        canCreate: canCreateFromProjection(projection, ""),
+      }),
+    ).toBe(true);
+  });
+
+  it("T04 — shows CTA when D2 canCreate true for BASE_SUFFICIENTE", () => {
+    const projection = namedProjection({
+      assessment: "BASE_SUFFICIENTE",
+      explanation: "Base suffisante",
+      sourceTurnKey: "t3",
+    });
+    expect(
+      shouldShowCreateProjectCta({
+        created: false,
+        canCreate: canCreateFromProjection(projection, ""),
+      }),
+    ).toBe(true);
+  });
+
+  it("T05 — shows CTA on resume when D2 canCreate true", () => {
+    const projection = namedProjection({
+      assessment: "CLARIFYING",
+      explanation: "Reprise partielle",
+      sourceTurnKey: "t4",
+    });
+    expect(
+      shouldShowCreateProjectCta({
+        created: false,
+        canCreate: canCreateFromProjection(projection, "Projet Atlas"),
+      }),
+    ).toBe(true);
+  });
+
+  it("T06 — assessment absent with D2 name does not add a Nora gate", () => {
+    const projection = namedProjection(null);
+    expect(projection.suggestion).toBeNull();
+    expect(
+      shouldShowCreateProjectCta({
+        created: false,
+        canCreate: canCreateFromProjection(projection, ""),
+      }),
+    ).toBe(true);
+  });
+
+  it("hides CTA after project already created", () => {
+    expect(
+      shouldShowCreateProjectCta({
+        created: true,
+        canCreate: true,
+      }),
+    ).toBe(false);
+  });
+});
```

## 5. Tests
| Suite | Résultat |
| --- | --- |
| UNIT sas-presentation CTA T01–T06 + presentation | PASS |
| UNIT all (401) | PASS |
| PG create-project (23) | PASS |
| BROWSER FAKE ml4d-sas-nora-projection + g4-chat-first (6) | PASS |
| tsc full tree | FAIL préexistant (tests ML4C fixtures) — hors périmètre; build Next PASS |
| lint | PASS (warnings préexistants) |
| Nora LIVE | NOT PROVEN / NOT RUN |
| Nouvelle campagne pixel Figma | NOT RUN (GO Morris — validation visuelle Morris) |

## 6. Gate DEV
PASS — candidat reproductible ec7405f323f86a0533dc507a1bfffc60ca1e5d0e, aucun schema/D2-D3-D4 service change, rollback RECETTE disponible.

## 7. ENV-01 / RECETTE cutover
| Item | Valeur |
| --- | --- |
| Lane | RECETTE :3200 / PG 5434 / secrets ~/.config/.../recette/.env.local |
| DEV | :3102 / PG 5433 — isolé |
| Migration | AUCUNE — 013 déjà présent (has_013=1) |
| Worktree | /Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-ec7405f3 |
| Start | start-recette-sas-nora-ec7405f3.sh |
| LaunchAgent | com.sfia.studio.next.recette.ml4d-ux004 |
| Ancien build conservé | worktree cd091385 / E3J7wVO4MsKgl5aCTDhed |
| Nouveau build servi | 67akzrr6bFEp4YOh7aHD7 (HTML marker + cwd vérifiés) |
| Données PRE | preparations=183 projects=19 prep_with_proj=3 has_013=1 |
| Données POST | preparations=188 projects=20 prep_with_proj=8 has_013=1 (écritures smoke) |
| Rollback | RESTORE-PREVIOUS-SAS-NORA-RECETTE-cd091385.txt + plist.bak |

## 8. Smoke technique RECETTE
ALL_SMOKE_CORE_PASS
- S01 build 67akzrr6bFEp4YOh7aHD7
- S02/S03 login+portfolio
- S04–S06 prep UI composer+preview, pas de projet auto
- S07 PATCH APPLIED_CURRENT
- S08 create 201 CREATED
- S09 replay ALREADY_CREATED idempotent
- S10 project UI nora-workspace
- S11 isolation Pilote B
- S12 same-pilot CONFLICT 409

## 9. Cinq états / visuel
Composition sas conservée (cycle UX e52cec0d).
Verdict visuel Figma §6.6: PENDING MORRIS — pas de déclaration PIXEL PERFECT / FIGMA VISUAL ACCEPTED.
Références Figma: itgvCulInEnFY6DvgIegvP 607:3/62/131/203/277 — lecture seule, aucune écriture.
TECHNICALLY READY FOR MORRIS USER REVIEW

## 10. Réserves
1. Acceptation UX/visuelle Morris PENDING sur RECETTE.
2. Nora LIVE NOT PROVEN (FORCE_FIXTURE unset; pas de preuve cognitive Cursor).
3. tsc intégration/ML4C fixtures: dette préexistante hors diff.
4. Gate C OPEN; STABLE NOT AVAILABLE; NO RELEASE; NOT ADOPTED.

## 11. Manifest non secret
source_sha=ec7405f323f86a0533dc507a1bfffc60ca1e5d0e
tree_web=3aa4b6556ffbb7c94ebbbd2a76da8dd3debca8f4
build_id=67akzrr6bFEp4YOh7aHD7
schema=013_present
previous_build=E3J7wVO4MsKgl5aCTDhed
url=http://127.0.0.1:3200
package=0.0.0-dev

## 12. Décision restant à Morris
Inspecter les cinq états sur RECETTE et prononcer l'acceptation visuelle/ergonomique.
Aucun merge/STABLE/ADOPTED recommandé par Cursor.

## Verdict
RECETTE DEPLOYED WITH RESERVES — MORRIS UX REVIEW PENDING
TECHNICALLY READY FOR MORRIS USER REVIEW
