# Review Pack FULL — SFIA Studio Next ML5 · E2 Integration Review (E2-INT)

**Cycle**: 8 — Delivery / Critical · EVOL intégration corrective bornée
**Date**: 2026-11-27 19:52 CET
**Lane**: DEV (STUDIO_LANE=DEV · app :3100 · PG :5433)
**Test DB**: `sfia_next_e2e` (vitest rewrite depuis DATABASE_URL DEV — isolation vérifiée, 47 tables)
**Branche**: `sfia/next-ml5-integrated-delivery-20261123`
**HEAD base**: `58ca9486003805f74e69a0842f2c0792a7184437`
**Merge-base main**: `997897fd7cf914771e7d08e8030dc7123fab7d25`
**Prior handoff E2f**: `a582a53d5b06d7423c21973184fcbaf3d3853c17` blob `d5d2da211a1c6ddbda79aaf992a6df2d82db9681`
**Suivi ChatGPT**: v0.7 @ `3bab4aa1` blob `8d2bdf80` — **non modifié**
**Classe**: NO RELEASE · E3 NON ENGAGÉ · aucun commit/push projet

---

## 1. Mandat

Revue d'intégration bornée après E2-FINAL. Quatre contrôles : conducteur D4 restantes/dépendances/batch E1 ; C02 projection partielle ; FinOps stabilité temporelle ; complétude dossier.

## 2. Git Truth

| Item | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Branche | sfia/next-ml5-integrated-delivery-20261123 @ 58ca9486 |
| Staged | **0** |
| Dirty | ~84 (cumul macro-lot) |
| Handoff WT | a582a53d → updated this cycle |
| RECETTE WT | e8e6e069 préservé |

## 3. ENV-01

| Contrôle | Résultat |
| --- | --- |
| DEV PG | :5433 · sfia_next_dev OK |
| E2E DB | sfia_next_e2e présente sur même instance ; vitest `prepareVitestMutativeDatabaseUrl` réécrit DATABASE_URL |
| RECETTE | :3200 + :5434 / sfia_next_recette_ml4 — aucune mutation |
| LIVE | non exécuté |

**ENV ROUTING COMPLETE**

## 4. Cartographie flux réel (conducteur)

```
qualification (durable)
 → extractKnowledgeProposals / listPilotageBindings
 → d4DepsForPilotage (direct + transitif D4)
 → early D4 en VAGUES batch (dependsOn) → crossCap outcomes
 → D5/D6 apply (preconditions crossCap + pilotage)
 → remaining D4 (!early) maybeCapitalize once
 → document / restitution / persist resultJson (+ stash qualification)
 → lookup/replay: union stash∪effects ; compléter manquants
```

Responsabilités : D3 orchestre ; D4/D5/D6 propriétaires ; pas de second conducteur.

## 5. Risques — confirmés / écartés

| Contrôle | Constat | Verdict | Correction |
| --- | --- | --- | --- |
| D4 restantes | Branche remaining **déjà présente** localement (L2452+) — risque handoff incomplet **écarté** pour omission totale | ÉCARTÉ omission ; CONFIRMÉ transitif + batch | Transitive closure + wave batch |
| Batch E1 | Per-intent early cassait SUBJECT co-présence | CONFIRMÉ risque | Vagues = peers same call |
| Succès primaire | subject-only + proposalKind ACQUIS → faux APPLIED | CONFIRMÉ | proposalKind filter |
| Forecast/provenance | Inspection chemin durable | ÉCARTÉ régression (non rouvert) | — |
| C02 partiel | early return liste non vide | CONFIRMÉ | union + complete missing |
| FinOps fenêtre | gte(since) sur conflit | CONFIRMÉ | conflit hors période |
| Pack docs | absents du handoff FINAL | CONFIRMÉ | régularisés ici |

## 6. Corrections (delta présent mandat)

- `conversation/service.ts` — early D4 transitif + waves ; extractDurable union ; resolvePilotageEffectForReplay complète
- `pilotage-effect-aggregate.ts` — proposalKind
- `usage-read-service.ts` — conflict sans since ; list works conflit full-history
- tests e2-final-* étendus
- docs delivery-history / registre v0.33 / as-built E2-INT

## 7. Validations

| Commande | Base | Résultat |
| --- | --- | --- |
| vitest e2-final unit+orch+finops | sfia_next_e2e | **20 PASS** exit 0 |
| vitest lot affecté (+FinOps proj, semantic, e1 B7/B8) | e2e | **63 PASS** exit 0 |
| tsc filtré delta | — | 0 erreur delta |
| git diff --check | FINAL/INT files | OK |

## 8. Fake/Real

| Frontière | Fake | REAL | Gap |
| --- | --- | --- | --- |
| Qualification | fixture mock | LIVE Nora | autonomie |
| D4/D5/C02 | PG e2e | PG propriétaire | panne mid-write |
| FinOps | obs contrôlées | collect LIVE | coût facturé |

DETERMINISTIC PROVEN ≠ READY FOR REAL.

## 9. Synthèse

| Contrôle | Constat | Correction | Preuve | Réserve |
| --- | --- | --- | --- | --- |
| Conducteur D4 | remaining OK ; transitif/batch à corriger | waves + transitive | PG mix early+remaining | multi-cap naturelle |
| Succès primaire | subject-only | proposalKind | unit | — |
| C02 partiel | early return | union+complete | PG partial projection | reprise UX |
| FinOps | fenêtre masque | conflit all-time ; tokens 110/0/316 | PG | Admin OFF |
| Dossier | manquant FINAL | régularisé | pack | — |

## 10. Verdict Cursor

**READY WITH RESERVES**

Proposition : **sortie de construction E2** — invariants d'intégration maîtrisés ; preuves naturelles → recette ; **E3 non engagé** ; gate **Morris** après relecture ChatGPT.

## 11. Instruction ChatGPT

Relire ce fichier distant. Vérifier cohérence conducteur, D4 restantes, batch E1, C02 partiel, FinOps, preuves, dossier.

---

## 12. Contenu documentaire régularisé (E2-FINAL/INT)

### delivery-history — E2_sécurisation_finale + E2_revue_intégration
```md
35:- **E2_sécurisation_finale** (2026-11-27, E2-FINAL-01…03 — même livraison, pas de nouvelle DELIV):
36-  - E2-FINAL-01: corrélation capitalisation par `intentId` ; `crossCapOutcomeFromCapitalisations` (pas d'emprunt inter-intentions ; PRIMARY acquis/open_point) ; D4 early séquentiel + dependsOn propres ; `normalizeKnowledgeRecordKind(FACT→ACQUIS)` ; intentId sur résultats D4 manquants
37-  - E2-FINAL-02: `extractDurablePilotageIntentIds` depuis stash `semanticQualification` (indépendant de `pilotageEffects`) ; `unknownPilotageEffectRecord` ; lookup/replay sans inventer de succès
38-  - E2-FINAL-03: `isFinOpsWorkAttributionConflict` + `loadAttributionConflictWorkIds` **avant** filtre projet ; travail NULL+obs A+B exclu des filtres A/B ; global conserve
39-  - tests ciblés FINAL: **16 PASS** (`e2-final-orchestration-c02` unit 11 + PG 3 ; FinOps PG 2) ; régression affectée **59 PASS** lot (FinOps projection, semantic, e1 B7/B8, FINAL)
40-  - schéma: **027 inchangé** ; LIVE/RECETTE non mutés ; NO RELEASE ; E3 non engagé
41-  - verdict Cursor (finale): READY WITH RESERVES — sortie construction E2 proposée ; gate Morris ; ChatGPT relit handoff distant
42:- **E2_revue_intégration** (2026-11-27, E2-INT — même livraison, pas de nouvelle DELIV):
43-  - Conducteur : D4 early **transitif** + **vagues batch** (préserve SUBJECT parent/enfant) ; branche remaining D4 confirmée locale (déjà présente) ; proposalKind→crossCap (subject-only ≠ APPLIED)
44-  - C02 : union stash∪projection ; projection partielle complétée intention par intention (UNKNOWN si manquant)
45-  - FinOps : conflit **sans** fenêtre temporelle ; liste travaux cohérente ; tokens exacts 110/0/316
46-  - Base tests : vitest → `sfia_next_e2e` @ :5433 (isolation vérifiée)
47-  - tests : **20 PASS** FINAL/INT (unit 12 + orch PG 5 + FinOps PG 3) ; lot affecté rejoué
48-  - schéma **027** ; LIVE/RECETTE non mutés ; NO RELEASE ; E3 non engagé
49-  - verdict Cursor (intégration): READY WITH RESERVES — sortie construction E2 proposée sous gate Morris
50-- **E1_périmètre** (2026-11-27, ensemble Continuité cognitive B.1–B.8 uniquement):
51-  - même tour parent+enfant (`subject-proposal-batch` + `precreateBatchSubjects`);
52-  - reparent/rename via capitalisation SUBJECT existant;
53-  - PROPOSE_TRAJECTORY USER_MESSAGE sans body objective (gate durable);
54-  - compteurs décisions applicables (supersede uniquement si successeur APPLICABLE);
55-  - `openPointShortTitle` pour E3; B.7 PREFERRED + omit marker;
56-  - suite E1 focalisée: **52 PASS** (unit+PG B.1–B.8) puis **58 PASS** rapportés handoff `d08fc94e`
57-- **E1_complément_reliquats** (2026-11-27, E1-REL-01…09 — même livraison, pas de nouvelle DELIV):
58-  - E1-REL-01: merge/split/detach raccordés via `subjectOrganization` → propriétaires D4;
59-  - E1-REL-02: refus subjectId invalide/étranger ; conflit id/titre ; fence rename/merge/split/reparent ; rename fail non masqué;
60-  - E1-REL-04: `openPointTitle` → `provenance.canonicalTitle` + shortTitle projection;
61-  - E1-REL-05: `forecastSteps` durable → ClassifiedCommand → PG ; RETAIN supersède PROPOSED (RETAIN_VIS);
62-  - E1-REL-03/06/07/08: raccordements vérifiés ; preuves naturelles → registre recette ; DOM :3100 HTTP 500 tooling;
```

### registre — version + R-E2i
```md
# SFIA Studio Next — ML5 · Registre de couverture et de revue du développement

> **Registre de revue ML5 — contenu validé comme support de suivi par Morris ; Gate C accepté avec réserves et GO de construction ML5 exprimés le 23/11/2026.** Aucun GO implicite de push projet, PR, merge, recette/cutover, release, adoption ou promotion.

| Champ | Valeur |
|---|---|
| Version | v0.33 candidate — 27 novembre 2026 : **E2-INT** (D4 remaining+transitif+batch ; C02 projection partielle ; FinOps conflit hors fenêtre) sur `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` dirty — **Cursor READY WITH RESERVES** (sortie E2 proposée ; ChatGPT + Morris gate) ; v0.32 : E2-FINAL ; v0.31 : E2c ; … |
| Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
| Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
| Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
```

### as-built E2-FINAL/INT
```md
85:## E2-FINAL / E2-INT (as-built impact — 2026-11-27)
86-
87-- **Orchestration** : early D4 **transitif** + **vagues batch** (dépendances respectées,
88-  SUBJECT parent/enfant co-présents) ; remaining D4 après pilotage ; `crossCap` +
89-  `proposalKind` (subject-only ≠ APPLIED pour ACQUIS) ; FACT→ACQUIS.
90-- **C02** : union stash∪projections ; projection partielle complétée ; UNKNOWN explicite.
91-- **FinOps** : conflit d'attribution sur l'histoire complète (pas la fenêtre période) ;
92-  exclusion projet avant agrégats ; liste/détail cohérents.
93-- D3 demeure conducteur unique ; D4/D5/D6 propriétaires.
94-
95-## Limites
96-
97-- Autonomie sémantique LIVE : NON PROUVÉE (E1 = DET + injections).
98-- Hybrid embedding `derivedUsed=false` : **instruit E2** — défaut config/fixture
99-  (`SFIA_DERIVED_EMBEDDING_SEARCH` off ou `BACKEND=pg` sans semanticHits), pas régression B.7.
100-- Pertinence cognitive naturelle merge/split / sélection / finalité : recette utilisateur.
```

## 13. Raccordements code (extraits complets nécessaires)

### Remaining D4 après early (service.ts)
```ts
    qualificationReason: documentAct.kind === "NONE" ? "SEMANTIC_NONE" : null,
    documentaryIntentSignal,
    d4Attempted: false,
    d4Effect: null,
  });

  // C17: segment-limit suspension keeps work SUSPENDED (honest) but may still
  // carry a complete document fence for D4 — do not require conversational COMPLETE.
  const interruptedWithDocument =
    reply.status === "INTERRUPTED" &&
    Boolean(cognitiveWorkMeta?.suspended) &&
    extractContractualDocumentProposal(reply.content).ok;
  const replyAllowsOwnerEffects =
    allowOwnerEffects &&
    (reply.status === "COMPLETE" || interruptedWithDocument);

  if (replyAllowsOwnerEffects) {
    if (turnRaceHooks.beforeD4Effect) {
      await turnRaceHooks.beforeD4Effect();
    }
    if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
      ownershipLostBeforeD4 = true;
    } else if (capitalisationRanBeforePilotage) {
      // Early path only wrote D4 intents required by D5/D6 — remaining D4 still apply once.
      const allProposals = extractKnowledgeProposals(qualification);
      const remaining = allProposals.filter((p) => !d4DepsForPilotage.has(p.intentId));
      const proposalSummary = summarizeKnowledgeProposals(allProposals);
      emitObs({
        event_name: "d3.turn.knowledge_proposals",
        component: "d3.conversation",
        request_id: requestId,
        operation_id: reserved.operationId,
        generation_id: reply.generationId,
        outcome: proposalSummary.proposal_present ? "PARTIAL" : "SUCCESS",
        meta: {
          qualification_status: qualification.status,
          reply_status: reply.status,
          proposal_present: proposalSummary.proposal_present,
          proposal_count: proposalSummary.proposal_count,
          early_before_pilotage: true,
          remaining_d4: remaining.length,
        },
      });
      if (remaining.length > 0 && !ownershipLostBeforeD4) {
        try {
          const step = await maybeCapitalizeFromExchange(pilotId, preparationId, {
            userText: content,
            assistantText: reply.content,
            generationId: reply.generationId,
            userMessageId: reserved.userMessageId,
            assistantMessageId: assistantId,
            proposals: remaining,
            turnFence: {
              commandId: reserved.commandId,
              ownerToken: reserved.ownerToken,
              beforeFenceCheck: turnRaceHooks.beforeD4Effect,
            },
          });
          capitalisation = {
            capitalisations: [
              ...capitalisation.capitalisations,
              ...step.capitalisations,
            ],
            selectionMethod: step.selectionMethod,
            selectionLimit: step.selectionLimit,
            humanDecisionCreated:
              capitalisation.humanDecisionCreated || step.humanDecisionCreated,
            ownershipLost: capitalisation.ownershipLost || step.ownershipLost,
          };
          if (step.ownershipLost) ownershipLostBeforeD4 = true;
        } catch {
          capitalisationError = "CAPITALISATION_EXCEPTION";
        }
      }
    } else {
      try {
        const knowledgeProposals = extractKnowledgeProposals(qualification);
        const proposalSummary = summarizeKnowledgeProposals(knowledgeProposals);
        emitObs({
          event_name: "d3.turn.knowledge_proposals",
          component: "d3.conversation",
          request_id: requestId,
          operation_id: reserved.operationId,
          generation_id: reply.generationId,
          outcome: proposalSummary.proposal_present ? "PARTIAL" : "SUCCESS",
          meta: {
            qualification_status: qualification.status,
            reply_status: reply.status,
            proposal_present: proposalSummary.proposal_present,
            proposal_count: proposalSummary.proposal_count,
            subject_count: proposalSummary.subject_count,
            acquis_count: proposalSummary.acquis_count,
            open_point_count: proposalSummary.open_point_count,
          },
        });
        capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
          userText: content,
          assistantText: reply.content,
          generationId: reply.generationId,
          userMessageId: reserved.userMessageId,
          assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
```

### Early D4 transitif + waves (service.ts)
```ts
  );
  const intentByIdEarly = new Map(qualification.intents.map((i) => [i.id, i] as const));
  const d4DepsForPilotage = new Set<string>();
  const isEarlyD4 = (dep: string) => {
    if (pilotageIntentIdsEarly.has(dep)) return false;
    const depIntent = intentByIdEarly.get(dep);
    return (
      depIntent?.capabilityId === "d4.record_knowledge" &&
      depIntent.mode === "REQUEST_EFFECT"
    );
  };
  for (const b of pilotageBindings) {
    for (const dep of intentDependsOnEarly.get(b.intentId) ?? []) {
      if (isEarlyD4(dep)) d4DepsForPilotage.add(dep);
    }
  }
  // E2-INT — transitive D4 ancestors (D4-A → D4-B → D5) must join the early set.
  {
    let grew = true;
    while (grew) {
      grew = false;
      for (const id of [...d4DepsForPilotage]) {
        for (const dep of intentDependsOnEarly.get(id) ?? []) {
          if (isEarlyD4(dep) && !d4DepsForPilotage.has(dep)) {
            d4DepsForPilotage.add(dep);
            grew = true;
          }
        }
      }
    }
  }
  if (
    allowOwnerEffects &&
    d4DepsForPilotage.size > 0 &&
    reply.status === "COMPLETE" &&
    (await requireTurnOwnership(reserved.commandId, reserved.ownerToken))
  ) {
    try {
      const allKnowledgeProposals = extractKnowledgeProposals(qualification);
      // Topo-order early D4; detect cycles.
      const visit = new Set<string>();
      const visiting = new Set<string>();
      const orderedAll: string[] = [];
      const walk = (id: string) => {
        if (!d4DepsForPilotage.has(id) || visit.has(id)) return;
        if (visiting.has(id)) {
          crossCapOutcomeByIntentId.set(id, "FAILED");
          return;
        }
        visiting.add(id);
        for (const d of intentDependsOnEarly.get(id) ?? []) {
          if (d4DepsForPilotage.has(d)) walk(d);
        }
        visiting.delete(id);
        visit.add(id);
        orderedAll.push(id);
      };
      for (const id of [...d4DepsForPilotage].sort()) walk(id);

      const isSatisfied = (prior: string | undefined) => {
        const u = (prior ?? "").toUpperCase();
        return (
          u === "APPLIED" ||
          u === "AVAILABLE" ||
          u === "OK" ||
          u === "SUCCESS" ||
          u === "ALREADY_APPLIED"
        );
      };

      // Wave batching: peers without unmet D4 deps share one maybeCapitalize call
      // so E1 parent/enfant SUBJECT batch stays coherent; waves respect dependsOn.
      const pending = new Set(
        orderedAll.filter((id) => crossCapOutcomeByIntentId.get(id) !== "FAILED"),
      );
      let writtenTotal = 0;
      let ranAny = false;
      while (pending.size > 0 && !ownershipLostBeforeD4) {
        const wave: string[] = [];
        for (const dep of orderedAll) {
          if (!pending.has(dep)) continue;
          const depsOfDep = intentDependsOnEarly.get(dep) ?? [];
          let blocked: string | null = null;
          let waiting = false;
          for (const d of depsOfDep) {
            if (pilotageIntentIdsEarly.has(d)) {
              blocked = `D4 (${dep}) dépend d'un acte D5/D6 (${d}) non encore exécuté`;
              break;
            }
            if (pending.has(d)) {
              waiting = true;
              break;
            }
            const prior = crossCapOutcomeByIntentId.get(d);
            if (prior !== undefined) {
              if (!isSatisfied(prior)) {
                blocked = `D4 (${dep}) précondition (${d}) non satisfaite (${prior})`;
                break;
              }
            } else if (d4DepsForPilotage.has(d)) {
              waiting = true;
              break;
            } else {
              blocked = `D4 (${dep}) précondition (${d}) non résolue`;
              break;
            }
          }
          if (blocked) {
            crossCapOutcomeByIntentId.set(dep, "SKIPPED");
            pending.delete(dep);
            continue;
          }
          if (waiting) continue;
          wave.push(dep);
        }
        if (wave.length === 0) {
          for (const id of pending) {
            crossCapOutcomeByIntentId.set(id, "FAILED");
          }
          pending.clear();
          break;
        }
        const proposalsForWave = allKnowledgeProposals.filter((p) =>
          wave.includes(p.intentId),
        );
        const step = await maybeCapitalizeFromExchange(pilotId, preparationId, {
          userText: content,
          assistantText: reply.content,
          generationId: reply.generationId,
          userMessageId: reserved.userMessageId,
          assistantMessageId: earlyAssistantMessageId,
          proposals: proposalsForWave,
          turnFence: {
            commandId: reserved.commandId,
            ownerToken: reserved.ownerToken,
            beforeFenceCheck: turnRaceHooks.beforeD4Effect,
          },
        });
        ranAny = true;
        capitalisation = {
          capitalisations: [
            ...capitalisation.capitalisations,
            ...step.capitalisations,
          ],
          selectionMethod: step.selectionMethod,
          selectionLimit: step.selectionLimit,
          humanDecisionCreated:
            capitalisation.humanDecisionCreated || step.humanDecisionCreated,
          ownershipLost: capitalisation.ownershipLost || step.ownershipLost,
        };
        if (step.ownershipLost) {
          ownershipLostBeforeD4 = true;
          for (const dep of wave) {
            crossCapOutcomeByIntentId.set(dep, "SKIPPED");
            pending.delete(dep);
          }
          break;
        }
        for (const dep of wave) {
          const proposalsForIntent = proposalsForWave.filter((p) => p.intentId === dep);
          const outcome = crossCapOutcomeFromCapitalisations({
            intentId: dep,
            capitalisations: step.capitalisations,
            hadProposal: proposalsForIntent.length > 0,
            ownershipLost: false,
            proposalKind: proposalsForIntent[0]?.kind ?? null,
          });
          crossCapOutcomeByIntentId.set(dep, outcome);
          pending.delete(dep);
        }
        writtenTotal += step.capitalisations.filter(
          (c) => c.status === "AVAILABLE" || c.status === "OK",
        ).length;
      }
      for (const dep of d4DepsForPilotage) {
        if (!crossCapOutcomeByIntentId.has(dep)) {
          crossCapOutcomeByIntentId.set(dep, ownershipLostBeforeD4 ? "SKIPPED" : "FAILED");
        }
      }
      capitalisationRanBeforePilotage = ranAny || d4DepsForPilotage.size > 0;
      emitObs({
        event_name: "d3.turn.knowledge_capitalisation",
        component: "d3.conversation",
        request_id: requestId,
        operation_id: reserved.operationId,
        generation_id: reply.generationId,
```

### extractDurablePilotageIntentIds + resolvePilotageEffectForReplay
```ts
/**
 * E2-FINAL-02 / E2-INT — durable pilotage intent ids.
 * Union effect projections with qualification stash so a partial JSON list
 * cannot hide remaining durable intents.
 */
export function extractDurablePilotageIntentIds(input: {
  fromJsonEffects?: TurnResult["pilotageEffects"] | null;
  resultJson?: string | null;
  semanticIntentIds?: string[] | null;
}): string[] {
  const ids = new Set<string>();
  for (const s of input.semanticIntentIds ?? []) {
    const t = s.trim();
    if (t) ids.add(t);
  }
  for (const e of input.fromJsonEffects ?? []) {
    const t = e.semanticIntentId?.trim() || "";
    if (t) ids.add(t);
  }
  const raw = input.resultJson?.trim();
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as {
        pilotageEffects?: TurnPilotageEffect[];
        semanticQualification?: NoraTurnQualification;
      };
      for (const e of parsed.pilotageEffects ?? []) {
        const t = e.semanticIntentId?.trim() || "";
        if (t) ids.add(t);
      }
      for (const i of parsed.semanticQualification?.intents ?? []) {
        if (
          i.mode === "REQUEST_EFFECT" &&
          (i.capabilityId === "d5.pilotage_command" ||
            i.capabilityId === "d6.human_decision")
        ) {
          const t = i.id.trim();
          if (t) ids.add(t);
        }
      }
    } catch {
      /* ignore malformed stash */
    }
  }
  return [...ids];
}

async function resolvePilotageEffectForReplay(input: {
  pilotId: string;
  projectId: string | null | undefined;
  clientTurnKey?: string | null;
  userMessageId?: string | null;
  fromJson: TurnResult["pilotageEffect"] | null | undefined;
  /** E2-REL-02 — full multi-intent list from stored result_json when present. */
  fromJsonEffects?: TurnResult["pilotageEffects"] | null | undefined;
  humanDecisionCreated: boolean;
  /** Semantic intent ids — preferably from durable qualification, not only result effects. */
  semanticIntentIds?: string[] | null;
  /** Raw turn resultJson (may carry semanticQualification stash without pilotageEffects). */
  resultJson?: string | null;
}): Promise<{
  pilotageEffect: TurnResult["pilotageEffect"];
  pilotageEffects?: TurnPilotageEffect[];
  humanDecisionCreated: boolean;
}> {
  // E2-INT — durable intent set (qualification ∪ projections). A non-empty partial
  // projection must not short-circuit completeness.
  const durableIntentIds = extractDurablePilotageIntentIds({
    fromJsonEffects: input.fromJsonEffects,
    resultJson: input.resultJson,
    semanticIntentIds: input.semanticIntentIds,
  });
  const projectedByIntent = new Map<string, TurnPilotageEffect>();
  for (const e of input.fromJsonEffects ?? []) {
    const id = e.semanticIntentId?.trim();
    if (id) projectedByIntent.set(id, e);
  }
  if (
    input.fromJson?.attempted &&
    input.fromJson.status &&
    input.fromJson.semanticIntentId?.trim()
  ) {
    const id = input.fromJson.semanticIntentId.trim();
    if (!projectedByIntent.has(id)) projectedByIntent.set(id, input.fromJson);
  }

  const projectionComplete =
    durableIntentIds.length > 0 &&
    durableIntentIds.every((id) => projectedByIntent.has(id));

  if (projectionComplete && projectedByIntent.size > 0) {
    const effects = durableIntentIds.map((id) => projectedByIntent.get(id)!);
    const primary =
      effects.find((e) => e.attempted && e.status) ?? effects[0] ?? null;
    return {
      pilotageEffect: input.fromJson ?? primary,
      pilotageEffects: effects,
      humanDecisionCreated:
        input.humanDecisionCreated || effects.some((e) => Boolean(e.decisionId)),
    };
  }

  // Legacy singular projection with no durable multi-intent set.
  if (
    durableIntentIds.length === 0 &&
    input.fromJson?.attempted &&
    input.fromJson.status &&
    projectedByIntent.size <= 1
  ) {
    return {
      pilotageEffect: input.fromJson,
      pilotageEffects: input.fromJson ? [input.fromJson] : undefined,
      humanDecisionCreated: input.humanDecisionCreated || Boolean(input.fromJson.decisionId),
    };
  }

  if (!input.projectId) {
    return {
      pilotageEffect: input.fromJson ?? null,
      pilotageEffects:
        projectedByIntent.size > 0 ? [...projectedByIntent.values()] : undefined,
      humanDecisionCreated: input.humanDecisionCreated,
    };
  }

  // Reconstitute missing durable intents individually (never invent success).
  const intentIds =
    durableIntentIds.length > 0
      ? durableIntentIds
      : [...projectedByIntent.keys()];
  if (intentIds.length > 0 && input.clientTurnKey?.trim()) {
    const effects: TurnPilotageEffect[] = [];
    let human = input.humanDecisionCreated;
    for (const semanticIntentId of intentIds) {
      const projected = projectedByIntent.get(semanticIntentId);
      if (projected) {
        effects.push(projected);
        human = human || Boolean(projected.decisionId);
        continue;
      }
      const reconstituted = await reconstituteConversationalAuthority({
        pilotId: input.pilotId,
        projectId: input.projectId,
        clientTurnKey: input.clientTurnKey,
        userMessageId: input.userMessageId,
        semanticIntentId,
      });
      if (!reconstituted) {
        effects.push(unknownPilotageEffectRecord({ intentId: semanticIntentId }));
        continue;
      }
      const effect = pilotageEffectFromAuthority(reconstituted, semanticIntentId);
      if (effect) effects.push(effect);
      else effects.push(unknownPilotageEffectRecord({ intentId: semanticIntentId }));
      human = human || Boolean(reconstituted.humanDecisionCreated);
    }
    if (effects.length > 0) {
      return {
        pilotageEffect: pickPrimaryPilotageEffect(effects),
```

### crossCapOutcomeFromCapitalisations
```ts
/**
 * E2-FINAL-01 / E2-INT — map capitalisation rows to a single intent outcome.
 * Never attribute another intent's success. Partial ⇒ not satisfied.
 * When acquis/open_point rows exist for the intent, ignore auxiliary subject
 * side-effect rows so a subject-only AVAILABLE cannot satisfy a record intent.
 * When proposalKind is ACQUIS/OPEN_POINT, subject-only rows never count as APPLIED.
 */
export function crossCapOutcomeFromCapitalisations(input: {
  intentId: string;
  capitalisations: Array<{ intentId?: string; status: string; kind?: string }>;
  hadProposal: boolean;
  ownershipLost?: boolean;
  /** Knowledge proposal kind when known (SUBJECT | ACQUIS | OPEN_POINT). */
  proposalKind?: string | null;
}): PilotageIntentStepOutcome {
  if (input.ownershipLost) return "SKIPPED";
  let related = input.capitalisations.filter((c) => c.intentId === input.intentId);
  const proposalKind = (input.proposalKind ?? "").toUpperCase();
  const expectsRecordPrimary =
    proposalKind === "ACQUIS" || proposalKind === "OPEN_POINT";
  const hasRecordPrimary = related.some(
    (c) => c.kind === "acquis" || c.kind === "open_point",
  );
  if (hasRecordPrimary || expectsRecordPrimary) {
    related = related.filter(
      (c) =>
        c.kind === "acquis" ||
        c.kind === "open_point" ||
        c.kind === "open_point_resolve",
    );
  }
  if (related.length === 0) {
    // No primary rows — never treat auxiliary subject AVAILABLE as complete success.
    return input.hadProposal ? "FAILED" : "SKIPPED";
  }
  const ok = (s: string) => {
    const u = s.toUpperCase();
    return u === "AVAILABLE" || u === "OK" || u === "SUCCESS" || u === "APPLIED";
  };
  if (related.every((c) => ok(c.status))) return "APPLIED";
  if (related.some((c) => ok(c.status))) return "PARTIAL";
  return "FAILED";
}

export function isSuccessfulPilotageCommandStatus(status: string | null | undefined): boolean {
  const s = (status ?? "").toUpperCase();
  return s === "APPLIED" || s === "ALREADY_APPLIED";
}

/**
 * Intent-id outcome map entry after each binding step.
```

### loadAttributionConflictWorkIds + call site
```ts
/**
 * E2-FINAL-03 / E2-INT — work ids whose observation set is contradictory.
 * Conflict detection is NOT narrowed by period/model filters: a presentation
 * window must not fabricate a coherent attribution when a conflict exists.
 */
async function loadAttributionConflictWorkIds(
  pilotId: string,
  workProjectById: Map<string, string | null>,
): Promise<Set<string>> {
  const lane = studioLane();
  const workIds = [...workProjectById.keys()];
  if (workIds.length === 0) return new Set();
  const obs = await db
    .select({
      cognitiveWorkId: providerUsageObservations.cognitiveWorkId,
      projectId: providerUsageObservations.projectId,
    })
    .from(providerUsageObservations)
    .where(
      and(
        eq(providerUsageObservations.ownerPilotId, pilotId),
        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
        inArray(providerUsageObservations.cognitiveWorkId, workIds),
      ),
    );
  const byWork = new Map<string, Array<{ projectId?: string | null }>>();
  for (const r of obs) {
    if (!r.cognitiveWorkId) continue;
    const list = byWork.get(r.cognitiveWorkId) ?? [];
    list.push({ projectId: r.projectId });
    byWork.set(r.cognitiveWorkId, list);
  }
  const conflicts = new Set<string>();
  for (const [wid, rows] of byWork) {
    if (isFinOpsWorkAttributionConflict(workProjectById.get(wid) ?? null, rows)) {
      conflicts.add(wid);
    }
  }
  return conflicts;
}

async function loadObservations(
  pilotId: string,
  input: FinOpsFilterInput,
): Promise<ObservationRow[]> {
  const periodDays = input.periodDays ?? 30;
  const since = periodStartDate(periodDays);
  let cognitiveWorkIdsOnProject: string[] | undefined;
  let cognitiveWorkIdsHorsProjet: string[] | undefined;
  let workProjectById = new Map<string, string | null>();
  let conflictWorkIds = new Set<string>();
  if (input.projectId) {
    await assertProjectOwned(pilotId, input.projectId);
    const workRows = await db
      .select({ id: cognitiveWorks.id, projectId: cognitiveWorks.projectId })
      .from(cognitiveWorks)
      .where(eq(cognitiveWorks.ownerPilotId, pilotId));
    workProjectById = new Map(workRows.map((w) => [w.id, w.projectId]));
    // Resolve conflicts from the full observation set BEFORE project/period filtering.
    conflictWorkIds = await loadAttributionConflictWorkIds(pilotId, workProjectById);
    cognitiveWorkIdsOnProject = workRows
      .filter((w) => w.projectId === input.projectId && !conflictWorkIds.has(w.id))
      .map((w) => w.id);
    cognitiveWorkIdsHorsProjet = workRows
      .filter((w) => w.projectId == null && !conflictWorkIds.has(w.id))
      .map((w) => w.id);
  }
  const rows = await db
    .select()
    .from(providerUsageObservations)
    .where(
      baseObservationWhere(
        pilotId,
        { ...input, periodDays },
        since,
        cognitiveWorkIdsOnProject,
        cognitiveWorkIdsHorsProjet,
      ),
    )
    .orderBy(desc(providerUsageObservations.createdAt));
  if (!input.projectId) return rows;
  // Defense in depth — drop residual conflicts (obs≠work) and multi-scope works.
  return rows.filter((r) => {
    if (r.cognitiveWorkId && conflictWorkIds.has(r.cognitiveWorkId)) return false;
    const workPid = r.cognitiveWorkId
      ? workProjectById.get(r.cognitiveWorkId) ?? null
      : null;
    return (
      effectiveFinOpsProjectId({
        observationProjectId: r.projectId,
        workProjectId: workPid,
      }) === input.projectId
```

### loadFinOpsWorks conflict attribution
```ts
  const works = await db
    .select({
      id: cognitiveWorks.id,
      objective: cognitiveWorks.objective,
      status: cognitiveWorks.status,
      projectId: cognitiveWorks.projectId,
    })
    .from(cognitiveWorks)
    .where(
      and(inArray(cognitiveWorks.id, workIds), eq(cognitiveWorks.ownerPilotId, pilotId)),
    );

  // E2-INT — attribution coherence uses full history, not the period/model slice alone.
  const workProjectById = new Map(works.map((w) => [w.id, w.projectId]));
  const conflictWorkIds = await loadAttributionConflictWorkIds(pilotId, workProjectById);

  const projectIds = [
    ...new Set(
      works.flatMap((w) => {
        if (conflictWorkIds.has(w.id)) return [];
        const slice = byWork.get(w.id) ?? [];
        const eff = effectiveFinOpsProjectIdForWork(w.projectId, slice);
        return eff ? [eff] : [];
      }),
    ),
  ];
  const projectNames = new Map<string, string>();
  if (projectIds.length > 0) {
    const projs = await db
      .select({ id: projects.id, name: projects.name })
      .from(projects)
      .where(and(inArray(projects.id, projectIds), eq(projects.ownerPilotId, pilotId)));
    for (const p of projs) projectNames.set(p.id, p.name);
  }

  const items: FinOpsWorkListItem[] = works.map((w) => {
    const slice = byWork.get(w.id) ?? [];
    const last = slice[0]?.createdAt ?? new Date();
    // E2-REL-05 / E2-INT — conflict (full history) ⇒ null (never invent via period slice).
    const effectiveProjectId = conflictWorkIds.has(w.id)
      ? null
      : effectiveFinOpsProjectIdForWork(w.projectId, slice);
    const title =
      (w.objective?.trim() || "Travail cognitif").slice(0, 120) +
      ((w.objective?.length ?? 0) > 120 ? "…" : "");
    return {
      cognitiveWorkId: w.id,
      title,
      projectId: effectiveProjectId,
      projectName: effectiveProjectId
        ? projectNames.get(effectiveProjectId) ?? null
        : null,
      modelsLabel: uniqueModelsLabel(
```

## 14. Tests (full)

### unit e2-final-orchestration-c02.test.ts
```ts
import { describe, expect, it } from "vitest";
import {
  crossCapOutcomeFromCapitalisations,
  dependencyPreconditionBlockReason,
  unknownPilotageEffectRecord,
} from "@/domains/conversation/pilotage-effect-aggregate";
import { extractDurablePilotageIntentIds } from "@/domains/conversation/service";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  normalizeKnowledgeRecordKind,
  extractKnowledgeProposals,
} from "@/domains/conversation/semantic-qualification";

describe("E2-FINAL-01 — crossCapOutcomeFromCapitalisations", () => {
  it("never attributes another intent's AVAILABLE", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-b",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "OK" },
        ],
      }),
    ).toBe("FAILED");
  });

  it("requires complete success for multi-op intent", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-a",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "FAILED" },
        ],
      }),
    ).toBe("PARTIAL");
  });

  it("APPLIED only when all related rows succeed", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-a",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "OK" },
        ],
      }),
    ).toBe("APPLIED");
  });

  it("subject side-effect alone does not satisfy acquis primary", () => {
    // Auxiliary subject is ignored once acquis rows exist; acquis FAILED ⇒ FAILED.
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-d4",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-d4", kind: "subject", status: "AVAILABLE" },
          { intentId: "i-d4", kind: "acquis", status: "FAILED" },
        ],
      }),
    ).toBe("FAILED");
  });

  it("subject-only AVAILABLE is not APPLIED when proposalKind is ACQUIS", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-d4",
        hadProposal: true,
        proposalKind: "ACQUIS",
        capitalisations: [{ intentId: "i-d4", kind: "subject", status: "AVAILABLE" }],
      }),
    ).toBe("FAILED");
  });

  it("acquis AVAILABLE satisfies even with auxiliary subject row", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-d4",
        hadProposal: true,
        proposalKind: "ACQUIS",
        capitalisations: [
          { intentId: "i-d4", kind: "subject", status: "AVAILABLE" },
          { intentId: "i-d4", kind: "acquis", status: "AVAILABLE" },
        ],
      }),
    ).toBe("APPLIED");
  });

  it("PARTIAL does not satisfy D5 dependsOn", () => {
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4"],
        pilotageIntentIds: new Set(["i-d5"]),
        outcomeByIntentId: new Map(),
        crossCapOutcomeByIntentId: new Map([["i-d4", "PARTIAL"]]),
      }),
    ).toMatch(/n'est pas appliqué|PARTIAL/i);
  });
});

describe("E2-FINAL-01 — knowledgeKind alias normalization", () => {
  it("maps FACT → ACQUIS", () => {
    expect(normalizeKnowledgeRecordKind("FACT")).toBe("ACQUIS");
    expect(normalizeKnowledgeRecordKind("ACQUIS")).toBe("ACQUIS");
  });

  it("extractKnowledgeProposals accepts FACT alias", () => {
    const proposals = extractKnowledgeProposals({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "t",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "know",
          parameters: {
            knowledgeKind: "FACT" as never,
            knowledgeStatement: "x".repeat(20),
            epistemic: "recommended",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "",
    });
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.kind).toBe("ACQUIS");
  });
});

describe("E2-FINAL-02 — durable intent recovery without pilotageEffects", () => {
  it("extracts REQUEST_EFFECT D5/D6 ids from semanticQualification stash", () => {
    const resultJson = JSON.stringify({
      status: "UNKNOWN",
      semanticQualification: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        intents: [
          {
            id: "i-open",
            capabilityId: "d5.pilotage_command",
            mode: "REQUEST_EFFECT",
            summary: "open",
            parameters: { pilotageOperation: "OPEN_CYCLE" },
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
          {
            id: "i-d4",
            capabilityId: "d4.record_knowledge",
            mode: "REQUEST_EFFECT",
            summary: "know",
            parameters: { knowledgeKind: "FACT", knowledgeStatement: "x".repeat(20) },
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
          {
            id: "i-trans",
            capabilityId: "d5.pilotage_command",
            mode: "REQUEST_EFFECT",
            summary: "trans",
            parameters: { pilotageOperation: "TRANSITION_CYCLE" },
            constraints: [],
            dependsOn: ["i-open"],
            sourceEvidence: [],
          },
        ],
      },
    });
    expect(extractDurablePilotageIntentIds({ resultJson })).toEqual([
      "i-open",
      "i-trans",
    ]);
  });

  it("unions pilotageEffects with qualification stash (partial projection)", () => {
    expect(
      extractDurablePilotageIntentIds({
        fromJsonEffects: [
          { attempted: true, intentClarity: "CLEAR", source: "none", semanticIntentId: "i-a" },
          { attempted: true, intentClarity: "CLEAR", source: "none", semanticIntentId: "i-b" },
        ],
        resultJson: JSON.stringify({
          semanticQualification: {
            intents: [
              {
                id: "i-other",
                capabilityId: "d5.pilotage_command",
                mode: "REQUEST_EFFECT",
              },
            ],
          },
        }),
      }),
    ).toEqual(["i-a", "i-b", "i-other"]);
  });

  it("unknownPilotageEffectRecord is explicit, not a fabricated success", () => {
    const r = unknownPilotageEffectRecord({ intentId: "i-x", operation: "OPEN_CYCLE" });
    expect(r.status).toBe("UNKNOWN");
    expect(r.attempted).toBe(false);
    expect(r.semanticIntentId).toBe("i-x");
  });
});
```

### integration e2-final-orchestration-c02.pg.test.ts
```ts
/**
 * E2-FINAL-01/02 — D4→D5 precondition integrity + C02 recovery without pilotageEffects.
 */
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommands,
  conversationTurnCommands,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  lookupDurableTurnByClientKey,
  postUserMessageAndNora,
} from "@/domains/conversation/service";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";

const STATEMENT =
  "Les règles d'habilitation exigent une validation du Pilote avant ouverture d'accès.";

function qualD4thenD5(opts?: { failD4B?: boolean }) {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "E2-FINAL orchestration",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: [
      {
        id: "i-d4-a",
        capabilityId: "d4.record_knowledge" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Consolidates habilitation rules",
        parameters: {
          knowledgeKind: "ACQUIS" as const,
          knowledgeStatement: STATEMENT,
          epistemic: "recommended" as const,
          subjectTitle: "Habilitations",
        },
        constraints: [] as string[],
        dependsOn: [] as string[],
        sourceEvidence: [] as string[],
      },
      {
        id: "i-d4-b",
        capabilityId: "d4.record_knowledge" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: opts?.failD4B ? "x" : "Second acquis",
        parameters: {
          knowledgeKind: "ACQUIS" as const,
          // Too short when failD4B → extractor skips → FAILED/SKIPPED for dep
          knowledgeStatement: opts?.failD4B ? "trop court" : `${STATEMENT} Variante B.`,
          epistemic: "recommended" as const,
          subjectTitle: "Habilitations",
        },
        constraints: [] as string[],
        dependsOn: [] as string[],
        sourceEvidence: [] as string[],
      },
      {
        id: "i-d5",
        capabilityId: "d5.pilotage_command" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Propose trajectory from consolidated rules",
        parameters: {
          pilotageOperation: "PROPOSE_TRAJECTORY" as const,
          forecastSteps: [
            {
              order: 1,
              cycleType: "CONCEPTION_FONCTIONNELLE" as const,
              rationale: "Après consolidation habilitations",
              certainty: "ENVISIONED" as const,
            },
          ],
        },
        constraints: [] as string[],
        dependsOn: ["i-d4-b"],
        sourceEvidence: [] as string[],
      },
    ],
    clarifications: [] as string[],
    replyDraft: "Consolidation puis proposition.",
  };
}

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  const name = `${label}-${newId("p").slice(-6)}`;
  await updatePreview(pilotId, prep.id, name, "e2-final");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e2-final",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`setup failed: ${created.status}`);
  }
  return { pilotId, preparationId: prep.id, projectId: created.projectId };
}

function mockNoraTurn(qual: ReturnType<typeof qualD4thenD5> | Record<string, unknown>) {
  const policy = buildCognitivePolicy("x", undefined, { profileHint: "simple" });
  const q = qual as ReturnType<typeof qualD4thenD5>;
  return {
    status: "COMPLETE" as const,
    content: q.replyDraft,
    generationId: `e2f-${newId("gen")}`,
    mode: "deterministic-fixture",
    policy,
    modelRequested: policy.modelRequested,
    modelApplied: policy.modelRequested,
    effortRequested: policy.effortRequested,
    effortApplied: policy.effortRequested,
    attempts: [],
    toolCallsObserved: 0,
    d4CharsReturned: 0,
    observedToolSources: [],
    qualification: q,
    conductor: {
      workId: `work-${newId("cw")}`,
      revision: 1,
      segmentsRun: 1,
      resumed: false,
      suspended: false,
      suspendReason: null,
      investigation: {
        intentSummary: q.goal,
        desiredOutcome: "",
        questions: [],
        sources: [],
        remainingWork: [],
        constraints: [],
        risks: [],
        conclusions: [],
        contradictions: [],
        exclusions: [],
        profileHint: "analyse",
        sufficiency: "UNKNOWN",
        contractReady: false,
      },
      production: { kind: "REPLY" as const, status: "COMPLETE" as const, parts: [] },
    },
  };
}

describe("E2-FINAL-01/02 — orchestration + C02 durable", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("D4-A succeeds, D4-B fails → D5 depending on B does not mutate", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-neg");
    const qual = qualD4thenD5({ failD4B: true });
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Consolide puis propose une trajectoire",
      { clientTurnKey },
    );

    expect(result.status).toBe("COMPLETE");
    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "REJECTED" || d5?.reasonCode === "DEPENDENCY_PRECONDITION").toBe(
      true,
    );
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "PROPOSE_TRAJECTORY")).toBe(false);
  });

  it("D4 succeeds → D5 depending on D4 can apply (OPEN_CYCLE)", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-pos");
    const qual = qualD4thenD5();
    qual.intents = [
      qual.intents.find((i) => i.id === "i-d4-a")!,
      {
        id: "i-d5",
        capabilityId: "d5.pilotage_command" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Ouvre le cycle cadrage",
        parameters: {
          pilotageOperation: "OPEN_CYCLE",
          cycleType: "CADRAGE",
        } as Record<string, unknown>,
        constraints: [] as string[],
        dependsOn: ["i-d4-a"],
        sourceEvidence: [] as string[],
      },
    ] as typeof qual.intents;

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Consolide les règles puis ouvre le cycle",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");
    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    if (!(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED")) {
      throw new Error(
        `D5 not applied: ${JSON.stringify({
          d5,
          effects: result.pilotageEffects,
          caps: result.capitalisation,
        })}`,
      );
    }
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "OPEN_CYCLE")).toBe(true);
  });

  it("E2-INT — D4 early + independent remaining D4 both capitalize; D5 depends on early only", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-mix");
    const STATEMENT_B =
      "La planification des accès suit le cycle de validation Pilote documenté.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "mix",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i-d4-a",
          capabilityId: "d4.record_knowledge" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "rules",
          parameters: {
            knowledgeKind: "ACQUIS" as const,
            knowledgeStatement: STATEMENT,
            epistemic: "recommended" as const,
            subjectTitle: "Habilitations",
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-d4-b",
          capabilityId: "d4.record_knowledge" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "plan",
          parameters: {
            knowledgeKind: "ACQUIS" as const,
            knowledgeStatement: STATEMENT_B,
            epistemic: "recommended" as const,
            subjectTitle: "Planification",
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-d5",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "open",
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CADRAGE",
          } as Record<string, unknown>,
          constraints: [] as string[],
          dependsOn: ["i-d4-a"],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Consolidation mixte.",
    };
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Consolide habilitations et planification puis ouvre",
      { clientTurnKey: newId("ctk") },
    );
    expect(result.status).toBe("COMPLETE");
    // TurnResult.capitalisation is the AVAILABLE slice (array); attempted retains full rows.
    const caps = (
      Array.isArray(result.capitalisation)
        ? result.capitalisation
        : (result.capitalisationAttempted as unknown[]) ?? []
    ) as Array<{ intentId?: string; kind?: string; status?: string }>;
    const byIntent = (id: string) => caps.filter((c) => c.intentId === id);
    if (!byIntent("i-d4-a").some((c) => c.status === "AVAILABLE" || c.status === "OK")) {
      throw new Error(
        `D4-A missing: ${JSON.stringify({ caps, attempted: result.capitalisationAttempted })}`,
      );
    }
    if (!byIntent("i-d4-b").some((c) => c.status === "AVAILABLE" || c.status === "OK")) {
      throw new Error(
        `D4-B remaining missing: ${JSON.stringify({ caps, attempted: result.capitalisationAttempted })}`,
      );
    }
    // No double-write of the same early intent as a second AVAILABLE acquis pair.
    const acquisA = byIntent("i-d4-a").filter((c) => c.kind === "acquis" && c.status === "AVAILABLE");
    expect(acquisA.length).toBeLessThanOrEqual(1);
    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED").toBe(true);
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "OPEN_CYCLE")).toBe(true);
  });

  it("C02 lookup reconstitutes intents from qualification stash without pilotageEffects", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-c02");
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "c02",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "OPEN",
          parameters: {
            pilotageOperation: "OPEN_CYCLE" as const,
            cycleType: "CADRAGE" as const,
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-method",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "METHOD",
          parameters: {
            pilotageOperation: "CHOOSE_METHOD" as const,
            methodRef: "SFIA",
            methodVersion: "9",
          },
          constraints: [] as string[],
          dependsOn: ["i-open"],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Cycle et méthode.",
    };

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(pilotId, preparationId, "Ouvre et choisis", {
      clientTurnKey,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.pilotageEffects?.length).toBeGreaterThanOrEqual(1);

    // Simulate interruption before final multi-intent payload: strip pilotageEffects,
    // keep semanticQualification stash (as markTurnUnknown merge would).
    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.clientTurnKey, clientTurnKey))
        .limit(1)
    )[0];
    expect(row).toBeTruthy();
    const prev = JSON.parse(row!.resultJson || "{}") as Record<string, unknown>;
    const stripped = {
      status: "UNKNOWN",
      semanticQualification: prev.semanticQualification,
      semanticQualificationStashedAt: prev.semanticQualificationStashedAt,
      // deliberately no pilotageEffects / pilotageEffect
    };
    await db
      .update(conversationTurnCommands)
      .set({ status: "UNKNOWN", resultJson: JSON.stringify(stripped) })
      .where(eq(conversationTurnCommands.id, row!.id));

    const lookup = await lookupDurableTurnByClientKey(
      pilotId,
      preparationId,
      clientTurnKey,
    );
    expect(lookup.found).toBe(true);
    const ids = (lookup.pilotageEffects ?? [])
      .map((e) => e.semanticIntentId)
      .filter(Boolean);
    expect(ids).toContain("i-open");
    // Second intent reconstituted or UNKNOWN — never silently dropped.
    expect(ids).toContain("i-method");
    const fabricated = (lookup.pilotageEffects ?? []).filter(
      (e) => e.semanticIntentId === "i-method" && e.status === "APPLIED" && !e.commandId,
    );
    expect(fabricated.length).toBe(0);

    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    // No duplication on lookup (read-only).
    const openCount = cmds.filter((c) => c.operation === "OPEN_CYCLE").length;
    expect(openCount).toBeLessThanOrEqual(1);
  });

  it("E2-INT — C02 partial pilotageEffects projection still recovers missing durable intent", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-c02p");
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "c02-partial",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "OPEN",
          parameters: {
            pilotageOperation: "OPEN_CYCLE" as const,
            cycleType: "CADRAGE" as const,
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-method",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "METHOD",
          parameters: {
            pilotageOperation: "CHOOSE_METHOD" as const,
            methodRef: "SFIA",
            methodVersion: "9",
          },
          constraints: [] as string[],
          dependsOn: ["i-open"],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Cycle et méthode.",
    };
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);
    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(pilotId, preparationId, "Ouvre et choisis", {
      clientTurnKey,
    });
    expect(result.status).toBe("COMPLETE");
    const fullEffects = result.pilotageEffects ?? [];
    expect(fullEffects.length).toBeGreaterThanOrEqual(1);
    const firstOnly = fullEffects.find((e) => e.semanticIntentId === "i-open") ?? fullEffects[0]!;

    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.clientTurnKey, clientTurnKey))
        .limit(1)
    )[0];
    expect(row).toBeTruthy();
    const prev = JSON.parse(row!.resultJson || "{}") as Record<string, unknown>;
    // Partial projection: only first effect kept — second must still be reconciled.
    const partial = {
      status: "COMPLETE",
      semanticQualification: prev.semanticQualification,
      semanticQualificationStashedAt: prev.semanticQualificationStashedAt,
      pilotageEffects: [firstOnly],
      pilotageEffect: firstOnly,
    };
    await db
      .update(conversationTurnCommands)
      .set({ resultJson: JSON.stringify(partial) })
      .where(eq(conversationTurnCommands.id, row!.id));

    const lookup = await lookupDurableTurnByClientKey(
      pilotId,
      preparationId,
      clientTurnKey,
    );
    expect(lookup.found).toBe(true);
    const ids = (lookup.pilotageEffects ?? []).map((e) => e.semanticIntentId).filter(Boolean);
    expect(ids).toContain("i-open");
    expect(ids).toContain("i-method");
    const fabricated = (lookup.pilotageEffects ?? []).filter(
      (e) => e.semanticIntentId === "i-method" && e.status === "APPLIED" && !e.commandId,
    );
    expect(fabricated.length).toBe(0);
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.filter((c) => c.operation === "OPEN_CYCLE").length).toBeLessThanOrEqual(1);
  });
});
```

### integration e2-final-finops-attribution.pg.test.ts
```ts
/**
 * E2-FINAL-03 — real FinOps service attribution on PostgreSQL DEV (no LIVE).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db, sql as pgSql } from "@/db/client";
import {
  cognitiveWorks,
  pilots,
  preparations,
  projects,
  providerUsageObservations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  loadFinOpsSummary,
  loadFinOpsWorkDetail,
  loadFinOpsWorks,
} from "@/domains/finops/usage-read-service";

async function seedPilot() {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: "e2-final-finops",
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  return { pilotId, preparationId: prep.id };
}

async function seedProject(pilotId: string, preparationId: string, name: string) {
  await updatePreview(pilotId, preparationId, name, "e2-final");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, preparationId))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e2-final",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`project seed failed: ${created.status}`);
  }
  return created.projectId;
}

async function insertObs(input: {
  pilotId: string;
  projectId: string | null;
  workId: string | null;
  tokens: number;
  model?: string;
}) {
  const id = crypto.randomUUID();
  await db.insert(providerUsageObservations).values({
    id,
    ownerPilotId: input.pilotId,
    projectId: input.projectId,
    cognitiveWorkId: input.workId,
    lane: "DEV",
    operation: "chat.completions",
    modelRequested: input.model ?? "gpt-test",
    modelApplied: "UNVERIFIED",
    status: "OBSERVED",
    costCoverage: "KNOWN",
    granularity: "REQUEST",
    tariffVersion: "test-v1",
    idempotencyKey: `e2-final-${id}`,
    estimatedCostUsd: "0.01",
    inputTokens: input.tokens,
    outputTokens: 0,
    cachedInputTokens: 0,
    totalTokens: input.tokens,
    providerRequests: 1,
    segmentIndex: 0,
    createdAt: new Date(),
    limitsJson: [],
  });
  return id;
}

describe("E2-FINAL-03 — FinOps attribution coherence (PG)", () => {
  let pilotId = "";
  let prepId = "";
  let projectA = "";
  let projectB = "";
  let workAA = "";
  let workNullMulti = "";
  let workHors = "";
  let workConflictBA = "";
  const createdObs: string[] = [];
  const createdWorks: string[] = [];

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    const seeded = await seedPilot();
    pilotId = seeded.pilotId;
    prepId = seeded.preparationId;
    projectA = await seedProject(pilotId, prepId, `finA-${newId("p").slice(-6)}`);
    // Second project needs new prep revision — open another prep path via same prep after bump
    await updatePreview(pilotId, prepId, `finB-${newId("p").slice(-6)}`, "e2-final-b");
    const refreshed = (
      await db.select().from(preparations).where(eq(preparations.id, prepId))
    )[0]!;
    // createProjectCommand requires matching name — create via direct insert for isolation
    projectB = newId("proj");
    await db.insert(projects).values({
      id: projectB,
      ownerPilotId: pilotId,
      name: `finB-${projectB.slice(-6)}`,
    });
    void refreshed;

    workAA = newId("cgw");
    workNullMulti = newId("cgw");
    workHors = newId("cgw");
    workConflictBA = newId("cgw");
    for (const [id, projectId] of [
      [workAA, projectA],
      [workNullMulti, null],
      [workHors, null],
      [workConflictBA, projectA],
    ] as const) {
      await db.insert(cognitiveWorks).values({
        id,
        ownerPilotId: pilotId,
        projectId,
        preparationId: prepId,
        objective: `work ${id}`,
        status: "COMPLETE",
        revision: 1,
      });
      createdWorks.push(id);
    }

    createdObs.push(
      await insertObs({ pilotId, projectId: projectA, workId: workAA, tokens: 100 }),
      await insertObs({ pilotId, projectId: null, workId: workAA, tokens: 10 }),
      await insertObs({ pilotId, projectId: projectA, workId: workNullMulti, tokens: 40 }),
      await insertObs({ pilotId, projectId: projectB, workId: workNullMulti, tokens: 60 }),
      await insertObs({ pilotId, projectId: null, workId: workHors, tokens: 7 }),
      await insertObs({ pilotId, projectId: projectB, workId: workConflictBA, tokens: 99 }),
    );
  });

  afterAll(async () => {
    if (createdObs.length) {
      await pgSql`DELETE FROM provider_usage_observations WHERE id = ANY(${createdObs})`;
    }
    if (createdWorks.length) {
      await pgSql`DELETE FROM cognitive_works WHERE id = ANY(${createdWorks})`;
    }
    if (projectB) {
      await pgSql`DELETE FROM projects WHERE id = ${projectB}`;
    }
  });

  it("A/A and NULL/A concordant under project A; B/A conflict excluded", async () => {
    const summaryA = await loadFinOpsSummary(pilotId, { projectId: projectA, period: "30" });
    const summaryB = await loadFinOpsSummary(pilotId, { projectId: projectB, period: "30" });
    const global = await loadFinOpsSummary(pilotId, { period: "30" });

    // workNullMulti A+B must not appear in either project filter (conflict).
    const worksA = await loadFinOpsWorks(pilotId, { projectId: projectA, period: "30" });
    const worksB = await loadFinOpsWorks(pilotId, { projectId: projectB, period: "30" });
    expect(worksA.items.some((w) => w.cognitiveWorkId === workNullMulti)).toBe(false);
    expect(worksB.items.some((w) => w.cognitiveWorkId === workNullMulti)).toBe(false);

    // Concordant workAA appears under A.
    expect(worksA.items.some((w) => w.cognitiveWorkId === workAA)).toBe(true);

    // B/A conflict work excluded from A and B project scopes.
    expect(worksA.items.some((w) => w.cognitiveWorkId === workConflictBA)).toBe(false);
    expect(worksB.items.some((w) => w.cognitiveWorkId === workConflictBA)).toBe(false);

    // Global still retains conflicting consumptions (not erased).
    expect(global.hasObservations).toBe(true);
    const detailConflict = await loadFinOpsWorkDetail(pilotId, workConflictBA);
    expect(detailConflict.projectId).toBeNull();
    const detailMulti = await loadFinOpsWorkDetail(pilotId, workNullMulti);
    expect(detailMulti.projectId).toBeNull();

    // Exact token reconciliation (conflicts excluded from project scopes).
    const tokensA =
      summaryA.kpis.totalTokens.kind === "known" || summaryA.kpis.totalTokens.kind === "partial"
        ? summaryA.kpis.totalTokens.value
        : 0;
    const tokensB =
      summaryB.kpis.totalTokens.kind === "known" || summaryB.kpis.totalTokens.kind === "partial"
        ? summaryB.kpis.totalTokens.value
        : 0;
    const tokensG =
      global.kpis.totalTokens.kind === "known" || global.kpis.totalTokens.kind === "partial"
        ? global.kpis.totalTokens.value
        : 0;
    // workAA 100+10 = 110 under A; conflicts 40+60 and 99 excluded; B empty.
    expect(tokensA).toBe(110);
    expect(tokensB).toBe(0);
    // Global retains all observations: 100+10+40+60+7+99 = 316.
    expect(tokensG).toBe(316);

    // Hors-projet legitimate work remains distinguishable (not a conflict).
    const detailHors = await loadFinOpsWorkDetail(pilotId, workHors);
    expect(detailHors.projectId).toBeNull();
  });

  it("E2-INT — short period cannot fabricate project coherence for historical conflict", async () => {
    // Age the A observation of the multi-project work beyond a 7-day window.
    const oldId = createdObs[2]!; // workNullMulti @ projectA tokens 40
    await pgSql`UPDATE provider_usage_observations SET created_at = NOW() - INTERVAL '20 days' WHERE id = ${oldId}`;

    const summaryA7 = await loadFinOpsSummary(pilotId, { projectId: projectA, period: "7" });
    const worksA7 = await loadFinOpsWorks(pilotId, { projectId: projectA, period: "7" });
    // Conflict still detected from full history — multi work stays out of project A.
    expect(worksA7.items.some((w) => w.cognitiveWorkId === workNullMulti)).toBe(false);
    const tokensA7 =
      summaryA7.kpis.totalTokens.kind === "known" || summaryA7.kpis.totalTokens.kind === "partial"
        ? summaryA7.kpis.totalTokens.value
        : 0;
    // Within 7d under A: only workAA 100+10 (aged multi A+B still conflict-excluded).
    expect(tokensA7).toBe(110);

    const worksGlobal7 = await loadFinOpsWorks(pilotId, { period: "7" });
    const multiItem = worksGlobal7.items.find((w) => w.cognitiveWorkId === workNullMulti);
    // If the recent B obs appears in the 7d list, attribution must stay null (conflict).
    if (multiItem) {
      expect(multiItem.projectId).toBeNull();
    }
  });

  it("isolates another pilot", async () => {
    const other = newId("pilot");
    await db.insert(pilots).values({
      id: other,
      displayName: "other",
      githubUserId: `gh-${other}`,
    });
    const summary = await loadFinOpsSummary(other, { period: "30" });
    expect(summary.hasObservations).toBe(false);
  });
});
```
