# SFIA Review Pack FULL — AKG-M5 / L3-S2
## Integrated A+B + Slice D — R1/R2/R3 Final Consent Consolidation

**Horodatage (UTC):** 2026-10-31T23:01:03Z
**Profil:** CRITICAL · Cycle 8+9 · V3-F05 · L3-S2 OPEN
**GO:** Correction locale R1/R2/R3 — pas push/PR projet — pas LIVE

---
## 1. Horodatage
- Pack: `2026-10-31T23:01:03Z`
- Delivery: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01`
- Prior handoff tip/blob: `66f707c1…` / `7204490d…`

## 2. Git Truth
| Item | Value |
|------|-------|
| Branch | `feat/akg-m5-lumen-cog-prepare-corr-01` |
| HEAD | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| origin/main | equal |
| Staged | empty |
| Dirty | A+B+D+R1/R2/R3 uncommitted (preserved) |
| Project push | NONE |
| Runtime :3020 | UNTOUCHED |

## 3. GO Morris
Corriger R1 (model≠consent), R2 (offer binding), R3 (anti-doublon BEHAVIOR PROVEN). Même chantier. Pas de moteur parallèle.

## 4–6. Convergence / Decision Pack / Trajectoire
Template/Build Doctrine/Roadmap/C1/M5/V3 30–35/PRR 03/06/07/08/09/handoff FULL — READ. Option B+D KEEP/ADAPT. Exit: R1–R3 DET proven.

## 7. R23 — call sites CURRENT
```
isChatFirstPrepareAcceptGo — Pilote lexical ONLY (candidate ignored)
resolveChatFirstGenericPrepareGo — priority: refuse → offer-bind → explicit → no_go
resolvePositivePrepareAdmissionEvidence — expectedFingerprint blocks E-EXPLICIT bypass
solicitGenericExecutionPrepare — common gate; E-OFFER rebinds mission from offer
buildIntentAnalysisFromSolicitedMission — path-like scopeIn for missionKey parity
F1 queue/finalize + F2 — requirePositivePilotAdmission:true (hardcoded)
```

## 8–10. Reproduction R1 / R2 / R3
- **R1:** candidate.accept + « Merci » + CURRENT offer → was GO via isChatFirstPrepareAcceptGo.
- **R2:** « OK, prépare le contrat que tu viens de proposer » → explicit_lexical before offer-bind.
- **R3:** missionKey F1 (empty scopeIn) ≠ F2 (path scopeIn) → 2 EC; CONTRACT_ALREADY_EXISTS unused.

## 11. Stratégie
KEEP Product architecture. ADAPT admission validation + mission scopeIn parity. COMPLETE QA T1–T18. No new OA/store/regex family.

## 12. Corrections R1/R2
- R1: `pilotDecisionCandidate` voided in isChatFirstPrepareAcceptGo; DET marker strip for lexical OK.
- R2: offer bind before explicit when accept OR (explicit∧refsOffer); narrow refsOffer; expectedFingerprint → EXPECTED_OFFER_BINDING_REQUIRED blocks E-EXPLICIT.

## 13. Correction / preuve R3
- Path-like scope → scopeIn in buildIntentAnalysisFromSolicitedMission (not for read_only/none).
- T13/T14/T15/T18 SQLite: F1↔F2 same subject → **1 EC**, 0 Attempt, HD false. Promise.all concurrent covered.
- Reserve: adversarial interleaving outside same missionKey still not universal EXACTLY-ONCE.

## 14–18. Tests / SHE / Axe A
positivePrepareAdmission T1–T18; lumenCog; corrA1b01; NAP; gD4; der16; toolFirst. SHE PREPARE→INSPECT→Exécuter preserved. Axis A non-régressé.

## 19. Fichiers
- Product: `prepareGenericExecutionContractDraft.ts` (+ prior orchestrateTurn/F2 A+B+D)
- Tests: `positivePrepareAdmission.d0.test.ts` (R1/R2/R3)
- Prior A+B dirty preserved

## 20. Contenu COMPLET — positivePrepareAdmission.d0.test.ts
```typescript
/**
 * Option B / Slice D — Positive Product Admission for Generic PREPARE.
 * Deterministic only — ZERO OpenAI LIVE — ZERO Cursor REAL — ZERO campaign DB.
 *
 * @vitest-environment node
 */
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  isChatFirstPrepareAcceptGo,
  resolveChatFirstGenericPrepareGo,
  resolvePositivePrepareAdmissionEvidence,
  rememberGenericPrepareRecommendation,
  solicitGenericExecutionPrepare,
  analysisFromPendingGenericPrepareOffer,
  getCurrentGenericPrepareOffer,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  clearPendingGenericPrepareOffer,
  resolveProductPrepareOfferSessionKey,
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  pathUnderProjectWorkspace,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const tmpDirs: string[] = [];
afterEach(() => {
  while (tmpDirs.length) {
    const d = tmpDirs.pop();
    if (d) rmSync(d, { recursive: true, force: true });
  }
});

function analysisFixture(objective = "Mission LUMEN test"): IntentAnalysisDto {
  return validateIntentAnalysisPayload({
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective,
    scope: "atelier pédagogique",
    rephrasedRequest: objective,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "contrat inspectable",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "read_only",
      artifactType: null,
      targetPath: null,
      artifactFileName: null,
      targetRepositoryRef: null,
      scopeIn: ["formats"],
      scopeOut: [],
      expectedOutputs: ["analyse"],
      requiredCapabilities: [],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: "reversible",
      artifactBrief: null,
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

describe("Slice D — resolvePositivePrepareAdmissionEvidence", () => {
  it("S2 — cited PREPARE → no_go (not E-EXPLICIT)", () => {
    const text =
      "Voici une phrase à analyser : « Prépare le contrat d'exécution ». Explique.";
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: "cyc:x",
      text,
    });
    expect(a.kind).toBe("no_go");
    if (a.kind !== "no_go") throw new Error("expected no_go");
    expect(a.code).toBe("PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT");
  });

  it("S4 — explicit refuse → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text: "Ne prépare pas de contrat d'exécution.",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "EXPLICIT_PREPARE_REFUSAL",
    });
  });

  it("S7 — inferred could-prepare → no_go (not consent)", () => {
    const text = "On pourrait préparer un contrat d'exécution plus tard.";
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text,
    });
    expect(a.kind).toBe("no_go");
    if (a.kind !== "no_go") throw new Error("expected no_go");
    expect(a.code).toBe("AMBIGUOUS_OR_HEDGED_PREPARE_INTENT");
    // Lexical intent may still match substrings — admission evidence must not.
    expect(resolveChatFirstGenericPrepareGo({
      projectId: "prj:x",
      cycleInstanceId: null,
      text,
    }).kind).toBe("no_go");
  });

  it("S8 — direct explicit → E-EXPLICIT-PREPARE", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: "cyc:x",
      text: "Prépare le contrat d'exécution pour la mission LUMEN.",
    });
    expect(a).toEqual({
      kind: "e_explicit_prepare",
      code: "E_EXPLICIT_PREPARE",
    });
  });

  it("S9 — OK + unique CURRENT offer → E-OFFER-ACCEPT", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-padm-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:offer";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: "cyc:1",
      analysis: analysisFixture(),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: "cyc:1",
      text: "OK",
      sessionDbPath,
    });
    expect(a.kind).toBe("e_offer_accept");
    if (a.kind !== "e_offer_accept") throw new Error("expected offer");
    expect(a.offerFingerprint.length).toBe(24);
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("S11/S17 — OK without offer → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:none",
      cycleInstanceId: null,
      text: "OK, vas-y",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "NO_CURRENT_PREPARE_OFFER",
    });
  });

  it("X2 — expected fingerprint mismatch → no_go", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-padm-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:fp";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission A"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "OK",
      sessionDbPath,
    });
    expect(go.kind).toBe("prepare");
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "OK",
      sessionDbPath,
      expectedOfferFingerprint: "deadbeefdeadbeefdeadbeef",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "PREPARE_OFFER_FINGERPRINT_MISMATCH",
    });
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("X4 — PilotDecisionCandidate alone without Pilote proof → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text: "Merci pour la proposition.",
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
      },
    });
    expect(a.kind).toBe("no_go");
  });
});

describe("Slice D R1 — model candidate ≠ consent", () => {
  it("T1 — CURRENT offer + Merci + model accept → no_go", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r1-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r1t1";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission offerte A"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    expect(
      isChatFirstPrepareAcceptGo({
        text: "Merci pour cette proposition.",
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
        },
      }),
    ).toBe(false);
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "Merci pour cette proposition.",
      sessionDbPath,
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
      },
    });
    expect(go.kind).toBe("no_go");
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "Merci pour cette proposition.",
      sessionDbPath,
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
      },
    });
    expect(a.kind).toBe("no_go");
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T2 — CURRENT offer + Merci + model refuse → no_go", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r1-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r1t2";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture(),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "Merci pour cette proposition.",
      sessionDbPath,
      pilotDecisionCandidate: {
        disposition: "refuse",
        targetKind: "current_recommendation",
      },
    });
    expect(go.kind).toBe("no_go");
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T3 — CURRENT offer + Pilote OK → E-OFFER", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r1-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r1t3";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission unique"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "OK",
      sessionDbPath,
    });
    expect(a.kind).toBe("e_offer_accept");
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T4 — empty / non-positive Pilote + model accept → no_go", () => {
    expect(
      resolvePositivePrepareAdmissionEvidence({
        projectId: "prj:r1t4",
        cycleInstanceId: null,
        text: "",
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
        },
      }).kind,
    ).toBe("no_go");
  });
});

describe("Slice D R2 — offer subject binding", () => {
  it("T6 — OK prepare proposed contract → E-OFFER bound (not E-EXPLICIT)", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r2-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r2t6";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission offre A — formats LUMEN"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const offer = getCurrentGenericPrepareOffer(projectId, { sessionDbPath });
    expect(offer).toBeTruthy();
    const text =
      "OK, prépare le contrat d'exécution que tu viens de proposer.";
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text,
      sessionDbPath,
    });
    expect(go.kind).toBe("prepare");
    if (go.kind !== "prepare") throw new Error("expected prepare");
    expect(go.offerFingerprint).toBe(offer!.offerFingerprint);
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text,
      sessionDbPath,
    });
    expect(a).toEqual({
      kind: "e_offer_accept",
      offerFingerprint: offer!.offerFingerprint,
      code: "E_OFFER_ACCEPT",
    });
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T8 — accepted offer A; rebound analysis is A (model mission B never substitutes)", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r2-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r2t8";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission offre A"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const offer = getCurrentGenericPrepareOffer(projectId, { sessionDbPath })!;
    const admission = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "OK, prépare le contrat d'exécution que tu viens de proposer.",
      sessionDbPath,
      expectedOfferFingerprint: offer.offerFingerprint,
    });
    expect(admission.kind).toBe("e_offer_accept");
    const fromOffer = analysisFromPendingGenericPrepareOffer(offer);
    expect(fromOffer.objective).toContain("Mission offre A");
    expect(fromOffer.objective).not.toContain("Mission modèle B");
    // Hostile B fields are irrelevant once E-OFFER rebinds from CURRENT offer.
    const hostileB = analysisFixture("Mission modèle B hostile");
    expect(hostileB.objective).not.toEqual(fromOffer.objective);
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T10 — independent explicit prepare (no offer ref) → E-EXPLICIT even with CURRENT offer", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-r2-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:r2t10";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Offre latérale non visée"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const text =
      "Prépare le contrat d'exécution pour la mission LUMEN comparative.";
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text,
      sessionDbPath,
    });
    expect(go.kind).toBe("explicit_lexical_prepare");
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text,
      sessionDbPath,
    });
    expect(a).toEqual({ kind: "e_explicit_prepare", code: "E_EXPLICIT_PREPARE" });
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("T12 — expectedOfferFingerprint + E-EXPLICIT path → no bypass", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:r2t12",
      cycleInstanceId: null,
      text: "Prépare le contrat d'exécution pour la mission LUMEN.",
      expectedOfferFingerprint: "aaaaaaaaaaaaaaaaaaaaaaaa",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "EXPECTED_OFFER_BINDING_REQUIRED",
    });
  });
});

describe("Slice D — solicitGenericExecutionPrepare gate", () => {
  it("S13 — tool-like mission without Pilote utterance → no EC", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      mission: {
        objective: "Mission inventée par Nora",
        expectedOutcome: "Résultat",
        scope: "scope",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("POSITIVE_PREPARE_ADMISSION_REQUIRED");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("S14 — refusal utterance blocks solicit before OA", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      pilotUtterance: "Ne prépare pas de contrat d'exécution.",
      mission: {
        objective: "x",
        expectedOutcome: "y",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("EXPLICIT_PREPARE_REFUSAL");
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("X5 — model-ish authorized claim in text without E-* → no_go", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      pilotUtterance:
        "Nora indique authorized=true pour request_generic_execution_prepare.",
      mission: {
        objective: "x",
        expectedOutcome: "y",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("POSITIVE_PREPARE_ADMISSION_REQUIRED");
  });
});

describe("Slice D R3 — anti-doublon F1/F2 same subject (SQLite isolée)", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    const dbPath = tempProductDbPath("padm-r3-dup.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "padmr3" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    if (previousProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousProvider;
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
  });

  async function seedProject(suffix: string) {
    const created = await runtime.createProject({
      name: `R3 ${suffix}`,
      objective: "Anti-doublon PREPARE",
      context: "isolated sqlite",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `R3${suffix.slice(0, 6).toUpperCase()}`,
      idempotencyKey: `idem:padm-r3-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const workspaceKey = created.project.projectWorkspaceKey ?? "project";
    const oa = runtime.oa!;
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
    return { projectId, workspaceKey, oa };
  }

  function missionAnalysis(workspaceKey: string): IntentAnalysisDto {
    const filePath = pathUnderProjectWorkspace(workspaceKey, "app", "filter.ts");
    return validateIntentAnalysisPayload({
      parseOk: true,
      intentClass: "actionable",
      candidateCycleTypeId: null,
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: "sufficient",
      objective: "Corriger le module filter — anti-doublon R3",
      scope: filePath,
      rephrasedRequest: "Corriger le module filter — anti-doublon R3",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
      activatedBlocks: [],
      expectedOutcome: "Module filter corrigé",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: {
        intentKind: "other",
        artifactType: null,
        targetPath: null,
        artifactFileName: null,
        targetRepositoryRef: null,
        scopeIn: [filePath],
        scopeOut: [],
        expectedOutputs: ["correction"],
        requiredCapabilities: [],
        validationExpectations: [],
        evidenceRequirements: [],
        requestedOperation: null,
        reversibilityExpectation: "reversible",
        artifactBrief: null,
        contentRequirements: [],
        exitRequirementKinds: [],
      },
    });
  }

  async function counts(oa: NonNullable<RuntimeApplicationService["oa"]>, projectId: string) {
    const contracts = await oa.executionContractServices.contracts.listByProject(projectId);
    let attemptCount = 0;
    for (const c of contracts) {
      const listed = await oa.executionAttemptServices.attempts.listByContract(
        c.executionContractId,
      );
      attemptCount += listed.length;
    }
    return {
      contracts,
      ecCount: contracts.length,
      ecIds: contracts.map((c) => c.executionContractId).sort(),
      attemptCount,
    };
  }

  it("T13 — F1-style mission then F2-style analysis same subject → single EC", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("t13");
    const analysis = missionAnalysis(workspaceKey);
    const utterance =
      "Prépare le contrat d'exécution pour corriger le module filter.";

    const f1 = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: analysis.objective!,
        expectedOutcome: analysis.expectedOutcome!,
        scope: analysis.scope!,
      },
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(f1.ok).toBe(true);
    if (!f1.ok) throw new Error(f1.message);

    const f2 = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(f2.ok).toBe(true);
    if (!f2.ok) throw new Error(f2.message);

    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(1);
    expect(c.ecIds).toEqual([f1.executionContractId]);
    expect(f2.executionContractId).toBe(f1.executionContractId);
    expect(c.attemptCount).toBe(0);
    expect(f1.humanDecisionCreated).toBe(false);
    expect(f2.humanDecisionCreated).toBe(false);
    expect(f1.executionAttemptCreated).toBe(false);
    expect(f2.executionAttemptCreated).toBe(false);
  });

  it("T14 — F2 then F1 same subject → single EC", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("t14");
    const analysis = missionAnalysis(workspaceKey);
    const utterance =
      "Prépare le contrat d'exécution pour corriger le module filter.";

    const f2 = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(f2.ok).toBe(true);
    if (!f2.ok) throw new Error(f2.message);

    const f1 = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: analysis.objective!,
        expectedOutcome: analysis.expectedOutcome!,
        scope: analysis.scope!,
      },
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(f1.ok).toBe(true);
    if (!f1.ok) throw new Error(f1.message);

    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(1);
    expect(f1.executionContractId).toBe(f2.executionContractId);
    expect(c.attemptCount).toBe(0);
  });

  it("T15 — concurrent solicit same subject → single EC (Promise.all)", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("t15");
    const analysis = missionAnalysis(workspaceKey);
    const utterance =
      "Prépare le contrat d'exécution pour corriger le module filter.";
    const common = {
      oa,
      projectId,
      cycleInstanceId: null as string | null,
      pilotUtterance: utterance,
      requirePositivePilotAdmission: true as const,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    };
    const [a, b] = await Promise.all([
      solicitGenericExecutionPrepare({
        ...common,
        mission: {
          objective: analysis.objective!,
          expectedOutcome: analysis.expectedOutcome!,
          scope: analysis.scope!,
        },
      }),
      solicitGenericExecutionPrepare({
        ...common,
        analysis,
      }),
    ]);
    expect(a.ok).toBe(true);
    expect(b.ok).toBe(true);
    if (!a.ok || !b.ok) throw new Error("expected both ok");
    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(1);
    expect(a.executionContractId).toBe(b.executionContractId);
    expect(c.attemptCount).toBe(0);
  });

  it("T18 — SQLite: no Attempt / no auto HD on duplicate-safe prepare", async () => {
    const { projectId, workspaceKey, oa } = await seedProject("t18");
    const analysis = missionAnalysis(workspaceKey);
    const r = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      pilotUtterance:
        "Prépare le contrat d'exécution pour corriger le module filter.",
      requirePositivePilotAdmission: true,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) throw new Error(r.message);
    const c = await counts(oa, projectId);
    expect(c.ecCount).toBe(1);
    expect(c.attemptCount).toBe(0);
    expect(r.humanDecisionCreated).toBe(false);
    expect(r.executionAttemptCreated).toBe(false);
    const contract = c.contracts[0]!;
    expect(contract.decisionRefs ?? []).toEqual([]);
  });
});

```

## 21. Diffs COMPLETS Product (vs HEAD baseline)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 9ca5fa01..2aa545a3 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -2436,6 +2436,12 @@ export async function orchestrateAssistantSend(input: {
         projectId: project.projectId,
         cycleInstanceId: activeId,
         analysis: prepareAnalysis,
+        // Option B / Slice D — same positive admission gate as Nora finalize.
+        pilotUtterance: content,
+        pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        requirePositivePilotAdmission: true,
+        expectedOfferFingerprint:
+          prepareGo.kind === "prepare" ? prepareGo.offerFingerprint : null,
         forceLocalAuthority:
           process.env.VITEST === "true" ||
           process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8c9f335c..028fd8de 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -486,6 +486,16 @@ export async function orchestrateProjectAssistantTurn(input: {
       readonly irreversible?: boolean;
     };
   } | null = null;
+  /**
+   * Admission class captured at tool queue — revalidated at finalize (Slice D).
+   * Box avoids TS control-flow treating callback assignments as unreachable.
+   */
+  const pendingGenericPrepareAdmission: {
+    current: {
+      readonly kind: "e_offer_accept" | "e_explicit_prepare";
+      readonly offerFingerprint: string | null;
+    } | null;
+  } = { current: null };
   let genericPrepareTurnFinalize:
     | {
         readonly ok: boolean;
@@ -569,6 +579,30 @@ export async function orchestrateProjectAssistantTurn(input: {
               import("@/lib/vertical-slice-runtime"),
               import("./w2/prepareGenericExecutionContractDraft"),
             ]);
+          // Option B / Slice D — Nora tool may solicit, never admit.
+          // Positive E-OFFER / E-EXPLICIT required before queue (honest tool result).
+          const admission =
+            prepareMod.resolvePositivePrepareAdmissionEvidence({
+              projectId: project.projectId,
+              cycleInstanceId:
+                project.activeCycleInstanceId?.trim() || null,
+              text: content,
+              sessionDbPath: input.sessionDbPath,
+            });
+          if (admission.kind === "no_go") {
+            return {
+              ok: false as const,
+              code: admission.code,
+              message:
+                admission.code === "EXPLICIT_PREPARE_REFUSAL"
+                  ? "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé."
+                  : admission.code === "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
+                    ? "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé."
+                    : "Sollicitation PREPARE refusée — aucune preuve positive Pilote (E-OFFER-ACCEPT / E-EXPLICIT-PREPARE). Nora ≠ consentement. Aucun EC n'a été créé.",
+              humanDecisionCreated: false as const,
+              executionAttemptCreated: false as const,
+            };
+          }
           const oa = getRuntimeApplicationService().oa;
           if (!oa) {
             return {
@@ -587,6 +621,13 @@ export async function orchestrateProjectAssistantTurn(input: {
             repositoryMutation: args.repositoryMutation,
             impactSignals: args.impactSignals,
           };
+          pendingGenericPrepareAdmission.current = {
+            kind: admission.kind,
+            offerFingerprint:
+              admission.kind === "e_offer_accept"
+                ? admission.offerFingerprint
+                : null,
+          };
           return prepareMod.queueGenericPrepareForTurnFinalization();
         },
       },
@@ -1365,11 +1406,19 @@ export async function orchestrateProjectAssistantTurn(input: {
             message: "OA runtime indisponible pour finaliser Generic PREPARE.",
           };
         } else {
+          const queuedAdmission = pendingGenericPrepareAdmission.current;
           const finalized = await prepareMod.solicitGenericExecutionPrepare({
             oa: oaPrep,
             projectId: project.projectId,
             cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
             mission: pendingGenericPrepareMission,
+            // Option B / Slice D — revalidate positive Pilote admission at write.
+            pilotUtterance: content,
+            requirePositivePilotAdmission: true,
+            expectedOfferFingerprint:
+              queuedAdmission && queuedAdmission.kind === "e_offer_accept"
+                ? queuedAdmission.offerFingerprint
+                : null,
             sessionDbPath: input.sessionDbPath,
             forceLocalAuthority:
               process.env.VITEST === "true" ||
@@ -1392,6 +1441,7 @@ export async function orchestrateProjectAssistantTurn(input: {
         }
       }
       pendingGenericPrepareMission = null;
+      pendingGenericPrepareAdmission.current = null;
       // Studio prepare-fail notice is typed below (CORR-NAP-02) — not inlined here.
     }

@@ -1517,6 +1567,9 @@ export async function orchestrateProjectAssistantTurn(input: {
     const durableBuilt = buildDurableAssistantContentForTurn({
       pilotFacingCore: assistantText,
       presentation: coherentEarly?.presentation ?? null,
+      // Positive complementary provenance — never infer from narrative shape alone.
+      conversationGuidanceStatement:
+        coherentEarly?.conversationGuidance?.statement ?? null,
     });
     assistantText = durableBuilt.contentCore;

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 4b370302..8abe3b42 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -87,12 +87,159 @@ export type GenericMissionPrepareReadiness = {
   readonly missingFields: readonly string[];
 };

+type PrepareSpeechAct = {
+  readonly kind: "refuse" | "authorize";
+  readonly index: number;
+};
+
+const PREPARE_REFUSAL_PATTERNS: readonly RegExp[] = [
+  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+(surtout\s+)?pas\b[\s\S]{0,80}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+rien\b[\s\S]{0,60}\b(cursor|contrat|mission|exécution|execution)\b/giu,
+  /\b(refuse|refus\w*)\b[\s\S]{0,60}\b(pr[ée]par\w*|cr[ée]er?|cr[ée]e)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ne\s+)?(cr[ée]e|creer|créer|crée)\s+(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\bsans\s+(cr[ée]er?|créer|crée)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\b(pas|sans|aucune?|aucun)\s+(de\s+|d[''])?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
+  /\bsans\s+(préparer|preparer|prepare)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\b(ne\s+)?(veux|veut|souhait\w*|lance|lancer)\s+pas\b[\s\S]{0,60}\b(contrat|mission(\s+(technique|d['']exécution|cursor))?|cursor)\b/giu,
+  /\b(analyse|cadrage|proposition)\s+seulement\b[\s\S]{0,80}\bsans\b[\s\S]{0,60}\b(contrat|mission|exécution|execution|cursor)\b/giu,
+  /\bsans\s+(lancer|préparer|preparer|prepare)\b[\s\S]{0,40}\b(mission|contrat|cursor|exécution|execution)\b/giu,
+  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,80}\bpas\s+(de\s+|un\s+|une\s+)?(contrat|executioncontract|execution contract)\b/giu,
+  /\bmais\s+(ne\s+)?(prépare|prepare|crée|creer|créer)\b[\s\S]{0,40}\b(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|mission)\b/giu,
+  /\b(finalement|non)\s*[,:]?\s*(ne\s+)?(le\s+)?(prépare|prepare|préparer|preparer)\s+pas\b/giu,
+];
+
+/** Positive PREPARE authorize acts (not EXECUTE). Temporal last-act wins vs refuse. */
+const PREPARE_AUTHORIZE_PATTERNS: readonly RegExp[] = [
+  /\b(maintenant|désormais|cette\s+fois|finalement|plutôt)\b[\s\S]{0,60}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(le\s+|un\s+|une\s+)?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
+];
+
+/**
+ * Remove citations, code, and reported/example frames so quoted PREPARE
+ * commands are not treated as current Pilote consent.
+ * Deterministic span masking — not a general French NLP parser.
+ */
+export function stripNonAuthoritativePrepareSpans(text: string): string {
+  let t = text;
+  // Fenced / inline code
+  t = t.replace(/```[\s\S]*?```/g, " ");
+  t = t.replace(/`[^`]*`/g, " ");
+  // Explicit citation delimiters only — never ASCII/typographic apostrophes
+  // used in French (d'exécution, l'analyse), which would erase refuse/authorize acts.
+  t = t.replace(/«[^»]*»/g, " ");
+  t = t.replace(/"[^"]*"/g, " ");
+  t = t.replace(/“[^”]*”/g, " ");
+  t = t.replace(/‘[^’]*’/g, " ");
+  // Reported / documentary / pedagogical frames introducing a command.
+  t = t.replace(
+    /\b(voici une phrase à analyser|phrase à analyser|que signifie(?:t|-elle| cette)?|explique(?:r)? (?:ce qu['']elle|cette|la)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|par exemple\s*:|nora m['']a proposé(?: de)?|tu (?:m['']as|as) (?:dit|proposé)(?: de)?|elle a (?:dit|proposé)(?: de)?|il a (?:dit|proposé)(?: de)?)\b[\s\S]{0,160}/giu,
+    " ",
+  );
+  return t.replace(/\s+/g, " ").trim();
+}
+
+/**
+ * True when the utterance is primarily analysis / discussion of a PREPARE
+ * phrase rather than a current instruction to prepare.
+ */
+export function isPrepareMetaAnalysisOrCitationFrame(text: string): boolean {
+  const raw = text.trim();
+  if (!raw) return false;
+  const hasMeta =
+    /\b(phrase à analyser|que signifie|explique(?:r)? (?:ce qu['']elle|cette)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|comprendre pourquoi|pour l['']instant[\s\S]{0,80}(seulement|analyse)|je voudrais comprendre)\b/iu.test(
+      raw,
+    );
+  if (!hasMeta) return false;
+  // After stripping citations, no remaining direct authorize → meta-only.
+  const cleaned = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
+  const acts = collectPrepareSpeechActsOn(cleaned);
+  return !acts.some((a) => a.kind === "authorize");
+}
+
+function collectPrepareSpeechActsOn(text: string): PrepareSpeechAct[] {
+  const acts: PrepareSpeechAct[] = [];
+  for (const re of PREPARE_REFUSAL_PATTERNS) {
+    re.lastIndex = 0;
+    let m: RegExpExecArray | null;
+    while ((m = re.exec(text)) !== null) {
+      acts.push({ kind: "refuse", index: m.index });
+      if (m.index === re.lastIndex) re.lastIndex += 1;
+    }
+  }
+  for (const re of PREPARE_AUTHORIZE_PATTERNS) {
+    re.lastIndex = 0;
+    let m: RegExpExecArray | null;
+    while ((m = re.exec(text)) !== null) {
+      // Skip authorize matches that are actually refusals
+      // ("prépare … pas … contrat", "surtout pas le contrat", …).
+      const slice = text.slice(m.index, m.index + Math.max(m[0].length, 80));
+      if (
+        /\b(surtout\s+)?pas\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/i.test(
+          slice,
+        ) ||
+        /\brien\b[\s\S]{0,40}\b(contrat|cursor|mission)\b/i.test(slice)
+      ) {
+        continue;
+      }
+      acts.push({ kind: "authorize", index: m.index });
+      if (m.index === re.lastIndex) re.lastIndex += 1;
+    }
+  }
+  acts.sort((a, b) => a.index - b.index);
+  return acts;
+}
+
+function collectPrepareSpeechActs(text: string): PrepareSpeechAct[] {
+  // Scan authoritative spans only (citations / code / reported frames removed).
+  return collectPrepareSpeechActsOn(stripNonAuthoritativePrepareSpans(text));
+}
+
+/**
+ * Last explicit PREPARE speech-act in the utterance (refuse | authorize).
+ * Chronology: later act wins. Citations do not count. Ambiguous → null.
+ */
+export function resolveLastExplicitPrepareSpeechAct(
+  text: string,
+): PrepareSpeechAct["kind"] | null {
+  const t = text.trim().toLowerCase();
+  if (!t) return null;
+  const acts = collectPrepareSpeechActs(t);
+  if (acts.length === 0) return null;
+  return acts[acts.length - 1]!.kind;
+}
+
+/**
+ * Explicit Pilote refusal of ExecutionContract PREPARE (TEST-15 / LUMEN).
+ * Fail-closed at Product admission — cognition may solicit, but refusal
+ * is never an authorization to PREPARE.
+ *
+ * Temporal rule: the **last** explicit refuse/authorize act in the message
+ * is the current intention. Earlier "maintenant prépare" does not neutralize
+ * a later "ne prépare pas".
+ */
+export function hasExplicitPrepareContractRefusal(text: string): boolean {
+  const t = text.trim().toLowerCase();
+  if (!t) return false;
+  const last = resolveLastExplicitPrepareSpeechAct(t);
+  if (last === "authorize") return false;
+  if (last === "refuse") return true;
+  return false;
+}
+
 /**
  * Explicit Pilote prepare-contract lexical intent (FR natural language).
  * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
+ * Explicit refusal outranks any positive substring match (TEST-15).
  */
 export function hasExplicitPrepareContractIntent(text: string): boolean {
-  const t = text.trim().toLowerCase();
+  const raw = text.trim();
+  if (!raw) return false;
+  if (hasExplicitPrepareContractRefusal(raw)) return false;
+  if (isPrepareMetaAnalysisOrCitationFrame(raw)) return false;
+  // Last authoritative act must be authorize (citations already stripped).
+  if (resolveLastExplicitPrepareSpeechAct(raw) !== "authorize") return false;
+  const t = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
   if (!t) return false;
   if (
     /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
@@ -119,34 +266,37 @@ export function hasExplicitPrepareContractIntent(text: string): boolean {
 }

 /**
- * Lexical / structured accept of a CURRENT prepare recommendation only.
+ * Lexical accept of a CURRENT prepare recommendation only.
  * Never an execution GO. Never authoritative alone — requires pending offer.
+ *
+ * Slice D R1 — PilotDecisionCandidate (model INTENT CANDIDATE) is NEVER
+ * sufficient admission evidence. Parameter retained for call-site stability
+ * and is intentionally ignored for the GO decision.
  */
 export function isChatFirstPrepareAcceptGo(input: {
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
 }): boolean {
-  const candidate = input.pilotDecisionCandidate ?? null;
-  if (
-    candidate?.disposition === "accept" &&
-    (candidate.targetKind === "current_recommendation" ||
-      candidate.targetKind === "presented_subject")
-  ) {
-    return true;
-  }
+  void input.pilotDecisionCandidate;
+  if (hasExplicitPrepareContractRefusal(input.text)) return false;
   const t = input.text.trim().toLowerCase();
   if (!t) return false;
+  // Strip DET harness markers — never treat model DTO as accept (R1).
+  const cleaned = t
+    .replace(/\b__[a-z0-9_]+__\b/gi, " ")
+    .replace(/\s+/g, " ")
+    .trim();
   // Short acceptives — only meaningful when a CURRENT prepare offer exists.
   if (
     /^(ok|oui|vas[- ]y|vasy|go|d['']accord|ok vas[- ]y|ok,?\s*vas[- ]y)[\s.!]*$/i.test(
-      t,
+      cleaned,
     )
   ) {
     return true;
   }
   if (
     /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(pr[ée]pare|cursor|contrat|mission)\b/.test(
-      t,
+      cleaned,
     )
   ) {
     return true;
@@ -154,10 +304,28 @@ export function isChatFirstPrepareAcceptGo(input: {
   return false;
 }

+/**
+ * Pilote utterance references a CURRENT prepare proposal/offer (not a new
+ * independent mission). Narrow — not a new NLP family; binds R2 subject.
+ */
+export function referencesCurrentPrepareOffer(text: string): boolean {
+  // Narrow — "pour cette mission" alone is often an independent PREPARE target,
+  // not an accept of a CURRENT offer (lumenCog / T10).
+  return /\b(cette\s+proposition|cette\s+offre|cette\s+recommandation|que\s+tu\s+(viens\s+de\s+)?propos|le\s+contrat\s+(d['']exécution\s+)?que\s+tu|pour\s+cette\s+(proposition|offre|recommandation))\b/iu.test(
+    text,
+  );
+}
+
 /**
  * Server-side: bind Pilot GO to a unique CURRENT prepare offer.
  * Ambiguous concurrent governed subjects → clarification (caller checks).
  * No offer / historical only → no invented prepare.
+ *
+ * Contractual priority (R2):
+ * 1. Refuse / citation / hedge
+ * 2. Accept bound to CURRENT offer (incl. prepare+offer reference)
+ * 3. Independent explicit prepare (no offer reference)
+ * 4. no_go
  */
 export function resolveChatFirstGenericPrepareGo(input: {
   readonly projectId: string;
@@ -171,32 +339,184 @@ export function resolveChatFirstGenericPrepareGo(input: {
   | { readonly kind: "prepare"; readonly offerFingerprint: string }
   | { readonly kind: "explicit_lexical_prepare" }
   | { readonly kind: "no_go"; readonly reason: string } {
-  if (hasExplicitPrepareContractIntent(input.text)) {
-    return { kind: "explicit_lexical_prepare" };
+  // TEST-15 / LUMEN — explicit refusal is Product-side absence of consent.
+  if (hasExplicitPrepareContractRefusal(input.text)) {
+    return { kind: "no_go", reason: "explicit_prepare_refusal" };
   }
+  if (isPrepareMetaAnalysisOrCitationFrame(input.text)) {
+    return { kind: "no_go", reason: "prepare_citation_or_analysis_not_consent" };
+  }
+  // Slice D / S7 — suggestive hedges are not a current PREPARE instruction.
   if (
-    !isChatFirstPrepareAcceptGo({
-      text: input.text,
-      pilotDecisionCandidate: input.pilotDecisionCandidate,
-    })
+    /\b(on pourrait|nous pourrions|je pourrais|tu pourrais|peut[- ]être|éventuellement)\b[\s\S]{0,80}\b(prépare|prepare|préparer|preparer)\b/iu.test(
+      input.text,
+    )
   ) {
-    return { kind: "no_go", reason: "no_prepare_accept_signal" };
+    return { kind: "no_go", reason: "ambiguous_or_hedged_prepare_intent" };
   }
+
   const sessionKey = resolveProductPrepareOfferSessionKey({
     sessionKey: input.sessionKey,
     sessionDbPath: input.sessionDbPath,
   });
   const offer = getPendingGenericPrepareOffer(input.projectId, sessionKey);
-  if (!offer) {
+  const acceptLexical = isChatFirstPrepareAcceptGo({
+    text: input.text,
+    // R1 — candidate ignored; keep signature for callers.
+    pilotDecisionCandidate: input.pilotDecisionCandidate,
+  });
+  const refsOffer = referencesCurrentPrepareOffer(input.text);
+  const explicitPrepare = hasExplicitPrepareContractIntent(input.text);
+
+  // Priority 2 — bind CURRENT offer when Pilote accept or prepare+offer ref.
+  if (offer && (acceptLexical || (explicitPrepare && refsOffer))) {
+    if (offer.sessionKey !== sessionKey) {
+      return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
+    }
+    if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
+      return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
+    }
+    return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
+  }
+
+  // Offer referenced but missing / inapplicable → no silent E-EXPLICIT downgrade.
+  if (refsOffer && !offer) {
     return { kind: "no_go", reason: "no_current_prepare_offer" };
   }
-  if (offer.sessionKey !== sessionKey) {
-    return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
+  if (refsOffer && offer) {
+    // Accept/explicit+ref already handled; remaining = ambiguous reference.
+    if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
+      return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
+    }
+    if (offer.sessionKey !== sessionKey) {
+      return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
+    }
+  }
+
+  // Priority 3 — independent direct PREPARE (no CURRENT-offer subject binding).
+  if (explicitPrepare && !refsOffer) {
+    return { kind: "explicit_lexical_prepare" };
+  }
+
+  if (acceptLexical && !offer) {
+    return { kind: "no_go", reason: "no_current_prepare_offer" };
+  }
+
+  return { kind: "no_go", reason: "no_prepare_accept_signal" };
+}
+
+/**
+ * Option B / Slice D — positive Product admission evidence for PREPARE.
+ * Nora tool / model DTO / absence of refusal are NEVER sufficient alone.
+ *
+ * E-OFFER-ACCEPT — Pilote accept bound to unique CURRENT offer.
+ * E-EXPLICIT-PREPARE — narrow direct prepare speech-act (heuristic, fail-closed).
+ * E-UI-PREPARE — FUTURE / not implemented.
+ */
+export type PositivePrepareAdmissionEvidence =
+  | {
+      readonly kind: "e_offer_accept";
+      readonly offerFingerprint: string;
+      readonly code: "E_OFFER_ACCEPT";
+    }
+  | {
+      readonly kind: "e_explicit_prepare";
+      readonly code: "E_EXPLICIT_PREPARE";
+    }
+  | {
+      readonly kind: "no_go";
+      readonly code: string;
+      readonly reason: string;
+    };
+
+export function resolvePositivePrepareAdmissionEvidence(input: {
+  readonly projectId: string;
+  readonly cycleInstanceId: string | null;
+  readonly text: string;
+  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
+  readonly sessionKey?: string | null;
+  readonly sessionDbPath?: string | null;
+  /** When set (F2 offer-accept path), must still match CURRENT offer. */
+  readonly expectedOfferFingerprint?: string | null;
+}): PositivePrepareAdmissionEvidence {
+  const text = (input.text ?? "").trim();
+  if (!text) {
+    return {
+      kind: "no_go",
+      code: "POSITIVE_PREPARE_ADMISSION_REQUIRED",
+      reason: "missing_pilot_utterance",
+    };
+  }
+  const go = resolveChatFirstGenericPrepareGo({
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    text,
+    pilotDecisionCandidate: input.pilotDecisionCandidate,
+    sessionKey: input.sessionKey,
+    sessionDbPath: input.sessionDbPath,
+  });
+  const expected = input.expectedOfferFingerprint?.trim() || null;
+  // T12 / R2 — expected fingerprint forces offer binding; E-EXPLICIT cannot bypass.
+  if (expected && go.kind === "explicit_lexical_prepare") {
+    return {
+      kind: "no_go",
+      code: "EXPECTED_OFFER_BINDING_REQUIRED",
+      reason: "expected_fingerprint_blocks_explicit_bypass",
+    };
+  }
+  if (go.kind === "no_go") {
+    const code =
+      go.reason === "explicit_prepare_refusal"
+        ? "EXPLICIT_PREPARE_REFUSAL"
+        : go.reason === "prepare_citation_or_analysis_not_consent"
+          ? "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
+          : go.reason === "no_current_prepare_offer"
+            ? "NO_CURRENT_PREPARE_OFFER"
+            : go.reason === "prepare_offer_session_mismatch"
+              ? "PREPARE_OFFER_SESSION_MISMATCH"
+              : go.reason === "prepare_offer_cycle_mismatch"
+                ? "PREPARE_OFFER_CYCLE_MISMATCH"
+                : go.reason === "ambiguous_or_hedged_prepare_intent"
+                  ? "AMBIGUOUS_OR_HEDGED_PREPARE_INTENT"
+                  : go.reason === "no_prepare_accept_signal"
+                    ? "POSITIVE_PREPARE_ADMISSION_REQUIRED"
+                    : "POSITIVE_PREPARE_ADMISSION_REQUIRED";
+    return { kind: "no_go", code, reason: go.reason };
+  }
+  if (go.kind === "explicit_lexical_prepare") {
+    return { kind: "e_explicit_prepare", code: "E_EXPLICIT_PREPARE" };
+  }
+  if (expected && expected !== go.offerFingerprint) {
+    return {
+      kind: "no_go",
+      code: "PREPARE_OFFER_FINGERPRINT_MISMATCH",
+      reason: "expected_offer_fingerprint_mismatch",
+    };
+  }
+  // Re-read CURRENT offer — refuse if consumed / restarted / swapped.
+  const live = getCurrentGenericPrepareOffer(input.projectId, {
+    sessionKey: input.sessionKey,
+    sessionDbPath: input.sessionDbPath,
+  });
+  if (!live || live.offerFingerprint !== go.offerFingerprint) {
+    return {
+      kind: "no_go",
+      code: "PREPARE_OFFER_STALE_OR_MISMATCH",
+      reason: "offer_stale_or_missing_at_admission",
+    };
   }
-  if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
-    return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
+  if ((live.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
+    return {
+      kind: "no_go",
+      code: "PREPARE_OFFER_CYCLE_MISMATCH",
+      reason: "prepare_offer_cycle_mismatch",
+    };
   }
-  return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
+  return {
+    kind: "e_offer_accept",
+    offerFingerprint: go.offerFingerprint,
+    code: "E_OFFER_ACCEPT",
+  };
 }

 export function assessGenericMissionPrepareReadiness(
@@ -1351,6 +1671,15 @@ export function buildIntentAnalysisFromSolicitedMission(
     sig?.irreversible === true;
   const notes = fields.contextNotes?.trim() || null;
   const mutation = fields.repositoryMutation ?? null;
+  // R3 — path-like scope feeds scopeIn so F1 tool mission and F2 analysis
+  // with the same Pilote subject share stableMissionKey (anti-doublon).
+  // Pathless / read_only / narrative scopes stay empty (toolFirst R1+).
+  const pathLikeScope =
+    !!scope &&
+    (/[\\/]/.test(scope) ||
+      /\.(ts|tsx|js|jsx|mjs|cjs|py|md|json|ya?ml)\b/i.test(scope));
+  const readOnly = mutation === "none" || mutation === "read";
+  const scopeIn = !readOnly && pathLikeScope && scope ? [scope] : [];
   const base: IntentAnalysisDto = {
     parseOk: true,
     intentClass: "execution_request",
@@ -1377,16 +1706,21 @@ export function buildIntentAnalysisFromSolicitedMission(
     expectedOutcome,
     criticalJustification: null,
     requestedOperation: null,
-    executionIntent:
-      mutation === "none" || mutation === "read"
-        ? ({
-            intentKind: "read_only",
-            scopeIn: [],
-            scopeOut: [],
-            expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
-            requiredCapabilities: [],
-          } as IntentAnalysisDto["executionIntent"])
-        : null,
+    executionIntent: readOnly
+      ? ({
+          intentKind: "read_only",
+          scopeIn: [],
+          scopeOut: [],
+          expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
+          requiredCapabilities: [],
+        } as IntentAnalysisDto["executionIntent"])
+      : ({
+          intentKind: "other",
+          scopeIn,
+          scopeOut: [],
+          expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
+          requiredCapabilities: [],
+        } as IntentAnalysisDto["executionIntent"]),
   };
   if (
     mutation === "none" ||
@@ -1410,6 +1744,23 @@ export type SolicitGenericExecutionPrepareInput = {
   /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
   readonly analysis?: IntentAnalysisDto;
   readonly mission?: SolicitGenericPrepareMissionFields;
+  /**
+   * Current Pilote utterance (Option B / Slice D). Required for conversational
+   * F1/F2 admission unless M-HD-01 `decisionId` resume applies.
+   * Nora tool / model fields alone never admit PREPARE.
+   */
+  readonly pilotUtterance?: string | null;
+  /** Non-authoritative model candidate — never sufficient alone. */
+  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
+  /** F2 offer-accept: fingerprint captured at GO, revalidated before write. */
+  readonly expectedOfferFingerprint?: string | null;
+  /**
+   * When true (default), require E-OFFER-ACCEPT or E-EXPLICIT-PREPARE from the
+   * Pilote utterance (or verified decisionId resume). Set false only for
+   * non-conversational Product harnesses that call prepare via solicit without
+   * a turn — prefer prepareGenericExecutionContractDraft for those paths.
+   */
+  readonly requirePositivePilotAdmission?: boolean;
   /** M-HD-01 — verified OA HumanDecision for structural resume. */
   readonly decisionId?: string | null;
   readonly sessionKey?: string | null;
@@ -1493,9 +1844,114 @@ export async function solicitGenericExecutionPrepare(
   if (!projectId) {
     return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
   }
-  const analysis =
-    input.analysis ??
-    buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
+
+  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
+  const decisionId = input.decisionId?.trim() || null;
+  const requirePositive = input.requirePositivePilotAdmission !== false;
+  const utterance =
+    typeof input.pilotUtterance === "string" ? input.pilotUtterance.trim() : "";
+
+  let admissionKind:
+    | "e_offer_accept"
+    | "e_explicit_prepare"
+    | "e_verified_hd_resume"
+    | "harness_bypass" = "harness_bypass";
+  let boundOfferFingerprint: string | null = null;
+
+  if (requirePositive) {
+    if (decisionId) {
+      // M-HD-01 resume — still refuse if current utterance forbids PREPARE.
+      if (utterance && hasExplicitPrepareContractRefusal(utterance)) {
+        return fail(
+          "EXPLICIT_PREPARE_REFUSAL",
+          "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+        );
+      }
+      if (utterance && isPrepareMetaAnalysisOrCitationFrame(utterance)) {
+        return fail(
+          "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
+          "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
+        );
+      }
+      admissionKind = "e_verified_hd_resume";
+    } else {
+      const admission = resolvePositivePrepareAdmissionEvidence({
+        projectId,
+        cycleInstanceId,
+        text: utterance,
+        pilotDecisionCandidate: input.pilotDecisionCandidate,
+        sessionKey: input.sessionKey,
+        sessionDbPath: input.sessionDbPath,
+        expectedOfferFingerprint: input.expectedOfferFingerprint,
+      });
+      if (admission.kind === "no_go") {
+        return fail(
+          admission.code,
+          admission.code === "EXPLICIT_PREPARE_REFUSAL"
+            ? "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé."
+            : admission.code === "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
+              ? "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé."
+              : "Admission PREPARE refusée — aucune preuve positive Pilote applicable (E-OFFER-ACCEPT / E-EXPLICIT-PREPARE). Sollicitation Nora ≠ consentement. Aucun EC n'a été créé.",
+        );
+      }
+      if (admission.kind === "e_offer_accept") {
+        admissionKind = "e_offer_accept";
+        boundOfferFingerprint = admission.offerFingerprint;
+      } else {
+        admissionKind = "e_explicit_prepare";
+      }
+      // Belt: expected fingerprint must never be ignored via E-EXPLICIT (R2/T12).
+      if (
+        input.expectedOfferFingerprint?.trim() &&
+        admissionKind === "e_explicit_prepare"
+      ) {
+        return fail(
+          "EXPECTED_OFFER_BINDING_REQUIRED",
+          "Empreinte d'offre attendue : E-EXPLICIT ne peut pas contourner le binding CURRENT. Aucun EC n'a été créé.",
+        );
+      }
+    }
+  } else if (utterance) {
+    // Harness bypass still honors refuse/citation when utterance is supplied.
+    if (hasExplicitPrepareContractRefusal(utterance)) {
+      return fail(
+        "EXPLICIT_PREPARE_REFUSAL",
+        "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+      );
+    }
+    if (isPrepareMetaAnalysisOrCitationFrame(utterance)) {
+      return fail(
+        "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
+        "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
+      );
+    }
+  }
+
+  // E-OFFER-ACCEPT — re-bind mission from CURRENT offer; refuse silent swap (X2).
+  let analysis: IntentAnalysisDto;
+  if (admissionKind === "e_offer_accept" && boundOfferFingerprint) {
+    const offer = getCurrentGenericPrepareOffer(projectId, {
+      sessionKey: input.sessionKey,
+      sessionDbPath: input.sessionDbPath,
+    });
+    if (!offer || offer.offerFingerprint !== boundOfferFingerprint) {
+      return fail(
+        "PREPARE_OFFER_STALE_OR_MISMATCH",
+        "Offre CURRENT absente ou divergente au moment de l'écriture. Aucun EC n'a été créé.",
+      );
+    }
+    if ((offer.cycleInstanceId ?? null) !== cycleInstanceId) {
+      return fail(
+        "PREPARE_OFFER_CYCLE_MISMATCH",
+        "Offre CURRENT hors cycle applicable. Aucun EC n'a été créé.",
+      );
+    }
+    analysis = analysisFromPendingGenericPrepareOffer(offer);
+  } else {
+    analysis =
+      input.analysis ??
+      buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
+  }

   const readiness = assessGenericMissionPrepareReadiness(analysis);
   if (readiness.missingFields.length > 0) {
@@ -1505,9 +1961,7 @@ export async function solicitGenericExecutionPrepare(
       readiness.missingFields,
     );
   }
-  // Structural without decisionId fails inside prepareGeneric (verified HD path).

-  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
   const prep = await prepareGenericExecutionContractDraft({
     oa: input.oa,
     projectId,

```

## 22. QA R1/R2/R3
| ID | Result | Qual |
|----|--------|------|
| T1 Merci+model accept+offer | PASS no_go | BEHAVIOR PROVEN |
| T2 Merci+model refuse | PASS | BEHAVIOR PROVEN |
| T3 OK+offer | PASS E-OFFER | BEHAVIOR PROVEN |
| T4 empty+model accept | PASS | BEHAVIOR PROVEN |
| T6 OK prepare proposed | PASS E-OFFER | BEHAVIOR PROVEN |
| T8 rebound A≠B | PASS | BEHAVIOR PROVEN |
| T10 independent explicit | PASS E-EXPLICIT | BEHAVIOR PROVEN |
| T12 expected fp + explicit | PASS EXPECTED_OFFER_BINDING | BEHAVIOR PROVEN |
| T13 F1→F2 | PASS 1 EC | BEHAVIOR PROVEN |
| T14 F2→F1 | PASS 1 EC | BEHAVIOR PROVEN |
| T15 concurrent | PASS 1 EC | BEHAVIOR PROVEN |
| T18 SQLite counts | PASS | BEHAVIOR PROVEN |
| T7/T9/T11/T16/T17 | prior paths / COVERAGE | mixed |

## 23–24. QA A+B+D + techniques
**247 PASS** (9 suites). tsc EXIT 0. eslint EXIT 0. Prior 235 ≠ this proof.
```
sumption_validated","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-d3399b1e1c808b4a","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed"}
{"event":"oa.ckc.qualification_started","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-d3399b1e1c808b4a","cycleTypeId":"cyc:delivery","result":"started","detailedStatus":"resolved_detailed"}
{"event":"oa.cycle.qualified","ts":"2026-08-23T04:30:00.000Z","recommendedProfile":"Light","result":"ok","durationMs":0}

stdout | __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E10 — explicit NEW_CYCLE formalization WITHOUT cycle stays on the historical createCycle path (not hijacked)
{"event":"oa.ckc.qualification_succeeded","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-d3399b1e1c808b4a","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed","recommendedProfile":"Light","durationMs":0}
{"event":"oa.ckc.result_produced","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-d3399b1e1c808b4a","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed","recommendedProfile":"Light","durationMs":0}

stdout | __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R4 — Project-scoped Select: null-cycle AUTHORIZED PRODUCT_GOVERNED EC → Attempt accepted (no invented cycle; Cursor access not gated by methodological profile)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:e1997d7ca6e55c6f","attemptId":"xat:w3a:6d1cd7822f1e23df","executionContractId":"xct:gen-prep:51a4701ba81a86de9067b163","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":1}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:e1997d7ca6e55c6f","attemptId":"xat:w3a:6d1cd7822f1e23df","executionContractId":"xct:gen-prep:51a4701ba81a86de9067b163","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":1}

 ✓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts (28 tests) 809ms

 Test Files  9 passed (9)
      Tests  247 passed (247)
   Start at  00:00:18
   Duration  2.80s (transform 2.16s, setup 522ms, collect 8.37s, tests 1.75s, environment 503ms, prepare 376ms)


```

## 25. Fake/Real
DET / fixtures / SQLite isolée. OpenAI LIVE NOT EXERCISED. Cursor REAL NOT. Campaign UNTOUCHED. G-REAL NOT GRANTED.

## 26. R24 — UPDATE REQUIRED — SYNC GATE OPEN
| Vol | Impact |
|-----|--------|
| 03 | model≠consent; offer-bind priority; dual-entry dedup |
| 06 | offer process-local unchanged |
| 07 | E-OFFER before E-EXPLICIT when offer-referenced; candidate non-authoritative |
| 08 | T1–T18 + positivePrepareAdmission |
| 09 | lexical residual; no durable admissionKind; not universal exactly-once |
No protected files edited.

## 27. Réserves
1. E-EXPLICIT lexical incomplete FR.
2. Offer process-local.
3. No durable admission stamp.
4. R3 proven for same missionKey subject — not universal races.
5. LIVE pending.

## 28. Gates Morris
Review OPEN · Project commit NOT AUTH · R24 OPEN · LIVE NOT · L3-S2 OPEN · G-REAL NOT · v3 NON ADOPTED

## 29. Git Review Index
| Artefact | Value |
|----------|-------|
| Prior tip/blob | `66f707c1` / `7204490d` |
| New tip/blob | *post-publish* |
| Delivery | dirty @ `7dd49ecd` |

## 30. Verdict

**INTEGRATED A+B POSITIVE ADMISSION — READY FOR MORRIS REVIEW**

- Model non-authoritative (T1); Pilote accept demonstrated (T3/T6);
- CURRENT offer bound (T6/T8); fingerprint controlled (T12);
- Anti-doublon demonstrated at tested scope (T13–T15/T18);
- F1/F2 coherent; SHE + Axis A preserved; 247 PASS; R24 OPEN; handoff verified.

Anti-claims: Local≠main · DET≠LIVE · Model≠consent · Tool≠admission · E-OFFER≠E-EXPLICIT · tested-scope≠universal-exactly-once · L3-S2 OPEN · G-REAL NOT · v3 NON ADOPTED.

STOP after handoff.
