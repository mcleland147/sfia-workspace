# ChatGPT Review Pack — SFIA Studio Cycle 7 Cursor Real Auth Reprise Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 18:05:35 CEST (Europe/Paris) |
| **Cycle** | 7 — Intégration / DevOps — reprise auth |
| **Profil** | Critical |
| **Décision Morris** | Auth locale Cursor Agent + rejeu spike sandbox |
| **Branche** | `spike/sfia-studio-cursor-real-adapter` |
| **HEAD / origin/main** | `1c44bc01ff115216d515dfdd9bde5d7eaccfa966` |
| **PR #224** | MERGED |
| **Handoff précédent** | `6c68825` (spike inconclusive / auth missing) |
| **Niveau** | **full** |
| **Commit/push/PR** | **NON AUTORISÉS** |

---

## 1. Truth Check

**PASS**

```
 M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
 M projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
 M projects/sfia-studio/README.md
 M projects/sfia-studio/harness/README.md
 M projects/sfia-studio/harness/package.json
 M projects/sfia-studio/harness/src/index.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/29-poc-cursor-real-spike-report.md
?? projects/sfia-studio/harness/spikes/
?? projects/sfia-studio/harness/src/ports/cursorRealSpike.ts
?? projects/sfia-studio/harness/tests/cursor-real-spike.test.ts

```

---

## 2. Environnement / agent

| Élément | Valeur |
|---------|--------|
| Cursor app | 3.12.17 |
| cursor-agent | 2026.07.16-899851b |
| Hash symlink target avant | `eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831  /Users/morris/.local/share/cursor-agent/versions/2026.07.16-899851b/cursor-agent` |
| Hash après | `eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831  /Users/morris/.local/share/cursor-agent/versions/2026.07.16-899851b/cursor-agent` |
| Hash delta | **inchangé** |
| Auto-update pendant cycle | **non observé** |

---

## 3. Authentification

| Élément | Valeur |
|---------|--------|
| Avant | authenticated=false (`Not logged in`) |
| Méthode | `cursor agent login` (browser deep link) |
| Après poll | authenticated=false |
| CURSOR_API_KEY_defined | false |
| GITHUB_TOKEN_defined | false |
| GH_TOKEN_defined | false |
| Secret dans preuves/pack | **aucun** |

Login process output (challenge URL redacted):

```
Starting login process...
Authenticating with Cursor...
Waiting for browser authentication...
If your browser didn't open, use this link:
https://cursor.com/loginDeepControl?[REDACTED_CHALLENGE]

```

**S-CUR-02…08 :** non exécutés — prérequis auth non satisfait.

---

## 4. Absences

- app/** : none in diff targeting app
- Docker : none
- Git remote effect : none
- staged/commit/push/PR spike : none

---

## 5. Contenu rapport 29 (complet)

```markdown
# SFIA Studio — Rapport spike Cursor réel (Cycle 7)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `29-poc-cursor-real-spike-report.md` |
| **Horodatage** | 2026-07-19 17:47 CEST (Europe/Paris) |
| **Cycle** | 7 — Intégration / DevOps |
| **Profil** | Critical |
| **Branche** | `spike/sfia-studio-cursor-real-adapter` (**locale**) |
| **Base** | `main` @ `1c44bc01ff115216d515dfdd9bde5d7eaccfa966` (#224) |
| **Décision Morris** | Autorisation spike transmission réelle bornée vers Cursor |
| **Commit / push / PR spike** | **NON AUTORISÉS** |

---

## 1. Objectif

Déterminer factuellement si un mécanisme local permet d’invoquer Cursor depuis le harness, avec instruction bornée, cwd, timeout, STOP, preuves filesystem/Git — sans inventer d’API.

---

## 2. Environnement

| Élément | Valeur |
|---------|--------|
| OS | macOS darwin arm64 |
| Node | v24.16.0 |
| Cursor.app | présent `/Applications/Cursor.app` |
| CLI IDE | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` **3.12.17** |
| `cursor` dans PATH | **NON** (`which cursor` = not found) |
| `CURSOR_API_KEY` | **non défini** |
| Auth `cursor agent status` | **Not logged in** |

---

## 3. Découverte (S-CUR-01)

### Commandes exécutées

- `which cursor` / `command -v cursor` → absent PATH
- `cursor --version` via chemin absolu app → 3.12.17
- `cursor --help` → CLI IDE (ouvrir fichiers/fenêtres) — **pas** d’exécution agent headless
- `cursor agent --help` → sous-commande Agent documentée (`--print`, `--mode ask|plan`, `--workspace`, `--sandbox`, `--api-key`, …)
- `npm view @cursor/sdk` → package officiel **1.0.23** (non installé dans ce spike)
- Inspection `bin/` Cursor.app : `cursor`, `cursor-tunnel`, `code`, `code-tunnel`

### Effet de bord découverte (important)

L’invocation de `cursor agent --help` a déclenché un message :

`cursor-agent not found, installing via https://cursor.com/install ...`

Résultat observé :

- symlink `~/.local/bin/cursor-agent` → `~/.local/share/cursor-agent/versions/2026.07.16-899851b/cursor-agent`
- CLI Agent version `2026.07.16-899851b`

Cet install utilisateur n’était **pas** un objectif explicite du cycle. Documenté comme **risque de découverte**. Aucune install globale système (`/usr`). Aucun rollback effectué (hors GO).

---

## 4. Matrice de candidats

| Critère | CLI IDE `cursor` | CLI `cursor agent` / `cursor-agent` | npm `@cursor/sdk` |
|---------|------------------|--------------------------------------|-------------------|
| Interface officielle | OBSERVÉ (help) | OBSERVÉ (help + about) | OBSERVÉ (npm registry / docs skill) |
| Headless | NON DISPONIBLE (ouvre UI) | OBSERVÉ (`--print`) | OBSERVÉ (docs) — **NON PROUVÉ** ici |
| Instruction typée | NON DISPONIBLE | OBSERVÉ (argv prompt) | OBSERVÉ (docs) — NON PROUVÉ |
| cwd / workspace | INCONNU (UI) | OBSERVÉ (`--workspace`) — enforcement agent **NON PROUVÉ** | OBSERVÉ (`local.cwd` docs) |
| Sortie stdout | N/A | PROUVÉ (stderr auth) | NON PROUVÉ |
| Timeout natif CLI | NON DISPONIBLE | NON PROUVÉ | INCONNU |
| Timeout wrapper harness | — | **PROUVÉ** (`spawnWithTimeout` + `/bin/sleep`) | — |
| STOP / kill | — | **PROUVÉ** wrapper SIGTERM | docs `cancel` — NON PROUVÉ |
| Exit code | — | **PROUVÉ** (exit 1 auth) | NON PROUVÉ |
| Allowlist fichiers | NON DISPONIBLE | RISQUÉ (`--print` accès tools write/shell ; mitiger `--mode ask\|plan`) — **NON PROUVÉ** sans run nominal | INCONNU |
| Auth | session UI | **PROUVÉ requis** (login ou `CURSOR_API_KEY`) | **OBSERVÉ requis** (docs) |
| Réseau | probable | **OBSERVÉ** (install + auth message) — non mesuré finement | requis (docs) |
| Docker nécessaire | NON | **NON** pour découverte | NON pour SDK local |
| Aptitude POC immédiat | NON | **Partielle** — auth manquante | Possible mais **dépendance nouvelle** (non retenue ce cycle) |
| Stabilité intégration | N/A | Expérimental CLI ; auto-install | Public beta (docs) |

**Candidat sélectionné pour le spike :** CLI `cursor agent` via binaire app (`…/bin/cursor` + sous-commande `agent`), **sans** ajouter `@cursor/sdk`.

**Statut :** officiel / documenté via `--help` local · **expérimental** pour le harness · **non** production.

---

## 5. Architecture expérimentale

```
Morris GO (ce cycle)
  → runner spike explicite (feature flag)
  → CursorExecutorPortRealSpike (EXPERIMENTAL)
  → spawn(cursor, argv, shell:false, cwd=sandbox)
  → preuves locales sandbox/proofs/

CursorExecutorPortFixture = défaut stable (inchangé)
Orchestrator stable = fixture only (inchangé)
```

Fichier : `harness/src/ports/cursorRealSpike.ts`  
Bannière : `EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.`

Feature flags :

- `SFIA_CURSOR_REAL_SPIKE=1` + `enabled:true` pour autoriser l’adaptateur
- `SFIA_CURSOR_REAL_LIVE=1` pour le test vitest live (sinon skipped)

---

## 6. Contrat expérimental

Champs : `spikeId`, `requestId`, `executionId`, `mechanismId`, `mechanismVersion`, `instruction`, `workingDirectory`, `allowedReadPaths`, `allowedWritePaths`, `deniedPaths`, `timeoutMs`, `expectedOutputs`, `gitEffect=none`, `networkEffect`, `cursorMode=real-spike`, `contractHash`, `initiatedBy`, `initiatedAt`.

`real-spike` **n’est pas** ajouté à l’allowlist stable S1.

---

## 7. Sandbox

`projects/sfia-studio/harness/spikes/cursor-real/sandbox/`

- `fixtures/input.txt` — contenu inoffensif
- `output/` — seul write attendu
- `proofs/` — captures avant/après

Instruction réelle tentée : lire `fixtures/input.txt`, écrire `output/summary.txt`, aucun git, aucun autre path.

---

## 8. Résultats scénarios

| ID | Résultat | Qualification |
|----|----------|---------------|
| S-CUR-01 | Matrice produite | **PROUVÉ** |
| S-CUR-02 | Run lancé, **échec auth**, pas d’output | **NON PROUVÉ** (nominal) |
| S-CUR-03 | `--workspace` dans argv ; rejet paths escape unit | **PARTIEL** — enforcement agent NON PROUVÉ |
| S-CUR-04 | Timeout wrapper tue `/bin/sleep` | **PROUVÉ** (wrapper) ; timeout natif CLI NON PROUVÉ |
| S-CUR-05 | exit 1 + stderr auth | **PROUVÉ** |
| S-CUR-06 | Diff listing avant/après ; pas d’`output/summary.txt` | **PROUVÉ** (pas de write agent) |
| S-CUR-07 | Rejet contrat path escape avant exec | **PROUVÉ** (couche harness) |
| S-CUR-08 | SIGTERM via timeout wrapper | **PROUVÉ** (wrapper) ; STOP CLI natif **NON PROUVÉ** |

### Preuve live (redacted)

```json
{
  "ok": false,
  "exitCode": 1,
  "timedOut": false,
  "realCursorProcessInvoked": true,
  "productionReadyClaimed": false,
  "stderrRedacted": "Error: Authentication required. Please run 'cursor agent login' first, or set CURSOR_API_KEY environment variable."
}
```

---

## 9. Git / filesystem

| Contrôle | Résultat |
|----------|----------|
| `app/**` | **aucun** changement |
| Docker | **aucun** fichier |
| Commit / push / PR | **aucun** |
| Index Git | non modifié (untracked spike seulement) |
| Write hors sandbox par agent | **non observé** (échec avant exécution utile) |

---

## 10. Réseau / authentification

| Élément | Statut |
|---------|--------|
| Authentification requise | **oui** (prouvé) |
| Mécanisme | `cursor agent login` **ou** `CURSOR_API_KEY` |
| Secrets journalisés | **non** (clé absente ; filtre env strip `CURSOR_API_KEY`) |
| Réseau | **observé** (install agent + message auth) — non mesuré (pas de capture intrusive) |
| Confiance mesure réseau | **faible** (pas d’outil dédié) |

---

## 11. Docker

Pas nécessaire pour la découverte CLI locale.  
Isolation filesystem native (sandbox path) **insuffisante à prouver** sans run nominal réussi.  
Docker **non** introduit. **Pas** de Dockerfile.

Recommandation : **ne pas** ouvrir Docker tant qu’un run `ask` authentifié sandbox n’a pas été prouvé nativement.

---

## 12. Tests

| Suite | Résultat |
|-------|----------|
| Stables historiques | **26/26 PASS** |
| Spike unitaires | **10 PASS** |
| Spike live | **1 skipped** par défaut (`SFIA_CURSOR_REAL_LIVE` absent) |
| Total `npm test` | **36 passed \| 1 skipped** |
| typecheck / build | à confirmer dans validations finales |

Fixture **préservée**. Mode réel **désactivé** par défaut.

---

## 13. Limites / dette / risques

1. Auth manquante → nominal S-CUR-02 non démontré.
2. Auto-install `cursor-agent` lors du help — dette environnement utilisateur.
3. Garantie allowlist agent **non prouvée** (tools write/shell possibles hors `--mode ask` strictement validé en run).
4. STOP CLI natif non démontré.
5. `@cursor/sdk` non évalué en exécution (évite dépendance ; reste option future).
6. PATH ne contient pas `cursor` — résolution via chemin absolu app.

---

## 14. Conclusion

Une **interface CLI réelle et documentée localement** (`cursor agent`) existe et a été **invoquée** depuis un adaptateur expérimental fail-closed derrière feature flag, avec cwd sandbox, argv typés, `shell:false`, timeout/STOP wrapper, et capture exit/stderr.

Le **succès fonctionnel borné** (écriture output attendue, contrôle allowlist agent, auth maîtrisée) **n’est pas démontré**.

**Ne pas conclure :** Cursor réel production ready · POC complete · intégration UI.

---

## 15. Recommandation

1. **Ne pas** versionner comme mode défaut.
2. Décision Morris pour **auth spike** : fournir `CURSOR_API_KEY` de test **ou** autoriser `cursor agent login` interactif, puis rejouer S-CUR-02…08.
3. Après run nominal : décider si `@cursor/sdk` apporte plus de contrôle que la CLI.
4. UI Studio / adaptateur Studio : **fermés**.
5. Docker : **fermé** jusqu’à preuve d’insuffisance native.

---

## 16. Décisions Morris restantes

| ID | Sujet |
|----|-------|
| D1 | Fournir auth pour rejouer spike nominal |
| D2 | Autoriser versionnement du code spike (commit/PR) |
| D3 | Élargir allowlist stable à un mode Cursor réel |
| D4 | Évaluer `@cursor/sdk` |
| D5 | UI Studio / adaptateur |
| D6 | Docker |

---

## 17. Verdict

**`CURSOR REAL SPIKE INCONCLUSIVE — INTERFACE FOUND BUT CONTROL INSUFFICIENT — MORRIS DECISION REQUIRED`**

Sous-qualification : contrôle **wrapper** partiellement prouvé ; **invocation CLI réelle** prouvée jusqu’au gate auth ; **exécution agent utile** non prouvée ; **aucune** revendication production.

---

## Reprise authentifiée (Cycle 7 — 2026-07-19 18:05:35 CEST)

| Élément | Valeur |
|---------|--------|
| Auth avant | **Not logged in** |
| Méthode | `cursor agent login` (interactive browser) |
| Auth après poll (~3 min) | **Not logged in** — interaction Morris **non complétée** |
| CURSOR_API_KEY défini | **non** |
| GITHUB_TOKEN / GH_TOKEN | **non** |
| Secrets dans preuves | **aucun** |
| Agent hash (symlink target) | `eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831` |
| Agent version | `2026.07.16-899851b` |
| Hash avant/après | **inchangé** |
| S-CUR-02…08 rejeu | **NON EXÉCUTÉ** (auth bloquée) |
| Commit/push/PR | **non** |

**Verdict reprise :** `CURSOR REAL AUTHENTICATION BLOCKED — MORRIS INTERACTION OR CREDENTIAL DECISION REQUIRED`

Commande à exécuter / compléter par Morris :

```bash
/Applications/Cursor.app/Contents/Resources/app/bin/cursor agent login
/Applications/Cursor.app/Contents/Resources/app/bin/cursor agent status
```

Puis reprendre le cycle (rejeu sandbox). Ne pas coller de clé dans le chat ni le repo.


```

---

## 6. Diff stat

```
 .../sfia-studio/07-product-trajectory-and-decision-pack.md |  2 +-
 .../sfia-studio/28-poc-orchestration-delivery-gate-pack.md | 14 +++++++++++---
 projects/sfia-studio/README.md                             |  5 +++--
 projects/sfia-studio/harness/README.md                     |  7 +++++--
 projects/sfia-studio/harness/package.json                  |  3 ++-
 projects/sfia-studio/harness/src/index.ts                  |  2 ++
 6 files changed, 24 insertions(+), 9 deletions(-)

```

---

## 7. Verdict

**`CURSOR REAL AUTHENTICATION BLOCKED — MORRIS INTERACTION OR CREDENTIAL DECISION REQUIRED`**

Action Morris : compléter `cursor agent login` dans le navigateur, puis demander la reprise du cycle (rejeu S-CUR-02…08). Ne pas coller de clé API dans le chat/repo.
