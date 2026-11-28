# Review Pack FULL — Mise à disposition RECETTE du candidat intégré

- date et heure : 2026-11-28 20:29 Europe/Paris
- cycle : 11 — Déploiement / release
- profil : Critical
- typologie : RUN
- classe : NO RELEASE
- GO Morris : publication fast-forward de 785253fd7003b95af631248da6bdff6279b2e541, migrations 028 et 029 après sauvegarde et quiescence, basculement du runtime RECETTE, rollback sécurisé en cas d'échec. Aucun GO LIVE, PR, merge ou release.
- Review Pack : FULL, mono-cycle, aucun fichier produit modifié

## Local Git Truth Check

Correspondance avant publication. Branche sfia/next-ml5-integrated-delivery-20261123. HEAD 785253fd7003b95af631248da6bdff6279b2e541, parent ca6f47a17427218f6b01effdda570cdd78e8d901, tree 6f22ebae5e8a2780ee20d12bf30b747918096997. Origine avant push 87a25c5eed65a1b30c6f608dcccb57f0c5992eff. main et merge-base 997897fd7cf914771e7d08e8030dc7123fab7d25. Avance 5, retard 0. Delta des cinq commits : 19 fichiers, +2039/−276. Delta depuis la RECETTE alors servie : 26 commits, 102 fichiers, +11787/−1270. Index propre. Aucun dump ni secret dans Git. Aucun reset, amend ou rebase.

## Publication

Push fast-forward 87a25c5e..785253fd. HEAD distant et tree distant relus : 785253fd7003b95af631248da6bdff6279b2e541 et 6f22ebae5e8a2780ee20d12bf30b747918096997. main inchangé. Aucune pull request ouverte. Aucun workflow ne se déclenche sur le push de cette branche : les trois workflows ne partent que vers main. Aucune exécution Actions listée pour ce SHA. PUBLISHED. CI VERIFIED : non applicable, aucune exécution. Ce n'est pas encore l'acceptation utilisateur.

## Incident du serveur temporaire :3101

La première tentative a laissé DATABASE_URL vide. Next a donc chargé .env.local, soit sfia_next_dev sur le port 5433. Le processus a annoncé Ready puis a été arrêté en 16 secondes, sans requête HTTP. Le hook de démarrage reprend les superviseurs DISPATCHED et les restitutions incomplètes. DEV n'avait aucun essai DISPATCHED. Un balayage des 96 colonnes timestamptz de sfia_next_dev sur la fenêtre 19:10:40–19:11:30 UTC n'a trouvé aucune ligne. Aucune observation de consommation n'a été ajoutée. Une capture réseau n'a pas été faite. La contamination persistée n'est pas observée.

## Build RECETTE

Worktree détaché /Users/morris/Projects/sfia-workspace-next-ml5-recette-build-785253fd7003, SHA et tree du candidat. Dépendances verrouillées installées. L'ancien worktree 0ae9e1f7 et son build p0S18hfVdGrMjGeNMGlbV sont intacts. Build de production sans STUDIO_E2E. BUILD_ID 1vUakgaqdIX7rRYMZIJQE. Empreinte du fichier BUILD_ID b03484203a37b342a716117462dddca7389143d58f0d217d0d3e66554e14f862. Le build de qualification 2jZbA_dNRduVxKfMGtma2 n'est pas celui-ci. Aucune écriture RECETTE pendant la construction. Version technique 0.0.0-dev, inchangée.

## Quiescence et sauvegarde

Avant arrêt : 0 tour RUNNING, 0 effet DISPATCHED, 0 connexion applicative. Comptages : 33 projets, 212 préparations, 212 conversations, 860 messages, 125 documents, 198 révisions, 14 décisions, 35 travaux, 20 liens Git, 207 observations, 170 pilotes. Equipéo et MaintiPlan présents. Empreinte projets bac5af69512c0b8ae991e0ce0cef0675. Empreinte messages c99c873f990fd324d884498e6e9ec958. Empreinte observations ca43de331061c4f5501ee37ab1d13f58. Identiques au préflight.

Le LaunchAgent a été arrêté. Le port 3200 était libre. Dump frais custom, 1,6 Mo, mode 0600, 2026-11-28T19:27:02Z, empreinte 614d40cd9f207d43fb22766d10ad2ccfaedda21bac8998fb00f2420f205d1069, fichier recette-pre-029-20261128T192702Z.dump, hors Git. Restauration isolée vérifiée : même empreinte projets, 860 messages, schéma encore 027. La copie a été supprimée. DEV n'a pas été la cible.

## Migrations

Uniquement 028 puis 029, blobs ebdfd166 et 28134eba, dans une transaction, après contrôle du nom de base. Le runner 001–029 n'a pas été utilisé. Après commit : tables de portefeuille, index, colonne titre, contrainte de source et contrainte de vue présents. 0 titre renseigné, 0 title_source différent de NONE, 0 name_revision différent de 0. Empreintes projets, messages et observations inchangées. Equipéo et MaintiPlan toujours présents. 207 observations. Schéma cible 029 atteint par ces objets additifs, pas par une nouvelle DDL.

## Politique cognitive

Fichier et script portent tous deux SFIA_SOURCE_SHA=785253fd7003b95af631248da6bdff6279b2e541. Les clés v0.2 et qualified-v0.2 restent uniques. Le script ne les surcharge pas. Le LaunchAgent n'injecte que PATH. Lane RECETTE, WEB LIVE 0, collecte Admin 0, auto-session DEV retirée. Plafonds non modifiés.

Le démarrage aurait sinon planifié, au bout de 2,5 s, un avis Nora sur une restitution historique déjà COMPLETE et de nature DETERMINISTIC. Le script exporte donc SFIA_BOOT_DEFER_NORA=0. Ce n'est pas un changement de politique ni de plafond. Aucun appel fournisseur n'a été ajouté après le démarrage : les observations restent à 207 et aucun tour RUNNING n'est apparu.

CONFIGURED et LAUNCH CHAIN VERIFIED. POLICY RESOLUTION DET PROVEN sur ce SHA pendant la qualification (38 tests). Le rejeu dans le worktree RECETTE a été refusé par le garde de port, parce que la variable de connexion visait encore 5434 : aucune connexion de test n'a été ouverte. EFFECTIVE PROCESS ENV du PID : NON OBSERVED. LIVE EXERCISED : non. USER QUALIFIED : non. COG-REC-01 OPEN.

## Runtime servi

URL http://127.0.0.1:3200. Parent launchd 28187, serveur 28230, cwd du nouveau worktree. BUILD_ID 1vUakgaqdIX7rRYMZIJQE, présent dans le HTML. Smoke : /login, /portfolio et /settings/consumption en 200 ; /api/auth/status en 200, fournisseur configuré, sans session. Le HTML non authentifié ne contient ni Equipéo ni MaintiPlan. Aucune auto-session DEV. Aucun nouveau dispatch. DEV : PID 95074, build ocqwE2XKIzLKTSuHGRNxf, port 3100, non redémarré.

Le journal d'erreur partagé contient un TypeError `b.mask is not a function`, sans horodatage propre. Le nouveau processus est resté le même avant et après le smoke. Ce n'est pas un échec de démarrage.

## Rollback

Non exercé. Disponible : ancien worktree et build p0S18hfVdGrMjGeNMGlbV, copies du script, du fichier d'environnement et du LaunchAgent, dump frais vérifié. Le retour au schéma 027 n'est pas supposé compatible avec l'ancien binaire. Il se ferait par restauration du dump, seulement s'il n'y a aucune écriture nouvelle à conserver.

## Réserves

M1 à M6, F2, FIN-REC-01/02, DOC-REC-01 à 06, PROJ-REC-01 à 03, COG-REC-01, ACT-01 à 05, 17 MP, L6 différé, T08 différé, Capacité 2 OUT. Aucune n'est requalifiée PASS. Recette métier non engagée.

## Manifeste

| Champ | Valeur |
|---|---|
| delivery_id | DELIV-2026-11-28-ML5-RECETTE-INTEGRATED |
| Lane | RECETTE |
| Dépôt / branche | mcleland147/sfia-workspace · sfia/next-ml5-integrated-delivery-20261123 |
| main | 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| SHA / tree | 785253fd7003b95af631248da6bdff6279b2e541 · 6f22ebae5e8a2780ee20d12bf30b747918096997 |
| BUILD_ID | 1vUakgaqdIX7rRYMZIJQE |
| Empreinte BUILD_ID | b03484203a37b342a716117462dddca7389143d58f0d217d0d3e66554e14f862 |
| Worktree | sfia-workspace-next-ml5-recette-build-785253fd7003 |
| URL / PID | http://127.0.0.1:3200 · 28230, parent 28187 |
| PostgreSQL | 127.0.0.1:5434 · sfia_next_recette_ml4 · rôle sfia_next_recette_ml4 |
| Schéma | 029 · migrations 028 et 029 |
| Dataset | 33 projets, 860 messages, 125 documents, empreinte projets bac5af69512c0b8ae991e0ce0cef0675 |
| Politique | v0.2 · qualified-v0.2 · SFIA_BOOT_DEFER_NORA=0 |
| Sauvegarde | recette-pre-029-20261128T192702Z.dump · 614d40cd9f207d43fb22766d10ad2ccfaedda21bac8998fb00f2420f205d1069 |
| Rollback | disponible, non exercé |
| Capacités | CONFIGURED / ADMITTED selon les flags conservés · LIVE EXERCISED non · USER QUALIFIED non |

RECETTE DEPLOYED — TECHNICAL SMOKE PASS.
