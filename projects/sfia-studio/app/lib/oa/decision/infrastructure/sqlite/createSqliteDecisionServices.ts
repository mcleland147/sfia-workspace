import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type { ProjectServices, ProductSqliteHandle } from "@/lib/oa/project";
import { CancelConfirmation } from "../../application/cancelConfirmation";
import { ConsumeConfirmation } from "../../application/consumeConfirmation";
import { GetHumanDecision } from "../../application/getHumanDecision";
import { GrantConfirmation } from "../../application/grantConfirmation";
import { ListDecisionHistory } from "../../application/listDecisionHistory";
import { RecordHumanDecision } from "../../application/recordHumanDecision";
import { RefuseConfirmation } from "../../application/refuseConfirmation";
import { RequestConfirmation } from "../../application/requestConfirmation";
import { SupersedeHumanDecision } from "../../application/supersedeHumanDecision";
import { VerifyAuthority } from "../../application/verifyAuthority";
import { MemoryAuthorityResolver } from "../memoryAuthorityResolver";
import { MemoryConfirmationRepository } from "../memoryConfirmationRepository";
import { MemoryDecisionStore } from "../memoryDecisionStore";
import type { AuthorityResolverPort } from "../../ports/authorityResolver";
import type { ConfirmationRepositoryPort } from "../../ports/confirmationRepository";
import type { DecisionAuditPort } from "../../ports/decisionAudit";
import type { DecisionPersistenceUnitOfWorkPort } from "../../ports/decisionPersistenceUnitOfWorkPort";
import type { DecisionRepositoryPort } from "../../ports/decisionRepository";
import { SqliteDecisionAuditJournal } from "./sqliteDecisionAuditJournal";
import { SqliteDecisionRepository } from "./sqliteDecisionRepository";

export type CreateSqliteDecisionServicesOptions = {
  projectServices: ProjectServices;
  cycleServices?: CycleServices;
  /** Shared Product SQLite handle (same DB / UoW as Project/Cycle). */
  productStore: ProductSqliteHandle & DecisionPersistenceUnitOfWorkPort;
  clock?: ClockPort;
  audit?: DecisionAuditPort;
  authorityResolver?: AuthorityResolverPort;
};

export type SqliteDecisionServices = {
  store: DecisionPersistenceUnitOfWorkPort;
  decisions: DecisionRepositoryPort;
  confirmations: ConfirmationRepositoryPort;
  authority: AuthorityResolverPort;
  audit: DecisionAuditPort;
  productStore: ProductSqliteHandle;
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

/**
 * HumanDecision durable services on Product SQLite (M3).
 * Confirmations remain Memory (process-local) on a dedicated MemoryDecisionStore.
 */
export function createSqliteDecisionServices(
  options: CreateSqliteDecisionServicesOptions,
): SqliteDecisionServices {
  const productStore = options.productStore;
  const confirmationStore = new MemoryDecisionStore();
  const decisions = new SqliteDecisionRepository(productStore);
  const confirmations = new MemoryConfirmationRepository(confirmationStore);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteDecisionAuditJournal(productStore);
  const authority =
    options.authorityResolver ?? new MemoryAuthorityResolver();

  return {
    store: productStore,
    decisions,
    confirmations,
    authority,
    audit,
    productStore,
    recordHumanDecision: new RecordHumanDecision(
      decisions,
      authority,
      options.projectServices,
      options.cycleServices,
      clock,
      audit,
      productStore,
    ),
    getHumanDecision: new GetHumanDecision(decisions, clock, audit),
    listDecisionHistory: new ListDecisionHistory(decisions, clock, audit),
    requestConfirmation: new RequestConfirmation(
      confirmations,
      clock,
      audit,
      confirmationStore,
    ),
    grantConfirmation: new GrantConfirmation(
      confirmations,
      authority,
      clock,
      audit,
      confirmationStore,
    ),
    refuseConfirmation: new RefuseConfirmation(
      confirmations,
      clock,
      audit,
      confirmationStore,
    ),
    consumeConfirmation: new ConsumeConfirmation(
      confirmations,
      clock,
      audit,
      confirmationStore,
    ),
    cancelConfirmation: new CancelConfirmation(
      confirmations,
      clock,
      audit,
      confirmationStore,
    ),
    supersedeHumanDecision: new SupersedeHumanDecision(
      decisions,
      authority,
      clock,
      audit,
      productStore,
    ),
    verifyAuthority: new VerifyAuthority(authority, clock, audit),
  };
}

export function createTestSqliteDecisionServices(
  options: CreateSqliteDecisionServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteDecisionServices {
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-08-13T12:00:00.000Z"));
  return createSqliteDecisionServices({ ...options, clock });
}
