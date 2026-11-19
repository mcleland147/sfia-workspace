# SFIA Studio Next — Journal du projet
## Contrat de conception fonctionnelle et UX — document évolutif

| Métadonnée | Valeur |
| --- | --- |
| Version | v0.9 — 19 novembre 2026 (Europe/Paris) |
| Statut du présent document | **DOCUMENTED / WORKING DRAFT — NON NORMATIF / NON VALIDATED SPEC** |
| Objet | Capitaliser les fondements, les orientations de conception et les questions ouvertes de la convergence Journal |
| Périmètre | Ensemble 06 « Documents et Journal » ; **Journal en priorité**, puis Bibliothèque Documents |
| Base Git de la première rédaction | mcleland147/sfia-workspace · main@d3d199adb782462b93467934f5f1e8a0c98fb492 |
| Branche candidate documentaire | sfia/next-journal-conception-fonctionnelle-ux-20261119 |
| Autorité produit et arbitrages | Morris |
| Auteur de la synthèse | ChatGPT — proposition documentée, sans arbitrage autonome |
| Portée de la publication | Création documentaire sur branche candidate seulement ; **ni PR, ni merge, ni changement de doctrine/SEF/Roadmap, ni GO Cursor, ni implémentation, ni ADOPTED** |

> **Règle de lecture.** Ce fichier est le carnet de conception fonctionnelle et UX du Journal. Il ne remplace pas les contrats R1/R2/R3 déjà validés et ne fait pas passer une proposition issue de la conversation au statut de décision normative. À chaque révision, conserver la distinction entre **SOCLE VALIDÉ**, **ACCORD DE PRINCIPE EN DISCUSSION**, **PROPOSITION À ARBITRER**, **QUESTION OUVERTE** et **PREUVE À PRODUIRE**. Le présent texte n'est ni une preuve de réalisation ni une validation globale de l'Ensemble 06.

---

## 1. Pourquoi ouvrir ce document

### 1.1. Problème utilisateur

Au fil de semaines ou de mois de travail, le projet peut accumuler des centaines, voire plus d'un millier de messages dans le fil Pilote–Nora. Le Pilote doit pouvoir reprendre un sujet après interruption, comprendre rapidement ce qui a été discuté et retenu, et retrouver les échanges déterminants **sans devoir faire défiler toute la conversation**.

**Résultat recherché :** un sommaire intelligent, vivant et organisé de l'histoire du projet, consultable indépendamment du fil Nora, qui permet de passer de la compréhension synthétique à un échange d'origine précis.

Le Journal n'est pas une deuxième conversation, un archivage exhaustif des messages ou une interface où le Pilote doit administrer manuellement la mémoire du projet.

### 1.2. Ordre de conception demandé par Morris — 19/11/2026

1. Définir **d'abord la cible fonctionnelle et l'expérience** : navigation, parcours, contenu, interactions, états, puis conception visuelle Figma.
2. Soumettre les arbitrages progressifs à Morris et consolider ce document à mesure de leur validation.
3. **Ensuite seulement**, confronter la cible au code, à l'architecture, à la capitalisation existante et à la RECETTE pour qualifier les écarts, réutilisations, adaptations et capacités manquantes.
4. Traiter **Journal en premier**, puis Bibliothèque Documents, jugée fonctionnellement plus proche de l'attendu, sous réserve des anomalies observées.

**Statut :** choix de séquence exprimé par Morris ; **aucune autorisation de delivery technique** déduite.

## 2. Sources et fondements déjà validés — ne pas réarbitrer implicitement

| Source | Fondement applicable | Statut source |
| --- | --- | --- |
| [Vision cible R1 §§2.8–2.12](../../cadrage/vision-produit.md) | Mémoire vivante transverse du projet, Nora autonome, hiérarchie évolutive, continuité et séparation mémoire/décision | **SOCLE VALIDÉ R1** |
| [Connaissance, sujets et continuité — D4 R2](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) | Capitalisation sélective, provenance, actualité, récupération, sujets, points ouverts et invariants d'autorité | **SOCLE VALIDÉ R2** |
| [Décisions et gouvernance — D6 R2](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md) | HumanDecision, autorité, validité et historique : propriété D6, références uniquement côté Journal | **SOCLE VALIDÉ R2** |
| [Espace projet — R3](../../ux-ui/espace-projet-interaction-pilote-nora.md) | Journal Sujets/Décisions, inspection et retour vers Travail, consultation autonome et continuité | **CONCEPTION R3 AVEC RÉSERVES** |
| [SEF v0.2](../../governance/SEF.md) | Primauté du résultat utilisateur, responsabilités uniques, macro-lots, preuves et gates | **VALIDATED BY MORRIS** |
| [Convention de nommage](../../governance/product-naming-conventions.md) | Noms selon responsabilité produit, sans terminologie historique dans les nouveaux concepts | **VALIDATED BY MORRIS** |
| [Fiche de reprise Ensemble 06](ensemble-06-documents-journal-reprise.md) et [registre central UX](registre-central-revues.md) | Trajectoire de reprise et statut de revue, sans GO delivery | **DOCUMENTED** |

### 2.1. Invariants non négociables hérités de R1/R2

- **Deux vues principales du Journal : Sujets et Décisions**, et un **accès transversal aux points ouverts**. L'ancienne proposition à quatre vues Sujets/Réserves/Recommandations/Décisions a été remplacée par l'arbitrage R1 du 02/11/2026.
- La mémoire n'est pas enfermée dans un cycle ni dans une session ; elle reste rattachée au bon projet, selon les droits actuels.
- Nora peut identifier, enrichir, structurer, renommer, rapprocher, fusionner ou scinder des sujets pertinents. Le Pilote **ne doit pas tenir une taxonomie à la main** à chaque conversation.
- **Un sujet peut exister seul, sans sous-sujet obligatoire.** Tant qu'il n'est pas subdivisé, il rassemble directement la synthèse et les acquis, questions, sources et références utiles. S'il se spécialise, il peut devenir parent sans changer d'identité.
- Le sujet parent synthétise ; les sous-sujets approfondissent, **mais un parent peut conserver les acquis et questions véritablement généraux**. Nora rattache les connaissances spécifiques au niveau pertinent sans les dupliquer. Identité, filiation et provenance demeurent retrouvables ; une réorganisation ne réécrit pas les faits ou décisions d'origine.
- Capitalisation **sélective et proportionnée** : pas de fiche pour chaque message, question passagère ou recommandation. **Chaque échange peut conduire Nora à réexaminer ce que la mémoire doit conserver, sans imposer une modification persistante à chaque message.**
- Les synthèses du Journal sont des **restitutions sémantiques cohérentes et actualisées**, pas des assemblages de citations ou un journal chronologique déguisé. Elles distinguent orientation, acquis, questions et statut de validation.
- Les points ouverts significatifs restent accessibles au-delà du sujet ou du cycle ; une simple absence de nouvelle discussion ne les clôt pas.
- Une décision du Pilote, sa portée, sa révocation, sa suspension et son historique opposable demeurent **exclusivement sous l'autorité D6**. Le Journal affiche des références, jamais un registre bis.
- Les sources doivent être vérifiables ; état actuel et historique, établi/hypothétique, source disponible/inaccessible et preuve/déclaration demeurent distingués.
- Le retour au travail Nora reste un accès à **un même fil continu** du projet ; consulter un contenu ne transmet pas automatiquement un message ni une autorisation.

## 3. Direction UX retenue en discussion — niveau d'engagement explicite

### 3.1. Structure générale du Journal

**ACCORD DE PRINCIPE EN CONVERSATION (19/11, non publié comme décision D2) :** une entrée « Journal » dans l'espace projet, avec deux vues internes **Sujets** et **Décisions** ; les points ouverts sont consultables transversalement, **sans troisième onglet métier principal**.

Le détail de la navigation du rail (notamment doublon possible avec l'accès Décisions/Pilotage), les liens profonds et la disposition mobile doivent encore être arbitrés sur Figma.

### 3.2. Priorité réelle du parcours

Le Journal doit avant tout permettre de :

1. **Comprendre** les principaux thèmes abordés et leur état courant.
2. **Approfondir** un sujet via ses sous-sujets, acquis et éléments restant à clarifier.
3. **Retrouver** quelques échanges d'origine décisifs, dans le fil Nora, sans dupliquer la conversation.
4. **Reprendre le travail** sans perdre le contexte d'origine.

Cette hiérarchie prime sur la quantité d'objets, de filtres ou de fonctions visibles.

### 3.3. Points ouverts : simplification proposée

**SOCLE VALIDÉ :** accès transversal aux questions/réserves/blocages non résolus ; continuité de leur état et de leur provenance.

**PRINCIPE UX ACCEPTÉ EN CONVERSATION LE 19/11 :** un point ouvert existe et se consulte **d'abord dans son sujet d'origine** ; l'accès transversal est proposé comme un **filtre secondaire « Points ouverts » dans la vue Sujets**, à proximité immédiate de la recherche, et non comme bouton d'en-tête ou troisième onglet. Lorsqu'il est activé, il donne une projection des questions, réserves, blocages et conditions significatives encore ouvertes avec leur **sujet d'origine**, leur nature et leur provenance utiles. Choisir une entrée ouvre son sujet dans la visionneuse 40/60 en mettant le point concerné en contexte. La désactivation du filtre restitue l'arborescence et son état conservable.

L'affichage doit distinguer **question factuelle résolue sur preuve** et **réserve/levée gouvernée D6** ; l'absence d'échange récent ne clôt rien. **Ne pas créer** un registre bis, un troisième onglet, une tâche à cocher sans autorité ni une obligation d'administration par le Pilote. L'aspect précis du filtre sera évalué en Figma ; les boutons « Tous »/« Avec points ouverts » précédemment rejetés et le bouton « Points à reprendre » d'en-tête ne sont pas la cible.

### 3.4. Historique : éviter le doublon conversationnel

Deux choses différentes existent :
- **Le fil d'échanges original** : messages du Pilote et de Nora, conservés dans Travail.
- **L'évolution de la connaissance** : création/renommage/regroupement/scission, constat devenu historique, synthèse mise à jour, source remplacée.

**PROPOSITION À ARBITRER :** ne pas afficher un onglet permanent « Historique du sujet » et **ne pas reconstruire tous les messages comme une chronologie parallèle** dans le Journal. La traçabilité d'évolution est conservée par la responsabilité adéquate et pourrait être ouverte via une action secondaire « Voir les évolutions » seulement lorsqu'elle apporte une valeur.

## 4. Parcours cible — Journal / Sujets (candidate UX)

### 4.1. Écran initial : explorer les sujets

**PROPOSITION À ARBITRER VISUELLEMENT :**
- Rail de navigation **déjà existant** à gauche : ne pas lui ajouter un deuxième rail permanent comme dans les wireframes exploratoires précédents.
- Dans la **surface principale**, en-tête Journal, accès Sujets/Décisions et arborescence/sommaire des thèmes du projet.
- Les parents peuvent être dépliés pour exposer les sous-sujets ; recherche/filtrage à qualifier selon les volumes, sans imposer d'outils prématurés.
- Chaque entrée est lisible comme un thème, pas comme un identifiant technique ni une fiche de gestion.

**DISPOSITION ACCEPTÉE EN PRINCIPE PAR MORRIS LE 19/11 :** **même écran Journal**, initialement en exploration pleine largeur ; la sélection d'un sujet **réadapte cette même surface** (titre « Journal », onglets, recherche, arborescence, sélection et position conservés) à environ **40 % de la zone projet**, pendant qu'une visionneuse de lecture occupe les **60 % restants**. La visionneuse peut s'agrandir dans l'espace principal avec sa présentation enrichie, puis revenir au mode partagé **sans perdre l'état de l'arborescence, de la recherche ou du sujet**. Le rail global de la page 05 reste inchangé ; **aucun deuxième explorateur distinct ni changement de page induit**. La DA Figma V4 (base visuelle retenue par Morris pour la suite, non réception technique) transpose ce principe. À petite largeur, ne pas comprimer aveuglément les deux panneaux : une variante de consultation / retour sera à qualifier.

### 4.2. Un sujet unique, vivant et éventuellement hiérarchisé — principe de conception accepté le 19/11

**PRINCIPE DE CONCEPTION ACCEPTÉ PAR MORRIS EN CONVERSATION ; précision de R1 §2.10, sans modification normative de R1/R2.**

- Un **sujet** est une unité évolutive de connaissance : il ne naît **pas** obligatoirement avec un enfant ni comme un « dossier » vide. Il peut rester un sujet simple toute la vie du projet.
- Au départ, un sujet simple comporte directement sa **synthèse, ses acquis significatifs, questions pertinentes, références et sources**.
- Lorsque les échanges montrent plusieurs axes suffisamment autonomes, Nora peut faire émerger des sous-sujets progressivement. L'objet initial **conserve son identité**, ses origines et l'accès à son histoire : il devient parent **dans l'organisation**, sans être remplacé.
- Dans cette évolution, Nora peut rattacher les acquis, questions et références **spécifiques** aux enfants correspondants ; le parent devient davantage une **vision consolidée** de l'ensemble et de ses axes.
- **Aucun interdit absolu sur les acquis ou points ouverts du parent** : une orientation, un acquis ou une question réellement transverse au thème général peut demeurer à ce niveau. Les sous-sujets approfondissent leurs périmètres respectifs.
- Le parent ne recopie pas systématiquement ses enfants : une évolution locale amène à **réexaminer** la synthèse du parent si elle en change le sens, sans imposer une réécriture inutile des autres branches.
- La « transformation » ne crée ni deux autorités, ni deux registres ni une identité nouvelle de fait : on adapte **la représentation et le rattachement de la connaissance**, avec traçabilité.
- Une réorganisation peut être proposée puis différée lorsque la frontière du sujet demeure incertaine ; elle ne doit pas requalifier une hypothèse en fait établi ou une recommandation en décision.

**Exemple de lecture, illustratif et non modèle imposé :**
1. **Au départ, « Journal » seul :** synthèse complète de la mémoire du projet, acquis actuels, questions de structuration et références conversationnelles.
2. **Après spécialisation :** « Journal » exprime la vision consolidée, tandis que « Organisation des sujets », « Consultation des décisions » et « Références conversationnelles » portent leurs développements propres.
3. **Le parent reste porteur du global :** par exemple, « Le Journal sert à comprendre l'histoire du projet sans relire le fil complet » n'a pas besoin d'être dupliqué dans chaque enfant.
4. **Les détails restent chez les enfants :** critères de séparation, profondeur de navigation, ancrage sur un message, etc. ne sont pas systématiquement recopiés au parent.

### 4.3. Présentation adaptative — un concept, pas trois types métier

**Direction fonctionnelle acceptée dans son principe ; organisation visuelle, sections exactes et rendu Figma à arbitrer.** La fiche et son espace de lecture s'adaptent à la réalité du sujet, sans imposer trois templates de données différents.

| Situation du sujet | Priorité éditoriale | Informations exposées lorsque pertinentes |
| --- | --- | --- |
| **Sujet autonome sans enfant** | Synthèse substantielle et actuelle du thème | Acquis directs, questions ouvertes, décisions liées, quelques références vérifiables |
| **Sujet devenu parent** | Vision consolidée et cheminement général, principales orientations et accès aux enfants | Uniquement les acquis ou questions propres à l'ensemble ; références structurantes ; sous-sujets et liens utiles |
| **Sous-sujet** | Synthèse approfondie de son périmètre | Acquis spécifiques, questions et points à reprendre, liens D6, références du thème ; peut à son tour devenir parent |

**Principe anti-redondance :** la synthèse du parent et celle de l'enfant décrivent **la même réalité à des niveaux de granularité différents**, pas deux versions concurrentes de la vérité. Les détails du sous-sujet ne sont pas répétés en bloc au parent ; un parent peut conserver un élément général qui ne relève d'aucun enfant.

**Trame de fiche candidate (sections conditionnelles, ordre non figé) :**

| Zone | Rôle | Sobriété et conditions |
| --- | --- | --- |
| Contexte | Chemin du sujet, titre, accès au parent ou à la liste | Revenir sans perdre le contexte |
| Synthèse actuelle | Texte **rédigé et consolidé** : signification, situation et orientations du thème | Pas de juxtaposition de fragments de réponses |
| Ce qu'on a retenu | Acquis réellement attribuables à ce niveau, avec qualification nécessaire | Ne pas imposer une section « acquis » artificielle à un parent |
| À reprendre | Questions et réserves encore pertinentes à ce niveau | Absent si rien à signaler ; statut et provenance respectés |
| Sous-sujets | Navigation vers les composantes identifiées | Absent si le sujet est autonome |
| Décisions associées | Renvois aux actes D6 réellement liés | Aucune recopie d'autorité |
| Échanges de référence | **Sélection courte, justifiée et vérifiable** renvoyant au fil original | Pas d'inventaire exhaustif des messages |
| Évolutions et sources complémentaires | Accès secondaire si utile aux explications ou à la traçabilité | Pas de deuxième chronologie conversationnelle |

**Questions ouvertes** : place des enfants, densité de la fiche parent, méthode de condensation et indication d'actualité, longueurs de synthèse, état source inaccessible, responsive, accessibilité et profondeur utile de navigation.

### 4.4. Mémoire vivante : entretien continu et capitalisation sélective

**PRINCIPE CONFIRMÉ PAR MORRIS :** Nora ne produit pas uniquement une réponse conversationnelle ; elle doit aussi tenir compte de la mémoire durable du projet. Celle-ci **vit avec les échanges**, reste cohérente, synthétique, hiérarchisée, pertinente, sourcée et récupérable pour les reprises futures.

**Distinction structurante** : « chaque message peut déclencher une réévaluation » **n'implique pas** « chaque message modifie une fiche en base », « chaque message produit un nouveau sujet » ou « il faut recalculer toute la mémoire ». La réévaluation peut déboucher sur :
- **Aucun changement durable** : échange passager, redondant ou sans apport fiable ;
- **Enrichissement/actualisation ciblée** : acquis, question, nouvelle source, contradiction, synthèse ou statut factuel à revoir ;
- **Réorganisation proportionnée** : sous-sujet émergent, rapprochement, reclassement, fusion ou scission, avec identité et filiation préservées.

**Déroulement logique de conception**, sans prescription d'architecture, de pipeline ni de synchronisme :
1. **Lire les apports réels** de l'échange et, lorsque nécessaire, d'une investigation ou source obtenue ; distinguer parole du Pilote, hypothèse Nora, fait sourcé et acte D6.
2. **Identifier le ou les sujets pertinents**, y compris le besoin éventuel de créer un sujet, sans recalculer indistinctement le projet complet.
3. **Comparer à la connaissance actuelle pertinente** : est-ce nouveau, répété, contradictoire, une correction, une précision ou une information dépassée ?
4. **Juger l'utilité durable** et décider si une synthèse, un acquis, une question, une référence ou la hiérarchie doit réellement changer ; différer une catégorisation insuffisamment fondée.
5. **Rédiger/consolider sémantiquement** : produire une synthèse cohérente lisible indépendamment du transcript, pas un collage de citations ; réévaluer les éventuels parents touchés par l'évolution d'un enfant.
6. **Préserver les garanties** : source réelle et accessible, identité/filiation/historique, temps/version, droits, distinction actuel/historique, auteur/portée D6 inchangés, état d'écriture honnête en cas de panne.
7. **Rendre disponible** la connaissance effectivement conservée pour consultation et reprise pertinente par Nora, sans affirmer une mise à jour non confirmée.

**Exigence de qualité** : on doit pouvoir revenir deux semaines plus tard, lire la synthèse du sujet et comprendre les orientations, acquis, incertitudes et suites **tels qu'ils sont actuellement établis**. Une synthèse qui juxtapose « Morris a dit... puis Nora a répondu... » est insuffisante si elle ne restitue pas le sens consolidé. Inversement, une synthèse fluide mais inventant une décision ou effaçant une contradiction est également non conforme.

**Ne pas sur-spécifier la technique :** les mécanismes d'analyse/production, les déclencheurs exacts, la granularité transactionnelle, le coût de calcul, la persistance et la reprise après échec devront être qualifiés lors de la réconciliation architecture/code, avec des preuves de volume, qualité et idempotence. **Ce document fixe le résultat et les invariants, pas un second moteur cognitif.**

### 4.5. Sous-sujet émergent : critères sémantiques plutôt que quotas

**Proposition de qualification à éprouver** : Nora évalue l'**autonomie sémantique** d'un axe, sans règle mécanique fondée sur le nombre de messages. Signaux indicatifs et non conditions rigides :

- Un thème fait l'objet d'un approfondissement qui possède sa **propre intention intelligible**.
- Ses acquis, questions, sources ou arbitrages liés deviennent spécifiques et **retrouvables indépendamment**.
- Le Pilote pourrait raisonnablement reprendre cet axe seul après une interruption.
- La séparation améliore la lisibilité ou l'orientation dans le Journal, au lieu d'augmenter le nombre de rubriques pour lui-même.
- Une dénomination distincte et une frontière suffisamment stables peuvent être exprimées sans les inventer.

**Anti-complexité :** évoquer ponctuellement les décisions pendant une discussion sur le Journal ne crée pas automatiquement le sous-sujet « Consultation des décisions ». Celui-ci devient utile lorsqu'une investigation identifiable nécessite une continuité et une synthèse propres. L'absence de sous-sujet est un état nominal valide ; la séparation peut intervenir plus tard et rester réversible avec provenance.

**Reste à arbitrer** : gestion des ambiguïtés, sujets proches et chevauchements, signalement discret des réorganisations au Pilote, stratégie de consolidation après correction, représentation des événements de transformation et critères testables de justesse/coût.

### 4.6. Visibilité discrète des actualisations du Journal — principe UX accepté le 19/11

**PRINCIPE DE CONCEPTION ACCEPTÉ PAR MORRIS EN CONVERSATION (modèle B) ; détails d'interface et preuves encore à qualifier.** L'entretien de la mémoire est **autonome et peu intrusif** : Nora ne commente pas constamment ses opérations de capitalisation et ne demande pas une validation rituelle pour enrichir ou organiser les sujets.

- **Lecture nominale :** le Pilote ouvre le Journal et trouve la connaissance effectivement disponible, consolidée et lisible. Aucune chronologie technique ni notification systématique ne doit masquer sa synthèse.
- **Signal discret, contextuel :** lorsqu'une actualisation durable est **confirmée**, la fiche peut montrer une information sobre (« actualisé le… » ou équivalent), sans transformer le Journal en centre de notifications.
- **Compréhension facultative des changements :** une consultation secondaire des évolutions *significatives* (p. ex. nouvelle branche, fusion, correction importante) peut être utile ; elle ne doit pas reproduire tous les messages ni chaque opération de Nora. La pertinence, la forme et la granularité restent à concevoir.
- **Vérité d'état :** distinguer connaissance effectivement persistée, actualisation proposée/en cours, retard, échec ou état incertain ; **ne jamais afficher « à jour » ou annoncer un succès sur une simple intention de mise à jour**. Si l'information de fraîcheur n'est pas fiable ou disponible, ne pas inventer de date.
- **Proportionnalité :** un échange sans apport durable ne produit ni activité visible artificielle, ni badge, ni écriture obligatoire.
- **Non-interférence :** une actualisation de mémoire ne change pas seule le statut d'une HumanDecision, n'envoie pas de message et ne décide pas à la place du Pilote.

**À arbitrer en UX/Figma :** lieu et libellé du signal (fiche, vue Sujets ou métadonnée secondaire), apparence des modifications importantes, cas de mémoire incomplète/indisponible, moment où rafraîchir la vue ouverte, absence d'effet de distraction dans le fil Nora.

**À qualifier lors de la convergence fonctionnelle et technique :** source fiable de l'horodatage, cohérence entre fil et mémoire, latence/staleness acceptable, atomicité/reprise après échec, continuité des sujets après une correction et preuve que l'affichage reflète la dernière révision effectivement conservée.

## 5. Références conversationnelles — contrat d'expérience candidat

### 5.1. Ce que l'on souhaite montrer

**Direction proposée après les échanges du 19/11 :** présenter uniquement **une sélection de messages clés**, pas « tous les échanges associés au sujet ». Quelques extraits peuvent justifier une orientation, illustrer une question initiale, signaler un changement majeur ou éclairer la synthèse actuelle.

- Prévisualisation brève ; auteur Pilote/Nora, repère temporel si disponible ; indication de l'intérêt de la source lorsque utile.
- Une même référence peut contextualiser une synthèse, mais **ne remplace pas** la source et ne certifie pas un état d'autorité.
- Éviter un quota arbitraire par sujet à ce stade ; sélectionner par pertinence et capacité à justifier l'information.
- **Pas de duplication ni d'index UX exhaustif** de 100, 500 ou 1 500 messages dans le Journal.
- Distinguer ce qui est **extrait de manière vérifiable** d'une paraphrase produite par Nora.

### 5.2. Cliquer sur une référence

**Comportement cible proposé, preuve technique à instruire plus tard :**

Journal → Sujet → aperçu d'échange → **Travail avec Nora au message original exact**, repérable au milieu de ses messages voisins → retour contextualisé à la fiche Journal.

Le message est une **référence à la conversation d'origine**, pas une copie intégrée au Journal. Il doit être possible de charger les portions pertinentes d'un fil très volumineux et de conserver un point de retour explicite, sans perdre un brouillon non envoyé et sans imposer un nouveau dialogue. Si le message a été retiré ou n'est plus accessible, montrer cette indisponibilité plutôt qu'une cible fictive.

**À arbitrer** : sélection automatique et actualisation des messages clés, présentation de citations longues, comportement d'ancrage/scroll, mise en évidence, liens profonds, état source absente, navigation arrière et traitement des doublons ou regroupements de sujets.

### 5.3. Reprise avec Nora

« Poursuivre avec Nora sur le sujet » devrait préparer une référence au sujet consulté et revenir au fil continu, **sans envoyer automatiquement un message**. Ce n'est pas le même geste que « Consulter le message d'origine » : le premier sert à continuer, le second à relire.

## 6. Recherche du Journal et consultation des Décisions — contrat fonctionnel/UX consolidé (19/11)

**STATUT : PRINCIPES FONCTIONNELS ACCEPTÉS PAR MORRIS EN CONVERSATION LE 19/11 ; CONTRAT DOCUMENTÉ CANDIDAT.** Cette section précise R1 §2.11, la recherche et les parcours R2 D4/D6, sans créer de domaine supplémentaire ni déclarer l'implémentation ou la preuve. **La lecture de la décision est une interprétation sémantique contextualisée, jamais une réécriture de l'acte officiel.**

### 6.1. Recherche contextualisée par onglet — périmètre accepté

- **Sujets :** recherche dans les **connaissances durablement capitalisées** du projet autorisé : titres actuels, synthèses, acquis importants, questions/points ouverts et relations hiérarchiques ou libellés historiques lorsque leur provenance et leur récupération sont disponibles. Les termes du contenu d'un sujet peuvent donc le faire ressortir **même s'ils ne figurent pas dans son titre**.
- **Décisions :** recherche des **actes D6 conservés** correspondant à la portée « décisions durables », via objet, choix, portée, identifiants/relations autorisées, motifs/contextes synthétisés disponibles et états courants ou historiques **vérifiés auprès de D6**. Ne jamais indexer comme décision opposable un extrait de conversation, une recommandation de Nora ou un texte Git portant le mot « validé ».
- **Interaction :** la barre de recherche suit l'onglet actif ; **pas de moteur global de recherche supplémentaire** en V1 UX et **pas de recherche exhaustive du transcript depuis le Journal**. Nora/D3 conserve sa capacité distincte d'investigation transversale, dans les accès réels.
- **Résultat :** montrer nom intelligible, courte explication du lien avec la requête si justifiable, chemin hiérarchique et éventuelle nature/état du résultat, sans citations fictives ; ouvrir l'objet dans la **visionneuse de droite 40/60** en conservant la requête. Les sous-sujets sont identifiables via leurs parents, sans exiger que tout le niveau parent corresponde aux mêmes termes.
- **Recherche vide / effacée :** vue standard Sujets (arborescence) ou Décisions (liste nominale), avec état de dépliage, sélection et scroll restitués lorsque réellement conservés. **Aucun résultat** signifie « rien dans les éléments consultables/indexés à ce stade », **pas** « cela n'a jamais été évoqué ».
- **Pertinence :** un résultat exact sur le titre et un résultat dans la synthèse sont distinguables. Une compréhension sémantique plus large est souhaitable si utile, mais **ni moteur embeddings, ni score opaque, ni indexation intégrale** ne sont imposés à ce stade ; tester la récupération sur variations de termes, sujets renommés et longues sessions avant choix algorithmique.
- **Conditions et droits :** ne rechercher/afficher que dans le projet et les sources actuellement accessibles ; aucune fuite via résultat, snippet, comptage, autocomplétion, lien profond ou état d'erreur. Une source déterminante manquante conduit à une indication honnête, pas à une certitude.
- **Performance :** recherche progressive utilisable sur projet volumineux (1000+ messages, sujets remaniés, nombreuses décisions), avec coût/latence maîtrisés et critères quantitatifs à établir en contrat technique puis recette ; l'UI ne doit pas bloquer toute la session sur une recherche.

**À qualifier visuellement :** état de recherche en cours, correspondance affichée, absence de résultat, effacement, dépliage des ancêtres utiles, sélection et retour depuis la fiche ; clavier/focus, compact 1280 et navigation sans dépendre de la couleur. Aucune proposition « ⌘K » n'est validée.

### 6.2. Points ouverts — filtre transversal sobre

Le filtre **« Points ouverts »**, second niveau de la vue Sujets, projette les **questions, réserves, blocages, contradictions et conditions non résolues** de différents sujets en conservant le **titre du point, le sujet d'origine, la nature/portée et un indice de pertinence réellement disponible**. Il ne réécrit pas leur statut, ne clôt rien et ne crée pas de troisième onglet. Dans une fiche, les points du sujet restent présentés normalement.

**Interaction :** activer le filtre → consulter les points pertinents du projet ; sélectionner un point → voir le sujet dans la visionneuse et, si possible, la section concernée ; désactiver → retour à la navigation standard. La **combinaison avec une requête texte** est à représenter : le résultat doit être explicite (intersection attendue ou absence de résultats), pas un mélange ambigu entre sujets et points. Le filtre peut coexister avec la recherche Sujets sans affecter Décisions.

**Restriction critique :** une source factuelle peut justifier une clôture sémantique D4 ; une suspension, réserve ou acceptation nécessitant un Pilote ne peut pas être levée par un filtre ou la seule synthèse Nora (R1 §§2.11–2.12, R2 RG-KNOW-004/009, RG-GOV-017/018).

### 6.3. Décisions — liste, recherche et consultation

**Résultat utilisateur :** comprendre **ce qui a été réellement arbitré**, **pourquoi ce choix a été fait** selon les éléments fiables retrouvés, **dans quelle portée** il est applicable aujourd'hui et **comment il a évolué**.

**Périmètre accepté :** l'onglet Décisions est une **vue consultative des arbitrages durables et réellement conservés par D6**. Montrer leurs révisions, remplacements, suspensions, restrictions et révocations pertinentes. Les GO de cycle, mandats d'effet et acceptations spécialisées ne sont pas artificiellement mélangés comme événements indistincts ; ils restent dans leur objet propriétaire et peuvent être **référencés lorsqu'ils éclairent la décision**. Aucune préférence passagère, recommandation, proposition de contrat, résultat d'exécution ou contenu documentaire ne devient une nouvelle décision pour remplir la liste.

**Parcours V4 candidat accepté en principe :** Journal → onglet Décisions dans la **même enveloppe**, liste/parcours pleine zone → sélectionner une décision → Journal compact **40 % / visionneuse 60 %** → « Agrandir » vers fiche contextualisée avec éléments secondaires → « Réduire » en retrouvant filtres, sélection et position ; retour au fil Nora ou à un sujet lié sur action explicite, **sans envoi automatique** et sans altérer D6. Le Journal ne duplique pas l'écran Pilotage ni l'exécution.

**Fiche de décision — six informations attendues, conditionnelles à la disponibilité réelle :**
1. **Arbitrage exprimé et synthèse du choix :** intitulé clair, ce qui a été retenu, objet et conséquence dans sa portée réelle ;
2. **État officiel courant** : applicable selon D6 / remplacé / amendé / suspendu / révoqué, avec prudence sur effets temporels et conditions ; ne pas afficher « en vigueur » à partir d'une reconstruction Nora ;
3. **Portée** : projet, cycle/activité/ressource, conditions, limites et restrictions éventuellement pertinentes ;
4. **Auteur compétent, acte d'origine et prise d'effet** : attribution et date/événement lorsqu'ils sont vérifiés ;
5. **Contexte et raisons du choix** : **synthèse explicative construite sémantiquement**, plus riche qu'une citation, à partir du **cheminement des échanges**, des alternatives, contraintes, objectifs et sources réellement consultés ; références essentielles vers les messages exacts, documents ou preuves utiles ;
6. **Évolutions et liens** : relations avec d'autres actes D6, versions, remplacements, sujets concernés et historique contextualisé ; conservation de l'ancien même lorsque l'applicabilité évolue.

### 6.4. Synthèse décisionnelle intelligente — distinction fondatrice

**Précision explicite demandée puis acceptée par Morris le 19/11 :** le Pilote doit pouvoir ouvrir Décisions et comprendre l'arbitrage **dans son histoire et son intention**, sans déchiffrer une suite de citations du fil. Il ne s'agit **ni** de copier le texte d'un ou deux derniers messages **ni** d'enregistrer la conclusion isolée comme « raison officielle ».

**Contrat de production/restitution candidat :**
1. **Partir de l'acte D6 identifié** (auteur, texte/choix source, objet, portée, statut courant) ; si l'acte officiel n'est pas disponible ou vérifiable, **ne pas créer de fausse fiche D6 autorisante**.
2. **Retrouver les contextes pertinents** dans le fil Nora et les sources autorisées : motivation initiale, problème, options discutées, contraintes, objections, risques, compromis, évolutions ultérieures. **Ne pas s'arrêter aux deux derniers messages** ; approfondir de manière proportionnée si une décision structurante requiert plus de contexte.
3. **Confronter** ce cheminement aux sources déterminantes et à l'histoire D6 : distinguer la motivation réellement exprimée, l'interprétation raisonnablement déduite par Nora, une hypothèse, une information devenue historique et une contradiction non résolue.
4. **Rédiger une explication globale cohérente** et accessible (« contexte du choix », « raisons déterminantes », « ce que cela implique » si pertinent), sans assembler un verbatim. La synthèse peut être mise à jour quand la connaissance s'enrichit, **mais elle ne modifie jamais le choix officiel, l'auteur, la portée, l'applicabilité ou la date D6**.
5. **Assurer la provenance et l'honnêteté :** références essentielles réellement exploitables, signalement des raisons non retrouvables, source périmée ou inaccessible ; **ne jamais inventer un consensus, une intention implicite ou un arbitrage**. Si une interprétation est incertaine, l'indiquer explicitement et ne pas la présenter comme la justification confirmée du Pilote.
6. **Ne pas surcharger la fiche :** la zone de lecture montre d'abord choix, explication, état/portée ; l'historique détaillé, les références et les conditions secondaires restent accessibles à la demande ou en mode agrandi.

**Architecture de responsabilité à préserver :** D6 reste propriétaire du **fait de décision et de son application** ; D3/Nora assure l'**analyse et la rédaction sémantique** ; D4 gère les **connaissances/références contextualisées** sans registre D6 autonome. Le lieu de persistance d'un éventuel résumé enrichi et son actualisation doivent être réconciliés avec code/architecture existants, sans déduire qu'une chaîne cognitive fonctionne déjà.

### 6.5. Cas limites et critères de conception

| Scénario | Résultat attendu |
| --- | --- |
| Recherche terme dans acquis, pas dans titre | Sujet retrouvé avec chemin et justification lisible |
| Sujet renommé/scindé | Identité et sources permettant la récupération ; aucun doublon artificiel |
| Recherche + filtre Points ouverts | Résultats cohérents avec les points **encore ouverts** et leur origine |
| Aucune correspondance / accès révoqué / chargement partiel | État honnête, pas de contenu privé ni certitude d'absence globale |
| Décision actuelle versus remplacée | Statut D6 clairement distinct, motif et filiation inspectables |
| Décision suspendue / conflit de portée | Restriction opposable représentée sans levée ni permission déduite |
| Décision avec parcours long et alternatives | Synthèse éditoriale cohérente des motivations **appuyées par sources**, non transcript |
| Décision dont la motivation ne peut être reconstituée | Fiche officielle lisible, **contexte incomplet explicitement indiqué**, aucune raison inventée |
| Décision évoquée dans un sujet puis réorganisé | Même objet et état D6 dans tous les points d'entrée ; liens maintenus |
| Recherche dans 1000+ messages / nombreux sujets | Recherche sur connaissance capitalisée performante et reprise correcte, sans prétendre indexer exhaustivement le fil |
| Consulter, changer filtre, agrandir et revenir | État de navigation restitué lorsqu'il est conservé ; aucun message envoyé ni nouvel acte créé |

**OUT du périmètre initial :** moteur global de recherche multi-sources, second agent de décision, administration d'un index par le Pilote, création d'une décision en un clic sur résultat, modification directe de HumanDecision depuis le Journal, indexation automatique de chaque message, déploiement/code sans gate. **Gates :** revue Figma Recherche/Décisions puis validation explicite du contrat fonctionnel complet par Morris ; ensuite réconciliation architecture/code/preuves, qualification ML4D et éventuel mandat Cursor distinct.

## 7. Contrats de responsabilité et frontières

| Responsabilité | Contrat d'expérience du Journal | Limite |
| --- | --- | --- |
| Nora / conduite (D3) | Interprète les apports des échanges et sources, apprécie leur pertinence durable, prépare la restitution sémantique et la réorganisation utile, mobilise la mémoire à la reprise | Ne crée ni autorité D6 ni obligation d'écriture systématique par message |
| Connaissance (D4) | Possède et conserve les sujets/sous-sujets évolutifs, synthèses, sources, état actuel/historique, points ouverts et filiations ; rend récupérables les éléments validement conservés | Pas de copie concurrente du transcript, d'affirmation de mise à jour non confirmée ou de registre D6 |
| Décisions (D6) | Source unique des actes humains, état applicable, mandat et historique opposable | Pas de décision inventée via un badge ou une synthèse |
| Travail / navigation | Fil continu, référence exacte aux échanges et retour contextualisé | Pas de second chat ou d'envoi implicite |
| Sources externes / Git | Consultation de sources réellement accessibles, versions/branches qualifiées | Candidate Git ≠ baseline ; lien ≠ preuve ni droit |
| Documents | Gestion documentaire approfondie dans sa propre surface | Visionneuse légère Travail reste en lecture seule |

La topologie de persistance, les API, les structures de données, les index éventuels et la recherche sémantique **ne sont pas fixés** par ce document de cible UX. Ils seront qualifiés lors de la réconciliation.

## 8. Parcours à spécifier et à faire éprouver

| Scénario de conception/recette | Résultat observable attendu | Statut |
| --- | --- | --- |
| Projet long : 1 000+ messages, reprise après deux semaines | Le Pilote retrouve un sujet et comprend en quelques instants le contexte actuel | **CANDIDAT — NON TESTÉ** |
| Sujet initial sans enfant puis trois axes émergents | Avant séparation : sujet complet avec acquis/questions/sources. Après : même identité et synthèse globale au parent, connaissances spécifiques chez les enfants, sans perte ni duplication massive | **PRINCIPE ACCEPTÉ / PREUVE NON TESTÉE** |
| Message sans apport durable | Nora répond sans créer inutilement de sujet, d'acquis ou d'écriture ; la mémoire reste cohérente | **CONTRAT R2 / SCÉNARIO À ÉPROUVER** |
| Correction ou contradiction après plusieurs semaines | La synthèse pertinente évolue sans effacer la source/histoire ni affirmer une validation inexistante ; parent réévalué si nécessaire | **CONTRAT R1/R2 / CIBLE À ÉPROUVER** |
| Un sujet est renommé, fusionné ou séparé | Les synthèses et sources pertinentes restent trouvables ; l'autorité des décisions est intacte | **CONTRAT R1/R2, UX À DÉFINIR** |
| Une question demeure ouverte dans un sujet ancien | Elle est visible dans son contexte et retrouvable via l'accès transversal | **CONTRAT R1/R2, UX À DÉFINIR** |
| Un échange clé vieux de centaines de messages est choisi | Le fil Nora montre le message exact et son contexte, puis un retour au sujet est possible | **CIBLE UX — NON PROUVÉE** |
| Une référence de conversation n'est plus autorisée | Le Journal n'affiche pas de contenu privé ni de faux lien de navigation | **CONTRAT R2 / CAS NÉGATIF** |
| Sujet comportant une décision D6 | Le lien expose l'acte actuel sans transformer la synthèse en décision | **CONTRAT R1/R2, UX À DÉFINIR** |
| Projet sans source Git connectée | Les sujets et échanges restent utiles ; absence Git explicitée si pertinente | **CONTRAT R1/R3** |
| Longue arborescence ou mobile | Exploration et lecture utilisables sans second rail écrasant la zone centrale | **CANDIDAT — FIGMA À CONCEVOIR** |

Les scénarios sont des **objectifs de conception et futurs oracles candidats** ; ils ne sont pas des résultats de tests exécutés.

## 9. Figma — références R3, évolutions V4 et maquettes Recherche/Décisions

Fichier R3 existant : [SFIA Studio Next — Figma](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP).

| Frame R3 repérée | Utilisation pour la revue | Statut par rapport à la cible |
| --- | --- | --- |
| [Journal / Sujets — 94:515](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-515) | Enveloppe projet, navigation, deux vues, points ouverts | **REFERENCE / À RÉCONCILIER** |
| [Journal / Décisions — 129:72](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-72) | Vue décisions et retour Sujets | **REFERENCE / À RÉCONCILIER** |
| [Organiser les sujets — 160:751](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=160-751) | Opérations de regroupement et renommage | **REFERENCE / À SIMPLIFIER** |
| [Points ouverts — 160:967](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=160-967) | Accès transversal aux points restants | **REFERENCE / À INTÉGRER** |

**Retours de conception datés** : le premier wireframe conversationnel, avec panneau latéral interne constant, a été jugé **visuellement inadapté** par Morris car le produit possède déjà un rail à gauche. Le modèle « arborescence dans la surface principale → fiche en pleine surface » a été proposé ensuite mais **n'a pas encore reçu de validation Figma ou Morris**.

Conserver palette, typographie, rail projet et composants de l'application existante ; ne pas présenter une illustration en conversation comme référence géométrique Figma ni comme capture runtime.

### 9.1. Historique de convergence Figma — V1/V2 vers V4 (19/11/2026)

**STATUT HISTORIQUE V1/V2 :** les premiers écrans Journal 07 ont été expressément jugés visuellement insuffisants et non représentatifs de la direction artistique récente. Les contenus de cette sous-section retracent **l'itération antérieure**, et ne doivent pas être lus comme la cible UX courante désormais décrite en §9.3.  Une reprise a été demandée sur la **page 05 — Travail avec Nora, Contrat UX v0.7**, considérée comme référence visuelle récente pour le rail, l'en-tête, la finition, la typographie et la sobriété.

**Action observée :** reprise de la page candidate `07 · ML4D — Journal · Cible UX candidate` (`828:2`) dans le Figma existant ; **copie directe** du rail projet de 246 px et de l'en-tête de 70 px de la frame de référence `05.01 — Travail · Conversation nominale` (`700:39`), puis activation de « Journal » et mise à jour du fil d'Ariane dans chaque écran. **La page 05 et les maquettes R3 sont restées inchangées.** Les anciens frames Journal V1 (828:25, 828:82, 828:122) et leurs deux composants locaux ont été retirés de la page candidate, remplacés par les propositions V2 ci-dessous.

| Ancienne maquette / même frame ultérieurement retravaillée | Direction V2 historique | Limites et statut à cette étape |
| --- | --- | --- |
| [Journal / Sujets — Exploration (`835:71`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-71) | Rail et en-tête empruntés à la page 05 ; arborescence non traitée comme une collection de cartes ; recherche sobre avec raccourci, deux vues, accès secondaire aux points ouverts | **STATIQUE / À VALIDER** ; fonctionnement de recherche, déploiement et navigation non prouvé |
| [Sujet autonome — Lecture (`835:159`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-159) | Composition de lecture en deux colonnes contextuelles, synthèse structurée, acquis, point à reprendre, source conversationnelle clé et actions secondaires | **STATIQUE / À VALIDER** ; textes et liens illustratifs, aucune actualisation technique prouvée |
| [Sujet parent — Lecture (`835:239`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-239) | Synthèse globale, enfants hiérarchisés, repères et actions contextuelles ; sobriété conforme à la nouvelle DA | **STATIQUE / À VALIDER** ; parents pouvant avoir leurs propres acquis/points ouverts à décliner si présents |

**Contrôles Figma réalisés** : trois frames natives 1680 × 970, rail réel 246 px, en-tête 70 px, activation Journal sans modification des originaux, tous les textes en Inter (58 à 62 calques éditables par écran), référence `700:39` encore présente. Les données d'exemple ne sont **ni la mémoire réelle de Next, ni une preuve de fonctionnement**. La reprise visuelle ne vaut pas validation de l'ergonomie finale.

**Gate Morris :** revue de l'esthétique et des proportions des trois écrans **avant** approfondissement des parcours, prototypes interactifs ou déclinaison Décisions/Points à reprendre. Le contrat R1/R2 et la cible fonctionnelle sont inchangés par cette itération ; aucune version n'est `ADOPTED`.


### 9.2. Exploration → lecture partagée → lecture agrandie — proposition UX en revue

**Origine : retour de Morris le 19/11/2026, non encore validé comme contrat visuel définitif.** Le sommaire reste l'état d'entrée, mais cliquer sur un sujet ne doit plus imposer une sortie de l'arborescence vers une page entière. La cible candidate reprend deux dispositions de la **page 05**, [05.09 / Visionneuse document 50/50](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=701-363) et [05.11 / Visionneuse en grand](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=701-449), **sans confondre fiche D4 et visionneuse de document D4**.

| État | Expérience proposée | Lien Figma |
| --- | --- | --- |
| **Exploration** | Rail projet unique, Sujets/Décisions, arborescence dans la surface ; sélectionner un sujet | [Journal / Sujets](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-71) |
| **Partagé 40/60 — sujet autonome (V4)** | Le Journal initial se rétracte à gauche en conservant titre/onglets/recherche/arborescence ; à droite synthèse, acquis, questions, références, action Agrandir ; naviguer sans changer d'espace | [Sujet autonome partagé](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-26) |
| **Partagé 40/60 — sujet parent (V4)** | Même navigation du Journal rétracté, contenu droit consolidé et sous-sujets pertinents sans recopier leur détail | [Sujet parent partagé](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-131) |
| **Agrandie — sujet autonome** | Masquer temporairement l'arborescence, développer la fiche et ses repères contextuels, action Réduire | [Sujet autonome agrandi](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-159) |
| **Agrandie — sujet parent** | Lecture consolidée, sous-sujets et repères secondaires dans toute la zone de projet, action Réduire | [Sujet parent agrandi](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-239) |

**État de navigation à préserver en cible :** sujet sélectionné, branches ouvertes, recherche/filtre et position de défilement de l'arborescence lors du passage partagé ↔ agrandi et du retour au Journal. Le mode de lecture ne doit ni envoyer un message à Nora ni changer les faits, les décisions ou la mémoire par sa seule ouverture. Un sous-sujet suit le même parcours que le sujet ; la granularité de son contenu varie selon son niveau.

**Historique des dimensions :** V3 présentait deux panneaux de 668 px. **État V4 courant retenu par Morris en discussion :** **Journal compact 526 px (environ 40 %) + visionneuse 784 px (environ 60 %)**, espace entre les panneaux, rail projet existant 246 px, en-tête 70 px ; cinq frames candidates de 1680 × 970 éditables et non interactives. La V4 adopte la présentation éditoriale plus soignée que Morris juge suffisamment bonne pour poursuivre, sans déclaration de réception UX globale ni comportement testé.

**Point ouvert « Points à reprendre » :** l'**accès transversal** est déjà exigé par R1/R2, mais le bouton ajouté en haut à droite du Journal était une **proposition non validée**. Il a été retiré de la frame initiale ; son emplacement/forme sera redéfini sans créer d'onglet principal ou de registre concurrent.

**Recherche — principes désormais acceptés par Morris :** recherche **contextualisée par onglet**, sur **connaissances capitalisées Sujets** ou **actes D6 Décisions**, sans transcript global, avec résultat ouvrant la visionneuse ; filtre transversal « Points ouverts » discret dans Sujets. Les états/variantes visuelles restent à revoir et valider sur Figma (§6). Le raccourci `⌘K` n'a pas été validé.

**Gate :** proposition visuelle à réviser avec Morris ; ne pas déduire un GO technique, une couverture navigateur ou une adoption de ces frames.

### 9.3. Extension Figma v0.9 — Recherche, Points ouverts et Décisions (19/11/2026)

**Statut : FIGMA NATIVE / DESIGN CANDIDAT À PRÉSENTER À MORRIS ; maquettes NON INTERACTIVES / comportements NON PROUVÉS.** Cette extension suit l'acceptation des principes fonctionnels (§6) et la direction artistique **V4 retenue comme base visuelle de travail**, avec le même rail projet et la même grammaire de lecture 40/60 → agrandie. Elle ne crée aucun nouveau domaine ni second registre de décisions.

**Frames V4 Sujets déjà présentes et préservées :** [Exploration `835:71`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-71), [Sujet autonome 40/60 `842:26`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-26), [Sujet parent 40/60 `842:131`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-131), [Sujet autonome agrandi `835:159`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-159), [Sujet parent agrandi `835:239`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-239). Un **filtre secondaire « Points ouverts » non activé** a été ajouté aux trois vues Sujets où le contexte de recherche est visible ; ce n'est plus le bouton d'en-tête supprimé antérieurement.

| Nouvel état Figma candidat | Fonction visualisée | Frontières et point de revue |
| --- | --- | --- |
| [Recherche Sujets — correspondances et fiche 40/60 (`859:42`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-42) | Requête « traçabilité » ; résultats dans titres/connaissances, raison de correspondance et chemin hiérarchique ; sujet sélectionné ouvert à droite | **Démonstration illustrative** ; pas de moteur, de score de pertinence ou de vérité source prouvés |
| [Sujets — filtre Points ouverts activé (`859:146`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-146) | Projection de trois points de sujets différents, point sélectionné contextualisé dans la visionneuse, origine et retour | **Pas de clôture/levée** d'une réserve D6 par simple consultation ; cumul avec recherche à qualifier |
| [Décisions — vue nominale (`860:58`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-58) | Même Journal, onglet Décisions, recherche propre, liste d'arbitrages durables, états actuel/historique/suspendu différenciés | Les trois décisions affichées **sont fictives** et ne correspondent à aucun enregistrement D6 consulté |
| [Décisions — lecture 40/60 (`860:136`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-136) | Liste conservée à gauche ; à droite **choix retenu** distinct du **« Pourquoi ce choix ? »** synthétique et du contexte/état D6 | Synthèse explicative démonstrative, pas motif officiel opposable ni réalisation du moteur Nora |
| [Recherche Décisions — résultat 40/60 (`860:251`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-251) | Requête « journal », décision pertinente retrouvée, sélection et explication disponibles sans changement d'espace | Un résultat fictif montré ; recherche réelle, pertinence et isolation interprojets à tester |
| [Décision — lecture agrandie et motivations (`860:360`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-360) | Présentation éditoriale développée du raisonnement contextualisé, origine R1 illustrative, repères auteur/portée/historique, retour au mode partagé | **Acte D6 d'exemple explicitement non enregistré** ; les motifs documentés ne deviennent pas une décision autonome |

**Conception de l'exemple de décision :** « Organisation du Journal » illustre l'évolution historique documentée en R1, de quatre rubriques envisagées vers deux vues dédiées avec accès transversal aux points ouverts. Cette histoire sert à démontrer **la valeur d'une synthèse explicative du cheminement** plutôt qu'un message recopié. **Les identifiants D-EX01..03, états et fiches D6 de l'écran sont des scénarios UX fictifs, non des décisions réelles ou une preuve de persistance.**

**Contrôles Figma observés :** page `07 · ML4D — Journal · Cible UX candidate` (`828:2`), **11 frames** éditables 1680 × 970 (5 anciennes V4 + 6 nouvelles), rail projet 246 px (réutilisé de la page 05), en-tête 70 px, polices Inter et fichiers sources historiques conservés. Captures visuelles des nouveaux états relues ; chevauchement de libellé de démonstration corrigé et recherche « journal » limitée à son résultat représentatif. **Aucun test d'interaction, de stockage, d'accessibilité responsive, de recherche effective, de sécurité D6 ou de runtime n'est attesté.**

**Révision demandée à Morris :** parcours de recherche (résultat et point ouvert), densité du 40/60 Décisions, distinction choix officiel / explication contextuelle, statut et historique, intérêt du mode agrandi, absence de surcharge et cohérence V4. La validation visuelle et la validation finale du contrat **restent à prononcer explicitement**, avant réconciliation code/architecture et macro-lot technique Cursor.

## 10. Registre vivant des arbitrages

| Sujet | Position à ce jour | Nature de la position | Prochaine validation |
| --- | --- | --- | --- |
| Finalité : mémoire intelligible et non second transcript | Réaffirmée en échange et conforme R1 | **SOCLE VALIDÉ + BESOIN CONFIRMÉ** | Contrat d'acceptation détaillé |
| Journal avec Sujets et Décisions, points ouverts transversaux | Fondement R1 + accord de principe Morris | **SOCLE VALIDÉ / PRINCIPE UX ACCEPTÉ** | Navigation exacte Figma |
| Journal avant Bibliothèque Documents | Choix explicite Morris le 19/11 | **SÉQUENCE CONFIRMÉE** | Aucune décision delivery implicite |
| D'abord concevoir puis diagnostiquer l'implémentation | Choix explicite Morris le 19/11 | **SÉQUENCE CONFIRMÉE** | Cible finale Morris |
| Un sujet simple peut devenir parent sans perdre identité et connaissances | Explicitation de R1 §2.10 ; accord Morris dans le présent échange | **PRINCIPE DE CONCEPTION ACCEPTÉ / DOCUMENTED**, non preuve d'implémentation | Fiche adaptative et filiation vérifiable |
| Parent consolidé, enfants détaillés, acquis du parent seulement si réellement généraux | Réduit la duplication sans interdire les informations générales | **PRINCIPE ACCEPTÉ / VISUEL À ARBITRER** | Contenus conditionnels et hiérarchie Figma |
| Synthèses réellement rédigées, mémoire réévaluée en continu mais écriture sélective | Besoin explicite Morris, compatible R1/R2 | **PRINCIPE ACCEPTÉ / MÉCANISME À QUALIFIER** | Cas de réévaluation, consolidation, panne et reprise |
| Émergence de sous-sujets selon leur autonomie sémantique, non par quota | Proposition ChatGPT en réponse au besoin d'intelligence de classement | **PROPOSITION À ÉPROUVER** | Exemples positif/négatif et critères d'acceptation |
| Actualisation discrète, non intrusive, visible seulement si confirmée | Modèle B proposé puis accepté sur le principe par Morris | **PRINCIPE UX ACCEPTÉ / FIGMA À ARBITRER** | Placement, moment, révision effective, panne, absence de badge artificiel |
| Un seul rail existant, pas de second rail permanent | Objection explicite Morris au wireframe | **CONTRAINTE UX CONFIRMÉE** | Figma sur géométrie réelle |
| Journal initial se réadaptant en 40/60 + visionneuse puis agrandissement réversible | Proposé et accepté par Morris ; V4 enrichie sur page Figma candidate 07 | **PRINCIPE UX ACCEPTÉ / V4 BASE VISUELLE RETENUE**, non preuve d'implémentation | Recherche et Décisions sur la même interaction |
| Points ouverts : filtre secondaire dans Sujets, sans onglet ni bouton en-tête | Principe proposé puis accepté par Morris le 19/11 | **PRINCIPE UX ACCEPTÉ / ÉTATS FIGMA À REVOIR** | Filtre, origine, cas recherche combinée |
| Recherche contextualisée par onglet, sans transcript global | Portée Sujets/Décisions et comportement 40/60 acceptés par Morris (§6.1) | **PRINCIPE FONCTIONNEL ACCEPTÉ / TECHNIQUE OUVERTE** | Maquettes résultats/retours/états limites |
| Décisions durables D6 : liste, recherche, inspection, historique | Périmètre consultatif et frontières D6 acceptés par Morris (§6.3) | **PRINCIPE FONCTIONNEL ACCEPTÉ / FIGMA À REVOIR** | États réel/historique/suspendu, relation avec Pilotage |
| Synthèse explicative des décisions à partir du contexte étendu | Exigence explicite Morris : comprendre intention, motifs, alternatives et évolution ; sources retrouvables, aucun résumé verbatim (§6.4) | **PRINCIPE ACCEPTÉ / COMPORTEMENT À PROUVER** | Parcours long, motifs incomplets, divergence, résumé non autorisant |
| Ancien modèle liste → fiche séparée plein écran | Historique d'exploration rejeté au profit du Journal qui se réadapte | **HISTORIQUE OBSOLÈTE / NON CIBLE** | Aucune réouverture |
| Quelques échanges clés, liens vers messages exacts, pas tous les messages | Préoccupation de sobriété Morris, proposition ChatGPT | **DIRECTION CANDIDATE** | Sélection, deep link, présentation |
| Historique des transformations hors premier plan | Proposition pour éviter un second transcript | **DIRECTION CANDIDATE** | Besoin et affordance secondaire |
| Points ouverts rattachés au sujet et retrouvables globalement | R1/R2 pour l'accès transversal ; UX simplifiée proposée | **SOCLE VALIDÉ / DÉTAIL UX À ARBITRER** | Localisation de l'accès |
| Décisions liées en fiche et vue dédiée basée sur D6 | R1/R2 validés ; visualisation à approfondir | **SOCLE VALIDÉ / DÉTAIL UX À ARBITRER** | Conception de la vue Décisions |

## 11. Questions ouvertes et trajectoire de travail

### Prochains arbitrages — cible avant code

1. **Revue Figma Recherche/Décisions :** états Sujets recherchés, filtre Points ouverts, liste Décisions, sélection/inspection et vue agrandie sur la base V4 ; revue Morris avant prétention à VALIDATED SPEC.
2. **Qualité des synthèses décisionnelles :** vérifier par scénarios longs la distinction acte officiel D6 / interprétation sourcée, la reconstruction de la motivation et les cas de sources manquantes.
3. **Navigation et états limites :** préservation de recherche/filtre/sélection/scroll, retour au fil Nora, suppression d'accès, décision remplacée/suspendue, source indisponible, accessibilité/compact.
4. **Recherche utile et proportionnée :** pertinence, projet volumineux, coût/latence, frontières des sources, sans choix technique prématuré.
5. **Après validation Morris :** réconcilier code/API/persistance/flux D3/D4/D6 et données Figma, blast radius, gates, preuves, puis seulement qualifier un macro-lot Cursor.

### Après cible visuelle et fonctionnelle validée

- Observer code et comportements effectifs, architecture, API, persistance, D3/D4/D6 et navigation conversationnelle ; classer **conforme / partiel / absent / contradictoire / non prouvé**.
- Qualifier blast radius, dépendances, risques, dette/exit et stratégie de réalisation cohérente, sans micro-cycle documentaire ni nouveau moteur de connaissance.
- Distinguer ce qui relève de ML4D UX des **écarts métier/architecture** demandant arbitrage Morris et mandat technique distinct avant Cursor.
- Préparer les preuves adaptées : PG/API, BROWSER/RECETTE, tests de longues conversations, restrictions d'accès, interruption/reprise et décision D6.

**État local et RECETTE au moment de la rédaction : NON OBSERVÉS.** Aucune exécution LIVE, validation du design, clôture Ensemble 06, Gate C, STABLE ou ADOPTED n'est revendiquée.

### 11.1. Revue de couverture R1/R2 — 19 novembre 2026 (avant validation finale)

**Nature : ANALYSE DOCUMENTAIRE / NON ARBITRÉE.** Relecture depuis `main@d3d199adb782462b93467934f5f1e8a0c98fb492` ; comparaison avec le présent contrat candidat de branche. Cette revue ne modifie ni les sources R1/R2, ni leurs statuts, ni l'état du code. Les écarts désignent ici **la formulation de notre cible fonctionnelle/UX**, pas une défaillance prouvée du runtime.

**Sources directement confrontées :**
- [R1 §§2.8–2.14 et E2E 04 (§2.33)](../../cadrage/vision-produit.md) : mémoire, hiérarchie, Journal, points ouverts, sources multiples, décision/provenance, reprise ;
- [D4 R2 — connaissance, règles RG-KNOW-001..026 et PF-KNOW-01..20](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) : seuls §§3–6 et addenda réellement applicables gardent leur qualification d'origine ;
- [D3 R2 — Conduite de Nora](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) et [cadrage de continuité cognitive](../../cadrage/conduite-intentions-continuite-cognitive-nora-studio.md) ;
- [D6 R2 — décisions et gouvernance](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md), [D2 R2 — sas et continuité](../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md), [D5 R2 — trajectoire](../../conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md), [D8 R2 — résultats et preuves](../../conception-fonctionnelle/resultats-et-preuves.md), [D9 R2 — Git](../../conception-fonctionnelle/integration-git-gouvernee.md), [D1 R2 — accès](../../conception-fonctionnelle/acces-et-portefeuille.md).

| Famille de besoins R1/R2 | Couverture dans notre contrat v0.4 | Qualification et action candidate |
| --- | --- | --- |
| Mémoire vivante inter-sessions/cycles, même fil | **COUVERT AU NIVEAU CIBLE** | Tester après coupure, sas→projet, cycle changé, longue conversation ; R1 §2.33, KNOW-011/015 |
| Sujet simple → parent → sous-sujets, identité/filiation | **COUVERT AU NIVEAU CIBLE** | Vérifier par scènes de réorganisation, fusion/scission, correction ; R1 §2.10, KNOW-003 |
| Capitalisation sélective, synthèses véritablement rédigées, réévaluation sans écriture systématique | **COUVERT AU NIVEAU CIBLE** | Qualité des synthèses, absence de doublons, pas d'acte D6 inventé ; KNOW-001/005, D3 CONV-006 |
| **Points ouverts : maintien et réactivation opportune** | **PARTIEL** | La fiche et « Points à reprendre » sont conçus ; expliciter que Nora doit pouvoir **réintroduire** une question ancienne devenue pertinente, sans rappel mécanique ni clôture par silence ; R1 §2.12, KNOW-004/011 |
| **Résolution d'une question factuelle vs réserve gouvernée** | **PARTIEL** | Décrire la fermeture **sourcée** d'une question factuelle, sa réouverture en cas de contradiction, et l'absence de levée automatique d'une réserve, suspension ou acceptation de risque D6 ; R1 §2.12, KNOW-008/009, GOV-017/018 |
| **Confrontation des synthèses à l'actualité des sources et aux contradictions** | **PARTIEL** | Ajouter une lecture « actuel / historique / hypothétique / source insuffisante », avec version/date/ref réelle et signalement d'un conflit déterminant ; R1 §§2.13/2.14, KNOW-006..013, CTX-003/005 |
| **Références essentielles : conversation ET autres sources** | **PARTIEL** | Conserver la priorité aux extraits clés du fil, mais **ne pas exclure** documents internes/version, Git autorisé, preuve D8 ou autre source réellement consultée lorsqu'elle fonde un acquis ; aucune « bibliothèque parallèle » ni duplication ; KNOW-006/010/019/020, R1 §2.13 |
| **Documents conservés retrouvables depuis le Journal** | **PARTIEL** | Rendre possible le lien vers un document canonique D4 et sa version lorsqu'il est pertinent à un sujet ; Bibliothèque Documents reste propriétaire de la consultation/révision ; KNOW-016..020, PF-KNOW-11/14 |
| **Récupération active et complémentaire par Nora** | **PARTIEL** | La mémoire sert aussi à la **reprise cognitive** : si le contexte initial est insuffisant, lecture/recherche complémentaire proportionnée de sources autorisées, sans déclarer une lecture partielle comme exhaustive ; KNOW-011/021..023, CTX-002/003, PF-KNOW-15 |
| Décisions D6, états et remplacements, autorité non dupliquée | **SOCLE COUVERT / VUE DÉTAILLÉE NON CONÇUE** | Préciser dans Figma auteur, portée, décision applicable vs historique, suspension/révision et retour aux sources ; R1 §2.11, GOV-009..018 |
| Isolation projet, sas→projet, Git candidat≠main et source révoquée | **COUVERT EN INVARIANTS / ÉTATS UX À CONCEVOIR** | Éprouver perte d'accès, changement de projet, sessions interrompues, absence Git, récupération partielle ; KNOW-002/012..015/020 ; CRE-019 ; ACC-005/011 |
| Honnêteté de sauvegarde, panne/retry, chronologie des évolutions | **SOCLE COUVERT / PREUVE NON FAITE** | Actualisation discrète basée sur l'effet **confirmé**, récupération d'un écrit partiel, pas de double mutation ni date de « fraîcheur » inventée ; KNOW-013/018/024..026 |
| Frontière source et preuve / état d'exécution / document approuvé | **COUVERT EN PRINCIPE** | Une synthèse ou citation ne devient pas conformité D8, publication Git ou HumanDecision ; R1 §§2.13/2.14, KNOW-010, D8/D9 |
| Recherche et navigation à volume long, responsive/accessibilité | **CIBLE PARTIELLE / FIGMA À CONCEVOIR** | Arborescence et lecture principale, recherche pertinente, liens profonds, navigation retour, cas vides/erreur, petits écrans ; R1 §2.10 et E2E 04, R3 |

**Écart central identifié :** la conception courante est solide pour la **lecture synthétique** et la **structuration**, mais elle doit encore rendre explicites la **réactivation intelligente des questions**, la **réconciliation avec les sources primaires**, l'**usage de la mémoire par Nora en reprise**, et l'**accès à une ressource documentaire conservée depuis le Journal**. Ces contrats étaient déjà présents dans R1/R2 : **ce ne sont pas de nouvelles capacités produit inventées**.

**Simplification préservée :** ces besoins ne créent ni troisième onglet principal, ni registre bis des points ouverts, ni catalogue exhaustif des messages, ni moteur de recherche universel imposé, ni synchronisation Git automatique.

**Arbitrages encore nécessaires avant figer la cible :** comment montrer sans surcharge les points ouverts/résolus, un désaccord de sources et la date/portée d'une synthèse ; comment combiner quelques **échanges clés** et d'autres **références déterminantes** ; quelle profondeur de détail donner à l'écran Décisions. Les responsabilités de sécurité et d'autorité, déjà validées R1/R2, ne sont pas réouvertes.

**Gate de cette revue :** `REVIEW R1/R2 COMPLETED AT DOCUMENTARY LEVEL — TARGET CONTRACT STILL CANDIDATE`. Le passage à Figma est possible pour visualiser et arbitrer **les propositions** ; il ne constitue pas une validation globale des comportements ni une preuve d'implémentation.

## 12. Historique du document

| Date/version | Modification | Autorité / statut |
| --- | --- | --- |
| 19/11/2026 — v0.1 | Première consolidation structurée des échanges de cadrage Journal, fondements R1/R2/R3, principes UX, propositions et arbitrages ouverts | **DOCUMENTED / WORKING DRAFT**, branche documentaire ; contenu à continuer et faire valider par Morris |
| 19/11/2026 — v0.2 | Réconciliation conceptuelle R1/R2 : sujet autonome pouvant devenir parent, présentation adaptative, non-duplication, consolidation sémantique vivante par Nora, réévaluation à chaque échange sans écriture obligatoire, critères candidats de création de sous-sujets, scénarios et registre d'arbitrages | **DOCUMENTED / PRINCIPES ACCEPTÉS EN CONVERSATION** ; détails UX et technique non validés |
| 19/11/2026 — v0.3 | Principe UX d'actualisation discrète accepté : signal léger fondé sur une actualisation effectivement conservée, détails secondaires, aucun statut ou horaire inventé ; revue d'exhaustivité R1/R2 demandée avant validation finale/Figma | **DOCUMENTED / WORKING DRAFT** ; contrat complet soumis à revue de couverture R1/R2 |
| 19/11/2026 — v0.4 | Revue de couverture R1/R2 sur les sources du Journal et ses interfaces D1–D9 ; tableau des acquis, lacunes d'explicitation, renvois canoniques et points UX à arbitrer | **DOCUMENTED / REVIEWED AT SOURCE LEVEL** ; aucune promotion automatique en VALIDATED SPEC |
| 19/11/2026 — v0.5 | Référencement de trois frames Figma natives candidates sur page séparée : sommaire, sujet autonome, sujet parent ; reprise des limites de conception et absence de validation UX | **DESIGN CANDIDAT / NON VALIDÉ**, aucun changement de code/recette |
| 19/11/2026 — v0.6 | Rejet de la direction artistique Figma V1 par Morris, reconstruction des trois écrans selon la page 05 (rail et en-tête réutilisés), références Figma V2 réconciliées, V1 candidate retirée | **DESIGN CANDIDAT / À REVOIR AVEC MORRIS**, aucune validation du design ni du fonctionnement |
| 19/11/2026 — v0.7 | Navigation candidate Exploration → 50/50 persistant → lecture agrandie ; référence aux écrans 05.09/05.11, deux nouvelles frames partagées, agrandissement réversible, retrait du bouton « Points à reprendre » et du raccourci recherche non spécifiés | **DESIGN CANDIDAT / PARCOURS À ARBITRER**, aucun code ni test produit |
| 19/11/2026 — v0.8 | Consolidation Morris : V4 visuelle, 40/60 adaptatif, recherche contextualisée par onglet, filtre Points ouverts, Décisions D6 durables, synthèse sémantique contextualisée des motifs et arbitrages, limites d'autorité, cas de recette et points Figma à présenter | **PRINCIPES FONCTIONNELS ACCEPTÉS / DOCUMENTED**, validation UX finale et technique en attente |
| 19/11/2026 — v0.9 | Six frames Figma natives candidates ajoutées pour résultats Sujets, filtre Points ouverts, Décisions nominale, sélection et recherche 40/60, décision agrandie avec motifs synthétisés ; cohérence visuelle V4 et avertissement sur les actes fictifs | **DESIGN CANDIDAT / À REVOIR AVEC MORRIS** ; ni validation D6 ni preuve runtime |

**Suite immédiate :** revue Morris des **six nouveaux états Figma** et de leur cohérence avec les cinq écrans Sujets V4 (§9.3), ajustements UX ciblés si nécessaires et gate de validation du contrat fonctionnel/visuel. **Ensuite** réconciliation des flux, propriétaires, code et preuves D3/D4/D6 existants, qualification blast radius/risques, puis contrat technique et prompt Cursor selon SEF/SFIA v2.6 sous GO technique distinct. Aucun Gate C, PR/merge, implémentation ou ADOPTED implicite.
