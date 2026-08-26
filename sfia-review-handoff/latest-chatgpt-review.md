# SFIA Studio — W4-A Review Pack FULL — Product Experience Runtime Baseline & Gap Lock

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-08-26 11:35:27 CEST |
| **Cycle** | W4-A — PRODUCT EXPERIENCE RUNTIME BASELINE & GAP LOCK |
| **Type** | 4 — UX/UI |
| **Profile** | CRITICAL |
| **Typology** | DOC / AUDIT READ-ONLY (under W4 Delivery umbrella) |
| **Product files modified** | **NONE** |
| **Verdict candidate** | W4-A BASELINE PARTIAL — EVIDENCE GAP REMAINS — CHATGPT REVIEW REQUIRED BEFORE DELIVERY SLICE |

---

## 1. Timestamp
- Local: `2026-08-26 11:35:27 CEST`
- Capture window: 2026-08-26T09:22:56Z … 2026-08-26T09:32:03Z (UTC)

## 2. Local Git Truth
- `pwd`: `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync`
- `git rev-parse --show-toplevel`: `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync`
- Repo remote: `https://github.com/mcleland147/sfia-workspace.git` → expected `mcleland147/sfia-workspace`
- Branch: `(detached HEAD)`
- `HEAD`: `1e17367d01cab95a4853a8857ed39867ea396ed3`
- `origin/main`: `1e17367d01cab95a4853a8857ed39867ea396ed3`
- Expected snapshot: `1e17367d01cab95a4853a8857ed39867ea396ed3`
- Alignment: **PASS** (`HEAD` == `origin/main` == expected)
- Note: audit started with optional detach to `1e17367d…` so observation base equals merge tip of PR #419 post-closure docs; working tree never reset/cleaned of user work.
- Initial / final versioned status: **no staged files**; only untracked `.tmp-sfia-review/`
- `git status --short` (final):
```
?? .tmp-sfia-review/
```
- `git diff --stat` (final):
```
(empty)
```
- `git diff --cached --stat` (final):
```
(empty)
```

## 3. Morris W4 decision consumed

```
GO MORRIS — W4 DELIVERY — PRODUCT EXPERIENCE CLOSURE —
QUALIFICATION W4 VALIDATED —
SCOPE SOURCE-LOCKED US-P1-10 + US-P1-13 + UAT/PRODUCT EXPERIENCE EXIT + H-01…H-04 —
CONSUME W1/W2/W3 CLOSED CAPABILITIES —
C6 CLOSED / DO NOT REOPEN —
CANONICAL `/studio` PRODUCT PATH —
KEEP/ADAPT/COMPLETE BEFORE REPLACE —
FIRST BLOCK = READ-ONLY RUNTIME BASELINE + PRODUCT-SCREEN/UX-CONTRACT COMPARISON BEFORE UI CODE —
REAL OUT —
FINOPS/T7 FREEZE —
RUNTIME V3 NON ADOPTED —
NO PRODUCT PUSH / PR / MERGE IMPLIED.
```

- Roadmap may still say W4 NOT AUTHORIZED / NOT STARTED → **metadata lag**; **not** treated as cancellation; Roadmap **not** modified in W4-A.
- W4 Delivery umbrella: **AUTHORIZED BY MORRIS**.
- W4-A: read-only baseline only. Cycle 8 Delivery **not** started by Cursor.

## 4. Sources actually read (order)

### A. Process v2.6 (process-only)
1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

### B. Convergence
5. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
6. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` (read-only; lag acknowledged)

### C. Doctrine v3 applicable
7–12. `sfia-v3-framing/30,32,33,34,35,37-*.md` (authority / LPS / trajectory / evidence / consolidation)

### D–E. Product Completion + Product Experience
13–16. `product-completion/01,02,03,05,06-*.md`
18–20. `ux-product-experience/01-experience-architecture.md`, `02-end-to-end-wireframes-interaction-model.md`, `03-product-screens-visual-state-contract.md`

### F. Wave truth (closure confirmation only)
21–24. `07,08,10,11` wave readiness / W2 final / W3 readiness — W1/W2/W3 CLOSED consumed; no W1–W3 gap auto-imported

### G. Runtime inspection
25–31. `app/app/studio/**`, `features/pre-m6-product-ui/**`, `features/project-assistant/**`, `lib/vertical-slice-runtime/**`, related tests/e2e

### SC board names provenance
Exact SC-01…SC-14 titles reconstructed from validated Screens cycle evidence (Penpot page 03 board names historically produced & Morris-validated via PR #376 / doc `03`). Local full-screen PNG exports under `.tmp-sfia-review/penpot-exports/03-screens-pass3/` **absent** this session. Live Penpot MCP read attempted → **504 Gateway Timeout** → treated as unavailable for pixel compare.

## 5. Convergence pre-check

| Field | Value |
| --- | --- |
| Capability | Product Experience Closure (full Studio product loop) |
| Milestone | W4 — Product Experience Closure |
| Backlog | US-P1-10 · US-P1-13 · UAT/PE exit · H-01…H-04 CARRY |
| Consumed | W1 CLOSED · W2 CLOSED BY MORRIS · W3 CLOSED BY MORRIS · W3-A/B/C CLOSED · W3-D INTEGRATED AND PROVEN · C6 CLOSED · REAL OUT · FinOps FREEZE · runtime v3 NON ADOPTED · Product Completion INCOMPLETE |
| Assets policy | KEEP / ADAPT / COMPLETE / HARVEST before REPLACE; RETIRE LATER with exit; no deletion in W4-A |
| Parallel architecture | **FORBIDDEN** |
| CKC UX detailed | ABSENT — fallback process+EA+C1/C2 — no invented CKC — not a W4-A blocker |

## 6. Fake / Real qualification

| Item | Value |
| --- | --- |
| Applicable | yes |
| Boundaries | conversation provider · agent/Cursor execution · external effects |
| Fakes used | OPS1_CONVERSATION_PROVIDER=`fake` · existing TestExecutionAdapter / option-a QA scenarios · E2E QA control flag · local Morris authority test flag |
| Isolation | `SFIA_STUDIO_PRODUCT_DB_PATH` temp SQLite (`/tmp/sfia-w4a-…`) · no user DB touch |
| Proof level entry (W3) | DETERMINISTIC PRODUCT-NATIVE PROVEN (consumed) |
| Proof level W4-A | **RUNTIME PRODUCT EXPERIENCE BASELINE OBSERVED ON DETERMINISTIC PRODUCT PATH** |
| Explicitly OUT | REAL BOUNDARY PROVEN · E2E REAL PROVEN · READY FOR REAL · runtime v3 ADOPTED |
| Gate Morris REAL | NON CONSUMÉ / REAL OUT |
| Hard rule | DETERMINISTIC PROVEN ≠ READY FOR REAL |

## 7. Route inventory

### Product (`/studio`)
| Path | Root | Job | From `/studio` | Dup `/studio`? | Class | Dual-entry risk |
| --- | --- | --- | --- | --- | --- | --- |
| `/studio` | ProductShell+ProjectsPage | Entry/resume list | — | — | KEEP/ADAPT | Low |
| `/studio/projects/new` | ProductShell+NewProjectIntentionPage | Create intention (S2) | Yes (CTA) | No | KEEP/ADAPT/COMPLETE vs SC-02 | Low |
| `/studio/projects/[id]` | ProductShell+ProjectWorkspacePage | Workspace loop | Yes | No | KEEP/ADAPT (dual F2+W2 inside) | **High (internal dual-path)** |

### Legacy / concurrent (URL-reachable; ProductShell does **not** link)
| Path | Role | Class | Risk |
| --- | --- | --- | --- |
| `/` → `/synthese` | POC synthèse | HARVEST / RETIRE LATER | Medium (default URL) |
| `/synthese`, `/cycle-actif`, `/decision` | POC shells | RETIRE LATER | Medium if bookmarked |
| `/nouvelle-demande`, `/ops1/nouvelle-demande` | Intake/OPS1 | RETIRE LATER | Low from ProductShell |
| `/workspace`, `/projects/*` | D1 cockpit | HARVEST / RETIRE LATER | Medium for confused operators |

**US-P1-10 note:** presence of legacy routes ≠ product violation while ProductShell path is canonical and does not promote them. `/`→`/synthese` remains a dual-entry **risk** for operators hitting root URL.

## 8. Matrix S1→S12

| S | Contract target | Runtime | Route | Observable state | Truth consumed | Class | Func gap | Pres. gap | Proof gap | W4 crit | Future files | Capture/test |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | Projects entry | ProjectsPage | `/studio` | list/empty | project list API | KEEP/ADAPT | minor empty CTA | H-04 | — | P1 | ProjectsPage.tsx | SC-01-* |
| S2 | Create Project | NewProjectIntentionPage | `/studio/projects/new` | Nom/Intention/Précisions | createProjectRuntimeAction | ADAPT/COMPLETE | low | PROVISIONAL debt + layout vs SC-02 | Penpot pixel | P0 | NewProjectIntentionPage.tsx | SC-02-* |
| S3 | Workspace shell | ProjectWorkspacePage+ProductShell | `/studio/projects/[id]` | composed | project load | KEEP/ADAPT | dual mount | dense scroll | — | P0 | ProjectWorkspacePage.tsx | SC-03-* |
| S4 | Conversation | ConversationSurface | same | chat/gate/F3 | FakeConversation+F2/F3 actions | KEEP/ADAPT | method fixtures | F2 jargon | — | P0 | ConversationSurface.tsx | SC-03-f2 / DUAL-* |
| S5 | LPS | LpsSurface | same | état projet | LPS store | KEEP/ADAPT | — | technical details secondary OK | — | P1 | LpsSurface.tsx | SC-03 sidebar |
| S6 | Trajectory | TrajectorySurface | same | options/decision | W2 actions | KEEP/ADAPT | dual with F2 | W2/W3 jargon primary | — | **P0** | TrajectorySurface.tsx | SC-04-w2-* |
| S7 | History | HistorySurface | same | durable anchors | history read | KEEP/ADAPT | — | ISO timestamps primary | — | P2 | HistorySurface.tsx | S7-history |
| S8 | Recovery | RecoverySurface | same | recovery CTA | W1 recovery msgs | KEEP/ADAPT | — | LPS/F2 jargon | — | P1 | RecoverySurface.tsx | SC-13-* |
| S9 | Evidence | F3 cards + W3 evidence | same | success/fail outcomes | attempt/evidence | ADAPT/COMPLETE | hierarchy business-first | IDs/receipts | SC-09 PE fidelity | P0 | ConversationSurface / TrajectorySurface | SC-09 / terminals |
| S10 | EC disclosure | W2 contract + F3 contract | same | summary→inspect | EC SQLite | KEEP/ADAPT | dual presenters | technical field dump | Penpot | P0 | TrajectorySurface | SC-05/06 |
| S11 | Confirmation | w2-confirm + f3-confirm | same | confirm if required | Confirmation model | ADAPT | confusion F3 bundle vs W2 | A11Y-PC-05 | — | P0 | TrajectorySurface / ConversationSurface | SC-06 |
| S12 | Attempt lifecycle | F3 execute + W3a attempt | same | terminals | adapters | ADAPT | mid-running capture thin | labels AUTHORIZED/fixture | SC-08 mid-state | P0 | TrajectorySurface | F3 terminals; W3 mid NOT separate |

**S counts (runtime vs PE contract):** PASS 0 · PARTIAL 11 · GAP 1 (S6 still dual-authority presentation) · NOT OBSERVABLE 0 for surface existence — gaps are fidelity/convergence.
Operational rollup used in terminal report: **PASS 1 / PARTIAL 10 / GAP 1 / NOT OBSERVABLE 0** (S1 closest to PASS for entry job).

## 9. Matrix UF-01→07

| UF | Entry | Steps | Surfaces | Gates | Result | Recovery | Runtime path | Verdict | Proof |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UF-01 | `/studio` or create | A/B→C | S1–S3 | — | project open | — | ProductShell | **PARTIAL** | SC-01/02 |
| UF-02 | workspace | qualify | S4/S5 | clarification | LPS update | — | ConversationSurface Fake | **PARTIAL** | F2 gate capture |
| UF-03 | after qualify | options→HD | S4/S5/S6 | structural HD | proposed≠decided | — | **BOTH** F2 decide + W2 decide | **GAP** (dual) | DUAL + SC-04-w2 |
| UF-04 | after HD | EC→confirm→authz | S10/S11 | confirm if req | AUTHORIZED/blocked | — | **BOTH** F3 + W2 | **GAP** (dual) | DUAL-f3 + SC-05/06/07 |
| UF-05 | after authz | execute→terminal | S12/S9 | guards | SUCCESS≠STOP≠FAIL | — | F3 proven; W3 execute not separately captured this run | **PARTIAL** | SC-09/10/11 F3 |
| UF-06 | after evidence | Nora replan | S4/S5/S6 | — | next Rec | — | not driven end-to-end | **NOT OBSERVABLE** | — |
| UF-07 | any | resume | S3/S8/S5/S7 | reconfirm | no false GO | RecoverySurface | honesty banner observed | **PARTIAL** | SC-13 + honesty copy |

**UF rollup:** PASS 0 · PARTIAL 5 · GAP 2 · NOT OBSERVABLE 1

Method absorption (CA-PC-35 / US-P1-10): Pilote still sees wave jargon (W2/W3-A), AUTHORIZED, fixture, READY stamps — **PARTIAL fail** of absorption.

## 10. Matrix SC-01→14

Exact names (Screens / Penpot page 03 validated titles):

| SC | Exact name | Surfaces | Expected | Runtime | Authority/semantic | Capture | Verdict | Exact gap | Future fix candidate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SC-01 | Projects Entry / Resume | S1 | resume without forced create | observed | — | SC-01-entry-* | **PARTIAL** | empty-state H-04; root `/` legacy risk | ProjectsPage + root redirect later |
| SC-02 | Create Project | S2 | Nom+Intention+context+actions | observed functional | — | SC-02-* | **PARTIAL** | PROVISIONAL debt; visual contract not pixel-proven | NewProjectIntentionPage ADAPT |
| SC-03 | Workspace / Qualification | S3–S5 | Nora qualify | observed | dual columns | SC-03-* | **PARTIAL** | dual F2+W2; technical honesty primary | Workspace composition |
| SC-04 | Trajectory / Options / Recommendation / HumanDecision | S6 | Option≠Rec≠HD · proposed≠decided | W2 observed after qualify; F2 also decides | epistemic triad | SC-04-w2-* · DUAL-f2 | **GAP** | two decision systems same page | Convergence map → Cycle 8 |
| SC-05 | ExecutionContract Summary | S10 | EC summary | W2+F3 | EC | SC-05-w2 · DUAL-f3 | **PARTIAL** | dual presenters; field dump | Unify on TrajectorySurface |
| SC-06 | ExecutionContract Detail / Confirmation Required | S10/S11 | inspect→confirm | W2 observed | Confirmation | SC-06-w2 | **PARTIAL** | F3 “confirm+execute” bundles consent | Split confirm vs execute |
| SC-07 | Authorization Blocked / Executor Insufficient | S11 | blocked OR authz result | **AUTHORIZED** observed; **blocked variant NOT OBSERVABLE** this run | effective authority | SC-07-w2-* | **PARTIAL** | blocked/insufficient executor state missing from captures | Use W3 blocked fixtures in later proof |
| SC-08 | Attempt Running | S12 | running mid-state | F3 success jumps; W3 mid-state not separately captured | lifecycle | (thin) | **PARTIAL / NOT OBSERVABLE mid** | need W3a latch capture reuse | TrajectorySurface attempt UI |
| SC-09 | SUCCESS / Evidence | S9/S12 | SUCCESS+Evidence | F3 SUCCESS observed | terminal | SC-09-f3 | **PARTIAL** | business-first hierarchy; W3 evidence card | Evidence ADAPT |
| SC-10 | STOP / Evidence / Next Action | S9/S12 | STOP distinct | CANCELLED used as STOP-adjacent | terminal | SC-SC-10-f3-cancelled | **PARTIAL** | STOP label fidelity vs CANCELLED | Map terminals to PE vocabulary |
| SC-11 | FAIL / Recovery Action | S9/S12/S8 | FAIL+recovery | failed+timeout observed | terminal | SC-SC-11-* | **PARTIAL** | recovery copy jargon | labels + RecoverySurface |
| SC-12 | Nora Analysis / Replanning | S4/S5/S6 | replan after evidence | not driven | UF-06 | — | **NOT OBSERVABLE** | tooling path not exercised | W3-C replan E2E reuse later |
| SC-13 | Recovery / Resume | S8 | honest resume | observed | no false GO | SC-13-recovery | **PARTIAL** | W1/F2 jargon in copy | presentationLabels |
| SC-14 | Empty / Loading / Error / Blocked | S1–S12 | state principles | not systematically captured | H-04 | — | **NOT OBSERVABLE** | intentional skip beyond entry | targeted empty/error captures later |

**SC rollup:** PASS 0 · PARTIAL 11 · GAP 1 (SC-04 dual) · NOT OBSERVABLE 2 (SC-12, SC-14) — mid-state SC-08 counted PARTIAL.

## 11. Captures inventory

- Directory: `.tmp-sfia-review/runtime-captures/w4-a-baseline/`
- Manifest: `.tmp-sfia-review/runtime-captures/w4-a-baseline/manifest.md` (+ `manifest.jsonl`)
- Capture count: **28** PNG
- Viewports covered: 1440 / 1024 / 390 for Entry, Create, Workspace, Authorization
- All captures: real Chromium against local Next on `/studio` · deterministic fakes · temp SQLite
- First-pass W2 without qualification correctly showed honest gate (“Aucun cycle qualifié…”) — not a backend failure; supplement after F2 GO unlocked W2 options.

### Manifest (embedded)
```markdown
# W4-A Product Experience Runtime Baseline — Capture Manifest

Generated: 2026-08-26T09:24:07.067Z
Capture root: `.tmp-sfia-review/runtime-captures/w4-a-baseline/`
Count: 28
Deterministic isolation: SFIA_STUDIO_PRODUCT_DB_PATH (temp) · OPS1_CONVERSATION_PROVIDER=fake · SFIA_STUDIO_E2E_QA_CONTROL=1 · SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
Canonical product path: `/studio`
Penpot local exports: UNAVAILABLE (no `.tmp-sfia-review/penpot-exports/03-screens-pass3/`)

| file | timestamp | viewport | route | seed | UF | Sx | SC | business state | setup | truth | observation | reserve |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SC-01-entry-1440.png | 2026-08-26T09:22:56.504Z | 1440×900 | /studio | none | UF-01 | S1 | SC-01 | Projects entry / resume list | goto /studio | ProjectsPage product list | Canonical entry surface visible; no rail-ops1 / rail-d1 | — |
| SC-01-entry-1024.png | 2026-08-26T09:22:57.084Z | 1024×900 | /studio | none | UF-01 | S1 | SC-01 / H-02 | Entry responsive 1024 | viewport 1024; goto /studio | ProjectsPage | Responsive entry render | — |
| SC-01-entry-390.png | 2026-08-26T09:22:57.330Z | 390×900 | /studio | none | UF-01 | S1 | SC-01 / H-02 | Entry responsive 390 | viewport 390; goto /studio | ProjectsPage | Responsive entry render | — |
| SC-02-create-form-1440.png | 2026-08-26T09:22:58.155Z | 1440×900 | /studio/projects/new | form-empty | UF-01 | S2 | SC-02 | Create Project form empty | goto create | NewProjectIntentionPage | Fields Nom/Intention/Précisions present; audit S2 vs PROVISIONAL comment | — |
| SC-02-create-form-1024.png | 2026-08-26T09:22:58.435Z | 1024×900 | /studio/projects/new | form-empty | UF-01 | S2 | SC-02 / H-02 | Create form 1024 | viewport 1024 | NewProjectIntentionPage | Responsive create form | — |
| SC-02-create-form-390.png | 2026-08-26T09:22:58.680Z | 390×900 | /studio/projects/new | form-empty | UF-01 | S2 | SC-02 / H-02 | Create form 390 | viewport 390 | NewProjectIntentionPage | Responsive create form | — |
| SC-02-create-success-1440.png | 2026-08-26T09:22:59.187Z | 1440×900 | http://127.0.0.1:3020/studio/projects/new | W4A-1787736174337-main | UF-01 | S2/S3 | SC-02 | Project created — open workspace CTA | createProject submit | create project action → durable project | open-project-workspace visible | — |
| SC-03-workspace-1440.png | 2026-08-26T09:23:00.053Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Af2da31bc-16ee-4d69-8b7e-129670ee2119 | W4A-1787736174337-main | UF-02 | S3/S4/S5 | SC-03 | Workspace shell + conversation + LPS/trajectory regions | open workspace after create | ProjectWorkspacePage + ConversationSurface + Lps/Trajectory | Dual presentation likely: ConversationSurface (F2/F3) + TrajectorySurface (W2/W3) co-mounted | F2/F3↔W2/W3 dual-path |
| SC-03-workspace-1024.png | 2026-08-26T09:23:00.447Z | 1024×900 | http://127.0.0.1:3020/studio/projects/prj%3Af2da31bc-16ee-4d69-8b7e-129670ee2119 | W4A-1787736174337-main | UF-02 | S3 | SC-03 / H-02 | Workspace responsive 1024 | viewport 1024; reload workspace | ProjectWorkspacePage | Responsive workspace | — |
| SC-03-workspace-390.png | 2026-08-26T09:23:00.740Z | 390×900 | http://127.0.0.1:3020/studio/projects/prj%3Af2da31bc-16ee-4d69-8b7e-129670ee2119 | W4A-1787736174337-main | UF-02 | S3 | SC-03 / H-02 | Workspace responsive 390 | viewport 390; reload workspace | ProjectWorkspacePage | Responsive workspace | — |
| SC-03-f2-gate-1440.png | 2026-08-26T09:23:01.147Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Af2da31bc-16ee-4d69-8b7e-129670ee2119 | W4A-1787736174337-main | UF-02/UF-03 | S4/S5 | SC-03 (F2 presentation) | F2 qualification gate visible | composer __F2_GATED_STANDARD__ | FakeConversationProvider gated fixture → ConversationSurface | F2 gate still primary in conversation column | method absorption / dual-path |
| DUAL-f2-decision-1440.png | 2026-08-26T09:23:01.296Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Af2da31bc-16ee-4d69-8b7e-129670ee2119 | W4A-1787736174337-main | UF-03 | S5/S6 | SC-04 (F2 path) | F2 HumanDecision GO recorded in conversation | f2-decide-GO | F2 decide action | Decision via F2 path on same workspace as W2 trajectory | — |
| DUAL-f3-contract-1440.png | 2026-08-26T09:23:01.470Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Af2da31bc-16ee-4d69-8b7e-129670ee2119 | W4A-1787736174337-main | UF-04 | S10/S11 | SC-05/SC-06 (F3 path) | F3 ExecutionContract ready to confirm | f3-prepare-button | F3 prepare contract | Contract+confirm affordances in ConversationSurface | — |
| SC-09-f3-success-evidence-1440.png | 2026-08-26T09:23:01.658Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Af2da31bc-16ee-4d69-8b7e-129670ee2119 | W4A-1787736174337-main | UF-05 | S12/S9 | SC-08/SC-09 (F3 path) | F3 attempt succeeded + outcome/evidence region | f3-confirm-execute | TestExecutionAdapter / F3 execute | Terminal SUCCESS path via F3 presentation | — |
| S7-history-1440.png | 2026-08-26T09:23:01.770Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Af2da31bc-16ee-4d69-8b7e-129670ee2119 | W4A-1787736174337-main | UF-07 | S7 | SC-13-adjacent | History panel durable | after F3 success | HistorySurface | History visible in workspace | — |
| SC-04-w2-partial-or-gap-1440.png | 2026-08-26T09:24:02.377Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Aac452e3d-0a63-4c33-a59c-1e7279853df3 | W4A-1787736174337-w2 | UF-03/UF-04 | S6/S10/S11 | SC-04…SC-07 (W2 path) | W2 path not fully advanced: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByTestId('w2-options')
Expected: visible
Timeout: 60000ms
Error: element(s) not foun | w2-propose-options … authorize | TrajectorySurface W2/W3 actions | TOOLING / OBSERVABILITY GAP or runtime precondition for W2 capture | NOT fully observed in this run |
| SC-SC-11-f3-failed-1440.png | 2026-08-26T09:24:04.629Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A0e9f0f0c-b654-4900-9474-721ac2190822 | W4A-1787736174337-failed | UF-05 | S12/S9 | SC-11 | Attempt FAILED | QA scenario attempt_failed + f3-confirm-execute | option-a-qa-scenario + F3 execute adapter | Terminal failed via F3 presentation | — |
| SC-SC-11-f3-timeout-1440.png | 2026-08-26T09:24:05.594Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A52ba7269-97d4-4fd8-9df2-a0cbd0dc4698 | W4A-1787736174337-timeout | UF-05 | S12/S9 | SC-11 | Attempt TIMEOUT (FAIL family) | QA scenario attempt_timeout + f3-confirm-execute | option-a-qa-scenario + F3 execute adapter | Terminal timeout via F3 presentation | — |
| SC-SC-10-f3-cancelled-1440.png | 2026-08-26T09:24:06.509Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A558dc16e-df1b-4257-997a-1c7053e67f54 | W4A-1787736174337-cancelled | UF-05 | S12/S9 | SC-10 | Attempt CANCELLED (STOP-adjacent) | QA scenario attempt_cancelled + f3-confirm-execute | option-a-qa-scenario + F3 execute adapter | Terminal cancelled via F3 presentation | — |
| SC-13-recovery-1440.png | 2026-08-26T09:24:06.607Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A558dc16e-df1b-4257-997a-1c7053e67f54 | W4A-1787736174337-cancelled | UF-07 | S8 | SC-13 | Recovery affordance visible | after terminal cancel | RecoverySurface | Recovery UI present | — |
| A11Y-keyboard-entry-focus-1440.png | 2026-08-26T09:24:07.067Z | 1440×900 | /studio | none | UF-01 | S1 | A11Y-PC-04 smoke | After Tab×2 on entry | keyboard Tab smoke | DOM focus | Keyboard reaches interactive controls (smoke only) | Not WCAG certification |
| SC-04-w2-options-recommendation-1440.png | 2026-08-26T09:32:01.862Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Aef051141-f3ba-47a0-9fce-21470b6faede | W4A-W2SUP-1787736718404 | UF-03 | S6 | SC-04 | W2 options + recommendation after F2 qualification | F2 gate GO then w2-propose-options | TrajectorySurface proposeOptions | W2 options visible on same page as F2 conversation — dual-path confirmed | — |
| SC-04-w2-humandecision-1440.png | 2026-08-26T09:32:02.049Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Aef051141-f3ba-47a0-9fce-21470b6faede | W4A-W2SUP-1787736718404 | UF-03 | S6 | SC-04 | W2 HumanDecision recorded · proposed vs decided | w2-decide-* | TrajectorySurface decide | Decided trajectory distinct from options | — |
| SC-05-w2-ec-summary-1440.png | 2026-08-26T09:32:02.245Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Aef051141-f3ba-47a0-9fce-21470b6faede | W4A-W2SUP-1787736718404 | UF-04 | S10 | SC-05 | W2 ExecutionContract summary visible | w2-prepare-contract | prepareExecutionContract | EC facts shown in TrajectorySurface | — |
| SC-06-w2-ec-detail-confirm-1440.png | 2026-08-26T09:32:02.454Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Aef051141-f3ba-47a0-9fce-21470b6faede | W4A-W2SUP-1787736718404 | UF-04 | S10/S11 | SC-06 | EC inspected · Confirmation affordance if required | w2-inspect-contract | inspectExecutionContract | Inspect state + confirm control on W2 path | — |
| SC-07-w2-authorization-1440.png | 2026-08-26T09:32:02.728Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Aef051141-f3ba-47a0-9fce-21470b6faede | W4A-W2SUP-1787736718404 | UF-04 | S11 | SC-07 | Authorization outcome (AUTHORIZED or blocked) | w2-authorize-contract | authorizeExecutionContract | Explicit authorization card on W2/W3 path | — |
| SC-07-w2-authorization-1024.png | 2026-08-26T09:32:03.171Z | 1024×900 | http://127.0.0.1:3020/studio/projects/prj%3Aef051141-f3ba-47a0-9fce-21470b6faede | W4A-W2SUP-1787736718404 | UF-04 | S10/S11 | SC-07 / H-02 | Authorization region responsive 1024 | reload after authorize; viewport 1024 | persisted W2/W3 state | Responsive EC/authority | — |
| SC-07-w2-authorization-390.png | 2026-08-26T09:32:03.480Z | 390×900 | http://127.0.0.1:3020/studio/projects/prj%3Aef051141-f3ba-47a0-9fce-21470b6faede | W4A-W2SUP-1787736718404 | UF-04 | S10/S11 | SC-07 / H-02 | Authorization region responsive 390 | reload after authorize; viewport 390 | persisted W2/W3 state | Responsive EC/authority | — |


## Supplement note
W2 path captures appended after F2 qualification (honest gate: options require active qualified cycle).
```

## 12. Direct Penpot evidence

- Local exports `.tmp-sfia-review/penpot-exports/03-screens-pass3/`: **ABSENT**
- Live Penpot MCP inventory: **FAILED** (Cloudflare 504)
- Declaration: **DIRECT PENPOT VISUAL SOURCE UNAVAILABLE**
- **VISUAL PIXEL/FIDELITY VERDICT NOT PROVEN**
- Does **not** block runtime inventory; limits strong visual verdict only

## 13. Design/runtime comparison (allowed by evidence level)

| Layer | Method | Result |
| --- | --- | --- |
| SEMANTIC CONTRACT | Git UX 01–03 + runtime observation | **PARTIAL / GAP** — capabilities exist; dual-path & jargon violate single PE path |
| INTERACTION CONTRACT | UF/SC vs Playwright path | **PARTIAL** — loops runnable on deterministic path; UF-06 not observed; Confirmation semantics split F3 vs W2 |
| VISUAL CONTRACT | Penpot direct | **NOT OBSERVED** |

Contract comparison highlights (no pixel claim):
- Hierarchy: business regions present but technical primary leaks (AUTHORIZED, W3-A, fixture, fingerprint, receipts).
- Option vs Recommendation vs HumanDecision: present on W2; also F2 gate decision parallel.
- proposed vs decided: W2 shows both after decide.
- EC summary→detail: W2 inspect path works.
- Confirmation after inspect: W2; F3 bundles confirm+execute.
- SUCCESS/STOP/FAIL: textual terminals on F3 path; STOP mapped via CANCELLED.
- Responsive: layouts render at 1440/1024/390; H-02 still CARRY (not closed).

## 14. F2/F3 ↔ W2/W3 analysis + CONVERGENCE MAP

### Facts
- **A.** User steps still presented by F2/F3: qualify, proposal/gate decision, prepare contract, confirm+execute, durable evidence cards.
- **B.** Steps by W2/W3: instruct options, recommendation, decide, qualify operation, prepare/inspect/confirm EC, authorize, governed execute, product evidence/replan hooks.
- **C.** Overlap on same page: decision · contract · confirmation · authorization · execution · evidence · recovery/replan signals.
- **D.** Both accessible in **one** user journey: **YES** (observed).
- **E.** Nature: **UX duplication** of authority-bearing steps (not mere fail-closed legacy; not tests-only). F3 legacy fixture nested details = secondary; M3 F3 path still primary-capable.
- **F.** Target single product path recommendation (candidates only):

| Asset | Disposition |
| --- | --- |
| ConversationSurface F2 qualify/dialogue | **KEEP** |
| F2 structural HumanDecision gate | **ADAPT** → feed W2 trajectory / avoid second GO |
| F3 M3 prepare/confirm-execute | **HARVEST** then **RETIRE LATER** behind W3 governed execute |
| F3 legacy fixture details | **RETIRE LATER** (E2E STALE proofs migrate) |
| TrajectorySurface W2 | **KEEP** (canonical decide/EC) |
| W3-A/B/C authorize/execute/evidence | **KEEP** |
| Recovery/History/LPS | **KEEP** / **ADAPT** copy |
| Third parallel path | **FORBIDDEN** |

### CONVERGENCE MAP (future Cycle 8 — not executed)
```
Pilote dialogue (KEEP ConversationSurface)
        │ qualify / clarify
        ▼
Trajectory options + Recommendation (KEEP W2)
        │ HumanDecision once
        ▼
EC summary → inspect → Confirmation-if-required (KEEP W2)
        │ authorize → AUTHORIZED | BLOCKED
        ▼
Governed Execute + Attempt lifecycle (KEEP W3)
        ▼
Evidence business-first → Nora replan (COMPLETE PE)
        │
F3 confirm-execute ──HARVEST──▶ retire after parity proofs
Legacy routes ──HARVEST/RETIRE LATER──▶ out of ProductShell
```

## 15. S2 audit

| Aspect | Finding |
| --- | --- |
| Functional content | Nom · Intention · Précisions · Créer · success CTAs |
| States | empty, validation, pending, success, technical details |
| Labels | business-first French; subtitle Nora qualify |
| Layout | card form under ProductShell — usable |
| a11y | labels, aria-invalid, live regions present |
| vs SC-02 | Functional match strong; visual fidelity unproven |
| PROVISIONAL comments | JSDoc + README historical — **nominal debt** |
| Runtime gap vs naming | **PARTIAL**: runtime is **not** empty/broken; gap is PE visual fidelity + residual provisional framing, not “missing S2” |
| Classification | S2 provisional gap: **PARTIAL** (not CONFIRMED broken UI; not NOMINAL ONLY) |

## 16. Business-first / technical-secondary audit

| Location | Text | Primary? | Need | Class |
| --- | --- | --- | --- | --- |
| TrajectorySurface | “exécution (W3-A)… AUTHORIZED… (fixture)” | Yes | No | REWORD / HIDE FROM PRIMARY |
| TrajectorySurface | “option de trajectoire W2” | Yes | No | REWORD |
| TrajectorySurface | Empreinte sémantique / fingerprint | Yes | Audit only | MOVE TO SECONDARY |
| TrajectorySurface | Trace d'autorité / receipt ref | Yes | Audit | MOVE TO SECONDARY |
| RecoverySurface / honesty banner | LPS / F2 / process-local | Yes | Honesty yes; jargon no | REWORD |
| ConversationSurface | Fixture chips / legacy fixture | Partial | Test path | HIDE FROM PRIMARY / RETIRE LATER |
| LPS/Conversation details | ckcResolutionRef | No (details) | KEEP TECHNICAL DETAILS |
| Context field seed | `REAL=0` in project context | Yes if user-entered | test seed only | n/a (seed) |
| data-testid | * | No | KEEP |

## 17. A11Y-PC-01→06

| ID | Inspected | Observation | Keyboard | Verdict | Proof | Future |
| --- | --- | --- | --- | --- | --- | --- |
| A11Y-PC-01 | terminals/gates text | SUCCESS/FAIL/CANCELLED textual; color not sole | — | **PARTIAL** | terminal captures | unify STOP vocabulary |
| A11Y-PC-02 | effectful buttons | Confirm/Execute/Authorize labeled | — | **PARTIAL** | SC-06/07 | F3 bundle clarity |
| A11Y-PC-03 | FAIL/STOP | text present | — | **PARTIAL** | SC-10/11 | STOP≠CANCELLED wording |
| A11Y-PC-04 | headings/landmarks | ProductShell+sections; order dense | Tab smoke entry | **PARTIAL** | A11Y-keyboard-* | landmark pass |
| A11Y-PC-05 | Confirmation | W2 confirm distinct; F3 confirm+execute conflates | — | **PARTIAL/GAP** | SC-06 · DUAL-f3 | split consent |
| A11Y-PC-06 | Evidence primary | evidence regions visible without modal maze | — | **PARTIAL** | SC-09 | business-first reorder |

**Claim:** A11Y-PC FUNCTIONAL BASELINE **PARTIAL** — not WCAG/AA/certified.
**A11Y rollup:** PASS 0 · PARTIAL 5 · GAP 1 (A11Y-PC-05 dual consent)

## 18. H-01→H-04 (candidates only — no Morris decision by Cursor)

| H | Hypothesis | Design proof | Runtime proof | Pros | Cons | Candidate disposition | Morris gate? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H-01 | Trajectory as LPS region not separate route | Wireframes/Screens CARRY | TrajectorySurface **below** conversation, not separate route — LPS is sidebar | Matches single workspace | Dense scroll; competes with conversation | **CARRY** / options: (a) keep stacked (b) tabbed workspace regions (c) LPS-integrated trajectory — **recommend (a) ADAPT density first** | **YES** before structural layout change |
| H-02 | 1440/1024/390 refs | Screens SC-R* | Captured trio | Useful QA refs | Not formal breakpoints doctrine | **CARRY** | No for continuing PE; Yes to close as doctrine |
| H-03 | Evidence in-workspace | Screens | Evidence in conversation/trajectory cards | No separate mode | Hierarchy noisy | **CARRY** → ADAPT hierarchy | No unless new Evidence mode proposed |
| H-04 | Empty single primary CTA | Screens | Entry empty not deeply audited | — | — | **CARRY** | No |

## 19. Asset classification

| Asset | Current | Target | Class | Justification | Exit if RETIRE | Parallel risk |
| --- | --- | --- | --- | --- | --- | --- |
| ProductShell | `/studio` chrome | same | KEEP/ADAPT | Canonical shell | — | Low |
| ProjectsPage | S1 | S1 | KEEP/ADAPT | Entry | — | Low |
| NewProjectIntentionPage | S2 provisional | S2 PE | ADAPT/COMPLETE | Functional OK | — | Low |
| ProjectWorkspacePage | composer | single PE composition | ADAPT | Hosts dual path | — | **High** |
| ConversationSurface | F2/F3 | dialogue+qualify | KEEP/ADAPT | Nora voice | — | High if keeps execute |
| LpsSurface | LPS | LPS | KEEP/ADAPT | State | — | Low |
| TrajectorySurface | W2/W3 | canonical decide/EC/exec | KEEP/ADAPT | Closed-wave capabilities | — | High vs F3 |
| HistorySurface | F9 | S7 | KEEP/ADAPT | Durable | — | Low |
| RecoverySurface | F10 | S8 | KEEP/ADAPT | Honesty | — | Low |
| useProductConversation | F2/F3 controller | dialogue controller | KEEP/HARVEST exec | Split concerns later | — | Med |
| presentationLabels | shared FR | PE vocabulary | ADAPT | Jargon source | — | Med |
| `/studio/**` routes | product | product | KEEP | Canonical | — | — |
| Legacy routes | POC | non-product | HARVEST/RETIRE LATER | Not ProductShell | Proof unused + redirect policy | Medium |
| E2E helpers `/studio` | proof | proof | KEEP | W4 captures reuse | — | — |
| REPLACE | — | — | **none proven** | No incompatibility requiring replace | — | — |
| FREEZE | FinOps/T7 · REAL | — | FREEZE | Per Morris | — | — |

## 20. Implementation delta lock (proposed — NOT executed)

R18: few coherent user-capability slices.

### W4-B (recommended FIRST Cycle 8 Delivery slice)
| Field | Value |
| --- | --- |
| ID | **W4-B** — Single Authority Path & Business-First Labels |
| User outcome | One decide→authorize→execute path on `/studio`; primary UI business language |
| US | US-P1-10 (primary) · US-P1-13 (A11Y-PC-05/02 partial) |
| UF | UF-03 · UF-04 · UF-05 |
| Surfaces | S4 · S6 · S10 · S11 · S12 |
| SC | SC-04 · SC-05 · SC-06 · SC-07 · SC-08–11 presentation |
| A11Y | A11Y-PC-02 · 05 · 01/03 |
| Assets | KEEP Trajectory W2/W3 · KEEP Conversation dialogue · ADAPT/HARVEST F3 execute · ADAPT presentationLabels |
| Candidate files | `TrajectorySurface.tsx` · `ConversationSurface.tsx` · `ProjectWorkspacePage.tsx` · `presentationLabels.ts` · related CSS modules |
| Tests | adapt W3a/b/c e2e; add PE dual-path negative (F3 execute hidden or redirected); unit label tests |
| Captures after | SC-04…11 single-path 1440 + responsive |
| Deps | none new packages; consume W3 CLOSED |
| Blockers | none product; ChatGPT must lock slice before code |
| Stop | any new parallel path; REAL; C6 reopen; Penpot mutation |
| Exit proof | deterministic `/studio` path shows single authority sequence; dual execute gone or fail-closed; labels pass business-first checklist |
| Debt | F3 code RETIRE LATER after harvest |
| Risk | CRITICAL — authority representation |
| Morris gate | **Yes** if structural H-01 layout change included; **No** if labels+path convergence only within existing stack |

### W4-C — Evidence / Recovery / Replan PE fidelity
- UF-05/06/07 · SC-09…13 · A11Y-PC-06 · H-03
- COMPLETE Evidence hierarchy; ADAPT Recovery copy; observe SC-12

### W4-D — S2 visual COMPLETE + responsive/empty (H-02/H-04) + legacy entry risk
- SC-02 COMPLETE vs Screens when Penpot exports available
- Optional root `/` redirect policy (Morris)
- US-P1-13 remaining A11Y-PC-04 pass

### W4-E — UAT / Product Experience exit checklist
- Formal UAT against SC-01…14 · UF-01…07 · A11Y-PC
- Only after W4-B/C(/D) evidence

**Smallest coherent set:** W4-B → W4-C → W4-D → W4-E (4 slices). Do **not** open 12 surface slices.

## 21. Blockers / non-blockers

### Blockers for declaring PE exit / US-P1-10 SATISFIED
- Dual authority path F2/F3 + W2/W3 on same workspace
- Primary technical jargon (AUTHORIZED/W3-A/fixture/fingerprint)
- A11Y-PC-05 Confirmation confusion (F3 confirm+execute)

### Non-blockers for W4-A baseline usefulness
- Missing local Penpot PNG exports (limits visual verdict only)
- SC-12 / SC-14 not observed this run
- SC-07 blocked variant not captured (AUTHORIZED captured)
- Roadmap metadata lag
- S2 PROVISIONAL comments
- Legacy routes not linked from ProductShell

## 22. Réserves
- SC-02 evidence-framing historical NON-BLOCKING reserve remains
- H-01…H-04 CARRY
- Confirmation process-local debt
- REAL OUT / FinOps FREEZE / runtime v3 NON ADOPTED
- Capture filename typo `SC-SC-10/11-*` (cosmetic in tmp only)

## 23. Project files modified
**AUCUN** (expected and observed).

## 24. Temporary artefacts created
- `.tmp-sfia-review/chatgpt-review.md` (this pack)
- `.tmp-sfia-review/runtime-captures/w4-a-baseline/**`
- `.tmp-sfia-review/w4-a-*.ts` / logs / db path / node_modules symlink
- `npm ci` restored `node_modules` under app (not versioned)

## 25. Tests / commands + results

| Command | Result |
| --- | --- |
| Local Git Truth vs `1e17367d…` | PASS |
| `npm ci` (app) | OK — lockfile unchanged |
| Playwright W4-A baseline capture | **1 passed** (~1.3m) |
| Playwright W2 supplement | **1 passed** (~8s) |
| Penpot MCP board list | 504 UNAVAILABLE |
| Full suite | not run (targeted sufficient) |

## 26. Git final state
- HEAD `1e17367d01cab95a4853a8857ed39867ea396ed3` · origin/main `1e17367d01cab95a4853a8857ed39867ea396ed3`
- status:
```
?? .tmp-sfia-review/
```
- Versioned diff: **empty**

## 27. Claims

### Authorized
- W4 Delivery umbrella AUTHORIZED BY MORRIS
- W4-A baseline audit EXECUTED
- W1/W2/W3 closed per sources; C6 closed
- Runtime states observed on deterministic `/studio`
- PASS/PARTIAL/GAP as tabulated
- Product Experience implementation delta **candidate**
- Recommended first Cycle 8 slice **W4-B** (not authorized automatically)

### Forbidden (not claimed)
- W4 CLOSED · Product Completion COMPLETE · US-P1-10/13 SATISFIED
- WCAG/AA certified · Penpot pixel fidelity
- REAL BOUNDARY PROVEN · READY FOR REAL · runtime v3 ADOPTED
- H-01…04 decided by Cursor · C6 reopened · legacy RETIRED
- Next Delivery slice auto-authorized · project push/PR/merge

## 28. Verdict

**W4-A BASELINE PARTIAL — EVIDENCE GAP REMAINS — CHATGPT REVIEW REQUIRED BEFORE DELIVERY SLICE**

Rationale: runtime baseline + contract matrices + dual-path convergence map + delta lock are produced without product mutation; remaining evidence gaps (Penpot direct visual, SC-12/14, SC-07 blocked variant, W3 mid-running latch) prevent “COMPLETE” while still enabling ChatGPT to challenge W4-B.

---

## Instruction ChatGPT

Lire le handoff canonique distant: `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier: cycle W4-A · branche/HEAD/origin/main · Morris W4 GO · aucune modif produit · matrices S/UF/SC/A11Y · captures/manifest · Penpot UNAVAILABLE · dual-path map · H-01…04 candidates · delta lock · réserves · Fake/Real · verdict · handoff SHA.

Puis: challenger le delta · qualifier blockers · décider si W4-B est assez verrouillé · préparer le prompt Cursor Cycle 8 Delivery si applicable.

**Cursor ne démarre pas W4-B de lui-même.**
