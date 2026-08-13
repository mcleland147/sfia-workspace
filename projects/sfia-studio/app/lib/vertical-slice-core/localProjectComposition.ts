import { randomUUID } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  AjvSchemaValidationAdapter,
  FilesystemDoctrinePackageRepository,
  FixedClock,
  MemoryDoctrineAuditJournal,
  ResolveDoctrinePackage,
  Sha256DigestVerificationAdapter,
  SystemClock,
  type ClockPort,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  MemoryProjectAuditJournal,
  createSqliteProductProjectServices,
  type LivingProjectState,
  type Project,
  type ProjectServices,
} from "@/lib/oa/project";
import {
  NoOpLocalProjectCreationAudit,
  type LocalProjectCreationAuditEvent,
  type LocalProjectCreationAuditPort,
} from "./audit";
import type {
  CreateLocalProjectCommand,
  CreateLocalProjectResult,
  GetLocalProjectOverviewResult,
  LocalAuditStatus,
  LocalProjectCreationView,
  LocalProjectError,
  LocalProjectIdSource,
  LocalVerticalSliceArchitecture,
  LocalVerticalSliceCompositionOptions,
  PerceivedCriticality,
} from "./types";

export const DEFAULT_LOCAL_DOCTRINE_PIN: DoctrinePackagePin = Object.freeze({
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest:
    "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622",
});

const LOCAL_ACTOR = Object.freeze({
  actorId: "actor:local-project-owner-demo",
  role: "project_owner" as const,
  displayName: "Local project owner demo",
  authorityLevel: "none" as const,
});

const UI_METADATA_SCHEMA = "sfia-visible-slice-project-ui.1" as const;

interface StoredUiMetadata {
  readonly schemaVersion: typeof UI_METADATA_SCHEMA;
  readonly shortReference?: string;
  readonly perceivedCriticality: PerceivedCriticality;
  readonly constraints: readonly string[];
}

export interface LocalProjectFacade {
  createProject(
    command: CreateLocalProjectCommand,
  ): Promise<CreateLocalProjectResult>;
  getProjectOverview(
    projectId: string,
  ): Promise<GetLocalProjectOverviewResult>;
}

export interface LocalVerticalSliceServices {
  readonly facade: LocalProjectFacade;
  readonly architecture: LocalVerticalSliceArchitecture;
  /** Shared OA ProjectServices instance used by the LocalProjectFacade. */
  readonly projectServices: ProjectServices;
  readonly clock: ClockPort;
}

class RandomLocalProjectIdSource implements LocalProjectIdSource {
  nextProjectId(): string {
    return `prj:${randomUUID()}`;
  }

  nextLpsVersionId(): string {
    return `lps:${randomUUID()}`;
  }

  nextCorrelationId(): string {
    return `cor:${randomUUID()}`;
  }
}

function freezeView(view: LocalProjectCreationView): LocalProjectCreationView {
  Object.freeze(view.constraints);
  Object.freeze(view.doctrine);
  Object.freeze(view.lps);
  return Object.freeze(view);
}

function contextSummary(context: string): string {
  const normalized = context.trim().replace(/\s+/g, " ");
  return normalized.length <= 240
    ? normalized
    : `${normalized.slice(0, 237)}...`;
}

function serializeUiMetadata(command: CreateLocalProjectCommand): string {
  const metadata: StoredUiMetadata = {
    schemaVersion: UI_METADATA_SCHEMA,
    shortReference: command.shortReference?.trim() || undefined,
    perceivedCriticality: command.perceivedCriticality,
    constraints: command.constraints.map((value) => value.trim()),
  };
  return JSON.stringify(metadata);
}

function parseUiMetadata(scope: string | undefined): StoredUiMetadata | null {
  if (!scope) return null;
  try {
    const value = JSON.parse(scope) as Partial<StoredUiMetadata>;
    if (
      value.schemaVersion !== UI_METADATA_SCHEMA ||
      !["LOW", "STANDARD", "HIGH"].includes(
        String(value.perceivedCriticality),
      ) ||
      !Array.isArray(value.constraints) ||
      value.constraints.some((item) => typeof item !== "string")
    ) {
      return null;
    }
    return {
      schemaVersion: UI_METADATA_SCHEMA,
      shortReference:
        typeof value.shortReference === "string"
          ? value.shortReference
          : undefined,
      perceivedCriticality: value.perceivedCriticality as PerceivedCriticality,
      constraints: value.constraints,
    };
  } catch {
    return null;
  }
}

function projectError(
  code: LocalProjectError["code"],
  message: string,
  extra: Partial<LocalProjectError> = {},
): LocalProjectError {
  return Object.freeze({
    code,
    message,
    retryable: false,
    ...extra,
  });
}

function validateCommand(
  command: CreateLocalProjectCommand,
): LocalProjectError | null {
  if (!command.name?.trim() || command.name.length > 200) {
    return projectError("INPUT_INVALID", "Project name is required.", {
      field: "name",
    });
  }
  if (!command.objective?.trim()) {
    return projectError("INPUT_INVALID", "Project objective is required.", {
      field: "objective",
    });
  }
  if (!command.context?.trim()) {
    return projectError("INPUT_INVALID", "Project context is required.", {
      field: "context",
    });
  }
  if (!["LOW", "STANDARD", "HIGH"].includes(command.perceivedCriticality)) {
    return projectError(
      "INPUT_INVALID",
      "Perceived criticality is invalid.",
      { field: "perceivedCriticality" },
    );
  }
  if (
    !Array.isArray(command.constraints) ||
    command.constraints.some(
      (item) => typeof item !== "string" || !item.trim() || item.length > 500,
    )
  ) {
    return projectError("INPUT_INVALID", "Constraints are invalid.", {
      field: "constraints",
    });
  }
  if (command.shortReference && command.shortReference.trim().length > 64) {
    return projectError("INPUT_INVALID", "Short reference is too long.", {
      field: "shortReference",
    });
  }
  if (
    !command.idempotencyKey?.trim() ||
    command.idempotencyKey.length > 128
  ) {
    return projectError("INPUT_INVALID", "Idempotency key is required.", {
      field: "idempotencyKey",
    });
  }
  return null;
}

function buildProjection(
  project: Project,
  lps: LivingProjectState,
): LocalProjectCreationView | null {
  const metadata = parseUiMetadata(lps.scope);
  const doctrine = project.doctrinePackageRef;
  if (
    !metadata ||
    !doctrine ||
    project.currentLpsVersionId !== lps.lpsVersionId ||
    !Number.isInteger(lps.version) ||
    lps.version < 1
  ) {
    return null;
  }

  return freezeView({
    projectId: project.projectId,
    projectName: project.title,
    shortReference: metadata.shortReference,
    objective: lps.objective,
    contextSummary: contextSummary(lps.context ?? ""),
    perceivedCriticality: metadata.perceivedCriticality,
    constraints: Object.freeze([...metadata.constraints]),
    doctrine: Object.freeze({
      id: doctrine.doctrinePackageId,
      version: doctrine.version,
      digest: doctrine.digest,
      status: doctrine.status,
    }),
    lps: Object.freeze({
      id: lps.lpsVersionId,
      version: lps.version,
      createdAt: lps.createdAt,
      activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
      ckcResolutionRef: lps.ckcResolutionRef ?? null,
    }),
    localMode: true,
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    realAgentExecution: "NOT_AVAILABLE",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    source: "REAL_LOCAL_CORE",
    fixture: false,
  });
}

class LocalProjectFacadeImpl implements LocalProjectFacade {
  constructor(
    private readonly projects: ProjectServices,
    private readonly doctrinePackagePin: DoctrinePackagePin,
    private readonly idSource: LocalProjectIdSource,
    private readonly audit: LocalProjectCreationAuditPort | null,
    private readonly nowIso: () => string,
  ) {}

  private appendAudit(event: LocalProjectCreationAuditEvent): boolean {
    if (!this.audit) return true;
    try {
      this.audit.append(event);
      return true;
    } catch {
      return false;
    }
  }

  async createProject(
    command: CreateLocalProjectCommand,
  ): Promise<CreateLocalProjectResult> {
    const correlationId = this.idSource.nextCorrelationId();
    const requestedProjectId = this.idSource.nextProjectId();
    const timestamp = this.nowIso();
    let auditFailed = !this.appendAudit({
      event: "LOCAL_PROJECT_CREATION_REQUESTED",
      timestamp,
      correlationId,
      idempotencyKey: command.idempotencyKey ?? "missing",
      projectId: requestedProjectId,
      result: "IN_PROGRESS",
    });

    const invalid = validateCommand(command);
    if (invalid) {
      auditFailed =
        !this.appendAudit({
          event: "LOCAL_PROJECT_CREATION_FAILED",
          timestamp,
          correlationId,
          idempotencyKey: command.idempotencyKey ?? "missing",
          projectId: requestedProjectId,
          result: "FAILED",
          errorCode: invalid.code,
        }) || auditFailed;
      return Object.freeze({
        ok: false,
        error: invalid,
        auditStatus: this.auditStatus(auditFailed),
      });
    }

    const result = await this.projects.createProject.execute({
      projectId: requestedProjectId,
      title: command.name,
      objective: command.objective,
      context: command.context,
      scope: serializeUiMetadata(command),
      doctrinePackagePin: this.doctrinePackagePin,
      createdBy: LOCAL_ACTOR,
      correlationId,
      idempotencyKey: command.idempotencyKey,
      lpsVersionId: this.idSource.nextLpsVersionId(),
    });

    if (!result.ok) {
      const error = projectError(
        result.error.detailCode === "DOCTRINE_UNRESOLVED"
          ? "DOCTRINE_UNRESOLVED"
          : "PROJECT_CREATION_FAILED",
        result.error.message,
        {
          retryable: result.error.retryable,
          projectDetailCode: result.error.detailCode,
        },
      );
      auditFailed =
        !this.appendAudit({
          event: "LOCAL_PROJECT_CREATION_FAILED",
          timestamp,
          correlationId,
          idempotencyKey: command.idempotencyKey,
          projectId: requestedProjectId,
          doctrinePackageId: this.doctrinePackagePin.doctrinePackageId,
          result: "FAILED",
          errorCode: result.error.detailCode,
        }) || auditFailed;
      return Object.freeze({
        ok: false,
        error,
        auditStatus: this.auditStatus(auditFailed),
      });
    }

    const projection = buildProjection(
      result.project,
      result.livingProjectState,
    );
    if (!projection) {
      return Object.freeze({
        ok: false,
        error: projectError(
          "PROJECTION_INVALID",
          "Created project could not be projected.",
        ),
        auditStatus: this.auditStatus(auditFailed),
      });
    }

    const common = {
      timestamp,
      correlationId,
      idempotencyKey: command.idempotencyKey,
      projectId: result.project.projectId,
    };
    for (const event of [
      {
        ...common,
        event: "DOCTRINE_RESOLVED" as const,
        doctrinePackageId: projection.doctrine.id,
        doctrineStatus: "resolved" as const,
        result: "SUCCEEDED" as const,
      },
      {
        ...common,
        event: "PROJECT_CREATED" as const,
        result: "SUCCEEDED" as const,
      },
      {
        ...common,
        event: "LPS_INITIALIZED" as const,
        lpsVersion: 1,
        result: "SUCCEEDED" as const,
      },
    ]) {
      auditFailed = !this.appendAudit(event) || auditFailed;
    }

    return Object.freeze({
      ok: true,
      project: projection,
      reusedFromIdempotencyKey:
        result.reusedFromIdempotencyKey === true,
      auditStatus: this.auditStatus(auditFailed),
    });
  }

  async getProjectOverview(
    projectId: string,
  ): Promise<GetLocalProjectOverviewResult> {
    const [projectResult, lpsResult] = await Promise.all([
      this.projects.getProject.execute({ projectId }),
      this.projects.getCurrentLivingProjectState.execute({ projectId }),
    ]);
    if (!projectResult.ok || !lpsResult.ok) {
      const detailCode = !projectResult.ok
        ? projectResult.error.detailCode
        : !lpsResult.ok
          ? lpsResult.error.detailCode
          : "PROJECT_NOT_FOUND";
      return Object.freeze({
        ok: false,
        error: projectError(
          detailCode === "PROJECT_NOT_FOUND"
            ? "PROJECT_NOT_FOUND"
            : "PROJECT_CREATION_FAILED",
          "Local project was not found.",
          { projectDetailCode: detailCode },
        ),
      });
    }

    const projection = buildProjection(
      projectResult.project,
      lpsResult.livingProjectState,
    );
    if (!projection) {
      return Object.freeze({
        ok: false,
        error: projectError(
          "PROJECTION_INVALID",
          "Stored project could not be projected.",
        ),
      });
    }
    return Object.freeze({ ok: true, project: projection });
  }

  private auditStatus(failed: boolean): LocalAuditStatus {
    if (!this.audit) return "DISABLED";
    return failed ? "FAILED_NON_BLOCKING" : "RECORDED";
  }
}

export const LOCAL_VERTICAL_SLICE_ARCHITECTURE: LocalVerticalSliceArchitecture =
  Object.freeze({
    accessSurface: "HEADLESS_INTERNAL",
    businessState: "OA_PRODUCT_SQLITE_T_A1",
    doctrine: "T_A0_LOCAL_REGISTRY",
    project: "T_A1_PROJECT_LPS",
    audit: "OPTIONAL_BOUNDED_LOCAL",
    fixtures: "OFF_HAPPY_PATH",
    sessionStorage: "NOT_USED_FOR_BUSINESS_STATE",
    react: false,
    network: false,
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    realAgentExecution: "NOT_AVAILABLE",
  });

export function createLocalVerticalSliceServices(
  options: LocalVerticalSliceCompositionOptions,
): LocalVerticalSliceServices {
  const clock = options.nowIso
    ? new FixedClock(options.nowIso)
    : new SystemClock();
  const doctrineResolver = new ResolveDoctrinePackage(
    new FilesystemDoctrinePackageRepository({
      registryRoot: options.registryRoot,
    }),
    new AjvSchemaValidationAdapter({
      schemasRoot: options.schemasRoot,
    }),
    new Sha256DigestVerificationAdapter(),
    clock,
    new MemoryDoctrineAuditJournal(),
  );
  // Vitest/process-local suites expect isolated Product DB per composition.
  // Production/default resolves via SFIA_STUDIO_PRODUCT_DB_PATH / .sfia-exec/product.
  const productDbPath =
    options.productDbPath ??
    (process.env.NODE_ENV === "test" &&
    !process.env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim()
      ? path.join(
          fs.mkdtempSync(path.join(os.tmpdir(), "sfia-product-")),
          "oa-product.sqlite",
        )
      : undefined);
  const projectServices = createSqliteProductProjectServices({
    doctrineResolver,
    clock,
    audit: new MemoryProjectAuditJournal(),
    dbPath: productDbPath,
  });
  const idSource = options.idSource ?? new RandomLocalProjectIdSource();
  const audit =
    options.audit instanceof NoOpLocalProjectCreationAudit
      ? null
      : (options.audit ?? null);

  return Object.freeze({
    facade: new LocalProjectFacadeImpl(
      projectServices,
      options.doctrinePackagePin ?? DEFAULT_LOCAL_DOCTRINE_PIN,
      idSource,
      audit,
      () => clock.nowIso(),
    ),
    architecture: LOCAL_VERTICAL_SLICE_ARCHITECTURE,
    projectServices,
    clock,
  });
}
