# SFIA Studio — Product Completion — UX / Product Experience — Experience Architecture

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio — Product Completion |
| **Cycle** | UX / Product Experience — Experience Architecture & Penpot Design Contract |
| **Profil** | **CRITICAL** |
| **Typologie** | **DOC / DESIGN ARTIFACT** |
| **Milestone** | PRODUCT COMPLETION — UX / PRODUCT EXPERIENCE — EXPERIENCE ARCHITECTURE — GIT INTEGRATION |
| **Statut contenu** | **VALIDATED BY MORRIS** |
| **État Git** | **GIT INTEGRATION AUTHORIZED — LOCAL INTEGRATION IN PROGRESS / NOT INTEGRATED ON MAIN** |
| **Statut synthétique** | **VALIDATED BY MORRIS — GIT INTEGRATION AUTHORIZED — NOT INTEGRATED ON MAIN** |
| **Décision Morris validation** | **CONSUMED** — VALIDATE — PRODUCT COMPLETION UX EXPERIENCE ARCHITECTURE — PASS WITH NON-BLOCKING RESERVES — CANDIDATE APPROVED FOR GIT INTEGRATION — NO DELIVERY — NO REAL — NO RUNTIME V3 ADOPTION — NEXT UX SUBCYCLE REQUIRES SEPARATE QUALIFICATION AND GO |
| **GO Morris intégration** | **CONSUMED** — GO INTEGRATION GIT — PRODUCT COMPLETION UX EXPERIENCE ARCHITECTURE VALIDATED — UPDATE CANDIDATE + ROADMAP + REVIEW PACK — NO DELIVERY — NO REAL — NO NEXT UX SUBCYCLE |
| **GO Morris démarrage** | START PRODUCT COMPLETION UX / PRODUCT EXPERIENCE — EXPERIENCE ARCHITECTURE / DESIGN CONTRACT — PENPOT TACTICAL FOR THIS CYCLE ONLY — NO DOCTRINE CHANGE — NO CODE — NO DELIVERY — NO REAL — NO PROJECT GIT INTEGRATION — RUNTIME V3 NON ADOPTED |
| **GO Morris correction** | **CONSUMED** — « ok go correction » — correction locale bornée candidat + Penpot cycle-local + Review Handoff · **≠** commit/push/PR projet · **≠** Delivery · **≠** REAL |
| **Base Git** | `origin/main` @ `e0c8e9ac200a6a7fae37790c8919d858dc2aa5b0` (PR #371 merge · Task Manager hors périmètre · descend de PR #370 `32cce29f…`) |
| **Branche locale** | `design/sfia-studio-product-completion-ux-experience-architecture` |
| **C1** | VALIDATED BY MORRIS — INTEGRATED ON MAIN |
| **C2** | VALIDATED BY MORRIS — INTEGRATED ON MAIN |
| **Penpot** | CYCLE-LOCAL DESIGN TOOL / TACTICAL WORKSPACE · **≠** SFIA doctrine · **≠** Figma standard replaced · **≠** Git SoT |
| **Runtime v3** | **NON ADOPTED** |
| **Delivery** | **NOT AUTHORIZED** |
| **REAL** | **ZERO REAL** |
| **Next UX subcycle** | **NOT SELECTED** — REQUIRES SEPARATE QUALIFICATION AND GO |
| **CKC UX dédié** | **ABSENT** — fallback = routing + template v2.6 + C1 + C2 + framings + actifs PRE-M6 |

---

## 1. Purpose and non-goals

### Purpose

Transformer C1 (WHAT) + C2 (comportement testable) en **architecture d'expérience Pilote-facing** exploitable et traçable **avant** wireframes détaillés, screens haute fidélité, composants et Delivery — puis **corriger** la fidélité sémantique au contrat C2 après revue ChatGPT.

Ce cycle ferme / recontrôlée :

- l'architecture d'information Pilote ;
- le mapping A→W → surfaces / journeys ;
- le mapping CA-PC → états / interactions UX ;
- les contrats UX de Distinction (Option ≠ Recommendation ≠ HD, SUCCESS ≠ STOP ≠ FAIL, etc.) ;
- Confirmation / EC / runtime guardrails fidèles à C2 ;
- le harvest PRE-M6 classifié avec exits ;
- un registre de blockers d'architecture fonctionnelle **uniquement s'ils bloquent l'UX**.

### Non-goals

- wireframes / screens / component library / design system final ;
- architecture fonctionnelle complète ;
- architecture technique / code / Delivery / REAL ;
- modification Build Doctrine / C1 / C2 / framing / template / routing ;
- mass-rewrite historique Roadmap (seule sync current-state autorisée dans le cycle d'intégration Git) ;
- promotion de Penpot comme standard SFIA ou remplacement Figma ;
- sélection / lancement automatique d'un sous-cycle UX aval ;
- project push / PR / merge ;
- conformité WCAG complète déclarée.

---

## 2. Source hierarchy

| Rang | Source | Rôle |
| --- | --- | --- |
| 1 | C1 `01-product-completion-cadrage.md` | Target / scope / PE principles |
| 2 | C2 `02-product-completion-conception-fonctionnelle.md` | Parcours A→W · CA-PC · A11Y · contracts |
| 3 | Framings v3 `30`–`37` | Doctrine active · READ ONLY |
| 4 | Build Doctrine + Convergence Roadmap | Gouvernance / trajectory · READ ONLY |
| 5 | PRE-M6 product UI + project-assistant headless | Harvest surfaces / comportements |
| 6 | Penpot tactical file | Preuve visuelle cycle-local |
| 7 | Routing + template v2.6 | Process-only · pas de CKC UX |

Git reste SoT pour doctrine, décisions et candidat documentaire.

---

## 3. Challenge avant design (réponses)

1. **Capacité fermée :** Experience Architecture PE — information architecture + interaction contracts + Penpot foundations/flows/states.
2. **Pourquoi maintenant :** C1+C2+PR #370 intégrés ; PE est l'option UX listée ; aucune capacité suivante auto-autorisée ; besoin d'un contrat avant wireframes.
3. **PRE-M6 réutilisable :** ProductShell, ProjectsPage, NewProjectIntention (provisional), ProjectWorkspace, ConversationSurface, LpsSurface, HistorySurface, RecoverySurface, responsive thresholds, headless engine + presentationLabels.
4. **Risque seconde architecture :** Mitigé en dérivant strictement de C1/C2, en classifiant PRE-M6 (KEEP/ADAPT/HARVEST), en interdisant une architecture fonctionnelle complète dans ce cycle.
5. **Gaps fermables ensemble :** IA Pilote, hierarchy business-first, A→W journeys, CA-PC mapping, Trajectory/Rec/HD/EC/Confirm/Attempt/Evidence/Recovery contracts, A11Y functional, empty/loading/error/blocked.
6. **Preuve :** Document candidat + Penpot boards inspectables (00/01/05) + matrices A→W/CA-PC/harvest + blocker register + captures.
7. **Gate suivant :** ChatGPT UX re-review → Morris UX Experience Architecture decision → sous-cycle UX à requalifier.
8. **Dette temporaire :** Hypothèses viewport 1440/1024/390 ; New Project provisional ; Penpot cycle-local tool ; Confirmation process-local (héritée) jusqu'à cycle dédié.
9. **Candidates vs décisions :** Tout board/surface = CANDIDATE · MD-C2 déjà DECIDED/RETIRED · aucune nouvelle décision Morris forcée sauf blockers listés.
10. **Gate Morris :** Validation / amend Experience Architecture candidate (distinct du GO d'intégration Git et de tout sous-cycle).
11. **Surfaces historiques :** `studio-projects/**`, `vertical-slice-ui/**`, legacy `ProjectAssistantPanel` presentation.
12. **Delta archi fct bloquant :** Aucun blocker démontré · registre = 0 après correction.

---

## 4. Experience principles (dérivés C1/C2)

| Principe | Source | Statut |
| --- | --- | --- |
| Business-first | C1 §P · C2 Evidence | DERIVED |
| Method complexity absorbed by Studio | C1 · CA-PC-35 | DERIVED |
| Progressive disclosure | MD-C2-03 | DERIVED |
| Human structural decision explicit | C2 BR-PC / actors | DERIVED |
| Option ≠ Recommendation ≠ HumanDecision | C2 · framing 33 · CA-PC-10 | DERIVED |
| ProjectTrajectory visible / compréhensible | C1 MUST · C2 §6.10 | DERIVED |
| Gates proportionnés · no micro-confirmation | C2 Confirmation N1/N2/N3 | DERIVED |
| Confirmation if required by effects / reversibility / authority / protection / policy · after EC inspection | C2 | DERIVED |
| Authority visible avant effet protégé / effectful | C2 K→L→M→N→O | DERIVED |
| Runtime guardrails persist after authorization | C2 Attempt / SC-* | DERIVED |
| Evidence métier avant profondeur technique | C2 · UAT-UX-06 debt | DERIVED |
| SUCCESS / STOP / FAIL textuellement distincts | A11Y-PC-01/03 | DERIVED |
| Recovery honnête · no false memory / false GO | C2 W · CA-PC-02/25 | DERIVED |
| Accessible without color-only | A11Y-PC-* | DERIVED |
| Technical detail secondary | C1 · C2 | DERIVED |
| No unnecessary exposure of SFIA internal mechanics | CA-PC-35 | DERIVED |
| Capitalization orthogonal · ≠ Critical auto | MD-C2-04 | DERIVED |
| UserSource remains SHOULD | MD-C2-02 RETIRED / C1 | DERIVED |

Tout principe non listé ici = HYPOTHESIS ou RECOMMENDATION.

---

## 5. Pilote mental model

Le Pilote pense en termes de :

1. **Mon Project** — ce que je fais maintenant, où j'en suis.
2. **Nora** — propose Options / Recommendations, clarifie, analyse · **ne décide pas**.
3. **État du projet (LPS)** — faits durables reconstruits.
4. **Trajectoire** — chemin fait / actif / proposé / bloqué.
5. **Décision** — quand quelque chose de structurant doit être arbitrée (HumanDecision).
6. **Contrat d'exécution** — ce qui va être autorisé / fait (inspectable).
7. **Confirmation** — **si requise** par effets / réversibilité / autorité / protections / policy applicables · **après** inspection EC · proportionnée · pas systématique.
8. **Exécution** — progrès et résultat · garde-fous runtime restent actifs.
9. **Résultat** — SUCCESS / STOP / FAIL + Evidence métier.
10. **Reprise** — continuer sans invention.

Studio absorbe : cycle type, profil, CKC, lenses, doctrine package, AgentCapability interne — sauf ambiguïté utile à clarifier.

---

## 6. Information architecture (surfaces candidates)

| Surface candidate | Job | Notes |
| --- | --- | --- |
| **S1 Entry / Projects** | Lister · ouvrir · créer | **A/B alternatives** — Resume (B) n'impose pas Create (A) |
| **S2 Create intention** | Nom + intention (+ contexte optionnel) | **A only** · provisional PRE-M6 KEEP/ADAPT |
| **S3 Workspace** | Conversation dominante + état projet | Cœur PE · conversation-first ≠ only · cible directe de **B Resume** |
| **S4 Conversation** | Intention · clarification · Options/Rec · HD · EC · Attempt · Evidence cards | Dominant |
| **S5 Project state (LPS)** | État courant business-first | Panel / drawer selon viewport |
| **S6 Trajectory** | Done / active / proposed / blocked | Peut être région de S5 ou module de S4 — **≠** écran obligatoire séparé |
| **S7 History** | Ancres durables minimales | CA-PC-34 |
| **S8 Recovery** | Reprise honnête / requalification | W transversal |
| **S9 Evidence reader** | Hiérarchie business-first | Après Q/R/S · peut être surface/card in-workspace |
| **S10 EC progressive disclosure** | Summary → détail avant authorize | MD-C2-03 |
| **S11 Confirmation** | Consentement explicite **si requis** | Après EC inspect · process-local debt |
| **S12 Attempt lifecycle** | Progress + terminals | Runtime guards persistent |

**Règle :** un concept C2 ≠ un écran. Minimiser fragmentation, navigation, jargon méthode, modales systématiques.

**Entry rule (CORR-UX-06) :** A Create et B Resume sont **deux branches d'entrée alternatives**. Create peut utiliser S2. Resume rejoint **directement** S3/S8 appropriés. **Aucune** séquence Entry → Create obligatoire pour un Project existant.

---

## 7. Surface inventory (état candidat)

| ID | Surface | Priorité EA | Relation PRE-M6 |
| --- | --- | --- | --- |
| S1 | Projects entry | MUST | ProjectsPage KEEP/ADAPT |
| S2 | Create Project | MUST | NewProjectIntentionPage ADAPT (provisional) · **A only** |
| S3 | Project workspace shell | MUST | ProjectWorkspacePage + ProductShell KEEP/ADAPT · **B resume target** |
| S4 | Conversation | MUST | ConversationSurface KEEP/ADAPT |
| S5 | LPS / project state | MUST | LpsSurface KEEP/ADAPT |
| S6 | Trajectory | MUST | **GAP de représentation** — harvest partiel via LPS/history · ADAPT/NEW region |
| S7 | History | SHOULD→MUST minimal | HistorySurface KEEP/ADAPT |
| S8 | Recovery | MUST | RecoverySurface KEEP/ADAPT |
| S9 | Evidence / ReviewBundle | MUST | Partiel dans ConversationSurface · ADAPT hierarchy |
| S10 | EC progressive disclosure | MUST | Partiel · ADAPT per MD-C2-03 |
| S11 | Confirmation (if required) | MUST | Partiel · ADAPT · process-local debt |
| S12 | Attempt lifecycle | MUST | Partiel · ADAPT labels |

---

## 8. A→W journey mapping

| Journey | Steps | Surfaces | Gates | Terminal / recovery |
| --- | --- | --- | --- | --- |
| **UF-01 Project Entry** | A/B → C | S1, S2(**A**), S3(**B**/post-create) | — | **Entry alternatives** · W possible |
| **UF-02 Understand & Qualify** | C → D → E → F → G | S4, S5 | Clarification / SC-FB / SC-CONTRA | LPS updated |
| **UF-03 Trajectory & Decision** | H → I → J | S4, S5, S6 | Structural HD when needed | proposed vs decided |
| **UF-04 Prepare & Authorize** | K → L → M → N | S4, S10, S11 | **Confirmation if required** by effects/reversibility/authority/protection/policy · **after EC inspect** | authorized **or** authorization blocked (gate/authority result) |
| **UF-05 Execute & Outcome** | O → P → Q/R/S → T | S4, S12, S9 | **No routine micro-confirmation after valid authorization** ; **runtime guardrails + stop conditions remain enforceable** | SUCCESS ≠ STOP ≠ FAIL · Evidence always |
| **UF-06 Learn & Replan** | U → V | S4, S5, S6 | — | next Recommendation |
| **UF-07 Resume Anywhere** | W | S3, S8, S5, S7 | Re-confirm if invalidated | no false GO |

**Non-wizard :** A/B alternatives · Q/R/S branches · W transversal.

---

## 9. CA-PC UX coverage matrix (re-audit post-correction)

| CA | User-observable need | UX surface/state | Penpot | Coverage |
| --- | --- | --- | --- | --- |
| CA-PC-01 | Create Project durable | S2 | UF-01 · F00 | MAPPED |
| CA-PC-02 | Resume without fake GO | S1/S3/S8 | UF-07 · SE-08 | MAPPED |
| CA-PC-03 | Qualification traced | S4 | UF-02 | MAPPED |
| CA-PC-04 | Ambiguous Critical clarified | S4 | UF-02 · SE-04 | MAPPED |
| CA-PC-05 | CKC absent / fallback | S4 status text | UF-02 · SE-09 | PARTIALLY MAPPED |
| CA-PC-06 | Trajectory proposed ≠ decided | S6 | SE-02 | MAPPED |
| CA-PC-07 | HD adopts trajectory | S4/S6 | SE-01 · SE-02 | MAPPED |
| CA-PC-08 | Unqualified phrase ≠ HD | S4 | SE-01 | MAPPED |
| CA-PC-09 | Qualified phrase → HD without mandatory separate UI | S4 | SE-01 | MAPPED |
| CA-PC-10 | Rec ≠ HD · Option ≠ Rec | S4 | SE-01 | MAPPED |
| CA-PC-11 | Required Confirmation absent → refuse | S11 | SE-04 | MAPPED |
| CA-PC-12 | Consumed Confirm reconstructible | S11/S8 | SE-04 · SE-08 | PARTIALLY MAPPED |
| CA-PC-13 | Stale Confirm refused | S11/S8 | SE-08 | MAPPED |
| CA-PC-14 | EC inspect fields | S10 | SE-03 | MAPPED |
| CA-PC-15 | EC parity ≠ isomorphism | S10 | SE-03 | NOT UX-SPECIFIC |
| CA-PC-16 | Material amend → re-inspect | S10 | SE-03 | MAPPED |
| CA-PC-17 | Attempt lifecycle | S12 | SE-05 | MAPPED |
| CA-PC-18 | Out-of-scope stop (runtime remains enforceable) | S12/S9 | SE-06 · UF-05 | MAPPED |
| CA-PC-19 | Attempt terminal ≠ cycle closed | S12/S5 | SE-05 | MAPPED |
| CA-PC-20 | SUCCESS ≠ READY | S9 | SE-06 | MAPPED |
| CA-PC-21 | SC-PROT STOP readable | S9 | SE-06 · SE-07 | MAPPED |
| CA-PC-22 | Timeout FAIL ≠ SUCCESS | S12/S9 | SE-06 | MAPPED |
| CA-PC-23 | Evidence after any terminal | S9 | SE-07 | MAPPED |
| CA-PC-24 | Evidence → Nora → next | S4/S5 | UF-06 | MAPPED |
| CA-PC-25 | Resume or requalify | S8 | SE-08 · UF-07 | MAPPED |
| CA-PC-26 | Catalog evolvability | — | F00 | NOT UX-SPECIFIC |
| CA-PC-27 | SC-CAP insufficient executor | S4/S11 | SE-04 · SE-09 | MAPPED |
| CA-PC-28 | SC-SRC stale DoctrinePackage | S4 | SE-09 | MAPPED |
| CA-PC-29 | Secondary stale ≠ global STOP | S4/S5 | SE-09 | PARTIALLY MAPPED |
| CA-PC-30 | No Attempt / Confirmation without inspect when required | S10/S11 | SE-03 · SE-04 | MAPPED |
| CA-PC-31 | Cognitive path coverage | — | F00 · §9b | NOT UX-SPECIFIC / PARTIALLY MAPPED via genericity |
| CA-PC-32 | AgentCapability envelope visible enough before authorize | S10 | SE-03 · §12 | PARTIALLY MAPPED |
| CA-PC-33 | DoctrinePackage auditable | S5/S10 | SE-03 | PARTIALLY MAPPED |
| CA-PC-34 | Minimal history | S7 | UF-07 · F00 | MAPPED |
| CA-PC-35 | Method absorbed | S3/S4 | F00-01 · F00-02 | MAPPED |

**Aucun CA n'est VALIDATED / PROVEN / READY** dans ce cycle.

---

## 9b. MD-C2-01 genericity UX cross-check

Même architecture d'expérience (UF-01…07 + S1–S12 + state boards) doit couvrir les contrastes C2 **sans** écrans/moteurs dédiés par type de cycle :

| Contraste MD-C2-01 | Couverture Experience Architecture | Statut |
| --- | --- | --- |
| ≥3 natures de cycles | Surfaces génériques S3–S12 · qualification dans UF-02 · catalogue NOT UX-SPECIFIC | COVERED (architecture) |
| Standard + Critical | Même parcours · Confirmation/gates proportionnées aux effets · ≠ surface Critical auto | COVERED |
| read-only + bounded-write | EC disclosure + Attempt + Evidence génériques · scope IN/OUT | COVERED |
| authority / protected checks | UF-04 · SE-04 · SE-03 · runtime guards UF-05 | COVERED |
| SUCCESS | SE-06 · UF-05 | COVERED |
| STOP + recovery | SE-06 · SE-08 · UF-07 | COVERED |
| même mécanisme générique | Pas de parcours UI séparé par cycle type | COVERED |

**Genericity evidence ≠ REAL proof.** Pas de cinq parcours UI séparés.

---

## 9c. MD-C2-04 Capitalization orthogonality

- Capitalization = **dimension / profil orthogonal** · ≠ type de cycle Critical auto.
- L'UX **n'impose pas** une séquence ou surface Critical uniquement parce qu'un cycle est Capitalization.
- Exposition UX détaillée Capitalization = **deferred** (MD-C2-04) · reste traçabilité / mapping, pas jargon Pilote-facing obligatoire.

---

## 10. ProjectTrajectory UX contract

| État | Signification Pilote | UI rule |
| --- | --- | --- |
| done | Chemin accompli | Factuel · non éditable comme décision |
| active | En cours | Highlight textual + status |
| proposed | **Recommendation** Nora | Label utilisateur **Recommandation** · ≠ Décidé · ≠ Option |
| blocked | Bloqué | Reason textuelle · next action |

Adoption / amendement structurant = **HumanDecision**. Trajectory ≠ Roadmap ≠ HD ≠ Rec ≠ Option.

---

## 11. Option vs Recommendation vs HumanDecision UX contract

| | Option | Recommendation | HumanDecision |
| --- | --- | --- | --- |
| Source | Nora / Studio | Nora | Pilote |
| Epistemic level | Option (choix possible) | Recommendation (oriente · **sans autorité**) | Décision structurante |
| Authority | Aucune | **Aucune** | Structurante |
| Label utilisateur préféré | Option | **Recommandation** | Décision enregistrée |
| Visual | Distinct · non confondable avec Rec/HD | Distinct · **jamais stylisé comme décidé** | Distinct · recorded |
| Phrase path | — | May become HD if qualified+recorded (CA-PC-09) | No mandatory separate UI step |

**CORR-UX-03 :** le libellé générique « Proposition » est **évité** comme label unique pour Recommendation (risque de confusion Option/Rec). Si un presentationLabel legacy « Proposition » apparaît côté PRE-M6, le mapping doit rester explicite : **≠ Option · ≠ HD**.

---

## 12. ExecutionContract progressive disclosure UX contract

Per **MD-C2-03 Option B** :

### 12.1 Order

**K Prepare → L Inspect → M Confirmation if required → N effective authority / executor sufficiency → O Execute.**

### 12.2 Pilote-first summary (business-readable) before authorize — minimum

- objectif ;
- résultat attendu ;
- scope IN / OUT utile ;
- autorité effective attendue / envelope utile (AgentCapability dimensions pertinentes) ;
- gates ;
- risques ;
- protections ;
- Evidence attendue ;
- rollback / reversibility lorsque pertinent ;
- limites.

### 12.3 Full detail

Accessible **avant** autorisation · champs §11.1 C2 · **sans** imposer un composant UI · **sans** isomorphisme template Cursor v2.6 (v2.6 = process-only).

### 12.4 Amend

Material amend after inspect → re-inspect + re-evaluate Confirmations / gates.

### 12.5 EC lifecycle vs authorization blocked (CORR-UX-04)

Lifecycle EC natif C2 : **prepared → inspected → authorized** (selon parcours).

**« Authorization blocked »** = **résultat de gate / authority / executor insufficiency** (ex. authority_blocked, SC-CAP, STOP) — **≠** nouvel état lifecycle EC inventé.

Reprise possible selon cas : réduction scope · amendement EC · autre executor · requalification · nouvelle Confirmation · HD si structurant · STOP.

Attempt / CycleInstance / Project lifecycles restent **séparés**.

---

## 13. Confirmation / authority / protected-boundary UX contract

**CORR-UX-01 — formulation de référence :**

> Confirmation **if required** by effects / reversibility / authority / protection / applicable policy, **after EC inspection**.

- Confirmation **proportionnée** N1/N2/N3 by effects — **not profile alone** · **not protected-boundary alone**.
- Protected boundary = **un facteur**, pas la condition exclusive.
- Order : EC **inspecté** avant Confirmation lorsque Confirmation requise.
- States: pending / consumed / expired / invalidated — textually explicit.
- No micro-confirmation habit.
- Confirmation **ne contourne jamais** une protection ou un stop condition.
- Effectful / protected actions identifiable **before** execution (A11Y-PC-02).
- PRE-M6 process-local Confirmation = **governed debt** · honesty required · ≠ restart-safe claim.
- Effective authority = **intersection** des autorisations · jamais somme / auto-escalade.
- AgentCapability = envelope governance · ≠ effective authority · ≠ catalogue features Cursor.

---

## 14. Attempt lifecycle UX contract

accepted → running → terminal (Q/R/S)

- Progress observable.
- Attempt terminal ≠ CycleInstance closed ≠ Project archived.
- Labels user-facing via presentation helpers (KEEP/ADAPT).

**CORR-UX-02 :** Après autorisation valide :

> **No routine micro-confirmation** after valid authorization ; **runtime guardrails and stop conditions remain enforceable** throughout the Attempt (scope, protected boundaries, Git divergence, manual stop, executor insufficiency late-detected, SC-*).

Une autorisation initiale **ne neutralise pas** les stops ultérieurs.

---

## 15. SUCCESS / STOP / FAIL UX contract

| Terminal | Meaning | Must show |
| --- | --- | --- |
| SUCCESS | Functional attempt success | ≠ READY ≠ ADOPTED |
| STOP | Governed stop | why · boundary · expected action |
| FAIL | Technical failure | ≠ SUCCESS · recoverable next |

Evidence required before any claim. Textual distinction mandatory (A11Y-PC-01/03).

---

## 16. Evidence / ReviewBundle business-first UX contract

1. Business outcome / meaning for Pilote
2. What was attempted / boundary
3. Next useful action / Nora analysis hook
4. Technical detail secondary / expandable

Primary Evidence readable without mandatory complex interaction (A11Y-PC-06).

---

## 17. Recovery / continuity UX contract

- Reconstruct durable truth objects.
- Disclose process-local loss honestly.
- Paths: resume durable **or** explicit requalification.
- Never invent transcript / authority / decision / fake GO.
- Stale Confirmation → refuse · new Confirmation if required.

---

## 18. Accessibility requirements (active)

| ID | Application EA |
| --- | --- |
| A11Y-PC-01 | Status/gate/error/SUCCESS/STOP/FAIL textuels |
| A11Y-PC-02 | Protected / effectful action identifiable pre-exec |
| A11Y-PC-03 | STOP/FAIL comprehensible hors couleur |
| A11Y-PC-04 | Logical structure / heading order for future screens |
| A11Y-PC-05 | Explicit consent Confirmation when required · mechanism TBD |
| A11Y-PC-06 | Primary Evidence readable |

**WCAG full compliance = NOT CLAIMED.** Normative level beyond C2 = RECOMMENDATION / future Morris if needed.

---

## 19. Empty / loading / error / blocked states

| State | Principle | Bound |
| --- | --- | --- |
| Empty | Honest · no fake content | **DERIVED** |
| Empty — single CTA | Prefer one primary action when clear | **HYPOTHESIS / RECOMMENDATION** (CORR-UX-07) · ≠ invariant validé · ≠ composant imposé |
| Loading | Indeterminate progress · no invented result | DERIVED |
| Error | Textual · recoverable action | DERIVED |
| Blocked | Business-readable reason + next useful step | DERIVED |

Apply to S1–S12 as needed in later wireframes — principles only in this cycle.

---

## 20. PRE-M6 harvest matrix (CORR-UX-05)

Classification = **RECOMMENDATION de cycle**, pas décision Morris.

| Asset | Disposition | Harvest target | Retire later (container) | Exit condition | Proof before retire |
| --- | --- | --- | --- | --- | --- |
| ProductShell | **KEEP / ADAPT** | PE shell | — | — | — |
| ProjectsPage | **KEEP / ADAPT** | S1 | — | — | — |
| NewProjectIntentionPage | **ADAPT** | S2 (A only) | — | Visual frame exists · Morris/UX gate | Frame + E2E |
| ProjectWorkspacePage | **KEEP / ADAPT** | S3 | — | — | — |
| ConversationSurface | **KEEP / ADAPT** | S4 | — | — | — |
| LpsSurface | **KEEP / ADAPT** | S5 | — | — | — |
| HistorySurface | **KEEP / ADAPT** | S7 | — | — | — |
| RecoverySurface | **KEEP / ADAPT** | S8 | — | — | — |
| useProductConversation + presentationLabels | **KEEP** | Headless truth | — | — | — |
| Responsive thresholds | **HARVEST** | F00-07 hypotheses | — | PE viewport contract later | Contract + proof |
| project-assistant legacy JSX | **HARVEST** behavior → Option A | ConversationSurface / hooks | Legacy panel container | Option A covers F2–F8 + E2E green | Coverage matrix + E2E |
| studio-projects/** | **HARVEST** patterns utiles | ProductShell / workspace | studio-projects routes/UI | PE shell ADAPT stable | No dual-entry regression |
| vertical-slice-ui/** | **HARVEST** patterns utiles | Create/workspace ancestors | vertical-slice-ui surfaces | S2/S3 ADAPT stable | No dual-entry regression |
| Figma Freeze PRE-M6 | **HARVEST / LEARNING REFERENCE** | Tokens / learning | — | ≠ PE final | — |
| Criticality/constraints at create | **REPLACE (already)** | Qualification UF-02 | Create-time fields | — | — |

**Aucune suppression exécutée dans ce cycle.** RETIRE LATER ≠ delete now.

---

## 21. Penpot artifact index

**File (no secret):** `Nouveau fichier 1` · id `63bdc57a-636a-81ba-8008-82d2a50d5233`

Boards inchangés / corrigés selon correction ChatGPT — IDs conservés sauf recreation contrôlée documentée dans Review Pack.

| Page | Board | Role | Correction touch |
| --- | --- | --- | --- |
| 00 | F00-01 — Product Experience North Star | North star PE | unchanged unless needed |
| 00 | F00-02 — Pilote Mental Model | Mental model | **CORR-UX-01** |
| 00 | F00-03 — Information Hierarchy | IA S1–S12 | **CORR-UX-06** |
| 00 | F00-04 — Interaction & Authority Principles | Authority order | terminology only if needed |
| 00 | F00-05 — Accessibility Principles | A11Y-PC | unchanged |
| 00 | F00-06 — PRE-M6 Harvest / Adapt Matrix | Harvest | **CORR-UX-05** |
| 00 | F00-07 — Candidate Viewport Assumptions | Viewport HYPOTHESIS | unchanged |
| 01 | UF-01…UF-03 · UF-06 · UF-07 · UF-NOTE | Journeys | unchanged unless revealed |
| 01 | UF-04 — Prepare & Authorize Execution | K→N | **CORR-UX-01** |
| 01 | UF-05 — Execute & Understand Outcome | O→T | **CORR-UX-02** |
| 05 | SE-01 — Recommendation vs HumanDecision | Rec≠Option≠HD | **CORR-UX-03** |
| 05 | SE-02 | Trajectory | unchanged |
| 05 | SE-03 — ExecutionContract disclosure states | EC | **CORR-UX-04** |
| 05 | SE-04 — Confirmation / Protected Boundary | Confirmation | **CORR-UX-01** |
| 05 | SE-05…SE-08 | Attempt / terminals / Evidence / Recovery | unchanged |
| 05 | SE-09 — Empty / Loading / Error / Blocked | State principles | **CORR-UX-07** |
| 02 / 03 / 04 | — | **UNTOUCHED** | READ-ONLY |

**Viewport hypotheses (not doctrine):** Desktop 1440×1024 · Compact 1024×768 · Mobile 390×844.

---

## 22. Functional-architecture blocker register (re-run)

| ID | UX need | Existing capability | Missing boundary | Blocking UX contract? | Route | Morris? |
| --- | --- | --- | --- | --- | --- | --- |
| FAB-01 | Trajectory first-class representation | LPS/history partial | Dedicated trajectory region/model presentation | **NOT A BLOCKER** for EA | ADAPT surface in later wireframe | No |
| FAB-02 | Confirmation durability restart-safe | Process-local Confirmation | Durability semantics | **NOT A BLOCKER** for EA (honesty + debt known) | Governed debt · future cycle | Separate if durability redesign |
| FAB-03 | AgentCapability Pilote-facing summary | EC fields / capability envelope | Presentation mapping completeness | **NOT A BLOCKER** | Progressive disclosure ADAPT §12 | No |
| FAB-04 | Evidence business-first hierarchy | ReviewBundle exists | Presentation hierarchy polish | **NOT A BLOCKER** | ADAPT S9 | No |

Après CORR-UX-01…12 : **aucun** besoin démontré de découpage modules/services pour trancher l'Experience Architecture.

**Count blockers requiring functional-architecture delta:** **0** demonstrated.

---

## 23. UX assumptions / options / recommendations

| ID | Type | Content |
| --- | --- | --- |
| H-01 | HYPOTHESIS | Trajectory as region of LPS panel rather than separate route |
| H-02 | HYPOTHESIS | Viewport trio 1440 / 1024 / 390 as working references |
| H-03 | HYPOTHESIS | Evidence primarily in-workspace card/reader, not separate app mode |
| H-04 | HYPOTHESIS | Empty-state single primary CTA when action is unambiguous (CORR-UX-07) |
| R-01 | RECOMMENDATION | Keep conversation-dominant workspace · avoid multi-panel MVP |
| R-02 | RECOMMENDATION | Do not force dedicated HD screen (CA-PC-09) |
| R-03 | RECOMMENDATION | Revisit New Project once visual frame exists |
| R-04 | RECOMMENDATION | Penpot remains cycle-local · Figma standard untouched |
| R-05 | RECOMMENDATION | Prefer user label « Recommandation » for Recommendation (CORR-UX-03) |

---

## 24. Validation provenance (revue)

| Élément | Trace |
| --- | --- |
| Cross-review C1/C2 | Effectué (ChatGPT consolidated + Cursor correction CORR-UX-01…12) |
| Review Handoff correction | commit `3d7aeeeec7ef410a9360e2f5e1bb4ad8fbfdfd7c` · blob `11694b25a10165d66c56346dc9ae04a4c140b13f` |
| Verdict ChatGPT consolidation | UX EXPERIENCE ARCHITECTURE — PASS WITH NON-BLOCKING RESERVES — READY FOR MORRIS VALIDATION DECISION |
| Evidence visuelle | **24/24** Penpot boards (pages 00/01/05) re-reviewed from corrected exports — **PASS** |
| Décision Morris validation | **CONSUMED** (texte exact en métadonnées) |
| GO intégration Git locale | **CONSUMED** (texte exact en métadonnées) |

**Distinctions obligatoires :**

- validation Morris **≠** intégration main ;
- commit local **≠** push ;
- push **≠** PR ;
- PR **≠** merge ;
- validation Experience Architecture **≠** Delivery ;
- validation Experience Architecture **≠** runtime v3 adoption ;
- validation Experience Architecture **≠** autorisation du prochain sous-cycle UX.

Cette section est une **trace de revue documentaire / design**, pas un claim runtime.

---

## 25. Open Morris decisions

| ID | Question | Blocking now? |
| --- | --- | --- |
| — | None required for this **local Git integration** of the validated Experience Architecture | — |

Optional future (non-blocking · **≠** next subcycle selected): normative a11y level beyond A11Y-PC ; Confirmation durability productization ; New Project visual frame adoption ; ProjectTrajectory placement (H-01) ; responsive thresholds (H-02) ; Evidence placement (H-03).

---

## 26. Exit criteria / next gate

**Exit (Git integration locale — ce cycle) :**

- Document Experience Architecture matérialise VALIDATED BY MORRIS + NOT INTEGRATED ON MAIN
- Convergence Roadmap current-state synchronisée
- Commit projet **LOCAL** borné (EA + Roadmap uniquement)
- Review Pack FULL + Review Handoff remote verified
- **NO** project push · **NO** PR · **NO** merge

**Gates restants (NOT AUTHORIZED ici) :**

- project push / PR readiness / merge → gates Morris distincts
- next UX subcycle → **NOT SELECTED** · requalification + GO séparés
- Delivery · REAL · runtime v3 adoption → **NOT AUTHORIZED**

---

## 27. Anti-claims

Ce document **ne dit pas** :

- UX Experience Architecture **INTEGRATED ON MAIN** (tant que Git main ne le prouve pas)
- Penpot **adopted as SFIA standard**
- Figma standard **replaced**
- Functional architecture **selected**
- UI Delivery **authorized**
- Backlog **authorized**
- Product Completion **complete**
- READY FOR REAL / runtime v3 **ADOPTED**
- Project push / PR / merge **authorized**
- Next UX subcycle **selected or automatically authorized**
- WCAG **compliant**
- PRE-M6 **final PE**
- Recommendation = HumanDecision = Option
- Confirmation = protected-boundary only
- Authorization cancels later stop conditions
- SUCCESS = READY
- Attempt terminal = Cycle closed
- EC lifecycle invente un état « blocked » natif
- HARVEST = RETIRE LATER = suppression immédiate
- CORR-UX-01…12 still OPEN (ils sont **CLOSED**)

**Réserves non bloquantes conservées :** H-01…H-04 · Confirmation process-local · ProjectTrajectory runtime durability incomplète · éventuelle réserve documentaire upstream ordre EC/Confirmation si toujours applicable.

---

*SFIA Studio — Product Completion — UX Experience Architecture — VALIDATED BY MORRIS — GIT INTEGRATION AUTHORIZED — NOT INTEGRATED ON MAIN — Penpot tactical / cycle-local evidence — NO CODE — NO DELIVERY — NO REAL — NO PROJECT PUSH — NO PR — NO MERGE — NEXT UX SUBCYCLE NOT SELECTED — RUNTIME V3 NON ADOPTED*
