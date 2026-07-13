"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  CreateTaskInput,
  Task,
  TaskFilters,
  TaskPriority,
  TaskStatus,
  UpdateTaskInput,
} from "@/lib/tasks/types";
import { filterTasks } from "@/lib/tasks/filters";
import { loadTasks, saveTasks } from "@/lib/tasks/storage";
import {
  changeTaskStatus,
  createTask,
  deleteTask,
  updateTask,
} from "@/lib/tasks/taskService";
import { ALL_PRIORITIES, ALL_STATUSES, PRIORITY_LABELS, STATUS_LABELS } from "@/lib/tasks/constants";
import { DeleteConfirmDialog } from "./DeleteConfirmDialog";
import { TaskForm } from "./TaskForm";
import { TaskItem } from "./TaskItem";

const EMPTY_FILTERS: TaskFilters = {
  search: "",
  status: "all",
  priority: "all",
};

export function TaskTrackerApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilters>(EMPTY_FILTERS);
  const [hydrated, setHydrated] = useState(false);
  const [formMode, setFormMode] = useState<"create" | "edit" | null>("create");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Task | null>(null);

  useEffect(() => {
    setTasks(loadTasks());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveTasks(tasks);
    }
  }, [tasks, hydrated]);

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filters),
    [tasks, filters],
  );

  function handleCreate(input: CreateTaskInput) {
    const result = createTask(tasks, input);
    if (!result.ok) {
      setFormError(result.error);
      return;
    }

    setTasks(result.data.tasks);
    setFormError(null);
    setFormMode(null);
  }

  function handleUpdate(input: UpdateTaskInput) {
    if (!editingTask) {
      return;
    }

    const result = updateTask(tasks, editingTask.id, input);
    if (!result.ok) {
      setFormError(result.error);
      return;
    }

    setTasks(result.data.tasks);
    setFormError(null);
    setEditingTask(null);
    setFormMode(null);
  }

  function handleStatusChange(id: string, status: TaskStatus) {
    const result = changeTaskStatus(tasks, id, status);
    if (result.ok) {
      setTasks(result.data.tasks);
    }
  }

  function handleDeleteConfirm() {
    if (!deleteTarget) {
      return;
    }

    setTasks(deleteTask(tasks, deleteTarget.id));
    setDeleteTarget(null);
  }

  function openEdit(task: Task) {
    setEditingTask(task);
    setFormMode("edit");
    setFormError(null);
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Suivi de tâches</h1>
        <p>Gérez vos tâches personnelles — mono-utilisateur, sans compte.</p>
      </header>

      <section className="panel" aria-labelledby="create-heading">
        <div className="inline-actions">
          <h2 id="create-heading">Création</h2>
          {formMode !== "create" && (
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                setFormMode("create");
                setEditingTask(null);
                setFormError(null);
              }}
            >
              Nouvelle tâche
            </button>
          )}
        </div>

        {formMode === "create" && (
          <TaskForm
            mode="create"
            error={formError}
            onSubmit={(values) => handleCreate(values)}
            onCancel={() => {
              setFormMode(null);
              setFormError(null);
            }}
          />
        )}
      </section>

      <section className="panel" aria-labelledby="filters-heading">
        <h2 id="filters-heading">Recherche et filtres</h2>
        <div className="filters-row">
          <label htmlFor="search">
            Rechercher
            <input
              id="search"
              type="search"
              placeholder="Rechercher par titre"
              value={filters.search}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  search: event.target.value,
                }))
              }
            />
          </label>

          <label htmlFor="status-filter">
            Statut
            <select
              id="status-filter"
              value={filters.status}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  status: event.target.value as TaskFilters["status"],
                }))
              }
            >
              <option value="all">Tous les statuts</option>
              {ALL_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="priority-filter">
            Priorité
            <select
              id="priority-filter"
              value={filters.priority}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  priority: event.target.value as TaskFilters["priority"],
                }))
              }
            >
              <option value="all">Toutes les priorités</option>
              {ALL_PRIORITIES.map((priority) => (
                <option key={priority} value={priority}>
                  {PRIORITY_LABELS[priority]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="counter-text" aria-live="polite">
          {visibleTasks.length} tâche{visibleTasks.length !== 1 ? "s" : ""}{" "}
          visible{visibleTasks.length !== 1 ? "s" : ""}
        </p>
      </section>

      <section className="panel" aria-labelledby="list-heading">
        <h2 id="list-heading">Liste des tâches</h2>

        {!hydrated ? (
          <p className="empty-state">Chargement des tâches…</p>
        ) : visibleTasks.length === 0 ? (
          <p className="empty-state">
            Aucune tâche à afficher. Créez une tâche ou ajustez vos filtres.
          </p>
        ) : (
          <ul className="task-list">
            {visibleTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={() => openEdit(task)}
                onDelete={() => setDeleteTarget(task)}
                onStatusChange={(status) => handleStatusChange(task.id, status)}
              />
            ))}
          </ul>
        )}
      </section>

      {formMode === "edit" && editingTask && (
        <div className="dialog-backdrop" role="presentation">
          <div
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-dialog-title"
          >
            <h2 id="edit-dialog-title">Modifier la tâche</h2>
            <TaskForm
              mode="edit"
              initialTask={editingTask}
              error={formError}
              onSubmit={(values) => handleUpdate(values)}
              onCancel={() => {
                setEditingTask(null);
                setFormMode(null);
                setFormError(null);
              }}
            />
          </div>
        </div>
      )}

      {deleteTarget && (
        <DeleteConfirmDialog
          taskTitle={deleteTarget.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </main>
  );
}
