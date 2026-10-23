# AKG-M4-A — Formal Exit Decision Record (M4A-FE-01 à FE-05)

| Champ | Valeur |
| --- | --- |
| Décision Pilote | **2026-10-23 — APPROVED / ADOPTED**, dans la conversation ChatGPT, en réponse à la Critical Review du dossier de readiness |
| Verbatim d'approbation | « ok pour les recommandations on peut les intégrer dans git et avancer vers la suite » |
| Recommandations approuvées | **M4A-FE-01 à M4A-FE-05**, telles que formulées dans la Critical Review, avec précisions de gouvernance CR-FE-01 à CR-FE-03 |
| Statut lot M4-A | **CLOSED BY MORRIS — BOUNDED RATIONALIZATION ASSESSMENT SCOPE — WITH GOVERNED OPEN RESERVES** |
| Étendue | Clôture **de l'investigation architecturale** ; ni migration, ni transformation Product, ni validation REAL |
| Source préparatoire | [12 — Formal Exit Readiness & Human Arbitration Pack](./12-m4a-formal-exit-readiness-and-decision-pack.md), document historique préparé avant décision |
| Dossier technique | [03 — Registre](./03-orientations-and-gap-register.md), audits [05](./05-m4a-dependency-consumers-audit.md) à [10](./10-m4a-critical-architecture-alignment-review.md), [11 — H7/H8](./11-m4a-h7-h8-architecture-orientation-decision-record.md) |
| Git preuve avant décision | PR [#604](https://github.com/mcleland147/sfia-workspace/pull/604) MERGED · `main` `d739143f9a0e29fdb8475fc1f73d0b9897da5bf6` · CI `39887430929` SUCCESS |
| Autorité de publication | Git integration documentaire autorisée par le Pilote ; **merge ultérieur soumis à autorisation distincte** |

> **Principe de lecture :** la décision humaine de clôture bornée et sa publication Git sont deux événements distincts. Ce record atteste le premier. Il ne prétend pas que son propre commit/PR est déjà intégré à `main`. Le document `12` reste l'état **PROPOSED — NOT ADOPTED** au moment de la préparation ; il est supersédé, pour les cinq FE uniquement, par cette décision.

## 1. Périmètre et motif de la décision

Le lot AKG-M4-A avait pour objet un **Bounded Rationalization Assessment capability-first** : cartographier les responsabilités/consommateurs et les capacités historiques, qualifier les séquences d'autorité et la persistance, confronter SC-G1/G2/G3, recueillir H7/H8 et constituer un dossier de preuves sous R23/R24.

T-A01–T-A06 sont acceptés avec réserves. Les livrables `05`–`11` et le registre V0.4 ont été intégrés via PR #604, avec CI post-merge SUCCESS. La Critical Review du document `12` a jugé la **Formal Exit Readiness ACCEPTED WITH RESERVES**, et l'Option A défendable. Le Pilote a explicitement approuvé les recommandations associées.

**La clôture se limite à la capacité à arbitrer l'architecture et à préserver les gates d'implémentation ; elle ne certifie pas une architecture déjà livrée.**

## 2. Décisions M4A-FE-01 à FE-05 — ADOPTED

| ID | Décision humaine consommée | Portée et restrictions |
| --- | --- | --- |
| **M4A-FE-01** | **ADOPTED — OPTION A : Bounded Formal Exit with Governed Reserves.** M4-A **CLOSED BY MORRIS** au périmètre de Rationalization Assessment borné. | E01–E13 satisfaits ou avec réserve ; E14 conditionné puis acquis au **périmètre de clôture bornée** par la décision FE-01/02/03/05. Aucune preuve Product REAL ajoutée. |
| **M4A-FE-02** | **ADOPTED — report gouverné** de H1–H5 et des réserves classées Delivery/REAL, sans clôture de ces sujets. | Les risques conservent leur statut OPEN, DEFER ou PARTIAL et leurs préconditions par lot. **H0 NOT GRANTED** et **H6 NOT AUTHORIZED** demeurent inchangés. |
| **M4A-FE-03** | **ADOPTED — gouvernance temporaire sous responsabilité du Pilote.** | Pilote = autorité de suivi/escalade et arbitrage **temporaire** ; propriétaires techniques formels = **OWNER UNASSIGNED**. ChatGPT = support analytique/documentaire uniquement, pas owner ni exécuteur permanent. |
| **M4A-FE-04** | **ADOPTED — GO documentaire ciblé** pour la synchronisation post-merge du README AKG, du registre `03` et du tip Roadmap B-AKG. | Lot documentaire identifiable et séparé ; ne pas réécrire `05`–`11` ; ne pas toucher code, PRR, manifest ou Build Doctrine. **Merge soumis à un GO distinct**. |
| **M4A-FE-05** | **ADOPTED — séparation stricte des gates.** | Formal Exit M4-A **≠** GO Delivery L1–L6 **≠** AKG-M5 START **≠** REAL E2E PROVEN **≠** P6 GLOBAL PASS **≠** runtime v3 ADOPTED ; SC-G3 ciblé **≠** REBUILD autorisé. |

**H7/H8 conservés** : H7 orientation de référence **SC-G2 avec option SC-G3 ciblée A06/A10** ; H8 étude conditionnelle SC-G3 au lot L4 si ADAPT ownership insuffisant. Aucune disposition A01–A12 adoptée en bloc.

## 3. Gouvernance des réserves — sans fermeture implicite

| Domaine | Réserves / sujets conservés | Gate de reprise |
| --- | --- | --- |
| MethodMode / migration | **H1**, R-MM-01 ; **H4**, R-VOL-01 ; R-CUT-01 | Conception MIG-A et inventaire réel des volumes **avant L2** ; aucun dual-write |
| Tool-First / sécurité | **H2**, R-TF-01 ; R-REAL-01 ; R-EXCL-01 | Conception des garanties REAL, preuve fail-closed / exclusivité **avant claims ou retrait OPS1** |
| Continuity PA | **H3**, R-CAR-01, R-PA-01 ; RunState R-RS-01 **DEFER** | Lot **L4**, critères H8 ; pas de deuxième autorité |
| pathPolicy | **H5**, R-PP-01 / RES-02 | FOLLOW-UP ARCHITECTURE ; **potential blocker L3 Delivery** si enforcement non prouvé |
| Audit / cutover | R-A09-01 ; R-A11-01 ; R-CUT-01 | Gates A09 **L1**, A11 **L6**, protocole D1 **L2**, consommateurs/tests avant retire |
| Recovery / données | R-FS-01 ; volumes R-VOL-01 | Pas d'atomicité FS/SQLite inventée ; inventaire avant migration |
| UX / documentaire | R-P0-01 ; R-DOC-01 ; RES-01 ; RES-03/04 et drift post-merge | Liens avant L5 ; truth-sync ciblé ; références A01–A12 à vérifier |
| Héritage M1–M3 | R-M2A-04, R-M2B-03, B-M2B-01–05, RS-03, F18/F19 et autres réserves PRR | Statuts historiques inchangés, jamais clôturés ou rouverts implicitement |

**Propriétaire technique formel : OWNER UNASSIGNED**, sauf attribution antérieure explicitement prouvée dans le référentiel d'origine. Gouvernance temporaire des reports M4-A : **Pilote**. ChatGPT assure uniquement l'aide à l'analyse, à la documentation et aux prochains arbitrages.

Les réserves ne sont pas considérées « résolues » parce que leur report est approuvé. Les gates futurs restent **fail-closed** en cas d'absence de preuves ou de GO.

## 4. Critères de sortie E01–E14

- **E01, E03, E06, E07, E10, E11, E12 : SATISFIED** dans la matrice du document `12`.
- **E02, E04, E05, E08, E09, E13 : SATISFIED WITH GOVERNED RESERVE** ; leurs réserves sont explicitement conservées par FE-02/03/04.
- **E14 : SATISFIED WITH GOVERNED RESERVES AT BOUNDED EXIT SCOPE** à la suite des décisions FE-01/02/03/05, **sans** promotion des preuves techniques.
- Aucun **BLOCKER M4-A EXIT** non traité n'est retenu au périmètre de l'étude bornée ; les blockers **Delivery/REAL** restent actifs pour leurs périmètres.

La matrice préparatoire `12` ne doit pas être modifiée rétroactivement : elle décrivait correctement E14 **conditionné** avant la décision humaine.

## 5. Trace de publication et vérité documentaire

- PR #604 intégrée sur `main` : merge `d739143f9a0e29fdb8475fc1f73d0b9897da5bf6`, CI `39887430929` SUCCESS.
- Le README AKG, le registre V0.4 et le tip Roadmap conservent des formulations snapshot antérieures à ce merge. FE-04 approuve leur **synchronisation documentaire ciblée** ; l'historique daté doit rester identifiable.
- **Ce document est lui-même une publication candidate sur une branche distincte** jusqu'à PR/merge et contrôle post-merge. Une décision FE adoptée **ne crée pas automatiquement** l'autorisation de démarrer AKG-M5.

## 6. Conditions pour la suite

1. Intégration et revue de ce Decision Record, du pack préparatoire `12` et du truth-sync FE-04 dans Git.
2. Contrôles de cohérence, CI et revue indépendante du diff.
3. **GO merge distinct** avant fusion dans `main` ; vérification post-merge ensuite.
4. Le démarrage de **AKG-M5** ou de tout **Delivery L1–L6** nécessitera **un nouveau GO explicite**, avec scope, preuves et gates adaptés.
5. R23/R24, G0-A/B et distinction Product Truth C / Nora Memory B inchangés.

**VERDICT : M4A-FE-01–05 ADOPTED BY PILOTE — M4-A CLOSED AT BOUNDED RATIONALIZATION ASSESSMENT SCOPE WITH GOVERNED OPEN RESERVES — DOCUMENTARY GIT INTEGRATION PENDING.**
