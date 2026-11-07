# SFIA Studio Next — R5 · Référence de delivery

> **Actualisation factuelle 2026-11-04, post-ML1 :** R5 **IN PROGRESS**, premier vertical ML1 **IMPLEMENTED / MERGED #649 / RECETTE FONCTIONNELLE ACCEPTÉE AVEC RÉSERVES** ; clôture formelle ML1 **VALIDÉE PAR MORRIS AVEC RÉSERVES le 2026-11-04**. Le présent document conserve ci-dessous la préparation D0/R5 datée **avant construction** ; ses mentions `CODE N/A`, `R5 NOT STARTED`, `PR NON MERGÉE` et `pas de preuve LIVE` décrivent cette période historique et non le runtime actuel. Voir Roadmap R5 et spécification ML1 §15, matrice ML1 §8. Les quatre enseignements REX sont distincts de la clôture ML1 ; aucun GO ML2 ou STABLE n'en découle.

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.


**Version :** travail D0 / v0.4 — 2026-11-04
**Statut de la préparation D0 initiale (historique) :** `PREPARATION DOCUMENTAIRE EN COURS / CONTENU CANDIDAT / R5 CONSTRUCTION NOT STARTED À CETTE DATE`. **État produit actuel :** voir note post-ML1 ci-dessus.
**Périmètre :** préparation du dispositif documentaire, de traçabilité, de vérification et de gouvernance de la construction R5.
**Autorité :** Morris valide les contrats, les arbitrages structurants, les gates et les opérations Git ; ChatGPT prépare et révise ; Cursor implémente sous SFIA v2.6 après mandat.
**Dépôt contrôlé :** [`mcleland147/sfia-workspace`](https://github.com/mcleland147/sfia-workspace), `main@a0b80b9ecd64149ed51f87235ae246e197e66462` ; branche `main` protégée. **Git local, staged, untracked et worktrees : NON OBSERVÉS.**
**Intégration R4 :** [PR #646](https://github.com/mcleland147/sfia-workspace/pull/646) mergée le 2026-11-03T23:33:19Z, SHA de merge identique au HEAD ci-dessus. Certains paragraphes historiques de la Roadmap et du cadrage R4 décrivent encore le gate PR/merge comme à venir : la preuve Git directe prime.
**Runtime Next au moment de cette préparation D0 (historique) :** `N/A — NON IMPLÉMENTÉ`. **Depuis :** ML1 construit/recetté, preuves bornées, non adopté ; voir note d'actualisation.

> **Qualification du présent document :** le GO conversationnel de Morris autorise la consolidation D0 du dispositif et la préparation d’une **spécification technique candidate ML1**. Il ne valide pas automatiquement les choix techniques ouverts et n’autorise ni écriture Git, ni prompt/exécution Cursor, ni code. Les ajustements UX/QA de la discussion du 2026-11-04 sont intégrés ci-dessous.

## 1. Objet : faire de R5 une transposition contrôlée des jalons R1–R4

R5 produit du code, des tests et des preuves à partir de sources déjà conçues et validées. La séquence de contrôle est :

`R1 vision/E2E → R2 RG/PF et responsabilités → R3 UX/frames/contrat de transposition quand applicable → R4 ADR/architecture/QA/ENV-01 → R5 contrat technique → code/test/preuve → revue/recette → R6 qualification transverse`.

Les liens sont **plusieurs-à-plusieurs** : une exigence peut traverser plusieurs macro-lots et une fonctionnalité peut être reliée à plusieurs RG/PF, écrans et scénarios QA. Le R2 reste propriétaire des règles fonctionnelles ; R3 de l'UX ; R4 des frontières architecturales ; les décisions Morris de l'autorité ; le R5 de la solution technique implémentée et de sa preuve.

**Règle anti-duplication :** citer un texte canonique par `chemin + identifiant/section + ref Git` plutôt que le recopier. Décrire dans R5 uniquement la déclinaison technique, les liens, les critères de conformité et les écarts. Aucune liste parallèle de 324 RG ou de 259 PF à maintenir manuellement.

## 2. Baseline des sources et prudences de lecture

| Source | Autorité / artefact | Inventaire ou observation utile |
|---|---|---|
| SEF v0.2 | `governance/SEF.md` | Macro-lots, qualité/proof, statuts, autonomie et gates §10. Validé Morris. |
| Roadmap Next | `governance/roadmap.md` | R5/R6 `NOT STARTED` ; vérifier l'état Git en complément des textes de publication historiques. |
| R1 | `cadrage/vision-produit.md`, vision cible et décision R1 | 9 domaines produit D1–D9 et 7 E2E de référence. |
| R2 | `conception-fonctionnelle/README.md` et 9 spécifications D1–D9 | Clôture initiale : **300 RG/241 PF** ; complémentaires après validation Morris : **324 RG/259 PF** sur `main`. Les nombres historiques restent dans les sections de clôture ; le corpus courant prévaut. |
| CKI | `cki/` et index R2 | 15 fiches et 50 relations validées en contenu, non prouvées en runtime. |
| R3 | `ux-ui/` et Figma source | 223 frames, 901 blocs racines indexés, contrat Figma→code, couverture des familles validée ; géométrie profonde partielle. Les frames incluent variantes et index de revue, non 223 pages produit à coder une par une. |
| R4 | `architecture-technique/cadrage-r4.md`, décision R4 | ADR R4-01…04, DATA-01 et quatre ensembles QA de 16/18/24/26 = **84 cas candidats non exécutés**. |
| ENV-01 | `governance/environnements-recette-et-promotions.md` | DEV, RECETTE et STABLE isolées ; candidat recette figé par SHA, recette avant merge, promotions sous GO distincts. |
| SFIA v2.6 | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et `prompts/templates/sfia-cycle-execution-template.md` | Processus externe à consulter depuis Git avant chaque prompt ; aucune variante concurrente dans Next. |
| Studio historique | `projects/sfia-studio/production-runtime-reference/` et code historique | Capitalisation ponctuelle justifiée ; aucun réemploi technique automatique ni autorité sur Next. |

**Liens :**
- [SEF](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/governance/SEF.md) · [Roadmap](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/governance/roadmap.md) · [R2](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/conception-fonctionnelle/README.md).
- [Contrat de transposition](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md) · [index géométrique](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/ux-ui/index-geometrie-frames-r3.json) · [Figma Next](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP).
- [Cadrage R4](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/architecture-technique/cadrage-r4.md) · [Décision R4](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/governance/decisions/2026-11-04-r4-architecture-exit.md) · [ENV-01](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/governance/environnements-recette-et-promotions.md).

**Règle de version :** toute matrice/fiche R5 mentionne le SHA des documents Git lus, et, pour Figma mutable, `fileKey`, page, `node-id`, date/état de l'extraction et snapshot de référence. Un lien Figma seul n'est pas une version immuable. Un complément validé après une clôture historique fait partie de la baseline lorsque présent au ref retenu.

## 3. Organisation documentaire proposée — sans créer de nouvelle doctrine

### 3.1. Un document vivant global

**Ce document est candidat à devenir** le tableau de bord canonique du delivery R5 après validation et publication autorisée. Il porte : périmètre, baseline source, séquencement et intégration des macro-lots, décisions et hypothèses référencées, couverture/risques/dettes, dépendances, statut des gates, preuve d'intégration et prochaines capacités. Les décisions structurantes restent dans `governance/decisions/` avec un lien ici ; les RG/PF restent chez R2 ; le contrat visuel reste chez R3 ; les ADR chez R4.

**Chemin Git envisagé, non autorisé :** `projects/sfia-studio-next/delivery/reference-delivery.md`.

### 3.2. Un document technique principal par macro-lot réellement ouvert

Chaque document suit le **« Contrat de spécification technique R5 — modèle v0.2 »** livré séparément. Il comporte fonctionnalités et sous-fonctionnalités cohérentes, interfaces, données, autorités, UX si applicable, plan QA/REAL, critères d'acceptation et sections d'implémentation/proof. Il constitue une spécification évolutive synchronisée **dans le même macro-lot que le code et les tests**.

**Emplacement envisagé, non autorisé :** `projects/sfia-studio-next/delivery/macro-lots/<nom-responsabilite-produit>.md`. Le nom du document renvoie à une capacité, et le code permanent ne porte pas d'ID `ML1`, `R5`, `legacy` ou `temp`. **Ne pas précréer cinq documents vides** avant qualification de leurs sources et frontières.

### 3.3. Matrice centrale légère

Dans la référence globale, tenir un **index de couverture** de liens ; les détails techniques et les preuves demeurent chez les propriétaires. Cette matrice peut évoluer en format structuré si les relations deviennent trop nombreuses, sans devenir un second référentiel normatif. Aucun outil/stockage de matrice particulier n'est adopté à ce stade.

## 4. Schéma de traçabilité et règles de rattachement

Un enregistrement de lien comporte au minimum :

| Champ | Contrat |
|---|---|
| `coverageId` | ID documentaire de lien stable, sans devenir nom de code ou règle métier. |
| `capability` / `macroLot` | Résultat Pilote et responsabilité de delivery ; propriétaire principal et consommateurs. |
| `sourceBaseline` | Git repo/ref/SHA ; Figma page/nœud/snapshot pour R3. |
| `r1Refs` | Domaine(s) R1 et E2E impactés, section/ID exacts. |
| `r2Refs` | `RG-*`, `PF-*` canoniques et éventuellement CKI applicables ; relations multiples explicites. |
| `r3Applicability` / `r3Refs` | `APPLICABLE` avec frame(s)/variant(s)/contrat UX ; `N/A` motivé si aucune surface visuelle. |
| `r4Refs` | ADR, section d'architecture, invariant/owner, DATA-01/ENV-01 si applicables. |
| `qaRefs` | Repères QA A01–A16, B01–B18, C01–C24, D-01–D-26, et scénarios supplémentaires reliés aux exigences ; pas de claims de tests déjà réalisés. |
| `technicalSpecRef` | Chapitre/fonctionnalité du document R5 portant le contrat d'implémentation. |
| `implementationRefs` | À partir du code réel : commit SHA, fichiers/modules/interfaces/migrations, diff et version. |
| `testRefs` / `evidenceRefs` | Code des tests, exécution et artefacts, lane, SHA, données, identité, niveaux DETERMINISTIC/INTEGRATION/BROWSER/LIVE/REAL. |
| `status` / `gap` / `gate` | `NOT ANALYZED`, `MAPPED`, `GAP`, `SPEC VALIDATED`, `IMPLEMENTED`, `COVERAGE VERIFIED`, `BEHAVIOR PROVEN`, `ADOPTED` selon preuve/autorité ; exception, owner et exit. |

**Cardinalités :** 1→N et N↔N autorisées. Règle unique dans sa spec R2 ; plusieurs réalisations dans R5 autorisées avec un propriétaire d'implémentation explicite ; même QA peut couvrir plusieurs fonctions. Les liens croisés sont des références, pas des duplications d'implémentation.

**Ne pas imposer une traduction mécanique 1 RG → 1 classe ou 1 test.** Exiger une couverture de chaque exigence en service du macro-lot avec preuve adaptée ; décrire `non applicable`, `déféré R6` ou `non couvert` seulement avec justification, responsable, risque et gate. Les invariants critiques et frontières d'effet ont scénarios positifs et négatifs, même si aucun test unitaire par phrase n'existe.

**Complément de traçabilité validé — REX ML1, enseignement 4 (2026-11-04) : progression cognitive de Nora.** Pour chaque capacité cognitive **introduite ou enrichie** dans un macro-lot, utiliser la matrice de traçabilité et le contrat QA du lot propriétaire pour relier, sans nouvelle matrice parallèle :

- **Compétence / valeur Pilote** : comportement que Nora doit améliorer, source R1/R2 et résultat utilisateur attendu.
- **Référence comparable** : scénario(s) représentatif(s), conditions, versions/lane et état antérieur réellement observé ; écrire `NON MESURÉ` ou `N/A — NO PRIOR CAPABILITY` lorsqu'une comparaison historique est indisponible.
- **Observation après livraison** : scénario(s) rejoués, oracle de pertinence, identité des sources/contexte, références test et preuves (SHA, environnement, niveau DETERMINISTIC/INTEGRATION/BROWSER/LIVE/REAL, limites).
- **Écart / progression qualifiée** : amélioration démontrée, résultat inchangé, régression ou preuve insuffisante ; propriétaire, risque, correctif/dette et condition de sortie si applicable.

Ne pas déduire une amélioration cognitive d'un composant installé, d'une réponse isolée de Nora ou d'un test FAKE. Les scénarios restent proportionnés au risque et à la valeur produit, sans seuil universel ni gate nouveau. **Les résultats historiques ML1 sont conservés tels quels** ; ils ne sont pas requalifiés a posteriori et ne constituent une baseline que dans la mesure où leurs preuves permettent une comparaison valide.

### 4.1. Exemple de rattachement — création explicite (illustratif, à confirmer en qualification ML1)

- **R2** : `RG-CRE-008` (acte explicite) ; `PF-CRE-07/08` (selon contrat exact à recontrôler), plus règles d'idempotence et de reprise réellement applicables.
- **R3** : parcours sas → projet/continuité, frame « 02 — Sas », variante « 02B — Projet créé, même fil » ; `node-id` exact à lire dans le snapshot Figma au moment de l'implémentation ; contrat de transposition applicable.
- **R4** : ADR R4-02, V-A, §5.3.4 et scénario QA `A03` (projet créé seulement sur acte dédié), autres QA A selon impacts.
- **R5** : contrat de commande et unicité transactionnelle, preuve DB / navigateur sur le même SHA candidat ; **aucune API ou table spécifique validée à ce jour**.

### 4.2. Exemple de rattachement — activité Nora et arrêt (illustratif, à confirmer au lot propriétaire)

- **R2** : règles d'affichage fidèle de l'activité, d'arrêt D6/D7 et de reprise ; identifiants précis à recontrôler à la qualification.
- **R3** : frames `206` activité Nora, `210` arrêt demandé, `211` arrêt externe non confirmé, `216` mobile et variantes ; contrat d'accessibilité/animation/reflow et données vraiment observables.
- **R4** : ADR R4-03, interfaces D3/D6/D7/D8, QA C et QA D selon effet et intégration.
- **R5** : composant/état partagé et vraie corrélation de l'arrêt ; une commande transmise ne prouve jamais que Cursor s'est arrêté.

**Statut de ces exemples :** exemples de schéma de traçabilité, pas une matrice de couverture validée ni un GO technique.

## 5. Contrat spécifique R3 / transposition Figma → code — séquencement clarifié

**Décision de fonctionnement acceptée dans l'échange du 2026-11-04 :** **pas d'extraction exhaustive préalable** des 223 frames ni d'extraction manuelle de géométrie profonde pour « préparer » tous les macro-lots. Le contrat R3 demeure intégralement applicable : Cursor, s'il dispose effectivement de la lecture native Figma nécessaire, extrait **les seuls nœuds utiles**, juste **avant de coder la surface UX concernée**, au sein du macro-lot de construction. L'extraction est une **étape d'exécution de l'UX**, pas un livrable autonome ni un gate préalable à la rédaction de la spécification du lot.

**En qualification et spécification R5 (ChatGPT + Morris) :**

1. Identifier les fonctionnalités et leurs écrans/variantes Figma exacts (`fileKey`, page, `node-id`) ; signaler les frames de revue qui ne sont **pas** des pages du produit.
2. Relier ces surfaces à leurs RG/PF R2, parcours R1, contrats R4 et scénarios QA pertinents. Inclure le [contrat de transposition R3](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md) par référence, sans dupliquer son contenu.
3. Définir les familles de composants partagés et les états/résultats à reproduire ; inscrire les inconnues visuelles, sans tenter de résoudre artificiellement les propriétés non consultées.
4. Déclarer `R3: N/A` uniquement quand aucune UX n'est réellement affectée ; les impacts transverses de rendu restent à vérifier.

**Pendant la construction UX (Cursor, sous mandat D3 ultérieur) :**

1. Vérifier que l'accès Figma permet bien de lire les nœuds, contraintes, typographies et variables : **l'accès au fichier ou à des captures ne prouve pas l'accès aux propriétés natives**.
2. Consulter le snapshot Figma courant et les nœuds concernés, extraire la géométrie profonde/auto-layout/typographie/états **uniquement pour les composants à coder**, puis conserver les références et mesures nécessaires à la preuve. Aucun nombre ni position deviné.
3. Implémenter des composants réutilisables par responsabilité, avec états et variations, jamais un composant distinct pour chacune des 223 frames.
4. Tester la conformité des viewports applicables ; capturer le runtime au SHA candidat et comparer avec les références Figma, expliquer les différences et limitations. L'accessibilité, le clavier, le zoom, les contenus longs et les états d'erreur restent des contrats R3, sans inventer une nouvelle UX.
5. Si l'accès natif échoue : déclarer `BLOCKED — FIGMA SOURCE NOT READABLE` **sur la surface affectée** ; récupérer la donnée manquante ou demander un arbitrage ciblé. Ne pas fabriquer un écran de remplacement.

**Le rail 240/246 px est une différence entre trois références DESKTOP de 1680 px**, pas une différence mobile : Figma 01 Portefeuille et 02 Sas ont 246 px, Figma 03 Conversation a 240 px dans le snapshot R3. Elle est gardée comme réserve **non bloquante pour la préparation documentaire** ; qualification pratique lors de l'implémentation du rail partagé. Toute déviation permanente à une référence contractuelle est documentée et soumise au gate adéquat. Le seuil `≤2px` demeure **une simple proposition du contrat R3**, pas une norme validée. Aucune décision de suppression du périmètre responsive n'est déduite de cet échange.

**Règle forte :** Cursor ne réinvente pas les écrans ; Figma et R2 guident le rendu et le comportement. « Prêt à spécifier » ne signifie pas « tous les calques déjà extraits » ; « UI conforme » exige au contraire mesure et preuve runtime sur la version réelle.

## 6. Les cinq macro-lots de construction — orientation acceptée pour préparation

Le séquencement ci-dessous reprend les cinq macro-capacités de travail acceptées en conversation. **Ce ne sont pas des décisions d'architecture nouvelles ni des GO de construction.** À qualifier par IN/OUT et contrats au lancement de chaque lot, notamment selon les dépendances R4.

| Lot (identifiant de delivery seulement) | Résultat utilisateur recherché | Principales sources/QA pressenties | UX | Dépendance et suite |
|---|---|---|---|---|
| **ML1 — Entrer, dialoguer et créer** | App locale : identité, portefeuille, sas durable, Nora utile, création explicite, continuité | D1–D4, ADR R4-01/02, ENV-01, QA A ; R3 sas/projet | Oui | Fondation persistante PostgreSQL, DEV/RECETTE/STABLE ; permet ML2/ML3 |
| **ML2 — Produire et capitaliser avec Nora** | Documents, sujets, connaissance, provenance, continuité cognitive | D3–D4, R2 doc/connaissance, R4 A/B ; QA complémentaires | Oui sur surfaces documentaires/conversationnelles | ML1 ; continuité et réutilisation des acquis |
| **ML3 — Piloter et décider** | Trajectoire/cycle/CKI, méthode, décisions et mandats gouvernés | D3–D6, R4 B, QA B ; R3 pilotage/décision | Oui | ML1 et ML2 selon contrats ; autorité pour ML5 |
| **ML4 — Collaborer et publier avec Git** | GitHub/Intégrations, dépôts à la carte, lecture Nora et publication documentaire gouvernée | D1–D4, D6–D9, ADR R4-03/04, R3 Git et UX Intégrations | Oui, Figma ML4 requis | ML1–ML3 et GitHub App réellement autorisée ; build non autorisé |
| **ML5 — Faire réaliser et vérifier avec Cursor** | Contrat technique, tentative Cursor, STOP/reprise et preuve | D6–D9, ADR R4-03/04, R3 contrat/résultats | Oui si UX applicable | Contrôle D7/D9 étendu sans second moteur |

**Correction de trajectoire à revalider avant construction :** R4 §5.7.11 recommande un *vertical C+D* pour le premier effet externe. Ne pas laisser la séparation documentaire ML4/ML5 produire un faux découplage technique : tout effet doit joindre D6+D7+D8 et capacité D9/outil réellement nécessaire dans **le même contrat d'intégration**. À l'inverse, l'accès aux sources Git sans effet peut être livré de façon autonome et facultative. Les fonctionnalités D3/D4 transversales peuvent nécessiter des travaux intégrés dans ML1 plutôt qu'un couloir artificiel vers ML2.

## 6bis. Versioning produit validé en contenu — 2026-11-04

La source propriétaire est [la politique de versioning produit](../governance/product-versioning.md), validée en contenu par Morris. Chaque delivery technique Cursor est historisé avec sa classe `PATCH/MINOR/MAJOR/NO RELEASE`, cible ou `-rc.N`, SHA/build, tests, preuves et gates. `construction/delivery-history.md` et le CHANGELOG produit sont créés **avec le premier macro-lot de code**, pas par un micro-cycle documentaire. Aucune version initiale n'est pré-attribuée ; candidate ≠ STABLE ; la promotion officielle reste gouvernée par ENV-01. Le routage partagé Next-only deviendra opposable sur `main` après PR/merge et vérification post-merge.

## 7. Processus opérationnel R5 et gates

**P0 — Préparation du dispositif (étape présente).** Vérifier sources Git, comptes, référentiels, identité du parcours, modèle documentaire, liens et contradictions. Produire ce projet de référence et le modèle de spécification. **Aucun prompt Cursor. Aucun code, push, PR ou merge.**

**P1 — Qualification d'un macro-lot.** Résultat Pilote ; IN/OUT ; source SHA ; R1/E2E, RG/PF/CKI, R3 s'il y a UX et frames/transposition, R4/ADR/QA/ENV-01 ; dépendances/blast radius ; risques et dette/exit ; responsable d'intégration. Confronter les exigences transverses et les compléments post-clôture.

**P2 — Contrat technique prêt.** Décrire interfaces, données, transactions, erreurs, permissions, STOP, idempotence, UX mesurée s'il y en a, scénarios/critères/évidence requis. Identifier ambiguïtés et pivots à arbitrer par Morris. Le contrat validé est `VALIDATED SPEC`, pas un comportement prouvé.

**P3 — GO technique et exécution.** Morris autorise un mandat D3 borné ; ChatGPT relit `SEF`, roadmap, décisions, routeur et template SFIA v2.6 applicables sur la bonne ref, sans template Cursor concurrent. Cursor vérifie localement HEAD/base/dirty et **lit directement Figma au moment de chaque implémentation UX**, puis implémente code + tests exécutables + documentation dans le lot, respecte les STOP et prépare Review Pack/handoff conforme.

**P4 — Qualification réelle.** Tests unitaires/intégration/sécurité/DB/navigation adaptés ; capture et mesures Figma pour UI ; injection de panne, identité et refus pour frontières critiques ; niveau de preuve explicite `DETERMINISTIC`, `INTEGRATION`, `BROWSER`, `LIVE` ou `REAL`. Une ligne de test n'est `COVERAGE VERIFIED` qu'avec exécution et preuve. `BEHAVIOR PROVEN` uniquement avec observation ciblée.

**P5 — DEV → RECETTE → intégration → STABLE.** ENV-01 obligatoire : séparation secrets/ports/DB/volumes, SHA candidat figé et build reproductible, recette Morris, nouveau SHA/retest en cas de correction, PR/merge et promotion STABLE avec GO **distincts**, sans adoption implicite. STABLE n'existe pas avant premier runtime validé.

**P6 — Consolidation R5 puis R6.** Vérifier la couverture réelle des exigences, des 7 E2E, des 84 QA candidats et des risques transversaux ; afficher manques/risques et exceptions. R6 porte la qualification globale et l'éventuelle adoption, jamais déduite de la clôture R5.

## 8. Critères de qualité du dispositif documentaire

Un lot ne doit pas entrer en code sans :

- source SHA et portée réelle établies ; contrat technique lié aux RG/PF et E2E applicables ; propriétaires et dépendances identifiés ;
- décision documentée pour chaque divergence structurante et aucune règle métier contradictoire non arbitrée ;
- **avant l'ouverture du lot** : références R3 exactes (frames/variantes/version), familles de composants et oracles visuels ; **avant le code de chaque surface UX concernée** : lecture native ciblée des propriétés et qualification des incohérences ; aucune tolérance non ratifiée n'est présumée ;
- références QA R4, **oracles et niveaux de preuve attendus**, contraintes des lanes de test ; **jeux de données, assertions et scripts concrets sont définis avec les interfaces et l’environnement réellement construits**, sans test fictif préalable ;
- exigences d'identité, sécurité, autorité, persistance, concurrence, STOP, reprise et erreurs adaptées ;
- périmètre Git/ENV-01/gate Morris clair et contrat de revue/test/recette explicite.

Un lot ne doit pas être déclaré comportementalement achevé sans : code constaté au SHA, tests/exécutions prouvés au niveau revendiqué, conformité visuelle vérifiée lorsqu'applicable, non-régression selon blast radius, état de données et secrets vérifié, documentation du comportement à jour, réserves/dette+exit, décision d'intégration et promotion si demandée. Aucun `ADOPTED` par défaut.

## 9. Réserves à traiter dans la préparation/au premier lot propriétaire

| Réserve / observation | Impact | Traitement proposé |
|---|---|---|
| Index R2 conserve les chiffres de clôture 300/241 à côté du complément 324/259 | Risque d'inventaire R5 incomplet | Compter/recenser sur baseline effective ; citer sections canoniques et delta, sans « corriger » silencieusement les clôtures historiques. |
| Roadmap et cadrage R4 parlent encore de PR/merge en attente alors que #646 est mergée | Risque de mauvaise décision sur la baseline | Enregistrer la preuve de HEAD PR #646 comme fait Git ; synchronisation documentaire uniquement sous mandat approprié. |
| R3 : géométrie profonde des 223 frames partielle | Risque d'invention visuelle | Extraction native Figma des descendants utiles par capacité avant code UX. |
| R3 : rail DESKTOP 240/246 px, tokens et tolérances encore ouverts | Écarts cross-écrans | **Non bloquant maintenant** ; comparer les états lors de la construction du composant partagé, déclarer tout écart puis arbitrer s’il est structurant ; aucun seuil arbitrairement ratifié. |
| QA R4 84 scénarios de conception, aucun exécuté | Risque de confondre plan et couverture | Préserver dès maintenant les oracles ; **instancier les tests exécutables avec l’interface, les données et la lane réelles** dans chaque lot, rapport au SHA. |
| R4 n'a pas implémenté Nora/auth/transactions/API | Détails techniques encore à qualifier | Concevoir les mécanismes dans les contrats R5 sans pivoter hors ADR validés. |
| Capacités Cursor CLI/Cloud, arrêt REAL et droits effectifs non prouvés | Risque d'effet hors contrat | Tester capacités et confinement en environnement borné avant REAL ; GO externe distinct. |
| ENV-01 et DATA-01 approuvées, lanes/sauvegardes non implémentées | Faux sentiment de maturité | Intégrer fondations à la première verticale, aucune STABLE déclarée prématurément. |

## 10. Gate proposé à Morris pour clôturer la préparation documentaire

**À valider en contenu, sans mandat Git implicite :**

1. Deux niveaux documentaires, sans autre référentiel normatif : référence vivante R5 + une spec technique vivante par macro-lot réellement ouvert.
2. Traçabilité bidirectionnelle et plusieurs-à-plusieurs `R1/R2/R3/R4/QA ↔ R5 ↔ code/tests/preuves`, avec Git/Figma versionnés et un propriétaire par règle/effet.
3. R3 obligatoire dès qu'une interface est impactée, `N/A` seulement si justifié, extraction profonde au bon moment et revue de rendu navigateur sur SHA candidat.
4. QA intégré dans chaque macro-lot ; oracles qualifiés en amont, tests/fixtures/assertions concrétisés **avec le code et l’environnement**, y compris scénarios complémentaires ; R6 transverse et preuve graduée.
5. Cinq macro-lots comme trajectoire de référence à qualifier (attention à l'intégration verticale D6–D9 en ML5), avec ENV-01 dès la première capacité.
6. Préparation et publication Git soumises à **un GO de périmètre/branche/chemins/opérations distinct** ; code ultérieur sous contrat Cursor SFIA v2.6.

**Verdict historique à la mise à jour v0.3 :** `R5 DOCUMENTARY PREPARATION IN PROGRESS — ML1 TECHNICAL SPEC CANDIDATE — NO R5 BUILD / NO GIT WRITE`.


## 11. Progression D0 après GO de préparation — 2026-11-04

**Nature du GO :** autorisation conversationnelle de travailler au cadrage documentaire, à la matrice et à la qualification du premier macro-lot. **Pas** d'autorisation implicite pour publier ce document, créer une branche, modifier un document de gouvernance, produire du code, ouvrir une PR, merger ou promouvoir.

**Git distant revérifié** : `mcleland147/sfia-workspace`, `main@a0b80b9ecd64149ed51f87235ae246e197e66462` ; PR #646 `MERGED`, même SHA ; branche `main` protégée ; état local **NON OBSERVÉ**. Aucune implémentation sous `projects/sfia-studio-next/` au ref contrôlé.

**Livrables D0 reliés (locaux, non Git)** :

1. `sfia-next-r5-matrice-tracabilite-ml1-v0.1.md` : matrice des capacités ML1, 16 cas QA A et sources R1–R4/R3.
2. `sfia-next-r5-r2-ml1-inventaire-v0.1.csv` : inventaire explicite des **103 identifiants D1/D2** (25+24 ACC, 27+27 CRE), avec rattachement principal provisoire et interfaces reportées identifiées.
3. `sfia-next-r5-qualification-ml1-v0.1.md` : résultat, IN/OUT, contrats, risques, gate de spécification et prochaine capacité ; **pas** de choix libre de stack ni de prompt Cursor.

**Règle de consolidation** : l'inventaire complet D1/D2 est un **contrôle d'exhaustivité d'identifiants**, non une certification de couverture technique ou probatoire. Les dépendances D3/D4 et les autres domaines sont répertoriées dans la matrice; la totalité des 324 RG / 259 PF ne devient pas implicitement le périmètre ML1. Les propriétaires documentaires R2/R3/R4 conservent l'autorité de fond.

**Next gate** : relecture Morris du rattachement ML1 et des interfaces ML2–ML5, puis approfondissement des mécanismes techniques et extraction Figma native au périmètre UI retenu, avant toute qualification `VALIDATED SPEC` ou génération de prompt Cursor.

## 12. Consolidation après clarification Morris du 2026-11-04 — règles opérationnelles

| Sujet | Contrat de préparation | Contrat de construction / preuve | Gate |
|---|---|---|---|
| R2 / R1 | ID précis, source et version, résultat et cas limites | Code et tests traçables ; comportement démontré selon risque | Aucune réinterprétation de règle validée |
| R3 / Figma | Frames/états identifiés + contrat natif obligatoire | Cursor consulte Figma et extrait les seules propriétés utiles **avant son code UX** ; captures et diff runtime | Accès Figma natif vérifiable, pas d'écran inventé |
| Rail 240/246 | Réserve desktop identifiée, non bloquante maintenant | Confrontation lors du composant rail et décision ciblée si conflit réel | Pas de validation silencieuse d'une divergence |
| Mécanismes ML1 | Invariants R4 et options techniques exposés, non promus par hypothèse | Sélection/implémentation de l'auth/session, Nora/API, transactions et reprise dans ML1 | Morris pour pivot architecture/autorité ; choix ordinaires dans contrat revu |
| QA R4 | A01–A16 : oracles et niveaux attendus, sans scripts imaginaires | Fixtures, scripts, assertions et comptes réels **avec** l'environnement du macro-lot | Aucun PASS sans log/preuve et SHA |
| Delivery ENV-01 | Contrats DEV/RECETTE/STABLE connus | RECETTE figée au SHA, essais navigateur/DB, réception Morris | Git/PR/merge/promotion toujours distincts |

**Pièces D0 associées :** `sfia-next-r5-contrat-specification-macrolot-v0.2.md`, `sfia-next-r5-matrice-tracabilite-ml1-v0.3.md`, `sfia-next-r5-specification-technique-ml1-candidate-v0.2.md` (la v0.1 en reste le brouillon historique). La version actuelle instancie le contrat pour **ML1 uniquement** ; elle ne vaut pas `VALIDATED SPEC`. L'ancienne qualification ML1 v0.1 reste une source préparatoire, supersédée pour les gates d'extraction/QA par cette consolidation.


## 13. Revue technique ML1 D0 — 2026-11-04 (proposition v0.4)

- Les **messages/conversations** sont la vérité durable de **D3** ; **documents/connaissances** appartiennent à **D4**. Ils partagent si nécessaire PostgreSQL, sans double propriétaire. Voir la spécification ML1 candidate v0.2.
- Pour la création, le contrat R4 impose une **empreinte associée à la clé idempotente**, une **version de l'aperçu effectivement inspecté** et une résolution sans effet après réponse perdue. Un replay déjà committé ne doit pas être refusé seulement parce que la version de préparation a ensuite évolué.
- Le contrôle R3 en amont d'un macro-lot porte sur **la sélection précise des surfaces et contrats** ; les mesures natives profondes sont relevées **dans le lot avant le code UX correspondant**. Le paragraphe §8 a été harmonisé avec §5 et §12.
- QA `A11` ne peut être déclaré intégralement couvert en ML1 sans intégration source/Git effective ; ML4 demeure propriétaire de la preuve de révocation Git. Un appel Nora LIVE borné est attendu pour prouver que la conversation du premier vertical est réellement utilisable.
- La conception des contrats peut continuer, mais la revue D0 ne sélectionne pas encore le framework, le fournisseur de sessions, le SDK/API Nora, l'ORM/DDL, ni les outils de test. Sélections techniques ordinaires à justifier dans le lot ; pivot architecture/autorité reste un gate Morris.

**Verdict : `R5 DELIVERY REFERENCE D0 CANDIDATE v0.4 / ML1 TECHNICAL REVIEW DOCUMENTED / NOT GIT PUBLISHED / R5 CONSTRUCTION NOT STARTED`.**


## 14. Qualification cognitive comparative ChatGPT ↔ Nora — orientation transversale validée Morris (2026-11-04)

**Autorité de contenu :** Morris a validé le 2026-11-04 le principe d'une **évaluation comparative explicite du travail cognitif de Nora avec ChatGPT**, pour ML2 et les macro-lots ultérieurs qui font évoluer substantiellement ses capacités cognitives. Ce complément enrichit le dispositif R5 de **preuve produit**, sans réécrire R1/R2, sans créer une nouvelle doctrine SFIA, un score d'acceptation universel, un service de benchmark obligatoire ou un gate supplémentaire systématique. La décision d'intégration Git du document reste distincte du contenu validé ; aucun GO de code ou de construction ML2 n'en découle.

### 14.1. Finalité et critère de vision

**Intention produit :** Nora doit procurer une qualité de collaboration cognitive *comparable* à l'expérience de travail Pilote–ChatGPT : comprendre l'intention, explorer, investiguer avec les moyens disponibles, challenger, comparer, produire et réviser directement, restituer avec discernement, conserver les acquis et reprendre utilement.

La cible **n'est pas** l'identité littérale des réponses, des prompts, des modèles ni des raisonnements internes. Un texte ressemblant à celui de ChatGPT ne prouve ni une connaissance retrouvée, ni une décision correctement qualifiée, ni la conservation d'un document. Une réponse de Nora différente mais plus utile, plus fiable ou mieux adaptée peut être supérieure. La vision R1 §§1–2 et E2E 03/04, les RG/PF de D3/D4, les contrats d'autorité D6 et les preuves d'observation restent les critères opposables.

**Application :** ML2 est le premier macro-lot prioritaire ; réutiliser ces évaluations dans ML3–ML5 lorsqu'ils changent réellement la conduite, les décisions de collaboration, la restitution ou la reprise de Nora, **pas** à chaque correction UI/DB sans incidence cognitive.

### 14.2. Responsabilités, indépendance et limites du jugement

| Acteur ou référence | Rôle dans l'évaluation | Limite impérative |
| --- | --- | --- |
| **Vision R1 + R2 validé + situation réelle** | Fixer le résultat utilisateur, les prescriptions, les faits vérifiables, les restrictions et les oracles de comportement | Ne pas assimiler un mock, une maquette ou une réponse modèle à une preuve du produit |
| **ChatGPT, évaluateur cognitif comparatif** | Produire si utile une réponse indépendante ; examiner compréhension, exploration, esprit critique, exactitude, initiative, restitution et continuité ; expliquer les écarts | Son texte est **fallible**, non autorisant, non suffisant pour certifier les faits ou l'équivalence cognitive |
| **Nora dans Studio Next** | Produire un comportement observable dans la lane, au SHA, avec contexte, accès, modèle et capacités réellement déclarés | Ne pas imputer à Nora une incapacité lorsque la source, l'outil ou la permission manquait dans son environnement |
| **Cursor, sous SFIA v2.6** | Implémenter et tester les contrats approuvés, produire logs/artefacts et corriger les écarts techniques | Aucun auto-verdict « comportement excellent » fondé sur le seul rapport de l'exécuteur |
| **Morris, autorité produit** | Juger la valeur pour le Pilote, accepter les écarts, les réserves et les promotions selon les gates | La comparaison ChatGPT–Nora ne vaut jamais HumanDecision, GO d'exécution ou ADOPTED |

### 14.3. Protocole intégré aux QA existantes

1. **Choisir le scénario utilisateur discriminant** et rattacher E2E R1, RG/PF R2, UX R3, invariant R4 et oracle. Définir les attendus **avant** de lire la réponse de Nora ; distinguer critères de faits vérifiables et critères qualitatifs.
2. **Déclarer les conditions** : problème exact, acteurs et projet, état initial, documents/sources, versions Git, contexte et historique disponibles, autorisations, horodatage, lane, SHA/build, fournisseur/modèle/configuration et éventuelles limites des outils. Lorsque les conditions d'accès diffèrent, l'indiquer et ne pas conclure à une infériorité du raisonnement sur cette seule base.
3. **Produire deux réponses indépendantes** : Nora via un parcours réellement observé dans Studio ; ChatGPT sur l'énoncé commun, sans lui communiquer d'abord la réponse Nora. Pour une comparaison juste, fournir les mêmes sources accessibles ou qualifier précisément la dissymétrie. Aucune introspection des raisonnements internes n'est exigée.
4. **Comparer selon une grille commune**, idéalement à l'aveugle lorsque praticable : compréhension/intention ; pertinence et complétude ; initiative et questionnement ; contradiction/alternatives ; fiabilité, sources, incertitudes et autorité ; présentation adaptée ; continuité, révision et actualisation de l'acquis. Noter les preuves et exemples concrets, non le seul style ou la longueur.
5. **Vérifier indépendamment les affirmations déterminantes** contre les sources et les propriétaires techniques : DB/version/document pour durabilité, droits courants pour accès, Git pour refs, scénarios navigateur et LIVE pour le comportement. Un modèle ne sert pas d'oracle unique sur les faits ni sur sa propre conformité.
6. **Qualifier le verdict et la suite** : répond au contrat / écart réel / différence légitime / comparaison non concluante / réserve. Identifier cause probable (contexte manquant, instruction, récupération D4, génération, rendu UI, droits, preuve), propriétaire, correction proportionnée et re-test. Morris accepte les arbitrages pertinents.

**Robustesse :** exécuter plusieurs variantes ou répétitions pour un comportement notoirement variable lorsqu'un seul exemple peut induire en erreur. Privilégier quelques situations significatives plutôt qu'un classement artificiel de dizaines de réponses ; le panel peut évoluer avec la maturité du produit, sans entraînement sur des réponses ChatGPT figées.

### 14.4. Familles de scénarios candidats à sélectionner selon le lot

| Famille | Oracle cognitif et produit | Point de vigilance |
| --- | --- | --- |
| Analyse d'une demande ambiguë | Clarification strictement nécessaire, progression autonome dans le reste de la demande | Éviter une conversation réduite à un formulaire |
| Comparaison et recommandation | Options sérieuses, hypothèses explicites, critique argumentée, suite utilisable | Pas de préférences de style érigées en vérité |
| Contradiction et source périmée | Faits, dates, références, versions et incertitudes distingués | Ne pas prendre l'assertion du modèle pour preuve |
| Production puis révision ciblée d'un document | Résultat structuré, version identifiable, modification bornée, historique conservé | Génération textuelle ≠ sauvegarde effective |
| Reprise du même fil lors d'un échange ultérieur, après interruption ou changement de sujet | Acquis utiles, documents et points ouverts retrouvés, provenance et actualité contrôlées | Aucun multi-chat exigé ; une relecture du transcript intégral ne prouve pas la mémoire sélective |
| Demande simple / digression | Réponse proportionnée, pas de cérémonie ni mécanisme interne inutile | Différences rédactionnelles acceptables |
| Source inaccessible / outil absent | Limite honnête, poursuite des travaux cognitifs indépendants | Pas de recherche ou lecture inventée |
| Décision ou opération protégée | Conseil clair sans HumanDecision ni effet externe implicite | La bonne réponse texte ne remplace pas l'enforcement D6/D7 |

**Clarification produit validée Morris (2026-11-04) :** les cas de reprise cognitive concernent **un seul fil visible continu par projet**. Plusieurs échanges, sessions, sujets et cycles successifs ne créent pas de chats distincts. Les benchmarks R5/ML2 vérifient mémoire D4 sélective, reprise après nouvelle session et unicité du cycle actif D5 ; aucun test de « fil B » n'est imposé.

### 14.5. Support probatoire et gates

La matrice QA du macro-lot conserve **une ligne par scénario comparatif utile** : sources R1–R4, énoncé/conditions, réponse Nora et résultat ChatGPT référencés, contrôle factuel indépendant, observations qualitatives, limitations, verdict, propriétaire et re-test. Les contenus sensibles sont expurgés, les références et SHA conservés. Un score qualitatif éventuel sert la discussion ; **aucun seuil numérique, “équivalence X %” ou identité de modèles n'est ratifié**.

**Niveaux :** réponse ChatGPT de référence = artefact comparatif ; test simulé = DETERMINISTIC/FAKE ; comparaison avec Nora via vraie API et contexte connu = LIVE dans sa portée ; persistance ou navigateur revendiqués uniquement sur constat DB/BROWSER ; effets externes = REAL et contrôle d'autorité séparé. L'évaluation cognitive ne se substitue pas aux tests de sécurité, transactions, Figma et non-régression.

**Instanciation ML2 candidate :** [Spécification technique — Produire et capitaliser avec Nora](ml2-production-et-capitalisation-nora/specification-technique.md) et [matrice R1–R5 / UX / QA / ChatGPT ↔ Nora](ml2-production-et-capitalisation-nora/matrice-tracabilite.md). Ces deux documents sont des **propositions D0**, non des contrats de construction déjà approuvés ; leur publication candidate ne vaut pas GO D3.

**Intégration au processus existant :** préparer les cas à la qualification du lot, les exécuter durant le delivery/RECETTE, en débattre lors de la revue de sortie. **Pas de cycle, PR, moteur ou validation supplémentaire systématique.** ChatGPT recommande, Morris tranche ; les écarts acceptés restent tracés avec conditions de sortie. **ML2 : D0 de spécification en cours, aucun GO technique/PR/merge/STABLE/ADOPTED déduit de cet addendum.**

## 15. Complément candidat — diagnostic des missions cognitives et protocole de mesure (2026-11-05)

> **VALIDATED IN CONTENT BY MORRIS — 2026-11-05 ; périmètre technique/RECETTE encore à arbitrer.** Complète le §14 **déjà validé** de comparaison ChatGPT–Nora : aucune nouvelle méthode de benchmark, aucun nouvel évaluateur autonome ni gate universel. Sources R1 §2.2/E2E 03, règles candidates D3 §14/D4 §10, R3 §40, R4 §11 et matrice ML2. La PR #655 et ses preuves déterministes/DB/BROWSER FAKE n'attestent pas encore la qualité cognitive LIVE, la politique modèle/effort ou la boucle de lecture D4 ; tous ces résultats restent NOT PROVEN tant que les cas applicables ne sont pas exécutés.

### 15.1. Résultat du dispositif de mesure

Pour chaque mission représentative, mettre en regard **(a) l'activité réellement exécutée, (b) la qualité du résultat pour le Pilote et (c) les coûts/limites mesurés**. Les traces du SDK documentent l'activité, pas le raisonnement caché ; ChatGPT produit une réponse de comparaison indépendante et faillible, les faits déterminants sont vérifiés à leurs sources, Morris arbitre la valeur utilisateur.

**Observations minimales candidates :** scénario et contexte/permissions déclarés ; SHA/lane ; identifiant d'échange/génération et tentatives ; version de politique, configuration modèle/effort effective ; classification/motifs non sensibles ; appels outils et références/version des sources ; chronologie/erreurs/annulations ; latence et usage réellement connus, coût calculé à partir de tarifs explicités ; résultat PARTIAL/COMPLETE/FAILED/INTERRUPTED/UNKNOWN ; appréciation indépendante sur compréhension, faits, contradictions, couverture, initiative, pertinence et proportionnalité. Les champs manquants ne doivent pas être inventés, les contenus sensibles sont expurgés.

### 15.2. Oracles supplémentaires dans la matrice ML2 existante

- **Simple sans surinvestigation :** pas de classification IA ni d'appel D4 supplémentaire sans raison ; réponse et coût proportionnés.
- **Complexe avec D4 :** plusieurs passages réellement recherchés sous droits actuels, sources/versions utiles, limites de couverture déclarées, conclusion étayée ou partielle.
- **Contradiction en cours de mission :** approfondissement borné ou décision d'arrêter justifiée par des observations ; pas de boucle ni d'autorité nouvelle.
- **Panne/timeout/retry :** tentative fournisseur visible, pas de double comptage d'une seule génération ni de faux résultat réussi ; corrélation du fallback streaming.
- **Diagnostic indépendant :** opérateur habilité pouvant expliquer le chemin visible et examiner une redondance ou un manque, sans inventer la motivation mentale du modèle.
- **Qualité cognitive :** variantes COG-01..07, réponse ChatGPT indépendante lorsque utile, fact-check externe à Nora, désaccord motivé non assimilé automatiquement à un échec.

### 15.3. Périmètre candidat à arbitrer avant RECETTE

**Recommandation de qualification, pas GO :** considérer en premier un socle cohérent ML2 (configuration explicite Sol/effort, qualification proportionnée, multi-étapes bornées avec une capacité D4 autorisée si faisable, traces natives corrélables et QA LIVE correspondante). L'intégration doit former un résultat prouvable avec code/tests/docs du même macro-lot ; ne pas fragmenter en micro-livraisons. D5/D6/ML3, Git/ML4 et actions externes gouvernées/ML5 ne sont pas avancés implicitement.

**Option de report :** si les impacts/risques de mission multi-étapes, du tracing ou de la lecture D4 excèdent le mandat et la maturité ML2, conserver les exigences validées antérieures, recetter honnêtement le périmètre réalisable, documenter chaque écart avec propriétaire, risque, condition de sortie et nouveau gate Morris. Le verdict comparatif ne doit pas devenir « Nora équivalente à ChatGPT » sur un seul exemple ni après simple réussite technique.

**Traçabilité :** utiliser la matrice ML2 et R5 §14, sans document de campagne concurrent. La décision de publication, la PR/merge, le GO Cursor, la RECETTE, R6 et ADOPTED restent distincts.

## 16. Contrat transverse de diagnostic — rattachement R5 et preuve (2026-11-05)

**VALIDATED PRODUCT INTENT MORRIS / R5 DELIVERY CANDIDAT — NE MODIFIE PAS les preuves ML1/ML2 existantes ni le protocole cognitif R5 §14.** Canonical source : [R4 — Contrat de diagnostic et d'observabilité transverse](../architecture-technique/contrat-observabilite-transverse.md). Le §15 couvre spécifiquement la qualité/activité Nora ; la présente section couvre aussi AUTH, HTTP, DB, D2 et les propriétaires futurs D5–D9.

**Résultat de construction à qualifier :** sur une même opération et un même SHA de RECETTE, reconstituer le trajet HTTP → authentification/permission → service métier → DB/outils/fournisseur → réponse et effets confirmés, distinguer tentatives et réconciliations, identifier les zones NON OBSERVÉES, puis fournir une hypothèse diagnostique vérifiable. Conserver les identités déjà présentes (generationId D3, correlationKey/idempotence D2/D4) ; enrichir par un contexte d'opération plutôt que remplacer les contrats métiers.

**Trajectoire candidate en macro-capacité cohérente, à arbitrer avec ML2 :**
- Traces/erreurs API différenciées et corrélées, identité build/lane réelle ;
- Better Auth et session resolver instrumentés sans secrets et sans faux 401 ;
- PostgreSQL/Drizzle diagnostics proportionnés, journal D4 réutilisé, erreurs/transactions et effet réel séparés ;
- Tracing Agents SDK configuré pour la confidentialité, tentatives LIVE comptées, réponse cognitive évaluée indépendamment ;
- Recherche effective par operationId en RECETTE, signalement d'exporteur indisponible ;
- QA OBS-Q01..10 au niveau approprié ; non-régression des invariants de session/DB/ACK, et de COG-01..07.

**Hors périmètre ML2 par défaut :** simulation de télémétrie Git/D7/D8 et matériel technique non implémenté, nouvelle console Pilote, migration/entrepôt de logs par inertie, moteur générique d'audit et observabilité exhaustive de chaque opération.

**Critère de sortie proposé :** pour les scénarios observables au SHA, fournir cas, état d'environnement, identifiants, extrait expurgé de la chronologie et sources de vérité réconciliées, mesures réelles, hypothèses/limitations et verdict. **Un log produit ne suffit pas ; un diagnostic doit être reproductible.** Toute couverture différée exige propriétaire, risque, exit et gate Morris. La construction technique demeure soumise à un GO Cursor SFIA v2.6 distinct ; PR #655/#656, RECETTE, merge et STABLE restent des gates autonomes.

## 17. Stratégie R5 actée — ML2 cognition et observabilité avant RECETTE (Morris, 2026-11-05)

**VALIDATED STRATEGY BY MORRIS / DOCUMENTED ON CANDIDATE BRANCH ; TECHNICAL IMPLEMENTATION NOT AUTHORIZED.** [Decision Record R5/ML2](../governance/decisions/2026-11-05-r5-ml2-cognition-observabilite-trajectory.md), [Roadmap R5](../governance/roadmap.md), [spécification ML2 §17](ml2-production-et-capitalisation-nora/specification-technique.md), [QA ML2 §10](ml2-production-et-capitalisation-nora/matrice-tracabilite.md) et [contrat transverse d'observabilité](../architecture-technique/contrat-observabilite-transverse.md). **Cette décision de séquencement remplace l'alternative encore ouverte au §15.3 et §16 pour le choix « intégrer avant RECETTE »**, pas leurs options techniques non arbitrées, ni les preuves historiques.

### 17.1. Résultat et lot de construction intégré

**Valeur attendue :** le Pilote confie une demande simple ou structurante à Nora ; celle-ci met en œuvre un effort suffisant, sait consulter D4 de manière complémentaire sous les droits actuels, confronte les informations, conclut ou marque l'inconnu, et laisse un parcours effectivement diagnostiquable au sein de Studio.

**Contrat IN — une seule capacité intégrée de livraison ML2 :**
1. **Cognition D3** : stratégie de qualification proportionnée ; modèle/effort explicites, compatibilité vérifiée ; agent natif Agents SDK avec plusieurs étapes autorisées lorsque nécessaires ; limites de tours, appels, temps et consommation, sans boucle non bornée.
2. **Investigation D3→D4** : outil(s) de lecture complémentaire de connaissance/documents existants, réutilisant contrôles de projet, version, accès et provenance ; aucun outil d'effet externe ou de lecture Git fictif.
3. **Restitution / D4** : réponse fiable, incertitudes explicites ; écriture/révision seulement si D4 a confirmé son effet ; non-régression des correctifs C1–C6, fil unique et réconciliation après ACK perdu.
4. **Diagnostic transverse** : événements corrélables AUTH, HTTP, DB, D1–D4 ; classes d'erreurs sûres (faux 401 à corriger), tracing fournisseur/SDK, identité mission/génération/tentative et lectures D4, paramètres réellement appliqués, usages/latences disponibles, confidentialité et consultation opérationnelle en RECETTE.
5. **Qualification** : QA d'intégration positive/négative, benchmark COG-01..07 de R5 §14, oracles OBS-Q01..10 pertinents, expérience utilisateur BROWSER et LIVE Nora, sécurité/isolation, build et lane traçables.

**OUT / suite :** routage multi-modèle permanent, classificateur IA systématique, agents spécialisés sans preuve de valeur, backend de supervision/alerting avancé, écran Pilote de diagnostic, nouveau ledger métier et capacités D5/D6/D7/D8/D9 non implémentées. Les propriétaires futurs ajoutent leur observabilité au socle lors de leurs propres lots.

### 17.2. Ordonnancement concret, dépendances et contrôles

| Activité du même macro-lot | Contrat d'entrée | Preuve / sortie attendue |
| --- | --- | --- |
| Pré-check et intégration sources | `main`, PR #655, #656, branches docs, décisions Morris, SDK/versions/ENV-01, état local Cursor | Périmètre de changement et fichiers propriétaires ; aucune branche candidate présentée comme baseline |
| Contrat technique exécutable | SDK/compatibilité fournisseur, outils D4, erreurs API, propagation des IDs, options de tracing, lecture sécurisée des traces | Choix explicites validés au gate technique, blast radius (API/DB/UX/sécurité), bornes et STOP |
| Construction D3/D4 et instrumentation | Interfaces/états propriétaires inchangés ; outils lecture-only, bornes, télémétrie native-first | Code + tests + docs même cycle ; non-régression C1–C6 ; pas de nouveau moteur parallèle |
| Vérification technique | ENV-01, DB/migrations, droits et CI Next réellement disponible/exécutée | Tests unitaires/PG/INTEGRATION/HTTP/BROWSER et sécurité avec résultats au même SHA |
| Qualification cognitive et opérationnelle | Clé fournisseur/permissions LIVE, données datées et test autorisé ; tracing consultable | COG-01..07, OBS-Q01..10 applicables, comparaison ChatGPT–Nora, exemples de chronologies expurgées ; écarts décrits |
| Gate RECETTE puis intégration | SHA/lane/build figés, preuve QA suffisante et réserves exposées | Morris décide RECETTE ; PR/readiness/merge et STABLE nécessitent leurs GO distincts |

**Risque dominant :** étendre ML2 au point d'amoindrir la valeur de la livraison ou fragiliser l'intégrité déjà construite. **Mesure :** conduire ensemble la capacité utile et son diagnostic, réutiliser primitives SDK/Next/Better Auth/Postgres, limiter les outils D4, préserver les contrats D1–D4, exiger tests C1–C6 et preuve réelle ; pas de déploiement de plateforme de monitoring par inertie.

**Risques associés :** traces insuffisantes ou sensibles (configurer, expurger et tester avant LIVE) ; qualification sous-dimensionnée (référence exigeante pour analyses complexes puis optimisation sur données) ; latence/coût sans borne (budgets et mesures) ; confusion génération/écriture (réconciliation) ; CI installée sur branche mais non prouvée à distance (gate distinct) ; cookie DEV/RECETTE de ML1 (réserve non effacée ; requalification selon impact avant STABLE).

### 17.3. Dette et suite R5/R6

Les reports vers ML3 (cycles/trajectoire), ML4 (Git D9), ML5 (exécutions/preuves) et R6 suivent le propriétaire métier. **Exit d'une capacité reportée** : besoin prouvé, prérequis/permissions, contrat d'effet et d'observation propre, tests LIVE/REAL adéquats, arbitrage Morris. Les améliorations de modèle/routage, budgets intelligents et dashboards ne deviennent priorités qu'après comparaison qualité/consommation et besoin réel.

**Critère d'entrée en RECETTE proposé :** Nora doit **réellement** pouvoir faire une lecture D4 complémentaire pendant une mission complexe, avec configuration et chemin vérifiables ; une question simple reste proportionnée ; les erreurs/états incomplets sont fidèles ; la chronologie d'une mission et les incidents critiques de Studio sont consultables sous droits ; la non-régression de l'intégrité ML2 et les contrôles de sécurité/CI sont prouvés. La RECETTE sert à juger la qualité, pas à prétendre qu'elle est déjà parfaite.

**Gate actuel :** validation de trajectoire Morris **ACQUISE EN CONTENU**, contribution documentaire Git sur branche autorisée par la demande du 05-11. **STOP AVANT CODE** : aucune instanciation du template Cursor, publication de PR, merge, RECETTE, promotion ou ADOPTED n'est automatiquement autorisée.

## 18. Qualification architecturale approuvée en vision — D3 ↔ D4 pour ML2 (2026-11-05)

> **VISION ACCEPTÉE MORRIS / D2 DOCUMENTAIRE SUR BRANCHE CANDIDATE ; CONSTRUCTION NON AUTORISÉE.** Cette qualification décline la stratégie C du §17, sans la remplacer, et prépare les interfaces de la construction intégrée avant RECETTE. [R4 §14](../architecture-technique/cadrage-r4.md), [ML2 §18](ml2-production-et-capitalisation-nora/specification-technique.md), [matrice ML2 §11](ml2-production-et-capitalisation-nora/matrice-tracabilite.md) et [Decision Record](../governance/decisions/2026-11-05-r5-ml2-cognition-observabilite-trajectory.md) font référence.

**Résultat Pilote :** Nora sait répondre simplement sans enquête inutile ou conduire une mission exigeante en recherchant pendant son travail des ressources D4 réellement autorisées, puis restituer sources, contradictions, limites et éventuels effets vérifiés. L'architecture ne vise ni la copie des réponses ChatGPT ni une autonomie d'actes protégés.

**Répartition :** D1/D2 établissent session et contexte ; D3 détient la politique cognitive, les limites, le Runner Agents SDK et la restitution ; D4 détient les connaissances, versions et droits à chaque consultation, et seul D4 confirme une écriture ; l'observabilité relie des faits sans nouvelle autorité. Un agent Nora et une conduite D3, pas de classificateur IA obligatoire, de multi-agents ou de moteur de mémoire parallèle.

### 18.1. Contrat de delivery intégré — sans micro-cycle indépendant

| Travail interne du même ML2 | Résultat requis | Contrôle / preuve |
| --- | --- | --- |
| Politique D3 | Qualification proportionnée, configuration modèle/effort/bornes explicitée et appliquée ; pas d'escalade silencieuse | Question simple vs mission complexe ; SDK verrouillé/entitlement vérifiés ; LIVE ciblé |
| Outils D4 | Recherche et lecture ciblée lecture-only de sources/révisions, droits courants, version, provenance, couverture/limites | DB/INTEGRATION : refus interprojet, révocation, source périmée, extrait incomplet ; LIVE : lecture réellement déclenchée pendant la mission |
| Convergence | Runner natif multi-étapes borné, résultat suffisamment étayé ou incomplétude sincère | Limite de tours/temps/appels, erreur outil, annulation/timeout, second run fournisseur différencié |
| Intégrité et continuité | Fil unique, statut assistant et écriture D4 séparés ; réconciliation et idempotence C1–C6 conservées | Tests PG/concurrence/ACK perdu, absence de double sauvegarde, non-régression ML1/ML2 |
| Diagnostic transversal (étape de conception suivante) | Corréler HTTP/AUTH/DB/D3/D4, tentatives, sources et résultats consultables sans contenu sensible | OBS-Q01..10 pertinents, consultation RECETTE réelle, protection DATA-01 et ENV-01 |
| Evaluation indépendante | Vérifier utilité, qualité de sources, contradictions et poursuite avec ChatGPT comme comparaison non autorisante | COG-01..07, fact-check indépendant, baseline manquante indiquée, verdict Morris distinct |

### 18.2. Ordonnancement et gates

1. **Architecture D3↔D4 :** vision approuvée, contrat détaillé candidat dans ML2 §18. Ne pas figer noms publics d'outils, codes de statut API ou budgets sans revue d'impact.
2. **Étape suivante de conception :** définir observabilité/corrélation à partir des opérations D3/D4 réellement prévues, options natives et consultation des diagnostics.
3. **Consolidation contractuelle :** vérifier compatibilité effective Agents SDK `0.21.0` + fournisseur, flux de session et permissions, branche/base, fichiers propriétaires, CI/ENV-01, matrice et risques ; revenir à Morris pour tout pivot ou changement d'autorité.
4. **GO technique D3 distinct :** seulement ensuite préparer le prompt Cursor depuis routing/template Git SFIA v2.6 ; construire code/tests/docs et qualifier le même résultat ML2, sans « chantier cognition » et « chantier diagnostic » concurrents.
5. **Gates de sortie :** QA déterministe et PostgreSQL, BROWSER, LIVE Nora et traçabilité vérifiable sur le SHA/lane ; RECETTE Morris spécifique, PR/readiness/merge puis STABLE/ADOPTED indépendants.

**Gaps et exits à porter :** lecture ciblée D4 performante si corpus croît, revalidation d'autorité pendant la mission, séparation de l'état technique et de l'incomplétude cognitive, retry fournisseur, sécurité des prompts/sources, vérification de la compatibilité SDK, politique de coût et diagnostics exportés. Chaque report non bloquant garde propriétaire, risque et exit. **État courant : DESIGN DOCUMENTED / NOT IMPLEMENTED / NO NEW TESTS / NO GO CURSOR / NO RECETTE**.

## 19. Intégration du diagnostic dans le delivery ML2 (2026-11-05)

> **VALIDATED IN CONTENT BY MORRIS — 2026-11-05 / DOCUMENTARY CANDIDATE ON BRANCH.** Contrat de conception ; détails de mise en œuvre, compatibilité fournisseur et mécanismes de collecte à qualifier avant GO Cursor. **NOT IMPLEMENTED / NOT TESTED / NO PR OR MERGE.**

**Ordre du même macro-lot :** (1) vision D3↔D4 documentée §18 ; (2) contrat d'observation et de corrélation §19 ; (3) consolidation du contrat technique unique ; (4) GO Cursor D3 spécifique ; (5) code + QA + docs alignées sur la même branche technique ; (6) qualification déterministe/DB/BROWSER/LIVE et accès au diagnostic en RECETTE sous SHA figé ; (7) verdict Morris ; (8) intégration Git puis promotion à gates distincts.

**Acceptation :** un examinateur autorisé retrouve une opération avec contexte réel de build/lane, request/operation/generation/attempt et sources D4 réellement reçues, état HTTP/AUTH/DB, limites, latence/usage lorsque disponibles et effet D4 confirmé ; les erreurs et lacunes ne sont jamais maquillées. Les observations restent séparées de la comparaison qualitative ChatGPT–Nora et de HumanDecision.

**Pragmatisme :** préférer une capture structurée réellement durable et consultable à une plateforme de supervision prématurée. Étudier OpenTelemetry Next et tracing Agents SDK sur leurs versions verrouillées, vérifier privacy/retention/exporteur avant LIVE. Les logs non critiques suivent DATA-01 ; isolation et SHA de RECETTE suivent ENV-01. Un succès de CI au SHA #655 ne couvre pas cette extension. Conserver ML2 comme **un seul macro-lot**, pas deux PR techniques autonomes cognition/observabilité sans justificatif.

**Dette/exits :** alerting avancé, métriques D5–D9 et dashboard Pilote reportés à leurs propriétaires ; choix de collecteur/exporteur, preuve de consultation, rétention fournisseur, contrôle des coûts et compatibilité SDK restent à résoudre avant exécution. GO technique, PR, merge, RECETTE et ADOPTED indépendants.

## 20. ML2 — intégration de la cognition et du diagnostic en un contrat technique (2026-11-05)

> **D0 TECHNICAL CONSOLIDATION CANDIDATE — GO TO DESIGN BY MORRIS 2026-11-05 ; NO GO CURSOR / NO RECETTE / NO PR OR MERGE.** Le résultat, les interfaces et les risques détaillés résident dans [ML2 §20](ml2-production-et-capitalisation-nora/specification-technique.md), les preuves dans [matrice §13](ml2-production-et-capitalisation-nora/matrice-tracabilite.md). Cette section ne crée pas de macro-lot indépendant et ne révise ni R4 ni la décision de trajectoire C.

**Outcome et suite :** rendre Nora réellement capable d'investigation complémentaire D4 et produire un diagnostic consultable sur les chemins actuellement implémentés, avant la RECETTE du même ML2. Successeur : ML3 cycles/trajectoire et domaines ultérieurs uniquement après verdict de ML2, sans inventer D5–D9.

| Séquence interne intégrée | Livrable | Condition de passage |
| --- | --- | --- |
| 1. Contrat technique R5/ML2 | SDK `0.21.0` vérifié sur source officielle, frontières D1–D4, modèle/effort/bornes, outils, HTTP, idempotence de tour et diagnostic | Enveloppes statuts et permissions arrêtées, choix d'exploitation et coûts non sensibles qualifiés, aucun pivot implicite |
| 2. Construction D3 sous SFIA v2.6 | Adapter Runner/streaming, outils D4 read-only, gestion fiable des tours/écritures, API/AUTH/DB et télémétrie native sécurisée avec consultation | Même code/CI/QA/doc ; Cursor sous GO technique spécifique, local Git truth check et rapport/handoff |
| 3. Qualification intégrée | Réponses simples/complexes, sources/version refusées, poursuite limitée, incidents HTTP/DB/SDK et effets D4 confirmés | C1–C6, COG-01..07, OBS-Q01..10, niveaux DETERMINISTIC/PG/BROWSER/LIVE, sécurité et SHA/lane |
| 4. Préparation RECETTE | Candidat SHA figé, lanes ENV-01, diagnostic retrouvable après redémarrage et rapport source/faits | Gate d'entrée Morris spécifique et bilan des lacunes ; aucun statut ADOPTED automatique |

**Gates Git/CI :** les PR #655–#658 sont empilées, non intégrées à `main` ; branche documentaire de conception également non mergée. Le workflow Next du code #655 se déclenche sur `pull_request` ciblant `main` et `push` sur `main` : une PR empilée vers une branche intermédiaire ne démontre pas nécessairement ce gate. La CI Next a terminé `SUCCESS` sur le SHA de code `08b89360` (workflow 41999186495), mais **aucune CI ni preuve LIVE** ne couvre une future extension D3/observabilité. Qualifier base technique, stratégie de PR, déclenchement de CI et vérification distante avant tout mandat ; aucun rebase, retarget ou PR par défaut.

**Fichiers et responsabilités :** D1 session/auth ; D2 préparation/fil ; D3 Nora ; D4 connaissance, documents et transactions ; API routes/DB/diagnostic ; UX si état visible ; tests/unitaires/PG/HTTP/BROWSER/LIVE ; CI et documentation dans un seul lot. Un changement de contrat public, de DB ou de stratégie de sécurité peut imposer un gate Morris spécifique.

**Risque/exit dominant :** conserver une capacité produit utile sans multiplier les mécanismes. Le contrat requiert une vraie lecture D4 pendant un run, un diagnostic retrouvé et expurgé, des erreurs fidèles et des preuves d'intégrité sans régression. La sélection effective du modèle/effort, les budgets, la gestion des retries HTTP et stream, l'outil de consultation et ses droits doivent encore être arrêtés avant prompt. **ChatGPT consolide et challenge ; Cursor exécute uniquement sous mandat ; Morris arbitre l'acceptation.**

## 21. ML2 — cinq orientations qualifiées et discipline de calibration des budgets (2026-11-05)

> **VALIDATED DESIGN DIRECTION BY MORRIS ON 2026-11-05 / DOC CANDIDATE, NO CODE OR GO CURSOR.** [Spécification propriétaire ML2 §21](ml2-production-et-capitalisation-nora/specification-technique.md), [matrice §14](ml2-production-et-capitalisation-nora/matrice-tracabilite.md). Cette section synchronise R5 sans créer une deuxième doctrine ni modifier la décision de trajectoire C.

**Cinq orientations conjointement approuvées en conception :** (1) modèle principal `gpt-6.1-sol` et efforts `low/medium/high` selon qualification, sous vérification LIVE/entitlement ; (2) budgets bornés **de test uniquement**, recalibrage réel obligatoire ; (3) commande de tour D3 durable et idempotente dans PostgreSQL existant, migration sous mandat technique ; (4) diagnostic JSON expurgé/capturé durablement par lane, CLI read-only, sécurité DATA-01 et SDK ; (5) intégration technique depuis HEAD documentaire vérifié, PR unique `main` **sous GO spécifique**, traitement contrôlé des PR #655–#658.

**Réserve Morris déterminante — capacité réelle :** les limites initiales 30/120/180 secondes et 0/32k/64k caractères D4 sont des **leviers de tests d'arrêt**, pas des SLA ni des plafonds futurs du produit. Il est attendu que des investigations utiles prennent **5–10 minutes ou plus** avec beaucoup plus de contenu D4. La qualification ML2 doit opposer un corpus de limites volontairement petites à un corpus réaliste long, documenter qualité/latence/coût/tokens/volumes réels, puis **ajuster et faire valider la politique opérationnelle avant utilisation approfondie**. Un succès de stress/timeout n'autorise pas à couper prématurément une mission normale ; conserver néanmoins des limites de sécurité finies, paramétrables et un arrêt honnête.

**Critère de delivery supplémentaire :** code et tests doivent isoler les paramètres `TEST_BOUNDARY` des profils opérationnels calibrables, publier une identité de politique/configuration appliquée et permettre la requalification sans refonte de l'orchestrateur. Le parcours de mission longue doit pouvoir paginer/lire davantage, restituer limites/provenance, voire reprendre sous contrat explicite au lieu de prétendre qu'une lecture partielle est complète. La décision de seuils opérationnels définitifs exige des mesures sur données représentatives, pas un chiffre fixé en D0.

**Gates :** revue de préparation du mandat technique, puis GO Cursor D3 et droits Git distincts ; construction cohérente code/migration/tests/docs/CI ; QA (C1–C6, COG, OBS, missions courtes ET longues) et DEV/RECETTE SHA/lane ; GO spécifique RECETTE, PR, merge et promotion. Aucun workflow de branche/protection ni PR n'est modifié par cette approbation de conception. **R5 reste IN PROGRESS / ML2 NOT RECETTED.**


---

## Addendum R5 — 2026-11-07 : ML4 Git gouverné, ML5 réalisation Cursor

**Référence :** [décision](../governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md). **ML4 — Collaborer et publier avec Git** : GitHub seul connecteur réel, page « Paramètres → Intégrations », installation/autorisation à la carte, lecture/version/provenance pour Nora, révision D4, publication documentaire via D6/D7/D8/D9 avec branche/commit/PR et merge autorisé séparément. **ML5 — Faire réaliser et vérifier avec Cursor** : contrat technique, instruction exacte, identité/exécuteur Cursor, tentative, STOP/reprise et preuve D8, avec D9 si nécessaire ; aucun second moteur d'effets.

**Pièces propriétaires :** [qualification](integration-git/qualification-impact-ml4-ml5.md), [contrat d'acceptation](integration-git/contrat-acceptation.md), [matrice](integration-git/matrice-acceptation.md), [brief Figma](integration-git/brief-ux-figma.md), [spécification technique candidate](integration-git/specification-technique.md). Tracer R1 E2E07, R2 41 RG/36 PF historiques et N-01..N-27, R3 171–205 et nouvelles surfaces, R4 ADR/QA, R5 code/tests/preuves lorsqu'ils existeront.

**Gates :** synchronisation documentaire D2 → Figma et validation visuelle Morris → consolidation des contrats et test de faisabilité fournisseur → GO Cursor SFIA v2.6 → construction/tests/recette REAL → revue et acceptation Morris distinctes. **ML4 non implémenté / pas de GO build ; R6 non démarré ; aucune STABLE, release ou ADOPTED.** Les réserves ML1–ML3 ne sont pas effacées.

---

## 22. Raccord de delivery — validation Figma ML4 et convergence UX du parcours existant (2026-11-07)

La capacité **ML4 — Collaborer et publier avec Git** conserve ses frontières D6/D7/D8/D9 et son objectif de publication documentaire ; les [18 maquettes 218–235 et INDEX](../ux-ui/integration-git-ux-ml4.md) ont été **validés en conception Morris**. [Revue des gates](integration-git/revue-preparation-ml4.md).

**Séquence de construction approuvée** : (1) documentation R1–R5 intégrée et vérifiée sur Git ; (2) convergence UX du portefeuille, sas, projet, conversation Nora, documents, méthodes/cycles et décisions/journal issus de ML1–ML3, sous **contrat/GO technique distinct** et tests navigateur de non-régression ; (3) réalisation Git ML4 intégrée au shell et composants, après preuve fournisseur et GO Cursor ; (4) ML5 Cursor ; (5) R6. Aucun macro-lot numéroté supplémentaire ni découpage en micro-cycles n'est décidé automatiquement.

**Gates ouverts :** GitHub App réelle, attribution et permissions, sécurité/DB, mandat D6/D7, preuves browser/LIVE/REAL, snapshot immuable Figma avant code ; 22 tests ML4-AT encore NOT RUN. La validation UX ne clôture ni le build ML4, ni R6, ni l'adoption.

---


## 23. Préparation candidate — Convergence UX du parcours Pilote–Nora intégré (2026-11-07)

**Ordre Morris :** préparation documentaire Git ML4 intégrée (#663) → **convergence UX du runtime ML1–ML3** sous contrat et GO distincts → développement technique ML4 → ML5 Cursor. Le résultat de convergence n'est pas un macro-lot numéroté additionnel par défaut et **ne constitue pas la construction technique ML4**.

**Arbitrages de portée validés :** [décision Morris A1/A2/A3](../governance/decisions/2026-11-07-convergence-ux-arbitrages.md). A1 = reprise ciblée des préparations non liées depuis le portefeuille ; A2 = révision documentaire accessible dans le projet par D4 existant ; A3 = pas de nouveau moteur de cartes/commandes mutantes Nora.

**Sources propriétaires du candidat :** [qualification et matrice `CU-01..16`](convergence-ux-parcours-pilote-nora/qualification.md) ; [contrat `UXC-01..14`](convergence-ux-parcours-pilote-nora/contrat-acceptation.md) ; [audit R3 §19](../ux-ui/audit-couverture-ux-r3.md) ; [transposition R3 §8](../ux-ui/contrat-transposition-figma-code.md). Ces documents sont **DOCUMENTED / CANDIDATE**, non `VALIDATED SPEC` du contrat complet.

**IN à préparer :** shell/nav commun, portefeuille/sas, continuité projet, fil Nora et rendu sûr, D4 documents/révisions/sujets, D5 trajectoire/CKI, D6 décisions/restrictions, états réels et reprise, responsivité, accessibilité. A1/A2 peuvent impliquer de **petits contrats de service/API** sous D1/D2/D4 : les qualifier comme fonctionnalité intégrée, et non comme retouche de style.

**OUT :** GitHub App/dépôts, écriture/merge Git, exécution Cursor et D7/D8/D9, nouveau moteur d'actions Nora, nouvelles autorités, migration gratuite, nouveau catalogue de plugins, refonte de tous les écrans Figma.

**Risque principal :** déplacer implicitement la source de vérité de D4/D5/D6 vers la présentation ou fabriquer un comportement non implémenté en suivant une maquette. **STOP** si le projet nécessite une autorité supplémentaire, un nouveau moteur concurrent, une évolution structurante de DB/contrat ou une fonctionnalité D7/D9. Préserver les réserves de ML1–ML3 et les gates ENV-01.

**Suite avant GO technique :** relire la matrice `CU` et les 14 critères `UXC` avec Morris, arrêter le parcours A1/A2 et les exigences de navigation/états, identifier l'intégrateur et les preuves par risque, figer les frames Figma applicables, qualifier le blast radius et seulement ensuite construire la spécification technique détaillée. **Aucun GO code/PR/merge/STABLE/ADOPTED** n'est induit.

---

## 24. Contrat de fidélité Figma → navigateur pour la convergence UX (2026-11-07)

**Sources :** [contrat d'acceptation candidat v0.3](convergence-ux-parcours-pilote-nora/contrat-acceptation.md), [protocole R3 complémentaire](../ux-ui/protocole-fidelite-figma-runtime.md), [L1 de 11 frames](../ux-ui/releves-geometriques-convergence-l1.json), [contrat R3 courant](../ux-ui/contrat-transposition-figma-code.md).

Le futur lot de réalisation doit produire avant code un pack de mesures natives Figma **L0/L1/L2 ciblé** par composant/état et un oracle figé. La conformité est appréciée au navigateur sur le **même SHA**, avec fixtures, pixels de référence, métriques DOM, styles calculés, captures et diff régional. Les 14 `UXC` restent l'unique matrice d'acceptation de la convergence : **pas de système de tests parallèle**. Les écrans Figma 218–235 (ML4 Git) demeurent hors de ce résultat.

**Gates encore ouverts :** arbitrages P1–P3 du contrat complet, rail partagé **240/246 px**, tolérances de comparaison (objectif 0 px, ≤2 px proposé mais **non validé**), snapshot/export Figma immuable, extraction L2, navigateur/RECETTE, intégrateur et GO technique Cursor. Ce raccord documentaire ne vaut ni `VALIDATED SPEC` complet, ni `IMPLEMENTED`, ni `BEHAVIOR PROVEN` ni `ADOPTED`.

---

## 25. Gate de convergence UX — P1/P2/P3/F1/F2 validés, DIP non complet (2026-11-07)
**Décision Morris :** [record de validation](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md) ; [contrat R5 v0.4](convergence-ux-parcours-pilote-nora/contrat-acceptation.md) ; [dossier de sécurisation](convergence-ux-parcours-pilote-nora/securisation-parcours-fidelite.md) ; [relevé natif L2 partiel](../ux-ui/releves-geometriques-convergence-l2-partiel.json).
- **G1 VALIDATED SPEC** : reprise propriétaire de préparations OPEN/non liées (P1), révision protégée D4 dans projet (P2), shell contextuel/mobile (P3), variantes de rail (F1 : 246/246/240), seuil géométrique stable F2 (objectif 0, borne ≤2 CSS px).
- **G2 PARTIAL/NOT READY** : 8 frames et 55 nœuds extraits partiellement ; tous les descendants utiles, styles/états, sources Figma exportées/hashées et calibration d'image manquent encore. Le pack doit être complet **avant le code des composants concernés**.
- **G3 SPEC TECH NON PRÉPARÉE** : API D1/D2 de liste, D4 de révision, typage/erreurs, composants et responsive, tests/fixtures et intégrateur à contractualiser ensuite.
- **G4 NOT STARTED** : aucun code, DB, Figma, CI ou prompt Cursor autorisé par ce merge documentaire ; **G5 NOT RUN** : aucun PASS sur `UXC-01..14` ni comparaison navigateur.
**Suite :** structurer un seul résultat cohérent code/tests/docs sur l'environnement approprié lorsque G2/G3 sont prêts et qu'un mandat Cursor distinct est accordé. Aucun effet Git ML4 ni promotion `ADOPTED` anticipée.
