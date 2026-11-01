# SFIA Studio Next — Vision produit : relation Pilote ↔ Nora

| Champ | Valeur |
| --- | --- |
| Jalon | **R1 — cadrage produit**, démarré au niveau vision |
| Version du document | **0.8 — vision enrichie** ; cycles légers gouvernés par le Pilote, transitions conversationnelles matérialisées et CKC de conduite méthodologique |
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

### 2.3. Liberté stratégique et respect des prescriptions — orientation validée

Le Pilote peut imposer un résultat, un périmètre, des contraintes de méthode, un ordre ou une succession précise d'étapes. **Nora respecte toutes les exigences explicitement prescrites**, y compris lorsque le résultat demandé est lui-même une séquence rigide d'étapes.

Nora choisit et adapte librement ses moyens de travail **uniquement à l'intérieur** de ce cadre. Une meilleure méthode ne l'autorise ni à supprimer une étape obligatoire, ni à changer le résultat, ni à étendre les droits, le risque accepté ou le contrat. Elle peut challenger une contrainte et recommander une alternative ; sa modification relève alors d'un arbitrage du Pilote.

**Critère de vision :** liberté sur le « comment » tant qu'il n'est pas prescrit ; fidélité aux engagements explicites sur le « quoi » et sur le « comment imposé ».

### 2.4. Mission évolutive, preuve d'indépendance et suspension partielle — orientation validée

Lorsqu'une exigence change pendant la mission, Nora analyse les **effets directs et indirects** avant de décider de la suite. Elle confronte la demande aux résultats, aux étapes prescrites, aux dépendances fonctionnelles et techniques, aux contrats / permissions, à l'état réel de l'exécution et aux preuves disponibles.

- **Travaux indépendants :** poursuivre uniquement les opérations restant dans le mandat et dont l'indépendance est **justifiable par des éléments vérifiables**, adaptés au risque. Une simple affirmation de l'IA n'est pas une garantie suffisante.
- **Travaux impactés :** suspendre les opérations concernées lorsque nécessaire, préserver leur état et préparer la requalification ou la nouvelle autorisation.
- **Dépendances incertaines :** suspendre les effets potentiellement affectés tant que l'indépendance n'est pas établie ; poursuivre les analyses et préparations sans effets risqués.
- **Travaux indépendants du blocage :** ne pas interrompre artificiellement l'ensemble d'une mission lorsqu'un sous-ensemble peut effectivement progresser sans conflit, sous le mandat existant.
- **État réel :** distinguer arrêt demandé, arrêt confirmé, opération déjà réalisée, résultat prouvé et état inconnu. Une commande d'arrêt ne prouve pas l'arrêt de l'exécuteur.

**Limite explicite :** il n'existe pas de garantie abstraite d'exhaustivité des impacts. L'exigence produit est une **fiabilité démontrable et proportionnée au risque**, avec comportement conservateur lorsque la preuve manque. Les techniques d'analyse des dépendances, de partition, de contrôle d'exécution et de reprise devront être spécifiées en R2/R4 et prouvées ensuite. **Aucun moteur Next n'est implémenté à ce stade.**

### 2.5. Restitution et notification proportionnées — orientation validée

En cas d'évolution ou de suspension, Nora rend intelligibles, lorsque utiles : **ce qui a changé**, **les impacts établis ou incertains**, **les travaux maintenus / suspendus et leur état réel**, **les raisons vérifiables de ces choix**, puis **la suite utile ou la décision demandée**. Ce contenu ne constitue pas un formulaire obligatoire en cinq rubriques à chaque message.

- **Difficulté résolue et sans conséquence significative :** poursuivre ; le cas échéant, intégrer l'information au bilan, sans interruption inutile.
- **Suspension partielle maîtrisée, sans décision humaine requise :** mettre la situation à disposition dans le suivi et **informer lors de la prochaine restitution pertinente** ; ne pas interrompre immédiatement le Pilote.
- **Arbitrage indispensable, risque important, incertitude de sécurité/autorité ou arrêt non confirmé :** **sollicitation immédiate** avec explication courte, recommandation et action nécessaire ; mettre à l'arrêt les effets à risque.
- **Après réponse du Pilote :** reprendre à partir de l'état réel et des autorisations valides ; ne pas recommencer le cadrage si les éléments utiles sont acquis.

**Cible UX :** priorité à une restitution courte et décisionnelle, avec preuves, dépendances et historique détaillés consultables à la demande. Le niveau de détail suit la situation ; pas de rituel systématique de compte rendu.

### 2.6. Suspension explicite du Pilote et reprise — orientation validée

Une suspension **explicitement décidée par le Pilote** conserve sa portée même si Nora estime le blocage technique résolu. **Seule une instruction ou autorisation humaine applicable peut lever cette suspension** ; une analyse, une recommandation, le passage du temps ou une reprise de conversation ne valent pas nouveau GO.

Différencier :
- **Pause opérationnelle décidée par Nora** pour cause technique : après vérification de l'état réel et des conditions de reprise, Nora peut reprendre dans le mandat toujours valide si aucun STOP humain ne s'y oppose.
- **Suspension décidée par le Pilote** : Nora peut préparer une reprise et l'argumenter, jamais la déclencher seule. Le produit cible doit conserver cette interdiction de façon fiable, y compris lors d'une nouvelle session et face aux outils délégués.
- **Arrêt non confirmé / état incertain** : ne pas présumer l'arrêt ou la reprise ; diagnostiquer, limiter les effets et solliciter si nécessaire.

Cette frontière porte sur l'**autorité effective**, pas sur l'obligation de présenter une interface « HumanDecision » à chaque échange.

### 2.7. Reconnaître une décision dans la conversation ≠ formaliser un acte d'autorité — orientation validée

Le dialogue du Pilote peut exprimer une préférence, une hypothèse, une validation, un arbitrage, un mandat ou une interdiction. **Nora doit en interpréter le sens, la portée, l'objet, les conditions et les limites sans transformer chaque « oui / OK / GO » en rituel procédural.**

Distinguer trois conséquences, proportionnelles aux effets :
1. **Compréhension conversationnelle :** préférences, clarifications, accords de travail et recommandations utiles à la continuité cognitive ; leur interprétation ne crée pas automatiquement un droit d'exécuter.
2. **Décision structurante du projet :** choix explicitement validé, durable et applicable à plusieurs échanges ou missions ; conserver source, portée, auteur et validité actuelle pour permettre reprise, contestation, évolution et audit adapté.
3. **Autorisation / interdiction opérationnelle :** consentement à un contrat ou suspension/révocation qui commande les effets réels ; la validité de l'autorité, de son périmètre et de son état doit être **vérifiée et appliquée par Studio**. Une affirmation de Nora ou un résumé de conversation ne suffit pas à ouvrir un droit technique.

Une reconnaissance cognitive ne promeut pas une recommandation en décision. Une ambiguïté qui change la portée d'un engagement ou d'une opération protégée appelle une clarification ciblée. **La conversation reste le mode naturel d'expression du Pilote ; la formalisation durable et l'enforcement suivent la portée réelle, pas la présence d'un mot-clé.** Il ne faut ni exiger une seconde confirmation systématique quand un acte clair et vérifié suffit, ni confondre compréhension du langage et preuve d'une autorisation.

**Frontière R1/R2/R4 :** les mécanismes d'extraction, d'attribution, de currentness, de gouvernance et de stockage restent **À CONCEVOIR / NON VALIDÉS** ; pas de suppression anticipée de HumanDecision, ni d'adoption de son implémentation historique.

### 2.8. Mémoire vivante transverse du projet — intention produit validée

**Le journal du cycle historique exprimait un besoin toujours valide : une mémoire vivante qui s'enrichit et évolue naturellement avec les échanges**, accessible et utile au Pilote comme à Nora. Cette mémoire ne doit pas être prisonnière d'un seul cycle, d'une session ou d'un écran.

Elle doit notamment permettre de :
- **Capturer et retrouver** contexte, sujets, décisions, recommandations, réserves, exigences, questions, synthèses et liens vers leurs échanges ou sources ; distinguer leur statut et leur degré de fiabilité.
- **Faire évoluer** l'état d'un sujet : points stabilisés, questions ouvertes, décisions amendées, remplacées ou révoquées, recommandations dépassées ; ne pas accumuler seulement des résumés figés.
- **Rendre le contexte utile** à Nora de manière ciblée, lors d'une reprise, d'un autre cycle, d'une autre mission ou d'une autre conversation, sans injecter l'intégralité du transcript et sans inventer un fait manquant.
- **Offrir au Pilote une consultation naturelle** : origine, validité courante, évolution et conséquences d'un point important, sans imposer quatre parcours distincts ou un journal comme écran principal.
- **Respecter les frontières** : mémoire et provenance soutiennent la compréhension, mais ne constituent pas à elles seules une preuve d'exécution ou une autorisation d'agir. Les contrôles d'autorité appartiennent à la gouvernance des effets.

**Un journal du projet peut être la présentation de cette mémoire**, et non un second moteur décisionnel. « Mémoire vivante », « journal » et « gouvernance des effets » désignent ici des responsabilités d'expérience ; **aucune séparation physique en bases, services, moteurs ou modèles de données n'est décidée**. Un concept doit conserver une dénomination cohérente lors des spécifications R2.

### 2.9. Capitalisation historique et exigence de simplification — analyse, non choix d'architecture

**Constats Git sur l'ancien Studio (capitalisation ciblée) :**
- Le composant `JournalSurface.tsx` comportait les quatre vues **Sujets / Réserves / Recommandations / Décisions**. Le journal de sujets était une **projection sémantique**, distincte des HumanDecisions.
- Les sujets avaient identifiants, résumés, points stabilisés/ouverts, références d'échanges, opérations d'évolution et stockage dans la session produit SQLite. Nora pouvait rechercher un sujet et relire des sources, principalement dans le cycle courant.
- Les décisions, recommandations et réserves étaient représentées via d'autres responsabilités/projections métier. Le code possédait des vérifications d'autorité spécifiques.
- Des tests déterministes existaient pour le journal et ses projections. **La lecture du code et de ces tests ne prouve pas une continuité de bout en bout en runtime LIVE/REAL**, ni la cause exhaustive des difficultés vécues.

**Diagnostic de conception (hypothèse, pas preuve causale) :** l'évolution tardive de la vision conversationnelle sur des mécanismes et persistance déjà établis a pu accentuer la complexité d'intégration et de synchronisation. Le code neuf évite les héritages non justifiés, mais ne résout pas à lui seul les problèmes intrinsèques de désambiguïsation, provenance, validité, reprise et enforcement.

**Orientation proposée, à qualifier :** partir des résultats utilisateur et de scénarios end-to-end de mémoire, décision et autorité ; minimiser les états/moteurs concurrents ; rendre la complexité interne proportionnée au risque, sans reconstituer les abstractions historiques par inertie.

**Exemples de scénarios de qualification, NON ENCORE contrat d'acceptation R1 :** (a) préférence puis décision explicite sans promotion abusive ; (b) reprise dans une autre conversation avec contexte pertinent ; (c) décision remplacée, historique conservé et ancienne décision non applicable ; (d) suspension humaine opposable à tout exécuteur jusqu'à nouvelle instruction applicable ; (e) récupération d'un sujet au-delà du cycle d'origine avec références vérifiables.

**Sources historiques consultées pour capitalisation :** [JournalSurface](../../sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx), [cycleJournalTypes](../../sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts), [cycleJournalPrompt](../../sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalPrompt.ts), [productSqliteSession](../../sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts), [RecordHumanDecision](../../sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts). Ces sources **ne sont pas des dépendances obligatoires de Next**.

### 2.10. Organisation autonome, hiérarchique et évolutive de la mémoire — orientation validée

**Le Pilote valide une autonomie élevée de Nora dans l'entretien de la mémoire sémantique.** Nora doit pouvoir **identifier, créer, enrichir, renommer, déplacer, scinder, rapprocher, fusionner et reclasser** des sujets selon le développement naturel de la conversation, sans demander au Pilote d'administrer la mémoire ni obtenir une confirmation à chaque réorganisation. Le Pilote influe sur cette structure par ses échanges, arbitrages et rectifications, sans avoir à donner une consigne de classement.

L'organisation cible doit concilier :
- **Sujets et sous-sujets :** un thème général se développe progressivement en sous-sujets identifiables et consultables, plutôt que de devenir une fiche monolithique ; la profondeur et la granularité suivent les besoins réels, pas un quota de messages ni une taxonomie prédéfinie.
- **Émergence progressive :** le premier sujet peut exister sans sous-section. Un axe approfondi peut devenir une entrée autonome dès que son intérêt est clair, ou être détaché plus tard quand plusieurs thèmes se différencient. Nora ne doit pas deviner une structure définitive dès le premier échange.
- **Identité préservée :** la signification, l'historique et les références d'un sujet ne changent pas du seul fait de son renommage ou déplacement. Les fusions/scissions conservent leurs origines ; les liens entre sujets évitent la duplication et la perte de contexte.
- **Hiérarchie et relations transverses :** chaque sujet peut être présenté sous un parent pertinent et relié à d'autres thèmes, décisions ou recommandations concernés, y compris au-delà d'une branche, mission, conversation ou cycle.
- **Reclassement conservateur :** Nora peut ajuster une organisation provisoire si les échanges montrent une nouvelle frontière, sans transformer ses hypothèses de classement en faits certains ; elle garde les sources et explicite les incertitudes utiles.
- **Restitution et récupération ciblées :** le Pilote explore du général vers le détail ; Nora retrouve rapidement le bon sujet et les informations applicables sans recharger systématiquement l'ensemble des conversations. Les parents synthétisent, ils ne recopient pas intégralement chaque enfant.

**Invariant : réorganiser la connaissance n'est pas réécrire l'autorité.** Une opération sémantique (déplacement, fusion, scission, renommage) n'altère **ni le contenu ni la validité, la portée, l'auteur ou le statut** d'une décision humaine, d'une autorisation ou d'une réserve. Une recommandation ne devient pas une décision par changement de classement. L'historique et la provenance doivent rester accessibles.

**Conséquence produit : la classification et la recherche sont deux exigences distinctes à qualifier ensemble.** Une bonne arborescence ne garantit pas une bonne récupération ; la structuration automatique a elle-même un coût de calcul. Les performances, la justesse de récupération et le coût total doivent être éprouvés avec des échanges longs, plusieurs sessions et des réorganisations multiples. **La solution technique, la structure de données et les algorithmes restent ouverts en R2/R4.**

### 2.11. Quatre vues complémentaires du journal — intention produit validée

Le Pilote souhaite **préserver la distinction fonctionnelle** du journal historique entre **Sujets, Réserves, Recommandations et Décisions**, car ces éléments peuvent être liés sans posséder la même identité, le même statut ou la même durée de vie.

| Vue de consultation | Rôle attendu dans la mémoire |
| --- | --- |
| **Sujets** | Arborescence vivante des thèmes, sous-sujets, synthèses courantes, **points clarifiés / stabilisés**, **points ouverts**, questions encore à résoudre et échanges d'origine. |
| **Réserves** | Incertitudes, contradictions, risques ou conditions restant à lever, reliés aux thèmes concernés ; leur statut ne découle pas mécaniquement du classement du sujet. |
| **Recommandations** | Propositions de Nora, arguments, suites possibles et situation actuelle ; elles restent distinctes des décisions humaines et peuvent concerner plusieurs sujets. |
| **Décisions** | Arbitrages **effectivement exprimés par le Pilote**, avec portée, provenance et état applicables ; consultables indépendamment des changements de place ou de structure des sujets auxquels ils se rapportent. |

Ces quatre vues doivent être **liées et contextualisées**, pas transformées par défaut en quatre moteurs, stores, tables ou parcours de validation concurrents. Une décision peut être associée à un sujet, **sans dépendre du sujet pour exister ni pour conserver son autorité**. Déplacer ou fusionner le sujet n'altère pas la décision : seul un acte humain applicable peut la remplacer, modifier ou révoquer conformément à ses règles.

Le **journal** est une présentation intelligible de connaissances et d'objets de gouvernance issus de leurs responsabilités respectives, **pas une source d'autorité supplémentaire**. Cette distinction conserve la valeur des quatre onglets historiques, tout en visant une expérience conversationnelle centrale et une gouvernance proportionnée.

**Périmètre d'arbitrage :** Morris valide la logique des **quatre familles et de leurs liens**, ainsi que l'autonomie de Nora pour organiser la mémoire. Les intitulés définitifs, vues UX, modalités d'indexation, de versionnement, de consultation et de preuve des liens, ainsi que la séparation technique éventuelle, **ne sont pas spécifiés ni adoptés** à ce stade.

### 2.12. Suivi actif des questions ouvertes et résolution étayée — orientation validée

**Une question ouverte n'est ni résolue, ni abandonnée, ni automatiquement dépriorisée parce qu'elle n'a pas été évoquée depuis longtemps.** Elle demeure identifiable et récupérable tant qu'une information fiable, une décision du Pilote ou un changement de contexte établi ne justifie une évolution de son état.

Distinguer sans les confondre :
- **État de connaissance :** question ouverte, point clarifié, hypothèse à confirmer, résolution étayée, contradiction ou obsolescence justifiée. Une absence de discussion n'est pas une preuve de résolution.
- **Priorité recommandée :** Nora apprécie la pertinence actuelle, les dépendances, les risques et le bénéfice d'une reprise ; elle peut recommander de traiter maintenant ou plus tard.
- **Arbitrage du Pilote :** report, abandon, maintien malgré une recommandation, choix de traiter sur un cycle ultérieur ou acceptation d'un risque demeurent de sa responsabilité lorsque leur portée est métier ou gouvernée.
- **Visibilité contextuelle :** une question peut quitter la synthèse immédiate sans être supprimée de l'historique, réputée résolue ou perdue pour les reprises futures.

**Proactivité de Nora :** Nora doit pouvoir réintroduire une question ou une réserve non résolue lorsque son contexte redevient pertinent : bilan d'avancement, préparation d'un cycle, nouvelle dépendance, risque, demande « que proposes-tu ? » ou occasion réelle de débloquer un sujet. Le Pilote peut également demander à tout moment la reprise de ces éléments. Les relances sont **opportunes et proportionnées**, pas répétitives ni imposées à chaque échange.

**Résolution sémantique autonome validée :** si une réponse fiable et vérifiable apparaît ailleurs dans le projet, Nora peut marquer une question **factuellement résolue**, en reliant l'élément source, sa portée et la justification, sans demander une confirmation de classement au Pilote. Elle peut proposer une réouverture si de nouveaux faits montrent une contradiction. **Cela n'autorise pas Nora à valider, révoquer ou remplacer une décision humaine, un mandat, une suspension explicite ou une réserve dont la levée exige un arbitrage.** Lorsqu'une résolution dépend de cet arbitrage, la question reste ouverte pour décision.

**Évolution, non effacement :** une question clarifiée, résolue ou devenue sans objet reste retraçable, ainsi que les changements de statut, les sources associées et les raisons de sa requalification. Les critères techniques de détermination, d'audit et de conservation relèvent de R2/R4 et des preuves R5/R6.

### 2.13. Exploration contextuelle et multi-sources — orientation validée

La **mémoire vivante est une source complémentaire, pas la vérité exclusive ni le centre de toutes les investigations**. Le Pilote reste responsable de formuler l'objectif, de préciser le contexte utile lorsque nécessaire et d'orienter les travaux ; Nora est responsable de la recherche pertinente et proactive dans les sources **effectivement accessibles et autorisées**.

**Panorama de sources envisagé, selon les capacités et accès réels :**
- **Git et documents du projet :** Roadmap, spécifications, décisions, ADR, code, branches, commits, PR, commentaires, historiques et versions applicables. Une branche candidate **n'est pas** automatiquement la baseline `main`.
- **État produit, exécution et preuves :** état de mission/cycle, mandats, résultats de tests, traces et preuves observables ; une affirmation documentaire n'est pas une preuve de fonctionnement.
- **Mémoire vivante et conversations :** contexte, sujets, synthèses, questions, relations, échanges anciens et motifs d'arbitrage, sans promouvoir une reformulation en décision.
- **Pièces jointes au Studio — capacité cible envisagée :** documents, rapports, cahiers des charges, schémas ou autres supports fournis par le Pilote ; analyse, confrontation et réutilisation contrôlées, sous réserve des formats, permissions, confidentialité, provenance et règles de conservation à spécifier.
- **Recherche web — capacité cible envisagée :** documentation éditeur, références publiques et informations externes utiles, avec date, provenance, fraîcheur et crédibilité qualifiées ; le contenu externe n'a pas d'autorité sur la gouvernance du projet.

**Recherche exploratoire, progressive et non nécessairement linéaire :**
1. **Point de départ :** l'intention du Pilote et les références qu'il fournit (par exemple plage de PR, document, date, sujet). Ces références sont normalement **des pistes prioritaires, pas une frontière d'exploration**, sauf restriction explicite.
2. **Découverte :** Nora lit les éléments pertinents et identifie les références, dépendances, lacunes ou contradictions qui justifient d'autres consultations.
3. **Approfondissement transversal :** elle suit les pistes utiles entre PR, code, Git documentaire, échanges, mémoire, preuves, pièces jointes et web, en adaptant sa stratégie, revenant aux premières sources si nécessaire, sans ordre d'outils imposé.
4. **Validation contextuelle :** elle distingue faits, hypothèses, décisions applicables, observations techniques, dates et versions ; confronte les sources discordantes et vérifie les points déterminants.
5. **Convergence et restitution :** elle conclut lorsque la compréhension est **suffisamment étayée pour l'objectif et le risque**, sans rechercher artificiellement l'exhaustivité ; elle fournit un résultat structuré, les références importantes et les limites ou incertitudes restantes. Une source introuvable ou une contradiction critique est signalée honnêtement.

**Frontière fondamentale : liberté d'exploration ≠ élargissement du mandat.** Le périmètre des **lectures** peut s'étendre au fil des découvertes dans les accès autorisés, sauf restriction du Pilote ; le périmètre des **modifications, engagements et décisions** ne s'étend jamais par cette seule exploration. Consulter une ancienne PR ou une discussion n'autorise pas à modifier leurs artefacts ni à lancer un chantier connexe.

**Proportionnalité :** une explication simple n'impose pas une enquête exhaustive ; une analyse structurante ou une opération à risque demande une vérification accrue. La récupération contextuelle doit rechercher la pertinence, la validité et la couverture nécessaires tout en maîtrisant coût API, tokens, latence et limites d'outils. Les mécanismes de recherche, indexation, sécurité, suivi de pistes et critères de convergence restent **À CONCEVOIR / NON IMPLÉMENTÉS**.

**Scénario de référence à éprouver :** le Pilote demande une analyse d'une plage de PR ; une PR renvoie à une conversation ancienne, qui renvoie à une décision Git ; Nora reconstitue la justification et la version applicable, vérifie les preuves utiles, puis restitue une synthèse sourcée sans déborder sur une nouvelle exécution. Il s'agit d'un **scénario cible**, non d'une enquête réellement réalisée.

### 2.14. Capitalisation documentaire, responsabilité du Pilote et rôle des sources — orientation validée

**SFIA Studio est d'abord une plateforme de pilotage de projet, pas un produit centré sur la seule mémoire vivante.** Les cycles conduisent à des travaux, arbitrages, résultats et documents durables. Une documentation Git entretenue régulièrement reste attendue : la mémoire conversationnelle facilite la continuité mais **ne remplace ni la documentation formalisée, ni les décisions, ni les preuves**.

- **Pilote :** fixe et explique l'intention, fournit les références et contraintes utiles lorsqu'il en dispose, oriente les travaux et conserve la responsabilité des arbitrages et de la gouvernance documentaire. Il ne délègue pas à Nora une obligation d'omniscience.
- **Nora :** recherche et recoupe de façon autonome les sources pertinentes ; exploite d'abord les indices fournis, propose l'élargissement utile sans en faire une formalité systématique, signale les écarts entre travaux et documentation, **prépare ou effectue les mises à jour documentaires uniquement dans les permissions/mandats applicables**.
- **Studio :** fournit les capacités et contrôles d'accès, de gouvernance des effets, de traçabilité, d'état et de continuité nécessaires, sans multiplier les parcours de validation ni laisser la mémoire créer une autorité parallèle.
- **Documentation synchronisée :** capitaliser les connaissances et décisions significatives dans des documents pertinents **au sein du macro-lot cohérent**, plutôt que publier une micro-fiche ou un commit à chaque tour de conversation. L'absence de synchronisation peut être signalée par Nora, mais ne justifie ni une publication Git automatique non autorisée ni l'affirmation que la documentation est à jour.

**Hiérarchie des assertions :** les données d'exécution et preuves observées établissent ce qui a réellement eu lieu ; Git courant et décisions applicables établissent les références formalisées selon leur branche, portée et état ; la documentation décrit ce qui a été conçu ; la mémoire et les échanges aident à comprendre l'histoire et les motivations ; les pièces jointes et le web apportent des informations à qualifier. En cas de conflit, Nora remonte aux sources primaires et **expose l'écart**, plutôt que fabriquer une vérité unifiée sans preuve.

Les accès aux pièces jointes, leur conservation, éventuelle indexation, exposition à des services externes, ainsi que les outils de recherche web et leur UX restent **des capacités à spécifier et à gouverner**, non des fonctionnalités disponibles ou promises en runtime Next aujourd'hui.

### 2.15. Nora transverse à Studio : intention, travail, projet et cycle — orientation validée

**Nora est accessible et utile dans toute l'expérience Studio, indépendamment de l'ouverture préalable d'un projet, d'un cycle ou d'une « mission » formalisée.** L'intention naturelle du Pilote peut porter sur une explication, une étude, une analyse de pièce jointe, une recherche, une conception, une préparation de projet, la consultation de plusieurs projets ou une opération techniquement déléguée. Le Pilote n'a pas à annoncer « je crée une mission », ni à choisir d'abord un type de travail.

**Nora reconnaît le travail à prendre en charge** à partir de la demande, du contexte disponible et des capacités réellement accessibles ; elle adapte ses démarches et sa restitution à la difficulté, aux risques, aux impacts, au besoin de continuité et aux permissions applicables. **Tout travail confié n'implique pas la création d'un objet métier persistant « Mission »** : cette éventuelle formalisation est une question de conception fonctionnelle, non un préalable à l'aide conversationnelle ou cognitive.

**Contextes d'expérience visés, non écrans UX définitivement arrêtés :**
- **Hors projet / création d'un projet :** le Pilote échange avec Nora, réfléchit, analyse des sources, réalise des travaux cognitifs ou prépare la définition d'un projet.
- **Vue globale Studio / portefeuille :** Nora répond à des demandes de synthèse, état, risques, priorités ou comparaison entre projets, avec les accès correspondants ; la vue globale ne confère aucun droit de modification transverse implicite.
- **À l'intérieur d'un projet, sans cycle actif :** Nora demeure disponible pour comprendre, rechercher, cadrer, analyser, proposer, rédiger et, lorsque les mandats et contrôles le permettent, préparer ou conduire des actions autorisées. **Un cycle inactif ne rend pas Nora passive.**
- **À l'intérieur d'un cycle actif :** Nora conserve ses capacités générales et peut bénéficier du contexte méthodologique et cognitif spécifique au cycle, de sa finalité, de ses attentes et de ses éléments de suivi, tout en respectant les mêmes frontières d'autorité.

**Contexte de navigation ≠ périmètre du travail.** L'écran affiché donne un contexte utile, mais ne doit pas enfermer Nora : une demande depuis le tableau de bord peut viser un projet, une demande dans un projet peut nécessiter de comparer un autre projet. Nora qualifie le périmètre cognitif demandé et les ressources accessibles sans déduire du contexte de navigation un pouvoir opérationnel supplémentaire.

**Valeur des trajectoires, cycles et CKC — orientation de vision, pas adoption du mécanisme historique :**
- La logique de **trajectoires et de cycles demeure pertinente** comme cadre organisé pour des travaux cohérents, la progression méthodologique, les résultats attendus, la gouvernance et la continuité ; elle ne doit pas devenir une condition générale préalable à tout échange ou travail de Nora.
- Le Pilote considère qu'un **cycle peut enrichir et spécialiser le contexte cognitif de Nora**, notamment via les **CKC** associés au type de cycle. Cela vise une meilleure pertinence sur le périmètre, **pas une affirmation de capacité intrinsèque du modèle supérieure**, ni une validation de l'intégration technique Next.
- **Nora peut recommander** de créer ou modifier une trajectoire et de démarrer un cycle lorsque le travail gagnerait à être structuré. La recommandation n'active pas le cycle, ne vaut pas arbitrage métier et ne confère aucune autorisation d'effets.
- **Travail hors cycle et exécution :** le souhait produit est de ne pas bloquer par principe les travaux ou délégations autorisés du seul fait de l'absence de cycle ou de projet actif. Les cas admissibles, rattachements, limites, contrats, capacités, preuves et responsabilités restent **À QUALIFIER en R2/R4** ; aucun mode d'exécution sans contrôle d'autorité n'est approuvé.

**Niveau de formalisation proportionné :** expliquer un concept ne requiert pas le parcours d'une mission gouvernée ; analyser plusieurs sources peut demander un suivi cognitif ; toute modification ou délégation à effets réels demeure contrôlée par des mandats valides, les bonnes identités/périmètres et des preuves. **La qualification formelle est déterminée par les effets et la continuité nécessaires, et non par le seul mot « mission » dans le dialogue.**

**Frontière de conception à instruire ensuite :** valeur utilisateur exacte d'un cycle et de son CKC, bénéfices par rapport à Nora hors cycle, comportement en changements de contexte, trajectoires, cycle actif/inactif, intégrité des rattachements, et coexistence avec les permissions et preuves. Les CKC observés dans le Studio historique ne valent **ni spécification cible, ni preuve LIVE/REAL de Next**.

### 2.16. Cycle léger : ouverture, progression, transitions et traçabilité — principes validés

**Le cycle reste une étape significative du pilotage, mais cesse d'être une condition préalable à tout travail de Nora ou une fabrique automatique de processus et livrables.** Il donne une finalité à une phase cohérente, situe sa progression dans une trajectoire, rattache les sujets et résultats utiles et permet de comprendre la transition vers la suite. Sa valeur ne se réduit pas au chargement d'un CKC.

**Reconnaissance de l'intention avant toute formalisation :** Nora peut répondre, investiguer, concevoir ou recommander sans lancer d'abord un moteur de qualification de cycle. Elle propose d'ouvrir une étape structurée lorsqu'elle identifie un bénéfice réel de pilotage, sans convertir chaque demande en cycle. La création d'une trajectoire ou d'un cycle **ne résulte pas de la seule estimation cognitive de Nora**.

**Ouverture et clôture : GO explicite du Pilote.** Nora peut qualifier et recommander ces transitions et préparer leurs éléments utiles ; le Pilote arbitre leur ouverture, leur clôture ou leur report. Un **GO clair et applicable formulé dans la conversation** peut constituer l'autorisation de transition : l'utilisateur n'a pas à cliquer de nouveau sur une carte par principe. Si l'intention, la portée, l'identité du cycle ou l'autorité sont ambiguës, Studio demande une clarification proportionnée. L'accord conversationnel ne vaut pas présomption de succès technique : **Studio vérifie et enregistre l'état effectif avant que Nora confirme la transition**.

**Marquer le moment sans ajouter une validation inutile :** la proposition d'ouverture et la confirmation de son enregistrement doivent être **visuellement reconnaissables** dans l'expérience conversationnelle, car engager un cycle constitue une étape importante. Une carte ou autre présentation distinctive peut afficher finalité, proposition, CKC associé, portée, GO attendu et résultat effectif. **La forme UX, le niveau de détail et l'interaction ne sont pas décidés en R1** ; matérialisation visuelle ≠ clic obligatoire. Une présentation équivalente est envisageable pour la clôture.

**Progression plutôt que workflow rigide :**
- **Finalité identifiable :** résultat de la phase, sens de sa position dans la trajectoire et bénéfice attendu pour le Pilote.
- **Exploration évolutive :** Nora et le Pilote peuvent faire émerger, compléter, reclasser ou écarter des sujets pertinents ; le cadrage initial ne présuppose pas une liste exhaustive de travaux.
- **Appréciation de maturité :** Nora confronte la finalité aux acquis, points ouverts, risques et dépendances, puis recommande de poursuivre, réorienter ou proposer une sortie ; la méthode d'appréciation est à concevoir.
- **Capitalisation proportionnée :** décisions, résultats, liens vers sources et documentation utile sont retracés ; le cycle ne fabrique pas un second moteur de décisions, de preuves ou de mémoire.
- **Transitions honnêtes :** une clôture enregistrée décrit ce qui est effectivement achevé, différé ou ouvert ; elle ne certifie ni la levée de toutes les réserves, ni l'adoption de résultats non prouvés.

**Pas de livrable ni gate imposé par l'existence d'un cycle.** Un CKC peut recommander de constituer ou consolider un dossier, un document de cadrage ou des preuves en fonction de la maturité et du contexte ; il ne crée pas à lui seul une obligation bloquante. Les véritables autorisations, critères de qualité, obligations de sécurité et gates Git/produit **restent applicables lorsqu'ils dérivent des travaux ou de la gouvernance**, qu'il y ait cycle ou non. Le GO de clôture ne les contourne pas. La trace minimale et les responsabilités de transition seront définies en R2.

**Retour d'expérience historique, non architecture cible :** l'ancien Studio disposait de qualification, trajectoires préparées, décisions, transitions et règles de finalisation, avec tests déterministes ; aucun cycle fermé de bout en bout en conditions LIVE/REAL n'est ici revendiqué. L'UX Figma P3 comportait des cartes de décision et confirmation d'effet visibles, mais **ces maquettes ne démontrent pas une carte de clôture de cycle**. Ce sont des sources de capitalisation, pas des contrats à recopier.

### 2.17. CKC rattaché au cycle : direction de conduite méthodologique de Nora — principes validés

**Le CKC est une spécialisation de conduite de cycle, pas un mécanisme de formatage de chaque réponse.** Lorsqu'un cycle est actif, le CKC correspondant aide Nora à **orienter la démarche au fil du temps** : les objectifs qu'elle garde en vue, les questions qu'elle pose, les dimensions qu'elle examine, les angles morts qu'elle signale, les recommandations qu'elle formule, les éléments documentaires pertinents qu'elle propose et son appréciation progressive de la maturité.

**Activation simple retenue au niveau de la vision : cycle actif → CKC associé à sa nature.** Ce rattachement évite de construire sans preuve de valeur un second moteur de sélection et de composition de CKC à chaque question. **Pas de déclenchement dynamique général des CKC hors cycle** dans le périmètre initial : Nora reste compétente et disponible sans cycle grâce à ses capacités générales. Ce principe d'activation ne présuppose ni registre, ni index, ni binding technique historique.

**Guidance, pas nouvelle autorité :**
- **Orientation méthodologique :** finalité, posture de travail, dimensions d'investigation, vigilance, stratégie de progression et questions utiles.
- **Recommandations contextuelles :** livrables envisageables, qualité des acquis, maturité, réserves ou prochaines investigations ; à adapter au cas réel et à discuter avec le Pilote.
- **Exigences opposables :** une recommandation du CKC ne devient pas un gate par elle-même. Seules les décisions humaines, règles de sécurité, contrats et obligations de gouvernance effectivement applicables déterminent ce qui est obligatoire.

**Continuité et digressions :** Nora peut répondre à des demandes incidentes, analyser des PR ou intervenir ponctuellement sur un autre thème sans modifier automatiquement le CKC actif ni rabattre toute réponse sur le langage du cycle. Le CKC soutient **la direction durable du travail principal**, pas une contrainte sur chaque échange. Lorsqu'un nouveau sujet constitue un chantier autonome, Nora peut recommander une requalification ou une future transition, sous arbitrage du Pilote.

**Format et efficacité à démontrer :** la matière historique CKC (finalité, posture, stratégies, dimensions d'analyse, attentes de preuve, maturité, risques) est une capitalisation utile, **pas un schéma ou runtime Next adopté**. R2 devra concevoir les comportements, contrats et limites ; R3 leur matérialisation UX ; R4 le chargement, l'application, la sécurité et les coûts ; R5/R6 éprouver l'effet réel sur la conduite des cycles, sans imposer l'injection exhaustive du CKC à chaque message.

**Prochaine question R1, non encore arbitrée :** comment Nora apprécie-t-elle que le cycle est « suffisamment mûr » pour proposer la clôture, avec des critères évolutifs, des preuves proportionnées et des réserves explicites, **sans réintroduire une checklist bloquante ou une clôture automatique** ? Cette analyse n'est pas incluse comme spécification validée par la présente consolidation.

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

Cette chaîne est une **hypothèse de parcours à spécifier**, pas un moteur, un écran, une suite de statuts implémentée ou une architecture adoptée. Elle **n'impose ni création formelle d'une Mission ni présence de projet/cycle actif** pour lancer une activité cognitive ; la formalisation et les gates dépendent de la portée des effets et des besoins de continuité (voir §2.15).

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
1. **Autonomie et reprise : orientation validée.** À définir en R2/R4 : exécution prolongée, conservation/revocation du mandat, suspension humaine opposable, reprise automatique seulement pour blocage technique et contrôle d'état réel.
2. **Clarification proportionnée : orientation validée.** À préciser : critères de blocage, seuil de questionnement, réutilisation des réponses et cas d'incertitude non bloquante.
3. Comment Nora rend-elle visibles **ses limites réelles**, le degré de confiance, ses sources et les contradictions sans polluer la conversation ?
4. **Restitution proportionnée et notifications : orientation validée.** Reste à spécifier en R2/R3 les conditions de notification, la disponibilité des preuves consultables, le niveau d'urgence et le contenu UX sans rigidité.
5. **Suspension partielle sous preuve d'indépendance : orientation validée.** Reste à spécifier la couverture des dépendances, les scénarios d'incertitude, le statut réel des outils et la reprise sans transcript exhaustif.
6. Comment les capacités techniques sont-elles découvertes, sélectionnées, remplacées et réessayées sans engager d'effet non autorisé ?
7. Comment soutenir une **digression hors projet** sans perdre l'intention centrale ni imposer de recadrage automatique ?
8. **Mémoire vivante transverse : intention validée.** À préciser en R1/R2 : seuil de pertinence, reconnaissance de décision, vérification de provenance, évolution/supersession, recherche contextuelle, confidentialité, reprise inter-sessions et visibilité au Pilote.
9. **Distinction conversation / autorité : orientation validée.** À concevoir et prouver : quand un échange devient une décision durable ou un acte d'autorité effectif, comment éviter confirmations redondantes et droits implicites, et comment établir les contrôles proportionnés.
10. **Hiérarchisation autonome et quatre vues : orientation validée.** À concevoir/tester : seuils d'émergence d'un sous-sujet, scission/fusion/déplacement, traçabilité et identité indépendantes du classement ; relations entre Sujets, Réserves, Recommandations et Décisions, récupération pertinente, coût et preuves de non-altération des décisions.
11. **Questions ouvertes : orientation validée.** À éprouver : pertinence et priorité sans vieillissement arbitraire, relances contextuelles, résolution étayée sans usurper de décision, réouverture fondée et conservation du suivi.
12. **Investigation multi-sources et exploratoire : orientation validée.** À concevoir : accès, découvertes inter-sources, provenance/versions, limites de mandat, recherche documentaire, Git/PR, preuves, mémoire, pièces jointes et web ; coût, latence, restitution et arrêt de recherche.
13. **Capitalisation documentaire : orientation validée.** À qualifier dans les macro-lots : synchronisation Git utile, sources primaires, rôles Pilote/Nora, risques de contradictions et conservation des permissions.
14. **Nora transverse, cycles non obligatoires : orientation validée.** À spécifier : activité hors projet/cycle, contexte de navigation et accès, seuil de formalisation d'un travail, conditions de délégation hors cycle et articulation avec trajectoires et cycles.
15. **Cycle léger, ouverture et clôture : principes validés.** À concevoir : GO conversationnel sans confirmation redondante, traçabilité d'état, matérialisation UX des transitions, rattachement à la trajectoire et limites des gates réellement applicables (§2.16).
16. **CKC de conduite méthodologique rattaché au cycle : principes validés.** À concevoir et éprouver : contribution sur la durée, contenu et format, pertinence des suggestions, gestion des digressions et absence de moteur de sélection CKC hors cycle par défaut (§2.17).
17. **Maturité du cycle et recommandation de sortie : question ouverte R1.** Définir comment Nora évalue les acquis, les réserves, les dépendances et la suffisance pour recommander la clôture sans imposer une checklist documentaire ni clôturer automatiquement.

## 7. Références fondatrices et traçabilité

- [Schémas de vision originaux et index](vision-cible/README.md).
- [Pilote ↔ Nora ↔ capacités](vision-cible/assets/01-pilote-nora-capacites.png).
- [Cockpit et responsabilités conceptuelles](vision-cible/assets/02-cockpit-architecture-conceptuelle.png).
- [Mission gouvernée et restitution](vision-cible/assets/03-mission-execution-restitution.png).
- [SEF v0.2](../governance/SEF.md) et [Roadmap Next](../governance/roadmap.md).
- [Convention de nommage validée](../governance/product-naming-conventions.md).

**Validation consommée le 2026-11-01 :** Morris a confirmé la cohérence de la carte Pilote/Nora, a développé l'exigence de fluidité et de réalisation cognitive directe, puis a demandé l'intégration dans Git d'une **première base structurée et validée**. L'approbation porte sur l'**orientation de vision et les principes ci-dessus**, pas sur les détails fonctionnels encore marqués hypothétiques ni sur la solution technique.

**Complément de vision (2026-11-01) :** Morris a précisé l'initiative déclenchée par l'intention, la contradiction constructive, le dialogue adaptatif et la capacité à conduire une mission en autonomie dans un mandat déjà établi. Ces orientations sont intégrées aux sections 2.1 et 2.2 ; les mécanismes de disponibilité, persistance, autorisation et exécution restent à spécifier et prouver.

**Précisions et validation du 2026-11-01 (v0.3) :** Morris valide l'adaptation stratégique tant qu'elle respecte le résultat et les étapes explicitement prescrites ; accepte la poursuite partielle **conditionnée à une identification fiable et vérifiable des impacts** ; valide la notification différée pour une suspension maîtrisée sans arbitrage et l'intervention immédiate lorsqu'une décision ou un risque l'exige. Ces orientations figurent en §2.3–2.5, sans validation de mécanismes de preuve ou d'architecture non conçus.

**Précisions et validation du 2026-11-01 (v0.4) :** Morris confirme l'interdiction de lever automatiquement une suspension explicitement décidée par le Pilote ; valide la distinction entre **reconnaissance conversationnelle d'une décision** et **formalisation proportionnée à ses effets** ; confirme l'objectif historique d'une **mémoire vivante de projet**, transverse, évolutive et exploitable par le Pilote comme par Nora. Les §§2.6–2.8 portent ces orientations. Les choix de modèles, persistance, extraction et mécanismes d'autorité restent ouverts ; §2.9 capitalise les observations historiques et hypothèses sans les transformer en décisions techniques.

**Précisions et validation du 2026-11-01 (v0.5) :** Morris confirme l'autonomie de Nora dans la **création et la réorganisation hiérarchique de sujets et sous-sujets**, une mémoire pouvant évoluer et être restructurée au fil de la conversation, et la **conservation des quatre familles du journal** — Sujets, Réserves, Recommandations et Décisions — avec des relations explicites et sans soumission du cycle de vie d'une décision au classement d'un sujet. Les §§2.10–2.11 matérialisent cette orientation produit ; la classification, les vues, les contrats et les contrôles restent à concevoir et prouver.

**Précisions et validation du 2026-11-01 (v0.6) :** Morris valide la **proactivité contextuelle de Nora pour suivre les questions ouvertes**, l'absence de dépriorisation par simple ancienneté et la **résolution sémantique autonome lorsqu'elle est factuellement étayée** sans substitution à un arbitrage humain. Il confirme la **recherche autonome, multi-sources et exploratoire** à partir de ses références initiales, libre de suivre les pistes utiles dans les permissions et le périmètre de mission ; la mémoire vivante reste complémentaire de Git, documentation, décisions et preuves. **Pièces jointes et recherche web** sont des capacités envisagées à cadrer ; les fonctions, contrôles et intégrations ne sont ni spécifiés ni implémentés. Morris rappelle sa responsabilité de Pilote pour le contexte et la gouvernance documentaire, avec contribution de Nora sous mandat. Ces orientations sont exposées en §§2.12–2.14 ; aucun mécanisme, index, outil, état ou choix d'architecture technique n'est adopté par cette validation.

**Précisions et validation du 2026-11-01 (v0.7) :** Morris confirme que **Nora doit pouvoir être sollicitée dans tous les contextes de Studio** — hors projet, accueil/portefeuille, projet sans cycle et cycle actif — et reconnaître naturellement les travaux demandés sans exigence de « créer une mission » ou démarrer un cycle. Le cycle et la trajectoire gardent une valeur d'organisation et de **spécialisation cognitive**, notamment via les **CKC** cités par Morris ; leur contribution exacte et l'architecture Next sont encore à concevoir. Nora peut recommander ce cadre, sans décision métier ni autorisation implicite. Les modalités d'exécution hors projet/cycle et les règles de rattachement restent ouvertes (§2.15).

**Précisions et validation du 2026-11-01 (v0.8) :** Morris valide **un cycle léger et significatif** pour conduire une phase, suivre sa progression et marquer ses transitions, sans mission/cycle préalable obligatoire pour tout travail de Nora ni artefacts/gates déclenchés automatiquement par le cycle. Nora peut recommander l'ouverture ou la clôture ; **le GO explicite du Pilote peut être conversationnel**, sans clic redondant, tandis que la transition doit être **visuellement identifiable** et effectivement enregistrée. Morris confirme le **CKC associé au cycle actif**, sans activation autonome générale hors cycle, comme **spécialisation de la conduite méthodologique de Nora dans la durée**, et non format de ses réponses ou autorité imposant des livrables. Les contrats de maturité, clôture, UX et architecture restent à concevoir ; l'appréciation de la sortie est le prochain sujet R1 (§§2.16–2.17).

**Politique d'entretien :** enrichir ce **même document vivant** lors de nouveaux arbitrages significatifs ; préserver une trace concise du statut et des conséquences. Ne pas créer un micro-document ou une PR par idée. Un point discuté mais non tranché demeure « à challenger », sans devenir une décision par reformulation.
