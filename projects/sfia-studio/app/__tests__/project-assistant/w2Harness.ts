/**
 * Shared harness for W2 (E+A+B+C) product-path tests.
 * Product SQLite on a temp file so restart proofs reopen the same store.
 *
 * PJ-REPROOF-05 — Product canonical path uses a DETERMINISTIC fake Cursor
 * REAL boundary (TestOnlyRealExecutionLaunchPort). Never enables production
 * SFIA_STUDIO_CURSOR_REAL. Fixtures remain available for historical F3 tests.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { expect } from "vitest";
import type { ActorReference } from "@/lib/oa/cycle";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SqliteRealLaunchSafetyJournal } from "@/lib/oa/execution-attempt";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

const APP_ROOT = path.resolve(__dirname, "../..");
export const W2_REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
export const W2_SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
export const W2_FIXED_NOW = "2026-08-23T04:30:00.000Z";

export const W2_TEST_ACTOR: ActorReference = {
  actorId: "actor:w2-test-seed",
  role: "project_owner",
  displayName: "W2 seed",
  authorityLevel: "N3",
};

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
}

const tempDirs: string[] = [];
let harnessManagedEnvPrevious: string | undefined;
let harnessManagedEnvOwned = false;

export function tempProductDbPath(name = "w2-product.sqlite"): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w2-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

export function cleanupW2TempDirs(): void {
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (!dir) continue;
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
  if (harnessManagedEnvOwned) {
    if (harnessManagedEnvPrevious === undefined) {
      delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    } else {
      process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] =
        harnessManagedEnvPrevious;
    }
    harnessManagedEnvOwned = false;
    harnessManagedEnvPrevious = undefined;
  }
}

export function bootW2Runtime(input: {
  productDbPath: string;
  idPrefix?: string;
  /**
   * When false, omit deterministic Cursor REAL boundary (historical fixture-only
   * compositions). Default true so Product governed Execute can select generalist.
   */
  readonly withDeterministicProductCursorBoundary?: boolean;
}): RuntimeApplicationService {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  // CR-PWR-04 — Product Create requires server-owned repository config.
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim()) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/w2-harness";
  }
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL?.trim()) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/w2-harness.git";
  }
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH?.trim()) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
  }
  // CR-CI506-03 — PREPARE revalidation probes managed-repo filesystem facts.
  // Provide a deterministic local clone skeleton when the suite did not already
  // configure SFIA_STUDIO_MANAGED_REPO_ROOT_BASE (EMPTY ≠ UNKNOWN).
  if (!process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]?.trim()) {
    harnessManagedEnvPrevious =
      process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    const managedBase = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w2-managed-"));
    tempDirs.push(managedBase);
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    harnessManagedEnvOwned = true;
  }
  ensureManagedRepoCloneSkeleton({
    managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
    identity: process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY!,
  });
  resetRuntimeApplicationServiceForTests();

  const withCursorBoundary = input.withDeterministicProductCursorBoundary !== false;
  let realBoundary:
    | {
        launchPort: TestOnlyRealExecutionLaunchPort;
        safetyJournal: SqliteRealLaunchSafetyJournal;
      }
    | undefined;
  if (withCursorBoundary) {
    const safetyDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w2-gate-"));
    tempDirs.push(safetyDir);
    realBoundary = {
      launchPort: new TestOnlyRealExecutionLaunchPort({ holdCompletion: true }),
      safetyJournal: new SqliteRealLaunchSafetyJournal({
        databasePath: path.join(safetyDir, "safety.sqlite"),
      }),
    };
  }

  return getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: W2_FIXED_NOW,
    idSource: new SeededIdSource(input.idPrefix ?? "w2"),
    auditMode: "noop",
    productDbPath: input.productDbPath,
    ...(realBoundary ? { realBoundary } : {}),
  });
}

export type SeededW2Project = {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly lpsVersion: number;
};

/**
 * Durable qualification truth: project + LPS + linked CycleInstance, plus
 * optional Reservation epistemic items (which the option derivation reads).
 */
export async function seedQualifiedProject(
  runtime: RuntimeApplicationService,
  options?: {
    profile?: "Standard" | "Critical";
    reservations?: readonly { statement: string; blocking?: boolean }[];
    suffix?: string;
    cycleTypeId?: string;
  },
): Promise<SeededW2Project> {
  const suffix = options?.suffix ?? "a";
  const cycleTypeId = options?.cycleTypeId ?? "cyc:delivery";
  const created = await runtime.createProject({
    name: `W2 harness ${suffix}`,
    objective: "Prouver Options / Décision / Trajectoire / Autorité",
    context: "Cycle W2-G3 — aucune exécution",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION"],
    shortReference: `W2${suffix.toUpperCase()}`,
    idempotencyKey: `w2-harness-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("seed: createProject failed");
  const projectId = created.project.projectId;

  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("seed: getProject failed");

  const oa = runtime.oa;
  if (!oa) throw new Error("seed: OA stack unavailable");

  const cycleInstanceId = `cyc:inst:w2-${suffix}`;
  const cycle = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId,
    projectId,
    signals: options?.profile === "Critical" ? { irreversible: true } : {},
    justification:
      options?.profile === "Critical"
        ? "Signal irréversible déclaré pour la preuve W2"
        : undefined,
    objective: "Prouver la trajectoire décidée",
    scope: "w2-scope",
    createdBy: W2_TEST_ACTOR,
    linkAsActiveCycle: true,
    expectedLpsVersion: overview.livingState.version,
    ckcResolutionRef: "ckcres:w2-harness",
  });
  expect(cycle.ok).toBe(true);
  if (!cycle.ok) throw new Error("seed: createCycle failed");

  if (options?.reservations?.length) {
    const updated = await oa.cycleServices.updateEpistemicState.execute({
      projectId,
      items: options.reservations.map((reservation, index) => ({
        epistemicItemId: `epi:w2-rsv-${suffix}-${index + 1}`,
        type: "Reservation" as const,
        statement: reservation.statement,
        status: "active" as const,
        blocking: reservation.blocking === true,
      })),
      createdBy: W2_TEST_ACTOR,
    });
    expect(updated.ok).toBe(true);
  }

  const after = await runtime.getProject(projectId);
  if (!after.ok) throw new Error("seed: getProject(after) failed");

  // PJ-REPROOF-05 — Product executable EC prepare requires durable repository
  // binding. Ambient Studio checkout is never implied.
  if (oa.projectServices.setProjectRepositoryBinding) {
    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
      projectId,
      actor: W2_TEST_ACTOR,
      binding: {
        provider: "github",
        identity: `acme/w2-harness-${suffix}`,
        remoteUrl: `https://github.com/acme/w2-harness-${suffix}.git`,
        defaultBranch: "main",
        pathRoot: `projects/w2-harness-${suffix}`,
      },
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) throw new Error("seed: setProjectRepositoryBinding failed");
  }

  return {
    projectId,
    cycleInstanceId,
    lpsVersion: after.livingState.version,
  };
}

/**
 * Deterministic full SHA for Product prepare / eligibility tests (not live git).
 * Must be passed explicitly via prepareExecutionContractFromW2Decision
 * `pinnedBaseHeadSha` — product code never auto-pins from VITEST.
 */
export const W2_TEST_PINNED_BASE_HEAD_SHA = "a".repeat(40);

/** Resolve qualification + propose Options on the production W2 Phase B path. */
export async function proposeW2OptionsForProject(
  runtime: RuntimeApplicationService,
  projectId: string,
) {
  const oa = runtime.oa;
  if (!oa) {
    return {
      ok: false as const,
      code: "OA_STACK_UNAVAILABLE",
      message: "OA stack unavailable",
    };
  }
  const { resolveW2QualificationInputs } = await import(
    "@/features/project-assistant/w2/qualificationInputs"
  );
  const { proposeTrajectoryOptions } = await import(
    "@/features/project-assistant/w2/proposeTrajectoryOptions"
  );
  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  if (!qualification.ok) {
    return {
      ok: false as const,
      code: qualification.code,
      message: qualification.message,
    };
  }
  return proposeTrajectoryOptions({
    oa,
    projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
}

/** F2 context snapshot expected by the W3-A FC-08 prepare path. */
export async function currentF2Context(
  runtime: RuntimeApplicationService,
  projectId: string,
): Promise<{
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string | null;
  ckcResolutionRef?: string;
}> {
  const overview = await runtime.getProject(projectId);
  if (!overview.ok) throw new Error("context: getProject failed");
  return {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
    activeCycleInstanceId: overview.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: "ckcres:w2-harness",
  };
}
