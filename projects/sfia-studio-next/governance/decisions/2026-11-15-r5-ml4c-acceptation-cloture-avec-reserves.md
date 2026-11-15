# SFIA Studio Next — R5 / Décision de clôture de la convergence fonctionnelle intégrée

**Date :** 15 novembre 2026 (Europe/Paris)
**Autorité :** Morris
**Macro-lot :** ML4C — convergence fonctionnelle intégrée
**Nature :** décision de gouvernance produit D2
**Statut :** VALIDATED IN CONTENT BY MORRIS — 2026-11-15 ; clôture formelle effective après publication et relecture du merge documentaire

## 1. Décision

Morris a prononcé le **15 novembre 2026 l'acceptation de ML4C avec réserves**, sur le candidat `11f7077edd08f1a0c680b6b920f20dbaf76c7bed`.

Morris a ensuite autorisé explicitement le merge de la PR produit #676 dans `main`, sous conditions de vérification et de préservation des réserves. Le merge et les contrôles post-merge sont établis.

**Décision de clôture : ML4C CLOSED WITH RESERVES, sous condition de publication et de vérification du dossier documentaire final.**

Cette clôture reconnaît le résultat fonctionnel atteint et l'intégration du candidat accepté. Elle ne transforme aucune preuve incomplète en preuve acquise et ne clôt pas les réserves reportées.

## 2. Référentiel Git intégré

| Élément | Référence |
| --- | --- |
| Dépôt | `mcleland147/sfia-workspace` |
| Candidat accepté | `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` |
| Tree candidat | `71e052cf53232c70153a6056d948b97fb401b175` |
| PR d'intégration | [#676](https://github.com/mcleland147/sfia-workspace/pull/676) — MERGED le 15/11/2026 à 16:35:01 UTC |
| Commit `main` intégré | `05e71a7166562211b1c8c168a40dcd35e4f8c8a3` |
| Tree `main` post-merge produit | `6b46c875518b0e693f5a5bdf2e10bb20ed81f22c` |
| Tree applicatif Next | `f2427adcd31b044115f85cdc48cfb6dd157d9551` — identique sur candidat et `main` |
| CI pré-merge | [43732809012](https://github.com/mcleland147/sfia-workspace/actions/runs/43732809012) — SUCCESS |
| CI post-merge | [43736293441](https://github.com/mcleland147/sfia-workspace/actions/runs/43736293441) — SUCCESS |
| Contrôle local post-merge | 55 tests unitaires PASS, 0 FAIL, selon handoff Cursor |
| Handoff post-merge | `sfia/review-handoff@8083b61d472ccaad352fdd611fb6fe50d83e2c4b`, blob `23e22dbef215f387761b475e86f8dcdb91205c1b` |

L'intégration Git du produit est vérifiée. Le merge ne constitue pas une promotion STABLE.

## 3. Bilan de la recette et de la qualification

### 3.1 Recette utilisateur

Le [cahier UAT](../../construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md) couvre 53 scénarios S01–S07.

La consolidation du [journal UAT](../../construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md) distingue :

- **12 scénarios PASS** sur la campagne manuelle Q4 du candidat `11f7077e` ;
- **16 scénarios** disposant uniquement d'un PASS UAT historique sur un candidat antérieur ;
- **25 scénarios** sans PASS utilisateur suffisant, transférés à la qualification technique complémentaire.

Ces populations ne sont pas converties artificiellement en 53 PASS UAT sur un même SHA. Les anciens FAIL, BLOCKED et observations d'ergonomie restent conservés avec leur provenance et leurs requalifications successives.

### 3.2 Qualification technique complémentaire

Sur DEV/E2E isolé, le [rapport Phase B](https://github.com/mcleland147/sfia-workspace/blob/f6aaf49c3f398b226ad893a5e341c9e0cdcbcd71/sfia-review-handoff/latest-chatgpt-review.md) du 15 novembre indique environ **432 cas techniques PASS, 0 FAIL**.

La consolidation rapportée des 25 scénarios est :

| Qualification technique | Nombre |
| --- | ---: |
| PASS technique | 15 |
| PARTIAL | 8 |
| NOT PROVEN | 2 |
| FAIL | 0 |

`S03-06` comporte une preuve PASS au niveau domaine D4, mais une couverture UI PARTIAL. Les décomptes du handoff doivent être lus avec leur granularité technique/domaine/UI, sans addition abusive de sous-preuves.

Les résultats déterministes, PostgreSQL, navigateur DEV et Git SCRIPTED conservent leurs frontières de preuve. Ils ne constituent pas automatiquement des preuves Nora LIVE ou Git REAL.

## 4. Réserves conservées et conditions de sortie

| Réserve | État à la clôture | Condition de sortie / gate |
| --- | --- | --- |
| `S05-06` | Reprise d'une action A après une action indépendante B terminée : NOT PROVEN | Démonstration du chaînage exact ou remédiation ciblée avant revendication de cette garantie |
| `S05-08` | Refus/révocation d'une autorisation A en attente : NOT PROVEN | Qualification du mécanisme réel, de l'autorité applicable, de l'absence d'effet interdit et de la restitution fidèle |
| `S01-05` / A-002 | Expiration de session et certains chemins d'erreur : PARTIAL | Tests ciblés TTL, panne/auth et reprise avant la promotion nécessitant ces garanties |
| ENV-R09 | Isolation cookies/sessions multi-lanes : NOT VERIFIED | Vérification et correction éventuelle avant STABLE |
| Git REAL Studio — S06/S07 | Publication, perte d'ACK et droits fournisseur : NOT PROVEN | GO distinct en sandbox documentaire si la frontière REAL doit être démontrée |
| Nora LIVE | Portée LIVE incomplète | Qualification fournisseur et comportement utilisateur selon le périmètre du gate futur |
| `S04-07` / `S03-06` | Couverture partielle CKI/UI | Compléments ciblés selon dépendances fonctionnelles et UX |
| `ML4C-A-014` | Sérialisation Markdown D4 : anomalie mineure OPEN | Corriger ou arbitrer avant publication du contenu affecté ; vérifier l'absence d'altération métier |
| `S03-02-R01` / `S07-06-R01` | Ergonomie D4 et position de reprise du fil | Reprise dans la convergence UX/UI si le contrat ML4D le couvre effectivement |

L'acceptation des réserves n'est pas leur résolution.

Les réserves d'autorité, d'intégrité, de session et d'effet externe restent attachées à leurs responsabilités techniques et fonctionnelles. Elles ne sont pas transférées globalement vers ML4D, dont le périmètre est UX/UI. Aucune correction technique supplémentaire n'est implicitement autorisée par la présente décision.

## 5. Clôture documentaire

Le dossier final conserve les pièces historiques et intègre :

1. Le journal UAT complet et daté, sans réécriture des verdicts passés.
2. Le cahier de qualification technique complémentaire et son addendum d'exécution.
3. Le cadrage de continuité Pilote–Nora v0.7 avec distinction entre conception validée, conception candidate et as-built.
4. Les références aux conceptions correctives demeurant candidates.
5. La présente décision D2.
6. L'actualisation factuelle de la Roadmap Next.
7. Les références aux preuves Git, à la CI et aux handoffs.

Les documents historiques restent lisibles à leur date de rédaction, même lorsqu'ils mentionnent un candidat antérieur ou une absence d'acceptation alors exacte.

La conception corrective D4/S05 du 14/11 reste [candidate non intégrée](https://github.com/mcleland147/sfia-workspace/blob/c883db07dcc3fd2fb8063daa89b5ffe8e63f4e96/projects/sfia-studio-next/construction/convergence-fonctionnelle/conception-corrective-fiabilisation-d4-continuite-s05-20261114.md) ; la v0.1 du cadrage continuité est supersédée par v0.7. Ni l'une ni l'autre ne deviennent des spécifications implémentées par simple référence.

## 6. Conditions d'effet de la clôture

La décision métier d'acceptation avec réserves est acquise depuis le 15 novembre 2026.

La clôture documentaire formelle devient effective lorsque :

- les pièces sélectionnées sont intégrées dans `main` ;
- les contenus structurants ont reçu la validation Morris applicable ;
- le commit et les blobs documentaires sont vérifiés après merge ;
- les réserves et leurs conditions de sortie restent traçables ;
- aucun changement produit ou de gouvernance non autorisé n'a été introduit.

Si ces conditions ne sont pas réunies, le statut reste **PRODUCT MERGED / DOCUMENTARY CLOSURE PENDING**.

## 7. Trajectoire après ML4C

La trajectoire approuvée reste :

**ML4C → ML4D (convergence UX/UI globale) → Gate C programme → ML5 → R6.**

La clôture ML4C ne donne aucun GO automatique à ML4D.

Les statuts suivants restent inchangés :

- Gate C : OPEN ;
- ML4D : NOT STARTED ;
- STABLE : NOT AVAILABLE ;
- version produit officielle / release : NO RELEASE ;
- ADOPTED : NON ACQUIS.

**Morris conserve l'autorité de décision sur les travaux suivants, les risques transférés, les promotions et les gates.**

---

**Statut de sortie documentaire : ML4C CLOSED WITH RESERVES — EFFECTIVE AFTER DOCUMENTARY MERGE VERIFIED.**
