# SFIA Review Pack FULL — P6 HUMAN QA EVIDENCE CAPTURE
# O2 BASELINE & CONTROLLED HARNESS PREPARATION

**Horodatage (Europe/Paris):** 2026-10-13 23:56:56 CEST
**GO Morris:** P6 O2 — TWO LINKED EVIDENCE ENTRIES / SINGLE P6 LEDGER — BASELINE & CONTROLLED HARNESS PREPARATION — 2026-10-13
**Décision Morris consommée:** O2 — TWO LINKED EVIDENCE ENTRIES / SINGLE P6 LEDGER (principe)
**Cycle:** 8 — Delivery / préparation bornée (sans modification de code)
**Sous-cycle:** P6-O2-BASELINE-CONTROLLED-PREPARATION
**Profil:** CRITICAL
**CKC:** ckc:studio:delivery (+ guidance ckc:studio:qa-validation)
**Campagne:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Chantier:** P6-HUMAN-QA-EVIDENCE-CAPTURE-WIRING
**Entry handoff:** 07c4016d / blob 20f25a6b
**Verdict:** P6 O2 BASELINE PREPARED / HISTORICAL LEDGER INTEGRITY BLOCKER / WIRING NOT AUTHORIZED

**Portée:** préparation worktree + quarantaine sources + diagnostic ledger + contrat O2 candidat.
**NON FAIT:** wiring, schéma, validateurs, writers, REAL, commit/push/PR projet.

---

## 1. Git Truth initial

### Option B (worktree de revue)
- Path: `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b`
- Branch: `fix/p6-real-observability-option-b`
- HEAD: `b6eb7862affa6a70e9d750135b067e2c0b15015b`
- Dirty: Review Pack only
- Non modifié (hors pack)

### QA historique
- Path: `/Users/morris/Projects/sfia-workspace`
- Branch: `qa/sfia-studio-p6-global-integrated-product-qa`
- HEAD: `980064c05f1769f00d0ef85ef5284a899c6a0d73`
- Dirty tracked préservé (non touché)
- Harnesses UNTRACKED préservés

### main
- `origin/main`: `aee4878d00f76cbb444977bf7ca370fb9b43fc83` — **MAIN_OK** (pas de drift)

### Handoff entrée
- `07c4016d17fa0b6a36dbd9c7c8fccdd0edf05522` / blob `20f25a6b6fa6d763352062e0a7f8f476185cbc15`

Runtime :3020 INTOUCHABLE.

---

## 2. Sources / Convergence

Doctrine / Roadmap / C1 / 33 / 35 / Nora 08 / P6 §S+§T / template / routing / PRR / entry qualification handoff.

**État:** Option B INTEGRATED · Seam DET · Wiring PENDING · Harnesses LOCAL/ARTIFACT QUALIFIED · O2 PRINCIPLE DECIDED · O2 technical linkage NOT IMPLEMENTED · REAL OPEN · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED.

**Exit ce cycle:** worktree isolé + sources quarantined byte-identical + ledger hash inchangé + blocker 75/76 diagnostiqué + contrat O2 candidat.

---

## 3. Worktree créé

| Item | Value |
|---|---|
| Path | `/Users/morris/Projects/sfia-workspace-p6-evidence-o2` |
| Method | `git worktree add --detach <path> aee4878d…` |
| HEAD | `aee4878d00f76cbb444977bf7ca370fb9b43fc83` |
| Branch | **DETACHED** (aucune branche projet créée) |
| Parents | `bd3f440c` + `b6eb7862` (merge PR #580) |
| Status après préparation | **clean** (quarantaine ignorée) |
| QA Collection Seam | PRESENT |
| CognitiveExecutionReceipt | PRESENT |
| Evidence ledger lib | PRESENT |
| `__tests__/p6-campaign/` | ABSENT (volontaire) |

Option B et QA WT: **non modifiés** (hors Review Pack Option B).

---

## 4. Harnesses source → quarantaine

### Source (QA WT) — hashes attendus / obtenus
| File | SHA-256 | Status |
|---|---|---|
| phase1.requal.smokes.real.test.ts | `6f3a708c6270b8e52a197a264c8aa59d26b1bff12b2af00aeb07a3438ef6b172` | HASH_OK · regular file · not symlink |
| phase3.controlledCandidate.screening.real.test.ts | `6f3dd942b29797cbdd35d98f77368d54eb3762027dd216f229b5c6895f693933` | HASH_OK |
| phase3.routerInSitu.and.discrimination.real.test.ts | `9bdce10a0642c3bdf71dbe64701a693dc315f7fa55ecb2bb7c80fc1c6a548759` | HASH_OK |
| smoke02.zeroExecution.real.test.ts | `9491d8c8b69c4e51bef6794184c1904ebae9b147cca1e668c7ae50e7468c514b` | HASH_OK |

HARNESS_DRIFT=0. Classification source: **DO_NOT_COMMIT** (harness-classification.md).

### Quarantaine (O2 WT)
- Path: `.tmp-sfia-review/p6-o2-source-harnesses/`
- Ignore proof: `.gitignore:21:.tmp-sfia-review/**` → `QUARANTINE_IGNORED=YES`
- Copie: 4 fichiers uniquement (`cp -p`)
- COPY_OK ×4 · byte-for-byte `cmp` OK · SHA identiques
- **NON** placés sous `__tests__/`
- **NON** exécutés
- Classification cible: **LOCAL QUARANTINED SOURCE / NOT TRACKED / NOT ADOPTED / NOT EXECUTABLE IN THIS CYCLE**

Exclusions respectées: pas de `.env.local`, credentials, ledger historique, arborescence QA complète.

Source QA: 4 fichiers toujours présents, hashes inchangés.

---

## 5. Ledger historique (immuable — lecture seule)

| Property | Value |
|---|---|
| Path | QA WT `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl` |
| SHA-256 | `704531851d7102032c832d4d123abbddfc45d0b41d6afb6548c4a1f0e1f4b827` (inchangé) |
| Bytes / lines | 34863 / 76 |
| Valid JSON | 76 / 0 invalid |
| Kinds | 74 (no-kind) · 1 ROOT_CAUSE_INVESTIGATION_READONLY · 1 RUNTIME_REQUALIFICATION |
| Receipt v2 | 0 |
| Dup runIds (non-empty) | 0 |
| Unique nonempty runIds | **75** |
| Human QA WAITING | 19 (non muté) |

### Diagnostic 75/76 (POINT CRITIQUE)

**Cause exacte:** ligne **#75** — kind `ROOT_CAUSE_INVESTIGATION_READONLY`, scenarioId `HQA-01-GUIDANCE-ONLY`, campaignId présent — **champ `runId` ABSENT**.

Ligne #76 `RUNTIME_REQUALIFICATION` a un runId non vide.

Math: 76 rows − 1 missing runId = 75 unique nonempty runIds.

### Compatibilité contrat lecture Option B (simulation statique)

`classifyLedgerRowForRead` / reader: missing `runId` → `invalid_structure` → **integrityPass=false** (DEGRADED) si ce fichier est relu via le reader intégré.

**Effet sur append futur:** un ledger DEGRADED bloque les captures (`integrity_blocks_capture`) sous le contrat Option B actuel.

**Aucune réparation effectuée** (interdit). Archive immuable pour ce cycle.

→ **HISTORICAL LEDGER INTEGRITY BLOCKER** avant wiring sur ce fichier.

Options futures (Morris, hors cycle): ledger de travail neuf pour nouveaux runs (archive historique read-only séparée) · GO réparation non destructive · ne pas réécrire ligne 75 sans GO.

---

## 6. Compatibilité Product F2 (baseline main — statique)

Sur `aee4878d`:
- `orchestrateAssistantSend` → flux informatif appelle `orchestrateProjectAssistantTurn` puis `return { ...f1 }`
- F1 attache `cognitiveExecutionReceipt` quand logicalTurnId minté
- Fail-closed pré-F1: souvent **sans** receipt → seam → `missing_receipt`
- Futur wiring: dual write **seulement** si receipt présent; sinon QA entry seule

Aucun appel provider. Product non modifié.

---

## 7. Contrat O2 candidat (PROPOSITION — NOT IMPLEMENTED)

### Principe Morris (consommé)
Deux entrées liées · un seul ledger P6 · runIds uniques · historiques intacts · pas de 2e persistence.

### Writers à réutiliser (sans modification ce cycle)
- QA: `appendValidatedP6CampaignLedgerRow`
- Cognitive: `collectP6ProductTurnEvidence` / `captureCognitiveExecutionReceiptToP6Ledger`

### Mini-contrat technique candidat

| Item | Proposition candidate | Écart schéma actuel |
|---|---|---|
| A. Identité run QA | `runId` campagne (= identité scénario/run harness) | OK existant |
| B. Identité reçu | **nouveau** `runId` cognitif distinct (harness-owned, ≠ logicalTurnId, ≠ QA runId) | OK si distinct; **lien** non encore dans schema |
| C. Relation | Lien explicite stable: candidat `linkedQaRunId` sur receipt **ou** `linkedCognitiveRunId` sur campagne **ou** les deux | **ABSENT** du schéma/validators actuels — **NON inventé comme disponible** |
| D. Autorité | Harness = owner des ids campagne + lien; Product = owner logicalTurnId/receipt content; Product **ne connaît pas** ids QA | Aligné doctrine |
| E. Cardinalité | 1 QA run : 0..N receipts (retries/turns) — défaut wiring v1: 0..1 | À figer par Morris |
| F. Sans reçu | QA entry seule; pas de fabrication receipt | OK seam missing_receipt |
| G. Retry | Nouveau couple d'ids (ou nouveau cognitive runId); pas de rewrite FAILED | Aligné §T |
| H. Collision | Refus DUPLICATE_RUN_ID inchangé; jamais même runId pour QA+cognitive | OK |
| I. Réouverture | `findP6EvidenceLedgerRowsByRunId` + résolution via champ lien (après impl) | Recherche par lien **pas encore API** |
| J. Intégrité lien | Validator: si lien présent, cible doit exister / même campaign+scenario | **À ajouter** sous GO schema |
| K. Historique | Aucune migration rétroactive des 76 lignes; ligne 75 blocker pour **même fichier** | Archive immutable |
| L. Coût schéma | Minimal: 1–2 champs lien optionnels + règles validator; pas de 2e ledger | GO schema distinct |
| M. Tests négatifs | dual same runId reject; lien orphelin reject; missing receipt QA-only; hist immutable | Futur DET |
| N. Dette | Quarantaine locale; blocker ledger hist; O2 linkage unimplemented | |
| O. Gates Morris | (1) disposition ledger hist (2) champ(s) lien exacts (3) GO wiring DET | |

### Ce qui N'EST PAS déclaré
- O2 IMPLEMENTED
- schema modifié
- writers modifiés
- WIRING PROVEN

---

## 8. Sécurité / Fake-Real

| Item | Status |
|---|---|
| Secrets in pack | none (env **names** only in prior analysis) |
| .env.local copied | **NO** |
| REAL / OpenAI | **NOT EXECUTED** |
| Project code modified | **NONE** |
| Quarantaine gitignored | YES |
| Level | O2 PRINCIPLE DECIDED / BASELINE AND SOURCE PREPARED |
| Wiring / REAL boundary / P6 GLOBAL / v3 | **NOT CLAIMED** |

---

## 9. Réserves / Dette / Exit / Gates

**Réserves:** DO_NOT_COMMIT · quarantaine temporaire · line 75 missing runId · O2 link fields not in schema · Human QA WAITING · MONO_WRITER · REAL OPEN

**Dette:** Wiring PENDING · O2 linkage semantics PENDING · historical ledger blocker · Git provenance harnesses NOT ESTABLISHED

**Exit proof ce cycle:** worktree `…-p6-evidence-o2` @ aee4878d · 4 sources quarantined hash-equal · ledger SHA unchanged · 75/76 explained · O2 candidate documented

**Décisions Morris restantes:**
1. Disposition du ledger historique (nouveau ledger de travail vs réparation sous GO vs archive-only path)
2. Champs de liaison O2 exacts + cardinalité 0..1 vs 0..N
3. GO wiring DET (ZERO REAL) après (1)+(2)

**Prochain gate:** ChatGPT O2 contract review → Morris schema/ledger disposition → wiring DET GO

---

## 10. Fichiers projet Git modifiés

**Aucun** (pas de tracked change dans O2/QA/Option B hors Review Pack local Option B).

Créations locales autorisées:
- worktree `sfia-workspace-p6-evidence-o2`
- quarantaine ignorée `.tmp-sfia-review/p6-o2-source-harnesses/*`
- Review Pack / handoff

---

## 11. Git Truth final

| WT | HEAD | Note |
|---|---|---|
| Option B | b6eb7862 | pack dirty only |
| QA | 980064c0 | sources intactes |
| O2 | aee4878d detached | clean; quarantine ignored |
| main | aee4878d | unchanged |

Aucun commit/push/PR/merge projet. Aucun cleanup.

---

## 12. Instruction ChatGPT

Lire le dernier Review Handoff distant.

Vérifier:
- main @ aee4878d;
- worktree detached non destructif;
- hashes source=copie;
- DO_NOT_COMMIT / quarantaine ignorée;
- aucun code projet modifié;
- ledger hash inchangé;
- diagnostic line 75 missing runId (75/76);
- O2 contract proposal vs writers existants;
- absence de second stockage / REAL / schema change;
- gates Morris restants.

Rendre un verdict de **préparation O2**.

Ne pas autoriser automatiquement: WIRING, SCHEMA MODIFICATION, COMMIT/PUSH/PR/MERGE, REAL, CLEANUP, RUNTIME V3 PROMOTION.

---

**FIN DU REVIEW PACK FULL — O2 BASELINE & CONTROLLED PREPARATION**
