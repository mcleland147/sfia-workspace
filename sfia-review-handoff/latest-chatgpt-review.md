# DETERMINISTIC-NORA-BOUNDARY-PARITY — FINAL F2 CONTEXT-SCOPING Review Pack (FULL)

## A. Timestamp
2026-09-15T18:35:37Z

## B. Git Truth
- Repository: `mcleland147/sfia-workspace`
- `origin/main` = `bceb79a814c2d1e468c8e05dfdb461104375c3fa` (MATCH)
- Worktree: `/Users/morris/Projects/sfia-studio-fake-provider-user-valid-materialization`
- Branch: `fix/sfia-studio-fake-provider-user-valid-materialization`
- HEAD: `bceb79a814c2d1e468c8e05dfdb461104375c3fa`
- `origin/main..HEAD` commits: **0** (dirty local candidate only)
- Pre-edit backup: `/tmp/sfia-deterministic-nora-boundary-before-final-f2-scope.patch`
- Candidate scope matched prior handoff: **YES** (fakeProvider + 2 new tests only for Product)
- Dogfood: **FROZEN / NOT USED**

## C. Morris GO consumed
AUTHORIZED: edit existing candidate; F2 context guard; related negative tests; env restore; validation; FULL Review Pack; Review Handoff L3.

NOT performed: reopen recognition semantics; F2 orchestration change; Product UI/auth/persistence; dogfood; LIVE/REAL; Product commit/push/PR/merge.

## D. Exact prior Critical Review blocker
Natural matcher ran **before** establishing F2 intent-analysis ownership:

```
const naturalMaterialization = matchNaturalArtifactMaterialization(markerProbe);
if (naturalMaterialization) return structured F2;
if (isF2...) return informative;
```

A non-F2 `FakeConversationProvider.complete()` call with the same natural wording could incorrectly receive structured F2 materialization JSON.

## E. Before ordering
historical markers → HOSTILE → MATERIALIZE sentinel → remaining markers → **global natural matcher** → F2 informative → ordinary fake

## F. After ordering
historical markers → HOSTILE → MATERIALIZE sentinel → remaining markers → **F2-context natural matcher** → F2 informative → ordinary non-F2 fake

## G. isF2IntentAnalysisContext contract
```ts
function isF2IntentAnalysisContext(messages: ProviderChatMessage[]): boolean {
  return messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
}
```
- Source of truth: **system messages only**
- Exact string: `"SFIA Studio F2"` (same as prior informative fallback)
- NOT matched from: user content, history, project metadata, bare "F2" token alone outside that phrase

Natural path requires:
`isF2IntentAnalysisContext === true` AND `matchNaturalArtifactMaterialization(markerProbe)` match.

## FINAL F2 CONTEXT-SCOPING REMEDIATION

Accepted areas KEPT unchanged: recognition contract, path extraction, shared builder, sentinel, hostile, application path Proposal semantics, ZERO execution effects.

Only change: exclusive F2 ownership of the natural matcher + test env hygiene.

## H. Exact fakeProvider diff (full candidate vs HEAD/main)

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 88462d68..acf9ffe9 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -12,6 +12,163 @@ export type FakeToolScriptRound =
   | { kind: "message"; text: string }
   | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };

+type FakeChallengeAssessment =
+  | "sufficient"
+  | "insufficient"
+  | "unknown"
+  | null;
+
+/** F2 intent-analysis ownership — system messages only; never user content. */
+function isF2IntentAnalysisContext(messages: ProviderChatMessage[]): boolean {
+  return messages.some(
+    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
+  );
+}
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
@@ -763,69 +920,19 @@ export class FakeConversationProvider implements ConversationProvider {
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
@@ -1010,7 +1117,22 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
+    // Natural Pilot artifact-materialization is F2 intent-analysis ONLY.
+    // Ordering: HOSTILE_MERGE → ARTIFACT_MATERIALIZE sentinel → … remaining markers
+    // → F2-context natural matcher → F2 informative fallback → ordinary non-F2 fake.
+    if (isF2IntentAnalysisContext(messages)) {
+      const naturalMaterialization =
+        matchNaturalArtifactMaterialization(markerProbe);
+      if (naturalMaterialization) {
+        return fakeF2JsonResult(
+          this.callCount,
+          buildArtifactMaterializationAnalysis({
+            targetPath: naturalMaterialization.targetPath,
+            artifactBrief: naturalMaterialization.artifactBrief,
+            contentRequirements: [naturalMaterialization.contentRequirement],
+          }),
+        );
+      }
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "informative",

```

## I. Exact provider-test diff (new file)

```diff
diff --git a/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
new file mode 100644
index 00000000..d7380b5c
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
@@ -0,0 +1,173 @@
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
+
+  it("P11 — same natural request outside F2 context is ordinary fake, not F2 materialization", async () => {
+    const provider = new FakeConversationProvider();
+    const result = await provider.complete([
+      { role: "system", content: "SFIA Studio ordinary conversation test" },
+      { role: "user", content: CANONICAL_NATURAL },
+    ]);
+    expect(result.text).toContain("TEST/FAKE");
+    expect(result.text).toContain("Réponse fake");
+    expect(result.text).not.toContain("active_cycle_artifact_materialization");
+    expect(result.text).not.toContain("cursor.docs_write.apply");
+    expect(result.text).not.toContain('"intentClass":"execution_request"');
+    expect(result.text).not.toContain('"intentClass": "execution_request"');
+  });
+
+  it("P12 — CKC cognition context is not overridden by natural materialization wording", async () => {
+    const provider = new FakeConversationProvider();
+    const result = await provider.complete([
+      {
+        role: "system",
+        content: "SFIA Studio CKC COGNITIVE REASONING — framing",
+      },
+      {
+        role: "user",
+        content: `${CANONICAL_NATURAL}\nintention périmètre besoin réel`,
+      },
+    ]);
+    expect(result.text).toContain("RECOMMANDATION CKC");
+    expect(result.text).not.toContain("active_cycle_artifact_materialization");
+    expect(result.text).not.toContain("cursor.docs_write.apply");
+  });
+});

```

## J. Exact application-path test diff (new file)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts
new file mode 100644
index 00000000..5708af09
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts
@@ -0,0 +1,241 @@
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
+function restoreEnvVar(name: string, previous: string | undefined): void {
+  if (previous === undefined) delete process.env[name];
+  else process.env[name] = previous;
+}
+
+describe("DETERMINISTIC NORA BOUNDARY PARITY — natural materialization application path", () => {
+  let runtime: RuntimeApplicationService;
+  let dbPath: string;
+  let previousProvider: string | undefined;
+  let previousMorrisAuthority: string | undefined;
+
+  beforeEach(() => {
+    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
+    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
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
+    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
+    restoreEnvVar(
+      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
+      previousMorrisAuthority,
+    );
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

## K. non-F2 negative proof
**P11** — system `"SFIA Studio ordinary conversation test"` + canonical natural request:
- ordinary fake echo (`Réponse fake`)
- NO `active_cycle_artifact_materialization`
- NO `cursor.docs_write.apply`
- NO `execution_request` F2 JSON

**P12** (optional CKC) — CKC system + natural wording → `RECOMMANDATION CKC`; not F2 materialization.

## L. F2 positive proof
**P1** remains green: F2 system + natural FR → `execution_request` + `active_cycle_artifact_materialization` + `cursor.docs_write.apply` + exact targetPath `projects/sfia-studio/.sandbox/gestion-de-taches.md` + executionIntent present. No sentinel.

## M. sentinel non-regression
**P9** + CORR-PROOF-07 / journey application path — **green**

## N. hostile fixture non-regression
**P10** + CORR-PROOF-07 CR06-A — **green** (distinct merge/hostile)

## O. environment restoration proof
`naturalMaterialization.applicationPath.d0.test.ts`:
- `beforeEach` captures prior `OPS1_CONVERSATION_PROVIDER` and `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY`
- `afterEach` restores via `restoreEnvVar` (delete if previously undefined; else restore string)
- retains `setConversationProviderForTests(null)`, `resetF2ProposalStoreForTests()`, `cleanupW2TempDirs()`

## P. application-path non-regression
`projectAssistantSendAction` → orchestrate → F2 → Fake → Proposal `DECISION_REQUIRED`; pending marker; canonical docs_write; exact targetPath; HD unchanged; EC 0; executionForbidden; ZERO Attempt/Execute/external effect — **green**

## Q. Lot A/B regression tests
Focused suite green: corrProof07/10/11, journey integrity + applicationPath, proposalSubjectIntegrity, platform-ai, new provider+apppath tests.

## R. focused counts
9 files / **138 passed** (was 136; +P11 +P12)

## S. full Vitest exact result
**4102 passed | 137 skipped | 0 failed** (prior candidate baseline 4100; +2)

## T. typecheck/lint/build/diff-check
- typecheck PASS
- lint PASS
- build PASS
- `git diff --check` PASS on Product candidate files

## U. ZERO dogfood
**YES** — dogfood frozen / not used

## V. ZERO LIVE/REAL
**YES**

## W. Product Git actions = NONE
**YES** — no Product commit/push/PR/merge; candidate remains dirty/local (`origin/main..HEAD` = 0)

## X. remaining reserve
Authenticated manual Product preflight / `NO_SESSION` — out of scope this cycle

## Y. next gate
ChatGPT Final Critical Re-review → then Product Git Integration (separate GO) → renewed manual Product preflight

## Z. unique verdict
**DETERMINISTIC-NORA-BOUNDARY-PARITY — FINAL F2 CONTEXT SCOPING COMPLETE — NATURAL ARTIFACT MATERIALIZATION IS USER-VALID ONLY INSIDE F2 INTENT ANALYSIS — NON-F2 FAKE BEHAVIOR PRESERVED — APPLICATION PATH GREEN — ZERO EXECUTION — ZERO REAL — READY FOR CHATGPT FINAL CRITICAL RE-REVIEW**
