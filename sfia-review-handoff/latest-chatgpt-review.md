# HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-ARCH-01 — Architecture Audit (FULL)

**OVERWRITE.** READ-ONLY architecture qualification. ZERO Product mutation. ZERO REAL.

### 1. Timestamp
- UTC: `2026-10-02T11:05:39Z`
- Local: `2026-10-02T13:05:39+0200`

### 2. Cycle / profile / typology
- Cycle: **HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-ARCH-01**
- CKC: Cycle **6 — Architecture technique**
- Profile: **CRITICAL**
- Typology: **EVOL**
- Intent: qualify canonical ownership of contextual trajectory option labels before any Delivery patch.

### 3. Local Git Truth initial / final
| Field | Value |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01` |
| branch (checkout) | `delivery/sfia-studio-habitflow-semantic-option-label-corr-01` |
| HEAD (checkout) | `787f49750edbea917164fbb51ae1cbbb8cce632d` (= Product tip of PR #543) |
| **origin/main audited** | `e996caeba6ec67c85f9d6f98d31b88958e70159d` |
| origin/main tip | `Merge pull request #543 ... preserve contextual trajectory recommendation labels` |
| expected main | `e996caeba6ec67c85f9d6f98d31b88958e70159d` · **MATCH** |
| staged | none |
| Product dirty | **none** (only `.tmp-sfia-review/**`) |

Status:
```
M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/pack-assets/
```

All code reads / greps: **`origin/main`** (not local dirty tree).

### 4. Main audited
`origin/main@e996caeba6ec67c85f9d6f98d31b88958e70159d` · PR #543 MERGED · post-merge CI #653 SUCCESS (per ChatGPT prior verification).

### 5. Incident HabitFlow (explained)
After #543:
- Nora **prose** correctly continues nominal HabitFlow toward EC preparation / explicit Pilot decision / preparation≠execution.
- Transcript / chat then appends:
  `Recommandation structurée (pas une décision) : « Replanifier ou suspendre sans relance immédiate ».`
- That label is the **recovery** presentation for `opt:trajectory:bounded-direct`, not nominal `Trajectoire bornée directe`.
- Campaign PAUSED before HumanDecision — correct.

Root cause (repo-confirmed):
`orchestrateTurn.ts` still resolves `optionLabel` via contextless `pilotTrajectoryOptionLabel(ref)` even when `trajectoryDecisionSupport.optionRefs/optionLabels` is PRESENT.

### 6–7. Sources / principles consumed
Build Doctrine, Roadmap, C1, D-ER architecture, framing 30/32/33/34/37, CKC 06/08 (guidance), cycle template + routing guide (process), listed Product seams + tests, commits `10752b65`, `71c31a8e`, Product `787f4975`, merge `e996caeb`.

Principles: Recommendation ≠ HumanDecision ≠ ExecutionAuthority · optionRef ≠ presentation label · Fact > Claim · NO PARALLEL ARCHITECTURE · reuse existing.

### 8. Exhaustive grep commands + useful outputs

Commands (on `origin/main`, path `projects/sfia-studio/app`):
```
git grep -n -- '<token>' origin/main -- projects/sfia-studio/app
```
Tokens: `pilotTrajectoryOptionLabel`, `pilotPresentedOptionLabel`, `contextualTrajectoryOptionLabelFromDecisionSupport`, `composePilotFacingAssistantText`, `optionRefs`, `optionLabels`, and the five French label literals.

Full captured output (trimmed in pack assets file; key Product call sites below):
```
===== pilotTrajectoryOptionLabel =====
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:30:import { pilotTrajectoryOptionLabel } from "@/features/project-assistant/presentationLabels";
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:175:        optionLabel: pilotTrajectoryOptionLabel(GOVERNED_OPTION_REF),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:178:    expect(chat).toContain(pilotTrajectoryOptionLabel(GOVERNED_OPTION_REF));
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts:27:  pilotTrajectoryOptionLabel,
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts:228:    expect(pilotTrajectoryOptionLabel(base.recommendedOptionRef)).toBe(
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts:297:    expect(pilotTrajectoryOptionLabel(CLARIFY_OPTION_REF)).toMatch(
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:756: * contextless recovery mapping in pilotTrajectoryOptionLabel.
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:50:import { pilotTrajectoryOptionLabel } from "../presentationLabels";
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:900: * Fallback to contextless `pilotTrajectoryOptionLabel` only when the
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:913:  return pilotTrajectoryOptionLabel(optionRef);
origin/main:projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts:51:import { pilotTrajectoryOptionLabel } from "./presentationLabels";
origin/main:projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts:1219:              optionLabel: pilotTrajectoryOptionLabel(
origin/main:projects/sfia-studio/app/features/project-assistant/presentationLabels.ts:866:export function pilotTrajectoryOptionLabel(
origin/main:projects/sfia-studio/app/features/project-assistant/presentationLabels.ts:894:  return pilotTrajectoryOptionLabel(ref);

===== pilotPresentedOptionLabel =====
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts:26:  pilotPresentedOptionLabel,
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts:292:      pilotPresentedOptionLabel({
origin/main:projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx:76:  pilotPresentedOptionLabel,
origin/main:projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx:2582:              {pilotPresentedOptionLabel({
origin/main:projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx:2649:              : pilotPresentedOptionLabel({
origin/main:projects/sfia-studio/app/features/project-assistant/presentationLabels.ts:886:export function pilotPresentedOptionLabel(input: {

===== contextualTrajectoryOptionLabelFromDecisionSupport =====
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:903:function contextualTrajectoryOptionLabelFromDecisionSupport(
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1034:        const label = contextualTrajectoryOptionLabelFromDecisionSupport(
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1046:        const recLabel = contextualTrajectoryOptionLabelFromDecisionSupport(

===== composePilotFacingAssistantText =====
origin/main:projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts:152:    // Statement equals narrative so composePilotFacingAssistantText is a no-op
origin/main:projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts:28:  composePilotFacingAssistantText,
origin/main:projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts:276:    const pilot = composePilotFacingAssistantText(
origin/main:projects/sfia-studio/app/__tests__/project-assistant/noraLifecycleRecommendationContinuity.d0.test.ts:22:  composePilotFacingAssistantText,
origin/main:projects/sfia-studio/app/__tests__/project-assistant/noraLifecycleRecommendationContinuity.d0.test.ts:418:    const pilot = composePilotFacingAssistantText(
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:25:  composePilotFacingAssistantText,
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:170:    const chat = composePilotFacingAssistantText(
origin/main:projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts:33:  composePilotFacingAssistantText,
origin/main:projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts:1224:      assistantText = composePilotFacingAssistantText(
origin/main:projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts:808:export function composePilotFacingAssistantText(
origin/main:projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts:37:  composePilotFacingAssistantText,
origin/main:projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts:693:              ? composePilotFacingAssistantText(

===== optionRefs =====
origin/main:projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts:714:        optionRefs: [],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts:311:          optionRefs: ["o1"],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts:345:        optionRefs: ["o1"],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts:990:          optionRefs: ["a", "b"],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts:493:      optionRefs: [GOVERNED_OPTION_REF],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts:338:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts:364:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts:423:        optionRefs: [GOVERNED_OPTION_REF, BOUNDED_OPTION_REF, CLARIFY_OPTION_REF],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts:436:        optionRefs: [],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts:475:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts:176:  expect(tds.optionRefs).toEqual(
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts:217:    expect(tds.optionRefs).not.toContain(INVENTED_REF);
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts:333:    expect(tds.optionRefs).toContain(GOVERNED_OPTION_REF);
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:136:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:154:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:194:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:220:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:237:      optionRefs: [GOVERNED_OPTION_REF, BOUNDED_OPTION_REF, CLARIFY_OPTION_REF],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:251:      optionRefs: [],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:274:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:314:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:349:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:368:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts:421:      optionRefs: [GOVERNED_OPTION_REF],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr02.lineage.d0.test.ts:47:      optionRefs: [
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr02.lineage.d0.test.ts:142:          optionRefs: [
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr02.lineage.d0.test.ts:155:  it("6 — optionRefs missing GOVERNED → fail closed", () => {
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr02.lineage.d0.test.ts:163:        { optionRefs: ["opt:trajectory:bounded-direct"] },
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:462:        optionRefs: [],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:770:    const optionRefs = [GOVERNED, BOUNDED, CLARIFY] as const;
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:820:        optionRefs: Object.freeze([...optionRefs]),
origin/main:projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts:99:      optionRefs: [GOVERNED_OPTION_REF],
origin/main:projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts:1379:          optionRefs: Object.freeze([] as string[]),
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:241:  readonly optionRefs: readonly string[];
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:543:          optionRefs: Object.freeze([]),
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:849:      optionRefs: Object.freeze([] as string[]),
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:897: * pairing (optionRefs[i] ↔ optionLabels[i]). Same optionRef can legitimately
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:905:  optionRefs: readonly string[],
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:908:  const idx = optionRefs.indexOf(optionRef);
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1027:    if (tds.state === "PRESENT" && tds.optionRefs.length > 0) {
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1032:      for (let i = 0; i < tds.optionRefs.length; i += 1) {
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1033:        const ref = tds.optionRefs[i]!;
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1036:          tds.optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1048:          tds.optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1061:        "Decision-support trajectoire : UNAVAILABLE — ne pas inventer d'optionRefs.",
origin/main:projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts:37:  const optionRefs = relatedObjects.filter((r) => r.startsWith("opt:"));
origin/main:projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts:38:  const trajectory = optionRefs.find((r) => r.startsWith("opt:trajectory:"));
origin/main:projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts:39:  return trajectory ?? optionRefs[0] ?? null;
origin/main:projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts:58:  readonly optionRefs: readonly string[] | null | undefined;
origin/main:projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts:91:    if (!input.optionRefs || !input.optionRefs.includes(normalized)) {
origin/main:projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts:717:            optionRefs: tds?.optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts:895:                    studio.trajectoryDecisionSupport.optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts:1212:            optionRefs: tdsForDisplay?.optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts:146:  if (!trajectoryContext.optionRefs.includes(input.selectedOptionRef)) {
origin/main:projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts:412:      optionRefs: presented.optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts:519:  const optionRefs = options.map((o) => o.optionRef);
origin/main:projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts:580:          optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts:604:          optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts:699:        rationale: `Pilote a retenu ${selected.label} parmi ${optionRefs.length} options.`,
origin/main:projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts:66:  readonly optionRefs: readonly string[];
origin/main:projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts:559:      optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts:650:    optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts:899:    optionRefs: options.map((o) => o.optionRef),
origin/main:projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts:167:  if (!ctx.optionRefs.includes(GOVERNED_OPTION_REF)) {
origin/main:projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts:169:      "trajectoryContext.optionRefs n'inclut pas GOVERNED — lignée recovery fail-closed.",
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts:317:  if (!presented.optionRefs.includes(selectedOptionRef)) {
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts:102:  readonly optionRefs: readonly string[];
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts:113:  const optionSet = new Set(input.optionRefs);
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts:182:  readonly optionRefs: readonly string[];
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts:243:    optionRefs: input.optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:19:  optionRefs: Object.freeze([]),
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:27:  optionRefs: Object.freeze([]),
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:58:    const optionRefs = options.map((o) => o.optionRef);
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:65:      optionRefs,
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:81:      optionRefs: Object.freeze(optionRefs),
origin/main:projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts:11: * Checkpoint F / R7 — when RecoveryContext is present, same optionRefs are kept
origin/main:projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts:316:      !Array.isArray(ctx.optionRefs) ||
origin/main:projects/sfia-studio/app/lib/oa/decision/domain/types.ts:89:  optionRefs: string[];
origin/main:projects/sfia-studio/app/lib/oa/decision/domain/types.ts:90:  /** Option the Pilote selected — must belong to optionRefs. */

===== optionLabels =====
origin/main:projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts:715:        optionLabels: [],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:463:        optionLabels: [],
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:771:    const optionLabels = [
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:821:        optionLabels: Object.freeze([...optionLabels]),
origin/main:projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts:1380:          optionLabels: Object.freeze([] as string[]),
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:242:  readonly optionLabels: readonly string[];
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:544:          optionLabels: Object.freeze([]),
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:850:      optionLabels: Object.freeze([] as string[]),
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:897: * pairing (optionRefs[i] ↔ optionLabels[i]). Same optionRef can legitimately
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:906:  optionLabels: readonly string[],
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:910:    const contextual = optionLabels[idx]?.trim();
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1037:          tds.optionLabels,
origin/main:projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts:1049:          tds.optionLabels,
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:20:  optionLabels: Object.freeze([]),
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:28:  optionLabels: Object.freeze([]),
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:59:    const optionLabels = options.map((o) => o.label);
origin/main:projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:82:      optionLabels: Object.freeze(optionLabels),

===== Replanifier ou suspendre sans relance immédiate =====
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx:150:        label: "Replanifier ou suspendre sans relance immédiate",
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:764:    "Replanifier ou suspendre sans relance immédiate";
origin/main:projects/sfia-studio/app/features/project-assistant/presentationLabels.ts:873:      return "Replanifier ou suspendre sans relance immédiate";
origin/main:projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts:223:        label: "Replanifier ou suspendre sans relance immédiate",

===== Trajectoire bornée directe =====
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx:257:            label: "Trajectoire bornée directe",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1112:          label: "Trajectoire bornée directe",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1528:          label: "Trajectoire bornée directe",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1678:          label: "Trajectoire bornée directe",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:4133:        label: "Trajectoire bornée directe",
origin/main:projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts:241:    expect(options[1]!.label).toBe("Trajectoire bornée directe");
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:762:  const NOMINAL_BOUNDED_LABEL = "Trajectoire bornée directe";
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:846:  it("NOMINAL — bounded-direct Recommendation uses Trajectoire bornée directe", () => {
origin/main:projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts:267:      label: "Trajectoire bornée directe",

===== Préparer une nouvelle tentative gouvernée =====
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx:141:        label: "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:549:          label: "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:651:          label: "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:729:          label: "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:807:          label: "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1121:          label: "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1209:          label: "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1599:          label: "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts:350:                "Préparer une nouvelle tentative gouvernée (fixture CORR-02 positive).",
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:772:      "Préparer une nouvelle tentative gouvernée",
origin/main:projects/sfia-studio/app/features/project-assistant/presentationLabels.ts:871:      return "Préparer une nouvelle tentative gouvernée";
origin/main:projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts:206:        label: "Préparer une nouvelle tentative gouvernée",

===== Trajectoire gouvernée par gates =====
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1519:          label: "Trajectoire gouvernée par gates",
origin/main:projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts:387:    expect(proposed.options[0]!.label).toBe("Trajectoire gouvernée par gates");
origin/main:projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts:240:    expect(options[0]!.label).toBe("Trajectoire gouvernée par gates");
origin/main:projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts:499:    expect(proposed.options[0]!.label).toBe("Trajectoire gouvernée par gates");
origin/main:projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts:253:      label: "Trajectoire gouvernée par gates",

===== Diagnostiquer / clarifier avant nouvelle tentative =====
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx:159:        label: "Diagnostiquer / clarifier avant nouvelle tentative",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1586:          label: "Diagnostiquer / clarifier avant nouvelle tentative",
origin/main:projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx:1651:      "Diagnostiquer / clarifier avant nouvelle tentative",
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts:46:const CLARIFY_LABEL = "Diagnostiquer / clarifier avant nouvelle tentative";
origin/main:projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts:774:      "Diagnostiquer / clarifier avant nouvelle tentative",
origin/main:projects/sfia-studio/app/features/project-assistant/presentationLabels.ts:875:      return "Diagnostiquer / clarifier avant nouvelle tentative";
origin/main:projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts:236:        label: "Diagnostiquer / clarifier avant nouvelle tentative",

===== Clarifier avant d'engager =====
origin/main:projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts:242:    expect(options[2]!.label).toBe("Clarifier avant d'engager");
origin/main:projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts:149:      guidanceText: "Clarifier avant d'engager.",
origin/main:projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts:283:      label: "Clarifier avant d'engager",


```

### 9. Call-site matrix (Product — exhaustive for helpers)

| Site | Function | Data source | Context | OptionSet available? | Label role | Contextless risk | Disposition |
|---|---|---|---|---|---|---|---|
| `presentationLabels.ts:866` | `pilotTrajectoryOptionLabel` | switch(ref) only | any | NO | presentation fallback | **HIGH** for bounded-direct (recovery text always) | **FALLBACK-ONLY** |
| `presentationLabels.ts:886` | `pilotPresentedOptionLabel` | options[].label then fallback | PresentedOptionSet / options array | YES when options passed | presentation | LOW when options provided | **CANONICAL candidate** |
| `studioCognitiveContext.ts:903` | `contextualTrajectoryOptionLabelFromDecisionSupport` (private #543) | optionRefs↔optionLabels | TDS | YES | presentation for Nora prompt | LOW | **CONSOLIDATE / RETIRE** into canonical |
| `studioCognitiveContext.ts:1034/1046` | buildStudioCognitivePromptSections | TDS labels | nominal+recovery | YES | cognitive INPUT | closed by #543 | KEEP behavior; retire helper |
| `orchestrateTurn.ts:1219` | structuredRecommendation.optionLabel | **contextless map** | any ACW Recommendation after validation | TDS **PRESENT but unused for label** | transcript OUTPUT | **INCIDENT** | **ADAPT** |
| `TrajectorySurface.tsx:2582/2649` | Recommendation + HumanDecision display | `pilotPresentedOptionLabel` + optionSet.options | W2 UI | YES | presentation | LOW | **KEEP** |
| `noraProductTurnOutputType.ts:808` | `composePilotFacingAssistantText` | receives pre-resolved optionLabel | formatter | N/A | pure formatter | none if label correct | **KEEP** |
| `runNoraAgentsTurn.ts:693` | compose preview | narrative+guidance only (no structured rec) | preview | N/A | preview | none | **KEEP** |
| `decideTrajectory.ts` | uses `selected.label` from PresentedOptionSet | OptionSet | decision | YES | presentation/rationale text | LOW | **KEEP** |
| Tests using `pilotTrajectoryOptionLabel` directly | fixtures/assertions | contextless | mixed | often NO | test | can encode recovery bias | ADAPT where asserting transcript |

Identity / authority consumers of **optionRefs only** (KEEP — not presentation):
`validateActiveCycleRecommendationAgainstDecisionSupport`, `resolveCurrentNoraTrajectoryRecommendation`, `decideTrajectory` membership checks, recovery lineage, OA DecisionBasis trajectoryContext — **optionRef identity, not labels**.

### 10. Exact Product call graph

**A. Cognitive / turn path (incident path)**
```
qualification (W2)
→ resolvePostEvidenceRecoveryContext
→ deriveTrajectoryOptions(optionInputs±recovery)
   → options[].optionRef + options[].label  (CONTEXTUAL SOURCE)
→ resolveTrajectoryDecisionSupportProjection
   → optionRefs[], optionLabels[], currentNoraRecommendedOptionRef
→ composeStudioCognitiveContext / StudioCognitiveContext.trajectoryDecisionSupport
→ buildStudioCognitivePromptSections
   → [#543] contextual labels for Options + Recommendation Nora courante  ✅
→ Nora structured product turn (OpenAI/Fake)
→ normalize / coherence (activeCycleWork preserved)
→ validateActiveCycleRecommendationAgainstDecisionSupport(optionRefs only)
→ materializeActiveCycleWork (persists recommendedOptionRef identity)
→ orchestrateTurn display block:
     structuredRecItem.recommendedOptionRef
     → pilotTrajectoryOptionLabel(ref)   ❌ CONTEXTLESS
     → composePilotFacingAssistantText(..., structuredRecommendation)
→ appendPilotTranscriptTurn(assistant)   ← wrong label DURABLE in conversation
→ ConversationSurface reads transcript
```

**B. W2 trajectory UI (already contextual)**
```
proposeTrajectoryOptions → PresentedOptionSet.options{optionRef,label}
→ TrajectorySurface
   → option.label for cards
   → pilotPresentedOptionLabel({optionRef, options}) for Recommendation / Decision display
→ HumanDecision selectedOptionRef (identity) + selected.label for rationale text
```

**C. Authority path (label is NOT authority)**
```
HumanDecision.selectedOptionRef / DecisionBasis
→ prepareExecutionContractFromW2Decision
→ ExecutionContract
```
Presentation labels never enter EC authority. Confirmed: decideTrajectory gates on optionRefs membership.

### 11. Authority boundaries
| Object | Authority? |
|---|---|
| optionRef | identity / decision membership | YES (structural) |
| option label | presentation only | NO |
| Recommendation (ACW) | epistemic decision-support | NO (≠ HD) |
| HumanDecision | Product decision | YES |
| ExecutionContract | execution authority | YES |
| transcript line | conversation history | NO (outranked by Studio CURRENT) |

### 12–15. Sources of truth / ownership
| Concern | Owner |
|---|---|
| Option identity | `deriveTrajectoryOptions` → `optionRef` constants |
| Option contextual semantic label | `deriveTrajectoryOptions` label field (nominal vs recovery branches) |
| Transport to Nora | `resolveTrajectoryDecisionSupportProjection` optionRefs/optionLabels |
| Transport to W2 UI | PresentedOptionSet.options |
| Recommendation identity | ACW `recommendedOptionRef` + validation vs optionRefs |
| Cognitive INPUT presentation | `buildStudioCognitivePromptSections` (fixed #543) |
| Transcript OUTPUT presentation | **should** use same contextual pairing; currently broken in orchestrateTurn |
| Canonical presentation resolver (existing) | **`pilotPresentedOptionLabel`** when OptionSet/options available |
| Contextless safety net | `pilotTrajectoryOptionLabel` FALLBACK-ONLY |

### 16–18. Persistence paths
- ACW: stores optionRef, not presentation label (identity SAFE).
- Transcript: stores composed assistant text including wrong structured line (presentation WRONG, durable in conversation DB).
- W2 UI: live OptionSet labels (contextual KEEP).

### 19–20. HumanDecision / EC
No label mutation of authority. Fixing presentation does not require HD/EC changes. Future HD after pause will use optionRef; W2 already shows contextual labels via pilotPresentedOptionLabel.

### 21. Helper history
| Commit | Intent |
|---|---|
| `10752b65` | Introduced **both** `pilotTrajectoryOptionLabel` (hardcoded map; bounded-direct = recovery wording) and `pilotPresentedOptionLabel` (OptionSet-first). Context: PJ recommendation integrity / Pilote UX scrub. |
| `71c31a8e` | Semantic continuity: TDS projection + orchestrateTurn structured Recommendation line. Wired orchestrateTurn to **contextless** `pilotTrajectoryOptionLabel` — likely because continuity work focused on optionRef validation, not contextual labels. Nominal+recovery already possible via deriveTrajectoryOptions at that time. |
| `787f4975` / PR #543 | Fixed cognitive INPUT only via private TDS helper. Did not touch orchestrateTurn. |

**Hypothesis ChatGPT: CONFIRMED** — `pilotTrajectoryOptionLabel` is a recovery-biased historical fallback and must not be nominal source when OptionSet/TDS labels are available.

Evidence: same commit that created it also created `pilotPresentedOptionLabel` for OptionSet-aware presentation; trajectoryOptions.ts already has distinct nominal/recovery labels for identical refs.

### 22. #543 before / after
| Seam | Before #543 | After #543 |
|---|---|---|
| Nora cognitive prompt Recommendation line | contextless recovery map | contextual TDS labels ✅ |
| Transcript structured Recommendation line | contextless recovery map | **unchanged ❌** |
| Tests | no nominal/recovery prompt proof | studioCognitiveContext tests cover prompt ✅; corr02 still only checks line **presence** |

Why suite stayed green: no test asserted transcript label equals OptionSet contextual label for nominal bounded-direct.

Private helper duplicates `pilotPresentedOptionLabel` semantics (arrays vs options[] shape). Should be consolidated, not kept as parallel API.

### 23. Duplicate seams (current)
1. `pilotPresentedOptionLabel` (canonical-shaped, OptionSet)
2. `contextualTrajectoryOptionLabelFromDecisionSupport` (TDS arrays, private)
3. `pilotTrajectoryOptionLabel` (contextless recovery-biased)
4. Direct `option.label` / `selected.label` reads

### 24. Test coverage matrix

| Case | Existing test | Assertion today | Gap |
|---|---|---|---|
| 1 cognitive prompt nominal bounded | studioCognitiveContext HABITFLOW tests | exact nominal label | CLOSED (#543) |
| 2 cognitive prompt recovery bounded | same | exact recovery label | CLOSED |
| 3 transcript nominal bounded | **NONE** | — | **OPEN — incident** |
| 4 transcript recovery bounded | **NONE** explicit | — | OPEN |
| 5 transcript governed | corr02 positive | line present + governed fixture prose | weak (no label equality) |
| 6 transcript clarify | NONE explicit | — | OPEN |
| 7 optionRef identity | corr01/corr02 validation | refs membership | CLOSED |
| 8 invented ref fail-closed | corr02 | no structured line / no invented | CLOSED |
| 9 ambiguous current Recommendation | corr01 | fail-closed | CLOSED |
| 10 W2 UI nominal | trajectorySurface.ui | uses option.label fixtures | mostly CLOSED |
| 11 W2 UI recovery | postExecutionTrajectorySurface | recovery labels | mostly CLOSED |
| 12 HumanDecision identity | decideTrajectory / integrity | optionRef | CLOSED |
| 13 Proposal decision-subject | TrajectorySurface proposal branch | proposal labels | CLOSED |
| 14 fallback when context absent | pilotPresented → pilotTrajectory | implicit | needs explicit unit |

**corr02 hypothesis: CONFIRMED**
```
expect(result.text).toMatch(/Recommandation structurée \(pas une décision\)/i);
```
Does **not** assert `Trajectoire bornée directe` vs recovery string.

Baseline re-run (read-only): **65 passed** / 0 failed on the four targeted suites.

### 25. Risks analyzed
- Wrong Recommendation selection: OUT of scope; validation remains optionRef-based.
- optionRef mutation: forbidden / not needed.
- Cognitive input vs transcript output divergence: **ACTIVE** (post-#543).
- Transcript vs W2 UI divergence: ACTIVE (UI contextual, chat recovery-biased).
- Fallback without context: keep fail-soft via pilotTrajectoryOptionLabel.
- Recovery regression: must prove recovery label still used when TDS says so.
- Proposal regression: TrajectorySurface already separate; don't break pilotProposalOptionLabel.
- Historical HabitFlow transcript wrong: YES likely persisted; do not rewrite; CURRENT context outranks.
- Import cycle: presentationLabels is leaf; orchestrateTurn already imports it; pilotPresented add is safe.
- Browser/server: presentationLabels already used from TrajectorySurface (client) — OK.
- Authority coupling: avoid feeding labels into HD/EC.
- Stale rehydration: next turns use CURRENT TDS/prompt; old transcript lines remain as history only.
- Duplicated resolver: #543 private helper + pilotPresented — consolidate.
- Future caller reusing contextless helper: deprecate usage pattern via tests + prefer pilotPresented.

### 26. Options A–E

**OPTION A — micro-patch orchestrateTurn only**
Inline TDS index lookup in orchestrateTurn.
- Benefit: smallest diff for symptom.
- Risk: duplicates #543 helper; third parallel resolver; debt.
- **Not recommended as end-state** (acceptable only as temporary if B blocked — it is not blocked).

**OPTION B — converge on `pilotPresentedOptionLabel` (RECOMMENDED)**
At orchestrateTurn (and optionally studioCognitiveContext), build `options: optionRefs.map((ref,i)=>({optionRef:ref,label:optionLabels[i]}))` then `pilotPresentedOptionLabel({optionRef, options})`.
- Benefit: reuse existing canonical primitive; TrajectorySurface already uses it; retire private #543 helper; one ownership story.
- Files: orchestrateTurn.ts; studioCognitiveContext.ts (consolidate); tests corr02 + new transcript cases; maybe thin unit on presentationLabels adapter if extracted.
- No DTO reshape; no optionRef change; no authority change.
- Debt removed: parallel private helper.
- Morris structural gate: **NONE** (reuse existing API).

**OPTION C — new canonical primitive**
Only if B insufficient. `pilotPresentedOptionLabel` already does OptionSet-first + fallback. Arrays can be adapted at call site. **Not justified.**

**OPTION D — reshape StudioTrajectoryDecisionSupportProjection**
Paired objects instead of parallel arrays. Aesthetic / minor safety; not required to close gap (arrays already consistent from same map). **OVER-ENGINEERING / out** unless future proof of desync.

**OPTION E — neutralize contextless fallback labels**
Making pilotTrajectoryOptionLabel “neutral” could break recovery UX when options absent. Prefer keep recovery-biased map as **last resort**, document FALLBACK-ONLY, drive callers to contextual path. Optional rename/deprecate later — not required for Delivery fix.

### 27. Recommended architecture
**OPTION B**: single presentation owner = `pilotPresentedOptionLabel` when contextual options/TDS available; `pilotTrajectoryOptionLabel` = FALLBACK-ONLY; retire `contextualTrajectoryOptionLabelFromDecisionSupport` by delegating to B; fix orchestrateTurn transcript path; extend tests for transcript nominal+recovery.

### 28. Why no parallel architecture
A third helper or new resolver would recreate the #543 pattern (local close without ownership). Existing `pilotPresentedOptionLabel` was introduced precisely for OptionSet-aware presentation.

### 29–32. Future Delivery scope (minimal coherent)

**Likely ADAPT**
- `orchestrateTurn.ts` — structuredRecommendation.optionLabel via pilotPresentedOptionLabel + TDS options mapping
- `f2/studioCognitiveContext.ts` — replace private helper with same primitive (behavior preserve)
- `__tests__/…/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts` — assert contextual label
- new/extended tests: transcript nominal bounded + recovery bounded (and optionally governed/clarify)
- optionally `__tests__/…/presentationLabels.test.ts` — explicit OptionSet-over-fallback unit for bounded-direct

**KEEP**
- `trajectoryOptions.ts`, `resolveTrajectoryDecisionSupportProjection.ts`, `resolveCurrentNoraTrajectoryRecommendation.ts`, `recommendationDecisionIntegrity.ts`, `materializeActiveCycleWork.ts` (validation), `composePilotFacingAssistantText`, `TrajectorySurface.tsx`, ConversationSurface, HD/EC/DecisionBasis, presentationLabels public API shape (extend usage, don't invent new engine)

**OUT**
- DTO reshape, optionRef changes, Recommendation selection, HD/EC, persistence, HabitFlow transcript rewrite, Build Doctrine/Roadmap/C1/framing, REAL, runtime v3

### 33. Debt / exit
| Item | Status | Exit |
|---|---|---|
| Private #543 helper | transitional duplicate | Retire by converging to pilotPresentedOptionLabel in next Delivery |
| pilotTrajectoryOptionLabel recovery-biased map | FALLBACK-ONLY | Keep until zero contextual callers missing; document; do not use as nominal |
| Historical HabitFlow wrong transcript lines | accepted historical conversation | No rewrite; CURRENT Studio context outranks; optional future UX note |

### 34. Historical HabitFlow transcript
- Wrong structured line **was composed into assistantText** then `appendPilotTranscriptTurn` → likely durable in conversation SQLite.
- Does **not** alter ACW recommendedOptionRef / Product Truth / HD.
- **Do not rewrite history.**
- After Delivery fix: new turns correct; prove Nora CURRENT context still outranks stale transcript (existing continuity doctrine); add regression so wrong recovery label cannot reappear on nominal TDS.

### 35. Fake / Real
ARCHITECTURE / IMPACT QUALIFIED. Baseline tests deterministic PASS. Campaign observation: Nora REAL prose coherent post-#543 — not a new REAL proof this cycle. ZERO REAL. ≠ READY FOR REAL. v3 NON ADOPTED.

### 36. Claims / anti-claims
**Claims:** gap located; ownership qualified; #543 scope incomplete on transcript; corr02 gap confirmed; Option B coherent Delivery perimeter.
**Anti-claims:** not Product-fixed; not E2E corrected; not READY FOR REAL; not runtime v3; not new architecture required; not HD/EC change required.

### 37. Morris decisions
**NONE** for architecture choice if Option B accepted as reuse-of-existing.
STOP-MORRIS would be required only if insisting on Option D (DTO reshape) or Option C (new engine) or authority/ref changes — **not recommended**.

### 38. Project Git effects
commit NO · push NO · PR NO · merge NO · Product files unchanged

### 39. Review Handoff
publish-in-cycle · commit expected:
`docs(review-handoff): publish habitflow semantic presentation architecture audit`

### 40. Final verdict
**READY FOR CHATGPT ARCHITECTURE REVIEW — HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-ARCH-01**

Next gate: ChatGPT Architecture Review → Morris GO for Cycle 8 Delivery Option B (no Product change in this cycle).

---

## A–V Cursor report mirror
**A. VERDICT:** READY FOR CHATGPT ARCHITECTURE REVIEW — HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-ARCH-01
**B. TIMESTAMP:** `2026-10-02T11:05:39Z`
**C. GIT TRUTH:** origin/main `e996caeba6ec67c85f9d6f98d31b88958e70159d` MATCH · Product dirty none
**D. CONVERGENCE:** capacity = semantic continuity Options→Nora→Pilote→HD→EC; milestone HabitFlow paused pre-HD
**E. INCIDENT:** transcript structured line uses recovery-biased contextless map despite #543 cognitive fix
**F–H:** see §§9–15
**I. HISTORY:** 10752b65 created both helpers; 71c31a8e wired orchestrateTurn to contextless; #543 fixed input only
**J. #543:** INPUT fixed; OUTPUT/transcript residual; private helper duplicate
**K. TESTS:** transcript nominal/recovery OPEN; corr02 presence-only CONFIRMED; baseline 65 passed
**L–N:** Option **B** recommended
**O. DELIVERY SCOPE:** orchestrateTurn + consolidate studioCognitive helper + transcript tests
**P–Q:** debt exits + do not rewrite HabitFlow history
**R. FAKE/REAL:** ZERO REAL · architecture qualified
**S. PROJECT GIT:** no Product mutation
**T. HANDOFF:** (publish next)
**U. MORRIS:** NONE (if B)
**V. NEXT:** ChatGPT Architecture Review → Delivery GO

---

Avant de répondre à Morris sur le rapport, ChatGPT doit lire :
branche `sfia/review-handoff`
fichier `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : main audité ; cycle/profile ; grep exhaustif ; call-site matrix ; call graph ; historique helpers ; #543 scope ; test gaps ; options ; recommandation ; impact HumanDecision/EC ; impact recovery ; transcript HabitFlow ; réserves ; Morris decisions ; fichiers Product inchangés ; verdict.

Si handoff incomplet :
REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
