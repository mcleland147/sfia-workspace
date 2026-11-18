# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.6 — 18 novembre 2026 (revue du correctif V0.5 / handoff `0d912e14`)  
**Statut :** DOCUMENTED / REVIEW CANDIDATE — analyse non normative D1 ; ni décision D2 nouvelle, ni VALIDATED SPEC supplémentaire, ni ADOPTED.  
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora », composition conversationnelle adaptative et remplacement de l'expérience E05.  
**Nature :** contrôle de convergence de la vision et des contrats avec le candidat Cursor **local non publié**, à partir du Review Pack distant ; aucune affirmation sur le working tree non observé.  
**Sources de conception :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Fonctionnel/UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Conclusion et cadrage de la revue

**Décision Morris maintenue :** Strategy A — sections sémantiques canoniques pour les nouveaux tours ; texte dérivé et visuel facultatif ; relecture des anciens tours sans modification rétroactive de leur autorité. Ni migration DB ni extension d'autorité, LIVE, promotion ou Gate C.

**Acquis reconnus à la lecture du Review Pack `0d912e14` :**
- **A4 / C-02/04/20 — P0 précédent fermé en code FAKE :** `fixtureReply()` traite désormais `!validatedFixture.ok` par `unavailableQualification`, `status: UNKNOWN`, `providerContacted: NO` ; le test d'adaptateur `generateNoraReply()` exerce un overflow et des intentions dupliquées. Ce parcours ne finalise plus une qualification brute rejetée.
- **A1 / C-04 — corrigé et couvert à la frontière de dérivation :** aucune coupe silencieuse ; erreur `CANONICAL_REPLY_OVERFLOW` et tests précis 11 999 / 12 000 / 12 001 caractères, ainsi que dépassement multi-blocs.
- **A2 / C-04/17 — couverture déterministe élargie :** tests text/comparison/sequence/relations/synthesis et respect de l'ownership des choices/references. **Réserve ciblée :** `textAlternative` peut être ignoré si les 80 premiers caractères sont présents dans la reconstruction, même si sa fin contient une information complémentaire. La portée normative de `textAlternative` doit être explicitée, puis prouvée sans perte de substance.
- **A3 / C-05/06 — aligné en code :** WRITE `conversational-composition-canonical-v1` ; READ `conversational-composition-projection-v1` (Strategy B) et `e05-visual-composition-v1` sans requalification d'autorité ; audit de véritables tours historiques PG et refresh **NOT RUN**.
- **A5 / C-10/11/12/18 — amélioré, réception visuelle NON FAITE :** arbre mono-parent, toutes arêtes du parallèle et `sync vers` orienté ; couches CSS/listes d'arêtes et PNG locaux ne démontrent pas une conformité graphique Figma 07–09.
- **A6 / C-15/20 — tests rapportés :** **94 Vitest PASS + 1 Playwright T02 PASS**, `tsc` fichiers touchés CLEAN ; `tsc` global comporte des erreurs préexistantes rapportées. Résultats non réexécutés indépendamment. LIVE/REAL NOT RUN.

**Nouveau point de contrôle A7 (P0 à qualifier avant réception) — composition canonique invalide ou sans substance :** dans `validateNoraTurnQualification()`, l'échec `CV_DERIVE_OVERFLOW` est bien refusé ; mais un `CV_DERIVE_EMPTY` **supprime** `visualComposition` et peut laisser le `replyDraft` indépendant. Le chemin `parseVisualComposition() === null` supprime aussi la composition sans nécessairement refuser le message. **La faisabilité réelle de ces branches avec le schéma d'entrée doit être reproduite avant de déclarer un défaut runtime.** Un message purement narratif qui omet `visualComposition` est valide et ne doit pas être pénalisé.

**Verdict : `READY WITH RESERVES — CANONICAL INVALID-OUTPUT PATH TO QUALIFY`.** A4 est **levé**, A7 est une possibilité de divergence **à tester** et non un incident LIVE observé. Le candidat reste local, la réception graphique et PG ne sont pas acquises et aucune source ne permet ADOPTED ou Gate C PASS.

## 2. Sources Git, preuves et limites

| Source | Ref/empreinte observée | Qualification |
|---|---|---|
| Dépôt | `mcleland147/sfia-workspace` | Next : `projects/sfia-studio-next/` |
| Baseline `main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` | SEF, Roadmap, décisions et code courant distant ; snapshot Roadmap du 15/11 antérieur à la livraison locale |
| Branche documentaire (avant V0.6) | `docs/next-ml4d-registre-revues-20261116@aa12d385dba8e2e5983477f8020658dea1004a2a` | Sources 01–06 candidates, non mergées |
| Dernier Review Pack | `sfia/review-handoff@0d912e14ff3ffa29760908658cf3f8d3c64b1601` | Full de 3 528 lignes, nouveaux fichiers et diffs |
| Blob Review Pack | `c76ac0aab3b5eba4e0a8aa2e0b445dbeecdf67a3` | Fichier distant relu |
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
| **C-02 — VP-02, UX-C/F** | Un message composite, identité et qualification cohérentes sur tous les parcours | `fixtureReply()` fail-closed `UNKNOWN/UNAVAILABLE` avec `providerContacted:NO` ; tests via `generateNoraReply()` | **ALIGNÉ (ADAPTATEUR FAKE A4)** ; invalidité canonique A7 et M1/PG non prouvés | Tests composition rejetée/vide, persistance/relecture et absence d'un deuxième message ou effet |
| **C-03 — VP-06, doc 03** | Nora porte le sens ; Studio valide et rend, sans autre moteur cognitif | `visualComposition` porte les sections ; admission/renderer séparés ; aucun second agent introduit | **ALIGNÉ (ARCHITECTURE)** | Conserver responsabilités, aucune action métier déclenchée par composant |
| **C-04 — VP-03/04, CV-02/06** | Une source de sens pour texte/visuel ; aucun statut FINAL mensonger | `canonical-v1`, texte dérivé ; overflow explicite ; bornes 11999/12000/12001 testées ; `fixtureReply` fail-closed | **PARTIEL / A7 À QUALIFIER** : `CV_DERIVE_EMPTY` et parse-null ont des chemins de suppression de composition ; reachability à démontrer ; `textAlternative` 80 caractères à examiner | Cas canoniques invalides et sans substance avec oracles de refus, sans toucher à une narration valide ; test préfixe identique + suffixe substantiel |
| **C-05 — doc 04/05** | WRITE canonique et READ historique sans collision d'autorité | `canonical-v1` WRITE ; `projection-v1` + E05 READ en legacy ; tests de schéma/adapter | **ALIGNÉ (CODE)** ; fournisseur LIVE et PG historique NOT RUN | Conserver contrat, tests de consommation et replay réel sans migration |
| **C-06 — M1/M5, CV-11** | Identité, persistance, reprise et trois versions durables | `resultJson` existant rapporté, tests de compatibilité fixtures et de rejet A4 | **PARTIEL** : pg/replay/UNKNOWN durable non prouvés | PG DEV : sauvegarde, refresh, anciennes E05/projection-v1, canonical-v1, UNKNOWN/UNAVAILABLE, choix/réfs, no double final |

### B — Familles et représentations

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-07 — GV-01/02** | Narration naturelle autorisée sans structure graphique | `visualComposition` omise est une voie légitime, `replyDraft` garde son autorité | **ALIGNÉ (MÉCANISME)** ; LIVE NON PROUVÉ | Distinguer strictement omission volontaire vs composition canonique déclarée invalide ; préserver prose libre |
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
| **C-17 — CV-10/15** | Repli textuel complet en erreur de composant, sans re-génération | Fallback enrichi relations/familles et error boundary existant ; tests unitaires A2 | **PARTIEL** : heuristique `textAlternative.slice(0,80)` peut supprimer une fin informative ; injection navigateur absente | Oracles de suffixe substantiel, alternatives et error boundary BROWSER, aucun effet D3 induit |
| **C-18 — VP-07, Figma 01–09** | Présentation premium fidèle aux références et au contenu | 3 PNG 1440 cités, non consultables dans handoff ; CSS dirigé | **NON PROUVÉ A5/A6** | Captures réellement inspectables, revue Figma/runtime, densité et esthétique, gate Morris |
| **C-19 — UX-F, R05** | Refresh, identité, réconciliation et continuité préservés | M1 inchangé rapporté ; ACK R05 antérieur hors lot | **PARTIEL** | Vérifier refresh/UNKNOWN, qualifier ACK préexistant à son propriétaire, pas de réparation R05 par dérive |

### D — Qualification et réception

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-20 — CV-T01–20** | Preuves discriminantes UNIT/PG/BROWSER/REAL séparées | Pack `0d912e14` Full ; **94 Vitest PASS + T02 1 PASS rapportés**, fail-path A4 testé par adaptateur, limites exactes couvertes | **PARTIEL** : A7 non testé de manière discriminante, aucun PG historique réel ni captures Figma inspectables ; TypeScript global non vert rapporté | Tests A7 négatifs depuis `generateNoraReply` + cas positif narrative-only, alt suffix ; PG/refresh, BROWSER/Figma, typecheck/build comparés |
| **C-21 — VP-05** | Pertinence spontanée de Nora en demande libre | Fixtures déterministes uniquement ; LIVE non exécuté | **NON PROUVÉ** | GO Morris LIVE spécifique + jugement éditorial produit ultérieur |
| **C-22 — Gate C** | Réception Morris distincte de construction, tests et promotion | Handoff Full distant `0d912e14`, worktree produit local non publié | **GATE NON FRANCHI** : A7 non qualifié, preuve PG/Figma/LIVE absente | Gate d'acceptation Morris après preuve adéquate, aucun push produit/PR/merge implicite |

## 5. WBS de convergence — cinq activités du même macro-lot

| Activité | Résultat attendu | Acquis Strategy A | Gate restant |
|---|---|---|---|
| **W1 — Direction artistique** | Figma 01–09 et grammaire de lecture | Maquettes de direction, CSS et captures déclarées | Comparaison Figma/runtime effectivement inspectée et acceptation Morris |
| **W2 — Contrat et architecture** | Vérité unique, M1/D3, version, autorités | A1–A4 corrigés au code et testés en FAKE/UNIT, nouveau WRITE + READ tri-version | A7 invalid-output à qualifier, intégration PG/refresh à démontrer |
| **W3 — Construction intégrée** | React, admission, topologie, familles et tests | Arbre single-parent, liens parallèles et sync orienté, fallback enrichi | Tester/corriger A7 et déduplication `textAlternative`, sans refondre Strategy A ; rendu dirigé à qualifier |
| **W4 — Qualification croisée** | UNIT/PG/BROWSER, a11y, Figma et non-régression | 94 PASS UNIT + 1 T02 PASS rapportés ; preuve FAKE A4 améliorée | PG/refresh, Figma runtime images inspectables, split/zoom, erreurs de rendu, tsc baseline |
| **W5 — Recette produit** | Pertinence Nora et réception utilisateur | Non engagée | GO LIVE/REAL, recette Morris, Gate C distincts |

**Règle :** W1–W5 structurent **un macro-lot intégré**, pas cinq nouveaux micro-lots.

## 6. Carte de traitement et dépendances

| Classe | Éléments | Règle |
|---|---|---|
| **CONSERVER** | D3/Studio séparés ; composant React/admission ; choix/références ; parser E05 ; `resultJson` ; code arbre single-parent et rendu de toutes arêtes | Ne pas reconstruire les acquis |
| **CORRIGER/QUALIFIER P0** | **A7** : une composition déclarée canonique qui échoue au parsing ou à la dérivation ne doit pas revenir sans contrôle vers un `replyDraft` indépendant ; distinguer omission narrative valide | Reproduire les branches réellement atteignables puis appliquer un refus cohérent, pas de nouveau moteur ni requalification historique |
| **QUALIFIER P1** | **A2** : conserver le suffixe substantiel de `textAlternative` ou imposer l'invariant approprié ; A3 : PG/replay ; A5/6 : Figma, zoom/split/a11y | Les PASS FAKE/UNIT sont acquis sur leur périmètre, pas sur les frontières non testées |
| **DIFFÉRER / GATE** | LIVE/REAL, graphiques quantitatifs sans source, promotion Git/RECETTE/STABLE | GO Morris distinct et justification |
| **RESTER HORS SCOPE** | Refonte D3 générale, moteur IA n°2, migration physique, réparation ACK R05, moteur graphique universel | STOP si indispensable |

**Séquence logique :** source structurée unique → projection textuelle complète et bornée → marqueur de version/autorité durable → même gate fixture/LIVE → reprise historique → graphes et UX → preuves de sortie. La sécurité du repli n'efface pas une capacité graphique non livrée.

## 7. Contrat de preuve — oracles discriminants

| Contrôle | Oracle attendu | Couche |
|---|---|---|
| **A1 troncature** | **CLOS AU NIVEAU DERIVATION/UNIT** : 11999/12000/12001 et multi-blocs testés, overflow rejeté ; préserver ce résultat et contrôler FINAL en intégration | UNIT + INTEGRATION |
| **A2 champs** | Familles couvertes en UNIT ; `textAlternative` à préfixe commun 80 caractères peut perdre un suffixe contenant du sens — reproduction et invariant explicite | UNIT + BROWSER ciblé |
| **A3 versionnement** | Trois versions distinguées par code/test ; PG DEV historique et réconciliation restent NOT RUN | UNIT + PG/REPLAY |
| **A4 fixture** | **ACQUIS FAKE/DEV** : `!ok` → `UNKNOWN/UNAVAILABLE` et `providerContacted:NO` ; `generateNoraReply` testé sur overflow/intents dupliqués | UNIT/ADAPTATEUR ; persistance M1 non prouvée |
| **A5 graphes** | Single-parent, toutes arêtes, sync directionnelle conservés ; Figma 07–09 et connecteurs non inspectés à distance | UNIT + BROWSER/Figma |
| **A6 robustesse** | Longs contenus, choix/réfs expirés, panne de renderer, zoom/split, accessibilité, no regressions TypeScript/build, UNKNOWN, ACK qualifié | INTEGRATION/PG/BROWSER |

**Fake/Real :** 94 Vitest rapportés et T02 ne signifient pas fournisseur LIVE, ni REAL END-TO-END. Aucun appel externe autorisé par la publication documentaire.

## 8. Décisions et stops

- **Arbitrage déjà exprimé :** Strategy A comme cible pour les nouveaux tours. Ne pas réouvrir Strategy B comme architecture cible.
- **Décision encore nécessaire si structurante :** modification de schéma D3/SDK/versionnement susceptible de rompre des consommateurs historiques ou nécessitant migration. Cursor doit d'abord mesurer blast radius et proposer la voie compatible ; **STOP Morris** en cas de rupture.
- **Interdits sans GO spécifique :** mutation de gouvernance, nouvelle DB, nouvel effecteur, push produit/PR/merge, LIVE/REAL, RECETTE, STABLE, adoption ou Gate C.
- **Observation limitée :** code local non accessible, captures non transmises ; éviter les PASS non fondés.
- **Nommage :** responsabilités produit, pas noms de chantier historiques ou héritage E05 pour nouvelles capacités.

## 9. Synthèse de revue du handoff `0d912e14`

| Domaine | État vérifiable |
|---|---|
| Handoff | **FULL EXPLOITABLE** (3 528 lignes), blob `c76ac0aab3b5eba4e0a8aa2e0b445dbeecdf67a3` |
| Strategy A | **IMPLEMENTED CODE CANDIDATE**, une autorité canonique si sortie valide |
| A1 | **ACQUIS UNIT** : pas de coupe, oracles longueur exacts ; intégration M1 à prouver |
| A2 | **PARTIEL** : champs famille testés ; déduplication `textAlternative` à qualifier |
| A3 | **ACQUIS CODE/FAKE** : tri-version ; PG historique NOT RUN |
| A4 | **CORRIGÉ / FAKE ADAPTER PROVEN** : rejet `UNKNOWN/UNAVAILABLE`, pas de COMPLETE brut |
| A5 | **PARTIEL UX** : topologie/sync corrigées ; Figma/runtime non inspectés |
| A6 | **94 Vitest + T02 PASS rapportés** ; tsc touched CLEAN rapporté, global non vert préexistant |
| **A7** | **À REPRODUIRE / POTENTIELLEMENT BLOQUANT** : parse-null / derive-empty sur canonique déclaré |
| LIVE / RECETTE / Gate C | **NOT RUN / NON ACQUIS** |

**Verdict : `READY WITH RESERVES — CANONICAL INVALID-OUTPUT PATH TO QUALIFY`.** A4 est fermé dans son périmètre ; ne pas réouvrir la conception Strategy A. La réception de C-04 reste conditionnée à la démonstration que les nouveaux tours n'admettent pas un retour silencieux à une autorité indépendante.

## 10. Findings résiduels et contrat d'entrée du prochain cycle

### A7 — Source canonique invalide : frontière d'autorité (P0 à qualifier)

Le diff `semantic-qualification.ts` comporte deux chemins à examiner :
- `parseVisualComposition(q.visualComposition)` renvoie `null` : la composition est supprimée, le texte brut peut rester ;
- `deriveReplyDraftFromCanonicalSections(cleaned)` renvoie `CV_DERIVE_EMPTY` : hors overflow, la composition est supprimée, le texte brut peut rester.

**Important :** `NoraTurnQualificationSchema` peut rejeter certains payloads avant ces branches ; **leur atteignabilité effective doit être prouvée depuis l'enveloppe D3 et le véritable adaptateur**, pas postulée. Une réponse volontairement textuelle sans `visualComposition` reste légitime. Les anciens e05/projection-v1 conservent leur politique de compatibilité et leur autorité propre.

**Exit :** cas de test nouveau `canonical-v1` mal formé/admis par enveloppe, structure vide/uniquement anchors choices/references, markdown vide, mauvaise qualification et `derive-empty` ; statut d'échec cohérent avec `UNKNOWN/UNAVAILABLE` sans COMPLETE si canonique annoncé mais inutilisable ; aucun effet induit, pas de nouveau `run()`. Si les branches sont démontrées inatteignables, documenter cette preuve et éviter une modification gratuite.

### A2 — `textAlternative` : information suffixe ignorée (P1)

La construction textuelle ajoute `textAlternative` seulement lorsque le corps reconstruit ne contient pas `textAlternative.slice(0,80)`. Un préfixe commun ne prouve pas que la suite est redondante. La déduplication n'est pas une preuve de conservation de la substance.

**Exit :** test avec les 80 premiers caractères présents dans le corps et un suffixe contenant une réserve/condition nouvelle. Définir si `textAlternative` est (i) strictement alternative fidèle sans information nouvelle (validation requise) ou (ii) porteuse de substance à conserver. Corriger au bon niveau, sans duplications indésirables ni moteur sémantique heuristique.

### A3 / M1 — Relecture historique et cycle de vie (P1)

Les versions e05, projection-v1 et canonical-v1 sont distinguées et les fixtures passent, mais le dernier handoff n'établit pas la **persist/replay/refresh PG** sur véritables enregistrements historiques.

**Exit :** test DEV PG sur qualifications réellement disponibles ; trois versions et `UNKNOWN`, même ID et contenu après refresh, références/choix inchangés ; absence de migration, réécriture ou deuxième message. Données historiques indisponibles : tests représentatifs et réserve clairement conservée.

### A5/A6 — Réception graphique et non-régression (P1)

Les captures PNG sont locales et ne figurent pas dans le handoff Git mono-fichier. Le T02 vérifie la présence de vues, pas la géométrie des connexions Figma 07–09. Les tailles réduites, zoom, split, erreur de renderer et accessibilité ne sont pas globalement reçus.

**Exit :** comparer runtime réellement servi à Figma 03/04/07/08/09 ; fournir images inspectables par un canal permis, mesures overflow/connexions, clavier/zoom/split, bloc en erreur, et verdict différenciant diagramme réel de repli listé. `LIVE/REAL` exige un GO distinct ; toute réception Morris/Gate C reste séparée.

## 11. Reste à faire — suite intégrée et gates

| Priorité | Résultat cohérent | IN | Preuves et gates |
|---|---|---|---|
| **P0 — Contrat canonique sûr** | C-02/04/20 | Reproduire puis sécuriser A7 sans affecter narrative-only ni READ historique | Tests adversariaux sur chemins réels + statut de tour, aucune autorité silencieusement remplacée |
| **P1 — Fidélité textuelle** | C-04/17 | Qualifier A2 `textAlternative` et exhaustivité de sortie | Test suffixe substantiel + repli/exhaustivité, sans duplication |
| **P1 — Reprise M1** | C-05/06/19 | PG/replay/refresh des trois versions et état UNKNOWN | DEV PG ou NOT RUN motivé, aucun changement DB et preuve d'identité |
| **P1 — Graphes et UX** | C-08/09/10/11/12/14/15/18 | Images Figma/runtime inspectables, mesures, cas étroits, accessibilité | Verdict visuel Morris distinct, aucun faux PASS |
| **P1 — Non-régression** | C-16/17/20 | Suites pertinentes, typecheck/build, tests d'erreur et droits, ACK R05 séparé | Evidence Full, comparaison baseline TypeScript, dette/exit |
| **P2 — Recette produit** | C-01/18/21/22 | Nora LIVE + jugement éditorial seulement sous GO spécifique | LIVE/RECETTE/Gate C/ML5 séparés |
| **DIFFÉRÉ** | C-13 | Quantitatif uniquement si besoin sourcé | Pas de moteur ajouté |

**Organisation :** un **cycle de correction/qualification cohérent**, incluant code/tests/as-built/revue, et non des microcycles documentaires. Si A7 est inatteignable, ne pas surcorriger : basculer directement sur PG et preuves graphiques avec le même rapport. Aucun push projet, PR, merge, migration DB, LIVE ou ADOPTED.

**Ce document est un compte rendu D1 et une préparation de convergence ; il ne modifie ni SEF, ni Roadmap, ni décisions, ni code, ni autorisation Git de promotion.**
