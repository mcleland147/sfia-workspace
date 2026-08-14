/**
 * RealLaunchSafetyJournalPort — technical Gate D + launch frontier journal (D-M4-02/04).
 *
 * NOT Product Store · NOT Attempt aggregate · NOT Confirmation · TEMPORARY WITH EXIT.
 */
import type {
  ContractSafetyIdentity,
  GateDGrant,
  RealLaunchFrontierKind,
  RealLaunchFrontierRecord,
  RealLaunchReconcileDisposition,
} from "../domain/realLaunchSafety";

export type PersistGateDGrantInput = {
  readonly grantId: string;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly attemptId: string;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly issuedAt: string;
  readonly expiresAt: string;
  readonly correlationId?: string;
};

/** @deprecated Prefer PersistGateDGrantInput. */
export type CreateGrantInput = PersistGateDGrantInput;

export type AtomicConsumeGateDAndCreateFrontierInput = {
  readonly grantId: string;
  readonly attemptId: string;
  readonly occurredAt: string;
  readonly identity: ContractSafetyIdentity;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly correlationId: string;
};

/** @deprecated Prefer AtomicConsumeGateDAndCreateFrontierInput. */
export type AtomicConsumeGrantAndCreateFrontierInput =
  AtomicConsumeGateDAndCreateFrontierInput;

export type MarkLaunchedInput = {
  readonly attemptId: string;
  readonly occurredAt: string;
  readonly identity: ContractSafetyIdentity;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly grantId: string;
  readonly correlationId: string;
  readonly processRef: string;
  readonly payload?: Record<string, unknown> | unknown;
};

export type ValidateGrantForStartInput = {
  readonly grantId: string;
  readonly attemptId: string;
  readonly actorId: string;
  readonly selectedAgentRef: string;
  readonly identity: ContractSafetyIdentity;
  readonly nowIso: string;
};

export type GrantValidationResult =
  | { readonly ok: true; readonly grant: GateDGrant }
  | {
      readonly ok: false;
      readonly reason:
        | "GATE_D_REQUIRED"
        | "GATE_D_INVALID"
        | "GATE_D_EXPIRED"
        | "GATE_D_ALREADY_CONSUMED"
        | "GATE_D_BINDING_MISMATCH";
    };

/**
 * Canonical M4 journal port used by StartExecution + GrantRealExecutionGate.
 * Implementations may also expose transitional aliases (createGrant, markLaunched, …).
 */
export interface RealLaunchSafetyJournalPort {
  persistGateDGrant(input: PersistGateDGrantInput): Promise<GateDGrant>;
  findGateDGrant(grantId: string): Promise<GateDGrant | null>;
  findActiveGateDGrantForAttempt(attemptId: string): Promise<GateDGrant | null>;
  consumeGateDAndAppendCreated(
    input: AtomicConsumeGateDAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }>;
  appendLaunched(input: MarkLaunchedInput): Promise<RealLaunchFrontierRecord>;
  findFrontierByAttempt(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]>;
  findFrontierByIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]>;
  hasAmbiguousFrontier(identity: ContractSafetyIdentity): Promise<boolean>;
  reconcileDispositionForIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchReconcileDisposition>;
  hasKindForAttempt(
    attemptId: string,
    kind: RealLaunchFrontierKind,
  ): Promise<boolean>;
}

/**
 * Extended journal surface used by transitional GrantGateD / Memory journal.
 * Includes both task names and alternate names.
 */
export interface LaunchSafetyJournalPort extends RealLaunchSafetyJournalPort {
  createGrant(input: CreateGrantInput): Promise<GateDGrant>;
  findGrant(grantId: string): Promise<GateDGrant | null>;
  validateGrantForStart(
    input: ValidateGrantForStartInput,
  ): Promise<GrantValidationResult>;
  atomicConsumeGrantAndCreateFrontier(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }>;
  markLaunched(input: MarkLaunchedInput): Promise<RealLaunchFrontierRecord>;
  findFrontierByAttemptId(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]>;
  findFrontierByContractFingerprint(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]>;
}
