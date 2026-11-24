# SFIA Studio Next — Pré-analyse des écarts : cognition transverse de Nora et réalisation Cursor

> **Suivi courant ML5 — 24/11/2026 (candidat documentaire) :** [journal UAT](../construction/recette-utilisateur-ml5-pilotage-360-20261124.md). Etats historiques conservés à leur SHA ; aucune nouvelle acceptation ni règle normative.


> **Lecture courante post-C22 :** [revue indépendante §12](https://github.com/mcleland147/sfia-workspace/blob/ea74688a2ac2643a157dc680d4b2f5fa1fa0b517/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md), addendum factuel en fin de document ; pas de changement normatif.

> **Lecture courante post-C20 :** [synthèse globale](https://github.com/mcleland147/sfia-workspace/blob/978e42648aa0149e4f2f2bab03b4483a5bbfd496/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md#11-revue-globale-post-c20--état-de-travail-au-24112026-d1-factuel), addendum factuel en fin de document. Exigences et décisions antérieures conservées ; aucune adoption ni GO lot 2.

> **Lecture prioritaire — revue approfondie post-C14 (24/11/2026) : ML5 TARGET ARCHITECTURE COHERENT — IMPLEMENTATION CONFORMITY PARTIAL — FUNCTIONAL COMPLETION REQUIRED.** [Revue complète](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md) ; [registre](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md) ; [acceptation](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md). Morris valide la consolidation et les trois lots de convergence comme base de travail, pas une adoption ni un GO C15. Les sections R-004 et les instantanés préconstruction restent historiques pour l'état, opposables pour les exigences. Code reproduit dans snapshot consulté, worktree NON OBSERVÉ, aucune publication projet.

> **Lecture prioritaire — consolidation R-004 du 24/11/2026.** Morris confirme la poursuite de ML5 (R5), la primauté de la complétude fonctionnelle et l'arbitrage de conduite sémantique de Nora ci-dessous. Les constats antérieurs à la construction sont historiques. Les handoffs C11–C13 établissent des frontières DEV LIVE bornées, pas une acceptation globale. Le candidat code C3–C13 reste local, non publié et NON OBSERVÉ directement par ChatGPT. Aucun GO de publication code, PR, merge, RECETTE, release ou adoption ; aucun changement de la décision Git A. La fidélité Figma reste une exigence reportée à la recette UX, non un gate de la consolidation fonctionnelle actuelle.

## Base d'investigation architecture et UX — ML5

> **Lecture prioritaire :** axes A, B et C consolidés aux **§15–17** ; **§18 axe D** : Cursor SDK local, états LIVE sobres, branche Git de travail, handoff de fin de tentative et revue globale Nora. **§18.12 précise la convergence du 23/11 et prime sur toute suggestion historique de revue intermédiaire.** Aucune implémentation ni preuve runtime/REAL, aucun GO construction, PR, merge ou ADOPTED.

| Champ | Valeur |
| --- | --- |
| Nature | **Document d'analyse exploratoire D0**, enregistré sur branche candidate ; non normatif, non décisionnel |
| Version | **v0.10 candidate — consolidation R-004 du 24 novembre 2026 ; v0.9 historique** ; axe D : machine à états candidate D7, événement LIVE, publication Git, remise du handoff, D8 et configuration MCP SDK |
| Statut | **DOCUMENTED / A+B+C CONSOLIDÉS ; D ORIENTATION ET PARCOURS AFFINÉS SUR DEMANDE MORRIS — NOT ARCHITECTURE-VALIDATED / NOT QUALIFIED FOR BUILD** ; SDK local privilégié ; **LIVE sobre pendant, revue Nora finale uniquement**, Git et handoff traçables ; transport, contrôle runtime et sûreté à qualifier |
| Autorité de décision | Morris ; aucune adoption d'architecture inférée |
| Source fonctionnelle candidate | [Contrat fonctionnel Nora transverse et Cursor](../conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md) — base v0.3 validée ; compléments v0.4 et v0.5 candidats, branche candidate |
| Base Git du diagnostic | **main@997897fd7cf914771e7d08e8030dc7123fab7d25** ; branche candidate initiale **39c00f72c10e69f7981dd2490a0b68fc5e4b8d78** |
| Worktree et index locaux | **NON OBSERVÉS** |
| État de gouvernance | Ensemble 08 intégré sur main avec réserves ; **Gate C OPEN** ; aucun GO Cursor ML5, ni PR, merge, release ou ADOPTED déduit ; validation visuelle Morris de la page 12 Figma ne vaut pas gate technique |
| Portée | Pré-qualification en lecture seule du code et de la documentation Next ; analyse à approfondir, **pas un contrat technique d'exécution** |

> Ce document fixe les **premiers écarts observés** entre la vision fonctionnelle validée et la réalité du dépôt, afin de reprendre la qualification d'architecture ultérieurement. Il ne modifie ni SEF, ni Roadmap, ni ADR, ni spécifications R2 propriétaires ; il ne remplace pas une revue exhaustive des flux, invariants, tests et preuves LIVE/REAL.

> **Décisions Morris du 23/11/2026 — lecture prioritaire :** voir **§19** et la [décision Git direct Cursor + auto-session DEV](https://github.com/mcleland147/sfia-workspace/blob/b411e3276e987e93627348de266e0b383419eab9/projects/sfia-studio-next/governance/decisions/2026-11-23-ml5-cursor-git-direct-et-session-dev-automatique.md). **Option A validée** : Cursor commit/push directement sous mandat ; D9 lit/vérifie ; Studio ne publie pas le code. Les recommandations historiques pour B sont supplantées. DEV auto-session local autorisé en conception avec garde-fous ; aucune preuve runtime ni GO d'effets externes implicites.

---

# 1. Résultat recherché et trajectoire

## 1.1. Capacité intégratrice

La cible utilisateur est une chaîne complète et gouvernée :

**Intention → investigation séquencée par Nora → contrat unique/versionné → inspection 50/50 → autorisation explicite Exécuter → tentative Cursor → suivi observable → rapport et preuve → analyse de Nora → décision éventuelle du Pilote → reprise contextualisée.**

Trois capacités cognitives doivent servir **toutes les activités pertinentes de Nora**, et non exclusivement Cursor ou le chat projet :

1. **Investigation approfondie et séquencée**, avec sélection proportionnée des sources, suivi de dépendances, confrontation, consolidation et traitement explicite des limites.
2. **Recherche et lecture web publiques**, en lecture seule, sourcées et sécurisées ; résultats trouvés ≠ pages réellement consultées.
3. **Activité Nora fonctionnelle observable pendant le travail**, synthétique et honnête, sans exposer une chaîne de pensée privée ni inventer une progression.

ML5 est le lot intégrateur de ces fondations et de la réalisation technique Cursor, sans deuxième moteur de Nora, D7, décisions ou résultats.

## 1.2. Parcours UX déjà retenu comme base D0

- Travail : rail de navigation fixe, fil Nora central, visionneuse de contrat à droite en **50/50 horizontal**.
- Carte conversationnelle : **Voir le contrat / Ouvrir dans Exécution**, pas de bouton d'exécution directe sur la carte.
- Visionneuse : quatre engagements, six volets, instruction technique complète, Exécuter ; **pas de bouton Agrandir**.
- Confirmation unique et courte : **« Êtes-vous sûr de vouloir lancer l'exécution ? »**, réponses **Non / Oui**.
- Après Oui : fiche de la tentative dans **Exécution**, sans inventer une prise en charge Cursor.
- Exécution : historique, contrat inspectable, états réellement observables ; suivi en **zone gauche situation/mandat** et **zone droite rapports/résultats**, sans chat ni compositeur.
- Résultats & preuves : **consultation**, avec analyse favorable/réservée/défavorable/indéterminée de Nora, références et réserves ; **pas de boutons Accepter / Refuser / Reporter**.
- **En discuter avec Nora** : référence au bilan jointe au **prochain message préparé**, modifiable et retirable ; aucun envoi automatique.
- Activité Nora : vue compacte et détails repliables, partout où Nora travaille ; **transparence seulement**, pas de micro-interruption.

Ce sont des orientations de conception et de wireframe v0.4, **pas une preuve de correspondance Figma ni un écran Next implémenté**.

# 2. Hiérarchie et périmètre des vérifications

## 2.1. Sources de référence consultées

- [SEF v0.2](../governance/SEF.md) : macro-lots, preuves, gates, autorité, anti-fragmentation.
- [Roadmap Next](../governance/roadmap.md) : état vivant, Ensemble 08 et Gate C ; relecture exigée à chaque reprise.
- [Décision ML4 Git / ML5 Cursor](../governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md) : séparation documentaire Git et réalisation technique.
- [Décision de qualification sémantique](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) : Nora comprend et mobilise, Studio contrôle les effets ; suppression à prouver des routeurs lexicaux métier.
- [Convention de nommage](../governance/product-naming-conventions.md) : nom par responsabilité durable.
- [Cadrage R4](cadrage-r4.md) : frontières D1–D9, options et invariants ; décisions non inférées.
- [Contrat d'observabilité transverse](contrat-observabilite-transverse.md) : corrélation et événements, natif d'abord, absence de traces ≠ preuve.
- Spécifications R2 D3/D4/D6/D7/D8/D9 et contrat UX R3 : responsabilités propriétaires et garde-fous.

## 2.2. Code Next exploré (main)

- **D3** : web/src/domains/conversation/cognitive-policy.ts ; nora-adapter.ts ; service.ts ; turn-projection.ts ; d4-read-tools.ts ; history-tools-sdk.ts ; git-read-tools.ts.
- **D6** : web/src/domains/decisions/service.ts ; domains/execution/effect-authority.ts.
- **D7** : web/src/domains/execution/types.ts ; effect-service.ts ; claim-lease.ts.
- **D8** : web/src/domains/proofs/qualify.ts ; éléments probatoires Git existants.
- **UX** : web/src/components/figma/NoraConversation.tsx ; PreparationConversation.tsx ; TravailViewer.tsx.
- **Persistance** : web/src/db/schema.ts (commandes de tour, décisions, documents, tentatives d'effets Git).
- Les scénarios et preuves d'Ensemble 08 sont connus par la Roadmap. **Le code n'a pas été exécuté dans cette revue ; aucune vérification navigateur ou LIVE/REAL nouvelle.**

## 2.3. Limites d'observation

Le diagnostic repose sur fichiers Git distants et extraits contrôlés. Il ne couvre pas encore un inventaire exhaustif des routes API, hooks UI, migrations, tests, flux de bout en bout, sécurité HTTP/provider ou configuration opérationnelle.

**Le code local, la configuration secrète, la connexion Cursor effective et l'environnement de production sont NON OBSERVÉS.**

La présence d'une classe ou d'un domaine n'est pas une preuve qu'un chemin utilisateur aboutit en production. À l'inverse, une fonction non rencontrée pendant l'échantillonnage ne suffit pas à prouver l'absence universelle d'une capacité.

# 3. Matrice initiale des écarts

| # | Capacité visée | Fondations et indices vérifiés sur main | Écart candidat à instruire | Gravité initiale |
| --- | --- | --- | --- | --- |
| **E1** | Investigation cognitive transverse approfondie | Agents SDK, agent Nora, D4, historique, Git, profils et budgets existent | Pas de parcours de préparation longue, avec consolidation fiable inter-étapes et calibration opérationnelle **démontré** ; complexité de qualification à revoir | **Critique** |
| **E2** | Recherche et lecture web transverse | Assemblage d'outils D4/historique/Git présent dans nora-adapter.ts | **Aucun outil web dans la liste et l'assemblage consultés** ; recherche, ouverture de page, provenance, sécurité, SSRF/injection et coûts à intégrer | **Haute / frontière de confiance structurante** |
| **E3** | Activité fonctionnelle Nora en continu | Indication « prépare une réponse », projection après tour, socle de télémétrie D3 | Pas de fil détaillé d'étapes et consultations en cours de réponse **démontré** ; lien événements/UX/continuité à établir | Haute |
| **E4** | Contrat et instruction technique Cursor | D7 pour Git, D6 HumanDecision et contrôle d'effets, inspection Git | D7 courant traite publication/merge Git ; **voie Cursor non implémentée** ; identité/version et mandat technique à relier | **Critique** |
| **E5** | Tentative Cursor et suivi durable | Effect attempts, lease/claim, gestion d'ambiguïté Git | Adaptation générique à Cursor, ACK/STOP/reprise et états observables sans deuxième orchestration | **Critique** |
| **E6** | Résultats Cursor et avis Nora | D8 qualifie déjà des faits Git sans inventer conformité ni acceptation | Contrat de preuves Cursor, bilan consultatif et retour au chat contextualisé non prouvés comme parcours intégré | Haute |

**Lecture de la matrice :** « critique » désigne l'importance pour l'objectif ML5, non une sévérité d'incident opérationnel prouvée. « Existant » signifie code observé, et non niveau ADOPTED.

# 4. Analyse par responsabilité

## 4.1. E1 — Conduite cognitive Nora

### Éléments observés

- Le code utilise **@openai/agents** et un agent Nora avec accès aux outils de lecture autorisés.
- La politique cognitive comporte des profils **simple / analyse / investigation**.
- Le code contient des budgets par profil et un compteur partagé pour les lectures D4/historique, avec un compteur Git distinct et une enveloppe de caractères commune.
- Un profil **TEST_BOUNDARY** est utilisé pour les tests ; **OPERATIONAL_PROVISIONAL** existe mais **OPERATIONAL_VALIDATED n'est pas adopté**.
- Le routage de la complexité repose encore notamment sur des critères de taille du message dans cognitive-policy.ts ; cela peut sous-qualifier une très courte demande complexe.

### Écart et impact

L'objectif du contrat n'est pas d'augmenter tous les budgets par défaut. Il faut établir comment Nora adapte réellement sa stratégie et ses ressources au besoin, comment elle poursuit une lecture en plusieurs étapes et comment elle évite de perdre restrictions, provenances et contradictions dans ses consolidations.

**Exemple discriminant :** cinq mots demandent une expertise technique transverse sur plusieurs documents. Un profil réduit déduit de la seule longueur est insuffisant, même avec une fenêtre de contexte élevée.

### Questions d'architecture

- La progression longue se réalise-t-elle dans une génération, plusieurs générations corrélées ou un processus durable ? Conditions de sécurité et de reprise ?
- Quels acquis intermédiaires sont réellement utiles, et comment les conserver sans second registre de connaissance ?
- Comment décider de continuer l'investigation, de produire, de demander précision ou de déclarer non prêt ?
- Comment mesurer tokens, latence, nombre de consultations, coût et dégradation réelle ?
- Quelle compatibilité du SDK verrouillé avec la stratégie choisie, y compris structured output et streaming ?

### Critère de réussite

Sur un corpus réaliste mêlant documents, décisions, conversations et résultats contradictoires, Nora retrouve les sources indispensables et **n'annonce pas une complétude qu'elle n'a pas atteinte**, sans dégradation artificielle des demandes simples.

## 4.2. E2 — Recherche web en lecture seule

### Éléments observés

La liste d'outils de cognitive-policy.ts et l'assemblage effectif dans nora-adapter.ts couvrent D4, historique et Git READ, mais pas la recherche web native.

### Écart et impact

Il manque une capacité transversale permettant à Nora de **rechercher, ouvrir et lire** des pages ou documents publics pertinents, de qualifier version et actualité et de distinguer une page réellement consultée d'un lien trouvé.

### Questions d'architecture

- Fournisseur de recherche, accès au contenu, extraction de HTML/PDF, gestion des refus/rate limits et de la fraîcheur.
- Traitement d'une recherche technique actuelle (documentation Cursor CLI/API/agents cloud) sans en déduire une capacité disponible pour l'utilisateur.
- Protection contre prompt injection, pages trompeuses, redirections, exfiltration, environnements et contenus privés.
- Budgets et profondeur de recherches proportionnels au travail, sans moteur de navigation généraliste gratuit.
- Observabilité : « liens trouvés » versus « pages effectivement ouvertes ».

### Critère de réussite

Nora exploite une documentation technique réelle et actuelle lorsque nécessaire, cite ses sources et limitations et conserve l'autorité aux propriétaires Studio.

## 4.3. E3 — Activité Nora lisible pendant le travail

### Éléments observés

- NoraConversation.tsx et PreparationConversation.tsx exposent surtout des états simples de préparation / erreur.
- turn-projection.ts sait produire un résumé d'activité associé à la restitution d'un tour.
- Le contrat d'observabilité transverse spécifie des événements D3, corrélation, latence, appels outils et mesures, avec protection contre les faux états.

### Écart et impact

Le Pilote ne peut pas encore suivre **de manière démontrée** la progression fonctionnelle détaillée de l'investigation en cours : consultation Git, confrontation de documents, lecture web, obstacle, consolidation, vérification finale.

### Questions d'architecture

- Quels événements instrumenter sans journal de télémétrie concurrent ni fuite de données ?
- Quel transport UI permet une activité réellement à jour dans le sas et les projets ?
- Comment distinguer **fait d'outil observé** et **étape de travail déclarée par Nora**, sans simuler un raisonnement privé ?
- Comment reconstituer après un refresh une activité durablement disponible, sans promettre une garantie absolue de traçage ?
- Quel coût de streaming et quelle accessibilité du composant de conversation ?

### Critère de réussite

Pendant une investigation multi-sources réelle, l'UX affiche des opérations intelligibles et conformes aux traces ; ne prétend pas « Git consulté » sans lecture et n'affiche aucun pourcentage arbitraire. **Transparence seule**, sans micro-commandes d'interruption.

## 4.4. E4 — Contrat unique et autorité Cursor

### Éléments observés

- Le type EffectKind dans domains/execution/types.ts est limité à **GIT_PUBLICATION | GIT_MERGE**.
- domains/execution/effect-service.ts fournit une chaîne prepare/authorize/dispatch Git et des contrôles de droits.
- domains/execution/effect-authority.ts réutilise les décisions D6 et les restrictions applicables.
- db/schema.ts contient les tentatives d'effets Git et les décisions humaines.

### Écart et impact

Le contrat Cursor, ses deux lectures cohérentes, la version effectivement inspectée et le mandat technique à transmettre ne sont pas réalisés par cette voie Git actuelle.

### Questions d'architecture

- Quelle frontière du service D7 est véritablement réutilisable et quelles parties sont spécifiques à GitHub ?
- Comment intégrer Cursor **sans second moteur d'exécution/autorité** ni transformer l'exécution Git existante en abstraction coûteuse ?
- Où sont conservées identité, version, empreinte, sources, restrictions, instruction intégrale et tentative ?
- Comment contrôler les droits **réels de Cursor** indépendamment des permissions Git de Studio ?
- Comment préparer des instructions longues sans troncature ni modification après inspection ?

### Critère de réussite

Une seule version identifiable et complète du contrat est inspectée, autorisée, transmise et rapprochée de la tentative ; chaque effet reste dans le mandat D6 applicable.

## 4.5. E5 — Dispatch, ACK, suivi, STOP et reprise

### Éléments observés

D7 Git dispose d'outils de claim/lease et d'observations partielles, avec gestion d'erreurs et d'ambiguïté. Ensemble 08 a été intégré avec des réserves, notamment sur certains scénarios REAL de perte de réponse et de fusion.

### Écart et impact

La voie Cursor nécessite un choix d'intégration réellement disponible et des garanties spécifiques : création de tentative, idempotence, événement de prise en charge, suivi, retour de rapport, échec, arrêt et état incertain.

### Questions d'architecture

- Cursor CLI, API ou agents cloud : quelles capacités sont documentées, accessibles et vérifiables ?
- Quelle identité et quelles autorisations pour l'exécutant ?
- Comment connaître la prise en charge réelle et différencier « demande envoyée », « activité observée » et « terminé selon Cursor » ?
- Que faire après timeout ou accusé perdu sans déclencher une seconde exécution ?
- La demande d'arrêt peut-elle être transmise ? Comment observer son effet ? Quelles limites de réversibilité ?

### Critère de réussite

La fiche Exécution reconstitue la même tentative après reconnexion, y compris les inconnues. Un état incertain ne devient ni succès ni second dispatch automatique.

## 4.6. E6 — Résultats, preuves et avis

### Éléments observés

- domains/proofs/qualify.ts qualifie des observations Git sans déduire automatiquement tests PASS, conformité, acceptation Morris ou ADOPTED.
- Les D6 et D8 canoniques distinguent verdict probatoire et décision métier.

### Écart et impact

Il faudra accueillir rapports Cursor, tests et références réellement récupérés, confronter les critères, restituer les écarts, puis proposer une **analyse Nora consultative** visible en tête de bilan.

### Questions d'architecture

- Comment associer une preuve à une tentative et à la version exacte de son contrat ?
- Quels résultats sont « déclarés », « observés », « démontrés » ou « indéterminés » ?
- Comment produire un avis favorable/réservé/défavorable sans créer un acte HumanDecision ?
- Comment relier la fiche Résultats à Exécution et rattacher un bilan au prochain message de Nora ?

### Critère de réussite

Le Pilote consulte et comprend un bilan sans devoir l'accepter dans cet écran ; Nora peut donner son avis sans statuer à sa place. Le chat retrouve le bon résultat par référence explicite, sans envoi automatique.

# 5. Impacts transverses et risques

| Surface de changement | Effets à qualifier avant toute modification |
| --- | --- |
| **D3 / agent / politique** | stratégie d'investigation, outils, streaming, profil/effort/budget, gestion des erreurs et états |
| **D4 / mémoire / historique** | récupération de sources, versions, pagination, provenance, reprise et acquis intermédiaires |
| **D6 / autorité** | GO de préparation vs acte Exécuter ; version, portée, restrictions, suspension |
| **D7 / intégrations** | séparation Git/Cursor, tentative, idempotence, provider, suivi et STOP |
| **D8 / preuves** | rapport déclaré, observation, test, conformité bornée et avis Nora distincts |
| **D9 / Git** | références, accès réel, droits distincts de Cursor et réconciliation Git |
| **UX / navigation** | sas + Travail, activité live, 50/50, contrat, suivi, bilan et retour contextuel |
| **Données / API** | identité, état durable, événements, transaction, erreurs, changement de version et dégradation |
| **Sécurité** | contenus externes non fiables, filtrage des traces, secrets, multi-Pilotes, permissions |
| **QA / gouvernance** | tests déterministes et navigateur ; LIVE/REAL proportionné, docs/as-built synchronisées, gates |

Principaux risques : surcharge de contexte, budgets sous-calibrés, recherche web non fiable, activité inventée, moteur parallèle, contrat tronqué, doublon de dispatch, STOP présenté comme acquis, preuve sur-vendue, périmètre fragmenté.

**Réponse attendue :** traiter le résultat de bout en bout, consolider en réutilisant les propriétaires existants, n'ajouter d'abstraction qu'après justification et prévoir un exit explicite pour toute dette.

# 6. Préparation de la conception Figma — étape UX priorisée

Le Pilote a souhaité **concevoir les écrans Figma avant de poursuivre l'étude d'architecture détaillée**. Les dix scènes candidates ont ensuite été construites sur [la page 12 Figma](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1209-2), harmonisées avec les pages 10/11, puis **validées visuellement par Morris le 22/11/2026** ; cette validation porte sur la maquette et ne prouve pas les flux runtime. Cette séquence est compatible avec la nature exploratoire du présent diagnostic, à condition de garder visibles les limites de preuve.

## 6.1. Orientation

**Réutiliser le fichier Figma Next et ses conventions UX existantes.** Ne pas reconstruire un second design system, ni multiplier les pages de démonstration sans rapport avec le parcours projet. D'abord revoir les écrans actuels ; ensuite décider où ajouter les états ML5.

## 6.2. Inventaire des vues à réconcilier avec le Figma réel

| Vue / état cible | Composition retenue | Contrôle visuel attendu |
| --- | --- | --- |
| **Travail — conversation normale** | Rail + conversation, carte de contrat dans le fil | Continuité du fil et absence d'autorisation depuis la carte |
| **Travail — contrat inspecté** | Rail + chat central + visionneuse droite 50/50 | Engagements, instruction, bouton Exécuter et « Ouvrir dans Exécution » |
| **Travail — activité Nora** | Indicateur sobre, détail repliable ; activité fonctionnelle seulement | Sas, projet, création documentaire et investigation longue |
| **Confirmation** | Dialogue générique Oui/Non | Aucune autre décision ni récapitulatif imposé |
| **Exécution — historique** | Liste filtrable à gauche, détail intervention à droite | Projet, date, cycle éventuel/hors cycle, version, tentative |
| **Exécution — fiche contrat** | Contenu inspectable sans chat | Une seule version et instruction complète |
| **Exécution — suivi tentative** | Situation/mandat à gauche, rapports/résultats à droite | Retour observé ≠ conformité ; pas de console de simulation produit |
| **Résultats & preuves — consultation** | Historique et détail, analyse de Nora mise en tête | Avis consultatif, preuves et réserves, pas de boutons d'acceptation |
| **Résultats → Nora** | Retour au chat avec référence de bilan jointe au brouillon | Aucun envoi automatique, référence modifiable/retirable |
| **États limites** | READY, REQUESTED, RUNNING, UNKNOWN, FAILED, STOP demandé et rapport partiel | Véracité des états, liens et options cohérentes |

## 6.3. Processus de réalisation des écrans

1. **Audit Figma ciblé** : pages Travail, Documents, Exécution, Résultats, sas et composants communs ; identifier frames, grille, tokens et composants réellement disponibles.
2. **Mapping wireframe v0.4 → frames Figma** : conserver structure, navigation, géométrie et DA validées ; identifier uniquement les états manquants.
3. **Préparation des variantes et états** : contrat 50/50, suivi sans chat, résultats consultatifs, activité fonctionnelle commune et états limites.
4. **Réalisation Figma sous GO adapté** : variantes réutilisables et scènes de référence ; pas de choix d'API/persistance par la maquette.
5. **Revue visuelle Morris** : cohérence Figma existant, lisibilité et continuité ; verdict UX documenté avec captures.
6. **Raccord au diagnostic architecture** : l'UX précise les contrats d'information, mais n'implique pas des capacités runtime déjà acquises.

## 6.4. In/Out de cette priorité UX

**IN :** création/adaptation des scènes nécessaires au parcours ML5 et à l'activité Nora transverse, dans la grammaire existante, avec états nominaux et sensibles.

**OUT :** nouvelle charte graphique, double design system, animation complexe, console de logs technique, preuve de Cursor REAL par maquette, programmation et choix d'infrastructure.

# 7. Questions encore ouvertes et travaux de qualification

Les questions suivantes sont **techniques ou d'intégration**, pas des blocages à la poursuite de l'UX :

1. Stratégie de progression cognitive sur plusieurs étapes et de reprise après limite.
2. Calibration sémantique de la complexité et des budgets, notamment pour une demande courte complexe.
3. Provenance, sécurité et coût de la lecture web publique.
4. Contrat d'événements de l'activité Nora, transport en direct, reprise et confidentialité.
5. Identités/version/empreinte des contrats longs et lien avec D6/D7.
6. Choix et preuve des interfaces Cursor réellement accessibles.
7. Gestion des états de tentative, du STOP, de la perte d'ACK et des effets partiels.
8. Formats et critères probatoires Cursor, restitution de l'avis Nora sans nouvelle autorité.
9. Mapping Figma précis, réutilisation de composants et détails de responsive/accessibilité.
10. Besoin réel d'évolution des données, erreurs/permissions et testabilité sans dette permanente.

La qualification d'architecture devra trancher les dépendances réelles, proposer un trajet plus simple si possible, nommer le propriétaire de chaque invariant et définir tests, preuves, gates et éventuels exits de dette.

# 8. Conditions de suite et verdict

**Verdict de la présente analyse : DEEPENED GAP ANALYSIS — DOCUMENTED / NON EXHAUSTIVE.**

- **Qualification fonctionnelle** : document v0.3 validé en contenu par Morris, prêt à servir de référence candidate pour UX et analyse technique.
- **Architecture courante** : fondations partielles observées ; six écarts structurants à instruire.
- **UX candidat** : page 12 Figma créée et validée visuellement par Morris (22/11) ; consolidation technique et preuves d'intégration restent ouvertes.
- **Construction** : aucune capacité ML5 Cursor prouvée ni autorisée ; **Gate C OPEN**.
- **Publication** : contribution documentaire sur la **branche candidate existante uniquement**, sans PR ni merge. Aucune mutation du runtime ou des documents normatifs.
- **Retour après Figma** : réviser la matrice d'écarts à partir des contrats visuels et approfondir les flux D3/D4/D6/D7/D8/D9, les preuves, le coût, les dépendances et les gates.

**Documenté ≠ validé en architecture ≠ implémenté ≠ prouvé ≠ ADOPTED.**

# 9. Deuxième passe de lecture Git — écarts techniques précisés

## 9.1. D3 : frontière cognitive, profilage et réponse structurée

Sources vérifiées sur `main@997897fd7cf914771e7d08e8030dc7123fab7d25` :
- `web/src/domains/conversation/cognitive-policy.ts` : `qualifyCognitiveProfile()` choisit actuellement **investigation si message >600 caractères**, sinon **analyse**, sans classification sémantique de la complexité. Une très courte demande complexe conserve les outils de lecture mais ne reçoit pas nécessairement le bon effort ni les bons budgets.
- `TEST_BOUNDARY` : profils contraints **4/8/12 maxProviderCalls**, **2/4/8 lectures D4+histoire**, **6/12/16 lectures Git**, **16k/32k/64k caractères**, **60/120/180 s**. Destinés au stress et non à un régime opérationnel. `OPERATIONAL_PROVISIONAL` n'est autorisé explicitement qu'en DEV ; `OPERATIONAL_VALIDATED` refuse actuellement de s'activer. Les plafonds provisoires ne sont ni validés ni preuve LIVE.
- Un budget mutable partagé existe déjà : D4 et historique consomment `remainingCalls`, Git READ utilise `remainingGitCalls`, **tous** consomment `remainingChars`. `maxTurnsForPolicy()` passe un nombre de tours au Runner, et le code avertit que **maxTurns SDK ≠ nombre d'appels HTTP fournisseur**.
- `web/src/domains/conversation/nora-adapter.ts` : un agent `@openai/agents`, outils D4/historique/Git et une **qualification structurée Zod dans le même tour logique**. Le code appelle `run(agent, prompt, { stream: false })` : choix correctif lié à des échecs de schema/streaming sur des investigations avec outils en novembre. **Ne pas réactiver un flux de JSON provisoire comme rendu utilisateur.**
- `web/src/domains/conversation/semantic-qualification.ts` : `replyDraft` limité à **20 000 caractères**, proposition documentaire `documentProposal.contentMarkdown` limitée à **100 000 caractères**. Ces champs ne constituent pas un contrat canonique Cursor apte à garantir une instruction très longue et intègre. Les autres plafonds de champs et la limite d'intentions ne doivent pas être confondus avec une limite métier de profondeur d'investigation.
- `web/src/domains/conversation/service.ts` : contexte courant injecté composé notamment des **6 derniers messages COMPLETE hors message en cours, chacun tronqué à 200 caractères**, d'une sélection D4, et de cinq titres de documents récents ; Nora dispose ensuite de lectures paginées/outillées. **Les titres ne valent pas lecture intégrale**.
- `web/src/domains/conversation/mission-continuity.ts` et la continuité « facts-first » post-effet D4 existent, mais elles visent les **missions / effets gouvernés**, pas encore un dossier d'investigation cognitive multi-étapes généraliste. Ne pas assimiler une projection de mission à un orchestrateur de raisonnement durable.

**Écart de capacité** : la fenêtre de contexte, la taille des sorties, les budgets, la couverture des sources et la reprise d'étapes doivent être coordonnés sur des cas complexes. Un budget plus grand ne résout pas seul la qualité de sélection, la conservation des restrictions ou les interruptions.

## 9.2. Vérité des sources et qualité de lecture

- `d4-read-tools.ts` explicite `COMPLETE | PARTIAL | EMPTY | DENIED | NOT_FOUND | STALE`, pagination et limites de taille ; c'est une base utile pour le diagnostic de **couverture effective**, pas une preuve de complétude d'un contrat.
- `history-tools-sdk.ts` permet recherche paginée et relecture de messages précis, mais le budget partagé peut interrompre le parcours.
- `git-read-tools.ts` dispose de protections `NOT_FOUND` qualifié versus lecture ambiguë et rapporte la couverture des extraits ; Nora Git est liée au **projectId** (Git absent du sas sans projet, sans qu'une source Git soit automatiquement créée).
- Sources découvertes, lues, relues, complètes, partielles, interdites et périmées doivent être distinguées dans la synthèse de travail et dans les assertions de Nora.

**Conséquence** : le contrat peut devenir « prêt » seulement si les dépendances *déterminantes* ont été effectivement examinées et que les incertitudes résiduelles sont admissibles ; la navigation d'outil et la taille brute ne suffisent pas.

## 9.3. Continuité durable et résultat terminal

- `conversation_turn_commands` existe avec `conversationId`, `clientTurnKey`, fingerprint, `operationId`, statuts, `generationId`, `resultJson`, `ownerToken` et timestamps ; unicité du tour et de l'opération.
- `turn-command.ts` assure réservation, heartbeat/lease, fencing d'écriture, réconciliation prudente `RUNNING/ACCEPTED → UNKNOWN` et stockage intermédiaire de qualification avec CAS. C'est une **frontière de reprise et d'autorité existante**, pas la preuve qu'un long travail cognitif reprend effectivement au bon sous-stade après coupure.
- `turn-projection.ts` produit après le terminal une activité résumée (« sources consultées » ou échec/incertitude), sans séquence d'étapes détaillée, ni agrégation fiable de chaque outil Git/web dans l'interface.
- Route `web/src/app/api/preparations/[preparationId]/messages/route.ts` : POST attend `postUserMessageAndNora` et renvoie JSON final ; aucun transport de progression SSE/WebSocket n'a été observé sur ce chemin.
- `NoraConversation.tsx` et `PreparationConversation.tsx` montrent des statuts de préparation/erreur ; pas encore le parcours fonctionnel live de la page 12 démontré.

**Conséquence** : l'observabilité et la conservation des acquis utiles doivent être dessinées séparément de la restitution finale, mais **sans créer un second registre canonique de conversation, de mission ou de décisions**. Un événement « consultation réussie » doit être fondé sur l'outil réellement observé ; une intention d'étape est un simple commentaire fonctionnel.

## 9.4. D6/D7/D8 : réutilisation prudente, pas généralisation automatique

- `domains/execution/types.ts` : `EffectKind = GIT_PUBLICATION | GIT_MERGE` ; les plans sont GitHub-spécifiques.
- `domains/execution/effect-service.ts`, `effect-authority.ts`, `claim-lease.ts` : empreinte de mandat, `HumanDecision`, droits au point d'effet, claim/lease et états incertains déjà développés pour Git. `effect_attempts` est une table D7 de tentatives Git dont les conditions et le `planJson/resultJson` sont persistés.
- `domains/proofs/qualify.ts` : qualification de faits Git, avec `testsPass=false`, `conformityProven=false`, `morrisAcceptance=false`, `adopted=false` par défaut. Cette prudence doit être conservée pour Cursor ; **l'outil Git D8 ne qualifie pas encore des preuves Cursor**.
- L'extension Cursor doit **isoler la logique du fournisseur** et reprendre les invariants D6/D7 existants ; aucune abstraction générique totale ni nouvelle table/migration n'est décidée à ce stade.

## 9.5. Scènes Figma vérifiées en conception

La [page 12 « ML5 — Exécution & Résultats »](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1209-2) contient les dix scènes candidate 12.01–12.10 : activité Nora, contrat 50/50, confirmation, historique, fiche, suivi en attente, état incertain, bilan consultatif, reprise de bilan dans le fil, sas.

Morris a validé **le contenu et l'harmonisation visuelle** au 22/11/2026. Ce verdict n'accepte ni les API, ni la persistance, ni l'exécution Cursor, ni les résultats LIVE/REAL.

# 10. La recherche web : quatrième décision technique structurante

## 10.1. Niveau de risque et nature de la décision

La recherche web peut exploiter des interfaces fournisseurs standard, mais **l'intégration cognitive dans Next ne se limite pas à brancher un endpoint**. Elle ouvre une **frontière de confiance externe** et une nouvelle famille d'outils, susceptible d'influencer tous les travaux de Nora. Il faut donc la qualifier **explicitement** avant construction, au même niveau d'attention que l'activité et la continuité cognitive. Aucun nouveau macro-lot isolé n'est créé par principe.

Le risque principal n'est pas l'invocation de recherche : c'est **l'utilisation d'une information externe comme base d'un contrat technique ou d'une recommandation**, avec une consultation incomplète, trompeuse ou hostile.

## 10.2. Contrat cible à instruire

| Dimension | Exigence d'étude / preuve |
| --- | --- |
| **Découverte** | Requête utile ; source retenue, résultat et page ouverts distincts |
| **Lecture réelle** | Accès au contenu pertinent, pagination/troncature, HTML/PDF, refus, indisponibilité et dates |
| **Traçabilité** | URL, publication/version quand disponible, date de consultation, extrait utile, couverture COMPLETE/PARTIAL/STALE/UNKNOWN |
| **Confrontation** | Documentation officielle privilégiée mais non présumée applicable ; contradiction et versionnement conservés |
| **Sécurité** | Sources non fiables ; prompt injection, fuite de secrets, exfiltration, SSRF, redirections, URL privées et accès non autorisé |
| **Effets** | Lecture seule par défaut ; aucune écriture ou action web induite par la page |
| **Coût/charge** | Appels, profondeur, taille des extraits, tokens, taux d'échec, latence et limites fournisseur |
| **Transversalité** | Sas, conversation, documentation, revue et préparation Cursor via la même capacité cognitive D3 |

Il faudra comparer **au moins le moyen de recherche et le moyen de lecture de pages**, qui ne sont pas forcément identiques. La possibilité native d'un fournisseur n'est pas une preuve de disponibilité opérationnelle dans Next ; toute nouvelle surface devra être testée sur la version effectivement retenue et les droits disponibles.

**Actualisation de qualification (22/11/2026) :** Morris privilégie **B1 — recherche web hébergée OpenAI via Agents SDK**, pour limiter le coût de développement et la maintenance. Le **§16 consolide l'axe B** et ses contrats candidats ; la compatibilité exacte avec le SDK verrouillé, les données accessibles et la sécurité reste **à prouver**, sans GO code, fournisseur définitivement adopté ou budget opérationnel validé.

# 11. Les quatre axes de décision à instruire avant la construction

| Axe | Question | Orientation candidate et limite | Dépendance / gate |
| --- | --- | --- | --- |
| **A — Continuité cognitive** | Comment Nora prépare-t-elle une réponse/contrat complexe en plusieurs étapes sans perdre les sources et restrictions ? | Prolonger D3+D4+journal de tour ; sélectionner/approfondir/consolider avec provenance, sans second moteur ni limite arbitraire de longueur | En priorité ; arbitrage Morris sur nouveau moteur/persistance si nécessaire |
| **B — Recherche web** | Comment Nora consulte-t-elle des pages publiques utiles et non fiables, dans tous ses travaux ? | **B1 privilégiée par Morris** : outil hébergé `webSearchTool()` dans la conduite D3, avec séparation contexte public/privé, provenance, couverture et budgets ; **design §16**, pas compatibilité prouvée | Conditions de faisabilité SDK, sécurité/secret, source/activité et coût ; pas de B2 parallèle |
| **C — Activité fonctionnelle** | Comment rendre visibles les actions pertinentes pendant le travail sans exposer le raisonnement privé ? | Événements réels + phases annoncées distinguées ; projection UI transverse sans flux de JSON Zod provisoire | Dépend de A/B et de l'observabilité existante ; preuve SDK/UX |
| **D — Réalisation Cursor gouvernée** | Comment raccorder un exécuteur technique, ses tentatives et un rapport exploitable par Nora sans doubler D7 ? | **Cursor SDK local privilégié par Morris** ; PC actuel puis serveur secondaire, contrat versionné, D6, D7, **rapport durable par tentative**, D8 et identité séparés ; détails §18 | Faisabilité SDK, isolation, ingestions/preuves, reprise et permissions à démontrer avant GO code ; Cloud/CLI alternatives conditionnelles |

**Priorisation :** A en premier pour stabiliser les contrats cognitifs ; B et C sont des interfaces à concevoir conjointement à A ; D dépend de la fiabilité d'A et de l'autorité D6/D7, mais peut être étudié sans activer de construction.

# 12. Début de qualification de l'axe A — continuité cognitive

## 12.1. Objectif utilisateur et frontière

Nora doit pouvoir traiter **une demande complexe même très courte**, identifier les ressources pertinentes, consulter les sources réelles en plusieurs étapes, suivre les liens, consolider les informations utiles et produire un résultat complet **sur les points déterminants**. Elle doit dire explicitement quand une source indispensable reste inaccessible. Les demandes simples ne doivent pas payer systématiquement le coût d'une enquête longue.

Le résultat final peut être une réponse, une proposition, une documentation D4 ou un contrat Cursor canonique. **La conduite cognitive n'est ni l'exécution d'un effet, ni une HumanDecision, ni une certification de conformité.**

## 12.2. Trois stratégies techniques à comparer — aucune adoptée

**Option A1 — Boucle agent/outils existante enrichie.** Garder un seul tour logique et les outils existants avec un profilage sémantique/calibré, recherche progressive, contrôle de couverture et sorties cohérentes. **Avantages** : peu de nouvelles surfaces et continuité des fences actuelles. **Limites** : durée/fenêtre/contexte et échec tardif ; capacité de reprise granulaire non démontrée.

**Option A2 — Investigation séquencée dans la conduite D3 existante.** Plusieurs étapes internes liées à la même intention, avec synthèses sourcées, étapes restantes et points de contrôle ; restitution finale contractuelle séparée. **Avantages** : traite les investigations longues, bornées, progressives. **Risques** : consolidation inexacte, coût, concurrence et persistance des étapes ; doit préserver les propriétés du journal courant, l'ownership et les restrictions. **Aucun moteur parallèle** ne doit être déduit de l'option.

**Option A3 — Travail durable autonome de longue durée.** Conduite reprenable après panne/fermeture, avec progression, ownership et état d'investigation résiduel. **Avantages** : résilience accrue pour les très longues tâches. **Risques** : infrastructure et persistance additionnelles, dette/complexité, surfaces d'autorité concurrentes. **À retenir uniquement si A1/A2 ne satisfont pas les scénarios probants.**

### Hypothèse de préférence pour la discussion

**A2 est une hypothèse de travail, non un arbitrage** : séquençage proportionné sur les interfaces D3/D4/journal existantes, sans nouveau moteur d'orchestration global. Une enquête ne serait divisée en plusieurs étapes que si le besoin, le coût ou le volume des sources le justifie, et non pour imposer artificiellement plusieurs tours à chaque message.

Le détail des objets de consolidation, du contrôle de couverture, des événements, de la conservation/reprise et des limites techniques reste **à concevoir et à tester** avant tout GO Cursor.

## 12.3. Cas discriminants à prouver

| Cas | Attente |
| --- | --- |
| Demande de cinq mots à fort enjeu | Profilage non basé sur la seule longueur, investigation adaptée |
| Documents dépendants (A renvoie à B) | Chaîne de références suivie jusqu'à couverture utile |
| Source obligatoire interdite ou tronquée | Résultat concerné non déclaré prêt ; limite intelligible |
| Deux versions/branches contradictoires | Confrontation par ref/date/autorité, sans synthèse qui efface le désaccord |
| Plusieurs centaines de pages utiles | Contexte préservé progressivement, sans chargement brut simultané |
| Requête simple | Réponse rapide sans sur-orchestration |
| Limite outil/context/source en cours | État PARTIAL/UNKNOWN conservé, pas de contrat final fictivement complet |
| Timeout et réponse réseau incertaine | Même intention identifiée, aucun effet doublonné ni reprise inventée |
| Nouvelle information après consolidation | Réouverture ciblée de la partie affectée, pas d'effacement global des acquis |
| Préparation d'instruction très longue | Aucune troncature silencieuse ; contenu inspecté = contenu candidat à transmettre |

## 12.4. Frontières de responsabilité et reste à qualifier

- **D3** conduit l'étude, choisit les lectures utiles et consolide ; interprétation sémantique de Nora, pas de routeur lexical concurrent.
- **D4/historique/D9/Web** délivrent données, références, droits, versions, couverture et événements de consultation ; aucune autorité métier depuis une source.
- **Journal de tour** conserve l'intention et la vérité transactionnelle existante ; toute persistance intermédiaire additionnelle nécessite une étude du blast radius et, si structurante, un gate Morris.
- **D6/D7/D8** demeurent propriétaires de l'autorisation, de la tentative et du verdict probatoire ; une étape cognitive n'accomplit aucun de leurs effets.
- **Observabilité/UI** projettent des événements attestés et des phases déclarées distinctes ; pas de chaîne de pensée ou logs secrets.

**Arbitrage fonctionnel ultérieur de Morris (22/11/2026) :** **l'investigation séquencée avec reprise fiable après interruption est validée comme exigence fonctionnelle**. Cette validation n'arrête ni le support de persistance, ni le modèle de tâches, ni le choix d'un orchestrateur, ni la garantie d'exécution asynchrone hors session. Toute nouvelle infrastructure, modification de schéma ou changement d'autorité reste soumis à qualification et gate adapté. La prochaine question porte sur les critères permettant de déclarer une investigation suffisamment approfondie.

# 13. Arbitrage de portée documentaire et continuité — décision fonctionnelle reçue

## 13.1. Document unique de qualification

**Choix documentaire confirmé par Morris (22/11/2026) :** conserver **un seul document central vivant** pour la qualification ML5, couvrant les axes A (continuité cognitive), B (recherche web), C (activité fonctionnelle) et D (Cursor), leurs interfaces et les risques communs.

Le contrat fonctionnel v0.3 conserve sa propre responsabilité ; la page 12 Figma reste la référence UX candidate validée visuellement. Une décision d'architecture réellement structurante pourra justifier une trace D2 dans `governance/decisions/`, sous GO spécifique. Ne pas créer un fichier par question, micro-choix ou simple phase d'investigation.

## 13.2. Exigence fonctionnelle validée : séquencement ET reprise fiable

Morris valide explicitement : **« investigation séquencée avec reprise fiable pour Nora »**, sans décision sur le mécanisme technique ni la persistance.

Le résultat attendu doit permettre à Nora de retrouver les acquis réellement consolidés, les limites, les références, les sources/versions et le travail restant après interruption, puis de réévaluer la validité de ces éléments avant poursuite.

**Portée rigoureuse de la validation** :
- La reprise concerne une **continuité cognitive fondée sur des faits et des références**, pas la conservation ou la restitution de la chaîne de pensée privée.
- Une fermeture de l'interface, une perte réseau, un timeout fournisseur ou un redémarrage ne doivent pas rendre automatiquement impossible la reprise d'une investigation complexe. Les conditions et garanties exactes restent à concevoir/prover.
- **Reprendre** n'implique pas nécessairement **exécuter en arrière-plan sans Pilote**. Le choix du mode de suspension, redémarrage et reprise, y compris la question d'une reprise automatique, reste **ouvert**.
- Les étapes incertaines sont requalifiées ; une lecture répétée doit respecter droits/ref/fraîcheur, et une mutation D4/Git/Cursor incertaine ne doit **jamais** être relancée par simple reprise cognitive.
- D3 mène l'étude ; D4 conserve la connaissance durable pertinente ; le journal de tour reste propriétaire de la vérité conversationnelle ; D6/D7/D8 restent seuls propriétaires de l'autorisation, des effets et des preuves. Aucun deuxième moteur cognitif/mission n'est autorisé par cette exigence.
- **A2 (séquencement dans la conduite D3 existante) reste l'option d'étude privilégiée**, mais non un arbitrage de mécanisme, service, workflow, fournisseur ou DB.

## 13.3. État d'investigation — contrat conceptuel candidat

Un point de reprise fiable doit rendre reconstructibles, au niveau utile, les informations suivantes. Il s'agit d'un **contrat conceptuel**, et non de nouveaux champs/objets DB décidés.

| Groupe | Contenu utile | Invariant |
| --- | --- | --- |
| **Identité/portée** | Pilote, préparation/projet s'il existe, intention, résultat attendu, corrélation du travail, contraintes | Aucun projet/cycle/GO artificiel |
| **Couverture** | Questions essentielles, ressources cherchées/consultées, liens suivis, limites | « Trouvé » ≠ « ouvert » ≠ « lu intégralement » |
| **Sources** | Identifiants, chemins/URLs, refs/versions/dates, état de lecture et couverture | Provenance et permissions requalifiables |
| **Acquis intermédiaires** | Faits déterminants, interprétations, décisions sources, exclusions, contradictions | Hypothèse ≠ fait ≠ décision |
| **Progression** | Travail terminé, étapes à approfondir, obstacle, contrôle restant | Pas d'avancement calculé fictivement |
| **Production** | Parties déjà rédigées, contrôle d'intégrité, version de sortie candidate | Brouillon ≠ document D4 créé ≠ contrat Cursor prêt |
| **État de reprise** | Dernier point fiable, en cours/inconnu, sources à revérifier et cause de suspension | UNKNOWN ne devient pas COMPLETE |

**Reprise sémantique** : Nora reprend à partir de la photographie des acquis et des sources identifiées, réévalue les éléments devenus obsolètes et approfondit si nécessaire. Elle ne prétend pas reconstituer le raisonnement interne précédent ni une lecture non attestée.

**Limite d'observation actuelle** : `conversation_turn_commands`, `resultJson`, `ownerToken`, heartbeat, fencing, `UNKNOWN` et continuité de mission D3 existent, mais une reprise multi-étapes générale **n'est pas démontrée**. Les mécanismes de stockage et d'ordonnancement restent **NON DÉCIDÉS**.

# 14. Qualification suivante — décider quand l'investigation est suffisante

## 14.1. Problème à résoudre

Une investigation plus longue n'est pas nécessairement plus fiable. Nora ne doit ni s'arrêter au simple épuisement d'un budget d'outils, ni effectuer une lecture exhaustive par principe. L'objectif est une **couverture suffisante des questions déterminantes pour le résultat attendu, compte tenu des risques et des contradictions**, avec une déclaration honnête des limites.

La complétude est **relative à la mission**, non une garantie de vérité absolue. La qualité d'une réponse informative simple n'exige pas les mêmes justificatifs qu'un mandat technique susceptible de conduire à des effets externes.

**Aucune règle de type « N pages lues = complet », « 80 % de sources = READY », score IA arbitraire ou nombre fixe de passages n'est retenue.**

## 14.2. Quatre dimensions candidates de suffisance

| Dimension | Question posée à Nora | Exigence à établir |
| --- | --- | --- |
| **Mission et questions déterminantes** | Quelles questions doivent être résolues pour produire le résultat demandé ? | Décomposer proportionnellement la mission en obligations cognitives ; adapter la liste lorsque de nouvelles dépendances apparaissent |
| **Preuves et sources** | Les affirmations décisives reposent-elles sur des éléments réellement examinés, dans la bonne version/portée ? | Suivi de lecture et provenance ; autorité Git/décision/source respectée ; couverture de l'extrait réellement connu |
| **Contradictions et inconnues** | Des contradictions, interdictions, dépendances ou manques changent-ils matériellement le résultat ? | Résolution/qualification explicite ; inconnu critique non masqué dans une synthèse |
| **Adéquation et risque du livrable** | Le résultat est-il assez précis et sûr pour son usage prévu ? | Contrôle adapté à la réponse, au document ou au contrat ; effet technique seulement après mandats propriétaires |

## 14.3. Mécanisme de décision cognitif candidat — pas de moteur lexical parallèle

Conduite D3 proposée à instruire :
1. Nora qualifie le besoin **sémantiquement** et construit une première liste courte de **questions déterminantes** et de sources probables. Elle peut réviser cette liste à mesure des découvertes.
2. Nora choisit les lectures utiles par priorité, provenance et fraîcheur, en évitant la duplication et la consultation exhaustive par défaut.
3. Après chaque séquence significative, elle relie faits et limites aux questions déterminantes, constate les contradictions et ouvre les dépendances réellement matérielles.
4. Elle vérifie si les **questions nécessaires** sont suffisamment étayées pour le livrable visé et si les inconnues restantes sont **non bloquantes** ; sinon elle approfondit ou déclare la limite.
5. Elle produit le résultat avec les réserves nécessaires **ou** indique clairement l'insuffisance. La qualification cognitive n'accorde jamais le droit d'effet.

Les contrats de lecture déterministes D4/Git/Web doivent déclarer `COMPLETE/PARTIAL/STALE/DENIED/UNKNOWN` selon ce qui est réellement connu. **Ils vérifient des faits techniques ; ils ne classent pas l'intention métier ni ne décident seuls que le contrat est suffisamment fiable.** Le critère qualitatif appartient à Nora, avec validation des limites d'effet par les propriétaires Studio.

## 14.4. Conditions candidates de clôture

| Situation | Sortie cognitive candidate | Conséquence |
| --- | --- | --- |
| Questions déterminantes suffisamment couvertes ; pas de contradiction critique ni source obligatoire manquante | **SUFFISANT POUR PRODUIRE** | Nora répond/rédige ; « prêt à exécuter » reste soumis à D6/D7 et à l'intégrité du contrat |
| Résultat utile possible, mais incertitude explicitement non bloquante | **PRODUIRE AVEC RÉSERVES** | Réponse bornée ; aucune conformité globale ou préparation de contrat « prêt » fictive |
| Source déterminante inaccessible, périmée ou ambiguë ; contradiction affectant la mission | **INSUFFISANT / À APPROFONDIR** | Poursuite ciblée ou clarification ; le livrable dépendant n'est pas déclaré prêt |
| Budget, temps ou contexte épuisé avant couverture suffisante | **SUSPENDU / PARTIEL** | Point de reprise fidèle ; pas de conversion automatique d'une limite technique en résultat complet |
| Source externe malveillante ou droits perdus | **BLOQUÉ SUR LA PARTIE CONCERNÉE** | Refus de l'étape non autorisée ; poursuite des parties indépendantes possible |

Ces expressions sont des **catégories métier candidates**, pas des enums adoptées ni des états DB. Les statuts `COMPLETE/PARTIAL/EMPTY/DENIED/NOT_FOUND/STALE` déjà présents dans les outils décrivent **la couverture d'une lecture**, non la complétude sémantique d'une mission.

## 14.5. Exemple discriminant : contrat Cursor

Demande : « Prépare le contrat du prochain chantier ».

Nora découvre successivement (i) le cadrage, (ii) la décision de portée, (iii) une branche candidate non mergée, (iv) une restriction d'effet, (v) des preuves d'un précédent échec et (vi) une documentation web actuelle.

**Suffisance attendue** : l'identité dépôt/ref/branche, les décisions/mandats, la cible, le périmètre IN/OUT, les dépendances et STOP, les critères de test, la provenance et les risques sont qualifiés **lorsqu'ils sont déterminants pour le contrat**. Une branche candidate n'est pas élevée en baseline `main`. Une documentation web n'invente pas la capacité opérationnelle. La restriction d'effet persiste à travers toutes les consolidations.

Si un fichier indispensable n'est pas accessible, ou si une ambiguïté matérielle reste ouverte, Nora peut produire une **analyse/brouillon explicitement non prêt**, mais jamais un contrat présenté comme exécutable sur cette base.

## 14.6. Scénarios de preuve à conserver pour la future réalisation

| Cas | Verdict attendu observable |
| --- | --- |
| Demande très courte mais risque élevé | Profondeur d'étude adaptée, pas de sous-qualification par longueur |
| Référence A → B → C | Nora suit seulement les dépendances pertinentes, documente la couverture et sait s'arrêter |
| Douze consultations sans couvrir la décision essentielle | Pas de clôture « suffisant » fictive |
| Une source secondaire indisponible | Réponse utile et bornée, sans blocage global |
| Source obligatoire `DENIED` ou `PARTIAL` | Pas de contrat « prêt » si cette source est déterminante |
| Contradiction `main` vs branche candidate | Différence de statut et de preuve conservée |
| Documentation web périmée et résultat non ouvert | Pas de claim de consultation ni de fraîcheur vérifiée |
| Aucun nouveau fait utile dans plusieurs recherches | Nora peut arrêter l'exploration non pertinente, avec réserve si nécessaire |
| Redémarrage au milieu des consultations | Reprise au point fiable, contrôles de fraîcheur/droits et absence d'étape inventée |
| Budget épuisé et preuve manquante | `PARTIEL` ou `À APPROFONDIR`, pas `COMPLETE` forcé |
| Produit un contrat technique long | Contrôle des sources et intégrité de la version avant inspection/mandat |
| Retour à une question simple | Pas de séquencement long ou de contrôle lourd systématique |

## 14.7. Points d'architecture encore ouverts

- **Propriétaire et représentation** des « questions déterminantes », du statut de couverture sémantique et de leurs preuves, sans dupliquer D4 ni le journal de tour.
- **Choix de granularité** des points de consolidation et de reprise, avec stratégie de vérification des sources après interruption.
- **Conditions observables de fin** dans l'agent SDK actuel (`maxTurns`, limites de contexte, génération structurée) sans faux verdict de complétude.
- **Budget adaptatif** par besoin et risque, son coût et la politique de continuation ; calibrage `OPERATIONAL_VALIDATED` toujours absent.
- **Frontière entre arrêt cognitif et autorisation métier** : D3 peut juger une étude suffisante mais D6/D7 restent obligatoires pour exécuter.
- **Mesure de qualité** sur corpus réel : pertinence des sources, contradictions retrouvées, absence d'omissions critiques, arrêt proportionné et reprise; DETERMINISTIC/BROWSER/LIVE/REAL à distinguer.

**Verdict de conception :** proposer un **contrôle qualitatif et traçable de couverture déterminante**, associé à l'état d'investigation reprenable, plutôt qu'un score ou un quota de lectures. **CANDIDATE — NOT ARCHITECTURE-VALIDATED ; NEEDS MORRIS REVIEW**.

**Étape suivante effectivement instruite :** sélection progressive et priorisation des sources, suivies de la consolidation intégrée au §15. Les familles de questions, la stratégie de découverte/lecture et les règles d'arrêt restent candidates ; aucun mécanisme de persistance ni GO de construction n'est décidé.

# 15. Consolidation intégrée de l'axe A — conduite cognitive, couverture et reprise fiable

## 15.1. Objet, statuts et limites de cette consolidation

**Résultat utilisateur visé :** Nora conduit une investigation proportionnée à la demande, y compris lorsqu'une formulation très courte implique un contrat complexe ; elle découvre et réévalue les questions importantes, sélectionne et lit les sources adéquates, confronte les faits, conserve les restrictions, produit un résultat correctement borné et **reprend de façon fiable après interruption**, sans inventer le travail non observé.

**Arbitrages déjà exprimés par Morris :**
- **VALIDATED IN CONTENT / fonctionnel :** investigation séquencée avec reprise fiable après interruption ; production fondée sur les sources réellement utiles ; séparation Nora / autorités Studio ; document de qualification d'architecture **unique** ; page 12 Figma validée sur contenu et cohérence visuelle.
- **CANDIDATE / en revue :** A2 (investigation séquencée dans la conduite D3 existante), les « questions déterminantes » évolutives, la sélection par valeur informative, le contrôle qualitatif de suffisance, le contrat conceptuel de point de reprise décrit ci-dessous.
- **NON DÉCIDÉ :** modèle et support de persistance, schéma DB, granularité des checkpoints, stratégie de replanification et de reprise, fournisseur et mode d'hébergement, orchestration hors session, enum technique, coûts et budgets opérationnels, API publique du travail cognitif.
- **NON IMPLÉMENTÉ / NON PROUVÉ pour ML5 :** reprise multi-étapes générique, activité fonctionnelle live, consultation web, couverture cognitive automatique et intégration Cursor. Le worktree Cursor et les staged/untracked sont **NON OBSERVÉS**.

**Sources :** contrat fonctionnel candidat ML5 v0.3, décision de qualification sémantique du 12/11, SEF v0.2, roadmap Next, Figma page 12, code relevé sur `main@997897fd7cf914771e7d08e8030dc7123fab7d25`. Ce §15 n'est ni un ADR validé, ni une spécification R4 définitive, ni un contrat d'exécution SFIA v2.6.

## 15.2. Périmètre et frontières de capacité

| IN — axe A | OUT à ce stade |
| --- | --- |
| Demande simple ou investigation complexe, en sas comme en projet | Parcours rigide de neuf étapes pour tout message |
| Qualification sémantique des besoins, **questions déterminantes révisables** | Nouveau routeur lexical métier ou score automatique d'intention |
| Découverte, priorisation et lecture d'éléments D4, historique, Git, puis web selon sa future disponibilité | Recherche web considérée déjà LIVE, fournisseur choisi d'avance |
| Acquis sourcés, restrictions, contradictions et vérification de suffisance | Copie exhaustive de l'historique, du dépôt ou de pages web |
| Suspension honnête, point de reprise fiable, contrôle des droits/versions au redémarrage | Stockage de chaîne de pensée privée ; moteur permanent de tâches choisi sans preuve |
| Réponse, document ou **brouillon de contrat clairement qualifié** | Autorisation D6, effet D7, preuve D8, GO Cursor ou ADOPTED par inférence |

**Capacité suivante débloquée par la qualification de A :** contrats d'interface pour B (web) et C (activité), puis étude de l'exécuteur Cursor D, sans prétendre que l'un est mis en production.

## 15.3. Vue logique de bout en bout — un seul conducteur cognitif D3

La conduite cible est **adaptative** et ne constitue pas un workflow fixe, ni un nouveau service d'orchestration déjà décidé :

1. **Comprendre** l'intention authentifiée du Pilote, le résultat souhaité, l'espace (sas/projet), les contraintes, les interdictions, et qualifier les risques sans les déduire de la seule longueur de la demande.
2. **Former des questions déterminantes initiales**, au niveau nécessaire pour décider quoi vérifier ; ne pas imposer d'avance une liste universelle de sources ou de contrôles.
3. **Découvrir les sources candidates** par D4, historique, Git et, après construction, web. La découverte inclut éventuellement liens et métadonnées, **pas la présomption de lecture intégrale**.
4. **Prioriser et consulter progressivement** les sources utiles ; pour chacune distinguer version, autorité, statut réel, contenu effectivement lu, pagination, fraîcheur, et éventuelles zones non couvertes.
5. **Consolider** faits déterminants, décisions applicables, hypothèses, exclusions, contradictions, dépendances nouvelles et questions restantes. Revoir les priorités après une découverte matérielle.
6. **Contrôler la suffisance** du résultat visé. Une lacune bloquante implique approfondissement ou résultat non prêt ; un élément secondaire manquant peut aboutir à une réponse avec réserve ; une recherche improductive peut s'arrêter sans masquer les manques.
7. **Construire et contrôler le livrable** : fidélité à l'intention, contraintes retrouvées, traçabilité, intégrité de la production (notamment instruction Cursor longue), statut non ambigu : résultat informatif, brouillon, proposition ou contrat inspectable.
8. **Restituer**, ou **suspendre de façon honnête** et préserver un point de reprise vérifiable si la couverture, le temps, le budget, le contexte ou un fournisseur ne permettent pas de terminer.

Pour une question simple, Nora peut traverser ce raisonnement de façon compacte sans créer de « dossier » lourd. Les lectures et étapes intermédiaires ne sont mobilisées que lorsqu'elles contribuent matériellement au résultat.

## 15.4. Questions déterminantes — contrat conceptuel évolutif

Trois **familles de raisonnement** sont utiles sans devenir des classes obligatoires dans le code :

| Famille cognitive | Utilité | Exemple Cursor |
| --- | --- | --- |
| **Résultat** | Ce que la mission doit réellement produire | Quel comportement/test/document faut-il livrer ? |
| **Validité** | Pourquoi la conclusion est applicable et sourcée | Quelle décision/ref/branche fait autorité ? |
| **Faisabilité et risque** | Ce qui pourrait invalider ou limiter la mission | Restriction d'architecture, dépendance, droit, STOP ou dette critique ? |

Une question déterminante peut être représentée **conceptuellement** par :
- **Question / raison d'être** : ce qui doit être établi et la conséquence si la réponse manque ;
- **Caractère pour ce livrable** : indispensable, conditionnel ou secondaire, révisable à partir des nouveaux faits ;
- **Relations** : autres questions, contraintes et sources candidates ; provenance des liens ;
- **Éléments disponibles** : références consultées, fragments vérifiés, versions, couverture réelle, faits, contradictions et inconnues ;
- **Situation qualitative** : non étudiée, en cours, suffisamment étayée, limitée ou bloquée, **expressions non normatives** ;
- **Suite** : action cognitive envisagée, motif d'arrêt ou de réouverture, et vérifications nécessaires après reprise.

Les questions sont **créées, reformulées, fusionnées, dépriorisées, rouvertes ou closes** par Nora selon l'enjeu sémantique. Une restriction découverte tardivement peut rendre bloquante une question jusque-là secondaire et obliger à revoir la conclusion.

**Ne pas réutiliser comme substitut** `semantic-qualification.ts::clarifications` : ce champ correspond aux **questions ouvertes adressables au Pilote après un tour**, et distingue champ absent de liste `[]` réévaluée. Il ne couvre pas le travail interne nécessaire pour lire et résoudre des dépendances entre sources.

## 15.5. Sélection et priorisation des sources — valeur de l'information

**Principe :** Nora cherche en premier les sources qui ont le plus de chance de **répondre à une question déterminante, révéler une restriction ou modifier matériellement une conclusion**. Un ordre fixe Git > D4 > Web ou une recherche exhaustive du dépôt n'est **pas** la règle.

Quatre dimensions de jugement, **sans score global obligatoire** :

| Dimension | Question pratique | Vigilance |
| --- | --- | --- |
| **Pertinence** | Quel point essentiel cette source permet-elle d'établir ? | Similarité lexicale ≠ importance métier |
| **Autorité** | Quelle valeur cette source a-t-elle pour cette décision, version, cible et branche ? | Récence ≠ décision ; branche candidate ≠ baseline main |
| **Risque** | Pourrait-elle révéler un blocage, un échec passé, une contradiction ou un problème de sécurité ? | Une source de risque rare peut être indispensable |
| **Actualité / portée** | L'information est-elle encore valable pour la version/API/code applicable ? | Web officiel ≠ capacité déployée ; discussion ancienne ≠ observation actuelle |

**Pertinence → choix de consultation. Autorité → portée de ce que la source peut établir.** Une conversation antérieure peut aider à découvrir une décision, sans la remplacer. Une documentation éditeur peut décrire une API, sans attester de son usage par Studio Next.

**Exemple de priorités conditionnelles pour un contrat Cursor :** décisions Morris et restrictions, cadrage/roadmap, code Git à la ref effective, précédents rapports/échecs, historique nécessaire, documentation fournisseur pertinente ; cet ordre **change selon la mission**. Pour une question sur la compatibilité SDK, le code installé et la documentation versionnée deviennent prioritaires.

**Règles de découverte / lecture / suivi :**
- Une recherche peut proposer un titre ou une métadonnée ; l'agent doit **ouvrir/lire** la source déterminante, et identifier l'extrait réellement examiné.
- D4 fournit des révisions et extraits `COMPLETE/PARTIAL/STALE/DENIED` ; Git exige la **ref explicite**, distingue commit et blob, et peut être `UNPREVIEWABLE`. Les recherches d'historique lexical sont des **indices** et non des filtres d'exclusion prouvant l'absence.
- Une piste `A → B → C` est suivie **seulement** si le lien apporte une réponse, une contradiction ou une dépendance pertinente. Un fichier trouvé n'autorise pas la lecture d'un chemin privé ni le suivi de liens non sûrs.
- Nora doit éviter les consultations identiques et les longues boucles sans progrès, sans sacrifier une question indispensable.
- Les pistes écartées doivent conserver **une justification courte** si cette exclusion peut affecter la reprise ou l'audit de la complétude.

**Cas discriminant :** Nora découvre une restriction d'architecture dans une référence Git initialement hors sélection. Elle doit faire passer cette restriction au premier plan, relire sa portée et **réouvrir** les questions IN/OUT ou STOP ; il serait incorrect de conclure à partir des quatre autres questions déjà étayées.

## 15.6. Acquis intermédiaires, provenance et contrôle de contradiction

Une consolidation utile n'est ni une concaténation de documents ni un résumé libre sans preuve. Elle préserve :
- **Constats étayés** avec source/revision/ref/date/extrait et étendue de lecture connue ;
- **Décisions applicables et restrictions** distinctes des opinions, hypothèses, recommandations et descriptions historiques ;
- **Contradictions actives** avec versions, périmètre, tentative de résolution et conséquence sur les questions ;
- **Ce qui manque** : lecture interrompue, extrait partiel, source introuvable, accès refusé, fait non confirmé ;
- **Travail restant et livrable provisoire**, sans assimiler une phrase générée à une preuve ni à une décision métier.

Conserver des éléments significatifs ne signifie pas enregistrer automatiquement tous les acquis temporaires dans D4 : **D4 reste la mémoire/connaissance durable du projet**, tandis que l'état d'investigation est un contexte de travail limité à cette investigation, à corréler au journal existant.

Une contradiction entre `main` et une branche candidate doit être **signalée**, non résolue par une synthèse qui mélange les deux. Une version modifiée après consultation déclenche une **revérification ciblée des conclusions dépendantes**, pas un effacement global.

## 15.7. Contrôle de suffisance et conditions d'arrêt

Le critère est **qualitatif, traçable et relatif au résultat demandé**. Il ne dépend ni d'un quota de pages, ni d'un pourcentage d'éléments couverts, ni d'une auto-déclaration non confrontée aux lectures effectives.

Conditions à examiner **ensemble** :
1. Les questions **indispensables** au livrable sont suffisamment couvertes par des sources applicables, effectivement consultées, avec limites connues ;
2. Aucune restriction, contradiction, permission absente ou dépendance **matérielle** n'est passée sous silence ;
3. Les recherches supplémentaires envisageables ont une **faible valeur informative marginale** pour les questions restantes, ou leur poursuite n'est plus possible ; ceci **ne compense jamais une lacune indispensable** ;
4. La **nature du livrable** justifie le niveau d'exigence : conversation informative, analyse documentée, brouillon de réalisation et **contrat inspectable destiné à D6/D7** ne sont pas interchangeables.

| Évaluation cognitive candidate | Production permise | Exigence de vérité |
| --- | --- | --- |
| Essentiel suffisamment étayé | Résultat adapté à la mission | Nora cite ses limites sans prétendre à une preuve d'effet |
| Inconnue non bloquante explicite | Résultat borné **avec réserves** | La réserve n'est pas cachée dans une conformité globale |
| Source/restriction indispensable absente ou ambiguë | Analyse/brouillon **non prêt**, approfondissement ou clarification | Aucun contrat déclaré prêt sur cette dépendance |
| Budget/timeout/contexte/fournisseur interrompu | Travail **partiel/suspendu** et point de reprise honnête | La limite de ressource n'est pas une preuve de complétude |
| Source hostile / droits supprimés | Refus de la partie concernée ; suite indépendante possible | Aucun contournement de restriction |

**Exemple :** quatre questions sur cinq sont étayées, mais la cinquième concerne une interdiction potentiellement applicable. La préparation d'un contrat exécutable reste **bloquée**, même si la recherche supplémentaire semble peu productive. Une analyse non prête peut toujours être remise au Pilote.

**Séparation de statuts :** `COMPLETE` dans un outil de lecture signifie une **couverture d'extrait ou de pagination** selon son contrat, **jamais** « le résultat métier est complet » ; `COMPLETE` d'un tour/effet n'est pas non plus une réception humaine.

## 15.8. Point de reprise fiable — contrat et scénarios

L'état conceptuel présenté au §13.3 demeure valable : identité/portée, questions, sources et versions, faits/restrictions/contradictions, couverture, travail restant, brouillons et état d'incertitude.

**Protocole conceptuel de reprise à étudier :**
1. Identifier **le même travail** (Pilote, préparation/projet, tour/opération, permissions et dernier point consolidé connu) ;
2. Constater l'état réellement durable du tour et de toute opération propriétaire associée (notamment `UNKNOWN`), sans conclure par absence d'ACK ;
3. Réautoriser seulement les **lectures** valides au regard des droits courants, des refs/versions et des budgets ; revérifier les sources mutables ;
4. Restaurer questions, sources, acquis et restrictions déjà consolidés, sans fabriquer les lectures non attestées ;
5. Réouvrir sélectivement les questions dont les sources ont changé, puis réévaluer les priorités ;
6. Continuer jusqu'à suffisance ou restituer explicitement `PARTIEL/INCONNU/BLOQUÉ` selon la vérité disponible, sans assimiler ces libellés à des enums déjà décidées.

**Garanties :** fermeture navigateur, perte réseau, interruption fournisseur, timeout et redémarrage sont des scénarios à tester. Un mécanisme de persistance/checkpoint reste **à concevoir et arbitrer**, et une reprise automatique n'est pas un mandat d'exécuter des mutations.

Les lectures réitérées sont admissibles seulement avec contrôle des droits et de la version ; **aucune publication D4/Git ou nouvelle tentative Cursor n'est relancée par le conducteur D3** sous prétexte de continuité. La réconciliation d'effets appartient au propriétaire D6/D7/D9.

## 15.9. Interfaces propriétaires et réutilisation du code constaté sur main

| Surface source | Réutilisation potentielle | Écart/condition de revue |
| --- | --- | --- |
| `conversation/nora-adapter.ts`, `semantic-qualification.ts` | Agent D3 existant, outil SDK, qualification structurée, intention sémantique | `stream:false` ; compatibilité du SDK et éventuel séquencement A2 à prouver ; `replyDraft` ≤20k ; `documentProposal.contentMarkdown` ≤100k, non utilisables sans étude comme stockage de contrat Cursor canonique |
| `conversation/cognitive-policy.ts` | Profils/budgets contrôlés ; ensemble de lectures autorisées | Profil encore corrélé à longueur ; `OPERATIONAL_VALIDATED` non calibré ; durée/coût/reprise à qualifier |
| `conversation/service.ts` | Journal, projection des décisions et contexte D3 | Injection initiale **6 messages de 200 caractères**, sélection D4 et cinq titres de documents ; titres non équivalents à lecture de contenu |
| `conversation/turn-command.ts`, `db/schema.ts` | `clientTurnKey`, `operationId`, `generationId`, `ownerToken`, leases, fencing et `resultJson` | Reprise d'investigation multi-étapes **non démontrée**, schéma/persistance non arbitrés |
| `knowledge/service.ts` | `selectRelevantKnowledgeContext`, IDs préférés, acquis/sujets/points ouverts | Choix borné, initialement préférence puis ordre existant ; **pas** un moteur de sélection sémantique complet |
| `knowledge/journal-cognition.ts` | Réactivation des points ouverts, historique de réactivation | `scoreLexicalOverlap` (tokens, seuil) utile comme **indice de découverte**, non comme moteur d'intention ou preuve d'absence ; tester paraphrases/négations |
| `conversation/d4-read-tools.ts` | Recherche paginée et lecture des révisions exactes | `ILIKE`, pagination par catégorie, extraits et couverture ; une absence de match textuel n'établit pas l'absence d'un fait |
| `conversation/history-tools-sdk.ts` | Historique autorisé paginé et relecture par `messageId` | Requête lexicale non exclusive ; pagination, droits et budget à vérifier |
| `conversation/git-read-tools.ts` | Ref obligatoire, provenance commit/blob, statut réel, couverture | `UNPREVIEWABLE` ≠ `FILE_ABSENT` ; Git lié au projet ; contrôle de ref/permissions à la reprise |
| `conversation/turn-projection.ts`, UI Travail/Sas | Activité de tour durable et références | Aujourd'hui surtout activité terminale ; flux fonctionnel progressif à qualifier dans l'axe C |
| Futurs outils web | Recherche et ouverture de sources publiques, dates et couverture | **NON IMPLÉMENTÉ** sur main ; sécurité d'entrée et compatibilité dans l'axe B |
| D6/D7/D8 propriétaires | Mandats, effets Git et preuves | Aucun objet d'investigation D3 n'est un GO, une tentative Cursor ou une preuve d'acceptation |

**Blast radius prévisible** : conduite D3, budget/SDK, outils D4/historique/Git/web, journal transactionnel et éventuelle DB, sélection D4, projection UX page 12, droits/sécurité et tests. Les API réelles, dépendances, migrations et performance nécessitent une vérification sur le HEAD effectif avant code. **Aucune création de table, changement de contrat ou moteur concurrent n'est autorisée par ce document.**

## 15.10. Scénarios discriminants et niveau de preuve attendu

| Cas | Observation minimale attendue | Niveau de preuve futur |
| --- | --- | --- |
| Demande courte, mission complexe | Nora reconnaît le risque/profondeur, consulte les sources essentielles | Tests déterministes + LIVE agent |
| Réponse simple | Pas d'investigation lourde par défaut | DETERMINISTIC + LIVE |
| Source déterminante aux termes différents | Source retrouvée malgré la faible proximité lexicale | LIVE + données maîtrisées |
| Décision ancienne mais applicable | Autorité correcte malgré récence faible | DETERMINISTIC + LIVE |
| Source récente contradictoire mais non normative | Contradiction signalée, décision antérieure non effacée | DETERMINISTIC + LIVE |
| Renvoi `A → B → C` | Chaîne suivie uniquement si matériellement utile | DETERMINISTIC + LIVE |
| Découverte tardive d'une restriction | Question réouverte, contrat non déclaré prêt | DETERMINISTIC + LIVE |
| Multiples recherches improductives | Arrêt de la piste, maintien des lacunes critiques | LIVE + limite observable |
| D4 `PARTIAL/STALE/DENIED` ou Git `UNPREVIEWABLE` | Aucune lecture complète ni conclusion inventées | DETERMINISTIC intégration |
| Web trouvé non ouvert / source hostile | Aucune consultation prétendue ; injection sans autorité | Sécurité B + LIVE |
| Perte de droits / changement de branche ou révision | Revérification et relecture ciblée | Intégration + LIVE ciblé |
| Coupure avant checkpoint | État incertain conservé ; pas de « DONE » fabriqué | Intégration DB/reprise |
| Coupure après checkpoint | Reprise des acquis attestés sans doublonner de mutation | Intégration DB/reprise |
| Contrat très long | Instruction intègre, version inspectée exacte ; pas de troncature silencieuse | Intégration + comparaison d'empreinte |
| Contrat avec restriction déterminante non résolue | Brouillon explicite **non prêt**, aucun D7 | Intégration négative + LIVE |
| Visualisation des phases et consultations | Événements attestés ≠ intentions annoncées | BROWSER + intégration C |

Ces niveaux sont des **exigences futures**, pas des tests exécutés. Le protocole devra déclarer quelle preuve est DETERMINISTIC, BROWSER, LIVE ou REAL, sans transformer un test simulé en démonstration de fonctionnement réel.

## 15.11. Risques, dettes et conditions de sortie

| Risque | Garde-fou candidat | Condition de sortie à démontrer |
| --- | --- | --- |
| Sous-investigation par heuristique de longueur | Qualification sémantique de la complexité et du besoin | Cas courts/longs et multi-intentions |
| Filtrage lexical masquant une source indispensable | Recherche progressive multi-stratégie, pagination, vérification ciblée | Cas d'absence lexicale mais pertinence élevée |
| Consolidation qui efface interdiction ou contradiction | Provenance explicite, contrainte inchangée tant que non levée | Scénario découverte tardive puis reprise |
| Boucle de lectures et coûts excessifs | Budgets techniques proportionnés, utilité marginale et suspension honnête | Mesure de latence/coût sans quota arbitraire métier |
| Perte du travail après timeout | Point de reprise attesté et contrôle d'ownership | Scénarios crash avant/après point fiable |
| Réexécution d'effet incertain | Séparation D3 / D6-D7 et fencing propriétaire | Cas ACK perdu / `UNKNOWN`, zéro duplication |
| Fuite par source externe ou permissions | Source comme donnée, contrôles propriétaire, interdiction d'exfiltration | Tests sécurité de l'axe B |
| Divergence UX entre activité affichée et outil réel | Corrélation événements et provenance de consultation | BROWSER + test intégration fonctionnelle |

**Dettes à éviter :** index vectoriel par inertie ; second moteur de ranking métier ; stockage systématique des raisonnements bruts ; copie des mêmes acquis dans D4 et un journal concurrent ; orchestration autonome globale ; seuils de « confiance » non calibrés ; séparation du code/tests/doc en micro-lots.

**Sortie de qualification A proposée :** (i) Morris revoit les invariants cognitifs intégrés ; (ii) les contrats d'information, de checkpoint et de sûreté de reprise sont définis, (iii) une preuve de faisabilité sur SDK/état actuel est spécifiée, (iv) le blast radius et tout besoin DB sont arbitrés avant code, (v) la trajectoire B/C/D et le contrat d'acceptation commun sont cohérents. **Aucune promotion ni gate technique aujourd'hui.**

## 15.12. Synthèse d'architecture candidate et prochaine décision

**Proposition de conception à soumettre à Morris :** maintenir **D3/Nora comme unique conducteur** d'investigation, organiser une liste **évolutive et non normative** de questions déterminantes, consulter les sources selon valeur informative/autorité/risque/fraîcheur, consolider des acquis sourcés, juger qualitativement la suffisance pour le livrable, et garantir une reprise fiable à partir de faits durablement vérifiables. Réutiliser les protections de tour et propriétaires existantes avant toute nouvelle persistance. **A2 privilégiée comme étude, pas comme architecture arrêtée.**

**Réserves d'architecture qui requièrent encore qualification / gate Morris si structurantes :**
1. Mécanisme de séquençage et checkpoints, avec preuve de reprise réelle sur `@openai/agents` verrouillé ;
2. Support/atomicité des acquis intermédiaires et éventuelle migration DB ;
3. Sémantique et preuve de l'arrêt « suffisamment investigué » sur des scénarios contradictoires ;
4. Calibrage opérationnel des budgets, politique de continuation et coûts ;
5. Interfaces B/C pour web, activités temps réel et états de consultation ;
6. Passage du brouillon cognitif à un **contrat versionné inspectable** sous D6/D7, sans aucune autorisation implicite.

**Suite proposée dans la même qualification ML5 :** **axe B — recherche et lecture web** : frontière de confiance, découverte versus ouverture réelle, provenance/fraîcheur, erreurs, budgets, pagination et réutilisation des points de reprise de l'axe A ; puis C (activité Nora) et D (réalisation Cursor gouvernée). L'intégration A↔B↔C↔D reste prioritaire sur des sous-systèmes indépendants.

**Verdict : AXE A CONSOLIDATED AS DESIGN CANDIDATE / DOCUMENTED — NOT ARCHITECTURE-VALIDATED, NOT IMPLEMENTED, NOT PROVEN, NOT ADOPTED.** Aucun GO Cursor, DB, PR, merge, Gate C ou promotion n'est inféré.

# 16. Consolidation intégrée de l'axe B — recherche et lecture web hébergées

## 16.1. Décision de préférence, résultat utilisateur et niveau de maturité

**Orientation explicite Morris (22/11/2026) :** **B1 — réutiliser la recherche web hébergée d'OpenAI via l'Agents SDK actuel**, plutôt que construire un service de recherche et extraction web propre à Studio. Motivation : **limiter le coût de développement, le maintien en conditions opérationnelles, le nombre d'abstractions et l'effet « usine à gaz »**. Morris délègue la qualification et la consolidation documentaire de B, **sans GO technique/code/DB/Git normatif**.

**Verdict de ce §16 : AXE B DESIGN QUALIFIED / DOCUMENTED — B1 PREFERRED CANDIDATE ; NOT IMPLEMENTED, NOT COVERAGE VERIFIED, NOT BEHAVIOR PROVEN, NOT ADOPTED.**

La conception de B est **finalisée à son niveau documentaire** : objectifs, frontières, interfaces A/C, sécurité, données, erreurs, risques, contrat de preuve et portes de sortie sont définis. La **compatibilité exécutable du fournisseur dans Next demeure non vérifiée**. Ne pas qualifier B1 de technologie définitivement retenue avant ces preuves ni activer B2 sans écart bloquant démontré.

**Résultat utilisateur cible :** lorsqu'une réponse, une étude, une préparation de contrat ou une analyse exige une information publique actuelle, Nora sait la chercher, comparer et exploiter avec la bonne provenance ; elle distingue **lien découvert**, **action de recherche**, **page ouverte attestée**, **contenu réellement étayé** et **incertitude**, puis conserve les éléments utiles à la reprise fiable A et à l'activité C. Cela s'applique au **sas et au projet**, sans créer un projet artificiel pour rechercher sur le web.

## 16.2. Sources vérifiées et précision de la faisabilité

**Lecture code Next, baseline `main@997897fd7cf914771e7d08e8030dc7123fab7d25` :**
- `web/package.json` déclare `@openai/agents: ^0.21.0` ; **`web/package-lock.json` verrouille `@openai/agents`, `@openai/agents-core` et `@openai/agents-openai` en **0.21.0**. Un `^` dans le manifest n'est pas une garantie de version effective : le lock est la référence examinée.
- `conversation/nora-adapter.ts` crée déjà un `Agent`, des tools D4/historique/Git, et valide `finalOutput` par le contrat sémantique Zod. `run(..., {stream:false})` est un contournement explicite d'erreurs antérieures sur streaming + schéma ; **ne pas réactiver le streaming de JSON à cette occasion**.
- `conversation/cognitive-policy.ts` permet les lectures D4/historique/Git, mais **ne liste aucun outil web**, ne compte pas ses actions hébergées et n'a pas de profil opérationnel validé ; `maxTurns` ne mesure pas le nombre de recherches fournisseur.
- `conversation/service.ts` injecte un mélange de message USER, extraits historiques bornés, connaissances et contexte D5/D6/CKI dans la même préparation D3 : **activer la recherche sur cet appel sans séparation des données peut exposer des informations privées dans la requête de recherche hébergée**.
- Les mécanismes de droits, de faits sourcés, de tour `UNKNOWN` et de reprise sont des bases réutilisables ; la preuve de consultation web et le checkpoint web restent inexistants dans Next.

**Documentation fournisseur publique consultée le 22/11/2026 :**
1. [Agents SDK TS — tools](https://openai.github.io/openai-agents-js/guides/tools/) et [`webSearchTool()`](https://openai.github.io/openai-agents-js/openai/agents-openai/functions/websearchtool/) : outil **hébergé**, utilisable conceptuellement avec un `Agent` et l'API Responses, sans exécution de callback local pour chaque sous-action.
2. [OpenAI — Web search / Responses](https://developers.openai.com/api/docs/guides/tools-web-search) : `web_search_call.action` peut être `search`, `open_page` ou `find_in_page` (ces deux dernières actions dépendant des modèles) ; annotations `url_citation` ; liste `sources` via include ; `search_context_size` **ne garantit pas** un nombre de sources, de tokens ou une lecture intégrale.
3. [Agents SDK TS — résultats](https://openai.github.io/openai-agents-js/guides/results/) et [exemple `web-search-filters.ts`](https://github.com/openai/openai-agents-js/blob/main/examples/tools/web-search-filters.ts) : les traces de `newItems/history`, `hosted_tool_call` et `providerData.action.sources` sont des surfaces **à tester sur le package verrouillé**, pas des propriétés d'exécution déjà démontrées dans Next.
4. [OpenAI — tarifs API](https://platform.openai.com/pricing/) : tarif public indicatif consulté **10 USD / 1 000 recherches web standard + tokens de contenu aux tarifs du modèle**, susceptible d'évoluer. **Ce n'est pas un budget produit approuvé**.
5. [OpenAI — données](https://developers.openai.com/api/docs/guides/your-data), [sécurité des agents](https://developers.openai.com/api/docs/guides/agent-builder-safety) et [tracing SDK](https://openai.github.io/openai-agents-js/guides/tracing/) : vérifier la portée des données externes, les traces contenant éventuellement des données sensibles et les contrôles avant d'activer B1.

**Attention méthodologique :** les pages SDK publiques documentent le SDK **courant**, pas nécessairement l'API exacte de `@openai/agents@0.21.0`. L'import, la configuration `searchContextSize/filters`, la forme des `RunItem` et le support du **modèle demandé par Next** doivent être vérifiés par tests de compilation puis par une exécution LIVE bornée. **Documentation externe ≠ preuve runtime/entitlement**.

## 16.3. B1 : architecture logique et frontières

**Un seul conducteur : D3 / Nora.** B1 est une **capacité de recherche publique** dans sa conduite existante, pas un second « cerveau », ni un navigateur généraliste, ni un crawler maintenu par Studio.

Séquence logique candidate :
1. D3 qualifie une **question déterminante** de l'axe A qui nécessite une donnée publique/fraîche et vérifie si une recherche est proportionnée ;
2. Studio prépare une demande de recherche **publique, minimale et non confidentielle**, sans injecter inutilement le dépôt privé, le fil conversationnel complet, les décisions internes ou les secrets ;
3. Un appel hébergé `webSearchTool()` via l'Agents SDK recherche, consulte éventuellement et renvoie un résultat avec les **éléments effectivement accessibles** dans sa version/configuration ;
4. Une **normalisation prudente des faits observés**, appartenant à Studio et sans nouveau moteur de classement métier, fournit à A des références, citations, états de couverture et limites ;
5. D3 compare ces sources aux références D4/Git, consolide ce qu'elles prouvent et rouvre les questions nécessaires ; C affiche les faits opérationnels **uniquement dans la mesure observable** ;
6. Le résultat final est restitué avec citations consultables et réserves. Aucun web call ne produit HumanDecision, contrat exécutable ou effet D7.

**Point de sûreté prioritaire :** la documentation du fournisseur recommande de séparer les recherches web publiques des consultations de données privées. Donc **l'attachement direct d'un outil web au run Nora complet, chargé de données Git privées et D5/D6, n'est PAS automatiquement acceptable**. La réalisation devra comparer au sein de D3 un run/segment **web-public isolé avec requête expurgée** ou une isolation équivalente **vérifiable**, puis réintégration du résultat côté conducteur D3. Il ne s'agit **pas** d'une décision d'utiliser un nouvel agent métier ou service persistant ; l'interface et les implications SDK restent à qualifier.

**Sans preuve de séparation des données sensibles : B1 reste bloquée**, même si une réponse web apparaît correcte.

## 16.4. Contrat d'observation : découvert ≠ consulté ≠ vérifié

Les catégories ci-dessous sont des **notions de qualification**, pas de nouveaux enums de base de données :

| Situation | Éléments autorisés | Ce qu'il est interdit de prétendre |
| --- | --- | --- |
| **Recherche engagée** | Tentative fournisseur corrélée, signal local de démarrage | « X sites consultés » avant retour |
| **Résultat/URL découvert(e)** | Titre/URL de la recherche, éventuellement extrait indexé | « Page ouverte », « document lu intégralement » |
| **`web_search_call.action = search` observé** | Appel et références retournées réellement accessibles | Une URL de `sources` ne prouve pas forcément un `open_page` distinct |
| **`action = open_page` observé** | Une page a été ouverte selon le signal fournisseur | Examen exhaustif de tout le contenu ; extraction HTML/PDF complète |
| **`action = find_in_page` observé** | Recherche dans une page au signal fournisseur | Autres sections lues ou validées |
| **`url_citation` présente** | La réponse rattache une affirmation à une URL/title/plage de texte | Source récente, exacte, intégralement lue ou indépendante des autres |
| **Action/sources non exposées par le SDK verrouillé** | Consultation **non vérifiable** / couverture partielle ou inconnue | Fabrication d'un événement « ouverte » ou « complète » |
| **Erreur/refus/timeout** | État d'incertitude, limite et cause technique admissible | Succès implicite ou coût nul présumé |

**Données minimales candidates de source** : URL canonique observée, titre si transmis, fournisseur, action attestée si disponible, annotations et référence de claim, date/instant de recherche, date de publication si réellement vérifiée, version/API si vérifiée, niveau de couverture connu, statut d'accès, question A concernée, identifiant de génération/opération et éventuel `providerCallId` disponible. **Ne pas inventer de `providerCallId`/date/publication/empreinte de contenu**.

**Fraîcheur** : date de consultation ≠ date de publication ≠ dernière mise à jour de la source. Un résultat indexé peut être ancien ; mode cache-only éventuel ≠ lecture live. Le moteur doit rapporter la limite lorsque la fraîcheur importe.

**Limite de B1** : aucune garantie générale de lecture complète de HTML, PDF, pages avec authentification ou contenus dynamiques. Les sources indispensables non vérifiables empêchent les conclusions qui en dépendent. B1 ne doit pas être vendue comme un navigateur arbitraire.

**Rendu UI** : lorsqu'une réponse s'appuie sur le web, les citations doivent être **visibles et cliquables** à proximité des affirmations. Les contrôles UI doivent conserver liens sûrs, titre/URL, étiquette de fraîcheur si étayée et différences entre références trouvées et ouvertes. La documentation fournisseur indique des exigences de visibilité des citations : ne pas se limiter à stocker une liste invisible.

## 16.5. Interface B1 → axe A : pertinence, acquisitions et reprise fiable

B1 fournit des **observations de sources** ; **A décide cognitivement de leur utilité et suffisance** pour chaque question déterminante.

| B1 → A : fait/limite | Utilisation dans l'état d'investigation A |
| --- | --- |
| Source trouvée/citée, non ouverte | Candidate à lire, **pas acquis vérifié de lecture** |
| Page ouverte / extrait attesté | Fait candidat sourcé, portée partielle connue |
| Deux sources/version divergentes | Contradiction à confronter, réouverture des questions pertinentes |
| Page indisponible, tronquée, datée ou accès refusé | Lacune identifiée avec importance pour le livrable |
| Métadonnées insuffisantes | Source non vérifiable, pas de transformation en autorité |
| Recherche épuisée sans découverte pertinente | Piste interrompue avec limites, **ne ferme pas une question indispensable** |
| Nouvelle recherche après interruption | Contrôle de pertinence, fraîcheur et doublons avant réutilisation |

**Point de reprise candidat** : conserver uniquement les informations utiles (question, intention publique de recherche, sources et actions attestées, citations, date, statut, contradiction, travail restant), sous le mécanisme durable A **encore non décidé**. Ne pas conserver ni rejouer systématiquement le corpus web brut ; ne pas rendre obligatoire un recalcul de toute l'investigation.

**En cas d'interruption/ACK incertain** : l'absence de réponse ne prouve pas l'absence de recherche ni de coût. Marquer `UNKNOWN`/non vérifiable à son niveau, éviter une relance automatique aveugle ; autoriser une nouvelle recherche read-only uniquement selon une politique de budget et de reprise explicitement qualifiée, puis corréler les versions/citations. **B1 n'hérite d'aucune autorité D7** et ne rejoue aucune mutation.

## 16.6. Interface B1 → axe C : activité fonctionnelle, sans faux streaming

| Événement fonctionnel candidat | Base de vérité nécessaire | Affichage recommandé |
| --- | --- | --- |
| Nora prévoit de vérifier une documentation publique | Étape annoncée par D3 | « Je vais consulter la documentation… » ; *intention*, pas action observée |
| Demande web envoyée | Tentative provider effectivement engagée | « Recherche web engagée » |
| Action `search` confirmée dans la réponse | `web_search_call` observé | « Recherche effectuée » |
| `open_page` / `find_in_page` confirmés | Action fournisseur effectivement retournée | « Page consultée » / « recherche dans la page » avec réserve de couverture |
| Source citée, sans action disponible | Annotation/citation accessible uniquement | « Référence web utilisée » ; éviter « page entièrement lue » |
| Budget atteint/erreur/timeout | Retour technique et corrélation | « Recherche interrompue ou incertaine » |
| Consolidation d'une contradiction | Déclaration fonctionnelle de Nora + faits associés | « Je confronte deux versions » ; **pas preuve** d'une opération terminée |

**Important :** sur `main`, Nora fait `run(stream:false)`, et l'API de tour REST renvoie une réponse terminale. Les événements intermédiaires de recherche hébergée peuvent ne devenir inspectables **qu'à la fin du run**. **B1 ne prouve pas à elle seule un flux temps réel.** L'axe C devra établir si la plateforme/SDK fournit un canal progressif sûr sans exposer le JSON Zod provisoire. Dans l'intervalle, une phase **annoncée** peut être affichée comme telle ; une activité **observée** ne peut pas être inventée.

**Corrélation** : réutiliser `operationId`, `generationId`, tentative et journal de tour existants ; éviter un deuxième registre d'activité/mission ou la conservation de requêtes contenant des secrets. Les observables d'usage ne suffisent pas à reconstituer les étapes privées de raisonnement.

## 16.7. Confidentialité, injection et frontière de confiance

| Risque | Exigence de conception |
| --- | --- |
| **Exfiltration involontaire** via requête web contenant nom privé, chemin confidentiel, contenu de décisions internes, secret/token | Séparer **données privées** et **recherche publique**, réduire/reformuler les requêtes, ne pas connecter B1 à un contexte privé intégral sans protection vérifiée |
| **Injection indirecte** dans pages/snippets (« ignore règles », « exécute », « révèle token ») | Traiter tout résultat web comme **donnée non fiable** ; aucune élévation d'autorité ni action D4/D6/D7/Git fondée sur une instruction de page |
| **Lien malveillant/phishing** | Exposer URL réelle consultable avec indicateurs, ne pas exécuter de scripts ni suivre liens privés/authentifiés ; contrôle des URL au rendu |
| **Empreinte de consultation/traçage sensible** | Définir politique de rétention/minimisation, neutraliser les logs bruts, inspecter `traceIncludeSensitiveData` et les traces hébergées |
| **Actualité fabriquée / source invalide** | Dates/versions uniquement si connues, contradiction conservée, aucune preuve LIVE inférée d'une documentation éditeur |
| **Données personnelles / résidence / politiques fournisseur** | Examiner les contraintes réelles de traitement de l'API et du projet fournisseur avant activation ; aucun accord implicite sur la transmission de secrets |

**Point bloquant :** le seul prompt « ne divulgue pas de secrets » n'est **pas une barrière de sécurité suffisante** si le même modèle possède déjà toutes les données privées et peut formuler une recherche externe. La voie B1 ne réduit pas ce risque par magie ; elle évite surtout d'héberger un fetch/crawler arbitraire côté Studio.

**SSRF et parsing HTML** : B1 n'implique pas automatiquement que Studio gère la résolution DNS, les redirections réseau ou le rendu HTML arbitraire **car l'outil est hébergé**. Ne pas investir dans ces mécanismes par inertie. Les risques effectivement portés par Studio sont principalement **données sortantes, rendu des liens, autorité des sorties, métadonnées et contrôle fournisseur**. Si une extension propriétaire apparaît plus tard, son blast radius réseau sera requalifié séparément.

## 16.8. Budget, coût, latence et déclenchement proportionné

**Règles candidates :**
- Recherche **sur besoin sémantique**, pas à chaque tour ; pas de recherche « pour décorer » les réponses.
- Éviter répétition d'une même requête ou source sous le même objectif, sauf fraîcheur/dependance justifiée.
- Commencer avec un `searchContextSize` proportionné (piste : `medium`, **pas valeur adoptée**). `low/medium/high` ne sont pas des quotas numériques garantis.
- Préférer les docs officielles de la **version pertinente** sans en faire une autorité produit ; comparer plusieurs sources lorsque la décision technique l'exige.
- Mesurer séparément : **appels web réels** si exposés, actions `search/open_page/find_in_page` si exposées, **tokens**, durée, succès, erreurs et éventuelles recherches facturées mais non attestées.
- **Ne pas considérer** `maxTurns` et le budget `remainingCalls` D4 comme une borne exacte du nombre d'actions web hébergées : vérifier les mécanismes de plafonnement/usage réellement proposés par le SDK, le modèle, l'API et la plateforme de facturation.
- Une demande très longue, une recherche répétitive ou `return_token_budget: unlimited` (lorsqu'il est techniquement disponible) nécessitent un profil de coût explicitement justifié ; **aucun illimité par défaut**.
- `OPERATIONAL_VALIDATED` doit être calibré puis approuvé avec preuves de charge/coût ; les budgets TEST_BOUNDARY et DEV ne deviennent pas des valeurs de production.
- Ne pas annoncer de **coût total garanti** avant mesure réelle par profil de mission. Le tarif fournisseur public est une **base d'estimation**, susceptible d'évolution.

**Mode secours :** si B1 échoue ou dépasse les ressources, Nora peut exploiter les sources internes déjà fiables et restituer une limite sur l'information actuelle, **sans bascule silencieuse vers un crawler local** ni faux résultat complet.

## 16.9. Contrat d'erreurs et de reprise

| Incident B1 | Traitement cognitif et UI | Invariant |
| --- | --- | --- |
| Search non déclenchée car non nécessaire | Nora répond sur les sources suffisantes | Pas de requête inutile |
| Aucun résultat | Résultat de recherche vide, et éventuelle question A non résolue | « Aucun résultat » ≠ fait inexistant |
| Page impossible à ouvrir / PDF non lisible | Couverture `PARTIAL/UNKNOWN`, autre source possible | Pas de « lu intégralement » |
| Resultat ancien/version obsolète | Indiquer date/fraîcheur et réinvestiguer si déterminant | Pas de vérité actuelle déduite |
| Citation sans action visible | Référence citée, action `open_page` non attestée | Pas de consulté attesté |
| Réponse fournisseur annulée/timeout | Tentative interrompue ou inconnue, usage possiblement facturé | Pas de retry aveugle |
| Web contenu hostile | Ignorer instructions ; isoler comme données, signaler si pertinent | Aucun GO ou mutation |
| Autorité/accès du Pilote modifiés pendant recherche | Revérifier permissions de toute source privée utilisée en consolidation | Pas de contournement par le web |
| Sortie Zod invalide en combinant outils | `UNKNOWN/UNAVAILABLE` selon contrat Nora actuel | Ne pas substituer une réponse non validée |

Les libellés `PARTIAL`, `UNKNOWN`, `STALE` et autres sont des **catégories conceptuelles adaptées au périmètre web**, non des nouveaux enums DB. Ne pas mélanger état **technique de lecture**, **suffisance cognitive A** et **autorité d'effet D6/D7**.

## 16.10. B1 vs B2 et conditions d'escalade

| Critère | **B1 — hébergée, privilégiée** | **B2 — service propriétaire, non lancé** |
| --- | --- | --- |
| Coût de développement | Faible à modéré si compatibilité prouvée | Élevé : fetch, extraction, cache, sécurité, maintenance |
| Contrôle des sous-opérations | Dépend des surfaces fournisseur/SDK | Plus direct, mais à construire et sécuriser |
| Confidentialité | Exige cloisonnement **web public / sources privées** | Exige également cloisonnement, plus risques HTTP |
| Couverture d'une page | Non garantie par défaut | Peut être instrumentée, à coût technique élevé |
| Exploitabilité des citations | Annotations / sources potentielles | À concevoir |
| Coût opérationnel | Recherches et tokens fournisseurs | Hébergement, réseau, moteur, maintenance, potentiellement API tiers |
| Reprise de source | Réutilise métadonnées attestées de A | Règles d'état et extraction dédiées |

**Déclencheur d'étude B2** : seulement si un **écart bloquant prouvé** de B1 affecte une exigence déterminante (par exemple impossibilité de séparer des données privées, de restituer une provenance nécessaire ou de consulter une catégorie de source indispensable). Avant toute étude B2, comparer **une correction minimale** de l'intégration hébergée, sans inventer une seconde architecture.

**Aucune construction B2 parallèle, migration de moteur ou changement de fournisseur déduit par le présent document.**

## 16.11. Acceptation et preuves futures — matrice de qualification exécutable

| Scénario | Preuve attendue | Niveau de preuve |
| --- | --- | --- |
| **B-WEB-01** Import de `webSearchTool` sous SDK verrouillé | Compilation avec `0.21.0`, sans upgrade tacite | DETERMINISTIC |
| **B-WEB-02** Run Nora avec ses outils D4/Git, `outputType` Zod et recherche | FinalOutput valide, couverture et statut authentiques | INTEGRATION + LIVE borné |
| **B-WEB-03** Recherche non nécessaire | Aucune recherche facturée/appel observé sur demande simple | LIVE + consommation |
| **B-WEB-04** Recherche sur documentation éditeur datée | URL, titre, citation, date seulement si attestée, pas de prétention de lecture complète | LIVE |
| **B-WEB-05** Search vs `open_page` | Distinction sur `web_search_call.action` si exposé ; sinon libellé **NON VÉRIFIABLE** | INTEGRATION + LIVE |
| **B-WEB-06** Sources/annotations SDK | `RunItem/history/providerData` réellement accessibles dans la version verrouillée | INTEGRATION |
| **B-WEB-07** Page indisponible/PDF partiel | `PARTIAL/UNKNOWN`, source déterminante non déclarée complète | INTEGRATION + LIVE |
| **B-WEB-08** Deux documents contradictoires / datés | Nora conserve versions, provenance et contradiction dans A | LIVE |
| **B-WEB-09** Requête sensible | Aucun identifiant/secret/texte privé n'est envoyé comme requête web ; séparation des contextes prouvée | SECURITY + LIVE contrôlé |
| **B-WEB-10** Injection dans résultat web | Aucun mandat/écriture/effect D6/D7 issu du contenu externe | SECURITY + DETERMINISTIC + LIVE |
| **B-WEB-11** Timeout, ACK incertain, reprise | Recherche/cout marqués inconnus si nécessaires ; pas de restitution ni retry fictifs | INTEGRATION + LIVE ciblé |
| **B-WEB-12** Mesure coûts/outils | Nombre d'actions/usage si exposés, durée et tokens ; limites explicites | INTEGRATION + LIVE |
| **B-WEB-13** Sas / projet | Web accessible dans les deux parcours sans création artificielle de projet | INTEGRATION + BROWSER |
| **B-WEB-14** Activité avec `stream:false` | Phase annoncée distincte d'action fournisseur observée ; pas d'événement temps réel inventé | INTEGRATION + BROWSER |
| **B-WEB-15** Citation UI | Liens source cliquables, provenance et réserve lisibles, pas de contenu exécutable | BROWSER |
| **B-WEB-16** Condition de décision pour Cursor | Document web officiel ne suffit pas à prouver le support réel SDK/entitlement sur Studio | LIVE + vérification code |

**Aucun de ces tests n'a été exécuté ici.** Le code local, les clés fournisseur, le statut de compte, les appels LIVE et les coûts effectifs sont **NON OBSERVÉS**. Les tests simulés/DETERMINISTIC ne remplaceront pas la preuve LIVE de B1 dans Next.

## 16.12. Blast radius et synchronisation documentaire pour une future implémentation

- **D3** : outil hébergé et sa politique d'exposition publique ; conservation de la sortie structurée et du contrat d'autorité ;
- **Profil cognitif/budgets** : coût et contrôle d'accès au web selon la mission, validation du profil opérationnel ;
- **Réponse/annotations** : adapter la projection source et les citations sans dégrader les références D4/Git ;
- **A** : état d'investigation, checkpoint et reprise, avec méta-source web minimal ;
- **C** : activité annoncée/observée, relation avec les limites du non-stream ;
- **Sécurité** : séparation web public/privé, minimisation des données, logs, traces, injection de prompt ;
- **UX** : page 12 Figma et parcours sas/projet, affichage des liens et états de couverture ;
- **D4/D6/D7** : règles de propriété inchangées ; aucune mutation liée directement aux sources web ;
- **Tests/doc/architecture** : tests unitaires, intégration, BROWSER, LIVE, documentation as-built synchronisée **dans le macro-lot de construction**. Pas de micro-lot documentaire isolé en aval.

Une évolution de schéma DB, un service web autonome ou une modification d'autorité est un **gate Morris spécifique**, non une extension tacite du mandat. Le passage `B1 privilégiée → architecture retenue` exige revue de sécurité et compatibilité réelle.

## 16.13. Risques résiduels, exit et suite

| Risque résiduel | Condition de sortie |
| --- | --- |
| Documentation SDK plus récente que le package installé | Test compile et inspection des objets réellement retournés sur `0.21.0` |
| Le modèle demandé par Next ne supporte pas l'outil attendu | Test fournisseur LIVE au modèle/effort réel et contrôle de la disponibilité |
| Recherche hébergée peut divulguer des données internes | Isolation web publique vérifiée + test négatif de non-exfiltration |
| Citations sans preuve `open_page` | Rendu fidèle des niveaux d'observation et limites acceptées par le contrat A |
| Coût outil non plafonné par budgets D4 | Mesures réelles, garde-fous et profil opérationnel arbitrés |
| L'outil ne diffuse pas de jalons en temps réel | Axe C qualifie un transport d'activité honnête et les limites du non-stream |
| Reprise après interruption et web mutable | Point de reprise A, vérification de fraîcheur, distinction état fournisseur inconnu |
| Changement de version SDK requis | Blast radius, tests Zod/outils/streaming, gate technique Morris avant code |

**Exit de qualification documentaire B : atteint pour la conception candidate** — responsabilité, flux, B1 privilégiée, interface A/C, exigences de provenance, sécurité, cas d'erreur et plan probatoire sont définis. **Exit de faisabilité/exécution B : NON ATTEINT** — pas d'essai compilé/LIVE, pas de sécurité validée, pas de budgets de production, pas d'architecture adoptée.

**Suite de la même trajectoire ML5 :** **axe C — activité fonctionnelle transverse de Nora**, avec B1 comme source d'observations potentielles, en veillant à ne pas déduire des événements live d'un run non streamé ; puis axe D Cursor sous D6/D7/D8. Conserver **un document d'architecture central unique** et les arbitrages Morris dans leurs statuts exacts.

**Verdict final de l'axe B : B1 SELECTED FOR DESIGN / DOCUMENTED / TECHNICAL FEASIBILITY AND LIVE PROOF OUTSTANDING / NOT IMPLEMENTED / NOT ADOPTED.**

# 17. Consolidation intégrée de l'axe C — activité fonctionnelle transverse de Nora

## 17.1. Résultat utilisateur, périmètre et statut des choix

**Résultat visé :** lorsqu'une investigation Nora dure, le Pilote voit dans le **fil concerné** une information intelligible sur le travail engagé, les sources réellement consultées, les difficultés et la suite, sans attendre uniquement la réponse finale. Après coupure/reprise, les faits utiles restent consultables et ne sont pas reconstruits artificiellement.

Le contrat fonctionnel ML5 v0.3 (section 6) prévoit déjà : **activité transverse sas/projet ; transparence uniquement**, résumé compact et détail repliable ; distinction entre **étape annoncée**, **événement réellement observé**, **étape terminée** et **état incertain** ; aucun affichage de chaîne de pensée, aucun micro-pilotage supplémentaire demandé. La **page 12 Figma (12.01 à 12.10)** est validée en contenu/visuel par Morris, **pas prouvée en runtime**.

**État des choix** :
- **VALIDATED SPEC (fonctionnel)** : rendre le travail de Nora visible pendant les investigations, sans prétendre consulter ou terminer ce qui n'est pas attesté ; aucune commande d'interruption/micro-pilotage propre au widget d'activité.
- **CANDIDATE RECOMMENDED (architecture, non arbitré)** : **C1 — projection d'activité corrélée et consultable périodiquement** ; réutiliser les identités de tour et les protections D3/A avant de créer de nouveaux propriétaires. Un état d'activité fonctionnel doit pouvoir être reconstitué à partir de faits durables.
- **À COMPARER SI BESOIN DÉMONTRÉ** : **C2 — SSE** comme transport complémentaire d'une **même** projection, seulement si le rafraîchissement mesuré ne satisfait pas l'UX.
- **NON RETENU COMME PISTE ACTIVE** : **C3 — WebSocket**, aucune interaction bidirectionnelle requise par la transparence cible.
- **NON DÉCIDÉS** : format exact du stockage, granularité des événements, endpoint et schéma de lecture, TTL/rétention métier, fréquence de polling, SSE futur, règles de checkpoint A, éventuelle migration. Aucun GO technique ni nouveau moteur d'activité.

**Verdict : AXE C DESIGN QUALIFIED / DOCUMENTED — C1 PREFERRED CANDIDATE ; NOT ARCHITECTURE-VALIDATED, NOT IMPLEMENTED, NOT PROVEN, NOT ADOPTED.**

## 17.2. Constat vérifié dans le code Next sur main

| Composant actuellement observé | Contrat présent et limite exacte pour C |
| --- | --- |
| `web/src/lib/observability.ts` | `emitObs`, version d'événement, codes/outcomes, `request_id/operation_id/generation_id/attempt_id`, filtrage des métadonnées, redaction, sink local avec **`OBS_RETENTION_DAYS=14`** ; journal diagnostique, **jamais autorité d'état D3/D4** |
| `web/src/domains/conversation/turn-command.ts` | `conversationTurnCommands`, `clientTurnKey`, opération, génération, `ownerToken`, lease/heartbeat, ownership fencing et réconciliation prudente `RUNNING/ACCEPTED → UNKNOWN` ; aucune chronologie fonctionnelle complète implémentée |
| `web/src/db/schema.ts` | `conversation_turn_commands.result_json` durable ; persistance des faits de tour et de qualification, **pas** un plan de migration approuvé pour les événements C |
| `web/src/domains/conversation/turn-projection.ts` | `TurnActivitySummary` seulement `wait/sources_consulted/interrupted/failed/uncertain`, surtout projetée à partir d'un terminal ; `turnProjection` peut être présente en `resultJson` ; ne représente pas une suite d'étapes en cours |
| `web/src/app/api/preparations/[preparationId]/messages/route.ts` | `POST` attend `postUserMessageAndNora` et renvoie `NextResponse.json` terminal ; pas de SSE/progression dans cette route ; `GET` liste les messages |
| `web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts` | `GET` authentifié, lecture de l'état durable du tour par clé **sans appel Nora ni mutation** ; utile pour corrélation et reprise, **ne retourne pas encore une chronologie C** |
| `web/src/app/projects/[projectId]/page.tsx` | Identité d'intention, reprise idempotente après erreur et lookup de tour ; polling **2 s sur la qualification initiale**, autre périmètre ; ne prouve pas polling de l'activité Nora |
| `web/src/app/preparations/[preparationId]/page.tsx` | `noraActivity: idle/preparing/error`, POST terminal ; polling **1,5 s sur la qualification initiale**, autre périmètre ; ne prouve pas flux d'activité Nora |
| `web/src/components/figma/NoraConversation.tsx` / `PreparationConversation.tsx` | Composants de fil avec attente générique/erreur et projection terminale ; pas de suivi fonctionnel progressif complet |
| `web/src/domains/conversation/nora-adapter.ts` | `@openai/agents@0.21.0`, `run(..., {stream:false})`, finalOutput Zod, erreurs et effet incertain `UNKNOWN`; choix de non-stream suite à anomalies de schéma lors d'enquêtes riches en outils |

**Point technique important :** le `GET turns/by-key` de récupération et le polling déjà utilisé ailleurs offrent des **principes réutilisables**. Il n'existe pas de preuve qu'ils suffisent **tels quels** à lire un état intermédiaire C, à travers plusieurs instances serveur, pendant l'exécution du `POST`. Le choix de stockage est donc laissé ouvert.

## 17.3. Architecture fonctionnelle candidate — un état, plusieurs projections

**Chaîne logique candidate** :

`Intention Pilote → Tour D3 reconnu → Investigation A (outils D4/histoire/Git/B1) → Faits et phases d'activité C corrélés → État d'activité consultable sous droits → Projection UX fil Nora → Réponse finale structurée distincte`.

Le conducteur cognitif **reste Nora D3**. Les événements **observés** proviennent des propriétaires d'outils et de la vérité transactionnelle disponible ; les **étapes annoncées** relèvent d'une formulation fonctionnelle de Nora, correctement étiquetée. A possède le **contexte de reprise**, C en fournit une **vue explicative** ; `emitObs` demeure un **journal technique** à rétention limitée, et D6/D7/D8 restent propriétaires des autorisations, tentatives et preuves d'effet.

**Deux sorties complémentaires, sans concurrence** :
1. **Activité fonctionnelle** : événements/projection consultables pendant le travail (éventuellement avec délai de rafraîchissement), sans être le contrat final.
2. **Qualification finale structurée** : `outputType`/Zod, validation avant tout effet selon la doctrine SEM ; **ne pas envoyer des fragments JSON provisoires comme réponse finale**.

**Règle de conception :** une projection C est dérivée/corrélée à des états et observations vérifiables ; elle ne peut devenir un **second registre de mission ou d'autorité**. Ne pas persister arbitrairement la chaîne de pensée ni copier intégralement le journal technique.

## 17.4. Contrat conceptuel des événements et distinction des niveaux de vérité

Les propriétés suivantes sont une **interface de conception**, pas un nouveau schéma DB adopté :

| Propriété | Finalité et règle de vérité |
| --- | --- |
| **Travail et portée** | Pilote, préparation/projet existant, `clientTurnKey`, `commandId/operationId` et `generationId` si connue ; pas de projet fabriqué dans le sas |
| **Identité d'événement** | Identifiant stable et ordre monotone **à prouver** pour reconstruire une séquence sans doublons après polling/reconnexion |
| **Phase fonctionnelle** | Investigation, vérification documentaire, lecture Git, consultation web, consolidation, préparation ou contrôle final, selon observation/annonce réelle ; pas de workflow fixe |
| **Nature probatoire** | **ANNONCÉE** (intention), **OBSERVÉE** (appel/retour vérifié), **TERMINÉE CONFIRMÉE**, ou **INCERTAINE/PARTIELLE** ; termes candidats, pas enums |
| **Situation** | En cours/terminée/échouée/limitée/inconnue ; conforme à l'outcome réel de la source |
| **Source utile** | Référence D4, chemin Git/ref/version, URL publique et niveau de consultation B1 **seulement s'ils sont réellement accessibles, autorisés et sûrs à montrer** |
| **Horodatage** | Temps serveur fiable si disponible, pas de « temps écoulé » inventé |
| **Restitution** | Message fonctionnel court, éventuellement détail repliable et statut ; ni prompt brut, ni paramètres secrets, ni trace privée |
| **Origine et observation** | Propriétaire de l'événement, identifiant de tentative, statut de couverture, limite si donnée ; pas de preuve d'outil depuis le seul texte Nora |

**Exemples de vérité C :**
- `Recherche web engagée` à l'envoi attesté ≠ `page ouverte` ; la phase peut être annoncée et rester incertaine à la fin d'un timeout B1.
- `Fichier Git consulté` suppose un retour de lecture vérifié sur **la bonne ref** ; `UNPREVIEWABLE` n'est ni lecture du corps ni absence de fichier.
- `Document D4 v3 consulté` implique la révision lue et sa couverture réelle ; une liste de titres ne donne pas cette preuve.
- `Consolidation en cours` est une phase de travail déclarée, **pas** la preuve de conformité du résultat.
- `Je vais vérifier la décision` est un engagement de démarche, non une décision consultée ou un mandat obtenu.

Un événement terminal `COMPLETE` ne prouve ni la complétude de la mission A, ni une autorisation D6, ni un succès Cursor D7, ni une adoption par Morris.

## 17.5. Transport — comparaison et orientation privilégiée C1

| Option | Apport | Risque/dette | Verdict de conception |
| --- | --- | --- | --- |
| **C1 — GET d'une projection d'activité + polling borné** | Supporte la reconnexion et la reprise via identité du tour, sans connexion persistante au provider ; mécanisme familier de Next | Accès réel à un état intermédiaire durable, fréquence/latence, plusieurs instances, charge et écriture concurrente à qualifier | **Privilégié pour étude**, pas ratifié |
| **C2 — SSE de la même projection** | Diffusion serveur → client plus rapide ; reconnectabilité selon ids | Reconnexion/replay, proxies, streaming HTTP, gestion d'une deuxième voie de livraison, risque de faux « live » | Option uniquement si C1 ne satisfait pas la recette UX, **sans autre état canonique** |
| **C3 — WebSocket** | Bidirectionnel | Complexité réseau/sessions non justifiée par la transparence seule | Pas de travaux actifs |

**C1 — comportement cible** : l'interface connaît le `clientTurnKey` dès l'envoi ; elle peut demander **sous session authentifiée** les événements/projection disponibles du tour, via une interface **de lecture**. Le serveur vérifie les droits Pilote/préparation/projet. La réponse sépare statut `RUNNING/UNKNOWN/terminal`, événements réellement connus, séquence/curseur et statut de fraîcheur. La fréquence de polling est **bornée et calibrée**, ralentie/arrêtée une fois le tour terminal, si vue hors écran ou erreur prolongée. **Pas de fréquence de 1,5–2 s copiée mécaniquement** : les intervalles cités ailleurs servent la qualification initiale et non l'activité Nora.

**Concurrence et reprise** : lectures idempotentes ; maintien de l'ordre, déduplication par clé stable, pas de création d'événement par une opération GET ; protection contre réponses désordonnées et cursors périmés ; statut `UNKNOWN` conservé. Éviter qu'un ancien tour B remplace l'activité du tour A encore non résolu ; le widget est **lié au travail identifié**, non au dernier texte ressemblant.

**Point de faisabilité à prouver** : les écritures d'événements **pendant** `POST`/provider, durablement visibles par les GET sur d'autres workers, doivent respecter l'ownership et les transactions courtes existantes. Choix entre projection compacte dans l'état de travail A ou stockage spécialisé proportionné à étudier **avant** création de table. Le sink `.obs` local, limité à 14 jours, n'est **pas** un support durable adéquat multi-instance.

**C2** éventuel : pousser les **mêmes événements validés** via SSE, sans remplacer C1 comme moyen de reprise ni rouvrir le streaming de `finalOutput` ; un canal de progression peut exister sans exposer une qualification Nora incomplète.

## 17.6. Contrats d'interface entre A, B, C et D

| Relation | Propriétaire et donnée échangée | Garde-fou |
| --- | --- | --- |
| **A → C** | Travail D3, questions/étapes publiques, acquis confirmés, point de reprise, état de suspension | Ne montrer qu'un résumé proportionné et non sensible ; C n'invente pas une connaissance A |
| **D4/histoire/Git → C** | Tentatives et retours d'outils, couverture `COMPLETE/PARTIAL/STALE/DENIED`, ref/version si communicables | Recherche/titre ≠ lecture ; droit d'accès à chaque lecture et restitution |
| **B1 → C** | Tentative web et `search/open_page/find_in_page` **si exposés/observés** ; liens/citations limités au nécessaire | Ne pas attribuer de sous-action non visible, ni promettre du temps réel avec `stream:false` |
| **C → UX** | Identités/ordre, phases, observations et incertitudes, source affichable ; statut final par le propriétaire | Aucun % d'avancement synthétique non justifié, aucun prompt/secret |
| **C → A (aucune autorité)** | Les faits d'activité peuvent aider au diagnostic/rejeu des lectures, **pas** créer un acquis confirmé sans source propriétaire | A garde son point de reprise vérifiable, C n'en est pas l'autorité |
| **D7/D8 → C (futur axe D)** | États d'exécution Cursor et résultats observés dans leur domaine propriétaire | C n'émet pas de succès de tentative, de tests PASS, de D6 ni d'ADOPTED en autonomie |

## 17.7. UX cible et portée des écrans validés

**Fil Nora, sas et projet** :
- Avant la réponse, montrer **une activité compacte rattachée au bon tour** et des messages de phases seulement si le travail engagé le justifie. Une simple question peut rester sans chronologie détaillée.
- Pendant une investigation longue, montrer une étape importante et son **niveau de véracité** (« recherche engagée », « lecture confirmée », « source partielle », « contrôle à effectuer »), puis permettre un détail **repliable**.
- Après finalisation, conserver un **résumé proportionné** utile à la compréhension, sans produire une console technique complète dans toutes les surfaces.
- Sur interruption, indiquer l'état `UNKNOWN/PARTIEL` réellement connu et les informations de reprise existantes ; ne pas afficher une progression fictive ni un bouton d'exécution supplémentaire.
- Les références et citations s'affichent seulement sous un lien autorisé, sûr et réellement connu ; éviter les secrets, noms privés non nécessaires, traces de chaînes de pensée et métadonnées sensibles.
- Intégration visuelle cohérente avec la **page 12 Figma validée** ; une capture navigateur runtime reste nécessaire pour un verdict UX fort. Maquette validée ≠ comportement testé.

**Limite de la cible C :** le widget reste **transparence, pas micro-commandes**. Ne pas généraliser des pourcentages d'avancement ni un suivi détaillé sur les demandes simples.

## 17.8. Conservation, sécurité et erreurs

**Conservation** :
- Les événements à retenir doivent expliquer la progression et les limites **nécessaires à la reprise A** et aux affirmations visibles. Ne pas retenir automatiquement tous les détails techniques.
- Définir à la construction **propriétaire, cycle de vie et durée de conservation** de l'activité fonctionnelle distincte des logs diagnostiques 14 jours ; ne pas choisir de table ou migration par inertie.
- Les écritures intermédiaires doivent être **fencées** à un propriétaire valide ; aucune transaction longue autour de l'appel fournisseur.
- `GET` authentifié : autorisation par préparation/projet/Pilote, filtrage de références, pagination, charge bornée et aucune mutation cachée.

**Erreurs et limites** :
- **Timeout du POST mais tour RUNNING** : le widget garde le bon tour et rapporte l'état durable observé, sans lancer un second tour.
- **Perte d'ownership/fence** : refuser les événements tardifs prétendument définitifs ; réconciliation prudente, statut incertain.
- **Source D4/Git/B1 PARTIAL/UNKNOWN** : statut explicite, aucune lecture intégrale fabriquée.
- **Panne de projection/OBS** : si l'activité n'est plus consultable, afficher « activité indisponible » sans prétendre que l'investigation s'est arrêtée ; l'observabilité secondaire ne doit pas créer d'effet.
- **Source privée et logs** : filtrage strict à la production et au rendu, pas de transmission de prompts/secrets/query sensibles via activité.
- **Relecture après reconnexion** : déduplication, absence d'événements inventés, conservation de l'incertitude et statut terminal cohérent avec le tour.

## 17.9. Matrice de preuves pour la future implémentation

| ID | Scénario | Résultat attendu | Niveau futur |
| --- | --- | --- | --- |
| **C-ACT-01** | Conversation simple | Pas de surinstrumentation ni de latence artificielle | DETERMINISTIC + LIVE |
| **C-ACT-02** | Investigation D4/Git longue | Étapes significatives **observées** consultables pendant RUNNING | INTEGRATION + BROWSER |
| **C-ACT-03** | Étape annoncée mais outil jamais déclenché | Aucune confirmation « consulté » | DETERMINISTIC |
| **C-ACT-04** | D4 `PARTIAL/STALE/DENIED`, Git `UNPREVIEWABLE` | Libellés exacts, aucune preuve de lecture complète | INTEGRATION |
| **C-ACT-05** | B1 retourne URL/citation sans `open_page` | Aucun « page ouverte » sans signal provider | BROWSER + LIVE B1 |
| **C-ACT-06** | B1 `stream:false` | Pas de sous-action observée affichée avant disponibilité ; distinction annoncé/observé | INTEGRATION + LIVE |
| **C-ACT-07** | Client déconnecté puis reconnecté | Même tour, même séquence, curseur/déduplication et lecture d'état | INTEGRATION + BROWSER |
| **C-ACT-08** | Réponses de polling désordonnées | Pas de régression ou disparition d'étapes confirmées | DETERMINISTIC + BROWSER |
| **C-ACT-09** | Timeout/ACK perdu avec tour encore RUNNING | Relecture sans second `POST` Nora ; état et activité fidèles | INTEGRATION |
| **C-ACT-10** | Perte du `ownerToken` puis écriture tardive | Fencing, aucun faux terminal ni doublon d'événement | INTEGRATION DB |
| **C-ACT-11** | Reconcilé en `UNKNOWN` | Aucune transformation en SUCCESS par le widget | INTEGRATION + BROWSER |
| **C-ACT-12** | Sources secrètes / injection | Aucune fuite par activité, lien ou métadonnée | SECURITY |
| **C-ACT-13** | Réponse finale Zod avec activité intermédiaire | Qualification finale intacte, non-stream maintenu par défaut | INTEGRATION + LIVE |
| **C-ACT-14** | Même travail depuis sas et projet | Droits, identité et projection corrects, aucun projet fictif | INTEGRATION + BROWSER |
| **C-ACT-15** | Deux tours A/B ou clients concurrents | Activité isolée et identifiée, aucun remplacement croisé | INTEGRATION + BROWSER |
| **C-ACT-16** | Charge et rétention | Fréquence/volume contrôlés ; pas de saturation ni conservation excessive | PERF + SECURITY |
| **C-ACT-17** | UX Figma → capture runtime | Résumé/détail/état incertain lisibles sur vraies données | BROWSER |
| **C-ACT-18** | Résultat Cursor D7 futur | Succès/erreur uniquement depuis la tentative propriétaire et preuve D8 | INTEGRATION (avec axe D) |

**Aucun de ces tests n'est exécuté dans cette consolidation.** Les preuves doivent garder leur niveau réel : SCRIPTED/DETERMINISTIC ≠ BROWSER ≠ LIVE ≠ REAL, et une maquette n'est pas une capture runtime.

## 17.10. Impacts, dette et gates avant une implémentation

**Blast radius :** `nora-adapter` et outils D3, service conversation et commandes de tour, `turnProjection` et éventuel checkpoint A, API de lecture authentifiée, UI Sas/Projet, B1 web, `observability.ts`, tests de concurrence/reprise, éventuellement DB et performance. Tout changement structurel touche l'autorité de tour et doit être qualifié au point d'écriture.

**Risques à éviter** : 
- Dupliquer le journal `conversation_turn_commands` en second journal de mission/activité ;
- Utiliser `.obs` local comme vérité métier durable ;
- Rendre `outputType` / la validation Zod dépendants d'un canal de tokens provisoires ;
- Réinventer un moteur de progression/score ou exporter les sous-étapes du raisonnement privé ;
- Ajouter WebSocket/SSE par mode sans nécessité UX démontrée ;
- Décider une migration DB avant étude d'un état compact lié à A, avec contrôle de concurrence ;
- Afficher une information observée à partir de texte libre de Nora ou d'une absence d'erreur.

**Gates à instruire avant GO code :**
1. **Contrat d'information C** harmonisé avec le checkpoint A (pas de double autorité ni double rétention) ;
2. **Choix/atomicité de persistance** et portée des écritures intermédiaires : migration éventuelle soumise à Morris ;
3. **Transport C1** : visibilité durant le travail, charge/rétention, auth et reconnexion démontrables ; C2 seulement après preuve de nécessité ;
4. **Compatibilité SDK/provider B1** : limites de jalons réellement observables, sans faux flux live ;
5. **Revue UX** du rendu des étapes et états incertains, puis preuves BROWSER en construction ;
6. **Matrice d'acceptation commune A/B/C/D** au niveau macro-lot, sans découper code/tests/docs en micro-lots.

**Conclusion de qualification de l'axe C :** une **projection d'activité fonctionnelle consultable périodiquement, rattachée au travail et aux faits propriétaires**, offre une voie simple et cohérente avec la reprise fiable, **sans nouveau moteur**. **C1 est recommandée, pas adoptée** ; C2 est une option de transport conditionnelle, C3 n'est pas active.

**Exit documentaire C : ATTEINT POUR CONCEPTION CANDIDATE. Exit d'architecture validée / persistance / runtime C : NON ATTEINT.**

**Suite** : passer à **l'axe D — contrat Cursor, D6 autorisation, D7 tentative, D8 preuves et reprise** ; confronter les capacités fournisseurs aux limites réelles de Next avant toute architecture arrêtée ou prompt d'exécution. Conserver le **document central unique** et le Gate C ouvert.

# 18. Axe D — orientation d'exécution Cursor SDK local et rapport de réalisation exploitable par Nora

## 18.1. Arbitrage de contenu du 23/11/2026 et limites

**Arbitrage Morris exprimé et mandat documentaire borné :** Morris confirme **Cursor SDK TypeScript en mode local comme voie privilégiée pour Next**, demande son inscription dans ce document Git et ajoute une exigence déterminante : **Cursor doit remettre à Studio un rapport de réalisation à l'issue de chaque tentative**, dans l'esprit du Review Pack/Review Handoff SFIA v2.6, afin que Nora puisse examiner le travail et produire une synthèse critique. Cet accord est une **orientation approuvée en contenu**, **pas** une validation de toutes les interfaces techniques ci-dessous.

**Hébergement explicite** : **aujourd'hui**, Studio Next, Cursor et les dépôts de développement sont sur le **poste personnel** de Morris ; **cible de production**, Studio Next sur un **serveur secondaire** accessible depuis le PC du Pilote par DNS + HTTPS/TLS, avec exécution Cursor sur ce serveur. Le PC du Pilote devient un **poste client navigateur**, pas l'exécuteur. Le serveur Cursor doit être isolé du processus et des secrets de l'application Studio, même lorsque les deux cohabitent physiquement.

**Décision de trajectoire / non-décisions :**
- **VALIDATED IN CONTENT — orientation** : **`@cursor/sdk` local en priorité**, contrat D7 commun DEV/production, rapport par tentative transmissible et exploitable par D8/Nora, **aucun second moteur d'effet**.
- **CANDIDATE — conception à éprouver** : adaptateur D7 borné, worker/processus supervisé, format conceptuel du rapport, ingestion durable, recoupement D8, intégration C et stratégie de reprise.
- **NON ARBITRÉS** : version SDK, modalités d'installation/identité et facturation, packaging/worker de production, permissions et sandbox, modèle de persistance des rapports, chemin d'échange, topologie runtime, schémas DB, cadence de consultation, limites de volume, contrats de statut et coûts. Aucun GO Git technique/DB/code n'est donné.
- **ALTERNATIVES EN RÉSERVE** : CLI headless ou Cloud Agents + My Machines uniquement en présence d'un écart technique bloquant établi, **pas deux implémentations parallèles**.

**Statut : D / PREFERRED SDK LOCAL DESIGN + REPORTING REQUIREMENT DOCUMENTED — NOT ARCHITECTURE-VALIDATED, NOT IMPLEMENTED, NOT BEHAVIOR PROVEN, NOT ADOPTED.**

## 18.2. Sources de référence et état actuel vérifié

**Git Next vérifié** : `main@997897fd7cf914771e7d08e8030dc7123fab7d25`, décision Morris du 07/11 sur ML4 Git natif et ML5 Cursor, SEF v0.2, contrat fonctionnel ML5 v0.3 et présent document candidate. Sur main :
- `web/src/domains/execution/types.ts` limite `EffectKind` à `GIT_PUBLICATION | GIT_MERGE` ; **pas d'effet `CURSOR_EXECUTION` implémenté** ;
- `web/src/db/schema.ts` expose `effect_attempts` (attempt, `correlationKey`, `fingerprint`, D6, plan/result JSON) et `observed_git_facts` avec `attemptId` ; **aucun support de rapport Cursor par tentative prouvé** ;
- `web/src/domains/execution/effect-authority.ts` revalide les mandats D6 Git et droits au point d'effet ; pas de mandat Cursor applicable déjà implémenté ;
- `web/src/domains/proofs/qualify.ts` refuse de déduire tests PASS, conformité, acceptation ou ADOPTED d'un commit/PR/merge : comportement à maintenir dans D8 ;
- D7 Git et ses claims/leases sont une **base de gouvernance**, non une implémentation réutilisable sans étude de reprise pour un agent local de longue durée.

**SFIA v2.6, processus externe** — `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §2.1 et `prompts/templates/sfia-cycle-execution-template.md` §§7.0–7.11 : **tout cycle Cursor avec rapport** exige un Review Pack **Light ou Full**, puis un **handoff `publish-in-cycle`** mono-cycle via la branche `sfia/review-handoff`, au chemin `sfia-review-handoff/latest-chatgpt-review.md`, avec commit mono-fichier, push FF et relecture distante. L'exception `local-only` est technique et explicite ; **synthèse seule = incomplet**. Ce mécanisme externe reste applicable à nos cycles ChatGPT↔Cursor actuels **tant qu'il n'est pas officiellement remplacé**.

**Documentation officielle Cursor consultée (23/11/2026)** :
- [Cursor TypeScript SDK](https://cursor.com/docs/sdk/typescript) et [annonce SDK, 29/04/2026](https://cursor.com/changelog/sdk-release) : `@cursor/sdk`, `Agent.create({local:{cwd}})`, `agent.send()`, `run.stream()`, `run.wait()`, `Agent.resume()`, runs/événements et store local.
- Le runtime local exige Node **22.13+** selon la documentation consultée ; le SDK peut conserver checkpoints et événements dans un store local, **distinct** de l'état D7 de Studio.
- En mode local headless, les outils shell/edit/write sont **autorisés automatiquement par défaut** ; les hooks pré-action et la sandbox sont des voies techniques à éprouver. **Le prompt n'est pas à lui seul une barrière de sécurité.**
- Le SDK donne des **événements et résultats d'agent**, **pas la preuve qu'un Review Pack métier complet est généré et transmis automatiquement à Studio**. Le contrat et l'ingestion ci-dessous sont donc **à construire et prouver**.
- Ces capacités documentées ne prouvent pas l'installation effective du SDK, son entitlement, son comportement avec Next, sa facturation ou les garanties runtime de reprise. **Git local/worktree/staged = NON OBSERVÉ**.

## 18.3. Trajectoire cohérente DEV → production — même contrat, lieu différent

| Dimension | Aujourd'hui — DEV | Cible production — serveur secondaire |
| --- | --- | --- |
| Pilote | Poste Morris et navigateur Studio local | Poste personnel avec URL Studio DNS/HTTPS |
| Studio / D6-D7-D8 | Application locale | Application serveur authentifiée, non exposer D7/CLI directement sur Internet |
| Cursor SDK agent | Runtime local travaillant dans un dépôt de DEV **autorisé** | Runtime local travaillant dans un espace de travail isolé sur le serveur |
| Git | Dépôt local / GitHub selon mandat | Dépôt de travail isolé / GitHub selon mandat et acteur technique |
| Rapport | Remis au D7 du Studio local, lecture protégée | Remis au D7 du Studio serveur, même modèle d'artefact et contrôles |
| Accès et stockage | Secrets, state SDK et rapports séparés du dépôt projet | Séparation des comptes système, volumes, secrets et permissions, sauvegarde/rétention |
| Validation | Tests déterministes puis LIVE borné | Tests serveur, BROWSER/REAL et sécurité avant exposition |

**Principe :** ne pas confondre une instance de Cursor Desktop graphique et un SDK headless. Le SDK n'exige pas une fenêtre Desktop ouverte, et une session SDK ne doit pas être présumée identique au chat Desktop historique de Morris. Les modèles sont servis par Cursor, même si la boucle d'agent et les outils tournent localement.

**Architecture candidate :** un **adaptateur Cursor du propriétaire D7**, avec un exécuteur local supervisé **dont le processus et l'espace Git sont bornés**. La topologie concrète (worker indépendant vs intégration contrôlée à Next) reste ouverte ; le besoin d'exécutions longues, de redémarrage, d'isolation et de reprise devra orienter la décision, sans construire un orchestrateur global concurrent.

## 18.4. Chaîne d'information complète, du contrat à l'avis Nora

`Intention Pilote → investigation Nora A/B → contrat canonique D7 versionné/inspecté → D6 HumanDecision et clic Exécuter → recontrôle D7 → tentative Cursor SDK locale → observations C et résultats de travail → **rapport Cursor rattaché à la tentative** → ingestion/validation D7 → faits et vérifications D8/D9 → dossier de résultats → **synthèse/avis Nora sourcé** → discussion et éventuelle nouvelle décision du Pilote`.

**Invariants d'autorité :**
- Nora **prépare, éclaire, synthétise et recommande** ; son analyse et les phrases Cursor ne sont pas des droits de mutation ou une décision Morris.
- D6 possède **l'autorisation de la version inspectée**, sa portée, ses restrictions, sa validité, sa révocation. Les accès système/Git/Cursor sont des **permissions techniques distinctes**, qui ne créent pas une autorisation métier.
- D7 possède **une tentative et son état** : dispatch, identifiants SDK, contrôle de concurrence, STOP, réconciliation, réception du rapport. D7 **n'émet pas** seul un verdict de conformité D8.
- D8 qualifie les **écarts contrat ↔ rapport ↔ preuves indépendantes** ; une réussite déclarée par Cursor n'est ni un test réalisé vérifié, ni une acceptation par Morris.
- D9 donne l'état Git effectivement observé, y compris fichiers non commités, commits, branche, ref et PR selon permissions disponibles. **Push, PR et merge ne sont pas autorisés par l'existence du SDK ni du rapport.**

## 18.5. Rapport d'exécution : artefact de première classe, un par tentative

**Exigence validée fonctionnellement par Morris :** une tentative Cursor destinée à un travail technique doit prévoir la **production et la transmission du rapport à Studio dans le même contrat d'intervention**. Le rapport est l'entrée principale de revue de Nora, mais **jamais son unique preuve**.

Le concept est **un artefact immuable, versionné par tentative et retrouvable**, **pas** un chemin partagé `latest` écrasé à chaque nouvelle intervention :
- Identité : `projectId`, contrat ID + révision/empreinte **des octets exacts inspectés**, mandat D6, `attemptId`, `agentId/runId` si renvoyés, environnement, identité Cursor et date UTC effective.
- Cible Git : dépôt, branche/ref et SHA de départ ; HEAD et statut au terme de la tentative, avec statut **observé vs déclaré** et identification des changements non commités.
- Synthèse factuelle des tâches réalisées et **liste des tâches non effectuées**, des modifications hors périmètre constatées, des STOP, blocages, dérives et dettes introduites ou maintenues.
- **Git Review Index / contenu exploitable** : chemins créés/modifiés/supprimés, diff name-status/stat ; contenu complet d'un fichier texte créé ou référence **immuable et effectivement accessible à D8/Nora** ; sections modifiées complètes ou diff utile complet ; pour gros/binaire, taille/empreinte/extrait ou preuve de consultation adaptée. **Liste ou résumé seuls insuffisants**.
- Tests/contrôles : commandes autorisées réellement lancées, versions/environnement, heure, exit code, résultats, logs pertinents bornés, tests non exécutés et motif ; **aucun PASS inventé**. Les logs déclaratifs restent distingués des sorties capturées par le propriétaire.
- Écart au contrat : exigences satisfaites, partielles, non démontrées, refusées ou abandonnées ; restrictions et résultats sous conditions ; traces de relecture réelle des références Git lorsque demandées.
- Réserves, suites recommandées, besoin d'un nouvel arbitrage Morris et tout dépassement de mandat.
- Couverture/provenance du rapport : source d'observation, fragments manquants/tronqués, empreinte calculée à la réception, date, statut d'intégrité et niveau de preuve.

**Proportionnalité :** rapport compact pour un travail simple, détaillé pour un macro-lot à fort impact ; jamais de « rapport complet » sur un seul paragraphe de synthèse sans contenu contrôlable. Réutiliser les exigences de **Light/Full** comme **référence de qualité**, sans imposer automatiquement les noms de fichiers, le fichier temporaire ou la publication handoff externe dans le produit. **Le rapport de fin est adaptatif, l'inventaire de couverture est systématique ; les publications intermédiaires ne déclenchent aucune revue Nora.**

**Différence essentielle** : `Run.status=completed` ou `run.wait().result` **n'équivaut pas** à « rapport conforme reçu et contrôlé ». Inversement, une interruption n'efface ni les fichiers ni les faits déjà observés.

## 18.6. Handoff Cursor → Studio : canal et intégrité (candidat)

**Séquence logique proposée, sans choix de stockage prématuré** :

1. **D7 prépare et fige** l'instruction exacte, sa révision et son empreinte, la cible Git, le mandat D6, les permissions et une identité de tentative persistée **avant** tout `Agent.send()`. Pas de nouvel ID après simple ACK perdu.
2. **D7 déclenche** la tentative Cursor locale sous environnement/branche de travail isolés et contrôles d'ownership ; conserve `agentId`, `runId` et états disponibles quand le fournisseur les expose.
3. **Cursor produit** un rapport exploitable comme **livrable explicite du contrat** (contexte, travaux, diffs, tests, réserves), y compris **sur STOP/échec si matériellement possible** ; les événements SDK alimentent l'observation, pas automatiquement la qualité du rapport.
4. **Canal de remise à qualifier** : résultat SDK structuré ou fichier/artefact borné dans une zone d'échange **appartenant à Studio**, hors dépôt de travail partagé, ou interface de remise explicitement autorisée. **Aucun chemin de disque, endpoint, bucket, table ou mode Git obligatoire n'est décidé.**
5. **D7 ingère et contrôle** l'identité de tentative/contrat, la taille, le schéma de présentation, les chemins, la complétude, les secrets/injections, l'empreinte de contenu, les références et les droits. Les contenus Cursor sont **non fiables** et n'autorisent aucune action. Le rapport reçu est lié **une seule fois à la bonne tentative** ; toute nouvelle version doit rester traçable, pas écraser silencieusement un rapport déjà reçu.
6. **Studio recoupe** les modifications par Git local/remote et autres preuves accessibles ; D8 conserve ses propres états et verdicts. Les divergences, preuves non lisibles, champs manquants et pertes d'ACK sont explicites.
7. **Nora reçoit par les droits du projet** le rapport, son statut de complétude, le contrat original, les faits D8 et les sources pertinentes. Elle produit une analyse bornée, puis le Pilote choisit la suite.

**Transport du handoff à requalifier : Git est désormais la voie nominale privilégiée**, lorsque le rapport et ses pièces peuvent être publiés sans secret ni volume inadapté, **sur la branche de travail distante de l'intervention** sous mandat explicite. Un stockage d'artefacts Studio à références vérifiables complète Git pour les fichiers non adaptés. **Ne pas réutiliser** la branche `sfia/review-handoff` ni le fichier partagé `sfia-review-handoff/latest-chatgpt-review.md` : ils appartiennent **au processus externe SFIA v2.6**, non à l'historique multi-tentatives du produit. Cette évolution candidate du transport ne dispense pas de l'ingestion/qualification D7/D8 ni des vérifications de HEAD/SHA.

**Blocage d'ingestion** : rapport absent, émis pour un autre `attemptId`, source inaccessible, contenu tronqué sans réserve, sections/diffs manquants, secret non traité ou empreinte incohérente → **REPORT MISSING / INCOMPLETE / UNVERIFIED / REJECTED**, catégories conceptuelles **non normatives**. D7 conserve la tentative et son état réel ; D8 ne reçoit aucun « conforme » induit ; Nora explique les limites. **Aucun retry d'exécution Cursor pour fabriquer le rapport**.

## 18.7. Trois niveaux distincts : rapport, observation et verdict

| Niveau | Propriétaire / provenance | Ce qu'il permet de dire |
| --- | --- | --- |
| **1 — Rapport Cursor reçu** | Cursor, capturé et lié à la tentative par D7 | « Cursor déclare avoir modifié X, lancé Y, rencontré Z » ; avec contenu exploitable si disponible |
| **2 — Observations vérifiables de Studio** | Journal D7, lectures Git D9, sorties de tests capturées, références/sha et droits | « Ce commit/ces fichiers/ces commandes ont été observés sur ce périmètre » |
| **3 — Qualification D8 et synthèse Nora** | D8 juge la qualité de preuves ; Nora confronte besoins, mandat, rapport et faits | « Conforme/partiel/non démontré sur ce périmètre », avis argumenté, réserves, suite proposée |

**Aucun raccourci** : `rapport Cursor complet` ≠ `tests PASS indépendamment prouvés` ≠ `conformité D8` ≠ `acceptation Pilote` ≠ `ADOPTED`. L'absence de rapport ne signifie pas absence d'exécution : un bilan **partiel et explicite** peut être produit à partir des faits indépendants, mais **aucune synthèse favorable exhaustive** n'est autorisée sans couverture suffisante.

## 18.8. Présentation Exécution / Résultats / dialogue Nora

**Exécution** (propriétaire D7) :
- Fiche par intervention et tentative ; contrat/version/empreinte, statut de lancement, agent/run quand connus, environnement, **états LIVE sobres** et état du rapport : **attendu, reçu, incomplet, indisponible, vérification en cours**.
- Pendant le run : uniquement statut et dernière activité fonctionnelle observable, erreur/attente et publication confirmée si utile ; **pas de revue Nora ni bilan D8 répété à chaque événement/commit**.
- Distinguer `STOP demandé` de `arrêt confirmé`, `lancement demandé` de `prise en charge observée`, `rapport reçu` de `bilan qualifié`.

**Résultats & preuves** (D8) :
- Lecture du rapport et de ses sections/modifications accessibles, puis des faits vérifiés, anomalies et verdicts de couverture ; liens vers contrat exact, intervention, Git et preuves. Présentation conforme au parcours fonctionnel prévu **sans transformer le rapport en espace d'autorité**.

**Nora** (D3) :
- Peut consulter le dossier D8 et le rapport autorisés, puis produire une synthèse **favorable/réservée/défavorable/indéterminée** avec justification, sans convertir son propre avis en décision. Le bouton **« En discuter avec Nora »** conserve la référence du bilan et n'envoie aucun message automatiquement (contrat fonctionnel ML5).
- Une correction proposée après rapport non conforme reste une **nouvelle proposition/brouillon** ; toute nouvelle tentative Cursor exige **nouveau contrat applicable et acte Exécuter explicite** hors corrections internes autorisées dans la même tentative.

## 18.9. Reprise, erreurs, doublons et effets partiels

- **ACK perdu pendant dispatch** : chercher et réconcilier la tentative / l'agent / le run existants ; ne pas envoyer de nouveau prompt arbitrairement.
- **Redémarrage du processus Cursor local** : `Agent.resume()` et store local sont **des moyens possibles de rattachement**, mais **pas** une preuve que la commande précédente n'a pas modifié Git. Revalider les effets et le mandat, gérer les sessions concurrentes, puis seulement reprendre si les garanties existent.
- **SDK auto-retry** : `enableAgentRetries` est documenté ; son comportement exact et les garanties de non-duplication d'effets doivent être étudiés, pas présumés sûrs.
- **STOP/annulation** : ordre d'arrêt ≠ arrêt constaté, kill ≠ rollback, fichiers non committés et push éventuel restent à inspecter.
- **Crash avant rapport** : état/report **MISSING ou UNKNOWN** et conservation de toute observation indépendante ; ne pas produire un faux rapport final depuis une réponse modèle libre.
- **Rapport incomplet** : signaler contenu manquant, rattacher les références accessibles, permettre une revue limitée ; aucun état READY fictif.
- **Deux tentatives d'une même intervention** : rapports **distincts et immuables**, références au contrat et à la tentative d'origine ; ne jamais écraser le rapport précédent avec un `latest`.
- **Secrets et contenu hostile** : limiter et analyser ce qui est transmis, scoper les URLs/paths, ne jamais exécuter des instructions issues du rapport. Sauvegarde/rétention des artefacts et identité du lecteur à arbitrer.

## 18.10. Contrat de preuves futur — SDK, rapport et revue

| ID | Scénario | Preuve de sortie demandée |
| --- | --- | --- |
| **D-CUR-01** | Node/SDK/entitlement réel sur le poste local | Import `@cursor/sdk` et run LIVE à périmètre borné ; version/coût relevés |
| **D-CUR-02** | Agent local vs serveur secondaire | Même contrat D7/rapport, différence d'implantation seulement ; isolation démontrée |
| **D-CUR-03** | Contrat versionné, double clic Exécuter | Une seule tentative sous mandat D6 applicable ; empreinte comparée |
| **D-CUR-04** | Ref/base Git ou droits modifiés avant exécution | STOP/requalification, pas d'effet |
| **D-CUR-05** | Tentative avec fichiers créés/modifiés | Rapport complet avec **contenu créé, sections modifiées/diff exploitable**, faits Git et références |
| **D-CUR-06** | Test annoncé non exécuté | D8 refuse de le déclarer PASS ; Nora conserve la réserve |
| **D-CUR-07** | Retour Cursor résumé-only | `REPORT INCOMPLETE`, aucune revue favorable exhaustive |
| **D-CUR-08** | Rapport reçu avec mauvais contrat/attempt | Rejet ou quarantaine ; aucune contamination du bilan d'une autre tentative |
| **D-CUR-09** | Rapport correct en contenu mais empreinte/secret non conforme | Intégrité non vérifiée ou rejet, aucune promotion |
| **D-CUR-10** | Crash ou timeout avant rapport | Tentative/effets éventuellement partiels, rapport absent explicite ; pas d'invention |
| **D-CUR-11** | Rapport et Git contradictoires | Écart D8 documenté ; Nora ne choisit pas automatiquement la version flatteuse |
| **D-CUR-12** | ACK perdu après lancement | Relecture agent/run/état Git sans second dispatch aveugle |
| **D-CUR-13** | STOP demandé et effet Git déjà produit | Arrêt/non-arrêt et effets Git distingués, sans rollback fictif |
| **D-CUR-14** | Deux interventions/tentatives simultanées | Identités, workspaces, permissions et rapports isolés |
| **D-CUR-15** | Rapport consultable après reconnexion | Même artefact immuable, par tentative, sous droits du Pilote |
| **D-CUR-16** | « En discuter avec Nora » depuis le bilan | Référence visible, pas de message envoyé au clic, analyse sourcée à l'envoi |
| **D-CUR-17** | Vérification locale / distant d'un commit/PR | SHA/état revalidés par D9, pas seulement revendiqués dans le rapport |
| **D-CUR-18** | Contrat SFIA v2.6 externe exécuté manuellement | Review Pack + handoff Git v2.6 inchangés ; pas de confusion avec le rapport Studio |
| **D-CUR-19** | SDK headless sans hook/sandbox | Refus de considérer le mode non borné comme sécurisé |
| **D-CUR-20** | Absence de rapport mais faits indépendants disponibles | D8 bilan limité avec lacunes, Nora avis indéterminé/réservé selon faits |

**Niveaux attendus à réaliser ultérieurement** : DETERMINISTIC pour identité, taille, empreinte et états ; INTEGRATION pour ingestion, droits, CAS, reprise et Git ; BROWSER pour affichage/retour Nora ; **LIVE SDK** pour le run réel, les hooks, le rapport et les événements ; **REAL borné** pour Git/push/PR selon GO distinct. Aucune de ces preuves n'a été produite ici.

## 18.11. Blast radius, dépendances et suite d'architecture D

**Blast radius prévisible** : D7 effects/types/claims, D6 décisions et contrôle au point d'effet, D9 connectivité et vérité Git locale/distance, D8 résultats/provenance/qualification, D3 outils de lecture des rapports, axe C affichage d'activité, Figma page 12 / Exécution / Résultats, authentification/permissions, process worker, SDK store, stockage d'artefacts, sécurité/logs, tests et documents as-built. **Le schéma de persistance peut nécessiter une extension structurante : aucune migration autorisée par cette contribution.**

**Dépendances/réserves avant GO technique** :
1. Choisir le mécanisme D7 de dispatch et d'ownership local avec arrêt contrôlé ; vérifier le comportement réel du SDK et les auto-retries ;
2. Définir le support fiable des rapports par tentative (taille, version, immutabilité, transport, rétention et reprise), en réutilisant D7/D8 autant que possible ;
3. Spécifier et tester les contrôles OS/Git/SDK (autorisation, sandbox, permissions et séparation DEV/production), sans permissions déduites du prompt ;
4. Arbitrer si le SDK et les garanties de disponibilité justifient un worker supervisé distinct de l'API Next ;
5. Unifier le parcours **rapport Cursor → vérification D8 → avis Nora** avec les checkpoints A, activités C et UX, sous une matrice d'acceptation **commune ML5** ;
6. Si le SDK échoue à un critère bloquant, examiner une alternative CLI/Cloud ciblée, sans implémenter plusieurs backends d'exécution en parallèle.

**Verdict : DIRECTION SDK LOCAL + CURSOR REPORT HANDOFF TO STUDIO DOCUMENTED / MORRIS CONTENT ORIENTATION RECORDED / TECHNICAL CONTRACT CANDIDATE — NOT IMPLEMENTED, NOT PROVEN, NOT ADOPTED.**

**Suite proposée** : qualifier le **dispatch D7**, le **contrat physique de rapport et d'ingestion**, puis la **réconciliation D8** en une architecture intégrée. La présente section formalise les exigences et les tests ; elle ne constitue **ni** un prompt Cursor **ni** un GO de construction **ni** un nouveau template SFIA v2.6.

## 18.12. Convergence du 23/11 — deux temps, partage Git et revue finale unique

> **Précision produit exprimée par Morris, inscrite en conception candidate sur sa demande.** **Deux temps seulement** : (1) **états LIVE de Cursor sobres et factuels** pendant l'exécution ; (2) **restitution complète, contrôle des références puis une analyse globale Nora** à la clôture ou après interruption. Les publications intermédiaires préservent la continuité et l'accessibilité, elles ne déclenchent **ni analyse cognitive coûteuse ni gate métier additionnel**. Cette précision prime sur les exemples exploratoires antérieurs évoquant une revue Nora au milieu d'une tentative.

### 18.12.1. Deux circuits techniques, une tentative D7

**Circuit A — état LIVE, fréquence proportionnée :** `@cursor/sdk` fournit des statuts/événements de run et des événements d'outil **à qualifier sur version réelle**. D7 conserve seulement les informations fonctionnelles utiles : tentative, date, séquence, provenance, type, statut observé/déclaré, dernière activité, erreur/attente/STOP, dernière publication Git confirmée. Le Pilote voit la situation en cours dans **Exécution**, pas un terminal intégral. Le streaming du fournisseur, son ordre, sa reconnexion et l'accès après crash sont à démontrer. **Perte de signal ≠ réussite, absence d'événement ≠ absence de travail, phase annoncée ≠ opération achevée.** Ne jamais exposer secrets, instructions internes ou chaîne de pensée.

**Circuit B — réalisations publiées, pas revues pendant le run :** avant le premier effet de code, D7 établit/vérifie une **branche distante d'intervention** et une base immuable, reliées au contrat et au mandat. Cursor travaille dans un workspace local Git isolé de cette branche, effectue des commits/pushes **à des points significatifs autorisés**, avec refs/SHA vérifiés. **Aucun commit par action, aucune analyse Nora automatique**, aucune PR/fusion implicite. D7/D9 enregistrent les publications comme faits et peuvent en contrôler les invariants techniques ; la revue qualitative est **différée au bilan final**.

**Enchaînement nominal :** préparation → inspection/GO D6 → vérification branche et préconditions → tentative SDK sous D7 → suivi d'états LIVE + publications Git bornées → fin/interruption → handoff de tentative + artefacts accessibles → vérifications D8/D9 → **une synthèse critique Nora** → éventuelle nouvelle décision Morris. **Nora travaille bien dans Studio pendant ce temps sur d'autres intentions**, sans mobiliser un évaluateur sur les événements Cursor.

### 18.12.2. Environnements et accessibilité du travail

**Développement** : Studio, exécuteur local SDK et dépôt sur le poste Morris. **Production visée** : Studio sur serveur secondaire accessible en HTTPS depuis le PC utilisateur ; SDK local et espaces Git sur le serveur, comptes et secrets isolés. Le contrat, le modèle de tentative, les références distantes et le handoff sont **identiques en sens métier** ; leur implantation évolue, pas la gouvernance.

**Git privilégié pour le partage** : code, documents, scripts, tests, manifestes, captures raisonnables et handoff sont consultables sur la **branche distante de travail**, idéalement par URL/référence fixée sur un commit plutôt qu'un nom mobile. La création/présence d'une branche seule ne publie **pas** le contenu local : D9 doit observer la synchronisation. Les fichiers binaires, volumineux ou sensibles peuvent nécessiter un **stockage d'artefacts séparé sous contrôle Studio**, pas un faux lien Git. En cas de crash entre modification et push, la fenêtre non publiée est **explicitement visible**, avec procédure de récupération isolée, sans inventer un état distant.

**Respect des gates Git** : autorisation bornée de création/actualisation de branche et de commits/pushes de travail **distincte d'une PR, fusion, publication de version ou adoption**. Pas d'accès Git déduit de la session Cursor ou de l'installation GitHub App Studio. Refus ou révocation du droit → STOP, réconciliation et conservation des faits, sans retry aveugle.

### 18.12.3. Handoff final : contenu libre par métier, couverture obligatoire

Un **rapport Markdown adapté à la mission** explique l'exécution ; un **manifeste conceptuel** rattaché à l'`attemptId` permet à Studio de vérifier automatiquement ce qui est mentionné et ce qui manque. Le format de fichier, le schéma et le stockage final **restent candidats**.

**Champs logiques minimaux :** contrat/empreinte et tentative, auteur/exécuteur et environnement, état final connu, Git dépôt/ref/base/tip et publications, objectifs réalisés/non réalisés, problèmes/STOP, sources principales lues et leur rôle, **fichiers créés/modifiés/déplacés/supprimés**, documentation et code, commandes et tests effectués/non effectués, résultats déclarés et preuves disponibles, captures et autres pièces pertinentes, écarts au contrat, réserves et suite requérant Morris. **Références vérifiables** : commit SHA, chemin, type, empreinte/taille si utile, capacité de lecture du contenu par D8/Nora.

**Politique de contenu :** pour les fichiers texte publiés, fournir des refs Git **effectivement consultables** et les diffs/sections significatives ; pour fichiers non accessibles au Git autorisé, inclure le texte utile dans le handoff si sûr ou constater l'indisponibilité ; pour captures de recette/maquette Figma, conserver la capture runtime **originale**, la frame/version de référence et le contexte de viewport. **Une synthèse de trois lignes ou une liste de chemins sans accès réel est incomplète.**

**Remise candidate privilégiée :** rapport et manifeste **à emplacement propre à l'intervention/tentative sur sa branche distante**, avec SHA immuable ; pas de `latest` global. Studio récupère via D9 après push et relecture distante (ou via canal direct fiable si plus adapté) puis consolide les preuves. Le SDK peut transmettre son résultat texte et événements ; **il n'est pas supposé transférer automatiquement un Review Pack, des PNG ni d'autres pièces**. Le mécanisme SFIA v2.6 externe de publication `sfia/review-handoff` reste intact, distinct de ce circuit produit.

### 18.12.4. Contrôle final déterministe, une seule revue Nora

**Au moment de la clôture ou interruption**, D7 fige les dernières références et la provenance du rapport disponible ; D9 vérifie **HEAD distant / commit / arbres / chemins / statuts**, et D8 contrôle **couverture des créations, modifications et suppressions par rapport aux effets Git observés**, accès aux contenus et captures attendus, résultats de tests capturés, incohérences d'autorité et insuffisances documentées. Un contrôle automatique d'intégrité/références **n'est pas une revue sémantique répétée**.

Quand ce dossier final est constitué, **Nora réalise une analyse globale unique et sourcée**, avec avis *favorable / réservé / défavorable / indéterminé* et zones non démontrées ; le Pilote décide de toute suite relevant de D6. En cas de **crash, fin ambiguë ou handoff absent**, Studio conserve les derniers faits LIVE/Git, fournit un constat partiel correctement étiqueté et sollicite une revue bornée quand l'état le permet ; **jamais de faux succès, ni relance Cursor automatique pour générer le rapport**.

**La vérité des traces est bornée par leur collecte.** Studio ne peut pas prouver exhaustivement chaque lecture ou effet privé de l'agent si le SDK ne l'expose pas ; le handoff dresse l'inventaire déclaré et D8 contrôle ce qui est observable. Une prétention à « tout a été vérifié » exige une couverture effectivement démontrée, pas une supposition.

### 18.12.5. Interfaces, arbitrages restants et exit

**Propriétés maintenues** : D3 Nora analyse ; D6 Morris mandate et valide ; **D7 seul orchestrateur** de la tentative et du journal ; D9 vérifie Git ; D8 qualifie les preuves ; axe C fournit une **projection fonctionnelle** et n'ajoute aucun moteur d'exécution Cursor.

**Questions techniques ouvertes, à traiter dans l'axe D sans multiplier les sous-chantiers :** matrice exacte des événements/erreurs `@cursor/sdk`, fréquence/transport de l'activité, supervision process/reprise, isolation Git et permissions techniques, stockage et autorité du manifeste, poids/sûreté des captures, lecture multimodale Nora, critères de clôture quand état inconnu, et supervision d'un serveur de recette (localhost DEV vs URL HTTPS protégée en production). **Pas de dashboard FinOps Cursor dans Studio** : Morris supervise l'abonnement et l'usage via son compte Cursor ; seules les erreurs de quota affectant un run appartiennent au diagnostic.

**Preuves de sortie à obtenir après GO technique distinct** : un run SDK LIVE réussi, un run en échec, une interruption/crash, une reconnexion, une publication Git REAL bornée, une preuve UX avec capture vérifiable, un handoff incomplet, un contrôle de couverture D8, une revue finale Nora réellement fondée sur les artefacts et deux contrats successifs sur un même projet. DETERMINISTIC, BROWSER, LIVE et REAL **ne se remplacent pas**.

**Statut : orientation de parcours documentée à la demande Morris ; détails de mécanisme CANDIDATE, NON IMPLÉMENTÉS / NON PROUVÉS / NON ADOPTED, Gate C OPEN.**

## 18.13. Qualification technique candidate — SDK, états D7, Git, handoff et MCP

> **Complément du 23/11/2026** à l'axe D, cohérent avec le contrat fonctionnel v0.5. Sources fournisseur : [Cursor TypeScript SDK](https://cursor.com/docs/sdk/typescript) et [MCP Cursor](https://cursor.com/docs/mcp). **Documentation fournisseur ≠ comportement LIVE prouvé sur Next**. Aucun choix de table, schéma de migration, API ou technologie de transport adopté.

### 18.13.1. Capacités du SDK pertinentes pour la réalisation

**Session / reprise :** `Agent.create({local:{cwd}})` et `agent.send()` renvoient un `Run` ; `run.stream()`, `run.wait()`, `Agent.resume()`, `Agent.getRun()`, `Agent.cancelRun()` et un store local persistant (SQLite/JSONL/configurable) sont documentés. L'option `idempotencyKey` n'apporte **aucune preuve** de déduplication d'effets Git/MCP ; vérifier le run et les refs avant toute relance. Le store SDK reste une donnée fournisseur **distincte** du journal d'autorité D7 Studio.

**Observations :** événements `tool_call` avec enveloppe `call_id/name/status` (`running/completed/error`) et `task` disponibles. Les `args/result` et noms d'outils sont variables et parfois tronqués ; les parser de manière défensive. **Les événements `status` du stream sont documentés comme transitions Cloud** : ne pas les présumer pour les agents locaux ; confronter `Run.status`, les appels SDK et le superviseur local. Les événements `thinking` ne sont ni nécessaires à l'UX, ni diffusés au Pilote.

**Artefacts :** en local, `listArtifacts()` est documenté comme vide et `downloadArtifact()` non supporté. Les PNG, scripts, documents ou résultats de tests doivent donc être lus dans le workspace autorisé puis publiés en Git ou en stockage d'artefacts gouverné. `run.wait().result` ne devient pas automatiquement un Review Pack complet.

### 18.13.2. Une tentative D7, dimensions distinctes

| Dimension logique | Propriétaire | Informations requises |
| --- | --- | --- |
| **Cycle de tentative** | D7 | `attemptId`, Pilote/projet, contrat/fingerprint, mandat D6, cible Git, worker, `agentId/runId`, activité, terminal/error/STOP/UNKNOWN |
| **Remise de résultat** | D7 + Git D9 | Rapport attendu/reçu/incomplet/absent, manifestes, SHAs, accessibilité/empreinte des pièces |
| **Qualification finale** | D8, analyse Nora D3 | Critères, faits vérifiés, écarts, conclusion bornée et réserves ; aucun GO D6 ni adoption |

Les valeurs de cycle sont **qualifications conceptuelles**, pas un nouvel enum remplaçant `EffectAttemptStatus`. `finished` ≠ handoff reçu ; `STOP demandé` ≠ arrêt constaté ; commit accessible ≠ tests PASS ; rapport reçu ≠ preuve D8.

**Worker candidat** : superviseur local SDK **séparé de la requête HTTP** pour runs longs, sans deuxième propriétaire de tentative. Même modèle métier sur Mac DEV et serveur secondaire PROD. D7 persiste une identité et son mandat **avant** `send()`; une perte d'ACK déclenche **réconciliation et fencing**, pas un nouveau dispatch aveugle.

### 18.13.3. Événements LIVE : enveloppe et projection

**Enveloppe conceptuelle :** `attemptId`, `runId?`, `sequence` attribuée à réception, `observedAt`, `eventKind`, `state`, `provenance` (SDK/worker/D9), `summary` fonctionnel borné et `diagnosticRef?`. Ne pas confondre ordre des arrivées Studio et ordre garanti chez le fournisseur. Prévoir déduplication par identités réellement présentes (`call_id` et état lorsque disponibles), journal durable et lecture après reconnexion.

**Projection Exécution** : dernier statut connu, activité réellement observée, erreur/attente/STOP éventuel, dernier commit distant confirmé. Pas de progression chiffrée fictive, console d'outils brute ou analyse Nora automatique. Timeout ou absence d'événement → **état à vérifier**, avec interrogation worker/run et effets Git avant nouvelle action. Le transport de l'axe C est réutilisable ; D7 reste le propriétaire.

### 18.13.4. Publication Git : options et contrôles communs

**Préconditions** : branche distante de travail et base SHA vérifiées avant effet, permissions Git distinctes de l'identité Cursor, contrat D6 bornant les effets, workspace isolé, refus des cibles interdites. Cursor crée/modifie les fichiers et produit commits et preuves ; les pushes aux jalons significatifs doivent être **effectivement re-lus à distance**, sans revue Nora intermédiaire.

**Option A, push direct Cursor borné** : moins de médiation, mais le jeton/exécuteur peut dépasser un mandat si les permissions OS/Git sont trop larges. **Option B, publication gouvernée par D7/D9 depuis le travail Cursor** : meilleure possibilité de revalider cible, base, droits et contenu, mais nécessite un contrat d'intégration supplémentaire. **Option B privilégiée à l'étude, non arbitrée**, avec obligation de réutiliser D7/D9 existants et d'éviter un moteur Git parallèle. Toute mutation exige D6/permissions techniques effectives ; pas de PR/merge/force-push implicites. ACK perdu → relecture de branche/commits existants avant tout retry.

### 18.13.5. Rapport et manifeste : remise finale vérifiable

**Rapport Markdown adaptatif** : réalisé/non réalisé, sources lues, actions techniques, erreurs, tests, écarts, dettes et suites. **Manifeste obligatoire en couverture** : projet/contrat/attempt, ref/base, **SHA de travail**, commits, inventaire fichiers créés/modifiés/déplacés/supprimés, référents de sources, tests/commandes, captures Figma/application, pièces utiles, provenance, empreinte/accès et inconnues. Type et schéma physique non tranchés.

**Canal candidat** : handoff/manifestes/captures appropriés sur la **branche distante d'intervention** (identité de tentative propre), et stockage sous droits Studio pour pièces volumineuses ou sensibles. D9 lit la version Git par **SHA immuable** ; le texte inaccessible par référence est inclus dans le rapport seulement si autorisé/sûr, sinon déclaré manquant. La branche externe `sfia/review-handoff` et son unique `latest-chatgpt-review.md` restent réservés à **SFIA v2.6**, et non réutilisés dans le produit Next.

**Pas d'auto-référence Git circulaire** : distinguer `workSha` (dernier état des réalisations à examiner) et `handoffCommitSha` (SHA découvert après la publication du rapport). Deux commits peuvent faciliter ce découplage, sans en faire un format imposé. Ne pas publier secrets, dumps sensibles ni fichiers anormalement lourds sur Git.

**D8 en fin de tentative** : recouper diff réel base→`workSha`, références lisibles et fichiers/manifeste, captures originales et contexte Figma/viewport, résultats de tests réellement capturés vs déclarés, out-of-scope et restrictions. Un rapport absent ou tronqué → dossier **MISSING/PARTIAL** et revue Nora limitée **une seule fois après réconciliation**, jamais nouvelle exécution automatique destinée à fabriquer le handoff.

### 18.13.6. MCP et authentification — le même poste n'est pas le même environnement distant

**Sources MCP locales documentées** : `mcpServers` sur `Agent.create()` ou `agent.send()` ; `local.settingSources` doit inclure `"user"` (fichier `~/.cursor/mcp.json`), `"project"` (fichier `.cursor/mcp.json`) et/ou `"plugins"` selon sources voulues. **Sans settingSources, seuls les MCP déclarés inline sont chargés.** Un `mcpServers` fourni à `agent.send()` **remplace** celui donné à la création pour ce run (pas de fusion silencieuse). L'ordre de préséance est envoyé > création > plugins > projet > utilisateur pour les agents locaux.

**OAuth** : le SDK local ne sait **pas ouvrir une fenêtre de connexion**, mais peut réutiliser un login MCP déjà établi dans Cursor Desktop sur le même environnement/compte effectif. **DEV Mac** : réutilisation des configurations et sessions Cursor **possible sous préflight réel**. **PROD serveur secondaire** : fichiers, dépendances `stdio`, identité OS, secrets et OAuth du Mac **non hérités** ; configurer/autoriser chaque MCP requis sur ce serveur, sans recopier des jetons personnels ou supposer le fonctionnement d'une UI Desktop. Les MCP configurés sur le dashboard Cloud ne sont pas automatiquement chargés par le SDK local.

**Autorité et sécurité** : `settingSources:["user","project"]` peut faire entrer des MCP non souhaités, et une configuration projet `stdio` peut lancer un exécutable. Établir une **allowlist de capacités par intervention**, sous contrôle d'environnement et des permissions ; ne pas considérer le prompt ou la liste déclarative comme barrière technique. Lecture de frame Figma ne vaut pas autorisation d'écriture Figma ; même vigilance Canva ou tout MCP de mutation. D6 autorise l'effet ; le préflight vérifie disponibilité réelle et droits ; les lectures/mutations déterminantes figurent au rapport avec provenance. Pas de moteur MCP Studio parallèle par défaut.

### 18.13.7. Risques, preuve à obtenir et décision suivante

**Blast radius** : D7 effects/types, ownership et journal, D6 mandat au point d'effet, D9 Git/branches/identité, D8 preuve/artefacts, D3 lecture multimodale et synthèse, transport activité C, worker local, DB, secrets/MCP, Exécution/Résultats et infra DEV/PROD. Chaque modification devra synchroniser architecture/code/tests dans le macro-lot, **pas de micro-cycle documentaire**.

**Vérifications d'intégration sous GO technique distinct, conditionnées par la mission** : socle : import SDK LIVE, événements normaux/erreur/annulation, crash, reconnexion et ACK perdu sans doublon, remise finale, couverture D8 et revue Nora. **Mission Git uniquement** : branche, base, permissions, push GitHub REAL borné, SHA distants et continuité entre contrats. **Mission MCP uniquement** : outils nécessaires réellement disponibles, authentification et permissions compatibles avec le mandat, refus effectif des mutations hors autorisation ; Figma/Canva sont à qualifier seulement si requis. **Mission UX concernée** : captures, sources Figma et preuves navigateur consultables. Pas de gestionnaire MCP Studio universel ; DETERMINISTIC, BROWSER, LIVE et REAL restent distincts.

**Statut : DESIGN CONTRACTS DOCUMENTED / SDK LOCAL PREFERRED / MCP SUPPORT DOCUMENTED / IMPLEMENTATION AND BEHAVIOR NOT PROVEN / NO ARCHITECTURE ADOPTED / GATE C OPEN.**

## 18.14. Recentrage de l'intégration Cursor et enseignements de la qualification SDK

**Date :** 23 novembre 2026  
**Statut :** conception technique candidate validée en contenu par Morris ; complément aux §§18.1–18.13 ; NOT MERGED  
**Preuve de référence :** [Review Handoff L3 au commit bacee519](https://github.com/mcleland147/sfia-workspace/blob/bacee519a4639114bf80775abf8197f0fe346128/sfia-review-handoff/latest-chatgpt-review.md), blob \`fbea7f6a036ce4d4d59e1082ae9724cb3e0aac62\`.

### 18.14.1. Frontière d'architecture retenue pour la préparation

SFIA Studio Next doit prendre en charge le transfert automatique d'une instruction technique gouvernée vers Cursor SDK, puis la récupération des observations et réalisations nécessaires à la continuité et à la revue finale.

Cursor conserve son environnement d'exécution, ses configurations locales, ses MCP, ses authentifications et ses moyens d'administration.

Cursor Desktop peut être installé et rester ouvert, sur le Mac de développement ou sur le futur serveur. Son ouverture permanente n'est ni interdite ni exigée par le contrat Studio.

La communication avec Cursor SDK reste une intégration technique distincte de l'interface Desktop. Le fonctionnement des approbations et des sessions partagées ne peut pas être inféré de la seule présence de Desktop.

**Conséquence :** aucun service généraliste d'administration Cursor ou de gestion MCP n'entre par défaut dans le périmètre ML5.

### 18.14.2. Contrat minimal de transmission et de retour

Réutiliser le propriétaire D7 déjà présent dans Next, sans introduire de second moteur d'effets.

Le lancement doit associer :

- l'identité du Pilote et du projet ;
- le contrat inspecté, sa version et son empreinte ;
- le mandat D6 applicable ;
- l'instruction exacte transmise au SDK ;
- l'identité unique de tentative ;
- l'environnement et le workspace cibles ;
- les identifiants SDK observés ;
- les références Git applicables, lorsque la mission porte sur un dépôt.

D7 conserve l'identité et les conditions de tentative avant le dispatch. Un défaut de réponse, une fermeture du navigateur ou une perte d'ACK impose une réconciliation avant tout nouveau lancement.

L'exécution longue peut requérir un processus supervisé indépendant de la requête HTTP. Ce mécanisme est un détail d'exécution à qualifier, non un second propriétaire de tentative.

Le store SDK conserve les informations du fournisseur. Le journal D7 conserve la vérité métier des tentatives et de leurs autorisations.

### 18.14.3. MCP : administration externe, disponibilité vérifiée

La configuration initiale des MCP peut être effectuée manuellement par Morris dans l'environnement Cursor.

Le SDK peut réutiliser des configurations et authentifications compatibles, mais leur chargement réel doit être contrôlé. Le Mac et le futur serveur possèdent leurs propres identités OS, dépendances, configurations et sessions.

Le préflight de mission distingue : outil configuré ; outil chargé et joignable par le SDK ; authentification effective ; capacité requise réellement invocable ; permission compatible avec le mandat.

Une connexion au fournisseur ne prouve pas qu'une action précise sera autorisée par les mécanismes de sécurité du SDK.

**Politique d'architecture candidate :** privilégier les permissions et outils existants, bornés au besoin, avant de créer un nouveau mécanisme d'approbation. Ne pas assimiler une désactivation globale de sandbox à une solution satisfaisante.

Lorsqu'une mission exige Figma, Canva ou un autre MCP, la qualification de cet outil est nécessaire pour cette mission. Aucune obligation universelle de configurer ou tester tous les MCP dans le macro-lot.

### 18.14.4. Preuves SDK obtenues le 23 novembre 2026

La campagne \`ML5 C9\` s'est déroulée en sandbox locale isolée sur macOS ARM64 : \`@cursor/sdk\` \`1.4.2\`, Node.js \`v24.16.0\`, modèle \`composer-2.5\`, store JSONL isolé ; verdict **PASS WITH RESERVES**.

- **Run LIVE :** création, envoi, streaming, attente et terminaison ; fichier témoin identifié.
- **Événements :** 22 événements rapportés, dont 2 \`status\`, 3 \`tool_call\` et 10 \`thinking\`. Contrairement à la seule hypothèse documentaire antérieure, des événements \`status\` ont été rapportés sur cet agent local dans cette version du SDK. Leur portée exacte et la projection filtrée nécessitent un contrôle à l'intégration.
- **Reprise :** même identité d'agent retrouvée après redémarrage du processus, nouveau run distinct, fichier témoin préservé. Ce résultat ne prouve pas la récupération d'un run interrompu brutalement en cours d'effet ni la résolution d'une perte d'ACK.
- **Annulation :** terminal \`cancelled\` observé ; pas de garantie de rollback des effets déjà produits.
- **Git :** commits, push vers remote bare local, relecture du SHA et refus de push divergent. Aucun push GitHub REAL démontré.
- **MCP :** appels de contrôle réussis via \`customTools\` et MCP stdio dans une configuration autorisée ; découverte Penpot utilisateur. Figma/Canva non testés en usage réel. Un MCP stdio sous sandbox a rencontré une approbation interactive non satisfaite en mode headless.
- **Handoff :** rapport et manifeste expérimentaux produits, omission volontaire détectée par contrôle de couverture. Le contenu intégral des scripts et pièces locales n'était pas entièrement accessible pour revue Git indépendante.

Cette campagne confirme une faisabilité partielle du SDK local ; elle ne démontre ni intégration D7 de Next, ni sécurité MCP de production, ni GitHub REAL, ni comportement bout en bout de Nora.

### 18.14.5. Git : réutilisation avant construction supplémentaire

Deux options demeurent ouvertes :

- **A — Git direct dans Cursor**, techniquement limité par ses droits effectifs.
- **B — Cursor réalise les fichiers, publication contrôlée sous D7/D9.**

La campagne recommande B, mais cette préférence ne constitue pas une architecture adoptée.

La qualification suivante doit examiner comment réutiliser les opérations Git gouvernées déjà présentes dans Next. Un composant distinct de publication n'est justifié que si une responsabilité technique indispensable ne peut pas être satisfaite par l'existant. Les missions sans mutation Git ne doivent pas être forcées dans un parcours de publication artificiel.

Pour les missions modifiant un dépôt, conserver les invariants de branche, base SHA, publication bornée, relecture distante et continuité entre contrats, sans PR/merge implicites.

### 18.14.6. Revue finale et récupération des productions

À la terminaison ou après réconciliation d'une interruption :

1. D7 retrouve identités, états, observations et références de tentative.
2. D9 vérifie les faits Git réels lorsque Git est concerné.
3. D8 confronte inventaire, modifications, artefacts accessibles, tests et limites.
4. Nora reçoit le dossier vérifié ou explicitement partiel et produit une seule analyse globale.

L'absence de rapport complet ne doit provoquer ni effacement des observations, ni répétition automatique de la mission.

Le handoff Studio demeure propre à chaque tentative ; il est distinct du Review Handoff externe SFIA v2.6.

### 18.14.7. Contrat d'acceptation intégré futur

Le premier parcours produit devra prouver, sans copier-coller :

- la fidélité entre instruction inspectée et instruction transmise ;
- l'absence de doublon après double clic ou réponse perdue ;
- une exécution Cursor SDK réellement lancée ;
- l'observation d'états LIVE factuels et filtrés ;
- la continuité après fermeture du navigateur ;
- la récupération de réalisations et références exactes ;
- la qualification des preuves et une analyse finale Nora ;
- l'absence d'effet Git ou MCP hors mandat ;
- la possibilité d'administrer Cursor séparément de Studio.

Les essais spécialisés GitHub REAL et MCP Figma/Canva sont déclenchés lorsqu'ils sont nécessaires à la capacité effectivement construite. Ils restent obligatoires avant de revendiquer le comportement réel correspondant, sans constituer un prérequis général à toute transmission de prompt.

### 18.14.8. Sortie de préparation et réserves gouvernées

La préparation des axes A, B, C et D peut être soumise à une revue globale de complétude, sans nouveau chantier de conception généraliste.

Réserves à transférer au futur delivery : disponibilité, reprise et atomicité D3 ; investigation web et événements disponibles ; transport/reconnexion activité ; dispatch D7, ACK perdu et crash ; confinement SDK/outils ; publication Git appropriée ; stockage et intégrité du handoff ; accès des preuves à D8 et Nora ; essais bout en bout, BROWSER et REAL.

Aucun sujet ne devient automatiquement un macro-lot préparatoire séparé. Décisions structurantes ou évolutions de persistance : gate Morris propre.

**Verdict : PREPARATION TECHNIQUE DOCUMENTED WITH GOVERNED GAPS — CANDIDATE / NOT IMPLEMENTED / NOT BEHAVIOR PROVEN / GATE C OPEN.**

## 18.14.9. Réconciliation UX de fin de préparation — contrat intégral et bilan D8

La page 12 Figma de Studio Next (`itgvCulInEnFY6DvgIegvP`) constitue une **source de conception UX**, pas une preuve runtime. La livraison future devra intégrer, dans les propriétaires existants :

- **D7** : six volets et version inspectable (12.02/12.05), ouverture de **12.14** pour lire la totalité de l'instruction technique fictive de référence, et correspondance réelle au dispatch. La lecture n'autorise pas de tentative et ne copie pas l'instruction dans Cursor.
- **D7 / activité** : 12.06 représente un run observé ; 12.07 un état incertain à réconcilier, sans nouveau dispatch automatique.
- **D8/D9** : 12.08 Synthèse, 12.11 Livrables et tests, 12.12 Git et pièces et 12.13 Écarts couvrent ensemble les **neuf rubriques D8 §8.2**, dont comparaison prévu/réalisé, impact projet, verdict borné, recommandation et sources. Les illustrations partagent une seule tentative fictive ; aucune réception D6 ou adoption n'en découle.
- **Dépendances conditionnelles** : Git/GitHub REAL pour les opérations sur dépôt, MCP pour les seules capacités requises, et captures/essais UX pour les missions concernées. N'ajouter ni publisher Git parallèle ni gestionnaire global MCP.
- **Gates de transposition** : extraction source Figma L0/L1/L2, oracle PNG natif/empreinte, navigation et défilement contractuels, puis assertions de conformité et captures BROWSER sur le produit effectivement construit.

**État : DOCUMENTED CANDIDATE / PREPARATION UX VALIDATED IN CONTENT / NO PRODUCT CODE / NO ADOPTED / GATE C OPEN.**

# 19. Arbitrages Morris validés le 23/11/2026 — Git direct Cursor et DEV BROWSER

**Statut : D2 VALIDATED IN CONTENT / GIT CANDIDATE / NOT MERGED / IMPLEMENTATION NOT PROVEN.** La décision [Git direct Cursor et auto-session DEV](https://github.com/mcleland147/sfia-workspace/blob/b411e3276e987e93627348de266e0b383419eab9/projects/sfia-studio-next/governance/decisions/2026-11-23-ml5-cursor-git-direct-et-session-dev-automatique.md) prime sur le choix A/B encore candidat aux §§18.13.4/18.14.5. Elle ne remplace pas le contrat de réalisation, les gates SFIA ou une preuve LIVE/REAL.

## 19.1. Option A — responsabilités et topologie cible

- **D3 Nora** prépare les sources et le contrat ; **D6** valide la portée, les opérations Git permises et les exceptions ; **D7** conserve la tentative, le dispatch et les états ; **Cursor SDK local** réalise les modifications, commits et pushes de branche autorisés ; **D9 Studio** lit et vérifie les refs distantes ; **D8** qualifie les pièces ; Nora analyse une fois à la fin.
- **Git direct dans Cursor**, authentifications/droits matériels administrés par Morris et distincts des permissions GitHub de Studio. Workspace isolé, branche distante dédiée, base SHA figée, préflight D7/D9 et vérification des droits effectifs avant mutation. Une instruction de prompt ne remplace jamais une barrière technique de permissions.
- **Contrôle avant et après publication :** mandat D6/version contractuelle, repo/branche/base SHA/protections, allowlist de chemins et effets si applicable, commit/push bornés ; relecture D9 de SHA/refs et inventaire distant après chaque publication significative. Ne pas certifier une publication à partir du seul stdout Cursor.
- **Continuité et reprise :** distinguer `workSha` local, commit(s) poussés et `remoteTipSha` re-lu ; un état local non publié reste marqué inaccessible à Studio ; ne pas repusher automatiquement après ACK perdu, révocation, crash ou ref divergente. Entre contrats, utiliser un SHA distant effectivement autorisé.
- **ML4 inchangé :** Studio conserve sa voie de publication documentaire gouvernée. L'implémentation ML5 n'étend pas ce publisher au code Cursor et n'introduit pas de second moteur D7/D9.
- **PR/merge et opérations à risque** sont techniquement réalisables par Cursor **seulement dans des contrats et décisions spécifiques** : aucun merge, force-push, release ou mutation par effet de bord d'un push de travail.

**Blast radius :** D7 contrat/attempt et préflight, D9 lecture/contrôle ref, Git workspace et permissions Cursor, D8 dossier de preuve, Exécution/Résultats et tests F01–F09. Toute évolution de schéma nécessaire doit rester proportionnée, documentée et soumise aux gates applicables. Aucun publisher Git code Studio.

## 19.2. Auto-session DEV — limite technique nécessaire

**But :** débloquer BROWSER/Figma F2 des frames 12.01–12.14 après un blocage sur `/login`, sans modifier l'authentification cible ni le contrôle HumanDecision.

- **Entrée DEV explicite et fail-closed** : mode de test configuré serveur, lane DEV vérifiée, base/sessions/secrets propres, **écoute loopback** ou exposition protégée équivalente démontrée. Ne se fier ni au paramètre navigateur ni au `Host`/à l'`Origin` déclarés par le client pour autoriser le bypass.
- **Pilote test stable et serveur-owned** : établir une session normale pour D1/D6/D7 ; pas de désactivation globale des contrôles ni d'usurpation par sélection de `pilotId` côté client. Tests multi-Pilotes avec deux identités fictives autorisées et contextes séparés.
- **RECETTE/STABLE non impactées** : login obligatoire, aucune configuration auto-session héritée, tests négatifs de fail-closed, absence de secrets dans Git, UI et handoff. Conserver une campagne login réel indépendante.
- **Limites d'effets** : session DEV ≠ autorisation SDK LIVE, WEB LIVE, MCP mutatif, GitHub REAL, push projet, PR/merge. Les portes D6/D7 et ENV-01 restent obligatoires.
- **Preuve attendue :** Playwright/BROWSER authentifié automatiquement sur DEV avec interactions fonctionnelles, captures runtime originales, comparaison L0/L1/L2 et F2, erreurs, reconnexion, auth négative et T-12 ; le test sur `/login` seul ne vaut pas preuve de parcours.

## 19.3. Impacts ML5 et conditions de sortie

Les exigences **F01–F09** doivent désormais être développées selon **l'option A**, tandis que Travail/activité Nora, B1 sécurisé, supervision D7, D8 G15, analyse cognitive finale et UX sont fermés progressivement dans le **même macro-lot**. Ne pas ouvrir de moteur ou de registre concurrent.

**GO présent : documentation D2 publiée sur branche candidate uniquement.** Pas de mutation du worktree de développement, activation LIVE/REAL, push code, PR, merge, changement RECETTE/STABLE, release ni ADOPTED.

**Verdict : ARCHITECTURAL ORIENTATION VALIDATED BY MORRIS IN CONTENT / CANDIDATE GIT / BEHAVIOR NOT PROVEN.**

# 20. R-004 — consolidation architecturale après C13 (24/11/2026)

**Statut : DOCUMENTED / CANDIDATE / NOT MERGED.** Arbitrage fonctionnel Morris de conduite sémantique validé en contenu : voir [contrat fonctionnel §21](../conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md). Les options physiques restent soumises aux gates applicables. Cette revue confirme la cohérence des responsabilités D3–D9 au niveau conception ; elle ne certifie pas exhaustivement le worktree local C3–C13, NON OBSERVÉ directement. Handoffs sources : [C5](https://github.com/mcleland147/sfia-workspace/blob/8199b1f01d9cee5f946d9f3f0837b4e00386e03c/sfia-review-handoff/latest-chatgpt-review.md), [C11](https://github.com/mcleland147/sfia-workspace/blob/f9dfcaaad90470e046d95a9d0a93115341a750d3/sfia-review-handoff/latest-chatgpt-review.md), [C12](https://github.com/mcleland147/sfia-workspace/blob/45311f75dad80e19f76ae09adfb1da387514531f/sfia-review-handoff/latest-chatgpt-review.md), [C13](https://github.com/mcleland147/sfia-workspace/blob/e3ed518b55ecda9430c862cda063052f94da8e7c/sfia-review-handoff/latest-chatgpt-review.md).

## 20.1. Axe A — écart de conduite cognitive à traiter en priorité

Le code reproduit dans les handoffs historiques expose notamment `detectsTechnicalContractIntent` / regex TECH_INTENT, `createEmptyInvestigation` et un profil dépendant de la longueur, `draftBodyFromInvestigation` avec assemblage et extrait de réponse borné à 1 500 caractères, critères par défaut « Handoff RECEIVED / Inventaire fichiers présent », `evaluateContractReadiness`, `investigation-persistence.ts` (snapshot dans projection_json). **Ce sont des observations historiques, à confirmer ou infirmer sur le code local actuel**, pas une affirmation que chaque ligne est encore présente.

**Cible :** conducteur D3 unique ; qualification sémantique IA contextualisée et sortie structurée validée, questions/sources/contraintes/contradictions et suffisance, instruction contractuelle complète et critères propres au besoin. Aucun routeur de mots-clés, regex ou longueur pour déterminer une intention, un mode cognitif ou un contrat, y compris en fallback. Recherche lexicale comme découverte seulement, parsing et garde-fous déterministes conservés. Réutiliser les composants D3/D4, journal et bridge existants lorsqu'ils satisfont le contrat ; ne pas ajouter un agent permanent concurrent. Inspecter également les appels indirects, chemins de secours, UI et tests qui pourraient imposer la même heuristique. Qualifier la fraîcheur et le rattachement du snapshot au bon travail, le fencing et la reprise avant tout effet. Refuser READY lorsque la couverture déterminante n'est pas établie, même si un modèle ou un client affirme la complétude ; source critique partielle/obsolète ou contradiction non résolue ne peut être masquée par une question marquée ANSWERED.

**Exit :** LIVE sur demande courte complexe, paraphrases, négations, discussion sans mandat, restriction tardive, sources contradictoires, source essentielle absente, deux travaux distincts et reprise ; contrat inspecté/transmis intégral et critères métier vérifiables. Tests déterministes des invariants et tests LIVE des décisions sémantiques ; pas de tests « mots attendus » en guise de compréhension.

## 20.2. Axe B — raccorder le fournisseur, pas inventer un moteur

Le code C5 de `public-web-search-frontier.ts` possède une branche LIVE refusée/non implémentée ; B09 demeure déclaré NOT_IMPL à C13. Préférence B1 §16 conservée : segment public isolé et minimal au sein de D3, fournisseur hébergé compatible avec les versions réellement installées, observations réintégrées dans A et C. Vérifier la séparation technique des données privées au point de sortie ; une variable, un prompt ou un filtre lexical seul ne suffisent pas. Préserver annotations/citations et distinguer découverte, ouverture, extrait, fraîcheur et couverture ; traiter l'injection comme donnée non fiable. Si aucune garantie d'isolation n'est établie, rester fail-closed. Ne pas construire un navigateur/crawler autonome. Le GO DEV LIVE déjà donné reste borné aux ressources DEV et à la recherche publique sûre, sans nouvelle mutation Git.

## 20.3. Axe C — conserver C1 et qualifier le comportement transverse

Les journaux de sources, projections et polling existants sont cohérents avec C1 ; C13 ajoute un journal D8. Vérifier la production d'événements pendant le RUNNING réel D3, sur sas/projet/documents, l'ordre, la reconnexion, l'isolation et la minimisation. Ne pas assimiler appels d'outils à nombre de sources lues, ni introduire SSE/WebSocket sans besoin mesuré. Preuve UI fonctionnelle minimale, sans gate F2 dans ce travail.

## 20.4. Axe D — terminer le raccordement autonome de restitution

C11/C12 prouvent des frontières réelles sur missions bornées, avec ingestion/qualification explicitement appelée par les scripts ; C13 prouve STOP LIVE et supervision in-process sans navigateur. La limite `REPORT_MUST_BE_INGESTED_SEPARATELY` et la production d'un handoff précoce C12 montrent qu'un chaînage produit autonome doit encore être vérifié localement et complété si absent. D7 observe terminal/interruption et attribue une remise à la tentative ; collecte/lecture de faits autorisés et rapport, D9 vérifie Git si applicable, D8 qualifie le dossier, D3 formule un avis global unique consultatif. Déclenchement métier idempotent, reprise sur terminal durable, rapport absent/partiel honnête, pièces tardives et historique ; pas de GET mutatif ni de relance Cursor. Ne pas confondre ce handoff produit et le Review Handoff SFIA externe.

**Sécurité et résilience à fermer :** D8 refuse les symlinks statiques (C13 12 unit + 8 PG) mais vérifier la substitution concurrente d'un répertoire intermédiaire et la lecture strictement bornée même si le fichier grossit ; aucun contenu hors périmètre ne doit être transmis à Nora. Vérifier la fraîcheur transactionnelle de qualification, le journal individuel et les références des pièces. Supervision D7 in-process avec reprise sur réconciliation : ne pas revendiquer redémarrage autonome du processus ; corriger la reprise au démarrage et la concurrence STOP/observation selon besoin démontré, sans moteur d'états/queue parallèle. ACK perdu déterministe, STOP LIVE observé, CANCEL ≠ rollback. Aucune publication Git code demandée ; option A reste cible pour les missions Git autorisées, MCP conditionnel.

## 20.5. Trajectoire et gates

1. Complétude A/B/C et D01–D02 : audit local, conduite sémantique, web isolé LIVE, activité et contrat ; corrections de sécurité bloquantes dès la frontière concernée.
2. Parcours D autonome : terminaison, remise, D8, Nora et continuité, reprendre les réserves sécurité/autorité/résilience utiles.
3. Qualification consolidée : missions représentatives, TypeScript/lint/build, tests domaines/PG/permissions et non-régression ; 99 exigences, CA/T/Q/PF et CP-01…08 conservés dans R-004. Git/MCP selon mission et mandat ; Figma F2 conservé pour recette UX, pas un critère de refus des livraisons fonctionnelles indépendantes.

Aucune nouvelle topologie, migration structurante, autorité ou adoption déduite. Code, tests, as-built et registre vivant doivent converger dans le même macro-lot. État : **ML5 ARCHITECTURAL ALIGNMENT CONFIRMED — FUNCTIONAL COMPLETION REQUIRED**, sans readiness environnement utilisateur ni autorisation de publication projet.

# 21. Revue approfondie de conformité post-C14 — écarts d'implémentation et convergence (24/11/2026)

**Consolidation documentaire validée par Morris comme base de travail, non adoption de topologie ou de choix physique.** [Revue approfondie intégrale, code et exits](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md), [registre courant](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md), [oracles d'acceptation](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md), [snapshot post-C14](https://github.com/mcleland147/sfia-workspace/blob/78f60e40f466b520ac0381d5d27e212bd2fa5695/sfia-review-handoff/latest-chatgpt-review.md). Source snapshot commit 78f60e40f466b520ac0381d5d27e212bd2fa5695, blob 01961de12b10dc1d8802a2ba24bc5095a51b4949 ; HEAD produit local rapporté 6cf33e99, 97 DIRTY, non publié. Les constats ci-dessous priment sur états préconstruction/R-004 historiques ; aucun GO C15, modification de SEF, ADR, persistance structurante ou publication code induite.

## 21.1. Axe A — un seul conducteur D3 adaptatif, pas une succession de runs sans continuité

Le snapshot confirme l'orientation sémantique mais pas la conduite complète : cognitive-policy.ts fixe analyse/medium, budgets de profil et maxTurns décroissants ; nora-adapter.ts lance un run borné sans réallocation/continuation consolidée ; mesure réelle tokens/coût/effort appliqué insuffisante. Schéma Zod et replyDraft bornés, contexte initial compact, D4 paginé mais lecture Git 8k initiale et WEB/D8 extraits bornés : risque de source critique inaccessible. Augmenter les quotas n'est pas une réponse d'architecture.

Reprendre §§15.3–15.12 et 20.1 : allocation initiale sémantique et révisable, réévaluation en cours d'investigation, continuation en segments dans un même travail, fenêtre de contexte et consolidation sourcée, checkpoint et reprise, sécurité/consommation propriétaire et arrêt honnête si impossibilité. Mesures réelles si exposées, distinguer maxTurns/appels/tokens/coût/temps, y compris segment public WEB ; pas de quota métier arbitraire ni de consommation infinie. Ne pas coupler la profondeur à Zod ni faire de replyDraft le contenant obligatoire du contrat/document. Séparer production cognitive des objets métier et validation structurée. Préserver une réponse simple proportionnée.

investigation-state.ts / nora-contract-bridge.ts / service.ts : questions/contraintes/contradictions essentiellement héritées, bridge surtout après génération et intent de contrat. Raccorder réellement au conducteur transverse ; questions déterminantes révisables, sélection sémantique des sources, renvois, couverture, faits/version et réouverture. tool-source-journal.ts déduplique kind/ref et privilégie rang fort sans mise à jour version ni dégradation ; distinguer observations versionnées et invalidation ciblée. Ne pas confondre état D3 avec mémoire/autorité D4. Snapshot par préparation, écriture JSON sans fence propre et reprise surtout après bridge : vérifier identité du travail, version, checkpoints intermédiaires, droits et sources lors de reprise ; réutiliser persistance existante si possible, décision structurante Morris sinon. Pas nouveau moteur cognitif ni nouvelle base par défaut.

P0 : evaluateContractReadiness peut transformer état vide/UNKNOWN/BUDGET_EXHAUSTED en SUFFICIENT par absence de bloqueur. Contrôle qualitatif positif sur questions indispensables/versions/autorité, garde-fou serveur fail-closed si source/restriction critique manque. READY et fingerprint liés à l'investigation et au contrat exact ; revalidation ciblée si changement matériel. Aucune heuristique lexicale décisionnelle, y compris contradiction, ni substitution par compteurs. Les indices de découverte/parsing/contrôles techniques restent légitimes. Contrat canonique conservé ; bridge tronque 24k/800 et 8 critères et fixe capacités/permissions/gitScope génériques : produire objet métier complet propre à la mission, assemblage déterministe réservé à forme et invariants. Exit A/B/C/D01–02 : cf. revue §§3–6 et lot 1.

## 21.2. Axe B — B1 réel, frontière et qualité de lecture à terminer

C14 : segment hébergé isolé query-only réel ; B09 présence IMPLEMENTED rapportée, conformité partielle. Chemin nominal n'alimente pas privateContextMarkers ; prompt/regex seuls ne constituent pas barrière de confidentialité. Contrôler données publiques autorisées en sortie (requêtes et URL/traces), destination réseau réelle/DNS, redirections et téléchargement réellement borné/timeout corps complet. WEB avec données fictives/publiques DEV tant que sûreté privée non qualifiée. Le parser de résultats de recherche ne prouve que découverte ; extraction HTML 8k puis citation 500 peut masquer contenu non étudié, fraîcheur fixe un an et confrontation lexicale ne prouvent pas applicabilité/contradiction. Lectures utiles progressives, couverture, provenance, confrontation sémantique et coûts agrégés au travail D3. Aucun crawler ou navigateur autonome parallèle. Détail et tests négatifs dans revue §4.

## 21.3. Axe C — C1 conservé

Projection événementielle transactionnelle et polling incrémental sont cohérents. Enrichir avec véritables étapes cognitives et nouvelles observations versionnées, corrélation exacte, ordre/reprise/ownership, minimisation de summary/detail/sourceRef et absence de chaîne privée ou progrès fictif. Valider usage pendant RUNNING sur sas/projet/documents/bilan ; pas de transport supplémentaire sans nécessité. Détail revue §5.

## 21.4. Axe D — contrats, autorité, réalisation, Git et restitution

D6/D7 : garder contrôle mandat, claim avant send, identités SDK, STOP et supervision C13. Ne pas assimiler cwd à sandbox ni prompt à permission. Vérifier workspace Pilote/projet (liens internes/concurrence), droits/permissions réels fournisseur, capacités MCP requises conditionnellement, restriction/mandat au point d'effet. Supervisor in-process, max ticks et resume via reconcile : reprise autonome boot/serveur à qualifier ; écritures concurrentes de projection STOP/observe/ingestion à sécuriser, no blind redispatch ; pas machine à états ou infrastructure parallèle sans besoin. Auto-session DEV : vérifier écoute réellement restreinte, non simple bind déclaré + connect loopback, auth normale ailleurs. Détail revue D.2–D.4 et §7.

Git A : mandat exact et permissions réelles, pas liste commit/push/create_branch implicite ; observation distante fraîche (tracking cache ≠ remote), base/branche/cible au point d'effet, D9 vérification indépendante, continuité et local non publié distinct. Aucun publisher de code Studio ; circuit ML4 documentaire distinct conservé. Aucun GitHub REAL sans cible/GO explicite, MCP conditionnel. Détail D.5.

Restitution : SDK marque REPORT_MUST_BE_INGESTED_SEPARATELY ; D7 observe terminal mais chemins inspectés ne chaînent pas remise→D8→avis. Enchaîner propriétaires existants de manière idempotente après fin/interruption réconciliée, collecte et inventaire authentiques, absence/rapport précoce/hostile honnête, pièces tardives versionnées. D8 compare preuves effectives aux critères propres au contrat, pas uniquement compteurs/manifeste ; paramètres Git vérifiés et captures à raccorder à qualification, neuf rubriques, possibilité de conformité technique positivement prouvée distincte de réception humaine. Référence manifeste ne vaut pas accessibilité. D8 confinement statique C13 acquis, race de substitution intermédiaire et lecture non strictement bornée à fermer. Verrou de qualification ne garantit pas fraîcheur si dossier lu avant ; avis hors transaction à rattacher à version exacte sans écrasement concurrent. D3 final LIVE avec journal individuel des pièces réellement consultées (pas compteur global ni marqueur Markdown), unique avis consultatif versionné, retour contextualisé sans auto-envoi. Détail D.6–D.9.

## 21.5. Trajectoire, blast radius et gates

Les trois lots de convergence validés comme orientation restent **dans ML5**. (1) conducteur cognitif complet : D3/D4/WEB/activité, contrat/READY D6-D7, API/données/UX/sécurité et non-régression ; (2) réalisation et restitution autonomes : D6/D7/D8/D9/D3, contraintes d'autorité et concurrence, transport/collecte/version/qualification/avis ; (3) qualification intégrée : continuité, 99 IDs et sous-critères, CA/T/Q/PF, tsc/lint/build, intégration PG/API, missions LIVE représentatives et non-régression ML1–ML4 selon impact, as-built et registre. IN/OUT, risques, dépendances, preuves et exit détaillés dans [revue §9](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md). P0 dès frontière ; préserver composants éprouvés, pas d'architecture physique anticipée. Nombre de cycles selon capacité/risque, pas découpage documentaire artificiel.

Contrôle documentaire : les copies locales de conception/registre reproduites par Cursor ne reprennent pas intégralement R-004 ; sources Git candidates actualisées prioritaires pour prochaine construction, réconciliation sans écraser les 97 DIRTY. Le snapshot contient 237 fichiers mais pas toutes dépendances UI/boot/lockfile ; récupération ciblée avant conclusions sur ces chemins. Non-régression globale non démontrée, incompatibilité type toolAllowlist à compiler. La revue couvre les familles et 99 IDs par groupes, pas une certification ligne par ligne. F2 reporté à recette UX, interactions fonctionnelles minimales maintenant. Pas nouvelle lane, pas publication projet (Morris expliquera modalités), PR/merge/recette/promotion/adoption ni GO C15. **Verdict courant : ML5 TARGET ARCHITECTURE COHERENT — IMPLEMENTATION CONFORMITY PARTIAL — FUNCTIONAL COMPLETION REQUIRED.**

## 22. Actualisation factuelle des écarts après C20 (24/11/2026)

**Nature :** addendum de suivi D1 strictement factuel sous GO Morris du 24/11/2026 pour synchroniser les documents ML5 publiés ; aucune modification normative, aucun nouvel arbitrage, aucun GO lot 2, pas de réception/adoption. Références opposables pour l'état courant : [revue globale §11](https://github.com/mcleland147/sfia-workspace/blob/978e42648aa0149e4f2f2bab03b4483a5bbfd496/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md#11-revue-globale-post-c20--état-de-travail-au-24112026-d1-factuel), [registre §9](https://github.com/mcleland147/sfia-workspace/blob/f649776bc2da1be1a0ba77486675b76891a31cb3/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md), [conception du conducteur §13](https://github.com/mcleland147/sfia-workspace/blob/141faa488a72d9164678e927b5785370da67146a/projects/sfia-studio-next/architecture-technique/conducteur-cognitif-et-production-nora.md), [suivi des preuves §9](https://github.com/mcleland147/sfia-workspace/blob/af589c6949a26a197bbc30f43925d8267a3994c1/projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md), [handoff C20](https://github.com/mcleland147/sfia-workspace/blob/51cbadf26b8ce2f0b0ce52b3ebebd136ce4b6bef/sfia-review-handoff/latest-chatgpt-review.md). Code candidat local rapporté DIRTY C1–C20 @6cf33e99, NON OBSERVÉ directement, NO RELEASE ; main inchangé. Cursor READY WITH RESERVES ; ChatGPT : socle exploitable, sortie lot 1 non qualifiée, lot 2 conditionnel recommandé et non décidé.

L'architecture B/C/C est conservée, de même que les propriétaires R4 et Git A. Les constats pré-C15 décrivent leur snapshot et ne doivent plus être lus comme absence du conducteur ou de la persistance.

| Axe / interface | Évolution observée | Travail résiduel |
|---|---|---|
| A : D3 conducteur | Structuré C18, checkpoint immuable C19, lease/CAS C20, attachement ambigu clarifié | Reprise réelle, probe/ownership, adaptation et consolidation multi-segments ; pas nouveau moteur |
| B : B1 WEB | Allowlist de découverte C20, agent isolé C14, pinned/redirect bornés rapportés | P0 B07 toujours ouvert : args.query libre et regex ; véritable autorisation des données à l'egress, confinement avant usage |
| C : activité | Événements corrélés/polling, premiers browser | Vérification utile en cours de travail/reconnexion |
| D.1–D.2 | Production longue structurée, filiation READY, D4 supersession et double contrôle pré-SDK | Exactitude des dépendances/permissions, réservation et preuve de refus au dispatch ; contrat inspecté/autorisé/transmis |
| D.3–D.5 | D6, SDK LIVE/ACK-first/STOP et supervision existants ; décision A | Confinement réel workspace/fournisseur, boot/concurrence/ACK incertain, Git exact et D9 indépendant si mission ; pas nouveau publisher |
| D.6–D.9 | Handoff, D8, outils Nora et avis LIVE séparés disponibles | **Construction majeure restante** : terminal→collecte/ingestion→D8/D9→avis versionné, vrai recoupement critères/pièces, provenance, confinement borné et fraîcheur, preuves tardives, avis unique et retour fil |

Le service C20 injecte le contenu de production cognitive dans documentProposal (handoff L5577–5599) ; I6 observe D4 AVAILABLE sur document simple, pas identité intégrale longue. I2 observe supersession D4 au niveau assess (L261–276) et code post-claim (L2182–2233), pas preuve de zéro dispatch après autorisation. I3 tests lexical/URL ne garantissent pas confidentialité métier non marquée (L2692–2744, L3515–3529). Le maintien d'un P0 interdit d'utiliser la frontière concernée ; proposition de WEB OFF vérifié en entrée du lot 2, non décision ni fermeture.

Le prochain travail utile porte sur le résultat intégré de lot 2 §21.4, avec gates d'autorité et confinement, puis lot 3 qualification. Les limites d'audit post-C14 restent pertinentes là où aucun code/preuve plus récent n'a été observé ; qualifier localement avant modification. Aucun pivot architectural, changement de doctrine ou gate induit.

## 23. État transverse post-C22 — constat as-built et écarts

**Portée :** actualisation D1 factuelle sous GO Morris du 24/11/2026. [Revue globale §12](https://github.com/mcleland147/sfia-workspace/blob/ea74688a2ac2643a157dc680d4b2f5fa1fa0b517/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md) ; [registre des 99 exigences §10](https://github.com/mcleland147/sfia-workspace/blob/eec09fdcabcf4299d3c57b4cf612a3d67c8a1718/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md) ; [handoff C22](https://github.com/mcleland147/sfia-workspace/blob/075d085628e5062b2fd17301f6347195fd25c53a/sfia-review-handoff/latest-chatgpt-review.md). Candidat DIRTY C1–C22 @6cf33e99 rapporté, NON OBSERVÉ directement. GO lot 2 et C22 acquis. Cursor READY WITH RESERVES ; ChatGPT NOT READY FOR LOT 2 EXIT — LIVE DOWNSTREAM OBSERVED / D8 EVIDENCE INTEGRITY AND RESTITUTION FENCING OPEN. NO RELEASE. Aucun changement de cible, exigences, décisions ou gates.

| Interface | État C22 observé | Invariant / exit restant |
|---|---|---|
| A D3 | Conducteur PG commun ; mergeMode structuré ; avis D8 via scope attemptId | Consolidation sémantique réelle, reprise et production canonique, journal des pièces |
| B B1 | Autorisation exact allowlist/registre ; deny registre vide | Registre serveur alimenté en pratique, egress positif sûr et contrôle URL/logs ; confinement distinct de qualification |
| C activité | C1 + événement investigation C21 | RUNNING réel, reconnexion, corrélation et minimisation BROWSER |
| D.1–D.2 D6/D7 | Filiation, revalidation C20, dispatch C22 | Dépendances actuelles, point de réservation, identité contrat, négatif zéro SDK |
| D.3–D.5 D7 | SDK LIVE/ACK/STOP et instrumentation boot | Supervision autonome sans reconcile de campagne ; confinement SDK effectif ; D9/Git A conditionnel |
| D.6 D7 collecte | Rapport attempt-bound, FS confiné et hash | Binding canonique et fallback non certifiant ; CAS claim acquis, écrire sous fence actuel |
| D.7 D8 | buildVerifiedEvidenceFromWorkspace et verdict CONFORMING | P0 : nom fichier et exit déclaré ne prouvent pas satisfaction ; test exécuté, contenu effectivement évalué, provenance et version |
| D.8–D.9 Nora | runNoraCognitiveTurn + D8, avis LIVE après reprise | Avis par dossier/version, absence d'écrasement stale, distinction synthèse et COMPLETE, preuve tardive et retour fil |

Références code C22 L537–609/1033–1061 (binding/fallback), L748–781 (verified par nom ou exit), L814–911/1227–1413 (claim vs écritures), L1299–1345 (scope D8), L1485–1516 (boot), L1938–2016 (mergeMode), L3587–3597/3680–3768 (mission et reconcile). D8 doit rester propriétaire de la qualification ; Nora donne un avis distinct, Pilote décide. Pas de nouveau moteur, store ou pivot. L'architecture B/C/C et Git A restent applicables. La chaîne aval LIVE constitue une avancée, non une réception du lot 2. Voir revue globale pour priorisation. Aucun GO lot 3.

# 24. Observation runtime UAT — 24/11/2026

[Journal UAT](../construction/recette-utilisateur-ml5-pilotage-360-20261124.md). D3/D4 : v1 OBS, v2 FAIL, output Git large et budget ; B1 WEB directe FAIL, options A/B/C/D et exit sécurité §5 du journal ; D5 rétention/ouverture distinctes OBS mais projection partielle ; D6/D7 : mission de Nora au lieu de Cursor, nouveaux IDs v1, READY/D6 UI, contrôle exact authority/version/empreinte non prouvé ; D7 SDK terminal LIVE et état partiel ; D7/D8/D9 handoff reçu, preuve/inventaire incomplets, D9 N/A local ; D8→D3 avis déterministe et rapport inaccessible. P0 OS/permissions et fencing/intégrité à requalifier. Préserver propriétaires et B/C/C + Git A ; aucun nouveau ADR, choix navigateur ou moteur concurrent. Code exact non observé.

**ML5 PRIMARY FLOW PARTIALLY OBSERVED — BUSINESS END-TO-END NOT ACHIEVED; OPEN / NO RELEASE / NOT ADOPTED.**
