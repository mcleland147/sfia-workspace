# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.5 — 18 novembre 2026 (revue du correctif A1–A6 / handoff `28c73f19`)  
**Statut :** DOCUMENTED / REVIEW CANDIDATE — analyse non normative D1 ; ni décision D2 nouvelle, ni VALIDATED SPEC supplémentaire, ni ADOPTED.  
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora », composition conversationnelle adaptative et remplacement de l'expérience E05.  
**Nature :** contrôle de convergence de la vision et des contrats avec le candidat Cursor **local non publié**, à partir du Review Pack distant ; aucune affirmation sur le working tree non observé.  
**Sources de conception :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Fonctionnel/UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Conclusion et cadrage de la revue

**Décision de principe Morris, 18/11/2026 :** **Strategy A — sections sémantiques canoniques** pour les nouveaux tours, avec texte dérivé et graphique facultatif ; préserver les qualifications historiques et toutes les autorités D3/M1/D6. Aucun GO LIVE/REAL, migration DB ni promotion.

**État observé dans le Review Pack Full `28c73f19` (code reproduit, pas worktree local) :**
- **A1 — correction de code recevable :** plus de `slice(0,12000)` ; un dépassement produit `CV_DERIVE_OVERFLOW`, puis un refus de qualification `CANONICAL_REPLY_OVERFLOW`. La chaîne LIVE a un traitement `UNKNOWN` de la qualification invalide ; les seuils exacts 11 999 / 12 000 / 12 001 et le tour complet restent à démontrer.
- **A2 — amélioration partielle :** le fallback des relations restitue `node.kind/detail/laneId`, les types d'arêtes et conditions, ainsi que les sources lorsque renseignées. La parité exhaustive de toutes les familles, de `textAlternative` et des références/actions doit encore être testée ; les choix et références gouvernés ne se transforment pas en prose-action libre.
- **A3 — correction de code recevable :** WRITE `conversational-composition-canonical-v1` ; READ `e05-visual-composition-v1`, `conversational-composition-projection-v1` (toujours `legacy_projection`) et `canonical-v1` (`canonical_sections`). La preuve PG/replay et les anciens vrais enregistrements ne sont pas couverts.
- **A4 — **BLOQUANT confirmé dans le diff** : `fixtureReply()` appelle bien `validateNoraTurnQualification()`, mais **n'utilise sa sortie que si `validatedFixture.ok`** ; en cas d'échec, la qualification brute est conservée. Le chemin LIVE traite au contraire l'échec en `UNAVAILABLE/UNKNOWN`. La parité inclut la politique de rejet, pas seulement l'appel à la fonction.
- **A5 — correction de code recevable pour le sens de `sync` :** `→` et « sync vers » remplacent `⇄` ; l'arbre à parent unique et l'itération de toutes les arêtes parallèles restent acquis. Les connexions nœud↔nœud de Figma 07–09, la géométrie et l'expérience premium ne sont pas démontrées.
- **A6 — couverture rapportée :** 75 Vitest PASS + T02 Playwright 1 PASS. Les tests A4 couvrent le validateur isolé, **pas** la sortie invalide du parcours `fixtureReply()`. Le test « exact boundary » décrit dans le pack utilise 3 000 et 9 000 caractères, **pas** 12 000 exacts. Pas de preuve PG/replay exhaustif, captures visuelles inspectables, zoom/split/a11y, ni LIVE.

**Verdict de revue : `REVIEW PACK FULL ACCEPTED — PRODUCT NOT READY FOR RECEPTION`. A4 reste un défaut fail-closed de portée P0 ; A1/A2/A3 restent à couvrir par des oracles de bout en bout ; A5/A6 restent partiels.** Cela n'annule pas les corrections acquises et ne confère aucun statut BEHAVIOR PROVEN, Gate C PASS ou ADOPTED.

## 2. Sources Git, preuves et limites

| Source | Ref/empreinte observée | Qualification |
|---|---|---|
| Dépôt | `mcleland147/sfia-workspace` | Next : `projects/sfia-studio-next/` |
| Baseline `main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` | SEF, Roadmap, décisions et code courant distant ; snapshot Roadmap du 15/11 antérieur à la livraison locale |
| Branche documentaire (avant V0.5) | `docs/next-ml4d-registre-revues-20261116@0535470d4ac4a15a4dda37bd61f74bb20117e9bc` | Sources 01–06 candidates, non mergées |
| Dernier Review Pack | `sfia/review-handoff@28c73f19da2d550444abdf0fa0e83933d0067dfa` | Full de 3 630 lignes, nouveaux fichiers et diffs |
| Blob Review Pack | `1900608f2d60dbb8b43467a9ba6c743f89a8201e` | Fichier distant relu |
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
| **C-02 — VP-02, UX-C/F** | Un message composite, identité et qualification cohérentes dans tous les parcours | Le même validateur est appelé par LIVE et fixture, mais la fixture ignore son échec | **BLOQUANT A4** : chemin fixture susceptible de renvoyer une qualification invalide en COMPLETE, contrairement à LIVE | Fail-closed de bout en bout + tests fixture→adaptateur→service→message, sans second run ; vérifier IDs et statuts |
| **C-03 — VP-06, doc 03** | Nora porte le sens ; Studio valide et rend, sans autre moteur cognitif | `visualComposition` porte les sections ; admission/renderer séparés ; aucun second agent introduit | **ALIGNÉ (ARCHITECTURE)** | Conserver responsabilités, aucune action métier déclenchée par composant |
| **C-04 — VP-03/04, CV-02/06** | Une source sémantique unique et deux restitutions fidèles | `canonical-v1` dérive le texte ; overflow explicitement refusé ; fallback enrichi | **PARTIEL A1/A2 + BLOQUANT A4** : garde de longueur et champs de relations corrigés en code, mais test seuil exact/familles et traitement de rejet fixture insuffisants | Prouver limites exactes et erreur de tour, mapping exhaustif des champs, aucun FINAL trompeur ; refus fixture identique à LIVE |
| **C-05 — doc 04/05** | Nouveau WRITE et READ historique sans confusion d'autorité | `canonical-v1` seul au WRITE, `projection-v1` et E05 relus en `legacy_projection` | **ALIGNÉ (CODE A3)** ; replay réel et compatibilité SDK hors couverture | Tests agents outputType sans fournisseur, versions legacy et nouveaux tours persistés ; pas de migration |
| **C-06 — M1/M5, CV-11** | Persistance stable et relecture ancienne/nouvelle, une identité de tour | `resultJson` existant rapporté ; WRITE nouveau et READ tri-version en code | **PARTIEL A3/A4** : PG/replay et échec fixture non qualifiés | TEST replay E05/projection-v1/canonical-v1, output invalide, UNKNOWN, refs/choix et aucun FINAL inattendu |

### B — Familles et représentations

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-07 — GV-01/02** | Narration naturelle seule par défaut lorsque graphique inutile | `text` et `replyDraft` possibles, admission narrative ; fixture dédiée UNIT | **ALIGNÉ (MÉCANISME)**, choix éditorial LIVE non démontré | Test prose longue, absence de double affichage, jugement LIVE ultérieur |
| **C-08 — Figma 03/04** | Cartes/matrices avec attributs attachés à leur option | Renderer comparatif existant, tableau + détails ; source canonique nouvelle | **PARTIEL** : données à prouver sans omission et cas denses non reçus | Tests 3/5/8/12 alternatives, attributs et critères, vue étroite, matrice réelle |
| **C-09 — Figma 02/06** | Étapes, dépendances et temporalité justifiées | Séquence horizontale/verticale construite | **PARTIEL** | Tester détails/prérequis/dates, texte dérivé et reflow |
| **C-10 — Figma 07** | Graphe dirigé réellement lisible | Couches topologiques CSS et arêtes en liste `→` | **PARTIEL A5** : connecteurs visuellement liés aux nœuds non prouvés | Browser/Figma 07, comparaison géométrie ; fallback exhaustif ne vaut pas diagramme PASS |
| **C-11 — Figma 08** | Véritable arbre conditionnel sans enfant partagé | `validateDecisionTree` rejette `inDegree>1` des non-racines, cycles et racines multiples ; test shared-child | **ALIGNÉ (TOPOLOGIE CODE)** ; sémantique conditionnelle, géométrie et a11y non prouvées | Conserver correctif ; tester branches et lecture Figma 08 |
| **C-12 — Figma 09** | Voies parallèles et toutes relations qualifiées, sans faux sens | Toutes les arêtes parcourues ; `sync` orienté `→` avec « sync vers » | **ALIGNÉ (CODE A5)** sur exhaustivité et sens déclaré, **PARTIEL UX** sur disposition/qualifications | Vérifier scénarios mixant `sync/flow/depends_on`, capture/runtime et layout Figma 09 |
| **C-13 — GV-06** | Graphiques quantitatifs seulement sur données établies | Pas de moteur quantitatif introduit | **DIFFÉRÉ CONFORME** | Aucun développement gratuit, maintien des règles de source/unité |
| **C-14 — CV-04/05** | Densité et cardinalité adaptatives | `MAX_ALTS=12`, 8 admises/18 refusées en test précédent | **PARTIEL** | Browser 2/3/5/8/12/18, état de repli complet, largeur mesurée |

### C — UX, sécurité, continuité

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-15 — CV-T11/12/20** | Split, zoom, conteneur étroit, clavier, aucun contenu coupé | CSS responsive, `ResizeObserver` ; T02 nominal 1440 PASS rapporté | **PARTIEL / A6** | Géométrie 390/1280/1440, split 50/50, zoom 200–400 %, clavier/focus, longs libellés |
| **C-16 — UX-D/E** | Sources/actions actives selon propriétaires, jamais effet par graphique | Références et choix canoniques réutilisés, aucune autorité D6 ajoutée | **PARTIEL** : droits dynamiques/revocation non requalifiés | Test sources périmées et actions désactivées, non-régression effet |
| **C-17 — CV-10/15** | Repli exhaustif à l'erreur, sans nouveau run D3 | Fallback enrichi : kind/detail/lane/relation, provenance et conditions ; error boundary existant | **PARTIEL A2/A6** : correspondance toutes familles et injection d'erreur navigateur non prouvées | Table champ→vue/repli, test erreur réelle d'un bloc, autres blocs préservés |
| **C-18 — VP-07, Figma 01–09** | Présentation premium fidèle aux références et au contenu | 3 PNG 1440 cités, non consultables dans handoff ; CSS dirigé | **NON PROUVÉ A5/A6** | Captures réellement inspectables, revue Figma/runtime, densité et esthétique, gate Morris |
| **C-19 — UX-F, R05** | Refresh, identité, réconciliation et continuité préservés | M1 inchangé rapporté ; ACK R05 antérieur hors lot | **PARTIEL** | Vérifier refresh/UNKNOWN, qualifier ACK préexistant à son propriétaire, pas de réparation R05 par dérive |

### D — Qualification et réception

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-20 — CV-T01–20** | Preuves UNIT/PG/BROWSER, oracles discriminants, niveaux explicites | Handoff 28c73f19, 3 630 lignes ; **75 Vitest ciblés et 1 T02 PASS rapportés** ; tests A4 limités au validateur ; cas 12 000 exact non exécuté dans test annoncé | **PARTIEL / BLOQUANT A4** : pas de test `fixtureReply()` invalide, pas de replay PG complet ni captures inspectées | Tests end-to-end FAKE/DEV du rejet, 11 999/12 000/12 001, mapping A2, lecture 3 versions, BROWSER/Figma et typecheck/build comparés |
| **C-21 — VP-05** | Pertinence spontanée de Nora en demande libre | Fixtures déterministes uniquement ; LIVE non exécuté | **NON PROUVÉ** | GO Morris LIVE spécifique + jugement éditorial produit ultérieur |
| **C-22 — Gate C** | Réception et promotions distinctes sous arbitrage Morris | Handoff `28c73f19` distant contrôlé, candidat produit local non publié | **GATE NON FRANCHI** : A4 non fail-closed et preuves de réception manquantes | Revue du candidat, décision Morris puis gates Git/RECETTE/Gate C distincts |

## 5. WBS de convergence — cinq activités du même macro-lot

| Activité | Résultat attendu | Acquis Strategy A | Gate restant |
|---|---|---|---|
| **W1 — Direction artistique** | Figma 01–09 et grammaire de lecture | Maquettes de direction, CSS et captures déclarées | Comparaison Figma/runtime effectivement inspectée et acceptation Morris |
| **W2 — Contrat et architecture** | Vérité unique, M1/D3, version, autorités | WRITE canonical-v1 et READ tri-version, dérivation sans slice | Prouver échec uniforme fixture/LIVE, longueurs exactes et compat PG |
| **W3 — Construction intégrée** | React, admission, topologie, familles et tests | Single-parent, toutes arêtes, sync orienté, fallback relations enrichi | Corriger A4, clore parité du texte et qualifier graphe Figma |
| **W4 — Qualification croisée** | UNIT/PG/BROWSER, a11y, Figma et non-régression | 75 PASS UNIT + T02 PASS rapportés ; PNGs non inspectables | Tests négatifs sur parcours, vérification PG/refresh et Figma, split/zoom, preuves inspectables |
| **W5 — Recette produit** | Pertinence Nora et réception utilisateur | Non engagée | GO LIVE/REAL, recette Morris, Gate C distincts |

**Règle :** W1–W5 structurent **un macro-lot intégré**, pas cinq nouveaux micro-lots.

## 6. Carte de traitement et dépendances

| Classe | Éléments | Règle |
|---|---|---|
| **CONSERVER** | D3/Studio séparés ; composant React/admission ; choix/références ; parser E05 ; `resultJson` ; code arbre single-parent et rendu de toutes arêtes | Ne pas reconstruire les acquis |
| **CORRIGER P0** | **A4** : `fixtureReply()` doit appliquer un échec de validation comme le LIVE ; aucun COMPLETE avec qualification brute invalide | Contrôle canonique commun réellement fail-closed, sans fuite d'effet ou double génération |
| **QUALIFIER P1** | A1/A2/A3 : seuils exacts, champs substantiels et 3 versions en replay ; A5/A6 : Figma, zoom/split/a11y, erreurs | Tests unitaires ciblés insuffisants pour conclure la réception utilisateur |
| **DIFFÉRER / GATE** | LIVE/REAL, graphiques quantitatifs sans source, promotion Git/RECETTE/STABLE | GO Morris distinct et justification |
| **RESTER HORS SCOPE** | Refonte D3 générale, moteur IA n°2, migration physique, réparation ACK R05, moteur graphique universel | STOP si indispensable |

**Séquence logique :** source structurée unique → projection textuelle complète et bornée → marqueur de version/autorité durable → même gate fixture/LIVE → reprise historique → graphes et UX → preuves de sortie. La sécurité du repli n'efface pas une capacité graphique non livrée.

## 7. Contrat de preuve — oracles discriminants

| Contrôle | Oracle attendu | Couche |
|---|---|---|
| **A1 troncature** | `CANONICAL_REPLY_OVERFLOW` présent en code ; démontrer 11999/12000/12001 et 20k (valeur effective dérivée) ; pas de COMPLETE côté fixture sur sortie invalide | UNIT + TEST parcours fixture/LIVE simulé |
| **A2 champs** | Fallback enrichi observé ; prouver mapping exhaustif text/relations/sequence/comparison/synthesis et alternatives, sources/actions selon leur propriétaire | UNIT + BROWSER |
| **A3 versionnement** | Nouveau `canonical-v1` ; anciens `e05`/`projection-v1` ne doivent jamais recevoir `canonical_sections` ; replay réel à prouver | UNIT + PG/REPLAY |
| **A4 fixture** | **Contre-exemple confirmé :** si `validatedFixture.ok=false`, le diff `fixtureReply()` conserve `qualification` brute ; tester que le parcours échoue sans COMPLETE/FINAL et avec état cohérent au LIVE, sans appel fournisseur | INTEGRATION/FAKE + BROWSER |
| **A5 graphes** | Single-parent et toutes arêtes conservés, `sync` orienté corrigé ; démontrer Figma 07–09 et métriques réelles ; fallback ≠ diagramme connecté | UNIT + BROWSER/Figma |
| **A6 robustesse** | Longs contenus, choix/réfs expirés, panne de renderer, zoom/split, accessibilité, no regressions TypeScript/build, UNKNOWN, ACK qualifié | INTEGRATION/PG/BROWSER |

**Fake/Real :** 75 Vitest rapportés et T02 ne signifient pas fournisseur LIVE, ni REAL END-TO-END. Aucun appel externe autorisé par la publication documentaire.

## 8. Décisions et stops

- **Arbitrage déjà exprimé :** Strategy A comme cible pour les nouveaux tours. Ne pas réouvrir Strategy B comme architecture cible.
- **Décision encore nécessaire si structurante :** modification de schéma D3/SDK/versionnement susceptible de rompre des consommateurs historiques ou nécessitant migration. Cursor doit d'abord mesurer blast radius et proposer la voie compatible ; **STOP Morris** en cas de rupture.
- **Interdits sans GO spécifique :** mutation de gouvernance, nouvelle DB, nouvel effecteur, push produit/PR/merge, LIVE/REAL, RECETTE, STABLE, adoption ou Gate C.
- **Observation limitée :** code local non accessible, captures non transmises ; éviter les PASS non fondés.
- **Nommage :** responsabilités produit, pas noms de chantier historiques ou héritage E05 pour nouvelles capacités.

## 9. Résumé du verdict après correctif `28c73f19`

| Domaine | Verdict |
|---|---|
| Handoff | **FULL EXPLOITABLE** — 3 630 lignes et diffs accessibles |
| Strategy A | **IMPLEMENTED (CODE CANDIDATE)** — dérivation et autorité unifiée |
| A1 (overflow) | **CORRECTION CODE RECEVABLE** ; seuils exacts et statut du tour à tester |
| A2 (champs) | **AMÉLIORATION CODE RECEVABLE** sur relations ; parité totale à démontrer |
| A3 (version) | **CORRECTION CODE RECEVABLE** — WRITE canonical-v1, READ tri-version ; PG/replay à démontrer |
| A4 (fixture/LIVE) | **BLOQUANT** — même appel de validation, mais échec ignoré côté fixture |
| A5 (sync/graphes) | **CORRECTION CODE RECEVABLE** sur le sens sync ; Figma 07–09 et géométrie non reçus |
| A6 (preuves) | **75 Vitest PASS + 1 T02 PASS rapportés**, tests de parcours invalides et preuve visuelle absents |
| LIVE/REAL, RECETTE, Gate C | **NOT RUN / NON ACQUIS** |

**Verdict : `READY WITH BLOCKING RESERVES — FIXTURE FAILURE PATH NOT SAFE`** pour la conformité du candidat. Le Review Pack est accepté, mais C-04 et C-20 ne sont pas BEHAVIOR PROVEN et la réception ML4D reste ouverte.

## 10. Findings résiduels et conditions de sortie

### A4 — Échec fixture non fail-closed (P0 — correctif prioritaire)

Dans le diff `nora-adapter.ts`, `fixtureReply()` exécute `validateNoraTurnQualification(qualification)` puis ne remplace `qualification` que lorsque `validatedFixture.ok`. **En cas de refus**, la qualification non validée reste disponible et peut aboutir à un résultat COMPLETE, contrairement à la branche LIVE qui passe par `unavailableQualification` et UNKNOWN.

**Exit :** même politique d'échec pour fixture et LIVE, sans confusion « provider contacté » ; pas de COMPLETE/FINAL invalide, pas de génération supplémentaire, pas de changement d'identité/idempotence ou d'effet. Test de l'adaptateur à sa véritable frontière avec cas `CANONICAL_REPLY_OVERFLOW`, schéma invalide et contenu divergent. L'appel du validateur n'est pas une preuve de parité tant que sa valeur d'échec est ignorée.

### A1 — Limites déterministes exactes (P1 de qualification)

Le code ne tronque plus et propage `CANONICAL_REPLY_OVERFLOW`. Cependant le test nommé « under and at limit » exécute une entrée de 3 000 caractères et un agrégat de 9 000 ; il ne vérifie pas 11 999, 12 000 et 12 001 caractères de **texte effectivement dérivé**.

**Exit :** exactitude de la borne (`join`, séparateurs compris), payload long, réserve après la limite, refus du tour non finalisé ; préserver la provenance et les logs sans afficher un message trompeur.

### A2 — Exhaustivité inter-familles (P1 de qualification)

Le fallback `relations` contient désormais kind/detail/lane/relation/conditions, et le `sequence` contient rôle, détail, dépendances et dates. La parité totale avec les autres propriétés, les familles `comparison/synthesis`, `textAlternative`, provenance et contrôles de `references/choices` reste à prouver.

**Exit :** table de correspondance propriété canonique → texte dérivé → vue graphique → fallback, oracles négatifs sur faits/hypothèses/conditions et sur les actions contrôlées ; pas de champs substantiels silencieusement omis.

### A3 — Compatibilité en persistance (P1 de qualification)

Le code distingue correctement e05/projection-v1/canonical-v1 et n'attribue l'autorité `canonical_sections` qu'à la nouvelle version. Il reste à montrer que les vrais parcours de sauvegarde/relecture/replay préservent les versions, le texte et l'identité sans requalification rétroactive.

**Exit :** lecture des trois formats en intégration/PG DEV et, si données historiques indisponibles, fixtures représentatives avec réserve explicite ; aucune migration.

### A5 — Conformité graphique (P1 — capacité)

La direction de `sync` est corrigée, mais les dépendances restent représentées comme couches de nœuds et listes d'arêtes. Les captures `f5-runtime-*.png` sont référencées dans le handoff sans être inspectables à distance.

**Exit :** test Browser de géométrie/connecteurs/overflow et comparaison avec les frames Figma 07–09, tableaux/cartes 03–04, split et zoom ; si CSS insuffisant, qualification bornée d'une solution, pas ajout automatique d'une bibliothèque.

### A6 — Non-régression et maturité (P1/P2)

75 Vitest et T02 PASS sont rapportés, mais ni le parcours invalide de fixture, ni PG/replay, ni l'ensemble des CV-T, ni les captures Figma inspectables ne sont prouvés. Nora LIVE et l'appréciation éditoriale sont hors scope sans nouveau GO.

**Exit :** commandes reproductibles, TypeScript/lint/build, tests discriminants, niveaux UNIT/PG/BROWSER distincts, Review Pack Full et handoff L3, puis revue Morris de produit sous gate.

## 11. Reste à faire — un macro-lot de clôture intégré

| Priorité | Résultat cohérent | Travaux nécessaires | Preuve/gate |
|---|---|---|---|
| **P0 — Fail-closed D3 fixture/LIVE** | C-02/04/20 | Corriger branche d'échec `fixtureReply()`, préserver état UNKNOWN/UNAVAILABLE et identités | Échec A4 reproduit puis test négatif vert depuis l'adaptateur jusqu'au résultat de tour |
| **P1 — Preuves d'intégrité** | C-04/05/06/17/19 | Tests seuils exacts, mapping inter-familles, replay e05/projection-v1/canonical-v1 et persistance DEV | UNIT + INTEGRATION/PG + refresh, aucune perte ni requalification |
| **P1 — Réception graphique** | C-08/09/10/11/12/14/15/18 | Graphes réellement connectés si requis, relations fidèles, Figma/runtime 03/04/07/08/09, zoom/split/clavier | Captures inspectables, mesures géométriques et comparaison ; écarts explicitement PARTIAL |
| **P1 — Non-régression** | C-16/17/20 | Choix/références expirés, erreur de renderer, typecheck/build, UNKNOWN/recovery, preuve ACK R05 préexistant vs régression | Review Pack Full, matrice CV-T, verdict sans faux PASS |
| **P2 — Recette produit** | C-01/18/21/22 | Nora LIVE sous GO distinct et jugement éditorial Morris, Gate C puis ML5 distincts | Preuves REAL autorisées, réception et promotions sous décisions Morris |
| **DIFFÉRÉ CONFORME** | C-13 | Graphiques quantitatifs selon besoin fondé | Aucun moteur gratuit |

**Intégration :** un seul correctif ciblé + preuve end-to-end, sans redéfinir Strategy A, sans corriger R05 hors responsabilité, sans nouvelle persistance. Si Figma ou PG n'est pas accessible, déclarer `NOT RUN` et stopper toute revendication forte correspondante ; ne pas inventer une réception.

**Ce document est un compte rendu D1 et une préparation de convergence ; il ne modifie ni SEF, ni Roadmap, ni décisions, ni code, ni autorisation Git de promotion.**
