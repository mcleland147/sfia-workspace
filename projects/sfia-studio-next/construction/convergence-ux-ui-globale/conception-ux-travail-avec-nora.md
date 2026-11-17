# SFIA Studio Next — Conception UX : Travail avec Nora

| Métadonnée | Valeur |
|---|---|
| Périmètre | R5 / ML4D — Ensemble 05, Travail avec Nora |
| Version | v0.1 — 17 novembre 2026 |
| Statut | **VALIDATED SPEC — UX-002 (contrat de lecture et défilement) approuvé par Morris** ; document de conception évolutif, autres sujets non encore instruits |
| Autorité | Morris : arbitrages UX ; ChatGPT : formalisation et revue ; Cursor : réalisation technique sous GO distinct |
| Référentiel de suivi | [Registre central ML4D](registre-central-revues.md) |
| Branche documentaire | docs/next-ml4d-registre-revues-20261116 — candidate, distincte de main |
| Base Git vérifiée à la rédaction | main @ 997d4c4e8204993de7107552898c8cc08cd3b0ed |
| Frontières | Conception ≠ code livré ≠ preuve navigateur après correction ≠ Gate C / ML5 / STABLE / ADOPTED |

## 1. Objet et périmètre

Ce document constitue le **support de conception intégré de l’Ensemble 05**. Il accueillera progressivement les **sujets UX réellement examinés et arbitrés par Morris**, sans générer un document ou un micro-cycle Cursor par irritant.

Premier sujet : **UX-002 / S07-06-R01 — position de lecture et continuité de défilement du fil Nora**.

**Résultat Pilote attendu :** dans un projet existant, revenir au dernier échange par défaut après une navigation, un rafraîchissement ou une reconnexion ; suivre naturellement un échange actif, tout en pouvant relire librement des messages passés sans défilement imposé lorsqu'une nouvelle réponse arrive.

**IN :** fil visible, position de lecture, nouveaux messages, comportement après envoi/réception, retour depuis les autres surfaces, rafraîchissement, reprise de session, fil long, commande de retour en bas, accessibilité et états incertains.

**OUT :** nouveau système de chats, refonte du moteur Nora/D4/D6, nouvelles API ou migrations décidées par ce seul document, refonte du layout commun de l’Ensemble 04, nouvelle fonctionnalité ML5, démarrage technique et promotion.

## 2. Sources et précédence

- [SEF v0.2](../../governance/SEF.md) : construction par capacité, propriétaires, preuves et gates.
- [Roadmap Next](../../governance/roadmap.md) et [décision ML4C / ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md).
- [Conception R3 Espace projet et interaction Pilote–Nora](../../ux-ui/espace-projet-interaction-pilote-nora.md), **§39** : un seul fil visible et continu par projet ; hypothèses multi-chat antérieures superseded.
- [Conduite gouvernée de Nora](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) et [connaissance / continuité D4](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md).
- [Conception Sas / continuité D2](../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md).
- [Figma Travail](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-8), conversation longue [94:214](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214), reprise [96:370](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=96-370) : **références à confronter** ; leurs propriétés natives ne sont pas réauditées par ce seul document.
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

## 6. Sujets suivants — à instruire, pas décidés

Continuer l'Ensemble 05 avec la **présentation des réponses Nora et des interactions utiles** (messages longs, hiérarchie Markdown, liens/sources, propositions et actions existantes, états d'activité). Ajouter ici les seules décisions approuvées après revue utilisateur ; conserver les observations et arbitrages chronologiques dans le registre central.

**État de ce document à v0.1 :** UX-002 **VALIDATED SPEC**, anomalie **REPRODUITE EN RECETTE**, implémentation corrective **NON DÉMONTRÉE**, réception après correction **À FAIRE**. Ensemble 05 toujours **EN REVUE**.
