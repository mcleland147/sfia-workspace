# ENV-01 — Préflight mise à disposition RECETTE (E08)

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-21 (Europe/Paris) |
| Applicabilité | **REQUIRED** — préparation uniquement |
| Environnement autorisé ce cycle | **DEV local isolé** |
| RECETTE | **PROTÉGÉE** — aucun déploiement |
| STABLE | **NOT AVAILABLE** |
| Classe versioning | **NO RELEASE** |
| Revue visuelle | Différée en RECETTE (arbitrage Morris) — G5 NOT PROVEN en DEV |

## Identité Git du candidat

| Champ | Valeur |
| --- | --- |
| Source repository | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| HEAD actuel (local) | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` (aligné main ; worktree dirty) |
| État worktree | **DIRTY + untracked** (E08 complet non figé) |
| Candidate SHA | *renseigné après freeze commit local* |
| Build identifier | *renseigné après build détaché* |
| Lane cible | **RECETTE E07 existante** (réutilisation exclusive — pas de 2e lane) |
| Runtime actuel | E07 `@5ad8fa57` / BUILD `BtZP6qDx5oAw8jwPQSEhc` encore servi sur :3200 |
| Cutover | **STOP** sans GO Morris SHA-specific |
| STOP | Ne pas présenter cutover comme fait tant que runtime ≠ SHA candidat |

## Validations nécessaires au freeze

1. Commit projet unique (GO Morris) incluant code E08 + tests + docs construction E08.
2. `tsc --noEmit`, unit, PG pertinents, build, Playwright smoke verts sur SHA figé.
3. Manifeste ENV-01 / paramètres lane RECETTE renseignés.
4. Aucun secret dans le commit / pack.
5. Review Pack + handoff synchronisés au SHA figé (republication L3 si delta).

## Risques d’intégration vs main

- Base = HEAD main actuel ; dérive `origin/main` à re-vérifier au freeze.
- Volume E08 large (UI Git, Nora merge/pub, D9 multi-repo) — revue d’intégration avant PR.
- Ne pas merger sans GO ; pas de push projet dans ce cycle.

## Lane RECETTE — paramètres à isoler

| Domaine | À préparer |
| --- | --- |
| DB | Instance RECETTE distincte ; migrations applicables ; pas de partage DEV |
| Rôles / Pilote | Identités RECETTE dédiées |
| Cookies / sessions | Domaine/callback RECETTE ; pas de cookie DEV |
| Secrets | Vault RECETTE ; rotation distincte DEV |
| GitHub App | Installation sandbox ; allowlist repos test ; **pas** prod |
| Nora / OpenAI | Clé + budget DEV/RECETTE bornés ; mode explicite |
| Volumes / storage | Séparés |
| Callbacks OAuth | URLs RECETTE uniquement |

## Dataset synthétique prévu

- Projet(s) test sans données prod.
- 1–2 dépôts sandbox documentaires allowlistés.
- Branches/PR documentaires dédiées (préfixe Studio).
- Documents Markdown de publication test.
- Aucune donnée personnelle réelle.

## Providers & capacités exercées (état actuel)

| Provider | Exercé ce cycle | Pour RECETTE |
| --- | --- | --- |
| SCRIPTED GitHub | Oui (DET/e2e) | Autorisé pour smoke ; **≠** preuve REAL |
| REAL GitHub READ | NOT PROVEN | Préflight read-only si GO |
| REAL GitHub WRITE/MERGE | **NON AUTORISÉ** ce mandat | GO sandbox distinct |
| Nora fixture/DET | Oui | Corpus discriminant |
| Nora LIVE | NOT PROVEN | Borné DEV/RECETTE si budget OK |
| PostgreSQL local | Suites existantes | DB RECETTE isolée |

## Protocole futur REAL sandbox (sans mutation ce cycle)

1. Dépôt sandbox exact + installation App + permissions.
2. Allowlist `GITHUB_APP_ALLOWED_REPOS` bornée.
3. Branches/PR documentaires dédiées ; protections branch.
4. Pilote + identité RECETTE.
5. Scénario : lecture → publication → merge sous mandats D6 distincts.
6. Contrôles D7/D8 ; reprise ; rollback (close PR / delete branch test).
7. **Aucun** dépôt production.

## Scénarios Pilote à examiner en RECETTE (hors G5 pixel)

- A01 sans Git ; A06/A08 navigation tree ; A12 publications.
- B01/B03/B06/B07 conduite Nora ; B14 refus.
- S05 absence secrets ; S07 meta provider visible.
- Points d’observation Git : ref tip, PR number, merge SHA, D8 facts.

## Réserves & gates Morris

| Gate | Motif |
| --- | --- |
| GO freeze commit | Candidate SHA manquant |
| GO mise à disposition RECETTE | Objet Git/build identifiable |
| GO REAL sandbox WRITE | Mutations externes |
| GO Nora LIVE budget | Si test sémantique LIVE requis |
| UAT visuelle Morris | G5 différé — ne pas annoncer PASS G5 |

## Rollback / exit

- Pas de déploiement effectué → exit = conserver DEV dirty isolé.
- Après futur déploiement RECETTE : revert build + DB restore + désactiver App sandbox.

## Verdict préflight

**PREFLIGHT ONLY — NOT READY FOR RECETTE DEPLOYMENT.**
Candidat techniquement avancé ; freeze Git + gates Morris requis avant toute mise à disposition.
