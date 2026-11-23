# Décision Morris — ML5 : Git direct Cursor et session Pilote automatique en DEV

| Champ | Valeur |
| --- | --- |
| Date | 23 novembre 2026 |
| Produit / macro-lot | SFIA Studio Next — R5 / ML5 « Réalisation technique gouvernée avec Cursor » |
| Autorité | Morris — décision explicite en conversation |
| Statut de contenu | **D2 — VALIDATED BY MORRIS IN CONTENT** pour les deux orientations ci-dessous |
| Statut Git | **BRANCHE CANDIDATE / NOT MERGED** ; ne remplace pas `main` tant que non intégré sous gate distinct |
| Effets | **AUCUNE autorisation de publication de code, PR, merge, WEB LIVE, SDK LIVE, promotion, release ou ADOPTED** |
| Sources | SEF §10, décision Git ML4/ML5 du 07/11/2026, contrats R2 D6/D7/D8/D9, conception fonctionnelle ML5 §18 et architecture ML5 §18 |
| Référence de publication documentaire | `sfia/next-nora-cognition-cursor-contract-candidate` ; mêmes addenda dans les deux documents de conception ML5 |

## DÉC-ML5-GIT — Option A : Cursor exécute les opérations Git de ses réalisations

**Décision : OPTION A — VALIDATED IN CONTENT.** L'option B (publication du code de Cursor par Studio D7/D9), autrefois recommandée dans la conception exploratoire, **n'est pas retenue pour ML5**. Ses mentions antérieures restent une trace de la comparaison, et non la cible d'implémentation.

1. **Cursor Desktop / SDK** réalise les tâches techniques sur un workspace Git isolé, lié à un dépôt autorisé et à une **branche de travail dédiée**. Cursor gère les modifications, les tests, les commits et les **pushes directs** vers cette branche, aux jalons significatifs couverts par le contrat D6. Il n'y a pas de push obligatoire à chaque action.
2. **Morris administre l'environnement Cursor** : comptes, Git, permissions du dépôt, authentifications et configuration technique des outils nécessaires. La possession d'un accès technique ne constitue jamais à elle seule un mandat d'effet.
3. **Le Pilote autorise via D6** le périmètre exact de la mission et les effets Git permis : dépôt, branche, base, mutations, publication éventuelle, exclusions, conditions d'arrêt. D7 conserve l'identité du contrat et de la tentative, vérifie les préconditions et la validité du mandat au point de dispatch ; aucun mandat n'est fabriqué à partir de la seule configuration Cursor.
4. **Studio Next ne publie pas le code réalisé par Cursor** dans ML5. D9 utilise ses propres droits d'accès Git au dépôt et à la branche distante pour **lire et vérifier** ref, SHA, fichiers, diff, commits et historique réellement publiés. D8 qualifie les preuves ; Nora réalise une analyse globale une fois la tentative réconciliée.
5. **Studio conserve sans changement son circuit ML4 de publication documentaire gouvernée.** Ce circuit n'est pas réutilisé comme publisher du code Cursor. Ne construire ni second exécuteur D7, ni moteur Git mutatif additionnel dans Studio pour cette fonction.
6. **PR, merge, tags et promotions peuvent être opérés techniquement par Cursor ultérieurement**, mais nécessitent des **mandats explicites et distinctement bornés**. Ils ne sont pas inclus automatiquement dans le contrat de développement, le GO documentaire présent, ni dans les pushes intermédiaires. Aucun force-push, merge, suppression de branche ou promotion tacite.
7. Une réalisation **locale non poussée** reste indiquée comme non disponible sur GitHub. En cas de crash, ACK perdu, révocation ou ref distante divergente, la reprise se fonde sur les SHA réellement vérifiés ; aucune relance de mutation Git à l'aveugle.

### Contrats et exit

- **F01–F09** : dépôt/base/branche/permissions vérifiés ; workspace isolé ; périmètre de commit/push ; publications visibles à distance ; SHA relus ; local ≠ distant ; absence d'effet induit ; continuité entre contrats ; réutilisation D7/D9 sans publisher code Studio.
- Avant opération Git, Cursor doit établir ses droits techniques effectifs, branch protections et cibles ; une **instruction de prompt seule n'est pas une barrière de permission**. Si le périmètre D6 ne peut être techniquement borné ou respecté, arrêter l'effet concerné.
- La publication du code de cette construction sur le dépôt SFIA, toute PR/merge et tout GitHub REAL de qualification restent des **GO distincts**.

## DÉC-ML5-DEV — Accès automatique à une session Pilote de test sur DEV local

**Décision : VALIDATED IN CONTENT.** L'environnement **DEV local de Studio Next** peut présenter directement l'application sans passage par `/login`, pour permettre à Cursor d'exécuter BROWSER/Playwright et Figma F2.

1. Implémenter un **mode explicitement activé et exclusif à DEV**, qui crée ou sélectionne **côté serveur** une identité Pilote de test déterministe et une session de test normale pour les propriétaires D1/D6/D7. **Ne pas supprimer la notion de session, l'identité ou les autorisations métier.**
2. Préconditions cumulatives : lane DEV réellement isolée (code, DB, sessions, secrets), environnement non production confirmé côté serveur, **écoute loopback ou accès restreint équivalent réellement prouvé**, configuration de test activée explicitement, aucune exposition publique. Un drapeau client, une origine/Host fournie par l'appelant ou un simple nom de variable ne suffisent pas à garantir la frontière.
3. RECETTE, STABLE et tous les environnements publics ou accessibles sans restriction gardent **l'authentification habituelle** ; les tests doivent démontrer le refus du mode automatique hors DEV. Aucun secret ou credential réel ne figure dans le dépôt, le navigateur ou le Review Pack.
4. Le compte de test ne peut pas choisir librement l'identité d'un Pilote réel. Les tests multi-Pilotes utilisent **des identités/contexts distincts préautorisés** et isolés ; aucune usurpation arbitraire par URL, cookie ou paramètre client.
5. L'auto-session ne vaut **pas** permission de GitHub REAL, WEB LIVE, Cursor SDK LIVE, MCP mutatif, publication de code, PR, merge ou promotion. D6 garde ses contrôles et ses refus au point d'effet.
6. Conserver la vérification de l'authentification normale dans une configuration de test distincte. Décrire la procédure d'activation et de désactivation, avec garde-fou fail-closed si les préconditions ne sont pas établies.

### Preuves et exit

- Ouverture BROWSER de DEV local directement sur Travail/Exécution/Résultats avec identité de test attribuée côté serveur ; page `/login` non bloquante dans ce mode.
- Tests négatifs hors DEV, exposition réseau, absence de secret, droits D6, isolation de deux Pilotes ; tests du login réel séparés.
- Acquisition des captures runtime et Figma F2 pour 12.01–12.14, avec viewport/source/SHA, sans confondre preuve BROWSER et preuve SDK/WEB LIVE.
- Une contrainte réseau ou de session non satisfaisante entraîne **STOP du mode automatique**, pas la neutralisation générale de D1.

## Portée du GO documentaire et suivi

Morris autorise expressément le **contenu de ces deux arbitrages** et leur **publication Git documentaire** avec les addenda cohérents dans les deux documents candidats ML5, sur la branche de conception candidate. Aucun autre fichier projet, chemin normatif partagé, `main`, PR, merge ou effet technique n'est autorisé par ce mandat.

**État de sortie documentaire : VALIDATED IN CONTENT / GIT CANDIDATE PUBLISHED après relecture distante ; IMPLEMENTATION TO DO / BEHAVIOR NOT PROVEN / NOT ADOPTED.**

La poursuite se fait **dans le ML5 existant** : Cursor vérifie le worktree local, intègre ces décisions dans le contrat de construction, développe les composants manquants, les teste et présente un Review Pack FULL avec Handoff L3 conforme.
