export type TaskStatus = "todo" | "in_progress" | "done";
export type TaskPriority = "low" | "normal" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  priority?: TaskPriority;
  dueDate?: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  dueDate?: string | null;
}

export type StatusFilter = TaskStatus | "all";
export type PriorityFilter = TaskPriority | "all";

export interface TaskFilters {
  search: string;
  status: StatusFilter;
  priority: PriorityFilter;
}
