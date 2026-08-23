/**
 * Shared harness for W2 (E+A+B+C) product-path tests.
 * Product SQLite on a temp file so restart proofs reopen the same store.
 * No REAL boundary, no execution: every helper here stops before Execute.
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
}

export function bootW2Runtime(input: {
  productDbPath: string;
  idPrefix?: string;
}): RuntimeApplicationService {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: W2_FIXED_NOW,
    idSource: new SeededIdSource(input.idPrefix ?? "w2"),
    auditMode: "noop",
    productDbPath: input.productDbPath,
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

  return {
    projectId,
    cycleInstanceId,
    lpsVersion: after.livingState.version,
  };
}

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

/** F2 context snapshot expected by the F3 prepare/resolve product path. */
export async function currentF2Context(
  runtime: RuntimeApplicationService,
  projectId: string,
): Promise<{
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string | null;
}> {
  const overview = await runtime.getProject(projectId);
  if (!overview.ok) throw new Error("context: getProject failed");
  return {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
    activeCycleInstanceId: overview.livingState.activeCycleInstanceId ?? null,
  };
}
