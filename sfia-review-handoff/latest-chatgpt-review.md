# NEW-PROJECT-E2E-PREFLIGHT-01 — ChatGPT Critical Review Pack (FULL)

**Date UTC:** 2026-10-31T14:00:00Z
**Cycle:** 9 — QA / validation · Environment & Campaign Readiness · CRITICAL
**Verdict:** `STOP — STUDIO 3020 NOT QUALIFIED` (`STUDIO 3020 NOT RUNNING`)

**Anti-claims:** ≠ READY FOR CURSOR REAL EXECUTION · ≠ G-REAL GRANTED · ≠ L3 COMPLETE · ≠ RUNTIME V3 ADOPTED · ≠ LIVE PROVEN · ≠ CAMPAIGN STARTED · ≠ PRODUCT REDELIVERED · ≠ LUMEN CREATED

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Agent worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation` |
| Agent HEAD | `1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a` (detached; **pre-#630** Product symbols) |
| `origin/main` / `ls-remote` | **`7dd49ecd0699a3de9c03759a8fe4637baf31d149`** |
| Baseline ChatGPT | `7dd49ecd…` |
| Baseline check | **BASELINE_MATCH** |
| Dirty agent | `.tmp-sfia-review/chatgpt-review.md` only (review pack; **≠ Product**) |
| Prior handoff | tip `4b46c5c8…` / blob `fe34ccde…` — **VERIFIED CURRENT** (R24-NAP-UX-630-TRUTH-SYNC-01) |

**Worktrees pouvant héberger Studio (sélection):**

| Worktree | HEAD | Note |
|---|---|---|
| `…-feat-akg-m5-nora-adaptive-presentation` | `1c3a8d9e` | **MISSING #630** NAP UX consolidations |
| `…-feat-akg-m5-nap-test16-coverage-corr` | `1c3a8d9e` | même tip pré-#630 |
| `…-feat-akg-m5-nap-test16-coverage-corr-01` | `e37d3969` | Product #630 ancestor of main |
| `…-docs-akg-m5-nap-ux-630-postmerge-truth-sync` | `979a33ad` | docs tip; main tip = merge `7dd49ecd` |
| main workspace `sfia-workspace` | `980064c0` | autre branche QA P6 |

Aucun `reset` / `clean` / `stash` / `rebase` exécuté.

## 2. GO / périmètre

Préflight non destructif campagne E2E LUMEN. **Interdits respectés:** pas de CreateProject LUMEN · pas de message Nora · pas de Cursor REAL · pas d’arrêt/redémarrage Studio · pas de mutation Product/SQLite/PRR/Roadmap · pas de commit/push projet.

## 3. Convergence Pre-check

- Milestone **L3-S2 OPEN** · Roadmap CURRENT tip = GI-NAP #630 MERGED + R24 #631 docs sync on main `7dd49ecd`
- Acquis: L3-S1 DET · Project-first/S8 · Generic DET · SHE · NAP · Single-response · R24 sync
- Réserves inchangées: TEST-15 OPEN · EP-S2-05 NOT PROVEN · EP-S2-08 PARTIAL · Late Evidence OPEN · Mutating Generic Product E2E non prouvé · R-LIVE-EMIT / R-STOP-BROWSER / R-SRV-RESTART NOT PROVEN · **G-REAL NOT GRANTED** · L3 GLOBAL OPEN · runtime v3 NON ADOPTED

## 4. Serveur :3020 — contrôle principal

| Check | Résultat |
|---|---|
| `lsof -nP -iTCP:3020 -sTCP:LISTEN` | **aucun listener** |
| Ports 3000/3001/3021/3030 | aucun listener Studio |
| Processus `next dev` / node Studio | **aucun** processus Studio identifiable |
| `curl http://localhost:3020/studio` / `/login` | **connection refused** |
| PID / PPID / cwd / worktree / HEAD servi | **N/A — NOT RUNNING** |

**STOP clause applicable:** `STOP — STUDIO 3020 NOT RUNNING` → agrégé en **`STOP — STUDIO 3020 NOT QUALIFIED`**.

Historique (terminaux): instances Delivery/Fake QA-NAP-02 et campagne LIVE-E2E antérieures ont existé sur 3020; **processus courant absent** (arrêt préalable hors de ce cycle).

## 5. Nora LIVE — qualification (déclarée vs processus)

| Élément | Observation | Niveau |
|---|---|---|
| Process env actif | **indisponible** (pas de serveur) | NOT QUALIFIED |
| `.env.local` (main workspace; symlink dans agent WT) | `OPENAI_API_KEY=<PRESENT>` · `OPENAI_MODEL=gpt-5.6-luna` · **`OPS1_CONVERSATION_PROVIDER` ABSENT** | DOCUMENTED file-level |
| Fake force | `OPS1_CONVERSATION_PROVIDER!==fake` ⇒ code CURRENT n’impose pas Fake (`isFakeConversationProviderForced`) | DOCUMENTED |
| Provider path code | `resolveConversationProvider` → OpenAI si secrets + non-fake | DOCUMENTED on main |
| Preuve LIVE runtime | aucun appel OpenAI ce cycle; pas de dialogue | **≠ LIVE PROVEN** |

**Conclusion Nora:** configuration **fichier** compatible LIVE (clé+modèle; non-fake). **Configuration processus actif: NOT QUALIFIED.** Morris « Nora LIVE activé » = contrainte déclarée ≠ preuve technique courante.

## 6. Cursor REAL — qualification

| Élément | Observation |
|---|---|
| `SFIA_STUDIO_CURSOR_REAL` (.env.local) | **`1`** (déclaré) |
| `SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY` | **unset** → exclusion mutuelle fichier OK |
| Process env actif | **NOT QUALIFIED** (pas de serveur) |
| Launch Gateway / Attempt | **non exercés** (interdit) |
| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` | code CURRENT: gate Product pathless non-mutatif refuse Select/Start sans sandbox no-write — **DOCUMENTED** |
| G-REAL | **NOT GRANTED** pour la nouvelle campagne |

**REAL ENABLED (fichier) ≠ G-REAL GRANTED ≠ READY FOR EXECUTION.**

### Conditions futures avant REAL Execute (liste)

1. Studio `:3020` running · identity PID/worktree/HEAD = Git CURRENT (`7dd49ecd` or approved equivalent containing #630).
2. GO Morris campagne + **G-REAL** explicite pour LUMEN.
3. Auth Pilote session vivante contre ce serveur.
4. EC explicitement PREPARE + Inspect + Select/Start sous SHE.
5. Sealed git-target / managed repo root cohérents.
6. Ne pas contourner `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE`.
7. Backup DB avant toute exécution mutative.
8. Balise historique isolée / non écrasée.

## 7. Auth

| Item | Status |
|---|---|
| `BETTER_AUTH_URL` | `http://localhost:3020` (fichier) |
| Secrets Auth / GitHub OAuth | PRESENT (non exposés) |
| Allowlist GitHub user | set |
| Storage state cookies (`better-auth.*`) | présents, **non expirés** (domain=localhost) — snapshots locaux |
| Auth contre serveur courant | **NOT PROVEN** (serveur down) |
| Session fabriquée ce cycle | **non** |

## 8. Persistance / BALISE / isolation

### Chemins déclarés (.env.local)

- Product: `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite`
- Nora: `…/new-project-campaign-01/product/nora-session.sqlite`
- Contenu: 34 projets (FocusFlow… QA-NAP-02…) — **pas de projet BALISE**
- WAL/SHM: absents · aucun writer `lsof` observé

### Bases historiques LIVE-E2E (BALISE)

- Product: `/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite` — contient **BALISE** (`prj:d0c81c08-…`, `prj:4890155c-…`) + autres
- Nora: `/Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite`
- Backups présents: `pre-recovery-20261030T174247Z`, `pre-test16-resume-20261031T094312Z`
- WAL/SHM: absents · aucun writer observé · modes `rw-------`
- `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE`: **unset (OFF)**

**ÉCART MAJEUR:** le `.env.local` courant **ne pointe pas** vers `live-e2e-01` où BALISE réside. Relancer Studio avec ce `.env` **sans correction** exposerait `new-project-campaign-01` (≠ BALISE), au risque de confusion d’isolation campagne.

Aucune copie/migration/nettoyage DB ce cycle.

## 9. Conformité code Git CURRENT vs worktrees

| Ref | Symbols #630 (`splitPlainTextWithMarkdownTables`, `sanitizePresentationEyebrow`, `composeCanonicalFromPresentation`, `NoraCanonicalFallbackView`) |
|---|---|
| `origin/main` `7dd49ecd` | **PRESENT** |
| `e37d3969` (corr-01) | **PRESENT** (ancestor of main) |
| Agent / `1c3a8d9e` | **MISSING** |

Donc: servir depuis le worktree agent actuel = **RUNTIME BASELINE MISMATCH** potentiel si un redémarrage y était fait. **Non exécuté.**

## 10. R23 — Architecture-informed (chemin campagne)

| COMPONENT | RESPONSIBILITY | DEPENDENCIES | STATE OWNER | AUTHORITY | PERSISTENCE | IMPACT | PROOF LEVEL | KNOWN GAP |
|---|---|---|---|---|---|---|---|---|
| `/studio` UI + Auth | surface Pilote | Better Auth | browser+server | Pilote session | cookies | entry | DOCUMENTED; Auth live **NOT PROVEN** | server down |
| CreateProject / Resume | project bootstrap | OA Product | Product OA | Pilote | `oa_projects` Truth C | new project | DOCUMENTED/DET prior | LUMEN not created |
| LPS / ProjectTrajectory | living state | CreateProject | Product OA | system+Pilote | `oa_lps*` / trajectories | framing | DET prior | — |
| Nora Cognitive / LIVE | dialogue | provider OpenAI/Fake | Memory B + Product | Pilote turns | nora-session sqlite | cognition | DET+targeted LIVE prior | R-LIVE-EMIT; process down |
| F2 / Generic PREPARE | propose EC | Nora+OA | Product | fail-closed | EC rows | TEST-15 risk | DET + OPEN TEST-15 | unsolicited PREPARE |
| ExecutionContract Inspect | human review | EC | Product | Pilote | attestations | gate | DET | — |
| Single Human Execute | Select/Start | SHE + Attempt | Product | Pilote+Morris gates | attempts | REAL path | DET SHE | G-REAL open |
| Cursor REAL Gateway | spawn agent | REAL flag+seal | Attempt | REAL enablement | managed repos | effects | DOCUMENTED; REAL exec **NOT** this cycle | no-write sandbox gap |
| Evidence / ReviewBundle | materialize proof | Attempt result | Product | system | evidence tables | EP-S2-05/08 | PARTIAL | EP gaps |
| Nora post-Evidence | continuity | Memory B | Nora+Product | Pilote | session | reload≠restart | PARTIAL | R-SRV-RESTART |

**Chemin cible:** `/studio` → CreateProject → OA/LPS/Trajectory → Nora LIVE → F2/PREPARE → EC → Inspect/SHE → Cursor REAL → Evidence/RB → Nora continuity → replanification.

## 11. R24

**NO SEMANTIC PRODUCT IMPACT.** Aucune modification Product/PRR/Roadmap/digest. Pack + handoff only.

## 12. Campagne LUMEN — plan T0–T7 (préparé, non exécuté)

**Projet candidat:** LUMEN — Atelier d’initiation numérique.
**Livrable cible:** fiche animation Markdown (objectifs, déroulé, activités, critères).
**TEST-15 script:** « Je veux continuer à définir l’atelier avec toi. Ne prépare pas de contrat d’exécution pour le moment. » — si EC non sollicité: constater, conserver preuve, ne pas confirmer/exécuter, aucun correctif auto.

| ID | Objectif | Action Pilote | Attendu | État durable | Preuve | PASS/FAIL/PARTIAL/NOT PROVEN | Réserve | Gate | STOP |
|---|---|---|---|---|---|---|---|---|---|
| T0 | Environment Preflight | inspect only | 3020 CURRENT + LIVE/REAL/Auth/DB | n/a | ce pack | **FAIL / NOT QUALIFIED** (3020 down + DB path mismatch) | — | GO start server | **STOP now** |
| T1 | CreateProject | `/studio` create LUMEN | project Truth C | `oa_projects` | UI+DB | NOT STARTED | preserve BALISE | GO campagne | if wrong DB |
| T2 | Nora LIVE / LPS / Trajectory | dialogue besoin | framing progresses; NAP A1/B | LPS+Memory B | transcript+UI | NOT STARTED | R-LIVE-EMIT | — | if Fake silently |
| T3 | Negative PREPARE / TEST-15 | phrase TEST-15 | **pas** d’EC | no new EC | DB EC count | NOT STARTED | TEST-15 OPEN | — | if EC created→anomaly |
| T4 | Explicit PREPARE / Inspect | demander préparation | EC inspectable | EC+attestation | UI+DB | NOT STARTED | — | — | — |
| T5 | SHE / Cursor REAL | Select/Start | Attempt gated | attempt rows | logs+DB | NOT STARTED | G-REAL; no-write | **G-REAL GO** | without G-REAL |
| T6 | Evidence / RB / Business Result | after attempt | evidence+RB | evidence tables | DB | NOT STARTED | EP-S2-05 | — | ≠ auto Mission Evidence |
| T7 | Nora post-Evidence / reload | continue+reload browser | continuity | Memory B | UI reload | NOT STARTED | EP-S2-08; ≠ server restart | — | — |

## 13. Fake / REAL matrix (ce cycle)

| Mode | Status |
|---|---|
| Fake conversation | non forcé dans `.env.local` |
| OpenAI LIVE process | **NOT QUALIFIED** (no server) |
| Cursor REAL file flag | `=1` |
| Cursor REAL process | **NOT QUALIFIED** |
| Deterministic Cursor boundary | unset (OK vs REAL file) |
| G-REAL | **NOT GRANTED** |

## 14. Écarts / preuves / GO Morris requis

### Écart A — Studio 3020 NOT RUNNING
- Preuve: lsof vide · curl refused · no next process
- Impact: impossible de qualifier process env, Auth live, UI `/studio`
- Correction: redémarrage contrôlé sous **GO Morris dédié**
- Avant restart: backup `live-e2e-01` (+ confirmer DB cible campagne)

### Écart B — DB path `.env.local` ≠ BALISE store
- Preuve: BALISE only in `…/.sfia-exec/live-e2e-01/…`; env points `new-project-campaign-01`
- Impact: risque d’instance sans BALISE / mauvaise isolation
- Correction: aligner `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` sur `live-e2e-01` **ou** GO explicite pour autre isolation + conserver BALISE intact
- **Ne pas** auto-modifier env ce cycle

### Écart C — Worktree agent HEAD pré-#630
- Preuve: symbols #630 MISSING at `1c3a8d9e`
- Impact: runtime obsolète si servi depuis cet WT
- Correction: démarrer depuis checkout **`origin/main` `7dd49ecd`** (ou WT approuvé contenant #630, ex. corr-01 `e37d3969` / nouveau WT main)

### Plan de réalignement (PROPOSÉ — NON EXÉCUTÉ)

1. GO Morris: arrêt confirmé (déjà down) + autorisation start.
2. Backup supplémentaire horodaté de `live-e2e-01` product+nora.
3. Choisir worktree @ `7dd49ecd` (recommandé) + `projects/sfia-studio/app`.
4. Confirmer/aligner env: DB→live-e2e-01 (si BALISE à préserver sur même instance), `BETTER_AUTH_URL=http://localhost:3020`, LIVE secrets, `SFIA_STUDIO_CURSOR_REAL` selon GO, **pas** de deterministic boundary si REAL.
5. `npm run dev -- --hostname localhost --port 3020` (seul serveur).
6. Re-preflight: lsof · PID cwd HEAD · GET `/login` `/studio` · process env dump names-only · DB paths resolved.
7. Puis gate Morris ouverture campagne T1+.

## 15. Décisions Morris requises

1. GO redémarrage Studio `:3020` (worktree+HEAD+DB paths explicites).
2. Confirmer instance DB: **live-e2e-01 (BALISE)** vs campagne séparée.
3. GO ouverture campagne LUMEN (après Environment VERIFIED).
4. G-REAL distinct avant T5.
5. Ne pas déclarer READY FOR CURSOR REAL EXECUTION sur ce preflight.

## 16. Git Review Index

| Artifact | Ref |
|---|---|
| main | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| Product #630 merge | `14fb0c33…` |
| Docs R24 #631 merge | `7dd49ecd…` (merge commit) |
| Prior handoff | `4b46c5c8…` / `fe34ccde…` |
| Agent HEAD | `1c3a8d9e…` (not served) |

## 17. Instruction ChatGPT

1. Confirmer verdict **STOP — STUDIO 3020 NOT QUALIFIED** (NOT RUNNING).
2. Traiter écart DB BALISE vs `.env.local` comme bloqueur d’ouverture campagne.
3. Proposer gate Morris: restart contrôlé → re-preflight T0 → puis ouverture LUMEN.
4. Ne pas lancer campagne ni REAL.

**Handoff:** REQUIRED / publish-in-cycle.
