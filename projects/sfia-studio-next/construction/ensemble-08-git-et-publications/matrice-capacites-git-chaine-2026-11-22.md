# Matrice capacités Git — chaîne Nora ↔ Studio ↔ GitHub (2026-11-22)

| Champ | Valeur |
|---|---|
| Date | 2026-11-22 ≈ 08:30 CET |
| Macro-lot | Audit exhaustif + fiabilisation capacités GitHub bout-en-bout |
| Profil | CRITICAL · NO RELEASE |
| Oracle REAL READ | `mcleland147/chantiers360` PR #19 · branche `sfia/pub-3ab1e0c2eb6b7499` · HEAD `16f9961e…` · fichier `references-externes-enseignements-chantiers360.md` |
| Oracle live (ce lot) | OPEN · merged=false · base=main · 1 commit · 1 fichier (`gh api`) |

Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ · RE = REAL effect · OUT = hors contrat E08 · FIX = corrigé ce lot · BLOQUÉ = gate ouvert

## A. Dépôts et identités

| Capacité | Owner | Service | Accès | Nora / mission | Exposition | Schema | Sélection NL | Identité | Perm GH | Runtime | D6 | D7 | D9 | D8 | Reprise | Restitution | Tests | Preuve | Statut |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Lister dépôts autorisés | D9 | `listProjectGitSources` | REAL/SCRIPTED | `list_project_git_sources` | oui | `{}` | oui | pilot+project | metadata | CONNECTED+ATTACHED | n/a | n/a | gate | — | n/a | tool | unit/PG/e2e | DET/BR | **IN OK** |
| Permissions dépôt | D9 | permissionsJson → sources | REAL | via `list_project_git_sources` | **FIX** champ `permissions` | Record | oui | pilot+project | snapshot Studio | CONNECTED | n/a | n/a | yes | — | n/a | tool | unit | DET | **FIX** |
| Connexion / install App | Int | auth + App | REAL | UI + status | UI 11.06 | — | partiel | OAuth≠App | install | RECETTE | n/a | n/a | yes | — | n/a | UI | e2e 11.06 | BR | OK UAT |
| Rattachement projet | Int | project_git_links | REAL | UI | UI | — | UI | project | — | ATTACHED | n/a | n/a | yes | — | n/a | UI | e2e | BR | OK UAT |
| Branche défaut | D9 | defaultBranch sources | REAL | tool | oui | — | oui | — | metadata | yes | n/a | n/a | yes | — | n/a | tool | DET | DET | OK |
| READ/WRITE séparés | D9 | allowlists | REAL | gate write | config | — | — | App | contents R/W | documentary | mandate | yes | assertWritable | — | — | refus | unit | DET | OK |
| Refus / révocation | Int/D9 | fail-closed | REAL | tools → DENIED | oui | — | — | — | 401/403 | yes | n/a | n/a | yes | — | — | DENIED | unit | DET | OK |

## B. Branches et références

| Capacité | Owner | Service | Nora | D6 | Preuve | Statut |
|---|---|---|---|---|---|---|
| Lister branches | D9 | `listGitRefs` | `list_git_refs` | n/a | DET/RR | **IN OK** |
| HEAD / existence ref | D9 | `getRefSha` + exact resolve | `list_git_refs` | n/a | DET/RR | **IN OK** |
| Comparer refs | D9 | SHAs distincts via tools | tools | n/a | DET | PARTIAL (pas de diff tool dédié) |
| Créer branche | D7/D9 | dispatch publication | mission D6/D7 | mandate | DET/PG | **IN OK** (mission) |
| Supprimer branche | D7/D9 | accepted UAT | mission | mandate | BR hist. | OK UAT — non rejouée |

## C. Fichiers et documents

| Capacité | Owner | Service | Nora | Preuve | Statut |
|---|---|---|---|---|---|
| Arborescence | D9 | `listGitDirectory` | `list_git_directory` | DET/BR | **IN OK** |
| Lire fichier @ ref | D9 | `readGitFile` | `read_git_file` | DET/RR | **IN OK** |
| Présence / absence | D9 | FILE_ABSENT qualifié | tool statuses | DET/RR | **IN OK** |
| Blob vs commit | D9 | permalink rules | tool provenance | DET | **IN OK** |
| Comparer versions | D3/D9 | deux reads | tools | DET | PARTIAL (pas de diff hunk tool) |
| Préparer / publier fichier | D4/D7/D9 | mission publication | mission | DET/PG/RR | **IN OK** (mission) |
| Vérifier contenu publié | D9/D8 | read + D8 | tools+faits | RR PR#19 | **IN OK** |

## D. Commits et publications

| Capacité | Owner | Nora / mission | Preuve | Statut |
|---|---|---|---|---|
| Historique commits | D9 | **OUT/PARTIAL** — pas d’outil `list_commits` E08 | — | **OUT** (pas d’ajout gratuit) |
| Commit précis / diff | D9 | PARTIAL via read+PR files | RR | PARTIAL |
| Créer commit documentaire | D7/D9 | mission | DET/PG/RR | **IN OK** |
| Retrouver SHA / branche | D8/D3 | restitution+tools | DET/RR | **IN OK** (**FIX** restitution antérieure) |
| Publication D7/D8 | D7/D8 | snippets+view | DET/PG | **IN OK** |
| Anti-doublon | D7 | correlation_key | DET/PG | **IN OK** |
| API distant ≠ push local | D9 | GitHub API only | DET | **IN OK** |

## E. Pull requests

| Capacité | AVANT | APRÈS (ce lot) | Owner | Nora | Preuve | Statut |
|---|---|---|---|---|---|---|
| Lire PR par numéro | D9 only → `read_git_pull_request` (lot précédent) | inchangé + token parity install→user | D9 | `read_git_pull_request` | DET/RR | **IN OK** |
| Lister / trouver PR | **GAP** — `findPullRequest` D9 non exposé Nora | **FIX** `list_git_pull_requests` + `listGitPullRequests` | D9 | `list_git_pull_requests` | DET | **FIX** |
| Fichiers modifiés PR | **GAP** — `listPullRequestFilesRemote` non raccordé provider/Nora | **FIX** provider + `list_git_pull_request_files` | D9 | `list_git_pull_request_files` | DET/RR (gh) | **FIX** |
| État / head / base / SHA | oui via read | oui | D9 | tool | RR #19 | **IN OK** |
| Mergeability / compteurs | oui (enrichi) | oui | D9 | tool | DET/RR | **IN OK** |
| Checks/protections | merge path only | inchangé | D9 | mission merge | DET | PARTIAL |
| Ouvrir PR | mission D6/D7 | inchangé | D7/D9 | mission | RR hist. | **IN OK** (mission) |
| Restituer n°/URL | **FIX** restitution antérieure | conservé | D3/D8 | restitution | DET/PG | **IN OK** |

## F. Merge

| Capacité | Statut | Gate |
|---|---|---|
| Identifier PR / cible / HEAD | IN via read tools | — |
| Checks / droits | PARTIAL | provider |
| Mandat D6 **distinct** | IN | PUBLISH ≠ MERGE |
| Exécuter merge | IN code path | **GIT-UAT-08 / REAL effect — BLOQUÉ** ce cycle (pas de GO merge) |
| Constater / restituer | IN sur fait MERGE | — |

## G. Erreurs et reprise

| Cas | Traitement | Preuve |
|---|---|---|
| 403 / 404 | DENIED / AMBIGUOUS / NOT_FOUND classifiés | DET |
| Dépôt non autorisé | ACCESS_DENIED allowlist | DET |
| Ref introuvable | REF_UNRESOLVED | DET |
| Branche protégée | refuse mutation main/master | DET |
| Conflit / stale HEAD | CONFLICT path | DET/PG |
| Token / provider | fail-closed + retry install→user READ | DET (code) |
| Timeout / ACK perdu / UNKNOWN | SCRIPTED faults + UI banner clarifié | DET |
| Double demande / idempotence | correlation_key | DET/PG |
| Reprise conversation | mission continuity + toolScope | DET/PG |
| Résultat obsolète | live re-read ≠ D8 historique | DET/RR |

## Outils Nora exposés (READ) — inventaire runtime

| Outil | Allowlist | Budget | Mutation |
|---|---|---|---|
| `list_project_git_sources` | oui | **Git calls** + chars | non |
| `read_git_file` | oui | Git calls + chars | non |
| `list_git_refs` | oui | Git calls | non |
| `list_git_directory` | oui | Git calls | non |
| `read_git_pull_request` | oui | Git calls | non |
| `list_git_pull_requests` | oui | Git calls | non |
| `list_git_pull_request_files` | oui | Git calls | non |
| `read_git_commit` | **FIX** | Git calls | non |
| `compare_git_refs` | **FIX** | Git calls | non |
| `read_git_commit_status` | **FIX** | Git calls | non |

Budget : `maxGitToolCalls` **séparé** de `maxD4ToolCalls` (R-READ-03). Chars partagés **sur un seul objet mutable** (`createSharedToolBudget`) — D4+history partagent `remainingCalls` ; Git utilise `remainingGitCalls` ; les trois partagent `remainingChars` (correctif revue 2026-11-22).
Écritures : **aucune** via outil LLM direct — uniquement qualification → D6 → D7 → D9 → D8 → restitution D3.

Compare : `baseSha`/`headSha` toujours issus de faits vérifiés (tip `commits[]` ou `fetchCommitRemote`) — y compris `status=identical` avec `commits=[]`.
Checks : dual 403 → `ACCESS_DENIED` (retry `withReadToken`) ; un seul endpoint OK → PARTIAL/DENIED ; pas de « checks verts » sur couverture incomplète.

### Réserves UAT post-campagne (fiabilisation 2026-11-22)

| Réserve | Cause | Correction | Preuve | Limite restante |
|---|---|---|---|---|
| R-READ-03 | TEST_BOUNDARY RECETTE + compteur D4+Git partagé (4) | `maxGitToolCalls` + `remainingGitCalls` + **objet budget unique** | DET | OPERATIONAL_VALIDATED toujours non adopté |
| R-READ-02 | Pas d’outil date/compare | `read_git_commit` + `compare_git_refs` (+ SHA tip vérifié) | DET | pas de list_commits / hunks (OUT) |
| R-READ-01 | Checks/protections absents Nora | `read_git_commit_status` (+ fallback token) | DET | rulesets/protections **DENIED** — gate avant GIT-UAT-08 |

## Chemins mission D6/D7 (écritures)

| Effet | Capability | Mandat | Preuve |
|---|---|---|---|
| Publication documentaire | `d7.publish_*` / publication plan | HumanDecision USER | DET/PG / RR hist. PR#19 |
| Merge | `d7.merge_publication` | mandat **distinct** | DET ; REAL **BLOQUÉ** |
| Create branch / commit / PR | steps plan | sous publication | DET/PG |

**Invariant branche (correctif 2026-11-22)** : si le Pilote nomme explicitement une branche de publication (`Branche à créer : …`), `preparePublication` doit l’utiliser telle quelle ; sinon dérivation `correlationKey`. Une divergence plan↔mandat → `PLAN_DRIFT` avant effet. Auto-génération conservée si aucune tête explicite. Incident PR#20 = preuve historique (non réécrit).

## Faits D8 oracle PR#19 (RECETTE DB — non mutés)

| Champ | Valeur |
|---|---|
| Attempt | `efx_cf6763da…` COMPLETED |
| Publication ref | `dpr_7f10c5e4…` PR_OPEN |
| Repo | `mcleland147/chantiers360` |
| PR | #19 |
| HEAD | `16f9961ef2ee6d13235e56059313f691521947fd` |
| Path | `references-externes-enseignements-chantiers360.md` |
| mergeObserved | false |

## Capacités OUT (contrat E08 — non ajoutées)

- Historique commits générique (`list_commits`)
- Diff hunks arbitraires
- Gestion labels/reviewers/assignees PR
- Force-push / protection bypass
- Merge REAL sans GO GIT-UAT-08

## Corrections ce macro-lot

1. `list_git_pull_requests` + resource `listGitPullRequests` + provider `listPullRequests` (head/base optionnels).
2. `list_git_pull_request_files` + resource + provider (raccord `listPullRequestFilesRemote`).
3. `listProjectGitSources.permissions` sanitizé depuis `permissions_json`.
4. REAL PR READ token : installation d’abord, fallback user OAuth sur 401/403 (`withReadToken`).
5. Allowlist cognitive + consigne Nora adapter mises à jour.
6. Tests unit exposition + scripted list/files read-only.

## Gates ouverts

| Gate | Cause | Owner |
|---|---|---|
| REAL WRITE / nouvelle mutation | Mandat : pas de mutation test sans acte | Morris |
| GIT-UAT-08 merge réel | Hors autorisation cycle | Morris |
| Nora LIVE E2E sélection outil | Browser/LIVE post-cutover | Morris UAT |
| Cutover RECETTE nouveau triplet | ENV-01 + GO sur SHA/TREE/BUILD | Morris |
| Product versioning | NO RELEASE / STABLE NOT AVAILABLE | — |
