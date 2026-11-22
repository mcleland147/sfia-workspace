# Matrice capacités Git — chaîne Nora ↔ Studio ↔ GitHub (2026-11-22)

| Champ | Valeur |
|---|---|
| Date | 2026-11-22 ≈ 07:45 CET |
| Macro-lot | Fiabilisation transverse chaîne Git |
| Profil | CRITICAL · NO RELEASE |
| Oracle REAL READ | `mcleland147/chantiers360` PR #19 · branche `sfia/pub-3ab1e0c2eb6b7499` · commit `16f9961e…` · blob `7518405f…` |

Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ · RE = REAL effect · GAP = écart ouvert · FIX = corrigé ce lot

## Lecture

| Capacité | Owner | Service | Outil Nora | Perm GH | Runtime obs. | D6 | D7 | D9 | D8 | Retour Nora | Test | Preuve | Gap / correction |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dépôts autorisés | D9/Int | `listProjectGitSources` | `list_project_git_sources` | metadata | CONNECTED+ATTACHED | n/a | n/a | provider | — | tool | unit/PG/e2e | DET/BR | OK UAT |
| Permissions dépôt | D9 | App install + allowlist | via sources | metadata | App + OAuth distincts | n/a | n/a | gate | — | status | unit | DET | OK |
| Branches / HEAD | D9 | `listGitRefs` / `getRefSha` | `list_git_refs` | contents:read | REAL | n/a | n/a | yes | — | tool | S03 unit | DET/RR | OK |
| Arbre fichiers | D9 | `listDirectory` | `list_git_directory` | contents:read | REAL | n/a | n/a | yes | — | tool | e2e | DET/BR | OK |
| Lecture fichier/ref | D9 | `readGitFile` | `read_git_file` | contents:read | REAL ; ref **explicite** | n/a | n/a | yes | — | tool | unit | DET/RR | OK — main 404 ≠ absence sur branche pub |
| Recherche présence | D9 | read + list | tools | contents:read | REAL | n/a | n/a | yes | — | tool+contexte | RR PR#19 | RR | OK |
| Historique commits | D9 | provider | (si exposé) | contents:read | PARTIAL | n/a | n/a | yes | facts | — | — | PARTIAL | hors P0 si non exposé outil |
| PR base/head/status | D9/D8 | provider + `document_publication_refs` | tools + snippets | pull_requests:read | REAL | n/a | n/a | yes | PR_OPEN | snippets+restitution | RR+DET | RR | **FIX** snippets owner |
| Checks/protections | D9 | provider | — | checks | PARTIAL | n/a | gate merge | yes | — | refus merge | unit merge | DET | merge path only |
| Fichier sur main | D9 | `read_git_file` ref=main | tool | contents:read | REAL 404 PR#19 | n/a | n/a | yes | mergeObserved=false | faits owner + tool | RR | RR | **FIX** contexte + restitution « aucune fusion vers main » |

## Écriture

| Capacité | Owner | Service | Outil Nora | Perm GH | Runtime | D6 | D7 | D9 | D8 | Retour Nora | Test | Preuve | Gap / correction |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Création branche | D7/D9 | `dispatchPublication` | via mission | contents:write | documentary+allowlist | mandate | guards | CREATE_BRANCH | BRANCH | restitution | PG SCRIPTED | DET/PG | OK |
| Publication fichier | D7/D9 | PUT contents | mission | contents:write | REAL RECETTE | mandate | guards | COMMIT | COMMIT | **complet** | PG+unit | DET/PG | **FIX** path/SHA/PR/liens |
| Création PR | D7/D9 | open PR | mission | pull_requests:write | REAL | mandate envelope | yes | OPEN_PR | PR_OPEN | PR # + URL | RR+PG | RR | PR#19 corrélée mission ; **FIX** restitution |
| Merge documentaire | D6/D7/D9 | merge mandate | mission | contents+PR | REAL | **séparé** | guards | MERGE | MERGE | mergeObserved | unit/PG | DET | PUBLISH≠MERGE |
| Post-effet verify | D8/D3 | reconcile + facts | snippets+tools | read | REAL | n/a | reconcile | read | facts | fidèle | unit | DET | **FIX** |
| Idempotence | D7 | correlation_key | — | — | — | — | yes | — | — | — | PG | DET | OK |

## Gestion

| Capacité | Owner | Statut |
|---|---|---|
| Rattachement / détachement | Int/D9 | UAT accepté — non rejoué |
| OAuth / App / révocation | Int | UAT accepté — non requalifié sans régression |
| Suppression branche | D7/D9 | UAT accepté — **non rejouée** |

## Identités (constat)

| Id | Rôle | Constat |
|---|---|---|
| A Pilote Studio | session RECETTE | actif |
| B OAuth Pilote | user connection | distinct App |
| C GitHub App | installation | REAL |
| D Provider D9 | App credentials lane | REAL |
| E–F Dépôts / perms | allowlist READ + WRITE ⊂ READ | `chantiers360` WRITE |
| G Rattachement | CampusFlow ↔ chantiers360 | présent |
| H–I Allowlists | READ vs WRITE | séparées |
| J Lane RECETTE | documentary WRITE ON | boot log |
| K–L D6/D7 | mandate `dec_aa4db4e0…` / attempt `efx_cf6763da…` | COMPLETED |
| M Protections | PR open non merged | RR |
| N Révocation | fail-closed | DET préexistant |

## Incident restitution — chaîne causale

1. Effet REAL COMPLETED avec D8 complet (branche, path, SHA, PR #19).
2. Same-turn `publicationEffectView` hydraté uniquement avec title/revision/hint → **sparse**.
3. `terminalFacts` COMPLETED n’émettait path/SHA/PR/liens.
4. Follow-up Nora sans snippets D8 → pas d’ancrage pour READ `main` vs branche pub.
5. **Correction** : `buildPublicationEffectViewFromAttempt` + restitution enrichie + snippets owner + toolScope resume.
