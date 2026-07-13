interface DeleteConfirmDialogProps {
  taskTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmDialog({
  taskTitle,
  onConfirm,
  onCancel,
}: DeleteConfirmDialogProps) {
  return (
    <div className="dialog-backdrop" role="presentation">
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
      >
        <h2 id="delete-dialog-title">Confirmer la suppression</h2>
        <p>
          Supprimer définitivement la tâche « {taskTitle} » ? Cette action est
          irréversible.
        </p>
        <div className="inline-actions">
          <button type="button" className="danger-button" onClick={onConfirm}>
            Supprimer définitivement
          </button>
          <button type="button" className="secondary-button" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
