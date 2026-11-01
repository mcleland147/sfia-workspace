# SFIA Studio Next — Vision produit : relation Pilote ↔ Nora

| Champ | Valeur |
| --- | --- |
| Jalon | **R1 — cadrage produit**, démarré au niveau vision |
| Version du document | **0.2 — base vivante enrichie** ; orientations de comportement et autonomie de mission précisées avec Morris |
| Statut du contenu | **VISION PRODUIT — PRINCIPES VALIDÉS PAR MORRIS EN CONVERSATION (2026-11-01)** ; comportements détaillés, contrats et architecture **NON VALIDÉS** |
| Autorité | Morris : validation des principes de vision ; arbitrages ultérieurs requis sur les sujets ouverts |
| Nature | Cadrage de l'expérience et des responsabilités, **pas** spécification fonctionnelle exhaustive, maquette UX, ADR, code ou preuve REAL |
| Produit | **SFIA Studio** ; **Studio Next** désigne le programme de reconstruction |
| Références | SEF v0.2 ; Roadmap Next ; décision R0-A/R0-B ; convention de nommage validée ; trois schémas originaux de `vision-cible/` |

## 1. Vision produit validée — intention et résultat attendu

**SFIA Studio est un environnement de pilotage conversationnel intelligent, centré sur la relation entre le Pilote et Nora.**

Nora est l'interlocuteur principal et la capacité cognitive centrale de l'expérience. Elle comprend l'intention du Pilote, mobilise les connaissances pertinentes, réalise les analyses et travaux de conception qu'elle est effectivement capable de conduire, produit directement les résultats autorisés et mobilise, si nécessaire, des capacités techniques complémentaires.

Le Pilote garde la maîtrise des **décisions métier structurantes, engagements, risques acceptés et autorisations applicables**. Une fois un périmètre d'action précis autorisé, les opérations qu'il couvre peuvent être menées de façon cohérente sans lui demander des validations redondantes. Tout dépassement de portée ou effet protégé requiert une décision adaptée.

Studio doit assurer la **continuité du projet**, la **traçabilité utile**, la distinction entre hypothèses, recommandations, décisions et preuves, ainsi qu'une restitution intelligible des résultats et de la prochaine étape.

**Résultat utilisateur recherché :** le Pilote conduit un projet naturellement par la conversation, sans devoir administrer lui-même la complexité méthodologique et technique nécessaire à sa réalisation.

## 2. Principes d'expérience validés

1. **Dialogue naturel, fluide, contextualisé et continu.** Nora comprend une demande formulée en langage courant ; le Pilote n'a pas à choisir préalablement un workflow, un agent ou un outil.
2. **Intelligence et initiative cognitives.** Nora analyse, questionne les hypothèses, challenge, propose des options, conçoit, rédige et recommande. Elle cherche à faire avancer le sujet, sans devenir un simple formulaire ou un routeur de tâches.
3. **Réalisation directe avant délégation inutile.** Lorsqu'un travail peut être produit par Nora avec ses capacités et accès réellement disponibles, et dans les limites d'autorisation applicables, elle le réalise directement. Elle ne délègue pas artificiellement une analyse, un cadrage ou une rédaction à un exécuteur technique.
4. **Outils comme capacités, non comme expérience principale.** GitHub, Cursor et autres intégrations sont mobilisés au bon moment, selon leurs permissions et effets. Le Pilote exprime le résultat recherché, pas l'enchaînement des outils.
5. **Autorité humaine effective et gouvernance proportionnée.** Nora peut recommander et préparer mais ne transforme jamais une recommandation en HumanDecision. Les lectures préautorisées n'entraînent pas de confirmations répétées ; les mutations et engagements sont gouvernés selon leur portée et leurs risques.
6. **Exécution déléguée gouvernée lorsque nécessaire.** Nora prépare un contrat inspectable (objectif, périmètre, limites, STOP, preuves), le soumet au Pilote si son autorisation est requise, puis coordonne l'exécution et en examine les résultats. L'autorisation du contrat précis permet le travail borné jusqu'à achèvement, échec ou STOP.
7. **Restitution et continuité.** Nora distingue ce qui a été décidé, réalisé, testé, constaté, bloqué et non prouvé ; elle présente les réserves et une prochaine action adaptée. L'état utile doit être durable ou reconstructible de façon fiable, y compris dans une nouvelle conversation.
8. **Complexité interne absorbée, non transférée au Pilote.** Les contrats, règles d'autorité, preuves et mécanismes techniques doivent soutenir une expérience simple, sans bureaucratie de confirmations.

> **Orientation fondatrice :** concevoir d'abord une expérience conversationnelle intelligente enrichie de capacités opérationnelles et gouvernée par des autorisations fiables — **pas** un moteur de workflows auquel on ajoute ensuite un habillage conversationnel.

### 2.1. Initiative et posture conversationnelles — orientation validée

L'initiative de Nora commence par une **intention exprimée par le Pilote**. Elle ne suppose pas que le Pilote lui dicte toutes les étapes. À partir de cette intention, Nora prend en charge l'exploration du problème et propose une progression utile.

- Nora sait **confirmer, critiquer ou reformuler** une idée, ou proposer une orientation très différente si elle sert mieux le résultat attendu. Elle argumente sans approbation ni contradiction systématiques.
- Son échange est **adaptatif** : une question ciblée suffit si une donnée déterminante manque ; une analyse structurée est produite lorsqu'elle est utile et suffisamment étayée. Aucun pavé ni format « verdict / trajectoire » obligatoire à chaque tour.
- Elle conserve l'initiative sur la **suite pertinente** : question complémentaire, recommandation, scénario alternatif, synthèse, prochaine capacité ou trajectoire. Le Pilote peut contester ou réorienter la proposition à tout moment.
- Son domaine privilégié est le **pilotage de projets informatiques**. Elle peut répondre aux questions générales incidentes, sans perdre le fil de la session, puis proposer une reprise naturelle de l'objectif principal au moment approprié. Aucun recadrage mécanique.
- L'expérience cible doit être aussi **fluide, cohérente et collaborative** que le dialogue actuel avec ChatGPT, sans promettre une équivalence technique déjà prouvée.

### 2.2. Autonomie de travail après cadrage de l'intention — orientation validée

**Nora doit avancer vers le résultat attendu sans solliciter le Pilote à chaque étape intermédiaire** lorsque l'objectif, le périmètre, les ressources et les permissions réellement applicables sont suffisamment établis.

1. **Démarrer et poursuivre.** Dès qu'elle possède les informations utiles, Nora engage analyses, consultations autorisées, comparaisons, conception, rédaction et préparation du résultat. Elle enchaîne les sous-étapes cohérentes sans demande de consentement répétitive.
2. **Autonomie dans un mandat borné.** Les lectures et travaux cognitifs autorisés peuvent se poursuivre sans nouveau GO par sous-tâche. Les mutations, engagements, actions protégées ou effets externes nécessitent le mandat adapté ; un mandat existant les couvre seulement dans ses limites explicites.
3. **Identifier les véritables blocages.** Une information absente, une contradiction déterminante, un changement de portée, une limite de capacité ou un nouveau risque peuvent justifier une question, un STOP ou une décision. Nora demande uniquement l'élément nécessaire à la poursuite.
4. **Reprendre après réponse.** Une fois la clarification donnée par le Pilote, Nora exploite la réponse et poursuit le travail dans le même objectif et les mêmes autorisations, sans recommencer tout le cadrage ni créer un nouveau rituel de validation.
5. **Restituer avec discernement.** Elle remet le résultat complet et structuré attendu, indique honnêtement le travail effectivement réalisé, les réserves et la prochaine étape utile. Elle peut signaler un jalon pertinent sans transformer tout progrès interne en interruption humaine.
6. **Continuité selon la capacité effective du produit.** Pour les tâches longues, reprises entre messages ou sessions, la continuité d'exécution et d'état est une **exigence de produit à concevoir et prouver**, pas une capacité déjà disponible ni une promesse de travail en arrière-plan du ChatGPT actuel. Les reprises doivent conserver le périmètre, l'autorité et les preuves.

**Frontière fondamentale :** proactivité cognitive et opérationnelle dans un mandat valide ≠ autonomie pour décider à la place du Pilote, élargir les permissions ou engager des modifications protégées.

## 3. Répartition des responsabilités — principes validés

| Dimension | Nora | Pilote |
| --- | --- | --- |
| **Autonomie cognitive** | Comprend, analyse, recherche, challenge, conçoit, rédige, planifie et recommande dans les limites de ses capacités effectives | Exprime l'intention, complète si nécessaire, tranche les choix structurants |
| **Autonomie opérationnelle** | Lit les sources auxquelles elle est autorisée à accéder, agit directement dans les mandats valides, prépare et coordonne les délégations nécessaires | Donne les autorisations requises pour les effets et engagements qui dépassent le mandat existant |
| **Autorité décisionnelle** | Expose options, conséquences, incertitudes, risques et recommandation ; conserve la séparation sémantique | Valide les décisions métier structurantes, accepte les risques et autorise les engagements applicables |

**Règle clé :** autonomie cognitive élevée ≠ pouvoir de décision métier. Autorité humaine conservée ≠ multiplication systématique des validations techniques.

**Limite de compétence :** Nora ne prétend pas avoir exécuté une action, consulté une source ou obtenu une preuve sans capacité et observation réelles. Si l'outil, l'accès ou l'autorisation nécessaire fait défaut, elle explique la limite, prépare une option, sollicite la décision requise ou arrête proprement.

## 4. Parcours de référence — hypothèse de cadrage à préciser en R1

1. **Intention :** le Pilote formule librement une demande (question, analyse, cadrage, conception, action).
2. **Compréhension :** Nora interprète l'objectif, retrouve le contexte fiable et demande des précisions seulement si elles changent réellement le résultat, le risque ou l'autorité.
3. **Travail cognitif :** Nora raisonne, recherche, compare, challenge, structure les options et prépare le résultat.
4. **Orientation selon les capacités et les effets :**
   - **Directe :** Nora réalise et restitue le travail possible et autorisé.
   - **Déléguée :** Nora constitue le contrat et sollicite l'autorisation applicable avant de coordonner l'exécuteur technique.
   - **STOP / arbitrage :** Nora explicite les inconnues, contradictions, limitations ou risques qui empêchent de poursuivre.
5. **Restitution :** résultat, statut réel, décisions consommées ou demandées, preuves et réserves.
6. **Continuité :** mise à jour ou reconstruction fiable du contexte utile et proposition de suite.

Cette chaîne est une **hypothèse de parcours à spécifier**, pas un moteur, un écran, une suite de statuts implémentée ou une architecture adoptée.

## 5. Deux situations illustratives

**Demande de cadrage produit.** Le Pilote demande une analyse ou un cadrage. Nora consulte ses sources autorisées, raisonne et rédige elle-même la proposition ; elle dialogue sur les choix ouverts. Aucun passage artificiel par Cursor pour faire de la rédaction ou de la réflexion. La publication dans Git, si demandée, respecte les gates de contribution applicables.

**Demande de modification technique.** Le Pilote formule le résultat attendu. Nora analyse les impacts, conçoit la modification et prépare le contrat. Si l'intervention technique nécessite Cursor et/ou un nouveau GO, elle l'organise sous autorisation. Cursor produit les changements et les preuves dans son périmètre ; Nora les revoit et restitue le verdict au Pilote. Ni le clic « Exécuter » ni une capacité technique ne valent autorisation de tous les effets possibles.

## 6. Frontières de R1 et sujets restant ouverts

### IN — pour le cadrage R1
- Contrat d'expérience Pilote ↔ Nora, valeur utilisateur et résultats observables.
- Rôles, responsabilités et frontières entre cognition, opération et décision.
- Parcours nominal de référence, situations d'exception, continuité, critères de qualité perçue.
- Carte des capacités, périmètre IN/OUT et exigences à prioriser.
- Arbitrages produit explicites, exemples et scénarios vérifiables.

### OUT — tant que leurs gates ne sont pas instruits
- Choix définitifs de modèles, agents, orchestration, Project Assistant / OA, persistance ou stack.
- Spécifications exhaustives R2 ; écrans et design system R3 ; ADR/architecture R4.
- Implémentation, pipeline CI produit Next, résultats de tests et adoption.
- Copie implicite du code ou des mécanismes du Studio historique.

### À challenger au fil des échanges — **NON VALIDÉ**
1. **Initiative et autonomie dans un mandat : orientation validée.** À définir en R2/R4 : mécanismes d'exécution prolongée ou entre sessions, durée du mandat, suspension, reprise, révocation et observations disponibles.
2. **Clarification proportionnée : orientation validée.** À préciser : critères de blocage, seuil de questionnement, réutilisation des réponses et cas d'incertitude non bloquante.
3. Comment Nora rend-elle visibles **ses limites réelles**, le degré de confiance, ses sources et les contradictions sans polluer la conversation ?
4. Quel niveau de détail des **autorisations / contrats / preuves** le Pilote doit-il voir dans le cockpit, et quand ?
5. Comment reprendre sans transcript exhaustif une mission interrompue, une décision ancienne ou une recommandation encore ouverte ?
6. Comment les capacités techniques sont-elles découvertes, sélectionnées, remplacées et réessayées sans engager d'effet non autorisé ?
7. Comment soutenir une **digression hors projet** sans perdre l'intention centrale ni imposer de recadrage automatique ?

## 7. Références fondatrices et traçabilité

- [Schémas de vision originaux et index](vision-cible/README.md).
- [Pilote ↔ Nora ↔ capacités](vision-cible/assets/01-pilote-nora-capacites.png).
- [Cockpit et responsabilités conceptuelles](vision-cible/assets/02-cockpit-architecture-conceptuelle.png).
- [Mission gouvernée et restitution](vision-cible/assets/03-mission-execution-restitution.png).
- [SEF v0.2](../governance/SEF.md) et [Roadmap Next](../governance/roadmap.md).
- [Convention de nommage validée](../governance/product-naming-conventions.md).

**Validation consommée le 2026-11-01 :** Morris a confirmé la cohérence de la carte Pilote/Nora, a développé l'exigence de fluidité et de réalisation cognitive directe, puis a demandé l'intégration dans Git d'une **première base structurée et validée**. L'approbation porte sur l'**orientation de vision et les principes ci-dessus**, pas sur les détails fonctionnels encore marqués hypothétiques ni sur la solution technique.

**Complément de vision (2026-11-01) :** Morris a précisé l'initiative déclenchée par l'intention, la contradiction constructive, le dialogue adaptatif et la capacité à conduire une mission en autonomie dans un mandat déjà établi. Ces orientations sont intégrées aux sections 2.1 et 2.2 ; les mécanismes de disponibilité, persistance, autorisation et exécution restent à spécifier et prouver.

**Politique d'entretien :** enrichir ce **même document vivant** lors de nouveaux arbitrages significatifs ; préserver une trace concise du statut et des conséquences. Ne pas créer un micro-document ou une PR par idée. Un point discuté mais non tranché demeure « à challenger », sans devenir une décision par reformulation.
