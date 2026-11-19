# SFIA Studio Next — Journal du projet
## Contrat de conception fonctionnelle et UX — document évolutif

| Métadonnée | Valeur |
| --- | --- |
| Version | v0.5 — 19 novembre 2026 (Europe/Paris) |
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

**PROPOSITION À ARBITRER :** un point ouvert apparaît **d'abord dans son sujet d'origine**. Un accès secondaire « Points à reprendre » rassemble les points significatifs encore ouverts du projet avec lien vers leur sujet et source, **sans imposer un graphe de liens entre tous les sujets**, un troisième registre ou une gestion administrative.

**Évolution demandée pendant la revue :** supprimer de l'arborescence principale les boutons « Tous » / « Avec points ouverts », jugés artificiels et susceptibles de brouiller la compréhension. L'emplacement exact de l'accès transversal reste à dessiner.

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

**Disposition actuellement privilégiée par ChatGPT mais PAS validée par Morris :** liste/arborescence → ouverture d'une fiche de sujet en **pleine zone centrale**, avec fil d'Ariane et retour à la liste. Ceci répond à la critique explicite du panneau permanent trop étroit au côté du rail existant. Les proportions et transitions restent à vérifier dans la géométrie R3.

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

## 6. Journal / Décisions — cible structurante à détailler ensuite

**SOCLE VALIDÉ R1/R2 :** seconde vue principale du Journal, indépendante de l'arborescence des sujets et consultable sans conversation obligatoire. Elle montre les actes réels du Pilote, leur auteur, leur portée, leur validité actuelle et leur historique selon D6.

**DIRECTION DE CONCEPTION :** les fiches Sujets peuvent renvoyer vers une décision liée. L'onglet Décisions permet recherche/inspection, y compris décision remplacée, suspendue ou révoquée ; il ne réplique ni ne modifie l'autorité D6 par simple consultation.

**ENCORE À CONCEVOIR** : écran nominal, liste/inspection, relations avec Pilotage, recherche, variantes et états d'accès, profondeur historique et possibilité de revenir au sujet ou échange d'origine.

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

## 9. Figma — références initiales et cible à créer après arbitrage

Fichier R3 existant : [SFIA Studio Next — Figma](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP).

| Frame R3 repérée | Utilisation pour la revue | Statut par rapport à la cible |
| --- | --- | --- |
| [Journal / Sujets — 94:515](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-515) | Enveloppe projet, navigation, deux vues, points ouverts | **REFERENCE / À RÉCONCILIER** |
| [Journal / Décisions — 129:72](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-72) | Vue décisions et retour Sujets | **REFERENCE / À RÉCONCILIER** |
| [Organiser les sujets — 160:751](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=160-751) | Opérations de regroupement et renommage | **REFERENCE / À SIMPLIFIER** |
| [Points ouverts — 160:967](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=160-967) | Accès transversal aux points restants | **REFERENCE / À INTÉGRER** |

**Retours de conception datés** : le premier wireframe conversationnel, avec panneau latéral interne constant, a été jugé **visuellement inadapté** par Morris car le produit possède déjà un rail à gauche. Le modèle « arborescence dans la surface principale → fiche en pleine surface » a été proposé ensuite mais **n'a pas encore reçu de validation Figma ou Morris**.

Conserver palette, typographie, rail projet et composants de l'application existante ; ne pas présenter une illustration en conversation comme référence géométrique Figma ni comme capture runtime.

### 9.1. Première exploration Figma native — 19/11/2026

**Statut : DESIGN CANDIDAT / NON VALIDÉ MORRIS — maquettes éditables créées sur une page séparée**, sans modifier les frames R3 de référence. Source : page Figma `07 · ML4D — Journal · Cible UX candidate` (id `828:2`), même fichier `itgvCulInEnFY6DvgIegvP`.

| Maquette candidate | Intention représentée | Limite de la version |
| --- | --- | --- |
| [Sujets — sommaire (`828:25`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=828-25) | Rail projet unique 246 px ; vue Sujets/Décisions, arborescence centrale, accès secondaire « Points à reprendre » | Recherche, déploiement de branches et navigation non encore prototypés/testés |
| [Sujet autonome (`828:82`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=828-82) | Fiche complète quand aucun sous-sujet n'existe : synthèse, acquis, questions et références essentielles | Textes illustratifs ; indicateur d'actualisation non relié à une donnée réelle |
| [Sujet devenu parent (`828:122`)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=828-122) | Synthèse consolidée globale et entrée dans trois sous-sujets sans recopie du détail | Acquis transversaux, points ouverts éventuels et sources du parent à tester dans une variante |

**Caractéristiques :** trois frames desktop 1680 × 970 avec rail unique de 246 px, palette/typographie correspondantes aux tokens CSS courants, couches éditables ; représentation statique **non interactive**, et non captures runtime. Les textes d'exemple ne prouvent aucune capitalisation ou persistance effectuée par Next.

**Première revue attendue avec Morris :** confort de lecture, hiérarchie visuelle, densité du sommaire, place des liens/sources et variantes parent/autonome. Les écarts R1/R2 identifiés en §11.1 doivent être introduits comme interactions/états contextualisés, sans surcharger la fiche nominale.

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
| Arborescence pleine surface puis fiche centrale | Préférence ChatGPT, non acceptée formellement | **PROPOSITION À ARBITRER** | Présentation visuelle Figma |
| Quelques échanges clés, liens vers messages exacts, pas tous les messages | Préoccupation de sobriété Morris, proposition ChatGPT | **DIRECTION CANDIDATE** | Sélection, deep link, présentation |
| Historique des transformations hors premier plan | Proposition pour éviter un second transcript | **DIRECTION CANDIDATE** | Besoin et affordance secondaire |
| Points ouverts rattachés au sujet et retrouvables globalement | R1/R2 pour l'accès transversal ; UX simplifiée proposée | **SOCLE VALIDÉ / DÉTAIL UX À ARBITRER** | Localisation de l'accès |
| Décisions liées en fiche et vue dédiée basée sur D6 | R1/R2 validés ; visualisation à approfondir | **SOCLE VALIDÉ / DÉTAIL UX À ARBITRER** | Conception de la vue Décisions |

## 11. Questions ouvertes et trajectoire de travail

### Prochains arbitrages — cible avant code

1. **Fiche évolutive du sujet** : déclinaison visuelle d'un sujet autonome, d'un parent et d'un enfant avec sections conditionnelles, sans changement de type métier ni second rail.
2. **Vie de la mémoire dans la conversation** : cas d'enrichissement, d'absence de changement, de correction et de réorganisation, sélection sémantique, qualité de synthèse et **signal discret d'actualisation confirmée**.
3. **Navigation nominale** : liste, recherche, arborescence, fiche détaillée, retour, état vide, responsive ; réconcilier avec rail existant.
4. **Références conversationnelles** : critères de sélection, nombre naturel, aperçu, exactitude du lien vers le fil et retour.
5. **Points à reprendre** : accès transversal simple, niveau de visibilité sans troisième registre.
6. **Décisions** : affichage de la vue principale et lien avec Pilotage/D6, sans double autorité.
7. **Maquettes Figma candidates** : composition sur vrais viewports et états, relecture et validation Morris.

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

**Suite immédiate :** revue visuelle par Morris des trois frames Figma candidates (§9.1) ; intégrer sans surcharge les exigences de couverture R1/R2 identifiées (§11.1), puis décliner **Sous-sujet détaillé**, **Décisions** et **Points à reprendre** avec états de navigation, sources et reprise. Contrat final, conception Figma et delivery restent soumis aux validations distinctes.
