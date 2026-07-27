# Review pack FULL — Option A M1 readiness assessment

## 1. Métadonnées et verdict exécutif

| Champ | Valeur |
|---|---|
| Date/heure/fuseau | 2026-07-27 08:26:40 CEST (+0200) — Europe/Paris |
| Cycle | 6 — Architecture technique ; compléments 7 DevOps, 9 QA, 10 sécurité, 12 RUN readiness, 13 PR readiness de gouvernance, 15 capitalisation légère |
| Profil | Critical |
| Typologie | Architecture GitHub / CI / gouvernance / sécurité |
| Gate consommé | `GO ASSESS OPTION A M1 READINESS — SFIA STUDIO V3-NATIVE` |
| Repository | `mcleland147/sfia-workspace` |
| Workspace stable | `/Users/morris/Projects/sfia-workspace` |
| Branche locale | `delivery/sfia-studio-control-tower-fast-track` |
| HEAD local | `bb3c9e29936a925174beb0c1758e8fe887e58bc3` |
| `origin/main` | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` |
| Divergence HEAD…main | branche locale +6 / −157 ; HEAD local non ancêtre de `origin/main` |
| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| Check candidat | `SFIA Studio Required Gate` |
| M1 | **NOT APPLIED** |
| Verdict readiness | **TECHNICALLY READY — MORRIS CONFIGURATION DECISIONS REQUIRED BEFORE APPLICATION** |

Verdict exact :

`SFIA STUDIO V3-NATIVE OPTION A M1 READINESS ASSESSMENT — TECHNICALLY READY — MORRIS CONFIGURATION DECISIONS REQUIRED BEFORE APPLICATION`

Classification demandée : **READY FOR MORRIS M1 IMPLEMENTATION DECISION**. Il ne s’agit ni d’une autorisation d’application, ni d’une décision de configuration.

## 2. Séparation épistémique

### Observations

- `origin/main` est exactement au SHA attendu `4e2d5cf2…`.
- La branche locale stable est ancienne/divergente ; l’analyse du contenu projet a donc été faite depuis `origin/main`.
- Le workspace n’a aucune modification tracked ou staged ; 262 fichiers untracked existent, tous sous `.tmp-sfia-review/**`.
- Aucune opération merge, rebase, cherry-pick, revert ou bisect n’est active.
- Aucun ruleset, aucune branch protection et aucune règle effective ne cible `main`.
- Aucune PR n’est ouverte dans le repository au moment du contrôle.
- Aucun nom de branche local ou distant contenant `m1`/`M1` n’a été trouvé.

### Preuves acquises

- Le workflow P3 est intégré sur `main` avec le blob attendu `801a8759…`.
- Les quatre scénarios distants sont accessibles et cohérents avec leur head SHA.
- Le check exact `SFIA Studio Required Gate` est visible comme check run GitHub Actions.
- Le run hors Studio prouve `studio_changed=false`, validation lourde `skipped`, gate final `success`.
- Le run Studio en erreur prouve la propagation fail-closed jusqu’au gate final.
- Le run Studio corrigé et le push post-merge prouvent le passage du gate.

### Hypothèses

- La fréquence future des merges peut évoluer ; les preuves disponibles ne justifient pas encore un mode strict « branche à jour ».
- Le modèle d’équipe est actuellement mono-contributeur côté collaborateurs GitHub : seul `mcleland147` est listé.
- L’absence de merge queue et d’auto-merge est volontaire pour M1 initial, mais pourra être réévaluée.

### Options

- Mécanisme : ruleset repository ou branch protection classique.
- Bypass : B0, B1 ou B2.
- Approvals : 0, 1 ou évolution ultérieure.
- Conversation resolution : maintenant, désactivée initialement ou activation ultérieure.
- Branches up to date : loose initial, strict ou activation ultérieure.

### Recommandations

- Utiliser **un ruleset repository unique** ciblant la branche par défaut `main`.
- Retenir **B2**, sous forme d’un bypass explicite de l’utilisateur `mcleland147` (`User`, id `295557155`), mode **pull request only**, jamais `exempt`.
- Exiger `SFIA Studio Required Gate`, source attendue GitHub Actions (`github-actions`, app id `15368`) si l’interface/API permet de la pinner.
- Initialiser les approvals à 0, conversation resolution désactivée et branche à jour non requise.
- Bloquer les force-pushes et restreindre les suppressions.
- Capturer le JSON/configuration avant activation, appliquer sous gate séparé, puis exécuter immédiatement le protocole de preuve post-application.

### Décisions Morris déjà validées

- H2 squash pour la PR #270.
- Intégration de P3 via la PR #270.
- Création, fermeture sans merge et nettoyage de la preuve hors Studio #271.
- Le gate du présent assessment read-only.

### Décisions Morris encore requises

1. ruleset repository ou branch protection classique ;
2. B0, B1 ou B2 ;
3. 0, 1 ou autre nombre d’approvals ;
4. conversation resolution oui/non/ultérieurement ;
5. branches up to date oui/non/ultérieurement ;
6. autorisation d’application M1 ;
7. autorisation future de rollback en cas d’incident ;
8. décision séparée sur F-A6-PM-G01 ;
9. autorisation de corriger la dette du document 32.

## 3. Local Git Truth Check

Commandes exécutées depuis `/Users/morris/Projects/sfia-workspace` :

- `pwd` et toplevel : identiques au workspace stable ;
- remote `origin` : `https://github.com/mcleland147/sfia-workspace.git` fetch/push ;
- `git fetch origin --prune` : succès ;
- branche : `delivery/sfia-studio-control-tower-fast-track` ;
- HEAD : `bb3c9e29936a925174beb0c1758e8fe887e58bc3` ;
- `origin/main` et `ls-remote origin main` : `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` ;
- dernier commit main : `4e2d5cf ci(sfia-studio): add path-aware required gate preparation (#270)` ;
- `git status --short` : `?? .tmp-sfia-review/` ;
- diff tracked : vide ;
- diff staged : vide ;
- untracked : 262, tous sous `.tmp-sfia-review/**`, aucun hors scratch ;
- opérations Git actives : aucune ;
- branches M1 locales/distantes : aucune ;
- PR ouvertes : aucune ;
- worktrees multiples existants, sans worktree de preuve #271 et sans branche M1 identifiée.

La divergence du workspace n’est pas bloquante pour ce cycle read-only : les contenus normatifs et le workflow ont été lus directement depuis `origin/main`.

## 4. Sources consultées

### Méthode et guardrails

- `prompts/templates/sfia-cycle-execution-template.md` — blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — blob `a331746a0ad55a76c3e2b5c5ac3977644613f5d1`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` — blob `cce876d80483440bd0ecb02ff2924892d126c76d`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/guardrails-checklist.md`

### CKC

- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/00-framing-and-architecture.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`

Statut : guidance candidate/pilote et expérimentale ; aucune autorité d’exécution. Aucun CKC DevOps/sécurité détaillé distinct n’a été retenu comme autorité. Fallback : template v2.6, workflow réel, documents Option A, preuves GitHub et documentation GitHub officielle.

### Option A

- `.github/workflows/sfia-studio-ci.yml`
- `24-ci-and-merge-governance-preparation.md`
- `30-ci-governance-pr-post-correction-review.md`
- `31-ci-governance-post-merge-review.md`
- `32-path-aware-required-check-and-main-protection-preparation.md`
- documents 23 à 32 référant F-A6-PM-G01 et F-CI-*
- `t-a6-evidence-review-claims-maturity/22-post-merge-review.md`

### GitHub

- PR #270 et PR #271 ;
- runs `30237044632`, `30237640228`, `30238651843`, `30239805289` ;
- jobs, étapes, conclusions et logs complets ;
- check-runs par head SHA ;
- repository settings, protection, rulesets, règles effectives, permissions et collaborateurs ;
- documentation GitHub officielle sur rulesets, protected branches, required checks et bypass.

## 5. Handoff initial

- branche : `sfia/review-handoff`
- commit observé : `54256228c440ebc107e662288309195de3336952`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- blob : `61bf6e0ff95b7f87fb09d396a1acd095d9075975`
- résultat : conforme au blob attendu ; contient la clôture du nettoyage #271 et le gate M1 readiness non consommé.

## 6. Vérification P3 sur `origin/main`

Workflow : `.github/workflows/sfia-studio-ci.yml`

Blob courant : `801a8759bb7440666799b95edf13f9ee6d9332f8`, identique au blob connu `801a8759…`. Aucun diff à qualifier.

Contrôles :

1. `pull_request` vers `main` sans filtre `paths` : **PASS**.
2. job `detect` toujours créé : **PASS**.
3. détection fail-closed : **PASS** ; SHA absents/inrésolubles, événement inconnu ou valeur invalide terminent en erreur.
4. matching exact : **PASS** pour `projects/sfia-studio/*` (équivalent shell récursif de `projects/sfia-studio/**`) et `.github/workflows/sfia-studio-ci.yml`.
5. validation lourde conditionnelle : **PASS** ; PR Studio seulement, push déclenché Studio toujours validé.
6. gate final : **PASS** ; nom exact `SFIA Studio Required Gate`, `if: always()`, dépendances `detect` et `validate`.
7. scénarios : **PASS** ; hors Studio success, Studio success success, détection/validation anormale failure.
8. permissions minimales : **PASS** ; `contents: read`.
9. actions tierces nouvelles : **PASS** ; seulement `actions/checkout@v4` et `actions/setup-node@v4`.
10. concurrency : **PASS** ; groupe workflow + PR/ref, `cancel-in-progress: true`.

Extraits fonctionnels :

```yaml
on:
  pull_request:
    branches:
      - main
```

```yaml
required_gate:
  name: SFIA Studio Required Gate
  needs:
    - detect
    - validate
  if: always()
```

La cancellation d’un run remplacé peut produire un check cancelled sur l’ancien head, mais le nouveau head recevra un run distinct. Le gate échoue si `detect` n’est pas success ou si une validation Studio requise n’est pas success.

## 7. Configuration GitHub actuelle

| Élément | État observé |
|---|---|
| Repository | public, default branch `main` |
| Authenticated actor | `mcleland147`, admin |
| Collaborateurs | `mcleland147` uniquement, rôle admin |
| `main.protected` | `false` |
| Classic branch protection | absente, API 404 `Branch not protected` |
| Repository rulesets | `[]` |
| Effective rules for `main` | `[]` |
| Required status checks | aucun |
| Bypass actors configurés | aucun |
| Merge methods | merge commit, squash et rebase autorisés |
| Auto-merge | désactivé |
| Delete branch on merge | désactivé |
| Web commit signoff | non requis |
| Permission disponible | admin ; token `repo`, `workflow`, `read:org` |
| Contrainte plan | repository public ; GitHub documente les repository rulesets comme disponibles sur GitHub Free pour les repositories publics |

Aucune mutation M1 partielle ou concurrente n’est observée.

## 8. Matrice des preuves distantes

| Scénario | Run / PR | Event | Head exact | Attempt | Detect | `studio_changed` | Validate | Required Gate | Verdict |
|---|---|---|---|---:|---|---|---|---|---|
| PR Studio en échec | #270 / `30237044632` | pull_request | `e9813524e90d75d7d737b5ef330f8923f75cda43` | 1 | success | true | failure, trailing whitespace | failure | propagation fail-closed prouvée |
| PR Studio corrigée | #270 / `30237640228` | pull_request | `9f03916243c470587f6958e058fd58909e5bd75a` | 1 | success | true | success | success | passage Studio prouvé |
| Push Studio main | `30238651843` | push | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` | 1 | success | true | success | success | intégration main prouvée |
| PR hors Studio | #271 / `30239805289` | pull_request | `ffa36fdef905fc81760b9fb0fa56f1a9edea08c6` | 1 | success | false | skipped | success | path-awareness hors Studio prouvée |

Logs exacts déterminants :

- `30237044632` : `event_name=pull_request`, `studio_changed=true`, trailing whitespace lignes 48 et 245, `validate_result=failure`, `Required gate FAIL: Studio validation required but result=failure.`
- `30237640228` : `studio_changed=true`, `validate_result=success`, `Required gate PASS: Studio validation succeeded.`
- `30238651843` : `push corroborate studio_changed=true`, `event_name=push`, `validate_result=success`, `Required gate PASS: Studio validation succeeded.`
- `30239805289` : `studio_changed=false`, `validate_result=skipped`, `Required gate PASS: non-Studio pull request; heavy validation not required.`

Le nom `SFIA Studio Required Gate` est identique sur les quatre heads. La source du check est GitHub Actions, app slug `github-actions`, app id `15368`.

PR #270 : MERGED le 2026-07-27T05:02:16Z, squash `4e2d5cf2…`.

PR #271 : CLOSED, `mergedAt=null`, `mergeCommit=null`; branche et worktree supprimés, preuve distante accessible.

## 9. Évaluation paramétrique M1

| Paramètre | Valeur candidate | Bénéfice | Risque / friction | Rollback | Recommandation | Décision Morris |
|---|---|---|---|---|---|---|
| Target | default branch `main` | protège la baseline | erreur de ciblage bloquante | désactiver ruleset | conserver | oui, dans choix mécanisme |
| Require PR | oui | interdit l’intégration directe ordinaire | urgence plus lente | désactiver règle | oui | incluse dans application |
| Approvals | 0 initialement | satisfaisable en mono-contributeur | pas de double regard GitHub | remettre à 0 | **0 initialement** | oui |
| Required check | `SFIA Studio Required Gate` | gate stable et path-aware | typo/source erronée bloque toutes PR | retirer le check/désactiver | oui, source GitHub Actions si possible | oui/application |
| Branches up to date | non initialement | évite reruns et friction mono-repo | course avec main possible | repasser loose | **non initialement**, observer | oui |
| Block force pushes | oui | intégrité de main | urgence directe bloquée | désactiver la règle | oui | incluse dans application |
| Restrict deletions | oui | préserve main | récupération administrative requise | désactiver la règle | oui | incluse dans application |
| Linear history | non | conserve tous merge methods actuels | historique moins uniforme | non applicable | non pour M1 | non urgente |
| Signed commits | non | évite incompatibilité immédiate | provenance non renforcée | désactiver | différer | non urgente |
| Merge queue | non | simplicité | pas de sérialisation automatique | désactiver | non pour M1 | non urgente |
| Deployments | non | hors portée | aucun gate environnement | retirer règle | non pour M1 | non urgente |
| Conversation resolution | ouverte | qualité review possible | threads obsolètes bloquants | désactiver | **désactivée initialement** | oui |
| Bypass | ouverte | résilience incident | contournement opaque si large | retirer bypass | **B2 explicite PR-only** | oui |

## 10. Ruleset versus branch protection classique

| Critère | Ruleset repository | Branch protection classique |
|---|---|---|
| Disponibilité observée | endpoint lisible, liste vide ; support public Free documenté | endpoint lisible, protection absente |
| Required check | supporté | supporté |
| Ciblage `main` | branche par défaut ou pattern explicite | règle `main` |
| Bypass | rôles, users, teams, apps ; PR-only possible | sur repository personnel, bypass actors classique limité/non disponible comme sur organisation |
| Auditabilité | nom, statut, visibilité, historique/versions | moins explicite ; une seule règle applicable |
| Réversibilité | désactivation sans suppression | modification/suppression de protection |
| Visibilité | visible aux lecteurs du repository | visible dans paramètres/état protection |
| Compatibilité preuves | identique pour check requis | identique |
| Doublon/conflit | peut se cumuler ; exige contrôle `[]` avant application | peut se cumuler avec ruleset et créer règles agrégées |
| Simplicité | légère complexité initiale, meilleure gouvernance | configuration directe mais bypass moins adapté ici |

**Mécanisme principal recommandé : repository ruleset unique.**

Raisons : auditabilité, statut activable/désactivable, visibilité, ciblage explicite de `main` et bypass PR-only exploitable sur un repository personnel. Ne pas cumuler avec une branch protection classique. Recontrôler `rulesets=[]`, protection absente et règles effectives vides immédiatement avant toute application.

## 11. Analyse B0 / B1 / B2

| Option | Sécurité | Exploitabilité / urgence | Audit | Dette / risque | Conclusion |
|---|---|---|---|---|---|
| B0 aucun bypass | maximale en régime nominal | faible lors d’une panne CI ou erreur M1 | simple | lockout opérationnel ; rollback dépend de l’accès admin aux settings | acceptable mais non recommandé pour Critical mono-admin |
| B1 rôle large/implicite | faible à moyenne | élevée | contournements difficiles à attribuer | normalise le bypass, dette opaque | écarté |
| B2 administratif exceptionnel tracé | élevée si acteur explicite + PR-only | suffisante pour urgence avec trace PR | meilleure | dépend d’une discipline Morris et d’un acteur maîtrisé | recommandé |

Acteurs/catégories officiellement possibles pour un ruleset : `Integration`, `RepositoryRole`, `Team`, `DeployKey`, `User`; `OrganizationAdmin` n’est pas applicable à un repository personnel. Les acteurs réellement observés sont :

- utilisateur `mcleland147`, id `295557155`, rôle repository `admin` ;
- source du check GitHub Actions, app id `15368`.

Recommandation B2 actualisée :

- acteur bypass : **User `mcleland147` id `295557155`** ;
- mode : **pull request only** ;
- ne pas utiliser `exempt`, car GitHub indique qu’il n’exécute pas les règles et ne crée pas d’entrée d’audit de bypass ;
- ne pas utiliser un `RepositoryRole` large ;
- tout usage B2 requiert une justification Morris dans la PR et un REX.

Cette configuration n’est pas appliquée ni décidée. L’API read-only ne permet pas de confirmer l’état exact du sélecteur UI avant création ; l’acteur et l’identifiant sont toutefois résolus, et les types/modes sont documentés par l’API officielle.

## 12. Conversation resolution

Options :

- activée dès M1 : améliore la fermeture des objections, mais les conversations obsolètes ou techniques peuvent bloquer une équipe réduite ;
- désactivée initialement : garde M1 centré sur le gate CI et minimise les faux blocages ;
- activation ultérieure : permet de mesurer le volume de review avant enforcement.

**Recommandation : désactivée initialement, activation ultérieure sous décision séparée.**

Motif : aucune activité actuelle de reviewers/commentaires ne justifie d’ajouter un second mécanisme de blocage au premier déploiement M1. Les conversations obsolètes doivent être gérées explicitement avant activation.

## 13. Required approvals

- 0 : satisfaisable, cohérent avec un repository à collaborateur unique et avec l’objectif M1 centré CI.
- 1 : crée un blocage si Morris est le seul approbateur éligible ou auteur ; l’automatisation ne constitue pas une approbation humaine.
- évolutif : activer 1 quand un second reviewer habilité et un SLA de review existent.

**Recommandation : 0 initialement ; réévaluation documentée à l’arrivée d’un second reviewer.**

La décision Morris reste nécessaire. Cette recommandation ne présente pas 0 comme équivalent à une validation humaine.

## 14. Branches up to date

- non requis : check loose sur le head PR ; coût CI réduit, friction réduite, risque résiduel de drift ;
- requis systématiquement : meilleure intégration sur le dernier main, mais reruns fréquents et course possible sans merge queue ;
- ultérieurement : activer si incidents de drift ou fréquence de merge le justifient.

**Recommandation : non requis initialement ; activation ultérieure après métriques ou incident.**

Le workflow utilise la base/head de la PR et le gate est stable. L’absence de merge queue rend le mode strict plus coûteux dans un mono-repo.

## 15. Rollback M1 précis et borné

Préconditions futures :

1. capturer l’état sans protection : `main.protected=false`, rulesets `[]`, effective rules `[]` ;
2. enregistrer le JSON et l’identifiant du ruleset M1 après création ;
3. garder `.github/workflows/sfia-studio-ci.yml` inchangé.

Déclencheurs :

- check absent, pending durablement ou nommé différemment ;
- PR hors Studio bloquée ;
- permissions insuffisantes ;
- règle concurrente ;
- bypass non maîtrisé ;
- impossibilité de désactiver/tester le rollback.

Procédure :

1. consommer un gate Morris explicite de rollback ;
2. désactiver le ruleset M1 en priorité, plutôt que le supprimer, pour préserver l’audit ;
3. confirmer que les règles effectives sur `main` sont redevenues vides ;
4. confirmer `main.protected=false` si aucune autre protection n’existe ;
5. confirmer qu’aucun required status check n’est encore imposé ;
6. vérifier sur une PR de preuve non mergée que la mergeability n’est plus bloquée par M1 ;
7. conserver P3 et ses runs : ne pas revert le workflow pour un incident de configuration M1 ;
8. publier une preuve post-rollback, puis nettoyer la PR/branche sous gates séparés.

Si le mécanisme choisi était la protection classique, retirer le required check puis désactiver/supprimer la protection sous le même gate, avec les mêmes contrôles.

## 16. Protocole post-application futur

1. Ouvrir une PR temporaire hors Studio.
2. Vérifier `studio_changed=false`, validation lourde skipped, Required Gate success et merge autorisable.
3. Ouvrir ou utiliser une PR Studio.
4. Provoquer uniquement dans une branche de preuve un échec réversible et vérifier le blocage par Required Gate.
5. Corriger, vérifier Required Gate success et merge autorisable.
6. Vérifier blocage force-push/suppression seulement avec une cible temporaire et sans toucher `main`, si la règle peut être démontrée sans risque.
7. Vérifier B2 selon la décision Morris, idéalement via PR-only avec trace.
8. Rejouer la procédure de rollback sur preuve contrôlée si Morris l’autorise.
9. Ne merger aucun artefact temporaire.
10. Fermer les PR et supprimer branches/worktrees sous gates séparés.

Le protocole est défini mais **non exécuté** dans ce cycle.

## 17. Findings

| Finding | État documentaire observé | Qualification actuelle | Impact M1 |
|---|---|---|---|
| F-A6-PM-G01 | non CLOSED ; OPEN/proposition MITIGATED selon documents | preuves actuelles justifient **OPEN → MITIGATED** ; pas de fermeture automatique | non bloquant pour décision M1 ; décision Morris séparée |
| F-CI-01 pin engines | OPEN | inchangé | non bloquant M1, dette reproductibilité |
| F-CI-02 npm audit 12 high | OPEN | inchangé | non bloquant du gate, risque sécurité séparé |
| F-CI-03 local/CI Node | MITIGATED | inchangé | non bloquant |
| F-CI-04 actionlint absent | OPEN | compensé par parse/runs réels, pas fermé | non bloquant M1 |
| F-CI-05 node:sqlite/Node20 | MITIGATED | inchangé | non bloquant |
| F-CI-06 | MITIGATED, non CLOSED | inchangé | non bloquant |
| F-CI-06B | MITIGATED, non CLOSED | inchangé | non bloquant |

Recommandation F-A6-PM-G01 : enregistrer **MITIGATED** maintenant si Morris l’autorise ; attendre M1 appliqué + preuve post-application avant toute décision de closure readiness. Aucune modification de finding n’a été effectuée.

## 18. Dette documentaire du document 32

Document : `32-path-aware-required-check-and-main-protection-preparation.md`, blob `1bc7b6544d27d687bf9e33757863f1397b1494b6`.

Observations obsolètes :

- « P3 préparé localement » ;
- plan futur de publication/PR/merge de P3 ;
- « preuve distante future » implicite ;
- anti-claim `P3 / M1 préparés · non intégrés · non appliqués`.

Réalité actuelle :

- P3 intégré à `main` via #270 ;
- échec, succès, push main et hors Studio prouvés ;
- #271 fermée non mergée et ressources temporaires nettoyées ;
- seul M1 reste non appliqué.

Classification :

- observation : le document est historiquement cohérent avec sa date, mais factuellement dépassé ;
- dette documentaire : oui ;
- correction recommandée : ajouter un addendum post-intégration ou actualiser les sections historiques sans effacer la chronologie ;
- périmètre : hors présent cycle ;
- décision Morris : requise.

## 19. Matrice de readiness M1

| Domaine | Critère | État | Preuve | Risque résiduel | Bloquant M1 |
|---|---|---|---|---|---|
| Workflow sur main | P3 intégré, blob stable | PASS | `4e2d5cf2…`, blob `801a8759…` | faible | non |
| Nom exact check | stable et visible | PASS | quatre check-runs | typo future | non |
| PR Studio success | gate success | PASS | #270 / `30237640228` | faible | non |
| PR Studio failure | gate failure | PASS | #270 / `30237044632` | faible | non |
| PR hors Studio | gate success, validate skipped | PASS | #271 / `30239805289` | faible | non |
| Push main | validation et gate success | PASS | `30238651843` | faible | non |
| Règles existantes | aucune concurrence | PASS | protection 404, rulesets/rules `[]` | état peut changer avant apply | non, recheck requis |
| Compatibilité mono-repo | gate toujours créé sur PR main | PASS | trigger sans paths + preuve #271 | coût detect léger | non |
| Bypass | option recommandée non décidée | OPEN DECISION | acteur exact résolu | contournement/lockout | décision avant apply |
| Rollback | procédure définie, non testée | PASS WITH RESERVATION | baseline vide + admin | test futur requis | non pour décision, stop apply si non testable |
| Conversation resolution | recommandation initiale off | OPEN DECISION | analyse équipe réduite | dette review | décision avant apply |
| Approvals | recommandation 0 | OPEN DECISION | un seul collaborateur | pas de double regard | décision avant apply |
| Branches up to date | recommandation loose | OPEN DECISION | pas de merge queue | drift possible | décision avant apply |
| Permissions | admin, API lisible | PASS WITH RESERVATION | `mcleland147` admin | sélecteur bypass UI non testé | non |
| Dette documentaire | doc 32 dépassé | PASS WITH RESERVATION | blob `1bc7b654…` | confusion opérateur | non technique |
| Findings | ouverts/mitigés, aucun fermé | PASS WITH RESERVATION | docs 30–32 + handoff | dette sécurité/reproductibilité | non pour M1 |
| Protocole post-application | défini, non exécuté | PASS WITH RESERVATION | section 16 | application non prouvée | requis immédiatement après apply |

Aucune ligne **BLOCKER**. Quatre décisions de configuration sont ouvertes, plus l’autorisation d’application.

## 20. Risques et réserves

1. Le ruleset n’a pas été créé même en mode disabled : son rendu final et le sélecteur de bypass restent à valider pendant le futur cycle d’application.
2. Le rollback est précis mais non testé, car le présent gate interdit toute mutation.
3. B2 doit être PR-only et explicite ; `exempt` supprimerait l’évaluation et l’audit de bypass.
4. Le mode loose laisse un risque de drift entre head validé et dernier `main`.
5. Approvals 0 ne remplace pas une revue humaine.
6. Les findings sécurité/reproductibilité restent ouverts.
7. Le document 32 peut induire un opérateur en erreur sur l’état de P3.
8. Les rulesets se cumulent avec les protections : tout changement d’état avant apply impose STOP/reassessment.

## 21. Stop conditions pour une future application

STOP si :

- `origin/main` ou le workflow blob a changé sans preuve équivalente ;
- `SFIA Studio Required Gate` est absent, différent ou non issu de GitHub Actions ;
- une PR hors Studio ne reçoit pas rapidement le gate success ;
- une protection/ruleset concurrent apparaît ;
- le required check est configuré strict/up-to-date contrairement à la décision ;
- le bypass diffère de la décision Morris ou utilise `exempt` sans autorisation explicite ;
- les permissions admin ne permettent pas de désactiver le ruleset ;
- le rollback ne peut pas être vérifié ;
- une preuve essentielle devient inaccessible.

Verdict STOP :

`STOP — OPTION A M1 READINESS PRECONDITIONS DIVERGED — MORRIS DECISION REQUIRED`

## 22. Actions non exécutées

- aucun ruleset créé, modifié, activé, désactivé ou supprimé ;
- aucune branch protection ;
- aucun required check configuré ;
- aucune modification de `main`, du workflow ou du document 32 ;
- aucun commit/push projet ;
- aucune branche projet ;
- aucune PR créée, fermée, rouverte ou mergée ;
- aucun finding modifié ou fermé ;
- aucune permission modifiée ;
- aucun test destructif ;
- Option A non déclarée COMPLETE ;
- T-A7 non ouvert.

## 23. Gates suivants candidats

Si Morris accepte la readiness technique :

`GO DECIDE OPTION A M1 CONFIGURATION — SFIA STUDIO V3-NATIVE`

Statut : **NOT CONSUMED**.

Après décisions explicites seulement :

`GO APPLY OPTION A M1 — SFIA STUDIO V3-NATIVE`

Statut : **NOT CONSUMED**.

## 24. Conclusion

Les prérequis techniques de M1 sont satisfaits : P3 est intégré sur `main`, son identité est stable, les quatre chemins d’exécution sont prouvés et aucune gouvernance concurrente n’existe. Les éléments encore ouverts sont des choix de configuration et des réserves d’exploitation, pas des blockers techniques.

Recommandation de configuration, non décision :

- repository ruleset unique ;
- require PR ;
- required check `SFIA Studio Required Gate`, source GitHub Actions ;
- approvals 0 ;
- branche à jour non requise ;
- conversation resolution désactivée ;
- force-push bloqué ;
- suppression restreinte ;
- B2 explicite `mcleland147`, PR-only, non exempt.

`SFIA STUDIO V3-NATIVE OPTION A M1 READINESS ASSESSMENT — TECHNICALLY READY — MORRIS CONFIGURATION DECISIONS REQUIRED BEFORE APPLICATION`
