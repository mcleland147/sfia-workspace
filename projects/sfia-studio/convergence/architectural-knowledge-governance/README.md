# SFIA Studio — Architectural Knowledge & Construction Governance (AKG)

| Champ | Valeur |
| --- | --- |
| Portée | Construction / connaissance architecturale de **SFIA Studio uniquement** |
| Version | **V0.6 — 2026-10-23** · AKG-M5-A Formal Exit documentaire bornée et preuves post-merge #607 ; V0.5 = authoring/Git Integration ; V0.4 = M4 GLOBAL Formal Exit |
| Base de lecture | `main` au départ M5-A : `f088c60271722fcf678c3862ebe192da71c7c402` (inclut M4 global exit) ; base M4 GO historique `b7bff88b…` / PR #605 |
| Autorisation Pilote | AKG-M4 GLOBAL EXIT ADOPTED ; **AKG-M5-A DOCUMENTARY FORMAL EXIT CLOSED BY MORRIS WITH GOVERNED RESERVES (2026-10-23)** ; **H0 Delivery L1 NOT GRANTED** |
| Non-claims | M4 et M5-A **clôturés à leurs périmètres documentaires distincts** ; AKG-M5 GLOBAL **OPEN** ; A01–A12 candidates ; H1–H5 OPEN ; H0-L1 NOT GRANTED ; REAL NOT PROVEN ; P6 GLOBAL NOT PASSED ; runtime v3 NON ADOPTED ; ce record est **candidat Git** jusqu'à sa propre intégration |

## Point d'entrée AKG

Les acquis AKG-M0 à M3 sont répartis entre la Build Doctrine, la Roadmap, la PRR et les preuves Git. Cet index **n'est pas une seconde source de vérité** : il rend ces sources navigables et introduit les livrables préparatoires de M4.

| Jalon | Contenu et maturité bornée | Source |
| --- | --- | --- |
| **M0 — Methodological Foundation** | R23/R24, clôture méthodologique | [Build Doctrine](../sfia-studio-convergence-build-doctrine.md), [Roadmap B-AKG](../sfia-studio-convergence-roadmap.md) |
| **M1 — System Inventory** | Inventaire système borné et réserves | [PRR 01](../../production-runtime-reference/01-system-runtime-overview.md), [02](../../production-runtime-reference/02-runtime-object-catalog.md), [03](../../production-runtime-reference/03-end-to-end-flow-catalog.md), [Roadmap](../sfia-studio-convergence-roadmap.md) |
| **M2 — Architecture Understanding** | Responsabilités, dépendances, frontières d'autorité | [PRR 03](../../production-runtime-reference/03-end-to-end-flow-catalog.md), [04](../../production-runtime-reference/04-dependency-impact-map.md), [07](../../production-runtime-reference/07-authority-invariants-and-failure-modes.md), [09](../../production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md) |
| **M3 — Reference Consolidation** | Living PRR consolidée au périmètre borné, réserves gouvernées | [PRR README](../../production-runtime-reference/README.md), [08](../../production-runtime-reference/08-test-proof-and-conformance-map.md), [09](../../production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md) |
| **M4 — Rationalization Assessment** | **GLOBAL FORMAL EXIT ADOPTED — BOUNDED ASSESSMENT with governed OPEN reserves** ; M4-A CLOSED, PR #605 MERGED/CI SUCCESS ; A01–A12 candidate | [Global Exit 14](m4-rationalization/14-akg-m4-global-formal-exit-decision-record.md) · [M4-A Exit 13](m4-rationalization/13-m4a-formal-exit-decision-record.md) |
| **M5 — Product Transformation** | **M5-A DOCUMENTARY FORMAL EXIT — CLOSED BY MORRIS WITH GOVERNED RESERVES** ; PR #607 MERGED et CI post-merge SUCCESS ; **AKG-M5 global reste OPEN** ; H0-L1 NOT GRANTED | [01 blueprint](m5-product-transformation/01-m5a-product-architecture-convergence-blueprint.md) · [02 L1 pack](m5-product-transformation/02-m5a-l1-a09-delivery-readiness-and-decision-pack.md) · [M5-A Formal Exit 03](m5-product-transformation/03-m5a-formal-exit-decision-record.md) |

## État CURRENT — AKG-M5-A Formal Exit documentaire bornée (2026-10-23)

- **Statut décidé :** **CLOSED BY MORRIS AT BOUNDED DOCUMENTARY ARCHITECTURE CONVERGENCE SCOPE WITH GOVERNED OPEN RESERVES** ; source [Decision Record 03](m5-product-transformation/03-m5a-formal-exit-decision-record.md) (publication de ce record candidate Git).
- **Intégration vérifiée :** [PR #607](https://github.com/mcleland147/sfia-workspace/pull/607) MERGED le 2026-10-23 ; `main` = [`0e1181abcd38553d7f489ee5650e0e2957466384`](https://github.com/mcleland147/sfia-workspace/commit/0e1181abcd38553d7f489ee5650e0e2957466384) ; [CI post-merge #39973034538](https://github.com/mcleland147/sfia-workspace/actions/runs/39973034538) **COMPLETED/SUCCESS**, Detect, Build, Required Gate **SUCCESS**.
- **Livrables conservés :** [01 — Convergence blueprint](m5-product-transformation/01-m5a-product-architecture-convergence-blueprint.md) · [02 — L1/A09 readiness](m5-product-transformation/02-m5a-l1-a09-delivery-readiness-and-decision-pack.md) ; correction C3 = **COVERAGE VERIFIED**, comportement run **KNOWN GAP** avant L1.
- **Frontières :** AKG-M5 global **OPEN** ; H0-L1 **NOT GRANTED** ; H1–H5 et R-A09-01 **OPEN** ; Q1–Q10 **NOT PASS** ; packaging audit candidate ; P6 GLOBAL NOT PASSED ; REAL NOT PROVEN ; runtime v3 NON ADOPTED ; **NO PRODUCT SEMANTIC IMPACT**.

## Livrables AKG-M4 (V0.1)

1. **[01 — AS-IS](m4-rationalization/01-current-architecture-as-is.md)** : **deux niveaux dans un document** — vue pédagogique A intégrale + cartographie technique B, *dérivées* de Git/PRR. La PRR demeure **le** référentiel documentaire du CURRENT.
2. **[02 — TO-BE](m4-rationalization/02-target-architecture-to-be.md)** : **deux niveaux dans un document** — vision pédagogique B intégrale + schémas cible et responsabilités détaillées, sous réserve d'arbitrage formel et de compatibilité avec la doctrine v3.
3. **[03 — Orientations et écarts](m4-rationalization/03-orientations-and-gap-register.md)** : intentions confirmées en conversation, hypothèses, écarts, risques et décisions encore à consommer.

## Actualisation AKG-M4 — démarrage et principe de rationalisation (2026-10-22)

- **PR #603 :** V0.1 documentaire intégrée sur `main` via `f44a99b4da84188772b80aca3c9ebe1a3e12617e`; CI post-merge #39813097786 **SUCCESS**.
- **M4 Formal Start :** GO du Pilote exprimé après cette intégration ; limité à l'analyse, qualification et recommandations. **M4-A :** GO explicite pour démarrer l'analyse des responsabilités et redondances du runtime.
- **OR-13 / capability-first :** conserver les capacités/garanties et considérer la reconstruction d'implémentations, même encore consommées ; dépendance AS-IS ≠ justification de KEEP.
- **Statut d'authoring au snapshot 2026-10-22 (historique) :** cette actualisation est **candidate sur branche documentaire** tant qu'une PR/merge distincts n'ont pas été vérifiés. Aucun code runtime, DB, API ou chemin protégé modifié dans le produit. **AKG-M4 ≠ AKG-M5 ; classification ≠ GO Delivery.**

## Lot AKG-M4-A — investigation documentaire (historique et état courant)

**[04 — M4-A : responsabilités, consommateurs et scénarios de reconstruction](m4-rationalization/04-m4a-runtime-responsibilities-and-transition-assessment.md)** — cartographie initiale code/PRR, douze actifs et scénarios historiques ; investigations T-A01–T-A06 documentées dans les fichiers `05`–`10`. **Historique au démarrage : M4-A était NON CLOSED ; clôture bornée FE ultérieure.**

## Snapshot historique pré-merge #604 — 2026-10-23 (RES-04)

- **Décisions Pilote :** H7 = orientation SC-G2 retenue avec option SC-G3 ciblée A06/A10 ; H8 = instruire SC-G3 au lot L4 si ADAPT ne clarifie pas les responsabilités. Voir le [Decision Record `11`](m4-rationalization/11-m4a-h7-h8-architecture-orientation-decision-record.md).
- **Investigations :** T-A01–T-A06 acceptées avec réserves ; index, preuves et réserves dans le [registre `03` V0.4](m4-rationalization/03-orientations-and-gap-register.md).
- **Git documentaire :** commit `c64f804613dda09e4757febcc2e26f530d6f3014`, [PR #604](https://github.com/mcleland147/sfia-workspace/pull/604) **Draft OPEN, non mergée** ; CI sur ce commit SUCCESS au moment de la synchronisation.
- **Frontière de gouvernance :** M4-A **NON CLOSED** ; aucune adoption runtime v3 ; aucun GO merge / Delivery / M5. Les réserves techniques demeurent ouvertes.
- **RES-04 :** l'en-tête historique « M4 FORMAL START non consommé » décrivait la V0.1 avant le GO du 2026-10-22 ; il ne décrit plus l'état courant.

## État CURRENT M4-A — Formal Exit bornée adoptée (2026-10-23)

- **M4A-FE-01–05 : ADOPTED BY PILOTE**. M4-A **CLOSED BY MORRIS — BOUNDED RATIONALIZATION ASSESSMENT — WITH GOVERNED OPEN RESERVES**. Source : [13 — Formal Exit Decision Record](m4-rationalization/13-m4a-formal-exit-decision-record.md).
- **Readiness historique :** [12 — Formal Exit Readiness Pack](m4-rationalization/12-m4a-formal-exit-readiness-and-decision-pack.md) (propositions NOT ADOPTED exactes **avant** réponse Pilote).
- **Git :** PR [#604](https://github.com/mcleland147/sfia-workspace/pull/604) MERGED `d739143f9a0e29fdb8475fc1f73d0b9897da5bf6` ; CI post-merge `39887430929` SUCCESS.
- **Réserves :** H1–H5 et Delivery/REAL OPEN ou DEFER ; gouvernance temporaire Pilote ; formal owners UNASSIGNED ; ChatGPT support documentaire uniquement.
- **Frontières :** H0 NOT GRANTED, H6 NOT AUTHORIZED ; H7/H8 et G0 inchangés ; **AKG-M5 NOT AUTHORIZED**, Product REAL NOT PROVEN, P6 GLOBAL NOT PASSED, runtime v3 NON ADOPTED.
- **Publication de ce truth-sync :** candidat documentaire sur branche Git dédiée tant que son merge et sa CI ne sont pas vérifiés.

## État CURRENT — AKG-M4 Global Formal Exit (2026-10-23)

- **GLOBAL CLOSED BY MORRIS** au seul périmètre **Bounded Architectural Rationalization Assessment with Governed Open Reserves** ; [Decision Record 14](m4-rationalization/14-akg-m4-global-formal-exit-decision-record.md).
- **Preuve d'amont :** `main` au GO `b7bff88b4d6baef5745014c990b07af05a0063ff`, PR #605 MERGED, CI post-merge #39893659601 SUCCESS ; cette nouvelle publication est un candidat Git distinct.
- **H7/H8** inchangés, dispositions finales A01–A12 non adoptées individuellement ; **H1–H5 OPEN**, H0 Delivery NOT GRANTED, H6 G0 reopen NOT AUTHORIZED ; réserves techniques gardées aux futurs gates.
- Gouvernance temporaire **Pilote**, propriétaires techniques formels **UNASSIGNED** ; ChatGPT assistance seulement. **AKG-M5 NOT AUTHORIZED**, L1–L6 sans GO, REAL NOT PROVEN, P6 GLOBAL NOT PASSED, runtime v3 NON ADOPTED, SHADOW OFF.

## Mode de consultation dans les futurs travaux

**Source routing (proportionné) :** code Git courant + preuves primaires → Build Doctrine → Roadmap → doctrine v3 applicable → volumes PRR pertinents → **si architecture cible/rationalisation/transformation touchée : index AKG + TO-BE + registre**, et AS-IS si utile. Jamais un chargement exhaustif obligatoire pour toute petite correction Studio.

Ce rattachement est prévu dans [Cycle Routing Guide §4.3.0a](../../../../method/sfia-fast-track/core/sfia-cycle-routing-guide.md) et [Knowledge Layer — Documentation Routing Matrix](../../../../method/sfia-fast-track/core/sfia-knowledge-layer.md).

## Revue documentaire de cohérence — 2026-10-22

**Niveau de revue : REVUE CRITIQUE DOCUMENTAIRE — SUFFISANTE POUR DRAFT PR, SOUS RÉSERVES.**

- **Périmètre inspecté :** quatre nouveaux documents AKG-M4 et les trois documents de routage/gouvernance modifiés, par comparaison avec le `main` de base ; confrontation ciblée aux doctrines v3 (notamment §30, §32, §34, §35, §37), à la Build Doctrine et aux volumes PRR 01/03/06/07/09.
- **Corrections intégrées :** origine historique de Single Human Execute (PR #590, antérieure à la consolidation M3) ; syntaxe d'un lien du registre ; terminologie de reprise/redémarrage ; qualification de statut Git datée pour éviter une assertion périmée après merge.
- **Vérifications documentaires :** index et renvois relatifs des documents M4 passés en revue ; schémas Mermaid présents (AS-IS : 2 ; TO-BE : 2). Cette revue **ne** certifie **ni** l'intégrité exhaustive des liens de toute la Roadmap historique **ni** le rendu automatique des schémas en navigateur.
- **Réserves non bloquantes :** caractère préliminaire/non exhaustif de l'AS-IS ; dispositions de retrait non prouvées ; cohérence fine du TO-BE à instruire par lots et GO M4 distinct ; REAL/P6 GLOBAL PASS non acquis ; revue GitHub/CI ultérieure à la Draft PR nécessaire.
- **Statut :** publication en **Draft PR recommandée**, **aucune fusion ni adoption runtime** par la présente revue.

## Gouvernance et statut des sources

- **Vérité du CURRENT :** Git et preuves primaires > PRR descriptive > AS-IS résumé.
- **Cible :** doctrine v3 adoptée + orientations explicitement qualifiées du TO-BE ; contradiction = écart à arbitrer, jamais changement silencieux de doctrine.
- **Décision :** H7/H8 sont des arbitrages humains adoptés **dans leur périmètre limité** ; ils ne valent ni adoption runtime, ni GO merge, ni GO Delivery/M5. Les autres orientations de discussion restent non adoptées tant qu'un arbitrage formel n'est pas rendu.
- **Continuité R23/R24 :** tout changement comportemental futur doit réévaluer et synchroniser la PRR applicable.
- **Hors scope V0.1 :** code, tests REAL, schémas SQLite, routes, suppressions, migrations, autorisation M5, merge main.

Chaque document doit expliciter sa version, son statut et ses preuves ; le registre constitue l'historique des évolutions et des arbitrages, sans recopier l'inventaire PRR.
