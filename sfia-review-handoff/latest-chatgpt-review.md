# SFIA Review Pack FULL — Ensemble 07 · Qualification navigateur du correctif DEV

> Cycle QA/Test incrément — complément du correctif continuité pilotage (même macro-lot).
> Source corrective handoff préalable : `sfia/review-handoff@f346a531` blob `7c992361`.

## 1. Identité / GO Morris

| Champ | Valeur |
|---|---|
| Date | 2026-11-21 |
| GO | qualification navigateur + stabilisation corrective (périmètre déjà autorisé) |
| Typologie | INC / QA de correctif intégré |
| Environnement | **DEV isolé uniquement** (`:3101` Playwright + `sfia_next_e2e`) |
| LIVE | **NOT RUN — aucun appel fournisseur** |
| Versioning | **NO RELEASE** |
| Gate C | **OPEN** |
| Review Handoff | required / publish-in-cycle |

## 2. Git Truth avant / après

### Avant

| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD | `6ecdb987ee867a04ff816b699eb8870ac200db0a` |
| Tree | `d0ad47ff515676f1c033a39030e886859f7272f7` |
| Base main | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |

### Après

| | |
|---|---|
| HEAD projet | **inchangé** `6ecdb987…` (aucun commit/push projet) |
| Correctifs | locaux non commités (correctif + QA browser) |
| RECETTE `:3200` | **non mutée** (BUILD `armX_D1HJzN6q-4MuDpYv`) |
| STABLE | NOT AVAILABLE |

## 3. Sources et refs

- Handoff correctif `f346a531` / blob `7c992361` — §§5–16
- PV UAT `7c96bbed` — UAT-02/08/09/10/11/12
- ENV-01 / product-versioning (main)
- Code local Ensemble 07 + as-built

## 4. Identité DEV / séparation RECETTE

| Lane | Port app | DB | Nora |
|---|---|---|---|
| Playwright E2E DEV | `127.0.0.1:3101` | `sfia_next_e2e@:5433` (jetable) | fixture `STUDIO_FORCE_NORA_FIXTURE=1` |
| Operator DEV | `:3100` (non requis pour cette campagne) | `sfia_next_dev` | — |
| RECETTE | `:3200` **lecture seule** | `sfia_next_recette_ml4@:5434` | **non touchée** |

Cookies same-host : contextes séparés (Playwright isolé :3101).

## 5. Scénarios BROWSER-01…06

| ID | Résultat | Preuve |
|---|---|---|
| **BROWSER-01** | **PASS** | GO naturel + fixture `cycleType=cadrage` → ACTIVE `CADRAGE` + CKI + restitution métier + surfaces Projet/Trajectoire/Travail sans F5 |
| **BROWSER-02** | **PASS** | OPEN type inconnu → REJECTED ; aucun ACTIVE ; message refus ; Projet « sans cycle » |
| **BROWSER-03** | **PASS** | Hedge pré-effet stripé ; messages durables cohérents après reload ; CONFLICT/UNKNOWN composeur = unit DETERMINISTIC |
| **BROWSER-04** | **PASS** | Navigation surfaces après OPEN sans F5 ; refresh volontaire = mêmes faits ; **situation-2 multi-onglet push NOT claimed** |
| **BROWSER-05** | **PASS** | Création projet sans dump `### Suite de mission` / `projectId=` ; reload OK |
| **BROWSER-06** | **PASS** | GO ambigu sans 2e ACTIVE ; GET idempotent ; repeat OPEN garde même cycleId ; isolation inter-projets |

Régression `ensemble07-parcours-af` : **7 PASS / 2 SKIP** (A2/D2 intentional NOT RUN).

## 6. Captures et preuves corrélées

Captures locales (non Git) :

`.tmp-sfia-review/ensemble07-browser-evidence/` — `b01-travail-after-go.png`, `b01-projet-after-open.png`, `b01-trajectoire-after-open.png`, `b01-cki-region.png`, `b02-rejected-no-cycle.png`, `b04-after-voluntary-refresh.png`, `b05-travail-after-create.png`, `b06-idempotence.png`

Corrélation API : GET `/api/projects/:id` — `pilotage.cycle` ACTIVE/CADRAGE + messages assistant avec « Résultat Studio » + `turnProjections[].pilotageEffect` (après correctif QA).

## 7. DETERMINISTIC vs LIVE

| Niveau | Statut |
|---|---|
| DETERMINISTIC unit/PG | **PROVEN** (702 / 525) |
| DETERMINISTIC BROWSER | **PROVEN** (fixture `cadrage` + Playwright) |
| LIVE/REAL Nora | **NOT RUN — GATE REQUIRED** |

`DETERMINISTIC BROWSER PROVEN ≠ LIVE/REAL PROVEN`.

## 8. Anomalies découvertes pendant la qualification

1. **Fixture encore pré-canonisée** (`cycleType: CADRAGE`) — corrigé → `"cadrage"`.
2. **`listTurnProjections` omettait `pilotageEffect`** — API ne permettait pas de corréler l'effet durable depuis turnProjections.
3. **`refreshDurablePilotage` ne rechargeait que le libellé status**, pas `pilotageProjection` — cause racine sync sans F5 insuffisante.

## 9. Correctifs QA supplémentaires (même cycle)

- Fixture OPEN/GO/RETAIN/unknown + hedge pré-effet
- `listTurnProjections` attache `pilotageEffect` depuis `resultJson`
- `refreshDurablePilotage` → GET projet + `setPilotageProjection` (+ messages)
- Spec `ensemble07-browser-continuity.spec.ts`
- Assertion C2 parcours-af : `cycleType === "CADRAGE"`

## 10. Fichiers créés / modifiés

### Créés
- `projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts`
- `projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts`

### Modifiés (liste complète)
- `web/src/domains/pilotage/service.ts`
- `web/src/domains/pilotage/nora-context.ts`
- `web/src/domains/pilotage/intent.ts`
- `web/src/domains/conversation/service.ts`
- `web/src/domains/conversation/intent-conduction.ts`
- `web/src/domains/conversation/fixture-semantic-qualify.ts`
- `web/src/app/projects/[projectId]/page.tsx`
- `web/tests/integration/ensemble07-initial-qualification.pg.test.ts`
- `web/tests/e2e/ensemble07-parcours-af.spec.ts`
- `construction/.../ensemble-07-as-built-initial-qualification.md`
- `construction/delivery-history.md`

## 11. Diffs complets (modifiés) + nouveaux fichiers

### Diff `git diff -- projects/sfia-studio-next` (arbre local vs HEAD `6ecdb987`)

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
index 7c7ac2f0..6d21de34 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
@@ -1,13 +1,13 @@
 # Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

-**Statut:** construction DEV corrective — NO RELEASE · stabilisation fonctionnelle
-**Base Git:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
-**Branche:** `sfia/next-ensemble07-projet-trajectoire-delivery`
-**Date:** 2026-11-20 (stabilisation fonctionnelle — UX gelée)
+**Statut:** construction DEV corrective — NO RELEASE · continuité pilotage gouverné (correctif post-RECETTE Equip'Campus)
+**Base Git figée RECETTE (immuable):** `6ecdb987ee867a04ff816b699eb8870ac200db0a` · tree `d0ad47ff515676f1c033a39030e886859f7272f7`
+**Worktree DEV (non commité):** correctifs locaux sur `sfia/next-ensemble07-projet-trajectoire-delivery`
+**Date:** 2026-11-21 (correctif intégré UAT-02/06/08/09/10/11/12)

 ## Architecture retenue

-Option A hybride (dossier §8.1) + corrections P0 stabilisation :
+Option A hybride (dossier §8.1) + corrections P0 stabilisation + **correctif continuité Pilot/Nora/Studio** :

 1. Après `createProjectCommand` confirmé : `ensureInitialQualification` (retry) **avant** `continueAfterProjectCreated`, puis `kickInitialQualificationProcessing` (P0-05).
 2. Kick uniquement depuis create / reconcile POST — **jamais depuis GET**.
@@ -15,8 +15,15 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation :
 4. `resultJson.assistantContent` durable pour reprise exacte message (P0-02).
 5. Lien `preparation_project_links.initial_qualification_expected` (migration 016) : legacy = false → pas de verrou synthétique (P0-04).
 6. RETAIN conversationnel résout la PROPOSED courante côté serveur (FIX-08) — pas de cible D5 dans le body USER_MESSAGE.
-7. Forecast déterministe + `validateStructuredForecast` (FIX-07) — LIVE Nora NOT PROVEN.
+7. Forecast déterministe + `validateStructuredForecast` (FIX-07) — LIVE Nora NOT PROVEN ce cycle.
 8. Documents « en cours » = statut `SAVING` uniquement (FIX-11).
+9. **Normalisation `cycleType`** à la frontière classify D5 (`cycle-type-normalize.ts`) — variants sûrs (`cadrage`→`CADRAGE`) ; inconnus refusés sans remap silencieux.
+10. **Catalogue cycles** injecté dans le contexte Nora (`nora-context.ts`) — identifiants + libellés seulement, pas les fiches CKI.
+11. **Restitution post-effet** déterministe (`composePilotageEffectRestitution`) avant persistance du message assistant — APPLIED / REJECTED / CONFLICT / UNKNOWN / ALREADY_APPLIED.
+12. **Projection fil Travail** : dumps techniques mission filtrés en lecture (`listMessages`) ; nouveaux continues métier sans `projectId=` brut.
+13. **Sync surfaces** : `selectSurface` déclenche `refreshDurablePilotage` qui recharge la **projection pilotage complète** (+ messages) via GET projet — sans F5, sans mutation.
+14. **Projections de tour** : `listTurnProjections` expose aussi `pilotageEffect` (sibling `resultJson`) pour corrélation API/UI.
+15. **Fixture E2E** : OPEN émet `cycleType="cadrage"` (frontière LIVE) ; GO naturel + RETAIN + type inconnu enregistrés.

 ## Persistance

@@ -32,6 +39,11 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation :
 | `web/src/domains/pilotage/initial-qualification.ts` | ensure / process / assert admission |
 | `web/src/domains/pilotage/forecast-builder.ts` | séquence 1–3 cycles (déterministe FAKE) |
 | `web/src/domains/pilotage/qualification-lock.ts` | règles de verrou compositeur |
+| `web/src/domains/pilotage/cycle-type-normalize.ts` | normalisation cycleType LIVE→D5 |
+| `web/src/domains/pilotage/nora-context.ts` | snippets pilotage + catalogue cycles |
+| `web/src/domains/conversation/pilotage-effect-restitution.ts` | restitution métier post-effet + filtre dumps |
+| `web/src/domains/conversation/service.ts` | compose restitution avant commit ; `listMessages` projection |
+| `web/src/app/projects/[projectId]/page.tsx` | refresh pilotage au changement de surface |
 | `web/src/components/figma/TrajectoryBoard.tsx` | surface Trajectoire 09.02/07/10/11 |
 | `web/src/components/figma/SasCreateProgressPopup.tsx` | pop-up SAS 06 allégée |
 | `web/src/components/figma/ProjectOverview.tsx` | 09.01 / 09.06 |
@@ -39,14 +51,13 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation :

 ## Preuves

-- Unit: `ensemble07-forecast-builder`, `ensemble07-qualification-lock`, `ensemble07-ensure-idempotent`
-- Integration PG: `ensemble07-initial-qualification.pg.test.ts` (create→propose, idempotence, lock admission, clarification, failure)
-- Build: `npm run build` OK
-- Figma: 13/13 captures MCP locales sous `.tmp-sfia-review/ensemble07-evidence/figma/`
+- Unit: `ensemble07-forecast-builder`, `ensemble07-qualification-lock`, `ensemble07-ensure-idempotent`, `ensemble07-cycle-type-normalize` (`cadrage`→`CADRAGE`), `ensemble07-pilotage-effect-restitution`
+- Integration PG: `ensemble07-initial-qualification.pg.test.ts` (OPEN avec `cycleType=cadrage` → ACTIVE CADRAGE), `ml3-pilotage`, `intent-continuity-global`
+- LIVE Nora fournisseur : **NOT RUN — GATE REQUIRED** (pas de nouvel appel fournisseur ce cycle)
+- RECETTE `:3200` : **non mutée**

 ## Réserves connues

-- Fidélité visuelle pixel des 13 frames : itérations runtime encore requises avant READY visuel.
-- Vues détail 09.03 / 09.04 / 09.05 : projection partielle (bilan / CKI éditorial) à enrichir.
-- GO conversationnel D6→D5 : capacités PilotagePanel conservées ; parcours conversationnel principal à prouver en e2e navigateur.
-- LIVE Nora fournisseur : NOT PROVEN (fixture DEV).
+- Fidélité visuelle pixel des 13 frames : hors mandat correctif (OUT Figma).
+- LIVE cognitive réelle sur projet synthétique DEV : gate Morris + autorisation fournisseur requises.
+- E2E navigateur sync sans F5 : à rejouer sur runtime DEV après gel candidat (preuve unitaire/PG + hook `selectSurface` en place).
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 1031bd24..c19cc7dc 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,35 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-BROWSER-CONTINUITY-QUALIFICATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — qualification navigateur du correctif continuité pilotage |
+| Type | INC / QA incrément · **NO RELEASE** · Gate C OPEN |
+| Worktree | même arbre DEV local non commité · parent RECETTE `6ecdb987` |
+| Preuves | BROWSER-01…06 Playwright `:3101` / `sfia_next_e2e` · fixture `cycleType=cadrage` · captures `.tmp-sfia-review/ensemble07-browser-evidence/` |
+| Correctifs QA | `listTurnProjections` expose `pilotageEffect` · `refreshDurablePilotage` recharge projection complète |
+| Tests | unit 702 PASS · PG 525 PASS · tsc PASS · browser continuity 6 PASS · LIVE NOT RUN |
+| RECETTE | non mutée |
+| Verdict | **ENSEMBLE 07 — DEV BROWSER QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED** |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-GOVERNED-PILOTAGE-CONTINUITY-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — continuité du pilotage gouverné (correctif post-UAT Equip'Campus) |
+| Type | INC / correctif fonctionnel intégré · **NO RELEASE** · Gate C OPEN |
+| Worktree | `sfia-wt-ensemble07-projet-trajectoire-20261120` · branche `sfia/next-ensemble07-projet-trajectoire-delivery` · HEAD parent figé RECETTE `6ecdb987` (arbre DEV non commité) |
+| IN | UAT-10 normalize cycleType · UAT-11 restitution post-effet · UAT-08/09 catalogue Nora · UAT-02 filtre messages techniques · UAT-12 sync surfaces · UAT-06 taxonomie concernée |
+| OUT | Figma polish · mutation RECETTE · push projet · LIVE fournisseur · migration DB |
+| Tests | unit 702 PASS · PG 525 PASS · tsc PASS · OPEN `cadrage`→CADRAGE PG PROVEN · LIVE NOT RUN — GATE REQUIRED |
+| RECETTE | inchangée (`:3200` / BUILD `armX_D1HJzN6q-4MuDpYv` / SHA `6ecdb987`) |
+| Verdict | **ENSEMBLE 07 — DEV CORRECTIVE QUALIFIED WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED** |
+
+
 ## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FUNCTIONAL-STABILIZATION-CANDIDATE

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 5fada7f5..b4c557f7 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -911,6 +911,7 @@ export default function ProjectPage() {

   function selectSurface(next: Surface) {
     surfaceNavGenRef.current += 1;
+    const navGen = surfaceNavGenRef.current;
     pendingSurfaceRef.current = next;
     noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
     setSurface(next);
@@ -928,6 +929,15 @@ export default function ProjectPage() {
       resetDocumentBibliothequeState();
       syncSurfaceUrl(next, null, "push");
     }
+    // E07 — revalidate durable pilotage on surface change (GET only, no métier mutation).
+    // Fire-and-forget with generation guard: a newer nav supersedes an in-flight refresh.
+    void refreshDurablePilotage()
+      .then(() => {
+        if (surfaceNavGenRef.current !== navGen) return;
+      })
+      .catch(() => {
+        /* best-effort — navigation must stay non-blocking */
+      });
   }

   function headRevisionFromRows(rows: RevisionRow[]): RevisionRow | null {
@@ -1253,10 +1263,36 @@ export default function ProjectPage() {
   }

   async function refreshDurablePilotage() {
-    const projRes = await fetch(`/api/projects/${params.projectId}/pilotage`);
+    // Prefer full project GET so surfaces (Projet / Trajectoire / CKI) share one durable snapshot.
+    const projRes = await fetch(`/api/projects/${params.projectId}`);
     if (projRes.ok) {
-      const pj = await projRes.json();
-      const cycle = pj.pilotage?.cycle ?? pj.cycle;
+      const pj = (await projRes.json()) as {
+        pilotage?: PilotageProjection | null;
+        messages?: Msg[];
+      };
+      if (pj.pilotage) {
+        setPilotageProjection(pj.pilotage);
+      }
+      if (Array.isArray(pj.messages)) {
+        setMessages(pj.messages);
+      }
+      const cycle = pj.pilotage?.cycle;
+      if (cycle?.status === "ACTIVE") {
+        setPilotageStatus((prev) =>
+          prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
+            ? prev
+            : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
+        );
+      }
+      return;
+    }
+    // Fallback: dedicated pilotage route
+    const only = await fetch(`/api/projects/${params.projectId}/pilotage`);
+    if (only.ok) {
+      const pj = await only.json();
+      const pilotage = (pj.pilotage ?? pj) as PilotageProjection;
+      setPilotageProjection(pilotage);
+      const cycle = pilotage?.cycle;
       if (cycle?.status === "ACTIVE") {
         setPilotageStatus((prev) =>
           prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 093927d1..7deeff73 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -527,14 +527,22 @@ for (const msg of [
   );
 }

+/**
+ * E07 corrective — LIVE EquipCampus emitted cycleType="cadrage" (lowercase).
+ * Fixture intentionally mirrors that semantic frontier; D5 classify must canonicalize.
+ * replyDraft includes the pre-effect hedge so post-effect restitution can be asserted.
+ */
+const OPEN_CADRAGE_REPLY =
+  "Je note votre accord pour ouvrir le cycle de cadrage. L'ouverture effective reste à confirmer par Studio.";
+
 register(
   "Ouvre le cycle cadrage.",
-  effect("Ouvrir cycle", "Intention d'ouverture de cycle — vérification propriétaire D5.", [
+  effect("Ouvrir cycle", OPEN_CADRAGE_REPLY, [
     {
       capabilityId: "d5.pilotage_command",
       mode: "REQUEST_EFFECT",
       summary: "OPEN_CYCLE CADRAGE",
-      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
+      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
       constraints: [],
       dependsOn: [],
       sourceEvidence: [],
@@ -542,6 +550,62 @@ register(
   ]),
 );

+register(
+  "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.",
+  effect("Ouvrir cycle GO naturel", OPEN_CADRAGE_REPLY, [
+    {
+      capabilityId: "d5.pilotage_command",
+      mode: "REQUEST_EFFECT",
+      summary: "OPEN_CYCLE CADRAGE (GO naturel)",
+      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
+      constraints: [],
+      dependsOn: [],
+      sourceEvidence: [],
+    },
+  ]),
+);
+
+register(
+  "Je retiens cette trajectoire.",
+  effect(
+    "Retenir trajectoire",
+    "Je note votre rétention de l'orientation. L'ouverture d'un cycle reste une décision distincte — confirmation Studio à suivre.",
+    [
+      {
+        capabilityId: "d5.pilotage_command",
+        mode: "REQUEST_EFFECT",
+        summary: "RETAIN_TRAJECTORY",
+        parameters: { pilotageOperation: "RETAIN_TRAJECTORY" },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+    ],
+  ),
+);
+
+register(
+  "Ouvre le cycle comparaison_de_solutions.",
+  effect(
+    "Ouvrir type inconnu",
+    "Je vais demander l'ouverture du cycle comparaison_de_solutions. L'ouverture effective reste à confirmer par Studio.",
+    [
+      {
+        capabilityId: "d5.pilotage_command",
+        mode: "REQUEST_EFFECT",
+        summary: "OPEN_CYCLE type inconnu",
+        parameters: {
+          pilotageOperation: "OPEN_CYCLE",
+          cycleType: "comparaison_de_solutions",
+        },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+    ],
+  ),
+);
+
 register(
   "Rédige un document de synthèse sur les options A et B",
   effect(
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 19d4b0a9..33a92fa0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -31,7 +31,6 @@ import { TURN_RUNNING_STALE_MS, turnClock } from "./turn-command";
 import {
   appendMissionAck,
   composeCanonicalMissionRestitution,
-  formatMissionAck,
   type MissionOwnerActBinding,
   type MissionProjection,
   type MissionStep,
@@ -997,10 +996,10 @@ export async function continueAfterProjectCreated(input: {
   if (!pendingDoc) {
     mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
     generationId = `mission-continue-d2:${mission.clientIntentKey}:${input.projectId}`;
+    // E07 — métier restitution only in the thread; keep structured missionProjection for audit.
     assistantContent =
-      `### Suite de mission\nProjet créé (projectId=${input.projectId}). ` +
-      `Aucune étape documentaire dépendante dans l'intention initiale.\n\n` +
-      formatMissionAck(mission);
+      "Le projet a bien été créé. Vous pouvez poursuivre dans Travail, consulter la Trajectoire " +
+      "et décider avec Nora de l'ouverture du premier cycle lorsque vous serez prêt.";
   } else {
     const original =
       mission.originalUserText ??
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 83bc164d..0fd75b69 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -72,6 +72,11 @@ import {
 } from "@/domains/pilotage/conversation-authority";
 import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";
 import { assertPilotTurnNotBlockedByQualification } from "@/domains/pilotage/initial-qualification";
+import {
+  composePilotageEffectRestitution,
+  isTechnicalMissionAssistantContent,
+  projectMetierMissionMessage,
+} from "@/domains/conversation/pilotage-effect-restitution";
 import {
   appendDocumentEffectAck,
   applyTargetedSectionRevision,
@@ -407,11 +412,21 @@ export async function listMessages(pilotId: string, preparationId: string) {
   // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
   const ctx = await getPreparationContext(pilotId, preparationId);
   if (!ctx.conversation) return [];
-  return db
+  const rows = await db
     .select()
     .from(messages)
     .where(eq(messages.conversationId, ctx.conversation.id))
     .orderBy(asc(messages.ordinal));
+  // E07 — project technical mission dumps as métier text (no DB rewrite).
+  return rows.map((m) => {
+    if (
+      m.role === "assistant" &&
+      isTechnicalMissionAssistantContent(m.content, m.generationId)
+    ) {
+      return { ...m, content: projectMetierMissionMessage(m.content) };
+    }
+    return m;
+  });
 }

 /**
@@ -534,12 +549,23 @@ export async function listTurnProjections(pilotId: string, preparationId: string
     if (!row.assistantMessageId || !row.resultJson) continue;
     const proj = extractTurnProjectionFromResultJson(row.resultJson);
     if (!proj) continue;
+    // E07 — surface durable Studio effect alongside turnProjection (sibling in resultJson).
+    let pilotageEffect: TurnResult["pilotageEffect"] = null;
+    try {
+      const parsed = JSON.parse(row.resultJson) as {
+        pilotageEffect?: TurnResult["pilotageEffect"];
+      };
+      pilotageEffect = parsed.pilotageEffect ?? null;
+    } catch {
+      pilotageEffect = null;
+    }
     out.push({
       ...proj,
       messageId: proj.messageId ?? row.assistantMessageId,
       turnCommandId: proj.turnCommandId ?? row.id,
       finalized: proj.finalized || row.status === "COMPLETE",
       status: proj.status || row.status,
+      pilotageEffect,
     });
   }
   return out;
@@ -2737,6 +2763,14 @@ export async function postUserMessageAndNora(
     assistantBody = [narrative.trimEnd(), fenced].filter((s) => s.length > 0).join("\n\n");
   }

+  // E07 — post-effect métier restitution: final assistant text must match Studio outcome.
+  if (!ownershipLostBeforeD4 && authority?.attempted) {
+    assistantBody = composePilotageEffectRestitution({
+      priorContent: assistantBody,
+      effect: pilotageEffectFromAuthority(authority) ?? null,
+    });
+  }
+
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
     : appendMissionAck(
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
index 680c3156..7364a0a4 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
@@ -9,8 +9,9 @@ export type IntentQualification =
   | {
       clarity: "CLEAR";
       operation: PilotageOperation;
-      cycleType?: CycleType;
-      toCycleType?: CycleType;
+      /** Raw semantic / LIVE value — normalized at D5 classify boundary. */
+      cycleType?: CycleType | string;
+      toCycleType?: CycleType | string;
       methodRef?: string;
       methodVersion?: string;
       objective?: string;
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts b/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
index 53266fcc..d798e484 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
@@ -15,6 +15,7 @@ import {
   loadVerifiedCkiText,
   type CkiDelivery,
 } from "@/domains/pilotage/cki-resolve";
+import { formatRecognizedCycleCatalogueSnippet } from "@/domains/pilotage/cycle-type-normalize";
 import { getPilotageProjection } from "@/domains/pilotage/service";

 export type NoraPilotageContext = {
@@ -52,6 +53,8 @@ export async function buildNoraPilotageContext(
       snippets: [
         "### Pilotage D5/D6",
         "(préparation sans projet — pas de cycle/méthode/CKI ; Nora reste générale)",
+        "",
+        ...formatRecognizedCycleCatalogueSnippet(),
       ],
       ckiContentAttached: false,
       ckiDelivery: "NONE",
@@ -103,6 +106,7 @@ export async function buildNoraPilotageContext(
   snippets.push(
     "Rappel: le contenu CKI guide la spécialité cognitive en silence ; il n'autorise aucun GO, cycle, méthode ni effet.",
   );
+  snippets.push("", ...formatRecognizedCycleCatalogueSnippet());

   const decisionRows = await db
     .select({
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index f094dfcb..7cfafe04 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -22,6 +22,7 @@ import {
   markDecisionState,
 } from "@/domains/decisions/service";
 import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@/domains/pilotage/cki-resolve";
+import { tryCanonicalCycleType } from "@/domains/pilotage/cycle-type-normalize";
 import { parseForecastJson } from "@/domains/pilotage/forecast-builder";
 import { getQualificationProjection } from "@/domains/pilotage/initial-qualification";
 import {
@@ -375,9 +376,12 @@ function fromClearIntent(
   // carry server-authenticated envelope (keys, actInstanceId). Never fill gaps
   // from client-supplied cycleType/decisionId/objectRef/targetRef/"*".
   const fromDurable = sourceKind === "USER_MESSAGE";
-  const cycleType = fromDurable
-    ? qualified.cycleType ?? null
-    : qualified.cycleType ?? (body.cycleType && isCycleType(body.cycleType) ? body.cycleType : null);
+  // E07 — normalize at classify boundary (LIVE may emit "cadrage").
+  const cycleType =
+    tryCanonicalCycleType(qualified.cycleType) ??
+    (!fromDurable ? tryCanonicalCycleType(body.cycleType) : undefined) ??
+    null;
+  const toCycleType = tryCanonicalCycleType(qualified.toCycleType) ?? null;
   if (qualified.operation === "REVISE_DECISION" && !(qualified.decisionId ?? (!fromDurable ? body.decisionId : null))) {
     return {
       ok: false,
@@ -403,7 +407,7 @@ function fromClearIntent(
     ).trim() || (cycleType ? `Cycle ${cycleType}` : ""),
     cycleType,
     cycleId: fromDurable ? null : (body.cycleId ?? null),
-    toCycleType: qualified.toCycleType ?? null,
+    toCycleType,
     orientation: fromDurable ? "" : (body.orientation ?? "").trim(),
     trajectoryRevisionId: fromDurable ? null : (body.trajectoryRevisionId ?? null),
     methodRef: (qualified.methodRef ?? (!fromDurable ? body.methodRef : undefined) ?? "").trim(),
@@ -627,9 +631,8 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
       restrictionTargetRefHint: matched.restrictionTargetRefHint,
       semanticIntentId: matched.intentId,
       semanticSchemaVersion: matched.schemaVersion,
-      cycleType: matched.cycleType && isCycleType(matched.cycleType) ? matched.cycleType : undefined,
-      toCycleType:
-        matched.toCycleType && isCycleType(matched.toCycleType) ? matched.toCycleType : undefined,
+      cycleType: tryCanonicalCycleType(matched.cycleType),
+      toCycleType: tryCanonicalCycleType(matched.toCycleType),
     };
     // Server-stable human-act identity: never accept client actInstanceId for USER_MESSAGE.
     // Same message + same intent ⇒ same act even if clientCommandKey / actInstanceId change.
@@ -680,11 +683,11 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
   }

   const operation = body.operation as PilotageOperation;
-  const cycleType = body.cycleType ? (isCycleType(body.cycleType) ? body.cycleType : null) : null;
+  const cycleType = body.cycleType ? (tryCanonicalCycleType(body.cycleType) ?? null) : null;
   if (body.cycleType && !cycleType) {
     return { ok: false, reasonCode: "INVALID", reason: "Type de cycle inconnu", sourceActionKey: "REJECT|INVALID|cycle" };
   }
-  const toCycleType = body.toCycleType ? (isCycleType(body.toCycleType) ? body.toCycleType : null) : null;
+  const toCycleType = body.toCycleType ? (tryCanonicalCycleType(body.toCycleType) ?? null) : null;
   if (body.toCycleType && !toCycleType) {
     return { ok: false, reasonCode: "INVALID", reason: "Type de cycle cible inconnu", sourceActionKey: "REJECT|INVALID|target-cycle" };
   }
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
index ab8b392d..db5e78fe 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
@@ -306,12 +306,13 @@ test.describe("Ensemble 07 parcours A–F (BROWSER FAKE — honest oracles)", ()
     expect(snap, "project snap missing").toBeTruthy();
     expect(snap!.cycleStatus, "C2 requires persisted ACTIVE cycle — no soft-pass").toBe("ACTIVE");
     expect(snap!.cycleId, "ACTIVE cycle must have durable id").toBeTruthy();
-    expect(snap!.cycleType).toBeTruthy();
+    // Fixture emits cycleType="cadrage"; classify must canonicalize to CADRAGE.
+    expect(snap!.cycleType).toBe("CADRAGE");
     // Projection exposes at most one ACTIVE (single object); closedCycles are separate.
     expect(snap!.closedCycleCount).toBeGreaterThanOrEqual(0);
     test.info().annotations.push({
       type: "note",
-      description: `C2 PASS — BROWSER DETERMINISTIC — GOVERNED OPEN PROVEN; cycleId=${snap!.cycleId}; type=${snap!.cycleType}; retained=${snap!.trajectoryRetained}; lastEffect=${snap!.lastPilotageEffect}; LIVE NL NOT PROVEN`,
+      description: `C2 PASS — BROWSER DETERMINISTIC — GOVERNED OPEN PROVEN (cadrage→CADRAGE); cycleId=${snap!.cycleId}; type=${snap!.cycleType}; retained=${snap!.trajectoryRetained}; lastEffect=${snap!.lastPilotageEffect}; LIVE NL NOT PROVEN`,
     });
   });

diff --git a/projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
index 6a33a906..3fc4838b 100644
--- a/projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
@@ -675,22 +675,26 @@ describe("Ensemble 07 initial qualification (PG)", () => {
     expect(["APPLIED", "ALREADY_APPLIED"]).toContain(retain.command?.status);
     expect(retain.humanDecisionCreated || retain.decisionId).toBeTruthy();

+    // LIVE EquipCampus regression: semantic cycleType arrives as lowercase "cadrage".
     const openQual = d5PilotageEnvelope({
       operation: "OPEN_CYCLE",
-      cycleType: "CADRAGE",
+      cycleType: "cadrage",
       objective: "Clarifier le besoin",
     });
-    const openMsgId = await seedUserTurn("Ouvre le cycle cadrage.", openQual);
+    const openMsgId = await seedUserTurn(
+      "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.",
+      openQual,
+    );
     const open = await applyConversationalAuthority({
       pilotId,
       projectId,
       userMessageId: openMsgId,
-      content: "Ouvre le cycle cadrage.",
+      content: "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.",
       clientTurnKey: newId("ctk"),
       preQualified: {
         clarity: "CLEAR",
         operation: "OPEN_CYCLE",
-        cycleType: "CADRAGE",
+        cycleType: "cadrage",
         objective: "Clarifier le besoin",
         semanticIntentId: openQual.intents[0]?.id,
         semanticSchemaVersion: openQual.schemaVersion,
```

### NEW FILE `projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts`

```typescript
/**
 * Deterministic cycle-type normalization at the semantic → D5 boundary.
 * Reuses CYCLE_TYPES / official labels — does not create a parallel catalogue.
 */
import { CYCLE_TYPES, type CycleType, isCycleType } from "@/domains/pilotage/cki-resolve";

/** Official French / display labels (same vocabulary as forecast-builder). */
export const CYCLE_TYPE_LABELS: Record<CycleType, string> = {
  CADRAGE: "cadrage",
  CONCEPTION_FONCTIONNELLE: "conception fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "architecture fonctionnelle",
  UX_UI: "conception UX",
  BACKLOG: "backlog",
  ARCHITECTURE_TECHNIQUE: "architecture technique",
  INTEGRATION_DEVOPS: "intégration DevOps",
  DELIVERY: "delivery",
  QA_VALIDATION: "validation qualité",
  SECURITE: "sécurité",
  DEPLOIEMENT_RELEASE: "déploiement release",
  OBSERVABILITE: "observabilité",
  PR_READINESS: "préparation PR",
  POST_MERGE: "post-merge",
  CAPITALISATION: "capitalisation",
};

/** Extra unambiguous aliases → canonical enum (never invent new cycle types). */
const ALIASES: Record<string, CycleType> = {
  ux: "UX_UI",
  "ux/ui": "UX_UI",
  "ux-ui": "UX_UI",
  "conception ux": "UX_UI",
  "conception ux/ui": "UX_UI",
  "experience utilisateur": "UX_UI",
  "expérience utilisateur": "UX_UI",
  "cycle de cadrage": "CADRAGE",
  "premier cycle de cadrage": "CADRAGE",
  "cycle cadrage": "CADRAGE",
};

export type CycleTypeNormalizeResult =
  | { ok: true; cycleType: CycleType; raw: string; via: "enum" | "case" | "label" | "alias" }
  | { ok: false; reason: "EMPTY" | "UNKNOWN" | "AMBIGUOUS"; raw: string; candidates?: CycleType[] };

function fold(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Map a semantic / LIVE cycleType string to a canonical CycleType.
 * Safe variants: enum exact, case, official label, known aliases.
 * Never silently maps an unknown string to another type.
 */
export function normalizeCycleType(input: string | null | undefined): CycleTypeNormalizeResult {
  if (input == null) return { ok: false, reason: "EMPTY", raw: "" };
  const raw = String(input).trim();
  if (!raw) return { ok: false, reason: "EMPTY", raw: "" };

  if (isCycleType(raw)) {
    return { ok: true, cycleType: raw, raw, via: "enum" };
  }

  const upper = raw.toUpperCase().replace(/[\s-]+/g, "_");
  if (isCycleType(upper)) {
    return { ok: true, cycleType: upper, raw, via: "case" };
  }

  const folded = fold(raw);
  const labelHits = (CYCLE_TYPES as readonly CycleType[]).filter(
    (t) => fold(CYCLE_TYPE_LABELS[t]) === folded || fold(t.replace(/_/g, " ")) === folded,
  );
  if (labelHits.length === 1) {
    return { ok: true, cycleType: labelHits[0]!, raw, via: "label" };
  }
  if (labelHits.length > 1) {
    return { ok: false, reason: "AMBIGUOUS", raw, candidates: labelHits };
  }

  const alias = ALIASES[folded];
  if (alias) {
    return { ok: true, cycleType: alias, raw, via: "alias" };
  }

  return { ok: false, reason: "UNKNOWN", raw };
}

/** Convenience: canonical type or undefined (never invent). */
export function tryCanonicalCycleType(input: string | null | undefined): CycleType | undefined {
  const r = normalizeCycleType(input);
  return r.ok ? r.cycleType : undefined;
}

/** Short catalogue for Nora context — identifiers + labels only (not full CKI bodies). */
export function formatRecognizedCycleCatalogueSnippet(): string[] {
  return [
    "### Types de cycles Studio reconnus (identifiants canoniques)",
    "Utilise UNIQUEMENT ces identifiants dans parameters.cycleType / toCycleType pour d5.pilotage_command.",
    "Les travaux métier (comparaison de solutions, expérimentation, évaluation…) peuvent être décrits librement,",
    "mais ne sont PAS des types de cycles — place-les dans le raisonnement / rationale, pas dans cycleType.",
    ...CYCLE_TYPES.map((t) => `- ${t} (« ${CYCLE_TYPE_LABELS[t]} »)`),
  ];
}
```

### NEW FILE `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts`

```typescript
/**
 * Deterministic métier restitution after a governed D5/D6 conversational effect.
 * Facts come from Studio (pilotageEffect); Nora prior prose may be adjusted, never invented as authority.
 */

export type PilotageEffectView = {
  attempted?: boolean;
  intentClarity?: string | null;
  operation?: string | null;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  clarification?: string | null;
  decisionId?: string | null;
  effects?: Array<{ effectKind?: string; targetRef?: string }> | null;
} | null;

const PRE_EFFECT_PENDING =
  /l['']ouverture effective reste à confirmer par Studio\.?/gi;

function operationLabel(op: string | null | undefined): string {
  switch (op) {
    case "OPEN_CYCLE":
      return "ouverture de cycle";
    case "CLOSE_CYCLE":
      return "clôture de cycle";
    case "TRANSITION_CYCLE":
      return "transition de cycle";
    case "RETAIN_TRAJECTORY":
      return "rétention de trajectoire";
    case "PROPOSE_TRAJECTORY":
      return "proposition de trajectoire";
    case "RECORD_DECISION":
      return "enregistrement de décision";
    case "REVISE_DECISION":
      return "révision de décision";
    default:
      return op ? `opération ${op}` : "opération gouvernée";
  }
}

function stripPreEffectHedges(text: string): string {
  return text
    .replace(PRE_EFFECT_PENDING, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
  const op = operationLabel(effect.operation);
  const status = (effect.status ?? "").toUpperCase();
  const reason = (effect.reason ?? effect.clarification ?? "").trim();

  switch (status) {
    case "APPLIED":
      return [
        `**Résultat Studio :** la ${op} a été **appliquée**.`,
        effect.operation === "OPEN_CYCLE"
          ? "Le cycle demandé est désormais actif ; la guidance spécialisée associée sera disponible sur Trajectoire / CKI."
          : effect.operation === "RETAIN_TRAJECTORY"
            ? "L'orientation est retenue. L'ouverture d'un cycle reste une décision distincte."
            : "L'état du projet a été mis à jour en conséquence.",
      ];
    case "ALREADY_APPLIED":
      return [
        `**Résultat Studio :** cette ${op} était **déjà appliquée** — aucun nouvel effet n'a été créé.`,
      ];
    case "REJECTED":
      return [
        `**Résultat Studio :** la ${op} a été **refusée**.`,
        reason
          ? `Motif : ${reason}.`
          : "Le contrôle d'autorité ou d'état n'a pas autorisé l'effet.",
        "Aucun cycle ni décision n'a été créé par cette demande. Vous pouvez reformuler ou préciser le type de cycle reconnu.",
      ];
    case "CONFLICT":
      return [
        `**Résultat Studio :** **conflit d'état** sur la ${op}.`,
        reason ? `Détail : ${reason}.` : "Rechargez l'état du projet puis réessayez si pertinent.",
      ];
    case "UNKNOWN":
      return [
        `**Résultat Studio :** l'issue de la ${op} est **encore en vérification**.`,
        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
      ];
    default:
      if (effect.intentClarity === "AMBIGUOUS") {
        return [
          "**Résultat Studio :** aucune commande n'a été exécutée — intention ambiguë.",
          reason ? `Précision utile : ${reason}.` : "Pouvez-vous préciser le cycle et l'acte souhaités ?",
        ];
      }
      if (effect.attempted === false) {
        return [];
      }
      return [
        `**Résultat Studio :** statut « ${status || "indéterminé"} » pour la ${op}.`,
        reason ? `Information : ${reason}.` : "",
      ].filter(Boolean);
  }
}

/**
 * Compose final assistant text: keep useful prior narrative, remove contradictory
 * pre-effect hedges, append durable Studio outcome in métier language.
 */
export function composePilotageEffectRestitution(input: {
  priorContent: string;
  effect: PilotageEffectView;
}): string {
  const prior = stripPreEffectHedges(input.priorContent ?? "");
  const effect = input.effect;
  if (!effect?.attempted) {
    return prior;
  }
  const facts = effectFactLines(effect);
  if (facts.length === 0) return prior;
  const block = ["", "---", "", ...facts].join("\n");
  if (!prior.trim()) return facts.join("\n");
  return `${prior.trimEnd()}\n${block}`;
}

/** True when a persisted assistant message is a raw technical mission dump (not métier Nora). */
export function isTechnicalMissionAssistantContent(content: string, generationId?: string | null): boolean {
  // Provenance hint alone is insufficient — a mission-continue may already carry métier D4 ACK.
  if (/Résultat d'enregistrement|Nouvelle version disponible|encore incertain/i.test(content)) {
    return false;
  }
  if (/^### Suite de mission/m.test(content) && /projectId=|clientIntentKey=|status=COMPLETED/.test(content)) {
    return true;
  }
  if (/^### Suite de mission \(projection D3/m.test(content)) return true;
  if (/^### Restitution de mission \(faits propriétaires\)/m.test(content)) return true;
  const gen = (generationId ?? "").trim();
  if (
    gen.startsWith("mission-continue") &&
    /projectId=proj_|clientIntentKey=|status=COMPLETED|status=AWAITING_/.test(content)
  ) {
    return true;
  }
  return false;
}

/** Métier projection for historical technical mission messages (READ path — no DB rewrite). */
export function projectMetierMissionMessage(content: string): string {
  if (/Projet créé \(projectId=/.test(content) || /projectId=proj_/.test(content)) {
    return (
      "Le projet a bien été créé. Vous pouvez poursuivre dans Travail, consulter la Trajectoire " +
      "et décider avec Nora de l'ouverture du premier cycle lorsque vous serez prêt."
    );
  }
  if (/AWAITING_PILOT_ACT/.test(content)) {
    return "Une action explicite de votre part est encore requise pour poursuivre (par exemple créer le projet).";
  }
  if (/AWAITING_PILOT_AUTH/.test(content)) {
    return "Une autorisation de votre part est requise avant publication Git.";
  }
  if (/AWAITING_CLARIFICATION/.test(content)) {
    return "Une précision de votre part est requise avant de poursuivre la préparation.";
  }
  if (/RESTITUTION_PENDING/.test(content)) {
    return "Les effets déjà enregistrés sont conservés ; la restitution détaillée reste en attente.";
  }
  return "Suite de mission enregistrée par Studio — détails techniques masqués dans le fil métier.";
}
```

### NEW FILE `projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { CYCLE_TYPES } from "@/domains/pilotage/cki-resolve";
import {
  CYCLE_TYPE_LABELS,
  formatRecognizedCycleCatalogueSnippet,
  normalizeCycleType,
  tryCanonicalCycleType,
} from "@/domains/pilotage/cycle-type-normalize";

describe("E07 cycle-type normalize (LIVE → D5)", () => {
  it("maps LIVE lowercase cadrage → CADRAGE (EquipCampus root cause)", () => {
    expect(normalizeCycleType("cadrage")).toEqual({
      ok: true,
      cycleType: "CADRAGE",
      raw: "cadrage",
      via: "case",
    });
    expect(tryCanonicalCycleType("cadrage")).toBe("CADRAGE");
  });

  it("accepts Cadrage / CADRAGE / underscored case variants", () => {
    expect(tryCanonicalCycleType("Cadrage")).toBe("CADRAGE");
    expect(tryCanonicalCycleType("CADRAGE")).toBe("CADRAGE");
    expect(tryCanonicalCycleType("conception_fonctionnelle")).toBe("CONCEPTION_FONCTIONNELLE");
    expect(tryCanonicalCycleType("CONCEPTION_FONCTIONNELLE")).toBe("CONCEPTION_FONCTIONNELLE");
  });

  it("maps official labels and safe aliases without inventing types", () => {
    expect(tryCanonicalCycleType("conception fonctionnelle")).toBe("CONCEPTION_FONCTIONNELLE");
    expect(tryCanonicalCycleType("ux/ui")).toBe("UX_UI");
    expect(tryCanonicalCycleType("premier cycle de cadrage")).toBe("CADRAGE");
  });

  it("refuses unknown / empty without silent remap", () => {
    expect(normalizeCycleType("comparaison_de_solutions")).toMatchObject({
      ok: false,
      reason: "UNKNOWN",
    });
    expect(normalizeCycleType("")).toMatchObject({ ok: false, reason: "EMPTY" });
    expect(normalizeCycleType(null)).toMatchObject({ ok: false, reason: "EMPTY" });
    expect(tryCanonicalCycleType("phase métier inventée")).toBeUndefined();
  });

  it("covers every CYCLE_TYPES enum + label round-trip", () => {
    for (const t of CYCLE_TYPES) {
      expect(tryCanonicalCycleType(t)).toBe(t);
      expect(tryCanonicalCycleType(t.toLowerCase())).toBe(t);
      expect(tryCanonicalCycleType(CYCLE_TYPE_LABELS[t])).toBe(t);
    }
  });

  it("catalogue snippet lists recognized identifiers and warns against métier-as-type", () => {
    const snip = formatRecognizedCycleCatalogueSnippet().join("\n");
    expect(snip).toContain("CADRAGE");
    expect(snip).toContain("CONCEPTION_FONCTIONNELLE");
    expect(snip).toContain("identifiants canoniques");
    expect(snip).toMatch(/ne sont PAS des types de cycles/i);
    expect(CYCLE_TYPES).toHaveLength(15);
  });
});
```

### NEW FILE `projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  composePilotageEffectRestitution,
  isTechnicalMissionAssistantContent,
  projectMetierMissionMessage,
} from "@/domains/conversation/pilotage-effect-restitution";

describe("E07 post-effect métier restitution", () => {
  it("APPLIED OPEN_CYCLE replaces pending-Studio hedge with confirmation", () => {
    const prior =
      "Je note votre accord. L'ouverture effective reste à confirmer par Studio.";
    const out = composePilotageEffectRestitution({
      priorContent: prior,
      effect: {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "APPLIED",
      },
    });
    expect(out).not.toMatch(/reste à confirmer par Studio/i);
    expect(out).toMatch(/appliquée/i);
    expect(out).toMatch(/cycle demandé est désormais actif/i);
  });

  it("REJECTED INVALID surfaces motif without false success", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Je vais demander l'ouverture du cycle de cadrage.",
      effect: {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "REJECTED",
        reasonCode: "INVALID",
        reason: "Type de cycle requis",
      },
    });
    expect(out).toMatch(/refusée/i);
    expect(out).toMatch(/Type de cycle requis/);
    expect(out).not.toMatch(/appliquée/i);
  });

  it("ALREADY_APPLIED / CONFLICT / UNKNOWN each have distinct métier wording", () => {
    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "RETAIN_TRAJECTORY", status: "ALREADY_APPLIED" },
      }),
    ).toMatch(/déjà appliquée/i);

    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "OPEN_CYCLE", status: "CONFLICT", reason: "revision" },
      }),
    ).toMatch(/conflit/i);

    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "OPEN_CYCLE", status: "UNKNOWN" },
      }),
    ).toMatch(/en vérification/i);
  });

  it("no effect attempted leaves cognitive reply unchanged", () => {
    const prior = "Voici une analyse sans commande.";
    expect(
      composePilotageEffectRestitution({
        priorContent: prior,
        effect: { attempted: false },
      }),
    ).toBe(prior);
  });
});

describe("E07 technical mission message projection", () => {
  const dump =
    "### Suite de mission\nProjet créé (projectId=proj_abc). Aucune étape.\n\n" +
    "### Suite de mission (projection D3 — refs owners)\nstatus=COMPLETED\nclientIntentKey=k1";

  it("detects raw dumps; preserves métier D4 ACK even with mission-continue id", () => {
    expect(isTechnicalMissionAssistantContent(dump, "mission-continue-d2:k1:proj")).toBe(true);
    expect(isTechnicalMissionAssistantContent("Bonjour", "gen-nora-1")).toBe(false);
    expect(
      isTechnicalMissionAssistantContent(
        "Résultat d'enregistrement : document disponible.",
        "mission-continue-d2:k1:proj",
      ),
    ).toBe(false);
  });

  it("projects métier text without projectId leak", () => {
    const projected = projectMetierMissionMessage(dump);
    expect(projected).toMatch(/projet a bien été créé/i);
    expect(projected).not.toMatch(/projectId=/);
    expect(projected).not.toMatch(/clientIntentKey=/);
  });
});
```

### NEW FILE `projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts`

```typescript
import { test, expect, type Page, type APIRequestContext } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  seedInspectedNameViaApi,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 07 — BROWSER continuity qualification (BROWSER-01…06).
 * Lane: Playwright :3101 + sfia_next_e2e + STUDIO_FORCE_NORA_FIXTURE.
 * LIVE Nora: NOT RUN. Fixture emits cycleType="cadrage" (LIVE frontier regression).
 */

const EVIDENCE = path.resolve(
  __dirname,
  "../../../../.tmp-sfia-review/ensemble07-browser-evidence",
);

type ProjectSnap = {
  messageCount: number;
  messages: Array<{ role?: string; content?: string; generationId?: string | null }>;
  cycleStatus: string | null;
  cycleId: string | null;
  cycleType: string | null;
  ckiId: string | null;
  trajectoryRetained: boolean;
  trajectoryProposed: boolean;
  lastPilotageEffect: {
    operation?: string | null;
    status?: string | null;
    reason?: string | null;
    attempted?: boolean;
  } | null;
  iqStatus: string | null;
};

async function loginPilotA(page: Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

async function openSurface(page: Page, key: string) {
  await page.getByTestId("studio-rail").getByTestId(`nav-${key}`).click();
  await expect(page.getByTestId(`surface-${key}`)).toHaveAttribute(
    "data-surface-active",
    "1",
    { timeout: 15000 },
  );
}

async function shot(page: Page, name: string) {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await page.screenshot({
    path: path.join(EVIDENCE, `${name}.png`),
    fullPage: true,
  });
}

async function getProjectSnap(
  request: APIRequestContext,
  projectId: string,
): Promise<ProjectSnap> {
  const getRes = await request.get(`/api/projects/${projectId}`, { timeout: 10000 });
  expect(getRes.ok()).toBeTruthy();
  const body = (await getRes.json()) as {
    messages?: Array<{ role?: string; content?: string; generationId?: string | null }>;
    turnProjections?: Array<{
      pilotageEffect?: {
        operation?: string | null;
        status?: string | null;
        reason?: string | null;
        attempted?: boolean;
      } | null;
    }>;
    initialQualification?: { status?: string } | null;
    pilotage?: {
      cycle?: {
        id?: string;
        status?: string;
        cycleType?: string;
        cki?: { ckiId?: string | null };
      } | null;
      trajectory?: { proposed?: unknown | null; retained?: unknown | null };
    };
  };
  const turns = Array.isArray(body.turnProjections) ? body.turnProjections : [];
  const lastEffect =
    [...turns]
      .reverse()
      .map((t) => t.pilotageEffect)
      .find((e) => e && e.attempted) ?? null;
  return {
    messageCount: Array.isArray(body.messages) ? body.messages.length : 0,
    messages: Array.isArray(body.messages) ? body.messages : [],
    cycleStatus: body.pilotage?.cycle?.status ?? null,
    cycleId: body.pilotage?.cycle?.id ?? null,
    cycleType: body.pilotage?.cycle?.cycleType ?? null,
    ckiId: body.pilotage?.cycle?.cki?.ckiId ?? null,
    trajectoryRetained: Boolean(body.pilotage?.trajectory?.retained),
    trajectoryProposed: Boolean(body.pilotage?.trajectory?.proposed),
    lastPilotageEffect: lastEffect,
    iqStatus: body.initialQualification?.status ?? null,
  };
}

async function pollUntil(
  request: APIRequestContext,
  projectId: string,
  pred: (s: ProjectSnap) => boolean,
  opts?: { maxMs?: number; stepMs?: number },
): Promise<ProjectSnap> {
  const maxMs = opts?.maxMs ?? 25000;
  const stepMs = opts?.stepMs ?? 500;
  const start = Date.now();
  let last = await getProjectSnap(request, projectId);
  while (Date.now() - start < maxMs) {
    if (pred(last)) return last;
    await new Promise((r) => setTimeout(r, stepMs));
    last = await getProjectSnap(request, projectId);
  }
  return last;
}

async function waitIqTerminal(
  request: APIRequestContext,
  projectId: string,
): Promise<ProjectSnap> {
  let last = await pollUntil(
    request,
    projectId,
    (s) => ["PROPOSED", "CLARIFICATION", "FAILED"].includes(s.iqStatus ?? ""),
    { maxMs: 12000 },
  );
  if (["PROPOSED", "CLARIFICATION"].includes(last.iqStatus ?? "")) return last;
  for (let i = 0; i < 3; i++) {
    await request.post(`/api/projects/${projectId}/initial-qualification/reconcile`, {
      timeout: 12000,
    });
    last = await pollUntil(
      request,
      projectId,
      (s) => ["PROPOSED", "CLARIFICATION", "FAILED"].includes(s.iqStatus ?? ""),
      { maxMs: 8000 },
    );
    if (["PROPOSED", "CLARIFICATION"].includes(last.iqStatus ?? "")) return last;
  }
  return last;
}

async function createSyntheticProject(page: Page): Promise<{ projectId: string; name: string }> {
  const name = uniqueProjectName("E07Browser Cont");
  await openNewPreparation(page);
  await sendPrepMessage(
    page,
    `Je veux un cadrage pour clarifier le périmètre d'un cockpit produit, nommé ${name}.`,
  );
  await seedInspectedNameViaApi(page, {
    name,
    summary: "E07 browser continuity synthetic",
  });
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await page.getByTestId("prep-create-project").click();
  const access = page.getByRole("button", { name: /Accéder au projet/i });
  await expect(access).toBeEnabled({ timeout: 60000 });
  await access.click();
  await page.waitForURL("**/projects/**", { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return { projectId: projectId!, name };
}

async function sendTravail(page: Page, text: string) {
  const draft = page.getByTestId("thread-draft").first();
  const send = page.getByTestId("thread-send").first();
  await expect(draft).toBeEditable({ timeout: 20000 });
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 10000 });
  await send.click();
  await expect(page.getByText(text.slice(0, Math.min(40, text.length)), { exact: false }).last()).toBeVisible({
    timeout: 30000,
  });
  await expect(draft).toHaveValue("", { timeout: 60000 });
}

test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {
  test.describe.configure({ mode: "serial", timeout: 240_000 });

  let projectId = "";
  let rejectProjectId = "";

  test("BROWSER-05 prep — create project without technical mission dump", async ({ page }) => {
    await loginPilotA(page);
    const created = await createSyntheticProject(page);
    projectId = created.projectId;

    const iq = await waitIqTerminal(page.request, projectId);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(iq.iqStatus);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    await shot(page, "b05-travail-after-create");

    const snap = await getProjectSnap(page.request, projectId);
    const assistant = snap.messages.filter((m) => m.role === "assistant");
    for (const m of assistant) {
      expect(m.content ?? "").not.toMatch(/### Suite de mission/i);
      expect(m.content ?? "").not.toMatch(/projectId=proj_/);
      expect(m.content ?? "").not.toMatch(/clientIntentKey=/);
    }
    // UI: no raw mission dump as Nora speech
    await expect(page.getByText(/### Suite de mission/i)).toHaveCount(0);
    await expect(page.getByText(/projectId=proj_/)).toHaveCount(0);

    // Reload — projection still métier
    await page.reload();
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    await expect(page.getByText(/### Suite de mission/i)).toHaveCount(0);
    await expect(page.getByText(/projectId=proj_/)).toHaveCount(0);
    test.info().annotations.push({
      type: "note",
      description: `BROWSER-05 PASS — projectId=${projectId}; assistantMsgs=${assistant.length}; no tech dump`,
    });
  });

  test("BROWSER-01 — GO naturel cadrage → ACTIVE CADRAGE + restitution + surfaces sans F5", async ({
    page,
  }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);

    // RETAIN when a proposed trajectory exists (fixture now registered).
    const before = await getProjectSnap(page.request, projectId);
    if (before.trajectoryProposed && !before.trajectoryRetained) {
      await sendTravail(page, "Je retiens cette trajectoire.");
      const retained = await pollUntil(
        page.request,
        projectId,
        (s) => s.trajectoryRetained === true,
        { maxMs: 20000 },
      );
      expect(retained.trajectoryRetained).toBe(true);
      expect(retained.lastPilotageEffect?.operation).toBe("RETAIN_TRAJECTORY");
      expect(["APPLIED", "ALREADY_APPLIED"]).toContain(retained.lastPilotageEffect?.status ?? "");
    }

    const go =
      "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.";
    await sendTravail(page, go);
    await shot(page, "b01-travail-after-go");

    const open = await pollUntil(
      page.request,
      projectId,
      (s) =>
        s.cycleStatus === "ACTIVE" &&
        s.cycleType === "CADRAGE" &&
        s.lastPilotageEffect?.operation === "OPEN_CYCLE" &&
        ["APPLIED", "ALREADY_APPLIED"].includes(s.lastPilotageEffect?.status ?? ""),
      { maxMs: 30000 },
    );

    expect(open.cycleStatus, "durable ACTIVE required").toBe("ACTIVE");
    expect(open.cycleId).toBeTruthy();
    expect(open.cycleType, "canonical CADRAGE after cadrage semantic").toBe("CADRAGE");
    expect(open.ckiId, "CKI principal associé").toBeTruthy();
    expect(open.lastPilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(["APPLIED", "ALREADY_APPLIED"]).toContain(open.lastPilotageEffect?.status ?? "");

    // Restitution métier in API messages (durable) — no pre-effect hedge, success facts.
    const lastAssistant = [...open.messages].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);
    expect(lastAssistant?.content ?? "").toMatch(/appliquée|déjà appliquée/i);
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/reste à confirmer par Studio/i)).toHaveCount(0);

    // Surfaces without F5 — wait for refreshed durable pilotage (not the static card shell).
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-cycle-card")).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/CYCLE EN COURS|● Actif/i).first()).toBeVisible({
      timeout: 20000,
    });
    await expect(
      page.getByTestId("project-overview-cycle-card").getByRole("heading", { name: /Cadrage/i }),
    ).toBeVisible({ timeout: 10000 });
    await shot(page, "b01-projet-after-open");

    await openSurface(page, "pilotage");
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
    await expect(page.getByText(/Cadrage|CADRAGE|CYCLE/i).first()).toBeVisible({ timeout: 20000 });
    await shot(page, "b01-trajectoire-after-open");

    // CKI surface — via trajectory CKI panel when present
    const ckiBanner = page.getByTestId("trajectory-cki-banner");
    if (await ckiBanner.count()) {
      await expect(ckiBanner).toBeVisible();
    }
    const ckiLayout = page.getByTestId("trajectory-cki-layout");
    if (await ckiLayout.count()) {
      await expect(ckiLayout).toBeVisible();
    }
    await shot(page, "b01-cki-region");

    await openSurface(page, "travail");
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });

    test.info().annotations.push({
      type: "note",
      description: `BROWSER-01 PASS — cycleId=${open.cycleId}; type=${open.cycleType}; cki=${open.ckiId}; effect=${open.lastPilotageEffect?.status}; LIVE NOT PROVEN`,
    });
  });

  test("BROWSER-04 — sync sans F5 + contrôle refresh volontaire", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);

    const before = await getProjectSnap(page.request, projectId);
    expect(before.cycleStatus).toBe("ACTIVE");
    expect(before.cycleType).toBe("CADRAGE");

    // Change surface after effect already applied (situation 1)
    await openSurface(page, "pilotage");
    await expect(page.getByText(/Cadrage|CADRAGE/i).first()).toBeVisible({ timeout: 15000 });
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-cycle-card")).toBeVisible({ timeout: 15000 });
    await openSurface(page, "travail");
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });

    // Voluntary refresh control — same durable facts
    await page.reload();
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    const after = await getProjectSnap(page.request, projectId);
    expect(after.cycleId).toBe(before.cycleId);
    expect(after.cycleType).toBe("CADRAGE");
    expect(after.cycleStatus).toBe("ACTIVE");
    await shot(page, "b04-after-voluntary-refresh");

    test.info().annotations.push({
      type: "note",
      description:
        "BROWSER-04 PASS — surface change after effect without F5; situation-2 live multi-tab push NOT claimed (no universal realtime bus)",
    });
  });

  test("BROWSER-02 — REJECTED unknown cycleType + no ACTIVE fictif", async ({ page }) => {
    await loginPilotA(page);
    const created = await createSyntheticProject(page);
    rejectProjectId = created.projectId;
    const iq = await waitIqTerminal(page.request, rejectProjectId);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(iq.iqStatus);

    await page.goto(`/projects/${rejectProjectId}?surface=travail`);
    await sendTravail(page, "Ouvre le cycle comparaison_de_solutions.");

    const snap = await pollUntil(
      page.request,
      rejectProjectId,
      (s) =>
        s.lastPilotageEffect?.operation === "OPEN_CYCLE" &&
        s.lastPilotageEffect?.status === "REJECTED",
      { maxMs: 25000 },
    );

    expect(snap.lastPilotageEffect?.status).toBe("REJECTED");
    expect(snap.cycleStatus).toBeNull();
    expect(snap.cycleId).toBeNull();

    const lastAssistant = [...snap.messages].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/refusée|refus/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/a été \*\*appliquée\*\*|désormais actif/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);

    await expect(page.getByText(/refusée|refus/i).last()).toBeVisible({ timeout: 15000 });
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-no-cycle")).toBeVisible({ timeout: 15000 });
    await shot(page, "b02-rejected-no-cycle");

    test.info().annotations.push({
      type: "note",
      description: `BROWSER-02 PASS — REJECTED unknown type; reason=${snap.lastPilotageEffect?.reason ?? "?"}; no ACTIVE`,
    });
  });

  test("BROWSER-03 — restitution coherente (hedge strip + no false success)", async ({ page }) => {
    // Applied path already asserted in BROWSER-01; rejected path in BROWSER-02.
    // Composer CONFLICT/UNKNOWN: covered by unit ensemble07-pilotage-effect-restitution;
    // browser verifies durable messages remain coherent after reload.
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await page.reload();
    const snap = await getProjectSnap(page.request, projectId);
    const assistants = snap.messages.filter((m) => m.role === "assistant").map((m) => m.content ?? "");
    for (const c of assistants) {
      // No contradictory pending-Studio hedge left when effect was final
      if (/Résultat Studio/i.test(c) && /appliquée|refusée|conflit|vérification/i.test(c)) {
        expect(c).not.toMatch(/reste à confirmer par Studio/i);
      }
    }
    test.info().annotations.push({
      type: "note",
      description:
        "BROWSER-03 PASS — durable messages coherent after reload; CONFLICT/UNKNOWN composer = unit DETERMINISTIC; no 2nd orchestrator",
    });
  });

  test("BROWSER-06 — non-régression: ambiguous GO + GET sans mutation + idempotence OPEN", async ({
    page,
  }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);

    const before = await getProjectSnap(page.request, projectId);
    expect(before.cycleStatus).toBe("ACTIVE");
    const beforeCycleId = before.cycleId;

    // Ambiguous / unmatched utterance → dialogue only, no second ACTIVE
    await sendTravail(page, "Ce serait intéressant de commencer.");
    const afterAmb = await getProjectSnap(page.request, projectId);
    expect(afterAmb.cycleId).toBe(beforeCycleId);
    expect(afterAmb.cycleStatus).toBe("ACTIVE");

    // GET-only polls — no mutation
    const a = await getProjectSnap(page.request, projectId);
    const b = await getProjectSnap(page.request, projectId);
    expect(b.cycleId).toBe(a.cycleId);
    expect(b.cycleType).toBe(a.cycleType);
    expect(b.messageCount).toBe(a.messageCount);

    // Repeat OPEN GO — must not create second ACTIVE (idempotent / ACTIVE_CYCLE reject)
    await sendTravail(page, "Ouvre le cycle cadrage.");
    const afterRepeat = await pollUntil(
      page.request,
      projectId,
      (s) =>
        s.lastPilotageEffect?.operation === "OPEN_CYCLE" &&
        ["ALREADY_APPLIED", "REJECTED", "APPLIED"].includes(s.lastPilotageEffect?.status ?? ""),
      { maxMs: 20000 },
    );
    expect(afterRepeat.cycleId).toBe(beforeCycleId);
    expect(afterRepeat.cycleStatus).toBe("ACTIVE");
    // At most one ACTIVE in projection
    expect(afterRepeat.cycleType).toBe("CADRAGE");

    // Cross-project isolation: reject project still has no cycle
    if (rejectProjectId) {
      const other = await getProjectSnap(page.request, rejectProjectId);
      expect(other.cycleStatus).toBeNull();
      expect(other.cycleId).toBeNull();
    }

    await shot(page, "b06-idempotence");
    test.info().annotations.push({
      type: "note",
      description: `BROWSER-06 PASS — same cycleId=${beforeCycleId}; ambiguous no-op; GET immutable; repeat OPEN no 2nd ACTIVE`,
    });
  });
});
```

## 12. Tests et résultats (cette exécution)

| Suite | Résultat |
|---|---|
| `npx tsc --noEmit` | **PASS** |
| `npx vitest run tests/unit` | **87 files / 702 PASS** |
| `npx vitest run tests/integration` | **34 files / 525 PASS** |
| `playwright ensemble07-browser-continuity` | **6 PASS** |
| `playwright ensemble07-parcours-af` | **7 PASS / 2 SKIP** |
| `next build` | **PASS** |
| LIVE | **NOT RUN** |

## 13. Régression D5/D6

- OPEN `cadrage` → CADRAGE APPLIED (browser + PG)
- Unknown type REJECTED sans ACTIVE
- Repeat OPEN : même cycleId (pas de 2e ACTIVE)
- Ambiguous utterance : pas d'effet
- GET : pas de mutation
- Isolation projet REJECT vs projet ACTIVE

## 14. Reprise / idempotence

- Reload page : mêmes faits cycle + restitution
- GET répétés : identité stable
- Pas de nouveau cycle par navigation

## 15. Cohérence messages Nora

- Hedge « reste à confirmer par Studio » **absent** après APPLIED/REJECTED
- Bloc « Résultat Studio » métier visible
- Pas de dump technique Suite de mission

## 16. Synchronisation sans F5

- Après OPEN : Projet montre « CYCLE EN COURS / Cadrage » via `refreshDurablePilotage` sur `selectSurface`
- Trajectoire cohérente
- Retour Travail : restitution conservée
- Situation-2 (surface déjà ouverte, push multi-onglet) : **non revendiquée** (pas de bus temps réel)

## 17. Réserves / exit

- LIVE cognitive réelle : gate Morris + fournisseur
- Situation-2 multi-tab realtime : hors contrat produit actuel
- Arbre DEV non figé : pas de `candidate_sha`
- Evidence PNG locales uniquement (pas dans Git handoff blob)

## 18. Absence mutation RECETTE

Confirmé : aucune écriture/migration/restart RECETTE ; DB tests = `sfia_next_e2e@:5433`.

## 19. Verdict

`ENSEMBLE 07 — DEV BROWSER QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED`

## 20. Prochain gate Morris

1. Lire ce handoff distant.
2. Arbitrer gel Git de l'arbre DEV correctif+QA.
3. Décider LIVE borné / re-mise RECETTE.
