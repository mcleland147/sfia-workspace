# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.4 — 18 novembre 2026 (revue Strategy A / handoff `91795493`)  
**Statut :** DOCUMENTED / REVIEW CANDIDATE — analyse non normative D1 ; ni décision D2 nouvelle, ni VALIDATED SPEC supplémentaire, ni ADOPTED.  
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora », composition conversationnelle adaptative et remplacement de l'expérience E05.  
**Nature :** contrôle de convergence de la vision et des contrats avec le candidat Cursor **local non publié**, à partir du Review Pack distant ; aucune affirmation sur le working tree non observé.  
**Sources de conception :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Fonctionnel/UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Conclusion et cadrage de la revue

**Décision de principe Morris, 18/11/2026 :** retenir **Strategy A — sections sémantiques canoniques** pour les nouveaux tours, avec texte dérivé et graphique facultatif, tout en préservant les tours historiques. Cette orientation n'implique ni migration DB, ni changement des autorités D3/D6, ni promotion.

**Avancées établies par lecture du code reproduit :**
- `visualComposition` nouvelle version est interprétée comme `contentAuthority=canonical_sections` et `replyDraft` est dérivé dans `validateNoraTurnQualification` si la dérivation renvoie un texte ; aucun second champ `semanticSections` n'a été introduit.
- `topology.ts` refuse maintenant les enfants partagés en mode `decisionTree` (`CV_TOPOLOGY_TREE_SHARED_CHILD`), en plus des cycles et multi-racines.
- Le rendu `parallelProcess` parcourt désormais **toutes** les arêtes fournies, pas uniquement `sync` ; la distinction `→` / `⇄` existe, mais le sens de `⇄` doit être qualifié.
- Lecture `e05-visual-composition-v1` conservée ; persistance via `resultJson` existant rapportée, **sans migration**.
- Tests **29 Vitest PASS + T02 Playwright 1 PASS rapportés** ; LIVE/REAL non exécutés.

**Points bloquants/réserves actuels :**
1. **A1 — C-04, P0 : troncature silencieuse du texte dérivé.** `derive-text.ts` coupe la réponse via `joined.slice(0, 12000)` et ne préserve donc pas l'exhaustivité du canonique au-delà de l'enveloppe `replyDraft`.
2. **A2 — C-04/C-17, P0 : perte possible de substance dans la projection textuelle.** `buildExhaustiveBlockFallback` ne restitue pas systématiquement `node.detail`, `node.kind`, `node.laneId` et `edge.relation` pour les graphes ; les distinctions fait/hypothèse et les conditions exactes peuvent devenir implicites. La méthode de sortie des choix/références doit aussi être prouvée sans perte d'autorité.
3. **A3 — C-05/C-06, P0 : collision de signification de `projection-v1`.** Le même `schemaVersion` a été utilisé lors de cycles Strategy B où `replyDraft` était indépendant. La seule version détermine maintenant `canonical_sections`. **Risque de relecture rétroactive**, sans preuve qu'un tel ancien tour existe effectivement dans la DB.
4. **A4 — C-02/C-04/C-20, P0 qualification : parité fixture/LIVE non démontrée dans le diff.** Cursor déclare que le fixture passe par le même gate ; le pack ne montre pas de diff de `fixtureReply()` attestant l'appel du validateur. Ne pas conclure automatiquement à un défaut local : exiger le chemin complet et une preuve discriminante.
5. **A5 — C-10/12/18, P1 : diagrammes réels et qualité visuelle.** Couches CSS + listes d'arêtes ne prouvent pas les connexions Figma 07–09 ; `⇄` peut suggérer une bidirectionnalité non attestée.
6. **A6 — C-15/19/20/21, P1/P2 : couverture insuffisante.** Captures citées mais non inspectables via ce handoff, pas de preuve PG/replay/zoom/split/a11y/injection d'erreur complète, ni LIVE. ACK R05 hors lot.

**Verdict de revue : `REVIEW PACK FULL ACCEPTED — PRODUCT NOT READY FOR RECEPTION` ; `STOP — CANONICAL INTEGRITY NOT YET PROVEN`.** La construction est réutilisable ; la correction doit viser l'intégrité des projections, non rouvrir l'arbitrage Strategy A.

## 2. Sources Git, preuves et limites

| Source | Ref/empreinte observée | Qualification |
|---|---|---|
| Dépôt | `mcleland147/sfia-workspace` | Next : `projects/sfia-studio-next/` |
| Baseline `main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` | SEF, Roadmap, décisions et code courant distant ; snapshot Roadmap du 15/11 antérieur à la livraison locale |
| Branche documentaire (avant V0.4) | `docs/next-ml4d-registre-revues-20261116@b27fbe3c8b75165c3ebacc8841876d699ccd3599` | Sources 01–06 candidates, non mergées |
| Dernier Review Pack | `sfia/review-handoff@91795493fd9c49be531a4d14e44f181add0beaaa` | Full de 4 843 lignes, nouveaux fichiers et diffs |
| Blob Review Pack | `99c8dfea629488ff47993c1a95ed7546867bade4` | Fichier distant relu |
| Branche produit | `sfia/next-ml4d-composition-adaptative`, tip local rapporté `a783f014935de0dec5ff8e79a2b18eea0e629756` | **NON OBSERVÉ** localement, branche absente de `origin` ; working tree non commité rapporté |
| UX Figma | [Page 06, neuf écrans](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=742-2) | Direction artistique, pas preuve de conformité navigateur |
| Gouvernance | [SEF](../../../governance/SEF.md), [Roadmap](../../../governance/roadmap.md), décisions Next | Git/main et gates Morris priment |

**Précédence :** Git + preuves vérifiées > décisions Morris > documents > mémoire > hypothèses. L'état local, les captures PNG et le runtime non accessibles ne doivent pas être présentés comme inspectés. Les résultats Vitest/Playwright sont **rapportés par Cursor**, non réexécutés.

## 3. Échelle de qualification

- **ALIGNÉ (CODE)** : contrat ou mécanisme observé, sans preuve end-to-end implicite.
- **PARTIEL** : mécanisme présent, couverture ou qualité de sortie incomplète.
- **ÉCART** : résultat demandé non livré / restitué de manière incomplète.
- **BLOQUANT** : invariant de vérité ou compatibilité susceptible d'être violé.
- **NON PROUVÉ** : absence de preuve au niveau requis, pas panne observée.
- **DIFFÉRÉ CONFORME** : extension conditionnelle hors périmètre justifié.

État du programme : DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED sont **non interchangeables**.

## 4. Matrice de convergence C-01 à C-22

### A — Vision, responsabilité et contrat canonique

| ID | Résultat attendu | Réalisation Strategy A / preuve | Statut et écart | Suite et preuve de sortie |
|---|---|---|---|---|
| **C-01 — VP-01, UX-A/B** | Nora choisit librement la meilleure forme, sans template rigide | Sections facultatives et bloc texte possibles ; choix spontané LIVE non exécuté | **PARTIEL** | Préserver narration naturelle, puis essais LIVE sous GO distinct |
| **C-02 — VP-02, UX-C/F** | Un message composite avec une identité de tour et contenu stable | `NoraConversation` conserve le message ; texte dérivé en qualification ; fixture parity A4 non prouvée | **PARTIEL** | Test un tour D3/fixture→qualification→message→persist/reload, même contenu/IDs, sans duplication |
| **C-03 — VP-06, doc 03** | Nora porte le sens ; Studio valide et rend, sans autre moteur cognitif | `visualComposition` porte les sections ; admission/renderer séparés ; aucun second agent introduit | **ALIGNÉ (ARCHITECTURE)** | Conserver responsabilités, aucune action métier déclenchée par composant |
| **C-04 — VP-03/04, CV-02/06** | Une seule source de sens et des restitutions exhaustives | `deriveReplyDraftFromCanonicalSections` + `contentAuthority=canonical_sections` ; `slice(0,12000)`, champs de relations omis dans texte | **BLOQUANT A1/A2** : même structure, mais texte dérivé potentiellement incomplet ; gate `derived=null` laisse `replyDraft` indépendant | Refus explicite ou solution bornée sans perte sur dépassement/invalidité, restitution de **tous** champs sémantiques, tests des cas frontières et absence de succès trompeur |
| **C-05 — doc 04/05** | Nouveau WRITE et READ historique sans confusion | `projection-v1` seul au WRITE Agent, E05+projection au parse ; même version utilisée par Strategy B précédente | **BLOQUANT COMPAT A3** pour acceptation historique ; existence effective d'anciens `projection-v1` en DB non établie | Discriminant persistant/version réellement non ambigu ; ancien Strategy B et nouveau A séparés ; tests replay sans migration |
| **C-06 — M1/M5, CV-11** | Persistance de tour et relecture stables, une vérité durable | `resultJson` existant rapporté ; pas migration ; parsing dual | **PARTIEL / A3/A4** : audit reprise/PG et statut des anciens `projection-v1` absent | Tests séquence D3→stash→restore→UI : ancienne E05, projection-v1 historique et nouvelle A ; STOP si migration ou rupture M1 indispensable |

### B — Familles et représentations

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-07 — GV-01/02** | Narration naturelle seule par défaut lorsque graphique inutile | `text` et `replyDraft` possibles, admission narrative ; fixture dédiée UNIT | **ALIGNÉ (MÉCANISME)**, choix éditorial LIVE non démontré | Test prose longue, absence de double affichage, jugement LIVE ultérieur |
| **C-08 — Figma 03/04** | Cartes/matrices avec attributs attachés à leur option | Renderer comparatif existant, tableau + détails ; source canonique nouvelle | **PARTIEL** : données à prouver sans omission et cas denses non reçus | Tests 3/5/8/12 alternatives, attributs et critères, vue étroite, matrice réelle |
| **C-09 — Figma 02/06** | Étapes, dépendances et temporalité justifiées | Séquence horizontale/verticale construite | **PARTIEL** | Tester détails/prérequis/dates, texte dérivé et reflow |
| **C-10 — Figma 07** | Graphe dirigé réellement lisible | Couches topologiques CSS et arêtes en liste `→` | **PARTIEL A5** : connecteurs visuellement liés aux nœuds non prouvés | Browser/Figma 07, comparaison géométrie ; fallback exhaustif ne vaut pas diagramme PASS |
| **C-11 — Figma 08** | Véritable arbre conditionnel sans enfant partagé | `validateDecisionTree` rejette `inDegree>1` des non-racines, cycles et racines multiples ; test shared-child | **ALIGNÉ (TOPOLOGIE CODE)** ; sémantique conditionnelle, géométrie et a11y non prouvées | Conserver correctif ; tester branches et lecture Figma 08 |
| **C-12 — Figma 09** | Voies parallèles et toutes relations qualifiées, sans autorité inventée | `parallelProcess` parcourt `block.edges` intégralement ; `sync` affiché avec `⇄` | **ALIGNÉ SUR EXHAUSTIVITÉ CODE / PARTIEL UX** ; direction/représentation visuelle `sync` non qualifiée | Vérifier `sync` non réciproque, `flow`, `depends_on`, convergence en Browser/Figma 09 |
| **C-13 — GV-06** | Graphiques quantitatifs seulement sur données établies | Pas de moteur quantitatif introduit | **DIFFÉRÉ CONFORME** | Aucun développement gratuit, maintien des règles de source/unité |
| **C-14 — CV-04/05** | Densité et cardinalité adaptatives | `MAX_ALTS=12`, 8 admises/18 refusées en test précédent | **PARTIEL** | Browser 2/3/5/8/12/18, état de repli complet, largeur mesurée |

### C — UX, sécurité, continuité

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-15 — CV-T11/12/20** | Split, zoom, conteneur étroit, clavier, aucun contenu coupé | CSS responsive, `ResizeObserver` ; T02 nominal 1440 PASS rapporté | **PARTIEL / A6** | Géométrie 390/1280/1440, split 50/50, zoom 200–400 %, clavier/focus, longs libellés |
| **C-16 — UX-D/E** | Sources/actions actives selon propriétaires, jamais effet par graphique | Références et choix canoniques réutilisés, aucune autorité D6 ajoutée | **PARTIEL** : droits dynamiques/revocation non requalifiés | Test sources périmées et actions désactivées, non-régression effet |
| **C-17 — CV-10/15** | Repli textuel exhaustif sur échec de bloc, sans nouveau run D3 | Error boundary + `buildExhaustiveBlockFallback` existent | **PARTIEL A2** : fallback des relations ne conserve pas toutes nuances ; échec Browser non injecté | Exhaustivité de champs/provenance/rôle, error injection BROWSER, autres blocs intacts |
| **C-18 — VP-07, Figma 01–09** | Présentation premium fidèle aux références et au contenu | 3 PNG 1440 cités, non consultables dans handoff ; CSS dirigé | **NON PROUVÉ A5/A6** | Captures réellement inspectables, revue Figma/runtime, densité et esthétique, gate Morris |
| **C-19 — UX-F, R05** | Refresh, identité, réconciliation et continuité préservés | M1 inchangé rapporté ; ACK R05 antérieur hors lot | **PARTIEL** | Vérifier refresh/UNKNOWN, qualifier ACK préexistant à son propriétaire, pas de réparation R05 par dérive |

### D — Qualification et réception

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-20 — CV-T01–20** | Suite discriminante UNIT/PG/BROWSER avec niveaux explicites | Pack Full 4843 lignes ; **29 Vitest PASS + T02 PASS rapportés** ; fixture gate A4 non démontré ; pas de PG complet | **PARTIEL A4/A6** | Tester 12k+ / champs omis / version collision / fixture parité ; full regression, PG, browser Figma et erreurs ; résultats et logs |
| **C-21 — VP-05** | Pertinence spontanée de Nora en demande libre | Fixtures déterministes uniquement ; LIVE non exécuté | **NON PROUVÉ** | GO Morris LIVE spécifique + jugement éditorial produit ultérieur |
| **C-22 — Gate C** | Réception Morris, traçabilité et promotions séparées | Handoff `91795493` distant, produit WT dirty non publié | **GATE NON FRANCHI** | Revue candidat figé, build SHA, décision Morris, Git/RECETTE/promotion distincts |

## 5. WBS de convergence — cinq activités du même macro-lot

| Activité | Résultat attendu | Acquis Strategy A | Gate restant |
|---|---|---|---|
| **W1 — Direction artistique** | Figma 01–09 et grammaire de lecture | Maquettes de direction, CSS et captures déclarées | Comparaison Figma/runtime effectivement inspectée et acceptation Morris |
| **W2 — Contrat et architecture** | Vérité unique, M1/D3, version, autorités | Orientation Strategy A arbitrée Morris ; `visualComposition` canonique et `replyDraft` dérivé en code | Fermer A1/A2/A3/A4, intégrité et compatibilité vérifiées |
| **W3 — Construction intégrée** | React, admission, topologie, familles et tests | Arbre enfant partagé corrigé ; toutes arêtes parallèles itérées ; legacy read | Restitution textuelle complète, versionnement, cohérence des relations/connecteurs |
| **W4 — Qualification croisée** | UNIT/PG/BROWSER, a11y, Figma et non-régression | 29 PASS UNIT + 1 PASS BROWSER rapportés | Tests adversariaux, PG/refresh, Figma, split/zoom, preuves inspectables |
| **W5 — Recette produit** | Pertinence Nora et réception utilisateur | Non engagée | GO LIVE/REAL, recette Morris, Gate C distincts |

**Règle :** W1–W5 structurent **un macro-lot intégré**, pas cinq nouveaux micro-lots.

## 6. Carte de traitement et dépendances

| Classe | Éléments | Règle |
|---|---|---|
| **CONSERVER** | D3/Studio séparés ; composant React/admission ; choix/références ; parser E05 ; `resultJson` ; code arbre single-parent et rendu de toutes arêtes | Ne pas reconstruire les acquis |
| **CORRIGER P0** | A1/A2/A3 : limite 12k, texte dérivé exhaustif, distinction des versions d'autorité ; A4 : parité fixture/D3 démontrée et corrigée si nécessaire | Faire porter les invariants au bon propriétaire, éviter masque lexical |
| **QUALIFIER P1** | Diagrammes Figma 07–09, `sync`, matrices/séquences, zoom/split/a11y, erreurs, persistance/refresh | Vraies preuves et capacités, pas seulement `data-testid` |
| **DIFFÉRER / GATE** | LIVE/REAL, graphiques quantitatifs sans source, promotion Git/RECETTE/STABLE | GO Morris distinct et justification |
| **RESTER HORS SCOPE** | Refonte D3 générale, moteur IA n°2, migration physique, réparation ACK R05, moteur graphique universel | STOP si indispensable |

**Séquence logique :** source structurée unique → projection textuelle complète et bornée → marqueur de version/autorité durable → même gate fixture/LIVE → reprise historique → graphes et UX → preuves de sortie. La sécurité du repli n'efface pas une capacité graphique non livrée.

## 7. Contrat de preuve — oracles discriminants

| Contrôle | Oracle attendu | Couche |
|---|---|---|
| **A1 troncature** | Composition dérivée à 11999/12000/12001 caractères et très longue : aucun `slice` silencieux ; pas de tour FINAL « complet » avec contenu amputé ; comportement d'erreur déterministe et reprise autorisée | UNIT + D3/INTEGRATION |
| **A2 champs** | Comparaison option→pros/cons/criteria, séquence prérequis/date, relations `kind/detail/laneId/relation`, conditions, provenance et réserves représentées dans texte et graphique sans réassignation | UNIT + BROWSER |
| **A3 versionnement** | Payload `projection-v1` produit *avant* Strategy A ne devient pas `canonical_sections` par magie ; nouveau tour porteur d'un discriminant durable ; E05 et historiques relus sans mutation | UNIT + PG/REPLAY |
| **A4 fixture** | Chemin réel fixture → validation → dérivation → `content` → stash → refresh comparé au chemin LIVE (sans appel fournisseur) ; test qui échoue si validation sautée | INTEGRATION/FAKE + BROWSER |
| **A5 graphes** | Arbre vrai, DAG shared-child refuse, parallèle mixtes arêtes exhaustives et sens de sync exact ; diagrammes réellement lisibles vs Figma 07–09 | UNIT + BROWSER/Figma |
| **A6 robustesse** | Longs contenus, choix/réfs expirés, panne de renderer, zoom/split, accessibilité, no regressions TypeScript/build, UNKNOWN, ACK qualifié | INTEGRATION/PG/BROWSER |

**Fake/Real :** 29 Vitest et T02 ne signifient pas fournisseur LIVE, ni REAL END-TO-END. Aucun appel externe autorisé par la publication documentaire.

## 8. Décisions et stops

- **Arbitrage déjà exprimé :** Strategy A comme cible pour les nouveaux tours. Ne pas réouvrir Strategy B comme architecture cible.
- **Décision encore nécessaire si structurante :** modification de schéma D3/SDK/versionnement susceptible de rompre des consommateurs historiques ou nécessitant migration. Cursor doit d'abord mesurer blast radius et proposer la voie compatible ; **STOP Morris** en cas de rupture.
- **Interdits sans GO spécifique :** mutation de gouvernance, nouvelle DB, nouvel effecteur, push produit/PR/merge, LIVE/REAL, RECETTE, STABLE, adoption ou Gate C.
- **Observation limitée :** code local non accessible, captures non transmises ; éviter les PASS non fondés.
- **Nommage :** responsabilités produit, pas noms de chantier historiques ou héritage E05 pour nouvelles capacités.

## 9. Résumé du verdict Strategy A

| Domaine | Verdict après `91795493` |
|---|---|
| Handoff | **FULL EXPLOITABLE** — revue distante possible |
| Orientation et architecture | **IMPLEMENTED (CODE CANDIDATE)** — source canonique unique en chemin nominal |
| Fidélité du texte dérivé | **BLOQUANT A1/A2** — troncature et champs non restitués |
| Compatibilité historique | **RISQUE BLOQUANT A3** — projection-v1 a changé de sens sans discriminant durable |
| Parité fixture/LIVE | **NON PROUVÉ A4** — correction annoncée, chemin non démontré par diff |
| Arbres | **ALIGNÉ CODE** — contrôle single-parent, cycles et repli |
| Parallèle | **ALIGNÉ EXHAUSTIVITÉ CODE**, sens et visibilité à qualifier |
| Graphes et esthétique | **PARTIEL / NON PROUVÉ** |
| 29 tests + T02 | **PASS RAPPORTÉS**, non réexécutés |
| Réception ML4D / Gate C | **NON ACQUISE** |

**Verdict : `STOP — CANONICAL INTEGRITY NOT YET PROVEN`.** Ce STOP porte sur le sous-système présenté à la réception, non sur toute la roadmap.

## 10. Findings restants — actions correctives

### A1 — Limite textuelle sans perte (P0, C-04)

Dans `derive-text.ts`, `joined.length > MAX_REPLY ? joined.slice(0, MAX_REPLY) : joined` tronque silencieusement à 12 000 caractères. La validation D3 peut ensuite traiter une réponse incomplète comme complète.

**Exit :** aucun contenu amputé sous un statut valide. Qualifier la limite SDK/M1 du champ texte, choisir un traitement borné et explicite (échec de validation ou format de représentation compatible prouvé), sans inventer de deuxième tour ni seconde source de vérité.

### A2 — Dérivation textuelle de la totalité des sections (P0, C-04/17)

`buildExhaustiveBlockFallback()` pour `relations` restitue `label` et arêtes `from → to`, mais ne conserve pas systématiquement `node.detail/kind/laneId` ni `edge.relation`. Or ce sont des éléments de qualification. Auditer aussi `textAlternative`, provenance, choix et références selon leurs propriétaires.

**Exit :** tables de mapping champ canonique → texte/rendu/repli, tests de toutes familles et assertions négatives ; ne pas réécrire cognitivement les faits dans le renderer.

### A3 — Collision de versionnement sémantique (P0, C-05/06)

Le parser détermine `canonical_sections` par le seul nom `conversational-composition-projection-v1`, déjà employé en Strategy B. Le même payload historique pourrait ainsi recevoir une nouvelle autorité à la relecture.

**Exit :** identité de format et autorité non ambiguës dans la persistance et le replay ; recherche réelle de projections historiques, tests négatifs de requalification rétroactive ; aucune migration ni réécriture d'historique sans gate.

### A4 — Parité fixture et fournisseur au même gate (P0 qualification, C-02/04/20)

Le handoff affirme que les fixtures sont désormais validées comme les sorties LIVE. Le diff publié de `nora-adapter.ts` n'établit pas l'appel dans `fixtureReply()`, contrairement au chemin de validation fournisseur visible. **La preuve manque ; cela ne constitue pas une démonstration de panne du worktree local.**

**Exit :** tracer la fonction réellement appelée par chaque chemin et tester avec `replyDraft` volontairement divergent ; la sortie affichée et persistée doit provenir de la dérivation commune, jamais du texte indépendant.

### A5 — Sémantique graphique et fidélité Figma (P1, C-10/11/12/18)

Le vrai arbre est validé et toutes les arêtes parallèles sont parcourues. Il reste à démontrer leurs relations visibles et leurs directions (en particulier `sync` / `⇄`) et à confronter les rendus CSS aux Figma 07–09.

**Exit :** captures et métriques inspectables, layout connecté ou gap honnêtement déclaré, pas de PASS par seule présence d'attributs DOM.

### A6 — Qualification et réception (P1/P2, C-15/17/19/20/21/22)

Les tests 29 PASS + T02 PASS sont ciblés et rapportés. Ne pas en inférer PG/REAL, a11y, split/zoom ni reprise. Le choix spontané Nora en LIVE nécessite GO spécifique.

**Exit :** Review Pack Full d'un cycle, état Git local, tests discriminants, niveau de preuve explicite et décisions Morris réservées.

## 11. Reste à faire — plan de convergence intégré

| Priorité | Résultat cohérent | Travail IN | Preuve/gate de sortie |
|---|---|---|---|
| **P0-I — Intégrité canonique** | C-04/C-17 | Corriger A1/A2 : texte et repli exhaustifs, traitement sûr des limites/invalidités | Oracles >12k, role/conditions/relations, échec sans perte silencieuse |
| **P0-II — Compatibilité durable** | C-05/C-06/C-19 | Corriger A3 : version/autorité stables, ancien E05 et ancien projection-v1 non requalifiés | PG/refresh/replay ancien/nouveau, sans migration non autorisée |
| **P0-III — Chemin D3 commun** | C-02/C-04/C-20 | Établir puis corriger si nécessaire A4 : fixture et output LIVE sous même gate | Test divergent par les deux parcours, même contenu affiché/persisté |
| **P1-I — Graphes et qualité visuelle** | C-10/11/12/15/18 | Qualifier A5 : sync, connecteurs, Figma 07–09, zoom/split/a11y | Browser avec vrais oracles de géométrie et comparaison Figma |
| **P1-II — Non-régression globale** | C-01/07/08/09/14/16/17/20 | Tester famille comparison/sequence, cardinalités, fallback et droits ; typecheck/build/PG, ACK propre | Matrice CV-T actualisée + preuves et réserves nommées |
| **P2 — Recette produit** | C-18/21/22, W5 | LIVE borné, qualité éditoriale et décision Morris plus tard | GO LIVE, gate RECETTE puis Gate C indépendants |
| **DIFFÉRÉ CONFORME** | C-13 | Charts quantitatifs seulement sur besoin réel/données fondées | Aucun moteur supplémentaire par inertie |

**Intégration :** un seul cycle correctif D3/UX cohérent, pas de micro-tâches autonomes. L'achèvement des P0 précède tout verdict de réception ; les P1 peuvent être livrés et qualifiés ensemble si interfaces maîtrisées. Éviter une nouvelle architecture parallèle. Le prochain contrat Cursor SFIA v2.6 doit être instancié depuis le guide et le template **Git main**, avec Review Pack Full et handoff L3.

**Ce document ne modifie pas la décision Strategy A, la Roadmap, le SEF, les contrats 01–05, le code, la DB ou les gates Git.**
