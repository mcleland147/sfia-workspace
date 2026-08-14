# Review Pack FULL — MERGE M4 POST-MERGE ROADMAP SYNC PR #345

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-08-14 10:31:30 CEST (+0200) |
| **Timezone** | Europe/Paris |
| **Level** | FULL |
| **GO consumed** | GO MORRIS — MERGE M4 POST-MERGE ROADMAP SYNC PR #345 |
| **Cycle** | 14 — Post-merge |
| **Complementary block** | PR merge / controlled integration |
| **Profil SFIA** | Standard |
| **Typologie v2.4** | DOC |
| **CKC recherché** | oui |
| **Cycle qualifié** | 14 — Post-merge |
| **CKC détaillé trouvé** | non |
| **CKC fallback** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` |
| **CKC statut** | method-candidate |
| **CKC usage** | experimental cognitive guidance |
| **CKC autorité** | aucune autorité d'exécution |
| **CKC posture** | clôture honnête / sync / réserves / suite |
| **CKC limite** | ne pas inventer de CKC détaillé |
| **Repository** | mcleland147/sfia-workspace |
| **PR** | [#345](https://github.com/mcleland147/sfia-workspace/pull/345) |
| **Previous handoff** | `8d808ad4599fb2a2c5b5543e1774b8574c66c201` |

## 1. Pre-merge Git / PR truth

```text
TOPLEVEL=.../worktrees/sfia-studio-m4-real-off
BRANCH=docs/sfia-studio-m4-post-merge-roadmap
HEAD=91fa0eb25fe29e833bd212a8f9097c2c039a3c97
origin/main (before)=ec65fb47c04b451d892297c806b9b041995339a5
ahead=1
tracked worktree=clean
staged=empty
untracked=.tmp-sfia-review/**
remote docs branch=91fa0eb25fe29e833bd212a8f9097c2c039a3c97
handoff remote=8d808ad4599fb2a2c5b5543e1774b8574c66c201
SFIA_STUDIO_CURSOR_REAL=<unset>
OPS1_CURSOR_REAL=<unset>
```

PR before merge:

| Field | Value |
| --- | --- |
| state | OPEN |
| isDraft | true → marked ready (`gh pr ready 345`) then merged |
| mergeable | MERGEABLE |
| mergeStateStatus | CLEAN |
| base | main |
| head | docs/sfia-studio-m4-post-merge-roadmap |
| headRefOid | `91fa0eb25fe29e833bd212a8f9097c2c039a3c97` |
| commits | 1 |
| changedFiles | 1 |
| additions / deletions | 78 / 62 |
| file | `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` |
| review threads | none |

**Identity: PASS.** origin/main had not advanced. Scope unchanged vs publication cycle.

## 2. PR CI (pre-merge)

SFIA Studio CI **#174** SUCCESS on head `91fa0eb25fe29e833bd212a8f9097c2c039a3c97`

Run: https://github.com/mcleland147/sfia-workspace/actions/runs/31783858097

| Check | Result |
| --- | --- |
| Detect SFIA Studio changes | SUCCESS |
| Build and validate SFIA Studio | SUCCESS (2m11s) |
| SFIA Studio Required Gate | SUCCESS |

**PR CI: GREEN**

No rerun. No project modification.

## 3. Merge execution

Canonical strategy: **merge commit** (same as PR #344 / #343 / #342).

```text
gh pr ready 345
gh pr merge 345 --merge
```

Forbidden flags not used: `--delete-branch`, `--force`, `--admin`, `--auto`, squash/rebase.

| Field | Value |
| --- | --- |
| **Merge commit** | `3575c8863d8a13b610dbfde96a33426a620b2c56` |
| **Parents** | `ec65fb47c04b451d892297c806b9b041995339a5` `91fa0eb25fe29e833bd212a8f9097c2c039a3c97` |
| **Subject** | Merge pull request #345 from mcleland147/docs/sfia-studio-m4-post-merge-roadmap |
| **mergedAt** | 2026-08-14T08:30:48Z |
| **mergedBy** | mcleland147 |
| **PR after** | MERGED · isDraft=false |
| **origin/main after** | `3575c8863d8a13b610dbfde96a33426a620b2c56` |
| **91fa0eb ancestor of origin/main** | yes |
| **Source branch retained** | `docs/sfia-studio-m4-post-merge-roadmap` @ `91fa0eb25fe29e833bd212a8f9097c2c039a3c97` |
| **Delivery branch retained** | `delivery/sfia-studio-m4-real-off` @ `f7270b21ccdbcf1cd543879e7c4120d87b874479` |
| **Branch cleanup** | NONE |
| **Local HEAD after merge** | still `91fa0eb…` on docs branch (no checkout of main required) |

First-parent diff `origin/main^1 origin/main`:

```text
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
1 file changed, 78 insertions(+), 62 deletions(-)
git diff --check = PASS
```

## 4. Complete PR body (as merged)

```markdown
# Summary

- synchronize the SFIA Studio Convergence Roadmap after M4 Delivery merge
- record PR #344 / merge ec65fb47
- record M4 REAL-OFF implementation now on main
- move the critical path to FIRST M4 CURSOR REAL READ-ONLY PROOF
- preserve all M4/M5/runtime anti-claims

# Git truth

Base:
ec65fb47c04b451d892297c806b9b041995339a5

M4 Delivery:
PR #344
head f7270b21ccdbcf1cd543879e7c4120d87b874479
merge ec65fb47c04b451d892297c806b9b041995339a5

CI:
SFIA Studio CI #172 SUCCESS on same head after Morris-authorized rerun.

T7-C08 diagnostic:
Class C / CI environment timing suspected;
M4 causality not established;
no code change between failure and successful rerun.

# Current M4 state

M4 Architecture:
CLOSED

M4 Delivery:
VALIDATED BY MORRIS
MERGED ON MAIN

REAL boundary:
IMPLEMENTED
DEFAULT OFF

Gate D:
IMPLEMENTED
NOT CONSUMED

Technical launch journal:
IMPLEMENTED
TEMPORARY WITH EXIT
≠ Product Store

Bounded RO AgentCapability:
IMPLEMENTED

Actual Cursor REAL:
0

FIRST REAL:
NOT AUTHORIZED
NEXT MORRIS GATE

M4 exit proof:
NOT SATISFIED

M5:
NOT AUTHORIZED

runtime v3:
NON ADOPTED

# Roadmap sections synchronized

- metadata
- B3
- B4
- B5
- B6
- M3 Next
- M4
- M5 dependency/status
- B9 F05/F11/F12
- B10
- references

# Anti-claims

M4 Delivery merged
≠ M4 milestone closed

REAL implementation merged
≠ Cursor REAL executed

Gate D implemented
≠ Gate D consumed

CREATED/LAUNCHED implementation
≠ M4 REAL exit proof

technical launch journal
≠ Product Store

FIRST REAL next
≠ FIRST REAL authorized

M4
≠ runtime v3 ADOPTED

Roadmap sync PR
≠ merge permission

# Scope

Exactly one tracked file:

projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

No code.
No Build Doctrine change.
No framing change.
No method/template change.

# Next gate

Merge of this Roadmap sync remains a separate Morris gate.

Only after this documentation is merged and main is verified may Morris separately authorize:

FIRST M4 CURSOR REAL READ-ONLY PROOF


```

## 5. Post-merge CI

Relieved once. No wait-to-green. No rerun.

SFIA Studio CI **#175** on `3575c8863d8a13b610dbfde96a33426a620b2c56`

- event: push
- status: queued
- url: https://github.com/mcleland147/sfia-workspace/actions/runs/31784204221

**POST-MERGE CI: PENDING**

PR CI GREEN remains the merge-gate evidence. Post-merge CI is observational only in this cycle.

## 6. Product state after documentary merge

Roadmap now on `origin/main` @ `3575c88…` still records M4 Delivery merge `ec65fb47…` as the product snapshot (correct: this PR is documentation of that state, not a new product SHA).

| Item | Status |
| --- | --- |
| M4 Architecture | CLOSED |
| M4 Delivery | VALIDATED BY MORRIS / MERGED ON MAIN (PR #344 @ `ec65fb47…`) |
| Roadmap sync | MERGED ON MAIN (PR #345 @ `3575c88…`) |
| REAL boundary | IMPLEMENTED / DEFAULT OFF |
| Gate D | IMPLEMENTED / NOT CONSUMED |
| Technical launch journal | IMPLEMENTED / TEMPORARY WITH EXIT / ≠ Product Store |
| Bounded RO AgentCapability | IMPLEMENTED |
| Actual Cursor REAL | 0 |
| FIRST REAL | NOT AUTHORIZED / NEXT MORRIS GATE |
| M4 exit proof | NOT SATISFIED |
| M5 | NOT AUTHORIZED |
| runtime v3 | NON ADOPTED |
| Cursor REAL this cycle | 0 |
| Gate D production consume | 0 |
| D-M4-01→05 | unchanged ADOPTED (not reopened) |

Anti-claims preserved:

- Roadmap sync merged ≠ M4 milestone closed
- REAL implementation merged ≠ Cursor REAL executed
- Gate D implemented ≠ Gate D consumed
- FIRST REAL next ≠ FIRST REAL authorized
- M4 ≠ runtime v3 ADOPTED

## 7. Full useful first-parent diff (what landed on main)

Source: `git diff origin/main^1 origin/main`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 0093edf..494d357 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,13 +6,13 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git** | origin/main @ `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
+| **Snapshot Git** | origin/main @ `ec65fb47c04b451d892297c806b9b041995339a5` |
 | **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
-| **Timestamp maintenance** | 2026-08-14 Europe/Paris — M4 ARCHITECTURE DECISIONS D-M4-01→05 ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED |
+| **Timestamp maintenance** | 2026-08-14 Europe/Paris — M4 DELIVERY REAL-OFF VALIDATED BY MORRIS + MERGED ON MAIN — FIRST REAL NOT AUTHORIZED |
 | **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
-| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
-| **Sources** | Git `main` @ `607763d9…` · PR #337/#339/#340/#341/#342 · CI #158/#162/#166 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · M3 Product path on main `projects/sfia-studio/app/**` |
-| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · M4 architecture decided **≠** M4 Delivery authorized · M4 architecture decided **≠** Cursor REAL authorized · Gate D model adopted **≠** Gate D implemented **≠** Gate D consumed · L7-1 adopted **≠** Critical Ack promoted **≠** Auth.js promoted · technical launch journal adopted for M4 **≠** Product Store promotion · ≠ runtime v3 ADOPTED · ≠ full OA durable |
+| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) |
+| **Sources** | Git `main` @ `ec65fb47…` · PR #337/#339/#340/#341/#342/#343/#344 · CI #158/#162/#166/#172 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · M4 Product path on main `projects/sfia-studio/app/**` |
+| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · M4 Delivery merged **≠** M4 exit proof satisfied · Gate D implemented **≠** consumed · REAL boundary implemented **≠** Cursor REAL executed · bounded agent implemented **≠** first REAL proof · M4 **≠** runtime v3 ADOPTED · technical launch journal implemented **≠** Product Store · ≠ full OA durable |

 ## B1. Nature du document

@@ -26,7 +26,7 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).

 ## B3. Point de départ factuel

-### Sur main (`607763d9a1349d6b48633d8763f75ae3c07c84fc`)
+### Sur main (`ec65fb47c04b451d892297c806b9b041995339a5`)

 | Capacité | État observé |
 | --- | --- |
@@ -39,25 +39,27 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | D1 SQLite projects | EXISTS — UI `/projects` parallèle |
 | execution-run D2-D | EXISTS — **non** branché F1–F3 |
 | FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
-| Product persistence | **SELECTED / ACTIVE** — `node:sqlite` OA Product Store (G0-B) · Project/LPS + CycleInstance M2 subset + HD/ExecutionContract M3 · **≠** persistence de tout le runtime |
+| Product persistence | **SELECTED / ACTIVE** — `node:sqlite` OA Product Store (G0-B) · Project/LPS + CycleInstance M2 subset + HD/ExecutionContract M3 · **≠** persistence de tout le runtime · technical launch journal M4 **≠** Product Store |
 | Architecture convergence | **Option 1 ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (G0-A) |
 | Project/LPS restart safety | **PROVEN / MERGED** (process A→B + CI #158) |
 | Autres OA (T-A2 CycleInstance M2 subset) | **Product SQLite — MERGED ON MAIN** (PR #339) — Cycle/LPS/CKC linkage durable + restart-safe (subset M2) |
-| Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **Memory partiel** — process-local |
+| Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5 Attempt product ; T-A6 Evidence) | **Memory partiel** — process-local |
 | Autres OA (T-A3 HD) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) ; Confirmation reste Memory/process-local |
-| Autres OA (T-A4 ExecutionContract) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) — PREPARE-only ; no Attempt/REAL |
-| Architecture M4 | **DECIDED / DELIVERY PENDING** — D-M4-01→05 **ADOPTED BY MORRIS** ; code REAL **NOT IMPLEMENTED** on main |
-| T-A5 REAL (Nora/Studio) | **MISSING ON MAIN** — fixture adapters only (`externalEffects:false`) |
-| Cursor REAL depuis Nora | **0** / DISABLED |
-| Gate D | **NOT CONSUMED** (model **ADOPTED** by D-M4-04 — **NOT IMPLEMENTED**) |
+| Autres OA (T-A4 ExecutionContract) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) — PREPARE-only ; Attempt product still Memory |
+| Architecture M4 | **ADOPTED + IMPLEMENTED ON MAIN** — D-M4-01→05 via PR #344 · Delivery **VALIDATED BY MORRIS / MERGED** · FIRST REAL **NOT AUTHORIZED** |
+| T-A5 REAL (Nora/Studio) | **IMPLEMENTED ON MAIN / DEFAULT OFF** — specialized OA-owned boundary (`RealExecutionLaunchPort` / `NodeCursorProcessRunner` / isolated worktree) ; fixture `externalEffects:false` **preserved** ; **no REAL invocation yet** |
+| Cursor REAL depuis Nora | **0** / **NOT AUTHORIZED** |
+| Gate D | **IMPLEMENTED ON MAIN** (GD-1) · **NOT CONSUMED** |
+| Technical CREATED/LAUNCHED frontier | **IMPLEMENTED ON MAIN** · **TEMPORARY WITH EXIT** · ≠ Product Store |
+| Bounded RO AgentCapability | **IMPLEMENTED ON MAIN** · static / deny-by-default · **not exercised in REAL yet** |

-### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`)
+### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`) — historique / harvest

 | Élément | État |
 | --- | --- |
-| Auth.js GitHub + Critical Ack composition | Inspecté (handoff `366726945f…`) ; **pas sur HEAD** ; bundle **NOT promotion-ready** (pre-M3 dirty) |
-| SqliteAuthorityAttemptJournal / CREATED·LAUNCHED wiring | Inspecté ; concept = **HARVEST/ADAPT source** for D-M4-02 ; ≠ Product Store ; **NOT IMPLEMENTED** on main |
-| Classification | Observation / harvest source — **Auth/Ack bundle ≠ promotion** (D-M4-05) ; journal concept **DECIDED** as TEMPORARY WITH EXIT for M4 Delivery future |
+| Auth.js GitHub + Critical Ack composition | Inspecté (handoff `366726945f…`) ; **pas sur HEAD** ; bundle **NOT promotion-ready** (pre-M3 dirty) — D-M4-05 still **DEFER / NOT PROMOTED** |
+| SqliteAuthorityAttemptJournal / CREATED·LAUNCHED wiring | Inspecté comme **HARVEST/ADAPT source** for D-M4-02 ; **superseded as current state** — technical launch journal **IMPLEMENTED ON MAIN** via PR #344 (TEMPORARY WITH EXIT ; ≠ Product Store) |
+| Classification | Observation / harvest source — **Auth/Ack bundle ≠ promotion** (D-M4-05) ; journal concept harvested into M4 Delivery |

 ### Recommandation d’audit (historique — supersédée)

@@ -75,21 +77,21 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | T-A2 Cycle/CKC | Product SQLite CycleInstance + F2/CKC/LPS linkage (PR #339) | **COMPLETE** (M2) / **KEEP** backbone | CycleInstance durable + restart-safe on main ; Trajectory/Epistemic restent Memory |
 | T-A3 HD/Confirm/Authority | Product SQLite HD **ON MAIN** (PR #341) + Confirmation Memory + local Morris authority TEMPORARY WITH EXIT | **COMPLETE** (M3) / **KEEP** backbone | HD durable on main ; Confirmation process-local ; Auth.js exit ouvert |
 | T-A4 ExecutionContract | Product SQLite + M3 PREPARE truthful + Cursor projection PREPARE-only **ON MAIN** (PR #341) | **COMPLETE** (M3) / **KEEP** backbone | Durable on main ; no Attempt/REAL ; fixture path historique/test conservé |
-| T-A5 Attempt / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` | **KEEP** core lifecycle + **KEEP** zero-effect port | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) |
-| T-A5 specialized REAL boundary | MISSING on main | **ADAPT / COMPLETE in M4 Delivery** | OA-owned `RealExecutionLaunchPort` / `CursorCliLaunchGateway` (or equiv.) — **no** OA→OPS1 product runtime coupling (D-M4-01) |
-| T-A5 launch journal (CREATED/LAUNCHED) | MISSING on main | **TEMPORARY WITH EXIT — DECIDED FOR M4** (D-M4-02) | Technical safety journal ; ≠ Product Store ; ≠ dual product persistence ; exit → Attempt/Evidence durable path M5+ / dedicated Morris gate |
-| AgentCapability REAL RO profile | Fixture agent only | **KEEP** model / **ADAPT** bounded REAL read-only profile (D-M4-03) | Static immutable deny-by-default registry retained ; no live registry for M4 |
+| T-A5 Attempt / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` · PR #344 | **KEEP** core lifecycle + **KEEP** zero-effect port | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) |
+| T-A5 specialized REAL boundary | PR #344 / main `ec65fb47…` | **COMPLETE M4 Delivery / KEEP** | OA-owned `RealExecutionLaunchPort` / `CursorCliLaunchGateway` / `NodeCursorProcessRunner` / `StudioGitWorktreeWorkspace` — **implemented, default OFF** — **no** OA→OPS1 product runtime coupling (D-M4-01) — **no REAL invocation yet** |
+| T-A5 launch journal (CREATED/LAUNCHED) | PR #344 / main `ec65fb47…` | **TEMPORARY WITH EXIT — IMPLEMENTED** | Technical safety journal ; ≠ Product Store ; ≠ dual product persistence ; crash/replay tests merged ; exit → Attempt/Evidence durable path M5+ / dedicated Morris gate |
+| AgentCapability REAL RO profile | PR #344 / `m4BoundedReadOnlyCursorAgent` | **COMPLETE M4 Delivery / KEEP** | Static immutable deny-by-default registry retained ; bounded RO profile **implemented** ; **not actually exercised in REAL yet** |
 | T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
 | T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
 | Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
 | F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
-| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition root Studio |
+| vertical-slice-runtime | `wireOaStack` · PR #344 comments only | **KEEP** / **ADAPT** | Composition root Studio ; REAL boundary **intentionally not wired by default** (M4 REAL-OFF) |
 | OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable ; harvest ≠ call OPS1 runtime from OA |
 | execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
 | D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
 | FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
 | Auth.js / Critical Ack candidate | dirty only (inspected) | **DEFER for first RO** (D-M4-05) · **NOT PROMOTED** | Not a prerequisite of first M4 read-only proof ; remains candidate for future N2/N3 / IAM gate ; debt **preserved** |
-| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **REPLACE** progressif (T-A1 + T-A2 + T-A3 HD + T-A4 ExecutionContract = SQLite Product **ON MAIN through M3**) | Attempt/Evidence/Trajectory/Confirmation restent process-local ; launch journal future = technical TEMPORARY WITH EXIT (≠ Product Store) |
+| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5 Attempt product ; T-A6) | **REPLACE** progressif (T-A1 + T-A2 + T-A3 HD + T-A4 ExecutionContract = SQLite Product **ON MAIN through M3**) | Attempt/Evidence/Trajectory/Confirmation restent process-local ; M4 technical launch journal **IMPLEMENTED** TEMPORARY WITH EXIT (≠ Product Store ; does **not** close Product persistence debt) |

 ## B5. Gap map → boucle cible

@@ -98,21 +100,21 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | Project/LPS durable | **MERGED ON MAIN — EXIT PROOF SATISFIED** (PR #337) | — |
 | GuidedSession / historique durable | PARTIAL / MISSING — **DEFERRED** (dette optionnelle Roadmap) | usage quotidien / milestone ultérieur |
 | CycleInstance réel lié F2 | **CLOSED ON MAIN — M2** (PR #339) — Product SQLite + F2 wire + restart proof | — |
-| HumanDecision durable/authoritative | **CLOSED ON MAIN — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT (durabilité HD fermée ≠ IAM product-grade fermé) | M4 Gate D / future IAM (Ack **not** absolute for first RO — D-M4-05) |
+| HumanDecision durable/authoritative | **CLOSED ON MAIN — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT (durabilité HD fermée ≠ IAM product-grade fermé) | FIRST REAL Gate D consumption / future IAM (Ack **not** absolute for first RO — D-M4-05) |
 | CKC ↔ cycle binding | **CLOSED ON MAIN — M2** — `ckcResolutionRef` projection on LPS | — |
 | live contextSnapshot | **CLOSED ON MAIN — M2** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
-| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | M4 REAL Delivery |
-| Cursor projection canonique | **CLOSED ON MAIN — M3 PREPARE-only** (`executionAllowed=false`) | M4 |
-| Cursor REAL behind T-A5 | **MISSING ON MAIN** — **ARCHITECTURE DECIDED — DELIVERY GAP OPEN** (D-M4-01→05) | M4 Delivery |
-| REAL specialized adapter boundary | **DECIDED — NOT IMPLEMENTED** (D-M4-01 Option B) | M4 Delivery |
-| durable launch frontier (CREATED/LAUNCHED) | **DECIDED — NOT IMPLEMENTED** (D-M4-02 TEMPORARY WITH EXIT) | M4 Delivery — main does **not** yet prove REAL crash-safe replay |
-| Gate D durable grant | **DECIDED MODEL — NOT IMPLEMENTED / NOT CONSUMED** (D-M4-04 GD-1) | M4 Delivery + future first-REAL GO |
-| bounded REAL AgentCapability RO | **DECIDED — NOT IMPLEMENTED** (D-M4-03) | M4 Delivery |
+| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | FIRST REAL (separate Morris GO) |
+| Cursor projection canonique | **CLOSED ON MAIN — M3 PREPARE-only** (`executionAllowed=false`) | FIRST REAL |
+| Cursor REAL behind T-A5 | **IMPLEMENTATION MERGED / DEFAULT OFF / FIRST REAL PROOF NOT PERFORMED** (PR #344) | FIRST M4 CURSOR REAL READ-ONLY PROOF — MORRIS GO REQUIRED |
+| REAL specialized adapter boundary | **CLOSED ON MAIN — PR #344** — implemented, default OFF | FIRST REAL proof |
+| durable launch frontier (CREATED/LAUNCHED) | **IMPLEMENTED ON MAIN — PR #344** — TEMPORARY WITH EXIT · REAL proof still pending | FIRST REAL + future Attempt/Evidence exit |
+| Gate D durable grant | **IMPLEMENTED ON MAIN** (GD-1) · **NOT CONSUMED** · first REAL consumption pending Morris gate | FIRST REAL |
+| bounded REAL AgentCapability RO | **IMPLEMENTED ON MAIN** · first real use pending | FIRST REAL |
 | Critical Ack UI | CANDIDATE / MISSING — **NOT BLOCKING FIRST M4 READ-ONLY PROOF BY D-M4-05** ; remains for future N2/N3 / IAM | future N2/N3 · IAM gate |
 | Evidence durable | MISSING | M5 |
 | ReviewBundle → LPS writeback | MISSING | M5/M6 |
 | Nora post-exec analysis | PARTIAL (UI cards) | M5 |
-| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle/HD/ExecutionContract **restart-safe ON MAIN** ; conversation/proposal/Confirmation/Attempt/Evidence Memory ; **REAL crash-safe replay not proven on main** (D-M4-02 defines future fail-closed frontier) | M4+ |
+| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle/HD/ExecutionContract **restart-safe ON MAIN** ; conversation/proposal/Confirmation/Attempt product/Evidence Memory ; M4 crash/replay **protections implemented and tested** (PR #344) but **no Cursor REAL process has consumed this path yet** | FIRST REAL / M5+ |
 | IAM/authz product-grade | PARTIAL / MISSING (M3 local authority temporary ; Auth.js candidate **NOT PROMOTED**) — **not** a blocker of first RO proof (D-M4-05) ; debt preserved | future IAM gate / M8 |

 ## B6. Decisions / gates
@@ -138,6 +140,10 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 - head M3 `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` · CI SFIA Studio **#166** SUCCESS
 - exit proof HumanDecision/LPS/ExecutionContract + restart PREPARE + fingerprint + unresolved semantics **SATISFIED**
 - merge gate M3 **CLOSED**
+- **M4 Delivery** **VALIDATED BY MORRIS** · PR #344 merged on main @ `ec65fb47c04b451d892297c806b9b041995339a5`
+- head M4 Delivery `f7270b21ccdbcf1cd543879e7c4120d87b874479` · CI SFIA Studio **#172** SUCCESS (Morris-authorized rerun, exact same head ; initial T7-C08 Class C / M4 causality not established)
+- merge gate M4 Delivery **CLOSED**
+- M4 exit proof **NOT SATISFIED** (FIRST REAL pending)

 ### M4 Architecture Decisions — CONSUMED BY MORRIS

@@ -153,11 +159,19 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53

 **Supersession :** the prior Roadmap dependency “promotion Ack” for the **first M4 read-only proof** is **superseded by D-M4-05**. This does **not** delete Ack/Auth debt from the trajectory.

+### M4 Delivery — CONSUMED / MERGED
+
+- M4 Delivery GO : **CONSUMED**
+- M4 Delivery validation : **CONSUMED — VALIDATED BY MORRIS**
+- Commit / push / PR : **CONSUMED — PR #344**
+- Merge : **CLOSED — PR #344** merge `ec65fb47c04b451d892297c806b9b041995339a5`
+- CI : **#172 SUCCESS** on same head `f7270b21` after authorized rerun (no code change)
+
 ### Décisions / gates toujours ouverts

-1. **M4 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**
-2. First Cursor REAL proof — separate Morris GO **after** Delivery validation — **NOT AUTHORIZED**
-3. Gate D first REAL consumption — part of that future REAL gate — **NOT CONSUMED** (model only)
+1. **FIRST M4 CURSOR REAL READ-ONLY PROOF** — **MORRIS GO REQUIRED** — **NOT AUTHORIZED**
+2. Gate D first production / REAL consumption — part of that future FIRST REAL gate — **NOT CONSUMED**
+3. **M4 exit proof** — **NOT SATISFIED**
 4. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
 5. Disposition OPS1 / D1 / execution-run — **Decision Required**
 6. **M5** — **NOT AUTHORIZED**
@@ -166,7 +180,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 ### Décisions / gates historiques encore listés (non tranchés comme promotion)

 - Auth.js / Critical Ack promotion for elevated classes — open (see D-M4-05)
-- Cursor REAL enablement — open (architecture decided ≠ authorized)
+- Cursor REAL enablement — open (implementation merged / default OFF **≠** FIRST REAL authorized)
 ## B7–B8. Roadmap capability-driven (milestones)

 ### Gate 0 — Convergence architecture / persistence
@@ -247,7 +261,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Merge** | **CLOSED** — PR #341 MERGED @ `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS |
 | **Exit evidence** | **EXIT PROOF SATISFIED ON MAIN** |
 | **Preuve e2e** | GO → HD durable + LPS N+1 · restart → PREPARE sans Proposal · ExecutionContract durable · fingerprint persisted=recomputed=projection · unresolved semantics fail-closed · Cursor PREPARE-only · authority adversarial PASS · local 1656 / 131 / 0 · CI #166 SUCCESS · merge #341 |
-| **Next** | M4 — **ARCHITECTURE DECISIONS ADOPTED** — **DELIVERY NOT AUTHORIZED — MORRIS GO REQUIRED** |
+| **Next** | FIRST M4 CURSOR REAL READ-ONLY PROOF — **MORRIS GO REQUIRED** *(M4 Delivery MERGED)* |
 | **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

 ### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio
@@ -257,14 +271,14 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **ID** | M4 |
 | **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
 | **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
-| **État actuel** | **ARCHITECTURE DECISIONS ADOPTED** — **DELIVERY NOT STARTED / NOT AUTHORIZED** · F3 fixture only on main · OPS1 REAL parallèle · Cursor REAL DISABLED |
-| **Architecture selected (D-M4-01→05)** | specialized REAL OA boundary (Option B) · temporary durable launch journal CREATED/LAUNCHED · bounded RO AgentCapability · durable Gate D GD-1 · L7-1 for first RO |
-| **Actifs** | T-A5 lifecycle **KEEP** · fixture port `externalEffects:false` **KEEP** · OPS1 Cursor primitives **HARVEST** · Gate D model **ADOPTED** · launch journal **DECIDED TEMPORARY WITH EXIT** |
-| **Gaps (Delivery)** | REAL specialized adapter **NOT IMPLEMENTED** · CREATED/LAUNCHED frontier **NOT IMPLEMENTED** · Gate D grant **NOT IMPLEMENTED / NOT CONSUMED** · RO Agent descriptor **NOT IMPLEMENTED** · default REAL OFF · adversarial crash/replay tests · no silent fixture fallback |
-| **Dépendances** | M3 — **SATISFIED** · Architecture decisions D-M4-01→05 — **SATISFIED** · Critical Ack promotion — **NOT REQUIRED FOR FIRST RO by D-M4-05** · M4 Delivery GO — **REQUIRED** · First REAL GO — **REQUIRED AFTER DELIVERY VALIDATION** |
-| **Travaux futurs M4 Delivery** | OA-owned REAL launch gateway harvested from OPS1 primitives · CREATED/LAUNCHED frontier · Gate D durable grant implementation · RO Agent descriptor · default REAL OFF · adversarial crash/replay tests · no silent fixture fallback · **no** Auth.js/Ack promotion unless separate GO |
+| **État actuel** | **M4 DELIVERY REAL-OFF VALIDATED BY MORRIS / MERGED ON MAIN** — PR #344 @ `ec65fb47…` · REAL implementation present · **DEFAULT OFF** · **NO REAL proof yet** |
+| **Architecture selected (D-M4-01→05)** | **ADOPTED + IMPLEMENTED** — specialized REAL OA boundary (Option B) · temporary durable launch journal CREATED/LAUNCHED · bounded RO AgentCapability · durable Gate D GD-1 · L7-1 for first RO |
+| **Actifs** | T-A5 lifecycle **KEEP** · fixture port `externalEffects:false` **KEEP** · specialized REAL boundary **COMPLETE** · production `NodeCursorProcessRunner` **COMPLETE** · isolated pinned Git worktree **COMPLETE** · Gate D GD-1 **COMPLETE implementation / NOT CONSUMED** · technical launch journal **IMPLEMENTED / TEMPORARY WITH EXIT** · bounded RO AgentCapability **COMPLETE** · OPS1 Cursor primitives **HARVESTED**, no OA runtime coupling |
+| **Gaps restants M4** | explicit Morris FIRST REAL GO · exact real Gate D consumption · one bounded Cursor REAL invocation · CREATED/LAUNCHED real trace · no duplicate launch after real ambiguous crash/restart scenario where applicable · no fixture fallback · bounded read-only result · fail-closed unavailable/stale scenarios · final M4 exit proof evaluation |
+| **Dépendances** | M3 — **SATISFIED** · Architecture decisions D-M4-01→05 — **SATISFIED** · M4 Delivery — **SATISFIED / MERGED** · Critical Ack promotion — **NOT REQUIRED FOR FIRST RO by D-M4-05** · FIRST REAL Morris gate — **REQUIRED** |
 | **Preuve de sortie future M4** | exact HumanDecision/ExecutionContract · bounded agent · Gate D consumed once · Cursor REAL invoked exactly once · CREATED/LAUNCHED trace · no duplicate launch after crash/restart · no fixture fallback · read-only bounded result · fail-closed unavailable/stale scenarios — **NOT SATISFIED** |
-| **Statut** | **ARCHITECTURE DECIDED — DELIVERY NOT AUTHORIZED — CURSOR REAL NOT AUTHORIZED** |
+| **Statut** | **DELIVERY VALIDATED BY MORRIS — MERGED ON MAIN — FIRST REAL NOT AUTHORIZED — EXIT PROOF NOT SATISFIED** |
+| **Next** | FIRST M4 CURSOR REAL READ-ONLY PROOF — subject to **separate Morris GO** |

 ### Milestone 5 — Retour de preuve + analyse Nora

@@ -275,9 +289,9 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Outcome** | Evidence/ReviewBundle liés contrat/décision ; réinjectés Nora + LPS ; handoff Git transitionnel OK |
 | **État actuel** | UI cards Memory ; pas LPS write-back |
 | **Gaps** | L9 Evidence→LPS ; durable evidence |
-| **Dépendances** | M4 |
+| **Dépendances** | M4 — **NOT YET SATISFIED** (M4 Delivery merged **≠** M4 exit proof satisfied ; FIRST REAL still required) |
 | **Preuve e2e** | post-exec : ReviewBundle visible + LPS updated + recommendation next gate |
-| **Statut** | **PARTIAL** |
+| **Statut** | **PARTIAL / NOT AUTHORIZED** |

 ### Milestone 6 — Boucle projet complète

@@ -320,14 +334,14 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | V3-F02 LPS | Living Project State | **PARTIAL RUNTIME** — T-A1 Project/LPS durable SQLite **merged on main** ; writeback / autres états associés restent à compléter (M5+) | M1, M5 | M1 / PR #337 / restart proof | writeback + autres OA |
 | V3-F03 DoctrinePackage | Package pin/digest | **PARTIAL RUNTIME** — digest in live `F2ContextSnapshot` **on main** (M2) ; KEEP files | M1–M2 | live digest in snapshot | — |
 | V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels (base M2) | M2, M7 | tags/stop contradictions | later depth |
-| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — cognitive piloting M2 + HD/ExecutionContract PREPARE-only **on main** (M3) ; exec REAL / Evidence / LPS writeback manquants | M2–M6 | e2e sans copier-coller | M4+ backbone |
+| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — cognitive piloting M2 + HD/ExecutionContract PREPARE-only **on main** (M3) + M4 Delivery REAL-OFF implementation **merged** ; exec REAL proof / Evidence / LPS writeback **not closed** | M2–M6 | e2e sans copier-coller | FIRST REAL then M5+ |
 | V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
 | V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
 | V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
 | V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
 | V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
-| V3-F11 AgentCapability | Caps agents | Fixture agent · **bounded REAL RO profile DECIDED — NOT IMPLEMENTED** (D-M4-03) | M4 | REAL agent descriptor RO | Delivery |
-| V3-F12 Réversibilité | Action policy | Partial confirmations · Gate D model **ADOPTED** · Ack **deferred for first RO** (D-M4-05) | M3–M4 | confirm + Gate D (+ Ack for N2/N3 later) | Delivery / future IAM |
+| V3-F11 AgentCapability | Caps agents | Fixture agent + **bounded REAL RO implementation MERGED ON MAIN** (PR #344) · FIRST REAL proof **pending** | M4 | REAL agent descriptor RO exercised once | FIRST REAL |
+| V3-F12 Réversibilité | Action policy | Partial confirmations · Gate D **implementation merged** (GD-1) · CREATED/LAUNCHED safety frontier **merged** · spawn ACK/completion separation **merged** · Gate D **consumption pending** · Ack **deferred for first RO** (D-M4-05) | M3–M4 | confirm + Gate D consumed once (+ Ack for N2/N3 later) | FIRST REAL / future IAM |
 | V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
 | V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
 | V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |
@@ -339,23 +353,23 @@ CRITICAL PATH:
   M1 durable Project/LPS — SATISFIED / MERGED ON MAIN (PR #337 @ c6925954…)
   → M2 Nora contextuel durable — VALIDATED BY MORRIS / MERGED ON MAIN / EXIT PROOF SATISFIED (PR #339 @ a9a4765…)
   → M3 HD durable + ExecutionContract exact — VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED (PR #341 @ 8eea4cbf…)
-  → M4 Architecture DECIDED (D-M4-01→05 ADOPTED BY MORRIS)
-  → M4 Delivery REAL-OFF [NEXT — NOT AUTHORIZED — MORRIS GO REQUIRED]
-  → M4 Validation
-  → Morris FIRST REAL gate
-  → bounded Cursor REAL proof
+  → M4 Architecture — CLOSED (D-M4-01→05 ADOPTED BY MORRIS)
+  → M4 Delivery REAL-OFF — VALIDATED BY MORRIS / MERGED ON MAIN (PR #344 @ ec65fb47)
+  → FIRST M4 CURSOR REAL READ-ONLY PROOF [NEXT — MORRIS GO REQUIRED]
   → M4 exit proof
   → M5 Evidence/ReviewBundle + Nora + LPS writeback
   → M6 boucle complète sans copier-coller

 M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
-M4 DELIVERY GATE: OPEN — MORRIS GO REQUIRED
-CURSOR REAL GATE: OPEN — NOT AUTHORIZED
-GATE D: MODEL ADOPTED — NOT IMPLEMENTED — NOT CONSUMED
+M4 DELIVERY GATE: CLOSED / MERGED (PR #344 @ ec65fb47)
+FIRST REAL GATE: OPEN — MORRIS GO REQUIRED
+M4 EXIT PROOF: OPEN — NOT SATISFIED
+GATE D: IMPLEMENTED ON MAIN — NOT CONSUMED
 CRITICAL ACK: DEFERRED FOR FIRST RO — FUTURE N2/N3 / IAM — NOT PROMOTED
-TECHNICAL LAUNCH JOURNAL: DECIDED TEMPORARY WITH EXIT — NOT IMPLEMENTED — ≠ PRODUCT STORE
+TECHNICAL LAUNCH JOURNAL: IMPLEMENTED TEMPORARY WITH EXIT — ≠ PRODUCT STORE
+M5: NOT AUTHORIZED

-NEXT CAPABILITY: M4 DELIVERY REAL-OFF — NOT AUTHORIZED — MORRIS GO REQUIRED
+NEXT CAPABILITY: FIRST M4 CURSOR REAL READ-ONLY PROOF — MORRIS GO REQUIRED

 TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
 FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
@@ -364,9 +378,9 @@ G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
 M2 MERGE GATE: CLOSED
 M3 MERGE GATE: CLOSED
 M3: VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED
-M4: ARCHITECTURE DECISIONS ADOPTED — DELIVERY NOT AUTHORIZED — CURSOR REAL NOT AUTHORIZED
-Cursor REAL DISABLED
-Gate D NOT CONSUMED
+M4: DELIVERY VALIDATED BY MORRIS — MERGED ON MAIN — FIRST REAL NOT AUTHORIZED — EXIT PROOF NOT SATISFIED
+Cursor REAL: IMPLEMENTATION MERGED / DEFAULT OFF / 0 ACTUAL INVOCATIONS / NOT AUTHORIZED
+Gate D IMPLEMENTED — NOT CONSUMED
 runtime v3 NON ADOPTED
 ```

@@ -404,5 +418,7 @@ Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
 - M3 : PR #341 · head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` · merge `8eea4cbf211d9e159626394477353f19126fe900` · CI #166 · handoff PR-readiness `2a5759232bf2b17c98f002ad087f2c4c14b65d4d`
 - M3 post-merge Roadmap : PR #342 · merge `607763d9a1349d6b48633d8763f75ae3c07c84fc`
 - M4 architecture pack : `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · GO **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05)
+- M4 Architecture docs : PR #343 · merge `e974b7306f7400249c31399fd2890d5817833dbf`
+- M4 Delivery : PR #344 · head `f7270b21ccdbcf1cd543879e7c4120d87b874479` · merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI #172 SUCCESS · diagnostic Class C handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63`
 - Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
 - Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37` (dont `34` · DOC-DEBT-M1-01 sur `32`)

```

## 8. Final Git truth

```text
branch=docs/sfia-studio-m4-post-merge-roadmap
HEAD=91fa0eb25fe29e833bd212a8f9097c2c039a3c97
origin/main=3575c8863d8a13b610dbfde96a33426a620b2c56
PR=MERGED #345
source branch retained=yes
delivery branch retained=yes
tracked worktree=clean
staged=empty
```

## 9. Verdict

M4 POST-MERGE ROADMAP SYNC PR #345 MERGED INTO MAIN —
MERGE COMMIT VERIFIED —
SOURCE BRANCH RETAINED —
PR CI GREEN —
POST-MERGE CI PENDING —
FIRST REAL NOT AUTHORIZED —
GATE D NOT CONSUMED —
M4 EXIT PROOF NOT SATISFIED —
M5 NOT AUTHORIZED —
RUNTIME V3 NON ADOPTED

Statut: MERGED / POST-MERGE CI PENDING — FIRST REAL still a separate Morris gate.

Next Morris gate (not consumed): FIRST M4 CURSOR REAL READ-ONLY PROOF — only after Morris separately authorizes it. This merge does not authorize FIRST REAL, Gate D consumption, M5, or runtime v3.
