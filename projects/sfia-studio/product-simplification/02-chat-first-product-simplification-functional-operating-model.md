# SFIA Studio — Chat-First Product Simplification — P2 Functional Operating Model

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Cycle projet** | **2 — Conception fonctionnelle** |
| **Milestone** | **P2 — FUNCTIONAL OPERATING MODEL** |
| **Pass** | **FINAL GIT INTEGRATION** — P2 VALIDATED BY MORRIS · commit / push / PR / merge |
| **Profil** | **CRITICAL** |
| **Typologie v2.4** | **DOC** — consolidation documentaire structurante dans un macro **EVOL** ; **aucun** code produit |
| **Autorité** | **D-SIMP-06…08 CONSUMED** · **P2-D-01…P2-D-04 ADOPTED BY MORRIS** · **P2 VALIDATED BY MORRIS** (2026-10-03 Europe/Paris — explicit Morris decision) |
| **C1** | **VALIDATED BY MORRIS** + **INTEGRATED ON MAIN** + **POST-MERGE VERIFIED** + **Cycle 1 CLOSED** |
| **C1 evidence** | PR **#548** MERGED · merge/main `642a10c87bdad2ef4291bf8b7294872c2b14be90` |
| **Branche** | `docs/sfia-studio-chat-first-product-simplification-p2-functional-operating-model` |
| **Base Git** | `origin/main` @ `642a10c87bdad2ef4291bf8b7294872c2b14be90` |
| **CKC Studio-native** | `ckc:studio:functional-design` / `cyc:functional-design` — guidance only · **authority NONE** |
| **Statut du document** | **P2 VALIDATED BY MORRIS** · Guided Review §§1–22 **COMPLETE** · Final Documentary Consolidation **COMPLETE** · Final Critical Review P2 #1 = **NOT READY — TARGETED CORRECTION REQUIRED** [historical] · Targeted Correction Pass 01 = **COMPLETE** · FCR-P2-01/02 = **CLOSED** · ChatGPT Closure Review P2 = **PASS** · Morris validation P2 = **CONSUMED** · Git integration P2 = **AUTHORIZED / IN PROGRESS** · **P3 GO = NOT AUTHORIZED** · next after merge = **DISTINCT MORRIS GO P3** |
| **P3→P8** | **NOT AUTHORIZED** |
| **READY FOR REAL** | **NO** |
| **Runtime v3** | **NON ADOPTED** |
| **Production model routing** | **NOT SELECTED** |
| **Cognitive Completion** | **NOT PROVEN** |
| **Canonical Orchestration Spine** | **CANDIDATE ONLY** |
| **Pilot–Nora–Studio technical architecture** | **NOT ADOPTED** |
| **SharedKnowledgeStore** | **NOT SELECTED / NOT REQUIRED BY P2** |
| **Langue** | Français (identifiants canoniques préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md` |
| **Date** | 2026-10-03 · Europe/Paris |

> **Lecture rapide.** Ce document définit **HOW STUDIO FUNCTIONS AS A PRODUCT** (comment Studio fonctionne comme produit). Guided Review §§1–22 **COMPLETE**. Décisions **P2-D-01…P2-D-04 ADOPTED BY MORRIS**. ChatGPT Closure Review P2 = **PASS**. **P2 VALIDATED BY MORRIS** (2026-10-03 Europe/Paris). Git integration **AUTHORIZED / IN PROGRESS**. Document majoritairement francophone pour consultation Morris, avec identifiants canoniques préservés. **≠ P3 AUTHORIZED.** **≠ architecture.** **≠ UX.** **≠ code.** **≠ REAL.** Merge P2 **≠** GO P3.

**D-SIMP-06** — **CONSUMED** : autoriser le démarrage P2.

**D-SIMP-07** — **CONSUMED** : valider Guided Review §§1–11 et autoriser Checkpoint 01 consolidation.

**D-SIMP-08** — **CONSUMED** : autoriser Checkpoint 01 Targeted Correction Pass après Critical Review.

**P2 VALIDATED BY MORRIS** — **CONSUMED** : décision Morris explicite 2026-10-03 Europe/Paris · Git integration AUTHORIZED.

---

## 1. Métadonnées / Autorité / Statut

### 1.1 Étiquettes épistémiques

| Étiquette | Signification |
| --- | --- |
| **VALIDATED INPUT** | Contraint par C1 validé / décisions Morris déjà consommées (dont P2-D-*) |
| **CURRENT FACT** | Établi par Git / PR / main / tests au périmètre revu |
| **HARVESTED PATTERN** | Motif utile des actifs existants — adapter, ne pas copier aveuglément |
| **P2 CANDIDATE** | Sémantique fonctionnelle proposée — devient **VALIDATED INPUT** seulement via le gate Morris applicable |
| **OPEN QUESTION** | Nécessite encore analyse / aval |
| **MORRIS DECISION REQUIRED** | Choix de politique produit structurante non consommable par Cursor |
| **ROUTED TO P3 / P4 / P6 / P7 / P8** | Explicitement différé à une phase aval autorisée |

### 1.2 Invariant — Guided Review ≠ validation P2

```text
L’acceptation Guided Review d’une section
  ≠ validation globale P2.

Un énoncé P2 CANDIDATE devient VALIDATED INPUT
uniquement via la validation / le gate Morris applicable.
```

### 1.3 Statuts courants (Final Git Integration)

```text
C1 = VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED
D-SIMP-06 / D-SIMP-07 / D-SIMP-08 = CONSUMED
P2-D-01 / P2-D-02 / P2-D-03 / P2-D-04 = ADOPTED BY MORRIS
Guided Review §§1–22 = COMPLETE
Checkpoint 01 = CLOSED — PASS
Final Documentary Consolidation = COMPLETE
Final Critical Review P2 #1 = NOT READY — TARGETED CORRECTION REQUIRED [historical]
FCR-P2-01 = CLOSED
FCR-P2-02 = CLOSED
Targeted Correction Pass 01 = COMPLETE
ChatGPT Closure Review P2 = PASS
P2 = VALIDATED BY MORRIS
Morris validation P2 = CONSUMED
Git integration P2 = AUTHORIZED / IN PROGRESS
P2 INTEGRATED ON MAIN = PENDING MERGE (truth after merge = Git main)
P3 GO = NOT AUTHORIZED
P3→P8 = NOT AUTHORIZED
ZERO REAL
runtime v3 = NON ADOPTED
production routing = NOT SELECTED
Cognitive Completion = NOT PROVEN
next after successful merge/post-merge = DISTINCT MORRIS GO P3
```

> Note : le texte C1 peut encore contenir des formulations pré-merge. **CURRENT TRUTH** = Git main + PR #548 + preuves post-merge. Ce pass ne réécrit pas C1.

---

## 2. Hiérarchie de sources / décisions héritées / anti-claims

### 2.1 Autorité / propriété de vérité par domaine

Les sources de domaines d’autorité différents ne se remplacent **pas** automatiquement via un classement numérique global.

| Domaine | Sources autoritatives | Établit |
| --- | --- | --- |
| **Current implementation / proof** | Git / PR / tests / faits runtime | Ce qui existe / ce qui est prouvé au périmètre testé |
| **Studio construction / governance** | Décisions Morris de construction + Build Doctrine / Roadmap applicables | Ce qui peut être construit/promu et les gates de construction |
| **Runtime Project authority** | HumanDecisions du Pilote | Choix humains runtime du Project |
| **Macro Product framing** | C1 validé | Contraintes de cible / scope / trajectoire de ce macro de simplification |
| **Target Product doctrine** | Framings v3 30–37 | Invariants cibles applicables |
| **Cognitive guidance** | CKC applicable | Guidance only · **authority NONE** |
| **Existing architecture / assets** | D-ER / Nora / docs projet / code courant | Preuves KEEP/HARVEST/ADAPT · **≠** autorité cible automatique |
| **External process** | Templates / routing v2.6 | Processus ChatGPT↔Cursor uniquement |
| **Conversation / recommendation / hypothesis** | Conversation | Non autoritatif jusqu’à promotion/matérialisation applicable |

> **Aucun rang de précédence global** entre domaines d’autorité. Les libellés de domaine sont des noms — pas une hiérarchie ordonnée. Les contradictions se résolvent selon le domaine de vérité/autorité applicable.

### 2.1.1 Règle de contradiction — écart CURRENT vs TARGET

```text
C1 TARGET = X
Git CURRENT = Y
→ écart Current→Target

PAS : « Git a un rang plus élevé donc la doctrine est fausse »
PAS : « la doctrine dit X donc prétendre que le code courant fait déjà X »
```

**Autorité de construction Morris ≠ autorité HumanDecision runtime du Pilote.**

### 2.2 Décisions Morris héritées (NE PAS ROUVRIR)

| ID | Décision | Statut |
| --- | --- | --- |
| **D-SIMP-01…05** | Trajectoire / consolidations / validation C1 | **CONSUMED** |
| **D-SIMP-06** | Autoriser P2 Functional Operating Model | **CONSUMED** |
| **D-SIMP-07** | Valider Guided Review §§1–11 + autoriser consolidation Checkpoint 01 | **CONSUMED** |
| **D-SIMP-08** | Autoriser Targeted Correction Pass Checkpoint 01 après Critical Review | **CONSUMED** |
| **P2-D-01** | Recommendation disposition vs HumanDecision | **ADOPTED BY MORRIS** |
| **P2-D-02** | Matérialité de fermeture de Cycle | **ADOPTED BY MORRIS** |
| **P2-D-03** | Frontière de Confirmation | **ADOPTED BY MORRIS** |
| **P2-D-04** | Lifecycle Progression & Project Closure Authority | **ADOPTED BY MORRIS** |

### 2.3 Invariants C1 préservés (**VALIDATED INPUT**)

1. CHAT-FIRST ≠ CHAT-ONLY.
2. Conversation / Nora = canal d’interaction primaire.
3. Cycle Journal / Memory = KEEP/HARVEST/ADAPT CORE · dérivé · **≠** source of truth.
4. Cycle Lifecycle ≠ Execution Lifecycle.
5. ExecutionContract = branche optionnelle/transverse · **≠** prochaine étape obligatoire.
6. Un Cycle PEUT se terminer sans Execution.
7. Artifact exists ≠ Exit proof satisfied.
8. Execution SUCCESS ≠ Cycle COMPLETE.
9. Un Artifact requis doit être revu/validé contre les critères de sortie applicables.
10. Un Cycle peut invoquer 0 / 1 / N executions.
11. Deliverable expected ≠ execute now.
12. Le besoin de Deliverable peut émerger de Nora OU du Pilote.
13. Recommendation ≠ HumanDecision.
14. Phrase ≠ HumanDecision automatiquement.
15. Le Pilote reste l’autorité HumanDecision runtime.
16. Nora = UNDERSTAND / REASON / CHALLENGE / RECOMMEND.
17. Studio = RESOLVE / VALIDATE / MATERIALIZE / ENFORCE.
18. Compréhension probabiliste / effets déterministes.
19. Un propriétaire autoritatif par domaine de vérité.
20. Projections dérivées role-aware autorisées.
21. Pilote / Nora / Studio opèrent sur le même monde sémantique gouverné sans autorité partagée.
22. Pas d’hypothèse SharedKnowledgeStore.
23. Canonical Orchestration Spine = CANDIDATE only.
24. L’orchestration générique peut généraliser les mécaniques, PAS les sémantiques de domaine.
25. Méthodologie implicite mais effective : Studio résout DoctrinePackage / CKC applicables.
26. Le Pilote n’administre pas les internals SFIA en flux nominal.
27. Aucune claim d’adoption runtime v3.
28. Production model routing NOT SELECTED.
29. CW0–CW3 = bandes de charge cognitive candidates, PAS niveaux d’autorité.
30. Cognitive escalation ≠ authority escalation.

### 2.4 Anti-claims (ce document)

Ce document **ne signifie pas** :

1. **P3 / P4 / P5 / P6 / P7 / P8 AUTHORIZED** — P2 VALIDATED BY MORRIS **≠** GO P3
2. Architecture / persistence / API / schema sélectionnés
3. UX / Figma / routes React sélectionnés
4. Canonical Orchestration Spine adopted
5. SharedKnowledgeStore selected
6. DecisionBasis universel finalisé
7. Enums techniques Cycle/Execution sélectionnés
8. Production model routing selected
9. Cognitive Completion proven
10. READY FOR REAL
11. runtime v3 ADOPTED
12. ExecutionContract requis pour chaque Cycle
13. Execution SUCCESS ferme un Cycle
14. Artifact exists satisfait Exit Proof
15. Journal / Memory = source of truth
16. Functional Routes = runtime taxonomy
17. Cycle close = activation automatique du Cycle suivant
18. Last Cycle closed = Project Close automatique
19. Merge P2 = automatic P3 authorization
20. READY FOR REAL / production routing selected via P2 validation alone

---

## 3. Mission P2 / frontières du Functional Operating Model

### 3.1 Mission (**VALIDATED INPUT**)

**P2 = HOW STUDIO FUNCTIONS AS A PRODUCT** — comment Studio fonctionne comme produit.

Il définit le comportement fonctionnel observable pour :

- acteurs et responsabilités ;
- lifecycles Project / Cycle ;
- qualification du travail et absorption méthodologique ;
- conversation → outcomes Product ;
- matérialité / HumanDecision / Confirmation ;
- lifecycle Deliverable ;
- Execution Branch optionnelle ;
- review / validation / exit-proof / fermeture de Cycle ;
- ProjectTrajectory / replanning ;
- sémantiques Journal / Memory ;
- Recovery / resume ;
- Functional Routes représentatives ;
- frontière fonctionnelle de fiabilité cognitive (provider-agnostic).

### 3.2 Principes de conception

#### A. Contrats fonctionnels / invariants observables

P2 définit des comportements réutilisables ensuite comme contrats de design/preuve par P3/P4/P5/P6. Exemples :

- un Cycle peut fermer avec zéro Execution lorsque Exit Proof le permet ;
- Execution SUCCESS ≠ Cycle COMPLETE ;
- un Deliverable requis invalide/non validé laisse Exit Proof insatisfait.

#### B. Sémantique avant représentation technique

P2 définit les **sémantiques fonctionnelles** requises. **P4** détermine la représentation technique d’implémentation.

#### C. Suffisamment complet, pas exhaustivement combinatoire

P2 couvre les routes structurelles / invariants / alternatives significatives. Il ne modélise **pas** chaque micro-variante conversationnelle.

#### D. Candidats model / routing

P2/P4 peuvent exprimer besoins provider-agnostic, candidats de capacité et hypothèses de routing. **La promotion production model/routing reste P8** après preuves P6/P7 applicables.

### 3.3 Non-objectifs explicites

| Hors scope | Route |
| --- | --- |
| Pixel UX / Figma / contrat visuel | **ROUTED TO P3** |
| Routes React / layout / progressive disclosure UI | **ROUTED TO P3** |
| Architecture service / DB / schema / API | **ROUTED TO P4** |
| State machines techniques / sélection de store | **ROUTED TO P4** |
| Slicing Delivery / implémentation | **ROUTED TO P5** |
| Preuve Global Integrated Product QA | **ROUTED TO P6** |
| Fresh Project Replay / REAL | **ROUTED TO P7** (+ GO REAL distinct) |
| Adoption production routing / mapping modèle | **ROUTED TO P8** après preuves P6(+P7) |

---

## 4. Acteurs / responsabilités

### 4.A Acteurs Product runtime

| Acteur | Responsabilité | Ne doit pas |
| --- | --- | --- |
| **Pilote** | Exprimer intention/jugement Product ; HumanDecision ; consentement/Confirmation si requis ; s’orienter via conversation + surfaces de soutien | Administrer CKC, codes de mécanisme, taxonomie runtime ou autres internals SFIA en flux nominal ; inventer l’autorité ; confondre Option/Recommendation avec HD |
| **Nora** | UNDERSTAND / analyser / clarifier / challenger / recommander ; raisonnement probabiliste sur projection minimum-suffisante ; **signaler** un contexte insuffisant/ambigu plutôt qu’inventer faits ou autorité | Matérialiser HD ; posséder la vérité Product autoritative ; élargir l’autorité ; devenir second SoT |
| **Studio** | RESOLVE contre l’état autoritatif ; qualifier matérialité/effet/currentness/politique ; MATERIALIZE les outcomes gouvernés ; ENFORCE fail-closed ; construire les projections de rôle ; **orchestrer déterministiquement** la transition *contexte autoritatif courant → résultat cognitif → outcome sémantique résolu → matérialisation gouvernée si applicable → mise à jour de continuité → prochaine projection/contexte* (**sémantique fonctionnelle · ≠ architecture P4**) | Traiter un jugement probabiliste comme autorité ; inventer des décisions Pilote |
| **Executor / agent** | Exécution technique sous ExecutionContract lorsque Execution Branch est invoquée | Posséder les sémantiques Product ; décider la fermeture de Cycle ; inventer HD |
| **Validators / connectors** (optionnels, bornés) | Produire des inputs / faits / candidats Evidence selon provenance | HumanDecision automatique ; SoT Product concurrent |

**Executor result/claim ≠ verified Product fact.** La qualification/vérification Studio est requise lorsque applicable.

### 4.B Autorités de construction / gouvernance / preuves dépôt

| Autorité | Rôle | Ne doit pas |
| --- | --- | --- |
| **Morris** | Gouvernance de construction & gates dépôt — hors persona runtime | Se substituer à la HD runtime du Pilote |
| **Git** | Source de preuves dépôt / construction / versionnées — pas une persona runtime | Remplacer Product Store / autorité HD |

### 4.2 Information partagée ≠ autorité partagée · ownership ≠ visibility

- **SHARED INFORMATION ≠ SHARED AUTHORITY.**
- **OWNERSHIP ≠ VISIBILITY.** Un rôle n’a pas besoin de posséder un fait pour devoir y accéder.
- Invariant fonctionnel : tout fait **CURRENT** matériellement pertinent requis par Pilote/Nora/Studio doit être disponible via une projection de rôle appropriée. **P4 décide COMMENT.**
- Pas de SharedKnowledgeStore par défaut.
- Projections dérivées role-aware autorisées ; propriétaires autoritatifs uniques par domaine de vérité.

---

## 5. Boucle d’exploitation Product canonique — CANDIDATE

> Sémantiques de boucle consolidées. Toujours **≠** P2 globalement validé jusqu’à validation Morris de P2.

### 5.1 Boucle primaire (continuité Project / Cycle chat-first)

```text
Pilote ⇄ Conversation (canal primaire) — RÉCURSIVE / NON-WATERFALL

Studio :
  résoudre Project / état courant / sujet courant / travail courant
  résoudre DoctrinePackage / CKC / contraintes
  construire projection cognitive minimum-suffisante

Nora :
  UNDERSTAND → analyser / clarifier / challenger / recommander

Studio :
  RESOLVE l’outcome sémantique contre l’état autoritatif
  qualifier matérialité / effet / currentness / politique / autorité

Pilote :
  ARBITRATE / AUTHORIZE lorsque jugement / autorité humains sont requis

Studio :
  MATERIALIZE / ENFORCE l’outcome gouverné approprié lorsqu’autorisé
  (ou matérialiser un outcome déterministe déjà autorisé si aucun jugement humain n’est requis)

Outcomes sémantiques / matérialisations gouvernées possibles :
  · zero durable mutation (= outcome sémantique valide · ≠ une matérialisation)
  · mise à jour LPS factuelle / dérivée
  · Recommendation (éphémère ou durable si justifiée)
  · Recommendation disposition (M-DISP) — voir P2-D-01 · ≠ decided ProjectTrajectory
  · HumanDecision (M-HD) lorsque justifiée — voir P2-D-01
  · Reservation / Risk / Blocker (distincts)
  · trajectory Recommendation · requalification méthodologique · mise à jour decided ProjectTrajectory seulement après HumanDecision applicable si structurelle (P2-D-01)
  · attente de Deliverable
  · Confirmation comme protection autour d’un effet inspecté — voir P2-D-03 (≠ outcome HD)
  · execution intent → Execution Branch optionnelle

→ état de continuité autoritatif mis à jour lorsque applicable
→ projections de rôle rafraîchies / invalidées / reconstruites selon besoin
→ next action utile / état / blocker / condition d’attente / clarification
→ la conversation continue
```

### 5.2 Modèle conceptuel d’autorité

```text
UNDERSTAND (Nora)
  → RESOLVE (Studio)
  → ARBITRATE / AUTHORIZE (Pilote lorsque l’autorité humaine est requise)
  → MATERIALIZE / ENFORCE (Studio)
```

Si aucun jugement humain n’est requis, Studio peut matérialiser directement un outcome déterministe déjà autorisé.

Modèle **conceptuel** — **≠** ConversationalDecisionEngine mandaté.

### 5.3 Exemples de chemins (non exhaustifs)

- répondre / clarifier → zero durable mutation ;
- ambiguïté → clarification → boucle ;
- Recommendation → arbitrage Pilote si requis → matérialisation ;
- execution intent décidé → Execution Branch optionnelle → résultat Product → retour à la boucle Project/Cycle.

**Conversation ≠ mutation.**

**HumanDecision :** Studio ne peut matérialiser une HD que lorsque l’intention décisionnelle du Pilote et les conditions sujet/currentness/matérialité/autorité/provenance applicables sont satisfaites.

### 5.4 Contraste — CURRENT FACT vs TARGET

| Aspect | CURRENT FACT (résumé) | TARGET (P2) |
| --- | --- | --- |
| Interaction | Chat Nora-capable + multiples surfaces/gates | Chat primaire ; surfaces de soutien proportionnées |
| Binding | Désambiguïsation explicite fréquente | Studio résout sujet/currentness ; clarifier seulement si matériel |
| HD / disposition | Souvent via gates/modales | Capture conversationnelle lorsque garanties satisfaites · P2-D-01 |
| Execution | Fort chemin GE lorsqu’utilisé | Branche transverse optionnelle ; Cycle peut fermer avec 0 executions |
| Continuité | Journal #516/#517 + #547 intégrés | Journal comme projection orientation/control-tower ; pas second cockpit |

---

## 6. Lifecycle Project

### 6.1 Create

La création de Project établit un contexte Project durable et une continuité minimale viable.

Une ProjectTrajectory pleinement qualifiée **n’est PAS** obligatoire à la création. Le cadrage/proposition de trajectoire intervient lorsque le contexte est suffisant.

### 6.2 Current focus (≠ état de lifecycle)

**Activate / current focus** = quel Project est le focus conversationnel/cognitif courant.

**Current focus ≠ état de lifecycle Project.**

Un Project peut rester open tandis qu’un autre devient current focus.

### 6.3 Resume

Resume reconstruit la vérité/currentness autoritative **CURRENT**. Ne **pas** rejouer de stale conversational assumptions comme intention courante.

### 6.4 Pause vs interruption

| Concept | Signification |
| --- | --- |
| **Interruption / leave context** | Événement de session/attention → **ne** mute **pas** automatiquement le lifecycle Project |
| **Pause** | Suspension explicite de la progression Project lorsque fonctionnellement significative |

### 6.5 Requalify

- La requalification factuelle/méthodologique peut être **Studio-derived** lorsqu’elle n’altère pas intention/scope/direction/authority structurels du Pilote.
- Un changement structurel d’intention/scope/direction/authority exige l’autorité humaine applicable (**P2-D-01**).

### 6.6 Close / Abandon / Archive (distincts) — **P2-D-01** + **P2-D-04**

| Sémantique | Signification |
| --- | --- |
| **Close** | Le Project atteint les sémantiques de completion applicables |
| **Abandon** | Le Project se termine sans completion cible via un choix structurel humain |
| **Archive** | Préoccupation de rétention/visibilité · **≠** sémantique primaire de completion métier |

**Project Abandon**, lorsqu’il est l’acte structurel humain mettant fin au Project sans completion cible, **requiert HumanDecision sous P2-D-01**.

#### Project Close normal — **P2-D-04 ADOPTED BY MORRIS**

Studio peut matérialiser déterministiquement un **Project Close** normal uniquement lorsque :

- les sémantiques de completion/termination applicables sont déjà décidées ;
- les critères / Cycles / preuves requis sont satisfaits ;
- aucun blocker applicable ne subsiste ;
- aucune Reservation non résolue ayant un impact matériel sur la terminaison ne subsiste ;
- aucune continuation/replanification nécessitant un jugement structurel n’est ouverte ;
- aucun nouveau jugement structurel n’est nécessaire pour fermer.

```text
Last Cycle closed ≠ Project automatically closed
```

Cas terminal exceptionnel non couvert par une règle déterministe décidée :

```text
fail-closed → jugement Pilote → HumanDecision applicable
```

**P2-D-04** ne sélectionne aucun state machine technique, persistence, schema, API ni architecture runtime.

### 6.7 Invariants multi-Project

1. Focus switch ≠ mutation de lifecycle.
2. Le contexte conversationnel/cognitif courant est explicitement Project-bound.
3. Aucun sujet/recommendation/decision stale du Project A ne peut s’appliquer silencieusement au Project B.

**Aucun engagement d’enum DB/status en P2.**

---

## 7. Travail courant / lifecycle Cycle

### 7.A Sémantiques de lifecycle / existence (PAS d’enum technique)

Conceptuellement :

```text
candidate / proposed work
  → open Cycle
  → closed Cycle
```

**Current conversational / cognitive Cycle focus ≠ état de lifecycle** (séparé — voir §7.B).

Ne **pas** modéliser Proposed → Active → Progressing → Blocked → Exit candidate → Closed comme un seul axe plat. Pas d’enum lifecycle ACTIVE / CURRENT.

### 7.B Conditions courantes / états dérivés

Exemples (dérivés, pas nécessairement états de lifecycle durables) :

- progressing ;
- blocked ;
- reserved ;
- awaiting decision ;
- awaiting evidence ;
- exit eligible / exit candidate.

### 7.C Blocker vs Reservation

| Concept | Signification |
| --- | --- |
| **Blocker** | Empêche une progression/sortie requise |
| **Reservation** | Qualification/contrainte durable **non** automatiquement bloquante |

### 7.D Exit candidate / close / transition

- **Exit candidate** = éligibilité de fermeture dérivée · pas nécessairement un état de lifecycle durable.
- **Cycle close ≠ next Cycle activation.**
- Transition = candidat next-work / Cycle-transition · **≠** auto-waterfall.

### 7.E Fermeture de Cycle — **P2-D-02 ADOPTED BY MORRIS**

La fermeture de Cycle est **CONDITIONAL**. Elle n’est **PAS** universellement une HumanDecision.

Studio peut matérialiser une **fermeture de Cycle déterministe** lorsque :

- les critères de sortie applicables sont satisfaits ;
- Exit Proof requis est satisfait ;
- aucun finding bloquant ne demeure ;
- aucun jugement structurel humain non résolu ne demeure ;
- aucun changement d’intention/scope/authority Pilote n’est silencieusement inféré.

HumanDecision est requise **seulement lorsque** la fermeture elle-même exige encore un jugement structurel humain.

**Execution SUCCESS alone NEVER closes a Cycle.**

A–J / I1 / I2 restent des **références design/test uniquement** — pas une runtime taxonomy.

### 7.F Activation du Cycle suivant — **P2-D-04 ADOPTED BY MORRIS**

```text
Cycle close ≠ automatic next Cycle activation
```

Mais :

```text
next Cycle activation ≠ nouvelle HumanDecision obligatoire
lorsque la décision structurelle nécessaire existe déjà
```

Studio peut activer le Cycle suivant **sans nouvelle HumanDecision** uniquement lorsque :

- le Cycle courant est correctement clos ;
- la decided ProjectTrajectory courante identifie sans ambiguïté le prochain Cycle ;
- les conditions d’entrée applicables sont satisfaites ;
- aucune requalification/replanification structurelle non résolue n’existe ;
- aucun choix structurel entre plusieurs trajectoires n’est requis ;
- aucune nouvelle intention, extension de scope ou extension d’authority n’est créée.

Sinon :

```text
Recommendation / options
  → HumanDecision applicable du Pilote
  → decided ProjectTrajectory
  → activation lorsque les conditions sont ensuite satisfaites
```

Studio peut matérialiser déterministiquement une conséquence de lifecycle uniquement lorsque (**P2-D-04**) :

- elle est entièrement déterminée par une vérité Product déjà décidée ;
- les conditions applicables sont objectivement vérifiables et satisfaites ;
- aucun nouveau jugement structurel humain n’est nécessaire ;
- aucun changement implicite d’intention, scope, authority ou decided ProjectTrajectory n’est introduit.

### 7.G Reopen

Les cas exacts de reopen restent **OPEN**, avec l’invariant :

**La vérité historique d’un Cycle closed ne doit pas être silencieusement réécrite.**

Direction par défaut : append / supersede / requalify / corrective next work plutôt que muter l’historique.

### 7.H Contrats fonctionnels

- Un Cycle peut fermer avec 0 Execution.
- Execution SUCCESS alone never closes Cycle.
- Un exit blocker non résolu empêche la fermeture.
- Reservation n’est pas automatiquement un blocker.
- Cycle close ≠ next Cycle activation.
- L’historique closed n’est pas silencieusement réécrit.
- Last Cycle closed ≠ Project automatically closed.

```text
Cycle Lifecycle ≠ Execution Lifecycle
Execution Result ≠ Cycle Resolution
```

Un Cycle peut progresser/fermer avec **zéro** executions ; en invoquer **une** ; ou en invoquer **N** tout en restant OPEN jusqu’à satisfaction d’Exit Proof.

---

## 8. Qualification du travail / DoctrinePackage / CKC

### 8.1 Résolution sensible au contexte (pas un pipeline obligatoire par message)

```text
Intention Pilote + contexte autoritatif courant
  → résoudre / requalifier le travail courant lorsque nécessaire
  → résoudre DoctrinePackage / CKC / contraintes applicables
  → construire projection cognitive minimum-suffisante
  → Nora raisonne
```

### 8.2 Qualification Nora vs Studio

| Rôle | Rôle dans la qualification |
| --- | --- |
| **Nora** | Qualification cognitive candidate / ambiguïté / signal de risque |
| **Studio** | Résolution autoritative du travail courant, applicabilité, matérialité, currentness, politique et contraintes |

### 8.3 Absorption méthodologique

Le Pilote **n’administre PAS** CKC · DoctrinePackage · taxonomie de cycle · profil · codes de mécanisme internes en flux nominal.

Studio CKC = guidance · authority **NONE**. CKC process v2.6 = process only · **≠** doctrine runtime Studio.

### 8.4 Contexte minimum-suffisant + targeted retrieval

Défaut fonctionnel :

- projection minimum-suffisante ;
- targeted retrieval lorsque un contexte additionnel est réellement nécessaire.

La projection doit préserver ce qui est matériellement pertinent :

- statut sémantique ;
- currentness ;
- provenance ;
- decided vs proposed ;
- fait autoritatif vs claim / recommendation / hypothesis.

Architecture technique exacte de retrieval/contexte → **P4**. Évaluation qualité/coût/fiabilité → **P6**.

### 8.5 Modes CKC = guidance de posture cognitive uniquement

ASK / PROPOSE / PROCEED UNDER EXPLICIT HYPOTHESIS / CHALLENGE / ESCALATE TO HUMAN DECISION / PAUSE / STOP / REPLAN / RECOMMEND TRANSITION

ne créent **PAS** par eux-mêmes :

- HD ;
- fermeture de Cycle ;
- autorisation d’exécution ;
- état Product STOP ;
- changement autoritatif de trajectoire.

### 8.6 Requalification méthodologique

La requalification méthodologique interne/factuelle peut être Studio-derived si elle n’altère pas intention/scope/authority structurels du Pilote. Les changements structurels d’intention/scope/direction ne peuvent pas être dérivés silencieusement. Ne pas faire de « I2 » une runtime taxonomy.

---

## 9. Conversation → Product Outcome

### 9.1 Invariants durs

```text
Conversation ≠ durable mutation.
Conversation MAY produce Product outcomes.
Un tour conversationnel peut produire 0 / 1 / N governed materializations.
```

### 9.2 Sémantiques de matérialisation

```text
Conversation
  → interprétation sémantique
  → outcome sémantique
  → Studio résout matérialité / currentness / autorité / continuité / politique
  → 0 / 1 / N governed materializations
```

**Outcome sémantique ≠ représentation de stockage/matérialisation.**

### 9.3 Catalogue d’outcomes (sémantique)

| Outcome sémantique | Notes |
| --- | --- |
| **No durable mutation** | Clarification / exploration / challenge seulement |
| **LPS factual / derived update** | Ne pas attribuer faussement comme HD Pilote ; ne jamais contourner les sémantiques HD/matérialité |
| **Recommendation** | Peut rester éphémère ; durable seulement si continuité/matérialité/disposition le justifient |
| **Recommendation disposition** | Distinct de HD · **P2-D-01** |
| **HumanDecision** | Lorsque vérité Product structurelle établie/changée · **P2-D-01** |
| **Reservation** | Qualification/contrainte durable · ≠ blocker automatique |
| **Risk** | Distinct de Reservation / Blocker |
| **Blocker** | Empêche progression/sortie requise |
| **Trajectory Recommendation** | Proposed · not decided |
| **Methodological requalification** | Studio-derived si non structurelle |
| **Decided ProjectTrajectory update** | Seulement après **HumanDecision** applicable lorsque la vérité de trajectoire est structurelle (**P2-D-01**). **M-DISP** peut disposer la Recommendation mais **ne peut pas elle-même** établir la decided ProjectTrajectory. |
| **Deliverable expectation** | ≠ execute now |
| **Execution intent** | ≠ ExecutionContract ≠ ExecutionAuthority ≠ launch |
| **Next-work / Cycle-transition Recommendation ou candidat dérivé** | Pas d’activation automatique du Cycle suivant · voir **P2-D-04** |

### 9.4 Mécanismes internes de matérialisation (≠ taxonomie sémantique Product)

| Code | Mécanisme |
| --- | --- |
| **M-LPS** | Évolution LPS (factuelle/dérivée vs intention/scope Pilote) |
| **M-DISP** | Recommendation disposition · **≠** établissement d’une decided structural ProjectTrajectory |
| **M-HD** | HumanDecision durable |
| **M-CONF** | Confirmation (autorisation d’un effet inspecté lorsque requis) |

Le Pilote ne sélectionne jamais les codes M-*. **M-OTHER** peut rester un placeholder documentaire uniquement — ne **pas** promouvoir un enum runtime « OTHER ».

---

## 10. Matérialité / HumanDecision / Confirmation

> Section centrale. Consomme **P2-D-01 / P2-D-02 / P2-D-03**. Aucun enum global de matérialité / hiérarchie LOW-MEDIUM-HIGH sélectionné.

### 10.1 Invariants non négociables (**VALIDATED INPUT**)

1. Recommendation ≠ HumanDecision.
2. Aucune décision humaine inventée.
3. Phrase brute ≠ gate/HD automatique.
4. Proposed trajectory = Recommendation jusqu’à HD requise.
5. Confirmation liée au contrat/effet inspecté ; proportionnelle · **P2-D-03**.
6. Autorité effective = intersection.
7. Pas de global L5 / auto-escalade.
8. Auditability / reconstructibility = invariant ; DecisionBasis universel = **NOT DECIDED**.
9. Pilote = autorité HD runtime ; Morris = construction.
10. HD ≠ cérémonie UI.
11. Le Pilote exprime le sens ; Studio matérialise le mécanisme.

### 10.2 Dimensions de matérialité (pas d’enum global)

| Dimension | Question |
| --- | --- |
| Réversibilité | L’effet peut-il être annulé sans perte ? |
| Scope | Project / travail courant / étape / formulation ? |
| Effet externe / protégé | Git distant, secrets, REAL, externes ? |
| Impact d’autorité | Élargit ou délimite l’autorité ? |
| Dépendances aval | Quels objets durables dépendent ? |
| Coût d’erreur | Conséquence d’une mauvaise interprétation ? |
| Auditabilité | Provenance reconstructible minimale ? |
| Ambiguïté / currentness résiduelle | Sujet unique courant non périmé ? |

### 10.3 A–J = SCÉNARIOS DE TEST UNIQUEMENT

A–J restent des scénarios de design/analyse/test. Ils ne doivent **pas** devenir une runtime taxonomy persistée, un enum DecisionClassifier, ni dix moteurs spécialisés.

### 10.4 Sûreté de capture (groupes conceptuels — pas 10 moteurs)

A. Résolution de sujet.
B. Compréhension d’intention.
C. Compatibilité matérialité / effet / autorité.
D. Matérialisation déterministe sûre.

### 10.5 **P2-D-01 ADOPTED BY MORRIS** — Recommendation disposition vs HumanDecision

Disposition de Recommendation non structurelle → **M-DISP is sufficient**.

HumanDecision est requise lorsqu’un acte Pilote établit ou change une vérité Product structurelle telle que applicable :

- objectif Project ;
- scope structurel ;
- decided ProjectTrajectory ;
- disposition structurelle de lifecycle Project/Cycle ;
- enveloppe d’autorité ;
- engagement structurel dont dépendent des effets gouvernés aval.

L’acceptation/refus d’une Recommendation **ne crée PAS** automatiquement une HD.

**La matérialité de l’acte sémantique** décide le mécanisme — pas le mot « oui » ni la seule catégorie Recommendation.

### 10.6 **P2-D-02 ADOPTED BY MORRIS** — Matérialité de fermeture de Cycle

Fermeture de Cycle **CONDITIONAL** · **PAS** universellement une HumanDecision.

Studio peut matérialiser une fermeture déterministe lorsque les conditions d’Exit Proof du §7.E sont satisfaites.

HumanDecision requise seulement lorsque la fermeture elle-même exige encore un jugement structurel humain.

**Execution SUCCESS alone NEVER closes a Cycle.**

### 10.7 **P2-D-03 ADOPTED BY MORRIS** — Frontière de Confirmation

Confirmation autorise un effet concret inspecté lorsque requis.

Confirmation :

- ≠ HumanDecision ;
- **ne remplace PAS** une HumanDecision manquante ;
- **ne crée PAS** l’intention Product ;
- **n’élargit PAS** le scope ;
- **n’élargit PAS** l’autorité ;
- s’applique uniquement à l’effet ou contrat inspecté/lié.

**La proximité d’Execution ne crée PAS elle-même une nouvelle HumanDecision.**

### 10.8 Multi-intent / supersession

Un message peut contenir plusieurs intentions sémantiques résolues indépendamment.

Exemple : « oui pour la trajectoire, mais ne lance pas l’exécution » ne doit **pas** être traité comme globalement positif.

Avant effet protégé/irréversible : une intention plus récente explicite/courante peut superseder selon politique applicable. Après effet : pas de réécriture d’historique — utiliser correction/compensation/replan/nouvelle décision selon applicable.

### 10.9 Restant OPEN (non décidé par P2-D-01…04)

| Sujet | Statut |
| --- | --- |
| Forme exacte DecisionBasis universelle/non-universelle | **NOT DECIDED** · **ROUTED TO P4** si applicable |
| Forme/présentation exacte de Confirmation | **OPEN** · **ROUTED TO P3** (UX) |
| Politique détaillée stale-subject / seuils numériques | **OPEN** |

### 10.10 Frontière Nora vs Studio pour la matérialité

| Rôle | Peut | Ne peut pas |
| --- | --- | --- |
| Nora | Interpréter l’intention ; détecter l’ambiguïté ; expliquer les implications ; signaler une matérialité *candidate* | S’auto-autoriser une capture |
| Studio | Posséder sujet/currentness/politique/autorité/contraintes d’effet ; matérialisation finale | Laisser un jugement probabiliste non validé produire un effet autoritatif |

---

## 11. Lifecycle Deliverable

### 11.0 Deliverable ≠ Artifact

| Concept | Signification |
| --- | --- |
| **Deliverable** | Résultat / obligation fonctionnelle attendue |
| **Artifact** | Manifestation concrète pouvant satisfaire tout ou partie d’un Deliverable |

Un Deliverable peut lier **0..N** artifacts / versions / items Evidence.

### 11.A Exigence Deliverable

- suggested ;
- expected ;
- deferred ;
- requirement superseded / no longer required lorsque applicable.

**Suggested Deliverable = éphémère par défaut.** Matérialiser durablement seulement lorsque continuité/matérialité l’exigent.

### 11.B Production

- not produced ;
- produced ;
- revision / new version produced.

**Nora** peut produire une sortie sémantique/contenu, un brouillon, une analyse, un candidat Deliverable, ou une Recommendation concernant un Deliverable. Nora **n’acquiert pas** d’autorité d’effet durable de cette production.

**La matérialisation durable d’Artifact** reste gouvernée par **Studio** et le mécanisme de production applicable :

- mécanisme Product gouverné Studio ;
- Executor lorsque Execution Branch s’applique ;
- mécanisme gouverné Pilote / import / externe lorsque applicable.

**Execution is one production mechanism, NOT a Deliverable lifecycle state.**

### 11.C Validation

- not reviewed ;
- under review ;
- changes required ;
- validated.

### 11.D Supersession (distinguer)

- Deliverable requirement superseded ;
- Artifact/version superseded.

Les artifacts historiques supersedés restent historiques.

### 11.E Chaîne explicite

```text
Artifact exists
  ≠ Artifact validated
  ≠ Exit proof satisfied
  ≠ Cycle complete
```

**Deliverable expected ≠ execute now.**

### 11.F Autorité de validation

Aucun universal Validator Engine.

Le mécanisme/autorité de validation applicable est déterminé par critères d’acceptation · critères de sortie · contrôles de domaine · Evidence · validation déterministe · review Nora · jugement Pilote si requis · combinaisons.

**Verification ≠ human acceptance** lorsque les critères exigent les deux.

Le mécanisme exact de validator reste **OPEN** lorsqu’il est work-class specific · **NON-BLOCKER P2** · routé **P4** (mécanisme technique si requis) / **P6** (preuve QA) — voir §21.3. Aucun universal Validator Engine.

### 11.G Émergence

Le besoin de Deliverable peut émerger de conversation **Nora OU Pilote**.

---

## 12. Execution Branch

> KEEP Execution comme branche **optionnelle / transverse**. Intention générique héritée de CP4 **sans** rendre P2 execution-centric. Mécaniques Reconciler **HARVESTABLE** · **≠** architecture universelle du FOM.

### 12.1 Position

```text
tool use / read-only cognition ≠ automatiquement Execution Branch
Execution intent ≠ ExecutionContract ≠ authority ≠ launch
```

### 12.2 Chaîne fonctionnelle

```text
1. Vérifier décisions Product / prérequis / eligibility avant préparation / lancement
2. Préparer ExecutionContract
   — préparer un ExecutionContract ne répare JAMAIS une décision Product manquante
   — ExecutionContract ≠ Confirmation automatique
3. Vérifier authority / currentness / policy compatibles
4. Confirmation seulement si applicable (P2-D-03)
5. Vérifier executor / capability eligibility avant launch
6. Launch (si autorisé)
7. Exécution
8. Executor Claim
   — Executor Claim ≠ verified Product fact
9. Independent Studio verification
10. Evidence / Review
11. Product Resolution
12. Continuer le Cycle / Project loop
```

### 12.3 Invariants

1. **Execution Branch Result ≠ Cycle Resolution / closure.**
2. **Artifact produit par Execution ≠ Deliverable validé / Exit Proof.**
3. Un même Cycle peut contenir **0 / 1 / N** executions.
4. Post-Execution recovery repart de verified facts / Evidence / Product Resolution — **pas** d’un old execution intent comme relaunch automatique.
5. Old execution intent ≠ automatic relaunch.

### 12.4 Contraste CURRENT vs TARGET

| Aspect | CURRENT FACT | TARGET |
| --- | --- | --- |
| Chemin GE | Fort lorsqu’utilisé | Branche transverse optionnelle |
| Fermeture | Historiquement trop liée au succès d’exécution | P2-D-02 : Exit Proof + conditions ; SUCCESS alone never closes |
| Cognition outils | Peut être confondue avec Execution | Explicitement séparée |

---

## 13. Review / Validation / Exit Proof / Closure

### 13.1 Distinctions dures

```text
Review ≠ Validation
Validation ≠ nécessairement human acceptance
Validated Deliverable ≠ automatiquement whole Exit Proof
Exit Proof = sufficient verified evidence for ALL applicable exit criteria
Exit Proof ≠ nécessairement un Artifact unique
Exit eligibility = derived Product determination
Exit eligibility ≠ Cycle closure
Cycle closure ≠ next Cycle activation
```

### 13.2 Findings / correction

- Un finding est bloquant **uniquement relativement aux critères applicables**.
- Correction ≠ forcément nouvelle Execution.
- Un Cycle peut fermer **sans Artifact** lorsqu’aucun Artifact n’est requis.

### 13.3 Lien P2-D-02

Si Exit Proof est suffisant mais un unresolved structural human judgment subsiste :

```text
HumanDecision applicable avant closure selon P2-D-02
```

### 13.4 Lien P2-D-04

Après closure correcte, l’activation du Cycle suivant suit **P2-D-04** — pas d’auto-waterfall.

---

## 14. ProjectTrajectory / Replanning

### 14.1 Distinctions

```text
Recommended trajectory ≠ decided ProjectTrajectory
structural decided ProjectTrajectory update requires applicable HumanDecision
M-DISP ne peut pas établir seul une structural decided ProjectTrajectory
replan signal ≠ automatic replan
CKC REPLAN ≠ Product authority
```

### 14.2 Requalification

- Une requalification non-structurelle current-work/méthodologique peut être **Studio-derived**.
- La matérialité dépend de l’**impact sémantique**, non du simple label amend/replace.
- Cycle transition ≠ ProjectTrajectory update.
- Cycle close ≠ automatic next Cycle activation (**P2-D-04**).
- Le replanning **ne réécrit pas** silencieusement l’historique.

### 14.3 Activation du Cycle suivant — **P2-D-04** (fermeture de l’ancienne question OPEN)

Voir §7.F. L’ancienne question « next Cycle activation exact policy OPEN » est **bornée / résolue fonctionnellement** par **P2-D-04**. Une mécanique technique aval peut rester ouverte ; la sémantique fonctionnelle P2 est décidée.

### 14.4 Project Close — **P2-D-04**

Voir §6.6. L’ancienne question « Project Close exact policy OPEN » est **bornée / résolue fonctionnellement** par **P2-D-04**.

---

## 15. Cycle Journal / Memory

### 15.1 Position

```text
Journal / Memory ≠ authoritative Product truth
Conversation reste primary interaction channel
Journal = supporting orientation / continuity projection
pas de second cockpit
P2 ne requiert pas MemoryStore séparé
P2 ne requiert pas SharedKnowledgeStore
```

### 15.2 Subject statuses

Subject statuses = **derived continuity semantics**, pas runtime enum obligatoire.

### 15.3 Projection / currentness

- La projection préserve epistemic status / provenance / currentness.
- Une stale projection **ne peut pas** autoriser un Product effect.
- Une disposed Recommendation n’est plus current/active.
- L’historique reste reconstructible.
- Journal Decision summary ≠ HumanDecision authority record.
- Cycle history ≠ automatiquement current Project context.
- Carry-over gouverné par currentness autoritative.

### 15.4 Nora

Nora utilise **minimum-sufficient projection + targeted retrieval**.

```text
full transcript dump ≠ default cognitive-memory strategy
```

---

## 16. Recovery / Resume

### 16.1 Position

```text
Recovery ≠ UI / session restoration
Recovery reconstruit current authoritative Product truth avant old session context
Resume repart du présent, pas d’une stale intent
```

### 16.2 Règles

- Missing ephemeral state → rederive / requalify / clarify.
- Ne jamais inventer.
- Recovery sufficiency = action-relative.
- Fail-closed local à l’effet autoritatif/protected.
- Stale projection ≠ current truth.
- Last discussed subject ≠ automatically current subject.
- Post-Execution recovery repart de verified facts / Evidence / Product Resolution.
- Old execution intent ≠ automatic relaunch.
- Device/session identity ≠ Product authority.
- Pilot-visible recovery summary = minimum-sufficient orientation.

---

## 17. Guided Document Review

### 17.1 Position

```text
GDR = representative route
aucun dedicated GDR Product engine
même Product Operating Loop
```

### 17.2 Comportement

- Résoudre exact document / version / currentness / section / source context.
- Review target content ≠ automatiquement authoritative truth.
- Le Pilote peut discuss / accept / reject / amend / arbitrate.
- Section acceptance ≠ global document validation.
- Section acceptance ≠ automatiquement HumanDecision.
- Conversation ≠ durable mutation.
- Local disposition scope only.
- Navigation non-waterfall ; retour à une section précédente autorisé.
- Checkpoint = bounded coherence / consolidation boundary.
- Checkpoint PASS ≠ whole-document validation.
- Checkpoint PASS ≠ Cycle closure.
- Reviewed sections ≠ automatiquement validated Deliverable.
- Cognitive workload adaptatif par section/turn.
- Cognitive workload ≠ authority.

### 17.3 Qualité

Parity avec qualité ChatGPT reste **NOT PROVEN** et doit être évaluée **P6**.

---

## 18. Catalogue Functional Routes

> Catalogue **bounded design / acceptance-test scenario**. **≠** runtime taxonomy.

### 18.1 Principes

1. R01–R14 IDs = design/test references only.
2. Une interaction réelle peut traverser plusieurs scénarios.
3. Route identity ne détermine **jamais** authority.
4. Route identity ne détermine **jamais** Execution.
5. Couverture représentative additionnelle **non numérotée** (sans nouvelle identité runtime) : ordinary conversation → zero durable mutation ; replanning/requalification ; checkpoint/coherence review — voir §18.4.

### 18.2 Structure du catalogue

| Colonne | Contenu |
| --- | --- |
| Route | ID design/test |
| Trigger | Déclencheur |
| Current authoritative context | Contexte autoritatif courant |
| Cognitive/Product behavior | Comportement |
| Materialization/authority rule | Règle de matérialité / autorité |
| Execution relation | Relation à Execution Branch |
| Failure/fallback | Échec / repli |
| Continuation | Suite |

### 18.3 Routes représentatives

| Route | Trigger | Current authoritative context | Cognitive/Product behavior | Materialization/authority rule | Execution relation | Failure/fallback | Continuation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **R01** | Question / clarification | Current Project/Cycle résolu | UNDERSTAND / respond / clarify | Zero durable mutation si aucune matérialité | Aucune Execution automatique | Clarifier / abstain | Conversation continue |
| **R02** | Disposition de Recommendation | Recommendation current | Nora explique ; Studio résout matérialité | **P2-D-01** : M-DISP si non structurel ; HD si vérité structurelle | Aucune Execution automatique | Si ambiguïté → clarifier ; ne pas inventer HD | Continuité mise à jour si applicable |
| **R03** | Intention HD structurelle | Sujet/currentness clairs | Nora challenge/recommande ; Pilote arbitre | **M-HD** lorsque conditions satisfaites | Aucune Execution automatique | Fail-closed si intention/authority insuffisantes | LPS / decided truth mis à jour |
| **R04** | Attente Deliverable | Travail courant | Qualifier expected vs suggested | Deliverable expected ≠ execute now | Peut plus tard mener à Execution Branch | Ne pas lancer Execution par défaut | Continuer sans Execution si non requis |
| **R05** | Intention d’exécution | Prérequis Product | Chaîne §12 | Intent ≠ EC ≠ authority ≠ launch ; Confirmation si applicable (**P2-D-03**) | Execution Branch optionnelle | Stop si décision/eligibility manquantes | Product Resolution ; Cycle reste ouvert sauf Exit Proof |
| **R06 — EXIT UNMET** | Exit Proof / critères de sortie applicables non satisfaits | Cycle courant OPEN ; Exit eligibility non atteinte | Identifier le gap réel ; choisir la progression appropriée (clarification · contexte · attente · HD si structurelle · correction · Deliverable/Artifact · Evidence · re-review · Execution Branch seulement si réellement nécessaire) | Cycle remains **OPEN** ; Exit unmet ≠ execute something | **MAY** use Execution ; Execution is **NOT** implied | Ne pas réduire à « lancer quelque chose » ; ne pas fermer | Continuer jusqu’à satisfaction des critères applicables |
| **R07** | Fermeture / transition | Exit eligibility dérivée | Séparer closure et transition | **P2-D-02** pour closure ; **P2-D-04** pour next Cycle / Project Close | Execution SUCCESS never closes | Si jugement structurel reste → HD | Closed ≠ next activation automatique |
| **R08 — REVIEW → CHANGES REQUIRED** | Review avec finding relatif aux critères applicables | Artifact / Deliverable / Evidence under review | Review → finding → changes required → mécanisme de correction/production applicable → **re-review** | Finding bloquant uniquement relativement aux critères applicables ; Correction ≠ necessarily Execution | Execution **peut** être utilisée si le mécanisme de production/correction applicable l’exige ; sinon correction hors Execution Branch | Ne pas traiter R08 comme route principale de replanning | Après correction : re-review ; puis réévaluer Exit Proof si applicable |
| **R09** | Review / Deliverable validated | Validation locale d’un Deliverable / Artifact contre critères applicables | La validation contribue aux critères applicables ; **réévaluer** l’Exit Proof global | Validated Deliverable ≠ complete Exit Proof automatically ; validation locale ne court-circuite jamais les autres exit criteria | Peut coexister avec 0..N executions | Exit Proof insuffisant → pas de close | Continuer jusqu’à ALL applicable exit criteria |
| **R10** | Resume / recovery | Session interrompue | Reconstruire current truth | Resume does not invent stale intent | Old execution intent ≠ relaunch | Missing state → rederive/clarify | Pilot-visible minimum summary |
| **R11** | Blocker / Reservation | Travail bloqué ou réservé | Distinguer les deux | Blocker ≠ Reservation ≠ automatic replan | Aucune Execution automatique | Fail-closed sur effet bloqué | Clarifier / HD / replan si structurel |
| **R12** | Guided Document Review | Document/version/section | Même Product loop ; non-waterfall | Section/checkpoint ≠ global validation/closure | Aucune Execution automatique | Ambiguïté de version → clarifier | Checkpoint = bounded coherence |
| **R13** | Zero-execution close | Critères satisfaits sans Artifact/Execution | First-class path | **P2-D-02** si conditions OK | Explicitement zéro Execution | Si HD structurelle reste → HD | Cycle close sans Execution |
| **R14** | Charge cognitive élevée | Ambiguïté / multi-source / qualité | Adapter stratégie cognitive | Cognitive escalation ≠ authority escalation | ≠ auto Execution | Insufficient cognition → retrieve/clarify/abstain ; fail-closed local | Continuer sans élargir authority |

### 18.4 Couverture représentative additionnelle (non numérotée — ≠ runtime taxonomy)

Ces scénarios complètent la couverture design/acceptance **sans** créer R15/R16/R17 ni aucune nouvelle identité runtime. Une interaction réelle peut traverser plusieurs scénarios/routes.

#### Ordinary conversation → zero durable mutation

```text
Pilote demande / explore
  → Nora répond / challenge
  → zero durable Product mutation
```

Couverture additionnelle **non numérotée**. Ne pas confondre avec une identité runtime distincte de R01 ; R01 reste la référence design/test de clarification, tandis que ce scénario porte explicitement le cas nominal « exploration conversationnelle sans mutation ».

#### Replanning / requalification

```text
Evidence / blocker / dependency signal
  → requalification
  → trajectory Recommendation if needed
  → HumanDecision only if structural decided ProjectTrajectory changes
```

**≠ R08.** R08 porte Review → changes required → re-review. Replanning/requalification reste ici une couverture additionnelle.

```text
replan signal ≠ automatic replan
```

#### Checkpoint / coherence review

```text
reviewed subset
  → bounded checkpoint
  → cross-section coherence
  → corrections if needed
  → continue review
```

```text
checkpoint PASS ≠ global validation
checkpoint PASS ≠ Cycle closure
```

Peut s’articuler avec R12 (GDR) sans en faire une taxonomie runtime distincte.

---

## 19. Frontière fonctionnelle de fiabilité cognitive

### 19.1 Frontière fondamentale

```text
deterministic Studio guarantees
  ≠
probabilistic Nora reasoning
```

Provider-agnostic Product semantics
+
OpenAI-native-first construction qualification lorsque Build Doctrine **R22** est matériellement applicable.

**Aucune production routing selection.**

### 19.2 CW0 vs CW1–CW3

| Symbole | Nature |
| --- | --- |
| **CW0** | Shorthand pour la frontière déterministe Studio : currentness, membership, authority, idempotence, protected boundaries, lifecycle invariants, fail-closed. **NO LLM.** |
| **CW1–CW3** | Candidate cognitive workload bands utiles au design, à l’évaluation et éventuellement au routing futur |

CW1–CW3 **ne sont PAS** :

- Product runtime taxonomy obligatoire ;
- niveaux d’autorité ;
- SFIA profiles ;
- permissions ;
- Functional Routes.

Ne pas imposer un futur champ runtime `cognitiveClass` ni exactement quatre classes.

### 19.3 Escalation cognitive

Remplacer l’idée de « raise cognitive class » par **adaptation de cognitive strategy / effort / capability** lorsque workload/quality signals le justifient.

Nora peut signaler : ambiguïté, contradiction, profondeur, complexité multisource, insuffisance de qualité, besoin de contexte.

Studio/policy reste propriétaire de la résolution gouvernée de la stratégie.

```text
Cognitive escalation / de-escalation
  ≠ scope escalation
  ≠ permission escalation
  ≠ HumanDecision
  ≠ Confirmation
  ≠ authority escalation
```

### 19.4 Fallback cognitif

```text
insufficient cognition
  → retrieve / clarify / adapt / escalate when allowed
  → sinon expose uncertainty / NOT PROVEN / abstain
  → fail-closed seulement localement sur l’effet autoritatif
     qui ne peut pas être exécuté honnêtement
```

Ne pas transformer un problème cognitif local en global Product STOP par défaut.

### 19.5 Anti-oscillation

- Comportement fonctionnel **REQUIRED**.
- Mécanisme exact **NOT SELECTED**.
- Hysteresis = candidate mechanism only.
- **P4** qualifie la mécanique si nécessaire ; **P6** l’évalue.

### 19.6 Contexte

```text
minimum-sufficient projection
+ targeted retrieval
+ provenance / currentness

More context ≠ automatically better reasoning
Full transcript/context dump ≠ nominal cognition/recovery strategy
Nora n’a pas de second cognitive truth/store
```

### 19.7 Quality floor

Clarify / retrieve / challenge / abstain plutôt que produire une fausse certitude fluide.

Si cognition requise insuffisamment établie : **ne pas matérialiser** l’effet autoritatif concerné.

### 19.8 Nora trajectory 08 / R22

- Nora trajectory 08 : **KEEP / HARVEST / ADAPT**.
- No second Nora engine.
- Cognitive Completion = **NOT PROVEN**.
- **R22** : provider/OpenAI Capability Fit Check lorsqu’une affirmation de design dépend réellement des capacités provider courantes.
- Aucune primitive provider n’acquiert l’autorité métier SFIA.
- Snapshot provider courant ≠ doctrine permanente.

---

## 20. Functional Acceptance Criteria

> Critères observables/testables pour le modèle P2 · **≠** implementation proof. IDs existants préservés autant que possible.

| ID | Critère |
| --- | --- |
| **P2-AC-01** | Un Cycle peut fermer sans Execution lorsque les critères applicables sont satisfaits. |
| **P2-AC-02** | Execution SUCCESS alone cannot close a Cycle. |
| **P2-AC-03** | Un Artifact requis invalide/non validé laisse Exit Proof insatisfait lorsque cette validation est requise. |
| **P2-AC-04** | Journal projection cannot override authoritative truth. |
| **P2-AC-05** | Nora cannot materialize HumanDecision. |
| **P2-AC-06** | Le Pilote ne sélectionne pas manuellement CKC en nominal flow. |
| **P2-AC-07** | La même durable decision est cohérente dans les projections Pilot / Nora / Studio. |
| **P2-AC-08** | Resume does not invent stale intent. |
| **P2-AC-09** | Execution Branch peut se répéter N fois dans un Cycle. |
| **P2-AC-10** | Conversation peut produire zero durable mutation. |
| **P2-AC-11** | Recommendation remains ≠ HumanDecision. |
| **P2-AC-12** | Deliverable expected ≠ immediate execution. |
| **P2-AC-13** | Cognitive adaptation/escalation does not grant authority. |
| **P2-AC-14** | Les bounded representative functional scenarios / Functional Routes peuvent servir de scénarios de test d’acceptation **sans** devenir runtime taxonomy. |
| **P2-AC-15** | GDR uses generic Product loop ; no dedicated GDR Product engine required by FOM. |
| **P2-AC-16** | Confirmation ≠ HumanDecision et ne peut élargir scope/authority (**P2-D-03**). |
| **P2-AC-17** | Execution intent ≠ ExecutionContract ≠ authority ≠ launch. |
| **P2-AC-18** | Tool use / read-only cognition ≠ automatic Execution Branch. |
| **P2-AC-19** | Executor Claim ≠ verified Product fact. |
| **P2-AC-20** | Review ≠ Validation. |
| **P2-AC-21** | Validated Deliverable ≠ automatically complete Exit Proof. |
| **P2-AC-22** | Exit Proof is sufficient only when ALL applicable exit criteria are satisfied. |
| **P2-AC-23** | Exit eligibility ≠ Cycle closure. |
| **P2-AC-24** | Cycle closure ≠ next Cycle activation (**P2-D-04**). |
| **P2-AC-25** | Fermeture déterministe de Cycle uniquement sous les conditions **P2-D-02**. |
| **P2-AC-26** | Activation déterministe du Cycle suivant uniquement sous les conditions **P2-D-04**. |
| **P2-AC-27** | Last Cycle closed ≠ Project automatically closed (**P2-D-04**). |
| **P2-AC-28** | Project Abandon requires applicable HumanDecision. |
| **P2-AC-29** | Structural ProjectTrajectory change requires applicable HumanDecision. |
| **P2-AC-30** | Replan signal ≠ automatic replan. |
| **P2-AC-31** | Stale Journal/Memory cannot authorize Product effect. |
| **P2-AC-32** | Recovery reconstruit current authoritative Product truth. |
| **P2-AC-33** | GDR section/checkpoint disposition ≠ global validation/closure. |
| **P2-AC-34** | Functional Route identity never determines authority or Execution. |
| **P2-AC-35** | Deterministic Product guarantees remain Studio-owned. |
| **P2-AC-36** | CW bands never widen authority. |
| **P2-AC-37** | Context = minimum-sufficient + targeted retrieval + provenance/currentness. |
| **P2-AC-38** | Insufficient required cognition cannot be silently converted into authoritative certainty. |

> **P2-AC-14** n’utilise plus A–J comme taxonomie structurante. A–J restent des références design/test de provenance uniquement.

---

## 21. Décisions P2 adoptées / questions fermées / routing aval

### 21.1 Décisions P2 adoptées

| ID | Décision | Statut |
| --- | --- | --- |
| **P2-D-01** | Recommendation disposition vs HumanDecision | **ADOPTED BY MORRIS** |
| **P2-D-02** | Cycle closure conditional ; Studio deterministic closure possible lorsque conditions satisfaites et aucun jugement structurel humain non résolu | **ADOPTED BY MORRIS** |
| **P2-D-03** | Confirmation autorise l’effet inspecté lorsqu’elle est requise ; Confirmation ≠ HumanDecision ; ne crée pas l’intention ; n’élargit ni scope ni authority | **ADOPTED BY MORRIS** |
| **P2-D-04** | Lifecycle Progression & Project Closure Authority — matérialisation déterministe des conséquences de lifecycle / next Cycle activation / Project Close normal sous conditions ; Project Abandon = HD ; cas exceptionnel fail-closed → Pilot judgment → HD ; aucun state machine technique sélectionné | **ADOPTED BY MORRIS** |

> **Important.** Toute ancienne table utilisant **P2-D-04** pour « Confirmation presentation/form » est **STALE** et **supprimée**. L’ID **P2-D-04** désigne uniquement Lifecycle Progression & Project Closure Authority. La forme UX de Confirmation est **ROUTED TO P3**, sans nouvel ID de décision P2.

### 21.2 Questions P2 générales désormais fermées / bornées

| Ancienne interrogation | Statut actuel |
| --- | --- |
| Zero-execution close | **CLOSED** via P2-D-02 + AC-01 / R13 |
| Exact fixed Functional Route set | **CLOSED** comme non-requis ; catalogue bounded design/test only |
| Journal Subject runtime taxonomy | **CLOSED** comme non-requis ; derived continuity semantics only |
| Universal Validator Engine | **CLOSED** comme non-requis |
| Confirmation semantic boundary | **CLOSED** via P2-D-03 |
| CW0–CW3 mandatory runtime mapping | **CLOSED** comme non-requis |
| Next Cycle activation exact policy | **BOUNDED / RESOLVED** via P2-D-04 |
| Project Close exact policy | **BOUNDED / RESOLVED** via P2-D-04 |

### 21.3 Restant OPEN / NON-BLOCKER — routing explicite

| Sujet | Statut fonctionnel actuel | Route phase / règle de requalification | Raison |
| --- | --- | --- | --- |
| Forme UX / présentation de Confirmation | OPEN | **P3** — Workspace / Interaction Architecture | Forme UX hors périmètre FOM ; sémantique Confirmation déjà bornée par **P2-D-03** |
| DecisionBasis universel / représentation technique | NOT DECIDED · NON-BLOCKER P2 | **P4** si une représentation technique s’avère nécessaire | Auditabilité/reconstructibility déjà invariant ; forme technique non requise pour clôturer P2 |
| Validator mechanism work-class-specific | NON-BLOCKER / ROUTED | **P4** uniquement si un mécanisme technique spécifique doit être conçu/représenté · **P6** pour preuve/QA du comportement et des mécanismes applicables | Sémantiques fonctionnelles déjà suffisantes en P2 (Review ≠ Validation ; mécanisme dépend critères/domaine/Evidence/jugement) · **aucun universal Validator Engine** |
| Exact reopen policy details | **DEFERRED — NON-BLOCKER P2** | Pas de first-class reopen mechanism sélectionné en P2. Si P6/P7 ou une preuve produit ultérieure démontre qu’un comportement de reopen fonctionnel distinct est requis → **functional requalification first** avant toute implémentation technique | Invariant P2 : closed historical truth must never be silently rewritten. Ne décide ni « reopen interdit » ni « reopen obligatoire » · aucun état lifecycle supplémentaire inventé |
| Exact anti-oscillation technical mechanism | NOT SELECTED | **P4** qualify if needed · **P6** evaluate | Comportement fonctionnel REQUIRED ; mécanisme exact NOT SELECTED |
| Permanent model/provider mapping | NOT SELECTED | **P8** après preuves P6(+P7) + décision Morris applicable | Mapping permanent ≠ doctrine Product |
| Reasoning defaults | NOT SELECTED | **P6** — Model × Reasoning evaluation / quality-cost-latency/tool evidence · **P8** — éventuelle politique de routing/defaults/promotions sur preuve suffisante + décision Morris applicable | Reasoning default ≠ Product authority · provider/model mapping ≠ permanent doctrine |
| Cognitive Completion | NOT PROVEN | **P6** évaluation · **P8** requalification éventuelle | Pas de claim Cognitive Completion en P2 |

### 21.4 Downstream routing

| Phase | Contenu |
| --- | --- |
| **P3 — Workspace / Interaction Architecture** | Requalification des surfaces/contrôles ; progressive disclosure ; Confirmation UX ; model/reasoning visibility Pilot-facing si valeur démontrée ; Figma / visual contract |
| **P4 — Technical / Semantic Architecture Delta** | Persistence/schema/API éventuels ; role projection contracts ; source/currentness/invalidation mechanics ; DecisionBasis technical form if applicable ; anti-oscillation technical mechanism if needed ; store only if demonstrated gap ; no SharedKnowledgeStore by default ; no new orchestration architecture unless justified |
| **P5 — Delivery** | Implémenter les deltas validés ; ne pas inventer de nouvelle sémantique Product pendant Delivery ; Net Complexity Reduction applicable |
| **P6 — Global Integrated Product QA** | Whole target QA ; functional scenarios/routes ; GDR cognitive scenario ; Model × Reasoning evaluation ; role/semantic continuity ; recovery ; governance/fail-closed ; Net Complexity Reduction |
| **P7 — Fresh Project End-to-End Product Replay** | Fresh non-fixture Project ; realistic/non-happy-path-only ; REAL sous GO Morris distinct |
| **P8 — evidence-based requalification** | Production cognitive routing policy si preuve suffisante ; provider/model/reasoning mapping éventuel ; RETIRE decisions éventuelles ; aucune auto-promotion |

### 21.5 Provider-dependent items

| Item | Statut |
| --- | --- |
| Permanent model/provider mapping | **NOT SELECTED** |
| Reasoning defaults | **NOT SELECTED** |
| Exact hysteresis mechanism | **NOT SELECTED** |
| Cognitive Completion | **NOT PROVEN** |
| OpenAI Capability Fit Check | Obligation de revalidation lorsque le claim en dépend · **≠** production-routing decision |

---

## 22. Critères de sortie P2 / Gates / Anti-claims

### 22.1 Conditions pour proposer P2 à Final Critical Review

P2 peut être proposé pour Final Critical Review uniquement si :

1. Guided Review §§1–22 **COMPLETE**.
2. P2-D-01…P2-D-04 correctement consolidées.
3. Project / Cycle / Deliverable / Execution lifecycles cohérents.
4. Recommendation / HumanDecision / Confirmation / materiality / authority cohérents.
5. Execution reste optional/transverse.
6. Review / Validation / Exit Proof / Exit eligibility / Closure restent distincts.
7. ProjectTrajectory / replanning / transition semantics cohérents.
8. P2-D-04 correctement intégré sans auto-waterfall.
9. Journal/Memory + Recovery respectent currentness/provenance/no-second-truth.
10. GDR reste representative route du même Product loop.
11. Functional Routes restent bounded design/acceptance scenarios.
12. Cognitive Reliability boundary cohérente : deterministic Studio / probabilistic Nora / no authority escalation.
13. Functional Acceptance Criteria couvrent les invariants majeurs du FOM.
14. Questions non-P2 correctement routées P3→P8.
15. Pas de P3/P4 leakage : no UI/Figma selection, no DB/API/schema, no technical state machine, no production routing selection.
16. Documentary consolidation complète.
17. Cross-section consistency checks locaux PASS.
18. Review pack FULL complet.
19. Review Handoff remote verified.

### 22.2 Gates actuels

| Gate | Statut |
| --- | --- |
| **D-SIMP-06** | **CONSUMED** |
| **D-SIMP-07** | **CONSUMED** |
| **D-SIMP-08** | **CONSUMED** |
| **P2-D-01** | **ADOPTED BY MORRIS** |
| **P2-D-02** | **ADOPTED BY MORRIS** |
| **P2-D-03** | **ADOPTED BY MORRIS** |
| **P2-D-04** | **ADOPTED BY MORRIS** |
| **Guided Review §§1–22** | **COMPLETE** |
| **Final Documentary Consolidation** | **COMPLETE** |
| **ChatGPT Final Critical Review P2 #1** | **NOT READY — TARGETED CORRECTION REQUIRED** [historical] |
| **FCR-P2-01** | **CLOSED** |
| **FCR-P2-02** | **CLOSED** |
| **Targeted Correction Pass 01** | **COMPLETE** |
| **ChatGPT Closure Review P2** | **PASS** |
| **Morris validation P2** | **CONSUMED — P2 VALIDATED BY MORRIS** (2026-10-03 Europe/Paris) |
| **Git integration P2** | **AUTHORIZED / IN PROGRESS** |
| **P3 GO** | **NOT AUTHORIZED** |

### 22.3 Prochain gate

```text
Git integration P2 (ce pass)
  → post-merge verified
  → DISTINCT MORRIS GO P3 — Workspace / Interaction Architecture
```

**P2 VALIDATED BY MORRIS** est consommé. Merge P2 **≠** GO P3.

**P3 reste NOT AUTHORIZED.** Ne pas démarrer P3 automatiquement. Ne pas générer de Figma. Ne pas modifier UI. Ne pas sélectionner d’architecture technique. Ne pas lancer Delivery. Ne pas lancer REAL.

### 22.4 Anti-claims

| Claim | Statut |
| --- | --- |
| P2 VALIDATED BY MORRIS | **YES** (2026-10-03 Europe/Paris) |
| P3 AUTHORIZED | **NO** |
| P4 ARCHITECTURE ADOPTED | **NO** |
| P5 DELIVERY AUTHORIZED | **NO** |
| P6 GLOBAL QA PROVEN | **NO** |
| P7 FRESH PROJECT SELECTED | **NO** |
| P8 REQUALIFICATION PERFORMED | **NO** |
| READY FOR REAL | **NO** |
| PRODUCTION ROUTING SELECTED | **NO** |
| COGNITIVE COMPLETION PROVEN | **NO** |
| runtime v3 ADOPTED | **NO** |
| SharedKnowledgeStore SELECTED | **NO** |
| Canonical Orchestration Spine ADOPTED | **NO** |
| ExecutionContract required for every Cycle | **NO** |
| Execution SUCCESS closes Cycle | **NO** |
| Artifact existence satisfies Exit Proof | **NO** |
| Every Cycle must produce an Artifact | **NO** |
| Journal / Memory = authoritative source of truth | **NO** |
| Journal = second business cockpit | **NO** |
| Functional Routes = runtime taxonomy | **NO** |
| Route identity determines authority | **NO** |
| Route identity determines Execution | **NO** |
| CW0–CW3 mandatory runtime classes | **NO** |
| CW* = authority levels | **NO** |
| more cognitive capability = more Product authority | **NO** |
| full transcript/context dump required | **NO** |
| OpenAI-native-first = production routing decision | **NO** |
| Recommendation = HumanDecision | **NO** |
| Confirmation = HumanDecision | **NO** |
| CKC = authority | **NO** |
| Cycle close = automatic next Cycle activation | **NO** |
| Last Cycle closed = automatic Project Close | **NO** |
| replan signal = automatic decided replan | **NO** |

---

## Annexe A — Matrice Current→Target (résumé)

| Domaine | Current→Target |
| --- | --- |
| Interaction | Chat + surfaces → chat primaire + soutien proportionné |
| Authority | Gates/modales → HD conversationnelle + Confirmation bornée |
| Execution | Chemin GE fort → branche optionnelle transverse |
| Closure | Trop liée au succès d’exécution → Exit Proof + P2-D-02/04 |
| Continuity | Journal intégré → projection orientation, pas SoT |
| Cognition | Mapping runtime trop fort → CW0 Studio + CW1–3 bands candidates |

---

## Annexe B — Trajectoire de sortie

```text
P2 VALIDATED BY MORRIS
  → Git integration (ce pass)
  → post-merge verified
  → DISTINCT MORRIS GO P3
```

**runtime v3 : NON ADOPTED.**

**Merge P2 ≠ GO P3.**

---

*Fin du Functional Operating Model P2 — VALIDATED BY MORRIS — Git integration AUTHORIZED / IN PROGRESS — Guided Review §§1–22 COMPLETE — Closure Review PASS — P3 NOT AUTHORIZED.*
