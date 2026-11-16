# SFIA Studio Next — Review Pack FULL
## ML4D Sas Nora — Consolidation des garanties de création et des preuves de parcours

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-16 |
| GO Morris | Consolidation G1/G2/G3 — 16 novembre 2026 |
| Profil | CRITICAL / EVOL / publish-in-cycle |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| HEAD | `cd091385de10262918cf79bf8c86ad1d725cb9d1` |
| Parent | `acb5ce65f189582fd6438e7c1d8c6acdd1027664` (`acb5ce65`) |
| Tree web | `6f089bda818fa60e061f458fad928f3478e648b4` |
| Build DEV | `T03qorYZpGs0odz56Nb9f` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Contrats docs | `22ee5540052db0932149a74f53b5b389970e0118` |
| Handoff précédent | `a148efd8` / blob `66c92fcc` |
| RECETTE | inchangée `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ :3200 (PID 80352 observé) |
| Push produit | **AUCUN** |
| CKC | absent → fallback SFIA v2.6 |

## 1. Git Truth Check

- Repo: mcleland147/sfia-workspace (worktree local)
- Branche/HEAD/parent/tree conformes au GO avant correctif ; un commit intégré ajouté
- Worktree propre hors Review Pack local
- Isolation DEV/RECETTE: RECETTE :3200 non touchée ; aucune migration nouvelle

## 2. Trois écarts traités

### G1 — Nom inspecté = autorité de création
- **Avant:** `verifyMissionForD2Act` acceptait un nom client arbitraire en réécrivant `mission.proposedProjectName`.
- **Après:** mission binding ne réécrit plus le nom ; `createProjectCommand` sous `FOR UPDATE` résout `resolveInspectedProjectName(projection, preview_name)` et refuse tout `projectName` qui ne matche pas ; création avec l'orthographe inspectée.
- Replay ATTACHED / même clé+fingerprint préservé **avant** le contrôle de nom (pas de refus ACK perdu).

### G2 — Parcours navigateur sans PATCH injecté
- Suppression de `uniquifyInspectedNameThenCreate`.
- T4 paramétré (`sasMaturationT4Rename`) : le nom unique est dans le message Pilote + qualification + projection + panneau + create.
- T3: proposition via `proposedProjectName` / dialogue — **plus** de `REQUEST_EFFECT` artificiel.
- E2E: clic Créer direct après T4.

### G3 — PATCH concurrent honnête
- Route: `writeStatus` = `APPLIED_CURRENT` | `APPLIED_SUPERSEDED` | `CONFLICT_NOT_APPLIED` | `UNKNOWN` (+ `UNCHANGED_CURRENT`).
- UI: superseded ≠ « Aperçu corrigé » ; brouillon local conservé ; 409 = non appliqué.

## 3. Blast radius

API PATCH/create, createProjectCommand, intent binding, fixtures TEST_BOUNDARY, page sas, tests PG/E2E/UNIT, as-built/delivery-history.
Pas de migration, Figma, gouvernance, RECETTE, push produit.

## 4. Fake / Real

| Niveau | Statut |
| --- | --- |
| UNIT | PASS (projection, writeStatus, maturation instructions) |
| PG REAL | PASS (create-project, preparation-patch, intent-continuity) |
| BROWSER/FAKE | PASS (5/5 ml4d-sas-nora-projection, multi-tours sans PATCH) |
| NORA LIVE | **NOT PROVEN** |
| MORRIS UI | **PENDING** |

## 5. Contradiction PF-CRE-14 / Migration 013

Inchangées : unicité app-level vs PF-CRE-14 ouverte ; 013 additive non promue RECETTE.

## 6. Verdict

**READY WITH RESERVES — SAS NORA GUARANTEES CONSOLIDATED**

Réserves: Nora LIVE NOT PROVEN ; MORRIS UI PENDING ; PF-CRE-14 ; gate 013 RECETTE ; STABLE N/A.

## 7. Fichiers de ce commit (liste)

M	projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
M	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
M	projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
M	projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
M	projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
M	projects/sfia-studio-next/web/src/domains/preparation/projection.ts
M	projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
M	projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts

## 8. Diffs complets exploitables

diff --git a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
index bcab3836..5a12dba8 100644
--- a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
+++ b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
@@ -1,16 +1,16 @@
-# As-built — ML4D Sas Nora convergence + correctifs (2026-11-16)
+# As-built — ML4D Sas Nora convergence + garanties de création (2026-11-16)

 | Champ | Valeur |
 | --- | --- |
-| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + correctifs |
+| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + garanties |
 | Type | EVOL / MINOR candidate · **NO RELEASE** |
 | Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
-| Candidat Sas | `596718b1` → correctif `1dfc79ff` → **correctif final (ce cycle)** |
+| Candidat Sas | `596718b1` → `1dfc79ff` → `acb5ce65` → **garanties G1/G2/G3 (ce cycle)** |
 | Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
 | Contrats | docs@`22ee5540` (fonctionnel + technique) |
 | Figma | `itgvCulInEnFY6DvgIegvP` 607:3…277 — VALIDATED UX Morris, non modifié |
 | Lane | DEV only — RECETTE inchangée |
-| Build DEV | `4uaTx97JzcebLhzIfr8h-` @ `127.0.0.1:3102` |
+| Build DEV | `T03qorYZpGs0odz56Nb9f` @ `127.0.0.1:3102` (attendu) |
 | RECETTE | `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ `:3200` — **non modifiée** |

 ## Architecture
@@ -18,18 +18,18 @@
 1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `proposedProjectName`, `preparationAssessment*`).
 2. Draft projection après qualification ; **persistance seulement après commit terminal COMPLETE**.
 3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED` / `PILOT_UI_EDIT`.
-4. PATCH aperçu = `applyPilotApercuCorrection` + CAS `expectedCreationRevision` **obligatoire** ; HTTP 409/400/401/404/503 classifiés (jamais conflit/DB → SESSION_INVALID).
-5. Assessment Nora **uniquement** si fourni dans la qualification (pas d’heuristique name+intention → BASE_SUFFICIENTE).
-6. Création : `createProjectCommand` + verrou pilote ; nom inspecté après correction accepté sur mission awaiting.
-7. UI : conversation + aperçu ; Journal/Documents secondaires.
+4. PATCH aperçu = `applyPilotApercuCorrection` + CAS `expectedCreationRevision` **obligatoire** ; résultat classifié `APPLIED_CURRENT` / `APPLIED_SUPERSEDED` / `CONFLICT_NOT_APPLIED` / `UNKNOWN`.
+5. Assessment Nora **uniquement** si fourni dans la qualification (pas d’heuristique).
+6. Création : `createProjectCommand` sous verrou ; **nom = proposition D2 inspectée** (projection.name sinon preview_name) ; refus d’un nom client arbitraire.
+7. UI : conversation + aperçu ; Journal/Documents secondaires ; pas de succès trompeur sur PATCH superseded.

-## Écarts de ce correctif final
+## Garanties consolidées (ce cycle)

 | Écart | Constat | Correction |
 | --- | --- | --- |
-| A PATCH | CAS partiel ; erreurs → 401 | `expectedCreationRevision` requis ; 200 cohérent ; 409/400/404/503 |
-| B Qualification | Heuristique fabriquait l’appréciation | Assessment seulement si structuré ; instructions LIVE maturation ; `proposedProjectName` |
-| C Multi-tours | E2E mono-message riche | Fixtures T1–T4 + PG GapC + e2e multi-tours |
+| G1 Nom inspecté | Mission binding acceptait un nom client arbitraire | Contrôle décisif sous `FOR UPDATE` dans `createProjectCommand` ; mission non réécrite depuis le payload |
+| G2 Parcours navigateur | E2E multi-tours PATCH injecté avant Créer | T1→T5 conversationnel avec nom unique ; aucun PATCH de rattrapage ; T3 sans `REQUEST_EFFECT` artificiel |
+| G3 PATCH concurrent | 200 + « Aperçu corrigé » après supersession | `writeStatus` honnête ; UI distingue courant / remplacé / non appliqué |

 ## Contradiction PF-CRE-14

@@ -43,11 +43,11 @@ Additive `projection_json` — **non promue RECETTE** par ce GO. Aucune migratio

 | Niveau | Résultat |
 | --- | --- |
-| UNIT projection + instructions LIVE structurelles | PASS |
-| PG REAL create-project + PATCH | PASS |
-| BROWSER FAKE sas (dont multi-tours) | voir Review Pack |
-| UX-003/004 | PASS (cycle) |
+| UNIT projection / writeStatus / instructions LIVE structurelles | PASS |
+| PG REAL create-project + PATCH + intent-continuity | PASS |
+| BROWSER FAKE sas (multi-tours sans PATCH) | PASS |
 | NORA LIVE | **NOT PROVEN** |
+| MORRIS UI | **PENDING** |

 ## Rollback

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ba05ace5..8ee33ba0 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,6 +25,24 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-GUARANTEES
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~13:10 CET (Europe/Paris) |
+| Macro-lot | ML4D — Sas Nora consolidation garanties création / parcours / PATCH |
+| Type | EVOL / MINOR candidate · **NO RELEASE** |
+| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
+| Parent tip | `acb5ce65f189582fd6438e7c1d8c6acdd1027664` |
+| Changes | G1 nom D2 inspecté sous verrou ; G2 E2E T1→T5 sans PATCH ; G3 writeStatus APPLIED_CURRENT/SUPERSEDED ; T3 sans REQUEST_EFFECT artificiel |
+| Schema | aucune nouvelle migration (013 inchangée) |
+| Compatibilité | correctif compatible candidat MINOR |
+| Tests | UNIT projection/writeStatus PASS ; PG create/PATCH/intent PASS ; BROWSER multi-tours sans PATCH PASS |
+| Limites | PF-CRE-14 ouvert ; Nora LIVE NOT PROVEN ; MORRIS UI PENDING ; gate 013 avant RECETTE |
+| Lanes | DEV BUILD `T03qorYZpGs0odz56Nb9f` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
+| Push Product | **AUCUN** |
+| Verdict candidat | `READY WITH RESERVES — SAS NORA GUARANTEES CONSOLIDATED` |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CONVERGENCE-CORRECTED

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
index 7cf992bd..eb014562 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
@@ -1,6 +1,10 @@
 import { NextResponse } from "next/server";
 import { requireStudioSession } from "@/domains/identity/session";
-import { getPreparationContext, updatePreview } from "@/domains/preparation/service";
+import {
+  applyPilotApercuCorrection,
+  getPreparationContext,
+} from "@/domains/preparation/service";
+import { classifyPilotPatchWrite } from "@/domains/preparation/projection";
 import { listMessages } from "@/domains/conversation/service";
 import { getAwaitingMissionForPreparation } from "@/domains/conversation/intent-conduction";
 import { listDocuments } from "@/domains/document/service";
@@ -72,31 +76,57 @@ export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId
       );
     }

-    const rev = await updatePreview(
-      session.pilotId,
+    const applied = await applyPilotApercuCorrection({
+      pilotId: session.pilotId,
       preparationId,
-      b.previewName,
-      b.previewSummary,
-      b.expectedCreationRevision,
-    );
-    const data = await getPreparationContext(session.pilotId, preparationId);
+      previewName: b.previewName,
+      previewSummary: b.previewSummary,
+      expectedCreationRevision: b.expectedCreationRevision,
+    });

-    // Re-read after commit: if another writer advanced revision, return coherent current state
-    // (same revision + projection pair) rather than mixing an old revision with a newer projection.
-    const confirmedRevision = data.preparation.creationRevision;
-    if (confirmedRevision !== rev) {
-      return NextResponse.json({
-        creationRevision: confirmedRevision,
-        projection: data.projection,
-        preparation: data.preparation,
-        reconciled: true,
-      });
+    if (applied.status === "CONFLICT") {
+      return NextResponse.json(
+        {
+          error: "CONFLICT",
+          writeStatus: "CONFLICT_NOT_APPLIED" as const,
+          actualCreationRevision: applied.actualRevision,
+        },
+        { status: 409 },
+      );
+    }
+    if (applied.status === "FORBIDDEN") {
+      return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
+    }
+    if (applied.status === "UNAVAILABLE") {
+      return NextResponse.json(
+        {
+          error: "DEPENDENCY_UNAVAILABLE",
+          errorCategory: "DEPENDENCY_UNAVAILABLE",
+          writeStatus: "UNKNOWN" as const,
+        },
+        { status: 503 },
+      );
     }

+    // Post-commit observation: distinguish still-current write from a later superseding write.
+    const data = await getPreparationContext(session.pilotId, preparationId);
+    const appliedRevision = applied.revision;
+    const observedRevision = data.preparation.creationRevision;
+    const writeStatus = classifyPilotPatchWrite({
+      applyStatus: applied.status,
+      appliedRevision,
+      observedRevision,
+    });
+
     return NextResponse.json({
-      creationRevision: rev,
+      writeStatus,
+      appliedRevision,
+      creationRevision: observedRevision,
+      appliedProjection: applied.projection,
       projection: data.projection,
       preparation: data.preparation,
+      // Legacy flag: true only when a later write already superseded this one.
+      reconciled: writeStatus === "APPLIED_SUPERSEDED",
     });
   } catch (e) {
     const code = (e as { code?: string }).code;
@@ -104,6 +134,7 @@ export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId
       return NextResponse.json(
         {
           error: "CONFLICT",
+          writeStatus: "CONFLICT_NOT_APPLIED",
           actualCreationRevision: (e as { actualCreationRevision?: number }).actualCreationRevision,
         },
         { status: 409 },
@@ -115,7 +146,11 @@ export async function PATCH(req: Request, ctx: { params: Promise<{ preparationId
     }
     if (code === "UNAVAILABLE") {
       return NextResponse.json(
-        { error: "DEPENDENCY_UNAVAILABLE", errorCategory: "DEPENDENCY_UNAVAILABLE" },
+        {
+          error: "DEPENDENCY_UNAVAILABLE",
+          errorCategory: "DEPENDENCY_UNAVAILABLE",
+          writeStatus: "UNKNOWN",
+        },
         { status: 503 },
       );
     }
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 8df4a8ba..c124823f 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -499,9 +499,12 @@ export default function PreparationPage() {
       }),
     });
     let j: {
+      writeStatus?: string;
+      appliedRevision?: number;
       creationRevision?: number;
       preparation?: { previewName?: string; previewSummary?: string; creationRevision?: number };
       projection?: PreparationProjection | null;
+      appliedProjection?: PreparationProjection | null;
       error?: string;
       actualCreationRevision?: number;
       reason?: string;
@@ -512,7 +515,8 @@ export default function PreparationPage() {
       j = {};
     }
     if (res.ok) {
-      // Trust the coherent server pair (revision + projection + preparation) — never mix.
+      const writeStatus = j.writeStatus ?? "APPLIED_CURRENT";
+      // Always show the coherent current pair (revision + projection + preparation).
       setPreviewName(j.preparation?.previewName ?? name);
       setPreviewSummary(j.preparation?.previewSummary ?? summary);
       setCreationRevision(
@@ -522,11 +526,24 @@ export default function PreparationPage() {
       );
       setProjection((j.projection as PreparationProjection | null) ?? null);
       setProjectionFreshness("current");
-      setProposalEditing(false);
-      setStatus(`Aperçu corrigé · révision ${j.creationRevision ?? "?"}`);
+
+      if (writeStatus === "APPLIED_SUPERSEDED") {
+        // Write confirmed but no longer current — never announce plain « Aperçu corrigé ».
+        // Keep local draft so the Pilot can re-apply voluntarily on the newer revision.
+        setStatus(
+          `Correction enregistrée (rév. ${j.appliedRevision ?? "?"}) puis remplacée par une version plus récente (rév. ${j.creationRevision ?? "?"}) — inspectez l'état courant ; le brouillon local est conservé.`,
+        );
+        // Keep proposalEditing true with prior draft fields when in edit mode.
+      } else if (writeStatus === "UNCHANGED_CURRENT") {
+        setProposalEditing(false);
+        setStatus(`Aperçu inchangé · révision ${j.creationRevision ?? "?"}`);
+      } else {
+        setProposalEditing(false);
+        setStatus(`Aperçu corrigé · révision ${j.creationRevision ?? "?"}`);
+      }
     } else if (res.status === 409) {
       setStatus(
-        `CONFLICT: aperçu modifié ailleurs (rév. actuelle ${j.actualCreationRevision ?? "?"}) — rechargement sans écrasement`,
+        `CONFLICT: correction non appliquée (rév. actuelle ${j.actualCreationRevision ?? "?"}) — rechargement sans écrasement du brouillon`,
       );
       await reload();
     } else if (res.status === 401) {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 86174b7a..87df6cb9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -225,21 +225,13 @@ register(

 register(
   SAS_MATURATION_T3,
-  effect(
+  // Proposition de démarrage ≠ REQUEST_EFFECT : proposedProjectName only; Pilot create remains D2.
+  dialogue(
     "Espace personnel : décisions, points ouverts, prochaines actions",
     "Premier périmètre : un espace personnel avec décisions, points ouverts et prochaines actions. Le travail en équipe est une piste ultérieure, pas une décision immédiate. Nom de travail proposé : Assistant de pilotage. Cette base me paraît suffisante pour démarrer si vous le souhaitez.",
-    [
-      {
-        capabilityId: "d2.create_project",
-        mode: "REQUEST_EFFECT",
-        summary: "Proposition Assistant de pilotage",
-        parameters: { projectName: "Assistant de pilotage" },
-        constraints: [],
-        dependsOn: [],
-        sourceEvidence: [],
-      },
-    ],
+    ["NO_EFFECT", "PROPOSAL_ONLY"],
     {
+      proposedProjectName: "Assistant de pilotage",
       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
       initialScope:
         "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
@@ -253,7 +245,7 @@ register(

 register(
   SAS_MATURATION_T4,
-  // Dialogue (no REQUEST_EFFECT): name correction while a D2 mission may still await Pilot create (S05).
+  // Dialogue (no REQUEST_EFFECT): name correction; create remains an explicit D2 Pilot act.
   dialogue(
     "Espace personnel de pilotage nommé Cockpit projets",
     "Correction prise en compte : le nom de travail est Cockpit projets (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.",
@@ -270,30 +262,48 @@ register(
   ),
 );

-register(
-  "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
-  effect(
+/** Build a T4 rename utterance with an isolated unique name (BROWSER uniqueness). */
+export function sasMaturationT4Rename(uniqueName: string): string {
+  return `Je préfère l'appeler ${uniqueName.trim()} plutôt qu'Assistant de pilotage.`;
+}
+
+function maturationRenameQualification(uniqueName: string): NoraTurnQualification {
+  const name = uniqueName.trim().slice(0, 120);
+  return dialogue(
+    `Espace personnel de pilotage nommé ${name}`,
+    `Correction prise en compte : le nom de travail est ${name} (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.`,
+    ["NAME_CORRECTION", "NO_EFFECT"],
+    {
+      proposedProjectName: name,
+      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
+      initialScope:
+        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
+      preparationAssessment: "BASE_SUFFICIENTE",
+      preparationAssessmentExplanation: `Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est ${name}.`,
+    },
+  );
+}
+
+function cockpitNamedQualification(projectName: string): NoraTurnQualification {
+  const name = projectName.trim().slice(0, 120);
+  return dialogue(
     "Cockpit de suivi des projets",
-    "Je comprends : un cockpit pour suivre vos projets, en commençant par le portefeuille et les risques. Nom de travail proposé : Cockpit projets. Cette base me paraît suffisante pour démarrer ; les détails pourront se préciser ensuite.",
-    [
-      {
-        capabilityId: "d2.create_project",
-        mode: "REQUEST_EFFECT",
-        summary: "Création Cockpit projets",
-        parameters: { projectName: "Cockpit projets" },
-        constraints: [],
-        dependsOn: [],
-        sourceEvidence: [],
-      },
-    ],
+    `Je comprends : un cockpit pour suivre vos projets, en commençant par le portefeuille et les risques. Nom de travail proposé : ${name}. Cette base me paraît suffisante pour démarrer ; les détails pourront se préciser ensuite.`,
+    ["NO_EFFECT", "PROPOSAL_ONLY"],
     {
+      proposedProjectName: name,
       desiredOutcome: "Voir portefeuille et risques en un seul endroit",
       initialScope: "Portefeuille et risques en premier",
       preparationAssessment: "BASE_SUFFICIENTE",
       preparationAssessmentExplanation:
         "Intention, résultat et périmètre initial sont assez clairs pour démarrer. Les raffinements peuvent se faire dans le projet.",
     },
-  ),
+  );
+}
+
+register(
+  "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
+  cockpitNamedQualification("Cockpit projets"),
 );

 register(
@@ -507,6 +517,11 @@ export function registerFixtureScenario(utterance: string, q: NoraTurnQualificat
   register(utterance, q);
 }

+const MATURATION_RENAME_RE =
+  /^Je préfère l'appeler (.+?) plutôt qu'Assistant de pilotage\.$/;
+const COCKPIT_NAMED_RE =
+  /^Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé (.+)\.$/;
+
 export function fixtureSemanticQualify(userText: string): NoraTurnQualification {
   assertFixtureLane();
   const text = normalizeUtterance(userText);
@@ -515,6 +530,16 @@ export function fixtureSemanticQualify(userText: string): NoraTurnQualification
   if (hit) {
     return structuredClone(hit);
   }
+  // Parameterized T4 rename: name appears in the Pilot message and structured qualification —
+  // never injected directly into D2/DB outside the normal turn path.
+  const rename = text.match(MATURATION_RENAME_RE);
+  if (rename?.[1]?.trim()) {
+    return maturationRenameQualification(rename[1]);
+  }
+  const cockpit = text.match(COCKPIT_NAMED_RE);
+  if (cockpit?.[1]?.trim()) {
+    return cockpitNamedQualification(cockpit[1]);
+  }
   // Fail closed: unknown fixture text is dialogue-only, never a lexical invent of effects.
   return dialogue(
     "Dialogue fixture par défaut",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index c9d7ca85..19d4b0a9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -369,20 +369,17 @@ export type MissionD2Resolve =
   | { status: "MISSION_NAME_MISMATCH"; reason: string; expected: string; received: string }
   | { status: "AMBIGUOUS_AWAITING"; count: number };

-function normalizeProjectName(name: string): string {
-  return name.trim().replace(/[.]+$/g, "").replace(/\s+/g, " ").toLowerCase();
-}
-
 /**
  * Server-authoritative binding of a D2 create act to an awaiting mission.
  * Client clientIntentKey is a hint that must match DB truth — never silent fallback
  * to another mission when the hint is wrong (B/C).
+ * Project name authority is D2-inspected (createProjectCommand), not mission rewrite.
  */
 export async function verifyMissionForD2Act(input: {
   conversationId: string;
   preparationId: string;
   clientIntentKey?: string | null;
-  /** When set with an awaiting mission that declared a name, must be compatible. */
+  /** Retained for callers; durable name match is enforced under D2 lock at create. */
   projectName?: string | null;
 }): Promise<MissionD2Resolve> {
   const latest = await loadLatestMissionsByIntentKey(input.conversationId);
@@ -408,16 +405,10 @@ export async function verifyMissionForD2Act(input: {
       };
     }
     if (hinted.status === "AWAITING_PILOT_ACT") {
-      const expected = hinted.proposedProjectName?.trim();
-      const received = input.projectName?.trim();
-      // Name may have been corrected by Nora (conversation) or Pilot (aperçu UI) after the
-      // awaiting mission was opened. The Pilot create act remains explicit; use the inspected name.
-      if (expected && received && normalizeProjectName(expected) !== normalizeProjectName(received)) {
-        return {
-          status: "OK",
-          mission: { ...hinted, proposedProjectName: received },
-        };
-      }
+      // Mission binding authorizes the awaiting act only. The durable project name is owned by
+      // D2 (inspected preparation projection / preview) and enforced under lock in createProjectCommand.
+      // Never rewrite mission.proposedProjectName from the client payload — that would launder an
+      // arbitrary name into mission memory without a persisted D2 correction.
       return { status: "OK", mission: hinted };
     }
     return { status: "ALREADY_CONTINUED", mission: hinted };
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts b/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
index b688900b..5b06cf5f 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
@@ -13,6 +13,9 @@ import { newId } from "@/lib/ids";
 import {
   namesConflictForSamePilot,
   normalizeProjectNameKey,
+  parseProjectionJson,
+  requestedNameMatchesInspected,
+  resolveInspectedProjectName,
 } from "@/domains/preparation/projection";

 export type CreateProjectInput = {
@@ -108,11 +111,19 @@ export async function createProjectCommand(input: CreateProjectInput): Promise<C
         }
       }

-      // Serialize concurrent creates for this preparation.
+      // Serialize concurrent creates for this preparation — include inspectable name fields.
       const locked = await tx.execute(
-        sql`select id, creation_revision from preparations where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId} for update`,
+        sql`select id, creation_revision, preview_name, projection_json
+            from preparations
+            where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId}
+            for update`,
       );
-      const rows = locked as unknown as Array<{ id: string; creation_revision: number }>;
+      const rows = locked as unknown as Array<{
+        id: string;
+        creation_revision: number;
+        preview_name: string;
+        projection_json: unknown;
+      }>;
       const prepRow = rows[0];
       if (!prepRow) return { status: "FORBIDDEN" as const };

@@ -126,6 +137,7 @@ export async function createProjectCommand(input: CreateProjectInput): Promise<C

       if (existingLink) {
         // Preparation already attached: record replay under same key/fingerprint only.
+        // Do not re-check inspected name against a now-ATTACHED prep — ACK replay must succeed.
         if (prior && prior.fingerprint !== fingerprint) {
           return fingerprintConflict("idempotency fingerprint mismatch on attached preparation");
         }
@@ -156,18 +168,42 @@ export async function createProjectCommand(input: CreateProjectInput): Promise<C
         };
       }

+      // G1 — name authority at durable effect: client name must match the currently inspected
+      // D2 proposal under the same FOR UPDATE lock (projection.name, else preview_name).
+      const projection = parseProjectionJson(
+        prepRow.projection_json,
+        input.preparationId,
+        Number(prepRow.creation_revision),
+      );
+      const inspected = resolveInspectedProjectName(projection, prepRow.preview_name);
+      if (!inspected) {
+        return {
+          status: "INVALID_REQUEST" as const,
+          reason: "no inspectable project name on preparation — reinspect before create",
+        };
+      }
+      if (!requestedNameMatchesInspected(name, inspected)) {
+        return {
+          status: "CONFLICT" as const,
+          actualCreationRevision: Number(prepRow.creation_revision),
+          reason: "projectName does not match inspected preparation proposal",
+        };
+      }
+      // Create with the durable inspected spelling, not a client-only variant.
+      const durableName = inspected;
+
       // Same-pilot name uniqueness (Morris 2026-11-16). Application-level only —
       // historical PF-CRE-14 duplicates exist; no UNIQUE DB constraint in this cycle.
       // Comparison uses the single JS semantic (normalizeProjectNameKey) under the pilot lock.
       // Replay ALREADY_CREATED paths above are unaffected.
-      if (!normalizeProjectNameKey(name)) {
+      if (!normalizeProjectNameKey(durableName)) {
         return { status: "INVALID_REQUEST" as const, reason: "projectName required" };
       }
       const owned = await tx
         .select({ id: projects.id, name: projects.name })
         .from(projects)
         .where(eq(projects.ownerPilotId, input.pilotId));
-      const nameHit = owned.find((p) => namesConflictForSamePilot(p.name, name));
+      const nameHit = owned.find((p) => namesConflictForSamePilot(p.name, durableName));
       if (nameHit) {
         return {
           status: "CONFLICT" as const,
@@ -181,7 +217,7 @@ export async function createProjectCommand(input: CreateProjectInput): Promise<C
       await tx.insert(projects).values({
         id: projectId,
         ownerPilotId: input.pilotId,
-        name,
+        name: durableName,
         createdAt: now,
       });
       await tx.insert(preparationProjectLinks).values({
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
index 0a334199..0f3431a1 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
@@ -300,18 +300,72 @@ export function canCreateFromProjection(
   return name.length > 0;
 }

+/**
+ * Resolve the durable inspected project name from D2 truth.
+ * Prefer projection.name; fall back to preview_name for older preparations without projection_json.
+ * Never invents a default title.
+ */
+export function resolveInspectedProjectName(
+  projection: PreparationProjection | null | undefined,
+  previewName: string | null | undefined,
+): string | null {
+  const fromProjection = projection?.name?.value?.trim() ?? "";
+  if (fromProjection) return fromProjection.slice(0, 120);
+  const fromPreview = (previewName ?? "").trim();
+  if (fromPreview) return fromPreview.slice(0, 120);
+  return null;
+}
+
+/** True when the client-requested name matches the currently inspected D2 proposal. */
+export function requestedNameMatchesInspected(
+  requestedName: string,
+  inspectedName: string,
+): boolean {
+  return namesConflictForSamePilot(requestedName, inspectedName);
+}
+
 /** Authoritative inspected create payload — never invents a default title. */
 export function inspectedCreatePayload(
   projection: PreparationProjection | null,
   previewName: string,
   previewSummary: string,
 ): { ok: true; projectName: string; previewSummary: string } | { ok: false; reason: string } {
-  const name = (projection?.name?.value || previewName).trim();
+  const name = resolveInspectedProjectName(projection, previewName);
   if (!name) {
     return { ok: false, reason: "project name required — clarify before create" };
   }
   const summary =
     previewFieldsFromProjection(projection, name, previewSummary).previewSummary ||
     previewSummary.trim();
-  return { ok: true, projectName: name.slice(0, 120), previewSummary: summary };
+  return { ok: true, projectName: name, previewSummary: summary };
+}
+
+/**
+ * Classify a successful pilot PATCH write against a post-commit observation.
+ * Distinguishes confirmed-current from confirmed-but-superseded — never conflates the two.
+ */
+export type PilotPatchWriteStatus =
+  | "APPLIED_CURRENT"
+  | "APPLIED_SUPERSEDED"
+  | "UNCHANGED_CURRENT"
+  | "CONFLICT_NOT_APPLIED"
+  | "UNKNOWN";
+
+export function classifyPilotPatchWrite(input: {
+  applyStatus: "APPLIED" | "UNCHANGED" | "CONFLICT" | "UNAVAILABLE" | "FORBIDDEN";
+  appliedRevision: number | null;
+  observedRevision: number | null;
+}): PilotPatchWriteStatus {
+  if (input.applyStatus === "CONFLICT") return "CONFLICT_NOT_APPLIED";
+  if (input.applyStatus === "UNAVAILABLE" || input.applyStatus === "FORBIDDEN") return "UNKNOWN";
+  if (input.appliedRevision == null || input.observedRevision == null) return "UNKNOWN";
+  if (input.applyStatus === "UNCHANGED") {
+    return input.observedRevision === input.appliedRevision
+      ? "UNCHANGED_CURRENT"
+      : "APPLIED_SUPERSEDED";
+  }
+  // APPLIED
+  if (input.observedRevision === input.appliedRevision) return "APPLIED_CURRENT";
+  if (input.observedRevision > input.appliedRevision) return "APPLIED_SUPERSEDED";
+  return "UNKNOWN";
 }
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
index d078c6c9..cd483940 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
@@ -8,7 +8,7 @@ import {
   SAS_MATURATION_T1,
   SAS_MATURATION_T2,
   SAS_MATURATION_T3,
-  SAS_MATURATION_T4,
+  sasMaturationT4Rename,
 } from "../../src/domains/conversation/fixture-semantic-qualify";

 async function loginPilot(
@@ -22,42 +22,6 @@ async function loginPilot(
   await page.waitForURL("**/portfolio");
 }

-/**
- * Uniquify inspected name via PATCH (Gap A contract) then create — no UI adjust form.
- * Isolates same-pilot name CONFLICT across e2e DB pollution.
- */
-async function uniquifyInspectedNameThenCreate(
-  page: import("@playwright/test").Page,
-  uniqueName: string,
-): Promise<string> {
-  const prepId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
-  expect(prepId).toBeTruthy();
-  const getRes = await page.request.get(`/api/preparations/${prepId}`);
-  expect(getRes.ok()).toBeTruthy();
-  const before = (await getRes.json()) as {
-    preparation: { creationRevision: number; previewSummary: string };
-  };
-  const patchRes = await page.request.patch(`/api/preparations/${prepId}`, {
-    data: {
-      previewName: uniqueName,
-      previewSummary: before.preparation.previewSummary || "aperçu inspecté",
-      expectedCreationRevision: before.preparation.creationRevision,
-    },
-  });
-  expect(patchRes.status()).toBe(200);
-  const patched = (await patchRes.json()) as { creationRevision?: number };
-  expect(typeof patched.creationRevision).toBe("number");
-  await page.reload();
-  await expect(page.getByTestId("prep-field-name")).toContainText(uniqueName, { timeout: 15000 });
-  await expect(page.getByTestId("prep-create-project")).toBeEnabled();
-  await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
-  await page.getByTestId("prep-create-project").click();
-  await page.waitForURL("**/projects/**", { timeout: 30000 });
-  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
-  expect(projectId).toBeTruthy();
-  return projectId!;
-}
-
 test.describe("ML4D Sas Nora — corrective convergence", () => {
   test("AF living aperçu without primary constitute; secondary tools not permanent tabs", async ({
     page,
@@ -82,19 +46,22 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
   test("AF primary path: create without constitute/adjust UI clicks", async ({ page }) => {
     await loginPilot(page, "b");
     await openNewPreparation(page);
+    const unique = `Cockpit B-${Date.now()}`;
     await sendPrepMessage(
       page,
-      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
+      `Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé ${unique}.`,
     );
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
+    await expect(page.getByTestId("prep-field-name")).toContainText(unique);
     await expect(page.getByTestId("prep-create-project")).toBeEnabled();
     await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
-    const unique = `Cockpit B-${Date.now()}`;
-    const projectId = await uniquifyInspectedNameThenCreate(page, unique);
+    await page.getByTestId("prep-create-project").click();
+    await page.waitForURL("**/projects/**", { timeout: 30000 });
+    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+    expect(projectId).toBeTruthy();
     await page.reload();
     await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
     await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
-    // Project shell may show truncated title; URL + continuity are the durable proofs.
     await expect(page.getByTestId("studio-rail")).toBeVisible();
   });

@@ -119,7 +86,9 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     await expect(page.getByTestId("prep-nora-assessment")).toContainText(/pas suffisante/i);
   });

-  test("AF multi-turn maturation: vague → outcome → scope → rename → create", async ({ page }) => {
+  test("AF multi-turn maturation: vague → outcome → scope → rename → create (no PATCH)", async ({
+    page,
+  }) => {
     test.setTimeout(240_000);
     await loginPilot(page, "b");
     await openNewPreparation(page);
@@ -139,7 +108,7 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
     await expect(page).toHaveURL(/\/preparations\//);

-    // T3 — scope + proposed name; Nora may recommend starting
+    // T3 — scope + proposed name via proposedProjectName (no REQUEST_EFFECT); no project
     await sendPrepMessage(page, SAS_MATURATION_T3);
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
     await expect(page.getByTestId("prep-field-name")).toContainText("Assistant de pilotage");
@@ -147,17 +116,21 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
     await expect(page).toHaveURL(/\/preparations\//);

-    // T4 — rename via conversation; old name must not remain current
-    await sendPrepMessage(page, SAS_MATURATION_T4);
-    await expect(page.getByTestId("prep-field-name")).toContainText("Cockpit projets", {
+    // T4 — conversational rename with unique name (no programmatic PATCH, no Ajuster)
+    const unique = `Cockpit projets MT-${Date.now()}`;
+    await sendPrepMessage(page, sasMaturationT4Rename(unique));
+    await expect(page.getByTestId("prep-field-name")).toContainText(unique, {
       timeout: 30000,
     });
     await expect(page.getByTestId("prep-field-name")).not.toHaveText("Assistant de pilotage");
     await expect(page.getByTestId("prep-create-project")).toBeEnabled();
+    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);

-    // T5 — uniquify via PATCH (Gap A) then create; no UI adjust form
-    const unique = `Cockpit projets MT-${Date.now()}`;
-    const projectId = await uniquifyInspectedNameThenCreate(page, unique);
+    // T5 — create directly from inspected T4 name
+    await page.getByTestId("prep-create-project").click();
+    await page.waitForURL("**/projects/**", { timeout: 30000 });
+    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+    expect(projectId).toBeTruthy();
     await page.reload();
     await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
     await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
diff --git a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
index 76f29f27..209ff625 100644
--- a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
@@ -339,7 +339,8 @@ describe("PostgreSQL create-project contracts", () => {
     const p1 = await openOrCreatePreparation(pilotId);
     const p2 = await openOrCreatePreparation(pilotId);
     await updatePreview(pilotId, p1.id, "SameName", "a");
-    await updatePreview(pilotId, p2.id, "Same Name ", "b");
+    // Inspected name on p2 must match the requested create payload (G1); uniqueness still fires.
+    await updatePreview(pilotId, p2.id, "samename", "b");
     const r1 = (await db.select().from(preparations).where(eq(preparations.id, p1.id)))[0];
     const r2 = (await db.select().from(preparations).where(eq(preparations.id, p2.id)))[0];
     const c1 = await createProjectCommand({
@@ -367,6 +368,70 @@ describe("PostgreSQL create-project contracts", () => {
     expect(all).toHaveLength(1);
   });

+  it("G1: client-only name refused; inspected correction accepted; stale revision conflicts", async () => {
+    const pilotId = await seedPilot("G1Name");
+    const prep = await openOrCreatePreparation(pilotId);
+    await updatePreview(pilotId, prep.id, "Nom inspecté", "s");
+    const mid = await getPreparationContext(pilotId, prep.id);
+
+    const arbitrary = await createProjectCommand({
+      pilotId,
+      preparationId: prep.id,
+      expectedCreationRevision: mid.preparation.creationRevision,
+      projectName: "Wrong Name Entirely",
+      previewSummary: "s",
+      idempotencyKey: newId("idem"),
+    });
+    expect(arbitrary.status).toBe("CONFLICT");
+    if (arbitrary.status === "CONFLICT") {
+      expect(arbitrary.reason).toMatch(/does not match inspected/i);
+    }
+    expect(
+      (await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId))).length,
+    ).toBe(0);
+
+    const ok = await createProjectCommand({
+      pilotId,
+      preparationId: prep.id,
+      expectedCreationRevision: mid.preparation.creationRevision,
+      projectName: "Nom inspecté",
+      previewSummary: "s",
+      idempotencyKey: newId("idem"),
+    });
+    expect(ok.status).toBe("CREATED");
+
+    // G1-11 style: after rename, old inspected name + stale or mismatched create fails.
+    const prep2 = await openOrCreatePreparation(pilotId);
+    await updatePreview(pilotId, prep2.id, "Ancien", "s");
+    const before = await getPreparationContext(pilotId, prep2.id);
+    await updatePreview(pilotId, prep2.id, "Nouveau", "s");
+    const stale = await createProjectCommand({
+      pilotId,
+      preparationId: prep2.id,
+      expectedCreationRevision: before.preparation.creationRevision,
+      projectName: "Ancien",
+      previewSummary: "s",
+      idempotencyKey: newId("idem"),
+    });
+    expect(stale.status).toBe("CONFLICT");
+    if (stale.status === "CONFLICT") {
+      expect(stale.reason).toMatch(/stale|does not match inspected/i);
+    }
+    const wrongCurrent = await createProjectCommand({
+      pilotId,
+      preparationId: prep2.id,
+      expectedCreationRevision: (await getPreparationContext(pilotId, prep2.id)).preparation
+        .creationRevision,
+      projectName: "Ancien",
+      previewSummary: "s",
+      idempotencyKey: newId("idem"),
+    });
+    expect(wrongCurrent.status).toBe("CONFLICT");
+    if (wrongCurrent.status === "CONFLICT") {
+      expect(wrongCurrent.reason).toMatch(/does not match inspected/i);
+    }
+  });
+
   it("Morris-name: two pilots may share the same display name", async () => {
     const a = await seedPilot("NameA");
     const b = await seedPilot("NameB");
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index bcd73e47..207c9128 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -14,6 +14,7 @@ import {
   pilots,
   preparations,
   projectCycles,
+  projects,
 } from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
@@ -83,15 +84,26 @@ async function seedPilot(label: string) {
   return id;
 }

-async function seedPrepOnly(label: string) {
+/**
+ * Open a preparation for conversation tests.
+ * Do NOT plant a PILOT_UI_EDIT project name by default — that would lock mergeNoraDraftWithPrior
+ * against a later Nora proposedProjectName (G1 inspected-name authority).
+ * Pass inspectedName when the caller will create immediately without a Nora rename.
+ */
+async function seedPrepOnly(label: string, opts?: { inspectedName?: string }) {
   const pilotId = await seedPilot(label);
   const prep = await openOrCreatePreparation(pilotId);
-  await updatePreview(pilotId, prep.id, label, "s");
+  if (opts?.inspectedName != null && opts.inspectedName.trim()) {
+    await updatePreview(pilotId, prep.id, opts.inspectedName.trim(), "s");
+  } else {
+    // Summary-only seed: no pilot-owned name field that would block Nora proposals.
+    await updatePreview(pilotId, prep.id, "", "s");
+  }
   return { pilotId, preparationId: prep.id };
 }

 async function seedProject(label: string) {
-  const { pilotId, preparationId } = await seedPrepOnly(label);
+  const { pilotId, preparationId } = await seedPrepOnly(label, { inspectedName: label });
   const refreshed = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0];
   const created = await createProjectCommand({
     pilotId,
@@ -686,7 +698,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
   });

   it("G4/S12: mobilizeCapability on real D2 + D4 contracts + future double", async () => {
-    const { pilotId, preparationId } = await seedPrepOnly("scen-g4-mob");
+    const { pilotId, preparationId } = await seedPrepOnly("scen-g4-mob", {
+      inspectedName: "Mobilized Project",
+    });
     const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
     const d2 = CAPABILITY_CONTRACTS.find((c) => c.capabilityId === "d2.create_project")!;
     const created = await mobilizeCapability(
@@ -868,8 +882,8 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const prepAfter = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
     expect(prepAfter.status).not.toBe("ATTACHED");

-    // Inspected name may diverge from the original Nora proposal (Pilot/Nora correction).
-    // Binding remains AUTHORIZED; create uses the inspected name.
+    // Mission binding stays AUTHORIZED for the awaiting key — but an arbitrary client-only
+    // name must not create. D2 inspected name (Auth Exact) is authoritative under lock.
     const nameAuth = await authorizeMissionBoundD2Create({
       pilotId,
       preparationId,
@@ -878,17 +892,35 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     });
     expect(nameAuth.outcome).toBe("AUTHORIZED");
     if (nameAuth.outcome === "AUTHORIZED") {
-      expect(nameAuth.mission.proposedProjectName).toBe("Wrong Name Entirely");
+      // Mission memory is not rewritten from the client payload.
+      expect(nameAuth.mission.proposedProjectName).not.toBe("Wrong Name Entirely");
+    }
+    const refused = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: prepAfter.creationRevision,
+      projectName: "Wrong Name Entirely",
+      previewSummary: "s",
+      idempotencyKey: newId("idem"),
+    });
+    expect(refused.status).toBe("CONFLICT");
+    if (refused.status === "CONFLICT") {
+      expect(refused.reason).toMatch(/does not match inspected/i);
     }
     expect(
       (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]?.status,
     ).not.toBe("ATTACHED");

+    // Persist a legitimate conversational/UI name correction, then create must use it.
+    await updatePreview(pilotId, preparationId, "Cockpit Auth", prepAfter.previewSummary || "s");
+    const afterRename = (
+      await db.select().from(preparations).where(eq(preparations.id, preparationId))
+    )[0]!;
     const ok = await authorizeMissionBoundD2Create({
       pilotId,
       preparationId,
       clientIntentKey: keyA,
-      projectName: "Auth Exact",
+      projectName: "Cockpit Auth",
     });
     expect(ok.outcome).toBe("AUTHORIZED");
     if (ok.outcome !== "AUTHORIZED") throw new Error("expected AUTHORIZED");
@@ -896,12 +928,16 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const created = await createProjectCommand({
       pilotId,
       preparationId,
-      expectedCreationRevision: prepAfter.creationRevision,
-      projectName: "Auth Exact",
+      expectedCreationRevision: afterRename.creationRevision,
+      projectName: "Cockpit Auth",
       previewSummary: "s",
       idempotencyKey: ok.idempotencyKey,
     });
     expect(created.status).toBe("CREATED");
+    if (created.status === "CREATED") {
+      const proj = (await db.select().from(projects).where(eq(projects.id, created.projectId)))[0];
+      expect(proj?.name).toBe("Cockpit Auth");
+    }
   });

   it("S06/S07: two awaiting missions — recover binds D2 owner act, not neighboring awaiting", async () => {
@@ -1041,9 +1077,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
   it("S05: two projects same Pilot — recover on Atlas never uses Orion conversation/mission", async () => {
     const atlas = await seedPrepOnly("scen-s05-atlas");
     const orion = await seedPrepOnly("scen-s05-orion");
-    // Same pilot: re-seed Orion under Atlas pilot
+    // Same pilot: re-seed Orion under Atlas pilot — no pilot name lock before Nora proposal.
     const orionPrep = await openOrCreatePreparation(atlas.pilotId);
-    await updatePreview(atlas.pilotId, orionPrep.id, "Orion Prep", "s");
+    await updatePreview(atlas.pilotId, orionPrep.id, "", "s");

     const keyAtlas = newId("ctk");
     const keyOrion = newId("ctk");
diff --git a/projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts
index 4003155d..e5989fc7 100644
--- a/projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/preparation-patch.pg.test.ts
@@ -93,7 +93,10 @@ describe("PG REAL — preparation PATCH contract", () => {
       expectedCreationRevision: before.preparation.creationRevision,
     });
     expect(res.status).toBe(200);
+    expect(res.body.writeStatus).toBe("APPLIED_CURRENT");
+    expect(res.body.appliedRevision).toBe(before.preparation.creationRevision + 1);
     expect(res.body.creationRevision).toBe(before.preparation.creationRevision + 1);
+    expect(res.body.reconciled).toBe(false);
     expect((res.body.preparation as { previewName: string }).previewName).toBe("Cockpit inspecté");
     const proj = res.body.projection as {
       name: { value: string; status: string; source: { kind: string } };
@@ -136,6 +139,7 @@ describe("PG REAL — preparation PATCH contract", () => {
     });
     expect(second.status).toBe(409);
     expect(second.body.error).toBe("CONFLICT");
+    expect(second.body.writeStatus).toBe("CONFLICT_NOT_APPLIED");
     expect(second.body.actualCreationRevision).toBe(rev0 + 1);

     const after = await getPreparationContext(sess.pilotId, prep.id);
@@ -186,6 +190,45 @@ describe("PG REAL — preparation PATCH contract", () => {
     expect(ctx.preparation.creationRevision).toBe(rev + 1);
   });

+  it("G3: applied then superseded before observation is classified honestly", async () => {
+    const { classifyPilotPatchWrite } = await import("@/domains/preparation/projection");
+    const pilotId = await seedPilot("PatchSupersede");
+    const prep = await openOrCreatePreparation(pilotId);
+    const rev0 = (await getPreparationContext(pilotId, prep.id)).preparation.creationRevision;
+
+    const first = await applyPilotApercuCorrection({
+      pilotId,
+      preparationId: prep.id,
+      previewName: "Première correction",
+      previewSummary: "a",
+      expectedCreationRevision: rev0,
+    });
+    expect(first.status).toBe("APPLIED");
+    if (first.status !== "APPLIED") throw new Error("expected APPLIED");
+
+    // Deterministic supersession after first commit (no sleep): second write advances revision.
+    const second = await applyPilotApercuCorrection({
+      pilotId,
+      preparationId: prep.id,
+      previewName: "Deuxième courante",
+      previewSummary: "b",
+      expectedCreationRevision: first.revision,
+    });
+    expect(second.status).toBe("APPLIED");
+
+    const observed = await getPreparationContext(pilotId, prep.id);
+    const writeStatus = classifyPilotPatchWrite({
+      applyStatus: "APPLIED",
+      appliedRevision: first.revision,
+      observedRevision: observed.preparation.creationRevision,
+    });
+    expect(writeStatus).toBe("APPLIED_SUPERSEDED");
+    expect(observed.preparation.previewName).toBe("Deuxième courante");
+    expect(observed.preparation.creationRevision).toBe(first.revision + 1);
+    // Must not present the first correction as the current truth.
+    expect(observed.projection?.name?.value).not.toBe("Première correction");
+  });
+
   it("create after PATCH uses inspected name", async () => {
     const sess = await bindDevSession("a");
     const prep = await openOrCreatePreparation(sess.pilotId);
diff --git a/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
index b7853da1..7e6eb333 100644
--- a/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
@@ -115,6 +115,39 @@ describe("preparation projection helpers (final corrective)", () => {
     if (ok.ok) expect(ok.projectName).toBe("Nom réel");
   });

+  it("resolveInspectedProjectName prefers projection then preview; never invents", async () => {
+    const {
+      resolveInspectedProjectName,
+      requestedNameMatchesInspected,
+      classifyPilotPatchWrite,
+    } = await import("@/domains/preparation/projection");
+    expect(resolveInspectedProjectName(null, "")).toBeNull();
+    expect(resolveInspectedProjectName(null, "  Preview  ")).toBe("Preview");
+    expect(requestedNameMatchesInspected("Wrong", "Preview")).toBe(false);
+    expect(requestedNameMatchesInspected(" preview ", "Preview")).toBe(true);
+    expect(
+      classifyPilotPatchWrite({
+        applyStatus: "APPLIED",
+        appliedRevision: 2,
+        observedRevision: 2,
+      }),
+    ).toBe("APPLIED_CURRENT");
+    expect(
+      classifyPilotPatchWrite({
+        applyStatus: "APPLIED",
+        appliedRevision: 2,
+        observedRevision: 3,
+      }),
+    ).toBe("APPLIED_SUPERSEDED");
+    expect(
+      classifyPilotPatchWrite({
+        applyStatus: "CONFLICT",
+        appliedRevision: null,
+        observedRevision: 3,
+      }),
+    ).toBe("CONFLICT_NOT_APPLIED");
+  });
+
   it("detects material changes and syncs preview fields", () => {
     const draft = draftProjectionFromQualification({
       preparationId: "prep-1",
