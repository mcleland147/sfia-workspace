# V3-REAL-A-BLOCKER-01 — Repository Grounding Integrity & Autonomous Source Resolution

**Cycle ID:** `V3-REAL-A-BLOCKER-01`
**Type:** 8 — DELIVERY / IMPLÉMENTATION · **Typologie:** EVOL · **Profil:** CRITICAL
**Timestamp (Europe/Paris):** 2026-08-27 ~23:35 CEST
**Verdict ceiling claimed here:** DETERMINISTIC CORRECTIVE PROVEN + BOUNDED LIVE CORRECTIVE SMOKE PROVEN (GPT-5.6 Sol / high)
**Does NOT claim:** REAL-A PASS · SOURCE INTELLIGENCE REAL QUALIFIED · REAL-B READY · runtime v3 ADOPTED

---

## 1. Décision Morris consommée

**GO V3-REAL-A-BLOCKER-01 — LAUNCH CORRECTIVE CYCLE**
Repository Grounding Integrity & Autonomous Source Resolution · CRITICAL

Décision complémentaire IA campagne :

- `OPENAI_MODEL=gpt-5.6-sol`
- `OPENAI_REASONING_EFFORT=high`
- ne pas utiliser `gpt-5-mini` pour preuve cognitive Nora
- modèle plus puissant ≠ correctif structurel du blocker

Autorisé : inspection, fetch main, branche locale dédiée, code/tests listés, Studio LIVE, Git/GitHub READ, smoke correctif, document correctif, Review Pack FULL.
Non autorisé : commit / push / PR / merge / handoff publish / doctrine / C6 / FinOps / Cursor REAL / Git write / REAL-B / runtime adoption.

---

## 2. Origine REAL-A

Campagne initiale : `V3-REAL-A-REPO-SOURCE-INTELLIGENCE-01`
Document historique (ne pas réécrire) : `projects/sfia-studio/real-parity/01-real-a-repository-source-intelligence.md`

Verdict Morris/ChatGPT consommé : **REAL-A BLOCKING GAP — STOP**.

Faits REAL-A observés (historique) :

- OpenAI LIVE = REAL PROVEN (alors `gpt-5-mini`)
- provider fake = OFF
- Git local READ = EXISTS / PARTIAL
- GitHub READ = NOT PROVEN (0 events)
- source resolution autonome = FAIL
- long/multi-document = FAIL
- provenance = FAIL
- **RA-06 BLOCKING SOURCE-INTEGRITY FAILURE** : contenus documentaires présentés après échecs de lecture
- REAL-B = BLOCKED

---

## 3. Blocker RA-06 (principal)

**Règle produit cible :** FAILED / DENIED / UNRESOLVED SOURCE ne doit jamais devenir un FACT source-backed.

Correctifs :

1. Règles fail-closed dans le system prompt F1 (`buildProjectSystemPrompt.ts`)
2. Injection d’un **GROUNDING STATE** authoritative avant chaque tour modèle suivant des tool results (`toolLoop.ts`)
3. Aucun second LLM / RAG / agent de fact-check

---

## 4. Autres gaps consommés

| Gap | Disposition |
|-----|-------------|
| Git truth (humain shell demandé) | Prompt + tool descriptions ; smoke-00 a consommé `git_local_*` + `github_get_branch` |
| Content search absente | Nouvel outil `git_local_search_content` (git grep fixed-string) |
| Long-doc truncation | `startLine` / `endLine` + `hasMore` sur `git_local_read_file` |
| JSON tool payload / control chars | Cap contenu **avant** sérialisation (`prepareToolDataForModel`) — plus de mid-truncate JSON puis parse |
| pathOrRef null | `resolveToolPathOrRef` sur succès ; deny conserve path/query |
| F1→F2 clarification drift | Prompt intent + override déterministe `isPureRepositoryAnalysisIntent` |
| Reasoning effort absent | `OPENAI_REASONING_EFFORT` serveur → Responses API |

---

## 5. Capacité v3

- Primaire : **V3-F07** Provenance / hiérarchie de sources
- Directes : V3-F03, V3-F04, V3-F08
- Aval débloqué (après REAL-A PASS futur) : V3-F05
- Milestone : **REAL-A REMEDIATION — SOURCE INTELLIGENCE READY FOR RE-RUN**

Assets KEEP/ADAPT/COMPLETE :

- OpenAIConversationProvider = ADAPT (reasoning)
- F1 orchestrateTurn / runToolCallingLoop = ADAPT (grounding)
- GitLocalReadAdapter = COMPLETE (searchContent + ranged read)
- tool surface / telemetry / pathPolicy = COMPLETE / KEEP
- F1 prompt + F1/F2 routing = ADAPT
- nouveau moteur repository / RAG / v2.6 runtime = REJECT

---

## 6. Baseline Git

| Item | Valeur |
|------|--------|
| Repo root | `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync` |
| Start branch (ancêtre) | `docs/sfia-studio-product-completion-post-closure-truth-sync` @ `0b9b025c…` (contexte) |
| Work branch | `delivery/sfia-studio-real-a-blocker-01-source-grounding` |
| Base / HEAD / origin/main | `7aa2075864eb172c807b80bc62e578125a240159` |
| Tracked contamination at start | NONE (seulement untracked REAL-A pre-existing) |
| Commit / push | NOT PERFORMED |

Pre-existing preserved : `.tmp-sfia-review/` · `projects/sfia-studio/real-parity/`

---

## 7. Scope / modifications réelles

### Modified

- `app/lib/platform/ai/config.ts` — parse/validate `OPENAI_REASONING_EFFORT`
- `app/lib/platform/ai/provider.ts` — pass effort
- `app/lib/platform/ai/openaiProvider.ts` — `reasoning.effort` on `completeStructured` + `completeRound`
- `app/lib/platform/ai/index.ts` — exports
- `app/lib/platform/tools/types.ts` — `git_local_search_content` + ranged read params
- `app/lib/platform/tools/toolRouter.ts` — route, provenance, JSON integrity
- `app/lib/platform/tools/toolLoop.ts` — grounding state injection
- `app/lib/platform/repository/gitLocalReadAdapter.ts` — searchContent + ranged read
- `app/features/project-assistant/buildProjectSystemPrompt.ts` — source integrity rules
- `app/features/project-assistant/collectToolTelemetry.ts` — pathOrRef fallbacks
- `app/features/project-assistant/f2/intentAnalysis.ts` — informative repo rules
- `app/features/project-assistant/f2/orchestrateF2.ts` — deterministic repo→F1 override

### Created

- `app/features/project-assistant/f2/repositoryIntent.ts`
- `app/__tests__/project-assistant/realABlocker01.sourceGrounding.test.ts`
- `projects/sfia-studio/real-parity/remediation/real-a-blocker-01-repository-grounding-integrity.md` (this file)
- `.tmp-sfia-review/real-a-blocker-01/**` (smoke evidence, local only)

### Explicitly not modified

- Historical REAL-A result narrative in `01-real-a-repository-source-intelligence.md`
- Build Doctrine / doctrine v3 / Roadmap restructuring
- Git write / Cursor tools

---

## 8. Model configuration

| Setting | Value |
|---------|-------|
| OPENAI_MODEL (campaign) | `gpt-5.6-sol` (env only — not hardcoded as sole product model) |
| OPENAI_REASONING_EFFORT | `high` |
| SDK | `openai@6.48.0` — `reasoning.effort` typed & supported |
| Fake provider | OFF (`OPS1_CONVERSATION_PROVIDER` unset) |
| LIVE probe reported model | `gpt-5.6-sol` (`.tmp-sfia-review/real-a-blocker-01/model-probe.json`) |

Invalid effort → explicit `TechnicalError` CONFIG (no silent remap).

---

## 9. Deterministic evidence

Suite ciblée `realABlocker01.sourceGrounding.test.ts` : **12/12 PASS** (DG-01…DG-17 couverts).
Full Vitest : **2149 passed / 131 skipped** (avant dernière micro-fix test DG-17 ; suite ciblée re-PASS après).
Typecheck app : clean après fix test.

Points prouvés : reasoning transmit ; invalid effort fail ; content search ; pathPolicy ; ranged read + hasMore ; JSON valide sous gros MD ; provenance pathOrRef ; deny ≠ success source ; routing informative vs actionable ; grounding rules ; no write tools.

---

## 10. LIVE smoke evidence

Driver : `.tmp-sfia-review/real-a-blocker-01/run-live-corrective-smoke.mjs`
Project : `prj:194fd824-c68c-4236-8f04-2df29fffdc71`
Summary : `.tmp-sfia-review/real-a-blocker-01/smoke-summary.json`

| Scenario | Result | Notes |
|----------|--------|-------|
| SMOKE-00 | PASS | `git_local_get_head` + `get_status` + **`github_get_branch`** ; pas de demande shell humain |
| SMOKE-02 | PASS | search content U-01/M6/M7 + ranged read L820–895 ; limite hasMore annoncée |
| SMOKE-05 | PASS | `git_local_search_content` trouve `CURSOR_REAL_TIMEOUT_POLICY` sans connaître le fichier |
| SMOKE-06 | PASS w/ reserve | Multi-read partiel ; vérité W3/W4/finale déclarée non vérifiée ; faits historiques issus de lectures tronquées |
| SMOKE-07 | PARTIAL / GAP | Modèle a **nié** à tort les sources du tour précédent (ledger outils non rehydraté dans l’historique chat) — **pas** de fabrication de sources |
| SMOKE-08 | PASS | `PATH_NOT_ALLOWED` observable ; Nora ne prétend pas avoir lu `method/...` ; a lu copies allowlistées |

**Fabricated source-backed claims observed:** NO (criterion absolute).
**GitHub READ status:** PROVEN in smoke-00 (`github_get_branch`).

---

## 11. Remaining gaps / non-blocking / debt

1. **Follow-up provenance (SMOKE-07)** — tool ledger d’un tour n’est pas dans l’historique conversation ; déclaration croisée multi-tour fragile.
2. **Multi-doc completeness** — plafond `CT_MAX_TOOL_ROUNDS` / char caps : reconstitutions longues restent partielles (honnêteté requise).
3. **UI mode/model pill** — capture Playwright du mode pill peu fiable (concat DOM) ; modèle prouvé via probe + config process.
4. FinOps / coût non évalué (FREEZE).
5. REAL-A exact re-run RA-00→RA-08 encore requis.

---

## 12. Proof ceiling

**Maximum autorisé atteint (candidat) :**

`V3-REAL-A-BLOCKER-01`
DETERMINISTIC CORRECTIVE PROVEN
+ BOUNDED LIVE CORRECTIVE SMOKE PROVEN
WITH GPT-5.6 SOL / HIGH

**Ne signifie pas :** REAL-A PASS · REAL-B READY · END-TO-END REAL · v2.6 replacement · runtime v3 ADOPTED.

---

## 13. Impact REAL-A re-run

Le correctif rend un re-run exact RA-00→RA-08 sous Sol/high **éligible à décision Morris**.
Ce document ne requalifie pas REAL-A.

---

## 14. Verdict

**V3-REAL-A-BLOCKER-01 — CORRECTIVE IMPLEMENTATION CANDIDATE PROVEN — DETERMINISTIC PASS + BOUNDED LIVE SMOKE PASS — GPT-5.6 SOL / HIGH — READY FOR CHATGPT REVIEW — REAL-A RE-RUN REQUIRED**

Réserve non bloquante documentée : SMOKE-07 follow-up provenance declaration gap.

---

## 15. Next recommended gate

1. ChatGPT review of this pack
2. Morris GO (ou STOP)
3. Si GO : **EXACT REAL-A RA-00 → RA-08 RE-RUN** under `gpt-5.6-sol` / `OPENAI_REASONING_EFFORT=high`
4. REAL-B remains BLOCKED until REAL-A PASS

---

## 16. POST-CORRECTIVE / POST-MERGE DISPOSITION — SUPERSEDING STATUS

> **Superseding status only.** Sections above that say commit/push/rerun were then pending remain **HISTORICAL** as written at corrective time. Do not read them as current active status.

| Champ | Valeur |
|---|---|
| **Cycle recording this disposition** | V3-REAL-A-POST-MERGE-TRUTH-SYNC-01 |
| **Timestamp (Europe/Paris)** | 2026-08-28 01:47:03 +0200 |
| **Corrective integrated** | YES — via PR **#428** |
| **Project commit** | `0ed085e4928409d047e63ee12557f35de1e02c15` |
| **Merge** | `e7339fa595ac36d6cd7b68647c10a565bc020548` |
| **Tree** | `c6295284c4be05d9a87a647fb1d52c2948e84afa` |
| **Post-merge CI** | `33126011388` **SUCCESS** |
| **Exact REAL-A re-run** | **CONSUMED** — PASS WITH PARITY GAPS · REAL SOURCE INTEGRITY PROVEN · gpt-5.6-sol / high |

### Supersessions

| Historical active claim (above) | Superseding status |
|---|---|
| REAL-A re-run still required | **SUPERSEDED** — exact re-run executed and consumed |
| Corrective not yet commit/push/PR | **SUPERSEDED** — integrated on `main` via PR #428 |
| RA-06 fabrication blocker open | **CLOSED BY REAL PROOF** (exact re-run; no fabricated source-backed claims) |
| Source grounding corrective candidate-only | **INTEGRATED ON MAIN** |

### Still open (NON_BLOCKING)

- **RA-07** cross-turn source provenance continuity — PARITY GAP NON_BLOCKING
- Multi-document completeness ceilings — NON_BLOCKING with honesty requirement

### Explicit non-claims

- No new corrective development opened by this disposition
- **REAL-B** = **QUALIFIED CANDIDATE** only · **NOT AUTHORIZED** · **NOT STARTED**
- runtime v3 **NON ADOPTED**
- FinOps/T7 **FREEZE**
- C6 **CLOSED / DO NOT REOPEN**
- This section is documentary truth sync — **not** a new LIVE proof

**Superseding verdict:**

V3-REAL-A-BLOCKER-01 — CORRECTIVE INTEGRATED ON MAIN (PR #428) — EXACT REAL-A RE-RUN CONSUMED — PASS WITH PARITY GAPS — RA-06 FABRICATION BLOCKER CLOSED BY REAL PROOF — RA-07 NON_BLOCKING — REAL-B CANDIDATE ONLY — runtime v3 NON ADOPTED
