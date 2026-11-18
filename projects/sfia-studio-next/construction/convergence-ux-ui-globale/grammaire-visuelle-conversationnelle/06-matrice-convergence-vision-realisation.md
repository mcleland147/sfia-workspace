# SFIA Studio Next — Matrice de convergence : vision, contrats et réalisation Cursor

**Version :** 0.9 — 18 novembre 2026 (revue du handoff Full complété, réserves de sélection et statut de réception)
**Statut :** DOCUMENTED / REVIEW CANDIDATE — suivi non normatif D1 soumis à validation Morris ; aucune nouvelle décision D2, aucune réception, aucun ADOPTED.
**Périmètre :** R5 / ML4D — Ensemble 05 « Travail avec Nora », composition conversationnelle adaptative et remplacement de l'expérience E05.
**Nature :** matrice vivante de qualification, fondée sur les handoffs Git ; code produit et worktree non inspectés directement par ChatGPT. Les §§9–12 constituent des instantanés historiques V0.6/V0.7, non l'état courant.
**Sources de conception :** [01 — Vision produit](01-cadrage-vision-produit.md) · [02 — Fonctionnel/UX](02-conception-fonctionnelle-ux.md) · [03 — Architecture](03-architecture-solution-technique.md) · [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) · [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md).

## 1. Conclusion et cadrage de la revue — V0.9

**Synthèse :** la chaîne D3 → composition sémantique → admission Studio → composants React/ELK → persistance/relecture dispose de preuves rapportées Level-A (fixtures), Level-B (fournisseur simulé à la frontière D3) et Level-C LIVE **bornées** (12 tours, dont 5 avec composition spontanée, 0 retry). Ces niveaux ne démontrent pas une couverture spontanée de toutes les neuf familles. L'usage LIVE est attaché à un seul projet/Pilote/modèle DEV, et le coût €10,20 est une **estimation fallback**, pas une facturation contrôlée.

**L03/L04 :** la base DEV reconstruite indique des tableaux Markdown dans replyDraft, **sans visualComposition**. La cause se situe dans la production D3 (cas B), pas dans le renderer ; un renforcement des instructions D3 est rapporté par le handoff 43b12a34. Des replays **FAKE** de structures artificiellement préparées sélectionnent cards/matrix ; ils ne prouvent **pas** que les nouvelles instructions produiront spontanément ces blocs lors d'un futur LIVE. **L07 :** parallelProcess + trois laneId, choix parallel fidèle à la substance (cas D), non défaut de graphes directed.

**Intégrité et limites :** la déduplication exacte dans EditorialSynthesis et le mécanisme anti-fuite SIM sont corrigés et testés selon Cursor ; la couverture globale C2/A2/A7, les replays historiques PG, une comparaison visuelle complète des Figma 01–09, le tsc global et les diffs complets du candidat ne sont pas tous acquis. Le handoff complété `0cda342f` contient désormais les fichiers FULL et diffs requis pour les deltas de consolidation : la réserve **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING** est **LEVÉE pour ce cycle**. Les empreintes des copies locales non publiées et l'audit global de tout le worktree restent distincts. Les captures binaires locales ne sont pas intégrées à ce document Git.

**Règle de gouvernance :** un verdict Cursor « READY FOR MORRIS ENSEMBLE 05 RECEPTION REVIEW » autorise une **revue**, pas une réception, Gate C, PR/merge, RECETTE, STABLE ni ADOPTED. Ne pas fusionner cette matrice candidate sur main sans GO distinct. Strategy A et M1–M5 restent les orientations validées ; pas de second moteur de vérité ni de migration implicite.

**Verdict V0.9 :** **REVIEW PACK FULL EXPLOITABLE — RÉCEPTION PRODUIT AVEC RÉSERVES À ARBITRER**. L'actualisation conserve les IDs d'origine C-01 à C-22 ; elle **ne reprend pas** le tableau erroné C-01…C-22 proposé dans le handoff 43b12a34.

**Réserves de code relevées dans le Full (non incidents LIVE observés) :** `selectComparisonVariant()` peut maintenir `matrix` pour cinq options alors que `CV_COMPARISON_CRITERIA_INCOMPLETE` est émis ; les tests UNIT ne prouvent pas la restitution explicite des cellules manquantes en BROWSER. `structuredBlockSurface()` préfixe toute timeline par « Chronologie fictive » sans distinguer une temporalité établie d'une hypothèse ; vérifier son affichage effectif et éviter un qualificatif trompeur. Enfin, le handoff `0cda342f` reproduit encore au §23 la proposition V0.7 incorrectement indexée : elle est explicitement **supplantée par la présente matrice V0.9**, qui conserve les identifiants C-01 à C-22. Ces constats ne contredisent pas les résultats LIVE antérieurs ; ils restent à qualifier avant réception sans réserve.

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
| C-01 — VP-01, UX-A/B | Nora choisit la forme utile sans gabarit obligatoire. | LIVE L01–L04 et L10–L12 : réponses textuelles pertinentes ; L05–L09 : compositions spontanées rapportées. | BEHAVIOR PROVEN — LIVE BORNÉ, formes échantillonnées. | Préserver la liberté de prose ; les nouvelles instructions D3 ne sont pas elles-mêmes requalifiées en LIVE. |
| C-02 — VP-02, UX-C/F | Un message composite conserve identité, qualification, fin et substance. | Level-B API/BROWSER sur chaîne D3 ; LIVE : 12 messages assistants relus après refresh, sans régénération selon rapport. | BEHAVIOR PROVEN — LIVE BORNÉ / compatibilité exhaustive NON PROUVÉE. | Régression sur erreurs, état UNKNOWN, versions anciennes et identité ; dossier Full exploitable. |
| C-03 — VP-06, doc 03 | D3 possède le sens ; Studio contrôle admission et représentation, sans second moteur. | Strategy A ; L03/L04 sans visualComposition restent en prose, L05–L09 utilisent le rendu ; admission et ELK réutilisés. | IMPLEMENTED / BEHAVIOR PROVEN — frontière observée en LIVE borné. | Maintenir D3–D9 ; aucun parsing libre de Markdown créant une autorité ou des faits. |
| C-04 — VP-03/04, CV-02/06 | Substance textuelle et graphique fidèles à une seule source ; aucun statut FINAL inventé. | Projection canonical-v1 et SubstanceComplement ; correction exactShownElsewhere égalité stricte, UNIT C2/adverses PASS rapportés. | COVERAGE VERIFIED — PARTIEL ; revue complète des chemins C2 et sorties invalides non achevée. | Diff exploitable et tests d'intégrité pour négations/conditions/suffixe textAlternative, erreurs/fallback et chemins A7 ; pas de perte. |
| C-05 — doc 04/05 | WRITE canonique, READ des versions précédentes sans changement d'autorité. | WRITE canonical-v1 ; READ projection-v1/E05 rapportés ; pas de migration ; replays représentatifs, mais pas de rejeu historique complet en PG. | IMPLEMENTED / HISTORICAL PG REPLAY NOT RUN. | Qualifier les trois versions sur enregistrements historiques autorisés si disponibles ; sinon réserve et exit. |
| C-06 — M1/M5, CV-11 | Identité, persistance et reprise du message, non de la disposition graphique. | LIVE 12 assistants persistés/relus ; Level-B persist/reload PASS ; DB DEV :5433, anciens tours historiques non rejoués. | BEHAVIOR PROVEN — nouveaux tours LIVE bornés ; historique PARTIEL. | Contrôler UNKNOWN, ACK perdu, reprises et compatibilité PG historique ; aucun nouveau stockage ni migration. |

### B — Familles et représentations

| ID canonique | Contrat / résultat | État rapporté et preuve | Qualification au 18/11/2026 | Réserve / sortie |
|---|---|---|---|---|
| C-07 — GV-01/02 | Narration naturelle sans visuel obligé. | L01–L04 et L10–L12 restent en prose ; L10 refuse un graphique quantitatif insuffisamment fondé. | BEHAVIOR PROVEN — LIVE BORNÉ. | Préserver prose-only après renforcement des instructions de comparaison ; évaluer la pertinence, pas le nombre de graphiques. |
| C-08 — Figma 03/04 | Comparaisons cards/matrix/stacked fidèles aux options et critères. | Level-A et Level-B : composants ; LIVE L03/L04 : tableaux Markdown sans visualComposition (Cas B) ; instructions D3 renforcées ; REPLAY FAKE L03→cards/L04→matrix PASS. | IMPLEMENTED / COVERAGE VERIFIED — FAKE ; sélection spontanée cards/matrix POST-CORRECTIF NOT PROVEN LIVE. | Conserver L03/L04 historiques inchangés ; éventuellement contre-épreuve LIVE sous nouveau GO, non requise automatiquement pour ce dossier. |
| C-09 — Figma 02/06 | Parcours et temporalités fondés ; chronologie sans dates inventées. | EditorialSequence et timeline Figma 02 corrigées en DEV ; LIVE L05/L06 composition sequence rapportée ; absence de Gantt inventé. | BEHAVIOR PROVEN — LIVE BORNÉ pour sequence ; conformité planning complet PARTIELLE. | Revue Figma/runtime intégrale ; vérifier aussi `structuredBlockSurface()` qui désigne toute timeline par « Chronologie fictive », même si elle est fondée (risque de qualification inexacte en restitution/fallback). |
| C-10 — Figma 07 | Graphe de dépendances dirigées, relations et convergence lisibles. | DirectedRelationBoard/ELK présent et Level-B S7 PASS ; LIVE L07 = parallelProcess avec 3 laneId, choix fidèle ; graphe dependencies spontané non démontré en LIVE. | COVERAGE VERIFIED — FAKE ; LIVE DIRECTED NOT PROVEN. | Conserver distinction dependencies/parallel ; inspecter graphe complet, connecteurs, viewport et libellés. |
| C-11 — Figma 08 | Arbre conditionnel véritable, branches fidèles, aucune décision automatique. | Topologie directed Level-A/B ; L08 LIVE : composition conditionnelle rapportée, preuve visuelle locale non inspectée dans cette mise à jour. | BEHAVIOR PROVEN — LIVE BORNÉ SELON HANDOFF ; réception Figma/A11Y PARTIELLE. | Vérifier captures complètes branches et clavier, propriétaire HumanDecision. |
| C-12 — Figma 09 | Voies parallèles et synchronisations fondées sans faux effet métier. | L07 : parallelProcess avec 3 laneId fidèle, L09 : parallel spontané rapporté ; tests directed/parallel FAKE. | BEHAVIOR PROVEN — LIVE BORNÉ ; visuel et sync exhaustifs PARTIELS. | Inspecter connexions, convergence, scrolling et aucune fausse décision D6. |
| C-13 — GV-06 | Graphiques quantitatifs seulement si valeurs, unités et provenance établies. | L10 LIVE refuse de construire un graphique quantitatif sans données ; pas de bibliothèque quantitative ajoutée gratuitement. | DIFFÉRÉ CONFORME / NON-INVENTION LIVE OBSERVÉE. | N'ouvrir la famille quantitative qu'avec besoin et sources fondés ; aucun chart fictif. |
| C-14 — CV-04/05 | Choix adaptatif selon densité, cardinalité et largeur. | Discriminants UNIT 2/3/5/8/12 et dépassement ; 390, 960, 1040, 1280, 1440 selon handoff, variantes text/cards/matrix/stacked ; 18 excède la limite du schéma. | COVERAGE VERIFIED — UNIT PARTIEL ; responsive navigateur exhaustif NON PROUVÉ. | Vérifier 390/430/790/1040/1280/1440, longs textes, split et critères incomplets dans le navigateur. |

### C — UX, sécurité, continuité

| ID canonique | Contrat / résultat | État rapporté et preuve | Qualification au 18/11/2026 | Réserve / sortie |
|---|---|---|---|---|
| C-15 — CV-T11/12/20 | Conteneur étroit, split, zoom et clavier sans perte ni coupe inaccessible. | Tests et captures de certaines largeurs ; correction timeline et matrice ; campagne globale split 50/50, zoom 200/400 %, clavier non établie. | PARTIEL — PREUVE BROWSER/ACCESSIBILITÉ INCOMPLÈTE. | Produire mesures et captures complètes de reflow/split/zoom/focus, sans déclarer un PASS général. |
| C-16 — UX-D/E | Sources/choix soumis aux droits et à la durée de vie, sans effet graphique. | Contrats D3–D9, références/choix canoniques préservés ; aucun HumanDecision automatique rapporté ; droits/expiration dynamiques non revus ici. | IMPLEMENTED CONTRACT / COVERAGE PARTIELLE. | Tester expiration, révocation et accès courant au point d'action ; ne pas créer d'effet depuis le renderer. |
| C-17 — CV-10/15 | Fallback textuel et exception renderer sans perte ni re-génération. | SubstanceComplement et C2 exact-identity ; C2-08 navigateur rapporté antérieurement ; tests C2/adverses reconfirmés, mais rapport Full incomplet sur les diffs. | COVERAGE VERIFIED — PARTIEL / RISQUES DE PREUVE OUVERTS. | Inspection diff global et vraie panne de composant BROWSER, suffixe de textAlternative, négations, exceptions. |
| C-18 — VP-07, Figma 01–09 | Fidélité éditoriale et géométrique au contrat visuel sombre et adaptatif. | Composants 01–09 construits ; revue visuelle antérieure : 01/03/05/06 proches, 02/04 corrigés ensuite, 07–09 seulement partiellement inspectés ; captures locales parfois tronquées. | IMPLEMENTED / VISUAL RECEPTION NOT COMPLETE. | Comparer neuf Figma aux captures runtime complètes et inspectables ; ne pas assimiler testid/fixture à fidélité validée. |
| C-19 — UX-F, R05 | Refresh, réconciliation et continuité, y compris statuts incertains. | 12 messages LIVE rechargés ; Level-B reload PASS ; absence de nouvel appel au refresh rapportée ; UNKNOWN/ACK historiques non qualifiés ici. | BEHAVIOR PROVEN — REFRESH LIVE BORNÉ ; reprise d'erreur PARTIELLE. | Non-régression des chemins de tentative/ACK, identité, brouillon et navigation ; historique non présumé. |

### D — Qualification et réception

| ID canonique | Contrat / résultat | État rapporté et preuve | Qualification au 18/11/2026 | Réserve / sortie |
|---|---|---|---|---|
| C-20 — CV-T01–20 | UNIT/FAKE/BROWSER/PG/LIVE et preuves visuelles différenciées. | UNIT sélection/C2/SIM PASS ; Level-B BROWSER PASS ; LIVE 12/12 antérieur ; nouvelle instruction D3 non revalidée LIVE ; tsc global en erreur qualifié préexistant ; Review Pack deltas complété au `0cda342f` (3 379 lignes). | COVERAGE VERIFIED — PARTIEL ; REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING. | Traçabilité de consolidation levée ; restent baseline TypeScript reproductible, preuve Figma/PG appropriée et contrôle des binaires locaux. |
| C-21 — VP-05 | Nora choisit spontanément forme pertinente en conversation naturelle. | LIVE 12 tours, 5 compositions L05–L09 ; prose pertinente ailleurs ; L03/L04 Cas B, prompt futur renforcé sans nouveau LIVE. | BEHAVIOR PROVEN — LIVE BORNÉ ; CARDS/MATRIX POST-CORRECTIF NOT PROVEN. | Conserver scope 1 Pilote/1 projet/1 modèle et réserve ; autre LIVE uniquement sur GO Morris distinct. |
| C-22 — Gate C | Réception Morris, clôture ML4D et promotions sont des décisions distinctes. | Dossier de réception préparé au handoff 43b12a34 ; matrice proposée Cursor C-01…22 avait des identifiants décalés, rectifiés ici ; aucun code produit poussé. | DOCUMENTED — GATE C OPEN / ENSEMBLE 05 NON REÇU. | Revue documentaire et visuelle Morris ; commit/PR/merge produit, recette et Gate C sous autorisations séparées. |

## 5. WBS intégré du macro-lot — état au 18/11/2026

| Activité | Acquis rapporté | Réserve et prochaine sortie |
|---|---|---|
| **W1 — Direction artistique** | Figma 01–09 lus et déclinés en Studio sombre ; composants éditoriaux et diagrammes candidats. | Revue visuelle finale Figma/runtime encore partielle ; captures tronquées à remplacer si verdict visuel fort exigé. |
| **W2 — Contrat/architecture** | Strategy A, canonical-v1, admission, M1–M5, C2 et choix typed ; pas de moteur cognitif concurrent. | Diff global C2/A2/A7 et lecture historique à qualifier ; migrations non autorisées. |
| **W3 — Construction intégrée** | Figma 01–09 rendables en Level-A/B ; ELK graphes ; D3 LIVE 5 compositions ; sélection L03/L04 mieux instruite après correctif. | Spontanéité cards/matrix post-prompt non démontrée ; pas de nouveau LIVE sans GO. |
| **W4 — Qualification croisée** | UNIT/C2/SIM et Level-B PASS rapportés, LIVE 12/12 ancien candidat, relecture de 12 assistants. | tsc global en erreur préexistante rapportée (à baseliner), images complètes, 390/split/zoom/a11y et PG historique non totalement prouvés ; Review Pack Full complété ; preuves visuelles et baseline globale encore à qualifier. |
| **W5 — Recette produit** | Dossier Morris préparé ; matrice canonique mise à jour ici à la bonne numérotation. | Réception **non prononcée** ; Gate C, push/PR/merge, RECETTE, STABLE, ADOPTED distincts. |

**Un seul macro-lot**, sans micro-cycles documentaires ; dette et exit sont associés aux lignes C correspondantes.

## 6. Carte de traitement — actions et dépendances

| Traitement | Contenu utile | Frontière |
|---|---|---|
| **CONSERVER** | Strategy A, D3 propriétaire du sens, composants Figma 01–09, ELKjs, texte libre, projections versionnées, admission, C2, HumanDecision séparé. | Aucun retour au rendu de démonstration seulement. |
| **ACQUIS DÉTERMINISTES** | Level-A/Level-B, tests de sélection cards/matrix/dependencies/parallel, fallback conservateur, C2 exact-identity dans EditorialSynthesis. | Ne pas réétiqueter ces tests en LIVE. |
| **ACQUIS LIVE BORNÉS** | 12 tours fournisseur réel, 5 compositions, refus de chart sans données, persistence/reload nouveaux messages. | 1 pilote/projet/modèle ; preuves rapportées et captures locales. |
| **QUALIFIER AVANT RÉCEPTION** | Review Pack Full désormais exploitable pour la consolidation ; matrice C-ID correcte, réserves TypeScript/visuel/C2 et cas critères incomplets à arbitrer avant réception. | Cursor republie handoff L3 Full avec diffs ; ChatGPT revoit ; Morris arbitre. |
| **REPORTER SOUS RÉSERVE MOTIVÉE** | Ancien PG historique, coût réel tokens, sélection LIVE cards/matrix post-correctif, certaines preuves split/zoom/accessibilité. | Pas de nouveau LIVE/RECETTE/PR implicite, exit clair. |
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
| **L03/L04 — Comparaison** | LIVE Cas B (replyDraft Markdown, VC absente) ; prompt D3 renforcé ; REPLAY FAKE cards/matrix PASS. | Nouvel effet spontané LIVE **NOT PROVEN** ; ne pas inventer la validation. |
| **L07 — Relations** | LIVE Cas D : parallelProcess avec 3 lanes. | Conserver sémantique ; ne pas forcer directed sans relations compatibles. |

## 8. Arbitrages et gates

- **Morris déjà validé :** Strategy A, M1–M5, direction graphique sombre et fidélité adaptative ; GO LIVE précédent **consommé** (12/12 tours), coût estimé €10,20, aucun droit résiduel d'appel.
- **Décision sollicitée par cette révision D1 :** validation du contenu factuel V0.8 de cette matrice et choix des réserves acceptables en réception ; **aucune décision de réception implicite**.
- **Handoff Cursor attendu :** republication du rapport Full du même cycle avec diffs exploitables, contenus obligatoires et baseline tsc ; relecture distante SHA/blob ; aucune extension LIVE.
- **Git :** la présente mise à jour porte **seulement** sur ce document documentaire candidat et sa branche ; pas de merge main, PR ni modification normative.
- **RECETTE/STABLE :** aucune mise à disposition sans candidat Git immuable et GO ENV-01 ; STABLE NOT AVAILABLE.
- **Gate C / Ensemble 05 :** OPEN / non reçu. La préparation d'une revue n'est pas l'acceptation.

**Verdict documentaire courant : REVIEW PACK FULL EXPLOITABLE — RÉCEPTION ENSEMBLE 05 À DÉCIDER AVEC RÉSERVES EXPLICITES.**

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

