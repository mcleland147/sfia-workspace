# SFIA Studio — MACRO Delivery + Reproof09 REAL — FULL Review Pack

**Verdict:** FAIL REAL (post-merge origin-gate removal accepted; Cursor REAL spawned; authorized target not produced)
**Date (UTC):** 2026-09-17
**Runtime v3:** NON ADOPTED

---

## 1. Exact Morris macro GO

GO MORRIS — REMOVE THE REDUNDANT `origin_remote_mismatch` WORKSPACE GATE — KEEP USEFUL PRODUCT / EXECUTION GUARANTEES — DELIVER + VALIDATE + COMMIT + PUSH + ONE PR + CI — CONDITIONAL MERGE IF STRICTLY BOUNDED AND REQUIRED GATE GREEN — VERIFY POST-MERGE MAIN + REQUIRED GATE — THEN IMMEDIATELY EXECUTE ONE FRESH AUTHENTICATED PRODUCT REPROOF09 REAL — ONE BOUNDED CURSOR DOCS_WRITE REAL SPAWN MAX — Evidence / ReviewBundle — restart / no-relaunch — NO AUTOMATIC RETRY — FULL Review Pack + handoff — NO MICRO-CYCLES.

---

## 2. Macro qualification

- Project: SFIA Studio
- PHASE A: Cycle 8 Delivery / EVOL / CRITICAL
- PHASE B: Cycle 9 QA REAL / EVOL / CRITICAL
- One coherent macro lot (Build Doctrine R2/R8/R18)
- Product Completion: CLOSED / COMPLETE
- Runtime v3: NON ADOPTED

---

## 3–4. Initial Git truth + Delivery change

Starting origin/main: `0052037c9a18a5d72f896876af8ce46e4ee2cf94`
Prior handoff tip: `85b16d91d40a64ce4c6241aacdb124fb00d28c29`

### Production change (`studioGitWorktreeWorkspace.ts`)

REMOVED from `prepareWorkspace()` and `resumeVerifiedWorkspace()`:
- `git remote get-url origin`
- `origin_remote_missing` / `origin_remote_mismatch`
- comparison to `repositoryBinding.remoteUrl` and identity-derived HTTPS URL
- unused `normalizeGitRemoteUrl()` helper in this file

KEPT: full SHA validation; managedRepoRoot; execRoot confinement; path collision; trust-marker; base commit existence; worktree add --detach; HEAD match; resume registration/toplevel/HEAD/file/digest checks.

NOT changed: `observeLocalCommitFacts.ts` GCEC commit origin checks (push/PR/merge redesign OUT OF SCOPE).

### Tests

`gcecCont01WorkspaceResume.d0.test.ts`:
- FRESH-LOCAL-ORIGIN: filesystem-form origin accepted; workspace created; HEAD verified; no `remote get-url`
- RESUME-LOCAL-ORIGIN: resume succeeds with filesystem-form origin

---

## 5. Delivery validation

- Focused workspace/REAL-OFF tests: PASS
- liveManagedRepoComposition: PASS
- typecheck / lint / full Vitest: PASS (4196 tests)
- ZERO REAL during Delivery

---

## 6–8. Branch / PR / CI / Merge / Post-merge

| Item | Value |
|------|-------|
| Branch | `delivery/sfia-studio-remove-origin-gate-reproof09-real` |
| Commit | `2d4b09be45fa6f88a7b160523481ed0dd385dfac` |
| PR | **#497** https://github.com/mcleland147/sfia-workspace/pull/497 |
| PR CI run | 35206520364 — Detect/Build/Required Gate **PASS** |
| Merge commit | `04bcfecbf0f40a7ba818b0ca074e7ea3722e635c` |
| Parents | `0052037c…` + `2d4b09be…` |
| Tree | `e94a3c09ccf9fa3293dfe0b3821456fee2527c79` |
| Head→merge content delta | **ZERO** |
| Source branch deleted | **NO** |
| Post-merge CI | **35207115937** — Detect/Build/Required Gate **SUCCESS** |
| origin/main after | `04bcfecbf0f40a7ba818b0ca074e7ea3722e635c` |

---

## 9. Fresh REAL campaign DB / lineage

| Field | Value |
|-------|-------|
| Proof worktree | `/Users/morris/Projects/sfia-studio-product-reproof09-real-04bcfecb` |
| HEAD | `04bcfecb…` |
| Source DB | workspace Product seed sha256 `a7a59137…` |
| Isolated DB | `.sfia-exec/reproof09-real-b/product/oa-product.sqlite` |
| Dest sha256 (initial) | `72aad490…` |
| Project | `prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6` |
| Decision | `dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` |
| Original M3 | `xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` |
| Prior Attempt IDs reused as forensic only | previous campaign `xat:w3a:9eef34f25802c186` NOT in source; fresh campaign regenerated same deterministic attempt id |
| Source Attempt counts | orig 0 / succ 0 / no prior successor in source |

NOT reused: prior managed-base-unconfigured DB; prior origin_remote_mismatch DB.

---

## 10. M4 successor

| Field | Value |
|-------|-------|
| Successor | `xct:m3-res:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` |
| Original | superseded v4 |
| Successor status at Execute | confirmed v3 |
| Fingerprint at Execute | `0999f5d590f6af32cfdc5e8e3162a91c03e550e062a47c832bf3f081ab9bfc99` |
| Action / target / scope | `cursor.docs_write.apply` / `workspace.isolated.docs_write` / `studio.gcec.docs_write` |
| Capability | `cap:cursor.docs_write` |
| baseHeadSha | `04bcfecbf0f40a7ba818b0ca074e7ea3722e635c` |
| targetPath | `projects/sfia-studio/.sandbox/gestion-de-taches.md` |
| Attempts before Execute | 0 |

---

## 11. Managed repo + LOCAL ORIGIN (key regression)

| Field | Value |
|-------|-------|
| Base | `/tmp/sfia-r09b` |
| Root | `/tmp/sfia-r09b/mcleland147__sfia-workspace` |
| HEAD | `04bcfecb…` (= sealed) |
| **origin** | `/Users/morris/Projects/sfia-workspace` (**filesystem path — intentionally NOT rewritten to HTTPS**) |
| Target pre-state | ABSENT |
| Origin-gate result | **ACCEPTED** — prepareWorkspace succeeded; worktree created |

This proves Delivery fix for the prior STOP AFTER EXECUTE / PRE-SPAWN root cause.

---

## 12. Inspect / Confirm / Authority

| Item | Value |
|------|-------|
| Inspection | `insp:10a7d8a936f7b8f3` |
| Confirmation | `cfm:w2:xct:m3-res:…:v2` consumed |
| Authority | `avr:9d7b727712eea1f9` **AUTHORIZED** |
| Sufficient agent | `agt:m4.cursor.bounded_docs_write` |
| Env | REAL=1, DET=0, managed base configured |

---

## 13. REAL execution / process

| Field | Value |
|-------|-------|
| Execute | **1** (UI Exécuter once) |
| Attempt | `xat:w3a:9eef34f25802c186` |
| Gate D | consumed |
| Frontier | CREATED + **LAUNCHED** `process_ref=pid:93067` |
| Frontier payload | `gatewayId=adp:m4-cursor-cli-real`, `boundaryProofMode=cursor_real`, `realProcessInvoked=true` |
| Worktree | `.sfia-exec/m4-worktrees/wt-4eabdf22dbc435441e0c6776` |
| Durable Attempt.status | **running** (stuck; never terminalized through observation/timeout within campaign window) |
| Durable processRef on Attempt | **null** (frontier holds pid) |
| Cursor REAL launches | **1** |
| REAL campaign spawn budget | **CONSUMED** |

---

## 14. FILE EFFECT — FAIL CORE

Authorized target:
`projects/sfia-studio/.sandbox/gestion-de-taches.md` → **ABSENT**

Observed unauthorized write:
`.sandbox/gestion-de-taches.md` (repo-root relative; **outside** pathAllowlist `projects/sfia-studio/.sandbox`)

Digest: `sha256:84a5e6e8f379b785a3aefabb8d7122c2fff7f6c8ebd0daa495b779f10a7b8dd8`
Bytes: 1056

### FULL generated unauthorized content

```markdown
# Fiche de cadrage fonctionnel — Gestion de tâches

## Objectif

Fournir une application simple de gestion de tâches permettant aux utilisateurs de créer, organiser, suivre et clôturer leurs tâches au quotidien, avec une vision claire de l’avancement.

## Périmètre fonctionnel

### Inclus

- Création, consultation, modification et suppression de tâches
- Attribution d’un statut (à faire, en cours, terminée)
- Priorisation des tâches (basse, moyenne, haute)
- Liste et filtrage des tâches par statut et priorité
- Marquage d’une tâche comme terminée

### Exclus

- Gestion multi-projets avancée
- Collaboration temps réel multi-utilisateurs
- Notifications push / e-mail
- Intégrations externes (calendrier, messagerie, etc.)
- Reporting analytique et tableaux de bord complexes

## Acteurs

- Utilisateur individuel : crée et gère ses propres tâches

## Résultat attendu

Une application utilisable au quotidien pour suivre un backlog personnel de tâches, avec un cycle de vie simple (création → suivi → clôture).
```

git status --short (worktree):
```
?? .sandbox/
```
untracked: `.sandbox/gestion-de-taches.md`

No commit / push / PR / merge.

Artifact-contract vs sealed EC: **FAIL** (wrong path; authorized expectedOutputs path missing).

---

## 15. Evidence / ReviewBundle

Campaign Project Evidence count: **0**
Campaign Project ReviewBundle count: **0**

PASS REAL Evidence/RB criteria **NOT met**.

---

## 16. Restart / no-relaunch

Stop Studio; restart same HEAD/DB/managed base; Execute NOT clicked.

Post-restart: same Attempt id/status=`running`; Attempt count=1; Evidence=0; no new launch observed.

NO automatic relaunch proven for this stuck Attempt (no second spawn after restart).

---

## 17. Exact counters

### Delivery integration (authorized project Git)

| Counter | Count |
|---------|------:|
| Delivery commits | 1 |
| Delivery pushes | 1 |
| Delivery PRs | 1 (#497) |
| Delivery merges | 1 |
| Delivery REAL launches | 0 |

### Product Journey REAL campaign

| Counter | Count |
|---------|------:|
| Authenticated Product entry | 1 |
| Rematerializations | 1 |
| Fresh inspections | >=1 |
| Confirmations | 1 |
| Authority evaluations | 1 |
| Product Execute | **1** |
| StartExecution | 1 |
| ExecutionAttempts | **1** |
| Cursor REAL launches | **1** |
| Cursor terminal completions (Product-observed) | **0** (Attempt stuck running) |
| Authorized docs_write effects | **0** |
| Unauthorized filesystem writes | **1** (`.sandbox/…`) |
| Evidence created | 0 |
| ReviewBundles created | 0 |
| Restarts | 1 |
| Automatic relaunches | 0 |
| OpenAI LIVE | 0 |
| Nora LIVE | 0 |
| Product commit/push/PR/merge | 0 |

---

## 18. Reservations / gaps (NO speculative fix in this campaign)

1. **PASS blocker:** Cursor wrote outside allowlist / wrong relative path (`.sandbox/` vs `projects/sfia-studio/.sandbox/`).
2. **Observation gap:** Attempt remained `running` with frontier LAUNCHED after child pid gone; no Product terminalization / Evidence within campaign window (past resolvedMaxDurationMs start without durable fail observed).
3. Origin-remote gate removal **succeeded** (local filesystem origin accepted; REAL spawn occurred).
4. Do NOT cascade another Product patch under this GO (§26).

---

## 19. Authorized claims

- Redundant origin-remote workspace gate removed and integrated on main `04bcfecb` with Required Gate green.
- Local-origin managed repository accepted by prepareWorkspace.
- Authenticated M3→M4 → Inspect/Confirm/AUTHORIZED → one Cursor REAL spawn proven.
- Restart preserved durable Attempt without automatic relaunch.

## 20. Forbidden claims

- PASS REAL / REAL BOUNDARY PROVEN AT TESTED SCOPE
- Bounded verified authorized file effect
- Verified Evidence / ReviewBundle for successful REAL
- Runtime v3 ADOPTED / global L5 / production autonomy

---

## 21. Exact final verdict

**FAIL REAL — AUTHENTICATED PRODUCT REPROOF09 REAL (POST #497)**

- Delivery + post-merge Required Gate: **PASS**
- Local-origin regression for workspace prepare: **PASS**
- Cursor REAL external process: **SPAWNED (1)** — campaign REAL spawn budget **CONSUMED**
- Authorized target verification: **FAIL**
- Evidence/ReviewBundle PASS criteria: **FAIL**
- NO RETRY under this GO
- Runtime v3 NON ADOPTED

## 22. Next gate

**STOP FOR CHATGPT CRITICAL REVIEW.**

Next Product Journey direction after any future PASS remains: Evidence/RB → LPS/Trajectory → Nora/recommendation → next Pilote decision.
Any next REAL or docs_write path-correctness Delivery requires a **new** Morris GO.
