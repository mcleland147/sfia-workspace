# SFIA Studio Next — Décision de sortie R5 / « Piloter et décider » (ML3)

**Date :** 2026-11-07 (Europe/Paris)
**Statut de décision :** **VALIDATED BY MORRIS — FORMAL EXIT / CLOSED WITH CARRIED RESERVES**. Autorité : Morris, validation explicite en conversation après la recette LIVE C03 et la revue post-merge #661.
**Portée :** capacité R5 « Piloter et décider » : D5 trajectoire/cycles, D6 décisions et restrictions, dialogue Nora, spécialisation CKI et persistance PostgreSQL. **Cette décision est une décision de gouvernance du chantier, pas une HumanDecision enregistrée dans l'application.**

## Décision

**ML3 — CLOSED BY MORRIS AT BOUNDED D5/D6 + CKI GUIDANCE SCOPE — WITH CARRIED RESERVES.**

Morris valide la sortie bornée du macro-lot et autorise l'intégration Git documentaire correspondante. La validation de clôture ne vaut pas GO de démarrage ML4, de création/merge de PR, de déploiement, de promotion STABLE, de release, de qualification R6 ou d'ADOPTED.

## Résultat utilisateur effectivement étayé

Le Pilote peut ouvrir et clôturer un cycle par GO naturel, consulter l'état projet, enregistrer/réviser des décisions et appliquer/lever une restriction ciblée. Nora restitue les effets enregistrés et distingue une demande de lecture, une citation non exécutoire et une décision opposable. La spécialisation de sa réponse varie utilement entre CADRAGE et CONCEPTION_FONCTIONNELLE dans le parcours LIVE observé.

Cette clôture est **bornée aux scénarios et aux niveaux de preuve observés** : elle ne prétend ni couvrir toutes les formulations du français, ni prouver tous les parcours R5/R6, ni démontrer la causalité complète de l'injection cognitive.

## Preuves et baseline

- **Intégration :** [PR #661](https://github.com/mcleland147/sfia-workspace/pull/661) MERGED ; `main@56d263e83de7bb3af4a5b480131002684a5626ca`, parents `7f1f41c3` + `03b38e5d`, six commits ML3 intégrés.
- **CI :** [pré-merge 42332186084](https://github.com/mcleland147/sfia-workspace/actions/runs/42332186084) et [post-merge 42333954356](https://github.com/mcleland147/sfia-workspace/actions/runs/42333954356) PASS ; validate Next exécuté, migration `007` appliquée, Required Gate PASS ; 112 unit, 142 PG comptabilisés (voir réserve spécifique), 10 Playwright FAKE.
- **RECETTE :** `61fe295b6704e820694d2379e7f6ab1814143172`, build `ZCkIWQ341KK1KOHTD1a5L`, schéma `007_ml3_pilotage_decisions` ; T01–T08 **8/8 PASS ciblés**, rapport [RCT-02](../../construction/pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md).
- **C03 LIVE intercycles :** ouverture de `CONCEPTION_FONCTIONNELLE` puis dialogue sans mutation ; révision et journal 7 ; CKI `02-conception-fonctionnelle` RESOLVED, pin `0.2.0` ; Nora produit des comportements métier, responsabilités, refus et critères observables. [Preuve C03](../../construction/pilotage-et-decisions/recette-cki-intercycles-live.md). La projection RESOLVED ne prouve pas à elle seule `DELIVERED`.
- **Handoff post-merge :** `sfia/review-handoff@5647872e3951f21390a91cf917926643d0dae1a5` ; blob `21756038943da6ec70829baa7e20a093d51470b8`.
- **Intégrité :** l'arbre applicatif `web/` et le corpus `cki/` du merge sont identiques au candidat recetté ; la présente décision documentaire ne change aucun fonctionnement.

## Réserves expressément reportées

| Réserve | Statut | Propriétaire / sortie |
| --- | --- | --- |
| Injection CKI effectivement `DELIVERED` | NON OBSERVÉE indépendamment ; C03 conversationnel LIVE PASS | QA/observabilité : trace de génération corrélée si exigée pour niveau supérieur |
| ENV-01 A — cookies même hôte | OPEN | Cursor/infra + recette Morris : isolation démontrée **avant STABLE** |
| PostgreSQL — restauration | NOT PROVEN | Cursor/infra : restauration testée sur environnement isolé avant promotion applicable |
| PG-DBFAIL-03 — interruption transactionnelle | NOT PROVEN en substance : test a fait retour anticipé faute de PG SAFE-01 | QA/DB : exécution réelle avec base éphémère SAFE-01 contrôlée |
| Couverture E2E/LIVE/REAL globale | Bornée ; **R6 NOT STARTED** | R6 : qualification élargie sur périmètre applicable |
| CI libellé « 001→006 » | Cosmétique ; `db:migrate` exécute `001→007` | Prochaine modification pertinente du workflow, sans cycle isolé |

Les réserves sont transférées avec leur condition de sortie. **C03 intercycles n'est plus un défaut LIVE ouvert**, mais la preuve technique d'injection demeure limitée.

## Gate suivant

**ML4 — Git / D9 est la capacité suivante candidate, NOT STARTED / NOT AUTHORIZED.** Sa qualification devra confirmer résultat Pilote, frontières D7/D8/D9, contrats d'autorité et dépendances, puis demander un GO distinct. La Roadmap de R5 demeure **IN PROGRESS** ; aucun STABLE, release ou ADOPTED.

**Décision et publication distinctes :** Morris a validé la clôture et autorisé l'intégration Git des documents de sortie. Cette autorisation est limitée à une branche documentaire dédiée ; **PR et merge non autorisés dans le présent mandat**.
