import type { Task, TaskFilters } from "./types";

export function filterTasks(tasks: Task[], filters: TaskFilters): Task[] {
  const search = filters.search.trim().toLowerCase();

  return tasks.filter((task) => {
    if (filters.status !== "all" && task.status !== filters.status) {
      return false;
    }

    if (filters.priority !== "all" && task.priority !== filters.priority) {
      return false;
    }

    if (search && !task.title.toLowerCase().includes(search)) {
      return false;
    }

    return true;
  });
}
