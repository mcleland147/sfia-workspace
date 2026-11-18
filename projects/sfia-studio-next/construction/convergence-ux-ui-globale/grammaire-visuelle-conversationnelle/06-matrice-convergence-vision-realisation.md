# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.2 — 18 novembre 2026 (convergence après Review Pack `a55f95ea`)  
**Statut :** DOCUMENTED / REVIEW CANDIDATE — mise à jour factuelle et critique après cycle correctif, non décision D2, non VALIDATED SPEC supplémentaire, non ADOPTED.  
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora » ; restitution conversationnelle adaptative, remplacement du mécanisme graphique expérimental E05.  
**Nature :** bilan de conformité entre la vision et les contrats documentés, le candidat technique rapporté par Cursor et les preuves disponibles. **Il ne vaut ni réception technique, ni GO Cursor, ni réduction de périmètre.**  
**Amont :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Conception fonctionnelle et UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture candidate](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Objet, portée de la revue et réponse générale

**Question de contrôle :** la réalisation locale décrite par Cursor correspond-elle à ce qui était attendu pour SFIA Studio Next, indépendamment des correctifs ponctuels déjà engagés ?

**Conclusion actualisée :** le socle reste **cohérent avec la direction architecturale**, et la convergence locale a progressé sur C-04/05/10–12/14. **La cible fonctionnelle, graphique et probatoire n'est toutefois pas reçue.** La séparation Nora/Studio, le renderer React/CSS, l'admission déterministe, les nouvelles familles de relations et le repli exhaustif sont à préserver. Quatre écarts appellent une reprise intégrée :

1. **Fidélité sémantique C-04 :** les graphiques ne remplacent plus `replyDraft` ; toutefois le test d'ancres vérifie surtout les titres présents dans le texte canonique et ne prouve pas les autres assertions (résumés, avantages, limites, conditions, statut). `complement` peut rester trompeur. La substitution des seuls blocs narratifs reste autorisée sans preuve d'identité textuelle.
2. **Écriture/version C-05 :** `conversational-composition-projection-v1` est le nouveau schéma de référence et E05 reste lisible ; toutefois l'`outputType` accepte encore l'ancien `schemaVersion` pour une nouvelle réponse. Un chemin d'écriture exclusivement nouveau n'est pas prouvé.
3. **Sémantique des diagrammes C-10/11/12 :** CSS dirigé livré en code ; les dépendances restent des listes de nœuds/arêtes, l'arbre récursif n'a pas de garde contre les cycles visible dans le code reproduit et le processus parallèle n'affiche explicitement que les arêtes `sync`.
4. **Preuves du résultat C-15/18/20/21 :** les unités et T02 sont rapportés PASS, mais Figma 08/09 en navigateur, fidélité graphique et choix éditorial LIVE demeurent NON PROUVÉS.

**Lecture importante :** un repli textuel fiable est une garantie de sûreté ; il n'est pas une preuve que la famille graphique demandée est construite. Inversement, une famille facultative explicitement différée (notamment graphique quantitatif sans données fondées) n'est pas une non-conformité à corriger automatiquement.

## 2. Sources, versions et limites d'observation

| Source | Référence vérifiée | Portée |
|---|---|---|
| Dépôt | mcleland147/sfia-workspace | Projet Next : projects/sfia-studio-next/ |
| Git main | 997d4c4e8204993de7107552898c8cc08cd3b0ed | SEF v0.2, Roadmap, décisions, code baseline ; la Roadmap est datée du 15/11/2026 |
| Branche documentaire ML4D | docs/next-ml4d-registre-revues-20261116 @ 37915d8e1d6f03a0a335c884aea03fb3e3262159 (avant cette révision) | Documents 01–05, UX Travail avec Nora et contrat technique, non mergés sur main |
| Dernier Review Pack Cursor | sfia/review-handoff @ a55f95eaa99874f520e03fe4ec2faeb6db3d0e38 | Code/diffs complets du cycle de convergence, 65 Vitest PASS et T02 PASS rapportés, réserves et limites |
| Blob du handoff | cf6c8eb23b654d556720fcd1ef95f486d89c6abe | Intégrité du fichier distant |
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
| **C-01 · VP-01, UX-A/B, GV-01/10** | Nora compose librement selon le raisonnement, sans template global | Blocs hétérogènes et admission par famille, vocabulaire encore borné par le wire E05 | **PARTIEL** : capacité de présentation, pertinence spontanée non prouvée | **CONSERVER / COMPLÉTER** ; tests de demandes libres simple/composite, contrôle éditorial GV-T01/02 et CV-T02, sous GO LIVE séparé pour jugement du modèle |
| **C-02 · VP-02, UX-C/F** | Un seul message Nora mélange texte, visuels, références et choix gouvernés | NoraConversation intègre plusieurs blocs sous une identité de message | **ALIGNÉ (CODE)** ; continuité sur tous contextes non prouvée | **CONSERVER / PROUVER** ; T02, refresh, relecture longue, conservation des IDs, UX-002 et UX-CROSS |
| **C-03 · VP-06, doc 03 §2** | Nora possède le sens et l'intention ; Studio possède validation et rendu | admission.ts, NoraComposition, React/CSS, aucun second agent introduit | **ALIGNÉ (ARCHITECTURE)** | **CONSERVER** ; test d'absence d'autorité/effecteur supplémentaire, aucun parsage HTML/Markdown déclenchant une action |
| **C-04 · VP-03/04, UX-D, CV-02/06** | Canonique `replyDraft` identique aux affirmations visibles, pas d'ajout de sens/condition/statut | Graphiques jamais `substitute`; `complement` sur ancrage titre/libellé ; narrative-only peut `substitute` | **BLOQUANT RÉSIDUEL F1** : ancres présentes ≠ équivalence sémantique ; contradiction ou ajouts dans pros/cons/conditions restent possibles ; substitution narrative non vérifiée | **CORRIGER P0** : stratégie déterministe vérifiable de fidélité de *tous* champs rendus, sinon `markdown_only` ; interdire narrative-only substitute sans égalité exacte/canonique prouvée ; tests adversariaux réels, pas de second raisonnement/heuristique déclarée garantie |
| **C-05 · doc 04 §3.2/8, doc 05 §10** | Remplacer l'écriture E05 sans perdre la lecture des anciens tours | Nouvelle version `conversational-composition-projection-v1`, parser dual et prompt modifié ; `VisualCompositionAgentOutputSchema` accepte encore legacy | **PARTIEL F4** : write-only nouveau non imposé à la frontière D3 ; lecture historique valide | **CORRIGER/PROUVER P1** : distinguer émission de nouveaux tours et compat legacy en lecture, tester le vrai pipeline D3→projection→persistance ; STOP si évolution SDK strict/outputType structurante requise |
| **C-06 · M1/M5, CT-02, CV-11** | Projection versionnée et relecture stable ancienne/nouvelle sans migration improvisée | Parse des deux schémas, ancienne version préservée au parse ; pas de migration rapportée | **PARTIEL** : unité de parse PASS ; PG/refresh/choix anciens+nouveaux non pleinement démontrés | **PROUVER** : sérialisation et reprise anciennes/nouvelles versions, propriétés D3 identiques, refs/choix, absence de mutation et aucune migration sans gate |

### 4.2. B — Familles fonctionnelles et richesse graphique

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-07 · UX-A/B, GV-01/02, CV-01** | Texte naturel par défaut si forme graphique inutile | SafeMarkdown et variante markdown_only ; narration facultative | **ALIGNÉ (MÉCANISME)** | **CONSERVER / PROUVER** ; texte court sans carte ni décor imposés, puis test de choix éditorial Nora |
| **C-08 · doc 02 §5/6, Figma 03/04, CV-T03/04** | Matrice/cartes adaptatives avec contenu intégral non trompeur | Renderer matrice + détails visibles, fixtures T02 cards, fallback exhaustif | **PARTIEL** : variante matrice ciblée et graphie premium non réceptionnées ; fidélité C-04 préalable | **PROUVER** : navigateur matrice et cartes, 3/5/8/12 alternatives, textes longs, mise en page étroite, données cohérentes, screenshots Figma |
| **C-09 · Figma 02/06, GV-04, CV-T06** | Étapes/planning avec ordre réel, horizontal/vertical selon largeur, sans causalité inventée | Séquence React/CSS et bascule vertical/horizontal | **PARTIEL** : preuve restreinte à fixture et largeur testées | **COMPLÉTER** ; 4–6 étapes, prérequis, dates ou absence de dates, panneau réduit et reflow |
| **C-10 · Figma 07, GV-05, CV-T07** | Diagramme de dépendances réellement dirigées et lisibles, avec repli | `layoutHint=dependencies`, CSS nœuds puis liste des arêtes ; aucun placement d'arêtes entre nœuds, test T02 accepte `directed` **ou** `structured-list` | **PARTIEL F3** : progression typée, pas preuve d'un véritable diagramme Figma 07 | **QUALIFIER/CORRIGER P1** : vérifier flux nœuds/liens en vraie vue ; soit layout CSS convaincant sur enveloppe, soit layout spécialisé motivé ; test BROWSER discriminateur et repli sûr |
| **C-11 · Figma 08, CV-T08** | Arbre de conditions et issues lisible, sans autorité inventée | `layoutHint=decisionTree`, vue imbriquée `renderBranch()` récursive ; test famille UNIT | **BLOQUANT F2 sur entrée cyclique** : absence visible de détection de cycle/borne de profondeur ; risque récursion non bornée ; BROWSER Figma 08 NOT RUN | **CORRIGER P0** : validation de DAG/arbre (cycles, racines multiples, partages, orphelins, relation invalide) et repli exhaustif ; vérifier absence de boucle et navigateur dédiée |
| **C-12 · Figma 09, CV-T09** | Processus parallèles avec voies et convergence fidèles | `layoutHint=parallelProcess`, lanes CSS, arêtes `sync` affichées explicitement ; autres relations non rendues dans le graphe | **PARTIEL F3** : représentation des dépendances/flux potentiellement incomplète ; BROWSER Figma 09 NOT RUN | **CORRIGER P1** : représenter les relations pertinentes ou refuser le graphique au profit de la liste exhaustive ; tester convergence, ordre, gates et format étroit |
| **C-13 · GV-06, CV-07, doc 05 §6.4** | Graphique quantitatif seulement si valeurs authentiques, unités/échelles/source établies | Aucun graphique quantitatif automatique ; ECharts non installé | **DIFFÉRÉ CONFORME** | **NE PAS CONSTRUIRE PAR INERTIE** ; ouvrir seulement sur cas chiffré produit et contrôle d'autorité, fournir texte/tableau à défaut |
| **C-14 · VP-08, CV-04/05, CV-T05** | Variantes par contenu/largeur et enveloppe de capacité réellement testée | MAX_ALTS=12 (8 admis, 18 refusés), sélection cards/matrix/stacked et capacités tracées | **PARTIEL MAIS PROGRÈS** : limite testée UNIT ; pas une couverture 12 options BROWSER ni une garantie visuelle | **PROUVER** 2/3/5/8/12/18 sur parser→admission→UI ; pas d'élargissement arbitraire ni promesse d'18 cartes |

### 4.3. C — UX, accessibilité, sécurité et continuité

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-15 · UX-F/UX-010, CV-04/08, CV-T11/12/20** | Aucun chevauchement/troncature, zoom/split, clavier | ResizeObserver, container CSS, overflow-wrap, matrices scrollables | **PARTIEL** : validation géométrique et accessibilité écran réel NOT RUN pour les nouveaux diagrammes | **PROUVER P1** : split, 390/1280/1680, zoom 200–400 %, longue URL, géométrie des lignes, clavier, scroll horizontal localisé, capture |
| **C-16 · UX-D/E, CT-02, CV-09/13** | Sources actuelles et actions typées seulement ; aucune décision/permission inventée | Références/choix canoniques et ancres repris dans NoraComposition ; contrôles historiques utilisés | **PARTIEL** : la revue du code ne certifie pas les droits dynamiques | **CONSERVER / PROUVER** ; source révoquée, clic de référence, choix périmé, tour non final, aucun effet métier depuis la forme |
| **C-17 · CV-10, doc 05 §8, CV-T15** | Sur erreur renderer, repli intégral sans toucher au tour D3 | `BlockErrorBoundary` avec `buildExhaustiveBlockFallback`, tests UNIT ; pas d'injection BROWSER | **PARTIEL** : erreur dans un bloc réel non prouvée en navigateur | **PROUVER** : injection d'erreur BROWSER sur grandes compositions, contenu intégral, autres blocs inchangés, aucune réinterrogation Nora |
| **C-18 · VP-07, doc 02 §7, Figma 01–09** | Finition premium et diagrammes naturels réellement agréables à lire | CSS adaptatif et rendu typé, T02 et quelques captures rapportées | **NON PROUVÉ** : screenshots Figma 08/09 manquants ; composant CSS dirigé ne démontre pas conformité Figma 07 | **QUALIFIER P1** : revue comparative navigateur/Figma 03/04/07/08/09, densité, chemin des arêtes, typographie, alignement, cas dégradés, verdict Morris distinct |
| **C-19 · UX-F, CT-01/05, CV-T16/17/18** | Refresh, relecture, scroll, brouillon et réconciliation sans effet induit | Refresh/T02 rapportés ; 2 FAIL ACK également sur tip clean a783f014 ; UNKNOWN non exécuté dans ce cycle | **PARTIEL**, réserve R05 distincte | **CONSERVER / QUALIFIER** ; non-régression ciblée, maintenir propriétaire R05 et issue d'ACK, ne pas élargir l'implémentation graphique à la réparation métier sans gate |

### 4.4. D — Qualification, réception et gouvernance

| ID / source | Résultat attendu | Réalisation observée dans le pack | Qualification / écart | Action de convergence et preuve de sortie |
|---|---|---|---|---|
| **C-20 · doc 03 §10, doc 05 §9, CV-T01–20** | Preuves UNIT/PG/BROWSER/LIVE séparées et discriminantes | Dernier pack : **65 Vitest PASS** rapportés, T02 PASS ; tsc 32 erreurs antérieures/0 touched rapportées ; C-11/12 Browser dédiés NOT RUN | **PARTIEL** : résultats non réexécutés, critères adversariaux C-04/11/12 absents | **QUALIFIER** : tests négatifs topology/fidelity, PG+E2E Figma, contrôle delta TypeScript vs base propre, exhaustivité CV-T (NOT RUN ≠ PASS) |
| **C-21 · VP-05, GV-01–12, CV-T02/19** | Nora choisit spontanément une représentation utile sur demande libre, avec sources et nuances justes | Fixtures BROWSER et tests déterministes, **LIVE OpenAI NOT RUN** | **NON PROUVÉ** | **RECETTE LIVE SOUS GO DISTINCT** ; cas simple, synthèse projet, R04/R05, choix éditorial argumenté, jugement Morris sur pertinence et naturel |
| **C-22 · SEF, Roadmap R5/ML4D, Gate C** | Réception puis promotions sous gates Morris explicites | Handoff L3 `a55f95ea` distant confirmé, code local non publié, RECETTE non touchée, LIVE non exécuté | **GATE NON FRANCHI** : ML4D non reçue, Gate C ouvert, STABLE absent | **AUCUNE PROMOTION** : revue du cycle, candidat figé, recette Morris distincte, Git/PR/merge/REAL séparés |

## 5. WBS de convergence — cinq activités d'un même macro-lot

Les documents 01 §9 et 04 §8 ne fournissent **pas de WBS détaillé autonome**. Ils cadrent cinq **activités intégrées**, sans seuil artificiel de cycles et sans ouvrir un chantier documentaire par défaut. La présente mise en correspondance ne crée pas une nouvelle roadmap normative.

| Activité | Résultat initialement attendu | Situation à date | Preuve ou gate restant |
|---|---|---|---|
| **W1 — Direction artistique** | Maquettes de texte, comparaisons, étapes, dépendances, réponses composites et densités variables | Neuf écrans Figma présents ; orientation acceptée en principe | Comparaison Figma/runtime de vues comparables et revue visuelle Morris |
| **W2 — Contrat fonctionnel et architecture** | Nora/Studio, vérité unique, familles, contrat versionné, repli et compatibilité M1 | Nouveau write schema et gate d'ancres ; F1/F4 non clos | Sécuriser C-04 et vérifier la frontière émission/lecture C-05 avant réception |
| **W3 — Construction intégrée** | Rendu spécialisé, intégration, tests, synchronisation doc et nettoyage E05 | Relations CSS dirigées en code ; arbre/parallel unitaires ; topologie F2/F3 et mise en page Figma ouvertes | Corriger C-10/11/12, conserver la compat lecture E05, documenter l'exit de la nouvelle écriture |
| **W4 — Qualification croisée** | Contrat logique, BROWSER/FAKE, accessibilité, Figma/runtime, non-régression et LIVE borné si autorisé | Vitest 65 PASS et T02 PASS rapportés ; défauts adversariaux non couverts ; Figma 08/09 et zoom/split absents | Cas adversariaux + vraie capture navigateur/Figma + E2E, preuve séparée du REAL |
| **W5 — Recette produit** | Morris juge contenu, pertinence, finition, continuité, fiabilité | Pas de recette de la cible complète | Décision Morris de réception ; Gate C et adoption séparés |

**Règle de périmètre :** W1–W5 sont des résultats liés à un **macro-lot cohérent**, pas cinq nouveaux lots ni cinq invitations à modifier la gouvernance. Le nouveau contrat Cursor devra réunir code, tests, documentation et preuves sans fragmenter les corrections.

## 6. Carte de réutilisation et priorités

| Traitement | Éléments concernés | Justification |
|---|---|---|
| **CONSERVER** | Séparation D3/Studio ; NoraComposition ; admission locale ; React/CSS ; cartes/matrices et séquences ; références/choix canoniques ; mécanismes de fallback corrigés | Responsabilités pertinentes, premières preuves déterministes, faible intérêt à reconstruire ce qui fonctionne déjà |
| **CORRIGER — P0** | C-04 : refus d'un complément trompeur, narrative-only `substitute` sans équivalence ; C-11 arbre cyclique | Risque d'altération des assertions et de récursion non bornée ; UNIT nominal ne prouve pas ces cas |
| **COMPLÉTER — P1** | C-05/06/14 : écrire uniquement nouveau schéma, relire ancien ; C-10/12 : diagramme lisible sans arêtes perdues et preuve de capacité | Le modèle typé existe ; vérifier son comportement de bout en bout, sans pivot M1 non autorisé |
| **QUALIFIER — P1** | C-08/09/15/17/18/20 : matrices, Figma 07–09, zoom/split, fallback en erreur et preuves adversariales | 65 tests UNIT et T02 BROWSER ne prouvent pas ces qualités ni la pertinence spontanée |
| **PRÉSERVER / RÉGULARISER À LA BONNE FRONTIÈRE** | C-16/19 : droits, choix expirés, ACK R05/UNKNOWN, brouillon, idempotence | Ne pas effacer les dettes historiques et ne pas dévier vers un second moteur d'effets |
| **DIFFÉRER SOUS CONDITION** | C-13 : graphiques quantitatifs sans besoin réel établi ; C-21 : LIVE jusqu'au GO spécifique | Éviter coûts/risques gratuits et faux claims REAL |
| **GATE MORRIS** | C-22 : revue, décision de périmètre, Git/PR/RECETTE et adoption | Construction locale ≠ preuve ≠ ADOPTED |

### 6.1. Dépendances d'exécution

1. **Fermer C-04 avant de présenter un graphique complémentaire comme fidèle.** La seule inclusion des titres dans `replyDraft` n'est pas une preuve de la valeur des autres champs. Une équivalence déterministe non démontrable implique un repli `markdown_only` ; éviter un second moteur cognitif.
2. **Qualifier le nouveau write C-05/06/14 dans le parcours D3 réel.** Le prompt annonce `projection-v1`, mais le schéma d'output accepte aussi E05. Séparer juridiquement et techniquement le nouveau write de la lecture legacy ; si modification D3/SDK de portée structurante, STOP pour Morris.
3. **Sécuriser la topologie C-10/11/12 avant les preuves visuelles.** Refuser cycles/arêtes orphelines/incohérences de branche et ne jamais cacher les `flow`/`depends_on` dans `parallelProcess`. Le CSS reste recevable s'il donne une restitution honnête dans l'enveloppe, sinon repli complet et comparaison proportionnée de solutions, sans moteur universel par réflexe.
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

## 9. Verdict actualisé et suite

| Axe | Verdict après handoff `a55f95ea` |
|---|---|
| Vision produit / UX A–F | Cohérence d'architecture maintenue, choix LIVE non prouvé |
| Responsabilités Nora/Studio | Socle React/admission réutilisable |
| Contrat de vérité C-04 | **BLOQUANT F1** : complément par ancres non suffisant, substitution narrative |
| Écriture C-05 | **PARTIEL F4** : nouveau schema existe, legacy encore admis par outputType |
| Comparaison et séquences | Améliorées, qualification géométrique partielle |
| Dépendances, arbre, parallèle C-10–12 | **PARTIEL** : typages et vues CSS présents ; risques topology/restitution F2/F3 |
| Qualité premium C-18 | NON PROUVÉE |
| Tests | **65 Vitest PASS + T02 PASS rapportés** ; négatifs adversariaux et BROWSER Figma 08/09 NOT RUN |
| LIVE / UAT / Gate C | NON ACQUIS |

**Verdict de revue : `STOP — SEMANTIC FIDELITY AND DIRECTED COMPOSITION GAPS REMAIN`.**
Le `READY WITH RESERVES` Cursor est recevable comme statut d'avancement DEV uniquement, sans recevoir la capacité complète. Le prochain cycle recommandé doit être **un correctif intégré sur le même candidat**, incluant correctifs, tests discriminants et synchronisation documentaire associée, et non une succession de micro-ajustements. Aucun push Produit/PR/merge/RECETTE/REAL/adoption déduit de ce document.

## 10. Findings discriminants et contrat d'entrée du prochain correctif

### F1 — Compléments non prouvés et substitution narrative (P0, C-04)

**Code reproduit dans le pack §6 `fidelity.ts` et `admission.ts` :**
- `extractProjectionAnchors()` regarde surtout titres d'options, étapes, nœuds et labels de synthèse ; `normalize(canonical).includes(anchor)` autorise un complément même si ses détails et sa recommandation ne sont pas établis dans le canonique ;
- `detectCrudeContradictions()` se limite à certains chiffres et recommandations. Son nom et ses commentaires eux-mêmes indiquent qu'il ne démontre pas l'équivalence sémantique ;
- `decideBodyPolicy()` conserve `substitute` pour des blocs narratifs même quand `replyDraft` diffère potentiellement.

**Oracle requis :** le complément graphique ne présente *aucune assertion* (avantage, risque, recommandation, condition, chiffre, statut, liaison) non vérifiable déterministiquement par rapport au canonique. Le texte seul prévaut dès que la garantie est impossible. Une égalité strictement déterministe peut autoriser une projection narrative ; aucune classification par similarité libre ne devient une preuve de vérité. Tester au moins : mêmes titres mais recommandations opposées, pros/cons inversés, conditions inversées, valeurs/nuances non présentes, narrative-only différente, canonical vide, références contradictoires.

### F2 — Arbre cyclique / branches invalides (P0, C-11)

**Code reproduit `NoraComposition.tsx` :** `renderBranch(nodeId, depth)` recurse par les arêtes ; ni validation d'acyclicité ni ensemble de nœuds visités n'est visible sur ce chemin. `selectRelationsVariant()` n'effectue que des contrôles de taille, d'arêtes orphelines et de longueur.

**Oracle requis :** tous les graphes invalides (cycles simples/complexes, sommet partagé non arborescent si rendu dupliqué, absence/multiplicité incohérente de racines, relation conditionnelle incomplète, arêtes orphelines) sont refusés **avant rendu** ou repliés sans perte, sans boucle ni crash, avec test BROWSER dédié. Une arborescence valide reste lisible et ne fabrique pas de HumanDecision.

### F3 — Fidélité des relations et qualité du diagramme (P1, C-10/12)

**Code reproduit :** `dependencies` affiche une liste de nœuds puis une liste séparée d'arêtes ; `parallelProcess` matérialise des lanes et n'explicite que les arêtes `sync`, alors que d'autres types de relation sont admis. Le T02 accepte `data-layout=directed` **ou** `structured-list` et ne prouve donc pas un diagramme de dépendances.

**Oracle requis :** chaque lien possède une représentation compréhensible, sans perte d'ordre/condition/source. Une vraie variante dirigée n'est déclarée PASS que si ses arêtes/branches sont perceptibles en UI et lisibles sur l'enveloppe mesurée. Sinon, le repli listé est honnête et exhaustif mais la capacité graphique reste PARTIAL. Exiger essais Figma 07/09, screen diff interprété, zoom/split et texte long. Ne pas installer ELK/React Flow par réflexe ; comparer uniquement si le CSS actuel n'atteint pas le contrat.

### F4 — Distinction nouveau write / lecture E05 (P1, C-05/06)

**Code reproduit `visual-composition.ts` :** `VISUAL_COMPOSITION_SCHEMA` est nouveau mais `VisualCompositionAgentOutputSchema.schemaVersion` reste un `z.enum([new, legacy])`. Le prompt adapter souhaite la nouvelle version, ce qui n'empêche pas l'émission du legacy.

**Oracle requis :** chemin d'émission/validation des **nouveaux** tours borné à la nouvelle version, lecture/replay de l'ancienne conservée. Tester frontière agent/parse/projection de bout en bout sans appel LIVE ; aucun pivot strict SDK/migration M1 sans STOP Morris. La version nouvelle n'est pas à elle seule la preuve d'une nouvelle source de vérité.

### F5 — Qualification visuelle et éditoriale (P1, C-08/09/15/17/18/20/21)

**Preuves reconnues :** 65 Vitest PASS, T02 BROWSER PASS, 0 erreurs touchées rapportées / 32 TypeScript préexistantes, aucun LIVE ; Figma 08/09 dédiés, zoom/split, injection d'erreur et jugement esthétique global NON PROUVÉS.

**Oracle requis :** BROWSER/FAKE avec vraies tailles du fil Travail, représentations Figma 03/04/07/08/09, overflow/mesures et accessibilité, plus trace de conformité par CV-T. Le comportement spontanément pertinent de Nora demeure à recetter plus tard sur LIVE **sous GO séparé**.

### Critères d'arrêt / responsabilités du prochain cycle

- **IN :** F1/F2 et ajustements nécessaires F3/F4, preuves discriminantes F5 sur candidat DEV, tests, doc de delivery dans le **même cycle**.
- **OUT :** réécriture du cerveau Nora, second moteur d'intention, nouvel outil D7, migrations ou stores nouveaux, généralisation graphique illimitée, reconstruction E05, élargissement vers R5 entier.
- **STOP :** tout changement structurel D3/outputType/DB/autorité non autorisé, perte de relecture historique, déviation du worktree local connu, budget SDK strict non qualifié, déploiement RECETTE et test LIVE non autorisés, impossible repli fidèle.
- **Exit :** test d'assertions contradictoires et de topologies adversariales PASS, écriture nouvelle réellement prouvée sans perte ancienne, démonstration navigateur des diagrammes avec repli et géométrie, rapport Full mono-cycle, handoff L3 distant ; réception Morris ultérieure et Gate C distincts.

**Statut des orientations :** recommandations de revue et contrat d'entrée candidat ; ne valent ni approbation D2 d'un nouveau schéma M1, ni autorisation technique implicite, ni ADOPTED.
