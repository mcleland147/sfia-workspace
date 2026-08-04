/**
 * D2-D2 provider-independent result / request contracts.
 * Pure types — no SDK, Node, or platform imports.
 */
import type {
  Completeness,
  NormalizedFailure,
  ProviderLane,
  UsageSummary,
} from "../domain/types";

export type ProviderOperationKind =
  | "complete"
  | "git_read"
  | "cursor_fixture"
  | "secret_resolve"
  | "event_emit";

export type ProviderRequestBase = {
  readonly correlationId: string;
  readonly runId?: string;
  readonly lane: ProviderLane;
  readonly operation: string;
  readonly signal?: AbortSignal;
  readonly timeoutMs?: number;
};

export type AiCompletionRequest = ProviderRequestBase & {
  readonly lane: "ai";
  readonly messages: readonly { readonly role: "system" | "user" | "assistant"; readonly content: string }[];
  readonly modelHint?: string;
};

export type GitReadRequest = ProviderRequestBase & {
  readonly lane: "git";
  readonly owner: string;
  readonly repo: string;
  readonly ref?: string;
  readonly path?: string;
  readonly kind: "repository" | "branch" | "commit" | "path_meta";
};

export type CursorFixtureRequest = ProviderRequestBase & {
  readonly lane: "cursor";
  readonly instructionSummary: string;
  readonly allowlistRepos: readonly string[];
  readonly protectedPaths: readonly string[];
  readonly expectedBranch?: string;
  readonly expectedHead?: string;
  /** Independent observed anchors — must not be copied from expected. */
  readonly observedBranch?: string;
  readonly observedHead?: string;
};

export type ProviderSuccessPayload = {
  readonly kind: "success";
  readonly completeness: Completeness;
  readonly redactedSummary: string;
  /** Never contains raw provider payload or secrets. */
  readonly disclosureNotes: readonly string[];
  readonly usage: UsageSummary;
};

export type ProviderFailurePayload = {
  readonly kind: "failure";
  readonly failure: NormalizedFailure;
};

export type ProviderCancelledPayload = {
  readonly kind: "cancelled";
  readonly failure: NormalizedFailure;
};

export type ProviderTimedOutPayload = {
  readonly kind: "timed_out";
  readonly failure: NormalizedFailure;
};

export type ProviderInvocationResult =
  | ProviderSuccessPayload
  | ProviderFailurePayload
  | ProviderCancelledPayload
  | ProviderTimedOutPayload;

export type LateProviderResultRecord = {
  readonly kind: "late_result";
  readonly receivedAt: string;
  readonly terminalStateAtReceipt: string;
  readonly redactedSummary: string;
  readonly mutatesTerminal: false;
};
