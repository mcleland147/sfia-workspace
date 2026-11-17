# SFIA Studio Next — Conception UX : Travail avec Nora

| Métadonnée | Valeur |
|---|---|
| Périmètre | R5 / ML4D — Ensemble 05, Travail avec Nora |
| Version | **v0.2 — 17 novembre 2026 : ajout du Sujet 02 / réponses structurées et actions conversationnelles** |
| Statut | **VALIDATED SPEC par Morris sur UX-002 et Sujet 02 (principes A–F, transmission immédiate, indépendance du brouillon)** ; détails visuels et choix techniques explicitement à qualifier |
| Autorité | Morris : arbitrages UX ; ChatGPT : formalisation et revue ; Cursor : réalisation technique sous GO distinct |
| Référentiel de suivi | [Registre central ML4D](registre-central-revues.md) |
| Branche documentaire | docs/next-ml4d-registre-revues-20261116 — candidate, distincte de main |
| Base Git vérifiée à la rédaction | main @ 997d4c4e8204993de7107552898c8cc08cd3b0ed |
| Frontières | Conception ≠ code livré ≠ preuve navigateur après correction ≠ Gate C / ML5 / STABLE / ADOPTED |

## 1. Objet et périmètre

Ce document constitue le **support de conception intégré de l’Ensemble 05**. Il accueillera progressivement les **sujets UX réellement examinés et arbitrés par Morris**, sans générer un document ou un micro-cycle Cursor par irritant.

Deux sujets arbitrés au 17/11/2026 : **UX-002 / S07-06-R01 — position de lecture et continuité du fil**, et **Sujet 02 — restitution structurée adaptative, composition et interactions conversationnelles**. Les décisions s’appliquent ensemble : un clic qui envoie une demande dans le fil suit la politique UX-002 de position de lecture.

**Résultat Pilote attendu :** dans un projet existant, revenir au dernier échange par défaut après une navigation, un rafraîchissement ou une reconnexion ; suivre naturellement un échange actif, tout en pouvant relire librement des messages passés sans défilement imposé lorsqu'une nouvelle réponse arrive.

**IN :** fil visible, position de lecture, nouveaux messages, comportement après envoi/réception, retour depuis les autres surfaces, rafraîchissement, reprise de session, fil long, commande de retour en bas, **grammaire de réponses ouvertes et composites, réponses courtes/longues, restitution des faits/sources, interactions conversationnelles immédiates et brouillon indépendant**, accessibilité et états incertains.

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

**Décision Morris confirmée le 17/11/2026 :** « Nora doit construire la forme de sa réponse au service du raisonnement et du résultat attendu, et non adapter son raisonnement aux limites d'un gabarit visuel. » Les six principes A–F issus de la revue ont été **validés**. Après revue des options, Morris a aussi choisi **la transmission immédiate** pour les interactions conversationnelles, et a approuvé le comportement **brouillon conservé indépendamment** lorsqu'un choix est sélectionné.

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

**Frontière de persistance :** la protection du brouillon pendant cette interaction **est validée**. La conservation du brouillon à travers refresh, navigation intersurfaces, fermeture du navigateur et reconnexion reste **à examiner comme contrat global du compositeur** ; ne pas prétendre qu'elle est déjà prouvée ni la décider silencieusement.

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

**Niveaux de preuve visés :** revue Figma native ciblée pour les traitements visuels, tests déterministes des contrats et de la sécurité, BROWSER/RECETTE sur SHA identifié, scénario LIVE seulement si fournisseur/capacité réellement disponibles, non-régression UX-002 et Ensemble 04. Tests FAKE ou Figma ≠ comportements LIVE/REAL.

## 9. Qualification de sortie et suite de la revue

| Sujet | Statut au 17/11/2026 |
|---|---|
| **UX-002 — position de lecture** | **VALIDATED SPEC** ; anomalie REPRODUITE ; correction OPEN / non implémentée par cette action. |
| **Sujet 02 — principes A–F** | **VALIDATED SPEC BY MORRIS** ; liberté de composition et proportionnalité opposables. |
| **Sujet 02 — choix conversationnels** | **VALIDATED SPEC BY MORRIS** : transmission immédiate, **brouillon indépendant intégralement préservé**. |
| **Variantes visuelles détaillées** | **CANDIDATES** : implémentation graphiquement à qualifier, aucun pixel/token décidé ici. |
| **Contrat technique / persistance / service / concurrence** | **À QUALIFIER** avec architecture/code réels, impacts et propriétaire ; pas de nouveau moteur ni ADR adopté par ce document. |
| **Réception Studio / Gate C / ML5** | **NON ACQUISE** ; aucune mutation produit/RECETTE, aucun GO Cursor, PR, merge ni promotion. |

**Suite logique de l'Ensemble 05 :** instruire le **compositeur et ses états** (saisie, brouillon, envoi, attente, interruption, erreurs/reprise), puis synchroniser les contrats déjà validés avec la réalisation regroupée du lot après qualification et GO Morris distinct. Ce document demeure la **source intégrée de conception** ; le registre central conserve les observations, arbitrages et preuves datés. Ne pas ouvrir de document ou de cycle indépendant par scénario.


Continuer l'Ensemble 05 avec la **présentation des réponses Nora et des interactions utiles** (messages longs, hiérarchie Markdown, liens/sources, propositions et actions existantes, états d'activité). Ajouter ici les seules décisions approuvées après revue utilisateur ; conserver les observations et arbitrages chronologiques dans le registre central.

**État de ce document à v0.1 :** UX-002 **VALIDATED SPEC**, anomalie **REPRODUITE EN RECETTE**, implémentation corrective **NON DÉMONTRÉE**, réception après correction **À FAIRE**. Ensemble 05 toujours **EN REVUE**.
