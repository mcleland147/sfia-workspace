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
import type { AuthorityResolverPort } from "../../ports/authorityResolver";
import type { ConfirmationRepositoryPort } from "../../ports/confirmationRepository";
import type { DecisionAuditPort } from "../../ports/decisionAudit";
import type { DecisionPersistenceUnitOfWorkPort } from "../../ports/decisionPersistenceUnitOfWorkPort";
import type { DecisionRepositoryPort } from "../../ports/decisionRepository";
import { SqliteDecisionAuditJournal } from "./sqliteDecisionAuditJournal";
import { SqliteDecisionRepository } from "./sqliteDecisionRepository";
import { SqliteConfirmationRepository } from "./sqliteConfirmationRepository";

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
 * HumanDecision + Confirmation durable services on Product SQLite (M3/M6).
 */
export function createSqliteDecisionServices(
  options: CreateSqliteDecisionServicesOptions,
): SqliteDecisionServices {
  const productStore = options.productStore;
  const decisions = new SqliteDecisionRepository(productStore);
  const confirmations = new SqliteConfirmationRepository(productStore);
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
      productStore,
    ),
    grantConfirmation: new GrantConfirmation(
      confirmations,
      authority,
      clock,
      audit,
      productStore,
    ),
    refuseConfirmation: new RefuseConfirmation(
      confirmations,
      clock,
      audit,
      productStore,
    ),
    consumeConfirmation: new ConsumeConfirmation(
      confirmations,
      clock,
      audit,
      productStore,
    ),
    cancelConfirmation: new CancelConfirmation(
      confirmations,
      clock,
      audit,
      productStore,
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
