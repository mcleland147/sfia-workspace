# Review Pack FULL — M4 CLOSED BY MORRIS — CONVERGENCE ROADMAP CLOSURE SYNC — DOCUMENTATION ONLY

| Champ | Valeur |
| --- | --- |
| Timestamp | 2026-08-14 22:37:21 CEST (+0200) |
| GO consumed | GO MORRIS — ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION |
| Repo | mcleland147/sfia-workspace |
| Cycle | 14 — Post-merge / milestone closure sync |
| Profil / Typologie | Standard / DOC |
| CKC | fallback `02-fifteen-cycles-synthetic-map.md` (candidate / no execution authority) |
| Initial branch | `qa/sfia-studio-m4-governed-real-completion-reproof` @ `2d1361ee…` |
| Target local branch | `docs/sfia-studio-m4-closure-roadmap-sync` @ `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` |
| origin/main | `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` |
| Incoming handoff | `1123a30f2261756a2ec744ee002ec023b7fea0af` |
| Project commit/push/PR/merge | NOT PERFORMED |
| Cursor REAL / M5 execution | 0 |

## Convergence Pre-check

| Item | État |
| --- | --- |
| Build Doctrine | READ ONLY / KEEP |
| Roadmap | ADAPT factuel — this cycle |
| framing 30/34/35/37 | READ ONLY |
| Capacité M4 | V3-F05 + V3-F11 + V3-F12 |
| Milestone M4 | EXIT PROOF ACCEPTED BY MORRIS — CLOSED |
| Gap M4 blocking | none |
| Next capability | M5 — Retour de preuve + analyse Nora |
| M5 | PARTIAL / NOT AUTHORIZED |
| runtime v3 | NON ADOPTED |
| Trajectory link | CONFIRMED (M4 CLOSED → M5 next, unauthorized) |

## Stale-claim matrix

| Claim Roadmap (pré-closure) | Nouvelle vérité | Preuve | Section |
| --- | --- | --- | --- |
| Snapshot `fc7e20aa…` | Snapshot `2d1361ee…` | origin/main / PR #347 merge | metadata |
| launches=1 / completions=0 | launches=2 / completions=1 | FIRST REAL + final reproof handoff `1123a30f…` | B3 / B10 |
| governed completion NOT PROVEN | PROVEN (final reproof PASS) | handoff `1123a30f…` | B3/B5/M4 |
| strict RO tool-surface NOT PROVEN | PROVEN FOR FINAL M4 REPROOF PATH ONLY | tool-surface Read=1 / Shell=0 | B3/B4/B10 |
| NEXT = M4 GOVERNED REAL COMPLETION PROOF | NEXT = M5 (NOT AUTHORIZED) | Morris GO ACCEPT+CLOSE | B6/B10/M4/M5 |
| M4 exit NOT SATISFIED / M4 NOT CLOSED | ACCEPTED BY MORRIS / CLOSED | Morris GO | metadata/M4/B10 |
| timeout 60000 unresolved as M4 blocker | KEEP FOR NOW + OPEN NON-BLOCKING reserve | B10a CURSOR_REAL_TIMEOUT_POLICY | B10a/B4/B6 |
| M5 dependency NOT SATISFIED | SATISFIED / CLOSED | M4 closed | M5 |
| M5 NOT AUTHORIZED | remains NOT AUTHORIZED | Morris GO (no M5) | M5/B10 |
| runtime v3 NON ADOPTED | remains NON ADOPTED | anti-claims | B10/anti-claims |

## Morris decision

- GO: ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION
- Exit proof: ACCEPTED BY MORRIS
- M4: CLOSED
- M5: NOT AUTHORIZED

## Evidence used

- FIRST REAL historical launch / timeout
- timeout diagnosis reserves
- pre-reproof bounding PR #346
- Roadmap sync PR #347 / main `2d1361ee…`
- final governed REAL completion PASS handoff `1123a30f…` (pid:17064 · ~15735 ms · M4_READ_ONLY_OK · Read=1 · Shell=0)
- aggregate exit proof PASS WITH RESERVES + Morris acceptance

## REAL counters (historical)

- governed launches = 2
- successful completions = 1

## Timeout reserve

- key: `CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING POST-M4 RESERVE`
- current = 60000 KEEP FOR NOW
- proven sufficient for demonstrated M4 bounded RO path
- NOT universal · NOT defective
- does not reopen M4 · does not block M5
- no timeout code/architecture selected
- exit conditions documented in B10a

## Sections modified

metadata · anti-claims · B3 · B4 · B5 · B6 · M3 Next · M4 · M5 · B9 F05/F11/F12 · B10 · B10a (new) · références

## Validations

### git diff --check

```
(clean)
```

### git status --short

```
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review/
```

### git diff --stat

```
 .../convergence/sfia-studio-convergence-roadmap.md | 187 +++++++++++++--------
 1 file changed, 113 insertions(+), 74 deletions(-)
```

Scope tracked = EXACTEMENT 1 fichier Roadmap · staged empty · `.tmp-sfia-review/**` untracked only.

## DIFF COMPLET — `sfia-studio-convergence-roadmap.md`

````diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 01e6dbe..7401ed8 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,13 +6,13 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git** | origin/main @ `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` |
+| **Snapshot Git** | origin/main @ `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` |
 | **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
-| **Timestamp maintenance** | 2026-08-14 Europe/Paris — M4 PRE-REPROOF BOUNDING MERGED (PR #346) — FIRST REAL HISTORICAL / COMPLETION NOT PROVEN — NEXT = M4 GOVERNED REAL COMPLETION PROOF |
+| **Timestamp maintenance** | 2026-08-14 Europe/Paris — M4 EXIT PROOF ACCEPTED BY MORRIS — M4 CLOSED — NEXT = M5 (NOT AUTHORIZED) — CURSOR_REAL_TIMEOUT_POLICY OPEN / NON-BLOCKING |
 | **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
-| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration |
-| **Sources** | Git `main` @ `fc7e20aa…` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346 · CI #158/#162/#166/#172/#176 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · M4 Product path on main `projects/sfia-studio/app/**` |
-| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · M4 Delivery merged **≠** M4 exit proof satisfied · FIRST REAL attempt performed **≠** governed REAL completion proven · Gate D first-REAL consumption proven once **≠** reusable identity / future Gate D · CREATED/LAUNCHED REAL trace proven **≠** successful completion · pre-reproof bounding merged **≠** strict runtime read-only tool-surface proven · `--mode ask` metadata-qualified **≠** Shell impossibility proven · timeout 60000 unchanged **≠** proven sufficient or defective · M4 **≠** CLOSED · M5 **≠** AUTHORIZED · M4 **≠** runtime v3 ADOPTED · technical launch journal implemented **≠** Product Store · ≠ full OA durable |
+| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** |
+| **Sources** | Git `main` @ `2d1361ee…` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347 · CI #158/#162/#166/#172/#176/#178 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · M4 Product path on main `projects/sfia-studio/app/**` |
+| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M4 CLOSED **≠** M5 AUTHORIZED · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **≠** M4 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · ≠ full OA durable |

 ## B1. Nature du document

@@ -26,7 +26,7 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).

 ## B3. Point de départ factuel

-### Sur main (`fc7e20aaeb5153b4d73c1809f865e361f00e1b34`)
+### Sur main (`2d1361ee71bec7a21f6f76efc7c33eaf3146802a`)

 | Capacité | État observé |
 | --- | --- |
@@ -46,12 +46,13 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5 Attempt product ; T-A6 Evidence) | **Memory partiel** — process-local |
 | Autres OA (T-A3 HD) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) ; Confirmation reste Memory/process-local |
 | Autres OA (T-A4 ExecutionContract) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) — PREPARE-only ; Attempt product still Memory |
-| Architecture M4 | **ADOPTED + IMPLEMENTED ON MAIN** — D-M4-01→05 via PR #344 · Delivery **VALIDATED BY MORRIS / MERGED** · FIRST REAL **ATTEMPT PERFORMED** (historical) · pre-reproof bounding **MERGED** (PR #346) · M4 exit proof **NOT SATISFIED** |
-| T-A5 REAL (Nora/Studio) | **IMPLEMENTED ON MAIN / DEFAULT OFF** — specialized OA-owned boundary (`RealExecutionLaunchPort` / `NodeCursorProcessRunner` / isolated worktree) ; fixture `externalEffects:false` **preserved** ; gateway deterministic pre-reproof bounding **ON MAIN** (`--mode ask` + README.md markers) ; historical governed REAL launches = **1** ; successful governed REAL completions = **0** |
-| Cursor REAL depuis Nora | **1 historical attempt** (`xat:m4-first-real-001`) — governed launch **PROVEN** · completion **NOT PROVEN** (timeout) · identities **must not be reused** |
-| Gate D | **IMPLEMENTED ON MAIN** (GD-1) · first-REAL consumption **PROVEN ONCE** historically (`gtd:m4-first-real-001`) · future reproof requires **fresh** Gate D + Morris GO |
-| Technical CREATED/LAUNCHED frontier | **IMPLEMENTED ON MAIN** · **TEMPORARY WITH EXIT** · ≠ Product Store · **CREATED/LAUNCHED REAL TRACE PROVEN** on FIRST REAL attempt |
-| Bounded RO AgentCapability | **IMPLEMENTED ON MAIN** · static / deny-by-default · **exercised once in REAL** (FIRST REAL) · completion not obtained · strict CLI runtime RO tool-surface **NOT PROVEN** |
+| Architecture M4 | **ADOPTED + IMPLEMENTED ON MAIN — M4 CLOSED** — D-M4-01→05 via PR #344 · Delivery **MERGED** · FIRST REAL historical + final governed completion reproof **PASS** · exit proof **ACCEPTED BY MORRIS** |
+| T-A5 REAL (Nora/Studio) | **IMPLEMENTED ON MAIN / DEFAULT OFF** — specialized OA-owned boundary ; fixture `externalEffects:false` **preserved** ; gateway deterministic bounding **ON MAIN** (`--mode ask` + README.md markers) ; historical governed REAL launches = **2** ; successful governed REAL completions = **1** |
+| Cursor REAL depuis Nora | **2 historical governed attempts** — Run1 FIRST REAL (`xat:m4-first-real-001`) launch **PROVEN** / completion **NOT** (timeout ~60s) · Run2 final reproof (`xat:m4-reproof-86b5ecb05474`) completion **PROVEN** (~15.7s / `M4_READ_ONLY_OK`) · identities never reused across runs |
+| Gate D | **IMPLEMENTED ON MAIN** (GD-1) · consumed **once per governed REAL** historically (Run1 + Run2) · future REAL still requires **fresh** Gate D + Morris GO |
+| Technical CREATED/LAUNCHED frontier | **IMPLEMENTED ON MAIN** · **TEMPORARY WITH EXIT** · ≠ Product Store · REAL TRACE **PROVEN** on both historical governed runs |
+| Bounded RO AgentCapability | **IMPLEMENTED ON MAIN** · static / deny-by-default · KEEP · **STRICT BOUNDED RUNTIME TOOL-SURFACE PROVEN FOR FINAL M4 REPROOF** (Read=1 README only ; Shell/Glob/Grep/write=0) — **≠** “Cursor is globally read-only” |
+| `CURSOR_REAL_TIMEOUT_POLICY` | **OPEN / NON-BLOCKING POST-M4 RESERVE** — current product timeout **60000** = **KEEP FOR NOW** · proven sufficient for demonstrated M4 bounded RO path · **NOT** universal policy · **NOT** proven defective |

 ### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`) — historique / harvest

@@ -78,9 +79,10 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | T-A3 HD/Confirm/Authority | Product SQLite HD **ON MAIN** (PR #341) + Confirmation Memory + local Morris authority TEMPORARY WITH EXIT | **COMPLETE** (M3) / **KEEP** backbone | HD durable on main ; Confirmation process-local ; Auth.js exit ouvert |
 | T-A4 ExecutionContract | Product SQLite + M3 PREPARE truthful + Cursor projection PREPARE-only **ON MAIN** (PR #341) | **COMPLETE** (M3) / **KEEP** backbone | Durable on main ; no Attempt/REAL ; fixture path historique/test conservé |
 | T-A5 Attempt / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` · PR #344 | **KEEP** core lifecycle + **KEEP** zero-effect port | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) |
-| T-A5 specialized REAL boundary | PR #344 + PR #346 / main `fc7e20aa…` | **COMPLETE M4 Delivery / KEEP** (+ gateway bounding) | OA-owned `RealExecutionLaunchPort` / `StudioCursorRealLaunchGateway` / `NodeCursorProcessRunner` / `StudioGitWorktreeWorkspace` — **implemented, default OFF** — **no** OA→OPS1 product runtime coupling (D-M4-01) — FIRST REAL launch **PROVEN once** · completion **NOT PROVEN** · PR #346 adds `--mode ask` + deterministic README.md instruction (metadata-qualified RO ; strict runtime tool-surface **NOT PROVEN**) |
-| T-A5 launch journal (CREATED/LAUNCHED) | PR #344 / main · FIRST REAL exercised | **TEMPORARY WITH EXIT — IMPLEMENTED** | Technical safety journal ; ≠ Product Store ; ≠ dual product persistence ; crash/replay tests merged ; **CREATED/LAUNCHED REAL TRACE PROVEN** on FIRST REAL ; exit → Attempt/Evidence durable path M5+ / dedicated Morris gate |
-| AgentCapability REAL RO profile | PR #344 / `m4BoundedReadOnlyCursorAgent` · KEEP | **COMPLETE M4 Delivery / KEEP** | Static immutable deny-by-default registry retained ; bounded RO profile **implemented** ; **exercised once in REAL** (FIRST REAL) ; AgentCapability itself **unchanged** by PR #346 (gateway argv/instruction only) |
+| T-A5 specialized REAL boundary | PR #344 + PR #346 / main `2d1361ee…` | **COMPLETE M4 / KEEP** (+ gateway bounding) | OA-owned REAL boundary **implemented, default OFF** — no OA→OPS1 runtime coupling — TWO historical governed launches · ONE successful completion under deterministic `--mode ask` / README bounding · M4 CLOSED |
+| T-A5 launch journal (CREATED/LAUNCHED) | PR #344 / main · exercised on both REAL runs | **TEMPORARY WITH EXIT — IMPLEMENTED / KEEP** | Technical safety journal ; ≠ Product Store ; REAL TRACE PROVEN ; exit → Attempt/Evidence durable path M5+ / dedicated Morris gate |
+| AgentCapability REAL RO profile | PR #344 / `m4BoundedReadOnlyCursorAgent` · KEEP | **COMPLETE M4 / KEEP** | Bounded RO profile exercised ; final reproof proved strict bounded tool-surface for that path ; AgentCapability **unchanged** through bounding/closure |
+| Product timeout 60000 | product default / both REAL runs | **KEEP CURRENT VALUE FOR NOW** + **OPEN / NON-BLOCKING POST-M4 RESERVE** (`CURSOR_REAL_TIMEOUT_POLICY`) | Sufficient for demonstrated M4 bounded RO completion (~15.7s) ; FIRST REAL timeout historical ≠ proven defect ; **no** universal timeout policy selected |
 | T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
 | T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
 | Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
@@ -103,19 +105,20 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | HumanDecision durable/authoritative | **CLOSED ON MAIN — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT (durabilité HD fermée ≠ IAM product-grade fermé) | future IAM (Ack **not** absolute for first RO — D-M4-05) ; historical Gate D first-REAL consumption already proven once |
 | CKC ↔ cycle binding | **CLOSED ON MAIN — M2** — `ckcResolutionRef` projection on LPS | — |
 | live contextSnapshot | **CLOSED ON MAIN — M2** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
-| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | M4 GOVERNED REAL COMPLETION PROOF (fresh identities + Morris GO) |
-| Cursor projection canonique | **CLOSED ON MAIN — M3 PREPARE-only** (`executionAllowed=false`) | M4 GOVERNED REAL COMPLETION PROOF |
-| Cursor REAL behind T-A5 | **IMPLEMENTATION MERGED / DEFAULT OFF** · FIRST REAL attempt **PERFORMED** · governed launch **PROVEN** · governed completion **NOT PROVEN** · pre-reproof bounding **MERGED** (PR #346) | M4 GOVERNED REAL COMPLETION PROOF — MORRIS GO REQUIRED |
-| REAL specialized adapter boundary | **CLOSED ON MAIN — PR #344** (+ gateway bounding PR #346) — implemented, default OFF | completion reproof |
-| durable launch frontier (CREATED/LAUNCHED) | **IMPLEMENTED ON MAIN — PR #344** — TEMPORARY WITH EXIT · **CREATED/LAUNCHED REAL TRACE PROVEN** (FIRST REAL) | future Attempt/Evidence exit + completion reproof |
-| Gate D durable grant | **IMPLEMENTED ON MAIN** (GD-1) · first-REAL consumption **PROVEN ONCE** historically · **not reusable** | fresh Gate D for completion reproof |
-| bounded REAL AgentCapability RO | **IMPLEMENTED ON MAIN** · exercised once in REAL · completion not obtained · strict runtime RO tool-surface **NOT PROVEN** | M4 GOVERNED REAL COMPLETION PROOF |
-| governed REAL completion | **NOT PROVEN** — FIRST REAL timed out (~60s / exit 143) ; timeout diagnosis complete with reserves ; timeout 60000 **UNRESOLVED** | M4 GOVERNED REAL COMPLETION PROOF |
+| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | M5 (Evidence path) — separate Morris GO |
+| Cursor projection canonique | **CLOSED ON MAIN — M3 PREPARE-only** (`executionAllowed=false`) | future elevated REAL classes / M5+ |
+| Cursor REAL behind T-A5 | **IMPLEMENTATION MERGED / DEFAULT OFF** · M4 governed completion **PROVEN** (final reproof) · M4 **CLOSED** | future REAL requires distinct Morris GO (not M4 reopen) |
+| REAL specialized adapter boundary | **CLOSED ON MAIN — PR #344** (+ gateway bounding PR #346) — implemented, default OFF | KEEP |
+| durable launch frontier (CREATED/LAUNCHED) | **IMPLEMENTED ON MAIN — PR #344** — TEMPORARY WITH EXIT · REAL TRACE **PROVEN** (both runs) | Attempt/Evidence product durability exit M5+ |
+| Gate D durable grant | **IMPLEMENTED ON MAIN** (GD-1) · consumed once per historical governed REAL · **not reusable** | fresh Gate D for any future REAL |
+| bounded REAL AgentCapability RO | **IMPLEMENTED ON MAIN** · final reproof **STRICT BOUNDED TOOL-SURFACE PROVEN** for demonstrated path | KEEP ; future capabilities separate |
+| governed REAL completion (M4) | **PROVEN** — final reproof PASS (handoff `1123a30f…`) · exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** | — |
+| `CURSOR_REAL_TIMEOUT_POLICY` | **OPEN / NON-BLOCKING POST-M4** — 60000 KEEP FOR NOW | future REAL class needing policy qualification |
 | Critical Ack UI | CANDIDATE / MISSING — **NOT BLOCKING FIRST M4 READ-ONLY PROOF BY D-M4-05** ; remains for future N2/N3 / IAM | future N2/N3 · IAM gate |
 | Evidence durable | MISSING | M5 |
 | ReviewBundle → LPS writeback | MISSING | M5/M6 |
 | Nora post-exec analysis | PARTIAL (UI cards) | M5 |
-| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle/HD/ExecutionContract **restart-safe ON MAIN** ; conversation/proposal/Confirmation/Attempt product/Evidence Memory ; M4 crash/replay **protections implemented and tested** (PR #344) ; FIRST REAL journal reopen after timeout **PROVEN** · completion path still open | M4 GOVERNED REAL COMPLETION PROOF / M5+ |
+| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle/HD/ExecutionContract **restart-safe ON MAIN** ; conversation/proposal/Confirmation/Attempt product/Evidence Memory ; M4 crash/replay protections + REAL journal reopen **PROVEN** | M5+ Attempt/Evidence durability |
 | IAM/authz product-grade | PARTIAL / MISSING (M3 local authority temporary ; Auth.js candidate **NOT PROMOTED**) — **not** a blocker of first RO proof (D-M4-05) ; debt preserved | future IAM gate / M8 |

 ## B6. Decisions / gates
@@ -144,7 +147,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 - **M4 Delivery** **VALIDATED BY MORRIS** · PR #344 merged on main @ `ec65fb47c04b451d892297c806b9b041995339a5`
 - head M4 Delivery `f7270b21ccdbcf1cd543879e7c4120d87b874479` · CI SFIA Studio **#172** SUCCESS (Morris-authorized rerun, exact same head ; initial T7-C08 Class C / M4 causality not established)
 - merge gate M4 Delivery **CLOSED**
-- M4 exit proof **NOT SATISFIED** (governed REAL completion still **NOT PROVEN** after FIRST REAL attempt + diagnosis + PR #346 bounding)
+- M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** (GO **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION**)

 ### M4 Architecture Decisions — CONSUMED BY MORRIS

@@ -168,28 +171,29 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 - Merge : **CLOSED — PR #344** merge `ec65fb47c04b451d892297c806b9b041995339a5`
 - CI : **#172 SUCCESS** on same head `f7270b21` after authorized rerun (no code change)

-### M4 REAL / diagnosis / bounding — CONSUMED (historical)
+### M4 REAL / diagnosis / bounding / completion / closure — CONSUMED

-- FIRST M4 CURSOR REAL READ-ONLY PROOF GO — **CONSUMED** (base `3575c886…`)
-- Attempt `xat:m4-first-real-001` / Gate D `gtd:m4-first-real-001` — **CONSUMED ONCE** — **must never be reused**
-- Governed REAL launch / CREATED/LAUNCHED / worktree no-mutation — **PROVEN**
-- Governed REAL completion — **NOT PROVEN** (timedOut≈60030 ms · exitCode=143 · empty Studio stdout/stderr)
-- Timeout diagnosis GO — **CONSUMED** — no second REAL ; root cause UNIQUE **NOT PROVEN** ; timeout = **PLAUSIBLE CONTRIBUTING FACTOR**
-- Pre-reproof bounding — **MERGED** — PR #346 head `8900cd06…` / merge `fc7e20aa…` · CI #176 SUCCESS · ZERO REAL in that integration
+- FIRST M4 CURSOR REAL READ-ONLY PROOF GO — **CONSUMED** (base `3575c886…`) — launch **PROVEN** · completion **NOT** (timeout ~60030 ms / exit 143) — identities never reused
+- Timeout diagnosis GO — **CONSUMED** — UNIQUE root cause **NOT PROVEN** ; timeout = **PLAUSIBLE CONTRIBUTING FACTOR** historically
+- Pre-reproof bounding — **MERGED** — PR #346 / merge `fc7e20aa…` · CI #176
+- Post-pre-reproof Roadmap sync — **MERGED** — PR #347 / merge `2d1361ee…` · CI #178
+- **M4 GOVERNED REAL COMPLETION PROOF** — **CONSUMED / PASS** — handoff `1123a30f…` · fresh HD/EC/Attempt/Gate D · StartExecution=1 · spawn=1 · retry=0 · duration≈15735 ms · timedOut=false · exit=0 · stdout `M4_READ_ONLY_OK` · README Read=1 · Shell/Glob/Grep/write=0
+- **M4 EXIT PROOF EVALUATION** — **CONSUMED / PASS WITH RESERVES**
+- **M4 EXIT PROOF** — **ACCEPTED BY MORRIS**
+- **M4** — **CLOSED** (GO **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION**)

 ### Décisions / gates toujours ouverts

-1. **M4 GOVERNED REAL COMPLETION PROOF** — **MORRIS GO REQUIRED** — **NOT AUTHORIZED** (fresh HD/EC/Attempt/Gate D identities only)
-2. **M4 exit proof evaluation** — **NOT SATISFIED** (blocked on completion proof)
-3. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
-4. Disposition OPS1 / D1 / execution-run — **Decision Required**
-5. **M5** — **NOT AUTHORIZED**
-6. runtime v3 adoption — **NOT AUTHORIZED**
+1. **M5 — Retour de preuve + analyse Nora** — **NOT AUTHORIZED** — separate Morris GO required (M4 dependency **SATISFIED**)
+2. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
+3. Disposition OPS1 / D1 / execution-run — **Decision Required**
+4. runtime v3 adoption — **NOT AUTHORIZED**
+5. **`CURSOR_REAL_TIMEOUT_POLICY`** — **OPEN / NON-BLOCKING POST-M4 RESERVE** — current 60000 **KEEP FOR NOW** · no structural timeout decision selected

 ### Décisions / gates historiques encore listés (non tranchés comme promotion)

 - Auth.js / Critical Ack promotion for elevated classes — open (see D-M4-05)
-- Future REAL enablement / completion reproof — open (implementation merged / default OFF **≠** next REAL authorized without Morris GO)
+- Future REAL enablement beyond closed M4 bounded path — open (default OFF **≠** authorized without Morris GO)
 ## B7–B8. Roadmap capability-driven (milestones)

 ### Gate 0 — Convergence architecture / persistence
@@ -270,7 +274,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Merge** | **CLOSED** — PR #341 MERGED @ `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS |
 | **Exit evidence** | **EXIT PROOF SATISFIED ON MAIN** |
 | **Preuve e2e** | GO → HD durable + LPS N+1 · restart → PREPARE sans Proposal · ExecutionContract durable · fingerprint persisted=recomputed=projection · unresolved semantics fail-closed · Cursor PREPARE-only · authority adversarial PASS · local 1656 / 131 / 0 · CI #166 SUCCESS · merge #341 |
-| **Next** | M4 GOVERNED REAL COMPLETION PROOF — **MORRIS GO REQUIRED** *(FIRST REAL historical ; pre-reproof bounding MERGED)* |
+| **Next** | M5 — Retour de preuve + analyse Nora — **MORRIS GO REQUIRED** *(M4 CLOSED)* |
 | **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

 ### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio
@@ -280,14 +284,14 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **ID** | M4 |
 | **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
 | **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
-| **État actuel** | **M4 PARTIAL REAL PROOF** — Delivery REAL-OFF **MERGED** (PR #344) · FIRST REAL attempt **PERFORMED** (base `3575c886…`) · governed launch / Gate D once / CREATED·LAUNCHED / no-mutation **PROVEN** · governed completion **NOT PROVEN** (timeout) · diagnosis **COMPLETE WITH RESERVES** · pre-reproof bounding **MERGED ON MAIN** (PR #346 @ `fc7e20aa…`) · REAL default **OFF** · timeout 60000 **UNRESOLVED** |
+| **État actuel** | **M4 CLOSED** — Delivery **MERGED** · FIRST REAL historical (launch proven / completion timeout) · diagnosis **COMPLETE WITH RESERVES** · pre-reproof bounding **MERGED** · final governed REAL completion reproof **PASS** (handoff `1123a30f…`) · exit proof **ACCEPTED BY MORRIS** · REAL default **OFF** · timeout 60000 **KEEP FOR NOW** |
 | **Architecture selected (D-M4-01→05)** | **ADOPTED + IMPLEMENTED** — specialized REAL OA boundary (Option B) · temporary durable launch journal CREATED/LAUNCHED · bounded RO AgentCapability · durable Gate D GD-1 · L7-1 for first RO |
-| **Actifs** | T-A5 lifecycle **KEEP** · fixture port `externalEffects:false` **KEEP** · specialized REAL boundary **COMPLETE** · production `NodeCursorProcessRunner` **COMPLETE** · isolated pinned Git worktree **COMPLETE** · Gate D GD-1 **COMPLETE** · first-REAL consumption **PROVEN ONCE historically** · technical launch journal **IMPLEMENTED / TEMPORARY WITH EXIT** · bounded RO AgentCapability **COMPLETE** · gateway deterministic bounding **ON MAIN** (`--mode ask` + README.md / `M4_READ_ONLY_OK`/`UNAVAILABLE`) · OPS1 Cursor primitives **HARVESTED**, no OA runtime coupling |
-| **Gaps restants M4** | governed REAL **completion** under current bounding · fresh identities (never reuse `xat:m4-first-real-001` / `gtd:m4-first-real-001`) · strict runtime read-only tool-surface observation · timeout 60000 sufficiency/defect still **unproven** · final M4 exit proof evaluation |
-| **Dépendances** | M3 — **SATISFIED** · Architecture decisions D-M4-01→05 — **SATISFIED** · M4 Delivery — **SATISFIED / MERGED** · FIRST REAL GO — **CONSUMED (historical)** · timeout diagnosis — **CONSUMED** · pre-reproof bounding — **SATISFIED / MERGED (PR #346)** · Critical Ack promotion — **NOT REQUIRED FOR FIRST RO by D-M4-05** · M4 GOVERNED REAL COMPLETION PROOF Morris gate — **REQUIRED** |
-| **Preuve de sortie future M4** | exact HumanDecision/ExecutionContract · bounded agent · Gate D consumed once · Cursor REAL invoked exactly once · CREATED/LAUNCHED trace · no duplicate launch after crash/restart · no fixture fallback · read-only bounded result · fail-closed unavailable/stale scenarios — launch/Gate D/CREATED·LAUNCHED/no-mutation subset **PROVEN historically** · **governed completion still NOT PROVEN** → exit proof **NOT SATISFIED** |
-| **Statut** | **DELIVERY MERGED — FIRST REAL ATTEMPT PERFORMED — GOVERNED LAUNCH PROVEN — COMPLETION NOT PROVEN — PRE-REPROOF BOUNDING MERGED — EXIT PROOF NOT SATISFIED — M4 NOT CLOSED** |
-| **Next** | M4 GOVERNED REAL COMPLETION PROOF — subject to **separate Morris GO** (after Roadmap sync Git integration if required) |
+| **Actifs** | T-A5 lifecycle **KEEP** · fixture port `externalEffects:false` **KEEP** · specialized REAL boundary **COMPLETE / KEEP** · `NodeCursorProcessRunner` **KEEP** · isolated pinned Git worktree **KEEP** · Gate D GD-1 **KEEP** · technical launch journal **TEMPORARY WITH EXIT / KEEP** · bounded RO AgentCapability **KEEP** · gateway deterministic bounding **KEEP** · OPS1 Cursor primitives **HARVESTED**, no OA runtime coupling |
+| **Gaps restants M4** | — **none blocking** · surviving non-blocking reserves: `CURSOR_REAL_TIMEOUT_POLICY` · launch journal TEMPORARY WITH EXIT · future IAM/Ack · partial Confirmation/Attempt/Evidence durability |
+| **Dépendances** | M3 — **SATISFIED** · D-M4-01→05 — **SATISFIED** · Delivery — **SATISFIED** · FIRST REAL / diagnosis / bounding / completion proof / exit acceptance — **CONSUMED** |
+| **Preuve de sortie M4** | **SATISFIED / ACCEPTED BY MORRIS** — exact HD/EC · bounded agent · Gate D single-use · governed Cursor REAL · CREATED/LAUNCHED · no duplicate launch · no fixture fallback · isolated pinned workspace · bounded RO completion · fail-closed safety · final completion PASS |
+| **Statut** | **M4 EXIT PROOF ACCEPTED BY MORRIS — CLOSED** |
+| **Next** | M5 — Retour de preuve + analyse Nora — **NOT AUTHORIZED** without separate Morris GO |

 ### Milestone 5 — Retour de preuve + analyse Nora

@@ -298,9 +302,9 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Outcome** | Evidence/ReviewBundle liés contrat/décision ; réinjectés Nora + LPS ; handoff Git transitionnel OK |
 | **État actuel** | UI cards Memory ; pas LPS write-back |
 | **Gaps** | L9 Evidence→LPS ; durable evidence |
-| **Dépendances** | M4 — **NOT YET SATISFIED** (M4 Delivery merged + FIRST REAL partial proof **≠** M4 exit proof satisfied ; governed REAL completion still required) |
+| **Dépendances** | M4 — **SATISFIED / CLOSED** |
 | **Preuve e2e** | post-exec : ReviewBundle visible + LPS updated + recommendation next gate |
-| **Statut** | **PARTIAL / NOT AUTHORIZED** |
+| **Statut** | **PARTIAL / NOT AUTHORIZED** — **M5 EXECUTION REQUIRES A SEPARATE MORRIS GO** |

 ### Milestone 6 — Boucle projet complète

@@ -343,14 +347,14 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | V3-F02 LPS | Living Project State | **PARTIAL RUNTIME** — T-A1 Project/LPS durable SQLite **merged on main** ; writeback / autres états associés restent à compléter (M5+) | M1, M5 | M1 / PR #337 / restart proof | writeback + autres OA |
 | V3-F03 DoctrinePackage | Package pin/digest | **PARTIAL RUNTIME** — digest in live `F2ContextSnapshot` **on main** (M2) ; KEEP files | M1–M2 | live digest in snapshot | — |
 | V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels (base M2) | M2, M7 | tags/stop contradictions | later depth |
-| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — cognitive piloting M2 + HD/ExecutionContract PREPARE-only **on main** (M3) + M4 Delivery REAL-OFF **merged** + FIRST REAL launch **proven once** + pre-reproof bounding **merged** ; governed REAL **completion** / Evidence / LPS writeback **not closed** | M2–M6 | e2e sans copier-coller | M4 GOVERNED REAL COMPLETION PROOF then M5+ |
+| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — through M4 governed execution **demonstrated / milestone CLOSED** ; Evidence / LPS writeback / Nora post-exec **not closed** | M2–M6 | e2e sans copier-coller | M5+ (NOT AUTHORIZED yet) |
 | V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
 | V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
 | V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
 | V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
 | V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
-| V3-F11 AgentCapability | Caps agents | Fixture agent + **bounded REAL RO implementation MERGED ON MAIN** (PR #344) · exercised once in REAL (FIRST REAL) · completion **not** obtained · AgentCapability **KEEP** through PR #346 | M4 | REAL agent RO exercised with governed **completion** | M4 GOVERNED REAL COMPLETION PROOF |
-| V3-F12 Réversibilité | Action policy | Partial confirmations · Gate D **implementation merged** (GD-1) · CREATED/LAUNCHED safety frontier **merged** · spawn ACK/completion separation **merged** · Gate D first-REAL **consumption proven once** · Ack **deferred for first RO** (D-M4-05) | M3–M4 | confirm + Gate D consumed once (+ Ack for N2/N3 later) · completion still open | M4 GOVERNED REAL COMPLETION PROOF / future IAM |
+| V3-F11 AgentCapability | Caps agents | Fixture + **bounded REAL RO KEEP** · M4 scope exercised successfully on final reproof (strict bounded tool-surface proven for that path) | M4 | M4 CLOSED for this capability class | future AgentCapability classes separate |
+| V3-F12 Réversibilité | Action policy | Gate D + CREATED/LAUNCHED + spawn ACK/completion controls **demonstrated for M4** · Ack **deferred for first RO** (D-M4-05) | M3–M4 | M4 CLOSED · Ack for elevated classes later | future IAM / N2/N3 |
 | V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
 | V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
 | V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |
@@ -364,44 +368,76 @@ CRITICAL PATH:
   → M3 HD durable + ExecutionContract exact — VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED (PR #341 @ 8eea4cbf…)
   → M4 Architecture — CLOSED (D-M4-01→05 ADOPTED BY MORRIS)
   → M4 Delivery REAL-OFF — VALIDATED BY MORRIS / MERGED ON MAIN (PR #344 @ ec65fb47)
-  → FIRST M4 CURSOR REAL attempt performed (historical) — governed launch / Gate D once / CREATED·LAUNCHED / no-mutation PROVEN — completion NOT PROVEN
-  → timeout diagnosis completed — no second REAL — timeout = PLAUSIBLE CONTRIBUTING FACTOR — UNIQUE root cause NOT PROVEN
-  → pre-reproof deterministic bounding MERGED ON MAIN (PR #346 @ fc7e20aa…)
-  → M4 GOVERNED REAL COMPLETION PROOF [NEXT CAPABILITY — MORRIS GO REQUIRED]
-  → M4 exit proof evaluation
-  → M5 Evidence/ReviewBundle + Nora + LPS writeback — only if M4 exit proof satisfied + Morris authorization
+  → FIRST M4 CURSOR REAL attempt (historical) — launch / Gate D / CREATED·LAUNCHED / no-mutation PROVEN — completion NOT (timeout ~60s)
+  → timeout diagnosis COMPLETE WITH RESERVES — UNIQUE root cause NOT PROVEN — timeout = PLAUSIBLE CONTRIBUTING FACTOR (historical)
+  → pre-reproof deterministic bounding MERGED (PR #346 @ fc7e20aa…)
+  → post-pre-reproof Roadmap sync MERGED (PR #347 @ 2d1361ee…)
+  → M4 GOVERNED REAL COMPLETION PROOF PASS (handoff 1123a30f…) — duration≈15.7s — M4_READ_ONLY_OK — strict bounded tool-surface PROVEN for that path
+  → M4 EXIT PROOF ACCEPTED BY MORRIS — M4 CLOSED
+  → NEXT CAPABILITY = M5 — RETOUR DE PREUVE + ANALYSE NORA
+  → M5 NOT AUTHORIZED (separate Morris GO required)

 M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
-M4 DELIVERY GATE: CLOSED / MERGED (PR #344 @ ec65fb47)
-FIRST REAL GATE: CONSUMED / HISTORICAL — PARTIAL REAL PROOF
+M4 DELIVERY GATE: CLOSED / MERGED (PR #344)
+FIRST REAL GATE: CONSUMED / HISTORICAL — PARTIAL (launch only)
 TIMEOUT DIAGNOSIS: COMPLETE WITH RESERVES
-PRE-REPROOF BOUNDING: MERGED (PR #346 / CI #176 SUCCESS)
-M4 GOVERNED REAL COMPLETION PROOF: OPEN — MORRIS GO REQUIRED
-M4 EXIT PROOF: OPEN — NOT SATISFIED
-GATE D: IMPLEMENTED ON MAIN — FIRST-REAL CONSUMPTION PROVEN ONCE — NOT REUSABLE
+PRE-REPROOF BOUNDING: MERGED (PR #346)
+M4 GOVERNED REAL COMPLETION PROOF: CONSUMED / PASS
+M4 EXIT PROOF: ACCEPTED BY MORRIS — SATISFIED
+M4: CLOSED
+GATE D: IMPLEMENTED — consumed once per historical governed REAL — fresh grant required for future REAL
 CRITICAL ACK: DEFERRED FOR FIRST RO — FUTURE N2/N3 / IAM — NOT PROMOTED
-TECHNICAL LAUNCH JOURNAL: IMPLEMENTED TEMPORARY WITH EXIT — ≠ PRODUCT STORE — REAL TRACE PROVEN ONCE
-TIMEOUT 60000: UNCHANGED / NOT PROVEN SUFFICIENT OR DEFECTIVE
-STRICT RUNTIME READ-ONLY TOOL-SURFACE: NOT PROVEN
+TECHNICAL LAUNCH JOURNAL: TEMPORARY WITH EXIT — ≠ PRODUCT STORE
+TIMEOUT 60000: KEEP FOR NOW — proven sufficient for demonstrated M4 bounded RO path — NOT universal policy — NOT proven defective
+CURSOR_REAL_TIMEOUT_POLICY: OPEN / NON-BLOCKING POST-M4 RESERVE
+STRICT BOUNDED RUNTIME READ-ONLY TOOL-SURFACE: PROVEN FOR FINAL M4 REPROOF PATH ONLY
 M5: NOT AUTHORIZED

-NEXT CAPABILITY: M4 GOVERNED REAL COMPLETION PROOF — MORRIS GO REQUIRED
+NEXT CAPABILITY: M5 — RETOUR DE PREUVE + ANALYSE NORA — MORRIS GO REQUIRED
+
+NON-BLOCKING POST-M4 RESERVES (do NOT reopen M4):
+  - CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING
+  - technical launch journal — TEMPORARY WITH EXIT
+  - future IAM / Critical Ack for elevated classes
+  - Confirmation / Attempt product / Evidence durability partial

 TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
 FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
-DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack/Auth.js promotion for future N2/N3/IAM (not first RO) · Auth.js/IAM exit autorité M3 temporaire
+DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack/Auth.js promotion for future N2/N3/IAM · Auth.js/IAM exit autorité M3 temporaire · timeout policy qualification when a future REAL class needs it
 G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
 M2 MERGE GATE: CLOSED
 M3 MERGE GATE: CLOSED
 M3: VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED
-M4: PARTIAL REAL PROOF — LAUNCH PROVEN — COMPLETION NOT PROVEN — BOUNDING MERGED — EXIT PROOF NOT SATISFIED — NOT CLOSED
-Cursor REAL: IMPLEMENTATION MERGED / DEFAULT OFF / 1 HISTORICAL ATTEMPT / 0 SUCCESSFUL COMPLETIONS / NEXT REAL NOT AUTHORIZED WITHOUT MORRIS GO
-Gate D IMPLEMENTED — FIRST-REAL CONSUMPTION PROVEN ONCE — FRESH GATE REQUIRED FOR REPROOF
+M4: EXIT PROOF ACCEPTED BY MORRIS — CLOSED
+Cursor REAL: IMPLEMENTATION MERGED / DEFAULT OFF / 2 HISTORICAL GOVERNED LAUNCHES / 1 SUCCESSFUL COMPLETION / future REAL NOT AUTHORIZED WITHOUT MORRIS GO
 runtime v3 NON ADOPTED
 ```

+## B10a. CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING POST-M4 RESERVE
+
+Document key (tracking only — **not** an architecture decision):
+
+`CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING POST-M4 RESERVE`
+
+| Fact | Value |
+| --- | --- |
+| Current product timeout | **60000 ms** |
+| FIRST REAL (historical) | timedOut≈60030 ms · exit 143 · agent still progressing · UNIQUE root cause **NOT PROVEN** · timeout = plausible contributing factor |
+| Final M4 bounded reproof | timedOut=false · duration≈15735 ms · exit 0 · `M4_READ_ONLY_OK` |
+| Proven | 60000 **sufficient for the demonstrated M4 bounded read-only path** |
+| Not proven | 60000 as a **universal** Cursor REAL timeout policy |
+| Not proven | 60000 **defective** |
+| Classification | **KEEP CURRENT 60000 FOR NOW** + **OPEN / NON-BLOCKING POST-M4 RESERVE** |
+| Blocks M5? | **No** |
+| Reopens M4? | **No** |
+
+No structural selection now among: global 90s/120s · unlimited · dynamic · per-AgentCapability · per-ExecutionContract · per class. Any such selection needs dedicated proof + Morris decision.
+
+**Exit condition (reserve may close only if):** (1) timeout policy explicitly qualified for REAL execution classes actually needed ; **OR** (2) Morris decides a contractual/capability-scoped/other reference mechanism replacing the global value ; **OR** (3) product needs show the current global value is sufficient for the authorized execution population with adequate proof.
+
 ## B10b. Dette documentaire post-M1

+
 | Id | Observation | Impact | Classification | Owner / gate | Exit |
 | --- | --- | --- | --- | --- | --- |
 | **DOC-DEBT-M1-01** | Framing `32` métadonnées/maturité indiquent encore « persist runtime non migrée / schemas persist non créés » alors que T-A1 Project/LPS **et** T-A2 CycleInstance M2 subset SQLite sont **mergés** sur main | Risque de lecture contradictoire doctrine cible vs preuve runtime courante (dette plus visible post-M2) | documentation freshness debt | Morris — modification framing v3 = cycle + GO dédié | Cycle documentaire dédié corrigeant **uniquement** l’état factuel sans changer doctrine V3-F02/F06/F09 |
@@ -437,11 +473,14 @@ Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
 - M4 Architecture docs : PR #343 · merge `e974b7306f7400249c31399fd2890d5817833dbf`
 - M4 Delivery : PR #344 · head `f7270b21ccdbcf1cd543879e7c4120d87b874479` · merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI #172 SUCCESS · diagnostic Class C handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63`
 - M4 post-Delivery Roadmap : PR #345 · merge `3575c8863d8a13b610dbfde96a33426a620b2c56`
-- FIRST M4 CURSOR REAL : handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · Attempt `xat:m4-first-real-001` · Gate D `gtd:m4-first-real-001` · base `3575c886…` · PARTIAL REAL PROOF
+- FIRST M4 CURSOR REAL : handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · Attempt `xat:m4-first-real-001` · Gate D `gtd:m4-first-real-001` · base `3575c886…` · PARTIAL REAL PROOF (launch only / timeout)
 - M4 timeout diagnosis : handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · NO REAL REPROOF · timeout = PLAUSIBLE CONTRIBUTING FACTOR
 - M4 pre-reproof bounding content-complete : handoff `3c56cb29367268231c1db26b4de7af5cfe0ef499`
 - M4 pre-reproof bounding PR readiness : handoff `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c`
 - M4 pre-reproof bounding product : PR #346 · head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` · merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration
-- Current main : `fc7e20aaeb5153b4d73c1809f865e361f00e1b34`
+- M4 post-pre-reproof Roadmap sync : PR #347 · head `4f989aba92bce5ca33e1de251523694559b53902` · merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS
+- M4 GOVERNED REAL COMPLETION PROOF : handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · Attempt `xat:m4-reproof-86b5ecb05474` · Gate D `gtd:m4-reproof-86b5ecb05474` · PASS
+- Morris GO : **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION**
+- Current main (Roadmap candidate base) : `2d1361ee71bec7a21f6f76efc7c33eaf3146802a`
 - Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
 - Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37` (dont `34` · DOC-DEBT-M1-01 sur `32`)
````

## ZERO REAL / ZERO M5

| Control | Count |
| --- | --- |
| Cursor REAL | 0 |
| new Gate D | 0 |
| new Attempt REAL | 0 |
| StartExecution REAL | 0 |
| M5 execution | 0 |
| timeout change | 0 |
| code change | 0 |
| Build Doctrine change | 0 |
| framing change | 0 |
| project commit | 0 |
| project push | 0 |
| project PR | 0 |
| merge | 0 |

Parent env: SFIA_STUDIO_CURSOR_REAL unset; OPS1_CURSOR_REAL unset

## Anti-claims

- M4 CLOSED ≠ M5 authorized
- M4 CLOSED ≠ runtime v3 ADOPTED
- one bounded successful REAL ≠ global Cursor guarantee
- 60000 sufficient for M4 bounded proof ≠ universal timeout policy
- timeout historical failure ≠ timeout proven defective
- timeout reserve ≠ M4 reopened
- technical launch journal ≠ Product Store

## Next

- ChatGPT review of handoff
- commit/push/PR Roadmap only under separate Morris GO
- M5 only under separate Morris GO after documentary stabilization

## Décisions NON prises

- project commit/push/PR/merge
- M5 execution
- timeout architecture/policy selection
- IAM/Auth.js/Critical Ack
- runtime v3 ADOPTED

## Verdict

**M4 CLOSED BY MORRIS — CONVERGENCE ROADMAP CLOSURE SYNC IMPLEMENTED LOCALLY — TIMEOUT POLICY RESERVE PRESERVED — M5 NOT AUTHORIZED — NO M5 EXECUTION — ZERO REAL — READY FOR CHATGPT REVIEW**

### Instruction ChatGPT

Relire `sfia-review-handoff/latest-chatgpt-review.md` sur `origin/sfia/review-handoff`. Vérifier cycle/branche/HEAD/base, décision Morris, M4 CLOSED, exit proof accepted, DIFF Roadmap complet, launches=2 / completions=1, M5 NOT AUTHORIZED, CURSOR_REAL_TIMEOUT_POLICY reserve, 60000 KEEP FOR NOW (sufficient for bounded path only; not universal; not defective), reserve non-blocking / does not reopen M4, ZERO REAL, ZERO M5, validations. Ne pas déclarer READY si contenu modifié manquant.
