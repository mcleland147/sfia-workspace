import type { Task, TaskStatus } from "@/lib/tasks/types";
import {
  ALL_STATUSES,
  PRIORITY_LABELS,
  STATUS_LABELS,
} from "@/lib/tasks/constants";

interface TaskItemProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onStatusChange: (status: TaskStatus) => void;
}

function formatDueDate(value?: string): string | null {
  if (!value) {
    return null;
  }

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("fr-FR");
}

export function TaskItem({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}: TaskItemProps) {
  const dueDateLabel = formatDueDate(task.dueDate);

  return (
    <li className="task-card">
      <h3>{task.title}</h3>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-meta">
        <span className={`badge badge-status-${task.status}`}>
          {STATUS_LABELS[task.status]}
        </span>
        <span className={`badge badge-priority-${task.priority}`}>
          {PRIORITY_LABELS[task.priority]}
        </span>
        {dueDateLabel && (
          <span className="due-date-text">Échéance : {dueDateLabel}</span>
        )}
      </div>

      <div className="task-actions">
        <label htmlFor={`status-${task.id}`}>
          Changer le statut
          <select
            id={`status-${task.id}`}
            value={task.status}
            onChange={(event) =>
              onStatusChange(event.target.value as TaskStatus)
            }
          >
            {ALL_STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </label>

        <button type="button" className="secondary-button" onClick={onEdit}>
          Modifier
        </button>
        <button type="button" className="danger-button" onClick={onDelete}>
          Supprimer
        </button>
      </div>
    </li>
  );
}
