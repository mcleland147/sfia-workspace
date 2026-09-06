# ChatGPT Critical Design Review — CORR-PROOF-03 Method-Grounded Advisory

## 1. Timestamp (UTC)
2026-09-06T19:14:53Z

## 2. Cycle ID
`SFIA-STUDIO-PRODUCT-PROOF-CORR-03-METHOD-GROUNDED-ADVISORY-DESIGN-01`

Parent: `SFIA-STUDIO-PRODUCT-PROOF-CORR-02-B1-REAL-RETEST-01`
Cycle type: 2 — Conception fonctionnelle · EVOL · CRITICAL

## 3. Exact Morris decision consumed
MORRIS DECISION — SAME PRODUCT PROOF STOPPED ON NEW BLOCKING PRODUCT GAP “METHOD-GROUNDED ADVISORY ORCHESTRATION” — TARGET PRINCIPLE ADOPTED: NORA REMAINS CONVERSATIONALLY FREE BUT HER COGNITION MUST BE GROUNDED IN THE SFIA STUDIO METHOD — NON-MUTATING METHOD/CYCLE ORIENTATION MAY ENRICH ADVISORY REASONING BEFORE DURABLE FORMALIZATION — SFIA STUDIO DOCTRINE MUST OUTRANK THE PUBLIC “SFIA SKILLS FRAMEWORK” MEANING INSIDE STUDIO UNLESS THE PILOTE EXPLICITLY ASKS FOR THE EXTERNAL FRAMEWORK — CORR-PROOF-03 QUALIFICATION / FUNCTIONAL DESIGN AUTHORIZED — NO DETAILED ARCHITECTURE SELECTED YET — NO PRODUCT MUTATION — NO FURTHER REAL — R22 FIT + DECISION PACK + REVIEW HANDOFF REQUIRED.

## 4. Repo / ref / HEAD
- Repo: `mcleland147/sfia-workspace`
- Analysis worktree: `/Users/morris/Projects/sfia-workspace-proof-corr-02-b1-real`
- HEAD = origin/main = `1b93fca866557d67b0cf4ef7de5bad2d6dceecda`
- Tracked dirty: EMPTY (only untracked `.tmp-sfia-proof/`, `node_modules` symlink)

## 5. Input Review Handoff
- tip: `2dad11e66ec0a7a856a76e60739950acc0f140cc`
- blob: `1bd019fb4b2a4f1123a3c4a43e78bb43223960b3`
- Note: handoff predates CORR-PROOF-03 REAL observation; Phase 0 captures that evidence.

## 6. Phase 0 REAL evidence
**PASS** — existing SAME Product Proof persistence located and read-only.

| Field | Value |
|---|---|
| Project | Suivi de contrat |
| projectId | `prj:ecc81c56-18cd-4e8f-84d6-c65230c7bfa8` |
| LPS | `lps:f1649143-7d3e-40a0-b8f6-1b1d9652b90c` v1 |
| Session key | `f1-default` |
| Session items | 12 |
| Canonical users | 3 |
| Canonical assistants | 4 |
| CycleInstance | 0 |
| HumanDecision | 0 |
| ExecutionContract | 0 |
| ProjectTrajectory rows | 0 |
| Product DB | dogfood `.sfia-exec/product/oa-product.sqlite` |
| Session DB | dogfood `projects/sfia-studio/.sfia-exec/product/nora-session.sqlite` |
| ZERO new LIVE | confirmed (this cycle) |

Truth C (unchanged across observed advisory turns):
- objective/context: `J'aimerai créer une application pour suivre des contrats`
- activeCycleInstanceId: null
- No silent LPS mutation observed for the advisory turns (version remains 1; no Cycle/HD/EC).

## 7. Exact canonical transcript (material turns)

### Turn A — user (seq 6)
```
peux-tu m'aider a préparer la création de mon application de suivi de contrat ?
```

### Turn A — Nora (seq 8) — assistant id `msg_009e224ab1d30cdb006a9db13b0d7087d2bc0329c138ef2328`
```
Oui. Voici une base de préparation pour ton application.

## 1. Vision du produit

**Objectif :** permettre à MC Consulting IT de centraliser et suivre ses contrats clients B2B, leurs échéances, leurs responsables et leurs documents.

**Hypothèse de départ :** application réservée aux utilisateurs internes de MC Consulting IT.

## 2. MVP recommandé

### Gestion des contrats
- créer, modifier et archiver un contrat ;
- associer un contrat à un client ;
- enregistrer les dates de début, fin et renouvellement ;
- renseigner le montant, le statut et le responsable ;
- joindre le document du contrat.

### Recherche et suivi
- rechercher par client, référence ou responsable ;
- filtrer par statut ;
- afficher les contrats arrivant bientôt à échéance ;
- consulter l’historique des modifications.

### Alertes
- alerter avant l’échéance ;
- définir les délais d’alerte, par exemple 90, 60 et 30 jours ;
- identifier la personne responsable du suivi.

## 3. Objets métier principaux

- **Client**
- **Contrat**
- **Utilisateur**
- **Échéance**
- **Document**
- **Notification**
- **Historique des changements**

## 4. Exemple de fiche contrat

- Référence
- Client
- Type de contrat
- Date de signature
- Date de début
- Date de fin
- Modalités de renouvellement
- Montant
- Responsable interne
- Statut : brouillon, actif, à renouveler, expiré, résilié
- Document associé
- Notes

## 5. Écrans à prévoir

1. Tableau de bord
2. Liste des contrats
3. Détail d’un contrat
4. Création/modification d’un contrat
5. Liste des clients
6. Notifications et échéances
7. Administration des utilisateurs

## 6. Décisions à prendre

Les choix qui modifieront réellement le périmètre sont :

- accès interne uniquement ou accès client également ;
- stockage des documents dans l’application ou lien vers un stockage existant ;
- notifications par email, dans l’application, ou les deux ;
- gestion des contrats uniquement ou aussi des prestations, factures et renouvellements ;
- nombre de niveaux de droits ;
- besoin d’un historique légal/auditable des modifications.

## 7. Première trajectoire de réalisation

1. Valider les utilisateurs et leurs besoins.
2. Définir les champs obligatoires d’un contrat.
3. Décrire les statuts et le cycle de vie.
4. Concevoir les écrans principaux.
5. Construire le MVP.
6. Tester avec quelques contrats réels.
7. Ajouter ensuite les fonctions avancées.

**Recommandation :** commencer par les contrats, les clients, les échéances et les alertes. La facturation, les signatures électroniques et l’accès client peuvent rester hors du premier périmètre.
```

### Turn B — user (seq 9)
```
ok si on utilise la méthodologie SFIA, comment je dois piloter ce projet ?
```

### Turn B — Nora (seq 11) — assistant id `msg_009e224ab1d30cdb006a9db1e380bc87d2900ef717ea8e8e50`
```
Oui. Point important : **SFIA est principalement un référentiel de compétences et de responsabilités**, pas une méthode complète de gestion de projet. Tu peux donc l’utiliser pour attribuer clairement les responsabilités à chaque étape.

## Mode de pilotage recommandé

### 1. Cadrer le projet

Définir et faire valider :

- l’objectif métier ;
- les utilisateurs internes ;
- le périmètre du MVP ;
- les indicateurs de réussite ;
- les contraintes de sécurité, confidentialité et conformité ;
- le budget et le calendrier cible.

**Livrable :** fiche de cadrage validée par le décideur métier.

### 2. Identifier les rôles

Exemple :

| Rôle | Responsabilité |
|---|---|
| Sponsor métier | Valide les objectifs, priorités et arbitrages |
| Pilote produit | Organise le besoin et priorise le backlog |
| Référent contrats | Décrit les règles métier |
| Concepteur UX | Prépare les parcours et écrans |
| Développeur | Réalise la solution |
| Référent sécurité | Vérifie les accès et la protection des données |
| Utilisateurs pilotes | Testent et valident les fonctionnalités |

SFIA peut ensuite servir à préciser les compétences attendues pour chaque rôle, sans confondre **compétence** et **autorité de décision**.

### 3. Organiser le projet par étapes

1. **Découverte**
   - recueillir les besoins ;
   - comprendre le cycle de vie d’un contrat ;
   - identifier les risques.

2. **Conception**
   - définir les données ;
   - concevoir les écrans ;
   - formaliser les règles d’échéance et d’alerte.

3. **Construction du MVP**
   - développer par fonctionnalités courtes ;
   - faire relire régulièrement les résultats.

4. **Validation**
   - tester avec des contrats représentatifs ;
   - vérifier les droits d’accès ;
   - valider les alertes et les données.

5. **Mise en service**
   - importer les contrats ;
   - former les utilisateurs ;
   - organiser le support et les évolutions.

### 4. Piloter avec des preuves

À chaque étape, conserver :

- décisions validées ;
- exigences ;
- maquettes ;
- tests réalisés ;
- anomalies ;
- risques et actions ;
- validation métier.

Cela évite qu’une discussion ou une idée soit considérée automatiquement comme une décision officielle.

### 5. Mettre en place un rythme simple

- **Point hebdomadaire projet :** avancement, risques, décisions nécessaires.
- **Démonstration régulière :** présentation d’une fonctionnalité utilisable.
- **Revue de priorité :** ajustement du backlog.
- **Validation par étape :** accord explicite avant de poursuivre.

## Recommandation pour ton projet

Commence par un **MVP interne** comprenant :

- clients ;
- contrats ;
- responsables ;
- échéances ;
- statuts ;
- documents ;
- alertes ;
- droits d’accès simples.

La première décision à obtenir est : **qui est le sponsor métier et qui peut valider officiellement le périmètre, les priorités et la mise en service ?**
```

## 8. Model / provider metadata
- Configured Studio model (runtime env): `gpt-5.6-luna`
- Provider path: LIVE OpenAI / Nora Agent+Runner (prior REAL; no Fake forced)
- Exact LIVE analyzeIntent payload: **NOT OBSERVED** (not retained in Session)
- Assistant message IDs present (`msg_009e224ab1d30cdb…`) prove Responses-path LIVE turns
- Reasoning items present earlier in session (dogfood continuity)

## 9. CORR-PROOF-02 B1 disposition
**REAL REVALIDATED AT ADVISORY-FREEDOM SCOPE**

Evidence: Turn A uses MC Consulting IT / B2B context, advances MVP/objects/screens/decisions/trajectory/recommendation, no MW5 generic Clarification requise, no HD/EC/Cycle synthesis.

CORR-PROOF-02 is **not** globally failed. Later Product Proof capability failed separately.

## 10. New blocker classification
**Primary:** `METHOD_GROUNDED_ADVISORY_ORCHESTRATION_GAP`

Supporting / symptoms:
- `METHOD_GROUNDING_GAP` — F1 lacks DoctrinePackage/CKC body
- `SFIA_IDENTITY_COLLISION` — Nora defaults “SFIA” to public Skills Framework
- `COGNITIVE_METHOD_ORCHESTRATION_GAP` — method lens only after formalizationReady
- `TRAJECTORY_GUIDANCE_GAP` — ProjectTrajectory unused on F1/F2 send path
- `SFIA_DOCTRINE_GROUNDING_GAP` — doctrine pin IDs only on F1 prompt

## 11. Morris Product observation
After B1 freed advisory cognition, asking how to pilot with “méthodologie SFIA” produced a competent generic project-management answer that **misidentified SFIA as a skills/responsibility framework**, not SFIA Studio methodology. Pilote still needs ChatGPT/external method help to get Studio-native piloting guidance.

## 12. Return-to-ChatGPT pressure
**BLOCKING** for the Product Proof continuation at method-aware piloting. Advisory freedom alone is insufficient for the Studio value proposition.

## 13. Convergence qualification
- Primary: V3-F05 (conversation → governed chain) + V3-F01 (method/doctrine grounding)
- Support: V3-F04 (epistemic separation), V3-F06 (trajectory)
- Preserve: V3-F11/V3-F12 (authority/reversibility)
- Milestone: PRODUCT PROOF — CORR-PROOF-03 method-grounded advisory design
- Gap: method lens missing on ordinary F1
- No parallel architecture preferred

## 14–20. Current runtime flow (code-backed)

Entry: `projectAssistantSendAction` → `orchestrateAssistantSend` (`f2/orchestrateF2.ts`).

```
Session + Truth C summary
→ analyzeIntent (NO ckcContext in production)
→ resolveTransitionReadiness
→ if !formalizationReady:
     F1 orchestrateProjectAssistantTurn
       → buildProjectSystemPrompt (generic advisory + LPS/doctrine PIN only)
       → runNoraCognitiveTurn (Git/GitHub tools only)
→ if formalizationReady:
     qualifyWithCkc (non-mutating)
     → [optional] reasonWithResolvedCkcContext
     → createCycle (mutating) → proposal …
```

### F1 methodology inputs (exact)
- Truth C / LPS summary string
- doctrine **pin metadata** (`id/version/status/digest`) — not method body
- advisory contract + hard authority limits
- chat history / ProductSqliteSession continuity
- tools: Control Tower Git/GitHub only — **no doctrine/CKC tool**

### CKC timing (exact)
Resolved only inside `qualifyWithCkc` / `QualifyCycleWithCkc` on **formalization-ready F2 path**, after transition gate.

### Cycle qualification timing (exact)
Same: only after `formalizationReady` via `qualifyWithCkc` (`orchestrateF2.ts` ~847+).

### ProjectTrajectory on this path
Durable OA exists (`SqliteTrajectoryRepository`) but **not loaded/prompted** on ordinary F1/F2 send path (W2 surfaces use it).

### Root cause (verified)
B1 correctly routes ordinary advisory to F1; F1 is conversationally free but **method-blind**. Studio CKC/DoctrinePackage cognitive seam exists and is already used **before durable createCycle on F2**, but is never composed into F1. Pretrained public-SFIA priors therefore dominate explicit “méthodologie SFIA” questions.

## 21. Root causes (ordered)
1. Architecture split: method cognition gated behind formalizationReady.
2. `buildProjectSystemPrompt` identity = generic product partner; no Studio-method default for “SFIA”.
3. `analyzeIntent.ckcContext` unused in production.
4. No pure non-mutating method-orientation step feeding F1.
5. No F1 tool/read path for DoctrinePackage body (and tools alone would be weaker than Studio pre-resolve).

## 22. Asset classification

| Asset | Disposition |
|---|---|
| Nora Agent | ADAPT |
| Runner | KEEP |
| ProductSqliteSession | KEEP |
| buildProjectSystemPrompt | ADAPT / COMPLETE |
| analyzeIntent | KEEP / ADAPT (unused ckcContext hook) |
| transitionReadiness | KEEP |
| qualify / qualifyWithCkc | KEEP / HARVEST for read-only orientation |
| CKC resolver | KEEP / HARVEST |
| ckcCognitiveContext | HARVEST / ADAPT into F1 composition |
| reasonWithResolvedCkcContext | HARVEST / ADAPT (optional cognitive enrich; not authority) |
| DoctrinePackage | KEEP / COMPLETE for F1 body/lens |
| LPS | KEEP |
| ProjectTrajectory | COMPLETE later on F1 when present / FREEZE inventing now |
| MW5 | KEEP / stay off ordinary advisory front door |
| HumanDecision | KEEP / FREEZE synthesis |
| ExecutionContract | FREEZE on advisory |

## 23. FR-01…FR-20 disposition (design coverage intent)

| FR | Design treatment |
|---|---|
| FR-01 Method-grounded default | REQUIRED — Studio method in F1 |
| FR-02 Conversational freedom | PRESERVE B1 |
| FR-03 Non-mutating orientation | REQUIRED pure step |
| FR-04 Progressive certainty | tentative cycle = hypothesis |
| FR-05 CKC as lens | when confidence permits |
| FR-06 No raw CKC UI | KEEP |
| FR-07 Method value visible indirectly | REQUIRED |
| FR-08 Trajectory-aware | when available; optional phase |
| FR-09 No forced waterfall | REQUIRED |
| FR-10 SFIA identity | Studio default; public only if explicit |
| FR-11 Doctrine hierarchy | Studio doctrine > pretrained |
| FR-12 Epistemic honesty | KEEP |
| FR-13 Advisory before clarification | KEEP B1 spirit |
| FR-14 Material clarification only | KEEP |
| FR-15 No silent formalization | REQUIRED |
| FR-16 Formalization boundary | KEEP transitionReadiness |
| FR-17 One canonical response | KEEP |
| FR-18 Source integrity | fail honest if doctrine unresolved |
| FR-19 Graceful degraded cognition | product-native fallback ≠ public SFIA |
| FR-20 Business-first | KEEP |

## 24. S1…S18 acceptance plan (design / future proof)
S1 method-grounded prep without questionnaire · S2 Studio method not Skills Framework · S3 public SFIA when explicit · S4–S6 orientation confidence · S7 use existing trajectory/cycle · S8–S10 CKC/doctrine availability · S11–S13 authority · S14 session restart · S15 no magic wording · S16 no questionnaire · S17 state-sensitive guidance · S18 Truth C non-promotion.

## 25. R22 capability fit
Packages: `openai@6.48.0`, `@openai/agents@0.17.0`. NO LIVE call.

| Capability | Disposition |
|---|---|
| Agent instructions | USE/KEEP → ADAPT |
| Dynamic instructions | ADAPT/COMBINE (Studio-composed preferred) |
| Runner | USE/KEEP |
| Sessions (ProductSqliteSession) | USE/KEEP |
| tools | KEEP existing; prefer Studio pre-resolve for doctrine (not tool-first SoT) |
| structured outputs | DEFER for F1 prose; Studio-side orientation if needed |
| guardrails (nested Agent) | DEFER/REJECT |
| context composition | COMBINE / COMPLETE Studio |
| handoffs | DEFER/REJECT |

**Architectural answer:** YES — complete/adapt existing architecture; no second Agent/Runner/Session required.

## 26–28. Design options & recommendation

### OPTION A — Prompt-only methodological grounding
Inject stronger Studio-method identity into F1 instructions.
- Pros: small change, preserves B1 freedom
- Cons: weak FR-11/18 without resolved DoctrinePackage/CKC; identity collision hard to defeat with static text alone
- Fit: insufficient as sole fix for S2

### OPTION B — Non-mutating method orientation + existing CKC seam
Studio-side pure/read-only orientation (reuse analyzeIntent readiness + qualify/CKC resolve without createCycle) → compose lens into F1 → retain durable formalization behind transitionReadiness.
- Pros: reuses F2 cognitive seam; authority-safe; deterministic testable
- Cons: needs careful confidence gating to avoid hidden questionnaire
- Fit: **strong**

### OPTION C — DoctrinePackage-grounded F1 without cycle lens
Always inject global Studio doctrine into F1; CKC only after durable transition.
- Pros: fixes identity collision cheaply
- Cons: weaker adaptive cycle/trajectory guidance (S5–S8/S17)
- Fit: interim / incomplete

### OPTION D — Tool-driven methodological retrieval
Nora tools fetch DoctrinePackage/CKC mid-turn.
- Pros: one Agent still
- Cons: latency, nondeterminism, weaker source integrity vs Studio pre-resolve; questionnaire risk
- Fit: reject as primary

### OPTION E — Hybrid
Global Studio-method identity + non-mutating orientation + CKC lens when confidence permits + trajectory when present.
- Pros: highest FR coverage
- Cons: larger envelope if overbuilt
- Fit: prefer **lean-E = B + Studio identity + trajectory-when-present**

### Comparison (summary)
| Option | Method quality | Authority safety | Reuse | Complexity | Questionnaire risk |
|---|---|---|---|---|---|
| A | Low–Med | High | High | Low | Low |
| B | High | High | High | Med | Med (mitigate) |
| C | Med | High | High | Low–Med | Low |
| D | Med | Med | Med | Med–High | Med–High |
| lean-E | Highest | High | High | Med–High | Med (mitigate) |

### Recommendation (≠ Morris decision)
**Recommend lean-E / B-first completion:**
1. ADAPT F1 prompt: Studio “SFIA” identity default; public framework only if explicitly requested.
2. COMPLETE non-mutating method orientation before F1 (pure; no Cycle/LPS write).
3. HARVEST existing CKC cognitive seam as read-only lens when orientation confidence sufficient.
4. KEEP transitionReadiness / F2 durable formalization / HD/EC authority unchanged.
5. Optionally include ProjectTrajectory snapshot when already present (do not invent).

## 29. Proposed target flow
```
Pilote turn
→ ProductSqliteSession + Truth C
→ analyzeIntent (non-mutating)
→ NEW: resolveMethodOrientation (pure; tentative cycle/work type + confidence)
→ if confidence sufficient & sources resolvable:
     load DoctrinePackage/CKC cognitive lens (read-only)
→ buildProjectSystemPrompt(+ Studio identity + orientation + lens + trajectory if any)
→ F1 Runner (one response)
→ separately, only if formalizationReady:
     existing F2 qualify → durable cycle → proposal …
```

## 30. Authority analysis
Method orientation / CKC lens = guidance only (`executionAuthority: false`, recommendation ≠ HD). No createCycle/LPS/HD/EC from advisory path. Existing MW5/HD/EC safeguards retained.

## 31. Persistence / mutation analysis
Allowed: normal Session append for the turn.
Forbidden from orientation: CycleInstance, LPS mutation, Proposal-as-Truth, HD, EC.
Truth C unchanged by method hypotheses.

## 32. No-parallel-architecture check
**NONE required** if lean-E/B-first. Explicitly reject second Agent/Runner/Session/method engine.

## 33. Cost / latency
+1 optional non-mutating qualify/CKC read and/or orientation structured step before F1 when confidence path engages. Avoid tool-chasing loops. No Stage B.

## 34. Risks
- Over-eager orientation → questionnaire regression (mitigate confidence + advisory-first)
- Prompt-only false security (reject A alone)
- Public SFIA bleed if doctrine unresolved (FR-18 fail closed on method claims)
- Over-claiming CORR-PROOF-02 failure (avoid)

## 35. Debt / exit
Debt: temporary prompt-only identity patch if staged delivery. Exit: remove once orientation+CKC F1 composition lands. No runtime v3 adoption implied.

## 36. Deterministic proof plan
- Extend corrProof02.b1 with CORR-PROOF-03 D0:
  - S2: “méthodologie SFIA” → Studio method language; forbid Skills Framework default claim
  - S3: explicit public framework → allowed + distinguished
  - S5: cadrage lens without CycleInstance
  - S15: no magic wording dependence
  - mutation: LPS/Cycle/HD/EC unchanged on advisory
- Unit tests for pure orientation resolver + prompt composition
- Harvest existing CKC authority tests

## 37. Future REAL proof plan
SAME Project “Suivi de contrat”; re-ask S2-class question; expect Studio-method piloting guidance; preserve B1 freedom on ordinary product shaping; ZERO Stage B; separate Morris REAL gate.

## 38. No product mutation proof
This cycle: read-only analysis + untracked evidence + Review Pack/Handoff only.
`git status` tracked product files: EMPTY.

## 39. ZERO NEW REAL
Confirmed.

## 40. Product Proof status
**OPEN / BLOCKED** at CORR-PROOF-03 (method-grounded advisory).
CORR-PROOF-02 B1 advisory-freedom remains REAL revalidated at tested scope.

## 41. Stage B
NOT AUTHORIZED

## 42. runtime v3
NON ADOPTED

## 43. production routing
NOT SELECTED

## 44. Explicit Morris decisions required next
1. Accept/reject recommended lean-E / B-first design (architecture decision).
2. If accepted: authorize Delivery envelope (files/components) — still separate GO.
3. Decide whether trajectory-on-F1 is in first delivery slice or deferred.
4. REAL retest remains unauthorized until Delivery + deterministic proof + Morris REAL GO.

## 45. Review Handoff publication proof
HANDOFF_PARENT: `2dad11e66ec0a7a856a76e60739950acc0f140cc`
Publisher: `scripts/sfia/publish-review-handoff.sh`
Message: `docs(review-handoff): qualify CORR-PROOF-03 method-grounded advisory`
(Tip/blob/verdict filled after publish)

## Final design verdict
**PASS** — Phase 0 evidence reconciled; root cause code-backed; options compared; recommendation issued without claiming architecture adoption; ZERO product mutation; ZERO new REAL.
