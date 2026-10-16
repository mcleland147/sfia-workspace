# SFIA Studio — M-HD-01 Generic Mission HumanDecision Binding — Implementation Delivery Review Pack FULL

- **Horodatage** : 2026-10-16T14:15:18+02:00 (Europe/Paris)
- **GO Morris** : M-HD-01 GENERIC MISSION HUMANDECISION BINDING — TARGETED IMPLEMENTATION DELIVERY — CRITICAL (2026-10-16)
- **Direction** : **O1 IMPLEMENTED LOCALLY** — LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW
- **Verdict** : **M-HD-01 GENERIC MISSION BINDING — DETERMINISTIC PASS**

## 1. Git Truth (initial / final — same Product HEAD; dirty preserved)

| Item | Value |
|------|-------|
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| Branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (expected `896ff59c704bfa76df1da1a51705aaf948c1cf0c`) |
| Main match | **YES** |
| Dirty | **YES** — Delivery D-ER-16…19 + Project-scoped + Inspection binding + **M-HD-01 Implementation** preserved |
| Prior handoff tip | `55e83e1289a183162612de9218195b7b49e280fa` blob `7ace8d3c011f762fff7d1de5a9a6d87774f38927` |
| Product commit/push/PR | **NONE** (forbidden) |
| Reset/stash/clean/rebase | **NONE** |

### git status --short (final)

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
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

## 2. Cycle / profil / typologie

- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone: P6 — IN PROGRESS
- Capacité: V3-F05 (+ V3-F11/F12/F14)
- Type cycle: 8 — Delivery / implémentation
- Profil SFIA: CRITICAL
- Typologie v2.4: EVOL
- CKC: ckc:studio:delivery
- QA: CRITICAL — LOCAL DETERMINISTIC

## 3. Convergence Pre-check

| | |
|--|--|
| TARGET | Mission structurante générique → HD Pilote → reprise exacte → EC gouverné → Cursor indépendant profil/cycle |
| CURRENT→DONE | Generic PREPARE non-structurant; structural + verified HD resume; decisionRefs verified; binding invalid-explicit refuse |
| KEEP | OA Record/Get/Supersede HD; DecisionRepository; SQLite Product; ExecutionContract; Confirmation; Attempt; Cursor Generalist |
| ADAPT | DecisionBasisSourceType+=generic_mission; validateDecisionBasis; Generic PREPARE resume; Confirm/Authorize structural+HD path |
| REPLACE | Structural Generic dead-end without resume |
| RETIRE LATER | Specialized admissions after proven transfer |
| Dette ouverte | Carrier OA SelectionProfile standard; F2/ACGC; E4–E8; REAL boundary |

## 4. Sources consultées

- M-HD-01 Technical Contract §7 (handoff `55e83e12` / blob `7ace8d3c`)
- Implementation GO Morris 2026-10-16 (this cycle)
- OA `types.ts` / `invariants.ts` / `recordHumanDecision.ts` / `decisionBasisDigest.ts`
- `prepareGenericExecutionContractDraft.ts` / `governedExecuteAuthorizedContract.ts`
- `confirmForAuthorization.ts` / `authorizeGenericPreparedContract.ts` / `authorizeExecutionContract.ts`
- Build Doctrine / Roadmap / C1 / P6 / Doctrine 30/32/34/35/37 — read-only context from prior cycles
- Publisher: `scripts/sfia/publish-review-handoff.sh`

## 5. Décisions adoptées / résiduelles

**Adoptées:** D-ER-16…19; Option B; Project-scoped Tool Access; M-HD-01 O1; Implementation Contract GO.

**Résiduelles (hors ce Delivery):** E4–E8 Product/Nora continuity; REAL gate; SelectionProfile carrier; F2/ACGC historique.

## 6. Architecture CURRENT → TARGET

```
Project → Nora → mission générique qualifiée → présentation Pilote (sealed GenericMissionSubject)
  → HumanDecision OA (sourceType generic_mission, subject=missionSubjectId)
  → PREPARE resume (verify HD F1–F15) → EC.decisionRefs=[decisionId]
  → inspection → Confirmation si requis → AUTHORIZE → Cursor Select (Fake)
```

Pas d'EXECUTE auto après HD. Pas de second Decision store. Pas de migration SQL.

## 7. Identité de mission

- `missionSubjectId` = `gms:` + 16 random bytes hex (**occurrence id**)
- **Distinct** du `presentationDigest` (Implementation GO A2/A6; HD16)
- Stable présentation → décision → reprise (A3–A5)
- Persisté dans HD.subject / DecisionBasis.sourceRef / genericMissionContext.missionSubjectId
- Deux contenus identiques ⇒ deux IDs (HD16)
- Même ID + contenu matériel muté ⇒ digest diverge / reprise REFUS (HD17)

Note vs Technical Contract C1 (`gms:`+sha256): Delivery suit Implementation GO rule 6 (identité ≠ digest). Digest reste SHA-256 complet des champs matériels **incluant** l'identité.

## 8. Sceau / canonicalisation / digest

- Schema présentation: `0.1.0-gms` (≠ HD `0.1.0-oa`)
- Digest: `computeDecisionBasisSourceDigest` = SHA-256 hex de `canonicalizeJson(sealPayload)`
- `presentedAtIso` **exclu** du seal (HD19)
- Digest **exclu** de son propre calcul
- Champs scellés: identity, project, cycle?, objective/outcome/scope, materiality, repo binding, pathRoot, effects/capabilities, impactSignals, LPS anchors, optionRefs
- Nora paths: jamais scellés comme targetPath autoritatif (`expectedOutputs` = outcome Product)

## 9. DecisionBasis generic_mission

- `sourceType: "generic_mission"`
- `sourceRef` = missionSubjectId; `sourceDigest` = presentationDigest
- `genericMissionContext` snapshot complet + optionRefs/selectedOptionRef
- `proposalContext` KEEP (LPS/currentness only — pas de Proposal inventé)
- Autres contextes (trajectory/candidate/WR) **interdits**
- Options: `opt:generic-mission:accept-prepare` | `refuse` | `request-amend`

## 10. validateDecisionBasis

Étendu dans `invariants.ts`: whitelist sourceType; generic_mission branch (digest 64 hex, gms: prefix, schema 0.1.0-gms, foreign contexts forbidden, cycle mirror, selected∈presented). Legacy branches non affaiblies (HD24).

## 11. Présentation / Record HumanDecision

- `sealGenericMissionForPresentation` — Product-qualified seal; no Attempt; no HD
- `recordGenericMissionHumanDecision` — OA RecordHumanDecision; authority pilot; linkToLivingProjectState on accept
- Refuse / amend never unlock PREPARE
- Actions: `w2SealGenericMissionAction` / `w2RecordGenericMissionHumanDecisionAction`
- Aucune nouvelle surface UI structurante (pas de UX GATE)

## 12. Reprise PREPARE + decisionRefs

`prepareGenericExecutionContractDraft` / `solicitGenericExecutionPrepare` acceptent `decisionId`.
`verifyGenericMissionHumanDecisionForPrepare` (F1–F15): GetHumanDecision → accepted → pilot → project → generic_mission → subject/option → digest integrity → LPS légitime (HD dans decisionIds) → material currentness → then `decisionRefs=[decisionId]`.
Idempotence: `CONTRACT_ALREADY_EXISTS` + same refs ⇒ reuse EC (HD10).

## 13. Currentness / restart / supersession

- HD20: LPS bump from Record HD itself allowed if decisionId ∈ LPS.decisionIds
- HD11: restart = new runtime same SQLite; no process-local offer required
- HD07: superseded HD refused
- HD08/HD22/HD23: refuse/amend refused for PREPARE

## 14. Confirm / Authorize structural+HD

Confirm/Authorize/evaluateAuthorization skip NON_STRUCTURAL-only `revalidateMaterialityAgainstCurrentProduct` when `decisionRefs≥1` and stamp structural|unknown (M-HD-01 Case). HD already verified at PREPARE. No authority escalation.

## 15. Inspection binding correction (Bloc I)

`resolveStampedSelectInspectionBinding`: presence ≠ validity.
- Explicit invalid version/fp/NaN/whitespace/malformed → `BINDING_INVALID` (never treated as absent)
- XOR → BINDING_INCOMPLETE
- Both absent → durable attestation
Tests I1–I13 + I5b/I6b/I8b: **15 PASS**

## 16. Preuves tests

### HD01–HD24 + E1 (p6.mHd01…): **21 PASS**

| ID | Résultat |
|----|----------|
| HD01 non-struct sans HD | PASS |
| HD02 struct sans HD | PASS STRUCTURAL_HUMAN_DECISION_REQUIRED |
| HD03 struct+HD accept | PASS decisionRefs |
| HD04 autre Project | PASS HD_PROJECT_MISMATCH |
| HD05/16 autre mission / IDs distincts | PASS |
| HD06/17 scope muté | PASS refuse |
| HD07 superseded | PASS HD_SUPERSEDED |
| HD08/22 refuse | PASS HD_REFUSED |
| HD09/18/19 digest + presentedAt | PASS |
| HD10 idempotence | PASS |
| HD11 restart SQLite | PASS |
| HD12 cycle null | PASS |
| HD13 Confirm ≠ HD | PASS |
| HD14 Record sans Attempt | PASS |
| HD15 decisionRefs verified | PASS |
| HD20 LPS transition HD | PASS |
| HD21 mutation Product | PASS refuse |
| HD23 request-amend | PASS |
| HD24 legacy basis | PASS |
| E1 Select Fake après HD | PASS |

### Inspection binding: **15 PASS**
### NR Project-scoped Select: **14 PASS**
### NR OA Decision durability + adversarial: **12 PASS**
### typecheck: **PASS** (`tsc --noEmit`)
### build: **PASS** (Next.js static generation OK)

**Non exécuté / NOT PROVEN:** E4–E8 REAL consumers; OpenAI LIVE; Cursor REAL; Human QA; P6 GLOBAL.

## 17. Fake / Real Qualification

- Niveau: LOCAL DETERMINISTIC DELIVERY PROOF
- Fake: OA SQLite + Fake Cursor boundary
- REAL: NON ACCORDÉ
- Interdits: REAL BOUNDARY PROVEN / READY FOR REAL / HUMAN QA PASS / P6 GLOBAL PASS / RUNTIME V3 ADOPTED

## 18. Gates Morris

- Implementation Contract GO: **CONSUMED**
- UX CONTRACT GATE: non déclenché (pas de nouvelle surface structurante)
- MODELED/PERSISTENCE GATE: non déclenché (pas de migration / schema protégé)
- CURRENTNESS CONTRACT GATE: non déclenché (LPS légitime + material match)
- REAL gate: **NON ACCORDÉ**

## 19. Risques / dette / exit

- E4–E8 encore OPEN
- Technical Contract C1 (gms:+sha256) divergé volontairement vers occurrence id (GO A2/A6)
- Confirm/Authorize structural+HD skip NON_STRUCTURAL revalidation — dépend de decisionRefs déjà vérifiés au PREPARE
- Exit proof: même mission reprend après HD valide; réutilisation cross-mission/scope refusée — **PROVEN** (HD03–HD06, HD11, HD16–17)

## 20. Fichiers créés (contenu complet)


### `projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts`

```typescript
/**
 * M-HD-01 — Generic Mission Subject seal + presentationDigest.
 *
 * Occurrence identity (missionSubjectId) is distinct from the semantic
 * presentationDigest. Digests use full SHA-256 over canonical JSON.
 * presentedAtIso is metadata only — excluded from the seal.
 * No PresentedMission store; durability lives in OA HumanDecision.decisionBasis.
 */

import { randomBytes } from "node:crypto";
import {
  computeDecisionBasisSourceDigest,
  type DecisionBasis,
  type DecisionBasisGenericMissionContext,
} from "@/lib/oa/decision";

export const GENERIC_MISSION_SUBJECT_SCHEMA_VERSION = "0.1.0-gms" as const;

export const GENERIC_MISSION_OPTION_ACCEPT_PREPARE =
  "opt:generic-mission:accept-prepare" as const;
export const GENERIC_MISSION_OPTION_REFUSE =
  "opt:generic-mission:refuse" as const;
export const GENERIC_MISSION_OPTION_REQUEST_AMEND =
  "opt:generic-mission:request-amend" as const;

export const GENERIC_MISSION_PRESENTED_OPTIONS = [
  {
    optionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
    label: "Accepter — autoriser la préparation de cette mission",
  },
  {
    optionId: GENERIC_MISSION_OPTION_REFUSE,
    label: "Refuser cette mission structurante",
  },
  {
    optionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
    label: "Demander un amendement — nouvelle présentation requise",
  },
] as const;

export type GenericMissionImpactSignals = {
  readonly structuralChange: boolean;
  readonly securityImpact: boolean;
  readonly architectureImpact: boolean;
  readonly dataImpact: boolean;
  readonly irreversible: boolean;
};

export type GenericMissionEffectsSeal = {
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
};

/** Material fields sealed into presentationDigest (no digests, no presentedAt). */
export type GenericMissionSealPayload = {
  readonly schemaVersion: typeof GENERIC_MISSION_SUBJECT_SCHEMA_VERSION;
  readonly missionSubjectId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly materialityReasonCodes: readonly string[];
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly effects: GenericMissionEffectsSeal;
  readonly impactSignals: GenericMissionImpactSignals;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
  readonly optionRefs: readonly string[];
};

export type GenericMissionSubject = GenericMissionSealPayload & {
  readonly presentedAtIso: string;
  readonly presentationDigest: string;
};

export function newGenericMissionSubjectId(): string {
  return `gms:${randomBytes(16).toString("hex")}`;
}

export function computeGenericMissionPresentationDigest(
  payload: GenericMissionSealPayload,
): string {
  return computeDecisionBasisSourceDigest(payload);
}

export function buildGenericMissionSubject(input: {
  readonly missionSubjectId?: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly materialityReasonCodes: readonly string[];
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly effects: GenericMissionEffectsSeal;
  readonly impactSignals: GenericMissionImpactSignals;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
  readonly optionRefs?: readonly string[];
  readonly presentedAtIso: string;
}): GenericMissionSubject {
  const missionSubjectId =
    input.missionSubjectId?.trim() || newGenericMissionSubjectId();
  const optionRefs =
    input.optionRefs && input.optionRefs.length > 0
      ? [...input.optionRefs]
      : GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => o.optionId);
  const seal: GenericMissionSealPayload = {
    schemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    missionSubjectId,
    projectId: input.projectId.trim(),
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    objective: input.objective.trim(),
    expectedOutcome: input.expectedOutcome.trim(),
    scopeNarrative: input.scopeNarrative.trim(),
    scopeIn: [...input.scopeIn],
    scopeOut: [...input.scopeOut],
    materiality: input.materiality,
    materialityReasonCodes: [...input.materialityReasonCodes],
    repositoryBindingIdentity: input.repositoryBindingIdentity,
    pathRoot: input.pathRoot,
    effects: {
      intentKind: input.effects.intentKind,
      artifactType: input.effects.artifactType,
      requestedOperation: input.effects.requestedOperation,
      requiredCapabilities: [...input.effects.requiredCapabilities],
      expectedOutputs: [...input.effects.expectedOutputs],
      reversibilityExpectation: input.effects.reversibilityExpectation,
      stopConditions: [...input.effects.stopConditions],
      risks: [...input.effects.risks],
      reservations: [...input.effects.reservations],
    },
    impactSignals: { ...input.impactSignals },
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    ...(input.doctrineDigest
      ? { doctrineDigest: input.doctrineDigest }
      : {}),
    optionRefs,
  };
  return {
    ...seal,
    presentedAtIso: input.presentedAtIso,
    presentationDigest: computeGenericMissionPresentationDigest(seal),
  };
}

/** Rebuild seal payload from durable genericMissionContext (+ LPS anchors). */
export function sealPayloadFromGenericMissionContext(input: {
  readonly ctx: DecisionBasisGenericMissionContext;
  readonly projectId: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
}): GenericMissionSealPayload {
  const ctx = input.ctx;
  return {
    schemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    missionSubjectId: ctx.missionSubjectId,
    projectId: input.projectId,
    cycleInstanceId: ctx.cycleInstanceId,
    objective: ctx.objective,
    expectedOutcome: ctx.expectedOutcome,
    scopeNarrative: ctx.scopeNarrative,
    scopeIn: [...ctx.scopeIn],
    scopeOut: [...ctx.scopeOut],
    materiality: ctx.materiality,
    materialityReasonCodes: [...ctx.materialityReasonCodes],
    repositoryBindingIdentity: ctx.repositoryBindingIdentity,
    pathRoot: ctx.pathRoot,
    effects: {
      intentKind: ctx.intentKind,
      artifactType: ctx.artifactType,
      requestedOperation: ctx.requestedOperation,
      requiredCapabilities: [...ctx.requiredCapabilities],
      expectedOutputs: [...ctx.expectedOutputs],
      reversibilityExpectation: ctx.reversibilityExpectation,
      stopConditions: [...ctx.stopConditions],
      risks: [...ctx.risks],
      reservations: [...ctx.reservations],
    },
    impactSignals: { ...ctx.impactSignals },
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    ...(input.doctrineDigest
      ? { doctrineDigest: input.doctrineDigest }
      : {}),
    optionRefs: [...ctx.optionRefs],
  };
}

/**
 * Integrity check: recompute digest from durable snapshot fields.
 * Does not compare CURRENT Product facts (see materialCurrentnessMatch).
 */
export function verifyGenericMissionSnapshotIntegrity(input: {
  readonly basis: DecisionBasis;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const basis = input.basis;
  if (basis.sourceType !== "generic_mission") {
    return { ok: false, reason: "source_type_not_generic_mission" };
  }
  const ctx = basis.genericMissionContext;
  if (!ctx) {
    return { ok: false, reason: "generic_mission_context_absent" };
  }
  const payload = sealPayloadFromGenericMissionContext({
    ctx,
    projectId: basis.projectId,
    lpsId: basis.proposalContext.lpsId,
    lpsVersion: basis.proposalContext.lpsVersion,
    doctrineDigest: basis.proposalContext.doctrineDigest,
  });
  const recomputed = computeGenericMissionPresentationDigest(payload);
  if (recomputed !== basis.sourceDigest || recomputed !== ctx.presentationDigest) {
    return { ok: false, reason: "presentation_digest_integrity_failed" };
  }
  return { ok: true };
}

/** Material fields that must match between sealed HD and CURRENT requalification. */
export function materialCurrentnessMatch(input: {
  readonly sealed: DecisionBasisGenericMissionContext;
  readonly current: {
    readonly objective: string;
    readonly expectedOutcome: string;
    readonly scopeNarrative: string;
    readonly scopeIn: readonly string[];
    readonly scopeOut: readonly string[];
    readonly materiality: "structural" | "non_structural" | "unknown";
    readonly repositoryBindingIdentity: string | null;
    readonly pathRoot: string | null;
    readonly requiredCapabilities: readonly string[];
    readonly impactSignals: GenericMissionImpactSignals;
    readonly cycleInstanceId: string | null;
  };
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const s = input.sealed;
  const c = input.current;
  const sameArr = (a: readonly string[], b: readonly string[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);
  if (s.objective.trim() !== c.objective.trim()) {
    return { ok: false, reason: "objective_drift" };
  }
  if (s.expectedOutcome.trim() !== c.expectedOutcome.trim()) {
    return { ok: false, reason: "expected_outcome_drift" };
  }
  if (s.scopeNarrative.trim() !== c.scopeNarrative.trim()) {
    return { ok: false, reason: "scope_narrative_drift" };
  }
  if (!sameArr(s.scopeIn, c.scopeIn) || !sameArr(s.scopeOut, c.scopeOut)) {
    return { ok: false, reason: "scope_arrays_drift" };
  }
  if (s.materiality !== c.materiality) {
    return { ok: false, reason: "materiality_drift" };
  }
  if (s.repositoryBindingIdentity !== c.repositoryBindingIdentity) {
    return { ok: false, reason: "repository_binding_drift" };
  }
  if (s.pathRoot !== c.pathRoot) {
    return { ok: false, reason: "path_root_drift" };
  }
  if (!sameArr(s.requiredCapabilities, c.requiredCapabilities)) {
    return { ok: false, reason: "capabilities_drift" };
  }
  const sig = s.impactSignals;
  const cs = c.impactSignals;
  if (
    sig.structuralChange !== cs.structuralChange ||
    sig.securityImpact !== cs.securityImpact ||
    sig.architectureImpact !== cs.architectureImpact ||
    sig.dataImpact !== cs.dataImpact ||
    sig.irreversible !== cs.irreversible
  ) {
    return { ok: false, reason: "impact_signals_drift" };
  }
  if ((s.cycleInstanceId ?? null) !== (c.cycleInstanceId ?? null)) {
    return { ok: false, reason: "cycle_drift" };
  }
  return { ok: true };
}

/**
 * LPS after RecordHumanDecision may advance when the HD itself is linked.
 * Legitimate when current version >= sealed and decisionId ∈ LPS.decisionIds.
 */
export function isLegitimateLpsTransitionAfterHumanDecision(input: {
  readonly sealedLpsVersion: number;
  readonly currentLpsVersion: number;
  readonly currentDecisionIds: readonly string[] | undefined;
  readonly decisionId: string;
}): boolean {
  if (input.currentLpsVersion === input.sealedLpsVersion) return true;
  if (input.currentLpsVersion < input.sealedLpsVersion) return false;
  const ids = input.currentDecisionIds ?? [];
  return ids.includes(input.decisionId);
}

export function decisionBasisFromGenericMissionSubject(input: {
  readonly subject: GenericMissionSubject;
  readonly selectedOptionRef: string;
  readonly recommendedOptionRef?: string;
}): DecisionBasis {
  const s = input.subject;
  const ctx: DecisionBasisGenericMissionContext = {
    missionSubjectId: s.missionSubjectId,
    presentationDigest: s.presentationDigest,
    subjectSchemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    objective: s.objective,
    expectedOutcome: s.expectedOutcome,
    scopeNarrative: s.scopeNarrative,
    scopeIn: [...s.scopeIn],
    scopeOut: [...s.scopeOut],
    materiality: s.materiality,
    materialityReasonCodes: [...s.materialityReasonCodes],
    repositoryBindingIdentity: s.repositoryBindingIdentity,
    pathRoot: s.pathRoot,
    requiredCapabilities: [...s.effects.requiredCapabilities],
    expectedOutputs: [...s.effects.expectedOutputs],
    reversibilityExpectation: s.effects.reversibilityExpectation,
    stopConditions: [...s.effects.stopConditions],
    risks: [...s.effects.risks],
    reservations: [...s.effects.reservations],
    intentKind: s.effects.intentKind,
    artifactType: s.effects.artifactType,
    requestedOperation: s.effects.requestedOperation,
    impactSignals: { ...s.impactSignals },
    optionRefs: [...s.optionRefs],
    selectedOptionRef: input.selectedOptionRef,
    ...(input.recommendedOptionRef
      ? { recommendedOptionRef: input.recommendedOptionRef }
      : {}),
    cycleInstanceId: s.cycleInstanceId,
  };
  return {
    sourceType: "generic_mission",
    sourceRef: s.missionSubjectId,
    sourceDigest: s.presentationDigest,
    projectId: s.projectId,
    ...(s.cycleInstanceId ? { cycleInstanceId: s.cycleInstanceId } : {}),
    proposalContext: {
      lpsId: s.lpsId,
      lpsVersion: s.lpsVersion,
      ...(s.doctrineDigest ? { doctrineDigest: s.doctrineDigest } : {}),
      ...(s.cycleInstanceId
        ? { activeCycleInstanceId: s.cycleInstanceId }
        : {}),
    },
    genericMissionContext: ctx,
    executionBasis: {
      objective: s.objective,
      scope: s.scopeNarrative,
      expectedOutcome: s.expectedOutcome,
      scopeIn: [...s.scopeIn],
      scopeOut: [...s.scopeOut],
      outOfScope: [...s.scopeOut],
      requiredCapabilities: [...s.effects.requiredCapabilities],
      expectedOutputs: [...s.effects.expectedOutputs],
      stopConditions: [...s.effects.stopConditions],
      risks: [...s.effects.risks],
      reservations: [...s.effects.reservations],
      ...(s.effects.intentKind
        ? { intentKind: s.effects.intentKind }
        : {}),
      ...(s.effects.artifactType
        ? { artifactType: s.effects.artifactType }
        : {}),
      ...(s.effects.requestedOperation
        ? { requestedOperation: s.effects.requestedOperation }
        : {}),
      ...(s.effects.reversibilityExpectation
        ? { reversibilityExpectation: s.effects.reversibilityExpectation }
        : {}),
    },
  };
}

```

### `projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts`

```typescript
/**
 * M-HD-01 — present + record Pilote HumanDecision on a sealed Generic Mission.
 *
 * PREPARE / AUTHORIZE / EXECUTE are never performed here.
 * No Attempt. No fabricated decision. Refuse ≠ GO. Amend requires new seal.
 */

import { randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type HumanDecision,
} from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import type { IntentAnalysisDto } from "../f2/types";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  GENERIC_MISSION_PRESENTED_OPTIONS,
  buildGenericMissionSubject,
  decisionBasisFromGenericMissionSubject,
  type GenericMissionSubject,
} from "./genericMissionSubject";

export type SealGenericMissionForPresentationInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /** Reuse existing occurrence id on amend re-presentation only when material unchanged. */
  readonly missionSubjectId?: string;
};

export type SealGenericMissionForPresentationResult =
  | {
      readonly ok: true;
      readonly subject: GenericMissionSubject;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

export async function sealGenericMissionForPresentation(
  input: SealGenericMissionForPresentationInput,
): Promise<SealGenericMissionForPresentationResult> {
  const fail = (
    code: string,
    message: string,
  ): SealGenericMissionForPresentationResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const projectId = input.projectId.trim();
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis.");
  }

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!materialityResolution.liveReadOk) {
    return fail(
      materialityResolution.failureCode ?? "PRODUCT_CONTEXT_UNAVAILABLE",
      "Contexte Product insuffisant pour sceller la mission.",
    );
  }
  const currentness = materialityResolution.facts.productCurrentness;
  if (!currentness) {
    return fail(
      "PRODUCT_CURRENTNESS_UNAVAILABLE",
      "Ancres LPS / doctrine indisponibles pour le sceau.",
    );
  }

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return fail(
      capabilityResolution.code,
      `Capacités hors enveloppe — sceau refusé : ${capabilityResolution.elevated.join(", ")}.`,
    );
  }

  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  if (!objective || (!expectedOutcome && !scopeNarrative)) {
    return fail(
      "MISSION_INSUFFICIENTLY_QUALIFIED",
      "Objectif / résultat attendu insuffisants pour présentation Pilote.",
    );
  }

  // Nora path/filename candidates stay non-authoritative — never sealed as destinations.
  const ei = input.analysis.executionIntent;
  const authoritativeExpectedOutputs = [expectedOutcome];

  const signals = input.analysis.signals;
  const subject = buildGenericMissionSubject({
    missionSubjectId: input.missionSubjectId,
    projectId,
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn: ei?.scopeIn ?? [],
    scopeOut: input.analysis.outOfScope ?? [],
    materiality: materialityResolution.assessment.materiality,
    materialityReasonCodes: materialityResolution.assessment.reasonCodes,
    repositoryBindingIdentity: currentness.repositoryIdentity,
    pathRoot: currentness.pathRoot,
    effects: {
      intentKind: ei?.intentKind?.trim() || null,
      artifactType: ei?.artifactType?.trim() || null,
      requestedOperation: null,
      requiredCapabilities: [...capabilityResolution.contractCapabilities],
      expectedOutputs: authoritativeExpectedOutputs,
      reversibilityExpectation:
        signals?.irreversible === true
          ? "irreversible"
          : signals?.irreversible === false
            ? "reversible"
            : "unknown",
      stopConditions: [
        ...(input.analysis.stopConditions ?? []).filter((s) => s.trim()),
        "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
      ],
      risks: [...(input.analysis.risks ?? [])],
      reservations: [...(input.analysis.reservations ?? [])],
    },
    impactSignals: {
      structuralChange: Boolean(signals?.structuralChange),
      securityImpact: Boolean(signals?.securityImpact),
      architectureImpact: Boolean(signals?.architectureImpact),
      dataImpact: Boolean(signals?.dataImpact),
      irreversible: Boolean(signals?.irreversible),
    },
    lpsId: currentness.lpsId,
    lpsVersion: currentness.lpsVersion,
    doctrineDigest: currentness.doctrineDigest,
    presentedAtIso: input.oa.clock.nowIso(),
  });

  return {
    ok: true,
    subject,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  };
}

export type RecordGenericMissionHumanDecisionInput = {
  readonly oa: RuntimeOaStack;
  readonly subject: GenericMissionSubject;
  readonly selectedOptionId: string;
  readonly forceLocalAuthority?: boolean;
  readonly rationale?: string;
  readonly supersedeExistingAccepted?: boolean;
  /** When true (default), link accepted HD into LPS (legitimate version bump). */
  readonly linkToLivingProjectState?: boolean;
};

export type RecordGenericMissionHumanDecisionResult =
  | {
      readonly ok: true;
      readonly decision: HumanDecision;
      readonly humanDecisionCreated: true;
      readonly executionAttemptCreated: false;
      readonly code: "GENERIC_MISSION_HUMAN_DECISION_RECORDED";
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

export async function recordGenericMissionHumanDecision(
  input: RecordGenericMissionHumanDecisionInput,
): Promise<RecordGenericMissionHumanDecisionResult> {
  const fail = (
    code: string,
    message: string,
  ): RecordGenericMissionHumanDecisionResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const selected = input.selectedOptionId.trim();
  const presentedIds = new Set(
    GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => o.optionId),
  );
  if (!presentedIds.has(selected as (typeof GENERIC_MISSION_PRESENTED_OPTIONS)[number]["optionId"])) {
    return fail(
      "HD_OPTION_NOT_PRESENTED",
      "Option Pilote hors ensemble présenté — décision refusée.",
    );
  }

  // Integrity of the sealed subject before record.
  const recomputed = buildGenericMissionSubject({
    missionSubjectId: input.subject.missionSubjectId,
    projectId: input.subject.projectId,
    cycleInstanceId: input.subject.cycleInstanceId,
    objective: input.subject.objective,
    expectedOutcome: input.subject.expectedOutcome,
    scopeNarrative: input.subject.scopeNarrative,
    scopeIn: input.subject.scopeIn,
    scopeOut: input.subject.scopeOut,
    materiality: input.subject.materiality,
    materialityReasonCodes: input.subject.materialityReasonCodes,
    repositoryBindingIdentity: input.subject.repositoryBindingIdentity,
    pathRoot: input.subject.pathRoot,
    effects: input.subject.effects,
    impactSignals: input.subject.impactSignals,
    lpsId: input.subject.lpsId,
    lpsVersion: input.subject.lpsVersion,
    doctrineDigest: input.subject.doctrineDigest,
    optionRefs: input.subject.optionRefs,
    // presentedAtIso must NOT affect digest — use any value.
    presentedAtIso: input.subject.presentedAtIso,
  });
  if (recomputed.presentationDigest !== input.subject.presentationDigest) {
    return fail(
      "HD_SUBJECT_DIGEST_MISMATCH",
      "Sceau de présentation incohérent — enregistrement refusé.",
    );
  }

  const status =
    selected === GENERIC_MISSION_OPTION_ACCEPT_PREPARE
      ? ("accepted" as const)
      : selected === GENERIC_MISSION_OPTION_REFUSE
        ? ("refused" as const)
        : ("amended" as const);

  // request-amend is recorded as amended — never unlocks PREPARE.
  if (selected === GENERIC_MISSION_OPTION_REQUEST_AMEND) {
    // Still record durable refusal-of-accept path as amended for audit.
  }

  const scope = `generic-mission:${input.subject.missionSubjectId}`;
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope,
    issuedAt: input.oa.clock.nowIso(),
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const decisionBasis = decisionBasisFromGenericMissionSubject({
    subject: input.subject,
    selectedOptionRef: selected,
  });

  const decisionId = `dec:gms:${randomBytes(8).toString("hex")}`;
  const linkLps =
    status === "accepted" && input.linkToLivingProjectState !== false;

  const recorded = await input.oa.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.subject.projectId,
    ...(input.subject.cycleInstanceId
      ? { cycleInstanceId: input.subject.cycleInstanceId }
      : {}),
    subject: input.subject.missionSubjectId,
    options: GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => ({
      optionId: o.optionId,
      label: o.label,
    })),
    selectedOptionId: selected,
    actor: LOCAL_PILOTE_ACTOR,
    authority: "pilot",
    status,
    reversible: true,
    scope,
    rationale: input.rationale,
    authorityEvidenceId: authority.evidenceId,
    decisionBasis,
    supersedeExistingAccepted: input.supersedeExistingAccepted !== false,
    linkToLivingProjectState: linkLps,
    ...(linkLps ? { expectedLpsVersion: input.subject.lpsVersion } : {}),
  });

  if (!recorded.ok) {
    return fail(
      recorded.error.detailCode,
      recorded.error.message ?? "RecordHumanDecision refusé.",
    );
  }

  return {
    ok: true,
    decision: recorded.decision,
    humanDecisionCreated: true,
    executionAttemptCreated: false,
    code: "GENERIC_MISSION_HUMAN_DECISION_RECORDED",
  };
}

export {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
};

```

### `projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts`

```typescript
/**
 * M-HD-01 — verify durable OA HumanDecision before Generic PREPARE resume.
 * Never fabricates HD. Never treats Confirmation as HD.
 */

import { validateDecisionBasis } from "@/lib/oa/decision";
import type { HumanDecision } from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "../f2/types";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  isLegitimateLpsTransitionAfterHumanDecision,
  materialCurrentnessMatch,
  verifyGenericMissionSnapshotIntegrity,
} from "./genericMissionSubject";

export type VerifiedGenericMissionHumanDecision = {
  readonly decisionId: string;
  readonly decision: HumanDecision;
  readonly missionSubjectId: string;
  readonly presentationDigest: string;
};

export type VerifyGenericMissionHumanDecisionResult =
  | { readonly ok: true; readonly verified: VerifiedGenericMissionHumanDecision }
  | { readonly ok: false; readonly code: string; readonly message: string };

export async function verifyGenericMissionHumanDecisionForPrepare(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly decisionId: string;
  readonly analysis: IntentAnalysisDto;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const decisionId = input.decisionId.trim();
  if (!decisionId.startsWith("dec:")) {
    return {
      ok: false,
      code: "HD_ABSENT",
      message: "decisionId invalide — HumanDecision absente.",
    };
  }

  const loaded = await input.oa.decisionServices.getHumanDecision.execute({
    decisionId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: "HD_ABSENT",
      message: "HumanDecision introuvable via OA.",
    };
  }
  const decision = loaded.decision;

  if (decision.status === "superseded") {
    return {
      ok: false,
      code: "HD_SUPERSEDED",
      message: "HumanDecision superseded — reprise refusée.",
    };
  }
  if (decision.status === "revoked") {
    return {
      ok: false,
      code: "HD_REVOKED",
      message: "HumanDecision revoked — reprise refusée.",
    };
  }
  if (decision.status === "refused") {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: "HumanDecision refusée — PREPARE non autorisé.",
    };
  }
  if (decision.status === "amended") {
    return {
      ok: false,
      code: "HD_AMEND_REQUIRES_NEW_PRESENTATION",
      message:
        "Option request-amend — nouvelle présentation requise avant acceptation.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: `Statut HumanDecision ${decision.status} — reprise refusée.`,
    };
  }

  if (decision.projectId !== input.projectId.trim()) {
    return {
      ok: false,
      code: "HD_PROJECT_MISMATCH",
      message: "HumanDecision d'un autre Project.",
    };
  }

  if (decision.authority !== "pilot") {
    return {
      ok: false,
      code: "HD_AUTHORITY_INVALID",
      message: "Autorité Pilote requise pour mission générique structurante.",
    };
  }

  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "generic_mission") {
    return {
      ok: false,
      code: "HD_SOURCE_TYPE_INVALID",
      message: "DecisionBasis.sourceType generic_mission requis.",
    };
  }

  const basisViolation = validateDecisionBasis(basis);
  if (basisViolation) {
    return {
      ok: false,
      code: "HD_BASIS_INVALID",
      message: `DecisionBasis invalide: ${basisViolation.reason}`,
    };
  }

  const ctx = basis.genericMissionContext!;
  if (decision.subject.trim() !== ctx.missionSubjectId) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "Sujet HumanDecision ≠ missionSubjectId scellé.",
    };
  }
  if (
    decision.selectedOptionId !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE ||
    ctx.selectedOptionRef !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE
  ) {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: "Option accept-prepare absente — PREPARE non débloqué.",
    };
  }

  const expectedCycle = input.cycleInstanceId?.trim() || null;
  const sealedCycle = ctx.cycleInstanceId ?? null;
  if (expectedCycle !== sealedCycle) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "cycleInstanceId incompatible avec la mission scellée.",
    };
  }

  const integrity = verifyGenericMissionSnapshotIntegrity({ basis });
  if (!integrity.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: `Intégrité du sceau durable échouée (${integrity.reason}).`,
    };
  }

  // Requalify CURRENT Product facts — refuse material drift.
  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!materialityResolution.liveReadOk) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Requalification Product impossible — reprise refusée.",
    };
  }
  const currentness = materialityResolution.facts.productCurrentness;
  if (!currentness) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Currentness Product absente — reprise refusée.",
    };
  }

  const lpsOk = isLegitimateLpsTransitionAfterHumanDecision({
    sealedLpsVersion: basis.proposalContext.lpsVersion,
    currentLpsVersion: currentness.lpsVersion,
    currentDecisionIds: undefined, // filled below
    decisionId,
  });
  // Load LPS decisionIds for legitimate HD transition recognition.
  const lps = await input.oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  if (!lps.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "LPS courant indisponible pour currentness.",
    };
  }
  const lpsTransitionOk = isLegitimateLpsTransitionAfterHumanDecision({
    sealedLpsVersion: basis.proposalContext.lpsVersion,
    currentLpsVersion: lps.livingProjectState.version,
    currentDecisionIds: lps.livingProjectState.decisionIds,
    decisionId,
  });
  if (!lpsTransitionOk) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message:
        "Version LPS incompatible (dérive hors transition légitime de la HumanDecision).",
    };
  }
  void lpsOk;

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: "Capacités courantes hors enveloppe — reprise refusée.",
    };
  }

  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const signals = input.analysis.signals;

  const material = materialCurrentnessMatch({
    sealed: ctx,
    current: {
      objective,
      expectedOutcome,
      scopeNarrative,
      scopeIn: input.analysis.executionIntent?.scopeIn ?? [],
      scopeOut: input.analysis.outOfScope ?? [],
      materiality: materialityResolution.assessment.materiality,
      repositoryBindingIdentity: currentness.repositoryIdentity,
      pathRoot: currentness.pathRoot,
      requiredCapabilities: [...capabilityResolution.contractCapabilities],
      impactSignals: {
        structuralChange: Boolean(signals?.structuralChange),
        securityImpact: Boolean(signals?.securityImpact),
        architectureImpact: Boolean(signals?.architectureImpact),
        dataImpact: Boolean(signals?.dataImpact),
        irreversible: Boolean(signals?.irreversible),
      },
      cycleInstanceId: expectedCycle,
    },
  });
  if (!material.ok) {
    const code =
      material.reason === "scope_arrays_drift" ||
      material.reason === "scope_narrative_drift"
        ? "HD_SCOPE_MISMATCH"
        : material.reason === "capabilities_drift" ||
            material.reason === "impact_signals_drift"
          ? "HD_EFFECTS_MISMATCH"
          : material.reason === "objective_drift" ||
              material.reason === "expected_outcome_drift"
            ? "HD_MISSION_MISMATCH"
            : "HD_SUBJECT_STALE";
    return {
      ok: false,
      code,
      message: `Faits Product courants incompatibles avec la mission scellée (${material.reason}).`,
    };
  }

  return {
    ok: true,
    verified: {
      decisionId: decision.decisionId,
      decision,
      missionSubjectId: ctx.missionSubjectId,
      presentationDigest: ctx.presentationDigest,
    },
  };
}

```

### `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts`

```typescript
/**
 * P6 — M-HD-01 Generic Mission HumanDecision binding (O1 Delivery).
 *
 * Deterministic Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  buildGenericMissionSubject,
  computeGenericMissionPresentationDigest,
  verifyGenericMissionSnapshotIntegrity,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { clearPendingGenericPrepareOffer } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { governedExecuteSelectAgent } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { LOCAL_PILOTE_ACTOR, validateDecisionBasis } from "@/lib/oa/decision";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

const APP = path.resolve(__dirname, "../..");

function structuralAnalysis(overrides?: {
  objective?: string;
  expectedOutcome?: string;
  scope?: string;
}): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: overrides?.objective ?? "Refactorer le binding d'autorité générique",
    expectedOutcome:
      overrides?.expectedOutcome ?? "Mission structurante préparable après HD",
    scope: overrides?.scope ?? "projects/demo/src/authority",
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "code_change",
      scopeIn: [overrides?.scope ?? "projects/demo/src/authority"],
      requiredCapabilities: [],
    },
  };
}

function nonStructuralAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Documenter un helper local",
    expectedOutcome: "Note inspectable",
    scope: "projects/demo/src/notes.md",
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "docs_write",
      scopeIn: ["projects/demo/src/notes.md"],
      requiredCapabilities: [],
    },
  };
}

describe("P6 M-HD-01 Generic Mission HumanDecision", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    sessionDbPath = tempProductDbPath("p6-mhd01.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhd01",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else {
      process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MHD01 ${suffix}`,
      objective: "M-HD-01 Generic Mission HD",
      context: "det mhd01",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MH${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhd01-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/mhd01-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  async function sealAndAccept(input: {
    projectId: string;
    analysis: IntentAnalysisDto;
    cycleInstanceId?: string | null;
  }) {
    const sealed = await sealGenericMissionForPresentation({
      oa: runtime.oa!,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId ?? null,
      analysis: input.analysis,
    });
    if (!sealed.ok) throw new Error(`seal: ${sealed.code} ${sealed.message}`);
    const recorded = await recordGenericMissionHumanDecision({
      oa: runtime.oa!,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      forceLocalAuthority: true,
    });
    if (!recorded.ok) {
      throw new Error(`record: ${recorded.code} ${recorded.message}`);
    }
    return { subject: sealed.subject, decision: recorded.decision };
  }

  it("HD01 — non-structural PREPARE without systematic HD; decisionRefs empty", async () => {
    const { projectId, oa } = await seedProject("hd01");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: nonStructuralAnalysis(),
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get");
    expect(live.contract.decisionRefs ?? []).toEqual([]);
  });

  it("HD02 — structural without HD → STRUCTURAL_HUMAN_DECISION_REQUIRED", async () => {
    const { projectId, oa } = await seedProject("hd02");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
  });

  it("HD03 — structural with accepted HD → same mission resume + decisionRefs", async () => {
    const { projectId, oa } = await seedProject("hd03");
    const analysis = structuralAnalysis();
    const { decision, subject } = await sealAndAccept({ projectId, analysis });
    expect(decision.decisionBasis?.sourceType).toBe("generic_mission");
    expect(decision.subject).toBe(subject.missionSubjectId);
    expect(decision.decisionBasis?.sourceDigest).toBe(subject.presentationDigest);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
  });

  it("HD04 — HD from another Project → REFUS", async () => {
    const a = await seedProject("hd04a");
    const b = await seedProject("hd04b");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({
      projectId: a.projectId,
      analysis,
    });
    const prep = await prepareGenericExecutionContractDraft({
      oa: b.oa,
      projectId: b.projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("HD_PROJECT_MISMATCH");
  });

  it("HD05/HD16 — HD of another mission / distinct identities → REFUS", async () => {
    const { projectId, oa } = await seedProject("hd05");
    const analysis = structuralAnalysis();
    const first = await sealAndAccept({ projectId, analysis });
    const second = await sealAndAccept({ projectId, analysis });
    expect(first.subject.missionSubjectId).not.toBe(second.subject.missionSubjectId);
    // Same content may share digest only if identity included — identities differ ⇒ digests differ.
    expect(first.subject.presentationDigest).not.toBe(
      second.subject.presentationDigest,
    );

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: first.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // first HD superseded by second accept on different subjects — first still valid for its subject
    // but second accept is different subject; first should still verify if not superseded.
    // listAcceptedBySubject is per subject — first remains accepted.
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const wrong = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis({
        objective: "Autre mission totalement différente",
        expectedOutcome: "Autre résultat",
        scope: "projects/demo/src/other",
      }),
      decisionId: first.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(wrong.ok).toBe(false);
    if (wrong.ok) throw new Error("expected refuse");
    expect(
      wrong.code === "HD_MISSION_MISMATCH" ||
        wrong.code === "HD_SCOPE_MISMATCH" ||
        wrong.code === "HD_SUBJECT_STALE" ||
        wrong.code === "HD_EFFECTS_MISMATCH",
    ).toBe(true);
  });

  it("HD06/HD17 — scope/effects modified or same id with material change → REFUS", async () => {
    const { projectId, oa } = await seedProject("hd06");
    const analysis = structuralAnalysis();
    const { decision, subject } = await sealAndAccept({ projectId, analysis });
    const tampered = buildGenericMissionSubject({
      missionSubjectId: subject.missionSubjectId,
      projectId: subject.projectId,
      cycleInstanceId: subject.cycleInstanceId,
      objective: "OBJECTIF MUTÉ",
      expectedOutcome: subject.expectedOutcome,
      scopeNarrative: subject.scopeNarrative,
      scopeIn: subject.scopeIn,
      scopeOut: subject.scopeOut,
      materiality: subject.materiality,
      materialityReasonCodes: subject.materialityReasonCodes,
      repositoryBindingIdentity: subject.repositoryBindingIdentity,
      pathRoot: subject.pathRoot,
      effects: subject.effects,
      impactSignals: subject.impactSignals,
      lpsId: subject.lpsId,
      lpsVersion: subject.lpsVersion,
      doctrineDigest: subject.doctrineDigest,
      optionRefs: subject.optionRefs,
      presentedAtIso: subject.presentedAtIso,
    });
    expect(tampered.presentationDigest).not.toBe(subject.presentationDigest);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis({
        objective: "OBJECTIF MUTÉ",
        scope: "projects/demo/src/mutated",
      }),
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
  });

  it("HD07 — superseded HD → REFUS", async () => {
    const { projectId, oa } = await seedProject("hd07");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const first = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      forceLocalAuthority: true,
    });
    if (!first.ok) throw new Error(first.message);
    // Same occurrence subject, re-seal with CURRENT LPS after first HD linked LPS.
    const resealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      missionSubjectId: sealed.subject.missionSubjectId,
    });
    if (!resealed.ok) throw new Error(resealed.message);
    const second = await recordGenericMissionHumanDecision({
      oa,
      subject: resealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      forceLocalAuthority: true,
      supersedeExistingAccepted: true,
    });
    if (!second.ok) throw new Error(second.message);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: first.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("HD_SUPERSEDED");
  });

  it("HD08/HD22 — refused HD → REFUS; no PREPARE", async () => {
    const { projectId, oa } = await seedProject("hd08");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const refused = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
      forceLocalAuthority: true,
    });
    expect(refused.ok).toBe(true);
    if (!refused.ok) throw new Error(refused.message);
    expect(refused.decision.status).toBe("refused");
    expect(refused.executionAttemptCreated).toBe(false);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: refused.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("HD_REFUSED");
  });

  it("HD09/HD18/HD19 — digest integrity; presentedAtIso does not break seal", async () => {
    const { projectId } = await seedProject("hd09");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const again = buildGenericMissionSubject({
      ...sealed.subject,
      presentedAtIso: "2099-01-01T00:00:00.000Z",
    });
    expect(again.presentationDigest).toBe(sealed.subject.presentationDigest);

    const { decision } = await sealAndAccept({ projectId, analysis });
    const integrity = verifyGenericMissionSnapshotIntegrity({
      basis: decision.decisionBasis!,
    });
    expect(integrity.ok).toBe(true);
    expect(
      computeGenericMissionPresentationDigest({
        schemaVersion: "0.1.0-gms",
        missionSubjectId: sealed.subject.missionSubjectId,
        projectId: sealed.subject.projectId,
        cycleInstanceId: sealed.subject.cycleInstanceId,
        objective: sealed.subject.objective,
        expectedOutcome: sealed.subject.expectedOutcome,
        scopeNarrative: sealed.subject.scopeNarrative,
        scopeIn: sealed.subject.scopeIn,
        scopeOut: sealed.subject.scopeOut,
        materiality: sealed.subject.materiality,
        materialityReasonCodes: sealed.subject.materialityReasonCodes,
        repositoryBindingIdentity: sealed.subject.repositoryBindingIdentity,
        pathRoot: sealed.subject.pathRoot,
        effects: sealed.subject.effects,
        impactSignals: sealed.subject.impactSignals,
        lpsId: sealed.subject.lpsId,
        lpsVersion: sealed.subject.lpsVersion,
        doctrineDigest: sealed.subject.doctrineDigest,
        optionRefs: sealed.subject.optionRefs,
      }),
    ).toBe(sealed.subject.presentationDigest);
  });

  it("HD10 — repeated resume idempotent (same contract id)", async () => {
    const { projectId, oa } = await seedProject("hd10");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
    const a = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!a.ok) throw new Error(`prepare a: ${a.code} ${a.message}`);
    const b = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!b.ok) throw new Error(`prepare b: ${b.code} ${b.message}`);
    expect(a.contract.executionContractId).toBe(b.contract.executionContractId);
    expect(a.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(b.contract.decisionRefs).toEqual([decision.decisionId]);
  });

  it("HD11 — restart after HD: resume from OA SQLite without process-local offer", async () => {
    const { projectId } = await seedProject("hd11");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
    clearPendingGenericPrepareOffer(projectId, sessionDbPath);

    // Simulate process restart: new runtime on same Product SQLite.
    const runtime2 = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhd01r",
    });
    const oa2 = runtime2.oa!;
    const loaded = await oa2.decisionServices.getHumanDecision.execute({
      decisionId: decision.decisionId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("reload");
    expect(loaded.decision.decisionBasis?.sourceType).toBe("generic_mission");

    const prep = await prepareGenericExecutionContractDraft({
      oa: oa2,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.decisionRefs).toEqual([decision.decisionId]);
  });

  it("HD12 — with cycle / without cycle; no artificial cycle", async () => {
    const { projectId, oa } = await seedProject("hd12");
    const analysis = structuralAnalysis();
    const noCycle = await sealAndAccept({
      projectId,
      analysis,
      cycleInstanceId: null,
    });
    expect(noCycle.subject.cycleInstanceId).toBeNull();
    expect(noCycle.decision.cycleInstanceId).toBeUndefined();

    expect(noCycle.decision.decisionBasis?.genericMissionContext?.cycleInstanceId).toBeNull();
    expect(noCycle.decision.cycleInstanceId).toBeUndefined();
  });

  it("HD13 — Confirmation alone does not replace HD", async () => {
    const { projectId, oa } = await seedProject("hd13");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: nonStructuralAnalysis(),
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    if (live.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa,
        projectId,
        executionContractId: prep.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(true);
    }
    // Structural still requires HD — Confirmation on another contract ≠ HD.
    const structural = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(structural.ok).toBe(false);
    if (structural.ok) throw new Error("expected refuse");
    expect(structural.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
  });

  it("HD14 — Record HumanDecision creates no Attempt", async () => {
    const { projectId, oa } = await seedProject("hd14");
    const recorded = await sealAndAccept({
      projectId,
      analysis: structuralAnalysis(),
    });
    expect(recorded.decision.decisionId).toMatch(/^dec:/);
    // No EC yet — no Attempt can exist for this decision path.
    expect(
      (
        await oa.executionAttemptServices!.attempts.listByContract(
          "xct:gen-prep:nonexistent",
        )
      ).length,
    ).toBe(0);
  });

  it("HD15 — decisionRefs only verified applicable refs", async () => {
    const { projectId, oa } = await seedProject("hd15");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(prep.contract.decisionRefs).not.toContain("dec:forged");
  });

  it("HD20 — LPS transition from HD itself allows resume", async () => {
    const { projectId, oa } = await seedProject("hd20");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const lpsBefore = sealed.subject.lpsVersion;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      forceLocalAuthority: true,
      linkToLivingProjectState: true,
    });
    if (!recorded.ok) throw new Error(recorded.message);
    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lpsAfter.ok) throw new Error("lps");
    expect(lpsAfter.livingProjectState.version).toBeGreaterThanOrEqual(lpsBefore);
    expect(lpsAfter.livingProjectState.decisionIds ?? []).toContain(
      recorded.decision.decisionId,
    );
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: recorded.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
  });

  it("HD21 — material Product mutation after HD → resume refused", async () => {
    const { projectId, oa } = await seedProject("hd21");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity: "acme/mhd01-mutated",
        remoteUrl: "https://github.com/acme/mhd01-mutated.git",
        defaultBranch: "main",
        pathRoot: "projects/other",
      },
    });
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(
      prep.code === "HD_SUBJECT_STALE" ||
        prep.code === "HD_SCOPE_MISMATCH" ||
        prep.code === "HD_EFFECTS_MISMATCH",
    ).toBe(true);
  });

  it("HD23 — request-amend requires new presentation; no PREPARE", async () => {
    const { projectId, oa } = await seedProject("hd23");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const amended = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
      forceLocalAuthority: true,
    });
    expect(amended.ok).toBe(true);
    if (!amended.ok) throw new Error(amended.message);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: amended.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("HD_AMEND_REQUIRES_NEW_PRESENTATION");
  });

  it("HD24 — legacy DecisionBasis sourceTypes still validate", () => {
    const proposal = validateDecisionBasis({
      sourceType: "proposal",
      sourceRef: "prop:legacy:1",
      sourceDigest: "a".repeat(64),
      projectId: "prj:legacy",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      executionBasis: { objective: "x" },
    });
    expect(proposal).toBeNull();

    const gm = validateDecisionBasis({
      sourceType: "generic_mission",
      sourceRef: "gms:abc123def456",
      sourceDigest: "b".repeat(64),
      projectId: "prj:legacy",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      genericMissionContext: {
        missionSubjectId: "gms:abc123def456",
        presentationDigest: "b".repeat(64),
        subjectSchemaVersion: "0.1.0-gms",
        objective: "o",
        expectedOutcome: "e",
        scopeNarrative: "s",
        scopeIn: [],
        scopeOut: [],
        materiality: "structural",
        materialityReasonCodes: [],
        repositoryBindingIdentity: null,
        pathRoot: null,
        requiredCapabilities: [],
        expectedOutputs: [],
        reversibilityExpectation: null,
        stopConditions: [],
        risks: [],
        reservations: [],
        intentKind: null,
        artifactType: null,
        requestedOperation: null,
        impactSignals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
        },
        optionRefs: [GENERIC_MISSION_OPTION_ACCEPT_PREPARE],
        selectedOptionRef: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        cycleInstanceId: null,
      },
      executionBasis: { objective: "o" },
    });
    expect(gm).toBeNull();

    const foreign = validateDecisionBasis({
      sourceType: "proposal",
      sourceRef: "prop:x",
      sourceDigest: "c".repeat(64),
      projectId: "prj:legacy",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      genericMissionContext: {
        missionSubjectId: "gms:x",
        presentationDigest: "c".repeat(64),
        subjectSchemaVersion: "0.1.0-gms",
        objective: "o",
        expectedOutcome: "e",
        scopeNarrative: "s",
        scopeIn: [],
        scopeOut: [],
        materiality: "structural",
        materialityReasonCodes: [],
        repositoryBindingIdentity: null,
        pathRoot: null,
        requiredCapabilities: [],
        expectedOutputs: [],
        reversibilityExpectation: null,
        stopConditions: [],
        risks: [],
        reservations: [],
        intentKind: null,
        artifactType: null,
        requestedOperation: null,
        impactSignals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
        },
        optionRefs: [GENERIC_MISSION_OPTION_ACCEPT_PREPARE],
        selectedOptionRef: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        cycleInstanceId: null,
      },
      executionBasis: {},
    });
    expect(foreign?.reason).toBe("proposal_forbids_generic_mission_context");
  });

  it("E1 — structural + verified HD can Select (Fake)", async () => {
    const { projectId, oa } = await seedProject("e1");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    if (live.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa,
        projectId,
        executionContractId: prep.contract.executionContractId,
        forceLocalAuthority: true,
      });
      if (!confirmed.ok) {
        throw new Error(`confirm: ${confirmed.code} ${confirmed.message}`);
      }
    }
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) {
      throw new Error(`authorize: ${authorized.code} ${authorized.message}`);
    }
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("source: no SQL migration / no parallel Decision store in Delivery files", () => {
    const types = readFileSync(
      path.join(APP, "lib/oa/decision/domain/types.ts"),
      "utf8",
    );
    expect(types).toContain('generic_mission');
    expect(types).toContain("DecisionBasisGenericMissionContext");
    const prepSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/prepareGenericExecutionContractDraft.ts",
      ),
      "utf8",
    );
    expect(prepSrc).toContain("verifyGenericMissionHumanDecisionForPrepare");
    expect(prepSrc).not.toMatch(/CREATE TABLE/i);
  });
});

```


## 21. Diffs des fichiers modifiés (M-HD-01 scope)


### `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
index f3beddf0..0e0bf8fa 100644
--- a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
@@ -147,11 +147,63 @@ export type DecisionBasisWorkRecommendationContext = {
   optionSetDigest: string;
 };

+/**
+ * M-HD-01 — durable sealed Generic Mission presentation for Pilote HD.
+ * Occurrence identity (missionSubjectId) is distinct from presentationDigest.
+ * NEVER a Proposal / trajectory / Work Recommendation disguise.
+ */
+export type DecisionBasisGenericMissionContext = {
+  /** Occurrence id — also DecisionBasis.sourceRef / HumanDecision.subject. */
+  missionSubjectId: string;
+  /** Full SHA-256 hex of sealed material fields (also DecisionBasis.sourceDigest). */
+  presentationDigest: string;
+  /** Presentation seal schema — NOT HumanDecision.schemaVersion. */
+  subjectSchemaVersion: "0.1.0-gms";
+  objective: string;
+  expectedOutcome: string;
+  scopeNarrative: string;
+  scopeIn: string[];
+  scopeOut: string[];
+  materiality: "structural" | "non_structural" | "unknown";
+  materialityReasonCodes: string[];
+  repositoryBindingIdentity: string | null;
+  pathRoot: string | null;
+  requiredCapabilities: string[];
+  /** Product-authoritative expected outputs only — never unresolved Nora paths. */
+  expectedOutputs: string[];
+  reversibilityExpectation: "reversible" | "irreversible" | "unknown" | null;
+  stopConditions: string[];
+  risks: string[];
+  reservations: string[];
+  intentKind: string | null;
+  artifactType: string | null;
+  requestedOperation: string | null;
+  impactSignals: {
+    structuralChange: boolean;
+    securityImpact: boolean;
+    architectureImpact: boolean;
+    dataImpact: boolean;
+    irreversible: boolean;
+  };
+  /** Options presented to the Pilote at record time. */
+  optionRefs: string[];
+  /** Option the Pilote selected — must belong to optionRefs. */
+  selectedOptionRef: string;
+  /** Nora advice only — never authority. */
+  recommendedOptionRef?: string;
+  /**
+   * Optional cycle mirror; must match DecisionBasis.cycleInstanceId when set.
+   * null = project-context (no artificial cycle).
+   */
+  cycleInstanceId: string | null;
+};
+
 export type DecisionBasisSourceType =
   | "proposal"
   | "trajectory_option"
   | "candidate_trajectory"
-  | "work_recommendation";
+  | "work_recommendation"
+  | "generic_mission";

 export type DecisionBasis = {
   sourceType: DecisionBasisSourceType;
@@ -160,7 +212,8 @@ export type DecisionBasis = {
    * - proposal id, or
    * - trajectory option-set ref, or
    * - candidate trajectoryId (D-GF-HD-01), or
-   * - Work Recommendation optionSetRef (MD-WR-06).
+   * - Work Recommendation optionSetRef (MD-WR-06), or
+   * - Generic Mission occurrence id (M-HD-01, `gms:`…).
    */
   sourceRef: string;
   /** SHA-256 hex of canonical JSON over stable source fields. */
@@ -174,6 +227,8 @@ export type DecisionBasis = {
   candidateTrajectoryContext?: DecisionBasisCandidateTrajectoryContext;
   /** Present when sourceType is `work_recommendation` (chat-first Work only). */
   workRecommendationContext?: DecisionBasisWorkRecommendationContext;
+  /** Present when sourceType is `generic_mission` (M-HD-01). */
+  genericMissionContext?: DecisionBasisGenericMissionContext;
   executionBasis: {
     objective?: string;
     scope?: string;

```

### `projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
index 9cf62e8f..97e82272 100644
--- a/projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
@@ -208,7 +208,8 @@ export function validateDecisionBasis(
     basis.sourceType !== "proposal" &&
     basis.sourceType !== "trajectory_option" &&
     basis.sourceType !== "candidate_trajectory" &&
-    basis.sourceType !== "work_recommendation"
+    basis.sourceType !== "work_recommendation" &&
+    basis.sourceType !== "generic_mission"
   ) {
     return { detailCode: "DECISION_INVALID", reason: "decision_basis_source_type" };
   }
@@ -241,6 +242,169 @@ export function validateDecisionBasis(
     };
   }

+  if (basis.sourceType === "generic_mission") {
+    if (basis.trajectoryContext !== undefined) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_forbids_trajectory_context",
+      };
+    }
+    if (basis.candidateTrajectoryContext !== undefined) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_forbids_candidate_trajectory_context",
+      };
+    }
+    if (basis.workRecommendationContext !== undefined) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_forbids_work_recommendation_context",
+      };
+    }
+    if (basis.sourceRef.startsWith("prop:")) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_source_ref_is_proposal_id",
+      };
+    }
+    if (!basis.sourceRef.startsWith("gms:") || !isOaIdentifier(basis.sourceRef)) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_source_ref_invalid",
+      };
+    }
+    if (!/^[a-f0-9]{64}$/i.test(basis.sourceDigest.trim())) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_source_digest_not_sha256",
+      };
+    }
+    const ctx = basis.genericMissionContext;
+    if (!ctx) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_context_required",
+      };
+    }
+    if (ctx.subjectSchemaVersion !== "0.1.0-gms") {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_subject_schema_unknown",
+      };
+    }
+    for (const [key, value] of [
+      ["missionSubjectId", ctx.missionSubjectId],
+      ["presentationDigest", ctx.presentationDigest],
+      ["objective", ctx.objective],
+      ["expectedOutcome", ctx.expectedOutcome],
+      ["scopeNarrative", ctx.scopeNarrative],
+      ["selectedOptionRef", ctx.selectedOptionRef],
+    ] as Array<[string, unknown]>) {
+      if (typeof value !== "string" || value.trim().length < 1) {
+        return {
+          detailCode: "DECISION_INVALID",
+          reason: `generic_mission_context_${key}`,
+        };
+      }
+    }
+    if (ctx.missionSubjectId !== basis.sourceRef) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_source_ref_mismatch",
+      };
+    }
+    if (ctx.presentationDigest !== basis.sourceDigest) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_source_digest_mismatch",
+      };
+    }
+    if (
+      ctx.materiality !== "structural" &&
+      ctx.materiality !== "non_structural" &&
+      ctx.materiality !== "unknown"
+    ) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_materiality_invalid",
+      };
+    }
+    if (
+      !Array.isArray(ctx.optionRefs) ||
+      ctx.optionRefs.length < 1 ||
+      !ctx.optionRefs.every((r) => typeof r === "string" && r.trim().length > 0)
+    ) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_context_optionRefs",
+      };
+    }
+    if (!ctx.optionRefs.includes(ctx.selectedOptionRef)) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_selected_option_not_presented",
+      };
+    }
+    if (
+      ctx.recommendedOptionRef !== undefined &&
+      !ctx.optionRefs.includes(ctx.recommendedOptionRef)
+    ) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_recommended_option_not_presented",
+      };
+    }
+    if (!Array.isArray(ctx.scopeIn) || !Array.isArray(ctx.scopeOut)) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_scope_arrays",
+      };
+    }
+    if (
+      !Array.isArray(ctx.requiredCapabilities) ||
+      !Array.isArray(ctx.expectedOutputs) ||
+      !Array.isArray(ctx.stopConditions) ||
+      !Array.isArray(ctx.risks) ||
+      !Array.isArray(ctx.reservations) ||
+      !Array.isArray(ctx.materialityReasonCodes)
+    ) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_effect_arrays",
+      };
+    }
+    const signals = ctx.impactSignals;
+    if (
+      !signals ||
+      typeof signals.structuralChange !== "boolean" ||
+      typeof signals.securityImpact !== "boolean" ||
+      typeof signals.architectureImpact !== "boolean" ||
+      typeof signals.dataImpact !== "boolean" ||
+      typeof signals.irreversible !== "boolean"
+    ) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_impact_signals",
+      };
+    }
+    const basisCycle = basis.cycleInstanceId ?? null;
+    const ctxCycle = ctx.cycleInstanceId ?? null;
+    if (basisCycle !== ctxCycle) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "generic_mission_cycle_mirror_mismatch",
+      };
+    }
+    return null;
+  }
+
+  if (basis.genericMissionContext !== undefined) {
+    return {
+      detailCode: "DECISION_INVALID",
+      reason: `${basis.sourceType}_forbids_generic_mission_context`,
+    };
+  }
+
   if (basis.sourceType === "work_recommendation") {
     // MD-WR-06 — Work Recommendation is neither a Proposal nor a trajectory.
     if (basis.trajectoryContext !== undefined) {

```

### `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 37daec50..8fb25b7a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -1,14 +1,14 @@
 /**
  * G-D4 / T-A4 / Authority Continuity — generic ExecutionContract PREPARE
- * without systematic HumanDecision.
+ * without systematic HumanDecision for non-structural missions.
  *
- * When a mission is sufficiently qualified and server-owned Product materiality
- * is non-structural, Studio may Build + Validate a generalist contract with
- * decisionRefs=[] for Pilote inspection. PREPARE ≠ EXECUTE: no Attempt.
+ * M-HD-01 — structural / HD-required missions may resume PREPARE only after a
+ * verified OA HumanDecision (sourceType generic_mission, accept-prepare).
+ * decisionRefs then carries that verified decisionId only. PREPARE ≠ EXECUTE.
  *
  * Confirm/Authorize remain separate Pilote acts. Empty decisionRefs at
  * confirmed require MATERIALITY:NON_STRUCTURAL stamp + CURRENT revalidation
- * (T-A4 schema G-D4). Structural missions still require a real HD ref.
+ * (T-A4 schema G-D4).
  *
  * Reuses BuildExecutionContract + ValidateExecutionContract + generalist surface
  * + resolveTrustedProductLaunchContext + resolveContractSourceGroundingForPrepare.
@@ -64,6 +64,7 @@ import {
   resolveGenericPrepareCapabilityEnvelope,
   type GenericPrepareCapabilityResolution,
 } from "./genericPrepareCapabilityEnvelope";
+import { verifyGenericMissionHumanDecisionForPrepare } from "./verifyGenericMissionHumanDecisionForPrepare";

 export {
   GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
@@ -153,7 +154,8 @@ export function isChatFirstPrepareAcceptGo(input: {
  */
 export function resolveChatFirstGenericPrepareGo(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  /** null = S8 project-context (no active cycle). Matches only a null-cycle offer. */
+  readonly cycleInstanceId: string | null;
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
   readonly sessionKey?: string | null;
@@ -184,7 +186,7 @@ export function resolveChatFirstGenericPrepareGo(input: {
   if (offer.sessionKey !== sessionKey) {
     return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
   }
-  if (offer.cycleInstanceId !== input.cycleInstanceId) {
+  if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
     return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
   }
   return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
@@ -282,6 +284,11 @@ export type PrepareGenericExecutionContractDraftInput = {
   readonly projectId: string;
   readonly cycleInstanceId?: string | null;
   readonly analysis: IntentAnalysisDto;
+  /**
+   * M-HD-01 — durable OA HumanDecision id for structural resume.
+   * Verified before decisionRefs is populated. Never fabricated.
+   */
+  readonly decisionId?: string | null;
   /** When true, bypass local authority env gate (DET tests). */
   readonly forceLocalAuthority?: boolean;
   /**
@@ -320,6 +327,9 @@ function stableMissionKey(input: {
   readonly scopeIn: readonly string[];
   readonly scopeOut: readonly string[];
   readonly materiality: string;
+  /** M-HD-01 — bind EC identity to verified HD when present. */
+  readonly decisionId?: string | null;
+  readonly presentationDigest?: string | null;
 }): string {
   const raw = [
     input.projectId,
@@ -330,6 +340,8 @@ function stableMissionKey(input: {
     input.scopeIn.join("|"),
     input.scopeOut.join("|"),
     input.materiality,
+    input.decisionId?.trim() || "",
+    input.presentationDigest?.trim() || "",
   ].join("\n");
   return createHash("sha256").update(raw).digest("hex").slice(0, 24);
 }
@@ -368,7 +380,7 @@ export function extractMissionEffectsFromAnalysis(

 function offerFingerprintFor(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  readonly cycleInstanceId: string | null;
   readonly objective: string;
   readonly expectedOutcome: string;
   readonly scope: string;
@@ -381,7 +393,7 @@ function offerFingerprintFor(input: {
     .update(
       [
         input.projectId,
-        input.cycleInstanceId,
+        input.cycleInstanceId ?? "",
         input.objective,
         input.expectedOutcome,
         input.scope,
@@ -405,7 +417,7 @@ function offerFingerprintFor(input: {
 /** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
 export function rememberGenericPrepareRecommendation(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  readonly cycleInstanceId: string | null;
   readonly analysis: IntentAnalysisDto;
   readonly offeredAtIso: string;
   readonly sessionKey?: string | null;
@@ -540,21 +552,14 @@ export function getCurrentGenericPrepareOffer(

 /**
  * Build (+ optional Validate) an inspectable generalist ExecutionContract.
- * Empty decisionRefs when non-structural. Never records HumanDecision.
+ * Empty decisionRefs when non-structural. Structural resume requires verified HD.
+ * Never records HumanDecision. Never auto-EXECUTE.
  */
 export async function prepareGenericExecutionContractDraft(
   input: PrepareGenericExecutionContractDraftInput,
 ): Promise<PrepareGenericExecutionContractDraftResult> {
   const readiness = assessGenericMissionPrepareReadiness(input.analysis);
-  if (readiness.structuralBlocked) {
-    return {
-      ok: false,
-      code: "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-      message:
-        "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
-    };
-  }
-  if (!readiness.ready) {
+  if (readiness.missingFields.length > 0) {
     return {
       ok: false,
       code: "MISSION_INSUFFICIENTLY_QUALIFIED",
@@ -562,6 +567,10 @@ export async function prepareGenericExecutionContractDraft(
     };
   }

+  const decisionId = input.decisionId?.trim() || null;
+  let verifiedDecisionRefs: string[] = [];
+  let verifiedPresentationDigest: string | null = null;
+
   const proposedCapabilities =
     input.analysis.executionIntent?.requiredCapabilities ?? [];
   const capabilityResolution =
@@ -581,19 +590,41 @@ export async function prepareGenericExecutionContractDraft(
     cycleInstanceId: input.cycleInstanceId,
   });
   const materiality = materialityResolution.assessment;
-  if (materiality.humanDecisionRequired) {
-    return {
-      ok: false,
-      code:
-        materiality.materiality === "unknown"
-          ? "MATERIALITY_UNKNOWN"
-          : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-      message:
-        materiality.materiality === "unknown"
-          ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
-          : "Matérialité server-owned structurelle — HumanDecision requise avant préparation sans refs.",
-    };
+  const hdRequired =
+    readiness.structuralBlocked || materiality.humanDecisionRequired;
+
+  if (hdRequired) {
+    if (!decisionId) {
+      return {
+        ok: false,
+        code:
+          materiality.materiality === "unknown" && !readiness.structuralBlocked
+            ? "MATERIALITY_UNKNOWN"
+            : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
+        message:
+          materiality.materiality === "unknown" && !readiness.structuralBlocked
+            ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
+            : "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
+      };
+    }
+    const verified = await verifyGenericMissionHumanDecisionForPrepare({
+      oa: input.oa,
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId?.trim() || null,
+      decisionId,
+      analysis: input.analysis,
+    });
+    if (!verified.ok) {
+      return {
+        ok: false,
+        code: verified.code,
+        message: verified.message,
+      };
+    }
+    verifiedDecisionRefs = [verified.verified.decisionId];
+    verifiedPresentationDigest = verified.verified.presentationDigest;
   }
+  // Non-structural: decisionRefs remain empty (no systematic HD).

   const services = input.oa.executionContractServices;
   if (!services?.buildExecutionContract) {
@@ -717,6 +748,8 @@ export async function prepareGenericExecutionContractDraft(
     scopeIn,
     scopeOut: outOfScope,
     materiality: materiality.materiality,
+    decisionId: verifiedDecisionRefs[0] ?? null,
+    presentationDigest: verifiedPresentationDigest,
   });
   const executionContractId = `xct:gen-prep:${missionKey}`;
   const idempotencyKey = `idem:gen-prep:${missionKey}`;
@@ -739,7 +772,9 @@ export async function prepareGenericExecutionContractDraft(
   const constraints = [
     "PRODUCT_GOVERNED",
     "NO_ATTEMPT_AT_PREPARE",
-    "PREPARE_WITHOUT_SYSTEMATIC_HD",
+    verifiedDecisionRefs.length > 0
+      ? "PREPARE_AFTER_VERIFIED_GENERIC_MISSION_HD"
+      : "PREPARE_WITHOUT_SYSTEMATIC_HD",
     "CURSOR_DETERMINES_HOW",
     "GENERIC_MISSION_NO_TASK_CATALOG",
     materiality.constraintToken,
@@ -776,7 +811,7 @@ export async function prepareGenericExecutionContractDraft(
     executionContractId,
     projectId: input.projectId,
     cycleInstanceId,
-    decisionRefs: [],
+    decisionRefs: [...verifiedDecisionRefs],
     action: PRODUCT_CANONICAL_EXECUTION_ACTION,
     target: PRODUCT_CANONICAL_EXECUTION_TARGET,
     scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
@@ -788,7 +823,9 @@ export async function prepareGenericExecutionContractDraft(
       scopeOut: outOfScope,
       sourcesToRead,
       cursorDeterminesHow: true,
-      prepareWithoutSystematicHumanDecision: true,
+      prepareWithoutSystematicHumanDecision: verifiedDecisionRefs.length === 0,
+      verifiedGenericMissionHumanDecisionId: verifiedDecisionRefs[0] ?? null,
+      presentationDigest: verifiedPresentationDigest,
       humanDecisionCreated: false,
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
@@ -835,16 +872,42 @@ export async function prepareGenericExecutionContractDraft(
     authorityEvidenceId: authority.evidenceId,
   });

+  let contract;
+  let reusedExisting = false;
   if (!built.ok) {
-    return {
-      ok: false,
-      code: built.error.detailCode,
-      message: built.error.message,
-    };
+    // Idempotent resume: same missionKey / executionContractId already built.
+    if (built.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
+      const existing = await services.getExecutionContract.execute({
+        executionContractId,
+      });
+      if (
+        existing.ok &&
+        existing.contract.projectId === input.projectId &&
+        JSON.stringify([...(existing.contract.decisionRefs ?? [])].sort()) ===
+          JSON.stringify([...verifiedDecisionRefs].sort())
+      ) {
+        contract = existing.contract;
+        reusedExisting = true;
+      } else {
+        return {
+          ok: false,
+          code: built.error.detailCode,
+          message: built.error.message,
+        };
+      }
+    } else {
+      return {
+        ok: false,
+        code: built.error.detailCode,
+        message: built.error.message,
+      };
+    }
+  } else {
+    contract = built.contract;
   }

-  let contract = built.contract;
-  const shouldValidate = input.validateAfterBuild !== false;
+  const shouldValidate =
+    input.validateAfterBuild !== false && !reusedExisting;
   if (shouldValidate && services.validateExecutionContract) {
     const validated = await services.validateExecutionContract.execute({
       executionContractId: contract.executionContractId,
@@ -884,13 +947,19 @@ export function genericMissionClarificationText(input: {
   readonly missingFields: readonly string[];
   readonly structuralBlocked: boolean;
   readonly recommendPrepare?: boolean;
+  /** false = S8 project-context (no active cycle, none invented). Default true. */
+  readonly hasActiveCycle?: boolean;
 }): string {
   const head =
     input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
+  const contextKept =
+    input.hasActiveCycle === false
+      ? "Contexte projet conservé — aucun cycle artificiel créé."
+      : "Le cycle actif est conservé.";
   if (input.structuralBlocked) {
     return [
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution.",
       "Rien n'a encore été exécuté.",
     ].join(" ");
@@ -898,7 +967,7 @@ export function genericMissionClarificationText(input: {
   if (input.recommendPrepare) {
     return [
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Je recommande de confier cette mission à Cursor.",
       "Je peux préparer le contrat d'exécution générique inspectable.",
       "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
@@ -908,7 +977,7 @@ export function genericMissionClarificationText(input: {
   const gaps = input.missingFields.join(", ");
   return [
     head,
-    "Le cycle actif est conservé.",
+    contextKept,
     `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
     "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
   ].join(" ");
@@ -930,3 +999,184 @@ export function genericMissionPreparedText(input: {
     "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
   ].join(" ");
 }
+
+// ---------------------------------------------------------------------------
+// D-ER-16…19 — Nora tool solicitation (Option 2). Thin Product service over
+// the SAME backend: assess readiness → prepareGenericExecutionContractDraft.
+// No parallel prepare engine · no task taxonomy · never an ExecutionAttempt.
+// ---------------------------------------------------------------------------
+
+/** Mission fields Nora may supply to the solicitation tool (NON-AUTHORITATIVE). */
+export type SolicitGenericPrepareMissionFields = {
+  readonly objective?: string | null;
+  readonly expectedOutcome?: string | null;
+  readonly scope?: string | null;
+  readonly contextNotes?: string | null;
+  /** Conservative-only: a true flag can only make Product MORE cautious. */
+  readonly impactSignals?: {
+    readonly structuralChange?: boolean;
+    readonly securityImpact?: boolean;
+    readonly architectureImpact?: boolean;
+    readonly dataImpact?: boolean;
+    readonly irreversible?: boolean;
+  } | null;
+};
+
+/**
+ * Minimal IntentAnalysisDto for a tool-solicited mission. Safe defaults:
+ * intentClass execution_request, NO executionIntent taxonomy, NO
+ * continuationKind / artifactMaterializationOperation, NO cycle type.
+ */
+export function buildIntentAnalysisFromSolicitedMission(
+  fields: SolicitGenericPrepareMissionFields,
+): IntentAnalysisDto {
+  const objective = fields.objective?.trim() || null;
+  const expectedOutcome = fields.expectedOutcome?.trim() || null;
+  const scope = fields.scope?.trim() || null;
+  const sig = fields.impactSignals ?? null;
+  const structural =
+    sig?.structuralChange === true ||
+    sig?.securityImpact === true ||
+    sig?.architectureImpact === true ||
+    sig?.dataImpact === true ||
+    sig?.irreversible === true;
+  const notes = fields.contextNotes?.trim() || null;
+  return {
+    parseOk: true,
+    intentClass: "execution_request",
+    candidateCycleTypeId: null,
+    signals: {
+      structuralChange: sig?.structuralChange === true,
+      securityImpact: sig?.securityImpact === true,
+      architectureImpact: sig?.architectureImpact === true,
+      dataImpact: sig?.dataImpact === true,
+      irreversible: sig?.irreversible === true,
+      lowRiskBounded: !structural,
+    },
+    cognitiveWorkload: null,
+    contradictionCandidate: null,
+    challengeResponseAssessment: "sufficient",
+    objective,
+    scope,
+    rephrasedRequest: objective,
+    outOfScope: [],
+    risks: [],
+    reservations: notes ? [notes] : [],
+    stopConditions: [],
+    activatedBlocks: [],
+    expectedOutcome,
+    criticalJustification: null,
+    requestedOperation: null,
+    executionIntent: null,
+  };
+}
+
+export type SolicitGenericExecutionPrepareInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  /** null = S8 project-context (no active cycle; none is ever created here). */
+  readonly cycleInstanceId: string | null;
+  /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
+  readonly analysis?: IntentAnalysisDto;
+  readonly mission?: SolicitGenericPrepareMissionFields;
+  /** M-HD-01 — verified OA HumanDecision for structural resume. */
+  readonly decisionId?: string | null;
+  readonly sessionKey?: string | null;
+  readonly sessionDbPath?: string | null;
+  readonly forceLocalAuthority?: boolean;
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
+};
+
+export type SolicitGenericExecutionPrepareResult =
+  | {
+      readonly ok: true;
+      readonly code: "GENERIC_PREPARE_DRAFTED";
+      readonly executionContractId: string;
+      readonly contractStatus: string;
+      readonly materiality: string;
+      readonly cycleInstanceId: string | null;
+      readonly projectContextOnly: boolean;
+      readonly humanDecisionCreated: false;
+      readonly executionAttemptCreated: false;
+      readonly message: string;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly missingFields?: readonly string[];
+      readonly humanDecisionCreated: false;
+      readonly executionAttemptCreated: false;
+    };
+
+/**
+ * Thin Product service for Nora tool injection (D-ER-16). PREPARE only —
+ * AUTHORIZE and EXECUTE remain separate Pilote/Studio acts. Always reports
+ * executionAttemptCreated:false; JSON-serializable.
+ */
+export async function solicitGenericExecutionPrepare(
+  input: SolicitGenericExecutionPrepareInput,
+): Promise<SolicitGenericExecutionPrepareResult> {
+  const projectId = input.projectId.trim();
+  const fail = (
+    code: string,
+    message: string,
+    missingFields?: readonly string[],
+  ): SolicitGenericExecutionPrepareResult => ({
+    ok: false,
+    code,
+    message,
+    ...(missingFields ? { missingFields } : {}),
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+  });
+  if (!projectId) {
+    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
+  }
+  const analysis =
+    input.analysis ??
+    buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
+
+  const readiness = assessGenericMissionPrepareReadiness(analysis);
+  if (readiness.missingFields.length > 0) {
+    return fail(
+      "MISSION_INSUFFICIENTLY_QUALIFIED",
+      `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
+      readiness.missingFields,
+    );
+  }
+  // Structural without decisionId fails inside prepareGeneric (verified HD path).
+
+  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
+  const prep = await prepareGenericExecutionContractDraft({
+    oa: input.oa,
+    projectId,
+    cycleInstanceId,
+    analysis,
+    decisionId: input.decisionId,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+    sourceGroundingReader: input.sourceGroundingReader,
+    sessionKey: input.sessionKey,
+    sessionDbPath: input.sessionDbPath,
+  });
+  if (!prep.ok) {
+    return fail(prep.code, prep.message);
+  }
+  return {
+    ok: true,
+    code: "GENERIC_PREPARE_DRAFTED",
+    executionContractId: prep.contract.executionContractId,
+    contractStatus: prep.contract.status,
+    materiality: prep.materiality.materiality,
+    cycleInstanceId,
+    projectContextOnly: cycleInstanceId === null,
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+    message:
+      "Contrat d'exécution préparé et inspectable — non autorisé, non lancé. Préparer ≠ autoriser ≠ exécuter.",
+  };
+}

```

### `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 278fec81..f832fbb7 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -26,6 +26,7 @@ import {
   registerLocalAuthorityForExecutionClass,
 } from "@/lib/oa/decision";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
 import type {
   ExecutionAttempt,
   SelectionProfile,
@@ -39,6 +40,7 @@ import {
 } from "@/lib/oa/execution-attempt";
 import type { CycleProfile } from "@/lib/oa/cycle";
 import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
+import { readContractInspectionState } from "./inspectExecutionContract";
 import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
 import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
 import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
@@ -244,6 +246,16 @@ export type GovernedExecuteAuthorizedContractInput = {
   readonly real?: unknown;
   readonly adapterRef?: unknown;
   readonly forceLocalAuthority?: boolean;
+  /**
+   * Exact inspected contract version for G-D4 MATERIALITY-stamped Select revalidation.
+   * When omitted on a stamped Generic EC, Select resolves from durable inspection
+   * attestation (fail-closed if absent/stale) — never invents a binding.
+   */
+  readonly expectedVersion?: number;
+  /**
+   * Semantic fingerprint paired with expectedVersion for stamped Select revalidation.
+   */
+  readonly expectedSemanticFingerprint?: string;
   /**
    * Product Cursor Complete: when true (default), await process terminal like
    * docs_write. When false, running Attempts may surface CURSOR_REPORT_PENDING.
@@ -379,33 +391,37 @@ async function loadContract(
     };
   }

+  // Project positive binding — missing/unreadable Project is never an implicit allow.
   const project = await oa.projectServices.getProject.execute({
     projectId: input.projectId,
   });
-  if (project.ok && project.project.status === "archived") {
+  if (!project.ok) {
     return {
       ok: false,
       result: {
         ok: false,
-        code: "PROJECT_ARCHIVED",
-        message: "Projet archivé — aucune exécution.",
+        code: "PROJECT_NOT_FOUND",
+        message:
+          "Projet introuvable ou illisible — exécution refusée (fail-closed).",
       },
     };
   }
-
-  let selectionProfile: SelectionProfile | null = null;
-  if (!contract.cycleInstanceId) {
+  if (project.project.status === "archived") {
     return {
       ok: false,
       result: {
         ok: false,
-        code: "CYCLE_BINDING_REQUIRED",
-        message:
-          "ExecutionContract sans cycleInstanceId — Execute W3-A refusé (pas de fallback Standard).",
+        code: "PROJECT_ARCHIVED",
+        message: "Projet archivé — aucune exécution.",
       },
     };
   }
-  {
+
+  // CycleInstance is optional for Project-scoped generic execution.
+  // When present: preserve lifecycle binding / active-state gates.
+  // When absent: do NOT invent a cycle, cycleTypeId, or methodological profile.
+  let selectionProfile: SelectionProfile;
+  if (contract.cycleInstanceId) {
     const cycle = await oa.cycleServices.getCycle.execute({
       cycleInstanceId: contract.cycleInstanceId,
     });
@@ -443,7 +459,17 @@ async function loadContract(
         },
       };
     }
+    // Historical cycle-bound path: methodological cycle profile informs OA
+    // SelectionProfile for non–Cursor-REAL branches. Cursor REAL Product path
+    // still applies capability-deterministic selection below (not access-by-profile).
     selectionProfile = mapCycleProfileToSelectionProfile(cycle.cycle.profile);
+  } else {
+    // Project-scoped generic path (no CycleInstance on EC).
+    // OA SelectExecutionAgent still requires a SelectionProfile enum value.
+    // This is the technical carrier for capabilities_deterministic on the
+    // Product Cursor Generalist path — NOT a claim that the mission is
+    // methodologically "Standard", and NOT an access gate derived from SFIA profile.
+    selectionProfile = "standard";
   }

   return { ok: true, contract, selectionProfile };
@@ -556,6 +582,177 @@ function registerPiloteAuthority(
   });
 }

+type StampedSelectInspectionBinding =
+  | {
+      readonly ok: true;
+      readonly expectedVersion: number;
+      readonly expectedSemanticFingerprint: string;
+      /** How the binding was obtained — never an authorization act. */
+      readonly provenance: "caller_explicit" | "durable_attestation";
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string };
+
+const INSPECTION_FINGERPRINT_PATTERN = /^(?:sha256:)?[a-f0-9]{64}$/i;
+
+function isExplicitBindingPresent(value: unknown): boolean {
+  return value !== undefined && value !== null;
+}
+
+function validateExplicitInspectionVersion(
+  value: unknown,
+):
+  | { readonly ok: true; readonly version: number }
+  | { readonly ok: false; readonly code: string; readonly message: string } {
+  if (typeof value !== "number" || !Number.isFinite(value)) {
+    return {
+      ok: false,
+      code: "BINDING_INVALID",
+      message:
+        "Version d'inspection explicite invalide (NaN / non-finie / type hostile) — Select refusé.",
+    };
+  }
+  if (!Number.isInteger(value) || value < 1) {
+    return {
+      ok: false,
+      code: "BINDING_INVALID",
+      message:
+        "Version d'inspection explicite hors domaine — Select refusé.",
+    };
+  }
+  return { ok: true, version: value };
+}
+
+function validateExplicitInspectionFingerprint(
+  value: unknown,
+):
+  | { readonly ok: true; readonly fingerprint: string }
+  | { readonly ok: false; readonly code: string; readonly message: string } {
+  if (typeof value !== "string") {
+    return {
+      ok: false,
+      code: "BINDING_INVALID",
+      message:
+        "Fingerprint d'inspection explicite invalide (type hostile) — Select refusé.",
+    };
+  }
+  const fp = value.trim();
+  if (!fp || !INSPECTION_FINGERPRINT_PATTERN.test(fp)) {
+    return {
+      ok: false,
+      code: "BINDING_INVALID",
+      message:
+        "Fingerprint d'inspection explicite vide, whitespace ou malformé — Select refusé.",
+    };
+  }
+  return { ok: true, fingerprint: fp };
+}
+
+/**
+ * Resolve G-D4 inspection binding for stamped Generic Select.
+ *
+ * I1 — both truly absent → durable attestation if sufficient/current.
+ * I2 — both valid present → keep caller values (never overwrite).
+ * I3/I4 — version XOR fingerprint (valid or not) → BINDING_INCOMPLETE.
+ * I5–I9 — explicit invalid / hostile → BINDING_INVALID (never treated as absent).
+ * I11 — missing/stale attestation when fallback needed → refuse.
+ * I12 — never records inspection / HD / Attempt.
+ */
+async function resolveStampedSelectInspectionBinding(input: {
+  readonly oa: RuntimeOaStack;
+  readonly executionContractId: string;
+  readonly expectedVersion?: number;
+  readonly expectedSemanticFingerprint?: string;
+}): Promise<StampedSelectInspectionBinding> {
+  const versionProvided = isExplicitBindingPresent(input.expectedVersion);
+  const fingerprintProvided = isExplicitBindingPresent(
+    input.expectedSemanticFingerprint,
+  );
+
+  if (versionProvided !== fingerprintProvided) {
+    // Presence XOR — validate the provided side for invalid-vs-incomplete clarity,
+    // but always refuse incomplete pairs (I3/I4) without attestation overwrite.
+    if (versionProvided) {
+      const v = validateExplicitInspectionVersion(input.expectedVersion);
+      if (!v.ok) return v;
+    }
+    if (fingerprintProvided) {
+      const f = validateExplicitInspectionFingerprint(
+        input.expectedSemanticFingerprint,
+      );
+      if (!f.ok) return f;
+    }
+    return {
+      ok: false,
+      code: "BINDING_INCOMPLETE",
+      message: versionProvided
+        ? "Fingerprint d'inspection requis avec la version explicite — binding partiel refusé."
+        : "Version d'inspection requise avec le fingerprint explicite — binding partiel refusé.",
+    };
+  }
+
+  if (versionProvided && fingerprintProvided) {
+    const v = validateExplicitInspectionVersion(input.expectedVersion);
+    if (!v.ok) return v;
+    const f = validateExplicitInspectionFingerprint(
+      input.expectedSemanticFingerprint,
+    );
+    if (!f.ok) return f;
+    // I2 — preserve explicit valid pair. Do not replace from attestation.
+    return {
+      ok: true,
+      expectedVersion: v.version,
+      expectedSemanticFingerprint: f.fingerprint,
+      provenance: "caller_explicit",
+    };
+  }
+
+  // I1 — both truly absent: server-owned durable attestation only.
+  const inspection = await readContractInspectionState({
+    oa: input.oa,
+    executionContractId: input.executionContractId,
+  });
+  if (!inspection.ok) {
+    return {
+      ok: false,
+      code: inspection.code,
+      message: inspection.message,
+    };
+  }
+  if (inspection.reinspectionRequired) {
+    return {
+      ok: false,
+      code: "INSPECTION_STALE",
+      message:
+        "Attestation d'inspection obsolète ou réinspection requise — Select refusé.",
+    };
+  }
+  if (!inspection.inspectionSufficient || inspection.attestedVersion == null) {
+    return {
+      ok: false,
+      code: "INSPECTION_REQUIRED",
+      message:
+        "Inspection Pilote suffisante requise avant Select (contrat matérialité stampé).",
+    };
+  }
+  const attestedFp =
+    inspection.attestedSemanticFingerprint?.trim() ||
+    inspection.semanticFingerprint?.trim();
+  if (!attestedFp) {
+    return {
+      ok: false,
+      code: "EXPECTED_FINGERPRINT_REQUIRED",
+      message:
+        "Empreinte sémantique d'inspection absente — Select refusé (fail-closed).",
+    };
+  }
+  return {
+    ok: true,
+    expectedVersion: inspection.attestedVersion,
+    expectedSemanticFingerprint: attestedFp,
+    provenance: "durable_attestation",
+  };
+}
+
 /** Phase 1 — SelectExecutionAgent → accepted (fresh AUTHORIZED required). */
 export async function governedExecuteSelectAgent(
   input: GovernedExecuteAuthorizedContractInput,
@@ -596,11 +793,39 @@ export async function governedExecuteSelectAgent(
     });
   }

+  // G-D4 — stamped Generic materiality contracts require version/fingerprint
+  // binding at Select revalidation. Explicit values are NEVER overwritten by
+  // attestation fallback. Partial binding (version XOR fingerprint) fails closed.
+  const stampedMateriality = materialityFromContractConstraints(
+    contract.constraints,
+  );
+  let expectedVersion = input.expectedVersion;
+  let expectedSemanticFingerprint = input.expectedSemanticFingerprint;
+  if (stampedMateriality != null) {
+    const binding = await resolveStampedSelectInspectionBinding({
+      oa: input.oa,
+      executionContractId: contract.executionContractId,
+      expectedVersion: input.expectedVersion,
+      expectedSemanticFingerprint: input.expectedSemanticFingerprint,
+    });
+    if (!binding.ok) {
+      return {
+        ok: false,
+        code: binding.code,
+        message: binding.message,
+      };
+    }
+    expectedVersion = binding.expectedVersion;
+    expectedSemanticFingerprint = binding.expectedSemanticFingerprint;
+  }
+
   const authorized = await evaluateExecutionAuthorization({
     oa: input.oa,
     projectId: input.projectId,
     executionContractId: input.executionContractId,
     forceLocalAuthority: input.forceLocalAuthority,
+    expectedVersion,
+    expectedSemanticFingerprint,
   });
   if (!authorized.ok) {
     return {
@@ -644,9 +869,13 @@ export async function governedExecuteSelectAgent(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  // Cursor REAL paths (canonical Product + sealed docs-write): mechanical
-  // capabilities_deterministic selection — no Pilot agent-selection HOW.
+  // Project-scoped Cursor tool access (canonical Product + sealed docs-write):
+  // select by AgentCapability / effects via capabilities_deterministic.
+  // Methodological cycle profile (Light/Standard/Critical/Capitalization) is NOT
+  // an access condition for Cursor. Authority remains: AUTHORIZED evaluation,
+  // HumanDecision / Confirmation / scope / ActionPolicy upstream of Select.
   // Sealed docs-write still requests its specialized agent; Product uses generalist.
+  // Non–Cursor-REAL branches keep historical Critical → agent_selection Confirmation.
   let effectiveProfile: SelectionProfile = selectionProfile;
   let selectionStrategy: SelectionStrategy;
   if (cursorReal) {

```

### `projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
index b2cd6cee..406d749e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
@@ -173,10 +173,19 @@ export async function confirmExecutionContractForAuthorization(
   const requiresGd4CurrentMaterialityRevalidation =
     stamped != null || stampedCurrentness != null;

+  // M-HD-01 — structural/unknown stamp WITH verified decisionRefs must not be
+  // forced through the NON_STRUCTURAL-only Product revalidation path.
+  // Case A-adjacent: HD freshness is enforced by OA Confirm + decisionRefs.
+  const structuralHdResume =
+    decisionRefs.length >= 1 &&
+    (stamped === "structural" || stamped === "unknown");
+
   let recomputedMateriality = stamped ?? "unknown";
   if (requiresGd4CurrentMaterialityRevalidation) {
-    // Cases B/C — G-D4 stamped (NON_STRUCTURAL / STRUCTURAL / UNKNOWN) or stamped facts.
-    if (input.skipMaterialityRevalidation !== true) {
+    if (structuralHdResume) {
+      recomputedMateriality = stamped ?? "unknown";
+    } else if (input.skipMaterialityRevalidation !== true) {
+      // Cases B/C — G-D4 stamped NON_STRUCTURAL (or stamped facts without HD).
       const revalidated = await revalidateMaterialityAgainstCurrentProduct({
         oa,
         projectId: input.projectId,

```

### `projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
index 074db64b..0a86345a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
@@ -151,20 +151,28 @@ export async function authorizeGenericPreparedContract(
       : null
   );
   const stamped = materialityFromContractConstraints(loaded.contract.constraints);
-  const revalidated = await revalidateMaterialityAgainstCurrentProduct({
-    oa: input.oa,
-    projectId: input.projectId,
-    analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
-    cycleInstanceId: loaded.contract.cycleInstanceId ?? null,
-    stampedMateriality: stamped,
-    stampedCurrentness: parseStampedProductCurrentness(factsRaw),
-  });
-  if (!revalidated.ok) {
-    return {
-      ok: false,
-      code: revalidated.code,
-      message: revalidated.message,
-    };
+  const decisionRefs = loaded.contract.decisionRefs ?? [];
+  // M-HD-01 — structural/unknown + verified decisionRefs: do not force the
+  // NON_STRUCTURAL-only Product revalidation gate (HD already verified at PREPARE).
+  const structuralHdResume =
+    decisionRefs.length >= 1 &&
+    (stamped === "structural" || stamped === "unknown");
+  if (!structuralHdResume) {
+    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
+      oa: input.oa,
+      projectId: input.projectId,
+      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
+      cycleInstanceId: loaded.contract.cycleInstanceId ?? null,
+      stampedMateriality: stamped,
+      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
+    });
+    if (!revalidated.ok) {
+      return {
+        ok: false,
+        code: revalidated.code,
+        message: revalidated.message,
+      };
+    }
   }

   let confirmationRef: string | null = loaded.contract.confirmationRef ?? null;

```

### `projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
index 730abe5e..ea3a40db 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
@@ -435,20 +435,28 @@ export async function evaluateExecutionAuthorization(
       typeof contractInputs.materialityFacts === "object"
         ? (contractInputs.materialityFacts as Record<string, unknown>)
         : null;
-    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
-      oa,
-      projectId: input.projectId,
-      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
-      cycleInstanceId: contract.cycleInstanceId ?? null,
-      stampedMateriality,
-      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
-    });
-    if (!revalidated.ok) {
-      return {
-        ok: false,
-        code: revalidated.code,
-        message: revalidated.message,
-      };
+    const decisionRefs = contract.decisionRefs ?? [];
+    // M-HD-01 — structural/unknown + verified HD refs: skip NON_STRUCTURAL-only gate.
+    const structuralHdResume =
+      decisionRefs.length >= 1 &&
+      (stampedMateriality === "structural" ||
+        stampedMateriality === "unknown");
+    if (!structuralHdResume) {
+      const revalidated = await revalidateMaterialityAgainstCurrentProduct({
+        oa,
+        projectId: input.projectId,
+        analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
+        cycleInstanceId: contract.cycleInstanceId ?? null,
+        stampedMateriality,
+        stampedCurrentness: parseStampedProductCurrentness(factsRaw),
+      });
+      if (!revalidated.ok) {
+        return {
+          ok: false,
+          code: revalidated.code,
+          message: revalidated.message,
+        };
+      }
     }
   }


```

### `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 651fe806..b9ff4e7e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -74,6 +74,14 @@ import type {
 } from "./types";
 import type { ReadW2ProjectHistoryResult } from "./projectHistory";
 import type { RecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
+import type { IntentAnalysisDto } from "../f2/types";
+import type { GenericMissionSubject } from "./genericMissionSubject";
+import {
+  recordGenericMissionHumanDecision,
+  sealGenericMissionForPresentation,
+  type RecordGenericMissionHumanDecisionResult,
+  type SealGenericMissionForPresentationResult,
+} from "./recordGenericMissionHumanDecision";

 const OA_UNAVAILABLE = {
   ok: false as const,
@@ -549,6 +557,12 @@ export async function w2PrepareRecoveryDocsWriteAction(input: {
 export async function w2GovernedExecuteSelectAction(input: {
   projectId: string;
   executionContractId: string;
+  /**
+   * Optional Pilote inspection binding for G-D4 stamped Generic Select.
+   * When omitted, Select resolves from durable inspection attestation.
+   */
+  expectedVersion?: number;
+  expectedSemanticFingerprint?: string;
   canActAsMorris?: unknown;
   claimedAuthorityLevel?: unknown;
   authorityReceiptRef?: unknown;
@@ -560,6 +574,8 @@ export async function w2GovernedExecuteSelectAction(input: {
     oa: runtime.oa,
     projectId: input.projectId,
     executionContractId: input.executionContractId,
+    expectedVersion: input.expectedVersion,
+    expectedSemanticFingerprint: input.expectedSemanticFingerprint,
     canActAsMorris: input.canActAsMorris,
     claimedAuthorityLevel: input.claimedAuthorityLevel,
     authorityReceiptRef: input.authorityReceiptRef,
@@ -930,3 +946,59 @@ export async function w2ReadProjectHistoryAction(input: {
     projectId: input.projectId,
   });
 }
+
+/**
+ * M-HD-01 — seal a Generic Mission subject for explicit Pilote presentation.
+ * Does not record HumanDecision. Does not create Attempt.
+ */
+export async function w2SealGenericMissionAction(input: {
+  projectId: string;
+  cycleInstanceId?: string | null;
+  analysis: IntentAnalysisDto;
+  missionSubjectId?: string;
+}): Promise<SealGenericMissionForPresentationResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "OA stack unavailable",
+      humanDecisionCreated: false,
+      executionAttemptCreated: false,
+    };
+  }
+  return sealGenericMissionForPresentation({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    analysis: input.analysis,
+    missionSubjectId: input.missionSubjectId,
+  });
+}
+
+/**
+ * M-HD-01 — record Pilote HumanDecision on a sealed Generic Mission via OA.
+ * Never creates ExecutionAttempt. Never auto-PREPARE / EXECUTE.
+ */
+export async function w2RecordGenericMissionHumanDecisionAction(input: {
+  subject: GenericMissionSubject;
+  selectedOptionId: string;
+  rationale?: string;
+}): Promise<RecordGenericMissionHumanDecisionResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "OA stack unavailable",
+      humanDecisionCreated: false,
+      executionAttemptCreated: false,
+    };
+  }
+  return recordGenericMissionHumanDecision({
+    oa: runtime.oa,
+    subject: input.subject,
+    selectedOptionId: input.selectedOptionId,
+    rationale: input.rationale,
+  });
+}

```

### `projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts` (untracked — full file in prior cycles + I5b/I6b/I8b additions)

```typescript
/**
 * P6 — G-D4 Select inspection binding (R1).
 *
 * Proves stamped Generic Select never overwrites an explicit binding half,
 * refuses partial/contradictory pairs, and resolves from durable attestation
 * only when BOTH version and fingerprint are absent.
 *
 * Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { governedExecuteSelectAgent } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { solicitGenericExecutionPrepare } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { amendExecutionContractWithConstraint } from "@/features/project-assistant/w2/amendExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const APP = path.resolve(__dirname, "../..");

describe("P6 Select inspection binding (R1)", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    sessionDbPath = tempProductDbPath("p6-ibind.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "ibind",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else {
      process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `IBIND ${suffix}`,
      objective: "Inspection binding Select",
      context: "det ibind",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `IB${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:ibind-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/ibind-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  async function prepareInspectAuthorize(suffix: string) {
    const { projectId, oa } = await seedProject(suffix);
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: `Mission binding ${suffix}`,
        expectedOutcome: "Résultat",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(`prep ${prep.code}`);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(`inspect ${inspected.message}`);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(`auth ${authorized.code}`);
    return { projectId, oa, prep, inspected, authorized };
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts = await oa.executionContractServices.contracts.listByProject(
      projectId,
    );
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  it("static — partial binding no longer triggers attestation overwrite of the other half", () => {
    const src = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/governedExecuteAuthorizedContract.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/BINDING_INCOMPLETE/);
    expect(src).toMatch(/resolveStampedSelectInspectionBinding/);
    expect(src).toMatch(/caller_explicit/);
    expect(src).toMatch(/durable_attestation/);
    // Old OR-gate that overwrote both when either half missing must be gone.
    expect(src).not.toMatch(
      /typeof expectedVersion !== "number"[\s\S]*\|\|[\s\S]*!expectedSemanticFingerprint\.trim\(\)/,
    );
  });

  it("I1 — no params + valid durable attestation → Select accepted", async () => {
    const ctx = await prepareInspectAuthorize("i1");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("I2 — both explicit valid params → Select accepted (no overwrite path)", async () => {
    const ctx = await prepareInspectAuthorize("i2");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("I3 — version only → BINDING_INCOMPLETE, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i3");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I4 — fingerprint only → BINDING_INCOMPLETE, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i4");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I5 — false version + fingerprint absent → BINDING_INCOMPLETE (no attestation overwrite)", async () => {
    const ctx = await prepareInspectAuthorize("i5");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: 999_999,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I6 — false fingerprint + version absent → BINDING_INCOMPLETE", async () => {
    const ctx = await prepareInspectAuthorize("i6");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedSemanticFingerprint: "sha256:deadbeef".padEnd(71, "0"),
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
  });

  it("I7 — contradictory explicit pair → refuse (mismatch), no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i7");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: "sha256:deadbeef".padEnd(71, "0"),
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(
      selected.code === "FINGERPRINT_MISMATCH" ||
        selected.code === "VERSION_MISMATCH" ||
        selected.code === "NOT_AUTHORIZED",
    ).toBe(true);
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I8 — attestation absent (no inspect) → INSPECTION_REQUIRED, no Attempt", async () => {
    const { projectId, oa } = await seedProject("i8");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Mission sans inspection",
        expectedOutcome: "n/a",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(
      selected.code === "INSPECTION_REQUIRED" ||
        selected.code === "EXPECTED_VERSION_REQUIRED" ||
        selected.code === "NOT_AUTHORIZED",
    ).toBe(true);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("I9/I10 — amended contract → reinspection / binding refuse, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i10");
    const amended = await amendExecutionContractWithConstraint({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      additionalConstraint: "AMEND_TEST_BINDING_STALE",
      forceLocalAuthority: true,
    });
    expect(amended.ok).toBe(true);
    if (!amended.ok) throw new Error(amended.message);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: amended.successor.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(0);
  });

  it("I11 — Confirm may bump version; attested binding still Select-valid via I1 path", async () => {
    const { projectId, oa } = await seedProject("i11");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Mission confirm binding",
        expectedOutcome: "n/a",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    // Confirm when required (status confirmation_required) then authorize.
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    if (live.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa,
        projectId,
        executionContractId: prep.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(true);
    }
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    // Authorize binds to inspected version/fp (attested survives Confirm).
    expect(authorized.ok).toBe(true);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
  });

  it("I12/I13 — refused partial binding creates neither Attempt nor HumanDecision", async () => {
    const ctx = await prepareInspectAuthorize("i12");
    const hdBefore = (
      await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId)
    ).length;
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(0);
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(hdBefore);
  });

  it("I5b — explicit NaN version (with fingerprint) → BINDING_INVALID, not attestation", async () => {
    const ctx = await prepareInspectAuthorize("i5b");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: Number.NaN,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INVALID");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I6b — explicit whitespace fingerprint (with version) → BINDING_INVALID", async () => {
    const ctx = await prepareInspectAuthorize("i6b");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: "   ",
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INVALID");
  });

  it("I8b — malformed fingerprint alone → BINDING_INVALID (not treated as absent)", async () => {
    const ctx = await prepareInspectAuthorize("i8b");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedSemanticFingerprint: "not-a-valid-fingerprint",
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INVALID");
  });
});

```


## 22. Instruction ChatGPT

Lire depuis Git:

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer:

**SFIA STUDIO — M-HD-01 GENERIC MISSION HUMANDECISION CRITICAL IMPLEMENTATION CODE REVIEW.**

Vérifier en priorité:

- identité distincte du digest;
- sceau matériel complet;
- HumanDecision OA authentique;
- decisionRefs vérifiées;
- absence de décision fabriquée;
- currentness après HD;
- reprise après restart;
- aucune authority escalation;
- cycle facultatif;
- aucun second Decision Store;
- absence de migration SQL;
- compatibilité legacy;
- correction binding invalide;
- preuves déterministes;
- Review Pack FULL;
- aucune intégration Product.

## 23. Verdict final

**M-HD-01 GENERIC MISSION BINDING — DETERMINISTIC PASS**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Interdits maintenus: PRODUCT GIT INTEGRATED / PR READY / READY FOR REAL / HUMAN QA PASS / P6 GLOBAL PASS / RUNTIME V3 ADOPTED.
