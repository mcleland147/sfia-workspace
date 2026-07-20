# 65 — OPS1 Integration / DevOps Decision Pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `65-ops1-integration-devops-decision-pack.md` |
| **Compléments** | [`63`](./63-ops1-integration-devops-foundation.md) · [`64`](./64-ops1-local-controls-ci-and-evidence-contract.md) |
| **Statut** | décision pack **validé avec réserves** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) |
| **Gate validation** | `G-OPS1-DEVOPS-VAL` **consommé** — 2026-07-20 21:27:26 CEST |
| **Horodatage validation** | 2026-07-20 21:27:26 CEST |
| **Nombre de candidats** | 24 (`OPS1-DEVOPS-CAND-01…24`) |

> Les 24 décisions sont **`VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST`**.
> Validation ≠ ouverture CI, Delivery I1, live, MVP ou production. Gates futurs **distincts**.

---

## Synthèse

| Indicateur | Valeur |
|------------|--------|
| Décisions | 24 |
| Validées avec réserves | 24 |
| `AWAITING G-OPS1-DEVOPS-VAL` | **0** |
| CI implémentée | Non |
| Delivery I1 | Non ouvert |
| Réserves structurelles / différées / hors cycle | Maintenues (voir matrice `63`) |

---

## OPS1-DEVOPS-CAND-01 — Structure du repository OPS1

| Champ | Contenu |
|-------|---------|
| **Sujet** | Structure du repository OPS1 |
| **Proposition** | Conserver `projects/sfia-studio/app/**` comme Studio ; docs `NN-*.md` ; runtime OPS1 futur dans module dédié (ex. `projects/sfia-studio/runtime/`) distinct du harness POC ; état exec sous `.sfia-exec/<executionId>/`. |
| **Alternatives** | Tout fusionner dans `app/` · Réutiliser `harness/` comme runtime OPS1 sans frontière |
| **Justification** | Respecte AF-Option C et tech-arch ; évite confusion POC/OPS1 |
| **Impacts** | Clarté delivery ; ignore policies |
| **Risques** | Confusion harness=runtime |
| **Dette** | Migration harness ultérieure possible |
| **Réserve** | Ne pas créer les dossiers dans ce cycle |
| **Recommandation** | Adopter la structure candidate documentée |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-02 — Frontières Studio / runtime

| Champ | Contenu |
|-------|---------|
| **Sujet** | Frontières Studio / runtime |
| **Proposition** | Studio = cockpit UI/domaine ; runtime/runner = exécution gouvernée (contrats, paths, git wrapper) ; pas d’auto-GO UI. |
| **Alternatives** | Orchestrateur monolithique dans Next.js |
| **Justification** | Aligné décisions archi fonctionnelle + technique |
| **Impacts** | Séparation tests UI vs contrôles runtime |
| **Risques** | Fuite d’autorité vers UI |
| **Dette** | Adapters à concevoir en delivery |
| **Réserve** | — |
| **Recommandation** | Maintenir séparation stricte |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-03 — Emplacement SQLite

| Champ | Contenu |
|-------|---------|
| **Sujet** | Emplacement SQLite |
| **Proposition** | SQLite local non versionné sous `.sfia-exec/<executionId>/state/ops1.sqlite` (chemin exact figé à l’implémentation). |
| **Alternatives** | SQLite dans `app/` versionné · DB cloud |
| **Justification** | OPS1-TECH-CAND-12 ; pas de store Git opérationnel |
| **Impacts** | gitignore ; backup/purge |
| **Risques** | Commit accidentel DB |
| **Dette** | Outil admin local futur |
| **Réserve** | FD-CAND-15 indépendant |
| **Recommandation** | Adopter emplacement sous `.sfia-exec` |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-04 — Emplacement artefacts append-only

| Champ | Contenu |
|-------|---------|
| **Sujet** | Emplacement artefacts append-only |
| **Proposition** | `.sfia-exec/<executionId>/artifacts/` pour contrats, gateDecision, rapports, diffs, preuves, logs redacted. |
| **Alternatives** | Commit systématique des artefacts · stdout only |
| **Justification** | Preuves immuables corrélées hash/attempt |
| **Impacts** | Rétention ; exports Morris |
| **Risques** | Rewrite de preuves |
| **Dette** | Export sélectif versionné sous GO |
| **Réserve** | — |
| **Recommandation** | Adopter artifacts/ append-only |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-05 — Politique fichiers temporaires et `.gitignore`

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique fichiers temporaires et `.gitignore` |
| **Proposition** | Ignorer l’état runtime OPS1 sous `projects/sfia-studio/.sfia-exec/**` (règle root déjà appliquée) ; caches build/test déjà ignorés côté app ; conserver docs/code versionnés ; ne pas créer le dossier runtime dans le cycle documentaire. |
| **Alternatives** | Versionner worktrees exec · patterns `*.sqlite*` additionnels hors `.sfia-exec` |
| **Justification** | Évite bruit git et fuites ; aligné TECH-CAND-12/21 |
| **Impacts** | Preuve `git check-ignore` ; discipline cleanup sous GO |
| **Risques** | Commit runtime si règle retirée ; confusion `.sandbox` vs `.sfia-exec` |
| **Dette** | Ignore `.sfia-exec` **fermée avec preuve** (2026-07-20 21:16:34 CEST) ; cleanup procédural reste CANDIDATE |
| **Réserve** | Traitement `GO TREAT OPS1 DEVOPS RESERVATIONS` — ne vaut **pas** validation du CAND |
| **Recommandation** | Conserver la règle ; valider le CAND sous `G-OPS1-DEVOPS-VAL` |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-06 — Installation déterministe

| Champ | Contenu |
|-------|---------|
| **Sujet** | Installation déterministe |
| **Proposition** | `npm ci` dans `projects/sfia-studio/app` comme standard ; interdiction de modifier lockfile hors GO deps ; **pin Node Studio** à sélectionner explicitement (LTS recommandée candidate : alignement futur CI) via `engines.node` + éventuellement `.nvmrc` — **non inventé** dans ce cycle (Cas B : pas de preuve canonique Studio). |
| **Alternatives** | `npm install` libre · copier Node 20 Interv360 sans arbitrage · adopter harness `>=20` comme pin Studio |
| **Justification** | Lockfile présent ; Interv360 Node 20 et harness `>=20` = indices **non canoniques** pour `app/` |
| **Impacts** | Reproductibilité locale/CI ; matérialisation recommandée : `engines` + `.nvmrc` sous VAL/gate Node |
| **Risques** | Drift lockfile ; divergence local (observé `v24.16.0`) vs futur pin |
| **Dette** | Pin Node **TREATED — REMAINS OPEN** — Cursor **n’autorise pas** le choix automatique |
| **Réserve** | `package.json` non modifié ; aucune install |
| **Recommandation** | Adopter npm ci ; trancher Node sous `G-OPS1-DEVOPS-VAL` ou gate Node distinct |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-07 — Gestion des dépendances

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gestion des dépendances |
| **Proposition** | Ajout/maj deps uniquement sous GO Morris delivery/deps ; audit vulnerabilities (ex. postcss via Next) tracé en dette. |
| **Alternatives** | Upgrade Continu automatique |
| **Justification** | Gouvernance POC maintenu |
| **Impacts** | Sécurité supply-chain |
| **Risques** | CVE non traités |
| **Dette** | Dette moderate postcss ouverte |
| **Réserve** | — |
| **Recommandation** | Gel deps hors GO explicite |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-08 — Commandes locales socle

| Champ | Contenu |
|-------|---------|
| **Sujet** | Commandes locales socle |
| **Proposition** | Socle obligatoire avant delivery code : `npm ci`, `lint`, `typecheck`, `test`, `build`, `test:e2e`, `git diff --check`, **et** `git check-ignore` sur chemins `.sfia-exec` si artefacts runtime concernés ; revue secrets minimale manuelle tant que scanner différé. |
| **Alternatives** | Uniquement E2E · skip typecheck · exiger CI avant tout delivery |
| **Justification** | Commandes qualité EXISTS ; ignore `.sfia-exec` désormais EXISTS |
| **Impacts** | DoD qualité locaux — CI PR non préalable obligatoire à I1 |
| **Risques** | False sense si runtime non testé |
| **Dette** | Scripts agrégateurs candidats ; scanner outillé différé |
| **Réserve** | Traitement réserves 2026-07-20 21:16:34 CEST — CAND toujours AWAITING |
| **Recommandation** | Contractualiser le socle EXISTS + check-ignore |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-09 — Stratégie de tests

| Champ | Contenu |
|-------|---------|
| **Sujet** | Stratégie de tests |
| **Proposition** | Pyramide : unit EXISTS → integration runtime CANDIDATE (realpath/allowlist/symlink/hash/sqlite/locks/append-only/REPORT|METRICS_INCOMPLETE/remote/network deny) → E2E UI EXISTS ; fixture≠live ; live hors CI socle. Suites integration **non créées** ici. |
| **Alternatives** | E2E only · live in CI |
| **Justification** | Aligné E05–E15 / TECH-CAND |
| **Impacts** | Couverture contrôles runtime |
| **Risques** | Trous integration jusqu’à GO implémentation |
| **Dette** | `DEFERRED — DELIVERY I1 OR DEVOPS IMPLEMENTATION GATE` |
| **Réserve** | Aucun code/test créé (2026-07-20 21:16:34 CEST) |
| **Recommandation** | Valider pyramide ; implémenter sous GO distinct |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-10 — Stratégie CI PR candidate

| Champ | Contenu |
|-------|---------|
| **Sujet** | Stratégie CI PR candidate |
| **Proposition** | CI PR Studio : path filters `projects/sfia-studio/**` ; `contents: read` ; aucun secret ; forks sans credentials ; `npm ci` ; lint/typecheck/unit/build ; E2E selon stratégie ; doc/protected guard ; artefacts rétention courte ; cache npm scoped ; incomplete fail-closed. **Non implémentée.** Contrôles locaux suffisent pour ouvrir Delivery I1 si VAL+GO delivery ; CI requise pour PR readiness/intégration lot. |
| **Alternatives** | Réutiliser Interv360 CI · CI avec secrets GPT · bloquer I1 jusqu’à CI |
| **Justification** | OPS1-TECH-CAND-20 · BACKLOG-CAND-18 |
| **Impacts** | Qualité PR ; séquence gates claire |
| **Risques** | Scope creep workflow monorepo |
| **Dette** | `DEFERRED — GO IMPLEMENT OPS1 CI REQUIRED` |
| **Réserve** | Aucun `.github/**` modifié (2026-07-20 21:16:34 CEST) |
| **Recommandation** | Valider stratégie sous VAL ; YAML seulement après `GO IMPLEMENT OPS1 CI` |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-11 — Permissions CI

| Champ | Contenu |
|-------|---------|
| **Sujet** | Permissions CI |
| **Proposition** | `contents: read` minimal ; pas de `pull-requests: write` ni secrets ; forks sans credentials. |
| **Alternatives** | Permissions write pour commentaires |
| **Justification** | Moindre privilège |
| **Impacts** | Surface d’attaque |
| **Risques** | Escalade future |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Adopter least privilege |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-12 — Politique secrets

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique secrets |
| **Proposition** | Interdit secrets dans env/prompt/rapport/artefact/logs ; `.env*` ignoré (PARTIAL) ; scanner automatisé tree+diff avec codes retour, redaction, exclusions contrôlées, gestion faux positifs — **CANDIDATE** sous `GO IMPLEMENT OPS1 SECRET SCANNING`. Grep manuel ≠ scanner complet. |
| **Alternatives** | Secrets en variables repo pour E2E live · scanner sans gate |
| **Justification** | OPS1-TECH-CAND-04 |
| **Impacts** | Conformité ; preuve rapport scan |
| **Risques** | Fuite via artefacts ; faux positifs |
| **Dette** | `DEFERRED — DISTINCT IMPLEMENTATION GATE` |
| **Réserve** | Aucun outil installé (2026-07-20 21:16:34 CEST) |
| **Recommandation** | Fail-closed ; outiller seulement sous GO scanning |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-13 — Politique réseau

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique réseau |
| **Proposition** | Deny by default runner ; CI socle sans besoin egress fournisseur ; live = exception gate Morris. |
| **Alternatives** | Network on by default |
| **Justification** | OPS1-TECH-CAND-03 |
| **Impacts** | Isolation |
| **Risques** | Tests live mal classés |
| **Dette** | Contrôle technique OS limité (dette sandbox) |
| **Réserve** | Worktree ≠ sandbox forte rappelée |
| **Recommandation** | Adopter deny default |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-14 — Politique cache CI

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique cache CI |
| **Proposition** | Cache npm scoped au workflow Studio ; pas de cache partagé forks ; invalidation sur lockfile. |
| **Alternatives** | Cache global monorepo permissif |
| **Justification** | Perf vs isolation |
| **Impacts** | Temps jobs |
| **Risques** | Poisoning cache |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Cache npm scoped only |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-15 — Politique artefacts CI

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique artefacts CI |
| **Proposition** | Uploader rapports test/lint en artefacts courte durée ; redaction ; pas de sqlite/runtime. |
| **Alternatives** | Artefacts illimités |
| **Justification** | Preuve PR |
| **Impacts** | Stockage Actions |
| **Risques** | Fuite données |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Rétention courte + redaction |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-16 — Politique rétention locale runtime

| Champ | Contenu |
|-------|---------|
| **Sujet** | Politique rétention locale runtime |
| **Proposition** | Conserver `.sfia-exec/<id>` jusqu’à revue/cleanup GO (`OPS1-TECH-CAND-21`) ; purge explicite ; pas de TTL silencieux détruisant preuves requises. |
| **Alternatives** | Purge auto 24h |
| **Justification** | Traçabilité |
| **Impacts** | Disque local |
| **Risques** | Perte preuves |
| **Dette** | Procédure cleanup |
| **Réserve** | — |
| **Recommandation** | Cleanup seulement sous GO |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-17 — Contrôle fichiers protégés

| Champ | Contenu |
|-------|---------|
| **Sujet** | Contrôle fichiers protégés |
| **Proposition** | Denylist : `method/**`, `prompts/**`, `.github/**` (hors GO CI), `01`–`62` hors cycles autorisés, secrets, lockfiles non allowlistés, Campus360 hors contrat. |
| **Alternatives** | Allow all under projects/ |
| **Justification** | Scénario + tech-arch |
| **Impacts** | Gouvernance |
| **Risques** | Modification opportuniste |
| **Dette** | Script guard CANDIDATE |
| **Réserve** | — |
| **Recommandation** | Fail-closed protected paths |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-18 — Contrôle Git remote

| Champ | Contenu |
|-------|---------|
| **Sujet** | Contrôle Git remote |
| **Proposition** | Runner : deny push/fetch-write/PR/merge ; preuves négatives ; humains seuls sous GO. |
| **Alternatives** | Auto-push branche scenario |
| **Justification** | OPS1-TECH-CAND-26 · PN-09 |
| **Impacts** | Sécurité |
| **Risques** | Wrapper incomplet |
| **Dette** | Implémentation delivery |
| **Réserve** | — |
| **Recommandation** | Bloquer remote par défaut |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-19 — Gestion `REPORT_INCOMPLETE`

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gestion `REPORT_INCOMPLETE` |
| **Proposition** | Rapport STRICT : incomplete ⇒ non SUCCESS ; pas retry auto ; nouvel attempt = Morris (`OPS1-TECH-CAND-17`). |
| **Alternatives** | COMPLETED soft |
| **Justification** | Invariant validé tech-arch |
| **Impacts** | DoD preuves |
| **Risques** | Masquage échecs |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Enforcer REPORT_INCOMPLETE |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-20 — Gestion `METRICS_INCOMPLETE`

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gestion `METRICS_INCOMPLETE` |
| **Proposition** | Métriques obligatoires absentes ⇒ `METRICS_INCOMPLETE` + cause ; aligné E13-02 / BACKLOG-CAND-13. |
| **Alternatives** | Omettre section metrics |
| **Justification** | Revue backlog corrections |
| **Impacts** | Observabilité |
| **Risques** | FinOps incomplets (FD-CAND-15) |
| **Dette** | Seuils numériques absents |
| **Réserve** | FD-CAND-15 OPEN |
| **Recommandation** | Exiger état explicite |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-21 — Gates vers Delivery I1

| Champ | Contenu |
|-------|---------|
| **Sujet** | Gates vers Delivery I1 |
| **Proposition** | I1 nécessite : `G-OPS1-DEVOPS-VAL` ; socle contrôles **locaux** accepté (IGNORE `.sfia-exec` inclus) ; DoR backlog ; allowlist lot ; rollback ; **GO Delivery I1** distinct. CI PR **non** prérequis automatique de I1 si contrôles locaux suffisent. Suites runtime / scanner / CI restent gates séparés selon besoin du lot. |
| **Alternatives** | Bloquer I1 jusqu’à CI implémentée · ouvrir I1 dès docs écrits |
| **Justification** | BACKLOG-CAND-17 · TECH-CAND-24 |
| **Impacts** | Séquencement sûr |
| **Risques** | Ouverture prématurée ; confusion CI vs locaux |
| **Dette** | Suites runtime différées |
| **Réserve** | I1 non ouvert (2026-07-20 21:16:34 CEST) |
| **Recommandation** | Maintenir GO Delivery I1 distinct |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-22 — Critères d’ouverture CI implémentée

| Champ | Contenu |
|-------|---------|
| **Sujet** | Critères d’ouverture CI implémentée |
| **Proposition** | Créer workflow Studio seulement après `G-OPS1-DEVOPS-VAL` **et** `GO IMPLEMENT OPS1 CI` ; YAML minimal conforme CAND-10/11 (path filters, read-only, npm ci, lint/typecheck/unit/build, E2E selon stratégie, doc-guard, artefacts courts, cache scoped, fail-closed incomplete). |
| **Alternatives** | Implémenter CI dans le cycle de validation doc |
| **Justification** | Séparation doc vs impl |
| **Impacts** | Contrôle changement `.github/**` |
| **Risques** | PR CI trop large |
| **Dette** | `DEFERRED — GO IMPLEMENT OPS1 CI REQUIRED` |
| **Réserve** | Aucun YAML (2026-07-20 21:16:34 CEST) ; traitement réserves ≠ implémentation |
| **Recommandation** | Exiger GO implémentation CI séparé |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-23 — Rollback

| Champ | Contenu |
|-------|---------|
| **Sujet** | Rollback |
| **Proposition** | Docs : revert ; runtime : delete worktree sous GO ; CI : disable workflow ; delivery : revert PR ; jamais force-push main. |
| **Alternatives** | Reset hard partagé |
| **Justification** | Sécurité Git |
| **Impacts** | Récupération |
| **Risques** | Manipulation historique |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Adopter rollback non destructif |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

## OPS1-DEVOPS-CAND-24 — Dette et réserves

| Champ | Contenu |
|-------|---------|
| **Sujet** | Dette et réserves |
| **Proposition** | Après `GO TREAT OPS1 DEVOPS RESERVATIONS` (2026-07-20 21:16:34 CEST) : ignore `.sfia-exec` = `CLOSED — EVIDENCE PROVIDED` ; Node pin / stack-fournisseur = `TREATED — REMAINS OPEN` ; scanner / suites / CI = différés avec gates ; worktree≠sandbox = `ACCEPTED STRUCTURAL RESERVATION` ; FD-CAND-15 et UX-R01…R04 = `OUTSIDE DEVOPS CYCLE`. Live/delivery/MVP fermés. |
| **Alternatives** | Lever réserves implicitement · inventer pin Node |
| **Justification** | Cohérence packs validés + preuves |
| **Impacts** | Transparence gates futurs |
| **Risques** | Présenter différé comme fermé |
| **Dette** | Voir matrice §16 doc 63 |
| **Réserve** | Traitement ≠ validation des 24 CAND |
| **Recommandation** | Conserver statuts à preuve ; valider pack sous `G-OPS1-DEVOPS-VAL` |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL — Morris — 2026-07-20 21:27:26 CEST` |

---

## Traceabilité vers sources

| Candidat | Sources principales |
|----------|---------------------|
| 01–05 | `57`–`58` · TECH-CAND-01/12/21 |
| 06–09 | `app/package.json` · TECH-CAND-20 · E15 |
| 10–16 | TECH-CAND-03/04/20/26 · BACKLOG-CAND-18 |
| 17–20 | `55` · TECH-CAND-05/06/17/26 · E13 |
| 21–24 | BACKLOG-CAND-17/18 · TECH-CAND-24 · réserves FD/UX |

---

## Anti-claims

Interdit de conclure de ce pack :

- `FULL CI IMPLEMENTED`
- `READY FOR DELIVERY` / `READY FOR IMPLEMENTATION`
- `SANDBOX STRONG ISOLATION`
- `STACK FINALIZED`
- `LIVE READY`
- levée de `FD-CAND-15` ou `UX-R01…R04`
- ignore `.sfia-exec` fermé ⇒ validation DevOps ou ouverture CI/Delivery

---

## Gate Morris consommé

`G-OPS1-DEVOPS-VAL` — **VALIDATION AVEC RÉSERVES** (2026-07-20 21:27:26 CEST).

Décisions futures **distinctes** toujours requises : `GO IMPLEMENT OPS1 CI` · `GO IMPLEMENT OPS1 SECRET SCANNING` · `GO DELIVERY I1` · gate Node · gates FinOps/UX/live.

---

*Pack validé avec réserves — 2026-07-20 21:27:26 CEST — 24 décisions ; 0 AWAITING ; CI/Delivery non ouverts.*
