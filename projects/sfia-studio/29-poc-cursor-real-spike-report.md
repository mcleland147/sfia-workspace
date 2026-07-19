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
