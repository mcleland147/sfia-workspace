# SFIA Review Pack FULL — P6 HUMAN QA EVIDENCE CAPTURE
# QA HARNESS BASELINE & PROVENANCE QUALIFICATION

**Horodatage (Europe/Paris):** 2026-10-13 23:28:15 CEST
**GO Morris:** P6 QA HARNESS BASELINE & PROVENANCE QUALIFICATION — 2026-10-13
**Cycle:** 9 — QA / validation
**Sous-cycle:** P6-QA-HARNESS-BASELINE-PROVENANCE-QUALIFICATION
**Profil:** CRITICAL
**CKC:** ckc:studio:qa-validation (+ guidance ckc:studio:delivery) — aucune exécution autorisée
**Campagne:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Chantier:** P6-HUMAN-QA-EVIDENCE-CAPTURE-WIRING
**Entry handoff:** e322d163 / blob 738cf197
**Verdict:** P6 QA HARNESS BASELINE AND PROVENANCE QUALIFIED (LOCAL/ARTIFACT) / RUNID CONTRACT DECISION REQUIRED / O1-ADAPTED MIGRATION PLAN PREPARED / READY FOR MORRIS WIRING DECISION

**Contrôles:** STATIC QUALIFICATION ONLY — aucun test DET/REAL exécuté; aucun code projet modifié.

---

## 1. Git Truth

### Worktree courant (Option B — revue)
- Path: `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b`
- Branch: `fix/p6-real-observability-option-b`
- HEAD: `b6eb7862affa6a70e9d750135b067e2c0b15015b`
- origin/main: `aee4878d00f76cbb444977bf7ca370fb9b43fc83`
- Dirty: Review Pack only
- Harnesses p6-campaign: ABSENT
- Evidence lib: PRESENT (merged via PR #580)
- Runtime :3020: INTOUCHABLE

### Worktree QA P6
- Path: `/Users/morris/Projects/sfia-workspace`
- Branch: `qa/sfia-studio-p6-global-integrated-product-qa`
- HEAD / remote tip: `980064c05f1769f00d0ef85ef5284a899c6a0d73`
- merge-base with main: `980064c0` (= QA HEAD)
- `git rev-list --left-right --count HEAD...origin/main` → `0 20` (QA 0 unique / main **20** ahead)
- Evidence lib / cognitiveExecutionReceipt on QA HEAD: **ABSENT**
- Dirty tracked (préservés, non touchés): UI/Nora/docs divers
- Untracked: `projects/sfia-studio/app/__tests__/p6-campaign/` (4 fichiers)

### Handoff tip d'entrée
- `e322d163dd00f60b11b02e46f84478a5114f6665` / blob `738cf19736218f4357b24772ce5ab241e15945d4`

Aucune sync Git. Aucun worktree créé. Aucune copie/migration.

---

## 2. Sources / Convergence

Build Doctrine / Roadmap / C1 / 33 / 35 / Nora 08 / P6 §S+§T / CKC qa-validation+delivery / PRR / entry STOP handoff.

**État:** Option B MERGED+POST-MERGE VERIFIED · Seam DET · Wiring BLOCKED/PENDING · Harness provenance = objet de ce cycle · REAL new mechanism NOT PROVEN · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED.

**Orientation Morris:** O1 ADAPTÉE (principe simplification) — réutiliser ledger/writer PR #580; conserver infos QA; pas de 2e architecture. **Décision identité preuves / migration encore ouverte** — ce pack apporte les faits.

---

## 3. Inventaire des quatre harnesses

Chemin: `projects/sfia-studio/app/__tests__/p6-campaign/` (QA WT only)

| # | File | Bytes | Lines | SHA-256 | Git | Remote |
|---|---|---:|---:|---|---|---|
| 1 | phase1.requal.smokes.real.test.ts | 18755 | 508 | `6f3a708c6270b8e52a197a264c8aa59d26b1bff12b2af00aeb07a3438ef6b172` | **UNTRACKED** / NOT_IGNORED | ABSENT |
| 2 | phase3.controlledCandidate.screening.real.test.ts | 12007 | 318 | `6f3dd942b29797cbdd35d98f77368d54eb3762027dd216f229b5c6895f693933` | **UNTRACKED** | ABSENT |
| 3 | phase3.routerInSitu.and.discrimination.real.test.ts | 16851 | 465 | `9bdce10a0642c3bdf71dbe64701a693dc315f7fa55ecb2bb7c80fc1c6a548759` | **UNTRACKED** | ABSENT |
| 4 | smoke02.zeroExecution.real.test.ts | 8594 | 252 | `9491d8c8b69c4e51bef6794184c1904ebae9b147cca1e668c7ae50e7468c514b` | **UNTRACKED** | ABSENT |

mtime locaux (filesystem): 2026-10-08 13:17–16:30.

### Provenance

| Source | Finding |
|---|---|
| Git commit authorship | **NONE** — never tracked |
| Remote QA / main trees | **0** paths under `__tests__/p6-campaign` |
| Local artifact `harness-classification.md` | Documents path, 4 files, `tracked:false`, `commitDisposition: DO_NOT_COMMIT`, thin orchestration |
| `gitignore-note.md` | Explicit: do not stage/commit without separate Morris GO |
| `campaign-status.md` | Campaign ops on QA branch; baseline main then `aba6c4a6`; local HEAD note `38fb5eb9` — **not** a harness commit |
| Creation decision in Git | **PROVENANCE NOT ESTABLISHED** (no commit) |
| Operational campaign artifact trail | **LOCALLY DOCUMENTED** (classification + status + interim + ledger) |

**Classification recommandée (inchangée):** DO_NOT_COMMIT / BLOCKED for Git adoption until Morris GO. **Ne pas transformer UNTRACKED → ADOPTED** dans ce cycle.

### Dépendances / Product API (statique)

Tous:
- `orchestrateAssistantSend` ← `@/features/project-assistant/f2/orchestrateF2`
- `getRuntimeApplicationService` / OA decision / nora-eval / `setConversationProviderForTests`
- Opt-in env gates + lecture `.env.local` (clés non affichées) + `OPENAI_API_KEY` assert
- Writer: inline `fs.appendFileSync` → `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl`
- raw-evidence JSON via `writeFileSync`

| File | Env gate | Scénarios | REAL |
|---|---|---|---|
| phase1.requal… | `P6_PHASE1_REQUAL_SMOKES=1` | SMOKE-01/02/03 | YES (OpenAI) |
| smoke02… | `P6_PHASE1_RUN_SMOKES=1` | SMOKE-02 zero-exec | YES |
| phase3.controlled… | `P6_PHASE3_RUN_REAL=1` | PHASE3-CC-* matrix | YES |
| phase3.router… | `P6_PHASE3_CONT_REAL=1` | PHASE3-RIS / DISC / Astra multi | YES |

runId patterns: harness-owned (`P6-SMOKE-*`, `P6-P3-*`, `P6-RIS-*`, `P6-DISC-*`); `Date.now()` / cell ids; **≠ logicalTurnId** (logicalTurnId parfois seed test only).

---

## 4. Preuves historiques (lecture seule)

| Property | Value |
|---|---|
| Path | `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl` |
| SHA-256 | `704531851d7102032c832d4d123abbddfc45d0b41d6afb6548c4a1f0e1f4b827` |
| Bytes / lines | 34863 / 76 |
| Valid JSON lines | 76 / invalid 0 |
| Kinds | 74 `(no-kind)` campaign · 1 `ROOT_CAUSE_INVESTIGATION_READONLY` · 1 `RUNTIME_REQUALIFICATION` |
| cognitive_execution_receipt v2 | **0** |
| Unique runIds | 75 · **dup runIds: 0** |
| ok/hardPass | 63 true (where present) |
| Sensitive key names in JSON | **none detected** (field-name scan) |
| raw-evidence files | 32 (directory count) |

### Human QA Queue
- `human-qa-queue.json`: 19 items · **all `WAITING HUMAN QA`** · `executedByMorris: NO`
- Item fields (names): queueId, scenarioId, title, p6MinMapping, reasonHumanRequired, startingState, setupReproduction, actionsForMorris, expectedBehavior, observationChecklist, browserViewport, evidenceLocation, blockingPotential, status, batchSection, …

**Aucune écriture / normalisation du ledger.**

### Classification des champs campagne (no-kind)

| Classe | Exemples |
|---|---|
| Indispensable résultats QA | `verdict`, `ok`, `hardPass`, `error`, `resultStatus`/`resultCode`/`resultMessage`, `scenarioId`, `runId`, `workloadId` |
| Indispensable provenance | `campaignId`, `executionMode`, `proofTarget`, `providerResponseId`, `modelId`/`effort`/`selectedModel`/`selectedEffort`, `startedAt`/`endedAt`, `latencyMs`, `authorityProfile` |
| Indispensable audit | `projectId`, `cycleInstanceId`, `proofClassification`, `replicationTier`, `rep`, `evidenceRef`, `notes`/`observations` |
| Utile secondaire | `humanDecisionCount`, `markerRecovered`, `historicalP5Support`, `floor`, `sendOk`, `productOutcome` |
| Historique only | `historicalP5S05`, `priorRunId`/`priorDisposition`, screening completion flags |
| Absent du reçu Option B | **presque tous les champs QA outcome** (voir §5) |

**Perte si suppression seule des writers campagne sans remplacement:** verdict/hardPass/workload screening matrix, latency, executionMode/proofTarget REAL-BOUNDARY labeling, Human-linked productOutcome notes — **non couverts** par receipt v2 seul.

---

## 5. Comparaison Option B (main@aee4878d)

### Surfaces
- Seam: `collectP6ProductTurnEvidence({ productTurnResult, runId, scenarioId })`
- Capture: `captureCognitiveExecutionReceiptToP6Ledger` → kind `cognitive_execution_receipt`, ledgerSchemaVersion **2**
- Campaign writer sécurisé: `appendValidatedP6CampaignLedgerRow` (= `appendP6EvidenceLedgerRow` + validation) — **existe**, ne prouve pas à lui seul le remplacement des writers historiques
- Unicité: DUPLICATE_RUN_ID cross-writer; read integrity duplicate detection
- Historical kinds: accepted with minimal campaign contract

### Chevauchement champs

**COMMON:** campaignId, scenarioId, runId, projectId, providerResponseId, proofClassification (sémantiques différentes possibles)

**QA_ONLY (perdus si receipt-only):** verdict, ok, hardPass, workloadId, executionMode, proofTarget, latencyMs, modelId/effort/selected*, startedAt/endedAt, authorityProfile, humanDecisionCount, productOutcome, replicationTier, notes/observations, …

**RECEIPT_ONLY:** logicalTurnId, providerIdentity/presentation/observation, usage/tokens, adaptive/continuation, productTerminalStatus, conservation, realBoundaryClaim, productRealProofStatus, …

**Conclusion:** receipt ≠ substitut complet des lignes campagne QA. Writer campagne sécurisé **nécessaire** pour conserver les résultats QA, **en plus** du seam receipt pour la provenance cognitive — sous contrainte d'identité runId.

---

## 6. Compatibilité Product F2 (main)

Chemin observé sur `origin/main`:

1. `orchestrateAssistantSend` (F2) → pour le flux informatif analysé: appelle `orchestrateProjectAssistantTurn` (F1) puis `return { ...f1, ... }`.
2. `orchestrateTurn` attache `cognitiveExecutionReceipt` via `projectAndConserveCognitiveExecutionReceipt` sur succès/échec avec logicalTurnId.
3. Donc **sur main**, un envoi F2 qui traverse F1 **peut** exposer `ProjectAssistantSendResult.cognitiveExecutionReceipt`.
4. Retours fail-closed F2 précoces (validation, empty, etc.) → **peuvent ommettre** le receipt.
5. `collectP6ProductTurnEvidence` → `missing_receipt` honnête si absent — **ne pas fabriquer**.

| Scénario harness | DTO SendResult? | Receipt attendu sur main? | Seam appelable? | Si receipt absent |
|---|---|---|---|---|
| SMOKE cognitive F1 path | YES (si send) | YES si F1 mint logicalTurnId | YES | Ligne campagne seule via writer sécurisé |
| Fail-closed pré-F1 | partial/false | often NO | NO / missing_receipt | Campagne-only |
| Phase3 screening cells | YES when send runs | likely YES on F1 path | YES | Campagne-only + qualifier gap |

**QA HEAD (980064c0):** receipt module absent — wiring impossible sans baseline main.

Règles respectées: aucun reçu fabriqué; absence ≠ Product error inventé; absence ≠ REAL proof.

---

## 7. Analyse runId / options

Contrat: **unicité globale runId**. Ligne campagne + receipt v2 avec même runId → **DUPLICATE_RUN_ID**.

| Option | Conservation | Complexité | Réutilisation | Migration | runId | Dette | Gate Morris |
|---|---|---|---|---|---|---|---|
| **O1-A** | Campagne sécurisée si pas de receipt; stratégie complète **à définir** si receipt | Moyenne | Writer+seam existants | Harness adapt | Conflit si double write même id | Stratégie dual ouverte | **OUI** pour cas avec receipt |
| **O1-B** | Une entrée complète QA+cognitive | Haute | Schema receipt **insuffisant** aujourd'hui | Évolution contrat/schéma | Un id | Schema change | **OUI** structurante |
| **O2** | Deux lignes, deux ids liés | Moyenne | Writers existants | Lien explicite provenance | OK unicité | Contrat lien | **OUI** structurante |
| **O3** | Writer historique + receipt sur runs distincts | Basse court terme | Max | Double instrumentation | OK si ids distincts | Dette double | Wiring possible puis dette |

### Recommandation motivée (non décision finale)

**O1-A comme principe opérationnel + arbitrage Morris obligatoire pour les runs à receipt:**

1. **Préserver** ledger historique intact (aucune migration rétroactive des 76 lignes).
2. **Baseline wiring** = nouveau worktree depuis `main@aee4878d` (création = GO ultérieur).
3. Harnesses restent **DO_NOT_COMMIT** jusqu'à GO adoption; reprise locale contrôlée pour adapt writers.
4. Pour chaque nouveau run:
   - toujours conserver les **champs QA** via `appendValidatedP6CampaignLedgerRow` (kind campagne / historique contract);
   - si `cognitiveExecutionReceipt` présent: **ne pas** écrire le receipt sous le même runId sans décision Morris entre:
     - **O2** (receiptRunId lié), ou
     - **O1-B** (étendre contrat pour une entrée unifiée — non disponible tel quel), ou
     - receipt-only (rejeté: perte champs QA).
5. Tant que Morris n'a pas tranché: **WIRING NOT AUTHORIZED** pour double écriture.

**Solution la plus simple compatible avec toutes les preuves requises sans inventer de schéma:** O2 (deux identités liées) **ou** report wiring jusqu'à O1-B — **décision Morris**. O3 acceptable seulement comme dette temporaire explicite.

---

## 8. Plan de reprise sur main (non exécuté)

Baseline candidate: `aee4878d00f76cbb444977bf7ca370fb9b43fc83`

| # | Question | Réponse qualification |
|---|---|---|
| 1 | Nouveau worktree isolé? | **OUI recommandé** (GO distinct) — ne pas rebase QA dirty |
| 2 | Fichiers locaux repris? | 4 harnesses (SHA ci-dessus) + artefacts campagne **read-only** |
| 3 | Provenance permet reprise? | Reprise **locale contrôlée** oui; adoption Git **non** sans GO |
| 4 | Rester DO_NOT_COMMIT? | **OUI** par défaut |
| 5 | Tests DET versionnés? | Wrappers DET séparés possibles (GO wiring) — pas les `*.real.test.ts` |
| 6 | Dépendances sur main? | Seam/ledger/receipt **oui**; harnesses **non** |
| 7 | Changements nécessaires? | Remplacer appendFileSync → writers sécurisés; appeler seam si receipt; traiter runId |
| 8 | Périmètre wiring cycle | 1–2 smokes DET first (SMOKE-02 path) avant Phase3 REAL |
| 9 | Ordre min risque | worktree main → copy/adapt under GO → DET oracles → no REAL → ChatGPT → Git GO |
| 10 | Exit proof wiring | Product DTO+receipt (si dispo) → seam/campaign writers → readback integrity → no hist mutation |

### Manifest candidat (wiring ultérieur — pas ce cycle)

```
# À créer/adapter sous GO wiring (candidat):
projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.operationalWiring.<smoke>.d0.test.ts  # DET only
# Harnesses REAL: REMAIN LOCAL DO_NOT_COMMIT unless separate Morris GO
# lib/p6-campaign-evidence/** : REUSE (no change unless runId contract GO)
# Product/** : NO CHANGE
```

### Stop conditions reprise
- Dirty QA tracked conflicts unresolved
- Secret leakage into pack/commit
- Attempt to execute REAL
- Same-runId dual write without Morris decision
- Loss of Human QA queue linkage
- Product modification pressure

---

## 9. Fake / Real / Sécurité

| Item | Status |
|---|---|
| STATIC QUALIFICATION ONLY | YES |
| REAL harnesses executed | **NO** |
| OpenAI invoked | **NO** |
| Historical REAL requalified from filenames | **NO** |
| Level reached | **HARNESS BASELINE AND PROVENANCE QUALIFIED (local/artifact)** |
| Operational wiring | **NOT PROVEN** |
| Secrets in pack | none (no key values; env var **names** only) |
| Project code modified | **NONE** |

---

## 10. Réserves / Dette / Exit / Décisions Morris

**Réserves:** DO_NOT_COMMIT · QA baseline −20 · Human QA 19 WAITING · runId dual-write unresolved · F2 early-exit sans receipt · MONO_WRITER · REAL OPEN

**Dette:** Wiring PENDING; Git provenance harnesses NOT ESTABLISHED; runId contract open

**Exit ce cycle:** inventaire + SHA + ledger digest + F2/Option B compare + options + plan — **pas** de wiring

**Décisions Morris restantes:**
1. Autoriser création worktree `main@aee4878d`?
2. Autoriser reprise locale des 4 fichiers (toujours DO_NOT_COMMIT)?
3. Trancher **O2 vs O1-B vs defer** pour runs avec receipt?
4. GO wiring DET suivant?

**Prochain gate:** Morris wiring decision (runId + worktree) → puis GO operational wiring DET (ZERO REAL).

---

## 11. Fichiers projet modifiés

**Aucun.**

Review Pack local uniquement + handoff L3.

---

## 12. Git Truth final

- Option B WT: HEAD `b6eb7862` inchangé (hors pack)
- QA WT: harnesses/ledger/status **préservés** (aucune mutation)
- main: `aee4878d` inchangé
- Aucun commit/push/PR projet

---

## 13. Instruction ChatGPT

Lire le dernier Review Handoff distant.

Vérifier:
- vérité Git (QA 980064c0 vs main aee4878d, −20);
- provenance des 4 harnesses (UNTRACKED, SHA-256, DO_NOT_COMMIT);
- inventaire ledger (76, digest, 0 receipt v2, 0 dup runId);
- champs QA vs Option B (perte si receipt-only);
- F2 → F1 → receipt sur main;
- options O1-A/O1-B/O2/O3 et recommandation;
- plan de reprise sans exécution;
- absence de REAL / modification projet / worktree créé.

Rendre un verdict de **QUALIFICATION**.

Ne pas autoriser automatiquement: WORKTREE CREATION, HARNESS MIGRATION, WIRING, COMMIT/PUSH/PR/MERGE, REAL, PROMOTION, CLEANUP.

---

**FIN DU REVIEW PACK FULL — QA HARNESS BASELINE & PROVENANCE QUALIFICATION**
