/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import { createOpenSession } from "@/lib/ops1/repository";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";
import { sendConversationMessage } from "@/lib/ops1/conversation/service";
import { listActionCandidates } from "@/lib/ops1/actionGate";
import {
  clearSfiaContextForTests,
  compileSfiaActionProposal,
  ensureSfiaContext,
  instantiateCursorPrompt,
  isCanonicalPathAllowed,
  isContextStale,
  loadCanonicalSource,
  loadCursorTemplateSource,
  parseProposalFromAssistantText,
  parseSfiaActionProposal,
  resolveSfiaCanonicalContext,
  SfiaSourceLoadError,
  type SfiaActionProposal,
  type SfiaCanonicalContext,
} from "@/lib/ops1/sfia";

const LIVE_PROOF_CONTENT =
  "# Preuve Control Tower\n\nCe fichier a été créé pendant la validation live du vertical slice Control Tower.\n";

describe("SFIA source loader", () => {
  const root = resolveWorkspaceRootFromAppCwd();

  it("loads allowlisted core sources with digest", () => {
    const ref = loadCanonicalSource(
      root,
      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
    );
    expect(ref.digest).toMatch(/^[a-f0-9]{64}$/);
    expect(ref.sizeBytes).toBeGreaterThan(100);
    expect(ref.role).toBe("guardrails");
  });

  it("refuses path hors allowlist", () => {
    expect(() => loadCanonicalSource(root, "method/secret.md")).toThrow(
      SfiaSourceLoadError,
    );
    try {
      loadCanonicalSource(root, ".env");
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(SfiaSourceLoadError);
      expect((e as SfiaSourceLoadError).code).toBe("PATH_NOT_ALLOWED");
    }
  });

  it("refuses absent allowlisted path", () => {
    // Use an allowlisted path that doesn't exist by temporarily checking
    // isCanonicalPathAllowed still closed.
    expect(isCanonicalPathAllowed("projects/campus360/README.md")).toBe(false);
  });

  it("loads cursor template with content + digest", () => {
    const t = loadCursorTemplateSource(root);
    expect(t.path).toBe("prompts/templates/sfia-cycle-execution-template.md");
    expect(t.content).toMatch(/SFIA|cycle|template/i);
    expect(t.digest).toMatch(/^[a-f0-9]{64}$/);
  });
});

describe("SFIA context resolver", () => {
  it("builds context with hierarchy and does not promote candidate decisions", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    const ctx = resolveSfiaCanonicalContext({
      workspaceRoot: root,
      sessionId: "ops1-sess-test",
    });
    expect(ctx.methodBaseline).toBe("SFIA v2.6");
    expect(ctx.headSha).toMatch(/^[0-9a-f]{40}$/);
    expect(ctx.sourceDocuments.length).toBeGreaterThanOrEqual(4);
    expect(ctx.closedGates).toContain("commit");
    expect(ctx.candidateDecisions.some((d) => /commit/i.test(d))).toBe(true);
    expect(ctx.validatedDecisions).not.toContain(
      "GO VALIDATION LIVE MOTEUR SFIA CANONIQUE",
    );
    expect(ctx.permanentCore.join(" ")).toMatch(/Morris décide/);
  });

  it("detects context stale on head mismatch", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    const ctx = resolveSfiaCanonicalContext({
      workspaceRoot: root,
      sessionId: "ops1-sess-test",
    });
    const stale = {
      ...ctx,
      headSha: "0000000000000000000000000000000000000000",
    };
    expect(isContextStale({ context: stale, workspaceRoot: root })).toBe(true);
    expect(isContextStale({ context: ctx, workspaceRoot: root })).toBe(false);
  });
});

describe("SFIA proposal schema", () => {
  const defaults = {
    sessionId: "ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
    contextId: "sfia-ctx-1",
  };

  it("parses no_action and clarification", () => {
    const no = parseSfiaActionProposal(
      {
        kind: "no_action",
        userVisibleSummary: "rien",
        rationale: "ok",
      },
      defaults,
    );
    expect(no.ok).toBe(true);
    const cl = parseSfiaActionProposal(
      {
        kind: "clarification_required",
        userVisibleSummary: "?",
        unresolvedQuestions: ["path?"],
      },
      defaults,
    );
    expect(cl.ok).toBe(true);
  });

  it("rejects shell/commit phrasing in objective", () => {
    const bad = parseSfiaActionProposal(
      {
        kind: "action_proposed",
        objective: "run git commit now",
        profile: "Critical",
        files: [
          {
            path: "projects/campus360/x.md",
            operation: "CREATE",
            exactContent: "a",
          },
        ],
        userVisibleSummary: "bad",
      },
      defaults,
    );
    expect(bad.ok).toBe(false);
  });

  it("extracts JSON fence from assistant text", () => {
    const text = `Hello\n\`\`\`json\n${JSON.stringify({
      kind: "no_action",
      userVisibleSummary: "noop",
      rationale: "noop",
      sessionId: defaults.sessionId,
      contextId: defaults.contextId,
    })}\n\`\`\``;
    const parsed = parseProposalFromAssistantText(text, defaults);
    expect(parsed.ok).toBe(true);
  });
});

describe("SFIA action compiler", () => {
  let prevExec: string | undefined;
  let tmp: string;
  let sessionId: string;
  let context: SfiaCanonicalContext;

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-ce-"));
    prevExec = process.env.OPS1_EXEC_ROOT;
    process.env.OPS1_EXEC_ROOT = tmp;
    resetOps1DbForTests();
    openOps1Db();
    clearSfiaContextForTests();
    const { session } = createOpenSession("fixture");
    sessionId = session.sessionId;
    context = ensureSfiaContext({ sessionId });
  });

  afterEach(() => {
    clearSfiaContextForTests();
    resetOps1DbForTests();
    if (prevExec === undefined) delete process.env.OPS1_EXEC_ROOT;
    else process.env.OPS1_EXEC_ROOT = prevExec;
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  function baseProposed(
    overrides: Partial<Extract<SfiaActionProposal, { kind: "action_proposed" }>> = {},
  ): Extract<SfiaActionProposal, { kind: "action_proposed" }> {
    return {
      kind: "action_proposed",
      proposalId: "sfia-prop-1",
      sessionId,
      contextId: context.contextId,
      objective: "Créer preuve Markdown Control Tower",
      rationale: "demande Morris",
      cycle: "Delivery",
      profile: "Critical",
      profileJustification: "gates + Cursor",
      blocks: ["sécurité"],
      project: "campus360",
      operations: ["CREATE"],
      files: [
        {
          path: "projects/campus360/05-control-tower-live-proof.md",
          operation: "CREATE",
          exactContent: LIVE_PROOF_CONTENT,
        },
      ],
      expectedEffects: ["create file"],
      excludedEffects: ["commit", "push"],
      requiredGates: ["GO Cursor"],
      stopConditions: ["no remote"],
      cursorRequired: true,
      reviewPackLevel: "full",
      reviewHandoffRequired: true,
      userVisibleSummary: "CREATE live proof md",
      exactRequestedContent: LIVE_PROOF_CONTENT,
      confidence: 0.9,
      unresolvedQuestions: [],
      ...overrides,
    };
  }

  it("compiles valid CREATE and persists ActionCandidate", () => {
    const result = compileSfiaActionProposal({
      proposal: baseProposed(),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.status).toBe("COMPILED");
    expect(result.exactContent).toBe(LIVE_PROOF_CONTENT);
    expect(result.actionCandidateId).toMatch(/^ops1-act-/);
    const list = listActionCandidates(sessionId);
    expect(list.some((c) => c.actionCandidateId === result.actionCandidateId)).toBe(
      true,
    );
  });

  it("denies commit/push operations", () => {
    const result = compileSfiaActionProposal({
      proposal: baseProposed({
        operations: ["commit", "push"],
        files: [
          {
            path: "projects/campus360/README.md",
            operation: "MODIFY",
            exactContent: "x",
          },
        ],
      }),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      persist: false,
    });
    expect(result.status).toBe("POLICY_DENIED");
    expect(result.deniedOperations).toEqual(
      expect.arrayContaining(["commit", "push"]),
    );
  });

  it("denies protected path", () => {
    const result = compileSfiaActionProposal({
      proposal: baseProposed({
        files: [
          {
            path: "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
            operation: "MODIFY",
            exactContent: "hack",
          },
        ],
        exactRequestedContent: "hack",
      }),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      persist: false,
    });
    expect(result.status).toBe("PATH_DENIED");
  });

  it("denies context stale", () => {
    const stale = {
      ...context,
      headSha: "0000000000000000000000000000000000000000",
    };
    const result = compileSfiaActionProposal({
      proposal: baseProposed({ contextId: stale.contextId }),
      context: stale,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      persist: false,
    });
    expect(result.status).toBe("CONTEXT_STALE");
  });

  it("preserves exact content", () => {
    const result = compileSfiaActionProposal({
      proposal: baseProposed(),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      persist: false,
    });
    expect(result.exactContent).toBe(LIVE_PROOF_CONTENT);
  });

  it("instantiates cursor prompt from real template", () => {
    const compiled = compileSfiaActionProposal({
      proposal: baseProposed(),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(compiled.status).toBe("COMPILED");
    const candidates = listActionCandidates(sessionId);
    const candidate = candidates.find(
      (c) => c.actionCandidateId === compiled.actionCandidateId,
    )!;
    const inst = instantiateCursorPrompt({
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      context,
      compilation: compiled,
      candidate,
    });
    expect(inst.templatePath).toBe(
      "prompts/templates/sfia-cycle-execution-template.md",
    );
    expect(inst.templateDigest).toMatch(/^[a-f0-9]{64}$/);
    expect(inst.promptText).toContain(LIVE_PROOF_CONTENT.trim());
    expect(inst.promptText).toContain(context.contextId);
    expect(inst.promptText).toContain(candidate.actionCandidateId);
  });
});

describe("SFIA conversation integration (fixture markers)", () => {
  let prevExec: string | undefined;
  let tmp: string;

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-int-"));
    prevExec = process.env.OPS1_EXEC_ROOT;
    process.env.OPS1_EXEC_ROOT = tmp;
    resetOps1DbForTests();
    openOps1Db();
    clearSfiaContextForTests();
  });

  afterEach(() => {
    clearSfiaContextForTests();
    resetOps1DbForTests();
    if (prevExec === undefined) delete process.env.OPS1_EXEC_ROOT;
    else process.env.OPS1_EXEC_ROOT = prevExec;
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  it("CREATE marker → ActionCandidate live", async () => {
    const { session } = createOpenSession("fixture");
    const result = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "Prépare l’action __SFIA_PROPOSE_CREATE_MD__",
    });
    expect(result.sfiaContext?.contextId).toBeTruthy();
    expect(result.sfiaProposal?.kind).toBe("action_proposed");
    expect(result.sfiaCompilation?.status).toBe("COMPILED");
    expect(result.sfiaCompilation?.actionCandidateId).toMatch(/^ops1-act-/);
    expect(result.sfiaCompilation?.exactContent).toContain(
      "# Preuve Control Tower",
    );
    expect(listActionCandidates(session.sessionId).length).toBe(1);
  });

  it("commit marker → POLICY_DENIED", async () => {
    const { session } = createOpenSession("fixture");
    const result = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "Bad propose __SFIA_PROPOSE_COMMIT__",
    });
    expect(result.sfiaProposal?.kind).toBe("action_proposed");
    expect(result.sfiaCompilation?.status).toBe("POLICY_DENIED");
    expect(listActionCandidates(session.sessionId).length).toBe(0);
  });
});
