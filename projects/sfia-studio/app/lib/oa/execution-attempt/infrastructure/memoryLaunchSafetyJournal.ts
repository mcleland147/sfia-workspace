/**
 * MemoryLaunchSafetyJournal — in-memory journal for unit tests.
 * Prefer SqliteLaunchSafetyJournal with temp files for durability proofs.
 */
import { randomBytes } from "node:crypto";
import type {
  ContractSafetyIdentity,
  GateDGrant,
  RealLaunchFrontierKind,
  RealLaunchFrontierRecord,
  RealLaunchReconcileDisposition,
} from "../domain/realLaunchSafety";
import type {
  AtomicConsumeGrantAndCreateFrontierInput,
  CreateGrantInput,
  GrantValidationResult,
  LaunchSafetyJournalPort,
  MarkLaunchedInput,
  ValidateGrantForStartInput,
} from "../ports/launchSafetyJournalPort";

function newId(prefix: string): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function identityKey(identity: ContractSafetyIdentity): string {
  return `${identity.executionContractId}|${identity.executionContractVersion}|${identity.semanticFingerprint}`;
}

export class MemoryLaunchSafetyJournal implements LaunchSafetyJournalPort {
  private readonly grants = new Map<string, GateDGrant>();
  private readonly frontier: RealLaunchFrontierRecord[] = [];
  /** When true, next atomicConsume throws before mutating (adversarial). */
  failNextAtomicConsume = false;

  async createGrant(input: CreateGrantInput): Promise<GateDGrant> {
    if (this.grants.has(input.grantId)) {
      throw new Error("m4_gate_d_duplicate_grant_id");
    }
    for (const g of this.grants.values()) {
      if (g.attemptId === input.attemptId && g.status === "granted") {
        throw new Error("m4_gate_d_attempt_unique");
      }
    }
    const grant: GateDGrant = Object.freeze({
      grantId: input.grantId,
      executionContractId: input.executionContractId,
      executionContractVersion: input.executionContractVersion,
      semanticFingerprint: input.semanticFingerprint,
      attemptId: input.attemptId,
      selectedAgentRef: input.selectedAgentRef,
      actorId: input.actorId,
      issuedAt: input.issuedAt,
      expiresAt: input.expiresAt,
      status: "granted",
      correlationId: input.correlationId,
    });
    this.grants.set(grant.grantId, grant);
    return grant;
  }

  async findGrant(grantId: string): Promise<GateDGrant | null> {
    return this.grants.get(grantId) ?? null;
  }

  async findActiveGateDGrantForAttempt(
    attemptId: string,
  ): Promise<GateDGrant | null> {
    for (const g of this.grants.values()) {
      if (g.attemptId === attemptId && g.status === "granted") return g;
    }
    return null;
  }

  async validateGrantForStart(
    input: ValidateGrantForStartInput,
  ): Promise<GrantValidationResult> {
    const grant = await this.findGrant(input.grantId);
    if (!grant) return { ok: false, reason: "GATE_D_REQUIRED" };
    if (grant.status === "consumed") {
      return { ok: false, reason: "GATE_D_ALREADY_CONSUMED" };
    }
    if (grant.status !== "granted") {
      return { ok: false, reason: "GATE_D_INVALID" };
    }
    if (Date.parse(grant.expiresAt) <= Date.parse(input.nowIso)) {
      return { ok: false, reason: "GATE_D_EXPIRED" };
    }
    if (
      grant.attemptId !== input.attemptId ||
      grant.actorId !== input.actorId ||
      grant.selectedAgentRef !== input.selectedAgentRef ||
      grant.executionContractId !== input.identity.executionContractId ||
      grant.executionContractVersion !==
        input.identity.executionContractVersion ||
      grant.semanticFingerprint !== input.identity.semanticFingerprint
    ) {
      return { ok: false, reason: "GATE_D_BINDING_MISMATCH" };
    }
    return { ok: true, grant };
  }

  async atomicConsumeGrantAndCreateFrontier(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
    if (this.failNextAtomicConsume) {
      this.failNextAtomicConsume = false;
      throw new Error("m4_journal_atomic_consume_forced_fail");
    }
    const validated = await this.validateGrantForStart({
      grantId: input.grantId,
      attemptId: input.attemptId,
      actorId: input.actorId,
      selectedAgentRef: input.selectedAgentRef,
      identity: input.identity,
      nowIso: input.occurredAt,
    });
    if (!validated.ok) {
      throw new Error(`m4_${validated.reason.toLowerCase()}`);
    }
    if (await this.hasAmbiguousFrontier(input.identity)) {
      throw new Error("m4_launch_frontier_ambiguous");
    }
    const consumed: GateDGrant = Object.freeze({
      ...validated.grant,
      status: "consumed" as const,
      consumedAt: input.occurredAt,
    });
    this.grants.set(consumed.grantId, consumed);
    const created: RealLaunchFrontierRecord = Object.freeze({
      recordId: newId("m4fr"),
      kind: "CREATED",
      occurredAt: input.occurredAt,
      executionContractId: input.identity.executionContractId,
      executionContractVersion: input.identity.executionContractVersion,
      semanticFingerprint: input.identity.semanticFingerprint,
      attemptId: input.attemptId,
      selectedAgentRef: input.selectedAgentRef,
      actorId: input.actorId,
      grantId: input.grantId,
      correlationId: input.correlationId,
      payloadJson: "{}",
    });
    this.frontier.push(created);
    return { grant: consumed, created };
  }

  async markLaunched(
    input: MarkLaunchedInput,
  ): Promise<RealLaunchFrontierRecord> {
    const hasCreated = this.frontier.some(
      (r) => r.attemptId === input.attemptId && r.kind === "CREATED",
    );
    if (!hasCreated) throw new Error("m4_launched_requires_created");
    const launched: RealLaunchFrontierRecord = Object.freeze({
      recordId: newId("m4fr"),
      kind: "LAUNCHED",
      occurredAt: input.occurredAt,
      executionContractId: input.identity.executionContractId,
      executionContractVersion: input.identity.executionContractVersion,
      semanticFingerprint: input.identity.semanticFingerprint,
      attemptId: input.attemptId,
      selectedAgentRef: input.selectedAgentRef,
      actorId: input.actorId,
      grantId: input.grantId,
      correlationId: input.correlationId,
      processRef: input.processRef,
      payloadJson: JSON.stringify(input.payload ?? {}),
    });
    this.frontier.push(launched);
    return launched;
  }

  async findFrontierByContractFingerprint(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]> {
    const key = identityKey(identity);
    return this.frontier.filter((r) => identityKey(r) === key);
  }

  async findFrontierByAttemptId(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.frontier.filter((r) => r.attemptId === attemptId);
  }

  async hasAmbiguousFrontier(
    identity: ContractSafetyIdentity,
  ): Promise<boolean> {
    const rows = await this.findFrontierByContractFingerprint(identity);
    return rows.length > 0;
  }

  async reconcileDispositionForIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchReconcileDisposition> {
    const rows = await this.findFrontierByContractFingerprint(identity);
    if (rows.length === 0) return "CLEAR";
    if (rows.some((r) => r.kind === "LAUNCHED")) return "REVIEW_REQUIRED";
    if (rows.some((r) => r.kind === "CREATED")) return "UNKNOWN";
    return "REVIEW_REQUIRED";
  }

  async hasKindForAttempt(
    attemptId: string,
    kind: RealLaunchFrontierKind,
  ): Promise<boolean> {
    return this.frontier.some((r) => r.attemptId === attemptId && r.kind === kind);
  }

  async persistGateDGrant(input: CreateGrantInput): Promise<GateDGrant> {
    return this.createGrant(input);
  }

  async findGateDGrant(grantId: string): Promise<GateDGrant | null> {
    return this.findGrant(grantId);
  }

  async consumeGateDAndAppendCreated(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
    return this.atomicConsumeGrantAndCreateFrontier(input);
  }

  async appendLaunched(
    input: MarkLaunchedInput,
  ): Promise<RealLaunchFrontierRecord> {
    return this.markLaunched(input);
  }

  async findFrontierByAttempt(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.findFrontierByAttemptId(attemptId);
  }

  async findFrontierByIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.findFrontierByContractFingerprint(identity);
  }
}
