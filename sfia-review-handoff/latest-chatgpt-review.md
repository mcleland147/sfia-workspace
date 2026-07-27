# Review pack FULL — Option A M1 ruleset application

## 1. Métadonnées

| Champ | Valeur |
|---|---|
| Date/heure/fuseau | 2026-07-27 09:32:09 CEST (+0200) — Europe/Paris |
| Cycle | 7 — Intégration / DevOps (+6 architecture, +9 QA, +10 sécurité, +12 RUN readiness, +13 gouvernance, +15 capitalisation) |
| Profil | Critical |
| Typologie | Application GitHub ruleset / gouvernance CI |
| Gate consommé | `GO APPLY OPTION A M1 RULESET — SFIA STUDIO V3-NATIVE` |
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche locale | `delivery/sfia-studio-control-tower-fast-track` |
| HEAD local | `bb3c9e29936a925174beb0c1758e8fe887e58bc3` |
| `origin/main` avant/après | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` / inchangé |
| Workflow blob avant/après | `801a8759bb7440666799b95edf13f9ee6d9332f8` / inchangé |
| Ruleset ID | `19798462` |
| Verdict | `SFIA STUDIO V3-NATIVE OPTION A M1 RULESET APPLIED — STATIC CONFIGURATION VERIFIED — CONTROLLED PR PROOF REQUIRED` |

## 2. Local Git Truth Check

- `pwd` / toplevel : `/Users/morris/Projects/sfia-workspace`
- remote : `origin` → `https://github.com/mcleland147/sfia-workspace.git`
- `fetch --prune` : OK
- branche active : `delivery/sfia-studio-control-tower-fast-track`
- HEAD : `bb3c9e29936a925174beb0c1758e8fe887e58bc3`
- `origin/main` : `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`
- status : untracked `.tmp-sfia-review/` uniquement ; aucun tracked/staged modifié
- opérations Git actives : aucune
- branches/PR M1 concurrentes : aucune
- PR ouvertes : aucune
- handoff initial blob : `16fa833dc13c3ca3d884f1cc6fff08776efe7d1d` — conforme

## 3. Sources consultées

### Méthode

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

### CKC

- pilots architecture technique et QA : consultation candidate uniquement
- autorité d’exécution : aucune
- fallback : template v2.6 + handoff décidé + API GitHub réelle

### Projet / preuves

- `.github/workflows/sfia-studio-ci.yml`
- docs Option A 24, 30, 31, 32
- PR #270, #271
- runs `30237044632`, `30237640228`, `30238651843`, `30239805289`

### GitHub / API

- REST repository rulesets (docs.github.com)
- exemples officiels : `refs/heads/main` pour cibler une branche nommée
- endpoints : rulesets, rules/branches/main, check-runs, collaborators, users

## 4. Handoff initial

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- blob : `16fa833dc13c3ca3d884f1cc6fff08776efe7d1d`
- verdict préalable : configuration M1 décidée, application requise sous gate séparé

## 5. Préconditions pré-application (PASS)

| Critère | Résultat |
|---|---|
| repository public | oui |
| default branch | `main` |
| acteur `mcleland147` admin | oui |
| `main.protected` avant | `false` |
| classic protection | absente (404) |
| rulesets avant | `[]` |
| effective rules avant | `[]` |
| PR ouvertes | aucune |
| P3 intégré | oui |
| workflow blob | `801a8759…` |
| 4 preuves distantes | accessibles |
| check exact | `SFIA Studio Required Gate` |
| PR #271 | CLOSED, non mergée |

## 6. Résolution runtime

### Required check

- context : `SFIA Studio Required Gate`
- source : GitHub Actions
- app name : GitHub Actions
- app slug : `github-actions`
- integration ID reconfirmé depuis check-runs récents (heads `4e2d5cf2…`, `9f039162…`, `ffa36fde…`) : **`15368`**

### Acteur B2

- login : `mcleland147`
- type : `User`
- actor ID reconfirmé : **`295557155`**
- bypass mode décidé : `pull_request`
- `exempt` : interdit

### Targeting API

- sémantique décidée : branche `main` uniquement
- syntaxe officielle confirmée par la documentation REST GitHub (exemples `include: ["refs/heads/main", ...]`)
- valeur appliquée : **`refs/heads/main`**
- exclusions : `[]`
- `~DEFAULT_BRANCH` : non utilisée (évite ambiguïté si le default branch change)
- bare `main` : non utilisé (approximation rejetée)

### Capacités confirmées

- `actor_type=User` + `bypass_mode=pull_request`
- `required_approving_review_count=0`
- `strict_required_status_checks_policy=false`
- `required_review_thread_resolution=false`

## 7. Snapshot avant mutation

Répertoire local non versionné :

`.tmp-sfia-review/m1-apply-snapshot/`

Contenu :

- `00-timestamp-europe-paris.txt` — `2026-07-27 09:30:55 CEST (+0200)`
- `01-repo-metadata-before.json`
- `02-main-branch-before.json`
- `03-main-protection-before.json` (+ err 404)
- `04-rulesets-before.json` → `[]`
- `05-effective-rules-before.json` → `[]`
- `06-permissions-before.json`
- `07-user-mcleland147.json`
- `08-check-run-source-before.json`
- `09-payload-final.json`

## 8. Payload final exact (avant exécution)

```json
{
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "enforcement": "active",
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "conditions": {
    "ref_name": {
      "include": ["refs/heads/main"],
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

## 9. Application

- timestamp application : `2026-07-27 09:31:28 CEST (+0200)`
- commande :

```bash
gh api --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  repos/mcleland147/sfia-workspace/rulesets \
  --input .tmp-sfia-review/m1-apply-snapshot/09-payload-final.json
```

- status HTTP : **`201`**
- ruleset ID créé : **`19798462`**
- unique requête : oui
- aucun retry automatique

### Réponse JSON de création (extrait structural)

```json
{
  "id": 19798462,
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "source_type": "Repository",
  "source": "mcleland147/sfia-workspace",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/heads/main"
      ]
    }
  },
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 0,
        "dismiss_stale_reviews_on_push": false,
        "required_reviewers": [],
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": false,
        "allowed_merge_methods": [
          "merge",
          "squash",
          "rebase"
        ]
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": false,
        "do_not_enforce_on_create": false,
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
  ],
  "node_id": "RRS_lACqUmVwb3NpdG9yec5MdiYIzgEuGb4",
  "created_at": "2026-07-27T09:31:28.759+02:00",
  "updated_at": "2026-07-27T09:31:28.849+02:00",
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "current_user_can_bypass": "pull_requests_only",
  "_links": {
    "self": {
      "href": "https://api.github.com/repos/mcleland147/sfia-workspace/rulesets/19798462"
    },
    "html": {
      "href": "https://github.com/mcleland147/sfia-workspace/rules/19798462"
    }
  }
}
```

## 10. Vérification post-application

### Ruleset relu (GET `/rulesets/19798462`)

```json
{
  "id": 19798462,
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "source_type": "Repository",
  "source": "mcleland147/sfia-workspace",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/heads/main"
      ]
    }
  },
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 0,
        "dismiss_stale_reviews_on_push": false,
        "required_reviewers": [],
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": false,
        "allowed_merge_methods": [
          "merge",
          "squash",
          "rebase"
        ]
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": false,
        "do_not_enforce_on_create": false,
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
  ],
  "node_id": "RRS_lACqUmVwb3NpdG9yec5MdiYIzgEuGb4",
  "created_at": "2026-07-27T09:31:28.759+02:00",
  "updated_at": "2026-07-27T09:31:28.849+02:00",
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "current_user_can_bypass": "pull_requests_only",
  "_links": {
    "self": {
      "href": "https://api.github.com/repos/mcleland147/sfia-workspace/rulesets/19798462"
    },
    "html": {
      "href": "https://github.com/mcleland147/sfia-workspace/rules/19798462"
    }
  }
}
```

### Comparaison décidé / effectif

| Élément | Décidé | Effectif | Verdict |
|---|---|---|---|
| name | `SFIA Studio Main Required Gate — M1` | identique | PASS |
| target | `branch` | `branch` | PASS |
| enforcement | `active` | `active` | PASS |
| include | `refs/heads/main` | `["refs/heads/main"]` | PASS |
| exclude | aucune | `[]` | PASS |
| bypass count | 1 | 1 | PASS |
| bypass actor | User `295557155` | User `295557155` | PASS |
| bypass mode | `pull_request` | `pull_request` | PASS |
| PR rule | présente | présente | PASS |
| approvals | 0 | 0 | PASS |
| conversation resolution | false | false | PASS |
| code owners | false | false | PASS |
| last push approval | false | false | PASS |
| merge methods | merge/squash/rebase | merge/squash/rebase | PASS |
| required check context | `SFIA Studio Required Gate` | identique | PASS |
| integration_id | `15368` | `15368` | PASS |
| strict/up-to-date | false | false | PASS |
| non_fast_forward | présent | présent | PASS |
| deletion | présent | présent | PASS |
| règles supplémentaires | absentes | absentes (hors champ `required_reviewers: []` retourné par GitHub) | PASS |

Note : GitHub renvoie `required_reviewers: []` dans les paramètres `pull_request`. Ce n’est pas une règle supplémentaire ; le tableau est vide.

### Rulesets après

- count : **1**
- unique nom : `SFIA Studio Main Required Gate — M1`
- pas de doublon

### Effective rules sur `main`

```json
[
  {
    "type": "pull_request",
    "parameters": {
      "required_approving_review_count": 0,
      "dismiss_stale_reviews_on_push": false,
      "required_reviewers": [],
      "require_code_owner_review": false,
      "require_last_push_approval": false,
      "required_review_thread_resolution": false,
      "allowed_merge_methods": [
        "merge",
        "squash",
        "rebase"
      ]
    },
    "ruleset_source_type": "Repository",
    "ruleset_source": "mcleland147/sfia-workspace",
    "ruleset_id": 19798462
  },
  {
    "type": "required_status_checks",
    "parameters": {
      "strict_required_status_checks_policy": false,
      "do_not_enforce_on_create": false,
      "required_status_checks": [
        {
          "context": "SFIA Studio Required Gate",
          "integration_id": 15368
        }
      ]
    },
    "ruleset_source_type": "Repository",
    "ruleset_source": "mcleland147/sfia-workspace",
    "ruleset_id": 19798462
  },
  {
    "type": "non_fast_forward",
    "ruleset_source_type": "Repository",
    "ruleset_source": "mcleland147/sfia-workspace",
    "ruleset_id": 19798462
  },
  {
    "type": "deletion",
    "ruleset_source_type": "Repository",
    "ruleset_source": "mcleland147/sfia-workspace",
    "ruleset_id": 19798462
  }
]
```

- count : 4
- types : `pull_request`, `required_status_checks`, `non_fast_forward`, `deletion`
- `ruleset_id` : `19798462` pour toutes

### Protection `main` après

- `branches/main.protected` : **`true`**
- classic branch protection API : toujours **404** (`Branch not protected`)
- interprétation : la protection est fournie par le **ruleset**, pas par une classic branch protection parallèle

### Required checks après

- contexte effectif obligatoire : `SFIA Studio Required Gate`
- integration_id : `15368`
- strict : false

## 11. Non-régression

| Contrôle | Résultat |
|---|---|
| `origin/main` | inchangé `4e2d5cf2…` |
| workflow blob | inchangé `801a8759…` |
| commits projet | aucun |
| push projet | aucun |
| PR créées | aucune |
| fichiers projet tracked | inchangés |
| classic protection | non créée |
| second ruleset | non créé |
| PR #271 | CLOSED, non mergée |
| runs historiques | accessibles |
| findings | inchangés |
| document 32 | inchangé |

## 12. Divergences

Aucune divergence bloquante détectée entre payload décidé, réponse de création, ruleset relu et règles effectives.

## 13. Tests non exécutés (hors périmètre)

- PR hors Studio
- PR Studio failure/success
- test bypass B2
- force-push
- suppression de `main`
- rollback

Gate suivant candidat :

`GO VERIFY OPTION A M1 RULESET WITH CONTROLLED PRS — SFIA STUDIO V3-NATIVE`

Statut : **NOT CONSUMED**

## 14. Findings et trajectoire

| ID | Statut | Commentaire |
|---|---|---|
| F-A6-PM-G01 | inchangé, not CLOSED | M1 appliqué statiquement ; preuve comportementale encore requise avant décision MITIGATED/fermeture |
| F-CI-01 / 02 / 04 | OPEN | inchangés |
| F-CI-03 / 05 | MITIGATED | inchangés |
| F-CI-06 / 06B | MITIGATED, not CLOSED | inchangés |
| Option A COMPLETE | NON | |
| T-A7 | NON ouvert | |

## 15. Dette documentaire

Document 32 reste historiquement dépassé sur l’état P3/M1. Correction hors cycle.

## 16. Décisions restantes (NOT CONSUMED)

- preuve comportementale par PR contrôlées
- rollback éventuel sous gate séparé
- qualification/fermeture F-A6-PM-G01
- correction document 32
- Option A COMPLETE
- ouverture T-A7

## 17. Actions non exécutées

- aucune classic branch protection
- aucun second ruleset
- aucune modification workflow / projet
- aucun push/PR/merge projet
- aucun test bypass / force-push / suppression
- aucun rollback
- aucun finding modifié
- aucune correction document 32

## 18. Anti-claims

- ruleset appliqué ≠ comportement prouvé
- configuration statique conforme ≠ bypass testé
- M1 appliqué ≠ F-A6-PM-G01 fermé
- M1 appliqué ≠ Option A COMPLETE
- M1 appliqué ≠ T-A7 ouvert
- payload accepté ≠ règles effectives conformes sans relecture (relecture effectuée et conforme)
- possibilité de rollback ≠ rollback autorisé dans ce cycle

## 19. Verdict

`SFIA STUDIO V3-NATIVE OPTION A M1 RULESET APPLIED — STATIC CONFIGURATION VERIFIED — CONTROLLED PR PROOF REQUIRED`
