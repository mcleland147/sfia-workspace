/**
 * L2-D2 — O-01 Product→UI integrated oracle (deterministic, disposable SQLite).
 * Real RuntimeApplicationService + Product UI surfaces.
 * serverGuard is stubbed only to allow jsdom import of server actions —
 * persistence remains the live SqliteProductStore (not mocked).
 * Does NOT start Studio user runtime / Application Support DBs.
 * @vitest-environment jsdom
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  cleanup,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/vertical-slice-runtime/serverGuard", () => ({
  assertServerOnly: () => undefined,
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import { ProjectsPage } from "@/features/pre-m6-product-ui/ProjectsPage";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";
import { createProject, resetD1DbForTests } from "@/lib/d1/commands";
import { D1Error } from "@/lib/d1/errors";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";
import { openProductSqlite } from "@/lib/oa/project/infrastructure/sqlite/db";
import {
  createProjectRuntimeAction,
  getProjectRuntimeAction,
  listProjectsRuntimeAction,
} from "@/lib/vertical-slice-runtime/actions";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime/singleton";

const tempDirs: string[] = [];
let productDbPath = "";
let d1ProbePath = "";

beforeEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  resetRuntimeApplicationServiceForTests();

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d2-o01-"));
  tempDirs.push(dir);
  productDbPath = path.join(dir, "oa-product.sqlite");
  d1ProbePath = path.join(dir, "d1-must-stay-absent.sqlite");
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = productDbPath;
  process.env.D1_SQLITE_PATH = d1ProbePath;

  getRuntimeApplicationService({
    productDbPath,
    auditMode: "noop",
    nowIso: "2026-10-24T16:00:00.000Z",
  });
});

afterEach(() => {
  cleanup();
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  resetRuntimeApplicationServiceForTests();
  delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
  delete process.env.D1_SQLITE_PATH;
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("L2-D2 O-01 Product→UI integrated (Q-O01 / Q9)", () => {
  it("create → SQLite durable → list UI → workspace UI → reopen + no D1 write", async () => {
    setLocalOaExclusiveModeForTests(true);

    const OBJECTIVE =
      "Prouver comprendre l'état métier LPS depuis OA durable";
    const created = await createProjectRuntimeAction({
      name: "O-01 Fresh Project",
      objective: OBJECTIVE,
      context: "L2-D2 integrated oracle",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "OA exclusive"],
      shortReference: "O01FS",
      idempotencyKey: `idem:l2d2-o01-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    expect(created.projectId.startsWith("prj:")).toBe(true);
    // Runtime create projection carries LPS-backed objective (Truth C).
    expect(created.project.objective).toBe(OBJECTIVE);

    const db = openProductSqlite(productDbPath);
    const projectRow = db
      .prepare(
        "SELECT project_id, payload_json FROM oa_projects WHERE project_id = ?",
      )
      .get(created.projectId) as
      | { project_id: string; payload_json: string }
      | undefined;
    expect(projectRow?.project_id).toBe(created.projectId);
    const payload = JSON.parse(projectRow!.payload_json) as { title?: string };
    expect(payload.title).toBe("O-01 Fresh Project");
    const lpsRow = db
      .prepare(
        "SELECT payload_json FROM oa_lps WHERE project_id = ? ORDER BY version ASC LIMIT 1",
      )
      .get(created.projectId) as { payload_json: string } | undefined;
    expect(lpsRow).toBeTruthy();
    const lpsPayload = JSON.parse(lpsRow!.payload_json) as {
      objective?: string;
    };
    expect(lpsPayload.objective).toBe(OBJECTIVE);
    db.close();

    const listed = await listProjectsRuntimeAction();
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list failed");
    const listedRow = listed.projects.find(
      (p) => p.projectId === created.projectId,
    );
    expect(listedRow?.title).toBe("O-01 Fresh Project");
    // List enriches rows from current LPS objective (Product Truth C).
    expect(listedRow?.objective).toBe(OBJECTIVE);

    render(<ProjectsPage />);
    await waitFor(() => {
      expect(screen.getByTestId("studio-projects-open").textContent).toContain(
        "O-01 Fresh Project",
      );
    });
    // CR-D2-04: « En cours » column renders LPS objective (not a static mock).
    await waitFor(() => {
      expect(
        screen.getByTestId("studio-projects-current").textContent,
      ).toContain(OBJECTIVE);
    });

    cleanup();
    render(<ProjectWorkspacePage projectId={created.projectId} />);
    await waitFor(() => {
      expect(screen.getByTestId("project-title").textContent).toContain(
        "O-01 Fresh Project",
      );
    });
    // Workspace subtitle is success.project.objective from getProjectRuntimeAction.
    await waitFor(() => {
      expect(screen.getByTestId("project-subtitle").textContent).toContain(
        OBJECTIVE,
      );
    });

    cleanup();
    resetRuntimeApplicationServiceForTests();
    getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-24T16:05:00.000Z",
    });
    const reread = await getProjectRuntimeAction(created.projectId);
    expect(reread.ok).toBe(true);
    if (!reread.ok) throw new Error("get after reopen failed");
    expect(reread.project.name).toBe("O-01 Fresh Project");
    expect(reread.project.objective).toBe(OBJECTIVE);
    expect(reread.livingState.id.startsWith("lps:")).toBe(true);
    expect(reread.livingState.version).toBe(1);

    render(<ProjectWorkspacePage projectId={created.projectId} />);
    await waitFor(() => {
      expect(screen.getByTestId("project-title").textContent).toContain(
        "O-01 Fresh Project",
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-subtitle").textContent).toContain(
        OBJECTIVE,
      );
    });

    expect(() =>
      createProject({
        name: "Should not land in D1",
        objective: "dual-write probe",
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        activate: true,
        idempotencyKey: "idem-o01-d1-probe",
      }),
    ).toThrow(D1Error);
    expect(fs.existsSync(d1ProbePath)).toBe(false);
  });
});
