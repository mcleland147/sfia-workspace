/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { PlatformAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter";
import { PlatformGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter";
import { PlatformExecutionEventSinkAdapter } from "@/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import {
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import {
  runAiPortConformance,
  runCursorPortConformance,
  runEventSinkConformance,
  runGitPortConformance,
  runSecretPortConformance,
} from "@/lib/oa/execution-run/infrastructure/providerConformance";
import type { ConversationProvider } from "@/lib/platform/ai/types";
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
import type { SecretSourcePort } from "@/lib/oa/execution-run/ports/secretSourcePort";
import { NoopEventSink } from "@/lib/platform/observability/eventSink";

function stubGithub(): GithubReadPort {
  return {
    transport: "github_rest",
    async getRepository(owner, name) {
      return {
        fullName: `${owner}/${name}`,
        defaultBranch: "main",
        description: null,
        url: `https://example.test/${owner}/${name}`,
      };
    },
    async getBranch(_o, _n, branch) {
      return { name: branch, sha: "a".repeat(40) };
    },
    async getCommit(_o, _n, sha) {
      return { sha, message: "m", author: null };
    },
    async getPullRequest() {
      return {
        number: 1,
        title: "t",
        state: "open",
        headRef: "h",
        baseRef: "b",
        url: "https://example.test/pr/1",
      };
    },
    async listPullRequestComments() {
      return [];
    },
    async listChecks() {
      return [];
    },
  };
}

describe("D2D2-01 provider port conformance", () => {
  it("AI fake conforms and stays unverified", async () => {
    const port = new FakeAiExecutionAdapter();
    expect(await runAiPortConformance(port)).toEqual([]);
    expect(port.describeCapability().verified).toBe(false);
  });

  it("Git fake conforms, no write, unverified", async () => {
    const port = new FakeGitReadAdapter({
      repositoryAllowlist: ["example/example"],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    });
    expect(await runGitPortConformance(port)).toEqual([]);
    expect("write" in port).toBe(false);
    expect(port.describeCapability().verified).toBe(false);
  });

  it("Cursor fixture conforms with live=false unverified", async () => {
    const port = new FixtureCursorExecutionAdapter();
    expect(await runCursorPortConformance(port)).toEqual([]);
    expect(port.live).toBe(false);
    expect(port.describeCapability().verified).toBe(false);
  });

  it("platform AI + Git stubs pass same harness", async () => {
    const provider: ConversationProvider = {
      providerId: "stub",
      async complete() {
        return {
          text: "RAW should not appear in summary",
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: null,
            providerResponseId: null,
          },
        };
      },
    };
    expect(await runAiPortConformance(new PlatformAiExecutionAdapter(provider))).toEqual([]);
    expect(
      await runGitPortConformance(
        new PlatformGitReadAdapter(stubGithub(), "rest", {
          repositoryAllowlist: ["example/example"],
          pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
          defaultTimeoutMs: 1000,
        }),
      ),
    ).toEqual([]);
  });

  it("secret + event + exported composition conform", async () => {
    const secretsAdapter = new FakeSecretSourceAdapter();
    const secrets: SecretSourcePort = {
      resolve: (id) => secretsAdapter.resolve(id),
    };
    expect(await runSecretPortConformance(secrets)).toEqual([]);
    expect(runEventSinkConformance(new RecordingExecutionEventSink())).toEqual([]);
    expect(
      runEventSinkConformance(new PlatformExecutionEventSinkAdapter(new NoopEventSink())),
    ).toEqual([]);

    const fake = composeExecutionRunProvidersFake();
    expect(fake.disclosure.gD2dCursor01).toBe("NOT_CONSUMED");
    expect(await runAiPortConformance(fake.ai)).toEqual([]);
    expect(await runSecretPortConformance(fake.secrets)).toEqual([]);

    const composed = composeExecutionRunProviders({
      ai: new PlatformAiExecutionAdapter({
        providerId: "stub",
        async complete() {
          return {
            text: "x",
            usage: {
              inputTokens: null,
              outputTokens: null,
              totalTokens: null,
              model: null,
              providerResponseId: null,
            },
          };
        },
      }),
      git: new PlatformGitReadAdapter(stubGithub(), "rest", {
        repositoryAllowlist: ["example/example"],
        pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
        defaultTimeoutMs: 500,
      }),
      cursor: new FixtureCursorExecutionAdapter(),
      secrets,
      events: new RecordingExecutionEventSink(),
    });
    expect(await runGitPortConformance(composed.git)).toEqual([]);
  });
});
