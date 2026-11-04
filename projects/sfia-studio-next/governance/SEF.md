# SFIA Studio Next — R0-A
## Studio Engineering Framework (SEF) — Contrat de construction & gouvernance

| Champ | Valeur |
|---|---|
| Produit | **SFIA Studio** — marque conservée |
| Programme de construction | **SFIA Studio Next** — désignation interne provisoire, distincte du produit historique |
| Document | **SEF / R0-A — proposition de méthode et charte de lancement** |
| Version | **0.2 — VALIDATED BY MORRIS / R0-A — 2026-11-01** · consolidation R0-A (arborescence dans `sfia-workspace` + contribution documentaire ChatGPT) |
| Addendum normatif | **SEF-01 — primauté permanente de la vision produit : VALIDATED BY MORRIS — 2026-11-04 (REX ML1)**. Ne constitue pas une validation des autres enseignements. |
| Date | 1er novembre 2026 (Europe/Paris) |
| Autorité | **Morris** — gouvernance, architecture, doctrine, gates, création de repo, promotions |
| Base Git historique inspectée | `mcleland147/sfia-workspace`, branche par défaut `main`, dernier commit retourné **`cd2020c82ecdcdaa073debd6985ee9c113bfba3e`** (consultation distante) |
| Git local | **NON OBSERVÉ** : aucune affirmation sur le statut staged, dirty, non suivi ou les worktrees locaux |
| Source de vérité proposée, après R0-B | **Même dépôt Git `mcleland147/sfia-workspace`**, sous-arborescence dédiée **`projects/sfia-studio-next/`** (chemin candidat à validation) ; séparation de périmètres, pas de dépôts indépendants |
| Processus ChatGPT ↔ Cursor | **SFIA v2.6**, conservé comme processus externe ; template et routing officiels non remplacés |
| Doctrine produit de référence | **SFIA Studio v3**, documents 30–37 actuels, jusqu'à toute modification explicitement validée par Morris |
| Ancienne construction | Build Doctrine, Roadmap, PRR et AKG du repo historique = **sources d'analyse/capitalisation, pas gouvernance automatiquement applicable au nouveau périmètre Next** |
| Autorisation de cette étape | **R0-A VALIDATED BY MORRIS** dans la conversation du 2026-11-01 ; **GO R0-B initialisation documentaire sur branche dédiée** ensuite. Ne vaut ni PR/merge, ni modification du runtime historique, ni adoption de v3. |
| Runtime v3 | **NON ADOPTED** ; reconstruction et méthode ≠ adoption du runtime |

> **Décision de méthode proposée :** partir d'un nouveau code et d'une gouvernance propre, mais ne pas redécouvrir le métier. Capitaliser la connaissance et les preuves de l'ancien Studio ; réévaluer les choix techniques et les comportements sans importer par inertie les implémentations historiques.

---

## 0. Statut et périmètre de ce dossier

Ce dossier constitue **un seul livrable macro de cadrage R0-A**, regroupant charte, méthode, principes de qualité, gouvernance documentaire, séparation Git, trajectoire R0-B et décision de sortie. Il vise à éviter une succession de micro-cycles documentaires.

**Exprimé dans les échanges (à tracer ensuite dans Git)** : maintien du nom *SFIA Studio* ; désignation de chantier *SFIA Studio Next* ; reconstruction avec code neuf ; **même dépôt `sfia-workspace`, nouvel espace `projects/sfia-studio-next/`** (orientation la plus récente, remplaçant le dépôt distinct initialement proposé) ; SFIA v2.6 conservée pour le processus externe ; macro-lots denses et travaux documentaires pouvant être préparés directement par ChatGPT ; R0-A engagé. Les détails d’autorisation Git restent à arbitrer.

**Soumis à validation Morris par ce document** : version du SEF, gouvernance détaillée, niveaux de preuve, modèle de macro-lot, arborescence par familles de cycles, règles de parallélisation, autorisation documentaire directe et ses limites, stratégie Git commune, gates et critères de sortie R0-A.

**Hors portée R0-A** : création de la sous-arborescence dans Git ; commit direct, push, PR, merge ; modification ou suppression du code historique ; modification de la doctrine v3 existante ; adoption du runtime ; choix définitifs d'orchestration, de persistance, d'architecture OA/Nora et de stack ; création d'un template Cursor concurrent ; décision automatique de gel ou d'arrêt du chantier historique.

## 1. Vision et finalité du programme

Construire **SFIA Studio Next**, la prochaine implémentation du même produit, sur une architecture saine qui permet au Pilote de converser avec Nora, de cadrer et conduire des projets techniques, de gouverner les décisions et les engagements, de mobiliser des capacités et agents, et d'obtenir des résultats traçables, prouvés et réutilisables.

La vision de départ est celle des trois schémas fournis par Morris : *Pilote ↔ Nora*, contexte et connaissance v3, moteur métier et autorité, capacités et outils, **intention → qualification → décision applicable → contrat → exécution → preuve → continuité**. **Ces schémas sont une vision directrice, non une spécification suffisante.** Les cycles R1–R4 doivent préciser exigences, cas limites, UX, responsabilités et contrats.

**Qualité recherchée** : cohérence conceptuelle, sécurité des frontières d'autorité, simplicité du parcours nominal, robustesse et reprise, faible couplage, lisibilité du code, capacités extensibles, maintenabilité et preuve opérationnelle. La durée calendaire n'est pas un critère prioritaire de décision d'architecture ; le rythme de travail reste efficace, en limitant la fragmentation artificielle.

## 2. Trois couches à ne jamais confondre

| Couche | Objet | Source / autorité |
|---|---|---|
| **A. Processus externe** | Qualifier et exécuter les cycles ChatGPT ↔ Cursor ; profils, template, packs, handoffs, validation et gates | **SFIA v2.6** du dépôt historique tant qu'aucune promotion de méthode n'est décidée ; Morris décide |
| **B. SEF — méthode de construction** | Organiser la conception, la construction, les macro-lots, l’analyse d’impact, la qualité, la roadmap et la documentation de **SFIA Studio Next** | Ce **SEF v0.2 candidat** ; puis **SEF approuvé dans `projects/sfia-studio-next/governance/`**, distinct de la Build Doctrine de l’ancien Studio |
| **C. Doctrine produit** | Définir ce que Studio doit être : rôle du Pilote, Nora, contexte v3, LPS, trajectoire, décisions, contrats, preuves, continuité | **Doctrine Studio v3 30–37 VALIDATED** ; modification explicite par Morris, jamais par déduction depuis SEF |

**SEF n'est pas une nouvelle doctrine métier ni une baseline v2.7/v3 globale.** Un choix d'architecture et de design modifie la construction ; une modification de principe métier/doctrinal requiert l'autorité Morris et une trace spécifique.

## 3. Principes de construction SEF (propositions)

**SEF-01 — Product-first / outcome-first.** Définir le résultat observable pour le Pilote avant les composants et la solution.

**SEF-02 — Macro-lots plutôt que micro-tâches.** Planifier et clôturer des ensembles cohérents de capacité utilisateur, pas des tickets doc/code/test isolés.

**SEF-03 — Cohérence fonctionnelle et technique.** Chaque capacité spécifie états, invariants, contrats, responsabilités, parcours nominal et exceptions.

**SEF-04 — Code neuf par défaut.** Les fonctionnalités du Studio historique sont des connaissances à qualifier et non des briques transférées automatiquement. Toute récupération de code exige une raison positive, une frontière claire et des preuves.

**SEF-05 — Impact-first.** Identifier avant modification les interfaces, flux, invariants, données, UX, sécurité, preuves et tests pouvant être affectés. Investigation proportionnée au risque.

**SEF-06 — One accountable owner per responsibility.** Éviter les moteurs parallèles, règles dupliquées et décisions diffuses. Le choix d'un service propriétaire est explicite, sans imposer prématurément une topologie technique.

**SEF-07 — Gouvernance proportionnée.** HumanDecision lorsque la décision métier l'exige ; autorisation bornée pour les modifications ; lectures dans le mandat déjà autorisé. La sécurité interne ne doit pas devenir un parcours utilisateur bureaucratique.

**SEF-08 — Parallélisme borné.** Travailler en parallèle quand les interfaces, données, chemins Git et critères d'intégration sont stables. Ne pas paralléliser des arbitrages d'architecture incompatibles ou des changements concurrents sur le même socle sans intégrateur désigné.

**SEF-09 — Documentation dans le flux.** Conception, code, QA, tests, documentation courante et preuves sont livrés dans le **même macro-lot** lorsque la modification est cohérente. Pas de micro-cycle documentaire de rattrapage par défaut.

**SEF-10 — Preuve graduée, pas de claim anticipé.** Distinguer *documented*, *modeled*, *implemented*, *deterministic coverage*, *browser observed*, *REAL bounded proven*, *end-to-end behavior proven*, *adopted by Morris*. Les tests unitaires PASS ne prouvent pas l'expérience utilisateur globale.

**SEF-11 — Continuité et retour arrière.** Prévoir STOP, FAIL, reprise, persistance, idempotence et reversibilité là où les effets du produit l'exigent, avant de considérer une capacité prête.

**SEF-12 — Extensibilité contrôlée.** Une nouvelle capacité ne doit pas forcer le changement des fondations, des états ou des chemins de décision sans justification documentée. La complexité est explicitée, pas masquée.

**SEF-13 — Git et preuves primaires.** Git courant + tests + données d'exécution priment sur prose, mémoire et doc historique ; tout écart est visible et qualifié.

**SEF-14 — Pas de nouveau mécanisme inutile.** Réutiliser des concepts validés mais pas par inertie les architectures historiques ; éviter abstractions, POC, fixtures et fonctionnalités futures sans cas d’usage ou exit propre.

**SEF-15 — Contribution directe ChatGPT proportionnée.** ChatGPT peut concevoir, rédiger et réviser directement les artefacts documentaires et de gouvernance du nouveau chantier, sans passage automatique par Cursor. L’intégration dans **Git distant** suit une autorisation Morris **bornée et traçable** (périmètre, branche, opérations, garde-fous). Rédaction ≠ approbation normative ; approbation ≠ commit/push/PR/merge. Modalités en §10.

### Addendum validé à SEF-01 — Primauté permanente de la vision produit (2026-11-04)

**Statut : VALIDATED BY MORRIS — REX ML1, enseignement 1.** Cette précision renforce le principe SEF-01 existant. Elle ne valide ni les autres enseignements du REX, ni de nouveaux gates ou mécanismes d'exécution, ni une modification de la doctrine produit.

La construction de SFIA Studio Next est conduite en priorité par sa **vision produit, ses résultats utilisateurs et ses capacités métier attendues**.

À chaque étape — cadrage, conception fonctionnelle, UX, architecture, construction, tests, revue et qualification — les travaux doivent être appréciés au regard de leur contribution à cette vision.

**La conformité d'une implémentation à son contrat technique ne suffit pas à démontrer la réussite produit.**

ChatGPT et Morris doivent régulièrement réinterroger la pertinence des travaux engagés, leur cohérence avec la cible globale et leur impact sur les capacités suivantes.

Toute dérive significative doit être explicitée, analysée et arbitrée avant d'être prolongée dans le delivery.

## 4. La doctrine des macro-lots — **règle structurante**

### 4.1 Définition

Un **macro-lot (ML)** représente un résultat produit ou un arbitrage architectural cohérent, clôturable avec un **contrat d'acceptation commun**. Il peut inclure : découverte/cadrage ciblé, conception fonctionnelle, UX, architecture, code, tests, validation, documentation et preuve.

Un macro-lot **n'est pas nécessairement un seul commit, une seule branche ou une seule tâche Cursor**. Il est une unité de pilotage cohérente, avec un responsable d'intégration et une preuve de sortie unique. Plusieurs tâches internes peuvent s'exécuter en parallèle sous le même contrat.

### 4.2 Critères obligatoires pour ouvrir un macro-lot

1. **Finalité** : quelle capacité ou quel résultat vérifiable sert-il ?
2. **Frontière IN/OUT** : inclusions/exclusions, dépendances et code/interfaces affectés.
3. **Contrats** : comportements, interfaces publiques, invariants, effets et données.
4. **Risques** : effets transversaux, sécurité, persistance, migration, UX, fournisseurs externes.
5. **Preuves de sortie** : scénarios observables, tests, niveaux LIVE/REAL nécessaires, contrôles de reprise.
6. **Intégration** : branche/HEAD/base Git vérifiés par Cursor, intégrateur, plan de relecture et gate Morris.
7. **Suite** : quelle capacité devient accessible après ce lot ; réserves et dettes avec conditions de sortie.

### 4.3 Taille : ni fragmentation, ni lot monolithique

**Règle de regroupement :** regrouper dans un seul macro-lot les modifications qui servent le même objectif et partagent contrats et validation — par exemple, nouvelle présentation Nora + normalisation + persistance du rendu + UX + tests + PRR actuelle du nouveau runtime.

**Règle de séparation :** scinder seulement si une frontière de responsabilité, un gate de sécurité, une dépendance non disponible, un besoin de validation indépendante ou un risque de régression le justifie. Un gros lot flou est aussi mauvais qu'une série de micro-tâches.

**Pas de seuil arbitraire de fichiers, lignes de code ou jours** : la taille est qualifiée par cohérence et contrôlabilité.

### 4.4 Anti-micro-cycles documentaires

**Par défaut :** aucune PR ou cycle uniquement pour synchroniser après coup un contenu documentaire prévisible. La mise à jour sémantique accompagne le macro-lot qui modifie le comportement ; la revue couvre document, code, tests et preuves ensemble.

**Exception autorisée** : décision structurante préalable, cadrage/architecture autonome bloquant la suite, incompatibilité de branches/autorités, publication de doctrine, exigence d'audit externe ou correction documentaire majeure affectant la sécurité ou la compréhension. L'exception documente la raison, le gain, le risque et la sortie.

Ne pas confondre **concision documentaire** et **absence de trace** : les décisions, contrats et preuves restent obligatoires, mais doivent être concis, canoniques et retrouvables.

### 4.5 Parallélisme sous un macro-lot

**Parallel-safe si** : sous-lots indépendants, contrats et zones de fichier isolés, pas de modification simultanée d'une interface non figée, ownership identifié et stratégie de fusion/test définie.

**Séquençage nécessaire si** : décision métier non prise, API commune instable, schéma de persistance partagé, mutation de fichiers identiques, risques de sécurité ou d'intégration mal qualifiés.

**Modèle** : un *macro-lot lead/integrator* (Morris décide les gates, Cursor exécute), plusieurs sous-travaux éventuellement délégués, un **point de consolidation**, un **pack de preuves**, puis **une décision Morris** pour l'intégration. Aucune multiplication d'architectures ou de branches permanentes.

### 4.6 Exemple illustratif — Réponses structurées Nora

**Mauvais découpage :** 1 cycle normalisation → 1 cycle UI → 1 cycle persistance → 1 cycle tests → 1 cycle documentation → 1 cycle correction de non-régression.

**Macro-lot proposé :** *CAP-PRES-01 — Réponse Nora fidèle, structurée et persistante* ; contrat sémantique de sortie ; typage de la présentation ; rendu UI ; sauvegarde/rechargement ; tests d'intégration et régression ; preuve navigateur ; mise à jour de l'architecture courante ; une revue finale. Les implémentations internes peuvent être parallélisées seulement après stabilisation de l'interface de présentation.

## 5. Processus opérationnel de chaque macro-lot

**Entrée — Qualification** : lecture de `sfia-workspace` au ref courant et des sources canoniques de `projects/sfia-studio-next/`, choix de capacité/roadmap, cible et écart, sources historiques *sur besoin*, analyse d'impact, risque et profil SFIA v2.6.

**Conception intégrée** : scénario cible, UX si applicable, interfaces/contrats, responsabilités, cas limites, tests d'acceptation et preuve exigée. Gate architecture/produit Morris en cas de changement structurant.

**Exécution contrôlée** : ChatGPT peut produire/réviser directement une documentation dans la limite du §10 ; pour les travaux techniques ou les opérations déléguées à Cursor, ChatGPT prépare une qualification repo-informed et un prompt Cursor **instancié depuis le template Git SFIA v2.6**. Cursor exécute sous contrat, sans élargissement de périmètre ni décision réservée à Morris.

**Revue/Intégration** : Review Pack complet (fichiers créés/modifiés exploitables), handoff Git conforme, analyse des diff/tests/risques, gate d'intégration distinct si requis ; aucun push projet, PR ou merge par déduction du GO de cadrage.

**Clôture** : comportement observé à son niveau réel, contrat d'acceptation rempli, documentation mise à jour sémantiquement, réserves et dette assignées, statut Roadmap requalifié, prochain lot relié à la trajectoire.

**Cycles SFIA v2.6** : le cycle et son profil restent déclarés (Light/Standard/Critical/Capitalization). **Standard par défaut** ; Critical sur risque réel de sécurité, architecture ou autorité, pas simplement parce qu'il y a plusieurs livrables. Capitalization n'est pas Critical par essence.

## 6. Règles de qualité et de preuve

### 6.1 Contrat minimal de capacité

Une capacité en construction possède : ID, objectif utilisateur, pilote/owner, liens aux exigences/roadmap, scénarios nominaux et négatifs, autorités impliquées, contrats, modèles de données, dépendances, UX applicable, tests, preuves et limites, dette/exit, état et capacité suivante.

### 6.2 États non interchangeables

| Statut | Sens |
|---|---|
| PROPOSED | Intention ou option ; non décidée |
| VALIDATED SPEC | Exigence/contrat approuvé ; ne prouve pas le runtime |
| IMPLEMENTED | Code présent à un SHA ; pas de conclusion UX/REAL automatique |
| COVERAGE VERIFIED | Tests applicables exécutés ; périmètre de test déclaré |
| BEHAVIOR PROVEN | Scénario réellement observé dans des conditions nommées |
| ADOPTED | Décision Morris de promouvoir une capacité/runtime selon gates et preuves définis |

Mentionner pour les preuves **DETERMINISTIC**, **BROWSER**, **LIVE**, **REAL** et leur périmètre sans les confondre. Les claims architecturaux *documented / code verified / known gap* sont également distingués.

### 6.3 Matrice d'acceptation par risque

- **Tout lot** : tests appropriés + validation d'impact + documentation dans le diff + revue.
- **Modification UI** : scénario utilisateur + contrat UX/Figma applicable + vérification visuelle runtime quand nécessaire.
- **Orchestration et cognition** : fidélité du contrat, gestion des outils, autorité séparée, comportements négatifs, modèle réel si la preuve est requise.
- **Persistance / reprise** : état après reload, redémarrage serveur, corruption/failures et non-invention des états selon le contrat.
- **Exécution / effets externes** : permissions, contrat inspecté, STOP, idempotence, non-expansion, preuve REAL bornée avant claim REAL.

**Pas de pourcentage de couverture universel** fixé par défaut ; les scénarios critiques et les frontières contractuelles sont le critère. Des seuils chiffrés pourront être décidés en R4 selon la stack et les risques.

### 6.4 Prévention des régressions et test d'évolutivité

Chaque évolution décrit le *blast radius* attendu. Les tests du propriétaire du contrat et des consommateurs affectés sont rejoués. Pour chaque fondation structurante, définir au moins un scénario d'extension plausible (nouvel outil / capacité Nora / type de mission) et vérifier qu'il n'exige pas de recoder les chemins d'autorité, les états projet ou l'expérience de dialogue sans motif métier.

## 7. Documentation canonique, Git et traçabilité

### 7.1 Un dépôt existant, deux périmètres applicatifs

Le dépôt **`mcleland147/sfia-workspace` reste la source de vérité Git commune**. La reconstruction est isolée fonctionnellement et documentairement dans **`projects/sfia-studio-next/`**, sans recopier `projects/sfia-studio/` ni créer de moteur applicatif partagé par défaut.

- `projects/sfia-studio/` : **runtime historique**, Build Doctrine/Roadmap/PRR/AKG historiques, consultables au besoin, sans gouverner automatiquement la nouvelle construction.
- `projects/sfia-studio-next/` : **nouveau programme**, SEF, roadmap, cadrage, conception, UX, architecture, code neuf et preuves propres à Next.
- `method/` et `prompts/templates/` : **processus externe SFIA v2.6**, commun, sans duplication normative dans Next.

**Limite assumée :** un répertoire séparé n'est **pas un second dépôt** ni une isolation Git/CI automatique : branches, historique, protections et workflows du repo sont communs. R0-B devra définir une portée des changements autorisés, les chemins protégés, les contrôles de CI et les règles de revue afin d'empêcher les impacts involontaires sur l'ancien Studio et sur `method/`.

**Statut :** emplacement de référence proposé en R0-A ; la création physique et les premières écritures Git relèvent d'un GO R0-B distinct.

### 7.2 Arborescence par familles de cycles

L'arborescence documentaire reflète les **types d'activité/cycle** : gouvernance, cadrage, conception fonctionnelle, UX/UI, architecture, construction, qualité et capitalisation. Elle ne reproduit pas mécaniquement les 15 types du processus SFIA v2.6 ; chaque famille accueille les cycles pertinents.

```text
sfia-workspace/
├── method/                         # SFIA v2.6 externe (existant)
├── prompts/templates/              # Template d'exécution (existant)
└── projects/
    ├── sfia-studio/                # Studio historique, conservé
    └── sfia-studio-next/           # Reconstruction neuve — R0-B
        ├── README.md
        ├── governance/
        │   ├── SEF.md              # Méthode de construction canonique
        │   ├── roadmap.md         # Trajectoire vivante Next
        │   └── decisions/          # Décisions Morris / ADR, supersessions
        ├── cadrage/
        │   ├── product-vision.md   # Après R1
        │   └── capability-map.md   # Après R1
        ├── conception-fonctionnelle/
        ├── ux-ui/
        ├── architecture-technique/
        │   ├── target-architecture.md  # À concevoir en R4
        │   └── current-reference.md    # CURRENT, quand du code existe
        ├── construction/
        ├── validation-qualite/
        └── capitalisation/
            └── legacy-source-register.md
```

**Arborescence logique, non ordre de création** : ne pas créer des dossiers vides ou des documents de conception non encore validés. Les fichiers d'application et de tests seront placés à l'emplacement décidé en R4 ; le layout `src/`, `app/` ou `tests/` n'est pas préjugé.

**Granularité des dossiers :** un document autonome va directement dans sa famille. Un **sous-dossier de macro-lot** (`ML-<identifiant>-<objet>/`) n'est créé que lorsqu'un ensemble substantiel d'artefacts justifie son regroupement. Pas de sous-dossiers par micro-tâche, par ticket ou par cycle documentaire artificiel.

**Traçabilité transversale :** chaque artefact important comporte le macro-lot, le cycle/profil SFIA, le statut, l'autorité, le référentiel canonique, les décisions liées, les preuves et les impacts. Une documentation réutilisée par plusieurs lots appartient à son **dossier fonctionnel canonique**, et les lots y renvoient plutôt que de la dupliquer.

### 7.3 Vérité Git, doctrine et séparation des sources

Pour Studio Next : **état Git courant de `sfia-workspace` pour les fichiers Next + preuves primaires > décisions Morris applicables > doctrine produit v3 validée > spécifications Next approuvées et architecture CURRENT Next > REX/code historique > hypothèses**.

Jusqu'à migration doctrinale explicitement décidée, les documents v3 `projects/sfia-studio/sfia-v3-framing/30–37` gardent leur autorité **comme sources produit** ; Next les référence avec chemin/ref/SHA selon le cycle, sans dupliquer une seconde doctrine normative. La Build Doctrine, la Roadmap et la PRR historiques restent **des sources de capitalisation** et ne sont **pas** la méthode/roadmap/architecture CURRENT de Next.

La méthode SEF et la roadmap Next sont canoniques dans **`projects/sfia-studio-next/governance/`**. La référence d'architecture CURRENT de Next est unique et évolue avec le code, sans accumulation d'overlays historiques ; Git et ADR portent les états antérieurs. Pour tout changement de comportement : mise à jour sémantique dans le macro-lot.

**Point de compatibilité obligatoire en R0-B :** le template/routing SFIA v2.6 courant contient un **Convergence Pre-check Studio** qui pointe encore vers la Build Doctrine, la Roadmap et la PRR de l'ancien Studio. Le routing du nouveau périmètre doit être explicitement qualifié/adapté sous GO méthodologique approprié **avant tout prompt Cursor Next** ; ne pas supprimer ou contourner silencieusement l'ancien contrôle, ni créer un second template concurrent.

### 7.4 R23/R24 adaptés à la nouvelle construction

L'ancien runtime est analysé avec Git/code/PRR **lorsqu'une information historique influence une décision Next**. Pour Next, chaque cycle analyse le code CURRENT Next et ses interfaces proportionnellement au risque ; code/preuves > documentation ; écart = **KNOWN GAP**. Une modification du fonctionnement met à jour **la référence CURRENT de Next dans le même macro-lot** ; sinon déclarer **NO SEMANTIC IMPACT**.

L'objectif n'est pas d'entretenir une nouvelle PRR parallèle aux documents de conception : `architecture-technique/current-reference.md` est le support canonique au démarrage ; des volumes applicables peuvent être introduits si la complexité réelle le justifie.

## 8. Trajectoire R0–R6 et macro-capacités

| Jalon | Finalité | Sortie principale / gate |
|---|---|---|
| **R0-A** | Rebaseline, gouvernance SEF, séparation des responsabilités et méthode | Pack R0-A validé par Morris : règles, options et autorisation R0-B |
| **R0-B** | Initialisation de `projects/sfia-studio-next/` dans `sfia-workspace`, dépôt des références et routage des trois couches | Git vérité vérifiée, branche/protections/paths/routing, premier commit sous GO distinct |
| **R1** | Cadrage produit, exigences et capacité-map | Vision et parcours de référence approuvés, écarts et périmètre clairs |
| **R2** | Conception fonctionnelle transverse | Contrats métiers / décisions / états / incidents / continuité approuvés |
| **R3** | UX/UI à partir du cockpit conservé | Parcours/captures et contrats visuels validés, adaptations identifiées |
| **R4** | Architecture technique Next | ADR, modèle de responsabilité, données, contrats, sécurité, extension / intégration |
| **R5** | Construction par macro-capacités **verticales et utiles** | Produit incrémental, qualité/preuves graduellement élevées, docs dans chaque lot |
| **R6** | Qualification finale et bascule | Preuves E2E exigées, migration et exit ancien runtime, GO Morris d'adoption |

R1–R4 peuvent contenir plusieurs ateliers, mais **ne justifient pas automatiquement une PR ou un cycle par document**. Les jalons sont des résultats, pas des blocs de tâches administratives. Les gates structurants conditionnent la suite ; les ateliers internes sont regroupables.

**Chaîne de capacité cible** (sans claim d'implémentation) : conversation/qualification → contexte doctrinal et connaissance → LPS/trajectoire → recommandation/décisions applicables → contrat/exécution gouvernée → Evidence/Review → continuité. L'étape suivante est qualifiée à chaque gate.

## 9. Gouvernance, droits et stops

### Responsabilités

- **Morris** : décide programme, architecture structurante, changement de doctrine, création/gestion des périmètres Git, gates, commit distant/push/PR/merge/suppression, promotions, adoption.
- **ChatGPT** : analyse, qualification, conception candidate, challenge, organisation macro-lots, **rédaction et révision documentaire directe** ; contribution Git **seulement sous autorisation bornée** (§10), préparation de contrats/templates, revue de preuves. **Ne décide pas** à la place de Morris.
- **Cursor** : exécute sous contrat SFIA v2.6, produit fichiers/tests/rapport/handoff ; **n'élargit pas** les frontières et ne prend pas les décisions d'architecture ou d'autorité.
- **Pilote Studio (runtime futur)** : décide les HumanDecisions applicables ; différent de l'autorité Morris sur la construction.

**Complément validé — REX ML1, enseignement 2 (2026-11-04) : responsabilité continue de cohérence produit.**

La délégation d'un travail technique à Cursor ne transfère ni la responsabilité de la vision produit ni l'autorité des arbitrages.

Morris conserve la responsabilité des décisions produit et des résultats attendus.

ChatGPT assure, tout au long de la construction, la continuité de la réflexion fonctionnelle et produit. Ses revues ne se limitent pas à constater la conformité technique : elles évaluent également la pertinence de la solution, ses impacts sur la vision cible et les causes des écarts observés.

Cursor réalise les travaux techniques dans les frontières du contrat autorisé. Il doit mobiliser son jugement d'ingénierie pour identifier les incohérences, risques et dépendances, puis les signaler sans prendre de décision structurante à la place de Morris.

**La conformité au prompt Cursor ne décharge pas Morris et ChatGPT de leur responsabilité sur la pertinence de ce qui a été demandé.**

Ce complément précise la pratique des responsabilités existantes ; il ne transfère aucune autorité, ne modifie pas le contrat SFIA v2.6 et n'autorise aucun gate ou effet technique supplémentaire.

### Stops absolus

**STOP** si : source Git ou base non vérifiée lorsqu’indispensable ; doctrine produit ou capacité suivante non résolue ; architecture et propriétaire de contrat inconnus ; effet externe sans autorisation ; prompt Cursor sans template v2.6 consulté et contrat instancié **et sans routage Next qualifié** ; R0-B/écriture Git sans GO ; preuve LIVE/REAL ou ADOPTED revendiquée sans démonstration ; dette temporaire sans exit ; chemin parallèle non justifié.

### Gates minimaux

1. **R0-A REVIEW/APPROVAL** : Morris valide ou amende ce pack et les options structurantes.
2. **R0-B CREATE/INITIALIZE** : Morris autorise explicitement le nouveau dossier `projects/sfia-studio-next/`, la branche, le périmètre de commit distant et l’initialisation, sans changement du runtime historique.
3. **PRODUCT/ARCHITECTURE** : Morris tranche les décisions métier/doctrine/architecture structurantes au jalon applicable.
4. **DELIVERY/INTEGRATION** : Cursor agit sous contrat pour les travaux techniques ; ChatGPT peut porter des écritures documentaires sous mandat §10 ; commit distant/push, PR et merge sont contrôlés par autorisations SFIA distinctes (sauf exception documentaire explicitement et étroitement accordée).
5. **CAPABILITY/GO-LIVE** : preuve d'acceptation, réserves et validation avant promotion ; adoption du runtime toujours décision Morris distincte.

## 10. Contribution documentaire directe à ChatGPT — exception bornée au recours systématique à Cursor

### 10.1 Principe

Le **travail documentaire simple, cohérent et faiblement risqué** ne nécessite pas un prompt Cursor uniquement pour créer ou mettre à jour un fichier déjà préparé par ChatGPT. Le SEF autorise **la rédaction, la revue et la révision directe par ChatGPT** ; l’usage de Cursor est déterminé par la nature et le risque du travail, non par un réflexe de délégation.

Cette règle évite les micro-tâches de recopie, **sans transformer ChatGPT en autorité de décision**, ni autoriser par défaut une mutation du dépôt distant. Un document de gouvernance peut être **rédigé** par ChatGPT, mais il ne devient **VALIDATED/ADOPTED** qu'après une décision Morris claire.

### 10.2 Matrice des actions

| Niveau | Exemples | Réalisation | Autorité et contrôle |
|---|---|---|---|
| **D0 — Lecture et production locale** | Analyse, synthèse, draft de cadrage, SEF candidat, ADR candidat, correction rédactionnelle locale | **ChatGPT direct**, sans Cursor | Dans la demande utilisateur ; source/statut documentés ; aucun effet Git distant |
| **D1 — Contribution Git documentaire bornée** | Créer un document déjà approuvé, corriger un lien, maintenir un index, synchroniser une section non structurante et sans impact runtime | **ChatGPT direct possible** via outil Git sur **branche dédiée**, sans Cursor | **GO Morris explicite et borné** : fichiers/chemins autorisés, opération, base/ref/branche, portée du commit ; vérification et restitution du SHA ; jamais directement `main` |
| **D2 — Document structurant** | SEF normatif, Roadmap structurante, contrat de décision, changement de doctrine, ADR d'architecture, politique de sécurité/autorité | ChatGPT peut **rédiger/revoir** ; intégration directe à décider au cas par cas | **Validation Morris du contenu avant publication** + GO Git approprié ; aucun statut ADOPTED inféré |
| **D3 — Code / technique / effets** | Code runtime, schéma de données, migration, tests produit complexes, scripts CI, protection de branche, secrets, chemins protégés, suppression | **Cursor sous SFIA v2.6** ou autre contrat expressément décidé | Gates techniques/architecture, revue, tests et permissions ; pas de délégation documentaire D1 |

Le fait qu'un document soit situé dans `governance/` **ne le rend pas automatiquement D1** : son **effet normatif réel** détermine s'il relève de D2. Une modification de la Roadmap pouvant engager une promotion, clôture ou changement de trajectoire n'est pas mineure.

### 10.3 Mandat Git documentaire — conditions cumulatives

Pour D1, l’autorisation peut couvrir un **ensemble borné de documents d’un même macro-lot**, plutôt qu’un GO répétitif pour chaque correction de ponctuation. Le mandat documente obligatoirement :

1. **Objet/lot** et effet attendu (aucun changement de produit, de sécurité, de doctrine ou de décision).
2. **Allowlist de chemins** sous `projects/sfia-studio-next/` ; aucun chemin historique, méthodologique ou protégé.
3. **Branche/base Git** vérifiées avant l'écriture ; pas de mutation sur `main`.
4. **Opérations permises** (création/mise à jour) et, si accordé, commit/push Git documentaire borné. Une API GitHub qui écrit un fichier produit un **commit distant** : cette action **équivaut à une mutation Git publiée** et exige l'autorisation correspondante.
5. **Contrôles** : diff re-lu, références/links vérifiés, absence de secrets, cohérence du document, pas de conflit de version, rapport des fichiers et SHA résultants.
6. **Sortie du mandat** : fin du lot, dépassement de portée, risque nouveau, conflit ou besoin d'arbitrage → STOP et nouveau GO Morris.

**Ne sont jamais inclus implicitement** : ouverture de PR, merge, modification de branches/protections, push projet hors périmètre, suppression d'un outil, refonte structurelle, changement de doctrine, adoption runtime. Aucun mandat D1 permanent ou global ; renouvellement si nouvelle portée.

### 10.4 Intégration aux macro-lots et au suivi

- Intégrer les mises à jour documentaires du même objectif dans **un lot commun**, pas dans des cycles indépendants de pure recopie.
- Séparer seulement les **décisions structurantes à approuver** des corrections mécaniques non structurantes.
- Lorsque ChatGPT publie directement un lot documentaire autorisé, tracer **macro-lot, fichiers, base, commit SHA, contrôles, réserves** dans le retour et la source canonique pertinente.
- Si un review pack/handoff SFIA est requis par le cycle choisi, **ne pas le contourner** sous prétexte que ChatGPT rédige ; qualifier explicitement le mode de contribution et les preuves adaptées.
- Si les outils Git directs sont indisponibles, ChatGPT fournit le document prêt à intégrer **sans inventer une intégration Git réussie** ; Cursor n’est sollicité que si cela devient utile.

**Statut de cette section : CANDIDATE R0-A, non encore politique exécutoire.** Aucune autorisation de commit/push Git ou de changement de périmètre n'est consommée par son écriture.

## 11. REX Studio historique — éléments à capitaliser

**Problèmes rapportés par Morris** : régressions croisées sur petites modifications, chemins de décision historiques, refactorings successifs, forte dépendance à la taxonomie legacy, documentation partielle ou stratifiée, décalage entre tests techniques et expérience produit, difficulté à faire évoluer sans rouvrir des mécanismes acquis.

**Éléments observés dans les sources** : coexistence de parcours historiques et nouveaux décrite par PRR ; offres/propositions process-local et limites restart ; H7/H8 orientées vers SC-G2 et reconstruction ciblée éventuelle SC-G3 ; Build Doctrine déjà favorable à la capacité end-to-end mais exécution réelle et continuité partiellement non prouvées. **Ces constats ne prouvent pas à eux seuls l'irrécupérabilité du runtime.** Ils fondent un choix de construction neuf à formaliser, non une suppression immédiate de l'ancien.

**REX transformé en exigences SEF** : pas de transfert par inertie ; pas de parcours concurrents ; mapping explicite d'impacts ; documentation sémantique couplée aux changements ; test d'évolution des interfaces ; preuve end-to-end avant claim produit.

## 12. Registre d’arbitrages — R0-A

| ID | Sujet | Proposition / constat | Statut |
|---|---|---|---|
| R0-D01 | Marque produit | Conserver **SFIA Studio** ; *Studio Next* = nom de chantier | **CONFIRMÉ EN CONVERSATION ; À TRACER DANS GIT** |
| R0-D02 | Reconstruction | Nouveau code/architecture à concevoir, capitalisation du savoir-faire et UX applicable | **ORIENTATION MORRIS EXPRIMÉE ; CHOIX TECHNIQUES À INSTRUIRE** |
| R0-D03 | Séparation Git | **`sfia-workspace` conservé** ; nouveau sous-dossier `projects/sfia-studio-next/`, séparation de conception/code/documentation mais historique et Git communs | **ORIENTATION MORRIS LA PLUS RÉCENTE ; CRÉATION R0-B NON AUTORISÉE PAR R0-A** |
| R0-D04 | SEF | Méthode de construction spécifique au nouveau produit | **CANDIDATE — À VALIDER** |
| R0-D05 | Macro-lots | Privilégier les lots denses cohérents, pas les micro-cycles documentaires | **EXIGENCE MORRIS EXPRIMÉE ; FORMALISATION À VALIDER** |
| R0-D06 | SFIA externe | Conserver SFIA v2.6 + template canonique | **CONFIRMÉ EN CONVERSATION** |
| R0-D07 | Doctrine | v3 30–37 reste référence tant que pas de supersession explicite | **RECOMMANDATION DE GOUVERNANCE — À VALIDER** |
| R0-D08 | H7/H8, G0-A/B | Examiner les effets de supersession sur nouveau programme ; ne pas révoquer implicitement | **OUVERT — GO STRUCTURANT REQUIS SI MODIFICATION** |
| R0-D09 | Chantier historique | Geler évolutions non essentielles et traiter cycle en cours sans dette cachée | **OPTION RECOMMANDÉE — NON DÉCIDÉE** |
| R0-D10 | Séparation documentaire | Canon Next propre + références legacy versionnées, sans doublon doctrinal | **CANDIDATE — À VALIDER** |
| R0-D11 | Quality gates | Risque et preuve proportionnés ; couverture transversale et test d'extensibilité | **CANDIDATE — À VALIDER** |
| R0-D12 | R0-B | Chemin `projects/sfia-studio-next/`, branche, protections, bootstrap, routage et politique d'accès Git | **NON DÉCIDÉ — APRÈS R0-A** |
| R0-D13 | Rédaction directe ChatGPT | D0/D1/D2/D3 et mandat Git documentaire borné, sans Cursor automatique | **PROPOSITION MORRIS EXPRIMÉE ; CLAUSES D'AUTORITÉ À VALIDER** |
| R0-D14 | Arborescence par cycles | Gouvernance + cadrage + conception fonctionnelle + UX/UI + architecture + construction + qualité + capitalisation | **ORIENTATION MORRIS EXPRIMÉE ; STRUCTURE À VALIDER** |
| R0-D15 | Compatibilité routing v2.6 | Spécialiser le pre-check Next sans détourner celui de Studio historique et sans dupliquer le template | **GAP DE ROUTING À TRAITER EN R0-B SOUS GO APPROPRIÉ** |

## 13. Critères de sortie R0-A et trajectoire immédiate

**R0-A VALIDATED BY MORRIS le 2026-11-01** dans la conversation, avec validation expresse de la v0.2. La traçabilité Git est assurée par le record R0-A associé. Les décisions restées ouvertes dans le registre demeurent ouvertes : la validation du cadre n'adopte pas automatiquement toutes les options proposées.

**R0-B READY** seulement si : méthode SEF arbitrée ; chemin Next dans `sfia-workspace` validé ; arborescence par familles approuvée ; mandat documentaire ChatGPT décidé ; doctrine v3 canonique et versions pinées ; stratégie Git/branches/paths/protections/gates définie ; compatibilité routing v2.6 Next qualifiée ; statut de l’ancien chantier décidé ou traité comme dépendance ; premier scope de création borné.

**Première capacité après R0** : R1 — *Product Definition / Capability Map* de Studio Next, en partant de la vision Pilote–Nora et du cadrage C1 v3. Les cycles R1–R4 devront conserver une vision macro et ne pas imposer 1 cycle par document.

**Anti-claim final :** la v0.2 du SEF est **validée comme méthode de construction Next**. Son intégration sur une branche Git ne vaut pas merge sur `main`, ni nouvelle doctrine produit, ni GO de modification ou suppression de l'application historique, ni promotion du runtime v3.

---

## Annexes — Sources du dépôt historique consultées

**Git** : `mcleland147/sfia-workspace` sur `main`, dernier commit distant retourné `cd2020c82ecdcdaa073debd6985ee9c113bfba3e` lors du contrôle du 1er novembre 2026. La consultation distante ne qualifie pas le statut d'un éventuel worktree local.

**Gouvernance/convergence** :
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/11-m4a-h7-h8-architecture-orientation-decision-record.md`
- `projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/02-target-architecture-to-be.md`

**Doctrine v3** :
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`

**Référence implémentation actuelle — usage REX seulement** :
- `projects/sfia-studio/production-runtime-reference/README.md`
- `projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md`
- `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`
- `projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

**Processus externe** :
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`

Toutes ces sources peuvent être consultées à l'URL `https://github.com/mcleland147/sfia-workspace/blob/main/<chemin>`. À chaque macro-lot futur, la version SHA des sources externes effectivement utilisées doit être consignée lorsque nécessaire pour la reproductibilité.