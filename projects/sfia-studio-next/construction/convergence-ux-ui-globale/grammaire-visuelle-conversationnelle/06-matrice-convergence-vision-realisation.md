# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.3 — 18 novembre 2026 (revue du Review Pack Full `27f403d2`)  
**Statut :** DOCUMENTED / REVIEW CANDIDATE — mise à jour factuelle et critique après cycle correctif, non décision D2, non VALIDATED SPEC supplémentaire, non ADOPTED.  
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora » ; restitution conversationnelle adaptative, remplacement du mécanisme graphique expérimental E05.  
**Nature :** bilan de conformité entre la vision et les contrats documentés, le candidat technique rapporté par Cursor et les preuves disponibles. **Il ne vaut ni réception technique, ni GO Cursor, ni réduction de périmètre.**  
**Amont :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Conception fonctionnelle et UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture candidate](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Objet, portée de la revue et réponse générale

**Question :** la dernière exécution locale F1–F5 satisfait-elle les contrats 01–05, les 22 critères C-01–C-22 et les conditions de réception identifiées ?

**Conclusion actualisée :** la republication `27f403d2` est **un Review Pack Full exploitable**, et les corrections F1–F4 sont examinables dans le code. Le mécanisme a progressé : davantage de champs contrôlés, détection des cycles et racines multiples, disposition des dépendances en couches, écriture `conversational-composition-projection-v1` restreinte dans `VisualCompositionAgentOutputSchema`, lecture des deux versions maintenue. **Ces améliorations ne prouvent pas encore la fidélité sémantique et graphique de la cible.**

**Écarts qui restent ouverts :**
1. **C-04 / F1 — BLOQUANT :** `claimsSupportedByCanonical()` utilise `normalize(replyDraft).includes(claim)`. La présence globale des mots ne démontre pas leur association à l'option, à la condition, à la source, au sens de l'arête ou à son statut. `maySubstituteNarrative()` autorise aussi une composition textuelle incluse dans `replyDraft` à masquer le reste de la réponse.
2. **C-11 / F2 — PARTIEL, risque sémantique :** `topology.ts` refuse bien cycles et forêts multi-racines, mais `validateDecisionTree()` accepte encore un DAG à racine unique où un enfant possède plusieurs parents ; le rendu récursif peut dupliquer ce nœud sous plusieurs branches et fausser la lecture de l'arbre.
3. **C-10/12 / F3 — PARTIEL :** dépendances en couches CSS avec arêtes `A → B` listées séparément, sans connexions nœud→nœud mesurées ; processus parallèle affichant les lanes et les seuls liens `sync`, pas tous les `flow`/`depends_on` possibles.
4. **C-05/06 / F4 — AMÉLIORATION CODE RECEVABLE :** nouveau schéma seul en WRITE (littéral Zod), ancien et nouveau acceptés en READ. Le pipeline SDK/D3→persistance→relecture n'est pas prouvé de bout en bout.
5. **C-15/18/20/21 / F5 — PREUVES PARTIELLES :** **24 tests unitaires F1/F2/F4 PASS et T02 Playwright 1 PASS rapportés** ; les trois PNG sont mentionnés mais non inspectables depuis le handoff distant. Aucune comparaison visuelle complète aux Figma 07–09, ni test LIVE/REAL.

**Statut de revue :** `STOP — CORE SEMANTIC FIDELITY NOT PROVEN`, **sans nier** les corrections code effectives et sans transformer ce STOP du sous-système en échec de l'ensemble de ML4D. La construction locale ne vaut ni réception Morris ni Gate C ni ADOPTED. Le reste à faire détaillé §10–11 constitue une **proposition de convergence**, pas une décision D2.

## 2. Sources, versions et limites d'observation

| Source | Référence vérifiée | Portée |
|---|---|---|
| Dépôt | mcleland147/sfia-workspace | Projet Next : projects/sfia-studio-next/ |
| Git main | 997d4c4e8204993de7107552898c8cc08cd3b0ed | SEF v0.2, Roadmap, décisions, code baseline ; la Roadmap est datée du 15/11/2026 |
| Branche documentaire ML4D | docs/next-ml4d-registre-revues-20261116 @ 37915d8e1d6f03a0a335c884aea03fb3e3262159 (avant cette révision) | Documents 01–05, UX Travail avec Nora et contrat technique, non mergés sur main |
| Dernier Review Pack Cursor | sfia/review-handoff @ 27f403d257851e327a03e2b58f2cbaa437130e00 | Review Pack F1–F5 republié : 8 créations reproduites, 8 diffs, tests 24 UNIT PASS/T02 1 PASS rapportés et chemins de captures |
| Blob du handoff | e78b7f3a40d8767e3933dd486ffa86d92469535d | Intégrité du fichier distant |
| Branche projet technique | sfia/next-ml4d-composition-adaptative ; tip local rapporté a783f014935de0dec5ff8e79a2b18eea0e629756 | Branche non trouvée sur origin ; `a783f014` et correctifs dans un working tree local non commité (rapport Cursor ; état local NON OBSERVÉ) |
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
| **C-01 · VP-01, UX-A/B, GV-01/10** | Nora choisit librement une représentation seulement si elle aide son raisonnement | Nouveau write versionné et plusieurs familles de blocs ; pertinence spontanée démontrée uniquement sur fixtures | **PARTIEL** : comportement de sélection Nora en LIVE non prouvé | **CONSERVER / RECETTER PLUS TARD** ; tests éditoriaux représentatifs sans interface imposée, LIVE sous GO distinct |
| **C-02 · VP-02, UX-C/F** | Un seul message Nora mélange texte, visuels, références et choix gouvernés | NoraConversation intègre plusieurs blocs sous une identité de message | **ALIGNÉ (CODE)** ; continuité sur tous contextes non prouvée | **CONSERVER / PROUVER** ; T02, refresh, relecture longue, conservation des IDs, UX-002 et UX-CROSS |
| **C-03 · VP-06, doc 03 §2** | Nora possède le sens et l'intention ; Studio possède validation et rendu | admission.ts, NoraComposition, React/CSS, aucun second agent introduit | **ALIGNÉ (ARCHITECTURE)** | **CONSERVER** ; test d'absence d'autorité/effecteur supplémentaire, aucun parsage HTML/Markdown déclenchant une action |
| **C-04 · VP-03/04, UX-D, CV-02/06** | Une vérité canonique : aucun fait, nuance, association ni condition perdus/inventés | `extractProjectionClaims` étend les fragments testés, `includes` normalisé dans `claimsSupportedByCanonical`; `detectPreferenceContradiction` couvre certains patterns ; `maySubstituteNarrative` accepte texte ⊆ canon | **BLOQUANT F1** : fragments présents ≠ mêmes assertions/contextes ; rôles des arêtes et association option→avantage non vérifiés ; `substitute` peut omettre un suffixe canonique | **P0 / ARBITRAGE SI STRUCTURANT** : empêcher complément non fondé et substitution partielle, tester inversion de champs/conditions/liens/autorités ; comparer Strategy B bornée et sections canoniques sans pivot silencieux |
| **C-05 · doc 04 §3.2/8, doc 05 §10** | Écriture hors E05 avec lecture d'historique conservée | `VISUAL_COMPOSITION_SCHEMA` = `conversational-composition-projection-v1`; `VisualCompositionAgentOutputSchema` a `z.literal` nouveau ; parse dual READ | **ALIGNÉ (CODE F4)** ; aucune preuve de sortie SDK/écriture réelle via Nora et replay historique complet | **CONSERVER / PROUVER P1** : test frontière D3/SDK typé, effet de parse/persistance/reload, refus legacy à l'émission, lecture legacy sur ancien tour |
| **C-06 · M1/M5, CT-02, CV-11** | Un message stable, versionné, relecture ancienne/nouvelle sans migration implicite | Schéma WRITE nouveau + parser READ dual prouvés en unit ; historique local et DB non audités dans le handoff | **PARTIEL** : compatibilité de parse ≠ reprise de données et IDs en runtime | **PROUVER P1** : tours anciens/nouveaux, références/choix, refresh/PG et preuve de non-migration ; STOP si contrat D3/DB change |

### 4.2. B — Familles fonctionnelles et richesse graphique

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-07 · UX-A/B, GV-01/02, CV-01** | Texte naturel par défaut si forme graphique inutile | SafeMarkdown et variante markdown_only ; narration facultative | **ALIGNÉ (MÉCANISME)** | **CONSERVER / PROUVER** ; texte court sans carte ni décor imposés, puis test de choix éditorial Nora |
| **C-08 · doc 02 §5/6, Figma 03/04, CV-T03/04** | Comparaison intégrale cartes/matrice/stacked et données exactes | Code matrice+détails ; T02 S3 comparatif et capture rapportés, admission comparative testée | **PARTIEL** : la fidélité C-04 est préalable ; pas d'audit visuel matrice dense 5/8/12 options | **PROUVER P1** : navigateur cartes/matrice/stacked, toutes les alternatives et critères, liens des avantages/limites, largeurs et données longues |
| **C-09 · Figma 02/06, GV-04, CV-T06** | Étapes/planning avec ordre réel, horizontal/vertical selon largeur, sans causalité inventée | Séquence React/CSS et bascule vertical/horizontal | **PARTIEL** : preuve restreinte à fixture et largeur testées | **COMPLÉTER** ; 4–6 étapes, prérequis, dates ou absence de dates, panneau réduit et reflow |
| **C-10 · Figma 07, GV-05, CV-T07** | Dépendances dirigées, liens et sens intuitifs, repli sans perte | `topologicalLayers()`, groupes de nœuds CSS, arêtes orientées rendues en lignes séparées avec `data-directed=1` | **PARTIEL F3** : aucune géométrie de connexions nœud→nœud démontrée ; l'attribut `data-directed` n'est pas une preuve Figma 07 | **COMPLÉTER/QUALIFIER P1** : vérifier lecture relationnelle et connecteurs véritables en BROWSER ; si CSS insuffisant, benchmark borné layout dédié ; préserver liste alternative |
| **C-11 · Figma 08, CV-T08** | Arbre conditionnel sûr, branches non ambiguës et aucune décision créée | `validateDecisionTree()` refuse cycle, orphelin, multi-racine, déconnexion ; `renderBranch()` arbre imbriqué | **PARTIEL F2** : DAG monoracine à nœud partagé (in-degree >1) accepté comme arbre ; duplication possible ; pas de preuve géométrique Figma | **CORRIGER P0** : invariant arborescent (un parent pour chaque nœud non-racine), choix sûr pour DAG réels, conditions oui/non uniques, cas shared-child et tests BROWSER de repli |
| **C-12 · Figma 09, CV-T09** | Voies parallèles, ordre local, toutes les relations et convergence fidèles | Lanes CSS, affichage explicite des seuls liens `sync`, label `↔` dans la présentation | **PARTIEL F3** : liens `flow`/`depends_on` non visibles dans le rendu dirigé ; `↔` peut induire une réciprocité non attestée | **CORRIGER P1** : restituer toutes les arêtes qualifiées ou refuser le dirigé ; expliciter la sémantique sync, tester processus mixtes, reprises et fallback |
| **C-13 · GV-06, CV-07, doc 05 §6.4** | Graphique quantitatif seulement si valeurs authentiques, unités/échelles/source établies | Aucun graphique quantitatif automatique ; ECharts non installé | **DIFFÉRÉ CONFORME** | **NE PAS CONSTRUIRE PAR INERTIE** ; ouvrir seulement sur cas chiffré produit et contrôle d'autorité, fournir texte/tableau à défaut |
| **C-14 · VP-08, CV-04/05, CV-T05** | Variantes adaptées au contenu, cardinalité et conteneur mesurés | MAX_ALTS=12 ; huit admises, dix-huit rejetées au parse en unités antérieures | **PARTIEL** : politique honnête au parse, capacité BROWSER 12 options et liste de repli non démontrées | **PROUVER P1** : vrai chemin D3/parse/admission/UI 2/3/5/8/12/18, densité et largeurs mesurées ; ne pas inventer la capacité 18 |

### 4.3. C — UX, accessibilité, sécurité et continuité

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-15 · UX-F/UX-010, CV-04/08, CV-T11/12/20** | Adaptation réelle au panneau Travail, split, zoom et accessibilité | CSS container, seuils et composants ; T02 1440 rapporté sans mesures d'overflow ou zoom détaillées | **PARTIEL** : affichage nominal ≠ géométrie ni navigation clavier prouvées | **PROUVER P1** : split 50/50, conteneur réduit, 390/1280/1440, zoom 200–400 %, longs labels, mesures géométriques, focus/ordre DOM |
| **C-16 · UX-D/E, CT-02, CV-09/13** | Sources actuelles et actions typées seulement ; aucune décision/permission inventée | Références/choix canoniques et ancres repris dans NoraComposition ; contrôles historiques utilisés | **PARTIEL** : la revue du code ne certifie pas les droits dynamiques | **CONSERVER / PROUVER** ; source révoquée, clic de référence, choix périmé, tour non final, aucun effet métier depuis la forme |
| **C-17 · CV-10, doc 05 §8, CV-T15** | Erreur de composant isolée, alternative exhaustive et aucun effet D3 | `buildExhaustiveBlockFallback` sans coupe + error boundary présents dans code relu | **PARTIEL** : test long en unité, injection d'erreur réelle BROWSER non prouvée | **PROUVER P1** : faire échouer une section, comparer tous champs/relations, conserver les autres et l'état conversationnel |
| **C-18 · VP-07, doc 02 §7, Figma 01–09** | Qualité éditoriale premium et cohérence Figma/runtime par famille | F5 : 3 PNG 1440 rapportés pour deps/tree/parallel ; chemins seulement dans le handoff ; CSS accessible | **NON PROUVÉ** : captures non inspectables à distance, pas de verdict comparatif Figma 07–09 ni cas étroits | **PROUVER P1** : transmettre/capter images réellement inspectables, documenter viewport/largeur/contenu, comparer aux Figma natifs, revue Morris |
| **C-19 · UX-F, CT-01/05, CV-T16/17/18** | Refresh, relecture, scroll, brouillon et réconciliation sans effet induit | Refresh/T02 rapportés ; 2 FAIL ACK également sur tip clean a783f014 ; UNKNOWN non exécuté dans ce cycle | **PARTIEL**, réserve R05 distincte | **CONSERVER / QUALIFIER** ; non-régression ciblée, maintenir propriétaire R05 et issue d'ACK, ne pas élargir l'implémentation graphique à la réparation métier sans gate |

### 4.4. D — Qualification, réception et gouvernance

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-20 · doc 03 §10, doc 05 §9, CV-T01–20** | Qualification séparée UNIT/PG/BROWSER/LIVE avec véritables oracles | Handoff 27f403d2 : fichiers/tests complets ; **24 Vitest ciblés PASS et T02 Playwright 1 PASS rapportés** ; suite 65 PASS du cycle antérieur non réexécutée dans ce pack | **PARTIEL** : test d'associations inversées, DAG partagé et relations mixtes non présents ; TypeScript/build/PG et images non requalifiés dans ce pack | **COMPLÉTER P1** : adversariaux F1/F2/F3, scénarios CV-T au niveau requis, re-run régressions, tsc baseline (32 erreurs antérieures rapportées), preuves runtime |
| **C-21 · VP-05, GV-01–12, CV-T02/19** | Choix spontané d'une forme utile par Nora, sources fidèles et nuances | Seulement fixtures FAKE/T02, pas de trajet fournisseur LIVE | **NON PROUVÉ** | **RECETTE LIVE SOUS GO MORRIS DISTINCT** ; essais de demandes libres, jugement éditorial et coût/SDK prouvés sans annoncer REAL |
| **C-22 · SEF, Roadmap R5/ML4D, Gate C** | Recevoir le candidat traçable sous décision Morris puis promouvoir séparément | Handoff Full distant `27f403d2` exploitable ; branche code locale non poussée/WT dirty ; Roadmap main ML4D NOT STARTED (snapshot 15/11) | **GATE NON FRANCHI** : pas de candidat Git produit vérifiable, pas de recette, Gate C OPEN | **PRÉSERVER GATES** : qualification et commit local sous mandat, révision Morris, autorisation Git/recette/promotion spécifique ; doc de roadmap protégée non modifiée ici |

## 5. WBS de convergence — cinq activités d'un même macro-lot

Les documents 01 §9 et 04 §8 ne fournissent **pas de WBS détaillé autonome**. Ils cadrent cinq **activités intégrées**, sans seuil artificiel de cycles et sans ouvrir un chantier documentaire par défaut. La présente mise en correspondance ne crée pas une nouvelle roadmap normative.

| Activité | Résultat initialement attendu | Situation à date | Preuve ou gate restant |
|---|---|---|---|
| **W1 — Direction artistique** | Maquettes de texte, comparaisons, étapes, dépendances, réponses composites et densités variables | Neuf écrans Figma présents ; orientation acceptée en principe | Comparaison Figma/runtime de vues comparables et revue visuelle Morris |
| **W2 — Contrat fonctionnel et architecture** | Nora/Studio, vérité unique, familles, contrat versionné, repli et compatibilité M1 | WRITE-only nouveau confirmé dans code ; stratégie de correspondance B sémantiquement non sûre | Comparer les voies du contrat 05 et faire arbitrer toute extension D3 structurante ; qualifier F1 |
| **W3 — Construction intégrée** | Rendu spécialisé, intégration, tests, synchronisation doc et nettoyage E05 | `topology.ts`, couches CSS, comparaisons et READ dual présents ; DAG shared-child et flux parallèles incomplets | Corriger F2/F3, conserver le code sain et l'historique, achever l'expérience graphique réelle |
| **W4 — Qualification croisée** | Contrat logique, BROWSER/FAKE, accessibilité, Figma/runtime, non-régression et LIVE borné si autorisé | Pack Full complet ; 24 PASS ciblés + T02 PASS rapportés ; PNGs non inspectés, aucune recette LIVE | Tests adversariaux, géométrie Figma, PG/refresh, accessibilité et typecheck documentés avec preuves inspectables |
| **W5 — Recette produit** | Morris juge contenu, pertinence, finition, continuité, fiabilité | Pas de recette de la cible complète | Décision Morris de réception ; Gate C et adoption séparés |

**Règle de périmètre :** W1–W5 sont des résultats liés à un **macro-lot cohérent**, pas cinq nouveaux lots ni cinq invitations à modifier la gouvernance. Le nouveau contrat Cursor devra réunir code, tests, documentation et preuves sans fragmenter les corrections.

## 6. Carte de réutilisation et priorités

| Traitement | Éléments concernés | Justification |
|---|---|---|
| **CONSERVER** | D3/Studio séparés ; renderer React/CSS ; admission, fallback ; cartes/matrices, séquences ; détection de cycles ; write-only nouveau/read ancien | Fondations réutilisables, pas de reconstruction générale |
| **CORRIGER — P0** | C-04 : contexte et liens entre assertions, aucune substitution narrative partielle ; C-11 : vrai invariant arbre et chemin DAG partagé | Intégrité de l'information et rendu potentiellement trompeur avant toute réception |
| **COMPLÉTER — P1** | C-10/12 : dessin/lecture des dépendances et exhaustivité arêtes parallèles ; C-05/06 : tests du pipeline WRITE/READ historique | Le schema et les vues existent ; le comportement global et la qualité de disposition restent à prouver |
| **QUALIFIER — P1** | C-08/09/14/15/17/18/20 : cas limites, matrice, split, zoom, fallback, a11y, Figma/runtime | Fichier PNG cité ≠ image inspectée ; test de présence ≠ géométrie et sens |
| **PRÉSERVER / RÉGULARISER À LA BONNE FRONTIÈRE** | C-16/19 : droits, choix expirés, ACK R05/UNKNOWN, brouillon, idempotence | Ne pas effacer les dettes historiques et ne pas dévier vers un second moteur d'effets |
| **DIFFÉRER SOUS CONDITION** | C-13 : graphiques quantitatifs sans besoin réel établi ; C-21 : LIVE jusqu'au GO spécifique | Éviter coûts/risques gratuits et faux claims REAL |
| **GATE MORRIS** | C-22 : revue, décision de périmètre, Git/PR/RECETTE et adoption | Construction locale ≠ preuve ≠ ADOPTED |

### 6.1. Dépendances d'exécution

1. **Traiter C-04 au niveau des associations, et non des fragments isolés.** Une phrase présente dans `replyDraft` mais attachée à la mauvaise option, condition ou arête reste dangereuse ; `substitute` narrative doit préserver tout le canonique. Étudier le coût d'une source commune de sens avant toute décision D3.
2. **Conserver l'acquis F4 et prouver l'intégration D3 M1.** Le schéma d'émission est maintenant `z.literal(projection-v1)` ; le parser accepte les deux versions à la relecture. Tester l'émission/SDK, la sérialisation et l'historique, sans écrire dans l'ancienne version.
3. **Finaliser l'intégrité des graphes C-10/11/12.** La détection des cycles est acquise en code ; traiter le DAG partagé non arborescent et toutes les arêtes parallèles. Un layout CSS ne devient un diagramme validé que sur preuve de compréhension et géométrie en navigateur.
4. **Qualifier au fil de la construction, pas en fin de chantier.** Scénarios CV-T de refus, largeur, erreur, sources, historique et géométrie rattachés à chaque famille implémentée ; preuves Browser comparables aux maquettes.
5. **Soumettre à Morris le produit réellement observé.** Les tests FAKE ne prouvent pas que Nora décide judicieusement de la forme de sa réponse en LIVE, ni que la direction artistique est reçue.

### 6.2. Deux distinctions à ne pas confondre

- **Option B du dossier 01** : architecture produit de composition adaptative maîtrisée, avec responsabilités Nora/Studio et familles visuelles contrôlées.
- **Strategy B du candidat Cursor** : `replyDraft` reste canonique et une projection graphique facultative utilise désormais le **nouveau schéma en écriture**, tout en conservant la lecture historique du wire E05.

La seconde n'implique pas, à elle seule, la conformité à la première. Elle peut être une **tranche de transition**, non la cible finale adoptée.

**De même :** « repli relationnel PASS » ne signifie pas « diagramme dirigé Figma 07 PASS ». La preuve de sûreté et la preuve de capacité sont deux assertions distinctes.

## 7. Contrat de preuve et oracles de sortie

**Règle de lecture :** l'ancienne matrice CV-T (9 PASS / 6 PARTIAL / 5 NOT RUN) concernait le **cycle précédent** et ne vaut pas certification du candidat F1–F5. Le handoff `27f403d2` rapporte 24 tests ciblés PASS et T02 PASS, plus un tableau F1–F5 ; il ne fournit **pas** une requalification exhaustive de tous les CV-T. Tous les résultats d'exécution restent rapportés par Cursor, non réexécutés ici.

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

## 9. Verdict de la revue du handoff `27f403d2`

| Axe | Qualification vérifiée |
|---|---|
| Review Pack | **FULL EXPLOITABLE** : 8 nouveaux fichiers intégraux + 8 diffs, tests discriminants reproduits ; publication Git handoff vérifiée |
| Vision et séparation Nora/Studio | **ALIGNÉES AU NIVEAU ARCHITECTURAL**, sans comportement spontané LIVE prouvé |
| F1 / C-04 | **BLOQUANT** : contrôle lexical `includes` sans association ni contexte, substitution narrative par sous-texte |
| F2 / C-11 | **PARTIEL** : cycles et multi-racines détectés, mais DAG monoracine à nœud partagé toujours accepté comme arbre |
| F3 / C-10/12 | **PARTIEL** : couches et liens textuels, graphes parallèles sans tous les liens de flux/dépendance |
| F4 / C-05/06 | **CORRECTION CODE RECEVABLE** : nouveau WRITE et READ dual ; test SDK/PG/replay complet restant |
| F5 / C-15/18/20 | **PARTIEL** : 24 Vitest PASS + T02 PASS rapportés ; PNG seulement cités dans le pack, sans inspection distante |
| C-21 / LIVE | **NOT RUN** |
| Gate C / adoption | **NON ACQUIS**, code produit non publié et non recetté |

**Verdict ChatGPT : `STOP — CORE SEMANTIC FIDELITY NOT PROVEN`.** Ce jugement concerne la réception **de ce sous-système**, pas la totalité du programme. Le `READY WITH RESERVES` Cursor constate seulement une progression DEV. L'architecture générale est réutilisable et le changement F4 n'est pas à refaire.

## 10. Findings réactualisés — constats, non hypothèses de correctif

### F1 — C-04 / P0 : fragments supportés ≠ assertions fidèles

**Preuve :** `fidelity.ts` §6.1 du pack vérifie `normalize(canonical).includes(normalize(claim))` sur des fragments indépendants (titre, `summary`, `pros`, `cons`, critères, recommandation, labels). Le code ne qualifie pas l'association option→attribut, la portée conditionnelle, l'autorité ou le rôle d'une relation. `detectPreferenceContradiction()` reconnaît seulement certains motifs linguistiques FR. `maySubstituteNarrative()` accepte une composition narrative qui est sous-chaîne du canonique au lieu d'exiger la conservation de tout le texte.

**Contre-exemples à prouver par tests négatifs :**
- les mêmes avantages et limites présents dans le texte, mais attribués aux mauvaises options ;
- une condition `si` vraie dans le canonique qui devient `si non` dans le visuel ;
- deux relations opposées portant les mêmes libellés de nœuds ;
- un statut `hypothèse` transformé en fait sans nouveau mot lexical ;
- le texte narratif tronqué par substitution à une sous-partie du `replyDraft` complet.

**Sortie attendue :** aucun graphique ne prétend représenter fidèlement une assertion si son rattachement n'est pas déterministe ; texte canonique intégral en cas d'incertitude. La voie « sections sémantiques canoniques » du document 05 doit être examinée **comme option de conception**, pas activée sans analyse M1 et GO D2.

### F2 — C-11 / P0 : vrai arbre vs DAG valide

**Preuve :** `topology.ts` §6.2 vérifie bien cycles, racine unique, connexion et arêtes orphelines. Il n'exige pas `inDegree = 1` pour chaque nœud non-racine. Deux branches peuvent donc rejoindre un même enfant qui sera rendu deux fois par `renderBranch()`.

**Sortie attendue :** refuser le mode arbre pour DAG à enfants partagés, ou utiliser une représentation de graphe adéquate sans duplication sémantique ; vérifier conditions `condition_true/false`, unicité des branches et repli humain exhaustif. Conserver les tests cycle/multi-racine PASS.

### F3 — C-10/12 / P1 : présentation dirigée et exhaustivité

**Preuve :** `NoraComposition.tsx` §6.5 montre `topologicalLayers()` + cartes par couches et arêtes en liste pour `dependencies` ; `parallelProcess` affiche `syncEdges` seulement. Les tests Playwright contrôlent des attributs `data-layout`/`data-directed` et la visibilité, pas un réseau de connecteurs réellement fidèles.

**Sortie attendue :** représenter dans le rendu (ou alternative clairement identifiée) tous les liens et leurs sens sans inventer de connexions. Un vrai diagramme Figma 07–09 ne doit être déclaré PASS qu'après revue navigateur/ géométrie ; si CSS ne suffit pas, qualifier un layout dédié proportionné et obtenir tout GO structurant requis.

### F4 — C-05/06 / P1 : nouveau WRITE / ancien READ — avancer sans régressions

**Preuve :** diff §7.1, `VisualCompositionAgentOutputSchema.schemaVersion = z.literal(VISUAL_COMPOSITION_SCHEMA)`, où le littéral est `conversational-composition-projection-v1`; `parseVisualCompositionDetailed()` conserve les deux versions et préserve celle d'origine. Le test `VisualCompositionAgentOutputSchema.safeParse(legacy)` est négatif, celui de la nouvelle version est positif.

**Sortie attendue :** tester la frontière `@openai/agents` en mode contrôlé, la projection D3 et le replay historique en API/PG/BROWSER lorsque pertinent ; ne pas réouvrir l'écriture legacy, ne pas introduire de migration.

### F5 — C-08/09/14/15/17/18/20/21 / P1 : qualification ciblée et recette ultérieure

**Preuve :** pack §8 (24 PASS UNIT et 1 PASS BROWSER rapportés), preuves PNG listées (Figma 07–09) mais non disponibles en lecture distante. La suite de 65 unités et les 32 diagnostics tsc/0 fichiers touchés correspondent au cycle **antérieur**, sans nouvelle exécution documentée dans la republication F1–F5.

**Sortie attendue :** cas adversariaux F1/F2/F3 ; navigateur Figma 03/04/07/08/09 réellement comparé, métriques de débordement, split/zoom, accessibilité, erreur/repli, anciens tours et références ; rendre les PNG inspectables par un canal autorisé ; LIVE seulement sous mandat distinct.

## 11. Reste à faire priorisé — proposition de trajectoire

| Priorité | Résultat à obtenir / C-IDs | IN et action utile | Preuve de sortie et gate |
|---|---|---|---|
| **P0-A — Arbitrage vérité unique** | C-04, C-01, W2 | Analyser Strategy B actuelle vs sections sémantiques canoniques du document 05 ; quantifier SDK/outputType, schéma D3, historique, persistance, effort et effet sur le résultat utilisateur. Ne pas empiler des heuristiques `includes` en promettant une garantie impossible. | Proposition d'architecture bornée, choix Morris **D2 si structurant** ; aucune mutation majeure avant GO |
| **P0-B — Correction de fidélité** | C-04, C-17 | Mettre en œuvre la politique compatible avec l'arbitrage (canonique intégral toujours visible si non prouvable ; projection sûre quand correspondance réellement déterministe). | Tests inversions d'options, conditions, rôle/autorité, relations et substitution partielle ; absence de faux `complement/substitute` |
| **P0-C — Topologie des arbres** | C-11, C-12 | Détecter et replier DAG non arborescents, conditions ambiguës et nœuds partagés ; préserver cycles/multi-racines déjà couverts. | Tests graphes adversariaux UNIT + BROWSER, aucune duplication/mauvaise lecture, liste exhaustive en cas de refus |
| **P1-A — Relations graphiques complètes** | C-10, C-12, C-15, C-18 | Représenter tous les liens et directions, clarifier `sync` sans `↔` trompeur ; vérifier si les composants CSS actuels atteignent Figma 07–09, benchmark moteur dédié seulement si insuffisant. | Vue vraiment dirigée et lisible ou statut PARTIAL honnête ; screenshots et revue Figma, aucun lien perdu |
| **P1-B — Intégration WRITE/READ** | C-05, C-06, C-14, C-19 | Garder le contrat WRITE nouveau/READ dual, tester SDK/parse/projection/persistance/replay et volumes 8/12/18, sans toucher aux effets. | Unit/integration/PG/BROWSER selon frontière, historique inchangé, aucune migration non autorisée |
| **P1-C — Qualification UX et non-régression** | C-02, C-08/09, C-15–20 | Comparaisons, séquences, zoom/split, erreurs de renderer, a11y, permissions et refresh ; qualification des diagnostics TypeScript et ACK existants au bon propriétaire. | Captures inspectables, assertions géométriques/texte, traces tests et niveaux de preuve exacts, Review Pack Full |
| **P2 — Recette Nora LIVE et produit** | C-01/07/18/21/22, W5 | Après corrections prouvées, expérimenter des demandes libres et juger naturel, pertinence du choix visuel et qualité esthétique ; préparer un candidat figé. | **GO Morris LIVE distinct** puis recette utilisateur et gates Git/RECETTE/Gate C séparés |
| **DIFFÉRÉ CONFORME** | C-13 | Graphiques quantitatifs seulement pour données sourcées utiles ; pas de bibliothèque supplémentaire par inertie. | Aucun chantier gratuit, condition d'ouverture explicitée |

**Regroupement d'exécution recommandé :** **un macro-lot de convergence intégré**, avec P0 comme garde-fou préalable à l'admission graphique puis P1 codé/testé/documenté et reçu ensemble. Les lignes ne sont **pas** des tickets ou cycles séparés. P2 relève d'une décision d'essai/recette ultérieure.

**Frontières et STOP :** toute transformation structurelle de D3/`outputType`, persistance/DB, autorité D6 ou contrat normatif exige une proposition détaillée et GO Morris spécifique ; aucune mutation technique, push produit, PR, merge, RECETTE, LIVE/REAL ou ADOPTED par la publication de ce document. Garder DEV isolé (ENV-01) et NO RELEASE jusqu'aux gates.

**Livrable de suite non encore commandé :** contrat Cursor SFIA v2.6 instancié depuis les sources Git, après validation du périmètre et du point de décision architecturale ; il ne faut pas forcer la construction de sections canoniques sans GO.
