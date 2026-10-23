# AKG-M4 — Formal Milestone Exit Decision Record (Global Bounded Rationalization Assessment)

| Champ | Valeur |
| --- | --- |
| Jalon | **AKG-M4 — Rationalization Assessment** (distinct des milestones historiques Convergence M4/M5) |
| Autorité | **Pilote — Morris** |
| Décision datée | **2026-10-23 Europe/Paris** — approbation dans la conversation ChatGPT : « ok go finalisons AKG-M4 dans ce cas » |
| Portée de l'accord | **AKG-M4 GLOBAL FORMAL EXIT — ADOPTED AT BOUNDED ARCHITECTURAL RATIONALIZATION ASSESSMENT SCOPE WITH GOVERNED OPEN RESERVES** |
| Statut | **AKG-M4 GLOBAL — CLOSED BY MORRIS** au périmètre d'étude architecturale bornée, **pas** au périmètre Product Transformation ni readiness d'exécution |
| Livrables de preuve | [Registre 03](./03-orientations-and-gap-register.md), [M4-A Exit 13](./13-m4a-formal-exit-decision-record.md), investigations [05](./05-m4a-dependency-consumers-audit.md)–[10](./10-m4a-critical-architecture-alignment-review.md), [H7/H8 11](./11-m4a-h7-h8-architecture-orientation-decision-record.md), [readiness 12](./12-m4a-formal-exit-readiness-and-decision-pack.md) |
| Vérité Git avant décision | `main` `b7bff88b4d6baef5745014c990b07af05a0063ff`, PR [#605](https://github.com/mcleland147/sfia-workspace/pull/605) MERGED, workflow post-merge [#39893659601](https://github.com/mcleland147/sfia-workspace/actions/runs/39893659601) COMPLETED / SUCCESS (Detect, Build, Required Gate) |
| Statut de publication | **CANDIDATE GIT** pour ce record jusqu'à sa PR, au GO de merge séparé et à la CI post-merge ; la décision Pilote et son intégration Git ne sont pas le même événement |

> **Frontière impérative :** cette décision clôt le **travail d'analyse de rationalisation** tel que borné et documenté ; elle n'adopte aucune classification technique finale A01–A12 en bloc, n'autorise aucun refactoring, migration ou suppression, et ne démarre **ni AKG-M5 ni Delivery L1–L6**.

## 1. Base de gouvernance et périmètre du jalon

La [Roadmap B-AKG](../../sfia-studio-convergence-roadmap.md) définit **AKG-M4 — Rationalization Assessment** : une matrice `KEEP/ADAPT/CONSOLIDATE/REPLACE/RETIRE` fondée sur les preuves, une qualification des impacts et des **décisions Morris par lot**. La destination suivante est **AKG-M5 — Product Transformation**, seulement sous GO Product distinct.

La traçabilité visible du jalon M4 concerne son **lot M4-A** : analyses T-A01–T-A06, Decision Record H7/H8, intégration Git, et Formal Exit M4-A. Aucun second lot M4 formel n'est référencé dans le périmètre AKG inspecté à cette baseline. Cela ne démontre pas, à lui seul, l'exhaustivité de tout travail futur possible ; toute découverte d'un lot M4 préalablement obligatoire non traité devra être portée en écart de gouvernance.

Le GO Pilote présent est **spécifique à la finalisation globale d'AKG-M4**, après le succès du merge/CI de M4-A ; il n'est ni un re-GO H7/H8 ni un GO de transformation.

## 2. Preuves et décisions déjà consommées

| Contrôle | Base factuelle | État pour Exit bornée |
| --- | --- | --- |
| M3 antérieur formellement clôturé | AKG-M3 CLOSED BY MORRIS ; référence Roadmap / FE-01–04 | **SATISFIED** |
| M4 Formal Start | GO Pilote M4 après PR #603 ; OR-13 capability-first | **SATISFIED** |
| T-A01–T-A06 terminés | `05`–`10`, acceptés avec réserves | **SATISFIED WITH GOVERNED RESERVES** |
| Capacités historiques | `06` : 29 capacités ; `05` et `03` : A01–A12 | **SATISFIED WITH GOVERNED RESERVES** ; inventaire borné |
| Séquences d'autorité / persistance | `07` / `08` ; STOP/FAIL/restart ; MIG-A–D | **SATISFIED WITH GOVERNED RESERVES** |
| Scénarios SC-G1/G2/G3 contradictoires | `09` / `10`, contraintes G0/OR-13 | **SATISFIED** au périmètre comparaison, ≠ implémentation |
| Arbitrages architecturaux | **H7 ADOPTED** : SC-G2 orientation + option SC-G3 A06/A10 ; **H8 ADOPTED** : étude conditionnelle en L4 | **SATISFIED** à leur seule portée |
| Formal Exit du lot M4-A | `13` : **M4A-FE-01–05 ADOPTED / M4-A CLOSED BY MORRIS at bounded scope** | **SATISFIED** |
| Intégration documentaire précédente | PR #604 et PR #605 MERGED, workflow #39893659601 SUCCESS sur `b7bff88b…` | **SATISFIED** |
| Réserves et prérequis | `03` §9/§13, `11` §9, `13` §3 | **SATISFIED WITH GOVERNED RESERVES** |
| Dispositions finales par actif et Go Delivery | A01–A12 **CANDIDATE**, H0 **NOT GRANTED** | **DEFERRED — NON ADOPTED**, bloquant pour exécution, non pour une clôture *d'étude bornée* |
| GO humain Formal Exit **GLOBAL** | Demande explicite Pilote du 2026-10-23 après la clôture M4-A | **ADOPTED** au périmètre déclaré par ce record |

**Verdict :** au périmètre de **Bounded Architectural Rationalization Assessment**, le dossier est suffisant pour une Formal Exit globale **avec réserves gouvernées**. Cette qualification **n'élève pas** les dispositions d'actifs candidates au rang de décisions d'implémentation.

## 3. Décision globale — AKG-M4-GFE-01

**AKG-M4-GFE-01 — ADOPTED BY PILOTE : AKG-M4 GLOBAL CLOSED AT BOUNDED RATIONALIZATION ASSESSMENT SCOPE WITH GOVERNED OPEN RESERVES.**

Le jalon est clôturé **pour l'étude de rationalisation et l'orientation architecturale** : les actifs, capacités, dépendances, risques, scénarios d'architecture et arbitrages déjà rendus sont documentés et publiés.

La condition « décisions Morris par lot » de la Roadmap est satisfaite **au niveau du lot d'investigation M4-A**, par H7/H8 et M4A-FE-01–05. Elle **ne signifie pas** que toutes les classifications individuelles A01–A12 sont adoptées. Les choix d'implémentation, de migration et de retrait devront être arbitrés indépendamment **avant chaque lot Delivery**.

Aucun blocker non reportable de **cette** clôture bornée n'est identifié dans les éléments vérifiés. Les blockers de réalisation, de sécurité et de preuve REAL conservent intégralement leur force.

## 4. Continuité des décisions — AKG-M4-GFE-02

**AKG-M4-GFE-02 — ADOPTED : maintien des décisions et de leurs limites.**

- **H7** : SC-G2 comme orientation de référence ; SC-G3 ciblé A06/A10 **option** architecturale.
- **H8** : instruction conditionnelle SC-G3 en L4 si ADAPT ne permet pas de clarifier l'ownership. **Aucun GO REBUILD**.
- **H0 : NOT GRANTED** ; aucun L1–L6 exécutable sans GO distinct.
- **H1–H5** : questions et prérequis OPEN/DEFER/PARTIAL selon le registre, reportés avec gouvernance et gates de reprise.
- **H6 : G0 REOPEN NOT AUTHORIZED** ; G0-A/B reste valide ; pas de dual-write, Dual-Shell ni rebuild OA implicites.
- **A01–A12** : les dispositions KEEP/ADAPT/HARVEST/REPLACE/RETIRE restent **proposées**, sauf orientations limitées H7/H8 ; aucun retrait automatique.

## 5. Gouvernance des réserves — AKG-M4-GFE-03

**AKG-M4-GFE-03 — ADOPTED : réutilisation de la gouvernance M4A-FE-02/03, sans fermeture d'une réserve technique.**

| Domaine | Statut conservé | Condition du futur gate |
| --- | --- | --- |
| R-VOL-01 / H4 | **OPEN** | Inventaire volumes historiques avant migration L2 |
| R-MM-01 / H1 | **OPEN** | Arbitrer MethodMode avant MIG-A |
| R-CUT-01 | **OPEN** | Cutover writers/readers sans dual-write ni lecture obsolète non qualifiée |
| R-TF-01 / H2, R-REAL-01 | **OPEN / NOT PROVEN** | Safety/no-write + preuves REAL avant claim Product REAL |
| R-EXCL-01 | **NOT PROVEN** | Exclusivité Product REAL démontrée avant retire OPS1 |
| R-PA-01 / H8, R-CAR-01 / H3 | **GOVERNED OPEN** | Clarifier ownership L4 / continuité HD ; étude SC-G3 conditionnelle |
| R-PP-01 / H5, RES-02 | **PARTIAL / OPEN** | Follow-up architectural et **potential blocker Delivery L3** |
| R-A09-01 / R-A11-01 | **OPEN** | Consumers, types/tests/retraits sécurisés ; SHADOW OFF |
| R-RS-01, R-FS-01 | **DEFER / OPEN** | Restart et recovery à instruire avant claims concernés |
| RES-01, R-DOC-01, R-P0-01 | **DOCUMENTARY / FOLLOW-UP OPEN** | Traçabilité actifs, PRR SYN, liens/bookmarks |
| Héritage M1–M3 | **PRR historical states preserved** | Ne jamais rouvrir ni fermer automatiquement ces dettes |

**Gouvernance temporaire des arbitrages : Pilote** ; propriétaires techniques formels **OWNER UNASSIGNED**, sauf preuves antérieures attribuant un propriétaire concret. **ChatGPT = assistance à la revue/documentation**, ni responsable opérationnel permanent, ni owner technique.

## 6. Frontière vers AKG-M5 — AKG-M4-GFE-04

**AKG-M4-GFE-04 — ADOPTED : aucun démarrage implicite AKG-M5 ou Delivery.**

| Stade | Autorisation |
| --- | --- |
| **AKG-M4 GLOBAL Formal Exit bornée** | **ADOPTED** (ce record) |
| **AKG-M5 Formal Start** | **NOT AUTHORIZED** — GO Pilote distinct requis |
| **M5 Product scope / lot sequencing** | **À qualifier** sous autorisation future |
| **Delivery L1–L6** | **NOT AUTHORIZED** — GO par lot + preuve des prérequis |
| **L2 migration D1** | Blocked until volumes, MethodMode, A09, cutover et décision distincte |
| **L3 Product REAL / OPS1** | Blocked until Tool-First no-write, REAL E2E, exclusivity, pathPolicy selon périmètre |
| **L4 PA/carriers** | Design H8 conditionnel ≠ autorisation de build |
| **L5 UX / L6 FinOps** | Gates spécifiques encore ouverts |
| **REAL PROVEN / P6 GLOBAL PASS** | **NOT ACQUIRED** |
| **Runtime v3 ADOPTED / FinOps SHADOW ON** | **NOT AUTHORIZED** |

**Ordre cible possible (design only, non adopté comme plan d'exécution) :** cadrage M5 → cartographie par lot → préconditions et risques → GO Delivery spécifique → exécution avec preuves ; L1/A09 doit précéder les retraits D1 L2. Aucun séquencement proposé ne contourne une preuve manquante.

## 7. Preuves Git et publication

1. M4-A documentaire : [PR #604](https://github.com/mcleland147/sfia-workspace/pull/604), merge `d739143f9a0e29fdb8475fc1f73d0b9897da5bf6`, CI `39887430929` SUCCESS.
2. M4-A Formal Exit : [PR #605](https://github.com/mcleland147/sfia-workspace/pull/605), merge `b7bff88b4d6baef5745014c990b07af05a0063ff`, CI post-merge `39893659601` SUCCESS.
3. Les références `03`, `05`–`13` sont intégrées sur ce `main`. Le document `12` reste un snapshot de **readiness** antérieur à l'approbation M4A-FE ; le document `13` est la décision M4-A.
4. Le **présent document 14** et les mises à jour de statut seront une **publication Git distincte** : leur succès ne peut être affirmé qu'après vérification du commit/PR et de la CI post-merge.

## 8. Contrôles de sortie globale (candidate review)

| ID | Contrôle | État |
| --- | --- | --- |
| GM4-X01 | Baseline Git + CI #605 vérifiés | **PASS** |
| GM4-X02 | M4-A Formal Exit adoptée | **PASS** |
| GM4-X03 | Inventaires/impacts/alternatives documentés | **PASS WITH GOVERNED RESERVES** |
| GM4-X04 | H7/H8 fidèles et scope explicite | **PASS** |
| GM4-X05 | H0–H6 maintenus et reports explicites | **PASS WITH GOVERNED RESERVES** |
| GM4-X06 | A01–A12 non promus en décisions techniques finales | **PASS** |
| GM4-X07 | Risques de migration / REAL / retrait conservés | **PASS WITH GOVERNED RESERVES** |
| GM4-X08 | Autorité/governance temporaire claire ; owners formels non inventés | **PASS WITH GOVERNED RESERVES** |
| GM4-X09 | Décision humaine globale M4 bornée | **ADOPTED** |
| GM4-X10 | GO M5 / Delivery / P6 non consommés | **PASS** |
| GM4-X11 | Présent Decision Record intégré et post-merge vérifié | **PENDING** jusqu'à son propre merge + CI |

**Condition de publication :** examen contradictoire du diff documentaire, CI sur PR, GO merge séparé, merge puis CI post-merge ; aucune mise à jour implicite de PRR/manifest ou d'état Product.

## 9. Non-claims

- AKG-M4 **GLOBAL CLOSED à portée bornée**, mais **ni cible Product réalisée, ni final asset disposition adoptée en bloc**.
- **AKG-M5 NOT STARTED**. **Delivery L1–L6 NOT AUTHORIZED**.
- **REAL NOT PROVEN**, Tool-First REAL no-write OPEN, Product exclusivity NOT PROVEN, pathPolicy PARTIAL.
- FinOps SHADOW **OFF**, P6 GLOBAL **NOT PASSED**, runtime v3 **NON ADOPTED**.
- Aucune modification code/DB/API/tests, aucune migration, suppression, merge ou PRR sync implicites.
- Aucun nettoyage de branches historiques.
- La décision Pilote **ne prouve pas** à elle seule que la publication de ce nouveau record est intégrée sur `main`.

**VERDICT — AKG-M4 GLOBAL FORMAL MILESTONE EXIT ADOPTED BY PILOTE AT BOUNDED ARCHITECTURAL RATIONALIZATION ASSESSMENT SCOPE WITH GOVERNED OPEN RESERVES — DOCUMENTARY GIT PUBLICATION PENDING.**
