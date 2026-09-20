"use client";

/**
 * Read-only Project / Cycle workspace projection.
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — no manual RepositoryBinding edit.
 * Wording is honest: logical planned workspace until Evidence proves materialization.
 * Client-safe: no CycleTypeCatalog / doctrine imports (server supplies segment).
 */

import { useEffect, useState } from "react";
import styles from "../ProjectWorkspacePage.module.css";

export type ProjectWorkspaceRoutingPanelProps = {
  projectId: string;
  projectWorkspaceKey?: string | null;
  pathRoot?: string | null;
  repositoryIdentity?: string | null;
  /** Active cycle type id — display only. */
  activeCycleTypeId?: string | null;
  /** Stable catalog segment supplied by server (never derived client-side from displayOrder). */
  activeCycleWorkspaceSegment?: string | null;
};

function composeCycleRoot(
  pathRoot: string | null,
  segment: string | null,
): string | null {
  if (!pathRoot || !segment) return null;
  const root = pathRoot.replace(/\/+$/, "");
  const seg = segment.trim().replace(/^\/+|\/+$/g, "");
  if (!root || !seg || seg.includes("/") || seg.includes("..")) return null;
  return `${root}/${seg}`;
}

export function ProjectWorkspaceRoutingPanel(
  props: ProjectWorkspaceRoutingPanelProps,
) {
  const pathRoot = props.pathRoot?.trim() || null;
  const key = props.projectWorkspaceKey?.trim() || null;
  const projectWorkspace = pathRoot
    ? `${pathRoot.replace(/\/+$/, "")}/`
    : key
      ? `projects/${key}/`
      : null;

  const cycleRoot = composeCycleRoot(
    pathRoot,
    props.activeCycleWorkspaceSegment?.trim() || null,
  );

  return (
    <section
      className={styles.stateTrajectoryNote}
      data-testid="project-workspace-routing"
      aria-label="Workspace repository du Project"
    >
      <h3 className={styles.stateTrajectoryTitle}>Workspace repository</h3>
      <p className={styles.stateTrajectoryNote}>
        Chemins logiques prévus pour les livrables gouvernés. Aucune
        matérialisation Git n&apos;est affirmée ici sans Evidence
        correspondante.
      </p>
      {props.repositoryIdentity ? (
        <p data-testid="project-workspace-repo-identity">
          <strong>Repository :</strong> {props.repositoryIdentity}
        </p>
      ) : (
        <p data-testid="project-workspace-repo-identity-missing">
          Repository cible non encore projeté (configuration serveur
          absente ou Project legacy).
        </p>
      )}
      <p data-testid="project-workspace-path">
        <strong>Workspace projet :</strong>{" "}
        {projectWorkspace ?? "non déterminé"}
      </p>
      <p data-testid="project-cycle-workspace-path">
        <strong>Workspace cycle actif :</strong>{" "}
        {cycleRoot
          ? `${cycleRoot}/`
          : "aucun cycle actif / segment indisponible"}
      </p>
      {props.activeCycleTypeId ? (
        <p data-testid="project-active-cycle-type">
          <strong>Cycle type :</strong> {props.activeCycleTypeId}
        </p>
      ) : null}
    </section>
  );
}

export function ProjectWorkspaceRoutingPanelLazy(
  props: ProjectWorkspaceRoutingPanelProps & {
    loadActiveCycleWorkspace?: () => Promise<{
      cycleTypeId: string | null;
      repositoryWorkspaceSegment: string | null;
    }>;
  },
) {
  const [cycleTypeId, setCycleTypeId] = useState<string | null>(
    props.activeCycleTypeId ?? null,
  );
  const [segment, setSegment] = useState<string | null>(
    props.activeCycleWorkspaceSegment ?? null,
  );
  useEffect(() => {
    let cancelled = false;
    if (props.activeCycleTypeId && props.activeCycleWorkspaceSegment) {
      setCycleTypeId(props.activeCycleTypeId);
      setSegment(props.activeCycleWorkspaceSegment);
      return;
    }
    if (!props.loadActiveCycleWorkspace) return;
    void props.loadActiveCycleWorkspace().then((info) => {
      if (cancelled) return;
      setCycleTypeId(info.cycleTypeId);
      setSegment(info.repositoryWorkspaceSegment);
    });
    return () => {
      cancelled = true;
    };
  }, [
    props.activeCycleTypeId,
    props.activeCycleWorkspaceSegment,
    props.loadActiveCycleWorkspace,
    props.projectId,
  ]);

  return (
    <ProjectWorkspaceRoutingPanel
      {...props}
      activeCycleTypeId={cycleTypeId}
      activeCycleWorkspaceSegment={segment}
    />
  );
}
