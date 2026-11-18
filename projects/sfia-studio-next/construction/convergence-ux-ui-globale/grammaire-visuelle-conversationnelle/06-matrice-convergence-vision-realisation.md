# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.7 — 18 novembre 2026 (actualisation factuelle des handoffs `235a06ef` et `5f8e92ec` ; orientation graphique exprimée par Morris)  
**Statut :** DOCUMENTED / REVIEW CANDIDATE — analyse non normative D1 ; ni décision D2 nouvelle, ni VALIDATED SPEC supplémentaire, ni ADOPTED.  
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora », composition conversationnelle adaptative et remplacement de l'expérience E05.  
**Nature :** contrôle de convergence de la vision et des contrats avec le candidat Cursor **local non publié**, à partir du Review Pack distant ; aucune affirmation sur le working tree non observé.  
**Sources de conception :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Fonctionnel/UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Conclusion et cadrage de la revue

**Actualisation V0.7 (état vivant, 18/11) :** le handoff Full [5f8e92ec](https://github.com/mcleland147/sfia-workspace/blob/5f8e92ecadb9e8a722e4c8180ffa0423d493ed41/sfia-review-handoff/latest-chatgpt-review.md), blob `f6a84268e06209beeff160265d6a90d526f3272a`, rapporte 122 Vitest PASS et T02 PASS, correction C2 DOM et paquet W1. La revue ChatGPT a identifié une **réserve C2 discriminante non couverte** : `coveredBySurface` supprime un segment dès 70 % de recouvrement de tokens de plus de 3 caractères, pouvant assimiler « autorisée » et « non autorisée ». **C2 non clos à l'échelle de l'intégrité sémantique.** W1 : Morris a exprimé son accord sur le **thème sombre Studio et une forte fidélité graphique adaptative aux Figma 01–09, sans reproduction rigide au pixel** ; les valeurs/tokens précis et les choix de layout restent à qualifier. W3/W4 non achevés. Le développement produit reste local non observé ; PG historique, VISUAL REVIEW actuelle et LIVE non prouvés. **Les passages historiques des §§9–11 ci-dessous conservent leur contexte de novembre 2026 et ne remplacent pas cet état vivant.**

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
| **C-01 — VP-01, UX-A/B** | Nora choisit librement la meilleure forme, sans template rigide | Texte libre et sections facultatives dans Strategy A ; aucun essai Nora spontané LIVE. | **PARTIEL — FAKE/UNIT** ; pertinence éditoriale réelle NON PROUVÉE. | Préserver la liberté de forme ; corpus W5 et LIVE/REAL uniquement sous GO Morris distinct. |
| **C-02 — VP-02, UX-C/F** | Un message composite, identité et qualification cohérentes sur tous les parcours | Adapter fail-closed A4 et chemins A7 corrigés/testés selon handoffs ; version canonique + restitution C2 ; 122 Vitest rapportés. | **ALIGNÉ EN CANDIDAT / FAKE** ; persistance/identité PG non démontrées. | Non-régression des chemins invalide/vide et identité de tour ; PG/refresh distinct. |
| **C-03 — VP-06, doc 03** | Nora porte le sens ; Studio valide et rend, sans autre moteur cognitif | Strategy A : Nora/D3 porte le sens ; admission et renderer Studio gardent la présentation ; handoff 5f8e92ec sans modification D3 déclarée. | **ALIGNÉ SUR LE CONTRAT CANDIDAT** ; code local NON OBSERVÉ directement. | Préserver D3–D9, sans moteur cognitif secondaire ni nouvel effet métier. |
| **C-04 — VP-03/04, CV-02/06** | Une source de sens pour texte/visuel ; aucun statut FINAL mensonger | A1/A2/A7 et C2 : `SubstanceComplement` visible en DOM (10 tests C2 et T02 PASS rapportés) ; `coveredBySurface` recouvre lexicalement les textes à 70 %, filtre tokens courts. | **ÉCART C2 À CORRIGER (RISQUE INTÉGRITÉ)** : « migration autorisée » / « migration non autorisée » et « décision validée » / « n'est pas validée » peuvent être jugés redondants ; PASS C2 non acquis sur négations/conditions. | Supprimer la déduplication sémantique par recouvrement lexical ou la rendre strictement conservatrice ; tests adverses UNIT+DOM+BROWSER sur négation, modalités, chiffres, conditions, statuts, hypothèses et repli. |
| **C-05 — doc 04/05** | WRITE canonique et READ historique sans collision d'autorité | WRITE `conversational-composition-canonical-v1`, READ projection-v1 et E05 conservés selon handoff ; pas de migration. | **ALIGNÉ CODE / REPLAY HISTORIQUE NON PROUVÉ**. | Compatibilité en lecture réelle et absence de requalification rétroactive ; aucun changement d'autorité. |
| **C-06 — M1/M5, CV-11** | Identité, persistance, reprise et trois versions durables | PG DEV `:5433` UP selon Cursor mais zéro payload de composition historique trouvé ; aucun replay sur vrais enregistrements. | **PARTIEL — HISTORICAL PG REPLAY NOT RUN**. | Rechercher une source historique DEV autorisée ou conserver réserve ; ne jamais substituer fixture à une preuve historique. |

### B — Familles et représentations

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-07 — GV-01/02** | Narration naturelle autorisée sans structure graphique | Narration naturelle possible, sans visuel forcé ; tests C2-01/02 rapportés. | **ALIGNÉ SUR FAKE/UNIT**, spontanéité LIVE non prouvée. | Préserver narrative-only et s'assurer qu'une correction C2 ne réintroduit pas du visuel obligatoire. |
| **C-08 — Figma 03/04** | Cartes/matrices avec attributs attachés à leur option | Cards/matrix/stacked/text présents dans le candidat ; C2 réserve visible et T02 PASS rapportés. | **PARTIEL UX/DA** : pas de fidélité graphique Figma 03–05 réceptionnée. | Implémenter haute fidélité adaptative sur thème sombre validé en orientation ; cas 2/3/5/8/12/18, largeur réelle et contenu intégral. |
| **C-09 — Figma 02/06** | Étapes, dépendances et temporalité justifiées | Parcours horizontal/vertical existant ; Figma 02/06 décrivent aussi iconographie, jalons et planning daté. | **PARTIEL — transposition graphique non réalisée**. | Parcours et planning conditionnés aux dates connues, fidèles aux références adaptées à Studio sombre ; preuve browser et fallback. |
| **C-10 — Figma 07** | Graphe dirigé réellement lisible | `DependenciesConnectedView` avec connecteurs SVG mesurés/ResizeObserver et captures runtime rapportées. | **PARTIEL — CONNECTEURS IMPLÉMENTÉS, FIDÉLITÉ Figma 07 NON REÇUE**. | Graphe multi-couches/convergence, relations et étiquettes, layout/viewport fiable, liens réels ; comparaison Figma/runtime inspectable. |
| **C-11 — Figma 08** | Véritable arbre conditionnel sans enfant partagé | Topologie arbre mono-parent contrôlée ; renderer directed existant, Figma 08 non transposé. | **PARTIEL GRAPHIQUE / A11Y**. | Branches oui/non réellement connectées, distinctions condition/décision, tests clavier et capture Figma 08. |
| **C-12 — Figma 09** | Voies parallèles et toutes relations qualifiées, sans faux sens | Arêtes parallèles et `sync` orientés conservés ; lanes HTML/CSS présentes. | **PARTIEL GRAPHIQUE** — convergence Figma 09 non reçue. | Voies, connexions, synchronisation et gate lisibles, sans effet D6 ; capture Figma 09. |
| **C-13 — GV-06** | Graphiques quantitatifs seulement sur données établies | Pas de graphique quantitatif fictif ; scénario insuffisant PASS rapporté dans T02. | **DIFFÉRÉ CONFORME** pour bibliothèque quantitative non justifiée. | N'ajouter de famille quantitative qu'avec mesures sourcées, unité/période/échelle et gate technique. |
| **C-14 — CV-04/05** | Densité et cardinalité adaptatives | Admission variantes selon conteneur ; seuils historiques conservés et repli disponible. | **PARTIEL — enveloppe adaptative non réceptionnée**. | Tester cas 2/3/5/8/12/18 et longs titres : pas de troncature, variante réellement adaptée, limites/repli prouvés. |

### C — UX, sécurité, continuité

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-15 — CV-T11/12/20** | Split, zoom, conteneur étroit, clavier, aucun contenu coupé | ResizeObserver ; T02 1440 rapporté et capture 430 px précédemment examinée ; pas de campagne exhaustive. | **PARTIEL — 390/split/zoom/clavier NON PROUVÉS**. | 390/430/790/1040/1280/1440, 50/50, zoom 200/400 %, a11y, focus, scroll et libellés longs. |
| **C-16 — UX-D/E** | Sources/actions actives selon propriétaires, jamais effet par graphique | Références et choix canoniques existants ; pas de nouveau pouvoir D6/D7 annoncé. | **PARTIEL — droits dynamiques et expiration non reçus**. | Revalidation de disponibilité et actions expirées, aucune action depuis un graphique. |
| **C-17 — CV-10/15** | Repli textuel complet en erreur de composant, sans re-génération | Fallback C1 francisé, `SubstanceComplement` visible en Comparison/Sequence/Relations/Synthesis ; tests C2-01–10 PASS rapportés. | **PARTIEL / C2 RISQUE NON LEVÉ** : 70 % tokens peut supprimer négation/condition ; C2-08 teste fallback généré mais pas injection réelle d'échec ErrorBoundary. | Corriger déduplication conservatrice, tester contradictions et panne de renderer réelle en BROWSER ; aucune perte de la substance canonique. |
| **C-18 — VP-07, Figma 01–09** | Présentation premium fidèle aux références et au contenu | Figma 01–09 identifiés nativement, paquet artistique W1 du handoff 5f8e92ec ; captures runtime visibles d'un cycle précédent, PNG actuels locaux non joints au handoff. | **ORIENTATION MORRIS EXPRIMÉE** : thème sombre Studio et forte fidélité adaptative ; **CONFORMITÉ FIGMA/RUNTIME NON REÇUE**. | Transposer 01–09 avec typographie, icônes, parcours, connecteurs et densité ; références/captures côte à côte inspectables ; arbitrage ponctuel si nouveau pivot. |
| **C-19 — UX-F, R05** | Refresh, identité, réconciliation et continuité préservés | M1 inchangé selon Cursor ; PG DEV UP mais données historiques pertinentes absentes. | **PARTIEL — REFRESH/UNKNOWN HISTORIQUE NON PROUVÉS**. | Relecture DEV réelle quand données disponibles ; préserver ACK et réconciliation hors chantier graphique. |

### D — Qualification et réception

| ID | Résultat attendu | Réalisation / preuve | Statut et écart | Suite |
|---|---|---|---|---|
| **C-20 — CV-T01–20** | Preuves discriminantes UNIT/PG/BROWSER/REAL séparées | Handoff FULL 5f8e92ec (3 121 lignes) publié, 122 Vitest et 1 T02 PASS rapportés ; C2 DOM positif, cas adverses de négation non couverts. | **PARTIEL — RÉGRESSION C2 POSSIBLE / PG+VISUAL+LIVE NON RUN**. | Ajouter tests C2 de négations/conditions/numériques, vraie panne renderer, géométrie/a11y, captures Figma/runtime inspectables ; distinguer UNIT, FAKE, BROWSER, PG et LIVE. |
| **C-21 — VP-05** | Pertinence spontanée de Nora en demande libre | Corpus W5 de 10 demandes préparé ; tests FAKE uniquement, LIVE non exécuté. | **NON PROUVÉ — LIVE/REAL NOT RUN**. | GO Morris distinct + évaluation spontanée de Nora, sans simulation déclarée REAL. |
| **C-22 — Gate C** | Réception Morris distincte de construction, tests et promotion | Handoff Full `5f8e92ec` validé distant ; pas de push produit/PR/merge ; préparation W5, pas réception. | **GATE C OPEN — ENSEMBLE 05 NON REÇU**. | C2, fidélité Figma, PG/avis Morris et preuves appropriées ; pas d'ADOPTED ou de promotion implicite. |

## 5. WBS de convergence — cinq activités du même macro-lot

| Activité | Résultat attendu | Acquis Strategy A | Gate restant |
|---|---|---|---|
| **W1 — Direction artistique** | Figma 01–09 et grammaire de lecture | Contrat Figma 01–09 et paquet Morris préparés ; thème sombre et fidélité adaptative élevée confirmés en conversation, non pixel-final | Extraire tokens/icônes/géométries, réception visuelle runtime et arbitrages d'architecture restant nécessaires |
| **W2 — Contrat et architecture** | Vérité unique, M1/D3, version, autorités | Strategy A/M1–M5 conservés ; C2 DOM amélioration mais déduplication lexicale risquée | C2 adverses ; ancien READ et PG/refresh à qualifier, sans nouveau moteur |
| **W3 — Construction intégrée** | React, admission, topologie, familles et tests | Cards/matrix/sequence/deps SVG/tree/parallel existants ; transposition graphique non livrée | Développer familles et variantes conformément à l'orientation Figma sombre et à la fidélité élevée, avec layout fiable et fallback |
| **W4 — Qualification croisée** | UNIT/PG/BROWSER, a11y, Figma et non-régression | 122 Vitest + T02 PASS rapportés ; PG :5433 UP, zéro historique ; PNG actuels non inspectables | Adversarial C2, DOM/BROWSER, error boundary, responsive/zoom, a11y, captures inspectables, PG historique si disponible |
| **W5 — Recette produit** | Pertinence Nora et réception utilisateur | Corpus de 10 demandes préparé ; aucune recette ni LIVE | Préparer dossier de réception ; LIVE/REAL et Gate C sous GO distinct |

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

## 9. Synthèse historique de revue du handoff `0d912e14` (supplantée pour l'état courant par V0.7)

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

## 10. Findings historiques et contrat d'entrée antérieur (réévalués en V0.7)

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

## 11. Trajectoire antérieure — suite intégrée et gates (historique V0.6)

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

## 12. Actualisation V0.7 — contrat d'entrée intégré du macro-lot Ensemble 05 (18/11/2026)

### 12.1 Source de vérité et statut

- **Handoff L3 :** `sfia/review-handoff@5f8e92ecadb9e8a722e4c8180ffa0423d493ed41`, blob `f6a84268e06209beeff160265d6a90d526f3272a` ; Review Pack Full (3 121 lignes) relu, rapport source de code candidat local, **non commit produit**.
- **Git distant :** `main@997d4c4e8204993de7107552898c8cc08cd3b0ed`, branche candidate technique locale rapportée `sfia/next-ml4d-composition-adaptative@a783f014` + working tree **NON OBSERVÉ**, branche documentaire candidate `docs/next-ml4d-registre-revues-20261116` ; aucun push produit/PR/merge associé.
- **Preuves Cursor rapportées :** 122 Vitest PASS (112 + 10 C2), T02 Playwright PASS ; une réserve `textAlternative` apparaît dans le DOM via `SubstanceComplement` et une capture locale `c2-runtime-substance-complement-1440.png`. Aucun test indépendant exécuté par cette révision documentaire.
- **PG historique :** DEV `:5433` déclaré UP mais **zéro payload de composition historique**, donc `HISTORICAL PG REPLAY — NOT RUN`. **LIVE/REAL NOT RUN** ; PNG actuels hors handoff MD, donc `VISUAL REVIEW NOT COMPLETED` pour cette livraison.
- **Orientation Morris exprimée dans la conversation :** conserver l'identité sombre de Studio et viser une forte fidélité visuelle/fonctionnelle **adaptative** aux Figma 01–09, y compris parcours/plannings, symboles, connecteurs et graphes 07–09 ; pas de calque pixel rigide. Cette consignation D1 ne modifie aucune décision normative D2 ou autorisation Git technique.

### 12.2 Défaut C2 précis — false-positive de redondance lexicale

Le nouveau code rapporté `admission.ts` contient `significantTokens()` (tokens de longueur > 3) et `coveredBySurface()` (couverture >= 0,7). Il peut donc considérer comme déjà présent un segment dont la négation ou la modalité diffère du sens affiché : `« Migration autorisée »` vs `« Migration non autorisée »`, `« Décision validée »` vs `« Décision non validée »`. `visibleTextAlternativeComplement()` peut alors renvoyer une chaîne vide sous `bodyPolicy=substitute`. **Risque plausible démontré sur l'algorithme, non incident LIVE observé.** Le PASS C2 sur dix cas positifs ne couvre pas cette frontière.

**Exit C2 :** suppression de complément uniquement si équivalence prouvée sans heuristique de similitude susceptible de changer négation, temporalité, nombre, condition ou statut ; sinon préserver le complément visible ou préférer un fallback fidèle. Tester exemples positifs/négatifs, conditions, `sauf`, `avant/après`, nombres, sources, hypothèses et variantes `comparison/sequence/relations/synthesis` en UNIT + DOM + BROWSER, sans double prose intégrale. Provoquer une **vraie exception de renderer** pour vérifier l'ErrorBoundary ; vérifier aussi le `textAlternative` partiellement redondant et son suffixe.

### 12.3 Contrat graphique et décision W1

- **Références :** Figma page 06, `742:36` synthèse, `743:2` parcours/planning, `745:2` cartes, `745:27` matrice, `746:2` largeur contrainte, `746:22` étapes verticales, `751:11` dépendances, `752:2` arbre, `753:2` parallèle ; page 05 pour le shell Travail.
- **Direction produit confirmée :** thème sombre Studio et fidélité élevée **dans le langage visuel, la structure, l'iconographie et les comportements**, adaptée à la largeur effective et au contenu. Ne pas assimiler à la validation de tous les pixels/tokens ni à la réception du rendu.
- **Construction encore due (W3) :** systèmes de cartes/matrices ; parcours, jalons/planning seulement avec dates sourcées ; diagramme de dépendances multi-couches ; véritables branches conditionnelles ; voies parallèles et synchronisation ; hiérarchie éditoriale, iconographie et repli de qualité. Les connecteurs SVG mesurés actuels constituent un acquis technique à évaluer, pas une conformité Figma acquise.
- **Décision de technologie :** HTML/CSS/SVG existants par défaut ; benchmark comparable (notamment layout dirigé) si les scénarios Figma 07–09 échouent. Aucun ELK/React Flow/nouveau moteur graphique sans justification, évaluation d'impacts et gate Morris applicable.
- **Preuve W4 :** vrais couples d'images Figma/runtime inspectables, DOM, largeur Travail (390/430/790/1040/1280/1440, split 50/50), zoom 200/400 %, clavier/a11y, non-clipping, contenu complet et variantes de densité.

### 12.4 Séquencement et gates du même macro-lot

| Séquence intégrée | Résultat | Gate / STOP |
|---|---|---|
| **1 — Sécurisation C2 et non-régression** | Intégrité de la substance en mode `substitute` et du fallback, tests adverses | STOP si perte d'une réserve, négation, décision ou statut |
| **2 — W1 finalisation technique du contrat Figma** | Traduction des 9 références dans les tokens Studio sombres et variantes réellement adaptatives | Orientation Morris exprimée ; soumettre les choix artistiques structurants encore ouverts, sans reconstruire la vision |
| **3 — W3 construction complète** | Familles React/layout et styles conformes aux références adaptées | STOP pour pivot API/DB/autorité ou nouvelle bibliothèque substantielle non autorisée |
| **4 — W4 qualification** | UNIT/FAKE/BROWSER, a11y, Figma/runtime, PG si historiques accessibles | PG non exécutable = NOT RUN ; PNG non inspectés = VISUAL NOT COMPLETED ; LIVE sans GO = NOT RUN |
| **5 — W5 dossier de réception** | Corpus Nora, preuves, écarts et proposition de verdict Morris | Réception Ensemble 05, Gate C, PR/merge et LIVE restent des décisions distinctes |

**Ce document V0.7 est un suivi D1 non normatif** : il ne modifie pas SEF, Roadmap, décisions, design contract normatif, code ou schéma ; il ne vaut ni adoption, ni promotion, ni GO d'action LIVE ou de push projet.
