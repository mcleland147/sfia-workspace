# SFIA Review Pack — FULL — F3 Conception fonctionnelle

| Champ | Valeur |
|-------|--------|
| **Rôle** | Cycle 2 — Conception fonctionnelle F3 Cursor + Evidence + Reinjection — SFIA Studio |
| **Synthesis-only** | **NO** |
| **Niveau** | FULL |
| **GO Morris exact** | `GO CONCEPTION FONCTIONNELLE — F3 CURSOR + EVIDENCE + REINJECTION — STANDARD` |
| **Demande Morris** | `ok go F3 voyons voir ce que ca donne` |
| **Cycle / opération** | Cycle 2 — Conception fonctionnelle |
| **Profil SFIA** | Standard |
| **Typologie** | INC |
| **Qualification** | Conception fonctionnelle F3 — Project Assistant / Cursor / Evidence / Reinjection |
| **MAIN worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main` |
| **Branch** | `main` |
| **HEAD local MAIN** | `09bfbb2db06b71cabf3369a5dccab0f7f1d7502a` |
| **origin/main** | `09bfbb2db06b71cabf3369a5dccab0f7f1d7502a` |
| **Inbound handoff tip** | `a26a848dc3f38bc99c8a9c9fe5c9877482e861d4` |
| **Inbound handoff blob** | `4ecb0ae4b1ee6cf4c61f09ea9d24de558b38a0d1` |
| **Timestamp Europe/Paris (CEST)** | 2026-08-11 01:31:00 CEST (+0200) |
| **Timestamp UTC** | 2026-08-10 23:31:00 UTC |
| **Repository** | `mcleland147/sfia-workspace` |
| **Template** | `prompts/templates/sfia-cycle-execution-template.md` — status=baseline · version=v2.6 |

---

## Verdict (exact)

```
F3 FUNCTIONAL DESIGN READY FOR MORRIS REVIEW —
FUNCTIONAL CONTRACT CLOSED —
LIVE CURSOR DELIVERY BLOCKED / CONDITIONAL —
HARD PREREQUISITES: R-T-A3-1 OPEN HARD · R-T-A3-2 OPEN HARD · B5 OPEN (STOP BEFORE DELIVERY) · R1 OPEN · R-Process-Local (process-local authority insufficient for real Cursor) · IAM NOT_SELECTED · durable persistence NOT SELECTED · Project Assistant NOT WIRED to T-A4/T-A5/T-A6 —
NATIVE FIXTURE / INTEGRATION READINESS = PARTIAL (foundations EXISTS memory/fixture; wiring MISSING; real adapter MISSING under native ports) —
oa/execution-run CLASSIFIED PARALLEL (D2-D/FinOps fixture lane — NOT F3 state authority; T-A4/T-A5/T-A6 remain F3 authorities) —
NO PRODUCT MODIFICATION —
MORRIS DECISION REQUIRED
```

**Handoff status:** **PUBLISH-IN-CYCLE** (L3 via `publish-review-handoff.sh`)

---

## 1. GO Morris et qualification

### Gate consommé

`GO CONCEPTION FONCTIONNELLE — F3 CURSOR + EVIDENCE + REINJECTION — STANDARD`

Normalisation depuis demande Morris « ok go F3… » + recommandation post-F2 « Conception fonctionnelle F3 — Cursor + Evidence + Reinjection ».

### Autorisé

- conception fonctionnelle read-only complète ;
- inventaire fondations Git ;
- harvest OPS1 mécanismes ;
- classification `oa/execution-run` ;
- Review Pack FULL + handoff L3.

### Interdit (respecté)

Delivery F3 · Cursor produit · OpenAI live · branche projet · mutation code/archi/méthode · résolution implicite HARD · adoption automatique d’option · commit/push/PR/merge projet.

### Qualification

| Champ | Valeur | Justification |
|-------|--------|---------------|
| Cycle | 2 Conception fonctionnelle | CKC pilot `02-conception-fonctionnelle.md` |
| Profil | **Standard** | read-only ; pas d’exécution réelle ; pas de décision archi irréversible |
| Typologie | INC | F1→F2→**F3**→(F4 hors scope) |
| CKC | candidate · OUI détail | guidance cognitive ; **aucune autorité d’exécution** |

Si décision produit structurante irréversible : STOP — F3 STRUCTURAL PRODUCT DECISION REQUIRED (non déclenché : pack = recommandations F3-D01…D11).

Gates **non** consommés : validation conception F3 · architecture · UX/UI · Delivery · HARD closure · Cursor real pilot · commit/push/PR/merge.

---

## 2. Git Truth

| Check | Expected | Observed | Result |
|-------|----------|----------|--------|
| MAIN WT | `finops-t2-main` | present · `main` | **PASS** |
| `git fetch origin --prune` | OK | OK | **PASS** |
| HEAD | `09bfbb2db06b71cabf3369a5dccab0f7f1d7502a` | match | **PASS** |
| origin/main | `09bfbb2db06b71cabf3369a5dccab0f7f1d7502a` | match | **PASS** |
| tracked dirty | NONE | NONE (`?? .tmp-sfia-review/` only) | **PASS** |
| Inbound tip | `a26a848dc3f38bc99c8a9c9fe5c9877482e861d4` | match | **PASS** |
| Inbound blob | `4ecb0ae4b1ee6cf4c61f09ea9d24de558b38a0d1` | match | **PASS** |
| Inbound role | Cycle 14 Post-merge F2 | match · F2 CLOSED · F3 NOT OPENED | **PASS — NO DRIFT** |
| Product diff | none | none | **PASS** |

Aucun STOP MAIN DIVERGENCE / DIRTY / HANDOFF DRIFT.

---

## 3. Sources consultées

### Template / méthode

- `prompts/templates/sfia-cycle-execution-template.md` (v2.6 baseline)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md`

### Handoff

- `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` @ tip `a26a848dc3f38bc99c8a9c9fe5c9877482e861d4` / blob `4ecb0ae4b1ee6cf4c61f09ea9d24de558b38a0d1`

### F2

- `app/features/project-assistant/f2/types.ts` · `orchestrateF2.ts` · `recordDecision.ts` · `proposalStore.ts` · `gatePolicy.ts`
- `app/features/project-assistant/actions.ts` · `types.ts`
- `app/lib/vertical-slice-runtime/service.ts`

### v3-native design / FA

- `sfia-v3-design/v3-native-option-a/README.md` (**VALIDATED BY MORRIS** pack)
- `07-execution-contract-and-evidence-flow.md` (header historique « candidate » — décisions pack validées)
- `09-existing-assets-reuse-and-replacement-map.md`
- `functional-architecture/**` (authority · evidence · state/command/event · legacy)

### Modeled / AT (contrainte fonctionnelle)

- `sfia-v3-modeled/.../07-execution-contract-attempt-and-agent-model.md`
- `sfia-v3-modeled/.../08-evidence-review-bundle-maturity-and-debt-model.md`
- `sfia-v3-technical-architecture/.../06-execution-contract-agent-and-adapter-architecture.md`

### Runtime OA inventaire

- `app/lib/oa/execution-contract/**` (T-A4)
- `app/lib/oa/execution-attempt/**` (T-A5)
- `app/lib/oa/evidence-review/**` (T-A6)
- `app/lib/oa/execution-run/**` (classification §25)

### OPS1 harvest

- `executionContractService.ts` · `executionRevalidation.ts` · `executionWorktree.ts` · `cursorExecutionAdapter.ts` · `executionOrchestrator.ts` · `executionPostCheck.ts` · `reportService.ts` · `sessionLifecycle.ts`

### Réserves / T-A7

- `a5-2-reservations-authority-atomicity-framing/**`
- `t-a4-execution-contract-governance/10-runtime-validation.md` · `11-pr-readiness.md`
- `t-a6-evidence-review-claims-maturity/**`
- `t-a7-technical-readiness-framing/README.md` · `19` · `20`
- `t-a7-next-decision-step-framing/**`

---

## 4. CKC utilisé

| Champ | Valeur |
|-------|--------|
| cycle_id | 2 |
| Path | `.../pilots/02-conception-fonctionnelle.md` |
| status | **candidate** |
| Autorité | **aucune autorité d’exécution** |
| Usage | experimental cognitive guidance |

Dimensions appliquées : usagers/rôles · parcours · exceptions · objets · états · règles · AC · permissions · intégrations (QUOI) · frontières AT.

Anti-claims CKC : pas « spec complète » · pas « prêt à coder » sans gate · pas validation architecture · pas UX/UI.

---

## 5. Promesse F3 candidate + formulation recommandée

### Candidate (brief)

« Depuis mon Project Workspace, après une proposition F2 approuvée, je peux préparer une exécution bornée et explicable, confirmer exactement ce qui sera exécuté, lancer Cursor dans un périmètre local isolé, suivre son état, récupérer les preuves produites et recevoir dans Studio une restitution contextualisée avec les réserves et le prochain gate — sans commit, push, PR ou merge automatique. »

### Confrontations Git

| Point | Preuve | Impact |
|-------|--------|--------|
| F2 `executionPerformed: false` + `executionForbidden: true` | `f2/types.ts` | F2 GO ≠ launch — compatible |
| Confirmation N1–N3 / MORRIS sur ExecutionContract | modeled 07 · design 07 | « lancer Cursor » exige gate confirmation distinct |
| Real Cursor | R-T-A3-1/2 OPEN HARD · adapters native = noOp/test | promesse live **conditionnelle** |
| Persistence | proposalStore process-local · OA memory stores | restart fail-closed |
| OPS1 | historical proof only | ne doit pas apparaître dans la promesse produit |

### Formulation recommandée (non-décision)

> Depuis mon Project Workspace, après une proposition F2 en statut APPROVED ou APPROVED_WITH_RESERVES avec `readyForNextGatedStep=true` et contexte non STALE, je peux **préparer** un ExecutionContract natif (T-A4) borné et explicable. **Un second gate de confirmation exacte** (recommandé : Morris / niveau requis par `requiredAuthority`) est nécessaire avant toute ExecutionAttempt (T-A5). L’agent (pilote : Cursor, `selectedAgentRef` explicite, mode REAL ou FIXTURE étiqueté) s’exécute dans un worktree isolé sans toucher l’arbre principal, sans commit/push/PR/merge. Studio réinjecte Evidence + ReviewBundle (T-A6) et une **recommandation** de prochain gate — jamais une décision, jamais une exécution implicite. **Cursor réel** reste **BLOQUÉ / CONDITIONNEL** tant que les prérequis HARD et d’autorité durable ne sont pas traités.

---

## 6. Périmètre F3 / hors périmètre

### IN

F2→F3 entry · Confirmation d’exécution · objets T-A4/T-A5/T-A6 · états Contract/Attempt/Evidence · agent/Cursor · worktree/Git fonctionnel · retry/cancel/timeout · Evidence · ReviewBundle · reinjection Assistant · User Trust · next-gate recommendation · OPS1 harvest · classification execution-run · matrices réserves/maturité/assets · F3-D01…D11 recommandations.

### OUT

Delivery · QA implémentation · AT nouvelle · UX/UI/Figma pixels · FinOps/GreenOps · RUN readiness · persistence/IAM implementation · OPS1 mutation · F4 LPS closure · capitalisation méthode · commit/push/PR/merge · live Cursor/OpenAI.

---

## 7. Acteurs / rôles

| Acteur | Rôle F3 | Peut | Ne peut pas |
|--------|---------|------|-------------|
| **Morris** | Autorité L0 | Confirmer contrat · décider GO conception/delivery · clôturer réserves | être impersonné par agent/client |
| **Utilisateur Project Workspace** | Demandeur | Demander préparation · voir états Trust · poursuivre conversation post-réinjection | lancer Cursor sans confirmation · consommer gate |
| **Assistant (F1/F2 surface)** | Façade conversationnelle | Qualifier · proposer F2 · présenter résultats F3 | exécuter · décider Morris · reconstruire autorité depuis prose |
| **Confirmation / HumanDecision** | Gate | Lier décision→contrat | démarrer Attempt |
| **Execution Governance (T-A4)** | Propriétaire contrat | Build/Validate/Confirm/Supersede/Cancel pré-exec | muter Attempt post-start · inventer Evidence complète |
| **Execution Attempt (T-A5)** | Propriétaire tentative | Select agent · Start · Record result/failure · Retry=new · Cancel/Timeout | élargir scope · devenir Morris · silent fixture fallback |
| **Execution Adapter Cursor** | Port G | Exécuter dans bornes | muter authority/scope/evidenceRequirements |
| **Evidence/Review (T-A6)** | Preuves & bundle | Register/ingest · ReviewBundle · RecommendNextGate | lancer exécution · consommer gate |
| **Git / worktree** | Vérité locale d’effets | Isoler effets | autoriser remote write auto |
| **ChatGPT** | Qualifie/valide | Challenger conception | décider / exécuter |
| **Cursor (ce cycle)** | Analyse conception | Pack + handoff | delivery / live |

---

## 8. Parcours end-to-end

```text
F2 Proposal (APPROVED | APPROVED_WITH_RESERVES)
  + Decision (GO | GO_WITH_RESERVES)
  + readyForNextGatedStep=true
  + contextSnapshot fresh
→ F3 PREPARE (no launch)
→ ExecutionContract draft→…→confirmation_required
→ Exact Confirmation gate (HumanDecision / Morris per requiredAuthority)
→ Contract confirmed (immutable binding)
→ Agent selection (selectedAgentRef explicit; REAL|FIXTURE labeled)
→ ExecutionAttempt start (worktree @ exact base HEAD)
→ Adapter run (allowlist; deny protected; timeout; no remote Git)
→ Attempt terminal (succeeded|failed|timeout|cancelled)  // TECHNICAL only
→ Evidence ingest (T-A6) → completeness assessment
→ ReviewBundle
→ Reinjection Project Workspace / Assistant (conversation continues)
→ RecommendNextGate (recommendation only)
```

Interdits sur tout le parcours : auto-commit/push/PR/merge · auto-retry · silent real→fixture · OPS1 import produit · second state engine.

---

## 9. Entry contract F2→F3 (Q1)

### Préconditions d’éligibilité préparation

| Condition | Règle |
|-----------|-------|
| Proposal status | `APPROVED` ou `APPROVED_WITH_RESERVES` |
| Decision kind | `GO` ou `GO_WITH_RESERVES` |
| `readyForNextGatedStep` | **true** |
| `executionPerformed` | always **false** at F2 (type) — F2 never launches |
| Context | `contextSnapshot` match current Project/LPS version/doctrineDigest |
| Proposal store | proposal still found (process-local — restart ⇒ missing ⇒ fail closed) |

### Matrice statuts

| Situation | Effet F3 |
|-----------|----------|
| APPROVED + GO + ready | **PREPARE allowed** — never launch |
| APPROVED_WITH_RESERVES + GO_WITH_RESERVES | PREPARE allowed ; **reserves bound into contract** |
| REFUSED / NO_GO | F3 inaccessible |
| AMENDMENT_REQUIRED / AMEND | ancien GO **non réutilisable** ; nouvelle proposition requise |
| STALE / LPS-doctrine-Project drift | fail closed — refresh/requalify |
| Proposition introuvable post-restart | fail closed — R-Process-Local |
| Nouvelle demande matérielle / scope change post-GO | stale / AMEND path — no reuse |
| `execution_request` intent alone | does not bypass F2 gate |

### Règle structurante (reco F3-D01)

**F2 GO autorise uniquement la préparation d’un ExecutionContract. Il ne constitue JAMAIS l’autorisation de lancer Cursor.** Compatible `executionForbidden: true` / `agentBinding: "NOT_AVAILABLE"` / `executionPerformed: false`.

---

## 10. Objets métier et responsabilités (Q3)

| Objet | Owner | Identité | États clés | Amont | Aval | Qui modifie | Qui ne modifie PAS |
|-------|-------|----------|------------|-------|------|-------------|-------------------|
| F2 Proposal | F2 / Assistant | `proposalId` | PROPOSED…APPROVED*…STALE | intent | Decision | F2 orchestrator | Attempt/Adapter |
| F2 Decision / HumanDecision | Morris/humain via F2 | `decisionId` | GO* recorded | Proposal | Contract `decisionRef` | recordDecision | Agent |
| ExecutionContract | **T-A4** | `xct:` | draft→…→confirmed→(T-A5 executing…) | Decision+LPS+doctrine | Attempt | T-A4 cmds | Adapter scope rewrite |
| Agent selection | **T-A5** | `selectedAgentRef` | on Attempt | Contract confirmed | Start | selectExecutionAgent | Client claim Morris |
| ExecutionAttempt | **T-A5** | `xat:` | accepted→running→terminal | Contract | Evidence source | T-A5 cmds | T-A4 rewrite post-start |
| Evidence | **T-A6** | `ev:` | expected→available→verified/incomplete… | Attempt | ReviewBundle | register/ingest | Attempt « claim READY » |
| ReviewBundle | **T-A6** | `rb:` | draft→in_review→frozen… | Evidence set | Reinjection / Nora | T-A6 | silent auto-close Critical |
| Assistant reinjection view | Studio façade | derived | Trust states | Bundle | conversation | projection | execution trigger |
| Next gate recommendation | **T-A6** RecommendNextGate | recommendation id | recommended | Bundle | human | recommend only | consume/decide/execute |
| `oa/execution-run` | D2-D/FinOps lane | run id | 8-state machine | FinOps/D2-D | **NOT F3 chain** | execution-run module | **must not** own F3 Contract/Attempt |

**Aucun nouvel objet inventé** si couverture native existe. Dette évitée = priorité.

---

## 11. Machine d’état Contract / Attempt / Evidence (Q4)

### A. Gouvernance contrat (T-A4)

`draft → proposed → validated → confirmation_required → confirmed | cancelled | superseded`

Post-confirm executing/completed/failed : **écrits T-A5** sur le contrat (ownership split modeled 07) — UI doit afficher la **phase** sans fusionner avec Evidence.

### B. Tentative technique (T-A5)

Exemples runtime/schema : accepted → running → succeeded | failed | timeout | cancelled | result_pending…
**Attempt succeeded ≠ Evidence complete ≠ validation fonctionnelle ≠ Morris READY.**

### C. Preuves (T-A6)

Evidence: `expected | available | verified | incomplete | stale | rejected | superseded | unavailable`
Bundle: séparément reviewable / frozen.

### Labels utilisateur (fonctionnels)

| Technique | Label Trust (recommandé) |
|-----------|--------------------------|
| Contract not confirmed | CONFIRMATION REQUISE · AUCUNE EXÉCUTION |
| Attempt running | EXÉCUTION EN COURS · AGENT · MODE |
| Attempt succeeded | SUCCÈS TECHNIQUE |
| Evidence incomplete | PREUVES INCOMPLÈTES — pas READY |
| Evidence complete + bundle | PREUVES COMPLÈTES — revue humaine possible |
| Always | AUCUN COMMIT / PUSH / PR / MERGE |

---

## 12. Règles Morris / Confirmation / Authority (Q2)

### Binding de confirmation exacte (minimum)

contractId · schemaVersion · digest/idempotency · proposalId · decisionRef · projectId · lpsVersion · doctrine digest/package · base HEAD · action · target · scope · allowlist/capabilities · forbidden/protected paths · selectedAgentRef · timeout · stopConditions · evidenceExpected · noCommit · noPush · noPR · noMerge · requiredAuthority (N1|N2|N3|MORRIS) · mode REAL|FIXTURE.

### Recommandation (F3-D02)

**Premier pilote Cursor réel F3 : confirmation Morris exacte liée au contrat immutable — YES.**

Alternatives (non choisies) : N3 non-Morris pour fixture only ; confirmation allégée hors Critical — **reject for real pilot**.

### Authority vs capability

Capability = ce que l’agent *peut techniquement*. Authority = ce qui est *autorisé*. Séparation obligatoire (AC-F3-07). Aucun agent `canActAsMorris`. Hostile client Morris claims **ignored** (F3-S22).

### Process-local (R-Process-Local)

Autorisation process-local **perdue au restart** ≠ autorité suffisante pour Cursor réel → **fail closed** (F3-S19, AC-F3-28). Reco F3-D07 = **NO / CONDITIONAL**.

---

## 13. Règles Cursor / agent (Q5)

| Règle | Valeur |
|-------|--------|
| Agent pilote candidat | Cursor |
| `selectedAgentRef` | explicite obligatoire |
| Modes | REAL et FIXTURE **explicitement étiquetés** |
| Absence Cursor réel | fail closed — **no silent fixture** |
| Fixture | seulement si sélection explicite ; preuve NON LIVE |
| Scope | agent n’élargit jamais |
| Native adapters today | `noOpExecutionAdapter` · `testExecutionAdapter` — **PAS** real Cursor sous ports T-A5 |
| OPS1 real adapter | harvest only — **DO NOT import** `@/lib/ops1` |

---

## 14. Règles worktree / Git (Q6)

### Garanties fonctionnelles cibles

worktree dédié · créé depuis **exact base HEAD** · branche locale dédiée · principal repo untouched · allowlist R/C/M explicite · protected deny-by-default · timeout · no remote Git · no commit/push/PR/merge.

### Vue utilisateur

| Événement | Comportement |
|-----------|--------------|
| worktree impossible | blocked · evidence of failure · no launch |
| base drift | blocked (revalidation fail closed) |
| dirty principal | blocked |
| protected path | blocked / out-of-contract fail |
| effet hors contrat | Attempt failed · violation evidence |
| timeout / crash / cancel | terminal + evidence |
| partial irreversible | **no implicit unproven rollback** — surface reserves |

Harvest OPS1: `executionWorktree.ts` · `executionRevalidation.ts` (HEAD match) · `executionPostCheck.ts`.

---

## 15. Retry / cancellation / timeout (Q7)

| Règle | Conception |
|-------|------------|
| Auto-retry | **interdit** par défaut |
| Retry | **nouvel** ExecutionAttempt + `retryOf` |
| Éligibilité | previous terminal · contract still confirmed & fresh · context non stale · policy budget |
| Nouvelle confirmation | **oui** si contract/context/agent/mode change ; sinon reco : re-ack binding digest (Morris arbitre F3-D08 nuances) |
| Timeout | `triggerAttemptTimeout` path · terminal timeout + evidence |
| Cancel | cancel Attempt + evidence ; no launch resume |
| Partial success | not « completed métier » ; Evidence likely incomplete |

---

## 16. Evidence contract (Q8)

### Preuves fonctionnelles attendues (minimum)

executionContractId · executionAttemptId · correlationId · agent+mode · base HEAD · worktree path · start/end · exit status · timeout/cancel flags · files read/created/modified/deleted/renamed · diff/stat · commands · tests · stdout/stderr refs/digests · UI capture if applicable · post-check · scope violations · errors · reserves · completeness · provenance.

### Distinctions

| Terme | Sens |
|-------|------|
| TECHNICAL SUCCESS | Attempt terminal succeeded |
| EVIDENCE COMPLETE | T-A6 completeness satisfied for expected set |
| EVIDENCE INCOMPLETE | missing/unverified expected evidence |
| FUNCTIONAL VALIDATION PENDING | human/Nora review not done |

**Règle :** Evidence incomplete **interdit** claims completed/adopted/READY métier (compat T-A6 / ClaimEvaluation ; R-M01 OPEN n’autorise pas surclaim).

---

## 17. ReviewBundle contract (Q9)

Bundle lie exact Contract + Attempt + Evidence set. Sert Studio · Nora · validation humaine · handoff · reprise conversationnelle.

Synthèse seule ≠ bundle complet.

Minimum de complétude : identity bindings · evidence inventory · completeness flag · reserves · technical vs evidence distinction · recommendation slot (non-executive) · provenance digests.

Freeze/reopen via T-A6 commands — pas d’auto-close Critical.

---

## 18. Reinjection contract (Q10)

### Doit présenter

autorisé vs exécuté · agent/mode · état technique · fichiers touchés · tests/commandes · preuves · écarts · réserves · completeness · prochaine action · prochain gate recommandé.

### Ne doit jamais

relancer Cursor · consommer gate · enregistrer décision Morris · commit/push/PR/merge.

### Restart

Si persistence process-local/memory : post-restart, reinjection **ne reconstruit pas** l’autorité d’exécution ; au mieux rehydrate lecture si store encore vivant, sinon « état non durable — requalifier ». Aligné proposalStore notice.

---

## 19. User Trust states (Q11)

### Avant

CONTRAT D’EXÉCUTION · CONFIRMATION REQUISE · AUCUNE EXÉCUTION

### Pendant

EXÉCUTION EN COURS · AGENT : CURSOR · MODE : REAL | FIXTURE

### Après (technique)

SUCCÈS TECHNIQUE | ÉCHEC | TIMEOUT | ANNULÉ

### Après (preuves) — orthogonal

PREUVES COMPLÈTES | PREUVES INCOMPLÈTES

### Permanent

AUCUN COMMIT / PUSH / PR / MERGE

Éviter jargon opaque (LOCAL_PROCESS, REAL_LOCAL_CORE, ids bruts) en surface primaire — garder en détail/provenance.

Pas de redesign UI ce cycle.

---

## 20. Exception / error matrix

| Code / cas | Trigger | Effet | Trust |
|------------|---------|-------|-------|
| F2_NOT_ELIGIBLE | bad status / NO_GO | no prepare | F3 inaccessible |
| F2_STALE | snapshot drift | fail closed | refresh |
| F2_MISSING_AFTER_RESTART | store empty | fail closed | R-Process-Local |
| CONFIRMATION_REQUIRED | unconfirmed contract | no start | CONFIRMATION REQUISE |
| CRITICAL_NOT_ACKNOWLEDGED | R-T-A3-1 | Confirm fail-closed | blocked |
| AGENT_UNAVAILABLE_REAL | no real Cursor | fail closed | no fixture fallback |
| WORKTREE_BASE_DRIFT | HEAD ≠ base | no launch | blocked |
| PROTECTED_PATH | deny | fail/blocked | out-of-contract |
| SCOPE_VIOLATION | post-check | Attempt failed | écart |
| TIMEOUT | budget | terminal timeout | TIMEOUT |
| CANCELLED | user/system | terminal cancel | ANNULÉ |
| EVIDENCE_INCOMPLETE | T-A6 | block READY claims | PREUVES INCOMPLÈTES |
| GIT_WRITE_REQUESTED | commit/push/PR/merge | refuse — separate gate | no auto |
| HOSTILE_MORRIS_CLAIM | client spoof | ignore | authority intact |
| PARALLEL_STATE_ENGINE | use execution-run as F3 authority | **forbidden** | AC-F3-30 |

---

## 21. Scénarios F3-Sxx

| ID | Scénario | Résultat attendu |
|----|----------|------------------|
| F3-S01 | GO F2 valide → contrat préparé | PREPARE ok · **pas d’exécution** |
| F3-S02 | GO WITH RESERVES | reserves linked on contract |
| F3-S03 | NO-GO | F3 inaccessible |
| F3-S04 | AMEND | ancien GO non réutilisable |
| F3-S05 | Project/LPS/doctrine drift pre-contract | stale/refus |
| F3-S06 | contrat exact confirmé → agent sélectionné | confirmed + selectedAgentRef |
| F3-S07 | Cursor real indisponible | fail closed · no fixture fallback |
| F3-S08 | fixture explicite | preuve NON LIVE |
| F3-S09 | worktree base drift | aucune exécution |
| F3-S10 | protected path | blocked |
| F3-S11 | succès allowlist | Attempt technical success |
| F3-S12 | path hors contrat | failed/out-of-contract |
| F3-S13 | timeout | terminal + evidence |
| F3-S14 | cancel | cancellation evidence |
| F3-S15 | technical success + Evidence incomplete | **aucun claim READY** |
| F3-S16 | Evidence complete | ReviewBundle reviewable |
| F3-S17 | réinjection Assistant | contextualisé · no new exec |
| F3-S18 | user « continue » | nouvelle qualification/gate · no implicit exec |
| F3-S19 | restart before launch | authority lost · fail closed |
| F3-S20 | retry | nouvel Attempt |
| F3-S21 | commit/push/PR/merge during F3 | refus · gate séparé |
| F3-S22 | hostile Morris client claim | ignored |
| F3-S23 *(ajout)* | attempt to drive F3 via `oa/execution-run` state | **rejected** — PARALLEL not authority |
| F3-S24 *(ajout)* | Critical cycle without ack (R-T-A3-1) | Confirm fail-closed |
| F3-S25 *(ajout)* | OPS1 import in native F3 module | **forbidden** (AC-F3-29) |

---

## 22. Critères AC-F3-xx

| AC | Énoncé testable |
|----|-----------------|
| AC-F3-01 | F2 approval alone never launches execution |
| AC-F3-02 | Only eligible approved F2 proposal can prepare execution |
| AC-F3-03 | Stale context fails closed |
| AC-F3-04 | ExecutionContract is native source of execution scope |
| AC-F3-05 | Cursor Markdown is adapter/export only |
| AC-F3-06 | Exact execution confirmation bound to immutable/current contract identity |
| AC-F3-07 | Capability and authority are separate |
| AC-F3-08 | Selected agent is explicit |
| AC-F3-09 | Real vs fixture is explicit |
| AC-F3-10 | No silent fallback real→fixture |
| AC-F3-11 | Worktree uses exact base HEAD |
| AC-F3-12 | Principal project tree remains untouched |
| AC-F3-13 | Protected/out-of-scope paths fail closed |
| AC-F3-14 | No automatic commit |
| AC-F3-15 | No automatic push |
| AC-F3-16 | No automatic PR |
| AC-F3-17 | No automatic merge |
| AC-F3-18 | No auto retry by default |
| AC-F3-19 | Retry creates a new Attempt |
| AC-F3-20 | Technical attempt status ≠ evidence completeness |
| AC-F3-21 | Incomplete evidence blocks readiness claims |
| AC-F3-22 | ReviewBundle links exact Contract/Attempt/Evidence |
| AC-F3-23 | Result reinjected into Project Workspace |
| AC-F3-24 | Assistant conversation resumes from evidence |
| AC-F3-25 | Reinjection cannot trigger execution implicitly |
| AC-F3-26 | Next gate is recommendation only |
| AC-F3-27 | No system recommendation becomes Morris decision |
| AC-F3-28 | Process restart never reconstructs execution authority from chat prose |
| AC-F3-29 | OPS1 has zero production dependency in native F3 |
| AC-F3-30 | No parallel execution state authority introduced for F3 |
| AC-F3-31 *(+)* | F3 does not treat `oa/execution-run` as Contract/Attempt authority |
| AC-F3-32 *(+)* | Real Cursor delivery remains blocked while R-T-A3-1/2 OPEN HARD unless Morris accepts explicit conditional scope |

---

## 23. Asset reuse matrix

| ASSET | CURRENT STATUS | F3 ROLE | ACTION |
|-------|----------------|---------|--------|
| F2 Proposal | EXISTS process-local | Entry object | **WIRE** |
| F2 Decision | EXISTS process-local | decisionRef | **WIRE** |
| T-A4 ExecutionContract | EXISTS memory foundation | scope authority | **WIRE** |
| T-A5 ExecutionAttempt | EXISTS memory + noOp/test adapters | attempt authority | **WIRE** / **ADAPT** adapters |
| T-A5 AgentRegistry | memory registry | selectedAgentRef | **WIRE** |
| T-A5 adapters | noOp/test only | Cursor port | **REIMPLEMENT_BEHIND_NATIVE_PORT** (from OPS1 patterns) |
| T-A6 Evidence | EXISTS memory + fake payload | evidence authority | **WIRE** |
| T-A6 ReviewBundle | EXISTS memory | bundle | **WIRE** |
| T-A6 RecommendNextGate | EXISTS | recommendation | **WIRE** |
| oa/execution-run | EXISTS D2-D/FinOps fixture lane · claims sole D2-D tech state authority | **NOT F3 authority** | **DO_NOT_USE** for F3 state · classify **PARALLEL** · **MORRIS_DECISION_REQUIRED** only if convergence wanted later |
| OPS1 ExecutionContract | proven | pattern | **EXTRACT** / **HISTORICAL_ONLY** |
| OPS1 revalidation | proven fail-closed | pattern | **EXTRACT** |
| OPS1 worktree | proven | pattern | **EXTRACT** |
| OPS1 Cursor adapter | real+fixture explicit | pattern | **REIMPLEMENT_BEHIND_NATIVE_PORT** |
| OPS1 post-check | proven | pattern | **EXTRACT** |
| OPS1 I6 report | proven | reinjection pattern | **EXTRACT** |
| review handoff tooling | L3 publisher | this cycle only | **REUSE_AS_IS** |

---

## 24. OPS1 mechanism harvest

| MECHANISM | OPS1 PROOF | V3 NATIVE TARGET | REUSE MODE | DO NOT COPY | RESERVE |
|-----------|------------|------------------|------------|-------------|---------|
| execution contract | `executionContractService.ts` | T-A4 Build/Confirm | EXTRACT semantics | SQLite OPS1 schema as product | — |
| hash / immutable binding | canonicalize + revalidation | contract digest binding | EXTRACT | — | R-T-A3-2 |
| exact GO binding | gate_decisions / actionGate | HumanDecision↔contract | EXTRACT | OPS1 session coupling | — |
| fail-closed revalidation | `executionRevalidation.ts` | pre-start native | EXTRACT | auto-repair | — |
| worktree | `executionWorktree.ts` | native worktree port | EXTRACT | `.sfia-exec` path hardcode as only design | — |
| Cursor real adapter | `cursorExecutionAdapter.ts` | T-A5 AgentExecutionPort | REIMPLEMENT_BEHIND_NATIVE_PORT | `@/lib/ops1` import | HARD real |
| fixture/real separation | explicit adapterMode | AC-F3-09/10 | EXTRACT | silent fallback | — |
| no silent fallback | comments + branches | policy | EXTRACT | — | — |
| timeout | orchestrator | Attempt timeout | EXTRACT | — | — |
| no auto retry | OPS1 pattern | F3-D08 | EXTRACT | — | — |
| post-check | `executionPostCheck.ts` | evidence + fail | EXTRACT | — | — |
| principal untouched | worktree isolation | AC-F3-12 | EXTRACT | — | — |
| file effect inventory | post-check/report | Evidence | EXTRACT | — | U-M02 |
| report coverage/incomplete/sealed | `reportService.ts` | ReviewBundle | EXTRACT | OPS1 UI | — |
| continuation conversationnelle | `reportReinjection.ts` / session | Assistant reinjection | EXTRACT | OPS1 session as product | R-Process-Local |
| event journal | `ops1EventSink.ts` | audit port | EXTRACT | SQLite coupling | — |

**Règle :** AUCUN import production F3 depuis `@/lib/ops1` / `@/features/ops1`.

Doctrine : Studio → native F3 → T-A4 → T-A5 → Adapter → T-A6 → Workspace. **Pas** Studio→OPS1→Cursor.

---

## 25. Analyse oa/execution-run et autorité d’état

### Faits Git

- Module `app/lib/oa/execution-run/**` : « Sole D2-D technical state authority (TECH-RUN-B) » — memory/fixture-first ; D2-D3 blocks real/sandbox-real.
- Used in FinOps/D2-D compositions (`composeExecutionRunD2D3*`, T7 shadow pilots).
- **Not** wired from `features/project-assistant`.
- Parallel vocabulary (ExecutionRun, provider lanes, 8-state) ≠ T-A4 ExecutionContract / T-A5 ExecutionAttempt.

### Classification

**PARALLEL** (D2-D / FinOps fixture technical lane)

| Option | Retained? |
|--------|-----------|
| REUSE as F3 authority | **NO** |
| INTERNAL helper under T-A5 | possible later only with Morris — not assumed |
| LEGACY/FOUNDATION | partial (fixture patterns) but **not** F3 owner |
| CONFLICT/AMBIGUOUS | **risk if F3 adopted it as second motor** — mitigated by explicit exclusion |

### Décision de conception (recommandation, pas STOP)

F3 **ferme** avec autorités **T-A4 + T-A5 + T-A6 uniquement**. `execution-run` reste hors chaîne F3 (AC-F3-30/31).
**Pas de troisième moteur.** Si Morris veut convergence future → gate dédié (hors ce cycle).

STOP EXECUTION STATE AUTHORITY AMBIGUOUS : **non déclenché** — classification documentée pour Morris.

---

## 26. Réserve / blocker matrix

| ID | CURRENT STATUS | SOURCE (Git) | BLOCKS F3 DESIGN? | BLOCKS FIXTURE INTEGRATION? | BLOCKS REAL CURSOR DELIVERY? | REQUIRES MORRIS DECISION? |
|----|----------------|--------------|-------------------|----------------------------|------------------------------|---------------------------|
| **R-T-A3-1** | **OPEN HARD** | a5-2 matrix · t-a4 10/11 · t-a6 01/03 · t-a7 readiness 20 | NO | NO (simu/fixture OK) | **YES** (Critical ack / real authority) | YES to close |
| **R-T-A3-2** | **OPEN HARD** | same · Option B residual cross-store | NO | Partial (memory OK) | **YES** (durable atomicity) | YES |
| **R-T-A3-3** | **OPEN** | t-a4 11 · IAM NOT_SELECTED | NO | NO | YES/Conditional (authority registry) | YES for IAM |
| **R-T-A3-4** | **OPEN** | t-a4 11 mapping | NO | NO | Low/Conditional | Optional |
| **B5** | **OPEN** · STOP BEFORE DELIVERY | t-a2 · a5-2 · t-a7 | NO | NO | **YES** before delivery | YES |
| **R1** (atomicité delivery) | **OPEN** | t-a2/t-a4/t-a7 *(≠ framing doctrine R1 closed)* | NO | NO | YES durable | YES |
| **R-M01** | **OPEN** | modeled 08 · README modeled | NO | NO | Conditional claims | YES closure |
| **U-M02** | **OPEN** | modeled 08 | NO | NO | Evidence blob storage vendor | YES for durable evidence |
| **T-A7** | **NOT OPEN** | t-a7 framing | NO | NO | cutover N/A | keep NOT OPEN |
| **R-FinOps-PG** | NON-BLOCKING local env | F2 handoff | NO | NO | NO | NO reopen |
| **R-Process-Local** | ACCEPTED LIMITATION | F2 + proposalStore | NO for design | YES for durable fixture UX | **YES** for real authority | YES (F3-D07) |
| **R-F2-SEMANTIC-CALIBRATION** | OPEN / NON-BLOCKING | F2 handoff | NO | NO | Indirect (bad F2→bad F3 gate) | Optional calibration |
| **R-UX-STUDIO-CLUTTER** | observation | handoff | NO | NO | NO | NO cleanup now |
| **IAM** | NOT_SELECTED | t-a7 docs | NO | NO | YES multi-user authority | YES |
| **Durable persistence** | NOT SELECTED / memory | OA infra | NO | Partial | YES | YES |

**HARD remains HARD** — not downgraded without Git/Morris closure.

---

## 27. Maturité F3 par composant

| Composant | Maturity | Justification Git |
|-----------|----------|-------------------|
| FUNCTIONAL DESIGN | **READY_FOR_DESIGN_DECISION** | this pack |
| NATIVE CONTRACT FOUNDATION | **EXISTS** (PARTIAL durable) | `oa/execution-contract` memory |
| NATIVE ATTEMPT FOUNDATION | **EXISTS** (PARTIAL) | `oa/execution-attempt` + noOp/test |
| NATIVE EVIDENCE FOUNDATION | **EXISTS** (PARTIAL) | `oa/evidence-review` memory/fake |
| PROJECT ASSISTANT WIRING | **MISSING** | no OA imports in project-assistant |
| CURSOR REAL ADAPTER (native) | **MISSING** / **BLOCKED** | no native real adapter ; HARD open |
| WORKTREE NATIVE ADAPTER | **MISSING** (pattern in OPS1) | extract later |
| REINJECTION | **PARTIAL** | T-A6 + OPS1 patterns ; Assistant wiring MISSING |
| DURABLE AUTHORITY | **BLOCKED** | R-Process-Local · R-T-A3-1 |
| DURABLE PERSISTENCE | **BLOCKED** / MISSING | memory stores · U-M02 · R1 |
| LIVE DELIVERY READINESS | **BLOCKED** | HARD + B5 + wiring |

---

## 28. F3-D01…D11 decision pack (recommandations ≠ décisions)

| ID | Question | Recommandation | Alternatives | Preuves |
|----|----------|----------------|--------------|---------|
| **F3-D01** | F2 GO = prepare only, never launch? | **YES** | Allow launch on GO — reject vs F2 types | `executionPerformed:false` |
| **F3-D02** | Real Cursor pilot needs Morris exact confirmation? | **YES** | N3-only ; skip for fixture — fixture may differ | modeled requiredAuthority · Critical |
| **F3-D03** | Use T-A4+T-A5+T-A6 only, no second motor? | **YES** after execution-run audit | Merge execution-run — **reject for F3** | §25 PARALLEL |
| **F3-D04** | OPS1 I5/I6 patterns behind native ports, no product imports? | **YES** | Direct OPS1 coupling — forbidden | harvest §24 |
| **F3-D05** | Pilot agent = Cursor only, explicit ref, no silent fallback? | **YES** | Multi-agent now — defer | Q5 |
| **F3-D06** | F3 stops before commit/push/PR/merge? | **YES** | Allow local commit — reject for F3 scope | promise · AC-14..17 |
| **F3-D07** | Process-local authority enough for real Cursor? | **NO / CONDITIONAL — treat as insufficient** | Accept process-local for real — **unsafe** | proposalStore · HARD · IAM |
| **F3-D08** | Retry = new Attempt, no auto-retry? | **YES** | Auto-retry — reject default | modeled retry · OPS1 |
| **F3-D09** | technical success ≠ evidence completeness; T-A6 owns completeness? | **YES** | Attempt owns READY — reject | modeled 08 |
| **F3-D10** | Reinjection ends with read-only next-gate recommendation? | **YES** | Auto-consume — reject | recommendNextGate |
| **F3-D11** | Open Delivery Cursor REAL immediately after this design? | **BLOCKED** (or READY WITH PREREQUISITES only for **fixture wiring** design-followups — not REAL) | Force READY — **forbidden** | §26–27 |

---

## 29. Options de séquence après validation Morris

### Option A (recommandée — candidate)

1. Morris valide conception F3 (consume F3-D01…D10 as decided)
2. Bounded **native fixture** integration (wire Assistant→T-A4/T-A5/T-A6 + fixture adapter) — still no real Cursor
3. QA fixture path
4. Live-prerequisite closure track (HARD R-T-A3-1/2, durable authority/persistence decisions, B5 policy)
5. Cursor **real** pilot under explicit GO

### Option B

1. Validate design
2. Prerequisite/HARD resolution first
3. Delivery Cursor real

### Option C

Design amendments if Morris rejects any F3-D*

Ne pas ouvrir le cycle suivant dans ce pack.

---

## 30. Recommandation de prochain cycle

**Recommandation :** après revue Morris du decision pack —
`GO VALIDATION CONCEPTION FONCTIONNELLE — F3 CURSOR + EVIDENCE + REINJECTION`
puis, si D01–D10 adoptés : cycle d’**intégration native fixture bornée** (pas real), **ou** cycle prérequis HARD si Morris choisit Option B.

UX/UI dédié : **optionnel** si Morris juge Trust states insuffisants sans design pixels — ne pas ouvrir maintenant.

---

## 31. Mutation counters

| Counter | Value |
|---------|-------|
| project content modifications | **0** |
| project commits | **0** |
| project pushes | **0** |
| PR | **0** |
| merge | **0** |
| live OpenAI calls | **0** |
| Studio Cursor executions | **0** |
| ExecutionAttempts real | **0** |
| OPS1 modifications | **0** |
| FinOps modifications | **0** |
| method modifications | **0** |
| handoff push | **1** (this cycle publish) |

Temporary only: `.tmp-sfia-review/**` (review pack + extract).

---

## 32. Anti-claims

Ce cycle **ne signifie PAS** :

- F3 implémenté · Cursor intégré Studio · Cursor real autorisé
- T-A4/T-A5/T-A6 product-wired to Assistant
- ExecutionContract/Attempt/Evidence durables
- persistence résolue · IAM résolu
- R-T-A3-1/2 fermés · B5 fermé · R1 fermé
- OPS1 supprimé · F4 ouvert
- commit/push/PR/merge automatisés · production-ready
- `oa/execution-run` adopté comme autorité F3
- HARD downgraded

---

## 33. Verdict

```
F3 FUNCTIONAL DESIGN READY FOR MORRIS REVIEW —
FUNCTIONAL CONTRACT CLOSED —
LIVE CURSOR DELIVERY BLOCKED / CONDITIONAL —
HARD PREREQUISITES: R-T-A3-1 OPEN HARD · R-T-A3-2 OPEN HARD · B5 OPEN (STOP BEFORE DELIVERY) · R1 OPEN · R-Process-Local (process-local authority insufficient for real Cursor) · IAM NOT_SELECTED · durable persistence NOT SELECTED · Project Assistant NOT WIRED to T-A4/T-A5/T-A6 —
NATIVE FIXTURE / INTEGRATION READINESS = PARTIAL (foundations EXISTS memory/fixture; wiring MISSING; real adapter MISSING under native ports) —
oa/execution-run CLASSIFIED PARALLEL (D2-D/FinOps fixture lane — NOT F3 state authority; T-A4/T-A5/T-A6 remain F3 authorities) —
NO PRODUCT MODIFICATION —
MORRIS DECISION REQUIRED
```

### Synthèse exécutive

Conception fonctionnelle F3 **cohérente et fermée pour revue Morris** : entry F2→F3, confirmation exacte, chaîne native T-A4/T-A5/T-A6, Evidence≠Attempt, reinjection non-executive, harvest OPS1 sans couplage, `execution-run` classé PARALLEL.
**Live Cursor delivery = BLOCKED/CONDITIONAL** tant que HARD et autorité durable ne sont pas traités.

---

Morris décide.
ChatGPT qualifie, challenge et valide.
Cursor analyse/exécute le cycle borné.
Git trace.
