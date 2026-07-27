# SFIA Review Pack — M1 Ruleset Rollback Test + Bypass Qualification (FULL)

## Metadata
- date/heure/fuseau: 2026-07-27 19:28:39 CEST (+0200)
- cycle: 9 — QA / validation (+ 7 DevOps, 10 Sécurité, 12 RUN readiness, 15 Capitalisation, 1 cadrage futur bypass)
- profil SFIA: Critical
- typologie: QA / DEVOPS / GOVERNANCE / RULESET / ROLLBACK / BYPASS
- gate consommé: `GO TEST M1 RULESET ROLLBACK AND PREPARE BYPASS VALIDATION — SFIA STUDIO V3-NATIVE`
- repo: `mcleland147/sfia-workspace`
- workspace: `/Users/morris/Projects/sfia-workspace-m1-capitalization`
- main: `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- acteur authentifié: `mcleland147` (id `295557155`)

## 1. Local Git Truth Check
- HEAD local: `fa0eebe00ce3b765a8a486aa660dddfab40123a0`
- origin/main avant: `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- origin/main après: `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- status: clean · aucune opération Git active
- handoff initial blob: `b503cf1d8871d69ea270935740c50dc802de9be3`
- branche/worktree capitalisation: présents

## 2. Activité concurrente (pré-mutation)
- PR ouvertes vers main: `0`
- CI in_progress/queued sur main: `0`
- merges pendant fenêtre de désactivation: `[]`
- pré-disable: `OPEN_PRS=0 INPROG=0 QUEUED=0`

## 3. Ruleset initial complet
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

- SHA-256 JSON normalisé initial (full GET): `090262238b82576b826e1654bc14727aa21b04ddc59852fd4e653a2db0bfb05e`
- clés top-level: ["_links", "bypass_actors", "conditions", "created_at", "current_user_can_bypass", "enforcement", "id", "name", "node_id", "rules", "source", "source_type", "target", "updated_at"]
- name: `SFIA Studio Main Required Gate — M1`
- enforcement: `active`
- target: `branch`
- required check: `SFIA Studio Required Gate` / integration `15368`
- approvals: `0`
- strict policy: `false`
- bypass actor: user `295557155` mode `pull_request`

## 4. Payload disable complet
```json
{
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "source_type": "Repository",
  "enforcement": "disabled",
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
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ]
}
```

## 5. Payload restore complet
```json
{
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "source_type": "Repository",
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
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ]
}
```

## 6. Comparaison des payloads
- différence logique unique: `.enforcement` : `disabled` vs `active`
- aucune autre modification dans les payloads
- preuve: `ONLY_DIFF=.enforcement disabled vs active`

## 7. Désactivation réelle
- timestamp: `2026-07-27 19:27:21 CEST (+0200)`
- commande: `DISABLE_CMD=gh api --method PUT repos/mcleland147/sfia-workspace/rulesets/19798462 --input .tmp-sfia-review/ruleset-19798462-disable.json`
- DISABLE_EXIT=0
- stdout (réponse API):
```json
{"id":19798462,"name":"SFIA Studio Main Required Gate — M1","target":"branch","source_type":"Repository","source":"mcleland147/sfia-workspace","enforcement":"disabled","conditions":{"ref_name":{"exclude":[],"include":["refs/heads/main"]}},"rules":[{"type":"pull_request","parameters":{"required_approving_review_count":0,"dismiss_stale_reviews_on_push":false,"required_reviewers":[],"require_code_owner_review":false,"require_last_push_approval":false,"required_review_thread_resolution":false,"allowed_merge_methods":["merge","squash","rebase"]}},{"type":"required_status_checks","parameters":{"strict_required_status_checks_policy":false,"do_not_enforce_on_create":false,"required_status_checks":[{"context":"SFIA Studio Required Gate","integration_id":15368}]}},{"type":"non_fast_forward"},{"type":"deletion"}],"node_id":"RRS_lACqUmVwb3NpdG9yec5MdiYIzgEuGb4","created_at":"2026-07-27T09:31:28.759+02:00","updated_at":"2026-07-27T19:27:22.047+02:00","bypass_actors":[{"actor_id":295557155,"actor_type":"User","bypass_mode":"pull_request"}],"current_user_can_bypass":"pull_requests_only","_links":{"self":{"href":"https://api.github.com/repos/mcleland147/sfia-workspace/rulesets/19798462"},"html":{"href":"https://github.com/mcleland147/sfia-workspace/rules/19798462"}}}
```
- stderr: `(empty)`

### Ruleset désactivé (GET immédiat)
```json
{
  "id": 19798462,
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "source_type": "Repository",
  "source": "mcleland147/sfia-workspace",
  "enforcement": "disabled",
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
  "updated_at": "2026-07-27T19:27:22.047+02:00",
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
- enforcement observé: `disabled`
- ID/name/target/required check/bypass: inchangés hors enforcement
- verdict étape: `M1 RULESET ROLLBACK DISABLE STEP VERIFIED`
- durée de désactivation: `1` seconde(s) (< 300)

## 8. Restauration immédiate
- timestamp: `2026-07-27 19:27:22 CEST (+0200)`
- commande: `RESTORE_CMD=gh api --method PUT repos/mcleland147/sfia-workspace/rulesets/19798462 --input .tmp-sfia-review/ruleset-19798462-restore.json`
- RESTORE_EXIT=0
- stdout (réponse API):
```json
{"id":19798462,"name":"SFIA Studio Main Required Gate — M1","target":"branch","source_type":"Repository","source":"mcleland147/sfia-workspace","enforcement":"active","conditions":{"ref_name":{"exclude":[],"include":["refs/heads/main"]}},"rules":[{"type":"pull_request","parameters":{"required_approving_review_count":0,"dismiss_stale_reviews_on_push":false,"required_reviewers":[],"require_code_owner_review":false,"require_last_push_approval":false,"required_review_thread_resolution":false,"allowed_merge_methods":["merge","squash","rebase"]}},{"type":"required_status_checks","parameters":{"strict_required_status_checks_policy":false,"do_not_enforce_on_create":false,"required_status_checks":[{"context":"SFIA Studio Required Gate","integration_id":15368}]}},{"type":"non_fast_forward"},{"type":"deletion"}],"node_id":"RRS_lACqUmVwb3NpdG9yec5MdiYIzgEuGb4","created_at":"2026-07-27T09:31:28.759+02:00","updated_at":"2026-07-27T19:27:23.150+02:00","bypass_actors":[{"actor_id":295557155,"actor_type":"User","bypass_mode":"pull_request"}],"current_user_can_bypass":"pull_requests_only","_links":{"self":{"href":"https://api.github.com/repos/mcleland147/sfia-workspace/rulesets/19798462"},"html":{"href":"https://github.com/mcleland147/sfia-workspace/rules/19798462"}}}
```
- stderr: `(empty)`

### Ruleset restauré (GET)
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
  "updated_at": "2026-07-27T19:27:23.150+02:00",
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

## 9. Comparaison avant/après (configurable)
### Comparable before
```json
{
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/heads/main"
      ]
    }
  },
  "enforcement": "active",
  "name": "SFIA Studio Main Required Gate — M1",
  "rules": [
    {
      "parameters": {
        "allowed_merge_methods": [
          "merge",
          "squash",
          "rebase"
        ],
        "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_approving_review_count": 0,
        "required_review_thread_resolution": false,
        "required_reviewers": []
      },
      "type": "pull_request"
    },
    {
      "parameters": {
        "do_not_enforce_on_create": false,
        "required_status_checks": [
          {
            "context": "SFIA Studio Required Gate",
            "integration_id": 15368
          }
        ],
        "strict_required_status_checks_policy": false
      },
      "type": "required_status_checks"
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "deletion"
    }
  ],
  "target": "branch"
}
```

### Comparable after
```json
{
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/heads/main"
      ]
    }
  },
  "enforcement": "active",
  "name": "SFIA Studio Main Required Gate — M1",
  "rules": [
    {
      "parameters": {
        "allowed_merge_methods": [
          "merge",
          "squash",
          "rebase"
        ],
        "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_approving_review_count": 0,
        "required_review_thread_resolution": false,
        "required_reviewers": []
      },
      "type": "pull_request"
    },
    {
      "parameters": {
        "do_not_enforce_on_create": false,
        "required_status_checks": [
          {
            "context": "SFIA Studio Required Gate",
            "integration_id": 15368
          }
        ],
        "strict_required_status_checks_policy": false
      },
      "type": "required_status_checks"
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "deletion"
    }
  ],
  "target": "branch"
}
```

- résultat: `RULESET_RESTORED_IDENTICALLY`
- hash comparable (identique): `2ffe7e49a0c27bc2f8860f91271a22ebd97759e9eded39c342083215c5c19270`
- hash full GET after: `01a0cd762c44b703c71d4c8476fb50ae936c111b9a558ae35a97954754b011c0`
- métadonnées serveur différentes tolérées: ["updated_at"] (ex. `updated_at`)

## 10. Vérification opérationnelle post-restauration
- ruleset enforcement final: `active`
- required check présent: oui (`SFIA Studio Required Gate` / `15368`)
- main avant = main après = `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- document 33 présent · 441 lignes · blob `6c87cf4016d6a33f096df921acf8bafd4d73af4e`
- merges pendant fenêtre: aucun
- bypass utilisé pendant le test: non (aucune tentative de merge/bypass)
- qualification rollback: `ROLLBACK TEST PASSED`

## 11. Analyse bypass (sans exécution)
```json
{
  "current_user_can_bypass": "pull_requests_only",
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "enforcement": "active"
}
```

### Permissions / champs observés
- actor = bypass actor listé (`mcleland147` / `295557155`)
- `current_user_can_bypass` = `pull_requests_only`
- repository permissions admin=true (compte Morris)
- GraphQL PR #276 (déjà mergée): `viewerPermission=ADMIN`, `viewerCanMergeAsAdmin=false` (attendu sur PR déjà MERGED)
- méthodes merge repo: squash/merge/rebase autorisés ; auto-merge=false ; delete_branch_on_merge=false
- audit log org: non accessible avec droits actuels (`AUDIT_EC=AUDIT_EC=1`) — stderr scrubbé: `gh: Not Found (HTTP 404)`

### Différences conceptuelles
| Mécanisme | Effet | Testé ici |
|---|---|---|
| merge normal | exige required gate SUCCESS | non (hors scope) |
| merge `--admin` | contournement admin GitHub | **interdit / non exécuté** |
| bypass explicite ruleset (`pull_request`) | permet merge PR malgré checks si UI/API expose bypass | **config vérifiée, comportement non testé** |
| désactivation ruleset | retire enforcement temporairement | **testé puis restauré** |

### Risques
- bypass accidentel possible car actor = admin repo et mode `pull_request`
- absence d’approvals (0) + strict=false = configuration loose
- audit log non vérifiable ici sans droits org supplémentaires

### Conclusion bypass autorisée
`BYPASS CONFIGURATION VERIFIED — BEHAVIOR NOT TESTED`

## 12. Protocole futur test bypass (NON EXÉCUTÉ)

### Option B1 — test comportemental réel
- branche temporaire proposée: `qa/sfia-studio-m1-bypass-probe` (éphémère)
- modification minimale volontaire: toucher un fichier Studio pour déclencher le path-aware gate, ou introduire une erreur de lint/typecheck intentionnelle minimale sous `projects/sfia-studio/`
- création PR vers `main` avec titre explicite `qa(sfia-studio): controlled M1 bypass probe — DO NOT KEEP`
- preuve de blocage normal: required check `SFIA Studio Required Gate` = failure / merge bloqué
- action bypass envisagée: merge via UI/API en mode bypass ruleset (pas `--admin` générique) uniquement après GO Morris distinct
- si bypass fonctionne: commit atteint `main` malgré gate failed → pollution de main
- neutralisation immédiate: revert squash/commit sur main dans la même fenêtre
- stratégie revert: PR de revert ou revert commit + CI success
- preuve d’audit: capture screenshots/API merge event + ruleset bypass indication
- durée maximale: ≤ 15 minutes fenêtre ouverte
- stop conditions: incapacité à revert, autre activité concurrente, doute sur état ruleset
- risque: élevé (pollution main, dette CI, confusion gouvernance)
- dette: historique de merge invalide même après revert
- prérequis: `GO EXECUTE CONTROLLED M1 BYPASS BEHAVIOR TEST — SFIA STUDIO V3-NATIVE` (NOT CONSUMED)
- ne pas exécuter dans ce cycle

### Option B2 — validation non destructive
- inspection permissions, API, `current_user_can_bypass`, bypass_actors, merge methods
- éventuellement PR draft contrôlée **sans** merge, observant l’absence d’option bypass tant que checks pending/failed (lecture UI)
- aucune intégration sur `main`
- prouve la configuration / présence de capacité, **pas** le comportement réel de contournement réussi
- risque faible
- ne suffit pas seule à qualifier `bypass tested`
- partiellement réalisée dans ce cycle (API/config)

### Recommandation (non décision)
Préférer **B2 approfondi** puis, seulement si Morris exige une preuve comportementale, exécuter **B1** sous GO Critical séparé avec revert immédiat obligatoire. Ne pas combiner B1 avec d’autres mutations.

## 13. Gouvernance préservée
- F-A6-PM-G01 = MITIGATED — NOT CLOSED
- Option A = non COMPLETE
- T-A7 = non ouverte
- D1–D7 = NOT DECIDED
- rollback: **testé avec succès** (disable+restore identique)
- bypass: **configuration vérifiée — comportement non testé**
- configuration M1 loose inchangée après restauration
- aucune nouvelle baseline produit

## 14. Anti-claims
- rollback testé ≠ F-A6 CLOSED
- bypass config verified ≠ bypass tested / proven
- ruleset restored ≠ ruleset hardened
- main unchanged ≠ trajectoire produit reprise
- ce cycle ≠ Option A COMPLETE / T-A7 OPEN / décision D1–D7

## 15. Décisions Morris non prises
- clôture F-A6
- exécution B1 bypass comportemental
- durcissement ruleset (approvals/strict/bypass actors)
- ouverture T-A7
- cleanup branches/worktrees
- D1–D7

## 16. Actions non exécutées
- merge par bypass / `--admin`
- PR volontairement invalide
- push direct sur main
- commit projet / modification workflow / docs 24/32/33
- modification durable du ruleset
- suppression branche/worktree
- Notion/CMP

## 17. Blockers
- aucun blocker sur le rollback
- bypass comportemental bloqué volontairement par safe-execution boundary du gate

## 18. Gate candidat
- `GO EXECUTE CONTROLLED M1 BYPASS BEHAVIOR TEST — SFIA STUDIO V3-NATIVE` — **NOT CONSUMED**

## 19. Verdict
`SFIA STUDIO M1 RULESET ROLLBACK TEST PASSED — RULESET 19798462 DISABLED AND RESTORED IDENTICALLY — MAIN UNCHANGED — BYPASS CONFIGURATION VERIFIED BUT BEHAVIOR NOT TESTED — F-A6 MITIGATED NOT CLOSED — OPTION A NOT COMPLETE — T-A7 NOT OPEN`

## Review Handoff Git
- commit attendu: `docs(review-handoff): record M1 ruleset rollback test`
