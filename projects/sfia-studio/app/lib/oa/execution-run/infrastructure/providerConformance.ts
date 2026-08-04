/**
 * D2D2-01 — shared conformance harness for fake + wrapper adapters.
 */
import type { AiExecutionPort } from "../ports/aiExecutionPort";
import type { GitReadPort } from "../ports/gitReadPort";
import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
import type { SecretSourcePort } from "../ports/secretSourcePort";
import type { ExecutionEventSinkPort } from "../ports/executionEventSinkPort";
import type { ProviderCapabilityDescriptor } from "../domain/types";
import { validateUntrustedProviderResult } from "../domain/providerBoundary";

export type ConformanceIssue = {
  readonly code: string;
  readonly message: string;
};

export function assertCapabilityShape(
  cap: ProviderCapabilityDescriptor,
  expectedLane: ProviderCapabilityDescriptor["lane"],
  opts?: { readonly requireUnverified?: boolean },
): ConformanceIssue[] {
  const issues: ConformanceIssue[] = [];
  if (cap.lane !== expectedLane) {
    issues.push({ code: "LANE_MISMATCH", message: `expected lane ${expectedLane}` });
  }
  if (typeof cap.capabilityId !== "string" || !cap.capabilityId) {
    issues.push({ code: "CAPABILITY_ID", message: "capabilityId required" });
  }
  if (typeof cap.available !== "boolean") {
    issues.push({ code: "AVAILABLE", message: "available must be boolean" });
  }
  if (typeof cap.verified !== "boolean") {
    issues.push({ code: "VERIFIED", message: "verified must be boolean" });
  }
  if (expectedLane === "cursor" && cap.verified === true) {
    issues.push({
      code: "CURSOR_VERIFIED_FORBIDDEN",
      message: "Cursor capability must remain unverified without G-D2D-CURSOR-01",
    });
  }
  if (opts?.requireUnverified && cap.verified === true) {
    issues.push({
      code: "VERIFIED_WITHOUT_EVIDENCE",
      message: "verified=true requires explicit evidence; fake/default must be false",
    });
  }
  if (expectedLane === "git" && cap.readOnly !== true) {
    issues.push({ code: "GIT_NOT_READONLY", message: "Git capability must be readOnly" });
  }
  return issues;
}

export async function runAiPortConformance(port: AiExecutionPort): Promise<ConformanceIssue[]> {
  const issues = assertCapabilityShape(port.describeCapability(), "ai", {
    requireUnverified: port.describeCapability().capabilityId.includes("fake"),
  });
  const result = await port.complete({
    correlationId: "conf-ai-1",
    lane: "ai",
    operation: "complete",
    messages: [{ role: "user", content: "ping sk-abcdefghijklmnopqrstuvwxyz alice@example.com" }],
    timeoutMs: 1000,
  });
  const v = validateUntrustedProviderResult(result, "conf-ai-1");
  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
  if (result.kind === "success") {
    if (/sk-|@|ghp_/i.test(result.redactedSummary)) {
      issues.push({ code: "SUMMARY_LEAK", message: "redactedSummary contains sensitive/user content" });
    }
  }
  return issues;
}

export async function runGitPortConformance(port: GitReadPort): Promise<ConformanceIssue[]> {
  const issues = assertCapabilityShape(port.describeCapability(), "git", {
    requireUnverified: port.transport === "fake",
  });
  if (typeof (port as { write?: unknown }).write === "function") {
    issues.push({ code: "WRITE_SURFACE", message: "Git write method must not exist" });
  }
  const result = await port.read({
    correlationId: "conf-git-1",
    lane: "git",
    operation: "read",
    owner: "example",
    repo: "example",
    kind: "repository",
    timeoutMs: 1000,
  });
  const v = validateUntrustedProviderResult(result, "conf-git-1");
  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
  if (!port.transport || port.transport === "undisclosed") {
    issues.push({ code: "TRANSPORT_UNDISCLOSED", message: "transport must be disclosed" });
  }
  const pathMeta = await port.read({
    correlationId: "conf-git-pm",
    lane: "git",
    operation: "read",
    owner: "example",
    repo: "example",
    kind: "path_meta",
    path: "projects/sfia-studio/README.md",
    timeoutMs: 1000,
  });
  if (pathMeta.kind !== "success" && pathMeta.kind !== "failure") {
    issues.push({ code: "PATH_META_KIND", message: "path_meta must return success or failure" });
  }
  return issues;
}

export async function runCursorPortConformance(
  port: CursorExecutionPort,
): Promise<ConformanceIssue[]> {
  const issues = assertCapabilityShape(port.describeCapability(), "cursor");
  if (port.live !== false) {
    issues.push({ code: "LIVE_CURSOR", message: "live Cursor forbidden in D2-D2" });
  }
  const result = await port.executeFixture({
    correlationId: "conf-cursor-1",
    lane: "cursor",
    operation: "fixture",
    instructionSummary: "noop",
    allowlistRepos: ["projects/sfia-studio/"],
    protectedPaths: [".git/"],
    timeoutMs: 1000,
  });
  const v = validateUntrustedProviderResult(result, "conf-cursor-1");
  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
  return issues;
}

export async function runSecretPortConformance(port: SecretSourcePort): Promise<ConformanceIssue[]> {
  const issues: ConformanceIssue[] = [];
  if ("materializeForServerOnly" in port) {
    issues.push({
      code: "PUBLIC_MATERIALIZE",
      message: "SecretSourcePort must not expose materializeForServerOnly",
    });
  }
  const resolved = await port.resolve("TEST_SECRET");
  const serialized = JSON.stringify(resolved);
  if (/__FAKE_OPAQUE|sk-|ghp_/i.test(serialized)) {
    issues.push({ code: "SECRET_IN_RESOLVE", message: "resolve leaked secret material" });
  }
  return issues;
}

export function runEventSinkConformance(sink: ExecutionEventSinkPort): ConformanceIssue[] {
  const issues: ConformanceIssue[] = [];
  try {
    sink.emit({
      type: "validation",
      correlationId: "conf-ev-1",
      runId: "r1",
      providerLane: "none",
      occurredAt: new Date().toISOString(),
      detail: { ok: true },
    });
  } catch (e) {
    issues.push({ code: "EVENT_EMIT", message: String(e) });
  }
  try {
    sink.emit({
      type: "validation",
      correlationId: "conf-ev-2",
      runId: "r1",
      providerLane: "none",
      occurredAt: new Date().toISOString(),
      detail: { nested: { apiKey: "x" } } as never,
    });
    issues.push({ code: "NESTED_ACCEPTED", message: "nested secret detail must be rejected" });
  } catch {
    // expected
  }
  return issues;
}
