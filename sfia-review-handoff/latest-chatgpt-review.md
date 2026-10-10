# Review Pack FULL — P6-HQA-02 / REC-01 — Controlled Runtime Restart + HQA-01 Re-execution Prep

**Horodatage :** 2026-10-10T22:46:46Z
**GO Morris :** "ok go" — controlled runtime restart + HQA-01 Human QA REAL prep
**Cycle :** 9 — QA / validation — Critical
**Campaign :** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Lot :** P6-HQA-02 / REC-01
**runId :** HQA-01-REC01-REQUAL-20261010T224411Z
**Prior handoff (preserved as history) :** `4a999c2c` — HQA-01 read-only root cause (INVALID FOR REC-01 EVALUATION — HISTORICAL RUNTIME)

---

## 1. Git Truth Check

| Check | Result |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| Branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` (PR #576 merge / `origin/main`) |
| REC-01 qualify file | PRESENT |
| Prospective filter in `orchestrateTurn.ts` | PRESENT |
| Product source diffs | NONE (only local QA evidence / gitignored runtime files) |

Baseline: **QA PRODUCT BASELINE QUALIFIED.**

---

## 2. Convergence

- Build Doctrine VALIDATED (reference)
- Roadmap ACTIVE
- C1 VALIDATED
- REC-01 INTEGRATED ON MAIN
- P6 IN PROGRESS — GLOBAL PASS NO
- Runtime v3 NON ADOPTED
- No Convergence / doctrine / Product Delivery mutation

---

## 3. Ancien runtime (confirmé puis arrêté)

| Field | Value |
|---|---|
| URL | `http://localhost:3020` (listen `[::1]:3020`) |
| PID | 30453 (`next-server`) / parent 30449 (`next dev`) |
| Owner | morris |
| CWD | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app` |
| Branch / HEAD | `qa/sfia-studio-p6-global-integrated-product-qa` / `980064c0…` |
| REC-01 | ABSENT |
| Stop | SIGTERM gracieux — STOPPED; port freed |
| kill -9 | NOT USED |

Ownership: attributable (URL→listener→PID→CWD→HEAD). Not ambiguous.

---

## 4. Nouveau runtime REC-01

| Field | Value |
|---|---|
| URL | `http://localhost:3020` |
| PID | **81318** (`next-server` v15.5.20) / parent 81311 |
| CWD | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/app` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| REC-01 | PRESENT in served tree |
| Health | `/login` 200; `/` 307 → NO_SESSION; `/api/auth/get-session` 200 |
| Note | A concurrent start from the same QA WT occupied 3020 first; a second start attempt logged `EADDRINUSE` and was abandoned. Served process is the correct REC-01 instance. |

---

## 5. Préservation historique

- Online sqlite `.backup` before stop + post-stop file copy under `runtime-requal/HQA-01-REC01-REQUAL-20261010T224411Z/`
- Historical originals untouched
- 9th WR still present: `epi:acw:3879e9bc68c83f60d578`
- Prior diagnostic proofs retained
- First HQA-01 remains **INVALID FOR REC-01 EVALUATION — HISTORICAL RUNTIME** (not retroactively PASS)

---

## 6. Isolation QA (Option B)

Fresh isolated DBs (not yet materialized until Product use):

- Product: `…/.sfia-exec/hqa01-rec01-requal/product/oa-product.sqlite`
- Session: `…/.sfia-exec/hqa01-rec01-requal/product/nora-session.sqlite`

Historical DBs are read-preserved only; **no write reuse**.
Not an identical conversational replay (first HQA-01 already in historical transcript).
Comparison scope: intention + oracle parity.

---

## 7. Provider / budget preflight

| Item | Result |
|---|---|
| `SFIA_STUDIO_CURSOR_REAL` | `1` |
| `OPENAI_MODEL` (env) | `gpt-5.6-luna` |
| API key | present (not exposed) |
| Fake fallback | not configured / not observed |
| Envelope | documentary P6 Human QA ≤ €10; GO borné = single HQA-01 guidance turn |
| Provider calls yet | NONE |

---

## 8. REAL entry check

Runtime gate: **PASS**.
Human/project gate: **PENDING Morris login + isolated project/cycle setup**.
See embedded `real-entry-check.md`.

---

## 9. HQA-01 interaction

**NOT EXECUTED by Cursor.**
Pilot card prepared for Morris.
Proposed message (intention Guidance Only) unchanged unless Morris must adapt to avoid same-history repetition (N/A on fresh project).

Oracle: **ZERO NEW UNJUSTIFIED WORK RECOMMENDATION**.

Status: **WAITING HUMAN QA**.

---

## 10. Fake/Real Qualification

- Declared: HUMAN REAL QA (bounded HQA-01)
- Runtime REAL flag: on
- Model env attested: `gpt-5.6-luna`
- Turn-level provider response ids / costs: N/A until turn
- REAL BOUNDARY PROVEN: **NOT declared**

---

## 11. Jugement Morris

Required next:
1. Login at http://localhost:3020/login
2. Create isolated QA project + active cycle via Product UI
3. Capture before-state (projectId, cycleId, WR list)
4. Send HQA-01 message as Pilote
5. Return for evidence capture / ChatGPT review

HQA-02…07 remain NOT RUN.

---

## 12. Verdict

**REC-01 HQA-01 — CORRECT RUNTIME VERIFIED — WAITING HUMAN QA**

---

## 13. Product source unchanged

- No Product code/config versioned edits
- No schema/migration
- No project commit/push/PR/merge
- Local only: gitignored `.env.local`, `.sfia-exec/hqa01-rec01-requal/**`, QA evidence under `.tmp-sfia-review/`

---

## 14. Décision suivante

Morris executes HQA-01 on the verified REC-01 runtime; Cursor collects after-state; ChatGPT reviews.

---

## 15. Evidence files (exploitable contents)

### `environment-snapshot.json`

```json
{
  "timestamp": "2026-10-10T22:46:46Z",
  "runId": "HQA-01-REC01-REQUAL-20261010T224411Z",
  "campaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "lot": "P6-HQA-02 / REC-01",
  "scenario": "HQA-01 — GUIDANCE ONLY (re-execution)",
  "investigationWorkspace": "/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa",
  "branch": "qa/p6-hqa-02-rec01-human-qa",
  "head": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
  "originMain": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
  "rec01QualifyPresent": true,
  "prospectiveFilterInOrchestrateTurn": true,
  "historicalRuntime": {
    "pid": 30453,
    "parentPid": 30449,
    "cwd": "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app",
    "head": "980064c05f1769f00d0ef85ef5284a899c6a0d73",
    "branch": "qa/sfia-studio-p6-global-integrated-product-qa",
    "port": 3020,
    "url": "http://localhost:3020",
    "rec01": false,
    "stop": "SIGTERM graceful — STOPPED",
    "portAfterStop": "free then reoccupied by REC-01 instance"
  },
  "newRuntime": {
    "pid": 81318,
    "parentPid": 81311,
    "cwd": "/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/app",
    "head": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
    "branch": "qa/p6-hqa-02-rec01-human-qa",
    "port": 3020,
    "listen": "[::1]:3020",
    "url": "http://localhost:3020",
    "loginHttp": 200,
    "rootRedirect": "307 to /login?error=NO_SESSION",
    "apiAuthGetSessionHttp": 200,
    "command": "next dev --port 3020 --hostname localhost",
    "rec01": true,
    "secondStartAttempt": "EADDRINUSE — correct instance already listening"
  },
  "isolation": {
    "strategy": "Option B — fresh isolated Product + Nora session DBs",
    "productDbPath": "/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/oa-product.sqlite",
    "sessionDbPath": "/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/nora-session.sqlite",
    "dbsCreatedYet": false,
    "historicalWrite": false,
    "ninthRecommendationHistoricalId": "epi:acw:3879e9bc68c83f60d578",
    "historicalPreserve": "historical-preserve/ + historical-post-stop-copy/"
  },
  "provider": {
    "openaiModelEnv": "gpt-5.6-luna",
    "cursorReal": "1",
    "openaiKeyPresent": true,
    "fakeFallbackConfigured": false,
    "financialEnvelopeDocumentary": "P6 Human QA ≤ €10 (documentary; no hard cap infra)",
    "boundedGo": "HQA-01 single guidance turn only"
  },
  "auth": {
    "status": "MORRIS_LOGIN_REQUIRED_IN_BROWSER",
    "loginUrl": "http://localhost:3020/login"
  },
  "productSourceUnchanged": true
}
```

### `isolation.md`

```markdown
# QA Isolation — HQA-01-REC01-REQUAL-20261010T224411Z

strategy: Option B — isolated Product + Nora session DBs (fresh)
reason: historical session already contains first HQA-01 turn; not an equivalent re-execution target
historicalPreserveOnlineBackup: historical-preserve/
historicalPostStopCopy: historical-post-stop-copy/
isolatedProductDb: /Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/oa-product.sqlite
isolatedSessionDb: /Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/nora-session.sqlite
writeToHistorical: FORBIDDEN
ninthRecommendationPreservedInHistorical: epi:acw:3879e9bc68c83f60d578
comparisonScope: intention/oracle parity only — not identical conversational replay
```

### `real-entry-check.md`

```markdown
# REAL Entry Check — HQA-01 REC-01 Requalification

| # | Check | Result |
|---|---|---|
| 1 | Session Pilote authentifiée | PENDING — login required (`/login`, root 307 NO_SESSION) |
| 2 | Projet QA identifié | PENDING — fresh isolated DB (not created until Product use) |
| 3 | Cycle actif | PENDING — after project setup by Morris |
| 4 | Contexte Product cohérent | PENDING — Option B isolation; comparable context to be built via Product UI |
| 5 | WR ouvertes dénombrées | N/A until project exists (expect 0 at fresh project start) |
| 6 | Journal accessible | PENDING |
| 7 | Persistance QA opérationnelle | CONFIGURED — isolated paths in `.env.local` (gitignored); DBs not yet materialized |
| 8 | Nora/OpenAI accessible | CONFIGURED — `OPENAI_API_KEY` present; `OPENAI_MODEL=gpt-5.6-luna`; `SFIA_STUDIO_CURSOR_REAL=1` |
| 9 | Fake fallback | NOT CONFIGURED / NOT OBSERVED |
| 10 | Model/effort observables | Model from env: `gpt-5.6-luna`; effort at turn TBD |
| 11 | Enveloppe financière | Documentary P6 ≤ €10 Human QA; GO borné = 1 tour HQA-01 |
| 12 | Captures/transcript collectables | YES — evidence dir ready |
| 13 | Evidence Ledger P6 | YES — campaign space + rec01 runtime-requal |
| 14 | Environnement parallèle non maîtrisé | Historical Studio STOPPED; single listener 3020 = REC-01 QA WT |

Entry gate for provider calls: **blocked until Morris authenticates and prepares project/cycle**.
Runtime gate: **PASS** (URL→PID→CWD→HEAD→REC-01).
```

### `morris-hqa01-pilot-card.md`

```markdown
# HQA-01 — Action Pilote Morris (REQUIRED)

Runtime READY on REC-01 baseline.
Cursor will **not** send the message.

## 1) Login
Open: http://localhost:3020/login
Authenticate as Pilote Morris (GitHub allowlist).

## 2) Prepare isolated QA project (Option B)
Create/open a **new** project via Product UI on this runtime.
Ensure an **active cycle** with a coherent Cadrage-like context.
Do **not** reopen the historical contaminated project session for this re-run.
Do **not** delete the historical 9th Recommendation (untouched in historical DB).

## 3) Capture BEFORE (or confirm with Cursor)
- projectId, cycleInstanceId
- open WR count + identities
- Journal visible

## 4) Send exactly (or intention-equivalent if adaptation required):

Petite question : quelle est la différence entre l'avancement d'une tâche et l'avancement global d'un projet ? J'aimerais simplement comprendre la nuance.

Oracle: ZERO NEW UNJUSTIFIED WORK RECOMMENDATION.
Narrative explanation OK. Durable WR not expected.

## 5) After the turn
Notify Cursor/ChatGPT. Do not proceed to HQA-02…07.
```

### `evidence-ledger-append.json`

```json
{
  "campaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "scenarioId": "HQA-01-GUIDANCE-ONLY",
  "kind": "RUNTIME_REQUALIFICATION",
  "runId": "HQA-01-REC01-REQUAL-20261010T224411Z",
  "at": "2026-10-10T22:46:46Z",
  "historicalStop": {
    "pid": 30453,
    "method": "SIGTERM",
    "result": "STOPPED"
  },
  "newRuntime": {
    "pid": 81318,
    "cwd": "qa-wt-app",
    "head": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
    "url": "http://localhost:3020",
    "rec01": true
  },
  "isolation": "Option B fresh DBs",
  "hqa01Interaction": "NOT_EXECUTED",
  "verdict": "REC-01 HQA-01 — CORRECT RUNTIME VERIFIED — WAITING HUMAN QA",
  "productMutationVersioned": false
}
```

### Historical preserve note

Directories (binary sqlite — not inlined):
- `…/runtime-requal/HQA-01-REC01-REQUAL-20261010T224411Z/historical-preserve/oa-product.sqlite`
- `…/runtime-requal/HQA-01-REC01-REQUAL-20261010T224411Z/historical-preserve/nora-session.sqlite`
- `…/runtime-requal/HQA-01-REC01-REQUAL-20261010T224411Z/historical-post-stop-copy/` (same pair)

Verified contain `epi:acw:3879e9bc68c83f60d578`.
