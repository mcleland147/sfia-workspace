# SFIA Studio Next — Journal du projet
## Contrat de conception fonctionnelle et UX — document évolutif

| Métadonnée | Valeur |
| --- | --- |
| Version | v0.1 — 19 novembre 2026 (Europe/Paris) |
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
- Le sujet parent synthétise ; les sous-sujets approfondissent. Identité, filiation et provenance demeurent retrouvables ; une réorganisation ne réécrit pas les faits ou décisions d'origine.
- Capitalisation **sélective et proportionnée** : pas de fiche pour chaque message, question passagère ou recommandation.
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

### 4.2. Ouvrir un sujet ou sous-sujet

**Direction candidate :** la fiche prend l'espace de lecture principal ; le rail projet reste présent. Le sujet parent et le sous-sujet utilisent une **structure de lecture cohérente**, mais leur synthèse a une granularité adaptée.

**Sujet parent :** vue générale de l'intention et du cheminement, principaux acquis, éléments à reprendre, sous-sujets et orientations structurantes ; **pas de reproduction exhaustive du contenu de tous les enfants**.

**Sous-sujet :** synthèse plus précise, acquis et points propres au périmètre, décisions associées et références essentielles. Les informations communes restent cohérentes sans être recopiées intégralement.

**Exemple illustratif non normatif :**
- Parent « Journal » : mémoire et continuité de l'histoire du projet.
- Sous-sujets « Organisation des sujets », « Consultation des décisions », « Références conversationnelles ».
- Le parent donne la vision d'ensemble ; chaque enfant approfondit son aspect.

### 4.3. Trame de fiche candidate (ni formulaire, ni ordre définitif)

| Zone | Contenu attendu | Condition de sobriété |
| --- | --- | --- |
| Contexte | Fil d'Ariane, titre, nature/portée du sujet | Revenir à la liste ou au parent facilement |
| Synthèse actuelle | Quelques paragraphes utiles : sujet, évolution de la réflexion, situation présente | Pas de transcription du chat |
| Ce qu'on a retenu | Acquis et orientations importants, niveau de certitude et portée si nécessaire | Établi ≠ hypothèse ≠ décision |
| À reprendre | Questions/réserves réellement encore importantes | Ne pas remplir artificiellement si vide |
| Sous-sujets | Entrées liées si le sujet est parent | Le parent ne copie pas tous les détails |
| Décisions associées | Liens vers les actes D6 applicables lorsque présents | Aucune décision ni statut inventés |
| Échanges de référence | **Quelques extraits courts** Pilote/Nora, origine vérifiable et accès au message | Pas de catalogue exhaustif |
| Évolutions et autres sources | Accès secondaire si besoin, documents/versions/liens autorisés | Non permanents, pas de faux droits |

**Questions ouvertes** : présence/ordre conditionnels des sections, longueur cible d'une synthèse, distinction explicite entre acquis/hypothèses, place des sous-sujets et décisions sur une fiche parent, responsive/mobile, recherche, accessibilité.

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
| Nora / conduite (D3) | Comprend les échanges, propose une capitalisation sélective, utilise les acquis pertinents pour reprendre | Ne crée pas une autorité D6 par interprétation |
| Connaissance (D4) | Possède les sujets, synthèses/provenances, états de connaissance, points ouverts et filiations | Pas de copie concurrente du transcript ou du registre de décisions |
| Décisions (D6) | Source unique des actes humains, état applicable, mandat et historique opposable | Pas de décision inventée via un badge ou une synthèse |
| Travail / navigation | Fil continu, référence exacte aux échanges et retour contextualisé | Pas de second chat ou d'envoi implicite |
| Sources externes / Git | Consultation de sources réellement accessibles, versions/branches qualifiées | Candidate Git ≠ baseline ; lien ≠ preuve ni droit |
| Documents | Gestion documentaire approfondie dans sa propre surface | Visionneuse légère Travail reste en lecture seule |

La topologie de persistance, les API, les structures de données, les index éventuels et la recherche sémantique **ne sont pas fixés** par ce document de cible UX. Ils seront qualifiés lors de la réconciliation.

## 8. Parcours à spécifier et à faire éprouver

| Scénario de conception/recette | Résultat observable attendu | Statut |
| --- | --- | --- |
| Projet long : 1 000+ messages, reprise après deux semaines | Le Pilote retrouve un sujet et comprend en quelques instants le contexte actuel | **CANDIDAT — NON TESTÉ** |
| Sujet parent avec trois enfants | Le parent résume ; chaque enfant précise sans contradiction ni duplication massive | **CANDIDAT — NON TESTÉ** |
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

## 10. Registre vivant des arbitrages

| Sujet | Position à ce jour | Nature de la position | Prochaine validation |
| --- | --- | --- | --- |
| Finalité : mémoire intelligible et non second transcript | Réaffirmée en échange et conforme R1 | **SOCLE VALIDÉ + BESOIN CONFIRMÉ** | Contrat d'acceptation détaillé |
| Journal avec Sujets et Décisions, points ouverts transversaux | Fondement R1 + accord de principe Morris | **SOCLE VALIDÉ / PRINCIPE UX ACCEPTÉ** | Navigation exacte Figma |
| Journal avant Bibliothèque Documents | Choix explicite Morris le 19/11 | **SÉQUENCE CONFIRMÉE** | Aucune décision delivery implicite |
| D'abord concevoir puis diagnostiquer l'implémentation | Choix explicite Morris le 19/11 | **SÉQUENCE CONFIRMÉE** | Cible finale Morris |
| Sujets parents et sous-sujets avec synthèses distinctes mais cohérentes | Fondement R1 ; mise en forme détaillée proposée | **SOCLE VALIDÉ / UX À ARBITRER** | Fiche parent/enfant |
| Un seul rail existant, pas de second rail permanent | Objection explicite Morris au wireframe | **CONTRAINTE UX CONFIRMÉE** | Figma sur géométrie réelle |
| Arborescence pleine surface puis fiche centrale | Préférence ChatGPT, non acceptée formellement | **PROPOSITION À ARBITRER** | Présentation visuelle Figma |
| Quelques échanges clés, liens vers messages exacts, pas tous les messages | Préoccupation de sobriété Morris, proposition ChatGPT | **DIRECTION CANDIDATE** | Sélection, deep link, présentation |
| Historique des transformations hors premier plan | Proposition pour éviter un second transcript | **DIRECTION CANDIDATE** | Besoin et affordance secondaire |
| Points ouverts rattachés au sujet et retrouvables globalement | R1/R2 pour l'accès transversal ; UX simplifiée proposée | **SOCLE VALIDÉ / DÉTAIL UX À ARBITRER** | Localisation de l'accès |
| Décisions liées en fiche et vue dédiée basée sur D6 | R1/R2 validés ; visualisation à approfondir | **SOCLE VALIDÉ / DÉTAIL UX À ARBITRER** | Conception de la vue Décisions |

## 11. Questions ouvertes et trajectoire de travail

### Prochains arbitrages — cible avant code

1. **Fiche parent vs fiche enfant** : informations permanentes, sections facultatives, place des enfants et longueur des synthèses.
2. **Navigation nominale** : liste, recherche, arborescence, fiche détaillée, retour, état vide, responsive ; réconcilier avec rail existant.
3. **Références conversationnelles** : critères de sélection, nombre naturel, aperçu, exactitude du lien vers le fil et retour.
4. **Points à reprendre** : accès transversal simple, niveau de visibilité sans troisième registre.
5. **Décisions** : affichage de la vue principale et lien avec Pilotage/D6, sans double autorité.
6. **Maquettes Figma candidates** : composition sur vrais viewports et états, relecture et validation Morris.

### Après cible visuelle et fonctionnelle validée

- Observer code et comportements effectifs, architecture, API, persistance, D3/D4/D6 et navigation conversationnelle ; classer **conforme / partiel / absent / contradictoire / non prouvé**.
- Qualifier blast radius, dépendances, risques, dette/exit et stratégie de réalisation cohérente, sans micro-cycle documentaire ni nouveau moteur de connaissance.
- Distinguer ce qui relève de ML4D UX des **écarts métier/architecture** demandant arbitrage Morris et mandat technique distinct avant Cursor.
- Préparer les preuves adaptées : PG/API, BROWSER/RECETTE, tests de longues conversations, restrictions d'accès, interruption/reprise et décision D6.

**État local et RECETTE au moment de la rédaction : NON OBSERVÉS.** Aucune exécution LIVE, validation du design, clôture Ensemble 06, Gate C, STABLE ou ADOPTED n'est revendiquée.

## 12. Historique du document

| Date/version | Modification | Autorité / statut |
| --- | --- | --- |
| 19/11/2026 — v0.1 | Première consolidation structurée des échanges de cadrage Journal, fondements R1/R2/R3, principes UX, propositions et arbitrages ouverts | **DOCUMENTED / WORKING DRAFT**, branche documentaire ; contenu à continuer et faire valider par Morris |

**Suite immédiate :** reprendre l'arbitrage de la **fiche de sujet parent et de sous-sujet** à partir de ce contrat, puis concevoir visuellement la navigation sur Figma, avant toute réconciliation technique.
