# AKG-M4 — 03 · Registre des orientations et écarts

| Champ | Valeur |
| --- | --- |
| Version | **V0.1 — 2026-10-22** |
| Périmètre GO | **Documentation bornée** et référencement méthodologique uniquement |
| Autorité | **Orientation confirmée en discussion ≠ décision formelle AKG-M4** |
| Statut jalon | **AKG-M4 FORMAL START AUTORISÉ — ANALYSE READ-ONLY EN COURS** (GO Morris dans la conversation du 2026-10-22, après merge #603/CI) ; **AKG-M4-A START AUTORISÉ** (GO ultérieur du même jour) ; aucune décision de transformation, migration ou retrait |
| Base de preuve | `main` `1c2d5ecdac3241ac4ef9d45dea68509f761e2f8b` + PRR et docs canoniques |

## 1. Statuts

- **CONFIRMÉE EN DISCUSSION** : orientation explicitement acceptée le 2026-10-22 ; pas d'implémentation ni adoption de lot.
- **VISION PARTAGÉE** : fonctionnement cible formulé et discuté, à préciser en architecture.
- **CANDIDATE** : hypothèse/étude et classification préliminaire.
- **CODE VERIFIED / DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP** : qualificatifs factuels par élément, sans sur-claim.
- **M4 DECIDED** : réservé à un futur arbitrage Morris formel de disposition/architecture détaillée, **aucun à cette version**. **M4 START AUTHORIZED** qualifie uniquement le démarrage de l'analyse.

## 2. Orientations

| ID | Orientation | Statut | Conséquence |
| --- | --- | --- | --- |
| **OR-01** | `/studio` = unique expérience nominale Studio 3.0 | **CONFIRMÉE EN DISCUSSION** | `/` et anciennes routes candidates à convergence/retrait |
| **OR-02** | Product Runtime/OA = unique socle de vérité métier | **CONFIRMÉE EN DISCUSSION** | Stop aux Product Truth C concurrents ; analyse D1/OPS1 |
| **OR-03** | Éliminer les composants historiques **réellement** inutiles | **CONFIRMÉE (principe)** | Audit avant retrait, conserver seulement les capacités utiles |
| **OR-04** | Nommage pérenne selon fonction, indépendamment des jalons | **CONFIRMÉE EN DISCUSSION** | Définir conventions tôt, refactorer au bon lot |
| **OR-05** | Nora planifie, coordonne, mobilise transversalement outils/capacités | **VISION PARTAGÉE** | Dialogue continu, lectures incluses dans mandat |
| **OR-06** | Contrat amendable par dialogue ; **un Exécuter** autorise le mandat | **VISION PARTAGÉE** | Pas de CTA humain redondant ; versions et autorité effectives |
| **OR-07** | Autonomie d'exécution limitée à IN/OUT/STOP du contrat | **VISION PARTAGÉE** | Lots sans micro-GO ; STOP hors mandat |
| **OR-08** | Rapport et preuves suivis d'analyse/synthèse Nora, avant nouvelle mission | **VISION PARTAGÉE** | Résultats SUCCESS/PARTIAL/STOP/FAIL honnêtes |
| **OR-09** | Gouvernance proportionnée, principalement interne | **VISION PARTAGÉE** | Conserver sécurité/idempotence sans bureaucratie UX |
| **OR-10** | Préparer les noms en rationalisation ; renommer seulement au lot utile | **CONFIRMÉE EN DISCUSSION** | Éviter rename avant suppression |
| **OR-11** | Deux architectures distinctes AS-IS/TO-BE, enrichies en continu | **CONFIRMÉE EN DISCUSSION** | AS-IS dérivé PRR, TO-BE proposition |
| **OR-12** | Dossier AKG transverse lié à méthode et sources M0–M3 | **GO DOC V0.1 — INTEGRATED VIA PR #603** | Index + routage méthodologique |
| **OR-13** | **Primauté de la capacité fonctionnelle sur l'implémentation historique** : une dépendance active ne justifie jamais seule KEEP ; étudier extraction, consolidation, remplacement ou **reconstruction saine d'un mécanisme global**, sans refonte gratuite | **ORIENTATION CONFIRMÉE EN DISCUSSION 2026-10-22** | Comparer scénarios de cible/transition, conserver les garanties, ne pas figer la cible par les dépendances AS-IS |

## 3. Écarts candidats à qualifier avant toute décision M4

| ID | AS-IS / source | TO-BE | Disposition **candidate** | Preuves / risques à examiner |
| --- | --- | --- | --- | --- |
| **G-UX-01** | `/` → `/synthese` POC ([code](../../../app/app/page.tsx)) | `/studio` nominal | **ADAPT / RETIRE LATER** | Routes, liens, tests, usages et migrations |
| **G-UX-02** | P0 / OPS1 / D1 présents ([PRR 06](../../../production-runtime-reference/06-persistence-restart-and-recovery.md)) | Une UX principale | **CONSOLIDATE / RETIRE LATER** | Imports, API, données et clients |
| **G-DOM-01** | OA vs stores historiques ([PRR 01](../../../production-runtime-reference/01-system-runtime-overview.md)) | Moteur métier unique | **KEEP OA / AUDIT autres** | Ownership, consommateurs, single Truth C |
| **G-FLOW-01** | Chemins F2, génériques, SHE, legacy ([PRR 03](../../../production-runtime-reference/03-end-to-end-flow-catalog.md)) | Contrat par mission + un GO | **ADAPT / CONSOLIDATE** | Préserver preuve M3, gates, idempotence |
| **G-REPORT-01** | Evidence/RB et rapport après exécution partiellement prouvés | Synthèse Nora systématique et honnête | **KEEP / COMPLETE** | STOP/partial/crash/sans rapport/REAL |
| **G-REC-01** | Proposals/offres process-local ([PRR 06](../../../production-runtime-reference/06-persistence-restart-and-recovery.md)) | Recovery sans invention | **ADAPT** | Multi-instance, restart, migrations |
| **G-ARCH-01** | Dépendances historiques encore consommées, y compris depuis composants modernes ([PRR 04](../../../production-runtime-reference/04-dependency-impact-map.md)) | Cible fondée sur les capacités et responsabilités, pas sur les imports actuels | **HARVEST / CONSOLIDATE / REPLACE / REBUILD candidats** | Graphe consommateurs, dépendances transitives, sémantique/side-effects, migration/rollback, invariants, tests |
| **G-NAME-01** | `ops1`, `d1`, `pre-m6`, `f2`/`w2`, `oa` et `vertical-slice` | Responsabilités nommées clairement | **ADAPT ultérieur** | Audit imports/tests/compatibilité ; ne pas renommer ce qui sera retiré |

**Important :** classement ≠ suppression recommandée ≠ décision du Pilote ≠ GO Delivery. **RS-03, B-M2B-01…05, R-M2A-04, no-write REAL, F18/F19 et autres réserves M1–M3 restent dans leur état PRR/Roadmap**, sans fermeture par cette V0.1.

## 4. Fiche de qualification par actif (pour M4 après GO formel)

Pour chaque ligne de rationalisation, renseigner :

**Identifiant ; rôle actuel ; propriétaire ; consommateurs ; source code/PRR ; comportement démontré ; état cible ; redondance ; risques ; classification KEEP/ADAPT/COMPLETE/HARVEST/CONSOLIDATE/REPLACE/FREEZE/RETIRE LATER ; preuve de non-régression ; stratégie de sortie ; nom cible éventuel ; arbitrage formel ; GO d'exécution ; impact PRR R24.**

**Décision méthodologique de M4 :** la classification doit obligatoirement examiner si **reconstruire** une responsabilité plutôt que garder son service historique produit une architecture globalement meilleure. Une dépendance réelle est un impératif de **continuité/migration**, pas une contrainte de conservation. La décision de réécriture demeure non consommée.

La [Build Doctrine — section A8](../../sfia-studio-convergence-build-doctrine.md) interdit d'assimiler une classification à une autorisation de retrait.

## 4 bis. Démarrage M4-A et trace des travaux

**GO M4-A :** lancement de l'analyse « responsabilités et dépendances runtime » après mise à jour de l'orientation OR-13. **[Cartographie initiale M4-A](04-m4a-runtime-responsibilities-and-transition-assessment.md)**.

**Couverture actuelle :** 12 actifs, premiers consumers directs et 3 scénarios ; **T-A01–T-A06 OPEN**, analyse transitive/non-régression non close. Les options `REPLACE / REBUILD` sont explicitement ouvertes mais **aucune n'est adoptée**, les dispositions ne valent pas GO d'exécution.

## 5. Règles d'évolution

- Enrichir **AS-IS** à partir de Git courant et PRR applicable (pas de deuxième truth documentaire).
- Amender **TO-BE** uniquement comme proposition tant qu'un arbitrage formel n'est pas consommé.
- Tracer le **pourquoi** de chaque choix et ses conséquences dans ce registre.
- Qualifier les écarts avec la doctrine produit v3, sans l'écraser.
- Synchroniser la PRR lorsque le comportement réel évolue selon R23/R24.
- Préserver des gates distincts pour GO M4 formel, lots de rationalisation, déploiement et M5.

[Index AKG](../README.md) · [AS-IS](01-current-architecture-as-is.md) · [TO-BE](02-target-architecture-to-be.md) · [Roadmap](../../sfia-studio-convergence-roadmap.md).
