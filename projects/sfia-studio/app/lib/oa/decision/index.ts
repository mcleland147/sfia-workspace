/**
 * T-A3 Decision / Confirmation / Authority Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project + T-A2 cycle
 * public APIs only. Does not replace d1 / OPS1 / MethodMode. In-memory only.
 *
 * Critical cycle acknowledgment: T-A2 has no public AcknowledgeCriticalCycle
 * API. This foundation records decisions linking a cycle without mutating
 * cycle status (R-T-A3-1 reserve).
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/decisionRepository";
export * from "./ports/confirmationRepository";
export * from "./ports/authorityResolver";
export * from "./ports/decisionAudit";

export { RecordHumanDecision } from "./application/recordHumanDecision";
export { GetHumanDecision } from "./application/getHumanDecision";
export { ListDecisionHistory } from "./application/listDecisionHistory";
export { RequestConfirmation } from "./application/requestConfirmation";
export { GrantConfirmation } from "./application/grantConfirmation";
export { RefuseConfirmation } from "./application/refuseConfirmation";
export { ConsumeConfirmation } from "./application/consumeConfirmation";
export { CancelConfirmation } from "./application/cancelConfirmation";
export { SupersedeHumanDecision } from "./application/supersedeHumanDecision";
export { VerifyAuthority } from "./application/verifyAuthority";

export { MemoryDecisionStore } from "./infrastructure/memoryDecisionStore";
export { MemoryDecisionRepository } from "./infrastructure/memoryDecisionRepository";
export { MemoryConfirmationRepository } from "./infrastructure/memoryConfirmationRepository";
export { MemoryAuthorityResolver } from "./infrastructure/memoryAuthorityResolver";
export {
  ConsoleDecisionAuditJournal,
  MemoryDecisionAuditJournal,
} from "./infrastructure/observability";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type { ProjectServices } from "@/lib/oa/project";
import { CancelConfirmation } from "./application/cancelConfirmation";
import { ConsumeConfirmation } from "./application/consumeConfirmation";
import { GetHumanDecision } from "./application/getHumanDecision";
import { GrantConfirmation } from "./application/grantConfirmation";
import { ListDecisionHistory } from "./application/listDecisionHistory";
import { RecordHumanDecision } from "./application/recordHumanDecision";
import { RefuseConfirmation } from "./application/refuseConfirmation";
import { RequestConfirmation } from "./application/requestConfirmation";
import { SupersedeHumanDecision } from "./application/supersedeHumanDecision";
import { VerifyAuthority } from "./application/verifyAuthority";
import { MemoryAuthorityResolver } from "./infrastructure/memoryAuthorityResolver";
import { MemoryConfirmationRepository } from "./infrastructure/memoryConfirmationRepository";
import { MemoryDecisionRepository } from "./infrastructure/memoryDecisionRepository";
import { MemoryDecisionStore } from "./infrastructure/memoryDecisionStore";
import {
  ConsoleDecisionAuditJournal,
  MemoryDecisionAuditJournal,
} from "./infrastructure/observability";
import type { AuthorityResolverPort } from "./ports/authorityResolver";
import type { DecisionAuditPort } from "./ports/decisionAudit";

export type DecisionServices = {
  store: MemoryDecisionStore;
  decisions: MemoryDecisionRepository;
  confirmations: MemoryConfirmationRepository;
  authority: AuthorityResolverPort;
  audit: DecisionAuditPort;
  recordHumanDecision: RecordHumanDecision;
  getHumanDecision: GetHumanDecision;
  listDecisionHistory: ListDecisionHistory;
  requestConfirmation: RequestConfirmation;
  grantConfirmation: GrantConfirmation;
  refuseConfirmation: RefuseConfirmation;
  consumeConfirmation: ConsumeConfirmation;
  cancelConfirmation: CancelConfirmation;
  supersedeHumanDecision: SupersedeHumanDecision;
  verifyAuthority: VerifyAuthority;
};

export type CreateInMemoryDecisionServicesOptions = {
  projectServices: ProjectServices;
  cycleServices?: CycleServices;
  clock?: ClockPort;
  audit?: DecisionAuditPort;
  authorityResolver?: AuthorityResolverPort;
};

/** Factory for in-memory Decision/Confirmation/Authority services. */
export function createInMemoryDecisionServices(
  options: CreateInMemoryDecisionServicesOptions,
): DecisionServices {
  const store = new MemoryDecisionStore();
  const decisions = new MemoryDecisionRepository(store);
  const confirmations = new MemoryConfirmationRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleDecisionAuditJournal();
  const authority =
    options.authorityResolver ?? new MemoryAuthorityResolver();

  return {
    store,
    decisions,
    confirmations,
    authority,
    audit,
    recordHumanDecision: new RecordHumanDecision(
      decisions,
      authority,
      options.projectServices,
      options.cycleServices,
      clock,
      audit,
      store,
    ),
    getHumanDecision: new GetHumanDecision(decisions, clock, audit),
    listDecisionHistory: new ListDecisionHistory(decisions, clock, audit),
    requestConfirmation: new RequestConfirmation(
      confirmations,
      clock,
      audit,
      store,
    ),
    grantConfirmation: new GrantConfirmation(
      confirmations,
      authority,
      clock,
      audit,
      store,
    ),
    refuseConfirmation: new RefuseConfirmation(
      confirmations,
      clock,
      audit,
      store,
    ),
    consumeConfirmation: new ConsumeConfirmation(
      confirmations,
      clock,
      audit,
      store,
    ),
    cancelConfirmation: new CancelConfirmation(
      confirmations,
      clock,
      audit,
      store,
    ),
    supersedeHumanDecision: new SupersedeHumanDecision(
      decisions,
      authority,
      clock,
      audit,
      store,
    ),
    verifyAuthority: new VerifyAuthority(authority, clock, audit),
  };
}

export function createTestDecisionServices(
  options: CreateInMemoryDecisionServicesOptions & {
    audit?: MemoryDecisionAuditJournal;
    fixedNowIso?: string;
    authorityResolver?: MemoryAuthorityResolver;
  },
): DecisionServices & {
  audit: MemoryDecisionAuditJournal;
  authority: MemoryAuthorityResolver;
} {
  const audit = options.audit ?? new MemoryDecisionAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T07:00:00.000Z"));
  const authority =
    options.authorityResolver ?? new MemoryAuthorityResolver();
  return createInMemoryDecisionServices({
    ...options,
    clock,
    audit,
    authorityResolver: authority,
  }) as DecisionServices & {
    audit: MemoryDecisionAuditJournal;
    authority: MemoryAuthorityResolver;
  };
}
