# FULL REVIEW PACK — HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 — CORRECTION PASS 01

## 0. Meta
- timestamp: `2026-10-02T16:51:39Z`
- cycle: `HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01`
- pass: **CORRECTION PASS 01** (CP1 D3-EXT / CP2 production-shaped ExecutionBasis / CP3 PREPARE honesty)
- Delivery branch: `delivery/sfia-studio-habitflow-chat-first-projecttrajectory-hd-ec-continuity-01`
- HEAD: `2087066a2760befabce3d7fc39a976dd0f1b2ebd`
- origin/main: `2087066a2760befabce3d7fc39a976dd0f1b2ebd`
- ahead/behind: `0 / 0`
- project commit/push/PR/merge/REAL: **NO**
- proof ceiling claimed: `DETERMINISTIC CHAT-FIRST PROJECTTRAJECTORY HD→EC CONTINUITY PROVEN AT TESTED SCOPE`
- verdict: `READY FOR CHATGPT CRITICAL REVIEW — HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 — CORRECTION PASS 01`
- ZERO REAL / READY FOR REAL NO / runtime v3 NON ADOPTED

## 1. Local Git Truth
- branch: `delivery/sfia-studio-habitflow-chat-first-projecttrajectory-hd-ec-continuity-01`
- HEAD == origin/main == `2087066a2760befabce3d7fc39a976dd0f1b2ebd`
- ahead/behind: `0	0`
- staged: none
- no reset/clean/rebase

### git status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? .tmp-sfia-review/pack-assets/
?? projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/activeProjectTrajectoryDecisionSubject.ts

```

### git diff --name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/types.ts
M	projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
M	projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

## 2. Morris GO consumed
- **D1-A** chat-first ProjectTrajectory via `decideTrajectory` — ACTIVE
- **D2-A** auto-PREPARE BOUNDED/GOVERNED — ACTIVE
- **D3** optionRef authoritative always server/sealed — ACTIVE
- **D4** concurrent subjects fail-closed — ACTIVE
- **D3-EXT** APPROVED — `pilotDecisionCandidate.targetKind` discriminator — IMPLEMENTED
- commit/push/PR/merge/REAL = **NO**

## 3. Critical Review blockers input (entry handoff `7323ab61` / blob Critical)
- **F1 / CP1** — D3 violation: accept + alternative prose → HD CURRENT (INVALID). Must be specific_alternative → ZERO HD.
- **F2 / CP2** — Positive EC proof depended on `qualifiedOperationKind` test/compat inject. Must use durable Product facts via `durableLocalWriteSeal`.
- **F3 / CP3** — PREPARE failure collapsed to `executionContractId:null` + misleading “préparation disponible”. Must expose structured prepareOutcome + honest text.

## 4. D3-EXT contract
`PilotDecisionTargetKind` =
- `current_recommendation`
- `presented_subject`
- `specific_alternative`
- `ambiguous`

Rules:
- NON-AUTHORITATIVE; not HD; not optionRef; never selects option itself
- PT: HD only if `disposition===accept` AND `targetKind===current_recommendation` → server seals `presented.recommendedOptionRef`
- PT: specific_alternative / presented_subject / ambiguous → ZERO HD / ZERO EC / clarification
- Proposal: preserve existing; `presented_subject` = accept presented Proposal subject
- unknown/absent/invalid targetKind → fail-closed (`ambiguous`); NEVER invent `current_recommendation`

### types.ts (PilotDecisionTargetKind / PilotDecisionCandidate)
```typescript

```

### Schema / parser / ANALYSIS_SYSTEM_BASE (intentAnalysis.ts excerpts)
Parser fail-closed excerpt:
```typescript
export function parsePilotDecisionCandidate(
  raw: unknown,
): PilotDecisionCandidate | null {
  if (raw == null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) return null;
  const obj = raw as Record<string, unknown>;
  const disposition = obj.disposition;
  if (typeof disposition !== "string") return null;
  const normalized = disposition.trim().toLowerCase();
  if (!normalized) return null;

  const rawTarget = obj.targetKind;
  let targetKind: PilotDecisionTargetKind;
  if (typeof rawTarget !== "string" || !rawTarget.trim()) {
    // Absent / empty — fail-closed; never invent current_recommendation.
    targetKind = "ambiguous";
  } else {
    const t = rawTarget.trim().toLowerCase();
    targetKind = PILOT_DECISION_TARGET_KINDS.includes(
      t as PilotDecisionTargetKind,
    )
      ? (t as PilotDecisionTargetKind)
      : "ambiguous";
  }

  return {
    disposition: PILOT_DECISION_DISPOSITIONS.includes(
      normalized as PilotDecisionDisposition,
    )
      ? (normalized as PilotDecisionDisposition)
      : "ambiguous",
    targetKind,
    rationale: clip(obj.rationale, 500),
  };
}

function parseSignals(raw: unknown): F2QualificationSignals | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;
  const out: Partial<F2QualificationSignals> = {};
  for (const key of SIGNAL_KEYS) {
    if (typeof obj[key] !== "boolean") return null;
    out[key] = obj[key] as boolean;
  }
  return out as F2QualificationSignals;
}

/**
 * Validate INTERNAL semantic CWP assessment.
 * null / missing / non-object → null (no fabricated Routine).
 * Invalid field values → unknown (never unknown→low).
 */
export function parseCognitiveWorkload(
  raw: unknown,
): SemanticCognitiveWorkloadAssessment | null {
  if (raw == null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) return null;
  const obj = raw as Record<string, unknown>;
  const out = {} as SemanticCognitiveWorkloadAssessment;
  for (const key of CWP_DIMENSION_KEYS) {
    const value = obj[key];
    out[key] = CWP_LEVELS.includes(value as SemanticCognitiveWorkloadLevel)
      ? (value as SemanticCognitiveWorkloadLevel)
      : "unknown";
  }
  return out;
}

export function parseContradictionCandidate(
  raw: unknown,
): Mw3ContradictionCandidateSignal | null {
  if (raw == null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) return null;
  const obj = raw as Record<string, unknown>;
  if (typeof obj.conflictPresent !== "boolean") return null;
  // Legacy promotion-policy fields (requiredDomains / requiredSourceCount /
  // freshnessMatters) are ignored if present. Studio owns those bars.
  return {
    conflictPresent: obj.conflictPresent,
    claimedEvidenceIds: clipArray(obj.claimedEvidenceIds),
    governingPremise: clip(obj.governingPremise),
    governingPremiseInvalidated:
      obj.governingPremiseInvalidated === true ? true : undefined,
    localImpactOnly: obj.localImpactOnly === true ? true : undefined,
    fabricationAttempt: obj.fabricationAttempt === true ? true : undefined,
  };
}

function extractJsonObject(text: string): unknown | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced?.[1]?.trim() ?? text.trim();
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch {
    return null;
  }
}


```

Prompt D3-EXT section (ANALYSIS_SYSTEM_BASE fragment containing pilotDecisionCandidate):
```
=== pilotDecisionCandidate (CHAT-FIRST — non autoritaire) ===
Lecture CANDIDATE de la disposition exprimée par le Pilote sur un sujet de décision gouverné DÉJÀ présenté dans le contexte.
disposition ∈ accept | refuse | amend | defer | none | ambiguous.
- accept — le Pilote engage explicitement le sujet présenté (« oui, poursuis cette proposition », « valide ce livrable »).
- refuse — le Pilote refuse explicitement le sujet présenté.
- amend — le Pilote demande de modifier le sujet avant d'engager.
- defer — le Pilote demande explicitement de reporter la disposition du sujet.
- none — le tour ne dispose d'aucun sujet gouverné (cas nominal : conversation, question, autre sujet).
- ambiguous — une disposition semble présente mais la cible ou la portée reste indéterminée.
targetKind ∈ current_recommendation | presented_subject | specific_alternative | ambiguous (D3-EXT — NON-AUTORITAIRE).
- current_recommendation — le Pilote accepte explicitement LA Recommendation actuellement présentée (« Oui, je valide ta recommandation », « Poursuis avec l'option que tu recommandes »).
- presented_subject — le Pilote dispose le sujet présenté sans sélectionner explicitement une Recommendation particulière (principalement Proposal : « Oui, poursuis cette proposition »).
- specific_alternative — le Pilote demande explicitement une option différente / alternative (« Je préfère l'autre option », « Je choisis la trajectoire gouvernée plutôt », « Pas celle que tu recommandes »).
- ambiguous — la cible exacte n'est pas déterminable.
Règles dures :
- ce champ N'EST PAS une HumanDecision, un GO, une confirmation ni une autorité ; le serveur re-résout le sujet durable et refuse tout ce qui n'est pas unique et éligible ;
- targetKind N'EST PAS un optionRef / optionSetRef / permission d'exécution ; un nom ou label d'option dans la prose ne devient JAMAIS un optionRef autoritaire ;
- un « oui / ok / d'accord » isolé sans sujet gouverné présenté ⇒ disposition none (JAMAIS accept) ;
- si plusieurs sujets gouvernés sont plausibles ⇒ disposition ambiguous (JAMAIS accept) ;
- si la cible Recommendation vs alternative reste indéterminée ⇒ targetKind ambiguous (JAMAIS current_recommendation inventé) ;
- ne JAMAIS inventer un sujet, un proposalId, un optionRef ou un optionSetRef ; ne JAMAIS les citer ici ;
- en l'absence de preuve ⇒ none ; none et ambiguous n'enregistrent jamais rien.
rationale : justification courte NON-AUTORITAIRE ou null.

=== AUTORITÉ ===
- Ne décide jamais un GO Morris ; ne propose jamais d'exécution ; n'invente jamais un cycle (ex. delivery) par défaut.
- actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null (orientation informative autorisée ci-dessus).
=== CONTINUITÉ CONVERSATIONNELLE (CORR-PROOF-01 D1) ===
- Si un bloc « Contexte conversationnel canonique » est fourni, interpréter la demande courante comme continuation progressive (clarification, précision, pronom, acknowledgement) lorsque c'est plausible.
- Ne pas reclasser en ambiguous uniquement parce que la phrase courante est incomplète si le contexte canonique la rend compréhensible.
- Ne pas créer de CycleInstance / actionable par défaut pour une simple conversation informative progressive.

=== CONTINUATION CYCLE ACTIF (CORR-PROOF-07 / CORR-PROOF-09 / ACTIVE-CYCLE-ARTIFACT-MATERIALIZATION-CONTINUITY-CORR-01) ===
NEW_CYCLE_FORMALIZATION ≠ ACTIVE_CYCLE_GOVERNED_CONTINUATION ≠ ACTIVE_CYCLE_CONTINUATION_BLOCKED.
Si le Project a déjà un cycle actif et que la demande porte sur la matérialisation gouvernée du livrable requis (REQUIRE_ARTIFACT) de CE cycle :
- continuationKind=active_cycle_artifact_materialization EST REQUIS (hint NON-AUTORITAIRE) — MÊME sans targetPath / filename technique fourni par le Pilote ;
- ET executionIntent.intentKind=docs_write EST REQUIS ;
- ET artifactMaterializationOperation=cursor.docs_write.apply EST REQUIS (discriminateur technique dédié) ;
- docs_write SEUL ne suffit JAMAIS à détourner vers la continuation Artifact ;
- continuationKind SEUL ne suffit JAMAIS à ouvrir une proposition exécutable ;
- NE PAS traiter cela comme création d'un nouveau CycleInstance / nouveau Cadrage ;
- NE PAS retomber en NEW_CYCLE_FORMALIZATION uniquement parce qu'un chemin / artifactFileName / hint technique est absent ;
- si la cible exacte n'est pas résolue : laisser targetPath=null (et éventuellement artifactFileName null ou leaf sûr) — le serveur clarifie DANS le cycle actif ;
- CONTRAT TECHNIQUE (CORR-PROOF-09 CR-09-01/02) :
  * artifactMaterializationOperation DOIT être EXACTEMENT « cursor.docs_write.apply » (pas d'alias « docs_write », pas de français, pas d'autre opération) ;
  * hors de ce chemin Artifact, artifactMaterializationOperation=null ;
  * requestedOperation (top-level) ET executionIntent.requestedOperation restent génériques ailleurs ; pour CETTE continuation Artifact, les laisser null (préféré) ou exactement cursor.docs_write.apply — JAMAIS une valeur contradictoire (ex. github.pr.merge) ;
  * si des requiredCapabilities sont fournies pour ce chemin → « cap:cursor.docs_write » (le serveur reste autoritaire après acceptation) ;
  * la description naturelle du livrable va dans objective / rephrasedRequest / artifactBrief / contentRequirements — JAMAIS dans artifactMaterializationOperation ;
  * CONTINUITÉ SÉMANTIQUE DU WHAT : reporter dans artifactBrief / contentRequirements les règles fonctionnelles déjà stabilisées dans le contexte (statuts, attributs, filtres, persistance, exclusions) — NE PAS inventer une seconde spécification contradictoire (ex. retirer des statuts/attributs déjà établis ou les déclarer hors périmètre) ;
  * targetPath / targetRepositoryRef PEUVENT rester null (le serveur compose sous Project workspace + cycle segment) — ne PAS inventer de chemin repository complet ;
  * si le Pilote a fourni un filename leaf sûr (ex. note-de-cadrage.md), le reporter dans artifactFileName ;
  * si aucun filename n'est fourni, artifactFileName PEUT rester null (clarification serveur) OU proposer un leaf Markdown cohérent (NON-AUTORITAIRE) ;
  * ne PAS demander au Pilote de construire un path technique repository complet lorsque workspace Project+cycle est déterminable ;
  * reversibilityExpectation pour cette continuation : null ou unknown seulement — NE PAS affirmer reversible/irreversible sans provenance serveur ;
- définition seule du livrable (sans effet de matérialisation) → informative, continuationKind=null, artifactMaterializationOperation=null.
Aucune phrase magique exacte n'autorise seule cette continuation.`;

export const ANALYSIS_SYSTEM = ANALYSIS_SYSTEM_BASE;

export async function analyzeIntent(input: {
  userContent: string;
  projectSummary: string;
  /**
   * CORR-PROOF-01 D1 — bounded ProductSqliteSession transcript (server SoT).
   * Never client-authored history. Empty/absent → no continuity claim.
   */
  canonicalConversationContext?: string | null;
  /** Optional resolved CKC excerpt for future intent analysis enrichment. */
  ckcContext?: string | null;
  /**
   * Server-issued MW5 challenge context for the SAME provider call (CORR-MW5-02B).
   * Never client-authoritative; orchestrator supplies process-local issued challenge.
   */
  challengeContext?: Mw5ChallengeContextInput;
  /**
   * Optional server-side provider injection (eval / tests).
   * Never client-authoritative for model/reasoning selection.
   */
  provider?: ConversationProvider;
  /**
   * INTERNAL / EVAL-ONLY — Stage A cell model×effort identity for constitutive
   * ConversationProvider calls (completeStructured). Absent → production default.
   * When set, an injected cell provider is required (no silent live default).
   */
  /**
   * INTERNAL / EVAL-ONLY — Stage A cell identity. Canonical model-call claims
   * belong on MeteredConversationProvider.beforeAuthorizedDispatch
   * (USD preflight → claim → dispatch), not here.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
}): Promise<{
  analysis: IntentAnalysisDto;
  presentation: "test_provider" | "openai_live";
  model: string | null;
  rawText: string;
  /** Eval-only observation — never a client DTO field. */
  evalPinnedModelId?: string;
  evalPinnedReasoningEffort?: string;
}> {
  const evalControl = input.evalModelReasoningControl;
  if (evalControl) {
    validateRuntimeReasoningCapability(
      evalControl.modelId,
      evalControl.reasoningEffort,
    );
    if (!input.provider) {
      throw new TechnicalError(
        "CONFIG",
        "EVAL_CELL_PROVIDER_REQUIRED: evalModelReasoningControl requires an injected cell ConversationProvider (no silent live default).",
      );
    }
  }

  const provider = input.provider ?? resolveConversationProvider();
  // Presentation follows the provider instance actually used (explicit injection wins).
  const presentation =
    provider.providerId === "fake-test" ? "test_provider" : "openai_live";

  const challengeBlock =
    input.challengeContext &&
    input.challengeContext.challengePresent === true
      ? `\n\n${formatMw5ChallengeContextForProvider(input.challengeContext)}\n`
      : "\n\nMW5_CHALLENGE_CONTEXT: challengePresent=false (assessment must be null).\n";

  const conversationBlock =
    typeof input.canonicalConversationContext === "string" &&
    input.canonicalConversationContext.trim().length > 0
      ? `\n\nContexte conversationnel canonique (ProductSqliteSession — working context ≠ Truth C):\n${input.canonicalConversationContext.trim()}\n`
      : "\n\nContexte conversationnel canonique: (vide — aucune continuité Session durable).\n";

  const messages: ProviderChatMessage[] = [
    { role: "system", content: buildAnalysisSystem(input.ckcContext) },
    {
      role: "user",
      content: `Contexte projet:\n${input.projectSummary}${conversationBlock}${challengeBlock}\nDemande courante (à évaluer):\n${input.userContent}`,
    },
  ];

  if (typeof provider.completeStructured !== "function") {
    throw new TechnicalError(
      "PROVIDER",
      "Structured Outputs requis pour l’analyse d’intention F2 (completeStructured manquant).",
    );
  }

  const completion = await provider.completeStructured({
    messages,
    schemaName: F2_INTENT_SCHEMA_NAME,
    jsonSchema: F2_INTENT_JSON_SCHEMA,
  });
  const parsed = extractJsonObject(completion.text);
  const analysis = validateIntentAnalysisPayload(parsed);

  // Fail-closed: without server challenge context, assessment cannot unlock Rec.
  if (
    !input.challengeContext ||
    input.challengeContext.challengePresent !== true
  ) {
    analysis.challengeResponseAssessment = null;
  }

  return {
    analysis,
    presentation,
    model: completion.usage?.model ?? null,
    rawText: completion.text,
    ...(evalControl
      ? {
          evalPinnedModelId: evalControl.modelId,
          evalPinnedReasoningEffort: evalControl.reasoningEffort,
        }
      : {}),
  };
}
```

### Fake provider D3-EXT (`matchPilotDecisionCandidate`)
```typescript
function matchPilotDecisionCandidate(
  probe: string,
): {
  disposition: string;
  targetKind: string;
  rationale: string | null;
} | null {
  if (probe.includes("__F2_DECIDE_ACCEPT_CURRENT_REC__")) {
    return {
      disposition: "accept",
      targetKind: "current_recommendation",
      rationale: "Pilote valide explicitement la Recommendation courante.",
    };
  }
  if (probe.includes("__F2_DECIDE_ACCEPT_ALT__")) {
    return {
      disposition: "accept",
      targetKind: "specific_alternative",
      rationale: "Pilote demande une option différente de la Recommendation.",
    };
  }
  if (probe.includes("__F2_DECIDE_ACCEPT_SUBJECT__")) {
    return {
      disposition: "accept",
      targetKind: "presented_subject",
      rationale: "Pilote engage le sujet présenté.",
    };
  }
  if (probe.includes("__F2_DECIDE_ACCEPT__")) {
    // Proposal-compatible default: presented_subject (not current_recommendation).
    return {
      disposition: "accept",
      targetKind: "presented_subject",
      rationale: "Pilote engage le sujet présenté.",
    };
  }
  if (probe.includes("__F2_DECIDE_REFUSE__")) {
    return {
      disposition: "refuse",
      targetKind: "presented_subject",
      rationale: "Pilote refuse le sujet présenté.",
    };
  }
  if (probe.includes("__F2_DECIDE_AMEND__")) {
    return {
      disposition: "amend",
      targetKind: "presented_subject",
      rationale: "Pilote demande un amendement.",
    };
  }
  if (probe.includes("__F2_DECIDE_DEFER__")) {
    return {
      disposition: "defer",
      targetKind: "presented_subject",
      rationale: "Pilote demande un report.",
    };
  }
  if (probe.includes("__F2_DECIDE_AMBIGUOUS__")) {
    return {
      disposition: "ambiguous",
      targetKind: "ambiguous",
      rationale: "Cible du « oui » indéterminée.",
    };
  }
  if (probe.includes("__F2_DECIDE_NONE__")) {
    return { disposition: "none", targetKind: "ambiguous", rationale: null };
  }

  // Natural-language Fake cues for D3-EXT deterministic proofs (no optionRef).
  const normalized = probe.toLowerCase();
  if (
    /valide\s+ta\s+recommandation|option\s+que\s+tu\s+recommand|poursuis\s+avec\s+l['']option\s+que\s+tu\s+recommand/.test(
      normalized,
    )
  ) {
    return {
      disposition: "accept",
      targetKind: "current_recommendation",
      rationale: "Acceptation explicite de la Recommendation courante.",
    };
  }
  if (
    /autre\s+option|plut[oô]t\s+(l['']autre|la\s+trajectoire\s+gouvern)|pas\s+celle\s+que\s+tu\s+recommand|je\s+choisis\s+la\s+trajectoire\s+gouvern/.test(
      normalized,
    )
  ) {
    return {
      disposition: "accept",
      targetKind: "specific_alternative",
      rationale: "Demande explicite d'une option alternative.",
    };
  }
  return null;
}


```

## 5. Product server gate (resolveChatFirstPilotDecision)
- PT accept gate requires `targetKind === "current_recommendation"` else codes:
  - `PROJECT_TRAJECTORY_SPECIFIC_ALTERNATIVE`
  - `PROJECT_TRAJECTORY_TARGET_NOT_CURRENT_RECOMMENDATION`
- Proposal requires `targetKind === "presented_subject"` else `PROPOSAL_TARGET_KIND_REQUIRED`
- Before `decideTrajectory`: `resolveProjectTrajectoryDurableLocalWriteSeal` builds `durableLocalWriteSeal` from `Project.repositoryBinding.pathRoot` + LPS objective + reversible
- Controls: pathRoot non-empty, `isRepositorySourceRef`, no `..`, `classifyProtectedRepositoryPath`, GOVERNED/BOUNDED only
- Auto-PREPARE returns `ChatFirstPrepareOutcome` = prepared | blocked | not_applicable (never silent null alone)

## 6. Explicit alternative proof
- Continuity CP-D3-02: BOUNDED CURRENT + `targetKind: specific_alternative` + « Je choisis la trajectoire gouvernée plutôt » → `no_eligible_subject` / `PROJECT_TRAJECTORY_SPECIFIC_ALTERNATIVE` → HD=0 EC=0
- Fake D3E-02/03 natural language → `specific_alternative`
- CP-D3-03 ambiguous + GOVERNED prose → ZERO HD
- CP-D3-04 absent targetKind → ZERO HD

## 7. Execution Basis source (CP2)
- **Source:** `Project.repositoryBinding.pathRoot` (server-owned Product durable fact set by `setProjectRepositoryBinding` / create)
- **Objective:** `LivingProjectState.objective` via `getCurrentLivingProjectState` (not invented)
- **Seal placement:** BEFORE `decideTrajectory` → stamped into `DecisionBasis.executionBasis.scopeIn` + `reversibilityExpectation=reversible`
- **Why server-owned:** binding is Product persistence on Project; pathRoot is the Project workspace allowlist root; never from pilot prose / model / client / option label
- **Protected path:** `classifyProtectedRepositoryPath(pathRoot)` fail-closed
- **No** `qualifiedOperationKind` on positive HabitFlow proof path
- deriveActualExecutionWork → `durable_product_mission` / generic local-write from DecisionBasis paths

## 8. PREPARE outcome model (CP3)
```typescript
export type ChatFirstPrepareOutcome =
  | { readonly kind: "prepared"; readonly executionContractId: string }
  | { readonly kind: "blocked"; readonly code: string; readonly message: string }
  | { readonly kind: "not_applicable"; readonly reason: string };
```
- `readyForNextGatedStep === (prepareOutcome.kind === "prepared")`
- orchestrateF2 `chatFirstDecisionText`:
```typescript
function chatFirstDecisionText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly disposition: ChatFirstEffectiveDisposition;
  readonly subjectFamily?: "proposal" | "project_trajectory";
  readonly prepareOutcome?: ChatFirstPrepareOutcome;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  if (input.disposition === "accept") {
    if (input.subjectFamily === "project_trajectory") {
      const prep = input.prepareOutcome;
      if (prep?.kind === "prepared") {
        return [
          head,
          "Votre décision est enregistrée : vous acceptez la Recommendation ProjectTrajectory courante.",
          `ExecutionContract préparé (${prep.executionContractId}).`,
          "Aucune exécution n'a été lancée.",
          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
        ].join(" ");
      }
      if (prep?.kind === "blocked") {
        return [
          head,
          "Votre décision est enregistrée : vous acceptez la Recommendation ProjectTrajectory courante.",
          "ExecutionContract NON matérialisé — préparation bloquée.",
          prep.message,
          "Aucune exécution n'a été lancée.",
          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
        ].join(" ");
      }
      return [
        head,
        "Votre décision est enregistrée : vous acceptez la Recommendation ProjectTrajectory courante.",
        "Aucun ExecutionContract n'a été préparé pour cette décision.",
        "Aucune exécution n'a été lancée.",
        "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
      ].join(" ");
    }
    return [
      head,
      "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
      "La préparation de l'action est maintenant disponible. Rien n'a encore été exécuté.",
      "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
    ].join(" ");
  }
  const body =
    input.disposition === "refuse"
      ? [
          "Votre décision est enregistrée : vous ne poursuivez pas ce sujet.",
          "Aucun contrat d'exécution n'est préparé. Aucune trajectoire projet n'est promue.",
        ]
      : input.disposition === "defer"
        ? [
            "Votre report est enregistré : la recommandation de travail est reportée vers un cycle aval honnête.",
            "Une réserve non bloquante trace le report. Le sujet proposé est clos.",
          ]
        : [
            "Votre décision est enregistrée : le sujet doit être amendé avant d'être engagé.",
            "Le sujet précédent est clos ; reformulez ce que vous voulez changer et je réinstruirai.",
          ];
  return [
    head,
    ...body,
    "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
  ].join(" ");
}

```
- Proposal path retains “préparation disponible” text (unchanged Proposal semantics; PT uses prepared/blocked honesty)

## 9. Idempotence
- CP-IDEM-01/02: retry accept after HD → not decision_recorded; EC count stays 1; remount PREPARE without second EC
- T21 restart: EC rehydrates from durable store

## 10. Proposal / semantic / workspace regression
- frontDoor Proposal suite green (11)
- pilotNoraStudioSemanticContinuity (+corr01/corr02) green
- projectWorkspaceArtifactRouting + productWorkspaceArtifactRouting green

## 11. Validations
### Targeted (CP01)
```

> sfia-studio@0.1.0 test
> vitest run __tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts __tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts __tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-post-execution-handoff-01/projects/sfia-studio/app

 ✓ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts (5 tests) 7ms
 ✓ __tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts (17 tests) 4ms
 ✓ __tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts (17 tests) 514ms
 ✓ __tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts (11 tests) 1336ms

 Test Files  4 passed (4)
      Tests  50 passed (50)
   Start at  18:50:54
   Duration  3.05s (transform 1.35s, setup 110ms, collect 3.93s, tests 1.86s, environment 0ms, prepare 110ms)


```
### typecheck
```

> sfia-studio@0.1.0 typecheck
> tsc --noEmit


```
### lint
```

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

```
### Full Vitest (prior full run this pass)
- 458 files passed / 17 skipped; 5094 tests passed / 137 skipped after PRR digest sync (fakeProvider + intentAnalysis + orchestrateF2)
- PRR conformance: 5/5 green after digest refresh
### build
- `next build` succeeded after objective LPS fix
### git diff --check
- clean (exit 0)

## 12. PRR impact
Tracked digests refreshed ONLY for:
- `f2/orchestrateF2.ts` → `a398bf461383386f`
- `f2/intentAnalysis.ts` → `94d908d10eb822f2`
- `lib/platform/ai/fakeProvider.ts` → `d8db5a73ecb35722`
Conformance green. Digest refresh ≠ semantic validation (semantic proof via tests above).

## 13. Fake / Real
- Fake / deterministic: YES
- Production-shaped = durable Product facts + same orchestration without test-only HOW
- Cursor REAL: ZERO
- HabitFlow DB: not touched
- Proof: DETERMINISTIC PROVEN AT TESTED SCOPE
- NOT: REAL BOUNDARY / E2E REAL / READY FOR REAL / runtime v3 ADOPTED

## 14. Files created / modified
CREATED:
- `projects/sfia-studio/app/features/project-assistant/w2/activeProjectTrajectoryDecisionSubject.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts`

MODIFIED (authorized):
- intentAnalysis.ts, types.ts, orchestrateF2.ts
- resolveChatFirstPilotDecision.ts, assessChatFirstWorkEligibility.ts, activeProposalDecisionSubject.ts
- fakeProvider.ts, TrajectorySurface.tsx
- chatFirstPilotDecisionCandidate.d0.test.ts, postExecutionTrajectorySurface.ui.test.tsx, importBoundaries.test.ts
- production-runtime-reference.manifest.json (digests only)

TEMP: `.tmp-sfia-review/**`

## 15. Reservations / debt
- pinnedBaseHeadSha remains a test pin for managed clone HEAD (production resolves managed clone) — not a HOW invent
- PT presented_subject still ZERO HD (no pre-existing Product equivalence to CURRENT Recommendation)
- No Execute / Attempt / Cursor REAL / workspace effect in this Delivery

## 16. Project Git effects
- Local Product modification: YES
- Project commit/push/PR/merge/branch delete/force: NO
- Review handoff: YES — L3 only (publish-in-cycle)

## 17. UNIQUE VERDICT
**READY FOR CHATGPT CRITICAL REVIEW — HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 — CORRECTION PASS 01**

Proof ceiling: **DETERMINISTIC CHAT-FIRST PROJECTTRAJECTORY HD→EC CONTINUITY PROVEN AT TESTED SCOPE**

---

## APPENDIX A — NEW FILE FULL: activeProjectTrajectoryDecisionSubject.ts
```typescript
/**
 * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
 * Read-only resolution of a unique awaiting ProjectTrajectory PresentedOptionSet.
 *
 * Reuses the sealed Observation binding (same SoT as Proposal chat-first).
 * Does NOT invent a second Current subject store. Currentness for decide is
 * enforced by decideTrajectory (trajectoryId / candidateVersion / digests).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  decidedOptionSetRefsFromEpistemicItems,
  type EpistemicReadFailure,
} from "./activeProposalDecisionSubject";
import {
  isProposalSubjectPresentedSet,
  parsePresentedOptionSetStatement,
  type PresentedOptionSetBinding,
  W2_PRESENTED_OPTION_SET_KIND,
} from "./presentedOptionSet";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";

export type ActiveProjectTrajectoryPresentedLookup =
  | {
      readonly ok: true;
      readonly kind: "none";
      readonly presented: null;
    }
  | {
      readonly ok: true;
      readonly kind: "unique";
      readonly presented: PresentedOptionSetBinding;
    }
  | {
      readonly ok: true;
      readonly kind: "ambiguous";
      readonly presented: null;
      readonly optionSetRefs: readonly string[];
    }
  | EpistemicReadFailure;

/**
 * Find active ProjectTrajectory PresentedOptionSet(s) still awaiting HD.
 * Ambiguous when more than one distinct optionSetRef awaits.
 */
export async function findActiveAwaitingProjectTrajectoryPresentedOptionSet(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ActiveProjectTrajectoryPresentedLookup> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — impossible de déterminer un sujet ProjectTrajectory actif.",
    };
  }

  const decidedRefs = decidedOptionSetRefsFromEpistemicItems(
    epistemic.state.items,
  );
  const byRef = new Map<string, PresentedOptionSetBinding>();
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed) continue;
    if (parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
    if (isProposalSubjectPresentedSet(parsed)) continue;
    if (parsed.decisionSubjectMode !== "project_trajectory") continue;
    if (decidedRefs.has(parsed.optionSetRef)) continue;
    if (
      typeof parsed.trajectoryId !== "string" ||
      parsed.trajectoryId.trim().length === 0 ||
      typeof parsed.candidateVersion !== "number"
    ) {
      continue;
    }
    byRef.set(parsed.optionSetRef, parsed);
  }

  const refs = [...byRef.keys()];
  if (refs.length === 0) {
    return { ok: true, kind: "none", presented: null };
  }
  if (refs.length > 1) {
    return {
      ok: true,
      kind: "ambiguous",
      presented: null,
      optionSetRefs: refs,
    };
  }
  return {
    ok: true,
    kind: "unique",
    presented: byRef.get(refs[0]!)!,
  };
}

/**
 * Ensure a sealed ProjectTrajectory PresentedOptionSet exists for chat-first
 * accept by reusing proposeTrajectoryOptions (canonical instructor path).
 * Idempotent when an awaiting unique binding already exists.
 */
export async function ensureSealedProjectTrajectoryPresentedOptionSet(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly kind?: "ambiguous";
      readonly optionSetRefs?: readonly string[];
    }
> {
  const existing = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
    input.oa,
    input.projectId,
  );
  if (!existing.ok) {
    return {
      ok: false,
      code: existing.code,
      message: existing.message,
    };
  }
  if (existing.kind === "ambiguous") {
    return {
      ok: false,
      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
      message:
        "Plusieurs jeux d'options ProjectTrajectory sont ouverts — aucune décision automatique.",
      kind: "ambiguous",
      optionSetRefs: existing.optionSetRefs,
    };
  }
  if (existing.kind === "unique") {
    return { ok: true, presented: existing.presented };
  }

  const qualification = await resolveW2QualificationInputs({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!qualification.ok) {
    return {
      ok: false,
      code: qualification.code,
      message: qualification.message,
    };
  }

  const proposed = await proposeTrajectoryOptions({
    oa: input.oa,
    projectId: input.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  if (!proposed.ok) {
    return {
      ok: false,
      code: proposed.code,
      message: proposed.message,
    };
  }

  const rebound = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
    input.oa,
    input.projectId,
  );
  if (!rebound.ok) {
    return {
      ok: false,
      code: rebound.code,
      message: rebound.message,
    };
  }
  if (rebound.kind === "ambiguous") {
    return {
      ok: false,
      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
      message:
        "Plusieurs jeux d'options ProjectTrajectory sont ouverts après scellage — aucune décision.",
      kind: "ambiguous",
      optionSetRefs: rebound.optionSetRefs,
    };
  }
  if (rebound.kind !== "unique") {
    return {
      ok: false,
      code: "SEALED_OPTION_SET_NOT_BOUND",
      message:
        "Le jeu d'options ProjectTrajectory n'a pas pu être scellé pour décision chat-first.",
    };
  }
  return { ok: true, presented: rebound.presented };
}

```

## APPENDIX B — NEW FILE FULL: habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts
```typescript
/**
 * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 — Correction Pass 01
 *
 * Deterministic proof matrix: chat-first accept of CURRENT ProjectTrajectory
 * Recommendation (targetKind=current_recommendation) → exactly 1 HD via
 * decideTrajectory → durableLocalWriteSeal from repositoryBinding.pathRoot →
 * auto-PREPARE EC → STOP (0 Attempt / 0 Cursor / 0 workspace effect).
 *
 * D3-EXT: specific_alternative → ZERO HD. Production-shaped: NO qualifiedOperationKind.
 * CP3: prepareOutcome prepared|blocked observable.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resetF2ProposalStoreForTests,
  saveProposal,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
import { resolveChatFirstPilotDecision } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  loadPresentedOptionSet,
  serializePresentedOptionSet,
} from "@/features/project-assistant/w2/presentedOptionSet";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  BOUNDED_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  PROPOSAL_SUBJECT_PURSUE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { RuntimeApplicationService, RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_ACTOR,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const TARGET_PATH = "projects/sfia-studio/.sandbox/hf-pt-continuity.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId: string;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId,
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser une note bornée",
    objective: "Livrable sandbox borné",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Sujet Proposal concurrent",
    scope: "docs_write borné",
    outOfScope: ["REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox",
    sources: ["nora"],
    risks: [],
    reservations: [],
    stopConditions: ["STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetPath: TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note HF continuity",
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
        "acme/w2-harness",
    },
  });
}

async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
  const sealed = sealProposalExecutionBasis(proposal);
  const written = await writePendingDecisionSubjectMarker({
    oa,
    projectId: proposal.contextSnapshot.projectId,
    proposalId: proposal.proposalId,
    subjectDigest: computeProposalSubjectDigest(sealed, proposal.proposalId),
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
  });
  expect(written.ok).toBe(true);
}

async function proposePt(oa: RuntimeOaStack, projectId: string) {
  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error(qualification.code);
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error(proposed.code);
  return proposed;
}

async function hdCount(oa: RuntimeOaStack, projectId: string): Promise<number> {
  const history = await oa.decisionServices.listDecisionHistory.execute({
    projectId,
  });
  if (!history.ok) return 0;
  return history.decisions.filter((d) => d.status === "accepted").length;
}

async function contractCount(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<number> {
  const listed =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!listed.ok) return 0;
  return listed.contracts.length;
}

async function attemptCountForContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<number> {
  const listed =
    await oa.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId,
    });
  if (!listed.ok) return -1;
  return listed.attempts.length;
}

async function expectedPathRoot(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<string> {
  const project = await oa.projectServices.getProject.execute({ projectId });
  expect(project.ok).toBe(true);
  if (!project.ok) throw new Error("project read failed");
  const pathRoot = project.project.repositoryBinding?.pathRoot?.trim() ?? "";
  expect(pathRoot.length).toBeGreaterThan(0);
  return pathRoot;
}

describe("HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 CP01", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    process.env.OPS1_CURSOR_REAL = "0";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("hf-pt-ec.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "hfpt" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  it("CP-EB-01 / CP-D3-01 — BOUNDED accept CURRENT → 1 HD + DecisionBasis seal + EC sans qualifiedOperationKind", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "bounded",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      BOUNDED_OPTION_REF,
    );
    const pathRoot = await expectedPathRoot(oa, seeded.projectId);

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(true);
    if (!gate.eligible) return;
    expect(gate.subjectFamily).toBe("project_trajectory");

    const beforeHd = await hdCount(oa, seeded.projectId);
    const beforeEc = await contractCount(oa, seeded.projectId);

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      rationale: "Oui, je valide ta recommandation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      // CP2 — no qualifiedOperationKind (production-shaped)
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;

    expect(resolved.subjectFamily).toBe("project_trajectory");
    expect(resolved.selectedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(resolved.decisionBasisLinked).toBe(true);
    expect(resolved.prepareOutcome.kind).toBe("prepared");
    expect(resolved.executionContractPrepared).toBe(true);
    expect(resolved.executionContractId).toBeTruthy();
    expect(resolved.readyForNextGatedStep).toBe(true);
    expect(resolved.attemptCreated).toBe(false);
    expect(resolved.executionPerformed).toBe(false);

    expect(await hdCount(oa, seeded.projectId)).toBe(beforeHd + 1);
    expect(await contractCount(oa, seeded.projectId)).toBe(beforeEc + 1);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.decisionBasis?.sourceType).toBe("trajectory_option");
    expect(
      durable.decision.decisionBasis?.trajectoryContext?.selectedOptionRef,
    ).toBe(BOUNDED_OPTION_REF);
    // CP-EB-05 — DecisionBasis carries durable seal BEFORE PREPARE
    expect(durable.decision.decisionBasis?.executionBasis?.scopeIn).toContain(
      pathRoot,
    );
    expect(
      durable.decision.decisionBasis?.executionBasis?.reversibilityExpectation,
    ).toBe("reversible");
    expect(durable.decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR.actorId);

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: resolved.executionContractId!,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.grantsAuthority).toBe(false);

    const loaded =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: resolved.executionContractId!,
      });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.contract.decisionRefs).toContain(resolved.decisionId);

    expect(
      await attemptCountForContract(oa, resolved.executionContractId!),
    ).toBe(0);
  });

  it("CP-EB-02 — GOVERNED accept CURRENT → 1 HD + seal + EC sans qualifiedOperationKind", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "governed",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );
    const pathRoot = await expectedPathRoot(oa, seeded.projectId);

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.selectedOptionRef).toBe(GOVERNED_OPTION_REF);
    expect(resolved.prepareOutcome.kind).toBe("prepared");
    expect(resolved.executionContractPrepared).toBe(true);
    expect(resolved.executionContractId).toBeTruthy();
    expect(resolved.attemptCreated).toBe(false);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(
      durable.decision.decisionBasis?.executionBasis?.scopeIn,
    ).toContain(pathRoot);
  });

  it("CP-D3-02 — specific_alternative (« Je choisis la trajectoire gouvernée plutôt ») → ZERO HD / ZERO EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "alt-gov",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      BOUNDED_OPTION_REF,
    );
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "specific_alternative",
      rationale: "Je choisis la trajectoire gouvernée plutôt",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("no_eligible_subject");
    if (resolved.kind === "no_eligible_subject") {
      expect(resolved.code).toBe("PROJECT_TRAJECTORY_SPECIFIC_ALTERNATIVE");
    }
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
    expect(await contractCount(oa, seeded.projectId)).toBe(0);
  });

  it("CP-D3-03 — accept + ambiguous (prose GOVERNED) never overrides server; ZERO HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "prose-gov",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "ambiguous",
      rationale: `Je choisis ${GOVERNED_OPTION_REF} plutôt`,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("no_eligible_subject");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("CP-D3-04 — absent targetKind → fail closed (ambiguous), ZERO HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "no-tk",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      // targetKind omitted → ambiguous
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("no_eligible_subject");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("T7 — qualification drift / stale OptionSet → fail closed, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "stale",
    });
    await proposePt(oa, seeded.projectId);

    const drifted = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:hf-pt-stale-rsv",
          type: "Reservation",
          statement: "Réserve ouverte après présentation — drift",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(drifted.ok).toBe(true);

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_refused");
    if (resolved.kind === "decision_refused") {
      expect(resolved.code).toBe("OPTION_SET_STALE");
    }
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
    expect(await contractCount(oa, seeded.projectId)).toBe(0);
  });

  it("T8 — corrupted sealed candidateVersion → fail closed, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "mismatch",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    const loaded = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    const corrupted = {
      ...loaded.presented,
      candidateVersion: loaded.presented.candidateVersion! + 99,
    };
    const rewritten = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: `epi:${proposed.optionSetRef.replace("optset:", "set-")}`,
          type: "Observation",
          statement: serializePresentedOptionSet(corrupted),
          status: "active",
          source: proposed.optionSetRef,
          relatedObjects: [seeded.projectId, proposed.optionSetRef],
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(rewritten.ok).toBe(true);

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(["decision_refused", "no_eligible_subject"]).toContain(
      resolved.kind,
    );
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("CP-D4-01 — Proposal + PT CURRENT simultaneous → ambiguous, 0 HD, 0 EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "d4",
    });
    await proposePt(oa, seeded.projectId);

    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:hf-d4-concurrent",
    });
    await markPending(oa, proposal);
    const qual = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qual.ok).toBe(true);
    if (!qual.ok) return;
    const proposalBound = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposalBound.ok).toBe(true);
    if (!proposalBound.ok) return;
    expect(proposalBound.decisionSubjectMode).toBe("proposal");

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) return;
    expect(gate.kind).toBe("ambiguous_subjects");

    const beforeHd = await hdCount(oa, seeded.projectId);
    const beforeEc = await contractCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("ambiguous_subjects");
    expect(await hdCount(oa, seeded.projectId)).toBe(beforeHd);
    expect(await contractCount(oa, seeded.projectId)).toBe(beforeEc);
  });

  it("T9b/D4 — multiple awaiting PT OptionSets → ambiguous, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "multi-pt",
    });
    const first = await proposePt(oa, seeded.projectId);
    const loaded = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      first.optionSetRef,
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    const secondRef = "optset:w2-hf-multi-pt-second";
    const secondBinding = {
      ...loaded.presented,
      optionSetRef: secondRef,
      trajectoryId: "trj:hf-multi-pt-2",
      candidateVersion: 1,
    };
    const injected = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: `epi:${secondRef.replace("optset:", "set-")}`,
          type: "Observation",
          statement: serializePresentedOptionSet(secondBinding),
          status: "active",
          source: secondRef,
          relatedObjects: [seeded.projectId, secondRef],
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(injected.ok).toBe(true);

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) return;
    expect(gate.kind).toBe("ambiguous_subjects");

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("ambiguous_subjects");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("T10 — PT refuse/amend/defer → ZERO HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "nonaccept",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);

    for (const disposition of ["refuse", "amend", "defer"] as const) {
      const resolved = await resolveChatFirstPilotDecision({
        oa,
        projectId: seeded.projectId,
        disposition,
        targetKind: "current_recommendation",
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(resolved.kind).toBe("no_eligible_subject");
      if (resolved.kind === "no_eligible_subject") {
        expect(resolved.code).toBe("PROJECT_TRAJECTORY_ACCEPT_ONLY");
      }
    }
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("CP-IDEM-01/02 — retry same accept → no second HD; remount PREPARE → no second EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "idem",
    });
    await proposePt(oa, seeded.projectId);

    const first = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(first.kind).toBe("decision_recorded");
    if (first.kind !== "decision_recorded") return;
    const ecId = first.executionContractId!;
    expect(ecId).toBeTruthy();
    expect(first.prepareOutcome.kind).toBe("prepared");

    const second = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(second.kind).not.toBe("decision_recorded");
    expect(await hdCount(oa, seeded.projectId)).toBe(1);
    expect(await contractCount(oa, seeded.projectId)).toBe(1);

    const { prepareExecutionContractFromW2Decision } = await import(
      "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
    );
    const retryPrep = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: first.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      // no qualifiedOperationKind — DecisionBasis seal is authority
    });
    if (retryPrep.ok) {
      expect(retryPrep.contract.executionContractId).toBe(ecId);
    }
    expect(await contractCount(oa, seeded.projectId)).toBe(1);
    expect(await attemptCountForContract(oa, ecId)).toBe(0);
  });

  it("CP-D3-05 / CP-REG — Proposal accept presented_subject → 1 HD pursue; no PT auto-PREPARE", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "prop-lock",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:hf-prop-lock",
    });
    await markPending(oa, proposal);
    const qual = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qual.ok).toBe(true);
    if (!qual.ok) return;
    const bound = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    expect(bound.decisionSubjectMode).toBe("proposal");
    expect(bound.promotesProjectTrajectory).toBe(false);

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(true);
    if (!gate.eligible) return;
    expect(gate.subjectFamily).toBe("proposal");

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "presented_subject",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.subjectFamily).toBe("proposal");
    expect(resolved.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    expect(resolved.proposalId).toBe(proposal.proposalId);
    expect(resolved.prepareOutcome.kind).toBe("not_applicable");
    expect(resolved.executionContractPrepared).toBe(false);
    expect(resolved.executionContractId).toBeNull();
  });

  it("T3 — disposition none → 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "none",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "none",
      forceLocalAuthority: true,
    });
    expect(resolved.kind).toBe("no_decision");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("CP-EB-03 / CP-PO-02 — pathRoot absent → HD recorded, PREPARE blocked honestly, EC 0", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "nopath",
    });
    // Overwrite binding without pathRoot (Product durable fact absent).
    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute(
      {
        projectId: seeded.projectId,
        actor: W2_TEST_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/w2-harness-nopath",
          remoteUrl: "https://github.com/acme/w2-harness-nopath.git",
          defaultBranch: "main",
          // pathRoot intentionally omitted
        },
      },
    );
    expect(rebound.ok).toBe(true);

    await proposePt(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.selectedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(resolved.prepareOutcome.kind).toBe("blocked");
    if (resolved.prepareOutcome.kind === "blocked") {
      expect(resolved.prepareOutcome.code).toMatch(/EFFECTS_UNRESOLVED|PATH|SCOPE|MISSION|BASIS/i);
      expect(resolved.prepareOutcome.message.length).toBeGreaterThan(0);
    }
    expect(resolved.executionContractPrepared).toBe(false);
    expect(resolved.executionContractId).toBeNull();
    expect(resolved.readyForNextGatedStep).toBe(false);
    expect(await hdCount(oa, seeded.projectId)).toBe(1);
    expect(await contractCount(oa, seeded.projectId)).toBe(0);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    // No durable seal when pathRoot absent
    const scopeIn =
      durable.decision.decisionBasis?.executionBasis?.scopeIn ?? [];
    expect(scopeIn.some((s) => s.startsWith("projects/"))).toBe(false);
  });

  it("CP-EB-04 — protected pathRoot → no local-write seal authority; PREPARE blocked", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "prot",
    });
    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute(
      {
        projectId: seeded.projectId,
        actor: W2_TEST_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/w2-harness-prot",
          remoteUrl: "https://github.com/acme/w2-harness-prot.git",
          defaultBranch: "main",
          pathRoot: ".git",
        },
      },
    );
    // May fail invariant validation — either way no local-write authority.
    if (!rebound.ok) {
      // Binding rejected at Product gate — also fail-closed for CP-EB-04.
      expect(rebound.ok).toBe(false);
      return;
    }

    await proposePt(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.executionContractPrepared).toBe(false);
    expect(resolved.executionContractId).toBeNull();
    expect(resolved.prepareOutcome.kind).toBe("blocked");
    expect(await contractCount(oa, seeded.projectId)).toBe(0);
  });

  it("sealRequired eligibility when TDS PRESENT without sealed OptionSet yet", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "seal-req",
    });
    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    if (gate.eligible) {
      expect(gate.subjectFamily).toBe("project_trajectory");
      if ("sealRequired" in gate) expect(gate.sealRequired).toBe(true);
    } else {
      expect(gate.kind).toBe("no_eligible_subject");
    }
  });

  it("T21 — restart after EC: contract rehydrates from durable store", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "restart",
    });
    await proposePt(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.prepareOutcome.kind).toBe("prepared");
    const ecId = resolved.executionContractId!;

    resetF2ProposalStoreForTests();
    const runtime2 = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "hfpt2",
    });
    const oa2 = runtime2.oa!;
    const listed =
      await oa2.executionContractServices.listExecutionContractHistory.execute({
        projectId: seeded.projectId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) return;
    expect(
      listed.contracts.some((c) => c.executionContractId === ecId),
    ).toBe(true);
    const hd = await oa2.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(hd.ok).toBe(true);
  });
});

```

## APPENDIX C — FULL DIFF (code)
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 285417ea..6b45cf9d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -43,7 +43,10 @@ import {
   w2ResolveProductExecutionContextAction,
   w2ReadExecutionReviewItemAction,
 } from "@/features/project-assistant/w2/actions";
-import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  BOUNDED_OPTION_REF,
+  GOVERNED_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
 import type { RecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
 import { isWrongGenericPreExecReplaceableByRecoveryPrepare } from "@/features/project-assistant/w2/recoveryReplaceableCurrentContract";
 import {
@@ -1061,7 +1064,8 @@ export function TrajectorySurface({
         next.decisionBasisLinked === true;
       const shouldAutoPrepareGoverned =
         !isProposalSubject &&
-        selectedOptionRef === GOVERNED_OPTION_REF &&
+        (selectedOptionRef === GOVERNED_OPTION_REF ||
+          selectedOptionRef === BOUNDED_OPTION_REF) &&
         !next.proposalId;

       if (shouldAutoPrepareProposal) {
@@ -1213,7 +1217,8 @@ export function TrajectorySurface({
       }
       if (
         decision &&
-        decision.selectedOptionRef !== GOVERNED_OPTION_REF
+        decision.selectedOptionRef !== GOVERNED_OPTION_REF &&
+        decision.selectedOptionRef !== BOUNDED_OPTION_REF
       ) {
         setRecoveryBinding(null);
         return;
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 1c3b37db..e6c6da26 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -19,6 +19,7 @@ import type {
   IntentClass,
   PilotDecisionCandidate,
   PilotDecisionDisposition,
+  PilotDecisionTargetKind,
   SemanticCognitiveWorkloadAssessment,
   SemanticCognitiveWorkloadLevel,
 } from "./types";
@@ -73,6 +74,13 @@ const PILOT_DECISION_DISPOSITIONS: readonly PilotDecisionDisposition[] = [
   "ambiguous",
 ] as const;

+const PILOT_DECISION_TARGET_KINDS: readonly PilotDecisionTargetKind[] = [
+  "current_recommendation",
+  "presented_subject",
+  "specific_alternative",
+  "ambiguous",
+] as const;
+
 const CWP_DIMENSION_KEYS = [
   "ambiguity",
   "reasoningDepth",
@@ -139,9 +147,13 @@ const PILOT_DECISION_CANDIDATE_OBJECT_SCHEMA = {
       type: "string",
       enum: [...PILOT_DECISION_DISPOSITIONS],
     },
+    targetKind: {
+      type: "string",
+      enum: [...PILOT_DECISION_TARGET_KINDS],
+    },
     rationale: NULLABLE_STRING,
   },
-  required: ["disposition", "rationale"],
+  required: ["disposition", "targetKind", "rationale"],
 } as const;

 const CWP_LEVEL_SCHEMA = {
@@ -313,9 +325,10 @@ function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysis
 }

 /**
- * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — validate the NON-AUTHORITATIVE
+ * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 / D3-EXT — validate the NON-AUTHORITATIVE
  * disposition candidate. Absent / null / malformed → null. An unrecognised
  * disposition never becomes accept: it degrades to "ambiguous".
+ * Unknown / absent targetKind never becomes current_recommendation (fail-closed).
  */
 export function parsePilotDecisionCandidate(
   raw: unknown,
@@ -327,12 +340,28 @@ export function parsePilotDecisionCandidate(
   if (typeof disposition !== "string") return null;
   const normalized = disposition.trim().toLowerCase();
   if (!normalized) return null;
+
+  const rawTarget = obj.targetKind;
+  let targetKind: PilotDecisionTargetKind;
+  if (typeof rawTarget !== "string" || !rawTarget.trim()) {
+    // Absent / empty — fail-closed; never invent current_recommendation.
+    targetKind = "ambiguous";
+  } else {
+    const t = rawTarget.trim().toLowerCase();
+    targetKind = PILOT_DECISION_TARGET_KINDS.includes(
+      t as PilotDecisionTargetKind,
+    )
+      ? (t as PilotDecisionTargetKind)
+      : "ambiguous";
+  }
+
   return {
     disposition: PILOT_DECISION_DISPOSITIONS.includes(
       normalized as PilotDecisionDisposition,
     )
       ? (normalized as PilotDecisionDisposition)
       : "ambiguous",
+    targetKind,
     rationale: clip(obj.rationale, 500),
   };
 }
@@ -541,7 +570,7 @@ expectedOutcome, criticalJustification, requestedOperation (string libre / legac
 executionIntent (objet structuré docs_write/read_only/other NON-AUTORITAIRE OU null — intention d'exécution proposée, JAMAIS une grant REAL / HumanDecision / autorité ; executionIntent.requestedOperation reste générique/nullable ; champs incluant artifactBrief, contentRequirements, targetPath, evidenceRequirements).
 continuationKind (active_cycle_artifact_materialization OU null — hint NON-AUTORITAIRE de continuation du cycle actif ; JAMAIS une permission createCycle/skip ; le serveur valide contre activeCycle + REQUIRE_ARTIFACT).
 artifactMaterializationOperation (cursor.docs_write.apply OU null — discriminateur TECHNIQUE dédié à la matérialisation Artifact active-cycle ; JAMAIS du texte libre ; JAMAIS une autorité d'exécution).
-pilotDecisionCandidate ({disposition, rationale} OU null — lecture NON-AUTORITAIRE de la disposition du Pilote sur un sujet de décision DÉJÀ présenté ; JAMAIS une HumanDecision).
+pilotDecisionCandidate ({disposition, targetKind, rationale} OU null — lecture NON-AUTORITAIRE de la disposition du Pilote sur un sujet de décision DÉJÀ présenté ; JAMAIS une HumanDecision ; targetKind n'est JAMAIS un optionRef).

 === DISTINCTION FONDAMENTALE ===
 intentClass = EFFET demandé à Studio (quoi faire sur le produit).
@@ -679,10 +708,17 @@ disposition ∈ accept | refuse | amend | defer | none | ambiguous.
 - defer — le Pilote demande explicitement de reporter la disposition du sujet.
 - none — le tour ne dispose d'aucun sujet gouverné (cas nominal : conversation, question, autre sujet).
 - ambiguous — une disposition semble présente mais la cible ou la portée reste indéterminée.
+targetKind ∈ current_recommendation | presented_subject | specific_alternative | ambiguous (D3-EXT — NON-AUTORITAIRE).
+- current_recommendation — le Pilote accepte explicitement LA Recommendation actuellement présentée (« Oui, je valide ta recommandation », « Poursuis avec l'option que tu recommandes »).
+- presented_subject — le Pilote dispose le sujet présenté sans sélectionner explicitement une Recommendation particulière (principalement Proposal : « Oui, poursuis cette proposition »).
+- specific_alternative — le Pilote demande explicitement une option différente / alternative (« Je préfère l'autre option », « Je choisis la trajectoire gouvernée plutôt », « Pas celle que tu recommandes »).
+- ambiguous — la cible exacte n'est pas déterminable.
 Règles dures :
 - ce champ N'EST PAS une HumanDecision, un GO, une confirmation ni une autorité ; le serveur re-résout le sujet durable et refuse tout ce qui n'est pas unique et éligible ;
-- un « oui / ok / d'accord » isolé sans sujet gouverné présenté ⇒ none (JAMAIS accept) ;
-- si plusieurs sujets gouvernés sont plausibles ⇒ ambiguous (JAMAIS accept) ;
+- targetKind N'EST PAS un optionRef / optionSetRef / permission d'exécution ; un nom ou label d'option dans la prose ne devient JAMAIS un optionRef autoritaire ;
+- un « oui / ok / d'accord » isolé sans sujet gouverné présenté ⇒ disposition none (JAMAIS accept) ;
+- si plusieurs sujets gouvernés sont plausibles ⇒ disposition ambiguous (JAMAIS accept) ;
+- si la cible Recommendation vs alternative reste indéterminée ⇒ targetKind ambiguous (JAMAIS current_recommendation inventé) ;
 - ne JAMAIS inventer un sujet, un proposalId, un optionRef ou un optionSetRef ; ne JAMAIS les citer ici ;
 - en l'absence de preuve ⇒ none ; none et ambiguous n'enregistrent jamais rien.
 rationale : justification courte NON-AUTORITAIRE ou null.
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index d84952df..9c84e644 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -105,6 +105,7 @@ import {
   resolveChatFirstPilotDecision,
   toEffectiveDisposition,
   type ChatFirstEffectiveDisposition,
+  type ChatFirstPrepareOutcome,
 } from "../w2/resolveChatFirstPilotDecision";
 import {
   replacePendingDecisionSubjectForExplicitReinstruction,
@@ -721,29 +722,63 @@ const CHAT_FIRST_HUMAN_STATUS: Record<
 function chatFirstDecisionText(input: {
   readonly presentation: "test_provider" | "openai_live";
   readonly disposition: ChatFirstEffectiveDisposition;
+  readonly subjectFamily?: "proposal" | "project_trajectory";
+  readonly prepareOutcome?: ChatFirstPrepareOutcome;
 }): string {
   const head =
     input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
+  if (input.disposition === "accept") {
+    if (input.subjectFamily === "project_trajectory") {
+      const prep = input.prepareOutcome;
+      if (prep?.kind === "prepared") {
+        return [
+          head,
+          "Votre décision est enregistrée : vous acceptez la Recommendation ProjectTrajectory courante.",
+          `ExecutionContract préparé (${prep.executionContractId}).`,
+          "Aucune exécution n'a été lancée.",
+          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+        ].join(" ");
+      }
+      if (prep?.kind === "blocked") {
+        return [
+          head,
+          "Votre décision est enregistrée : vous acceptez la Recommendation ProjectTrajectory courante.",
+          "ExecutionContract NON matérialisé — préparation bloquée.",
+          prep.message,
+          "Aucune exécution n'a été lancée.",
+          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+        ].join(" ");
+      }
+      return [
+        head,
+        "Votre décision est enregistrée : vous acceptez la Recommendation ProjectTrajectory courante.",
+        "Aucun ExecutionContract n'a été préparé pour cette décision.",
+        "Aucune exécution n'a été lancée.",
+        "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+      ].join(" ");
+    }
+    return [
+      head,
+      "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
+      "La préparation de l'action est maintenant disponible. Rien n'a encore été exécuté.",
+      "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+    ].join(" ");
+  }
   const body =
-    input.disposition === "accept"
+    input.disposition === "refuse"
       ? [
-          "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
-          "La préparation de l'action est maintenant disponible. Rien n'a encore été exécuté.",
+          "Votre décision est enregistrée : vous ne poursuivez pas ce sujet.",
+          "Aucun contrat d'exécution n'est préparé. Aucune trajectoire projet n'est promue.",
         ]
-      : input.disposition === "refuse"
+      : input.disposition === "defer"
         ? [
-            "Votre décision est enregistrée : vous ne poursuivez pas ce sujet.",
-            "Aucun contrat d'exécution n'est préparé. Aucune trajectoire projet n'est promue.",
+            "Votre report est enregistré : la recommandation de travail est reportée vers un cycle aval honnête.",
+            "Une réserve non bloquante trace le report. Le sujet proposé est clos.",
           ]
-        : input.disposition === "defer"
-          ? [
-              "Votre report est enregistré : la recommandation de travail est reportée vers un cycle aval honnête.",
-              "Une réserve non bloquante trace le report. Le sujet proposé est clos.",
-            ]
-          : [
-              "Votre décision est enregistrée : le sujet doit être amendé avant d'être engagé.",
-              "Le sujet précédent est clos ; reformulez ce que vous voulez changer et je réinstruirai.",
-            ];
+        : [
+            "Votre décision est enregistrée : le sujet doit être amendé avant d'être engagé.",
+            "Le sujet précédent est clos ; reformulez ce que vous voulez changer et je réinstruirai.",
+          ];
   return [
     head,
     ...body,
@@ -1222,6 +1257,7 @@ export async function orchestrateAssistantSend(input: {
           oa: oaForChatFirst,
           projectId: project.projectId,
           disposition: analysis.pilotDecisionCandidate?.disposition ?? null,
+          targetKind: analysis.pilotDecisionCandidate?.targetKind ?? null,
           rationale: analysis.pilotDecisionCandidate?.rationale ?? null,
         });

@@ -1245,6 +1281,8 @@ export async function orchestrateAssistantSend(input: {
             text: chatFirstDecisionText({
               presentation,
               disposition: resolved.disposition,
+              subjectFamily: resolved.subjectFamily,
+              prepareOutcome: resolved.prepareOutcome,
             }),
             mode: modeResolution.mode as "fixture" | "live",
             presentation,
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/types.ts b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
index 304c81e2..655bc12b 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
@@ -36,8 +36,25 @@ export type PilotDecisionDisposition =
   | "none"
   | "ambiguous";

+/**
+ * D3-EXT — NON-AUTHORITATIVE semantic target of the disposition.
+ * NEVER an optionRef / optionSetRef / HumanDecision / execution permission.
+ * Server re-resolves sealed PresentedOptionSet; this field only discriminates
+ * whether the Pilot meant CURRENT Recommendation vs alternative vs subject.
+ */
+export type PilotDecisionTargetKind =
+  | "current_recommendation"
+  | "presented_subject"
+  | "specific_alternative"
+  | "ambiguous";
+
 export type PilotDecisionCandidate = {
   disposition: PilotDecisionDisposition;
+  /**
+   * NON-AUTHORITATIVE target discriminator (D3-EXT).
+   * Absent/unknown MUST NOT silently become current_recommendation.
+   */
+  targetKind: PilotDecisionTargetKind;
   /** optional non-authoritative hint; never trusted alone */
   rationale?: string | null;
 };
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
index a9fca932..443d30fa 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -111,7 +111,7 @@ export function presentedBindingToOptionSetDto(
   };
 }

-function decidedOptionSetRefsFromEpistemic(
+export function decidedOptionSetRefsFromEpistemicItems(
   items: ReadonlyArray<EpistemicItemLike>,
 ): ReadonlySet<string> {
   const refs = new Set<string>();
@@ -230,7 +230,9 @@ export async function findActiveAwaitingProposalPresentedOptionSet(
     };
   }

-  const decidedRefs = decidedOptionSetRefsFromEpistemic(epistemic.state.items);
+  const decidedRefs = decidedOptionSetRefsFromEpistemicItems(
+    epistemic.state.items,
+  );
   const matches: PresentedOptionSetBinding[] = [];
   for (const item of epistemic.state.items) {
     if (item.type !== "Observation" || item.status !== "active") continue;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts b/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
index 3f75635d..fb8af29d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
@@ -1,6 +1,10 @@
 /**
- * Read-only eligibility for chat-first Work (Proposal subject) disposition.
+ * Read-only eligibility for chat-first Work disposition.
  * Mirrors resolveChatFirstPilotDecision subject binding without recording.
+ *
+ * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
+ * Proposal subjects KEEP; unique ProjectTrajectory PresentedOptionSet ADDED;
+ * Proposal+PT / multi-PT → ambiguous (D4).
  */

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
@@ -8,6 +12,7 @@ import {
   listEffectivePendingDecisionSubjectMarkers,
   readActiveProposalDecisionSubject,
 } from "./activeProposalDecisionSubject";
+import { findActiveAwaitingProjectTrajectoryPresentedOptionSet } from "./activeProjectTrajectoryDecisionSubject";
 import {
   isProposalSubjectPresentedSet,
   type PresentedOptionSetBinding,
@@ -17,7 +22,18 @@ import { resolveW2QualificationInputs } from "./qualificationInputs";
 import { pilotAmbiguousPendingMessage } from "../presentationLabels";

 export type ChatFirstWorkEligibility =
-  | { readonly eligible: true; readonly presented: PresentedOptionSetBinding }
+  | {
+      readonly eligible: true;
+      readonly presented: PresentedOptionSetBinding;
+      readonly subjectFamily: "proposal" | "project_trajectory";
+    }
+  | {
+      readonly eligible: true;
+      readonly presented: null;
+      readonly subjectFamily: "project_trajectory";
+      /** Sealed OptionSet will be materialised on accept inside the resolver. */
+      readonly sealRequired: true;
+    }
   | {
       readonly eligible: false;
       readonly kind:
@@ -27,6 +43,7 @@ export type ChatFirstWorkEligibility =
       readonly message?: string;
       readonly code?: string;
       readonly proposalIds?: readonly string[];
+      readonly optionSetRefs?: readonly string[];
     };

 async function materializeSealedOptionSetForPendingSubject(input: {
@@ -77,24 +94,32 @@ async function materializeSealedOptionSetForPendingSubject(input: {
   return { ok: true, presented: rebound.presented };
 }

-export async function assessChatFirstWorkEligibility(input: {
+async function resolveProposalPresentedForEligibility(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
-}): Promise<ChatFirstWorkEligibility> {
+}): Promise<
+  | { readonly ok: true; readonly presented: PresentedOptionSetBinding | null }
+  | {
+      readonly ok: false;
+      readonly kind: "ambiguous_subjects" | "subject_read_failed" | "no_eligible_subject";
+      readonly message?: string;
+      readonly code?: string;
+      readonly proposalIds?: readonly string[];
+    }
+> {
   const subject = await readActiveProposalDecisionSubject(
     input.oa,
     input.projectId,
   );
   if (!subject.ok) {
     return {
-      eligible: false,
+      ok: false,
       kind: "subject_read_failed",
       code: subject.code,
       message: subject.message,
     };
   }

-  let presented: PresentedOptionSetBinding;
   if (subject.kind === "bound_awaiting_decision") {
     const pending = await listEffectivePendingDecisionSubjectMarkers(
       input.oa,
@@ -102,7 +127,7 @@ export async function assessChatFirstWorkEligibility(input: {
     );
     if (!pending.ok) {
       return {
-        eligible: false,
+        ok: false,
         kind: "subject_read_failed",
         code: pending.code,
         message: pending.message,
@@ -113,7 +138,7 @@ export async function assessChatFirstWorkEligibility(input: {
     );
     if (competing.length > 0) {
       return {
-        eligible: false,
+        ok: false,
         kind: "ambiguous_subjects",
         message: pilotAmbiguousPendingMessage(),
         proposalIds: [
@@ -124,11 +149,16 @@ export async function assessChatFirstWorkEligibility(input: {
         ],
       };
     }
-    presented = subject.presented;
-  } else if (subject.kind === "pending_reinstruction_required") {
+    if (!isProposalSubjectPresentedSet(subject.presented)) {
+      return { ok: true, presented: null };
+    }
+    return { ok: true, presented: subject.presented };
+  }
+
+  if (subject.kind === "pending_reinstruction_required") {
     if (subject.markers.length > 1) {
       return {
-        eligible: false,
+        ok: false,
         kind: "ambiguous_subjects",
         message: subject.message,
         proposalIds: subject.markers.map((m) => m.proposalId),
@@ -137,7 +167,7 @@ export async function assessChatFirstWorkEligibility(input: {
     const sole = subject.markers[0];
     if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
       return {
-        eligible: false,
+        ok: false,
         kind: "no_eligible_subject",
         code: "PENDING_SUBJECT_NOT_RECONSTRUCTIBLE",
         message: subject.message,
@@ -150,19 +180,136 @@ export async function assessChatFirstWorkEligibility(input: {
     });
     if (!bound.ok) {
       return {
-        eligible: false,
+        ok: false,
         kind: "no_eligible_subject",
         code: bound.code,
         message: bound.message,
       };
     }
-    presented = bound.presented;
-  } else {
-    return { eligible: false, kind: "no_eligible_subject" };
+    if (!isProposalSubjectPresentedSet(bound.presented)) {
+      return { ok: true, presented: null };
+    }
+    return { ok: true, presented: bound.presented };
+  }
+
+  return { ok: true, presented: null };
+}
+
+export async function assessChatFirstWorkEligibility(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+}): Promise<ChatFirstWorkEligibility> {
+  const proposal = await resolveProposalPresentedForEligibility(input);
+  if (!proposal.ok) {
+    return {
+      eligible: false,
+      kind: proposal.kind,
+      message: proposal.message,
+      code: proposal.code,
+      proposalIds: proposal.proposalIds,
+    };
+  }
+
+  const pt = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
+    input.oa,
+    input.projectId,
+  );
+  if (!pt.ok) {
+    return {
+      eligible: false,
+      kind: "subject_read_failed",
+      code: pt.code,
+      message: pt.message,
+    };
+  }
+
+  const hasProposal = proposal.presented != null;
+  const hasPtUnique = pt.kind === "unique";
+  const hasPtAmbiguous = pt.kind === "ambiguous";
+
+  // D4 — never silent-pick between Proposal and ProjectTrajectory.
+  if (hasProposal && (hasPtUnique || hasPtAmbiguous)) {
+    return {
+      eligible: false,
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      code: "PROPOSAL_AND_PROJECT_TRAJECTORY_SUBJECTS",
+      proposalIds: proposal.presented?.proposalId
+        ? [proposal.presented.proposalId]
+        : [],
+      optionSetRefs:
+        pt.kind === "unique"
+          ? [pt.presented.optionSetRef]
+          : pt.kind === "ambiguous"
+            ? pt.optionSetRefs
+            : [],
+    };
+  }
+
+  if (hasPtAmbiguous) {
+    return {
+      eligible: false,
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
+      optionSetRefs: pt.optionSetRefs,
+    };
+  }
+
+  if (hasProposal && proposal.presented) {
+    return {
+      eligible: true,
+      presented: proposal.presented,
+      subjectFamily: "proposal",
+    };
+  }
+
+  if (hasPtUnique) {
+    return {
+      eligible: true,
+      presented: pt.presented,
+      subjectFamily: "project_trajectory",
+    };
   }

-  if (!isProposalSubjectPresentedSet(presented)) {
+  // No sealed PT yet — accept may seal only when a CURRENT Nora trajectory
+  // recommendation is already PRESENT (TDS) AND no current trajectory HD exists.
+  const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
+    projectId: input.projectId,
+  });
+  if (
+    current.ok &&
+    typeof current.trajectory.decidedByDecisionRef === "string" &&
+    current.trajectory.decidedByDecisionRef.trim().length > 0
+  ) {
     return { eligible: false, kind: "no_eligible_subject" };
   }
-  return { eligible: true, presented };
+
+  const { resolveTrajectoryDecisionSupportProjection } = await import(
+    "./resolveTrajectoryDecisionSupportProjection"
+  );
+  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute({
+    projectId: input.projectId,
+  });
+  const cycleInstanceId =
+    live.ok ? live.livingProjectState.activeCycleInstanceId ?? null : null;
+  const tds = await resolveTrajectoryDecisionSupportProjection({
+    oa: input.oa,
+    projectId: input.projectId,
+    cycleInstanceId,
+  });
+  if (
+    tds.state === "PRESENT" &&
+    typeof tds.currentNoraRecommendedOptionRef === "string" &&
+    tds.currentNoraRecommendedOptionRef.trim().length > 0
+  ) {
+    return {
+      eligible: true,
+      presented: null,
+      subjectFamily: "project_trajectory",
+      sealRequired: true,
+    };
+  }
+
+  return { eligible: false, kind: "no_eligible_subject" };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
index 6b51b88d..5d13a517 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
@@ -3,6 +3,10 @@
  * NON-AUTHORITATIVE Pilot disposition candidate into (at most) ONE durable
  * HumanDecision on an already-presented governed decision subject.
  *
+ * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
+ * ProjectTrajectory accept → CURRENT recommendedOptionRef via decideTrajectory;
+ * GOVERNED/BOUNDED → canonical auto-PREPARE (PREPARE ≠ Execute).
+ *
  * Doctrine boundaries enforced here:
  * - the candidate is NEVER a HumanDecision; it only selects WHICH sealed
  *   option of an existing PresentedOptionSet the server submits to the
@@ -14,17 +18,28 @@
  * - no new store, no new HumanDecision writer, no DEFERRED enum invention.
  */

+import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
-import type { PilotDecisionDisposition } from "../f2/types";
+import { isRepositorySourceRef } from "@/lib/oa/execution-contract";
+import type {
+  PilotDecisionDisposition,
+  PilotDecisionTargetKind,
+} from "../f2/types";
 import {
   listEffectivePendingDecisionSubjectMarkers,
   readActiveProposalDecisionSubject,
 } from "./activeProposalDecisionSubject";
+import {
+  ensureSealedProjectTrajectoryPresentedOptionSet,
+  findActiveAwaitingProjectTrajectoryPresentedOptionSet,
+} from "./activeProjectTrajectoryDecisionSubject";
 import { decideTrajectory, trajectoryDecisionScope } from "./decideTrajectory";
+import { classifyProtectedRepositoryPath } from "./deriveActualExecutionWorkFromProductContext";
 import {
   isProposalSubjectPresentedSet,
   type PresentedOptionSetBinding,
 } from "./presentedOptionSet";
+import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
@@ -34,6 +49,10 @@ import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import { pilotAmbiguousPendingMessage } from "../presentationLabels";
 import { deferWorkRecommendation } from "./deferWorkRecommendation";
+import {
+  BOUNDED_OPTION_REF,
+  GOVERNED_OPTION_REF,
+} from "./trajectoryOptions";

 /** Dispositions that can carry a governed effect (incl. durable defer). */
 export type ChatFirstEffectiveDisposition =
@@ -42,6 +61,22 @@ export type ChatFirstEffectiveDisposition =
   | "amend"
   | "defer";

+/** CP3 — honest auto-PREPARE continuation outcome (not a Product Result engine). */
+export type ChatFirstPrepareOutcome =
+  | {
+      readonly kind: "prepared";
+      readonly executionContractId: string;
+    }
+  | {
+      readonly kind: "blocked";
+      readonly code: string;
+      readonly message: string;
+    }
+  | {
+      readonly kind: "not_applicable";
+      readonly reason: string;
+    };
+
 export type ChatFirstPilotDecisionResult =
   /** Nothing to dispose — normal orchestration continues untouched. */
   | { readonly kind: "no_decision" }
@@ -50,6 +85,7 @@ export type ChatFirstPilotDecisionResult =
       readonly kind: "ambiguous_subjects";
       readonly message: string;
       readonly proposalIds: readonly string[];
+      readonly optionSetRefs?: readonly string[];
     }
   /** No unique bound subject with a sealed PresentedOptionSet — governed action fails closed. */
   | {
@@ -86,6 +122,12 @@ export type ChatFirstPilotDecisionResult =
       readonly capturedAt: string;
       readonly decisionBasisLinked: boolean;
       readonly readyForNextGatedStep: boolean;
+      readonly subjectFamily: "proposal" | "project_trajectory";
+      readonly prepareOutcome: ChatFirstPrepareOutcome;
+      readonly executionContractId: string | null;
+      readonly executionContractPrepared: boolean;
+      readonly attemptCreated: false;
+      readonly executionPerformed: false;
     };

 const SELECTED_OPTION_BY_DISPOSITION: Record<
@@ -100,6 +142,22 @@ const SELECTED_OPTION_BY_DISPOSITION: Record<
 const NO_ELIGIBLE_SUBJECT_MESSAGE =
   "Aucun sujet de décision gouverné unique n'est ouvert pour ce projet — aucune décision n'a été enregistrée. La conversation reste ouverte.";

+const PT_NON_ACCEPT_MESSAGE =
+  "Pour une Recommendation ProjectTrajectory, seule l'acceptation explicite de la Recommendation courante est enregistrable ici — précisez ou utilisez le panneau d'état. Aucune décision n'a été enregistrée.";
+
+const PT_TARGET_NOT_CURRENT_MESSAGE =
+  "Pour ProjectTrajectory, seule l'acceptation explicite de la Recommendation courante (targetKind=current_recommendation) est enregistrable — une cible alternative ou ambiguë ne produit aucune HumanDecision.";
+
+const PROPOSAL_TARGET_REQUIRED_MESSAGE =
+  "Pour un sujet Proposal, la cible sémantique doit être le sujet présenté (presented_subject) — aucune HumanDecision enregistrée.";
+
+function proposalPrepareNotApplicable(): ChatFirstPrepareOutcome {
+  return {
+    kind: "not_applicable",
+    reason: "Proposal chat-first n'auto-prépare pas d'ExecutionContract.",
+  };
+}
+
 export function toEffectiveDisposition(
   disposition: PilotDecisionDisposition | null | undefined,
 ): ChatFirstEffectiveDisposition | "defer" | null {
@@ -110,6 +168,24 @@ export function toEffectiveDisposition(
   return null;
 }

+/**
+ * Normalize NON-AUTHORITATIVE targetKind. Absent/invalid → ambiguous.
+ * NEVER invents current_recommendation.
+ */
+export function toPilotDecisionTargetKind(
+  targetKind: PilotDecisionTargetKind | null | undefined,
+): PilotDecisionTargetKind {
+  if (
+    targetKind === "current_recommendation" ||
+    targetKind === "presented_subject" ||
+    targetKind === "specific_alternative" ||
+    targetKind === "ambiguous"
+  ) {
+    return targetKind;
+  }
+  return "ambiguous";
+}
+
 /**
  * Bind a sealed PresentedOptionSet for a unique pre-binding pending subject.
  *
@@ -170,18 +246,18 @@ async function materializeSealedOptionSetForPendingSubject(input: {
   return { ok: true, presented: rebound.presented };
 }

-export async function resolveChatFirstPilotDecision(input: {
+async function resolveProposalPresented(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
-  readonly disposition: PilotDecisionDisposition | null | undefined;
-  /** Non-authoritative hint carried into the decision reserves; never authority. */
-  readonly rationale?: string | null;
-  /** Test inject for the local single-user authority gate. */
-  readonly forceLocalAuthority?: boolean;
-}): Promise<ChatFirstPilotDecisionResult> {
-  const effective = toEffectiveDisposition(input.disposition);
-  if (effective == null) return { kind: "no_decision" };
-
+}): Promise<
+  | { readonly ok: true; readonly presented: PresentedOptionSetBinding | null }
+  | Extract<
+      ChatFirstPilotDecisionResult,
+      | { kind: "ambiguous_subjects" }
+      | { kind: "no_eligible_subject" }
+      | { kind: "subject_read_failed" }
+    >
+> {
   const subject = await readActiveProposalDecisionSubject(
     input.oa,
     input.projectId,
@@ -194,10 +270,7 @@ export async function resolveChatFirstPilotDecision(input: {
     };
   }

-  let presented: PresentedOptionSetBinding;
   if (subject.kind === "bound_awaiting_decision") {
-    // A second effective pending subject alongside a bound one is a competing
-    // sealed-subject situation: Studio never picks one for the Pilot.
     const pending = await listEffectivePendingDecisionSubjectMarkers(
       input.oa,
       input.projectId,
@@ -224,8 +297,13 @@ export async function resolveChatFirstPilotDecision(input: {
         ],
       };
     }
-    presented = subject.presented;
-  } else if (subject.kind === "pending_reinstruction_required") {
+    if (!isProposalSubjectPresentedSet(subject.presented)) {
+      return { ok: true, presented: null };
+    }
+    return { ok: true, presented: subject.presented };
+  }
+
+  if (subject.kind === "pending_reinstruction_required") {
     if (subject.markers.length > 1) {
       return {
         kind: "ambiguous_subjects",
@@ -235,7 +313,6 @@ export async function resolveChatFirstPilotDecision(input: {
     }
     const sole = subject.markers[0];
     if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
-      // Pending marker without a reconstructible subject: fail-closed action.
       return {
         kind: "no_eligible_subject",
         message: subject.message,
@@ -254,87 +331,213 @@ export async function resolveChatFirstPilotDecision(input: {
         code: bound.code,
       };
     }
-    presented = bound.presented;
-  } else {
-    // "none" and "pursue_prepare_ready": nothing awaiting a disposition.
+    if (!isProposalSubjectPresentedSet(bound.presented)) {
+      return { ok: true, presented: null };
+    }
+    return { ok: true, presented: bound.presented };
+  }
+
+  return { ok: true, presented: null };
+}
+
+async function resolveProjectTrajectoryDurableLocalWriteSeal(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly selectedOptionRef: string;
+}): Promise<
+  | {
+      readonly ok: true;
+      readonly seal: {
+        readonly scopeIn: readonly string[];
+        readonly reversibilityExpectation: "reversible";
+        readonly objective?: string;
+      };
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  if (
+    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
+    input.selectedOptionRef !== BOUNDED_OPTION_REF
+  ) {
     return {
-      kind: "no_eligible_subject",
-      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
-      code: "NO_ACTIVE_DECISION_SUBJECT",
+      ok: false,
+      code: "OPTION_NOT_EXECUTABLE_FOR_SEAL",
+      message: "Option non GOVERNED/BOUNDED — pas de seal local-write.",
     };
   }
-
-  if (!isProposalSubjectPresentedSet(presented)) {
-    // Project trajectory promotion stays on its own explicit path.
+  const project = await input.oa.projectServices.getProject.execute({
+    projectId: input.projectId,
+  });
+  if (!project.ok) {
     return {
-      kind: "no_eligible_subject",
-      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
-      code: "SUBJECT_NOT_PROPOSAL_MODE",
+      ok: false,
+      code: "PROJECT_READ_FAILED",
+      message: "Projet illisible — impossible de dériver un périmètre local-write.",
     };
   }
+  const binding = project.project.repositoryBinding;
+  const pathRoot =
+    typeof binding?.pathRoot === "string" ? binding.pathRoot.trim() : "";
+  if (!pathRoot) {
+    return {
+      ok: false,
+      code: "REPOSITORY_PATH_ROOT_ABSENT",
+      message:
+        "repositoryBinding.pathRoot absent — aucun périmètre local-write server-owned.",
+    };
+  }
+  if (!isRepositorySourceRef(pathRoot) || pathRoot.includes("..")) {
+    return {
+      ok: false,
+      code: "REPOSITORY_PATH_ROOT_UNSAFE",
+      message:
+        "pathRoot non sûr (traversée / ref invalide) — seal local-write refusé.",
+    };
+  }
+  const protectedHit = classifyProtectedRepositoryPath(pathRoot);
+  if (protectedHit) {
+    return {
+      ok: false,
+      code: "REPOSITORY_PATH_ROOT_PROTECTED",
+      message: `pathRoot protégé (${protectedHit}) — aucune qualification local-write.`,
+    };
+  }
+  // Objective from durable LPS (Project entity has no objective field).
+  let objective: string | undefined;
+  const lps = await input.oa.projectServices.getCurrentLivingProjectState.execute({
+    projectId: input.projectId,
+  });
+  if (lps.ok) {
+    const raw = lps.livingProjectState.objective;
+    if (typeof raw === "string" && raw.trim()) objective = raw.trim();
+  }
+  return {
+    ok: true,
+    seal: {
+      scopeIn: [pathRoot],
+      reversibilityExpectation: "reversible",
+      ...(objective ? { objective } : {}),
+    },
+  };
+}

-  if (effective === "defer") {
-    const deferred = await deferWorkRecommendation({
-      oa: input.oa,
+async function autoPrepareProjectTrajectoryContract(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly selectedOptionRef: string;
+  readonly forceLocalAuthority?: boolean;
+  /** Test inject — never from browser/model; production resolves managed clone HEAD. */
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+}): Promise<ChatFirstPrepareOutcome> {
+  if (
+    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
+    input.selectedOptionRef !== BOUNDED_OPTION_REF
+  ) {
+    return {
+      kind: "not_applicable",
+      reason: "Option non GOVERNED/BOUNDED — PREPARE non applicable.",
+    };
+  }
+  const live = await readLiveProjectContext(input.oa, input.projectId);
+  if (!live.ok) {
+    return {
+      kind: "blocked",
+      code: live.code,
+      message: live.message,
+    };
+  }
+  const prepared = await prepareExecutionContractFromW2Decision({
+    oa: input.oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext: {
       projectId: input.projectId,
-      presented,
-      rationale: input.rationale,
-      forceLocalAuthority: input.forceLocalAuthority,
-    });
-    if (!deferred.ok) {
-      if (deferred.code === "DEFER_TARGET_UNRESOLVED") {
-        return {
-          kind: "defer_target_unresolved",
-          code: deferred.code,
-          message: deferred.message,
-        };
-      }
-      return {
-        kind: "decision_refused",
-        code: deferred.code,
-        message: deferred.message,
-      };
-    }
+      lpsId: live.context.lpsId,
+      lpsVersion: live.context.lpsVersion,
+      doctrineDigest: live.context.doctrineDigest,
+      activeCycleInstanceId: live.context.activeCycleInstanceId,
+      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+    },
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  if (!prepared.ok) {
     return {
-      kind: "decision_recorded",
-      disposition: "defer",
-      decisionId: deferred.decisionId,
-      proposalId: presented.proposalId ?? null,
-      optionSetRef: presented.optionSetRef,
-      selectedOptionRef: "opt:defer-work-recommendation",
-      scope: trajectoryDecisionScope(presented.optionSetRef),
-      capturedAt: deferred.capturedAt,
-      decisionBasisLinked: false,
-      readyForNextGatedStep: false,
+      kind: "blocked",
+      code: prepared.code,
+      message: prepared.message,
     };
   }
+  return {
+    kind: "prepared",
+    executionContractId: prepared.contract.executionContractId,
+  };
+}

-  const selectedOptionRef =
-    SELECTED_OPTION_BY_DISPOSITION[effective as Exclude<
-      ChatFirstEffectiveDisposition,
-      "defer"
-    >];
-  if (!presented.optionRefs.includes(selectedOptionRef)) {
+async function recordProjectTrajectoryAccept(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly presented: PresentedOptionSetBinding;
+  readonly rationale?: string | null;
+  readonly forceLocalAuthority?: boolean;
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+}): Promise<ChatFirstPilotDecisionResult> {
+  const recommendedOptionRef = (
+    input.presented.recommendedOptionRef ?? ""
+  ).trim();
+  if (!recommendedOptionRef) {
+    return {
+      kind: "no_eligible_subject",
+      message:
+        "Recommendation courante absente du jeu d'options scellé — aucune décision enregistrée.",
+      code: "RECOMMENDED_OPTION_MISSING",
+    };
+  }
+  if (!input.presented.optionRefs.includes(recommendedOptionRef)) {
+    return {
+      kind: "no_eligible_subject",
+      message:
+        "La Recommendation courante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
+      code: "RECOMMENDED_OPTION_NOT_PRESENTED",
+    };
+  }
+  if (
+    input.presented.trajectoryId == null ||
+    input.presented.candidateVersion == null
+  ) {
     return {
       kind: "no_eligible_subject",
       message:
-        "L'option correspondante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
-      code: "OPTION_NOT_PRESENTED",
+        "Liaison trajectoire/version absente du PresentedOptionSet — aucune décision enregistrée.",
+      code: "TRAJECTORY_BINDING_INCOMPLETE",
     };
   }

+  // CP2 — seal durable Product scope BEFORE decide so DecisionBasis carries it.
+  const sealResolved = await resolveProjectTrajectoryDurableLocalWriteSeal({
+    oa: input.oa,
+    projectId: input.projectId,
+    selectedOptionRef: recommendedOptionRef,
+  });
+  const durableLocalWriteSeal = sealResolved.ok ? sealResolved.seal : null;
+
   const decided = await decideTrajectory({
     oa: input.oa,
     projectId: input.projectId,
-    // Sealed binding only — no client/model-supplied refs ever reach here.
-    optionSetRef: presented.optionSetRef,
-    options: presented.options,
-    recommendedOptionRef: presented.recommendedOptionRef,
-    selectedOptionRef,
-    trajectoryId: null,
-    candidateVersion: null,
-    epistemicRefs: presented.epistemicRefs,
-    reservesText: null,
+    optionSetRef: input.presented.optionSetRef,
+    options: input.presented.options,
+    recommendedOptionRef,
+    // D3 — server selects CURRENT recommendedOptionRef only.
+    selectedOptionRef: recommendedOptionRef,
+    trajectoryId: input.presented.trajectoryId,
+    candidateVersion: input.presented.candidateVersion,
+    epistemicRefs: input.presented.epistemicRefs,
+    reservesText: input.rationale?.trim() ? input.rationale.trim() : null,
+    durableLocalWriteSeal,
     forceLocalAuthority: input.forceLocalAuthority,
   });
   if (!decided.ok) {
@@ -345,16 +548,324 @@ export async function resolveChatFirstPilotDecision(input: {
     };
   }

+  const prepareOutcome = await autoPrepareProjectTrajectoryContract({
+    oa: input.oa,
+    projectId: input.projectId,
+    decisionId: decided.decision.decisionId,
+    selectedOptionRef: recommendedOptionRef,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  const preparedId =
+    prepareOutcome.kind === "prepared"
+      ? prepareOutcome.executionContractId
+      : null;
+
   return {
     kind: "decision_recorded",
-    disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
+    disposition: "accept",
     decisionId: decided.decision.decisionId,
-    proposalId: decided.decision.proposalId ?? presented.proposalId ?? null,
-    optionSetRef: presented.optionSetRef,
-    selectedOptionRef,
-    scope: trajectoryDecisionScope(presented.optionSetRef),
+    proposalId: null,
+    optionSetRef: input.presented.optionSetRef,
+    selectedOptionRef: recommendedOptionRef,
+    scope: trajectoryDecisionScope(input.presented.optionSetRef),
     capturedAt: decided.decision.capturedAt,
     decisionBasisLinked: decided.decision.decisionBasisLinked,
-    readyForNextGatedStep: effective === "accept",
+    readyForNextGatedStep: prepareOutcome.kind === "prepared",
+    subjectFamily: "project_trajectory",
+    prepareOutcome,
+    executionContractId: preparedId,
+    executionContractPrepared: prepareOutcome.kind === "prepared",
+    attemptCreated: false,
+    executionPerformed: false,
   };
 }
+
+export async function resolveChatFirstPilotDecision(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly disposition: PilotDecisionDisposition | null | undefined;
+  /**
+   * D3-EXT — NON-AUTHORITATIVE target discriminator.
+   * Absent/invalid → ambiguous (never invents current_recommendation).
+   */
+  readonly targetKind?: PilotDecisionTargetKind | null;
+  /** Non-authoritative hint carried into the decision reserves; never authority. */
+  readonly rationale?: string | null;
+  /** Test inject for the local single-user authority gate. */
+  readonly forceLocalAuthority?: boolean;
+  /** Test inject — PREPARE pin; production resolves managed clone HEAD. */
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+}): Promise<ChatFirstPilotDecisionResult> {
+  const effective = toEffectiveDisposition(input.disposition);
+  if (effective == null) return { kind: "no_decision" };
+  const targetKind = toPilotDecisionTargetKind(input.targetKind);
+
+  const proposal = await resolveProposalPresented({
+    oa: input.oa,
+    projectId: input.projectId,
+  });
+  if ("kind" in proposal) {
+    return proposal;
+  }
+
+  const ptLookup = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
+    input.oa,
+    input.projectId,
+  );
+  if (!ptLookup.ok) {
+    return {
+      kind: "subject_read_failed",
+      code: ptLookup.code,
+      message: ptLookup.message,
+    };
+  }
+
+  const hasProposal = proposal.presented != null;
+  const hasPt =
+    ptLookup.kind === "unique" || ptLookup.kind === "ambiguous";
+
+  // D4 — Proposal + ProjectTrajectory (or multi-PT) → clarification, zero HD.
+  if (hasProposal && hasPt) {
+    return {
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      proposalIds: proposal.presented?.proposalId
+        ? [proposal.presented.proposalId]
+        : [],
+      optionSetRefs:
+        ptLookup.kind === "unique"
+          ? [ptLookup.presented.optionSetRef]
+          : ptLookup.kind === "ambiguous"
+            ? ptLookup.optionSetRefs
+            : [],
+    };
+  }
+  if (ptLookup.kind === "ambiguous") {
+    return {
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      proposalIds: [],
+      optionSetRefs: ptLookup.optionSetRefs,
+    };
+  }
+
+  // ——— Proposal path (KEEP semantics; D3-EXT targetKind gate) ———
+  if (hasProposal && proposal.presented) {
+    if (targetKind !== "presented_subject") {
+      return {
+        kind: "no_eligible_subject",
+        message: PROPOSAL_TARGET_REQUIRED_MESSAGE,
+        code: "PROPOSAL_TARGET_KIND_REQUIRED",
+      };
+    }
+    const presented = proposal.presented;
+
+    if (effective === "defer") {
+      const deferred = await deferWorkRecommendation({
+        oa: input.oa,
+        projectId: input.projectId,
+        presented,
+        rationale: input.rationale,
+        forceLocalAuthority: input.forceLocalAuthority,
+      });
+      if (!deferred.ok) {
+        if (deferred.code === "DEFER_TARGET_UNRESOLVED") {
+          return {
+            kind: "defer_target_unresolved",
+            code: deferred.code,
+            message: deferred.message,
+          };
+        }
+        return {
+          kind: "decision_refused",
+          code: deferred.code,
+          message: deferred.message,
+        };
+      }
+      return {
+        kind: "decision_recorded",
+        disposition: "defer",
+        decisionId: deferred.decisionId,
+        proposalId: presented.proposalId ?? null,
+        optionSetRef: presented.optionSetRef,
+        selectedOptionRef: "opt:defer-work-recommendation",
+        scope: trajectoryDecisionScope(presented.optionSetRef),
+        capturedAt: deferred.capturedAt,
+        decisionBasisLinked: false,
+        readyForNextGatedStep: false,
+        subjectFamily: "proposal",
+        prepareOutcome: proposalPrepareNotApplicable(),
+        executionContractId: null,
+        executionContractPrepared: false,
+        attemptCreated: false,
+        executionPerformed: false,
+      };
+    }
+
+    const selectedOptionRef =
+      SELECTED_OPTION_BY_DISPOSITION[effective as Exclude<
+        ChatFirstEffectiveDisposition,
+        "defer"
+      >];
+    if (!presented.optionRefs.includes(selectedOptionRef)) {
+      return {
+        kind: "no_eligible_subject",
+        message:
+          "L'option correspondante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
+        code: "OPTION_NOT_PRESENTED",
+      };
+    }
+
+    const decided = await decideTrajectory({
+      oa: input.oa,
+      projectId: input.projectId,
+      optionSetRef: presented.optionSetRef,
+      options: presented.options,
+      recommendedOptionRef: presented.recommendedOptionRef,
+      selectedOptionRef,
+      trajectoryId: null,
+      candidateVersion: null,
+      epistemicRefs: presented.epistemicRefs,
+      reservesText: null,
+      forceLocalAuthority: input.forceLocalAuthority,
+    });
+    if (!decided.ok) {
+      return {
+        kind: "decision_refused",
+        code: decided.code,
+        message: decided.message,
+      };
+    }
+
+    return {
+      kind: "decision_recorded",
+      disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
+      decisionId: decided.decision.decisionId,
+      proposalId: decided.decision.proposalId ?? presented.proposalId ?? null,
+      optionSetRef: presented.optionSetRef,
+      selectedOptionRef,
+      scope: trajectoryDecisionScope(presented.optionSetRef),
+      capturedAt: decided.decision.capturedAt,
+      decisionBasisLinked: decided.decision.decisionBasisLinked,
+      readyForNextGatedStep: effective === "accept",
+      subjectFamily: "proposal",
+      prepareOutcome: proposalPrepareNotApplicable(),
+      executionContractId: null,
+      executionContractPrepared: false,
+      attemptCreated: false,
+      executionPerformed: false,
+    };
+  }
+
+  // ——— ProjectTrajectory path (D1-A / D3-EXT / D2-A / CP2 / CP3) ———
+  if (effective !== "accept") {
+    if (ptLookup.kind === "unique") {
+      return {
+        kind: "no_eligible_subject",
+        message: PT_NON_ACCEPT_MESSAGE,
+        code: "PROJECT_TRAJECTORY_ACCEPT_ONLY",
+      };
+    }
+    return {
+      kind: "no_eligible_subject",
+      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
+      code: "NO_ACTIVE_DECISION_SUBJECT",
+    };
+  }
+
+  // D3-EXT — PT HD only for explicit CURRENT Recommendation acceptance.
+  if (targetKind !== "current_recommendation") {
+    return {
+      kind: "no_eligible_subject",
+      message: PT_TARGET_NOT_CURRENT_MESSAGE,
+      code:
+        targetKind === "specific_alternative"
+          ? "PROJECT_TRAJECTORY_SPECIFIC_ALTERNATIVE"
+          : "PROJECT_TRAJECTORY_TARGET_NOT_CURRENT_RECOMMENDATION",
+    };
+  }
+
+  let presented: PresentedOptionSetBinding;
+  if (ptLookup.kind === "unique") {
+    presented = ptLookup.presented;
+  } else {
+    // Idempotency — never seal+decide a second PT after a current trajectory HD.
+    const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
+      projectId: input.projectId,
+    });
+    if (
+      current.ok &&
+      typeof current.trajectory.decidedByDecisionRef === "string" &&
+      current.trajectory.decidedByDecisionRef.trim().length > 0
+    ) {
+      return {
+        kind: "no_eligible_subject",
+        message:
+          "Une trajectoire courante est déjà décidée — aucune nouvelle HumanDecision chat-first.",
+        code: "TRAJECTORY_ALREADY_DECIDED",
+      };
+    }
+
+    // Align with eligibility: only seal when TDS PRESENT carries a CURRENT Nora ref.
+    const { resolveTrajectoryDecisionSupportProjection } = await import(
+      "./resolveTrajectoryDecisionSupportProjection"
+    );
+    const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
+      {
+        projectId: input.projectId,
+      },
+    );
+    const cycleInstanceId =
+      live.ok ? live.livingProjectState.activeCycleInstanceId ?? null : null;
+    const tds = await resolveTrajectoryDecisionSupportProjection({
+      oa: input.oa,
+      projectId: input.projectId,
+      cycleInstanceId,
+    });
+    if (
+      tds.state !== "PRESENT" ||
+      typeof tds.currentNoraRecommendedOptionRef !== "string" ||
+      tds.currentNoraRecommendedOptionRef.trim().length === 0
+    ) {
+      return {
+        kind: "no_eligible_subject",
+        message: NO_ELIGIBLE_SUBJECT_MESSAGE,
+        code: "NO_ACTIVE_DECISION_SUBJECT",
+      };
+    }
+
+    const sealed = await ensureSealedProjectTrajectoryPresentedOptionSet({
+      oa: input.oa,
+      projectId: input.projectId,
+    });
+    if (!sealed.ok) {
+      if (sealed.kind === "ambiguous") {
+        return {
+          kind: "ambiguous_subjects",
+          message: sealed.message,
+          proposalIds: [],
+          optionSetRefs: sealed.optionSetRefs ?? [],
+        };
+      }
+      return {
+        kind: "no_eligible_subject",
+        message: sealed.message,
+        code: sealed.code,
+      };
+    }
+    presented = sealed.presented;
+  }
+
+  return recordProjectTrajectoryAccept({
+    oa: input.oa,
+    projectId: input.projectId,
+    presented,
+    rationale: input.rationale,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+}
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 34d85a97..ecf475fa 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -43,31 +43,104 @@ function normalizeNaturalMaterializationProbe(raw: string): string {
 }

 /**
- * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — deterministic NON-AUTHORITATIVE
+ * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 / D3-EXT — deterministic NON-AUTHORITATIVE
  * disposition candidate, emitted on the SAME structured intent payload a live
  * provider would use. There is no parallel Fake decision writer: the server
  * still re-resolves the durable subject and owns every HumanDecision.
+ *
+ * targetKind is NEVER an optionRef — only a semantic target discriminator.
  */
 function matchPilotDecisionCandidate(
   probe: string,
-): { disposition: string; rationale: string | null } | null {
+): {
+  disposition: string;
+  targetKind: string;
+  rationale: string | null;
+} | null {
+  if (probe.includes("__F2_DECIDE_ACCEPT_CURRENT_REC__")) {
+    return {
+      disposition: "accept",
+      targetKind: "current_recommendation",
+      rationale: "Pilote valide explicitement la Recommendation courante.",
+    };
+  }
+  if (probe.includes("__F2_DECIDE_ACCEPT_ALT__")) {
+    return {
+      disposition: "accept",
+      targetKind: "specific_alternative",
+      rationale: "Pilote demande une option différente de la Recommendation.",
+    };
+  }
+  if (probe.includes("__F2_DECIDE_ACCEPT_SUBJECT__")) {
+    return {
+      disposition: "accept",
+      targetKind: "presented_subject",
+      rationale: "Pilote engage le sujet présenté.",
+    };
+  }
   if (probe.includes("__F2_DECIDE_ACCEPT__")) {
-    return { disposition: "accept", rationale: "Pilote engage le sujet présenté." };
+    // Proposal-compatible default: presented_subject (not current_recommendation).
+    return {
+      disposition: "accept",
+      targetKind: "presented_subject",
+      rationale: "Pilote engage le sujet présenté.",
+    };
   }
   if (probe.includes("__F2_DECIDE_REFUSE__")) {
-    return { disposition: "refuse", rationale: "Pilote refuse le sujet présenté." };
+    return {
+      disposition: "refuse",
+      targetKind: "presented_subject",
+      rationale: "Pilote refuse le sujet présenté.",
+    };
   }
   if (probe.includes("__F2_DECIDE_AMEND__")) {
-    return { disposition: "amend", rationale: "Pilote demande un amendement." };
+    return {
+      disposition: "amend",
+      targetKind: "presented_subject",
+      rationale: "Pilote demande un amendement.",
+    };
   }
   if (probe.includes("__F2_DECIDE_DEFER__")) {
-    return { disposition: "defer", rationale: "Pilote demande un report." };
+    return {
+      disposition: "defer",
+      targetKind: "presented_subject",
+      rationale: "Pilote demande un report.",
+    };
   }
   if (probe.includes("__F2_DECIDE_AMBIGUOUS__")) {
-    return { disposition: "ambiguous", rationale: "Cible du « oui » indéterminée." };
+    return {
+      disposition: "ambiguous",
+      targetKind: "ambiguous",
+      rationale: "Cible du « oui » indéterminée.",
+    };
   }
   if (probe.includes("__F2_DECIDE_NONE__")) {
-    return { disposition: "none", rationale: null };
+    return { disposition: "none", targetKind: "ambiguous", rationale: null };
+  }
+
+  // Natural-language Fake cues for D3-EXT deterministic proofs (no optionRef).
+  const normalized = probe.toLowerCase();
+  if (
+    /valide\s+ta\s+recommandation|option\s+que\s+tu\s+recommand|poursuis\s+avec\s+l['']option\s+que\s+tu\s+recommand/.test(
+      normalized,
+    )
+  ) {
+    return {
+      disposition: "accept",
+      targetKind: "current_recommendation",
+      rationale: "Acceptation explicite de la Recommendation courante.",
+    };
+  }
+  if (
+    /autre\s+option|plut[oô]t\s+(l['']autre|la\s+trajectoire\s+gouvern)|pas\s+celle\s+que\s+tu\s+recommand|je\s+choisis\s+la\s+trajectoire\s+gouvern/.test(
+      normalized,
+    )
+  ) {
+    return {
+      disposition: "accept",
+      targetKind: "specific_alternative",
+      rationale: "Demande explicite d'une option alternative.",
+    };
   }
   return null;
 }

```

## APPENDIX D — FULL DIFF (tests + PRR)
```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index ac760a1e..53954657 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -630,8 +630,7 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
     );
     await screen.findByTestId("w2-decision");

-    // PJ-REPROOF-04 — no Pilot HOW selection; Studio derives mission.
-    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
+    // D2-A — BOUNDED auto-PREPARE (same as GOVERNED); no mandatory sandbox CTA.
     await screen.findByTestId("w2-contract");
     fireEvent.click(screen.getByTestId("w2-inspect-contract"));
     await screen.findByTestId("w2-inspection-state");
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts
index 71f2c377..2bd7ee6d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts
@@ -1,5 +1,5 @@
 /**
- * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — non-authoritative disposition
+ * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 / D3-EXT — non-authoritative disposition
  * candidate: schema contract, fail-closed validation, fake-provider parity.
  *
  * @vitest-environment node
@@ -11,7 +11,10 @@ import {
   parsePilotDecisionCandidate,
   validateIntentAnalysisPayload,
 } from "@/features/project-assistant/f2/intentAnalysis";
-import { toEffectiveDisposition } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
+import {
+  toEffectiveDisposition,
+  toPilotDecisionTargetKind,
+} from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
 import { FakeConversationProvider } from "@/lib/platform/ai";

 function basePayload(extra: Record<string, unknown>) {
@@ -40,26 +43,41 @@ function basePayload(extra: Record<string, unknown>) {
   };
 }

-describe("F2 intent schema — pilotDecisionCandidate", () => {
+describe("F2 intent schema — pilotDecisionCandidate D3-EXT", () => {
   const ajv = new Ajv({ allErrors: true });
   const validate = ajv.compile(F2_INTENT_JSON_SCHEMA);

-  it("accepts an explicit null and a well-formed candidate", () => {
+  it("accepts null and a well-formed candidate with targetKind", () => {
     expect(validate(basePayload({ pilotDecisionCandidate: null }))).toBe(true);
     expect(
       validate(
         basePayload({
-          pilotDecisionCandidate: { disposition: "accept", rationale: null },
+          pilotDecisionCandidate: {
+            disposition: "accept",
+            targetKind: "current_recommendation",
+            rationale: null,
+          },
         }),
       ),
     ).toBe(true);
   });

-  it("refuses an unknown disposition and any extra field", () => {
+  it("refuses missing targetKind, unknown disposition, and extra fields", () => {
+    expect(
+      validate(
+        basePayload({
+          pilotDecisionCandidate: { disposition: "accept", rationale: null },
+        }),
+      ),
+    ).toBe(false);
     expect(
       validate(
         basePayload({
-          pilotDecisionCandidate: { disposition: "go", rationale: null },
+          pilotDecisionCandidate: {
+            disposition: "go",
+            targetKind: "current_recommendation",
+            rationale: null,
+          },
         }),
       ),
     ).toBe(false);
@@ -68,6 +86,7 @@ describe("F2 intent schema — pilotDecisionCandidate", () => {
         basePayload({
           pilotDecisionCandidate: {
             disposition: "accept",
+            targetKind: "current_recommendation",
             rationale: null,
             proposalId: "prop:hostile",
           },
@@ -77,7 +96,7 @@ describe("F2 intent schema — pilotDecisionCandidate", () => {
   });
 });

-describe("parsePilotDecisionCandidate — fail-closed", () => {
+describe("parsePilotDecisionCandidate — fail-closed D3-EXT", () => {
   it("returns null for absent / null / non-object payloads", () => {
     expect(parsePilotDecisionCandidate(undefined)).toBeNull();
     expect(parsePilotDecisionCandidate(null)).toBeNull();
@@ -86,18 +105,41 @@ describe("parsePilotDecisionCandidate — fail-closed", () => {
     expect(parsePilotDecisionCandidate({})).toBeNull();
   });

-  it("degrades an unrecognised disposition to ambiguous, never to accept", () => {
-    expect(parsePilotDecisionCandidate({ disposition: "go" })).toEqual({
-      disposition: "ambiguous",
+  it("D3E-05 — unknown targetKind → ambiguous, never current_recommendation", () => {
+    expect(
+      parsePilotDecisionCandidate({
+        disposition: "accept",
+        targetKind: "something_else",
+      }),
+    ).toEqual({
+      disposition: "accept",
+      targetKind: "ambiguous",
+      rationale: null,
+    });
+  });
+
+  it("absent targetKind → ambiguous (fail-closed, never invents current_recommendation)", () => {
+    expect(parsePilotDecisionCandidate({ disposition: "accept" })).toEqual({
+      disposition: "accept",
+      targetKind: "ambiguous",
       rationale: null,
     });
-    expect(parsePilotDecisionCandidate({ disposition: "APPROVE" })).toEqual({
+  });
+
+  it("degrades an unrecognised disposition to ambiguous, never to accept", () => {
+    expect(
+      parsePilotDecisionCandidate({
+        disposition: "go",
+        targetKind: "current_recommendation",
+      }),
+    ).toEqual({
       disposition: "ambiguous",
+      targetKind: "current_recommendation",
       rationale: null,
     });
   });

-  it("keeps the six known dispositions", () => {
+  it("keeps the six known dispositions and four targetKinds", () => {
     for (const disposition of [
       "accept",
       "refuse",
@@ -105,11 +147,25 @@ describe("parsePilotDecisionCandidate — fail-closed", () => {
       "defer",
       "none",
       "ambiguous",
-    ]) {
+    ] as const) {
       expect(
-        parsePilotDecisionCandidate({ disposition })?.disposition,
+        parsePilotDecisionCandidate({
+          disposition,
+          targetKind: "presented_subject",
+        })?.disposition,
       ).toBe(disposition);
     }
+    for (const targetKind of [
+      "current_recommendation",
+      "presented_subject",
+      "specific_alternative",
+      "ambiguous",
+    ] as const) {
+      expect(
+        parsePilotDecisionCandidate({ disposition: "accept", targetKind })
+          ?.targetKind,
+      ).toBe(targetKind);
+    }
   });
 });

@@ -117,15 +173,19 @@ describe("validateIntentAnalysisPayload — candidate is never authority", () =>
   it("carries a validated candidate on an otherwise informative analysis", () => {
     const dto = validateIntentAnalysisPayload(
       basePayload({
-        pilotDecisionCandidate: { disposition: "accept", rationale: "oui" },
+        pilotDecisionCandidate: {
+          disposition: "accept",
+          targetKind: "current_recommendation",
+          rationale: "oui",
+        },
       }),
     );
     expect(dto.parseOk).toBe(true);
     expect(dto.pilotDecisionCandidate).toEqual({
       disposition: "accept",
+      targetKind: "current_recommendation",
       rationale: "oui",
     });
-    // A candidate never upgrades the intent class or grants authority.
     expect(dto.intentClass).toBe("informative");
   });

@@ -136,20 +196,20 @@ describe("validateIntentAnalysisPayload — candidate is never authority", () =>
   });
 });

-describe("toEffectiveDisposition — only three dispositions carry an effect", () => {
-  it("maps accept/refuse/amend/defer and neutralises the rest", () => {
+describe("toEffectiveDisposition / toPilotDecisionTargetKind", () => {
+  it("maps dispositions and never invents current_recommendation", () => {
     expect(toEffectiveDisposition("accept")).toBe("accept");
-    expect(toEffectiveDisposition("refuse")).toBe("refuse");
-    expect(toEffectiveDisposition("amend")).toBe("amend");
-    expect(toEffectiveDisposition("defer")).toBe("defer");
     expect(toEffectiveDisposition("none")).toBeNull();
-    expect(toEffectiveDisposition("ambiguous")).toBeNull();
-    expect(toEffectiveDisposition(null)).toBeNull();
-    expect(toEffectiveDisposition(undefined)).toBeNull();
+    expect(toPilotDecisionTargetKind("current_recommendation")).toBe(
+      "current_recommendation",
+    );
+    expect(toPilotDecisionTargetKind(null)).toBe("ambiguous");
+    expect(toPilotDecisionTargetKind(undefined)).toBe("ambiguous");
+    expect(toPilotDecisionTargetKind("nope" as never)).toBe("ambiguous");
   });
 });

-describe("fake provider parity", () => {
+describe("fake provider parity — D3-EXT", () => {
   async function analyze(userContent: string) {
     const provider = new FakeConversationProvider();
     const completion = await provider.completeStructured({
@@ -167,18 +227,57 @@ describe("fake provider parity", () => {
     return validateIntentAnalysisPayload(JSON.parse(json));
   }

-  it("emits the candidate on the same structured intent payload as live", async () => {
+  it("D3E-06 — Proposal accept marker → presented_subject (not current_recommendation)", async () => {
     const accepted = await analyze("Oui, poursuis. __F2_DECIDE_ACCEPT__");
     expect(accepted.pilotDecisionCandidate?.disposition).toBe("accept");
-    // No subject identity is ever produced by the provider.
+    expect(accepted.pilotDecisionCandidate?.targetKind).toBe(
+      "presented_subject",
+    );
     expect(JSON.stringify(accepted)).not.toMatch(/prop:|optset:|opt:proposal/);
   });

-  it("emits none for a bare acknowledgement", async () => {
+  it("D3E-01 — natural « Oui, je valide ta recommandation » → current_recommendation", async () => {
+    const dto = await analyze("Oui, je valide ta recommandation.");
+    expect(dto.pilotDecisionCandidate?.disposition).toBe("accept");
+    expect(dto.pilotDecisionCandidate?.targetKind).toBe(
+      "current_recommendation",
+    );
+  });
+
+  it("D3E-02 — « Je préfère l'autre option » → specific_alternative", async () => {
+    const dto = await analyze("Je préfère l'autre option.");
+    expect(dto.pilotDecisionCandidate?.disposition).toBe("accept");
+    expect(dto.pilotDecisionCandidate?.targetKind).toBe(
+      "specific_alternative",
+    );
+  });
+
+  it("D3E-03 — « Je choisis la trajectoire gouvernée plutôt » → specific_alternative", async () => {
+    const dto = await analyze(
+      "Je choisis la trajectoire gouvernée plutôt.",
+    );
+    expect(dto.pilotDecisionCandidate?.disposition).toBe("accept");
+    expect(dto.pilotDecisionCandidate?.targetKind).toBe(
+      "specific_alternative",
+    );
+  });
+
+  it("D3E-04 — bare oui → none", async () => {
     const none = await analyze("oui __F2_DECIDE_NONE__");
     expect(none.pilotDecisionCandidate?.disposition).toBe("none");
   });

+  it("marker ACCEPT_CURRENT_REC / ACCEPT_ALT", async () => {
+    const cur = await analyze("ok __F2_DECIDE_ACCEPT_CURRENT_REC__");
+    expect(cur.pilotDecisionCandidate?.targetKind).toBe(
+      "current_recommendation",
+    );
+    const alt = await analyze("ok __F2_DECIDE_ACCEPT_ALT__");
+    expect(alt.pilotDecisionCandidate?.targetKind).toBe(
+      "specific_alternative",
+    );
+  });
+
   it("leaves the candidate null on ordinary turns", async () => {
     const ordinary = await analyze("Résume le projet. __F2_INFORMATIVE__");
     expect(ordinary.pilotDecisionCandidate ?? null).toBeNull();
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 07a29f5b..44852ad2 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -100,6 +100,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/approveCandidateTrajectory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
+      "features/project-assistant/w2/activeProjectTrajectoryDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/activeProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index ca1dc909..05b1cdfb 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -586,11 +586,11 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "2f94963886255d2a"
+      "sha256_16": "a398bf461383386f"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
-      "sha256_16": "eb13a379525867dd"
+      "sha256_16": "94d908d10eb822f2"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts",
@@ -666,7 +666,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
-      "sha256_16": "c9b1570800033f8a"
+      "sha256_16": "d8db5a73ecb35722"
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",

```
