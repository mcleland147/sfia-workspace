# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.1 — 18 novembre 2026  
**Statut :** DOCUMENTED / CANDIDATE FOR MORRIS REVIEW — document d'analyse et de préparation de convergence, non décision D2, non VALIDATED SPEC supplémentaire, non ADOPTED.  
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora » ; restitution conversationnelle adaptative, remplacement du mécanisme graphique expérimental E05.  
**Nature :** bilan de conformité entre la vision et les contrats documentés, le candidat technique rapporté par Cursor et les preuves disponibles. **Il ne vaut ni réception technique, ni GO Cursor, ni réduction de périmètre.**  
**Amont :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Conception fonctionnelle et UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture candidate](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Objet, portée de la revue et réponse générale

**Question de contrôle :** la réalisation locale décrite par Cursor correspond-elle à ce qui était attendu pour SFIA Studio Next, indépendamment des correctifs ponctuels déjà engagés ?

**Conclusion :** le socle technique est **cohérent avec la direction architecturale**, mais **la cible fonctionnelle, graphique et probatoire n'est pas encore atteinte**. L'admission déterministe, la séparation Nora/Studio, la composition React/CSS et les replis constituent une base à préserver. Trois écarts structurants empêchent de considérer le remplacement E05 comme achevé :

1. **Vérité unique et fidélité :** la politique de corps autorise encore la substitution d'une projection visuelle structurellement valide sans démontrer son identité sémantique avec le texte canonique **replyDraft**.
2. **Désengagement d'E05 :** le nouveau renderer existe, mais l'écriture utilise toujours le wire **e05-visual-composition-v1**, avec ses catégories et ses limites. La compatibilité historique ne doit pas devenir par inertie le modèle d'écriture cible.
3. **Capacités graphiques dirigées :** le SVG à coordonnées fixes a été retiré au profit d'une liste sûre, mais les dépendances dirigées, arbres conditionnels et processus parallèles illustrés par les Figma 07–09 ne sont pas effectivement livrés comme représentations spécialisées.

**Lecture importante :** un repli textuel fiable est une garantie de sûreté ; il n'est pas une preuve que la famille graphique demandée est construite. Inversement, une famille facultative explicitement différée (notamment graphique quantitatif sans données fondées) n'est pas une non-conformité à corriger automatiquement.

## 2. Sources, versions et limites d'observation

| Source | Référence vérifiée | Portée |
|---|---|---|
| Dépôt | mcleland147/sfia-workspace | Projet Next : projects/sfia-studio-next/ |
| Git main | 997d4c4e8204993de7107552898c8cc08cd3b0ed | SEF v0.2, Roadmap, décisions, code baseline ; la Roadmap est datée du 15/11/2026 |
| Branche documentaire ML4D | docs/next-ml4d-registre-revues-20261116 @ c9e6fe157b8e5c95499f21e4b62fd726e08c6219 | Documents 01–05, UX Travail avec Nora et contrat technique, non mergés sur main |
| Dernier Review Pack Cursor | sfia/review-handoff @ eb8f6a01f860b9d0f68822b96316aedde3594e03 | Code reproduit, diffs, tests rapportés, matrice CV-T et réserves |
| Blob du handoff | 1d9f9390fb483535bdec1b570d71aef1ec9856d9 | Intégrité du fichier distant |
| Branche projet technique | sfia/next-ml4d-composition-adaptative ; tip local rapporté a783f014935de0dec5ff8e79a2b18eea0e629756 | Non présente sur origin au contrôle ; code correctif dans un working tree local non commité |
| Référence graphique | [Figma — Page 06, neuf écrans](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=742-2) | Direction acceptée en principe, pas preuve navigateur |
| Gouvernance | [SEF](../../../governance/SEF.md) · [Roadmap](../../../governance/roadmap.md) | Git main prime pour gouvernance et décisions applicables |

**Précédence :** Git/preuves observées > décisions Morris > contrats/documentation > mémoire > hypothèses. La validation Morris des principes **UX A–F** et des orientations **M1–M5** ne valide pas rétroactivement les formats, seuils de cardinalité ou technologies candidatés dans les documents 03–05. Les maquettes constituent des références de direction artistique, pas une certification pixel ou une preuve LIVE.

**Limite de cette revue :** le code est examiné depuis le Review Pack distant, et non depuis le worktree local de Cursor ; les captures PNG nommées dans le pack ne sont pas directement inspectées. Les résultats de commandes sont **rapportés**, pas réexécutés par ChatGPT. Toute exécution ultérieure doit revérifier branche, HEAD, staged/untracked, versions, dépendances et environnement exact.

## 3. Lexique des statuts

- **ALIGNÉ (CODE) :** mécanisme ou responsabilité conforme aux principes examinés ; la couverture BROWSER/LIVE peut rester ouverte.
- **PARTIEL :** une capacité existe, mais manque une portée, un contrat ou une preuve prévue.
- **ÉCART :** fonctionnalité cible absente, remplacement incomplet ou implémentation différente de la trajectoire prévue.
- **BLOQUANT :** invariant fondamental exposé à une violation ; ne pas recevoir le sous-système tant que la condition n'est pas levée.
- **DIFFÉRÉ CONFORME :** extension explicitement conditionnée ou hors du premier périmètre, sans prétendre à son implémentation.
- **NON PROUVÉ :** comportement non démontré au niveau de preuve nécessaire ; ce n'est pas un FAIL de runtime observé.

Dans les tableaux, « PASS rapporté » ne signifie pas BEHAVIOR PROVEN au niveau global. Aucun statut ci-dessous n'autorise une promotion, un merge ou ADOPTED.

## 4. Matrice de convergence : vision → exigence → réalisation → écart → preuve → action

### 4.1. A — Vision produit et architecture

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-01 · VP-01, UX-A/B, GV-01/10** | Nora compose librement selon le raisonnement, sans template global | Blocs hétérogènes et admission par famille, vocabulaire encore borné par le wire E05 | **PARTIEL** : capacité de présentation, pertinence spontanée non prouvée | **CONSERVER / COMPLÉTER** ; tests de demandes libres simple/composite, contrôle éditorial GV-T01/02 et CV-T02, sous GO LIVE séparé pour jugement du modèle |
| **C-02 · VP-02, UX-C/F** | Un seul message Nora mélange texte, visuels, références et choix gouvernés | NoraConversation intègre plusieurs blocs sous une identité de message | **ALIGNÉ (CODE)** ; continuité sur tous contextes non prouvée | **CONSERVER / PROUVER** ; T02, refresh, relecture longue, conservation des IDs, UX-002 et UX-CROSS |
| **C-03 · VP-06, doc 03 §2** | Nora possède le sens et l'intention ; Studio possède validation et rendu | admission.ts, NoraComposition, React/CSS, aucun second agent introduit | **ALIGNÉ (ARCHITECTURE)** | **CONSERVER** ; test d'absence d'autorité/effecteur supplémentaire, aucun parsage HTML/Markdown déclenchant une action |
| **C-04 · VP-03/04, UX-D, CV-02/06** | Texte canonique, faits, nuances et visuels ne divergent jamais silencieusement | Strategy B : replyDraft canonique ; decideBodyPolicy autorise **substitute** si la projection est structurellement complète, sans comparaison avec replyDraft | **BLOQUANT** : une contradiction sémantique peut être masquée | **CORRIGER P0** ; refus de substitution et de complément trompeur sans correspondance déterministe prouvable ; test négatif de contenus contradictoires ; STOP si modification structurante M1 nécessaire |
| **C-05 · doc 04 §3.2/8, doc 05 §10** | Remplacement de la grammaire E05, lecture des historiques préservée | Renderer NoraComposition nouveau ; NoraVisualComposition devient alias ; parser/wire e05-visual-composition-v1 toujours en écriture | **ÉCART** : remplacement partiel et dette d'écriture | **COMPLÉTER P1** ; audit import/stockage, définir contrat nouveau compatible M1 ou présenter arbitrage D2 ; isoler E05 en lecture historique puis retirer les dépendances devenues inutiles |
| **C-06 · M1/M5, CT-02, CV-11** | Projection/version sous D3, même message après refresh, aucune migration par inertie | Projection existante conservée, pas de migration, essais historiques partiels | **PARTIEL** : compatibilité sans couverture PG/REAL complète | **PROUVER** ; ancien/nouveau message en API/PG/BROWSER, état de finalisation, sources et choix expirés ; STOP M5 si migration indispensable |

### 4.2. B — Familles fonctionnelles et richesse graphique

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-07 · UX-A/B, GV-01/02, CV-01** | Texte naturel par défaut si forme graphique inutile | SafeMarkdown et variante markdown_only ; narration facultative | **ALIGNÉ (MÉCANISME)** | **CONSERVER / PROUVER** ; texte court sans carte ni décor imposés, puis test de choix éditorial Nora |
| **C-08 · doc 02 §5/6, Figma 03/04, CV-T03/04** | Comparaisons adaptatives avec options, critères, résumés, avantages et limites | Cartes, matrices, stacked ; correctif A affiche matrice **et** détails, sans repli sr-only exclusif | **PARTIEL** : code corrigé, matrice complète non capturée dans la variante ciblée | **CONSERVER / PROUVER** ; Browser Figma 03/04, 3 et 5 options, textes longs, conditions, absence de doublon superflu, vue étroite |
| **C-09 · Figma 02/06, GV-04, CV-T06** | Étapes/planning avec ordre réel, horizontal/vertical selon largeur, sans causalité inventée | Séquence React/CSS et bascule vertical/horizontal | **PARTIEL** : preuve restreinte à fixture et largeur testées | **COMPLÉTER** ; 4–6 étapes, prérequis, dates ou absence de dates, panneau réduit et reflow |
| **C-10 · Figma 07, GV-05, CV-T07** | Vrai diagramme de dépendances dirigées, étiquettes humaines et liens lisibles, repli sûr si hors enveloppe | SVG fixe retiré ; RelationsView utilise une liste source → cible | **ÉCART DE CAPACITÉ** : repli sûr ≠ diagramme livré | **CONSTRUIRE P1** ou soumettre réduction de portée ; comparer layout dirigé mesuré (CSS/SVG+ELK vs React Flow+ELK ou plus simple prouvé), navigateur sur trois chemins convergents, liste alternative exhaustive |
| **C-11 · Figma 08, CV-T08** | Arbre de conditions et issues, sans transformer proposition en décision humaine | Pas de famille decisionPaths distincte dans le wire/rendu | **ÉCART** : NOT RUN | **CONSTRUIRE P1** après qualification du modèle de branches ; test BROWSER + contrôle D6, arbre et repli conditionnel complets |
| **C-12 · Figma 09, CV-T09** | Activités parallèles, synchronisation et gate réel explicités | Pas de famille parallelProcess distincte ; liste relations générique | **ÉCART** : NOT RUN | **CONSTRUIRE P1** ; préserver les voies et la convergence, sans simuler HumanDecision/validation ; test BROWSER Figma 09 |
| **C-13 · GV-06, CV-07, doc 05 §6.4** | Graphique quantitatif seulement si valeurs authentiques, unités/échelles/source établies | Aucun graphique quantitatif automatique ; ECharts non installé | **DIFFÉRÉ CONFORME** | **NE PAS CONSTRUIRE PAR INERTIE** ; ouvrir seulement sur cas chiffré produit et contrôle d'autorité, fournir texte/tableau à défaut |
| **C-14 · VP-08, CV-04/05, CV-T05** | Capacités variables selon contenu/densité/largeur, pas de plafond hérité arbitraire | Admission responsive, mais MAX_ALTS=5 conservé dans le wire ; 8 alternatives → parse null → Markdown | **PARTIEL** : sûreté du repli rapportée, richesse 8–18 non livrée | **COMPLÉTER P1** ; tests sur chemin réel parser→projection→admission→UI, longueurs 2/3/5/8/12/18, enveloppe graphique mesurée ; arbitrage si extension M1 structurante |

### 4.3. C — UX, accessibilité, sécurité et continuité

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-15 · UX-F/UX-010, CV-04/08, CV-T11/12/20** | Pas de contenu coupé ou chevauché à largeur variable, zoom, split et clavier | ResizeObserver, CSS container queries, overflow-wrap et tableaux scrollables | **PARTIEL** : zoom 200–400 %, split 50/50 et audit a11y non terminés | **PROUVER P1** ; 1680/1280/390 selon contexte, split, longue URL, scrollWidth/clientWidth, rectangles, focus, clavier et captures comparables |
| **C-16 · UX-D/E, CT-02, CV-09/13** | Sources actuelles et actions typées seulement ; aucune décision/permission inventée | Références/choix canoniques et ancres repris dans NoraComposition ; contrôles historiques utilisés | **PARTIEL** : la revue du code ne certifie pas les droits dynamiques | **CONSERVER / PROUVER** ; source révoquée, clic de référence, choix périmé, tour non final, aucun effet métier depuis la forme |
| **C-17 · CV-10, doc 05 §8, CV-T15** | Panne d'une section → texte exhaustif et autres sections intactes, sans seconde génération | buildExhaustiveBlockFallback et BlockErrorBoundary ; slice(0,400) supprimé | **PARTIEL** : amélioration code claire, injection d'erreur navigateur non exécutée | **PROUVER** ; bloc > 2500 caractères, comparatif et relations, erreur provoquée, contenu intégral visible, état de tour inchangé |
| **C-18 · VP-07, doc 02 §7, Figma 01–09** | Rendu premium réellement conforme à la direction visuelle et pertinent pour le contenu | Tokens et premiers screenshots cards/liste rapportés ; pas de jugement global Figma↔runtime | **NON PROUVÉ** | **QUALIFIER P1/P2** ; captures comparables par famille/viewport, hiérarchie typographique, densité, icônes/couleurs, revue humaine Morris ; pas d'adoption par seule présence de CSS |
| **C-19 · UX-F, CT-01/05, CV-T16/17/18** | Refresh, relecture, scroll, brouillon et réconciliation sans effet induit | Refresh/T02 rapportés ; 2 FAIL ACK également sur tip clean a783f014 ; UNKNOWN non exécuté dans ce cycle | **PARTIEL**, réserve R05 distincte | **CONSERVER / QUALIFIER** ; non-régression ciblée, maintenir propriétaire R05 et issue d'ACK, ne pas élargir l'implémentation graphique à la réparation métier sans gate |

### 4.4. D — Qualification, réception et gouvernance

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-20 · doc 03 §10, doc 05 §9, CV-T01–20** | Couverture unité/intégration/navigateur/accessibilité et preuves distinctes | **57 Vitest PASS rapportés** ; CV-T : **9 PASS, 6 PARTIAL, 5 NOT RUN** ; tsc 32 erreurs rapportées hors fichiers touchés | **PARTIEL / PREUVES INCOMPLÈTES** | **QUALIFIER** ; tests discriminants et géométrie, comparer erreurs TypeScript à base saine, aucun PASS BROWSER ou LIVE déduit d'unit tests |
| **C-21 · VP-05, GV-01–12, CV-T02/19** | Nora choisit spontanément une représentation utile sur demande libre, avec sources et nuances justes | Fixtures BROWSER et tests déterministes, **LIVE OpenAI NOT RUN** | **NON PROUVÉ** | **RECETTE LIVE SOUS GO DISTINCT** ; cas simple, synthèse projet, R04/R05, choix éditorial argumenté, jugement Morris sur pertinence et naturel |
| **C-22 · SEF, Roadmap R5/ML4D, Gate C** | Réception avant promotion/merge/adoption ; décisions Morris distinctes | Code local non publié ; handoff L3 eb8f6a01 vérifié, NO RELEASE, DEV only | **GATE NON FRANCHI** | **AUCUNE PROMOTION IMPLICITE** ; revue Full, candidate SHA/build prouvé, décision Morris, puis Git/RECETTE/promotions sous mandats séparés |

## 5. WBS de convergence — cinq activités d'un même macro-lot

Les documents 01 §9 et 04 §8 ne fournissent **pas de WBS détaillé autonome**. Ils cadrent cinq **activités intégrées**, sans seuil artificiel de cycles et sans ouvrir un chantier documentaire par défaut. La présente mise en correspondance ne crée pas une nouvelle roadmap normative.

| Activité | Résultat initialement attendu | Situation à date | Preuve ou gate restant |
|---|---|---|---|
| **W1 — Direction artistique** | Maquettes de texte, comparaisons, étapes, dépendances, réponses composites et densités variables | Neuf écrans Figma présents ; orientation acceptée en principe | Comparaison Figma/runtime de vues comparables et revue visuelle Morris |
| **W2 — Contrat fonctionnel et architecture** | Nora/Studio, vérité unique, familles, contrat versionné, repli et compatibilité M1 | Docs 01–05 produits, Strategy B de compatibilité utilisée localement ; intégrité non prouvée | Corriger C-04, qualifier sortie d'E05 C-05 et décisions techniques réellement structurantes |
| **W3 — Construction intégrée** | Rendu spécialisé, intégration, tests, synchronisation doc et nettoyage E05 | Socle React/admission utilisable ; comparaisons et étapes présentes ; graphes avancés non réalisés | C-05, C-10/11/12/14 réalisés ou réduction explicitement arbitrée |
| **W4 — Qualification croisée** | Contrat logique, BROWSER/FAKE, accessibilité, Figma/runtime, non-régression et LIVE borné si autorisé | Tests unitaires significatifs, navigateur partiel, LIVE absent | CV-T discriminants, preuves identifiées par SHA/lane/viewport, qualification des réserves |
| **W5 — Recette produit** | Morris juge contenu, pertinence, finition, continuité, fiabilité | Pas de recette de la cible complète | Décision Morris de réception ; Gate C et adoption séparés |

**Règle de périmètre :** W1–W5 sont des résultats liés à un **macro-lot cohérent**, pas cinq nouveaux lots ni cinq invitations à modifier la gouvernance. Le nouveau contrat Cursor devra réunir code, tests, documentation et preuves sans fragmenter les corrections.

## 6. Carte de réutilisation et priorités

| Traitement | Éléments concernés | Justification |
|---|---|---|
| **CONSERVER** | Séparation D3/Studio ; NoraComposition ; admission locale ; React/CSS ; cartes/matrices et séquences ; références/choix canoniques ; mécanismes de fallback corrigés | Responsabilités pertinentes, premières preuves déterministes, faible intérêt à reconstruire ce qui fonctionne déjà |
| **CORRIGER — P0** | C-04 : intégrité replyDraft / projection ; modes substitute/complement ; admission sémantique sûre | Condition fondatrice ; une structure valide n'est pas une preuve d'équivalence |
| **COMPLÉTER — P1** | C-05/06/14 : voie d'écriture hors wire E05, capacité variable et lecture historique ; C-10/11/12 : diagrammes dirigés, conditions et parallèle | Cœur non livré du résultat utilisateur ; décider les impacts M1/M5 avant mutation structurante |
| **QUALIFIER — P1** | C-08/09/15/17/18/20 : matrice réelle, largeurs/zoom/split, fallback en erreur, esthétique, accessibilité et preuves | La seule conformité de code ne satisfait pas la réception UX |
| **PRÉSERVER / RÉGULARISER À LA BONNE FRONTIÈRE** | C-16/19 : droits, choix expirés, ACK R05/UNKNOWN, brouillon, idempotence | Ne pas effacer les dettes historiques et ne pas dévier vers un second moteur d'effets |
| **DIFFÉRER SOUS CONDITION** | C-13 : graphiques quantitatifs sans besoin réel établi ; C-21 : LIVE jusqu'au GO spécifique | Éviter coûts/risques gratuits et faux claims REAL |
| **GATE MORRIS** | C-22 : revue, décision de périmètre, Git/PR/RECETTE et adoption | Construction locale ≠ preuve ≠ ADOPTED |

### 6.1. Dépendances d'exécution

1. **Sécuriser l'invariant C-04 avant toute substitution de corps.** Un mode purement textuel sûr peut être conservé pendant la qualification. Éviter de créer une seconde forme cognitive pour résoudre le problème de rendu.
2. **Qualifier la transition C-05/06/14 avant de construire les nouvelles familles.** Si le wire E05 ne sait pas porter conditions, branches, voies et provenance, il ne faut ni inventer ces relations au niveau du CSS ni prolonger le wire par bricolage implicite. Choix d'architecture M1 structurant → proposition documentée à Morris, STOP avant mutation non autorisée.
3. **Réaliser C-10/11/12 avec le même modèle de représentation.** Les besoins sont liés mais ne justifient pas un moteur de dessin arbitraire ; benchmark de graphes sur fixtures réelles avant sélection de bibliothèque. Repli relationnel complet obligatoire.
4. **Qualifier au fil de la construction, pas en fin de chantier.** Scénarios CV-T de refus, largeur, erreur, sources, historique et géométrie rattachés à chaque famille implémentée ; preuves Browser comparables aux maquettes.
5. **Soumettre à Morris le produit réellement observé.** Les tests FAKE ne prouvent pas que Nora décide judicieusement de la forme de sa réponse en LIVE, ni que la direction artistique est reçue.

### 6.2. Deux distinctions à ne pas confondre

- **Option B du dossier 01** : architecture produit de composition adaptative maîtrisée, avec responsabilités Nora/Studio et familles visuelles contrôlées.
- **Strategy B du candidat Cursor** : stratégie de compatibilité où **replyDraft** reste canonique et un ancien wire fournit une projection visuelle facultative.

La seconde n'implique pas, à elle seule, la conformité à la première. Elle peut être une **tranche de transition**, non la cible finale adoptée.

**De même :** « repli relationnel PASS » ne signifie pas « diagramme dirigé Figma 07 PASS ». La preuve de sûreté et la preuve de capacité sont deux assertions distinctes.

## 7. Contrat de preuve et oracles de sortie

**Règle de lecture de la matrice CV-T issue du handoff :** 9 PASS, 6 PARTIAL, 5 NOT RUN ; les niveaux sont hétérogènes et ne démontrent pas une capacité complète. Les résultats restent ceux **rapportés par Cursor**, non réexécutés ici.

| Exigence de sortie | Scénarios discriminants | Preuve exigée |
|---|---|---|
| Vérité et autorité | C-04, C-16 ; CV-02/06/09 | Tests contradictoires texte/visuel, actions non déclenchées, provenance et qualification conservées ; aucun substitute non justifié |
| Contrat et compatibilité | C-05/06/14 ; CV-T05/16/18 | Parser réel → D3 → projection → admission → UI, replay ancien/nouveau, seuils mesurés, M5 sans migration non autorisée |
| Matrice et parcours | C-08/09 ; CV-T03/04/06 | BROWSER avec données représentatives et captures Figma 03/04/02/06 ; réserves/critères visibles |
| Relations, arbre, parallèle | C-10/11/12 ; CV-T07/08/09/10 | BROWSER sur Figma 07/08/09, relations et conditions exactes ; repli structuré si graphe illisible |
| Reflow, accessibilité et erreur | C-15/17/18 ; CV-T11/12/15/20 | Viewport/largeur Travail, zoom, split 50/50, clavier, erreurs provoquées, captures et métriques de débordement |
| Continuité | C-02/06/16/19 ; CV-T13/16/17/18 | Identité, refresh, droits actuels, choix expirés, UNKNOWN et ACK qualifiés à leur propriétaire réel |
| Pertinence Nora LIVE | C-01/07/21 ; GV-T01/02/07/12 ; CV-T02/19 | Essais sous GO LIVE/REAL borné, sources et décision éditoriale pertinentes, jugement Morris |
| Réception/gates | C-20/22 | Review Pack FULL mono-cycle, état Git local, diffs exploitables, SHA/lane, handoff L3, décision Morris distincte |

**Règle de verdict :** distinguer DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED. Un test unitaire PASS ou une capture de fixture ne valide ni le choix spontané de Nora, ni le pixel-final, ni un gate programme.

## 8. Décisions et points STOP pour le prochain contrat Cursor

Le prochain contrat technique ne doit **pas** rouvrir la vision A–F ni redéfinir les propriétaires D3–D9. Il doit préciser le travail sur le même candidat local et ses frontières d'autorité.

**Points à soumettre à Morris si structurants :**

1. **Format de la réponse cible :** Strategy B sûre et bornée ou sortie vers sections canoniques ; évaluer coûts/SDK/outputType/replay/compatibilité avant toute évolution de M1. Une validation D2 peut être nécessaire si le contrat normatif est modifié.
2. **Sortie de l'écriture E05 :** identifier le format de transition et son exit ; ne jamais supprimer la compatibilité historique sans preuve de relecture.
3. **Périmètre graphique à recevoir :** Figma 07–09 effectivement inclus dans la cible retenue, sauf arbitrage Morris de réduction explicite. Ne pas présenter l'absence comme une livraison complète.
4. **Technologie de layout :** comparer sur les mêmes scénarios le moyen le plus simple qui produit un graphe dirigé vérifiable, sans imposer ELK/React Flow/ECharts par principe.
5. **Réserves hors périmètre :** ACK/UNKNOWN R05 et erreurs TypeScript préexistantes qualifiées, sans les masquer ni les « réparer » en élargissant silencieusement ce lot.
6. **Proof gates :** séparation DEV/RECETTE/STABLE, BROWSER/FAKE vs LIVE/REAL, GO spécifique pour toute mutation extérieure, aucune adoption anticipée.

**STOP obligatoire** en cas de migration/table DB indispensable, changement d'autorité, double source de vérité, effet métier nouveau, incompatibilité SDK, retrait E05 détruisant l'historique, code local divergent du handoff, modification de chemins protégés ou publication projet non autorisée.

## 9. Verdict et suite

| Axe | Verdict de convergence |
|---|---|
| Vision produit et principes UX A–F | Cohérents avec les responsabilités, couverture encore incomplète |
| Architecture Nora/Studio | Socle réutilisable |
| Contrat de vérité | **BLOQUANT C-04** |
| Retrait E05 | **INCOMPLET C-05** |
| Comparaison et séquences | Partiellement implémentées, à prouver sur runtime représentatif |
| Dépendances/conditions/parallèle | **CAPACITÉS NON LIVRÉES C-10/11/12** |
| Performance visuelle / accessibilité | Non démontrées sur toute l'enveloppe cible |
| LIVE / recette Morris / Gate C | Non réalisés, non acquis |

**Recommandation :** préserver les fondations pertinentes, **corriger la vérité canonique puis compléter le remplacement d'E05 et les familles graphiques prévues**, avec tests et documentation dans un macro-lot intégré. Ne pas réduire silencieusement la cible à la V1 limitée actuelle et ne pas recommencer inutilement la construction de ce qui fonctionne.

**Prochaine étape conditionnée à revue Morris :** qualifier puis instancier le **nouveau contrat d'exécution Cursor SFIA v2.6** sur les écarts C-04, C-05, C-10/11/12, C-14 et les preuves C-08/09/15/17/18/20, en préservant C-02/03/06/16/19. Vérifier à nouveau Git local, les sources canoniques SFIA v2.6 et les décisions applicables avant toute exécution. Cette étape n'est pas autorisée par la seule publication de la présente analyse.

**Autorité et publication :** ce document est une contribution documentaire non normative D1 bornée au dossier de grammaire visuelle ML4D. Il ne modifie ni SEF, ni Roadmap, ni décisions, ni code, ni contrats 01–05. Publication Git sur branche documentaire candidate uniquement ; aucun merge, PR, push produit ni ADOPTED implicitement décidé.
