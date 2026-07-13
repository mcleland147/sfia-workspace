import { describe, expect, it } from "vitest";
import {
  changeTaskStatus,
  createTask,
  deleteTask,
  updateTask,
} from "@/lib/tasks/taskService";
import type { Task } from "@/lib/tasks/types";

const fixedNow = "2026-07-13T10:00:00.000Z";
const fixedId = () => "task-1";

describe("taskService", () => {
  it("creates a task with required title and defaults", () => {
    const result = createTask([], { title: "  Acheter du lait  " }, () => fixedNow, fixedId);

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.data.task).toMatchObject({
      id: "task-1",
      title: "Acheter du lait",
      status: "todo",
      priority: "normal",
      createdAt: fixedNow,
      updatedAt: fixedNow,
    });
    expect(result.data.tasks).toHaveLength(1);
  });

  it("rejects creation without title", () => {
    const result = createTask([], { title: "   " }, () => fixedNow, fixedId);
    expect(result).toEqual({ ok: false, error: "Le titre est obligatoire." });
  });

  it("updates a task and refreshes updatedAt", () => {
    const seed: Task = {
      id: "task-1",
      title: "Ancien titre",
      status: "todo",
      priority: "normal",
      createdAt: fixedNow,
      updatedAt: fixedNow,
    };

    const result = updateTask(
      [seed],
      "task-1",
      {
        title: "Nouveau titre",
        description: "Détail",
        priority: "high",
        dueDate: "2026-07-20",
      },
      () => "2026-07-13T11:00:00.000Z",
    );

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.data.task.title).toBe("Nouveau titre");
    expect(result.data.task.priority).toBe("high");
    expect(result.data.task.updatedAt).toBe("2026-07-13T11:00:00.000Z");
  });

  it("changes task status", () => {
    const seed: Task = {
      id: "task-1",
      title: "Tâche",
      status: "todo",
      priority: "normal",
      createdAt: fixedNow,
      updatedAt: fixedNow,
    };

    const result = changeTaskStatus([seed], "task-1", "in_progress", () => fixedNow);
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.data.task.status).toBe("in_progress");
  });

  it("deletes a task permanently", () => {
    const tasks: Task[] = [
      {
        id: "task-1",
        title: "A",
        status: "todo",
        priority: "normal",
        createdAt: fixedNow,
        updatedAt: fixedNow,
      },
      {
        id: "task-2",
        title: "B",
        status: "done",
        priority: "low",
        createdAt: fixedNow,
        updatedAt: fixedNow,
      },
    ];

    expect(deleteTask(tasks, "task-1")).toHaveLength(1);
    expect(deleteTask(tasks, "task-1")[0].id).toBe("task-2");
  });
});
