/**
 * MERGE-01..12 — deterministic documentary merge contract (no GitHub REAL mutation).
 * Complements PG integration suites; focuses on fingerprint/mode/SHA/eligibility gates.
 */
import { afterEach, describe, expect, it } from "vitest";
import { mergeEffectFingerprint } from "@/domains/execution/fingerprint";
import type { MergePlan } from "@/domains/execution/types";
import { qualifyPlanEffectProviderMode } from "@/domains/execution/publication-steps";
import { mergePullRequestRemote } from "@/domains/integrations/github-app-auth";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import { isStudioError } from "@/lib/http-errors";
import {
  userStatementRequestsMergeOnly,
} from "@/domains/conversation/conversation-publication-mandate-guards";
import {
  userStatementHasOpenMergeCondition,
  userStatementRefusesMerge,
  userStatementRequestsPositiveMerge,
} from "@/domains/conversation/conversation-merge-authority";

const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const BASE = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const MERGE = "cccccccccccccccccccccccccccccccccccccccc";

function sampleMergePlan(over: Partial<MergePlan> = {}): MergePlan {
  return {
    repositoryId: "r1",
    repositoryFullName: "acme/docs",
    authorizationId: "a1",
    installationId: "i1",
    actorLogin: "pilot",
    publicationAttemptId: "efx_pub",
    publicationRefId: "dpr1",
    documentId: "doc1",
    revisionId: "rev1",
    targetPath: "docs/a.md",
    prNumber: 21,
    expectedHeadSha: HEAD,
    expectedBaseSha: BASE,
    expectedHeadRef: "studio/pub-21",
    expectedBaseRef: "main",
    publicationBranch: "studio/pub-21",
    effectProviderMode: "SCRIPTED",
    ...over,
  };
}

function jsonResponse(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("MERGE documentary contract (unit)", () => {
  afterEach(() => {
    resetScriptedStore();
  });

  it("MERGE-01 fingerprint binds publication provenance + PR", () => {
    const fp = mergeEffectFingerprint(sampleMergePlan());
    expect(fp).toHaveLength(64);
    expect(mergeEffectFingerprint(sampleMergePlan({ publicationAttemptId: "other" }))).not.toBe(fp);
    expect(mergeEffectFingerprint(sampleMergePlan({ prNumber: 99 }))).not.toBe(fp);
  });

  it("MERGE-02 mandate fingerprint includes frozen provider mode when set", () => {
    const without = sampleMergePlan();
    delete without.effectProviderMode;
    const withMode = sampleMergePlan({ effectProviderMode: "SCRIPTED" });
    expect(mergeEffectFingerprint(without)).not.toBe(mergeEffectFingerprint(withMode));
    expect(qualifyPlanEffectProviderMode(without)).toBe("UNKNOWN");
    expect(qualifyPlanEffectProviderMode(withMode)).toBe("SCRIPTED");
  });

  it("MERGE-03/11 publish≠merge lexical guards", () => {
    expect(userStatementRequestsMergeOnly("Fusionne la PR #21")).toBe(true);
    expect(userStatementRequestsPositiveMerge("Fusionne la PR documentaire #21")).toBe(true);
    expect(userStatementRequestsMergeOnly("Publie ce document sur GitHub")).toBe(false);
    expect(userStatementRefusesMerge("Ne fusionne pas")).toBe(true);
    expect(userStatementHasOpenMergeCondition("Fusionne uniquement après validation")).toBe(true);
  });

  it("MERGE-05 HEAD drift refuses before PUT", async () => {
    const fetchImpl = async () =>
      jsonResponse(200, {
        number: 21,
        title: "doc",
        state: "open",
        html_url: "https://github.com/o/r/pull/21",
        merged: false,
        mergeable: true,
        mergeable_state: "clean",
        head: { sha: MERGE, ref: "studio/pub-21" },
        base: { sha: BASE, ref: "main" },
      });
    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 21,
        expectedHeadSha: HEAD,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "CONFLICT");
  });

  it("MERGE-06 BASE drift refuses before PUT", async () => {
    const fetchImpl = async () =>
      jsonResponse(200, {
        number: 21,
        title: "doc",
        state: "open",
        html_url: "https://github.com/o/r/pull/21",
        merged: false,
        mergeable: true,
        mergeable_state: "clean",
        head: { sha: HEAD, ref: "studio/pub-21" },
        base: { sha: MERGE, ref: "main" },
      });
    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 21,
        expectedHeadSha: HEAD,
        expectedBaseSha: BASE,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "CONFLICT");
  });

  it("MERGE-07 permissions/rules refuse when not clean", async () => {
    const fetchImpl = async () =>
      jsonResponse(200, {
        number: 21,
        title: "doc",
        state: "open",
        html_url: "https://github.com/o/r/pull/21",
        merged: false,
        mergeable: true,
        mergeable_state: "blocked",
        head: { sha: HEAD, ref: "studio/pub-21" },
        base: { sha: BASE, ref: "main" },
      });
    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 21,
        expectedHeadSha: HEAD,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED");
  });

  it("MERGE-08 scripted success returns distinct merge commit SHA", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-merge-08";
    const fullName = "acme/docs";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    await provider.createBranch(pilotId, fullName, "studio/pub-21", mainSha);
    await provider.putFileContents({
      pilotId,
      fullName,
      path: "docs/a.md",
      branch: "studio/pub-21",
      message: "doc",
      content: "# a\n",
    });
    const pr = await provider.createPullRequest({
      pilotId,
      fullName,
      title: "doc",
      head: "studio/pub-21",
      base: "main",
      publicationMarker: "mk-21",
    });
    const merged = await provider.mergePullRequest({
      pilotId,
      fullName,
      prNumber: pr.number,
      expectedHeadSha: pr.headSha,
      expectedBaseSha: pr.baseSha,
    });
    expect(merged.merged).toBe(true);
    expect(merged.sha).toMatch(/^[0-9a-f]{40}$/);
    expect(merged.sha).not.toBe(pr.headSha);
    const after = await provider.getPullRequest(pilotId, fullName, pr.number);
    expect(after.state).toBe("merged");
    expect(after.mergeCommitSha).toBe(merged.sha);
  });

  it("MERGE-09/10 already-merged returns merge_commit_sha without second PUT", async () => {
    let puts = 0;
    const fetchImpl = async (_input: RequestInfo | URL, init?: RequestInit) => {
      const method = (init?.method ?? "GET").toUpperCase();
      if (method === "PUT") {
        puts += 1;
        return jsonResponse(500, { message: "no second merge" });
      }
      return jsonResponse(200, {
        number: 21,
        title: "doc",
        state: "closed",
        html_url: "https://github.com/o/r/pull/21",
        merged: true,
        merge_commit_sha: MERGE,
        head: { sha: HEAD, ref: "studio/pub-21" },
        base: { sha: BASE, ref: "main" },
      });
    };
    const first = await mergePullRequestRemote({
      token: "t",
      fullName: "o/r",
      prNumber: 21,
      expectedHeadSha: HEAD,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    const second = await mergePullRequestRemote({
      token: "t",
      fullName: "o/r",
      prNumber: 21,
      expectedHeadSha: HEAD,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(first.sha).toBe(MERGE);
    expect(second.sha).toBe(MERGE);
    expect(puts).toBe(0);
  });

  it("MERGE-12 fingerprint stability without inventing REAL mode", () => {
    const historical = sampleMergePlan();
    delete historical.effectProviderMode;
    expect(qualifyPlanEffectProviderMode(historical)).toBe("UNKNOWN");
    expect(qualifyPlanEffectProviderMode(sampleMergePlan({ effectProviderMode: "REAL" }))).toBe(
      "REAL",
    );
  });

  it("C3: merge into release advances release only — main unchanged", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-c3-release";
    const fullName = "acme/docs";
    const mainBefore = await provider.getRefSha(pilotId, fullName, "main");
    await provider.createBranch(pilotId, fullName, "release", mainBefore);
    await provider.createBranch(pilotId, fullName, "studio/pub-rel", mainBefore);
    await provider.putFileContents({
      pilotId,
      fullName,
      path: "docs/rel.md",
      branch: "studio/pub-rel",
      message: "doc",
      content: "# rel\n",
    });
    const pr = await provider.createPullRequest({
      pilotId,
      fullName,
      title: "doc-rel",
      head: "studio/pub-rel",
      base: "release",
      publicationMarker: "mk-rel",
    });
    const releaseBefore = await provider.getRefSha(pilotId, fullName, "release");
    const merged = await provider.mergePullRequest({
      pilotId,
      fullName,
      prNumber: pr.number,
      expectedHeadSha: pr.headSha,
      expectedBaseSha: pr.baseSha,
    });
    const mainAfter = await provider.getRefSha(pilotId, fullName, "main");
    const releaseAfter = await provider.getRefSha(pilotId, fullName, "release");
    expect(mainAfter).toBe(mainBefore);
    expect(releaseAfter).toBe(merged.sha);
    expect(releaseAfter).not.toBe(releaseBefore);
  });

  it("C3: merge into main advances main only", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-c3-main";
    const fullName = "acme/docs";
    const mainBefore = await provider.getRefSha(pilotId, fullName, "main");
    await provider.createBranch(pilotId, fullName, "release", mainBefore);
    await provider.createBranch(pilotId, fullName, "studio/pub-main", mainBefore);
    await provider.putFileContents({
      pilotId,
      fullName,
      path: "docs/main.md",
      branch: "studio/pub-main",
      message: "doc",
      content: "# main\n",
    });
    const pr = await provider.createPullRequest({
      pilotId,
      fullName,
      title: "doc-main",
      head: "studio/pub-main",
      base: "main",
      publicationMarker: "mk-main",
    });
    const releaseBefore = await provider.getRefSha(pilotId, fullName, "release");
    const merged = await provider.mergePullRequest({
      pilotId,
      fullName,
      prNumber: pr.number,
      expectedHeadSha: pr.headSha,
      expectedBaseSha: pr.baseSha,
    });
    const mainAfter = await provider.getRefSha(pilotId, fullName, "main");
    const releaseAfter = await provider.getRefSha(pilotId, fullName, "release");
    expect(mainAfter).toBe(merged.sha);
    expect(mainAfter).not.toBe(mainBefore);
    expect(releaseAfter).toBe(releaseBefore);
  });
});
