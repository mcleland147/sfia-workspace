# Review Pack FULL — Qualification intégrée et préparation RECETTE

- date et heure : 2026-11-28 20:15 Europe/Paris
- cycle : 09 — QA / validation
- profil : Critical
- typologie : EVOL
- Review Pack : FULL, mono-cycle
- autorisation : Morris, préparation de mise à disposition après réception des mandats 1 à 6
- candidat : 785253fd7003b95af631248da6bdff6279b2e541
- parent : ca6f47a17427218f6b01effdda570cdd78e8d901
- tree : 6f22ebae5e8a2780ee20d12bf30b747918096997
- origine produit : 87a25c5eed65a1b30c6f608dcccb57f0c5992eff
- avance : 5 ; retard : 0 ; fast-forward possible
- main et merge-base : 997897fd7cf914771e7d08e8030dc7123fab7d25
- RECETTE servie : 0ae9e1f7aaee3658eb3e9a135523e83a72631b31, ancêtre du candidat, 26 commits en amont
- push produit : non exécuté
- cutover : non exécuté
- code produit : aucune modification

## Local Git Truth Check

Correspondance avant qualification. Branche sfia/next-ml5-integrated-delivery-20261123. Remote origin unique. Worktree produit distinct du worktree RECETTE servi et du worktree de handoff. Index propre. Non suivis limités à .tmp-sfia-review. Aucun reset, amend ou rebase.

Les cinq commits locaux, du plus ancien au plus récent : unification du compositeur Nora, fiabilisation FinOps, suppression définitive, complément sans veto métier, fermeture des trois écarts d'intégrité. Delta de ces cinq commits : 19 fichiers, +2039/−276. Delta cumulé depuis la RECETTE servie : 102 fichiers, +11787/−1270. Aucune pull request ouverte sur la branche. Les workflows lus ne se déclenchent que sur une pull request vers main ou un push de main. Le push FF prévu de cette branche ne lance pas ces workflows. Un merge ultérieur vers main le ferait.

## Sources lues

- Suivi v0.35, commit b895ea1ea3277ce7b8f7495c445a068dc1c394e1, blob 9066376729a88efae6cf583a82660fd6dfa7b6fd, notamment §13 à 15, §18, §20, §26 et §34 à 40.
- Routing 3315bbae, template f4fdb488, ENV-01 14b61f0d, versioning 8bc93e0f, migrations 028 ebdfd166 et 029 28134eba.
- Contrats portefeuille au commit 6fc186bc, non modifiés. Handoff M6 e9ad33e8, blob 257246bd.
- Manifeste et preuves E5, cahier de recette intégrée, runner db-migrate.sh, start-recette-ml5.sh, LaunchAgent, politique cognitive et ses tests.
- Le manifeste e8e6e069 est historique. Le runtime servi est 0ae9e1f7 / p0S18hfVdGrMjGeNMGlbV.

## Identités vérifiées

DEV : http://127.0.0.1:3100, PID 95074, HEAD 785253fd, BUILD ocqwE2XKIzLKTSuHGRNxf, PostgreSQL 5433, sfia_next_dev, schéma 029. Inchangé après la qualification.

RECETTE : http://127.0.0.1:3200, PID 58965, parent LaunchAgent 58938, worktree sfia-workspace-next-ml5-recette-build-0ae9e1f7aaee, BUILD p0S18hfVdGrMjGeNMGlbV, PostgreSQL 5434, sfia_next_recette_ml4, schéma 027. Aucune colonne titre, aucune table de portefeuille. Inchangée.

Build de qualification isolé, distinct des deux runtimes : STUDIO_E2E=1, répertoire .next-e2e, BUILD_ID 2jZbA_dNRduVxKfMGtma2. Empreinte du fichier BUILD_ID 8fb4a81c4d28da26ac80e50fafe37561333647e2c04db2977ead1db35675af98. Ce n'est pas le futur BUILD_ID RECETTE. Le serveur temporaire :3101 a été arrêté. Aucun BUILD RECETTE futur n'est inventé.

## Qualification intégrée

292 tests PASS sur 18 fichiers, base sfia_next_e2e uniquement. Ils couvrent la politique cognitive (38), le portefeuille, la suppression définitive (15, dont NULL SQL, propriétaire FinOps et attente réelle de verrou), l'identité documentaire, l'activité et l'attribution FinOps. git diff --check propre. next lint : sortie 0, avertissements historiques. tsc --noEmit : 16 diagnostics, tous dans des tests, aucun dans src. Build de production isolé réussi.

Navigateur contrôlé sur :3101 et sfia_next_e2e, sans émission Nora ni GitHub. Le portefeuille affiche 2 projets, 33 préparations et 1 favori, la reprise, les filtres, le tri et les vues. Les archives répondent « Aucune archive. » La page de consommation distingue explicitement une mesure absente d'une consommation nulle. F2 NOT PROVEN. Aucune conformité visuelle globale n'est déclarée.

Les projets historiques DEV et RECETTE n'ont pas été ouverts ni supprimés. Equipéo et MaintiPlan n'ont pas été utilisés.

## Réserves transportées

Aucune n'est requalifiée PASS. Défauts statiques connus et acceptés : R-M3-DOC-TITLE, R-M3-RECENT-IDENTITY, R-M3-PROOF-FOCUS, R-M2-PF34-REREAD. Preuves manquantes : F2, parcours navigateur naturel complet, COG-REC-01. Limites FinOps : FIN-REC-01 (une écriture commencée après la grâce peut rester non attribuée ; la course contradictoire n'est pas une preuve universelle), FIN-REC-02. Contrôles RECETTE ouverts : DOC-REC-01 à 06, PROJ-REC-01 à 03, COG-REC-01, ACT-01 à 05, FIN-REC-01 et 02. Dix-sept MP ouverts. L6 différé, Capacité 2 OUT, T08 différé. R-E5-PG-HIST reste une réserve d'outillage, pas une exemption. Aucun échec nouveau d'intégrité n'est apparu dans la campagne proportionnée. Les trois écarts M6 sont clos dans le candidat et couverts par la suite rejouée.

## Migration 028 puis 029

Le runner db-migrate.sh n'a pas été utilisé : il applique 001 à 029 et vise DEV. RECETTE réelle non modifiée.

Dump personnalisé en lecture seule, 1,6 Mo, empreinte 3ce0a525a15d5946f58afd38c794bbae5586362b9146e33c896bf5122f0e2ee9, hors Git. Restauration vers une base isolée, distincte de sfia_next_dev, sfia_next_e2e et sfia_next_recette_ml4. Aucune application n'y a été connectée. La copie reproduisait exactement les comptages et les empreintes d'identité de RECETTE : 33 projets, 212 préparations, 212 conversations, 860 messages, 125 documents, 198 révisions, 14 décisions, 35 travaux, 20 liens Git, 207 observations, 170 pilotes. Equipéo et MaintiPlan présents. Empreinte projets bac5af69512c0b8ae991e0ce0cef0675. Empreinte observations ca43de331061c4f5501ee37ab1d13f58.

028 puis 029 appliqués dans une seule transaction. Après commit : tables de portefeuille présentes, colonne titre présente, 0 titre renseigné, 0 title_source différent de NONE, 0 name_revision différent de 0, empreintes projets et observations inchangées. Une altération volontairement annulée dans une transaction n'a laissé aucune colonne. La base a ensuite été détruite et restaurée depuis le même dump : schéma revenu à 027, empreinte et Equipéo rétablis. La base d'essai a été supprimée. RECETTE réelle relue ensuite : toujours 027, même empreinte, 33 projets.

Le dump reste un artefact local hors Git. Il ne doit ni être commité ni recopié dans le handoff.

## Politique cognitive

Fichier RECETTE ~/.config/sfia-studio-next/recette/.env.local, mode 0600, 45 clés, aucun doublon. Valeurs uniques : SFIA_COG_PROVISIONAL_POLICY=v0.2 et SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.2. Le mode d'admission est absent, donc operational. Plafonds lus : 120 segments, et les enveloppes déjà en place. WEB LIVE 0, collecte Admin absente de la surcharge, lane fichier RECETTE.

Le LaunchAgent n'injecte que PATH. Le start script source le fichier puis force STUDIO_LANE=RECETTE, le port 3200, WEB LIVE à 0, l'auto-session DEV retirée, et SFIA_SOURCE_SHA=0ae9e1f7. Il ne surcharge pas la politique. Le fichier contient encore SFIA_SOURCE_SHA=e8e6e069 ; le script l'écrase pour le processus. Cette divergence doit être alignée au futur cutover, pas maintenant.

Résolution déterministe rejouée par les tests existants, sans fournisseur. v0.2 active donne Terra medium par défaut. Luna low et medium sont admis, Sol low, medium et high aussi. Terra high et Luna high ne le sont pas. Le jeton bare qualified est refusé. Une mauvaise version est refusée. L'absence de politique ou un refus de lane retombe explicitement sur legacy_sol.

CONFIGURED : vérifié dans le fichier. LAUNCH CHAIN VERIFIED : agent, script, fichier, une seule occurrence des deux clés. POLICY RESOLUTION DET PROVEN. EFFECTIVE PROCESS ENV de la politique dans le PID 58965 : NON OBSERVED. LIVE EXERCISED : non. USER QUALIFIED : non. COG-REC-01 reste ouvert.

## Plan de publication et de basculement

Cycle 11 seulement, après GO Morris lié au SHA 785253fd7003b95af631248da6bdff6279b2e541.

1. Publier la branche en fast-forward, de 87a25c5e vers 785253fd. Vérifier le SHA et le tree distants. Ne pas ouvrir de pull request dans le même geste si la CI de main doit rester inactive.
2. Créer un worktree RECETTE neuf à ce SHA. Conserver intact le worktree 0ae9e1f7 et son build p0S18hfVdGrMjGeNMGlbV.
3. Installer les dépendances verrouillées et produire un build immuable. Son BUILD_ID n'existe qu'après cette construction.
4. Mettre à jour uniquement le script de démarrage : répertoire, SHA source et identité de build. Conserver les flags opérationnels. Ne pas copier la configuration DEV. Aligner SFIA_SOURCE_SHA du fichier RECETTE sur le SHA publié, sans retirer les deux clés cognitives et sans restaurer un ancien mot de passe.
5. Contrôler la quiescence. Lecture actuelle : 394 tours COMPLETE, 1 FAILED, 31 UNKNOWN, aucun RUNNING. Travaux : 25 COMPLETE, 7 OPEN, 3 SUSPENDED. Effets : 4 COMPLETED, 5 PREPARED, aucun modifié depuis deux jours. Aucun DISPATCHED observé. Le redémarrage ne doit pas être précédé d'un travail en cours.
6. Nouveau dump immédiatement avant migration. Appliquer seulement 028 puis 029, dans une transaction, sur sfia_next_recette_ml4. Vérifier les empreintes et le fait qu'aucun titre ni nom historique n'est réécrit.
7. Rejouer le contrôle de politique v0.2 / qualified-v0.2, lane RECETTE, mode operational, et le refus du fallback legacy_sol.
8. Basculer seulement le LaunchAgent com.sfia.studio.next.recette.ml4d-ux004.
9. Smoke GET sans émission. Vérifier données, PID, BUILD réel et DEV inchangé.
10. Les émissions fournisseur, la dictée, GitHub et T08 restent sous leurs GO distincts.

## Rollback

- Applicatif : ramener le LaunchAgent et le script vers le worktree 0ae9e1f7 et le build p0S18hfVdGrMjGeNMGlbV. Non exécuté ici. Compatible en principe avec un schéma 029 additif, mais cette combinaison n'a pas été démarrée.
- Configuration : retirer seulement les changements de chemin et de SHA. Conserver v0.2, qualified-v0.2 et le mot de passe PostgreSQL actuel. Ne pas réimporter un ancien fichier d'environnement.
- Données : restaurer le dump pris juste avant la migration. Cette restauration a été démontrée sur la copie, jusqu'au retour du schéma 027 et des empreintes. Elle efface aussi les écritures faites après le dump. Elle n'a pas été exécutée sur la base réelle.

## Recette métier à préparer

Réutiliser le cahier existant et la matrice des 17 contrôles. Ne pas créer un référentiel concurrent. Nouveau projet synthétique, distinct d'Equipéo et de MaintiPlan. Parcours : portefeuille, sas, création, travail Nora, connaissance, pilotage, documents V1/V2/V3, préparation de réalisation, exécution autorisée, résultat, preuves, bilan, reprise. Transverses : allocation, activité, FinOps, droits, UX, persistance. Un échange à la fois. Ne pas injecter les identifiants MP dans les demandes Nora. Aucun PASS n'est attribué par déduction.

## Manifeste du candidat

| Champ | Valeur |
|---|---|
| Dépôt | mcleland147/sfia-workspace |
| Branche | sfia/next-ml5-integrated-delivery-20261123 |
| Base main | 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| SHA | 785253fd7003b95af631248da6bdff6279b2e541 |
| Tree | 6f22ebae5e8a2780ee20d12bf30b747918096997 |
| Build de qualification | 2jZbA_dNRduVxKfMGtma2, isolé, non servi |
| Futur BUILD RECETTE | inexistant avant construction |
| Lane future | RECETTE, http://127.0.0.1:3200 |
| Schéma | actuel 027, cible 029 |
| Dataset à préserver | 33 projets, 860 messages, 125 documents, Equipéo et MaintiPlan |
| Politique | v0.2, admission qualified-v0.2, mode operational |
| Classe | NO RELEASE, STABLE NOT AVAILABLE, 0.0.0-dev conservé |
| Preuves | 292 tests, migration rejouée, rollback de copie démontré |
| Réserves | F2, COG-REC-01, FIN-REC-01/02, 17 MP, 17 contrôles RECETTE, L6, T08 |

## Décision Morris demandée

Autoriser ensemble, pour le SHA exact : la publication fast-forward, les migrations 028 puis 029 sur la seule base RECETTE après dump frais, le basculement du LaunchAgent, et le rollback décrit en cas d'échec. Ne pas inclure dans ce GO les émissions LIVE. Ne pas exécuter ce basculement dans le présent cycle.

## Gates

A. Intégrité Git : PASS. Candidat identifiable, ancêtre vérifié, fast-forward possible.
B. Qualification intégrée : PASS proportionné, réserves de preuve transportées.
C. Isolation : PASS. Les deux runtimes servis sont restés les mêmes. La première tentative :3101 a été arrêtée avant toute requête parce que la réécriture d'URL avait visé une autre occurrence du nom de base. La seconde utilisait uniquement sfia_next_e2e.
D. Migration : PASS sur copie. Base réelle non migrée. Restauration démontrée.
E. Politique cognitive : CONFIGURED et résolution DET. Mémoire du processus NON OBSERVED. COG-REC-01 ouvert.
F. Rollback : procédure vérifiée sur copie, non exécutée en réel.
G. Recette métier : préparée, non exécutée.

TECHNICAL CANDIDATE GATE — PASS.

Ce PASS ne signifie pas que la recette métier est faite, ni que le candidat est READY FOR REAL.
