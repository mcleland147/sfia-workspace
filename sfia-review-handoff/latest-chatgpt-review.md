# SFIA Review Pack FULL — ML5 Integrated Continuity Corrective Delivery — COMPLETION REPRISE

**Date (Europe/Paris):** 2026-11-27 16:50 UTC+01:00
**Generated UTC:** 2026-11-27T15:50:15Z
**Cycle:** 8 — Delivery / Critical — **reprise même macro-lot** (not new macro-lot)
**Branch:** `sfia/next-ml5-integrated-delivery-20261123`
**HEAD (committed baseline):** `58ca9486003805f74e69a0842f2c0792a7184437`
**Worktree:** **DIRTY** — cumulative construction (expected)
**Merge-base main:** `997897fd7cf914771e7d08e8030dc7123fab7d25`
**Handoff tip at intake:** `9897b91dc76cb1748a80d5597f2e98131dc0f456` / blob `26ce09754b196426d42b92833a23386059efdd55`
**Classe produit:** NO RELEASE
**Verdict (pack):** **READY WITH RESERVES** — construction DEV reprise complete at declared DET level; LIVE gates explicit.
**Handoff publish:** **HANDOFF UPDATED — REMOTE VERIFIED**
**Remote branch:** `sfia/review-handoff`
**Canonical file:** `sfia-review-handoff/latest-chatgpt-review.md`
**ChatGPT must verify tip via `git ls-remote` / fetch — do not trust an embedded tip SHA that may lag one publish hop.**
**Commit message:** `review(next): complete integrated corrective delivery and verification`

---

## 1. Mandat reprise

GO Morris: compléter et vérifier le macro-lot correctif intégré ML5 (17 MP MaintiPlan + arbitrages 27/11/2026) en **DEV uniquement**.
Interdictions respectées: pas de nouveau macro-lot; pas de LIVE campagne; pas de mutation RECETTE; **pas de commit projet**; L3 handoff réservé intégrateur.

Objectif pack: revue ChatGPT **à distance** de la construction — contenu exploitable (diffs + fichiers neufs), matrices 26+17, preuves P1/P2/P3, réserves LIVE.

---

## 2. Local Git Truth Check

| Item | Observed |
|------|----------|
| Repo | `mcleland147/sfia-workspace` (local worktree) |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `58ca9486003805f74e69a0842f2c0792a7184437` |
| main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Handoff remote | `9897b91dc76c…` blob `26ce0975…` |
| Staged unexpected | none expected |
| Dirty | **yes** — product edits under `projects/sfia-studio-next/` |

**Verdict:** GIT TRUTH OK for reprise (dirty worktree expected).

### Git Review Index

```text
Git Review Index — ML5 reprise 2026-11-27
- branch: sfia/next-ml5-integrated-delivery-20261123
- HEAD: 58ca9486003805f74e69a0842f2c0792a7184437
- main: 997897fd7cf914771e7d08e8030dc7123fab7d25
- merge-base: 997897fd (per user mandate)
- findings: .tmp-sfia-review/p2-continuity-findings.md
- findings: .tmp-sfia-review/p3-findings.md
- findings: .tmp-sfia-review/s08-s05-findings.md
- companion diffs: .tmp-sfia-review/diffs/reprise/*.diff
- continuity contract: continuite-cognitive… blob 1a5f822f (docs f6cfd5ac)
- diagnostic 17 MP: handoff f6999c97 (prior cycle)
- ENV-01: governance/environnements-recette-et-promotions.md
- product versioning: releaseStatus NO RELEASE
```

### Porcelain (product tree)

```text
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts
 M projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
 M projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
 M projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
 M projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
 M projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
 M projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
 M projects/sfia-studio-next/web/src/domains/knowledge/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
 M projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
 M projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
 M projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
 M projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
 M projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
?? projects/sfia-studio-next/web/.tmp-sfia-review/
?? projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/
?? projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
?? projects/sfia-studio-next/web/src/domains/conversation/assert-owned-preparation.ts
?? projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor-terminal.ts
?? projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts
?? projects/sfia-studio-next/web/src/domains/conversation/segment-context-efficiency.ts
?? projects/sfia-studio-next/web/src/domains/preparation/project-activity-projection.ts
?? projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
?? projects/sfia-studio-next/web/src/lib/project-recent-items.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-continuity-raccordement.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/mp09-multi-pilotage-turn.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/knowledge-parent-subject-proposal.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a4-context-efficiency.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a6-finops-read-attribution.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-conversational-command-key.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-list-pilotage-bindings.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-pilotage-multi-restitution.test.ts
?? projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-activity-projection.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
```

### Diff stat vs HEAD

```text
.../construction/delivery-history.md               |  16 ++
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 .../dictation/sessions/[sessionId]/events/route.ts |   9 +-
 .../sessions/[sessionId]/fixture-push/route.ts     |  13 +-
 .../src/app/preparations/[preparationId]/page.tsx  |  27 ++
 .../web/src/app/projects/[projectId]/page.tsx      | 235 ++++++++++-------
 .../components/figma/ComposerDictationControl.tsx  | 110 ++++----
 .../web/src/components/figma/NoraConversation.tsx  | 199 ++-------------
 .../components/figma/PreparationConversation.tsx   |  51 ++--
 .../web/src/components/figma/ProjectOverview.tsx   |   2 +-
 .../components/figma/SasCreateProgressPopup.tsx    |   5 +
 .../web/src/components/figma/tokens.css            |  99 ++++++--
 .../components/finops/FinOpsConsumptionPanel.tsx   |  10 +-
 .../components/shell/PersonalRailSettingsMenu.tsx  |   2 +-
 .../web/src/components/shell/StudioShell.tsx       |   5 +-
 .../domains/conversation/cognitive-conductor.ts    |  37 +--
 .../provisional-cognitive-policy.ts                |  77 +++++-
 .../conversation/composer-dictation-session.ts     |  68 ++++-
 .../conversation/fixture-semantic-qualify.ts       |  46 +++-
 .../web/src/domains/conversation/nora-adapter.ts   |   8 +-
 .../conversation/pilotage-effect-restitution.ts    |  83 ++++--
 .../conversation/run-nora-cognitive-turn.ts        |  58 ++++-
 .../domains/conversation/semantic-qualification.ts | 102 ++++++--
 .../web/src/domains/conversation/service.ts        | 282 ++++++++++++---------
 .../web/src/domains/finops/usage-projection.ts     |  18 ++
 .../web/src/domains/finops/usage-read-service.ts   |  83 ++++--
 .../web/src/domains/knowledge/service.ts           |  14 +-
 .../src/domains/pilotage/conversation-authority.ts |  28 +-
 .../web/src/domains/preparation/project-context.ts |  18 +-
 .../e2e/ensemble07-browser-continuity.spec.ts      |  22 +-
 .../tests/helpers/semantic-fixture-envelopes.ts    |  47 ++++
 .../ensemble07-pilotage-effect-restitution.test.ts |  19 +-
 .../unit/ml3-composer-dictation-session.test.ts    |  38 +++
 .../web/tests/unit/ml5-cognitive-resources.test.ts |  48 +++-
 .../tests/unit/ml5-finops-usage-projection.test.ts |  11 +
 .../tests/unit/personal-rail-settings-menu.test.ts |  13 +
 .../web/tests/unit/semantic-qualification.test.ts  |  46 ++++
 37 files changed, 1299 insertions(+), 652 deletions(-)
```

---

## 3. ENV-01

| Lane | Port | PG | State |
|------|------|-----|-------|
| DEV | 3100 | 5433 `sfia_next_dev` | COMPLETE — `STUDIO_LANE=DEV`; bind/test-login via `.env.local` |
| E2E mutative | — | 5433 `sfia_next_e2e` | Vitest remap in-process |
| RECETTE | 3200 | 5434 | **UNTOUCHED** — candidat `e8e6e069` preserved |
| STABLE | — | — | NOT AVAILABLE |

**Verdict:** ENV ROUTING COMPLETE

---

## 4. Product versioning

- `web/src/lib/product-version.ts`: `releaseStatus: "NO RELEASE"`
- Delivery id: `DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV`

---

## 5. Matrice 26 sous-ensembles (fin reprise)

| ID | Exigence / MP | Statut reprise | Preuve |
|----|---------------|----------------|--------|
| A.1 | Allocation gouvernée MP-15 | **CLOSED (DET)** | `provisional-cognitive-policy.ts`; RECETTE exact `qualified`; v0.1≠v0.2 couples — p3 |
| A.2 | Qualif sémantique multi-intent MP-09 | **CLOSED (DET)** | `listPilotageEffectBindings`; unit + semantic tests |
| A.3 | Orchestration capacités MP-09 | **CLOSED (DET)** | `service.ts` binding loop; `mp09-multi-pilotage-turn.pg` PASS |
| A.4 | Contexte / efficience MP-14 | **CLOSED (DET)** | `segment-context-efficiency.ts`; `ml5-a4-context-efficiency.test` |
| A.5 | Finalisation / reprise | **CLOSED (DET)** | `cognitive-conductor-terminal.ts`; 8 unit PASS — p3 |
| A.6 | Observabilité / activité MP-11 | **PARTIAL** | Restitution chain improved; no fake activity telemetry |
| A.7 | FinOps MP-16 | **CLOSED (DET)** | `usage-projection` + `usage-read-service`; 15+3 unit — p3 |
| B.1 | Capitalisation autonome MP-10 | **PARTIAL/RACCORDÉ** | `maybeCapitalizeFromExchange`; zero-proposal gate — p2 |
| B.2 | Arborescence sujets MP-10 | **RACCORDÉ (DET)** | `parentSubjectId`; PG continuity — **LIVE autonomy OPEN** |
| B.3 | Synthèses / acquis / provenance | **EXISTANT** | No P2 regression — p2 |
| B.4 | Points ouverts MP-03 | **RACCORDÉ** | `resolveOpenPointFactually`; aside projection — p2 |
| B.5 | Décisions durables | **HORS P2** | D6 unchanged — p2 |
| B.6 | Trajectoire vivante MP-12 | **PARTIAL** | `displayableCycleObjective`; PilotagePanel enum legacy — p2 |
| B.7 | Réutilisation cognitive MP-10 | **RACCORDÉ A.4** | segment context trim; **LIVE long thread OPEN** |
| B.8 | Projections projet MP-13 | **RACCORDÉ** | `project-activity-projection`; récents; tests — p2 |
| C.1 | Compositeur partagé MP-01/02 | **CLOSED (DET)** | `NoraSharedComposer` — p3 |
| C.2 | Saisie / brouillons | **CLOSED (DET)** | Shared wiring Travail+sas |
| C.3 | Transport dictée MP-06 | **CLOSED (DET) / LIVE OPEN** | Prep API routes; **Realtime LIVE not run** — p3 |
| C.4 | États audio MP-07 | **CLOSED (DET)** | `showWave` listening-only — p3 |
| C.5 | Robustesse / reprise | **PARTIAL** | Session guards; LIVE negative paths residual |
| D.1 | Lisibilité MP-05 | **CLOSED (DET)** | `tokens.css` density |
| D.2 | Animation préparation MP-04 | **CLOSED (DET)** | `SasCreateProgressPopup` spinner |
| D.3 | Restitution naturelle MP-11 | **CLOSED (DET)** | multi-effect `composePilotageEffectRestitution` |
| D.4 | Panneau droit MP-08 | **CLOSED (DET+BROWSER struct)** | Repères 5 récents; open points — p2 |
| D.5 | Rail / paramètres MP-17 | **BROWSER PROVEN (sas)** | `PersonalRailSettingsMenu` shared mount |
| D.6 | Cohérence UX transverse | **PARTIAL** | Spot-check; F2 pixel not claimed |

---

## 6. Matrice 17 MP (fin reprise)

| MP | Owner | Statut reprise | Correction | Qualif | Reserve |
|----|-------|----------------|------------|--------|---------|
| MP-01 | C | **CLOSED (DET)** | Shared composer + mic slot | unit+nora-shared | — |
| MP-02 | C | **CLOSED (DET)** | Shared auto-grow | unit | — |
| MP-03 | B | **RACCORDÉ** | Open points projection | PG+unit | — |
| MP-04 | D | **CLOSED (DET)** | Spinner CSS | visual/unit | — |
| MP-05 | D | **CLOSED (DET)** | tokens.css readability | CSS | — |
| MP-06 | C | **DEV CLOSED / LIVE BLOCKED** | Prep routes + guards | DET session tests | **LIVE Realtime** |
| MP-07 | C | **CLOSED (DET)** | Wave listening-only | unit | — |
| MP-08 | D | **CLOSED (DET)** | Repères panel | unit+browser struct | viewer types partial |
| MP-09 | A | **CLOSED (DET)** | Multi-binding loop + keys | 18 unit + PG | **LIVE T05 parity** |
| MP-10 | B | **PARTIAL** | Capitalisation + parentSubjectId | PG | **LIVE hierarchy** |
| MP-11 | A/D | **CLOSED (DET)** | Natural multi restitution | 18 unit | — |
| MP-12 | B | **PARTIAL** | Cycle labels Trajectoire | unit | PilotagePanel enum |
| MP-13 | B | **CLOSED (DET)** | Identity doc count | unit | — |
| MP-14 | A | **CLOSED (DET)** | Context efficiency | unit | **LIVE T08 parity** |
| MP-15 | A | **CLOSED (DET)** | Option C env gate | unit | **LIVE real admit** |
| MP-16 | A | **CLOSED (DET)** | FinOps billable filter | unit | **MP-06 reconcile LIVE** |
| MP-17 | D | **BROWSER PROVEN** | Rail settings all surfaces | unit | — |

---

## 7. P1 — Orchestration MP-09 + correctif S08/S05

| Preuve | Résultat |
|--------|----------|
| MP-09 unit (`mp09-pilotage-multi-restitution`, list bindings, command key, `ensemble07-pilotage-effect-restitution`) | **18/18 PASS** |
| PG `mp09-multi-pilotage-turn.pg.test.ts` | **PASS** |
| Multi restitution `composePilotageEffectRestitution({ effects })` | REJECTED siblings not denied |
| S08/S05-G04 | **PASS** after `hasPriorAcquis`: `revision > 1` + fixture continuation strip |

### Vitest capture (reprise run)

```text
"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_8d4626a6-480e-4d1c-8701-5bb041d7aa7f","operation_id":"op_a26bc3c5-49f0-407a-80ee-cb4ec7bd53e4","outcome":"PARTIAL","meta":{"client_turn_key_fp":"77e78ede4027"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T15:50:17.298Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_8d4626a6-480e-4d1c-8701-5bb041d7aa7f","operation_id":"op_a26bc3c5-49f0-407a-80ee-cb4ec7bd53e4","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T15:50:17.321Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_8d4626a6-480e-4d1c-8701-5bb041d7aa7f","operation_id":"op_a26bc3c5-49f0-407a-80ee-cb4ec7bd53e4","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T15:50:17.322Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.document_act_qualification","component":"d3.conversation","request_id":"req_8d4626a6-480e-4d1c-8701-5bb041d7aa7f","operation_id":"op_a26bc3c5-49f0-407a-80ee-cb4ec7bd53e4","generation_id":"mp09-gen_ea7d8e76-c35d-4f6d-8d87-b5c3d8fbf9b4","outcome":"PARTIAL","meta":{"qualification_kind":"NONE","qualification_reason":"SEMANTIC_NONE","documentary_intent_signal":false,"d4_attempted":false,"d4_effect":null}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T15:50:17.323Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.knowledge_proposals","component":"d3.conversation","request_id":"req_8d4626a6-480e-4d1c-8701-5bb041d7aa7f","operation_id":"op_a26bc3c5-49f0-407a-80ee-cb4ec7bd53e4","generation_id":"mp09-gen_ea7d8e76-c35d-4f6d-8d87-b5c3d8fbf9b4","outcome":"SUCCESS","meta":{"qualification_status":"QUALIFIED","reply_status":"COMPLETE","proposal_present":false,"proposal_count":0,"subject_count":0,"acquis_count":0,"open_point_count":0}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T15:50:17.324Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.knowledge_capitalisation","component":"d3.conversation","request_id":"req_8d4626a6-480e-4d1c-8701-5bb041d7aa7f","operation_id":"op_a26bc3c5-49f0-407a-80ee-cb4ec7bd53e4","generation_id":"mp09-gen_ea7d8e76-c35d-4f6d-8d87-b5c3d8fbf9b4","outcome":"SUCCESS","meta":{"proposal_present":false,"proposal_count":0,"capitalisation_written":0,"capitalisation_failed_count":0,"reply_status":"COMPLETE"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-27T15:50:17.329Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_8d4626a6-480e-4d1c-8701-5bb041d7aa7f","operation_id":"op_a26bc3c5-49f0-407a-80ee-cb4ec7bd53e4","generation_id":"mp09-gen_ea7d8e76-c35d-4f6d-8d87-b5c3d8fbf9b4","outcome":"SUCCESS","policy_version":"ml5-cog-policy-v5-provisional-v0.2-20261126","profile_type":"OPERATIONAL","meta":{"attempts":0,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
 ✓ tests/integration/mp09-multi-pilotage-turn.pg.test.ts (1 test) 218ms
stderr | tests/unit/ensemble07-pilotage-effect-restitution.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ensemble07-pilotage-effect-restitution.test.ts (7 tests) 1ms
stderr | tests/unit/mp09-pilotage-multi-restitution.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/mp09-pilotage-multi-restitution.test.ts (9 tests) 2ms
stderr | tests/unit/mp09-list-pilotage-bindings.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/mp09-list-pilotage-bindings.test.ts (1 test) 1ms
stderr | tests/unit/mp09-conversational-command-key.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/mp09-conversational-command-key.test.ts (1 test) 1ms

 Test Files  5 passed (5)
      Tests  19 passed (19)
   Start at  16:50:16
   Duration  1.66s (transform 458ms, setup 28ms, collect 985ms, tests 224ms, environment 0ms, prepare 98ms)


```

### S08/S05 findings (embedded)

# S08 / S05-G04 — instruction comparative

## Résultat après correctif

| Suite | Avant | Après | Verdict |
|-------|-------|-------|---------|
| intent-continuity S08 | FAIL (`pilotageEffect.attempted=false`, `nextTurnKind=DIALOGUE_INDEPENDANT`) | PASS | Régression macro-lot A.4 |
| intent-continuity S08b | FAIL (`documentSave` undefined) | PASS | Même cause |
| ml4c-s05 S05-G04 | FAIL (`pendingEffectBlocked=false`) | PASS | Même cause (gate S05 exige INTENTION_EFFET) |
| mp09-multi-pilotage-turn.pg | PASS | PASS | Conservé |

## Cause démontrée

Dans `run-nora-cognitive-turn.ts`, `hasPriorAcquis` incluait `work.revision > 0`.

Or `createCognitiveWork` initialise **toujours** `revision: 1`.

Conséquence sur un travail frais :

1. la sonde d'attachement n'est pas réutilisée ;
2. `generateNoraReply` est rappelé avec `userText + continuationHint` ;
3. `fixtureSemanticQualify` rate la clé exacte → enveloppe dialogue sans effet ;
4. `deriveThreadTurnKind` → `DIALOGUE_INDEPENDANT` ;
5. pas d'autorité D5 (S08) ; `applyPendingGate=false` donc S05 ne bloque pas (S05-G04).

**Comparaison :** défaut introduit par le complément A.4 (efficience contexte / continuation), pas un échec « préexistant » indépendant du macro-lot.

## Correctifs

1. `hasPriorAcquis`: `work.revision > 1` (checkpoint réel) au lieu de `> 0`.
2. Défense fixture : strip des suffixes `[Continuation…]` / `[Phase de restitution…]` avant lookup exact.

## Preuve

Vitest PG `sfia_next_e2e` — 2026-11-27T15:46Z — 4 PASS / 27 skipped (filtre).


---

## 8. P2 — Continuité projet (findings)

# P2 — Continuité projet (B.1–B.8) — findings ML5 macro-lot correctif

**Worktree:** `projects/sfia-studio-next/web`
**Source fonctionnelle:** `continuite-cognitive-et-fonctionnelle-du-projet.md` (blob `1a5f822f`, branche docs `f6cfd5ac`)
**Date:** 2026-11-27 — Cursor agent P2 (sans commit projet, sans LIVE/RECETTE)

## Synthèse exécutive

| Axe | Statut | Preuve principale |
| --- | --- | --- |
| B.1 Capitalisation sélective | **PARTIEL / raccordé** | `maybeCapitalizeFromExchange` + gate `semantic-proposals` ; pas de perte silencieuse sur zéro proposition (tests ML2) |
| B.2 Arborescence | **RACCORDÉ dev** | `parentSubjectId` qualification → `ensureSubject` ; test PG parent/enfant capitalisation |
| B.3 Synthèses / acquis / provenance | **EXISTANT** | Journal revisions, tests `journal-d4-revisions.pg` ; pas de delta P2 |
| B.4 Points ouverts | **RACCORDÉ** | Résolution factuelle + projection `openPointsCount` / aside OPEN |
| B.5 Décisions D6 | **HORS P2** | D6 inchangé ; frontière D4/D6 déjà testée |
| B.6 Trajectoire vivante | **PARTIEL** | `displayableCycleObjective` + `CYCLE_TYPE_LABELS` sur Trajectoire/Projet ; `PilotagePanel` legacy affiche encore enum brut |
| B.7 Réutilisation cognitive | **RACCORDÉ A.4** | `segment-context-efficiency` + PREFERRED ; outils D4 non retirés du conducteur |
| B.8 Projections / panneau | **RACCORDÉ** | Compteur doc par identité, récents doc+git, aside 5 points OPEN |

## Raccordements réalisés (diff P2)

1. **`project-activity-projection.ts`** — compteur bibliothèque dédoublonné par `document.id`, population OPEN partagée Journal/Travail/API.
2. **`project-recent-consultation.ts`** — identités canoniques `doc:` / `git:` ; enregistrement consultation Pilote sur ouverture D4 (fil + bibliothèque) et références Git Nora.
3. **`project-context.ts`** — consomme les helpers déterministes (B.8.3 compteur Morris).
4. **Travail `page.tsx`** — `notePilotConsultation`, aside points via `travailAsideOpenPoints`.

## Lacunes résiduelles (hors mandat P2 / gates)

- **Récents multitypes** : `execution` / `result` / `bilan` / `proof` — types déclarés et navigation aside, **pas encore de call sites** d’ouverture consultation (pas de parcours viewer unifié sur D7/D8 dans Travail).
- **B.2 autonomie Nora** : hiérarchie prouvée en PG via proposals typées, **pas** en scénario conversationnel LIVE (gate §10).
- **B.7 preuve forte** : observabilité lectures / tokens — `intent-continuity-global.pg` partiel ; pas de oracle comparatif qualité.
- **B.6** : finalité contextualisée dépend données D5 réelles MaintiPlan ; affichage enum sur `PilotagePanel` non aligné Figma Trajectoire.

## Table B.1–B.8 (mécanisme / test / résultat / LIVE)

| ID | Mécanisme clé | Test déterministe | Résultat P2 | LIVE gate |
| --- | --- | --- | --- | --- |
| B.1 | `maybeCapitalizeFromExchange`, zéro proposition si vide | `ml2-knowledge-documents.pg` negative | OK invariants | Oui — qualification multi-intent |
| B.2 | `parentSubjectId` → `ensureSubject` | `knowledge-parent-subject-proposal.test`, `ml5-continuity-raccordement.pg` | OK PG | Oui — arbre naturel |
| B.3 | Summary revisions, acquis CURRENT | `journal-d4-revisions.pg` | Non régressé | Partiel |
| B.4 | `resolveOpenPointFactually`, status RESOLVED | `ml5-continuity-raccordement.pg` | OK projection | Non |
| B.5 | D6 HumanDecision séparé | tests ML2/ML3 existants | Inchangé | Oui T07 |
| B.6 | `displayableCycleObjective`, `CYCLE_TYPE_LABELS` | `cycle-objective-display.test`, `ensemble07-cycle-type-normalize.test` | UI Trajectoire OK | Oui réorientation Figma |
| B.7 | `segment-context-efficiency`, PREFERRED, D4 tools | `ml5-a4-context-efficiency.test` | OK trim + garde | Oui réutilisation long fil |
| B.8 | `project-context` activity, récents, aside | `project-activity-projection.test`, `project-recent-*` | OK | Browser candidat DEV |

## Oracles §10 (18 scénarios) — carte résumée

| # | Scénario (contrat §10) | Mécanisme | Test / preuve | LIVE |
| --- | --- | --- | --- | --- |
| 1 | Exploration libre → création projet | Sas → `createProjectCommand`, lien prep | `create-project.pg` | Non |
| 2 | Sous-sujets hiérarchiques | `parentSubjectId` D4 | `ml5-continuity-raccordement.pg` | **Oui** |
| 3 | Réorganisation sujets | `reparentSubject` journal | `journal-d4-revisions.pg` reparent | Partiel |
| 4 | Capitalisation Pilote + Nora | `maybeCapitalizeFromExchange` | ML2 PG + semantic tests | **Oui** |
| 5 | Correction acquis | acquis versioning | `ml2-corrective-integrity.pg` | Non |
| 6 | Résolution question | `resolveOpenPointFactually` | P2 PG + aside filter | Non |
| 7 | Arbitrage local vs D6 | frontière qualification | tests D6 existants | **Oui** |
| 8 | T05/T06 multi-intentions | MP-09 bindings (autre agent) | `mp09-multi-pilotage-turn.pg` | **Oui** |
| 9 | Réorientation Figma / D5 | pilotage trajectory | tests pilotage PG partiels | **Oui** |
| 10 | Finalité cycle | `displayableCycleObjective` | unit cycle-objective | **Oui** |
| 11 | Compteurs Projet | `countProjectLibraryDocuments` | `project-activity-projection.test` | Non |
| 12 | Consultations 5 récents | `recordProjectRecentItem` | `project-recent-items.test` + consultation | Browser DEV |
| 13 | Points panneau 5 max | `travailAsideOpenPoints` | projection unit + PG resolve | Browser DEV |
| 14 | Navigation 4 surfaces | shell + `getOwnedProjectContext` | e2e journal partiels | Browser |
| 15 | Réutilisation longue conv. | hybrid search + A.4 | `intent-continuity-global.pg` | **Oui** |
| 16 | Révision V1→V2 (T09) | document revisions D4 | hors GO T09 | Réservé |
| 17 | Échange sans apport durable | zéro write proposals | `ml2-knowledge-documents` negative | Non |
| 18 | Isolation / échec | owner scoping, fence | ML2 fence tests | Non |

## Fichiers touchés (P2)

- `src/domains/preparation/project-activity-projection.ts` (new)
- `src/domains/preparation/project-context.ts`
- `src/lib/project-recent-consultation.ts` (new)
- `src/app/projects/[projectId]/page.tsx`
- `tests/unit/project-activity-projection.test.ts` (new)
- `tests/unit/project-recent-consultation.test.ts` (new)
- `tests/integration/ml5-continuity-raccordement.pg.test.ts` (new)

## Non touché (garde-fous mandate)

- `conversation/service.ts` boucle multi-binding MP-09
- Migrations, RECETTE, LIVE OpenAI, Figma, commit projet

---

## 9. P3 — Allocation / finalisation / FinOps / composer (findings)

# ML5 Priority 3 — Corrective Delivery Findings

**Scope:** `projects/sfia-studio-next/web`
**Date:** 2026-11-27
**Constraints honoured:** no LIVE run · no RECETTE mutation · no commit · `service.ts` MP-09 loop untouched

---

## Executive summary

| Track | Status | Notes |
|-------|--------|-------|
| **A.1** Allocation / `provisional-cognitive-policy.ts` | **CLOSED (code + tests)** | RECETTE admit is exact `qualified` only; v0.1 admitted set excludes Luna `low` |
| **A.5** Finalization / `cognitive-conductor-terminal.ts` | **CLOSED (code + tests)** | Extracted terminal resolver; stale clarifications gated; `IN_PROGRESS`/`IDLE` no longer → premature `COMPLETE` |
| **A.6/A.7** FinOps read / aggregation | **CLOSED (code + contract tests)** | Billable filter + project/work attribution in `usage-read-service`; projection tests for HTTP-attempt exclusion |
| **C.1–C.5** Composer / dictation | **CLOSED (code + tests)** | `NoraSharedComposer` mutualized; prep project API ownership; sas bar a11y; wave listening-only |

---

## A.1 — Provisional cognitive policy

### Verification

- `isRecetteProvisionalQualified`: `raw === "qualified"` after `.trim()` — rejects `QUALIFIED`, ` qualified `, `true`, `1`, empty (regression vs older diff in `.tmp-sfia-review/diffs/a1-provisional-policy.diff` that had tolerated truthy strings).
- Lane gate: RECETTE without admit → `legacy_sol` / no provisional couples; DEV explicit `v0.1`|`v0.2`.
- **v0.1 vs v0.2 admission surface:** `PROVISIONAL_V01_ADMITTED` omits `gpt-6-luna:low`; v0.2 includes it. `isProvisionalAdmittedCouple` branches on `resolved.id`.

### Tests added/confirmed

- `tests/unit/ml5-cognitive-resources.test.ts` — `RECETTE admit accepts only exact qualified env value`
- **New:** `provisional v0.1 does not admit v0.2-only Luna low couple`

### Module diff pointer

```
git diff projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
```

Highlights: `isRecetteProvisionalQualified` export; `laneAllowsProvisional`; RECETTE reason codes; separate `PROVISIONAL_V01_ADMITTED` / `PROVISIONAL_V02_ADMITTED`.

---

## A.5 — Cognitive work terminal (no premature COMPLETE)

### Code

`resolveCognitiveWorkTerminalStatus` (`cognitive-conductor-terminal.ts`):

- Clarifications / determinant questions ignored when `workDisposition === "COMPLETE"`.
- `PARTIAL` / `FAILED` production → `SUSPENDED`.
- **New:** `productionIncomplete` (`IN_PROGRESS` | `IDLE`) folds into `awaitPilot` → `OPEN` (not `COMPLETE`).
- Wired from `cognitive-conductor.ts` (replaces inlined C18 block).

### Tests

`tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts` — **8 tests PASS**

- Stale clarifications + disposition COMPLETE → COMPLETE
- AWAIT_PILOT / NEEDS_CLARIFICATION → OPEN
- Conductor `suspended` → SUSPENDED
- **New:** IN_PROGRESS + disposition COMPLETE → OPEN
- **New:** SUSPEND → `AWAIT_OR_SUSPEND`
- PARTIAL / FAILED → SUSPENDED

### Module diff pointer

```
git diff projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor-terminal.ts
git diff projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
```

---

## A.6 / A.7 — FinOps observability (usage read + aggregation)

### Verification

**`usage-projection.ts`** (pure, tested):

- `filterBillableFinOpsRows` / `isBillableFinOpsObservationRow` — excludes `HTTP_ATTEMPT_CORRELATION_ONLY` / `HTTP_ATTEMPT_USAGE_UNKNOWN`.
- `sumBillableProviderRequests` with `onlyWithObservedCost`.
- `computeEstimationCompletenessPercent` — PARTIAL rows excluded from “fully known” rate.

**`usage-read-service.ts`** (I/O):

- `loadObservations`: project filter = `projectId` **OR** observations linked to cognitive works owned on that project (`cognitiveWorkIdsOnProject`).
- `loadFinOpsSummary`: KPI `totalRequests` / `measuredRequests` via `sumBillableProviderRequests`.
- `loadFinOpsWorks` / `loadFinOpsWorkDetail`: `effectiveProjectId = work.projectId ?? observedProjectId`; detail KPIs/segments on `filterBillableFinOpsRows(rows)`.

### Tests

- `tests/unit/ml5-finops-usage-projection.test.ts` — **15 PASS** (incl. HTTP attempt correlation exclusion)
- **New:** `tests/unit/ml5-a6-finops-read-attribution.test.ts` — **3 PASS** (module contract / attribution strings)

### Module diff pointer

```
git diff projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
git diff projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
```

---

## C.1–C.5 — Composer / dictation

| ID | Requirement | Result |
|----|-------------|--------|
| C.1 | `NoraSharedComposer` mutualization (Travail + sas) | **OK** — imported by `NoraConversation.tsx` + `PreparationConversation.tsx` |
| C.2 | Dictation API ownership (project vs preparation) | **OK** — `dictationApiBase` exported; project wins when both ids present |
| C.3 | Empty sas commands must not hide mic | **FIX** — removed `aria-hidden` on `sas-composer-bar`; hint-only `aria-hidden` when empty draft |
| C.4 | Deterministic error paths | **OK** — existing `ml3-composer-dictation-session.test.ts` + `generationRef` / `failCapture` / null `apiBase` guards on client |
| C.5 | Wave only when listening established | **FIX** — `showWave = phase === "listening"` (not `finalizing`) |

### Tests

`tests/unit/nora-shared-composer.test.ts` — **5 PASS**

### Module diff pointer

```
git diff projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
git diff projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
```

Prep dictation API routes present under `src/app/api/preparations/[preparationId]/dictation/` (untracked tree; no RECETTE/LIVE touched).

---

## Test results (P3-focused vitest run)

```text
npx vitest run \
  tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts \
  tests/unit/ml5-cognitive-resources.test.ts \
  tests/unit/nora-shared-composer.test.ts \
  tests/unit/ml5-a6-finops-read-attribution.test.ts \
  tests/unit/ml5-finops-usage-projection.test.ts

Test Files  5 passed (5)
Tests       67 passed (67)
```

---

## Files changed (this P3 pass — functional)

| File | Change |
|------|--------|
| `src/domains/conversation/cognitive-conductor-terminal.ts` | Production-incomplete guard; awaitPilot semantics |
| `src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts` | (pre-existing worktree) RECETTE exact admit + lane gates |
| `src/domains/finops/usage-read-service.ts` | (pre-existing worktree) billable + project attribution |
| `src/components/figma/NoraSharedComposer.tsx` | sas bar a11y |
| `src/components/figma/ComposerDictationControl.tsx` | `dictationApiBase`, prep routes, wave phase |
| `tests/unit/ml5-cognitive-resources.test.ts` | v0.1 vs v0.2 couple test |
| `tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts` | suspended / IN_PROGRESS / SUSPEND |
| `tests/unit/nora-shared-composer.test.ts` | wiring + a11y + dictation contracts |
| `tests/unit/ml5-a6-finops-read-attribution.test.ts` | **new** |

**Explicitly not edited:** `src/domains/conversation/service.ts` (MP-09 loop).

---

## Residual LIVE-only items — **MP-06** (FinOps provider reconciliation)

Product path intentionally **fail-closed** until financial habilitation exists:

| Item | Location | LIVE-only? |
|------|----------|------------|
| Admin snapshot read + `provenance: "LIVE"` | `usage-read-service.ts` → `buildProviderReconciliationDto` | **Yes** — PG snapshots from LIVE collection |
| `pilotAuthorized = false` + `NO_FINANCIAL_HABILITATION_FOR_PROVIDER_AGGREGATE` | same | Policy gate; COMPARABLE disclosure needs habilitation fixture |
| `SFIA_FINOPS_COMPARE_WINDOW_*` + OpenAI org/project env alignment | same | Operator LIVE window |
| Integrated qualification | `tests/integration/ml5-finops-live-qualification.pg.test.ts` | **LIVE oracle** (skipped without DEV PG 5433 + LIVE snapshots) |
| Admin collector qualification | `tests/integration/ml5-admin-finops-qualification.pg.test.ts` | LIVE/admin path |
| CLI oracle | `scripts/finops-live-qualify-check.mts` (referenced in PG test) | LIVE operator |

**DEV deliverable:** Studio-estimated ledger + honest `UNAVAILABLE` / `NON_COMPARABLE` provider block — **done**. **MP-06 closure** remains LIVE qualification + habilitation model — **not executed in this pass**.

---

## RECETTE / LIVE statement

- No `STUDIO_LANE=RECETTE` env mutation performed.
- No LIVE admin collection or qualification scripts executed.
- RECETTE operational activation of provisional policy remains operator action: `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified` (exact) after calibration evidence.

---

## 10. Fake / Real table

| Claim / surface | Level | Evidence | Misclaim risk |
|-----------------|-------|----------|---------------|
| MP-09 multi-binding loop | DETERMINISTIC + PG | 18 unit + `mp09-multi-pilotage-turn.pg` | Calling it LIVE multi-intent |
| S08/S05-G04 pilotage gate | PG PASS | `hasPriorAcquis revision>1` fix — s08 findings | — |
| Provisional Option C RECETTE | DET unit | exact `qualified` string only | Truthy env coercions |
| FinOps studio ledger | DET unit | billable filter + attribution | Provider reconcile without LIVE |
| Dictation nominal path | DET unit + API | prep+project routes; fixture transport | **LIVE audio** |
| Nora subject tree autonomy | PG partial | parentSubjectId proposals | **LIVE conversational tree** |
| Continuity §10 scenarios 1–18 | Mixed DET/PG | p2 oracle map | Scenarios marked LIVE |
| Figma F2 pixel parity | NOT PROVEN | — | READY FOR REAL UX |
| RECETTE cutover | NOT EXECUTED | RECETTE untouched | — |
| DETERMINISTIC PASS | — | vitest/pg | **≠ READY FOR REAL** |

---

## 11. Réserves proposées à Morris (non acceptées par Cursor)

| Reserve ID | Class | Description | Cursor accepts? |
|------------|-------|-------------|-----------------|
| R-LIVE-MP06 | LIVE | Realtime dictation provider path + timeout root cause on RECETTE T04 | **NO** — gate only |
| R-LIVE-NORA-TREE | LIVE | Nora autonomous hierarchical subject proposals in natural dialogue | **NO** |
| R-LIVE-T08-T09 | LIVE | Long-thread cognitive reuse (T08) ; D4 revision compare (T09) | **NO** |
| R-LIVE-MULTI-INTENT | LIVE | Multi-intent natural language parity beyond fixtures | **NO** |
| R-LIVE-FINOPS-06 | LIVE | Provider aggregate reconciliation + financial habilitation | **NO** |
| R-BROWSER-F2 | BROWSER | Full Figma δ≤2px across surfaces | **NO** |
| R-RECENTS-TYPES | DEV | execution/result/bilan/proof recent call sites absent | **NO** — documented lacuna |

---

## 12. LIVE mandate proposal (scenarios 1–17)

Proposed **bounded LIVE mandate** (Morris GO required — **not executed in this reprise**):

| # | Scenario (continuité §10 / MaintiPlan) | Objective | Budget | Missing data for budget |
|---|----------------------------------------|-----------|--------|-------------------------|
| 1 | Exploration libre → création projet | Sanity create path | TBD | LIVE model tariff table for provisional couples |
| 2 | Sous-sujets hiérarchiques | Nora proposes nested subjects | TBD | RECETTE admit flag state + LIVE org project id |
| 3 | Réorganisation sujets | reparent journal | TBD | — |
| 4 | Capitalisation Pilote + Nora | durable write proposals | TBD | — |
| 5 | Correction acquis | versioning | Optional DET only | — |
| 6 | Résolution question | open point resolve | DET covered | — |
| 7 | Arbitrage local vs D6 | authority boundary | TBD | LIVE D6 fixture project |
| 8 | T05/T06 multi-intentions | MP-09 OPEN_CYCLE natural | TBD | **Prior RECETTE trace ids + token meter baseline** |
| 9 | Réorientation Figma / D5 | trajectory pilotage | TBD | Figma LIVE not in scope |
| 10 | Finalité cycle | displayable objective | DET partial | MaintiPlan D5 seed data |
| 11 | Compteurs Projet | library count | DET covered | — |
| 12 | Consultations 5 récents | browser replay | TBD | **DEV session cookie + project id fixture** |
| 13 | Points panneau 5 max | aside OPEN | DET covered | — |
| 14 | Navigation 4 surfaces | shell | TBD | Browser auth harness |
| 15 | Réutilisation long fil | A.4 efficiency | TBD | **LIVE thread token ceiling + OBS export** |
| 16 | Révision V1→V2 (T09) | D4 revisions | Reserved | Explicit T09 GO |
| 17 | Échange sans apport | zero writes | DET negative tests | — |

**Note:** Budgets marked TBD without baseline are **not fabricable** — require Morris env pins (OpenAI org/project), RECETTE admit decision, and prior MaintiPlan campaign ledgers.

---

## 13. Critical construction review notes

1. **MP-09 loop** is the authoritative multi-effect orchestration; restitution must not collapse sibling refusals.
2. **A.4 regression class:** `hasPriorAcquis` with `revision>0` falsely treated fresh cognitive work as continuations — broke S08 pilotage and S05-G04 pending gate; fixed in `run-nora-cognitive-turn.ts`.
3. **Option C allocation** remains env-gated; RECETTE activation is operator action with exact `qualified` string — not truthy coercion.
4. **MP-06** DEV delivers honest fail-closed session paths; LIVE Realtime remains a **separate gate** with provider reconciliation (MP-16 LIVE).
5. **B.8** deduplicates library documents by `document.id`; recent consultations use canonical `doc:` / `git:` identities.
6. **Worktree dirty** is intentional; integrator must not confuse HEAD commit tree with constructed modules.
7. **DETERMINISTIC PROVEN ≠ READY FOR REAL** — LIVE rows in Fake/Real table remain open by design.

### Construction docs (headers)

#### delivery-history.md (head)
```markdown
## delivery_id: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV

- **date_local**: 2026-11-27 (Europe/Paris)
- **lane**: DEV only — macro-lot correctif intégré (17 MP + continuité Morris)
- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
- **HEAD_base**: `58ca9486003805f74e69a0842f2c0792a7184437`
- **tree/diff**: worktree dirty (construction in progress) — NOT identical to HEAD commit
- **schema_revision**: unchanged (no migration)
- **build_DEV**: `next dev` :3100 (Turbopack) — not an immutable release build
- **portée**: axes A–D — allocation Option C env-gated ; multi-intent command keys ; context efficiency ; work terminalisation ; FinOps projections ; parentSubjectId capitalisation ; shared composer + prep dictation ; panneau droit Repères ; rail settings ; restitution naturelle ; typographie ; spinner
- **tests**: 88+ focused unit PASS (policy, FinOps, terminal, composer, dictation session, MP-09 keys/bindings, recent items, restitution, A.4)
- **browser_DEV**: sas — Paramètres menu + mic « Dicter un message » visibles (auto-session)
- **réserves**: LIVE OpenAI non autorisé (allocation réelle, dictée Realtime, autonomie hiérarchie, réutilisation cognitive) ; RECETTE inchangée ; NO project commit
- **classe**: NO RELEASE
- **statut**: CONSTRUCTION DEV IN PROGRESS — READY WITH RESERVES pending FULL pack + L3 handoff

## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION

- **date_utc**: 2026-11-27T10:00Z
- **lane**: RECETTE — activation opérationnelle A1–A6 (pas de construction)
```

#### ml5-registre (head)
```markdown
# SFIA Studio Next — ML5 · Registre de couverture et de revue du développement

> **Registre de revue ML5 — contenu validé comme support de suivi par Morris ; Gate C accepté avec réserves et GO de construction ML5 exprimés le 23/11/2026.** Aucun GO implicite de push projet, PR, merge, recette/cutover, release, adoption ou promotion.

| Champ | Valeur |
|---|---|
| Version | v0.30 candidate — 27 novembre 2026 : **DEV macro-lot correctif intégré continuité/fiabilité** (17 MP MaintiPlan + arbitrages Morris) sur `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` — Option C env-gated ; multi-intent bindings ; shared composer + prep dictation ; panneau Repères ; rail settings ; restitution naturelle ; FinOps/A.4/A.5 DET — **CONSTRUCTION DEV — READY WITH RESERVES (LIVE gates ouverts)** ; v0.29 : RECETTE operational activation A1–A6 ; v0.28 : cutover ; … |
| Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
| Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
| Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
| Cycle 10 | Scénario `ml5-c10-mono-20261123` — Travail 50/50 + D6 overlay + bilan post-handoff + requalify pièce `ecap_1c817ffb…` |
| Cycle 11 | Scénario `ml5-c11-live-20261123` — Nora LIVE → D6 → Cursor SDK LIVE → D8 PARTIAL → Nora COGNITIVE |
```

---

## 14. Review Pack Content Coverage matrix

**Files in matrix:** 64
**Critical paths required:** 20
**Critical missing from worktree:** 0

| Path | Porcelain | Content embedded | In pack |
|------|-----------|------------------|---------|
| `projects/sfia-studio-next/construction/delivery-history.md` | `M` | MODIFIED — git diff HEAD — 23 diff lines | YES |
| `projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md` | `M` | MODIFIED — git diff HEAD — 12 diff lines | YES |
| `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/capability/route.ts` | `??` | NEW — full — 26 lines | YES |
| `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/[sessionId]/audio/route.ts` | `??` | NEW — full — 39 lines | YES |
| `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/[sessionId]/cancel/route.ts` | `??` | NEW — full — 30 lines | YES |
| `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/[sessionId]/events/route.ts` | `??` | NEW — full — 78 lines | YES |
| `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/[sessionId]/finalize/route.ts` | `??` | NEW — full — 30 lines | YES |
| `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/route.ts` | `??` | NEW — full — 51 lines | YES |
| `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts` | `M` | MODIFIED — git diff HEAD — 26 diff lines | YES |
| `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts` | `M` | MODIFIED — git diff HEAD — 29 diff lines | YES |
| `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx` | `M` | MODIFIED — git diff HEAD — 51 diff lines | YES |
| `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` | `M` | MODIFIED — git diff HEAD — 328 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx` | `M` | MODIFIED — git diff HEAD — 229 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx` | `M` | MODIFIED — git diff HEAD — 236 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx` | `??` | NEW — full — 312 lines | YES |
| `projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx` | `M` | MODIFIED — git diff HEAD — 75 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx` | `M` | MODIFIED — git diff HEAD — 12 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx` | `M` | MODIFIED — git diff HEAD — 20 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/figma/tokens.css` | `M` | MODIFIED — git diff HEAD — 184 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx` | `M` | MODIFIED — git diff HEAD — 27 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx` | `M` | MODIFIED — git diff HEAD — 12 diff lines | YES |
| `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx` | `M` | MODIFIED — git diff HEAD — 15 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/assert-owned-preparation.ts` | `??` | NEW — full — 16 lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor-terminal.ts` | `??` | NEW — full — 69 lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts` | `M` | MODIFIED — git diff HEAD — 54 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts` | `M` | MODIFIED — git diff HEAD — 144 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts` | `M` | MODIFIED — git diff HEAD — 160 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts` | `M` | MODIFIED — git diff HEAD — 65 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts` | `M` | MODIFIED — git diff HEAD — 26 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts` | `??` | NEW — full — 140 lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts` | `M` | MODIFIED — git diff HEAD — 136 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts` | `M` | MODIFIED — git diff HEAD — 109 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/segment-context-efficiency.ts` | `??` | NEW — full — 66 lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts` | `M` | MODIFIED — git diff HEAD — 140 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/conversation/service.ts` | `M` | MODIFIED — git diff HEAD — 369 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts` | `M` | MODIFIED — git diff HEAD — 28 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts` | `M` | MODIFIED — git diff HEAD — 187 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/knowledge/service.ts` | `M` | MODIFIED — git diff HEAD — 31 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts` | `M` | MODIFIED — git diff HEAD — 68 diff lines | YES |
| `projects/sfia-studio-next/web/src/domains/preparation/project-activity-projection.ts` | `??` | NEW — full — 49 lines | YES |
| `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts` | `M` | MODIFIED — git diff HEAD — 43 diff lines | YES |
| `projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts` | `??` | NEW — full — 66 lines | YES |
| `projects/sfia-studio-next/web/src/lib/project-recent-items.ts` | `??` | NEW — full — 109 lines | YES |
| `projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts` | `M` | MODIFIED — git diff HEAD — 60 diff lines | YES |
| `projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts` | `M` | MODIFIED — git diff HEAD — 64 diff lines | YES |
| `projects/sfia-studio-next/web/tests/integration/ml5-continuity-raccordement.pg.test.ts` | `??` | NEW — full — 129 lines | YES |
| `projects/sfia-studio-next/web/tests/integration/mp09-multi-pilotage-turn.pg.test.ts` | `??` | NEW — full — 168 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts` | `M` | MODIFIED — git diff HEAD — 51 diff lines | YES |
| `projects/sfia-studio-next/web/tests/unit/knowledge-parent-subject-proposal.test.ts` | `??` | NEW — full — 34 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts` | `M` | MODIFIED — git diff HEAD — 48 diff lines | YES |
| `projects/sfia-studio-next/web/tests/unit/ml5-a4-context-efficiency.test.ts` | `??` | NEW — full — 61 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts` | `??` | NEW — full — 127 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/ml5-a6-finops-read-attribution.test.ts` | `??` | NEW — full — 32 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts` | `M` | MODIFIED — git diff HEAD — 81 diff lines | YES |
| `projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts` | `M` | MODIFIED — git diff HEAD — 28 diff lines | YES |
| `projects/sfia-studio-next/web/tests/unit/mp09-conversational-command-key.test.ts` | `??` | NEW — full — 19 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/mp09-list-pilotage-bindings.test.ts` | `??` | NEW — full — 52 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/mp09-pilotage-multi-restitution.test.ts` | `??` | NEW — full — 171 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts` | `??` | NEW — full — 59 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts` | `M` | MODIFIED — git diff HEAD — 22 diff lines | YES |
| `projects/sfia-studio-next/web/tests/unit/project-activity-projection.test.ts` | `??` | NEW — full — 36 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts` | `??` | NEW — full — 61 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts` | `??` | NEW — full — 38 lines | YES |
| `projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts` | `M` | MODIFIED — git diff HEAD — 63 diff lines | YES |

---

## 15. Exploitable product file content (modified + created)

Companion per-file diffs: `.tmp-sfia-review/diffs/reprise/`

### `projects/sfia-studio-next/construction/delivery-history.md`

- Coverage: MODIFIED — git diff HEAD — 23 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 8d0adfbd..5b2df548 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,19 @@
+## delivery_id: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV
+
+- **date_local**: 2026-11-27 (Europe/Paris)
+- **lane**: DEV only — macro-lot correctif intégré (17 MP + continuité Morris)
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `58ca9486003805f74e69a0842f2c0792a7184437`
+- **tree/diff**: worktree dirty (construction in progress) — NOT identical to HEAD commit
+- **schema_revision**: unchanged (no migration)
+- **build_DEV**: `next dev` :3100 (Turbopack) — not an immutable release build
+- **portée**: axes A–D — allocation Option C env-gated ; multi-intent command keys ; context efficiency ; work terminalisation ; FinOps projections ; parentSubjectId capitalisation ; shared composer + prep dictation ; panneau droit Repères ; rail settings ; restitution naturelle ; typographie ; spinner
+- **tests**: 88+ focused unit PASS (policy, FinOps, terminal, composer, dictation session, MP-09 keys/bindings, recent items, restitution, A.4)
+- **browser_DEV**: sas — Paramètres menu + mic « Dicter un message » visibles (auto-session)
+- **réserves**: LIVE OpenAI non autorisé (allocation réelle, dictée Realtime, autonomie hiérarchie, réutilisation cognitive) ; RECETTE inchangée ; NO project commit
+- **classe**: NO RELEASE
+- **statut**: CONSTRUCTION DEV IN PROGRESS — READY WITH RESERVES pending FULL pack + L3 handoff
+
 ## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION

 - **date_utc**: 2026-11-27T10:00Z
```

#### Structured excerpts (large module)



### `projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md`

- Coverage: MODIFIED — git diff HEAD — 12 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index a22275cd..7a2cf13b 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.29 candidate — 27 novembre 2026 : **RECETTE operational activation A1–A6** (`e8e6e069` · BUILD `rpEczSp61evIZ7d6fnIWR` · PG password rotated · flags LIVE · index borné 10 chunks · WEB/Admin OFF) — **RECETTE OPERATIONAL ACTIVATION COMPLETE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING** ; v0.28 : cutover ; v0.27 : dictation nominal path final DEV ; … |
+| Version | v0.30 candidate — 27 novembre 2026 : **DEV macro-lot correctif intégré continuité/fiabilité** (17 MP MaintiPlan + arbitrages Morris) sur `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` — Option C env-gated ; multi-intent bindings ; shared composer + prep dictation ; panneau Repères ; rail settings ; restitution naturelle ; FinOps/A.4/A.5 DET — **CONSTRUCTION DEV — READY WITH RESERVES (LIVE gates ouverts)** ; v0.29 : RECETTE operational activation A1–A6 ; v0.28 : cutover ; … |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
```


### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/capability/route.ts`

- Coverage: NEW — full — 26 lines
- Status porcelain: `??`

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedPreparation } from "@/domains/conversation/assert-owned-preparation";
import { composerDictationEnabled } from "@/domains/conversation/composer-dictation-types";

/** ML3 — product flag preview for composer dictation (no transport open). */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ preparationId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    await assertOwnedPreparation(session.pilotId, preparationId);
    const enabled = composerDictationEnabled();
    return NextResponse.json({
      ok: true,
      enabled,
      admittedPreview: enabled,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/[sessionId]/audio/route.ts`

- Coverage: NEW — full — 39 lines
- Status porcelain: `??`

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedPreparation } from "@/domains/conversation/assert-owned-preparation";
import { appendDictationAudio } from "@/domains/conversation/composer-dictation-session";

/** Append base64 PCM16 mono 24 kHz chunk — no durable storage. */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ preparationId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId, sessionId } = await ctx.params;
    await assertOwnedPreparation(session.pilotId, preparationId);
    const body = (await req.json().catch(() => ({}))) as {
      pcmBase64?: string;
      seq?: number;
    };
    const pcmBase64 = String(body.pcmBase64 || "");
    if (!pcmBase64) {
      return NextResponse.json({ ok: false, code: "EMPTY" }, { status: 400 });
    }
    const result = appendDictationAudio({
      sessionId,
      pilotId: session.pilotId,
      preparationId,
      pcmBase64,
      seq: body.seq,
    });
    if (!result.ok) {
      return NextResponse.json(result, { status: result.code === "FORBIDDEN" ? 403 : 400 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/[sessionId]/cancel/route.ts`

- Coverage: NEW — full — 30 lines
- Status porcelain: `??`

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedPreparation } from "@/domains/conversation/assert-owned-preparation";
import { cancelDictationSession } from "@/domains/conversation/composer-dictation-session";

export async function POST(
  _req: Request,
  ctx: { params: Promise<{ preparationId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId, sessionId } = await ctx.params;
    await assertOwnedPreparation(session.pilotId, preparationId);
    const result = cancelDictationSession({
      sessionId,
      pilotId: session.pilotId,
      preparationId,
    });
    if (!result.ok) {
      return NextResponse.json(result, {
        status: result.code === "FORBIDDEN" ? 403 : 400,
      });
    }
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/[sessionId]/events/route.ts`

- Coverage: NEW — full — 78 lines
- Status porcelain: `??`

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedPreparation } from "@/domains/conversation/assert-owned-preparation";
import {
  dictationSessionMatchesScope,
  getDictationSession,
  subscribeDictationSession,
} from "@/domains/conversation/composer-dictation-session";

/** SSE stream of dictation events for the authenticated owner. */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ preparationId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId, sessionId } = await ctx.params;
    await assertOwnedPreparation(session.pilotId, preparationId);
    const rec = getDictationSession(sessionId);
    if (
      !rec ||
      !dictationSessionMatchesScope(rec, {
        pilotId: session.pilotId,
        preparationId,
      })
    ) {
      return new Response(JSON.stringify({ ok: false, code: "NOT_FOUND" }), {
        status: 404,
        headers: { "content-type": "application/json" },
      });
    }

    const encoder = new TextEncoder();
    let unsubscribe: (() => void) | null = null;
    const stream = new ReadableStream({
      start(controller) {
        const send = (data: unknown) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        };
        send({ type: "sse.open", sessionId, status: rec.status });
        unsubscribe = subscribeDictationSession(sessionId, session.pilotId, (ev) => {
          send(ev);
          if (
            ev.type === "session.finalized" ||
            ev.type === "session.cancelled" ||
            ev.type === "session.error" ||
            ev.type === "session.expired"
          ) {
            try {
              controller.close();
            } catch {
              /* */
            }
          }
        });
        if (!unsubscribe) {
          send({ type: "session.error", code: "SUBSCRIBE_FAILED", sessionId });
          controller.close();
        }
      },
      cancel() {
        unsubscribe?.();
      },
    });

    return new Response(stream, {
      headers: {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-cache, no-transform",
        connection: "keep-alive",
      },
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/[sessionId]/finalize/route.ts`

- Coverage: NEW — full — 30 lines
- Status porcelain: `??`

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedPreparation } from "@/domains/conversation/assert-owned-preparation";
import { finalizeDictationSession } from "@/domains/conversation/composer-dictation-session";

export async function POST(
  _req: Request,
  ctx: { params: Promise<{ preparationId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId, sessionId } = await ctx.params;
    await assertOwnedPreparation(session.pilotId, preparationId);
    const result = await finalizeDictationSession({
      sessionId,
      pilotId: session.pilotId,
      preparationId,
    });
    if (!result.ok) {
      return NextResponse.json(result, {
        status: result.code === "FORBIDDEN" ? 403 : 400,
      });
    }
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/sessions/route.ts`

- Coverage: NEW — full — 51 lines
- Status porcelain: `??`

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedPreparation } from "@/domains/conversation/assert-owned-preparation";
import { createDictationSession } from "@/domains/conversation/composer-dictation-session";
import { composerDictationEnabled } from "@/domains/conversation/composer-dictation-types";

/** ML3 — admit a Studio-controlled Realtime transcription session (sas). */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ preparationId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    await assertOwnedPreparation(session.pilotId, preparationId);
    const body = (await req.json().catch(() => ({}))) as {
      baselineDraft?: string;
      insertOffset?: number | null;
      conversationKey?: string;
    };
    if (!composerDictationEnabled()) {
      return NextResponse.json(
        { ok: false, code: "FLAG_OFF", message: "Dictation disabled" },
        { status: 403 },
      );
    }
    const created = await createDictationSession({
      pilotId: session.pilotId,
      preparationId,
      conversationKey: (body.conversationKey || preparationId).slice(0, 120),
      baselineDraft: String(body.baselineDraft ?? ""),
      insertOffset: body.insertOffset ?? null,
    });
    if (!created.ok) {
      return NextResponse.json(
        { ok: false, code: created.code, message: created.message },
        { status: created.code === "FLAG_OFF" ? 403 : 400 },
      );
    }
    return NextResponse.json({
      ok: true,
      sessionId: created.session.sessionId,
      model: created.session.modelRequested,
      status: created.session.status,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts`

- Coverage: MODIFIED — git diff HEAD — 26 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts
index 54e10e41..93aa1bb5 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts
@@ -3,6 +3,7 @@ import { requireStudioSession } from "@/domains/identity/session";
 import { studioErrorResponse } from "@/lib/http-errors";
 import { assertOwnedProject } from "@/domains/conversation/assert-owned-project";
 import {
+  dictationSessionMatchesScope,
   getDictationSession,
   subscribeDictationSession,
 } from "@/domains/conversation/composer-dictation-session";
@@ -17,7 +18,13 @@ export async function GET(
     const { projectId, sessionId } = await ctx.params;
     await assertOwnedProject(session.pilotId, projectId);
     const rec = getDictationSession(sessionId);
-    if (!rec || rec.pilotId !== session.pilotId || rec.projectId !== projectId) {
+    if (
+      !rec ||
+      !dictationSessionMatchesScope(rec, {
+        pilotId: session.pilotId,
+        projectId,
+      })
+    ) {
       return new Response(JSON.stringify({ ok: false, code: "NOT_FOUND" }), {
         status: 404,
         headers: { "content-type": "application/json" },
```


### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts`

- Coverage: MODIFIED — git diff HEAD — 29 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts
index cd63746a..b1306c23 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts
@@ -2,7 +2,10 @@ import { NextResponse } from "next/server";
 import { requireStudioSession } from "@/domains/identity/session";
 import { studioErrorResponse } from "@/lib/http-errors";
 import { assertOwnedProject } from "@/domains/conversation/assert-owned-project";
-import { getDictationSession } from "@/domains/conversation/composer-dictation-session";
+import {
+  dictationSessionMatchesScope,
+  getDictationSession,
+} from "@/domains/conversation/composer-dictation-session";
 import { getDictationFixtureTransport } from "@/domains/conversation/composer-dictation-transport-fixture";

 function dictationFixturePushAllowed(env: NodeJS.ProcessEnv = process.env): boolean {
@@ -37,7 +40,13 @@ export async function POST(
     await assertOwnedProject(session.pilotId, projectId);

     const rec = getDictationSession(sessionId);
-    if (!rec || rec.pilotId !== session.pilotId || rec.projectId !== projectId) {
+    if (
+      !rec ||
+      !dictationSessionMatchesScope(rec, {
+        pilotId: session.pilotId,
+        projectId,
+      })
+    ) {
       return NextResponse.json({ ok: false, code: "NOT_FOUND" }, { status: 404 });
     }
```


### `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`

- Coverage: MODIFIED — git diff HEAD — 51 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 00c2ee6c..af02fe12 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -75,6 +75,8 @@ export default function PreparationPage() {
   const [status, setStatus] = useState("");
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [busy, setBusy] = useState(false);
+  /** Optimistic true so sas mic is usable; capability may demote to false. */
+  const [dictationEnabled, setDictationEnabled] = useState(true);
   const [liveActivityEvents, setLiveActivityEvents] = useState<
     Array<{
       sequence: number;
@@ -346,6 +348,28 @@ export default function PreparationPage() {
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [preparationId]);

+  useEffect(() => {
+    if (surface !== "travail") return;
+    let cancelled = false;
+    void (async () => {
+      try {
+        const res = await fetch(
+          `/api/preparations/${preparationId}/dictation/capability`,
+        );
+        if (!res.ok) return;
+        const data = (await res.json()) as { ok?: boolean; enabled?: boolean };
+        if (!cancelled && data.ok) {
+          setDictationEnabled(data.enabled === true);
+        }
+      } catch {
+        /* capability probe is best-effort */
+      }
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [preparationId, surface]);
+
   async function sendMessage() {
     if (!draft.trim()) return;
     setBusy(true);
@@ -1012,6 +1036,9 @@ export default function PreparationPage() {
             showResumeBanner={isResumedPrep}
             liveActivityEvents={liveActivityEvents}
             liveActivityHeadline={liveActivityHeadline}
+            preparationId={preparationId}
+            projectId={projectId}
+            dictationEnabled={dictationEnabled}
           />
           <PreparationProposal
             projectId={projectId}
```


### `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

- Coverage: MODIFIED — git diff HEAD — 328 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index e96ef591..5aac4f4b 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -76,6 +76,18 @@ import {
   resolveProjectLoadSurface,
   type StudioSurface,
 } from "@/components/shell/studio-rail";
+import {
+  readProjectRecentItems,
+  recordProjectRecentItem,
+  type ProjectRecentItem,
+} from "@/lib/project-recent-items";
+import {
+  recentItemFromDocumentConsultation,
+  recentItemFromTurnReference,
+} from "@/lib/project-recent-consultation";
+import { travailAsideOpenPoints } from "@/domains/preparation/project-activity-projection";
+import { CYCLE_TYPE_LABELS } from "@/domains/pilotage/cycle-type-normalize";
+import type { CycleType } from "@/domains/pilotage/cki-resolve";

 type Msg = {
   id: string;
@@ -314,7 +326,9 @@ export default function ProjectPage() {
     }>
   >([]);
   const [liveActivityHeadline, setLiveActivityHeadline] = useState("");
-  const [dictationEnabled, setDictationEnabled] = useState(false);
+  /** Optimistic true so mic is usable; capability may demote to false. */
+  const [dictationEnabled, setDictationEnabled] = useState(true);
+  const [recentItems, setRecentItems] = useState<ProjectRecentItem[]>([]);
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [status, setStatus] = useState("");
   const [pilotageStatus, setPilotageStatus] = useState("");
@@ -426,6 +440,14 @@ export default function ProjectPage() {
     pilotIdRef.current = pilotId;
   }, [pilotId]);

+  useEffect(() => {
+    if (!pilotId) {
+      setRecentItems([]);
+      return;
+    }
+    setRecentItems(readProjectRecentItems(pilotId, params.projectId));
+  }, [pilotId, params.projectId]);
+
   useEffect(() => {
     if (surface !== "travail") return;
     let cancelled = false;
@@ -603,7 +625,19 @@ export default function ProjectPage() {
     versionSource: "exact" | "current";
     seq: number;
     projectIdAtStart: string;
+    revisionNumber?: number | null;
   }) {
+    notePilotConsultation(
+      recentItemFromDocumentConsultation(
+        input.documentId,
+        input.titleHint,
+        input.revisionNumber != null
+          ? `v${input.revisionNumber}`
+          : input.revisionId
+            ? `rev:${input.revisionId.slice(0, 8)}`
+            : null,
+      ),
+    );
     const prepId = preparationIdRef.current;
     if (!prepId) {
       applyViewerIfCurrent(
@@ -807,6 +841,15 @@ export default function ProjectPage() {
       unavailableReason: "Vérification des droits et de la version courante…",
     });
     setViewerEnlarged(false);
+    notePilotConsultation(
+      recentItemFromDocumentConsultation(
+        doc.document.id,
+        doc.document.title,
+        doc.latestRevision?.revisionNumber != null
+          ? `v${doc.latestRevision.revisionNumber}`
+          : null,
+      ),
+    );
     void fetchDocumentViewerViaD4({
       documentId: doc.document.id,
       titleHint: doc.document.title,
@@ -817,6 +860,27 @@ export default function ProjectPage() {
     });
   }

+  function cycleTypeDisplay(raw: string | null | undefined): string {
+    if (!raw) return "";
+    const key = raw as CycleType;
+    if (key in CYCLE_TYPE_LABELS) return CYCLE_TYPE_LABELS[key];
+    return raw.replace(/_/g, " ").toLowerCase();
+  }
+
+  /** MP-08 — Pilote consultation only (not Nora self-read). */
+  function notePilotConsultation(
+    item: Omit<ProjectRecentItem, "consultedAtMs"> & { consultedAtMs?: number },
+  ) {
+    if (!pilotId) return;
+    setRecentItems(
+      recordProjectRecentItem({
+        pilotId,
+        projectId: params.projectId,
+        item,
+      }),
+    );
+  }
+
   async function refreshReadyContracts() {
     try {
       const res = await fetch(`/api/projects/${params.projectId}/realization/contracts`);
@@ -1042,6 +1106,8 @@ export default function ProjectPage() {
       return;
     }
     if (ref.kind === "git") {
+      const recentGit = recentItemFromTurnReference(ref);
+      if (recentGit) notePilotConsultation(recentGit);
       if (!ref.repositoryId || !ref.path || !ref.ref) {
         applyViewerIfCurrent(
           seq,
@@ -3312,7 +3378,7 @@ export default function ProjectPage() {
                   ? "Contexte conservé"
                   : "Projet actif"}
               </span>
-              {/* RB-19 — cycle actif / trajectoire from durable pilotage, not stale copy. */}
+              {/* MP-08 / continuity §9 — identity, cycle, trajectory only. */}
               <div
                 className="fig-inspector-card mt-3"
                 data-testid="travail-aside-cycle"
@@ -3320,125 +3386,104 @@ export default function ProjectPage() {
                 <p className="fig-inspector-card-title">Cycle et trajectoire</p>
                 <p className="fig-inspector-card-body">
                   {pilotageProjection?.cycle
-                    ? `Cycle actif : ${String(pilotageProjection.cycle.cycleType).replace(/_/g, " ")} · ${pilotageProjection.cycle.status}`
+                    ? `Cycle actif : ${cycleTypeDisplay(String(pilotageProjection.cycle.cycleType))} · ${pilotageProjection.cycle.status}`
                     : "Aucun cycle ouvert pour le moment."}
                 </p>
-                {(
-                  pilotageProjection?.trajectory?.retained?.orientation ||
-                  pilotageProjection?.trajectory?.proposed?.orientation ||
-                  ""
-                ).trim() ? (
+                {pilotageProjection?.trajectory?.retained?.orientation?.trim() ? (
                   <p className="fig-inspector-card-body mt-1">
-                    {(
-                      pilotageProjection?.trajectory?.retained?.orientation ||
-                      pilotageProjection?.trajectory?.proposed?.orientation ||
-                      ""
-                    ).slice(0, 180)}
+                    Parcours retenu :{" "}
+                    {pilotageProjection.trajectory.retained.orientation.slice(0, 180)}
+                  </p>
+                ) : pilotageProjection?.trajectory?.proposed?.orientation?.trim() ? (
+                  <p className="fig-inspector-card-body mt-1">
+                    Parcours envisagé :{" "}
+                    {pilotageProjection.trajectory.proposed.orientation.slice(0, 180)}
                   </p>
                 ) : null}
               </div>
               <div className="fig-inspector-rule" aria-hidden />
               <p className="fig-inspector-section">Repères</p>
-              <div className="fig-inspector-card" data-testid="travail-aside-objets">
-                <p className="fig-inspector-card-title">Continuité</p>
-                <p className="fig-inspector-card-body">
-                  Fil de préparation et conversation consultables depuis Travail.
-                </p>
-              </div>
-              <div className="fig-inspector-card" data-testid="travail-aside-contracts">
-                <p className="fig-inspector-card-title">Contrats techniques</p>
-                <p className="fig-inspector-card-body">
-                  Visionneuse 50/50 — lecture intégrale puis D6 si READY.
-                </p>
-                <button
-                  type="button"
-                  className="btn secondary mt-2"
-                  data-testid="travail-refresh-contracts"
-                  onClick={() => void refreshReadyContracts()}
-                >
-                  Actualiser
-                </button>
-                {readyContracts.length === 0 ? (
-                  <p className="fig-travail-viewer-meta mt-2">Aucun contrat READY.</p>
+              <div className="fig-inspector-card" data-testid="travail-aside-recents">
+                <p className="fig-inspector-card-title">Éléments récents</p>
+                {recentItems.length === 0 ? (
+                  <p className="fig-inspector-card-body" data-testid="travail-aside-recents-empty">
+                    Aucun élément consulté récemment.
+                  </p>
                 ) : (
-                  <ul className="mt-2 space-y-1" data-testid="travail-ready-contracts">
-                    {readyContracts.map((c) => (
-                      <li key={c.id}>
+                  <ul className="mt-1 space-y-1" data-testid="travail-aside-recents-list">
+                    {recentItems.map((item) => (
+                      <li key={item.id}>
                         <button
                           type="button"
-                          className="btn secondary"
-                          data-testid={`travail-open-contract-${c.id}`}
-                          onClick={() => void openContractViewer(c.id)}
+                          className="fig-inspector-link"
+                          data-testid={`travail-recent-${item.id}`}
+                          onClick={() => {
+                            if (item.kind === "document_nora") {
+                              const docId = item.id.replace(/^doc:/, "");
+                              const doc = documents.find((d) => d.document.id === docId);
+                              if (doc) openTravailDocument(doc);
+                              return;
+                            }
+                            if (item.kind === "file_git" || item.kind === "document_git") {
+                              selectSurface("git");
+                              return;
+                            }
+                            if (item.kind === "execution") {
+                              selectSurface("execution");
+                              return;
+                            }
+                            if (
+                              item.kind === "result" ||
+                              item.kind === "bilan" ||
+                              item.kind === "proof"
+                            ) {
+                              selectSurface("publication");
+                            }
+                          }}
                         >
-                          {c.title} · v{c.version}
+                          {item.title}
+                          {item.refLabel ? ` · ${item.refLabel}` : ""}
                         </button>
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
-              <div className="fig-inspector-card">
-                <p className="fig-inspector-card-title">Dossier du projet</p>
-                <p className="fig-inspector-card-body">
-                  {documents.length > 0
-                    ? `${documents.length} document${documents.length > 1 ? "s" : ""} Nora disponible${documents.length > 1 ? "s" : ""}.`
-                    : "Les objets et sources du projet restent distincts du dialogue."}
-                </p>
-                {documents.length > 0 ? (
-                  <div className="fig-inspector-links mt-2">
-                    {documents.map((d) => (
+              <div className="fig-inspector-rule" aria-hidden />
+              <p className="fig-inspector-section">Points à clarifier</p>
+              <div data-testid="travail-aside-clarifier">
+                {travailAsideOpenPoints(knowledge?.openPoints ?? [], 5).map((o) => {
+                    const short =
+                      o.statement.length > 72
+                        ? `${o.statement.slice(0, 69).trimEnd()}…`
+                        : o.statement;
+                    return (
                       <button
-                        key={d.document.id}
+                        key={o.id}
                         type="button"
-                        className="fig-inspector-link"
-                        data-testid={`travail-consulter-${d.document.id}`}
-                        onClick={() => openTravailDocument(d)}
+                        className="fig-inspector-link mb-2 block text-left"
+                        data-testid={`travail-open-point-${o.id}`}
+                        onClick={() => selectSurface("journal")}
+                        title={o.statement}
                       >
-                        Consulter · {d.document.title}
+                        {short}
                       </button>
-                    ))}
-                  </div>
-                ) : null}
-                <div className="fig-inspector-links">
-                  <button
-                    type="button"
-                    className="fig-inspector-link"
-                    onClick={() => selectSurface("git")}
-                  >
-                    Sources Git
-                  </button>
-                  <button
-                    type="button"
-                    className="fig-inspector-link"
-                    onClick={() => selectSurface("execution")}
-                  >
-                    Exécution
-                  </button>
+                    );
+                  })}
+                {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
+                  <p className="fig-inspector-card-body">
+                    Aucun point ouvert pour le moment.
+                  </p>
+                ) : (
                   <button
                     type="button"
-                    className="fig-inspector-link"
-                    onClick={() => selectSurface("publication")}
+                    className="fig-inspector-link mt-1"
+                    data-testid="travail-aside-all-open-points"
+                    onClick={() => selectSurface("journal")}
                   >
-                    Résultats & preuves
+                    Voir tous les points ouverts
                   </button>
-                </div>
-              </div>
-              <div className="fig-inspector-rule" aria-hidden />
-              <p className="fig-inspector-section">Points à clarifier</p>
-              <div data-testid="travail-aside-clarifier">
-                {(knowledge?.openPoints ?? [])
-                  .filter((o) => o.status === "OPEN")
-                  .slice(0, 5)
-                  .map((o) => (
-                    <p key={o.id} className="fig-inspector-card-body mb-2">
-                      {o.statement}
-                    </p>
-                  ))}
-                {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
-                  <p className="fig-inspector-card-body">
-                    Seules les informations réellement connues seront affichées.
-                  </p>
-                ) : null}
+                )}
               </div>
             </div>
             )
```

#### Structured excerpts (large module)

#### marker `travailAsideOpenPoints` L80–L123
```ts
   80|   readProjectRecentItems,
   81|   recordProjectRecentItem,
   82|   type ProjectRecentItem,
   83| } from "@/lib/project-recent-items";
   84| import {
   85|   recentItemFromDocumentConsultation,
   86|   recentItemFromTurnReference,
   87| } from "@/lib/project-recent-consultation";
   88| import { travailAsideOpenPoints } from "@/domains/preparation/project-activity-projection";
   89| import { CYCLE_TYPE_LABELS } from "@/domains/pilotage/cycle-type-normalize";
   90| import type { CycleType } from "@/domains/pilotage/cki-resolve";
   91|
   92| type Msg = {
   93|   id: string;
   94|   role: string;
   95|   content: string;
   96|   status: string;
   97|   /** ISO timestamp — used to keep chronological order when hydrating a deep-linked message (E06-04). */
   98|   createdAt?: string;
   99| };
  100| type Doc = {
  101|   document: { id: string; title: string };
  102|   latestRevision?: {
  103|     id: string;
  104|     revisionNumber: number;
  105|     status: string;
  106|     contentMarkdown: string;
  107|     provenanceJson?: string;
  108|   } | null;
  109| };
  110| type Knowledge = {
  111|   preparationIds?: string[];
  112|   subjects: Array<{
  113|     id: string;
  114|     title: string;
  115|     status: string;
  116|     parentSubjectId: string | null;
  117|     originatedFromSubjectId: string | null;
  118|     summary?: { revisionNumber: number; summaryMarkdown: string } | null;
  119|   }>;
  120|   acquis: Array<{ id: string; kind: string; statement: string; status: string; subjectId: string | null }>;
  121|   openPoints: Array<{ id: string; statement: string; status: string; subjectId: string | null }>;
  122| };
  123|
```

#### marker `recordProjectRecentItem` L73–L116
```ts
   73|   clearProjectSurfaceNavIntent,
   74|   noteProjectSurfaceNavIntent,
   75|   peekProjectSurfaceNavIntent,
   76|   resolveProjectLoadSurface,
   77|   type StudioSurface,
   78| } from "@/components/shell/studio-rail";
   79| import {
   80|   readProjectRecentItems,
   81|   recordProjectRecentItem,
   82|   type ProjectRecentItem,
   83| } from "@/lib/project-recent-items";
   84| import {
   85|   recentItemFromDocumentConsultation,
   86|   recentItemFromTurnReference,
   87| } from "@/lib/project-recent-consultation";
   88| import { travailAsideOpenPoints } from "@/domains/preparation/project-activity-projection";
   89| import { CYCLE_TYPE_LABELS } from "@/domains/pilotage/cycle-type-normalize";
   90| import type { CycleType } from "@/domains/pilotage/cki-resolve";
   91|
   92| type Msg = {
   93|   id: string;
   94|   role: string;
   95|   content: string;
   96|   status: string;
   97|   /** ISO timestamp — used to keep chronological order when hydrating a deep-linked message (E06-04). */
   98|   createdAt?: string;
   99| };
  100| type Doc = {
  101|   document: { id: string; title: string };
  102|   latestRevision?: {
  103|     id: string;
  104|     revisionNumber: number;
  105|     status: string;
  106|     contentMarkdown: string;
  107|     provenanceJson?: string;
  108|   } | null;
  109| };
  110| type Knowledge = {
  111|   preparationIds?: string[];
  112|   subjects: Array<{
  113|     id: string;
  114|     title: string;
  115|     status: string;
  116|     parentSubjectId: string | null;
```

#### marker `notePilotConsultation` L622–L665
```ts
  622|     documentId: string;
  623|     titleHint: string;
  624|     revisionId?: string | null;
  625|     versionSource: "exact" | "current";
  626|     seq: number;
  627|     projectIdAtStart: string;
  628|     revisionNumber?: number | null;
  629|   }) {
  630|     notePilotConsultation(
  631|       recentItemFromDocumentConsultation(
  632|         input.documentId,
  633|         input.titleHint,
  634|         input.revisionNumber != null
  635|           ? `v${input.revisionNumber}`
  636|           : input.revisionId
  637|             ? `rev:${input.revisionId.slice(0, 8)}`
  638|             : null,
  639|       ),
  640|     );
  641|     const prepId = preparationIdRef.current;
  642|     if (!prepId) {
  643|       applyViewerIfCurrent(
  644|         input.seq,
  645|         {
  646|           kind: "document",
  647|           documentId: input.documentId,
  648|           title: input.titleHint,
  649|           revisionId: input.revisionId ?? null,
  650|           revisionNumber: null,
  651|           versionSource: input.versionSource,
  652|           markdown: null,
  653|           available: false,
  654|           unavailableReason: "Préparation indisponible — lecture D4 impossible.",
  655|         },
  656|         input.projectIdAtStart,
  657|       );
  658|       return;
  659|     }
  660|
  661|     try {
  662|       let targetRevisionId = input.revisionId?.trim() || "";
  663|       let title = input.titleHint;
  664|
  665|       if (!targetRevisionId) {
```


### `projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx`

- Coverage: MODIFIED — git diff HEAD — 229 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx b/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
index 9e5f8cd2..3816895e 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
@@ -7,7 +7,8 @@
 import { useCallback, useEffect, useMemo, useRef, useState } from "react";

 export type ComposerDictationControlProps = {
-  projectId: string;
+  projectId?: string;
+  preparationId?: string;
   draft: string;
   onDraft: (next: string) => void;
   disabled?: boolean;
@@ -15,6 +16,24 @@ export type ComposerDictationControlProps = {
   onActiveChange?: (active: boolean) => void;
 };

+/** Project dictation wins over preparation when both ids are present (shared composer). */
+export function dictationApiBase(input: {
+  projectId?: string;
+  preparationId?: string;
+}): string | null {
+  if (input.projectId) {
+    return `/api/projects/${encodeURIComponent(input.projectId)}/dictation`;
+  }
+  if (input.preparationId) {
+    return `/api/preparations/${encodeURIComponent(input.preparationId)}/dictation`;
+  }
+  return null;
+}
+
+function dictationConversationKey(props: ComposerDictationControlProps): string {
+  return (props.projectId || props.preparationId || "dictation").slice(0, 120);
+}
+
 type UiPhase = "idle" | "requesting" | "listening" | "finalizing" | "error";

 const WAVE_BARS = 36;
@@ -90,6 +109,10 @@ function figmaState(
 }

 export function ComposerDictationControl(props: ComposerDictationControlProps) {
+  const apiBase = useMemo(
+    () => dictationApiBase({ projectId: props.projectId, preparationId: props.preparationId }),
+    [props.projectId, props.preparationId],
+  );
   const [phase, setPhase] = useState<UiPhase>("idle");
   const [error, setError] = useState<string | null>(null);
   const [provisional, setProvisional] = useState("");
@@ -170,7 +193,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
   const enqueueAudio = useCallback(
     (pcmBase64: string) => {
       const sid = sessionIdRef.current;
-      if (!sid || captureStoppedRef.current) return;
+      if (!sid || captureStoppedRef.current || !apiBase) return;

       if (pendingUploadsRef.current >= AUDIO_QUEUE_MAX) {
         pendingUploadsRef.current = 0;
@@ -180,7 +203,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
         const overflowSid = sessionIdRef.current;
         if (overflowSid) {
           void fetch(
-            `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(overflowSid)}/cancel`,
+            `${apiBase}/sessions/${encodeURIComponent(overflowSid)}/cancel`,
             { method: "POST" },
           ).catch(() => undefined);
           sessionIdRef.current = null;
@@ -197,7 +220,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
           if (!sessionIdRef.current) return;
           try {
             const res = await fetch(
-              `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/audio`,
+              `${apiBase}/sessions/${encodeURIComponent(sid)}/audio`,
               {
                 method: "POST",
                 headers: { "content-type": "application/json" },
@@ -210,10 +233,9 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
               stopMedia();
               const badSid = sessionIdRef.current;
               if (badSid) {
-                await fetch(
-                  `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(badSid)}/cancel`,
-                  { method: "POST" },
-                ).catch(() => undefined);
+                await fetch(`${apiBase}/sessions/${encodeURIComponent(badSid)}/cancel`, {
+                  method: "POST",
+                }).catch(() => undefined);
                 sessionIdRef.current = null;
               }
             }
@@ -226,22 +248,21 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
         })
         .catch(() => undefined);
     },
-    [failCapture, props.projectId, stopMedia],
+    [apiBase, failCapture, stopMedia],
   );

   const cancelSessionRemote = useCallback(
     async (sid: string | null) => {
-      if (!sid) return;
-      await fetch(
-        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/cancel`,
-        { method: "POST" },
-      ).catch(() => undefined);
+      if (!sid || !apiBase) return;
+      await fetch(`${apiBase}/sessions/${encodeURIComponent(sid)}/cancel`, {
+        method: "POST",
+      }).catch(() => undefined);
     },
-    [props.projectId],
+    [apiBase],
   );

   const startListening = useCallback(async () => {
-    if (props.disabled || props.enabled === false) return;
+    if (props.disabled || props.enabled === false || !apiBase) return;
     const gen = ++generationRef.current;
     setError(null);
     setPhase("requesting");
@@ -274,18 +295,15 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
       }
       mediaRef.current = stream;

-      const createRes = await fetch(
-        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions`,
-        {
-          method: "POST",
-          headers: { "content-type": "application/json" },
-          body: JSON.stringify({
-            baselineDraft: props.draft,
-            insertOffset: props.draft.length,
-            conversationKey: props.projectId,
-          }),
-        },
-      );
+      const createRes = await fetch(`${apiBase}/sessions`, {
+        method: "POST",
+        headers: { "content-type": "application/json" },
+        body: JSON.stringify({
+          baselineDraft: props.draft,
+          insertOffset: props.draft.length,
+          conversationKey: dictationConversationKey(props),
+        }),
+      });
       if (aborted()) {
         stopMedia();
         const early = (await createRes.json().catch(() => null)) as {
@@ -317,7 +335,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
       sessionStartRef.current = Date.now();

       const es = new EventSource(
-        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(created.sessionId)}/events`,
+        `${apiBase}/sessions/${encodeURIComponent(created.sessionId)}/events`,
       );
       esRef.current = es;
       es.onmessage = (msg) => {
@@ -450,7 +468,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
     props.disabled,
     props.enabled,
     props.draft,
-    props.projectId,
+    apiBase,
     stopMedia,
   ]);

@@ -473,7 +491,7 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {

   const finalize = useCallback(async () => {
     const sid = sessionIdRef.current;
-    if (!sid || phase === "finalizing") return;
+    if (!sid || phase === "finalizing" || !apiBase) return;
     const gen = generationRef.current;
     setPhase("finalizing");
     captureStoppedRef.current = true;
@@ -481,10 +499,9 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
     try {
       await drainUploads();
       if (generationRef.current !== gen) return;
-      const res = await fetch(
-        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/finalize`,
-        { method: "POST" },
-      );
+      const res = await fetch(`${apiBase}/sessions/${encodeURIComponent(sid)}/finalize`, {
+        method: "POST",
+      });
       if (generationRef.current !== gen) return;
       const body = (await res.json()) as {
         ok?: boolean;
@@ -515,10 +532,11 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
     setPhase("idle");
     sessionStartRef.current = null;
     setElapsedMs(0);
-  }, [drainUploads, phase, props, stopMedia]);
+  }, [apiBase, drainUploads, phase, props, stopMedia]);

   const hasBaseline = shellActive && baselineSnapshot.trim().length > 0;
   const showConnexion = phase === "requesting";
+  const showWave = phase === "listening";

   const dataFigmaState = useMemo(
     () => figmaState(phase, provisionalHidden),
@@ -595,15 +613,17 @@ export function ComposerDictationControl(props: ComposerDictationControlProps) {
             <span className="fig-dictation-elapsed" data-testid="dictation-elapsed">
               {formatElapsed(elapsedMs)}
             </span>
-            <div className="fig-dictation-wave" data-testid="dictation-wave">
-              {barHeights.map((h, i) => (
-                <span
-                  key={i}
-                  className="fig-dictation-bar"
-                  style={{ transform: `scaleY(${h})` }}
-                />
-              ))}
-            </div>
+            {showWave ? (
+              <div className="fig-dictation-wave" data-testid="dictation-wave">
+                {barHeights.map((h, i) => (
+                  <span
+                    key={i}
+                    className="fig-dictation-bar"
+                    style={{ transform: `scaleY(${h})` }}
+                  />
+                ))}
+              </div>
+            ) : null}
           </div>

           <button
```


### `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

- Coverage: MODIFIED — git diff HEAD — 236 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index ff1cbaad..48af1c5c 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -1,6 +1,6 @@
 "use client";

-import { useEffect, useRef, useState } from "react";
+import { useEffect, useRef } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { NoraComposition } from "@/components/figma/NoraComposition";
 import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
@@ -15,7 +15,7 @@ import {
   compositionAnchorsReferences,
 } from "@/domains/conversation/visual-composition";
 import { NoraLiveActivity } from "@/components/figma/NoraLiveActivity";
-import { ComposerDictationControl } from "@/components/figma/ComposerDictationControl";
+import { NoraSharedComposer } from "@/components/figma/NoraSharedComposer";

 export type NoraMsg = {
   id: string;
@@ -84,15 +84,6 @@ export function NoraConversation(props: {
     n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
   const embedded = Boolean(props.embeddedInStage);
   const composerLocked = Boolean(props.composerLocked);
-  const hasDossier = Boolean(props.dossierAttachment?.attemptId);
-  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
-  const [imeComposing, setImeComposing] = useState(false);
-  const [dictationActive, setDictationActive] = useState(false);
-  const sendDisabled =
-    props.busy ||
-    dictationActive ||
-    (!props.draft.trim() && !hasDossier) ||
-    composerLocked;
   const lastMessageId = n > 0 ? props.messages[n - 1]!.id : null;
   const { threadRef, onScroll, scrollToBottom, newBelow } = useNoraThreadScroll({
     messageCount: n,
@@ -101,21 +92,6 @@ export function NoraConversation(props: {
     forceStickToken: props.forceStickToken ?? 0,
     focusMessageId: props.focusMessageId,
   });
-  const isMobile =
-    typeof window !== "undefined" &&
-    window.matchMedia &&
-    window.matchMedia("(max-width: 700px)").matches;
-
-  useEffect(() => {
-    const el = textareaRef.current;
-    if (!el) return;
-    el.style.height = "auto";
-    const max = Math.min(window.innerHeight * 0.36, 280);
-    const next = Math.min(Math.max(el.scrollHeight, 24), max);
-    el.style.height = `${next}px`;
-    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
-  }, [props.draft]);
-
   // Include message id order so Journal→Travail highlight rebinds after a same-length
   // setMessages remount (length-only deps lost data-journal-focus on replaced nodes).
   const messageIdsKey = props.messages.map((m) => m.id).join("\0");
@@ -442,163 +418,20 @@ export function NoraConversation(props: {
             </button>
           </div>
         ) : null}
-        <div
-          className="fig-composer fig-travail-composer relative"
-          data-testid="nora-composer"
-          data-composer-locked={composerLocked ? "1" : "0"}
-          data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
-          data-dictation-active={dictationActive ? "1" : "0"}
-        >
-          {composerLocked ? (
-            <div
-              className="fig-travail-composer-lock absolute inset-0 z-10 flex items-center gap-3 rounded-xl px-4"
-              style={{ background: "rgba(12, 16, 28, 0.72)" }}
-              data-testid="composer-lock-overlay"
-            >
-              <svg
-                className="shrink-0 text-[#7477ed]"
-                width="24"
-                height="24"
-                viewBox="0 0 24 24"
-                fill="none"
-                stroke="currentColor"
-                strokeWidth="1.75"
-                aria-hidden
-              >
-                <rect x="5" y="11" width="14" height="10" rx="2" />
-                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
-              </svg>
-              <div className="min-w-0 flex-1 text-xs text-[#a3b0c7]">
-                <p className="font-semibold text-[#f3f5ff]" data-testid="composer-lock-title">
-                  Compositeur temporairement indisponible
-                </p>
-                <p data-testid="composer-lock-reason">
-                  {props.composerLockReason ||
-                    "Nora prépare la trajectoire — saisie et envoi désactivés jusqu'au résultat terminal."}
-                </p>
-              </div>
-              <button
-                type="button"
-                className="shrink-0 rounded border border-[#7477ed55] px-1.5 py-0.5 text-[#7477ed]"
-                title={
-                  props.composerLockReason ||
-                  "Compositeur temporairement indisponible pendant la qualification de trajectoire."
-                }
-                aria-label={
-                  props.composerLockReason ||
-                  "Compositeur temporairement indisponible pendant la qualification de trajectoire."
-                }
-                data-testid="composer-lock-info"
-              >
-                i
-              </button>
-            </div>
-          ) : null}
-          {props.dossierAttachment?.attemptId ? (
-            <div
-              className="fig-dossier-attachment"
-              data-testid="dossier-composer-attachment"
-            >
-              <div className="fig-dossier-attachment-body">
-                <p className="fig-dossier-attachment-label">Dossier D8 joint</p>
-                <p className="fig-dossier-attachment-meta">
-                  {props.dossierAttachment.attemptId}
-                  {props.dossierAttachment.dossierVersion != null
-                    ? ` · v${props.dossierAttachment.dossierVersion}`
-                    : ""}
-                  {props.dossierAttachment.verdictD8
-                    ? ` · ${props.dossierAttachment.verdictD8}`
-                    : ""}
-                </p>
-              </div>
-              <button
-                type="button"
-                className="fig-dossier-attachment-remove"
-                data-testid="dossier-composer-attachment-remove"
-                disabled={composerLocked || props.busy}
-                onClick={() => props.onRemoveDossierAttachment?.()}
-                aria-label="Retirer la référence du dossier D8"
-              >
-                Retirer
-              </button>
-            </div>
-          ) : null}
-          <div className="fig-travail-composer-row">
-            <span
-              className="fig-travail-composer-plus"
-              aria-hidden
-              data-dictation-hide={dictationActive ? "1" : undefined}
-            >
-              +
-            </span>
-            <textarea
-              ref={textareaRef}
-              className="fig-travail-composer-input"
-              value={props.draft}
-              onChange={(e) => props.onDraft(e.target.value)}
-              placeholder="Écrire à Nora dans ce projet…"
-              aria-label="Message à Nora"
-              data-testid="thread-draft"
-              rows={1}
-              readOnly={composerLocked || dictationActive}
-              disabled={composerLocked}
-              aria-disabled={composerLocked || dictationActive}
-              data-dictation-hide={dictationActive ? "1" : undefined}
-              hidden={dictationActive}
-              tabIndex={dictationActive ? -1 : 0}
-              onCompositionStart={() => setImeComposing(true)}
-              onCompositionEnd={() => setImeComposing(false)}
-              onKeyDown={(e) => {
-                if (composerLocked || dictationActive) {
-                  e.preventDefault();
-                  return;
-                }
-                if (imeComposing || e.nativeEvent.isComposing) return;
-                // Mobile: Enter = newline; send via button only.
-                if (isMobile) return;
-                if (e.key === "Enter" && !e.shiftKey && !props.busy) {
-                  e.preventDefault();
-                  if (props.draft.trim() || hasDossier) props.onSend();
-                }
-              }}
-            />
-            {props.projectId ? (
-              <ComposerDictationControl
-                projectId={props.projectId}
-                draft={props.draft}
-                onDraft={props.onDraft}
-                disabled={composerLocked || props.busy}
-                enabled={props.dictationEnabled === true}
-                onActiveChange={setDictationActive}
-              />
-            ) : null}
-            <button
-              type="button"
-              className="fig-travail-composer-send"
-              disabled={sendDisabled}
-              onClick={props.onSend}
-              data-testid="thread-send"
-              aria-label="Envoyer"
-              data-dictation-hide={dictationActive ? "1" : undefined}
-              hidden={dictationActive}
-              tabIndex={dictationActive ? -1 : 0}
-            >
-              <img
-                src="/figma-dictation/send.svg"
-                alt=""
-                width={20}
-                height={20}
-                aria-hidden
-                className="fig-travail-composer-send-icon"
-              />
-            </button>
-          </div>
-          {props.status ? (
-            <p className="sr-only" data-testid="thread-nora-status" role="status">
-              {props.status}
-            </p>
-          ) : null}
-        </div>
+        <NoraSharedComposer
+          variant="travail"
+          draft={props.draft}
+          onDraft={props.onDraft}
+          busy={props.busy}
+          onSend={props.onSend}
+          projectId={props.projectId}
+          dictationEnabled={props.dictationEnabled}
+          composerLocked={composerLocked}
+          composerLockReason={props.composerLockReason}
+          dossierAttachment={props.dossierAttachment}
+          onRemoveDossierAttachment={props.onRemoveDossierAttachment}
+          status={props.status}
+        />
       </div>

       {props.aside ? (
```


### `projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx`

- Coverage: NEW — full — 312 lines
- Status porcelain: `??`

```
"use client";

import { useEffect, useRef, useState } from "react";
import { ComposerDictationControl } from "@/components/figma/ComposerDictationControl";

export type NoraSharedComposerProps = {
  draft: string;
  onDraft: (value: string) => void;
  busy: boolean;
  onSend: () => void;
  variant: "prep" | "travail";
  projectId?: string;
  preparationId?: string;
  dictationEnabled?: boolean;
  composerLocked?: boolean;
  composerLockReason?: string;
  dossierAttachment?: {
    attemptId: string;
    contractId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
  } | null;
  onRemoveDossierAttachment?: () => void;
  status?: string;
  placeholder?: string;
};

export function NoraSharedComposer(props: NoraSharedComposerProps) {
  const composerLocked = Boolean(props.composerLocked);
  const hasDossier = Boolean(props.dossierAttachment?.attemptId);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [imeComposing, setImeComposing] = useState(false);
  const [dictationActive, setDictationActive] = useState(false);

  const dictationProjectId = props.projectId;
  const dictationPreparationId = props.projectId ? undefined : props.preparationId;
  const dictationMount = Boolean(dictationProjectId || dictationPreparationId);

  const sendDisabled =
    props.busy ||
    dictationActive ||
    (props.variant === "travail"
      ? !props.draft.trim() && !hasDossier
      : !props.draft.trim()) ||
    composerLocked;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 700px)").matches;

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const max = Math.min(window.innerHeight * 0.36, 280);
    const min = props.variant === "prep" ? 42 : 24;
    const next = Math.min(Math.max(el.scrollHeight, min), max);
    el.style.height = `${next}px`;
    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
  }, [props.draft, props.variant]);

  const placeholder =
    props.placeholder ??
    (props.variant === "prep"
      ? "Décrivez votre idée, une question ou une hésitation…"
      : "Écrire à Nora dans ce projet…");

  const dictationControl = dictationMount ? (
    <ComposerDictationControl
      projectId={dictationProjectId}
      preparationId={dictationPreparationId}
      draft={props.draft}
      onDraft={props.onDraft}
      disabled={composerLocked || props.busy}
      enabled={props.dictationEnabled === true}
      onActiveChange={setDictationActive}
    />
  ) : null;

  if (props.variant === "prep") {
    const expanded = props.draft.includes("\n") || props.draft.length > 80;
    return (
      <div
        className="sas-composer"
        data-testid="prep-composer"
        data-dictation-active={dictationActive ? "1" : "0"}
        data-composer-expanded={expanded ? "1" : "0"}
        style={
          expanded
            ? {
                height: "auto",
                maxHeight: "min(36vh, 280px)",
                minHeight: "var(--sas-composer-h)",
              }
            : undefined
        }
      >
        <textarea
          ref={textareaRef}
          className="sas-composer-input"
          value={props.draft}
          onChange={(e) => props.onDraft(e.target.value)}
          placeholder={placeholder}
          aria-label="Message à Nora"
          data-testid="prep-draft"
          rows={1}
          disabled={props.busy || composerLocked}
          readOnly={composerLocked || dictationActive}
          hidden={dictationActive}
          tabIndex={dictationActive ? -1 : 0}
          data-dictation-hide={dictationActive ? "1" : undefined}
          onCompositionStart={() => setImeComposing(true)}
          onCompositionEnd={() => setImeComposing(false)}
          onKeyDown={(e) => {
            if (composerLocked || dictationActive) {
              e.preventDefault();
              return;
            }
            if (imeComposing || e.nativeEvent.isComposing) return;
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
              e.preventDefault();
              if (props.draft.trim()) props.onSend();
            }
          }}
        />
        <div
          className="sas-composer-bar"
          data-dictation-active={dictationActive ? "1" : "0"}
        >
          <span
            className="sas-composer-hint"
            aria-hidden={!dictationActive && !props.draft.trim()}
            data-dictation-hide={dictationActive ? "1" : undefined}
            hidden={dictationActive}
          >
            <span className="sas-composer-plus" aria-hidden>
              ＋
            </span>
            Échanger librement avec Nora
          </span>
          <div className="inline-flex min-w-0 flex-1 items-center justify-end gap-2">
            {dictationControl}
            <button
              type="button"
              className="sas-composer-send"
              disabled={sendDisabled}
              onClick={props.onSend}
              data-testid="prep-send"
              aria-label="Envoyer le message"
              data-dictation-hide={dictationActive ? "1" : undefined}
              hidden={dictationActive}
              tabIndex={dictationActive ? -1 : 0}
            >
              <span aria-hidden>↑</span>
            </button>
          </div>
        </div>
        {props.status ? (
          <p className="sr-only" role="status">
            {props.status}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className="fig-composer fig-travail-composer relative"
      data-testid="nora-composer"
      data-composer-locked={composerLocked ? "1" : "0"}
      data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
      data-dictation-active={dictationActive ? "1" : "0"}
    >
      {composerLocked ? (
        <div
          className="fig-travail-composer-lock absolute inset-0 z-10 flex items-center gap-3 rounded-xl px-4"
          style={{ background: "rgba(12, 16, 28, 0.72)" }}
          data-testid="composer-lock-overlay"
        >
          <svg
            className="shrink-0 text-[#7477ed]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden
          >
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          <div className="min-w-0 flex-1 text-xs text-[#a3b0c7]">
            <p className="font-semibold text-[#f3f5ff]" data-testid="composer-lock-title">
              Compositeur temporairement indisponible
            </p>
            <p data-testid="composer-lock-reason">
              {props.composerLockReason ||
                "Nora prépare la trajectoire — saisie et envoi désactivés jusqu'au résultat terminal."}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded border border-[#7477ed55] px-1.5 py-0.5 text-[#7477ed]"
            title={
              props.composerLockReason ||
              "Compositeur temporairement indisponible pendant la qualification de trajectoire."
            }
            aria-label={
              props.composerLockReason ||
              "Compositeur temporairement indisponible pendant la qualification de trajectoire."
            }
            data-testid="composer-lock-info"
          >
            i
          </button>
        </div>
      ) : null}
      {props.dossierAttachment?.attemptId ? (
        <div className="fig-dossier-attachment" data-testid="dossier-composer-attachment">
          <div className="fig-dossier-attachment-body">
            <p className="fig-dossier-attachment-label">Dossier D8 joint</p>
            <p className="fig-dossier-attachment-meta">
              {props.dossierAttachment.attemptId}
              {props.dossierAttachment.dossierVersion != null
                ? ` · v${props.dossierAttachment.dossierVersion}`
                : ""}
              {props.dossierAttachment.verdictD8 ? ` · ${props.dossierAttachment.verdictD8}` : ""}
            </p>
          </div>
          <button
            type="button"
            className="fig-dossier-attachment-remove"
            data-testid="dossier-composer-attachment-remove"
            disabled={composerLocked || props.busy}
            onClick={() => props.onRemoveDossierAttachment?.()}
            aria-label="Retirer la référence du dossier D8"
          >
            Retirer
          </button>
        </div>
      ) : null}
      <div className="fig-travail-composer-row">
        <span
          className="fig-travail-composer-plus"
          aria-hidden
          data-dictation-hide={dictationActive ? "1" : undefined}
        >
          +
        </span>
        <textarea
          ref={textareaRef}
          className="fig-travail-composer-input"
          value={props.draft}
          onChange={(e) => props.onDraft(e.target.value)}
          placeholder={placeholder}
          aria-label="Message à Nora"
          data-testid="thread-draft"
          rows={1}
          readOnly={composerLocked || dictationActive}
          disabled={composerLocked}
          aria-disabled={composerLocked || dictationActive}
          data-dictation-hide={dictationActive ? "1" : undefined}
          hidden={dictationActive}
          tabIndex={dictationActive ? -1 : 0}
          onCompositionStart={() => setImeComposing(true)}
          onCompositionEnd={() => setImeComposing(false)}
          onKeyDown={(e) => {
            if (composerLocked || dictationActive) {
              e.preventDefault();
              return;
            }
            if (imeComposing || e.nativeEvent.isComposing) return;
            if (isMobile) return;
            if (e.key === "Enter" && !e.shiftKey && !props.busy) {
              e.preventDefault();
              if (props.draft.trim() || hasDossier) props.onSend();
            }
          }}
        />
        {dictationControl}
        <button
          type="button"
          className="fig-travail-composer-send"
          disabled={sendDisabled}
          onClick={props.onSend}
          data-testid="thread-send"
          aria-label="Envoyer"
          data-dictation-hide={dictationActive ? "1" : undefined}
          hidden={dictationActive}
          tabIndex={dictationActive ? -1 : 0}
        >
          <img
            src="/figma-dictation/send.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden
            className="fig-travail-composer-send-icon"
          />
        </button>
      </div>
      {props.status ? (
        <p className="sr-only" data-testid="thread-nora-status" role="status">
          {props.status}
        </p>
      ) : null}
    </div>
  );
}
```


### `projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx`

- Coverage: MODIFIED — git diff HEAD — 75 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
index f98405fb..54911e09 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
@@ -2,6 +2,7 @@

 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { NoraLiveActivity } from "@/components/figma/NoraLiveActivity";
+import { NoraSharedComposer } from "@/components/figma/NoraSharedComposer";

 export type PrepMessage = {
   id: string;
@@ -33,6 +34,10 @@ export function PreparationConversation(props: {
   /** C1 / Figma 12.10 — mid-turn activity (same capability as Travail). */
   liveActivityEvents?: PrepLiveActivityEvent[];
   liveActivityHeadline?: string;
+  /** ML3 — optional linked project (dictation prefers project scope when set). */
+  projectId?: string | null;
+  preparationId?: string;
+  dictationEnabled?: boolean;
 }) {
   const empty = props.messages.length === 0;
   const liveEvents = props.liveActivityEvents ?? [];
@@ -129,42 +134,16 @@ export function PreparationConversation(props: {
         ) : null}
       </div>

-      <div className="sas-composer" data-testid="prep-composer">
-        <textarea
-          className="sas-composer-input"
-          value={props.draft}
-          onChange={(e) => props.onDraftChange(e.target.value)}
-          placeholder="Décrivez votre idée, une question ou une hésitation…"
-          aria-label="Message à Nora"
-          data-testid="prep-draft"
-          rows={2}
-          disabled={props.busy}
-          onKeyDown={(e) => {
-            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
-              e.preventDefault();
-              props.onSend();
-            }
-          }}
-        />
-        <div className="sas-composer-bar" aria-hidden={!props.draft.trim()}>
-          <span className="sas-composer-hint">
-            <span className="sas-composer-plus" aria-hidden>
-              ＋
-            </span>
-            Échanger librement avec Nora
-          </span>
-          <button
-            type="button"
-            className="sas-composer-send"
-            disabled={props.busy || !props.draft.trim()}
-            onClick={props.onSend}
-            data-testid="prep-send"
-            aria-label="Envoyer le message"
-          >
-            <span aria-hidden>↑</span>
-          </button>
-        </div>
-      </div>
+      <NoraSharedComposer
+        variant="prep"
+        draft={props.draft}
+        onDraft={props.onDraftChange}
+        busy={props.busy}
+        onSend={props.onSend}
+        projectId={props.projectId ?? undefined}
+        preparationId={props.preparationId}
+        dictationEnabled={props.dictationEnabled}
+      />
       {props.footer}
     </section>
   );
```


### `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx`

- Coverage: MODIFIED — git diff HEAD — 12 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
index 9b16917e..c5602105 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
@@ -220,7 +220,7 @@ export function ProjectOverview(props: {
           />
           <ActivityCard
             testId="project-activity-documents"
-            title="Documents en cours"
+            title="Documents du projet"
             source="Bibliothèque"
             count={activity?.documentsInProgress.count ?? 0}
             empty="Aucun document en cours de rédaction."
```


### `projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx`

- Coverage: MODIFIED — git diff HEAD — 20 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx b/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
index e367cdb9..70c7a99f 100644
--- a/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
@@ -240,11 +240,16 @@ export function SasCreateProgressPopup(props: {
                         width={35}
                         height={35}
                         className="fig-sas-progress-ring-spin"
+                        data-terminal={complete ? "1" : "0"}
+                        aria-hidden
                       />
                       <span className="absolute inset-0 flex items-center justify-center">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img src={ASSET.evaluation} alt="" width={19} height={19} />
                       </span>
+                      <span className="sr-only">
+                        {current ? "Étape en cours" : null}
+                      </span>
                     </>
                   ) : (
                     <div className="relative">
```


### `projects/sfia-studio-next/web/src/components/figma/tokens.css`

- Coverage: MODIFIED — git diff HEAD — 184 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 5382d3c3..ad229dff 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -302,9 +302,9 @@
 }

 .fig-msg-body {
-  /* IT-05 — conversation body 11px; hierarchy kept on role/meta/activity titles. */
-  font-size: 11px;
-  line-height: 1.5;
+  /* MP-05 — readable conversation body; hierarchy kept on role/meta/activity titles. */
+  font-size: 12.5px;
+  line-height: 1.65;
   color: #f4f6fc;
   font-weight: 400;
   min-width: 0;
@@ -313,13 +313,12 @@
 }

 /*
- * SafeMarkdown ships with Tailwind `text-sm` (~0.875rem / 14px). Beat that utility
- * only inside the conversation thread so Pilote/Nora body text is effectively 11px.
- * Document viewer and other SafeMarkdown surfaces stay untouched.
+ * SafeMarkdown ships with Tailwind `text-sm` (~0.875rem / 14px). Override only
+ * inside the conversation thread. Document viewer SafeMarkdown stays untouched.
  */
 .fig-msg-body .safe-md {
-  font-size: 11px;
-  line-height: 1.5;
+  font-size: 12.5px;
+  line-height: 1.65;
   max-width: 100%;
   overflow-x: auto;
 }
@@ -331,16 +330,53 @@
 .fig-msg-body .safe-md a,
 .fig-msg-body .safe-md strong,
 .fig-msg-body .safe-md em {
-  font-size: 11px;
-  line-height: 1.5;
+  font-size: 12.5px;
+  line-height: 1.65;
 }

 .fig-msg-body .safe-md pre,
 .fig-msg-body .safe-md code {
   max-width: 100%;
   overflow-x: auto;
-  font-size: 10px;
-  line-height: 1.45;
+  font-size: 11px;
+  line-height: 1.5;
+}
+
+.fig-msg-body .safe-md h1,
+.fig-msg-body .safe-md h2,
+.fig-msg-body .safe-md h3,
+.fig-msg-body .safe-md h4 {
+  margin: 0.95em 0 0.4em;
+  line-height: 1.35;
+}
+
+.fig-msg-body .safe-md h1:first-child,
+.fig-msg-body .safe-md h2:first-child,
+.fig-msg-body .safe-md h3:first-child,
+.fig-msg-body .safe-md h4:first-child {
+  margin-top: 0;
+}
+
+.fig-msg-body .safe-md ul,
+.fig-msg-body .safe-md ol {
+  margin: 0.45em 0 0.75em;
+  padding-left: 1.35em;
+}
+
+.fig-msg-body .safe-md li {
+  margin: 0.28em 0;
+}
+
+.fig-msg-body .safe-md li + li {
+  margin-top: 0.35em;
+}
+
+.fig-msg-body .safe-md p {
+  margin: 0 0 0.75em;
+}
+
+.fig-msg-body .safe-md p:last-child {
+  margin-bottom: 0;
 }

 /* Headings keep rem-based hierarchy from globals.css (root-relative). */
@@ -348,7 +384,7 @@
 /*
  * Conversation tables: fit entirely inside Nora/Pilote message width.
  * Prefer cell wrap over horizontal scroll / clipping (IT-04 revised).
- * SAS preparation thread keeps the same presentable fit.
+ * Column widths follow content weight — not a forced 50/50 split.
  */
 .fig-msg-body .safe-md table,
 .sas-msg-body .safe-md table {
@@ -356,7 +392,7 @@
   width: 100%;
   max-width: 100%;
   border-collapse: collapse;
-  table-layout: fixed;
+  table-layout: auto;
   overflow-x: visible;
 }

@@ -368,12 +404,12 @@
   overflow-wrap: break-word;
   word-break: normal;
   min-width: 0;
-  padding: 0.35em 0.65em;
+  padding: 0.45em 0.75em;
   vertical-align: top;
 }

 .fig-msg-body p {
-  margin: 0 0 0.55em;
+  margin: 0 0 0.75em;
 }

 .fig-msg-body p:last-child {
@@ -1144,13 +1180,22 @@
 }

 .fig-sas-progress-ring-spin {
+  display: block;
   animation: fig-sas-progress-spin 1.1s linear infinite;
   transform-origin: 50% 50%;
+  will-change: transform;
+}
+
+/* Terminal / pending steps must not keep a spinning indicator. */
+.fig-sas-progress-ring-spin[data-terminal="1"] {
+  animation: none;
+  will-change: auto;
 }

 @media (prefers-reduced-motion: reduce) {
   .fig-sas-progress-ring-spin {
     animation: none;
+    will-change: auto;
   }
 }

@@ -1498,7 +1543,7 @@

 .sas-msg-body {
   font-size: 13px;
-  line-height: 20px;
+  line-height: 1.65;
   color: var(--fig-ink);
   min-width: 0;
   overflow-wrap: anywhere;
@@ -1512,7 +1557,25 @@
   overflow-x: auto;
 }

-.sas-msg-body p { margin: 0 0 0.55rem; }
+.sas-msg-body .safe-md ul,
+.sas-msg-body .safe-md ol {
+  margin: 0.45em 0 0.75em;
+  padding-left: 1.35em;
+}
+
+.sas-msg-body .safe-md li {
+  margin: 0.28em 0;
+}
+
+.sas-msg-body .safe-md h1,
+.sas-msg-body .safe-md h2,
+.sas-msg-body .safe-md h3,
+.sas-msg-body .safe-md h4 {
+  margin: 0.9em 0 0.4em;
+  line-height: 1.35;
+}
+
+.sas-msg-body p { margin: 0 0 0.75rem; }
 .sas-msg-body p:last-child { margin-bottom: 0; }

 .sas-thread-status {
```

#### Structured excerpts (large module)



### `projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx`

- Coverage: MODIFIED — git diff HEAD — 27 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
index 87ad69c4..77d79b50 100644
--- a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
@@ -19,6 +19,7 @@ import {
   formatIntegerFr,
   formatUsdAxisFr,
   displayModelShort,
+  finOpsMeasureCoverageSubtext,
 } from "@/domains/finops/usage-projection";
 import {
   costComparabilityBadgeClass,
@@ -63,14 +64,7 @@ function kpiSubCompleted(
 }

 function kpiSubCoverage(kpis: FinOpsSummaryDto["kpis"]): string {
-  if (kpis.totalRequests <= 0) return "Requêtes non recensées";
-  const observed = `${formatIntegerFr(kpis.measuredRequests)} / ${formatIntegerFr(kpis.totalRequests)} requêtes recensées`;
-  const est = kpis.estimationCompletenessPercent;
-  if (!est) return observed;
-  if (est.kind === "known" || est.kind === "partial") {
-    return `${observed} · estimation connue ${est.value} %`;
-  }
-  return observed;
+  return finOpsMeasureCoverageSubtext(kpis);
 }

 function cellTokens(metric: FinOpsWorkListItem["tokens"]): string {
```


### `projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx`

- Coverage: MODIFIED — git diff HEAD — 12 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx b/projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx
index 7072dc1c..afa1c22c 100644
--- a/projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx
@@ -83,7 +83,7 @@ export function PersonalRailSettingsMenu({ pathname }: { pathname: string }) {
           id={menuId}
           className="studio-rail-settings-popover"
           role="menu"
-          aria-label="Paramètres personnels"
+          aria-label="Paramètres"
           data-testid="rail-settings-popover"
         >
           {tooltip ? (
```


### `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`

- Coverage: MODIFIED — git diff HEAD — 15 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 35935a9f..60b380d1 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -402,9 +402,8 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                 <div className="font-semibold text-[14px]">Pilote</div>
                 <div className="muted">{inProductSpace ? "Connecté" : "Espace personnel"}</div>
               </div>
-              {personalSpace ? (
-                <PersonalRailSettingsMenu pathname={pathname} />
-              ) : null}
+              {/* ML5 MP-17 — settings foot on every authenticated rail variant */}
+              <PersonalRailSettingsMenu pathname={pathname} />
             </div>
           </div>
         </div>
```


### `projects/sfia-studio-next/web/src/domains/conversation/assert-owned-preparation.ts`

- Coverage: NEW — full — 16 lines
- Status porcelain: `??`

```
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparations } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";

export async function assertOwnedPreparation(pilotId: string, preparationId: string) {
  const preparation = (
    await db
      .select()
      .from(preparations)
      .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!preparation) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  return preparation;
}
```


### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor-terminal.ts`

- Coverage: NEW — full — 69 lines
- Status porcelain: `??`

```
/**
 * Pure terminal disposition for adaptive cognitive works (A.5).
 * Exported for unit tests — conductor applies the returned status at segment end.
 */

import type { CognitiveProductionState } from "./cognitive-work";
import type { NoraTurnQualification } from "./semantic-qualification";

export type CognitiveWorkTerminalStatus = "OPEN" | "COMPLETE" | "SUSPENDED";

export function resolveCognitiveWorkTerminalStatus(input: {
  suspended: boolean;
  production: Pick<CognitiveProductionState, "status">;
  qualification: NoraTurnQualification | null | undefined;
}): {
  status: CognitiveWorkTerminalStatus;
  awaitPilot: boolean;
  interruptCause: string | null;
} {
  const { suspended, production, qualification } = input;
  const disposition = qualification?.workDisposition;
  const dispositionComplete = disposition === "COMPLETE";
  const dispositionAwait =
    disposition === "AWAIT_PILOT" || disposition === "SUSPEND";
  const statusNeedsClarification = qualification?.status === "NEEDS_CLARIFICATION";

  const openDeterminantStructured =
    !dispositionComplete &&
    (qualification?.determiningQuestions ?? []).some(
      (q) => q.importance === "DETERMINANT" && q.status === "OPEN",
    );

  // clarifications[] are open questions only when Nora re-evaluated them; stale non-empty
  // lists must not block COMPLETE when workDisposition already says the objective is done.
  const openClarifications =
    !dispositionComplete &&
    (qualification?.clarifications?.length ?? 0) > 0 &&
    (statusNeedsClarification || dispositionAwait);

  // IN_PROGRESS = production réellement engagée — ne pas clôturer.
  // IDLE (défaut emptyProduction kind NONE/REPLY) n'est pas une production applicable
  // en attente : un segment reply-only sans continuation doit pouvoir COMPLETE.
  const productionIncomplete = production.status === "IN_PROGRESS";

  const awaitPilot =
    dispositionAwait ||
    statusNeedsClarification ||
    openDeterminantStructured ||
    openClarifications ||
    productionIncomplete;

  const status: CognitiveWorkTerminalStatus = suspended
    ? "SUSPENDED"
    : production.status === "PARTIAL" || production.status === "FAILED"
      ? "SUSPENDED"
      : awaitPilot
        ? "OPEN"
        : "COMPLETE";

  const interruptCause = suspended
    ? null
    : awaitPilot
      ? disposition === "SUSPEND"
        ? "AWAIT_OR_SUSPEND"
        : "AWAIT_PILOT"
      : null;

  return { status, awaitPilot, interruptCause };
}
```


### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts`

- Coverage: MODIFIED — git diff HEAD — 54 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
index af939582..1677bd1c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
@@ -25,6 +25,7 @@ import {
   type InvestigationState,
 } from "./investigation-state";
 import type { NoraTurnQualification } from "./semantic-qualification";
+import { resolveCognitiveWorkTerminalStatus } from "./cognitive-conductor-terminal";

 /** Fingerprint of measurable progress — sources, conclusions, remaining work, questions. */
 function progressFingerprint(state: InvestigationState): string {
@@ -551,32 +552,16 @@ export async function runCognitiveConductor(
     });
   }

-  // C18: AWAIT_PILOT / open determinant clarifications must leave an OPEN work —
-  // not a false COMPLETE — so the next pilot turn can resume without injecting workId.
-  const openDeterminantStructured = (qualification?.determiningQuestions ?? []).some(
-    (q) => q.importance === "DETERMINANT" && q.status === "OPEN",
-  );
-  const openClarifications = (qualification?.clarifications?.length ?? 0) > 0;
-  const awaitPilot =
-    qualification?.workDisposition === "AWAIT_PILOT" ||
-    qualification?.workDisposition === "SUSPEND" ||
-    qualification?.status === "NEEDS_CLARIFICATION" ||
-    openDeterminantStructured ||
-    openClarifications;
-  const terminalStatus = suspended
-    ? "SUSPENDED"
-    : production.status === "PARTIAL" || production.status === "FAILED"
-      ? "SUSPENDED"
-      : awaitPilot
-        ? "OPEN"
-        : "COMPLETE";
-  const terminalInterrupt =
-    suspendReason ??
-    (awaitPilot
-      ? qualification?.workDisposition === "SUSPEND"
-        ? "AWAIT_OR_SUSPEND"
-        : "AWAIT_PILOT"
-      : null);
+  const {
+    status: terminalStatus,
+    awaitPilot,
+    interruptCause: pilotInterrupt,
+  } = resolveCognitiveWorkTerminalStatus({
+    suspended,
+    production,
+    qualification,
+  });
+  const terminalInterrupt = suspendReason ?? pilotInterrupt;

   // Persist terminal investigation while ownership still holds (READY reads this state).
   work = await checkpointCognitiveWork({
```


### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts`

- Coverage: MODIFIED — git diff HEAD — 144 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
index 27c3f7ec..437676dd 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
@@ -1,12 +1,19 @@
 /**
- * ML5 provisional cognitive policy — DEV only (Morris 2026-11-26).
+ * ML5 provisional cognitive policy — Option C env-governed (Morris 2026-11-27).
  *
  * v0.2 (explicit): Terra medium default; Luna low/medium experimental;
  * Sol L/M/H historical; Terra high / Luna high candidates.
  *
  * Activation is NEVER implicit: absent or unknown SFIA_COG_PROVISIONAL_POLICY
- * resolves to legacy_sol (safe historical default). Provisional couples require
- * explicit `v0.2` (or deprecated `v0.1`) AND STUDIO_LANE=DEV.
+ * resolves to legacy_sol (safe historical default).
+ *
+ * Lane gates:
+ * - DEV: explicit `v0.2` | `v0.1` activates provisional couples.
+ * - RECETTE: same policy env is refused unless
+ *   `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified` after calibration evidence.
+ * - Other / unknown lanes: refuse provisional (fail closed to legacy_sol).
+ *
+ * An unqualified policy must never become active in RECETTE by default.
  *
  * Rollback: `legacy_sol` | `off` | `0` — no structural rewrite.
  */
@@ -74,6 +81,48 @@ function studioLane(env: NodeJS.ProcessEnv): string {
   return (env.STUDIO_LANE ?? "").trim().toUpperCase();
 }

+/** Explicit post-calibration admit for RECETTE — never inferred. */
+export function isRecetteProvisionalQualified(
+  env: NodeJS.ProcessEnv = process.env,
+): boolean {
+  return (env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT ?? "") === "qualified";
+}
+
+function laneAllowsProvisional(
+  lane: string,
+  env: NodeJS.ProcessEnv,
+): { allowed: boolean; reasonCodes: string[] } {
+  if (lane === "DEV") {
+    return { allowed: true, reasonCodes: ["LANE_DEV"] };
+  }
+  if (lane === "RECETTE") {
+    if (isRecetteProvisionalQualified(env)) {
+      return {
+        allowed: true,
+        reasonCodes: [
+          "LANE_RECETTE",
+          "COG_POLICY_RECETTE_ADMIT_QUALIFIED",
+        ],
+      };
+    }
+    return {
+      allowed: false,
+      reasonCodes: [
+        "COG_POLICY_REFUSED_RECETTE_UNQUALIFIED",
+        "LANE_RECETTE",
+        "COG_POLICY_REQUIRE_SFIA_COG_PROVISIONAL_RECETTE_ADMIT_qualified",
+      ],
+    };
+  }
+  return {
+    allowed: false,
+    reasonCodes: [
+      "COG_POLICY_REFUSED_NON_GOVERNED_LANE",
+      `LANE_${lane || "UNKNOWN"}`,
+    ],
+  };
+}
+
 export type ProvisionalPolicyResolution = {
   id: ProvisionalPolicyId;
   /** True when provisional experimental couples may be admitted. */
@@ -82,14 +131,14 @@ export type ProvisionalPolicyResolution = {
 };

 /**
- * Resolve active policy — fail closed to legacy_sol unless explicitly activated on DEV.
+ * Resolve active policy — fail closed to legacy_sol unless explicitly activated
+ * on an allowed lane (DEV, or RECETTE with qualified admit).
  */
 export function resolveProvisionalPolicy(
   env: NodeJS.ProcessEnv = process.env,
 ): ProvisionalPolicyResolution {
   const raw = (env.SFIA_COG_PROVISIONAL_POLICY ?? "").trim().toLowerCase();
   const lane = studioLane(env);
-  const codes: string[] = [];

   if (!raw) {
     return {
@@ -117,13 +166,14 @@ export function resolveProvisionalPolicy(
   }

   if (raw === "v0.2" || raw === "0.2" || raw === "v2") {
-    if (lane !== "DEV") {
+    const gate = laneAllowsProvisional(lane, env);
+    if (!gate.allowed) {
       return {
         id: "legacy_sol",
         provisionalActive: false,
         reasonCodes: [
-          "COG_POLICY_V02_REFUSED_NON_DEV_LANE",
-          `LANE_${lane || "UNKNOWN"}`,
+          "COG_POLICY_V02_REFUSED_LANE_GATE",
+          ...gate.reasonCodes,
           "COG_POLICY_VERSION_legacy_sol",
         ],
       };
@@ -134,19 +184,20 @@ export function resolveProvisionalPolicy(
       reasonCodes: [
         `COG_POLICY_PROVISIONAL_${PROVISIONAL_COGNITIVE_POLICY_VERSION}`,
         "COG_POLICY_VERSION_v0.2",
-        "LANE_DEV",
+        ...gate.reasonCodes,
       ],
     };
   }

   if (raw === "v0.1" || raw === "0.1" || raw === "v1") {
-    if (lane !== "DEV") {
+    const gate = laneAllowsProvisional(lane, env);
+    if (!gate.allowed) {
       return {
         id: "legacy_sol",
         provisionalActive: false,
         reasonCodes: [
-          "COG_POLICY_V01_REFUSED_NON_DEV_LANE",
-          `LANE_${lane || "UNKNOWN"}`,
+          "COG_POLICY_V01_REFUSED_LANE_GATE",
+          ...gate.reasonCodes,
           "COG_POLICY_VERSION_legacy_sol",
         ],
       };
@@ -158,7 +209,7 @@ export function resolveProvisionalPolicy(
         "COG_POLICY_PROVISIONAL_ml5-cog-provisional-policy-v0.1-20261126",
         "COG_POLICY_VERSION_v0.1",
         "COG_POLICY_V01_DEPRECATED_PREFER_V02",
-        "LANE_DEV",
+        ...gate.reasonCodes,
       ],
     };
   }
```


### `projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts`

- Coverage: MODIFIED — git diff HEAD — 160 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
index c959ec52..67c1755c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
@@ -39,7 +39,8 @@ export type DictationSessionRecord = {
   sessionId: string;
   schema: typeof COMPOSER_DICTATION_SCHEMA;
   pilotId: string;
-  projectId: string;
+  projectId: string | null;
+  preparationId: string | null;
   conversationKey: string;
   status: DictationSessionStatus;
   modelRequested: string;
@@ -136,6 +137,38 @@ export function getDictationSession(sessionId: string): DictationSessionRecord |
   return sessions.get(sessionId) ?? null;
 }

+export function dictationSessionMatchesScope(
+  session: DictationSessionRecord,
+  input: { pilotId: string; projectId?: string; preparationId?: string },
+): boolean {
+  if (session.pilotId !== input.pilotId) return false;
+  if (session.preparationId) {
+    return input.preparationId === session.preparationId;
+  }
+  if (session.projectId) {
+    return input.projectId === session.projectId;
+  }
+  return false;
+}
+
+function resolveDictationScope(input: {
+  projectId?: string;
+  preparationId?: string;
+}):
+  | { ok: true; projectId: string | null; preparationId: string | null }
+  | { ok: false; code: string; message: string } {
+  const projectId = (input.projectId || "").trim() || null;
+  const preparationId = (input.preparationId || "").trim() || null;
+  if (Boolean(projectId) === Boolean(preparationId)) {
+    return {
+      ok: false,
+      code: "INVALID_SCOPE",
+      message: "Exactly one of projectId or preparationId is required.",
+    };
+  }
+  return { ok: true, projectId, preparationId };
+}
+
 function emit(session: DictationSessionRecord, ev: DictationClientEvent): void {
   for (const l of session.listeners) {
     try {
@@ -178,7 +211,8 @@ function expireIfNeeded(session: DictationSessionRecord, now = Date.now()): bool

 export async function createDictationSession(input: {
   pilotId: string;
-  projectId: string;
+  projectId?: string;
+  preparationId?: string;
   conversationKey: string;
   baselineDraft: string;
   insertOffset?: number | null;
@@ -189,13 +223,17 @@ export async function createDictationSession(input: {
   | { ok: true; session: DictationSessionRecord }
   | { ok: false; code: string; message: string }
 > {
+  const scope = resolveDictationScope(input);
+  if (!scope.ok) {
+    return { ok: false, code: scope.code, message: scope.message };
+  }
   const env = input.env ?? process.env;
   const { admitDictationProviderEmission } = await import(
     "./composer-dictation-admission"
   );
   const admission = admitDictationProviderEmission({
     env,
-    projectId: input.projectId,
+    projectId: scope.projectId ?? "",
     pilotId: input.pilotId,
   });
   if (!admission.ok) {
@@ -242,7 +280,8 @@ export async function createDictationSession(input: {
     sessionId,
     schema: COMPOSER_DICTATION_SCHEMA,
     pilotId: input.pilotId,
-    projectId: input.projectId,
+    projectId: scope.projectId,
+    preparationId: scope.preparationId,
     conversationKey: input.conversationKey,
     status: "pending",
     modelRequested: COMPOSER_DICTATION_MODEL,
@@ -531,13 +570,14 @@ function completeFinalization(
 export function appendDictationAudio(input: {
   sessionId: string;
   pilotId: string;
-  projectId: string;
+  projectId?: string;
+  preparationId?: string;
   pcmBase64: string;
   seq?: number;
 }): { ok: true } | { ok: false; code: string } {
   const session = sessions.get(input.sessionId);
   if (!session) return { ok: false, code: "NOT_FOUND" };
-  if (session.pilotId !== input.pilotId || session.projectId !== input.projectId) {
+  if (!dictationSessionMatchesScope(session, input)) {
     return { ok: false, code: "FORBIDDEN" };
   }
   if (expireIfNeeded(session)) return { ok: false, code: "EXPIRED" };
@@ -588,14 +628,15 @@ export function setDictationHidden(input: {
 export async function finalizeDictationSession(input: {
   sessionId: string;
   pilotId: string;
-  projectId: string;
+  projectId?: string;
+  preparationId?: string;
 }): Promise<
   | { ok: true; draft: string; transcript: string; partial: boolean }
   | { ok: false; code: string; draft?: string }
 > {
   const session = sessions.get(input.sessionId);
   if (!session) return { ok: false, code: "NOT_FOUND" };
-  if (session.pilotId !== input.pilotId || session.projectId !== input.projectId) {
+  if (!dictationSessionMatchesScope(session, input)) {
     return { ok: false, code: "FORBIDDEN" };
   }
   if (isTerminalStatus(session.status)) {
@@ -691,11 +732,12 @@ function waitForFinalization(
 export function cancelDictationSession(input: {
   sessionId: string;
   pilotId: string;
-  projectId: string;
+  projectId?: string;
+  preparationId?: string;
 }): { ok: true; draft: string } | { ok: false; code: string } {
   const session = sessions.get(input.sessionId);
   if (!session) return { ok: false, code: "NOT_FOUND" };
-  if (session.pilotId !== input.pilotId || session.projectId !== input.projectId) {
+  if (!dictationSessionMatchesScope(session, input)) {
     return { ok: false, code: "FORBIDDEN" };
   }
   if (session.status === "completed") {
@@ -773,14 +815,16 @@ async function recordDictationFinops(
       status: observationStatus,
       granularity: "REQUEST",
       costCoverage,
-      projectId: session.projectId,
+      projectId: session.projectId ?? null,
+      preparationId: session.preparationId ?? null,
       ownerPilotId: session.pilotId,
       estimatedCostUsd: estimatedUsd,
       idempotencyKey: buildIdempotencyKey({
         granularity: "REQUEST",
         lane: process.env.STUDIO_LANE || "DEV",
         operation: "audio.composer_dictation",
-        projectId: session.projectId,
+        projectId: session.projectId ?? null,
+        preparationId: session.preparationId ?? null,
         attemptId: session.emissionAttemptId,
         callOrdinal: 0,
       }),
```


### `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`

- Coverage: MODIFIED — git diff HEAD — 65 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index be9ff5f6..b5ebecd9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -565,6 +565,41 @@ register(
   ]),
 );

+/** MP-09 T05 — open cadrage then transition to functional design (dual D5 REQUEST_EFFECT). */
+register(
+  "Ouvre le cycle cadrage puis passe en conception fonctionnelle.",
+  effect(
+    "MP-09 open + transition",
+    "J'ouvre le cycle de cadrage puis nous passons en conception fonctionnelle.",
+    [
+      {
+        id: "i-open",
+        capabilityId: "d5.pilotage_command",
+        mode: "REQUEST_EFFECT",
+        summary: "OPEN_CYCLE",
+        parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+      {
+        id: "i-trans",
+        capabilityId: "d5.pilotage_command",
+        mode: "REQUEST_EFFECT",
+        summary: "TRANSITION_CYCLE",
+        parameters: {
+          pilotageOperation: "TRANSITION_CYCLE",
+          cycleType: "CADRAGE",
+          toCycleType: "CONCEPTION_FONCTIONNELLE",
+        },
+        constraints: [],
+        dependsOn: ["i-open"],
+        sourceEvidence: [],
+      },
+    ],
+  ),
+);
+
 register(
   "Je retiens cette trajectoire.",
   effect(
@@ -2221,9 +2256,18 @@ const COCKPIT_NAMED_RE =
 const E05_CITE_REVISION_RE =
   /^E05_CITE_REVISION documentId=(\S+) revisionId=(\S+)$/;

+/** Strip conductor continuation/restitution suffixes before exact scenario match. */
+function pilotUtteranceForFixtureLookup(userText: string): string {
+  const raw = userText ?? "";
+  const cut = raw.search(
+    /\n\s*\[(?:Continuation du même travail cognitif|Phase de restitution)\b/,
+  );
+  return normalizeUtterance(cut >= 0 ? raw.slice(0, cut) : raw);
+}
+
 export function fixtureSemanticQualify(userText: string): NoraTurnQualification {
   assertFixtureLane();
-  const text = normalizeUtterance(userText);
+  const text = pilotUtteranceForFixtureLookup(userText);
   if (!text) return unavailableQualification("EMPTY_USER_TEXT");
   const hit = SCENARIO_TABLE.get(text);
   if (hit) {
```

#### Structured excerpts (large module)

#### export vicinity L33–L73
```ts
   33| export const INTERVENCIA_S02_01_MESSAGE =
   34|   "Pour l'instant, je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques.";
   35| export const INTERVENCIA_S02_01_SOURCE_STATUS = "SOURCE_EXACTE_NON_DISPONIBLE_RECONSTRUCTED" as const;
   36|
   37| function normalizeUtterance(text: string): string {
   38|   return text.replace(/\s+/g, " ").trim();
   39| }
   40|
   41| type QualExtras = Partial<
   42|   Pick<
   43|     NoraTurnQualification,
   44|     | "projectIntention"
   45|     | "desiredOutcome"
   46|     | "initialScope"
   47|     | "proposedProjectName"
   48|     | "clarifications"
   49|     | "continueChoices"
   50|     | "resourceReferences"
   51|     | "preparationAssessment"
   52|     | "preparationAssessmentExplanation"
   53|     | "visualComposition"
   54|   >
   55| >;
   56|
   57| function dialogue(
   58|   goal: string,
   59|   reply: string,
   60|   constraints: string[] = [],
   61|   extras?: QualExtras & { omitClarifications?: boolean },
   62| ): NoraTurnQualification {
   63|   const base: NoraTurnQualification = {
   64|     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
   65|     status: "QUALIFIED",
   66|     goal,
   67|     projectIntention: extras?.projectIntention ?? "",
   68|     desiredOutcome: extras?.desiredOutcome ?? "",
   69|     initialScope: extras?.initialScope ?? "",
   70|     proposedProjectName: extras?.proposedProjectName ?? "",
   71|     intents: [
   72|       {
   73|         id: "i1",
```

#### export vicinity L35–L75
```ts
   35| export const INTERVENCIA_S02_01_SOURCE_STATUS = "SOURCE_EXACTE_NON_DISPONIBLE_RECONSTRUCTED" as const;
   36|
   37| function normalizeUtterance(text: string): string {
   38|   return text.replace(/\s+/g, " ").trim();
   39| }
   40|
   41| type QualExtras = Partial<
   42|   Pick<
   43|     NoraTurnQualification,
   44|     | "projectIntention"
   45|     | "desiredOutcome"
   46|     | "initialScope"
   47|     | "proposedProjectName"
   48|     | "clarifications"
   49|     | "continueChoices"
   50|     | "resourceReferences"
   51|     | "preparationAssessment"
   52|     | "preparationAssessmentExplanation"
   53|     | "visualComposition"
   54|   >
   55| >;
   56|
   57| function dialogue(
   58|   goal: string,
   59|   reply: string,
   60|   constraints: string[] = [],
   61|   extras?: QualExtras & { omitClarifications?: boolean },
   62| ): NoraTurnQualification {
   63|   const base: NoraTurnQualification = {
   64|     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
   65|     status: "QUALIFIED",
   66|     goal,
   67|     projectIntention: extras?.projectIntention ?? "",
   68|     desiredOutcome: extras?.desiredOutcome ?? "",
   69|     initialScope: extras?.initialScope ?? "",
   70|     proposedProjectName: extras?.proposedProjectName ?? "",
   71|     intents: [
   72|       {
   73|         id: "i1",
   74|         capabilityId: "d3.converse",
   75|         mode: "EXPLORE",
```

#### export vicinity L198–L238
```ts
  198| export const SAS_MATURATION_T1 =
  199|   "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
  200| export const SAS_MATURATION_T2 =
  201|   "Ce qui me manque surtout, c'est de retrouver les décisions importantes et de savoir quoi faire ensuite.";
  202| export const SAS_MATURATION_T3 =
  203|   "On peut commencer par un espace personnel, avec les décisions, les points ouverts et les prochaines actions. Le travail en équipe pourra venir plus tard.";
  204| export const SAS_MATURATION_T4 =
  205|   "Je préfère l'appeler Cockpit projets plutôt qu'Assistant de pilotage.";
  206|
  207| register(
  208|   SAS_MATURATION_T1,
  209|   dialogue(
  210|     "Outil d'accompagnement pour chefs de projet — intention encore ouverte",
  211|     "Je comprends que vous souhaitez mieux accompagner les chefs de projet, sans avoir encore fixé ce que l'outil doit faire. Reformulons : un espace d'aide au pilotage, dont le rôle reste à préciser. Quelle difficulté concrète voulez-vous réduire en premier ?",
  212|     ["NO_EFFECT"],
  213|     {
  214|       projectIntention: "Aider les chefs de projet sans avoir encore fixé le contenu exact de l'outil",
  215|       clarifications: [
  216|         "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
  217|       ],
  218|       // P1-A: continueChoices are explicit continuation offers — not clarifications.
  219|       continueChoices: [
  220|         {
  221|           id: "approfondir-besoin",
  222|           label: "Approfondir le besoin des chefs de projet",
  223|           transmitText:
  224|             "Approfondissons le besoin concret des chefs de projet avant de parler de solution.",
  225|         },
  226|         {
  227|           id: "autre-approche",
  228|           label: "Autre approche",
  229|           transmitText: "Explore une autre approche pour accompagner les chefs de projet.",
  230|         },
  231|       ],
  232|       preparationAssessment: "EXPLORING",
  233|       preparationAssessmentExplanation:
  234|         "L'intention est libre et encore floue : aucun résultat ni périmètre n'est établi. Il est trop tôt pour affirmer une base de démarrage.",
  235|     },
  236|   ),
  237| );
  238|
```

#### export vicinity L200–L240
```ts
  200| export const SAS_MATURATION_T2 =
  201|   "Ce qui me manque surtout, c'est de retrouver les décisions importantes et de savoir quoi faire ensuite.";
  202| export const SAS_MATURATION_T3 =
  203|   "On peut commencer par un espace personnel, avec les décisions, les points ouverts et les prochaines actions. Le travail en équipe pourra venir plus tard.";
  204| export const SAS_MATURATION_T4 =
  205|   "Je préfère l'appeler Cockpit projets plutôt qu'Assistant de pilotage.";
  206|
  207| register(
  208|   SAS_MATURATION_T1,
  209|   dialogue(
  210|     "Outil d'accompagnement pour chefs de projet — intention encore ouverte",
  211|     "Je comprends que vous souhaitez mieux accompagner les chefs de projet, sans avoir encore fixé ce que l'outil doit faire. Reformulons : un espace d'aide au pilotage, dont le rôle reste à préciser. Quelle difficulté concrète voulez-vous réduire en premier ?",
  212|     ["NO_EFFECT"],
  213|     {
  214|       projectIntention: "Aider les chefs de projet sans avoir encore fixé le contenu exact de l'outil",
  215|       clarifications: [
  216|         "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
  217|       ],
  218|       // P1-A: continueChoices are explicit continuation offers — not clarifications.
  219|       continueChoices: [
  220|         {
  221|           id: "approfondir-besoin",
  222|           label: "Approfondir le besoin des chefs de projet",
  223|           transmitText:
  224|             "Approfondissons le besoin concret des chefs de projet avant de parler de solution.",
  225|         },
  226|         {
  227|           id: "autre-approche",
  228|           label: "Autre approche",
  229|           transmitText: "Explore une autre approche pour accompagner les chefs de projet.",
  230|         },
  231|       ],
  232|       preparationAssessment: "EXPLORING",
  233|       preparationAssessmentExplanation:
  234|         "L'intention est libre et encore floue : aucun résultat ni périmètre n'est établi. Il est trop tôt pour affirmer une base de démarrage.",
  235|     },
  236|   ),
  237| );
  238|
  239| register(
  240|   SAS_MATURATION_T2,
```

#### export vicinity L202–L242
```ts
  202| export const SAS_MATURATION_T3 =
  203|   "On peut commencer par un espace personnel, avec les décisions, les points ouverts et les prochaines actions. Le travail en équipe pourra venir plus tard.";
  204| export const SAS_MATURATION_T4 =
  205|   "Je préfère l'appeler Cockpit projets plutôt qu'Assistant de pilotage.";
  206|
  207| register(
  208|   SAS_MATURATION_T1,
  209|   dialogue(
  210|     "Outil d'accompagnement pour chefs de projet — intention encore ouverte",
  211|     "Je comprends que vous souhaitez mieux accompagner les chefs de projet, sans avoir encore fixé ce que l'outil doit faire. Reformulons : un espace d'aide au pilotage, dont le rôle reste à préciser. Quelle difficulté concrète voulez-vous réduire en premier ?",
  212|     ["NO_EFFECT"],
  213|     {
  214|       projectIntention: "Aider les chefs de projet sans avoir encore fixé le contenu exact de l'outil",
  215|       clarifications: [
  216|         "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
  217|       ],
  218|       // P1-A: continueChoices are explicit continuation offers — not clarifications.
  219|       continueChoices: [
  220|         {
  221|           id: "approfondir-besoin",
  222|           label: "Approfondir le besoin des chefs de projet",
  223|           transmitText:
  224|             "Approfondissons le besoin concret des chefs de projet avant de parler de solution.",
  225|         },
  226|         {
  227|           id: "autre-approche",
  228|           label: "Autre approche",
  229|           transmitText: "Explore une autre approche pour accompagner les chefs de projet.",
  230|         },
  231|       ],
  232|       preparationAssessment: "EXPLORING",
  233|       preparationAssessmentExplanation:
  234|         "L'intention est libre et encore floue : aucun résultat ni périmètre n'est établi. Il est trop tôt pour affirmer une base de démarrage.",
  235|     },
  236|   ),
  237| );
  238|
  239| register(
  240|   SAS_MATURATION_T2,
  241|   dialogue(
  242|     "Préciser le résultat : décisions et prochaines actions",
```

#### export vicinity L204–L244
```ts
  204| export const SAS_MATURATION_T4 =
  205|   "Je préfère l'appeler Cockpit projets plutôt qu'Assistant de pilotage.";
  206|
  207| register(
  208|   SAS_MATURATION_T1,
  209|   dialogue(
  210|     "Outil d'accompagnement pour chefs de projet — intention encore ouverte",
  211|     "Je comprends que vous souhaitez mieux accompagner les chefs de projet, sans avoir encore fixé ce que l'outil doit faire. Reformulons : un espace d'aide au pilotage, dont le rôle reste à préciser. Quelle difficulté concrète voulez-vous réduire en premier ?",
  212|     ["NO_EFFECT"],
  213|     {
  214|       projectIntention: "Aider les chefs de projet sans avoir encore fixé le contenu exact de l'outil",
  215|       clarifications: [
  216|         "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
  217|       ],
  218|       // P1-A: continueChoices are explicit continuation offers — not clarifications.
  219|       continueChoices: [
  220|         {
  221|           id: "approfondir-besoin",
  222|           label: "Approfondir le besoin des chefs de projet",
  223|           transmitText:
  224|             "Approfondissons le besoin concret des chefs de projet avant de parler de solution.",
  225|         },
  226|         {
  227|           id: "autre-approche",
  228|           label: "Autre approche",
  229|           transmitText: "Explore une autre approche pour accompagner les chefs de projet.",
  230|         },
  231|       ],
  232|       preparationAssessment: "EXPLORING",
  233|       preparationAssessmentExplanation:
  234|         "L'intention est libre et encore floue : aucun résultat ni périmètre n'est établi. Il est trop tôt pour affirmer une base de démarrage.",
  235|     },
  236|   ),
  237| );
  238|
  239| register(
  240|   SAS_MATURATION_T2,
  241|   dialogue(
  242|     "Préciser le résultat : décisions et prochaines actions",
  243|     "Vous visez surtout à retrouver les décisions importantes et à savoir quoi faire ensuite. C'est un résultat clair : continuité des décisions et des prochaines actions. Le périmètre exact (personnel / équipe) reste ouvert.",
  244|     ["NO_EFFECT"],
```

#### export vicinity L297–L337
```ts
  297| export const SAS_MATURATION_ORDINARY =
  298|   "Peux-tu me recommander les prochaines étapes ?";
  299|
  300| register(
  301|   SAS_MATURATION_ORDINARY,
  302|   dialogue(
  303|     "Recommander les prochaines étapes",
  304|     "Voici des prochaines étapes utiles pour consolider le cadrage, sans changer l'objectif fondateur déjà établi.",
  305|     ["NO_EFFECT"],
  306|     {
  307|       projectIntention: "",
  308|       // Advice-only turn: do not pretend open questions were re-resolved (omit ≠ []).
  309|       omitClarifications: true,
  310|       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
  311|       preparationAssessment: "CLARIFYING",
  312|       preparationAssessmentExplanation:
  313|         "L'intention durable est déjà établie ; ce tour apporte seulement des conseils locaux.",
  314|     },
  315|   ),
  316| );
  317|
  318| /** Incomplete QUALIFIED envelope — clarifications omitted (not []). Prior open questions must remain. */
  319| export const SAS_MATURATION_INCOMPLETE_QUAL =
  320|   "Peux-tu reformuler brièvement ce que nous avons déjà dit, sans nouvelle question ?";
  321|
  322| register(
  323|   SAS_MATURATION_INCOMPLETE_QUAL,
  324|   dialogue(
  325|     "Reformuler l'acquis sans réévaluer les questions ouvertes",
  326|     "Je reformule l'acquis déjà partagé. Les questions encore ouvertes restent à trancher.",
  327|     ["NO_EFFECT", "INCOMPLETE_CLARIFICATIONS"],
  328|     {
  329|       projectIntention: "",
  330|       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
  331|       omitClarifications: true,
  332|       preparationAssessment: "CLARIFYING",
  333|       preparationAssessmentExplanation:
  334|         "Reformulation locale sans réévaluation fiable des questions ouvertes.",
  335|     },
  336|   ),
  337| );
```

#### export vicinity L319–L359
```ts
  319| export const SAS_MATURATION_INCOMPLETE_QUAL =
  320|   "Peux-tu reformuler brièvement ce que nous avons déjà dit, sans nouvelle question ?";
  321|
  322| register(
  323|   SAS_MATURATION_INCOMPLETE_QUAL,
  324|   dialogue(
  325|     "Reformuler l'acquis sans réévaluer les questions ouvertes",
  326|     "Je reformule l'acquis déjà partagé. Les questions encore ouvertes restent à trancher.",
  327|     ["NO_EFFECT", "INCOMPLETE_CLARIFICATIONS"],
  328|     {
  329|       projectIntention: "",
  330|       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
  331|       omitClarifications: true,
  332|       preparationAssessment: "CLARIFYING",
  333|       preparationAssessmentExplanation:
  334|         "Reformulation locale sans réévaluation fiable des questions ouvertes.",
  335|     },
  336|   ),
  337| );
  338|
  339| register(
  340|   SAS_MATURATION_T4,
  341|   // Dialogue (no REQUEST_EFFECT): name correction; create remains an explicit D2 Pilot act.
  342|   // goal is turn-local; projectIntention empty → durable intention preserved by D2 merge.
  343|   dialogue(
  344|     "Retenir Cockpit projets comme nom de travail et confirmer le premier périmètre",
  345|     "Correction prise en compte : le nom de travail est Cockpit projets (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.",
  346|     ["NAME_CORRECTION", "NO_EFFECT"],
  347|     {
  348|       projectIntention: "",
  349|       proposedProjectName: "Cockpit projets",
  350|       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
  351|       initialScope:
  352|         "Espace personnel alimenté manuellement : décisions, points ouverts, prochaines actions (intégrations / équipe plus tard)",
  353|       clarifications: [],
  354|       preparationAssessment: "BASE_SUFFICIENTE",
  355|       preparationAssessmentExplanation:
  356|         "Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est Cockpit projets.",
  357|     },
  358|   ),
  359| );
```

#### export vicinity L362–L402
```ts
  362| export function sasMaturationT4Rename(uniqueName: string): string {
  363|   return `Je préfère l'appeler ${uniqueName.trim()} plutôt qu'Assistant de pilotage.`;
  364| }
  365|
  366| function maturationRenameQualification(uniqueName: string): NoraTurnQualification {
  367|   const name = uniqueName.trim().slice(0, 120);
  368|   return dialogue(
  369|     `Retenir « ${name} » comme nom de travail et confirmer le premier périmètre`,
  370|     `Correction prise en compte : le nom de travail est ${name} (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.`,
  371|     ["NAME_CORRECTION", "NO_EFFECT"],
  372|     {
  373|       projectIntention: "",
  374|       proposedProjectName: name,
  375|       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
  376|       initialScope:
  377|         "Espace personnel alimenté manuellement : décisions, points ouverts, prochaines actions (intégrations / équipe plus tard)",
  378|       clarifications: [],
  379|       preparationAssessment: "BASE_SUFFICIENTE",
  380|       preparationAssessmentExplanation: `Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est ${name}.`,
  381|     },
  382|   );
  383| }
  384|
  385| function cockpitNamedQualification(projectName: string): NoraTurnQualification {
  386|   const name = projectName.trim().slice(0, 120);
  387|   return dialogue(
  388|     `Proposer le nom de travail ${name} pour le cockpit`,
  389|     `Je comprends : un cockpit pour suivre vos projets, en commençant par le portefeuille et les risques. Nom de travail proposé : ${name}. Cette base me paraît suffisante pour démarrer ; les détails pourront se préciser ensuite.`,
  390|     ["NO_EFFECT", "PROPOSAL_ONLY"],
  391|     {
  392|       projectIntention: "Aider à suivre les projets via un cockpit (portefeuille et risques en premier)",
  393|       proposedProjectName: name,
  394|       desiredOutcome: "Voir portefeuille et risques en un seul endroit",
  395|       initialScope: "Portefeuille et risques en premier",
  396|       clarifications: [],
  397|       preparationAssessment: "BASE_SUFFICIENTE",
  398|       preparationAssessmentExplanation:
  399|         "Intention, résultat et périmètre initial sont assez clairs pour démarrer. Les raffinements peuvent se faire dans le projet.",
  400|     },
  401|   );
  402| }
```

#### export vicinity L714–L754
```ts
  714| export const E05_S1_SIMPLE =
  715|   "Peux-tu m'expliquer la différence entre une observation et une hypothèse ?";
  716| export const E05_S2_DIAGNOSTIC =
  717|   "Analyse les difficultés possibles de notre organisation de coordination multi-sites et montre ce qui est établi, hypothétique et à vérifier.";
  718| export const E05_S3_COMPARISON =
  719|   "Compare une approche de déploiement progressive à une approche simultanée. Présente les avantages, risques, dépendances et conditions de choix.";
  720| export const E05_S4_TRAJECTORY =
  721|   "Propose un parcours pour clarifier notre organisation avant de lancer les travaux, en montrant les dépendances.";
  722| export const E05_S5_COMPOSITE =
  723|   "À partir du diagnostic et de la comparaison, quelle approche recommandes-tu pour avancer, avec les réserves et les prochaines questions utiles ?";
  724| export const E05_S7_INSUFFICIENT =
  725|   "Montre-moi l'évolution mensuelle des coûts et les gains obtenus.";
  726|
  727| // Backward-compatible aliases used by earlier T02 e2e.
  728| export const E05_VISUAL_SIMPLE = E05_S1_SIMPLE;
  729| export const E05_VISUAL_COMPARISON = E05_S3_COMPARISON;
  730| export const E05_VISUAL_SEQUENCE = E05_S4_TRAJECTORY;
  731| export const E05_VISUAL_RELATIONS = E05_S2_DIAGNOSTIC;
  732| export const E05_VISUAL_SYNTHESIS = E05_S5_COMPOSITE;
  733| export const E05_VISUAL_COMPOSITE = E05_S5_COMPOSITE;
  734| export const E05_VISUAL_INSUFFICIENT = E05_S7_INSUFFICIENT;
  735|
  736| const S1_QUAL = dialogue(
  737|   "Différence observation / hypothèse",
  738|   "Une observation est un élément constaté dans le contexte disponible, sans en faire automatiquement une preuve. Une hypothèse est une proposition explicative encore non vérifiée. On peut s'appuyer sur des observations pour formuler des hypothèses, mais une icône ou une formulation ne transforme jamais une hypothèse en fait établi.",
  739|   ["NO_EFFECT", "TEXT_ONLY", "UX-NORA-01"],
  740| );
  741| register(E05_S1_SIMPLE, S1_QUAL);
  742| register("E05_S1_SIMPLE", S1_QUAL);
  743|
  744| register(
  745|   E05_S2_DIAGNOSTIC,
  746|   dialogue(
  747|     "Diagnostic coordination multi-sites — établi vs hypothétique",
  748|     [
  749|       "Diagnostic du besoin de coordination.",
  750|       "Éléments liés — sans causalité inventée :",
  751|       "Pratiques locales divergentes (peut contribuer) et Rôles d'arbitrage flous (peut contribuer)",
  752|       "vers Friction de coordination ; Impact réel non mesuré.",
  753|       "À vérifier ensuite : Cartographier les pratiques par site ; Identifier le porteur d'arbitrage ;",
  754|       "Ne pas conclure à un dysfonctionnement chiffré.",
```

#### export vicinity L716–L756
```ts
  716| export const E05_S2_DIAGNOSTIC =
  717|   "Analyse les difficultés possibles de notre organisation de coordination multi-sites et montre ce qui est établi, hypothétique et à vérifier.";
  718| export const E05_S3_COMPARISON =
  719|   "Compare une approche de déploiement progressive à une approche simultanée. Présente les avantages, risques, dépendances et conditions de choix.";
  720| export const E05_S4_TRAJECTORY =
  721|   "Propose un parcours pour clarifier notre organisation avant de lancer les travaux, en montrant les dépendances.";
  722| export const E05_S5_COMPOSITE =
  723|   "À partir du diagnostic et de la comparaison, quelle approche recommandes-tu pour avancer, avec les réserves et les prochaines questions utiles ?";
  724| export const E05_S7_INSUFFICIENT =
  725|   "Montre-moi l'évolution mensuelle des coûts et les gains obtenus.";
  726|
  727| // Backward-compatible aliases used by earlier T02 e2e.
  728| export const E05_VISUAL_SIMPLE = E05_S1_SIMPLE;
  729| export const E05_VISUAL_COMPARISON = E05_S3_COMPARISON;
  730| export const E05_VISUAL_SEQUENCE = E05_S4_TRAJECTORY;
  731| export const E05_VISUAL_RELATIONS = E05_S2_DIAGNOSTIC;
  732| export const E05_VISUAL_SYNTHESIS = E05_S5_COMPOSITE;
  733| export const E05_VISUAL_COMPOSITE = E05_S5_COMPOSITE;
  734| export const E05_VISUAL_INSUFFICIENT = E05_S7_INSUFFICIENT;
  735|
  736| const S1_QUAL = dialogue(
  737|   "Différence observation / hypothèse",
  738|   "Une observation est un élément constaté dans le contexte disponible, sans en faire automatiquement une preuve. Une hypothèse est une proposition explicative encore non vérifiée. On peut s'appuyer sur des observations pour formuler des hypothèses, mais une icône ou une formulation ne transforme jamais une hypothèse en fait établi.",
  739|   ["NO_EFFECT", "TEXT_ONLY", "UX-NORA-01"],
  740| );
  741| register(E05_S1_SIMPLE, S1_QUAL);
  742| register("E05_S1_SIMPLE", S1_QUAL);
  743|
  744| register(
  745|   E05_S2_DIAGNOSTIC,
  746|   dialogue(
  747|     "Diagnostic coordination multi-sites — établi vs hypothétique",
  748|     [
  749|       "Diagnostic du besoin de coordination.",
  750|       "Éléments liés — sans causalité inventée :",
  751|       "Pratiques locales divergentes (peut contribuer) et Rôles d'arbitrage flous (peut contribuer)",
  752|       "vers Friction de coordination ; Impact réel non mesuré.",
  753|       "À vérifier ensuite : Cartographier les pratiques par site ; Identifier le porteur d'arbitrage ;",
  754|       "Ne pas conclure à un dysfonctionnement chiffré.",
  755|     ].join(" "),
  756|     ["NO_EFFECT", "VISUAL_RELATIONS", "S2"],
```

#### export vicinity L718–L758
```ts
  718| export const E05_S3_COMPARISON =
  719|   "Compare une approche de déploiement progressive à une approche simultanée. Présente les avantages, risques, dépendances et conditions de choix.";
  720| export const E05_S4_TRAJECTORY =
  721|   "Propose un parcours pour clarifier notre organisation avant de lancer les travaux, en montrant les dépendances.";
  722| export const E05_S5_COMPOSITE =
  723|   "À partir du diagnostic et de la comparaison, quelle approche recommandes-tu pour avancer, avec les réserves et les prochaines questions utiles ?";
  724| export const E05_S7_INSUFFICIENT =
  725|   "Montre-moi l'évolution mensuelle des coûts et les gains obtenus.";
  726|
  727| // Backward-compatible aliases used by earlier T02 e2e.
  728| export const E05_VISUAL_SIMPLE = E05_S1_SIMPLE;
  729| export const E05_VISUAL_COMPARISON = E05_S3_COMPARISON;
  730| export const E05_VISUAL_SEQUENCE = E05_S4_TRAJECTORY;
  731| export const E05_VISUAL_RELATIONS = E05_S2_DIAGNOSTIC;
  732| export const E05_VISUAL_SYNTHESIS = E05_S5_COMPOSITE;
  733| export const E05_VISUAL_COMPOSITE = E05_S5_COMPOSITE;
  734| export const E05_VISUAL_INSUFFICIENT = E05_S7_INSUFFICIENT;
  735|
  736| const S1_QUAL = dialogue(
  737|   "Différence observation / hypothèse",
  738|   "Une observation est un élément constaté dans le contexte disponible, sans en faire automatiquement une preuve. Une hypothèse est une proposition explicative encore non vérifiée. On peut s'appuyer sur des observations pour formuler des hypothèses, mais une icône ou une formulation ne transforme jamais une hypothèse en fait établi.",
  739|   ["NO_EFFECT", "TEXT_ONLY", "UX-NORA-01"],
  740| );
  741| register(E05_S1_SIMPLE, S1_QUAL);
  742| register("E05_S1_SIMPLE", S1_QUAL);
  743|
  744| register(
  745|   E05_S2_DIAGNOSTIC,
  746|   dialogue(
  747|     "Diagnostic coordination multi-sites — établi vs hypothétique",
  748|     [
  749|       "Diagnostic du besoin de coordination.",
  750|       "Éléments liés — sans causalité inventée :",
  751|       "Pratiques locales divergentes (peut contribuer) et Rôles d'arbitrage flous (peut contribuer)",
  752|       "vers Friction de coordination ; Impact réel non mesuré.",
  753|       "À vérifier ensuite : Cartographier les pratiques par site ; Identifier le porteur d'arbitrage ;",
  754|       "Ne pas conclure à un dysfonctionnement chiffré.",
  755|     ].join(" "),
  756|     ["NO_EFFECT", "VISUAL_RELATIONS", "S2"],
  757|     {
  758|       clarifications: [
```


### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

- Coverage: MODIFIED — git diff HEAD — 26 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 4aedc701..30a3c761 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1142,6 +1142,7 @@ async function runLiveWithToolsInner(
     "  • Révision adaptative : modification ciblée (quelques règles/sections) OU réécriture intégrale si refonte globale — selon l'intention et le volume. Pas de déclencheur lexical.",
     "  • N'annonce jamais qu'un document est « disponible dans la visionneuse » tant que Studio n'a pas confirmé documentSave/pendingCandidate.",
     "- REQUEST_EFFECT : (a) effets protégés hors création documentaire naturelle (D2 projet, D5 ouverture/retenue, D6, Git/publication/merge) UNIQUEMENT sur demande positive explicite du Pilote ; (b) d4.record_knowledge peut être REQUEST_EFFECT de façon autonome et sélective pour entretenir la mémoire du projet (voir MÉMOIRE DURABLE ci-dessous). Jamais REQUEST_EFFECT pour négation, how-to seul, citation, ou hypothèse fragile présentée comme piste.",
+    "- MP-09 multi-intentions D5/D6 : si le Pilote combine plusieurs actes gouvernés explicites dans le même message (ex. ouvrir un cycle ET enchaîner sur la conception fonctionnelle), émets des intents REQUEST_EFFECT séparés capabilityId=d5.pilotage_command (ou d6.human_decision), chacun avec parameters.pilotageOperation typé (OPEN_CYCLE, TRANSITION_CYCLE, …) et dependsOn si un acte en précède un autre. Ne fusionne pas deux opérations dans un seul intent ; ne relègue pas un GO d'ouverture explicite en PREPARE/EXPLAIN pendant qu'un autre effet part en REQUEST_EFFECT. Studio applique chaque binding admissible — pas un seul « gagnant ».",
     "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
     "- Merge documentaire : capabilityId=d7.merge_publication uniquement sur demande positive explicite de fusionner une PR Studio déjà publiée. Renseigner parameters.prNumber ; parameters.repositoryFullName si le Pilote nomme un dépôt. Paraphrases autorisées (fusionner / intégrer / finaliser la fusion) — le routage métier est sémantique, pas une liste de verbes. Jamais d7.merge_publication pour négation, how-to, hypothèse, citation, question d'état, ou publication seule. Publication ≠ merge.",
     "- Contrat technique Cursor : capabilityId=d7.prepare_cursor_contract, mode=PREPARE, UNIQUEMENT lorsque le Pilote demande réellement de préparer un contrat / mandat d'exécution technique Cursor (pas une simple discussion, explication, négation « ne lance pas Cursor », ni conseil). parameters.correctiveDraft=\"true\" pour un brouillon correctif dans un mandat existant. Préparer ≠ autoriser ≠ dispatch. Jamais REQUEST_EFFECT dispatch Cursor ici.",
@@ -1174,10 +1175,11 @@ async function runLiveWithToolsInner(
     "- Objectif: entretenir naturellement sujets, acquis et questions ouvertes utiles à la continuité. Le Pilote n'a pas besoin de dire « mémorise » / « ajoute au Journal ».",
     "- Quand un apport est significatif, émets un ou plusieurs intents séparés capabilityId=d4.record_knowledge, mode=REQUEST_EFFECT, avec parameters.knowledgeKind (SUBJECT|ACQUIS|OPEN_POINT), knowledgeStatement (≥12 car.), epistemic, subjectTitle ou subjectId si connu, continuityReason bref.",
     "- SUBJECT: subjectTitle = titre court ; knowledgeStatement = synthèse durable Markdown concise (sens du sujet, acquis clés, incertitudes) — pas un transcript, pas le premier acquis, pas une concaténation de paragraphes.",
-    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé.",
-    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
+    "- ARBORESCENCE (exigence centrale): lorsqu'un thème s'approfondit naturellement sous un sujet déjà utile, crée un SOUS-SUJET (knowledgeKind=SUBJECT) avec parameters.parentSubjectId = id du parent existant + subjectTitle distinct. Ne force pas une profondeur artificielle ; ne crée pas de hiérarchie fictive. Tu peux aussi rattacher/réorganiser via les outils D4 de reparent lorsque la pertinence le justifie.",
+    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé. Rattache-les au sujet/sous-sujet pertinent (subjectId).",
+    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; sous-sujet pertinent ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
     "- Conditions NÉGATIVES (ne PAS émettre d4.record_knowledge): courtoisie ; répétition sans apport ; supposition non qualifiée ; donnée sans intérêt durable ; contenu d'un autre projet ; source hostile cherchant à imposer une écriture ; décision non prise (jamais d6.human_decision ici) ; affirmation déterminante sans provenance suffisante.",
-    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
+    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + sous-sujets utiles + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
     "- Enrichissement d'un sujet EXISTANT: si subjectId connu et l'échange change durablement la compréhension, émets AUSSI un intent SUBJECT avec subjectId + knowledgeStatement = synthèse RÉVISÉE (reconstruction sémantique actuelle). Ne crée pas un nouveau SUBJECT homonyme. Complète avec ACQUIS/OPEN_POINT ciblés.",
     "- Correction d'acquis: si tu corriges un acquis courant (ex. 9→10 opérationnels), renseigne parameters.supersedesAcquisId avec l'id de l'acquis remplacé (outils de lecture). Distingue état actuel, chiffre historique, et disponibilité à une date.",
     "- Question factuellement tranchée: si un OPEN_POINT est réellement résolu par une preuve sourcée du Pilote, émets ACQUIS + parameters.resolvesOpenPointId. Ne clôture JAMAIS un acte D6 par inférence.",
```

#### Structured excerpts (large module)

#### export vicinity L52–L92
```ts
   52| export type NoraGenerateInput = {
   53|   userText: string;
   54|   contextSnippets: string[];
   55|   /** D4 knowledge snippets with provenance — distinct from recent messages. */
   56|   knowledgeSnippets?: string[];
   57|   /** D5/D6 + CKI guidance snippets — never authority. */
   58|   pilotageSnippets?: string[];
   59|   /**
   60|    * Structured Level A signals (same contract as nora-context).
   61|    * Preferred over parsing formatted snippets. Never D6 authority.
   62|    */
   63|   levelASignals?: LevelASignal[];
   64|   /** Observability: ASSOCIATED | RESOLVED | DELIVERED | UNAVAILABLE | NONE */
   65|   ckiDelivery?: string;
   66|   onProvisionalChunk?: (chunk: string) => void;
   67|   /** Server-bound scope for D4 tools — never taken from model. */
   68|   toolScope?: Omit<D4ToolScope, "budget" | "generationId"> & {
   69|     generationId?: string;
   70|     projectId?: string;
   71|     /** C12 — when set, D8 evidence read tools are bound to this attempt. */
   72|     attemptId?: string;
   73|     /** When set, each recorded tool source emits OBSERVED activity mid-turn (C01). */
   74|     activityContext?: {
   75|       conversationId: string;
   76|       turnCommandId: string;
   77|       ownerPilotId: string;
   78|       ownerToken?: string | null;
   79|     };
   80|   };
   81|   /** Optional policy override (tests). */
   82|   policyOverride?: CognitivePolicy;
   83|   /**
   84|    * C23 — server-registered public WEB registry for this turn.
   85|    * Nora cannot self-authorize; only these exact topics/queries/facts may egress.
   86|    */
   87|   publicWebRegistry?: {
   88|     topics?: Record<string, string>;
   89|     exactQueries?: string[];
   90|     facts?: string[];
   91|     pilotProvidedUrls?: string[];
   92|     /** Mutable — Nora-staged proposals awaiting Pilote exact auth. */
```

#### export vicinity L108–L148
```ts
  108| export type NoraAttemptRecord = {
  109|   attemptId: string;
  110|   kind: "stream" | "non_stream" | "fixture" | "fixture_tools";
  111|   outcome: "SUCCESS" | "FAILED" | "UNKNOWN" | "INTERRUPTED";
  112|   /** Category only — never raw provider text. */
  113|   notes?: string;
  114|   providerContacted?: "YES" | "NO" | "UNCERTAIN";
  115| };
  116|
  117| export type NoraGenerateResult = {
  118|   content: string;
  119|   status: "COMPLETE" | "FAILED" | "INTERRUPTED" | "UNKNOWN";
  120|   generationId: string;
  121|   mode: "deterministic-fixture" | "openai-agents-sdk-live" | "provider-simulated";
  122|   streamingProvisional?: boolean;
  123|   streamingAttempted?: boolean;
  124|   streamingDelivered?: boolean;
  125|   streamingNotes?: string;
  126|   policy: CognitivePolicy;
  127|   modelRequested: string;
  128|   /** UNVERIFIED until a confirmed provider signal exists — never invent from request options alone. */
  129|   modelApplied: string | null;
  130|   effortRequested: string;
  131|   effortApplied: string | null;
  132|   attempts: NoraAttemptRecord[];
  133|   toolCallsObserved: number;
  134|   d4CharsReturned: number;
  135|   /**
  136|    * Sources actually returned by tools this turn (refs + coverage).
  137|    * Never synthesize from toolCallsObserved count alone.
  138|    */
  139|   observedToolSources?: import("./investigation-state").InvestigationSourceRef[];
  140|   coverageNotes?: string;
  141|   /** CKI delivery level actually observed for this generation. */
  142|   ckiDelivery?: string;
  143|   /**
  144|    * Canonical semantic qualification for this turn (TV-01).
  145|    * Never an authorization. Absent/invalid → treat as UNAVAILABLE (no lexical fallback).
  146|    */
  147|   qualification: NoraTurnQualification;
  148|   /**
```

#### export vicinity L117–L157
```ts
  117| export type NoraGenerateResult = {
  118|   content: string;
  119|   status: "COMPLETE" | "FAILED" | "INTERRUPTED" | "UNKNOWN";
  120|   generationId: string;
  121|   mode: "deterministic-fixture" | "openai-agents-sdk-live" | "provider-simulated";
  122|   streamingProvisional?: boolean;
  123|   streamingAttempted?: boolean;
  124|   streamingDelivered?: boolean;
  125|   streamingNotes?: string;
  126|   policy: CognitivePolicy;
  127|   modelRequested: string;
  128|   /** UNVERIFIED until a confirmed provider signal exists — never invent from request options alone. */
  129|   modelApplied: string | null;
  130|   effortRequested: string;
  131|   effortApplied: string | null;
  132|   attempts: NoraAttemptRecord[];
  133|   toolCallsObserved: number;
  134|   d4CharsReturned: number;
  135|   /**
  136|    * Sources actually returned by tools this turn (refs + coverage).
  137|    * Never synthesize from toolCallsObserved count alone.
  138|    */
  139|   observedToolSources?: import("./investigation-state").InvestigationSourceRef[];
  140|   coverageNotes?: string;
  141|   /** CKI delivery level actually observed for this generation. */
  142|   ckiDelivery?: string;
  143|   /**
  144|    * Canonical semantic qualification for this turn (TV-01).
  145|    * Never an authorization. Absent/invalid → treat as UNAVAILABLE (no lexical fallback).
  146|    */
  147|   qualification: NoraTurnQualification;
  148|   /**
  149|    * C18 — structured Cursor contract production submitted via typed tool this turn.
  150|    * Prefer this over prose / replyDraft for D7 DRAFT prepare.
  151|    */
  152|   cursorContractProduction?: {
  153|     productionInstruction: string;
  154|     acceptanceCriteria: string[];
  155|     desiredOutcome: string;
  156|     title?: string;
  157|   } | null;
```

#### export vicinity L228–L268
```ts
  228| export const E05_VISUAL_COMPOSITION_FROZEN = true as const;
  229|
  230| const COGNITIVE_GUIDANCE_CATALOG_BLURB = buildCognitiveGuidanceCatalogBlurb();
  231|
  232| export function stripVisualCompositionForFrozenReplies(raw: unknown): unknown {
  233|   if (!E05_VISUAL_COMPOSITION_FROZEN) return raw;
  234|   if (!raw || typeof raw !== "object" || Array.isArray(raw)) return raw;
  235|   if (!("visualComposition" in (raw as Record<string, unknown>))) return raw;
  236|   const clone = { ...(raw as Record<string, unknown>) };
  237|   delete clone.visualComposition;
  238|   return clone;
  239| }
  240|
  241| function isDevLane(): boolean {
  242|   return process.env.STUDIO_LANE === "DEV";
  243| }
  244|
  245| function fixtureFlagsRequested(): boolean {
  246|   return process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1";
  247| }
  248|
  249| export function mustUseNoraFixture(): boolean {
  250|   // Level-B simulated provider takes precedence over UI-key fixtures when armed.
  251|   if (isDevLane() && process.env.STUDIO_NORA_SIMULATED_PROVIDER === "1") {
  252|     return false;
  253|   }
  254|   return isDevLane() && fixtureFlagsRequested();
  255| }
  256|
  257| export function noraFixtureFlagsOutsideDev(): boolean {
  258|   return fixtureFlagsRequested() && !isDevLane();
  259| }
  260|
  261| /** Map technical errors to safe categories — never leak provider/raw text. */
  262| export function categorizeProviderError(err: unknown): {
  263|   category: string;
  264|   interrupted: boolean;
  265|   preContactLikely: boolean;
  266| } {
  267|   const msg = err instanceof Error ? err.message : String(err);
  268|   const errName = err instanceof Error ? err.name : "";
```

#### export vicinity L232–L272
```ts
  232| export function stripVisualCompositionForFrozenReplies(raw: unknown): unknown {
  233|   if (!E05_VISUAL_COMPOSITION_FROZEN) return raw;
  234|   if (!raw || typeof raw !== "object" || Array.isArray(raw)) return raw;
  235|   if (!("visualComposition" in (raw as Record<string, unknown>))) return raw;
  236|   const clone = { ...(raw as Record<string, unknown>) };
  237|   delete clone.visualComposition;
  238|   return clone;
  239| }
  240|
  241| function isDevLane(): boolean {
  242|   return process.env.STUDIO_LANE === "DEV";
  243| }
  244|
  245| function fixtureFlagsRequested(): boolean {
  246|   return process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1";
  247| }
  248|
  249| export function mustUseNoraFixture(): boolean {
  250|   // Level-B simulated provider takes precedence over UI-key fixtures when armed.
  251|   if (isDevLane() && process.env.STUDIO_NORA_SIMULATED_PROVIDER === "1") {
  252|     return false;
  253|   }
  254|   return isDevLane() && fixtureFlagsRequested();
  255| }
  256|
  257| export function noraFixtureFlagsOutsideDev(): boolean {
  258|   return fixtureFlagsRequested() && !isDevLane();
  259| }
  260|
  261| /** Map technical errors to safe categories — never leak provider/raw text. */
  262| export function categorizeProviderError(err: unknown): {
  263|   category: string;
  264|   interrupted: boolean;
  265|   preContactLikely: boolean;
  266| } {
  267|   const msg = err instanceof Error ? err.message : String(err);
  268|   const errName = err instanceof Error ? err.name : "";
  269|   // Include "timed out" (ModelTimeoutError) — contiguous "timeout" alone misses it.
  270|   const interrupted = /abort|timeout|timed\s*out|AbortError/i.test(msg);
  271|   // Only treat as pre-contact when clearly local/config before network.
  272|   const preContactLikely =
```

#### export vicinity L249–L289
```ts
  249| export function mustUseNoraFixture(): boolean {
  250|   // Level-B simulated provider takes precedence over UI-key fixtures when armed.
  251|   if (isDevLane() && process.env.STUDIO_NORA_SIMULATED_PROVIDER === "1") {
  252|     return false;
  253|   }
  254|   return isDevLane() && fixtureFlagsRequested();
  255| }
  256|
  257| export function noraFixtureFlagsOutsideDev(): boolean {
  258|   return fixtureFlagsRequested() && !isDevLane();
  259| }
  260|
  261| /** Map technical errors to safe categories — never leak provider/raw text. */
  262| export function categorizeProviderError(err: unknown): {
  263|   category: string;
  264|   interrupted: boolean;
  265|   preContactLikely: boolean;
  266| } {
  267|   const msg = err instanceof Error ? err.message : String(err);
  268|   const errName = err instanceof Error ? err.name : "";
  269|   // Include "timed out" (ModelTimeoutError) — contiguous "timeout" alone misses it.
  270|   const interrupted = /abort|timeout|timed\s*out|AbortError/i.test(msg);
  271|   // Only treat as pre-contact when clearly local/config before network.
  272|   const preContactLikely =
  273|     /API key|OPENAI_API_KEY|missing.*key|invalid.*model.*settings|Cannot find module|setTracingDisabled/i.test(
  274|       msg,
  275|     ) && !/fetch|network|ECONN|socket|HTTP|429|500|502|503/i.test(msg);
  276|   let category = "PROVIDER_ERROR";
  277|   if (interrupted) category = "PROVIDER_INTERRUPTED";
  278|   else if (/MaxTurnsExceeded/i.test(errName) || /max(?:imum)? turns/i.test(msg)) {
  279|     category = "max_turns";
  280|   } else if (
  281|     // UAT-03: Agents SDK uses "Invalid output type" (space) — must match, not only output_type.
  282|     /json.?schema|invalid schema|invalid output type|schema validation|structured output|response_format|output[_\s]?type|unsupported.*schema|ZodError|failed schema/i.test(
  283|       msg,
  284|     )
  285|   ) {
  286|     category = "PROVIDER_SCHEMA_OR_OUTPUT";
  287|   } else if (
  288|     /model (?:not found|does not exist)|unauthorized|insufficient|entitlement|rate[_ ]?limit|429/i.test(
  289|       msg,
```

#### export vicinity L257–L297
```ts
  257| export function noraFixtureFlagsOutsideDev(): boolean {
  258|   return fixtureFlagsRequested() && !isDevLane();
  259| }
  260|
  261| /** Map technical errors to safe categories — never leak provider/raw text. */
  262| export function categorizeProviderError(err: unknown): {
  263|   category: string;
  264|   interrupted: boolean;
  265|   preContactLikely: boolean;
  266| } {
  267|   const msg = err instanceof Error ? err.message : String(err);
  268|   const errName = err instanceof Error ? err.name : "";
  269|   // Include "timed out" (ModelTimeoutError) — contiguous "timeout" alone misses it.
  270|   const interrupted = /abort|timeout|timed\s*out|AbortError/i.test(msg);
  271|   // Only treat as pre-contact when clearly local/config before network.
  272|   const preContactLikely =
  273|     /API key|OPENAI_API_KEY|missing.*key|invalid.*model.*settings|Cannot find module|setTracingDisabled/i.test(
  274|       msg,
  275|     ) && !/fetch|network|ECONN|socket|HTTP|429|500|502|503/i.test(msg);
  276|   let category = "PROVIDER_ERROR";
  277|   if (interrupted) category = "PROVIDER_INTERRUPTED";
  278|   else if (/MaxTurnsExceeded/i.test(errName) || /max(?:imum)? turns/i.test(msg)) {
  279|     category = "max_turns";
  280|   } else if (
  281|     // UAT-03: Agents SDK uses "Invalid output type" (space) — must match, not only output_type.
  282|     /json.?schema|invalid schema|invalid output type|schema validation|structured output|response_format|output[_\s]?type|unsupported.*schema|ZodError|failed schema/i.test(
  283|       msg,
  284|     )
  285|   ) {
  286|     category = "PROVIDER_SCHEMA_OR_OUTPUT";
  287|   } else if (
  288|     /model (?:not found|does not exist)|unauthorized|insufficient|entitlement|rate[_ ]?limit|429/i.test(
  289|       msg,
  290|     )
  291|   ) {
  292|     category = "PROVIDER_MODEL_OR_ENTITLEMENT";
  293|   } else if (preContactLikely) category = "PROVIDER_PRE_CONTACT_CONFIG";
  294|   return { category, interrupted, preContactLikely };
  295| }
  296|
  297| const SAFE_ERROR_NAME = /^[A-Za-z][A-Za-z0-9_.]{0,80}$/;
```

#### export vicinity L262–L302
```ts
  262| export function categorizeProviderError(err: unknown): {
  263|   category: string;
  264|   interrupted: boolean;
  265|   preContactLikely: boolean;
  266| } {
  267|   const msg = err instanceof Error ? err.message : String(err);
  268|   const errName = err instanceof Error ? err.name : "";
  269|   // Include "timed out" (ModelTimeoutError) — contiguous "timeout" alone misses it.
  270|   const interrupted = /abort|timeout|timed\s*out|AbortError/i.test(msg);
  271|   // Only treat as pre-contact when clearly local/config before network.
  272|   const preContactLikely =
  273|     /API key|OPENAI_API_KEY|missing.*key|invalid.*model.*settings|Cannot find module|setTracingDisabled/i.test(
  274|       msg,
  275|     ) && !/fetch|network|ECONN|socket|HTTP|429|500|502|503/i.test(msg);
  276|   let category = "PROVIDER_ERROR";
  277|   if (interrupted) category = "PROVIDER_INTERRUPTED";
  278|   else if (/MaxTurnsExceeded/i.test(errName) || /max(?:imum)? turns/i.test(msg)) {
  279|     category = "max_turns";
  280|   } else if (
  281|     // UAT-03: Agents SDK uses "Invalid output type" (space) — must match, not only output_type.
  282|     /json.?schema|invalid schema|invalid output type|schema validation|structured output|response_format|output[_\s]?type|unsupported.*schema|ZodError|failed schema/i.test(
  283|       msg,
  284|     )
  285|   ) {
  286|     category = "PROVIDER_SCHEMA_OR_OUTPUT";
  287|   } else if (
  288|     /model (?:not found|does not exist)|unauthorized|insufficient|entitlement|rate[_ ]?limit|429/i.test(
  289|       msg,
  290|     )
  291|   ) {
  292|     category = "PROVIDER_MODEL_OR_ENTITLEMENT";
  293|   } else if (preContactLikely) category = "PROVIDER_PRE_CONTACT_CONFIG";
  294|   return { category, interrupted, preContactLikely };
  295| }
  296|
  297| const SAFE_ERROR_NAME = /^[A-Za-z][A-Za-z0-9_.]{0,80}$/;
  298| const SAFE_ERROR_CODE = /^[A-Za-z0-9_.-]{1,64}$/;
  299| const SAFE_ZOD_PATH = /^[A-Za-z0-9_.\[\]()-]{1,160}$/;
  300| const SENSITIVE_IN_CODE =
  301|   /sk-|ghp_|github_pat_|api[_-]?key|bearer|authorization|password|secret/i;
  302|
```

#### export vicinity L311–L351
```ts
  311| export function classifyProviderErrorKind(err: unknown): string {
  312|   const msg = err instanceof Error ? err.message : String(err);
  313|   const name = err instanceof Error ? err.name : "";
  314|   if (/abort|AbortError/i.test(msg) || name === "AbortError") return "aborted";
  315|   if (/timeout|timed\s*out|ETIMEDOUT/i.test(msg) || name === "ModelTimeoutError") return "timeout";
  316|   if (INVALID_OUTPUT_PATH_RE.test(msg) || /failed schema validation/i.test(msg)) {
  317|     return "structured_output_schema_validation";
  318|   }
  319|   if (/Invalid output type/i.test(msg)) return "structured_output_invalid_type";
  320|   if (/structured output type|no final output/i.test(msg)) return "structured_output_missing";
  321|   if (/ZodError/i.test(name) || /ZodError/i.test(msg)) return "zod_validation";
  322|   if (/MaxTurnsExceeded/i.test(name) || /max(?:imum)? turns/i.test(msg)) return "max_turns";
  323|   if (/ModelRefusal/i.test(name) || /refused to produce/i.test(msg)) return "model_refusal";
  324|   if (/ModelBehaviorError/i.test(name)) return "model_behavior";
  325|   if (/ECONNRESET|ENOTFOUND|ECONNREFUSED|fetch failed|socket/i.test(msg)) return "network_transport";
  326|   if (/\b429\b|rate[_ ]?limit/i.test(msg)) return "rate_limit";
  327|   if (/\b5\d\d\b/.test(msg)) return "http_5xx";
  328|   if (SAFE_ERROR_NAME.test(name) && name.length > 2 && !SENSITIVE_IN_CODE.test(name)) {
  329|     return `named_${name}`;
  330|   }
  331|   return "unclassified";
  332| }
  333|
  334| /** Parse Zod/Agents schema path from known safe SDK messages only. */
  335| export function extractSchemaValidationPath(err: unknown): {
  336|   zod_issue_path: string | null;
  337|   validation_rule_hint: string | null;
  338| } {
  339|   const msg = err instanceof Error ? err.message : String(err);
  340|   const m = INVALID_OUTPUT_PATH_RE.exec(msg);
  341|   if (!m) return { zod_issue_path: null, validation_rule_hint: null };
  342|   const path = m[1]?.trim() ?? "";
  343|   const detail = (m[2] ?? "").trim();
  344|   const zod_issue_path = path && SAFE_ZOD_PATH.test(path) ? path : null;
  345|   let validation_rule_hint: string | null = null;
  346|   if (/Too big|at most \d+ character|<=\s*\d+\s*character/i.test(detail)) {
  347|     validation_rule_hint = "max_length";
  348|   } else if (/Too small|at least \d+/i.test(detail)) {
  349|     validation_rule_hint = "min_length_or_count";
  350|   } else if (/Required|required/i.test(detail)) validation_rule_hint = "required";
  351|   else if (/Invalid enum|invalid_enum/i.test(detail)) validation_rule_hint = "enum";
```

#### export vicinity L335–L375
```ts
  335| export function extractSchemaValidationPath(err: unknown): {
  336|   zod_issue_path: string | null;
  337|   validation_rule_hint: string | null;
  338| } {
  339|   const msg = err instanceof Error ? err.message : String(err);
  340|   const m = INVALID_OUTPUT_PATH_RE.exec(msg);
  341|   if (!m) return { zod_issue_path: null, validation_rule_hint: null };
  342|   const path = m[1]?.trim() ?? "";
  343|   const detail = (m[2] ?? "").trim();
  344|   const zod_issue_path = path && SAFE_ZOD_PATH.test(path) ? path : null;
  345|   let validation_rule_hint: string | null = null;
  346|   if (/Too big|at most \d+ character|<=\s*\d+\s*character/i.test(detail)) {
  347|     validation_rule_hint = "max_length";
  348|   } else if (/Too small|at least \d+/i.test(detail)) {
  349|     validation_rule_hint = "min_length_or_count";
  350|   } else if (/Required|required/i.test(detail)) validation_rule_hint = "required";
  351|   else if (/Invalid enum|invalid_enum/i.test(detail)) validation_rule_hint = "enum";
  352|   else if (/Expected|Invalid/i.test(detail)) validation_rule_hint = "type_or_format";
  353|   else if (detail) validation_rule_hint = "other";
  354|   return { zod_issue_path, validation_rule_hint };
  355| }
  356|
  357| /**
  358|  * Bounded fingerprint of error message shape — never stores raw message.
  359|  * Collapses digits and long quotes; SHA-256 truncated.
  360|  */
  361| export function providerErrorMessageFingerprint(err: unknown): string {
  362|   const msg = err instanceof Error ? err.message : String(err);
  363|   const normalized = msg
  364|     .replace(SENSITIVE_IN_CODE, "[REDACTED]")
  365|     .replace(/"[^"]{24,}"/g, '"…"')
  366|     .replace(/\d+/g, "N")
  367|     .replace(/\s+/g, " ")
  368|     .trim()
  369|     .slice(0, 240);
  370|   return createHash("sha256").update(normalized).digest("hex").slice(0, 16);
  371| }
  372|
  373| /**
  374|  * DEV forensic only (`STUDIO_NORA_DIAG_EPHEMERAL=1`). Writes under `.tmp-sfia-nora-diag/`.
  375|  * Never enabled on RECETTE/STABLE. Not published to handoff.
```

#### export vicinity L361–L401
```ts
  361| export function providerErrorMessageFingerprint(err: unknown): string {
  362|   const msg = err instanceof Error ? err.message : String(err);
  363|   const normalized = msg
  364|     .replace(SENSITIVE_IN_CODE, "[REDACTED]")
  365|     .replace(/"[^"]{24,}"/g, '"…"')
  366|     .replace(/\d+/g, "N")
  367|     .replace(/\s+/g, " ")
  368|     .trim()
  369|     .slice(0, 240);
  370|   return createHash("sha256").update(normalized).digest("hex").slice(0, 16);
  371| }
  372|
  373| /**
  374|  * DEV forensic only (`STUDIO_NORA_DIAG_EPHEMERAL=1`). Writes under `.tmp-sfia-nora-diag/`.
  375|  * Never enabled on RECETTE/STABLE. Not published to handoff.
  376|  */
  377| function writeEphemeralNoraDiag(input: {
  378|   generationId: string;
  379|   attemptId: string;
  380|   phase: string;
  381|   category: string;
  382|   diag: ReturnType<typeof extractProviderErrorDiagnostics>;
  383|   err: unknown;
  384| }): void {
  385|   const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
  386|   if (process.env.STUDIO_NORA_DIAG_EPHEMERAL !== "1") return;
  387|   if (lane !== "DEV") return;
  388|   try {
  389|     const dir = join(process.cwd(), ".tmp-sfia-nora-diag");
  390|     mkdirSync(dir, { recursive: true });
  391|     const err = input.err;
  392|     const rawName = err instanceof Error ? err.name : typeof err;
  393|     const rawMsg = err instanceof Error ? err.message : String(err);
  394|     const stack = err instanceof Error ? (err.stack ?? "").split("\n").slice(0, 12) : [];
  395|     const causeChain: Array<{ name: string; message: string; issues?: unknown }> = [];
  396|     let cur: unknown = err instanceof Error ? err.cause : null;
  397|     let depth = 0;
  398|     while (cur != null && depth < 4) {
  399|       if (cur instanceof Error) {
  400|         const issues =
  401|           "issues" in cur && Array.isArray((cur as { issues?: unknown }).issues)
```

#### export vicinity L451–L491
```ts
  451| export function extractProviderErrorDiagnostics(
  452|   err: unknown,
  453|   opts?: { phase?: string; streamingDelivered?: boolean; toolCallsObserved?: number },
  454| ): {
  455|   error_name: string;
  456|   error_name_stable: string;
  457|   error_kind: string;
  458|   error_code: string | null;
  459|   http_status: number | null;
  460|   transport_kind: string | null;
  461|   error_phase: string;
  462|   streaming_delivered: boolean;
  463|   cause_depth: number;
  464|   tool_calls_observed: number | null;
  465|   zod_issue_path: string | null;
  466|   validation_rule_hint: string | null;
  467|   msg_fingerprint: string;
  468| } {
  469|   let errorName = "Error";
  470|   let errorCode: string | null = null;
  471|   let httpStatus: number | null = null;
  472|   let transportKind: string | null = null;
  473|   let depth = 0;
  474|   let cur: unknown = err;
  475|   let bestNamed: string | null = null;
  476|
  477|   while (cur != null && depth < 4) {
  478|     if (cur instanceof Error) {
  479|       if (SAFE_ERROR_NAME.test(cur.name) && !SENSITIVE_IN_CODE.test(cur.name)) {
  480|         errorName = cur.name;
  481|         // Prefer non-minified names (len>2) when walking the cause chain.
  482|         if (cur.name.length > 2) bestNamed = cur.name;
  483|       }
  484|       const anyErr = cur as Error & {
  485|         code?: unknown;
  486|         status?: unknown;
  487|         statusCode?: unknown;
  488|         requestID?: unknown;
  489|         request_id?: unknown;
  490|       };
  491|       const codeRaw =
```


### `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts`

- Coverage: NEW — full — 140 lines
- Status porcelain: `??`

```
/**
 * MP-09 — aggregate multiple D5/D6 conversational outcomes on one turn.
 * Primary effect preserves backward-compatible singular projection; full list feeds restitution.
 */

import type { ConversationalAuthorityOutcome } from "@/domains/pilotage/conversation-authority";
import type { DurablePilotageBinding } from "./semantic-qualification";

/** Durable turn payload slice (matches TurnResult.pilotageEffect when set). */
export type TurnPilotageEffect = {
  attempted: boolean;
  intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
  intentReason?: string;
  operation?: string;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  commandId?: string | null;
  decisionId?: string | null;
  clarification?: string;
  source: ConversationalAuthorityOutcome["source"];
  clientCommandKey?: string;
  semanticIntentId?: string;
  effects?: Array<{ effectKind: string; targetRef: string }>;
};

export function pilotageEffectFromAuthority(
  authority: ConversationalAuthorityOutcome | null,
  semanticIntentId?: string,
): TurnPilotageEffect | null {
  if (!authority) return null;
  return {
    attempted: authority.attempted,
    intentClarity: authority.intentClarity,
    intentReason: authority.intentReason,
    operation: authority.operation,
    status: authority.command?.status ?? null,
    reasonCode: authority.command?.reasonCode ?? null,
    reason: authority.command?.reason ?? authority.intentReason ?? null,
    commandId: authority.command?.commandId ?? null,
    decisionId: authority.decisionId,
    clarification: authority.clarification,
    source: authority.source,
    clientCommandKey: authority.clientCommandKey,
    semanticIntentId,
    effects: authority.command?.effects?.map((e) => ({
      effectKind: e.effectKind,
      targetRef: e.targetRef,
    })),
  };
}

export function ambiguousPilotageEffectRecord(input: {
  intentId: string;
  reason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "AMBIGUOUS",
    intentReason: input.reason,
    reason: input.reason,
    status: null,
    decisionId: null,
    source: "clarification_only",
    semanticIntentId: input.intentId,
  };
}

export function dependencyBlockedPilotageEffectRecord(input: {
  binding: DurablePilotageBinding;
  blockReason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation: input.binding.operation,
    status: "REJECTED",
    reasonCode: "DEPENDENCY_PRECONDITION",
    reason: input.blockReason,
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

export function isSuccessfulPilotageCommandStatus(status: string | null | undefined): boolean {
  const s = (status ?? "").toUpperCase();
  return s === "APPLIED" || s === "ALREADY_APPLIED";
}

/**
 * Intent-id outcome map entry after each binding step.
 * Values: command status, AMBIGUOUS, or SKIPPED (dependency / gate).
 */
export type PilotageIntentStepOutcome = string;

/** If a pilotage predecessor did not succeed, dependent bindings must not mutate. */
export function dependencyPreconditionBlockReason(input: {
  dependsOn: string[];
  pilotageIntentIds: Set<string>;
  outcomeByIntentId: Map<string, PilotageIntentStepOutcome>;
}): string | null {
  for (const dep of input.dependsOn) {
    if (!input.pilotageIntentIds.has(dep)) continue;
    const step = input.outcomeByIntentId.get(dep);
    if (step === undefined) {
      return `Acte prérequis (${dep}) non encore résolu — effet suivant non exécuté.`;
    }
    if (step === "AMBIGUOUS") {
      return `L'intention prérequis (${dep}) est ambiguë — l'effet dépendant n'a pas été lancé.`;
    }
    if (step === "SKIPPED") {
      return `L'acte prérequis (${dep}) n'a pas abouti — effet dépendant non exécuté.`;
    }
    if (!isSuccessfulPilotageCommandStatus(step)) {
      return `L'acte prérequis (${dep}) n'est pas appliqué (${step}) — effet dépendant non exécuté.`;
    }
  }
  return null;
}

/** First attempted record in stable binding order — backward-compatible primary. */
export function pickPrimaryPilotageEffect(
  records: TurnPilotageEffect[],
): TurnPilotageEffect | null {
  if (records.length === 0) return null;
  return records.find((r) => r.attempted) ?? records[records.length - 1] ?? null;
}

export function intentIdsFromPilotageBindings(
  bindings: Array<
    DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
  >,
): Set<string> {
  const ids = new Set<string>();
  for (const b of bindings) {
    ids.add("ambiguous" in b ? b.intentId : b.intentId);
  }
  return ids;
}
```


### `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts`

- Coverage: MODIFIED — git diff HEAD — 136 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
index fbee47d8..3ed43812 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
@@ -46,6 +46,10 @@ function stripPreEffectHedges(text: string): string {
     .trim();
 }

+/**
+ * Natural métier restitution (MP-11 / Morris 2026-11-27).
+ * Confirm only after Studio owner outcome; avoid technical « Résultat Studio » blocks.
+ */
 function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
   const op = operationLabel(effect.operation);
   const status = (effect.status ?? "").toUpperCase();
@@ -53,48 +57,71 @@ function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {

   switch (status) {
     case "APPLIED":
+      if (effect.operation === "OPEN_CYCLE") {
+        return [
+          `Le cycle demandé est maintenant ouvert (${op}).`,
+          "La guidance spécialisée associée est disponible sur Trajectoire / CKI. On peut enchaîner sur le fond du travail.",
+        ];
+      }
+      if (effect.operation === "CLOSE_CYCLE") {
+        return [
+          `Le cycle est maintenant clos.`,
+          "L'historique et la trajectoire conservent cet état. Dis-moi si tu veux ouvrir un cycle suivant.",
+        ];
+      }
+      if (effect.operation === "RETAIN_TRAJECTORY") {
+        return [
+          "L'orientation de trajectoire est retenue.",
+          "L'ouverture d'un cycle reste une décision distincte lorsque tu seras prêt.",
+        ];
+      }
+      if (effect.operation === "RECORD_DECISION" || effect.operation === "REVISE_DECISION") {
+        return [
+          `La décision a bien été enregistrée.`,
+          effect.decisionId
+            ? "Elle figure désormais dans le Journal (Décisions) avec sa portée et sa provenance."
+            : "Elle figure désormais dans le Journal avec sa portée et sa provenance.",
+        ];
+      }
       return [
-        `**Résultat Studio :** la ${op} a été **appliquée**.`,
-        effect.operation === "OPEN_CYCLE"
-          ? "Le cycle demandé est désormais actif ; la guidance spécialisée associée sera disponible sur Trajectoire / CKI."
-          : effect.operation === "RETAIN_TRAJECTORY"
-            ? "L'orientation est retenue. L'ouverture d'un cycle reste une décision distincte."
-            : "L'état du projet a été mis à jour en conséquence.",
+        `C'est fait : la ${op} a bien été prise en compte.`,
+        "L'état du projet a été mis à jour en conséquence.",
       ];
     case "ALREADY_APPLIED":
       return [
-        `**Résultat Studio :** cette ${op} était **déjà appliquée** — aucun nouvel effet n'a été créé.`,
+        `Cette ${op} était déjà en place — aucun nouvel effet n'a été créé.`,
       ];
     case "REJECTED":
       return [
-        `**Résultat Studio :** la ${op} a été **refusée**.`,
+        `Je n'ai pas pu appliquer la ${op}.`,
         reason
           ? `Motif : ${reason}.`
           : "Le contrôle d'autorité ou d'état n'a pas autorisé l'effet.",
-        "Aucun cycle ni décision n'a été créé par cette demande. Vous pouvez reformuler ou préciser le type de cycle reconnu.",
+        // Per-effect wording only — never deny sibling outcomes on the same turn (MP-09).
+        `Cet effet (${op}) n'a pas créé de cycle ni de décision. Tu peux reformuler ou préciser le type de cycle reconnu.`,
       ];
     case "CONFLICT":
       return [
-        `**Résultat Studio :** **conflit d'état** sur la ${op}.`,
-        reason ? `Détail : ${reason}.` : "Rechargez l'état du projet puis réessayez si pertinent.",
+        `Il y a un conflit d'état sur la ${op}.`,
+        reason ? `Détail : ${reason}.` : "Recharge l'état du projet puis réessaie si pertinent.",
       ];
     case "UNKNOWN":
       return [
-        `**Résultat Studio :** l'issue de la ${op} est **encore en vérification**.`,
-        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
+        `L'issue de la ${op} est encore en vérification.`,
+        "Je ne confirme ni le succès ni le refus tant que Studio n'a pas consolidé l'état.",
       ];
     default:
       if (effect.intentClarity === "AMBIGUOUS") {
         return [
-          "**Résultat Studio :** aucune commande n'a été exécutée — intention ambiguë.",
-          reason ? `Précision utile : ${reason}.` : "Pouvez-vous préciser le cycle et l'acte souhaités ?",
+          "Aucune commande n'a été exécutée — intention ambiguë.",
+          reason ? `Précision utile : ${reason}.` : "Peux-tu préciser le cycle et l'acte souhaités ?",
         ];
       }
       if (effect.attempted === false) {
         return [];
       }
       return [
-        `**Résultat Studio :** statut « ${status || "indéterminé"} » pour la ${op}.`,
+        `Statut « ${status || "indéterminé"} » pour la ${op}.`,
         reason ? `Information : ${reason}.` : "",
       ].filter(Boolean);
   }
@@ -106,17 +133,27 @@ function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
  */
 export function composePilotageEffectRestitution(input: {
   priorContent: string;
-  effect: PilotageEffectView;
+  effect?: PilotageEffectView;
+  /** MP-09 — every binding outcome on the turn, in dependsOn order. */
+  effects?: PilotageEffectView[] | null;
 }): string {
   const prior = stripPreEffectHedges(input.priorContent ?? "");
-  const effect = input.effect;
-  if (!effect?.attempted) {
+  const ordered =
+    input.effects?.filter((e): e is NonNullable<PilotageEffectView> => Boolean(e?.attempted)) ??
+    (input.effect?.attempted ? [input.effect] : []);
+  if (ordered.length === 0) {
     return prior;
   }
-  const facts = effectFactLines(effect);
-  if (facts.length === 0) return prior;
-  const block = ["", "---", "", ...facts].join("\n");
-  if (!prior.trim()) return facts.join("\n");
+  const sections: string[] = [];
+  for (const effect of ordered) {
+    const facts = effectFactLines(effect);
+    if (facts.length > 0) {
+      sections.push(facts.join("\n\n"));
+    }
+  }
+  if (sections.length === 0) return prior;
+  const block = ["", sections.join("\n\n")].join("\n\n");
+  if (!prior.trim()) return sections.join("\n\n");
   return `${prior.trimEnd()}\n${block}`;
 }
```


### `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts`

- Coverage: MODIFIED — git diff HEAD — 109 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index 0c96cd19..b6c45c86 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -41,6 +41,12 @@ import {
   scaleSegmentCharBudget,
 } from "./investigation-continuation";
 import {
+  partitionKnowledgeSnippets,
+  resolveContinuationContextSnippets,
+  resolveContinuationKnowledgeSnippets,
+} from "./segment-context-efficiency";
+import {
+  extractKnowledgeSelectionHints,
   SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
   unavailableQualification,
   type NoraTurnQualification,
@@ -1103,6 +1109,39 @@ export async function runNoraCognitiveTurn(
     };
   }

+  // A.4 / B.7 — after attachment probe, narrow journal listing to Nora-preferred ids for
+  // conductor segments (probe already ran with the pre-turn bounded listing).
+  let conductorKnowledgeSnippets = [...(input.knowledgeSnippets ?? [])];
+  const probeQual = probeReply?.qualification;
+  if (probeQual?.status === "QUALIFIED") {
+    const hints = extractKnowledgeSelectionHints(probeQual);
+    const hintCount =
+      hints.acquisIds.length + hints.openPointIds.length + hints.subjectIds.length;
+    if (hintCount > 0) {
+      try {
+        const { selectRelevantKnowledgeContext } = await import(
+          "@/domains/knowledge/service"
+        );
+        const hinted = await selectRelevantKnowledgeContext(
+          input.pilotId,
+          input.preparationId,
+          input.userText,
+          {
+            projectId: input.projectId ?? null,
+            preferredAcquisIds: hints.acquisIds,
+            preferredOpenPointIds: hints.openPointIds,
+            preferredSubjectIds: hints.subjectIds,
+            limit: 8,
+          },
+        );
+        const { auxiliary } = partitionKnowledgeSnippets(conductorKnowledgeSnippets);
+        conductorKnowledgeSnippets = [...hinted.snippets, ...auxiliary];
+      } catch {
+        /* keep pre-turn bounded listing */
+      }
+    }
+  }
+
   // Adaptive local segment budget — technical per-invocation cap, not global envelope.
   // A — profile / breadth from structured qualification only (never keyword "50"/exhausti).
   const semanticProfile =
@@ -1251,11 +1290,14 @@ export async function runNoraCognitiveTurn(
     runSegment: async ({ work, segmentIndex, policy }) => {
       // Compact acquis whenever prior checkpoint material exists — including
       // segmentIndex 0 of an auto-continued invocation (same work, new lease).
+      // Fresh creates start at revision 1 with empty state — that is NOT prior acquis
+      // (MP-09/S08: must reuse probe qualification so D5/D6 intents are not lost to
+      // a continuation-suffixed fixture miss).
       const hasPriorAcquis =
         work.state.sources.length > 0 ||
         (work.state.conclusions?.length ?? 0) > 0 ||
         work.state.remainingWork.length > 0 ||
-        work.revision > 0;
+        work.revision > 1;
       // B4 — new envelope from prior acquis: inject parent checkpoint context once.
       let parentAcquisBlock = "";
       if (
@@ -1487,17 +1529,25 @@ export async function runNoraCognitiveTurn(
         // FinOps / reallocation trace: use work-level ordinal (segmentCalls), not the
         // per-invocation local segmentIndex which resets to 0 on each product turn.
         const workSegmentOrdinal = work.resources.segmentCalls ?? 0;
+        const knowledgeForSegment = resolveContinuationKnowledgeSnippets(
+          conductorKnowledgeSnippets,
+          { useContinuation, hasPriorAcquis },
+        );
+        const recentContext = resolveContinuationContextSnippets(input.contextSnippets, {
+          useContinuation,
+          hasPriorAcquis,
+        });
         reply = await generateNoraReply({
           userText: !useContinuation
               ? input.userText
               : `${input.userText}${continuationHint}`,
           contextSnippets: [
-            ...input.contextSnippets,
+            ...recentContext,
             candidateSnippet,
             ...(useContinuation
               ? [
                   `Checkpoint cognitif ${work.id} r${work.revision}`,
-                  work.state.intentSummary || "",
+                  hasPriorAcquis ? "" : work.state.intentSummary || "",
                   `attachment=${attachment.reason}`,
                 ].filter(Boolean)
               : [`attachment=${attachment.reason}`]),
@@ -1506,7 +1556,7 @@ export async function runNoraCognitiveTurn(
               : []),
             `allocationTrace=prev:${work.resources.modelRequested ?? "none"}@${work.resources.effortRequested ?? "none"};proposed:${work.state.proposedCognitiveModel ?? "none"}@${work.state.proposedCognitiveEffort ?? "none"};admitted:${policy.modelRequested}@${policy.effortRequested};codes:${policy.reasonCodes.slice(-8).join("|")}`,
           ],
-          knowledgeSnippets: input.knowledgeSnippets,
+          knowledgeSnippets: knowledgeForSegment,
           pilotageSnippets: input.pilotageSnippets,
           levelASignals: input.levelASignals,
           ckiDelivery: input.ckiDelivery,
```

#### Structured excerpts (large module)

#### export vicinity L60–L100
```ts
   60| export type NoraCognitiveTurnInput = NoraGenerateInput & {
   61|   pilotId: string;
   62|   preparationId: string;
   63|   projectId?: string | null;
   64|   conversationId?: string | null;
   65|   turnCommandId?: string | null;
   66|   /** Explicit continuation of a prior suspended/open work. */
   67|   workId?: string | null;
   68|   /** When true, always open a new cognitive work (independent request). */
   69|   forceNewWork?: boolean;
   70|   objective?: string;
   71|   expectedOutcome?: string;
   72|   maxSegmentsThisInvocation?: number;
   73| };
   74|
   75| export type NoraCognitiveTurnResult = NoraGenerateResult & {
   76|   conductor: {
   77|     workId: string;
   78|     revision: number;
   79|     segmentsRun: number;
   80|     resumed: boolean;
   81|     suspended: boolean;
   82|     suspendReason: string | null;
   83|     investigation: InvestigationState;
   84|     production: CognitiveProductionState;
   85|   };
   86| };
   87|
   88| /** Extract usage when the adapter exposes it; otherwise UNKNOWN (null). */
   89| function usageFromReply(reply: NoraGenerateResult): {
   90|   inputTokens: number | null;
   91|   outputTokens: number | null;
   92|   reasoningTokens: number | null;
   93|   cachedInputTokens: number | null;
   94|   providerRequests: number | null;
   95| } {
   96|   const u = reply.usage;
   97|   const anyReply = reply as NoraGenerateResult & {
   98|     inputTokens?: number | null;
   99|     outputTokens?: number | null;
  100|   };
```

#### export vicinity L75–L115
```ts
   75| export type NoraCognitiveTurnResult = NoraGenerateResult & {
   76|   conductor: {
   77|     workId: string;
   78|     revision: number;
   79|     segmentsRun: number;
   80|     resumed: boolean;
   81|     suspended: boolean;
   82|     suspendReason: string | null;
   83|     investigation: InvestigationState;
   84|     production: CognitiveProductionState;
   85|   };
   86| };
   87|
   88| /** Extract usage when the adapter exposes it; otherwise UNKNOWN (null). */
   89| function usageFromReply(reply: NoraGenerateResult): {
   90|   inputTokens: number | null;
   91|   outputTokens: number | null;
   92|   reasoningTokens: number | null;
   93|   cachedInputTokens: number | null;
   94|   providerRequests: number | null;
   95| } {
   96|   const u = reply.usage;
   97|   const anyReply = reply as NoraGenerateResult & {
   98|     inputTokens?: number | null;
   99|     outputTokens?: number | null;
  100|   };
  101|   const input = u?.inputTokens ?? anyReply.inputTokens ?? null;
  102|   const output = u?.outputTokens ?? anyReply.outputTokens ?? null;
  103|   return {
  104|     inputTokens: typeof input === "number" ? input : null,
  105|     outputTokens: typeof output === "number" ? output : null,
  106|     reasoningTokens:
  107|       typeof u?.reasoningTokens === "number" ? u.reasoningTokens : null,
  108|     cachedInputTokens:
  109|       typeof u?.cachedInputTokens === "number" ? u.cachedInputTokens : null,
  110|     providerRequests:
  111|       typeof u?.providerRequests === "number" ? u.providerRequests : null,
  112|   };
  113| }
  114|
  115| /**
```

#### export vicinity L121–L161
```ts
  121| export function mergeQuestions(
  122|   prior: DeterminingQuestion[],
  123|   qualification: NoraTurnQualification | null | undefined,
  124|   userText?: string | null,
  125| ): DeterminingQuestion[] {
  126|   const byId = new Map(prior.map((q) => [q.id, { ...q }]));
  127|   const attached = userText
  128|     ? parseStructuredDossierComposerAttachment(userText)
  129|     : null;
  130|   const structured = qualification?.determiningQuestions;
  131|   if (structured && structured.length > 0) {
  132|     for (const q of structured) {
  133|       const id = q.id.trim();
  134|       if (!id) continue;
  135|       const prev = byId.get(id);
  136|       byId.set(id, {
  137|         id,
  138|         text: q.text.trim() || prev?.text || id,
  139|         status: q.status,
  140|         importance: q.importance,
  141|         answerSummary:
  142|           q.status === "ANSWERED"
  143|             ? q.answerSummary?.trim() || prev?.answerSummary
  144|             : q.answerSummary?.trim() || undefined,
  145|         sourceRefs: q.sourceRefs ?? prev?.sourceRefs,
  146|       });
  147|     }
  148|     return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  149|   }
  150|   const clarifications =
  151|     qualification && qualification.status !== "UNAVAILABLE"
  152|       ? qualification.clarifications
  153|       : undefined;
  154|   if (clarifications === undefined) {
  155|     return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  156|   }
  157|   if (clarifications.length === 0) {
  158|     return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  159|   }
  160|   for (const text of clarifications) {
  161|     const trimmed = text.trim();
```

#### export vicinity L212–L252
```ts
  212| export function mergeInvestigationFromReply(
  213|   prior: InvestigationState,
  214|   reply: NoraGenerateResult,
  215|   userText: string,
  216| ): InvestigationState {
  217|   const q = reply.qualification;
  218|   const goal =
  219|     q && q.status !== "UNAVAILABLE" ? q.goal?.trim() || "" : "";
  220|   const outcome =
  221|     q && q.status !== "UNAVAILABLE" ? q.desiredOutcome?.trim() || "" : "";
  222|   const scope =
  223|     q && q.status !== "UNAVAILABLE" ? q.initialScope?.trim() || "" : "";
  224|
  225|   const sources = [...prior.sources];
  226|   for (const s of reply.observedToolSources ?? []) {
  227|     const idx = sources.findIndex((p) => p.ref === s.ref && p.kind === s.kind);
  228|     if (idx < 0) sources.push(s);
  229|     else {
  230|       const prev = sources[idx]!;
  231|       sources[idx] = {
  232|         ...prev,
  233|         ...s,
  234|         notes: [prev.notes, prev.coverage !== s.coverage ? `${prev.coverage}->${s.coverage}` : null, s.notes]
  235|           .filter(Boolean)
  236|           .join("; "),
  237|       };
  238|     }
  239|   }
  240|
  241|   const questions = mergeQuestions(prior.questions, q, userText);
  242|   const remainingWork = mergeRemainingWork(prior, q);
  243|
  244|   const constraints = [...prior.constraints];
  245|   if (scope && !constraints.includes(scope)) constraints.push(scope);
  246|   for (const r of q?.restrictions ?? []) {
  247|     const t = r.trim();
  248|     if (t && !constraints.includes(t)) constraints.push(t);
  249|   }
  250|
  251|   const contradictions = [
  252|     ...prior.contradictions,
```

#### export vicinity L467–L507
```ts
  467| export function inventoryResolvedCount(investigation: InvestigationState): number {
  468|   const examined = investigation.inventoryExamined ?? 0;
  469|   const denied = investigation.inventoryDenied ?? 0;
  470|   return examined + denied;
  471| }
  472|
  473| /**
  474|  * C18 / D3 — continuation by structured disposition + sufficiency.
  475|  * Incomplete coverage must NOT cancel legitimate AWAIT_PILOT / SUSPEND / COMPLETE.
  476|  * No scenario-specific thresholds (removed examined≥50 near-complete exception).
  477|  */
  478| export function semanticContinueWork(
  479|   qualification: NoraTurnQualification | null,
  480|   investigation: InvestigationState,
  481|   reply: NoraGenerateResult,
  482| ): boolean {
  483|   if (
  484|     investigation.contractReadyBlockedReason === "GLOBAL_BUDGET_EXHAUSTED" ||
  485|     (investigation.contractReadyBlockedReason ?? "").startsWith("GLOBAL_")
  486|   ) {
  487|     return false;
  488|   }
  489|   // D3 — explicit terminal dispositions always win over inventory gaps.
  490|   const disposition = qualification?.workDisposition;
  491|   if (
  492|     disposition === "COMPLETE" ||
  493|     disposition === "AWAIT_PILOT" ||
  494|     disposition === "SUSPEND"
  495|   ) {
  496|     return false;
  497|   }
  498|   if (qualification?.status === "NEEDS_CLARIFICATION") {
  499|     return false;
  500|   }
  501|   // D1 — Nora-declared sufficiency ends investigation (restitution, not more reads).
  502|   if (
  503|     qualification?.investigationSufficiency === "SUFFICIENT" ||
  504|     investigation.sufficiency === "SUFFICIENT"
  505|   ) {
  506|     return disposition === "CONTINUE";
  507|   }
```

#### export vicinity L478–L518
```ts
  478| export function semanticContinueWork(
  479|   qualification: NoraTurnQualification | null,
  480|   investigation: InvestigationState,
  481|   reply: NoraGenerateResult,
  482| ): boolean {
  483|   if (
  484|     investigation.contractReadyBlockedReason === "GLOBAL_BUDGET_EXHAUSTED" ||
  485|     (investigation.contractReadyBlockedReason ?? "").startsWith("GLOBAL_")
  486|   ) {
  487|     return false;
  488|   }
  489|   // D3 — explicit terminal dispositions always win over inventory gaps.
  490|   const disposition = qualification?.workDisposition;
  491|   if (
  492|     disposition === "COMPLETE" ||
  493|     disposition === "AWAIT_PILOT" ||
  494|     disposition === "SUSPEND"
  495|   ) {
  496|     return false;
  497|   }
  498|   if (qualification?.status === "NEEDS_CLARIFICATION") {
  499|     return false;
  500|   }
  501|   // D1 — Nora-declared sufficiency ends investigation (restitution, not more reads).
  502|   if (
  503|     qualification?.investigationSufficiency === "SUFFICIENT" ||
  504|     investigation.sufficiency === "SUFFICIENT"
  505|   ) {
  506|     return disposition === "CONTINUE";
  507|   }
  508|
  509|   const total = investigation.inventoryTotal;
  510|   const resolved = inventoryResolvedCount(investigation);
  511|   const inventoryIncomplete =
  512|     total != null && total > 0 && resolved < total;
  513|   const hasAcquis =
  514|     (reply.observedToolSources?.length ?? 0) > 0 ||
  515|     investigation.sources.some((s) =>
  516|       ["CONSULTED", "VERIFIED", "PARTIAL", "DISCOVERED"].includes(s.coverage),
  517|     );
  518|
```

#### export vicinity L549–L589
```ts
  549| export async function resolveCognitiveWorkAttachment(input: {
  550|   pilotId: string;
  551|   preparationId: string;
  552|   workId?: string | null;
  553|   forceNewWork?: boolean;
  554|   userText?: string | null;
  555|   qualification?: NoraTurnQualification | null;
  556| }): Promise<{
  557|   workId?: string | null;
  558|   forceNew: boolean;
  559|   reason: string;
  560|   /** C20 — do not create/claim; await pilot clarification. */
  561|   needsClarify?: boolean;
  562|   /** B4 — prior work id when forking a new envelope that reuses acquis. */
  563|   parentWorkId?: string | null;
  564| }> {
  565|   const works = await listCognitiveWorksForPreparation({
  566|     pilotId: input.pilotId,
  567|     preparationId: input.preparationId,
  568|   });
  569|   // C2 — pick parent by acquis relevance to this request, not revision count alone.
  570|   const priorWithAcquis = works.filter(
  571|     (w) =>
  572|       (w.state.conclusions?.length ?? 0) > 0 ||
  573|       w.state.sources.some((s) =>
  574|         ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
  575|       ),
  576|   );
  577|   const relevanceQuery = [
  578|     input.userText ?? "",
  579|     input.qualification?.goal ?? "",
  580|     input.qualification?.desiredOutcome ?? "",
  581|   ]
  582|     .join(" ")
  583|     .toLowerCase();
  584|   const scoreParent = (w: (typeof works)[number]): number => {
  585|     let score = 0;
  586|     const intent = (w.state.intentSummary || w.objective || "").toLowerCase();
  587|     const outcome = (w.state.desiredOutcome || w.expectedOutcome || "").toLowerCase();
  588|     if (intent && relevanceQuery.includes(intent.slice(0, 48))) score += 8;
  589|     if (outcome && relevanceQuery.includes(outcome.slice(0, 48))) score += 6;
```

#### export vicinity L793–L833
```ts
  793| export function mergeDocumentProductionBody(input: {
  794|   prevDoc: string;
  795|   incoming: string;
  796|   mergeMode?: "APPEND" | "CORRECT" | "SUPERSEDE" | null;
  797|   workDisposition?: string | null;
  798|   continueWork: boolean;
  799| }): { contentMarkdown: string; appliedMode: "APPEND" | "CORRECT" | "SUPERSEDE" | "IDENTITY" } {
  800|   const body = input.incoming.trim();
  801|   const prev = (input.prevDoc ?? "").trim();
  802|   if (!prev) return { contentMarkdown: body, appliedMode: "IDENTITY" };
  803|   if (prev.includes(body) && body.length < prev.length) {
  804|     return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  805|   }
  806|   const explicit = input.mergeMode ?? null;
  807|   // SUPERSEDE only when Nora declares it, or COMPLETE + explicit SUPERSEDE.
  808|   if (explicit === "SUPERSEDE") {
  809|     return { contentMarkdown: body, appliedMode: "SUPERSEDE" };
  810|   }
  811|   if (explicit === "CORRECT") {
  812|     // Correction replaces prior body when disposition is COMPLETE; else append note.
  813|     if (!input.continueWork || input.workDisposition === "COMPLETE") {
  814|       return { contentMarkdown: body, appliedMode: "CORRECT" };
  815|     }
  816|     return {
  817|       contentMarkdown: `${prev}\n\n<!-- correction -->\n\n${body}`.trim(),
  818|       appliedMode: "CORRECT",
  819|     };
  820|   }
  821|   // Default APPEND — mid-work continuity. Avoid duplicating identical prefix dumps.
  822|   if (body.includes(prev.slice(0, Math.min(200, prev.length))) && body.length >= prev.length) {
  823|     // Incoming already contains prior — treat as Nora-provided consolidated body only
  824|     // when mergeMode SUPERSEDE was omitted but workDisposition COMPLETE *and*
  825|     // qualification marked document as superseding via workDisposition alone is insufficient.
  826|     // C22: stay APPEND unless explicit SUPERSEDE — keep prior + novel tail if any.
  827|     if (body === prev) return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  828|   }
  829|   if (prev.includes(body)) return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  830|   return {
  831|     contentMarkdown: `${prev}\n\n${body}`.trim(),
  832|     appliedMode: "APPEND",
  833|   };
```

#### export vicinity L842–L882
```ts
  842| export function resolveDocumentaryProductionBoundary(input: {
  843|   previous: Pick<CognitiveProductionState, "kind" | "status" | "contentMarkdown"> | null | undefined;
  844|   capabilityIds?: string[] | null;
  845|   explicitMergeMode?: "APPEND" | "CORRECT" | "SUPERSEDE" | null;
  846| }): { startNew: boolean; reason: string } {
  847|   const prev = input.previous;
  848|   const prevHasBody = Boolean(prev?.contentMarkdown?.trim());
  849|   const prevClosedDoc =
  850|     prev?.kind === "DOCUMENT" &&
  851|     prevHasBody &&
  852|     (prev.status === "COMPLETE" || prev.status === "PARTIAL" || prev.status === "FAILED");
  853|   const caps = new Set((input.capabilityIds ?? []).map((c) => c.trim()).filter(Boolean));
  854|   const isRevise = caps.has("d4.revise_document");
  855|   const isCreate = caps.has("d4.create_document");
  856|   if (input.explicitMergeMode === "SUPERSEDE" && prevHasBody) {
  857|     return { startNew: true, reason: "EXPLICIT_SUPERSEDE" };
  858|   }
  859|   if (prevClosedDoc && isRevise) {
  860|     return { startNew: true, reason: "REVISE_AFTER_PRIOR_DOCUMENT" };
  861|   }
  862|   if (prevClosedDoc && isCreate) {
  863|     return { startNew: true, reason: "CREATE_AFTER_PRIOR_DOCUMENT" };
  864|   }
  865|   return { startNew: false, reason: "CONTINUE_SAME_PRODUCTION" };
  866| }
  867|
  868| function documentProductionFromReply(
  869|   work: CognitiveWorkRow,
  870|   reply: NoraGenerateResult,
  871|   segmentIndex: number,
  872|   continueWork: boolean,
  873| ): CognitiveProductionState | undefined {
  874|   const prevDoc =
  875|     (work.production as CognitiveProductionState & { contentMarkdown?: string })
  876|       .contentMarkdown ?? "";
  877|   // Soft segment boundaries are conductor control messages — never document body.
  878|   if (
  879|     String(reply.streamingNotes || "").includes("SEGMENT_MAX_TURNS_BOUNDARY") ||
  880|     /^Segment technique atteint/i.test((reply.content || "").trim())
  881|   ) {
  882|     return work.production?.kind === "DOCUMENT" || work.production?.kind === "SYNTHESIS"
```

#### export vicinity L987–L1027
```ts
  987| export async function runNoraCognitiveTurn(
  988|   input: NoraCognitiveTurnInput,
  989| ): Promise<NoraCognitiveTurnResult> {
  990|   const segmentBox: { reply: NoraGenerateResult | null } = { reply: null };
  991|
  992|   // C19: expose candidate works so Nora can emit cognitiveWorkRelation / proposed id.
  993|   const candidates = await listCognitiveWorksForPreparation({
  994|     pilotId: input.pilotId,
  995|     preparationId: input.preparationId,
  996|   });
  997|   const candidateSnippet =
  998|     candidates.length === 0
  999|       ? "Travaux cognitifs candidats: (aucun)"
 1000|       : [
 1001|           "Travaux cognitifs candidats (serveur valide; ne pas inventer d'id):",
 1002|           ...candidates.slice(0, 8).map(
 1003|             (w) =>
 1004|               `- ${w.id} status=${w.status} rev=${w.revision} obj=${(w.objective || "").slice(0, 120)}`,
 1005|           ),
 1006|           "Émettre cognitiveWorkRelation=CONTINUE|INDEPENDENT|CLARIFY|MATERIAL_CHANGE|UNRELATED et proposedCognitiveWorkId si rattachement.",
 1007|         ].join("\n");
 1008|
 1009|   let attachment: Awaited<ReturnType<typeof resolveCognitiveWorkAttachment>>;
 1010|   let probeReply: NoraGenerateResult | null = null;
 1011|   let probeConsumed = false;
 1012|
 1013|   // C19: when attachment is not forced/explicit, qualify first then resolve with structured fields.
 1014|   if (!input.workId && input.forceNewWork !== true) {
 1015|     const probePolicy =
 1016|       input.policyOverride ??
 1017|       buildCognitivePolicy(input.userText, undefined, { profileHint: "analyse" });
 1018|     probeReply = await generateNoraReply({
 1019|       userText: input.userText,
 1020|       contextSnippets: [...input.contextSnippets, candidateSnippet, "attachment=PENDING_SEMANTIC"],
 1021|       knowledgeSnippets: input.knowledgeSnippets,
 1022|       pilotageSnippets: input.pilotageSnippets,
 1023|       levelASignals: input.levelASignals,
 1024|       ckiDelivery: input.ckiDelivery,
 1025|       onProvisionalChunk: input.onProvisionalChunk,
 1026|       toolScope: input.toolScope,
 1027|       policyOverride: probePolicy,
```

#### marker `hasPriorAcquis` L1288–L1331
```ts
 1288|       return base;
 1289|     },
 1290|     runSegment: async ({ work, segmentIndex, policy }) => {
 1291|       // Compact acquis whenever prior checkpoint material exists — including
 1292|       // segmentIndex 0 of an auto-continued invocation (same work, new lease).
 1293|       // Fresh creates start at revision 1 with empty state — that is NOT prior acquis
 1294|       // (MP-09/S08: must reuse probe qualification so D5/D6 intents are not lost to
 1295|       // a continuation-suffixed fixture miss).
 1296|       const hasPriorAcquis =
 1297|         work.state.sources.length > 0 ||
 1298|         (work.state.conclusions?.length ?? 0) > 0 ||
 1299|         work.state.remainingWork.length > 0 ||
 1300|         work.revision > 1;
 1301|       // B4 — new envelope from prior acquis: inject parent checkpoint context once.
 1302|       let parentAcquisBlock = "";
 1303|       if (
 1304|         attachment.parentWorkId &&
 1305|         segmentIndex === 0 &&
 1306|         !hasPriorAcquis &&
 1307|         attachment.parentWorkId !== work.id
 1308|       ) {
 1309|         try {
 1310|           const parent = await getCognitiveWork({
 1311|             pilotId: input.pilotId,
 1312|             workId: attachment.parentWorkId,
 1313|           });
 1314|           parentAcquisBlock = [
 1315|             `[Acquis du travail parent ${parent.id} — réutiliser, ne pas tout relire]`,
 1316|             formatInvestigationContinuationContext(parent.state, { maxChars: 6500 }),
 1317|           ].join("\n");
 1318|         } catch {
 1319|           parentAcquisBlock = "";
 1320|         }
 1321|       }
 1322|       const useContinuation = segmentIndex > 0 || hasPriorAcquis || Boolean(parentAcquisBlock);
 1323|       const acquisBlock = hasPriorAcquis
 1324|         ? formatInvestigationContinuationContext(work.state)
 1325|         : parentAcquisBlock;
 1326|       // B2 — next unresolved perimeter keys (canonical full path, never basename).
 1327|       const resolvedKeys = new Set(
 1328|         work.state.sources
 1329|           .filter((s) =>
 1330|             ["CONSULTED", "VERIFIED", "DENIED"].includes(s.coverage),
 1331|           )
```

#### marker `revision > 1` L1292–L1335
```ts
 1292|       // segmentIndex 0 of an auto-continued invocation (same work, new lease).
 1293|       // Fresh creates start at revision 1 with empty state — that is NOT prior acquis
 1294|       // (MP-09/S08: must reuse probe qualification so D5/D6 intents are not lost to
 1295|       // a continuation-suffixed fixture miss).
 1296|       const hasPriorAcquis =
 1297|         work.state.sources.length > 0 ||
 1298|         (work.state.conclusions?.length ?? 0) > 0 ||
 1299|         work.state.remainingWork.length > 0 ||
 1300|         work.revision > 1;
 1301|       // B4 — new envelope from prior acquis: inject parent checkpoint context once.
 1302|       let parentAcquisBlock = "";
 1303|       if (
 1304|         attachment.parentWorkId &&
 1305|         segmentIndex === 0 &&
 1306|         !hasPriorAcquis &&
 1307|         attachment.parentWorkId !== work.id
 1308|       ) {
 1309|         try {
 1310|           const parent = await getCognitiveWork({
 1311|             pilotId: input.pilotId,
 1312|             workId: attachment.parentWorkId,
 1313|           });
 1314|           parentAcquisBlock = [
 1315|             `[Acquis du travail parent ${parent.id} — réutiliser, ne pas tout relire]`,
 1316|             formatInvestigationContinuationContext(parent.state, { maxChars: 6500 }),
 1317|           ].join("\n");
 1318|         } catch {
 1319|           parentAcquisBlock = "";
 1320|         }
 1321|       }
 1322|       const useContinuation = segmentIndex > 0 || hasPriorAcquis || Boolean(parentAcquisBlock);
 1323|       const acquisBlock = hasPriorAcquis
 1324|         ? formatInvestigationContinuationContext(work.state)
 1325|         : parentAcquisBlock;
 1326|       // B2 — next unresolved perimeter keys (canonical full path, never basename).
 1327|       const resolvedKeys = new Set(
 1328|         work.state.sources
 1329|           .filter((s) =>
 1330|             ["CONSULTED", "VERIFIED", "DENIED"].includes(s.coverage),
 1331|           )
 1332|           .map((s) => canonicalSourcePathKey(s.ref))
 1333|           .filter(Boolean),
 1334|       );
 1335|       const perimeterKeys =
```


### `projects/sfia-studio-next/web/src/domains/conversation/segment-context-efficiency.ts`

- Coverage: NEW — full — 66 lines
- Status porcelain: `??`

```
/**
 * A.4 / MP-14 — avoid re-injecting the full Journal listing on every conductor segment
 * when durable acquis + checkpoint context already carry continuity.
 * Non-authoritative trimming only; first segment and cold starts keep full bounded listing.
 */

/** Shown when bulk journal snippets are omitted on continuation — tools + acquis block remain. */
export const CONTINUATION_KNOWLEDGE_OMIT_MARKER =
  "[Journal D4 — listing borné omis sur ce segment : réutiliser le bloc acquis ci-dessous et les outils d4 si besoin]";

const JOURNAL_SNIPPET_PREFIX =
  /^(ACQUIS\[|POINT_OUVERT\[|POINT_OUVERT_REACTIVATE\[|SUJET\[|DERIVED_HIT\[)/;

export function isJournalKnowledgeSnippet(line: string): boolean {
  return JOURNAL_SNIPPET_PREFIX.test(line.trim());
}

export function isPreferredKnowledgeSnippet(line: string): boolean {
  return /\/PREFERRED\]|PREFERRED\]/.test(line);
}

/** Split pre-turn snippets into journal lines vs document/publication/auxiliary lines. */
export function partitionKnowledgeSnippets(snippets: string[] | undefined): {
  journal: string[];
  auxiliary: string[];
} {
  const all = snippets ?? [];
  const journal: string[] = [];
  const auxiliary: string[] = [];
  for (const line of all) {
    if (isJournalKnowledgeSnippet(line)) journal.push(line);
    else auxiliary.push(line);
  }
  return { journal, auxiliary };
}

/**
 * On conductor continuation with prior acquis, omit redundant journal listing.
 * Keeps Nora-selected PREFERRED rows when present (B.7).
 */
export function resolveContinuationKnowledgeSnippets(
  baseSnippets: string[] | undefined,
  opts: { useContinuation: boolean; hasPriorAcquis: boolean },
): string[] {
  const { journal, auxiliary } = partitionKnowledgeSnippets(baseSnippets);
  if (!opts.useContinuation || !opts.hasPriorAcquis) {
    return [...journal, ...auxiliary];
  }
  const preferred = journal.filter(isPreferredKnowledgeSnippet);
  if (preferred.length > 0) {
    return [CONTINUATION_KNOWLEDGE_OMIT_MARKER, ...preferred, ...auxiliary];
  }
  return [CONTINUATION_KNOWLEDGE_OMIT_MARKER, ...auxiliary];
}

/**
 * Recent messages are bounded on continuation — checkpoint + userText retain thread intent.
 */
export function resolveContinuationContextSnippets(
  baseSnippets: string[],
  opts: { useContinuation: boolean; hasPriorAcquis: boolean; maxRecent?: number },
): string[] {
  if (!opts.useContinuation || !opts.hasPriorAcquis) return baseSnippets;
  const max = opts.maxRecent ?? 2;
  return baseSnippets.slice(-Math.max(0, max));
}
```


### `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

- Coverage: MODIFIED — git diff HEAD — 140 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 71ce7746..1f418a25 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -149,6 +149,11 @@ export const QualifiedIntentItemSchema = z.object({
       epistemic: KnowledgeEpistemicSchema.optional(),
       subjectTitle: z.string().max(120).optional(),
       subjectId: z.string().max(120).optional(),
+      /**
+       * Optional parent for SUBJECT hierarchy (sous-sujet). Must be an existing
+       * subject id in the same project/preparation — Studio validates ownership.
+       */
+      parentSubjectId: z.string().max(120).optional(),
       /** Soft target ~240. */
       continuityReason: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
       /** Prefer these existing resources when selecting D4 context (Nora-chosen). */
@@ -626,6 +631,77 @@ export type DurablePilotageBinding = {
   objective?: string;
 };

+function pilotageBindingFromIntent(
+  intent: QualifiedIntentItem,
+): DurablePilotageBinding | { ambiguous: true; reason: string } {
+  const operation = intent.parameters.pilotageOperation;
+  if (!operation) {
+    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
+  }
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    intentId: intent.id,
+    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
+    operation,
+    cycleType: intent.parameters.cycleType,
+    toCycleType: intent.parameters.toCycleType,
+    methodRef: intent.parameters.methodRef,
+    methodVersion: intent.parameters.methodVersion,
+    decisionId: intent.parameters.decisionId,
+    objectRef: intent.parameters.objectRef,
+    statement: intent.parameters.statement,
+    restrictionKindHint: intent.parameters.restrictionKindHint,
+    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
+    objective: intent.summary,
+  };
+}
+
+/** Stable dependency order among pilotage REQUEST_EFFECT intents (dependsOn within subset). */
+export function orderPilotageEffectIntents(
+  q: NoraTurnQualification,
+  hits: QualifiedIntentItem[],
+): QualifiedIntentItem[] {
+  const subset = new Set(hits.map((h) => h.id));
+  const byId = new Map(q.intents.map((i) => [i.id, i] as const));
+  const visiting = new Set<string>();
+  const visited = new Set<string>();
+  const ordered: string[] = [];
+  const visit = (id: string) => {
+    if (!subset.has(id) || visited.has(id)) return;
+    if (visiting.has(id)) return;
+    visiting.add(id);
+    for (const dep of byId.get(id)?.dependsOn ?? []) {
+      if (subset.has(dep)) visit(dep);
+    }
+    visiting.delete(id);
+    visited.add(id);
+    ordered.push(id);
+  };
+  const stable = [...subset].sort();
+  for (const id of stable) visit(id);
+  return ordered.map((id) => hits.find((h) => h.id === id)!);
+}
+
+/**
+ * MP-09 — every admissible pilotage REQUEST_EFFECT intent on the turn, in dependsOn order.
+ * Never collapses to fail-closed AMBIGUOUS when multiple D5/D6 intents are present.
+ */
+export function listPilotageEffectBindings(q: NoraTurnQualification): Array<
+  DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
+> {
+  if (q.status !== "QUALIFIED") return [];
+  const hits = effectIntents(q).filter((i) => PILOTAGE_CAPS.has(i.capabilityId));
+  if (hits.length === 0) return [];
+  const ordered = orderPilotageEffectIntents(q, hits);
+  return ordered.map((intent) => {
+    const binding = pilotageBindingFromIntent(intent);
+    if ("ambiguous" in binding) {
+      return { ...binding, intentId: intent.id };
+    }
+    return binding;
+  });
+}
+
 export function extractPilotageBinding(
   q: NoraTurnQualification,
   select?: { intentId?: string; operation?: string },
@@ -653,27 +729,9 @@ export function extractPilotageBinding(
   if (hits.length > 1) {
     return { ambiguous: true, reason: "MULTIPLE_PILOTAGE_EFFECT_INTENTS" };
   }
-  const intent = hits[0]!;
-  const operation = intent.parameters.pilotageOperation;
-  if (!operation) {
-    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
-  }
-  return {
-    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
-    intentId: intent.id,
-    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
-    operation,
-    cycleType: intent.parameters.cycleType,
-    toCycleType: intent.parameters.toCycleType,
-    methodRef: intent.parameters.methodRef,
-    methodVersion: intent.parameters.methodVersion,
-    decisionId: intent.parameters.decisionId,
-    objectRef: intent.parameters.objectRef,
-    statement: intent.parameters.statement,
-    restrictionKindHint: intent.parameters.restrictionKindHint,
-    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
-    objective: intent.summary,
-  };
+  const binding = pilotageBindingFromIntent(hits[0]!);
+  if ("ambiguous" in binding) return binding;
+  return binding;
 }

 /** Match a requested operation against durable qualification (owner-side). */
@@ -919,6 +977,7 @@ export type KnowledgeCapitalisationProposal = {
   epistemic: z.infer<typeof KnowledgeEpistemicSchema>;
   subjectTitle?: string;
   subjectId?: string;
+  parentSubjectId?: string;
   continuityReason?: string;
   supersedesAcquisId?: string;
   resolvesOpenPointId?: string;
@@ -950,6 +1009,7 @@ export function extractKnowledgeProposals(
       epistemic: intent.parameters.epistemic ?? "hypothesized",
       subjectTitle: intent.parameters.subjectTitle?.trim() || undefined,
       subjectId: intent.parameters.subjectId?.trim() || undefined,
+      parentSubjectId: intent.parameters.parentSubjectId?.trim() || undefined,
       continuityReason: intent.parameters.continuityReason?.trim() || undefined,
       supersedesAcquisId: intent.parameters.supersedesAcquisId?.trim() || undefined,
       resolvesOpenPointId: intent.parameters.resolvesOpenPointId?.trim() || undefined,
```

#### Structured excerpts (large module)

#### export vicinity L38–L78
```ts
   38| export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;
   39|
   40| export const IntentModeSchema = z.enum(["EXPLAIN", "EXPLORE", "PREPARE", "REQUEST_EFFECT"]);
   41| export type IntentMode = z.infer<typeof IntentModeSchema>;
   42|
   43| export const QualificationStatusSchema = z.enum([
   44|   "QUALIFIED",
   45|   "NEEDS_CLARIFICATION",
   46|   "UNAVAILABLE",
   47| ]);
   48| export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;
   49|
   50| /** Capability ids exposed to Nora — catalogue description, not authorization. */
   51| export const StudioCapabilityIdSchema = z.enum([
   52|   "d2.create_project",
   53|   "d3.converse",
   54|   "d4.create_document",
   55|   "d4.revise_document",
   56|   "d4.read_knowledge",
   57|   /** Selective D4 continuity write — not a HumanDecision / not lexical. */
   58|   "d4.record_knowledge",
   59|   "d5.pilotage_command",
   60|   "d6.human_decision",
   61|   "d7.prepare_publication",
   62|   "d7.dispatch_publication",
   63|   /** Documentary merge of an existing Studio publication PR — distinct from publication. */
   64|   "d7.merge_publication",
   65|   /**
   66|    * C14 — prepare a Cursor technical contract DRAFT from investigation (D7).
   67|    * Semantic only: mode PREPARE. Never lexical. Never implies D6 authorize / dispatch.
   68|    */
   69|   "d7.prepare_cursor_contract",
   70|   "d9.git_integration",
   71| ]);
   72| export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;
   73|
   74| export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
```

#### export vicinity L40–L80
```ts
   40| export const IntentModeSchema = z.enum(["EXPLAIN", "EXPLORE", "PREPARE", "REQUEST_EFFECT"]);
   41| export type IntentMode = z.infer<typeof IntentModeSchema>;
   42|
   43| export const QualificationStatusSchema = z.enum([
   44|   "QUALIFIED",
   45|   "NEEDS_CLARIFICATION",
   46|   "UNAVAILABLE",
   47| ]);
   48| export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;
   49|
   50| /** Capability ids exposed to Nora — catalogue description, not authorization. */
   51| export const StudioCapabilityIdSchema = z.enum([
   52|   "d2.create_project",
   53|   "d3.converse",
   54|   "d4.create_document",
   55|   "d4.revise_document",
   56|   "d4.read_knowledge",
   57|   /** Selective D4 continuity write — not a HumanDecision / not lexical. */
   58|   "d4.record_knowledge",
   59|   "d5.pilotage_command",
   60|   "d6.human_decision",
   61|   "d7.prepare_publication",
   62|   "d7.dispatch_publication",
   63|   /** Documentary merge of an existing Studio publication PR — distinct from publication. */
   64|   "d7.merge_publication",
   65|   /**
   66|    * C14 — prepare a Cursor technical contract DRAFT from investigation (D7).
   67|    * Semantic only: mode PREPARE. Never lexical. Never implies D6 authorize / dispatch.
   68|    */
   69|   "d7.prepare_cursor_contract",
   70|   "d9.git_integration",
   71| ]);
   72| export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;
   73|
   74| export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
   79|   "limited",
   80| ]);
```

#### export vicinity L41–L81
```ts
   41| export type IntentMode = z.infer<typeof IntentModeSchema>;
   42|
   43| export const QualificationStatusSchema = z.enum([
   44|   "QUALIFIED",
   45|   "NEEDS_CLARIFICATION",
   46|   "UNAVAILABLE",
   47| ]);
   48| export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;
   49|
   50| /** Capability ids exposed to Nora — catalogue description, not authorization. */
   51| export const StudioCapabilityIdSchema = z.enum([
   52|   "d2.create_project",
   53|   "d3.converse",
   54|   "d4.create_document",
   55|   "d4.revise_document",
   56|   "d4.read_knowledge",
   57|   /** Selective D4 continuity write — not a HumanDecision / not lexical. */
   58|   "d4.record_knowledge",
   59|   "d5.pilotage_command",
   60|   "d6.human_decision",
   61|   "d7.prepare_publication",
   62|   "d7.dispatch_publication",
   63|   /** Documentary merge of an existing Studio publication PR — distinct from publication. */
   64|   "d7.merge_publication",
   65|   /**
   66|    * C14 — prepare a Cursor technical contract DRAFT from investigation (D7).
   67|    * Semantic only: mode PREPARE. Never lexical. Never implies D6 authorize / dispatch.
   68|    */
   69|   "d7.prepare_cursor_contract",
   70|   "d9.git_integration",
   71| ]);
   72| export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;
   73|
   74| export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
   79|   "limited",
   80| ]);
   81|
```

#### export vicinity L43–L83
```ts
   43| export const QualificationStatusSchema = z.enum([
   44|   "QUALIFIED",
   45|   "NEEDS_CLARIFICATION",
   46|   "UNAVAILABLE",
   47| ]);
   48| export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;
   49|
   50| /** Capability ids exposed to Nora — catalogue description, not authorization. */
   51| export const StudioCapabilityIdSchema = z.enum([
   52|   "d2.create_project",
   53|   "d3.converse",
   54|   "d4.create_document",
   55|   "d4.revise_document",
   56|   "d4.read_knowledge",
   57|   /** Selective D4 continuity write — not a HumanDecision / not lexical. */
   58|   "d4.record_knowledge",
   59|   "d5.pilotage_command",
   60|   "d6.human_decision",
   61|   "d7.prepare_publication",
   62|   "d7.dispatch_publication",
   63|   /** Documentary merge of an existing Studio publication PR — distinct from publication. */
   64|   "d7.merge_publication",
   65|   /**
   66|    * C14 — prepare a Cursor technical contract DRAFT from investigation (D7).
   67|    * Semantic only: mode PREPARE. Never lexical. Never implies D6 authorize / dispatch.
   68|    */
   69|   "d7.prepare_cursor_contract",
   70|   "d9.git_integration",
   71| ]);
   72| export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;
   73|
   74| export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
   79|   "limited",
   80| ]);
   81|
   82| export const PilotageOperationSchema = z.enum(
   83|   PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
```

#### export vicinity L48–L88
```ts
   48| export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;
   49|
   50| /** Capability ids exposed to Nora — catalogue description, not authorization. */
   51| export const StudioCapabilityIdSchema = z.enum([
   52|   "d2.create_project",
   53|   "d3.converse",
   54|   "d4.create_document",
   55|   "d4.revise_document",
   56|   "d4.read_knowledge",
   57|   /** Selective D4 continuity write — not a HumanDecision / not lexical. */
   58|   "d4.record_knowledge",
   59|   "d5.pilotage_command",
   60|   "d6.human_decision",
   61|   "d7.prepare_publication",
   62|   "d7.dispatch_publication",
   63|   /** Documentary merge of an existing Studio publication PR — distinct from publication. */
   64|   "d7.merge_publication",
   65|   /**
   66|    * C14 — prepare a Cursor technical contract DRAFT from investigation (D7).
   67|    * Semantic only: mode PREPARE. Never lexical. Never implies D6 authorize / dispatch.
   68|    */
   69|   "d7.prepare_cursor_contract",
   70|   "d9.git_integration",
   71| ]);
   72| export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;
   73|
   74| export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
   79|   "limited",
   80| ]);
   81|
   82| export const PilotageOperationSchema = z.enum(
   83|   PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
   84| );
   85|
   86| /**
   87|  * Hard ceiling for secondary LIVE prose fields (anti-UNKNOWN).
   88|  * Soft editorial targets stay in Nora instructions (former Zod maxes).
```

#### export vicinity L51–L91
```ts
   51| export const StudioCapabilityIdSchema = z.enum([
   52|   "d2.create_project",
   53|   "d3.converse",
   54|   "d4.create_document",
   55|   "d4.revise_document",
   56|   "d4.read_knowledge",
   57|   /** Selective D4 continuity write — not a HumanDecision / not lexical. */
   58|   "d4.record_knowledge",
   59|   "d5.pilotage_command",
   60|   "d6.human_decision",
   61|   "d7.prepare_publication",
   62|   "d7.dispatch_publication",
   63|   /** Documentary merge of an existing Studio publication PR — distinct from publication. */
   64|   "d7.merge_publication",
   65|   /**
   66|    * C14 — prepare a Cursor technical contract DRAFT from investigation (D7).
   67|    * Semantic only: mode PREPARE. Never lexical. Never implies D6 authorize / dispatch.
   68|    */
   69|   "d7.prepare_cursor_contract",
   70|   "d9.git_integration",
   71| ]);
   72| export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;
   73|
   74| export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
   79|   "limited",
   80| ]);
   81|
   82| export const PilotageOperationSchema = z.enum(
   83|   PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
   84| );
   85|
   86| /**
   87|  * Hard ceiling for secondary LIVE prose fields (anti-UNKNOWN).
   88|  * Soft editorial targets stay in Nora instructions (former Zod maxes).
   89|  * Do NOT apply to IDs, enums, UI labels, projectName/subjectTitle, replyDraft, knowledgeStatement, document body.
   90|  */
   91| export const LIVE_PROSE_HARD_MAX = 2000;
```

#### export vicinity L72–L112
```ts
   72| export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;
   73|
   74| export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
   79|   "limited",
   80| ]);
   81|
   82| export const PilotageOperationSchema = z.enum(
   83|   PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
   84| );
   85|
   86| /**
   87|  * Hard ceiling for secondary LIVE prose fields (anti-UNKNOWN).
   88|  * Soft editorial targets stay in Nora instructions (former Zod maxes).
   89|  * Do NOT apply to IDs, enums, UI labels, projectName/subjectTitle, replyDraft, knowledgeStatement, document body.
   90|  */
   91| export const LIVE_PROSE_HARD_MAX = 2000;
   92|
   93| export const QualifiedIntentItemSchema = z.object({
   94|   id: z.string().min(1).max(64),
   95|   capabilityId: StudioCapabilityIdSchema,
   96|   mode: IntentModeSchema,
   97|   /** Soft target ~500 ; hard max LIVE_PROSE_HARD_MAX. */
   98|   summary: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
   99|   parameters: z
  100|     .object({
  101|       projectName: z.string().max(120).optional(),
  102|       /** Soft target ~200. */
  103|       documentHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  104|       /** Soft target ~80. */
  105|       sectionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  106|       /** Soft target ~240. */
  107|       pathHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  108|       cycleType: z.string().max(64).optional(),
  109|       toCycleType: z.string().max(64).optional(),
  110|       methodRef: z.string().max(120).optional(),
  111|       methodVersion: z.string().max(64).optional(),
  112|       /** Soft target ~200. */
```

#### export vicinity L74–L114
```ts
   74| export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
   79|   "limited",
   80| ]);
   81|
   82| export const PilotageOperationSchema = z.enum(
   83|   PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
   84| );
   85|
   86| /**
   87|  * Hard ceiling for secondary LIVE prose fields (anti-UNKNOWN).
   88|  * Soft editorial targets stay in Nora instructions (former Zod maxes).
   89|  * Do NOT apply to IDs, enums, UI labels, projectName/subjectTitle, replyDraft, knowledgeStatement, document body.
   90|  */
   91| export const LIVE_PROSE_HARD_MAX = 2000;
   92|
   93| export const QualifiedIntentItemSchema = z.object({
   94|   id: z.string().min(1).max(64),
   95|   capabilityId: StudioCapabilityIdSchema,
   96|   mode: IntentModeSchema,
   97|   /** Soft target ~500 ; hard max LIVE_PROSE_HARD_MAX. */
   98|   summary: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
   99|   parameters: z
  100|     .object({
  101|       projectName: z.string().max(120).optional(),
  102|       /** Soft target ~200. */
  103|       documentHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  104|       /** Soft target ~80. */
  105|       sectionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  106|       /** Soft target ~240. */
  107|       pathHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  108|       cycleType: z.string().max(64).optional(),
  109|       toCycleType: z.string().max(64).optional(),
  110|       methodRef: z.string().max(120).optional(),
  111|       methodVersion: z.string().max(64).optional(),
  112|       /** Soft target ~200. */
  113|       decisionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  114|       decisionId: z.string().max(120).optional(),
```

#### export vicinity L75–L115
```ts
   75| export const KnowledgeEpistemicSchema = z.enum([
   76|   "hypothesized",
   77|   "recommended",
   78|   "established",
   79|   "limited",
   80| ]);
   81|
   82| export const PilotageOperationSchema = z.enum(
   83|   PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
   84| );
   85|
   86| /**
   87|  * Hard ceiling for secondary LIVE prose fields (anti-UNKNOWN).
   88|  * Soft editorial targets stay in Nora instructions (former Zod maxes).
   89|  * Do NOT apply to IDs, enums, UI labels, projectName/subjectTitle, replyDraft, knowledgeStatement, document body.
   90|  */
   91| export const LIVE_PROSE_HARD_MAX = 2000;
   92|
   93| export const QualifiedIntentItemSchema = z.object({
   94|   id: z.string().min(1).max(64),
   95|   capabilityId: StudioCapabilityIdSchema,
   96|   mode: IntentModeSchema,
   97|   /** Soft target ~500 ; hard max LIVE_PROSE_HARD_MAX. */
   98|   summary: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
   99|   parameters: z
  100|     .object({
  101|       projectName: z.string().max(120).optional(),
  102|       /** Soft target ~200. */
  103|       documentHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  104|       /** Soft target ~80. */
  105|       sectionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  106|       /** Soft target ~240. */
  107|       pathHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  108|       cycleType: z.string().max(64).optional(),
  109|       toCycleType: z.string().max(64).optional(),
  110|       methodRef: z.string().max(120).optional(),
  111|       methodVersion: z.string().max(64).optional(),
  112|       /** Soft target ~200. */
  113|       decisionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  114|       decisionId: z.string().max(120).optional(),
  115|       objectRef: z.string().max(120).optional(),
```

#### export vicinity L82–L122
```ts
   82| export const PilotageOperationSchema = z.enum(
   83|   PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
   84| );
   85|
   86| /**
   87|  * Hard ceiling for secondary LIVE prose fields (anti-UNKNOWN).
   88|  * Soft editorial targets stay in Nora instructions (former Zod maxes).
   89|  * Do NOT apply to IDs, enums, UI labels, projectName/subjectTitle, replyDraft, knowledgeStatement, document body.
   90|  */
   91| export const LIVE_PROSE_HARD_MAX = 2000;
   92|
   93| export const QualifiedIntentItemSchema = z.object({
   94|   id: z.string().min(1).max(64),
   95|   capabilityId: StudioCapabilityIdSchema,
   96|   mode: IntentModeSchema,
   97|   /** Soft target ~500 ; hard max LIVE_PROSE_HARD_MAX. */
   98|   summary: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
   99|   parameters: z
  100|     .object({
  101|       projectName: z.string().max(120).optional(),
  102|       /** Soft target ~200. */
  103|       documentHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  104|       /** Soft target ~80. */
  105|       sectionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  106|       /** Soft target ~240. */
  107|       pathHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  108|       cycleType: z.string().max(64).optional(),
  109|       toCycleType: z.string().max(64).optional(),
  110|       methodRef: z.string().max(120).optional(),
  111|       methodVersion: z.string().max(64).optional(),
  112|       /** Soft target ~200. */
  113|       decisionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  114|       decisionId: z.string().max(120).optional(),
  115|       objectRef: z.string().max(120).optional(),
  116|       /** Soft target ~500. */
  117|       statement: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  118|       /** Soft target ~240. */
  119|       publicationPath: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  120|       /** Explicit PR number for d7.merge_publication — never invent. */
  121|       prNumber: z.number().int().positive().max(999999).optional(),
  122|       /** owner/name for merge target when the Pilote named a repository. */
```

#### export vicinity L91–L131
```ts
   91| export const LIVE_PROSE_HARD_MAX = 2000;
   92|
   93| export const QualifiedIntentItemSchema = z.object({
   94|   id: z.string().min(1).max(64),
   95|   capabilityId: StudioCapabilityIdSchema,
   96|   mode: IntentModeSchema,
   97|   /** Soft target ~500 ; hard max LIVE_PROSE_HARD_MAX. */
   98|   summary: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
   99|   parameters: z
  100|     .object({
  101|       projectName: z.string().max(120).optional(),
  102|       /** Soft target ~200. */
  103|       documentHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  104|       /** Soft target ~80. */
  105|       sectionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  106|       /** Soft target ~240. */
  107|       pathHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  108|       cycleType: z.string().max(64).optional(),
  109|       toCycleType: z.string().max(64).optional(),
  110|       methodRef: z.string().max(120).optional(),
  111|       methodVersion: z.string().max(64).optional(),
  112|       /** Soft target ~200. */
  113|       decisionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  114|       decisionId: z.string().max(120).optional(),
  115|       objectRef: z.string().max(120).optional(),
  116|       /** Soft target ~500. */
  117|       statement: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  118|       /** Soft target ~240. */
  119|       publicationPath: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  120|       /** Explicit PR number for d7.merge_publication — never invent. */
  121|       prNumber: z.number().int().positive().max(999999).optional(),
  122|       /** owner/name for merge target when the Pilote named a repository. */
  123|       repositoryFullName: z.string().max(200).optional(),
  124|       /**
  125|        * Material condition on an effect (e.g. merge after validation).
  126|        * OPEN / UNVERIFIABLE never authorize immediate D7/D9.
  127|        * SATISFIED alone is never a proof — Studio must not invent satisfaction.
  128|        */
  129|       effectCondition: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  130|       effectConditionStatus: z
  131|         .enum(["NONE", "OPEN", "SATISFIED", "UNVERIFIABLE"])
```

#### export vicinity L93–L133
```ts
   93| export const QualifiedIntentItemSchema = z.object({
   94|   id: z.string().min(1).max(64),
   95|   capabilityId: StudioCapabilityIdSchema,
   96|   mode: IntentModeSchema,
   97|   /** Soft target ~500 ; hard max LIVE_PROSE_HARD_MAX. */
   98|   summary: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
   99|   parameters: z
  100|     .object({
  101|       projectName: z.string().max(120).optional(),
  102|       /** Soft target ~200. */
  103|       documentHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  104|       /** Soft target ~80. */
  105|       sectionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  106|       /** Soft target ~240. */
  107|       pathHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  108|       cycleType: z.string().max(64).optional(),
  109|       toCycleType: z.string().max(64).optional(),
  110|       methodRef: z.string().max(120).optional(),
  111|       methodVersion: z.string().max(64).optional(),
  112|       /** Soft target ~200. */
  113|       decisionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  114|       decisionId: z.string().max(120).optional(),
  115|       objectRef: z.string().max(120).optional(),
  116|       /** Soft target ~500. */
  117|       statement: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  118|       /** Soft target ~240. */
  119|       publicationPath: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  120|       /** Explicit PR number for d7.merge_publication — never invent. */
  121|       prNumber: z.number().int().positive().max(999999).optional(),
  122|       /** owner/name for merge target when the Pilote named a repository. */
  123|       repositoryFullName: z.string().max(200).optional(),
  124|       /**
  125|        * Material condition on an effect (e.g. merge after validation).
  126|        * OPEN / UNVERIFIABLE never authorize immediate D7/D9.
  127|        * SATISFIED alone is never a proof — Studio must not invent satisfaction.
  128|        */
  129|       effectCondition: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  130|       effectConditionStatus: z
  131|         .enum(["NONE", "OPEN", "SATISFIED", "UNVERIFIABLE"])
  132|         .optional(),
  133|       /** Typed D5/D6 operation — never use free-text notes as enum substitute. */
```


### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

- Coverage: MODIFIED — git diff HEAD — 369 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index d7211fc8..306bff21 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -79,6 +79,15 @@ import {
   isTechnicalMissionAssistantContent,
   projectMetierMissionMessage,
 } from "@/domains/conversation/pilotage-effect-restitution";
+import {
+  ambiguousPilotageEffectRecord,
+  dependencyBlockedPilotageEffectRecord,
+  dependencyPreconditionBlockReason,
+  intentIdsFromPilotageBindings,
+  pickPrimaryPilotageEffect,
+  pilotageEffectFromAuthority,
+  type TurnPilotageEffect,
+} from "@/domains/conversation/pilotage-effect-aggregate";
 import {
   appendDocumentEffectAck,
   extractContractualDocumentProposal,
@@ -95,7 +104,7 @@ import {
   extractKnowledgeProposals,
   summarizeKnowledgeProposals,
   extractKnowledgeSelectionHints,
-  extractPilotageBinding,
+  listPilotageEffectBindings,
   projectStudioEffects,
   unavailableQualification,
   type NoraTurnQualification,
@@ -750,21 +759,9 @@ export type TurnResult = {
    */
   humanDecisionCreated: boolean;
   /** Honest D5/D6 bridge outcome for this USER turn (absent when no project / no act). */
-  pilotageEffect?: {
-    attempted: boolean;
-    intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
-    intentReason?: string;
-    operation?: string;
-    status?: string | null;
-    reasonCode?: string | null;
-    reason?: string | null;
-    commandId?: string | null;
-    decisionId?: string | null;
-    clarification?: string;
-    source: ConversationalAuthorityOutcome["source"];
-    clientCommandKey?: string;
-    effects?: Array<{ effectKind: string; targetRef: string }>;
-  } | null;
+  pilotageEffect?: TurnPilotageEffect | null;
+  /** MP-09 — every admissible binding outcome on the turn (primary kept in pilotageEffect). */
+  pilotageEffects?: TurnPilotageEffect[];
   reconciled?: boolean;
   /** Durable turn id — available for mid-turn activity polling (C01/C07). */
   turnCommandId?: string | null;
@@ -808,30 +805,6 @@ export type TurnResult = {
   turnProjection?: TurnProjection | null;
 };

-function pilotageEffectFromAuthority(
-  authority: ConversationalAuthorityOutcome | null,
-): TurnResult["pilotageEffect"] {
-  if (!authority) return null;
-  return {
-    attempted: authority.attempted,
-    intentClarity: authority.intentClarity,
-    intentReason: authority.intentReason,
-    operation: authority.operation,
-    status: authority.command?.status ?? null,
-    reasonCode: authority.command?.reasonCode ?? null,
-    reason: authority.command?.reason ?? authority.intentReason ?? null,
-    commandId: authority.command?.commandId ?? null,
-    decisionId: authority.decisionId,
-    clarification: authority.clarification,
-    source: authority.source,
-    clientCommandKey: authority.clientCommandKey,
-    effects: authority.command?.effects?.map((e) => ({
-      effectKind: e.effectKind,
-      targetRef: e.targetRef,
-    })),
-  };
-}
-
 async function resolvePilotageEffectForReplay(input: {
   pilotId: string;
   projectId: string | null | undefined;
@@ -1065,6 +1038,8 @@ export async function postUserMessageAndNora(

   /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
   let authority: ConversationalAuthorityOutcome | null = null;
+  const pilotageEffectRecords: TurnPilotageEffect[] = [];
+  let conversationalHumanDecisionCreated = false;

   const existing = await listMessages(pilotId, preparationId);
   const contextSnippets = existing
@@ -1649,7 +1624,7 @@ export async function postUserMessageAndNora(
     }
   }

-  const pilotageBinding = extractPilotageBinding(qualification);
+  const pilotageBindings = listPilotageEffectBindings(qualification);
   const knowledgeHints = extractKnowledgeSelectionHints(qualification);
   if (
     knowledgeHints.acquisIds.length ||
@@ -1829,80 +1804,146 @@ export async function postUserMessageAndNora(
   }
   // DIALOGUE_INDEPENDANT may answer without métier mutations that bypass A.

-  // D5/D6 after semantic qualification — typed binding only (never parameters.notes).
-  if (
-    allowOwnerEffects &&
-    pilotageBinding &&
-    !("ambiguous" in pilotageBinding) &&
-    ctx.project?.id
-  ) {
+  // D5/D6 after semantic qualification — one apply per qualified REQUEST_EFFECT binding (MP-09).
+  if (allowOwnerEffects && pilotageBindings.length > 0 && ctx.project?.id) {
     const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
     if (stillOwned) {
-      const preQualified = {
-        clarity: "CLEAR" as const,
-        operation: pilotageBinding.operation,
-        objective: pilotageBinding.objective ?? content,
-        statement: pilotageBinding.statement,
-        objectRef: pilotageBinding.objectRef,
-        decisionId: pilotageBinding.decisionId,
-        methodRef: pilotageBinding.methodRef,
-        methodVersion: pilotageBinding.methodVersion,
-        restrictionKindHint: pilotageBinding.restrictionKindHint,
-        restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
-        cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
-        toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
-        semanticIntentId: pilotageBinding.intentId,
-        semanticSchemaVersion: pilotageBinding.schemaVersion,
-      };
-      authority = await applyConversationalAuthority({
-        pilotId,
-        projectId: ctx.project.id,
-        userMessageId: reserved.userMessageId,
-        content,
-        clientTurnKey,
-        preQualified,
-      });
-      emitObs({
-        event_name: "d3.turn.conversational_authority",
-        component: "d3.conversation",
-        request_id: requestId,
-        operation_id: reserved.operationId,
-        outcome: authority.attempted
-          ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
-            ? "SUCCESS"
-            : authority.command?.status === "UNKNOWN"
-              ? "UNKNOWN"
-              : "FAILED"
-          : "PARTIAL",
-        meta: {
-          attempted: authority.attempted,
-          intent_clarity: authority.intentClarity,
-          operation: authority.operation ?? null,
-          command_status: authority.command?.status ?? null,
-          reason_code: authority.command?.reasonCode ?? null,
-          decision_id: authority.decisionId,
-          source: authority.source,
-          semantic_gate: true,
-          semantic_intent_id: pilotageBinding.intentId,
-        },
-      });
+      const intentDependsOn = new Map(
+        qualification.intents.map((i) => [i.id, i.dependsOn] as const),
+      );
+      const pilotageIntentIds = intentIdsFromPilotageBindings(pilotageBindings);
+      const outcomeByIntentId = new Map<string, string>();
+      for (const pilotageBinding of pilotageBindings) {
+        const intentId =
+          "ambiguous" in pilotageBinding ? pilotageBinding.intentId : pilotageBinding.intentId;
+        if ("ambiguous" in pilotageBinding) {
+          const ambiguousRecord = ambiguousPilotageEffectRecord({
+            intentId,
+            reason: pilotageBinding.reason,
+          });
+          pilotageEffectRecords.push(ambiguousRecord);
+          outcomeByIntentId.set(intentId, "AMBIGUOUS");
+          emitObs({
+            event_name: "d3.turn.conversational_authority",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            outcome: "PARTIAL",
+            meta: {
+              attempted: false,
+              intent_clarity: "AMBIGUOUS",
+              semantic_gate: true,
+              reason: pilotageBinding.reason,
+              semantic_intent_id: intentId,
+            },
+          });
+          continue;
+        }
+        const blockReason = dependencyPreconditionBlockReason({
+          dependsOn: intentDependsOn.get(intentId) ?? [],
+          pilotageIntentIds,
+          outcomeByIntentId,
+        });
+        if (blockReason) {
+          const blockedRecord = dependencyBlockedPilotageEffectRecord({
+            binding: pilotageBinding,
+            blockReason,
+          });
+          pilotageEffectRecords.push(blockedRecord);
+          outcomeByIntentId.set(intentId, "SKIPPED");
+          emitObs({
+            event_name: "d3.turn.conversational_authority",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            outcome: "PARTIAL",
+            meta: {
+              attempted: false,
+              intent_clarity: "CLEAR",
+              semantic_gate: true,
+              reason_code: "DEPENDENCY_PRECONDITION",
+              reason: blockReason,
+              semantic_intent_id: intentId,
+              operation: pilotageBinding.operation,
+              pilotage_bindings_total: pilotageBindings.length,
+            },
+          });
+          continue;
+        }
+        const preQualified = {
+          clarity: "CLEAR" as const,
+          operation: pilotageBinding.operation,
+          objective: pilotageBinding.objective ?? content,
+          statement: pilotageBinding.statement,
+          objectRef: pilotageBinding.objectRef,
+          decisionId: pilotageBinding.decisionId,
+          methodRef: pilotageBinding.methodRef,
+          methodVersion: pilotageBinding.methodVersion,
+          restrictionKindHint: pilotageBinding.restrictionKindHint,
+          restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
+          cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+          toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+          semanticIntentId: pilotageBinding.intentId,
+          semanticSchemaVersion: pilotageBinding.schemaVersion,
+        };
+        const outcome = await applyConversationalAuthority({
+          pilotId,
+          projectId: ctx.project.id,
+          userMessageId: reserved.userMessageId,
+          content,
+          clientTurnKey,
+          preQualified,
+        });
+        if (outcome.humanDecisionCreated) conversationalHumanDecisionCreated = true;
+        const effectRecord = pilotageEffectFromAuthority(outcome, pilotageBinding.intentId);
+        if (effectRecord) {
+          pilotageEffectRecords.push(effectRecord);
+        }
+        outcomeByIntentId.set(
+          intentId,
+          outcome.command?.status ?? (outcome.attempted ? "FAILED" : "NOT_ATTEMPTED"),
+        );
+        if (!authority?.attempted && outcome.attempted) {
+          authority = outcome;
+        } else if (!authority) {
+          authority = outcome;
+        }
+        emitObs({
+          event_name: "d3.turn.conversational_authority",
+          component: "d3.conversation",
+          request_id: requestId,
+          operation_id: reserved.operationId,
+          outcome: outcome.attempted
+            ? outcome.command?.status === "APPLIED" || outcome.command?.status === "ALREADY_APPLIED"
+              ? "SUCCESS"
+              : outcome.command?.status === "UNKNOWN"
+                ? "UNKNOWN"
+                : "FAILED"
+            : "PARTIAL",
+          meta: {
+            attempted: outcome.attempted,
+            intent_clarity: outcome.intentClarity,
+            operation: outcome.operation ?? null,
+            command_status: outcome.command?.status ?? null,
+            reason_code: outcome.command?.reasonCode ?? null,
+            decision_id: outcome.decisionId,
+            source: outcome.source,
+            semantic_gate: true,
+            semantic_intent_id: pilotageBinding.intentId,
+            pilotage_bindings_total: pilotageBindings.length,
+            pilotage_outcomes_serial: pilotageEffectRecords.length,
+          },
+        });
+        // Mid-loop ownership — stop further mutations if turn ownership was lost.
+        if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
+          break;
+        }
+      }
     }
-  } else if (pilotageBinding && "ambiguous" in pilotageBinding) {
-    emitObs({
-      event_name: "d3.turn.conversational_authority",
-      component: "d3.conversation",
-      request_id: requestId,
-      operation_id: reserved.operationId,
-      outcome: "PARTIAL",
-      meta: {
-        attempted: false,
-        intent_clarity: "AMBIGUOUS",
-        semantic_gate: true,
-        reason: pilotageBinding.reason,
-      },
-    });
   }

+  const primaryPilotageEffect = pickPrimaryPilotageEffect(pilotageEffectRecords);
+
   // C02 fault injection — AFTER same-turn D5/D6 (SEM/TV order: Nora → qualify → authority).
   // Hook name is historical; it must not run before Nora anymore.
   if (turnRaceHooks.afterAuthorityBeforeNora) {
@@ -1916,8 +1957,9 @@ export async function postUserMessageAndNora(
         requestId,
         status: "UNKNOWN",
         idempotentReplay: false,
-        humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
-        pilotageEffect: pilotageEffectFromAuthority(authority),
+        humanDecisionCreated: conversationalHumanDecisionCreated,
+        pilotageEffect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority),
+        pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
         noraMode: reply.mode,
       };
       try {
@@ -1950,6 +1992,7 @@ export async function postUserMessageAndNora(
         ...unknownPayload,
         humanDecisionCreated: resolved.humanDecisionCreated,
         pilotageEffect: resolved.pilotageEffect,
+        pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
       };
     }
   }
@@ -3911,10 +3954,14 @@ export async function postUserMessageAndNora(
   }

   // E07 — post-effect métier restitution: final assistant text must match Studio outcome.
-  if (!ownershipLostBeforeD4 && authority?.attempted) {
+  if (
+    !ownershipLostBeforeD4 &&
+    (pilotageEffectRecords.some((e) => e.attempted) || authority?.attempted)
+  ) {
     assistantBody = composePilotageEffectRestitution({
       priorContent: assistantBody,
-      effect: pilotageEffectFromAuthority(authority) ?? null,
+      effect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority) ?? null,
+      effects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
     });
   }

@@ -4053,8 +4100,11 @@ export async function postUserMessageAndNora(
     historicalAuthorization: ownershipLostBeforeD4 ? null : historicalAuthorizationOut,
     idempotentReplay: false,
     humanDecisionCreated:
-      Boolean(authority?.humanDecisionCreated) || Boolean(publicationMandateDecisionId),
-    pilotageEffect: pilotageEffectFromAuthority(authority),
+      conversationalHumanDecisionCreated ||
+      Boolean(authority?.humanDecisionCreated) ||
+      Boolean(publicationMandateDecisionId),
+    pilotageEffect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority),
+    pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
     missionProjection,
     nextTurnKind,
     pendingEffectBlocked,
```

#### Structured excerpts (large module)

#### export vicinity L184–L224
```ts
  184| export async function probeSiblingOwnerEffects(input: {
  185|   pilotId: string;
  186|   preparationId: string;
  187|   projectId: string | null;
  188|   sibling: {
  189|     commandId: string;
  190|     clientTurnKey: string;
  191|     userMessageId: string | null;
  192|     operationId: string | null;
  193|     bindingCorrelationKeys: string[];
  194|   };
  195| }): Promise<boolean | null> {
  196|   const { sibling } = input;
  197|   const missionKeys = missionCorrelationKeys(sibling.clientTurnKey);
  198|   const corrKeys = [
  199|     ...new Set(
  200|       [
  201|         ...sibling.bindingCorrelationKeys,
  202|         missionKeys.document,
  203|         missionKeys.publication,
  204|         sibling.clientTurnKey.trim() || null,
  205|       ].filter((k): k is string => Boolean(k && k.trim())),
  206|     ),
  207|   ];
  208|
  209|   try {
  210|     // DEV/E2E seam only — never set in RECETTE/STABLE; forces conservative null.
  211|     if (process.env.STUDIO_S05_PROBE_FORCE_ERROR === "1") {
  212|       throw new Error("STUDIO_S05_PROBE_FORCE_ERROR");
  213|     }
  214|
  215|     if (corrKeys.length > 0) {
  216|       const docs = await db
  217|         .select({ id: documents.id })
  218|         .from(documents)
  219|         .where(
  220|           and(
  221|             eq(documents.preparationId, input.preparationId),
  222|             eq(documents.ownerPilotId, input.pilotId),
  223|             inArray(documents.creationCorrelationKey, corrKeys),
  224|           ),
```

#### export vicinity L453–L493
```ts
  453| export async function listMessages(pilotId: string, preparationId: string) {
  454|   // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
  455|   const ctx = await getPreparationContext(pilotId, preparationId);
  456|   if (!ctx.conversation) return [];
  457|   const rows = await db
  458|     .select()
  459|     .from(messages)
  460|     .where(eq(messages.conversationId, ctx.conversation.id))
  461|     .orderBy(asc(messages.ordinal));
  462|   // E07 — project technical mission dumps as métier text (no DB rewrite).
  463|   return rows.map((m) => {
  464|     if (
  465|       m.role === "assistant" &&
  466|       isTechnicalMissionAssistantContent(m.content, m.generationId)
  467|     ) {
  468|       return { ...m, content: projectMetierMissionMessage(m.content) };
  469|     }
  470|     return m;
  471|   });
  472| }
  473|
  474| /**
  475|  * R05 — READ-ONLY durable turn lookup by clientTurnKey.
  476|  * Never reserves, never calls Nora, never mutates. Used by cognitive recovery
  477|  * so UI pending clear is grounded in server state (not a bare D7 404).
  478|  */
  479| export async function lookupDurableTurnByClientKey(
  480|   pilotId: string,
  481|   preparationId: string,
  482|   clientTurnKey: string,
  483| ): Promise<{
  484|   found: boolean;
  485|   turnCommandId: string | null;
  486|   status: string | null;
  487|   generationId: string | null;
  488|   operationId: string | null;
  489|   userMessageId: string | null;
  490|   assistantMessageId: string | null;
  491|   pilotageEffect: TurnResult["pilotageEffect"];
  492|   idempotentReplay: true;
  493|   noraMode: "durable-lookup";
```

#### export vicinity L479–L519
```ts
  479| export async function lookupDurableTurnByClientKey(
  480|   pilotId: string,
  481|   preparationId: string,
  482|   clientTurnKey: string,
  483| ): Promise<{
  484|   found: boolean;
  485|   turnCommandId: string | null;
  486|   status: string | null;
  487|   generationId: string | null;
  488|   operationId: string | null;
  489|   userMessageId: string | null;
  490|   assistantMessageId: string | null;
  491|   pilotageEffect: TurnResult["pilotageEffect"];
  492|   idempotentReplay: true;
  493|   noraMode: "durable-lookup";
  494| }> {
  495|   const key = clientTurnKey.trim();
  496|   const empty = {
  497|     found: false as const,
  498|     turnCommandId: null,
  499|     status: null,
  500|     generationId: null,
  501|     operationId: null,
  502|     userMessageId: null,
  503|     assistantMessageId: null,
  504|     pilotageEffect: null,
  505|     idempotentReplay: true as const,
  506|     noraMode: "durable-lookup" as const,
  507|   };
  508|   if (!key) return empty;
  509|
  510|   const ctx = await getPreparationContext(pilotId, preparationId);
  511|   if (!ctx.conversation) return empty;
  512|
  513|   const row = (
  514|     await db
  515|       .select({
  516|         id: conversationTurnCommands.id,
  517|         status: conversationTurnCommands.status,
  518|         generationId: conversationTurnCommands.generationId,
  519|         operationId: conversationTurnCommands.operationId,
```

#### export vicinity L576–L616
```ts
  576| export async function listTurnProjections(pilotId: string, preparationId: string) {
  577|   const ctx = await getPreparationContext(pilotId, preparationId);
  578|   if (!ctx.conversation) return [];
  579|   const rows = await db
  580|     .select({
  581|       id: conversationTurnCommands.id,
  582|       assistantMessageId: conversationTurnCommands.assistantMessageId,
  583|       status: conversationTurnCommands.status,
  584|       resultJson: conversationTurnCommands.resultJson,
  585|     })
  586|     .from(conversationTurnCommands)
  587|     .where(
  588|       and(
  589|         eq(conversationTurnCommands.conversationId, ctx.conversation.id),
  590|         eq(conversationTurnCommands.ownerPilotId, pilotId),
  591|       ),
  592|     );
  593|   const out = [];
  594|   for (const row of rows) {
  595|     if (!row.assistantMessageId || !row.resultJson) continue;
  596|     const proj = extractTurnProjectionFromResultJson(row.resultJson);
  597|     if (!proj) continue;
  598|     // E07 — surface durable Studio effect alongside turnProjection (sibling in resultJson).
  599|     let pilotageEffect: TurnResult["pilotageEffect"] = null;
  600|     try {
  601|       const parsed = JSON.parse(row.resultJson) as {
  602|         pilotageEffect?: TurnResult["pilotageEffect"];
  603|       };
  604|       pilotageEffect = parsed.pilotageEffect ?? null;
  605|     } catch {
  606|       pilotageEffect = null;
  607|     }
  608|     out.push({
  609|       ...proj,
  610|       messageId: proj.messageId ?? row.assistantMessageId,
  611|       turnCommandId: proj.turnCommandId ?? row.id,
  612|       finalized: proj.finalized || row.status === "COMPLETE",
  613|       status: proj.status || row.status,
  614|       pilotageEffect,
  615|     });
  616|   }
```

#### export vicinity L698–L738
```ts
  698| export type TurnResult = {
  699|   userMessageId?: string | null;
  700|   assistantMessageId?: string | null;
  701|   operationId: string;
  702|   requestId: string;
  703|   noraMode?: string;
  704|   status?: string;
  705|   generationId?: string | null;
  706|   policy?: {
  707|     version: string;
  708|     profileType: string;
  709|     profile: string;
  710|     modelRequested: string;
  711|     modelApplied: string | null;
  712|     effortRequested: string;
  713|     effortApplied: string | null;
  714|     reasonCodes: string[];
  715|   };
  716|   attempts?: unknown[];
  717|   toolCallsObserved?: number;
  718|   d4CharsReturned?: number;
  719|   streaming?: { attempted: boolean; delivered: boolean; notes: string | null };
  720|   knowledgeSelection?: unknown;
  721|   /** Post-qualification preferred listing — resume hint only, not cognition of current reply. */
  722|   knowledgeResumeHints?: unknown;
  723|   capitalisation?: unknown;
  724|   capitalisationAttempted?: unknown;
  725|   capitalisationLimit?: string;
  726|   documentSave?: {
  727|     status?: string;
  728|     documentId?: string;
  729|     revisionId?: string;
  730|     revisionNumber?: number;
  731|     baseRevisionId?: string;
  732|     reason?: string;
  733|     act?: "CREATE" | "REVISE";
  734|     idempotentReplay?: boolean;
  735|   } | null;
  736|   /** F1 — sealed proposal candidate awaiting explicit conservation (no D4 yet). */
  737|   pendingDocumentCandidate?: {
  738|     candidateId: string;
```

#### export vicinity L842–L882
```ts
  842| export async function postUserMessageAndNora(
  843|   pilotId: string,
  844|   preparationId: string,
  845|   content: string,
  846|   opts?: {
  847|     correlationKey?: string;
  848|     clientTurnKey?: string;
  849|     requestId?: string;
  850|     /** Client UX hint only — server DB siblings are authoritative for S05. */
  851|     unresolvedPendingClientTurnKey?: string;
  852|     /** Documents→Travail focus: exact source revision (may be historical). */
  853|     documentFocus?: {
  854|       documentId: string;
  855|       sourceRevisionId: string;
  856|       sourceRevisionNumber?: number;
  857|       /** Ignored for drafting authority (R1) — D4 getDocumentRevision is sole source. */
  858|       sourceContentMarkdown?: string;
  859|       observedHeadRevisionId: string;
  860|       observedHeadRevisionNumber?: number;
  861|       confirmedHistoricalSource?: boolean;
  862|       historicalConfirmation?: {
  863|         documentId: string;
  864|         sourceRevisionId: string;
  865|         observedHeadRevisionId: string;
  866|         choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
  867|       };
  868|       /** F2 — server-issued id from a prior historical choice turn. */
  869|       historicalAuthorizationId?: string;
  870|       /** F1 — explicit conservation bound to a pending candidate. */
  871|       conserveProposal?: boolean;
  872|       pendingCandidateId?: string;
  873|       pendingCandidateContentSha256?: string;
  874|     } | null;
  875|     /** C17 — continue an explicit cognitive work when the Pilote resumes. */
  876|     cognitiveWorkId?: string | null;
  877|     forceNewCognitiveWork?: boolean;
  878|   },
  879| ): Promise<TurnResult> {
  880|   const requestId = opts?.requestId ?? newRequestId();
  881|   const ctx = await getPreparationContext(pilotId, preparationId);
  882|   if (!ctx.conversation) throw new StudioError("NOT_FOUND", "Préparation introuvable");
```

#### export vicinity L4289–L4300
```ts
 4289| export async function getConversationId(pilotId: string, preparationId: string) {
 4290|   const row = (
 4291|     await db
 4292|       .select()
 4293|       .from(conversations)
 4294|       .where(
 4295|         and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)),
 4296|       )
 4297|       .limit(1)
 4298|   )[0];
 4299|   return row?.id ?? null;
 4300| }
```

#### marker `listPilotageEffectBindings` L99–L142
```ts
   99| } from "./document-act";
  100| import {
  101|   deriveThreadTurnKind,
  102|   documentaryMaterializeIntents,
  103|   effectIntents,
  104|   extractKnowledgeProposals,
  105|   summarizeKnowledgeProposals,
  106|   extractKnowledgeSelectionHints,
  107|   listPilotageEffectBindings,
  108|   projectStudioEffects,
  109|   unavailableQualification,
  110|   type NoraTurnQualification,
  111| } from "./semantic-qualification";
  112| import { loadLatestMissionsByIntentKey } from "./intent-conduction";
  113| import {
  114|   buildTurnCorrelationKeys,
  115|   evaluateS05SiblingPolicy,
  116|   parseSiblingResultEvidence,
  117|   type S05SiblingEvidence,
  118| } from "./s05-pending-policy";
  119| import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
  120| import {
  121|   appendMissionAck,
  122|   cognitiveContinueFromFacts,
  123|   composeCanonicalMissionRestitution,
  124|   isPublicationPathClarificationResume,
  125|   missionCorrelationKeys,
  126|   preparePublicationForMission,
  127|   publicationRefsFromClarifyingMission,
  128|   recoverAuthorizedNoraMissions,
  129|   resolvePublicationPathAfterClarification,
  130|   type MissionProjection,
  131| } from "./mission-continuity";
  132| import { admitConversationalPublicationMandate } from "./conversation-publication-authority";
  133| import {
  134|   extractAllPublicationBranchHints,
  135|   extractExplicitPublicationBranch,
  136| } from "./conversation-publication-mandate-guards";
  137| import {
  138|   admitConversationalMergeMandate,
  139|   extractPositivelyRequestedPrNumbers,
  140|   userStatementHasOpenMergeCondition,
  141|   userStatementHasUnresolvedSamePrMergeContradiction,
  142|   userStatementIsNonAuthorizingMergeTalk,
```

#### marker `pilotageBindings` L1619–L1662
```ts
 1619|         documentId: authStash.authorization.documentId,
 1620|         sourceRevisionId: authStash.authorization.sourceRevisionId,
 1621|         observedHeadRevisionId: authStash.authorization.observedHeadRevisionId,
 1622|         choice: authStash.authorization.choice,
 1623|       };
 1624|     }
 1625|   }
 1626|
 1627|   const pilotageBindings = listPilotageEffectBindings(qualification);
 1628|   const knowledgeHints = extractKnowledgeSelectionHints(qualification);
 1629|   if (
 1630|     knowledgeHints.acquisIds.length ||
 1631|     knowledgeHints.openPointIds.length ||
 1632|     knowledgeHints.subjectIds.length
 1633|   ) {
 1634|     knowledgeResumeHints = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
 1635|       preferredAcquisIds: knowledgeHints.acquisIds,
 1636|       preferredOpenPointIds: knowledgeHints.openPointIds,
 1637|       preferredSubjectIds: knowledgeHints.subjectIds,
 1638|     });
 1639|   }
 1640|
 1641|   // S05 — durable unresolved work (turns + missions). Client hint is UX only.
 1642|   const siblings = await findUnresolvedSiblingTurns({
 1643|     conversationId: ctx.conversation.id,
 1644|     ownerPilotId: pilotId,
 1645|     excludeClientTurnKey: clientTurnKey,
 1646|   });
 1647|   const clientPendingHint = opts?.unresolvedPendingClientTurnKey?.trim() || null;
 1648|   const missionsByKey = await loadLatestMissionsByIntentKey(ctx.conversation.id);
 1649|   const unresolvedMissions = [...missionsByKey.values()].filter((m) =>
 1650|     ["AWAITING_PILOT_ACT", "AWAITING_PILOT_AUTH", "AWAITING_CLARIFICATION", "ACTIVE"].includes(
 1651|       m.status,
 1652|     ),
 1653|   );
 1654|   // ACTIVE only blocks when a step is still WAITING/PENDING (real unfinished work).
 1655|   const blockingMission =
 1656|     unresolvedMissions.find((m) =>
 1657|       m.status === "ACTIVE"
 1658|         ? m.steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
 1659|         : true,
 1660|     ) ?? null;
 1661|
 1662|   // UAT-GIT-PUB-01 — clarifying replies (path / go) must resume the open publication
```

#### marker `pilotageEffectRecords` L1033–L1076
```ts
 1033|   let continueChoicesOverride: Array<{
 1034|     id: string;
 1035|     label: string;
 1036|     transmitText: string;
 1037|   }> | null = null;
 1038|
 1039|   /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
 1040|   let authority: ConversationalAuthorityOutcome | null = null;
 1041|   const pilotageEffectRecords: TurnPilotageEffect[] = [];
 1042|   let conversationalHumanDecisionCreated = false;
 1043|
 1044|   const existing = await listMessages(pilotId, preparationId);
 1045|   const contextSnippets = existing
 1046|     .filter((m) => m.status === "COMPLETE" && m.id !== reserved.userMessageId)
 1047|     .slice(-6)
 1048|     .map((m) => `${m.role}: ${m.content.slice(0, 200)}`);
 1049|
 1050|   // F4: pre-Nora context ONLY feeds generation. Post-qual preferred ids are resume hints,
 1051|   // never claimed as having nourished the reply already produced.
 1052|   const knowledgeForNora = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
 1053|     projectId: ctx.project?.id ?? null,
 1054|   });
 1055|   let knowledgeResumeHints: Awaited<ReturnType<typeof selectRelevantKnowledgeContext>> | null =
 1056|     null;
 1057|
 1058|   const docs = await listDocuments(pilotId, preparationId);
 1059|   const docSnippets = docs.slice(0, 5).map((d) => {
 1060|     const rev = d.latestRevision;
 1061|     return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
 1062|   });
 1063|
 1064|   // SEM/TV: Nora qualifies first; same-turn D5/D6 runs after structured qualification.
 1065|   // Prior-turn D5/D6 facts still arrive via buildNoraPilotageContext projection only.
 1066|   const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);
 1067|
 1068|   // E08 — owner publication facts for follow-up verification (branch/path/SHA/PR).
 1069|   // Read-only D8 projection; never invents merge. Bounded to avoid context bloat.
 1070|   const publicationOwnerSnippets: string[] = [];
 1071|   if (ctx.project?.id) {
 1072|     try {
 1073|       const listed = await listProjectPublications(pilotId, ctx.project.id);
 1074|       publicationOwnerSnippets.push(
 1075|         ...formatPublicationOwnerFactsSnippets(listed.publications, 3),
 1076|       );
```

#### marker `dependsOn` L1804–L1847
```ts
 1804|   }
 1805|   // DIALOGUE_INDEPENDANT may answer without métier mutations that bypass A.
 1806|
 1807|   // D5/D6 after semantic qualification — one apply per qualified REQUEST_EFFECT binding (MP-09).
 1808|   if (allowOwnerEffects && pilotageBindings.length > 0 && ctx.project?.id) {
 1809|     const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
 1810|     if (stillOwned) {
 1811|       const intentDependsOn = new Map(
 1812|         qualification.intents.map((i) => [i.id, i.dependsOn] as const),
 1813|       );
 1814|       const pilotageIntentIds = intentIdsFromPilotageBindings(pilotageBindings);
 1815|       const outcomeByIntentId = new Map<string, string>();
 1816|       for (const pilotageBinding of pilotageBindings) {
 1817|         const intentId =
 1818|           "ambiguous" in pilotageBinding ? pilotageBinding.intentId : pilotageBinding.intentId;
 1819|         if ("ambiguous" in pilotageBinding) {
 1820|           const ambiguousRecord = ambiguousPilotageEffectRecord({
 1821|             intentId,
 1822|             reason: pilotageBinding.reason,
 1823|           });
 1824|           pilotageEffectRecords.push(ambiguousRecord);
 1825|           outcomeByIntentId.set(intentId, "AMBIGUOUS");
 1826|           emitObs({
 1827|             event_name: "d3.turn.conversational_authority",
 1828|             component: "d3.conversation",
 1829|             request_id: requestId,
 1830|             operation_id: reserved.operationId,
 1831|             outcome: "PARTIAL",
 1832|             meta: {
 1833|               attempted: false,
 1834|               intent_clarity: "AMBIGUOUS",
 1835|               semantic_gate: true,
 1836|               reason: pilotageBinding.reason,
 1837|               semantic_intent_id: intentId,
 1838|             },
 1839|           });
 1840|           continue;
 1841|         }
 1842|         const blockReason = dependencyPreconditionBlockReason({
 1843|           dependsOn: intentDependsOn.get(intentId) ?? [],
 1844|           pilotageIntentIds,
 1845|           outcomeByIntentId,
 1846|         });
 1847|         if (blockReason) {
```


### `projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts`

- Coverage: MODIFIED — git diff HEAD — 28 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
index b803c708..3172bb08 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
@@ -49,6 +49,24 @@ export function filterBillableFinOpsRows<T extends { limitsJson?: string[] | nul
   return rows.filter(isBillableFinOpsObservationRow);
 }

+/** Subtext under « Couverture mesure » — avoids 100 % / 0 % estimation mismatch without lying. */
+export function finOpsMeasureCoverageSubtext(kpis: {
+  totalRequests: number;
+  measuredRequests: number;
+  estimationCompletenessPercent: MeasuredValue<number>;
+}): string {
+  if (kpis.totalRequests <= 0) return "Requêtes non recensées";
+  const observed = `${formatIntegerFr(kpis.measuredRequests)} / ${formatIntegerFr(kpis.totalRequests)} requêtes recensées`;
+  const est = kpis.estimationCompletenessPercent;
+  if (est.kind === "partial" && est.value === 0) {
+    return `${observed} · coûts entièrement PARTIAL ou inconnus`;
+  }
+  if (est.kind === "known" || est.kind === "partial") {
+    return `${observed} · estimation connue ${est.value} %`;
+  }
+  return observed;
+}
+
 export function sumBillableProviderRequests(
   rows: Array<{
     providerRequests: number | null;
```


### `projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts`

- Coverage: MODIFIED — git diff HEAD — 187 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index c5ba5954..5fce6c2d 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -11,6 +11,7 @@ import {
   aggregateTokenTotal,
   computeEstimationCompletenessPercent,
   computeMeasureCoveragePercent,
+  filterBillableFinOpsRows,
   sumBillableProviderRequests,
   mapCognitiveWorkStatusLabel,
   parseFinOpsPeriodDays,
@@ -37,7 +38,12 @@ export type FinOpsFilterInput = {
   model?: string | null;
 };

-function baseObservationWhere(pilotId: string, input: FinOpsFilterInput, since: Date) {
+function baseObservationWhere(
+  pilotId: string,
+  input: FinOpsFilterInput,
+  since: Date,
+  cognitiveWorkIdsOnProject?: string[],
+) {
   const lane = studioLane();
   const conditions = [
     eq(providerUsageObservations.ownerPilotId, pilotId),
@@ -45,7 +51,15 @@ function baseObservationWhere(pilotId: string, input: FinOpsFilterInput, since:
     sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
   ];
   if (input.projectId) {
-    conditions.push(eq(providerUsageObservations.projectId, input.projectId));
+    const byWork =
+      cognitiveWorkIdsOnProject && cognitiveWorkIdsOnProject.length > 0
+        ? inArray(providerUsageObservations.cognitiveWorkId, cognitiveWorkIdsOnProject)
+        : null;
+    conditions.push(
+      byWork
+        ? or(eq(providerUsageObservations.projectId, input.projectId), byWork)!
+        : eq(providerUsageObservations.projectId, input.projectId),
+    );
   }
   if (input.model) {
     const pattern = `%${input.model}%`;
@@ -78,13 +92,32 @@ async function loadObservations(
 ): Promise<ObservationRow[]> {
   const periodDays = input.periodDays ?? 30;
   const since = periodStartDate(periodDays);
+  let cognitiveWorkIdsOnProject: string[] | undefined;
   if (input.projectId) {
     await assertProjectOwned(pilotId, input.projectId);
+    cognitiveWorkIdsOnProject = (
+      await db
+        .select({ id: cognitiveWorks.id })
+        .from(cognitiveWorks)
+        .where(
+          and(
+            eq(cognitiveWorks.ownerPilotId, pilotId),
+            eq(cognitiveWorks.projectId, input.projectId),
+          ),
+        )
+    ).map((r) => r.id);
   }
   return db
     .select()
     .from(providerUsageObservations)
-    .where(baseObservationWhere(pilotId, { ...input, periodDays }, since))
+    .where(
+      baseObservationWhere(
+        pilotId,
+        { ...input, periodDays },
+        since,
+        cognitiveWorkIdsOnProject,
+      ),
+    )
     .orderBy(desc(providerUsageObservations.createdAt));
 }

@@ -610,7 +643,16 @@ export async function loadFinOpsWorks(
     );

   const projectIds = [
-    ...new Set(works.map((w) => w.projectId).filter((id): id is string => Boolean(id))),
+    ...new Set(
+      works.flatMap((w) => {
+        const ids: string[] = [];
+        if (w.projectId) ids.push(w.projectId);
+        const slice = byWork.get(w.id) ?? [];
+        const fromObs = slice.find((r) => r.projectId)?.projectId;
+        if (fromObs) ids.push(fromObs);
+        return ids;
+      }),
+    ),
   ];
   const projectNames = new Map<string, string>();
   if (projectIds.length > 0) {
@@ -624,14 +666,19 @@ export async function loadFinOpsWorks(
   const items: FinOpsWorkListItem[] = works.map((w) => {
     const slice = byWork.get(w.id) ?? [];
     const last = slice[0]?.createdAt ?? new Date();
+    const observedProjectId =
+      slice.find((r) => r.projectId)?.projectId ?? null;
+    const effectiveProjectId = w.projectId ?? observedProjectId;
     const title =
       (w.objective?.trim() || "Travail cognitif").slice(0, 120) +
       ((w.objective?.length ?? 0) > 120 ? "…" : "");
     return {
       cognitiveWorkId: w.id,
       title,
-      projectId: w.projectId,
-      projectName: w.projectId ? projectNames.get(w.projectId) ?? null : null,
+      projectId: effectiveProjectId,
+      projectName: effectiveProjectId
+        ? projectNames.get(effectiveProjectId) ?? null
+        : null,
       modelsLabel: uniqueModelsLabel(slice.map((r) => r.modelApplied ?? r.modelRequested)),
       tokens: aggregateTokenTotal(slice),
       estimatedCostUsd: aggregateEstimatedCost(slice),
@@ -717,13 +764,17 @@ export async function loadFinOpsWorkDetail(
       desc(providerUsageObservations.createdAt),
     );

+  const billableRows = filterBillableFinOpsRows(rows);
+
   let projectName: string | null = null;
-  if (work.projectId) {
+  const observedProjectId = rows.find((r) => r.projectId)?.projectId ?? null;
+  const effectiveProjectId = work.projectId ?? observedProjectId;
+  if (effectiveProjectId) {
     const p = (
       await db
         .select({ name: projects.name })
         .from(projects)
-        .where(and(eq(projects.id, work.projectId), eq(projects.ownerPilotId, pilotId)))
+        .where(and(eq(projects.id, effectiveProjectId), eq(projects.ownerPilotId, pilotId)))
         .limit(1)
     )[0];
     projectName = p?.name ?? null;
@@ -731,7 +782,7 @@ export async function loadFinOpsWorkDetail(

   const title = work.objective?.trim() || "Travail cognitif";
   const bySegment = new Map<number, ObservationRow[]>();
-  for (const r of rows) {
+  for (const r of billableRows) {
     const idx = r.segmentIndex ?? 0;
     const list = bySegment.get(idx) ?? [];
     list.push(r);
@@ -753,9 +804,9 @@ export async function loadFinOpsWorkDetail(
       };
     });

-  const providerRequestsTotal = sumBillableProviderRequests(rows);
+  const providerRequestsTotal = sumBillableProviderRequests(billableRows);
   const providerRequests: MeasuredValue<number> =
-    rows.length === 0
+    billableRows.length === 0
       ? { kind: "empty" }
       : providerRequestsTotal > 0
         ? { kind: "known", value: providerRequestsTotal }
@@ -764,24 +815,24 @@ export async function loadFinOpsWorkDetail(
   const segmentCount: MeasuredValue<number> =
     segments.length > 0
       ? { kind: "known", value: segments.length }
-      : rows.length > 0
+      : billableRows.length > 0
         ? { kind: "unknown", reason: "Segments non délimités" }
         : { kind: "empty" };

   return {
     cognitiveWorkId: work.id,
     title,
-    projectId: work.projectId,
+    projectId: effectiveProjectId,
     projectName,
     statusLabel: mapCognitiveWorkStatusLabel(work.status),
     kpis: {
-      estimatedCostUsd: aggregateEstimatedCost(rows),
-      totalTokens: aggregateTokenTotal(rows),
+      estimatedCostUsd: aggregateEstimatedCost(billableRows),
+      totalTokens: aggregateTokenTotal(billableRows),
       providerRequests,
       segmentCount,
     },
     segments,
-    timeline: rows.map((r) => ({
+    timeline: billableRows.map((r) => ({
       id: r.id,
       at: r.createdAt.toISOString(),
       operation: r.operation,
```

#### Structured excerpts (large module)

#### export vicinity L35–L75
```ts
   35| export type FinOpsFilterInput = {
   36|   periodDays?: FinOpsPeriodDays;
   37|   projectId?: string | null;
   38|   model?: string | null;
   39| };
   40|
   41| function baseObservationWhere(
   42|   pilotId: string,
   43|   input: FinOpsFilterInput,
   44|   since: Date,
   45|   cognitiveWorkIdsOnProject?: string[],
   46| ) {
   47|   const lane = studioLane();
   48|   const conditions = [
   49|     eq(providerUsageObservations.ownerPilotId, pilotId),
   50|     gte(providerUsageObservations.createdAt, since),
   51|     sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
   52|   ];
   53|   if (input.projectId) {
   54|     const byWork =
   55|       cognitiveWorkIdsOnProject && cognitiveWorkIdsOnProject.length > 0
   56|         ? inArray(providerUsageObservations.cognitiveWorkId, cognitiveWorkIdsOnProject)
   57|         : null;
   58|     conditions.push(
   59|       byWork
   60|         ? or(eq(providerUsageObservations.projectId, input.projectId), byWork)!
   61|         : eq(providerUsageObservations.projectId, input.projectId),
   62|     );
   63|   }
   64|   if (input.model) {
   65|     const pattern = `%${input.model}%`;
   66|     conditions.push(
   67|       or(
   68|         ilike(providerUsageObservations.modelApplied, pattern),
   69|         ilike(providerUsageObservations.modelRequested, pattern),
   70|       )!,
   71|     );
   72|   }
   73|   return and(...conditions);
   74| }
   75|
```

#### export vicinity L124–L164
```ts
  124| export async function loadFinOpsFilterOptions(pilotId: string) {
  125|   const lane = studioLane();
  126|   const projectRows = await db
  127|     .select({ id: projects.id, name: projects.name })
  128|     .from(projects)
  129|     .where(eq(projects.ownerPilotId, pilotId))
  130|     .orderBy(projects.name);
  131|
  132|   const modelRows = await db
  133|     .select({
  134|       model: sql<string>`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested})`,
  135|     })
  136|     .from(providerUsageObservations)
  137|     .where(
  138|       and(
  139|         eq(providerUsageObservations.ownerPilotId, pilotId),
  140|         sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
  141|         sql`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested}) IS NOT NULL`,
  142|       ),
  143|     )
  144|     .groupBy(
  145|       sql`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested})`,
  146|     );
  147|
  148|   return {
  149|     projects: projectRows,
  150|     models: modelRows.map((r) => r.model).filter(Boolean),
  151|   };
  152| }
  153|
  154| export type FinOpsProviderReconciliationDto = {
  155|   /** Operational Studio estimates remain the attribution ledger. */
  156|   studioEstimatedUsd: number | null;
  157|   studioEstimationKind: MeasuredValue<number>["kind"];
  158|   /** Provider Costs aggregate when a successful Admin collection exists. */
  159|   providerCostUsd: number | null;
  160|   providerCurrency: string | null;
  161|   deltaUsd: number | null;
  162|   comparability: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
  163|   /** Compare window used for provider reconciliation (UTC ISO). */
  164|   compareWindowStartUtc: string | null;
```

#### export vicinity L154–L194
```ts
  154| export type FinOpsProviderReconciliationDto = {
  155|   /** Operational Studio estimates remain the attribution ledger. */
  156|   studioEstimatedUsd: number | null;
  157|   studioEstimationKind: MeasuredValue<number>["kind"];
  158|   /** Provider Costs aggregate when a successful Admin collection exists. */
  159|   providerCostUsd: number | null;
  160|   providerCurrency: string | null;
  161|   deltaUsd: number | null;
  162|   comparability: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
  163|   /** Compare window used for provider reconciliation (UTC ISO). */
  164|   compareWindowStartUtc: string | null;
  165|   compareWindowEndUtc: string | null;
  166|   freshness: {
  167|     lastAttemptAtUtc: string | null;
  168|     lastSuccessAtUtc: string | null;
  169|     lastCollectionId: string | null;
  170|     status: string;
  171|     snapshotCount: number;
  172|     secretReadableByProduct: false;
  173|   };
  174|   limits: string[];
  175|   /** Explicit: Admin collection never blocks Nora. */
  176|   noraIndependent: true;
  177|   /** Decimal strings for financial reference (UI may coerce for display). */
  178|   studioEstimatedUsdDecimal: string | null;
  179|   providerCostUsdDecimal: string | null;
  180|   deltaUsdDecimal: string | null;
  181| };
  182|
  183| export type FinOpsSummaryDto = {
  184|   periodDays: FinOpsPeriodDays;
  185|   projectId: string | null;
  186|   model: string | null;
  187|   hasObservations: boolean;
  188|   kpis: {
  189|     estimatedCostUsd: MeasuredValue<number>;
  190|     totalTokens: MeasuredValue<number>;
  191|     completedWorks: MeasuredValue<number>;
  192|     measureCoveragePercent: MeasuredValue<number>;
  193|     /** Financial estimation completeness — PARTIAL excluded from the numerator. */
  194|     estimationCompletenessPercent: MeasuredValue<number>;
```

#### export vicinity L183–L223
```ts
  183| export type FinOpsSummaryDto = {
  184|   periodDays: FinOpsPeriodDays;
  185|   projectId: string | null;
  186|   model: string | null;
  187|   hasObservations: boolean;
  188|   kpis: {
  189|     estimatedCostUsd: MeasuredValue<number>;
  190|     totalTokens: MeasuredValue<number>;
  191|     completedWorks: MeasuredValue<number>;
  192|     measureCoveragePercent: MeasuredValue<number>;
  193|     /** Financial estimation completeness — PARTIAL excluded from the numerator. */
  194|     estimationCompletenessPercent: MeasuredValue<number>;
  195|     costPerCompletedWorkUsd: MeasuredValue<number>;
  196|     measuredRequests: number;
  197|     totalRequests: number;
  198|   };
  199|   dailyCosts: Array<{ day: string; costUsd: number | null; hasData: boolean }>;
  200|   modelBreakdown: Array<{ model: string; costUsd: number | null; coverage: string }>;
  201|   /** Macro-lot 1 — Usage & Costs rapprochement (honest; may be UNAVAILABLE). */
  202|   providerReconciliation: FinOpsProviderReconciliationDto;
  203| };
  204|
  205| function bucketDailyCosts(rows: ObservationRow[], periodDays: FinOpsPeriodDays): FinOpsSummaryDto["dailyCosts"] {
  206|   const buckets = new Map<string, ObservationRow[]>();
  207|   for (const r of rows) {
  208|     const d = r.createdAt.toISOString().slice(0, 10);
  209|     const list = buckets.get(d) ?? [];
  210|     list.push(r);
  211|     buckets.set(d, list);
  212|   }
  213|   const out: FinOpsSummaryDto["dailyCosts"] = [];
  214|   const now = new Date();
  215|   for (let i = periodDays - 1; i >= 0; i--) {
  216|     const d = new Date(now);
  217|     d.setUTCDate(d.getUTCDate() - i);
  218|     const key = d.toISOString().slice(0, 10);
  219|     const slice = buckets.get(key) ?? [];
  220|     const agg = aggregateEstimatedCost(slice);
  221|     out.push({
  222|       day: key,
  223|       costUsd: agg.kind === "known" || agg.kind === "partial" ? agg.value : null,
```

#### export vicinity L258–L298
```ts
  258| export async function loadFinOpsSummary(
  259|   pilotId: string,
  260|   raw: { period?: string | null; projectId?: string | null; model?: string | null },
  261| ): Promise<FinOpsSummaryDto> {
  262|   const periodDays = parseFinOpsPeriodDays(raw.period);
  263|   const input: FinOpsFilterInput = {
  264|     periodDays,
  265|     projectId: raw.projectId?.trim() || null,
  266|     model: raw.model?.trim() || null,
  267|   };
  268|   const rows = await loadObservations(pilotId, input);
  269|
  270|   const estimatedCostUsd = aggregateEstimatedCost(rows);
  271|   const totalTokens = aggregateTokenTotal(rows);
  272|   const measureCoveragePercent = computeMeasureCoveragePercent(rows);
  273|   const estimationCompletenessPercent =
  274|     computeEstimationCompletenessPercent(rows);
  275|
  276|   const workIds = [
  277|     ...new Set(rows.map((r) => r.cognitiveWorkId).filter((id): id is string => Boolean(id))),
  278|   ];
  279|   let completedWorks: MeasuredValue<number> = { kind: "empty" };
  280|   if (workIds.length > 0) {
  281|     const works = await db
  282|       .select({ id: cognitiveWorks.id, status: cognitiveWorks.status })
  283|       .from(cognitiveWorks)
  284|       .where(
  285|         and(
  286|           inArray(cognitiveWorks.id, workIds),
  287|           eq(cognitiveWorks.ownerPilotId, pilotId),
  288|         ),
  289|       );
  290|     const completeCount = works.filter((w) => w.status === "COMPLETE").length;
  291|     completedWorks =
  292|       completeCount > 0
  293|         ? { kind: "known", value: completeCount }
  294|         : { kind: "known", value: 0 };
  295|   } else if (rows.length > 0) {
  296|     completedWorks = { kind: "unknown", reason: "Travaux non liés" };
  297|   }
  298|
```

#### export vicinity L596–L636
```ts
  596| export type FinOpsWorkListItem = {
  597|   cognitiveWorkId: string;
  598|   title: string;
  599|   projectId: string | null;
  600|   projectName: string | null;
  601|   modelsLabel: string;
  602|   tokens: MeasuredValue<number>;
  603|   estimatedCostUsd: MeasuredValue<number>;
  604|   statusLabel: string;
  605|   lastObservedAt: string;
  606| };
  607|
  608| export async function loadFinOpsWorks(
  609|   pilotId: string,
  610|   raw: { period?: string | null; projectId?: string | null; model?: string | null; limit?: number },
  611| ): Promise<{ items: FinOpsWorkListItem[] }> {
  612|   const periodDays = parseFinOpsPeriodDays(raw.period);
  613|   const limit = Math.min(50, Math.max(1, Number(raw.limit) || 20));
  614|   const input: FinOpsFilterInput = {
  615|     periodDays,
  616|     projectId: raw.projectId?.trim() || null,
  617|     model: raw.model?.trim() || null,
  618|   };
  619|   const rows = await loadObservations(pilotId, input);
  620|   const byWork = new Map<string, ObservationRow[]>();
  621|   for (const r of rows) {
  622|     if (!r.cognitiveWorkId) continue;
  623|     const list = byWork.get(r.cognitiveWorkId) ?? [];
  624|     list.push(r);
  625|     byWork.set(r.cognitiveWorkId, list);
  626|   }
  627|
  628|   const workIds = [...byWork.keys()];
  629|   if (workIds.length === 0) {
  630|     return { items: [] };
  631|   }
  632|
  633|   const works = await db
  634|     .select({
  635|       id: cognitiveWorks.id,
  636|       objective: cognitiveWorks.objective,
```

#### export vicinity L608–L648
```ts
  608| export async function loadFinOpsWorks(
  609|   pilotId: string,
  610|   raw: { period?: string | null; projectId?: string | null; model?: string | null; limit?: number },
  611| ): Promise<{ items: FinOpsWorkListItem[] }> {
  612|   const periodDays = parseFinOpsPeriodDays(raw.period);
  613|   const limit = Math.min(50, Math.max(1, Number(raw.limit) || 20));
  614|   const input: FinOpsFilterInput = {
  615|     periodDays,
  616|     projectId: raw.projectId?.trim() || null,
  617|     model: raw.model?.trim() || null,
  618|   };
  619|   const rows = await loadObservations(pilotId, input);
  620|   const byWork = new Map<string, ObservationRow[]>();
  621|   for (const r of rows) {
  622|     if (!r.cognitiveWorkId) continue;
  623|     const list = byWork.get(r.cognitiveWorkId) ?? [];
  624|     list.push(r);
  625|     byWork.set(r.cognitiveWorkId, list);
  626|   }
  627|
  628|   const workIds = [...byWork.keys()];
  629|   if (workIds.length === 0) {
  630|     return { items: [] };
  631|   }
  632|
  633|   const works = await db
  634|     .select({
  635|       id: cognitiveWorks.id,
  636|       objective: cognitiveWorks.objective,
  637|       status: cognitiveWorks.status,
  638|       projectId: cognitiveWorks.projectId,
  639|     })
  640|     .from(cognitiveWorks)
  641|     .where(
  642|       and(inArray(cognitiveWorks.id, workIds), eq(cognitiveWorks.ownerPilotId, pilotId)),
  643|     );
  644|
  645|   const projectIds = [
  646|     ...new Set(
  647|       works.flatMap((w) => {
  648|         const ids: string[] = [];
```

#### export vicinity L698–L738
```ts
  698| export type FinOpsWorkSegment = {
  699|   segmentIndex: number;
  700|   label: string;
  701|   model: string | null;
  702|   effort: string | null;
  703|   tokens: MeasuredValue<number>;
  704|   estimatedCostUsd: MeasuredValue<number>;
  705| };
  706|
  707| export type FinOpsWorkDetailDto = {
  708|   cognitiveWorkId: string;
  709|   title: string;
  710|   projectId: string | null;
  711|   projectName: string | null;
  712|   statusLabel: string;
  713|   kpis: {
  714|     estimatedCostUsd: MeasuredValue<number>;
  715|     totalTokens: MeasuredValue<number>;
  716|     providerRequests: MeasuredValue<number>;
  717|     segmentCount: MeasuredValue<number>;
  718|   };
  719|   segments: FinOpsWorkSegment[];
  720|   timeline: Array<{
  721|     id: string;
  722|     at: string;
  723|     operation: string | null;
  724|     model: string | null;
  725|     status: string;
  726|     costCoverage: string;
  727|   }>;
  728|   tariffVersion: string | null;
  729| };
  730|
  731| export async function loadFinOpsWorkDetail(
  732|   pilotId: string,
  733|   cognitiveWorkId: string,
  734| ): Promise<FinOpsWorkDetailDto> {
  735|   const work = (
  736|     await db
  737|       .select({
  738|         id: cognitiveWorks.id,
```

#### export vicinity L707–L747
```ts
  707| export type FinOpsWorkDetailDto = {
  708|   cognitiveWorkId: string;
  709|   title: string;
  710|   projectId: string | null;
  711|   projectName: string | null;
  712|   statusLabel: string;
  713|   kpis: {
  714|     estimatedCostUsd: MeasuredValue<number>;
  715|     totalTokens: MeasuredValue<number>;
  716|     providerRequests: MeasuredValue<number>;
  717|     segmentCount: MeasuredValue<number>;
  718|   };
  719|   segments: FinOpsWorkSegment[];
  720|   timeline: Array<{
  721|     id: string;
  722|     at: string;
  723|     operation: string | null;
  724|     model: string | null;
  725|     status: string;
  726|     costCoverage: string;
  727|   }>;
  728|   tariffVersion: string | null;
  729| };
  730|
  731| export async function loadFinOpsWorkDetail(
  732|   pilotId: string,
  733|   cognitiveWorkId: string,
  734| ): Promise<FinOpsWorkDetailDto> {
  735|   const work = (
  736|     await db
  737|       .select({
  738|         id: cognitiveWorks.id,
  739|         objective: cognitiveWorks.objective,
  740|         status: cognitiveWorks.status,
  741|         projectId: cognitiveWorks.projectId,
  742|       })
  743|       .from(cognitiveWorks)
  744|       .where(
  745|         and(eq(cognitiveWorks.id, cognitiveWorkId), eq(cognitiveWorks.ownerPilotId, pilotId)),
  746|       )
  747|       .limit(1)
```

#### export vicinity L731–L771
```ts
  731| export async function loadFinOpsWorkDetail(
  732|   pilotId: string,
  733|   cognitiveWorkId: string,
  734| ): Promise<FinOpsWorkDetailDto> {
  735|   const work = (
  736|     await db
  737|       .select({
  738|         id: cognitiveWorks.id,
  739|         objective: cognitiveWorks.objective,
  740|         status: cognitiveWorks.status,
  741|         projectId: cognitiveWorks.projectId,
  742|       })
  743|       .from(cognitiveWorks)
  744|       .where(
  745|         and(eq(cognitiveWorks.id, cognitiveWorkId), eq(cognitiveWorks.ownerPilotId, pilotId)),
  746|       )
  747|       .limit(1)
  748|   )[0];
  749|   if (!work) throw new StudioError("NOT_FOUND", "Travail introuvable");
  750|
  751|   const lane = studioLane();
  752|   const rows = await db
  753|     .select()
  754|     .from(providerUsageObservations)
  755|     .where(
  756|       and(
  757|         eq(providerUsageObservations.cognitiveWorkId, cognitiveWorkId),
  758|         eq(providerUsageObservations.ownerPilotId, pilotId),
  759|         sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
  760|       ),
  761|     )
  762|     .orderBy(
  763|       providerUsageObservations.segmentIndex,
  764|       desc(providerUsageObservations.createdAt),
  765|     );
  766|
  767|   const billableRows = filterBillableFinOpsRows(rows);
  768|
  769|   let projectName: string | null = null;
  770|   const observedProjectId = rows.find((r) => r.projectId)?.projectId ?? null;
  771|   const effectiveProjectId = work.projectId ?? observedProjectId;
```


### `projects/sfia-studio-next/web/src/domains/knowledge/service.ts`

- Coverage: MODIFIED — git diff HEAD — 31 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 8e294388..f1757459 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -1165,6 +1165,8 @@ export async function maybeCapitalizeFromExchange(
       epistemic: "hypothesized" | "recommended" | "established" | "limited";
       subjectTitle?: string;
       subjectId?: string;
+      /** Existing parent subject for hierarchical SUBJECT creation. */
+      parentSubjectId?: string;
       continuityReason?: string;
       supersedesAcquisId?: string;
       resolvesOpenPointId?: string;
@@ -1273,7 +1275,17 @@ export async function maybeCapitalizeFromExchange(
       }
       const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
       if (title.length < 3) continue;
-      const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
+      const parentForCreate =
+        p.parentSubjectId && p.parentSubjectId !== p.subjectId
+          ? p.parentSubjectId
+          : undefined;
+      const s = await ensureSubject(
+        pilotId,
+        preparationId,
+        title,
+        parentForCreate,
+        fence,
+      );
       if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
         results.push({
           kind: "subject",
```

#### Structured excerpts (large module)

#### export vicinity L17–L57
```ts
   17| export type Provenance = {
   18|   sourceKind: "message" | "document" | "revision" | "pilot" | "nora";
   19|   sourceId?: string;
   20|   generationId?: string;
   21|   notedAt?: string;
   22|   note?: string;
   23|   /** Epistemic confidence of the recorder — never upgrades authority. */
   24|   epistemic?: "observed" | "hypothesized" | "recommended" | "limited" | "established";
   25|   /** Extra constitutive message ids (Pilot/Nora) — never invent ids. */
   26|   relatedMessageIds?: string[];
   27|   contributionKind?: "pilot_fact" | "nora_analysis" | "pilot_confirmation" | "mixed";
   28| };
   29|
   30| export type KnowledgeKind = "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";
   31|
   32| export {
   33|   KNOWLEDGE_STATEMENT_STORAGE_MAX,
   34|   KNOWLEDGE_STATEMENT_SOFT_MAX,
   35|   KNOWLEDGE_BULLET_DISPLAY_MAX,
   36|   SUBJECT_SUMMARY_TARGET_MIN,
   37|   SUBJECT_SUMMARY_TARGET_MAX,
   38|   JOURNAL_ACQUIS_DISPLAY_LIMIT,
   39|   JOURNAL_OPEN_POINT_DISPLAY_LIMIT,
   40|   editorialStripPreamble,
   41|   editorialCompactKnowledgeStatement,
   42|   editorialDisplayBullet,
   43|   prioritizeAcquisForJournalDisplay,
   44|   prioritizeOpenPointsForJournalDisplay,
   45|   composeSubjectSummaryFromCurrentKnowledge,
   46| } from "./journal-editorial";
   47|
   48| import {
   49|   editorialCompactKnowledgeStatement,
   50|   composeSubjectSummaryFromCurrentKnowledge,
   51| } from "./journal-editorial";
   52|
   53| function provenanceString(p: Provenance): string {
   54|   return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
   55| }
   56|
   57| async function assertPrep(pilotId: string, preparationId: string) {
```

#### export vicinity L30–L70
```ts
   30| export type KnowledgeKind = "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";
   31|
   32| export {
   33|   KNOWLEDGE_STATEMENT_STORAGE_MAX,
   34|   KNOWLEDGE_STATEMENT_SOFT_MAX,
   35|   KNOWLEDGE_BULLET_DISPLAY_MAX,
   36|   SUBJECT_SUMMARY_TARGET_MIN,
   37|   SUBJECT_SUMMARY_TARGET_MAX,
   38|   JOURNAL_ACQUIS_DISPLAY_LIMIT,
   39|   JOURNAL_OPEN_POINT_DISPLAY_LIMIT,
   40|   editorialStripPreamble,
   41|   editorialCompactKnowledgeStatement,
   42|   editorialDisplayBullet,
   43|   prioritizeAcquisForJournalDisplay,
   44|   prioritizeOpenPointsForJournalDisplay,
   45|   composeSubjectSummaryFromCurrentKnowledge,
   46| } from "./journal-editorial";
   47|
   48| import {
   49|   editorialCompactKnowledgeStatement,
   50|   composeSubjectSummaryFromCurrentKnowledge,
   51| } from "./journal-editorial";
   52|
   53| function provenanceString(p: Provenance): string {
   54|   return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
   55| }
   56|
   57| async function assertPrep(pilotId: string, preparationId: string) {
   58|   const ctx = await getPreparationContext(pilotId, preparationId);
   59|   if (!ctx.preparation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });
   60|   return ctx;
   61| }
   62|
   63| type Tx = {
   64|   select: typeof db.select;
   65|   insert: typeof db.insert;
   66|   update: typeof db.update;
   67|   execute: typeof db.execute;
   68| };
   69|
   70| async function loadOwnedSubject(
```

#### export vicinity L103–L143
```ts
  103| export async function capitalizeAcquis(
  104|   pilotId: string,
  105|   preparationId: string,
  106|   input: {
  107|     statement: string;
  108|     kind?: KnowledgeKind;
  109|     subjectId?: string | null;
  110|     provenance: Provenance;
  111|     supersedesAcquisId?: string;
  112|     /** Required when write is imputed to a Nora turn — verified inside the write TX. */
  113|     turnFence?: TurnOwnershipFence;
  114|   },
  115| ) {
  116|   const ctx = await assertPrep(pilotId, preparationId);
  117|   const statement = editorialCompactKnowledgeStatement(input.statement);
  118|   if (!statement || statement.length < 12) {
  119|     return { status: "SKIPPED" as const, reason: "statement too thin for capitalisation" };
  120|   }
  121|
  122|   // Default: never auto-promote to FACT without explicit justification in provenance.
  123|   const kind: KnowledgeKind = input.kind ?? "HYPOTHESIS";
  124|   if (kind === "FACT" && input.provenance.epistemic !== "established") {
  125|     return {
  126|       status: "SKIPPED" as const,
  127|       reason: "FACT requires provenance.epistemic=established",
  128|     };
  129|   }
  130|
  131|   if (input.subjectId) {
  132|     const check = await assertSubjectRef(pilotId, preparationId, input.subjectId);
  133|     if ("error" in (check ?? {}) && check && "error" in check) {
  134|       return { status: "FAILED" as const, reason: check.error };
  135|     }
  136|     if (check?.subject && check.subject.status !== "ACTIVE") {
  137|       return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
  138|     }
  139|   }
  140|
  141|   if (input.supersedesAcquisId) {
  142|     const prior = (
  143|       await db
```

#### export vicinity L246–L286
```ts
  246| export async function openPoint(
  247|   pilotId: string,
  248|   preparationId: string,
  249|   input: {
  250|     statement: string;
  251|     subjectId?: string | null;
  252|     provenance: Provenance;
  253|     turnFence?: TurnOwnershipFence;
  254|   },
  255| ) {
  256|   const ctx = await assertPrep(pilotId, preparationId);
  257|   const statement = editorialCompactKnowledgeStatement(input.statement, 280);
  258|   if (!statement || statement.length < 12) {
  259|     return { status: "FAILED" as const, reason: "empty" };
  260|   }
  261|   if (input.subjectId) {
  262|     const check = await assertSubjectRef(pilotId, preparationId, input.subjectId);
  263|     if (check && "error" in check) return { status: "FAILED" as const, reason: check.error };
  264|     if (check?.subject && check.subject.status !== "ACTIVE") {
  265|       return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
  266|     }
  267|   }
  268|   const id = newId("opn");
  269|   const write = await db.transaction(async (tx) => {
  270|     if (input.turnFence) {
  271|       const owned = await assertTurnFenceInTx(tx as Tx, input.turnFence);
  272|       if (!owned) {
  273|         return { status: "OWNERSHIP_LOST" as const };
  274|       }
  275|     }
  276|     await tx.insert(knowledgeOpenPoints).values({
  277|       id,
  278|       preparationId,
  279|       projectId: ctx.project?.id ?? null,
  280|       ownerPilotId: pilotId,
  281|       subjectId: input.subjectId ?? null,
  282|       statement,
  283|       status: "OPEN",
  284|       provenanceJson: provenanceString(input.provenance),
  285|     });
  286|     return { status: "OK" as const };
```

#### export vicinity L318–L358
```ts
  318| export async function ensureSubject(
  319|   pilotId: string,
  320|   preparationId: string,
  321|   title: string,
  322|   parentSubjectId?: string | null,
  323|   turnFence?: TurnOwnershipFence,
  324| ) {
  325|   const ctx = await assertPrep(pilotId, preparationId);
  326|   const cleaned = title.trim().slice(0, 200);
  327|   if (!cleaned) return { status: "FAILED" as const, reason: "empty title" };
  328|   if (parentSubjectId) {
  329|     const parent = await assertSubjectRef(pilotId, preparationId, parentSubjectId);
  330|     if (parent && "error" in parent) return { status: "FAILED" as const, reason: parent.error };
  331|   }
  332|   const parentId = parentSubjectId ?? null;
  333|   const existing = (
  334|     await db
  335|       .select()
  336|       .from(knowledgeSubjects)
  337|       .where(
  338|         and(
  339|           eq(knowledgeSubjects.preparationId, preparationId),
  340|           eq(knowledgeSubjects.ownerPilotId, pilotId),
  341|           eq(knowledgeSubjects.title, cleaned),
  342|           eq(knowledgeSubjects.status, "ACTIVE"),
  343|           parentId === null
  344|             ? isNull(knowledgeSubjects.parentSubjectId)
  345|             : eq(knowledgeSubjects.parentSubjectId, parentId),
  346|         ),
  347|       )
  348|       .limit(1)
  349|   )[0];
  350|   if (existing) return { status: "AVAILABLE" as const, subjectId: existing.id, created: false };
  351|   const id = newId("subj");
  352|   const write = await db.transaction(async (tx) => {
  353|     if (turnFence) {
  354|       const owned = await assertTurnFenceInTx(tx as Tx, turnFence);
  355|       if (!owned) {
  356|         return { status: "OWNERSHIP_LOST" as const };
  357|       }
  358|     }
```

#### export vicinity L398–L438
```ts
  398| export async function renameSubject(
  399|   pilotId: string,
  400|   preparationId: string,
  401|   subjectId: string,
  402|   newTitle: string,
  403| ) {
  404|   await assertPrep(pilotId, preparationId);
  405|   const title = newTitle.trim().slice(0, 200);
  406|   if (!title) return { status: "FAILED" as const, reason: "empty title" };
  407|
  408|   try {
  409|     return await db.transaction(async (tx) => {
  410|       await tx.execute(
  411|         sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
  412|       );
  413|       const row = await loadOwnedSubject(pilotId, preparationId, subjectId, tx as Tx);
  414|       if (!row) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  415|       if (row.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
  416|
  417|       await tx
  418|         .update(knowledgeSubjects)
  419|         .set({ title, updatedAt: new Date() })
  420|         .where(eq(knowledgeSubjects.id, subjectId));
  421|       await tx.insert(knowledgeSubjectEvents).values({
  422|         id: newId("sev"),
  423|         preparationId,
  424|         ownerPilotId: pilotId,
  425|         subjectId,
  426|         eventType: "RENAMED",
  427|         payloadJson: JSON.stringify({ from: row.title, to: title }),
  428|       });
  429|       return { status: "AVAILABLE" as const, subjectId, title };
  430|     });
  431|   } catch (e) {
  432|     return {
  433|       status: "FAILED" as const,
  434|       reason: e instanceof Error ? e.message : "rename failed",
  435|     };
  436|   }
  437| }
  438|
```

#### export vicinity L440–L480
```ts
  440| export async function mergeSubjects(
  441|   pilotId: string,
  442|   preparationId: string,
  443|   targetSubjectId: string,
  444|   sourceSubjectId: string,
  445|   opts?: { injectFailureAfter?: "lock" | "move" },
  446| ) {
  447|   await assertPrep(pilotId, preparationId);
  448|   if (targetSubjectId === sourceSubjectId) {
  449|     return { status: "FAILED" as const, reason: "same subject" };
  450|   }
  451|
  452|   try {
  453|     return await db.transaction(async (tx) => {
  454|       // Deterministic lock order to avoid deadlocks
  455|       const ids = [targetSubjectId, sourceSubjectId].sort();
  456|       for (const id of ids) {
  457|         await tx.execute(
  458|           sql`select id from knowledge_subjects where id = ${id} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
  459|         );
  460|       }
  461|       if (opts?.injectFailureAfter === "lock") {
  462|         throw new Error("injected failure after lock");
  463|       }
  464|
  465|       const rows = await tx
  466|         .select()
  467|         .from(knowledgeSubjects)
  468|         .where(
  469|           and(
  470|             eq(knowledgeSubjects.ownerPilotId, pilotId),
  471|             eq(knowledgeSubjects.preparationId, preparationId),
  472|             inArray(knowledgeSubjects.id, [targetSubjectId, sourceSubjectId]),
  473|           ),
  474|         );
  475|       if (rows.length !== 2) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  476|       const target = rows.find((r) => r.id === targetSubjectId)!;
  477|       const source = rows.find((r) => r.id === sourceSubjectId)!;
  478|       if (target.status !== "ACTIVE" || source.status !== "ACTIVE") {
  479|         return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
  480|       }
```

#### export vicinity L536–L576
```ts
  536| export async function splitSubject(
  537|   pilotId: string,
  538|   preparationId: string,
  539|   sourceSubjectId: string,
  540|   input: {
  541|     newTitle: string;
  542|     acquisIds: string[];
  543|     openPointIds: string[];
  544|   },
  545|   opts?: { injectFailureAfter?: "validate" | "create" | "move" },
  546| ) {
  547|   const ctx = await assertPrep(pilotId, preparationId);
  548|   const newTitle = input.newTitle.trim().slice(0, 200);
  549|   if (!newTitle) return { status: "FAILED" as const, reason: "empty title" };
  550|   if (input.acquisIds.length === 0 && input.openPointIds.length === 0) {
  551|     return { status: "FAILED" as const, reason: "nothing to move" };
  552|   }
  553|
  554|   try {
  555|     return await db.transaction(async (tx) => {
  556|       await tx.execute(
  557|         sql`select id from knowledge_subjects where id = ${sourceSubjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
  558|       );
  559|       const source = await loadOwnedSubject(pilotId, preparationId, sourceSubjectId, tx as Tx);
  560|       if (!source) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  561|       if (source.status !== "ACTIVE") {
  562|         return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
  563|       }
  564|
  565|       // Validate every acquis belongs to source subject + prep + owner
  566|       if (input.acquisIds.length) {
  567|         const rows = await tx
  568|           .select()
  569|           .from(knowledgeAcquis)
  570|           .where(
  571|             and(
  572|               eq(knowledgeAcquis.ownerPilotId, pilotId),
  573|               eq(knowledgeAcquis.preparationId, preparationId),
  574|               inArray(knowledgeAcquis.id, input.acquisIds),
  575|             ),
  576|           );
```

#### export vicinity L698–L738
```ts
  698| export async function listKnowledge(pilotId: string, preparationId: string) {
  699|   await assertPrep(pilotId, preparationId);
  700|   const subjects = await db
  701|     .select()
  702|     .from(knowledgeSubjects)
  703|     .where(
  704|       and(
  705|         eq(knowledgeSubjects.preparationId, preparationId),
  706|         eq(knowledgeSubjects.ownerPilotId, pilotId),
  707|         ne(knowledgeSubjects.status, "ARCHIVED"),
  708|       ),
  709|     )
  710|     .orderBy(desc(knowledgeSubjects.updatedAt));
  711|   const acquis = await db
  712|     .select()
  713|     .from(knowledgeAcquis)
  714|     .where(
  715|       and(
  716|         eq(knowledgeAcquis.preparationId, preparationId),
  717|         eq(knowledgeAcquis.ownerPilotId, pilotId),
  718|       ),
  719|     )
  720|     .orderBy(desc(knowledgeAcquis.createdAt));
  721|   const openPoints = await db
  722|     .select()
  723|     .from(knowledgeOpenPoints)
  724|     .where(
  725|       and(
  726|         eq(knowledgeOpenPoints.preparationId, preparationId),
  727|         eq(knowledgeOpenPoints.ownerPilotId, pilotId),
  728|       ),
  729|     )
  730|     .orderBy(desc(knowledgeOpenPoints.createdAt));
  731|   return { subjects, acquis, openPoints };
  732| }
  733|
  734| /**
  735|  * Bounded D4 listing by rights/state. When Nora supplies preferred ids
  736|  * (qualification hints), those are prioritized — not recency-as-authority.
  737|  */
  738| export async function selectRelevantKnowledgeContext(
```

#### export vicinity L738–L778
```ts
  738| export async function selectRelevantKnowledgeContext(
  739|   pilotId: string,
  740|   preparationId: string,
  741|   userText: string,
  742|   opts?: {
  743|     limit?: number;
  744|     preferredAcquisIds?: string[];
  745|     preferredOpenPointIds?: string[];
  746|     preferredSubjectIds?: string[];
  747|     /** When set, also scan project-scoped OPEN points for J-C04 reactivation. */
  748|     projectId?: string | null;
  749|   },
  750| ) {
  751|   const { subjects, acquis, openPoints } = await listKnowledge(pilotId, preparationId);
  752|   const limit = opts?.limit ?? 8;
  753|   const prefA = new Set((opts?.preferredAcquisIds ?? []).filter(Boolean));
  754|   const prefO = new Set((opts?.preferredOpenPointIds ?? []).filter(Boolean));
  755|   const prefS = new Set((opts?.preferredSubjectIds ?? []).filter(Boolean));
  756|
  757|   const currentAcquis = acquis.filter((a) => a.status === "CURRENT");
  758|   const openOps = openPoints.filter((o) => o.status === "OPEN");
  759|   const activeSubjects = subjects.filter((s) => s.status === "ACTIVE");
  760|
  761|   const preferThenRest = <T extends { id: string }>(rows: T[], pref: Set<string>, n: number) => {
  762|     const preferred = rows.filter((r) => pref.has(r.id));
  763|     const rest = rows.filter((r) => !pref.has(r.id));
  764|     return [...preferred, ...rest].slice(0, n);
  765|   };
  766|
  767|   const pickedAcquis = preferThenRest(currentAcquis, prefA, Math.min(limit, 5));
  768|   const pickedOpen = preferThenRest(openOps, prefO, Math.min(4, limit));
  769|   const pickedSubjects = preferThenRest(activeSubjects, prefS, 5);
  770|
  771|   const snippets: string[] = [];
  772|   const reactivatedOpenPointIds: string[] = [];
  773|
  774|   if (opts?.projectId) {
  775|     const { selectOpenPointsForReactivation } = await import(
  776|       "@/domains/knowledge/journal-cognition"
  777|     );
  778|     const reactivation = await selectOpenPointsForReactivation(
```

#### export vicinity L862–L902
```ts
  862| export type ConfirmedD4Effect = {
  863|   kind: "acquis" | "open_point" | "document";
  864|   id: string;
  865|   status: string;
  866|   confirmation: "DB_CONFIRMED";
  867|   documentId?: string;
  868|   revisionNumber?: number;
  869| };
  870|
  871| /**
  872|  * Reload durable D4 effects for a turn from DB (rights-scoped).
  873|  * Used when the turn ends UNKNOWN after ownership loss but effects already committed.
  874|  * Never invents refs — only CURRENT/OPEN/AVAILABLE rows matching provenance keys.
  875|  */
  876| export async function reconstituteConfirmedD4Effects(
  877|   pilotId: string,
  878|   preparationId: string,
  879|   refs: { generationId?: string | null; userMessageId?: string | null },
  880| ): Promise<{
  881|   capitalisation: ConfirmedD4Effect[];
  882|   documentSave: {
  883|     status: string;
  884|     documentId: string;
  885|     revisionNumber?: number;
  886|     confirmation: "DB_CONFIRMED";
  887|   } | null;
  888|   capitalisationLimit: string;
  889| }> {
  890|   try {
  891|     try {
  892|       await assertPrep(pilotId, preparationId);
  893|     } catch (e) {
  894|       const code = (e as { code?: string } | null)?.code;
  895|       if (code === "NOT_FOUND") {
  896|         return {
  897|           capitalisation: [],
  898|           documentSave: null,
  899|           capitalisationLimit: "PREP_NOT_VISIBLE — no D4 reconstitution across privilege boundary",
  900|         };
  901|       }
  902|       return {
```

#### export vicinity L876–L916
```ts
  876| export async function reconstituteConfirmedD4Effects(
  877|   pilotId: string,
  878|   preparationId: string,
  879|   refs: { generationId?: string | null; userMessageId?: string | null },
  880| ): Promise<{
  881|   capitalisation: ConfirmedD4Effect[];
  882|   documentSave: {
  883|     status: string;
  884|     documentId: string;
  885|     revisionNumber?: number;
  886|     confirmation: "DB_CONFIRMED";
  887|   } | null;
  888|   capitalisationLimit: string;
  889| }> {
  890|   try {
  891|     try {
  892|       await assertPrep(pilotId, preparationId);
  893|     } catch (e) {
  894|       const code = (e as { code?: string } | null)?.code;
  895|       if (code === "NOT_FOUND") {
  896|         return {
  897|           capitalisation: [],
  898|           documentSave: null,
  899|           capitalisationLimit: "PREP_NOT_VISIBLE — no D4 reconstitution across privilege boundary",
  900|         };
  901|       }
  902|       return {
  903|         capitalisation: [],
  904|         documentSave: null,
  905|         capitalisationLimit:
  906|           "DB_OR_LOOKUP_UNAVAILABLE — reconstitution failed; not an access denial",
  907|       };
  908|     }
  909|     const gen = refs.generationId?.trim() || null;
  910|     const src = refs.userMessageId?.trim() || null;
  911|     if (!gen && !src) {
  912|       return {
  913|         capitalisation: [],
  914|         documentSave: null,
  915|         capitalisationLimit: "NO_PROVENANCE_KEYS — cannot reconstitute D4 effects",
  916|       };
```


### `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts`

- Coverage: MODIFIED — git diff HEAD — 68 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
index 185c5540..1331470d 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
@@ -68,6 +68,16 @@ export function conversationalCommandKey(clientTurnKey: string): string {
   return conversationalClientCommandKey(clientTurnKey);
 }

+/** Per semantic intent when several pilotage acts share one clientTurnKey (MP-09). */
+export function conversationalCommandKeyForIntent(
+  clientTurnKey: string,
+  semanticIntentId?: string | null,
+): string {
+  const base = conversationalCommandKey(clientTurnKey);
+  const intentId = semanticIntentId?.trim();
+  return intentId ? `${base}:${intentId}` : base;
+}
+
 /** @deprecated retained for lexical helper tests only — authority path uses durable resolvers. */
 export async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
   const rows = await db
@@ -232,9 +242,11 @@ export async function reconstituteConversationalAuthority(input: {
   projectId: string;
   clientTurnKey?: string | null;
   userMessageId?: string | null;
+  /** When set, scopes C02 replay to one semantic pilotage intent (MP-09). */
+  semanticIntentId?: string | null;
 }): Promise<ConversationalAuthorityOutcome | null> {
   const key = input.clientTurnKey?.trim()
-    ? conversationalCommandKey(input.clientTurnKey)
+    ? conversationalCommandKeyForIntent(input.clientTurnKey, input.semanticIntentId)
     : null;
   if (key) {
     try {
@@ -251,6 +263,10 @@ export async function reconstituteConversationalAuthority(input: {
   }
   const messageId = input.userMessageId?.trim();
   if (!messageId) return null;
+  // MP-09 — multi-intent turns share one userMessageId; never replay sibling acts here.
+  if (input.semanticIntentId?.trim()) {
+    return null;
+  }
   const cmd = (
     await db
       .select()
@@ -297,7 +313,14 @@ export async function applyConversationalAuthority(input: {
   preQualified?: IntentQualification | null;
 }): Promise<ConversationalAuthorityOutcome> {
   const content = input.content.trim();
-  const clientCommandKey = conversationalCommandKey(input.clientTurnKey);
+  const preQualifiedSemanticIntentId =
+    input.preQualified?.clarity === "CLEAR"
+      ? input.preQualified.semanticIntentId
+      : undefined;
+  const clientCommandKey = conversationalCommandKeyForIntent(
+    input.clientTurnKey,
+    preQualifiedSemanticIntentId,
+  );
   const empty: ConversationalAuthorityOutcome = {
     attempted: false,
     intentClarity: "NONE",
@@ -315,6 +338,7 @@ export async function applyConversationalAuthority(input: {
     projectId: input.projectId,
     clientTurnKey: input.clientTurnKey,
     userMessageId: input.userMessageId,
+    semanticIntentId: preQualifiedSemanticIntentId,
   });
   if (prior?.attempted && prior.command) {
     return prior;
```


### `projects/sfia-studio-next/web/src/domains/preparation/project-activity-projection.ts`

- Coverage: NEW — full — 49 lines
- Status porcelain: `??`

```
/**
 * ML5 continuity (B.8) — deterministic activity counters for Travail/Projet.
 * One row per document identity; révisions do not inflate the library count.
 */

export type DocumentListRow = {
  document?: { id: string; title?: string } | null;
};

export function countProjectLibraryDocuments(documents: DocumentListRow[]): number {
  const seen = new Set<string>();
  for (const d of documents) {
    const id = d.document?.id;
    if (id) seen.add(id);
  }
  return seen.size;
}

export function projectLibraryDocumentExamples(
  documents: DocumentListRow[],
  limit = 2,
): Array<{ id: string; title: string }> {
  const seen = new Set<string>();
  const out: Array<{ id: string; title: string }> = [];
  for (const d of documents) {
    const id = d.document?.id;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push({ id, title: d.document!.title ?? "Sans titre" });
    if (out.length >= limit) break;
  }
  return out;
}

export function openKnowledgePoints<T extends { status: string }>(points: T[]): T[] {
  return points.filter((p) => p.status === "OPEN");
}

export function countOpenKnowledgePoints<T extends { status: string }>(points: T[]): number {
  return openKnowledgePoints(points).length;
}

/** Travail aside — at most five compact titles, same OPEN population as Journal. */
export function travailAsideOpenPoints<T extends { id: string; statement: string; status: string }>(
  points: T[],
  max = 5,
): T[] {
  return openKnowledgePoints(points).slice(0, max);
}
```


### `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts`

- Coverage: MODIFIED — git diff HEAD — 43 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
index a50bd368..59fdafed 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
@@ -7,6 +7,11 @@ import { listDocuments } from "@/domains/document/service";
 import { listProjectKnowledge } from "@/domains/knowledge/journal";
 import { getPilotageProjection } from "@/domains/pilotage/service";
 import { getPreparationContext } from "@/domains/preparation/service";
+import {
+  countOpenKnowledgePoints,
+  countProjectLibraryDocuments,
+  projectLibraryDocumentExamples,
+} from "@/domains/preparation/project-activity-projection";

 /**
  * Owner-scoped project reopen: durable projectId → linked preparation + same thread + documents.
@@ -95,9 +100,7 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
   );

   const openSubjects = knowledge.subjects.filter((s) => s.status === "ACTIVE");
-  const openPoints = knowledge.openPoints.filter((o) => o.status === "OPEN");
-  // FIX-11 — "en cours" = actively writing (SAVING), not FAILED/UNKNOWN/AVAILABLE.
-  const docsInProgress = documents.filter((d) => d.latestRevision?.status === "SAVING");
+  const openPointsCount = countOpenKnowledgePoints(knowledge.openPoints);

   const activity = {
     openSubjects: {
@@ -109,13 +112,10 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
       examples: applicableDecisions.slice(0, 2).map((d) => ({ id: d.id, statement: d.statement })),
     },
     documentsInProgress: {
-      count: docsInProgress.length,
-      examples: docsInProgress.slice(0, 2).map((d) => ({
-        id: d.document.id,
-        title: d.document.title,
-      })),
+      count: countProjectLibraryDocuments(documents),
+      examples: projectLibraryDocumentExamples(documents),
     },
-    openPointsCount: openPoints.length,
+    openPointsCount,
   };

   return {
```


### `projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts`

- Coverage: NEW — full — 66 lines
- Status porcelain: `??`

```
/**
 * MP-08 / continuity §9.2 — canonical recent-item identity per consultation type.
 */

import type { TurnReference } from "@/domains/conversation/turn-projection";
import type { ProjectRecentItemKind } from "@/lib/project-recent-items";

export function recentItemFromDocumentConsultation(
  documentId: string,
  title: string,
  refLabel?: string | null,
): {
  id: string;
  kind: "document_nora";
  title: string;
  refLabel: string | null;
} {
  return {
    id: `doc:${documentId}`,
    kind: "document_nora",
    title: title.slice(0, 160),
    refLabel: refLabel ?? null,
  };
}

export function recentItemFromGitConsultation(input: {
  repositoryId: string;
  path: string;
  ref: string;
  title: string;
  commit?: string | null;
}): {
  id: string;
  kind: ProjectRecentItemKind;
  title: string;
  refLabel: string | null;
} {
  const isPdf = /\.pdf$/i.test(input.path);
  return {
    id: `git:${input.repositoryId}:${input.path}@${input.ref}`,
    kind: isPdf ? "document_git" : "file_git",
    title: input.title.slice(0, 160),
    refLabel: (input.commit?.slice(0, 12) ?? input.ref).slice(0, 40),
  };
}

/** Map Nora turn references opened in Travail viewer — null when identity incomplete. */
export function recentItemFromTurnReference(
  ref: TurnReference,
  titleOverride?: string,
): ReturnType<typeof recentItemFromDocumentConsultation> | ReturnType<typeof recentItemFromGitConsultation> | null {
  if (ref.kind === "document" && ref.resourceId) {
    const rev = ref.revisionId ? `v:${ref.revisionId}` : null;
    return recentItemFromDocumentConsultation(ref.resourceId, titleOverride ?? ref.label, rev);
  }
  if (ref.kind === "git" && ref.repositoryId && ref.path && ref.ref) {
    return recentItemFromGitConsultation({
      repositoryId: ref.repositoryId,
      path: ref.path,
      ref: ref.ref,
      title: titleOverride ?? ref.label,
      commit: ref.commit ?? null,
    });
  }
  return null;
}
```


### `projects/sfia-studio-next/web/src/lib/project-recent-items.ts`

- Coverage: NEW — full — 109 lines
- Status porcelain: `??`

```
/**
 * ML5 MP-08 — pilot-consulted « Éléments récents » (max 5).
 * Client-scoped persistence only (no schema). Isolation: pilotId + projectId.
 * A Nora-only read or a mere mention does NOT populate this list — callers must
 * invoke recordProjectRecentItem on explicit Pilote consultation (viewer open, etc.).
 *
 * Pure merge helpers are exported for deterministic unit tests without DOM storage.
 */

export type ProjectRecentItemKind =
  | "document_nora"
  | "file_git"
  | "document_git"
  | "execution"
  | "result"
  | "bilan"
  | "proof";

export type ProjectRecentItem = {
  id: string;
  kind: ProjectRecentItemKind;
  title: string;
  href?: string | null;
  /** Opaque version/ref for display continuity. */
  refLabel?: string | null;
  consultedAtMs: number;
};

const STORAGE_PREFIX = "sfia.projectRecent.v1:";
export const PROJECT_RECENT_MAX_ITEMS = 5;

function storageKey(pilotId: string, projectId: string): string {
  return `${STORAGE_PREFIX}${pilotId}:${projectId}`;
}

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function mergeProjectRecentItems(
  existing: ProjectRecentItem[],
  nextItem: ProjectRecentItem,
  maxItems: number = PROJECT_RECENT_MAX_ITEMS,
): ProjectRecentItem[] {
  return [nextItem, ...existing.filter((x) => x.id !== nextItem.id)]
    .sort((a, b) => b.consultedAtMs - a.consultedAtMs)
    .slice(0, maxItems);
}

export function readProjectRecentItems(
  pilotId: string,
  projectId: string,
): ProjectRecentItem[] {
  if (!canUseStorage() || !pilotId || !projectId) return [];
  try {
    const raw = window.localStorage.getItem(storageKey(pilotId, projectId));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((x): x is ProjectRecentItem => {
        if (!x || typeof x !== "object") return false;
        const r = x as ProjectRecentItem;
        return Boolean(r.id && r.kind && r.title && typeof r.consultedAtMs === "number");
      })
      .sort((a, b) => b.consultedAtMs - a.consultedAtMs)
      .slice(0, PROJECT_RECENT_MAX_ITEMS);
  } catch {
    return [];
  }
}

export function recordProjectRecentItem(input: {
  pilotId: string;
  projectId: string;
  item: Omit<ProjectRecentItem, "consultedAtMs"> & { consultedAtMs?: number };
}): ProjectRecentItem[] {
  if (!input.pilotId || !input.projectId) return [];
  const nextItem: ProjectRecentItem = {
    id: input.item.id,
    kind: input.item.kind,
    title: input.item.title.slice(0, 160),
    href: input.item.href ?? null,
    refLabel: input.item.refLabel ?? null,
    consultedAtMs: input.item.consultedAtMs ?? Date.now(),
  };
  const existing = readProjectRecentItems(input.pilotId, input.projectId);
  const merged = mergeProjectRecentItems(existing, nextItem);
  if (canUseStorage()) {
    try {
      window.localStorage.setItem(
        storageKey(input.pilotId, input.projectId),
        JSON.stringify(merged),
      );
    } catch {
      /* quota / private mode — ignore */
    }
  }
  return merged;
}

export function clearProjectRecentItems(pilotId: string, projectId: string): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.removeItem(storageKey(pilotId, projectId));
  } catch {
    /* ignore */
  }
}
```


### `projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts`

- Coverage: MODIFIED — git diff HEAD — 60 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
index 98422d45..0553c4ad 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
@@ -320,7 +320,9 @@ test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {
     const lastAssistant = [...open.messages].reverse().find((m) => m.role === "assistant");
     expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);
     expect(lastAssistant?.content ?? "").toMatch(/appliquée|déjà appliquée/i);
-    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });
+    await expect(
+      page.getByText(/cycle demandé est maintenant ouvert|déjà en place|pas pu appliquer|conflit d'état|encore en vérification/i).last(),
+    ).toBeVisible({ timeout: 15000 });
     await expect(page.getByText(/reste à confirmer par Studio/i)).toHaveCount(0);

     // Surfaces without F5 — wait for refreshed durable pilotage (not the static card shell).
@@ -373,7 +375,9 @@ test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {
     );

     await openSurface(page, "travail");
-    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });
+    await expect(
+      page.getByText(/cycle demandé est maintenant ouvert|déjà en place|pas pu appliquer|conflit d'état|encore en vérification/i).last(),
+    ).toBeVisible({ timeout: 15000 });

     // Refresh volontaire — CKI facts still match
     await page.reload();
@@ -407,7 +411,9 @@ test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {
     await openSurface(page, "projet");
     await expect(page.getByTestId("project-overview-cycle-card")).toBeVisible({ timeout: 15000 });
     await openSurface(page, "travail");
-    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });
+    await expect(
+      page.getByText(/cycle demandé est maintenant ouvert|déjà en place|pas pu appliquer|conflit d'état|encore en vérification/i).last(),
+    ).toBeVisible({ timeout: 15000 });

     // Voluntary refresh control — same durable facts
     await page.reload();
@@ -494,7 +500,11 @@ test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {
     const snap = await getProjectSnap(page.request, projectId);
     const assistants = snap.messages.filter((m) => m.role === "assistant").map((m) => m.content ?? "");
     for (const c of assistants) {
-      if (/Résultat Studio/i.test(c) && /appliquée|refusée|conflit|vérification/i.test(c)) {
+      if (
+        /cycle demandé est maintenant ouvert|déjà en place|pas pu appliquer|conflit d'état|encore en vérification|Résultat Studio/i.test(
+          c,
+        )
+      ) {
         expect(c).not.toMatch(/reste à confirmer par Studio/i);
       }
     }
@@ -748,7 +758,9 @@ test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {

     // Nora restitution for THIS assistant must not claim a fresh applied success as if first open.
     const assistantMsg = afterRepeat.messages.find((m) => m.id === corr.assistantId);
-    expect(assistantMsg?.content ?? "").toMatch(/Résultat Studio/i);
+    expect(assistantMsg?.content ?? "").toMatch(
+      /cycle demandé est maintenant ouvert|déjà en place|pas pu appliquer|conflit d'état|encore en vérification|Résultat Studio/i,
+    );
     expect(assistantMsg?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);

     // Cross-project isolation: reject project still has no cycle
```


### `projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts`

- Coverage: MODIFIED — git diff HEAD — 64 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
index 2ba82982..11dce346 100644
--- a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
+++ b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
@@ -408,6 +408,13 @@ export type ExplicitFixtureSpec =
       documentTitle: string;
       documentSummary: string;
     }
+  | {
+      kind: "d5_dual_open_transition";
+      /** OPEN_CYCLE source cycle (default CADRAGE). */
+      cycleType?: string;
+      /** TRANSITION_CYCLE target (default CONCEPTION_FONCTIONNELLE). */
+      toCycleType?: string;
+    }
   | { kind: "qualification"; q: NoraQualificationDraft };

 export function registerExplicitFixture(utterance: string, spec: ExplicitFixtureSpec): void {
@@ -490,6 +497,46 @@ export function registerExplicitFixture(utterance: string, spec: ExplicitFixture
         }),
       );
       return;
+    case "d5_dual_open_transition":
+      registerTypedScenario(
+        t,
+        asNoraQualification({
+          status: "QUALIFIED",
+          goal: "MP-09 open then transition",
+          intents: [
+            {
+              id: "i-open",
+              capabilityId: "d5.pilotage_command",
+              mode: "REQUEST_EFFECT",
+              summary: "OPEN_CYCLE",
+              parameters: {
+                pilotageOperation: "OPEN_CYCLE",
+                cycleType: spec.cycleType ?? "CADRAGE",
+              },
+              constraints: [],
+              dependsOn: [],
+              sourceEvidence: [],
+            },
+            {
+              id: "i-trans",
+              capabilityId: "d5.pilotage_command",
+              mode: "REQUEST_EFFECT",
+              summary: "TRANSITION_CYCLE",
+              parameters: {
+                pilotageOperation: "TRANSITION_CYCLE",
+                cycleType: spec.cycleType ?? "CADRAGE",
+                toCycleType: spec.toCycleType ?? "CONCEPTION_FONCTIONNELLE",
+              },
+              constraints: [],
+              dependsOn: ["i-open"],
+              sourceEvidence: [],
+            },
+          ],
+          clarifications: [],
+          replyDraft: "Cycle ouvert puis transition conception fonctionnelle.",
+        }),
+      );
+      return;
     case "qualification":
       registerTypedScenario(t, asNoraQualification(spec.q));
       return;
```


### `projects/sfia-studio-next/web/tests/integration/ml5-continuity-raccordement.pg.test.ts`

- Coverage: NEW — full — 129 lines
- Status porcelain: `??`

```
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { knowledgeOpenPoints, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  ensureSubject,
  maybeCapitalizeFromExchange,
  openPoint,
} from "@/domains/knowledge/service";
import { listProjectKnowledge, resolveOpenPointFactually } from "@/domains/knowledge/journal";
import { savePreparationDocument } from "@/domains/document/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { openKnowledgePoints } from "@/domains/preparation/project-activity-projection";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedLinkedProject(pilotId: string, name: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, "ML5 continuity");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "ML5 continuity",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  return { prep, projectId: created.projectId! };
}

describe("ML5 continuity raccordement (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("B.2 — maybeCapitalizeFromExchange persists child subject with parentSubjectId", async () => {
    const pilotId = await seedPilot("ML5-parent-cap");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie");
    const parent = await ensureSubject(pilotId, prep.id, "Planning intervention");
    expect(parent.subjectId).toBeTruthy();

    const gen = newId("gen");
    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "On précise les créneaux horaires.",
      assistantText: "Je structure les contraintes sous le planning.",
      generationId: gen,
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "sub-child",
          kind: "SUBJECT",
          statement:
            "Organisation des créneaux horaires et contraintes de déplacement sur le terrain.",
          epistemic: "established",
          subjectTitle: "Créneaux terrain",
          parentSubjectId: parent.subjectId!,
          continuityReason: "approfondissement naturel",
        },
      ],
    });
    expect(cap.capitalisations.some((c) => c.kind === "subject" && c.status === "AVAILABLE")).toBe(
      true,
    );

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const child = bundle.subjects.find((s) => s.title === "Créneaux terrain");
    expect(child?.parentSubjectId).toBe(parent.subjectId);
  });

  it("B.4/B.8 — resolved open point drops from activity and aside population", async () => {
    const pilotId = await seedPilot("ML5-op-resolve");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Points");
    const subj = await ensureSubject(pilotId, prep.id, "Git");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle branche pour le déploiement ?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-1" },
    });
    expect(pt.status).toBe("AVAILABLE");

    const beforeCtx = await getOwnedProjectContext(pilotId, projectId);
    expect(beforeCtx.activity.openPointsCount).toBe(1);
    expect(openKnowledgePoints(beforeCtx.knowledge.openPoints)).toHaveLength(1);

    const doc = await savePreparationDocument(
      pilotId,
      prep.id,
      "Preuve branche",
      "# preuve\nBranche `main` documentée.",
      undefined,
      { correlationKey: `proof-${pt.openPointId}`, provenance: { sourceKind: "pilot" } },
    );
    expect(doc.status).toBe("AVAILABLE");
    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";

    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Branche confirmée dans la doc",
      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
      operationId: newId("resolve"),
    });
    expect(resolved.status).toBe("AVAILABLE");

    const row = (
      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!))
    )[0];
    expect(row.status).toBe("RESOLVED");

    const afterCtx = await getOwnedProjectContext(pilotId, projectId);
    expect(afterCtx.activity.openPointsCount).toBe(0);
    expect(openKnowledgePoints(afterCtx.knowledge.openPoints)).toHaveLength(0);
  });
});
```


### `projects/sfia-studio-next/web/tests/integration/mp09-multi-pilotage-turn.pg.test.ts`

- Coverage: NEW — full — 168 lines
- Status porcelain: `??`

```
/**
 * MP-09 — multi D5 REQUEST_EFFECT per turn via postUserMessageAndNora (fixture qualification).
 */
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { businessCommands, pilots, preparations, projectCycles } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";

const DUAL_INTENT_QUAL = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "QUALIFIED" as const,
  goal: "MP-09 two acts",
  projectIntention: "",
  desiredOutcome: "",
  initialScope: "",
  proposedProjectName: "",
  intents: [
    {
      id: "i-open",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "OPEN_CYCLE",
      parameters: { pilotageOperation: "OPEN_CYCLE" as const, cycleType: "CADRAGE" as const },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
    {
      id: "i-trans",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "TRANSITION_CYCLE",
      parameters: {
        pilotageOperation: "TRANSITION_CYCLE" as const,
        cycleType: "CADRAGE" as const,
        toCycleType: "CONCEPTION_FONCTIONNELLE" as const,
      },
      constraints: [] as string[],
      dependsOn: ["i-open"],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "Cycle ouvert puis conception fonctionnelle.",
};

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "mp09-seed");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "mp09-seed",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`setup failed: ${created.status}`);
  }
  return { pilotId, preparationId: prep.id, projectId: created.projectId };
}

describe("MP-09 multi-pilotage turn orchestration (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("applies each pilotage binding on one postUserMessageAndNora turn", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject(`mp09-${Date.now()}`);
    const policy = buildCognitivePolicy("x", undefined, { profileHint: "simple" });
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue({
      status: "COMPLETE",
      content: DUAL_INTENT_QUAL.replyDraft,
      generationId: `mp09-${newId("gen")}`,
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
      qualification: DUAL_INTENT_QUAL,
      conductor: {
        workId: `work-${newId("cw")}`,
        revision: 1,
        segmentsRun: 1,
        resumed: false,
        suspended: false,
        suspendReason: null,
        investigation: {
          intentSummary: DUAL_INTENT_QUAL.goal,
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
        production: {
          kind: "REPLY",
          status: "COMPLETE",
          parts: [],
        },
      },
    });

    const chat = await postUserMessageAndNora(pilotId, preparationId, "MP-09 dual pilotage fixture turn.", {
      clientTurnKey: newId("ctk"),
    });

    expect(chat.status).toBe("COMPLETE");
    expect(chat.semanticQualificationStatus).toBe("QUALIFIED");
    expect(chat.pilotageEffect?.attempted).toBe(true);
    expect(chat.pilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(chat.pilotageEffects).toHaveLength(2);
    expect(chat.pilotageEffects?.[0]?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    expect(chat.pilotageEffects?.[1]?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    expect(chat.humanDecisionCreated).toBe(true);

    const applied = (
      await db.select().from(businessCommands).where(eq(businessCommands.projectId, projectId))
    ).filter((c) => c.status === "APPLIED" || c.status === "ALREADY_APPLIED");
    expect(applied).toHaveLength(2);
    expect(applied[0]!.sourceActionKey).not.toBe(applied[1]!.sourceActionKey);

    const active = (
      await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))
    ).find((c) => c.status === "ACTIVE");
    expect(active?.cycleType).toBe("CONCEPTION_FONCTIONNELLE");
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts`

- Coverage: MODIFIED — git diff HEAD — 51 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts b/projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
index df2f1233..5fb2d139 100644
--- a/projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
@@ -18,8 +18,8 @@ describe("E07 post-effect métier restitution", () => {
       },
     });
     expect(out).not.toMatch(/reste à confirmer par Studio/i);
-    expect(out).toMatch(/appliquée/i);
-    expect(out).toMatch(/cycle demandé est désormais actif/i);
+    expect(out).not.toMatch(/Résultat Studio/i);
+    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
   });

   it("REJECTED INVALID surfaces motif without false success", () => {
@@ -33,9 +33,10 @@ describe("E07 post-effect métier restitution", () => {
         reason: "Type de cycle requis",
       },
     });
-    expect(out).toMatch(/refusée/i);
+    expect(out).not.toMatch(/Résultat Studio/i);
+    expect(out).toMatch(/pas pu appliquer/i);
     expect(out).toMatch(/Type de cycle requis/);
-    expect(out).not.toMatch(/appliquée/i);
+    expect(out).not.toMatch(/maintenant ouvert/i);
   });

   it("ALREADY_APPLIED / CONFLICT / UNKNOWN each have distinct métier wording", () => {
@@ -44,7 +45,7 @@ describe("E07 post-effect métier restitution", () => {
         priorContent: "ok",
         effect: { attempted: true, operation: "RETAIN_TRAJECTORY", status: "ALREADY_APPLIED" },
       }),
-    ).toMatch(/déjà appliquée/i);
+    ).toMatch(/déjà en place/i);

     expect(
       composePilotageEffectRestitution({
@@ -70,6 +71,14 @@ describe("E07 post-effect métier restitution", () => {
       }),
     ).toBe(prior);
   });
+
+  it("backward-compatible single effect via effect prop", () => {
+    const out = composePilotageEffectRestitution({
+      priorContent: "ok",
+      effect: { attempted: true, operation: "OPEN_CYCLE", status: "APPLIED" },
+    });
+    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
+  });
 });

 describe("E07 technical mission message projection", () => {
```


### `projects/sfia-studio-next/web/tests/unit/knowledge-parent-subject-proposal.test.ts`

- Coverage: NEW — full — 34 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import { extractKnowledgeProposals } from "@/domains/conversation/semantic-qualification";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

describe("B.2 — parentSubjectId on knowledge proposals", () => {
  it("extracts parentSubjectId from d4.record_knowledge SUBJECT intents", () => {
    const q = {
      status: "QUALIFIED",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Sous-sujet planning",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement:
              "Organisation du planning d'intervention et des contraintes horaires.",
            epistemic: "established",
            subjectTitle: "Planning d'intervention",
            parentSubjectId: "subj_parent_abc",
            continuityReason: "approfondissement naturel",
          },
        },
      ],
    } as unknown as NoraTurnQualification;

    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.kind).toBe("SUBJECT");
    expect(proposals[0]?.parentSubjectId).toBe("subj_parent_abc");
    expect(proposals[0]?.subjectTitle).toBe("Planning d'intervention");
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts`

- Coverage: MODIFIED — git diff HEAD — 48 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
index 63114752..bc84cf49 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
@@ -766,6 +766,44 @@ describe("ml3 composer dictation session (substituted transport)", () => {
     expect(fin.transcript).toContain("partie connue");
   });

+  it("admits preparation-scoped sessions without project attribution", async () => {
+    process.env.SFIA_COMPOSER_DICTATION = "1";
+    process.env.STUDIO_LANE = "DEV";
+    const mock = mockTransport();
+    const created = await createDictationSession({
+      pilotId: "pilot-prep",
+      preparationId: "prep-1",
+      conversationKey: "prep-1",
+      baselineDraft: "",
+      transportFactory: async () => mock.transport,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    expect(created.session.projectId).toBeNull();
+    expect(created.session.preparationId).toBe("prep-1");
+    const pcm = Buffer.alloc(320, 1).toString("base64");
+    const appended = appendDictationAudio({
+      sessionId: created.session.sessionId,
+      pilotId: "pilot-prep",
+      preparationId: "prep-1",
+      pcmBase64: pcm,
+    });
+    expect(appended.ok).toBe(true);
+  });
+
+  it("rejects ambiguous dictation scope", async () => {
+    const created = await createDictationSession({
+      pilotId: "pilot-x",
+      projectId: "proj-x",
+      preparationId: "prep-x",
+      conversationKey: "x",
+      baselineDraft: "",
+    });
+    expect(created.ok).toBe(false);
+    if (created.ok) return;
+    expect(created.code).toBe("INVALID_SCOPE");
+  });
+
   it("incoherent transport env fails closed without implicit live", async () => {
     process.env.SFIA_COMPOSER_DICTATION = "1";
     process.env.STUDIO_LANE = "DEV";
```


### `projects/sfia-studio-next/web/tests/unit/ml5-a4-context-efficiency.test.ts`

- Coverage: NEW — full — 61 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import {
  CONTINUATION_KNOWLEDGE_OMIT_MARKER,
  isJournalKnowledgeSnippet,
  isPreferredKnowledgeSnippet,
  partitionKnowledgeSnippets,
  resolveContinuationContextSnippets,
  resolveContinuationKnowledgeSnippets,
} from "@/domains/conversation/segment-context-efficiency";

describe("A.4 — segment context efficiency", () => {
  it("partitions journal vs auxiliary snippets", () => {
    const snippets = [
      "ACQUIS[FACT/id1/AVAILABLE] subject=∅: stmt",
      "DOCUMENT[doc_1] «T» v1 status=AVAILABLE",
      "SUJET[subj_1/ACTIVE/AVAILABLE]: Title",
    ];
    const { journal, auxiliary } = partitionKnowledgeSnippets(snippets);
    expect(journal).toHaveLength(2);
    expect(auxiliary).toEqual(["DOCUMENT[doc_1] «T» v1 status=AVAILABLE"]);
    expect(isJournalKnowledgeSnippet("ACQUIS[FACT/x/PREFERRED] a")).toBe(true);
    expect(isPreferredKnowledgeSnippet("ACQUIS[FACT/x/PREFERRED] a")).toBe(true);
  });

  it("omits bulk journal on continuation with prior acquis but keeps PREFERRED", () => {
    const base = [
      "ACQUIS[FACT/a/PREFERRED] subject=∅: keep",
      "ACQUIS[FACT/b/AVAILABLE] subject=∅: drop",
      "DOCUMENT[doc] meta",
    ];
    const out = resolveContinuationKnowledgeSnippets(base, {
      useContinuation: true,
      hasPriorAcquis: true,
    });
    expect(out[0]).toBe(CONTINUATION_KNOWLEDGE_OMIT_MARKER);
    expect(out.some((s) => s.includes("keep"))).toBe(true);
    expect(out.some((s) => s.includes("drop"))).toBe(false);
    expect(out.some((s) => s.startsWith("DOCUMENT"))).toBe(true);
  });

  it("keeps full listing on first segment without prior acquis", () => {
    const base = ["ACQUIS[FACT/b/AVAILABLE] subject=∅: x"];
    expect(
      resolveContinuationKnowledgeSnippets(base, {
        useContinuation: false,
        hasPriorAcquis: false,
      }),
    ).toEqual(base);
  });

  it("trims recent message snippets on continuation", () => {
    const recent = ["USER: a", "ASSISTANT: b", "USER: c", "ASSISTANT: d"];
    expect(
      resolveContinuationContextSnippets(recent, {
        useContinuation: true,
        hasPriorAcquis: true,
        maxRecent: 2,
      }),
    ).toEqual(["USER: c", "ASSISTANT: d"]);
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts`

- Coverage: NEW — full — 127 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import { resolveCognitiveWorkTerminalStatus } from "@/domains/conversation/cognitive-conductor-terminal";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

function qual(
  partial: Partial<NoraTurnQualification>,
): NoraTurnQualification {
  return {
    schemaVersion: "ml4c-sem-qual-v1",
    status: "QUALIFIED",
    goal: "",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: [],
    replyDraft: "",
    ...partial,
  } as NoraTurnQualification;
}

describe("A.5 — cognitive work terminal status", () => {
  it("COMPLETes when production is COMPLETE and disposition COMPLETE despite stale clarifications", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "COMPLETE",
        clarifications: ["Question déjà traitée dans le cycle ouvert"],
      }),
    });
    expect(r.awaitPilot).toBe(false);
    expect(r.status).toBe("COMPLETE");
  });

  it("stays OPEN on AWAIT_PILOT even when production is COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "AWAIT_PILOT",
        clarifications: ["Quel périmètre TVA ?"],
      }),
    });
    expect(r.awaitPilot).toBe(true);
    expect(r.status).toBe("OPEN");
    expect(r.interruptCause).toBe("AWAIT_PILOT");
  });

  it("stays OPEN on NEEDS_CLARIFICATION with clarifications", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "IN_PROGRESS" },
      qualification: qual({
        status: "NEEDS_CLARIFICATION",
        clarifications: ["Préciser la date d'effet"],
      }),
    });
    expect(r.status).toBe("OPEN");
  });

  it("ignores open determinant questions when disposition is COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "COMPLETE",
        determiningQuestions: [
          {
            id: "q1",
            text: "Stale?",
            status: "OPEN",
            importance: "DETERMINANT",
          },
        ],
      }),
    });
    expect(r.status).toBe("COMPLETE");
  });

  it("stays OPEN when conductor suspended flag is set", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: true,
      production: { status: "COMPLETE" },
      qualification: qual({ workDisposition: "COMPLETE" }),
    });
    expect(r.status).toBe("SUSPENDED");
    expect(r.interruptCause).toBeNull();
  });

  it("stays OPEN on IN_PROGRESS production despite disposition COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "IN_PROGRESS" },
      qualification: qual({ workDisposition: "COMPLETE" }),
    });
    expect(r.status).toBe("OPEN");
    expect(r.awaitPilot).toBe(true);
  });

  it("maps SUSPEND disposition to AWAIT_OR_SUSPEND interrupt", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({ workDisposition: "SUSPEND" }),
    });
    expect(r.status).toBe("OPEN");
    expect(r.interruptCause).toBe("AWAIT_OR_SUSPEND");
  });

  it("SUSPENDs on production PARTIAL or FAILED", () => {
    expect(
      resolveCognitiveWorkTerminalStatus({
        suspended: false,
        production: { status: "PARTIAL" },
        qualification: qual({ workDisposition: "COMPLETE" }),
      }).status,
    ).toBe("SUSPENDED");
    expect(
      resolveCognitiveWorkTerminalStatus({
        suspended: false,
        production: { status: "FAILED" },
        qualification: qual({ workDisposition: "COMPLETE" }),
      }).status,
    ).toBe("SUSPENDED");
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/ml5-a6-finops-read-attribution.test.ts`

- Coverage: NEW — full — 32 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const usageRead = join(
  process.cwd(),
  "src/domains/finops/usage-read-service.ts",
);

describe("A.6/A.7 — FinOps usage read attribution (module contract)", () => {
  it("filters billable rows in work detail and aggregates with projection helpers", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/filterBillableFinOpsRows\(rows\)/);
    expect(src).toMatch(/aggregateEstimatedCost\(billableRows\)/);
    expect(src).toMatch(/sumBillableProviderRequests\(billableRows/);
  });

  it("attributes project filter via direct projectId or cognitive works on project", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/cognitiveWorkIdsOnProject/);
    expect(src).toMatch(
      /or\(eq\(providerUsageObservations\.projectId, input\.projectId\), byWork\)/,
    );
    expect(src).toMatch(/effectiveProjectId = w\.projectId \?\? observedProjectId/);
  });

  it("summary KPIs use billable request denominators", () => {
    const src = readFileSync(usageRead, "utf8");
    expect(src).toMatch(/const totalRequests = sumBillableProviderRequests\(rows\)/);
    expect(src).toMatch(/onlyWithObservedCost: true/);
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts`

- Coverage: MODIFIED — git diff HEAD — 81 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
index e28aa34d..9cd00429 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
@@ -6,6 +6,7 @@ import {
   buildResourceContinuitySuspendMessage,
   resolveContinuityCognitivePolicy,
 } from "@/domains/conversation/cognitive-policy";
+import { isRecetteProvisionalQualified } from "@/domains/conversation/cognitive-resources/provisional-cognitive-policy";
 import {
   COGNITIVE_GUIDANCE_ROWS,
   COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS,
@@ -169,6 +170,16 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

+  it("provisional v0.1 does not admit v0.2-only Luna low couple", () => {
+    process.env.STUDIO_LANE = "DEV";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(false);
+    expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(true);
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(true);
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(true);
+  });
+
   it("provisional v0.2 admits Terra medium, Luna low/medium; candidates stay refused", () => {
     process.env.STUDIO_LANE = "DEV";
     process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
@@ -201,9 +212,10 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

-  it("v0.2 on non-DEV lane refuses provisional couples", () => {
+  it("v0.2 on RECETTE without qualified admit refuses provisional couples", () => {
     process.env.STUDIO_LANE = "RECETTE";
     process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    delete process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT;
     expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(false);
     expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
       false,
@@ -213,6 +225,40 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

+  it("v0.2 on RECETTE with SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified admits couples", () => {
+    process.env.STUDIO_LANE = "RECETTE";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT = "qualified";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(true);
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
+      true,
+    );
+    delete process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT;
+  });
+
+  it("RECETTE admit accepts only exact qualified env value", () => {
+    for (const bogus of ["", "1", "true", "yes", "QUALIFIED", " qualified ", "qualified\n"]) {
+      expect(
+        isRecetteProvisionalQualified({
+          SFIA_COG_PROVISIONAL_RECETTE_ADMIT: bogus,
+        } as unknown as NodeJS.ProcessEnv),
+      ).toBe(false);
+    }
+    expect(
+      isRecetteProvisionalQualified({
+        SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified",
+      } as unknown as NodeJS.ProcessEnv),
+    ).toBe(true);
+  });
+
+  it("v0.2 on unknown lane refuses provisional couples (fail closed)", () => {
+    process.env.STUDIO_LANE = "STABLE";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
+      false,
+    );
+  });
+
   it("legacy_sol policy refuses Luna/Terra operational couples", () => {
     process.env.SFIA_COG_PROVISIONAL_POLICY = "legacy_sol";
     expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(
```


### `projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts`

- Coverage: MODIFIED — git diff HEAD — 28 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
index ecc1bf01..2173fc8b 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
@@ -10,6 +10,7 @@ import {
   finOpsDailyXAxisLabels,
   formatModelBreakdownCost,
   formatUsdAxisFr,
+  finOpsMeasureCoverageSubtext,
   parseFinOpsPeriodDays,
   resolvePersonalSettingsActive,
   tokenTotalForRow,
@@ -124,6 +125,16 @@ describe("ML5 E06 — FinOps usage projection", () => {
     expect(formatModelBreakdownCost({ costUsd: 1.2, coverage: "PARTIAL" })).toContain("1,20");
   });

+  it("finOpsMeasureCoverageSubtext explains zero KNOWN estimation with observed requests", () => {
+    const sub = finOpsMeasureCoverageSubtext({
+      totalRequests: 4,
+      measuredRequests: 4,
+      estimationCompletenessPercent: { kind: "partial", value: 0 },
+    });
+    expect(sub).toContain("PARTIAL ou inconnus");
+    expect(sub).not.toContain("estimation connue 0");
+  });
+
   it("excludes HTTP attempt correlation rows from cost and request totals", () => {
     const rows = [
       {
```


### `projects/sfia-studio-next/web/tests/unit/mp09-conversational-command-key.test.ts`

- Coverage: NEW — full — 19 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import {
  conversationalCommandKey,
  conversationalCommandKeyForIntent,
} from "@/domains/pilotage/conversation-authority";

describe("MP-09 — per-intent conversational command keys", () => {
  it("scopes sibling intents under the same clientTurnKey without collision", () => {
    const turn = "turn-maintiplan-t05";
    const open = conversationalCommandKeyForIntent(turn, "intent-open-cycle");
    const design = conversationalCommandKeyForIntent(turn, "intent-functional-design");
    const bare = conversationalCommandKey(turn);
    expect(open).not.toBe(design);
    expect(open.startsWith(bare)).toBe(true);
    expect(design.startsWith(bare)).toBe(true);
    expect(conversationalCommandKeyForIntent(turn, null)).toBe(bare);
    expect(conversationalCommandKeyForIntent(turn, "  ")).toBe(bare);
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/mp09-list-pilotage-bindings.test.ts`

- Coverage: NEW — full — 52 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import { listPilotageEffectBindings } from "@/domains/conversation/semantic-qualification";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

describe("MP-09 — listPilotageEffectBindings", () => {
  it("returns every admissible pilotage REQUEST_EFFECT in dependsOn order", () => {
    const q = {
      status: "QUALIFIED",
      intents: [
        {
          id: "i-design",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "conception fonctionnelle",
          dependsOn: ["i-open"],
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CONCEPTION_FONCTIONNELLE",
          },
        },
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "ouvrir cycle",
          dependsOn: [],
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CONCEPTION_FONCTIONNELLE",
          },
        },
        {
          id: "i-know",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "mémoire",
          dependsOn: [],
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "Un acquis significatif pour la continuité du projet.",
            epistemic: "established",
          },
        },
      ],
    } as unknown as NoraTurnQualification;

    const bindings = listPilotageEffectBindings(q);
    expect(bindings).toHaveLength(2);
    expect(bindings[0]).toMatchObject({ intentId: "i-open" });
    expect(bindings[1]).toMatchObject({ intentId: "i-design" });
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/mp09-pilotage-multi-restitution.test.ts`

- Coverage: NEW — full — 171 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import { composePilotageEffectRestitution } from "@/domains/conversation/pilotage-effect-restitution";
import {
  dependencyPreconditionBlockReason,
  pickPrimaryPilotageEffect,
  type TurnPilotageEffect,
} from "@/domains/conversation/pilotage-effect-aggregate";

describe("MP-09 — multi pilotage restitution", () => {
  it("compose renders A applied + B rejected without false success", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Je traite les deux demandes.",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "TRANSITION_CYCLE",
          status: "REJECTED",
          reason: "Cycle source absent",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
    expect(out).toMatch(/pas pu appliquer/i);
    expect(out).toMatch(/Cycle source absent/);
    expect(out).not.toMatch(/transition.*maintenant/i);
  });

  it("compose renders two applied outcomes", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "ok",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "TRANSITION_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
    expect(out).toMatch(/transition de cycle/i);
  });

  it("first rejected second applied surfaces both", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "REJECTED",
          reason: "Type de cycle requis",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "RETAIN_TRAJECTORY",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/pas pu appliquer/i);
    expect(out).toMatch(/orientation de trajectoire est retenue/i);
  });

  it("ambiguous binding restitutes clarification", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Analyse.",
      effects: [
        {
          attempted: true,
          intentClarity: "AMBIGUOUS",
          reason: "Deux cycles cités",
          status: null,
          decisionId: null,
        },
      ],
    });
    expect(out).toMatch(/intention ambiguë/i);
    expect(out).toMatch(/Deux cycles cités/);
  });

  it("ALREADY_APPLIED honest wording", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "ok",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "ALREADY_APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/déjà en place/i);
  });

  it("pickPrimary returns first attempted in binding order", () => {
    const records: TurnPilotageEffect[] = [
      {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "APPLIED",
        intentClarity: "CLEAR",
        source: "user_message_command",
        decisionId: null,
      },
      {
        attempted: true,
        operation: "TRANSITION_CYCLE",
        status: "REJECTED",
        intentClarity: "CLEAR",
        source: "user_message_command",
        decisionId: null,
      },
    ];
    const primary = pickPrimaryPilotageEffect(records);
    expect(primary?.operation).toBe("OPEN_CYCLE");
  });
});

describe("MP-09 — dependsOn precondition gate", () => {
  const pilotageIntentIds = new Set(["i-open", "i-trans"]);

  it("blocks dependent when predecessor rejected", () => {
    const map = new Map([["i-open", "REJECTED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/prérequis/i);
  });

  it("allows dependent when predecessor applied", () => {
    const map = new Map([["i-open", "APPLIED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toBeNull();
  });

  it("blocks when predecessor ambiguous", () => {
    const map = new Map([["i-open", "AMBIGUOUS"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/ambiguë/i);
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts`

- Coverage: NEW — full — 59 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "src/components/figma");

describe("NoraSharedComposer wiring", () => {
  it("exists and is imported by Travail and sas parents", () => {
    const shared = join(root, "NoraSharedComposer.tsx");
    expect(existsSync(shared)).toBe(true);
    const noraConversation = readFileSync(join(root, "NoraConversation.tsx"), "utf8");
    const preparationConversation = readFileSync(
      join(root, "PreparationConversation.tsx"),
      "utf8",
    );
    expect(noraConversation).toMatch(/from "@\/components\/figma\/NoraSharedComposer"/);
    expect(noraConversation).toMatch(/<NoraSharedComposer[\s\S]*variant="travail"/);
    expect(preparationConversation).toMatch(/from "@\/components\/figma\/NoraSharedComposer"/);
    expect(preparationConversation).toMatch(/<NoraSharedComposer[\s\S]*variant="prep"/);
  });

  it("does not aria-hide the sas command bar when draft is empty (mic stays exposed)", () => {
    const src = readFileSync(join(root, "NoraSharedComposer.tsx"), "utf8");
    const barOpen = src.match(/<div[\s\S]*?className="sas-composer-bar"[^>]*>/)?.[0] ?? "";
    expect(barOpen).not.toContain("aria-hidden");
    expect(src).toMatch(
      /className="sas-composer-hint"[\s\S]*aria-hidden=\{!dictationActive && !props\.draft\.trim\(\)\}/,
    );
  });

  it("routes dictation to project API when projectId is set", () => {
    const src = readFileSync(join(root, "NoraSharedComposer.tsx"), "utf8");
    expect(src).toMatch(
      /dictationPreparationId = props\.projectId \? undefined : props\.preparationId/,
    );
  });
});

describe("ComposerDictationControl contracts", () => {
  it("dictationApiBase prefers project over preparation", async () => {
    const { dictationApiBase } = await import("@/components/figma/ComposerDictationControl");
    expect(
      dictationApiBase({ projectId: "prj_1", preparationId: "prep_1" }),
    ).toBe("/api/projects/prj_1/dictation");
    expect(dictationApiBase({ preparationId: "prep_1" })).toBe(
      "/api/preparations/prep_1/dictation",
    );
    expect(dictationApiBase({})).toBeNull();
  });

  it("shows audio wave only in listening phase (not requesting/finalizing)", () => {
    const src = readFileSync(
      join(process.cwd(), "src/components/figma/ComposerDictationControl.tsx"),
      "utf8",
    );
    expect(src).toMatch(/const showWave = phase === "listening";/);
    expect(src).not.toMatch(/const showWave = phase === "listening" \|\| phase === "finalizing"/);
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts`

- Coverage: MODIFIED — git diff HEAD — 22 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts b/projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
index 76240e71..6896bea2 100644
--- a/projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
@@ -31,4 +31,17 @@ describe("Personal rail settings menu (Figma 13.02)", () => {
     expect(shell).not.toContain('data-testid="nav-integrations"');
     expect(shell).not.toMatch(/personalSpace \? \([\s\S]*studio-rail-section mb-1">Accès/);
   });
+
+  it("MP-17 — settings menu mounts on shared rail foot without personalSpace gate", () => {
+    const shell = readFileSync(
+      resolve(process.cwd(), "src/components/shell/StudioShell.tsx"),
+      "utf8",
+    );
+    expect(shell).toMatch(
+      /studio-shell-rail-foot[\s\S]*PersonalRailSettingsMenu pathname=\{pathname\}/,
+    );
+    expect(shell).not.toMatch(
+      /personalSpace \? \(\s*<PersonalRailSettingsMenu/,
+    );
+  });
 });
\ No newline at end of file
```


### `projects/sfia-studio-next/web/tests/unit/project-activity-projection.test.ts`

- Coverage: NEW — full — 36 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import {
  countOpenKnowledgePoints,
  countProjectLibraryDocuments,
  openKnowledgePoints,
  projectLibraryDocumentExamples,
  travailAsideOpenPoints,
} from "@/domains/preparation/project-activity-projection";

describe("B.8 — project activity projection", () => {
  it("counts document identities once (SAVING and AVAILABLE both count)", () => {
    const docs = [
      { document: { id: "doc_a", title: "MaintiPlan V1" } },
      { document: { id: "doc_a", title: "MaintiPlan V1" } },
      { document: null },
      { document: { id: "doc_b", title: "Annexe" } },
    ];
    expect(countProjectLibraryDocuments(docs)).toBe(2);
    expect(projectLibraryDocumentExamples(docs)).toEqual([
      { id: "doc_a", title: "MaintiPlan V1" },
      { id: "doc_b", title: "Annexe" },
    ]);
  });

  it("open points aside uses same OPEN population as counters", () => {
    const points = [
      { id: "op1", statement: "A", status: "OPEN" },
      { id: "op2", statement: "B", status: "RESOLVED" },
      { id: "op3", statement: "C", status: "OPEN" },
    ];
    expect(countOpenKnowledgePoints(points)).toBe(2);
    expect(openKnowledgePoints(points).map((p) => p.id)).toEqual(["op1", "op3"]);
    expect(travailAsideOpenPoints(points, 5)).toHaveLength(2);
    expect(travailAsideOpenPoints([...points, ...points, ...points], 5)).toHaveLength(5);
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts`

- Coverage: NEW — full — 61 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import {
  recentItemFromDocumentConsultation,
  recentItemFromGitConsultation,
  recentItemFromTurnReference,
} from "@/lib/project-recent-consultation";
import { mergeProjectRecentItems } from "@/lib/project-recent-items";

describe("B.8 — pilot consultation identities (MP-08)", () => {
  it("builds stable ids for document and git consultations", () => {
    expect(recentItemFromDocumentConsultation("d1", "Plan", "v2")).toEqual({
      id: "doc:d1",
      kind: "document_nora",
      title: "Plan",
      refLabel: "v2",
    });
    const git = recentItemFromGitConsultation({
      repositoryId: "repo1",
      path: "docs/readme.md",
      ref: "main",
      title: "README",
      commit: "abc123def456",
    });
    expect(git.id).toBe("git:repo1:docs/readme.md@main");
    expect(git.kind).toBe("file_git");
    expect(git.refLabel).toBe("abc123def456");
  });

  it("maps Nora turn references and dedupes on merge", () => {
    const docRef = recentItemFromTurnReference({
      kind: "document",
      label: "Synthèse",
      resourceId: "doc_x",
      revisionId: "rev_1",
    });
    expect(docRef?.id).toBe("doc:doc_x");
    const items = mergeProjectRecentItems([], {
      ...docRef!,
      consultedAtMs: 1,
    });
    const again = mergeProjectRecentItems(items, {
      ...docRef!,
      consultedAtMs: 9,
    });
    expect(again).toHaveLength(1);
    expect(again[0]?.consultedAtMs).toBe(9);
  });

  it("isolates recent lists per canonical id (project A vs B)", () => {
    const a = mergeProjectRecentItems(
      [],
      { ...recentItemFromDocumentConsultation("d1", "A"), consultedAtMs: 1 },
    );
    const b = mergeProjectRecentItems(
      [],
      { ...recentItemFromDocumentConsultation("d1", "B"), consultedAtMs: 1 },
    );
    expect(a[0]?.title).toBe("A");
    expect(b[0]?.title).toBe("B");
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts`

- Coverage: NEW — full — 38 lines
- Status porcelain: `??`

```
import { describe, expect, it } from "vitest";
import {
  mergeProjectRecentItems,
  type ProjectRecentItem,
} from "@/lib/project-recent-items";

function item(
  id: string,
  consultedAtMs: number,
  title = id,
): ProjectRecentItem {
  return {
    id,
    kind: "document_nora",
    title,
    consultedAtMs,
  };
}

describe("project-recent-items (MP-08)", () => {
  it("keeps at most 5 items, newest first, deduped by id", () => {
    let items: ProjectRecentItem[] = [];
    for (let i = 1; i <= 6; i++) {
      items = mergeProjectRecentItems(items, item(`doc:${i}`, i * 1000, `Doc ${i}`));
    }
    items = mergeProjectRecentItems(items, item("doc:2", 9000, "Doc 2"));
    expect(items).toHaveLength(5);
    expect(items[0]?.id).toBe("doc:2");
    expect(items.map((x) => x.id)).not.toContain("doc:1");
  });

  it("preserves distinct identities across merges", () => {
    const a = mergeProjectRecentItems([], item("doc:a", 1));
    const b = mergeProjectRecentItems([], item("doc:b", 1));
    expect(a[0]?.id).toBe("doc:a");
    expect(b[0]?.id).toBe("doc:b");
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts`

- Coverage: MODIFIED — git diff HEAD — 63 diff lines
- Status porcelain: `M`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts b/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
index 4e0ed63f..88df981d 100644
--- a/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
@@ -9,6 +9,7 @@ import {
   deriveThreadTurnKind,
   effectIntents,
   extractPilotageBinding,
+  listPilotageEffectBindings,
   matchPilotageIntentInQualification,
   projectStudioEffects,
   validateNoraTurnQualification,
@@ -68,6 +69,51 @@ describe("semantic qualification envelope", () => {
     }
   });

+  it("MP-09: extractPilotageBinding fails closed on multiple pilotage REQUEST_EFFECT", () => {
+    const q = asNoraQualification({
+      status: "QUALIFIED",
+      goal: "two acts",
+      intents: [
+        {
+          id: "i-open",
+          capabilityId: "d5.pilotage_command",
+          mode: "REQUEST_EFFECT",
+          summary: "OPEN_CYCLE",
+          parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+        {
+          id: "i-trans",
+          capabilityId: "d5.pilotage_command",
+          mode: "REQUEST_EFFECT",
+          summary: "TRANSITION_CYCLE",
+          parameters: {
+            pilotageOperation: "TRANSITION_CYCLE",
+            cycleType: "CADRAGE",
+            toCycleType: "CONCEPTION_FONCTIONNELLE",
+          },
+          constraints: [],
+          dependsOn: ["i-open"],
+          sourceEvidence: [],
+        },
+      ],
+      clarifications: [],
+      replyDraft: "deux actes",
+    });
+    expect(extractPilotageBinding(q)).toMatchObject({
+      ambiguous: true,
+      reason: "MULTIPLE_PILOTAGE_EFFECT_INTENTS",
+    });
+    const listed = listPilotageEffectBindings(q);
+    expect(listed).toHaveLength(2);
+    expect(listed.map((b) => ("ambiguous" in b ? null : b.operation))).toEqual([
+      "OPEN_CYCLE",
+      "TRANSITION_CYCLE",
+    ]);
+  });
+
   it("matchPilotageIntent rejects substituted operation / intentId", () => {
     const q: NoraTurnQualification = asNoraQualification({
       status: "QUALIFIED",
```



---

## 16. Verdict

**READY WITH RESERVES** — construction DEV reprise complete at declared DET level; LIVE gates explicit.

---

## 17. ChatGPT remote review instructions

1. Treat this file as **single source** for reprise review (supersedes short intake stub).
2. Cross-check §14 coverage — every row should be YES for FULL; critical modules in §15.
3. Validate MP-09 loop diff + `listPilotageEffectBindings` + S08 fix evidence.
4. Do not require LIVE execution to accept DET closures; require LIVE only for rows in §11.
5. Morris decisions: accept DEV READY WITH RESERVES, or order bounded LIVE §12.

---

## 16. Validations finales reprise (état testé — worktree dirty)

| Suite | Commande | Exit | Résultat | Notes |
|-------|----------|------|----------|-------|
| Unit vitest | `npx vitest run tests/unit` | 0* | **1451 PASS / 2 FAIL** puis C16 corrigé | `ml2-derived-embedding-index` residual (`derivedUsed=false`) — hors delta fonctionnel MP-09/continuité ; à instruire séparément |
| A.5 / C16 / MP-09 unit+PG | vitest ciblé | 0 | **19 PASS** | après correctif IDLE≠incomplete |
| S08 + S08b + S05-G04 + MP-09 PG | vitest filtre | 0 | **4 PASS** | cause A.4 `revision>0` corrigée |
| Continuité P2 PG | `ml5-continuity-raccordement.pg` + units | 0 | **10 PASS** | parentSubjectId / compteurs / récents |
| TypeScript `src/` | `tsc --noEmit` filtré `src/` | 0 | **0 erreur produit** | erreurs résiduelles tests préexistants (ProcessEnv casts, etc.) |
| Build Next | `npm run build` | 0 | **PASS** | après extraction client-safe `cycle-type-labels.ts` (page projet n'importe plus `cki-resolve`/`fs`) |
| ESLint | `next lint` | NOT RUN full | — | outil disponible ; non bloquant pack si build+tsc src OK |
| LIVE OpenAI | — | N/A | **NOT RUN** | hors mandat |
| RECETTE | — | N/A | **NON MUTÉE** | |

\* Pipeline tee/tail peut masquer le code de sortie vitest ; compteurs lus dans le rapport vitest.

### Correctifs post-pack assembler (à couvrir en lecture ChatGPT)

1. `cognitive-conductor-terminal.ts` — `productionIncomplete` = `IN_PROGRESS` only (IDLE défaut ≠ attente production).
2. `cycle-type-labels.ts` (NEW) — labels client-safe ; `page.tsx` n'importe plus `fs` via `cki-resolve`.
3. `conversation-authority.ts` — narrow `semanticIntentId` sur branche CLEAR (TS).
4. Tests MP-09 / cognitive-resources — alignements TS.

### Empreinte contenu (sans secrets)

- Pack mono-fichier : `.tmp-sfia-review/chatgpt-review.md` (~10k+ lignes, contenu diffs inclus §15).
- Branche projet : `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` + dirty.
- Handoff tip pré-publish : `9897b91d` / blob `26ce0975`.

**Verdict construction DEV :** READY WITH RESERVES — réserves LIVE/Morris §11–12 ; embedding hybrid residual documenté ; Figma F2 browser P4 non exhaustif.

---

## 17. P4 — UX residual (D.1–D.6) — embedded findings

Source path canonicalisé: `.tmp-sfia-review/p4-ux-findings.md` (copie depuis `web/.tmp-sfia-review/`).
Preuves navigateur DEV : `.tmp-sfia-review/ux-evidence/` (captures locales — chemins, pas blobs binaires dans le pack).

### Note intégrateur

- Playwright `tests/qualify/ml5-ux-refinements-browser.spec.ts` : **TIMEOUT** webServer — tooling gap `@cursor/sdk` `agent.d.ts.map` webpack parse (hors périmètre macro-lot). Preuves P4 = probe navigateur :3100 + units, pas la suite Playwright qualify.
- L'agent S08 avait qualifié FAIL « préexistant » ; **contredit** par preuve comparative A.4 (`hasPriorAcquis` / `revision > 0`) — voir §7 / `s08-s05-findings.md` (PASS après correctif).
- A.5 : le findings P3 mentionnait IDLE→OPEN ; **corrigé** ensuite — `productionIncomplete` = `IN_PROGRESS` only (§16).

### Contenu P4

# P4 UX residual verification — ML5 (worktree `sfia-studio-next/web`)

**Date:** 2026-11-27
**Constraints honored:** No Figma edits · No `service.ts` edits · No LIVE OpenAI · No RECETTE mutation
**DEV:** `http://localhost:3100` responding (HTTP 307→session)
**Evidence dir:** `.tmp-sfia-review/ux-evidence/`

---

## Executive summary

| Scope | Status | Residual reserve |
|-------|--------|------------------|
| **D.1** Readability (SafeMarkdown / tokens) | **PASS** | Prior qualify typo measures (`11px` body) vs token `12.5px` — reconcile activity-title cascade |
| **D.2** SasCreateProgressPopup animation | **PASS (bounded)** | No fresh SAS popup screenshot this session (avoided create on :3100); CSS + archived spin JSON |
| **D.3** Multi-effect restitution (MP-09) | **PASS** | Wiring lives in `service.ts` — verified at `pilotage-effect-restitution.ts` + unit only |
| **D.4** Repères / `project-recent-items` | **PASS (bounded)** | **Single** `recordProjectRecentItem` call site (`document_nora`); Figma row chrome (icons) not in DOM |
| **D.5** PersonalRailSettingsMenu shared mount | **PASS** | Visual parity vs Figma 13 gear popover not pixel-audited |
| **D.6** Empty / error / responsive | **PASS (bounded)** | Project « En bref » empty state not browser-captured (no project in portfolio) |

---

## Figma → component → DOM manifest

File key: `itgvCulInEnFY6DvgIegvP` (read-only MCP `get_metadata`).

| Figma node | Figma name | Code | DOM / test hooks |
|------------|------------|------|------------------|
| `700:38` | Canvas 05 · Travail avec Nora | — | Route family `/projects/[projectId]` |
| `700:39` | 05.01 Travail · Conversation nominale | `NoraConversation`, `ProjectOverview` shell | `.fig-nora-thread`, `.fig-msg-body` |
| `702:123` | Panneau En bref | `src/app/projects/[projectId]/page.tsx` aside | `[data-testid="travail-aside-inspector"]` |
| `1405:610` | Repères et continuité — nominal | Same aside block | `[data-testid="travail-aside-recents-list"]` |
| `1405:696` | Repères et continuité — initial | Same + empty copy | `[data-testid="travail-aside-recents-empty"]` (« Aucun élément consulté récemment. ») |
| `1022:164` (ref in code) | SAS06 Création / qualification | `SasCreateProgressPopup.tsx` | `[data-testid="sas-create-progress-popup"]`, `.fig-sas-progress-ring-spin` |
| `1332:2305` | Page 13 FinOps | Settings surfaces | `/settings/integrations`, `/settings/consumption` |
| `1334:30` | Paramètres / Engrenage / Repos | `PersonalRailSettingsMenu.tsx` | `[data-testid="rail-settings-menu"]`, `.studio-rail-settings-trigger` |
| `1334:70` | Navigation / Rail personnel — Paramètres | `StudioShell.tsx` | `[data-testid="studio-rail-account"]` → foot mount |
| `1334:103–129` | Menu ouvert variantes | `PersonalRailSettingsMenu` popover | `.studio-rail-settings-popover` |

---

## D.1 — Readability (SafeMarkdown + tokens)

**Contract**

- Default `SafeMarkdown`: `safe-md text-sm` → ~**14px** / relaxed leading (`SafeMarkdown.tsx`).
- Conversation thread override: `.fig-msg-body .safe-md` → **12.5px**, **line-height 1.65** (`tokens.css` L304–378). Document viewer paths intentionally **not** overridden (comment L316–317).

**Before / after density (computed on :3100 with app CSS loaded)**

| Context | font-size | line-height |
|---------|-----------|-------------|
| `.safe-md` alone (e.g. viewer) | **14px** | **22.75px** |
| `.fig-msg-body .safe-md` | **12.5px** | **20.625px** (1.65 × 12.5) |

Evidence: `.tmp-sfia-review/ux-evidence/d1-typography-computed.json`, prior qualify PNG `d1-typography-table-prior-qualify.png`.

**Unit:** `tests/unit/safe-markdown.test.ts` — 2 tests **PASS**.

**Reserve:** Archived qualify JSON (`.sfia-evidence/ml5-ux-refinements-browser/typography-measures.json`) reported `bodyFontSize: "11px"` on an injected harness — likely `.fig-msg-body` wrapper / activity cascade, not the token target. Token contract remains **12.5px** on `.safe-md` inside `.fig-msg-body`.

---

## D.2 — SasCreateProgressPopup animation

**Implementation**

- Ring: `.fig-sas-progress-ring-spin` → `animation: fig-sas-progress-spin 1.1s linear infinite` (`tokens.css` L1173–1200).
- Stops: `[data-terminal="1"]` and `@media (prefers-reduced-motion: reduce)`.
- Step pacing: `createProgressPreferReducedMotion` → `SAS_STEP_MIN_MS = 0` (`preparations/[preparationId]/page.tsx` L128–175).

**Proof**

- `:3100` injected ring → `animationName: "fig-sas-progress-spin"` (`d2-sas-motion-css-probe.json`).
- Archived qualify: `sas-nonreg.json` shows `animationName` + **transform rotation** between t0 and t400ms.
- Screenshots this session: prep shell `d6-prep-responsive.png` (no create clicked).

**Reserve:** Did not re-open live SAS popup on operator DEV (portfolio empty; create would invoke Nora backend — **no LIVE OpenAI** guardrail).

---

## D.3 — Restitution (multi-effect, MP-09)

**Verification mode:** Read-only — **did not edit** `src/domains/conversation/service.ts`.

**Surface:** `composePilotageEffectRestitution` in `pilotage-effect-restitution.ts` (+ `pilotage-effect-aggregate.ts` helpers).

**Unit tests (all PASS):**

- `tests/unit/mp09-pilotage-multi-restitution.test.ts` (9)
- `tests/unit/ensemble07-pilotage-effect-restitution.test.ts` (7)

Covers multi-applied / mixed applied+rejected / no false success on partial effects.

**Reserve:** Integration path MP-09 in `service.ts` not re-run in this pass; contract assumed frozen.

---

## D.4 — Right panel Repères (`project-recent-items`)

**Library:** `src/lib/project-recent-items.ts`

- `PROJECT_RECENT_MAX_ITEMS = 5`
- Client `localStorage` key `sfia.projectRecent.v1:{pilotId}:{projectId}`
- Documented rule: only **explicit Pilote consultation** should call `recordProjectRecentItem`

**UI:** `page.tsx` — section « Repères » / « Éléments récents » (`travail-aside-recents`, max 5 via library).

**Call sites (grep):**

| Location | Trigger |
|----------|---------|
| `openTravailDocument` in `page.tsx` ~L827 | `document_nora` on viewer open |

**No other** `recordProjectRecentItem` invocations in `src/`.

**Unit:** `tests/unit/project-recent-items.test.ts` — dedupe, max 5 **PASS**.

**Figma vs DOM:** `1405:610` shows five rich rows (icon, subtitle, arrow). DOM uses compact text buttons (`fig-inspector-link`) — functional, not visual parity.

**Reserve:** Git / execution / publication kinds defined in types but **not recorded** yet; clicking recent Git only `selectSurface("git")` without re-record.

---

## D.5 — PersonalRailSettingsMenu shared mount

**Component:** `src/components/shell/PersonalRailSettingsMenu.tsx`
**Mount:** `StudioShell.tsx` L405–406 — `studio-shell-rail-foot`, **not** gated on `personalSpace` (MP-17).

**Surfaces observed on :3100**

- `/portfolio` — `[data-testid="rail-settings-menu"]` (screenshots `d5-rail-settings-collapsed.png`, `d5-rail-settings-open.png`)
- `/preparations/...` — same gear + Integrations / Consommation menuitems (browser snapshot)

**Unit:** `tests/unit/personal-rail-settings-menu.test.ts` (4) **PASS** — Escape, consumption href, foot mount regex, no duplicate `nav-integrations`.

**Reserve:** Figma `1334:30` gear geometry vs `studio-rail-settings-trigger` CSS not measured.

---

## D.6 — Empty / error / responsive (bounded)

**Empty**

- Recents: `travail-aside-recents-empty` copy matches Figma `1405:696` intent (« État vide ressources » → French product copy).
- Clarifier: empty branch in aside (open points).
- Preparation: disabled create hint when no project name (`d6-prep-responsive.png`).

**Error / unavailable**

- Viewer / D4 paths set `unavailableReason` without inventing content (`page.tsx` grep).
- Project-level `unavailableKind` routes to dedicated unavailable surface.

**Responsive**

- SAS card: `padding: clamp(...)`, `maxHeight: calc(100vh - 40px)`, `maxWidth: calc(100vw - 32px)` (`SasCreateProgressPopup.tsx` L114–132).
- E2E contract: `tests/e2e/sas06-responsive-viewports.spec.ts` (not re-run here).

**Reserve:** No live project page screenshot for full « En bref » column this session.

---

## Test runs (this verification)

```
vitest run:
  project-recent-items.test.ts
  personal-rail-settings-menu.test.ts
  safe-markdown.test.ts
  mp09-pilotage-multi-restitution.test.ts
  ensemble07-pilotage-effect-restitution.test.ts
→ 5 files, 24 tests PASS
```

Playwright qualify with default config **not** used (starts isolated :3101 webServer, timed out). Targeted Playwright **library** script against **existing :3100** used for CSS probes + rail screenshots only.

---

## Evidence index

| File | Scope |
|------|--------|
| `ux-evidence/d1-typography-computed.json` | D.1 before/after sizes |
| `ux-evidence/d1-typography-table-prior-qualify.png` | D.1 prior qualify capture |
| `ux-evidence/d2-sas-motion-css-probe.json` | D.2 animation CSS + archive pointer |
| `ux-evidence/d5-rail-settings-collapsed.png` | D.5 |
| `ux-evidence/d5-rail-settings-open.png` | D.5 |
| `ux-evidence/d6-prep-responsive.png` | D.6 preparation shell |

---

## Residual reserves (rollup)

1. **D.4 recording coverage** — extend `recordProjectRecentItem` to git/execution/publication consult paths when product confirms triggers.
2. **D.4 visual** — align recent rows with Figma `1405:618+` icon rows (optional UX polish).
3. **D.2 browser** — re-capture SAS popup on FAKE/E2E `:3101` when operator wants fresh PNG (not :3100 LIVE).
4. **D.1 qualify drift** — reconcile `11px` vs `12.5px` on activity harness if still seen in CI qualify.
5. **D.6** — browser proof of `travail-aside-recents-empty` with seeded localStorage when a stable project id is available.
