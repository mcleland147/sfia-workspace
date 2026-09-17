# SFIA Studio — MACRO Delivery + Reproof09 REAL — FULL Review Pack

**Final verdict:** FAIL REAL AT TESTED HISTORICAL PROJECT SCOPE
**Delivery phase:** PASS (PR #497 merged; post-merge Required Gate green)
**REAL campaign:** FAIL REAL (Cursor spawned; authorized target unmet; Attempt non-terminal)
**Runtime v3:** NON ADOPTED
**Date (UTC):** 2026-09-17

---

## 1. Exact Morris macro GO

GO MORRIS — REMOVE THE REDUNDANT `origin_remote_mismatch` WORKSPACE GATE —
KEEP THE USEFUL PRODUCT / EXECUTION GUARANTEES —
DELIVER + VALIDATE + COMMIT + PUSH + ONE PR + CI —
CONDITIONAL MERGE IF STRICTLY BOUNDED AND REQUIRED GATE GREEN —
VERIFY POST-MERGE MAIN + REQUIRED GATE —
THEN IMMEDIATELY EXECUTE ONE FRESH AUTHENTICATED PRODUCT REPROOF09 REAL CAMPAIGN —
ONE BOUNDED CURSOR DOCS_WRITE REAL SPAWN MAX —
EVIDENCE / REVIEWBUNDLE — RESTART / NO-RELAUNCH — NO AUTOMATIC RETRY —
FULL REVIEW PACK + REVIEW HANDOFF — NO MICRO-CYCLES.

---

## 2. Macro qualification

- Project: SFIA Studio
- PHASE A: Cycle 8 Delivery / EVOL / CRITICAL
- PHASE B: Cycle 9 QA authenticated REAL / EVOL / CRITICAL
- One coherent macro lot (Build Doctrine R2/R8/R18)
- Product Completion: CLOSED / COMPLETE
- Runtime v3: NON ADOPTED

---

## 3. Initial Git truth + handoff

| Fact | Value |
|------|-------|
| Starting origin/main | `0052037c9a18a5d72f896876af8ce46e4ee2cf94` |
| Prior Reproof09 handoff tip | `85b16d91d40a64ce4c6241aacdb124fb00d28c29` |
| Prior campaign (forensic) | STOP AFTER EXECUTE / PRE-SPAWN `origin_remote_mismatch` |

---

## PHASE A — Delivery / integration

### Production change

Primary file: `studioGitWorktreeWorkspace.ts`

REMOVED from `prepareWorkspace()` and `resumeVerifiedWorkspace()`:
- `git remote get-url origin`
- `origin_remote_missing` / `origin_remote_mismatch`
- comparison to binding remoteUrl and identity-derived HTTPS URL
- unused `normalizeGitRemoteUrl()` in this file

KEPT: full SHA validation, managedRepoRoot, execRoot confinement, path collision, trust-marker compatibility, base commit existence, worktree add --detach, exact HEAD==baseHeadSha, resume registration/toplevel/HEAD, expected file/digest checks.

`observeLocalCommitFacts.ts` origin checks for GCEC commit observe intentionally untouched.

### Tests

`gcecCont01WorkspaceResume.d0.test.ts` — positive regression: filesystem-form origin accepted; workspace created; HEAD verified. Obsolete origin-mismatch-only expectations removed/rewritten.

### Delivery Git

| Item | Value |
|------|-------|
| Branch | `delivery/sfia-studio-remove-origin-gate-reproof09-real` |
| Feature commit | `2d4b09be45fa6f88a7b160523481ed0dd385dfac` |
| Subject | fix(sfia-studio): remove redundant managed-repo origin gate |
| Diffstat | 2 files, +80 / -49 |
| PR | https://github.com/mcleland147/sfia-workspace/pull/497 MERGED |
| Accepted head | `2d4b09be…` |
| Merge commit | `04bcfecbf0f40a7ba818b0ca074e7ea3722e635c` |
| Parents | `0052037c…` + `2d4b09be…` |
| Tree | `e94a3c09ccf9fa3293dfe0b3821456fee2527c79` |

### PR CI + post-merge

Post-merge CI run **35207115937** on `04bcfecb`:
- Detect SUCCESS
- Build and validate SUCCESS
- **SFIA Studio Required Gate SUCCESS**
- overall SUCCESS

Delivery REAL launches: **0**

---

## PHASE B — Fresh authenticated Reproof09 REAL

### Runtime anchor

| Fact | Value |
|------|-------|
| Proof worktree | `/Users/morris/Projects/sfia-studio-product-reproof09-real-04bcfecb` |
| HEAD / origin/main | `04bcfecbf0f40a7ba818b0ca074e7ea3722e635c` |

### Fresh isolated DB

| Field | Value |
|-------|-------|
| Source sha256 | `a7a591379f521e9aa4d94f167ea4612cc488d4002a30abb3a070bbc572a27cc9` |
| Destination | `…/reproof09-real-b/product/oa-product.sqlite` |
| Method | sqlite transaction-consistent backup |
| Pre-checks | Project/Decision/original M3; attempts 0; no successor |

### Historical lineage (verified)

- Project `prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6` — Gestion de tâches
- Proposal `prop:f2:edba677a-123f-4f5e-baad-50533a65a3a0`
- HumanDecision `dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411`
- Original M3 `xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411`

### Rematerialization + successor

Original superseded v4 → successor `xct:m3-res:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411` confirmed v3.

| Field | Value |
|-------|-------|
| Fingerprint | `0999f5d590f6af32cfdc5e8e3162a91c03e550e062a47c832bf3f081ab9bfc99` |
| action/target/scope | cursor.docs_write.apply / workspace.isolated.docs_write / studio.gcec.docs_write |
| capability | cap:cursor.docs_write |
| targetPath | `projects/sfia-studio/.sandbox/gestion-de-taches.md` |
| baseHeadSha | `04bcfecbf0f40a7ba818b0ca074e7ea3722e635c` |
| PREPARE_ONLY etc. | absent |
| Attempts before Execute | 0 |

### Managed repo — key regression

| Field | Value |
|-------|-------|
| Base / root | `/tmp/sfia-r09b` / `…/mcleland147__sfia-workspace` |
| HEAD | `04bcfecb…` (= sealed) |
| **origin** | `/Users/morris/Projects/sfia-workspace` (**local filesystem**) |
| `git remote set-url` | **NOT run** |
| Target pre-state | ABSENT |

**Delivery fix proven at REAL:** no `origin_remote_mismatch`; prepare/launch proceeded.

### Governance

- Inspection `insp:10a7d8a936f7b8f3`
- Confirmation `cfm:w2:xct:m3-res:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411:v2` consumed
- Authority `avr:9d7b727712eea1f9` AUTHORIZED N3
- Sufficient agent `agt:m4.cursor.bounded_docs_write`

### REAL execution

| Field | Value |
|-------|-------|
| Product Execute | 1 |
| StartExecution | 1 |
| Attempt | `xat:w3a:9eef34f25802c186` status **running** (non-terminal) |
| Gateway | `adp:m4-cursor-cli-real` |
| Frontier | CREATED + **LAUNCHED** `pid:93067` |
| boundaryProofMode | cursor_real |
| realProcessInvoked | true |
| Cursor REAL launches | **1** |
| Evidence (project) | **0** |
| ReviewBundle PASS | **0** |

Complete path returned early while process still pending (`awaitIfPending` not set); materialize rejected `ATTEMPT_STATUS_REFUSED`; Attempt left running after child exit.

### File effect (independent)

| Check | Result |
|-------|--------|
| Expected `projects/sfia-studio/.sandbox/gestion-de-taches.md` | **ABSENT** |
| Observed `.sandbox/gestion-de-taches.md` | **PRESENT** (untracked) |
| Allowlist | `projects/sfia-studio/.sandbox` |
| Path mismatch | **YES** |
| Digest | `84a5e6e8f379b785a3aefabb8d7122c2fff7f6c8ebd0daa495b779f10a7b8dd8` |
| Product commit/push/PR/merge | 0 |

#### FULL generated content (wrong path — forensics)

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

### Restart / no-relaunch

Stop + restart same HEAD/DB/managed base; Execute not clicked.
Post-restart: Attempt still running; count=1; Evidence=0; single LAUNCHED frontier; no new process.

### Optional continuity

PARTIAL. OpenAI LIVE 0. Nora LIVE 0.

---

## Counters

### Delivery integration Git (authorized)

Delivery commits 1 · pushes 1 · PRs 1 (#497) · merges 1 · Delivery REAL launches 0

### Product Journey REAL

Execute 1 · StartExecution 1 · Attempts 1 · Cursor REAL launches 1 · authorized docs_write effects 0 · Evidence PASS 0 · RB PASS 0 · restarts 1 · automatic relaunches 0 · OpenAI/Nora LIVE 0 · Product commit/push/PR/merge 0

---

## Reservations

1. Origin-gate removal SUCCESS — local origin accepted at REAL prepare/launch.
2. FAIL REAL — wrong path `.sandbox/…` vs sealed `projects/sfia-studio/.sandbox/…`.
3. Complete-await race left Attempt `running` without Evidence/RB.
4. NO RETRY under this GO; no speculative cascade (§26).

---

## Claims / anti-claims

Authorized: gate removed + merged; post-merge green; local-origin REAL spawn; restart/no-relaunch.

Forbidden: PASS REAL; authorized verified file effect; verified Evidence/RB success; runtime v3 ADOPTED; global L5.

---

## Exact final verdict

**FAIL REAL — AUTHENTICATED PRODUCT REPROOF09 REAL (POST PR #497)**

Delivery integrated. Local-origin managed repository accepted. One Cursor docs_write REAL process spawned (`pid:93067`). Authorized target unmet (wrong path). Attempt non-terminal (`running`). Evidence/ReviewBundle PASS unmet. NO RETRY. Runtime v3 NON ADOPTED.

---

## Next gate

**STOP FOR CHATGPT CRITICAL REVIEW.**

Next Product Journey direction after a future PASS (not claimed): Evidence/ReviewBundle → LPS/ProjectTrajectory → Nora/recommendation → next Pilote decision.

Path-allowlist enforcement / Complete await-to-terminal require a **new** Morris GO.
