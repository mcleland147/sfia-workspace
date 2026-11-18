# SFIA Studio Next — Architecture et solution technique candidate pour la composition visuelle conversationnelle

**Statut : REVIEWED BY MORRIS — BASE DOCUMENTAIRE DE TRAVAIL APPROUVÉE LE 17/11/2026 ; ARCHITECTURE CANDIDATE À QUALIFIER, ni IMPLEMENTED, ni BEHAVIOR PROVEN, ni ADOPTED.**
**Date : 17 novembre 2026.**
**Périmètre :** R5 / ML4D / Ensemble 05, réponse conversationnelle Nora dans « Travail ».
**Amont :** [01 — Cadrage et vision produit](01-cadrage-vision-produit.md) · [02 — Conception fonctionnelle & UX](02-conception-fonctionnelle-ux.md).
**Finalité :** définir une architecture de réalisation et un dossier de faisabilité vérifiable pour l'option B : composition adaptative avec composants premium maîtrisés, sans créer de deuxième moteur de cognition, de décision ou de conversation.

> **État documentaire strict.** Les choix de bibliothèques, noms de modules, formats de données, seuils de densité et budgets chiffrés décrits ci-dessous sont **des propositions à qualifier**. Aucune commande npm, modification Git, migration, livraison RECETTE ou promotion n'a été autorisée par ce dossier. La construction relèvera de Cursor après GO SFIA v2.6 et pré-check local complet.

## 1. Sources Git effectivement examinées et limites d'observation

| Source | Réf/constat | Ce qu'elle démontre ; ce qu'elle ne démontre pas |
|---|---|---|
| **Dépôt Next** | `mcleland147/sfia-workspace`, `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` | Baseline distante consultée ; pas d'observation de worktree local ou du candidat RECETTE |
| **SEF v0.2, roadmap et décision ML4C→ML4D** | `main`, SEF blob `ef85ba1e…`, roadmap `1be3e58d…`, décision `a9f78231…` | Macro-lot unique, R5/ML4D, Gate C ouvert ; roadmap `main` datée 15/11, donc partiellement en retard sur les essais E05 du 17/11 |
| **UX Travail et contrat technique** | Branche documentaire candidate `docs/next-ml4d-registre-revues-20261116@99b3622b09005cc789bd167775b3ffb9f6f14375`, blobs `dc5ef25…` et `5f38968…` | A–F et M1–M5 en conception, modèle D3 structuré et limites de l'expérience ; branche non fusionnée ≠ baseline `main` |
| **UI de `main`** | `NoraConversation.tsx` blob `cf3c251…`, `SafeMarkdown.tsx` blob `0c8dc2e…`, `tokens.css` blob `922c422…` | Sur `main`, le fil restitue les réponses assistant via `SafeMarkdown`. La base a des composants/scroll/style simples ; **ne démontre pas** l'absence de travail dans un worktree candidat |
| **SDK / code Nora de `main`** | `nora-adapter.ts` blob `ccf5d189…`, `service.ts` blob `8bcc322f…` | Agent `@openai/agents`, outil D4/historique/Git lecture, sortie typée et flux SDK drainé avant qualification ; compatibilité de nouvelles structures à vérifier |
| **Dépendances web `main`** | `web/package.json` blob `e27bf16f…` | Next `^15.5.29`, React `^19`, Tailwind `^3.4.1`, Zod `^4.6.7`, `@openai/agents` `^0.21.0`, Playwright ; **React Flow, ELK, ECharts non déclarés dans ce manifeste `main`**, sans conclure sur les candidats locaux |
| **Candidat expérimental E05** | Ancien handoff Git `76e7e54e…`; handoff R05 récent `sfia/review-handoff@0e078a78f0303f9e99cf174c1caa22aed7629708` | Source du renderer radial fixe, repli exposant `n.kind` / IDs ; R05 recovery candidat `e224d627…` et recette déclarée. Le handoff courant présente encore des fichiers modifiés résumés : **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING** ; impossible d'assimiler ce rapport à une revue exhaustive du code candidat |
| **Captures Morris R04/R05** | Conversation du 17/11 | Preuves visuelles d'une réception insatisfaisante et d'une génération composite affichée en R05 ; pas de couverture globale de l'API, des logs, du fournisseur et du stockage |

**Conclusion du pré-check documentaire :** `main` = baseline vérifiée ; branche UX = spécification candidate ; code et RECETTE E05 = **local, non intégralement accessibles en Git** ; état local, staged, untracked, tests et runtime actuels = **NON OBSERVÉS**. L'analyse permet un cadrage technique candidat, mais **pas un verdict d'implémentation ni un prompt Cursor immédiatement exécutable**.

## 2. Architecture cible proposée : six responsabilités, une vérité D3

```text
Demande libre du Pilote
       |
       v
D3 / Nora — recherche, raisonnement, réponse et intentions éditoriales par section
       |
       v
Projection structurée D3 (versionnée, canonique, avec contenu et provenance)
       |
       v
Validation sémantique / sécurité / compatibilité / permissions de lecture
       |
       v
Politique de présentation Studio (proportion, type, densité, largeur, repli)
       |
       +----> Textes / comparaisons / parcours / relations / données / sources
       |                      |
       |                 Composants React + tokens de design
       |                 CSS adaptatif ; moteur graphique ciblé si utile
       v
Un message Nora rendu dans Travail — reflow, accessibilité, continuité
       |
       +----> Échec ou non-compatibilité : représentation textuelle complète
```

**Important :** la politique de présentation **ne refait pas le raisonnement** de Nora et n'ajoute aucune décision métier. Elle vérifie que la représentation sollicitée est légale, vraie et graphiquement supportable. La hiérarchie D3/D4/D6/D7/D8/D9 ne change pas. Les références sont résolues par leurs propriétaires, avec contrôle des droits courants. La logique n'est pas un nouveau service IA autonome ni un parser Markdown déclenchant des effets.

### 2.1. Répartition technique des responsabilités

| Propriétaire conceptuel | Fonction | Interdit |
|---|---|---|
| D3 / Nora | Contenu, sections, rapports sémantiques, proposition d'intention de rendu | CSS, coordonnées, couleurs de criticité inventée, HTML interactif, ordre d'effet |
| Projection D3 existante à étendre si besoin | Identité message/tour, version, finalisation, texte complet, composants sémantiques, références, choix | Créer une deuxième source de vérité de conversation |
| Validateur de composition | Version/schéma, champs, relations, faits/provenances, droits/actions, limites | Corriger silencieusement les faits ou supprimer une réserve |
| Politique de présentation | Sélectionner les variantes admissibles, refuser les rendus inadaptés, préserver la substance | Réordonner des contraintes causales sans justification |
| Composants visuels | Gérer taille, wrap, grille, diagramme, légende, accessibilité, repli | Exposer IDs/états internes, tronquer l'information essentielle |
| Observabilité et QA | Détecter issues, erreurs, repli, proportions de rendus, défauts de géométrie | Publier texte sensible, conclure ADOPTED sur de seuls tests unitaires |

## 3. Contrat de réponse : forme illustrative, non schéma décidé

Le contrat Next M1 valide **le principe** d'une projection structurée versionnée sous autorité D3, en réutilisant si possible les persistances existantes. Le schéma final n'est **pas** approuvé. L'enveloppe ci-dessous est uniquement une proposition de réflexion pour le prochain arbitrage :

```json
{
  "schemaVersion": "candidate-not-adopted",
  "messageId": "canonical-message-id",
  "turnId": "canonical-turn-id",
  "status": "FINAL",
  "textCanonical": "Synthèse complète et intelligible sans les composants visuels",
  "sections": [
    {
      "id": "section-1",
      "title": "État du projet",
      "kind": "narrative",
      "content": "Texte explicatif authentique"
    },
    {
      "id": "section-2",
      "title": "Scénarios",
      "kind": "comparison",
      "semanticData": {
        "criteria": ["Exposition au risque", "Coexistence"],
        "options": [
          {"id": "B", "label": "Progressif", "values": ["Répartie", "Plus longue"]},
          {"id": "C", "label": "Pilote puis déploiement", "values": ["Concentrée", "Plus courte"]}
        ]
      },
      "textAlternative": "Comparaison complète des deux approches…",
      "provenance": []
    }
  ],
  "references": [],
  "choices": []
}
```

**Aucun nom ci-dessus ne doit être copié dans le code sans revue de contrat.** L'enjeu n'est pas ce JSON mais les invariants : un message, une identité, une version, un contenu sûr **indépendant du dessin**, une information suffisante pour afficher ou replier, des choix distincts des effets D6/D7. Les blocs ne créent ni document, ni décision, ni action métier.

### 3.1. Fiabilité de la sortie modèle

Le `main` actuel emploie `@openai/agents` avec `outputType`, et la documentation officielle confirme que l'Agents SDK supporte des sorties structurées ; **cela n'atteste pas qu'une nouvelle enveloppe complexe serait produite sans erreur en LIVE**. Le candidat E05 a conservé une option non stricte `strict:false` selon les handoffs, après difficultés de schéma, et un incident R05 `PROVIDER_ERROR` dont le sous-type n'est pas établi. Ne pas attribuer cet incident avec certitude au schéma visuel ; ne pas non plus l'ignorer.

**Proposition de sûreté :** une génération cognitive et son rendu visuel ne doivent pas se bloquer mutuellement. Préserver un texte canonique utilisable, valider la structure de manière explicite (Zod/JSON Schema selon le contrat final), tolérer l'absence de préférences visuelles et **ne jamais déclencher aveuglément une deuxième génération fournisseur** comme simple « réparation CSS ». Si la génération complète échoue, appliquer la politique D3 de reprise/UNKNOWN existante, pas une fausse réponse textuelle.

**Point à éprouver :** compatibilité réelle `@openai/agents` + Zod + format de projection + outils D4 + streaming + budget de tokens + relecture après persistance. Toute modification du schéma de sortie exige des tests isolés, puis un essai LIVE borné autorisé.

## 4. Sélection/admission de la représentation — algorithme de principe

Une politique **déterministe et explicable** doit réaliser les opérations suivantes, dans l'ordre :

1. **Vérifier** le type/la version, la complétude, le caractère non exécutable des données, les références, les IDs liés, l'absence de catégories inconnues à l'affichage.
2. **Qualifier** le contenu : nombre d'entités, longueur réelle, nombre de critères ou dépendances, complexité et incertitudes. Vérifier les préconditions de la famille (ex. données quantitatives avec unités).
3. **Mesurer** les contraintes disponibles (largeur effective du fil, mode viewer, zoom et conteneur, et pour graphes dimensions des nœuds après layout du texte).
4. **Choisir** une variante connue de la famille (`cards`, `matrix`, `list`, `verticalSteps`, `graph`, `text`…) selon des **règles validées**, indépendantes d'une consigne esthétique libre du modèle.
5. **Rendre / contrôler** les contraintes de base (contenu visible, liens et focus, pas de nœuds/connecteurs en collision, ordre de lecture sémantique).
6. **Replier** vers une autre représentation supportée ou le texte complet si validation/mesures/layout échouent, avec journal technique expurgé. Le repli ne doit pas être un échec de conversation.

**Deux erreurs à éviter :** (a) seuil universel « plus de 7 nœuds = liste d'IDs » ; (b) heuristique exclusivement au nombre de cartes, sans densité ni largeur. Les règles peuvent s'appuyer sur des bornes mesurées/acceptées et plusieurs stratégies par famille, pas sur une sélection automatique irréfléchie.

## 5. React, CSS et navigateur : ce qui est techniquement disponible

| Besoin | Capacité vérifiée | Condition / limite |
|---|---|---|
| Grilles et listes variables | React rend des collections dynamiques avec clés stables ; CSS Grid/Flex organisent les flux | La clé ne remplace pas la qualification des données ni le design |
| Retour à la ligne et dimensions intrinsèques | `overflow-wrap`, `min-width:0` dans flex/grid, `minmax(0,1fr)`, taille verticale selon contenu | Les chaînes sans espaces, objets imbriqués et styles imposés exigent tests ; `text-overflow:ellipsis` masque le texte |
| Responsive au **conteneur réel** | CSS `@container` réagit à la largeur de la zone Travail, pas seulement au viewport | Ne dispense pas d'une conception des variantes ni d'essais en mode 50/50 |
| Mesure de zone et redimensionnement de graphes | `ResizeObserver` signale changements de taille ; React peut déclencher recalcul et rendu | Éviter boucles de recalcul, jitter et visualisations qui sautent lors du streaming ou du viewer |
| Accessibilité/reflow | DOM sémantique, clavier, tableaux/alternatives, WCAG 2.2 1.4.10 | Certains contenus intrinsèquement bidimensionnels ont des exceptions ; cela n'autorise pas un bloc illisible |

**Règle fondamentale :** ne pas résoudre un débordement de texte par `overflow:hidden`, `line-clamp`, une hauteur fixe ou une taille de police minimale arbitraire pour une information importante. La géométrie « visible dans le DOM » ne suffit pas à garantir qu'aucun caractère n'est caché : test du rendu réel et de l'accessibilité obligatoire.

## 6. Bibliothèques candidates : recherche factuelle et limites

| Bibliothèque / approche | Capacités vérifiées | Usage potentiellement utile | Réserve / décision |
|---|---|---|---|
| **React Flow (`@xyflow/react`)** | Nœuds React personnalisables, arêtes, viewport/fitView ; exemples officiels de layouts via Dagre/ELK | **Relations multi-branches** ou processus réellement graphiques ; pas nécessaire pour une chronologie simple | Moteur interactif par nature ; évaluer encombrement, lecture seule, accessibilité, responsive, sécurité et poids avant adoption. Licence MIT annoncée par projet |
| **ELK / `elkjs`** | Calcul algorithmique de graphes dirigés (`layered`), routage et disposition ; moteur distinct du dessin | Éviter coordonnées radiales arbitraires et croisements inutiles | Ne dessine rien ; dépend de dimensions de nœuds correctes ; paramétrage/layout asynchrone et validation des exceptions. Licence à vérifier dans revue de dépendances |
| **Dagre** | Moteur de disposition de graphes dirigés plus simple, dans les exemples React Flow | Petits graphes lorsque les cas restent simples | Moins adapté à certains liens complexes ; comparer empiriquement avec ELK |
| **Apache ECharts** | Graphiques numériques (barres, séries, répartitions), thèmes, SVG/Canvas, `resize()`, fonctionnalité ARIA | Données numériques réelles avec axes/unités/périodes | Un graphe de données ne convient pas aux risques qualitatifs ; conteneur dimensionné et accessibilité/alternative textuelle nécessaires. Apache-2.0 |
| **visx** | Primitives bas niveau de visualisation pour React | Design de graphiques très spécifique à Studio si bibliothèque haut niveau insuffisante | Plus de liberté, mais davantage de code/layout et de maintenance. MIT |
| **Mermaid** | Génération de diagrammes à partir de descriptions textuelles, avec `securityLevel` | Éventuel aperçu non critique, comparaison au stade d'étude | Risque de contrôle limité de la direction artistique, d'affichage variable et de surface d'entrée DSL ; **non recommandé comme renderer principal du fil** sans preuves supplémentaires |
| **React/CSS/SVG sobre** | Texte, cartes, matrices, timelines, pictogrammes et petits flux déterministes | **Premier choix pour les représentations simples** | Devenir un pseudo-moteur de graphes général serait une erreur ; ne pas refaire ELK à la main |

**Position candidate :** ne pas installer toutes les bibliothèques « au cas où ». Construire d'abord les composants éditoriaux/variantes avec React/CSS. Évaluer React Flow+ELK **uniquement si les cas de relations le justifient réellement** ; ECharts **uniquement lorsque des indicateurs authentiques rendent les graphiques utiles**. Alternatives appréciées dans la même qualification, pas des dépendances obligatoires.

### 6.1. Références externes vérifiables

- [React Flow — Auto Layout (Dagre, D3 hierarchy, ELK)](https://reactflow.dev/examples/layout/auto-layout), [nœuds/mesures](https://reactflow.dev/api-reference/types/node), [accessibilité](https://reactflow.dev/learn/advanced-use/accessibility), [licence MIT](https://reactflow.dev/).
- [ELK — algorithmes](https://eclipse.dev/elk/reference/algorithms.html), [ELK Layered](https://eclipse.dev/elk/reference/algorithms/org-eclipse-elk-layered.html), [elkjs — projet](https://github.com/kieler/elkjs), [licence](https://github.com/kieler/elkjs/blob/master/LICENSE.md).
- [Apache ECharts — démarrer](https://echarts.apache.org/handbook/en/get-started/), [dimension du conteneur et `resize()`](https://echarts.apache.org/handbook/en/concepts/chart-size/), [accessibilité ARIA](https://echarts.apache.org/handbook/en/best-practices/aria/), [licence](https://echarts.apache.org/en/download.html).
- [visx — primitives React](https://visx.airbnb.tech/) ; [Mermaid — niveaux de sécurité](https://mermaid.js.org/config/usage.html).
- [MDN — wrapping](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-wrap), [min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/min-width), [queries de conteneur](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries), [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API).
- [React — rendu des listes](https://react.dev/learn/rendering-lists), [W3C — WCAG 2.2 reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

**Vérification de dépendances à exiger avant implémentation :** versions et licences exactes, transitives, compatibilité Next/React et navigateur, taille client, SSR/hydratation, accessibilité, support/maintenance, sécurité et éventuelles contraintes de commercialisation. La documentation publique **ne prouve pas** la compatibilité dans le code Next candidat.

## 7. Traitements de mise en page — conception candidate

### 7.1. Cartes, grilles et matrices

- Cartes en hauteur automatique, alignement typographique cohérent et largeur minimale raisonnable. Le titre et la description reviennent à la ligne sans réduction agressive.
- Grille via `repeat(auto-fit, minmax(...))` ou variantes pilotées par container queries ; l'algorithme décide aussi entre grilles, matrice et liste lorsque le nombre de critères et le volume l'imposent.
- Pas de duplication sémantique entre blocs. Une comparaison n'impose pas une deuxième matrice identique sous les cartes.
- Tableaux : sémantique HTML et axes complets, stratégie de reflow ou défilement **explicite, signalé et accessible** lorsqu'une matrice demeure bidimensionnelle. Ne jamais masquer une colonne silencieusement.

### 7.2. Parcours et graphes

- Pour une vraie séquence, préférer **HTML/CSS** (liste numérotée accessible) avec liaisons sobres et disposition responsive ; aucun moteur de graphe obligatoire.
- Pour dépendances dirigées : relations validées, labels humains, nœuds dimensionnés selon le contenu ; mesurer avant layout si nécessaire, utiliser ELK/Dagre pour les positions et routages, puis dessiner les composants et les connecteurs.
- Interdire les positions circulaires fixes et labels coupés comme stratégie générale ; le fallback doit produire des phrases (« Le déploiement du site B dépend de la validation des accès »), pas `site-b → acces-a`.
- Cycle ou très forte densité : résumer par groupes sans perdre l'identité des dépendances, ou basculer vers liste relationnelle détaillée. Aucune invention d'ordre chronologique.
- Le diagramme ne doit pas être une application d'édition de graphes cachée dans un message. Évaluer un mode lecture seule, navigation/zoom si utile, alternative textuelle en premier recours.

### 7.3. Graphiques quantitatifs

- Données : source/identité, unité, date/périmètre, valeurs et éventuelles inconnues ; axes adaptés et honnêtes ; typologie choisie selon données.
- ECharts ou alternative assure le dessin et le redimensionnement, **pas la validité de la mesure ni la pertinence statistique**.
- Pas de courbe avec jalons fictifs, pas de taux d'avancement inventé, pas de graphique là où une table ou deux phrases sont supérieures.
- Alternative tabulaire et description accessible obligatoires pour que le message reste compréhensible indépendamment du Canvas/SVG.

## 8. Persistance, reprise, streaming et erreur

**Contrat M1 :** utiliser les identifiants `messageId`/`turnId`, l'état de finalisation, les sources et le résultat D3 existants ; évaluer leur capacité à stocker et rejouer la composition validée. **M5 impose STOP si une migration physique est indispensable.** Ne pas créer par défaut un stockage séparé de la « mise en page » qui deviendrait une seconde vérité.

- **Rechargement :** même contenu, mêmes qualifications et actions légitimes ; une variante responsive peut varier avec la largeur. Ne pas exiger un PNG immuable ; la **fédération du contenu sémantique** prime sur la géométrie.
- **Version :** projection de contenu versionnée ; stratégie de migration de lecture et repli pour anciens messages ; aucun rendu cassé sur un historique E05.
- **Réponse progressive :** un tour D3, un message ; ne rendre un composant interactif que lorsque sa section est complète et le tour finalisé selon CT-02 ; préserver l'ancrage de lecture UX-002.
- **UNKNOWN/INTERRUPTED :** présenter l'état vrai du tour ; ne pas inférer qu'une génération est terminée parce qu'une section graphique a été préparée. Les mécanismes de réconciliation D3/D7 restent distincts.
- **Erreur d'un composant :** boundary local de rendu + fallback de cette section, sans faire échouer les autres sections ; observabilité expurgée et absence de réparation cognitive implicite.

## 9. Sécurité, intégrité, accessibilité et performance

**Sécurité / gouvernance :** les textes issus de Nora et des sources sont non fiables pour une exécution. Pas de HTML arbitraire, styles ou SVG actifs générés par le modèle, URLs non validées, onclick implicite, script ou DSL brut rendu sans contrôle. Markdown sûr via mécanisme existant à auditer ; choix typés liés au tour et droits réels. La construction visuelle ne peut pas modifier D4/D6/D7, ni convertir un bouton en HumanDecision.

**Accessibilité :** titres et ordre de lecture DOM, labels humains, contraste, navigation clavier, focus, adaptation au zoom, régions scrollables explicitement navigables, description et tableau alternatif pour graphes, réduction du mouvement. WCAG 2.2 1.4.10 (reflow) guide le contrat ; les exceptions bidimensionnelles ne remplacent pas l'alternative complète.

**Performance :** mesurer coût de bundle client, montage, remesure et recomposition, temps de rendu, layout graphique sur grands cas et changement du mode 50/50. Une bibliothèque graphique lourde est chargée seulement pour les familles utiles si la compatibilité le permet ; mesurer avant d'ajouter workers/virtualisation/optimisations complexes. `ResizeObserver` ne doit pas créer de boucle de layout.

**Observabilité :** signaux sans texte sensible : family candidate, family rendered, fallback reason allowlistée, version de contrat, viewport/container class, durée de layout, anomalie de clipping, ID corrélable de tour autorisé. Pas de logs de prompts, documents privés, secrets ni fournisseur brut.

## 10. Plan de qualification et niveaux de preuve

| Couche | Oracles / tests | Ce qu'ils démontrent |
|---|---|---|
| **Unitaires déterministes** | Validateurs Zod/schéma, cas limites, entrée mal formée, provenance, relations invalides, décision de repli, interdiction d'actions depuis texte | Conformité logique du contrat ; **pas** de beauté ni géométrie runtime |
| **Property-based / matrices de contenu** | Nombres 0,1,2,3,4,5,8,12,18 ; titres courts/longs ; textes sans espace ; accents ; URL ; source manquante ; multiples critères ; dépendances cycliques | Révèle limites et exceptions, pas des seuils de produit adoptés |
| **Intégration API/persistance** | Qualif D3, finalisation, relecture, version antérieure, refus de droits, choix expirés, UNKNOWN, aucun doublon | Intégrité sémantique et autorité ; pas de visuel final |
| **BROWSER / FAKE** | Playwright avec réponse représentative injectée sans fournisseur ; desktop ~1680/1280, mobile 390, panneau partagé 50/50, zoom 200/400 %, clavier, overflow | Contrôle DOM et géométrie réelle dans des contextes reproductibles |
| **Comparaison Figma ↔ runtime** | Captures stables par famille et état/viewport, comparaison visuelle calibrée et revue humaine | Conformité graphique à la direction artistique validée ; un diff pixel seul ne prouve pas la pertinence |
| **LIVE / REAL borné** | Questions libres R01–R05 et synthèse projet, sources et production structurée fournisseur, rechargement, retour Pilote | Pertinence des décisions de Nora et robustesse de l'intégration réelle, seulement sous GO spécifique et avec preuves |

**Détection automatique :** `scrollWidth > clientWidth`/`scrollHeight > clientHeight` sur contenants qui doivent tout exposer, rectangles hors cadre, intersections de labels/nœuds, éléments masqués/clippés, état des focus et aria ; assertions Playwright `toHaveScreenshot()` pour les états stabilisés. **Limite :** un test de rectangles n'identifie pas toutes les coupes de glyphes, et une capture identique peut reproduire un défaut de baseline. Compléter par vérification de texte entier, tests d'accessibilité et revue utilisateur.

**Règles de réception candidats :** zéro perte d'information essentielle ; aucun terme interne exposé ; zéro diagramme incompréhensible accepté comme résultat graphique ; aucun effet métier induit ; alternative non vide et fidèle ; absence de régression R05 recovery, UX-002 et brouillon ; qualité artistique approuvée par Morris. Tout verdict distingue DOCUMENTED, VALIDATED SPEC, IMPLEMENTED, COVERAGE VERIFIED, BEHAVIOR PROVEN, ADOPTED.

## 11. Blast radius et matrice de compatibilité — à vérifier au pré-check Cursor

| Zone | Risque potentiel | Contrôle préalable |
|---|---|---|
| D3 `nora-adapter.ts` / qualification | Nouvel outputType, strict mode, coût tokens, exception fournisseur | Local HEAD + SDK exact + tests stream/tools/erreur ; ne pas modifier M1 par hypothèse |
| D3 `service.ts`, message, stockage DB | Historique, double source de vérité, anciens messages, migrations | Réutilisation du stockage existant, compatibilité versionnée, M5 STOP si nécessaire |
| API messages et projection front | Payload, types, finalisation, actions et permissions | Contrat typé, rétrocompatibilité, tests de droits |
| `NoraConversation.tsx`, `SafeMarkdown`, visuels candidat | Scroll, composer, action, texte sûr, rendu initial/hydratation | Snapshot DOM, sanitization, split viewer, loading/error/UNKNOWN |
| `tokens.css` / shell / responsive | Rail et panneau droit, 50/50, reflow, états mobile | Pas de régression UX-002/010, géométrie vérifiée sur viewports pertinents |
| Tests et CI | Flakiness visuelle, polices/OS, false positives | Baselines et environnements fixés, tests séparés FAKE/BROWSER/LIVE |
| Observabilité | Exposition du contenu sensible, faux diagnostics | Champs allowlistés, mesures de temps, redaction |

**Intégrateur :** un seul macro-lot responsable d'interface D3↔Studio et d'acceptation bout-en-bout ; sous-travaux parallélisables seulement après contrat stabilisé et absence de conflit de fichiers. Documentation Next actualisée dans le même lot dès que le code diverge du contrat. Un écart code/doc est un **KNOWN GAP**, pas une adoption implicite.

## 12. Alternatives, arbitrages et points STOP

**À arbitrer après les maquettes premium :**

1. **Niveau de richesse graphique V1 :** familles réellement indispensables, et celles qui peuvent rester textuelles ; orientation par usage, pas par démonstration de bibliothèque.
2. **Relations complexes :** React/CSS+SVG pour cas simples ; React Flow+ELK si graphes dirigés réels. Décider sur des cas R04 comparés et la charge client mesurée.
3. **Quantitatif :** ECharts ou alternative seulement si de vrais scénarios de données du produit nécessitent plusieurs graphiques ; sinon reporter.
4. **Contrat D3 :** représentation minimale, validation, garanties de fallback, compatibilité avec `strict:false`, séparation des sections et du texte canonique ; pas de deuxième LLM imposé.
5. **Persistance :** réutiliser `resultJson`/stockage existant si comportement prouvé ; migration en STOP/M5, jamais dissimulée par une sérialisation fragile.
6. **Seuils de densité :** bornes calibrées par Figma et essais de contenu ; aucun 4/5/7/12 arbitraire adopté.

**STOP explicite avant construction ou promotion si :** schéma durable exigé ; fracture d'autorité D3/D6/D7 ; perte de contenu en fallback ; licence/compatibilité non maîtrisée ; Figma non validé ; rupture des chemins de reprise ; besoin de nouveau moteur concurrent ; tests nécessaires irréalisables dans les lanes existantes ; sécurité ou secrets compromis.

## 13. Trajectoire de réalisation et gates

**Une seule unité de delivery** conforme au SEF, même si elle comporte des activités séquentielles :

1. **Valider la direction artistique** (Figma premium, variations de contenu/largeur, références visuelles réelles) : gate Morris de contenu visuel.
2. **Fixer le contrat de composition et l'architecture cible** : sélection et fallback, M1–M5, bibliothèques choisies sur preuves, impact D3 ; gate Morris si pivot structurel.
3. **Construire composants + intégration + tests + docs** par Cursor sous SFIA v2.6 et GO borné ; inspections Git locales et cessation sur STOP.
4. **Qualifier BROWSER/FAKE puis LIVE/REAL borné** avec version, données, lane et horodatage ; rendre visibles les réserves R04/R05.
5. **Recette Morris** de la pertinence de Nora ET de la restitution graphique, puis décision séparée sur les gates ML4D/Ensemble 05 et, plus tard, Gate C.

**Gouvernance Git :** SEF §10 : D0 rédaction locale ; D1 contribution documentaire non structurante sous mandat Git borné ; D2 architecture normative/decisions sous validation Morris **et** mandat ; D3 exécution technique Cursor. ENV-01 : DEV/RECETTE distincts, candidat immuable et build identifié, STABLE non disponible sans décision. **Ce dossier ne donne pas de GO d'intégration, PR, merge ni ADOPTED.**

## 14. Critères de sortie — documents, construction, preuve

| Niveau | Livrable attendu | Statut au 17/11/2026 |
|---|---|---|
| **DOCUMENTED** | Trois documents liés, sources/principes/alternatives/risques/acceptation | **Publié sur branche documentaire candidate comme base de travail** |
| **VALIDATED SPEC** | Décisions Morris de direction artistique, règles, architecture candidate sélectionnée et périmètre | **Partiel seulement** : A–F et M1–M5 existants ; choix B et DA premium non encore formalisés comme décision Git |
| **IMPLEMENTED** | Composants et projection dans le produit candidat, tests et documentation synchronisés | **NON PROUVÉ pour la nouvelle cible** ; E05 expérimental distinct |
| **COVERAGE VERIFIED** | Tests/adversarial/browser/graphes/fallback/reflow en version identifiée | **NON PROUVÉ pour la nouvelle cible** |
| **BEHAVIOR PROVEN** | Captures runtime conformes et essais LIVE/REAL représentatifs, sans perte ni autorité inventée | **NON PROUVÉ** |
| **ADOPTED** | Décision explicite Morris, Git/promotions/gates conformes | **NON ACQUIS** |

## 15. Bibliographie et liens primaires

### SFIA Studio Next

- [SEF v0.2](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/SEF.md), [Roadmap](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/roadmap.md), [trajectoire ML4C/ML4D](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md), [ENV-01](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/environnements-recette-et-promotions.md), [noms validés](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/governance/product-naming-conventions.md).
- [R1 Vision](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/cadrage/vision-produit.md), [R2 Conduite Nora](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [R4 Architecture](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/architecture-technique/cadrage-r4.md).
- [ML4D UX candidate](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/conception-ux-travail-avec-nora.md), [Contrat technique candidat](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md), [registre](https://github.com/mcleland147/sfia-workspace/blob/99b3622b09005cc789bd167775b3ffb9f6f14375/projects/sfia-studio-next/construction/convergence-ux-ui-globale/registre-central-revues.md).
- [NoraConversation.tsx](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx), [SafeMarkdown](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/components/SafeMarkdown.tsx), [nora-adapter](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts), [package.json](https://github.com/mcleland147/sfia-workspace/blob/997d4c4e8204993de7107552898c8cc08cd3b0ed/projects/sfia-studio-next/web/package.json).
- [Handoff expérimental E05 — renderer](https://github.com/mcleland147/sfia-workspace/blob/76e7e54ea311f961cc6364de6045a0dfecd02965/sfia-review-handoff/latest-chatgpt-review.md), [Handoff R05 recovery](https://github.com/mcleland147/sfia-workspace/blob/0e078a78f0303f9e99cf174c1caa22aed7629708/sfia-review-handoff/latest-chatgpt-review.md).

### SDK, UI, graphes, tests

- [OpenAI Agents SDK — `outputType`](https://openai.github.io/openai-agents-js/guides/agents/), [validation des schémas](https://openai.github.io/openai-agents-js/guides/schemas/), [OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs). Leur disponibilité ne constitue pas une preuve LIVE pour le schéma candidat.
- [React Flow — Auto Layout](https://reactflow.dev/examples/layout/auto-layout), [ELK — couche de disposition](https://eclipse.dev/elk/reference/algorithms/org-eclipse-elk-layered.html), [elkjs](https://github.com/kieler/elkjs), [ECharts — dimension](https://echarts.apache.org/handbook/en/concepts/chart-size/), [ECharts — aria](https://echarts.apache.org/handbook/en/best-practices/aria/), [visx](https://visx.airbnb.tech/), [Mermaid sécurité](https://mermaid.js.org/config/usage.html).
- [MDN overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-wrap), [MDN queries de conteneur](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries), [MDN ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API), [React listes](https://react.dev/learn/rendering-lists), [W3C reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
- [Playwright — comparaison de captures](https://playwright.dev/docs/test-snapshots), [assertions de captures de composants](https://playwright.dev/docs/api/class-locatorassertions).

**Date de consultation et portée :** documentation publique examinée le 17/11/2026 ; API et comportements à revérifier à la version installée lors du delivery. Les bibliothèques citées sont des **candidats**.

---

## Annexe factuelle du 18/11/2026 — réception bornée de la composition visuelle (D1)

> **Actualisation postérieure, non normative.** Les mentions de conception candidate, d'absence de GO et de non-implémentation dans les paragraphes historiques précédents décrivent **l'état de rédaction du 17/11** ; elles ne doivent pas être lues comme le statut runtime actuel de la **seule composition visuelle**. Cette annexe ne réécrit pas les décisions validées et ne déclare pas l'ensemble Travail réceptionné. Source commune : [dossier UAT](07-dossier-reconciliation-reception.md), [matrice C-01…C-22 V0.10](06-matrice-convergence-vision-realisation.md), [handoff final](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md).

### Réconciliation as-built rapportée — chaîne de composition

| Frontière | État documenté après delivery |
|---|---|
| **D3** | Production structurée `visualComposition` et réponse textuelle ; choix spontané de familles constaté sur les huit UAT RECETTE. Aucune déduction de graphique à partir du Markdown libre. |
| **Validation SDK** | UAT-03 : sortie `steps[].detail` dépassant `max(400)` → validation Zod/Agents SDK échouée en `stream_drain` ; plafond porté à **5 000 caractères par détail d'étape**, et non par réponse Nora. |
| **Observabilité** | Catégorisation durable des erreurs de sortie structurée rapportée, avec métadonnées expurgées et sans réutiliser les journaux sensibles DEV en RECETTE. |
| **Admission / projection** | Contrat canonique versionné et rendu spécialisé, repli texte/compléments conservateurs rapportés ; versions PG historiques non rejouées exhaustivement. |
| **Rendu React / ELKjs** | Cartes, matrices, séquences, timelines et graphes ; correctifs UX-01…07. Dans UAT-07, `classifyLanes()` réclamait deux fois certains nœuds entre gate et voie/suite ; **claim exclusif** et ordonnancement revue → lancement, sans modifier les six nœuds D3 persistés. |
| **Persistance / RECETTE** | Relecture de la composition existante UAT-07 confirmée par le handoff et capture Morris ; aucune migration. Candidat local `5c94c867`, build `IEINNuPl0bHWJOWkh0ZhG` selon livraison Cursor. |

**Invariant et blast radius :** D3 reste propriétaire du sens, Studio contrôle l'admission et le rendu sans moteur cognitif parallèle ; ni autorité D6 ni données PG ne doivent être réécrites pour une correction de layout. Pour UX-05, la composition UAT-07 contenait **six IDs uniques** (`infrastructure`, `metier`, `accompagnement`, `synchronisation`, `revue`, `lancement`) et cinq arêtes ; le défaut était au niveau de la classification de rendu, pas une duplication D3.

**Limites de qualification :** sources as-built établies à partir des handoffs et captures, **non à partir d'un audit du commit produit non poussé**. Comparaison complète du diff, replays PG historiques, régressions adverses et vérification indépendante des ACL RECETTE restent ouverts.
