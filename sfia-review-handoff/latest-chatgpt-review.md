# Review pack FULL — Option A M1 configuration contract (decided, NOT applied)

## 1. Date/heure/fuseau

2026-07-27 09:04:30 CEST (+0200) — Europe/Paris

## 2. Cycle / profil

Cycle : `1 — Cadrage décisionnel` ; complément(s) : 6/7/10/12/13/15
Profil SFIA : `Critical` ; Typologie : `Decision d’architecture GitHub / gouvernance CI`

## 3. Gate consommé

`GO DECIDE OPTION A M1 CONFIGURATION — SFIA STUDIO V3-NATIVE` (Gate Morris : consommé dans ce cycle)

## 4. Workspace / branche / HEAD / main

Workspace stable : `/Users/morris/Projects/sfia-workspace`
Branche locale active : `delivery/sfia-studio-control-tower-fast-track`
HEAD local : `bb3c9e29936a925174beb0c1758e8fe887e58bc3`
Baseline `origin/main` (SHA attendu) : `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`
Dernier commit main : `4e2d5cf ci(sfia-studio): add path-aware required gate preparation (#270)`

## 5. Statut Git (read-only)

- `git status --short` : untracked uniquement sous `.tmp-sfia-review/` (aucune mutation projet)
- `git diff --stat` : vide
- opérations Git actives (merge/rebase/cherry-pick/revert/bisect) : aucune

## 6. Sources consultées (obligatoires)

### Méthode (template + operating model)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/guardrails-checklist.md`

### Project / Option A (obligatoires)

- `.github/workflows/sfia-studio-ci.yml`
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md`
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/30-ci-governance-pr-post-correction-review.md`
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/31-ci-governance-post-merge-review.md`
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md`
- documents portant `F-A6-PM-G01` et findings CI (F-CI-01/02/03/04/05/06/06B)

### Preuves GitHub (obligatoires, réutilisées pour la readiness)

- PR `#270` + runs `30237044632`, `30237640228`
- push `main` (run `30238651843`)
- PR `#271` + run `30239805289`
- check-run exact : `SFIA Studio Required Gate` ; app source : `github-actions` ; app id candidate : `15368` (reconfrim avant application)

### GitHub API read-only (obligatoires pour configuration actuelle)

- `rulesets` : `[]`
- `branches/main/protection` : 404 (branch protection absente)
- check-runs et app id du check
- permissions/collaborators (acteur `mcleland147`, id `295557155`)

## 7. CKC (Architecture technique / utile aux décisions)

CKC candidats consultés (orientation, pas autorité d’exécution) :

- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/00-framing-and-architecture.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`

Statut : guidance candidate ; l’autorité d’exécution reste à Morris GO uniquement.

## 8. Handoff initial (obligatoire)

Handoff canonique initial (tel que fourni dans ton prompt) :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- blob initial attendu (handshake de readiness) : `2bd86785087ef461c2d5459b77510cf4a8c0634e`

Ce cycle publie un nouveau handoff canonique pour matérialiser le contrat M1 décidé.

## 9. Readiness reconfirmée (avant formalisation)

Confirmations sur `origin/main` :

1. Workflow P3 path-aware présent dans `.github/workflows/sfia-studio-ci.yml` ; blob workflow : `801a8759bb7440666799b95edf13f9ee6d9332f8`.
2. Check-run exact stable : `SFIA Studio Required Gate` (nom exact observé dans check-runs).
3. App source observée : `github-actions` ; app id candidate : `15368`.
4. Preuves de scénarios (remote) : gate fail-closed en cas de Studio failure et success en cas de Studio success et hors Studio.
5. Gouvernance actuelle : aucune application M1 effective :
   - rulesets : `[]`
   - protection main : absente (404)
   - required checks : aucun.

## 10. Configuration GitHub actuelle (obligatoire)

- `main.protected` : `false`
- branch protection : absente (404)
- repository rulesets : `[]`
- règles effectives pour `main` : vides

## 11. Contrat M1 décidé (complet, payload CANDIDATE — NOT EXECUTED)

### 11.1 Tableau exhaustif (décision → valeurs techniques)

Nom ruleset (candidat → valeur décidée pour le futur apply) : `SFIA Studio Main Required Gate — M1`

| Paramètre | Décision M1 | Valeur technique | Justification | Risque résiduel | Rollback |
|---|---|---|---|---|---|
| Mécanisme | Décidé | repository ruleset unique | un seul mécanisme actif | duplication si déjà appliqué ailleurs | désactiver ruleset |
| Target | Décidé | branch | cible main uniquement | erreur si cible élargie | désactiver ruleset |
| Include refs | Décidé | `ref_name.include=["main"]` | évite élargissement | typo | désactiver |
| PR obligatoire | Décidé | rule `pull_request` | push direct normal interdit | friction mineure | désactiver |
| Required status check | Décidé | `required_status_checks` : context `SFIA Studio Required Gate` | barrière CI | nom source différent | désactiver ruleset |
| Source check | Décidé (candidate) | GitHub Actions ; app slug `github-actions` ; app id candidat `15368` | pin source | id/check drift | revalidation runtime |
| Required approvals | Décidé | `required_approving_review_count = 0` | mono-contributeur ; barrière CI | pas de double regard | désactiver |
| Dismiss stale reviews | Décidé | `dismiss_stale_reviews_on_push=false` | pas de bruit | faible | désactiver |
| Code owners | Décidé | `require_code_owner_review=false` | pas de dépendance CO | aucune | désactiver |
| Conversation resolution | Décidé | `required_review_thread_resolution=false` | pas de gate humain impossible | threads non résolus | désactiver |
| Branches up to date | Décidé | policy loose via `strict_required_status_checks_policy=false` | up-to-date non requis initialement | drift possible | revalidate runtime |
| Force push | Décidé | rule `non_fast_forward` | interdiction force pushes | faible | désactiver |
| Suppression de main | Décidé | rule `deletion` | interdite sauf bypass | récup si nécessaire | désactiver |
| Linear history | Décidé | non requis (rule omitted) | non requise | n/a | désactiver |
| Signed commits | Décidé | non requis (rule omitted) | non requis | provenance non renforcée | désactiver |
| Merge queue | Décidé | non incluse | non activée | n/a | désactiver |
| Deployments requis | Décidé | aucun (rule omitted) | hors scope initial | n/a | désactiver |
| Bypass | Décidé | B2 (PR-only) | recovery/maintenance exceptionnelle | abus possible | revalidation runtime |
| Bypass actor | Décidé | `actor_type=User`, `actor_id=295557155` | acteur explicite | actor mismatch | désactiver ruleset |
| Bypass mode | Décidé | `bypass_mode=pull_request` | pas de bypass sur pushes | API/UI drift | revalidate runtime |
| Bypass exempt | Décidé | `exempt` : interdit (ne pas utiliser) | conserver évaluation rules | confusion possible | revalidate runtime |

### 11.2 Targeting (obligatoire)

- Target branch : `branch` uniquement
- `conditions.ref_name.include` : `["main"]`
- `conditions.ref_name.exclude` : `[]`
- aucune inclusion `~DEFAULT_BRANCH` ni wildcard.

### 11.3 Required check (nom exact + source)

- Contexte required status check : `SFIA Studio Required Gate`
- Source : GitHub Actions
- App slug observée : `github-actions`
- App id candidat : `15368`
- Changement stoppant à l’application future :
  - nom différent / absent
  - source non GitHub Actions
  - app id incohérent
  - check absent/pending systématique sur PR hors Studio.

### 11.4 Bypass B2 (décidé, PR-only)

- acteur : `mcleland147`
- type : `User`
- user id : `295557155`
- mode : `pull_request` uniquement
- `exempt` : interdit
- usage : urgence documentée (récupération CI ou gouvernance)
- usage normal : interdit
- traçabilité : obligatoire dans handoff/rapport d’incident
- revue post-usage : obligatoire

Vérification capability (REST rulesets) :

- `actor_type` inclut `User`
- `bypass_mode` supporte `pull_request` (et `exempt` distinct)

Si au runtime l’UI/API ne reflète pas ce mode pour ce type d’acteur, stop application future et remonter :
`B2 IMPLEMENTATION CAPABILITY UNCONFIRMED — MORRIS DECISION REQUIRED`.

## 12. Intégrité décidée (un seul mécanisme actif)

Règles d’intégrité :

- force pushes interdits : `non_fast_forward`
- suppressions de la branche cible interdites : `deletion`
- aucune “classic branch protection parallèle” (un seul ruleset M1 actif)
- pas de ruleset dupliqué ciblant `main` avec required checks différents.

## 13. Rollback préautorisé (contrat, non exécuté ici)

Procédure future (exécution sous gate Morris de rollback uniquement) :

1. capturer ruleset actif et son `id` (celui M1)
2. vérifier l’incident (blocage CI/governance, required check absent, etc.)
3. consommer le gate Morris de rollback
4. désactiver le ruleset M1 (ne pas supprimer initialement)
5. vérifier “effective rules” vides pour le domaine M1
6. vérifier required check non bloquant (PR redevient mergeable)
7. conserver le workflow P3
8. tester une PR temporaire hors Studio
9. documenter l’incident
10. décider séparément réactivation ou suppression

Gate futur recommandé :

`GO ROLLBACK OPTION A M1 RULESET — SFIA STUDIO V3-NATIVE`

## 14. Payload candidat (complet, NOT EXECUTED)

### 14.1 JSON candidate complète

> `CANDIDATE — NOT EXECUTED`

```json
{
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": ["main"],
      "exclude": []
    }
  },
  "bypass_actors": [
    {
      "actor_type": "User",
      "actor_id": 295557155,
      "bypass_mode": "pull_request"
    }
  ],
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

### 14.2 Commande/API candidate (ordre des ops futur)

> `CANDIDATE — NOT EXECUTED`

Exemple de commande (runtime ; jamais exécutée dans ce cycle) :

```bash
curl -L -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2026-03-10" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  "https://api.github.com/repos/mcleland147/sfia-workspace/rulesets" \
  -d '<PASTE_JSON_CANDIDATE_ABOVE>'
```

Champs à résoudre au runtime (stop conditions) :

- `integration_id` effectif du required check (reconfirmer `15368` au moment d’appliquer)
- `bypass_actors.actor_id` effectif de `mcleland147` (reconfirmer `295557155`)
- contexte exact `SFIA Studio Required Gate` (nom stable)
- présence du required check sur les commits ciblés (éviter pending systématique).

## 15. Protocole post-application (cycles séparés)

Cycles futurs :

1. application M1 (mutation ruleset uniquement)
2. vérification immédiate :
   - `main` effective rules OK
   - required check affiché et requis
3. PR hors Studio temporaire :
   - gate Required success
   - merge autorisé
4. PR Studio failure :
   - blocage attendu
5. correction Studio en success :
   - autorisation attendue
6. contrôle force-push/suppression (si testable) : doit échouer sauf bypass
7. contrôle bypass B2 si testable sans contournement réel
8. rollback test seulement sous gate de rollback si Morris l’autorise
9. fermeture PR sans merge des artefacts temporaires
10. nettoyage branches/worktrees sous gates séparés
11. décision sur `F-A6-PM-G01` (MITIGATED/closure)
12. correction du document 32 dans un cycle séparé

## 16. Finding F-A6-PM-G01 (règle)

- Cible après application/preuve : `MITIGATED`
- Fermeture : interdite sans décision séparée
- Ce cycle : aucune modification/fermeture du registre finding (conserver inchangé).

## 17. Dette documentaire (document 32)

- document 32 historiquement valide ; anti-claims P3/M1 obsolètes selon preuves distantes
- correction recommandée dans un cycle séparé :
  `GO CORRECT OPTION A DOCUMENT 32 POST-P3 AND M1 DECISION — SFIA STUDIO V3-NATIVE`
- ce cycle : aucune modification du document 32.

## 18. Décisions Morris consommées vs non consommées

### Consommées

- mécanisme : repository ruleset unique
- target : `main` uniquement
- bypass : B2 explicite `mcleland147` (User id `295557155`), PR-only, jamais exempt
- approvals : 0 initialement
- conversation resolution : désactivée initialement
- branches up to date : non requises initialement
- force pushes : interdits
- suppression : restreinte (prohibée)
- rollback : procédure prévalidée (exécution sous gate séparé)
- finding F-A6-PM-G01 : cible MITIGATED après preuve (sans fermeture)
- required check : `SFIA Studio Required Gate` source GitHub Actions ; app id `15368` candidat.

### Non consommées

- application effective M1
- exécution effective de rollback
- modification effective de finding
- correction du document 32
- déclaration Option A COMPLETE
- ouverture T-A7

## 19. Risques (obligatoire)

1. Drift du check-run : nom source ou `integration_id` changent ; required status check diverge → STOP runtime.
2. Capability UI/API : si `bypass_mode=pull_request` n’est pas supporté exactement pour actor_type `User`, B2 devient incertain → stop apply.
3. Approvals 0 : manque de revue humaine ; risque de gouvernance non “audit” → mitigé par CI gate.
4. Policy “loose” : risque de drift main ; mitigé par protocol post-application et revalidation.
5. Payload JSON : champs omis/incorrects peuvent invalider la création ruleset ; mitigé par stop conditions et verification post-creation.

## 20. Stop conditions (obligatoires pour l’application future)

STOP si au moment d’appliquer :

- workflow blob ne correspond plus à `801a8759…`
- required check `SFIA Studio Required Gate` absent/différent
- source du check non GitHub Actions ou `integration_id` ≠ 15368
- ruleset déjà partiellement appliqué (conflit de mécanismes)
- required status checks pending sur PR hors Studio
- bypass B2 ne peut pas être défini en `pull_request` pour actor_type `User`.

## 21. Actions non exécutées (ce cycle)

Aucune exécution/mutation :

- aucun ruleset créé
- aucune activation branch protection
- aucun required check ajouté
- aucun push/PR/merge projet
- aucune modification workflow
- aucune modification document 32
- aucune modification finding

## 22. Gate suivant candidat et verdict exact

Gate suivant candidat :

`GO APPLY OPTION A M1 RULESET — SFIA STUDIO V3-NATIVE`

Statut :

NOT CONSUMED.

Verdict exact attendu :

`SFIA STUDIO V3-NATIVE OPTION A M1 CONFIGURATION DECIDED — REPOSITORY RULESET — B2 PR-ONLY BYPASS — ZERO APPROVALS — LOOSE INITIAL MODE — APPLICATION REQUIRES SEPARATE MORRIS GATE`
