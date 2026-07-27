# Review pack FULL — Option A M1 configuration (decided, not applied)

## 1. Date/heure/fuseau, cycle et profil

| Champ | Valeur |
|---|---|
| Date/heure/fuseau | 2026-07-27 08:40:00 CEST (+0200) — Europe/Paris |
| Cycle | 1 — Cadrage décisionnel ; compléments 6/7/10/12/13/15 |
| Profil | Critical |
| Typologie | Decision d’architecture GitHub / gouvernance CI |
| Gate consommé | `GO DECIDE OPTION A M1 CONFIGURATION — SFIA STUDIO V3-NATIVE` |
| Workspace stable | `/Users/morris/Projects/sfia-workspace` |
| Baseline `main` (SHA attendu) | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` |

## 2. Local Git Truth Check (read-only, preconditions)

Statut global : **PASS** (lecture seule).

- `main` contient le workflow `SFIA Studio CI` (P3 intégré).
- Blob workflow observé : `801a8759bb7440666799b95edf13f9ee6d9332f8` (inchangé).
- `main.protected` : `false` (branch protection absente, HTTP 404).
- `repository rulesets` : `[]` (aucun ruleset actif).
- `Required status checks` effectifs : aucun.
- Check exact : `SFIA Studio Required Gate` visible comme check-run.
- Check-run source attendue : GitHub Actions, app slug `github-actions`, app id `15368`.
- Aucun indice d’application partielle de M1 détectée (aucune protection/ruleset/required check déjà configuré).

## 3. Observations / preuves (reconfirmation de readiness avant formalisation)

### Observations

1. Workflow sur `origin/main` :
   - P3 path-aware présent dans `.github/workflows/sfia-studio-ci.yml`.
2. Check exact candidat :
   - nom de check-run : `SFIA Studio Required Gate`.
   - app/source observée : `github-actions` + id `15368`.
3. Gouvernance GitHub :
   - `rulesets=[]`, `main protection` absente.

### Preuves acquises (distantes — réutilisées comme preuves de readiness)

- PR Studio en échec : run `30237044632` → gate `FAIL`.
- PR Studio corrigée en succès : run `30237640228` → gate `PASS`.
- push Studio sur `main` : run `30238651843` → gate `PASS`.
- PR hors Studio : PR #271 / run `30239805289` → `studio_changed=false`, validation `skipped`, gate `PASS`.

### Hypothèses (limitées au contrat, pas de mutation)

- GitHub supporte bien `bypass_mode="pull_request"` pour un acteur de type `User` dans un ruleset de branche (documenté par la spécification REST rulesets).

## 4. Contrat M1 décidé (complet, directement applicable — CANDIDATE, NOT EXECUTED)

Contrat cible : `mcleland147/sfia-workspace` ; baseline `main` uniquement.

### 4.1 Tableau exhaustif des paramètres M1

| Paramètre | Décision M1 | Valeur technique | Justification | Risque résiduel | Rollback |
|---|---|---|---|---|---|
| Nom ruleset | **Décidé** | `SFIA Studio Main Required Gate — M1` | Nom candidat fixé pour l’application future | Faible | Désactivation ruleset |
| Enforcement | **Décidé** | `active` | Mode exécution future | Faible (si bien formé) | Désactivation ruleset |
| Mécanisme | **Décidé** | ruleset repository unique | Un seul mécanisme actif | Conflits si déjà configuré ailleurs (STOP précondition) | Désactivation ruleset |
| Target | **Décidé** | `branch` | règles pour branches | Faible | Désactivation ruleset |
| Include refs | **Décidé** | conditions.ref_name.include = `["main"]` | main uniquement, pas de wildcard | Faible | Désactivation ruleset |
| Exclude refs | **Décidé** | `[]` | pas d’exclusion | Faible | Désactivation ruleset |
| PR obligatoire | **Décidé** | rule `pull_request` activée | empêche push direct “normal” | Friction mineure | Désactivation ruleset |
| Required approvals | **Décidé** | `required_approving_review_count = 0` | mono-contributeur ; barrière CI initiale | risque de revue informelle seulement | Désactivation ruleset |
| Dismiss stale reviews | **Décidé** | `dismiss_stale_reviews_on_push = false` | pas de perturbation | N/A avec 0 approvals | Désactivation ruleset |
| Code owners | **Décidé** | `require_code_owner_review = false` | pas de dépendance CO | faible | Désactivation ruleset |
| Last push approval | **Décidé** | `require_last_push_approval = false` | évite contrainte impossible | faible | Désactivation ruleset |
| Conversation resolution | **Décidé** | `required_review_thread_resolution = false` | pas de second gate humain initial | risque review threads non résolus | Désactivation ruleset |
| Required status check | **Décidé** | rule `required_status_checks` | barrière CI | typo de contexte : STOP future | Désactivation ruleset |
| Check context exact | **Décidé** | `context = "SFIA Studio Required Gate"` | nom exact attendu | dépendance au nom | Désactivation ruleset |
| Check source (Actions app) | **Décidé (candidate)** | `integration_id = 15368` | pin source check (reconfirmer au runtime) | si id change ou check swap | Désactivation ruleset |
| Strict/up-to-date | **Décidé** | `strict_required_status_checks_policy = false` | branches up-to-date non requises initialement | dérive possible | Désactivation ruleset |
| Branches up to date | **Décidé** | false initialement (via strict policy false) | cohérent avec contrat | dérive possible | Désactivation ruleset |
| Force pushes | **Décidé** | rule `non_fast_forward` activée | interdiction force push | faible | Désactivation ruleset |
| Deletions | **Décidé** | rule `deletion` activée | interdiction suppression de `main` | faible | Désactivation ruleset |
| Linear history | **Décidé** | rule `required_linear_history` non incluse | non requise | faible | Désactivation ruleset |
| Signed commits | **Décidé** | rule `required_signatures` non incluse | non requis | faible | Désactivation ruleset |
| Merge queue | **Décidé** | `merge_queue` non incluse | non activée | faible | Désactivation ruleset |
| Deployments requis | **Décidé** | `required_deployments` non incluse | aucun | faible | Désactivation ruleset |
| Bypass | **Décidé** | B2 explicit user, PR-only, jamais exempt | récupération/maintenance | misuse possible (governance) | Désactivation ruleset |
| Bypass actor | **Décidé** | actor `{type:"User", id:295557155}` | acteur explicite | doit être reconfirmé avant apply | Désactivation ruleset |
| Bypass mode | **Décidé** | `bypass_mode = "pull_request"` | bypass PR-only | faible | Désactivation ruleset |
| “Portée” bypass | **Décidé (règle de conduite)** | exceptionnel ; usage normal interdit | tracabilité via PR/handoff | humain | Désactivation ruleset |
| Mécanismes concurrents | **Décidé** | pas de classic protection en parallèle | un seul mécanisme actif | double gate si cumulé | Désactivation ruleset |

### 4.2 Target (branche) — “main uniquement”

La condition ref_name est :

- `include: ["main"]`
- `exclude: []`

Aucune inclusion de `~DEFAULT_BRANCH` (évite élargissement accidentel).

## 5. Bypass B2 décidé (capabilité vérifiée)

### 5.1 Formalisation exacte

- acteur : `mcleland147`
- type : `User`
- id observé : `295557155`
- mode : `pull_request` uniquement (bypass PR-only)
- `exempt` : interdit
- usage : urgence documentée, récupération CI ou gouvernance
- usage normal : interdit
- traçabilité : obligatoire dans le handoff ou rapport d’incident
- revue post-usage : obligatoire

### 5.2 Vérification “capability”

Capabilité vérifiée via documentation REST rulesets :

- `bypass_mode` supporte `pull_request` et `exempt`.
- Le mode `pull_request` est explicitement décrit comme “bypass uniquement sur pull requests”.
- `actor_type` supporte `User`.

Donc B2 tel que défini est **implémentable** au niveau rulesets (REST).

## 6. Required check décidé

### 6.1 Formalisation

- nom exact du check : `SFIA Studio Required Gate`
- source : GitHub Actions
- app/source attendue : `github-actions`
- app id candidate observée : `15368` (reconfirmer immédiatement avant application future)

### 6.2 Stop condition future (obligatoire)

La future application doit STOP si au runtime :

- le nom du check-run le plus récent n’est pas `SFIA Studio Required Gate` ;
- la sourceeffective n’est pas GitHub Actions ;
- `integration_id` effectif ≠ `15368` ;
- le check n’est présent que sur un ancien head (pas sur les PR cibles attendues) ;
- le check reste `pending` de façon systématique sur une PR hors Studio (indiquant fail-open/logiciel non conforme).

## 7. Intégrité décidée (un seul mécanisme actif)

Contrainte M1 :

- force pushes interdits : `non_fast_forward`.
- suppressions de `main` interdites : `deletion`.
- pas de classic branch protection en parallèle : aucune seconde couche active.
- une seule configuration de ruleset “M1” au niveau `main`.

## 8. Rollback préautorisé (contrat, pas d’exécution autonome)

Procédure future (exécution soumise à un gate Morris explicite de rollback) :

1. Capturer le ruleset actif et son ID (celui appliqué par M1).
2. Vérifier l’incident (symptômes CI/governance).
3. Consommer le gate Morris de rollback.
4. Désactiver le ruleset M1 (désactiver en priorité ; ne pas supprimer initialement).
5. Vérifier que les “effective rules” sur `main` redeviennent vides pour le domaine ruleset M1.
6. Vérifier que `SFIA Studio Required Gate` n’est plus requis et n’empêche plus des merges de PR.
7. Conserver le workflow P3 (ne pas revenir en arrière sur `.github/workflows/sfia-studio-ci.yml`).
8. Tester une PR temporaire (hors Studio) pour confirmer mergeability.
9. Documenter l’incident (dans handoff/compte rendu).
10. Décider séparément : réactivation ou suppression du ruleset M1.

Gate futur recommandé :

`GO ROLLBACK OPTION A M1 RULESET — SFIA STUDIO V3-NATIVE`

## 9. Payload d’application préparé (CANDIDATE — NOT EXECUTED)

### 9.1 JSON candidate (complet, sans exécuter)

> Remarque : certains champs sont des candidats à résoudre/reconfirmer au runtime avant exécution future (ex. `integration_id=15368` et `actor_id`).

```json
{
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "enforcement": "active",
  "bypass_actors": [
    {
      "actor_type": "User",
      "actor_id": 295557155,
      "bypass_mode": "pull_request"
    }
  ],
  "conditions": {
    "ref_name": {
      "include": ["main"],
      "exclude": []
    }
  },
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "allowed_merge_methods": ["merge", "squash", "rebase"],
        "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_approving_review_count": 0,
        "required_review_thread_resolution": false
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "do_not_enforce_on_create": false,
        "strict_required_status_checks_policy": false,
        "required_status_checks": [
          {
            "context": "SFIA Studio Required Gate",
            "integration_id": 15368
          }
        ]
      }
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "deletion"
    }
  ]
}
```

### 9.2 Commande/API candidate (préparée ; NOT EXECUTED)

Commande API candidate (exemple `curl`, à exécuter uniquement dans le cycle d’application futur) :

```bash
curl -L -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2026-03-10" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  https://api.github.com/repos/mcleland147/sfia-workspace/rulesets \
  -d '<PASTE_JSON_CANDIDATE_ABOVE>'
```

Ordre opérationnel (futur) :

1. reconfirmer au runtime `integration_id` effectif du check-run le plus récent ;
2. reconfirmer `actor_id=295557155` pour `mcleland147` ;
3. créer le ruleset avec le JSON ci-dessus.

## 10. Protocole post-application (cycles séparés, non exécuté ici)

1. Cycle application M1 (mutation GitHub attendue).
2. Vérification immédiate :
   - `main` rules effective couvre uniquement le ruleset M1.
   - check requis affiché : `SFIA Studio Required Gate`.
3. PR hors Studio temporaire :
   - vérifier gate success et merge possible.
4. PR Studio en failure :
   - vérifier blocage par required status checks.
5. Correction Studio en success :
   - vérifier autorisation.
6. Contrôle blocage/autorisation :
   - force push / suppression (si testable) doit échouer hors bypass.
7. Vérifier bypass B2 si testable sans contournement réel :
   - usage exceptionnel via PR et trace obligatoire.
8. Rollback test sous gate séparé si Morris l’autorise.
9. Fermeture PR sans merge des artefacts temporaires.
10. Nettoyage des branches/worktrees sous gates séparés.
11. Décision sur F-A6-PM-G01 (closure) après preuve.
12. Correction du document 32 dans un cycle séparé.

## 11. Finding F-A6-PM-G01 (non modifié dans ce cycle)

- statut cible recommandé après application/preuve : `MITIGATED`.
- fermeture : interdite sans décision séparée.
- statut actuel : conserver inchangé dans Git (aucune modification dans ce cycle).

## 12. Dette documentaire (document 32)

Conserver document 32 inchangé.

Correction recommandée dans un cycle séparé :

`GO CORRECT OPTION A DOCUMENT 32 POST-P3 AND M1 DECISION — SFIA STUDIO V3-NATIVE`

## 13. Décisions Morris consommées vs non consommées

### Décisions consommées (par ce gate)

- mécanisme : repository ruleset unique.
- target : `main` uniquement.
- bypass : B2 explicite `mcleland147` (User id `295557155`), PR-only, jamais exempt.
- approvals : 0 initialement.
- conversation resolution : désactivée initialement.
- branches up to date : non requises initialement.
- force push : bloqué.
- suppression : restreinte (prohibée).
- rollback : procédure préautorisée dans le contrat (exécution sous gate séparé).
- required status check : `SFIA Studio Required Gate` avec source GitHub Actions et app id candidat `15368`.

### Décisions non consommées

- application effective M1.
- exécution de rollback.
- modification effective de finding (F-A6-PM-G01).
- correction du document 32.
- déclaration Option A COMPLETE.
- ouverture de T-A7.

## 14. Actions non exécutées (ce cycle)

Zéro mutation :

- aucun ruleset créé ;
- aucun required check ajouté ;
- aucune branch protection activée ;
- aucun push/PR/merge projet ;
- aucun test d’application réel ;
- aucune modification workflow ;
- aucune modification document 32 ;
- aucun changement de finding.

## 15. Gate suivant candidat et verdict attendu

Gate suivant candidat :

`GO APPLY OPTION A M1 RULESET — SFIA STUDIO V3-NATIVE`

Statut :

NOT CONSUMED.

Verdict exact attendu :

`SFIA STUDIO V3-NATIVE OPTION A M1 CONFIGURATION DECIDED — REPOSITORY RULESET — B2 PR-ONLY BYPASS — ZERO APPROVALS — LOOSE INITIAL MODE — APPLICATION REQUIRES SEPARATE MORRIS GATE`
