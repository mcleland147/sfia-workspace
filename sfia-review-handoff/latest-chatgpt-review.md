# SFIA Review Pack FULL — P6 HUMAN QA EVIDENCE CAPTURE
# OPERATIONAL WIRING — POST PR #580

**Horodatage (Europe/Paris):** 2026-10-13 22:20:38 CEST
**GO Morris:** P6 HUMAN QA EVIDENCE CAPTURE OPERATIONAL WIRING — 2026-10-13
**Cycle:** 8 — Delivery / implémentation
**Profil:** CRITICAL
**CKC:** ckc:studio:delivery (+ guidance ckc:studio:qa-validation) — guidance, non-autorité
**Campagne:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Chantier:** P6-HUMAN-QA-EVIDENCE-CAPTURE-WIRING
**Entry handoff:** 89ae2a63 / blob 618f9104
**Verdict:** STOP — QA HARNESS SOURCE/BASELINE NOT QUALIFIED

---

## 1. Git Truth initial

### Worktree A — Option B (clôturé — NON MODIFIÉ)
- Path: `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b`
- Branch: `fix/p6-real-observability-option-b`
- HEAD: `b6eb7862affa6a70e9d750135b067e2c0b15015b`
- origin/main: `aee4878d00f76cbb444977bf7ca370fb9b43fc83` (PR #580 MERGED)
- Evidence lib: **YES** (PR #580)
- `__tests__/p6-campaign/`: **ABSENT**
- Dirty: Review Pack only
- Runtime :3020: INTOUCHABLE

### Worktree B — QA P6 (cible opérationnelle)
- Path: `/Users/morris/Projects/sfia-workspace`
- Branch: `qa/sfia-studio-p6-global-integrated-product-qa`
- HEAD / remote tip: `980064c05f1769f00d0ef85ef5284a899c6a0d73`
- `origin/main` ahead of QA HEAD: **20 commits** (incl. PR #580 merge `aee4878d`)
- MAIN_MERGE_IN_QA_HEAD: **NO**
- Evidence lib `lib/p6-campaign-evidence`: **ABSENT** on QA HEAD
- Product `cognitiveExecutionReceipt.ts`: **ABSENT** on QA HEAD
- Dirty tracked (hors scope wiring, non touchés): UI/Nora/docs divers
- Untracked: `projects/sfia-studio/app/__tests__/p6-campaign/` (4 fichiers)

### Handoff tip d'entrée
- Commit: `89ae2a63e4ab05c53ef7bf884e5f4b9ea50da6b0`
- Blob: `618f91041fceae2fdc568b7fcb86b4999ed3eb0e`

Aucune modification de code. Aucun reset/stash/clean/rebase. Aucun push projet.

---

## 2. Sources / Convergence

Build Doctrine / Roadmap / C1 / 33 / 35 / Nora 08 / P6 §T / CKC delivery+qa / PRR / entry handoff 89ae2a63.

**État:**
- Option B: MERGED ON MAIN — PR #580
- Receipt / Ledger / Schema / Integrity / Uniqueness / Fake parity / QA Seam: DETERMINISTICALLY PROVEN (DET, Git-integrated)
- **Operational Campaign Wiring: PENDING** (inchangé — non démontrable dans ce passage)
- REAL: NOT PROVEN · P6 GLOBAL: NOT PASSED · Runtime v3: NON ADOPTED

**Gap:** harnesses opérationnels ne consomment pas le seam canonique — et ne sont **pas** sur une baseline contenant le seam.

---

## 3. Inventaire harnesses

### Localisation
`/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/__tests__/p6-campaign/`

| File | Tracked | Ignored rule | Bytes | Product API | Writer Evidence |
|---|---|---|---|---|---|
| phase1.requal.smokes.real.test.ts | **UNTRACKED** | none (??) | 18755 | `orchestrateAssistantSend` (F2) | inline `fs.appendFileSync(.../evidence-ledger.jsonl)` |
| phase3.controlledCandidate.screening.real.test.ts | **UNTRACKED** | none | 12007 | idem | inline appendFileSync |
| phase3.routerInSitu.and.discrimination.real.test.ts | **UNTRACKED** | none | 16851 | idem | inline appendFileSync |
| smoke02.zeroExecution.real.test.ts | **UNTRACKED** | none | 8594 | idem | inline appendFileSync |

Remote QA tree / main tree: **0** fichiers `p6-campaign`.

Classification locale documentée (`.tmp-sfia-review/p6-global-integrated-qa/harness-classification.md`):
- `tracked: false`
- `commitDisposition: DO_NOT_COMMIT`
- rationale: leave untracked; temporary campaign workspace

### Artefacts campagne (non versionnés)
- Ledger: `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl` — **76 rows**
- Kinds: 74 sans `kind` (historique campagne) + 1 ROOT_CAUSE + 1 RUNTIME_REQUALIFICATION
- **0** receipt v2 (`cognitive_execution_receipt`)
- Dup runIds dans ledger actuel: **0**
- Human QA queue / batch présents (WAITING HUMAN — non inventoriés comme verdict)

### Classification des actifs

| Actif | Class |
|---|---|
| Product Receipt (main) | KEEP — présent sur main, absent QA HEAD |
| QA Collection Seam (main) | REUSE — non disponible sur QA HEAD |
| External Ledger lib (main) | REUSE — non disponible sur QA HEAD |
| Harnesses `*.real.test.ts` | **BLOCKED** — untracked, DO_NOT_COMMIT, baseline pré-#580 |
| Historical ledger JSONL | KEEP HISTORICAL — ne pas réécrire |
| Human QA Queue | REUSE — hors wiring code ce cycle |
| Product SQLite | KEEP |
| Option B WT | OUT OF SCOPE / CLOSED |

---

## 4. Matrice de raccordement (diagnostic)

| Scenario harness | Product invocation | DTO Receipt? | runId owner | Writer actuel | Seam cible | Evidence existante | Collision | Action |
|---|---|---|---|---|---|---|---|---|
| SMOKE-01/02/03 (phase1) | orchestrateAssistantSend + OPENAI_API_KEY | **NO on QA baseline** (receipt module absent) | harness (`P6-SMOKE-*`) | appendFileSync campaign row | collectP6ProductTurnEvidence | rows historiques sans kind | **OUI** si même runId + receipt v2 | **BLOCKED** |
| SMOKE-02 zero exec | idem | NO | harness | appendFileSync | seam | historique | OUI | **BLOCKED** |
| PHASE3 CC / RIS / DISC | idem REAL | NO | harness | appendFileSync | seam | historique | OUI | **BLOCKED** |

**Product API gap additionnel:** harnesses appellent `orchestrateAssistantSend` (F2), alors que le seam Option B a été prouvé DET via `orchestrateProjectAssistantTurn` / DTO `cognitiveExecutionReceipt`. Même après rebase sur main, la présence du receipt sur le chemin F2 doit être **requalifiée** (sans modifier Product hors GO).

---

## 5. Contrat runId / collision

P6 §T + ledger PR #580: **unique runId**; writers publics refusent les doublons; pas de réécriture FAILED.

Risque structurant:
1. Harness écrit déjà une ligne campagne (kind absent / campaign run) pour runId X.
2. Seam écrit ensuite un receipt v2 pour le **même** runId X → `DUPLICATE_RUN_ID` / integrity fail.

Alternatives **non autorisées** sans GO Morris:
- désactiver unicité;
- écraser historique;
- inventer un second namespace d'identité sans contrat;
- `duplicate_skipped` sur contenus différents;
- deuxième persistence.

Options pour décision Morris (aucune choisie ici):

| Option | Description | Impact |
|---|---|---|
| O1 | Baseline neuve = worktree depuis `main@aee4878d` + import contrôlé des harnesses (GO provenance) + remplacer writer campagne par seam **ou** cesser l'append campagne au profit du receipt pour scénarios cognitifs | Compatible unicité; migration harness explicite |
| O2 | Coexistence contractuelle campagne-row + receipt sous **deux** identités liées (ex. runId vs receiptRunId) — **évolution de contrat** | Requiert GO Morris structurante |
| O3 | Garder append campagne historique; receipt uniquement sur nouveaux runIds post-wiring | Pas de collision; double instrumentation partielle |

**Ce cycle:** aucune option implémentée — STOP avant écriture.

---

## 6. Pourquoi STOP (conditions du GO)

1. **Harnesses introuvables sur Git** (untracked / absents remote) — provenance non versionnée.
2. **Baseline QA obsolète** — 20 commits derrière main; PR #580 non contenue; pas de seam/receipt Product.
3. Raccordement exigerait **migration de sources locales non versionnées** + **changement de baseline** non autorisé dans ce GO.
4. Interdit: rebase/cherry-pick auto, copie incontrôlée, modification Option B, exécution `*.real.test.ts`, REAL/OpenAI.
5. Harness classification locale: **DO_NOT_COMMIT**.

→ **STOP — QA HARNESS SOURCE/BASELINE NOT QUALIFIED**

---

## 7. Implémentation

**NOT EXECUTED** — aucune modification de harness, aucun test W01–W20, aucun typecheck/build de wiring.

Fichiers créés/modifiés (projet): **aucun**.

Manifest exact avant écriture: **N/A** (STOP).

---

## 8. Chemin de résolution le plus simple (décision Morris)

**Recommandation (non exécutée):**

1. **Nouveau worktree** depuis `origin/main` @ `aee4878d` (contient PR #580).
2. GO Morris distinct pour **qualification/provenance** des 4 harnesses untracked (copier/adopter sous contrôle, ou re-créer DET wrappers).
3. Adapter writers: après Product DTO, appeler `collectP6ProductTurnEvidence`; traiter collision runId via option Morris (O1/O2/O3).
4. Oracles DET W01–W20 sur ce worktree — **ZERO REAL**.
5. Puis GO Git Integration / PR distinct.

Interdit sans GO: commit des harnesses untracked « en l'état », rebase silencieux de la branche QA, REAL.

---

## 9. Tests / Validations / PRR / Sécurité

| Item | Result |
|---|---|
| Tests wiring DET | **NOT EXECUTED** |
| Tests REAL / OpenAI | **NOT EXECUTED** (interdit) |
| typecheck/lint/build wiring | **NOT EXECUTED** |
| PRR | **NOT RE-RUN** (pas de changement code) — main déjà conforme post-#580 |
| Secrets | aucun secret introduit; harnesses lisent `.env.local` / OPENAI_API_KEY — **non exécutés** |
| Historique ledger | préservé (aucune écriture) |
| Runtime :3020 | untouched |
| Push/PR/merge projet | **NONE** |

---

## 10. Fake / Real

| Claim | Status |
|---|---|
| Option B DET Git-integrated | YES (préalable) |
| Operational Wiring DET at harness scope | **NOT PROVEN** — STOP |
| REAL BOUNDARY / E2E REAL / P6 GLOBAL | **NOT CLAIMED** |
| FULL HARNESS COVERAGE | **NOT CLAIMED** |

---

## 11. Réserves / Dette / Exit / Gates

**Réserves:** Wiring PENDING · harnesses untracked · baseline QA pré-#580 · chemin F2 vs Product receipt à requalifier · MONO_WRITER · REAL OPEN · Human QA WAITING non simulé

**Dette:** P6-HUMAN-QA-EVIDENCE-CAPTURE-WIRING OPEN

**Exit proof ce passage:** diagnostic Git Truth + inventaire + matrice + options Morris — **pas** de wiring opérationnel

**Décisions Morris requises:**
1. Autoriser worktree baseline `main@aee4878d` pour wiring.
2. Qualifier provenance/adoption des 4 harnesses untracked.
3. Trancher collision runId (O1/O2/O3).
4. GO Delivery/wiring suivant après qualification.

**Prochain gate:** GO Morris — QA harness baseline + provenance qualification (puis wiring DET).

---

## 12. Diffs

Aucun diff projet. Aucun fichier créé.

---

## 13. Git Truth final

- Worktree courant (initial): Option B @ `b6eb7862` — inchangé hors Review Pack
- QA WT: inchangé (aucun edit harness)
- origin/main: `aee4878d` — inchangé
- Branche source Option B: conservée
- Aucun cleanup

---

## 14. Instruction ChatGPT

Lire le Review Handoff distant.

Vérifier:
- vérité Git des worktrees (QA @ 980064c0 vs main @ aee4878d);
- harnesses untracked / DO_NOT_COMMIT;
- absence de lib evidence / receipt sur QA HEAD;
- absence de perte historique (aucune écriture);
- conformité STOP du GO;
- absence de REAL / push / PR / merge / nouvelle architecture;
- options Morris O1–O3;
- réserves.

Rendre un verdict **DELIVERY / PR READINESS** au périmètre réellement démontré (= diagnostic STOP, non wiring complete).

Ne pas autoriser automatiquement: COMMIT PROJET, PUSH, PR, MERGE, REAL, PROMOTION, CLEANUP.

---

**FIN DU REVIEW PACK FULL — STOP QA HARNESS SOURCE/BASELINE NOT QUALIFIED**
