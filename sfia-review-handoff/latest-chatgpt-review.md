# DETERMINISTIC-NORA-BOUNDARY-PARITY — Review Pack (FULL)

## A. Timestamp
2026-09-15T18:21:17Z

## B. Git Truth
- Repository: `mcleland147/sfia-workspace`
- `origin/main` = `bceb79a814c2d1e468c8e05dfdb461104375c3fa` (MATCH)
- Correction worktree: `/Users/morris/Projects/sfia-studio-fake-provider-user-valid-materialization`
- Branch: `fix/sfia-studio-fake-provider-user-valid-materialization`
- Initial HEAD: `bceb79a814c2d1e468c8e05dfdb461104375c3fa` (exact main)
- Initial status: clean
- Current status: local dirty only (no Product commit)
- Dogfood worktree `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d`: **NOT USED / FROZEN**

## C. Morris GO
AUTHORIZED and consumed:
- dedicated correction branch/worktree from main
- FakeConversationProvider modification
- related deterministic + application-path tests
- typecheck/lint/build/tests
- FULL Review Pack + Review Handoff L3

NOT authorized / NOT performed:
- dogfood mutation / Nora send / Product UI login
- OpenAI LIVE / Cursor REAL / docs_write REAL / Execute
- Product commit / push / PR / merge / branch deletion
- auth changes / F2 orchestration redesign / migrations

## D. SFIA qualification
- Cycle: **8 — Delivery**
- Typology: **RUN**
- Profile: **Critical**
- Why Critical: cognition-boundary parity controls whether manual Product reproof can start without forbidden sentinel / LIVE escalation

## E. Convergence / trajectory link
- Capability: Product A3 journey precondition — Pilot natural intent → Nora cognition boundary → structured Proposal
- Foundations: V3-F02 / V3-F04 / V3-F11-F12 (downstream prep only)
- Asset: FakeConversationProvider = **ADAPT**; F2/Product orchestration = **KEEP**; sentinel fixtures = **KEEP**
- Forbidden: new cognition engine; parallel Product path
- Critical-path: close fake parity → repeat manual preflight → bounded manual reproof through Inspect → separate Gate D later
- Lot D: **NOT** authorized
- Runtime v3: **NON ADOPTED**

## F. Prior blocked manual-preflight evidence
Handoff verdict (sfia/review-handoff):
**MANUAL REPROOF BLOCKED — DETERMINISTIC NORA PATH NOT USER-VALID**

Root observation: natural FR Pilot request → FakeConversationProvider F2 fallback `intentClass=informative` / `executionIntent=null`; structured materialization required `__F2_ARTIFACT_MATERIALIZE__`.

## G. Exact FakeConversationProvider root cause
In `fakeProvider.ts`, after historical marker branches, F2 system-prompt traffic without markers fell through to generic informative JSON (~former L1013). The only path emitting `continuationKind=active_cycle_artifact_materialization` + `cursor.docs_write.apply` + docs_write `executionIntent` was the `__F2_ARTIFACT_MATERIALIZE__` marker branch.

## H. R21 Fake/Real fidelity analysis
- External boundary substituted: OpenAI cognition provider
- Fake remains a **test adapter** for the cognition boundary only
- Same Product path traversed: `projectAssistantSendAction` → `orchestrateAssistantSend` → `orchestrateF2` → FakeConversationProvider → Proposal
- Expected proof: **DETERMINISTIC BOUNDARY PARITY AT TESTED REQUEST SHAPE**
- Explicitly NOT: OpenAI REAL / Nora REAL / general NLU / Product Proof complete / READY FOR REAL / runtime v3 ADOPTED

## I. R22 disposition
Test-adapter fidelity only. No internal production cognition / NLP engine / parallel Product path. Sentinel fixtures retained for historical automated tests.

## J. Before behavior
| Input | Result |
|---|---|
| Natural FR materialization request | `informative`, `executionIntent=null` |
| Same + `__F2_ARTIFACT_MATERIALIZE__` | `execution_request` + `active_cycle_artifact_materialization` + target `docs/livrable-cycle.md` |

## K. Recognition contract
ALL required (narrow, explainable — no synonym engine):
1. Materialize wording family after bounded normalize: `materialise` / `materialiser` (covers matérialise/matérialiser via accent fold)
2. Exactly one repository-relative `.md` path in CURRENT demand
3. Explicit proposal/decision preparation (`proposition` or `decision`)
4. Explicit no-execution guard (`n'execute rien` or `ne rien executer` after normalize)

If any missing → fall through to existing deterministic behavior.

## L. Path extraction contract
- Regex over CURRENT demand only
- Exactly one candidate; must end in `.md`
- Reject: absolute (`/…`), URL (`://`), traversal (`..`)
- Multiple paths → fail closed (no pick)
- Path validity ≠ execution authority (server/Product remain authoritative)

## M. Structured F2 output contract
Shared builder emits same semantic shape as historical sentinel:
- `intentClass`: `execution_request`
- `continuationKind`: `active_cycle_artifact_materialization`
- `artifactMaterializationOperation`: `cursor.docs_write.apply`
- `candidateCycleTypeId`: `cyc:framing`
- `requestedOperation` (top-level): `null` (canonical sentinel contract)
- `executionIntent.intentKind`: `docs_write`
- `executionIntent.targetPath`: extracted (natural) or `docs/livrable-cycle.md` (sentinel)
- `executionIntent.requiredCapabilities`: `["cap:cursor.docs_write"]`
- `targetRepositoryRef`: `null` (server/binding-owned)
- artifactBrief/contentRequirements: bounded slice of Pilot request (natural) or historical fixture strings (sentinel)

## N. Shared builder / branch ordering
Helpers in `fakeProvider.ts`:
- `normalizeNaturalMaterializationProbe`
- `extractSingleRepoRelativeMdPath`
- `matchNaturalArtifactMaterialization`
- `buildArtifactMaterializationAnalysis`
- `fakeF2JsonResult`

Ordering (documented in source):
1. … prior `__MW5_` / `__F2_` markers …
2. `__F2_ARTIFACT_HOSTILE_MERGE_OP__` (unchanged hostile semantics)
3. `__F2_ARTIFACT_MATERIALIZE__` → shared builder (legacy path)
4. … remaining markers …
5. **natural materialization match** → shared builder (extracted path)
6. generic F2 informative fallback

## O. Exact production/test-adapter diff

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 88462d68..0b1b7a2f 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -12,6 +12,156 @@ export type FakeToolScriptRound =
   | { kind: "message"; text: string }
   | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };

+type FakeChallengeAssessment =
+  | "sufficient"
+  | "insufficient"
+  | "unknown"
+  | null;
+
+/**
+ * Bounded Unicode/case normalization for the natural materialization contract only.
+ * Not a general NLP layer — only apostrophe variants + accents on recognized tokens.
+ */
+function normalizeNaturalMaterializationProbe(raw: string): string {
+  return raw
+    .normalize("NFC")
+    .replace(/[\u2018\u2019\u02BC\u0060]/g, "'")
+    .toLowerCase()
+    .replace(/[àáâäã]/g, "a")
+    .replace(/[èéêë]/g, "e")
+    .replace(/[ìíîï]/g, "i")
+    .replace(/[òóôöõ]/g, "o")
+    .replace(/[ùúûü]/g, "u")
+    .replace(/ç/g, "c");
+}
+
+/** Exactly one repository-relative `.md` path from CURRENT demand; else null. */
+function extractSingleRepoRelativeMdPath(probe: string): string | null {
+  const re =
+    /(?:^|[\s`"'(])((?:[A-Za-z0-9._-]+\/)+[A-Za-z0-9._-]+\.md)(?=$|[\s`"'),.])/g;
+  const hits: string[] = [];
+  let m: RegExpExecArray | null;
+  while ((m = re.exec(probe)) !== null) {
+    hits.push(m[1]!);
+  }
+  if (hits.length !== 1) return null;
+  const path = hits[0]!;
+  if (path.startsWith("/") || path.includes("..") || /:\/\//.test(path)) {
+    return null;
+  }
+  return path;
+}
+
+/**
+ * Narrow natural Pilot contract for artifact materialization (no synonym engine).
+ * Requires ALL of:
+ * 1) materialize wording family
+ * 2) exactly one repo-relative .md path
+ * 3) explicit proposal / decision preparation
+ * 4) explicit no-execution guard
+ */
+function matchNaturalArtifactMaterialization(probe: string): {
+  targetPath: string;
+  artifactBrief: string;
+  contentRequirement: string;
+} | null {
+  const normalized = normalizeNaturalMaterializationProbe(probe);
+  if (!/\bmaterialis(?:e|er)\b/.test(normalized)) return null;
+
+  const hasProposalOrDecision =
+    /\bproposition\b/.test(normalized) || /\bdecision\b/.test(normalized);
+  const hasNoExecution =
+    /n'execute\s+rien/.test(normalized) ||
+    /ne\s+rien\s+executer/.test(normalized);
+  if (!hasProposalOrDecision || !hasNoExecution) return null;
+
+  const targetPath = extractSingleRepoRelativeMdPath(probe);
+  if (!targetPath) return null;
+
+  const brief = probe.replace(/\s+/g, " ").trim().slice(0, 240);
+  return {
+    targetPath,
+    artifactBrief: brief,
+    contentRequirement: brief,
+  };
+}
+
+/** Shared F2 artifact-materialization analysis payload (sentinel + natural). */
+function buildArtifactMaterializationAnalysis(input: {
+  targetPath: string;
+  challengeResponseAssessment?: FakeChallengeAssessment;
+  artifactBrief?: string;
+  contentRequirements?: string[];
+}): Record<string, unknown> {
+  const targetPath = input.targetPath;
+  const parentSlash = targetPath.lastIndexOf("/");
+  const scopeIn =
+    parentSlash > 0 ? [targetPath.slice(0, parentSlash + 1)] : ["docs/"];
+  return {
+    intentClass: "execution_request",
+    candidateCycleTypeId: "cyc:framing",
+    signals: {
+      structuralChange: false,
+      securityImpact: false,
+      architectureImpact: false,
+      dataImpact: false,
+      irreversible: false,
+      lowRiskBounded: true,
+    },
+    cognitiveWorkload: null,
+    contradictionCandidate: null,
+    challengeResponseAssessment: input.challengeResponseAssessment ?? "sufficient",
+    continuationKind: "active_cycle_artifact_materialization",
+    artifactMaterializationOperation: "cursor.docs_write.apply",
+    objective: "Matérialiser le livrable requis du cycle actif",
+    scope: "docs_write borné — cycle actif — aucune exécution automatique",
+    rephrasedRequest: "Matérialisation gouvernée du livrable requis",
+    outOfScope: ["Nouveau CycleInstance", "Pilot START", "Cursor REAL"],
+    risks: ["Confusion continuation / nouvelle formalisation"],
+    reservations: [],
+    stopConditions: ["AUCUNE EXÉCUTION", "Décision Pilote requise"],
+    activatedBlocks: ["proposition", "gate"],
+    expectedOutcome: "Proposition de matérialisation liée au cycle actif",
+    criticalJustification: null,
+    requestedOperation: null,
+    executionIntent: {
+      intentKind: "docs_write",
+      artifactType: "deliverable_document",
+      targetRepositoryRef: null,
+      targetPath,
+      scopeIn,
+      scopeOut: [],
+      expectedOutputs: [targetPath],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      validationExpectations: [],
+      evidenceRequirements: [],
+      requestedOperation: null,
+      reversibilityExpectation: null,
+      artifactBrief:
+        input.artifactBrief ?? "Livrable requis du cycle actif",
+      contentRequirements:
+        input.contentRequirements ?? ["Contenu défini avec Nora"],
+      exitRequirementKinds: [],
+    },
+  };
+}
+
+function fakeF2JsonResult(
+  callCount: number,
+  analysis: Record<string, unknown>,
+): ProviderCompletionResult {
+  return {
+    text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(analysis)}`,
+    usage: {
+      inputTokens: 10 * callCount,
+      outputTokens: 5 * callCount,
+      totalTokens: 15 * callCount,
+      model: "fake-test-model",
+      providerResponseId: `fake-resp-${callCount}`,
+    },
+  };
+}
+
 /**
  * Deterministic fake provider for unit/E2E non-live tests.
  * Never presented as live GPT; replies are tagged TEST/FAKE.
@@ -763,69 +913,19 @@ export class FakeConversationProvider implements ConversationProvider {
       };
     }
     if (markerProbe.includes("__F2_ARTIFACT_MATERIALIZE__")) {
+      // Historical sentinel fixture — same builder as natural Pilot contract.
       const content = markerProbe;
-      let challengeResponseAssessment:
-        | "sufficient"
-        | "insufficient"
-        | "unknown"
-        | null = "sufficient";
+      let challengeResponseAssessment: FakeChallengeAssessment = "sufficient";
       if (content.includes("__MW5_SATISFACTION_INSUFFICIENT__")) {
         challengeResponseAssessment = "insufficient";
       }
-      return {
-        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
-          intentClass: "execution_request",
-          candidateCycleTypeId: "cyc:framing",
-          signals: {
-            structuralChange: false,
-            securityImpact: false,
-            architectureImpact: false,
-            dataImpact: false,
-            irreversible: false,
-            lowRiskBounded: true,
-          },
-          cognitiveWorkload: null,
-          contradictionCandidate: null,
+      return fakeF2JsonResult(
+        this.callCount,
+        buildArtifactMaterializationAnalysis({
+          targetPath: "docs/livrable-cycle.md",
           challengeResponseAssessment,
-          continuationKind: "active_cycle_artifact_materialization",
-          artifactMaterializationOperation: "cursor.docs_write.apply",
-          objective: "Matérialiser le livrable requis du cycle actif",
-          scope: "docs_write borné — cycle actif — aucune exécution automatique",
-          rephrasedRequest: "Matérialisation gouvernée du livrable requis",
-          outOfScope: ["Nouveau CycleInstance", "Pilot START", "Cursor REAL"],
-          risks: ["Confusion continuation / nouvelle formalisation"],
-          reservations: [],
-          stopConditions: ["AUCUNE EXÉCUTION", "Décision Pilote requise"],
-          activatedBlocks: ["proposition", "gate"],
-          expectedOutcome: "Proposition de matérialisation liée au cycle actif",
-          criticalJustification: null,
-          requestedOperation: null,
-          executionIntent: {
-            intentKind: "docs_write",
-            artifactType: "deliverable_document",
-            targetRepositoryRef: null,
-            targetPath: "docs/livrable-cycle.md",
-            scopeIn: ["docs/"],
-            scopeOut: [],
-            expectedOutputs: ["docs/livrable-cycle.md"],
-            requiredCapabilities: ["cap:cursor.docs_write"],
-            validationExpectations: [],
-            evidenceRequirements: [],
-            requestedOperation: null,
-            reversibilityExpectation: null,
-            artifactBrief: "Livrable requis du cycle actif",
-            contentRequirements: ["Contenu défini avec Nora"],
-            exitRequirementKinds: [],
-          },
-        })}`,
-        usage: {
-          inputTokens: 10 * this.callCount,
-          outputTokens: 5 * this.callCount,
-          totalTokens: 15 * this.callCount,
-          model: "fake-test-model",
-          providerResponseId: `fake-resp-${this.callCount}`,
-        },
-      };
+        }),
+      );
     }
     if (markerProbe.includes("__F2_DOCS_WRITE_GENERIC__")) {
       return {
@@ -1010,6 +1110,21 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
+    // Natural Pilot artifact-materialization (AFTER all historical __F2_/__MW5_
+    // marker contracts, BEFORE generic F2 informative fallback).
+    // Ordering: HOSTILE_MERGE → ARTIFACT_MATERIALIZE sentinel → … → natural → F2 fallback.
+    const naturalMaterialization = matchNaturalArtifactMaterialization(markerProbe);
+    if (naturalMaterialization) {
+      return fakeF2JsonResult(
+        this.callCount,
+        buildArtifactMaterializationAnalysis({
+          targetPath: naturalMaterialization.targetPath,
+          artifactBrief: naturalMaterialization.artifactBrief,
+          contentRequirements: [naturalMaterialization.contentRequirement],
+        }),
+      );
+    }
+
     if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({

```

## P. Exact test diffs / complete new files

### P.1 `fakeProvider.userValidArtifactMaterialization.d0.test.ts` (new)

```diff
diff --git a/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
new file mode 100644
index 00000000..e36dbbf5
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
@@ -0,0 +1,142 @@
+/**
+ * DETERMINISTIC NORA BOUNDARY PARITY — FakeConversationProvider
+ * user-valid natural Pilot artifact materialization (no hidden sentinel).
+ *
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
+
+const F2_SYSTEM = "SFIA Studio F2 intent analysis";
+
+const CANONICAL_NATURAL = `Matérialise le livrable attendu dans
+projects/sfia-studio/.sandbox/gestion-de-taches.md.
+Le livrable attendu est une fiche de cadrage fonctionnel minimale pour
+l’application de gestion de tâches, décrivant l’objectif, le périmètre
+fonctionnel — ajouter une tâche, la marquer comme terminée et la supprimer —
+ainsi que les critères d’acceptation essentiels.
+N’exécute rien : prépare la proposition correspondante pour ma décision.`;
+
+function parseFakeF2(text: string): Record<string, unknown> {
+  const i = text.indexOf("{");
+  const j = text.lastIndexOf("}");
+  expect(i).toBeGreaterThanOrEqual(0);
+  expect(j).toBeGreaterThan(i);
+  return JSON.parse(text.slice(i, j + 1)) as Record<string, unknown>;
+}
+
+async function analyze(content: string): Promise<Record<string, unknown>> {
+  const provider = new FakeConversationProvider();
+  const result = await provider.complete([
+    { role: "system", content: F2_SYSTEM },
+    { role: "user", content },
+  ]);
+  return parseFakeF2(result.text);
+}
+
+describe("FakeConversationProvider — user-valid artifact materialization", () => {
+  it("P1 — canonical natural FR request WITHOUT sentinel → materialization F2", async () => {
+    const obj = await analyze(CANONICAL_NATURAL);
+    expect(obj.intentClass).toBe("execution_request");
+    expect(obj.continuationKind).toBe("active_cycle_artifact_materialization");
+    expect(obj.artifactMaterializationOperation).toBe(
+      "cursor.docs_write.apply",
+    );
+    expect(obj.executionIntent).toBeTruthy();
+    const ei = obj.executionIntent as Record<string, unknown>;
+    expect(ei.targetPath).toBe(
+      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    );
+    expect(ei.intentKind).toBe("docs_write");
+    expect(ei.requiredCapabilities).toEqual(["cap:cursor.docs_write"]);
+  });
+
+  it("P2 — canonical natural request contains no fixture sentinel", () => {
+    expect(CANONICAL_NATURAL).not.toMatch(/__F2_/);
+    expect(CANONICAL_NATURAL).not.toMatch(/__MW5_/);
+  });
+
+  it("P3 — targetPath extracted from current demand (second safe .md)", async () => {
+    const content = `Matérialise le livrable attendu dans
+projects/sfia-studio/.sandbox/autre-livrable.md.
+N'exécute rien : prépare la proposition pour ma décision.`;
+    const obj = await analyze(content);
+    const ei = obj.executionIntent as Record<string, unknown>;
+    expect(ei.targetPath).toBe(
+      "projects/sfia-studio/.sandbox/autre-livrable.md",
+    );
+    expect(ei.targetPath).not.toBe(
+      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    );
+    expect(ei.targetPath).not.toBe("docs/livrable-cycle.md");
+  });
+
+  it("P4 — missing explicit path does not enter natural materialization", async () => {
+    const obj = await analyze(
+      "Matérialise le livrable attendu. N'exécute rien : prépare la proposition pour ma décision.",
+    );
+    expect(obj.intentClass).toBe("informative");
+    expect(obj.continuationKind ?? null).toBeNull();
+    expect(obj.executionIntent ?? null).toBeNull();
+  });
+
+  it("P5 — two target paths fails closed / falls through", async () => {
+    const obj = await analyze(
+      `Matérialise a.md et aussi b.md sous projects/sfia-studio/.sandbox/a.md et projects/sfia-studio/.sandbox/b.md.
+N'exécute rien : prépare la proposition pour ma décision.`,
+    );
+    expect(obj.intentClass).toBe("informative");
+    expect(obj.continuationKind ?? null).toBeNull();
+  });
+
+  it("P6 — traversal target does not enter natural materialization", async () => {
+    const obj = await analyze(
+      `Matérialise le livrable dans ../something.md.
+N'exécute rien : prépare la proposition pour ma décision.`,
+    );
+    expect(obj.intentClass).toBe("informative");
+    expect(obj.continuationKind ?? null).toBeNull();
+  });
+
+  it("P7 — question/reference only is not materialization", async () => {
+    const obj = await analyze(
+      "Que contient projects/sfia-studio/.sandbox/gestion-de-taches.md ?",
+    );
+    expect(obj.intentClass).toBe("informative");
+    expect(obj.continuationKind ?? null).toBeNull();
+  });
+
+  it("P8 — materialize wording without proposal/no-execution guard does not promote", async () => {
+    const obj = await analyze(
+      "Matérialise le livrable dans projects/sfia-studio/.sandbox/gestion-de-taches.md.",
+    );
+    expect(obj.intentClass).toBe("informative");
+    expect(obj.continuationKind ?? null).toBeNull();
+  });
+
+  it("P9 — existing __F2_ARTIFACT_MATERIALIZE__ remains green", async () => {
+    const obj = await analyze(
+      "Matérialise ce livrable __F2_ARTIFACT_MATERIALIZE__",
+    );
+    expect(obj.intentClass).toBe("execution_request");
+    expect(obj.continuationKind).toBe("active_cycle_artifact_materialization");
+    expect(obj.artifactMaterializationOperation).toBe(
+      "cursor.docs_write.apply",
+    );
+    const ei = obj.executionIntent as Record<string, unknown>;
+    expect(ei.targetPath).toBe("docs/livrable-cycle.md");
+  });
+
+  it("P10 — hostile merge fixture remains green and distinct", async () => {
+    const obj = await analyze(
+      "Matérialise ce livrable __F2_ARTIFACT_HOSTILE_MERGE_OP__",
+    );
+    expect(obj.intentClass).toBe("execution_request");
+    expect(obj.continuationKind).toBe("active_cycle_artifact_materialization");
+    expect(obj.artifactMaterializationOperation).toBeNull();
+    expect(obj.requestedOperation).toBe("github.pr.merge");
+    const ei = obj.executionIntent as Record<string, unknown>;
+    expect(ei.requiredCapabilities).toEqual(["cap:github.pr.merge"]);
+    expect(ei.requestedOperation).toBe("github.pr.merge");
+  });
+});

```

### P.2 `naturalMaterialization.applicationPath.d0.test.ts` (new)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts
new file mode 100644
index 00000000..997cf7ee
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts
@@ -0,0 +1,227 @@
+/**
+ * DETERMINISTIC NORA BOUNDARY PARITY — application path.
+ *
+ * projectAssistantSendAction → orchestrateAssistantSend → orchestrateF2
+ * → FakeConversationProvider → Proposal DECISION_REQUIRED
+ *
+ * Natural Pilot request WITHOUT any fixture sentinel.
+ * Deterministic — ZERO REAL / ZERO LIVE / ZERO Execute / ZERO Attempt.
+ *
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { projectAssistantSendAction } from "@/features/project-assistant/actions";
+import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
+import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
+import { listEffectivePendingDecisionSubjectMarkers } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
+import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+} from "@/lib/oa/decision";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  tempProductDbPath,
+} from "./w2Harness";
+import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+
+const NATURAL_REQUEST = `Matérialise le livrable attendu dans
+projects/sfia-studio/.sandbox/gestion-de-taches.md.
+Le livrable attendu est une fiche de cadrage fonctionnel minimale pour
+l’application de gestion de tâches, décrivant l’objectif, le périmètre
+fonctionnel — ajouter une tâche, la marquer comme terminée et la supprimer —
+ainsi que les critères d’acceptation essentiels.
+N’exécute rien : prépare la proposition correspondante pour ma décision.`;
+
+const EXPECTED_TARGET =
+  "projects/sfia-studio/.sandbox/gestion-de-taches.md";
+
+const SANDBOX_BINDING = {
+  identity: "mcleland147/sfia-workspace",
+  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
+  defaultBranch: "main",
+  pathRoot: "projects/sfia-studio/.sandbox/",
+} as const;
+
+describe("DETERMINISTIC NORA BOUNDARY PARITY — natural materialization application path", () => {
+  let runtime: RuntimeApplicationService;
+  let dbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    dbPath = tempProductDbPath("natural-materialize-apppath.sqlite");
+    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "nmap" });
+  });
+
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  async function seedActiveCycleProject(): Promise<{
+    projectId: string;
+    cycleInstanceId: string;
+  }> {
+    const oa = runtime.oa!;
+    const created = await runtime.createProject({
+      name: "Natural materialize app path",
+      objective: "Prouver la parité fake sans sentinel",
+      context: "cycle actif + REQUIRE_ARTIFACT + sandbox binding",
+      criticality: "STANDARD",
+      constraints: ["ZERO REAL"],
+      shortReference: "NMAP",
+      idempotencyKey: "idem:nmap-natural-1",
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("seed: createProject failed");
+    const projectId = created.project.projectId;
+
+    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps0.ok).toBe(true);
+    if (!lps0.ok) throw new Error("seed: LPS unavailable");
+
+    const traj = await oa.cycleServices.createInitialTrajectory.execute({
+      trajectoryId: `trj:${projectId}`,
+      projectId,
+      steps: [
+        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
+        { stepId: "stp:deliver", order: 2, label: "Deliver", state: "done" },
+      ],
+      status: "active",
+      expectedLpsVersion: lps0.livingProjectState.version,
+      createdBy: {
+        actorId: "actor:morris",
+        role: "project_owner",
+        displayName: "Morris",
+        authorityLevel: "N3",
+      },
+    });
+    expect(traj.ok).toBe(true);
+
+    const cycleInstanceId = "cyc:nmap-natural-1";
+    const candidate = await oa.cycleServices.createCycle.execute({
+      cycleInstanceId,
+      cycleTypeId: "cyc:framing",
+      projectId,
+      signals: { lowRiskBounded: true },
+      createdBy: {
+        actorId: "actor:nora-f2",
+        role: "agent",
+        displayName: "Nora F2",
+        authorityLevel: "N1",
+      },
+      linkAsActiveCycle: false,
+    });
+    expect(candidate.ok).toBe(true);
+
+    const auth = registerLocalPiloteAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope: `pilot-lifecycle:${cycleInstanceId}`,
+      issuedAt: "2026-09-15T20:00:00.000Z",
+      forceEnable: true,
+    });
+    expect(auth.ok).toBe(true);
+    if (!auth.ok) throw new Error("seed: authority failed");
+
+    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps1.ok).toBe(true);
+    if (!lps1.ok) throw new Error("seed: LPS unavailable");
+
+    const started = await oa.cycleServices.pilotLifecycle.start({
+      cycleInstanceId,
+      projectId,
+      createdBy: {
+        actorId: LOCAL_PILOTE_ACTOR.actorId,
+        role: LOCAL_PILOTE_ACTOR.role,
+        displayName: LOCAL_PILOTE_ACTOR.displayName,
+        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
+      },
+      authorityEvidenceId: auth.evidenceId,
+      expectedLpsVersion: lps1.livingProjectState.version,
+    });
+    expect(started.ok).toBe(true);
+
+    const obligation = await recordObligationPolicyRequireArtifact({
+      projectId,
+      cycleInstanceId,
+      cycleServices: oa.cycleServices,
+      decisionServices: oa.decisionServices,
+      authorityResolver: oa.authorityResolver,
+      nowIso: () => "2026-09-15T20:01:00.000Z",
+    });
+    expect(obligation.ok).toBe(true);
+
+    const bound = await runtime.setProjectRepositoryBinding({
+      projectId,
+      ...SANDBOX_BINDING,
+    });
+    expect(bound.ok).toBe(true);
+
+    return { projectId, cycleInstanceId };
+  }
+
+  it("AP-NAT — projectAssistantSendAction natural FR request creates DECISION_REQUIRED Proposal", async () => {
+    expect(NATURAL_REQUEST).not.toMatch(/__F2_/);
+    expect(NATURAL_REQUEST).not.toMatch(/__MW5_/);
+
+    const { projectId } = await seedActiveCycleProject();
+
+    const oa = runtime.oa!;
+    const decisionsBefore = await oa.decisionServices.decisions.listByProject(
+      projectId,
+    );
+
+    const send = await projectAssistantSendAction({
+      projectId,
+      content: NATURAL_REQUEST,
+    });
+    expect(send.ok).toBe(true);
+    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);
+
+    expect(send.f2?.turnKind).toBe("f2_proposal");
+    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
+    expect(send.f2?.proposal?.contextSnapshot?.projectId).toBe(projectId);
+    expect(send.f2?.proposal?.requestedOperation).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
+    expect(send.f2?.proposal?.executionIntent?.intentKind).toBe("docs_write");
+    expect(send.f2?.proposal?.executionForbidden).toBe(true);
+    expect(send.f2?.decision).toBeNull();
+
+    const decisionsAfter = await oa.decisionServices.decisions.listByProject(
+      projectId,
+    );
+    expect(decisionsAfter.length).toBe(decisionsBefore.length);
+
+    if (typeof oa.executionContractServices.contracts.listByProject === "function") {
+      const contracts = await oa.executionContractServices.contracts.listByProject(
+        projectId,
+      );
+      expect(contracts.length).toBe(0);
+    }
+
+    const pending = await listEffectivePendingDecisionSubjectMarkers(
+      oa,
+      projectId,
+    );
+    expect(pending.ok).toBe(true);
+    if (!pending.ok) throw new Error("pending read failed");
+    expect(pending.markers.length).toBeGreaterThanOrEqual(1);
+    expect(
+      pending.markers.some(
+        (m) => m.proposalId === send.f2?.proposal?.proposalId,
+      ),
+    ).toBe(true);
+  });
+});

```

## Q. Provider-level positive proof
- P1: canonical natural FR → execution_request + materialization + exact targetPath `projects/sfia-studio/.sandbox/gestion-de-taches.md`
- P2: no `__F2_` / `__MW5_` in request
- P3: second safe `.md` path extracted (not hard-coded)

## R. Provider-level negative proofs
- P4 missing path → informative
- P5 two paths → informative
- P6 `../something.md` → informative
- P7 question-only → informative
- P8 materialize without proposal/no-exec guard → informative

## S. Actual application-path proof
File: `__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts`

Path: `projectAssistantSendAction` → orchestrateAssistantSend → orchestrateF2 → FakeConversationProvider

Assertions observed green:
- no fixture token in request
- turnKind `f2_proposal`, status `DECISION_REQUIRED`
- projectId matches isolated test Project
- requestedOperation canonical `cursor.docs_write.apply` (`F2_ARTIFACT_MATERIALIZATION_OPERATION`)
- executionIntent.targetPath exact natural path
- pending Decision Subject marker created for that Proposal
- `decision` null; HD count unchanged; EC list empty; `executionForbidden=true`
- ZERO Execute / Attempt / external effect

## T. Sentinel historical non-regression
P9 + CORR-PROOF-07 / journey application path (still use `__F2_ARTIFACT_MATERIALIZE__`) — **green**

## U. Hostile fixture non-regression
P10 + CORR-PROOF-07 CR06-A (`__F2_ARTIFACT_HOSTILE_MERGE_OP__`) — **green** (distinct merge/hostile semantics)

## V. Lot A/B non-regression
Focused green:
- corrProof07 (32)
- corrProof10 (45)
- corrProof11 (18)
- productProofJourneyIntegrity.d0 (13)
- productProofJourneyIntegrity.applicationPath (6)
- proposalSubjectIntegrity (5)
- platform-ai (6)
- new provider (10) + app path (1)

## W. Full validation results
From `projects/sfia-studio/app`:
- `npm run typecheck` — PASS
- `npm run lint` — PASS (0 warnings/errors)
- `npm run build` — PASS
- `npm test` — **4100 passed | 137 skipped | 0 failed** (baseline was 4089 passed; +11)
- `git diff --check` — PASS

## X. Fake/Real qualification and anti-claims
Authorized claim:
**DETERMINISTIC NORA BOUNDARY PARITY PROVEN AT TESTED ARTIFACT-MATERIALIZATION REQUEST SHAPE.**

Anti-claims:
- NOT arbitrary natural-language understanding
- NOT Nora cognition complete
- NOT OpenAI parity generally / NOT OpenAI REAL
- NOT Product Proof complete / NOT manual Product reproof passed
- NOT Gate D ready / NOT Cursor REAL ready
- NOT runtime v3 ADOPTED
- ZERO LIVE / ZERO REAL in this cycle

## Y. Product Git actions
**NONE** — no Product commit, push, PR, or merge. Candidate remains dirty/local for ChatGPT Critical Review.

## Z. Verdict
**DETERMINISTIC-NORA-BOUNDARY-PARITY — NATURAL PILOT ARTIFACT-MATERIALIZATION REQUEST TRAVERSES NORMAL PRODUCT F2 PATH WITHOUT SENTINEL — PROPOSAL CREATED DETERMINISTICALLY — ZERO EXECUTION — ZERO REAL — READY FOR CHATGPT CRITICAL REVIEW**

Remaining reserve (out of scope this cycle): authenticated Product UI (`NO_SESSION`) for the next manual preflight after Morris interactive GitHub login.
