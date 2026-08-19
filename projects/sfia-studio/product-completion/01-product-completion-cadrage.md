# SFIA Studio — Product Completion — Cycle 1 Cadrage

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Cycle** | 1 — Cadrage — continuation / intégration documentaire |
| **Nom** | SFIA Studio Product Completion from MVP |
| **Profil** | **CRITICAL** |
| **Typologie v2.4** | **DOC** — documentation-only avec impact structurant aval |
| **Milestone / chantier** | PRODUCT-COMPLETION — CYCLE 1 CADRAGE |
| **Statut du document** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** |
| **Décision de contenu** | `VALIDATE SFIA STUDIO PRODUCT COMPLETION CYCLE 1 REVISED CADRAGE WITH ALL POINTS AGREED DURING A→Y REVIEW` |
| **Autorité / date** | Morris · 2026-08-19 · Europe/Paris |
| **Git main de départ du C1** | `origin/main` @ `e142f7bdb9ee29dbd258a68f016850269535f1e6` |
| **Intégration Git C1** | PR #364 **MERGED** · merge `d83be84ab93650f23bfe54870790cc2e839be095` · 2026-08-19T09:09:32Z |
| **Git main courant (base de synchronisation)** | `origin/main` @ `d83be84ab93650f23bfe54870790cc2e839be095` |
| **Branche d’intégration C1 (historique)** | `docs/sfia-studio-product-completion-c1-cadrage` |
| **État d’intégration** | C1 validé **intégré à `main`** · synchronisation gouvernance/doctrine préparée dans un cycle local distinct |
| **MVP baseline** | Vertical slice fonctionnel actuel sur `main` — PR #361 / merge `a53c323e47e5fae1d35671f3ae232609a59b0f3f` |
| **Rebaseline Product Completion** | PR #362 MERGED / `origin/main` @ `e142f7bdb9ee29dbd258a68f016850269535f1e6` |
| **PRE-M6 EXIT** | **ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT** |
| **Doctrine produit cible** | SFIA Studio v3 exclusive · framing `30`–`37` · fondations V3-F01…F15 VALIDATED (doctrine) |
| **Runtime v3** | **NON ADOPTED** |
| **Processus externe du cycle** | SFIA v2.6 ChatGPT ↔ Cursor · jamais doctrine runtime Studio |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` · `0.1.0` · **candidate** · guidance cognitive · aucune autorité d’exécution |

---

## A. Autorité, décision consommée, sources et convergence

### A.1 Décision Morris consommée

Morris a validé le 2026-08-19 l’intégralité de la révision A→Y de ce cadrage. Cette décision :

- consomme le contenu fonctionnel de la cible Product Completion ;
- adopte la cible / le périmètre (`D-PC-01`) ;
- adopte la trajectoire Product Completion adaptative (`D-PC-07`) ;
- adopte Cycle 2 — Conception fonctionnelle comme **recommandation de prochain cycle** (`D-PC-08`) ;
- remplace les arbitrages encore ouverts du candidat antérieur par les dispositions enregistrées en §Y.

La validation de contenu, prise isolément, **ne constituait pas** une intégration Git. Cette intégration a ensuite été consommée par la PR #364 / merge `d83be84ab93650f23bfe54870790cc2e839be095`.

Cette décision et cette intégration **ne constituent pas** :

- une synchronisation déjà intégrée à `main` de la Build Doctrine, de la Roadmap ou des framings v3 ;
- une autorisation de Cycle 2, conception, architecture, UX, Delivery ou REAL ;
- une adoption runtime v3 ;
- une autorisation d’intégrer automatiquement la candidate locale de synchronisation.

### A.2 Hiérarchie d’autorité appliquée

```text
Git courant / preuves runtime
> décisions Morris explicites du 2026-08-19 pour les requalifications C1
> sources projet versionnées
> mémoire / hypothèses
```

La Build Doctrine dit **comment construire**. La Convergence Roadmap dit **où en est la construction**. La doctrine v3 dit **ce que Studio doit devenir**. Le présent C1 validé porte la cible Product Completion décidée ; les deltas vers les sources versionnées sont identifiés en §Y.4 mais ne sont pas synchronisés ici.

### A.3 Sources de cadrage

| Source | Autorité / usage |
| --- | --- |
| Git `origin/main` @ `d83be84…` · PR #361 / #362 / #364 | SoT factuelle du MVP, de la rebaseline et de l’intégration C1 |
| Décisions Morris 2026-08-19 A→Y | Autorité sur les requalifications explicites de ce C1 |
| `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` | Lois de construction — KEEP |
| `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | État de construction courant — KEEP · REQUALIFY / SYNC candidate locale post-C1 |
| `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md` | Doctrine connaissance, CKC, HumanDecision |
| `projects/sfia-studio/sfia-v3-framing/31-doctrine-package-and-source-resolution.md` | DoctrinePackage, provenance, hiérarchie des sources |
| `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md` | LPS, ProjectTrajectory, replanification |
| `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md` | Observation / Hypothèse / Option / Recommandation / Décision |
| `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md` | ExecutionContract, AgentCapability, réversibilité |
| `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md` | Evidence, ReviewBundle, dette, maturité |
| `projects/sfia-studio/sfia-v3-framing/36-sfia-v2.6-inheritance-and-adaptation-matrix.md` | Héritage externe v2.6 → concepts v3 |
| `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md` | Fondations V3-F01…F15 et anti-claims |
| Processus v2.6 : template, routing, operating model, guardrails, knowledge layer | Processus externe d’exécution documentaire uniquement |
| CKC Cadrage candidate | Guidance cognitive ; ne remplace ni décisions Morris, ni routing, ni template, ni Git |

Les docs historiques `01`, `04`–`09` restent des sources de provenance / harvest du candidat antérieur. Elles ne deviennent ni doctrine active ni seconde vérité.

### A.4 SFIA Studio Convergence Pre-check

| Champ | Qualification |
| --- | --- |
| **Capacité v3 servie** | Rendre la cible Product Completion décidée explicite, cohérente, traçable et consommable avant conception |
| **État actuel** | MVP fonctionnel existant ; M1–M5 réutilisables ; PRE-M6 = baseline fonctionnelle et référence UX héritée avec dette gouvernée |
| **Milestone** | Product Completion — Cycle 1 Cadrage |
| **Actifs clés** | M1–M5 KEEP · PRE-M6 KEEP/ADAPT · preuves UX HARVEST · v3 30–37 KEEP/ADAPT ultérieur · Build Doctrine KEEP · Roadmap KEEP/REQUALIFY/SYNC |
| **Gap fermé par ce document** | Anciennes ambiguïtés sur rôle runtime, completion bar, continuité, ProjectTrajectory, catalogue, EC/AgentCapability, M6/M7 et trajectoire waterfall |
| **Dépendance suivante** | Synchronisation documentaire candidate → revue Morris / intégration Git distincte → repo coherence |
| **Dette documentaire transitoire** | C1 intégré peut diverger des sources aval jusqu’à l’intégration du présent sync |
| **Exit de cette divergence** | Sync intégrée → vérification post-merge de repo coherence |
| **Lien trajectoire** | Explicite ; pas de `STOP — TRAJECTORY LINK MISSING` |

### A.5 Statut des sources aval

La Roadmap et les framings `30`–`37` restent les sources versionnées courantes. Le présent cycle prépare localement leur synchronisation contrôlée sur les deltas C1 : rôle runtime, AgentCapability, ProjectTrajectory MUST, catalogue évolutif, continuité et disposition M6/M7. Cette synchronisation reste **candidate locale** tant qu’elle n’est pas intégrée à `main`.

---

## B. Résumé exécutif

SFIA Studio Product Completion part du vertical slice fonctionnel présent sur `main`. Ce MVP a prouvé un backbone utile : Project / LPS, Nora, qualification, HumanDecision, ExecutionContract, ExecutionAttempt, Evidence / ReviewBundle, reprise honnête du durable, OpenAI provider et gateway Cursor bornée. Il ne doit être ni rejeté ni confondu avec le produit abouti.

Product Completion vise une boucle utilisateur end-to-end complète dans laquelle un **Pilote** peut créer et reprendre un Project, travailler avec Nora, comprendre et ajuster la ProjectTrajectory, décider explicitement, inspecter un ExecutionContract natif, autoriser les frontières nécessaires, faire exécuter le HOW technique par Cursor / un agent, comprendre SUCCESS / STOP / FAIL, examiner Evidence / ReviewBundle, puis reprendre ou replanifier sans faux contexte.

La révision validée ferme les ambiguïtés du candidat antérieur :

- le rôle fonctionnel runtime initial est **Pilote**, pas « Morris » comme persona produit ;
- ProjectTrajectory et continuité sémantique inter-session sont des **MUST** ;
- AgentCapability est une enveloppe d’autorité / gouvernance, pas un catalogue de fonctions Cursor ;
- l’ExecutionContract natif doit conserver une parité fonctionnelle minimale avec la logique du contrat Cursor canonique, sans charger v2.6 comme doctrine runtime ;
- le catalogue de types de cycle est évolutif ; le nombre courant `15` n’est pas un invariant structurel ;
- M6 et M7 restent dans l’histoire mais sont **SUPERSEDED / ABSORBED BY PRODUCT COMPLETION** et sortent du forward critical path ;
- la trajectoire de construction est adaptative par capacités et dépendances, pas waterfall ;
- seuls les vrais arbitrages résiduels restent ouverts.

Le contenu C1 est validé par Morris et intégré à `main` via PR #364. La synchronisation des sources impactées, son intégration Git, la vérification post-merge de cohérence et l’autorisation de C2 restent des gates séparés.

---

## C. Intention vs solutions

### C.1 Intention validée

Construire, à partir du MVP existant, un SFIA Studio abouti qui internalise le pilotage de Project avec Nora et permet l’exécution gouvernée de cycles projet complets, tout en gardant les décisions structurantes humaines, les preuves auditables et la reprise honnête.

### C.2 Contraintes doctrinales déjà décidées

- doctrine Studio v3 exclusive ;
- Git comme vérité technique / documentaire ;
- rôle runtime fonctionnel générique **Pilote** ;
- HumanDecision explicite du Pilote ;
- Nora raisonne et recommande, elle ne décide pas ;
- ExecutionContract natif structuré et inspectable ;
- Cursor / agent autonome sur le HOW dans l’autorité effectivement accordée ;
- ProjectTrajectory dynamique, recommandée puis validée humainement ;
- CKC cognitif, sans autorité de décision ou d’exécution ;
- Observation / Hypothèse / Option / Recommandation / Décision distinctes ;
- Evidence / ReviewBundle et Artifact Completeness ;
- confirmations proportionnées, sans micro-confirmations ;
- pas de global L5, pas d’auto-escalade, pas de décision humaine inventée ;
- réutilisation du backbone M1–M5 et du fonctionnel PRE-M6 ;
- runtime v3 **NON ADOPTED**.

### C.3 Solutions encore à concevoir

Restent à concevoir ou qualifier dans les cycles aval : comportements fonctionnels détaillés ; représentation native de l’ExecutionContract ; modalités de continuité ; frontières d’autorité ; preuve de généricité ; structures d’information ; UX exacte ; architecture fonctionnelle si nécessaire ; architecture technique delta si nécessaire ; persistence / schemas / APIs éventuels ; backlog et slicing.

Ce C1 ne choisit aucun mécanisme technique de registry, schema, configuration, API, chargement de catalogue ou persistence.

---

## D. Problème utilisateur, opportunité et valeur

### D.1 Faits observés à la baseline MVP

| Sujet | Fait Git / runtime hérité |
| --- | --- |
| Project / LPS | Durable et restart-safe sur le backbone produit |
| Qualification | CycleInstance durable ; Proposal encore process-local |
| Décision | HumanDecision / DecisionBasis durables |
| Contrat | ExecutionContract natif durable, encore spécialisé / PREPARE-only pour la projection actuelle |
| Exécution | Attempt / Evidence / ReviewBundle durables ; preuve M4 REAL read-only historique ; REAL default OFF |
| ProjectTrajectory | Modélisée mais repository Memory, pas encore capacité produit complète |
| Conversation / Proposal / Confirmation | Process-local / Memory selon l’objet |
| History / Recovery | Ancres factuelles et recovery honnête, mais continuité sémantique incomplète |
| Artefacts utilisateur | Pas d’intake PJ produit natif |
| UX | PRE-M6 utile, mais présentation héritée et dette business-first sur Evidence |

### D.2 Problème restant

Le Pilote ne dispose pas encore d’une boucle produit générique et continue couvrant le chemin réel d’un Project. Il doit encore composer avec :

- une trajectoire insuffisamment opérationnelle ;
- un contrat d’exécution qui n’a pas encore la complétude fonctionnelle du contrat Cursor canonique ;
- des frontières d’autorité qui risquent d’être lues comme une liste de primitives techniques ;
- une continuité inter-session qui dit vrai mais ne reprend pas toujours le contexte suffisant ;
- une couverture cognitive liée au catalogue courant sans invariant d’évolutivité explicitement produit ;
- une Evidence parfois trop technique ;
- une présentation PRE-M6 qui ne constitue pas le contrat Product Experience final.

Ces absences sont des **gaps Product Completion**, pas automatiquement des bugs ou dettes PRE-M6.

### D.3 Opportunité / valeur

La valeur est de permettre au Pilote de :

- comprendre rapidement l’état, la trajectoire, les blockers et la prochaine action ;
- travailler avec Nora sans piloter manuellement la méthode ;
- prendre des décisions explicites sans subir un questionnaire ni des micro-confirmations ;
- déléguer au bon niveau le HOW technique sous un contrat gouverné ;
- distinguer résultat métier, STOP gouverné et failure technique ;
- reprendre un Project sans faux souvenir, faux GO ou seconde vérité ;
- faire évoluer le catalogue cognitif sans créer un moteur par type de cycle.

Le coût de l’inaction est soit de figer le MVP en faux produit final, soit de contourner Studio, soit de reconstruire une architecture parallèle malgré le backbone prouvé.

---

## E. Utilisateurs, rôle runtime et gouvernance

### E.1 Rôle runtime fonctionnel

Le rôle fonctionnel runtime initial est unique :

| Rôle | Finalité |
| --- | --- |
| **Pilote** | Créer / reprendre un Project, travailler avec Nora, arbitrer, autoriser les frontières protégées et piloter la suite |

Morris est l’autorité de **construction et de gouvernance de SFIA Studio**. Il peut utiliser le produit en tant que Pilote, mais le produit ne crée pas un persona runtime « Morris » particulier. De futurs utilisateurs peuvent également être Pilotes.

Le multi-user futur concerne identité, isolation, authentification, partage et attribution. Il n’implique pas une multiplication de rôles fonctionnels dans le cadrage initial.

**L0–L5 sont des niveaux d’autonomie, jamais des rôles utilisateur.**

### E.2 Acteurs système

| Acteur | Responsabilité |
| --- | --- |
| **Nora** | Comprendre, qualifier, challenger, analyser, distinguer les statuts épistémiques, préparer trajectoire / contrat, analyser Evidence, recommander |
| **Cursor / agent** | Exécuter le HOW technique nécessaire au contrat dans l’autorité effectivement accordée ; STOP honnêtement si incapable ou hors enveloppe |
| **Git / GitHub** | Vérité, historique, revue et preuves selon le contrat |
| **DoctrinePackage / CKC** | Contexte doctrinal v3 piné / guidance cognitive ; aucune autorité d’exécution |

### E.3 Gouvernance humaine

Le Pilote :

- arbitre les HumanDecisions structurantes ;
- consomme les confirmations nécessaires ;
- autorise les frontières protégées ;
- ne confirme pas chaque micro-étape du HOW.

Full project-cycle execution est une cible. **Full execution ≠ global L5 ≠ merge autonome.**

---

## F. Vision produit cible et séparation des responsabilités

### F.1 Boucle cible

```text
Pilote
  → Studio / Nora
  → contexte v3 / DoctrinePackage / CKC
  → qualification
  → analyse / clarification
  → Living Project State
  → ProjectTrajectory / options / recommandation
  → HumanDecision du Pilote
  → Confirmation si nécessaire
  → ExecutionContract natif
  → Cursor / agent
  → Evidence / ReviewBundle / Git
  → analyse Nora
  → LPS / ProjectTrajectory / replanification
  → décision Pilote
  → cycle suivant
```

### F.2 Nora

Nora :

- comprend l’intention et le contexte ;
- qualifie cycle, profil, risques et lenses ;
- challenge plutôt que transformer le parcours en questionnaire ;
- sépare observation, hypothèse, option, recommandation et décision ;
- prépare une trajectoire et un ExecutionContract ;
- interprète Evidence sans la remplacer ;
- recommande la suite sans consommer une HumanDecision.

### F.3 Pilote

Le Pilote :

- comprend et corrige le contexte ;
- choisit entre options ;
- consomme les HumanDecisions structurantes ;
- inspecte le contrat ;
- confirme proportionnellement aux effets ;
- arbitre STOP, réserves, replanification et cycle suivant.

### F.4 Cursor / agent

Cursor / l’agent :

- exécute docs, code, fichiers, commandes, tests, captures, Git ou autres actions lorsque le contrat et l’enveloppe l’autorisent ;
- reste autonome sur le HOW technique utile ;
- respecte scope, protections, gates, stops et Evidence obligations ;
- annonce son incapacité ou l’insuffisance d’autorité ;
- ne transforme jamais un STOP, un timeout ou une failure en succès silencieux.

Le HOW n’est contraint davantage que lorsque gouvernance, sécurité, preuve, reproductibilité ou protection l’exigent.

---

## G. Product outcomes et completion bar

### G.1 Outcomes

| ID | Résultat attendu pour le Pilote |
| --- | --- |
| O-01 | Créer, trouver, comprendre et reprendre un Project |
| O-02 | Voir le chemin réel : done, active, proposed, blocked et dépendances |
| O-03 | Travailler avec Nora sans piloter manuellement la méthode |
| O-04 | Distinguer clairement Nora Recommendation, HumanDecision, Confirmation et résultat agent |
| O-05 | Inspecter un ExecutionContract natif intelligible avant autorisation |
| O-06 | Faire exécuter le HOW technique du cycle dans une enveloppe gouvernée |
| O-07 | Comprendre SUCCESS / STOP / FAIL sans succès silencieux |
| O-08 | Comprendre Evidence d’abord au niveau métier, avec profondeur technique accessible |
| O-09 | Reprendre entre sessions avec contexte sémantique suffisant et sans mémoire inventée |
| O-10 | Replanifier la ProjectTrajectory à partir des décisions et preuves |
| O-11 | Ajouter / faire évoluer des types de cycle sans créer par défaut un nouveau moteur |
| O-12 | Fermer Evidence → Nora → LPS / Trajectory / Recommendation |

### G.2 Completion bar globale

> **Product Completion est satisfait lorsque l’ensemble des capacités MUST forme une boucle utilisateur end-to-end cohérente, utilisable, gouvernée, restart-safe et prouvée, sans dépendre d’un nombre fixe de types de cycle ni d’une architecture parallèle, tandis que les SHOULD / FUTURE restants sont explicitement gouvernés et ne masquent aucun blocker de la capacité cible.**

Product Completion **≠** runtime v3 ADOPTED. L’adoption est un état de maturité séparé, hors feature bar C1.

---

## H. Carte de capacités requalifiée

Les domaines PC-A…PC-N de la Roadmap restent des inputs historiques de cadrage. La décision `D-PC-01` adopte la carte cible suivante.

| Domaine | Finalité | Niveau cible | Preuve MVP à réutiliser | Gap Product Completion |
| --- | --- | --- | --- | --- |
| **Project** | Créer / trouver / reprendre | MUST | Project durable `/studio` | Pilotage end-to-end |
| **Living Project State** | État fiable, next action, blockers | MUST | LPS durable + Evidence refs | Compléter l’état utile |
| **Nora** | Comprendre, qualifier, analyser, recommander | MUST | Conversation dominante + provider | Généricité et continuité |
| **Qualification / CKC** | Mobiliser le bon contexte cognitif | MUST | CycleInstance + CKC binding | Couverture cognitive du catalogue applicable |
| **Cycle Catalog Evolvability** | Faire évoluer les types sans moteur dédié | MUST | Catalogue courant / routing | Invariant d’évolutivité à concevoir |
| **ProjectTrajectory** | Décrire le chemin réel et replanifier | MUST | Type + repository Memory | Capacité produit durable / reconstructible |
| **HumanDecision** | Arbitrage explicite du Pilote | MUST | HD / DecisionBasis durables | UX / liens trajectoire complets |
| **Confirmation** | Autoriser proportionnellement | MUST selon effet | Concept + path process-local | Sémantique consommée vs non consommée |
| **Native ExecutionContract** | Contrat complet, inspectable et gouverné | MUST | Aggregate durable + PREPARE projection | Parité fonctionnelle canonique + généricité |
| **AgentCapability** | Borner l’autorité effective de l’exécuteur | MUST | RO borné / Gate D historique | Enveloppe générique, pas catalogue de features |
| **Cursor / agent execution** | Exécuter le HOW sous contrat | MUST | Gateway bornée default OFF | Mécanisme générique EC → agent |
| **Execution lifecycle** | Suivre accepted / running / terminal | MUST | Attempt durable | Gérer tous effets autorisés |
| **SUCCESS / STOP / FAIL** | Rendre le résultat honnête | MUST | Statuts + stopConditions partiels | Sémantique métier complète |
| **Evidence / ReviewBundle** | Prouver et permettre l’analyse Nora | MUST | Durable / remount UI | Evidence business-first |
| **Continuity / recovery** | Reprendre sans faux contexte | MUST | Recovery honnête du durable | Continuité sémantique inter-session |
| **DoctrinePackage traceability** | Piner identité / version / digest / provenance | MUST | Pin / digest partiel | Audit complet de la résolution effective |
| **Cycle / Project history** | Relire l’utile | MUST minimal / SHOULD riche | Ancres factuelles | Capsule riche non bloquante |
| **Artifacts / PJ / sources** | Ajouter une matière utilisateur | SHOULD | Absent produit | Intake, provenance et types à concevoir |
| **Product Experience** | Absorber la complexité, rendre les gates lisibles | MUST principes | PRE-M6 fonctionnel | Contrat final non hérité par défaut |
| **Governance / audit** | Tracer autorité, dette, preuves | MUST | T-A7 / audit / Git | Intégration transverse complète |

### H.1 Inventaire MVP préservé

| Brique actuelle | État factuel | Disposition |
| --- | --- | --- |
| Project / LPS | Product SQLite | KEEP |
| CycleInstance | Product SQLite | KEEP |
| Nora / conversation | Process-local | KEEP surface · COMPLETE continuité sémantique |
| Proposal / Recommendation | Process-local / recommendation-only | KEEP séparation · COMPLETE reprise |
| HumanDecision / DecisionBasis | Product SQLite | KEEP |
| ExecutionContract | Product SQLite / projection PREPARE-only | KEEP / ADAPT |
| Confirmation | Memory / process-local | KEEP concept · COMPLETE sémantique d’autorité |
| ExecutionAttempt | Product SQLite | KEEP |
| Evidence / ReviewBundle | Product SQLite | KEEP / ADAPT business-first |
| ProjectTrajectory / Epistemic | Memory | COMPLETE / ADAPT |
| DoctrinePackage / CKC runtime | Pin/digest + resolver partiel | KEEP / COMPLETE |
| OpenAI provider | Présent | KEEP · aucun LIVE dans ce cycle |
| Cursor REAL gateway | Présente, default OFF | KEEP · preuve historique seulement |
| History / Recovery | Ancres durables / recovery honnête | KEEP / COMPLETE continuité |
| PJ intake | Absent | NEW SHOULD |
| Surfaces historiques D1 / OPS1 / execution-run | Parallèles / mécanismes harvestables | FREEZE / RETIRE LATER / HARVEST utile seulement |

Absence d’une capacité future **≠** bug. Le backbone prouvé est réutilisé ; aucun restart from zero.

---

## I. Parcours utilisateur macro cibles

Parcours fonctionnels, non visuels :

| # | Parcours | Résultat |
| --- | --- | --- |
| 1 | Créer un Project | Project + LPS initial fiables |
| 2 | Trouver / reprendre un Project | État et contexte sémantique suffisant restaurés |
| 3 | Discuter avec Nora | Intention comprise / challengée sans questionnaire rigide |
| 4 | Qualifier une intention / poursuivre | Type, profil, contexte, CKC et risques proposés |
| 5 | Consulter la ProjectTrajectory | Done / active / proposed / blocked / dépendances visibles |
| 6 | Ajuster / replanifier | Recommandation Nora puis HumanDecision si structurante |
| 7 | Prendre une HumanDecision | Choix explicite du Pilote, réserves traçables |
| 8 | Préparer un ExecutionContract | Contrat natif complet rattaché au Project / Cycle / Decision |
| 9 | Inspecter le contrat | Objectif, scope, protections, gates, stops, validations et Evidence compris |
| 10 | Autoriser proportionnellement | Confirmation limitée à la frontière réellement protégée |
| 11 | Suivre l’exécution | État et progrès honnêtes |
| 12 | Traiter SUCCESS | Résultat + Evidence cohérents, puis analyse Nora |
| 13 | Traiter STOP | Raison, travail réalisé, frontière atteinte et action attendue compris |
| 14 | Traiter FAIL | Failure technique distincte du résultat métier |
| 15 | Consulter Evidence / ReviewBundle | Lecture métier d’abord, technique accessible |
| 16 | Reprendre après interruption | Aucune mémoire / décision / autorité inventée |
| 17 | Consulter cycle / historique | Ancres fiables ; capsule riche si disponible |
| 18 | Joindre / analyser une source | PJ / provenance rattachées si capacité SHOULD livrée |
| 19 | Lancer le cycle suivant | Nouveau CycleInstance sur le même Project, après décision |
| 20 | Faire évoluer le catalogue applicable | Nouveau type enrichit cognition / attentes sans moteur dédié par défaut |

---

## J. Périmètre cible adopté

### J.1 MUST Product Completion

- Project ;
- Living Project State fiable ;
- Nora ;
- HumanDecision ;
- native ExecutionContract ;
- exécution Cursor / agent ;
- Evidence / ReviewBundle ;
- SUCCESS / STOP / FAIL ;
- recovery ;
- Git / reuse ;
- ProjectTrajectory ;
- continuité sémantique inter-session ;
- AgentCapability comme authority / governance envelope ;
- DoctrinePackage pin / traceability ;
- couverture cognitive complète du catalogue applicable ;
- **Cycle Catalog Evolvability** ;
- mécanisme générique `ExecutionContract → Cursor / agent → Evidence` ;
- capacité à faire exécuter le HOW technique du cycle sous contrat gouverné ;
- parité fonctionnelle minimale de l’ExecutionContract natif avec la logique du contrat Cursor canonique ;
- ExecutionContract inspectable et compréhensible par le Pilote ;
- Evidence métier minimale compréhensible ;
- boucle `Evidence → Nora → LPS / ProjectTrajectory / Recommendation` fermée ;
- Product Experience absorbant la complexité ;
- accessibilité comme principe produit MUST.

### J.2 SHOULD

- capsule de recovery / cycle history riche ;
- présentation avancée du contrat, diff, synthèse et progressive disclosure ;
- intake PJ / sources utilisateur ;
- Evidence UX enrichie ;
- AMEND UX sophistiqué ;
- mémoire / historique riches au-delà du contexte nécessaire à l’intégrité.

### J.3 FUTURE

- multi-user : identité, isolation, authentification, partage ;
- connecteurs Notion ;
- FinOps / RUN profonds ;
- opérations GitHub Studio-native si un jour utiles comme détail d’implémentation ;
- capitalisation vers une méthode globale, sous gate séparé ;
- états de maturité / adoption au-delà de la feature bar Product Completion.

### J.4 OUT OF SCOPE de ce C1

Voir §K. Les catégories MUST / SHOULD / FUTURE fixent une cible produit ; elles ne constituent ni backlog ni autorisation d’implémentation.

---

## K. Hors périmètre et non-objectifs

- remplacement de Git comme vérité ;
- global L5 ;
- N moteurs d’exécution par type de cycle ;
- réimplémentation de Cursor ;
- v2.6 comme doctrine runtime Studio ;
- architecture parallèle au backbone ;
- Notion comme SoT ;
- choix d’architecture, persistence, schema ou API ;
- UX détaillée / Figma ;
- backlog / user stories ;
- code / Delivery ;
- REAL ;
- adoption runtime ;
- micro-hardening PRE-M6 sans lien avec un MUST ou une preuve ;
- migration générale des historiques ;
- automatisation d’une HumanDecision ;
- transcript exhaustif comme condition de continuité ;
- séquence fixe de cycles projet ;
- synchronisation de la Roadmap / doctrine dans ce cycle ;
- lancement de C2.

M8 n’est ni requalifié ni supprimé dans ce C1 ; il reste hors périmètre de cette revue.

---

## L. Native ExecutionContract — cadrage fonctionnel

### L.1 Principe validé

> **HARVEST CANONICAL CURSOR EXECUTION TEMPLATE LOGIC AS THE FUNCTIONAL BASELINE FOR THE NATIVE STUDIO EXECUTIONCONTRACT — ADAPT TO V3 / PILOTE / PRODUCT RUNTIME — DO NOT COPY V2.6 AS RUNTIME DOCTRINE.**

L’ExecutionContract Studio est le contrat natif structuré. L’export Markdown Cursor est un adaptateur. Le contrat natif ne doit être ni une copie doctrinale de v2.6 ni une version appauvrie du contrat canonique.

**Native ≠ simplifié. Structuré ≠ opaque.**

### L.2 Parité fonctionnelle minimale

Le contrat natif préserve au minimum :

- objectif ;
- contexte ;
- sources et provenance / fraîcheur ;
- périmètre IN / OUT ;
- rattachement Project / Cycle / HumanDecision ;
- autorité effective requise ;
- protections ;
- gates / Confirmations nécessaires ;
- contraintes ;
- stop conditions ;
- validations ;
- Evidence attendue ;
- réversibilité / rollback attendu lorsque pertinent ;
- résultat et limites lisibles.

Le Pilote doit pouvoir inspecter et comprendre le contrat avec une clarté fonctionnelle **au moins comparable** au contrat Cursor canonique actuel.

### L.3 Autonomie du HOW

Le contrat exprime le résultat, les invariants et l’enveloppe. Cursor / l’agent choisit le HOW technique à l’intérieur. Le contrat ne prescrit des commandes ou une procédure que lorsque la gouvernance, la sécurité, la preuve, la reproductibilité ou une protection l’exigent.

### L.4 Sorties

| Sortie | Sens produit |
| --- | --- |
| **SUCCESS** | Résultat attendu et Evidence suffisante dans le scope |
| **STOP gouverné** | Source, scope, gate, protection ou capability bloque honnêtement |
| **FAIL technique** | Erreur de process / outil / timeout ; jamais succès métier |

Ce C1 ne choisit ni schema, ni API, ni moteur, ni prompt technique final.

---

## M. AgentCapability et exécution

### M.1 Définition validée

AgentCapability est l’**authority / governance envelope** applicable à un exécuteur pour un ExecutionContract donné.

Dimensions fonctionnelles :

- scope ;
- niveau d’autonomie ;
- frontières protégées ;
- gates / Confirmation ;
- stop / escalation ;
- obligations d’Evidence ;
- rollback / reversibility ;
- limites ;
- executor sufficiency.

### M.2 Autorité effective

```text
autorité humaine valide
∩ scope de l’ExecutionContract
∩ AgentCapability / policy
∩ guardrails runtime
= autorité effective
```

Aucune couche ne peut élargir seule l’autorité. Si l’exécuteur ou sa capability est insuffisant :

```text
SC-CAP → STOP / escalation honnête
```

### M.3 Taxonomie interne vs catalogue produit

Les catégories read, temporary generation, local write, commit, push, PR, merge et protected actions peuvent rester une taxonomie interne de policy / effects. Elles **ne constituent pas** le catalogue fonctionnel Product Completion et ne deviennent pas toutes autorisées.

L0–L5 qualifient l’autonomie. Ils ne décrivent ni les rôles ni une liste de features.

Full project-cycle execution peut inclure docs, code, commandes, tests, captures et Git lorsque le contrat l’autorise. Elle ne signifie ni global L5, ni push / PR / merge autonome.

---

## N. Cycle Catalog Evolvability — invariant MUST

### N.1 Catalogue évolutif

Le produit consomme un **catalogue canonique de types de cycle**, actuellement composé de 15 types dans la baseline méthodologique observable. Le nombre 15 n’est ni l’identité du produit ni un invariant structurel. Le catalogue peut évoluer vers 16, 20, 30, 50 ou un autre nombre.

Ajouter ou faire évoluer un type doit prioritairement enrichir :

- qualification ;
- CKC / contexte cognitif ;
- attentes ;
- risques ;
- lenses ;
- exit criteria ;
- gates ;
- stop conditions ;
- sémantique d’Evidence.

Cela ne doit pas nécessiter par défaut un nouveau moteur d’exécution.

### N.2 Mécanisme générique

```text
cycle / contexte
  → ExecutionContract
  → Cursor / agent
  → Evidence
  → Nora
```

### N.3 Couverture cognitive

La CKC completeness signifie **100 % de couverture du catalogue canonique applicable à la baseline méthodologique concernée**.

`15/15` est uniquement la mesure courante parce que le catalogue actuel contient 15 types. Ce n’est jamais l’identité structurelle de la cible.

Le CKC reste une guidance cognitive :

- aucune autorité de décision ;
- aucune autorité d’exécution ;
- aucun élargissement de scope ;
- aucune checklist brute imposée au Pilote.

### N.4 Preuve future de généricité

La preuve utilisera plusieurs situations suffisamment contrastées pour démontrer que le mécanisme n’est pas spécialisé sur un seul cas. Le nombre exact et les cycles représentatifs ne sont **pas décidés dans C1**.

Aucune obligation Product Completion n’impose 15 moteurs ou 15 campagnes E2E distinctes.

---

## O. Sources, artefacts et pièces jointes

| Famille | Cadrage |
| --- | --- |
| Git / documents projet | SoT technique / documentaire |
| DoctrinePackage | Identité, version, digest et provenance MUST traçables |
| CKC | Guidance cognitive du catalogue applicable |
| Contexte Pilote | Intention et corrections humaines ; pas une décision automatique |
| Conversation / Proposal / Recommendation | Contexte sémantique actif à reprendre ou reconstruire |
| PJ / fichiers utilisateur | SHOULD ; matière / preuve, jamais doctrine |
| Sources externes autorisées | FUTURE / gated selon besoin |
| Evidence / ReviewBundle | Preuve gouvernée ; pas restitution décorative |
| Outputs générés | Restitutions ; jamais SoT concurrente |

Règles :

- artefact utilisateur ≠ doctrine ;
- restitution ≠ SoT ;
- provenance et fraîcheur doivent être visibles ;
- rattachement Project / Cycle / Contract / Decision selon le sens ;
- source absente ou stale → STOP / requalification, pas extrapolation.

La profondeur et les types de PJ restent une inconnue de conception (§U).

---

## P. Product Experience — principes seulement

**Conversation-first ≠ conversation-only.**

Le Pilote doit pouvoir :

- créer, trouver et reprendre un Project ;
- comprendre état, cycle, ProjectTrajectory, blockers et next action ;
- distinguer HumanDecision, Nora Recommendation, Confirmation et résultat agent ;
- inspecter l’ExecutionContract ;
- comprendre Evidence d’abord au niveau métier / résultat ;
- ouvrir la profondeur technique sans qu’elle soit la surface primaire ;
- comprendre un STOP : pourquoi, ce qui a été fait, la frontière atteinte et l’action attendue ;
- reprendre après interruption sans faux contexte.

Principes :

- IDs techniques secondaires ;
- complexité méthodologique et technique absorbée par Studio / Nora autant que possible ;
- gates visibles ;
- confirmations proportionnées, pas de micro-confirmations ;
- Observation / Hypothèse / Option / Recommandation / Décision distinguées ;
- Project ≠ Cycle ;
- accessibilité = MUST.

Disposition PRE-M6 :

- backbone fonctionnel : **KEEP / ADAPT** ;
- preuves et apprentissages UX : **HARVEST** ;
- présentation héritée : référence historique, **pas** contrat visuel Product Completion final par défaut.

Aucune UX détaillée ni mutation Figma dans ce C1.

---

## Q. Durabilité, continuité et reprise

### Q.1 Principe

> Tout état dont la perte pourrait conduire Studio à mentir sur le Project, l’autorité accordée, une exécution ou sa preuve doit être durable.

Durable signifie **persisté ou reconstructible de manière fiable**. Ce C1 ne choisit pas la persistence.

### Q.2 Truth / authority durability — MUST

Doivent être durables / reconstructibles :

- Project ;
- Living Project State fiable ;
- CycleInstance ;
- HumanDecision ;
- DecisionBasis ;
- ExecutionContract ;
- ExecutionAttempt dès qu’une exécution existe ;
- Evidence / ReviewBundle ou références / provenance fiables ;
- Confirmation consommée portant une autorité ;
- ProjectTrajectory active / décidée ;
- DoctrinePackage identity / version / digest / provenance ;
- effective authority / policy envelope nécessaire à l’audit.

### Q.3 Contexte suffisant pour Nora — MUST

La continuité sémantique inter-session est MUST. Studio doit permettre à Nora de reprendre le pilotage sans inventer :

- l’intention et l’état courant utiles ;
- le cycle / la trajectoire active ;
- les décisions et réserves ;
- la Proposal / Recommendation encore active, reconstructible ou reprenable ;
- la frontière d’autorité et l’exécution éventuelle ;
- les preuves et la prochaine action.

Un transcript exhaustif n’est **pas** requis.

### Q.4 Mémoire riche — SHOULD / FUTURE

Transcript complet, historique conversationnel exhaustif et capsules enrichies relèvent de SHOULD / FUTURE tant qu’ils ne sont pas nécessaires à l’intégrité.

### Q.5 Confirmation

- Confirmation **non consommée** : peut être reperdue si le comportement reste fail-closed et impose re-confirmation / requalification ;
- Confirmation **consommée portant autorité** : durable / reconstructible ;
- aucune Confirmation, mémoire ou HumanDecision ne peut être inventée.

Information absente → requalification, jamais extrapolation.

### Q.6 État MVP

Le MVP est honnête sur ses limites process-local. Product Completion transforme cette honnêteté en continuité sémantique MUST, sans imposer le transcript intégral ni choisir le mécanisme technique dans C1.

---

## R. Exigences non fonctionnelles candidates

Aucun seuil ni solution inventés.

| NFR | Besoin produit | Risque | Preuve future attendue |
| --- | --- | --- | --- |
| Sécurité | Autorité effective bornée | Authority leak | Refus / STOP sur frontière non autorisée |
| Confidentialité | Minimiser le contexte exposé | Fuite projet / secrets | Politique et Evidence sans secrets |
| Traçabilité | Relier Project → Decision → Contract → Attempt → Evidence | Histoire opaque | Chaîne audit lisible |
| Auditabilité | Reconstituer autorité et résultat | Faux GO / faux succès | État durable / reconstructible |
| Réversibilité | Savoir arrêter / revenir | Mutation irréversible silencieuse | Policy / rollback proportionnés |
| Fiabilité | SUCCESS / STOP / FAIL honnêtes | Failure masquée | Preuves terminales cohérentes |
| Restart-safety | Reprendre sans mémoire inventée | Continuité artificielle | Reprise inter-session |
| Accessibilité | Product Experience utilisable | Exclusion | Validation future sur référentiel choisi |
| Performance | Interaction / exécution praticables | Latence / timeout mal interprété | Mesures sans SLA inventé |
| Coût | Identifier les inducteurs | Coût opaque | Traces FinOps si besoin réel |
| Maintenabilité | Réutiliser le backbone / éviter N moteurs | Fragmentation | Architecture sans parallèle |
| Observabilité | Diagnostiquer sans second SoT | Journal opaque | Événements reliés aux artefacts |
| Interopérabilité | Découpler EC natif et adaptateurs | Lock-in | Contrats d’adaptation |
| Dépendance fournisseurs | OpenAI / Cursor peuvent varier | Indisponibilité | Mode STOP / dégradé honnête |
| Rétention | Garder l’utile sans transcript par défaut | Volume / privacy | Politique qualifiée en conception |
| Sobriété | Ne pas surcharger contexte / confirmations | UX et coût | Questions adaptatives / contexte proportionné |

Les blocs spécialisés FinOps, GreenOps, RGPD, Performance, RSSI, DevOps, Release et RUN ne sont pas exécutés dans ce cycle.

---

## S. Dette héritée et gaps Product Completion

### S.1 Principe de priorité

Une dette héritée n’a pas priorité parce qu’elle est ancienne. Elle est traitée lorsqu’elle :

- bloque une capacité MUST ;
- bloque une preuve requise ;
- bloque une condition de sûreté.

Sinon elle reste gouvernée et routée. **Product Completion gap ≠ PRE-M6 debt.**

### S.2 Routage requalifié

| ID | Statut / interprétation validée | Condition de traitement / preuve |
| --- | --- | --- |
| **UAT-UX-06** | OPEN · Evidence doit devenir business-first | Pilote comprend résultat sans dépendre des IDs |
| **UAT-RECOVERY-03** | OPEN · Confirmation consommée portant autorité doit être durable / reconstructible | Reload sans faux GO ni silent execute |
| **V3-F10 / M5-C** | OPEN · dette temporaire gouvernée ; journal non cible | Owner + safety equivalence + gate Morris pour retrait |
| **CONV-PL** | OPEN · gap de continuité sémantique inter-session | Nora reprend le contexte suffisant |
| **PROP-PL** | OPEN · Proposal / Recommendation active doit être reprenable / reconstructible | Arbitrage courant repris honnêtement |
| **CONF-PL** | OPEN · aligner fail-closed et autorité consommée | Non consommée re-confirmée ; consommée auditable |
| **N7-HID** | OPEN · harness-only QA debt | Assertions alignées sur Evidence métier / IDs secondaires |
| **G-UX-08 AMEND** | Réserve non bloquante | Traiter si bloque le parcours décisionnel retenu |
| **CURSOR_REAL_TIMEOUT_POLICY** | Réserve technique | Timeout ≠ business success ; qualifier pour future classe REAL |

La couverture complète du catalogue applicable, la boucle générique Product Completion et runtime adoption ne sont **pas** des dettes PRE-M6.

Aucune dette n’est remboursée dans ce cycle documentaire.

---

## T. Risques structurants

| ID | Risque | Impact | Mitigation de cadrage |
| --- | --- | --- | --- |
| R-01 | Overfit au MVP ou reconstruction inutile du prouvé | Produit trop étroit ou perte M1–M5 | KEEP backbone + completion bar |
| R-02 | Reconstruction au lieu de reuse | Rework transverse | Classifications explicites |
| R-03 | Architecture parallèle | Second produit / second SoT | Interdiction R6 |
| R-04 | Complexité interne exposée au Pilote | Charge cognitive | Product Experience business-first |
| R-05 | Questionnaire déguisé | Nora mécanique | Questions adaptatives |
| R-06 | Automatisation excessive | HumanDecision contournée | Pilote + gates proportionnés |
| R-07 | Authority leak | Effet non autorisé | Intersection d’autorité effective |
| R-08 | Fake / REAL divergence | Fausse preuve | Preuves classées, aucun nouveau REAL ici |
| R-09 | Second SoT | État contradictoire | Git / Evidence / provenance |
| R-10 | Continuité confondue avec transcript exhaustif | Sur-persistence | Continuité sémantique MUST, transcript non requis |
| R-11 | Dépendance OpenAI / Cursor | Indisponibilité / coût | Adaptateurs + STOP honnête |
| R-12 | Scope produit trop large | Trajectoire infinie | MUST / SHOULD / FUTURE |
| R-13 | Confusion Project / Cycle | Mauvais pilotage | Objets et parcours distincts |
| R-14 | Confusion Roadmap / ProjectTrajectory / catalogue | Waterfall ou modèle figé | Distinctions §N / §X |
| R-15 | Mauvaise gouvernance de dette | Micro-hardening ou blocker oublié | Priorité par MUST / preuve / sûreté |
| R-16 | Couverture cognitive confondue avec généricité d’exécution | N moteurs / N campagnes arbitraires | Catalogue évolutif + mécanisme générique |
| R-17 | Régression du native EC face au template canonique | Contrat incomplet / opaque | Parité fonctionnelle minimale |
| R-18 | Drift doctrine / C1 / Roadmap | C2 sur cible stale | Sync dédiée avant gate C2 |
| R-19 | Continuité artificielle / mémoire inventée | Faux contexte / faux GO | Requalification si information absente |
| R-20 | ExecutionContract surcontraignant le HOW | Perte d’autonomie / fragilité | Contraindre seulement pour raison gouvernée |

---

## U. Inconnues résiduelles

Seules les inconnues susceptibles de modifier significativement conception, preuve ou trajectoire restent ouvertes :

| ID | Inconnue | Impact à qualifier en conception |
| --- | --- | --- |
| U-01 | Profondeur et types de PJ / sources utilisateur | Scope intake, provenance, rétention |
| U-02 | Frontières d’autorité et gates à matérialiser | Confirmation, protections, escalade |
| U-03 | Niveau exact de preuve de généricité | Barre de preuve sans campagne arbitraire |
| U-04 | Représentation native de l’ExecutionContract préservant parité et intelligibilité | Modèle fonctionnel / progressive disclosure |
| U-05 | Situations / cycles représentatifs de la preuve | Contraste suffisant, nombre non décidé |

Ne sont plus des inconnues :

- rôle Pilote vs Morris runtime ;
- nécessité de continuité sémantique ;
- ProjectTrajectory MUST ;
- mécanisme générique vs N moteurs ;
- nombre fixe 15 ;
- séquencement M6 / M7 ;
- multi-user maintenant ;
- completion bar Product Completion.

---

## V. Disposition historique M6 / M7

### V.1 Décision

> **M6 / M7 — HISTORICAL MILESTONES — SUPERSEDED / ABSORBED BY PRODUCT COMPLETION.**

Ils ne sont pas effacés de l’histoire et restent présents dans la Roadmap versionnée tant que le cycle de synchronisation n’a pas été exécuté. Ils sortent du forward critical path.

### V.2 M6 historique

La notion de boucle projet complète de M6 est absorbée dans les MUST Product Completion :

- native ExecutionContract ;
- AgentCapability ;
- exécution générique ;
- SUCCESS / STOP / FAIL ;
- Evidence → Nora → LPS / ProjectTrajectory ;
- continuité et prochaine décision.

M6 n’est plus une option active, un futur jalon à recut ni une autorisation de Delivery.

### V.3 M7 historique

La notion de `15/15` CKC de M7 est absorbée dans :

- couverture cognitive complète du catalogue applicable ;
- Cycle Catalog Evolvability ;
- validation cognitive sans autorité d’exécution.

`15/15` reste une mesure historique / courante, pas une cible structurelle fixe. Il n’existe plus de séquencement actif M6 → M7 ni de choix 15-A / 15-B / 15-C.

### V.4 M8

M8 n’est pas requalifié, supprimé ou développé dans ce C1. Runtime v3 reste **NON ADOPTED**.

---

## W. Critères de succès, sortie C1 et cohérence

### W.1 Succès du contenu C1 validé

- cible Product Completion explicite ;
- completion bar adoptée ;
- intention séparée des solutions ;
- rôle Pilote et gouvernance humaine clarifiés ;
- MUST / SHOULD / FUTURE / OOS cohérents ;
- capacités et parcours E2E ;
- EC / AgentCapability / Cursor correctement séparés ;
- catalogue de cycles évolutif ;
- continuité inter-session MUST ;
- NFR sans solution inventée ;
- dette routée ;
- risques structurants ;
- vraies inconnues résiduelles seulement ;
- M6 / M7 historiques et absorbés ;
- ProjectTrajectory de construction adoptée ;
- impacts doctrine / Roadmap identifiés ;
- Decision Pack réduit aux décisions structurantes ;
- prochain cycle recommandé mais non autorisé.

### W.2 Succès Product Completion futur

L’ensemble des MUST doit former une boucle utilisable, gouvernée, restart-safe et prouvée. Une implémentation partielle, un terminal technique, une coverage cognitive seule ou une preuve sur un unique cas spécialisé ne suffisent pas.

### W.3 Exit de l’intégration C1 (consommé)

L’intégration C1 est consommée :

- décision A→Y portée fidèlement ;
- Review Pack FULL et Review Handoff vérifiés ;
- commit projet `674d0870fffcb7310b04505c0f5a8149293b42f6` ;
- PR #364 mergée dans `main` via `d83be84ab93650f23bfe54870790cc2e839be095` ;
- sources aval intentionnellement laissées inchangées dans la PR #364.

Le présent cycle prépare uniquement la candidate locale de synchronisation gouvernance/doctrine.

### W.4 Invariants de cohérence

- aucune section active ne présente Morris comme rôle runtime ;
- ProjectTrajectory est MUST ;
- continuité sémantique inter-session est MUST ;
- AgentCapability n’est pas un feature catalog Cursor ;
- le nombre 15 n’est pas un invariant produit ;
- M6 / M7 ne sont pas des milestones forward actifs ;
- la trajectoire n’impose pas C2 → C3 → C4 ;
- D-PC-02…06 ne sont plus des décisions ouvertes ;
- C2 reste recommandé mais **C2 EXECUTION NOT AUTHORIZED** ;
- aucune source aval n’est prétendue déjà synchronisée.

---

## X. Product Completion ProjectTrajectory adoptée

### X.1 Statut

La trajectoire de construction suivante est **ADOPTED BY MORRIS — 2026-08-19** via `D-PC-07`. Son caractère adaptatif signifie que chaque sortie requalifie la suite ; elle n’autorise aucune transition automatique.

```text
MVP baseline
  → C1 Cadrage
  → validation Morris                     [CONSOMMÉE 2026-08-19]
  → review ChatGPT / Morris               [CONSOMMÉE]
  → intégration Git du C1                 [CONSOMMÉE — PR #364 / d83be84]
  → synchronisation gouvernance / doctrine [CANDIDATE LOCALE — PRÉSENT CYCLE]
  → revue Morris / gate d’intégration Git
  → vérification post-merge repo coherence
  → gate Morris C2
  → Cycle 2 Conception fonctionnelle recommandé
  → requalification dynamique de ProjectTrajectory
  → cycles nécessaires selon gaps / dépendances
  → conception suffisante par capacité
  → slicing / Delivery E2E incrémental
  → QA / proof par tranche
  → Nora / replanification
  → capacité suivante
  → Product Completion integrated proof
  → décision Morris de completion
```

### X.2 Règles de trajectoire

- **Architecture fonctionnelle** : conditionnelle si des frontières, rôles ou flux structurants doivent réellement être formalisés.
- **UX/UI** : probablement nécessaire ; position déterminée par dépendances, pas par numéro fixe.
- **Backlog** : incrémental avant les Delivery concernées, pas nécessairement intégral avant tout code.
- **Architecture technique** : delta uniquement si besoin structurel réel.
- **QA** : par tranche plus éventuelle preuve intégrée finale.
- **Sécurité / DevOps / Release / RUN** : conditionnels à un besoin réel.
- **PR readiness / post-merge / capitalisation** : transverses aux intégrations pertinentes, pas étapes métier fixes.

### X.3 Next-cycle recommendation

Cycle 2 — Conception fonctionnelle est la prochaine capacité produit recommandée parce que le WHAT est cadré et que les principaux gaps portent d’abord sur comportements et règles fonctionnels.

C2 pourra détailler :

- qualification / reasoning Nora ;
- ProjectTrajectory ;
- HumanDecision / Recommendation ;
- native ExecutionContract ;
- authority envelope ;
- Confirmation ;
- STOP / FAIL ;
- Evidence return ;
- recovery context ;
- cycle catalog / CKC behavior ;
- histoire / mémoire / provenance.

La sortie C2 devra requalifier la trajectoire. Aucun C3 / cycle UX / Delivery n’est automatique.

> **RECOMMENDED NEXT CYCLE ≠ EXECUTION AUTHORIZED.**

---

## Y. Décisions, réutilisation, impacts repository et gate

### Y.1 Decision Pack final

#### D-PC-01 — PRODUCT COMPLETION TARGET / SCOPE

| Champ | Valeur |
| --- | --- |
| **Statut** | **ADOPTED BY MORRIS — 2026-08-19** |
| **Objet** | Cible, completion bar, MUST / SHOULD / FUTURE / OOS révisés |
| **Effet** | Remplace le périmètre candidat antérieur |
| **Anti-claim** | Adoption de contenu + intégration Git C1 **≠** Delivery · **≠** synchronisation aval intégrée |

#### D-PC-07 — PRODUCT COMPLETION TRAJECTORY

| Champ | Valeur |
| --- | --- |
| **Statut** | **ADOPTED BY MORRIS — 2026-08-19** |
| **Objet** | Trajectoire adaptative par capacités / dépendances ; M6 / M7 absorbés ; sync Git avant conception sur sources stale |
| **Effet** | Remplace la séquence waterfall candidate |
| **Anti-claim** | Trajectoire adoptée ≠ transitions autorisées |

#### D-PC-08 — NEXT CYCLE RECOMMENDATION

| Champ | Valeur |
| --- | --- |
| **Statut** | **ADOPTED BY MORRIS AS TRAJECTORY RECOMMENDATION — 2026-08-19** |
| **Objet** | Cycle 2 — Conception fonctionnelle recommandé après repo coherence |
| **Anti-claim** | **C2 EXECUTION NOT AUTHORIZED** |

### Y.2 Disposition des décisions antérieures

| ID | Disposition |
| --- | --- |
| **D-PC-02** | **ABSORBED INTO D-PC-01** — rôle runtime = Pilote |
| **D-PC-03** | **SUPERSEDED** — disposition M6 / M7 + catalogue évolutif |
| **D-PC-04** | **ABSORBED** — principes durability / continuity fixés ; représentation technique ultérieure |
| **D-PC-05** | **ORIGINAL FORMULATION REPLACED** — EC + AgentCapability authority envelope ; pas de primitive Cursor feature catalog |
| **D-PC-06** | **ABSORBED INTO SCOPE** — PJ / source intake SHOULD ; détails de conception ultérieurs |

Aucune de ces décisions ne reste un arbitrage Morris ouvert.

### Y.3 Reuse matrix finale

| Actif | Classe | Traitement Product Completion |
| --- | --- | --- |
| M1–M5 | **KEEP** | Backbone prouvé |
| PRE-M6 functional backbone | **KEEP / ADAPT** | Base produit, pas cible finale |
| PRE-M6 UX Evidence / lessons | **HARVEST** | Apprentissage, pas contrat visuel |
| PRE-M6 presentation | Historical reference | Pas le default final |
| v3 framing `30`–`37` | **KEEP / ADAPT selectively** | Baseline doctrine actuelle ; sync candidate locale post-C1 |
| Build Doctrine | **KEEP** | Lois de construction |
| Convergence Roadmap | **KEEP / REQUALIFY + SYNC later** | Artefact vivant |
| Studio ExecutionContract | **KEEP / ADAPT** | Parité fonctionnelle + runtime v3 |
| Logique template Cursor canonique v2.6 | **HARVEST** | Baseline fonctionnelle, jamais doctrine runtime |
| ProjectTrajectory | **COMPLETE / ADAPT** | MUST core |
| PJ / source intake | **NEW SHOULD** | Profondeur à concevoir |
| D1 / OPS1 / execution-run | **FREEZE / RETIRE LATER / HARVEST utile** | Aucun moteur parallèle |
| M6 / M7 | **SUPERSEDED / ABSORBED** | Trace historique conservée |

Les docs historiques `04`–`07` restent des actifs de provenance / harvest. Leur ancien postulat v2.6 Option C et leur trajectoire POC sont superseded pour la cible Studio.

### Y.4 Impacts doctrinaux et synchronisation repository

Cette section identifiait les impacts futurs lors du C1. Le présent cycle les applique **localement et sélectivement** dans les sources concernées. Leur intégration Git reste soumise à une revue / décision Morris distincte.

| # | Sujet | Sources probablement impactées | Traitement futur |
| --- | --- | --- | --- |
| 1 | **Pilote runtime** | Build Doctrine / framing applicable | ADAPT candidate locale ; distinction rôle runtime / Morris construction |
| 2 | **AgentCapability** | framing `34` | ADAPT candidate locale vers authority / governance envelope ; taxonomie policy / effects conservée |
| 3 | **ExecutionContract** | framing `30`, `34`, `36` et sources liées | COMPLETE / ADAPT candidate locale vers parité fonctionnelle canonique |
| 4 | **ProjectTrajectory** | framing `32` / Roadmap | COMPLETE / align MUST core dans la candidate |
| 5 | **Cycle Catalog Evolvability** | framing `30`, `36`, Roadmap | COMPLETE / REQUALIFY dans la candidate ; aucune promotion méthode globale |
| 6 | **M6 / M7** | Convergence Roadmap | SUPERSEDE / ABSORB dans la lecture active ; historique conservé |
| 7 | **Continuity / recovery** | framing LPS / trajectory et Roadmap liée | COMPLETE candidate vers semantic inter-session continuity MUST |
| 8 | **PRE-M6 reuse / Product Experience** | Roadmap / sources design applicables | KEEP / HARVEST ; pas de legacy presentation default |

Règle de synchronisation :

```text
C1 intégré sur main
  → synchronisation gouvernance/doctrine candidate
  → revue Morris / intégration Git distincte
  → vérification post-merge repo coherence
  → gate Morris pour C2
```

La divergence temporaire entre C1 et les sources versionnées devient une candidate locale de synchronisation. Elle n’est pas résolue sur `main` avant son intégration Git distincte.

### Y.5 Non-claims finaux

Le document peut dire :

- C1 revised content **VALIDATED BY MORRIS** ;
- C1 **INTEGRATED ON MAIN** via PR #364 / `d83be84ab93650f23bfe54870790cc2e839be095` ;
- Product Completion Target / Scope **ADOPTED BY MORRIS** ;
- Product Completion Trajectory **ADOPTED BY MORRIS** ;
- C2 Conception fonctionnelle **ADOPTED AS NEXT-CYCLE RECOMMENDATION**.

Le document ne dit pas :

- synchronisation Roadmap / Build Doctrine / framing `30`–`37` déjà intégrée à `main` ;
- repo coherence final obtenue sur `main` ;
- C2 autorisé ou démarré ;
- architecture / persistence / schema / API choisis ;
- UX / Figma Product Completion finalisés ;
- backlog défini ;
- Delivery autorisée ;
- generic execution Product Completion prouvée ;
- couverture CKC Product Completion déjà implémentée ;
- disposition M6 / M7 déjà synchronisée sur `main` (elle reste candidate locale jusqu’à intégration Git) ;
- runtime v3 ADOPTED ;
- v3 promu baseline méthodologique globale ;
- nouvelle preuve REAL.

### Y.6 Gate final

```text
C1 INTEGRATED ON MAIN
  → GOVERNANCE/DOCTRINE SYNC CANDIDATE
  → MORRIS REVIEW / GIT INTEGRATION GATE
  → POST-MERGE REPO COHERENCE
  → MORRIS GATE FOR C2 EXECUTION
```

**Aucune transition automatique vers C2.**

---

*SFIA Studio — Product Completion — Cycle 1 Cadrage — VALIDATED BY MORRIS — INTEGRATED ON MAIN — GOVERNANCE/DOCTRINE SYNC CANDIDATE PENDING REVIEW.*
