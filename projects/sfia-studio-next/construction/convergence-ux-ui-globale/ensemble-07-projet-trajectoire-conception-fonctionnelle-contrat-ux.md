# Ensemble 07 — Projet et Trajectoire
## Conception fonctionnelle et contrat UX de référence

| Élément | Référence |
| --- | --- |
| Produit | SFIA Studio Next |
| Cadre | R5 / ML4D — convergence UX/UI globale |
| Portée | Ensemble 07, surfaces Projet et Trajectoire, et conduite transverse **SAS → projet créé → qualification initiale → trajectoire et cycles** |
| Statut de la cible UX | **VALIDÉE PAR MORRIS — 9 MAQUETTES FIGMA, 20/11/2026** ; pop-up SAS supplémentaire : **CANDIDATE À REVUE VISUELLE** |
| Nature du présent document | **Contrat de conception fonctionnelle et UX** : neuf écrans validés et principes supplémentaires approuvés oralement le 20/11 ; **réconciliation des spécifications D2/D3/D5 requise** avant réalisation ; aucun GO technique |
| Base documentaire vérifiée | main@6e93a33d64dfeea2eab88fb7896d733b34053f97 |
| Référence Figma | [Neuf écrans Ensemble 07 validés](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-46) et [nouvelle pop-up SAS, candidate](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1022-112) |
| Niveau de preuve | UX VALIDATED ; couverture runtime / navigateur / REAL **À EXAMINER** |
| Autorité des arbitrages | Morris ; ChatGPT formalise les choix validés ; Cursor exécute la technique sous SFIA v2.6 |

> Les textes « Projet Horizon », dates, compteurs et données métier des maquettes sont **illustratifs**. Ils ne constituent pas des données réelles, des preuves de réalisation ni des valeurs par défaut. Les neuf écrans validés désignent cinq vues de référence et quatre variantes, pas neuf modules ni neuf obligations de navigation. Une frame supplémentaire SAS illustre la pop-up candidate, **sans modifier ces neuf écrans**. Le présent contrat décrit la cible utilisateur approuvée ; il ne modifie pas les sources propriétaires D2/D3/D4/D5/D6, les décisions de gouvernance ni un schéma de persistance.

## 1. Résultat utilisateur et limites

Le Pilote doit pouvoir :
- créer explicitement son projet depuis le SAS puis recevoir, sans message supplémentaire de sa part, une **première intervention proactive de Nora** proposant une trajectoire ou ciblant ce qu'il manque pour la qualifier ;
- quitter Studio après création confirmée et retrouver son projet, l'analyse en attente/terminée et la conversation sans doublons ;
- progresser selon une trajectoire de **cycles reconnus** initiée cognitivement par Nora, mais décidée et gouvernée par le Pilote en langage naturel ;
- situer immédiatement le projet sélectionné, son cycle réellement actif ou son absence, les informations utiles et les voies de consultation ;
- distinguer dans la Trajectoire les étapes **clôturées**, le cycle **actif** et les étapes seulement **envisagées**, sans transformer une prévision en ouverture effective ;
- consulter les acquis et points à clarifier d'un cycle sans obliger Nora à produire une nouvelle synthèse conversationnelle pour chaque ouverture de page ;
- consulter un **bilan historique fidèle** d'un cycle clôturé, séparé de la situation courante des sujets et documents ;
- voir une suite envisagée et choisir librement de travailler cette suite avec Nora, **sans message injecté ni déclenchement implicite** ;
- accéder aux références CKI et à la méthode du projet sans confondre spécialisation cognitive et autorité méthodologique.

Le périmètre inclut les vues, variantes, navigation, règles de présentation et **mécanismes fonctionnels de conduite de trajectoire dès la création**. Les besoins nouveaux de qualification, continuation durable, première restitution et traçabilité **peuvent impacter API, persistance, contexte Nora ou contrats D2/D5** : ces impacts sont à qualifier, sans présumer de leur implémentation. Sont exclus le choix technique de stockage/modèle/worker, les nouvelles autorités, les moteurs concurrents, les nouvelles pages Maturité ou Réorientation, et le déclenchement d'un cycle par simple navigation. L'examen et l'exécution du contrat demeurent soumis à leurs gates.

## 2. Principes transverses

1. **Projet propriétaire, cycle contexte :** sujets, acquis, points ouverts, décisions applicables et documents demeurent des objets durables du projet, avec leur propriétaire fonctionnel. La clôture d'un cycle n'efface ni le Journal ni les Documents.
2. **Une seule étape active au maximum :** l'absence de cycle actif est légitime ; le projet et Nora restent utilisables. Une étape future n'est ni ouverte ni obligatoire.
3. **Vérité des états :** « clôturé », « actif », « envisagé » et « sans cycle » reflètent le statut effectif ou la projection qualifiée. Une recommandation de Nora ou une navigation ne constitue pas un GO.
4. **Historique distinct du courant :** le bilan de clôture reflète ce qui était acquis, ouvert, décidé ou produit à la date de clôture ; le projet peut évoluer ensuite, sans réécriture rétroactive.
5. **Consultation autonome :** l'utilisateur peut consulter Journal, décisions, documents, historique et références depuis l'espace projet sans demander à Nora de relire/résumer toute la mémoire.
6. **Information proportionnée :** les cartes montrent au plus deux ou trois éléments représentatifs et un « + N autres » si des éléments supplémentaires existent. Les compteurs proviennent d'une population réellement qualifiée ; aucune liste fictive ni déduction par simple comptage des sujets clos.
7. **Navigation sans effet métier :** consulter un cycle, ouvrir sa fiche, revenir à Travail ou à Trajectoire ne crée ni décision, ni cycle, ni message, ni nouvelle appréciation.
8. **CKI et méthode séparés :** le CKI principal est lié au type du cycle réellement actif et reste une guidance facultative ; la méthode applicable provient du choix effectivement retenu pour le projet. Aucune méthode n'est imposée par défaut.
9. **Pas d'écrans autonomes Maturité ou Réorientation :** la dernière appréciation qualitative de Nora est un repère contextuel facultatif du cycle actif ; une réorientation décidée apparaît dans la trajectoire et son histoire.
10. **Trajectoire vivante sous initiative Nora :** Nora entreprend la qualification initiale après création, recommande un premier cycle, suit la progression et prépare la suite. Le Pilote décide l'orientation et les effets de cycle naturellement dans le chat ; aucune console d'administration n'est nécessaire à l'expérience cible.
11. **Indépendance création/analyse :** un projet créé et vérifié survit à l'interruption ou à l'échec de l'analyse initiale. La continuation et le message proactif sont durables, dédupliqués et récupérables.
12. **Prérequis conditionnel de pilotage :** l'exploration et la clarification restent possibles sans trajectoire ; l'avancement structuré suppose une direction suffisamment qualifiée ou un premier cycle cohérent décidé par le Pilote, sans imposer un parcours standard.

## 3. Contrat des cinq écrans nominaux

### 3.1 Projet — Vue d'ensemble (09.01)

[Maquette 09.01](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-47)

- Rail et en-tête communs : identité du projet courant, navigation Travail / Projet / Journal / Trajectoire / Documents ; état actif de la navigation correctement identifié.
- En haut : nom et description du projet, issus de son état réellement disponible.
- Carte « Cycle en cours » : nom, finalité **spécifique à ce projet et à ce cycle**, état « Actif », suite éventuellement envisagée et action « Voir la trajectoire ». Pas d'explication générique répétée à chaque projet.
- Section « Activité du projet » : trois cartes **Sujets ouverts**, **Décisions applicables**, **Documents en cours**, chacune avec compteur, deux exemples et « + N autres » si nécessaire, puis action « Consulter » vers son espace propriétaire.
- Une décision visible est applicable selon la gouvernance ; une donnée documentaire est un état des documents ; une synthèse éditoriale n'autorise aucune mutation.
- Si aucune donnée ne répond au critère, afficher un état vide honnête, pas un compteur, un titre ou un « + N » inventé.

### 3.2 Trajectoire — Vue principale (09.02)

[Maquette 09.02](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-90)

**Parcours du projet :** mini-roadmap montrant le passé connu, le cycle actif et une suite éventuelle, sans calendrier fixe ni étapes artificiellement ajoutées. Trois traitements visuels doivent être discernables **avant lecture du statut** :
- **Clôturé** : carte verte, coche et repère de fin ; clic ouvrant le bilan historique de ce cycle.
- **Actif** : carte au focus violet, bordure renforcée et point central ; détails directement sous la roadmap, pas de page « historique du cycle actif » redondante.
- **Envisagé** : carte volontairement plus sombre et distante, contour discret et anneau non rempli ; clic ouvrant la consultation de l'étape future, **sans démarrage**.

**Cycle actif :** affiche son titre et son résultat recherché propres au projet. Deux rubriques distinctes :
- **Acquis identifiés** : connaissances réellement établies, applicables, utiles au cycle et sourcées, non équivalentes au nombre de sujets résolus ni à une décision humaine.
- **À clarifier** : questions, réserves ou sujets non résolus réellement pertinents, avec provenance et statut adaptés.

Chacune propose deux éléments représentatifs, « + N autres » si nécessaire et un renvoi vers le Journal. Le contenu doit être sélectionné à partir des objets existants, non régénéré par Nora à chaque affichage.

**Appréciation qualitative :** si une dernière appréciation pertinente de Nora existe, afficher son texte synthétique et sa date de référence de manière discrète. Ne pas en créer une à chaque message, clic ou rafraîchissement ; un réexamen cognitif est motivé par une évolution significative. Pas de score universel et pas de gate automatique.

**Accès CKI et méthode :** lien discret vers la vue 09.05, lorsque des références applicables existent ; absence de CKI actif correctement qualifiée hors cycle.

### 3.3 Cycle clôturé — Bilan historique (09.03)

[Maquette 09.03](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-133)

Vue dédiée, ouverte depuis un cycle **effectivement clôturé** dans la mini-roadmap. Elle contient :
- identité du cycle, objectif et date effective de clôture ;
- « Résultat à la clôture » : ce qui a été obtenu, ce qui a été différé, ce qui était incertain et les réserves alors applicables, sans interpréter la clôture comme acceptation universelle ;
- section **« Travaux et éléments réalisés »** : sujets abordés et état **à la clôture**, réserves transmises, documents produits ou modifiés avec **références de versions concernées** ;
- références aux décisions structurantes lorsqu'elles existent, auprès du registre de gouvernance propriétaire ; navigation de consultation vers Journal et Documents ;
- rappel intelligible que l'état courant d'un sujet, d'une réserve ou d'un document peut avoir évolué depuis.

Le bilan est une **restitution de l'état historique** : il ne doit ni effacer les éléments après clôture, ni modifier le Journal, ni recopier l'autorité des décisions. Les références manquantes, les états non reconstituables et une source devenue inaccessible doivent être signalés honnêtement. Les modalités techniques de rattachement des contributions et versions au cycle, ainsi que de conservation fidèle du bilan, **restent à qualifier** lors du diagnostic code et de la conception de réalisation. Elles ne sont pas supposées implémentées du seul fait de la validation UX.

### 3.4 Étape envisagée — Consultation de la suite (09.04)

[Maquette 09.04](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-176)

- Nom de l'étape et statut explicitement **envisagé / non ouvert**.
- Finalité exposée seulement si elle a été réellement qualifiée dans la trajectoire.
- Section « Ce qui reste à définir » uniquement sur des informations effectivement connues ; ne pas inventer des résultats ou des points à confirmer pour remplir l'écran.
- Action principale **« Travailler la suite avec Nora »** : simple retour au fil de Travail du même projet, sans préremplissage de message, création de cycle, changement de statut ou démarrage automatique de qualification.
- Retour vers la Trajectoire disponible, sans perdre le contexte du projet.

### 3.5 CKI et méthode — Références du cycle (09.05)

[Maquette 09.05](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-219)

Deux ensembles distincts :
- **CKI principal du cycle actif :** présentation éditoriale du contenu versionné applicable, notamment titre, résultat recherché, pertinence, principaux angles/techniques de spécialité, référence et version. La fiche CKI 02 « Conception fonctionnelle et cohérence métier » est une **illustration de cycle actif** ; la référence effective dépend du cycle. Pas de résumé généré à chaque ouverture, pas de quiz, pas d'étape obligatoire ni de décision produite par le CKI.
- **Méthode du projet :** référence de la méthode réellement sélectionnée, de sa portée et de sa version lorsqu'elles existent. Si aucune méthode n'a été retenue, afficher explicitement son absence ; l'exemple de méthode de la maquette n'est pas une méthode adoptée par défaut.

Le contenu CKI peut être pertinent comme information même lorsqu'il est consulté sans activer une nouvelle spécialité ; l'interface ne doit jamais suggérer qu'une navigation modifie le CKI principal runtime.

## 4. Quatre variantes validées

| Écran | État | Comportement attendu |
| --- | --- | --- |
| [09.06 — Projet sans cycle](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=999-261) | Projet présent, aucun cycle actif | Carte « Aucun cycle en cours » ; activité du projet toujours disponible ; accès à la Trajectoire ; pas de cycle inventé. |
| [09.07 — Trajectoire initiale](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=999-285) | Aucun cycle ni trajectoire définie | État vide explicite ; aucune roadmap fictive, aucune guidance CKI présumée ; possibilité de revenir librement à Travail avec Nora. |
| [09.08 — Entre deux cycles](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=999-335) | Un cycle clôturé, aucun actif, suite éventuelle | Dernier cycle clos consultable via son bilan ; suite présentée comme envisagée, non ouverte ; sujets/documents persistants ; retour à Nora sans message. |
| [09.09 — Premier cycle actif](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1005-428) | Un premier cycle actif, aucun clos | Mini-roadmap sans étape passée fictive ; focus sur le premier cycle (exemple « Cadrage »), acquis/points ouverts adaptés ; future étape seulement envisagée. |

Ces quatre variantes sont des **états de la même expérience**, non des sous-produits ou des moteurs supplémentaires. L'absence d'un futur prévisible, d'acquis, d'une appréciation Nora, de méthode ou d'un contenu CKI utilisable doit être traitée sans inventer de valeurs. En **09.07**, la qualification est à poursuivre avec Nora, pas à ignorer ; en **09.08**, Nora propose la suite pertinente après la clôture, sans ouverture présumée.

## 4 bis. Conduite continue de la trajectoire — contrat fonctionnel cible

**Décision de conception exprimée par Morris le 20 novembre 2026 :** Nora doit faire vivre le pilotage depuis la sortie du SAS, sans imposer une administration manuelle. La création du projet engage une **analyse initiale de trajectoire** et une intervention proactive ; les décisions de trajectoire, d'ouverture et de clôture demeurent celles du Pilote. Cette transcription n'amende **pas encore** les spécifications propriétaires R2/D2/D3/D5, et ne prouve aucune implémentation.

### 4 bis.1. Déclenchement lors de la création

1. Le Pilote clique explicitement **« Créer le projet »** dans le SAS. D2 vérifie puis enregistre le projet sous son identité durable et son contrat d'idempotence. Studio confirme **« Projet créé » uniquement lorsque le résultat est établi**.
2. **Après confirmation**, Studio engage ou consigne durablement une opération distincte de qualification de trajectoire, liée au **projet créé, au SAS et à un contexte de référence**. La création ne dépend pas du succès de cette analyse ; inversement, une analyse échouée n'annule jamais un projet créé.
3. Nora exploite l'intention, le résultat souhaité, les contraintes, acquis et inconnues **sourcés** du SAS, le catalogue applicable des types de cycles et leurs références CKI. Elle recommande une progression **au niveau cycle** : pas de micro-lots, tâches locales ou séquence imposée. La correspondance ne se réduit ni à des mots-clés ni à un parcours préétabli.
4. **Aucun effet de cycle ou de gouvernance** n'est inféré de la création : ni cycle ouvert, ni CKI principal activé, ni méthode sélectionnée, ni GO présumé. La décision du Pilote reste distincte.

Le temps d'analyse est variable : aucune durée fixe ni délai fictif ne sont contractuels. La persistance de l'opération, sa reprise, l'exactitude des entrées et la prévention des doublons sont des obligations fonctionnelles dont les moyens techniques restent à qualifier.

### 4 bis.2. Pop-up de création et retour après interruption

**Référence UX nouvelle :** [SAS Nora · 06 — Création projet et préparation de trajectoire](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1022-112). La maquette est **CANDIDATE**, les neuf frames de l'Ensemble 07 demeurent **validées et inchangées**.

La fenêtre présente **trois étapes**, avec leurs états vrais :
- **Création du projet** : en cours puis confirmée ; le statut « créé » signifie que le projet existe réellement dans le portefeuille.
- **Identification des cycles pertinents** : qualification en cours, en attente, à reprendre ou en échec, sans activation de CKI.
- **Première réponse de Nora** : restitution d'une trajectoire proposée ou d'une clarification ciblée dans le fil du projet.

La fenêtre initiale peut accompagner la création, sans imposer d'attendre indéfiniment. **Une fois le projet confirmé, il est accessible même si l'interface ferme.** À la reprise de Studio ou à l'ouverture du projet depuis le portefeuille, l'état doit être lu sur la source durable : **on ne rouvre pas systématiquement la pop-up**. Travail affiche la préparation en cours, la restitution disponible, la clarification requise ou l'incident technique ; aucun nouveau projet ni nouveau fil ne doit naître.

**Trois frontières de rupture** sont distinguées : fermeture avant création vérifiée → **réconciliation D2** avant toute nouvelle tentative ; fermeture après création, avant résultat d'analyse → **projet conservé et analyse retrouvée/reprise** ; fermeture après restitution → **projet et premier message existants retrouvés sans régénération**. Un échec de l'analyse ne constitue pas un échec de création.

### 4 bis.3. Issues possibles de l'analyse

| Issue réelle | Restitution et trajectoire |
| --- | --- |
| **Trajectoire proposable** | Nora explique le premier type de cycle pertinent et peut envisager une ou deux suites, avec finalités, raisons et incertitudes ; la proposition est conservée comme **proposition**, non retenue automatiquement. |
| **Informations insuffisantes** | Nora expose les informations déterminantes manquantes et propose une clarification ciblée ; pas de carte de cycle fictive, ni de trajectoire retenue par défaut. |
| **Erreur technique ou état inconnu** | Studio distingue la panne de l'insuffisance de contexte, expose l'état et la reprise contrôlée ; Nora ne prétend pas avoir conclu. Le projet créé demeure disponible. |

**Un à trois cycles est un horizon indicatif, pas un quota.** Un seul premier cycle suffit si les suites ne sont pas encore qualifiables ; aucune étape future n'est obligatoire, aucune progression imposée dans le catalogue CKI. Le Pilote peut accepter, discuter ou refuser la proposition et choisir un autre cycle. Nora challenge une incohérence avec des raisons et risques concrets, sans se substituer à la décision humaine dans les limites des restrictions opposables.

### 4 bis.4. Premier message proactif de Nora dans le même fil

Quand l'analyse aboutit cognitivement, sa conclusion doit être visible sous la forme d'une **intervention de Nora dans le fil SAS→Projet réellement continu**, **sans attendre un premier message du Pilote** dans le projet. Elle expose une recommandation de trajectoire, ou explique pourquoi la qualification doit continuer. La **projection affichée** et le **message** se rapportent au même état/version et ne se contredisent pas.

- Le traitement initial et la restitution doivent être **durables et dédupliqués** : un double clic, timeout, nouveau chargement ou reprise ne créent pas deux analyses concurrentes irréconciliables ni deux premiers messages.
- Le message est attribué à **Nora** et non à un message fictif du Pilote. Une erreur technique affiche une information Studio, **pas une réponse cognitive inventée**.
- Si le Pilote écrit avant la fin de l'analyse, son tour est conservé ; le système **ordonne** les travaux et réévalue une proposition devenue périmée par un changement de contexte important. Pas de réponse concurrente qui ignore la dernière information.
- **La navigation** vers Travail, Projet, Journal ou Trajectoire ne déclenche pas d'envoi : le seul événement initiateur de la première intervention est la qualification effectivement engagée **après création**. Les liens « Travailler avec Nora » des maquettes restent de simples navigations.

Le mécanisme de continuation de mission existant doit être étudié, sans présumer qu'il satisfait déjà la préparation durable de trajectoire et l'unicité du message.

### 4 bis.5. La trajectoire conditionne la progression structurée, pas la conversation

Sans trajectoire qualifiée, Nora peut toujours dialoguer, investiguer, produire des analyses, capitaliser les acquis et faire préciser l'intention. En revanche, la progression ne doit pas être présentée comme **un projet activement piloté dans des cycles** si la direction de cycles n'a pas été déterminée. **Nora conserve l'initiative de la qualification** au lieu de laisser s'installer une navigation passive sans pilotage. Si le Pilote décide explicitement un premier cycle cohérent, une trajectoire minimale peut être retenue autour de ce cycle, même avec une suite inconnue.

**Décision ≠ projection ≠ effet.** Une proposition de trajectoire de Nora n'est pas une trajectoire retenue ni un cycle ouvert. D6 qualifie l'acte humain compétent et les restrictions, D5 conserve les états vrais. L'expérience n'impose pas un formulaire d'administration ni un deuxième clic rituel après un GO naturel suffisamment clair.

### 4 bis.6. Pilotage conversationnel pendant les cycles

- **Cycle actif :** Nora utilise la finalité, les acquis D4, les points ouverts, décisions, dépendances et une guidance CKI réellement disponible ; elle poursuit les travaux cognitifs autorisés. Le CKI **principal** n'existe qu'après l'ouverture effective du cycle.
- **Événement significatif :** résultat substantiel, nouvelle réserve, contradiction ou changement de portée → Nora peut réexaminer proportionnellement maturité et suite ; **pas de scoring universel ni contrôle permanent à chaque message**.
- **Cycle terminable :** Nora **recommande** une clôture argumentée, avec bilan, réserves, travaux restant et cycle suivant éventuellement pertinent. Elle **ne clôture pas sans GO**.
- **GO naturel :** le Pilote peut répondre « Oui, on clôture le cadrage et on passe à la conception ». D6 vérifie l'autorité, D5 applique et confirme les effets réellement obtenus ; pas de confirmation redondante par défaut, pas de second cycle actif ni succès partiel masqué.
- **Entre deux cycles :** Nora prend l'initiative de proposer la suite pertinente de la trajectoire, ou indique ce qui reste à décider. Aucune ouverture automatique.
- **Réorientation :** la trajectoire évolue, conserve ses versions et n'efface pas les cycles clôturés ni les décisions antérieures.

**L'écran Trajectoire est une projection de consultation**, pas la façade d'un outil administratif. Les commandes techniques du Pilotage actuel ne font pas partie de l'expérience finale visée ; leur capacité fonctionnelle, leur autorité D6 et leur preuve doivent être conservées **via la conversation** avant tout retrait d'interface. Aucun moteur parallèle de commande, d'autorité ou de conversation n'est à construire.

### 4 bis.7. Traçabilité et contexte durable de Nora

Conserver des faits et justifications **interprétables**, non une chaîne de pensée privée :
- création du projet vérifiée, identité, lien préparation SAS et conversation continue ;
- opération de qualification initiale : identifiant, contexte et version d'entrée, état, résultat, horodatages, erreurs, retries/réconciliation ;
- proposition et révisions de trajectoire : types de cycles, finalités, ordre prévisionnel, motifs synthétiques, sources/incertitudes et statut **proposé / retenu / remplacé** ;
- décisions du Pilote : source réelle, objet, portée, état, restrictions et date d'effet applicables D6 ;
- cycles : type, objectif, dates d'ouverture/clôture, bilan/réserves, transitions réellement vérifiées ;
- CKI : association et version/pin, disponibilité, et **délivrance effective seulement si attestée** ; consultation du catalogue pour recommander un type ≠ activation du CKI principal ;
- première restitution de Nora, historiques d'essais, échecs et reprises, protections de non-duplication ;
- liens D4 (Journal/acquis/points), Documents et décisions, sans constituer une mémoire ou autorité concurrente.

À la reprise d'une session, Nora récupère cet état projet/trajectoire, ses réserves et décisions applicables, sans réexécuter aveuglément l'analyse initiale, sans créer une nouvelle trajectoire fictive et sans duplicata de message.

### 4 bis.8. Propriétaires, blast radius et dépendances

| Source propriétaire | À garantir / qualifier |
| --- | --- |
| **D2 Création et SAS** | Projet réellement créé, idempotence, référence SAS→Projet, déclencheur durable de qualification après confirmation |
| **D3 Nora** | Compréhension du contexte, initiative cognitive, continuation, première restitution proactive, ordonnancement des tours |
| **D4 Connaissance** | Acquis, points ouverts et sources du SAS/projet récupérables et pertinents |
| **D5 Trajectoire/cycles/CKI** | Proposition versionnée, projection des étapes réelles/envisagées, cycle actif et histoire, CKI principal réellement associé |
| **D6 Autorité du Pilote** | Décision de retenir une trajectoire, GO ouverture/clôture/transition et restrictions |
| **D8 et observabilité** | Différence entre calcul, effet réel et preuve, sans qualifier un événement « terminé » par sa seule intention |
| **UX SAS/Travail/Projet/Trajectoire** | Pop-up transitoire, état de reprise dans Travail, premier message, consultation des neuf frames validées |

La solution technique (modèle de traitement durable, route/API, enregistrement d'opération, messages, transaction, réconciliation et migration éventuelle) n'est **pas décidée** ici. Le choix minimal doit être fondé sur le code existant, sans duplication des propriétaires.

## 5. Navigation et absence d'effets de bord

| Origine | Action | Destination / effet autorisé |
| --- | --- | --- |
| Rail Projet | Consulter Projet ou Trajectoire | Changement de vue du même projet, sans changement du cycle |
| Projet, cycle actif | « Voir la trajectoire » | Trajectoire du projet |
| Projet, carte Sujets | « Consulter » | Journal / Sujets, données autoritatives |
| Projet, carte Décisions | « Consulter » | Journal / Décisions, état applicable |
| Projet, carte Documents | « Consulter » | Bibliothèque Documents du projet |
| Trajectoire, cycle clôturé | Ouvrir le cycle | Bilan historique de ce cycle |
| Trajectoire, étape envisagée | Ouvrir l'étape | Vue 09.04, sans mutation |
| Trajectoire, acquis/points ouverts | « Consulter le Journal » | Journal dans le contexte utile, sans nouveau registre |
| Trajectoire, CKI | Ouvrir la guidance | Vue 09.05, sans activation de CKI ou de méthode |
| Étape envisagée / états sans cycle | « Travailler avec Nora » | Travail, même projet/fil, **aucun message envoyé ou prérempli** |
| Bilan / CKI / étape envisagée | Retour | Trajectoire du même projet et contexte conservé |

**Déclencheur distinct de la navigation :** le clic explicite « Créer le projet » depuis le SAS engage l'opération de création puis, une fois celle-ci confirmée, la qualification initiale décrite au §4 bis. Les **maquettes Figma** fixent l'intention de navigation ; elles ne prouvent pas que chaque lien de prototype inter-page est configuré ni que le runtime effectue cette navigation. Les liens hors page Figma vers Travail, Journal et Documents doivent être qualifiés avec les écrans déjà réalisés.

## 6. Responsabilités, provenance et frontières

| Famille d'information | Source fonctionnelle propriétaire | Responsabilité de la vue |
| --- | --- | --- |
| Identité et contexte du projet | Projet / accès D1-D2 | Afficher le projet courant sans contamination interprojet |
| Analyse initiale et suite SAS→Projet | D2 / D3 / D5 | Distinguer création vérifiée, qualification en cours/terminée et première réponse, sans duplication |
| Initiative conversationnelle | Nora D3, D4/D5 en contexte | Conduire la qualification et proposer les transitions ; décision humaine D6 conservée |
| Trajectoire, cycles, états et objectif | D5 | Montrer état actuel, prévisions et résultats effectifs |
| Acquis, sujets, synthèses, points ouverts | D4 | Projeter une sélection intelligible et sourcée ; ne pas devenir une mémoire parallèle |
| Décisions applicables, GO, restrictions | D6 | Référencer les décisions effectives, sans les réédicter |
| Documents et révisions | D4 / surface Documents du projet | Lister et consulter, préserver versions et provenances |
| Appréciation de maturité | Nora D3, contextualisation D5 | Afficher éventuellement la dernière conclusion datée, sans recalcul automatique |
| CKI et méthode | Guidance/catalogue CKI, D5 méthode, D6 autorité du choix | Catalogue CKI consultable pour proposer ; CKI principal uniquement si cycle réellement actif ; utilisation réellement délivrée à tracer, sans décision implicite |
| Preuves, livraison, Git | D8-D9 selon responsabilité | Ne pas inventer une preuve ou une promotion depuis l'UX |

Les **acquis identifiés** ne sont pas synonymes de décisions applicables ni de sujets résolus. Leur sélection par pertinence, qualité et rattachement au cycle reste un point de réalisation à examiner. Le **bilan historique** nécessite des références fiables aux contributions, réserves et versions au moment de clôture : la solution physique (événements, relations, projection, capture de versions) n'est **pas décidée par ce document**.

## 7. Grammaire visuelle, robustesse et accessibilité

- Reprendre le style existant des pages Figma 03, 04, 05, 07 et 08 : palette sombre, Inter, liserés fins, accent violet, cartes sobres ; rail projet 246 px et bandeau supérieur 70 px sur les références desktop **1680 × 970**.
- La [pop-up candidate SAS 06](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1022-112) expose les trois étapes avec état vrai ; à la réouverture, la reprise est **contextuelle dans Travail** plutôt qu'une réouverture automatique de la fenêtre. Aucune durée garantie, attente indéfinie ni succès fictif.
- Les états Clôturé / Actif / Envisagé se distinguent **par plusieurs signaux conjoints** (teinte, contraste, forme, bordure, symbole, libellé), pas par couleur seule ; focus actif prioritaire.
- Une carte de roadmap ne doit pas devenir un formulaire de décision implicite. Les items longs, absences d'information, volumes élevés et variations de viewport n'entraînent ni troncature trompeuse ni perte de navigation.
- Navigation clavier, focus visible, libellés compréhensibles, contraste, annonces d'état et retours cohérents ; responsive/reflow à confronter au contrat visuel et au runtime, pas à prétendre prouvé depuis les seules frames desktop.
- Les résumés de 2 éléments et « + N autres » sont une **règle de présentation candidate validée par la maquette**, non une garantie d'API ou une limitation à deux objets dans le modèle.

## 8. Contrat d'acceptation UX — scénarios à vérifier lors de la réalisation

1. Projet avec un cycle actif : identité, objectif spécifique, liens et cartes de synthèse corrects ; compteurs et exemples cohérents avec leurs sources.
2. Trajectoire avec clos/actif/futur : distinction visuelle immédiate, focus actif, navigation vers bilan et suite, absence de mutation sur clic.
3. Journal/Décisions/Documents : retour correct vers les surfaces propriétaires, sans perte de projet ni duplication d'information gouvernante.
4. Bilan clos : résultat et réserves **à la clôture**, sujets/documents/versions historiques retrouvables ; évolution ultérieure du Journal distincte ; données manquantes signalées.
5. Suite envisagée : finalité seulement si établie ; navigation vers Travail sans texte injecté, sans ouverture ni transition.
6. CKI/méthode : présentation de sources versionnées sans génération à chaque ouverture ; absence de méthode/CKI traitée honnêtement.
7. Projet sans cycle (09.06) ; Trajectoire sans parcours (09.07) ; entre deux cycles (09.08) ; premier cycle actif sans passé (09.09) : variantes conformes sans données fictives ni gate automatique.
8. Actualisation/reprise : état réellement persistant, aucune double activation de cycle, appréciation Nora datée sans réévaluation systématique, pas de confusion entre état courant et historique.
9. Limites : contenus volumineux, longues descriptions, absence de documents/sujets, erreurs d'accès/droits, écran réduit, navigation clavier et respect des frontières interprojets.
10. Création confirmée suivie d'une analyse distincte : aucune ouverture de cycle/CKI implicite, projet conservé en cas de fermeture, timeout ou incident d'analyse.
11. Première restitution **proactive et unique** dans le même fil, cohérente avec une proposition D5 versionnée ou une question ciblée ; trois issues réellement distinguées (proposable, informations insuffisantes, erreur/UNKNOWN).
12. Trajectoire macro fondée sur les cycles disponibles, un premier cycle suffisant et deux suites seulement si utiles ; aucune étape fictive ni ordre standard imposé.
13. Fermeture avant création confirmée → réconciliation D2 ; fermeture après création mais avant analyse → retrouver/reprendre ; fermeture après résultat → pas de deuxième analyse ni message.
14. Nouveaux messages du Pilote pendant l'analyse → préservation, ordre, requalification d'une proposition périmée et absence de réponses concurrentes incohérentes.
15. Refus, alternative ou désaccord avec le premier cycle proposé : Nora challenge utilement puis respecte le choix humain autorisé, sans second clic administratif.
16. Maturité du cycle évaluée sur changements significatifs, recommandation de clôture/suite sans automatisme ; GO Pilote naturel contrôlé D6, effet D5 vérifié, trace complète et absence de double cycle actif.
17. CKI : catalogue consulté avant cycle ≠ CKI épinglé pendant cycle ≠ guidance délivrée ; source/version et état de disponibilité vérifiables.
18. Interface de Pilotage administrative retirée seulement après couverture conversationnelle démontrée de ses opérations D5/D6, sans perte de capacité ni de contrôle.

**Niveaux de preuve distincts :** conformité de maquette approuvée par Morris ; implémentation à constater au SHA de construction ; tests déterministes, navigateur RECETTE et éventuellement preuves LIVE/REAL **à établir séparément**. Une revue Figma ne vaut jamais BEHAVIOR PROVEN ni ADOPTED.

## 9. Dépendances à qualifier dans l'analyse des écarts

L'examen du code devra déterminer, **sans présumer qu'une capacité est absente ou présente** :
- les routes, composants et états effectivement disponibles pour Projet/Trajectoire/Pilotage **et le passage SAS→Projet** ;
- l'état exact de la création idempotente, la continuation post-création existante et la possibilité d'**analyser durablement une trajectoire**, de la reprendre et de restituer une réponse proactive sans duplicata ;
- le séquencement des tours de Nora et leur cohérence lorsque le Pilote écrit pendant la préparation ;
- la récupération source des sujets, acquis, points ouverts, décisions applicables, documents et versions ;
- la capacité à restituer les contributions du cycle et une photographie fidèle de clôture, avec leurs limites éventuelles ;
- l'origine, la fraîcheur et la conservation des appréciations de Nora ;
- l'alimentation CKI éditoriale et la méthode effectivement retenue ;
- les variantes d'absence de cycle/trajectoire, navigation, états négatifs, mobile et accessibilité ;
- le blast radius D1/D3/D4/D5/D6/D8/D9, les réserves et les preuves testables.

**Livrable aval attendu :** matrice « 9 frames Figma validées + pop-up SAS candidate + contrat ci-dessus ↔ code Git actuel ↔ écarts ↔ options de correction ↔ preuves/gates », puis un contrat de réalisation macro-lot à arbitrer. **Pas de préconisation de migration, création de moteur, schéma additionnel ou GO Cursor par la seule rédaction de ce document.**

## 10. Sources et traçabilité

Sources propriétaires examinées sur la baseline indiquée :
- [SEF v0.2, notamment §10](../../governance/SEF.md) — niveaux de contribution et gates.
- [Roadmap Next](../../governance/roadmap.md) — Ensemble 06 intégré, ML4D en cours, Gate C ouvert.
- [D2 — Création de projet et continuité du sas](../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md) — création, idempotence et fil continu.
- [D3 — Contexte et conduite gouvernée de Nora](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) — initiative et continuité cognitive.
- [D4 — Connaissance, sujets et continuité](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) — propriétés des sujets et réserves.
- [D5 — Trajectoire, cycles et guidance CKI](../../conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md) — cycles, états, maturité, méthode.
- [D6 — Décisions et gouvernance du Pilote](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md) — autorité des décisions et transitions.
- [UX espace projet Pilote–Nora](../../ux-ui/espace-projet-interaction-pilote-nora.md) et [contrat de transposition](../../ux-ui/contrat-transposition-figma-code.md).
- [Figma, page 09 — neuf frames 09.01–09.09](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-46), **validées par Morris dans la conversation du 20 novembre 2026**.
- [Figma, page 03 — nouvelle pop-up SAS 06](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1022-112), **candidate à revue**, sans modification des neuf frames.

### 10.1. Réconciliation normative requise avant GO de réalisation

Les orientations fonctionnelles approuvées oralement constituent une **cible UX et fonctionnelle documentée**, pas une modification tacite des spécifications R2 VALIDATED SPEC. Les responsabilités à réconcilier dans les sources propriétaires lors du contrat d'exécution sont :

| Source | Contrat en vigueur | Évolution à instruire |
| --- | --- | --- |
| **D2** RG-CRE-004/005/014/017/019/021/024, PF-CRE-06/19 | Projet créé sans cycle/CKI ; Nora **peut** proposer une trajectoire ; reprise de création et fil continu déjà prévus | **Engagement systématique d'une qualification après la création confirmée**, sans en faire une condition de validité du projet, avec retour/résultat durable |
| **D3** RG-CONV-002, RG-CTX-006 | Initiative et continuité cognitives dans un fil, pas d'autorité Nora | Préciser le **déclencheur de première restitution proactive**, l'ordre des tours et la reprise sans doublons |
| **D5** RG-TRJ-001/002/003/009/010/030–036, PF-TRJ-01/02 | Exploration possible sans trajectoire ; aucun cycle ou trajectoire présumé à la création | Distinguer **exploration libre** et **progression structurée orientée**, proposition macro à la création et accompagnement proactif des transitions |
| **D6** RG-GOV-002/005/008 et GO de cycle | Seul le Pilote décide, Nora recommande et Studio vérifie | **Invariant maintenu** : autorité D6 conservée même si l'UI administrative ne reste pas visible |

Ce travail a un **blast radius D2/D3/D4/D5/D6** et dépasse une pure transposition graphique de ML4D ; il doit être qualifié et autorisé comme capacité fonctionnelle transverse, sans nouveau moteur concurrent. Le présent document ne change pas ces règles normatives à leur place et ne constitue ni décision D2 nouvelle, ni GO technique.

### 10.2. Statuts et preuves

- **Neuf écrans Projet & Trajectoire** : UX **VALIDÉE** par Morris, inchangée.
- **Nouvelle pop-up SAS 06** : maquette **CANDIDATE**, créée et vérifiée visuellement, **sans validation individuelle encore constatée**.
- **Principes proactifs et reprise** : accord conversationnel Morris du 20/11/2026, **transcrit en conception**, sans publication de modification des règles R2.
- **Runtime d'analyse initiale persistante et premier message proactif** : **NON DÉMONTRÉ sur la base inspectée** ; évaluation code, tests et preuves navigateur restent requises.
- **Gate C / ML5 / R6 / ADOPTED** : non acquis. Pas de PR, merge, migration ni modification runtime par ce document.

**Statut : DOCUMENTED — neuf écrans UX validés, nouvelle pop-up candidate et compléments fonctionnels approuvés oralement, avec réconciliation R2 à instruire.** Aucun texte de décision ou propriétaire métier n'est amendé par ce fichier. **CONCEPTION ≠ IMPLÉMENTATION ≠ PREUVE ≠ ADOPTION.**
