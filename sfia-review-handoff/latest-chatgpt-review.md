# SFIA Studio — W4-A2 Review Pack FULL — Penpot Direct Visual Evidence Supplement

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-08-26 12:40:00 CEST |
| **Cycle** | W4-A2 — PENPOT DIRECT VISUAL EVIDENCE SUPPLEMENT / W4-A VISUAL REVALIDATION |
| **Type** | 4 — UX/UI |
| **Profile** | CRITICAL |
| **Typology** | DOC / AUDIT READ-ONLY |
| **Product files modified** | **NONE** |
| **Penpot modified** | **NO** |
| **Tests modified** | **NONE** |
| **Git docs modified** | **NONE** |
| **Verdict candidate** | W4-A DIRECT VISUAL SUPPLEMENT PASS WITH RESERVES — PENPOT DIRECT EVIDENCE ACQUIRED — VISUAL GAPS QUALIFIED — READY FOR CHATGPT REVIEW |

---

## 1. Timestamp

- Local pack: `2026-08-26 12:40:00 CEST`
- Runtime captures: `2026-08-26T10:28:50Z` … `2026-08-26T10:28:56Z` (UTC)
- Penpot MCP inventory / visual renders: same session window 2026-08-26 ~12:25–12:40 CEST

## 2. Repo / active working tree

- `pwd` (primary): `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync`
- Repo: `mcleland147/sfia-workspace`
- Active W4-B branch: `delivery/sfia-studio-w4-b-single-authority-path`
- W4-B HEAD: `1e17367d01cab95a4853a8857ed39867ea396ed3` (+ uncommitted W4-B product diffs)
- `origin/main`: `1e17367d01cab95a4853a8857ed39867ea396ed3` (expected — PASS)

## 3. W4-B preservation snapshot BEFORE

Captured under `.tmp-sfia-review/w4-a2-preservation/`:

| Item | Value |
| --- | --- |
| status-before | see `status-before.txt` |
| git diff --binary SHA-256 | `c280d9f977f8c712bb57472e3d9775c8e468b818b58ea1afd6cc6099c4665918` |
| Untracked project file (excl. `.tmp-sfia-review`) | `projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts` |
| Untracked SHA-256 | `f9321e2e19b726332b6315889cb3583141a6c7205d44de23bcc85806713114d5` |

**Rule:** no checkout / reset / stash / clean of W4-B tree during this cycle.

## 4. Main / baseline commit

- Baseline for Penpot ↔ runtime compare: **`1e17367d01cab95a4853a8857ed39867ea396ed3`**
- This is pre-W4-B product truth on `origin/main` (W4-B changes remain uncommitted on delivery branch).

## 5. Temporary worktree path / commit

- Path: `/tmp/sfia-w4a2-baseline-nwpO9u`
- Mode: `git worktree add --detach` @ `1e17367d…`
- Status before use: clean (only symlink `node_modules` untracked)
- Purpose: runtime baseline only; **no versioned mutations**

## 6. Sources read

### Process (at `1e17367d`)
1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

### Convergence
5. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
6. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` — **documentary W4 lag acknowledged; NOT modified**; conversational Morris GO remains consumed authority.

### Product Completion
7–11. `01,02,03,05,06-product-completion-*.md`

### UX / PE
12–14. `ux-product-experience/01-experience-architecture.md`, `02-end-to-end-wireframes-interaction-model.md`, `03-product-screens-visual-state-contract.md`

### Doctrine v3
15–20. `sfia-v3-framing/30,32,33,34,35,37-*.md`

### W4-A original (exact commit — NOT current latest)
- `sfia/review-handoff` @ `669431c5d632d2ae2e190c71f6fe7dd5a97cc7b1`
- file: `sfia-review-handoff/latest-chatgpt-review.md`

### W4-B context ONLY (not re-audited)
- Handoff `71ded5847226aeb072915faee9573b763b391a90` — chronology / tree protection only.

## 7. Morris decision consumed

```
GO MORRIS — REVISIT W4-A WITH DIRECT PENPOT EVIDENCE —
RETRY PENPOT MCP —
RETRIEVE VALIDATED SCREENS / WIREFRAMES / USER FLOWS / STATES & EVIDENCE —
COMPARE AGAINST PRE-W4-B RUNTIME BASELINE —
READ ONLY —
PRESERVE W4-B WORKING TREE EXACTLY —
NO PRODUCT MUTATION —
NO PENPOT MUTATION —
NO W4-C —
NO PROJECT COMMIT / PUSH / PR / MERGE.
```

Authorizes **this read-only supplement only**. Does **not** close W4 / W4-A / W4-B / authorize W4-C.

## 8. Convergence pre-check

| Field | Value |
| --- | --- |
| Capability | Product Experience Closure |
| Milestone | W4 — Product Experience Closure |
| Backlog | US-P1-10 · US-P1-13 · UAT/PE exit · H-01…H-04 CARRY |
| Cycle type | Supplement to W4-A visual evidence |
| Next (not started) | ChatGPT/Morris validation → W4-B integration gate → only then possible W4-C requalification |
| Parallel architecture | FORBIDDEN |
| Assets | KEEP/ADAPT/COMPLETE/HARVEST; no REPLACE this cycle |

## 9. MCP inventory

| Namespace | Tools | Status |
| --- | --- | --- |
| `user-penpot` | `execute_code`, `export_shape`, `high_level_overview`, `penpot_api_info`, `mcp_auth` | **ready** |
| `plugin-figma-figma` | present | **NOT USED** (Figma fallback forbidden) |
| `cursor-ide-browser` | present | not required for Penpot |

**Hard rule satisfied:** Penpot was **actually read** in this cycle via MCP.

## 10. Penpot connection attempts

1. Light metadata via `execute_code` → file id `63bdc57a-636a-81ba-8008-82d2a50d5233` — **SUCCESS**
2. Page list via `penpot.currentFile.pages` — **SUCCESS** (6 pages)
3. `openPage` requires **await** (async) — discovered; used successfully
4. Root children inventories per page — **SUCCESS**
5. `export_shape` PNG for priority screens/WF — **SUCCESS** (agent vision)
6. Disk PNG persistence — **NOT AVAILABLE** via MCP

## 11. Exact MCP errors / retries

| Attempt | Result |
| --- | --- |
| Prior W4-A historical | 504 Gateway Timeout (documented in `669431c5`) |
| W4-A2 retry 1 | Connection live; Screens page current — SUCCESS |
| Sync `openPage` without await | Stale page / empty children — corrected by awaiting promise |
| SVG `export_shape` (prior session note) | empty / unusable — PNG mode used |
| Bounded retries for 504 this session | **0 needed** (MCP healthy) |

**Retry count (504):** 0 this cycle. Historical W4-A 504 superseded by successful reconnect.

## 12. Penpot file metadata

| Field | Value |
| --- | --- |
| File id | `63bdc57a-636a-81ba-8008-82d2a50d5233` |
| Live file name | `Nouveau fichier 1` |
| Role | REFERENCE DESIGN WORKSPACE (Morris) |
| Typography contractual | Inter |
| Mutation this cycle | **NONE** |

## 13. All page inventory

| Page | id | Top-level frames |
| --- | --- | --- |
| 00 — Foundations | `63bdc57a-636a-81ba-8008-82d2a50d9d35` | 7 (F00-01…07) |
| 01 — User Flows | `5de0e468-4bc9-80ee-8008-82d2f65e069f` | 8 |
| 02 — Wireframes | `5de0e468-4bc9-80ee-8008-82d2f6c1ab48` | 12 |
| 03 — Screens | `5de0e468-4bc9-80ee-8008-82d2f6f7e116` | **17** |
| 04 — Components | `5de0e468-4bc9-80ee-8008-82d2f737061e` | **0** |
| 05 — States & Evidence | `5de0e468-4bc9-80ee-8008-82d326931fc0` | 9 |

JSON: `.tmp-sfia-review/penpot-exports/w4-a2-direct/inventories/`

## 14. User Flows inventory

| id | name | w×h |
| --- | --- | --- |
| `c49c10a5-…9bfacc6c` | UF-01 — Project Entry | 700×352 |
| `c49c10a5-…9c3fd500` | UF-02 — Understand & Qualify | 700×352 |
| `c49c10a5-…9c85aa6c` | UF-03 — Trajectory & Decision | 700×352 |
| `c49c10a5-…9cc49cd9` | UF-04 — Prepare & Authorize Execution | 700×352 |
| `c49c10a5-…2f83c0e0e` | UF-05 — Execute & Understand Outcome | 700×368 |
| `c49c10a5-…2f868ae7f` | UF-06 — Learn & Replan | 700×368 |
| `c49c10a5-…2f8861b4c` | UF-07 — Resume Anywhere | 700×368 |
| `c49c10a5-…2f8a4a7d1` | UF-NOTE — Non-wizard constraints | 700×254 |

**Count:** 8 (7 flows + NOTE). Aligns with Git PE UF-01…07 + non-wizard note.

## 15. 12 Wireframe inventory

All 12 expected IDs confirmed directly on page 02:

| Board | id (suffix) | Confirmed |
| --- | --- | --- |
| WF-00 E2E Coverage / Navigation Map | `…83250baab017` | YES |
| WF-01 Project Entry — Create OR Resume | `…83250b4fd067` | YES (+ visual export) |
| WF-02 Workspace — Conversation + LPS + Qualification | `…8322d50b0dc3` | YES |
| WF-03 Trajectory + Option + Recommendation + HumanDecision | `…8322f54f18d9` | YES |
| WF-04 ExecutionContract — Summary → Detail | `…8322f5b59a17` | YES |
| WF-05 Confirmation / Authority / Authorization Blocked | `…83250afe1905` | YES |
| WF-06 Attempt Running / Guardrails | `…83231641cad4` | YES |
| WF-07 SUCCESS / STOP / FAIL + Evidence | `…83231689a015` | YES |
| WF-08 Nora Analysis + Replanning + Recovery | `…832316dc8683` | YES |
| WF-09 Empty / Loading / Error / Blocked | `…83231709a107` | YES |
| WF-R01 Workspace / Trajectory responsive | `…83233ae97e9c` | YES |
| WF-R02 EC / Evidence / Recovery responsive | `…83233b51b13d` | YES |

## 16. 17 Screen inventory

Direct page 03 read — **17 boards** — names match Git `03-product-screens-visual-state-contract.md` historical set:

| # | Exact name | id | w×h |
| --- | --- | --- | --- |
| 1 | SC-01 — Projects Entry / Resume | `f96faf07-…8342ef9ffbf6` | 1440×1020 |
| 2 | SC-02 — Create Project | `…8342f00967d2` | 1440×920 |
| 3 | SC-03 — Workspace / Qualification | `…8342f04b1b3b` | 1440×1024 |
| 4 | SC-04 — Trajectory / Options / Recommendation / HumanDecision | `…8342f091da3d` | 1440×1024 |
| 5 | SC-05 — ExecutionContract Summary | `…834317179cb3` | 1440×1100 |
| 6 | SC-06 — ExecutionContract Detail / Confirmation Required | `…834317a7f741` | 1440×1120 |
| 7 | SC-07 — Authorization Blocked / Executor Insufficient | `…83431809b949` | 1440×920 |
| 8 | SC-08 — Attempt Running | `…8343184c4752` | 1440×920 |
| 9 | SC-09 — SUCCESS / Evidence | `…834340bfc1fe` | 1440×920 |
| 10 | SC-10 — STOP / Evidence / Next Action | `…8343411bf67a` | 1440×920 |
| 11 | SC-11 — FAIL / Recovery Action | `…8343416932ea` | 1440×920 |
| 12 | SC-12 — Nora Analysis / Replanning | `…834341afedfa` | 1440×920 |
| 13 | SC-13 — Recovery / Resume | `…83435d4a9af6` | 1440×920 |
| 14 | SC-14 — Empty / Loading / Error / Blocked | `…83435deabeb8` | 1440×980 |
| 15 | SC-R01 — Workspace / Trajectory Responsive | `…83435e88a090` | 1480×2700 |
| 16 | SC-R02 — EC / Confirmation Responsive | `…834375783f19` | 1080×1900 |
| 17 | SC-R03 — Evidence / Recovery Responsive | `…83437671266c` | 1080×1900 |

**Penpot vs Git screen count/names:** ALIGNED — no `PENPOT / GIT DESIGN CONTRADICTION` on inventory.

## 17. Components page state

- Direct: **0** top-level frames.
- Observation matches historical expectation. Not a decision; not a contradiction.

## 18. States & Evidence inventory

SE-01…SE-09 confirmed (Recommendation vs HD · Trajectory states · EC disclosure · Confirmation boundary · Attempt lifecycle · SUCCESS/STOP/FAIL · Evidence hierarchy · Recovery · Empty/Loading/Error/Blocked).

## 19. Penpot export manifest

Path: `.tmp-sfia-review/penpot-exports/w4-a2-direct/manifest.md`

| Metric | Value |
| --- | --- |
| Direct visual renders (export_shape) | 11 (SC-01…09, SC-13, WF-01) |
| Structure inventories | pages / UF / WF / SC / SE / Components JSON |
| Disk PNG files from MCP | **0** (vision-only) |
| Contact sheets | directory reserved; not generated (no durable PNG bytes) |
| Proof mode | DIRECT MCP VISUAL RENDER |
| Pixel-hash fidelity | **NOT CLAIMED** |

## 20. Runtime baseline setup

| Item | Value |
| --- | --- |
| Worktree | `/tmp/sfia-w4a2-baseline-nwpO9u` @ `1e17367d` |
| Port | 3030 |
| DB | temp SQLite |
| Provider | `OPS1_CONVERSATION_PROVIDER=fake` |
| REAL | 0 |
| Config | `.tmp-sfia-review/w4-a2-playwright.config.ts` |
| Spec | `.tmp-sfia-review/w4-a2-baseline-capture.spec.ts` |
| Result | **1 passed** (~13s) |

## 21. Runtime capture manifest

Path: `.tmp-sfia-review/runtime-captures/w4-a2-direct/` (+ `manifest.md`, `manifest-sha256.md`)

**Count:** 16 PNG

Includes: SC-01/02 trio viewports; workspace; F2 gate; W2 options/decision; EC summary/inspect; authz trio; **DUAL-f3-contract** (pre-W4-B dual-path evidence).

**Reserve:** `RT-SC-01-entry-1440.png` captured during loading (“Chargement…”) — list fidelity under-sampled at 1440; 1024/390 also entry.

## 22. 17-screen direct comparison matrix

Axes separated: **V** = Visual (Penpot↔runtime) · **I** = Interaction · **R** = Runtime proof.

| Penpot id | Exact name | dims | SC | S | UF | Runtime route/state | Capture | V | I | R | Exact differences | Sev | W4 impact | Disp. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `…ef9ffbf6` | SC-01 Projects Entry / Resume | 1440×1020 | SC-01 | S1 | UF-01 | `/studio` entry | RT-SC-01-* | PARTIAL | PARTIAL | PARTIAL | Penpot: status pills + Resume/Requalify/Evidence; runtime chrome simpler / loading capture | med | PE fidelity | ADAPT |
| `…f00967d2` | SC-02 Create Project | 1440×920 | SC-02 | S2 | UF-01 | `/studio/projects/new` | RT-SC-02-* | PARTIAL | PARTIAL | PASS | Penpot: Nom+Intention+Contexte+Créer+Annuler; runtime: Nom+Intention+Précisions+Créer (no peer Annuler); label wording differs | med | S2 provisional debt | ADAPT/COMPLETE |
| `…f04b1b3b` | SC-03 Workspace / Qualification | 1440×1024 | SC-03 | S3–S5 | UF-02 | workspace | RT-SC-03-workspace | PARTIAL | PARTIAL | PASS | Penpot H-01 Variant A: Trajectory **in LPS**; runtime: Conversation + **separate** TrajectorySurface + LPS | high | H-01 CARRY | KEEP layout pending Morris |
| `…f091da3d` | SC-04 Trajectory / Options / Rec / HD | 1440×1024 | SC-04 | S6 | UF-03 | W2 options/HD + F2 gate | RT-SC-04-* · f2-gate | PARTIAL | **GAP** | PASS | Penpot single Option/Rec/HD triad in conversation; runtime **dual** F2 decide + W2 decide | **P0** | dual-path | COMPLETE / converge |
| `…17179cb3` | SC-05 EC Summary | 1440×1100 | SC-05 | S10 | UF-04 | W2 EC summary | RT-SC-05 | PARTIAL | PARTIAL | PASS | Penpot Pilote-first 6 cards + Inspect primary; runtime denser / dual F3 presenter also present | med | EC density | ADAPT |
| `…17a7f741` | SC-06 EC Detail / Confirmation | 1440×1120 | SC-06 | S10/S11 | UF-04 | inspect + confirm | RT-SC-06 | PARTIAL | PARTIAL | PASS | Penpot Confirmation ≠ Execute + explicit consent; F3 path bundles confirm+execute | high | Confirmation conflation | ADAPT |
| `…1809b949` | SC-07 Authorization Blocked | 1440×920 | SC-07 | S11 | UF-04 | authz outcome | RT-SC-07-* | PARTIAL | PARTIAL | PARTIAL | Penpot blocked/insufficient designed; runtime capture AUTHORIZED-dominant; blocked variant thin | med | authority UX | ADAPT |
| `…184c4752` | SC-08 Attempt Running | 1440×920 | SC-08 | S12 | UF-05 | mid-run | _(thin)_ | PARTIAL | PARTIAL | PARTIAL | Penpot RUNNING + guards + legitimate Stop; runtime mid-state not separately captured | med | lifecycle | COMPLETE proof later |
| `…40bfc1fe` | SC-09 SUCCESS / Evidence | 1440×920 | SC-09 | S9/S12 | UF-05 | success evidence | _(W4-A hist / dual)_ | PARTIAL | PARTIAL | PARTIAL | Penpot business-first 1–4 + Voir Evidence; runtime IDs/fixture jargon still primary in places | high | Evidence hierarchy | ADAPT |
| `…411bf67a` | SC-10 STOP / Evidence / Next | 1440×920 | SC-10 | S9/S12 | UF-05 | STOP-adjacent | NOT this run | NOT OBSERVABLE | PARTIAL | PARTIAL | Structure in Penpot; runtime STOP vs CANCELLED mapping remains | med | terminals | ADAPT |
| `…416932ea` | SC-11 FAIL / Recovery Action | 1440×920 | SC-11 | S9/S8 | UF-05 | fail/timeout | NOT this run | NOT OBSERVABLE | PARTIAL | PARTIAL | Penpot FAIL+recovery CTA; runtime jargon in recovery copy | med | Recovery | ADAPT |
| `…41afedfa` | SC-12 Nora Analysis / Replanning | 1440×920 | SC-12 | S4–S6 | UF-06 | replan | NOT driven | NOT OBSERVABLE | NOT OBSERVABLE | NOT OBSERVABLE | Design present; E2E not exercised | med | UF-06 | COMPLETE later |
| `…5d4a9af6` | SC-13 Recovery / Resume | 1440×920 | SC-13 | S8 | UF-07 | recovery | _(honesty banner)_ | PARTIAL | PARTIAL | PASS | Penpot durable vs process-local split; runtime honesty banner present; copy still method-leaning | med | no false GO | ADAPT |
| `…5deabeb8` | SC-14 Empty / Loading / Error / Blocked | 1440×980 | SC-14 | multi | multi | states | entry loading only | PARTIAL | PARTIAL | PARTIAL | Principles in Penpot; systematic state capture incomplete | low | H-04 | ADAPT |
| `…5e88a090` | SC-R01 Workspace / Trajectory Responsive | 1480×2700 | SC-R01 | S3/S6 | — | 1440/1024/390 | RT responsive samples | PARTIAL | PARTIAL | PARTIAL | Boards exist; H-02 CARRY | med | H-02 | CARRY |
| `…75783f19` | SC-R02 EC / Confirmation Responsive | 1080×1900 | SC-R02 | S10/S11 | — | authz trio | RT-SC-07-*-vp | PARTIAL | PARTIAL | PARTIAL | Renders; density/overflow risks remain | med | H-02 | CARRY |
| `…7671266c` | SC-R03 Evidence / Recovery Responsive | 1080×1900 | SC-R03 | S9/S8 | — | limited | limited | PARTIAL | PARTIAL | PARTIAL | Under-sampled this run | low | H-02/H-03 | CARRY |

**Visual matrix rollup:** PASS 0 · PARTIAL 14 · GAP 0 (visual) · NOT OBSERVABLE 3 (SC-10/11/12 visual this pass)

**Interaction rollup (from matrix):** PASS 0 · PARTIAL 14 · **GAP 1 (SC-04 dual)** · NOT OBSERVABLE 1 (SC-12)

**Runtime rollup:** PASS 5 · PARTIAL 10 · GAP 0 · NOT OBSERVABLE 2

## 23. S1→S12 revalidation

| S | Visual vs Penpot | Interaction | Runtime | Notes vs W4-A |
| --- | --- | --- | --- | --- |
| S1 | PARTIAL | PARTIAL | PARTIAL | CONFIRMED entry job; richer Penpot list chrome |
| S2 | PARTIAL | PARTIAL | PASS | CONFIRMED S2 mismatch / provisional debt vs SC-02 |
| S3 | PARTIAL | PARTIAL | PASS | Shell exists; H-01 layout divergence **now Penpot-proven** |
| S4 | PARTIAL | PARTIAL | PASS | Conversation-first ≠ only; F2 jargon primary CONFIRMED |
| S5 | PARTIAL | PARTIAL | PASS | LPS present; not identical to Penpot LPS+trajectory region |
| S6 | PARTIAL | **GAP** | PASS | Dual F2/W2 CONFIRMED with Penpot single-path intent |
| S7 | PARTIAL | PARTIAL | PASS | History present |
| S8 | PARTIAL | PARTIAL | PASS | Honesty; Recovery jargon CONFIRMED |
| S9 | PARTIAL | PARTIAL | PARTIAL | Evidence hierarchy CONFIRMED gap |
| S10 | PARTIAL | PARTIAL | PASS | EC density / dual presenters CONFIRMED |
| S11 | PARTIAL | PARTIAL | PASS | Confirmation conflation (F3) CONFIRMED vs Penpot split |
| S12 | PARTIAL | PARTIAL | PARTIAL | Attempt lifecycle thinner than Penpot SC-08 |

**S rollup:** PASS 0 · PARTIAL 11 · GAP 1 · NOT OBSERVABLE 0

## 24. UF-01→07 revalidation

| UF | Verdict | Evidence |
| --- | --- | --- |
| UF-01 | PARTIAL | Penpot WF-01 Create OR Resume; runtime create+entry |
| UF-02 | PARTIAL | SC-03 / F2 gate |
| UF-03 | **GAP** | Dual decision paths vs Penpot single Option/Rec/HD |
| UF-04 | PARTIAL/GAP | Dual EC/confirm presenters; Penpot inspect→confirm≠execute |
| UF-05 | PARTIAL | Terminals reachable; STOP/FAIL under-sampled |
| UF-06 | NOT OBSERVABLE | SC-12 not driven |
| UF-07 | PARTIAL | Recovery honesty; no false GO observed |

**UF rollup:** PASS 0 · PARTIAL 4 · GAP 2 · NOT OBSERVABLE 1

## 25. SC-01→14 revalidation

See §22. **SC rollup:** PASS 0 · PARTIAL 11 · GAP 1 (SC-04) · NOT OBSERVABLE 2 (SC-12; SC-10/11 visual this pass) — consistent with W4-A, now **Penpot-backed** for visual axis on inspected screens.

## 26. A11Y-PC-01→06 revalidation

| ID | Design (Penpot) | Runtime | Verdict |
| --- | --- | --- | --- |
| A11Y-PC-01 textual statuses | Explicit pills SUCCESS/RUNNING/blocked | Textual gates present; some jargon | PARTIAL |
| A11Y-PC-02 protected actions identifiable | SC-06 orange protected label | Confirm/execute controls labeled | PARTIAL |
| A11Y-PC-03 STOP/FAIL without color | SE-06 / SC-10/11 textual | Terminals text+color; not color-only proven fail | PARTIAL |
| A11Y-PC-04 headings hierarchy | Clear SC hierarchy | Headings present; density issues | PARTIAL |
| A11Y-PC-05 Confirmation consent | Explicit checkbox SC-06 | W2 better; F3 bundles | PARTIAL / GAP on F3 path |
| A11Y-PC-06 primary Evidence readable | SC-09 business-first 1–4 | Technical IDs still compete | PARTIAL |

**No WCAG/AA claim.**

**A11Y rollup:** PASS 0 · PARTIAL 6 · GAP 0 (global) with F3 consent reserve.

## 27. H-01→04 evidence only (CARRY)

| Hypothesis | Penpot direct | Runtime | Status |
| --- | --- | --- | --- |
| H-01 structural layout | SC-03/04 annotate **Variant A — Trajectory in LPS** | TrajectorySurface separate below conversation | **CARRY** — Morris gate; Penpot preference ≠ Git adoption |
| H-02 viewport trio | SC-R01…R03 boards exist | 1440/1024/390 captures exist | **CARRY** |
| H-03 Evidence in-workspace | SC-09 in product frame | Evidence often in cards / dual path | **CARRY** |
| H-04 empty-state primary CTA | SC-01/14 principles | Entry CTA present; empty systematics thin | **CARRY** |

Cursor recommendation (non-binding): treat Penpot Variant A as **strong design evidence** for H-01 discussion; do **not** auto-adopt.

## 28. W4-A original findings — confirmed / changed

| W4-A finding | W4-A2 disposition | Basis |
| --- | --- | --- |
| DIRECT PENPOT VISUAL SOURCE UNAVAILABLE | **SUPERSEDED** | MCP live + inventories + export_shape visuals |
| VISUAL PIXEL-FIDELITY NOT PROVEN | **REFINED** → still not hash/pixel proven; **composition fidelity now PARTIAL-proven** | MCP vision ≠ disk pixel compare |
| Dual-path F2/F3 ↔ W2/W3 | **CONFIRMED** | Penpot single authority path vs runtime dual captures |
| S2 mismatch / provisional debt | **CONFIRMED** | SC-02 Penpot vs runtime form |
| Jargon primary | **CONFIRMED** | Runtime AUTHORIZED / fixture / W2 labels vs Penpot business-first |
| EC density | **CONFIRMED** | SC-05 Penpot Pilote-first vs denser runtime |
| Confirmation conflation | **CONFIRMED** | SC-06 Penpot split vs F3 confirm+execute |
| Evidence hierarchy | **CONFIRMED** | SC-09 / SE-07 vs runtime |
| Recovery jargon | **CONFIRMED** | SC-13 design vs runtime copy |
| Responsive state | **CONFIRMED as CARRY** | R boards + viewport captures |
| H-01…04 | **CARRY** | Penpot clarifies H-01 preferred variant visually |

## 29. Penpot / Git contradictions

**None structural** on:
- page set;
- 17 screen names/count;
- 12 wireframes IDs;
- Components = 0;
- UF-01…07 presence.

**Non-contradiction / CARRY tension:** Penpot SC-03/04 show H-01 Variant A as designed preferred layout while Git still marks H-01 CARRY — report as **Morris review topic**, not silent SoT flip.

## 30. Blockers / non-blockers

### Blockers for strong “pixel-perfect PASS”
- No durable Penpot PNG filesystem exports from MCP → cannot claim pixel-hash fidelity.

### Non-blocking reserves
- SC-01 loading capture
- SC-10/11/12 visual export_shape not all done
- Contact sheets absent
- UF-06 not runtime-driven
- H-01…04 CARRY

### Not blockers for this supplement’s purpose
- Dual-path gaps (already known; evidence enriched)
- W4-B uncommitted (preserved; out of mutate scope)

## 31. Precise W4 impact

- May **lift** W4-A reserve: *Penpot direct source unavailable*.
- Does **not** auto-close W4-A delivery; ChatGPT/Morris decide.
- Visual gaps now **qualified against Penpot**, enabling better W4-B integration gate judgment.
- Does **not** authorize W4-C.

## 32. Implications for already-executed W4-B — OBSERVATION ONLY

- W4-B (uncommitted) targets single authority path + business-first labels — **aligned in intent** with Penpot SC-04/WF-03 single Option/Rec/HD path and jargon reduction.
- This cycle **does not re-review** W4-B implementation, tests, or claim W4-B CLOSED/integrated.
- Post-W4-A2 ChatGPT may still require W4-B vs Penpot visual re-check **after** integration gate — out of scope here.

## 33. No W4-B re-review claim

**Explicit:** W4-B not re-audited. Tree preserved only.

## 34. No W4-C authorization

**Explicit:** W4-C not started / not authorized.

## 35. W4-B preservation snapshot AFTER

(Computed at pack finalization — must match BEFORE.)

| Item | Expected = BEFORE |
| --- | --- |
| Branch | `delivery/sfia-studio-w4-b-single-authority-path` |
| HEAD | `1e17367d…` |
| origin/main | `1e17367d…` |
| diff --binary SHA-256 | `c280d9f977f8c712bb57472e3d9775c8e468b818b58ea1afd6cc6099c4665918` |
| Untracked project SHA | `f9321e2e19b726332b6315889cb3583141a6c7205d44de23bcc85806713114d5` |

## 36. Final Git truth

- Primary worktree remains W4-B dirty tree untouched by product/doc/test edits.
- Only `.tmp-sfia-review/**` + Review Handoff branch publication allowed.
- Baseline worktree to be removed after handoff without deleting branches.

## 37. Claims / anti-claims

### Claims allowed
- Penpot MCP **read successfully** this cycle.
- Inventories of pages / UF / WF / Screens / Components / SE **direct**.
- Direct visual render of priority screens via `export_shape`.
- Pre-W4-B runtime baseline captures @ `1e17367d`.
- Comparison matrices produced on three axes.
- W4-A Penpot-unavailable reserve **candidate to supersede** (ChatGPT decides).

### Anti-claims (FORBIDDEN — not declared)
- W4-A CLOSED · W4-B CLOSED/integrated · W4 CLOSED · Product Completion COMPLETE · W4-C authorized · H-01…04 decided · WCAG · pixel-perfect · REAL · READY FOR REAL · runtime v3 ADOPTED

## 38. Verdict

**W4-A DIRECT VISUAL SUPPLEMENT PASS WITH RESERVES — PENPOT DIRECT EVIDENCE ACQUIRED — VISUAL GAPS QUALIFIED — READY FOR CHATGPT REVIEW**

Rationale:
1. Penpot direct source **available and read**.
2. Structure + substantial visual renders acquired.
3. Gaps vs runtime **qualified** (dual-path, H-01 layout, S2, jargon, EC/Confirmation/Evidence).
4. Pixel-hash / full 17-screen disk export **not** proven → reserves remain honest.
5. No product/Penpot/Git mutation; W4-B tree preservation required to verify at close.

---

## Appendix A — Fake / Real

| Level | Status |
| --- | --- |
| DETERMINISTIC PRODUCT-NATIVE PROVEN | entry consumed from W3 |
| DIRECT PENPOT DESIGN EVIDENCE | **ACHIEVED** (this cycle) |
| DETERMINISTIC RUNTIME VISUAL / INTERACTION BASELINE | **ACHIEVED** @ `1e17367d` |
| REAL BOUNDARY / E2E REAL / READY FOR REAL | **OUT** |

## Appendix B — Artifact index

| Artifact | Path |
| --- | --- |
| Review Pack | `.tmp-sfia-review/chatgpt-review.md` |
| Penpot manifest | `.tmp-sfia-review/penpot-exports/w4-a2-direct/manifest.md` |
| Penpot inventories | `.tmp-sfia-review/penpot-exports/w4-a2-direct/inventories/` |
| Runtime captures | `.tmp-sfia-review/runtime-captures/w4-a2-direct/` |
| Preservation | `.tmp-sfia-review/w4-a2-preservation/` |
| Baseline worktree | `/tmp/sfia-w4a2-baseline-nwpO9u` |
