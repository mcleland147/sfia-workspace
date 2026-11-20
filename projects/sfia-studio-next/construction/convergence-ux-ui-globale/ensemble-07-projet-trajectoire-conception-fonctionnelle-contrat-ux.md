# Ensemble 07 — Projet et Trajectoire
## Conception fonctionnelle et contrat UX de référence

| Élément | Référence |
| --- | --- |
| Produit | SFIA Studio Next |
| Cadre | R5 / ML4D — convergence UX/UI globale |
| Portée | Ensemble 07, surfaces Projet et Trajectoire |
| Statut de la cible UX | **VALIDÉE PAR MORRIS — 9 MAQUETTES FIGMA, 20/11/2026** |
| Nature du présent document | **Transcription documentaire de la cible validée** ; ne crée ni nouvelle décision métier, ni contrat d'architecture, ni GO technique |
| Base documentaire vérifiée | main@6e93a33d64dfeea2eab88fb7896d733b34053f97 |
| Référence Figma | [Page 09 — Ensemble 07](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-46) |
| Niveau de preuve | UX VALIDATED ; couverture runtime / navigateur / REAL **À EXAMINER** |
| Autorité des arbitrages | Morris ; ChatGPT formalise les choix validés ; Cursor exécute la technique sous SFIA v2.6 |

> Les textes « Projet Horizon », dates, compteurs et données métier des maquettes sont **illustratifs**. Ils ne constituent pas des données réelles, des preuves de réalisation ni des valeurs par défaut. Les neuf écrans désignent cinq vues de référence et quatre variantes, pas neuf modules ni neuf obligations de navigation. Le présent document décrit la cible utilisateur ; il ne modifie pas les spécifications propriétaires D4/D5/D6 et ne décide d'aucun schéma de persistance.

## 1. Résultat utilisateur et limites

Le Pilote doit pouvoir :
- situer immédiatement le projet sélectionné, son cycle réellement actif ou son absence, les informations utiles et les voies de consultation ;
- distinguer dans la Trajectoire les étapes **clôturées**, le cycle **actif** et les étapes seulement **envisagées**, sans transformer une prévision en ouverture effective ;
- consulter les acquis et points à clarifier d'un cycle sans obliger Nora à produire une nouvelle synthèse conversationnelle pour chaque ouverture de page ;
- consulter un **bilan historique fidèle** d'un cycle clôturé, séparé de la situation courante des sujets et documents ;
- voir une suite envisagée et choisir librement de travailler cette suite avec Nora, **sans message injecté ni déclenchement implicite** ;
- accéder aux références CKI et à la méthode du projet sans confondre spécialisation cognitive et autorité méthodologique.

Le périmètre inclut l'information, les vues, variantes, navigation et règles de présentation. Il exclut les nouvelles API, choix de stockage, algorithmes de sélection, mutations de cycles, moteur de décision, nouvelle page Maturité, nouvelle page Réorientation, création de cycle par clic, publication Git et toute garantie technique non encore examinée. L'examen des écarts code/UX constitue **l'étape suivante**, distincte de cette transcription.

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

Ces quatre variantes sont des **états de la même expérience**, non des sous-produits ou des moteurs supplémentaires. L'absence d'un futur prévisible, d'acquis, d'une appréciation Nora, de méthode ou d'un contenu CKI utilisable doit être traitée sans inventer de valeurs.

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

Les **maquettes Figma** fixent l'intention de navigation ; elles ne prouvent pas que chaque lien de prototype inter-page est configuré ni que le runtime effectue cette navigation. Les liens hors page Figma vers Travail, Journal et Documents doivent être qualifiés avec les écrans déjà réalisés.

## 6. Responsabilités, provenance et frontières

| Famille d'information | Source fonctionnelle propriétaire | Responsabilité de la vue |
| --- | --- | --- |
| Identité et contexte du projet | Projet / accès D1-D2 | Afficher le projet courant sans contamination interprojet |
| Trajectoire, cycles, états et objectif | D5 | Montrer état actuel, prévisions et résultats effectifs |
| Acquis, sujets, synthèses, points ouverts | D4 | Projeter une sélection intelligible et sourcée ; ne pas devenir une mémoire parallèle |
| Décisions applicables, GO, restrictions | D6 | Référencer les décisions effectives, sans les réédicter |
| Documents et révisions | D4 / surface Documents du projet | Lister et consulter, préserver versions et provenances |
| Appréciation de maturité | Nora D3, contextualisation D5 | Afficher éventuellement la dernière conclusion datée, sans recalcul automatique |
| CKI et méthode | Guidance/catalogue CKI, D5 méthode, D6 autorité du choix | Restitution informative, sans activation ni décision implicite |
| Preuves, livraison, Git | D8-D9 selon responsabilité | Ne pas inventer une preuve ou une promotion depuis l'UX |

Les **acquis identifiés** ne sont pas synonymes de décisions applicables ni de sujets résolus. Leur sélection par pertinence, qualité et rattachement au cycle reste un point de réalisation à examiner. Le **bilan historique** nécessite des références fiables aux contributions, réserves et versions au moment de clôture : la solution physique (événements, relations, projection, capture de versions) n'est **pas décidée par ce document**.

## 7. Grammaire visuelle, robustesse et accessibilité

- Reprendre le style existant des pages Figma 03, 04, 05, 07 et 08 : palette sombre, Inter, liserés fins, accent violet, cartes sobres ; rail projet 246 px et bandeau supérieur 70 px sur les références desktop **1680 × 970**.
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

**Niveaux de preuve distincts :** conformité de maquette approuvée par Morris ; implémentation à constater au SHA de construction ; tests déterministes, navigateur RECETTE et éventuellement preuves LIVE/REAL **à établir séparément**. Une revue Figma ne vaut jamais BEHAVIOR PROVEN ni ADOPTED.

## 9. Dépendances à qualifier dans l'analyse des écarts

L'examen du code devra déterminer, **sans présumer qu'une capacité est absente ou présente** :
- les routes, composants et états effectivement disponibles pour Projet/Trajectoire/Pilotage ;
- la récupération source des sujets, acquis, points ouverts, décisions applicables, documents et versions ;
- la capacité à restituer les contributions du cycle et une photographie fidèle de clôture, avec leurs limites éventuelles ;
- l'origine, la fraîcheur et la conservation des appréciations de Nora ;
- l'alimentation CKI éditoriale et la méthode effectivement retenue ;
- les variantes d'absence de cycle/trajectoire, navigation, états négatifs, mobile et accessibilité ;
- le blast radius D1/D3/D4/D5/D6/D8/D9, les réserves et les preuves testables.

**Livrable aval attendu :** matrice « 9 frames Figma + contrat ci-dessus ↔ code Git actuel ↔ écarts ↔ options de correction ↔ preuves/gates », puis un contrat de réalisation macro-lot à arbitrer. **Pas de préconisation de migration, création de moteur, schéma additionnel ou GO Cursor par la seule rédaction de ce document.**

## 10. Sources et traçabilité

Sources propriétaires examinées sur la baseline indiquée :
- [SEF v0.2, notamment §10](../../governance/SEF.md) — niveaux de contribution et gates.
- [Roadmap Next](../../governance/roadmap.md) — Ensemble 06 intégré, ML4D en cours, Gate C ouvert.
- [D4 — Connaissance, sujets et continuité](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) — propriétés des sujets et réserves.
- [D5 — Trajectoire, cycles et guidance CKI](../../conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md) — cycles, états, maturité, méthode.
- [UX espace projet Pilote–Nora](../../ux-ui/espace-projet-interaction-pilote-nora.md) et [contrat de transposition](../../ux-ui/contrat-transposition-figma-code.md).
- [Figma, page 09 — neuf frames 09.01–09.09](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-46), **validées par Morris dans la conversation du 20 novembre 2026**.

**Statut : DOCUMENTED — transcription de la cible UX VALIDÉE par Morris.** Le présent document ne formalise aucune nouvelle décision D2 et ne modifie pas les propriétaires métier. **CONCEPTION ≠ IMPLÉMENTATION ≠ PREUVE ≠ ADOPTION.**
