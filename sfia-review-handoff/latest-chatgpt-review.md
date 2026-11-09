# SFIA STUDIO NEXT — ML4
# REVIEW PACK FULL — CYCLE 11 BASCULE G4→ML4 — PRECHECK BLOCKED

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 09:30 CET |
| Processus | SFIA v2.6 |
| Cycle | 11 — DÉPLOIEMENT / RELEASE |
| Profil | CRITICAL |
| Type | BASCULE ENVIRONNEMENT RECETTE |
| Version | 0.0.0-dev / NO RELEASE |
| GO Morris | Arrêt G4 + bascule ML4 **uniquement si préflight PASS** |

## 2. Git Truth

| Item | Attendu | Observé | Match |
|---|---|---|---|
| Local candidate | 974b0030a94469bef05496151792e8c35a9a83e9 | 974b0030a94469bef05496151792e8c35a9a83e9 | OK |
| Tree | 6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357 | 6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357 | OK |
| Parent | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b | OK |
| Remote Product | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b | OK (non poussé) |
| main | c658f59023d44a0e22448c7ee034e3c1dda292a2 | c658f59023d44a0e22448c7ee034e3c1dda292a2 | OK |
| L3 parent entrée | c249858dba1c5d4aea565904815ba25d15b27846 | c249858dba1c5d4aea565904815ba25d15b27846 | OK |
| Worktree build | …-ml4-recette-build-974b0030 | présent @ 974b0030a94469bef05496151792e8c35a9a83e9 | OK |
| BUILD_ID | RzpCuGMK6SnwfucphK7Qa | RzpCuGMK6SnwfucphK7Qa | OK |

Dirty non Product : `.tmp-sfia-review/*` ; `env01-…md` untracked ; qualify script untracked — **aucun commit Product**.

## 3. Sources lues

- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- prompts/templates/sfia-cycle-execution-template.md
- projects/sfia-studio-next/governance/SEF.md, roadmap.md, environnements-recette-et-promotions.md, product-versioning.md, product-naming-conventions.md
- governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md
- architecture-technique/cadrage-r4.md
- construction/integration-git/contrat-acceptation.md, specification-technique.md, matrice-acceptation.md
- construction/delivery-history.md
- ENV-01 local env01-recette-manifest-ml4-974b0030-2026-11-09.md
- L3 handoff c249858d / blob 862522d6

## 4. Préflight bloquant — résultat

### A. OPENAI / NORA — **FAIL / BLOCKING**

| Check | Résultat |
|---|---|
| OPENAI_API_KEY présente non-placeholder | **FAIL** — placeholder / absente |
| STUDIO_E2E | absent (OK) |
| STUDIO_FORCE_NORA_FIXTURE | absent (OK) |
| Contact OpenAI | NON effectué |

**Cause exacte :** variable `OPENAI_API_KEY` manquante ou factice dans le fichier RECETTE hors dépôt.
Sans cette clé, Nora LIVE est impossible hors DEV (pas de fallback fixture RECETTE).
**STOP AVANT ARRÊT G4 — exécuté.**

### B. GitHub App RECETTE — PASS (préflight)

| Check | Résultat |
|---|---|
| STUDIO_LANE | RECETTE |
| App ID / install | 5677465 / 180092114 |
| Owner / repo | mcleland147 / chantiers360 |
| Callback | http://127.0.0.1:3200/api/integrations/github/callback |
| PEM exists/readable/mode | PASS / 0600 |
| Client ID / Secret renseignés | PASS (valeurs non divulguées) |
| Pas App DEV | PASS (≠ 5670639) |
| STUDIO_GITHUB_PROVIDER | real |
| STUDIO_GITHUB_USER_OAUTH | real |
| STUDIO_GITHUB_ALLOW_MUTATIONS | **absente** (OK) |
| OAuth navigateur | NOT RUN |

### C. PostgreSQL — PASS (préflight lecture)

| Check | Résultat |
|---|---|
| DB | 127.0.0.1:5434/sfia_next_recette_ml4 |
| Rôle | sfia_next_recette_ml4 |
| Tables | 33 ; effect_attempts + integration_authorizations + human_decisions présents |
| ml4 → g4 CONNECT | REFUSÉ (permission denied) |
| g4 owner → g4 | OK |
| g4 effect_attempts | absent ; 26 tables (inchangé) |
| ACL | aucune modification ce cycle |

### D. Candidat / build — PASS

SHA/tree/BUILD_ID/artefact `.next` conformes. `package.json` `start` force encore `-p 3100` → bascule future devra lancer `next start -H 127.0.0.1 -p 3200` explicitement.

## 5. G4 — position préservée (aucune action)

| Item | Observé |
|---|---|
| Port | 127.0.0.1:3200 LISTEN |
| PID | 74165 (PPID 74141) |
| Commande parent | npm exec next start -H 127.0.0.1 -p 3200 |
| cwd | …/sfia-workspace-next-g4-recette-build-29535d07/projects/sfia-studio-next/web |
| HEAD | 29535d07e9c14077b422020e25fbf54a98affe25 |
| BUILD_ID | U2HrgAwriuzf6f1YI0rRK |
| DB | sfia_next_recette_g4 |
| Arrêté | **NON** |
| Artefacts/DB | **préservés** |

DEV `:3100` toujours en écoute — non perturbé.

## 6. Bascule

**NON EXÉCUTÉE** — préflight OpenAI BLOCKED.

## 7. Smoke post-bascule

**N/A** — ML4 non servi.

## 8. Compléments diffs delivery précédent (974b0030) — stats non secrets

```
.../src/domains/integrations/github-app-config.ts  | 154 ++++++++++++++++++---
 1 file changed, 132 insertions(+), 22 deletions(-)
.../domains/integrations/github-app-user-oauth.ts  | 35 +++++++++++++++-------
 1 file changed, 25 insertions(+), 10 deletions(-)
.../web/tests/unit/github-app-config.test.ts       | 108 ++++++++++++++++-----
 1 file changed, 86 insertions(+), 22 deletions(-)
.../web/tests/unit/github-app-user-oauth.test.ts   | 33 +++++++++++++++++++++-
 1 file changed, 32 insertions(+), 1 deletion(-)
.../construction/integration-git/matrice-acceptation.md   | 15 +++++++++++++++
 1 file changed, 15 insertions(+)
.../construction/integration-git/specification-technique.md             | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
.../sfia-studio-next/construction/delivery-history.md   | 17 +++++++++++++++++
 1 file changed, 17 insertions(+)
```

Références : commit `974b0030a94469bef05496151792e8c35a9a83e9` ; contenu complet `github-app-config.ts` déjà dans L3 parent `c249858d`.

## 9. Fake/Real §6.16

| Item | Statut |
|---|---|
| Préflight OpenAI | REAL FAIL (placeholder) |
| Switch G4→ML4 | NOT EXECUTED |
| Instance :3200 | G4 STILL SERVING |
| USER RECETTE | NOT RUN |
| Product push | NONE |

## 10. Action Morris requise

1. Renseigner `OPENAI_API_KEY` **non placeholder** dans `/Users/morris/.config/sfia-studio-next/recette/.env.local` (mode 0600).
2. Ne pas recopier/afficher la valeur dans ChatGPT.
3. Réémettre un GO de bascule G4→ML4 après confirmation.

## 11. Gates / interdictions respectés

Aucun arrêt G4 · aucun push Product · aucune PR/merge · aucune mutation GitHub · aucune ACL PG modifiée · aucune USER RECETTE.

## 12. Verdict unique

**ML4 RECETTE ENVIRONMENT — PRECHECK BLOCKED — G4 PRESERVED — MORRIS ACTION REQUIRED.**

Bloqueur : `OPENAI_API_KEY` (RECETTE) absente ou factice.
