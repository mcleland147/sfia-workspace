# SFIA Studio Next — Pré-analyse des écarts : cognition transverse de Nora et réalisation Cursor

## Base d'investigation architecture et UX — ML5

> **Lecture prioritaire :** l'axe A est consolidé au **§15** et l'axe B au **§16**. Les sections antérieures conservent les diagnostics initiaux ; elles sont complétées par les synthèses intégrées sans effacer les réserves historiques. **A et B : conception candidate documentée, pas preuves runtime** ; axes C (activité) et D (Cursor) à qualifier. Aucune promotion ni architecture finale déduite.

| Champ | Valeur |
| --- | --- |
| Nature | **Document d'analyse exploratoire D0**, enregistré sur branche candidate ; non normatif, non décisionnel |
| Version | **v0.5 — 22 novembre 2026** ; axes A et B consolidés en conception candidate, interfaces A↔B↔C, risques de confidentialité, provenance et conditions de preuve B1 |
| Statut | **DOCUMENTED / AXES A+B CONSOLIDÉS EN CONCEPTION CANDIDATE — NOT ARCHITECTURE-VALIDATED / NOT QUALIFIED FOR BUILD** ; B1 privilégiée par Morris, faisabilité SDK/observabilité/confidentialité/limites à prouver, sans GO technique |
| Autorité de décision | Morris ; aucune adoption d'architecture inférée |
| Source fonctionnelle candidate | [Contrat fonctionnel Nora transverse et Cursor](../conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md) — v0.3 validée en contenu par Morris, branche candidate |
| Base Git du diagnostic | **main@997897fd7cf914771e7d08e8030dc7123fab7d25** ; branche candidate initiale **39c00f72c10e69f7981dd2490a0b68fc5e4b8d78** |
| Worktree et index locaux | **NON OBSERVÉS** |
| État de gouvernance | Ensemble 08 intégré sur main avec réserves ; **Gate C OPEN** ; aucun GO Cursor ML5, ni PR, merge, release ou ADOPTED déduit ; validation visuelle Morris de la page 12 Figma ne vaut pas gate technique |
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
| **D — Réalisation Cursor gouvernée** | Comment raccorder un exécuteur technique, ses tentatives et ses résultats sans doubler D7 ? | Comparer CLI/API Cloud/SDK sur documentation et tests actuels ; contrat versionné, D6, D7, D8 et identité séparés | Arbitrage fournisseur et permissions ; migration éventuelle = gate Morris |

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
