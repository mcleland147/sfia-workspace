import { describe, expect, it } from "vitest";
import { filterTasks } from "@/lib/tasks/filters";
import type { Task } from "@/lib/tasks/types";

const tasks: Task[] = [
  {
    id: "1",
    title: "Préparer la démo",
    status: "todo",
    priority: "high",
    createdAt: "2026-07-13T10:00:00.000Z",
    updatedAt: "2026-07-13T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Répondre aux emails",
    status: "in_progress",
    priority: "normal",
    createdAt: "2026-07-13T10:00:00.000Z",
    updatedAt: "2026-07-13T10:00:00.000Z",
  },
  {
    id: "3",
    title: "Archiver les documents",
    status: "done",
    priority: "low",
    createdAt: "2026-07-13T10:00:00.000Z",
    updatedAt: "2026-07-13T10:00:00.000Z",
  },
];

describe("filterTasks", () => {
  it("filters by case-insensitive title search", () => {
    const result = filterTasks(tasks, {
      search: "DÉMO",
      status: "all",
      priority: "all",
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });

  it("filters by status", () => {
    const result = filterTasks(tasks, {
      search: "",
      status: "done",
      priority: "all",
    });

    expect(result.map((task) => task.id)).toEqual(["3"]);
  });

  it("filters by priority", () => {
    const result = filterTasks(tasks, {
      search: "",
      status: "all",
      priority: "high",
    });

    expect(result.map((task) => task.id)).toEqual(["1"]);
  });

  it("combines search, status and priority filters", () => {
    const result = filterTasks(tasks, {
      search: "email",
      status: "in_progress",
      priority: "normal",
    });

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Répondre aux emails");
  });
});
