# SFIA Studio Next — Review Pack FULL — E2 Option B publication + réconciliation §18.2

| Champ | Valeur |
|---|---|
| Cycle | 8 — Delivery / Critical / EVOL |
| Mandat | Publication Option B + réconciliation garanties sortie E2 |
| Snapshot Option B publié | `3fe91745fc58ba6bf3e1d9d1cbc4dd427bbd1f51` / tree `9468026544719c877e74626040d1832a4b914f97` |
| Base avant publication | `53b9d452` / tree `18e8fd99` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| URL snapshot | https://github.com/mcleland147/sfia-workspace/tree/3fe91745fc58ba6bf3e1d9d1cbc4dd427bbd1f51/projects/sfia-studio-next |
| Delta réconciliation | **local non publié** (vs `3fe91745`) |
| Handoff L3 | `review(next): reconcile unified D3 outcomes and E2 exit guarantees` |
| Verdict Cursor | **READY WITH RESERVES** — sortie construction E2 proposée ; gate Morris ; E3 non engagé |

---

## 1. Mandat

1. Publier le snapshot Option B sans CI.
2. Vérifier/corriger borné §18.2 (états D4, fraîcheur, SC3, simplification).
3. Préparer le gate de sortie E2.

## 2. Git Truth / ENV / CI

| Item | Observé |
|---|---|
| HEAD avant | `53b9d452` = remote |
| Publication | commit `3fe91745` push FF → origin branche DEV |
| Tree publié | `94680265` |
| Main | `997897fd` inchangé |
| PR ouverte | aucune |
| CI workflows | push **main only** (next-ci, studio-ci, interv360) — **aucune CI observée** sur push DEV |
| RECETTE | worktree `e8e6e069` préservé ; ports 3200/5434 |
| DEV/E2E | :5433 ; `sfia_next_e2e` + `sfia_next_dev` OK |
| Staged post-pub | 0 ; dirty = delta réconciliation + `.tmp-sfia-review/` |

**ENV ROUTING COMPLETE**

## 3. ARCH-01…05

Préservées. Pas de nouvel orchestrateur / persistance / agent.

## 4. Publication (Bloc 1)

Fichiers publiés dans `3fe91745` :
- `qualified-effect-conduction.ts` (création)
- `conversation/service.ts`
- tests unit + PG unified
- as-built / delivery-history / registre

Commit message : `feat(next): publish unified D3 intent conduction`

Code publié consultable sur GitHub au SHA ci-dessus — **non recopié** ici.

## 5. Garanties §18.2 — confirmées / corrigées

| Garantie | Verdict | Action |
|---|---|---|
| 2.1 États D4 non exécutés | **Défaut confirmé** puis **corrigé** | `TurnResult.knowledgeEffects[]` (motif, reasonCode, attempted=false, pas de mutation fictive) ; restitution métier ; distinct NO_PROJECT ≠ OWNERSHIP_LOST |
| 2.2 Fraîcheur | **Défaut partiel confirmé** puis **corrigé borné** | rewrite intent→`subj_*` cross-wave ; gate `STALE_OR_UNRESOLVED_REF` ; owners D5/D6 restent autorités de résolution ; **pas** d'appel IA systématique |
| 2.3 Reprise / SC3 | **SC3 oracle faible** → **renforcé** | deux sujets + parentSubjectId exact + non-duplication ; C02/MP09/E1 NR PASS |
| 2.4 Fallback D4 | **Inutile** → **supprimé** | un seul chemin capitalisation pour d4.record_knowledge |

## 6. Validations (post-réconciliation)

| Commande | DB | Résultat |
|---|---|---|
| vitest unit qualified-effect-conduction | — | **7 PASS** |
| vitest e2-unified-intent-conduction.pg | sfia_next_e2e | **4 PASS** (SC1–SC3 + fresh) |
| vitest e2-final-orchestration-c02.pg | sfia_next_e2e | **5 PASS** |
| vitest mp09-multi-pilotage-turn.pg | sfia_next_e2e | **1 PASS** |
| vitest e1-continuity-integrated.pg | sfia_next_e2e | **1 PASS** |
| vitest e1-ensemble-b5-b6 unit | — | **16 PASS** |
| vitest mp09-pilotage-multi-restitution unit | — | **12 PASS** |
| git diff --check vs 3fe91745 | — | clean |

Fake/Real : qualification injectée (fake) ; PG réel e2e (real) ; propriétaires D4/D5/D6 réels. Claims : IMPLEMENTED ; DET ciblé. Interdits : READY FOR REAL / ADOPTED.

## 7. Documentation sync (locale)

as-built, delivery-history, registre v0.35 + R-E2b-r.

## 8. Review Pack Content Coverage

- Mandat / Git / CI / ENV : oui
- SHA/tree avant/après publication : oui
- Code publié : référencé par SHA (pas recopié)
- Delta local réconciliation : diffs complets §B
- Garanties / corrections / preuves / Fake-Real / réserves / verdict : oui

## 9. Réserves

Reports E2 (LIVE, calibration, hybrid, T08, E3, E5) inchangés. 17 MP OPEN RECETTE. Delta réconciliation **non publié** sans nouveau GO. Sortie E2 sous gate Morris.

## 10. Verdict

**READY WITH RESERVES** — Option B publiée et identifiable ; garanties §18.2 corrigées localement avec preuves DET ; sortie construction E2 proposée. E3 non engagé.

---

# §A — Index Git Review (proportionné)

| Path | Rôle |
|---|---|
| conversation/qualified-effect-conduction.ts | Planificateur + rewrite/fraîcheur |
| conversation/service.ts | Boucle D3 + knowledgeEffects + restitution |
| conversation/pilotage-effect-aggregate.ts | TurnKnowledgeEffect helpers |
| tests … e2-unified… / unit conduction | Preuves SC1–SC3 + fresh |
| as-built / delivery / registre | Sync technique |

---

# §B — Diffs complets du delta de réconciliation (vs `3fe91745`)

## B.1 service.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 92b924e9..9f83ccec 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -89,7 +89,10 @@ import {
   pickPrimaryPilotageEffect,
   pilotageEffectFromAuthority,
   unknownPilotageEffectRecord,
+  knowledgeEffectFromCapitalisation,
+  knowledgeEffectNotExecuted,
   type TurnPilotageEffect,
+  type TurnKnowledgeEffect,
 } from "@/domains/conversation/pilotage-effect-aggregate";
 import {
   appendDocumentEffectAck,
@@ -119,6 +122,8 @@ import {
   orderIntegratedEffectIntents,
   partitionWaveByFamily,
   planIntegratedEffectWave,
+  rewriteKnowledgeProposalLocalRefs,
+  unresolvedLocalSubjectRefBlockReason,
 } from "./qualified-effect-conduction";
 import {
   buildTurnCorrelationKeys,
@@ -783,6 +788,11 @@ export type TurnResult = {
   pilotageEffect?: TurnPilotageEffect | null;
   /** MP-09 — every admissible binding outcome on the turn (primary kept in pilotageEffect). */
   pilotageEffects?: TurnPilotageEffect[];
+  /**
+   * Option B — every integrated d4.record_knowledge intent outcome on the turn,
+   * including NOT_EXECUTED / SKIPPED (never a fabricated knowledge mutation).
+   */
+  knowledgeEffects?: TurnKnowledgeEffect[];
   reconciled?: boolean;
   /** Durable turn id — available for mid-turn activity polling (C01/C07). */
   turnCommandId?: string | null;
@@ -2015,7 +2025,19 @@ export async function postUserMessageAndNora(
   const ownerOutcomeByIntentId = new Map<string, string>();
   /** @deprecated alias — kept for crossCapOutcomeFromCapitalisations call sites / OBS. */
   const crossCapOutcomeByIntentId = ownerOutcomeByIntentId;
+  const knowledgeEffectRecords: TurnKnowledgeEffect[] = [];
+  const knowledgeEffectByIntentId = new Map<string, TurnKnowledgeEffect>();
+  const recordKnowledgeEffect = (row: TurnKnowledgeEffect) => {
+    knowledgeEffectByIntentId.set(row.semanticIntentId, row);
+    const existing = knowledgeEffectRecords.findIndex(
+      (r) => r.semanticIntentId === row.semanticIntentId,
+    );
+    if (existing >= 0) knowledgeEffectRecords[existing] = row;
+    else knowledgeEffectRecords.push(row);
+  };
   let knowledgeEffectsConducted = false;
+  /** IntentId → durable subj_* created earlier this turn (cross-wave continuity). */
+  const createdSubjectByIntentId = new Map<string, string>();
   // Mint assistant id before any D4 so provenance can reference the future ASSISTANT message.
   const assistantMessageIdForEffects = newId("msg");
   const pilotageIntentIds = intentIdsFromPilotageBindings(pilotageBindings);
@@ -2032,6 +2054,9 @@ export async function postUserMessageAndNora(
     integratedOrdered.map((i) => [i.id, integratedEffectFamily(i.capabilityId)!] as const),
   );
   const allKnowledgeProposals = extractKnowledgeProposals(qualification);
+  const proposalKindByIntentId = new Map(
+    allKnowledgeProposals.map((p) => [p.intentId, p.kind] as const),
+  );
   const interruptedWithDocumentEarly =
     reply.status === "INTERRUPTED" &&
     Boolean(cognitiveWorkMeta?.suspended) &&
@@ -2048,9 +2073,44 @@ export async function postUserMessageAndNora(
     for (const intent of integratedOrdered) {
       const family = familyById.get(intent.id);
       if (family === "knowledge") {
-        if (replyAllowsKnowledgeEffects) pending.add(intent.id);
+        if (replyAllowsKnowledgeEffects) {
+          pending.add(intent.id);
+        } else {
+          ownerOutcomeByIntentId.set(intent.id, "NOT_EXECUTED");
+          recordKnowledgeEffect(
+            knowledgeEffectNotExecuted({
+              intentId: intent.id,
+              status: "NOT_EXECUTED",
+              reason:
+                "Réponse non COMPLETE (et pas de document interrompu admissible) — capitalisation non lancée.",
+              reasonCode: "REPLY_NOT_ADMISSIBLE",
+              proposalKind: proposalKindByIntentId.get(intent.id) ?? null,
+            }),
+          );
+        }
       } else if (family === "pilotage") {
-        if (ctx.project?.id) pending.add(intent.id);
+        if (ctx.project?.id) {
+          pending.add(intent.id);
+        } else {
+          ownerOutcomeByIntentId.set(intent.id, "NOT_EXECUTED");
+          // Explicit: absence of project ≠ ownership loss.
+          pilotageEffectRecords.push({
+            attempted: false,
+            intentClarity: "CLEAR",
+            status: "NOT_EXECUTED",
+            reasonCode: "NO_PROJECT_CONTEXT",
+            reason:
+              "Aucun projet actif — effet D5/D6 non exécuté (pas une perte d'ownership).",
+            decisionId: null,
+            source: "none",
+            semanticIntentId: intent.id,
+            operation:
+              bindingByIntentId.get(intent.id) &&
+              !("ambiguous" in bindingByIntentId.get(intent.id)!)
+                ? (bindingByIntentId.get(intent.id) as { operation: string }).operation
+                : undefined,
+          });
+        }
       }
     }
     const orderedIds = integratedOrdered.map((i) => i.id);
@@ -2108,6 +2168,15 @@ export async function postUserMessageAndNora(
           });
         } else {
           ownerOutcomeByIntentId.set(b.id, "SKIPPED");
+          recordKnowledgeEffect(
+            knowledgeEffectNotExecuted({
+              intentId: b.id,
+              status: "NOT_EXECUTED",
+              reason: b.reason,
+              reasonCode: "DEPENDENCY_PRECONDITION",
+              proposalKind: proposalKindByIntentId.get(b.id) ?? null,
+            }),
+          );
         }
       }

@@ -2127,6 +2196,17 @@ export async function postUserMessageAndNora(
                 }),
               );
             }
+          } else if (family === "knowledge") {
+            recordKnowledgeEffect(
+              knowledgeEffectNotExecuted({
+                intentId: id,
+                status: "FAILED",
+                reason:
+                  "Aucune progression admissible restante — préconditions non satisfaites.",
+                reasonCode: "NO_ADMISSIBLE_PROGRESS",
+                proposalKind: proposalKindByIntentId.get(id) ?? null,
+              }),
+            );
           }
         }
         pending.clear();
@@ -2141,14 +2221,61 @@ export async function postUserMessageAndNora(
       // D4 knowledge batch — peers ready together share one owner call (parent/enfant).
       if (knowledgeIds.length > 0) {
         try {
-          const proposalsForWave = allKnowledgeProposals.filter((p) =>
-            knowledgeIds.includes(p.intentId),
+          const waveSet = new Set(knowledgeIds);
+          let proposalsForWave = rewriteKnowledgeProposalLocalRefs(
+            allKnowledgeProposals.filter((p) => knowledgeIds.includes(p.intentId)),
+            createdSubjectByIntentId,
           );
-          if (proposalsForWave.length === 0) {
-            for (const id of knowledgeIds) {
+          // Deterministic freshness: drop proposals whose local refs remain unresolved.
+          const freshProposals: typeof proposalsForWave = [];
+          for (const id of knowledgeIds) {
+            const proposalsForIntent = proposalsForWave.filter((p) => p.intentId === id);
+            if (proposalsForIntent.length === 0) {
               ownerOutcomeByIntentId.set(id, "SKIPPED");
               pending.delete(id);
+              recordKnowledgeEffect(
+                knowledgeEffectNotExecuted({
+                  intentId: id,
+                  status: "NOT_EXECUTED",
+                  reason: "Aucune proposition D4 extractible pour cette intention.",
+                  reasonCode: "NO_VALID_PROPOSAL",
+                  proposalKind: proposalKindByIntentId.get(id) ?? null,
+                }),
+              );
+              continue;
+            }
+            let blockedFresh: string | null = null;
+            for (const p of proposalsForIntent) {
+              blockedFresh = unresolvedLocalSubjectRefBlockReason({
+                proposal: p,
+                sameWaveIntentIds: waveSet,
+                integratedIds,
+                createdSubjectByIntentId,
+              });
+              if (blockedFresh) break;
             }
+            if (blockedFresh) {
+              ownerOutcomeByIntentId.set(id, "SKIPPED");
+              pending.delete(id);
+              recordKnowledgeEffect(
+                knowledgeEffectNotExecuted({
+                  intentId: id,
+                  status: "NOT_EXECUTED",
+                  reason: blockedFresh,
+                  reasonCode: "STALE_OR_UNRESOLVED_REF",
+                  proposalKind: proposalsForIntent[0]?.kind ?? null,
+                }),
+              );
+              continue;
+            }
+            freshProposals.push(...proposalsForIntent);
+          }
+          proposalsForWave = freshProposals;
+          const runnableIds = [
+            ...new Set(proposalsForWave.map((p) => p.intentId)),
+          ];
+          if (proposalsForWave.length === 0) {
+            // All knowledge in wave already recorded as NOT_EXECUTED above.
           } else {
             const step = await maybeCapitalizeFromExchange(pilotId, preparationId, {
               userText: content,
@@ -2177,9 +2304,19 @@ export async function postUserMessageAndNora(
             };
             if (step.ownershipLost) {
               ownershipLostBeforeD4 = true;
-              for (const id of knowledgeIds) {
+              for (const id of runnableIds) {
                 ownerOutcomeByIntentId.set(id, "SKIPPED");
                 pending.delete(id);
+                recordKnowledgeEffect(
+                  knowledgeEffectNotExecuted({
+                    intentId: id,
+                    status: "SKIPPED",
+                    reason:
+                      "Propriété du tour perdue pendant la capitalisation D4 — effet non exécuté.",
+                    reasonCode: "OWNERSHIP_LOST",
+                    proposalKind: proposalKindByIntentId.get(id) ?? null,
+                  }),
+                );
               }
               for (const id of pending) {
                 ownerOutcomeByIntentId.set(id, "SKIPPED");
@@ -2191,12 +2328,34 @@ export async function postUserMessageAndNora(
                       ownershipLostPilotageEffectRecord({ binding }),
                     );
                   }
+                } else if (family === "knowledge") {
+                  recordKnowledgeEffect(
+                    knowledgeEffectNotExecuted({
+                      intentId: id,
+                      status: "SKIPPED",
+                      reason:
+                        "Propriété du tour perdue avant cet effet — non exécuté.",
+                      reasonCode: "OWNERSHIP_LOST",
+                      proposalKind: proposalKindByIntentId.get(id) ?? null,
+                    }),
+                  );
                 }
               }
               pending.clear();
               break;
             }
-            for (const id of knowledgeIds) {
+            for (const row of step.capitalisations) {
+              if (
+                row.kind === "subject" &&
+                row.intentId &&
+                (row.status === "AVAILABLE" || row.status === "OK") &&
+                typeof row.id === "string" &&
+                row.id.startsWith("subj_")
+              ) {
+                createdSubjectByIntentId.set(row.intentId, row.id);
+              }
+            }
+            for (const id of runnableIds) {
               const proposalsForIntent = proposalsForWave.filter(
                 (p) => p.intentId === id,
               );
@@ -2209,6 +2368,27 @@ export async function postUserMessageAndNora(
               });
               ownerOutcomeByIntentId.set(id, outcome);
               pending.delete(id);
+              const primary = step.capitalisations.find(
+                (c) =>
+                  c.intentId === id &&
+                  (c.kind === "subject" ||
+                    c.kind === "acquis" ||
+                    c.kind === "open_point"),
+              );
+              recordKnowledgeEffect(
+                knowledgeEffectFromCapitalisation({
+                  intentId: id,
+                  status: outcome,
+                  proposalKind: proposalsForIntent[0]?.kind ?? null,
+                  ownerRef:
+                    primary && typeof primary.id === "string" ? primary.id : null,
+                  reason:
+                    primary && "reason" in primary
+                      ? String((primary as { reason?: string }).reason ?? "") || null
+                      : null,
+                  attempted: true,
+                }),
+              );
             }
             const written = step.capitalisations.filter(
               (c) => c.status === "AVAILABLE" || c.status === "OK",
@@ -2222,7 +2402,7 @@ export async function postUserMessageAndNora(
               outcome: written > 0 ? "SUCCESS" : "PARTIAL",
               meta: {
                 unified_conduction: true,
-                wave_knowledge_intents: knowledgeIds.length,
+                wave_knowledge_intents: runnableIds.length,
                 capitalisation_written: written,
               },
             });
@@ -2230,8 +2410,18 @@ export async function postUserMessageAndNora(
         } catch {
           capitalisationError = "CAPITALISATION_EXCEPTION";
           for (const id of knowledgeIds) {
+            if (ownerOutcomeByIntentId.has(id)) continue;
             ownerOutcomeByIntentId.set(id, "FAILED");
             pending.delete(id);
+            recordKnowledgeEffect(
+              knowledgeEffectNotExecuted({
+                intentId: id,
+                status: "FAILED",
+                reason: "Exception pendant la capitalisation D4.",
+                reasonCode: "CAPITALISATION_EXCEPTION",
+                proposalKind: proposalKindByIntentId.get(id) ?? null,
+              }),
+            );
           }
         }
       }
@@ -2617,91 +2807,8 @@ export async function postUserMessageAndNora(
     }
     if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
       ownershipLostBeforeD4 = true;
-    } else if (
-      // Knowledge REQUEST_EFFECT already handled by unified conduction when admissible.
-      // Fallback only when integrated loop did not admit knowledge (e.g. empty set).
-      !knowledgeEffectsConducted &&
-      ![...familyById.values()].includes("knowledge")
-    ) {
-      try {
-        const knowledgeProposals = extractKnowledgeProposals(qualification);
-        const proposalSummary = summarizeKnowledgeProposals(knowledgeProposals);
-        emitObs({
-          event_name: "d3.turn.knowledge_proposals",
-          component: "d3.conversation",
-          request_id: requestId,
-          operation_id: reserved.operationId,
-          generation_id: reply.generationId,
-          outcome: proposalSummary.proposal_present ? "PARTIAL" : "SUCCESS",
-          meta: {
-            qualification_status: qualification.status,
-            reply_status: reply.status,
-            proposal_present: proposalSummary.proposal_present,
-            proposal_count: proposalSummary.proposal_count,
-            subject_count: proposalSummary.subject_count,
-            acquis_count: proposalSummary.acquis_count,
-            open_point_count: proposalSummary.open_point_count,
-            unified_conduction_fallback: true,
-          },
-        });
-        if (knowledgeProposals.length > 0) {
-          capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
-            userText: content,
-            assistantText: reply.content,
-            generationId: reply.generationId,
-            userMessageId: reserved.userMessageId,
-            assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
-            proposals: knowledgeProposals,
-            turnFence: {
-              commandId: reserved.commandId,
-              ownerToken: reserved.ownerToken,
-              beforeFenceCheck: turnRaceHooks.beforeD4Effect,
-            },
-          });
-          const written = capitalisation.capitalisations.filter(
-            (c) => c.status === "AVAILABLE" || c.status === "OK",
-          ).length;
-          const failed = capitalisation.capitalisations.filter(
-            (c) => c.status === "FAILED",
-          ).length;
-          emitObs({
-            event_name: "d3.turn.knowledge_capitalisation",
-            component: "d3.conversation",
-            request_id: requestId,
-            operation_id: reserved.operationId,
-            generation_id: reply.generationId,
-            outcome:
-              written > 0
-                ? "SUCCESS"
-                : proposalSummary.proposal_present
-                  ? "PARTIAL"
-                  : "SUCCESS",
-            meta: {
-              proposal_present: proposalSummary.proposal_present,
-              proposal_count: proposalSummary.proposal_count,
-              capitalisation_written: written,
-              capitalisation_failed_count: failed,
-              reply_status: reply.status,
-              unified_conduction_fallback: true,
-            },
-          });
-          if (capitalisation.ownershipLost) {
-            ownershipLostBeforeD4 = true;
-          }
-        }
-      } catch {
-        capitalisationError = "CAPITALISATION_EXCEPTION";
-        emitObs({
-          event_name: "d3.turn.capitalisation_failed",
-          component: "d3.conversation",
-          request_id: requestId,
-          operation_id: reserved.operationId,
-          generation_id: reply.generationId,
-          outcome: "UNKNOWN",
-          error_category: "CAPITALISATION_EXCEPTION",
-        });
-      }
     }
+    // Knowledge REQUEST_EFFECT is solely handled by unified conduction (no parallel fallback).

     if (documentAct.kind === "CREATE" && !ownershipLostBeforeD4) {
         // C-02/C-03: exact proposal from prior message OR canonical documentProposal OR fence.
@@ -4505,6 +4612,28 @@ export async function postUserMessageAndNora(
       effects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
     });
   }
+  // Option B — explicit D4 non-execution / outcomes (no fabricated mutation).
+  if (!ownershipLostBeforeD4 && knowledgeEffectRecords.length > 0) {
+    const lines = knowledgeEffectRecords
+      .filter(
+        (k) =>
+          !k.attempted ||
+          ["NOT_EXECUTED", "SKIPPED", "FAILED", "PARTIAL", "UNKNOWN"].includes(
+            (k.status ?? "").toUpperCase(),
+          ),
+      )
+      .slice(0, 8)
+      .map((k) => {
+        const st = (k.status ?? "UNKNOWN").toUpperCase();
+        const why = (k.reason ?? "").trim();
+        return why
+          ? `Connaissance (${k.semanticIntentId}) : ${st} — ${why.slice(0, 220)}`
+          : `Connaissance (${k.semanticIntentId}) : ${st}`;
+      });
+    if (lines.length > 0) {
+      assistantBody = `${assistantBody.trimEnd()}\n\n${lines.join("\n")}`;
+    }
+  }

   // E08 POST-UAT — publication outcome after Studio owners; strip pre-effect hedges.
   if (!ownershipLostBeforeD4 && publicationEffectView?.attempted) {
@@ -4646,6 +4775,8 @@ export async function postUserMessageAndNora(
       Boolean(publicationMandateDecisionId),
     pilotageEffect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority),
     pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
+    knowledgeEffects:
+      knowledgeEffectRecords.length > 0 ? knowledgeEffectRecords : undefined,
     missionProjection,
     nextTurnKind,
     pendingEffectBlocked,

```

## B.2 qualified-effect-conduction.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/qualified-effect-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/qualified-effect-conduction.ts
index e80fa371..a64612f1 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/qualified-effect-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/qualified-effect-conduction.ts
@@ -161,3 +161,79 @@ export function partitionWaveByFamily(
   }
   return { knowledgeIds, pilotageIds };
 }
+
+/**
+ * Rewrite local intent-id subject refs using subjects created in prior waves.
+ * Does not invent refs — only replaces known intentId → subj_* mappings.
+ */
+export function rewriteKnowledgeProposalLocalRefs<T extends {
+  intentId: string;
+  subjectId?: string;
+  parentSubjectId?: string;
+  mergeSourceSubjectId?: string;
+}>(
+  proposals: T[],
+  createdSubjectByIntentId: ReadonlyMap<string, string>,
+): T[] {
+  if (createdSubjectByIntentId.size === 0) return proposals;
+  return proposals.map((p) => {
+    let next = p;
+    const mapRef = (ref: string | undefined) => {
+      if (!ref) return ref;
+      return createdSubjectByIntentId.get(ref) ?? ref;
+    };
+    const subjectId = mapRef(p.subjectId);
+    const parentSubjectId = mapRef(p.parentSubjectId);
+    const mergeSourceSubjectId = mapRef(p.mergeSourceSubjectId);
+    if (
+      subjectId !== p.subjectId ||
+      parentSubjectId !== p.parentSubjectId ||
+      mergeSourceSubjectId !== p.mergeSourceSubjectId
+    ) {
+      next = {
+        ...p,
+        subjectId,
+        parentSubjectId,
+        mergeSourceSubjectId,
+      };
+    }
+    return next;
+  });
+}
+
+/**
+ * Deterministic freshness gate: a local intent-id ref that was not rewritten to a
+ * durable subject must not drive a mutation (proposal prepared before prior result).
+ * Returns a block reason or null when refs are durable / same-wave peers.
+ */
+export function unresolvedLocalSubjectRefBlockReason(input: {
+  proposal: {
+    intentId: string;
+    subjectId?: string;
+    parentSubjectId?: string;
+    mergeSourceSubjectId?: string;
+  };
+  /** Intent ids still pending in this capitalisation wave (same-batch peers OK). */
+  sameWaveIntentIds: ReadonlySet<string>;
+  /** All integrated intent ids on the turn. */
+  integratedIds: ReadonlySet<string>;
+  createdSubjectByIntentId: ReadonlyMap<string, string>;
+}): string | null {
+  const refs = [
+    input.proposal.subjectId,
+    input.proposal.parentSubjectId,
+    input.proposal.mergeSourceSubjectId,
+  ].filter((r): r is string => Boolean(r && r.trim()));
+  for (const ref of refs) {
+    if (ref.startsWith("subj_")) continue;
+    if (input.sameWaveIntentIds.has(ref)) continue;
+    if (input.createdSubjectByIntentId.has(ref)) continue;
+    if (input.integratedIds.has(ref)) {
+      return (
+        `Référence locale (${ref}) non résolue après résultat préalable — ` +
+        `proposition non appliquée (fraîcheur / continuité déterministe).`
+      );
+    }
+  }
+  return null;
+}

```

## B.3 pilotage-effect-aggregate.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts
index 9a68b869..1f5f4bd3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts
@@ -259,4 +259,60 @@ export function intentIdsFromPilotageBindings(
     ids.add("ambiguous" in b ? b.intentId : b.intentId);
   }
   return ids;
+}
+
+/**
+ * Durable D4-knowledge intent outcome (parallel to TurnPilotageEffect).
+ * Never invents a knowledge mutation — NOT_EXECUTED / SKIPPED are explicit.
+ */
+export type TurnKnowledgeEffect = {
+  attempted: boolean;
+  capabilityId: "d4.record_knowledge";
+  semanticIntentId: string;
+  status: string;
+  reasonCode?: string | null;
+  reason?: string | null;
+  /** Owner subject/acquis/open_point id only when actually returned. */
+  ownerRef?: string | null;
+  proposalKind?: string | null;
+};
+
+export function knowledgeEffectFromCapitalisation(input: {
+  intentId: string;
+  status: string;
+  proposalKind?: string | null;
+  ownerRef?: string | null;
+  reason?: string | null;
+  reasonCode?: string | null;
+  attempted?: boolean;
+}): TurnKnowledgeEffect {
+  return {
+    attempted: input.attempted ?? true,
+    capabilityId: "d4.record_knowledge",
+    semanticIntentId: input.intentId,
+    status: input.status,
+    reasonCode: input.reasonCode ?? null,
+    reason: input.reason ?? null,
+    ownerRef: input.ownerRef ?? null,
+    proposalKind: input.proposalKind ?? null,
+  };
+}
+
+export function knowledgeEffectNotExecuted(input: {
+  intentId: string;
+  status?: string;
+  reason: string;
+  reasonCode?: string;
+  proposalKind?: string | null;
+}): TurnKnowledgeEffect {
+  return {
+    attempted: false,
+    capabilityId: "d4.record_knowledge",
+    semanticIntentId: input.intentId,
+    status: input.status ?? "NOT_EXECUTED",
+    reasonCode: input.reasonCode ?? "DEPENDENCY_OR_FRESHNESS",
+    reason: input.reason,
+    ownerRef: null,
+    proposalKind: input.proposalKind ?? null,
+  };
 }
\ No newline at end of file

```

## B.4 e2-unified-intent-conduction.pg.test.ts

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/e2-unified-intent-conduction.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/e2-unified-intent-conduction.pg.test.ts
index f766acb2..dfa07aac 100644
--- a/projects/sfia-studio-next/web/tests/integration/e2-unified-intent-conduction.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/e2-unified-intent-conduction.pg.test.ts
@@ -20,6 +20,7 @@ import { postUserMessageAndNora } from "@/domains/conversation/service";
 import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
 import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
 import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";
+import { listProjectKnowledge } from "@/domains/knowledge/journal";

 const STATEMENT_A =
   "L'arbitrage du Pilote fixe le cadre d'habilitation pour ce projet.";
@@ -311,6 +312,30 @@ describe("E2 Option B — unified intent conduction (PG)", () => {
           c.intentId === "i-d4-free" && (c.status === "AVAILABLE" || c.status === "OK"),
       ),
     ).toBe(true);
+
+    const depEffect = result.knowledgeEffects?.find(
+      (k) => k.semanticIntentId === "i-d4-dep",
+    );
+    expect(depEffect).toBeTruthy();
+    expect(depEffect?.attempted).toBe(false);
+    expect(
+      ["NOT_EXECUTED", "SKIPPED"].includes((depEffect?.status ?? "").toUpperCase()),
+    ).toBe(true);
+    expect((depEffect?.reason ?? "").length).toBeGreaterThan(8);
+    expect(depEffect?.reasonCode).toBeTruthy();
+
+    const freeEffect = result.knowledgeEffects?.find(
+      (k) => k.semanticIntentId === "i-d4-free",
+    );
+    expect(
+      freeEffect?.status === "APPLIED" ||
+        freeEffect?.status === "AVAILABLE" ||
+        freeEffect?.status === "OK",
+    ).toBe(true);
+
+    // Durable turn payload carries knowledgeEffects (committed with result_json).
+    expect(Array.isArray(result.knowledgeEffects)).toBe(true);
+    expect(result.knowledgeEffects!.length).toBeGreaterThanOrEqual(2);
   });

   it("SC3 — D4 parent/enfant batch stays coherent with a pilotage peer", async () => {
@@ -381,14 +406,31 @@ describe("E2 Option B — unified intent conduction (PG)", () => {
       Array.isArray(result.capitalisation)
         ? result.capitalisation
         : (result.capitalisationAttempted as unknown[]) ?? []
-    ) as Array<{ intentId?: string; status?: string }>;
-    expect(
-      caps.filter(
-        (c) =>
-          (c.intentId === "i-parent" || c.intentId === "i-child") &&
-          (c.status === "AVAILABLE" || c.status === "OK"),
-      ).length,
-    ).toBeGreaterThanOrEqual(1);
+    ) as Array<{ intentId?: string; status?: string; kind?: string; id?: string }>;
+    const parentCap = caps.filter(
+      (c) =>
+        c.intentId === "i-parent" &&
+        c.kind === "subject" &&
+        (c.status === "AVAILABLE" || c.status === "OK"),
+    );
+    const childCap = caps.filter(
+      (c) =>
+        c.intentId === "i-child" &&
+        c.kind === "subject" &&
+        (c.status === "AVAILABLE" || c.status === "OK"),
+    );
+    expect(parentCap.length).toBeGreaterThanOrEqual(1);
+    expect(childCap.length).toBeGreaterThanOrEqual(1);
+
+    const bundle = await listProjectKnowledge(pilotId, projectId);
+    const parent = bundle.subjects.find((s) => s.title === "Habilitations");
+    const child = bundle.subjects.find((s) => s.title === "Accès");
+    expect(parent?.id).toBeTruthy();
+    expect(child?.id).toBeTruthy();
+    expect(child?.parentSubjectId).toBe(parent?.id);
+    // No duplicate ACTIVE subjects with same titles.
+    expect(bundle.subjects.filter((s) => s.title === "Habilitations")).toHaveLength(1);
+    expect(bundle.subjects.filter((s) => s.title === "Accès")).toHaveLength(1);

     const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
     expect(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED").toBe(true);
@@ -399,4 +441,112 @@ describe("E2 Option B — unified intent conduction (PG)", () => {
       .where(eq(businessCommands.projectId, projectId));
     expect(cmds.filter((c) => c.operation === "OPEN_CYCLE")).toHaveLength(1);
   });
+
+  it("SC-fresh — cross-wave parent ref rewritten; stale unresolved ref not applied", async () => {
+    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2u-fresh");
+    const qualOk = baseQual(
+      [
+        {
+          id: "i-d4-a",
+          capabilityId: "d4.record_knowledge",
+          mode: "REQUEST_EFFECT",
+          summary: "Parent d'abord",
+          parameters: {
+            knowledgeKind: "SUBJECT",
+            knowledgeStatement: "Sujet parent créé avant l'enfant dépendant.",
+            epistemic: "recommended",
+            subjectTitle: "ParentFrais",
+          },
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+        {
+          id: "i-d4-b",
+          capabilityId: "d4.record_knowledge",
+          mode: "REQUEST_EFFECT",
+          summary: "Enfant après parent",
+          parameters: {
+            knowledgeKind: "SUBJECT",
+            knowledgeStatement: "Enfant lié au parent via ref locale d'intention.",
+            epistemic: "recommended",
+            subjectTitle: "EnfantFrais",
+            parentSubjectId: "i-d4-a",
+          },
+          constraints: [],
+          dependsOn: ["i-d4-a"],
+          sourceEvidence: [],
+        },
+      ],
+      "Continuité cross-wave.",
+    );
+    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
+      mockNoraTurn(qualOk) as never,
+    );
+    const ok = await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Parent puis enfant dépendant",
+      { clientTurnKey: newId("ctk") },
+    );
+    expect(ok.status).toBe("COMPLETE");
+    const bundleOk = await listProjectKnowledge(pilotId, projectId);
+    const parentOk = bundleOk.subjects.find((s) => s.title === "ParentFrais");
+    const childOk = bundleOk.subjects.find((s) => s.title === "EnfantFrais");
+    expect(childOk?.parentSubjectId).toBe(parentOk?.id);
+
+    // Stale: child depends on refused peer but still carries its local parent ref.
+    const { pilotId: p2, preparationId: prep2, projectId: proj2 } =
+      await seedOwnedProject("e2u-stale");
+    const qualStale = baseQual(
+      [
+        {
+          id: "i-d5-refuse",
+          capabilityId: "d5.pilotage_command",
+          mode: "REQUEST_EFFECT",
+          summary: "Retain refuse",
+          parameters: { pilotageOperation: "RETAIN_TRAJECTORY" },
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+        {
+          id: "i-d4-stale",
+          capabilityId: "d4.record_knowledge",
+          mode: "REQUEST_EFFECT",
+          summary: "Ref locale vers intention non satisfaite",
+          parameters: {
+            knowledgeKind: "SUBJECT",
+            knowledgeStatement: "Ne doit pas muter avec une ref d'intention non résolue.",
+            epistemic: "recommended",
+            subjectTitle: "StaleChild",
+            // Points at refused pilotage intent id — not a durable subject.
+            parentSubjectId: "i-d5-refuse",
+          },
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+      ],
+      "Fraîcheur refus.",
+    );
+    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
+      mockNoraTurn(qualStale) as never,
+    );
+    const stale = await postUserMessageAndNora(
+      p2,
+      prep2,
+      "Ne capitalise pas une ref obsolète",
+      { clientTurnKey: newId("ctk") },
+    );
+    expect(stale.status).toBe("COMPLETE");
+    const staleFx = stale.knowledgeEffects?.find(
+      (k) => k.semanticIntentId === "i-d4-stale",
+    );
+    expect(staleFx?.attempted).toBe(false);
+    expect((staleFx?.status ?? "").toUpperCase()).toMatch(/NOT_EXECUTED|SKIPPED/);
+    expect(staleFx?.reasonCode).toBe("STALE_OR_UNRESOLVED_REF");
+    const bundleStale = await listProjectKnowledge(p2, proj2);
+    expect(bundleStale.subjects.some((s) => s.title === "StaleChild")).toBe(false);
+  });
 });

```

## B.5 qualified-effect-conduction.test.ts

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/qualified-effect-conduction.test.ts b/projects/sfia-studio-next/web/tests/unit/qualified-effect-conduction.test.ts
index 41940a2f..d1c18d0b 100644
--- a/projects/sfia-studio-next/web/tests/unit/qualified-effect-conduction.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/qualified-effect-conduction.test.ts
@@ -8,6 +8,8 @@ import {
   partitionWaveByFamily,
   planIntegratedEffectWave,
   listIntegratedEffectIntents,
+  rewriteKnowledgeProposalLocalRefs,
+  unresolvedLocalSubjectRefBlockReason,
 } from "@/domains/conversation/qualified-effect-conduction";
 import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";

@@ -162,4 +164,31 @@ describe("qualified-effect-conduction", () => {
     expect(plan.blocked[0]?.id).toBe("i-d5");
     expect(plan.blocked[0]?.reason).toMatch(/hors intentions intégrées/);
   });
+
+  it("rewrites local intent subject refs from prior-wave creations", () => {
+    const out = rewriteKnowledgeProposalLocalRefs(
+      [
+        {
+          intentId: "i-child",
+          parentSubjectId: "i-parent",
+          subjectId: undefined,
+        },
+      ],
+      new Map([["i-parent", "subj_abc"]]),
+    );
+    expect(out[0]?.parentSubjectId).toBe("subj_abc");
+  });
+
+  it("blocks unresolved local subject refs after prior wave", () => {
+    const reason = unresolvedLocalSubjectRefBlockReason({
+      proposal: {
+        intentId: "i-child",
+        parentSubjectId: "i-missing",
+      },
+      sameWaveIntentIds: new Set(["i-child"]),
+      integratedIds: new Set(["i-child", "i-missing"]),
+      createdSubjectByIntentId: new Map(),
+    });
+    expect(reason).toMatch(/non résolue/);
+  });
 });

```

## B.6 as-built

```diff
diff --git a/projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md b/projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md
index 16eaa075..772784bc 100644
--- a/projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md
+++ b/projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md
@@ -105,7 +105,12 @@ Complément ciblé E1 (reliquats ChatGPT E1-REL-01…09) — même Ensemble 1, p
 - **Préservé** : batches D4 parent/enfant ; autorité HumanDecision ; forecast durable ;
   C02 ; chemins documentaires D4 create/revise, D2, D7 hors boucle intégrée.
 - **Preuves DET** : `qualified-effect-conduction` unit ; `e2-unified-intent-conduction.pg`
-  (D6→D4→D5, refus+indépendant, batch+pilotage) ; non-régression FINAL/C02/MP09/E1.
+  (D6→D4→D5, refus+indépendant, batch+pilotage, fraîcheur cross-wave) ; non-régression FINAL/C02/MP09/E1.
+- **Réconciliation §18.2 (post-publication `3fe91745`)** :
+  - `TurnResult.knowledgeEffects[]` durable (NOT_EXECUTED/SKIPPED/FAILED explicites, motif, pas de mutation fictive) ;
+  - réécriture des refs locales intent→`subj_*` entre vagues ; gate `STALE_OR_UNRESOLVED_REF` ;
+  - fallback capitalisation parallèle retiré ; absence de projet ≠ ownership lost ;
+  - SC3 : deux sujets + `parentSubjectId` exact + non-duplication.

 ## Limites


```

## B.7 delivery-history

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index dc1bb5b2..aed0f99d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -69,14 +69,19 @@
   - tests: `e1-final-safeguards.pg.test.ts` **5 PASS** + non-régression reliquats/ensemble/ml2-corrective (**38 PASS** lot) ;
   - Review Pack régularisé (RETAIN + fichiers delta)
 - **E2_option_B_conduite_uniforme** (2026-11-27 — même livraison, pas de nouvelle DELIV):
-  - Snapshot de base publié : `53b9d452` / tree `18e8fd99` (GO snapshot consommé — **aucun** commit/push projet dans ce mandat)
+  - Snapshot Option B **publié** : `3fe91745` / tree `94680265` (GO ponctuel publication ; CI non déclenchée ; main `997897fd` inchangé)
+  - Base avant publication : `53b9d452` / tree `18e8fd99`
   - ARCH-01…05 : D3 unique ; séquencement dépendances+résultats ; réutilisation acquis E1/E2 ; pas de nouvel orchestrateur/persistance
   - Remplace early/remaining D4 + boucle D5/D6 séparée par conduite unifiée `qualified-effect-conduction` + boucle D3
   - Préserve batches D4, autorité, C02, hors-périmètre documentaire/D2/D7
-  - tests : unit planner **5 PASS** ; PG unified SC1–SC3 **3 PASS** ; FINAL/C02 **5 PASS** ; MP09 PG **1 PASS** ; E1 continuity **1 PASS** ; B5/B6 unit **16 PASS**
+- **E2_option_B_reconciliation_§18.2** (2026-11-27 — même livraison ; **delta local non publié** sans nouveau GO):
+  - `knowledgeEffects[]` durable sur TurnResult ; motifs NOT_EXECUTED ; pas de mutation fictive
+  - Fraîcheur : rewrite intent→subj_* cross-wave + gate `STALE_OR_UNRESOLVED_REF` ; pas d'appel IA systématique
+  - Fallback capitalisation parallèle retiré ; SC3 parent/enfant renforcé
+  - tests post-réconciliation : planner unit **7 PASS** ; unified PG SC1–SC3+fresh **4 PASS** ; FINAL/C02 **5** ; MP09 PG **1** ; E1 continuity **1** ; B5/B6 **16** ; MP09 unit **12**
   - schéma **027** ; LIVE/RECETTE non mutés ; NO RELEASE ; E3 non engagé
-  - verdict Cursor : READY WITH RESERVES — sortie construction E2 proposée sous gate Morris ; handoff L3 Option B
-- **statut**: E2 GARANTIES + REL + FINAL + INT + **Option B** DEV — Cursor READY WITH RESERVES (sortie construction E2 proposée ; gate Morris / revue ChatGPT avant E3); E1 CONSTRUCTION EXIT ACCEPTED WITH RESERVES; Livraison 1 NOT ACCEPTED; NO RELEASE
+  - verdict Cursor : READY WITH RESERVES — sortie construction E2 proposée sous gate Morris
+- **statut**: E2 GARANTIES + REL + FINAL + INT + **Option B publié** + réconciliation §18.2 locale — Cursor READY WITH RESERVES (sortie construction E2 proposée ; gate Morris / revue ChatGPT avant E3); E1 CONSTRUCTION EXIT ACCEPTED WITH RESERVES; Livraison 1 NOT ACCEPTED; NO RELEASE

 ## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION


```

## B.8 registre

```diff
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index 936d9eaa..a8ddf529 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.34 candidate — 27 novembre 2026 : **E2 Option B** (conduite uniforme D3 des intentions qualifiées D4-connaissance/D5/D6 ; ARCH-01…05) sur `sfia/next-ml5-integrated-delivery-20261123` @ base `53b9d452` dirty local — **Cursor READY WITH RESERVES** (sortie E2 proposée ; ChatGPT + Morris gate) ; v0.33 : E2-INT ; v0.32 : E2-FINAL ; … |
+| Version | v0.35 candidate — 27 novembre 2026 : **E2 Option B publié** `3fe91745` + réconciliation §18.2 locale (`knowledgeEffects`, fraîcheur refs, SC3 renforcé) — **Cursor READY WITH RESERVES** (sortie E2 proposée ; ChatGPT + Morris gate) ; v0.34 : Option B ; v0.33 : E2-INT ; … |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
@@ -434,7 +434,8 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 | R-E2 | 27/11/2026 | E2 garanties cognitives résiduelles A.1–A.7 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2 → `sfia/review-handoff` @`80cdef6c` | A.1–A.7 · 91 PASS unit ciblés · hybrid instruit | **Cursor** READY WITH RESERVES ; ChatGPT PARTIEL NOT READY E3 ; six reliquats → R-E2c |
 | R-E2c | 27/11/2026 | E2 complément six reliquats E2-REL-01…06 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2c → `sfia/review-handoff` | REL-01…06 · 89+ PASS unit/PG · hybrid PG DET | **Cursor** READY WITH RESERVES ; ChatGPT revue indépendante pending ; E3 non engagé |
 | R-E2f | 27/11/2026 | E2 sécurisation finale E2-FINAL-01…03 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2f → `sfia/review-handoff` | FINAL-01…03 · 16 PASS FINAL + 59 PASS lot affecté | **Cursor** READY WITH RESERVES — sortie construction E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
-| R-E2b | 27/11/2026 | E2 Option B — conduite uniforme intentions qualifiées (ARCH-01…05) | base `53b9d452` dirty local ; **no project commit** | Review Pack Option B → `sfia/review-handoff` | planner unit + unified PG SC1–SC3 · C02/MP09/E1 NR | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
+| R-E2b | 27/11/2026 | E2 Option B — conduite uniforme intentions qualifiées (ARCH-01…05) | publié `3fe91745` / tree `94680265` | Review Pack Option B → `sfia/review-handoff` | planner unit + unified PG SC1–SC3 · C02/MP09/E1 NR | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
+| R-E2b-r | 27/11/2026 | E2 Option B réconciliation §18.2 (états D4, fraîcheur, SC3) | base `3fe91745` ; **delta local non publié** | Review Pack reconcile → `sfia/review-handoff` | knowledgeEffects · SC2/SC3/fresh · NR C02/MP09/E1 | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
 | R-E2i | 27/11/2026 | E2 revue d'intégration — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2i → `sfia/review-handoff` | INT D4/C02/FinOps · 20 PASS ; e2e DB vérifiée | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |

 ### E2 — lignes de couverture (2026-11-27)

```

---

# §C — Instruction ChatGPT

Relire :
1. Snapshot Option B publié `3fe91745` sur branche DEV
2. Ce handoff distant
3. Delta local §B (non publié)

Vérifier ARCH-01…05, knowledgeEffects durables, fraîcheur, SC3, autorité, idempotence, validations, complétude.

Morris arbitre sortie E2 et E3.
