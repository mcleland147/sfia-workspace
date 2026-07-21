import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  CAMPUS360_ALLOWLIST_POLICY,
  UNDECLARED_PATH_REASON,
  decideAgainstAllowlistPolicy,
  evaluateAllowlist,
} from "@/lib/ops1/allowlistEvaluation";
import {
  evaluateAndPersistAllowlist,
  getLatestAllowlistEvaluation,
  supersedeAllowlistEvaluationsForAction,
} from "@/lib/ops1/allowlistService";
import { createFixtureActionCandidate } from "@/lib/ops1/actionGate";
import { createOpenSession } from "@/lib/ops1/repository";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import type { AllowlistMode } from "@/lib/ops1/types";

const ACTION_ID = "ops1-act-11111111-1111-4111-8111-111111111111";

function expectRejected(
  pathValue: string,
  mode: AllowlistMode,
  workspaceRoot: string,
  reasonMatch: RegExp | string,
) {
  const result = evaluateAllowlist({
    actionCandidateId: ACTION_ID,
    actionVersion: 1,
    workspaceRoot,
    entries: [{ path: pathValue, mode }],
  });
  const entry = result.evaluatedEntries[0];
  expect(entry?.evaluationStatus).toMatch(/DENIED|INVALID/);
  expect(entry?.evaluationReason).toMatch(
    typeof reasonMatch === "string" ? new RegExp(reasonMatch, "i") : reasonMatch,
  );
  expect(result.allowedReads).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.allowedModifies).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.allowedCreates).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.status).not.toBe("VALID");
}

function expectDenied(
  pathValue: string,
  mode: AllowlistMode,
  workspaceRoot: string,
  reasonMatch: RegExp | string,
) {
  const result = evaluateAllowlist({
    actionCandidateId: ACTION_ID,
    actionVersion: 1,
    workspaceRoot,
    entries: [{ path: pathValue, mode }],
  });
  const entry = result.evaluatedEntries[0];
  expect(entry?.evaluationStatus).toBe("DENIED");
  expect(entry?.evaluationReason).toMatch(
    typeof reasonMatch === "string" ? new RegExp(reasonMatch, "i") : reasonMatch,
  );
  expect(result.allowedReads).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.allowedModifies).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.allowedCreates).not.toContain(
    entry?.normalizedPath ?? pathValue,
  );
  expect(result.deniedPaths.length).toBeGreaterThan(0);
  expect(result.status).not.toBe("VALID");
}

describe("ops1 I4 allowlist evaluation — declarative deny-by-default", () => {
  let tmpRoot: string;
  let workspaceRoot: string;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i4-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
    resetOps1DbForTests();

    workspaceRoot = path.join(tmpRoot, "workspace");
    const campus = path.join(workspaceRoot, "projects", "campus360");
    fs.mkdirSync(campus, { recursive: true });
    for (const name of [
      "README.md",
      "01-opportunity-and-vision.md",
      "02-sfia-cycle-coverage-hypothesis.md",
      "03-pre-framing-decision-pack.md",
      "99-unlisted-extra.md",
    ]) {
      fs.writeFileSync(path.join(campus, name), `# ${name}\n`, "utf8");
    }
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  it("exposes an explicit policy map", () => {
    expect(CAMPUS360_ALLOWLIST_POLICY["projects/campus360/README.md"]).toEqual([
      "READ",
      "MODIFY",
    ]);
    expect(
      CAMPUS360_ALLOWLIST_POLICY[
        "projects/campus360/03-pre-framing-decision-pack.md"
      ],
    ).toEqual(["READ"]);
    expect(
      decideAgainstAllowlistPolicy(
        "projects/campus360/99-unlisted-extra.md",
        "READ",
      ).allowed,
    ).toBe(false);
  });

  it("allows only declared READ/MODIFY/CREATE cases", () => {
    const result = evaluateAllowlist({
      actionCandidateId: ACTION_ID,
      actionVersion: 1,
      workspaceRoot,
      entries: [
        { path: "projects/campus360/README.md", mode: "READ" },
        { path: "projects/campus360/README.md", mode: "MODIFY" },
        {
          path: "projects/campus360/01-opportunity-and-vision.md",
          mode: "READ",
        },
        {
          path: "projects/campus360/01-opportunity-and-vision.md",
          mode: "MODIFY",
        },
        {
          path: "projects/campus360/02-sfia-cycle-coverage-hypothesis.md",
          mode: "READ",
        },
        {
          path: "projects/campus360/02-sfia-cycle-coverage-hypothesis.md",
          mode: "MODIFY",
        },
        {
          path: "projects/campus360/03-pre-framing-decision-pack.md",
          mode: "READ",
        },
        { path: "projects/campus360/04-new-note.md", mode: "CREATE" },
      ],
    });
    expect(result.status).toBe("VALID");
    expect(result.evaluatedEntries.every((e) => e.evaluationStatus === "ALLOWED")).toBe(
      true,
    );
    expect(result.deniedPaths).toEqual([]);
    expect(result.uiStatusLabel).toContain("AUCUNE EXÉCUTION");
  });

  it("denies MODIFY on protected 03 with explicit reason", () => {
    expectDenied(
      "projects/campus360/03-pre-framing-decision-pack.md",
      "MODIFY",
      workspaceRoot,
      /protégé|MODIFY interdit/i,
    );
  });

  it("TOUT CHEMIN NON DÉCLARÉ = DENIED — unlisted existing Campus360 markdown", () => {
    for (const mode of ["READ", "MODIFY"] as const) {
      const result = evaluateAllowlist({
        actionCandidateId: ACTION_ID,
        actionVersion: 1,
        workspaceRoot,
        entries: [
          { path: "projects/campus360/99-unlisted-extra.md", mode },
        ],
      });
      const entry = result.evaluatedEntries[0];
      expect(entry?.evaluationStatus).toBe("DENIED");
      expect(entry?.evaluationReason).toBe(UNDECLARED_PATH_REASON);
      expect(result.allowedReads).not.toContain(
        "projects/campus360/99-unlisted-extra.md",
      );
      expect(result.allowedModifies).not.toContain(
        "projects/campus360/99-unlisted-extra.md",
      );
      expect(result.deniedPaths).toContain(
        "projects/campus360/99-unlisted-extra.md",
      );
    }
  });

  it("denies READ/MODIFY of absent NN-*.md and CREATE on declared files", () => {
    expectDenied(
      "projects/campus360/04-future.md",
      "READ",
      workspaceRoot,
      UNDECLARED_PATH_REASON,
    );
    expectDenied(
      "projects/campus360/04-future.md",
      "MODIFY",
      workspaceRoot,
      UNDECLARED_PATH_REASON,
    );
    expectDenied(
      "projects/campus360/README.md",
      "CREATE",
      workspaceRoot,
      /CREATE|politique/i,
    );
    expectDenied(
      "projects/campus360/01-opportunity-and-vision.md",
      "CREATE",
      workspaceRoot,
      /CREATE|politique/i,
    );
  });

  it("denies case mismatch, trailing slash, wildcard, absolute, .., outside, secrets", () => {
    expectRejected(
      "Projects/campus360/README.md",
      "READ",
      workspaceRoot,
      /Hors projects\/campus360|absent de la politique|interdit/i,
    );
    const trailing = evaluateAllowlist({
      actionCandidateId: ACTION_ID,
      actionVersion: 1,
      workspaceRoot,
      entries: [{ path: "projects/campus360/README.md/", mode: "READ" }],
    });
    expect(trailing.evaluatedEntries[0]?.evaluationStatus).toMatch(
      /DENIED|INVALID/,
    );
    expect(trailing.evaluatedEntries[0]?.evaluationReason).toMatch(
      /Segment vide|« \.\. »|interdit/i,
    );
    expect(trailing.status).not.toBe("VALID");
    expectRejected("projects/campus360/**", "READ", workspaceRoot, /Wildcard/i);
    expectRejected("/tmp/x.md", "READ", workspaceRoot, /absolu/i);
    expectRejected(
      "projects/campus360/../secret.md",
      "READ",
      workspaceRoot,
      /\.\./i,
    );
    expectDenied(
      "projects/sfia-studio/app/lib/ops1/types.ts",
      "READ",
      workspaceRoot,
      /hors|protég/i,
    );
    expectDenied(
      "method/sfia-fast-track/core/x.md",
      "READ",
      workspaceRoot,
      /method/i,
    );
    expectDenied(
      "prompts/templates/x.md",
      "READ",
      workspaceRoot,
      /prompts|protég/i,
    );
    expectDenied("projects/campus360/.env", "READ", workspaceRoot, /\.env|interdit/i);
  });

  it("denies CREATE existing, MODIFY absent declared path, CREATE+MODIFY, duplicate, symlink escape", () => {
    expectDenied(
      "projects/campus360/README.md",
      "CREATE",
      workspaceRoot,
      /CREATE|politique/i,
    );
    // MODIFY on declared path but file deleted
    fs.unlinkSync(
      path.join(workspaceRoot, "projects/campus360/README.md"),
    );
    expectDenied(
      "projects/campus360/README.md",
      "MODIFY",
      workspaceRoot,
      /absent/i,
    );

    const contradiction = evaluateAllowlist({
      actionCandidateId: ACTION_ID,
      actionVersion: 1,
      workspaceRoot,
      entries: [
        { path: "projects/campus360/04-new.md", mode: "CREATE" },
        { path: "projects/campus360/04-new.md", mode: "MODIFY" },
      ],
    });
    expect(
      contradiction.evaluatedEntries.every((e) => e.evaluationStatus !== "ALLOWED"),
    ).toBe(true);

    // restore README for symlink test setup in fresh state — recreate workspace file
    fs.writeFileSync(
      path.join(workspaceRoot, "projects/campus360/README.md"),
      "# README\n",
      "utf8",
    );
    const campus = path.join(workspaceRoot, "projects", "campus360");
    const outside = path.join(workspaceRoot, "outside-secret.md");
    fs.writeFileSync(outside, "nope", "utf8");
    fs.symlinkSync(outside, path.join(campus, "linked.md"));
    expectDenied(
      "projects/campus360/linked.md",
      "READ",
      workspaceRoot,
      /Symlink|absent de la politique/i,
    );
  });

  it("denies outside campus360, empty, and persists/supersedes evaluations", () => {
    expectRejected("   ", "READ", workspaceRoot, /vide/i);

    openOps1Db();
    const { session } = createOpenSession("fixture");
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    const { evaluation } = evaluateAndPersistAllowlist({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      entries: [{ path: "projects/campus360/README.md", mode: "READ" }],
      workspaceRoot,
    });
    expect(evaluation.status).toBe("VALID");
    expect(
      getLatestAllowlistEvaluation(
        candidate.actionCandidateId,
        candidate.version,
      )?.evaluationId,
    ).toBe(evaluation.evaluationId);

    supersedeAllowlistEvaluationsForAction(candidate.actionCandidateId);
    expect(
      getLatestAllowlistEvaluation(
        candidate.actionCandidateId,
        candidate.version,
      ),
    ).toBeNull();
  });

  it("fails for missing action candidate", () => {
    openOps1Db();
    const { session } = createOpenSession("fixture");
    expect(() =>
      evaluateAndPersistAllowlist({
        sessionId: session.sessionId,
        actionCandidateId: "ops1-act-00000000-0000-4000-8000-000000000000",
        entries: [{ path: "projects/campus360/README.md", mode: "READ" }],
        workspaceRoot,
      }),
    ).toThrow(/introuvable/i);
  });
});
