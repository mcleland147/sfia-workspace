# SFIA Studio Next — Pré-analyse des écarts : cognition transverse de Nora et réalisation Cursor

## Base d'investigation architecture et UX — ML5

| Champ | Valeur |
| --- | --- |
| Nature | **Document d'analyse exploratoire D0**, enregistré sur branche candidate ; non normatif, non décisionnel |
| Version | v0.1 — 22 novembre 2026 |
| Statut | **DOCUMENTED / INITIAL GAP ANALYSIS — NOT QUALIFIED FOR BUILD** |
| Autorité de décision | Morris ; aucune adoption d'architecture inférée |
| Source fonctionnelle candidate | [Contrat fonctionnel Nora transverse et Cursor](../conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md) — v0.3 validée en contenu par Morris, branche candidate |
| Base Git du diagnostic | **main@997897fd7cf914771e7d08e8030dc7123fab7d25** ; branche candidate initiale **39c00f72c10e69f7981dd2490a0b68fc5e4b8d78** |
| Worktree et index locaux | **NON OBSERVÉS** |
| État de gouvernance | Ensemble 08 intégré sur main avec réserves ; **Gate C OPEN** ; aucun GO Cursor ML5, ni PR, merge, release ou ADOPTED déduit |
| Portée | Pré-qualification en lecture seule du code et de la documentation Next ; analyse à approfondir, **pas un contrat technique d'exécution** |

> Ce document fixe les **premiers écarts observés** entre la vision fonctionnelle validée et la réalité du dépôt, afin de reprendre la qualification d'architecture ultérieurement. Il ne modifie ni SEF, ni Roadmap, ni ADR, ni spécifications R2 propriétaires ; il ne remplace pas une revue exhaustive des flux, invariants, tests et preuves LIVE/REAL.

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
| **E2** | Recherche et lecture web transverse | Assemblage d'outils D4/historique/Git présent dans nora-adapter.ts | **Aucun outil web dans la liste et l'assemblage consultés** ; recherche, ouverture de page, provenance, sécurité et coûts à intégrer | Haute |
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

Le Pilote a souhaité **concevoir les écrans Figma avant de poursuivre l'étude d'architecture détaillée**. Cette séquence est compatible avec la nature exploratoire du présent diagnostic, à condition de garder visibles les limites de preuve.

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

**Verdict de la présente analyse : INITIAL GAP ANALYSIS — DOCUMENTED / NON EXHAUSTIVE.**

- **Qualification fonctionnelle** : document v0.3 validé en contenu par Morris, prêt à servir de référence candidate pour UX et analyse technique.
- **Architecture courante** : fondations partielles observées ; six écarts structurants à instruire.
- **Priorité de travail retenue** : compléter et revoir les écrans **Figma Next** à partir du parcours UX v0.4, avant de reprendre le diagnostic architectural détaillé.
- **Construction** : aucune capacité ML5 Cursor prouvée ni autorisée ; **Gate C OPEN**.
- **Publication** : contribution documentaire sur la **branche candidate existante uniquement**, sans PR ni merge. Aucune mutation du runtime ou des documents normatifs.
- **Retour après Figma** : réviser la matrice d'écarts à partir des contrats visuels et approfondir les flux D3/D4/D6/D7/D8/D9, les preuves, le coût, les dépendances et les gates.

**Documenté ≠ validé en architecture ≠ implémenté ≠ prouvé ≠ ADOPTED.**
