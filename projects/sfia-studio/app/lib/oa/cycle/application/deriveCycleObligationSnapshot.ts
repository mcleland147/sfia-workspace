/**
 * GCEC D-GCEC-01 — on-demand F14 cycle obligation snapshot (schema-free).
 * Derives APPLICABLE before EC/Evidence/RB rows exist.
 * Absence of rows ≠ N/A. Nora does not own applicability.
 */
import type { ProjectRepositoryBinding } from "@/lib/oa/project";
import type {
  FinalizationApplicabilityRules,
  ObligationApplicability,
} from "../domain/types";

export type CycleObligationFamily =
  | "artifact"
  | "execution_contract"
  | "evidence"
  | "review_bundle"
  | "git_repository"
  | "exit_criteria";

export type CycleObligationSourceKind =
  | "intrinsic"
  | "contextual"
  | "unknown";

export type CycleObligationEntry = {
  family: CycleObligationFamily;
  applicability: ObligationApplicability;
  sourceKind: CycleObligationSourceKind;
  reason: string;
};

export type CycleObligationSnapshot = {
  cycleTypeId: string;
  projectId: string;
  cycleInstanceId?: string;
  repositoryBound: boolean;
  entries: CycleObligationEntry[];
  /** Families with deterministic MUST / APPLICABLE before rows exist. */
  mustFamilies: CycleObligationFamily[];
};

export type DeriveCycleObligationSnapshotInput = {
  projectId: string;
  cycleTypeId: string;
  cycleInstanceId?: string;
  repositoryBinding?: ProjectRepositoryBinding | null;
  /**
   * When true, treat as repo-backed even without binding (tests only).
   * Production callers should rely on repositoryBinding presence.
   */
  forceRepoBacked?: boolean;
};

const REPO_BACKED_FUNCTIONAL_DESIGN_MUST: readonly CycleObligationFamily[] = [
  "artifact",
  "execution_contract",
  "evidence",
  "review_bundle",
  "git_repository",
  "exit_criteria",
] as const;

/**
 * On-demand binder: DoctrinePackage/catalog semantics + Project context.
 * First vertical: repo-backed `cyc:functional-design` ⇒ governed MUST set.
 * Unknown/unmodeled: UNKNOWN (fail-closed for proof presence).
 */
export function deriveCycleObligationSnapshot(
  input: DeriveCycleObligationSnapshotInput,
): CycleObligationSnapshot {
  const cycleTypeId = input.cycleTypeId.trim();
  const repositoryBound =
    input.forceRepoBacked === true ||
    (input.repositoryBinding != null &&
      typeof input.repositoryBinding.identity === "string" &&
      input.repositoryBinding.identity.trim().length > 0);

  const entries: CycleObligationEntry[] = [];
  const mustFamilies: CycleObligationFamily[] = [];

  if (cycleTypeId === "cyc:functional-design" && repositoryBound) {
    for (const family of REPO_BACKED_FUNCTIONAL_DESIGN_MUST) {
      const sourceKind: CycleObligationSourceKind =
        family === "git_repository" || family === "artifact"
          ? "contextual"
          : "intrinsic";
      entries.push({
        family,
        applicability: "APPLICABLE",
        sourceKind,
        reason:
          family === "git_repository"
            ? "repo_backed_functional_design_git_must"
            : `repo_backed_functional_design_${family}_must`,
      });
      mustFamilies.push(family);
    }
  } else if (!cycleTypeId) {
    for (const family of REPO_BACKED_FUNCTIONAL_DESIGN_MUST) {
      entries.push({
        family,
        applicability: "UNKNOWN",
        sourceKind: "unknown",
        reason: "cycle_type_missing",
      });
    }
  } else {
    // Known cycle without repo-backed functional-design GCEC vertical:
    // do not invent global Git MUST. Leave families unset (UNKNOWN by absence).
    entries.push({
      family: "exit_criteria",
      applicability: "APPLICABLE",
      sourceKind: "intrinsic",
      reason: "cycle_has_exit_criteria",
    });
    mustFamilies.push("exit_criteria");
  }

  return {
    cycleTypeId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    repositoryBound,
    entries,
    mustFamilies,
  };
}

/** Apply MUST/APPLICABLE snapshot into FinalizationApplicabilityRules (monotone). */
export function applyCycleObligationSnapshotToRules(
  rules: FinalizationApplicabilityRules,
  snapshot: CycleObligationSnapshot,
  positiveSources: Partial<
    Record<
      | "artifact"
      | "execution_contract"
      | "evidence"
      | "review_bundle"
      | "git_repository",
      string
    >
  >,
): void {
  for (const entry of snapshot.entries) {
    if (entry.applicability !== "APPLICABLE") continue;
    if (entry.family === "exit_criteria") {
      rules.exit_criteria = "APPLICABLE";
      continue;
    }
    const family = entry.family;
    rules[family] = "APPLICABLE";
    if (!positiveSources[family]) {
      positiveSources[family] = `obligation_snapshot:${entry.reason}`;
    }
  }
}

export function snapshotMustFamilySet(
  snapshot: CycleObligationSnapshot,
): ReadonlySet<CycleObligationFamily> {
  return new Set(snapshot.mustFamilies);
}
