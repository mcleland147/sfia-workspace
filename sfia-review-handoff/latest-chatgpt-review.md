# SFIA Studio — M-HD-01 Generic Mission HumanDecision Binding — Technical Contract Review Pack FULL

- **Horodatage** : 2026-10-16T13:42:28+0200 (Europe/Paris)
- **GO Morris** : M-HD-01 — GENERIC MISSION HUMANDECISION BINDING — TARGETED TECHNICAL CONTRACT
- **Direction** : **O1 ADOPTED BY MORRIS** (extension ciblée OA HumanDecision) — PENDING GIT TRACE / IMPLEMENTATION GATE
- **Cycle** : 6 — Architecture technique · **Profil** : CRITICAL · **Typologie** : DOC — Decision Support
- **Capacité** : V3-F05 · V3-F11 / V3-F12 / V3-F14
- **CKC** : ckc:studio:technical-architecture
- **Mode** : **READ-ONLY Product** — zéro mutation code/tests/schema Product
- **Handoff Decision Pack prior** : `ba0be3fb115bc6550f23dc55b4f8f7d7008da72e` / blob `81b0ea787026181a39d2fe1257b9de7381e9a82b`

## 1. Verdict

**M-HD-01 TECHNICAL CONTRACT QUALIFIED**

**READY FOR MORRIS IMPLEMENTATION CONTRACT GATE**

**NO SQL MIGRATION REQUIRED — PROVEN** (table `oa_human_decisions` / `payload_json`)

**MODELED / RUNTIME CONTRACT CHANGE — MORRIS IMPLEMENTATION GATE** (types + `validateDecisionBasis` + Product prepare)

Anti-claims : PRODUCT CODE UPDATED · PRODUCT GIT INTEGRATED · PR READY · READY FOR REAL · HUMAN QA PASS · P6 GLOBAL PASS · RUNTIME V3 ADOPTED — **NON**.

## 2. Git Truth

| Check | Valeur |
| --- | --- |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH `896ff59c` |
| Candidat HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Candidat branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| Path | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| Dirty Delivery candidate | EXPECTED — **non muté ce cycle** (seul Review Pack réécrit) |
| Runtime :3020 | untouched |
| Aucun reset/stash/clean/rebase | OUI |

### Status

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts

```

## 3. Convergence Pre-check

| Item | État |
| --- | --- |
| M-HD-01 direction O1 | **ADOPTED BY MORRIS** (ce GO) |
| Gap | Structural Generic PREPARE sans reprise HD |
| Select/Start/Result sans cycle | DETERMINISTIC Fake (prior) |
| HD–mission | NOT PROVEN — contrat technique qualifié ici |
| E4–E8 | NOT PROVEN |
| Exit | Reprise même mission + HD vérifiée + decisionRefs |

## 4. Sources

Template · routing · guardrails · Build Doctrine · Roadmap · C1 · P2/P6 · Architecture D-ER · Doctrine 30/32/34/35/37 · CKC Architecture · Handoff `ba0be3fb` Decision Pack · OA Decision types/invariants/digest/record/get/supersede/sqlite · Product prepareGeneric / pendingOffer / authorizeGeneric / prepareFromW2Decision · db.ts M3 schema · modeled human-decision.schema.json.

## 5. Décisions

**Consommées :** D-ER-16…19 · Option B · Project-scoped Tool Access · **M-HD-01 O1**.

**Non décidées (gates résiduels) :** forme exacte figée au Delivery (ce pack propose le minimal) · migration SQL (qualifiée NON) · Delivery Product · Git Product Integration · nouvel objet PresentedMission durable pré-HD (recommandation : NON).

## 6. Constats fichier:ligne (OA / Product)

| Constat | Réf |
| --- | --- |
| `DecisionBasisSourceType` = proposal \| trajectory_option \| candidate_trajectory \| work_recommendation — **pas** generic_mission | `types.ts:150–154` |
| `proposalContext` **obligatoire** pour tout DecisionBasis | `types.ts:170` ; `invariants.ts:234–241` |
| `validateDecisionBasis` refuse tout sourceType hors whitelist | `invariants.ts:207–214` |
| work_recommendation interdit `prop:` sourceRef | `invariants.ts:309–315` |
| HD `schemaVersion` const `0.1.0-oa` | `types.ts:218` |
| SQLite persiste HD complet via `payload_json` | `sqliteDecisionRepository.ts:37,53–68` |
| Table SQL sans colonne DecisionBasis | `db.ts:91–109` |
| Generic PREPARE `decisionRefs: []` | `prepareGenericExecutionContractDraft.ts:780` |
| Structural → `STRUCTURAL_HUMAN_DECISION_REQUIRED` | `prepareGeneric…:553,591` |
| Offer store process-local ; restart NOT PROVEN | `pendingGenericPrepareOfferStore.ts:11–16` |
| `missionKey`/`offerFingerprint` = hash tronqué 24 | `prepareGeneric…:315–335,370–403` |
| Empty decisionRefs interdit si stamp structural | `executionMateriality.ts:187–194` |
| W2 prepare lie HD via DecisionBasis trajectoire (chemin distinct) | `prepareExecutionContractFromW2Decision.ts:192–226` |
| Modeled JSON schema HD : `additionalProperties:false`, basis non détaillé runtime | `human-decision.schema.json` — runtime gate = TS validator |

## 7. Contrat technique minimal proposé (COMPLET)


================================================================================
M-HD-01 — GENERIC MISSION HUMANDECISION BINDING
TECHNICAL CONTRACT (PROPOSED — NOT IMPLEMENTED)
Direction O1 ADOPTED BY MORRIS — PENDING IMPLEMENTATION GATE
================================================================================

A. Generic Mission Subject (Product-qualified sealed presentation)

Conceptual type (not Product code):

```
GenericMissionSubject {
  schemaVersion: "0.1.0-gms"          // presentation seal version (NOT HD schemaVersion)
  missionSubjectId: string            // "gms:" + sha256(canonicalPresentation).hex
  projectId: string                   // "prj:…"
  cycleInstanceId: string | null      // optional; NEVER invented
  presentedAtIso: string
  // Product-qualified facts (authoritative at seal time — NOT Nora claims alone)
  objective: string
  expectedOutcome: string
  scopeNarrative: string
  scopeIn: string[]
  scopeOut: string[]
  materiality: "structural" | "non_structural" | "unknown"
  materialityReasonCodes: string[]
  repositoryBindingIdentity: string | null   // Product binding if any
  pathRoot: string | null
  // Effects envelope sealed for HD (Product-resolved, not free Nora invent)
  effects: {
    intentKind: string | null
    artifactType: string | null
    requestedOperation: string | null
    requiredCapabilities: string[]      // Product envelope after resolution
    expectedOutputs: string[]           // only if Product-authoritative
    reversibilityExpectation: "reversible" | "irreversible" | "unknown" | null
    stopConditions: string[]
    risks: string[]
    reservations: string[]
  }
  // Signal facts used for structural qualification at seal
  impactSignals: {
    structuralChange: boolean
    securityImpact: boolean
    architectureImpact: boolean
    dataImpact: boolean
    irreversible: boolean
  }
  // Currentness anchors
  lpsId: string
  lpsVersion: number
  doctrineDigest?: string
  // Digests
  presentationDigest: string          // FULL sha256 hex of canonicalizeJson(subjectWithoutDigests)
}
```

Layer separation (mandatory):
- Nora proposal        → non-authoritative candidates
- Product-qualified    → materiality, pathRoot, capability envelope, repo binding
- Presented mission    → GenericMissionSubject sealed for Pilote
- HumanDecision        → OA durable accept/refuse on that subject
- ExecutionContract    → PREPARE after verified HD; decisionRefs = [decisionId]
- Effective authority  → AUTHORIZE / Confirmation / Attempt (unchanged)

missionKey / offerFingerprint (CURRENT):
- 24-char truncated hashes; process-local offer store
- MISSING as authority: full digest, durable restart, materiality stamp,
  repository binding identity, LPS version, doctrineDigest
- MUST NOT be used as sole authority under M-HD-01
- MAY seed UI continuity only; HD must seal full presentationDigest

B. DecisionBasis Generic extension (OA types — design only)

```
DecisionBasisSourceType += "generic_mission"

DecisionBasisGenericMissionContext {
  missionSubjectId: string            // == DecisionBasis.sourceRef
  presentationDigest: string          // == DecisionBasis.sourceDigest
  subjectSchemaVersion: "0.1.0-gms"
  objective: string
  expectedOutcome: string
  scopeNarrative: string
  scopeIn: string[]
  scopeOut: string[]
  materiality: "structural" | "non_structural" | "unknown"
  repositoryBindingIdentity: string | null
  pathRoot: string | null
  requiredCapabilities: string[]
  expectedOutputs: string[]
  reversibilityExpectation: "reversible" | "irreversible" | "unknown" | null
  stopConditions: string[]
  impactSignals: { … five booleans … }
  optionRefs: string[]                // presented options
  selectedOptionRef: string           // must ∈ optionRefs
  recommendedOptionRef?: string       // Nora advice only — never authority
  // optional cycle mirror (must match DecisionBasis.cycleInstanceId)
}

DecisionBasis {
  sourceType: "generic_mission"
  sourceRef: missionSubjectId
  sourceDigest: presentationDigest
  projectId
  cycleInstanceId?: string            // optional
  proposalContext: DecisionBasisProposalContext  // KEEP as LPS/currentness anchor
  genericMissionContext: DecisionBasisGenericMissionContext
  // trajectoryContext / candidateTrajectoryContext / workRecommendationContext ABSENT
  executionBasis: { … subset aligned to sealed effects … }
}
```

proposalContext (KEEP — do not invent fake Proposal):
- Already required for ALL DecisionBasis including work_recommendation
  (types.ts:170 ; invariants.ts:234–241).
- Fields = lpsId, lpsVersion, doctrineDigest?, activeCycleInstanceId?, ckcResolutionRef?
- Responsibility = Product currentness anchor, NOT a Proposal object.
- Renaming is OPTIONAL future cleanup — NOT required for O1 Delivery.
- FORBIDDEN: fabricate proposal id / prop: sourceRef for generic_mission
  (same rule as work_recommendation forbids prop: — invariants.ts:309–315).

C. sourceRef / sourceDigest / version rules

1. sourceRef = missionSubjectId = "gms:" + sha256(canonicalPresentationSansDigests).hex
2. sourceDigest = presentationDigest = same FULL sha256 hex (not truncated)
3. HumanDecision.subject = missionSubjectId (enables listAcceptedBySubject supersession)
4. HumanDecision.schemaVersion remains "0.1.0-oa" (additive nested basis, as WR/GF did)
5. GenericMissionSubject.schemaVersion "0.1.0-gms" versions the presentation seal only
6. On PREPARE resume: recompute presentationDigest from CURRENT Product-qualified
   facts; must equal HD.decisionBasis.sourceDigest OR fail SUBJECT_STALE
7. Material mission field change ⇒ new subject id ⇒ old HD not reusable (HD06/HD09)

D. Pilote decision options (minimal closed set)

optionRefs (required, ≥1):
- "opt:generic-mission:accept-prepare" — authorize PREPARE of this sealed subject
- "opt:generic-mission:refuse" — refuse structuring mission
- "opt:generic-mission:request-amend" — optional; forces new presentation (no reuse)

selectedOptionId / selectedOptionRef must match.
recommendedOptionRef may mirror Nora advice; NEVER grants authority.
status on accept path: "accepted" (RecordHumanDecision OA).
Refuse → status "refused" — no PREPARE unlock.
authority: "pilot" (N3 + canActAsPilot) for structuring Generic Mission.

E. HD verification + supersession (before decisionRefs)

PREPARE structural resume MUST:
1. Load HD via getHumanDecision(decisionId) — OA durable
2. status === "accepted"
3. projectId match
4. decisionBasis.sourceType === "generic_mission"
5. validateDecisionBasis (extended) passes
6. subject / sourceRef / sourceDigest coherence
7. selectedOptionRef === accept-prepare
8. cycleInstanceId match policy (null↔null or exact)
9. No other accepted HD for same subject unless this is current
   (supersedeExistingAccepted semantics — supersedeHumanDecision.ts:275+)
10. Recompute Product-qualified presentationDigest == sourceDigest
11. Materiality still structural (or policy-consistent) under CURRENT Product
12. THEN set decisionRefs: [decisionId] on EC build
13. NEVER invent HD; NEVER treat Confirmation as HD; NEVER auto-EXECUTE

Refuse codes (target):
HD_ABSENT | HD_REFUSED | HD_REVOKED | HD_SUPERSEDED | HD_PROJECT_MISMATCH |
HD_MISSION_MISMATCH | HD_SCOPE_MISMATCH | HD_EFFECTS_MISMATCH |
HD_SUBJECT_STALE | HD_AUTHORITY_INVALID | HD_SOURCE_TYPE_INVALID |
CONFIRMATION_IS_NOT_HUMAN_DECISION | CYCLE_NOT_ACTIVE (if EC bound to closed cycle)

F. decisionRefs → EC

- assertDecisionRefsAdmissibleForConfirm already forbids empty refs for structural
  (executionMateriality.ts:187–194).
- Generic structural PREPARE today hard-wires decisionRefs: [] (prepareGeneric…:780)
  and blocks earlier — resume path fills verified refs only after E.
- Non-structural missions: keep decisionRefs: [] (no systematic HD — B15).

G. Idempotent resume

- Same decisionId + same sealed subject + same Product currentness → same
  executionContractId / idempotencyKey derivation (extend stableMissionKey to
  include decisionId + presentationDigest — Delivery detail).
- Repeat GO must not create duplicate accepted HD for same subject without supersede.
- RecordHumanDecision supersedeExistingAccepted remains the OA mechanism.

H. With / without cycle

- cycleInstanceId optional on subject + DecisionBasis + EC
- Never invent cycle / cycleTypeId / copy closed cycle
- If cycle present on subject: validate active + project match at HD record AND PREPARE
- Closed cycle on EC remains CYCLE_NOT_ACTIVE (existing W3-A)

I. Compatibility Product / OA

KEEP:
- RecordHumanDecision / GetHumanDecision / SupersedeHumanDecision
- SqliteDecisionRepository payload_json persistence
- DecisionBasisProposalContext LPS anchor
- computeDecisionBasisSourceDigest
- ExecutionContract.decisionRefs
- AUTHORIZE / Confirmation / Attempt chain

ADAPT:
- DecisionBasisSourceType + validateDecisionBasis branch
- prepareGenericExecutionContractDraft / solicitGeneric (decisionId input)
- Product UI / action to record Generic Mission HD
- stableMissionKey / resume identity

REPLACE:
- Permanent structural dead-end without resume

DO NOT:
- Reuse proposal / trajectory_option / work_recommendation disguises
- Second Decision store / table
- Process-local offer as authority after restart

J. Persistence impact

SQL table oa_human_decisions (db.ts:91–109):
  columns = decision_id, project_id, cycle_instance_id, subject, status,
            authority, version, effective_at, payload_json, …
  DecisionBasis lives ONLY inside payload_json (sqliteDecisionRepository.ts:37,53,68).

Conclusion:

**NO SQL MIGRATION REQUIRED — PROVEN**
for oa_human_decisions relational schema / new table.

AND simultaneously:

**MODELED / RUNTIME CONTRACT CHANGE — MORRIS IMPLEMENTATION GATE**
required for Delivery touching:
- types.ts DecisionBasisSourceType + GenericMissionContext
- invariants.ts validateDecisionBasis whitelist + branch
- optional modeled human-decision.schema.json sync (docs; runtime uses TS validator)
- Product prepare/solicit/actions consumers

HumanDecision.schemaVersion const "0.1.0-oa" need NOT bump solely for additive
nested genericMissionContext (precedent: work_recommendation / candidate_trajectory).

K. Files strictly affected (future Delivery — not this cycle)

OA:
- lib/oa/decision/domain/types.ts
- lib/oa/decision/domain/invariants.ts
- (tests) oa/decision/*

Product:
- w2/prepareGenericExecutionContractDraft.ts
- w2/actions.ts (record + solicit with decisionId)
- possibly ProjectAssistant / TrajectorySurface presentation CTA
- __tests__/project-assistant/p6.* HD matrix

FORBIDDEN without new GO:
- new SQL tables / Decision stores
- D-ER / Doctrine / Roadmap / C1/P2/P6
- Cursor Gateway / Attempt engine rebuild

L. Future deterministic tests (NOT EXECUTED this cycle)

HD01–HD15 as specified in GO §12.

M. Exit proof toward E1–E8

After Delivery implementing this contract:
- Structural mission + valid HD → PREPARE EC with decisionRefs → Inspect →
  Authorize → Select/Start/Result (E1–E3 already Fake-proven for non-structural)
- Then separate GO for E4–E8 Product/Nora continuity


## 8. KEEP / ADAPT / REPLACE

| Component | Action |
| --- | --- |
| OA Record/Get/Supersede HumanDecision | KEEP |
| SqliteDecisionRepository / oa_human_decisions | KEEP (no new table) |
| DecisionBasisProposalContext (LPS) | KEEP as currentness anchor |
| computeDecisionBasisSourceDigest | KEEP |
| DecisionBasisSourceType + validateDecisionBasis | ADAPT (+ generic_mission) |
| Generic PREPARE / solicit | ADAPT (decisionId + verify) |
| pendingGenericPrepareOfferStore | KEEP as UX only — NOT authority |
| Fake disguise as proposal/trajectory/WR | FORBIDDEN |
| Structural dead-end without resume | REPLACE via O1 Delivery |

## 9. Ordre de reprise cible

1. Mission qualifiée Product (materiality/effects)
2. Présentation Pilote (UI) avec payload sealable
3. Si structural → HumanDecision OA (generic_mission) — **durabilité = HD SQLite**
4. Relire/vérifier HD (E)
5. Même subject digest sous CURRENT Product
6. Generic PREPARE → EC + decisionRefs vérifiées
7. Inspection → Confirmation si requise → AUTHORIZE
8. Select/Start/Attempt — **pas** déclenchés par HD seule

**Présentation durable pré-HD :** NON requise si le sceau vit dans `decisionBasis` à l'enregistrement (pattern presentationDigest greenfield). Offer process-local insuffisant pour HD11. **Nouvel objet PresentedMission store = GATE Morris distinct** — non recommandé pour le Delivery minimal.

## 10. Matrice futurs tests (NON EXÉCUTÉS)

| ID | Scénario | Attendu |
| --- | --- | --- |
| HD01 | Non structurante | PREPARE sans HD |
| HD02 | Structurante sans HD | refuse |
| HD03 | Structurante + HD valide | reprise même mission |
| HD04 | HD autre Project | refuse |
| HD05 | HD autre mission | refuse |
| HD06 | Scope/effets modifiés | refuse |
| HD07 | HD superseded | refuse |
| HD08 | HD revoked/refused | refuse |
| HD09 | Subject digest obsolète | refuse |
| HD10 | Idempotence reprise | pas de HD/EC incohérents |
| HD11 | Restart après HD | reprise depuis SQLite HD, sans offer |
| HD12 | Avec/sans cycle | même règle |
| HD13 | Confirmation seule | ≠ HD |
| HD14 | Record HD | 0 Attempt |
| HD15 | EC decisionRefs | seulement refs vérifiées |

## 11. Fake / Real

ARCHITECTURE CONTRACT QUALIFIED.
Aucun nouveau test Fake. Cursor REAL / OpenAI LIVE — NON.

## 12. Dette / exit

| Dette | Exit |
| --- | --- |
| HD–mission NOT PROVEN | Delivery sous Implementation Gate |
| Offer process-local | UX only ; authority = HD SQLite |
| Carrier OA standard | inchangé |
| E4–E8 | GO continuité ultérieur |

## 13. Gates Morris résiduels

1. **Implementation Contract Gate** — autoriser Delivery O1 selon ce pack.
2. PresentedMission durable pré-HD — **NON** recommandé ; confirmer.
3. Sync modeled JSON schema — oui/non au Delivery.
4. Rename `proposalContext` — différer.
5. Git Product Integration — GO distinct.

## 14. Recommandation

Adopter ce contrat comme base du prochain Delivery O1 :
- `generic_mission` + `genericMissionContext` + sceau `presentationDigest` ;
- reprise via `decisionId` sur Generic PREPARE ;
- **pas** de nouvelle table SQL ;
- **pas** de second Decision store ;
- offer process-local jamais autoritative.

## 15. Instruction ChatGPT

Lire : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

**SFIA STUDIO — M-HD-01 GENERIC MISSION DECISION CRITICAL TECHNICAL CONTRACT REVIEW.**

Vérifier : simplicité ; réutilisation OA ; identité de mission ; binding autoritatif ; supersession ; persistence (no SQL migration vs modeled/runtime gate) ; absence de nouveau store ; faisabilité Delivery.

## 16. Git Truth final (pré-publish)

HEAD `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` · branch `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` · origin/main `896ff59c704bfa76df1da1a51705aaf948c1cf0c` · **zéro mutation Product ce cycle**.
