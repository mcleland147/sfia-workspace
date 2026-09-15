/** @vitest-environment jsdom */
/**
 * JOURNEY-INTEGRITY — RepositoryBindingForm loads durable truth;
 * never presents acme/widget sample as current binding.
 */
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { RepositoryBindingForm } from "@/features/pre-m6-product-ui/surfaces/RepositoryBindingForm";

const { getProjectRuntimeActionMock, setProjectRepositoryBindingActionMock } =
  vi.hoisted(() => ({
    getProjectRuntimeActionMock: vi.fn(),
    setProjectRepositoryBindingActionMock: vi.fn(),
  }));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: (...args: unknown[]) =>
    setProjectRepositoryBindingActionMock(...args),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  getProjectRuntimeActionMock.mockReset();
  setProjectRepositoryBindingActionMock.mockReset();
});

describe("RepositoryBindingForm — JOURNEY-INTEGRITY binding truth", () => {
  it("after load with no binding, fields are empty (no acme/widget default)", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:no-binding",
        repositoryBinding: null,
      },
    });

    render(<RepositoryBindingForm projectId="prj:no-binding" />);

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
        /Aucun binding configuré/i,
      );
    });

    expect(screen.getByTestId("repo-binding-identity")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-remote-url")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-default-branch")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue("");

    const identity = screen.getByTestId("repo-binding-identity") as HTMLInputElement;
    const remote = screen.getByTestId(
      "repo-binding-remote-url",
    ) as HTMLInputElement;
    expect(identity.value).not.toMatch(/acme\/widget/i);
    expect(remote.value).not.toMatch(/acme\/widget/i);
    expect(screen.getByTestId("repository-binding-form").textContent).not.toMatch(
      /acme\/widget/i,
    );
  });

  it("loads durable binding when present (not sample)", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:bound",
        repositoryBinding: {
          identity: "mcleland147/sfia-workspace",
          remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
          defaultBranch: "main",
          pathRoot: "projects/sfia-studio/.sandbox",
        },
      },
    });

    render(<RepositoryBindingForm projectId="prj:bound" />);

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
        /Binding durable chargé/i,
      );
    });
    expect(screen.getByTestId("repo-binding-identity")).toHaveValue(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue(
      "projects/sfia-studio/.sandbox",
    );
    expect(screen.getByTestId("repository-binding-form").textContent).not.toMatch(
      /acme\/widget/i,
    );
  });

  it("read failure is not an absence: illisible, empty fields, save closed", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: false,
      code: "PROJECT_READ_FAILED",
      message: "lecture impossible",
    });

    render(<RepositoryBindingForm projectId="prj:read-failed" />);

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
        /illisible/i,
      );
    });
    expect(screen.getByTestId("repo-binding-status")).not.toHaveTextContent(
      /Aucun binding configuré/i,
    );
    expect(screen.getByTestId("repo-binding-save")).toBeDisabled();
    expect(screen.getByTestId("repo-binding-identity")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-remote-url")).toHaveValue("");
    expect(setProjectRepositoryBindingActionMock).not.toHaveBeenCalled();
  });

  it("save is only claimed durable after a successful reread", async () => {
    getProjectRuntimeActionMock
      .mockResolvedValueOnce({
        ok: true,
        project: { projectId: "prj:save", repositoryBinding: null },
      })
      .mockResolvedValueOnce({
        ok: true,
        project: {
          projectId: "prj:save",
          repositoryBinding: {
            identity: "mcleland147/sfia-workspace",
            remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
            defaultBranch: "main",
            pathRoot: "docs/",
          },
        },
      });
    setProjectRepositoryBindingActionMock.mockResolvedValue({ ok: true });

    render(<RepositoryBindingForm projectId="prj:save" />);
    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-save")).not.toBeDisabled();
    });

    fireEvent.change(screen.getByTestId("repo-binding-identity"), {
      target: { value: "mcleland147/sfia-workspace" },
    });
    fireEvent.change(screen.getByTestId("repo-binding-remote-url"), {
      target: { value: "https://github.com/mcleland147/sfia-workspace.git" },
    });
    fireEvent.click(screen.getByTestId("repo-binding-save"));

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-message")).toHaveTextContent(
        /Binding enregistré et vérifié/i,
      );
    });
    // Durable truth came from a second read, not from the write echo.
    expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(2);
    expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
      /Binding durable chargé/i,
    );
    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue("docs/");
  });

  it("write ok but reread fails: never claims verified, and closes further saves", async () => {
    getProjectRuntimeActionMock
      .mockResolvedValueOnce({
        ok: true,
        project: { projectId: "prj:unverified", repositoryBinding: null },
      })
      .mockResolvedValueOnce({
        ok: false,
        code: "PROJECT_READ_FAILED",
        message: "relecture impossible",
      });
    setProjectRepositoryBindingActionMock.mockResolvedValue({ ok: true });

    render(<RepositoryBindingForm projectId="prj:unverified" />);
    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-save")).not.toBeDisabled();
    });

    fireEvent.change(screen.getByTestId("repo-binding-identity"), {
      target: { value: "mcleland147/sfia-workspace" },
    });
    fireEvent.change(screen.getByTestId("repo-binding-remote-url"), {
      target: { value: "https://github.com/mcleland147/sfia-workspace.git" },
    });
    fireEvent.click(screen.getByTestId("repo-binding-save"));

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-message")).toHaveTextContent(
        /vérification durable impossible/i,
      );
    });
    expect(screen.getByTestId("repo-binding-message")).not.toHaveTextContent(
      /vérifié\./i,
    );
    expect(screen.getByTestId("repo-binding-save")).toBeDisabled();
    expect(setProjectRepositoryBindingActionMock).toHaveBeenCalledTimes(1);
  });
});
