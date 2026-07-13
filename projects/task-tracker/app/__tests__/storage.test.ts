import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY } from "@/lib/tasks/constants";
import { loadTasks, saveTasks } from "@/lib/tasks/storage";
import type { Task } from "@/lib/tasks/types";

class MemoryStorage {
  private store = new Map<string, string>();

  getItem(key: string): string | null {
    return this.store.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }

  clear(): void {
    this.store.clear();
  }
}

const sampleTask: Task = {
  id: "task-1",
  title: "Tester la persistance",
  status: "todo",
  priority: "normal",
  createdAt: "2026-07-13T10:00:00.000Z",
  updatedAt: "2026-07-13T10:00:00.000Z",
};

describe("storage", () => {
  let storage: MemoryStorage;

  beforeEach(() => {
    storage = new MemoryStorage();
  });

  it("returns an empty list when storage is empty", () => {
    expect(loadTasks(storage as unknown as Storage)).toEqual([]);
  });

  it("persists and reloads tasks", () => {
    saveTasks([sampleTask], storage as unknown as Storage);
    expect(loadTasks(storage as unknown as Storage)).toEqual([sampleTask]);
    expect(storage.getItem(STORAGE_KEY)).toContain("Tester la persistance");
  });

  it("simulates persistence after reload", () => {
    saveTasks([sampleTask], storage as unknown as Storage);

    const reloadedStorage = new MemoryStorage();
    reloadedStorage.setItem(STORAGE_KEY, storage.getItem(STORAGE_KEY)!);

    expect(loadTasks(reloadedStorage as unknown as Storage)).toEqual([sampleTask]);
  });
});
