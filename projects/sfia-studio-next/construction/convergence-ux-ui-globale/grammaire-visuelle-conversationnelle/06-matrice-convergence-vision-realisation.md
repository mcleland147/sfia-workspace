# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.10 — 18 novembre 2026 (actualisation après campagne UAT-01…08 et réception Morris du sous-périmètre visuel)
**Statut :** DOCUMENTED — **UAT VISUAL COMPOSITION USER ACCEPTED WITH RESERVES** par Morris le 18/11 ; réconciliation technique/Git et réception exhaustive Travail **NON ACQUISES** ; Gate C OPEN, aucun ADOPTED.
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora », composition conversationnelle adaptative et remplacement de l'expérience E05.
**Nature :** matrice vivante de qualification, fondée sur les handoffs Git ; code produit et worktree non inspectés directement par ChatGPT. Les §§9–12 constituent des instantanés historiques V0.6/V0.7, non l'état courant.
**Sources de conception :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Fonctionnel/UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Conclusion et cadrage de la revue — V0.10

**Synthèse :** la chaîne D3 → composition sémantique → admission Studio → composants React/ELK → persistance/relecture dispose de preuves rapportées Level-A (fixtures), Level-B (fournisseur simulé à la frontière D3) et Level-C LIVE **bornées** (12 tours, dont 5 avec composition spontanée, 0 retry). Ces niveaux ne démontrent pas une couverture spontanée de toutes les neuf familles. L'usage LIVE est attaché à un seul projet/Pilote/modèle DEV, et le coût €10,20 est une **estimation fallback**, pas une facturation contrôlée.

**L03/L04 :** la base DEV reconstruite indique des tableaux Markdown dans replyDraft, **sans visualComposition**. La cause se situe dans la production D3 (cas B), pas dans le renderer ; un renforcement des instructions D3 est rapporté par le handoff 43b12a34. Des replays **FAKE** de structures artificiellement préparées sélectionnent cards/matrix ; ils ne prouvent **pas** que les nouvelles instructions produiront spontanément ces blocs lors d'un futur LIVE. **L07 :** parallelProcess + trois laneId, choix parallel fidèle à la substance (cas D), non défaut de graphes directed.

**Intégrité et limites :** la déduplication exacte dans EditorialSynthesis et le mécanisme anti-fuite SIM sont corrigés et testés selon Cursor ; la couverture globale C2/A2/A7, les replays historiques PG, une comparaison visuelle complète des Figma 01–09, le tsc global et les diffs complets du candidat ne sont pas tous acquis. Le handoff complété `0cda342f` contient désormais les fichiers FULL et diffs requis pour les deltas de consolidation : la réserve **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING** est **LEVÉE pour ce cycle**. Les empreintes des copies locales non publiées et l'audit global de tout le worktree restent distincts. Les captures binaires locales ne sont pas intégrées à ce document Git.

**Règle de gouvernance :** un verdict Cursor « READY FOR MORRIS ENSEMBLE 05 RECEPTION REVIEW » autorise une **revue**, pas une réception, Gate C, PR/merge, RECETTE, STABLE ni ADOPTED. Ne pas fusionner cette matrice candidate sur main sans GO distinct. Strategy A et M1–M5 restent les orientations validées ; pas de second moteur de vérité ni de migration implicite.

**Verdict V0.9 :** **REVIEW PACK FULL EXPLOITABLE — RÉCEPTION PRODUIT AVEC RÉSERVES À ARBITRER**. L'actualisation conserve les IDs d'origine C-01 à C-22 ; elle **ne reprend pas** le tableau erroné C-01…C-22 proposé dans le handoff 43b12a34.

**Réserves de code relevées dans le Full (non incidents LIVE observés) :** `selectComparisonVariant()` peut maintenir `matrix` pour cinq options alors que `CV_COMPARISON_CRITERIA_INCOMPLETE` est émis ; les tests UNIT ne prouvent pas la restitution explicite des cellules manquantes en BROWSER. `structuredBlockSurface()` préfixe toute timeline par « Chronologie fictive » sans distinguer une temporalité établie d'une hypothèse ; vérifier son affichage effectif et éviter un qualificatif trompeur. Enfin, le handoff `0cda342f` reproduit encore au §23 la proposition V0.7 incorrectement indexée : elle est explicitement **supplantée par la présente matrice V0.9**, qui conserve les identifiants C-01 à C-22. Ces constats ne contredisent pas les résultats LIVE antérieurs ; ils restent à qualifier avant réception sans réserve.

### Actualisation post-recette du 18/11 — priorité de lecture sur les constats V0.9

La synthèse V0.9 ci-dessus reste un **instantané historique** de la campagne DEV antérieure. La campagne suivante **UAT-01…08 en RECETTE** démontre sur les cas examinés la génération spontanée de cartes (UAT-01), matrice (UAT-02), séquence (UAT-03), planning (UAT-04), graphe dirigé (UAT-05), arbre conditionnel (UAT-06), voies parallèles (UAT-07) et synthèse éditoriale (UAT-08). Elle **lève les réserves de sélection spontanée cards/matrix post-renforcement D3 et de directed dans le corpus UAT**, mais ne prouve pas toute demande future, toutes les variantes ni tous les environnements.

UAT-03 a d'abord échoué sur une validation structurée `steps[].detail.max(400)` reproduite en DEV. Le correctif à `max(5000)`, l'observabilité et le nouveau test LIVE sont rapportés et acceptés. UX-01…07 de la **campagne visuelle** ont été corrigés ; les derniers rendus UX-05/UX-01 ont été expressément validés par Morris. Le scroll horizontal du parallèle est accepté. **Attention : ces IDs UX-01…07 sont distincts du registre central UX-001…010.**

**Candidat local rapporté :** `5c94c86737f0965c71a7e058e3f1e45ff4415024` · tree `74fbf2b90f95951d5049efc5a854ad213fb0f47f` · build RECETTE `IEINNuPl0bHWJOWkh0ZhG`. [Handoff final](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md) ; [dossier de réconciliation](07-dossier-reconciliation-reception.md). Les preuves locales, l'ascendance complète et les ACL ne sont pas directement vérifiées via GitHub ; contrôle local/lecture seule en attente. **Réception limitée aux huit UAT de composition visuelle**, pas aux 88 oracles candidats des cinq sujets Travail, ni à ML4D ou Gate C.

**Règle d'interprétation :** dans les lignes C-01…C-22 ci-dessous, les **preuves récentes UAT** prévalent sur les mentions explicitement datées de V0.9. Les archives §§9–12 ne sont pas réécrites.

## 2. Sources Git et niveaux de preuve

| Source | Référence vérifiée | Portée et limite |
|---|---|---|
| Dépôt / baseline | `mcleland147/sfia-workspace` · `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` | Baseline distante ; roadmap main datée du 15/11 antérieure à la campagne candidate. |
| Branche documentaire | `docs/next-ml4d-registre-revues-20261116@fd8d2534c1b6e11a1cf320f25a1a39a633cc5519` (parent de cette révision) | Documents candidats, non fusionnés sur main. |
| Level-B | [Handoff b10fd34a](https://github.com/mcleland147/sfia-workspace/blob/b10fd34ae0b94a3eac4da5885a830caa35b42b0d/sfia-review-handoff/latest-chatgpt-review.md) | Simulateur fournisseur D3 ; tests UNIT/BROWSER/PG DEV rapportés. |
| Préflight LIVE | [Handoff cb407251](https://github.com/mcleland147/sfia-workspace/blob/cb407251a9f538d30f7cccbd673e078cc9176544/sfia-review-handoff/latest-chatgpt-review.md) | C2 et SIM fail-closed ; 0 LIVE à ce jalon. |
| LIVE borné | [Handoff 72bb56d9](https://github.com/mcleland147/sfia-workspace/blob/72bb56d9ad7b4ea59f9264a5054522ce4c9a2074/sfia-review-handoff/latest-chatgpt-review.md) | 12/12 COMPLETE et 5 compositions rapportées ; captures/ledger locaux non inspectés ici. |
| Consolidation | [Handoff 43b12a34](https://github.com/mcleland147/sfia-workspace/blob/43b12a34efb36bec9d77cc5732efc503109e41e5/sfia-review-handoff/latest-chatgpt-review.md) · blob `3b58657e7c0060fd4b2dd408d88fe1cb46ae9ced` | Diagnostic DB L03/L04/L07, prompt D3 et admission corrigés en candidat ; UNIT/Level-B PASS rapportés, aucun nouveau LIVE. |
| Republication Full | [Handoff 0cda342f](https://github.com/mcleland147/sfia-workspace/blob/0cda342f700f4dc392dcc5df6d58f316f0a431a5/sfia-review-handoff/latest-chatgpt-review.md) · blob `1ee09d806e30f337117d10541edf0c4b526f4c56` | 3 379 lignes ; FULL admission/index/nora-adapter/test maturation, diffs tracked ; publication documentaire mono-fichier, code produit inchangé. |
| Code produit local | `sfia/next-ml4d-composition-adaptative@a783f014935de0dec5ff8e79a2b18eea0e629756` + worktree dirty selon Cursor | Branches/fichiers locaux **NON OBSERVÉS directement** ; aucun push produit. |
| Référence visuelle | [Figma page 06](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=742-2) | Direction validée : thème sombre, fidélité adaptative ; une capture runtime n'est pas preuve d'intégrité sémantique. |
| Gouvernance | [SEF](../../../governance/SEF.md), [Roadmap](../../../governance/roadmap.md), décisions Next, ENV-01 | Autorité Morris inchangée. |

**Échelle de preuve :** `DOCUMENTED` (source) → `VALIDATED SPEC` (Morris) → `IMPLEMENTED` (code candidat) → `COVERAGE VERIFIED` (tests du niveau spécifié) → `BEHAVIOR PROVEN` (comportement constaté dans un périmètre exact) → `ADOPTED` (décision explicite). Un même C-ID peut être **LIVE borné sur une dimension et PARTIEL sur une autre**.

## 3. Règles d'interprétation

- **UNIT/ADAPTER FAKE/BROWSER FAKE** : prouvent des contrats et du rendu avec données contrôlées, pas la spontanéité du fournisseur.
- **LIVE borné** : 12 tours sur un seul pilote/projet/modèle DEV, dont cinq compositions ; ne certifie ni les neuf familles ni une modification postérieure du prompt D3.
- **PG DEV** : relecture de nouveaux messages et reconstruction DB ; aucune preuve exhaustive des anciennes versions historiques.
- **Figma/runtime** : fidélité établie seulement pour les captures effectivement inspectées ; ne pas inférer « pixel aligned » à partir d'un test PASS.
- **Rapport Cursor** : source de preuves déclarées, non équivalent à un audit indépendant du worktree ou des PNG locaux.
- **BLOQUANT de réception** : perte de substance ou d'autorité, incohérence de version, défaut de preuve impératif ; les réserves partielles restent ouvertes jusqu'à arbitrage Morris.

## 4. Matrice de convergence — identifiants canoniques C-01 à C-22

### A — Vision, responsabilité et contrat canonique

| ID canonique | Contrat / résultat | État rapporté et preuve | Qualification au 18/11/2026 | Réserve / sortie |
|---|---|---|---|---|
| C-01 — VP-01, UX-A/B | Nora choisit la forme utile sans gabarit obligatoire. | LIVE initial 12 tours dont 5 compositions ; UAT-01…08 RECETTE : choix spontanés cards, matrix, sequence, timeline, directed, conditional, parallel, synthèse, sans forcer la forme. | BEHAVIOR PROVEN — corpus UAT de composition, non généralisable. | Conserver prose-only et refus de graphique non fondé ; ne pas extrapoler aux 88 oracles Travail. |
| C-02 — VP-02, UX-C/F | Un message composite conserve identité, qualification, fin et substance. | Compositions graphiques et texte reçus en un même message ; snapshots UAT et retests Morris ; refresh historique et invariants d'identité rapportés. | BEHAVIOR PROVEN — corpus UAT ; identité/persistance exhaustives PARTIELLES. | Couverture erreurs/versions anciennes, relecture PG historique et droits à poursuivre. |
| C-03 — VP-06, doc 03 | D3 possède le sens ; Studio contrôle admission et représentation, sans second moteur. | D3 structure les formes, Studio admet/projette puis React/ELK rend ; choix spontané observé en RECETTE UAT ; double claim de lanes corrigé en renderer. | IMPLEMENTED (candidat local rapporté) / BEHAVIOR PROVEN (UAT borné). | Code local non poussé ; frontière d'autorité à confronter au diff final. |
| C-04 — VP-03/04, CV-02/06 | Substance textuelle et graphique fidèles à une seule source ; aucun statut FINAL inventé. | SubstanceComplement, C2 exact identity et admission rapportés testés ; réponses UAT examinées, sans revue exhaustive de toutes les négations/fallbacks. | COVERAGE VERIFIED PARTIELLE / UAT visuel accepté. | Conserver les tests adverses et qualification des pertes de substance sur les autres chemins. |
| C-05 — doc 04/05 | WRITE canonique, READ des versions précédentes sans changement d'autorité. | canonical-v1 WRITE et compatibilité READ antérieures selon handoff ; réponse persistée UAT-07 relue pour correctif ; aucune migration RECETTE. | IMPLEMENTED rapporté / HISTORICAL PG REPLAY NON EXHAUSTIF. | Rejouer anciens formats si preuve disponible ; préserver les données. |
| C-06 — M1/M5, CV-11 | Identité, persistance et reprise du message, non de la disposition graphique. | Rechargement de nouveaux tours LIVE et UAT-07 persisté rapportés ; anciens UNKNOWN conservés ; RECETTE sans migration. | BEHAVIOR PROVEN — nouveaux tours bornés ; historique PARTIEL. | Réconciliation ACK/UNKNOWN et ACL locales à vérifier séparément. |

### B — Familles et représentations

| ID canonique | Contrat / résultat | État rapporté et preuve | Qualification au 18/11/2026 | Réserve / sortie |
|---|---|---|---|---|
| C-07 — GV-01/02 | Narration naturelle sans visuel obligé. | UAT choisit graphiques adaptés lorsque utiles, prose lorsque suffisante ; aucune demande de famille forcée. | BEHAVIOR PROVEN — corpus UAT et LIVE borné. | Garder proportionnalité ; tests hors échantillon non exécutés. |
| C-08 — Figma 03/04 | Comparaisons cards/matrix/stacked fidèles aux options et critères. | UAT-01 : cartes comparatives ; UAT-02 : matrice cinq options, sélection spontanée en RECETTE après instructions D3 ; titres/layout corrigés et acceptés. | BEHAVIOR PROVEN — UAT RECETTE cards/matrix, borné. | Cas critères hétérogènes/INCOMPLETE, petites largeurs et cellules absentes encore à vérifier. |
| C-09 — Figma 02/06 | Parcours et temporalités fondés ; chronologie sans dates inventées. | UAT-03 : six étapes après correction Zod max 5000 ; UAT-04 : planning S1–S8, chevauchements S2/S4/S5 corrects. | BEHAVIOR PROVEN — UAT RECETTE sequence/planning. | Ne pas inférer dates absolues ; qualificatif « Chronologie fictive » à vérifier selon contexte. |
| C-10 — Figma 07 | Graphe de dépendances dirigées, relations et convergence lisibles. | UAT-05 : graphe directed spontané avec deux branches, convergence vers recette, validation et mise en service, Morris accepte. | BEHAVIOR PROVEN — UAT RECETTE directed. | Autres graphes et tests clavier/zoom restent partiels. |
| C-11 — Figma 08 | Arbre conditionnel véritable, branches fidèles, aucune décision automatique. | UAT-06 : arbre conditionnel succès/échec, retour correction et décision humaine préservée, Morris accepte. | BEHAVIOR PROVEN — UAT RECETTE conditional. | Libellés de branches/accessibilité exhaustifs non prouvés. |
| C-12 — Figma 09 | Voies parallèles et synchronisations fondées sans faux effet métier. | UAT-07 : trois équipes, sync, une revue, lancement ; correction double claim classifyLanes et flèches, retest Morris accepté. | BEHAVIOR PROVEN — UAT RECETTE parallèle corrigé. | Scroll horizontal explicitement accepté ; autres topologies à contrôler. |
| C-13 — GV-06 | Graphiques quantitatifs seulement si valeurs, unités et provenance établies. | LIVE L10 : refus justifié d'un graphique quantitatif sans données ; huit UAT n'établissent aucun chart quantitatif chiffré. | NON-INVENTION LIVE OBSERVÉE / GRAPH QUANTITATIF NON OUVERT. | Sources et unités impératives avant nouvelle preuve. |
| C-14 — CV-04/05 | Choix adaptatif selon densité, cardinalité et largeur. | Adaptation visuelle et flux naturel des cartes, numérotation et matrice corrigés ; capture Morris desktop, tests automatiques de tailles selon handoffs. | COVERAGE VERIFIED — PARTIEL ; RECEPTION VISUELLE DES CAS UAT. | Responsive split/mobile/zoom/texte extrême non exhaustifs. |

### C — UX, sécurité, continuité

| ID canonique | Contrat / résultat | État rapporté et preuve | Qualification au 18/11/2026 | Réserve / sortie |
|---|---|---|---|---|
| C-15 — CV-T11/12/20 | Conteneur étroit, split, zoom et clavier sans perte ni coupe inaccessible. | Morris accepte scroll horizontal pour UAT-07 et les vues desktop examinées ; split 50/50, zoom et clavier non exhaustivement reçus. | PARTIEL — DESKTOP UAT ACCEPTÉ, ACCESSIBILITÉ NON EXHAUSTIVE. | Rattacher les contrôles reflow/split/zoom/focus à la qualification globale. |
| C-16 — UX-D/E | Sources/choix soumis aux droits et à la durée de vie, sans effet graphique. | Règle HumanDecision préservée dans UAT-06 et UAT-08 ; aucun changement d'autorité par le rendu, mais permissions dynamiques non réexaminées. | IMPLEMENTED CONTRACT rapporté / COUVERTURE PARTIELLE. | Expiration, révocation et ACL à tester sous droits effectifs. |
| C-17 — CV-10/15 | Fallback textuel et exception renderer sans perte ni re-génération. | Complément textuel et tests de repli rapportés ; correction SDK UAT-03 fournit erreur classifiée ; pas de simulation exhaustive ErrorBoundary. | COVERAGE VERIFIED PARTIELLE ; UNKNOWN INITIAL OBSERVÉ. | Conserver fail-closed, rejouer panne navigateur et contenus adverses. |
| C-18 — VP-07, Figma 01–09 | Fidélité éditoriale et géométrique au contrat visuel sombre et adaptatif. | Huit représentations visibles examinées en RECETTE ; UX-01…07 corrigés, derniers correctifs reçus par Morris ; neuf comparaisons Figma exhaustives non démontrées. | USER ACCEPTED WITH RESERVES — CORPUS VISUEL UAT. | Figma/runtime exhaustif, responsive, a11y, autres variantes hors réception. |
| C-19 — UX-F, R05 | Refresh, réconciliation et continuité, y compris statuts incertains. | Refresh UAT-07 depuis représentation persistée et UAT-03 après nouveau tour ; messages anciens UNKNOWN conservés. | BEHAVIOR PROVEN — RELOAD DES CAS BORNÉS. | Navigation, ACK perdu, historique et autres versions non exhaustifs. |

### D — Qualification et réception

| ID canonique | Contrat / résultat | État rapporté et preuve | Qualification au 18/11/2026 | Réserve / sortie |
|---|---|---|---|---|
| C-20 — CV-T01–20 | UNIT/FAKE/BROWSER/PG/LIVE et preuves visuelles différenciées. | Handoffs : UAT-03 cause et fix, UX-01…07, final UX-05/01 ; tests UNIT/FAKE/BROWSER/RECETTE rapportés et captures Morris ; Full L3 final vérifié à distance. | COVERAGE VERIFIED PARTIELLE — FULL HANDOFF DISPONIBLE. | Vérifier binaires locaux, tsc dette, intégrité ACL, diff complet et non-régression globale. |
| C-21 — VP-05 | Nora choisit spontanément forme pertinente en conversation naturelle. | Huit scénarios spontanés UAT LIVE RECETTE, dont cards/matrix et directed ; prose également conservée dans la campagne DEV initiale. | BEHAVIOR PROVEN — UAT RECETTE SUR ÉCHANTILLON. | N'en déduire ni garantie universelle ni adoption globale. |
| C-22 — Gate C | Réception Morris, clôture ML4D et promotions sont des décisions distinctes. | Morris accepte explicitement les huit UAT de composition après correctifs UX-01…07 ; candidat local non mergé ; dossier de réconciliation D1 publié. | USER ACCEPTED WITH RESERVES — UAT VISUEL ; ENSEMBLE 05 GLOBAL NON CLOS / GATE C OPEN. | Réconcilier candidat local, ACL et autres oracles ; PR/merge/roadmap D2 après GO distinct. |

## 5. WBS intégré du macro-lot — actualisation après UAT du 18/11/2026

| Activité | Acquis rapporté | Réserve et prochaine sortie |
|---|---|---|
| **W1 — Direction artistique** | Figma 01–09 lus et déclinés en Studio sombre ; composants éditoriaux et diagrammes candidats. | Revue visuelle finale Figma/runtime encore partielle ; captures tronquées à remplacer si verdict visuel fort exigé. |
| **W2 — Contrat/architecture** | Strategy A, canonical-v1, admission, M1–M5, C2 et choix typed ; pas de moteur cognitif concurrent. | Diff global C2/A2/A7 et lecture historique à qualifier ; migrations non autorisées. |
| **W3 — Construction intégrée** | Figma 01–09 rendables en Level-A/B ; ELK graphes ; D3 LIVE 5 compositions ; sélection L03/L04 mieux instruite après correctif. | Spontanéité cards/matrix post-prompt non démontrée ; pas de nouveau LIVE sans GO. |
| **W4 — Qualification croisée** | UNIT/C2/SIM et Level-B PASS rapportés, LIVE 12/12 ancien candidat, relecture de 12 assistants. | tsc global en erreur préexistante rapportée (à baseliner), images complètes, 390/split/zoom/a11y et PG historique non totalement prouvés ; Review Pack Full complété ; preuves visuelles et baseline globale encore à qualifier. |
| **W5 — Recette du sous-périmètre visuel** | UAT-01…08 exécutés et acceptés par Morris avec réserves après correctifs ; dossier de réception publié, candidat `5c94c867` rapporté en RECETTE. | Autres contrats Travail non réputés reçus ; réconciliation code/ACL et intégration Git encore ouvertes ; Gate C distinct. |

**Un seul macro-lot**, sans micro-cycles documentaires ; dette et exit sont associés aux lignes C correspondantes.

## 6. Carte de traitement — actions et dépendances

| Traitement | Contenu utile | Frontière |
|---|---|---|
| **CONSERVER** | Strategy A, D3 propriétaire du sens, composants Figma 01–09, ELKjs, texte libre, projections versionnées, admission, C2, HumanDecision séparé. | Aucun retour au rendu de démonstration seulement. |
| **ACQUIS DÉTERMINISTES** | Level-A/Level-B, tests de sélection cards/matrix/dependencies/parallel, fallback conservateur, C2 exact-identity dans EditorialSynthesis. | Ne pas réétiqueter ces tests en LIVE. |
| **ACQUIS LIVE BORNÉS** | 12 tours fournisseur réel, 5 compositions, refus de chart sans données, persistence/reload nouveaux messages. | 1 pilote/projet/modèle ; preuves rapportées et captures locales. |
| **QUALIFIER AVANT INTÉGRATION** | Review Pack Full final L3 disponible et UAT visuelle acceptée ; risques TypeScript/PG historique, critères incomplets, droits ACL et diff local restent à vérifier. | Revue locale/ACL read-only, inventaire des preuves et gate Git Morris distinct. |
| **REPORTER SOUS RÉSERVE MOTIVÉE** | Ancien PG historique, coût réel tokens, certaines preuves split/zoom/accessibilité. La sélection spontanée cards/matrix est **observée** dans UAT-01/02, non universellement garantie. | Pas de nouvelle campagne LIVE/PR implicite ; responsable et exit à qualifier. |
| **HORS SCOPE** | Nouvelle DB, second moteur IA, moteur de décision parallèle, changement de doctrine, push produit, Gate C/ADOPTED. | GO Morris distinct requis. |

## 7. Contrat de preuve discriminant — état courant

| Contrôle | Évidence et statut | Oracle restant |
|---|---|---|
| **A1 — Troncature** | Tests d'overflow canonique et rejets en UNIT/FAKE rapportés. | Préserver fail-closed en intégration ; ne pas inférer toute la production LIVE. |
| **A2 — textAlternative** | SubstanceComplement et tests C2 renforcés. | Suffixe substantiel, négation et conditions sous tous les modes ; diff complet à relire. |
| **A3 — Versionnement et PG** | canonical-v1 WRITE, anciens READ rapportés ; refresh 12 nouveaux LIVE. | Historique réel PG et UNKNOWN/reconciliation : NOT RUN ou preuve distincte. |
| **A4/A7 — Qualification invalide** | Fixture fail-closed, SIM anti-fuite, contrôles Zod rapportés. | Revoir invalid/empty/parse-null sur chemins atteignables, sans COMPLETE mensonger. |
| **A5 — Graphes** | ELK, Level-B S7, arbre/parallel LIVE borné. | Géométrie complète, connecteurs, branches clavier, sync et zoom/split. |
| **A6 — Non-régression** | UNIT/Level-B PASS ; Live antérieur 12/12 ; tsc global non PASS. | Baseline TS, build/lint, vrai ErrorBoundary, responsive/a11y, fichiers/diffs Full désormais fournis pour le cycle. |
| **L03/L04 — Comparaison (historique)** | LIVE initial : Cas B (replyDraft Markdown, VC absente) ; prompt D3 renforcé ; puis **UAT-01/02 RECETTE** : cards/matrix spontanées acceptées. | Ne pas confondre l'échec de ces tours historiques avec les succès ultérieurs ni prétendre une garantie universelle. |
| **L07 — Relations** | LIVE Cas D : parallelProcess avec 3 lanes. | Conserver sémantique ; ne pas forcer directed sans relations compatibles. |

## 8. Arbitrages et gates

- **Morris déjà validé :** Strategy A, M1–M5, direction graphique sombre et fidélité adaptative ; GO LIVE précédent **consommé** (12/12 tours), coût estimé €10,20, aucun droit résiduel d'appel.
- **Réception Morris du 18/11 :** validation du corpus visuel UAT-01…08 après correctifs, avec réserves mineures ; pas de réception des autres contrats de Travail ni de changement normatif D2.
- **Handoff Cursor :** rapport Full final [dc9fd0ba](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md) vérifié à distance ; audit du diff candidat produit local, baseline tsc et binaires locaux restent à réaliser ; aucune extension LIVE engagée.
- **Git :** la présente mise à jour porte **seulement** sur ce document documentaire candidat et sa branche ; pas de merge main, PR ni modification normative.
- **RECETTE/STABLE :** candidat immuable local `5c94c867` et build `IEINNuPl0bHWJOWkh0ZhG` rapportés servis sous GO Morris ; réception UAT visuelle acquise avec réserves. STABLE NOT AVAILABLE.
- **Gate C / Ensemble 05 :** OPEN / Ensemble 05 global non clos ; seule la sous-campagne UAT de composition visuelle est reçue avec réserves.

**Verdict documentaire V0.10 : UAT VISUAL COMPOSITION USER ACCEPTED WITH RESERVES — RECONCILIATION PENDING / GATE C OPEN.**

---

> **ARCHIVES V0.6/V0.7 (sections 9–12 ci-dessous) :** constats antérieurs aux handoffs LIVE du 18/11 ; ne pas utiliser leurs statuts NOT RUN comme état courant. La matrice opposable à cette revue D1 est au §4 ci-dessus.

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

## 12. Actualisation V0.7 — contrat d'entrée historique du macro-lot Ensemble 05 (18/11/2026)

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

