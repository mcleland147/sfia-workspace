# SFIA Studio Next — Gate Morris B : acceptation du diagnostic ML4B avec réserves

| Champ | Valeur |
| --- | --- |
| Date | **11 novembre 2026** (Europe/Paris) |
| Autorité | **Morris** |
| Décision de contenu | **GATE B — ACCEPTED WITH RESERVES / ML4B CLOSED WITH RESERVES** |
| Nature | **Décision de gouvernance D2** — sortie de réconciliation CP1, entrée de finalisation CP2 |
| Référence Git du diagnostic et du produit | `mcleland147/sfia-workspace`, `main@42aa373947446a8c20694b06c559ee0da1cba580` (PR #674 intégrée) |
| Trace de publication | Branche documentaire `docs/next-r5-ml4c-cp2-preparation-20261111` issue de la branche candidate de trajectoire `docs/next-r5-ml4c-ml4d-trajectory-20261111@5717b6c938288404f71c9281f1c92be99a51fb89` ; **aucune PR ni fusion de cette décision dans `main`** |
| Observations nouvelles | **Aucun** nouveau test, navigateur, environnement LIVE/REAL ou DB observé lors de la décision ; Git local **NON OBSERVÉ** |

## 1. Objet et portée de la décision

Morris valide le **Gate B avec les réserves présentées en revue** : le diagnostic [ML4B/CP1](../../construction/reconciliation-produit/README.md) et sa [synthèse transverse](../../construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md) sont **acceptés comme base de convergence**. L'objectif documentaire de réconciliation de ML4B est considéré **clôturé avec réserves**.

Cette acceptation porte sur la suffisance du diagnostic pour préparer une convergence responsable. **Elle ne prouve pas les comportements de Studio Next et ne clôture pas la réception globale historique ML4.** Les 628 références RG/PF indexées, sept parcours E2E R1 et 43 étapes rapprochées ne sont ni 628 tests PASS ni sept parcours BEHAVIOR PROVEN. Les preuves historiques restent limitées à leurs SHAs, lanes et niveaux d'observation.

Il n'est pas exigé de rouvrir un audit ML4B complet pour atteindre une exhaustivité théorique. Les causes, preuves et décisions manquantes qui empêchent une modification sûre doivent être traitées au **temps 2 de ML4C**, préalablement au GO technique correspondant.

## 2. Arbitrages Morris B-01 à B-06

| Point | Décision retenue avec réserves | Limite et condition de sortie |
| --- | --- | --- |
| **B-01 — Recevabilité CP1** | **ACCEPTÉ AVEC RÉSERVES** : le dossier ML4B est une base suffisante pour préparer CP2. | Couverture documentaire `INDEXED/MAPPED` ≠ `COVERAGE VERIFIED` ni `BEHAVIOR PROVEN`. Tout écart nouveau est enregistré et qualifié sans rouvrir mécaniquement ML4B. |
| **B-02 — Périmètre et priorités ML4C** | **RETENU** : convergence fonctionnelle intégrée de toutes les capacités construites ML1–ML4, incluant D1 à D9, cockpit/portefeuille, sas, Nora, documents, décisions et publication Git documentaire ; UX fonctionnelle nécessaire incluse. Les trois ensembles de CP2 servent à organiser la réalisation, pas à créer trois macro-lots. | Priorité aux états et effets vrais, à l'autorité, à la continuité, à l'idempotence et à la valeur utilisateur ; solutions techniques et contrats détaillés à qualifier dans CP2. |
| **B-03 — Risques négatifs et preuves** | **RETENU** : preuves graduées et proportionnées au risque, incluant refus, révocation, instructions hostiles, concurrence, perte d'ACK, erreur/UNKNOWN et reprise. | Pas de PASS sans oracle discriminant ni identité SHA/lane/environnement ; la criticité et les risques transverses ne peuvent être différés sans arbitrage Morris et exit. |
| **B-04 — Git REAL et merge** | **RETENU** : publication documentaire Git end-to-end en sandbox autorisé sous mandat **REAL spécifique**, comprenant diff, HumanDecision, commit/PR et vérification. Le `mergePullRequest` REAL reste **HARD-BLOCKED / OUT ML4C** par défaut. | Aucune mutation fournisseur, merge, escalade de droits ou GO implicite via la présente décision ; nouvel arbitrage Morris requis pour toute exception. |
| **B-05 — Frontière UX/Figma** | **RETENU** : ML4C traite les écrans, interactions, états et navigations indispensables au parcours fonctionnel ; ML4D traite ensuite la convergence UX/UI globale de toutes les surfaces applicables. Aucune stratégie supplémentaire « shell-first / enveloppe d'abord » n'est introduite. | G2 source Figma partielle et F2/G5 global **NOT RUN** ; source visuelle et preuve runtime à qualifier selon les parcours. Responsive mineur historiquement différé : réexamen dans ML4D, pas de faux PASS. |
| **B-06 — Séquencement, réserves et dette** | **RETENU** : clôture documentaire ML4B, finalisation CP2 candidat, GO technique ML4C **distinct**, réception intermédiaire ML4C, GO ML4D distinct, réception UX globale, **Gate C final après ML4D**, puis ML5 Cursor et R6. | Chaque réserve reportée porte propriétaire, risque, destination, condition de sortie et preuve attendue ; pas d'adoption anticipée ni de réouverture automatique des clôtures historiques. |

Les anciennes options A/B/C du diagnostic CP1 restent des **hypothèses analytiques historiques**, pas le découpage de réalisation décidé. La [décision complémentaire ML4C/ML4D du 11/11](2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) conserve la propriété du séquencement.

## 3. Réserves obligatoirement conservées à l'entrée de CP2

| Famille CP1 | Réserve, propriétaire et obligation |
| --- | --- |
| **X-01 — Vérité après effet** | D1/D3/D4 : statut de projet calculé par index (`D1-GAP-01`) et contradiction LIVE `ML4-REC-08` — révision D4 `AVAILABLE`, narration Nora niant la sauvegarde ; distinguer comportement observé, causes présumées et causes prouvées. **ML4C : correction et preuve de restitution fidèle.** |
| **X-02 — Mémoire / raisonnement** | D3/D4/D5/D6 : sélection `lexical-heuristic`, rappel utile, contradictions sourcées, maturité B08 et effectivité CKI — **preuve cognitive LIVE représentative** ; ne pas décider un moteur supplémentaire avant analyse causale. |
| **X-03 — Continuité incertaine** | D1–D6 : perte d'ACK après création/révision, `pending` bloquant une question indépendante, concurrence et reprise ; **absence de doublon, vérité du résultat, dialogue indépendant** à démontrer. Les risques DB ne sont pas des pertes établies. |
| **X-04 — Git USER** | D4/D6–D9 : R12 Git incomplet, R13/R14 NOT RUN, malgré antécédent provider REAL borné ; **publication documentaire complète après mandat distinct**, relue sur dépôt sandbox, aucune preuve inventée. |
| **X-05 — Droits et refus** | D1/D4/D6–D9 : révocation au point d'effet, dépôt partagé entre Pilotes, source Git hostile, autorité humaine ; **négatifs représentatifs API/PG/BROWSER/REAL suivant effet et mandat**, sans extrapoler à une fuite non prouvée. |
| **X-06 — UX et fidélité** | UX fonctionnelle des parcours en ML4C ; **F2/G5 et conformité UX/UI globale en ML4D**, avec sources Figma et captures browser comparables ; les 19/20 transpositions G4 déclarées ne certifient pas la fidélité. |
| **X-07 — Erreurs / résilience / observabilité** | D1–D9 propriétaires : erreurs 401 non-auth, cookies/lane, restore réel PG, `PG-DBFAIL-03` conditionnel, streaming et `modelApplied` ; sélectionner oracles discriminants selon risque, **sans transformer NOT RUN en FAIL**. |
| **X-08 — Frontières de périmètre** | Git merge REAL **HARD-BLOCKED** sauf GO spécifique ; réalisation technique Cursor **ML5 OUT** ; E2E05/06 seulement sur leurs portions ML1–ML4 dans ML4C. |

**Règle d'exit :** une réserve critique ne peut pas être cachée dans une retouche UX, une nouvelle fonctionnalité implicite, une prétendue preuve déterministe ou un report sans responsable. Les écarts de cause inconnue restent à expliquer avant correction structurelle.

## 4. Suite autorisée et interdictions

**Autorisé par cette décision :** finaliser le [contrat candidat CP2](../../construction/convergence-fonctionnelle/qualification-cp2.md) selon la **méthode en quatre temps** — qualification des écarts, diagnostic causal, convergence intégrée, preuves de parcours — et préparer les arbitrages de construction.

**Non autorisé :** GO technique Cursor, code/DB/CI/Figma, publication Git REAL du produit, PR/merge de dépôt, Git `main`, convergence ML4D exécutée, ML5, STABLE, release ou `ADOPTED`. Les GO techniques, PR et merges restent séparés, à l'autorité de Morris.

**État de décision de contenu :** `GATE B ACCEPTED WITH RESERVES / ML4B DOCUMENTARY CLOSED WITH RESERVES / CP1 BASE ACCEPTED / CP2 PREPARATION AUTHORIZED / ML4C NO BUILD GO / ML4D NO BUILD GO / GATE C OPEN / NO ADOPTED`.
