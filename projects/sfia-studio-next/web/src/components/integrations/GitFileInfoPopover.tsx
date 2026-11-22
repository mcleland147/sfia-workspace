"use client";

import { useEffect, useId, useRef, type RefObject } from "react";

export type GitFileInfoFields = {
  name: string;
  type: string;
  repository: string;
  ref: string;
  path: string;
  commitSha: string | null;
  commitShaVerified: boolean;
  blobSha: string | null;
  sizeLabel?: string | null;
  origin?: string | null;
};

/**
 * Contextual info panel anchored to the Infos control (UAT-04 / convergence).
 * Non-modal popover — Escape / outside click / Fermer; focus returns to trigger.
 */
export function GitFileInfoPopover(props: {
  open: boolean;
  onClose: () => void;
  fields: GitFileInfoFields;
  anchorRef?: RefObject<HTMLElement | null>;
  /** Stable id for aria-controls on the trigger (must match). */
  panelId?: string;
}) {
  const autoId = useId();
  const panelId = props.panelId ?? autoId;
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!props.open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        props.onClose();
        props.anchorRef?.current?.focus();
      }
    }
    function onPointer(e: MouseEvent) {
      const t = e.target as Node | null;
      if (!t) return;
      if (panelRef.current?.contains(t)) return;
      if (props.anchorRef?.current?.contains(t)) return;
      props.onClose();
      // Do not steal focus on outside click — leave where the user clicked.
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [props.open, props.onClose, props.anchorRef]);

  useEffect(() => {
    if (!props.open) return;
    closeBtnRef.current?.focus();
  }, [props.open]);

  if (!props.open) return null;

  const rows: Array<[string, string]> = [
    ["Nom", props.fields.name],
    ["Type", props.fields.type],
    ["Dépôt", props.fields.repository || "—"],
    ["Branche / ref", props.fields.ref || "—"],
    ["Chemin", props.fields.path || "—"],
    [
      "Commit",
      props.fields.commitShaVerified && props.fields.commitSha
        ? props.fields.commitSha
        : props.fields.commitSha
          ? "non vérifié"
          : "—",
    ],
    ["Blob", props.fields.blobSha?.trim() ? props.fields.blobSha : "—"],
  ];
  if (props.fields.sizeLabel) rows.push(["Taille", props.fields.sizeLabel]);
  if (props.fields.origin) rows.push(["Origine", props.fields.origin]);

  function closeAndRestoreFocus() {
    props.onClose();
    // Defer focus until after unmount of panel.
    requestAnimationFrame(() => props.anchorRef?.current?.focus());
  }

  return (
    <div
      ref={panelRef}
      id={panelId}
      className="git-info-popover"
      role="dialog"
      aria-modal="false"
      aria-label="Informations sur la source"
      data-testid="git-file-infos"
    >
      <div className="git-info-popover-head">
        <h3 className="git-info-popover-title" id={`${panelId}-title`}>
          Source
        </h3>
        <button
          type="button"
          ref={closeBtnRef}
          className="git-btn-icon"
          aria-label="Fermer les informations"
          data-testid="git-info-close"
          onClick={closeAndRestoreFocus}
        >
          ×
        </button>
      </div>
      <dl className="git-details-list" aria-labelledby={`${panelId}-title`}>
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className={/Commit|Blob|Chemin/.test(label) ? "git-mono" : undefined}>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
