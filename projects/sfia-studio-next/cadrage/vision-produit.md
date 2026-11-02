# SFIA Studio Next — Vision produit : relation Pilote ↔ Nora

| Champ | Valeur |
| --- | --- |
| Jalon | **R1 — cadrage produit, CLOSED BY MORRIS WITH CARRIED RESERVES (2026-11-02)** |
| Version du document | **0.15 — cadrage R1 clôturé** ; neuf domaines, sept scénarios E2E et quatre qualifications méthodologiques R2 |
| Statut du contenu | **R1 CLOSED BY MORRIS — WITH CARRIED RESERVES** ; vision, 9 domaines, 7 E2E et frontières validés ; contrats R2, UX R3, architecture R4, code et preuve runtime **NON VALIDÉS / NON IMPLÉMENTÉS** |
| Autorité | Morris : validation des principes de vision ; arbitrages ultérieurs requis sur les sujets ouverts |
| Nature | Cadrage de l'expérience et des responsabilités, **pas** spécification fonctionnelle exhaustive, maquette UX, ADR, code ou preuve REAL |
| Produit | **SFIA Studio** ; **Studio Next** désigne le programme de reconstruction |
| Références | SEF v0.2 ; Roadmap Next ; décision R0-A/R0-B ; convention de nommage validée ; trois schémas originaux de `vision-cible/` |

**État courant :** décision humaine de sortie du cadrage R1 le **2026-11-02**, [Decision Record](../governance/decisions/2026-11-02-r1-cadrage-formal-exit.md). Les mentions historiques « R1 IN PROGRESS » ou « exit candidate » dans les sections antérieures documentent l'état lors de leur rédaction ; elles **ne remplacent pas cette décision actuelle**. L'intégration Git sur `main` reste un événement distinct, à prouver après PR/merge.

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
- **Offrir au Pilote une consultation naturelle** : deux vues dédiées **Sujets** et **Décisions**, avec accès transversal aux **points ouverts** (réserves, blocages, questions), sans faire du journal le seul écran de pilotage (§2.11).
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

### 2.11. Journal du projet — deux vues principales et accès transversal aux points ouverts (révision validée le 2026-11-02)

**Statut : VALIDATED BY MORRIS — cette révision remplace l'orientation initiale à quatre vues.** Le Pilote conserve **deux vues principales**, **Sujets** et **Décisions**, et dispose d'une **lecture transversale des points ouverts** (réserves, blocages, questions et autres conditions non résolues). Les catégories de connaissance continuent d'exister lorsqu'elles apportent une valeur ; leur existence ne justifie pas un onglet ni un moteur distinct.

| Surface fonctionnelle | Rôle et frontières |
| --- | --- |
| **Sujets — vue dédiée** | Organisation vivante des thèmes et sous-sujets ; contexte, synthèses, points établis, questions, réserves et recommandations pertinentes dans leur contexte ; références et évolution. Nora réorganise les sujets sans altérer l'autorité des décisions. |
| **Décisions — vue dédiée** | Arbitrages effectivement pris par le Pilote, avec auteur, portée, origine, état applicable, révisions, remplacements et historique ; consultables indépendamment de la classification des sujets. |
| **Points ouverts — accès transversal** | Vision et récupération **inter-sujets** des questions non résolues, réserves significatives, blocages, contradictions et conditions à lever, avec sujet d'origine, pertinence, état et suites utiles. **Ce n'est pas une troisième vue permanente équivalente aux deux premières ni un nouveau moteur** ; présentation exacte (filtre, synthèse, accès contextuel) à concevoir en R3. |

**Recommandations : pas de vue dédiée.** Nora formule librement des options, recommandations et prochaines étapes. Lorsqu'elles sont utiles à la compréhension ou à la continuité, elles restent **contextualisées et retrouvables** dans leurs sujets, conversations et références pertinentes. Il n'y a ni obligation d'archiver toutes les suggestions passagères, ni collection indépendante à entretenir pour le Pilote. **Recommandation ≠ décision humaine ≠ autorisation d'exécution.**

**Réserves : suivi durable proportionné, sans vue dédiée.** Une réserve significative, un blocage ou une condition de sortie ne disparaît pas parce qu'un sujet est déplacé, qu'une conversation change ou que le cycle progresse. Le Pilote et Nora peuvent retrouver et examiner ces **points ouverts transversalement** ; une résolution factuelle doit être étayée, tandis qu'une acceptation de risque ou une levée requérant l'autorité du Pilote ne peut être déduite de Nora. Une réserve ne crée pas automatiquement un gate : seules les obligations réellement applicables sont opposables.

**Continuité et séparation des responsabilités :** les décisions sont conservées par la gouvernance, avec leur propre statut ; le journal les expose sans être source d'autorité concurrente. Les sujets, questions, réserves et recommandations utiles peuvent être reliés aux décisions, sans qu'une opération sémantique ne les réécrive. La consultation transversale des points ouverts est **une manière de voir et de retrouver** la connaissance, pas une autorité additionnelle ni un état parallèle.

**Traçabilité de l'arbitrage remplacé :** les quatre vues historiques **Sujets / Réserves / Recommandations / Décisions** avaient été conservées par principe dans une orientation R1 antérieure ; Morris décide désormais **de ne garder que Sujets et Décisions en vues dédiées**, avec l'accès transversal aux points ouverts. L'ancien modèle reste une source d'historique, **non le contrat produit courant**. Contrats de recherche, identité de sujets, droits, état, accessibilité et représentation UX : **R2–R4** ; preuves : **R5–R6**. **Studio Next : N/A — NON IMPLÉMENTÉ.**

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

### 2.15. Nora dans le sas et le projet ; consultation interprojets en lecture — orientation révisée validée

**Périmètre d'accès simplifié (arbitrage Morris du 2026-11-02) : Nora est accessible uniquement dans le sas de création de projet et dans l'espace conversationnel d'un projet créé.** Le **cockpit / tableau de bord / portefeuille initial n'expose pas Nora comme assistant conversationnel** : il sert à visualiser, naviguer et accéder aux projets. Ce choix **remplace explicitement l'orientation antérieure v0.7** qui envisageait Nora « disponible partout dans Studio ». La valeur d'une conversation autonome globale hors de ces deux contextes n'est pas retenue pour le périmètre initial.

**Contextes cibles :**
- **Sas de création, avant existence du projet :** Nora explore et préqualifie librement l'intention dans le parcours conservé en §2.20 ; elle peut rechercher des sources accessibles et proposer un nom, un cadrage initial et une trajectoire. Le Pilote décide de créer le projet via « Créer le projet ». Le sas n'est ni un écran de pilotage du portefeuille, ni un contrat de modification d'autres projets.
- **Espace projet créé sans cycle actif :** Nora reste pleinement disponible pour explorer, rechercher, analyser, concevoir, recommander, rédiger et préparer des travaux ; **aucun cycle ni CKC actif n'est exigé pour l'aider**. Les effets de modification ou délégation restent soumis aux autorisations applicables.
- **Espace projet avec cycle actif :** Nora conserve ses capacités générales ; l'objectif et les acquis du cycle ainsi que son CKC orientent méthodologiquement la conduite du travail, sans nouvelle autorité ni restriction artificielle à un format de réponse.
- **Cockpit/portefeuille :** pas de surface conversationnelle Nora et pas de mode de mission transverse. Une synthèse ou navigation de portefeuille relève de l'interface ou d'autres capacités à examiner séparément si un besoin concret apparaît ; **aucun assistant global Nora n'est décidé**.

**Un projet de référence pour le travail :** dans l'espace projet, Nora mène le travail au titre **du projet courant** et de sa gouvernance, même si la demande nécessite une investigation ailleurs. Le changement de projet de référence ne découle **pas** de la simple mention d'un autre projet, de la recherche ni d'une digression. L'expérience de navigation entre projets et la continuité de leur propre historique restent à spécifier en R2/R3. **Le pilotage simultané de plusieurs projets par une même mission Nora n'appartient pas au périmètre initial.**

**Consultation interprojets, sans pilotage interprojets :** depuis le projet A, Nora peut découvrir, consulter, confronter et citer les informations du projet B **uniquement dans les droits de lecture effectivement accordés** et selon les restrictions de confidentialité/provenance applicables. Ces éléments constituent des sources pour le travail et les recommandations **rattachés à A**. Cette possibilité ne crée **aucun mandat de modification de B**, n'active aucun de ses cycles et ne rend aucune décision ou autorisation de B automatiquement applicable à A. Une action réelle sur B requiert son contexte et les autorisations explicites correspondants ; elle ne doit pas être masquée sous un contrat d'A.

**Contexte d'expérience ≠ source consultée ≠ autorité :** le sas ou le projet ouvert définit le contexte conversationnel ; le contenu recherché peut provenir d'autres projets dans les accès autorisés ; le périmètre d'effets reste celui que le Pilote a effectivement approuvé et que Studio contrôle. Une décision de B peut être citée comme fait historique, jamais importée tacitement comme décision du projet A.

**Reconnaissance naturelle du travail :** le Pilote n'a pas à créer un objet « Mission » ni ouvrir un cycle pour poser une question ou solliciter une analyse dans ces contextes. La nécessité d'un contrat d'exécution dépend des **effets réels et des contrôles d'autorité**, pas du seul mot « mission » ou de la présence d'un cycle.

**Frontières de conception R2–R4 :** rattachement fiable au projet courant, reprise des conversations, disponibilité de sources interprojets, habilitations de lecture, citations/provenance, non-propagation des droits et décisions, et différence de conduite de Nora avec/sans CKC. Ne pas créer de moteur transverse de projets ou de système de permissions parallèle avant de justifier un cas d'usage. **Next : N/A — NON IMPLÉMENTÉ.**

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

**Point approfondi en §§2.18–2.19 :** l'appréciation proactive de maturité et l'évolution de la trajectoire sont validées comme principes de vision. Les critères opérationnels, les seuils, les déclencheurs, les règles d'enregistrement et les scénarios d'échec restent à spécifier en R2/R4 ; aucune checklist ou clôture automatique n'est instituée.

### 2.18. Maturité proactive et recommandation de clôture — orientation validée

**Nora apprécie de manière continue, contextuelle et proactive la maturité d'un cycle actif**, sans attendre une sollicitation explicite du Pilote du type « avons-nous terminé ? ». Elle sait recommander d'approfondir, de réorienter, de traiter un véritable blocage, ou de proposer une sortie lorsque les acquis deviennent suffisamment solides. **L'appréciation n'est pas une évaluation exhaustive à chaque message ni une notification répétitive** : elle se nourrit des évolutions significatives des échanges, des résultats, des sources et des dépendances.

**Une appréciation argumentée plutôt qu'une checklist obligatoire :**
- **Finalité et résultats :** les objectifs déterminants du cycle ont-ils été atteints à un niveau suffisant pour la prochaine étape ?
- **Solidité des acquis :** quels faits, décisions, documents et résultats sont étayés ; quelles hypothèses ou contradictions demeurent ?
- **Réserves et dépendances :** qu'est-ce qui bloque effectivement le passage à la suite, qu'est-ce qui peut être reporté explicitement et sous quelle responsabilité ?
- **Continuité vers la suite :** la prochaine étape pourra-t-elle reprendre le contexte, les décisions applicables, les connaissances et les travaux nécessaires sans perdre les points ouverts ?

Ces dimensions sont des **repères de raisonnement**, non quatre gates automatiques, et pourront évoluer à mesure que Nora découvre les besoins réels de la mission. Une question ouverte ne bloque **pas** automatiquement le cycle ; une contradiction structurante ou une obligation effectivement applicable peut en revanche empêcher de conclure honnêtement à une maturité suffisante.

**Rôle unifié du CKC :** la même guidance méthodologique qui oriente les investigations, la conduite du travail et les éventuels livrables recommandés doit également orienter l'appréciation de maturité. **Aucun second moteur méthodologique concurrent** ne doit produire des critères de sortie incompatibles avec ceux du CKC. Le contenu, le format, les repères de maturité et la manière d'appliquer cette guidance constituent **des axes d'amélioration potentiels à étudier en R2/R4**, pas des contrats techniques adoptés.

**Restitution et autonomie bornées :** Nora explique au Pilote pourquoi elle recommande une clôture ou un approfondissement, les preuves pertinentes, les réserves et le degré d'incertitude. **Elle ne clôture pas automatiquement** : la transition attend le GO explicite et applicable du Pilote, puis l'enregistrement réel par Studio. Un GO ne peut écarter silencieusement les obligations de sécurité, de publication Git ou les conditions d'autorité réellement applicables.

**Illustration cible :** en cadrage, Nora peut juger la vision suffisamment claire pour préparer R2 malgré des questions techniques reportables à R4, mais pas si la responsabilité décisionnelle Pilote/Nora demeure contradictoire. L'exemple ne préjuge pas du verdict réel sur le R1 du programme Next, actuellement **IN PROGRESS**.

### 2.19. Trajectoire de projet initiale, prévisionnelle et évolutive — orientation validée

**Dès la qualification initiale de l'intention du projet, Nora propose avec le Pilote une trajectoire de travail cohérente** : les grandes étapes envisagées, leur finalité, leurs dépendances pertinentes et l'ordre initial. La trajectoire fournit au Pilote et à Nora **une ligne conductrice**, mais **les étapes futures restent des hypothèses réévaluables**, pas des cycles déjà autorisés, exécutés ou promis. Seul le cycle effectivement ouvert possède un état actif vérifié.

**Règles de fonctionnement de vision :**
- **Trajectoire vivante :** sa projection peut évoluer à partir des échanges, des acquis, des dépendances découvertes et des recommandations de Nora ; modification du plan ≠ modification rétroactive des faits et décisions déjà enregistrés.
- **Prochaines étapes prévisionnelles :** changer leur ordre, ajouter, différer ou retirer une étape peut être proposé si cela améliore la capacité à atteindre la finalité du projet. Les arbitrages structurants restent du ressort du Pilote ; Nora n'affirme pas avoir révisé la trajectoire effective sans enregistrement.
- **Avancer, approfondir ou revenir :** depuis un cycle de conception fonctionnelle, Nora peut recommander d'instruire un sujet d'architecture avant l'UX, ou d'approfondir un manque du cadrage. **Toute correction ne requiert pas la réouverture administrative d'un cycle achevé** ; la portée, les dépendances, les impacts et les gates applicables déterminent la nécessité d'une requalification.
- **Transition dans la continuité :** en approchant de la sortie, Nora confronte la maturité du cycle actif à la trajectoire courante, recommande la meilleure suite et explicite ce qui est terminé, transmis, reporté ou encore incertain. Le Pilote autorise les transitions nécessaires.
- **GO naturel et séquence contrôlée :** un même GO explicite peut viser à la fois la clôture du cycle courant et l'ouverture du suivant, sans confirmations redondantes. Studio vérifie **séparément et dans un ordre cohérent** les conditions applicables, enregistre chaque effet réellement accompli et restitue honnêtement un échec partiel ou un STOP ; un GO commun n'est ni une garantie d'atomicité, ni une dérogation aux gates.
- **Visibilité dans Studio :** une vue de trajectoire accessible depuis l'expérience du projet, éventuellement inspirée du panneau latéral historique, présente étape active, progression, étapes envisagées et réorientations proposées. **Aucun écran, widget ou modèle d'état UX n'est validé** ; la matérialisation relève de R3.

**Exemple fondateur du programme de construction Next :** R0 gouvernance → R1 cadrage en cours → R2 conception fonctionnelle → R3 UX → R4 architecture → R5 construction → R6 qualification. Cette trajectoire **appartient au SEF et à la Roadmap du chantier réel** et conserve ses décisions, gates Git et critères de sortie applicables ; elle illustre la valeur de visibilité et la possibilité de réévaluation, **sans autoriser un changement de la baseline ou de l'ordre effectif par simple hypothèse**. Le futur produit Next ne doit ni confondre ses cycles runtime avec ces jalons de construction, ni copier leur mécanisme par inertie.

**Conception ultérieure, sans mécanisme supplémentaire prématuré :** qualification du projet, rattachement des cycles, évolution de trajectoire, droits de modification, prévention des incohérences d'état, reprise après échec, trace et modèles UX seront traités en R2–R4 avec scénarios vérifiables. Le besoin de trajectoire dynamique **ne justifie pas, à lui seul, un nouveau moteur d'orchestration**, une deuxième mémoire ou un système de gates parallèle.

### 2.20. Sas conversationnel de création et continuité dans l'espace projet — principes validés

**Le sas conversationnel de création de projet est conservé dans son principe.** Il offre au Pilote un espace d'expression libre de l'intention et permet à Nora d'explorer, analyser, questionner, rechercher dans ses accès autorisés, confronter des scénarios et **préqualifier progressivement** le projet. Le sas n'est **ni un formulaire imposé, ni une qualification exhaustive obligatoire, ni un simple bouton de création** : Nora peut déjà aider utilement avant qu'un projet existe.

**Compréhension et aperçu évolutifs, proportionnés à l'intention :** Nora propose progressivement un nom de projet, une finalité, les éléments de contexte et contraintes identifiés, les sujets à clarifier, puis une **trajectoire macro prévisionnelle** et une orientation de premier cycle **si les informations disponibles le permettent**. Les questions sont ciblées sur ce qui importe pour créer correctement le projet et préparer le travail, sans dérouler obligatoirement tout le cadrage produit. Les scénarios restent discutables ; une suggestion de Nora n'est pas un choix du Pilote.

**Deux seuils distincts, sans gate artificiel :**
- **Projet prêt à être créé :** l'intention et une identité/contexte minimum suffisants rendent possible la création d'un espace projet durable, même si une partie du démarrage méthodologique reste à qualifier. **Une trajectoire intégralement définie n'est pas un prérequis systématique**.
- **Premier cycle prêt à démarrer :** choix du type de cycle, de sa finalité et de sa place dans la trajectoire, puis **GO explicite du Pilote après la création**, depuis l'espace projet conversationnel. Le clic **« Créer le projet » ne démarre aucun cycle, n'active aucun CKC et ne confère aucun mandat d'exécution technique**.

**Acte de création explicite conservé :** le Pilote décide de créer effectivement le projet via l'action visible **« Créer le projet »** dans le sas ; contrairement à une confirmation redondante, ce geste matérialise la création d'un nouvel espace durable. Nora n'assimile pas une intention formulée ou une préparation suffisamment avancée à une création effective. Studio doit enregistrer le projet, puis confirmer le résultat avant d'ouvrir l'espace correspondant. La sémantique précise d'autorité, d'idempotence et de reprise reste à concevoir.

**Option A validée — continuité visuelle du même fil conversationnel :** après création, le Pilote arrive dans l'espace projet **avec la conversation du sas qui se poursuit visuellement**, et non un nouveau fil imposant une reprise par résumé. Un événement identifiable **« Projet créé »** peut marquer le passage, sans interrompre le dialogue ni obliger le Pilote à répéter ses réponses. La conservation visible de l'échange ne signifie **pas** que l'ensemble du transcript doit être injecté dans chaque contexte modèle ; stratégie de mémoire, reconstruction et persistance relèvent de R2/R4.

**Continuité de compréhension attendue :** Nora doit retrouver, avec provenance et portée, l'intention initiale, les éléments explorés, les sources et documents consultés ou fournis, les contraintes, hypothèses, scénarios, arbitrages effectivement exprimés par le Pilote, réserves, questions ouvertes et trajectoire éventuellement proposée. **Une proposition de cycle ou de trajectoire n'est pas promue silencieusement en décision validée**. Les informations deviennent le contexte initial utile du projet, pas des vérités certifiées par le seul fait de la création.

**Première reprise sans cycle imposé :** dans l'espace projet, Nora peut rappeler brièvement l'objectif, les acquis et les questions utiles restantes, continuer l'analyse et **recommander le premier cycle seulement si pertinent**. Le Pilote peut décider de poursuivre hors cycle. L'ouverture du cycle, quand elle est choisie, constitue la transition distincte décrite en §2.16 ; le CKC correspondant ne devient actif qu'avec ce cycle.

**Résilience et cohérence de la transition :** une création en échec ne doit pas être annoncée comme réussie ; le sas et sa préparation doivent rester récupérables dans les limites de persistance retenues. Une relance ne doit pas créer de doublon injustifié. Un changement de contexte ne doit ni perdre les décisions effectivement prises ni fabriquer un nouveau projet ou cycle par inadvertance. Les états, la reprise et les preuves seront à spécifier et tester en R2/R4–R6.

**Référence UX historique, pas adoption technique :** la maquette Figma P3 « New Project » fournie par le Pilote montre la conversation principale, des suggestions de clarification non obligatoires, un panneau « Aperçu du projet », la distinction entre **projet prêt à créer** et **point de démarrage à clarifier**, et l'action **« Créer le projet »**. Morris souhaite **préserver ce parcours fonctionnel et l'expérience générale**, sans engager une refonte par principe ; les détails visuels, composants, responsive et interactions restent à qualifier dans R3. La présence de ces éléments dans une maquette ne prouve aucun fonctionnement runtime Next.

**Suite R1 :** après consolidation de l'entrée dans le projet, vérifier la cohérence du parcours global Pilote–Nora (début de projet, conduite, actions autorisées, preuves, continuité) et identifier les véritables angles morts avant de proposer la sortie du cadrage. Aucune clôture R1, validation R2 ou adoption n'est déduite de ce principe.

### 2.21. Contrat d'exécution, visibilité Cursor et revue Nora — principes validés

**La boucle de réalisation cible reste simple et gouvernée :** Nora prépare le travail et son contrat → le Pilote inspecte et autorise via **« Exécuter »** → Cursor exécute dans les limites du contrat → Studio recueille les états et retours réellement disponibles → Nora analyse le résultat et les preuves → le Pilote reçoit le verdict et, si pertinent, un **nouveau contrat correctif déjà préparé**, mais **non exécuté**.

**Préparation du contrat par Nora :** à partir de l'intention et de son exploration autonome, Nora qualifie les sources, l'objectif, la portée, les exclusions, responsabilités, impacts, contraintes, permissions, règles de STOP, résultats et preuves attendus. La préparation d'un contrat ne constitue ni exécution ni autorisation. Pour le fonctionnement externe ChatGPT ↔ Cursor de notre chantier, **SFIA v2.6 et son template Git restent canoniques** ; ils constituent une source méthodologique à capitaliser dans la conception produit, **pas une adoption implicite d'un format de contrat runtime Next**.

**Présentation Pilot-first et transparence technique :** le Pilote voit prioritairement une représentation **intelligible et fonctionnelle** du travail autorisé (but, actions envisagées, limites, conséquences, résultats attendus). Un **bloc repliable** permet aussi de consulter **l'instruction technique exacte qui sera transmise à Cursor**, avec son périmètre et sa version, sans la substituer au résumé métier ; la présentation doit protéger secrets et informations sensibles. L'action « Exécuter » porte sur le contrat **inspecté et encore applicable**. Une modification matérielle de l'instruction, du risque ou de la portée doit entraîner la requalification de l'autorisation applicable ; l'UI ne vaut jamais contournement des contrôles d'autorité de Studio.

**Pendant l'exécution : observation par Studio, pas surveillance cognitive permanente de Nora.** Studio peut restituer les **états et événements réellement fournis par l'intégration** : lancement, activité récente, sorties utiles, erreurs, durée et état terminal ou indéterminé, avec provenance, actualité et confidentialité. Il ne doit fabriquer ni avancement, ni pourcentage, ni intervention de Nora dans un travail qu'elle ne voit pas réellement. Cursor reste responsable de l'exécution technique de son contrat, de ses contrôles/STOP et de ses corrections internes autorisées. **Aucun moteur de surveillance de chaque commande, fichier ou événement par Nora n'est retenu** dans la vision initiale.

**Interruption manuelle à étudier, non promise :** le Pilote pourrait demander l'arrêt si l'intégration Cursor et les frontières de sécurité permettent une interruption vérifiable. Il faut distinguer **arrêt demandé**, **arrêt confirmé**, **état inconnu** et **effets déjà produits** ; arrêter le processus ne signifie pas rollback. L'UX et les règles de reprise relèvent de R2–R4, avec preuve à produire en R5/R6. Un mécanisme d'interruption autonome « intelligente » par Nora n'est pas retenu par défaut.

**Retour Cursor → Studio → Nora :** à la fin ou en cas d'arrêt/échec, Studio recueille et conserve dans le rattachement de la mission **ce qui a réellement été reçu et observé** : état, rapport Cursor si disponible, références d'exécution, modifications, résultats de tests, traces et preuves. **Le rapport Cursor reste une déclaration de l'exécuteur**, non une certification indépendante ; Nora le confronte dans ses accès autorisés aux éléments vérifiables (Git, tests, artefacts, écarts au contrat). Si un rapport ou une preuve manque, elle restitue l'incertitude plutôt que d'inventer la conformité. Les identités, la persistance, l'intégrité, les reprises et les sources de vérité techniques restent à définir.

**Trois familles de situations, sans confusion des statuts :**
- **Exécution interrompue, en échec ou incomplète :** distinguer ce qui a été effectivement réalisé, partiellement réalisé, bloqué ou non observable.
- **Exécution terminée, résultat non conforme ou non prouvé :** qualifier écarts, insuffisances de tests, preuves et risques, sans déclarer l'objectif atteint sur le seul « terminé » de Cursor.
- **Exécution terminée, résultat suffisamment étayé :** restituer les résultats, références de preuve et réserves éventuelles, sans transformer la revue de Nora en acceptation métier automatique, merge ou adoption.

**Proactivité post-exécution retenue :** Nora enchaîne naturellement **analyse du rapport → synthèse intelligible au Pilote → recommandation**. Si l'analyse révèle une correction ou un complément réellement utile **à l'intérieur du périmètre initial**, elle peut **préparer spontanément un nouveau contrat d'exécution correctif**, prêt à être inspecté. La proposition doit expliquer son origine, ses objectifs et son lien avec les écarts constatés. **Le nouveau contrat n'est jamais exécuté automatiquement** : le Pilote inspecte et clique de nouveau « Exécuter » pour ce lancement, avec les décisions et autorisations applicables. Une extension de périmètre, un nouvel effet protégé ou un risque non couvert exige le gate correspondant. **Pas de boucle autonome illimitée Nora ↔ Cursor**, ni de second moteur concurrent d'exécution.

**Séparation des responsabilités :** Nora assure la préparation cognitive et l'appréciation post-exécution ; Cursor exécute techniquement ; Studio applique les contrôles d'autorité et conserve les observations ; le Pilote autorise les lancements et arbitre les décisions métier. **Succès technique ≠ conformité démontrée ≠ validation du Pilote ≠ adoption.** Le niveau de preuve, la forme du verdict et les notifications restent proportionnés au risque et au mandat.

**Capitalisation historique, sans reprise par inertie :** les échanges et maquettes Figma P3 montrent un **contrat Pilot-first**, une inspection d'informations techniques, les états « prête / en cours / terminée » et une vue de preuves. L'ancien Studio contenait des mécanismes de lancement, de rapport et d'analyse post-exécution ; leur existence documentaire ou déterministe **ne prouve ni suivi live riche ni interruption REAL fiable dans Next**. Le parcours, la surface UX et la chaîne technique seront qualifiés en R2–R4 et vérifiés en R5–R6 ; **Next : N/A — NON IMPLÉMENTÉ**.

### 2.22. Revue de cohérence R1 — résultat d'analyse, pas nouvelle décision

La revue transverse du parcours Pilote–Nora relève comme **principes déjà stabilisés** la continuité sas→projet, la trajectoire évolutive, le cycle/CKC, la mémoire vivante, l'autonomie bornée et les décisions humaines contextualisées. La présente section consolide le dernier segment **préparation→exécution→retour→revue→suite** qui restait insuffisamment explicité dans le document v0.10.

**À qualifier avant une proposition d'exit R1 :** (a) préciser les conséquences fonctionnelles des frontières désormais arbitrées (Nora dans sas/projet, sources interprojets en lecture, projets Studio individuels et dépôts partagés : §§2.15, 2.23–2.24) ; (b) valider ou corriger la carte des capacités et le périmètre IN/OUT du produit cible ; (c) scénarios de référence complets, exceptions et dépendances significatives ; (d) critères de maturité du cadrage et preuves documentaires/gates réellement applicables. Ces points sont **des axes d'examen**, pas des spécifications déjà arbitrées ni l'autorisation de micro-cycles documentaires.

**Trajectoire de conception :** R2 décrit les interactions, contrats d'exécution, arrêt/reprise, résultats et frontières de droits ; R3 vérifie les représentations UX (contrat métier + détail repliable, activité, verdict, nouveau contrat) ; R4 conçoit les responsabilités et intégrations, dont observabilité/arrêt réel de Cursor ; R5/R6 apportent les preuves de comportement et de qualité. **Aucune architecture runtime, CI Next, résultat REAL, clôture de R1 ou promotion n'est validé par cette consolidation.**

### 2.23. Identité GitHub, accès aux dépôts et exécution Cursor — orientations produit validées, faisabilité ouverte

**Objectif utilisateur :** chaque Pilote se connecte à SFIA Studio avec **sa propre identité GitHub** et mobilise les dépôts Git auxquels il est habilité, sans confinement du produit à `sfia-workspace` ni à une arborescence unique imposée. Les utilisateurs peuvent collaborer sur des dépôts communs selon leurs droits respectifs. Cette orientation ne vaut ni choix de protocole de connexion, ni autorisation automatique de tous les dépôts, ni architecture d'identités déjà conçue.

**Trois responsabilités distinctes :**
1. **Authentifier le Pilote dans Studio :** reconnaître l'utilisateur et associer son espace de travail, ses projets et les autorisations applicables à une identité fiable. **Connexion GitHub ≠ accès illimité à GitHub.**
2. **Autoriser la consultation Git par Studio/Nora :** découvrir, sélectionner et lire les dépôts et ressources effectivement accessibles à l'utilisateur **et autorisés pour l'intégration Studio**, qu'ils soient publics, privés ou partagés selon leurs habilitations. Nora peut retrouver documents, fichiers, historiques, branches et PR utiles, sous traçabilité de provenance et de version. La visibilité publique d'un dépôt n'implique pas son rattachement à un projet Studio ni son droit de modification.
3. **Autoriser les effets Git et l'exécution technique :** la création de dépôt/répertoire, les modifications de fichiers, commits, branches, pushes et PR requièrent un **contrat et des droits d'effet applicables**. Nora prépare et conseille ; Cursor réalise les interventions techniques autorisées. Les droits de lecture de Nora et les droits d'écriture de Cursor **n'ont pas à être identiques**, mais les capacités nécessaires sur la ressource ciblée doivent être réellement disponibles.

**Création Studio indépendante de Git :** le Pilote peut créer son projet dans le sas **sans associer ni créer immédiatement un dépôt Git**. Le besoin de lecture peut apparaître avant tout rattachement d'emplacement d'écriture. Lorsqu'une opération de création/modification documentaire ou technique nécessite un emplacement Git, Nora identifie ou propose **dépôt, organisation éventuelle, répertoire, branche et portée**, sans imposer une configuration initiale systématique. **Le Pilote peut prescrire l'emplacement cible**, qui prime sur une proposition de Nora ; le choix et les effets doivent rester contrôlés. Si le dépôt ou répertoire n'existe pas, une création peut être préparée et confiée à Cursor sous autorisation ; **le seul clic « Créer le projet » ne crée pas automatiquement une structure Git**. La règle historique d'arborescence évoquée par le Pilote doit être retrouvée, évaluée et, si approprié, explicitement confirmée pour Next ; **aucune convention de répertoire ni dépôt par défaut n'est ici adoptée**.

**Accès progressif sans surprise :** privilégier l'autorisation des dépôts et permissions au moment où un usage concret la justifie, tout en permettant une configuration anticipée si souhaitée. Une connexion GitHub peut être valide **sans** qu'un dépôt privé ait été autorisé pour Studio. Lorsqu'un accès manque, Nora explique la limite et sollicite seulement la permission utile ; elle ne présente pas la connexion comme un mandat Git global. Le choix entre GitHub App, OAuth ou autres mécanismes, ainsi que les portées, révocations, organisations et permissions précises, reste **À CONCEVOIR en R2/R4**.

**Cursor : exécuteur indépendant utilisant ses propres accès Git.** L'objectif retenu est de **ne pas transmettre les jetons personnels GitHub de Studio vers Cursor pour les opérations Git ordinaires**. La lecture autorisée par Studio et l'accès Git effectif de l'environnement d'exécution Cursor sont **deux préconditions séparées**, à vérifier sur le dépôt/branche ciblés. L'authentification à Cursor n'établit pas à elle seule l'habilitation Git pour cloner, créer une branche ou pousser.

**Cursor CLI : candidat prioritaire, pas architecture adoptée.** Morris souhaite capitaliser sur son expérience de Cursor REAL via **Cursor CLI**, initialement authentifié via une connexion navigateur au compte Cursor puis utilisé dans une session active. C'est une **préférence d'intégration à examiner**, non une preuve que Studio peut déclencher sans configuration chaque session Cursor d'un Pilote. Il faut distinguer :
- **Usage local mono-utilisateur :** le CLI peut utiliser une session déjà authentifiée dans l'environnement qui l'exécute, sous réserve de vérification des accès Git et du contrat ;
- **Studio hébergé et multi-utilisateur :** le CLI s'exécute dans un environnement serveur ou d'exécution qui **n'hérite pas automatiquement** de la session Cursor ouverte sur le poste ou le navigateur du Pilote. Le rattachement du bon compte, l'isolation entre Pilotes, la persistance/révocation des sessions, les droits Git et l'absence de confusion d'identité doivent être conçus puis démontrés. **Pas de CLI global partagé tacitement entre utilisateurs.**

**Dépôt partagé et travaux concurrents :** plusieurs utilisateurs de Studio peuvent être autorisés à accéder au **même dépôt GitHub**, chacun selon ses permissions GitHub et les accès propres à son exécuteur Cursor. Les interventions simultanées exigent une isolation et une traçabilité des travaux, notamment des branches et des conditions d'intégration ; **l'accès partagé au dépôt ne vaut pas automatiquement projet Studio partagé, conversation Nora commune, décision commune ou autorisation de merge**. **Arbitrage ultérieur :** Morris retient les **projets Studio individuels**, sans mémoire ni décisions automatiquement partagées ; la règle de collaboration limitée aux sources accessibles est précisée au §2.24.

**Frontières de validation :** la cible produit retenue est **authentification GitHub par utilisateur + accès Git délimité + projet créé sans dépôt obligatoire + sélection Git au besoin + exécution Cursor sous accès propres et contrat borné + dépôts partagés possibles**. Les mécanismes d'identité, les conventions de répertoire, les permissions d'organisation, la correspondance session Studio ↔ compte Cursor CLI, la séparation des utilisateurs, la gestion des conflits et le comportement REAL ne sont **pas spécifiés/adoptés**. R2 précise les parcours et contrats ; R3 l'inspection et les demandes d'accès ; R4 l'architecture et les risques ; R5/R6 prouvent les cas réels, dont deux Pilotes et un dépôt partagé. **Studio Next : N/A — NON IMPLÉMENTÉ.**

### 2.24. Projets Studio individuels, collaboration par Git — option A validée par Morris

**Décision de périmètre initial (2026-11-02) : chaque projet Studio relève d'un Pilote individuel.** Chaque utilisateur conserve **ses propres projets Studio, conversations avec Nora, mémoire vivante, trajectoires, cycles, décisions, réserves, recommandations, mandats et autorisations d'exécution**. Il peut posséder plusieurs projets. Aucune synchronisation native automatique de ces éléments entre les espaces de deux utilisateurs n'est retenue.

**La collaboration passe par Git et les autres sources explicitement accessibles et autorisées.** Deux Pilotes peuvent consulter ou intervenir sur un **même dépôt GitHub**, dans des répertoires distincts ou sur des fichiers communs, selon leurs permissions respectives. Le rattachement d'un dépôt commun **ne fusionne pas** les projets Studio, les identités, les conversations, les CKC, les mémoires ou les décisions. **Un dépôt Git partagé ne crée pas un projet Studio partagé.**

**Connaissance partagée sans transfert d'autorité :**
- Nora peut lire les documents, commits, branches, PR et autres références Git accessibles qui ont été produits par un autre Pilote, et en tenir compte pour son projet, en indiquant version, provenance, pertinence et incertitudes.
- Une décision propre au projet Studio B, **non publiée dans une source accessible**, n'est pas automatiquement disponible pour Nora A. Même publiée, elle n'est pas automatiquement une décision du Pilote A ni un mandat applicable à A.
- Une reprise de travail par un autre utilisateur peut exploiter les éléments **effectivement capitalisés et accessibles** ; les conversations privées, les éléments de mémoire non publiés et les autorisations de l'ancien Pilote ne sont pas automatiquement transmis.
- **Aucun moteur de mémoire commune, de conversation multi-Pilotes ni de gouvernance collective native Studio** n'appartient au périmètre initial. Cette exclusion ne supprime ni le besoin de lire des références Git communes ni les contrôles d'accès individuels.

**Interventions concurrentes :** chaque exécution est attribuée à son Pilote, son projet Studio, son contrat et son environnement Cursor autorisé. Avant toute écriture, il faut qualifier le **dépôt, le répertoire, la branche, la référence de base, les fichiers/effets visés et les permissions**. Une modification concurrente significative, une base obsolète ou un conflit doit donner lieu à vérification, requalification ou STOP adaptés ; **pas d'écrasement silencieux**, de merge implicite ni d'autorisation transmise entre utilisateurs. La conception de branches, les erreurs et conflits de travail sont à spécifier en R2/R4, puis à prouver en R5/R6.

**Deux cas à distinguer :** (a) plusieurs projets Studio individuels interviennent dans des sous-répertoires indépendants d'un dépôt commun ; (b) plusieurs projets Studio individuels interviennent sur les mêmes composants ou artefacts, impliquant une coordination Git plus stricte. Dans les deux cas, **Studio ne devient pas un outil de pilotage collectif du projet** par le seul partage du dépôt.

**Conséquences IN/OUT :** IN = projets personnels, consultation des sources Git communes sous droits, travail Git concurrent gouverné par contrats individuels, capitalisation retrouvable dans Git ; OUT initial = projets Studio multi-propriétaires, mémoire/trajectoire/décisions Studio partagées automatiquement, arbitrage métier collectif implicite. La carte complète des capacités et l'acceptation des scénarios end-to-end demeurent **À VALIDER en R1**, pas acquises par cette seule décision.

**Attention au terme « option A » :** il désigne ici le **modèle de collaboration individuel** discuté le 2026-11-02. Il est distinct de l'ancienne **« option A » de continuité visuelle du fil sas→projet** validée en §2.20 ; aucun lien technique ou décisionnel entre ces deux étiquettes temporaires n'est supposé. Le vocabulaire cible doit rester fondé sur les responsabilités (§ conventions de nommage).

**Statut : principe produit VALIDATED BY MORRIS ; contrats R2, UX R3, architecture R4 et preuves R5/R6 non réalisés. Studio Next : N/A — NON IMPLÉMENTÉ.**


### 2.25. Carte des capacités R1 — domaines 3 et 6 arbitrés (2026-11-02)

**Statut : VALIDATED BY MORRIS pour les seules frontières fonctionnelles des domaines 3 et 6 ci-dessous.** Ces arbitrages ont précédé la validation ultérieure du domaine 7 (§2.26) ; **la carte entière, son IN/OUT exhaustif et les scénarios end-to-end ne sont toujours pas validés**. Les mécanismes, contrats, UX, architecture et preuves demeurent à concevoir en R2–R6.

**Domaine 3 — Conduite conversationnelle Pilote–Nora : conduite cognitive complète validée.** Dans le sas de création et l'espace conversationnel du projet courant (avec ou sans cycle actif), Nora :
- **comprend** l'intention, la finalité, les contraintes et le contexte fiable, sans formulaire ni workflow préalable ;
- **prend l'initiative cognitive** pour explorer, questionner utilement, challenger, comparer et recommander sans sollicitation à chaque étape ;
- **produit directement** les résultats cognitifs réalisables et autorisés : analyses, cadrages, conceptions, comparatifs, propositions et documents ;
- **s'adapte** aux informations nouvelles et aux prescriptions explicites du Pilote, en qualifiant impacts, indépendances et blocages significatifs ;
- **maintient la continuité** de l'objectif et des clarifications lors des digressions, interruptions et reprises, dans les limites effectives de la persistance et des accès ;
- **restitue** un résultat exploitable, ses réserves et la suite utile, sans rituel administratif imposé.

**Restitution cognitive structurée et adaptative :** la conduite du domaine 3 comprend le **choix de la forme de restitution** (parcours, tableaux, statuts, liens réels, synthèses, choix interactifs pertinents) et sa composition proportionnée au besoin, sans imposer un template à chaque réponse. Cette capacité a été explicitement validée par Morris dans le scénario E2E 03 (§2.32). Les composants UX, protocoles de rendu et interactions seront conçus en R2–R4, sans autorité métier ou technique supplémentaire.

**Frontière avec le domaine 7 — Réalisation des travaux :** le domaine 3 couvre la conduite et la **production cognitive directe** par Nora. Le domaine 7 porte les **exécutions techniques, délégations et mutations opérationnelles externes gouvernées**, avec leurs autorisations et contrôles applicables ; il ne reprend pas les opérations internes propres aux autres domaines. **Aucune délégation artificielle à Cursor** pour une analyse, un cadrage ou une rédaction que Nora peut réaliser directement ; une éventuelle publication ou mutation Git reste soumise à ses propres permissions/mandats. Les autres comportements du domaine 7 sont consolidés au §2.26.

**Domaine 6 — Décisions et gouvernance : distinction fonctionnelle validée.** Trois niveaux doivent demeurer séparés :
1. **Compréhension conversationnelle :** préférence, clarification ou accord de travail pris en compte par Nora, **sans** création implicite d'un droit technique.
2. **Décision structurante :** arbitrage effectivement exprimé et validé par le Pilote, référencé durablement avec auteur, source, portée, validité et historique ; une révision ou révocation n'efface pas silencieusement les décisions antérieures.
3. **Autorisation ou interdiction opérationnelle :** acte qui commande des effets réels ; **Studio vérifie et applique** l'identité, la portée, l'actualité et les restrictions du mandat. La compréhension ou la reformulation de Nora ne suffit pas à ouvrir un droit d'exécution.

**Responsabilités et invariants du domaine 6 :** le **Pilote** décide, accepte les risques, autorise, suspend ou révoque ; **Nora** détecte et contextualise les arbitrages, prépare les choix, explicite contradictions et conséquences, sans usurper l'autorité ; **Studio** conserve et applique les décisions/mandats opposables. Pas de double validation systématique d'un arbitrage conversationnel clair, mais maintien des actes explicites déjà retenus : **« Créer le projet »** et **« Exécuter »** pour leurs effets respectifs. Une **suspension humaine** ne peut être levée par Nora seule. Les décisions, mémoires et autorisations restent **propres au Pilote et au projet Studio** ; consulter une décision Git d'un autre projet ne la rend ni applicable ni autorisante dans le projet courant. Le journal peut présenter ces éléments sans devenir une autorité concurrente.

**IN fonctionnel confirmé pour ces deux domaines :** conduite cognitive complète et production directe autorisée ; distinction préférence / décision / autorisation ; décisions durables et révisables ; application des restrictions et suspensions humaines ; continuité contextualisée. **OUT :** mission ou cycle préalable obligatoire pour tout raisonnement, délégation cognitive systématique, validation formelle de chaque message, décision métier autonome de Nora, transfert implicite d'autorité entre projets, moteur de gouvernance parallèle.

**Suite :** R1 poursuit la revue des autres domaines, puis les scénarios nominaux et les exceptions. R2 précise règles/contrats/états, R3 l'UX, R4 l'architecture, R5–R6 les preuves. **Studio Next : N/A — NON IMPLÉMENTÉ.**

### 2.26. Carte des capacités R1 — domaine 7 « Réalisation opérationnelle gouvernée » (2026-11-02)

**Statut : VALIDATED BY MORRIS — frontière fonctionnelle et périmètre cible du domaine 7.** Cet arbitrage prolonge la séparation des domaines 3 et 6 (§2.25), sans adopter un moteur technique, un contrat runtime définitif, l'intégration Cursor CLI ou les autres domaines de la carte.

**Finalité utilisateur :** transformer une intention du Pilote en **travail technique ou mutation opérationnelle externe réellement exécutable, bornée et autorisée**, sans lui imposer la rédaction des instructions techniques, sans délégation cognitive artificielle et sans perte de contrôle sur les effets.

**Parcours de référence déjà retenu (§2.21), confirmé pour le domaine 7 :**
1. **Intention :** le Pilote formule le résultat à obtenir ; aucun cycle actif ou objet « Mission » préalable n'est imposé pour formuler la demande.
2. **Qualification et préparation :** Nora consulte les sources autorisées et prépare le périmètre, les exclusions, dépendances, impacts, accès, risques, conditions de STOP, résultats et preuves attendus.
3. **Inspection et autorisation :** Studio présente au Pilote le contrat en langage métier, avec **l'instruction technique exacte et versionnée consultable** ; le lancement technique nécessite l'acte explicite **« Exécuter »** sur un contrat encore applicable. Préparer ou approuver une conception ne vaut pas lancement technique.
4. **Réalisation :** Studio vérifie les mandats et accès applicables, déclenche l'exécuteur pertinent sous le contrat autorisé, puis conserve le rattachement à l'identité, au projet, au contrat et à l'exécution réelle. **Cursor est l'exécuteur technique initial de référence envisagé**, sans validation implicite du choix CLI, de l'architecture hébergée ou de l'isolation multi-utilisateur.
5. **Retour et suite :** Studio ne restitue que les états/événements effectivement observables et les rapports réellement reçus ; Nora analyse ensuite les résultats et éléments vérifiables et peut proposer un contrat correctif, **jamais exécuté automatiquement**. La qualification de la conformité, du verdict et des preuves relève du **domaine 8**, sans certification automatique par le domaine 7.

**Responsabilités :** le **Pilote** prescrit le résultat, inspecte et autorise l'exécution, arbitre les engagements ; **Nora** qualifie, conçoit, prépare les contrats et recommandations, puis apprécie les retours dans ses accès ; **Studio** vérifie et applique l'autorité, pilote le déclenchement et les rattachements d'état ; **Cursor** réalise les travaux techniques, contrôles, tests et STOP autorisés et rapporte ce qu'il a réellement fait. Le clic « Exécuter » ne donne aucun droit général sur le dépôt, l'environnement ou les effets hors contrat.

**Invariants confirmés :** un contrat valide couvre ses opérations sans confirmations intermédiaires artificielles ; un changement matériel de portée, instruction, droits ou risque entraîne requalification et, si nécessaire, nouvel acte du Pilote ; pas de second moteur d'exécution ni de boucle autonome Nora ↔ Cursor ; pas de surveillance cognitive permanente ni de faux pourcentages LIVE ; une suspension humaine demeure opposable ; interruption, échec, exécution partielle, état inconnu et reprise sont distingués, sans supposer qu'une demande d'arrêt prouve l'arrêt ou annule les effets déjà produits. **L'interruption manuelle reste une capacité à étudier et prouver, pas une fonction déjà promise.**

**Frontière de responsabilité avec les autres domaines :** rédiger une analyse relève du **domaine 3** ; organiser sémantiquement la mémoire du **domaine 4** ; ouvrir un cycle du **domaine 5** ; enregistrer/réviser une décision ou un mandat du **domaine 6** ; modifier du code, des fichiers ou des ressources Git via une opération externe gouvernée du **domaine 7** ; évaluer la conformité et les preuves du **domaine 8**. **Toute mutation interne de Studio n'est donc pas une « réalisation opérationnelle » du domaine 7.**

**IN pour le domaine 7 :** préparation des travaux techniques et des contrats bornés ; instruction inspectable ; autorisation de lancement ; contrôles d'accès, de portée et de STOP ; exécution déléguée ; observation et rattachement de ses états/retours ; gestion gouvernée des exceptions et de la reprise selon les capacités prouvées. **OUT :** production cognitive directe de Nora, gouvernance interne de la mémoire/décisions/cycles, certification automatique du résultat, orchestration générique multi-exécuteurs sans besoin démontré ou exécution corrective automatique.

**Dépendances et gates :** domaine 6 pour les autorités ; domaine 8 pour le verdict et les preuves ; domaine 9 pour les effets Git ; R2 pour les contrats, erreurs, reprises et transitions ; R3 pour l'inspection et la visibilité ; R4 pour l'identité, l'intégration, l'isolation et les états ; R5/R6 pour les preuves REAL/E2E. **Studio Next : N/A — NON IMPLÉMENTÉ ; R1 reste IN PROGRESS.**

### 2.27. Carte des capacités R1 — domaine 8 « Résultats et preuves » (2026-11-02)

**Statut : VALIDATED BY MORRIS — frontière fonctionnelle et périmètre cible du domaine 8.** Aucun autre arbitrage de vision n'est nécessaire pour ce domaine avant la revue transversale des scénarios R1 ; les mécanismes de preuve et de verdict restent à concevoir et éprouver en R2–R6.

**Finalité utilisateur :** donner au Pilote un **bilan fiable, vérifiable et compréhensible** de ce qui a réellement été réalisé, de ce qui fonctionne, de ce qui reste incertain et de ce qui peut être considéré comme acquis, **sans confondre déclaration de l'exécuteur, observation technique, preuve de conformité et décision métier**.

**Frontière avec le domaine 7 :** le domaine 7 prépare, autorise, déclenche et suit la **réalisation opérationnelle gouvernée** ; il recueille les états, retours et références disponibles. Le **domaine 8** interprète et confronte ces éléments au contrat et aux critères applicables pour qualifier **résultat, conformité, écarts, réserves et niveau de preuve**. Le domaine 8 **ne déclenche ni exécution technique ni correction automatique**. La production cognitive directe de Nora reste dans le domaine 3, avec ses exigences ordinaires de justesse et de sources : **pas de dossier de preuves techniques systématique pour chaque réponse conversationnelle**.

**Comportements attendus :**
1. **Traçabilité :** rattacher les résultats et références de preuve au Pilote, au projet, au contrat effectivement autorisé, à l'exécution concernée et à ses sources réelles, avec origine et validité utiles.
2. **Vérification proportionnée :** Nora confronte les déclarations de Cursor aux éléments effectivement accessibles et pertinents (diffs/commits Git, rapports et sorties de tests, artefacts, traces ou captures). Un rapport de l'exécuteur reste **une déclaration, pas une certification indépendante** ; un élément inaccessible, absent ou contradictoire demeure explicitement non vérifié.
3. **Qualification honnête :** distinguer **exécution terminée**, **objectif atteint**, **conformité démontrée** et **preuve insuffisante** ; reconnaître notamment l'échec, la réalisation partielle et l'état indéterminé sans fabriquer des résultats ou des garanties.
4. **Restitution Pilot-first :** présenter un bilan court et intelligible, les résultats établis, écarts, réserves, incertitudes et prochaines options ; rendre consultables les références et preuves détaillées lorsque nécessaire.
5. **Continuité :** conserver ou permettre de retrouver les acquis, limites, preuves et réserves dans le contexte du projet et des travaux suivants, sans les promouvoir automatiquement en décision humaine, en validation, en merge ou en adoption.

**Exemple de discernement :** « Cursor indique que les tests ont réussi » et « l'exécution est terminée » ne prouvent pas que les tests ont effectivement été exécutés ni qu'ils couvrent les critères du contrat. Faute de sorties ou d'autres éléments vérifiables, Nora restitue **conformité non démontrée**, même si elle peut proposer un complément ou un nouveau contrat correctif. **Ce nouveau contrat exige toujours l'autorisation applicable avant exécution** (§2.21).

**Responsabilités :** **Studio** conserve et expose les retours et observations disponibles sans en altérer la provenance ; **Nora** analyse, confronte, qualifie et recommande selon ses accès et le risque ; le **Pilote** décide de l'acceptation métier, des réserves et des engagements applicables, dans le domaine 6. **Succès technique ≠ conformité démontrée ≠ acceptation du Pilote ≠ ADOPTED.**

**IN pour le domaine 8 :** résultats des réalisations gouvernées, références et chaîne de provenance des preuves, vérifications proportionnées, bilan de conformité, écarts, réserves, incertitudes et continuité des acquis. **OUT :** moteur universel de tests, certification indépendante non démontrée, validation métier ou adoption automatique, relance technique autonome et formalisme de preuve imposé à toute réponse cognitive.

**Dépendances et gates :** domaine 7 pour la réalisation et ses états, domaine 6 pour les décisions et acceptations, domaine 4 pour la récupération de contexte, domaine 9 pour les références Git. R2 : critères et contrats de preuve, cas d'erreur et statuts ; R3 : restitution et inspection UX ; R4 : provenance, intégrité, accès et persistance ; R5/R6 : tests E2E et preuves observées. **Studio Next : N/A — NON IMPLÉMENTÉ ; R1 reste IN PROGRESS.**

### 2.28. Carte des capacités R1 — domaine 9 « Intégration Git gouvernée et facultative par projet » (2026-11-02)

**Statut : VALIDATED BY MORRIS — frontière fonctionnelle et six conditions du domaine 9.** La revue confirme et organise les principes déjà posés aux §§2.23–2.24, sans adopter un protocole d'authentification, une arborescence, un moteur Git propre à Studio, une intégration Cursor CLI ou une preuve REAL.

**Finalité utilisateur :** permettre au Pilote et à Nora de **consulter, rattacher et mobiliser utilement des ressources Git**, puis de faire réaliser des modifications sous les permissions et mandats nécessaires, sans faire de Git une condition préalable à l'existence d'un projet Studio ni confondre collaboration par dépôt et projet Studio partagé.

**Six conditions de périmètre confirmées :**
1. **Git facultatif par projet :** un projet Studio peut être créé et travaillé sans dépôt associé, même si la connexion de l'utilisateur à Studio repose sur son **identité GitHub personnelle**. Le choix d'un dépôt, d'un répertoire ou d'une branche n'intervient que lorsqu'un besoin réel le justifie ; ni dépôt ni structure Git ne sont créés automatiquement par « Créer le projet ».
2. **Identité individuelle :** chaque Pilote conserve son identité GitHub et ses habilitations propres ; l'authentification à Studio, l'autorisation de consulter un dépôt via Studio/Nora et l'identité/les accès effectifs de Cursor sont **trois responsabilités distinctes**, sans héritage automatique des permissions.
3. **Lectures effectivement autorisées :** Nora consulte seulement les dépôts, branches, documents, PR et autres ressources auxquels le Pilote et l'intégration ont réellement accès ; provenance, version et actualité des sources doivent être discernables. Connexion GitHub **≠** permission globale sur tous les dépôts ni autorisation d'écriture.
4. **Écritures gouvernées :** création de dépôt ou d'arborescence, modification de fichiers, branches, commits, pushes ou PR passent par la qualification des effets Git, du périmètre cible, des droits et du **contrat technique autorisé**, puis une réalisation par Cursor dans le **domaine 7**. Le Pilote peut prescrire l'emplacement Git ; Nora peut le proposer lorsque nécessaire. Lecture permise **≠** modification permise ; aucune autorisation implicite de merge.
5. **Collaboration sans fusion des projets :** plusieurs Pilotes peuvent consulter ou travailler sur un dépôt commun selon leurs droits ; chacun conserve **son projet Studio individuel, ses conversations Nora, sa mémoire, ses décisions, sa trajectoire, ses cycles et ses autorisations**. Une source ou une décision publiée et lisible dans Git reste une référence, jamais un transfert tacite d'autorité vers un autre projet.
6. **Isolation et conflits :** les interventions concurrentes restent attribuées à leur Pilote, projet, mandat, branche, base et environnement d'exécution autorisé. Avant écriture, vérifier ressources, référence de base, portée et droits ; en présence de base obsolète, conflit, révocation ou identité Cursor incertaine, requalifier ou STOP selon le risque. **Pas d'écrasement silencieux, de merge implicite, de partage tacite de session Cursor ni de propagation d'autorisation.** Le fonctionnement concret reste à concevoir et prouver.

**Frontières avec les autres domaines :** le **domaine 9** assure les capacités d'accès Git, lecture, rattachement de sources, provenance, sélection d'emplacements, permissions et contraintes de collaboration ; le **domaine 7** gouverne et déclenche les **mutations et exécutions techniques Git** ; le **domaine 8** examine les références Git comme éléments de preuve ; le **domaine 6** reste responsable des décisions, mandats et interdictions. **Pas de second moteur d'exécution ou de gouvernance dans l'intégration Git.**

**IN du domaine 9 :** rattachement facultatif de ressources Git aux projets, découverte/lecture autorisée, références sourcées et versionnées, sélection progressive des emplacements, vérification des préconditions d'accès et de conflit pour les opérations déléguées, collaboration par sources communes sous droits individuels. **OUT initial :** dépôt obligatoire ou créé automatiquement, permission globale implicite, session Cursor mutualisée, projets Studio multi-propriétaires, partage natif automatique de mémoire/décisions/mandats et intégration Git qui exécute ou approuve indépendamment les opérations techniques.

**Frontières R2–R6 :** R2 spécifiera parcours d'accès/retrait, conditions de contrats, erreurs et conflits ; R3 les choix d'emplacement et demandes d'accès ; R4 les protocoles d'authentification GitHub, l'isolation de Cursor CLI, les secrets, la gestion des branches et de la concurrence ; R5/R6 éprouveront les droits et cas REAL, notamment **deux Pilotes sur un dépôt partagé**. Les conventions historiques d'arborescence restent des sources à évaluer, **non adoptées**. **Studio Next : N/A — NON IMPLÉMENTÉ ; R1 reste IN PROGRESS.**

### 2.29. Carte fonctionnelle consolidée R1 — neuf domaines et IN/OUT (2026-11-02)

**Statut : VALIDATED BY MORRIS au niveau du périmètre et des frontières fonctionnelles de la carte entière.** Les domaines 1, 2, 4 et 5 ont été conservés lors de la revue ; les domaines 3, 6, 7, 8 et 9 ont fait l'objet d'arbitrages détaillés (§§2.25–2.28). La présente consolidation **n'est ni une spécification R2, ni une architecture, ni une preuve, ni un exit R1**.

| Domaine | IN — responsabilité produit retenue | OUT — frontière explicite |
| --- | --- | --- |
| **1. Accès et portefeuille** | Identité du Pilote, accès à ses projets, cockpit de consultation et navigation. | Nora conversationnelle dans le cockpit, pilotage global multi-projets. |
| **2. Création de projet** | Sas conversationnel Nora, qualification progressive, création explicite « Créer le projet », continuité visuelle du fil dans l'espace projet. | Projet créé automatiquement, dépôt Git obligatoire, premier cycle ouvert automatiquement. |
| **3. Conduite Pilote–Nora** | Conversation, initiative, analyse, conception et production cognitive directe dans les capacités et droits applicables. | Délégation technique systématique ou autonomie de décision métier. |
| **4. Connaissance et investigation** | Mémoire vivante du projet ; journal à **deux vues dédiées Sujets et Décisions**, accès transversal aux points ouverts ; réserves et recommandations utiles contextualisées ; investigation multi-sources autorisée et reprise du contexte. | Mémoire comme vérité exclusive, autorité opérationnelle ou partage implicite entre projets ; vues autonomes Réserves / Recommandations imposées. |
| **5. Trajectoire et cycles** | Trajectoire révisable, cycles légers, CKC de guidance lié au cycle actif, appréciation de maturité et transitions gouvernées. | Cycle obligatoire avant toute aide de Nora, CKC comme gate autonome, clôture automatique. |
| **6. Décisions et gouvernance** | Distinction préférence / décision / autorisation, décisions durables, mandats, suspensions et application effective des restrictions. | Décisions métier autonomes de Nora, droits implicites ou validation formelle de chaque message. |
| **7. Réalisation opérationnelle gouvernée** | Contrat technique inspectable, GO « Exécuter », contrôles d'autorité, délégation à Cursor et états réellement observables. | Moteur de toutes les mutations internes Studio, boucle d'exécutions correctives autonomes. |
| **8. Résultats et preuves** | Confrontation des retours et preuves, bilan de conformité, réserves, incertitudes et continuité des résultats établis. | Certificat automatique, acceptation métier ou ADOPTED inféré du succès technique. |
| **9. Intégration Git** | Ressources Git accessibles et sourcées, rattachement facultatif, sélection d'emplacements, contraintes d'accès et collaboration sur dépôt partagé. | Dépôt obligatoire, droits universels, moteur d'exécution parallèle, projet Studio collectif natif. |

**Trois invariants transverses, sans nouveau domaine :**
- **Continuité :** retrouver les faits, les décisions applicables, les travaux, les réserves et les résultats utiles sans dépendance à un transcript unique.
- **Autorité :** la lecture, la recommandation, la connaissance d'une capacité ou une permission d'outil ne constituent pas une autorisation opérationnelle ou métier.
- **Vérité observable :** distinguer action annoncée, rapport de l'exécuteur, résultat effectivement observé et conformité suffisamment démontrée.

**Réserves de maturité déjà identifiées, inchangées :** pièces jointes et recherche web envisagées mais non spécifiées/implémentées ; interruption manuelle Cursor conditionnée à faisabilité, états observables et preuves ; intégration Git/Cursor multi-utilisateur et comportement LIVE/REAL à concevoir et prouver. **Ne pas prétendre disponibles les capacités non démontrées.**

**Capitalisation de l'ancien Studio :** la revue ciblée du PRR, du cadrage Product Completion, des fondations v3 et de surfaces historiques n'a pas conduit Morris à élargir le périmètre R1. Les compléments proposés lors de cette revue **ont été explicitement écartés par Morris pour la vision R1** ; aucune reprise doctrinale, technique ou fonctionnelle supplémentaire n'est déduite de la comparaison.

**Suite du cadrage R1 :** confronter cette carte aux parcours nominaux et aux exceptions end-to-end, puis déterminer les dépendances, les risques, les preuves attendues et les véritables critères d'exit R1. **R1 IN PROGRESS ; R2–R6 non engagés ; Studio Next : N/A — NON IMPLÉMENTÉ.**

### 2.30. Scénario end-to-end R1 — créer un projet et poursuivre la conversation (2026-11-02)

**Statut : VALIDATED BY MORRIS — scénario E2E 01 et arbitrage de reprise du sas avant création.** Validation de l'expérience et de ses invariants ; aucun mécanisme de stockage, d'authentification, de déduplication ni parcours UX détaillé n'est adopté.

**Résultat utilisateur :** le Pilote peut librement préparer une intention avec Nora, retrouver sa préparation même après avoir quitté Studio **sans avoir créé de projet**, puis créer explicitement son projet et continuer le **même fil conversationnel visible** dans l'espace durable, sans cycle ni dépôt Git imposés.

**Parcours nominal :**
1. **Portefeuille :** le Pilote authentifié par son identité GitHub accède à ses projets et à une entrée de création ; aucune conversation Nora globale dans ce cockpit.
2. **Sas :** le Pilote expose librement son intention ; Nora questionne, analyse, propose des scénarios, consulte les sources effectivement autorisées, produit une première valeur cognitive sans qualification exhaustive ni projet créé.
3. **Aperçu évolutif :** Nora propose un nom, la finalité, les contraintes et questions utiles, une trajectoire prévisionnelle et éventuellement un premier cycle. Ces propositions ne valent pas décisions ni créations.
4. **Création autorisée :** lorsque le minimum utile est suffisant, le Pilote déclenche l'acte visible **« Créer le projet »**. Studio vérifie l'identité et réalise l'enregistrement avant d'annoncer la réussite. Aucun dépôt, répertoire, cycle, CKC actif ou mandat technique n'est créé/activé par ce clic.
5. **Continuité sas → projet :** après succès réellement constaté, le Pilote arrive dans l'espace projet en retrouvant la **conversation initiale dans le même fil visuel**, avec l'intention, les informations utiles et leur statut/provenance ; la création peut être signalée sans imposer une réouverture par résumé.
6. **Démarrage libre :** Nora poursuit immédiatement les travaux cognitifs et peut recommander le premier cycle. Le GO de démarrage est distinct et postérieur à la création ; le Pilote peut continuer sans cycle.

**Arbitrage complémentaire explicitement validé — reprise pré-création (option A de ce scénario) :** le sas **doit être récupérable avant toute création effective**, y compris après fermeture du navigateur ou retour ultérieur du Pilote. Il préserve la conversation, les éléments utiles préparés, leurs limites et la possibilité de reprendre. Cet espace en préparation **n'est pas un projet Studio**, ne figure pas comme projet réellement créé et n'acquiert ni autorité de projet, ni cycle actif, ni mandat technique par persistance. Cette option A de reprise est distincte des autres arbitrages nommés « option A » au §§2.20/2.24.

**Exceptions et invariants à couvrir :**
- Quitter et revenir au sas avant création → préparation retrouvable dans la bonne identité, sans création implicite. Politique de conservation, navigation et traitement des abandons : **R2/R3/R4**.
- Double clic, répétition de requête, réponse réseau perdue après création → **pas de doublon injustifié** ; réconciliation avec l'état réel et reprise sûre.
- Échec d'enregistrement → pas de faux succès ; préparation préservée et tentative rejouable selon la situation, sans création silencieuse.
- Expiration/session erronée ou changement de Pilote → pas de transfert de conversation, de brouillon ni de projet à un autre utilisateur ; réauthentification et accès contrôlés.
- Reprise après création → le projet et le contexte sont retrouvables ; propositions de trajectoire et premier cycle **non promues silencieusement en décisions**.
- Accès Git absent → n'empêche ni sas ni création du projet ; le besoin d'une ressource Git sera qualifié au moment approprié.

**Critères d'acceptation R1 à décliner en R2–R6 :** le Pilote peut obtenir de la valeur cognitive avant création ; interrompre et reprendre le sas sans perte injustifiée ; créer **une fois** par acte explicite ; constater le succès réel ; continuer le même fil dans son propre projet ; travailler sans cycle et sans Git. **Preuves attendues ultérieurement :** parcours UX, tests de persistance/reprise, échecs/idempotence/identité, vérification du rattachement et essais E2E réels. **Next : N/A — NON IMPLÉMENTÉ.**

### 2.31. Scénario end-to-end R1 — conduire un projet, sa trajectoire et ses cycles (2026-11-02)

**Statut : VALIDATED BY MORRIS — scénario E2E 02 et arbitrage « un seul cycle actif par projet ».** La règle porte sur **l'état simultané des cycles**, non sur le nombre de sujets qu'explorent Nora et le Pilote ni sur les cycles futurs/terminés d'une trajectoire.

**Résultat utilisateur :** le Pilote travaille naturellement avec Nora et comprend sa progression, la trajectoire envisagée, l'étape méthodologique effectivement active et les conditions d'une réorientation ou d'une transition, **sans que le cycle devienne un préalable à chaque travail**.

**Parcours nominal :**
1. **Projet ouvert, sans cycle :** Nora reprend l'intention, les acquis, les décisions et réserves utiles ; elle peut analyser, investiguer, concevoir, rédiger ou recommander sans CKC actif.
2. **Trajectoire :** Nora propose ou ajuste avec le Pilote une progression macro, des dépendances et cycles possibles ; les étapes futures demeurent **prévisionnelles**, pas des ouvertures ou engagements enregistrés.
3. **Ouverture d'un cycle :** Nora explicite l'intérêt, la finalité, le type de cycle et sa place ; le Pilote donne un **GO clair et applicable**, possiblement conversationnel, sans seconde confirmation rituelle. Studio vérifie qu'aucun autre cycle n'est actif, la portée et les conditions applicables, enregistre l'ouverture puis l'annonce.
4. **Cycle actif et guidance CKC :** **un seul cycle effectivement actif par projet** ; son CKC oriente la conduite méthodologique et la maturité dans la durée. Nora garde la liberté de répondre à des digressions et de travailler sur des sujets connexes sans créer d'autres cycles ni changer automatiquement de CKC.
5. **Progression et réorientation :** Nora enrichit l'analyse, distingue faits/hypothèses/risques/réserves et apprécie proactivement la maturité ; elle recommande poursuite, approfondissement ou évolution de trajectoire, sans mutation décisionnelle implicite.
6. **Clôture et suite :** Nora confronte la maturité, les preuves, les dépendances et réserves à la finalité ; le Pilote autorise la clôture et éventuellement l'ouverture du cycle suivant. Un **même GO explicite** peut porter les deux effets, vérifiés et enregistrés **séparément** dans un ordre contrôlé, avec restitution de tout résultat partiel.

**Arbitrage complémentaire explicitement validé — cycle actif unique (option A de ce scénario) :** **au plus un cycle actif par projet Studio**. Le Pilote peut disposer de plusieurs cycles **proposés, futurs ou terminés** et Nora peut conduire plusieurs analyses pertinentes dans l'unique contexte projet ; cela n'institue ni cycles actifs parallèles, ni CKC concurrents. Réorientation ou transition n'autorise pas Nora à ouvrir/fermer automatiquement un cycle. Une demande de deuxième ouverture alors qu'un cycle est actif doit respecter la frontière : clarifier, proposer une clôture/transition gouvernée ou refuser l'effet incompatible.

**Exceptions et invariants à couvrir :**
- GO imprécis → question proportionnée ; pas de cycle ouvert présumé. GO rejoué → pas de deuxième cycle par accident.
- CKC absent/inaccessible → source manquante et limites signalées, sans invention, sans référence v2.6 réintroduite comme doctrine runtime et sans droit d'exécution supplémentaire ; comportement de dégradation à spécifier.
- Nouvelle dépendance ou incohérence de trajectoire → recommandation de replanification, conservation des faits/actes existants ; pas de modification silencieuse.
- Réserves à la clôture → distinguer blocantes, reportables et non vérifiées ; ni clôture automatique ni certification implicite.
- Clôture du cycle réussie mais ouverture suivante échouée → rendre les **deux effets distincts** et l'état réel ; pas de « tout réussi », pas d'atomicité présumée.
- Redémarrage, changement de session ou conflit concurrent → retrouver la trajectoire et l'unique cycle réellement actif sans créer, fermer ou autoriser d'effet par reconstruction fictive.

**Frontières :** domaine 3 = conduite cognitive ; domaine 4 = mémoire/contextualisation ; domaine 5 = trajectoire, cycles et guidance ; domaine 6 = autorité des transitions ; domaine 8 = preuves et réserves ; domaine 7 si une véritable exécution technique est engagée avec autorisation. **Un cycle actif seul n'exige ni livrable ni gate supplémentaire** : les obligations proviennent des effets, contrats, politiques et décisions réellement applicables.

**Critères d'acceptation R1 à décliner en R2–R6 :** valeur cognitive sans cycle ; trajectoire prévisionnelle et modifiable ; **unicité observable du cycle actif** ; ouverture/clôture sous GO effectif ; CKC associé seulement au cycle actif ; maturité proactive mais non décisionnelle ; transitions honnêtes et reprises sans faux état. **Preuves attendues ultérieurement :** scénarios de transitions et idempotence, cas de concurrence, vérification des CKC, reprise inter-session et tests E2E avec réserves. **Next : N/A — NON IMPLÉMENTÉ.**

### 2.32. Scénario end-to-end R1 — investigation, production cognitive et restitution structurée adaptative de Nora (2026-11-02)

**Statut : VALIDATED BY MORRIS — scénario E2E 03 et capacité fonctionnelle de « restitution cognitive structurée et adaptative ».** Morris confirme que la **qualité de structuration, de mise en forme et, lorsqu'elle est pertinente, d'interactivité** fait partie de la valeur cognitive produite par Nora, **pas seulement de la décoration UX**. Les captures de réponses ChatGPT partagées par Morris illustrent le résultat recherché ; elles ne sont ni un design system adopté ni une promesse d'identité technique avec l'interface ChatGPT. La cible reste dans les **neuf domaines validés** : pas de domaine supplémentaire.

**Résultat utilisateur :** à partir d'une demande formulée librement, Nora **comprend, investigue, confronte, raisonne, rédige et restitue directement** un résultat utile, intelligible, sourcé et présenté sous la forme la plus appropriée. Le Pilote peut comprendre une chronologie, comparer des choix, consulter des preuves, visualiser l'avancement ou répondre à une proposition **sans devoir interpréter un pavé de texte brut** ni administrer la mise en page. Nora reste compétente dans le sas et dans le projet, **avec ou sans cycle actif**. Le CKC d'un cycle actif influe sur la conduite méthodologique, **pas sur l'obligation d'un format d'affichage**.

**Parcours nominal de travail cognitif :**
1. **Comprendre la demande et son contexte :** identifier résultat, périmètre, contraintes, prescriptions du Pilote et information réellement déterminante à clarifier ; ne pas instaurer de formulaire ou cycle préalable.
2. **Investiguer :** consulter et recouper les connaissances du projet, la mémoire, Git et les autres sources réellement disponibles/autorisées ; identifier leur provenance, version, fraîcheur et les lacunes.
3. **Analyser, challenger et comparer :** distinguer faits observés, hypothèses, options, recommandations, décisions existantes et contradictions ; développer les alternatives pertinentes sans outrepasser les prescriptions.
4. **Produire directement :** remettre analyses, cadrages, comparatifs, conceptions et contenus documentaires que Nora peut élaborer cognitivement. **Pas de délégation à Cursor par réflexe** ; une écriture Git ou autre mutation externe implique séparément les droits et contrats opérationnels pertinents.
5. **Structurer et restituer :** choisir et combiner avec discernement les formes de présentation capables de rendre le résultat immédiatement compréhensible et utilisable. Une réponse simple reste simple ; une question complexe peut appeler une composition de plusieurs formes.
6. **Capitaliser et poursuivre :** conserver/retrouver les sujets, réserves, recommandations, décisions effectivement actées et références utiles ; proposer une suite naturelle ou un arbitrage, sans décision ou exécution autonome.

**Catalogue fonctionnel indicatif de formes de réponse — extensible, non rigide :**

| Besoin de compréhension ou d'action | Formes de restitution possibles |
| --- | --- |
| Expliquer un concept ou une situation | Paragraphes lisibles, titres, emphases, listes ou encadrés réellement utiles. |
| Expliquer un parcours, des étapes ou des dépendances | Chronologie verticale numérotée, étapes reliées par flèches, icônes pertinentes, enchaînement séquentiel ou branches lorsque nécessaire. |
| Comparer des solutions | Tableau de critères, distinctions et compromis, avantages, limites et recommandation argumentée. |
| Montrer un état d'avancement | Vue « fait / en cours / à traiter / bloqué / inconnu », indicateurs et détails consultables. |
| Restituer un résultat technique ou une validation | Résumé du résultat **observé**, statut intelligible et lien profond vers commit, document ou preuve réellement disponibles ; distinction entre réalisé, vérifié et seulement déclaré. |
| Exposer une investigation et ses sources | Références, citations/liens directs, provenance, réserves et profondeur documentaire accessible à la demande. |
| Préparer une décision entre options | Options distinctes, critères, recommandation et, si adapté, choix interactif avec action explicite de réponse. |
| Synthétiser un sujet structurant | Hiérarchie de sections, mise en évidence proportionnée, tableaux, points clés et possibilité d'examiner les détails. |

**Choix adaptatif et composition :** Nora sélectionne une représentation en fonction de **l'intention, de la complexité, du volume d'information, du niveau de risque et de l'action suivante utile**. Elle peut assembler texte, tableaux, étapes, liens, statuts et interactions dans un même message cohérent. **Aucun catalogue fermé, habillage obligatoire ou rituel « verdict / tableau / bouton » à chaque réponse.** Les icônes, codes visuels, numéros et flèches renforcent la compréhension sans porter seuls l'information ; accessibilité et sobriété font partie des attentes.

**Interactivité contextuelle :** lorsqu'une séquence aboutit à un véritable choix ou à une clarification utile, Nora peut placer **au moment pertinent**, souvent en fin de réponse, des contrôles proportionnés (par exemple options A/B et bouton « Valider ce principe ») dont l'action prépare/transmet dans la conversation **une réponse explicite conforme à la sélection**. Ce n'est **ni une obligation systématique de formulaire**, ni une interface décorative, ni une permission d'opération automatique. L'option choisie, la portée de la réponse et le texte émis doivent rester compréhensibles et corrigibles par le Pilote ; le comportement exact et ses garde-fous relèvent de R2–R4.

**Autorité :** un contrôle conversationnel qui recueille un choix ne constitue pas de lui-même une **autorisation d'exécution**, une HumanDecision structurelle opposable ou un GO de promotion. **Studio** qualifie et applique l'autorité selon l'objet et la portée de l'acte réellement exprimé. L'acte spécifique **« Exécuter »** d'un contrat technique inspecté conserve sa frontière propre ; une option de présentation ne peut le contourner. La production d'un document par Nora ne vaut pas permission implicite de le publier dans Git.

**Vérité et qualité de restitution :**
- **Statuts factuels :** une coche de succès, « validation enregistrée », « tests réussis » ou « synchronisé sur Git » n'est présenté comme **réalisé/vérifié** que si l'effet correspondant a été effectivement confirmé. Un statut déclaré, inconnu, en cours ou échoué est présenté sans ambiguïté.
- **Liens authentiques et utilisables :** liens hypertextes vers références/commits/documents réels et accessibles lorsqu'ils sont connus ; pas de destination inventée, de citation sans accès ni de lien présenté comme preuve suffisante à lui seul.
- **Contenu prioritaire :** la beauté de la présentation ne masque jamais l'absence de preuve, les risques, réserves, sources incomplètes, contradictions ou limitations de capacité.
- **Interaction effective :** un bouton ou choix proposé doit avoir une conséquence compréhensible et fonctionnelle, contrôlée par Studio, sans action fictive ; pas de choix multiples encombrants lorsque le dialogue suffit.
- **Adaptation et accessibilité :** texte compréhensible même si les couleurs/icônes ne le sont pas, navigation et états identifiables, présentation adaptée aux différents écrans et aux besoins réels du Pilote.

**Exceptions à qualifier :** source manquante ou contradictoire → restituer l'incertitude ; résultat non vérifiable → ne pas afficher un succès confirmé ; forme riche non disponible → restitution textuelle honnête et exploitable ; lien indisponible ou droit insuffisant → limite signalée ; action interactive nécessitant une décision structurante ou une autorisation opérationnelle → gate applicable, jamais GO déduit du seul choix visuel ; session interrompue → continuité des acquis utiles sans prétendre que l'analyse/exécution a continué ou abouti.

**Répartition et suite :** domaine **3** = choix sémantique et composition de la restitution cognitive ; **4** = contexte, sources et mémoire ; **6** = décision/autorisation effectivement applicable ; **7** = mutation ou délégation externe lorsqu'elle est demandée et autorisée ; **8** = qualification des preuves, statuts et résultats ; **9** = références Git accessibles. **R2** : familles, critères de sélection, actions et contrats de données ; **R3** : catalogue visuel, composants, accessibilité et interactions dans la conversation ; **R4** : rendu contrôlé, provenance, sécurité, validation et exécution des actions ; **R5–R6** : épreuves de pertinence, composition, états honnêtes, liens effectifs et contrôles utilisables, en situations réelles. Aucun choix de schéma UI, bibliothèque, langage de rendu ou moteur historique n'est adopté en R1. **Studio Next : N/A — NON IMPLÉMENTÉ ; R1 IN PROGRESS.**

### 2.33. Scénario end-to-end R1 — mémoire vivante, décisions et continuité entre conversations (2026-11-02)

**Statut : VALIDATED BY MORRIS — scénario E2E 04 avec simplification explicite du journal (§2.11).** La continuité et l'autorité sont des exigences produit, pas la promesse d'une implémentation Next déjà existante. La cible reste **le projet individuel du Pilote**, avec ses conversations et droits propres.

**Résultat utilisateur :** après une interruption, une autre conversation ou un changement de cycle, le Pilote retrouve une Nora qui reconstitue **le contexte utile et actuellement applicable** : travaux et sources, sujets vivants, questions ouvertes, réserves importantes, décisions humaines et leur histoire. Nora peut raisonner sur les évolutions et proposer la suite sans demander au Pilote de relire tous les transcripts, ni confondre mémoire, recommandation, décision ou preuve.

**Parcours nominal :**
1. **Explorer dans une première conversation :** Nora étudie une question métier ou technique avec le Pilote ; des sujets, options, recommandations, hypothèses et réserves peuvent émerger.
2. **Capitaliser avec discernement :** les sujets et sous-sujets importants évoluent, conservent liens, origine et statut ; les recommandations utiles demeurent dans leur contexte, sans onglet ou archivage exhaustif des propositions passagères.
3. **Enregistrer l'arbitrage humain :** lorsqu'un choix structurant est effectivement validé, Studio conserve l'identité du Pilote, la portée, la provenance, l'état applicable et l'historique de la décision. La suggestion de Nora ne devient pas une décision par reformulation.
4. **Reprendre ailleurs :** dans une autre conversation ou un autre cycle du **même projet**, Nora retrouve les informations pertinentes et actuelles, les décisions opposables et les points ouverts, sans réinjecter nécessairement le transcript complet.
5. **Confronter le nouveau contexte :** face à une source plus récente, une contradiction ou une contrainte inattendue, Nora vérifie provenance, version et applicabilité ; elle signale les impacts et recommande éventuellement une révision, sans modifier seule l'autorité humaine.
6. **Faire évoluer sans effacer :** si le Pilote révise sa décision, la nouvelle portée applicable est enregistrée, l'ancienne décision reste traçable ; les sujets liés et points ouverts sont requalifiés sur preuves, sans perte d'historique.

**Présentation du journal retenue pour ce scénario :**
- **Sujets — vue principale :** navigation dans les connaissances et l'évolution des thèmes, synthèses, questions, réserves et recommandations contextualisées.
- **Décisions — vue principale :** arbitrages effectivement pris et leur état courant, indépendants de l'arborescence des sujets.
- **Points ouverts — vision transversale :** accès inter-sujets aux **réserves significatives, blocages, questions et conditions non résolues**, avec liens et statut utiles. Son dispositif visuel exact sera conçu en R3 ; **pas de vue permanente autonome Réserves ou Recommandations**, ni troisième source d'autorité.
- Une recommandation reste un **acte de conseil conversationnel** ; elle n'exige pas de fiche ou liste spécifique pour chaque occurrence. Les réserves importantes restent retrouvables, y compris quand leur sujet ou le cycle change.

**Exceptions et invariants :**
- Sujet renommé, scindé, déplacé ou fusionné → continuité de sens, origine, références et liens ; aucune décision n'est altérée par reclassement.
- Question ancienne non résolue → toujours ouverte tant qu'aucune preuve ou décision applicable ne la clôture ; Nora la réintroduit au moment utile, sans relance mécanique.
- Source fiable répondant à une question factuelle → Nora peut établir une résolution sémantique sourcée ; elle ne peut lever une réserve gouvernée, accepter un risque ou révoquer une décision humaine sans mandat valable.
- Décision modifiée/remplacée → nouvelle autorité applicable selon sa portée, ancienne conservée comme historique ; pas de vérité reconstruite à partir d'une synthèse isolée.
- Divergence Git/documentation/mémoire → revenir aux sources primaires, branches, dates et preuves ; **signaler la contradiction** plutôt que produire une certitude fictive.
- Projet B consulté depuis A → uniquement lecture autorisée ; ses décisions, mandats, CKC et conversations ne deviennent ni les actes ni la mémoire autorisante d'A.
- Suspension explicite du Pilote → reste opposable après changement de conversation, cycle ou session ; aucune reprise par Nora sans levée humaine applicable.
- Source absente, mémoire incomplète ou session interrompue → expliciter la limite, demander l'essentiel ou continuer sous hypothèse bornée lorsque le risque le permet ; ne pas inventer d'historique.

**Responsabilités et limites :** domaine **4** organise et restitue connaissances, références et points ouverts ; domaine **6** conserve et fait appliquer les décisions/mandats ; domaine **3** réalise l'exploration et la reprise conversationnelle ; domaine **5** fournit le contexte de cycle sans enfermer la mémoire ; domaine **9** fournit les sources Git accessibles, et **8** la qualification des preuves. **Pas de nouveau moteur de journal, de décision ou de mémoire collective.**

**Critères d'acceptation à préciser et prouver en R2–R6 :** reprise pertinente après plusieurs conversations/cycles ; trace d'origine ; décisions applicables et anciennes distinguées ; points ouverts inter-sujets accessibles ; réorganisation des sujets sans altérer les actes humains ; absence de promotion recommandation→décision ; respect des suspensions et frontières interprojets. **R2 :** contrats, currentness, résolution, consentements et erreurs ; **R3 :** accès aux deux vues et aux points ouverts ; **R4 :** récupération, identité, intégrité et autorité ; **R5/R6 :** essais E2E, multi-session, conflits et preuve de non-régression. **Studio Next : N/A — NON IMPLÉMENTÉ ; R1 IN PROGRESS.**

### 2.34. Scénario end-to-end R1 — décision, autorisation et réalisation technique gouvernée (2026-11-02)

**Statut : VALIDATED BY MORRIS — scénario E2E 05.** Le scénario confirme les principes déjà retenus aux §§2.7, 2.21, 2.25–2.27 et 2.23 ; il ne valide ni le format définitif du contrat d'exécution, ni le choix de Cursor CLI comme architecture, ni un état LIVE/REAL prouvé.

**Résultat utilisateur :** le Pilote peut demander un travail technique ou une modification externe dans la conversation ; Nora **investigue et prépare un contrat technique borné et intelligible**, puis Studio n'engage l'exécution **qu'après l'acte explicite « Exécuter » du Pilote sur le contrat inspecté et applicable**. Cursor réalise le travail autorisé sans validations intermédiaires inutiles ; le Pilote conserve le contrôle des effets, de leurs limites et de l'arrêt éventuel.

**Parcours nominal :**
1. **Intention :** le Pilote formule le résultat souhaité (par exemple intégrer une fonctionnalité ou modifier des fichiers Git). **Ni cycle actif ni objet Mission préalable** ne sont requis pour qualifier la demande.
2. **Investigation et préparation :** Nora consulte les sources et permissions disponibles, confronte les contraintes et prépare objectif, IN/OUT, dépendances, impacts et risques, ressources/branches visées, responsabilités, conditions de STOP, résultats attendus, preuves et instruction technique exacte.
3. **Inspection Pilot-first :** Studio présente d'abord un résumé intelligible des effets envisagés et du périmètre ; le Pilote peut consulter **l'instruction exacte, complète, versionnée et liée au contrat**, par exemple dans un bloc repliable, sans divulgation de secrets. **Une approbation de la solution ou d'une architecture n'est pas encore l'autorisation de lancer Cursor.**
4. **Autorisation :** le Pilote clique **« Exécuter »** pour le contrat inspecté. Studio vérifie son identité, la portée, les mandats, les accès, la validité de l'instruction et les restrictions applicables avant tout déclenchement. Le clic n'octroie aucun droit général hors contrat.
5. **Exécution déléguée :** Cursor intervient dans le périmètre effectivement autorisé, applique ses tests et STOP ; Studio rattache les événements et retours réellement observables au projet, au Pilote, au contrat et à l'exécution. Pas de progression fictive, de surveillance cognitive permanente par Nora ni de disponibilité LIVE présumée.
6. **Retour et passage au résultat :** Studio conserve les états et éléments effectivement reçus ; Nora peut exploiter le rapport et les références pour qualifier la suite avec les responsabilités du **scénario E2E 06** (résultat, preuves, réserves et éventuel nouveau contrat correctif, jamais exécuté automatiquement).

**Frontières d'autorité à préserver :**

| Expression ou action | Portée fonctionnelle |
| --- | --- |
| « Cette solution me convient » | Accord sur l'orientation ou la proposition ; **pas de lancement technique implicite**. |
| « Je valide cette architecture » | Décision structurante avec portée et historique, selon les règles du domaine 6 ; **pas de délégation Cursor par cet acte seul**. |
| **« Exécuter » sur le contrat applicable** | Autorisation de lancement bornée, après les contrôles Studio ; ni droit universel ni garantie de réalisation. |
| « Stoppe les travaux » | Suspension humaine opposable ; **arrêt demandé ≠ arrêt confirmé** ni annulation des effets produits. |
| « Reprends les travaux suspendus » | Nouvelle instruction humaine à qualifier selon la suspension, la validité du contrat, les conditions réelles et les permissions. |

**Exceptions et invariants :**
- Contrat ou instruction matériellement modifié(e) depuis inspection, portée ou risque nouveaux → requalification de l'autorisation et nouveau GO si applicable ; **pas de substitution silencieuse du contrat validé**.
- Double clic, demande répétée, réponse réseau perdue → **pas de lancement en double injustifié** ; vérifier l'état réel avant de réessayer.
- Droit Git insuffisant, identité Cursor incertaine ou session non disponible → pas de lancement présumé ; STOP ou clarification et restitution de la précondition manquante.
- Changement de besoin, nouvelle dépendance, conflit Git ou dépassement du mandat pendant les travaux → suspendre les effets concernés, préserver les travaux indépendants dans leurs mandats et demander l'arbitrage nécessaire ; pas d'élargissement automatique.
- Arrêt manuel demandé → distinguer demande, confirmation, état inconnu et effets déjà réalisés ; **aucun rollback automatique supposé**, capacité d'interruption à concevoir et prouver.
- Exécution échouée, interrompue, partielle ou sans rapport suffisant → conserver les éléments observés sans annoncer le succès ni la conformité ; le rapport Cursor ne constitue pas à lui seul une preuve.
- Suspension décidée par le Pilote → opposable à toutes les reprises jusqu'à levée humaine applicable, même si Nora estime le problème technique résolu.
- Absence de cycle actif → n'empêche pas l'exécution technique gouvernée si ses préconditions propres sont satisfaites.

**Responsabilités :** domaine **3** = qualification et préparation cognitive par Nora ; domaine **6** = décision, autorité, suspensions et enforcement par Studio ; domaine **7** = contrat, lancement et états observés ; domaine **9** = accès/ressources Git ; domaine **8** = examen des résultats, preuves et conformité ensuite. **Un contrat technique découle des effets réels, pas du seul fait qu'un cycle existe.**

**Critères d'acceptation à spécifier et démontrer ultérieurement :** contrat consultable et cohérent avec l'instruction exécutée, contrôle de l'identité et des accès, **un lancement par autorisation applicable**, respect des limites/STOP, états réellement traçables, gestion des conflits/échecs et absence de double lancement. **R2 :** contrats et règles d'état ; **R3 :** inspection Pilot-first, autorisation et suivi ; **R4 :** isolation, intégrations et prévention des conflits ; **R5–R6 :** preuves d'exécution et d'échec/reprise en conditions réelles. **Studio Next : N/A — NON IMPLÉMENTÉ ; R1 IN PROGRESS.**

### 2.35. Scénario end-to-end R1 — résultats, preuves, corrections et acceptation humaine (2026-11-02)

**Statut : VALIDATED BY MORRIS — scénario E2E 06.** Le scénario confirme la séparation entre réalisation (domaine 7), qualification des résultats/preuves (domaine 8) et décision/acceptation humaine (domaine 6), sans nouveau moteur, certification automatique ni adoption implicite. La forme UX exacte du bilan et la profondeur de vérification restent à concevoir et éprouver.

**Résultat utilisateur :** après une réalisation déléguée, le Pilote comprend **ce que l'exécuteur déclare avoir réalisé, ce que Studio/Nora ont effectivement pu observer ou vérifier, ce qui demeure incertain ou non conforme, et quelles suites sont possibles**. Nora rend un bilan intelligible et sourcé et peut préparer une correction utile, mais **n'accepte pas le résultat à la place du Pilote** et ne relance pas Cursor automatiquement.

**Parcours nominal :**
1. **Retour d'exécution :** Studio collecte l'état terminal ou partiel, le rapport Cursor si disponible, les références, traces et artefacts effectivement reçus. « Terminée » est un état d'exécution, pas un verdict de conformité.
2. **Investigation par Nora :** Nora confronte les déclarations de Cursor au contrat autorisé et aux preuves effectivement accessibles : branche/diff/commits Git, résultats de tests, artefacts, journaux, captures et autres éléments pertinents selon l'objectif et le risque.
3. **Qualification proportionnée :** distinguer **effets réalisés et constatés**, **objectif couvert**, **résultat conforme suffisamment étayé**, **éléments seulement déclarés**, **écarts**, **réserves** et **preuves insuffisantes/inaccessibles** ; ne pas exiger un dossier universel de certification pour chaque opération.
4. **Restitution Pilot-first :** présenter un bilan court, structuré et adaptable (§2.32) : faits établis, différences avec le contrat, sources/liens effectifs, incertitudes et prochaine action recommandée. Les détails de preuve peuvent être consultés si nécessaire. Ne pas afficher un succès global non démontré.
5. **Suite corrective si utile :** Nora peut spontanément préparer un contrat de correction ou de vérification dans le périmètre applicable ; **nouveau lancement uniquement après inspection, vérifications et acte « Exécuter »** du Pilote. Dépassement de portée, nouveau risque ou effet protégé → requalification et gate correspondant.
6. **Décision et continuité :** le Pilote peut accepter, faire corriger, reporter, maintenir ou accepter des réserves selon son autorité. Studio conserve la décision **effectivement exprimée**, sa portée et les résultats/proofs pertinents ; les réserves ouvertes restent accessibles transversalement (§2.11). Aucune acceptation métier, publication Git, merge ou **ADOPTED** n'est inférée du seul résultat technique.

**Trois issues illustratives :**

| Situation | Restitution et suite attendues |
| --- | --- |
| **Résultat suffisamment démontré** | Résultats, références et réserves résiduelles ; proposition d'acceptation au Pilote, sans l'anticiper. |
| **Résultat partiel ou preuve insuffisante** | Distinguer les effets réalisés et non vérifiés, qualifier les écarts et proposer un complément ou une vérification. |
| **Échec, interruption ou contradiction** | État réellement connu, effets déjà produits, zones inconnues et reprise gouvernée ; aucun rollback ou succès présumé. |

**Exemple de discernement :** Cursor déclare l'exécution terminée et les tests réussis ; les modifications Git sont effectivement constatées, mais les résultats de tests restent inaccessibles. Nora peut établir la présence des modifications, mais indique **« tests non vérifiés ; conformité globale non démontrée »**. Le Pilote voit les éléments probants et la recommandation de produire/vérifier les preuves manquantes, sans coche de conformité générale fictive.

**Exceptions et invariants :**
- **Rapport absent/incomplet :** consulter les seules sources accessibles ; présenter les manques et le statut de vérification sans inventer un succès.
- **Rapport et Git contradictoires :** identifier dépôt, branche, référence, auteur, date et portée ; signaler le désaccord et investiguer jusqu'à un niveau proportionné, sans effacer le conflit.
- **Tests annoncés sans traces :** ne pas transformer la déclaration de l'exécuteur en preuve indépendante ou en conformité démontrée.
- **Correction hors mandat :** préparer une nouvelle proposition et obtenir les décisions/permissions correspondantes ; **aucune boucle corrective autonome**.
- **Acceptation avec réserves :** enregistrer seulement ce que le Pilote a réellement accepté et les réserves/conditions encore ouvertes ; retrouver celles-ci via les sujets et l'accès transversal aux points ouverts.
- **Interruption, reprise ou perte de session :** rattacher chaque observation, rapport, preuve et décision au projet/contrat/exécution concernés ; ne pas combler les inconnues ni supposer que l'exécution a continué.
- **Source de preuve inaccessible ou trompeuse :** limite et provenance explicites ; l'absence de preuve ne doit pas être camouflée par une présentation visuelle réussie.
- **Acceptation humaine :** un accord conversationnel clair peut suffire pour un arbitrage métier dans sa portée, **sans clic redondant**, mais il n'accorde pas d'effets Git/projet/techniques non autorisés et ne constitue pas une promotion **ADOPTED**.

**Contrats et responsabilités :** domaine **7** = exécution, retours et observations disponibles ; domaine **8** = contrôle des résultats, preuves, écarts et niveau de conformité ; domaine **6** = acceptation, arbitrages et permissions du Pilote ; domaine **3** = analyse/restitution cognitive ; domaine **4** = conservation du contexte et des points ouverts ; domaine **9** = accès Git/provenance. Aucune obligation de créer un cycle ou une nouvelle mission pour qualifier le retour.

**Critères à spécifier puis prouver en R2–R6 :** distinction systématique **déclaration / observation / conformité / acceptation** ; bilan intelligible avec liens réellement accessibles ; vérification proportionnée ; restitution honnête des échecs et inconnues ; conservation des réserves et décisions applicables ; proposition corrective sans exécution automatique ; reprise après interruption. **R2 :** règles de verdict, preuves et acceptation ; **R3 :** UX des bilans, sources et options ; **R4 :** chaîne de provenance, intégrité et reprise ; **R5–R6 :** essais E2E réalistes et vérifications LIVE/REAL. **Next : N/A — NON IMPLÉMENTÉ ; R1 IN PROGRESS.**

### 2.36. Scénario end-to-end R1 — accès Git individuels et collaboration sur dépôt partagé (2026-11-02)

**Statut : VALIDATED BY MORRIS — scénario E2E 07.** Le parcours concrétise les principes déjà validés aux §§2.13, 2.23–2.24, 2.28 et 2.34–2.35. Il ne constitue ni un choix d'architecture GitHub/Cursor, ni une preuve multi-utilisateur LIVE/REAL, ni l'autorisation de partager des décisions ou projets Studio.

**Résultat utilisateur :** un Pilote peut conduire son projet **sans dépôt Git obligatoire**, découvrir et consulter des ressources Git autorisées, puis faire exécuter une modification ciblée sous contrat et permissions réelles. Plusieurs Pilotes peuvent collaborer sur **un même dépôt GitHub** tout en conservant **des projets Studio individuels**, des conversations Nora, mémoires, trajectoires, cycles, décisions et mandats propres.

**Parcours nominal :**
1. **Identité :** chaque Pilote s'authentifie auprès de Studio avec sa propre identité GitHub, sans en déduire un accès illimité aux dépôts ni une identité Cursor déjà utilisable.
2. **Projet individuel sans obligation Git :** il crée ou ouvre son espace Studio et peut travailler avec Nora avant tout rattachement de dépôt.
3. **Besoin Git contextualisé :** Nora identifie les ressources nécessaires pour lire/investiguer ou pour préparer une mutation ; elle peut proposer dépôt, répertoire, branche et base, mais respecte l'emplacement explicitement prescrit par le Pilote. Pas de structure Git créée par le seul acte « Créer le projet ».
4. **Consultation autorisée :** Studio/Nora n'accèdent qu'aux dépôts, documents, commits, branches et PR réellement disponibles et autorisés, en conservant version, provenance et distinction **branche candidate ≠ baseline main**. Les sources du dépôt partagé sont consultables selon les droits de chaque utilisateur.
5. **Préparation d'intervention :** si des effets Git sont requis, Nora définit contrat, dépôt, répertoire, branche, référence de base, fichiers visés, risques, permissions, dépendances, conditions de STOP et preuves attendues.
6. **Autorisation et réalisation :** le Pilote inspecte et autorise via **« Exécuter »** ; Studio contrôle les droits et les accès Git **effectifs de l'environnement Cursor** pour ce Pilote. Cursor opère sous ce contrat, sans transfert tacite des jetons personnels Studio, session CLI partagée, droit universel ou merge implicite.
7. **Retour et capitalisation :** Studio rattache les états, rapports et références Git effectivement observés ; Nora qualifie modifications/preuves et limites, sans promouvoir une décision d'un autre projet en autorité locale ni présumer une adoption.

**Deux cas de collaboration à couvrir :**

| Situation sur un dépôt commun | Règle produit cible |
| --- | --- |
| **Interventions sur des répertoires ou composants indépendants** | Conserver isolation, permissions, contrats, branches et traçabilité individuels ; ne pas bloquer artificiellement des travaux dont l'indépendance est étayée. |
| **Interventions sur les mêmes fichiers/composants ou une base commune changeante** | Détecter/requalifier risque de concurrence, base périmée et portée des effets ; STOP si nécessaire, **aucun écrasement silencieux**, merge automatique ou validation transférée d'un Pilote à l'autre. |

**Exceptions et invariants :**
- Connexion Studio valide mais dépôt privé non autorisé → demande de permission utile ou restitution honnête de l'absence d'accès ; pas de mandat Git global.
- Lecture permise à Nora mais écriture impossible depuis Cursor → la lecture reste possible ; aucune exécution d'écriture déclarée réussie.
- Identité/session Cursor appartenant au mauvais utilisateur ou non établie → **STOP**, pas d'héritage de session locale du navigateur vers l'environnement hébergé présumé.
- Branche ou référence de base modifiée après préparation → vérification de currentness, dépendances et validité du contrat avant effet, requalification si nécessaire.
- Conflit entre Pilotes ou modification concurrente → qualification, reprise sous contrat applicable ou STOP ; pas d'écrasement ni merge implicite.
- Permission Git révoquée pendant les travaux → appliquer les restrictions aux opérations encore contrôlables, établir l'état des effets déjà produits et signaler toute incertitude.
- Décision du projet B publiée dans Git et lisible depuis A → **source exploitable** dans A, pas décision/mémoire/autorisation automatiquement partagée ou applicable dans A.
- Reprise d'un projet par un autre Pilote → retrouver les artefacts Git effectivement publiés et accessibles, **sans accès implicite aux conversations privées, mandats et décisions non publiées**.

**Trois responsabilités distinctes :** (a) identité et espace personnel **Studio**, (b) permissions de **lecture Git** de l'intégration Studio/Nora, (c) **identité et droits Git effectifs de Cursor** pour réaliser un contrat technique. La coïncidence de ces trois périmètres n'est **jamais présumée**. Les droits effectifs doivent être évalués selon l'opération et la ressource.

**Contrats et frontières :** domaine **9** = ressources et accès Git, provenance, rattachement facultatif, emplacements et contraintes de collaboration ; domaine **7** = mutation/exécution sous contrat ; domaine **6** = autorisations et restrictions du Pilote ; domaine **4** = connaissances privées du projet et récupération de sources communes ; domaine **8** = bilan et preuves. **Aucun moteur de collaboration Studio partagé ni système Git d'exécution parallèle n'est introduit.**

**Critères d'acceptation à préciser et prouver en R2–R6 :** projet fonctionnel sans Git, autorisations minimales pour lecture/écriture, séparation réelle des trois identités, deux Pilotes aux permissions différentes sur un dépôt partagé, travail indépendant sans conflit artificiel, travail concurrent sur mêmes fichiers avec base obsolète correctement détectée, absence de transfert d'autorité et aucune fusion implicite des projets ou branches. **R2 :** parcours d'accès et contrats, risques et reprises ; **R3 :** sélection et permissions visibles ; **R4 :** identité, sessions Cursor, Git et isolation concurrente ; **R5–R6 :** démonstrations sur dépôt partagé en conditions réelles. **Studio Next : N/A — NON IMPLÉMENTÉ ; R1 IN PROGRESS.**

### 2.37. Consolidation transversale des scénarios R1 — revue de sortie candidate (2026-11-02)

**Statut : PREPARED FOR MORRIS R1 EXIT REVIEW — NON VALIDATED AS EXIT.** Cette consolidation est une analyse candidate de ChatGPT fondée sur les **neuf domaines IN/OUT validés** (§2.29) et les **sept scénarios E2E explicitement validés** (§§2.30–2.36). Le GO Morris du 2026-11-02 autorise la **préparation de la revue et la synchronisation documentaire factuelle**, **pas** la clôture de R1, le démarrage de R2, une PR, un merge ou l'adoption d'une architecture. L'état local Git est **NON OBSERVÉ** ; les vérifications portent sur les références distantes.

**Résultat de la revue de cohérence :** **couverture de cadrage nominale 7/7 scénarios et 9/9 domaines** ; aucun domaine supplémentaire ni nouveau parcours primaire indispensable n'a été identifié dans les sources examinées. Ce résultat n'est **ni une preuve d'exhaustivité fonctionnelle**, ni un test de comportement runtime. **Aucune contradiction structurante entre les sept parcours et la carte courante n'est relevée** ; les invariants transverses et exceptions ci-dessous deviennent des entrées R2–R6 plutôt que des prétextes à rouvrir R1 sans bénéfice produit.

| Parcours validé | Résultat utilisateur, frontière et domaines dominants |
| --- | --- |
| **E2E 01 — Sas → projet** (§2.30) | Sas récupérable, création explicite puis continuité du même fil ; **pas** de projet/cycle/Git implicite (1, 2, 3). |
| **E2E 02 — Trajectoire/cycles** (§2.31) | Progression gouvernée, **au plus un cycle actif**, CKC seulement pour le cycle actif ; travail cognitif possible sans cycle (3, 5, 6). |
| **E2E 03 — Cognition/restitution** (§2.32) | Nora investigue, conçoit et produit directement ; réponses structurées/interactives pertinentes ; pas de délégation Cursor systématique (3, 4). |
| **E2E 04 — Continuité/gouvernance** (§2.33) | Mémoire et décisions applicables retrouvées ; journal avec **Sujets** et **Décisions** dédiés, points ouverts transversaux (4, 6). |
| **E2E 05 — Réalisation gouvernée** (§2.34) | Contrat inspecté, « Exécuter » explicite, droits/STOP, observation réelle ; pas de mandat global (6, 7, 9). |
| **E2E 06 — Résultats/preuves** (§2.35) | Retour Cursor confronté aux preuves ; correction préparée mais non lancée, acceptation humaine distincte (6, 7, 8). |
| **E2E 07 — Accès Git/collaboration** (§2.36) | Git facultatif, identités individuelles, dépôt partagé sans fusion des projets ou droits, concurrence gouvernée (4, 6, 7, 9). |

**Invariants communs vérifiés conceptuellement :**
- **Continuité :** retrouver faits, conversations utiles, sujets, réserves et décisions applicables après changement de session, de cycle, ou de contexte autorisé, sans promotion d'une synthèse en autorité.
- **Autorité :** compréhension conversationnelle ≠ décision durable ≠ autorisation d'exécution. « Créer le projet » et « Exécuter » gouvernent leurs effets respectifs ; GO explicites pour ouverture/clôture de cycle ; suspension humaine opposable.
- **Vérité observable :** proposition ≠ effet réalisé ; rapport Cursor ≠ preuve indépendante ; réussite technique ≠ conformité ≠ acceptation ≠ ADOPTED.
- **Frontières personnelles :** mémoire, décisions, trajectoires et autorisations par projet Studio/Pilote ; lecture interprojets ou dépôt Git partagé n'entraîne aucun transfert de droits.
- **Sobriété :** Nora peut travailler sans cycle, choisir sa restitution sans gabarit obligatoire, capitaliser utilement sans quatre journaux ni moteur concurrent.

**Exceptions significatives et trajectoire de qualification — pas de nouveaux arbitrages R1 :**

| Famille transversale | Condition à traiter / comportement conservateur | Suite et preuves attendues |
| --- | --- | --- |
| **Reprise, identité et idempotence** | Sas récupérable, projet/cycle/exécution sans doublon après retry, perte de réponse ou changement de session ; état réel réconcilié. | **R2** scénarios/états/erreurs ; **R4** persistance/contrôles ; **R5–R6** tests de reprise et répétition. |
| **Décisions, mandat et suspension** | Préférences/recommandations non promues ; validité/supersession des décisions vérifiable ; suspension humaine opposable à toute délégation et reprise. | **R2** contrats d'autorité ; **R4** enforcement ; **R5–R6** tests multi-session/STOP. |
| **Mémoire et sources divergentes** | Réorganisations sans perte d'identité ni altération de décision ; version Git et provenance ; limites d'accès et contradictions exposées ; points ouverts récupérables. | **R2** règles de contexte ; **R3** consultation ; **R4** récupération et intégrité ; **R5–R6** vérifications longitudinales. |
| **Exécution et chaîne de preuves** | Identité Cursor, état d'arrêt demandé/confirmé/inconnu ; rapport non assimilé aux faits ; pas de correction automatique ni conformité fictive. | **R2** statuts/contrats ; **R3** restitution ; **R4** observation/liaison ; **R5–R6** preuves LIVE/REAL. |
| **Concurrence et Git partagé** | Deux Pilotes/contrats distincts, base Git contrôlée, fichiers communs et droits révoqués ; aucun écrasement/merge ou transfert de mandat implicite. | **R2** cas de conflit ; **R4** isolation Git/Cursor ; **R5–R6** essai deux Pilotes sur dépôt partagé. |

**Dépendances et risques qualifiés (à ne pas masquer par un statut READY de réalisation) :**
1. **Identité et isolation Cursor CLI en Studio multi-utilisateur : risque technique majeur, R4 puis preuve R5–R6.** Une session locale/navigateur du Pilote ne prouve pas l'authentification du CLI exécuté ailleurs. Prévoir une conception de responsabilité et STOP si association utilisateur/exécuteur non fiable ; le choix CLI reste candidat.
2. **Continuité et autorité persistante : risque critique transverse, R2/R4.** La mémoire du projet doit retrouver la vérité sans acquérir le pouvoir de remplacer une décision, de lever un STOP ou d'inventer un droit. Contrats d'identité, portée, validité et reprise à établir.
3. **Observabilité et preuves d'exécution : risque élevé, R2–R6.** Interruption manuelle non garantie, états partiels et inconnus, preuve vs déclaration de Cursor ; pas de verdict LIVE/REAL ni d'ADOPTED avant démonstration.
4. **Écriture concurrente Git : risque élevé sous dépôt partagé, R2/R4 puis essais R5–R6.** Branches, base, droits, conflits et absence d'écrasement silencieux doivent être éprouvés sans créer un Studio collectif natif.
5. **Restitution structurée et interactive : enjeu de qualité/UX et d'autorité, R2–R6.** Composants réellement opérants, sources et statuts authentiques, actions non trompeuses, sans moteur de gouvernance alternatif.
6. **Sources web/pièces jointes et autres capacités envisagées : limites de périmètre à spécifier selon usage en R2–R4**, jamais revendiquées comme implantées, ni devenant un nouveau jalon R1 par défaut.

**Critères candidats pour demander à Morris l'exit R1 (proposition à approuver, pas gate déjà passé) :**
1. **Vision, acteurs et frontières IN/OUT : acquis documenté/VALIDATED BY MORRIS** dans le document vivant et la carte des neuf domaines.
2. **Sept parcours E2E représentatifs avec exceptions et résultats utilisateur : acquis documenté/VALIDATED BY MORRIS** ; ils serviront d'entrées de conception et non de recette runtime anticipée.
3. **Responsabilités Pilote/Nora/Studio/Cursor, autorité, continuité et preuve : suffisamment explicitées pour passer en R2**, sans contrat technique ni UX définitivement adoptés.
4. **Dépendances, incertitudes, risques et responsabilités de qualification R2–R6 : consolidés dans cette revue candidate** ; leur résolution technique n'est pas une condition artificielle de l'exit de cadrage.
5. **Cohérence documentaire :** vision, Roadmap et décisions applicables à relire sur la **même branche candidate**, avec écart vs baseline `main` explicitement indiqué ; corriger les mentions obsolètes de statut sans prétendre à une intégration Git.
6. **Gate final :** **décision Morris explicite d'approbation des critères/contenu et de clôture R1**, puis **autorisation Git distincte** pour PR/merge et vérification post-merge ; **R2 reste NOT STARTED** jusqu'à son propre GO.

**Limites de la revue :** examen documentaire Git (candidate, SEF, Roadmap, naming, décisions et vision), **pas** de lecture du runtime Next inexistant, de preuves E2E produit, d'ouverture de PR ou de promotion de baseline. Les trois PNG de vision fondatrice sont référencés dans `vision-cible/README.md` mais **aucune inspection visuelle de leur contenu binaire n'est revendiquée dans cette revue**. **Conclusion candidate : R1 CONTENT READY FOR MORRIS EXIT REVIEW — R1 IN PROGRESS ; R2 NOT STARTED ; STUDIO NEXT N/A — NON IMPLÉMENTÉ.**

### 2.38. Complétude méthodologique — exigences à qualifier en R2 avant la sortie de R1 (2026-11-02)

**Statut : VALIDATED BY MORRIS — quatre axes de qualification à reprendre obligatoirement au jalon R2, sans adoption d'une architecture ou d'un mécanisme historique.** Morris valide l'inscription de ce résultat d'audit dans le document vivant de vision et la Roadmap, **sans décider de clôturer R1, de démarrer R2, de publier une PR, de merger ou de promouvoir une doctrine**. Les sept E2E (§§2.30–2.36) et neuf domaines (§2.29) demeurent inchangés ; pas de huitième scénario ni dixième domaine.

**Intention et résultat utilisateur :** Nora possède des règles de conduite cohérentes avec la méthode applicable, son contexte réel, les décisions et les droits du Pilote, tout en restant conversationnelle, capable de travailler directement **sans cycle actif**, et indépendante de la compréhension des packages, prompts et règles techniques par le Pilote. **Instruction ≠ source consultée ≠ mémoire ≠ décision humaine ≠ autorisation d'effet.**

| Qualification exigée en R2 | Résultat de conception à produire | Frontière IN / non-décision R1 | Suite |
| --- | --- | --- | --- |
| **1. Méthode applicable et option DoctrinePackage** | Définir responsabilité de sélection/applicabilité de la méthode au projet, version, provenance, compatibilité, fraîcheur, indisponibilité, CKC du cycle actif et politique d'évolution. **Comparer** un mécanisme type DoctrinePackage adapté à Next et une solution plus simple ; expliciter avantages, coût, risques, dette/exit et recommandation. | **Étude obligatoire, reprise non décidée** : aucun objet `DoctrinePackage`, registre, package pin, digest, fallback, schéma, identité ou code historique adopté. Nora reste opérationnelle sans cycle, et le CKC n'est pas un gate ou sélectionneur général de chaque question (§§2.16–2.18). | **R2** responsabilités et arbitrage fonctionnel ; **R4** architecture du mécanisme retenu ; **R5–R6** preuves. |
| **2. Instructions opérationnelles et contexte de Nora** | Concevoir la hiérarchie et la composition contextuelle des instructions : identité/posture et limites permanentes, politique applicable, sas/projet et décisions, tâche courante, CKC si cycle actif, permissions/outils, présentation ; sélection, révision, provenance, compatibilité et erreurs. Définir la frontière de confiance contre l'**élévation d'instructions contenues dans des sources Git, pièces jointes, web ou anciens tours**. | **Instructions de construction ChatGPT Next / SEF / v2.6 ≠ contrat des instructions runtime de Nora.** Pas de prompt géant, fournisseur, modèle, assembleur, architecture ou comportement déterministe adopté. Les protections d'autorité sont contrôlées par Studio, **pas simplement souhaitées dans un texte de prompt**. | **R2** contrats, priorité et erreurs ; **R3** transparence utile ; **R4** intégrité des rôles et enforcement ; **R5–R6** tests de sources adversariales, reprise et non-élévation. |
| **3. Héritage sélectif SFIA v2.6** | Qualifier ce qui mérite de nourrir la méthode interne : **nature du travail vs profil de profondeur/risque**, approches Light/Standard/Critical, dimensions transverses (sécurité, UX, accessibilité, conformité, FinOps, DevOps, RUN), source routing, préparation contractuelle, STOP, preuves/revue et capitalisation. Produire une matrice **KEEP / ADAPT / EXCLUDE** fondée sur la valeur et l'absence de rigidité. | **v2.6 reste le processus externe ChatGPT↔Cursor de construction de Next**, pas la doctrine active du produit. Ni ses 15 types, ni ses templates Markdown, ni un séquencement mandatory de PR/readiness à chaque conversation ne sont imposés au Pilote. Un CKC actif **guide** mais ne décide ni n'oblige un format. | **R2** matrice et règles fonctionnelles ; **R3** interactions pertinentes ; **R4** projections/adaptateurs utiles ; **R5–R6** proportionnalité et preuves. |
| **4. Évolution gouvernée de la méthode** | Définir comment une observation, un REX, une recommandation de Nora, une version candidate de règles et une version approuvée sont distingués ; qui peut décider de leur promotion, quel est leur effet sur les projets existants, comment vérifier, refuser, révoquer ou revenir à une version applicable. | **Pas d'auto-apprentissage doctrinal autorisant, d'upgrade silencieux ou de moteur de décisions concurrent.** Une suggestion de Nora n'est pas une décision ; l'autorité produit du Pilote et les gates de construction/promotion Morris restent distincts. | **R2** cycle de vie et droits ; **R4** intégrité/versionnement/compatibilité ; **R5–R6** absence de promotion implicite prouvée. |

**Contrats de responsabilité :** domaine **3** = production et guidage cognitif ; **4** = contexte, sources, mémoire/provenance ; **5** = CKC seulement pour un cycle actif ; **6** = décisions, gouvernance et suspensions ; **7** = effets et exécution sous contrat ; **8** = preuve/qualité ; **9** = accès Git et provenance. Pas de nouveau moteur, état, autorité ni circuit documentaire parallèle.

**Sources à capitaliser sans copier par inertie :**
- Ancien Studio : `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`, `31-doctrine-package-and-source-resolution.md`, `33-epistemology-provenance-and-contradiction-model.md`, `34-agent-capabilities-reversibility-and-execution-governance.md`, `35-artifact-evidence-debt-and-controlled-learning.md`, `36-sfia-v2.6-inheritance-and-adaptation-matrix.md` ; `projects/sfia-studio/convergence/sfia-studio-doctrinepackage-runtime-ckc-integration-qualification.md`. **Historique validé pour l'ancien produit ≠ arbitrage Next** ; les changements d'état CKC/fallback doivent être datés et confrontés.
- Méthode externe : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`, `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`, `prompts/templates/sfia-cycle-execution-template.md`.
- Exemples de code ancien pour capitalisation de responsabilité, sans réutilisation décidée : `app/lib/nora-cognitive-runtime/callModelInputFilter.ts`, `cycleJournalPrompt.ts`, `sourceStrategyPolicy.ts`, `noraAdaptivePresentation.ts` sous `projects/sfia-studio/`.

**Critère de sortie de conception R2 à proposer, NON VALIDATED SPEC :** être capable d'expliquer **quelles règles/instructions/sources sont applicables, pourquoi et sous quelle provenance/version, quelle autorité elles possèdent réellement, comment une contradiction ou une source malveillante est traitée, comment Nora fonctionne avec/sans cycle et qui peut promouvoir une évolution** ; aucun test LIVE ou mécanisme n'est présumé. Les choix de structure, modèle, architecture et tests applicables restent aux jalons compétents.

**Impact sur l'exit R1 :** quatre exigences de reprise désormais tracées pour R2–R6 ; elles ne rouvrent pas les sept scénarios validés et **ne constituent pas le GO de clôture R1**. **R1 IN PROGRESS / R2 NOT STARTED / STUDIO NEXT N/A — NON IMPLÉMENTÉ.**

### 2.39. Sortie formelle du cadrage R1 — décision Morris du 2026-11-02

**Statut : R1 CLOSED BY MORRIS — WITH CARRIED RESERVES (niveau cadrage).** Morris a explicitement validé la sortie R1 avec réserves reportées après revue formelle des six critères proposés (§2.37), comprenant l'examen complémentaire des quatre axes méthodologiques (§2.38). Cette décision **supersède uniquement les états temporels « R1 IN PROGRESS / EXIT CANDIDATE »** figurant dans les comptes rendus historiques de ce document ; elle ne réécrit ni les arbitrages et preuves passés, ni les décisions techniques futures.

**Décision canonique :** [`governance/decisions/2026-11-02-r1-cadrage-formal-exit.md`](../governance/decisions/2026-11-02-r1-cadrage-formal-exit.md). **Périmètre accepté :** neuf domaines IN/OUT, sept parcours E2E et leurs exceptions, rôles Pilote/Nora/Studio/Cursor, continuité et autorité, cartographie des risques et dépendances. La méthode/DoctrinePackage éventuel, les instructions opérationnelles Nora, les mécanismes v2.6 à adapter et l'évolution gouvernée sont **reportés comme qualifications R2 obligatoires** : leur architecture et leur implémentation ne sont **pas** validées par cette clôture.

**Réserves reportées sans blocage R1 :** qualité et contexte de Nora, continuité et décisions, identification/isolement Cursor CLI, Git partagé/conflits, preuve/observabilité et restitution. **R2** doit définir les contrats fonctionnels et arbitrages ; **R3** l'UX ; **R4** l'architecture ; **R5/R6** les preuves et états applicables. Ces réserves restent visibles et leur levée future ne peut être inférée de la décision de cadrage.

**Autorisation Git distincte également donnée par Morris :** commit documentaire de la décision et des synchronisations Next → PR candidate vers `main` → contrôle des changements et checks → merge sous gates satisfaits → relecture post-merge. **R1 clos au niveau décisionnel ≠ Git déjà mergé ≠ R2 engagé ≠ produit ADOPTED.** Les preuves Git d'intégration sont à vérifier, sans les anticiper dans cette section.

## 3. Répartition des responsabilités — principes validés

| Dimension | Nora | Pilote |
| --- | --- | --- |
| **Autonomie cognitive** | Comprend, analyse, recherche, challenge, conçoit, rédige, planifie et recommande dans les limites de ses capacités effectives | Exprime l'intention, complète si nécessaire, tranche les choix structurants |
| **Autonomie opérationnelle** | Lit les sources auxquelles elle est autorisée à accéder, agit directement dans les mandats valides, prépare et coordonne les délégations nécessaires | Donne les autorisations requises pour les effets et engagements qui dépassent le mandat existant |
| **Autorité décisionnelle** | Expose options, conséquences, incertitudes, risques et recommandation ; conserve la séparation sémantique | Valide les décisions métier structurantes, accepte les risques et autorise les engagements applicables |

**Règle clé :** autonomie cognitive élevée ≠ pouvoir de décision métier. Autorité humaine conservée ≠ multiplication systématique des validations techniques.

**Limite de compétence :** Nora ne prétend pas avoir exécuté une action, consulté une source ou obtenu une preuve sans capacité et observation réelles. Si l'outil, l'accès ou l'autorisation nécessaire fait défaut, elle explique la limite, prépare une option, sollicite la décision requise ou arrête proprement.

## 4. Parcours de référence — synthèse transversale de vision R1

1. **Intention :** le Pilote formule librement une demande (question, analyse, cadrage, conception, action).
2. **Compréhension :** Nora interprète l'objectif, retrouve le contexte fiable et demande des précisions seulement si elles changent réellement le résultat, le risque ou l'autorité.
3. **Travail cognitif :** Nora raisonne, recherche, compare, challenge, structure les options et prépare le résultat.
4. **Orientation selon les capacités et les effets :**
   - **Directe :** Nora réalise et restitue le travail possible et autorisé.
   - **Déléguée :** Nora prépare le contrat inspectable, sollicite l'autorisation applicable, puis Studio lance l'exécuteur sous le mandat valide ; les états observables sont restitués sans supervision cognitive permanente de Nora.
   - **STOP / arbitrage :** Nora explicite les inconnues, contradictions, limitations ou risques qui empêchent de poursuivre.
5. **Restitution :** Studio recueille le résultat réel et les déclarations de l'exécuteur ; Nora les analyse à l'aune du contrat et des preuves disponibles, puis restitue statut, écarts, réserves et verdict proportionné. Elle peut préparer un contrat correctif sans l'exécuter automatiquement.
6. **Continuité :** mise à jour ou reconstruction fiable du contexte utile et proposition de suite.

Cette chaîne est une **synthèse de l'expérience de vision validée au niveau R1**, détaillée par les sept scénarios de référence (§§2.30–2.36) et leur revue candidate (§2.37), **pas** un moteur, un écran, une suite de statuts implémentée ou une architecture adoptée. Elle **n'impose ni création formelle d'une Mission ni présence de projet/cycle actif** pour lancer une activité cognitive ; la formalisation et les gates dépendent de la portée des effets et des besoins de continuité (voir §2.15).

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
7. **Digression et changement de source : orientation révisée.** Depuis le projet courant, Nora peut explorer d'autres projets en lecture sans changer le projet de référence, perdre l'intention centrale ni accepter des droits transverses (§2.15) ; mécanismes de navigation et provenance à définir en R2/R3.
8. **Mémoire vivante transverse : intention validée.** À préciser en R1/R2 : seuil de pertinence, reconnaissance de décision, vérification de provenance, évolution/supersession, recherche contextuelle, confidentialité, reprise inter-sessions et visibilité au Pilote.
9. **Distinction conversation / autorité : orientation validée.** À concevoir et prouver : quand un échange devient une décision durable ou un acte d'autorité effectif, comment éviter confirmations redondantes et droits implicites, et comment établir les contrôles proportionnés.
10. **Hiérarchisation autonome et journal simplifié : arbitrage révisé validé.** **Deux vues dédiées Sujets / Décisions**, avec accès transversal aux points ouverts (réserves, blocages, questions), **sans vue dédiée Recommandations ni Réserves** (§2.11). À concevoir/tester : émergence et évolution des sujets, liens et provenance, récupération transverse proportionnée, coûts et non-altération des décisions.
11. **Questions ouvertes : orientation validée.** À éprouver : pertinence et priorité sans vieillissement arbitraire, relances contextuelles, résolution étayée sans usurper de décision, réouverture fondée et conservation du suivi.
12. **Investigation multi-sources et exploratoire : orientation validée.** À concevoir : accès, découvertes inter-sources, provenance/versions, limites de mandat, recherche documentaire, Git/PR, preuves, mémoire, pièces jointes et web ; coût, latence, restitution et arrêt de recherche.
13. **Capitalisation documentaire : orientation validée.** À qualifier dans les macro-lots : synchronisation Git utile, sources primaires, rôles Pilote/Nora, risques de contradictions et conservation des permissions.
14. **Nora contextualisée au sas ou au projet : orientation révisée validée.** Cockpit sans Nora ; projet courant unique, accès à d'autres projets en lecture autorisée seulement, avec/sans cycle actif ; préciser droits et rattachements, sans pilotage multi-projets (§2.15).
15. **Cycle léger, ouverture et clôture : principes validés.** À concevoir : GO conversationnel sans confirmation redondante, traçabilité d'état, matérialisation UX des transitions, rattachement à la trajectoire et limites des gates réellement applicables (§2.16).
16. **CKC de conduite méthodologique rattaché au cycle : principes validés.** À concevoir et éprouver : contribution sur la durée, contenu et format, pertinence des suggestions, gestion des digressions et absence de moteur de sélection CKC hors cycle par défaut (§2.17).
17. **Maturité proactive du cycle : orientation validée.** R2/R4 : critères adaptés et évolutifs, signalement opportun et non répétitif, guidance CKC cohérente, réserves reportables, preuves et contrôles applicables (§2.18).
18. **Trajectoire initiale et dynamique : orientation validée.** R2/R3/R4 : qualification initiale, étapes futures prévisionnelles, dépendances et révisions, panneau de trajectoire, transitions cohérentes et gestion des erreurs (§2.19).
19. **Transition intercycles et GO unique : orientation validée.** Un GO explicite peut couvrir clôture et ouverture si leur portée est claire, avec contrôles et effets distincts ; définir l'enregistrement, le STOP et la reprise sans double validation artificielle.
20. **Sas de création et continuité conversationnelle : principes validés.** Conserver la préqualification libre, l'aperçu évolutif, la création explicite par clic, puis **le même fil visuel dans l'espace projet (option A)** ; qualifier les seuils, la reprise de contexte, les échecs, les droits et le premier cycle distinct en R2–R4 (§2.20).
21. **Boucle d'exécution Pilote–Nora–Cursor : principes validés.** Préparation, contrat Pilot-first et instruction brute repliable, clic Exécuter, suivi observable par Studio, rapport Cursor distinct des preuves, analyse Nora et contrat correctif proactif sans exécution automatique (§2.21).
22. **Observabilité, interruption et conformité : conception à instruire.** R2–R4 : événements disponibles, provenance, secrets, interruption demandée/confirmée, états partiels, preuves et échec/reprise ; R5/R6 : comportement effectivement démontré (§2.21).
23. **Revue finale de cohérence R1 : diagnostic, non clôture.** Frontière sas/projet et lecture interprojets arbitrée ; qualifier ensuite carte de capacités, périmètre IN/OUT, scénarios de référence et critères réels de sortie avant toute proposition d'exit (§2.22).
24. **GitHub / dépôts / Cursor : principes de vision validés.** Connexion GitHub personnelle, accès Git autorisés par utilisateur, projet possible sans dépôt, emplacement proposé ou prescrit au besoin, accès Cursor indépendants et dépôts partagés possibles (§2.23).
25. **Cursor CLI et multi-utilisateur : faisabilité à démontrer.** CLI candidat prioritaire issu du REX historique ; isoler les sessions Cursor et les droits Git, ne pas déduire les accès du seul login Studio, qualifier l'authentification, les branches et les cas concurrents en R2–R6 (§2.23).
26. **Projets Studio individuels, Git partagé : option de collaboration validée.** Mémoire, conversations, décisions, cycles et autorisations restent propres à chaque projet/Pilote ; seules les sources explicitement accessibles permettent la collaboration ; pas de projet Studio collectif natif dans le périmètre initial (§2.24).
27. **R1 clôturé par Morris avec réserves reportées (2026-11-02).** La carte des neuf domaines et les sept E2E restent **VALIDATED BY MORRIS** (§§2.29–2.36). La revue (§2.37) et les quatre qualifications méthodologiques à reprendre obligatoirement en R2 (§2.38) ont été consommées dans la décision de sortie (§2.39 et Decision Record). **La clôture documentaire R1 n'anticipe ni la preuve Git post-merge, ni la conception R2, ni l'architecture R4, ni l'adoption runtime.**

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

**Précisions et validation du 2026-11-01 (v0.7, ORIENTATION HISTORIQUE REMPLACÉE PAR v0.12) :** Morris confirme que **Nora doit pouvoir être sollicitée dans tous les contextes de Studio** — hors projet, accueil/portefeuille, projet sans cycle et cycle actif — et reconnaître naturellement les travaux demandés sans exigence de « créer une mission » ou démarrer un cycle. Le cycle et la trajectoire gardent une valeur d'organisation et de **spécialisation cognitive**, notamment via les **CKC** cités par Morris ; leur contribution exacte et l'architecture Next sont encore à concevoir. Nora peut recommander ce cadre, sans décision métier ni autorisation implicite. Les modalités d'exécution hors projet/cycle et les règles de rattachement restent ouvertes (§2.15).

**Précisions et validation du 2026-11-01 (v0.8) :** Morris valide **un cycle léger et significatif** pour conduire une phase, suivre sa progression et marquer ses transitions, sans mission/cycle préalable obligatoire pour tout travail de Nora ni artefacts/gates déclenchés automatiquement par le cycle. Nora peut recommander l'ouverture ou la clôture ; **le GO explicite du Pilote peut être conversationnel**, sans clic redondant, tandis que la transition doit être **visuellement identifiable** et effectivement enregistrée. Morris confirme le **CKC associé au cycle actif**, sans activation autonome générale hors cycle, comme **spécialisation de la conduite méthodologique de Nora dans la durée**, et non format de ses réponses ou autorité imposant des livrables. Les contrats de maturité, clôture, UX et architecture restent à concevoir ; l'appréciation de la sortie est le prochain sujet R1 (§§2.16–2.17).

**Précisions et validation du 2026-11-01 (v0.9) :** Morris confirme **l'approche proactive de Nora pour apprécier la maturité** du cycle et recommander la clôture sans en disposer seule ; le **CKC actif constitue la guidance méthodologique de cette appréciation**, sans moteur de sortie concurrent. Morris confirme la **trajectoire proposée dès la qualification du projet, prévisionnelle et évolutive** selon les découvertes ; cycles futurs révisables, cycle actif constaté, enrichissements ou réorientations possibles sans rouvrir artificiellement les étapes achevées. La transition conserve les gates réellement applicables et un **GO explicite peut couvrir les deux effets distincts** de clôture et d'ouverture si son périmètre est clair. Les §§2.18–2.19 sont des orientations R1, non des contrats de maturité, UX, état ou architecture validés.

**Précisions et validation du 2026-11-01 (v0.10) :** Morris confirme le **sas de création conversationnel historique** comme expérience fonctionnelle cible à préserver : exploration et préqualification de l'intention, questions et scénarios, nom/objectif proposés, aperçu macro et trajectoire théorique si utile ; il maintient **le clic « Créer le projet »** comme acte explicite du Pilote. **Création du projet et démarrage du premier cycle sont distincts** : le cycle sera proposé/engagé ensuite dans l'espace conversationnel sous son GO. Morris valide **l'option A de continuité visuelle du même fil** entre sas et espace projet, sans nouvelle conversation imposée ni requalification répétée. La maquette Figma P3 sert de référence à réexaminer en R3, non de contrat d'implémentation ; les mécanismes, états, preuves et architectures demeurent ouverts (§2.20).

**Précisions et validation du 2026-11-01 (v0.11) :** Morris valide la **boucle de réalisation simple Nora → contrat Pilot-first → clic « Exécuter » du Pilote → Cursor → retour enregistré par Studio → analyse Nora → synthèse et éventuel nouveau contrat correctif préparé spontanément**. La version technique **exacte** transmise à Cursor doit rester consultable dans un bloc repliable ; Studio présente seulement **les états et événements live réellement disponibles**, sans surveillance cognitive continue par Nora ni progression inventée. L'**interruption manuelle du Pilote** est une capacité à étudier, sous preuve de faisabilité et distinction entre arrêt demandé/confirmé et effets existants. **Aucun enchaînement autonome d'exécutions** : un contrat correctif exige un nouveau clic/GO applicable. Les distinctions exécution terminée, résultat conforme, preuve et validation humaine demeurent explicites. §2.22 consigne les angles morts issus de la revue de cohérence R1 **sans les promouvoir en décisions validées**.

**Révision et validation du 2026-11-02 (v0.12) :** Morris **restreint Nora au sas de création et à l'espace conversationnel d'un projet créé** (avec ou sans cycle actif) ; **aucune Nora sur le cockpit/portefeuille**. Le projet courant est le seul projet de conduite du travail ; Nora peut toutefois consulter et citer d'autres projets **en lecture autorisée**, sans pilotage parallèle, sans mutation implicite, sans transfert de droits, de décisions ou de CKC. Cette révision **supersède le périmètre globalement transverse validé en v0.7** sans effacer la trace de l'orientation historique. La carte des capacités IN/OUT et les scénarios du produit restent à examiner avant tout exit R1 (§§2.15, 2.22). 

**Précisions et validation du 2026-11-02 (v0.13) :** Morris confirme la cible **connexion GitHub propre à chaque Pilote**, accès de Studio/Nora aux dépôts effectivement autorisés de ce compte, sans limitation à `sfia-workspace` ; création d'un projet Studio **sans dépôt obligatoire** ; choix ultérieur d'un emplacement Git par le Pilote ou sur proposition de Nora ; création/mutation Git confiée à Cursor sous contrat autorisé. Pour plusieurs utilisateurs, les dépôts partagés sont possibles avec habilitations individuelles et travaux isolés. **Cursor CLI est la piste prioritaire issue des essais REAL historiques**, avec authentification navigateur propre au compte Cursor, mais l'exécution sur serveur et l'isolation entre comptes sont à concevoir/prover ; GitHub Studio, session Cursor et droits Git de l'exécuteur restent distincts. **Aucun jeton GitHub personnel n'est supposé transféré de Studio vers Cursor.** La convention d'arborescence historique et le modèle de projet Studio partagé restent à qualifier **au moment de v0.13** (modèle individuel arbitré ensuite en v0.14, §2.24). **Ce sont des orientations de vision, pas des contrats techniques, une intégration choisie ni une preuve REAL** (§2.23).

**Validation définitive du 2026-11-02 (v0.14) :** après examen des conséquences, Morris retient **les projets SFIA Studio individuels**, avec collaboration via **Git et sources accessibles**. Chaque Pilote conserve sa conversation Nora, sa mémoire, sa trajectoire, ses cycles et ses décisions ; **aucune mémoire ni décision automatiquement partagée**, même lorsque deux projets Studio utilisent le même dépôt. La consultation d'une décision publiée dans Git ne crée pas de décision applicable ou d'autorisation de modification dans l'autre projet. Pas de projet Studio collaboratif natif dans le périmètre initial. Les conflits Git, droits, branches et isolations Cursor restent à spécifier et à prouver. Cette validation ferme le **choix fonctionnel de collaboration R1**, pas la carte complète des capacités ni l'exit R1 (§2.24).

**Arbitrages de carte R1 validés le 2026-11-02 (complément à la v0.14) :** Morris confirme pour le **domaine 3** la conduite cognitive complète avec production directe par Nora et réserve au **domaine 7** les exécutions/délégations/mutations gouvernées ; pour le **domaine 6**, il valide la séparation compréhension conversationnelle / décision structurante / autorisation opérationnelle, avec autorité humaine et contrôles effectifs par Studio. Détails et limites en §2.25. Carte globale, scénarios, exit R1 et mécanismes techniques non validés.

**Arbitrage de carte R1 validé le 2026-11-02 (domaine 7) :** Morris approuve la **Réalisation opérationnelle gouvernée** : préparation Nora, contrat Pilot-first inspectable, clic « Exécuter », réalisation technique par Cursor dans le mandat, états réellement observés par Studio, puis retour et revue sans correction automatiquement lancée. Le domaine 7 ne devient pas le moteur universel des modifications internes à Studio ; il n'absorbe ni la production cognitive directe (3), ni la mémoire (4), ni les cycles (5), ni l'autorité (6), ni la conformité/proof (8). Détails et limites au §2.26. La carte globale, l'exit R1 et la faisabilité CLI/REAL ne sont pas validés.

**Arbitrage de carte R1 validé le 2026-11-02 (domaine 8) :** Morris approuve le périmètre **« Résultats et preuves »** : bilan vérifiable et intelligible, rattachement aux exécutions/contrats, vérification proportionnée des déclarations Cursor, distinction terminé / objectif atteint / conformité démontrée / preuve manquante, réserves et continuité. Domaine 8 distinct de la réalisation technique (7), de la cognition directe (3) et de la décision/acceptation humaine (6) ; pas de tests universels ni d'adoption automatique. Détails et limites en §2.27. Les modalités R2–R6, la carte globale et l'exit R1 restent ouverts.

**Arbitrage de carte R1 validé le 2026-11-02 (domaine 9) :** Morris confirme **l'Intégration Git gouvernée et facultative par projet**, sous six conditions : dépôt non obligatoire, identité GitHub individuelle, consultations limitées aux accès autorisés, écritures par contrats techniques gouvernés et Cursor, collaboration par dépôt commun sans fusion des projets Studio, isolation des interventions et prévention des conflits. Répartition distincte avec les domaines 6 (autorité), 7 (réalisation) et 8 (preuves). Détails et limites en §2.28. Ni protocole d'identité, ni solution Cursor CLI multi-utilisateur, ni arborescence, ni carte globale, ni sortie R1 n'est adopté par cet arbitrage.

**Validation de la carte consolidée R1 du 2026-11-02 :** Morris valide le **périmètre IN/OUT des neuf domaines tel que présenté en conversation**, sans ajout de domaine. Il écarte explicitement les compléments fonctionnels envisagés à l'issue de la revue historique (PRR, Product Completion, ancienne UI), jugés non pertinents pour enrichir la vision R1 à ce stade. La carte consolidée figure en §2.29 ; scénarios end-to-end, critères de clôture, mécanismes et preuves restent ouverts. Cette validation **n'adopte ni les composants ni le DoctrinePackage de l'ancien Studio**.

**Validation des scénarios E2E 01 et 02 le 2026-11-02 :** Morris approuve la création de projet depuis un sas conversationnel **récupérable avant création** (option A E2E 01), puis le même fil visible dans le projet créé, sans création implicite, Git obligatoire ou cycle automatique. Pour la conduite de projet, Morris confirme **au plus un cycle effectivement actif par projet** (option A E2E 02), sans limiter les travaux cognitifs connexes ou le nombre de cycles planifiés/terminés. Parcours, exceptions, frontières et critères en §§2.30–2.31. Les mécanismes, UX et preuves restent R2–R6 ; R1 non clôturé.

**Validation du scénario E2E 03 le 2026-11-02 :** Morris valide l'**investigation et la production cognitive directe par Nora** ainsi que la capacité de **restitution cognitive structurée et adaptative**. Il demande que les résultats soient présentés de manière pertinente (titres, étapes, chronologies, tableaux, états, icônes, liens Git réels, preuves et arbitrages interactifs au moment utile), à l'image des captures de réponses ChatGPT partagées, sans formatage obligatoire, GO implicite ni système de composants figé. Scénario et critères en §2.32 ; domaines IN/OUT inchangés, R1 non clôturé.

**Révision et validation E2E 04 du 2026-11-02 :** Morris confirme la continuité inter-conversations, la mémoire hiérarchique et la séparation effective entre connaissance, décision et autorisation. Il **remplace l'orientation historique à quatre vues du journal** : **Sujets et Décisions** demeurent les deux seules vues dédiées ; un **accès transversal aux points ouverts** regroupe les réserves significatives, blocages, questions et conditions non résolues, sans imposer un onglet permanent autonome. **Pas de vue Recommandations** : les recommandations utiles restent contextualisées dans les sujets/conversations. §§2.11 et 2.33 et carte du domaine 4 synchronisés ; mécanismes, UX et preuves R2–R6 ouverts, aucune sortie R1 ni architecture adoptée.

**Validation du scénario E2E 05 le 2026-11-02 :** Morris confirme la séparation entre accord conversationnel, décision structurante et autorisation technique, avec contrat d'exécution Pilot-first inspectable, instruction exacte consultable, clic explicite « Exécuter », réalisation bornée par Cursor et restitution des seuls états réellement observés. Il valide le traitement des exceptions d'accès, de risque, de double lancement, de suspension et de reprise, sans présumer une interruption LIVE ni une conformité automatique. Détails en §2.34 ; E2E 06 reste à instruire, R1 non clôturé.

**Validation du scénario E2E 06 le 2026-11-02 :** Morris confirme la chaîne **retours Cursor → investigation et vérification proportionnée par Nora → bilan Pilot-first → éventuel contrat correctif non exécuté → acceptation/arbitrage humain**, avec séparation entre exécution terminée, résultat atteint, conformité démontrée, preuve manquante, décision métier et adoption. Les réserves acceptées ou non résolues restent retrouvables transversalement ; rapports, tests et Git contradictoires ne sont pas certifiés par simple déclaration. §2.35 ; E2E 07 à instruire, R1 non clôturé.

**Validation du scénario E2E 07 le 2026-11-02 :** Morris confirme le parcours Git individuel, facultatif et progressif, l'authentification GitHub propre à chaque Pilote, la consultation limitée aux accès réels, la réalisation via Cursor dans son propre contexte d'identité/permissions et sous contrat, ainsi que le partage de dépôts **sans fusion des projets, conversations, mémoires, décisions ou mandats Studio**. Les cas de concurrence et de base Git modifiée exigent contrôles/requalification/STOP, jamais écrasement silencieux ni merge implicite. Détails en §2.36 ; **sept scénarios R1 validés, revue transversale à mener, R1 non clôturé**.

**Consolidation de revue R1 du 2026-11-02 :** sur GO Morris de préparation de la consolidation et de synchronisation factuelle de la Roadmap, revue candidate des **neuf domaines** et **sept scénarios validés** ; cinq familles d'exceptions, six groupes de risques/dépendances et six critères d'exit proposés en §2.37. **Ceci ne vaut pas GO de sortie R1, publication `main`, ouverture R2 ou preuve produit Next.**

**Audit complémentaire pré-exit et GO de synchronisation du 2026-11-02 :** Morris valide l'inscription en §2.38 de quatre **axes de qualification pour R2** issus de la revue des héritages DoctrinePackage/CKC, des instructions Nora et de SFIA v2.6. La portée est une synchronisation documentaire de cadrage, **sans clôture R1, ouverture R2, PR/merge, adoption doctrinale ni implémentation Next**.

**GO de sortie R1 du 2026-11-02 :** Morris valide **R1 CLOSED WITH CARRIED RESERVES** et autorise la séquence Git distincte commit → PR → contrôles → merge → relecture post-merge ; décision enregistrée dans `governance/decisions/2026-11-02-r1-cadrage-formal-exit.md` et synthétisée en §2.39. Le démarrage R2 sur baseline intégrée reste conditionné à la vérification du merge, non à la seule rédaction de cette mention.

**Politique d'entretien :** enrichir ce **même document vivant** lors de nouveaux arbitrages significatifs ; préserver une trace concise du statut et des conséquences. Ne pas créer un micro-document ou une PR par idée. Un point discuté mais non tranché demeure « à challenger », sans devenir une décision par reformulation.
