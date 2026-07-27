# 32 — Path-Aware Required Check and Main Protection Preparation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-27 01:12:00 CEST (+0200) — Europe/Paris |
| **Cycle** | Intégration / DevOps · QA/validation · capitalisation (Standard) |
| **Profil** | Critical |
| **Gate** | `GO PREPARE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| **HEAD (base)** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **origin/main** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **Push projet / PR / ruleset / protection** | **NON** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION PREPARED LOCALLY — READY FOR MORRIS PUSH AND PR DECISION` |

---

## 1. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- workflow `origin/main:.github/workflows/sfia-studio-ci.yml`
- docs 30 et 31 (gouvernance CI / post-merge)
- docs 24 (H1/H2/H3, séquence PR/CI/merge)
- handoff blob `15b844931aa10244d24fef938ad6f85650c3fde8`
- CKC candidat QA : `pilots/04-qa-validation.md` (candidate · pas d’autorité)
- CKC DevOps dédié : **absent** → fallback méthode + docs 30/31 + workflow
- PR #268 / #269 · run post-merge `30222087181` · protections/rulesets (lecture)

---

## 2. Truth Check

| Contrôle | Résultat |
|----------|----------|
| `origin/main` = `60d9ac9…` | **PASS** |
| Parents merge #269 | `508ef7c…` + `a42a85c…` |
| Protections / rulesets | **absents** |
| Required check | **non appliqué** |
| PR ouverte concurrente | **aucune** |
| Branche locale dédiée | créée depuis `origin/main` |
| Branches delivery/docs | **conservées** (non touchées) |

---

## 3. Problème path-filter

**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.
Un required check global fondé sur `Build and validate SFIA Studio` resterait **absent/pending** pour les PR hors Studio → **blocage mono-repo**.

**Après (P3 préparé localement) :**

1. `pull_request` vers `main` **sans** filtre `paths` ;
2. job **Detect SFIA Studio changes** (fail-closed) ;
3. job **Build and validate SFIA Studio** conditionnel ;
4. job final toujours présent **`SFIA Studio Required Gate`**.

`push`/`main` reste path-filtered (pas de régression de coût) ; les push déclenchés sont traités Studio-in-scope fail-closed.

---

## 4. Design avant / après

### Avant

```
PR (paths Studio only) → Build and validate SFIA Studio
push main (paths Studio) → Build and validate SFIA Studio
```

### Après

```
PR → main (all paths)
  → Detect SFIA Studio changes  → studio_changed true|false (fail-closed)
  → Build and validate SFIA Studio  (si PR && true, ou push)
  → SFIA Studio Required Gate  (always(); agrège)

push → main (paths Studio|workflow)
  → Detect (studio_changed=true fail-closed)
  → Build and validate SFIA Studio
  → SFIA Studio Required Gate
```

---

## 5. Jobs

### Detect SFIA Studio changes

- checkout `fetch-depth: 0`
- PR : `git diff -z --name-only base...head` ; match `projects/sfia-studio/*` ou `.github/workflows/sfia-studio-ci.yml`
- sortie `studio_changed` strictement `true`/`false`
- échec si SHA manquants/non résolvables ou valeur invalide
- push : `studio_changed=true` (path filter + fail-closed) ; corroboration `before...sha` si résolvable

### Build and validate SFIA Studio

- dépend de `detect` success
- condition PR : `studio_changed == true` ; push : toujours si detect OK
- Node **24** · npm ci · typecheck · lint · build · Vitest · modeled · secret · whitespace
- **pas** de `continue-on-error`

### SFIA Studio Required Gate

- `needs: [detect, validate]` · `if: always()`
- PASS si detect success && `studio_changed=false`
- PASS si detect success && `studio_changed=true` && validate success
- FAIL si detect ≠ success
- FAIL si Studio concerné et validate ∈ {failure, cancelled, skipped, unknown}
- logs courts non sensibles

### Permissions / concurrency

- `contents: read` inchangé
- concurrency cancel-in-progress conservée
- **Réserve :** un run cancelled sur un **ancien** head ≠ état du head courant

### Actions tierces

- uniquement `actions/checkout@v4` et `actions/setup-node@v4` (déjà présentes)
- **aucune** nouvelle action tierce

---

## 6. Triggers

| Event | Filtre | Effet |
|-------|--------|-------|
| `pull_request` → `main` | **aucun path** | gate toujours créé |
| `push` → `main` | paths Studio + workflow | validation Studio |

---

## 7. Matrice des scénarios

| Cas | Détection | Validation | Gate attendu | Preuve locale |
|-----|-----------|------------|--------------|---------------|
| 1 PR Studio success | true | success | success | **simulé** (script) |
| 2 PR Studio failure | true | failure | failure | **simulé** |
| 3 PR Studio cancelled | true | cancelled | failure | **simulé** |
| 4 PR Studio skipped anormal | true | skipped | failure | **simulé** |
| 5 PR hors Studio | false | skipped | success | **simulé** |
| 6 détection failure | (fail) | skipped | failure | **simulé** |
| 7 modif workflow Studio | true | exécutée | conforme | **inspecté** (paths) |
| 8 push main Studio | true | exécutée | conforme | **inspecté** |

**Limite :** GitHub n’a pas exécuté ce workflow distant. Preuve réelle = futur GO push/PR.

---

## 8. Validations locales

| Contrôle | Résultat |
|----------|----------|
| YAML parse | **PASS** |
| Structure jobs/noms | **PASS** |
| `always()` sur gate | **PASS** |
| `continue-on-error` | **absent** |
| permissions | `contents: read` |
| `git diff --check` | **PASS** |
| Scénarios gate (script) | **8/8 PASS** |
| npm ci / typecheck / lint / build / Vitest 655 / modeled 73 | **PASS** (local Node; lockfile non modifié) |

---

## 9. Configuration candidate M1 (**NOT APPLIED**)

| Élément | Valeur candidate |
|---------|------------------|
| Target | default branch `main` |
| Require PR | oui |
| Required approvals | **0** initialement |
| Code owners | non |
| Conversation resolution | option documentée · **non validée** |
| Required status check | **`SFIA Studio Required Gate`** |
| Branches up to date | **non** initialement |
| Block force pushes | oui |
| Restrict deletions | oui |
| Linear history | non |
| Signed commits | non (ce cycle) |
| Merge queue | non |
| Deployments | non |
| Bypass | décision Morris **ouverte** |

Aucun ID de ruleset inventé · **aucune** API d’application.

---

## 10. Bypass B0 / B1 / B2 (**non validés**)

| Option | Description | Reco |
|--------|-------------|------|
| B0 | aucun bypass | maximalement strict · friction ops |
| B1 | bypass rôles limités non documenté | opaque |
| **B2** | bypass administratif exceptionnel **tracé** | **recommandé** (non décision) |

B2 ≠ décision Morris validée · ≠ configuré.

---

## 11. Plan d’activation futur (gates séparés)

1. `GO PUBLISH … PATH-AWARE … BRANCH AND CREATE PR` (futur)
2. `GO REVIEW … PATH-AWARE … PR AND CI`
3. `GO MERGE …` (stratégie H à choisir)
4. `GO APPLY OPTION A MAIN RULESET M1 …` (après observation du nom check)
5. Décision séparée F-A6-PM-G01 / delete branches

**Ne pas** rendre required avant observation du nom réel sur GitHub.

---

## 12. Rollback

| Couche | Rollback |
|--------|----------|
| Workflow | revert du commit workflow vers version `60d9ac9…` |
| Ruleset futur | désactiver/supprimer ruleset sous GO Morris (non applicable ici) |

---

## 13. Findings

| ID | Impact |
|----|--------|
| F-A6-PM-G01 | MITIGATED proposé · **non CLOSED** · ruleset futur = étape suivante |
| F-CI-01 / 02 / 04 | OPEN · **hors cycle** |
| F-CI-03 / 05 | MITIGATED |
| F-CI-06 / 06B | MITIGATED, non CLOSED |

Réserves B5 · R1 · R-T-A3-* · R-M01 · U-M02 OPEN · C1–C4 NOT VALIDATED.

---

## 14. Risques / dette

| Risque | Mitigation |
|--------|------------|
| Condition GHA mal formée | revue + simulation gate |
| Coût CI (toutes PR) | detect léger ; validate conditionnel |
| Cancel concurrency | réserve head courant vs ancien |
| Preuve distante absente | anti-claim + GO push/PR |

Dette évitée : required check global incompatible path-filter.
Dette introduite : logique multi-jobs à maintenir ; preuve GitHub encore due.

---

## 15. Fichiers

| Action | Path |
|--------|------|
| Modifié | `.github/workflows/sfia-studio-ci.yml` |
| Créé | `…/32-path-aware-required-check-and-main-protection-preparation.md` |
| README | **non** (absent · non inventé) |

---

## 16. Actions non exécutées

Push projet · PR · merge · ruleset · branch protection · delete branches · fermeture findings · T-A7 · package/lockfile · autres workflows.

---

## 17. Anti-claims

- préparation locale ≠ workflow distant validé
- YAML valide ≠ GitHub Actions exécuté
- gate inspecté ≠ required check actif
- workflow mergé futur ≠ ruleset actif
- ruleset actif futur ≠ F-A6-PM-G01 CLOSED
- required check ≠ Option A COMPLETE
- T-A7 non ouvert
- push/PR/merge/protection **non** autorisés dans ce cycle
- P3 / M1 **préparés** · **non intégrés** · **non appliqués**
- B2 recommandé · **non validé**

---

## 18. Gates suivants candidats (**NOT consumed**)

```
GO PUBLISH OPTION A PATH-AWARE REQUIRED CHECK BRANCH AND CREATE PR
— SFIA STUDIO V3-NATIVE
```

Puis revue/CI · merge · (ultérieur) apply ruleset M1 · delete branches · décision F-A6.

---

## 19. Verdict

`SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION PREPARED LOCALLY — READY FOR MORRIS PUSH AND PR DECISION`
