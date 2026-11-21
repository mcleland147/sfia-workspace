# SFIA Studio Next — Méthodologie · Contrat Figma ↔ Cursor

**Version :** 1.0 — 21 novembre 2026  
**Nature :** guide opérationnel transversal de préparation Figma, extraction MCP, implémentation et preuve de fidélité.  
**Périmètre :** SFIA Studio Next exclusivement, conception UX et delivery UI R3–R6.  
**Statut :** GUIDE DOCUMENTAIRE — publication/intégration autorisées par Morris le 21/11/2026. N'ajoute pas de doctrine SFIA externe, de nouveau template Cursor ou de tolérance dérogatoire.  
**Autorité :** Morris valide la cible UX et les exceptions ; Cursor réalise les opérations techniques sous contrat SFIA v2.6 ; ChatGPT prépare et revoit.  
**Résultat attendu :** une maquette validée devient une **spécification exploitable et contrôlable**, pas une image dont Cursor interprète librement l'apparence.

> **Principe : une interface ne peut être déclarée fidèle à Figma que si sa structure, ses éléments, ses états, ses mesures et son rendu ont été confrontés à la source réellement extraite.** L'accès au MCP ou une capture visuellement ressemblante ne constituent pas cette preuve à eux seuls.

## 1. Positionnement et sources d'autorité

Ce guide **assemble la pratique** de références déjà présentes ; il ne les remplace pas :

1. [SEF v0.2](../governance/SEF.md) — macro-lots, responsabilités, preuves et gates.
2. [Décision Morris F1/F2](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md) — quatre variantes contextuelles du rail et fidélité géométrique mesurée.
3. [Contrat R3 de transposition](contrat-transposition-figma-code.md) — comportement, composants et propriétés natives.
4. [Protocole R3 de fidélité](protocole-fidelite-figma-runtime.md) — acquisition L0/L1/L2, mesure DOM, comparaisons et seuils.
5. [Préflight G2/G3](../construction/convergence-ux-parcours-pilote-nora/protocole-preflight-source-figma.md) — source figée, manifeste, couverture, distinctions avant/après code.
6. [Template SFIA v2.6, §6.6](../../../prompts/templates/sfia-cycle-execution-template.md) — **seule** base pour instancier un contrat Cursor UX/Figma.
7. [PV de recette Ensemble 07](https://github.com/mcleland147/sfia-workspace/blob/7c96bbed7b046b083f9b48b782ae9dcd730358d6/projects/sfia-studio-next/validation-qualite/ensemble-07-recette-utilisateur-20261121.md) et [diagnostic Figma Ensemble 07](https://github.com/mcleland147/sfia-workspace/blob/78824f1073a09210183ea70377459d2ce183899c/sfia-review-handoff/latest-chatgpt-review.md) — retour d'expérience, **pas** une preuve de fidélité des écrans.

**Ordre de vérité :** Git/décisions et exigences fonctionnelles applicables → référence UX/Figma validée pour sa portée → pack de propriétés natives vérifiables → code/DOM/preuves. Les nœuds Figma sont mutables : un lien n'est pas un snapshot.

**F1 déjà décidé :** un seul composant de navigation avec variantes **personnel 246 px, projet 246 px, conversation 240 px, inspection 244 px**. Ne pas transformer ces mesures différentes en une unique largeur forcée. **F2 déjà décidé :** objectif **0 CSS px**, borne **≤ 2 CSS px** pour x/y/w/h des **rectangles stables contractés** dans les mêmes conditions ; aucune tolérance universelle de diff pixel-image n'est validée.

## 2. Deux contrats successifs, un seul parcours de construction

| Moment | Responsable | Résultat obligatoire | État si incomplet |
| --- | --- | --- | --- |
| **A — Conception Figma** | Concepteur / Morris pour validation | Frames, composants, icônes, styles, contraintes, états et interactions identifiables | DESIGN SOURCE INCOMPLETE |
| **B — Extraction avant code (G2)** | Cursor via Figma MCP autorisé | Pack L0/L1/L2 + vrai export de référence + provenance + couverture des nœuds critiques | FIGMA CONTRACT INCOMPLETE |
| **C — Transposition (G3/G4)** | Cursor sous GO technique | Mapping nœud → responsabilité produit → composant React/CSS + implémentation réutilisable | IMPLEMENTATION NOT READY |
| **D — Vérification runtime (G5)** | Cursor, puis revue ChatGPT/Morris | Mesures DOM, styles, captures comparables, états/UX et preuves fonctionnelles | VISUAL / BEHAVIOR NOT PROVEN |

**Aucune étape de livraison séparée n'est imposée :** extraction, code, tests, capture et synchronisation documentaire peuvent appartenir au même macro-lot autorisé. En revanche, **B précède l'écriture du composant concerné**, et **D suit son rendu** ; il est impossible de calibrer un diff image Figma/runtime sans un premier runtime.

## 3. Construire la maquette Figma comme une spécification technique

### 3.1. Frame et état, sans ambiguïté

Pour chaque surface à reproduire :

- Nommer la **fonction produit** et l'**état visible** : exemple « Trajectoire — proposition initiale », « Trajectoire — orientation retenue, aucun cycle actif ».
- Associer **page, frame/node-id, route/surface, viewport de référence et état métier**. Les numéros 09.06/09.11 restent des repères de conception, pas des noms de composants de code.
- Distinguer explicitement frame de référence, maquette exploratoire, index de revue, variante, overlay, état caché et contenu illustratif.
- **Une variante visible et inspectable par état** est recommandée. Si plusieurs sous-frames hidden sont empilées dans une même frame, indiquer **laquelle** est contractuelle ; un nœud caché ne devient pas visible par interprétation de Cursor.
- Identifier les éléments superposés voulus (overlay, menu, modal, badge) et leur ordre de calques. Les overlays de navigation ne sont pas automatiquement des enfants d'un composant Auto Layout.
- Décrire la transition entre états et les actions associées, sans considérer le prototype comme preuve que l'application sait exécuter l'effet.

### 3.2. Structure et dimensionnement

Construire autant que possible une hiérarchie lisible :

**Frame écran → shell → zone contenu → section → composant → élément.**

Sur chaque conteneur pertinent, renseigner ou rendre extractibles :

- direction **horizontal / vertical / grille** ; ordre des enfants et alignements ;
- **padding top/right/bottom/left**, gap, distribution/alignement ;
- **FIXED / HUG / FILL** ou contraintes et redimensionnement équivalents ;
- largeur/hauteur, min/max si applicable, croissance du texte et overflow/scroll ;
- clipping, bordures, rayons, ombres et superpositions intentionnelles ;
- coordonnées **locales au parent** et chaîne parent/enfant.

**Auto Layout est recommandé pour les structures de flux** ; la position absolue reste adaptée aux superpositions voulues. L'export MCP peut cependant exprimer des positions absolues même pour une structure exploitable : son format ne prouve pas à lui seul l'absence d'Auto Layout dans le fichier. Le manque d'une propriété critique se vérifie dans le nœud natif, il ne se déduit pas de l'image.

Une frame desktop de 1680×970 fixe **un point de référence de fidélité** : elle n'impose pas des coordonnées absolues à toutes les tailles d'écran.

### 3.3. Composants, variants et conventions

- Un **composant partagé par responsabilité** (rail, bouton, carte, en-tête, champ, panneau) ; décliner ses états via variants/props quand nécessaire.
- Référencer le composant maître, l'instance, les propriétés de variante et les overrides voulus. Ne pas confondre variantes contextuelles légitimes et duplications accidentelles.
- Employer des noms durables par responsabilité produit, conformément à la [convention de nommage](../governance/product-naming-conventions.md), et non des identifiants de chantier.
- Définir styles/tokens pour fonds, bordures, typographie, espacements et états ; **conserver l'identité du token ou de la variable liée** lorsqu'elle existe. Un hexadécimal extrait d'une frame n'est pas automatiquement un token global.
- En cas de valeur divergente sur un même composant supposé partagé, vérifier les variantes puis **signaler l'écart** ; ne pas normaliser silencieusement.

### 3.4. Icônes, pictogrammes, images et assets — point critique

**Une icône n'est pas seulement un emplacement de 16×16 px. Sa forme est contractuelle.**

Pour **chaque icône visible**, définir/exposer :

| Champ | Ce que Cursor doit retrouver |
| --- | --- |
| Identité | Nom fonctionnel, node-id, parent, rôle (action, statut, décoration) |
| Provenance | Instance de bibliothèque + composant maître/variante, **ou** vecteur/source exportable |
| Dessin | SVG/paths ou référence exacte d'une bibliothèque/version connue ; pas de remplacement « similaire » |
| Géométrie | Boîte, viewBox si SVG, taille rendue, alignement, éventuelle rotation |
| Style | Fill/stroke, épaisseur, couleurs/tokens, opacité, rayon/caps/joins si pertinents |
| États | Default, hover, active, focus, disabled, sélectionné, erreur, avec différences réelles |
| Accessibilité | Nom accessible si fonctionnel ; masqué aux lecteurs d'écran si pure décoration |

**Règle d'exécution :** si la source Figma est une icône spécifique, Cursor réemploie **l'asset exact** ou l'instance de bibliothèque strictement équivalente et identifiée. Ne pas choisir une autre icône Lucide/Heroicons/emoji simplement parce qu'elle évoque la même action. Une substitution exige une justification et, si elle modifie la cible validée, un arbitrage Morris.

Même logique pour logos, illustrations, avatars, photos, séparateurs dessinés et motifs. Préciser format, dimensions, cadrage, ratio, mode cover/contain, variations et droit d'utilisation. Les fontes/ressources sous licence ne sont jamais ajoutées au dépôt sans vérification des droits.

### 3.5. Texte, états, interactions et responsive

- Indiquer **font family, poids exact, taille, line-height, letter-spacing, alignement**, segments mixtes, largeur, retour à la ligne et troncature volontaire. Une font « proche » change la géométrie : elle n'est pas conforme.
- Décrire les états réellement nécessaires : nominal, vide, loading, disabled, erreur, conflit, accès refusé, UNKNOWN, hover/focus, mobile. Si un état n'est pas maquetté, l'inscrire comme **SOURCE MANQUANTE** ou spécification fonctionnelle à appliquer, pas comme libre invention.
- Pour chaque contrôle visible : type, libellé, action/route, provenance du résultat, autorité et comportement si indisponible. Ne pas créer de bouton qui semble opérationnel sans capacité métier.
- Documenter explicitement les règles de reflow : colonnes, wrapping, disparition/réapparition de navigation, scrolleurs, texte long, zoom 200 %. Une planche Figma mobile **390×1350** ne définit pas un viewport navigateur de hauteur 1350.
- Contraster état/texte/icône au-delà de la couleur ; clavier, focus visible, ordre de lecture et alternative accessible.

## 4. Contrat d'extraction Cursor — obligatoire avant toute transposition

L'entrée n'est pas « voici un screenshot », mais **une référence Figma validée et des nœuds précis**.

### 4.1. Acquisition MCP et niveaux de profondeur

**L0 — Inventaire :** fileKey, page, frame, version/snapshot connu, route, état, viewport, liste des composantes visibles et de leurs rôles.

**L1 — Composition :** appeler les opérations Figma MCP disponibles, notamment **get_metadata** et **get_design_context** lorsque présentes, pour retrouver structure, noms/IDs, chaînes de parents, bounds, layout, overlays, instances et captures.

**L2 — Profondeur implémentable :** inspecter les descendants de **tous les composants concernés**, et récupérer padding/gap, sizing, typo, couleurs, strokes, icônes/paths/assets, états et propriétés de variantes. Une extraction qui ne fournit que les cinq rectangles racines est **insuffisante** pour coder les cartes et icônes internes.

**Oracle image :** exporter la **vraie capture Figma de la frame/variante** à l'échelle de référence et la conserver avec son empreinte SHA-256, pas seulement son URL temporaire. L'export et l'empreinte ne remplacent pas L1/L2.

Les capacités exactes du MCP sont constatées dans l'environnement Cursor ; si une propriété native (variables, Auto Layout, SVG, source asset) n'est pas exposée, utiliser une autre lecture Figma permise et **documenter le manque**. Ne jamais inventer une valeur pour compléter une extraction.

**Important :** le React/Tailwind illustratif éventuellement renvoyé par get_design_context n'est **pas du code produit à coller mécaniquement**. Il sert à comprendre le design ; le code Studio conserve ses composants, ses contrats métier et son architecture.

### 4.2. Manifeste d'implémentation et provenance

Pour chaque frame/état traité, constituer un pack portant :

- Figma fileKey, pageId/frameId, node-ids critiques, date d'extraction et version/snapshot si accessible ;
- dimensions de conception, viewport de contrôle, état et fixture de données ;
- vrai PNG source + SHA-256 et inventaire des assets ;
- géométrie et styles natifs des nœuds L2 concernés ;
- mapping vers composants produit et tests ;
- empreinte du manifeste dans un sidecar (ne pas hacher un fichier contenant son propre hash) ;
- SHA Git et build de l'implémentation quand ils existent ;
- écarts/absences, propriétaire de décision et condition de sortie.

Utiliser la matrice par élément ci-dessous, ou une représentation structurée équivalente ; **les champs sont des catégories de mesure, pas un nouveau schéma runtime**.

| Champ de preuve | Exemple de contenu attendu |
| --- | --- |
| Figma | frameId / nodeId / parentChain / visible=true / variant=selected |
| Responsabilité | « carte d'activité Projet », « icône retour », « CTA examiner » |
| Propriétés L2 | rect local + rect absolu résolu / padding / gap / typography / asset exact |
| Implémentation | composant React / fichier CSS ou token / état ou prop |
| DOM | sélecteur ou identifiant de test stable / rect mesuré / computedStyle |
| Oracle | fichier Figma PNG + hash / fichier runtime PNG + SHA/build |
| Résultat | delta x/y/w/h, conformité des icônes, structure, texte, statut et réserve |

Pour la géométrie, **ne jamais comparer x/y locaux Figma avec x/y viewport DOM**. Résoudre la chaîne de parents, transformations/scroll et coordonnées effectives avant le calcul du delta.

### 4.3. Gate avant code

Chaque composant critique à réaliser doit avoir :

- une source **validée** et un état visible identifié ;
- L1 et **L2 suffisants** ;
- ses icônes/assets identifiés ou le manque marqué ;
- ses contraintes et comportements connus ;
- un oracle PNG source archivé et identifiable ;
- un mapping et des assertions prévus.

**Source critique UNRESOLVED → STOP pour ce composant**, sans interprétation graphique. Le reste du macro-lot peut avancer si l'indépendance des composants est établie et si les interfaces sont maîtrisées.

Verdicts source : **COMPLETE_FOR_COMPONENT / PARTIAL / UNRESOLVED / OUT_OF_SCOPE**. Ne pas prétendre que toute la bibliothèque Figma est complète parce que la frame de référence s'affiche.

## 5. Méthode de transposition vers l'application

1. **Lire le produit existant :** identifier shell, composants réutilisables, tokens, états métier et contrats D1–D6 concernés. Ne pas reproduire des mécanismes fictifs issus d'un prototype.
2. **Fixer le mapping** : chaque nœud/élément Figma visible → élément React/DOM ; chaque différence de variante → prop/style/état documenté.
3. **Implémenter la structure d'abord :** hiérarchie, ordre, contraintes, Grid/Flex alignés sur la source. Utiliser absolute seulement pour overlays intentionnels, pas pour corriger artificiellement tous les gaps.
4. **Implémenter les détails exacts :** typographie, icônes d'origine, SVG/assets, rayons, bordures, couleurs et espacements. Des utilitaires CSS génériques sont permis **seulement si leur valeur calculée** est conforme au contrat.
5. **Comparer un premier rendu tôt :** mesurer et capturer le composant représentatif avant de multiplier les variantes. Corriger la **cause commune** (composant/token/layout), pas une série de marges spécifiques par écran.
6. **Ajouter les variantes et états** : nominal/erreur/chargement/absence/conflit/disabled et reflow applicable, puis tests accessibles au clavier.
7. **Synchroniser code, tests, preuves et as-built dans le même lot**. Pas de micro-cycle documentaire après coup.

Les tailles fixes extraites de Figma sont les cibles au viewport d'origine. Une implémentation responsive est souhaitable, mais **elle ne doit pas déjà déformer la cible au viewport contractuel**.

## 6. Contrôle de conformité — zéro confusion entre ressemblance et preuve

### 6.1. Conditions de comparaison

Même frame et **même état métier**, même jeu de données synthétiques, textes, thème, police chargée, locale FR, viewport, zoom, DPR, version navigateur et conditions de rendu connues. Stabiliser l'animation uniquement pour la capture ; ne pas masquer de contrôle ni tronquer de contenu pour faire passer l'image.

Capturer les deux oracles : **PNG Figma natif** et **screenshot navigateur réellement servi**. Conserver les preuves, leur source et le SHA/build. Une simple capture issue d'un autre projet ou une vieille version n'est pas comparable.

### 6.2. Matrice de vérification

| Axe | Test de conformité | Gate |
| --- | --- | --- |
| **Structure** | 100 % des éléments contractuels visibles présents ; parent/ordre/état corrects ; pas d'élément inventé | **Zéro divergence non acceptée** |
| **Icônes/assets** | Source/identité et variante exactes ; géométrie et état conformes | **Pas de substitution par ressemblance** |
| **Géométrie** | DOM getBoundingClientRect : x/y/w/h des rectangles stables, alignements, gaps, hiérarchie | **F2 : cible 0 ; max 2 CSS px** |
| **Styles** | computedStyle : font, poids, taille, interligne, couleur, border, radius, opacité | Valeurs contractuelles exactes lorsque mesurables |
| **Contenu** | Texte, retours à la ligne, densité, scroll, clipping, troncature et focus | Aucun contenu/action perdu ou inaccessible |
| **Image** | Comparaison côte à côte + overlay/diff **par région** | Seuil global **non validé** ; examiner visuellement les écarts |
| **Fonctionnel** | Navigation, clavier, états, erreurs, permissions et absence de faux effets | Browser + contrat propriétaire ; capture ≠ preuve d'effet |
| **Adaptatif** | 1680×970, 1280×970, 390×844, 320×568 et zoom 200 % selon les références applicables | Reflow et actions utilisables ; pas de pixel-perfect sur frame absente |

La tolérance **≤2 px s'applique aux rectangles stables contractés** dans le cadre de F2, pas à chaque glyphe rasterisé, à une animation transitoire ou aux dimensions variables d'un texte long. Les autres écarts ne deviennent pas automatiquement acceptables : ils sont appréciés selon le contrat applicable et les preuves.

**Ne pas définir un seuil de pixel-diff universel non approuvé.** Neutraliser seulement les régions véritablement non contractuelles et variables, avec justification et une assertion fonctionnelle séparée. Un score image favorable ne compense jamais une mauvaise icône, un panneau manquant ou une action fictive.

### 6.3. Rapport d'écarts exigé

Une ligne par élément critique :

| Node Figma | Element DOM | Attendu | Mesuré | Delta | État |
| --- | --- | --- | --- | --- | --- |
| ID source | Composant / test-id | x,y,w,h ; style ; asset ; état | x,y,w,h ; computedStyle | Δx/Δy/Δw/Δh | Conforme / Écart / Source absente |

**Tout écart a une cause et une suite** : source incohérente, mesure manquante, police non chargée, mauvais asset, mauvaise hiérarchie, mauvais token, logique fonctionnelle incorrecte ou différence de viewport. Ne pas corriger une cause inconnue par une marge arbitraire.

## 7. Exemple concret — Ensemble 07 (observations, non valeurs universelles)

Sur **Figma 09.06 Projet** et **09.11 Trajectoire**, Cursor a rapporté lors du diagnostic :

| Élément / frame | Mesure extraite de la source | Erreur de traduction constatée ou risque |
| --- | --- | --- |
| Frames desktop 09.06/09.11 | 1680×970 | Utiliser la même taille de référence pour la mesure navigateur |
| Rail contextuel Projet | 246 px (variante F1) | Ne pas forcer à 240 px ou 244 px |
| Bandeau supérieur | 70 px | CSS relevé à 72 px dans le candidat |
| 09.06 panneau d'état | x284 / y289 / 1358×222 | Mesurer **ce panneau**, pas simplement la largeur du contenu parent |
| 09.06 cartes activité | 438×278 ; écart env. 22 px | gap-4 CSS = 16 px, donc potentiellement non conforme |
| 09.11 panneau de proposition | x284 / y287 / 1358×545 | Comparer le rectangle réel et ses enfants |
| 09.11 cartes cycles | 404×155 ; écart env. 49 px | flex-wrap et gaps génériques modifient la composition |
| Titres | env. 37–38 px | clamp() observé donnant env. 25–32 px |
| Variante 09.11 | Sous-frames hidden dans la source | Identifier exactement l'état visible avant extraction |

Ces valeurs sont **rapportées par le diagnostic Cursor**, pas re-mesurées directement depuis Figma lors de la rédaction de ce guide. Les revalider au node-id et à la version utilisés pour l'exécution ; ne pas les convertir en tokens globaux pour d'autres frames.

La défaillance E07 n'était **pas** « MCP indisponible » : les dimensions étaient récupérables, mais le mapping source → CSS et la vérification runtime n'étaient pas systématiquement assez contraignants.

## 8. Checklist courte à utiliser dans chaque delivery UX

### Avant de déclarer la maquette prête

- [ ] Frame/état/viewport explicites, validés par Morris.
- [ ] Hiérarchie parent/enfant et couches visibles cohérentes.
- [ ] Auto Layout/contraintes/spacing exploitables ; overlays identifiés.
- [ ] Composants maîtres et variantes reconnus.
- [ ] **Chaque icône/image/asset** identifié, exact, accessible et autorisé.
- [ ] Typography, tokens, dimensions, overflow et responsive spécifiés.
- [ ] États/interactions/autorités connus ; éléments exploratoires exclus.
- [ ] Divergences de fondation listées, sans arbitrage implicite.

### Avant que Cursor écrive le code

- [ ] Ref Figma validée, source native réellement lue par MCP.
- [ ] Acquisition L0/L1/L2 suffisante jusqu'aux descendants utiles.
- [ ] Oracle PNG natif et hash conservés ; version/provenance indiquées.
- [ ] Manifeste nœud → composant → mesure → test construit.
- [ ] Aucun nœud/asset critique en UNRESOLVED.
- [ ] Fichiers et GO technique bornés selon le template SFIA v2.6.

### Avant que Cursor déclare l'interface conforme

- [ ] Comparaison DOM/Figma même état, viewport, police et fixture.
- [ ] x/y/w/h conformes à F2 pour rectangles stables.
- [ ] Icônes et contenus exacts ; aucun composant manquant.
- [ ] Computed styles et overflow vérifiés.
- [ ] Capture navigateur + diff régional + rapport d'écarts.
- [ ] Responsive, clavier et états dégradés examinés.
- [ ] Code/tests/docs/preuves corrélés au SHA ; revue Morris des exceptions.
- [ ] **Pas de verdict visuel fort sans capture runtime comparable.**

## 9. Conditions de STOP et verdicts

**STOP / arbitrage Morris** avant de poursuivre la famille concernée si : source Figma absente/non validée, référence/état ambigu, nœud ou asset critique inaccessible, valeur structurante non extraite, conflit avec exigences métier ou décision F1/F2, besoin de substitution d'une icône validée, ou tolérance géométrique dépassée nécessitant une dérogation.

**En cas de limite du MCP**, déclarer ce qui est **OBSERVÉ / PARTIAL / NON ACCESSIBLE**, demander extraction native complémentaire dans le périmètre autorisé et **ne pas dessiner au jugé**.

Verdicts de travail :

- **FIGMA CONTRACT READY — READY FOR DELIVERY** : source validée et pack d'extraction complet pour les composants en scope ; autorisation technique distincte toujours requise.
- **FIGMA CONTRACT INCOMPLETE — MORRIS DECISION REQUIRED** : source critique non exploitable ou ambiguë.
- **FIGMA TO RUNTIME ALIGNED — READY** : structure, assets, mesures, styles et captures vérifiés ; tests fonctionnels applicables séparément.
- **FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED** : écarts prouvés restant à corriger.
- **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** : pas de preuve navigateur comparable.

**Pas d'assimilation entre :** Figma VALIDATED SPEC, code IMPLEMENTED, tests COVERAGE VERIFIED, comportement BEHAVIOR PROVEN et ADOPTED. Aucun merge, déploiement ou changement de doctrine n'est induit par ce guide.

---

**Mode d'emploi :** lors de toute nouvelle conception Figma ou tout contrat Cursor UI de Next, référencer **ce guide + les sources F1/F2/R3 applicables**, puis instancier le **template SFIA v2.6 existant** sur les frames et composants du lot. Ne pas créer un deuxième prompt standard ou un second registre de décisions.
