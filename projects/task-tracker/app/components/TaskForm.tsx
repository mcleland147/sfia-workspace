import type { Task, TaskPriority, TaskStatus } from "@/lib/tasks/types";
import {
  ALL_PRIORITIES,
  ALL_STATUSES,
  PRIORITY_LABELS,
  STATUS_LABELS,
} from "@/lib/tasks/constants";

interface TaskFormValues {
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  dueDate?: string;
}

interface TaskFormProps {
  mode: "create" | "edit";
  initialTask?: Task;
  error?: string | null;
  onSubmit: (values: TaskFormValues) => void;
  onCancel: () => void;
}

export function TaskForm({
  mode,
  initialTask,
  error,
  onSubmit,
  onCancel,
}: TaskFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    onSubmit({
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      status: String(formData.get("status") ?? "todo") as TaskStatus,
      priority: String(formData.get("priority") ?? "normal") as TaskPriority,
      dueDate: String(formData.get("dueDate") ?? ""),
    });
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <label htmlFor={`${mode}-title`}>
        Titre *
        <input
          id={`${mode}-title`}
          name="title"
          type="text"
          required
          maxLength={120}
          defaultValue={initialTask?.title ?? ""}
        />
      </label>

      <label htmlFor={`${mode}-description`}>
        Description
        <textarea
          id={`${mode}-description`}
          name="description"
          defaultValue={initialTask?.description ?? ""}
        />
      </label>

      {mode === "edit" && (
        <label htmlFor={`${mode}-status`}>
          Statut
          <select
            id={`${mode}-status`}
            name="status"
            defaultValue={initialTask?.status ?? "todo"}
          >
            {ALL_STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </label>
      )}

      <label htmlFor={`${mode}-priority`}>
        Priorité
        <select
          id={`${mode}-priority`}
          name="priority"
          defaultValue={initialTask?.priority ?? "normal"}
        >
          {ALL_PRIORITIES.map((priority) => (
            <option key={priority} value={priority}>
              {PRIORITY_LABELS[priority]}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor={`${mode}-dueDate`}>
        Échéance
        <input
          id={`${mode}-dueDate`}
          name="dueDate"
          type="date"
          defaultValue={initialTask?.dueDate ?? ""}
        />
      </label>

      {error && (
        <p className="error-text" role="alert">
          {error}
        </p>
      )}

      <div className="inline-actions">
        <button type="submit" className="primary-button">
          {mode === "create" ? "Créer la tâche" : "Enregistrer"}
        </button>
        <button type="button" className="secondary-button" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
}
