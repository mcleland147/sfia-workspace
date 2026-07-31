# SFIA Review Pack — FULL — V3.1-D1 Capitalization Draft PR Publication

## Niveau
FULL — obligatoire

## Content coverage
| Exigence | Statut |
|----------|--------|
| gate Morris complete | yes |
| CKC complete | yes |
| handoff source complete | yes |
| Git Truth complete | yes |
| document 05 full content | yes |
| document hash complete | yes |
| approved PR body complete | yes |
| publication body complete | yes |
| body delta complete | yes |
| staged diff complete | yes |
| commit proof complete | yes |
| push proof complete | yes |
| remote branch proof complete | yes |
| PR metadata complete | yes |
| remote PR body complete | yes |
| CI initial state complete | yes |
| reserve complete | yes |
| boundaries complete | yes |
| final Git state complete | yes |
| temporary report full content | yes |
| synthesis only | no |
| review pack verdict | complete |

---

## Métadonnées
| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-31 07:49:02 CEST (+0200) |
| Cycle | 7 — Intégration / DevOps |
| Profil | Standard |
| Typologie | DOC |
| Gate Morris | `GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CAPITALIZATION REX — USE APPROVED DOCUMENTATION-ONLY PACKAGE — ONE FILE DOCUMENT 05 ONLY — TARGET MAIN — ACCEPTED MINOR DOCUMENTATION RESERVE EXPLICIT — NO MERGE — NO METHOD PROMOTION — NO D2 — NO UI — NO CREATECYCLE` |
| Date GO | 2026-07-31 07:41 CEST |
| CKC | cycle 7 fallback · method-candidate · `executionAuthority=false` |

## Handoff source
tip `7f095ca595c9fb8a7b5f13b249a27e6c7d1d1e3b` · blob `c924b521f0b5a6477cd714a41946afc48aabbb31`

## Git Truth initial
PASS — capitalization @ b553f0aa… · remote/PR absents · doc untracked · hash `6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577`

## Document 05 complet

```markdown
# V3.1-D1 — Capitalisation / REX

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-31 06:52:41 CEST (+0200) |
| **Cycle projet** | 15 — Capitalisation / REX |
| **Profil SFIA** | Capitalization |
| **Profondeur** | Standard |
| **Typologie** | CAPA |
| **Gate Morris consommé** | `GO CAPITALIZATION / REX SFIA STUDIO V3.1-D1 — CAPTURE CATALOG DELIVERY QA PR MERGE POST-MERGE ARCHIVE AND CLEANUP LESSONS — KEEP OBSERVATIONS RECOMMENDATIONS AND MORRIS DECISIONS DISTINCT — NO METHOD PROMOTION WITHOUT MORRIS GO — NO D2 — NO UI — NO CREATECYCLE` (2026-07-31 06:43 CEST) |
| **Branche** | `capitalization/sfia-studio-v3-1-d1-rex` |
| **Base** | `main` @ `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e` |
| **CKC** | fallback carte synthétique + méthode §4.15 · method-candidate · consommation obligatoire · niveau P2 / léger · `executionAuthority=false` |
| **Template capitalisation** | `prompts/templates/08-capitalize-method-asset.md` lu — **non applicable** ici (promotion d’actif méthode) ; structure alignée sur §4.15 (faits ≠ reco ≠ décision) |
| **Statut du document** | `CAPITALIZATION COMPLETE LOCALLY — DOCUMENT 05 READY FOR DOCUMENTARY PR READINESS — NO PUBLICATION` |
| **Publication projet** | **non autorisée** par ce gate (commit / push / PR soumis à un GO distinct) |
| **Méthode / baseline** | **aucune promotion** |
| **D2 / D3 / UI / CreateCycle** | **non autorisés** |

## B. Objet et périmètre

### Objectif

Capturer les apprentissages réutilisables du lot **V3.1-D1 Cycle Type Catalog Runtime Contract**, depuis le cadrage jusqu’au cleanup post-merge, en séparant strictement :

- observations factuelles ;
- enseignements ;
- recommandations candidates ;
- décisions Morris déjà validées ;
- options futures non décidées.

### Phases couvertes

Cadrage V3 → conception V3.1 → architecture catalogue (CAT) → Delivery D1 → QA Critical FAIL → Delivery corrective → QA revalidation PASS → QA-G3 Morris → PR readiness → publication → remote review → ready-for-review → merge → CI post-merge → blocages worktree → archivage contrôlé → cleanup final → handoffs successifs.

### Phases explicitement exclues

- Ouverture ou conception de **V3.1-D2** (resolver / QualifyCycle bridge).
- Ouverture ou conception de **V3.1-D3** (UI / Figma / vertical-slice UX).
- CreateCycle, persistance, LPS, epistemic UI.
- Promotion method-candidate → baseline.
- Publication Git du présent document (GO distinct requis).
- Recopie des archives locales non versionnées (seuls événement et hashes SHA-256 cités depuis le handoff final).

## C. Résumé exécutif

V3.1-D1 a livré et intégré sur `main` le **contrat runtime** des quinze types de cycle SFIA Studio :

- quinze identifiants stables `cyc:*` (CAT-I1), dont `cyc:capitalization` conservé ;
- quatre mappings CKC **detailed** avec fallback synthétique ;
- onze mappings CKC **synthetic** ;
- métadonnées fail-closed (`executionAuthority=false`, doctrineStatus, unavailableBehavior) ;
- validateur multi-issues sans throw ;
- suite de tests renforcée (46) + suite `oa/cycle` (94) + suite Studio (827) après correctif ;
- package de **13 fichiers** intégré via PR **#296** (merge `b553f0aa…`).

Le lot a traversé une QA Critical légitimement FAIL, un correctif **limité au validateur**, une revalidation complète, une publication GitHub gouvernée, et un post-merge rendu difficile par des contraintes de worktrees locaux — résolues par archivage byte-for-byte puis cleanup sans force.

**Valeur :** un contrat produit exécutable et testé, sans ouvrir D2/D3, sans promouvoir la méthode.

## D. Chronologie vérifiable

| # | Étape | Statut | Source principale | Décision Morris | Observation / leçon principale |
|---|-------|--------|-------------------|-----------------|--------------------------------|
| 1 | Cadrage V3 (doc 12) | Adopté | `…/framing/12-v3-cycle-recommendation-cadrage.md` | D-V3-01…08 | Intention produit et gates avant Delivery |
| 2 | Conception V3.1 (doc 13) | Adopté | `…/framing/13-v3-1-profile-qualification-functional-design.md` | Suite D-V3 | Qualification profil / routing avant catalogue |
| 3 | Architecture catalogue (doc 14) | Adopté | `…/framing/14-….md` | D-V3.1-CAT-01…08 | IDs + CKC obligatoire + slicing D1→D2→D3 |
| 4 | Delivery D1 initiale | Implémenté | `cycleTypeCatalog.ts` · README D1 | GO Delivery | Contrat + tests positifs ; validateur incomplet |
| 5 | QA Critical | **FAIL** | `01-qa-validation-report.md` | GO QA | 34 PASS / 12 FAIL ; R-QA-01…09 ouvertes |
| 6 | Delivery corrective | Corrigé | `02-corrective-delivery-report.md` | GO corrective | Correctif **validateur seul** ; données/API stables |
| 7 | QA revalidation | **PASS** | `03-qa-revalidation-report.md` | — | 46/46 · 94/94 · 827/827 ; R-QA CLOSED |
| 8 | QA-G3 Morris | **PASS** | handoff / README D1 | GO QA-G3 ACCEPT | Acceptation humaine des preuves |
| 9 | PR readiness | READY FOR PR | `04-pr-readiness-report.md` | GO PR readiness | Package 13 fichiers ; réserve README tracée |
| 10 | Publication | Publié | commits `9123252…` · `e2e8984…` · PR #296 | GO commit/push/PR | Deux commits code/docs séparés |
| 11 | Remote review | PASS w/ reserves | handoff cycle 13 | — | CI pré-merge verte ; réserve mineure OK |
| 12 | Ready-for-review | Non-draft | PR #296 | GO ready | Body checkbox CI ; wording draft ensuite stale |
| 13 | Merge | MERGED | merge `b553f0aa…` | GO merge | Parents `3e8a437…` + `e2e8984…` |
| 14 | CI post-merge | PASS | run `30585808183` | — | Distinct de CI PR `30577786752` |
| 15 | Post-merge #1 | **BLOCKED** | handoff | GO post-merge | `main` verrouillée par worktree externe stale |
| 16 | Post-merge #2 | **BLOCKED** | handoff | GO resolve WT | Deux fichiers untracked bloquent remove |
| 17 | Archivage | Vérifié | handoff final | GO archive | `cp -p` + SHA-256 + `cmp` puis `rm` exact |
| 18 | Cleanup final | COMPLETE | handoff final | (même GO) | WT remove sans force ; `branch -d` ; remote delete |
| 19 | Capitalisation | LOCAL ONLY | **ce document** | GO capitalization | Aucune publication projet |

## E. Décisions Morris consommées

| Décision | Source | Conséquence D1 | Statut | N’autorise pas |
|----------|--------|----------------|--------|----------------|
| D-V3-01…08 | doc `12` | Cadre produit / gates amont | Adoptées | Delivery D2/D3, CreateCycle |
| D-V3.1-CAT-01 = CAT-S1 | doc `14` | Catalogue = projection des 15 cycles | Adoptée | Runtime hors contrat |
| D-V3.1-CAT-02 = CAT-I1 | doc `14` | 15 IDs `cyc:*` ; `cyc:capitalization` inchangé | Adoptée | Renommage ID sans gate |
| D-V3.1-CAT-03 | doc `14` | Noyau minimal + CKC core | Adoptée | Sur-modélisation TS |
| D-V3.1-CAT-04 | doc `14` | Alias contrôlés | Adoptée | Alias libres / recyclage |
| D-V3.1-CAT-05 | doc `14` | Changements structurants → Morris | Adoptée | Mutation structurante implicite |
| D-V3.1-CAT-06 | doc `14` | ID neutre / labels localisés | Adoptée | ID localisé comme clé |
| D-V3.1-CAT-07 | doc `14` | CKC obligatoire dans le produit candidate | Adoptée | Baseline méthode globale ; `executionAuthority=true` |
| D-V3.1-CAT-08 | doc `14` | Slicing D1 puis D2 puis D3 | Adoptée | Fusion D1/D2/D3 |
| QA-G3 = PASS | GO QA-G3 | R-QA-01…09 CLOSED ; PR readiness | Accepté | Merge automatique ; D2 |
| Publication PR #296 | GO commit/push/PR | Draft PR ouverte | Exécuté | Merge sans GO merge |
| Ready-for-review | GO ready | `isDraft=false` | Exécuté | Merge |
| Merge PR #296 | GO merge | `b553f0aa…` sur main | Exécuté | Cleanup forcé ; D2 |
| Archivage untracked | GO archive | Deux fichiers préservés hors repo | Exécuté | `git clean` ; force |
| Cleanup WT + branches | GO archive/cleanup | WT retiré ; Delivery locale/distante absentes | Exécuté | `-D` ; force push ; prune forcé |
| Réserve README | PR readiness + reviews | Condensation acceptée | **ACCEPTED — NOT LIFTED** | Assimilation à D2 ; levée implicite |

Aucune nouvelle décision n’est créée par ce document.

## F. Observations factuelles

Observation — Les contrats amont (docs 12/13/14) étaient nécessaires pour borner une Delivery D1 sans dérive vers resolver ou UI.

Observation — Les tests Delivery initiaux couvraient insuffisamment les invariants **négatifs** du validateur (bornes, doctrine, alias croisés, version).

Observation — La QA indépendante a transformé une suite apparemment verte en **FAIL légitime** (34 PASS / 12 FAIL après renforcement).

Observation — Le correctif a pu rester limité à `validateCycleTypeCatalog` ; données catalogue, API publique et tests QA sont restés stables.

Observation — La revalidation a fermé R-QA-01 à R-QA-09 sans réécriture des oracles.

Observation — La publication en **deux commits** a conservé la séparation code/tests (`9123252…`) et documentation (`e2e8984…`).

Observation — La CI distante a confirmé le package sur les SHAs publiés (pré-merge `30577786752` sur `e2e8984…` ; post-merge `30585808183` sur `b553f0aa…`).

Observation — Le post-merge a distingué CI de PR et CI de `main` (événements et runs distincts).

Observation — Le cleanup local a révélé un worktree `main` externe **stale** (HEAD pré-merge), bloquant le switch/FF.

Observation — L’inspection tracked/staged/untracked a empêché la suppression d’un worktree contenant deux fichiers non suivis.

Observation — Les hashes SHA-256 et `cmp` byte-for-byte ont permis un archivage sûr avant suppression des originaux.

Observation — Le cleanup final a supprimé la branche source avec `git branch -d` puis delete remote **sans** perdre l’historique (commits présents via merge).

Observation — La réserve de condensation du framing README reste traçable via docs 12/13/14, rapports 01–04, PR #296 et handoffs.

## G. Ce qui a bien fonctionné

### Cadrage / conception / architecture

- Décisions CAT explicites avant code.
- Slicing D1/D2/D3 adopté avant Delivery.
- CKC obligatoire dans le produit avec `executionAuthority=false`.

### Delivery

- Contrat pur (ops pures, freezes, pas d’I/O runtime).
- Export public minimal via `index.ts`.
- Frontières D2/D3 documentées dans le README D1.

### QA

- Renforcement indépendant des oracles négatifs.
- FAIL honnête plutôt que greenwashing.
- Correctif minimal + revalidation complète.

### PR readiness

- Package unique cohérent (13 fichiers).
- Réserve documentaire explicite, non dissimulée.
- Séparation commit/push/PR du verdict READY FOR PR.

### Publication et review

- Deux commits logiques.
- Remote review avant ready-for-review.
- CI pré-merge verte avant merge.

### Merge

- Merge commit explicite (parents vérifiables).
- Arbre merge ≡ head source.

### Post-merge

- Distinction CI PR / CI main.
- Arrêt immédiat sur worktree non propre (pas de force).

### Archivage et cleanup

- Archive hors repository.
- Preuve d’identité avant `rm`.
- Worktree remove sans `--force`.
- `git branch -d` uniquement.

### Handoff ChatGPT

- Handoffs successifs sur `sfia/review-handoff` avec tip/blob vérifiés.
- Continuité de preuve entre cycles 14 et 15.

## H. Frictions et écarts rencontrés

| Friction | Nature | Échec produit ? |
|----------|--------|-----------------|
| Validateur initial incomplet | Dette technique D1 découverte en QA | Non — détecté avant merge |
| 12 tests négatifs ajoutés en QA | Effort QA > Delivery initiale | Non — qualité accrue |
| Review packs Full volumineux | Friction opérationnelle | Non |
| Condensation framing README | Perte partielle de découvrabilité | Non — réserve acceptée |
| Checkbox CI body devenue stale | Artefact GitHub | Non — corrigée avant ready |
| Wording « draft PR » stale après transition | Artefact GitHub | Non — corrigé avant merge |
| Enchaînement de plusieurs gates GitHub | Charge gouvernance | Non — intentionnel |
| Worktree `main` externe stale | Environnement local | Non — cleanup bloqué à raison |
| Untracked bloquant remove | Environnement local | Non — données préservées |
| Cycle d’archivage supplémentaire | Friction cleanup | Non — preuve renforcée |
| État distant ≠ contraintes workspaces locaux | DevOps local | Non |

## I. Métriques et preuves

| Métrique | Valeur |
|----------|--------|
| Entrées catalogue | 15 |
| CKC detailed / synthetic | 4 / 11 |
| QA renforcée avant correctif | **34 PASS / 12 FAIL** |
| Après correctif / revalidation | **46/46** · **94/94** · **827/827** |
| typecheck / lint / build | PASS |
| Fichiers PR #296 | 13 |
| Commits source | `91232520440b77fe8200427f3321c7ff0454ad24` · `e2e898405c0a555573187e04dd6c3de777595f19` |
| Diff intégré | +3667 / −155 |
| Merge commit | `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e` |
| Parents | `3e8a4374405dce98866e35fb60c5c7329701f191` · `e2e898405c0a555573187e04dd6c3de777595f19` |
| CI pré-merge | run `30577786752` — PASS (event `pull_request`, head `e2e8984…`) |
| CI post-merge | run `30585808183` — PASS (event `push`, head `b553f0aa…`) |
| Archives (SHA-256) | `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309` · `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb` |
| Handoff post-cleanup | tip `35eae1355d6363748622fd812223f3b6d6103aa1` · blob `01fd5e748e02b065f562668707d4de9ab606dc30` |

Sources code/tests : `app/lib/oa/cycle/domain/cycleTypeCatalog.ts` · `app/lib/oa/cycle/index.ts` · `app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`.

## J. Enseignements

Enseignement — **Produit** : un contrat runtime catalogue + mapping CKC peut être livré sans resolver ni UI, à condition que les frontières D2/D3 soient adoptées **avant** Delivery.

Enseignement — **Delivery** : une suite locale verte sur chemins nominaux n’établit pas la couverture des invariants négatifs du validateur.

Enseignement — **QA** : l’indépendance QA (nouveaux oracles) convertit des défauts latents en FINDING actionnables avant publication.

Enseignement — **QA** : si les données de production sont conformes, le correctif doit cibler le validateur — pas réécrire le catalogue ni les tests pour « faire passer ».

Enseignement — **Git / PR** : deux commits logiques (code/tests vs docs) facilitent la revue et la traçabilité.

Enseignement — **Git / PR** : le body PR est un artefact gouverné ; les transitions d’état (draft → ready → merge) rendent des formulations stale.

Enseignement — **Post-merge** : CI PR ≠ CI main ; les deux doivent être vérifiées séparément.

Enseignement — **Worktrees** : `main` active dans un autre worktree bloque switch/FF ; l’inspection doit précéder toute mutation.

Enseignement — **Worktrees** : untracked ≠ « temporaire jetable » ; absence de preuve d’identité interdit remove.

Enseignement — **Documentation** : condenser un README en index vivant exige une réserve explicite et des sources de conservation.

Enseignement — **Handoff** : tip/blob distants successifs permettent de reprendre un cleanup Critical sans perdre le fil épistémique.

Enseignement — **Automatisation** : les contrôles répétés (Truth Check, safety gates, hashes) sont automatisables ; l’arbitrage (merge, archivage, promotion) ne l’est pas.

## K. Pratiques réutilisables

Pratique candidate réutilisable — Contrat fonctionnel / architecture (docs 12–14) avant implémentation runtime.

Pratique candidate réutilisable — Découpage D1 / D2 / D3 adopté avant code.

Pratique candidate réutilisable — QA indépendante avec oracle négatif avant PR.

Pratique candidate réutilisable — Correctif minimal (validateur) sans réécriture du contrat de données.

Pratique candidate réutilisable — Revalidation complète après correctif (mêmes commandes, mêmes oracles).

Pratique candidate réutilisable — Package PR en deux commits logiques.

Pratique candidate réutilisable — Remote review avant ready-for-review.

Pratique candidate réutilisable — Body GitHub traité comme artefact gouverné (checklist + wording).

Pratique candidate réutilisable — Distinction CI PR / CI main.

Pratique candidate réutilisable — Cleanup conditionné à l’ancestry (`rev-list` source..main = 0).

Pratique candidate réutilisable — `git branch -d` sans `-D`.

Pratique candidate réutilisable — Inspection tracked / staged / untracked avant `git worktree remove`.

Pratique candidate réutilisable — Archivage `cp -p` + SHA-256 + `cmp` avant suppression d’originaux non versionnés.

Pratique candidate réutilisable — Handoff Git canonique (`sfia/review-handoff`) à chaque clôture de cycle.

Ces pratiques restent **candidates** — elles ne sont ni baseline officielle, ni doctrine validée, ni règle de méthode adoptée.

## L. Anti-patterns observés ou évités

| Anti-pattern | Statut dans V3.1-D1 |
|--------------|---------------------|
| Suite locale verte = QA suffisante | Évité (QA FAIL légitime) |
| Corriger les données catalogue alors que le défaut est dans le validateur | Évité |
| Réécrire les tests pour faire passer le correctif | Évité |
| Fusionner D1/D2/D3 | Évité (CAT-08) |
| Mapping CKC = resolver | Évité |
| Merger sans remote review | Évité |
| Confondre ready-for-review et autorisation de merge | Évité |
| Supprimer branche avant CI post-merge | Évité |
| Supprimer worktree contenant untracked | Évité (STOP) |
| Force / clean / reset hard / branch -D | Évité |
| Ignorer réserves après merge | Évité (réserve maintenue) |
| Transformer recommandation en décision Morris | Évité (ce document) |

## M. Analyse de l’automatisation (L0–L5)

| Action | Niveau observé | Répétable | Soumis à Morris | Garde-fous | Risque si sur-automatisé |
|--------|----------------|-----------|-----------------|------------|--------------------------|
| Contrôles Git / CI | L1–L2 | Oui | Non (lecture) | Truth Check, SHAs attendus | Faux PASS si SHA ignoré |
| Validation invariants (tests) | L2 | Oui | Non pour rejeu | Oracles figés | Greenwashing si oracles édités |
| Génération rapports | L2–L3 | Partiel | Contenu / verdict | Templates + sources | Synthèse sans preuve |
| Publication handoff | L3 borné | Oui | GO implicite cycle | Un fichier, tip/blob | Pollution handoff |
| Modification body PR | L2–L3 | Oui | GO explicite | Diff body borné | Wording non gouverné |
| Ready-for-review | L3 | Oui | GO explicite | État draft | Confusion avec merge |
| Merge | L0–L3 | Technique oui | **GO merge** | Method, SHA head | Merge non autorisé |
| Archivage fichiers | L1–L2 | Oui | **GO archive** | hashes + cmp | Perte données |
| Suppression worktree | L1 | Oui | Après gate clean | no `--force` | Destruction locale |
| Cleanup branche | L1–L3 | Oui | Après safety gate | `-d` only | Perte ref utile |

**Conclusion :** automatiser l’exécution répétable, jamais l’arbitrage structurant. Aucun L5 global n’est recommandé.

## N. Recommandations candidates

Recommandation candidate — Renforcer les tests négatifs du validateur **dès** la Delivery initiale (pas seulement en QA).

Recommandation candidate — Formaliser une vérification du body PR après chaque changement d’état (draft / ready / merge GO).

Recommandation candidate — Améliorer la découvrabilité du framing README (liens vers 12/13/14) sans restaurer toute la duplication historique.

Recommandation candidate — Conserver la séparation CI PR / CI main dans les checklists post-merge.

Recommandation candidate — Vérifier les worktrees dès le pre-check post-merge (`git worktree list`).

Recommandation candidate — Détecter les contenus non suivis avant de planifier le cleanup.

Recommandation candidate — Conserver un pattern d’archive byte-for-byte pour fichiers non versionnés utiles.

Recommandation candidate — Réduire la duplication des review packs Full tout en préservant les preuves complètes (index + annexes).

Recommandation candidate — Conserver un lien explicite entre docs 12/13/14, rapports 01–05 et PR #296 dans les index.

Aucune de ces recommandations n’est appliquée dans ce cycle.

## O. Decision pack futur

| ID | Question | Observation source | Bénéfice | Dette potentielle | Option simple | Gate Morris requis | Statut |
|----|----------|--------------------|----------|-------------------|---------------|--------------------|--------|
| D-REX-01 | Publier le document 05 sur `main` ? | Capitalisation locale complète | Traçabilité Git | Revue doc | Documentation-only PR | GO PR readiness + commit/push/PR | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-02 | Mettre à jour README D1 / framing / backlog pour référencer 05 ? | Index vivant | Découvrabilité | Toucher README déjà condensé | Liens minimalistes | GO doc index | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-03 | Capitaliser le pattern d’archivage sécurisé dans la méthode ? | Cleanup Critical | Réutilisation | Promotion prématurée | Note candidate séparée | GO capitalisation méthode | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-04 | Créer un contrôle L1 body PR stale ? | Checkbox / wording stale | Moins d’erreurs GitHub | Outillage | Checklist manuelle d’abord | GO tooling | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-05 | Améliorer le format des review packs Full ? | Volume packs | Lisibilité | Perte de preuve | Structure index+annexes | GO process | **NOT DECIDED — MORRIS DECISION REQUIRED** |
| D-REX-06 | Ouvrir une étude V3.1-D2 ? | CAT-08 slicing | Suite produit | Scope resolver | Étude seule, sans Delivery | GO cadrage/étude D2 **distinct** | **NOT DECIDED — MORRIS DECISION REQUIRED** |

D-REX-06 n’est **pas** une recommandation automatique d’ouverture D2.

## P. Registre des réserves

### Bloquantes

Aucune pour la clôture technique D1 (sauf découverte nouvelle hors périmètre de ce document).

### Majeures

Aucune validée actuellement.

### Mineures

| Réserve | Statut |
|---------|--------|
| Condensation du framing README (index vivant) | **ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED** |

Conservation : docs 12, 13, 14 ; rapports V3.1-D1 01–04 ; PR #296 ; handoffs successifs ; ce document 05.

Cette réserve ne bloque pas la capitalisation ; elle n’est pas corrigée ici ; elle n’est pas assimilée à D2.

### Hors périmètre D1

Resolver orchestré · QualifyCycle bridge · exposition vertical-slice · UI · Figma · CreateCycle · persistance.

### Environnementales résolues

Worktree `main` stale retiré sans force · fichiers non suivis archivés (hashes ci-dessus) · branche Delivery locale/distante absentes.

## Q. Anti-claims

- D1 fermé ≠ D2 ouvert
- Catalogue runtime ≠ mécanisme CKC complet / resolver
- Mapping statique ≠ résolution orchestrée
- Quinze IDs ≠ CycleInstance
- CKC obligatoire dans le produit candidate ≠ baseline méthode globale
- QA PASS ≠ zero bug
- CI PASS ≠ validation produit end-to-end
- Merge ≠ capitalisation publiée
- Capitalisation locale ≠ décision Morris
- Pratique candidate ≠ méthode adoptée
- Réserve acceptée ≠ réserve levée
- Branche supprimée ≠ historique supprimé
- Archive locale ≠ source de vérité Git
- Pas de PRODUCT READY / RUN READY / IAM READY / AGENT READY / CUTOVER AUTHORIZED

## R. Recommandation de suite

**Une seule étape immédiate :** PR readiness **documentaire** du document 05 (revue contenu, traçabilité, distinctions épistémiques, réserve) — sans commit, push ni PR tant qu’un GO Morris distinct ne l’autorise.

Ne pas ouvrir D2 comme étape automatique.

## S. Gate suivant candidat

```
GO PR READINESS SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
REVIEW DOCUMENT 05 CONTENT TRACEABILITY OBSERVATIONS RECOMMENDATIONS DECISIONS AND RESERVES —
PREPARE DOCUMENTATION-ONLY PUBLICATION PACKAGE —
NO COMMIT —
NO PUSH —
NO PR —
NO METHOD PROMOTION —
NO D2 —
NO UI —
NO CREATECYCLE
```

Ce gate candidat **n’est pas exécuté** par le présent cycle.

## T. Verdict

```
V3.1-D1 CAPITALIZATION / REX COMPLETE —
CATALOG DELIVERY QA PR MERGE POST-MERGE ARCHIVE AND CLEANUP LESSONS CAPTURED —
OBSERVATIONS RECOMMENDATIONS AND MORRIS DECISIONS KEPT DISTINCT —
ACCEPTED MINOR DOCUMENTATION RESERVE STILL TRACEABLE AND NOT LIFTED —
DOCUMENTATION PUBLICATION REQUIRES DISTINCT MORRIS GO —
NO METHOD PROMOTION —
D2/D3 NOT AUTHORIZED
```

**Statut :** `CAPITALIZATION COMPLETE LOCALLY — DOCUMENT 05 READY FOR DOCUMENTARY PR READINESS — NO PUBLICATION — D2 NOT OPENED`
```

Hash `6d6e7f7bdec33902b3ee3632f64088bd0eed893342bd7fbe1a0a49ad3b596577` · 436/24796 · unchanged since PR readiness

## Bodies
### Approved

```markdown
# docs(sfia-studio): add V3.1-D1 capitalization REX

## 1. Summary

This draft PR adds a single documentation file: the V3.1-D1 Capitalization / REX for the Cycle Type Catalog Runtime Contract lot.

It captures lessons from framing through delivery, QA, PR, merge, post-merge worktree incidents, controlled archiving, and cleanup — without promoting method assets and without opening D2/D3.

## 2. Context

- Lot V3.1-D1 already merged via PR #296 (`b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`).
- Capitalization cycle 15 produced document 05 locally on branch `capitalization/sfia-studio-v3-1-d1-rex`.
- This publication is documentation-only and remains subject to a distinct Morris merge GO.

## 3. Scope

**In scope (exactly one file):**

- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md`

**Out of scope:**

- framing README / backlog 08 / documents 12–14
- D1 reports 01–04
- code / tests / config / dependencies
- method / templates / CKC
- D2 resolver / QualifyCycle bridge
- D3 / UI / Figma / CreateCycle / persistence

## 4. Capitalization coverage

Document sections A–T cover:

- chronology (framing → cleanup → local capitalization)
- Morris decisions consumed
- factual observations
- lessons and candidate reusable practices
- candidate recommendations (not applied)
- future decision pack D-REX-01…06 (NOT DECIDED)
- reserves register
- anti-claims and next-gate candidate

## 5. Morris decisions

Referenced as already adopted/executed (not reinvented):

- D-V3-01…08 and D-V3.1-CAT-01…08
- QA-G3 PASS
- publication / ready-for-review / merge of PR #296
- post-merge / worktree / archive / cleanup GOs
- capitalization GO (local document only)

No new Morris decision is created by this PR.

## 6. Evidence and metrics

- Catalog: 15 entries · 4 detailed / 11 synthetic CKC mappings
- QA reinforced before fix: 34 PASS / 12 FAIL
- After corrective + revalidation: 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS
- PR #296: 13 files · 2 source commits · +3667 / −155
- Code commit: `91232520440b77fe8200427f3321c7ff0454ad24`
- Docs commit: `e2e898405c0a555573187e04dd6c3de777595f19`
- Merge: `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`
- CI pre-merge: run `30577786752` PASS
- CI post-merge: run `30585808183` PASS
- Archive SHA-256 proofs (event only; not Git truth):
  - `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309`
  - `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb`

## 7. Epistemic distinctions

The document keeps strict prefixes/status labels:

- `Observation —`
- `Enseignement —`
- `Pratique candidate réutilisable —`
- `Recommandation candidate —`
- Morris decisions: adopted / executed
- D-REX-01…06: `NOT DECIDED — MORRIS DECISION REQUIRED`

Candidate practices are **not** method baseline.
Recommendations are **not** applied in this PR.

## 8. Risks and reserves

**Inherited minor reserve (not a new defect of document 05):**

`ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED`

Framing README condensation remains accepted and traceable via docs 12/13/14, reports 01–05, PR #296, and handoffs. Not lifted. Not D2.

**Other risks:**

- misreading capitalization as method promotion → mitigated by anti-claims and boundaries
- misreading D-REX-06 as D2 authorization → explicitly NOT DECIDED / not automatic

## 9. Boundaries

This PR does **not** claim:

- D2/D3 open
- resolver / QualifyCycle / UI / CreateCycle / persistence implemented
- method baseline promotion
- PRODUCT / RUN / IAM / AGENT READY or CUTOVER AUTHORIZED
- zero bugs

## 10. Validation

- Local Git Truth on capitalization branch @ `b553f0aa…` (0/0 vs main)
- Document structure A–T complete
- Metrics/SHAs cross-checked against PR #296, CI runs, and D1 reports
- Epistemic distinctions verified
- No project mutation during PR readiness
- Full Studio test suite not re-run (documentation-only; metrics already evidenced)

## 11. Review guidance

Reviewers should verify:

1. single-file documentation scope
2. no method/code/test changes
3. observations ≠ recommendations ≠ Morris decisions
4. D-REX remain NOT DECIDED
5. README reserve remains accepted and not lifted
6. no implicit D2/D3 authorization

## 12. Checklist

- [x] Capitalization cycle complete
- [x] Observations and recommendations separated
- [x] Morris decisions identifiable
- [x] Future decision pack remains NOT DECIDED
- [x] Accepted README reserve remains traceable and not lifted
- [x] No code, tests, dependencies or method changes
- [x] No D2/D3, UI or CreateCycle
- [ ] Commit and push authorized by Morris
- [ ] Draft PR opened
- [ ] Remote CI completed
- [ ] Morris merge GO granted
```

### Publication

```markdown
# docs(sfia-studio): add V3.1-D1 capitalization REX

## 1. Summary

This draft PR adds a single documentation file: the V3.1-D1 Capitalization / REX for the Cycle Type Catalog Runtime Contract lot.

It captures lessons from framing through delivery, QA, PR, merge, post-merge worktree incidents, controlled archiving, and cleanup — without promoting method assets and without opening D2/D3.

## 2. Context

- Lot V3.1-D1 already merged via PR #296 (`b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`).
- Capitalization cycle 15 produced document 05 locally on branch `capitalization/sfia-studio-v3-1-d1-rex`.
- This publication is documentation-only and remains subject to a distinct Morris merge GO.

## 3. Scope

**In scope (exactly one file):**

- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md`

**Out of scope:**

- framing README / backlog 08 / documents 12–14
- D1 reports 01–04
- code / tests / config / dependencies
- method / templates / CKC
- D2 resolver / QualifyCycle bridge
- D3 / UI / Figma / CreateCycle / persistence

## 4. Capitalization coverage

Document sections A–T cover:

- chronology (framing → cleanup → local capitalization)
- Morris decisions consumed
- factual observations
- lessons and candidate reusable practices
- candidate recommendations (not applied)
- future decision pack D-REX-01…06 (NOT DECIDED)
- reserves register
- anti-claims and next-gate candidate

## 5. Morris decisions

Referenced as already adopted/executed (not reinvented):

- D-V3-01…08 and D-V3.1-CAT-01…08
- QA-G3 PASS
- publication / ready-for-review / merge of PR #296
- post-merge / worktree / archive / cleanup GOs
- capitalization GO (local document only)

No new Morris decision is created by this PR.

## 6. Evidence and metrics

- Catalog: 15 entries · 4 detailed / 11 synthetic CKC mappings
- QA reinforced before fix: 34 PASS / 12 FAIL
- After corrective + revalidation: 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS
- PR #296: 13 files · 2 source commits · +3667 / −155
- Code commit: `91232520440b77fe8200427f3321c7ff0454ad24`
- Docs commit: `e2e898405c0a555573187e04dd6c3de777595f19`
- Merge: `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`
- CI pre-merge: run `30577786752` PASS
- CI post-merge: run `30585808183` PASS
- Archive SHA-256 proofs (event only; not Git truth):
  - `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309`
  - `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb`

## 7. Epistemic distinctions

The document keeps strict prefixes/status labels:

- `Observation —`
- `Enseignement —`
- `Pratique candidate réutilisable —`
- `Recommandation candidate —`
- Morris decisions: adopted / executed
- D-REX-01…06: `NOT DECIDED — MORRIS DECISION REQUIRED`

Candidate practices are **not** method baseline.
Recommendations are **not** applied in this PR.

## 8. Risks and reserves

**Inherited minor reserve (not a new defect of document 05):**

`ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED`

Framing README condensation remains accepted and traceable via docs 12/13/14, reports 01–05, PR #296, and handoffs. Not lifted. Not D2.

**Other risks:**

- misreading capitalization as method promotion → mitigated by anti-claims and boundaries
- misreading D-REX-06 as D2 authorization → explicitly NOT DECIDED / not automatic

## 9. Boundaries

This PR does **not** claim:

- D2/D3 open
- resolver / QualifyCycle / UI / CreateCycle / persistence implemented
- method baseline promotion
- PRODUCT / RUN / IAM / AGENT READY or CUTOVER AUTHORIZED
- zero bugs

## 10. Validation

- Local Git Truth on capitalization branch @ `b553f0aa…` (0/0 vs main)
- Document structure A–T complete
- Metrics/SHAs cross-checked against PR #296, CI runs, and D1 reports
- Epistemic distinctions verified
- No project mutation during PR readiness
- Full Studio test suite not re-run (documentation-only; metrics already evidenced)

## 11. Review guidance

Reviewers should verify:

1. single-file documentation scope
2. no method/code/test changes
3. observations ≠ recommendations ≠ Morris decisions
4. D-REX remain NOT DECIDED
5. README reserve remains accepted and not lifted
6. no implicit D2/D3 authorization

## 12. Checklist

- [x] Capitalization cycle complete
- [x] Observations and recommendations separated
- [x] Morris decisions identifiable
- [x] Future decision pack remains NOT DECIDED
- [x] Accepted README reserve remains traceable and not lifted
- [x] No code, tests, dependencies or method changes
- [x] No D2/D3, UI or CreateCycle
- [x] Commit and push authorized by Morris
- [x] Draft PR opened
- [ ] Remote CI completed
- [ ] Morris merge GO granted
```

### Delta (exactly 2 checklist lines)

```
L136:
- - [ ] Commit and push authorized by Morris
+ - [x] Commit and push authorized by Morris
L137:
- - [ ] Draft PR opened
+ - [x] Draft PR opened
```

## Staged / commit diff

```
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md

```

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md
new file mode 100644
index 0000000..785256a
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md
@@ -0,0 +1,436 @@
+# V3.1-D1 — Capitalisation / REX
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-31 06:52:41 CEST (+0200) |
+| **Cycle projet** | 15 — Capitalisation / REX |
+| **Profil SFIA** | Capitalization |
+| **Profondeur** | Standard |
+| **Typologie** | CAPA |
+| **Gate Morris consommé** | `GO CAPITALIZATION / REX SFIA STUDIO V3.1-D1 — CAPTURE CATALOG DELIVERY QA PR MERGE POST-MERGE ARCHIVE AND CLEANUP LESSONS — KEEP OBSERVATIONS RECOMMENDATIONS AND MORRIS DECISIONS DISTINCT — NO METHOD PROMOTION WITHOUT MORRIS GO — NO D2 — NO UI — NO CREATECYCLE` (2026-07-31 06:43 CEST) |
+| **Branche** | `capitalization/sfia-studio-v3-1-d1-rex` |
+| **Base** | `main` @ `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e` |
+| **CKC** | fallback carte synthétique + méthode §4.15 · method-candidate · consommation obligatoire · niveau P2 / léger · `executionAuthority=false` |
+| **Template capitalisation** | `prompts/templates/08-capitalize-method-asset.md` lu — **non applicable** ici (promotion d’actif méthode) ; structure alignée sur §4.15 (faits ≠ reco ≠ décision) |
+| **Statut du document** | `CAPITALIZATION COMPLETE LOCALLY — DOCUMENT 05 READY FOR DOCUMENTARY PR READINESS — NO PUBLICATION` |
+| **Publication projet** | **non autorisée** par ce gate (commit / push / PR soumis à un GO distinct) |
+| **Méthode / baseline** | **aucune promotion** |
+| **D2 / D3 / UI / CreateCycle** | **non autorisés** |
+
+## B. Objet et périmètre
+
+### Objectif
+
+Capturer les apprentissages réutilisables du lot **V3.1-D1 Cycle Type Catalog Runtime Contract**, depuis le cadrage jusqu’au cleanup post-merge, en séparant strictement :
+
+- observations factuelles ;
+- enseignements ;
+- recommandations candidates ;
+- décisions Morris déjà validées ;
+- options futures non décidées.
+
+### Phases couvertes
+
+Cadrage V3 → conception V3.1 → architecture catalogue (CAT) → Delivery D1 → QA Critical FAIL → Delivery corrective → QA revalidation PASS → QA-G3 Morris → PR readiness → publication → remote review → ready-for-review → merge → CI post-merge → blocages worktree → archivage contrôlé → cleanup final → handoffs successifs.
+
+### Phases explicitement exclues
+
+- Ouverture ou conception de **V3.1-D2** (resolver / QualifyCycle bridge).
+- Ouverture ou conception de **V3.1-D3** (UI / Figma / vertical-slice UX).
+- CreateCycle, persistance, LPS, epistemic UI.
+- Promotion method-candidate → baseline.
+- Publication Git du présent document (GO distinct requis).
+- Recopie des archives locales non versionnées (seuls événement et hashes SHA-256 cités depuis le handoff final).
+
+## C. Résumé exécutif
+
+V3.1-D1 a livré et intégré sur `main` le **contrat runtime** des quinze types de cycle SFIA Studio :
+
+- quinze identifiants stables `cyc:*` (CAT-I1), dont `cyc:capitalization` conservé ;
+- quatre mappings CKC **detailed** avec fallback synthétique ;
+- onze mappings CKC **synthetic** ;
+- métadonnées fail-closed (`executionAuthority=false`, doctrineStatus, unavailableBehavior) ;
+- validateur multi-issues sans throw ;
+- suite de tests renforcée (46) + suite `oa/cycle` (94) + suite Studio (827) après correctif ;
+- package de **13 fichiers** intégré via PR **#296** (merge `b553f0aa…`).
+
+Le lot a traversé une QA Critical légitimement FAIL, un correctif **limité au validateur**, une revalidation complète, une publication GitHub gouvernée, et un post-merge rendu difficile par des contraintes de worktrees locaux — résolues par archivage byte-for-byte puis cleanup sans force.
+
+**Valeur :** un contrat produit exécutable et testé, sans ouvrir D2/D3, sans promouvoir la méthode.
+
+## D. Chronologie vérifiable
+
+| # | Étape | Statut | Source principale | Décision Morris | Observation / leçon principale |
+|---|-------|--------|-------------------|-----------------|--------------------------------|
+| 1 | Cadrage V3 (doc 12) | Adopté | `…/framing/12-v3-cycle-recommendation-cadrage.md` | D-V3-01…08 | Intention produit et gates avant Delivery |
+| 2 | Conception V3.1 (doc 13) | Adopté | `…/framing/13-v3-1-profile-qualification-functional-design.md` | Suite D-V3 | Qualification profil / routing avant catalogue |
+| 3 | Architecture catalogue (doc 14) | Adopté | `…/framing/14-….md` | D-V3.1-CAT-01…08 | IDs + CKC obligatoire + slicing D1→D2→D3 |
+| 4 | Delivery D1 initiale | Implémenté | `cycleTypeCatalog.ts` · README D1 | GO Delivery | Contrat + tests positifs ; validateur incomplet |
+| 5 | QA Critical | **FAIL** | `01-qa-validation-report.md` | GO QA | 34 PASS / 12 FAIL ; R-QA-01…09 ouvertes |
+| 6 | Delivery corrective | Corrigé | `02-corrective-delivery-report.md` | GO corrective | Correctif **validateur seul** ; données/API stables |
+| 7 | QA revalidation | **PASS** | `03-qa-revalidation-report.md` | — | 46/46 · 94/94 · 827/827 ; R-QA CLOSED |
+| 8 | QA-G3 Morris | **PASS** | handoff / README D1 | GO QA-G3 ACCEPT | Acceptation humaine des preuves |
+| 9 | PR readiness | READY FOR PR | `04-pr-readiness-report.md` | GO PR readiness | Package 13 fichiers ; réserve README tracée |
+| 10 | Publication | Publié | commits `9123252…` · `e2e8984…` · PR #296 | GO commit/push/PR | Deux commits code/docs séparés |
+| 11 | Remote review | PASS w/ reserves | handoff cycle 13 | — | CI pré-merge verte ; réserve mineure OK |
+| 12 | Ready-for-review | Non-draft | PR #296 | GO ready | Body checkbox CI ; wording draft ensuite stale |
+| 13 | Merge | MERGED | merge `b553f0aa…` | GO merge | Parents `3e8a437…` + `e2e8984…` |
+| 14 | CI post-merge | PASS | run `30585808183` | — | Distinct de CI PR `30577786752` |
+| 15 | Post-merge #1 | **BLOCKED** | handoff | GO post-merge | `main` verrouillée par worktree externe stale |
+| 16 | Post-merge #2 | **BLOCKED** | handoff | GO resolve WT | Deux fichiers untracked bloquent remove |
+| 17 | Archivage | Vérifié | handoff final | GO archive | `cp -p` + SHA-256 + `cmp` puis `rm` exact |
+| 18 | Cleanup final | COMPLETE | handoff final | (même GO) | WT remove sans force ; `branch -d` ; remote delete |
+| 19 | Capitalisation | LOCAL ONLY | **ce document** | GO capitalization | Aucune publication projet |
+
+## E. Décisions Morris consommées
+
+| Décision | Source | Conséquence D1 | Statut | N’autorise pas |
+|----------|--------|----------------|--------|----------------|
+| D-V3-01…08 | doc `12` | Cadre produit / gates amont | Adoptées | Delivery D2/D3, CreateCycle |
+| D-V3.1-CAT-01 = CAT-S1 | doc `14` | Catalogue = projection des 15 cycles | Adoptée | Runtime hors contrat |
+| D-V3.1-CAT-02 = CAT-I1 | doc `14` | 15 IDs `cyc:*` ; `cyc:capitalization` inchangé | Adoptée | Renommage ID sans gate |
+| D-V3.1-CAT-03 | doc `14` | Noyau minimal + CKC core | Adoptée | Sur-modélisation TS |
+| D-V3.1-CAT-04 | doc `14` | Alias contrôlés | Adoptée | Alias libres / recyclage |
+| D-V3.1-CAT-05 | doc `14` | Changements structurants → Morris | Adoptée | Mutation structurante implicite |
+| D-V3.1-CAT-06 | doc `14` | ID neutre / labels localisés | Adoptée | ID localisé comme clé |
+| D-V3.1-CAT-07 | doc `14` | CKC obligatoire dans le produit candidate | Adoptée | Baseline méthode globale ; `executionAuthority=true` |
+| D-V3.1-CAT-08 | doc `14` | Slicing D1 puis D2 puis D3 | Adoptée | Fusion D1/D2/D3 |
+| QA-G3 = PASS | GO QA-G3 | R-QA-01…09 CLOSED ; PR readiness | Accepté | Merge automatique ; D2 |
+| Publication PR #296 | GO commit/push/PR | Draft PR ouverte | Exécuté | Merge sans GO merge |
+| Ready-for-review | GO ready | `isDraft=false` | Exécuté | Merge |
+| Merge PR #296 | GO merge | `b553f0aa…` sur main | Exécuté | Cleanup forcé ; D2 |
+| Archivage untracked | GO archive | Deux fichiers préservés hors repo | Exécuté | `git clean` ; force |
+| Cleanup WT + branches | GO archive/cleanup | WT retiré ; Delivery locale/distante absentes | Exécuté | `-D` ; force push ; prune forcé |
+| Réserve README | PR readiness + reviews | Condensation acceptée | **ACCEPTED — NOT LIFTED** | Assimilation à D2 ; levée implicite |
+
+Aucune nouvelle décision n’est créée par ce document.
+
+## F. Observations factuelles
+
+Observation — Les contrats amont (docs 12/13/14) étaient nécessaires pour borner une Delivery D1 sans dérive vers resolver ou UI.
+
+Observation — Les tests Delivery initiaux couvraient insuffisamment les invariants **négatifs** du validateur (bornes, doctrine, alias croisés, version).
+
+Observation — La QA indépendante a transformé une suite apparemment verte en **FAIL légitime** (34 PASS / 12 FAIL après renforcement).
+
+Observation — Le correctif a pu rester limité à `validateCycleTypeCatalog` ; données catalogue, API publique et tests QA sont restés stables.
+
+Observation — La revalidation a fermé R-QA-01 à R-QA-09 sans réécriture des oracles.
+
+Observation — La publication en **deux commits** a conservé la séparation code/tests (`9123252…`) et documentation (`e2e8984…`).
+
+Observation — La CI distante a confirmé le package sur les SHAs publiés (pré-merge `30577786752` sur `e2e8984…` ; post-merge `30585808183` sur `b553f0aa…`).
+
+Observation — Le post-merge a distingué CI de PR et CI de `main` (événements et runs distincts).
+
+Observation — Le cleanup local a révélé un worktree `main` externe **stale** (HEAD pré-merge), bloquant le switch/FF.
+
+Observation — L’inspection tracked/staged/untracked a empêché la suppression d’un worktree contenant deux fichiers non suivis.
+
+Observation — Les hashes SHA-256 et `cmp` byte-for-byte ont permis un archivage sûr avant suppression des originaux.
+
+Observation — Le cleanup final a supprimé la branche source avec `git branch -d` puis delete remote **sans** perdre l’historique (commits présents via merge).
+
+Observation — La réserve de condensation du framing README reste traçable via docs 12/13/14, rapports 01–04, PR #296 et handoffs.
+
+## G. Ce qui a bien fonctionné
+
+### Cadrage / conception / architecture
+
+- Décisions CAT explicites avant code.
+- Slicing D1/D2/D3 adopté avant Delivery.
+- CKC obligatoire dans le produit avec `executionAuthority=false`.
+
+### Delivery
+
+- Contrat pur (ops pures, freezes, pas d’I/O runtime).
+- Export public minimal via `index.ts`.
+- Frontières D2/D3 documentées dans le README D1.
+
+### QA
+
+- Renforcement indépendant des oracles négatifs.
+- FAIL honnête plutôt que greenwashing.
+- Correctif minimal + revalidation complète.
+
+### PR readiness
+
+- Package unique cohérent (13 fichiers).
+- Réserve documentaire explicite, non dissimulée.
+- Séparation commit/push/PR du verdict READY FOR PR.
+
+### Publication et review
+
+- Deux commits logiques.
+- Remote review avant ready-for-review.
+- CI pré-merge verte avant merge.
+
+### Merge
+
+- Merge commit explicite (parents vérifiables).
+- Arbre merge ≡ head source.
+
+### Post-merge
+
+- Distinction CI PR / CI main.
+- Arrêt immédiat sur worktree non propre (pas de force).
+
+### Archivage et cleanup
+
+- Archive hors repository.
+- Preuve d’identité avant `rm`.
+- Worktree remove sans `--force`.
+- `git branch -d` uniquement.
+
+### Handoff ChatGPT
+
+- Handoffs successifs sur `sfia/review-handoff` avec tip/blob vérifiés.
+- Continuité de preuve entre cycles 14 et 15.
+
+## H. Frictions et écarts rencontrés
+
+| Friction | Nature | Échec produit ? |
+|----------|--------|-----------------|
+| Validateur initial incomplet | Dette technique D1 découverte en QA | Non — détecté avant merge |
+| 12 tests négatifs ajoutés en QA | Effort QA > Delivery initiale | Non — qualité accrue |
+| Review packs Full volumineux | Friction opérationnelle | Non |
+| Condensation framing README | Perte partielle de découvrabilité | Non — réserve acceptée |
+| Checkbox CI body devenue stale | Artefact GitHub | Non — corrigée avant ready |
+| Wording « draft PR » stale après transition | Artefact GitHub | Non — corrigé avant merge |
+| Enchaînement de plusieurs gates GitHub | Charge gouvernance | Non — intentionnel |
+| Worktree `main` externe stale | Environnement local | Non — cleanup bloqué à raison |
+| Untracked bloquant remove | Environnement local | Non — données préservées |
+| Cycle d’archivage supplémentaire | Friction cleanup | Non — preuve renforcée |
+| État distant ≠ contraintes workspaces locaux | DevOps local | Non |
+
+## I. Métriques et preuves
+
+| Métrique | Valeur |
+|----------|--------|
+| Entrées catalogue | 15 |
+| CKC detailed / synthetic | 4 / 11 |
+| QA renforcée avant correctif | **34 PASS / 12 FAIL** |
+| Après correctif / revalidation | **46/46** · **94/94** · **827/827** |
+| typecheck / lint / build | PASS |
+| Fichiers PR #296 | 13 |
+| Commits source | `91232520440b77fe8200427f3321c7ff0454ad24` · `e2e898405c0a555573187e04dd6c3de777595f19` |
+| Diff intégré | +3667 / −155 |
+| Merge commit | `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e` |
+| Parents | `3e8a4374405dce98866e35fb60c5c7329701f191` · `e2e898405c0a555573187e04dd6c3de777595f19` |
+| CI pré-merge | run `30577786752` — PASS (event `pull_request`, head `e2e8984…`) |
+| CI post-merge | run `30585808183` — PASS (event `push`, head `b553f0aa…`) |
+| Archives (SHA-256) | `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309` · `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb` |
+| Handoff post-cleanup | tip `35eae1355d6363748622fd812223f3b6d6103aa1` · blob `01fd5e748e02b065f562668707d4de9ab606dc30` |
+
+Sources code/tests : `app/lib/oa/cycle/domain/cycleTypeCatalog.ts` · `app/lib/oa/cycle/index.ts` · `app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`.
+
+## J. Enseignements
+
+Enseignement — **Produit** : un contrat runtime catalogue + mapping CKC peut être livré sans resolver ni UI, à condition que les frontières D2/D3 soient adoptées **avant** Delivery.
+
+Enseignement — **Delivery** : une suite locale verte sur chemins nominaux n’établit pas la couverture des invariants négatifs du validateur.
+
+Enseignement — **QA** : l’indépendance QA (nouveaux oracles) convertit des défauts latents en FINDING actionnables avant publication.
+
+Enseignement — **QA** : si les données de production sont conformes, le correctif doit cibler le validateur — pas réécrire le catalogue ni les tests pour « faire passer ».
+
+Enseignement — **Git / PR** : deux commits logiques (code/tests vs docs) facilitent la revue et la traçabilité.
+
+Enseignement — **Git / PR** : le body PR est un artefact gouverné ; les transitions d’état (draft → ready → merge) rendent des formulations stale.
+
+Enseignement — **Post-merge** : CI PR ≠ CI main ; les deux doivent être vérifiées séparément.
+
+Enseignement — **Worktrees** : `main` active dans un autre worktree bloque switch/FF ; l’inspection doit précéder toute mutation.
+
+Enseignement — **Worktrees** : untracked ≠ « temporaire jetable » ; absence de preuve d’identité interdit remove.
+
+Enseignement — **Documentation** : condenser un README en index vivant exige une réserve explicite et des sources de conservation.
+
+Enseignement — **Handoff** : tip/blob distants successifs permettent de reprendre un cleanup Critical sans perdre le fil épistémique.
+
+Enseignement — **Automatisation** : les contrôles répétés (Truth Check, safety gates, hashes) sont automatisables ; l’arbitrage (merge, archivage, promotion) ne l’est pas.
+
+## K. Pratiques réutilisables
+
+Pratique candidate réutilisable — Contrat fonctionnel / architecture (docs 12–14) avant implémentation runtime.
+
+Pratique candidate réutilisable — Découpage D1 / D2 / D3 adopté avant code.
+
+Pratique candidate réutilisable — QA indépendante avec oracle négatif avant PR.
+
+Pratique candidate réutilisable — Correctif minimal (validateur) sans réécriture du contrat de données.
+
+Pratique candidate réutilisable — Revalidation complète après correctif (mêmes commandes, mêmes oracles).
+
+Pratique candidate réutilisable — Package PR en deux commits logiques.
+
+Pratique candidate réutilisable — Remote review avant ready-for-review.
+
+Pratique candidate réutilisable — Body GitHub traité comme artefact gouverné (checklist + wording).
+
+Pratique candidate réutilisable — Distinction CI PR / CI main.
+
+Pratique candidate réutilisable — Cleanup conditionné à l’ancestry (`rev-list` source..main = 0).
+
+Pratique candidate réutilisable — `git branch -d` sans `-D`.
+
+Pratique candidate réutilisable — Inspection tracked / staged / untracked avant `git worktree remove`.
+
+Pratique candidate réutilisable — Archivage `cp -p` + SHA-256 + `cmp` avant suppression d’originaux non versionnés.
+
+Pratique candidate réutilisable — Handoff Git canonique (`sfia/review-handoff`) à chaque clôture de cycle.
+
+Ces pratiques restent **candidates** — elles ne sont ni baseline officielle, ni doctrine validée, ni règle de méthode adoptée.
+
+## L. Anti-patterns observés ou évités
+
+| Anti-pattern | Statut dans V3.1-D1 |
+|--------------|---------------------|
+| Suite locale verte = QA suffisante | Évité (QA FAIL légitime) |
+| Corriger les données catalogue alors que le défaut est dans le validateur | Évité |
+| Réécrire les tests pour faire passer le correctif | Évité |
+| Fusionner D1/D2/D3 | Évité (CAT-08) |
+| Mapping CKC = resolver | Évité |
+| Merger sans remote review | Évité |
+| Confondre ready-for-review et autorisation de merge | Évité |
+| Supprimer branche avant CI post-merge | Évité |
+| Supprimer worktree contenant untracked | Évité (STOP) |
+| Force / clean / reset hard / branch -D | Évité |
+| Ignorer réserves après merge | Évité (réserve maintenue) |
+| Transformer recommandation en décision Morris | Évité (ce document) |
+
+## M. Analyse de l’automatisation (L0–L5)
+
+| Action | Niveau observé | Répétable | Soumis à Morris | Garde-fous | Risque si sur-automatisé |
+|--------|----------------|-----------|-----------------|------------|--------------------------|
+| Contrôles Git / CI | L1–L2 | Oui | Non (lecture) | Truth Check, SHAs attendus | Faux PASS si SHA ignoré |
+| Validation invariants (tests) | L2 | Oui | Non pour rejeu | Oracles figés | Greenwashing si oracles édités |
+| Génération rapports | L2–L3 | Partiel | Contenu / verdict | Templates + sources | Synthèse sans preuve |
+| Publication handoff | L3 borné | Oui | GO implicite cycle | Un fichier, tip/blob | Pollution handoff |
+| Modification body PR | L2–L3 | Oui | GO explicite | Diff body borné | Wording non gouverné |
+| Ready-for-review | L3 | Oui | GO explicite | État draft | Confusion avec merge |
+| Merge | L0–L3 | Technique oui | **GO merge** | Method, SHA head | Merge non autorisé |
+| Archivage fichiers | L1–L2 | Oui | **GO archive** | hashes + cmp | Perte données |
+| Suppression worktree | L1 | Oui | Après gate clean | no `--force` | Destruction locale |
+| Cleanup branche | L1–L3 | Oui | Après safety gate | `-d` only | Perte ref utile |
+
+**Conclusion :** automatiser l’exécution répétable, jamais l’arbitrage structurant. Aucun L5 global n’est recommandé.
+
+## N. Recommandations candidates
+
+Recommandation candidate — Renforcer les tests négatifs du validateur **dès** la Delivery initiale (pas seulement en QA).
+
+Recommandation candidate — Formaliser une vérification du body PR après chaque changement d’état (draft / ready / merge GO).
+
+Recommandation candidate — Améliorer la découvrabilité du framing README (liens vers 12/13/14) sans restaurer toute la duplication historique.
+
+Recommandation candidate — Conserver la séparation CI PR / CI main dans les checklists post-merge.
+
+Recommandation candidate — Vérifier les worktrees dès le pre-check post-merge (`git worktree list`).
+
+Recommandation candidate — Détecter les contenus non suivis avant de planifier le cleanup.
+
+Recommandation candidate — Conserver un pattern d’archive byte-for-byte pour fichiers non versionnés utiles.
+
+Recommandation candidate — Réduire la duplication des review packs Full tout en préservant les preuves complètes (index + annexes).
+
+Recommandation candidate — Conserver un lien explicite entre docs 12/13/14, rapports 01–05 et PR #296 dans les index.
+
+Aucune de ces recommandations n’est appliquée dans ce cycle.
+
+## O. Decision pack futur
+
+| ID | Question | Observation source | Bénéfice | Dette potentielle | Option simple | Gate Morris requis | Statut |
+|----|----------|--------------------|----------|-------------------|---------------|--------------------|--------|
+| D-REX-01 | Publier le document 05 sur `main` ? | Capitalisation locale complète | Traçabilité Git | Revue doc | Documentation-only PR | GO PR readiness + commit/push/PR | **NOT DECIDED — MORRIS DECISION REQUIRED** |
+| D-REX-02 | Mettre à jour README D1 / framing / backlog pour référencer 05 ? | Index vivant | Découvrabilité | Toucher README déjà condensé | Liens minimalistes | GO doc index | **NOT DECIDED — MORRIS DECISION REQUIRED** |
+| D-REX-03 | Capitaliser le pattern d’archivage sécurisé dans la méthode ? | Cleanup Critical | Réutilisation | Promotion prématurée | Note candidate séparée | GO capitalisation méthode | **NOT DECIDED — MORRIS DECISION REQUIRED** |
+| D-REX-04 | Créer un contrôle L1 body PR stale ? | Checkbox / wording stale | Moins d’erreurs GitHub | Outillage | Checklist manuelle d’abord | GO tooling | **NOT DECIDED — MORRIS DECISION REQUIRED** |
+| D-REX-05 | Améliorer le format des review packs Full ? | Volume packs | Lisibilité | Perte de preuve | Structure index+annexes | GO process | **NOT DECIDED — MORRIS DECISION REQUIRED** |
+| D-REX-06 | Ouvrir une étude V3.1-D2 ? | CAT-08 slicing | Suite produit | Scope resolver | Étude seule, sans Delivery | GO cadrage/étude D2 **distinct** | **NOT DECIDED — MORRIS DECISION REQUIRED** |
+
+D-REX-06 n’est **pas** une recommandation automatique d’ouverture D2.
+
+## P. Registre des réserves
+
+### Bloquantes
+
+Aucune pour la clôture technique D1 (sauf découverte nouvelle hors périmètre de ce document).
+
+### Majeures
+
+Aucune validée actuellement.
+
+### Mineures
+
+| Réserve | Statut |
+|---------|--------|
+| Condensation du framing README (index vivant) | **ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED** |
+
+Conservation : docs 12, 13, 14 ; rapports V3.1-D1 01–04 ; PR #296 ; handoffs successifs ; ce document 05.
+
+Cette réserve ne bloque pas la capitalisation ; elle n’est pas corrigée ici ; elle n’est pas assimilée à D2.
+
+### Hors périmètre D1
+
+Resolver orchestré · QualifyCycle bridge · exposition vertical-slice · UI · Figma · CreateCycle · persistance.
+
+### Environnementales résolues
+
+Worktree `main` stale retiré sans force · fichiers non suivis archivés (hashes ci-dessus) · branche Delivery locale/distante absentes.
+
+## Q. Anti-claims
+
+- D1 fermé ≠ D2 ouvert
+- Catalogue runtime ≠ mécanisme CKC complet / resolver
+- Mapping statique ≠ résolution orchestrée
+- Quinze IDs ≠ CycleInstance
+- CKC obligatoire dans le produit candidate ≠ baseline méthode globale
+- QA PASS ≠ zero bug
+- CI PASS ≠ validation produit end-to-end
+- Merge ≠ capitalisation publiée
+- Capitalisation locale ≠ décision Morris
+- Pratique candidate ≠ méthode adoptée
+- Réserve acceptée ≠ réserve levée
+- Branche supprimée ≠ historique supprimé
+- Archive locale ≠ source de vérité Git
+- Pas de PRODUCT READY / RUN READY / IAM READY / AGENT READY / CUTOVER AUTHORIZED
+
+## R. Recommandation de suite
+
+**Une seule étape immédiate :** PR readiness **documentaire** du document 05 (revue contenu, traçabilité, distinctions épistémiques, réserve) — sans commit, push ni PR tant qu’un GO Morris distinct ne l’autorise.
+
+Ne pas ouvrir D2 comme étape automatique.
+
+## S. Gate suivant candidat
+
+```
+GO PR READINESS SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
+REVIEW DOCUMENT 05 CONTENT TRACEABILITY OBSERVATIONS RECOMMENDATIONS DECISIONS AND RESERVES —
+PREPARE DOCUMENTATION-ONLY PUBLICATION PACKAGE —
+NO COMMIT —
+NO PUSH —
+NO PR —
+NO METHOD PROMOTION —
+NO D2 —
+NO UI —
+NO CREATECYCLE
+```
+
+Ce gate candidat **n’est pas exécuté** par le présent cycle.
+
+## T. Verdict
+
+```
+V3.1-D1 CAPITALIZATION / REX COMPLETE —
+CATALOG DELIVERY QA PR MERGE POST-MERGE ARCHIVE AND CLEANUP LESSONS CAPTURED —
+OBSERVATIONS RECOMMENDATIONS AND MORRIS DECISIONS KEPT DISTINCT —
+ACCEPTED MINOR DOCUMENTATION RESERVE STILL TRACEABLE AND NOT LIFTED —
+DOCUMENTATION PUBLICATION REQUIRES DISTINCT MORRIS GO —
+NO METHOD PROMOTION —
+D2/D3 NOT AUTHORIZED
+```
+
+**Statut :** `CAPITALIZATION COMPLETE LOCALLY — DOCUMENT 05 READY FOR DOCUMENTARY PR READINESS — NO PUBLICATION — D2 NOT OPENED`
```

## Commit / push
PUBLICATION_SHA `d77c775f6114eddd04af330cc943a869a5c4f6a2` · parent `b553f0aa…` · message exact · remote tip equal · no force

```
commit d77c775f6114eddd04af330cc943a869a5c4f6a2
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Fri Jul 31 07:47:50 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Fri Jul 31 07:47:50 2026 +0200

    docs(sfia-studio): add V3.1-D1 capitalization REX

    Co-authored-by: Cursor <cursoragent@cursor.com>

A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md
---
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md

```

```
PUBLICATION_SHA=d77c775f6114eddd04af330cc943a869a5c4f6a2
local=d77c775f6114eddd04af330cc943a869a5c4f6a2
remote=d77c775f6114eddd04af330cc943a869a5c4f6a2
LR=0	0
=== ls-remote exact ===
d77c775f6114eddd04af330cc943a869a5c4f6a2	refs/heads/capitalization/sfia-studio-v3-1-d1-rex
=== ls-remote neighbor (should be empty) ===
branch=capitalization/sfia-studio-v3-1-d1-rex
HEAD=d77c775f6114eddd04af330cc943a869a5c4f6a2
upstream=origin/capitalization/sfia-studio-v3-1-d1-rex
origin_branch=d77c775f6114eddd04af330cc943a869a5c4f6a2
main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
origin_main=b553f0aaec120e03b8cfca27f3f0e5fc03f1480e
LR_branch=0	0
=== status ===
PROJECT_CLEAN
=== staged ===

```

## Draft PR #297
URL https://github.com/mcleland147/sfia-workspace/pull/297
OPEN · draft · base main @ b553f0aa… · head capitalization @ `d77c775f6114eddd04af330cc943a869a5c4f6a2` · 1 commit · 1 file · +436/−0 · body exact match · comments 0

### Remote body

```markdown
# docs(sfia-studio): add V3.1-D1 capitalization REX

## 1. Summary

This draft PR adds a single documentation file: the V3.1-D1 Capitalization / REX for the Cycle Type Catalog Runtime Contract lot.

It captures lessons from framing through delivery, QA, PR, merge, post-merge worktree incidents, controlled archiving, and cleanup — without promoting method assets and without opening D2/D3.

## 2. Context

- Lot V3.1-D1 already merged via PR #296 (`b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`).
- Capitalization cycle 15 produced document 05 locally on branch `capitalization/sfia-studio-v3-1-d1-rex`.
- This publication is documentation-only and remains subject to a distinct Morris merge GO.

## 3. Scope

**In scope (exactly one file):**

- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md`

**Out of scope:**

- framing README / backlog 08 / documents 12–14
- D1 reports 01–04
- code / tests / config / dependencies
- method / templates / CKC
- D2 resolver / QualifyCycle bridge
- D3 / UI / Figma / CreateCycle / persistence

## 4. Capitalization coverage

Document sections A–T cover:

- chronology (framing → cleanup → local capitalization)
- Morris decisions consumed
- factual observations
- lessons and candidate reusable practices
- candidate recommendations (not applied)
- future decision pack D-REX-01…06 (NOT DECIDED)
- reserves register
- anti-claims and next-gate candidate

## 5. Morris decisions

Referenced as already adopted/executed (not reinvented):

- D-V3-01…08 and D-V3.1-CAT-01…08
- QA-G3 PASS
- publication / ready-for-review / merge of PR #296
- post-merge / worktree / archive / cleanup GOs
- capitalization GO (local document only)

No new Morris decision is created by this PR.

## 6. Evidence and metrics

- Catalog: 15 entries · 4 detailed / 11 synthetic CKC mappings
- QA reinforced before fix: 34 PASS / 12 FAIL
- After corrective + revalidation: 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS
- PR #296: 13 files · 2 source commits · +3667 / −155
- Code commit: `91232520440b77fe8200427f3321c7ff0454ad24`
- Docs commit: `e2e898405c0a555573187e04dd6c3de777595f19`
- Merge: `b553f0aaec120e03b8cfca27f3f0e5fc03f1480e`
- CI pre-merge: run `30577786752` PASS
- CI post-merge: run `30585808183` PASS
- Archive SHA-256 proofs (event only; not Git truth):
  - `c9b9cc5b58ad1ad4654add2a9e380f53069f42ab14366e7af03bebf69d4ab309`
  - `73b1e1e43f310bc36aa8963cd28bbee9ca0c3cb883e9ebd67eec20e75299cdfb`

## 7. Epistemic distinctions

The document keeps strict prefixes/status labels:

- `Observation —`
- `Enseignement —`
- `Pratique candidate réutilisable —`
- `Recommandation candidate —`
- Morris decisions: adopted / executed
- D-REX-01…06: `NOT DECIDED — MORRIS DECISION REQUIRED`

Candidate practices are **not** method baseline.
Recommendations are **not** applied in this PR.

## 8. Risks and reserves

**Inherited minor reserve (not a new defect of document 05):**

`ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED`

Framing README condensation remains accepted and traceable via docs 12/13/14, reports 01–05, PR #296, and handoffs. Not lifted. Not D2.

**Other risks:**

- misreading capitalization as method promotion → mitigated by anti-claims and boundaries
- misreading D-REX-06 as D2 authorization → explicitly NOT DECIDED / not automatic

## 9. Boundaries

This PR does **not** claim:

- D2/D3 open
- resolver / QualifyCycle / UI / CreateCycle / persistence implemented
- method baseline promotion
- PRODUCT / RUN / IAM / AGENT READY or CUTOVER AUTHORIZED
- zero bugs

## 10. Validation

- Local Git Truth on capitalization branch @ `b553f0aa…` (0/0 vs main)
- Document structure A–T complete
- Metrics/SHAs cross-checked against PR #296, CI runs, and D1 reports
- Epistemic distinctions verified
- No project mutation during PR readiness
- Full Studio test suite not re-run (documentation-only; metrics already evidenced)

## 11. Review guidance

Reviewers should verify:

1. single-file documentation scope
2. no method/code/test changes
3. observations ≠ recommendations ≠ Morris decisions
4. D-REX remain NOT DECIDED
5. README reserve remains accepted and not lifted
6. no implicit D2/D3 authorization

## 12. Checklist

- [x] Capitalization cycle complete
- [x] Observations and recommendations separated
- [x] Morris decisions identifiable
- [x] Future decision pack remains NOT DECIDED
- [x] Accepted README reserve remains traceable and not lifted
- [x] No code, tests, dependencies or method changes
- [x] No D2/D3, UI or CreateCycle
- [x] Commit and push authorized by Morris
- [x] Draft PR opened
- [ ] Remote CI completed
- [ ] Morris merge GO granted
```

## CI initiale
**PENDING** — Detect SUCCESS · Build IN_PROGRESS/QUEUED · head `d77c775f6114eddd04af330cc943a869a5c4f6a2` · no wait · checklist CI untouched

```
=== gh pr checks ===
Build and validate SFIA Studio	pending	0	https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551/job/91083759279
Detect SFIA Studio changes	pass	11s	https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551/job/91083728085
=== statusCheckRollup ===
{"headRefOid":"d77c775f6114eddd04af330cc943a869a5c4f6a2","statusCheckRollup":[{"__typename":"CheckRun","completedAt":"2026-07-31T05:48:12Z","conclusion":"SUCCESS","detailsUrl":"https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551/job/91083728085","name":"Detect SFIA Studio changes","startedAt":"2026-07-31T05:48:01Z","status":"COMPLETED","workflowName":"SFIA Studio CI"},{"__typename":"CheckRun","completedAt":"0001-01-01T00:00:00Z","conclusion":"","detailsUrl":"https://github.com/mcleland147/sfia-workspace/actions/runs/30607787551/job/91083759279","name":"Build and validate SFIA Studio","startedAt":"2026-07-31T05:48:14Z","status":"IN_PROGRESS","workflowName":"SFIA Studio CI"}]}
```

## Réserve / frontières
ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED
no ready · no merge · no method promotion · no D2/D3

## Rapport temporaire
`.tmp-sfia-review/v3-1-d1-capitalization-publication-report.md` — sections A–R + contenus complets

## État Git final
capitalization @ `d77c775f6114eddd04af330cc943a869a5c4f6a2` · upstream aligned · main `b553f0aa…` · project clean · staged empty

## Gate suivant
```
GO REMOTE REVIEW DRAFT PR SFIA STUDIO V3.1-D1 CAPITALIZATION REX —
VERIFY ONE-FILE DIFF COMMIT BODY CHECKLIST REMOTE CI AND ACCEPTED MINOR RESERVE —
CLASSIFY REMOTE FINDINGS —
NO READY FOR REVIEW — NO MERGE — NO METHOD PROMOTION — NO D2 — NO UI — NO CREATECYCLE
```

## Verdict
```
V3.1-D1 CAPITALIZATION DOCUMENTATION DRAFT PR OPENED —
ONE-FILE COMMIT VERIFIED —
REMOTE BRANCH PUBLISHED —
DRAFT PR BASE MAIN AND HEAD VERIFIED —
APPROVED BODY PUBLISHED —
ACCEPTED MINOR DOCUMENTATION RESERVE EXPLICIT AND NOT LIFTED —
REMOTE CI INITIAL STATE CAPTURED —
NO READY-FOR-REVIEW —
NO MERGE —
NO METHOD PROMOTION —
D2/D3 NOT AUTHORIZED
```

**Statut :** `DOCUMENT 05 PUBLISHED IN DRAFT PR — REMOTE REVIEW NEXT — D2 NOT OPENED`

**Instruction ChatGPT :** consulter `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` ; confirmer publication draft PR #297 mono-fichier ; vérifier body/checklist/réserve ; ne pas ready/merge ; proposer uniquement remote review ; ne pas générer le prompt suivant sans nouveau GO Morris.
