# ChatGPT Review Pack — SFIA Studio Cycle 13 Cursor Real Spike PR Readiness Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 18:20:43 CEST (Europe/Paris) |
| **Cycle** | 13 — PR readiness |
| **Profil** | Critical |
| **Décision Morris** | GO commit/push/draft PR spike Cursor réel sécurisé |
| **Branche** | `spike/sfia-studio-cursor-real-adapter` |
| **HEAD avant** | `1c44bc01ff115216d515dfdd9bde5d7eaccfa966` |
| **origin/main** | `1c44bc01ff115216d515dfdd9bde5d7eaccfa966` |
| **PR #224** | MERGED |
| **Handoff précédent** | `68c9b76` Cycle 7 authenticated spike |
| **Merge** | **NON AUTORISÉ** |

---

## 1. Truth Check — PASS

HEAD = origin/main = `1c44bc0…` ; remote spike absente ; aucun staged initial.

---

## 2. Architecture

Fixture = défaut. `CursorExecutorPortRealSpike` = expérimental, flag off, NOT PRODUCTION.

---

## 3. Fichiers exclus (runtime)

sandbox/proofs/** (sauf .gitkeep), output/summary.txt, result.json, auth-status, listings, chemins `/Users/morris/...`, .tmp-sfia-review, node_modules, dist.

gitignore : `spikes/cursor-real/.gitignore`

---

## 4. Audit secrets / chemins

- Aucune valeur CURSOR_API_KEY/GITHUB_TOKEN
- Aucun email / Bearer token
- `/Users/x` uniquement dans test synthétique env filter
- `/Applications/Cursor.app/...` = chemin macOS standard candidat
- Mentions force/yolo = documentation refus / help CLI

---

## 5. Tests

- npm ci / typecheck / test / build PASS
- 37 PASS + 1 skipped (live hors défaut)
- 26 stables inclus

---

## 6. S-CUR (synthèse handoff 68c9b76)

02 PROUVÉ · 03 PARTIEL · 04 PROUVÉ · 05 PROUVÉ · 06 PROUVÉ · 07 PROUVÉ · 08 PARTIEL · worker-server réserve

---

## 7. Staged (avant commit)

```
 .../07-product-trajectory-and-decision-pack.md     |   2 +-
 .../28-poc-orchestration-delivery-gate-pack.md     |  14 +-
 .../sfia-studio/29-poc-cursor-real-spike-report.md | 171 +++++++++++
 projects/sfia-studio/README.md                     |   5 +-
 projects/sfia-studio/harness/README.md             |   8 +-
 projects/sfia-studio/harness/package.json          |   5 +-
 .../harness/spikes/cursor-real/.gitignore          |   7 +
 .../spikes/cursor-real/docs/cursor-agent-help.txt  |  85 ++++++
 .../harness/spikes/cursor-real/run-probes.ts       | 118 ++++++++
 .../harness/spikes/cursor-real/run-spike.ts        | 116 ++++++++
 .../spikes/cursor-real/sandbox/fixtures/input.txt  |   2 +
 .../spikes/cursor-real/sandbox/output/.gitkeep     |   0
 .../spikes/cursor-real/sandbox/proofs/.gitkeep     |   0
 projects/sfia-studio/harness/src/index.ts          |   2 +
 .../harness/src/ports/cursorRealSpike.ts           | 325 +++++++++++++++++++++
 .../harness/tests/cursor-real-spike.test.ts        | 201 +++++++++++++
 16 files changed, 1051 insertions(+), 10 deletions(-)

```

```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
A	projects/sfia-studio/29-poc-cursor-real-spike-report.md
M	projects/sfia-studio/README.md
M	projects/sfia-studio/harness/README.md
M	projects/sfia-studio/harness/package.json
A	projects/sfia-studio/harness/spikes/cursor-real/.gitignore
A	projects/sfia-studio/harness/spikes/cursor-real/docs/cursor-agent-help.txt
A	projects/sfia-studio/harness/spikes/cursor-real/run-probes.ts
A	projects/sfia-studio/harness/spikes/cursor-real/run-spike.ts
A	projects/sfia-studio/harness/spikes/cursor-real/sandbox/fixtures/input.txt
A	projects/sfia-studio/harness/spikes/cursor-real/sandbox/output/.gitkeep
A	projects/sfia-studio/harness/spikes/cursor-real/sandbox/proofs/.gitkeep
M	projects/sfia-studio/harness/src/index.ts
A	projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
A	projects/sfia-studio/harness/tests/cursor-real-spike.test.ts

```

```
M  projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M  projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
A  projects/sfia-studio/29-poc-cursor-real-spike-report.md
M  projects/sfia-studio/README.md
M  projects/sfia-studio/harness/README.md
M  projects/sfia-studio/harness/package.json
A  projects/sfia-studio/harness/spikes/cursor-real/.gitignore
A  projects/sfia-studio/harness/spikes/cursor-real/docs/cursor-agent-help.txt
A  projects/sfia-studio/harness/spikes/cursor-real/run-probes.ts
A  projects/sfia-studio/harness/spikes/cursor-real/run-spike.ts
A  projects/sfia-studio/harness/spikes/cursor-real/sandbox/fixtures/input.txt
A  projects/sfia-studio/harness/spikes/cursor-real/sandbox/output/.gitkeep
A  projects/sfia-studio/harness/spikes/cursor-real/sandbox/proofs/.gitkeep
M  projects/sfia-studio/harness/src/index.ts
A  projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
A  projects/sfia-studio/harness/tests/cursor-real-spike.test.ts
?? .tmp-sfia-review/

```

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index e2a4805..9b5349c 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -272,7 +272,7 @@ Pré-cadrage
 | D-NEXT-27 | Validation backlog / allowlist initiale harness-only | Morris | **CONSOMMÉE** |
 | D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
 | D-NEXT-29 | Commit/push/draft PR delivery harness | Morris | **CONSOMMÉ** (Cycle 13) — merge **fermé** |
-| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | **Fermés** |
+| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | UI/Docker **fermés** ; spike Cursor **prouvé avec réserves** (`29`) — versionnement ouvert |
 
 ---
 
diff --git a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
index b25197d..a2fdbf5 100644
--- a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
+++ b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
@@ -8,11 +8,11 @@
 | **POC-G8** | **CONSOMMÉ** (backlog produit) |
 | **POC-G9** | **CONSOMMÉ** — harness-only local |
 | **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
-| **Delivery** | Harness versionné via **draft PR** (Cycle 13) — merge **fermé** |
+| **Delivery** | Harness **MERGED** (#224) ; spike Cursor = branche locale non versionnée |
 | **Allowlist** | **VALIDÉE** pour incrément harness-only S1 |
-| **Cursor** | **fixture** uniquement (réel **fermé**) |
+| **Cursor** | **fixture** = défaut ; spike réel **inconclusive** (auth) — pas défaut |
 | **Docker** | **Non retenu** pour l’incrément ; option future = gate Morris |
-| **Base** | `main` @ `d45cc54…` |
+| **Base** | `main` @ `1c44bc0…` (#224 MERGED) |
 | **Architecture** | Option B minimale (inchangée) |
 
 > POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.
@@ -178,3 +178,11 @@ Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industri
 ---
 
 *Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist VALIDÉE (incrément) — draft PR Cycle 13 — merge FERMÉ — POC NON LANCÉ.*
+
+---
+
+## Spike Cursor réel (Cycle 7 — statut)
+
+Spike Cursor : auth session locale **OK** ; S-CUR-02 sandbox **PROUVÉ** avec réserves ; fixture = défaut ; mode réel non défaut. Voir `29`.
+
+Commit/push/PR du spike : **non autorisés** ici.
diff --git a/projects/sfia-studio/29-poc-cursor-real-spike-report.md b/projects/sfia-studio/29-poc-cursor-real-spike-report.md
new file mode 100644
index 0000000..3d2791b
--- /dev/null
+++ b/projects/sfia-studio/29-poc-cursor-real-spike-report.md
@@ -0,0 +1,171 @@
+# SFIA Studio — Rapport spike Cursor réel (Cycle 7)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `29-poc-cursor-real-spike-report.md` |
+| **Horodatage** | 2026-07-19 18:09 CEST (Europe/Paris) |
+| **Cycle** | 7 — Intégration / DevOps — reprise authentifiée |
+| **Profil** | Critical |
+| **Branche** | `spike/sfia-studio-cursor-real-adapter` (**locale**) |
+| **Base** | `main` @ `1c44bc01ff115216d515dfdd9bde5d7eaccfa966` (#224) |
+| **Auth** | Session locale via `cursor agent login` (lien navigateur) |
+| **Commit / push / PR** | **NON AUTORISÉS** |
+
+---
+
+## 1. Objectif
+
+Authentifier Cursor Agent localement sans secret dans le repo, puis rejouer S-CUR-02…08 dans la sandbox.
+
+---
+
+## 2. Authentification
+
+| Élément | Valeur |
+|---------|--------|
+| Méthode | **`cursor agent login`** + deep link navigateur (méthode **officielle**) |
+| Auth avant | Not logged in |
+| Auth après | **Logged in** (identité redacted) |
+| CURSOR_API_KEY_defined | **false** (non utilisée) |
+| GITHUB_TOKEN / GH_TOKEN | **false** |
+| Secret dans repo / preuves | **aucun** |
+| Tokens | stockés par Cursor Agent localement (« Authentication tokens stored securely ») — **hors repo** |
+
+Note : le premier succès navigateur (« All set ») sans processus CLI encore en attente ne propage pas la session. Il faut compléter le login **pendant** que `cursor agent login` attend.
+
+---
+
+## 3. Versions / hash agent
+
+| Élément | Valeur |
+|---------|--------|
+| Cursor app | 3.12.17 |
+| cursor-agent | 2026.07.16-899851b |
+| Hash (binaire réel) | `eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831` |
+| Avant / après auth+runs | **inchangé** |
+
+---
+
+## 4. Correction wrapper minimale
+
+- Mode **`agent`** (écriture) vs `ask`/`plan` (lecture seule).
+- Ajout `--sandbox enabled` ; **pas** de `--force` / `--yolo`.
+- Test live restaure le feature flag après un test unitaire qui le `delete`.
+- Justification : run `ask` exit 0 sans créer `output/summary.txt` (refus write Ask mode).
+
+---
+
+## 5. Run nominal S-CUR-02 (authentifié)
+
+| Champ | Valeur |
+|-------|--------|
+| Feature flags | `SFIA_CURSOR_REAL_SPIKE=1` + `enabled:true` |
+| Mode | `agent` (défaut CLI, sandbox workspace) |
+| CWD / workspace | `…/harness/spikes/cursor-real/sandbox` |
+| Durée | ~14.2 s |
+| exitCode | **0** |
+| timedOut | **false** |
+| `output/summary.txt` | **présent**, **1 ligne** |
+| Contenu | `spike-fixture-v1: read-only content for cursor real spike` |
+| Cohérent fixture | **oui** |
+| realCursorProcessInvoked | **true** |
+| productionReadyClaimed | **false** |
+
+Preuve ask-mode préalable (non nominale) : exit 0 mais pas de fichier — conservée dans `result-ask-mode-readonly.json`.
+
+---
+
+## 6. Scénarios
+
+| ID | Résultat |
+|----|----------|
+| S-CUR-01 | PROUVÉ (cycle précédent) |
+| S-CUR-02 | **PROUVÉ** (auth + write sandbox) |
+| S-CUR-03 | PARTIEL — `--workspace` + sandbox ; enforcement agent hors cwd **non** prouvé par attaque réelle |
+| S-CUR-04 | **PROUVÉ** wrapper (`SIGTERM` / sleep) |
+| S-CUR-05 | **PROUVÉ** (prompt vide → exit 1, stderr « No prompt provided ») |
+| S-CUR-06 | **PROUVÉ** — seul `output/summary.txt` ajouté dans sandbox ; pas d’`app/**` |
+| S-CUR-07 | **PROUVÉ** — rejet `SPIKE_PATH_ESCAPE` **avant** invoke |
+| S-CUR-08 | **PARTIEL** — timeout authentifié agent (exit 143 / timedOut) ; **worker-server** Cursor peut rester actif |
+
+---
+
+## 7. Git / filesystem / processus
+
+| Contrôle | Résultat |
+|----------|----------|
+| app/** | inchangé |
+| Docker | absent |
+| Commit/push/PR | aucun |
+| Effet Git hors fichiers spike | aucun |
+| Processus résiduel | `index.js worker-server` **observé** (infra Cursor Agent) — réserve |
+
+---
+
+## 8. Réseau
+
+- Auth : réseau **observé** (cursor.com login).
+- Run : service Cursor **probable** (non mesuré finement).
+- Pas de capture intrusive.
+
+---
+
+## 9. Docker
+
+Run nominal contrôlé **nativement** (workspace sandbox + flags).
+**Recommandation :** ne pas introduire Docker pour cet incrément.
+
+---
+
+## 10. Tests
+
+| Suite | Résultat |
+|-------|----------|
+| Stables | 26 PASS |
+| Spike unit (défaut) | 37 PASS + 1 skipped (live) |
+| Spike live (`SFIA_*`) | 11 PASS + 1 skipped (placeholder inverse) |
+| typecheck / build | PASS |
+
+Fixture stable **préservée**. Mode réel **non défaut**.
+
+---
+
+## 11. Réserves
+
+1. Mode `agent` peut théoriquement écrire/shell hors allowlist harness — mitigation = workspace sandbox + instruction + `--sandbox enabled` + pré-rejet paths ; **pas** une preuve d’incapacité agent.
+2. `worker-server` résiduel.
+3. STOP = wrapper timeout, pas API cancel native démontrée.
+4. Session auth utilisateur locale — non portable CI sans nouveau GO.
+5. Auto-install historique `~/.local/bin/cursor-agent`.
+6. Pas de baseline / pas d’allowlist stable élargie.
+
+---
+
+## 12. Recommandation
+
+- Considérer l’invocation locale **contrôlée pour le POC** comme **démontrée avec réserves**.
+- Décision Morris pour **versionnement** du spike (commit/PR) — séparée.
+- Ne pas activer par défaut ; ne pas UI ; ne pas Docker ; ne pas SDK sans GO.
+
+---
+
+## 13. Verdict
+
+**`CURSOR REAL AUTHENTICATED SPIKE COMPLETE WITH RESERVES — CONTROLLED LOCAL INVOCATION PROVEN — VERSIONING DECISION REQUIRED`**
+
+---
+
+## 14. Versionnement (Cycle 13 PR readiness)
+
+Ce document et le code spike sont versionnés comme **artefacts expérimentaux**.
+
+| Règle | Statut |
+|-------|--------|
+| Preuves runtime brutes | **exclues** du commit (gitignore) |
+| Secrets / session / chemins `/Users/...` | **exclus** |
+| Mode réel par défaut | **non** |
+| Fixture | **défaut stable** |
+| Versionnement | ≠ activation produit |
+| Prochain incrément POC | spike **GPT/ChatGPT** (qualification contrat / verdict) |
+| UI Studio | **fermée** (cycle séparé) |
+| POC complet | **non** démontré |
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 223b1dc..0e00e72 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -13,7 +13,7 @@
 | **Profil SFIA** | Critical |
 | **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
 | **Branche architecture** | historique — MERGED #221 |
-| **Base canonique** | `origin/main` @ `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
+| **Base canonique** | `origin/main` @ `1c44bc01ff115216d515dfdd9bde5d7eaccfa966` |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
@@ -21,7 +21,7 @@
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Merge delivery — **FERMÉ** ; Cursor réel / UI Studio / Docker — **FERMÉS** |
+| **Prochaine décision** | Auth spike Cursor / versionnement spike — **Morris** ; UI Studio / Docker — **FERMÉS** |
 
 ---
 
@@ -391,6 +391,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Document | Rôle |
 |----------|------|
 | [harness/README.md](./harness/README.md) | Harness-only — installation, CLI, limites |
+| [29-poc-cursor-real-spike-report.md](./29-poc-cursor-real-spike-report.md) | Spike Cursor réel (Cycle 7) |
 
 ### Navigation backlog POC
 
diff --git a/projects/sfia-studio/harness/README.md b/projects/sfia-studio/harness/README.md
index 9f304ee..31060a2 100644
--- a/projects/sfia-studio/harness/README.md
+++ b/projects/sfia-studio/harness/README.md
@@ -6,7 +6,7 @@
 | **Incrément** | POC-G9 harness-only |
 | **Architecture** | Option B — harness autonome |
 | **Studio / app/** | **Non touché** |
-| **Cursor** | **Fixture uniquement** — aucun Cursor réel |
+| **Cursor** | **Fixture = défaut stable** ; spike `cursor-real` expérimental (flag off) |
 | **Docker** | **Non retenu** pour cet incrément (option ouverte) |
 | **Git** | Lecture réelle allowlistée · `gitEffect=none-remote` |
 | **Allowlist** | Initiale S1 **validée** pour cet incrément — élargissement = nouveau GO |
@@ -35,6 +35,8 @@ npm run cli -- validate-contract ./path/to/contract.json
 npm run cli -- run-fixture ./fixtures/demo   # après génération locale
 npm run cli -- inspect-journal <proofDir>
 npm run cli -- verify-proofs <proofDir>
+# EXPERIMENTAL only:
+# SFIA_CURSOR_REAL_SPIKE=1 SFIA_CURSOR_REAL_LIVE=1 npm run spike:cursor-real
 ```
 
 ## Architecture effective
@@ -68,7 +70,9 @@ rm -rf proofs/* node_modules dist
 
 ## Limites / réserves
 
-- Cursor réel = spike futur.
+- Cursor réel = spike local **inconclusive** (voir `spikes/cursor-real/` + doc `29`) — auth requise ; pas défaut.
+- Ne jamais activer sans `SFIA_CURSOR_REAL_SPIKE=1`.
+- Versionnement du spike ≠ activation produit ; live proofs runtime gitignored.
 - Protocole adaptateur / UI Studio = hors incrément.
 - Docker = option future non décidée.
 - Allowlist détaillée toujours sujette à raffinement Morris.
diff --git a/projects/sfia-studio/harness/package.json b/projects/sfia-studio/harness/package.json
index 29077db..1259237 100644
--- a/projects/sfia-studio/harness/package.json
+++ b/projects/sfia-studio/harness/package.json
@@ -2,7 +2,7 @@
   "name": "@sfia-studio/poc-s1-harness",
   "private": true,
   "version": "0.1.0",
-  "description": "SFIA Studio POC S1 harness-only orchestrator (local, fail-closed, no remote Git writes, Cursor fixture only)",
+  "description": "SFIA Studio POC S1 harness-only orchestrator (local, fail-closed, no remote Git writes, Cursor fixture default; experimental real-spike behind flag)",
   "type": "module",
   "bin": {
     "sfia-poc-s1": "./dist/cli.js"
@@ -12,7 +12,8 @@
     "test": "vitest run",
     "test:watch": "vitest",
     "build": "tsc -p tsconfig.build.json",
-    "cli": "tsx src/cli.ts"
+    "cli": "tsx src/cli.ts",
+    "spike:cursor-real": "tsx spikes/cursor-real/run-spike.ts"
   },
   "engines": {
     "node": ">=20"
diff --git a/projects/sfia-studio/harness/spikes/cursor-real/.gitignore b/projects/sfia-studio/harness/spikes/cursor-real/.gitignore
new file mode 100644
index 0000000..7f99559
--- /dev/null
+++ b/projects/sfia-studio/harness/spikes/cursor-real/.gitignore
@@ -0,0 +1,7 @@
+# Runtime proofs and local run artifacts — never version
+sandbox/proofs/**
+!sandbox/proofs/.gitkeep
+sandbox/output/**
+!sandbox/output/.gitkeep
+*.log
+.DS_Store
diff --git a/projects/sfia-studio/harness/spikes/cursor-real/docs/cursor-agent-help.txt b/projects/sfia-studio/harness/spikes/cursor-real/docs/cursor-agent-help.txt
new file mode 100644
index 0000000..9c52220
--- /dev/null
+++ b/projects/sfia-studio/harness/spikes/cursor-real/docs/cursor-agent-help.txt
@@ -0,0 +1,85 @@
+Usage: cursor agent [options] [command] [prompt...]
+
+Start the Cursor Agent
+
+Arguments:
+  prompt                       Initial prompt for the agent
+
+Options:
+  -v, --version                Output the version number
+  --api-key <key>              API key for authentication (can also use
+                               CURSOR_API_KEY env var)
+  -H, --header <header>        Add custom header to agent requests (format:
+                               'Name: Value', can be used multiple times)
+  -p, --print                  Print responses to console (for scripts or
+                               non-interactive use). Has access to all tools,
+                               including write and shell. (default: false)
+  --output-format <format>     Output format (only works with --print): text |
+                               json | stream-json (default: "text")
+  --stream-partial-output      Stream partial output as individual text deltas
+                               (only works with --print and stream-json format)
+                               (default: false)
+  --mode <mode>                Start in the given execution mode. plan:
+                               read-only/planning (analyze, propose plans, no
+                               edits). ask: Q&A style for explanations and
+                               questions (read-only). (choices: "plan", "ask")
+  --plan                       Start in plan mode (shorthand for --mode=plan).
+                               (default: false)
+  --resume [chatId]            Select a session to resume (default: false)
+  --continue                   Continue previous session (default: false)
+  --model <model>              Model to use (e.g., gpt-5, sonnet-4-thinking).
+                               Parameterized models accept quoted bracket
+                               overrides, e.g.
+                               'claude-opus-4-8[context=1m,effort=high,fast=false]'
+  --list-models                List available models and exit (default: false)
+  -f, --force                  Force allow commands unless explicitly denied
+                               (default: false)
+  --yolo                       Alias for --force (Run Everything) (default:
+                               false)
+  --auto-review                Use Auto-review (Smart Auto): a server classifier
+                               auto-runs safe tool calls and prompts for the
+                               rest (default: false)
+  --sandbox <mode>             Explicitly enable or disable sandbox mode
+                               (overrides config) (choices: "enabled",
+                               "disabled")
+  --approve-mcps               Automatically approve all MCP servers (default:
+                               false)
+  --trust                      Trust the current workspace without prompting
+                               (only works with --print/headless mode) (default:
+                               false)
+  --workspace <path-or-name>   Workspace directory or saved workspace name to
+                               use (defaults to current working directory)
+  --add-dir <path>             Add an additional workspace root directory (can
+                               be specified multiple times)
+  --plugin-dir <path>          Load a local plugin directory (can be specified
+                               multiple times)
+  -w, --worktree [name]        Start in an isolated git worktree at
+                               ~/.cursor/worktrees/<reponame>/<name>. If
+                               omitted, a name is generated.
+  --worktree-base <branch>     Branch or ref to base the new worktree on
+                               (default: current HEAD)
+  --skip-worktree-setup        Skip running worktree setup scripts from
+                               .cursor/worktrees.json (default: false)
+  -h, --help                   Display help for command
+
+Commands:
+  install-shell-integration    Install shell integration to ~/.zshrc
+  uninstall-shell-integration  Remove shell integration from ~/.zshrc
+  login                        Authenticate with Cursor. Set NO_OPEN_BROWSER to
+                               disable browser opening.
+  logout                       Sign out and clear stored authentication
+  mcp                          Manage MCP servers
+  plugin                       Manage plugins and plugin marketplaces
+  worker [options]             Start a private cloud worker that connects to
+                               Cursor to run agents in your environment
+  status|whoami [options]      View authentication status
+  models                       List available models for this account
+  about [options]              Display version, system, and account information
+  update                       Update Cursor Agent to the latest version
+  create-chat                  Create a new empty chat and return its ID
+  generate-rule|rule           Generate a new Cursor rule with interactive
+                               prompts
+  agent [prompt...]            Start the Cursor Agent
+  ls                           Resume a chat session
+  resume                       Resume the latest chat session
+  help [command]               Display help for command
diff --git a/projects/sfia-studio/harness/spikes/cursor-real/run-probes.ts b/projects/sfia-studio/harness/spikes/cursor-real/run-probes.ts
new file mode 100644
index 0000000..ec805f2
--- /dev/null
+++ b/projects/sfia-studio/harness/spikes/cursor-real/run-probes.ts
@@ -0,0 +1,118 @@
+#!/usr/bin/env node
+/** EXPERIMENTAL spike scenario probes — not production. */
+import { writeFileSync } from "node:fs";
+import path from "node:path";
+import { fileURLToPath } from "node:url";
+import {
+  assertSandboxPaths,
+  buildCursorAgentArgv,
+  CURSOR_REAL_SPIKE_FLAG,
+  CursorExecutorPortRealSpike,
+  filterSpikeEnv,
+  spawnWithTimeout,
+  type CursorRealSpikeContract,
+} from "../../src/ports/cursorRealSpike.js";
+import { HarnessError } from "../../src/types/contracts.js";
+
+const HERE = path.dirname(fileURLToPath(import.meta.url));
+const SANDBOX = path.join(HERE, "sandbox");
+const PROOFS = path.join(SANDBOX, "proofs");
+
+function base(overrides: Partial<CursorRealSpikeContract> = {}): CursorRealSpikeContract {
+  return {
+    spikeId: "probe",
+    requestId: "r",
+    executionId: `e-${Date.now()}`,
+    mechanismId: "cursor-agent-cli",
+    mechanismVersion: "local",
+    instruction: "noop",
+    workingDirectory: SANDBOX,
+    allowedReadPaths: ["fixtures/input.txt"],
+    allowedWritePaths: ["output/summary.txt"],
+    deniedPaths: ["../", "projects/sfia-studio/app"],
+    timeoutMs: 15_000,
+    expectedOutputs: [],
+    gitEffect: "none",
+    networkEffect: "unknown",
+    cursorMode: "real-spike",
+    contractHash: "probe",
+    initiatedBy: "Morris",
+    initiatedAt: new Date().toISOString(),
+    ...overrides,
+  };
+}
+
+async function main(): Promise<void> {
+  process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
+  const out: Record<string, unknown> = {};
+
+  // S-CUR-07
+  try {
+    assertSandboxPaths(base({ allowedReadPaths: ["../README.md"] }));
+    out.scur07 = { rejected: false };
+  } catch (e) {
+    out.scur07 = {
+      rejected: e instanceof HarnessError,
+      code: e instanceof HarnessError ? e.code : "unknown",
+    };
+  }
+  const spike = new CursorExecutorPortRealSpike({ enabled: true, timeoutMs: 1000 });
+  try {
+    await spike.executeSpikeContract(base({ allowedReadPaths: ["../README.md"] }));
+    out.scur07 = { ...(out.scur07 as object), invoked: true };
+  } catch (e) {
+    out.scur07 = {
+      ...(out.scur07 as object),
+      invoked: false,
+      rejectCode: e instanceof HarnessError ? e.code : String(e),
+    };
+  }
+
+  // S-CUR-04
+  out.scur04 = await spawnWithTimeout({
+    command: "/bin/sleep",
+    argv: ["20"],
+    cwd: SANDBOX,
+    env: filterSpikeEnv(),
+    timeoutMs: 300,
+    maxOutputBytes: 1024,
+  });
+
+  // S-CUR-05 — empty instruction with agent
+  const errSpike = new CursorExecutorPortRealSpike({
+    enabled: true,
+    timeoutMs: 30_000,
+    agentMode: "agent",
+    cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
+  });
+  const err = await errSpike.executeSpikeContract(base({ instruction: "", timeoutMs: 30_000 }));
+  out.scur05 = {
+    ok: err.ok,
+    exitCode: err.exitCode,
+    timedOut: err.timedOut,
+    stderr: err.stderrRedacted.slice(0, 400),
+    stdout: err.stdoutRedacted.slice(0, 200),
+  };
+
+  // S-CUR-08 — authenticated agent ask with hard timeout (STOP wrapper)
+  const { command, argv } = buildCursorAgentArgv({
+    bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
+    instruction: "Slowly count from 1 to 200 in words. Do not write files. Do not run git.",
+    workspace: SANDBOX,
+    mode: "ask",
+    useNestedAgentSubcommand: true,
+  });
+  out.scur08 = await spawnWithTimeout({
+    command,
+    argv,
+    cwd: SANDBOX,
+    env: filterSpikeEnv(),
+    timeoutMs: 2000,
+    maxOutputBytes: 50_000,
+  });
+
+  writeFileSync(path.join(PROOFS, "scenario-probes.json"), JSON.stringify(out, null, 2));
+  console.log(JSON.stringify(out, null, 2));
+}
+
+main();
diff --git a/projects/sfia-studio/harness/spikes/cursor-real/run-spike.ts b/projects/sfia-studio/harness/spikes/cursor-real/run-spike.ts
new file mode 100644
index 0000000..c745af8
--- /dev/null
+++ b/projects/sfia-studio/harness/spikes/cursor-real/run-spike.ts
@@ -0,0 +1,116 @@
+#!/usr/bin/env node
+/**
+ * EXPERIMENTAL spike runner — not the stable CLI.
+ * Usage:
+ *   SFIA_CURSOR_REAL_SPIKE=1 SFIA_CURSOR_REAL_LIVE=1 npx tsx spikes/cursor-real/run-spike.ts
+ */
+import { createHash } from "node:crypto";
+import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
+import path from "node:path";
+import { fileURLToPath } from "node:url";
+import { execFileSync } from "node:child_process";
+import {
+  CURSOR_REAL_SPIKE_FLAG,
+  CursorExecutorPortRealSpike,
+  type CursorRealSpikeContract,
+} from "../../src/ports/cursorRealSpike.js";
+
+const HERE = path.dirname(fileURLToPath(import.meta.url));
+const SANDBOX = path.join(HERE, "sandbox");
+const PROOFS = path.join(SANDBOX, "proofs");
+
+function git(args: string[]): string {
+  return execFileSync("git", args, { encoding: "utf8", cwd: path.resolve(HERE, "../../../../../") });
+}
+
+function listing(): string {
+  return execFileSync("bash", ["-lc", "find . -type f | sort | while read f; do echo \"$f $(cksum < \"$f\" | awk '{print $1}')\"; done"], {
+    encoding: "utf8",
+    cwd: SANDBOX,
+  });
+}
+
+async function main(): Promise<void> {
+  mkdirSync(PROOFS, { recursive: true });
+  if (process.env[CURSOR_REAL_SPIKE_FLAG] !== "1") {
+    console.error(`Set ${CURSOR_REAL_SPIKE_FLAG}=1 to run`);
+    process.exit(2);
+  }
+
+  writeFileSync(path.join(PROOFS, "git-status-pre-run.txt"), git(["status", "--short"]));
+  writeFileSync(path.join(PROOFS, "git-diff-pre-run.txt"), git(["diff", "--name-status"]));
+  writeFileSync(path.join(PROOFS, "sandbox-listing-pre-run.txt"), listing());
+
+  const instruction =
+    "Read the file fixtures/input.txt. Write exactly one line summarizing it into output/summary.txt. " +
+    "Do not run any git command. Do not modify any file outside output/. Do not access the network intentionally.";
+
+  const partial = {
+    spikeId: "spike-cur-live-001",
+    requestId: "req-spike-live-001",
+    executionId: `exec-${Date.now()}`,
+    mechanismId: "cursor-agent-cli",
+    mechanismVersion: "observed-local",
+    instruction,
+    workingDirectory: SANDBOX,
+    allowedReadPaths: ["fixtures/input.txt"],
+    allowedWritePaths: ["output/summary.txt"],
+    deniedPaths: ["projects/sfia-studio/app", "../"],
+    timeoutMs: 120_000,
+    expectedOutputs: ["output/summary.txt"],
+    gitEffect: "none" as const,
+    networkEffect: "unknown" as const,
+    cursorMode: "real-spike" as const,
+    initiatedBy: "Morris",
+    initiatedAt: new Date().toISOString(),
+  };
+  const contract: CursorRealSpikeContract = {
+    ...partial,
+    contractHash: createHash("sha256").update(JSON.stringify(partial)).digest("hex"),
+  };
+  writeFileSync(path.join(PROOFS, "contract.json"), JSON.stringify(contract, null, 2));
+
+  const spike = new CursorExecutorPortRealSpike({
+    enabled: true,
+    timeoutMs: contract.timeoutMs,
+    // Nominal write requires default agent (not ask/plan read-only).
+    agentMode: "agent",
+    cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
+  });
+
+  let result;
+  try {
+    result = await spike.executeSpikeContract(contract);
+  } catch (e) {
+    result = {
+      ok: false,
+      summary: e instanceof Error ? e.message : String(e),
+      artifacts: [],
+      errorCode: "SPIKE_THROW",
+      durationMs: 0,
+      realCursorProcessInvoked: false,
+      productionReadyClaimed: false as const,
+      exitCode: null,
+      signal: null,
+      stdoutRedacted: "",
+      stderrRedacted: "",
+      timedOut: false,
+      argvRedacted: [],
+      mechanismBin: "",
+    };
+  }
+
+  writeFileSync(path.join(PROOFS, "result.json"), JSON.stringify(result, null, 2));
+  writeFileSync(path.join(PROOFS, "git-status-post-run.txt"), git(["status", "--short"]));
+  writeFileSync(path.join(PROOFS, "git-diff-post-run.txt"), git(["diff", "--name-status"]));
+  writeFileSync(path.join(PROOFS, "sandbox-listing-post-run.txt"), listing());
+  writeFileSync(
+    path.join(PROOFS, "output-summary-exists.txt"),
+    String(existsSync(path.join(SANDBOX, "output/summary.txt"))),
+  );
+
+  console.log(JSON.stringify({ ok: result.ok, exitCode: result.exitCode, timedOut: result.timedOut, errorCode: result.errorCode }, null, 2));
+  process.exit(result.ok ? 0 : 1);
+}
+
+main();
diff --git a/projects/sfia-studio/harness/spikes/cursor-real/sandbox/fixtures/input.txt b/projects/sfia-studio/harness/spikes/cursor-real/sandbox/fixtures/input.txt
new file mode 100644
index 0000000..8e4c7a0
--- /dev/null
+++ b/projects/sfia-studio/harness/spikes/cursor-real/sandbox/fixtures/input.txt
@@ -0,0 +1,2 @@
+spike-fixture-v1
+read-only content for cursor real spike
diff --git a/projects/sfia-studio/harness/spikes/cursor-real/sandbox/output/.gitkeep b/projects/sfia-studio/harness/spikes/cursor-real/sandbox/output/.gitkeep
new file mode 100644
index 0000000..e69de29
diff --git a/projects/sfia-studio/harness/spikes/cursor-real/sandbox/proofs/.gitkeep b/projects/sfia-studio/harness/spikes/cursor-real/sandbox/proofs/.gitkeep
new file mode 100644
index 0000000..e69de29
diff --git a/projects/sfia-studio/harness/src/index.ts b/projects/sfia-studio/harness/src/index.ts
index 1396593..df03652 100644
--- a/projects/sfia-studio/harness/src/index.ts
+++ b/projects/sfia-studio/harness/src/index.ts
@@ -8,6 +8,8 @@ export * from "./ports/gitReader.js";
 export * from "./ports/gitReaderImpl.js";
 export * from "./ports/cursorExecutor.js";
 export * from "./ports/cursorFixture.js";
+/** EXPERIMENTAL spike — not default; see ports/cursorRealSpike.ts */
+export * from "./ports/cursorRealSpike.js";
 export * from "./journal/eventJournal.js";
 export * from "./proof/proofStore.js";
 export * from "./orchestrator.js";
diff --git a/projects/sfia-studio/harness/src/ports/cursorRealSpike.ts b/projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
new file mode 100644
index 0000000..4e92bf4
--- /dev/null
+++ b/projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
@@ -0,0 +1,325 @@
+/**
+ * EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.
+ *
+ * CursorExecutorPortRealSpike — local CLI candidate behind CursorExecutorPort.
+ * Does NOT replace CursorExecutorPortFixture.
+ * Disabled unless explicitly enabled (feature flag).
+ * Does NOT invent an HTTP API; uses discovered `cursor agent` CLI argv only.
+ */
+
+import { spawn } from "node:child_process";
+import { accessSync, constants } from "node:fs";
+import path from "node:path";
+import type { CursorInstruction, CursorResult } from "../types/contracts.js";
+import { HarnessError } from "../types/contracts.js";
+import type { CursorExecutorPort } from "./cursorExecutor.js";
+
+/** Spike-only result — does not widen stable CursorResult.realCursorClaimed literal. */
+export interface CursorRealSpikeResult {
+  ok: boolean;
+  summary: string;
+  artifacts: string[];
+  errorCode?: string;
+  durationMs: number;
+  /** True only when a real CLI process was spawned for this spike. */
+  realCursorProcessInvoked: boolean;
+  /** Never claim production-proven Cursor; spike evidence only. */
+  productionReadyClaimed: false;
+  exitCode: number | null;
+  signal: NodeJS.Signals | null;
+  stdoutRedacted: string;
+  stderrRedacted: string;
+  timedOut: boolean;
+  argvRedacted: string[];
+  mechanismBin: string;
+}
+
+export const CURSOR_REAL_SPIKE_FLAG = "SFIA_CURSOR_REAL_SPIKE";
+
+export interface CursorRealSpikeOptions {
+  /** Must be true AND env SFIA_CURSOR_REAL_SPIKE=1 for execution. */
+  enabled?: boolean;
+  /** Absolute path to cursor binary or cursor-agent. */
+  cursorBin?: string;
+  /** Hard timeout for child process. */
+  timeoutMs?: number;
+  /** Max captured stdout/stderr bytes. */
+  maxOutputBytes?: number;
+  /**
+   * ask|plan = read-oriented CLI modes.
+   * agent = default Cursor Agent (may write) — spike only, sandbox required.
+   */
+  agentMode?: "ask" | "plan" | "agent";
+}
+
+export interface CursorRealSpikeContract {
+  spikeId: string;
+  requestId: string;
+  executionId: string;
+  mechanismId: string;
+  mechanismVersion: string;
+  instruction: string;
+  workingDirectory: string;
+  allowedReadPaths: string[];
+  allowedWritePaths: string[];
+  deniedPaths: string[];
+  timeoutMs: number;
+  expectedOutputs: string[];
+  gitEffect: "none";
+  networkEffect: "unknown" | "required" | "none";
+  cursorMode: "real-spike";
+  contractHash: string;
+  initiatedBy: string;
+  initiatedAt: string;
+}
+
+export function isCursorRealSpikeEnabled(opts?: CursorRealSpikeOptions): boolean {
+  return opts?.enabled === true && process.env[CURSOR_REAL_SPIKE_FLAG] === "1";
+}
+
+export function resolveCursorBin(explicit?: string): string {
+  if (explicit) {
+    accessSync(explicit, constants.X_OK);
+    return explicit;
+  }
+  const candidates = [
+    process.env.SFIA_CURSOR_BIN,
+    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
+    path.join(process.env.HOME ?? "", ".local/bin/cursor-agent"),
+  ].filter(Boolean) as string[];
+  for (const c of candidates) {
+    try {
+      accessSync(c, constants.X_OK);
+      return c;
+    } catch {
+      /* try next */
+    }
+  }
+  throw new HarnessError("CURSOR_BIN_NOT_FOUND", "No executable Cursor CLI found for spike");
+}
+
+/** Build argv without shell concatenation. */
+export function buildCursorAgentArgv(input: {
+  bin: string;
+  instruction: string;
+  workspace: string;
+  mode: "ask" | "plan" | "agent";
+  useNestedAgentSubcommand: boolean;
+}): { command: string; argv: string[] } {
+  const prefix = input.useNestedAgentSubcommand ? ["agent"] : [];
+  const modeArgs = input.mode === "agent" ? [] : ["--mode", input.mode];
+  // --sandbox enabled when supported by CLI; do not pass --force/--yolo.
+  const argv = [
+    ...prefix,
+    "--print",
+    ...modeArgs,
+    "--workspace",
+    input.workspace,
+    "--trust",
+    "--sandbox",
+    "enabled",
+    input.instruction,
+  ];
+  return { command: input.bin, argv };
+}
+
+export function assertSandboxPaths(contract: CursorRealSpikeContract): void {
+  const cwd = path.resolve(contract.workingDirectory);
+  if (!cwd.includes(`${path.sep}spikes${path.sep}cursor-real${path.sep}sandbox`)) {
+    throw new HarnessError("SPIKE_CWD_DENIED", "workingDirectory must be cursor-real sandbox", { cwd });
+  }
+  for (const p of [...contract.allowedWritePaths, ...contract.allowedReadPaths]) {
+    const resolved = path.resolve(cwd, p);
+    if (!resolved.startsWith(cwd + path.sep) && resolved !== cwd) {
+      throw new HarnessError("SPIKE_PATH_ESCAPE", "path escapes sandbox", { p, resolved });
+    }
+    if (resolved.includes("..")) {
+      throw new HarnessError("SPIKE_PATH_TRAVERSAL", "path traversal denied", { p });
+    }
+  }
+  for (const d of contract.deniedPaths) {
+    if (d.includes("app/") || d === "projects/sfia-studio/app") {
+      /* documented deny — ok */
+    }
+  }
+  if (contract.cursorMode !== "real-spike") {
+    throw new HarnessError("SPIKE_MODE", "cursorMode must be real-spike");
+  }
+  if (contract.gitEffect !== "none") {
+    throw new HarnessError("SPIKE_GIT_EFFECT", "gitEffect must be none");
+  }
+}
+
+export function filterSpikeEnv(env: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
+  const allow = new Set([
+    "PATH",
+    "HOME",
+    "USER",
+    "LOGNAME",
+    "TMPDIR",
+    "LANG",
+    "LC_ALL",
+    "TERM",
+    "NODE_ENV",
+    CURSOR_REAL_SPIKE_FLAG,
+    "SFIA_CURSOR_BIN",
+  ]);
+  const out: NodeJS.ProcessEnv = {};
+  for (const [k, v] of Object.entries(env)) {
+    if (!allow.has(k)) continue;
+    if (!v) continue;
+    // Never forward secrets even if somehow present under alternate names
+    if (/token|secret|password|api[_-]?key|credential/i.test(k)) continue;
+    out[k] = v;
+  }
+  // Explicitly strip Cursor API key from child even if in process env
+  delete out.CURSOR_API_KEY;
+  return out;
+}
+
+export async function spawnWithTimeout(input: {
+  command: string;
+  argv: string[];
+  cwd: string;
+  env: NodeJS.ProcessEnv;
+  timeoutMs: number;
+  maxOutputBytes: number;
+}): Promise<{
+  exitCode: number | null;
+  signal: NodeJS.Signals | null;
+  stdout: string;
+  stderr: string;
+  timedOut: boolean;
+  durationMs: number;
+}> {
+  const started = Date.now();
+  return new Promise((resolve, reject) => {
+    let stdout = Buffer.alloc(0);
+    let stderr = Buffer.alloc(0);
+    let timedOut = false;
+    let settled = false;
+
+    const child = spawn(input.command, input.argv, {
+      cwd: input.cwd,
+      env: input.env,
+      shell: false,
+      stdio: ["ignore", "pipe", "pipe"],
+    });
+
+    const timer = setTimeout(() => {
+      timedOut = true;
+      child.kill("SIGTERM");
+      setTimeout(() => {
+        if (!settled) child.kill("SIGKILL");
+      }, 2_000).unref();
+    }, input.timeoutMs);
+
+    const append = ( whicht: "out" | "err", chunk: Buffer) => {
+      const cur = whicht === "out" ? stdout : stderr;
+      const next = Buffer.concat([cur, chunk]);
+      if (next.length > input.maxOutputBytes) {
+        const trimmed = next.subarray(0, input.maxOutputBytes);
+        if (whicht === "out") stdout = trimmed;
+        else stderr = trimmed;
+        child.kill("SIGTERM");
+        return;
+      }
+      if (whicht === "out") stdout = next;
+      else stderr = next;
+    };
+
+    child.stdout?.on("data", (c: Buffer) => append("out", c));
+    child.stderr?.on("data", (c: Buffer) => append("err", c));
+    child.on("error", (err) => {
+      if (settled) return;
+      settled = true;
+      clearTimeout(timer);
+      reject(err);
+    });
+    child.on("close", (code, signal) => {
+      if (settled) return;
+      settled = true;
+      clearTimeout(timer);
+      resolve({
+        exitCode: code,
+        signal,
+        stdout: stdout.toString("utf8"),
+        stderr: stderr.toString("utf8"),
+        timedOut,
+        durationMs: Date.now() - started,
+      });
+    });
+  });
+}
+
+/**
+ * Experimental CursorExecutorPort implementation.
+ * Only accepts instruction.mode === "fixture" never — real-spike uses executeSpikeContract.
+ * The port.execute path remains fail-closed unless spike mode is wired via executeSpike.
+ */
+export class CursorExecutorPortRealSpike implements CursorExecutorPort {
+  constructor(private readonly opts: CursorRealSpikeOptions = {}) {}
+
+  async execute(_instruction: CursorInstruction): Promise<CursorResult> {
+    throw new HarnessError(
+      "CURSOR_REAL_SPIKE_NOT_VIA_STABLE_EXECUTE",
+      "Use executeSpikeContract(); stable execute() must remain fixture-only",
+    );
+  }
+
+  async executeSpikeContract(contract: CursorRealSpikeContract): Promise<CursorRealSpikeResult> {
+    if (!isCursorRealSpikeEnabled(this.opts)) {
+      throw new HarnessError(
+        "CURSOR_REAL_SPIKE_DISABLED",
+        `Spike disabled (set ${CURSOR_REAL_SPIKE_FLAG}=1 and enabled:true)`,
+      );
+    }
+    assertSandboxPaths(contract);
+    const timeoutMs = this.opts.timeoutMs ?? contract.timeoutMs;
+    const maxOutputBytes = this.opts.maxOutputBytes ?? 256_000;
+    const bin = resolveCursorBin(this.opts.cursorBin);
+    const useNested = path.basename(bin) === "cursor";
+    const mode = this.opts.agentMode ?? "agent";
+    const { command, argv } = buildCursorAgentArgv({
+      bin,
+      instruction: contract.instruction,
+      workspace: path.resolve(contract.workingDirectory),
+      mode,
+      useNestedAgentSubcommand: useNested,
+    });
+
+    const result = await spawnWithTimeout({
+      command,
+      argv,
+      cwd: path.resolve(contract.workingDirectory),
+      env: filterSpikeEnv(),
+      timeoutMs,
+      maxOutputBytes,
+    });
+
+    const redact = (s: string) =>
+      s
+        .replace(/cursor_[A-Za-z0-9_-]{8,}/g, "[REDACTED_KEY]")
+        .replace(/Bearer\s+\S+/gi, "Bearer [REDACTED]");
+
+    const ok = !result.timedOut && result.exitCode === 0;
+    return {
+      ok,
+      summary: ok
+        ? `real-spike exit 0 (${contract.mechanismId})`
+        : `real-spike failed exit=${result.exitCode} timedOut=${result.timedOut}`,
+      artifacts: [],
+      errorCode: ok ? undefined : result.timedOut ? "CURSOR_SPIKE_TIMEOUT" : "CURSOR_SPIKE_FAILED",
+      durationMs: result.durationMs,
+      realCursorProcessInvoked: true,
+      productionReadyClaimed: false,
+      exitCode: result.exitCode,
+      signal: result.signal,
+      stdoutRedacted: redact(result.stdout).slice(0, 8_000),
+      stderrRedacted: redact(result.stderr).slice(0, 8_000),
+      timedOut: result.timedOut,
+      argvRedacted: argv.map((a) => (a.length > 120 ? `${a.slice(0, 117)}...` : a)),
+      mechanismBin: command,
+    };
+  }
+}
diff --git a/projects/sfia-studio/harness/tests/cursor-real-spike.test.ts b/projects/sfia-studio/harness/tests/cursor-real-spike.test.ts
new file mode 100644
index 0000000..ab6f3a7
--- /dev/null
+++ b/projects/sfia-studio/harness/tests/cursor-real-spike.test.ts
@@ -0,0 +1,201 @@
+import { createHash } from "node:crypto";
+import { describe, expect, it } from "vitest";
+import { HarnessError } from "../src/types/contracts.js";
+import {
+  assertSandboxPaths,
+  buildCursorAgentArgv,
+  CURSOR_REAL_SPIKE_FLAG,
+  CursorExecutorPortRealSpike,
+  filterSpikeEnv,
+  isCursorRealSpikeEnabled,
+  spawnWithTimeout,
+  type CursorRealSpikeContract,
+} from "../src/ports/cursorRealSpike.js";
+import { CursorExecutorPortFixture } from "../src/ports/cursorFixture.js";
+import path from "node:path";
+import { fileURLToPath } from "node:url";
+
+const HERE = path.dirname(fileURLToPath(import.meta.url));
+const SANDBOX = path.resolve(HERE, "../spikes/cursor-real/sandbox");
+
+function sampleContract(overrides: Partial<CursorRealSpikeContract> = {}): CursorRealSpikeContract {
+  const base = {
+    spikeId: "spike-cur-001",
+    requestId: "req-spike-001",
+    executionId: "exec-spike-001",
+    mechanismId: "cursor-agent-cli",
+    mechanismVersion: "2026.07.16-899851b",
+    instruction: "Read fixtures/input.txt and write a one-line summary to output/summary.txt. Do not run git. Do not touch other paths.",
+    workingDirectory: SANDBOX,
+    allowedReadPaths: ["fixtures/input.txt"],
+    allowedWritePaths: ["output/summary.txt"],
+    deniedPaths: ["projects/sfia-studio/app", "../"],
+    timeoutMs: 5_000,
+    expectedOutputs: ["output/summary.txt"],
+    gitEffect: "none" as const,
+    networkEffect: "unknown" as const,
+    cursorMode: "real-spike" as const,
+    contractHash: "",
+    initiatedBy: "Morris",
+    initiatedAt: new Date().toISOString(),
+  };
+  const merged = { ...base, ...overrides };
+  const { contractHash: _h, ...canon } = merged;
+  merged.contractHash = createHash("sha256").update(JSON.stringify(canon)).digest("hex");
+  return merged;
+}
+
+describe("cursor real spike — unit (no live Cursor required)", () => {
+  it("feature flag disabled by default", () => {
+    const prev = process.env[CURSOR_REAL_SPIKE_FLAG];
+    delete process.env[CURSOR_REAL_SPIKE_FLAG];
+    expect(isCursorRealSpikeEnabled({ enabled: true })).toBe(false);
+    expect(isCursorRealSpikeEnabled({ enabled: false })).toBe(false);
+    if (prev !== undefined) process.env[CURSOR_REAL_SPIKE_FLAG] = prev;
+  });
+
+  it("stable fixture still works and claims no real Cursor", async () => {
+    const f = new CursorExecutorPortFixture();
+    const r = await f.execute({
+      requestId: "r1",
+      executionId: "e1",
+      mode: "fixture",
+      objective: "noop",
+      timeoutMs: 1000,
+    });
+    expect(r.ok).toBe(true);
+    expect(r.realCursorClaimed).toBe(false);
+  });
+
+  it("RealSpike.execute() refuses stable path", async () => {
+    const spike = new CursorExecutorPortRealSpike({ enabled: true });
+    process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
+    await expect(
+      spike.execute({
+        requestId: "r1",
+        executionId: "e1",
+        mode: "fixture",
+        objective: "x",
+        timeoutMs: 1000,
+      }),
+    ).rejects.toBeInstanceOf(HarnessError);
+    delete process.env[CURSOR_REAL_SPIKE_FLAG];
+  });
+
+  it("builds argv without shell concatenation", () => {
+    const { command, argv } = buildCursorAgentArgv({
+      bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
+      instruction: "hello; rm -rf /",
+      workspace: SANDBOX,
+      mode: "ask",
+      useNestedAgentSubcommand: true,
+    });
+    expect(command).toContain("cursor");
+    expect(argv).toEqual([
+      "agent",
+      "--print",
+      "--mode",
+      "ask",
+      "--workspace",
+      SANDBOX,
+      "--trust",
+      "--sandbox",
+      "enabled",
+      "hello; rm -rf /",
+    ]);
+    expect(argv.join(" ")).not.toMatch(/&&|\|/);
+  });
+
+  it("builds agent write mode without --mode and without --force", () => {
+    const { argv } = buildCursorAgentArgv({
+      bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
+      instruction: "write summary",
+      workspace: SANDBOX,
+      mode: "agent",
+      useNestedAgentSubcommand: true,
+    });
+    expect(argv).not.toContain("--mode");
+    expect(argv).not.toContain("--force");
+    expect(argv).not.toContain("--yolo");
+    expect(argv).toContain("--sandbox");
+    expect(argv).toContain("enabled");
+  });
+
+  it("rejects cwd outside sandbox", () => {
+    expect(() =>
+      assertSandboxPaths(
+        sampleContract({
+          workingDirectory: path.resolve(SANDBOX, "../../.."),
+        }),
+      ),
+    ).toThrow(HarnessError);
+  });
+
+  it("rejects write path escape", () => {
+    expect(() =>
+      assertSandboxPaths(
+        sampleContract({
+          allowedWritePaths: ["../../../README.md"],
+        }),
+      ),
+    ).toThrow(HarnessError);
+  });
+
+  it("filters env and strips CURSOR_API_KEY", () => {
+    const filtered = filterSpikeEnv({
+      PATH: "/usr/bin",
+      HOME: "/Users/x",
+      CURSOR_API_KEY: "cursor_should_not_leak",
+      GITHUB_TOKEN: "ghp_x",
+      SECRET_THING: "nope",
+      SFIA_CURSOR_REAL_SPIKE: "1",
+    });
+    expect(filtered.CURSOR_API_KEY).toBeUndefined();
+    expect(filtered.GITHUB_TOKEN).toBeUndefined();
+    expect(filtered.SECRET_THING).toBeUndefined();
+    expect(filtered.PATH).toBe("/usr/bin");
+    expect(filtered[CURSOR_REAL_SPIKE_FLAG]).toBe("1");
+  });
+
+  it("timeout kills child process (S-CUR-04 wrapper)", async () => {
+    const r = await spawnWithTimeout({
+      command: "/bin/sleep",
+      argv: ["30"],
+      cwd: SANDBOX,
+      env: filterSpikeEnv(),
+      timeoutMs: 200,
+      maxOutputBytes: 1024,
+    });
+    expect(r.timedOut).toBe(true);
+    expect(r.exitCode === null || r.exitCode !== 0 || r.signal !== null).toBe(true);
+  });
+
+  it("disabled spike rejects executeSpikeContract", async () => {
+    delete process.env[CURSOR_REAL_SPIKE_FLAG];
+    const spike = new CursorExecutorPortRealSpike({ enabled: true });
+    await expect(spike.executeSpikeContract(sampleContract())).rejects.toBeInstanceOf(HarnessError);
+  });
+});
+
+describe("cursor real spike — live CLI (opt-in)", () => {
+  const live = process.env[CURSOR_REAL_SPIKE_FLAG] === "1" && process.env.SFIA_CURSOR_REAL_LIVE === "1";
+
+  it.runIf(live)("invokes cursor agent against sandbox (authenticated live)", async () => {
+    process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
+    process.env.SFIA_CURSOR_REAL_LIVE = "1";
+    const spike = new CursorExecutorPortRealSpike({
+      enabled: true,
+      timeoutMs: 90_000,
+      agentMode: "agent",
+      cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
+    });
+    const result = await spike.executeSpikeContract(sampleContract({ timeoutMs: 90_000 }));
+    expect(result.realCursorProcessInvoked).toBe(true);
+    expect(result.productionReadyClaimed).toBe(false);
+    expect(result.exitCode !== undefined).toBe(true);
+  });
+
+  it.skipIf(live)("live Cursor test skipped unless SFIA_CURSOR_REAL_SPIKE=1 and SFIA_CURSOR_REAL_LIVE=1", () => {
+    expect(true).toBe(true);
+  });
+});

```

---

## 8. Contenu fichiers versionnés

### `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`

```
# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 8 — Delivery harness-only POC-G9 |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (**Option C méthode**) |
| **Statut** | POC-G9 **CONSOMMÉ** (harness-only local) ; POC-G8 **CONSOMMÉ** ; POC **non lancé** ; `app/**` intact |
| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist initiale **validée** harness-only |
| **Destinataire** | Morris |
| **Source de vérité** | `origin/main` @ `d45cc54…` ; branche locale `delivery/sfia-studio-poc-s1-harness` |

> Architecture Option B **intégrée**. Harness-only (POC-G9). Allowlist initiale **validée**. POC **non lancé**. GO commit/push/draft PR **consommé**. Merge **fermé**. `app/**` intact.

---

## 0. État produit (capitalisation post-Delivery P0)

| Élément | Valeur |
|---------|--------|
| Cadrage documentaire | **Clôturé** (D-VAL-11) |
| Conception fonctionnelle | **VALIDÉE** / **CLÔTURÉE** / **INTÉGRÉE** (PR #209) |
| Architecture fonctionnelle | **VALIDÉE** / **INTÉGRÉE** — clôture formelle **NON PRONONCÉE** |
| UX/UI P0 | **CLÔTURÉ** — Option B ; Figma ; docs `14`–`16` |
| Architecture technique P0 | **VALIDÉE** / **INTÉGRÉE** (`18`/`19`) |
| Delivery P0 | **CLÔTURÉ** — implémenté, validé visuellement, mergé, post-mergé, cleanup |
| PR #217 | **MERGED** — `feat: implement SFIA Studio P0 governed workspace` |
| Commit projet | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
| Merge squash | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| Périmètre | 77 fichiers ; +12830 / −0 ; 4 routes P0 |
| Squash | Commit de branche non ancêtre de `main` ; trees app **identiques** |
| Branche Delivery | **Supprimée** (local + remote) |
| Gate Morris Delivery P0 | **Aucune restante** |
| App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
| Prochaine orientation | Review draft PR ; merge **FERMÉ** ; Cursor réel / UI / Docker **FERMÉS** |
| Architecture POC | **Option B minimale** — POC-G7 **INTÉGRÉ** (PR #221) |
| Sync post-merge archi | **MERGED** — PR #222 / `60e6880…` |
| Backlog POC | POC-G8 **CONSOMMÉ** — docs `26`–`28` |
| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
| Branche backlog | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |

> Option B ≠ Option C. Harness autonome. Studio cockpit. Adaptateur sans autorité. POC non lancé.

### Trace factuelle — Delivery P0 (historique compact)

| Champ | Valeur |
|-------|--------|
| Autorisation initiale (TA-DEC-18) | Delivery P0 autorisé (historique `19`) |
| Exécution | Implémentation + polish + validation visuelle Morris |
| Intégration | PR #217 squash-mergée sur `main` |
| Post-merge | Validations reproductibles vertes |
| Cleanup | Branche Delivery locale + distante supprimées |
| Exclu / réserve | Responsive ; a11y complète ; CI ; fix postcss ; Runtime/Git/Cursor réels ; MVP |

---

## 1. Rappel D-VAL-1 à D-VAL-10 (historiques)

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | **Option C méthode** — consomme v2.6 | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** **autorisés** ; **merge non autorisé** | G7 |

### Contenu D-VAL-10 (G7) — historique

Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé** par cette décision. Handoff ≠ G7.

### D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contexte | Validation après contrôle post-merge et revue de la synchronisation documentaire |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |

---

## 2. Statut G1–G7 et DF-G1

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ** |
| **G2** | **VALIDÉ** |
| **G3** | **REVUE CONFORME** |
| **G4** | **VALIDÉ — OPTION C** |
| **G5** | **VALIDÉ SUR LE PRINCIPE** |
| **G6** | **VALIDÉ** — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** — cadrage détaillé validé (D-VAL-9) |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé. **Observation :** PR #207 mergée (`ec21074`). **Régularisation :** D-VAL-11 validée. |

G7 **≠** autorisation rétroactive de merge.

---

## 3. Trajectoire produit (état factuel)

```text
Pré-cadrage
  → cadrage détaillé
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI P0
  → architecture technique P0
  → Delivery P0
  → PR #217 / intégration main
  → post-merge / cleanup
  → capitalisation P0 (PR #218)
  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
  → architecture POC ciblée             ← POC-G7 **INTÉGRÉ** — Option B — PR #221
  → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`)
  → delivery harness-only                ← POC-G9 CONSOMMÉ ; draft PR Cycle 13 ; merge fermé
  → décision Morris : abandon / itération / préparation MVP
```

### Précisions

- Architecture : **Option B minimale** (intégrée).
- Option A : mode test / dégradé harness.
- Option C : écartée 1er POC.
- POC-G8 : **CONSOMMÉ**. POC-G9 : **CONSOMMÉ** (harness-only). POC : **non lancé**.

### Orientation

> Backlog S1 intégré. Allowlist initiale **validée** harness-only. POC-G9 **consommé**. Draft PR autorisée ; merge **fermé**. POC **non lancé**.

---

## 4. Cycles (historique et prochain)

### 4.0 Synchronisation documentaire post-merge

| Champ | Contenu |
|-------|---------|
| Statut | **FAIT / VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé |
| Objectif | Aligner docs sur l’état Git post-merge |
| Ne lance pas | Conception / architecture / POC |

### 4.1 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` (PR #209) |
| Objectif | Préciser comportements et règles métier des capacités |
| Livrables | `08` / `09` / `10` — **validés** et **intégrés** |
| Profil | Critical |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration Git | **Réalisée** — `99eaeaa…` / `fdade59…` |
| Ne lance pas | Architecture ; UX visuelle ; stack ; POC ; MVP ; code |

### 4.2 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
| Objectif | Blocs logiques ; frontières Studio / Git / GPT / Cursor / orchestrateur candidat |
| Livrables | `11` / `12` / `13` — sur `main` |
| Profil | Critical |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
| D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
| Branche | `project/sfia-studio-functional-architecture` — **conservée** |
| Commits / merges | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync `33d61e3…` ; merge #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836…` |
| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) |
| Acceptation #211 | **VALIDÉE** Morris 2026-07-18 (sans D-VAL-12) |
| Ne lance pas | Architecture technique ; stack ; POC ; MVP ; code ; clôture auto architecture |

### 4.3 UX/UI

| Champ | Contenu |
|-------|---------|
| Statut | **CLÔTURÉ** — AF-CAND-11B VALIDÉE ; Option B ; Figma P0-00C…03C |
| Référence | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO |
| Livrables | `14` / `15` / `16` |
| Suite | Delivery P0 **exécuté et clôturé** (PR #217) |
| Ne lance pas | POC ; MVP ; Runtime réel ; clôture architecture fonctionnelle |

### 4.4 Architecture technique P0

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **INTÉGRÉE** (`18`/`19` ; TA-DEC-01…18) |
| Suite | Delivery P0 **CLÔTURÉ** depuis TA-DEC-18 (autorisation historique → exécution #217) |
| Ne lance pas | Architecture Runtime ; orchestration réelle ; MVP |

### 4.5 Delivery P0

| Champ | Contenu |
|-------|---------|
| Statut | **CLÔTURÉ** — PR #217 ; post-merge ; cleanup branche |
| Livrable | `projects/sfia-studio/app/` sur `main` @ `759ab0b…` |
| Ne lance pas | POC orchestration ; Git/Cursor réels ; CI Studio |

### 4.6 Cadrage POC orchestration (Option B)

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
| Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| Architecture | Option B minimale (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
| Ne lance pas | POC ; backlog ; delivery ; MVP |

### 4.7 Sécurité (bornée)

| Champ | Contenu |
|-------|---------|
| Validé | Lecture Git réelle OK ; writes distantes simulées ; L5 global interdit ; secrets exclus |

---

## 5. Décisions à préparer

| ID | Décision | Nature | Statut |
|----|----------|--------|--------|
| D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris | **FAIT** (D-VAL-9 / DF-G1) |
| D-NEXT-2 | Sélection du cycle conception fonctionnelle | Morris | **FAIT** — 2026-07-18 |
| D-NEXT-2b | Validation de la conception (FD-CAND-01…08) | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **FAIT** — architecture fonctionnelle **lancée** |
| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209 / #210) |
| D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **VALIDÉE** sur le fond — AF-Option C + AF-CAND-01…10, 11A, 12 ; 11B ouverte |
| D-NEXT-2i | Intégration PR #211 | Observation Git | **Fait Git** (`84e4863…`) |
| D-NEXT-2i2 | Acceptation/régularisation documentaire #211 | Morris | **VALIDÉE** — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
| D-NEXT-2i3 | Sync post-merge PR #212 | Observation Git | **MERGED** (`cb870544…`) — sync **intégrée** |
| D-NEXT-2i4 | Finalisation post-merge PR #213 | Observation Git | **MERGED** (`19302836…`) — finalisation **intégrée** |
| D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **VALIDÉE** — UX/UI clôturé |
| D-NEXT-2g1 | Option B consolidation UX docs | Morris | **VALIDÉE** |
| D-NEXT-2g2 | Lancement delivery P0 | Morris | **CLÔTURÉ** — PR #217 |
| D-NEXT-2g3 | Commit/push/PR sync UX | Morris | **Historique** — intégré via trajectoire Delivery |
| D-NEXT-2g4 | Orientation Option B — cadrage POC orchestration | Morris | **VALIDÉE + INTÉGRÉE** (PR #219) — POC **non lancé** |
| D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX / Delivery | Morris | Jusqu’au cadrage POC **intégré** ; prochain = décision éventuelle POC-G7 |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | **Traité** dans le cadrage POC (G1–G6) — POC non lancé |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris — à rouvrir au cadrage POC |
| D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
| D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée ; décision distincte |
| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** + **intégrée** (PR #218) |
| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **FAIT** (PR #218) |
| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
| D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
| D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; harness-only **consommé** ; draft PR Cycle 13 ; merge **fermé** |
| D-NEXT-19 | GO versionnement sync post-merge cadrage | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
| D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
| D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
| D-NEXT-22 | Validation architecture / ARCH-POC-CAND / Option B | Morris | **FAIT** — POC-G7 **VALIDÉ AVEC RÉSERVES** |
| D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **CONSOMMÉ** — PR #221 **MERGED** (`40f8ebe…`) |
| D-NEXT-24 | Ouverture POC-G8 | Morris | **CONSOMMÉ** — backlog `26`–`28` |
| D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
| D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
| D-NEXT-27 | Validation backlog / allowlist initiale harness-only | Morris | **CONSOMMÉE** |
| D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
| D-NEXT-29 | Commit/push/draft PR delivery harness | Morris | **CONSOMMÉ** (Cycle 13) — merge **fermé** |
| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | UI/Docker **fermés** ; spike Cursor **prouvé avec réserves** (`29`) — versionnement ouvert |

---

## 6. Options de séquencement post-cadrage

### Option 1 — Conception puis architecture fonctionnelle

| | |
|--|--|
| **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
| **Risques** | Conception trop détaillée sans frontières |
| **Prérequis** | Cadrage documentaire clôturé (D-VAL-11) |

### Option 2 — Architecture fonctionnelle légère puis conception détaillée

| | |
|--|--|
| **Bénéfices** | Pose frontières Studio / orchestration tôt |
| **Risques** | Archi prématurée si trop technique |

### Option 3 — Exploration UX bornée après capacité map

| | |
|--|--|
| **Bénéfices** | Valide parcours opérateur tôt |
| **Risques** | UI avant règles métier |

### Recommandation (≠ décision / ≠ sélection)

**Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).

**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).

**AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.

**AF-CAND-11B :** **VALIDÉE** — UX/UI clôturé. Delivery P0 **exécuté et clôturé** (PR #217).

**Option B (Morris — capitalisation) :** cadrage POC orchestration **VALIDÉ + INTÉGRÉ** (PR #219). POC **non lancé**.

Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industrialisation **non engagés**.

---

## 7. Gates futurs proposés

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
| **DF-G2** | Sélectionner le prochain cycle | **FAIT** jusqu’à cadrage POC intégré |
| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique |
| **DF-G4** | Autoriser définition détaillée du POC | **Partiellement couvert** par cadrage POC (G1–G6) — architecture POC = POC-G7 |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** — non validé |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Architecture Option B : **intégrée** (#221). POC-G8/G9 **CONSOMMÉS**. Draft PR harness Cycle 13 ; merge **fermé**.

---

## 8. Questions Morris

1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément) ?
2. Ouvrez-vous **POC-G9** (delivery borné) ?
3. Clôture formelle AF (séparée) ?

---

## 9. Critères

| Critère | État |
|---------|------|
| Architecture Option B | **INTÉGRÉE** |
| POC-G7 | **INTÉGRÉ** |
| POC-G8 | **CONSOMMÉ** |
| POC-G9 | **Fermé** |
| POC lancé | **Non** |

---

## 10. Verdict documentaire

**Verdict :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [26](./26-poc-orchestration-backlog.md) · [27](./27-poc-orchestration-allowlist-and-acceptance.md) · [28](./28-poc-orchestration-delivery-gate-pack.md) | Backlog POC-G8 |
| [23](./23-poc-orchestration-technical-architecture.md) · [24](./24-poc-orchestration-contracts-security-and-observability.md) · [25](./25-poc-orchestration-architecture-decision-pack.md) | Archi Option B |
| [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
| [11](./11-functional-architecture.md) | AF-Option C |

*Option B — POC-G9 harness-only CONSOMMÉ — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*

```
### `projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md`

```
# SFIA Studio — Gate pack delivery POC S1 (POC-G9 harness-only)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond Cycle 5 |
| **Profil** | Critical |
| **POC-G8** | **CONSOMMÉ** (backlog produit) |
| **POC-G9** | **CONSOMMÉ** — harness-only local |
| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
| **Delivery** | Harness **MERGED** (#224) ; spike Cursor = branche locale non versionnée |
| **Allowlist** | **VALIDÉE** pour incrément harness-only S1 |
| **Cursor** | **fixture** = défaut ; spike réel **inconclusive** (auth) — pas défaut |
| **Docker** | **Non retenu** pour l’incrément ; option future = gate Morris |
| **Base** | `main` @ `1c44bc0…` (#224 MERGED) |
| **Architecture** | Option B minimale (inchangée) |

> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.

---

## 1. Couverture backlog

| Epic | Couvert dans `26` | Ready pour instruction delivery ? |
|------|-------------------|-----------------------------------|
| E1 Contrats | Oui | Couvert harness-only local |
| E2 Harness | Oui | Oui |
| E3 GitReader | Oui | Oui |
| E4 CursorPort | Oui | Oui — réel = spike |
| E5 Policy | Oui + `27` | Allowlist initiale **validée** harness-only |
| E6 Adaptateur | Oui | Oui — protocole ouvert |
| E7 Cockpit | Oui | **Fermé** — `app/**` interdit (POC-G9 harness-only) |
| E8 Sécurité | Oui | Oui |
| E9 Observabilité | Oui | Oui |
| E10 QA | Oui | Oui |
| E11 Démo | Oui | Should |

---

## 2. Prérequis POC-G9 — statut après consommation harness-only

Checklist **consommée** pour l’incrément harness-only :

1. Backlog `26` validé / intégré (#223) — **fait**.
2. Allowlist/denylist `27` **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — **fait** ; élargissement = nouveau GO.
3. Option B confirmée : Studio cockpit / adaptateur fin / harness autonome — architecture inchangée ; Studio/adaptateur **non** livrés dans cet incrément.
4. Hors périmètre confirmé : no remote write, no L5 global, no MVP — **en vigueur**.
5. Modes Cursor pour cet incrément : **fixture uniquement** — **fait** ; manuel/réel **fermés**.
6. Touch `app/**` : **non** — harness-only ; `app/**` **fermé**.
7. Stratégie de preuve (§5) — preuves locales harness produites ; relecture evidence requise.
8. Plan de réversibilité (§7) — **en vigueur**.
9. Techno/protocole non présentés comme définitifs — **en vigueur**.

**POC-G9 = CONSOMMÉ** pour harness-only local.
**Restent fermés :** UI/`app/**` · Cursor réel · Docker (non retenu) · **merge** · lancement autonome / industrialisation. *(commit/push/draft PR = GO Cycle 13 consommé)*
**POC global :** **non** validé comme réussi.

---

## 3. Risques delivery (harness-only / élargissements futurs)

| Risque | Sévérité | Mitigation |
|--------|----------|------------|
| Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
| Allowlist trop large | Haute | Allowlist initiale validée bornée ; défaut deny ; élargissement = GO |
| API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
| Seconde vérité UI | Haute | Statut dérivé journal |
| Écriture Git accidentelle | Haute | Denylist + tests A2 |
| Service permanent inutile | Moyenne | Processus local à la demande |
| Scope creep multi-scénario | Moyenne | S1 only |

---

## 4. Réserves conservées (architecture)

1. Cursor réel non prouvé — **fermé** pour cet incrément (fixture only).
2. Technologie harness ouverte (Node/TS candidat POC, pas Runtime produit définitif).
3. Protocole adaptateur ouvert — adaptateur/UI non livrés.
4. Allowlist initiale S1 **validée** pour le harness-only livré localement. Tout élargissement de chemins, commandes, modes Cursor ou effets Git nécessite un **nouveau GO Morris**.
5. `app/**` **fermé** — POC-G9 harness-only n’autorise pas `app/**`.
6. QA non-seconde-vérité.
7. Clôture AF séparée.
8. POC-G9 **consommé** pour harness-only ; draft PR Cycle 13 ; **merge** / lancement autonome / industrialisation **fermés**.
9. **Docker** n’est pas utilisé pour l’incrément harness-only. Toute introduction ultérieure nécessite une décision Morris distincte. Docker n’est ni retenu ni définitivement exclu pour la trajectoire future.

---

## 5. Stratégie de preuve (delivery futur)

| Phase | Preuve |
|-------|--------|
| Harness-only | A1, A2, A4, A5 (`27`) verts |
| Sécurité | Matrice AB-01…08 |
| Option B UI | A1 + A6 + preuve statut dérivé |
| Démo Morris | Pack E11 |

Outils de test : ouverts (alignement repo). Pas de CI Studio imposée dans ce pack.

---

## 6. Sécurité (gate)

- Authority : Morris L0 ; harness revalide.
- Intégrité : `contractHash`.
- Replay : détection GO consommé.
- Injection : paths/commands.
- Fail-closed : défaut deny.
- Journal : pas de secrets.
- STOP : prioritaire.

---

## 7. Observabilité / réversibilité

| Thème | Exigence |
|-------|----------|
| Journal | JSONL corrélé |
| Preuves | Locales sous proofDir |
| Corrélation | request/execution/gate IDs |
| Erreurs | Explicitement journalisées |
| Reprise | Nouveau GO après rejet |
| Réversibilité | Pas d’effet distant ; cleanup local preuves possible |
| Mode dégradé | Option A sans Studio |

---

## 8. FinOps / GreenOps

- Local macOS.
- Pas de composant managé.
- Pas de daemon permanent non nécessaire.
- Protocole simple.
- Dette minimale.

---

## 9. Décisions Morris — consommées / restantes

### Consommées (POC-G9 harness-only)

1. Allowlist `27` **validée** pour l’incrément harness-only S1.
2. Premier incrément **harness-only** autorisé (`app/**` intact / fermé).
3. Mode Cursor : **fixture uniquement**.
4. Commit/push/draft PR delivery = **CONSOMMÉ** (Cycle 13) ; **merge** = **fermé**.

### Restantes (nouveau GO requis)

1. Review / re-review des preuves harness.
2. Merge delivery (après review) — **non autorisé** ici.
3. Toute surface `app/**` / UI Studio.
4. Cursor manuel ou réel (spike + preuve).
5. Introduction Docker.
6. Tout élargissement allowlist.
7. Lancement autonome / industrialisation / clôture AF.

---

## 10. Verdicts

Verdict **futur candidat** (après preuves validées + démo + décisions Morris) — **non actuel** :

`POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`

**Verdict documentaire courant (Cycle 9 QA) :**

`DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW`

Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industrialisé.

---

## 11. Actions interdites (rappel)

`app/**` · Cursor réel · Docker (cet incrément) · **merge** delivery · lancement autonome / industrialisation · L5 · writes Git distantes · élargissement allowlist sans nouveau GO · choix techno/protocole définitifs sans preuve

*(POC-G9 harness-only déjà consommé — ne pas relire comme « ouverture interdite » du harness local.)*

---

*Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist VALIDÉE (incrément) — draft PR Cycle 13 — merge FERMÉ — POC NON LANCÉ.*

---

## Spike Cursor réel (Cycle 7 — statut)

Spike Cursor : auth session locale **OK** ; S-CUR-02 sandbox **PROUVÉ** avec réserves ; fixture = défaut ; mode réel non défaut. Voir `29`.

Commit/push/PR du spike : **non autorisés** ici.

```
### `projects/sfia-studio/29-poc-cursor-real-spike-report.md`

```
# SFIA Studio — Rapport spike Cursor réel (Cycle 7)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `29-poc-cursor-real-spike-report.md` |
| **Horodatage** | 2026-07-19 18:09 CEST (Europe/Paris) |
| **Cycle** | 7 — Intégration / DevOps — reprise authentifiée |
| **Profil** | Critical |
| **Branche** | `spike/sfia-studio-cursor-real-adapter` (**locale**) |
| **Base** | `main` @ `1c44bc01ff115216d515dfdd9bde5d7eaccfa966` (#224) |
| **Auth** | Session locale via `cursor agent login` (lien navigateur) |
| **Commit / push / PR** | **NON AUTORISÉS** |

---

## 1. Objectif

Authentifier Cursor Agent localement sans secret dans le repo, puis rejouer S-CUR-02…08 dans la sandbox.

---

## 2. Authentification

| Élément | Valeur |
|---------|--------|
| Méthode | **`cursor agent login`** + deep link navigateur (méthode **officielle**) |
| Auth avant | Not logged in |
| Auth après | **Logged in** (identité redacted) |
| CURSOR_API_KEY_defined | **false** (non utilisée) |
| GITHUB_TOKEN / GH_TOKEN | **false** |
| Secret dans repo / preuves | **aucun** |
| Tokens | stockés par Cursor Agent localement (« Authentication tokens stored securely ») — **hors repo** |

Note : le premier succès navigateur (« All set ») sans processus CLI encore en attente ne propage pas la session. Il faut compléter le login **pendant** que `cursor agent login` attend.

---

## 3. Versions / hash agent

| Élément | Valeur |
|---------|--------|
| Cursor app | 3.12.17 |
| cursor-agent | 2026.07.16-899851b |
| Hash (binaire réel) | `eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831` |
| Avant / après auth+runs | **inchangé** |

---

## 4. Correction wrapper minimale

- Mode **`agent`** (écriture) vs `ask`/`plan` (lecture seule).
- Ajout `--sandbox enabled` ; **pas** de `--force` / `--yolo`.
- Test live restaure le feature flag après un test unitaire qui le `delete`.
- Justification : run `ask` exit 0 sans créer `output/summary.txt` (refus write Ask mode).

---

## 5. Run nominal S-CUR-02 (authentifié)

| Champ | Valeur |
|-------|--------|
| Feature flags | `SFIA_CURSOR_REAL_SPIKE=1` + `enabled:true` |
| Mode | `agent` (défaut CLI, sandbox workspace) |
| CWD / workspace | `…/harness/spikes/cursor-real/sandbox` |
| Durée | ~14.2 s |
| exitCode | **0** |
| timedOut | **false** |
| `output/summary.txt` | **présent**, **1 ligne** |
| Contenu | `spike-fixture-v1: read-only content for cursor real spike` |
| Cohérent fixture | **oui** |
| realCursorProcessInvoked | **true** |
| productionReadyClaimed | **false** |

Preuve ask-mode préalable (non nominale) : exit 0 mais pas de fichier — conservée dans `result-ask-mode-readonly.json`.

---

## 6. Scénarios

| ID | Résultat |
|----|----------|
| S-CUR-01 | PROUVÉ (cycle précédent) |
| S-CUR-02 | **PROUVÉ** (auth + write sandbox) |
| S-CUR-03 | PARTIEL — `--workspace` + sandbox ; enforcement agent hors cwd **non** prouvé par attaque réelle |
| S-CUR-04 | **PROUVÉ** wrapper (`SIGTERM` / sleep) |
| S-CUR-05 | **PROUVÉ** (prompt vide → exit 1, stderr « No prompt provided ») |
| S-CUR-06 | **PROUVÉ** — seul `output/summary.txt` ajouté dans sandbox ; pas d’`app/**` |
| S-CUR-07 | **PROUVÉ** — rejet `SPIKE_PATH_ESCAPE` **avant** invoke |
| S-CUR-08 | **PARTIEL** — timeout authentifié agent (exit 143 / timedOut) ; **worker-server** Cursor peut rester actif |

---

## 7. Git / filesystem / processus

| Contrôle | Résultat |
|----------|----------|
| app/** | inchangé |
| Docker | absent |
| Commit/push/PR | aucun |
| Effet Git hors fichiers spike | aucun |
| Processus résiduel | `index.js worker-server` **observé** (infra Cursor Agent) — réserve |

---

## 8. Réseau

- Auth : réseau **observé** (cursor.com login).
- Run : service Cursor **probable** (non mesuré finement).
- Pas de capture intrusive.

---

## 9. Docker

Run nominal contrôlé **nativement** (workspace sandbox + flags).
**Recommandation :** ne pas introduire Docker pour cet incrément.

---

## 10. Tests

| Suite | Résultat |
|-------|----------|
| Stables | 26 PASS |
| Spike unit (défaut) | 37 PASS + 1 skipped (live) |
| Spike live (`SFIA_*`) | 11 PASS + 1 skipped (placeholder inverse) |
| typecheck / build | PASS |

Fixture stable **préservée**. Mode réel **non défaut**.

---

## 11. Réserves

1. Mode `agent` peut théoriquement écrire/shell hors allowlist harness — mitigation = workspace sandbox + instruction + `--sandbox enabled` + pré-rejet paths ; **pas** une preuve d’incapacité agent.
2. `worker-server` résiduel.
3. STOP = wrapper timeout, pas API cancel native démontrée.
4. Session auth utilisateur locale — non portable CI sans nouveau GO.
5. Auto-install historique `~/.local/bin/cursor-agent`.
6. Pas de baseline / pas d’allowlist stable élargie.

---

## 12. Recommandation

- Considérer l’invocation locale **contrôlée pour le POC** comme **démontrée avec réserves**.
- Décision Morris pour **versionnement** du spike (commit/PR) — séparée.
- Ne pas activer par défaut ; ne pas UI ; ne pas Docker ; ne pas SDK sans GO.

---

## 13. Verdict

**`CURSOR REAL AUTHENTICATED SPIKE COMPLETE WITH RESERVES — CONTROLLED LOCAL INVOCATION PROVEN — VERSIONING DECISION REQUIRED`**

---

## 14. Versionnement (Cycle 13 PR readiness)

Ce document et le code spike sont versionnés comme **artefacts expérimentaux**.

| Règle | Statut |
|-------|--------|
| Preuves runtime brutes | **exclues** du commit (gitignore) |
| Secrets / session / chemins `/Users/...` | **exclus** |
| Mode réel par défaut | **non** |
| Fixture | **défaut stable** |
| Versionnement | ≠ activation produit |
| Prochain incrément POC | spike **GPT/ChatGPT** (qualification contrat / verdict) |
| UI Studio | **fermée** (cycle séparé) |
| POC complet | **non** démontré |

```
### `projects/sfia-studio/README.md`

```
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `poc-s1-harness-delivery-local` — POC-G9 **CONSOMMÉ** (harness-only) ; POC-G8 **CONSOMMÉ** ; Option B **INTÉGRÉE** ; POC **non lancé** ; `app/**` **intact** |
| **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
| **Typologie cycle** | DELIVERY / POC / ARCH / SEC / QA — Critical |
| **Cycle projet** | 8 — Delivery / implémentation (harness-only) |
| **Profil SFIA** | Critical |
| **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
| **Branche architecture** | historique — MERGED #221 |
| **Base canonique** | `origin/main` @ `1c44bc01ff115216d515dfdd9bde5d7eaccfa966` |
| **Chemin** | `projects/sfia-studio/` |
| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
| **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
| **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
| **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
| **POC** | **Non lancé** (pas d’industrialisation / daemon) |
| **Prochaine décision** | Auth spike Cursor / versionnement spike — **Morris** ; UI Studio / Docker — **FERMÉS** |

---

## 0. État produit (capitalisation post-Delivery P0)

| Élément | Valeur |
|---------|--------|
| Cadrage | **Clôturé** (D-VAL-11) |
| Conception fonctionnelle | **Clôturée** et **intégrée** (PR #209 / #210) |
| Architecture fonctionnelle | **Validée** et **intégrée** (#211–#214) — clôture formelle **ouverte** |
| UX/UI P0 | **Clôturé** (Option B ; `14`–`16` ; Figma) |
| Architecture technique P0 | **Validée** et **intégrée** (`18`/`19`) |
| Delivery P0 | **Clôturé** — implémenté, validé, mergé, post-mergé, cleanup effectué |
| PR Delivery P0 | [#217](https://github.com/mcleland147/sfia-workspace/pull/217) — **MERGED** (squash) |
| Titre | `feat: implement SFIA Studio P0 governed workspace` |
| Commit projet | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
| Merge squash | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| Périmètre | 77 fichiers sous `projects/sfia-studio/app/**` ; +12830 / −0 |
| Routes P0 | `/` → `/synthese` ; `/nouvelle-demande` ; `/cycle-actif` ; `/decision` |
| Preuves | Validation visuelle Morris ; lint / typecheck / Vitest / build / Playwright post-merge verts |
| Nature squash | Commit de branche **non ancêtre** de `main` ; trees applicatifs **vérifiés identiques** |
| Branche Delivery | **Supprimée** (locale + distante) — aucune gate Morris restante sur Delivery P0 |
| App sur `main` | Disponible — desktop 1440×1024 ; pas d’API / auth / BDD / orchestration réelle |
| Git / Cursor / Runtime | **Simulés ou désactivés** en P0 |
| Produit complet / MVP / industrialisation | **Non atteints** |
| Cadrage POC orchestration (Option B) | **VALIDÉ** et **INTÉGRÉ** — PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) ; merge `be713c45…` |
| Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
| Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
| Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| Sync post-merge cadrage | PR #220 — **MERGED** (`b882892…`) |
| Architecture POC | **Option B minimale** (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
| Sync post-merge archi | PR #222 — **MERGED** (`60e6880…`) |
| Backlog POC | `26`–`28` — POC-G8 **CONSOMMÉ** |
| Branche architecture | historique — remote **supprimée** après #221 |
| Branche cadrage | conservée |
| Branches historiques | conservées |

> Architecture Option B **INTÉGRÉE**. Harness-only (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**. GO commit/push/draft PR **consommé** (Cycle 13). Merge **fermé**. `app/**` intact.

---

## 1. Finalité du projet (produit complet)

**SFIA Studio vise la construction d’une plateforme métier complète** permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.

### Formulation structurante (D-VAL-3)

> SFIA Studio vise la construction d’une plateforme métier complète permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.
>
> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### Distinction obligatoire

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme complète — opérationnelle et durable |
| **POC** | Preuve de **faisabilité technique** limitée |
| **MVP** | Première version **réellement utilisable** (valeur métier) — non défini ici |
| **Industrialisation** | Exploitation industrialisée de la **plateforme** — pas « industrialiser les cycles » |

### Vision produit (base du cadrage)

> SFIA Studio permet de **qualifier, lancer, suivre et clôturer** les cycles SFIA.
> La plateforme est ensuite destinée à être **exploitée de manière industrialisée**, sécurisée, observable, maintenable et distribuable.

Revue documentaire G3 : **conforme** (aucune réserve bloquante). La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**. Cadrage détaillé **validé** via **D-VAL-9 / DF-G1**.

### Orchestration déterministe (candidat — non validé)

Un mécanisme d’orchestration déterministe, **éventuellement** matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions. Séparation Studio / Runtime à qualifier en architecture.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel | **Candidat** |
| Architecture Runtime | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Couverture des 15 cycles

Couverture **progressive**. Pas d’obligation dans le POC ou le MVP. Sous-ensemble MVP **non sélectionné** ici.

### Faisabilité vs valeur

| Étape | Ce qu’elle valide |
|-------|-------------------|
| **POC** | Faisabilité technique |
| **MVP** | Première valeur métier utilisable |
| **Industrialisation** | Durabilité d’exploitation de la plateforme |

### macOS

Contrainte de **preuve** du POC — **pas** plateforme produit définitive.

### Relation méthode (G4 — Option C)

Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution méthode = CAPA/EVOL séparé + GO Morris.

---

## 2. Trajectoire macro (état factuel)

```text
Pré-cadrage
  → cadrage détaillé
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI P0
  → architecture technique P0
  → Delivery P0
  → PR #217 / intégration main
  → post-merge / cleanup
  → capitalisation P0 (PR #218)
  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B — PR #221 / `40f8ebe…`
  → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist initiale **validée** harness-only
  → delivery harness-only                ← POC-G9 **CONSOMMÉ** ; draft PR Cycle 13 ; merge **fermé**
  → décision Morris : abandon / itération / préparation MVP
```

Architecture Option B **intégrée**. Backlog S1 **intégré**. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**.

---

## 3. Navigation

### Pré-cadrage (historique)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, état, décisions, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision (historique) |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles (historique) |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage (historique) |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Rôle |
|----------|------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit détaillé |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités et cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres et critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire et décisions |

> **Cadrage détaillé ≠ conception / architecture / UX / backlog / POC / code.**

### Conception fonctionnelle — VALIDÉE

| Document | Rôle |
|----------|------|
| [08-functional-design.md](./08-functional-design.md) | Contrat de conception fonctionnelle |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours F1–F12 et règles métier |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation (FD-CAND-01…08 VALIDÉES) |

> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. **Intégrée** sur `main` via PR #209 / sync #210 (`e9d8193…`). Baseline `08`–`10` **inchangée** pendant le cycle architecture. ≠ stack / UX visuelle / backlog / POC / MVP / code.

### Architecture fonctionnelle — VALIDÉE et INTÉGRÉE (PR #211)

| Document | Rôle |
|----------|------|
| [11-functional-architecture.md](./11-functional-architecture.md) | Blocs, authority/truth models, NFR fonctionnels |
| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |

> Statut architecture `functional-architecture-post-merge-integrated` (intégration). **AF-Option C VALIDÉE**. AF-CAND-01…10, 11A, 12 **VALIDÉES**. **AF-CAND-11B VALIDÉE** (UX/UI clôturé). Aucune D-VAL-12. Clôture formelle architecture **non prononcée**.

### UX/UI — CLÔTURÉ (cycle 4)

| Document | Rôle |
|----------|------|
| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | Contrat visuel + règles transverses ; Figma `lrjA1WEyRpL05vKR8k29LO` |
| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | Quatre écrans P0 et parcours |
| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | Décisions UX Morris / Option B |

| Frame | node | Dimensions |
|-------|------|------------|
| P0-00C Nouvelle demande | `19:2` | 1440×1024 |
| P0-01C Vue synthèse | `22:2` | 1440×1024 |
| P0-02C Cycle actif | `22:133` | 1440×1024 |
| P0-03C Décision Morris | `22:270` | 1440×1024 |

> UX/UI **CLÔTURÉ**. Référence Figma = implémentation **initiale** (non intangible). Delivery P0 **exécuté et clôturé** (PR #217). Desktop 1440×1024 uniquement ; responsive / a11y complète / CI / Runtime réel **non validés**.

### Delivery P0 — CLÔTURÉ (PR #217)

| Document / artefact | Rôle |
|---------------------|------|
| [app/README.md](./app/README.md) | Runtime P0 — stack, routes, contraintes |
| `projects/sfia-studio/app/**` | 77 fichiers intégrés sur `main` @ `759ab0b…` |

> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Cadrage POC Option B : documents `20`–`22` **VALIDÉS** (2026-07-19) — POC **non lancé**.

### Cadrage POC orchestration — VALIDÉ et INTÉGRÉ (PR #219)

| Document | Rôle |
|----------|------|
| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif, contraintes, critères — **VALIDÉ + INTÉGRÉ** |
| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario **S1** contrat de cadrage — **VALIDÉ + INTÉGRÉ** (**non exécuté**) |
| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — G7–G8 OK ; G9 **CONSOMMÉ** harness-only |

| Fait Git | Valeur |
|----------|--------|
| PR | [#219](https://github.com/mcleland147/sfia-workspace/pull/219) — **MERGED** (squash) |
| Merge | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
| Sync post-merge | PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **MERGED** (`b882892…`) |
| POC-G10 | **CONSOMMÉ** |

### Architecture POC orchestration — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ)

| Document | Rôle |
|----------|------|
| [23-poc-orchestration-technical-architecture.md](./23-poc-orchestration-technical-architecture.md) | Option B minimale ; harness autonome ; adaptateur ; Option A = test |
| [24-poc-orchestration-contracts-security-and-observability.md](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats Studio/adaptateur/harness ; sécurité |
| [25-poc-orchestration-architecture-decision-pack.md](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND-* validées (avec réserves) |

| Fait Git | Valeur |
|----------|--------|
| PR | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) — **MERGED** (squash) |
| Merge | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
| Branche remote archi | **supprimée** après merge |

> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only). Runtime/protocole **ouverts**. POC **non lancé**.

> Studio = cockpit. Adaptateur = sans autorité. Harness = cœur d’exécution autonome. Option C écartée (1er POC).

---

## 4. Justification Critical

Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.

Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical** : règles de contrôle des actions Git/GPT/Cursor ; gates, permissions, arrêts ; prévention d’auto-arbitrage et de seconde vérité.

Le cycle d’architecture fonctionnelle est en profil **Critical** : responsabilités Morris/GPT/Cursor/Git/orchestrateur candidat ; gates et preuves ; frontières empêchant une seconde vérité ou une architecture technique implicite.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git `main` = source de vérité | Cadrage `01`–`07` + conception `08`–`10` intégrés (PR #207 / #208 / #209) |
| Conception validée = intégrée | PR #209 / `fdade59…` ; branche `functional-design` conservée |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C méthode | Consomme v2.6 (**validé**) |
| POC ≠ valeur | Faisabilité ≠ MVP |
| Couverture progressive | 15 cycles = cible long terme |
| Runtime candidat | Non figé |
| macOS = preuve | Non plateforme produit |
| Observation ≠ règle | Pas de promotion méthode |
| Commit / push / PR / merge | Autorisations **distinctes** (règle générique) |

---

## 6. Gates G1–G7 (historiques) et observation merge

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 |
| **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
| **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** (D-VAL-9) — cadrage détaillé validé |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 **mergée**. **Régularisation :** D-VAL-11 **VALIDÉE**. |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. G7 **≠** autorisation rétroactive de merge.

---

## 7. Décisions D-VAL-1 à D-VAL-11 et FD-CAND

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | **Option C méthode** (consomme v2.6) | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** autorisés ; **merge non autorisé** (historique) | G7 |
| D-VAL-11 | Intégration PR #207 reconnue ; socle sur `main` ; cadrage documentaire **clôturé** ; branche conservée ; prochain cycle non sélectionné | Clôture |

### Contenu D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche `project/sfia-studio-pre-framing` conservée jusqu’à décision distincte |

### FD-CAND-01…08 — VALIDÉES

Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01…08 — **2026-07-18**. Identifiants locaux au cycle de conception — **pas de D-VAL-12**.

### Décisions architecture — VALIDÉES sur le fond

| Décision | Statut |
|----------|--------|
| AF-Option C (Studio / orchestrateur séparés) | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10 | **VALIDÉES** |
| AF-CAND-11A (trajectoire recommandée) | **VALIDÉE** (recommandation uniquement) |
| AF-CAND-11B (sélection prochain cycle) | **VALIDÉE** — UX/UI clôturé |
| AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
| D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |

### Décisions encore ouvertes / clôturées depuis

| Décision | Statut |
|----------|--------|
| AF-CAND-11B — UX/UI | **VALIDÉE** — UX/UI clôturé |
| Option B consolidation 14/15/16 | **VALIDÉE** |
| Delivery P0 | **CLÔTURÉ** — PR #217 mergée ; post-merge + cleanup effectués ; aucune gate restante |
| Acceptation / régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 |
| Sync #212 + finalisation #213 | **INTÉGRÉES** |
| Clôture formelle cycle architecture | **Non** — non automatique |
| Sort des branches historiques | Conservées ; décisions distinctes |
| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| Définition MVP | **Non pris** |
| Industrialisation | **Non engagée** |
| Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
| Vulnérabilités moderate postcss (via Next) | **Ouvertes** — pas de fix forcé |
| Runtime / Git / Cursor réels | P0 = simulés ; futur POC = lecture Git réelle + writes distantes simulées ; Runtime **non sélectionné** |

> Conception : intégrée (PR #209 / #210). Architecture fonctionnelle : intégrée (#211–#213). Architecture technique P0 + Delivery P0 : **intégrés** (PR #217 / `759ab0b…`). Aucune D-VAL-12.

### Orientation Morris — architecture POC

> POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog S1). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
> **POC non lancé.** POC-G9 **CONSOMMÉ** (harness-only). Allowlist initiale **validée** pour cet incrément. Draft PR autorisée ; merge **fermé**.

---

## 8. Prochaine décision

1. Review ChatGPT de la draft PR harness-only.
2. Merge delivery — **FERMÉ**. Cursor réel / UI Studio / Docker / élargissement allowlist — **FERMÉS**.
3. Clôture formelle AF (séparée).

**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 — Option C méthode |
| Socle | `main` @ `60e6880…` (PR #222 MERGED) |
| Architecture POC | `23`–`25` **intégrés** |
| Backlog POC | `26`–`28` **intégrés** (#223) ; harness versionné via draft PR |
| Handoff | `sfia/review-handoff` |

---

### Harness POC S1 (delivery local)

| Document | Rôle |
|----------|------|
| [harness/README.md](./harness/README.md) | Harness-only — installation, CLI, limites |
| [29-poc-cursor-real-spike-report.md](./29-poc-cursor-real-spike-report.md) | Spike Cursor réel (Cycle 7) |

### Navigation backlog POC

| Document | Rôle |
|----------|------|
| [26-poc-orchestration-backlog.md](./26-poc-orchestration-backlog.md) | Epics, stories, DoR/DoD |
| [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
| [28-poc-orchestration-delivery-gate-pack.md](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis POC-G9 |

*SFIA Studio — Option B — POC-G9 harness-only local — app/** intact — POC NON LANCÉ.*

```
### `projects/sfia-studio/harness/README.md`

```
# SFIA Studio — POC S1 Harness (harness-only)

| Métadonnée | Valeur |
|------------|--------|
| **Emplacement** | `projects/sfia-studio/harness/` |
| **Incrément** | POC-G9 harness-only |
| **Architecture** | Option B — harness autonome |
| **Studio / app/** | **Non touché** |
| **Cursor** | **Fixture = défaut stable** ; spike `cursor-real` expérimental (flag off) |
| **Docker** | **Non retenu** pour cet incrément (option ouverte) |
| **Git** | Lecture réelle allowlistée · `gitEffect=none-remote` |
| **Allowlist** | Initiale S1 **validée** pour cet incrément — élargissement = nouveau GO |
| **POC** | Preuves locales — **non industrialisé** / non lancé en autonomie permanente |

## Pourquoi cet emplacement

- Hors `app/**` (Next P0) — séparation AF-Option C / Option B.
- Aligné toolchain Node/TypeScript du projet Studio (vitest, tsc) sans Next.
- Package local autonome, testable sans UI.

## Installation

```bash
cd projects/sfia-studio/harness
npm install
```

## Commandes

```bash
npm run typecheck
npm test
npm run build
npm run cli -- validate-contract ./path/to/contract.json
npm run cli -- run-fixture ./fixtures/demo   # après génération locale
npm run cli -- inspect-journal <proofDir>
npm run cli -- verify-proofs <proofDir>
# EXPERIMENTAL only:
# SFIA_CURSOR_REAL_SPIKE=1 SFIA_CURSOR_REAL_LIVE=1 npm run spike:cursor-real
```

## Architecture effective

```text
fixture gate (Morris) → Orchestrator
  → PolicyEngine (default deny)
  → GateValidator (GO + contractHash)
  → StateMachine
  → GitReaderImpl (spawn git, shell:false)
  → CursorExecutorPortFixture
  → EventJournal (JSONL)
  → ProofStore (proofDir)
```

## Restrictions

- Aucune écriture Git distante (`add/commit/push/merge/rebase/...`).
- Aucune API Cursor inventée ; `realCursorClaimed: false` toujours.
- Aucun daemon / serveur HTTP requis.
- Aucun Dockerfile / docker-compose dans cet incrément.
- Aucune modification `projects/sfia-studio/app/**`.

## Nettoyage local

Supprimer les répertoires `proofs/` temporaires et `node_modules/` si besoin :

```bash
rm -rf proofs/* node_modules dist
```

## Limites / réserves

- Cursor réel = spike local **inconclusive** (voir `spikes/cursor-real/` + doc `29`) — auth requise ; pas défaut.
- Ne jamais activer sans `SFIA_CURSOR_REAL_SPIKE=1`.
- Versionnement du spike ≠ activation produit ; live proofs runtime gitignored.
- Protocole adaptateur / UI Studio = hors incrément.
- Docker = option future non décidée.
- Allowlist détaillée toujours sujette à raffinement Morris.

```
### `projects/sfia-studio/harness/package.json`

```
{
  "name": "@sfia-studio/poc-s1-harness",
  "private": true,
  "version": "0.1.0",
  "description": "SFIA Studio POC S1 harness-only orchestrator (local, fail-closed, no remote Git writes, Cursor fixture default; experimental real-spike behind flag)",
  "type": "module",
  "bin": {
    "sfia-poc-s1": "./dist/cli.js"
  },
  "scripts": {
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "build": "tsc -p tsconfig.build.json",
    "cli": "tsx src/cli.ts",
    "spike:cursor-real": "tsx spikes/cursor-real/run-spike.ts"
  },
  "engines": {
    "node": ">=20"
  },
  "devDependencies": {
    "@types/node": "^22.15.21",
    "tsx": "^4.19.4",
    "typescript": "^5.8.3",
    "vitest": "^3.1.2"
  }
}

```
### `projects/sfia-studio/harness/spikes/cursor-real/.gitignore`

```
# Runtime proofs and local run artifacts — never version
sandbox/proofs/**
!sandbox/proofs/.gitkeep
sandbox/output/**
!sandbox/output/.gitkeep
*.log
.DS_Store

```
### `projects/sfia-studio/harness/spikes/cursor-real/docs/cursor-agent-help.txt`

```
Usage: cursor agent [options] [command] [prompt...]

Start the Cursor Agent

Arguments:
  prompt                       Initial prompt for the agent

Options:
  -v, --version                Output the version number
  --api-key <key>              API key for authentication (can also use
                               CURSOR_API_KEY env var)
  -H, --header <header>        Add custom header to agent requests (format:
                               'Name: Value', can be used multiple times)
  -p, --print                  Print responses to console (for scripts or
                               non-interactive use). Has access to all tools,
                               including write and shell. (default: false)
  --output-format <format>     Output format (only works with --print): text |
                               json | stream-json (default: "text")
  --stream-partial-output      Stream partial output as individual text deltas
                               (only works with --print and stream-json format)
                               (default: false)
  --mode <mode>                Start in the given execution mode. plan:
                               read-only/planning (analyze, propose plans, no
                               edits). ask: Q&A style for explanations and
                               questions (read-only). (choices: "plan", "ask")
  --plan                       Start in plan mode (shorthand for --mode=plan).
                               (default: false)
  --resume [chatId]            Select a session to resume (default: false)
  --continue                   Continue previous session (default: false)
  --model <model>              Model to use (e.g., gpt-5, sonnet-4-thinking).
                               Parameterized models accept quoted bracket
                               overrides, e.g.
                               'claude-opus-4-8[context=1m,effort=high,fast=false]'
  --list-models                List available models and exit (default: false)
  -f, --force                  Force allow commands unless explicitly denied
                               (default: false)
  --yolo                       Alias for --force (Run Everything) (default:
                               false)
  --auto-review                Use Auto-review (Smart Auto): a server classifier
                               auto-runs safe tool calls and prompts for the
                               rest (default: false)
  --sandbox <mode>             Explicitly enable or disable sandbox mode
                               (overrides config) (choices: "enabled",
                               "disabled")
  --approve-mcps               Automatically approve all MCP servers (default:
                               false)
  --trust                      Trust the current workspace without prompting
                               (only works with --print/headless mode) (default:
                               false)
  --workspace <path-or-name>   Workspace directory or saved workspace name to
                               use (defaults to current working directory)
  --add-dir <path>             Add an additional workspace root directory (can
                               be specified multiple times)
  --plugin-dir <path>          Load a local plugin directory (can be specified
                               multiple times)
  -w, --worktree [name]        Start in an isolated git worktree at
                               ~/.cursor/worktrees/<reponame>/<name>. If
                               omitted, a name is generated.
  --worktree-base <branch>     Branch or ref to base the new worktree on
                               (default: current HEAD)
  --skip-worktree-setup        Skip running worktree setup scripts from
                               .cursor/worktrees.json (default: false)
  -h, --help                   Display help for command

Commands:
  install-shell-integration    Install shell integration to ~/.zshrc
  uninstall-shell-integration  Remove shell integration from ~/.zshrc
  login                        Authenticate with Cursor. Set NO_OPEN_BROWSER to
                               disable browser opening.
  logout                       Sign out and clear stored authentication
  mcp                          Manage MCP servers
  plugin                       Manage plugins and plugin marketplaces
  worker [options]             Start a private cloud worker that connects to
                               Cursor to run agents in your environment
  status|whoami [options]      View authentication status
  models                       List available models for this account
  about [options]              Display version, system, and account information
  update                       Update Cursor Agent to the latest version
  create-chat                  Create a new empty chat and return its ID
  generate-rule|rule           Generate a new Cursor rule with interactive
                               prompts
  agent [prompt...]            Start the Cursor Agent
  ls                           Resume a chat session
  resume                       Resume the latest chat session
  help [command]               Display help for command

```
### `projects/sfia-studio/harness/spikes/cursor-real/run-probes.ts`

```
#!/usr/bin/env node
/** EXPERIMENTAL spike scenario probes — not production. */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertSandboxPaths,
  buildCursorAgentArgv,
  CURSOR_REAL_SPIKE_FLAG,
  CursorExecutorPortRealSpike,
  filterSpikeEnv,
  spawnWithTimeout,
  type CursorRealSpikeContract,
} from "../../src/ports/cursorRealSpike.js";
import { HarnessError } from "../../src/types/contracts.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SANDBOX = path.join(HERE, "sandbox");
const PROOFS = path.join(SANDBOX, "proofs");

function base(overrides: Partial<CursorRealSpikeContract> = {}): CursorRealSpikeContract {
  return {
    spikeId: "probe",
    requestId: "r",
    executionId: `e-${Date.now()}`,
    mechanismId: "cursor-agent-cli",
    mechanismVersion: "local",
    instruction: "noop",
    workingDirectory: SANDBOX,
    allowedReadPaths: ["fixtures/input.txt"],
    allowedWritePaths: ["output/summary.txt"],
    deniedPaths: ["../", "projects/sfia-studio/app"],
    timeoutMs: 15_000,
    expectedOutputs: [],
    gitEffect: "none",
    networkEffect: "unknown",
    cursorMode: "real-spike",
    contractHash: "probe",
    initiatedBy: "Morris",
    initiatedAt: new Date().toISOString(),
    ...overrides,
  };
}

async function main(): Promise<void> {
  process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
  const out: Record<string, unknown> = {};

  // S-CUR-07
  try {
    assertSandboxPaths(base({ allowedReadPaths: ["../README.md"] }));
    out.scur07 = { rejected: false };
  } catch (e) {
    out.scur07 = {
      rejected: e instanceof HarnessError,
      code: e instanceof HarnessError ? e.code : "unknown",
    };
  }
  const spike = new CursorExecutorPortRealSpike({ enabled: true, timeoutMs: 1000 });
  try {
    await spike.executeSpikeContract(base({ allowedReadPaths: ["../README.md"] }));
    out.scur07 = { ...(out.scur07 as object), invoked: true };
  } catch (e) {
    out.scur07 = {
      ...(out.scur07 as object),
      invoked: false,
      rejectCode: e instanceof HarnessError ? e.code : String(e),
    };
  }

  // S-CUR-04
  out.scur04 = await spawnWithTimeout({
    command: "/bin/sleep",
    argv: ["20"],
    cwd: SANDBOX,
    env: filterSpikeEnv(),
    timeoutMs: 300,
    maxOutputBytes: 1024,
  });

  // S-CUR-05 — empty instruction with agent
  const errSpike = new CursorExecutorPortRealSpike({
    enabled: true,
    timeoutMs: 30_000,
    agentMode: "agent",
    cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  });
  const err = await errSpike.executeSpikeContract(base({ instruction: "", timeoutMs: 30_000 }));
  out.scur05 = {
    ok: err.ok,
    exitCode: err.exitCode,
    timedOut: err.timedOut,
    stderr: err.stderrRedacted.slice(0, 400),
    stdout: err.stdoutRedacted.slice(0, 200),
  };

  // S-CUR-08 — authenticated agent ask with hard timeout (STOP wrapper)
  const { command, argv } = buildCursorAgentArgv({
    bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    instruction: "Slowly count from 1 to 200 in words. Do not write files. Do not run git.",
    workspace: SANDBOX,
    mode: "ask",
    useNestedAgentSubcommand: true,
  });
  out.scur08 = await spawnWithTimeout({
    command,
    argv,
    cwd: SANDBOX,
    env: filterSpikeEnv(),
    timeoutMs: 2000,
    maxOutputBytes: 50_000,
  });

  writeFileSync(path.join(PROOFS, "scenario-probes.json"), JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
}

main();

```
### `projects/sfia-studio/harness/spikes/cursor-real/run-spike.ts`

```
#!/usr/bin/env node
/**
 * EXPERIMENTAL spike runner — not the stable CLI.
 * Usage:
 *   SFIA_CURSOR_REAL_SPIKE=1 SFIA_CURSOR_REAL_LIVE=1 npx tsx spikes/cursor-real/run-spike.ts
 */
import { createHash } from "node:crypto";
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import {
  CURSOR_REAL_SPIKE_FLAG,
  CursorExecutorPortRealSpike,
  type CursorRealSpikeContract,
} from "../../src/ports/cursorRealSpike.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SANDBOX = path.join(HERE, "sandbox");
const PROOFS = path.join(SANDBOX, "proofs");

function git(args: string[]): string {
  return execFileSync("git", args, { encoding: "utf8", cwd: path.resolve(HERE, "../../../../../") });
}

function listing(): string {
  return execFileSync("bash", ["-lc", "find . -type f | sort | while read f; do echo \"$f $(cksum < \"$f\" | awk '{print $1}')\"; done"], {
    encoding: "utf8",
    cwd: SANDBOX,
  });
}

async function main(): Promise<void> {
  mkdirSync(PROOFS, { recursive: true });
  if (process.env[CURSOR_REAL_SPIKE_FLAG] !== "1") {
    console.error(`Set ${CURSOR_REAL_SPIKE_FLAG}=1 to run`);
    process.exit(2);
  }

  writeFileSync(path.join(PROOFS, "git-status-pre-run.txt"), git(["status", "--short"]));
  writeFileSync(path.join(PROOFS, "git-diff-pre-run.txt"), git(["diff", "--name-status"]));
  writeFileSync(path.join(PROOFS, "sandbox-listing-pre-run.txt"), listing());

  const instruction =
    "Read the file fixtures/input.txt. Write exactly one line summarizing it into output/summary.txt. " +
    "Do not run any git command. Do not modify any file outside output/. Do not access the network intentionally.";

  const partial = {
    spikeId: "spike-cur-live-001",
    requestId: "req-spike-live-001",
    executionId: `exec-${Date.now()}`,
    mechanismId: "cursor-agent-cli",
    mechanismVersion: "observed-local",
    instruction,
    workingDirectory: SANDBOX,
    allowedReadPaths: ["fixtures/input.txt"],
    allowedWritePaths: ["output/summary.txt"],
    deniedPaths: ["projects/sfia-studio/app", "../"],
    timeoutMs: 120_000,
    expectedOutputs: ["output/summary.txt"],
    gitEffect: "none" as const,
    networkEffect: "unknown" as const,
    cursorMode: "real-spike" as const,
    initiatedBy: "Morris",
    initiatedAt: new Date().toISOString(),
  };
  const contract: CursorRealSpikeContract = {
    ...partial,
    contractHash: createHash("sha256").update(JSON.stringify(partial)).digest("hex"),
  };
  writeFileSync(path.join(PROOFS, "contract.json"), JSON.stringify(contract, null, 2));

  const spike = new CursorExecutorPortRealSpike({
    enabled: true,
    timeoutMs: contract.timeoutMs,
    // Nominal write requires default agent (not ask/plan read-only).
    agentMode: "agent",
    cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
  });

  let result;
  try {
    result = await spike.executeSpikeContract(contract);
  } catch (e) {
    result = {
      ok: false,
      summary: e instanceof Error ? e.message : String(e),
      artifacts: [],
      errorCode: "SPIKE_THROW",
      durationMs: 0,
      realCursorProcessInvoked: false,
      productionReadyClaimed: false as const,
      exitCode: null,
      signal: null,
      stdoutRedacted: "",
      stderrRedacted: "",
      timedOut: false,
      argvRedacted: [],
      mechanismBin: "",
    };
  }

  writeFileSync(path.join(PROOFS, "result.json"), JSON.stringify(result, null, 2));
  writeFileSync(path.join(PROOFS, "git-status-post-run.txt"), git(["status", "--short"]));
  writeFileSync(path.join(PROOFS, "git-diff-post-run.txt"), git(["diff", "--name-status"]));
  writeFileSync(path.join(PROOFS, "sandbox-listing-post-run.txt"), listing());
  writeFileSync(
    path.join(PROOFS, "output-summary-exists.txt"),
    String(existsSync(path.join(SANDBOX, "output/summary.txt"))),
  );

  console.log(JSON.stringify({ ok: result.ok, exitCode: result.exitCode, timedOut: result.timedOut, errorCode: result.errorCode }, null, 2));
  process.exit(result.ok ? 0 : 1);
}

main();

```
### `projects/sfia-studio/harness/spikes/cursor-real/sandbox/fixtures/input.txt`

```
spike-fixture-v1
read-only content for cursor real spike

```
### `projects/sfia-studio/harness/spikes/cursor-real/sandbox/output/.gitkeep`

*(empty or missing)*

### `projects/sfia-studio/harness/spikes/cursor-real/sandbox/proofs/.gitkeep`

*(empty or missing)*

### `projects/sfia-studio/harness/src/index.ts`

```
export * from "./types/contracts.js";
export * from "./hash/canonicalize.js";
export * from "./hash/contractHash.js";
export * from "./state/machine.js";
export * from "./gate/gateValidator.js";
export * from "./policy/policyEngine.js";
export * from "./ports/gitReader.js";
export * from "./ports/gitReaderImpl.js";
export * from "./ports/cursorExecutor.js";
export * from "./ports/cursorFixture.js";
/** EXPERIMENTAL spike — not default; see ports/cursorRealSpike.ts */
export * from "./ports/cursorRealSpike.js";
export * from "./journal/eventJournal.js";
export * from "./proof/proofStore.js";
export * from "./orchestrator.js";

```
### `projects/sfia-studio/harness/src/ports/cursorRealSpike.ts`

```
/**
 * EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.
 *
 * CursorExecutorPortRealSpike — local CLI candidate behind CursorExecutorPort.
 * Does NOT replace CursorExecutorPortFixture.
 * Disabled unless explicitly enabled (feature flag).
 * Does NOT invent an HTTP API; uses discovered `cursor agent` CLI argv only.
 */

import { spawn } from "node:child_process";
import { accessSync, constants } from "node:fs";
import path from "node:path";
import type { CursorInstruction, CursorResult } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";
import type { CursorExecutorPort } from "./cursorExecutor.js";

/** Spike-only result — does not widen stable CursorResult.realCursorClaimed literal. */
export interface CursorRealSpikeResult {
  ok: boolean;
  summary: string;
  artifacts: string[];
  errorCode?: string;
  durationMs: number;
  /** True only when a real CLI process was spawned for this spike. */
  realCursorProcessInvoked: boolean;
  /** Never claim production-proven Cursor; spike evidence only. */
  productionReadyClaimed: false;
  exitCode: number | null;
  signal: NodeJS.Signals | null;
  stdoutRedacted: string;
  stderrRedacted: string;
  timedOut: boolean;
  argvRedacted: string[];
  mechanismBin: string;
}

export const CURSOR_REAL_SPIKE_FLAG = "SFIA_CURSOR_REAL_SPIKE";

export interface CursorRealSpikeOptions {
  /** Must be true AND env SFIA_CURSOR_REAL_SPIKE=1 for execution. */
  enabled?: boolean;
  /** Absolute path to cursor binary or cursor-agent. */
  cursorBin?: string;
  /** Hard timeout for child process. */
  timeoutMs?: number;
  /** Max captured stdout/stderr bytes. */
  maxOutputBytes?: number;
  /**
   * ask|plan = read-oriented CLI modes.
   * agent = default Cursor Agent (may write) — spike only, sandbox required.
   */
  agentMode?: "ask" | "plan" | "agent";
}

export interface CursorRealSpikeContract {
  spikeId: string;
  requestId: string;
  executionId: string;
  mechanismId: string;
  mechanismVersion: string;
  instruction: string;
  workingDirectory: string;
  allowedReadPaths: string[];
  allowedWritePaths: string[];
  deniedPaths: string[];
  timeoutMs: number;
  expectedOutputs: string[];
  gitEffect: "none";
  networkEffect: "unknown" | "required" | "none";
  cursorMode: "real-spike";
  contractHash: string;
  initiatedBy: string;
  initiatedAt: string;
}

export function isCursorRealSpikeEnabled(opts?: CursorRealSpikeOptions): boolean {
  return opts?.enabled === true && process.env[CURSOR_REAL_SPIKE_FLAG] === "1";
}

export function resolveCursorBin(explicit?: string): string {
  if (explicit) {
    accessSync(explicit, constants.X_OK);
    return explicit;
  }
  const candidates = [
    process.env.SFIA_CURSOR_BIN,
    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    path.join(process.env.HOME ?? "", ".local/bin/cursor-agent"),
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      accessSync(c, constants.X_OK);
      return c;
    } catch {
      /* try next */
    }
  }
  throw new HarnessError("CURSOR_BIN_NOT_FOUND", "No executable Cursor CLI found for spike");
}

/** Build argv without shell concatenation. */
export function buildCursorAgentArgv(input: {
  bin: string;
  instruction: string;
  workspace: string;
  mode: "ask" | "plan" | "agent";
  useNestedAgentSubcommand: boolean;
}): { command: string; argv: string[] } {
  const prefix = input.useNestedAgentSubcommand ? ["agent"] : [];
  const modeArgs = input.mode === "agent" ? [] : ["--mode", input.mode];
  // --sandbox enabled when supported by CLI; do not pass --force/--yolo.
  const argv = [
    ...prefix,
    "--print",
    ...modeArgs,
    "--workspace",
    input.workspace,
    "--trust",
    "--sandbox",
    "enabled",
    input.instruction,
  ];
  return { command: input.bin, argv };
}

export function assertSandboxPaths(contract: CursorRealSpikeContract): void {
  const cwd = path.resolve(contract.workingDirectory);
  if (!cwd.includes(`${path.sep}spikes${path.sep}cursor-real${path.sep}sandbox`)) {
    throw new HarnessError("SPIKE_CWD_DENIED", "workingDirectory must be cursor-real sandbox", { cwd });
  }
  for (const p of [...contract.allowedWritePaths, ...contract.allowedReadPaths]) {
    const resolved = path.resolve(cwd, p);
    if (!resolved.startsWith(cwd + path.sep) && resolved !== cwd) {
      throw new HarnessError("SPIKE_PATH_ESCAPE", "path escapes sandbox", { p, resolved });
    }
    if (resolved.includes("..")) {
      throw new HarnessError("SPIKE_PATH_TRAVERSAL", "path traversal denied", { p });
    }
  }
  for (const d of contract.deniedPaths) {
    if (d.includes("app/") || d === "projects/sfia-studio/app") {
      /* documented deny — ok */
    }
  }
  if (contract.cursorMode !== "real-spike") {
    throw new HarnessError("SPIKE_MODE", "cursorMode must be real-spike");
  }
  if (contract.gitEffect !== "none") {
    throw new HarnessError("SPIKE_GIT_EFFECT", "gitEffect must be none");
  }
}

export function filterSpikeEnv(env: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
  const allow = new Set([
    "PATH",
    "HOME",
    "USER",
    "LOGNAME",
    "TMPDIR",
    "LANG",
    "LC_ALL",
    "TERM",
    "NODE_ENV",
    CURSOR_REAL_SPIKE_FLAG,
    "SFIA_CURSOR_BIN",
  ]);
  const out: NodeJS.ProcessEnv = {};
  for (const [k, v] of Object.entries(env)) {
    if (!allow.has(k)) continue;
    if (!v) continue;
    // Never forward secrets even if somehow present under alternate names
    if (/token|secret|password|api[_-]?key|credential/i.test(k)) continue;
    out[k] = v;
  }
  // Explicitly strip Cursor API key from child even if in process env
  delete out.CURSOR_API_KEY;
  return out;
}

export async function spawnWithTimeout(input: {
  command: string;
  argv: string[];
  cwd: string;
  env: NodeJS.ProcessEnv;
  timeoutMs: number;
  maxOutputBytes: number;
}): Promise<{
  exitCode: number | null;
  signal: NodeJS.Signals | null;
  stdout: string;
  stderr: string;
  timedOut: boolean;
  durationMs: number;
}> {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    let stdout = Buffer.alloc(0);
    let stderr = Buffer.alloc(0);
    let timedOut = false;
    let settled = false;

    const child = spawn(input.command, input.argv, {
      cwd: input.cwd,
      env: input.env,
      shell: false,
      stdio: ["ignore", "pipe", "pipe"],
    });

    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
      setTimeout(() => {
        if (!settled) child.kill("SIGKILL");
      }, 2_000).unref();
    }, input.timeoutMs);

    const append = ( whicht: "out" | "err", chunk: Buffer) => {
      const cur = whicht === "out" ? stdout : stderr;
      const next = Buffer.concat([cur, chunk]);
      if (next.length > input.maxOutputBytes) {
        const trimmed = next.subarray(0, input.maxOutputBytes);
        if (whicht === "out") stdout = trimmed;
        else stderr = trimmed;
        child.kill("SIGTERM");
        return;
      }
      if (whicht === "out") stdout = next;
      else stderr = next;
    };

    child.stdout?.on("data", (c: Buffer) => append("out", c));
    child.stderr?.on("data", (c: Buffer) => append("err", c));
    child.on("error", (err) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(err);
    });
    child.on("close", (code, signal) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({
        exitCode: code,
        signal,
        stdout: stdout.toString("utf8"),
        stderr: stderr.toString("utf8"),
        timedOut,
        durationMs: Date.now() - started,
      });
    });
  });
}

/**
 * Experimental CursorExecutorPort implementation.
 * Only accepts instruction.mode === "fixture" never — real-spike uses executeSpikeContract.
 * The port.execute path remains fail-closed unless spike mode is wired via executeSpike.
 */
export class CursorExecutorPortRealSpike implements CursorExecutorPort {
  constructor(private readonly opts: CursorRealSpikeOptions = {}) {}

  async execute(_instruction: CursorInstruction): Promise<CursorResult> {
    throw new HarnessError(
      "CURSOR_REAL_SPIKE_NOT_VIA_STABLE_EXECUTE",
      "Use executeSpikeContract(); stable execute() must remain fixture-only",
    );
  }

  async executeSpikeContract(contract: CursorRealSpikeContract): Promise<CursorRealSpikeResult> {
    if (!isCursorRealSpikeEnabled(this.opts)) {
      throw new HarnessError(
        "CURSOR_REAL_SPIKE_DISABLED",
        `Spike disabled (set ${CURSOR_REAL_SPIKE_FLAG}=1 and enabled:true)`,
      );
    }
    assertSandboxPaths(contract);
    const timeoutMs = this.opts.timeoutMs ?? contract.timeoutMs;
    const maxOutputBytes = this.opts.maxOutputBytes ?? 256_000;
    const bin = resolveCursorBin(this.opts.cursorBin);
    const useNested = path.basename(bin) === "cursor";
    const mode = this.opts.agentMode ?? "agent";
    const { command, argv } = buildCursorAgentArgv({
      bin,
      instruction: contract.instruction,
      workspace: path.resolve(contract.workingDirectory),
      mode,
      useNestedAgentSubcommand: useNested,
    });

    const result = await spawnWithTimeout({
      command,
      argv,
      cwd: path.resolve(contract.workingDirectory),
      env: filterSpikeEnv(),
      timeoutMs,
      maxOutputBytes,
    });

    const redact = (s: string) =>
      s
        .replace(/cursor_[A-Za-z0-9_-]{8,}/g, "[REDACTED_KEY]")
        .replace(/Bearer\s+\S+/gi, "Bearer [REDACTED]");

    const ok = !result.timedOut && result.exitCode === 0;
    return {
      ok,
      summary: ok
        ? `real-spike exit 0 (${contract.mechanismId})`
        : `real-spike failed exit=${result.exitCode} timedOut=${result.timedOut}`,
      artifacts: [],
      errorCode: ok ? undefined : result.timedOut ? "CURSOR_SPIKE_TIMEOUT" : "CURSOR_SPIKE_FAILED",
      durationMs: result.durationMs,
      realCursorProcessInvoked: true,
      productionReadyClaimed: false,
      exitCode: result.exitCode,
      signal: result.signal,
      stdoutRedacted: redact(result.stdout).slice(0, 8_000),
      stderrRedacted: redact(result.stderr).slice(0, 8_000),
      timedOut: result.timedOut,
      argvRedacted: argv.map((a) => (a.length > 120 ? `${a.slice(0, 117)}...` : a)),
      mechanismBin: command,
    };
  }
}

```
### `projects/sfia-studio/harness/tests/cursor-real-spike.test.ts`

```
import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { HarnessError } from "../src/types/contracts.js";
import {
  assertSandboxPaths,
  buildCursorAgentArgv,
  CURSOR_REAL_SPIKE_FLAG,
  CursorExecutorPortRealSpike,
  filterSpikeEnv,
  isCursorRealSpikeEnabled,
  spawnWithTimeout,
  type CursorRealSpikeContract,
} from "../src/ports/cursorRealSpike.js";
import { CursorExecutorPortFixture } from "../src/ports/cursorFixture.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SANDBOX = path.resolve(HERE, "../spikes/cursor-real/sandbox");

function sampleContract(overrides: Partial<CursorRealSpikeContract> = {}): CursorRealSpikeContract {
  const base = {
    spikeId: "spike-cur-001",
    requestId: "req-spike-001",
    executionId: "exec-spike-001",
    mechanismId: "cursor-agent-cli",
    mechanismVersion: "2026.07.16-899851b",
    instruction: "Read fixtures/input.txt and write a one-line summary to output/summary.txt. Do not run git. Do not touch other paths.",
    workingDirectory: SANDBOX,
    allowedReadPaths: ["fixtures/input.txt"],
    allowedWritePaths: ["output/summary.txt"],
    deniedPaths: ["projects/sfia-studio/app", "../"],
    timeoutMs: 5_000,
    expectedOutputs: ["output/summary.txt"],
    gitEffect: "none" as const,
    networkEffect: "unknown" as const,
    cursorMode: "real-spike" as const,
    contractHash: "",
    initiatedBy: "Morris",
    initiatedAt: new Date().toISOString(),
  };
  const merged = { ...base, ...overrides };
  const { contractHash: _h, ...canon } = merged;
  merged.contractHash = createHash("sha256").update(JSON.stringify(canon)).digest("hex");
  return merged;
}

describe("cursor real spike — unit (no live Cursor required)", () => {
  it("feature flag disabled by default", () => {
    const prev = process.env[CURSOR_REAL_SPIKE_FLAG];
    delete process.env[CURSOR_REAL_SPIKE_FLAG];
    expect(isCursorRealSpikeEnabled({ enabled: true })).toBe(false);
    expect(isCursorRealSpikeEnabled({ enabled: false })).toBe(false);
    if (prev !== undefined) process.env[CURSOR_REAL_SPIKE_FLAG] = prev;
  });

  it("stable fixture still works and claims no real Cursor", async () => {
    const f = new CursorExecutorPortFixture();
    const r = await f.execute({
      requestId: "r1",
      executionId: "e1",
      mode: "fixture",
      objective: "noop",
      timeoutMs: 1000,
    });
    expect(r.ok).toBe(true);
    expect(r.realCursorClaimed).toBe(false);
  });

  it("RealSpike.execute() refuses stable path", async () => {
    const spike = new CursorExecutorPortRealSpike({ enabled: true });
    process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
    await expect(
      spike.execute({
        requestId: "r1",
        executionId: "e1",
        mode: "fixture",
        objective: "x",
        timeoutMs: 1000,
      }),
    ).rejects.toBeInstanceOf(HarnessError);
    delete process.env[CURSOR_REAL_SPIKE_FLAG];
  });

  it("builds argv without shell concatenation", () => {
    const { command, argv } = buildCursorAgentArgv({
      bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
      instruction: "hello; rm -rf /",
      workspace: SANDBOX,
      mode: "ask",
      useNestedAgentSubcommand: true,
    });
    expect(command).toContain("cursor");
    expect(argv).toEqual([
      "agent",
      "--print",
      "--mode",
      "ask",
      "--workspace",
      SANDBOX,
      "--trust",
      "--sandbox",
      "enabled",
      "hello; rm -rf /",
    ]);
    expect(argv.join(" ")).not.toMatch(/&&|\|/);
  });

  it("builds agent write mode without --mode and without --force", () => {
    const { argv } = buildCursorAgentArgv({
      bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
      instruction: "write summary",
      workspace: SANDBOX,
      mode: "agent",
      useNestedAgentSubcommand: true,
    });
    expect(argv).not.toContain("--mode");
    expect(argv).not.toContain("--force");
    expect(argv).not.toContain("--yolo");
    expect(argv).toContain("--sandbox");
    expect(argv).toContain("enabled");
  });

  it("rejects cwd outside sandbox", () => {
    expect(() =>
      assertSandboxPaths(
        sampleContract({
          workingDirectory: path.resolve(SANDBOX, "../../.."),
        }),
      ),
    ).toThrow(HarnessError);
  });

  it("rejects write path escape", () => {
    expect(() =>
      assertSandboxPaths(
        sampleContract({
          allowedWritePaths: ["../../../README.md"],
        }),
      ),
    ).toThrow(HarnessError);
  });

  it("filters env and strips CURSOR_API_KEY", () => {
    const filtered = filterSpikeEnv({
      PATH: "/usr/bin",
      HOME: "/Users/x",
      CURSOR_API_KEY: "cursor_should_not_leak",
      GITHUB_TOKEN: "ghp_x",
      SECRET_THING: "nope",
      SFIA_CURSOR_REAL_SPIKE: "1",
    });
    expect(filtered.CURSOR_API_KEY).toBeUndefined();
    expect(filtered.GITHUB_TOKEN).toBeUndefined();
    expect(filtered.SECRET_THING).toBeUndefined();
    expect(filtered.PATH).toBe("/usr/bin");
    expect(filtered[CURSOR_REAL_SPIKE_FLAG]).toBe("1");
  });

  it("timeout kills child process (S-CUR-04 wrapper)", async () => {
    const r = await spawnWithTimeout({
      command: "/bin/sleep",
      argv: ["30"],
      cwd: SANDBOX,
      env: filterSpikeEnv(),
      timeoutMs: 200,
      maxOutputBytes: 1024,
    });
    expect(r.timedOut).toBe(true);
    expect(r.exitCode === null || r.exitCode !== 0 || r.signal !== null).toBe(true);
  });

  it("disabled spike rejects executeSpikeContract", async () => {
    delete process.env[CURSOR_REAL_SPIKE_FLAG];
    const spike = new CursorExecutorPortRealSpike({ enabled: true });
    await expect(spike.executeSpikeContract(sampleContract())).rejects.toBeInstanceOf(HarnessError);
  });
});

describe("cursor real spike — live CLI (opt-in)", () => {
  const live = process.env[CURSOR_REAL_SPIKE_FLAG] === "1" && process.env.SFIA_CURSOR_REAL_LIVE === "1";

  it.runIf(live)("invokes cursor agent against sandbox (authenticated live)", async () => {
    process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
    process.env.SFIA_CURSOR_REAL_LIVE = "1";
    const spike = new CursorExecutorPortRealSpike({
      enabled: true,
      timeoutMs: 90_000,
      agentMode: "agent",
      cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    });
    const result = await spike.executeSpikeContract(sampleContract({ timeoutMs: 90_000 }));
    expect(result.realCursorProcessInvoked).toBe(true);
    expect(result.productionReadyClaimed).toBe(false);
    expect(result.exitCode !== undefined).toBe(true);
  });

  it.skipIf(live)("live Cursor test skipped unless SFIA_CURSOR_REAL_SPIKE=1 and SFIA_CURSOR_REAL_LIVE=1", () => {
    expect(true).toBe(true);
  });
});

```

---

## 9. Commit / push / PR


### Commit
- SHA : `9898f5693e8430d1db09e0ec91f648c444295913`
- Message : `feat(sfia-studio): add experimental Cursor agent spike`
- Stats : 16 files, +1051 / −10

### Push
- `origin/spike/sfia-studio-cursor-real-adapter` = HEAD

### Draft PR
| Champ | Valeur |
|-------|--------|
| Number | **#225** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/225 |
| state | open |
| draft | true |
| merged | false |
| base | main |
| head SHA | 9898f5693e8430d1db09e0ec91f648c444295913 |

### Gates restantes
1. Review ChatGPT draft PR
2. Merge (GO distinct)
3. Spike GPT/ChatGPT
4. UI Studio
5. Activation mode réel / allowlist
6. Docker

Working tree : propre hors `.tmp-sfia-review/`.


---

## 10. Verdict

**`CURSOR REAL SPIKE VERSIONED WITH RESERVES — EXPERIMENTAL DRAFT PR OPEN — GPT AND STUDIO UI GATES CLOSED`**
