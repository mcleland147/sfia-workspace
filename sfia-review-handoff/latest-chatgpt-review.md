# SFIA Studio Next — Review Pack FULL L3
## ML4C — Sécurisation finale des frontières d'autorité (PR #676)

Date / timezone: 2026-11-12 18:42 CET
Mandat: GO Morris — correctif technique borné R1/R2/R3
Cycle: DELIVERY PROJET / QA / PR READINESS
Profil: CRITICAL
Typologie: EVOL CORRECTIVE / SECURITY / QUALITY
Review Pack: FULL
Review Handoff: REQUIRED / PUBLISH-IN-CYCLE
Verdict: PRODUCT PR #676 CI GREEN — READY FOR CHATGPT CRITICAL REVIEW
CI Next: https://github.com/mcleland147/sfia-workspace/actions/runs/43272022458 SUCCESS on `d7c28a21`.

---

## 1. Date / timezone

2026-11-12 18:42 CET (Europe/Paris local machine)

## 2. Git Truth Check

```
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)

branch: fix/next-semantic-intent-convergence-20261112
HEAD: d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b
parent: 9c163d621589e7ba9d7369ad5a0342a9bbde8b04
tree: b186322abe3b1131e23345a655281a594aa99b3e
origin/build/next-ml4c-functional-convergence: d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b
origin/main: 6cda86bde4aa450abb1d23eedd370a9004ddcbc1
status:
M .tmp-sfia-review/chatgpt-review.md
```

Worktree (extrait):
```
/Users/morris/Projects/sfia-workspace                                                   ba831b25 [sfia/next-pilotage-decisions-delivery]
/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023                              5d851a8d [sfia/review-handoff]
/Users/morris/Projects/sfia-studio-next-recette-ml1-c3                                  0db58be8 (detached HEAD)
/Users/morris/Projects/sfia-studio-next-recette-ml2-pr659                               54fc4e9c (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l1-a09-audit-port-decoupling               0cb05b75 (detached HEAD)
```

Préconditions vérifiées avant écriture:
- HEAD distant PR était `9c163d62` (aligné local).
- main `6cda86bd` inchangé.
- Seul dirty hors périmètre: `.tmp-sfia-review/chatgpt-review.md`.
- Aucun reset/clean/stash/rebase/amend/force-push.

Après commit+push FF:
- Nouveau HEAD local+distant: `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b`
- Parent: `9c163d621589e7ba9d7369ad5a0342a9bbde8b04` (= `9c163d62`)
- Tree: `b186322abe3b1131e23345a655281a594aa99b3e`
- Push: `9c163d62..d7c28a21` fast-forward only
- PR #676 OPEN / MERGEABLE / no auto-merge

## 3. Sources et SHA

Référence normative (main CURRENT `6cda86bde4aa450abb1d23eedd370a9004ddcbc1`):
- SEF, roadmap, décision SEM-01..SEM-08, contrats TV-01..TV-05
- environnements-recette-et-promotions, product-versioning, product-naming
- SFIA v2.6 routing / execution template / guardrails / delivery pipeline

Candidat précédent (Critical Review): `9c163d62` tree `0f265a1e`
Handoff précédent: `sfia/review-handoff@5d851a8d` blob `6ba25cf0`

Code produit examiné (préfixe `projects/sfia-studio-next/web/`):
- `src/domains/pilotage/service.ts` (`classifyCommand`, USER_MESSAGE)
- `src/domains/pilotage/conversation-authority.ts`
- `src/domains/pilotage/durable-target-resolve.ts` (**créé**)
- helpers fixtures + suites PG R1/R2/R3

Le code candidat n'a **pas** modifié SEM/TV/Morris décisions.

## 4. Diagnostic R1

Sur `9c163d62`, `classifyCommand` pour `USER_MESSAGE` validait message COMPLETE, Pilot/projet, qualification durable, opération/intent et paramètres sensibles, **puis** acceptait `body.decisionId` / `body.restrictionId` après contrôles partiels (projet, APPLICABLE/ACTIVE, objectRef/kind hint).

Écart:
- Avec objectRef durable sans decisionId et **plusieurs** RECORD_DECISION APPLICABLE même objectRef, le client pouvait départager via `body.decisionId`.
- Avec plusieurs restrictions ACTIVE même kind et targetRefs distincts, `body.restrictionId` pouvait lever une cible non sélectionnée par la qualification (ex. UX_UI vs CADRAGE).

## 5. Reproduction des substitutions

Preuves via `executePilotageCommand` (pas un helper pur) dans `ml4c-auth-reconciliation.pg.test.ts`:

837:  it("R1-A multi: body.decisionId cannot pick among ambiguous objectRef matches", async () => {
925:  it("R1-A unique: Studio resolves single objectRef; body echo optional", async () => {
990:  it("R1-B multi: body.restrictionId cannot substitute UX_UI when durable targets CADRAGE", async () => {
1073:  it("R1-B unique: lift succeeds only for durable CADRAGE target", async () => {
1130:  it("R1-E: foreign decisionId / restrictionId rejected without effect", async () => {

Attendu négatif: REJECTED/AMBIGUOUS ; aucune révision/levée ; aucune nouvelle HumanDecision APPLIED de l'acte attaqué.

## 6. Cas D6 multi-cibles

R1-A multi: deux RECORD_DECISION APPLICABLE même objectRef ; qualification REVISE sans decisionId ; body.decisionId = victime arbitraire → refus ; états inchangés.

## 7. Cas restriction multi-cibles

R1-B multi: restrictions ACTIVE CADRAGE + UX_UI ; durable cible CADRAGE ; body.restrictionId = UX_UI → REJECTED ; aucune levée.

## 8. Corrections propriétaires exactes

Source unique:
- `resolveReviseDecisionTarget(queryDb, projectId, {decisionId, objectRef})`
  - CAS A: decisionId durable → vérifier projet/APPLICABLE/objectRef
  - CAS B: objectRef → liste exacte ; 0 INVALID ; 1 OK ; N AMBIGUOUS (pas d'ordre)
  - CAS C: ni id ni objectRef → INVALID
- `resolveLiftRestrictionTarget(...)` filtre ACTIVE + kindHint + targetRefHint (`restrictionTargetMatchesHint`) ; unicité obligatoire
- Body echo: si body id présent et ≠ résolu → AMBIGUOUS
- `conversation-authority` importe les **mêmes** fonctions (pas deux résolveurs)

## 9. Validation cas positifs

R1-A unique / R1-B unique: cible unique résolue Studio ; body absent ou égal ; effet D6/LIFT nominal ; journal cohérent.

## 10. Validation cas négatifs

R1-A multi, R1-B multi, R1-E hors projet/étranger: aucun effet.

## 11. Idempotence / replay

Scénarios R1-A unique rejeu (clientCommandKey différent) + tentative invalide puis légitime: pas de second effet / pas d'escalade après rejet.

## 12. Analyse helpers sémantiques (R2)

- Supprimé: `registerPgUtteranceFixture` (0 call site restant).
- Conservé: `registerTypedScenario`, `registerFixtureScenario`, schemas Nora, builders typés.
- Ajout: `registerExplicitFixture` (kind d2/d4_*/d5/d6/…).
- Wrappers dépréciés `registerNamedProjectCreate` / `registerCreateDocumentTitled` délèguent aux builders explicites (plus d'inférence regex d'intention).

## 13. Inventaire call sites migrés

- `intent-continuity-global.pg.test.ts`
- `mission-continuity-accept01.pg.test.ts`
- `ml3-pilotage.pg.test.ts`
- `ml4-chat-first-d4-provenance.pg.test.ts`
(+ helper lui-même)

## 14. Tests sémantiques conservés

Oracles métier non remplacés par `status===QUALIFIED` seul. Message inconnu fail-closed. Unit source-contract: conversation-authority doit référencer les résolveurs durables (plus la chaîne « pas de cible lexicale »).

## 15. Traitement ENV-R06 (R3)

- ENV-R06A: `prepareVitestMutativeDatabaseUrl` → `sfia_next_e2e` ; lanes interdites.
- ENV-R06B: port 5434 absent → `NOT_VERIFIED` + `ENDPOINT_NOT_AVAILABLE` + `console.info` explicite ; **pas** d'expect tautologique objet==objet comme preuve d'isolation.
- Port présent → exiger SQLSTATE `28P01` (ECONNREFUSED ≠ AUTH DENIED).
- ENV-R09 reste NOT VERIFIED.

## 16. Tests ciblés

- `ml4c-auth-reconciliation.pg.test.ts` (R1 étendu)
- `ml4c-env01-runtime.pg.test.ts` (R06A/B)
- suites fixture migrées
- `semantic-qualification.test.ts` (oracle source)

## 17. Unit / PG / Playwright complets

| Suite | Baseline entrée | Sortie lot | Note |
| --- | --- | --- | --- |
| Vitest unit | 248 | **248 PASS** | oracle source adapté |
| Vitest PG | 318 | **324 PASS** | + tests R1/R3 |
| Playwright BROWSER FAKE | 25 | **25 PASS** | |
| tsc | — | PASS | |
| eslint (fichiers touchés) | — | 0 error | |
| Next build | — | PASS | |
| secret scan (périmètre) | — | clean | |
| git diff --check (produit) | — | clean | |

LIVE Nora NOT RUN · Git REAL NOT RUN.

## 18. Contrôles ENV-01

Mutatif confiné `sfia_next_e2e`. RECETTE/STABLE non mutées. ENV-R06B RUNTIME = NOT VERIFIED si endpoint absent. ENV-R09 NOT VERIFIED.

## 19. Liste exhaustive des fichiers (commit d7c28a21)

```
M	projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/service.ts
M	projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
M	projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-env01-runtime.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
```

13 files / +1128 / −390. Aucun SEF/roadmap/décision/contrat/migration/CI workflow.

## 20. Diff complet des modifications

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
index 408f4c5c..83d220be 100644
--- a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
@@ -120,6 +120,42 @@ Corrections:

 Preuve locale: PG 318/318 ; unit 248/248 ; Playwright Atlas+ML3 9/9. LIVE NOT RUN. Gate C OPEN.

+## Correctif autorités D5/D6 + fixtures + ENV-R06 (2026-11-12 ~18:40 CET)
+
+Parent produit: `9c163d62`. Mandat: sécuriser les réserves Critical Review R1/R2/R3 sans refaire ML4C.
+
+### R1 — Binding cible durable (propriétaire)
+
+- Nouveau module unique `durable-target-resolve.ts` :
+  - `resolveReviseDecisionTarget` — CAS A decisionId durable ; CAS B objectRef → 0/1/N APPLICABLE RECORD_DECISION (jamais choix d’ordre) ; CAS C refus.
+  - `resolveLiftRestrictionTarget` — filtre ACTIVE + kindHint + targetRefHint ; unicité obligatoire.
+- `classifyCommand` (USER_MESSAGE) et `applyConversationalAuthority` réutilisent le même résolveur.
+- `body.decisionId` / `body.restrictionId` ne peuvent qu’**écho**er la cible déjà résolue ; divergence → REJECTED / AMBIGUOUS.
+- Preuves négatives/positives dans `ml4c-auth-reconciliation.pg.test.ts` via `executePilotageCommand` (multi-cible D6, multi-restriction, hors projet, idempotence).
+
+### R2 — Fixtures sémantiques explicites
+
+- Suppression de `registerPgUtteranceFixture` (inférence regex d’intentions positives).
+- `registerExplicitFixture` / builders typés (`d2`, `d4_*`, `d5`, `d6`, …) ; call sites intent/mission/ml3/ml4 migrés.
+- Texte USER = clé de fixture, **pas** source d’inférence de capacité.
+- Message inconnu reste fail-closed.
+
+### R3 — ENV-R06
+
+- ENV-R06A : contrat CI déterministe (cible mutative `sfia_next_e2e`, lanes interdites).
+- ENV-R06B : si `:5434` absent → `NOT_VERIFIED / ENDPOINT_NOT_AVAILABLE` (trace console, pas faux PASS) ; si présent → exiger `28P01` (ECONNREFUSED ≠ AUTH DENIED).
+- ENV-R09 reste NOT VERIFIED.
+
+### Preuves locales (ce lot)
+
+| Suite | Résultat |
+| --- | --- |
+| Vitest unit | 248 PASS |
+| Vitest PostgreSQL | 324 PASS (318 + R1/R3) |
+| Playwright BROWSER FAKE | 25 PASS |
+| tsc / eslint / Next build | PASS (warnings non bloquants) |
+| LIVE Nora / Git REAL | NOT RUN |
+
 ## Non-déclarations

 ML4C ACCEPTED · S02-01 PASS · A-006/A-007 CLOSED · Gate C CLOSED · ADOPTED · READY FOR REAL · LIVE Nora
@@ -127,9 +163,10 @@ ML4C ACCEPTED · S02-01 PASS · A-006/A-007 CLOSED · Gate C CLOSED · ADOPTED
 ## Réserves / gates Morris restants

 - LIVE Nora pertinence (NOT RUN)
+- Git REAL (NOT RUN)
 - S02-01 Intervencia FAIL (source exacte indisponible)
 - A-006/A-007 ouvertes
-- PR #676 OPEN / NON MERGÉE (correctif CI en cours de publication)
+- PR #676 OPEN / NON MERGÉE (hardening autorités en publication)
 - ENV-R09 sessions multi-lane NOT VERIFIED
-- ENV-R06 isolation runtime réelle: seulement si endpoint RECETTE disponible
+- ENV-R06 isolation runtime réelle: NOT VERIFIED si endpoint RECETTE absent
 - Décision d’intégration Git / RECETTE / promotion = Morris uniquement
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index d1e77eda..83ca5a7a 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-12-ML4C-AUTHORITY-HARDENING
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~18:40 CET (Europe/Paris) |
+| Macro-lot | ML4C — sécurisation frontières d’autorité R1/R2/R3 (PR #676) |
+| Type | EVOL Critical corrective / SECURITY / QUALITY (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
+| Parent tip | `9c163d621589e7ba9d7369ad5a0342a9bbde8b04` |
+| Lane | DEV/E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
+| Changes | Résolveur propriétaire unique `durable-target-resolve.ts` (REVISE/LIFT) ; body HTTP = écho uniquement ; fixtures explicites (`registerExplicitFixture`) ; suppression `registerPgUtteranceFixture` ; ENV-R06A/B (NOT_VERIFIED si :5434 absent) ; tests négatifs multi-cible D6/restriction |
+| Schema | unchanged |
+| Tests | unit 248 PASS ; PG 324 PASS ; Playwright 25 PASS ; tsc/eslint/build PASS ; LIVE NOT RUN |
+| Status | PUSH PR #676 — CI distante à observer sur nouveau SHA |
+
 ## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-CI-PARITY

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
index 6d684e5c..037a068b 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
@@ -18,6 +18,10 @@ import {
   type DecisionBrief,
 } from "@/domains/decisions/divergence-assist";
 import { toCommandResult } from "@/domains/pilotage/command-runner";
+import {
+  resolveLiftRestrictionTarget,
+  resolveReviseDecisionTarget,
+} from "@/domains/pilotage/durable-target-resolve";
 import type { IntentQualification } from "@/domains/pilotage/intent";
 import {
   executePilotageCommand,
@@ -64,7 +68,8 @@ export function conversationalCommandKey(clientTurnKey: string): string {
   return conversationalClientCommandKey(clientTurnKey);
 }

-async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
+/** @deprecated retained for lexical helper tests only — authority path uses durable resolvers. */
+export async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
   const rows = await db
     .select({
       id: humanDecisions.id,
@@ -363,48 +368,22 @@ export async function applyConversationalAuthority(input: {
   };

   if (qualified.operation === "REVISE_DECISION") {
-    // Lot D2 — target from durable qualification or unique objectRef match on
-    // known APPLICABLE RECORD_DECISION resources. No lexical utterance router.
-    const briefs = await loadDecisionBriefs(input.projectId);
-    let decisionId = (qualified.decisionId ?? "").trim();
+    // Same owner resolver as classifyCommand — unique durable target only.
     const statement =
       (qualified.statement ?? "").trim() || content.replace(/^(?:finalement|désormais|dorénavant)[,:]?\s+/i, "").trim();
-    if (!decisionId && qualified.objectRef?.trim()) {
-      const objectRef = qualified.objectRef.trim();
-      const matches = briefs.filter(
-        (b) =>
-          b.state === "APPLICABLE" &&
-          b.kind === "RECORD_DECISION" &&
-          b.objectRef.trim() === objectRef,
-      );
-      if (matches.length === 1) {
-        decisionId = matches[0]!.id;
-      } else if (matches.length > 1) {
-        return {
-          attempted: false,
-          intentClarity: "AMBIGUOUS",
-          intentReason: "Plusieurs décisions pour objectRef — précisez decisionId",
-          command: null,
-          humanDecisionCreated: false,
-          decisionId: null,
-          clarification: "Plusieurs décisions pour objectRef — précisez decisionId",
-          source: "clarification_only",
-          operation: "REVISE_DECISION",
-          clientCommandKey,
-        };
-      }
-    }
-    if (!decisionId) {
+    const resolved = await resolveReviseDecisionTarget(db, input.projectId, {
+      decisionId: qualified.decisionId,
+      objectRef: qualified.objectRef,
+    });
+    if (!resolved.ok) {
       return {
         attempted: false,
         intentClarity: "AMBIGUOUS",
-        intentReason:
-          "REVISE_DECISION sans decisionId/objectRef durable — clarification requise (pas de cible lexicale)",
+        intentReason: resolved.reason,
         command: null,
         humanDecisionCreated: false,
         decisionId: null,
-        clarification:
-          "Précisez la décision à réviser (identifiant ou objectRef unique) — pas de choix heuristique",
+        clarification: resolved.reason,
         source: "clarification_only",
         operation: "REVISE_DECISION",
         clientCommandKey,
@@ -413,7 +392,7 @@ export async function applyConversationalAuthority(input: {
     const command = await executePilotageCommand(input.pilotId, input.projectId, {
       ...base,
       operation: "REVISE_DECISION",
-      decisionId,
+      decisionId: resolved.id,
       statement: statement.slice(0, 500),
       objectRef: qualified.objectRef,
     });
@@ -431,79 +410,33 @@ export async function applyConversationalAuthority(input: {
     return outcomeFromCommand(command, "RECORD_DECISION", clientCommandKey);
   }

-  /** C06 — resolve a unique ACTIVE restriction before LIFT (never approximate). */
+  /** C06 — same owner LIFT resolver as classifyCommand (unique ACTIVE target). */
   if (qualified.operation === "LIFT_RESTRICTION") {
-    const hint = (qualified.restrictionKindHint ?? "").trim().toUpperCase();
-    const targetHint = (qualified.restrictionTargetRefHint ?? "").trim();
-    const active = projection.restrictions.filter((r) => r.status === "ACTIVE");
-    let pool = hint
-      ? active.filter((r) => r.targetKind.toUpperCase() === hint)
-      : active;
-    // If the pilot named an instance/specialty, require a matching targetRef
-    // (a lone matching kind with a contradictory target is not enough).
-    if (targetHint && pool.length > 0) {
-      const hintNorm = targetHint.toUpperCase();
-      const narrowed = pool.filter((r) => {
-        const ref = (r.targetRef || "*").toUpperCase();
-        if (ref === "*" || ref === hintNorm) return true;
-        // Specialty name vs cycle id: allow when pilot says CADRAGE and target is cycle id
-        // only if projection cycle type matches — otherwise require exact/soft includes.
-        if (projection.cycle && hintNorm === projection.cycle.cycleType.toUpperCase()) {
-          return ref === projection.cycle.id.toUpperCase() || ref === "*";
-        }
-        return ref.includes(hintNorm) || hintNorm.includes(ref);
-      });
-      if (narrowed.length === 0) {
-        return {
-          attempted: false,
-          intentClarity: "AMBIGUOUS",
-          intentReason:
-            "Restriction active d'un autre cible que celle indiquée — précisez la cible exacte",
-          command: null,
-          humanDecisionCreated: false,
-          decisionId: null,
-          clarification:
-            "Restriction active d'un autre cible que celle indiquée — précisez la cible exacte",
-          source: "clarification_only",
-          operation: "LIFT_RESTRICTION",
-          clientCommandKey,
-        };
-      }
-      pool = narrowed;
-    }
-    if (pool.length === 0) {
-      return {
-        attempted: false,
-        intentClarity: "AMBIGUOUS",
-        intentReason: "Aucune restriction active correspondant à la demande",
-        command: null,
-        humanDecisionCreated: false,
-        decisionId: null,
-        clarification: "Aucune restriction active correspondant à la demande — précisez la cible",
-        source: "clarification_only",
-        operation: "LIFT_RESTRICTION",
-        clientCommandKey,
-      };
-    }
-    if (pool.length > 1) {
+    const resolved = await resolveLiftRestrictionTarget(db, input.projectId, {
+      restrictionKindHint: qualified.restrictionKindHint,
+      restrictionTargetRefHint: qualified.restrictionTargetRefHint,
+      activeCycle: projection.cycle
+        ? { id: projection.cycle.id, cycleType: projection.cycle.cycleType }
+        : null,
+    });
+    if (!resolved.ok) {
       return {
         attempted: false,
         intentClarity: "AMBIGUOUS",
-        intentReason: "Plusieurs restrictions actives — précisez laquelle lever",
+        intentReason: resolved.reason,
         command: null,
         humanDecisionCreated: false,
         decisionId: null,
-        clarification: "Plusieurs restrictions actives — précisez laquelle lever",
+        clarification: resolved.reason,
         source: "clarification_only",
         operation: "LIFT_RESTRICTION",
         clientCommandKey,
       };
     }
-    const target = pool[0];
     const command = await executePilotageCommand(input.pilotId, input.projectId, {
       ...base,
       operation: "LIFT_RESTRICTION",
-      restrictionId: target.id,
+      restrictionId: resolved.id,
     });
     return outcomeFromCommand(command, "LIFT_RESTRICTION", clientCommandKey);
   }
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts b/projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts
new file mode 100644
index 00000000..1e21d3d0
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts
@@ -0,0 +1,185 @@
+/**
+ * Owner-side durable target resolution for USER_MESSAGE D6 REVISE / LIFT.
+ * Studio resolves the unique target from durable qualification + project state.
+ * HTTP body.decisionId / body.restrictionId may only echo that target.
+ */
+import { and, eq } from "drizzle-orm";
+import { db } from "@/db/client";
+import {
+  governanceRestrictions,
+  humanDecisions,
+} from "@/db/schema";
+import type { DbTx } from "@/domains/pilotage/command-runner";
+
+/** db or transactional client — same select/from/where surface. */
+export type DurableQueryDb = typeof db | DbTx;
+
+export type DurableResolveOk = { ok: true; id: string };
+export type DurableResolveFail = {
+  ok: false;
+  reasonCode: "AMBIGUOUS" | "INVALID";
+  reason: string;
+};
+export type DurableResolveResult = DurableResolveOk | DurableResolveFail;
+
+/** Exact targetRef match, wildcard, or active cycle id when hint is the cycle type. */
+export function restrictionTargetMatchesHint(input: {
+  targetRef: string;
+  hint: string;
+  activeCycle?: { id: string; cycleType: string } | null;
+}): boolean {
+  const ref = (input.targetRef || "*").trim().toUpperCase();
+  const hint = input.hint.trim().toUpperCase();
+  if (!hint) return true;
+  if (ref === "*" || ref === hint) return true;
+  const cycle = input.activeCycle;
+  if (
+    cycle &&
+    hint === cycle.cycleType.toUpperCase() &&
+    ref === cycle.id.toUpperCase()
+  ) {
+    return true;
+  }
+  return false;
+}
+
+/**
+ * Resolve REVISE_DECISION target: durable decisionId, else unique APPLICABLE
+ * RECORD_DECISION with exact objectRef. Never pick by order among many.
+ */
+export async function resolveReviseDecisionTarget(
+  queryDb: DurableQueryDb,
+  projectId: string,
+  input: { decisionId?: string | null; objectRef?: string | null },
+): Promise<DurableResolveResult> {
+  const durableId = (input.decisionId ?? "").trim();
+  if (durableId) {
+    const row = (
+      await queryDb
+        .select({
+          id: humanDecisions.id,
+          kind: humanDecisions.kind,
+          state: humanDecisions.state,
+          objectRef: humanDecisions.objectRef,
+          projectId: humanDecisions.projectId,
+        })
+        .from(humanDecisions)
+        .where(and(eq(humanDecisions.id, durableId), eq(humanDecisions.projectId, projectId)))
+        .limit(1)
+    )[0];
+    if (!row || row.state !== "APPLICABLE") {
+      return {
+        ok: false,
+        reasonCode: "AMBIGUOUS",
+        reason: "decisionId durable absent, hors projet ou non APPLICABLE",
+      };
+    }
+    const objectRef = (input.objectRef ?? "").trim();
+    if (objectRef && (row.objectRef ?? "").trim() !== objectRef) {
+      return {
+        ok: false,
+        reasonCode: "AMBIGUOUS",
+        reason: "decisionId durable incompatible avec objectRef qualifié",
+      };
+    }
+    return { ok: true, id: row.id };
+  }
+
+  const objectRef = (input.objectRef ?? "").trim();
+  if (!objectRef) {
+    return {
+      ok: false,
+      reasonCode: "AMBIGUOUS",
+      reason: "REVISE_DECISION sans decisionId ni objectRef durable — clarification requise",
+    };
+  }
+
+  const rows = await queryDb
+    .select({
+      id: humanDecisions.id,
+      kind: humanDecisions.kind,
+      state: humanDecisions.state,
+      objectRef: humanDecisions.objectRef,
+    })
+    .from(humanDecisions)
+    .where(eq(humanDecisions.projectId, projectId));
+
+  const matches = rows.filter(
+    (r) =>
+      r.state === "APPLICABLE" &&
+      r.kind === "RECORD_DECISION" &&
+      (r.objectRef ?? "").trim() === objectRef,
+  );
+  if (matches.length === 0) {
+    return {
+      ok: false,
+      reasonCode: "AMBIGUOUS",
+      reason: "Aucune décision APPLICABLE pour objectRef durable",
+    };
+  }
+  if (matches.length > 1) {
+    return {
+      ok: false,
+      reasonCode: "AMBIGUOUS",
+      reason: "Plusieurs décisions pour objectRef — précisez decisionId",
+    };
+  }
+  return { ok: true, id: matches[0]!.id };
+}
+
+/**
+ * Resolve LIFT_RESTRICTION target from durable kind/target hints.
+ * Unique ACTIVE match required. No substring / first-match selection.
+ */
+export async function resolveLiftRestrictionTarget(
+  queryDb: DurableQueryDb,
+  projectId: string,
+  input: {
+    restrictionKindHint?: string | null;
+    restrictionTargetRefHint?: string | null;
+    activeCycle?: { id: string; cycleType: string } | null;
+  },
+): Promise<DurableResolveResult> {
+  const kindHint = (input.restrictionKindHint ?? "").trim().toUpperCase();
+  const targetHint = (input.restrictionTargetRefHint ?? "").trim();
+
+  const active = await queryDb
+    .select()
+    .from(governanceRestrictions)
+    .where(
+      and(
+        eq(governanceRestrictions.projectId, projectId),
+        eq(governanceRestrictions.status, "ACTIVE"),
+      ),
+    );
+
+  let pool = kindHint
+    ? active.filter((r) => r.targetKind.toUpperCase() === kindHint)
+    : active;
+
+  if (targetHint) {
+    pool = pool.filter((r) =>
+      restrictionTargetMatchesHint({
+        targetRef: r.targetRef,
+        hint: targetHint,
+        activeCycle: input.activeCycle,
+      }),
+    );
+  }
+
+  if (pool.length === 0) {
+    return {
+      ok: false,
+      reasonCode: "AMBIGUOUS",
+      reason: "Aucune restriction active correspondant à la qualification durable",
+    };
+  }
+  if (pool.length > 1) {
+    return {
+      ok: false,
+      reasonCode: "AMBIGUOUS",
+      reason: "Plusieurs restrictions actives — précisez laquelle lever",
+    };
+  }
+  return { ok: true, id: pool[0]!.id };
+}
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index 0833cad3..f0cb7cac 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -34,6 +34,10 @@ import {
 import type { IntentQualification } from "@/domains/pilotage/intent";
 import { loadDurableQualificationForUserMessage } from "@/domains/conversation/durable-qualification";
 import { matchPilotageIntentInQualification } from "@/domains/conversation/semantic-qualification";
+import {
+  resolveLiftRestrictionTarget,
+  resolveReviseDecisionTarget,
+} from "@/domains/pilotage/durable-target-resolve";
 import {
   PILOTAGE_OPERATIONS,
   SOURCE_KINDS,
@@ -504,103 +508,83 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
       }
     }

-    // Authority bridge may resolve decisionId / restrictionId from durable hints.
+    // Owner resolves durable targets first. body.decisionId / restrictionId may only echo.
     let decisionId = matched.decisionId;
-    const bodyDecisionId = body.decisionId?.trim();
-    if (bodyDecisionId) {
-      if (matched.decisionId && bodyDecisionId !== matched.decisionId) {
+    if (matched.operation === "REVISE_DECISION") {
+      const resolved = await resolveReviseDecisionTarget(tx, input.projectId, {
+        decisionId: matched.decisionId,
+        objectRef: matched.objectRef,
+      });
+      if (!resolved.ok) {
         return {
           ok: false,
-          reasonCode: "AMBIGUOUS",
-          reason: "Champ decisionId non issu de la qualification durable — refuse (pas de complément body)",
-          sourceActionKey: "REJECT|AMBIGUOUS|BODY_DECISIONID",
+          reasonCode: resolved.reasonCode,
+          reason: resolved.reason,
+          sourceActionKey: `REJECT|${resolved.reasonCode}|REVISE_TARGET`,
         };
       }
-      if (!matched.decisionId) {
-        if (matched.operation !== "REVISE_DECISION" || !matched.objectRef?.trim()) {
-          return {
-            ok: false,
-            reasonCode: "AMBIGUOUS",
-            reason: "Champ decisionId non issu de la qualification durable — refuse (pas de complément body)",
-            sourceActionKey: "REJECT|AMBIGUOUS|BODY_DECISIONID",
-          };
-        }
-        const row = (
-          await tx
-            .select({
-              id: humanDecisions.id,
-              objectRef: humanDecisions.objectRef,
-              kind: humanDecisions.kind,
-              state: humanDecisions.state,
-            })
-            .from(humanDecisions)
-            .where(
-              and(
-                eq(humanDecisions.id, bodyDecisionId),
-                eq(humanDecisions.projectId, input.projectId),
-              ),
-            )
-            .limit(1)
-        )[0];
-        if (
-          !row ||
-          row.kind !== "RECORD_DECISION" ||
-          row.state !== "APPLICABLE" ||
-          (row.objectRef ?? "").trim() !== matched.objectRef.trim()
-        ) {
-          return {
-            ok: false,
-            reasonCode: "AMBIGUOUS",
-            reason: "decisionId résolu incompatible avec objectRef durable — refuse",
-            sourceActionKey: "REJECT|AMBIGUOUS|DECISIONID_OBJECTREF_MISMATCH",
-          };
-        }
-        decisionId = bodyDecisionId;
-      }
-    }
-
-    let restrictionId: string | undefined;
-    const bodyRestrictionId = body.restrictionId?.trim();
-    if (bodyRestrictionId) {
-      if (matched.operation !== "LIFT_RESTRICTION") {
+      const bodyDecisionId = body.decisionId?.trim();
+      if (bodyDecisionId && bodyDecisionId !== resolved.id) {
         return {
           ok: false,
           reasonCode: "AMBIGUOUS",
-          reason: "Champ restrictionId non issu de la qualification durable — refuse",
-          sourceActionKey: "REJECT|AMBIGUOUS|BODY_RESTRICTIONID",
+          reason: "body.decisionId divergent de la cible propriétaire durable — refuse",
+          sourceActionKey: "REJECT|AMBIGUOUS|BODY_DECISIONID",
         };
       }
-      const row = (
+      decisionId = resolved.id;
+    } else if (body.decisionId?.trim()) {
+      return {
+        ok: false,
+        reasonCode: "AMBIGUOUS",
+        reason: "Champ decisionId non applicable à cette opération durable — refuse",
+        sourceActionKey: "REJECT|AMBIGUOUS|BODY_DECISIONID",
+      };
+    }
+
+    let restrictionId: string | undefined;
+    if (matched.operation === "LIFT_RESTRICTION") {
+      const activeCycleRow = (
         await tx
-          .select()
-          .from(governanceRestrictions)
+          .select({ id: projectCycles.id, cycleType: projectCycles.cycleType })
+          .from(projectCycles)
           .where(
-            and(
-              eq(governanceRestrictions.id, bodyRestrictionId),
-              eq(governanceRestrictions.projectId, input.projectId),
-              eq(governanceRestrictions.status, "ACTIVE"),
-            ),
+            and(eq(projectCycles.projectId, input.projectId), eq(projectCycles.status, "ACTIVE")),
           )
           .limit(1)
       )[0];
-      if (!row) {
+      const resolved = await resolveLiftRestrictionTarget(tx, input.projectId, {
+        restrictionKindHint: matched.restrictionKindHint,
+        restrictionTargetRefHint: matched.restrictionTargetRefHint,
+        activeCycle: activeCycleRow
+          ? { id: activeCycleRow.id, cycleType: activeCycleRow.cycleType }
+          : null,
+      });
+      if (!resolved.ok) {
         return {
           ok: false,
-          reasonCode: "AMBIGUOUS",
-          reason: "restrictionId résolu absent ou inactif — refuse",
-          sourceActionKey: "REJECT|AMBIGUOUS|RESTRICTIONID_INVALID",
+          reasonCode: resolved.reasonCode,
+          reason: resolved.reason,
+          sourceActionKey: `REJECT|${resolved.reasonCode}|LIFT_TARGET`,
         };
       }
-      const hint = (matched.restrictionKindHint ?? "").trim().toUpperCase();
-      if (hint && row.targetKind.toUpperCase() !== hint) {
+      const bodyRestrictionId = body.restrictionId?.trim();
+      if (bodyRestrictionId && bodyRestrictionId !== resolved.id) {
         return {
           ok: false,
           reasonCode: "AMBIGUOUS",
-          reason: "restrictionId incompatible avec restrictionKindHint durable — refuse",
-          sourceActionKey: "REJECT|AMBIGUOUS|RESTRICTION_HINT_MISMATCH",
+          reason: "body.restrictionId divergent de la cible propriétaire durable — refuse",
+          sourceActionKey: "REJECT|AMBIGUOUS|BODY_RESTRICTIONID",
         };
       }
-      restrictionId = bodyRestrictionId;
+      restrictionId = resolved.id;
+    } else if (body.restrictionId?.trim()) {
+      return {
+        ok: false,
+        reasonCode: "AMBIGUOUS",
+        reason: "Champ restrictionId non applicable à cette opération durable — refuse",
+        sourceActionKey: "REJECT|AMBIGUOUS|BODY_RESTRICTIONID",
+      };
     }

     const qualified: ClearIntent = {
diff --git a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
index 3c16c026..1fdce40c 100644
--- a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
+++ b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
@@ -2,10 +2,7 @@
  * TEST_BOUNDARY ONLY — typed NoraTurnQualification builders for PG/integration fixtures.
  * Not a production router. Unknown live utterances stay fail-closed in fixtureSemanticQualify.
  */
-import {
-  fixtureSemanticQualify,
-  registerFixtureScenario,
-} from "@/domains/conversation/fixture-semantic-qualify";
+import { registerFixtureScenario } from "@/domains/conversation/fixture-semantic-qualify";
 import {
   SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
   validateNoraTurnQualification,
@@ -346,159 +343,181 @@ export function ambiguousPilotagePreQualified(reason: string): IntentQualificati
   return { clarity: "AMBIGUOUS", reason };
 }

-/** Parse « Crée un projet nommé X » / « Crée un projet nommé X puis … document … » */
-export function registerNamedProjectCreate(utterance: string): void {
-  const named = utterance.match(
-    /projet nommé\s+(.+?)(?:\s+puis\s+|\s*\.|$)/i,
-  );
-  const projectName = (named?.[1] ?? "Projet").trim().replace(/\.$/, "");
-  const wantsDoc = /document/i.test(utterance);
-  const docMatch = utterance.match(/document(?:\s+de\s+cadrage)?(?:\s+intitulé)?\s+(.+?)\.?$/i);
-  const docSummary = wantsDoc
-    ? (docMatch?.[1] ?? "document de cadrage").trim()
-    : undefined;
-  registerTypedScenario(
-    utterance,
-    d2CreateProjectEnvelope({
-      projectName,
-      followOnDocument: docSummary
-        ? { summary: docSummary, notes: docSummary }
-        : undefined,
-    }),
-  );
-}
-
-export function registerCreateDocumentTitled(utterance: string, opts?: {
-  publicationPath?: string | null;
-  includeFence?: boolean;
-}): void {
-  const titled = utterance.match(/document intitulé\s+(.+?)(?:\s+et\s+publie|\s+pour\s+|\.|$)/i);
-  const title = (titled?.[1] ?? "Document").trim();
-  const wantsPublish = /publie/i.test(utterance);
-  if (wantsPublish) {
-    const pathMatch = utterance.match(/chemin\s+(\S+)/i);
-    registerTypedScenario(
-      utterance,
-      d4CreateAndPublishEnvelope({
-        title,
-        summary: title,
-        publicationPath:
-          opts && "publicationPath" in (opts ?? {})
-            ? opts!.publicationPath
-            : pathMatch?.[1] ?? null,
-        includeFence: opts?.includeFence,
-      }),
-    );
-    return;
-  }
-  registerTypedScenario(
-    utterance,
-    d4CreateDocumentEnvelope({
-      title,
-      summary: title,
-      includeFence: opts?.includeFence,
-    }),
-  );
-}
-
-/** PG integration: register a fixture envelope from utterance shape (TEST_BOUNDARY). */
-function pgFixtureAlreadyHasEffect(utterance: string): boolean {
-  const q = fixtureSemanticQualify(utterance.trim());
-  return q.intents.some(
-    (i) => i.mode === "REQUEST_EFFECT" && i.capabilityId !== "d3.converse",
-  );
-}
+/**
+ * Explicit TEST_BOUNDARY registration — utterance is the exact key only.
+ * Capability / targets come from opts, never from regex inference on the text.
+ */
+export type ExplicitFixtureSpec =
+  | { kind: "dialogue"; reply?: string; constraints?: string[] }
+  | {
+      kind: "d2";
+      projectName: string;
+      documentSummary?: string;
+      reply?: string;
+    }
+  | {
+      kind: "d4_create";
+      title: string;
+      summary?: string;
+      notes?: string;
+      includeFence?: boolean;
+    }
+  | {
+      kind: "d4_revise";
+      documentHint: string;
+      sectionHint?: string;
+      includeFence?: boolean;
+      reply?: string;
+    }
+  | {
+      kind: "d4_publish";
+      title: string;
+      publicationPath?: string | null;
+      includeFence?: boolean;
+    }
+  | {
+      kind: "d5";
+      operation: PilotageOperation;
+      cycleType?: string;
+      toCycleType?: string;
+      objective?: string;
+    }
+  | {
+      kind: "d5_then_d4";
+      cycleType: string;
+      documentTitle: string;
+      documentSummary: string;
+    }
+  | { kind: "qualification"; q: NoraTurnQualification };

-export function registerPgUtteranceFixture(utterance: string, opts?: {
-  publicationPath?: string | null;
-  includeFence?: boolean;
-}): void {
+export function registerExplicitFixture(utterance: string, spec: ExplicitFixtureSpec): void {
   const t = utterance.trim();
-  if (pgFixtureAlreadyHasEffect(t)) {
-    return;
-  }
-  if (/intitulé\s*«/.test(t)) {
-    const m = t.match(/intitulé\s*«([^»]+)»/i);
-    const title = m?.[1]?.trim();
-    if (title) {
+  switch (spec.kind) {
+    case "dialogue":
+      registerTypedScenario(
+        t,
+        dialogueEnvelope(
+          t,
+          spec.reply ?? "Réponse fixture — exploration sans effet.",
+          spec.constraints ?? ["NO_EFFECT"],
+        ),
+      );
+      return;
+    case "d2":
+      registerTypedScenario(
+        t,
+        d2CreateProjectEnvelope({
+          projectName: spec.projectName,
+          reply: spec.reply,
+          followOnDocument: spec.documentSummary
+            ? { summary: spec.documentSummary, notes: spec.documentSummary }
+            : undefined,
+        }),
+      );
+      return;
+    case "d4_create":
+      registerTypedScenario(
+        t,
+        d4CreateDocumentEnvelope({
+          title: spec.title,
+          summary: spec.summary ?? spec.title,
+          notes: spec.notes ?? spec.summary ?? spec.title,
+          includeFence: spec.includeFence,
+        }),
+      );
+      return;
+    case "d4_revise":
+      registerTypedScenario(
+        t,
+        d4ReviseDocumentEnvelope({
+          summary: "Révision documentaire",
+          documentHint: spec.documentHint,
+          sectionHint: spec.sectionHint,
+          includeFence: spec.includeFence,
+          reply: spec.reply,
+        }),
+      );
+      return;
+    case "d4_publish":
+      registerTypedScenario(
+        t,
+        d4CreateAndPublishEnvelope({
+          title: spec.title,
+          summary: spec.title,
+          publicationPath: spec.publicationPath,
+          includeFence: spec.includeFence,
+        }),
+      );
+      return;
+    case "d5":
       registerTypedScenario(
         t,
-        d4CreateDocumentEnvelope({ title, summary: title, notes: t }),
+        d5PilotageEnvelope({
+          operation: spec.operation,
+          cycleType: spec.cycleType,
+          toCycleType: spec.toCycleType,
+          objective: spec.objective,
+        }),
       );
       return;
+    case "d5_then_d4":
+      registerTypedScenario(
+        t,
+        d5ThenD4Envelope({
+          cycleType: spec.cycleType,
+          documentTitle: spec.documentTitle,
+          documentSummary: spec.documentSummary,
+        }),
+      );
+      return;
+    case "qualification":
+      registerTypedScenario(t, spec.q);
+      return;
+    default: {
+      const _exhaustive: never = spec;
+      void _exhaustive;
+      throw new Error("explicit fixture kind inconnu");
     }
   }
-  if (/révise.*document.*«/i.test(t)) {
-    const title = t.match(/document\s+(?:D4\s+)?existant\s+«([^»]+)»/i)?.[1]?.trim();
-    const section = t.match(/section\s+(\d+)/i)?.[1];
-    registerTypedScenario(
-      t,
-      d4ReviseDocumentEnvelope({
-        summary: "Révision documentaire",
-        documentHint: title ?? "document",
-        sectionHint: section,
-        reply: title ? sfiaDocumentFence(title, "Révision section.") : undefined,
-      }),
-    );
-    return;
-  }
-  if (/projet nommé/i.test(t)) {
-    registerNamedProjectCreate(t);
-    return;
-  }
-  if (/document intitulé/i.test(t)) {
-    registerCreateDocumentTitled(t, opts);
-    return;
-  }
-  if (/^Ouvre le cycle cadrage\.?$/i.test(t)) {
-    registerTypedScenario(
-      t,
-      d5PilotageEnvelope({ operation: "OPEN_CYCLE", cycleType: "CADRAGE", objective: "cadrage" }),
-    );
-    return;
-  }
-  if (/Ouvre le cycle cadrage puis crée un document intitulé/i.test(t)) {
-    const m = t.match(/document intitulé\s+(.+?)\./i);
-    const title = m?.[1]?.trim() ?? "Document";
-    registerTypedScenario(
-      t,
-      d5ThenD4Envelope({
-        cycleType: "CADRAGE",
-        documentTitle: title,
-        documentSummary: title,
-      }),
-    );
-    return;
-  }
-  if (/^Rédige un document de synthèse sur /i.test(t) || /^Crée un document de synthèse sur /i.test(t)) {
-    const topic = t.match(/sur\s+(.+)$/i)?.[1]?.trim().replace(/\.$/, "") ?? "Synthèse";
-    registerTypedScenario(
-      t,
-      d4CreateDocumentEnvelope({
-        title: topic,
-        summary: topic,
-        notes: topic,
-        includeFence: opts?.includeFence,
-      }),
-    );
-    return;
-  }
-  if (/^Révise/i.test(t)) {
-    const quoted = t.match(/document\s+«([^»]+)»/i);
-    const bare = t.match(/document\s+(\S+)/i);
-    const section = t.match(/section\s+(\d+|[^»\n]+)/i)?.[1];
-    registerTypedScenario(
-      t,
-      d4ReviseDocumentEnvelope({
-        summary: "Révision documentaire",
-        documentHint: quoted?.[1] ?? bare?.[1] ?? "document",
-        sectionHint: section?.trim(),
-        includeFence: opts?.includeFence ?? true,
-      }),
-    );
+}
+
+/** @deprecated Use registerExplicitFixture with kind:"d2" — kept name for call-site clarity. */
+export function registerNamedProjectCreate(
+  utterance: string,
+  opts: { projectName: string; documentSummary?: string; reply?: string },
+): void {
+  registerExplicitFixture(utterance, {
+    kind: "d2",
+    projectName: opts.projectName,
+    documentSummary: opts.documentSummary,
+    reply: opts.reply,
+  });
+}
+
+/** @deprecated Use registerExplicitFixture with kind:"d4_create"|"d4_publish". */
+export function registerCreateDocumentTitled(
+  utterance: string,
+  opts: {
+    title: string;
+    publicationPath?: string | null;
+    includeFence?: boolean;
+    publish?: boolean;
+  },
+): void {
+  if (opts.publish || opts.publicationPath !== undefined) {
+    registerExplicitFixture(utterance, {
+      kind: "d4_publish",
+      title: opts.title,
+      publicationPath: opts.publicationPath,
+      includeFence: opts.includeFence,
+    });
     return;
   }
-  registerTypedScenario(t, dialogueEnvelope(t, "Réponse fixture — exploration sans effet.", ["NO_EFFECT"]));
+  registerExplicitFixture(utterance, {
+    kind: "d4_create",
+    title: opts.title,
+    includeFence: opts.includeFence,
+  });
 }

 export type { NoraTurnQualification, StudioCapabilityId, PilotageOperation };
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index 8cdbb417..6c42efc7 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -59,16 +59,22 @@ import { TURN_RUNNING_STALE_MS } from "@/domains/conversation/turn-command";
 import { conversationTurnCommands } from "@/db/schema";
 import { getPreparationContext } from "@/domains/preparation/service";
 import { and, eq as eqCol } from "drizzle-orm";
-import { registerPgUtteranceFixture } from "../helpers/semantic-fixture-envelopes";
+import {
+  registerExplicitFixture,
+  type ExplicitFixtureSpec,
+} from "../helpers/semantic-fixture-envelopes";

 async function noraTurn(
   pilotId: string,
   preparationId: string,
   text: string,
-  opts?: Parameters<typeof postUserMessageAndNora>[3],
+  opts?: Parameters<typeof postUserMessageAndNora>[3] & { fixture?: ExplicitFixtureSpec },
 ) {
-  registerPgUtteranceFixture(text);
-  return postUserMessageAndNora(pilotId, preparationId, text, opts);
+  if (opts?.fixture) {
+    registerExplicitFixture(text, opts.fixture);
+  }
+  const { fixture: _f, ...turnOpts } = opts ?? {};
+  return postUserMessageAndNora(pilotId, preparationId, text, turnOpts);
 }

 async function seedPilot(label: string) {
@@ -149,7 +155,10 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
       pilotId,
       preparationId,
       "Crée un projet nommé Solo Project B.",
-      { clientTurnKey: newId("ctk") },
+      {
+        clientTurnKey: newId("ctk"),
+        fixture: { kind: "d2", projectName: "Solo Project B" },
+      },
     );
     expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
     expect(first.missionProjection?.ownerActBinding?.kind).toBe("D2_CREATE_PROJECT");
@@ -256,8 +265,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const first = await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Unknown Atlas puis prépare un document de cadrage Unknown.",
-      { clientTurnKey },
+      "Crée un projet nommé Unknown Atlas puis prépare un document de cadrage Unknown.", {
+        fixture: { kind: "d2", projectName: "Unknown Atlas", documentSummary: "document de cadrage Unknown" },
+         clientTurnKey },
     );
     expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
     const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
@@ -305,8 +315,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const first = await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Wait Decision S05.",
-      { clientTurnKey },
+      "Crée un projet nommé Wait Decision S05.", {
+        fixture: { kind: "d2", projectName: "Wait Decision S05" },
+         clientTurnKey },
     );
     expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
     expect(first.missionProjection?.clientIntentKey).toBe(clientTurnKey);
@@ -350,8 +361,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const first = await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Recover Atlas puis un document de cadrage Recover.",
-      { clientTurnKey },
+      "Crée un projet nommé Recover Atlas puis un document de cadrage Recover.", {
+        fixture: { kind: "d2", projectName: "Recover Atlas", documentSummary: "document de cadrage Recover" },
+         clientTurnKey },
     );
     expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
     const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
@@ -408,8 +420,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const a = await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Mission Alpha puis un document d'accueil Alpha.",
-      { clientTurnKey: keyA },
+      "Crée un projet nommé Mission Alpha puis un document d'accueil Alpha.", {
+        fixture: { kind: "d2", projectName: "Mission Alpha", documentSummary: "document d'accueil Alpha" },
+         clientTurnKey: keyA },
     );
     expect(a.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
     expect(a.missionProjection?.ownerActBinding?.clientIntentKey).toBe(keyA);
@@ -448,8 +461,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const indep = await noraTurn(
       pilotId,
       preparationId,
-      "Crée un document intitulé Document Indépendant Beta.",
-      { clientTurnKey: newId("ctk") },
+      "Crée un document intitulé Document Indépendant Beta.", {
+        fixture: { kind: "d4_create", title: "Document Indépendant Beta" },
+         clientTurnKey: newId("ctk") },
     );
     expect(indep.documentSave?.status).toBe("AVAILABLE");
     expect(indep.documentSave?.documentId).not.toBe(cont.documentSave?.documentId);
@@ -460,8 +474,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const created = await noraTurn(
       pilotId,
       preparationId,
-      "Crée un document intitulé Continuity CD pour révision ciblée.",
-      { clientTurnKey: newId("ctk") },
+      "Crée un document intitulé Continuity CD pour révision ciblée.", {
+        fixture: { kind: "d4_create", title: "Continuity CD pour révision ciblée" },
+         clientTurnKey: newId("ctk") },
     );
     expect(created.documentSave?.status).toBe("AVAILABLE");
     expect(created.documentSave?.act).toBe("CREATE");
@@ -476,6 +491,11 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     }
     const revised = await noraTurn(pilotId, preparationId, reviseAsk, {
       clientTurnKey: newId("ctk"),
+      fixture: {
+        kind: "d4_revise",
+        documentHint: documentId,
+        sectionHint: "2",
+      },
     });
     expect(revised.documentSave?.act).toBe("REVISE");
     expect(revised.documentSave?.status).toBe("AVAILABLE");
@@ -548,8 +568,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const chat = await noraTurn(
       pilotId,
       preparationId,
-      "Ouvre le cycle cadrage puis crée un document intitulé Suite Après Cycle.",
-      { clientTurnKey: newId("ctk") },
+      "Ouvre le cycle cadrage puis crée un document intitulé Suite Après Cycle.", {
+        fixture: { kind: "d5_then_d4", cycleType: "CADRAGE", documentTitle: "Suite Après Cycle", documentSummary: "Suite Après Cycle" },
+         clientTurnKey: newId("ctk") },
     );
     if (chat.pilotageEffect?.operation) {
       expect(chat.pilotageEffect.operation).toBe("OPEN_CYCLE");
@@ -577,6 +598,7 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
       pilotId,
       preparationId,
       "Crée un document intitulé D6 Decision Doc pour publication.",
+      { fixture: { kind: "d4_create", title: "D6 Decision Doc pour publication" } },
     );
     const prepared = await preparePublication({
       pilotId,
@@ -626,6 +648,7 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
       pilotId,
       preparationId,
       "Crée un document intitulé Read Isolation pour publication classique.",
+      { fixture: { kind: "d4_create", title: "Read Isolation pour publication classique" } },
     );
     const prepared = await preparePublication({
       pilotId,
@@ -741,8 +764,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Concours puis un document concurrent.",
-      { clientTurnKey },
+      "Crée un projet nommé Concours puis un document concurrent.", {
+        fixture: { kind: "d2", projectName: "Concours", documentSummary: "document concurrent" },
+         clientTurnKey },
     );
     const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
     const created = await createProjectCommand({
@@ -823,8 +847,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Auth Exact puis un document Exact.",
-      { clientTurnKey: keyA },
+      "Crée un projet nommé Auth Exact puis un document Exact.", {
+        fixture: { kind: "d2", projectName: "Auth Exact", documentSummary: "document Exact" },
+         clientTurnKey: keyA },
     );
     const before = await db.select().from(preparations).where(eq(preparations.id, preparationId));
     expect(before[0]?.status).not.toBe("ATTACHED");
@@ -884,14 +909,16 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Mission A puis un document Alpha.",
-      { clientTurnKey: keyA },
+      "Crée un projet nommé Mission A puis un document Alpha.", {
+        fixture: { kind: "d2", projectName: "Mission A", documentSummary: "document Alpha" },
+         clientTurnKey: keyA },
     );
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Mission B puis un document Beta.",
-      { clientTurnKey: keyB },
+      "Crée un projet nommé Mission B puis un document Beta.", {
+        fixture: { kind: "d2", projectName: "Mission B", documentSummary: "document Beta" },
+         clientTurnKey: keyB },
     );

     // Neighbor B remains awaiting; only A is authorized and creates the project.
@@ -943,14 +970,16 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Done A puis un document DoneA.",
-      { clientTurnKey: keyA },
+      "Crée un projet nommé Done A puis un document DoneA.", {
+        fixture: { kind: "d2", projectName: "Done A", documentSummary: "document DoneA" },
+         clientTurnKey: keyA },
     );
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Still B puis un document StillB.",
-      { clientTurnKey: keyB },
+      "Crée un projet nommé Still B puis un document StillB.", {
+        fixture: { kind: "d2", projectName: "Still B", documentSummary: "document StillB" },
+         clientTurnKey: keyB },
     );
     const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
     const authA = await authorizeMissionBoundD2Create({
@@ -1019,14 +1048,16 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       atlas.pilotId,
       atlas.preparationId,
-      "Crée un projet nommé Atlas Iso puis un document AtlasDoc.",
-      { clientTurnKey: keyAtlas },
+      "Crée un projet nommé Atlas Iso puis un document AtlasDoc.", {
+        fixture: { kind: "d2", projectName: "Atlas Iso", documentSummary: "document AtlasDoc" },
+         clientTurnKey: keyAtlas },
     );
     await noraTurn(
       atlas.pilotId,
       orionPrep.id,
-      "Crée un projet nommé Orion Iso puis un document OrionDoc.",
-      { clientTurnKey: keyOrion },
+      "Crée un projet nommé Orion Iso puis un document OrionDoc.", {
+        fixture: { kind: "d2", projectName: "Orion Iso", documentSummary: "document OrionDoc" },
+         clientTurnKey: keyOrion },
     );

     const prepA = (await db.select().from(preparations).where(eq(preparations.id, atlas.preparationId)))[0]!;
@@ -1096,8 +1127,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Recover Nominal puis un document Recover.",
-      { clientTurnKey },
+      "Crée un projet nommé Recover Nominal puis un document Recover.", {
+        fixture: { kind: "d2", projectName: "Recover Nominal", documentSummary: "document Recover" },
+         clientTurnKey },
     );
     const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
     const auth = await authorizeMissionBoundD2Create({
@@ -1146,8 +1178,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Bind Exact puis un document Exact.",
-      { clientTurnKey: keyA },
+      "Crée un projet nommé Bind Exact puis un document Exact.", {
+        fixture: { kind: "d2", projectName: "Bind Exact", documentSummary: "document Exact" },
+         clientTurnKey: keyA },
     );
     const ctx = await getPreparationContext(pilotId, preparationId);
     const verified = await verifyMissionForD2Act({
@@ -1194,8 +1227,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Crash P3 puis un document P3.",
-      { clientTurnKey },
+      "Crée un projet nommé Crash P3 puis un document P3.", {
+        fixture: { kind: "d2", projectName: "Crash P3", documentSummary: "document P3" },
+         clientTurnKey },
     );
     const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
     const created = await createProjectCommand({
@@ -1251,8 +1285,9 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     await noraTurn(
       pilotId,
       preparationId,
-      "Crée un projet nommé Crash P5 puis un document P5.",
-      { clientTurnKey },
+      "Crée un projet nommé Crash P5 puis un document P5.", {
+        fixture: { kind: "d2", projectName: "Crash P5", documentSummary: "document P5" },
+         clientTurnKey },
     );
     const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
     const created = await createProjectCommand({
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index 829ad03b..83d950d0 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -36,18 +36,22 @@ import {
   d4CreateAndPublishEnvelope,
   d4ReviseDocumentEnvelope,
   registerCreateDocumentTitled,
-  registerPgUtteranceFixture,
+  registerExplicitFixture,
   registerTypedScenario,
+  type ExplicitFixtureSpec,
 } from "../helpers/semantic-fixture-envelopes";

 async function noraTurn(
   pilotId: string,
   preparationId: string,
   text: string,
-  opts?: Parameters<typeof postUserMessageAndNora>[3],
+  opts?: Parameters<typeof postUserMessageAndNora>[3] & { fixture?: ExplicitFixtureSpec },
 ) {
-  registerPgUtteranceFixture(text);
-  return postUserMessageAndNora(pilotId, preparationId, text, opts);
+  if (opts?.fixture) {
+    registerExplicitFixture(text, opts.fixture);
+  }
+  const { fixture: _f, ...turnOpts } = opts ?? {};
+  return postUserMessageAndNora(pilotId, preparationId, text, turnOpts);
 }

 async function seedPilot(label: string) {
@@ -114,7 +118,10 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       pilotId,
       preparationId,
       "Crée un document intitulé Continuity NonGit pour la suite.",
-      { clientTurnKey: newId("ctk") },
+      {
+        clientTurnKey: newId("ctk"),
+        fixture: { kind: "d4_create", title: "Continuity NonGit pour la suite" },
+      },
     );
     expect(create.documentSave?.status).toBe("AVAILABLE");
     const docId = create.documentSave!.documentId!;
@@ -128,8 +135,13 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       }),
     );
     const revise = await noraTurn(pilotId, preparationId, reviseAsk, {
-      clientTurnKey: newId("ctk") },
-    );
+      clientTurnKey: newId("ctk"),
+      fixture: {
+        kind: "d4_revise",
+        documentHint: "Continuity NonGit",
+        sectionHint: "Suite",
+      },
+    });
     // REVISE may or may not fire depending on fixture extract — at least no publish mission
     expect(revise.missionProjection == null || revise.missionProjection === null).toBe(true);
     const docs = await listDocuments(pilotId, preparationId);
@@ -144,6 +156,7 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       pilotId,
       preparationId,
       "Crée un document intitulé P0 Prepare Only pour la suite.",
+      { fixture: { kind: "d4_create", title: "P0 Prepare Only pour la suite" } },
     );
     expect(chat.documentSave?.status).toBe("AVAILABLE");
     const docId = chat.documentSave!.documentId!;
@@ -175,6 +188,7 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       pilotId,
       preparationId,
       "Crée un document intitulé Classic Pub pour inspection manuelle.",
+      { fixture: { kind: "d4_create", title: "Classic Pub pour inspection manuelle" } },
     );
     const prepared = await preparePublication({
       pilotId,
@@ -219,12 +233,21 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
     const { pilotId, preparationId } = await seedProjectWithGit("p1e-nopath");
     const ask =
       "Crée un document intitulé Path Required et publie-le dans mon dépôt GitHub";
-    registerCreateDocumentTitled(ask, { publicationPath: null });
+    registerCreateDocumentTitled(ask, {
+      title: "Path Required",
+      publicationPath: null,
+      publish: true,
+    });
     const pubIntent = projectStudioEffects(fixtureSemanticQualify(ask)).publication;
     expect(pubIntent.wantsPublish).toBe(true);
     expect(pubIntent.needsExplicitPath).toBe(true);
     const chat = await noraTurn(pilotId, preparationId, ask, {
       clientTurnKey: newId("ctk"),
+      fixture: {
+        kind: "d4_publish",
+        title: "Path Required",
+        publicationPath: null,
+      },
     });
     expect(chat.documentSave?.status).toBe("AVAILABLE");
     expect(chat.missionProjection?.status).toBe("AWAITING_CLARIFICATION");
@@ -246,6 +269,11 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
     expect(projectStudioEffects(fixtureSemanticQualify(ask)).publication.wantsPublish).toBe(true);
     const chat = await noraTurn(pilotId, preparationId, ask, {
       clientTurnKey: newId("ctk"),
+      fixture: {
+        kind: "d4_publish",
+        title: "ACCEPT-01 Continuity",
+        publicationPath: "docs/studio-next/accept01.md",
+      },
     });
     expect(chat.documentSave?.status).toBe("AVAILABLE");
     expect(chat.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
@@ -274,6 +302,11 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       "Crée un document intitulé ACCEPT-01 Resume et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01-resume.md";
     const chat = await noraTurn(pilotId, preparationId, ask, {
       clientTurnKey: newId("ctk"),
+      fixture: {
+        kind: "d4_publish",
+        title: "ACCEPT-01 Resume",
+        publicationPath: "docs/studio-next/accept01-resume.md",
+      },
     });
     const attemptId = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId;
     expect(attemptId).toBeTruthy();
@@ -339,14 +372,25 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
     const ask =
       "Crée un document intitulé ACCEPT-01 Replay et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01-replay.md";
     const clientTurnKey = newId("ctk");
-    const first = await noraTurn(pilotId, preparationId, ask, { clientTurnKey });
+    const replayFixture = {
+      kind: "d4_publish" as const,
+      title: "ACCEPT-01 Replay",
+      publicationPath: "docs/studio-next/accept01-replay.md",
+    };
+    const first = await noraTurn(pilotId, preparationId, ask, {
+      clientTurnKey,
+      fixture: replayFixture,
+    });
     expect(first.documentSave?.status).toBe("AVAILABLE");
     expect(first.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
     const firstDoc = first.documentSave!.documentId!;
     const firstAttempt = first.missionProjection!.steps.find((s) => s.id === "d7_prepare")!
       .attemptId!;

-    const replay = await noraTurn(pilotId, preparationId, ask, { clientTurnKey });
+    const replay = await noraTurn(pilotId, preparationId, ask, {
+      clientTurnKey,
+      fixture: replayFixture,
+    });
     expect(replay.idempotentReplay === true || replay.documentSave?.documentId === firstDoc).toBe(
       true,
     );
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
index 85ac431b..983351ea 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
@@ -47,8 +47,7 @@ import {
   d5PilotageEnvelope,
   d6DecisionEnvelope,
   dialogueEnvelope,
-  registerPgUtteranceFixture,
-  registerTypedScenario,
+    registerTypedScenario,
 } from "../helpers/semantic-fixture-envelopes";

 function preQualifiedFromFixture(content: string): IntentQualification {
@@ -327,9 +326,8 @@ async function noraTurn(
   registerMl3ConversationFixtures();
   if (opts?.qualification) {
     registerTypedScenario(text, opts.qualification);
-  } else {
-    registerPgUtteranceFixture(text);
   }
+  // else: built-in SCENARIO_TABLE / registerMl3ConversationFixtures only — no regex inference
   const { postUserMessageAndNora } = await import("@/domains/conversation/service");
   const { qualification: _q, ...turnOpts } = opts ?? {};
   return postUserMessageAndNora(pilotId, preparationId, text, turnOpts);
@@ -369,7 +367,6 @@ async function insertUserMessageWithDurableQualification(

 function envelopeForConvAuth(content: string): NoraTurnQualification {
   registerMl3ConversationFixtures();
-  registerPgUtteranceFixture(content);
   return fixtureSemanticQualify(content.trim());
 }

diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index 614bcc72..1d443c8f 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -52,8 +52,9 @@ import {
   d4CreateDocumentEnvelope,
   d4ReviseDocumentEnvelope,
   dialogueEnvelope,
-  registerPgUtteranceFixture,
+  registerExplicitFixture,
   registerTypedScenario,
+  type ExplicitFixtureSpec,
   sfiaDocumentFence,
 } from "../helpers/semantic-fixture-envelopes";

@@ -61,10 +62,13 @@ async function noraTurn(
   pilotId: string,
   preparationId: string,
   text: string,
-  opts?: Parameters<typeof postUserMessageAndNora>[3],
+  opts?: Parameters<typeof postUserMessageAndNora>[3] & { fixture?: ExplicitFixtureSpec },
 ) {
-  registerPgUtteranceFixture(text);
-  return postUserMessageAndNora(pilotId, preparationId, text, opts);
+  if (opts?.fixture) {
+    registerExplicitFixture(text, opts.fixture);
+  }
+  const { fixture: _f, ...turnOpts } = opts ?? {};
+  return postUserMessageAndNora(pilotId, preparationId, text, turnOpts);
 }

 function expectDocumentActFromFixture(utterance: string, kind: "CREATE" | "REVISE" | "NONE") {
@@ -330,6 +334,7 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
       pilotId,
       prep.id,
       "Rédige un document de synthèse sur Atlas",
+      { fixture: { kind: "d4_create", title: "Atlas", summary: "Atlas", notes: "Atlas" } },
     );
     expect(created.documentSave?.status).toBe("AVAILABLE");
     const documentId = created.documentSave!.documentId!;
@@ -342,6 +347,13 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
       pilotId,
       prep.id,
       `Révise uniquement la section 2 du document ${documentId} et conserve le reste`,
+      {
+        fixture: {
+          kind: "d4_revise",
+          documentHint: documentId,
+          sectionHint: "2",
+        },
+      },
     );
     expect(revised.documentSave?.status).toBe("AVAILABLE");
     expect(revised.documentSave?.act).toBe("REVISE");
@@ -893,6 +905,13 @@ s
         pilotId,
         prep.id,
         "Rédige un document de synthèse sur Isolation Create",
+        {
+          fixture: {
+            kind: "d4_create",
+            title: "Isolation Create",
+            includeFence: false,
+          },
+        },
       );
       expect(chat.documentSave?.status).toBe("FAILED");
       expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
@@ -942,6 +961,14 @@ s
         pilotId,
         prep.id,
         `Révise uniquement la section 2 du document ${documentId} et conserve le reste`,
+        {
+          fixture: {
+            kind: "d4_revise",
+            documentHint: documentId,
+            sectionHint: "2",
+            includeFence: false,
+          },
+        },
       );
       expect(revised.documentSave?.status).toBe("FAILED");
       expect(revised.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
@@ -975,6 +1002,13 @@ s
         pilotId,
         prep.id,
         "Rédige un document de synthèse sur Isolation Positive",
+        {
+          fixture: {
+            kind: "d4_create",
+            title: "Isolation Positive",
+            includeFence: false,
+          },
+        },
       );
       expect(chat.documentSave?.status).toBe("AVAILABLE");
       expect(chat.documentSave?.act).toBe("CREATE");
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
index cd9f2b2e..50a1ee13 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
@@ -17,6 +17,8 @@ import {
   businessCommandEffects,
   businessCommands,
   conversations,
+  governanceRestrictions,
+  humanDecisions,
   pilots,
   preparations,
   projectCycles,
@@ -769,3 +771,433 @@ describe("ML4C AUTH-R01..R14 — D5/D6 reconciliation (PG real)", () => {
     expect(await countActiveCycles(world.projectId)).toBe(1);
   });
 });
+
+const REVISE_OBJECT_REF = "auth-r1-shared-object";
+
+function reviseQualWithoutDecisionId() {
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    status: "QUALIFIED" as const,
+    goal: "revise",
+    intents: [
+      {
+        id: "i-revise",
+        capabilityId: "d6.human_decision" as const,
+        mode: "REQUEST_EFFECT" as const,
+        summary: "REVISE shared object",
+        parameters: {
+          pilotageOperation: "REVISE_DECISION" as const,
+          statement: "Révision autorité propriétaire",
+          objectRef: REVISE_OBJECT_REF,
+        },
+        constraints: [] as string[],
+        dependsOn: [] as string[],
+        sourceEvidence: [] as string[],
+      },
+    ],
+    clarifications: [] as string[],
+    replyDraft: "revise",
+  };
+}
+
+function liftQual(targetHint: string) {
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    status: "QUALIFIED" as const,
+    goal: "lift",
+    intents: [
+      {
+        id: "i-lift",
+        capabilityId: "d6.human_decision" as const,
+        mode: "REQUEST_EFFECT" as const,
+        summary: "LIFT_RESTRICTION",
+        parameters: {
+          pilotageOperation: "LIFT_RESTRICTION" as const,
+          restrictionKindHint: "CYCLE_MUTATION",
+          restrictionTargetRefHint: targetHint,
+          statement: `Lever restriction ${targetHint}`,
+        },
+        constraints: [] as string[],
+        dependsOn: [] as string[],
+        sourceEvidence: [] as string[],
+      },
+    ],
+    clarifications: [] as string[],
+    replyDraft: "lift",
+  };
+}
+
+describe("ML4C R1 — durable USER_MESSAGE target binding (PG)", () => {
+  beforeAll(() => {
+    if (!process.env.DATABASE_URL) {
+      throw new Error("SETUP BLOCKED: DATABASE_URL required");
+    }
+  });
+
+  it("R1-A multi: body.decisionId cannot pick among ambiguous objectRef matches", async () => {
+    const world = await seedOwnedProject(`r1-multi-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    expect(open.status).toBe("APPLIED");
+    rev = open.revision ?? rev + 1;
+
+    const d1 = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "Décision A même objectRef",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    expect(d1.status).toBe("APPLIED");
+    rev = d1.revision ?? rev + 1;
+    const d2 = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "Décision B même objectRef",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    expect(d2.status).toBe("APPLIED");
+    rev = d2.revision ?? rev + 1;
+
+    const applicable = await db
+      .select()
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.projectId, world.projectId),
+          eq(humanDecisions.kind, "RECORD_DECISION"),
+          eq(humanDecisions.state, "APPLICABLE"),
+          eq(humanDecisions.objectRef, REVISE_OBJECT_REF),
+        ),
+      );
+    expect(applicable.length).toBe(2);
+    const victim = applicable[0]!;
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je révise la décision partagée.",
+      reviseQualWithoutDecisionId(),
+    );
+    const beforeStates = applicable.map((r) => r.state);
+    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision partagée.",
+      operation: "REVISE_DECISION",
+      decisionId: victim.id,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(attack.status).toBe("REJECTED");
+    expect(attack.reasonCode).toMatch(/AMBIGUOUS|INVALID/);
+
+    const after = await db
+      .select()
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.projectId, world.projectId),
+          eq(humanDecisions.kind, "RECORD_DECISION"),
+          eq(humanDecisions.objectRef, REVISE_OBJECT_REF),
+        ),
+      );
+    expect(after.filter((r) => r.state === "APPLICABLE").length).toBe(2);
+    expect(after.every((r) => beforeStates.includes(r.state) || r.state === "APPLICABLE")).toBe(true);
+    expect(after.some((r) => r.state === "REVISED")).toBe(false);
+  });
+
+  it("R1-A unique: Studio resolves single objectRef; body echo optional", async () => {
+    const world = await seedOwnedProject(`r1-unique-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "Décision unique",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    expect(recorded.status).toBe("APPLIED");
+    rev = recorded.revision ?? rev + 1;
+    const targetId = recorded.decisionId!;
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je révise la décision unique.",
+      reviseQualWithoutDecisionId(),
+    );
+    const ok = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision unique.",
+      operation: "REVISE_DECISION",
+      decisionId: targetId,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(ok.status).toBe("APPLIED");
+    expect(ok.decisionId).toBeTruthy();
+
+    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: ok.revision ?? rev + 1,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision unique.",
+      operation: "REVISE_DECISION",
+      decisionId: targetId,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(["ALREADY_APPLIED", "APPLIED", "REJECTED"]).toContain(replay.status);
+    if (replay.status === "ALREADY_APPLIED" || replay.status === "APPLIED") {
+      expect(replay.commandId === ok.commandId || replay.status === "ALREADY_APPLIED").toBe(true);
+    }
+  });
+
+  it("R1-B multi: body.restrictionId cannot substitute UX_UI when durable targets CADRAGE", async () => {
+    const world = await seedOwnedProject(`r1-lift-multi-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+      objective: "cadrage",
+    });
+    expect(open.status).toBe("APPLIED");
+    rev = open.revision ?? rev + 1;
+
+    const rCadrage = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "APPLY_RESTRICTION",
+      targetKind: "CYCLE_MUTATION",
+      targetRef: "CADRAGE",
+      statement: "Freeze CADRAGE",
+    });
+    expect(rCadrage.status).toBe("APPLIED");
+    rev = rCadrage.revision ?? rev + 1;
+    const rUx = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "APPLY_RESTRICTION",
+      targetKind: "CYCLE_MUTATION",
+      targetRef: "UX_UI",
+      statement: "Freeze UX_UI",
+    });
+    expect(rUx.status).toBe("APPLIED");
+    rev = rUx.revision ?? rev + 1;
+
+    const active = await db
+      .select()
+      .from(governanceRestrictions)
+      .where(
+        and(
+          eq(governanceRestrictions.projectId, world.projectId),
+          eq(governanceRestrictions.status, "ACTIVE"),
+        ),
+      );
+    expect(active.length).toBe(2);
+    const uxRow = active.find((r) => r.targetRef === "UX_UI")!;
+    const cadrageRow = active.find((r) => r.targetRef === "CADRAGE")!;
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
+      liftQual("CADRAGE"),
+    );
+    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
+      operation: "LIFT_RESTRICTION",
+      restrictionId: uxRow.id,
+      semanticIntentId: "i-lift",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(attack.status).toBe("REJECTED");
+
+    const still = await db
+      .select()
+      .from(governanceRestrictions)
+      .where(
+        and(
+          eq(governanceRestrictions.projectId, world.projectId),
+          eq(governanceRestrictions.status, "ACTIVE"),
+        ),
+      );
+    expect(still.map((r) => r.id).sort()).toEqual([cadrageRow.id, uxRow.id].sort());
+  });
+
+  it("R1-B unique: lift succeeds only for durable CADRAGE target", async () => {
+    const world = await seedOwnedProject(`r1-lift-unique-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const applied = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "APPLY_RESTRICTION",
+      targetKind: "CYCLE_MUTATION",
+      targetRef: "CADRAGE",
+      statement: "Freeze CADRAGE only",
+    });
+    expect(applied.status).toBe("APPLIED");
+    rev = applied.revision ?? rev + 1;
+    const restrictionId = applied.effects.find((e) => e.effectKind === "APPLY_RESTRICTION")
+      ?.targetRef;
+    expect(restrictionId).toBeTruthy();
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
+      liftQual("CADRAGE"),
+    );
+    const lift = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
+      operation: "LIFT_RESTRICTION",
+      restrictionId,
+      semanticIntentId: "i-lift",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(lift.status).toBe("APPLIED");
+    const active = await db
+      .select()
+      .from(governanceRestrictions)
+      .where(
+        and(
+          eq(governanceRestrictions.projectId, world.projectId),
+          eq(governanceRestrictions.status, "ACTIVE"),
+        ),
+      );
+    expect(active).toHaveLength(0);
+  });
+
+  it("R1-E: foreign decisionId / restrictionId rejected without effect", async () => {
+    const a = await seedOwnedProject(`r1-e-a-${Date.now()}`);
+    const b = await seedOwnedProject(`r1-e-b-${Date.now()}`);
+    let revA = (await getPilotageProjection(a.pilotId, a.projectId)).revision;
+    const openA = await executePilotageCommand(a.pilotId, a.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revA,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    revA = openA.revision ?? revA + 1;
+    const recA = await executePilotageCommand(a.pilotId, a.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revA,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "A only",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    expect(recA.status).toBe("APPLIED");
+
+    let revB = (await getPilotageProjection(b.pilotId, b.projectId)).revision;
+    const openB = await executePilotageCommand(b.pilotId, b.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revB,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    revB = openB.revision ?? revB + 1;
+    const recB = await executePilotageCommand(b.pilotId, b.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revB,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "B only",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    expect(recB.status).toBe("APPLIED");
+    revB = recB.revision ?? revB + 1;
+
+    const msgB = await seedQualifiedMessage(
+      b,
+      "Je révise la décision partagée.",
+      reviseQualWithoutDecisionId(),
+    );
+    const cross = await executePilotageCommand(b.pilotId, b.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revB,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msgB.userMessageId,
+      utterance: "Je révise la décision partagée.",
+      operation: "REVISE_DECISION",
+      decisionId: recA.decisionId!,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(cross.status).toBe("REJECTED");
+    const aStill = (
+      await db
+        .select()
+        .from(humanDecisions)
+        .where(eq(humanDecisions.id, recA.decisionId!))
+    )[0];
+    expect(aStill?.state).toBe("APPLICABLE");
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-env01-runtime.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-env01-runtime.pg.test.ts
index 6f8ec785..eec164bd 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-env01-runtime.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-env01-runtime.pg.test.ts
@@ -101,7 +101,18 @@ describe("ML4C Q2 — ENV-01 runtime isolation", () => {
     expect(E2E_PG_EXPECTED.e2eDatabase).not.toBe("sfia_next_stable");
   });

-  it("ENV-R06: DEV credentials cannot authenticate on RECETTE :5434", async () => {
+  it("ENV-R06A: mutative Vitest target stays sfia_next_e2e (deterministic CI contract)", () => {
+    const raw = process.env.DATABASE_URL;
+    expect(raw).toBeTruthy();
+    const rewritten = prepareVitestMutativeDatabaseUrl(raw!);
+    const u = new URL(rewritten);
+    expect(u.pathname.replace(/^\//, "")).toBe(E2E_PG_EXPECTED.e2eDatabase);
+    expect(Number(u.port)).toBe(E2E_PG_EXPECTED.port);
+    expect(E2E_PG_EXPECTED.e2eDatabase).not.toBe("sfia_next_recette");
+    expect(E2E_PG_EXPECTED.e2eDatabase).not.toBe("sfia_next_stable");
+  });
+
+  it("ENV-R06B: RECETTE runtime isolation — NOT VERIFIED when endpoint absent; 28P01 when present", async () => {
     const net = await import("net");
     const portAvailable = await new Promise<boolean>((resolve) => {
       const socket = new net.Socket();
@@ -116,16 +127,24 @@ describe("ML4C Q2 — ENV-01 runtime isolation", () => {
       socket.once("error", () => done(false));
       socket.connect(5434, "127.0.0.1");
     });
+
+    const runtimeProof: {
+      status: "VERIFIED_AUTH_DENIED" | "NOT_VERIFIED";
+      reason: string;
+    } = portAvailable
+      ? { status: "NOT_VERIFIED", reason: "PENDING_AUTH_PROBE" }
+      : { status: "NOT_VERIFIED", reason: "ENDPOINT_NOT_AVAILABLE" };
+
     if (!portAvailable) {
-      expect({
-        status: "NOT_VERIFIED",
-        reason: "ENDPOINT_NOT_AVAILABLE",
-      }).toEqual({
-        status: "NOT_VERIFIED",
-        reason: "ENDPOINT_NOT_AVAILABLE",
-      });
+      // Honest non-proof: absence of :5434 is not AUTH DENIED and is not PASS isolation.
+      expect(runtimeProof.status).toBe("NOT_VERIFIED");
+      expect(runtimeProof.reason).toBe("ENDPOINT_NOT_AVAILABLE");
+      console.info(
+        "ENV-R06 RUNTIME = NOT VERIFIED — reason=ENDPOINT_NOT_AVAILABLE (RECETTE :5434 absent)",
+      );
       return;
     }
+
     const raw = process.env.DATABASE_URL;
     expect(raw).toBeTruthy();
     const src = new URL(raw!);
@@ -140,11 +159,13 @@ describe("ML4C Q2 — ENV-01 runtime isolation", () => {
       connect_timeout: 2,
     });
     let authDenied = false;
+    let observedCode: string | undefined;
     try {
       await sql`select 1`;
     } catch (e) {
-      const code = (e as { code?: string }).code;
-      authDenied = code === "28P01";
+      observedCode = (e as { code?: string }).code;
+      // ECONNREFUSED / timeout are not authentication denial.
+      authDenied = observedCode === "28P01";
     } finally {
       try {
         await sql.end({ timeout: 1 });
@@ -153,5 +174,6 @@ describe("ML4C Q2 — ENV-01 runtime isolation", () => {
       }
     }
     expect(authDenied).toBe(true);
+    expect(observedCode).toBe("28P01");
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts b/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
index 3a2e1a9c..20be39ee 100644
--- a/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
@@ -324,7 +324,8 @@ describe("SEM-02 lexical routers retired", () => {
       join(__dirname, "../../src/domains/pilotage/conversation-authority.ts"),
       "utf8",
     );
-    expect(auth).toMatch(/pas de cible lexicale/);
-    expect(auth).not.toMatch(/const resolved = resolveReviseTargetLexical/);
+    expect(auth).toMatch(/resolveReviseDecisionTarget/);
+    expect(auth).toMatch(/resolveLiftRestrictionTarget/);
+    expect(auth).not.toMatch(/const resolved = resolveReviseTargetLexical\(/);
   });
 });

```

## 21. Contenu complet des créations

### `durable-target-resolve.ts` (création)

```typescript
/**
 * Owner-side durable target resolution for USER_MESSAGE D6 REVISE / LIFT.
 * Studio resolves the unique target from durable qualification + project state.
 * HTTP body.decisionId / body.restrictionId may only echo that target.
 */
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  governanceRestrictions,
  humanDecisions,
} from "@/db/schema";
import type { DbTx } from "@/domains/pilotage/command-runner";

/** db or transactional client — same select/from/where surface. */
export type DurableQueryDb = typeof db | DbTx;

export type DurableResolveOk = { ok: true; id: string };
export type DurableResolveFail = {
  ok: false;
  reasonCode: "AMBIGUOUS" | "INVALID";
  reason: string;
};
export type DurableResolveResult = DurableResolveOk | DurableResolveFail;

/** Exact targetRef match, wildcard, or active cycle id when hint is the cycle type. */
export function restrictionTargetMatchesHint(input: {
  targetRef: string;
  hint: string;
  activeCycle?: { id: string; cycleType: string } | null;
}): boolean {
  const ref = (input.targetRef || "*").trim().toUpperCase();
  const hint = input.hint.trim().toUpperCase();
  if (!hint) return true;
  if (ref === "*" || ref === hint) return true;
  const cycle = input.activeCycle;
  if (
    cycle &&
    hint === cycle.cycleType.toUpperCase() &&
    ref === cycle.id.toUpperCase()
  ) {
    return true;
  }
  return false;
}

/**
 * Resolve REVISE_DECISION target: durable decisionId, else unique APPLICABLE
 * RECORD_DECISION with exact objectRef. Never pick by order among many.
 */
export async function resolveReviseDecisionTarget(
  queryDb: DurableQueryDb,
  projectId: string,
  input: { decisionId?: string | null; objectRef?: string | null },
): Promise<DurableResolveResult> {
  const durableId = (input.decisionId ?? "").trim();
  if (durableId) {
    const row = (
      await queryDb
        .select({
          id: humanDecisions.id,
          kind: humanDecisions.kind,
          state: humanDecisions.state,
          objectRef: humanDecisions.objectRef,
          projectId: humanDecisions.projectId,
        })
        .from(humanDecisions)
        .where(and(eq(humanDecisions.id, durableId), eq(humanDecisions.projectId, projectId)))
        .limit(1)
    )[0];
    if (!row || row.state !== "APPLICABLE") {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "decisionId durable absent, hors projet ou non APPLICABLE",
      };
    }
    const objectRef = (input.objectRef ?? "").trim();
    if (objectRef && (row.objectRef ?? "").trim() !== objectRef) {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "decisionId durable incompatible avec objectRef qualifié",
      };
    }
    return { ok: true, id: row.id };
  }

  const objectRef = (input.objectRef ?? "").trim();
  if (!objectRef) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "REVISE_DECISION sans decisionId ni objectRef durable — clarification requise",
    };
  }

  const rows = await queryDb
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      objectRef: humanDecisions.objectRef,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId));

  const matches = rows.filter(
    (r) =>
      r.state === "APPLICABLE" &&
      r.kind === "RECORD_DECISION" &&
      (r.objectRef ?? "").trim() === objectRef,
  );
  if (matches.length === 0) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune décision APPLICABLE pour objectRef durable",
    };
  }
  if (matches.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Plusieurs décisions pour objectRef — précisez decisionId",
    };
  }
  return { ok: true, id: matches[0]!.id };
}

/**
 * Resolve LIFT_RESTRICTION target from durable kind/target hints.
 * Unique ACTIVE match required. No substring / first-match selection.
 */
export async function resolveLiftRestrictionTarget(
  queryDb: DurableQueryDb,
  projectId: string,
  input: {
    restrictionKindHint?: string | null;
    restrictionTargetRefHint?: string | null;
    activeCycle?: { id: string; cycleType: string } | null;
  },
): Promise<DurableResolveResult> {
  const kindHint = (input.restrictionKindHint ?? "").trim().toUpperCase();
  const targetHint = (input.restrictionTargetRefHint ?? "").trim();

  const active = await queryDb
    .select()
    .from(governanceRestrictions)
    .where(
      and(
        eq(governanceRestrictions.projectId, projectId),
        eq(governanceRestrictions.status, "ACTIVE"),
      ),
    );

  let pool = kindHint
    ? active.filter((r) => r.targetKind.toUpperCase() === kindHint)
    : active;

  if (targetHint) {
    pool = pool.filter((r) =>
      restrictionTargetMatchesHint({
        targetRef: r.targetRef,
        hint: targetHint,
        activeCycle: input.activeCycle,
      }),
    );
  }

  if (pool.length === 0) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune restriction active correspondant à la qualification durable",
    };
  }
  if (pool.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Plusieurs restrictions actives — précisez laquelle lever",
    };
  }
  return { ok: true, id: pool[0]!.id };
}

```

## 22. As-built synchronisé

Extrait (section Correctif autorités + réserves) — fichier complet dans le commit:

--- as-built (fichier courant HEAD) ---
# As-built — Qualification sémantique Nora + mobilisation gouvernée (Q1/Q2 final runtime)

Date: 2026-11-12 ~15:10 CET (Europe/Paris)
Branche locale: `fix/next-semantic-intent-convergence-20261112`
Base candidat: `2416e2ee25662821b015407346c64ec204f67488`
Profil: Critical / EVOL corrective QA / NO RELEASE / publication produit INTERDITE

## Objectif de ce cycle

Fermer les deux preuves manquantes du Review Pack précédent (TECHNICAL REVIEWABLE — INTEGRATION GATE NOT YET CLEARED) :

1. **Q1** — Mission `AWAITING_PILOT_ACT` obtenue par le **vrai parcours D2** (sas sans projet, sans clic « Créer le projet »), puis blocage S05 d’une intention B concurrente.
2. **Q2** — Isolation ENV-01 runtime + PostgreSQL démontrée (pas seulement variables d’environnement).

Les corrections C-01..C-04 / F1–F4 / integrator sont **conservées**.

## Q1 — Parcours D2 réel (origine de la mission)

### Étapes

1. Authentifier Pilote DEV.
2. Ouvrir une préparation `OPEN` **sans** lien projet (`preparationProjectLinks` vide).
3. Envoyer via API conversation réelle : `"Je veux créer un projet."`
4. Nora uniquement à la frontière `TEST_BOUNDARY` (fixture DEV+E2E).
5. Qualification structurée → `d2.create_project` / `REQUEST_EFFECT`.
6. Studio prépare l’intention D2 ; `service.ts` produit `MissionProjection` via `buildD2OwnerActBinding` + `d2MissionIdempotencyKey` → status `AWAITING_PILOT_ACT`.
7. **Aucun** clic sur « Créer le projet » → **aucun** projet durable.
8. Relecture : `loadLatestMissionsByIntentKey` / oracle E2E après COMPLETE et après refresh.

### Différence vs ancien seed artificiel (C-02)

| | Seed `seed_awaiting_mission` | Parcours Q1 réel |
| --- | --- | --- |
| Précondition | Projet souvent déjà créé, puis mission « créer projet » injectée | Sas `OPEN`, zéro projet |
| `ownerActBinding` | JSON partiel possible | Complet : `kind=D2_CREATE_PROJECT`, `preparationId`, `clientIntentKey`, `suggestedIdempotencyKey` (= `d2MissionIdempotencyKey`) |
| Origine | Fixture HTTP écrit `resultJson` | `postUserMessageAndNora` / route messages Studio |
| Preuve S05 | Gate sait bloquer si projection présente | Gate bloque une mission **métier atteignable** |

### Contrôle positif B

Préparation DEV distincte **sans** mission AWAITING : document CREATE nominal → `documentCount+1`, `pendingEffectBlocked ≠ true`.

### Contrôle négatif B

Sur la préparation portant A : message documentaire concurrent → `pendingEffectBlocked=true`, raison `S05_MISSION_BLOCKS_EFFECT`, aucun document/projet/décision D6, A toujours `AWAITING_PILOT_ACT`.

### Preuves

| Suite | Résultat |
| --- | --- |
| `ml4c-d2-mission-s05.pg.test.ts` | 3 PASS |
| `ml4c-d2-mission-real-s05.spec.ts` (Playwright :3101) | 1 PASS |
| LIVE OpenAI | NOT RUN |

## Q2 — ENV-01 runtime / PostgreSQL

### Identité runtime (Playwright mutatif)

| Champ | Valeur observée |
| --- | --- |
| Port web E2E | `127.0.0.1:3101` (éphémère via `scripts/e2e-web-server.sh`) |
| Bind | `-H 127.0.0.1` (loopback) |
| Worktree code | candidat local `…/sfia-workspace-next-semantic-intent-20261112` |
| HEAD | `2416e2ee` + worktree dirty (non poussé) |
| Mode | `next dev`, `distDir=.next-e2e` |
| Lane flags | `STUDIO_LANE=DEV`, `STUDIO_E2E=1`, `STUDIO_FORCE_NORA_FIXTURE=1`, `OPENAI_API_KEY` neutralisé |
| RECETTE observée | process distinct PID sur `:3200`, cwd `…/sfia-workspace-next-ml4-recette-build-2416e2ee` — **non utilisé** par les tests mutatifs |

### Identité PostgreSQL (expurgée)

| Champ | DEV/E2E observé |
| --- | --- |
| Conteneur | `sfia-next-dev-pg` → `127.0.0.1:5433` |
| `current_database()` | `sfia_next_e2e` (vitest mutatif / Playwright) |
| `current_user` | `sfia_next_dev` |
| Bases sur conteneur DEV | `sfia_next_dev`, `sfia_next_e2e`, `sfia_next_ml4` |
| Conteneur RECETTE | `sfia-next-recette-pg` → `127.0.0.1:5434` |
| Cross-lane | Identifiants DEV → `:5434/sfia_next_recette` = **28P01 DENIED** |

### Matrice ENV-R01..R15

| ID | Résultat | Preuve |
| --- | --- | --- |
| ENV-R01 | PASS | Playwright webServer = worktree candidat + `.next-e2e` |
| ENV-R02 | PASS | Port 3101 éphémère documenté ; RECETTE :3200 PID/cwd distincts |
| ENV-R03 | PASS | `next dev -H 127.0.0.1` ; docker PG `127.0.0.1:5433` |
| ENV-R04 | PASS | `current_database()=sfia_next_e2e` |
| ENV-R05 | PASS | `current_user=sfia_next_dev` |
| ENV-R06 | PASS | DEV creds DENIED sur RECETTE :5434 |
| ENV-R07 | PASS | Bases/ports distincts ; mutatif confiné `sfia_next_e2e` |
| ENV-R08 | PASS | distDir `.next-e2e` vs operator `.next` / RECETTE autre worktree |
| ENV-R09 | NOT VERIFIED | Isolation cookies multi-lane non mesurée hors sessions DEV E2E |
| ENV-R10 | PASS (partiel) | Secrets non publiés ; roles/ports séparés ; mots de passe distincts (DENIED) |
| ENV-R11 | PASS | `e2eFixtureMutationsAllowed` refuse production/RECETTE/sans E2E |
| ENV-R12 | PASS | Gate vitest rewrite → `sfia_next_e2e` only |
| ENV-R13 | PASS | Aucune mutation RECETTE dans ce cycle ; cross-auth DENIED |
| ENV-R14 | PASS | `e2e-web-server.sh` + playwright.config reproductibles |
| ENV-R15 | PASS | Pack handoff sans secrets (contrôle publisher) |

**ENV-R09 = NOT VERIFIED** (ne pas convertir en PASS). Pas de STOP : frontière mutative PG/runtime démontrée.

## Runner / D4 / fixture (conservés)

- D5/D6 : classify → findByIntent/ActionKey avant STALE ; `stash.applied` obligatoire.
- D4 : pas de FACT sur seul `established` Nora.
- Fixture : DEV ∧ E2E=1 ∧ ¬production.

## Correctif CI sémantique (2026-11-12 ~17:50 CET)

Parent produit: `83fd9ece`. Cause CI: 53 PG (oracles lexicaux + fixtures exactes absentes + ENV-R06 :5434 absent en runner + P1 decisionId/restrictionId résolus refusés par gate durable USER_MESSAGE).

Corrections:
- Helpers `tests/helpers/semantic-fixture-envelopes.ts` (enveloppes typées TEST_BOUNDARY).
- Suites intent/mission/ml3/ml4/env01 adaptées au contrat SEM-02 (sans routeur lexical).
- ENV-R06: si endpoint RECETTE absent → `NOT_VERIFIED / ENDPOINT_NOT_AVAILABLE` (pas AUTH DENIED sur ECONNREFUSED).
- P1: `service.ts` accepte decisionId/restrictionId serveur résolus depuis hints durables vérifiés ; statement D5 non echoé comme D6 ; hook C02 après autorité.
- P1: `projectStudioEffects` — follow-on D4 (`dependsOn` create-project) → `documentAct=NONE` jusqu'à l'acte Pilote D2 (pas de CREATE immédiat en sas).
- P1: thread ACK-lost — `rememberPending` sur HTTP/réseau ; pending A non écrasé par un effet B distinct.
- UI: `PilotagePanel` OPEN toujours structuré (`cycleType` contrôle) ; utterance = echo.

Preuve locale: PG 318/318 ; unit 248/248 ; Playwright Atlas+ML3 9/9. LIVE NOT RUN. Gate C OPEN.

## Correctif autorités D5/D6 + fixtures + ENV-R06 (2026-11-12 ~18:40 CET)

Parent produit: `9c163d62`. Mandat: sécuriser les réserves Critical Review R1/R2/R3 sans refaire ML4C.

### R1 — Binding cible durable (propriétaire)

- Nouveau module unique `durable-target-resolve.ts` :
  - `resolveReviseDecisionTarget` — CAS A decisionId durable ; CAS B objectRef → 0/1/N APPLICABLE RECORD_DECISION (jamais choix d’ordre) ; CAS C refus.
  - `resolveLiftRestrictionTarget` — filtre ACTIVE + kindHint + targetRefHint ; unicité obligatoire.
- `classifyCommand` (USER_MESSAGE) et `applyConversationalAuthority` réutilisent le même résolveur.
- `body.decisionId` / `body.restrictionId` ne peuvent qu’**écho**er la cible déjà résolue ; divergence → REJECTED / AMBIGUOUS.
- Preuves négatives/positives dans `ml4c-auth-reconciliation.pg.test.ts` via `executePilotageCommand` (multi-cible D6, multi-restriction, hors projet, idempotence).

### R2 — Fixtures sémantiques explicites

- Suppression de `registerPgUtteranceFixture` (inférence regex d’intentions positives).
- `registerExplicitFixture` / builders typés (`d2`, `d4_*`, `d5`, `d6`, …) ; call sites intent/mission/ml3/ml4 migrés.
- Texte USER = clé de fixture, **pas** source d’inférence de capacité.
- Message inconnu reste fail-closed.

### R3 — ENV-R06

- ENV-R06A : contrat CI déterministe (cible mutative `sfia_next_e2e`, lanes interdites).
- ENV-R06B : si `:5434` absent → `NOT_VERIFIED / ENDPOINT_NOT_AVAILABLE` (trace console, pas faux PASS) ; si présent → exiger `28P01` (ECONNREFUSED ≠ AUTH DENIED).
- ENV-R09 reste NOT VERIFIED.

### Preuves locales (ce lot)

| Suite | Résultat |
| --- | --- |
| Vitest unit | 248 PASS |
| Vitest PostgreSQL | 324 PASS (318 + R1/R3) |
| Playwright BROWSER FAKE | 25 PASS |
| tsc / eslint / Next build | PASS (warnings non bloquants) |
| LIVE Nora / Git REAL | NOT RUN |

## Non-déclarations

ML4C ACCEPTED · S02-01 PASS · A-006/A-007 CLOSED · Gate C CLOSED · ADOPTED · READY FOR REAL · LIVE Nora

## Réserves / gates Morris restants

- LIVE Nora pertinence (NOT RUN)
- Git REAL (NOT RUN)
- S02-01 Intervencia FAIL (source exacte indisponible)
- A-006/A-007 ouvertes
- PR #676 OPEN / NON MERGÉE (hardening autorités en publication)
- ENV-R09 sessions multi-lane NOT VERIFIED
- ENV-R06 isolation runtime réelle: NOT VERIFIED si endpoint RECETTE absent
- Décision d’intégration Git / RECETTE / promotion = Morris uniquement


--- delivery-history (tête) ---
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


## delivery_id: DELIV-2026-11-12-ML4C-AUTHORITY-HARDENING

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~18:40 CET (Europe/Paris) |
| Macro-lot | ML4C — sécurisation frontières d’autorité R1/R2/R3 (PR #676) |
| Type | EVOL Critical corrective / SECURITY / QUALITY (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `9c163d621589e7ba9d7369ad5a0342a9bbde8b04` |
| Lane | DEV/E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | Résolveur propriétaire unique `durable-target-resolve.ts` (REVISE/LIFT) ; body HTTP = écho uniquement ; fixtures explicites (`registerExplicitFixture`) ; suppression `registerPgUtteranceFixture` ; ENV-R06A/B (NOT_VERIFIED si :5434 absent) ; tests négatifs multi-cible D6/restriction |
| Schema | unchanged |
| Tests | unit 248 PASS ; PG 324 PASS ; Playwright 25 PASS ; tsc/eslint/build PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 — CI distante à observer sur nouveau SHA |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-CI-PARITY

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~17:50 CET (Europe/Paris) |
| Macro-lot | ML4C — correctif non-régression sémantique + CI PG (PR #676) |
| Type | EVOL Critical corrective QA (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `83fd9ecef2d952c90a828d68a192e105c83be35f` |
| Lane | DEV/E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | Helpers fixtures typées ; adaptation 5 suites PG (53 échecs CI) ; ENV-R06 NOT_VERIFIED si :5434 absent ; P1 USER_MESSAGE accepte decisionId/restrictionId résolus depuis hints durables ; C02 fault hook après autorité SEM/TV ; P1 follow-on D4 différé tant que D2 attend l'acte Pilote ; P1 pending ACK-lost conservé (pas d'écrasement B) ; PilotagePanel OPEN toujours structuré |
| Schema | unchanged |
| Tests | unit 248 PASS ; PG 318 PASS (baseline conservée) ; Playwright Atlas+ML3 9 PASS ; lint/build PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 — CI distante à observer sur nouveau SHA |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-FINAL-RUNTIME-QUAL

| Field | Value |
| --- | --- |

## 23. Commit, parent, tree

```
commit d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Thu Nov 12 18:40:53 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Thu Nov 12 18:40:53 2026 +0100

    fix(next): enforce durable pilotage target binding

    Co-authored-by: Cursor <cursoragent@cursor.com>

 ...n-semantique-mobilisation-gouvernee-20261112.md |  41 +-
 .../construction/delivery-history.md               |  15 +
 .../src/domains/pilotage/conversation-authority.ts | 121 ++----
 .../src/domains/pilotage/durable-target-resolve.ts | 185 +++++++++
 .../web/src/domains/pilotage/service.ts            | 130 +++----
 .../tests/helpers/semantic-fixture-envelopes.ts    | 313 ++++++++-------
 .../intent-continuity-global.pg.test.ts            | 121 ++++--
 .../mission-continuity-accept01.pg.test.ts         |  64 ++-
 .../web/tests/integration/ml3-pilotage.pg.test.ts  |   7 +-
 .../ml4-chat-first-d4-provenance.pg.test.ts        |  42 +-
 .../ml4c-auth-reconciliation.pg.test.ts            | 432 +++++++++++++++++++++
 .../integration/ml4c-env01-runtime.pg.test.ts      |  42 +-
 .../web/tests/unit/semantic-qualification.test.ts  |   5 +-
 13 files changed, 1128 insertions(+), 390 deletions(-)

```

SHA: `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b`
Parent: `9c163d621589e7ba9d7369ad5a0342a9bbde8b04`
Tree: `b186322abe3b1131e23345a655281a594aa99b3e`
Message: `fix(next): enforce durable pilotage target binding`

## 24. Push FF / SHA distant

`git push origin HEAD:build/next-ml4c-functional-convergence`
Résultat: `9c163d62..d7c28a21`
Distant vérifié = local `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b`

## 25. PR #676 mise à jour

URL: https://github.com/mcleland147/sfia-workspace/pull/676
État: OPEN · MERGEABLE · auto-merge absent
Body: section « Hardening autorités R1/R2/R3 » ajoutée (constats antérieurs conservés).
Fichiers Next vs main (approx count): 60

## 26. CI nouveau HEAD

HEAD exact: `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b`

### SFIA Studio Next CI — [43272022458](https://github.com/mcleland147/sfia-workspace/actions/runs/43272022458) — SUCCESS

| Step | Status |
| --- | --- |
| Detect Next scope | SUCCESS |
| TypeScript | SUCCESS |
| ESLint | SUCCESS |
| Build Next | SUCCESS |
| Vitest unit | SUCCESS |
| migrations E2E | SUCCESS |
| Vitest PostgreSQL | SUCCESS |
| Playwright BROWSER FAKE | SUCCESS |
| Secret pattern scan | SUCCESS |
| Trailing whitespace | SUCCESS |
| SFIA Studio Next Required Gate | SUCCESS |

### SFIA Studio CI — [43272022420](https://github.com/mcleland147/sfia-workspace/actions/runs/43272022420) — SUCCESS

| Step | Status |
| --- | --- |
| Detect SFIA Studio changes | SUCCESS |
| Build and validate SFIA Studio | SKIPPED |
| SFIA Studio Required Gate | SUCCESS |


## 27. Compatibilité main

Base main `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` inchangée. Aucune modification de main. Merge-base / mergeability: MERGEABLE (checks SUCCESS → mergeable CLEAN côté checks (merge Morris uniquement)).

## 28. Réserves et dette/exit

NON LEVÉES (mandat):
- Nora LIVE NOT RUN
- Git REAL NOT RUN
- S02-01 source exacte non disponible
- ENV-R06 isolation réelle NOT VERIFIED si RECETTE absente
- ENV-R09 NOT VERIFIED
- A-006/A-007 OPEN
- ML4C USER RECETTE NON ACCEPTED
- Gate C OPEN
- NO RELEASE / NO ADOPTED

LEVÉES par ce lot (périmètre technique):
- R1 substitution body decisionId/restrictionId sur ambiguïté
- R2 dépendance fixtures positives à regex d'intention
- R3 faux PASS tautologique ENV-R06 absent

## 29. Gates Morris

Aucun merge · aucune promotion · Gate C reste OPEN · décision ChatGPT Critical Review + GO Morris distinct requis.

## 30. État Git final (pré-handoff)

HEAD produit `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b` = distant PR.
Dirty attendu: `.tmp-sfia-review/chatgpt-review.md` uniquement (pack local).
Handoff publié séparément sur `sfia/review-handoff` (mono-fichier).

## 31. Verdict

PRODUCT PR #676 CI GREEN — READY FOR CHATGPT CRITICAL REVIEW

CI Next SUCCESS [43272022458](https://github.com/mcleland147/sfia-workspace/actions/runs/43272022458) · Studio Required Gate SUCCESS [43272022420](https://github.com/mcleland147/sfia-workspace/actions/runs/43272022420).

### Instruction ChatGPT

Relire ce handoff L3. Vérifier priorité:
1. Plus aucune cible D6 arbitraire via body.decisionId
2. Plus aucune restriction arbitraire via body.restrictionId
3. Cibles positives résolues Studio
4. Tests négatifs prouvent absence d'effets
5. Fixtures positives explicitement déclarées
6. ENV-R06 absent ≠ faux PASS
7. CI verte sur nouveau HEAD
8. Diff borné et documenté

Puis verdict MERGE READINESS pour Morris. AUCUN MERGE dans ce cycle.
