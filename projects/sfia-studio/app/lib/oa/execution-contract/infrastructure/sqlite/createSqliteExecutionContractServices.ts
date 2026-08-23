import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ProjectServices, ProductSqliteHandle } from "@/lib/oa/project";
import { BuildExecutionContract } from "../../application/buildExecutionContract";
import { CancelExecutionContract } from "../../application/cancelExecutionContract";
import { CheckExecutionAuthorization } from "../../application/checkExecutionAuthorization";
import { ConfirmExecutionContract } from "../../application/confirmExecutionContract";
import { GetExecutionContract } from "../../application/getExecutionContract";
import { ListExecutionContractHistory } from "../../application/listExecutionContractHistory";
import { SupersedeExecutionContract } from "../../application/supersedeExecutionContract";
import { ValidateExecutionContract } from "../../application/validateExecutionContract";
import { RecordAuthorityVerification } from "../../application/recordAuthorityVerification";
import {
  GetContractInspectionState,
  RecordContractInspection,
} from "../../application/recordContractInspection";
import type { ExecutionAuditPort } from "../../ports/executionAudit";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionContractRepositoryPort } from "../../ports/executionContractRepository";
import type { InspectionAttestationRepositoryPort } from "../../ports/inspectionAttestationRepository";
import type { AuthorityVerificationReceiptRepositoryPort } from "../../ports/authorityVerificationReceiptRepository";
import { SqliteExecutionAuditJournal } from "./sqliteExecutionAuditJournal";
import { SqliteExecutionContractRepository } from "./sqliteExecutionContractRepository";
import { SqliteAuthorityVerificationReceiptRepository } from "./sqliteAuthorityVerificationReceiptRepository";
import { SqliteInspectionAttestationRepository } from "./sqliteInspectionAttestationRepository";

export type CreateSqliteExecutionContractServicesOptions = {
  projectServices: ProjectServices;
  decisionServices: DecisionServices;
  cycleServices?: CycleServices;
  productStore: ProductSqliteHandle & ExecutionContractPersistenceUnitOfWorkPort;
  clock?: ClockPort;
  audit?: ExecutionAuditPort;
  authorityResolver?: AuthorityResolverPort;
};

export type SqliteExecutionContractServices = {
  store: ExecutionContractPersistenceUnitOfWorkPort;
  contracts: ExecutionContractRepositoryPort;
  audit: ExecutionAuditPort;
  productStore: ProductSqliteHandle;
  inspectionAttestations: InspectionAttestationRepositoryPort;
  authorityReceipts: AuthorityVerificationReceiptRepositoryPort;
  buildExecutionContract: BuildExecutionContract;
  getExecutionContract: GetExecutionContract;
  listExecutionContractHistory: ListExecutionContractHistory;
  validateExecutionContract: ValidateExecutionContract;
  confirmExecutionContract: ConfirmExecutionContract;
  supersedeExecutionContract: SupersedeExecutionContract;
  cancelExecutionContract: CancelExecutionContract;
  checkExecutionAuthorization: CheckExecutionAuthorization;
  recordContractInspection: RecordContractInspection;
  getContractInspectionState: GetContractInspectionState;
  recordAuthorityVerification: RecordAuthorityVerification;
};

/**
 * ExecutionContract durable services on Product SQLite (M3).
 */
export function createSqliteExecutionContractServices(
  options: CreateSqliteExecutionContractServicesOptions,
): SqliteExecutionContractServices {
  const productStore = options.productStore;
  const contracts = new SqliteExecutionContractRepository(productStore);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteExecutionAuditJournal(productStore);
  const authority =
    options.authorityResolver ?? options.decisionServices.authority;
  const inspectionAttestations = new SqliteInspectionAttestationRepository(
    productStore,
  );
  const authorityReceipts = new SqliteAuthorityVerificationReceiptRepository(
    productStore,
  );

  const cancelExecutionContract = new CancelExecutionContract(
    contracts,
    authority,
    clock,
    audit,
    productStore,
  );

  return {
    store: productStore,
    contracts,
    audit,
    productStore,
    inspectionAttestations,
    authorityReceipts,
    buildExecutionContract: new BuildExecutionContract(
      contracts,
      authority,
      options.projectServices,
      options.cycleServices,
      options.decisionServices,
      clock,
      audit,
      productStore,
    ),
    getExecutionContract: new GetExecutionContract(contracts, clock, audit),
    listExecutionContractHistory: new ListExecutionContractHistory(
      contracts,
      clock,
      audit,
    ),
    validateExecutionContract: new ValidateExecutionContract(
      contracts,
      authority,
      clock,
      audit,
      productStore,
    ),
    confirmExecutionContract: new ConfirmExecutionContract(
      contracts,
      authority,
      options.decisionServices,
      options.cycleServices,
      clock,
      audit,
      productStore,
      cancelExecutionContract,
    ),
    supersedeExecutionContract: new SupersedeExecutionContract(
      contracts,
      authority,
      clock,
      audit,
      productStore,
    ),
    cancelExecutionContract,
    checkExecutionAuthorization: new CheckExecutionAuthorization(
      contracts,
      authority,
      options.decisionServices,
      options.cycleServices,
      clock,
      audit,
    ),
    recordContractInspection: new RecordContractInspection(
      contracts,
      inspectionAttestations,
      clock,
    ),
    getContractInspectionState: new GetContractInspectionState(
      contracts,
      inspectionAttestations,
    ),
    recordAuthorityVerification: new RecordAuthorityVerification(
      authorityReceipts,
      clock,
    ),
  };
}

export function createTestSqliteExecutionContractServices(
  options: CreateSqliteExecutionContractServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteExecutionContractServices {
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-08-13T12:30:00.000Z"));
  return createSqliteExecutionContractServices({ ...options, clock });
}
