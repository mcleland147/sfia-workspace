# SFIA Studio Next — Protocole complémentaire R3 de fidélité Figma → runtime — convergence UX (candidat)

**Objet :** préparation de la convergence UX « Parcours Pilote–Nora intégré » (capacités construites ML1–ML3).
**Date :** 2026-11-07 (Europe/Paris).
**Statut :** `DOCUMENTED / F1+F2 POLICY VALIDATED SPEC BY MORRIS / G2 DEEP PACK INCOMPLETE / NOT IMPLEMENTED`.
**Baseline code vérifiée :** `mcleland147/sfia-workspace`, `main@d37ea0882ee9256ec206e2f0523a71bf13674e88`.
**Branche de qualification existante :** `docs/next-ux-convergence-qualification-20261107@b692376c984c669af81e583c230a4d393671bf9c` (**non mergée**).
**Figma :** fichier `itgvCulInEnFY6DvgIegvP`, page de référence `94:49`; relevés natifs **en lecture seule**, non gelés en version immuable.
**Sources propriétaires :** `ux-ui/contrat-transposition-figma-code.md` §§1–6 et addenda, `ux-ui/index-geometrie-frames-r3.json` (2026-11-03), `ux-ui/audit-couverture-ux-r3.md`, `construction/convergence-ux-parcours-pilote-nora/{qualification,contrat-acceptation}.md`, décision A1/A2/A3 du 2026-11-07.
**Autorité :** texte technique proposé pour revue Morris. Il n'amende pas à lui seul un contrat normatif R3, ne constitue pas de GO Cursor et n'autorise aucune action Git, Figma ou code.

## 1. Résultat impératif et limites de la fidélité

**Résultat :** une interface en navigateur dont **la structure, les dimensions de référence, les espacements, l'alignement, les typographies, les couleurs, les états et les transitions** correspondent aux valeurs natives des **frames et nœuds Figma retenus**, sans superposition, troncature, débordement, bouton factice, écart de propriété métier ou dégradation responsive.

La cible est une **fidélité mesurable et démontrable**, pas la promesse invérifiable d'une égalité pixel à pixel sur tous les OS, moteurs, polices et contenus dynamiques. Le contrat doit isoler les différences de rasterisation de texte et les données variables ; il **n'autorise jamais** Cursor à réinterpréter la composition parce que « cela ressemble » à une capture. Les écarts justifiés sont **explicitement examinés par Morris**, pas décidés automatiquement par le développeur.

**Hiérarchie :** Git et décision Morris pour les comportements et responsabilités > contrat R2/D1–D6 > R3/Figma validé pour l'UX > manifeste de mesures figé > code/DOM/captures et tests. Une contradiction source/mesure ou deux variantes du même composant est `KNOWN GAP` et impose un arbitrage avant la copie du composant.

## 2. Sources mesurées et lacunes constatées

Le manifeste historique `index-geometrie-frames-r3.json` (`SFIA_NEXT_R3_FRAME_GEOMETRY_ROOTS_v0.3`) décrit les **223 frames connues au 03/11/2026** et leurs seuls **blocs racines visibles**. Il n'établit **pas** la géométrie ni les styles de tous les descendants. La page Figma courante contient aussi des écrans ML4 créés plus tard : on ne doit ni réutiliser le vieux compte 223 comme inventaire courant, ni modifier l'index historique en effaçant sa date.

Lecture native ponctuelle effectuée pour les écrans de convergence :

| Référence R3 | Node ID | Frame | Repères natifs constatés | Niveau de preuve |
| --- | --- | --- | --- | --- |
| 01 Portefeuille | `94:50` | 1680×970 | rail `94:51`: 246×970 ; surface `94:77`: x=246, w=1434 | **L1** : blocs racines |
| 02 Sas | `94:135` | 1680×970 | rail `94:136`: 246×970 ; surface `94:162`: x=246, w=1434 | **L1** |
| 03 Nora conversation | `94:214` | 1680×970 | rail `94:215`: **240×970** ; surface `94:249`: x=240, w=1440 | **L1 + quelques enfants L2 dans R3 §2.1** |
| 64 Portefeuille vide | `158:264` | 1680×970 | rail 246 ; en-tête x=285, y=98, w=1320 ; colonnes x=285, y=254, w=1330, gap=20 | **L1** |
| 74 Préparation retrouvée | `159:145` | 1680×970 | rail 246 ; en-tête x=285, y=98, w=1320 ; colonnes x=285, y=254, w=1330 | **L1** |
| 89 Bibliothèque | `160:175` | 1680×970 | rail 246 ; contenu colonnes x=285, y=254, w=1330 | **L1** |
| 92 Révision concurrente | `160:391` | 1680×970 | rail 246 ; contenu colonnes x=285, y=254, w=1330 | **L1** |
| 24 Cycle/CKI | `127:106` | 1680×970 | rail 246 ; barre y=0, h=65 ; colonnes x=285, y=254, w=1330 | **L1** |
| 40 Journal des décisions | `129:72` | 1680×970 | rail 246 ; onglets `137:92` à x=285, y=201, 220×36 | **L1** |
| 216 Nora mobile | `282:468` | **390×1350 (planche)** | navigation mobile 390×73 ; contenu x=0, y=73, w=390, padding=16, gap=15 | **L1 ; viewport réel non prouvé** |

Ces valeurs sont **constatées**, pas les valeurs d'un manifeste « complet ». La différence **240/246 px sur le rail** est une divergence réelle de fondation entre variantes. **Ne pas choisir l'une des valeurs en silence.** La revue du shell commun doit trancher sa valeur et identifier les variantes légitimement différentes. Attention : les coordonnées `x/y` Figma sont **locales au parent**, sauf si un champ d'absolu est explicitement calculé.

## 3. Périmètre d'extraction : profond, ciblé, traçable

Pour éviter une nouvelle tâche « repérage à l'œil » en cours de code, constituer **avant la première implémentation visuelle du parcours concerné** un **Design Implementation Pack** versionné, pour la sélection exacte de frames R3 correspondant aux `CU-01..16` / `UXC-01..14`.

**Trois niveaux à distinguer :**

- **L0 — Inventaire** : fichier Figma, page, frame, nom, état, route et comportement couvert ; index racine réutilisé sans confusion de version.
- **L1 — Composition** : chaîne des parents, sections, grilles, panneaux et conteneurs, géométrie locale et absolue calculée, modes de layout, alignements, padding/gap, contraintes, croissance et clipping.
- **L2 — Éléments implémentables** : titres, textes, champs, boutons, listes, cartes, icônes et états ; typographies précises, espacements, bordures, couleurs/tokens, variantes, interactions, scroll/overflow. Tous les nœuds nécessaires aux composants réellement développés, pas tous les descendants invisibles du fichier Figma.

La **screenshot Figma** complète l'extraction comme oracle visuel L3, sans remplacer L1/L2. Les données ne doivent pas être « complétées » en devinant leur valeur depuis une image. Une donnée absente doit être `À_EXTRAIRE` / `UNRESOLVED` et bloquer la transcription du composant critique correspondant.

### 3.1. Identité et horodatage immuables

Chaque pack doit déclarer : `figmaFileKey`, `figmaPageId`, `frameId`, `sourceCapturedAt`, `figmaVersionOrSnapshotRef` s'il est exposé, `exportImageSha256`, `manifestSha256`, `targetGitSha`, `route`, `viewport`, `uiState`, `fixtureId`, `ownerDomain`, `CU`, `UXC`, `status`. **Une date et un lien vers un fichier Figma mutable ne sont pas une version figée.** Si la version native n'est pas obtenable, l'export de référence et son digest deviennent la preuve figée, avec la réserve correspondante.

Ne pas stocker d'identifiants utilisateurs réels, de secrets ou de captures de données personnelles dans le dépôt. Utiliser des fixtures non sensibles dont le contenu est identique entre la référence retenue et l'application.

### 3.2. Champs minimaux par nœud

```json
{
  "figmaNodeId": "159:181",
  "name": "Contenu / colonnes",
  "parentId": "159:145",
  "nodeType": "FRAME",
  "geometry": {
    "local": { "x": 285, "y": 254, "width": 1330, "height": 585 },
    "absolute": "À_EXTRAIRE",
    "units": "px"
  },
  "layout": {
    "mode": "HORIZONTAL",
    "gap": 20,
    "padding": [0, 0, 0, 0],
    "sizing": "À_EXTRAIRE",
    "constraints": "À_EXTRAIRE",
    "alignment": "À_EXTRAIRE",
    "clipContent": "À_EXTRAIRE"
  },
  "style": {
    "fill": "À_EXTRAIRE",
    "stroke": "À_EXTRAIRE",
    "cornerRadius": "À_EXTRAIRE",
    "boundVariables": "À_EXTRAIRE"
  },
  "component": "À_EXTRAIRE",
  "interaction": "À_EXTRAIRE",
  "status": "PARTIAL_L1_OBSERVED"
}
```

Le JSON ci-dessus est un **exemple de schéma et de valeurs L1 réellement lues**, **pas** un export complet natif L2. Les propriétés texte doivent ajouter segments de style mixte, `fontFamily`, `fontStyle`, `fontSize`, `lineHeight`, `letterSpacing`, alignements, largeur/retour à la ligne ; ne pas réduire une police mixte à une valeur unique. Les propriétés d'instance doivent inclure composant maître et variante si accessibles.

### 3.3. Sélection de frames pour ce chantier

| Famille | Frames maîtres à mesurer en profondeur | États/variantes à recouper avant code | Pourquoi |
| --- | --- | --- | --- |
| Shell et portefeuille A1 | 01 `94:50`, 64 `158:264`, 65 `158:336` | 62/63, 66, 73, 74 `159:145` | Composition, connexion, liste/reprise, état vide/accès |
| Sas et continuité D2 | 02 `94:135`, 13 `96:262`, 14 `96:370` | 78, 81, 74 | Retour au même contexte et mutation distincte |
| Nora A3 | 03 `94:214`, 109 `161:216`, 110 `161:288` | 111, 206/207/208, 216/217 | Conversation longue, composer, activité réelle et mobile |
| Documents A2 | 89 `160:175`, 18 `97:359`, 04 `94:370` | 92 `160:391`, 93, 95, 205 | Bibliothèque, inspection, révision protégée, conflit |
| Pilotage D5/D6 | 22 `125:33`, 24 `127:106`, 40 `129:72` | 28, 32, 33, 41 | Vue normale, cycle, méthode, décision, restriction |

**Règle de coût :** cette liste est une **sélection candidate**, pas un ordre de coder chaque frame comme une page différente. Un composant partagé se mesure sur sa frame maître puis on mesure **les seules différences** de ses variantes. Éviter l'extraction exhaustive des centaines de frames et les abstractions sans usage réel.

## 4. Correspondance Figma → CSS/React (sans liberté d'interprétation)

1. **Registre des composants productifs** : pour chaque responsabilité (rail, contexte, fil, composer, bibliothèque, inspecteur, journal, trajectoire, décision), un seul composant stable et ses variantes nécessaires. Les classes, props et noms d'API reprennent la responsabilité produit, **jamais** les numéros `01`, `74`, `ML3`, `Figma-...`.
2. **Auto-layout Figma** : transposer au conteneur réel via Flexbox/Grid lorsque pertinent ; encoder direction, justify/align, gap, padding, taille des colonnes, `min-width: 0`, dimensionnement et comportement de croissance. **Ne pas** transformer les coordonnées x/y relatives de chaque enfant en `position:absolute` pour contourner un layout mal compris.
3. **Grilles et règles de dimensionnement** : documenter les proportions/tailles fixées et le comportement quand l'espace diminue. Une dimension fixe Figma à 1680 px n'est pas une largeur CSS globale : indiquer `min`, `max`, `flex`, `overflow`, wrap et transition de grille. Pas de CSS `nth-child` ni `margin-left` ad hoc pour masquer une erreur de structure.
4. **Tokens** : relever et consolider les fondations réellement utilisées (fonds, bordures, radius, typography, espacements, rail). Pour deux mesures contradictoires du même composant partagé, ouvrir un **écart de fondation** attribué à Morris avant l'implémentation de ce composant ; ne pas créer des tokens concurrents.
5. **Texte et données** : considérer la densité réelle, les tableaux et textes longs comme conditions de layout ; conserver des débits de lecture, hauteurs intrinsèques et scrolls cohérents. Jamais `overflow:hidden`, masquage ni troncature pour faire réussir la capture si Figma exige la lecture. Les tronquages explicitement prévus doivent avoir un accès au contenu complet.
6. **Responsive** : traiter 1680 et 1280 comme repères desktop, 390 et 320 comme conditions mobile réelles. Le **390×1350 Figma est une planche**, pas une hauteur de viewport. Tester en navigateur aux hauteurs réalistes `390×844` et `320×568` avec scrolling, puis à **zoom 200 %**. Ne jamais masquer le rail sans fournir un menu de navigation fonctionnel et accessible.
7. **Interactions** : chaque contrôle visible identifie sa destination, son état et son contrat d'autorité, y compris disabled/loading/403/409/UNKNOWN ; le prototype Figma ne vaut pas exécution et les contenus Nora ne créent pas de commandes mutantes.
8. **Provenance et gouvernance** : l'interface visualise D1–D6 et les résultats de services existants ; A1 doit montrer une vraie préparation existante, A2 doit appeler la révision protégée `reviseDocument` (ou son API actuelle vérifiée), A3 ne crée pas d'exécuteur. D7–D9/Git et ML5 Cursor sont hors du lot.

## 5. Matrice de contrôles de fidélité, reproductibles en CI/RECETTE

Définir un **jeu de fixtures par état UX** : utilisateur, projet, préparation, document et versions, cycle, méthode, décision, conversation courte et longue, accès refusé/conflit/issue incertaine. Aucune donnée affichée ne doit être une valeur maquillée pour la comparaison d'image ; seuls des champs intrinsèquement variables et **non contractuels** (horloge/ID aléatoire) peuvent être neutralisés avec justification et couverture fonctionnelle indépendante.

Conditions de reproduction : navigateur et version gelés, OS/environnement identifiés, police Inter effectivement chargée, DPR connu (`deviceScaleFactor` contrôlé), viewport fixe, zoom connu, locale FR, animations et transitions désactivées **pour la seule capture de contrôle**, réseau/DB stables, mêmes fixtures et thème. Les captures runtime sont nommées avec `SHA`, `frameId`, `state`, `viewport`, `browser`.

| Couche | Mesure automatisée | Tolérance proposée **à valider** | Rejet obligatoire |
| --- | --- | --- | --- |
| Structure | composant présent, parent correct, destination effective, état métier | **0 divergence** | bloc manquant, contrôle factice, mauvaise autorité |
| Géométrie stable | DOM `getBoundingClientRect()` vs absolus calculés depuis Figma ; x/y/w/h, alignements et gaps aux viewports de référence | cible **0 px** ; **≤2 px max proposé** pour cadres stables, à calibrer sur première référence | chevauchement, cadre déplacé/tronqué, > tolérance sans exception Morris |
| Typographie/tokens | styles calculés : police, poids, taille, interligne, couleur, bordure, radius | valeurs contractuelles exactes à la précision de la plateforme ; rasterisation glyphes appréciée séparément | autre font, taille/poids/token divergent, retour à la ligne non justifié |
| Contenu et overflow | `scrollWidth/clientWidth`, `scrollHeight/clientHeight`, visibilité, intersections, scroll et focus | **0 chevauchement non voulu, 0 perte d'action ou contenu contractuel** | contenu amputé, bouton inaccessible, scroll horizontal de page non prévu |
| Image au même état | screenshot de référence figée + screenshot DOM + diff localisé par région | seuil de diff **non validé** ; calibrer avec Morris après première paire contrôlée, sans rehausse automatique | anomalie visible structurelle ou masquage d'un défaut, même sous seuil global |
| Responsive et accessibilité | 1680×970, 1280×970, 390×844, 320×568, zoom 200 %, clavier et lecteur d'états | absence de perte de fonctionnalité, reflow utilisable | rail masqué sans équivalent, focus piégé, action inaccessible |
| Fonctionnel | scénarios `UXC-01..14` et négatifs, API/DB/BROWSER ; LIVE Nora uniquement si conduite cognitive affectée | conformité exacte à la source métier | snapshot visuel utilisé comme preuve d'effet, doublon, fuite inter-projet |

**Important :** le `≤2 px` est une **proposition déjà présente** dans le contrat R3 §4.3, **non validée par Morris** et non une garantie générale. Les seuils image par pixel, antialias, indices de similarité et éventuels masques ne peuvent pas être fixés honnêtement sans un essai de référence sous environnement gelé. Un score image vert n'absout **jamais** une violation des rectangles critiques ou une troncature.

### 5.1. Protocole de correction en un cycle cohérent

1. **Avant code** : pack L0/L1/L2 et captures figés pour les écrans abordés, grille de composants, écarts R3, cas test et identités des fixtures. Pas de démarrage UX sans mesure critique exploitable.
2. **Pendant code** : construire **par composant/état représentatif** ; après intégration d'une surface complète, mesurer sa grille DOM et capturer la page au même viewport. Ne pas laisser dix écrans divergents se multiplier avant le premier contrôle.
3. **Diff** : tableau automatique `sourceFigma.nodeId / componentKey / expectedRect / actualRect / delta / measuredStyle / test / screenshot`. La correction est appliquée **à la cause commune** (token, structure, composant), non une accumulation de marges locales.
4. **Variantes** : rejouer les cas chargement, vide, contenu long, conflit, échec, mobile/zoom et navigation pour détecter les régressions ; une retouche du rail ne doit pas déplacer tous les autres écrans.
5. **Gate de sortie** : paquet unique code/tests/docs/snapshots SHA corrélés et écarts ouverts classifiés. Les seuils contractuels sont verrouillés avant correction, pas relâchés pour rendre la CI verte.

### 5.2. Intégration aux scénarios existants, sans second processus QA

- `CU-01..04` / `UXC-01..03` : portefeuille, sas, préparation retrouvée, identité et création.
- `CU-05..09` / `UXC-04..07,11,13` : Nora, documents D4, journal, navigation et retours.
- `CU-10..13` / `UXC-08..10,13` : trajectoire, CKI, décisions/restrictions.
- `CU-14..16` / `UXC-11..14` : reprise, isolation, responsive, interdiction des effets non implémentés.

**Pas de matrice normative parallèle.** Ajouter à chaque ligne UXC les preuves `FigmaFrame/State`, `GeometryManifestHash`, `DOMMetrics`, `VisualDiff`, `BrowserTrace`, `GitSHA`, `Verdict`, et lier une éventuelle exception Morris. Une ligne UXC ne passe `PASS` que si la géométrie applicable, la fonctionnalité et les états critiques sont prouvés.

## 6. Gates, propriétaires, risques et critères STOP

| Gate | Livrable minimal | Responsable / statut |
| --- | --- | --- |
| **G1 — Contrat** | P1, P2, P3 et portée de convergence UX, matrice `UXC-01..14`, arbitrages du rail et des exceptions | Morris ; **à valider**, distinct d'A1–A3 déjà validés |
| **G2 — Pack visuel** | liste minimale de frames, extraction native L2 pour composants à construire, capture et manifestes hashés, tokens/variantes, objectifs géométriques et règles responsive | ChatGPT prépare/revoit, Cursor peut extraire techniquement **uniquement sous GO autorisé** ; **NON CONSTITUÉ** |
| **G3 — Construction** | code + tests + docs du même lot sous SFIA v2.6, précheck Git et STOP | Cursor, sur GO D3 Morris distinct |
| **G4 — Vérification** | captures/mesures DOM et visuelles/risques applicables au même SHA en DEV/RECETTE, comparaison et contrôles fonctionnels | Cursor produit ; ChatGPT revoit ; aucun PASS anticipé |
| **G5 — Acceptation** | écarts explicités, réserves et résultat utilisateur démontré, décision Morris | gate distinct ; ne confère aucune adoption automatique |

**STOP** si Figma/contrat fonctionnel diverge, si un nœud critique est incomplet, si une tolérance doit être inventée ou relâchée, si l'exécution nécessite de nouvelles autorités ou schémas non bornés, si un « correctif visuel » masque un défaut fonctionnel, si un effet Git/Cursor est fictivement actionnable, ou si la CI est verte mais le navigateur diverge visiblement.

**Dette/exit :** les écarts R3 existants (rail 240/246, manifeste racine seulement, source Figma mutable) sont des *KNOWN GAP*, avec sortie attendue au G1/G2. Ils ne se transforment pas en dette invisible « à corriger plus tard ». Une réserve non bloquante doit porter un propriétaire, un scénario d'impact, un exit précis et le gate concerné.

## 7. Intégration documentaire et gates restant à franchir

1. **R3 — `ux-ui/contrat-transposition-figma-code.md`** : ce protocole est référencé en complément des §§4.1–4.4 ; les mesures historiques sont préservées et le différend de rail reste ouvert à arbitrage.
2. **R3 — `ux-ui/audit-couverture-ux-r3.md`** : les frames de convergence et les liens `CU-01..16` sont rappelés dans l'addendum de traçabilité, sans renumérotation.
3. **R5 — `construction/convergence-ux-parcours-pilote-nora/contrat-acceptation.md`** : la v0.3 renforce `UXC-13` et conserve les gates G1–G5. **La publication documentaire ne valide pas à elle seule les seuils ni un contrat d'exécution.**
4. **R5 — `construction/reference-delivery-r5.md` et Roadmap** : renvoient désormais au protocole et maintiennent la preuve navigateur au SHA exact comme condition de sortie.
5. Ne pas produire un autre template Cursor ou une doctrine parallèle ; l'instanciation SFIA v2.6, le prompt et la construction ne sont pas déclenchés par cet addendum.

**Verdict documentaire :** `FIGMA-TO-RUNTIME CONVERGENCE CONTRACT ENRICHED — D0 CANDIDATE / DEEP DESIGN PACK NOT EXTRACTED / NO BUILD GO`.

**Pièce L1 jointe à cette révision :** [Relevés géométriques natifs partiels](releves-geometriques-convergence-l1.json) — 11 frames, extraction racine seulement, sans version Figma immuable ; **L2 et comparaisons DOM non réalisées**.

---

## 8. Application du gate G1 validé — fidélité mesurée (2026-11-07)
**Décision Morris :** [P1–P3/F1/F2](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md). Le présent protocole est **validé pour les principes et les seuils géométriques F2**, pas pour un seuil d'image global non mesuré.
- **F1** : variantes d'un **unique composant** de rail : `personnel` 246 px, `projet` 246 px, `conversation` 240 px ; chacun conserve ses propres enfants, styles, paddings et spacings natifs. La différence est **intentionnelle au contrat actuel** et ne doit pas être « corrigée » sans nouvelle décision.
- **F2** : objectif 0 CSS px, borne ≤2 CSS px sur `x/y/w/h` des **rectangles stables** référencés à environnement Figma/DOM comparable ; toute dérogation est datée, motivée et approuvée par Morris. Styles calculés et contenus doivent être conformes, sans collision ou troncature anormale.
- **Contrôle image** : aucun seuil de pourcentage global approuvé ; calibration locale par région sur fixtures/exports figés avant la recette, en isolant les variations d'anticrénelage de police.
- **DIP source** : [11 frames L1](releves-geometriques-convergence-l1.json) et [8 frames/55 nœuds L2 partiels](releves-geometriques-convergence-l2-partiel.json) ; **ne pas coder avec les descendants manquants**. Les données du pack L2 restent observées, non prouvées au navigateur et sans export immuable.
- **G1 VALIDATED SPEC / G2 PARTIAL / G3 NOT PREPARED / G4 BUILD NOT AUTHORIZED / G5 NOT RUN**. Les lignes historiques des §5–7 marquées « candidat » sont antérieures à ce record daté.

## 9. F1 Inspection 244 px — quatrième variante approuvée (2026-11-07)

La [décision Morris F1 amendée](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md) établit **quatre variantes**, dans un composant de navigation partagé : `personnel:246`, `projet:246`, `conversation:240`, **`inspection:244` CSS px**. Les mentions de « trois variantes » en §8 étaient le dernier snapshot historique et ne limitent plus la décision courante.

**Origine mesurée :** frames 04 (`94:370`/nav `94:372`), 18 (`97:359`/nav `97:361`), 19 (`100:39`/nav `100:41`) : nav `244×970`, `layoutMode=VERTICAL`, `itemSpacing=11`, padding `23/19/22/19`, x=0. La frame 19 n'autorise aucun effet D8 dans la convergence UX. **Les calques descendants restent à extraire selon les champs §3.2 avant codage de cette variante**.

**Gate de transposition :** associer chaque composant, état et route à la variante F1 observée ; mesurer le rect DOM à 1680 px puis les règles de reflow aux tailles 1280/390/320, sans prétendre à un design mobile Figma de 320px. F2 ne permet ni troncature ni chevauchement. **G2 toujours PARTIAL et seuil de diff image NON CALIBRÉ**. [Observations L2 partielles](releves-geometriques-convergence-l2-partiel.json) ; [G2/G3 candidat](../construction/convergence-ux-parcours-pilote-nora/preparation-technique-g2-g3.md).

---

## 10. Préflight source Figma et contrat de réalisation candidat (2026-11-07)

**Raccord documentaire au 2026-11-07 :** le protocole présent reste la référence R3 de transposition ; le [préflight G2 à source native et export PNG hashé](../construction/convergence-ux-parcours-pilote-nora/protocole-preflight-source-figma.md) détaille les données/états attendus. Le [contrat de construction G3 v1 candidat](../construction/convergence-ux-parcours-pilote-nora/contrat-technique-convergence-ux.md) reprend les quatre variantes F1 et F2. **Décision de principe Morris acquise ; G2 source non prêt**, G3 à finaliser ; la capture Figma seule n'est pas une preuve navigateur. L'obtention de la première paire Figma/runtime et la calibration image relèvent de la recette G5 après rendu, jamais d'un faux gate avant code.
