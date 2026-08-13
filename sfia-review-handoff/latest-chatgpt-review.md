# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-14 00:13:05 +0200 (CEST) |
| **Niveau** | FULL |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | DOC |
| **GO Morris** | **GO — ADOPT M4 ARCHITECTURE TRAJECTORY** (**consommé**) |
| **Decisions** | D-M4-01→05 **ADOPTED** (no longer Recommendations) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `.../worktrees/sfia-studio-m4-architecture-decisions` |
| **Branch** | `docs/sfia-studio-m4-architecture-decisions` |
| **HEAD/base** | `607763d9a1349d6b48633d8763f75ae3c07c84fc` (= origin/main) |
| **origin/main** | `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
| **Handoff source** | `366726945f8f533d958c82b7251edb1a5a4b45f0` |
| **Project commit/push/PR** | **NONE** |
| **Cursor REAL** | **NOT ENTERED** |
| **Gate D** | **NOT CONSUMED** |

## Local Git Truth

| Check | Result |
|-------|--------|
| origin/main | `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
| handoff tip before publish | `366726945f8f533d958c82b7251edb1a5a4b45f0` |
| remote docs branch | ABSENT |
| target branch created from main | YES — clean |
| tracked modified | Roadmap only |
| staged | empty |
| f3-real-prerequisites candidate | left intact (not checked out / not mutated) |

## Decisions consumed (exact)

| ID | Adopted content |
|----|-----------------|
| D-M4-01 | L6 Option B — fixture port KEEP externalEffects:false ; specialized REAL OA boundary at Delivery ; StartExecution sole sequencer ; no OPS1 product runtime coupling |
| D-M4-02 | Technical durable CREATED/LAUNCHED journal TEMPORARY WITH EXIT ; no auto-relaunch ; ≠ Product Store |
| D-M4-03 | Bounded read-only REAL AgentCapability ; immutable deny-by-default registry |
| D-M4-04 | Gate D GD-1 durable bound grant ; pre-launch check ; consume with CREATED ; fail-closed stale/expired |
| D-M4-05 | L7-1 — Ack/Auth.js deferred for first RO ; not promoted ; future N2/N3/IAM gate |

## Roadmap metadata (after)

```markdown
# SFIA Studio Convergence Roadmap

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
| **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
| **Snapshot Git** | origin/main @ `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
| **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
| **Timestamp maintenance** | 2026-08-14 Europe/Paris — M4 ARCHITECTURE DECISIONS D-M4-01→05 ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED |
| **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
| **Sources** | Git `main` @ `607763d9…` · PR #337/#339/#340/#341/#342 · CI #158/#162/#166 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · M3 Product path on main `projects/sfia-studio/app/**` |
| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · M4 architecture decided **≠** M4 Delivery authorized · M4 architecture decided **≠** Cursor REAL authorized · Gate D model adopted **≠** Gate D implemented **≠** Gate D consumed · L7-1 adopted **≠** Critical Ack promoted **≠** Auth.js promoted · technical launch journal adopted for M4 **≠** Product Store promotion · ≠ runtime v3 ADOPTED · ≠ full OA durable |

```

## B3 (after — utile)

```markdown
## B3. Point de départ factuel

### Sur main (`607763d9a1349d6b48633d8763f75ae3c07c84fc`)

| Capacité | État observé |
| --- | --- |
| `/studio` Project create/view | WIRED — **Product SQLite T-A1 — MERGED ON MAIN** (PR #337) |
| F1 Nora chat | WIRED — contextual assistant |
| F2 qualification / proposal / Morris gate | WIRED — qualification + **real CycleInstance** + live post-mutation `F2ContextSnapshot` ; conversation/proposal **process-local** ; M3 GO path uses server-owned temporary local Morris authority (fail-closed) |
| F3 / M3 PREPARE | WIRED — **M3 Product path** : HumanDecision durable → ExecutionContract durable → Cursor PREPARE-only projection ; **fixture historique/test** (`TestExecutionAdapter`) conservé ≠ chemin REAL |
| Evidence UI reinjection | WIRED — DTO panel ; **pas** LPS write-back |
| OPS1 Cursor REAL | EXISTS — UI `/ops1` parallèle ; flag `OPS1_CURSOR_REAL` |
| D1 SQLite projects | EXISTS — UI `/projects` parallèle |
| execution-run D2-D | EXISTS — **non** branché F1–F3 |
| FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
| Product persistence | **SELECTED / ACTIVE** — `node:sqlite` OA Product Store (G0-B) · Project/LPS + CycleInstance M2 subset + HD/ExecutionContract M3 · **≠** persistence de tout le runtime |
| Architecture convergence | **Option 1 ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (G0-A) |
| Project/LPS restart safety | **PROVEN / MERGED** (process A→B + CI #158) |
| Autres OA (T-A2 CycleInstance M2 subset) | **Product SQLite — MERGED ON MAIN** (PR #339) — Cycle/LPS/CKC linkage durable + restart-safe (subset M2) |
| Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **Memory partiel** — process-local |
| Autres OA (T-A3 HD) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) ; Confirmation reste Memory/process-local |
| Autres OA (T-A4 ExecutionContract) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) — PREPARE-only ; no Attempt/REAL |
| Architecture M4 | **DECIDED / DELIVERY PENDING** — D-M4-01→05 **ADOPTED BY MORRIS** ; code REAL **NOT IMPLEMENTED** on main |
| T-A5 REAL (Nora/Studio) | **MISSING ON MAIN** — fixture adapters only (`externalEffects:false`) |
| Cursor REAL depuis Nora | **0** / DISABLED |
| Gate D | **NOT CONSUMED** (model **ADOPTED** by D-M4-04 — **NOT IMPLEMENTED**) |

### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`)

| Élément | État |
| --- | --- |
| Auth.js GitHub + Critical Ack composition | Inspecté (handoff `366726945f…`) ; **pas sur HEAD** ; bundle **NOT promotion-ready** (pre-M3 dirty) |
| SqliteAuthorityAttemptJournal / CREATED·LAUNCHED wiring | Inspecté ; concept = **HARVEST/ADAPT source** for D-M4-02 ; ≠ Product Store ; **NOT IMPLEMENTED** on main |
| Classification | Observation / harvest source — **Auth/Ack bundle ≠ promotion** (D-M4-05) ; journal concept **DECIDED** as TEMPORARY WITH EXIT for M4 Delivery future |

### Recommandation d’audit (historique — supersédée)

Option 1 — OA Native Backbone + Harvest OPS1 Cursor était **RECOMMENDATION — NOT DECIDED**.
**Décision Morris G0-A :** désormais **ADOPTED**.


```

## B4 T-A5 / journal / Ack lines (after)

```
| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · M4 architecture decided **≠** M4 Delivery authorized · M4 architecture decided **≠** Cursor REAL authorized · Gate D model adopted **≠** Gate D implemented **≠** Gate D consumed · L7-1 adopted **≠** Critical Ack promoted **≠** Auth.js promoted · technical launch journal adopted for M4 **≠** Product Store promotion · ≠ runtime v3 ADOPTED · ≠ full OA durable |
| Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **Memory partiel** — process-local |
| T-A5 REAL (Nora/Studio) | **MISSING ON MAIN** — fixture adapters only (`externalEffects:false`) |
| T-A5 Attempt / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` | **KEEP** core lifecycle + **KEEP** zero-effect port | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) |
| T-A5 specialized REAL boundary | MISSING on main | **ADAPT / COMPLETE in M4 Delivery** | OA-owned `RealExecutionLaunchPort` / `CursorCliLaunchGateway` (or equiv.) — **no** OA→OPS1 product runtime coupling (D-M4-01) |
| T-A5 launch journal (CREATED/LAUNCHED) | MISSING on main | **TEMPORARY WITH EXIT — DECIDED FOR M4** (D-M4-02) | Technical safety journal ; ≠ Product Store ; ≠ dual product persistence ; exit → Attempt/Evidence durable path M5+ / dedicated Morris gate |
| AgentCapability REAL RO profile | Fixture agent only | **KEEP** model / **ADAPT** bounded REAL read-only profile (D-M4-03) | Static immutable deny-by-default registry retained ; no live registry for M4 |
| Auth.js / Critical Ack candidate | dirty only (inspected) | **DEFER for first RO** (D-M4-05) · **NOT PROMOTED** | Not a prerequisite of first M4 read-only proof ; remains candidate for future N2/N3 / IAM gate ; debt **preserved** |
| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **REPLACE** progressif (T-A1 + T-A2 + T-A3 HD + T-A4 ExecutionContract = SQLite Product **ON MAIN through M3**) | Attempt/Evidence/Trajectory/Confirmation restent process-local ; launch journal future = technical TEMPORARY WITH EXIT (≠ Product Store) |
| Cursor REAL behind T-A5 | **MISSING ON MAIN** — **ARCHITECTURE DECIDED — DELIVERY GAP OPEN** (D-M4-01→05) | M4 Delivery |
| **D-M4-02** | Technical durable launch journal CREATED/LAUNCHED — **TEMPORARY WITH EXIT** ; no ambiguous auto-relaunch after restart ; **not** Product Store ; no dual product-state persistence ; exit → Attempt/Evidence durability M5+ / dedicated Morris gate | **ADOPTED** |
- Auth.js / Critical Ack promotion for elevated classes — open (see D-M4-05)
| **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
| **Architecture selected (D-M4-01→05)** | specialized REAL OA boundary (Option B) · temporary durable launch journal CREATED/LAUNCHED · bounded RO AgentCapability · durable Gate D GD-1 · L7-1 for first RO |
| **Actifs** | T-A5 lifecycle **KEEP** · fixture port `externalEffects:false` **KEEP** · OPS1 Cursor primitives **HARVEST** · Gate D model **ADOPTED** · launch journal **DECIDED TEMPORARY WITH EXIT** |
```

## B6 M4 Architecture Decisions (after — complet)

```markdown
### M4 Architecture Decisions — CONSUMED BY MORRIS

GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f533d958c82b7251edb1a5a4b45f0`

| ID | Décision | Statut |
| --- | --- | --- |
| **D-M4-01** | L6 Option B — keep `ExecutionAdapterPort` zero-effect (`externalEffects:false`) ; introduce OA-owned specialized REAL boundary (`RealExecutionLaunchPort` / `CursorCliLaunchGateway` or equiv.) at Delivery ; StartExecution remains sole authority sequencer ; **no** OA direct dependency on OPS1 product runtime | **ADOPTED** |
| **D-M4-02** | Technical durable launch journal CREATED/LAUNCHED — **TEMPORARY WITH EXIT** ; no ambiguous auto-relaunch after restart ; **not** Product Store ; no dual product-state persistence ; exit → Attempt/Evidence durability M5+ / dedicated Morris gate | **ADOPTED** |
| **D-M4-03** | First Cursor REAL AgentCapability = **bounded + read-only** ; minimal caps ; static immutable deny-by-default registry retained ; no dynamic registry for M4 ; no Git remote/commit/push/PR/merge in first proof | **ADOPTED** |
| **D-M4-04** | Gate D **GD-1** — explicit durable grant bound at minimum to contractId/version/fingerprint + attemptId + agentRef + actor + expiration ; checked before StartExecution REAL ; consumption coordinated with durable CREATED frontier ; never after real process start ; stale/expired/fingerprint mismatch/already-consumed = fail-closed ; no auto-replay after ambiguous restart ; Gate D ≠ Recommendation ≠ PREPARE projection ≠ Roadmap checklist | **ADOPTED** |
| **D-M4-05** | L7-1 for **first** M4 REAL read-only proof — Critical Ack / Auth.js **not** prerequisites of this weak-risk proof ; HD exact + ExecutionContract exact + applicable Confirmation + explicit Gate D suffice ; Critical Ack remains required/candidate for future N2/N3 / elevated / irreversible classes ; Auth.js/IAM product-grade = separate Morris gate ; local Auth.js+Ack bundle **not** promoted ; IAM debt **not** closed | **ADOPTED** |

**Supersession :** the prior Roadmap dependency “promotion Ack” for the **first M4 read-only proof** is **superseded by D-M4-05**. This does **not** delete Ack/Auth debt from the trajectory.

### Décisions / gates toujours ouverts

1. **M4 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**
2. First Cursor REAL proof — separate Morris GO **after** Delivery validation — **NOT AUTHORIZED**
3. Gate D first REAL consumption — part of that future REAL gate — **NOT CONSUMED** (model only)
4. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
5. Disposition OPS1 / D1 / execution-run — **Decision Required**
6. **M5** — **NOT AUTHORIZED**
7. runtime v3 adoption — **NOT AUTHORIZED**

### Décisions / gates historiques encore listés (non tranchés comme promotion)

- Auth.js / Critical Ack promotion for elevated classes — open (see D-M4-05)
- Cursor REAL enablement — open (architecture decided ≠ authorized)

```

## Milestone 4 (after — complet)

```markdown
### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio

| Champ | Contenu |
| --- | --- |
| **ID** | M4 |
| **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
| **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
| **État actuel** | **ARCHITECTURE DECISIONS ADOPTED** — **DELIVERY NOT STARTED / NOT AUTHORIZED** · F3 fixture only on main · OPS1 REAL parallèle · Cursor REAL DISABLED |
| **Architecture selected (D-M4-01→05)** | specialized REAL OA boundary (Option B) · temporary durable launch journal CREATED/LAUNCHED · bounded RO AgentCapability · durable Gate D GD-1 · L7-1 for first RO |
| **Actifs** | T-A5 lifecycle **KEEP** · fixture port `externalEffects:false` **KEEP** · OPS1 Cursor primitives **HARVEST** · Gate D model **ADOPTED** · launch journal **DECIDED TEMPORARY WITH EXIT** |
| **Gaps (Delivery)** | REAL specialized adapter **NOT IMPLEMENTED** · CREATED/LAUNCHED frontier **NOT IMPLEMENTED** · Gate D grant **NOT IMPLEMENTED / NOT CONSUMED** · RO Agent descriptor **NOT IMPLEMENTED** · default REAL OFF · adversarial crash/replay tests · no silent fixture fallback |
| **Dépendances** | M3 — **SATISFIED** · Architecture decisions D-M4-01→05 — **SATISFIED** · Critical Ack promotion — **NOT REQUIRED FOR FIRST RO by D-M4-05** · M4 Delivery GO — **REQUIRED** · First REAL GO — **REQUIRED AFTER DELIVERY VALIDATION** |
| **Travaux futurs M4 Delivery** | OA-owned REAL launch gateway harvested from OPS1 primitives · CREATED/LAUNCHED frontier · Gate D durable grant implementation · RO Agent descriptor · default REAL OFF · adversarial crash/replay tests · no silent fixture fallback · **no** Auth.js/Ack promotion unless separate GO |
| **Preuve de sortie future M4** | exact HumanDecision/ExecutionContract · bounded agent · Gate D consumed once · Cursor REAL invoked exactly once · CREATED/LAUNCHED trace · no duplicate launch after crash/restart · no fixture fallback · read-only bounded result · fail-closed unavailable/stale scenarios — **NOT SATISFIED** |
| **Statut** | **ARCHITECTURE DECIDED — DELIVERY NOT AUTHORIZED — CURSOR REAL NOT AUTHORIZED** |


```

## B10 Critical path (after — complet)

```markdown
## B10. Chemin critique explicite

```text
CRITICAL PATH:
  M1 durable Project/LPS — SATISFIED / MERGED ON MAIN (PR #337 @ c6925954…)
  → M2 Nora contextuel durable — VALIDATED BY MORRIS / MERGED ON MAIN / EXIT PROOF SATISFIED (PR #339 @ a9a4765…)
  → M3 HD durable + ExecutionContract exact — VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED (PR #341 @ 8eea4cbf…)
  → M4 Architecture DECIDED (D-M4-01→05 ADOPTED BY MORRIS)
  → M4 Delivery REAL-OFF [NEXT — NOT AUTHORIZED — MORRIS GO REQUIRED]
  → M4 Validation
  → Morris FIRST REAL gate
  → bounded Cursor REAL proof
  → M4 exit proof
  → M5 Evidence/ReviewBundle + Nora + LPS writeback
  → M6 boucle complète sans copier-coller

M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
M4 DELIVERY GATE: OPEN — MORRIS GO REQUIRED
CURSOR REAL GATE: OPEN — NOT AUTHORIZED
GATE D: MODEL ADOPTED — NOT IMPLEMENTED — NOT CONSUMED
CRITICAL ACK: DEFERRED FOR FIRST RO — FUTURE N2/N3 / IAM — NOT PROMOTED
TECHNICAL LAUNCH JOURNAL: DECIDED TEMPORARY WITH EXIT — NOT IMPLEMENTED — ≠ PRODUCT STORE

NEXT CAPABILITY: M4 DELIVERY REAL-OFF — NOT AUTHORIZED — MORRIS GO REQUIRED

TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack/Auth.js promotion for future N2/N3/IAM (not first RO) · Auth.js/IAM exit autorité M3 temporaire
G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
M2 MERGE GATE: CLOSED
M3 MERGE GATE: CLOSED
M3: VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED
M4: ARCHITECTURE DECISIONS ADOPTED — DELIVERY NOT AUTHORIZED — CURSOR REAL NOT AUTHORIZED
Cursor REAL DISABLED
Gate D NOT CONSUMED
runtime v3 NON ADOPTED
```


```

## Full useful Roadmap diff

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 9b29254..0093edf 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,13 +6,13 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git** | origin/main @ `8eea4cbf211d9e159626394477353f19126fe900` |
+| **Snapshot Git** | origin/main @ `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
 | **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
-| **Timestamp maintenance** | 2026-08-13 Europe/Paris — M3 VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED |
+| **Timestamp maintenance** | 2026-08-14 Europe/Paris — M4 ARCHITECTURE DECISIONS D-M4-01→05 ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED |
 | **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
-| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS |
-| **Sources** | Git `main` @ `8eea4cb…` · PR #337/#339/#340/#341 · CI #158/#162/#166 · decision pack G0 · framing `30`–`37` · M3 Product path on main `projects/sfia-studio/app/**` |
-| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · ≠ M4 authorized · ≠ runtime v3 ADOPTED · ≠ Cursor REAL authorized · ≠ Gate D consumed · ≠ Auth/Ack promoted · ≠ full OA durable |
+| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` |
+| **Sources** | Git `main` @ `607763d9…` · PR #337/#339/#340/#341/#342 · CI #158/#162/#166 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · M3 Product path on main `projects/sfia-studio/app/**` |
+| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · M4 architecture decided **≠** M4 Delivery authorized · M4 architecture decided **≠** Cursor REAL authorized · Gate D model adopted **≠** Gate D implemented **≠** Gate D consumed · L7-1 adopted **≠** Critical Ack promoted **≠** Auth.js promoted · technical launch journal adopted for M4 **≠** Product Store promotion · ≠ runtime v3 ADOPTED · ≠ full OA durable |

 ## B1. Nature du document

@@ -26,7 +26,7 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).

 ## B3. Point de départ factuel

-### Sur main (`8eea4cbf211d9e159626394477353f19126fe900`)
+### Sur main (`607763d9a1349d6b48633d8763f75ae3c07c84fc`)

 | Capacité | État observé |
 | --- | --- |
@@ -46,16 +46,18 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **Memory partiel** — process-local |
 | Autres OA (T-A3 HD) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) ; Confirmation reste Memory/process-local |
 | Autres OA (T-A4 ExecutionContract) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) — PREPARE-only ; no Attempt/REAL |
+| Architecture M4 | **DECIDED / DELIVERY PENDING** — D-M4-01→05 **ADOPTED BY MORRIS** ; code REAL **NOT IMPLEMENTED** on main |
+| T-A5 REAL (Nora/Studio) | **MISSING ON MAIN** — fixture adapters only (`externalEffects:false`) |
 | Cursor REAL depuis Nora | **0** / DISABLED |
-| Gate D | **NOT CONSUMED** |
+| Gate D | **NOT CONSUMED** (model **ADOPTED** by D-M4-04 — **NOT IMPLEMENTED**) |

 ### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`)

 | Élément | État |
 | --- | --- |
-| Auth.js GitHub + Critical Ack composition | Présent localement ; **pas sur HEAD** |
-| SqliteAuthorityAttemptJournal wiring | Présent localement ; pilot-bounded ; ≠ Product persistence |
-| Classification | Observation / prérequis candidat — **promotion = Decision Required** |
+| Auth.js GitHub + Critical Ack composition | Inspecté (handoff `366726945f…`) ; **pas sur HEAD** ; bundle **NOT promotion-ready** (pre-M3 dirty) |
+| SqliteAuthorityAttemptJournal / CREATED·LAUNCHED wiring | Inspecté ; concept = **HARVEST/ADAPT source** for D-M4-02 ; ≠ Product Store ; **NOT IMPLEMENTED** on main |
+| Classification | Observation / harvest source — **Auth/Ack bundle ≠ promotion** (D-M4-05) ; journal concept **DECIDED** as TEMPORARY WITH EXIT for M4 Delivery future |

 ### Recommandation d’audit (historique — supersédée)

@@ -73,18 +75,21 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | T-A2 Cycle/CKC | Product SQLite CycleInstance + F2/CKC/LPS linkage (PR #339) | **COMPLETE** (M2) / **KEEP** backbone | CycleInstance durable + restart-safe on main ; Trajectory/Epistemic restent Memory |
 | T-A3 HD/Confirm/Authority | Product SQLite HD **ON MAIN** (PR #341) + Confirmation Memory + local Morris authority TEMPORARY WITH EXIT | **COMPLETE** (M3) / **KEEP** backbone | HD durable on main ; Confirmation process-local ; Auth.js exit ouvert |
 | T-A4 ExecutionContract | Product SQLite + M3 PREPARE truthful + Cursor projection PREPARE-only **ON MAIN** (PR #341) | **COMPLETE** (M3) / **KEEP** backbone | Durable on main ; no Attempt/REAL ; fixture path historique/test conservé |
-| T-A5 Attempt/Adapter port | F3 fixture adapter | **ADAPT** / **HARVEST** | Port OK ; adapter REAL à harvest OPS1 |
+| T-A5 Attempt / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` | **KEEP** core lifecycle + **KEEP** zero-effect port | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) |
+| T-A5 specialized REAL boundary | MISSING on main | **ADAPT / COMPLETE in M4 Delivery** | OA-owned `RealExecutionLaunchPort` / `CursorCliLaunchGateway` (or equiv.) — **no** OA→OPS1 product runtime coupling (D-M4-01) |
+| T-A5 launch journal (CREATED/LAUNCHED) | MISSING on main | **TEMPORARY WITH EXIT — DECIDED FOR M4** (D-M4-02) | Technical safety journal ; ≠ Product Store ; ≠ dual product persistence ; exit → Attempt/Evidence durable path M5+ / dedicated Morris gate |
+| AgentCapability REAL RO profile | Fixture agent only | **KEEP** model / **ADAPT** bounded REAL read-only profile (D-M4-03) | Static immutable deny-by-default registry retained ; no live registry for M4 |
 | T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
 | T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
 | Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
 | F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
 | vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition root Studio |
-| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable |
+| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable ; harvest ≠ call OPS1 runtime from OA |
 | execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
 | D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
 | FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
-| Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
-| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **REPLACE** progressif (T-A1 + T-A2 + T-A3 HD + T-A4 ExecutionContract = SQLite Product **ON MAIN through M3**) | Attempt/Evidence/Trajectory/Confirmation restent process-local |
+| Auth.js / Critical Ack candidate | dirty only (inspected) | **DEFER for first RO** (D-M4-05) · **NOT PROMOTED** | Not a prerequisite of first M4 read-only proof ; remains candidate for future N2/N3 / IAM gate ; debt **preserved** |
+| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **REPLACE** progressif (T-A1 + T-A2 + T-A3 HD + T-A4 ExecutionContract = SQLite Product **ON MAIN through M3**) | Attempt/Evidence/Trajectory/Confirmation restent process-local ; launch journal future = technical TEMPORARY WITH EXIT (≠ Product Store) |

 ## B5. Gap map → boucle cible

@@ -93,18 +98,22 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | Project/LPS durable | **MERGED ON MAIN — EXIT PROOF SATISFIED** (PR #337) | — |
 | GuidedSession / historique durable | PARTIAL / MISSING — **DEFERRED** (dette optionnelle Roadmap) | usage quotidien / milestone ultérieur |
 | CycleInstance réel lié F2 | **CLOSED ON MAIN — M2** (PR #339) — Product SQLite + F2 wire + restart proof | — |
-| HumanDecision durable/authoritative | **CLOSED ON MAIN — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT (durabilité HD fermée ≠ IAM product-grade fermé) | M4 Auth.js / Gate D |
+| HumanDecision durable/authoritative | **CLOSED ON MAIN — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT (durabilité HD fermée ≠ IAM product-grade fermé) | M4 Gate D / future IAM (Ack **not** absolute for first RO — D-M4-05) |
 | CKC ↔ cycle binding | **CLOSED ON MAIN — M2** — `ckcResolutionRef` projection on LPS | — |
 | live contextSnapshot | **CLOSED ON MAIN — M2** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
-| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | M4 REAL |
+| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | M4 REAL Delivery |
 | Cursor projection canonique | **CLOSED ON MAIN — M3 PREPARE-only** (`executionAllowed=false`) | M4 |
-| Cursor REAL behind T-A5 | MISSING on Nora | M4 |
-| Critical Ack UI | CANDIDATE unwired | M4 |
+| Cursor REAL behind T-A5 | **MISSING ON MAIN** — **ARCHITECTURE DECIDED — DELIVERY GAP OPEN** (D-M4-01→05) | M4 Delivery |
+| REAL specialized adapter boundary | **DECIDED — NOT IMPLEMENTED** (D-M4-01 Option B) | M4 Delivery |
+| durable launch frontier (CREATED/LAUNCHED) | **DECIDED — NOT IMPLEMENTED** (D-M4-02 TEMPORARY WITH EXIT) | M4 Delivery — main does **not** yet prove REAL crash-safe replay |
+| Gate D durable grant | **DECIDED MODEL — NOT IMPLEMENTED / NOT CONSUMED** (D-M4-04 GD-1) | M4 Delivery + future first-REAL GO |
+| bounded REAL AgentCapability RO | **DECIDED — NOT IMPLEMENTED** (D-M4-03) | M4 Delivery |
+| Critical Ack UI | CANDIDATE / MISSING — **NOT BLOCKING FIRST M4 READ-ONLY PROOF BY D-M4-05** ; remains for future N2/N3 / IAM | future N2/N3 · IAM gate |
 | Evidence durable | MISSING | M5 |
 | ReviewBundle → LPS writeback | MISSING | M5/M6 |
 | Nora post-exec analysis | PARTIAL (UI cards) | M5 |
-| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle/HD/ExecutionContract **restart-safe ON MAIN** ; conversation/proposal/Confirmation/Attempt/Evidence Memory | M4+ |
-| IAM/authz product-grade | PARTIAL (M3 local authority temporary ; Auth.js candidate) | M4/M8 |
+| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle/HD/ExecutionContract **restart-safe ON MAIN** ; conversation/proposal/Confirmation/Attempt/Evidence Memory ; **REAL crash-safe replay not proven on main** (D-M4-02 defines future fail-closed frontier) | M4+ |
+| IAM/authz product-grade | PARTIAL / MISSING (M3 local authority temporary ; Auth.js candidate **NOT PROMOTED**) — **not** a blocker of first RO proof (D-M4-05) ; debt preserved | future IAM gate / M8 |

 ## B6. Decisions / gates

@@ -130,13 +139,34 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 - exit proof HumanDecision/LPS/ExecutionContract + restart PREPARE + fingerprint + unresolved semantics **SATISFIED**
 - merge gate M3 **CLOSED**

-### Décisions / gates toujours ouverts (non tranchés ici)
+### M4 Architecture Decisions — CONSUMED BY MORRIS

-1. Promotion Auth.js / Critical Ack candidate — **Decision Required**
-2. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
-3. Disposition OPS1 / D1 / execution-run — **Decision Required**
-4. **M4 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**
+GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f533d958c82b7251edb1a5a4b45f0`

+| ID | Décision | Statut |
+| --- | --- | --- |
+| **D-M4-01** | L6 Option B — keep `ExecutionAdapterPort` zero-effect (`externalEffects:false`) ; introduce OA-owned specialized REAL boundary (`RealExecutionLaunchPort` / `CursorCliLaunchGateway` or equiv.) at Delivery ; StartExecution remains sole authority sequencer ; **no** OA direct dependency on OPS1 product runtime | **ADOPTED** |
+| **D-M4-02** | Technical durable launch journal CREATED/LAUNCHED — **TEMPORARY WITH EXIT** ; no ambiguous auto-relaunch after restart ; **not** Product Store ; no dual product-state persistence ; exit → Attempt/Evidence durability M5+ / dedicated Morris gate | **ADOPTED** |
+| **D-M4-03** | First Cursor REAL AgentCapability = **bounded + read-only** ; minimal caps ; static immutable deny-by-default registry retained ; no dynamic registry for M4 ; no Git remote/commit/push/PR/merge in first proof | **ADOPTED** |
+| **D-M4-04** | Gate D **GD-1** — explicit durable grant bound at minimum to contractId/version/fingerprint + attemptId + agentRef + actor + expiration ; checked before StartExecution REAL ; consumption coordinated with durable CREATED frontier ; never after real process start ; stale/expired/fingerprint mismatch/already-consumed = fail-closed ; no auto-replay after ambiguous restart ; Gate D ≠ Recommendation ≠ PREPARE projection ≠ Roadmap checklist | **ADOPTED** |
+| **D-M4-05** | L7-1 for **first** M4 REAL read-only proof — Critical Ack / Auth.js **not** prerequisites of this weak-risk proof ; HD exact + ExecutionContract exact + applicable Confirmation + explicit Gate D suffice ; Critical Ack remains required/candidate for future N2/N3 / elevated / irreversible classes ; Auth.js/IAM product-grade = separate Morris gate ; local Auth.js+Ack bundle **not** promoted ; IAM debt **not** closed | **ADOPTED** |
+
+**Supersession :** the prior Roadmap dependency “promotion Ack” for the **first M4 read-only proof** is **superseded by D-M4-05**. This does **not** delete Ack/Auth debt from the trajectory.
+
+### Décisions / gates toujours ouverts
+
+1. **M4 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**
+2. First Cursor REAL proof — separate Morris GO **after** Delivery validation — **NOT AUTHORIZED**
+3. Gate D first REAL consumption — part of that future REAL gate — **NOT CONSUMED** (model only)
+4. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
+5. Disposition OPS1 / D1 / execution-run — **Decision Required**
+6. **M5** — **NOT AUTHORIZED**
+7. runtime v3 adoption — **NOT AUTHORIZED**
+
+### Décisions / gates historiques encore listés (non tranchés comme promotion)
+
+- Auth.js / Critical Ack promotion for elevated classes — open (see D-M4-05)
+- Cursor REAL enablement — open (architecture decided ≠ authorized)
 ## B7–B8. Roadmap capability-driven (milestones)

 ### Gate 0 — Convergence architecture / persistence
@@ -217,7 +247,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | **Merge** | **CLOSED** — PR #341 MERGED @ `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS |
 | **Exit evidence** | **EXIT PROOF SATISFIED ON MAIN** |
 | **Preuve e2e** | GO → HD durable + LPS N+1 · restart → PREPARE sans Proposal · ExecutionContract durable · fingerprint persisted=recomputed=projection · unresolved semantics fail-closed · Cursor PREPARE-only · authority adversarial PASS · local 1656 / 131 / 0 · CI #166 SUCCESS · merge #341 |
-| **Next** | M4 — **NEXT CAPABILITY** — **NOT AUTHORIZED — MORRIS GO REQUIRED** |
+| **Next** | M4 — **ARCHITECTURE DECISIONS ADOPTED** — **DELIVERY NOT AUTHORIZED — MORRIS GO REQUIRED** |
 | **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

 ### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio
@@ -227,12 +257,14 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | **ID** | M4 |
 | **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
 | **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
-| **État actuel** | F3 fixture only ; OPS1 REAL parallèle |
-| **Actifs** | T-A5 port ; OPS1 Cursor (**HARVEST**) ; critical-ack candidate |
-| **Gaps** | L6 adapter ; L7 Ack UI ; Gate D |
-| **Dépendances** | M3 — **SATISFIED** ; promotion Ack ; Gate D |
-| **Preuve e2e** | Attempt REAL + journal markers + Evidence non-fixture ; FAIL CLOSED si adapter unavailable |
-| **Statut** | **NOT STARTED** — **NOT AUTHORIZED — MORRIS GO REQUIRED** |
+| **État actuel** | **ARCHITECTURE DECISIONS ADOPTED** — **DELIVERY NOT STARTED / NOT AUTHORIZED** · F3 fixture only on main · OPS1 REAL parallèle · Cursor REAL DISABLED |
+| **Architecture selected (D-M4-01→05)** | specialized REAL OA boundary (Option B) · temporary durable launch journal CREATED/LAUNCHED · bounded RO AgentCapability · durable Gate D GD-1 · L7-1 for first RO |
+| **Actifs** | T-A5 lifecycle **KEEP** · fixture port `externalEffects:false` **KEEP** · OPS1 Cursor primitives **HARVEST** · Gate D model **ADOPTED** · launch journal **DECIDED TEMPORARY WITH EXIT** |
+| **Gaps (Delivery)** | REAL specialized adapter **NOT IMPLEMENTED** · CREATED/LAUNCHED frontier **NOT IMPLEMENTED** · Gate D grant **NOT IMPLEMENTED / NOT CONSUMED** · RO Agent descriptor **NOT IMPLEMENTED** · default REAL OFF · adversarial crash/replay tests · no silent fixture fallback |
+| **Dépendances** | M3 — **SATISFIED** · Architecture decisions D-M4-01→05 — **SATISFIED** · Critical Ack promotion — **NOT REQUIRED FOR FIRST RO by D-M4-05** · M4 Delivery GO — **REQUIRED** · First REAL GO — **REQUIRED AFTER DELIVERY VALIDATION** |
+| **Travaux futurs M4 Delivery** | OA-owned REAL launch gateway harvested from OPS1 primitives · CREATED/LAUNCHED frontier · Gate D durable grant implementation · RO Agent descriptor · default REAL OFF · adversarial crash/replay tests · no silent fixture fallback · **no** Auth.js/Ack promotion unless separate GO |
+| **Preuve de sortie future M4** | exact HumanDecision/ExecutionContract · bounded agent · Gate D consumed once · Cursor REAL invoked exactly once · CREATED/LAUNCHED trace · no duplicate launch after crash/restart · no fixture fallback · read-only bounded result · fail-closed unavailable/stale scenarios — **NOT SATISFIED** |
+| **Statut** | **ARCHITECTURE DECIDED — DELIVERY NOT AUTHORIZED — CURSOR REAL NOT AUTHORIZED** |

 ### Milestone 5 — Retour de preuve + analyse Nora

@@ -294,8 +326,8 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
 | V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
 | V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
-| V3-F11 AgentCapability | Caps agents | Fixture agent | M4 | REAL agent descriptor | harvest |
-| V3-F12 Réversibilité | Action policy | Partial confirmations | M3–M4 | confirm+ack path | Ack UI |
+| V3-F11 AgentCapability | Caps agents | Fixture agent · **bounded REAL RO profile DECIDED — NOT IMPLEMENTED** (D-M4-03) | M4 | REAL agent descriptor RO | Delivery |
+| V3-F12 Réversibilité | Action policy | Partial confirmations · Gate D model **ADOPTED** · Ack **deferred for first RO** (D-M4-05) | M3–M4 | confirm + Gate D (+ Ack for N2/N3 later) | Delivery / future IAM |
 | V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
 | V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
 | V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |
@@ -307,19 +339,32 @@ CRITICAL PATH:
   M1 durable Project/LPS — SATISFIED / MERGED ON MAIN (PR #337 @ c6925954…)
   → M2 Nora contextuel durable — VALIDATED BY MORRIS / MERGED ON MAIN / EXIT PROOF SATISFIED (PR #339 @ a9a4765…)
   → M3 HD durable + ExecutionContract exact — VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED (PR #341 @ 8eea4cbf…)
-  → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
-  → M5 Evidence/ReviewBundle + LPS writeback
+  → M4 Architecture DECIDED (D-M4-01→05 ADOPTED BY MORRIS)
+  → M4 Delivery REAL-OFF [NEXT — NOT AUTHORIZED — MORRIS GO REQUIRED]
+  → M4 Validation
+  → Morris FIRST REAL gate
+  → bounded Cursor REAL proof
+  → M4 exit proof
+  → M5 Evidence/ReviewBundle + Nora + LPS writeback
   → M6 boucle complète sans copier-coller

-NEXT CAPABILITY: M4 — NOT AUTHORIZED — MORRIS GO REQUIRED
+M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
+M4 DELIVERY GATE: OPEN — MORRIS GO REQUIRED
+CURSOR REAL GATE: OPEN — NOT AUTHORIZED
+GATE D: MODEL ADOPTED — NOT IMPLEMENTED — NOT CONSUMED
+CRITICAL ACK: DEFERRED FOR FIRST RO — FUTURE N2/N3 / IAM — NOT PROMOTED
+TECHNICAL LAUNCH JOURNAL: DECIDED TEMPORARY WITH EXIT — NOT IMPLEMENTED — ≠ PRODUCT STORE
+
+NEXT CAPABILITY: M4 DELIVERY REAL-OFF — NOT AUTHORIZED — MORRIS GO REQUIRED

 TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
 FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
-DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack promotion · Auth.js/IAM (exit autorité M3 temporaire)
+DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack/Auth.js promotion for future N2/N3/IAM (not first RO) · Auth.js/IAM exit autorité M3 temporaire
 G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
 M2 MERGE GATE: CLOSED
 M3 MERGE GATE: CLOSED
 M3: VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED
+M4: ARCHITECTURE DECISIONS ADOPTED — DELIVERY NOT AUTHORIZED — CURSOR REAL NOT AUTHORIZED
 Cursor REAL DISABLED
 Gate D NOT CONSUMED
 runtime v3 NON ADOPTED
@@ -357,5 +402,7 @@ Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
 - M1 : PR #337 · merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI #158 · handoff `84330e34461bbd35adc7baa14fabe993baf24288`
 - M2 : PR #339 · head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` · merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI #162 · handoff PR-readiness `1ad4746b44169d777a726fc8ceeed1c663469c40`
 - M3 : PR #341 · head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` · merge `8eea4cbf211d9e159626394477353f19126fe900` · CI #166 · handoff PR-readiness `2a5759232bf2b17c98f002ad087f2c4c14b65d4d`
+- M3 post-merge Roadmap : PR #342 · merge `607763d9a1349d6b48633d8763f75ae3c07c84fc`
+- M4 architecture pack : `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · GO **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05)
 - Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
-- Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37` (dont DOC-DEBT-M1-01 sur `32`)
+- Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37` (dont `34` · DOC-DEBT-M1-01 sur `32`)

```

## Contradiction Ack scan

| Check | Result |
|-------|--------|
| prior absolute promotion Ack first-RO dependency removed | YES |
| supersession D-M4-05 traced | True |
| first RO NOT REQUIRED Ack | True |
| residual bad absolute patterns | NONE |
| Ack/Auth debt preserved | YES (DEFER / NOT PROMOTED / future N2/N3/IAM) |

## Debts preserved

conversation/proposal process-local · Confirmation process-local · Attempt/Evidence Memory · Trajectory/Epistemic Memory · LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT · Auth.js/IAM · Critical Ack N2/N3 future · launch journal TEMPORARY WITH EXIT · DOC-DEBT-M1-01 · OPS1/D1/execution-run disposition · M5 Evidence→LPS · Nora post-exec M5

## Gates remaining open

M4 Delivery GO · First REAL GO · Gate D consumption · Ack/Auth promotion for N2/N3/IAM · OPS1/D1/execution-run · M5 · runtime v3

## Git validation

```
diff --check: PASS
name-status:
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

stat:
 .../convergence/sfia-studio-convergence-roadmap.md | 125 ++++++++++++++-------
 1 file changed, 86 insertions(+), 39 deletions(-)

status:
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

cached: (empty)
```

## Coverage

| Item | Status |
|------|--------|
| modified content useful/full | YES |
| D-M4-01→05 traced | YES |
| L7 first-RO dependency aligned | YES |
| debts preserved | YES |
| commit/push/PR | NONE |
| synthesis only | NO |
| Review Pack verdict | COMPLETE |

## Verdict

**M4 ARCHITECTURE DECISIONS ROADMAP SYNC COMPLETE —**
D-M4-01 TO D-M4-05 TRACED —
L7 FIRST-RO DEPENDENCY ALIGNED —
DEBTS PRESERVED —
M4 ARCHITECTURE GATE CLOSED —
M4 DELIVERY NOT AUTHORIZED —
CURSOR REAL NOT AUTHORIZED —
GATE D NOT CONSUMED —
NO PROJECT COMMIT/PUSH/PR —
READY FOR CHATGPT REVIEW / MORRIS M4 DELIVERY GATE
