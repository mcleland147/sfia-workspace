/** @vitest-environment jsdom */
/**
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — read-only workspace UI.
 */
import fs from "node:fs";
import path from "node:path";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  ProjectWorkspaceRoutingPanel,
  ProjectWorkspaceRoutingPanelLazy,
} from "@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel";

afterEach(() => {
  cleanup();
});

describe("PRODUCT-PWR-01 ProjectWorkspaceRoutingPanel", () => {
  it("panel shows logical project/cycle workspaces without MATERIALIZED claim", () => {
    render(
      <ProjectWorkspaceRoutingPanel
        projectId="prj:pwr"
        projectWorkspaceKey="mini-cadrage-suivi-de-taches"
        pathRoot="projects/mini-cadrage-suivi-de-taches"
        repositoryIdentity="acme/widget"
        activeCycleTypeId="cyc:framing"
        activeCycleWorkspaceSegment="01-cadrage"
      />,
    );
    expect(screen.getByTestId("project-workspace-path").textContent).toContain(
      "projects/mini-cadrage-suivi-de-taches/",
    );
    expect(
      screen.getByTestId("project-cycle-workspace-path").textContent,
    ).toContain("projects/mini-cadrage-suivi-de-taches/01-cadrage/");
    expect(screen.getByTestId("project-workspace-routing").textContent).not.toMatch(
      /MATERIALIZED/i,
    );
    expect(screen.queryByTestId("repository-binding-form")).toBeNull();
  });

  it("lazy panel loads active cycle type for cycle workspace", async () => {
    render(
      <ProjectWorkspaceRoutingPanelLazy
        projectId="prj:pwr"
        pathRoot="projects/mini-cadrage-suivi-de-taches"
        projectWorkspaceKey="mini-cadrage-suivi-de-taches"
        loadActiveCycleWorkspace={async () => ({
          cycleTypeId: "cyc:framing",
          repositoryWorkspaceSegment: "01-cadrage",
        })}
      />,
    );
    await waitFor(() => {
      expect(
        screen.getByTestId("project-cycle-workspace-path").textContent,
      ).toContain("01-cadrage");
    });
  });

  it("ProjectWorkspacePage source no longer mounts RepositoryBindingForm", () => {
    const pagePath = path.resolve(
      __dirname,
      "../../features/pre-m6-product-ui/ProjectWorkspacePage.tsx",
    );
    const src = fs.readFileSync(pagePath, "utf8");
    expect(src).not.toMatch(/RepositoryBindingForm/);
    expect(src).toMatch(/ProjectWorkspaceRoutingPanel/);
  });
});
