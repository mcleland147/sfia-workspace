/**
 * Server-only composition for D2-D2 provider adapters.
 * Does not replace composeExecutionRunMemory — additive wiring only.
 */
import { assertServerOnly } from "./serverOnly";
import { FakeAiExecutionAdapter } from "../infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "../infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "../infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "../infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "../infrastructure/events/recordingExecutionEventSink";
import type { AiExecutionPort } from "../ports/aiExecutionPort";
import type { GitReadPort } from "../ports/gitReadPort";
import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
import type { SecretSourcePort } from "../ports/secretSourcePort";
import type { ExecutionEventSinkPort } from "../ports/executionEventSinkPort";

export type ExecutionRunProviderComposition = {
  readonly ai: AiExecutionPort;
  readonly git: GitReadPort;
  readonly cursor: CursorExecutionPort;
  readonly secrets: SecretSourcePort;
  readonly events: ExecutionEventSinkPort;
  readonly disclosure: {
    readonly cursorLive: false;
    readonly gitWrite: false;
    readonly providersLiveDefault: false;
    readonly memory: "process_local";
    readonly gD2dCursor01: "NOT_CONSUMED";
  };
};

/** Compose with injected ports — used by fake and platform-stub compositions alike. */
export function composeExecutionRunProviders(input: {
  readonly ai: AiExecutionPort;
  readonly git: GitReadPort;
  readonly cursor: CursorExecutionPort;
  readonly secrets: SecretSourcePort;
  readonly events: ExecutionEventSinkPort;
}): ExecutionRunProviderComposition {
  assertServerOnly();
  return {
    ai: input.ai,
    git: input.git,
    cursor: input.cursor,
    secrets: input.secrets,
    events: input.events,
    disclosure: {
      cursorLive: false,
      gitWrite: false,
      providersLiveDefault: false,
      memory: "process_local",
      gD2dCursor01: "NOT_CONSUMED",
    },
  };
}

export function composeExecutionRunProvidersFake(): ExecutionRunProviderComposition {
  const secretsAdapter = new FakeSecretSourceAdapter();
  return composeExecutionRunProviders({
    ai: new FakeAiExecutionAdapter(),
    git: new FakeGitReadAdapter({
      repositoryAllowlist: ["o/r", "example/example", "mcleland147/sfia-workspace"],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    }),
    cursor: new FixtureCursorExecutionAdapter(),
    // Public composition exposes resolve-only port — no materialize surface.
    secrets: {
      resolve: (secretId) => secretsAdapter.resolve(secretId),
    },
    events: new RecordingExecutionEventSink(),
  });
}
