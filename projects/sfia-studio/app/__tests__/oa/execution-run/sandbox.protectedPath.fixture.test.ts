/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
  pathMatchesAllowlistPrefix,
} from "@/lib/oa/execution-run/domain/sandboxContract";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";

describe("D2D2-08 sandbox contract fixture", () => {
  it("deny-by-default and protects sensitive paths", () => {
    expect(
      evaluateSandboxPath({
        path: "secrets/x",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: ".git/config",
        allowlistRepos: ["projects/sfia-studio/", ".git/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/app/lib/oa/execution-run/index.ts",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(true);
  });

  it("blocks sibling prefix bypass and traversal", () => {
    expect(pathMatchesAllowlistPrefix("projects/sfia-studio-evil/secret.ts", "projects/sfia-studio")).toBe(
      false,
    );
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio-evil/secret.ts",
        allowlistRepos: ["projects/sfia-studio"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/deep/child.ts",
        allowlistRepos: ["projects/sfia-studio"],
      }).allowed,
    ).toBe(true);
    expect(
      evaluateSandboxPath({
        path: "../x",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "/abs",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects//sfia-studio/x",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
  });

  it("blocks git write and arbitrary commands", () => {
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: true,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
      }),
    ).toMatchObject({ allowed: false, reason: "git_write" });
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: true,
        gitWriteRequested: false,
      }),
    ).toMatchObject({ allowed: false, reason: "arbitrary_command" });
  });

  it("requires independent observed branch/HEAD anchors", () => {
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
        expectedBranch: "delivery/x",
      }),
    ).toMatchObject({ allowed: false, reason: "observed_missing" });
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
        expectedBranch: "delivery/x",
        observedBranch: "other",
      }),
    ).toMatchObject({ allowed: false, reason: "branch_mismatch" });
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
        expectedBranch: "delivery/x",
        observedBranch: "delivery/x",
        expectedHead: "abc",
        observedHead: "abc",
      }),
    ).toEqual({ allowed: true });
  });

  it("fixture cursor cannot claim live and stays unverified", async () => {
    const cursor = new FixtureCursorExecutionAdapter();
    expect(cursor.live).toBe(false);
    expect(cursor.describeCapability().verified).toBe(false);
    const denied = await cursor.executeFixture({
      correlationId: "cu1",
      lane: "cursor",
      operation: "fixture",
      instructionSummary: "path=.env",
      allowlistRepos: ["projects/sfia-studio/"],
      protectedPaths: [".env"],
      timeoutMs: 100,
    });
    expect(denied.kind).toBe("failure");

    const mismatch = await cursor.executeFixture({
      correlationId: "cu2",
      lane: "cursor",
      operation: "fixture",
      instructionSummary: "noop",
      allowlistRepos: ["projects/sfia-studio/"],
      protectedPaths: [],
      expectedBranch: "expected-only",
      observedBranch: "different",
      timeoutMs: 100,
    });
    expect(mismatch.kind).toBe("failure");
  });
});
