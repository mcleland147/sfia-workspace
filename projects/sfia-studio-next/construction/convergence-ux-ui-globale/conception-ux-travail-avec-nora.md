# SFIA Studio Next — Conception UX : Travail avec Nora

| Métadonnée | Valeur |
|---|---|
| Périmètre | R5 / ML4D — Ensemble 05, Travail avec Nora |
| Version | **v0.6 — 17 novembre 2026 : ajout du Sujet 05 / visionneuse contextuelle et cohérence du fil validées en conception UX** |
| Statut | **VALIDATED SPEC par Morris : UX-002 et Sujets 02 à 05** (réponses structurées, compositeur, activité/reprise et visionneuse contextuelle) ; **les cinq sujets sont arbitrés en conception UX**, mais synthèse transverse Ensemble 05, architecture, réalisation et preuves RECETTE restent ouvertes |
| Autorité | Morris : arbitrages UX ; ChatGPT : formalisation et revue ; Cursor : réalisation technique sous GO distinct |
| Référentiel de suivi | [Registre central ML4D](registre-central-revues.md) |
| Branche documentaire | docs/next-ml4d-registre-revues-20261116 — candidate, distincte de main |
| Base Git vérifiée à la rédaction | main @ 997d4c4e8204993de7107552898c8cc08cd3b0ed |
| Frontières | Conception ≠ code livré ≠ preuve navigateur après correction ≠ Gate C / ML5 / STABLE / ADOPTED |

## 1. Objet et périmètre

Ce document constitue le **support de conception intégré de l’Ensemble 05**. Il accueillera progressivement les **sujets UX réellement examinés et arbitrés par Morris**, sans générer un document ou un micro-cycle Cursor par irritant.

Cinq sujets arbitrés au 17/11/2026 : **Sujet 01 / UX-002 — position de lecture et continuité du fil**, **Sujet 02 / UX-007 — restitution structurée adaptative et interactions**, **Sujet 03 / UX-008 — compositeur Nora**, **Sujet 04 / UX-009 — activité, erreurs et reprise**, et **Sujet 05 / UX-010 — visionneuse contextuelle de Travail**. Le fil unique reste cohérent : lire une ressource, rédiger, converser, vérifier une activité et agir techniquement demeurent des responsabilités distinctes.

**Résultat Pilote attendu :** dans un projet existant, revenir au dernier échange par défaut après une navigation, un rafraîchissement ou une reconnexion ; suivre naturellement un échange actif, tout en pouvant relire librement des messages passés sans défilement imposé lorsqu'une nouvelle réponse arrive.

**IN :** fil visible, position de lecture, nouveaux messages, comportement après envoi/réception, retour depuis les autres surfaces, rafraîchissement, reprise de session, fil long, commande de retour en bas, **grammaire de réponses composites et interactions immédiates**, **compositeur compact/redimensionnable et brouillon isolé par projet**, **activité dynamique, étapes contextuelles, erreurs et reprise sûre**, **visionneuse rapide en lecture seule, partage 50/50 dans Travail, agrandissement, retour et changement de ressource**, accessibilité et situations incertaines.

**OUT :** nouveau système de chats, refonte du moteur Nora/D4/D6, nouvelles API ou migrations décidées par ce seul document, refonte du layout commun de l’Ensemble 04, nouveau moteur de décisions ou d’effets, fonctionnalité ML5, démarrage technique et promotion. Les besoins de contrat sémantique, persistance, permissions ou API découverts pendant la revue sont à qualifier auprès de leurs propriétaires avant réalisation.

## 2. Sources et précédence

- [SEF v0.2](../../governance/SEF.md) : construction par capacité, propriétaires, preuves et gates.
- [Roadmap Next](../../governance/roadmap.md) et [décision ML4C / ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md).
- [Vision R1 — §2.32, E2E 03](../../cadrage/vision-produit.md) : restitution cognitive structurée/adaptative, catalogue indicatif non fermé, composition selon la demande et frontière d’autorité (VALIDATED BY MORRIS).
- [R2 D3 — RG-CONV-006, RG-UX-001..003, PF-24 et PF-29](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) : fidélité, proportionnalité, restitution interactive et tableau conversationnel distinct d’un document (VALIDATED SPEC).
- [Conception R3 Espace projet et interaction Pilote–Nora](../../ux-ui/espace-projet-interaction-pilote-nora.md), **§§23–25 et §39** : grammaire de restitution, réponse composite, actions contextuelles et fil unique ; hypothèses multi-chat antérieures superseded.
- [Conduite gouvernée de Nora](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) et [connaissance / continuité D4](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md).
- [Conception Sas / continuité D2](../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md).
- [Figma Travail](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-8), [conversation et composition R3 94:214](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214), [variante réponses composites 162:817](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=162-817), [reprise 96:370](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=96-370) : **références visuelles candidates**, sans preuve de comportement ou de disponibilité réelle. Les cinq groupes du message composite R3 (investigation, comparaison, parcours, recommandation, actions) ont été retrouvés en lecture native Figma pendant la revue ; ce sont des exemples, **pas une trame obligatoire**.
- [Registre central ML4D](registre-central-revues.md), UX-002 et réception UX-006.

Décisions applicables et code/preuves Git priment sur les hypothèses R3 historiques. Le présent contrat précise le comportement UX approuvé, sans affirmer sa réalisation.

## 3. UX-002 — observations et décision du 17/11/2026

### 3.1. Constat de RECETTE

Sur le projet **Cockpit Réunions Projet — Test 16-11**, Morris a partagé deux captures de l'écran Travail :

1. Depuis une portion de conversation située au milieu des échanges, il ouvre **Journal**, puis revient à **Travail** ; le fil est repositionné sur **le premier message**.
2. Depuis une position de lecture intermédiaire, un **rafraîchissement navigateur** produit également un retour au premier message ; résultat confirmé directement par Morris.

**Verdict d'observation : UX-002 REPRODUITE — navigation Journal → Travail et refresh.**

Captures : conversation de revue utilisateur du 17/11/2026 ; **aucun fichier ou lien Git de capture inventé**. La RECETTE servie est déclarée sur le candidat local **984d77a36695c2f59ebbc18619e54eeeb43ad94e**, build **3LzvYPTQc-Km7St6nF97r**, à http://127.0.0.1:3200, selon le dernier handoff Cursor, sans nouvelle inspection du processus Mac. Le code main n'est pas une preuve du code exact de ce candidat.

**Cause technique : NON DÉMONTRÉE.** Les effets de navigation interne, démontage/remontage du composant, état de chargement et scroll seront examinés seulement si une réalisation est autorisée.

### 3.2. Arbitrage Morris — principe

**Décision de conception exprimée et confirmée par Morris le 17/11/2026 :**

> Le fil affiche **le dernier message par défaut** après les transitions de travail (ouverture, retour, rafraîchissement, reconnexion, envoi). Toutefois, **lorsque le Pilote lit volontairement l'historique et qu'une nouvelle réponse arrive**, Studio ne le ramène **pas** automatiquement en bas ; un indicateur discret et une action explicite permettent de rejoindre le dernier message.

L’objectif est un **comportement stable dans les conversations longues**, sans retour arbitraire à l'origine et sans interruption d'une lecture délibérée.

### 3.3. Contrat UX validé : événements et comportement

| Situation | Comportement requis |
|---|---|
| Ouverture initiale de Travail dans un projet existant | Après chargement effectif des messages, positionner la **fin du fil** sur le dernier message disponible. |
| Retour à Travail depuis Journal, Projet, Trajectoire, Documents ou inspection | Positionner la **fin du fil**, y compris si le Pilote avait auparavant consulté un message ancien. |
| Rafraîchissement navigateur en cours de lecture | Après reconstruction du fil, afficher **le dernier message**, jamais le premier par défaut. |
| Reconnexion / réouverture de projet | Afficher **le dernier message réellement récupéré**, sans affirmer que la synchronisation est complète si elle ne l'est pas. |
| Envoi explicite d'un message Pilote | Rendre visible **le message envoyé / fin de fil**, sans masquer un état d'envoi incertain. |
| Réception de Nora alors que le Pilote suit la fin du fil | Garder la conversation ancrée en bas, y compris pendant la croissance progressive d'une réponse si ce comportement est réellement supporté. |
| Réception de Nora alors que le Pilote a remonté volontairement le fil pour lire | **Conserver sa position et sa cible de lecture** ; ne pas auto-scroller jusqu'à la réponse. Indiquer qu'un nouveau message est disponible. |
| Clic sur le contrôle de retour en bas | Aller à la fin du fil et rendre le dernier message visible ; quitter le mode de relecture historique. |
| Retour manuel du Pilote en fin de fil | Reprendre le suivi normal des nouveaux messages ; ne plus afficher un indicateur devenu inutile. |

**Priorité des règles :** l'ouverture et le retour à Travail utilisent la position par défaut (fin du fil) ; **tant que le Pilote reste dans Travail**, sa relecture volontaire est respectée face aux nouvelles réponses. La navigation hors de Travail puis son retour rétablit la position par défaut. Ce comportement n'implique pas de sauvegarder un offset de lecture entre sessions.

### 3.4. Contrôle de retour au dernier message

- Lorsqu'il s'éloigne de la fin du fil, le Pilote peut disposer d'un **contrôle flottant discret avec flèche vers le bas**, clairement identifiable et activable.
- Si une réponse de Nora arrive pendant la lecture historique, **le même contrôle** signale « Nouveau message de Nora » (ou un libellé équivalent fondé sur un message effectivement disponible).
- Ne pas créer deux commandes redondantes. Le compteur de messages n'est pas obligatoire et ne doit pas être inventé.
- Le contrôle agit sur la **zone interne de conversation**, pas sur le scroll global de la page. Il ne doit pas cacher les messages ni le compositeur.
- La localisation finale, les dimensions, l'animation et les tokens sont à vérifier avec Figma et le runtime **avant réalisation**. L'illustration discutée en chat n'est pas une maquette approuvée au pixel.

### 3.5. États et cas limites à préserver

1. **Relecture volontaire :** détecter le départ du Pilote hors du bas par son interaction de défilement ; ne pas confondre une variation de hauteur ou une transition de rendu avec une intention de remonter. Le seuil technique reste à qualifier, sans valeur arbitraire fixée ici.
2. **Réponse longue ou progressive :** tant que le Pilote suit la fin, l'affichage peut accompagner la réponse ; s'il remonte, tout repositionnement automatique cesse immédiatement. Les modifications de taille de contenu ne doivent pas faire sauter la portion lue.
3. **Messages et chargement :** le positionnement initial se produit **après** chargement et rendu des messages réellement disponibles. Aucun déplacement au premier message ne doit être confondu avec une position finale correcte.
4. **Erreur, interruption, tentative UNKNOWN :** le scroll n'affirme jamais un succès, une réponse reçue ou une reprise réalisée. Le mécanisme d'incertitude et de réconciliation existant reste gouverné par ses propriétaires.
5. **Fil vide ou très long :** le cas vide ne fabrique pas de message ; sur un fil de 100+ messages, l'usage ne doit pas exiger un défilement manuel complet pour retrouver l'échange courant.
6. **Clavier, focus et accessibilité :** commande accessible au clavier, nom explicite et indication de nouveau message perceptible ; aucun déplacement forcé du focus ni annonce répétitive pendant la génération. Respect de la préférence de mouvement réduit, si animation utilisée.
7. **Continuité métier :** ces règles de défilement n'altèrent ni l'identité du fil unique, ni les connaissances D4, ni les décisions/autorités, ni les états de reprise. **Conservation des messages ≠ preuve de continuité cognitive**.

## 4. Scénarios d'acceptation candidats UX-002

| ID | Parcours | Oracle attendu | Niveau de preuve visé |
|---|---|---|---|
| UX002-A01 | Au milieu → Journal → Travail | **Dernier message visible**, non premier message | BROWSER RECETTE |
| UX002-A02 | Au milieu → Projet / Trajectoire / Document → Travail | Dernier message à chaque retour, sans perte de fil | BROWSER RECETTE |
| UX002-A03 | Au milieu → rafraîchir | Dernier message après rechargement | BROWSER RECETTE |
| UX002-A04 | Reconnexion / réouverture | Dernier message effectivement récupéré ; même projet et fil | BROWSER / session disponible |
| UX002-A05 | Pilote envoie un message | Message envoyé affiché en fin de fil ; état d'envoi honnête | BROWSER ; cas erreur distinct |
| UX002-A06 | Nora répond et Pilote en bas | Nouveau contenu visible et suivi de la fin, sans saut incohérent | BROWSER / LIVE qualifié |
| UX002-A07 | Pilote relit ancien message, Nora répond | **Position historique préservée**, indicateur nouveau message visible | BROWSER / LIVE ou scénario contrôlé honnêtement qualifié |
| UX002-A08 | Pilote clique la flèche « dernier message » | Fin du fil atteinte ; indicateur résolu ; suivi normal rétabli | BROWSER |
| UX002-A09 | Long message/tableau, fil 100+, navigation clavier et reprise incertaine | Pas de clipping ni saut involontaire, pas de faux état, contrôle accessible | BROWSER + tests propriétaires applicables |

Ces scénarios ne sont **pas encore exécutés** sur un correctif. Les preuves DEV/FAKE/BROWSER/LIVE doivent être distinguées et rattachées au SHA testé.

## 5. Responsabilités, impacts et gates

- **UX/interaction :** propriétaire de la présentation du fil et de la navigation interne ; objectif d'un comportement unique et cohérent, sans nouveau moteur de scroll concurrent.
- **D2 :** conserve le rattachement projet/préparation et le fil unique.
- **D3 :** produit des réponses et statuts réels ; le rendu n'invente aucune activité Nora.
- **D4 :** assure ses connaissances durables et références, indépendamment de la position de lecture.
- **D6 et effets :** aucun changement d'autorité, d'idempotence ou de commande métier induit par ce contrat.
- **Blast radius à qualifier avant code :** composant de fil, navigation entre surfaces, chargement/rechargement des messages, taille/scroll interne, message streaming éventuel, états d'erreur/pending, responsive et tests de non-régression UX-006.
- **Dette / exit :** UX-002 reste **OPEN — conception décidée, correction non livrée** jusqu'à réalisation et nouvelle recette des scénarios applicables.
- **Gate technique :** un GO Morris distinct reste requis pour code, tests et déploiement RECETTE ; pas de push produit, PR, merge, STABLE, Gate C, ML5 ni ADOPTED par cette publication documentaire.


## 6. Sujet 02 — Restitution structurée, adaptative et interactive de Nora (17/11/2026)

### 6.1. Résultat utilisateur et périmètre décidé

**Résultat attendu :** le Pilote reçoit la meilleure restitution pour sa demande, qu'il s'agisse de deux phrases ou d'une analyse composite longue. Nora construit librement une réponse organisée par l'objectif et le raisonnement, sans être enfermée dans une liste de gabarits prédéfinis. Studio doit présenter cette réponse fidèlement, et n'offrir des actions que lorsqu'elles ont un effet conversationnel ou une destination réelle et autorisée.

**Décision Morris confirmée le 17/11/2026 :** « Nora doit construire la forme de sa réponse au service du raisonnement et du résultat attendu, et non adapter son raisonnement aux limites d'un gabarit visuel. » Les six principes A–F, la **grammaire visuelle conversationnelle enrichie et sobre**, la **transmission immédiate** des interactions conversationnelles, le **brouillon conservé indépendamment**, la **désactivation de toute interaction de choix au prochain message Pilote**, ainsi que les six règles de **réponse progressive** et les six règles de **provenance/sources/preuves** ont été approuvés successivement par Morris le 17/11/2026. Il s'agit de décisions de conception, sans assertion d'implémentation.

**Portée :** ce sujet complète et opérationnalise la vision R1 §2.32 et R3 §§23–25 ; il n'invente ni une nouvelle capacité d'autorité ni une technologie de rendu adoptée. Un écran Figma illustre une possibilité mais ne restreint pas la liberté de Nora.

### 6.2. Six principes opposables (VALIDATED SPEC)

| Principe | Règle de conception | Anti-comportement |
|---|---|---|
| **A — Liberté de composition** | Nora choisit la forme, l'ordre et le nombre de sections/blocs selon l'intention et le raisonnement ; grammaire ouverte, composable et extensible. | Catalogue fermé, formulaire ou trame « investigation → tableau → recommandation → bouton » systématique. |
| **B — Proportionnalité** | Une réponse simple reste directe ; détail, emphase et interaction n'apparaissent que s'ils améliorent réellement l'usage. | Carte, titres, statut, tableau ou choix rituel pour une question élémentaire. |
| **C — Composition hétérogène** | **Un seul message Nora** peut associer texte naturel, analyse, sources, comparaisons, parcours, recommandations et interactions pertinentes. | Découper artificiellement le contenu en plusieurs chats, écrans ou objets autonomes. |
| **D — Fidélité et vérité** | Conserver les distinctions fait / hypothèse / avis / recommandation / décision humaine / effet réalisé / preuve, les réserves et la provenance. | Statut de réussite inventé, citation fictive, recommandation visuellement promue en décision. |
| **E — Interactivité gouvernée** | Une interaction possède une signification précise, une conséquence compréhensible et un contrôle de capacité/autorité approprié. | Bouton décoratif, cible inventée, décision ou effet technique déclenché par une simple sélection. |
| **F — Continuité** | Réponses, contenu et structure doivent rester lisibles et retrouvables dans le même fil après reprise, en desktop/mobile, sans saut de lecture imposé. | Richesse perdue au refresh, action obsolète réactivée aveuglément, défilement intempestif. |

**Règle de priorité :** la pertinence et la fidélité du contenu priment sur l'esthétique ; l'absence de représentation enrichie ne doit pas faire perdre une information essentielle. Pas de nouveau domaine R2, pas de « moteur Nora UX » concurrent.

### 6.3. Critères de sélection de la forme et cas d'évaluation

**Les dimensions de composition sont indépendantes :** objectif de compréhension, nature du contenu, volume et complexité, contexte de projet, incertitude/risque, provenance disponible, préférence explicite du Pilote et prochaine action réellement utile. **La longueur du message ne détermine pas seule un format.** Le CKI éventuel guide la conduite méthodologique, pas l'obligation d'une présentation.

| Situation d'essai (ni type fermé ni template) | Formes que Nora peut choisir librement |
|---|---|
| Réponse directe / clarification | Paragraphe bref, précision ou liste courte ; zéro structure enrichie si inutile. |
| Investigation et analyse | Contexte, constats/sources, hypothèses et inconnues, conclusion bornée. |
| Comparaison / recommandation | Tableau ou cartes de compromis, critères, alternatives, recommandation conditionnelle et limites. |
| Parcours / planification | Chronologie, étapes liées, dépendances, risques, jalons réellement connus ; sans créer un cycle. |
| Réponse composite approfondie | Mélange de plusieurs représentations dans un **même message**, défilant naturellement avec composer indépendant. |

**Densité :** les termes « direct », « développé » et « approfondi » sont des niveaux de profondeur possibles, **pas trois objets ou modèles obligatoires**. Une réponse longue peut être majoritairement rédigée ; une réponse courte peut contenir un statut ou une référence utile.

### 6.4. Primitives visuelles et comportement de composition — orientations UX à qualifier graphiquement

Les primitives suivantes forment une **grammaire candidate, non un inventaire fermé de composants à construire** : texte riche, tableaux/matrices, groupes de constats, étapes/chronologie, indicateurs d'état, références/sources, recommandation conditionnelle, actions contextuelles.

**Règles de composition découlant des principes validés :**
1. Une réponse Nora conserve **une seule identité de message** et un parcours de lecture cohérent, même si plusieurs blocs sont affichés ; aucun bloc décoratif ne crée automatiquement document D4, tâche, décision ou effet.
2. Introductions et transitions en langage naturel, titres adaptés au sujet ; éviter d'imposer les labels internes « INVESTIGATION / RECOMMANDATION » lorsque des titres métier sont plus intelligibles.
3. Hiérarchie et espacement servent la compréhension ; ne pas entourer chaque paragraphe de cadres, ni répéter la même conclusion dans plusieurs cartes.
4. Tableaux denses, longues réponses, blocs de code et éléments larges doivent rester lisibles et complets ; le traitement exact du reflow/débordement est à mesurer aux viewports applicables.
5. Le fil scroll verticalement, **le compositeur reste distinct** ; les messages composites respectent UX-002, notamment le maintien de la lecture historique pendant une réponse nouvelle.
6. Les sources authentiques apparaissent au plus près des affirmations déterminantes lorsqu'elles sont disponibles ; absence de source ou vérification impossible sont qualifiées honnêtement.
7. Les éléments interactifs apparaissent **au moment pertinent** et avec une sémantique d'action non ambiguë ; aucune ligne/tableau/étiquette ne se transforme en commande par simple interprétation de texte.

### Grammaire visuelle conversationnelle enrichie et sobre (VALIDATED SPEC, Morris 17/11/2026)

**Direction validée :** la présentation repose sur du **texte naturel par défaut**, des **composants spécialisés seulement si leur contenu le justifie**, **une seule réponse cohérente**, et une **mise en évidence sélective et proportionnée**. La forme suit la logique du raisonnement ; ni Markdown seul imposé, ni reproduction systématique des cartes Figma R3.

| Aspect | Comportement UX retenu | À éviter |
|---|---|---|
| Message Nora | Un conteneur principal et un chemin de lecture cohérent ; sections dans une seule identité de message | Multiplication de bulles et d'objets artificiels |
| Typographie et contenu | Titres/sous-titres proportionnés, paragraphes lisibles et respiration entre sections | Taxonomie technique imposée (« INVESTIGATION », « COMPOSITE ») ou emphases partout |
| Cartes/encadrés | Réservés aux informations réellement à distinguer, regrouper ou inspecter | Un cadre, une bordure ou un badge pour chaque paragraphe |
| Données/tableaux | En-têtes identifiables, comparaison complète, largeur/reflow et débordement maîtrisés | Compression, clipping ou perte d'une colonne importante |
| Étapes/dépendances | Séquence et liens utilisés lorsque l'ordre apporte une information | Frise décorative sans dépendance réelle |
| Recommandation/état | Mise en avant discrète, qualification factuelle, recommandation jamais assimilée à décision | Aplat visuel trompeur « validé » ou verdict sans source |
| Actions/sources | Insérées près du point utile, accessibles, gouvernées et non systématiques | Groupe de boutons décoratifs final imposé |
| Longueur/responsive | Composition verticale naturelle dans le fil, composer séparé, hiérarchie et contenu conservés à chaque viewport | Obligation de faire tenir le message dans une fenêtre ou perte d'information mobile |

**Portée exacte :** orientation ergonomique approuvée, **aucun design pixel-final** (taille, token, distance, animation, breakpoint ni nouveau composant Figma adopté). L'examen à 1280/1680 et sur mobile, clavier/focus/zoom/lecteur d'écran, reste à démontrer sur runtime.

**Important :** ces règles fournissent un brief pour la future revue visuelle/technique. Elles **ne constituent pas** une validation pixel des cartes, marges, animations, badges, colonnes ni composants Figma nouveaux ; le prototype R3 reste une **exploration**.

### 6.5. Interaction contextuelle : transmission immédiate (VALIDATED SPEC)

**Arbitrage Morris : option 1 — TRANSMISSION IMMÉDIATE**, sans modèle hybride et sans étape systématique de préremplissage. Si le Pilote veut rédiger sa propre demande, il utilise librement le compositeur ; l'interaction est un **raccourci conversationnel autonome**.

Pour les choix de poursuite proposés par Nora, par exemple « Approfondir B » dans une comparaison d'architectures :

1. Nora présente une option **compréhensible** et une intention de poursuite suffisamment déterminée ; la cible et le contexte pertinent sont identifiables.
2. Sur **sélection explicite**, Studio transmet **directement** une nouvelle demande Pilote cohérente avec ce choix **dans le même fil**, sans requérir de validation ou de deuxième bouton « Envoyer ».
3. La demande effectivement transmise est lisible dans le transcript comme un **message Pilote distinct** et explicite ; elle ne doit pas être une commande cachée ni une exécution métier.
4. Nora répond à cette demande avec ses capacités et le contexte accessible ; aucun nouveau chat, cycle, mission technique ni document n'est créé par le clic.
5. Après l'envoi confirmé ou l'état d'envoi affiché, la navigation dans le fil respecte **UX-002 — envoi explicite → retour au dernier message**, sans modifier les textes non transmis.

**« Autre approche » :** le contrôle peut exprimer directement une intention ouverte (« explore une autre approche »). Nora clarifie ensuite la variante déterminante si nécessaire ; **pas de formulaire, mode alternatif ni préremplissage imposé**.

**Précision de frontière :** « transmission immédiate » vaut pour les **actions conversationnelles de poursuite**, et non pour « Exécuter » un travail technique, publier sur Git, accepter un risque ou enregistrer une HumanDecision structurante. Les actions de consultation ouvrent la ressource autorisée ; elles ne sont pas transformées artificiellement en messages. D6/D7/D9 conservent leurs contrats et actes explicites.

### 6.6. Brouillon déjà saisi : conservation indépendante (VALIDATED SPEC)

**Cas validé par Morris :** un texte existe déjà dans le compositeur, **non envoyé**, puis le Pilote clique une interaction « Approfondir l'option B » d'un message Nora.

| Aspect | Comportement requis |
|---|---|
| Choix « Approfondir B » | **Envoyer immédiatement** un message Pilote distinct portant l'intention B. |
| Brouillon déjà présent | **Conserver intégralement** son contenu tel qu'il était avant le clic ; il reste dans le champ de rédaction. |
| Fusion de deux intentions | **Aucune fusion automatique** entre demande B et brouillon. |
| Écrasement ou purge | **Interdit** : ne pas remplacer, vider ni tronquer le brouillon pour transmettre B. |
| Envoi du brouillon | **Interdit** : le clic ne transmet que l'intention B ; le brouillon partira uniquement sur une action d'envoi propre au compositeur. |
| Suite | Le Pilote peut reprendre, corriger, supprimer ou transmettre plus tard son brouillon ; Nora peut déjà traiter B indépendamment. |
| Retours visuels | Indiquer l'envoi, l'échec ou l'incertitude de la demande B **sans toucher au brouillon**. |

**Exemple de contrôle :** brouillon « Je voudrais également étudier les contraintes de sécurité et les coûts de maintenance. » + clic « Architecture distribuée » → message transmis « Approfondis l'architecture distribuée : avantages, risques, dépendances et conditions de mise en œuvre. » ; brouillon **inchangé, non envoyé**. Cet exemple illustre le sens, **pas une formulation système littérale imposée**.

**Frontière de persistance :** la protection du brouillon pendant cette interaction **est validée**. Le **Sujet 03 §10** valide également la conservation du brouillon **par projet, dans le navigateur courant**, lors de la navigation intersurfaces et du rafraîchissement. La synchronisation interappareils, la récupération après perte du navigateur et les choix de stockage restent hors contrat ou à qualifier techniquement ; **aucune persistance runtime n'est prouvée**.

### 6.7. Fiabilité, états limites et anti-effets indus

**Invariants issus des principes validés :**
- Un clic volontaire déclenche au plus **une intention d'envoi correspondante** ; double clic, relance, latence ou ACK perdu ne doivent ni doubler le message ni relancer aveuglément une intention déjà reçue.
- Si un envoi échoue, reste inconnu ou rencontre une indisponibilité, **afficher la situation honnêtement**, conserver le brouillon indépendant et permettre le traitement approprié par le service conversationnel existant. Aucun succès implicite.
- Une action liée à une ressource disparue, une version périmée ou un droit révoqué n'est pas exécutable aveuglément. Les droits et cibles sont résolus **au moment pertinent**, selon le propriétaire du contrat.
- Les actions de lecture/consultation, demande conversationnelle, sélection indicative, décision humaine et effet technique ne sont pas interchangeables. Ne pas parser un libellé/Markdown généré comme une permission d'effet.
- Après navigation/reconnexion, la réponse et ses significations doivent rester lisibles ; une interaction expirée ou non disponible ne redevient pas active par la seule restauration visuelle.

**Détails qui nécessitent qualification avant code (NON DÉCIDÉS) :**
- Que faire si Nora produit déjà une réponse ou si une intention métier est en statut pending/UNKNOWN : désactivation temporaire, admission d'un nouveau tour indépendant ou réconciliation préalable suivant les invariants du service D3 existant ; **aucune file d'attente ou moteur parallèle présumé**.
- Contrat de description structurée du contenu/actions, validation, fallback textuel, stockage et relecture, coût et sécurité ; à confronter à l'architecture R4 réellement applicable.
- Seuils, effets de mouvement, focus, ordre tabulation, reflow/mobile et variantes visuelles exactes : à qualifier sur Figma + navigateur.

Ne pas transformer les trois questions ouvertes en fonctionnalités autonomes. Le correctif le plus simple compatible avec les propriétaires et leurs preuves doit être privilégié.

### 6.8. Durée de vie des interactions conversationnelles de choix (VALIDATED SPEC, Morris 17/11/2026)

**Arbitrage explicite :** une interaction de sélection intégrée à une réponse de Nora appartient au **tour de dialogue auquel elle se rapporte** ; elle n'est **pas** une commande réutilisable dans l'historique. **Dès que la prochaine réponse Pilote est effectivement transmise**, que ce soit par une option ou par un texte libre du compositeur, **toutes les options de cette interaction deviennent définitivement inactives**. Ce choix **remplace** toute suggestion antérieure de conserver les autres options cliquables après sélection.

| Événement ou état | Comportement requis |
|---|---|
| Nora termine une réponse contenant un groupe de choix A/B/C | Le groupe devient actif après finalisation, selon les permissions/capacités actuelles. |
| Le Pilote choisit B | Transmission immédiate de l'intention B, indépendamment du brouillon ; dès envoi effectif du nouveau tour Pilote, **A, B et C sont toutes désactivées**. |
| Le Pilote écrit une question libre sans choisir A/B/C | Dès transmission de ce message, **A, B et C sont également désactivées**, même si aucune option n'est choisie. |
| Le Pilote demande des précisions puis Nora répond | Les choix du message Nora antérieur restent inactifs ; Nora peut éventuellement émettre **une nouvelle interaction** pertinente dans sa nouvelle réponse. |
| Le Pilote remonte dans le fil après plusieurs échanges ou reprend le projet | Les anciennes options restent **visibles et compréhensibles mais non actionnables** ; aucun retour d'activité par rechargement ou restauration. |
| Échec, absence d'ACK ou état d'envoi incertain | Pas de faux succès, aucune nouvelle demande dupliquée ; figer le contrôle pendant la qualification, puis résoudre le statut avec les mécanismes existants ; ne pas conclure arbitrairement à une transmission effective. |
| Le message Nora comporte des liens de consultation documentaire/source | **Ces liens ne sont pas des choix conversationnels** : ils gardent leur destination consultable dans l'historique tant que la cible existe et que les droits actuels le permettent (§6.10). |

**Un événement simple clôt le groupe : un nouveau tour Pilote réellement envoyé.** Pas de « Réactiver », « Modifier choix » ni système de choix cumulatif. La fermeture couvre l'interaction de choix concernée, pas les références et actions de **lecture**. Si une option était sélectionnée, sa trace se trouve dans le message Pilote effectivement envoyé ; si la réponse est libre, aucun choix artificiel n'est indiqué comme retenu.

**Clarification de priorité avec §6.5 :** le clic sélectionne et transmet immédiatement (pas de second « Envoyer »). **L'ensemble** des boutons de sélection du message Nora précédent passe ensuite en lecture seule. Le système n'a pas à attendre la réponse suivante de Nora pour les fermer. Gestion single-flight, double clic et incertitude : contrats D3 existants, **aucun nouveau moteur concurrent**. Le comportement reste à prouver sur navigateur après construction.

### 6.9. Réponses longues, progressives et interrompues (VALIDATED SPEC, Morris 17/11/2026)

**Six règles validées :**

1. **Restitution dès disponibilité :** afficher le contenu réellement disponible et présentable sans attendre artificiellement la fin lorsqu'une production progressive est effectivement supportée. Pendant la préparation sans contenu, un indicateur discret et honnête « Nora prépare sa réponse… » suffit ; ne pas fabriquer de texte ni promettre un streaming absent.
2. **Identité unique :** le texte et les blocs apparaissent dans **un message Nora unique qui s'enrichit**, sans accumulation de faux messages successifs.
3. **Blocs cohérents :** ne présenter tableaux, comparaisons ou composants spécialisés que sous une forme stable et intelligible ; un fragment incomplet ne doit pas devenir un tableau cassé, un lien inexistant ou une action mal définie. Le texte disponible peut rester lisible si une représentation structurée n'est pas encore sûre.
4. **Priorité à la lecture volontaire :** respecter UX-002 ; suivre les nouveaux fragments uniquement si le Pilote suit déjà la fin du fil. Dès qu'il remonte pour lire, **ne plus forcer le scroll**, même si le message Nora en cours grandit ; l'indicateur de nouveaux contenus et la flèche vers le bas **réutilisent le mécanisme UX-002**.
5. **Actions après finalisation :** rendre les choix conversationnels **actifs seulement quand la réponse et leurs intentions sont finalisées**, pas sur une proposition partielle ou susceptible de changer. Une fois actifs, ils suivent leur durée de vie §6.8.
6. **Interruption et incertitude honnêtes :** distinguer préparation, en cours, réponse finalisée, réponse partielle et interruption/échec/UNKNOWN selon les états réellement disponibles. Préserver le contenu partiel lorsqu'il est véritablement reçu et récupérable ; ne jamais le présenter comme sauvegardé, final ou réussi sans preuve.

**Règles de sobriété :** ne pas imposer le mot-à-mot ni une barre de progression estimée ; un signal d'activité discret est préférable à des indicateurs répétés dans chaque sous-bloc. Lors de croissance de contenu, ne pas déplacer la cible de lecture d'un bloc plus ancien, ne pas perdre l'accessibilité du compositeur ni le focus. En cas de mise en page recalculée, ne pas déclencher de glissement intempestif.

**Frontière technique :** le code `main@997d4c4e` inspecté pour `NoraConversation` indique « Nora prépare… » et un rendu `SafeMarkdown` ; le parcours `sendMessage` inspecté actualise le fil après réponse HTTP. **Un rendu progressif effectif n'est pas démontré sur ce périmètre de code, ni sur le candidat local RECETTE**. Ce contrat définit la **cible UX**, pas un protocole de streaming, des événements serveur ou une architecture déjà décidés ; les dépendances et coûts restent à qualifier.

### 6.10. Sources, références, preuves et consultation durable (VALIDATED SPEC, Morris 17/11/2026)

**Les six règles de conception approuvées :**

| Règle | Comportement UX attendu | Frontière métier |
|---|---|---|
| **1. Provenance proportionnée** | Présenter les références déterminantes près de l'assertion concernée ; éviter citations décoratives et badges après chaque phrase. | D3 restitue ; D4/D9 fournissent la provenance réellement accessible. |
| **2. Consultation contextuelle** | Liens vers sources, documents, décisions, commits ou objets réels au point utile ; inspection/détail selon la ressource existante. | Aucun lien, objet, SHA ni extrait de document inventé. |
| **3. Vérité des statuts** | Distinguer explicitement **déclaré**, **observé**, **démontré sur une portée**, **non démontré**, **contradictoire** et **accepté par le Pilote** lorsque pertinents. | D8 qualifie l'observation/conformité ; D6 possède l'acceptation. Une couleur ou icône ne crée aucun statut. |
| **4. Contradictions et limites visibles** | Ne pas masquer divergence de branche/version/période, donnée inaccessible/périmée, preuve manquante ou incertitude importante. | D4/D8/D9 restent propriétaires de leur source/qualification. |
| **5. Consultation durable** | Les références historiques restent lisibles, et leurs liens/action de **lecture** restent utilisables si la cible et les permissions sont actuelles. | **Ne pas appliquer l'expiration §6.8 aux liens de consultation** ; revérifier droits, disponibilité et actualité au clic. |
| **6. Synthèse puis profondeur accessible** | Résultat et réserves essentiels d'abord ; détails accessibles à la demande. La concision ne supprime pas les informations obligatoires d'un bilan D8. | Aucune obligation de neuf cartes ou sections visibles dans chaque message. |

**Règle D8 applicable aux bilans de réalisations :** [R2 Résultats et preuves §8.2](../../conception-fonctionnelle/resultats-et-preuves.md) prévoit **neuf rubriques accessibles** : résumé, prévu, réalisé, évaluation, écarts/réserves, impact projet, verdict D8, recommandation/suite et sources vérifiées. Une réponse courte peut synthétiser les points déterminants ; **les rubriques et preuves pertinentes demeurent accessibles** dans les surfaces/résultats dont la responsabilité appartient à D8. Pour un résultat complexe ou à risque, Nora peut composer une restitution plus approfondie sans trame graphique fixe.

**Exemple de distinction non probatoire :** « Cursor déclare les tests réussis, mais les sorties ne sont pas accessibles » → statut visible **tests déclarés, non vérifiés ; conformité globale non démontrée**. Ne pas transformer le rapport en certificat, ni une conformité technique en HumanDecision. Un commit vérifié sur branche candidate ne vaut pas merge `main`.

**Sur une ancienne conversation :** une option « Approfondir B » a expiré au prochain message Pilote (§6.8) ; le lien « Consulter le rapport » de la même réponse conserve son intérêt historique, sous réserve d'accès courant. Un lien indisponible est identifié comme tel ; le contenu historique ne se réécrit pas artificiellement et ne dévoile aucune ressource hors droits.

**Sécurité et accessibilité :** les liens doivent être réellement activables et compréhensibles, accessibles clavier et lecteur d'écran ; provenances et réserves ne dépendent pas uniquement de la couleur ; les données externes restent non fiables, jamais instructions autorisantes. Aucun deuxième registre documentaire, de preuve ou de décision introduit par ce contrat.

## 7. État actuel, responsabilités et impacts de réalisation

### 7.1. Observé / connu / non observé

- **RECETTE CampusFlow — capture utilisateur du 17/11/2026 :** Nora fournit un texte avec titres et sections, deux tableaux de cadrage/priorisation et une conclusion. Aucune preuve par cette capture de parcours enrichis, composants interactifs ou actions contextualisées ; elle ne justifie pas l'affirmation « jamais capable » sur d'autres exemples. Capture conversationnelle, pas de fichier image Git inventé.
- **Code référence main@997d4c4e :** la réponse assistant dans web/src/components/figma/NoraConversation.tsx passe au composant web/src/components/SafeMarkdown.tsx ; celui-ci expose du Markdown sécurisé basique (titres, paragraphes, listes, tableaux, liens et code). **Aucun moteur de blocs sémantiques interactifs identifié dans cette chaîne de rendu consultée** ; ce constat ciblé ne prouve pas l'état exact du candidat RECETTE local 984d77a3.
- **Figma R3 :** frame 94:214 et variante 162:817 incluent une **réponse unique à cinq blocs** : investigation, comparaison, parcours, recommandation, actions ; démonstration structurelle, **pas des contrôles métier LIVE**.
- **Convergence :** la restitution riche/adaptative est un **besoin R1/R2 déjà validé**, mais sa transposition productive complète et ses contrats d'action restent **NON DÉMONTRÉS**. Ne pas réduire le travail à de la cosmétique, ni le lancer comme refonte de D3 sans qualifier son impact.

### 7.2. Responsabilités à préserver

| Couche | Propriété / obligation |
|---|---|
| **Nora / D3** | Raisonnement, choix des formes utiles, formulation fidèle, demande conversationnelle ; pas de contrainte de gabarit. |
| **D4** | Sources, connaissances et ressources réellement durables, provenance et récupération. |
| **D1/D2** | Identité, permissions et rattachement au projet/sas/fil unique. |
| **Studio UX / rendu** | Présentation fidèle, composants lisibles, choix visibles, états d'interaction et fallback sûrs, sans nouveau moteur de décision. |
| **D6** | Actes d'arbitrage et mandats opposables ; un choix conversationnel ne les remplace pas. |
| **D7/D8/D9** | Effets techniques, preuves/statuts et lecture/publication Git sous leurs responsabilités existantes. |

**Blast radius à qualifier** : contrat de sortie Nora, mapping contenu→rendu, persistance/reconstitution historique, gestion des clics et envois conversationnels, préservation du brouillon, permissions et provenance, accessibilité/responsive, chargement/streaming et UX-002. **Sécurité :** aucune exécution de HTML/script non fiable, aucune URL inventée, aucune élévation d'autorité par texte généré.

**Architecture :** R3 §§24.3 et 25.3 réservait une comparaison intégrée modulaire / distribuée / alternative (A/B/C) ; **aucune option technique n'est adoptée par le présent document**. Avant réalisation, confronter au code et à la décision d'architecture R4 effectivement applicables ; privilégier le plus simple mécanisme unique permettant de satisfaire les contrats et les preuves.

## 8. Scénarios d'acceptation candidats du Sujet 02

Ces scénarios sont des **oracles UX/fonctionnels pour la préparation d'un contrat technique ultérieur**, pas des tests déjà passés.

| ID | Scénario Pilote / Nora | Résultat attendu |
|---|---|---|
| UX-NORA-01 | Question simple et réponse courte | Réponse directe sans carte, tableau, statut ou bouton rituel. |
| UX-NORA-02 | Analyse sourcée avec données confirmées et hypothèses | Distinction intelligible des faits, hypothèses, sources, limites ; aucune preuve fictive. |
| UX-NORA-03 | Comparatif A/B/C | Tableau ou représentation pertinente, critères et compromis lisibles, recommandation clairement non décisoire. |
| UX-NORA-04 | Plan dépendant d'étapes | Ordre, dépendances et conditions compréhensibles, sans ouverture de cycle ni exécution implicite. |
| UX-NORA-05 | Réponse composite longue mêlant analyse, comparaison, recommandation et actions | **Un message identifiable**, sections cohérentes, scroll interne naturel, composer stable ; pas de clipping à viewport pertinent. |
| UX-NORA-06 | Option « Approfondir B » sélectionnée sans brouillon | **Un nouveau message Pilote envoyé directement**, intention B explicite, sans deuxième clic Envoyer ni effet métier autonome. |
| UX-NORA-07 | Brouillon non envoyé + clic « Approfondir B » | **Message B distinct transmis ; brouillon conservé strictement identique** ; aucune fusion, suppression ou transmission du brouillon. |
| UX-NORA-08 | « Autre approche » | Demande ouverte envoyée directement ; Nora clarifie uniquement si nécessaire, sans formulaire ou préremplissage imposé. |
| UX-NORA-09 | Double clic, timeout/ACK incertain, tentative en cours | Pas de duplication ni réussite fictive, état et récupération cohérents avec le service propriétaire, brouillon intact. |
| UX-NORA-10 | Source devenue inaccessible / action de consultation périmée | Indisponibilité claire, absence de fausse destination ou autorisation, contenu cognitif toujours lisible. |
| UX-NORA-11 | Réponse composite retrouvée après refresh/reconnexion | Même fil et contenu fidèle ; droits des actions réévalués, aucun message inventé. |
| UX-NORA-12 | Pendant une réponse longue, Pilote lit un ancien message | Aucun défilement forcé, indicateur du nouveau message et retour en bas conformes au contrat UX-002. |
| UX-NORA-13 | Mobile 390/320, 1280/1680, clavier, zoom, longue table | Reflow lisible, alternatives accessibles, focus maîtrisé, pas de perte d'information ni action masquée. |
| UX-NORA-14 | Choix conversationnel vs HumanDecision / Exécuter | Le clic de poursuite reste conversationnel ; mutations et décisions structurantes nécessitent les contrôles propres aux domaines concernés. |
| UX-NORA-15 | Choix B dans interaction A/B/C puis retour à l'ancien message | B transmis une fois ; **A/B/C tous inactifs**, lisibles, aucune seconde action possible. |
| UX-NORA-16 | Pilote répond librement sans utiliser A/B/C | Le tour Pilote transmis clôt **tous les choix** ; aucune option prétendue sélectionnée. |
| UX-NORA-17 | Ancienne réponse Nora avec lien « Consulter le document » et options expirées | Choix A/B/C inactifs mais consultation encore disponible sous contrôle des droits/cible actuelle. |
| UX-NORA-18 | Choix tenté en double clic ou envoi UNKNOWN | Pas de doublon ni de succès fictif, état incertain qualifié/réconcilié ; aucun choix ancien réactivé par erreur. |
| UX-NORA-19 | Réponse courte, analyse, tableau, parcours puis réponse composite | **Grammaire sobre** : hiérarchie naturelle, blocs spécialisés uniquement utiles, pas de cadres ou catégories imposés. |
| UX-NORA-20 | Nora prépare puis émet un contenu partiel progressif | Indicateur honnête, **un seul message évolutif**, aucune table cassée ni action prématurément activée. |
| UX-NORA-21 | Longue réponse progressive ; Pilote remonte lire | **UX-002 préserve la lecture**, même quand le contenu grandit ; contrôle unique de retour en bas. |
| UX-NORA-22 | Production interrompue / réponse partielle / refresh | Statut et persistance réels, aucune finalisation/sauvegarde inventée, contenu réellement récupérable préservé. |
| UX-NORA-23 | Nora cite source déterminante puis source inaccessible/contradictoire | Provenance/version/limites lisibles, refus explicite de la consultation non autorisée, divergence conservée. |
| UX-NORA-24 | Bilan D8 rapport Cursor « tests OK » sans sortie de tests | « Déclaré / non vérifié », conformité **non démontrée** ; détail des **neuf rubriques** accessible lorsque applicable, aucune acceptation D6 inférée. |
| UX-NORA-25 | Retour sur un bilan ancien avec nouveau droit ou nouvelle preuve | Lien consultable seulement si encore autorisé ; version/date et conclusion historique préservées, qualification actuelle distincte. |

**Niveaux de preuve visés :** revue Figma native ciblée pour les traitements visuels, tests déterministes des contrats et de la sécurité, BROWSER/RECETTE sur SHA identifié, scénario LIVE seulement si fournisseur/capacité réellement disponibles, non-régression UX-002 et Ensemble 04. Tests FAKE ou Figma ≠ comportements LIVE/REAL.

## 9. Qualification de sortie et suite de la revue

| Sujet | Statut au 17/11/2026 |
|---|---|
| **UX-002 — position de lecture** | **VALIDATED SPEC** ; anomalie REPRODUITE ; correction OPEN / non implémentée par cette action. |
| **Sujet 02 — principes A–F** | **VALIDATED SPEC BY MORRIS** ; liberté de composition et proportionnalité opposables. |
| **Sujet 02 — choix conversationnels** | **VALIDATED SPEC BY MORRIS** : transmission immédiate, **brouillon indépendant intégralement préservé**, **désactivation intégrale des choix dès le prochain tour Pilote effectivement envoyé** ; consultation des sources indépendante. |
| **Grammaire visuelle et réponses progressives** | **VALIDATED SPEC BY MORRIS** : restitution enrichie sobre sans gabarit obligatoire ; six règles de progression/interruption validées. Variantes graphiques/pixel et streaming technique **NON PROUVÉS**. |
| **Sources, références et preuves** | **VALIDATED SPEC BY MORRIS** : six règles de provenance/consultation/statuts, synthèse et détail D8 sans second registre. |
| **Contrat technique / persistance / service / concurrence** | **À QUALIFIER** avec architecture/code réels, impacts et propriétaire ; pas de nouveau moteur ni ADR adopté par ce document. |
| **Réception Studio / Gate C / ML5** | **NON ACQUISE** ; aucune mutation produit/RECETTE, aucun GO Cursor, PR, merge ni promotion. |

**SORTIE DU SUJET 02 EN CONCEPTION UX : VALIDATED SPEC BY MORRIS — 17/11/2026**, sous réserves de qualification technique, réalisation et preuves. Les principes A–F, la grammaire visuelle sobre, les interactions immédiates et leur expiration, le brouillon indépendant, le contenu progressif et les sources/preuves sont documentés. **Aucun code n'est réalisé ni aucun scénario BROWSER/LIVE n'est déclaré PASS par cette publication.**

**Suite logique de l'Ensemble 05 après le Sujet 02 :** le **Sujet 03 — compositeur** est désormais traité au §10 et clos **en conception UX** ; les **états d'activité, erreurs et reprise** restent à instruire au **Sujet 04**. La réalisation restera intégrée dans un même ensemble cohérent après qualification et GO Morris distinct. Ce document demeure la source intégrée de conception ; le registre central conserve les arbitrages et preuves datés. Pas de document, moteur ou cycle autonome par scénario.


## 10. Sujet 03 — Compositeur Nora : saisie, ergonomie et brouillon (VALIDATED SPEC, Morris 17/11/2026)

### 10.1. Résultat utilisateur et référence ergonomique

**Résultat attendu :** le Pilote dispose d'un champ de rédaction **discret au repos, suffisamment puissant lors d'un message long, toujours lisible et prévisible**. L'interface privilégie la conversation, pas la barre de saisie.

**Référence validée en séance :** vidéo de capture d'écran fournie par Morris le 17/11/2026, montrant le **comportement du compositeur ChatGPT** lors de l'ajout, de l'effacement et du retour à une saisie courte. Cette vidéo est **une référence ergonomique fournie dans la conversation**, pas un fichier/preuve ajouté au dépôt ; elle ne prescrit aucun clone de code, de marque ou de design pixel exact.

**Décision Morris :** le compositeur Nora **démarre sur une seule ligne**, peu dominant ; **le champ grandit et rétrécit en fonction du contenu** de façon fluide, **jusqu'à une limite** qui préserve l'espace de lecture. Disposition compacte inspirée de la vidéo, avec `+` à gauche, texte au centre, **envoi à l'extrémité droite** ; emplacement futur de la dictée immédiatement **à gauche du bouton d'envoi**. Le concept de commandes séparées sur une deuxième barre permanente n'est **pas retenu**.

**IN UX :** zone Travail d'un projet, saisie desktop/mobile, hauteur et commandes, brouillon, envoi volontaire, continuité et isolation par projet, non-régression UX-002 / Sujet 02. L'alignement des composants réutilisés entre Travail et le sas doit être vérifié sans décider ici une refonte du sas.

**OUT de cette validation :** construction de la capacité pièces jointes, import/upload ou traitement de fichiers, OCR, dictée/transcription vocale, synchronisation de brouillons multiappareils, protocole de stockage décidé, nouveau service conversationnel et nouveau moteur de tentative. **La conception de la fonctionnalité PJ sera traitée dans son chantier dédié** : aucun contrat de formats/poids/permissions d'upload n'est créé ici. Les états détaillés `pending` / `UNKNOWN`, erreur réseau et reprise appartiennent à la revue du **Sujet 04** et aux contrats propriétaires.

### 10.2. Disposition et dynamique du compositeur (VALIDATED SPEC)

| Situation | Comportement attendu |
|---|---|
| Champ vide / une ligne | **Surface minimale, correspondant à une ligne**, placeholder discret « Écrire à Nora… » ; commandes sur la même ligne logique. |
| Texte multi-lignes, retours manuels ou collage | Le champ **s'agrandit dynamiquement** selon le contenu réellement affiché, en conservant une hauteur lisible et une animation/transition fluide si appropriée. |
| Position pendant la croissance | Le compositeur reste **ancré en bas de Travail**, et grandit préférentiellement **vers le haut** ; contrôles de saisie/envoi restent prévisibles. |
| Limite de croissance | Plafond raisonnable **adapté à la hauteur disponible et au viewport**, sans écraser la conversation ni masquer le fil. Pas de hauteur chiffrée décidée sans mesure Figma/runtime. |
| Saisie au-delà du plafond | **Défilement interne de la zone de texte**, sans continuer à augmenter la hauteur du compositeur. Le curseur et la ligne en cours restent visibles. |
| Suppression de lignes | La zone **se réduit spontanément** et retrouve sa taille minimale lorsque la saisie le permet, sans zone vide résiduelle. |
| Long fil / écran étroit / clavier mobile ouvert | Conserver suffisamment d'espace pour le fil, l'accès au champ et aux commandes ; aucun clavier ou inspection ne doit cacher l'envoi. |
| Focus, curseur et lecture | Ne pas réinitialiser la saisie, déplacer intempestivement le curseur, provoquer un saut de scroll global ni imposer un nouveau focus. UX-002 demeure responsable du défilement du fil, indépendant de celui du champ. |

**Règle de mise en page :** **une surface visuelle unique**, sobre, d'une ligne au repos. Éviter un grand `textarea` systématique, une barre d'outils permanente en deuxième rang ou des badges techniques. Les mesures CSS, tokens, animations et seuils seront arbitrés/provés sur une implémentation, pas inférés de la vidéo.

### 10.3. Clavier et commande Envoyer (VALIDATED SPEC)

| Entrée | Comportement |
|---|---|
| **Desktop — `Entrée`** | **Envoyer** le message si une intention de saisie effective est présente et qu'aucune composition de caractères n'est en cours. |
| **Desktop — `Maj + Entrée`** | **Nouvelle ligne** dans le brouillon, sans envoyer. |
| **Composition IME** | `Entrée` servant à finaliser une composition de caractère **ne déclenche pas** un envoi accidentel. |
| **Mobile — touche Retour** | Insère une **nouvelle ligne** ; le bouton visible de droite constitue le moyen explicite d'envoyer. |
| **Bouton Envoyer** | À l'extrémité droite ; accessible au clavier/lecteur d'écran, identité d'action explicite, un seul envoi volontaire par déclenchement. |
| **Champ vide / espaces** | Aucun envoi ; bouton indisponible avec état compréhensible. |
| **Texte multi-lignes / collé** | Maintenir contenu, retours, sélection et comportement de redimensionnement ; aucun envoi provoqué par la seule saisie ou le collage. |
| **Navigation clavier** | `Tab` et focus accessibles ; raccourci et état d'envoi ne doivent pas voler le focus ni perturber un lecteur d'écran. |

**Règle de frontière :** `Entrée` desktop et clic envoient le **message libre rédigé**, tandis que les choix de poursuite du Sujet 02 transmettent leur **intention distincte** et n'envoient jamais le brouillon. Un envoi ne vaut ni décision structurante D6 ni mandat technique D7.

### 10.4. Brouillon conservé dans le navigateur courant, isolé par projet (VALIDATED SPEC)

**Option B expressément validée :** le brouillon non envoyé est conservé **pour chaque projet dans le navigateur courant**, y compris **navigation entre Travail, Journal, Projet ou inspection** et **rafraîchissement**. À la reprise de Travail, le contenu de saisie demeure tel que laissé ; le **fil revient à son dernier message conformément à UX-002**. Le retour de navigation ne signifie pas « envoyer » le brouillon.

**Invariants UX :**
1. **Isolation :** chaque projet/sas possède son contexte de saisie autorisé ; le brouillon de A ne doit jamais être visible ou transmis dans B, et aucun accès croisé ne découle du stockage local.
2. **Non-transmission :** rédiger, changer de surface, restaurer un brouillon, choisir une option Nora ou coller du texte **n'envoie rien** du brouillon. Seul l'envoi explicite du compositeur transmet ce texte.
3. **Protection du contenu :** une tentative non confirmée ne doit pas faire disparaître le brouillon ; une confirmation tardive d'un message déjà transmis **n'efface pas une saisie ultérieure** ou une version du brouillon distincte de celle envoyée.
4. **Envoi confirmé :** le texte réellement transmis apparaît dans le fil ; seule la version effectivement envoyée peut être retirée du compositeur, sans perdre d'éventuels ajouts postérieurs. Définir et tester la gestion de concurrence avant code.
5. **Honnêteté de restauration :** la sauvegarde/restauration n'est annoncée que si elle est réellement assurée. En cas d'indisponibilité technique, respecter la confidentialité, signaler toute perte susceptible d'être significative, ne jamais reconstruire artificiellement le texte.
6. **Portée bornée :** pas de garantie implicite de synchronisation entre appareils, navigateurs ou utilisateurs ; stockage, durée de conservation, nettoyage/logout, contraintes privées et cas de fermeture de session restent **à qualifier techniquement** sans inventer une capacité serveur.

**État code de référence `main@997d4c4e` :** `web/src/app/projects/[projectId]/page.tsx` détient `draft` en `useState` ; `sessionStorage` sert aux clés de tentatives pending, **pas à une preuve de restauration des brouillons**. `web/src/components/figma/NoraConversation.tsx` expose un `textarea` et un bouton `Envoyer` dépendant de `busy` / du texte. Le parcours `sendMessage` inspecté peut déclencher `setDraft("")` après résultat, **risque ciblé à tester si la saisie a changé pendant l'aller-retour**. Aucun test BROWSER/RECETTE du compositeur futur n'est réalisé ici ; le candidat local demeure **NON OBSERVÉ**.

### 10.5. Commandes additionnelles et frontière du chantier

| Commande | Placement UX | Décision de portée |
|---|---|---|
| **Ajouter un élément `+`** | À gauche de la barre compacte ; point d'entrée unique envisagé pour les ajouts. | **Emplacement validé**, mais **fonctionnement PJ, objets sélectionnables, types, ingestion, autorisations et traitement reportés** au chantier fonctionnel pièces jointes. Ne pas montrer un bouton qui prétend accepter des PJ si rien ne fonctionne réellement. |
| **Dicter / microphone** | **Immédiatement à gauche d'Envoyer**, quand la capacité sera disponible. | **Emplacement réservé seulement** ; transcription, permissions micro, états vocaux et implémentation ne sont **pas engagés** dans le Sujet 03. Aucun micro fictivement actif. |
| **Envoyer** | Extrémité droite, dans le compositeur compact et lorsqu'il grandit. | **Action active dès que le message est transmissible**, selon les états vrais du service. Une commande indisponible l'indique sans créer de faux effet. |

**Arbitrage de sobriété :** ne pas implémenter une capacité seulement pour remplir un emplacement ; afficher les contrôles effectivement utilisables, garder un layout adaptable quand `+` et microphone seront intégrés. Les « ressources existantes du projet » et les PJ externes ne sont pas confondues par défaut ; leur conception sera conduite avec leurs responsables.

### 10.6. Scénarios candidats de qualification du compositeur (NON EXÉCUTÉS)

| ID | Scénario | Résultat attendu |
|---|---|---|
| UX-COMP-01 | Premier affichage, champ vide puis phrase d'une ligne | Compositeur **compact sur une ligne**, envoi indisponible à vide. |
| UX-COMP-02 | Rédaction graduelle sur 2, 5, 10 lignes | Croissance fluide, ancrage bas, limite atteinte sans recouvrir le fil. |
| UX-COMP-03 | Texte collé long puis suppression graduelle | Champ avec défilement interne au plafond ; réduction immédiate jusqu'à une ligne. |
| UX-COMP-04 | Desktop `Entrée` / `Maj + Entrée` / composition IME | Envoi unique ou retour ligne conforme, pas d'envoi pendant IME. |
| UX-COMP-05 | Mobile clavier virtuel + retour ligne + tap envoi | Retour ligne sans envoi, bouton accessible sans masque ni clipping. |
| UX-COMP-06 | Brouillon A → Journal → Travail, puis refresh | **Texte A inchangé**, isolation par projet, fil en bas selon UX-002. |
| UX-COMP-07 | Brouillon dans A, navigation vers B, retour A | Aucun mélange ni fuite de texte entre projets, brouillon A conservé dans son contexte. |
| UX-COMP-08 | Brouillon rédigé + clic « Approfondir B » depuis Nora | Seule intention B transmise, **brouillon libre intact**, groupe de choix inactif conformément au Sujet 02. |
| UX-COMP-09 | Envoi libre confirmé | Message visible dans le fil, contenu envoyé retiré du compositeur sans toucher à une saisie postérieure. |
| UX-COMP-10 | Modification du brouillon pendant attente d'ACK / réponse | Confirmation ancienne **n'efface pas** le nouveau texte ; aucun succès/pending inventé. |
| UX-COMP-11 | Saisie longue, zoom, écran étroit, navigation clavier | Envoi/focus/curseur utilisables, fil accessible, mouvement réduit respecté si animation. |
| UX-COMP-12 | Pièces jointes et dictée non construites | Placement futur compatible, mais aucun bouton trompeusement opérationnel ; pas d'effet/micro/upload simulé. |
| UX-COMP-13 | Échec, envoi `UNKNOWN` et retour après interruption | Aucun doublon ni perte silencieuse de brouillon ; **états détaillés à définir au Sujet 04**, réutilisant le service existant. |

**Preuves attendues avant réception :** captures Figma/runtime à viewports comparables, mesures hauteur minimale/plafond et stabilité des boutons, BROWSER desktop/mobile avec vrais événements clavier/IME, tests de navigation/refresh et isolation projet, états `pending/UNKNOWN`, accessibilité et non-régression UX-002 + Sujet 02. Les scénarios sont des **oracles**, pas des PASS ; la vidéo utilisateur constitue une **référence ergonomique**, non une preuve d'implémentation.

### 10.7. Qualification et sortie du Sujet 03

| Dimension | Qualification au 17/11/2026 |
|---|---|
| Compact une ligne, croissance/réduction fluide, plafond, bas ancré | **VALIDATED SPEC BY MORRIS** |
| Clavier desktop/mobile et envoi explicite | **VALIDATED SPEC BY MORRIS** |
| Brouillon option B, isolation par projet, navigation et refresh | **VALIDATED SPEC BY MORRIS** |
| Disposition `+` à gauche, envoyer à droite, micro prévu avant Envoyer | **VALIDATED SPEC POUR LA DISPOSITION** |
| Prise en charge réelle des PJ et dictée | **HORS DU SUJET 03 / À CONCEVOIR QUAND LA CAPACITÉ EST TRAITÉE**, aucun accès fictif |
| Choix de stockage, durée exacte, responsive pixel-perfect, code corrigé, UX-COMP-01..13 | **À QUALIFIER / NON PROUVÉ** |
| Erreurs, interruptions, reprise, `UNKNOWN`, fiabilité détaillée | **SUJET 04 À INSTRUIRE**, sans machine d'états concurrente |
| Gate C, PR, merge, product release / ADOPTED | **NON ACQUIS** |

**SORTIE DU SUJET 03 EN CONCEPTION UX : VALIDATED SPEC BY MORRIS — 17/11/2026.** Le Sujet 03 est clos sur **son périmètre ergonomique**, sans mise en production ni preuve d'application. **L'Ensemble 05 reste EN REVUE**.

**Suite du Sujet 03 :** le **Sujet 04 — activité de Nora, erreurs et reprise** a été instruit et validé au **§11**, sans créer de machine d'états concurrente. Le contrat d'Ensemble 05 demeure un **document intégré unique** ; les scénarios et réserves de tous les sujets serviront à préparer **un ensemble de réalisation cohérent après GO Morris distinct**, jamais une micro-tâche Cursor par scénario.

## 11. Sujet 04 — Activité de Nora, erreurs et reprise (VALIDATED SPEC, Morris 17/11/2026)

### 11.1. Résultat Pilote et références de revue

**Résultat attendu :** le Pilote perçoit que Nora travaille et comprend les étapes utiles de son activité lorsqu'elles existent réellement. Les attentes prolongées, interruptions, envois incertains et opérations métiers en erreur sont exposés **à l'endroit pertinent, avec leur vérité et une suite sûre**, sans que la conversation devienne un tableau de bord technique ou que le compositeur soit envahi.

**Constat observé en séance :** capture RECETTE CampusFlow fournie par Morris le 17/11/2026 : sous le fil, bandeau fixe « Nora prépare une réponse… » sans animation visible, sous l'interface Travail. La capture montre cet état statique mais **ne prouve pas à elle seule** l'absence de toute activité côté serveur ni les autres variantes runtime.

**Référence ergonomique choisie :** vidéo ChatGPT fournie par Morris le 17/11/2026, inspectée dans la conversation : annonce initiale du travail, étapes de recherche/consultation telles que Figma rendues intelligibles, évolution de l'étape vers son résultat, puis réponse construite progressivement. **Référence UX fournie par l'utilisateur, non déposée dans Git** ; elle ne démontre aucune capacité existante de Studio, aucun événement backend ni la disponibilité d'un fournisseur. Morris a explicitement confirmé que cette dynamique est la cible souhaitée et validé ensuite les activités longues / l'historique repliable, puis les règles d'erreurs et de reprise.

**Sources propriétaires :** [R2 D3 — conversation et continuité](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) ; [R2 D4 — connaissance/continuité](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) ; [R2 D6 — décisions et gouvernance du Pilote](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md) ; [R2 D7 — réalisation, tentatives, inconnus](../../conception-fonctionnelle/realisation-operationnelle-gouvernee.md) ; [R2 D8 — résultats et preuves](../../conception-fonctionnelle/resultats-et-preuves.md) ; [R3 Espace projet](../../ux-ui/espace-projet-interaction-pilote-nora.md). Aucun nouveau registre de tentative/preuve, de décision ni de raisonnement interne.

**IN UX :** attente Nora, marqueur d'activité, étapes contextuelles réelles, conclusion d'étapes, réponses longues/progressives, attente prolongée, historique compact consultable, erreur d'envoi, réponse interrompue, outils indisponibles, `pending/UNKNOWN` métier, session/retour et contrôle de reprise. **OUT :** streaming/API/événements/heartbeat ou horodatage technique décidés ici, moteur de workflow parallèle, exposition de la chaîne de pensée interne, log de secrets et actions techniques autorisées implicitement.

### 11.2. Progression visible, dynamique et véridique (VALIDATED SPEC)

**Principes approuvés :** le bandeau statique actuel doit évoluer vers un **dispositif d'activité vivant**. Le Pilote voit d'abord une présence animée et discrète, puis, seulement lorsque Studio possède des événements fiables, **une activité effectivement engagée** et sa conclusion réelle. La complexité de la tâche détermine la quantité d'informations présentées ; un simple message conversationnel ne nécessite pas de journal d'étapes artificielles.

| Situation reconnue | Présentation cible | Limites de véracité |
|---|---|---|
| Requête effectivement en attente / Nora prépare | Indicateur animé sobre à la fin du fil, par exemple « Nora réfléchit… » ou « Nora prépare sa réponse… ». | L'animation indique **une attente actuellement connue**, pas la preuve que Nora progresse ou produit en permanence. |
| Nora restitue du contenu progressivement, si capacité présente | Un **seul message Nora s'enrichit**, avec un indicateur d'activité cohérent et des blocs complets. | Sujet 02 §6.9 : pas de réponse fictivement finalisée ni de tableau fragmentaire. |
| Consultation/source/outil effectivement engagés | Étape nommée en langage utilisateur, ex. « Consultation des sources Git… », avec activité visible. | **Ne jamais inventer** une action Git/Figma, un outil ou une consultation à partir d'une supposition ou d'un simple délai. |
| Activité terminée et résultat confirmé | L'intitulé devient « Sources consultées », « Recherche terminée » ou équivalent adapté à **l'issue attestée**. | « Terminé » ne signifie ni qualité/conformité D8 ni autorisation D6 ; une opération vide ou infructueuse ne devient pas « succès ». |
| Activité échouée / indisponible / interrompue | Indication factuelle près de cette étape, avec limite et suite pertinente. | La fin d'une animation n'est pas en soi la preuve d'un échec, d'un arrêt effectif ou d'une récupération. |
| Rien de fiable à exposer hors attente | Seulement l'indicateur général d'attente, puis la réponse ou l'incertitude réelle. | Pas de faux jalons, de checklist préfabriquée, de pourcentage ou durée restante inventés. |

**Frontières de contenu :** seules sont montrées les **actions externes observables et résumés utiles** (source consultée, document récupéré, résultat connu), jamais le raisonnement interne détaillé de Nora, les prompts, tokens, traces non fiables, secrets, ni la mécanique technique à chaque sous-opération. Une étape d'activité ne vaut pas une action **Exécuter**, une approbation, un accès Git ou une preuve de conformité.

**Continuité UX :** le dispositif fait partie du **tour de réponse Nora**, pas d'une succession artificielle de nouvelles bulles. Il respecte UX-002 (aucun scroll forcé durant une relecture volontaire), le Sujet 02 (réponse progressive, actions conversationnelles actives seulement à finalisation) et le Sujet 03 (compositeur compact indépendant).

### 11.3. Attentes prolongées et histoire d'activité consultable (VALIDATED SPEC)

**Arbitrage Morris approuvé :**
1. Tant qu'une activité est **effectivement connue en cours**, garder son indicateur actif et son intitulé utile. Ne pas réémettre des étapes pour simuler du mouvement ; pas de barre de progression estimée sans métrique réellement disponible.
2. Si la réponse tarde, **maintenir un signal d'attente sobre** ; si la situation devient incertaine, l'indiquer selon les faits accessibles au lieu d'afficher un spinner éternel comme preuve de fonctionnement. Le seuil de longue attente et la politique de rafraîchissement seront qualifiés lors de la réalisation.
3. À la finalisation du tour, **replier les activités utiles en un résumé compact**, accessible par un contrôle explicite et dépliable pour consulter les étapes/résultats connus. L'historique ne devient ni un nouveau journal officiel D7/D8 ni une console technique.
4. Après navigation/refresh, retrouver **les seules activités réellement conservées** et leur statut historique exact. Une activité inachevée/non retrouvable n'est pas représentée rétrospectivement comme achevée. Permissions et provenance restent applicables au détail.
5. Lorsqu'une étape ou une réponse est interrompue, conserver et présenter les **fragments authentiquement reçus/récupérables**, identifiés comme partiels ; ne jamais annoncer une sauvegarde non confirmée ni reconstituer fictivement ce qui manque.

**L'historique compact n'est pas un second message Nora** : il accompagne la réponse à laquelle il se rattache. Les détails probatoires ou techniques demeurent consultables depuis leurs surfaces propriétaires lorsqu'ils existent et que les droits le permettent.

### 11.4. Erreurs contextualisées et reprise sans doublon (VALIDATED SPEC)

**Principe validé :** afficher l'incident **près de son message ou de son opération**, plutôt que multiplier les bandeaux globaux ou insérer une grande alerte dans le compositeur compact. Un incident global (session expirée, projet non accessible) est traité sur la surface concernée.

| Incident | Présentation à proposer au Pilote | Action sûre et frontière |
|---|---|---|
| Message libre **confirmé non envoyé** | « Message non envoyé », visible au niveau du tour Pilote concerné ; brouillon préservé. | « Réessayer » seulement si les conditions de sécurité/idempotence sont établies ; pas de seconde transmission involontaire. |
| Message **envoyé mais réception non confirmée** / ACK perdu | « Envoi non confirmé » sans faux échec ou faux succès. | **Vérifier/réconcilier l'état** avant toute nouvelle transmission ; réutiliser l'identité de la tentative si le service le permet, jamais inventer un acte distinct. |
| Nora interrompt une réponse partielle | « Réponse interrompue » au niveau du message Nora, contenu reçu conservé si récupérable. | Une éventuelle continuation ou reformulation est une **nouvelle demande explicite et sûre**, pas une reprise backend présumée ni une fin fictive. |
| Consultation Git/Figma ou outil externe échoué | « Consultation impossible » ou état fidèle à la cause connue, près de **l'étape effectivement engagée**. | Relancer la consultation **seulement si disponible, autorisée et sans effet indu** ; ne pas présenter « consulté » sans résultat réel. |
| Opération métier/technique `pending` ou `UNKNOWN` | « Résultat non confirmé » localisé auprès de l'objet/tentative, avec effet et portée discernables. | **Vérifier l'état** d'abord ; D7/D6/D9 gardent leurs contrôles. Jamais de nouvelle exécution ni rollback implicites. |
| Session expirée, ressource ou projet inaccessible | État d'accès explicite sur la surface appropriée, aucune donnée privée d'un autre projet affichée. | Reconnexion/retour sûr et requalification des droits avant de consulter ou agir ; récupération limitée aux données sauvegardées. |

**Vocabulaire de vérité :** « en cours », « attente », « interrompu », « échec confirmé », « statut inconnu », « résultat déclaré » et « conformité démontrée » n'appartiennent pas à la même famille de faits. **D3** renseigne le tour Nora ; **D7** gouverne les effets techniques et leurs tentatives ; **D8** qualifie les résultats et leurs preuves ; **D6** détient l'acceptation/l'autorité ; le composant UX **présente** leurs états sans les recalculer ou les fusionner.

**Continuité cognitive vs technique :** une tentative métier inconnue ne bloque **pas systématiquement** les échanges d'analyse **indépendants** avec Nora si le service actuel l'autorise. Une nouvelle demande d'effet **dépendant de l'état incertain** est refusée/suspendue ou soumise à réconciliation et contrôle d'autorité. Aucune file d'attente implicite, aucun second moteur d'envoi ni extension autonome des permissions.

**Contraintes de confiance :** ne pas afficher de bouton « Vérifier l'état » si aucune consultation/réconciliation réelle n'existe ; ne pas rendre « Réessayer » actif lorsqu'il relancerait possiblement un effet externe. Gestion des clics répétés, d'une reconnexion et d'un changement de projet = même identité de tentative et isolation. Les erreurs persistantes doivent être retrouvables au bon objet après navigation, **dans la seule limite des traces réellement conservées**.

### 11.5. État de référence dans Git et impacts de réalisation

**Référence inspectée : `main@997d4c4e8204993de7107552898c8cc08cd3b0ed`, non le code du candidat local RECETTE.**

- `web/src/components/figma/NoraConversation.tsx` expose `activity: idle | preparing | error` et affiche actuellement une **alerte statique** « Nora prépare une réponse… » ; un `unresolvedPending` et une commande « Réconcilier la tentative en cours » se trouvent **dans la pile du compositeur**, selon les props. Le niveau de preuve de la capture utilisateur CampusFlow est **observation visuelle ponctuelle**, pas revue de tous les états.
- `web/src/app/projects/[projectId]/page.tsx` utilise `setNoraActivity("preparing")` avant la requête HTTP, met à jour le fil après réponse, suit certaines tentatives via `clientTurnKey`, `clientCommandKey` et `sessionStorage`, et expose une fonction `reconcilePending`. Le chemin inspecté **ne démontre pas** un flux général d'événements d'activités intermédiaires ni un streaming des étapes d'outils.
- Les traitements `pending/UNKNOWN` observés relèvent déjà d'un contrat de reprise à préserver : **ne pas créer un nouvel automate** d'activité déconnecté du propriétaire, ne pas confondre erreur HTTP, absence d'ACK, effet métier appliqué et confirmation de réponse.
- **Blast radius à qualifier avant code :** contrat du tour/événement/résultat, API et services D3/D7/D8, traçabilité/provenance des étapes, persistance au refresh, périmètre multi-projet et droits, composants fil + résumé d'activité, séparation du compositeur, animations/réduction de mouvement, mobile, focus/lecteur d'écran, statut `UNKNOWN`, double clic/réessai, tests de non-régression et UX-002.
- **Implémentation :** si les événements fiables nécessaires n'existent pas, utiliser une **dégradation honnête vers l'indicateur général** ; analyser source, coût, propriétaire et qualification R4 avant d'engager une extension technique. Une simple animation ne suffit pas à prouver l'activité et un mock Figma n'est pas une preuve runtime. Pas de nouveau POC gratuit.

### 11.6. Scénarios candidats de qualification (NON EXÉCUTÉS)

| ID | Scénario | Oracle / résultat attendu |
|---|---|---|
| UX-ACT-01 | Pilote envoie message simple, Nora prépare | Indicateur **animé et discret** seulement pendant attente effectivement connue ; aucun texte d'activité technique inventé. |
| UX-ACT-02 | Nora consulte une source Git ou Figma avec événement fiable | Étape contextualisée « Consultation… », puis conclusion fidèle, sans accès/source inventés. |
| UX-ACT-03 | Réponse sans outil ni étape suivie | Aucun faux journal : réponse directe, indicateur seul si attente effective. |
| UX-ACT-04 | Nora commence à répondre progressivement | **Message unique évolutif** ; contenu partiel intègre, interactions différées, UX-002 respecté. |
| UX-ACT-05 | Outil prolongé / long silence avec statut connu ou incertain | Indicateur conforme aux faits ; aucun pourcentage, étape artificielle, spinner trompeur ou délai promis. |
| UX-ACT-06 | Plusieurs étapes utiles terminées | Résumé compact et dépliable, historique fidèle au tour, aucun journal technique supplémentaire. |
| UX-ACT-07 | Refresh/navigation après une réponse et étapes | Les seules étapes réellement conservées reviennent ; aucun historique achevé inventé, droits réévalués. |
| UX-ACT-08 | Pilote lit un ancien message quand Nora progresse | Pas de scroll forcé ; signal UX-002 unique, composer compact et focus préservés. |
| UX-ACT-09 | Échec de transmission clairement confirmé | Message concerné marqué « non envoyé », brouillon conservé et réessai seulement sûr. |
| UX-ACT-10 | ACK perdu / réception du tour non établie | « Envoi non confirmé », **vérification avant toute retransmission**, même identité si réconciliation supportée. |
| UX-ACT-11 | Réponse Nora interrompue après deux paragraphes | Contenu réellement disponible lisible et étiqueté partiel ; aucun faux « terminé ». |
| UX-ACT-12 | Figma/Git inaccessible, permission révoquée ou résultat vide | État honnête près de l'activité, aucune source/preuve/fonction de relance fabriquée. |
| UX-ACT-13 | Opération métier `UNKNOWN` et nouvelle question cognitive indépendante | Échange indépendant possible si service l'admet ; **effet dépendant bloqué/réconcilié**, aucune duplication de tentative. |
| UX-ACT-14 | Session expirée/projet inaccessible puis reconnexion | Données rechargées sous droits actuels, reprise des seuls états durables, sans contenu privé d'un autre projet. |
| UX-ACT-15 | Écran mobile/zoom/lecteur d'écran/mouvement réduit | Indicateurs accessibles sans seule couleur ou mouvement ; aucune alerte couvrant le champ ni annonce répétitive. |
| UX-ACT-16 | Réconciliation, double clic et état final partiel/erreur | Une seule intention et ses faits datés/portés, aucun résultat D8 ou acceptation D6 inférés. |

**Preuves futures :** démonstration de l'activité **réellement émise et reçue** (pas seulement une animation FAKE), BROWSER desktop/mobile sur SHA et build identifiés, cas interruption/pending/UNKNOWN/ACK perdu, inspection de persistance et droits, contrastes/clavier/focus/reduced motion, historique replié, traçabilité D3/D7/D8 et non-régression UX-002, Sujet 02, Sujet 03. `FAKE` ≠ `BROWSER` sur recette ≠ `LIVE` ≠ `REAL` ; les niveaux de preuve restent explicites.

### 11.7. Qualification de sortie du Sujet 04 et suite

| Dimension | État au 17/11/2026 |
|---|---|
| Indicateur animé, progression contextuelle réelle et transitions de statut | **VALIDATED SPEC BY MORRIS** |
| Attente prolongée sans mouvement artificiel, historique compact et dépliable | **VALIDATED SPEC BY MORRIS** |
| Erreurs contextualisées, reprise prudente, séparation cognitif/effet métier | **VALIDATED SPEC BY MORRIS** |
| Contrat d'événements/streaming, stockage du suivi, seuils, animations et composants pixel | **À QUALIFIER ; NON DÉCIDÉS TECHNIQUEMENT** |
| UX-ACT-01..16, implémentation, navigateur, RECETTE, LIVE et REAL | **NON EXÉCUTÉS / NON PROUVÉS** |
| Gate C, PR, merge, release/ADOPTED | **NON ACQUIS** |

**SORTIE DU SUJET 04 EN CONCEPTION UX : VALIDATED SPEC BY MORRIS — 17/11/2026.** Le Sujet 04 est clos **sur le comportement et la présentation**. Il ne constitue ni nouvelle architecture, ni moteur de streaming, ni preuve de récupération de tentative.

**Suite après le Sujet 04 :** le **Sujet 05 — Visionneuse contextuelle et cohérence du fil** est maintenant documenté au **§12** et arbitré en conception. **L'Ensemble 05 reste EN REVUE**, en attente de synthèse transverse et de qualification technique. Tous les sujets seront réalisés dans un macro-lot cohérent avec preuves après GO Morris distinct.

## 12. Sujet 05 — Visionneuse contextuelle et cohérence du fil (VALIDATED SPEC, Morris 17/11/2026)

### 12.1. Résultat et frontière de l'Ensemble 05

**Résultat Pilote :** consulter rapidement depuis le fil Nora un document réellement produit ou une source réellement accessible, **sans quitter Travail**, puis revenir au dialogue et à son brouillon. C'est une **visionneuse contextuelle en lecture seule**, pas un éditeur de documents ni un second espace de travail.

**Arbitrage explicite Morris :** la capture RECETTE CampusFlow montre le rail gauche fixe, le fil/compositeur au centre et « En bref » à droite. À l'ouverture, **il ne s'agit pas d'utiliser le petit panneau droit tel quel** : l'espace de travail **à droite du rail** se redistribue en deux parties de principe **50/50** entre conversation/compositeur et visionneuse. Morris a aussi évoqué oralement « 55/45 » à titre d'ordre de grandeur ; la cible expressément confirmée ensuite est **moitié-moitié**, hors rail, à calibrer géométriquement à la réalisation sans figer artificiellement les pixels.

**Séparation décidée par Morris :** **Ensemble 05 = visualisation rapide pendant le dialogue ; Ensemble 06 — Documents et Journal = bibliothèque, comparaison/versions, édition et révision documentaire assistée par Nora selon les capacités réelles.** Les propositions de sélection de texte, injection de contexte dans le compositeur et bouton « Demander à Nora » dans la visionneuse ont été **retirées du périmètre approuvé**. Aucun éditeur universel, second chat, moteur documentaire ou nouvelle fonctionnalité d'édition n'est décidé ici.

**Sources existantes :** [Figma Travail](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-8), [Figma inspection](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-370), [Figma révision/inspection](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=97-359) ; [R3 §17 inspection](../../ux-ui/espace-projet-interaction-pilote-nora.md) (hypothèses plus larges non automatiquement retenues dans Travail), [R2 D3 RG-UX-004..009](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [D4 RG-KNOW-016..020](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md). La capture utilisateur et les maquettes examinées ne sont **pas des preuves runtime nouvelles** ni une modification Figma.

### 12.2. Trois modes de disposition (VALIDATED SPEC)

| Mode | Comportement validé |
|---|---|
| **Travail sans visionneuse** | Rail gauche fixe ; fil et compositeur en zone centrale ; panneau droit **« En bref »** selon le cadre Ensemble 04 accepté avec réserves. |
| **Visionneuse ouverte** | Rail gauche **inchangé** ; **moitié de l'espace utile pour fil + compositeur, moitié pour la visionneuse**, qui **remplace temporairement « En bref »**. Ni quatrième colonne, ni visionneuse étranglée dans l'ancienne largeur. |
| **Lecture partagée** | Conversation et compositeur visibles et utilisables ; défilement de la visionneuse indépendant ; aucun nouveau fil/chat ni envoi implicite. Transition de largeur fluide sans détruire le fil, le texte, le focus ou l'activité. |
| **Agrandissement** | Icône permettant à la visionneuse d'occuper **toute la zone à droite du rail**. Conversation/compositeur masqués temporairement mais **non détruits ni réinitialisés**. |
| **Réduction** | Retour au partage moitié-moitié, **sur la même ressource, même version et point de lecture**, avec fil/brouillon préservés. |
| **Fermeture** | Retour à la largeur initiale du fil et au panneau **« En bref »** ; aucun effet métier, écriture ou déplacement forcé de scroll par la fermeture. |
| **Écran étroit/mobile** | Ne pas imposer un 50/50 illisible ; visionneuse en zone utile avec sortie explicite vers Travail, en préservant les données. Dimensions et breakpoints techniques à qualifier. |

**Cohérence UX-002 :** le redimensionnement ou la fermeture interne de la visionneuse ne vaut pas un retour de navigation depuis un autre écran et ne force donc pas un scroll au bas du fil. Une vraie navigation **Documents → Travail** reprend la politique UX-002 (dernier message par défaut). Pendant la lecture volontaire de messages anciens, une nouvelle réponse ne déplace pas le Pilote et garde le signal discret déjà validé. La saisie respecte le Sujet 03.

### 12.3. Une visionneuse unique et le changement de ressource (VALIDATED SPEC)

**Décision Morris :** **une seule visionneuse active** dans Travail. Si le Pilote clique un autre document/lien consultable, **son contenu remplace celui de la même visionneuse**. Aucun deuxième panneau, aucune superposition, aucun onglet documentaire dans Travail.

| Interaction | Effet attendu |
|---|---|
| Cliquer une production Nora conservée | Ouvrir la version effectivement disponible en **lecture seule**, avec titre, provenance, statut/version réels. |
| Cliquer une autre ressource B alors que A est ouvert | Remplacer A par B dans **la même visionneuse** ; conserver le fil et le brouillon. |
| Retour simple à la ressource précédente dans la même consultation | Possible **si l'origine est réellement connue/conservée**, sans fabriquer une pile d'onglets ou un historique indépendant durable. |
| Agrandir/réduire | Ne change ni ressource ni version ; conserver autant que possible la position de lecture. |
| Ouvrir dans Documents | Naviguer explicitement vers la ressource canonique en Ensemble 06 **si elle existe et reste autorisée** ; ne pas présenter un lien fictif. |
| Source Git ou lien externe | Aperçu seulement si le contenu a été **réellement obtenu** avec droits actuels ; sinon lien vers l'original (nouvel onglet navigateur si pertinent) ou état d'indisponibilité. Pas de navigateur web intégré ni droit Git induit. |
| Fermer | Restaurer Travail et « En bref » sans modifier l'objet, envoyer un message ou déclencher d'effet. |

**Types prioritaires** : documents Nora et aperçus de sources Git ; les hypothèses R3 sur contrats, décisions, résultats et autres objets **ne créent aucune obligation nouvelle dans cette visionneuse**. L'Inspection complète des documents et la gestion documentaire appartiennent à l'Ensemble 06.

### 12.4. Invariants et responsabilités

1. **Lecture seulement.** Ouvrir, consulter, remplacer, agrandir et fermer ne créent ni version documentaire, ni HumanDecision, ni lancement, ni publication Git, ni message Nora.
2. **Une vérité par objet.** Identité/version/statut du document en D4 ; provenance et droits Git en D9 ; constat/proof en D8 si applicable. La visionneuse n'est jamais une source officielle concurrente.
3. **Droits et honnêteté.** Accès courant recontrôlé ; source indisponible, révoquée ou périmée = état approprié, pas de faux aperçu, de fuite ni de contenu reconstruit. Les liens historiques de lecture restent distincts des anciens choix conversationnels expirés (Sujet 02).
4. **Continuité.** Un seul fil, brouillon par projet intact, référence lue intacte à l'agrandissement, responsive et focus/clavier cohérents ; défilement de lecture et de conversation indépendants.
5. **Accessibilité et absence de dette gratuite.** Actions Fermer/Agrandir/Réduire identifiables au clavier/lecteur d'écran, focus restitué, zoom/mobile utilisables ; aucun second moteur de navigation, aucun éditeur/selection interactive ajouté par inertie.

### 12.5. État Git et impacts avant implémentation

**Code consulté : `main@997d4c4e8204993de7107552898c8cc08cd3b0ed`.** Dans `web/src/app/projects/[projectId]/page.tsx`, `openDocumentReadOnly` bascule vers `surface="document"`, avec `DocumentLibrary`/`DocumentInspector` ; `NoraConversation` apparaît uniquement sur `surface="travail"`. Le partage contextuel 50/50 **n'est pas démontré** sur `main`. Le code local et la RECETTE à cet instant sont **NON OBSERVÉS**, sans déduction sur staged/untracked.

**Blast radius :** shell/rail stable, grille Travail et « En bref », changement de vue et URL/historique, récupération des ressources, cache/permissions/provenance et états d'erreur, défilement indépendant, maintien de brouillon/fil, modes partagés/étendus, responsive, accessibilité, Figma cible, intégration avec l'Ensemble 06, tests réels. Ne pas réécrire des propriétaires D3–D9 ni faire évoluer une fonctionnalité documentaire hors contrat.

**Gates :** contrat visuel Figma à synchroniser avant conformité forte ; réalisation code/tests/documentation en macro-lot cohérent sous GO Morris distinct et SFIA v2.6 ; aucun PR/merge/réception globale automatiquement induits.

### 12.6. Scénarios d'acceptation candidats (NON EXÉCUTÉS)

| ID | Scénario | Oracle |
|---|---|---|
| UX-VIEW-01 | Travail normal | « En bref » visible, fil et compositeur opérationnels, rail fixe. |
| UX-VIEW-02 | Ouvrir document Nora réel | **50/50 hors rail**, « En bref » remplacé, document en lecture seule/version réelle. |
| UX-VIEW-03 | Dialoguer avec Nora en visualisant | Conversation/compositeur accessibles, sans perte de brouillon ni second chat. |
| UX-VIEW-04 | Agrandir, réduire un long document | Rail inchangé, même ressource/version/point de lecture ; retour à la moitié. |
| UX-VIEW-05 | Fermer | « En bref » revient, largeur initiale restituée, pas de saut de scroll. |
| UX-VIEW-06 | Cliquer A puis B | Même visionneuse, contenu remplacé, aucun panneau/onglet additionnel. |
| UX-VIEW-07 | Revenir à A dans la même consultation | Retour simple si origine connue ; aucun faux historique. |
| UX-VIEW-08 | Ouvrir dans Documents | Bonne ressource/projet en Ensemble 06, aucun changement de version implicite. |
| UX-VIEW-09 | Git accessible/inaccessible/revocation | Aperçu uniquement autorisé et récupéré, sinon lien ou état honnête. |
| UX-VIEW-10 | Nouveau message Nora pendant relecture ancienne | UX-002 respecte la lecture, visionneuse ouverte, signal nouveau contenu. |
| UX-VIEW-11 | Ouvrir/fermer avec brouillon projet A | Texte intact, non envoyé, projet B isolé. |
| UX-VIEW-12 | Mobile, écran étroit, zoom, clavier | Lecture confortable, retour et actions accessibles sans fausse répartition 50/50. |
| UX-VIEW-13 | Action d'édition depuis Travail | Aucun bouton éditeur fictif : bascule volontaire vers Ensemble 06 si capacité réelle. |
| UX-VIEW-14 | Lien de source dans un message ancien | Lecture encore autorisée indépendamment de l'expiration des choix conversationnels. |
| UX-VIEW-15 | Lien direct sans origine connue | Aucun retour fictif, état d'accès réel et sortie utile. |

**Preuves futures :** captures Figma/runtime comparables (normal, moitié/moitié, agrandi), mesures F2 pertinentes, essais BROWSER et, selon les capacités, LIVE/REAL sur SHA/build contrôlé ; droits, sources manquantes, zoom/mobile/focus, rafraîchissement, maintien brouillon, conversation en cours et non-régression Ensemble 04 + Sujets 01–04. **Aucun scénario n'est déclaré PASS par la rédaction du contrat.**

### 12.7. Sortie de conception et cohérence des cinq sujets

| Élément | Qualification |
|---|---|
| Lecture seule, disposition 50/50 hors rail, « En bref » remplacé | **VALIDATED SPEC BY MORRIS** |
| Agrandir/réduire/fermer, contexte/fil/brouillon conservés | **VALIDATED SPEC BY MORRIS** |
| Une visionneuse et changement de ressource sans panneaux/onglets | **VALIDATED SPEC BY MORRIS** |
| Gestion documentaire/édition/versioning approfondi et « Demander à Nora » sur sélection | **HORS SUJET 05 — ENSEMBLE 06 / domaines propriétaires** |
| Modes pixel/mobile, support sources, sécurité et disponibilité effective | **À QUALIFIER / NON PROUVÉS** |
| UX-VIEW-01..15 | **CANDIDATS / NON EXÉCUTÉS** |
| Gate C, code, PR, merge, ADOPTED | **NON ACQUIS** |

**SORTIE DU SUJET 05 EN CONCEPTION UX : VALIDATED SPEC BY MORRIS — 17/11/2026.** Les **cinq sujets de Travail avec Nora sont arbitrés** mais **l'Ensemble 05 n'est pas encore réceptionné ni clos**. La prochaine étape est la revue intégrée de cohérence et complétude des Sujets 01–05, puis la qualification des écarts et preuves en vue d'un **macro-lot de réalisation cohérent sous GO distinct**. Aucun avancement technique ni promotion ne découle de cette contribution documentaire.
