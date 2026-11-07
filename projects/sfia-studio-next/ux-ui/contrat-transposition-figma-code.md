# SFIA Studio Next — Contrat de transposition Figma → interface produit

**État : DOCUMENTED — R3 CONSOLIDATION CANDIDATE / REVIEW MORRIS PENDING.** Ce document est une **source UX de réalisation** pour R4–R6, et non un nouveau template SFIA v2.6, une décision d'architecture, une API validée ou une preuve de conformité runtime. Il se lit avec [l'UX Pilote–Nora](espace-projet-interaction-pilote-nora.md), le [guide de couverture](audit-couverture-ux-r3.md) et les propriétaires R1 / R2. **Les règles métier et les décisions applicables priment sur toute reproduction mécanique d'une maquette.**

| Référence | Valeur |
| --- | --- |
| Figma source | [SFIA Studio Next — Parcours produit](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP) |
| Page mesurée | \`94:49\` — parcours produit, avec fondations et contrats visuels sur les autres pages |
| Branche de documentation | \`sfia/next-r3-ux-interaction-candidate\` ; \`main\` non promue |
| Index géométrique versionné | [\`index-geometrie-frames-r3.json\`](index-geometrie-frames-r3.json) — **223 frames et 901 blocs racines visibles**, après raccordement de deux index de revue mesurés à la date du snapshot |
| Origine des mesures ci-dessous | Lecture directe des propriétés Figma \`x, y, width, height, layoutMode, padding, itemSpacing, cornerRadius, fontName, fontSize, fills\` |
| Périmètre | Grammaire visuelle, layout, composants et état d'activité Nora ; reprise pour implémentation par Cursor |
| NON inclus | Choix React/CSS, API ou base de données, contrat de streaming R4, code ou garantie « pixel-perfect » tous environnements |

## 1. Règle de construction — une composition, plusieurs états

Studio Next n'est pas une collection de 221 applications distinctes. Une frame est un **cas de rendu**, une variante, un état négatif ou une surface de revue ; les index de revue ne sont pas des écrans du produit. Les responsabilités réutilisables sont : rail projet, bandeau, fil, message, activité Nora, liste d'étapes, composer, inspection, contrat, restitution, commande d'arrêt et état de reprise.

1. **Une seule responsabilité par composant**, déclinée par état. Ne pas recopier 35 fois un panneau Git ou 12 fois une carte Nora.
2. **Le layout est paramétrique** : dimensions de référence aux viewports Figma ; entre deux largeurs, prévoir reflow, contenu variable, zoom et texte long. L'usage de coordonnées absolues est réservé aux éléments véritablement superposés.
3. Les propriétés Figma **fixent la cible de rendu** de chaque référence ; une valeur non disponible est marquée \`À EXTRAIRE\`, jamais devinée par Cursor.
4. Nommage par responsabilité produit, non par chantier : les IDs numériques Figma ne doivent pas devenir des noms de composants, modules, API ou tests.
5. Un comportement métier représenté dans Figma reste \`NOT PROVEN\` avant observation en navigateur et, pour les effets externes, preuve LIVE/REAL.

## 2. Mesures de référence — sources Figma effectivement lues

### 2.1. Écran 03 — conversation

| Nœud | Figma ID | Valeurs exactes observées |
| --- | --- | --- |
| Frame | \`94:214\` | **1680 × 970 px** |
| Rail de projet | \`94:215\` | \`x=0, y=0, w=240, h=970\` ; auto-layout vertical ; padding \`top 25 / right 19 / bottom 0 / left 19\` ; gap \`13\` |
| Surface conversationnelle | \`94:249\` | \`x=240, y=0, w=1440, h=970\` ; auto-layout vertical |
| Colonne conversation Pilote–Nora | \`94:255\` | \`x=32, y=40.5, w=990, h=849\` ; auto-layout vertical, gap \`13\` |
| Fil de conversation | \`94:256\` | \`x=0, y=0, w=938, h=719\` relatif à la colonne ; auto-layout vertical, gap \`13\` |
| Composer | \`94:350\` | \`x=0, y=732, w=938, h=79\`, padding **12** sur 4 côtés, gap **8**, rayon **11** |
| Placeholder composer | \`94:351\` | **Inter Regular 13 px**, interligne **18 px** |

Les valeurs \`x/y\` d'un enfant sont relatives à **son parent direct**, non au viewport ; ce contrat ne les additionne jamais sans référencer la chaîne de parents. La largeur du rail 03 (**240**) diffère de celle de l'écran 06 (**246**) : **incohérence de fondation à arbitrer avant un token global**, ne pas en figer deux arbitrairement.

### 2.2. Écran 06 — contrat d'exécution

| Nœud | Figma ID | Valeurs exactes observées |
| --- | --- | --- |
| Frame | \`94:629\` | **1680 × 1060 px** |
| Rail | \`94:630\` | **246 × 1060**, padding \`20/19/0/19\`, gap **10** |
| Surface produit | \`94:672\` | \`x=246\`, largeur **1434** |
| Contexte supérieur | \`94:673\` | hauteur **59**, padding gauche **30**, gap **16** |
| Panneau contrat métier | \`199:428\` | \`x=685, y=45, w=739, h=795\` relatif à \`Contrat d'exécution\` ; padding **18**, gap **8** |
| Accordéon mission fermé | \`199:449\` | \`x=18, y=297, w=700, h=52\` relatif au panneau ; padding **9**, gap **5**, rayon **9** |
| Titre | \`94:682\` | **Inter Bold 24 px**, interligne **34 px**, couleur native Figma **#F4F6FC** ; variable commune à qualifier si applicable |

Il ne faut pas convertir ces coordonnées de référence en offsets rigides : le panneau de contrat doit suivre le conteneur et passer en colonne lorsque la place manque. Les six volets, l'instruction exacte et les quatre engagements validés restent contractuels au niveau métier, quelle que soit la géométrie.

### 2.3. Écran 206 — suivi d'activité Nora

| Élément | Figma ID | Mesures observées |
| --- | --- | --- |
| Frame de conversation | \`281:389\` | **1680 × 970 px** |
| Rail / fil / composer | \`281:390 / 281:431 / 281:525\` | **240 × 970**, **938 × 719**, **938 × 79** |
| Carte activité | \`281:547\` | \`x=0, y=156, w=938, h=331\` relativement au fil ; padding **18**, gap **13**, rayon **12**, fond **#171F30** |
| Étape 1 | \`281:551\` | \`x=18, y=78, w=887, h=37\` relatif à la carte ; padding **10**, gap **7**, rayon **8**, fond **#1D273C** |
| Étapes 2–3 | \`281:555 / 281:559\` | **887 × 37**, positions locales \`y=128\` / \`y=178\` |
| Bande de limites | \`281:563\` | **898 × 33**, rayon **8**, fond **#0D111B** |
| Groupe d'actions | \`281:565\` | **439 × 39**, gap **12** |
| Action « Arrêter la réponse » | \`281:566\` | **225 × 35**, rayon **8**, fond **#FCC273**, texte **#0D111B** |
| Retour au travail | \`281:568\` | **198 × 35**, fond **#1D273C** |
| Libellé d'activité | \`281:549\` | **Inter Semi Bold 15 px**, **#7AB0FA** |
| Texte d'étape | \`281:553\` | **Inter Medium 12 px**, **#EDF2FC** |
| Statut d'étape | texte « En cours » | **Inter Semi Bold 11 px**, **#B0C2DE** |
| Texte du bouton d'arrêt | « Arrêter la réponse » | **Inter Semi Bold 12 px** |

Les valeurs hexadécimales du §2.3 sont **des propriétés natives de la variante 206**, pas des tokens universels déjà ratifiés. Avant R4 : confronter la page 00 (fondations) et 02 (contrats visuels), décider un token par responsabilité, puis remplacer les couleurs directes par les tokens validés.

### 2.4. Écran 216 — activité à largeur 390

La frame \`282:468\` mesure **390 × 1350 px**. Le conteneur \`Contenu / lecture ordonnée\` est **390 px** de large, padding **16 px** sur les quatre côtés, gap **15 px** ; la zone textuelle disponible est **358 px**. Le titre « Nora travaille sur votre demande » est en **Inter Bold 23 px** et se répartit sur plusieurs lignes. **1350 px correspond à la longueur d'une planche illustrée**, pas à une taille de viewport mobile à imposer. Le fonctionnement sous viewport \`390×844\` ou \`320×568\` doit être validé par scrolling et reflow navigateur.

## 3. Contrat de comportement — travail Nora visible

### 3.1. Responsabilités et provenance

- **D3 / Nora** : formule un intitulé intelligible et contextualise les faits réellement connus ; ne publie ni raisonnement interne détaillé ni événements techniques inventés.
- **D7** : porte la tentative externe, les capacités d'interruption, les événements *reçus*, les observations et l'état confirmé/inconnu. Ne présume pas la télémétrie fine de Cursor.
- **D6** : porte la décision du Pilote, les suspensions/levées et interdictions applicables ; un STOP humain reste opposable après redémarrage.
- **D8** : distingue la déclaration, l'observation, la conformité et la réception ; une carte de progression n'est pas une preuve de résultat.
- **UI de Studio** : projette les informations de ces propriétaires ; aucun moteur d'état, de mandat ou de preuve concurrent n'est créé pour alimenter l'animation.

Une « action Nora » présentée comme réelle doit être rattachable à sa source et à son état. Une simple génération cognitive peut afficher « Nora prépare une réponse » **sans détailler des tâches invisibles**. Le contenu d'une requête API, d'un outil ou d'une tentative doit être filtré : aucun secret, log sensible ou instruction interne brute dans le fil.

### 3.2. États UX et variantes canoniques

| Calque | État | Règle de présentation |
| --- | --- | --- |
| [206](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-389) | Traitement cognitif en cours | Nora est active, étapes visibles si réellement connues |
| [207](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-570) | Source consultée | Lecture réellement attestée et référence disponible |
| [208](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-751) | Détail non disponible | Pas de liste artificielle d'opérations |
| [209](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-932) | Intervention externe observée | Afficher seulement les retours disponibles de l'intégration |
| [210](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-1113) | Arrêt demandé côté Nora | Commande reçue ≠ cessation observée |
| [211](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-1294) | Arrêt externe non confirmé | Ne pas annoncer que Cursor a cessé ses effets |
| [212](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-1475) | Réponse interrompue | Acquis identifiables, travail restant explicite |
| [213](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-1656) | Reprise à préparer | Vérifier les acquis, versions, droits, mandat et effets |
| [214](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-1837) | Reprise bloquée | Expliquer la cause et le prochain arbitrage |
| [215](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=281-2018) | Restitution partielle | Progrès établi, non terminé, sans pourcentage fictif |
| [216](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=282-468) | Mobile activité | Reflow vertical et commande d'arrêt |
| [217](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=282-492) | Mobile reprise | Acquis, conditions de reprise et action lisibles |

[Index de revue des variantes](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=283-398). **Les actions entre variantes d'un index Figma servent à la revue** ; elles ne prétendent pas reproduire la machine à états réelle.

### 3.3. Contrat de commande

- Avant une demande : composer en état **Envoyer**.
- Pendant une activité interrompable et effectivement maîtrisée : action **Arrêter**, accessible via composer et activité ; indiquer la cible de l'arrêt.
- Clic Arrêter : enregistrer la **demande** dans le domaine propriétaire et afficher un état d'attente. Ne pas afficher immédiatement « arrêté ».
- Si arrêt confirmé : conserver les sorties et effets déjà observés, les inconnus et la cause ; proposer une **reprise contrôlée**.
- Si l'interruption n'est pas supportée ou n'est pas confirmée : état « indisponible » ou « non confirmé », effets possibles signalés, pas de faux rollback.
- Reprise : réconcilier versions, droits, sources, mandats, tentatives et effets. Les éléments cognitifs déjà produits peuvent être réutilisés, sans garantir un redémarrage exact au même token ou à la même commande.
- **Pas de pourcentage** sans dénominateur et étapes prouvables ; utiliser des statuts qualitatifs. Aucun « 70 % » issu du temps écoulé ou de la longueur de génération.

### 3.4. Animation / accessibilité

L'activité courante peut recevoir un **accent chromatique animé discret**, distinct du texte conversationnel normal, sans provoquer une lecture de logs en mouvement continu. L'animation ne prouve pas l'activité effective ; son activation dépend d'un état courant valide. En interruption, fin, échec et état inconnu, elle s'arrête ou adopte un état non ambigu.

**Contrat à implémenter en R5/R6 :** respecter \`prefers-reduced-motion\` ; présenter un libellé et une icône indépendants de la couleur ; focus visible ; boutons clavier/lecteur d'écran ; statut annoncé sans réannonces excessives ; contraste et lisibilité conformes à la référence d'accessibilité retenue en R4. Éviter de faire défiler automatiquement le fil lorsque le Pilote lit une zone antérieure.

## 4. Contrat d'intégration mesurable pour Cursor

### 4.1. Source versionnée et extraction

Avant d'implémenter une capacité visuelle, le contrat remis à Cursor identifie : (1) **Figma fileKey/page/frame ID**, (2) version de la source / capture de référence datée, (3) propriétaire de comportement R2, (4) propriétés Figma natives, (5) breakpoints et états applicables, (6) tests, (7) différences acceptées par Morris. Le manifeste JSON du répertoire fournit les IDs, tailles et blocs de premier niveau de l'ensemble des frames **à la date d'extraction**, mais pas la géométrie profonde de chaque descendant.

Pour chaque écran réellement construit, extraire les calques utiles et leurs propriétés : nom/ID/parent, \`x/y/w/h\`, layout \`HORIZONTAL|VERTICAL\`, padding, gap, rayon, bordure/épaisseur, couleur ou variable liée, famille/poids/taille/interligne de police, contraintes/resizing, visibilités, actions/states et composants réutilisés. **Ne jamais déduire une valeur non extraite d'une capture.** Les références étant mutables dans Figma, recontrôler le snapshot lors de l'intégration.

### 4.2. Règles de transposition

- Composant commun d'abord ; les différences doivent venir d'un état ou d'une variable clairement justifiée, pas d'une copie locale du style.
- Les **dimensions sont des mesures de la référence**, pas une invitation à des largeurs rigides sur toutes tailles. Utiliser une grille/auto-layout/flex équivalente sous réserve du choix technique R4.
- Les espacements et tailles de texte doivent suivre la source de référence ; en cas de conflit entre deux écrans sur un élément global, **remonter un écart de fondation** avant implémentation.
- Une zone dynamique (message Nora, texte long, accordéon, détails de preuve) est définie par ses contraintes min/max, croissance, retour à la ligne, scroll et états; ne pas couper le contenu pour correspondre à une capture.
- Limiter les exceptions « pixel-perfect » aux éléments appropriés (icônes, alignements, grille) ; ne pas transformer les composants en un tableau de coordonnées absolues.

### 4.3. Plan de contrôle automatisable

| Contrôle | Méthode future | Preuve |
| --- | --- | --- |
| Layout de référence | Mesurer dans le DOM les boîtes englobantes des composants et les confronter aux propriétés Figma | Rapport de mesures par composant / viewport |
| Police, couleur et tokens | Comparer \`computedStyle\` aux valeurs/token R4 validés | Diff textuel traçable |
| Capture visuelle | Capture navigateur déterministe + comparaison d'image sur références figées | Artéfact screenshot/diff, environnement et résultat |
| Responsive | Exécuter les scénarios au moins aux tailles illustrées \`1680, 1280, 390\` et à \`320\` px | Aucun débordement, contenu lisible, pas d'action inaccessible |
| Fonctionnel | Interaction clavier, clics, dépliants, focus, états loading/stop/reprise, faux événements absents | Scénarios de comportement navigateur |
| Gouvernance / effets | Vérifier les interdictions D6/D7, source des événements, STOP demandé vs confirmé, reprise et absence de double effet | Tests d'invariants et preuves LIVE/REAL si applicables |

Les tolérances ne sont **pas encore validées**. Proposition de calibration à soumettre à Morris lors de la première implémentation : **écart de boîtes ≤ 2 px aux points de référence** pour blocs stables, tailles de police/couleurs exactes, et comparaison image avec masquage des données dynamiques et seuil convenu après capture baseline. Ne jamais « corriger » une différence en masquant le contenu attendu ou en relâchant silencieusement le seuil.

### 4.4. Démonstration de sortie par macro-lot de construction

Une capacité construite est livrée avec : références Figma, composant(s) et états couverts, diff de code, valeurs mesurées, tests et captures viewport, divergences consignées, responsabilités fonctionnelles, risques, dette/exit. Le rapport de validation peut rejeter un rendu même si les tests fonctionnels passent ; inversement une capture identique ne prouve pas le comportement STOP/reprise.

## 5. Réserves et décision à venir

1. **R1/R2 D2 :** le contrat d'activité, les champs minimum et les scénarios d'arrêt/reprise nécessitent une consolidation normative approuvée par Morris. Ce document prépare les contraintes UX, **sans modifier les règles VALIDATED SPEC**.
2. **R4 :** qualifier les capacités et événements effectivement disponibles de l'API Nora et des outils ; définir identité, provenance, autorité, granularité et persistance d'observations. Ne pas inventer un flux temps réel universel.
3. **Fondations Figma :** résoudre l'écart de rail 240 vs 246 px et figer les tokens partagés avant déclaration « fidèle » ; l'index JSON est un snapshot, à régénérer si Figma évolue.
4. **R5/R6 :** construire et prouver animation, commandes, reprises, niveaux d'accès, contrôles responsive et vérification visuelle sur un périmètre end-to-end représentatif. **R3 validé en conception ≠ implémenté ≠ prouvé ≠ ADOPTED**.
5. **Gates :** la validation de ce contrat par Morris reste à obtenir avant intégration de choix de transposition normatifs ; aucune PR/merge, modification d'architecture, exécution Cursor ou clôture globale R3 n'est incluse dans le mandat.

## 6. Couverture des familles, des variantes et du parcours — audit de finalisation R3 (2026-11-03)

**Réponse à la question d'exhaustivité :** oui, les **neuf responsabilités produit**, les sept scénarios R1 et les **223 frames** sont inventoriés ou raccordés dans la source de conception. **Non, les dimensions détaillées de tous les descendants des 223 frames ne sont pas extraites dans ce contrat.** La fidélité d'implémentation ne peut donc pas être certifiée globalement sur le seul manifeste. L'extraction profonde s'effectue par capacité R4/R5 à partir de la frame, du composant et de la version retenus ; elle doit alimenter les tests de restitution.

### 6.1. Taxonomie de réutilisation — neuf domaines R1/R2

| Domaine propriétaire | Types d'écrans / états représentés dans Figma | Patrons visuels à transposer | Exemple d'IDs Figma |
| --- | --- | --- | --- |
| **D1 — Accès et portefeuille** | Portefeuille, identité, accès refusé, expiration, liste vide, isolation de projets | Portefeuille, carte projet, notification d'accès, rail conditionnel | `94:50`, `158:120`, `158:192`, `158:336` |
| **D2 — Sas et création** | Sas libre, préparation retrouvée, aperçu, création demandée, succès confirmé, issue incertaine | Fil pré-projet, résumé, commande « Créer », état et continuité | `94:135`, `159:145`, `159:289`, `159:361`, `96:262` |
| **D3 — Conduite Nora** | Conversation courte/longue, réponse adaptative, activité observable, interruption cognitive, reprise et mobile | Fil, message Nora, composer, activité, sources et actions contextuelles | `94:214`, `281:389`, `281:1113`, `282:468` |
| **D4 — Connaissance** | Journal, documents, révisions, inspections, accès et provenance | Carte d'objet, versions, comparaison, retour au fil | `94:515`, `94:370`, `97:359`, `241:385` |
| **D5 — Trajectoire et cycles** | Cycle proposé/actif, maturité, CKI, transition confirmée ou inconnue | Trajectoire, état de cycle, guidance, décision de transition | `125:33`, `127:35`, `127:106`, `127:320` |
| **D6 — Décisions et gouvernance** | Décision, autorisation, restriction, révocation, suspension et réception humaine | Décision inspectable, action d'autorité, avertissement, gate | `128:52`, `128:195`, `128:337`, `129:428` |
| **D7 — Réalisation** | Contrat, six volets, instruction Cursor, précontrôles, tentative, STOP et effets incertains | Contrat + accordéons, version, tentative, suivi, arrêt | `94:629`, `199:1500`, `187:1148`, `188:499` |
| **D8 — Résultats et preuves** | Rapport, pièces, critères, conformité partielle, réserves et restitution | Synthèse, preuve, inspecteur, verdict borné, réception distincte | `94:827`, `100:39`, `188:911`, `202:438` |
| **D9 — Intégration Git** | Git facultatif, ressource, identité, ref, droits, échec de push et conflits | Champs source/référence/droit/effet, contrôle et incident | `96:148`, `236:333`, `236:885`, `237:915` |

Les variantes transverses 197–204 et 216–217 couvrent reflow, mobile, zoom, focus, dégradation et activité. **Une frame peut représenter plusieurs responsabilités** ; cette table définit des familles de composition, pas des moteurs concurrents ni une classification exclusive.

### 6.2. Inventaire et chemins de revue

- **[Index global R3](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=264-401)** : point de départ de revue, relié aux **223/223 frames** de la page 01.
- **[Sept E2E de référence](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=299-389)** : carte cliquable des sept scénarios du cadrage R1 ; résultats confirmés et conditions négatives **inspectables**, non émis automatiquement.
- **[14 variantes complémentaires](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=298-389)** : cycle, méthode, transition, CKI et lecture compacte non atteignables du fil nominal, conservées dans le parcours de revue.
- Mode **Présenter** : trois entrées seulement — principal `94:50`, revue `264:401`, compact `94:1037`. Le parcours nominal n'a pas besoin de rendre tous les incidents actionnables.
- **Numerotation :** 216 frames numérotées de 01 à 217 ; le numéro `137` a disparu au fil du remplacement de l'ancien écran d'instruction par **169 (`199:1500`)**. Il n'est pas recréé sous forme d'alias concurrent. Les sept autres frames sont des index de revue, exclus des écrans applicatifs.
- La révision native du manifeste est **v0.3 : 223 frames, 901 blocs racines visibles**. Elle est une photo de mesure, pas une preuve que chaque enfant, token, état et contrainte responsive est contractuellement décrit.

### 6.3. Contrat de sortie pour Cursor

Pour chaque **capacité** implémentée, Cursor doit disposer avant le code de la liste des références Figma et variantes applicables, de la définition du composant partagé, des mesures profondes extraites des nœuds (y compris filiation, contraintes, typographies, variables et états), du contrat de comportement R2, des tests visuels ciblés et des exceptions acceptées. Un défaut ou désaccord entre deux frames partagées est **KNOWN GAP à arbitrer** et non une liberté de design. Les validations de conformité ne se déduisent pas de l'index des tailles.

**Verdict : COMPLETE FAMILY COVERAGE / PARTIAL LEAF GEOMETRY — UX CONTRACT CANDIDATE.** La conception peut servir de base R4, mais la preuve « pixel perfect de tous les écrans » nécessite la transposition et les comparaisons runtime en R5–R6. Aucune décision de stack, PR, merge ou ADOPTED dans ce contrat.


---

## Addendum de transposition — 2026-11-07 : ML4 Git et Intégrations

**Référence :** [décision](../governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md) ; [brief Figma](../construction/integration-git/brief-ux-figma.md). Réutiliser les frames Git 172 (236:471), 173 (236:609), 184 (236:2127), 185 (236:2265) et 191 (237:1053) du fichier itgvCulInEnFY6DvgIegvP. Créer les nouvelles surfaces **Paramètres → Intégrations**, premier login facultatif, consentement/installations GitHub, ajout et révocation de dépôts, retour contextuel Nora et publication d'une révision D4. Ne pas inventer de node IDs pour les écrans non créés.

Avant code, obtenir **contrat visuel Morris, node IDs natifs, date, snapshot et matrice PF/UX/états** ; contrôler focus, clavier, zoom, reflow, responsive, droit/refus/erreur. Un bouton de configuration ne doit pas autoriser un effet, et aucune publication/merge ne doit être simulée visuellement comme réussi.

**Statut :** phase Figma non exécutée ; aucun runtime et aucune preuve visuelle de nouvelles surfaces.

---

## 7. Transposition à préparer : Intégrations et Git documentaire ML4 (2026-11-07)

**Contrat Figma validé en conception :** [registre des nœuds 218–235](integration-git-ux-ml4.md), INDEX `388:425`, page `94:49`, 36 liens de prototype et 27 liens de revue. Réutiliser les composants R3 par responsabilité, sans créer des modules nommés `ML4` ou `Figma-218` dans le code.

**Avant le code :** extraire un snapshot Figma daté (fichier mutable ; aucune capture PNG immuable déposée sur Git à ce gate), vérifier les variantes et s'appuyer sur la convergence UX du shell déjà construit ML1–ML3. **Après le code :** captures et contrôles navigateur 320/390/1280/1680 px, clavier/focus, zoom 200 %, transitions, refus/revocation et source long format. Les liens 227→228 et 229→230 sont illustratifs : leur transposition **ne doit pas** produire un commit ou merge sans HumanDecision D6 et vérification distante.

---


## 8. Transposition candidate du runtime ML1–ML3 — Parcours Pilote–Nora intégré (2026-11-07)

**Autorité :** [A1/A2/A3 validés en périmètre par Morris](../governance/decisions/2026-11-07-convergence-ux-arbitrages.md). La [qualification R5](../construction/convergence-ux-parcours-pilote-nora/qualification.md) fournit `CU-01..16` et le [contrat d'acceptation candidat](../construction/convergence-ux-parcours-pilote-nora/contrat-acceptation.md) fournit `UXC-01..14` ; aucun statut `VALIDATED SPEC` **complet** n'en découle.

| Famille de composants par responsabilité | Surfaces existantes sur `main` | Références Figma R3 |
| --- | --- | --- |
| Shell, navigation, portefeuille et préparation | `web/src/app/layout.tsx`, `portfolio/page.tsx`, `preparations/[preparationId]/page.tsx` | 01, 02, 62–65, 73–81, 13/14 |
| Fil Nora, activité et lecture sécurisée | `projects/[projectId]/page.tsx`, `components/SafeMarkdown.tsx`, service D3 | 03, 109–118, 206–208 et 216/217 |
| Documents, révisions et connaissance | pages sas/projet ; services D4 documents/sujets/versions | 04, 05, 18, 89–100 et 205 |
| Trajectoire, cycle, méthode, CKI et décisions | `components/PilotagePanel.tsx` et services D5/D6 | 22–34, 39–41, 47/48, 52–60 |

**Convergence à qualifier :** A1 demande une lecture authentifiée de préparations reprenables sans mutation ; A2 expose la révision D4 depuis le projet sans système dupliqué ; A3 conserve le rendu sûr existant sans exécuteur d'actions Nora. Les composants visuels n'ont jamais autorité sur les versions, décisions, permissions ou résultats métier.

**Avant construction :** figer par composition les nœuds Figma réellement nécessaires, choisir navigation/routes et états conditionnels, démontrer un parcours complet sans boutons factices, contrôler le rail partagé (240/246 px historique), focus/clavier, liens profonds, zoom 200 %, 320/390/1280/1680 px, erreurs et retours au fil. Définir l'oracle par capacité sans extraire ni reconstruire exhaustivement 242 frames.

**Pendant construction ultérieure :** un seul contrat code/tests/docs, preuves intégrées PG/HTTP/BROWSER/Nora LIVE ciblée, captures runtime comparées à Figma au même SHA, écarts classés et arbitrés. **Figma conçu ≠ comportement prouvé.** Pas de code, d'écriture Figma ni de GO Cursor dans la présente préparation.

---

## 9. Convergence ML1–ML3 — fidélité Figma mesurée et reproductible (2026-11-07)

**Source complémentaire candidate :** [protocole de fidélité Figma → runtime](protocole-fidelite-figma-runtime.md), [relevé L1 partiel de 11 frames](releves-geometriques-convergence-l1.json), [contrat d'acceptation v0.3](../construction/convergence-ux-parcours-pilote-nora/contrat-acceptation.md). Ces références complètent les §§4.1–4.4 et **ne remplacent pas** l'index historique des 223 frames ni les décisions R3 antérieures.

**Obligations préparées pour le futur contrat Cursor :** identifier frame/variante/état et propriétaire D1–D6 ; produire un pack L0/L1/L2 ciblé avant le code, incluant chaîne de parents, dimensions locales/absolues contrôlées, auto-layout, sizing, padding/gap, tokens, styles de texte, composants et interactions ; figer capture de référence et digest ; comparer en navigateur mêmes fixtures, états, viewport, police, navigateur, DPR, styles calculés et rectangles DOM ; refuser tronquature, chevauchement et commande fictive ; consigner et faire approuver toute dérogation.

**Limites actuelles :** 11 frames seulement au niveau L1 ; L2, export Figma immuable et mesure DOM non réalisés. Le rail de l'écran 03 mesure **240 px**, contre **246 px** dans les autres écrans consultés : **KNOWN GAP de fondation**, décision Morris requise avant le shell partagé. Objectif 0 px et seuil ≤2 px pour rectangles stables = **propositions de calibration non validées**, aucun seuil global de diff image accepté. Les frames Git ML4 218–235 sont exclues de l'implémentation de convergence.

**Gate :** contrat complet, arbitrages P1–P3, rail, tolérances et choix L2 à faire valider avant GO Cursor. Publication Git de l'addendum ≠ `VALIDATED SPEC` du seuil ≠ réalisation ≠ preuve navigateur.
