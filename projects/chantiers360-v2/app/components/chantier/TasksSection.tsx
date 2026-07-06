import type { Tache } from "@/lib/db/schema";
import { AddTaskForm } from "./AddTaskForm";
import { TaskStatusSelector } from "./TaskStatusSelector";

export function TasksSection({
  chantierId,
  taches,
}: {
  chantierId: string;
  taches: Tache[];
}) {
  return (
    <section aria-labelledby="tasks-heading" className="space-y-4">
      <h2 id="tasks-heading" className="text-sm font-semibold text-slate-900">
        Tâches
      </h2>
      <AddTaskForm chantierId={chantierId} />
      {taches.length === 0 ? (
        <p className="text-sm text-slate-500">Aucune tâche pour ce chantier.</p>
      ) : (
        <ul className="space-y-3">
          {taches.map((tache) => (
            <li
              key={`${tache.id}-${tache.status}`}
              className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <TaskStatusSelector chantierId={chantierId} tache={tache} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
