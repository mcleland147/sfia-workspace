"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { ComposerDictationControl } from "@/components/figma/ComposerDictationControl";

export type NoraSharedComposerProps = {
  draft: string;
  onDraft: (value: string) => void;
  busy: boolean;
  onSend: () => void;
  variant: "prep" | "travail";
  projectId?: string;
  preparationId?: string;
  dictationEnabled?: boolean;
  composerLocked?: boolean;
  composerLockReason?: string;
  dossierAttachment?: {
    attemptId: string;
    contractId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
  } | null;
  onRemoveDossierAttachment?: () => void;
  status?: string;
  placeholder?: string;
};

/**
 * One composer for Travail and the preparation screen.
 * Context differs only by ids, placeholder, lock and an authorised attachment.
 * Desktop Enter sends; Shift+Enter keeps a newline. That is the Travail contract.
 */
export function NoraSharedComposer(props: NoraSharedComposerProps) {
  const composerLocked = Boolean(props.composerLocked);
  const hasDossier = Boolean(props.dossierAttachment?.attemptId);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [imeComposing, setImeComposing] = useState(false);
  const [dictationActive, setDictationActive] = useState(false);

  const dictationProjectId = props.projectId;
  const dictationPreparationId = props.projectId ? undefined : props.preparationId;
  const dictationMount = Boolean(dictationProjectId || dictationPreparationId);

  const sendDisabled =
    props.busy || dictationActive || (!props.draft.trim() && !hasDossier) || composerLocked;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 700px)").matches;

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const max = Math.min(window.innerHeight * 0.36, 280);
    const next = Math.min(Math.max(el.scrollHeight, 24), max);
    el.style.height = `${next}px`;
    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
  }, [props.draft]);

  const placeholder =
    props.placeholder ??
    (props.variant === "prep"
      ? "Décrivez votre idée, une question ou une hésitation…"
      : "Écrire à Nora dans ce projet…");

  function canAdmitSend(): boolean {
    if (props.busy || composerLocked || dictationActive) return false;
    return Boolean(props.draft.trim() || hasDossier);
  }

  function onTextareaKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (composerLocked || dictationActive) {
      e.preventDefault();
      return;
    }
    if (imeComposing || e.nativeEvent.isComposing) return;
    if (isMobile) return;
    if (e.key === "Enter" && !e.shiftKey && canAdmitSend()) {
      e.preventDefault();
      props.onSend();
    }
  }

  const dictationControl = dictationMount ? (
    <ComposerDictationControl
      projectId={dictationProjectId}
      preparationId={dictationPreparationId}
      draft={props.draft}
      onDraft={props.onDraft}
      disabled={composerLocked || props.busy}
      enabled={props.dictationEnabled === true}
      onActiveChange={setDictationActive}
    />
  ) : null;

  const sharedTextareaProps = {
    ref: textareaRef,
    value: props.draft,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (composerLocked || dictationActive) return;
      props.onDraft(e.target.value);
    },
    placeholder,
    "aria-label": "Message à Nora" as const,
    rows: 1 as const,
    readOnly: composerLocked || dictationActive,
    "data-dictation-hide": dictationActive ? ("1" as const) : undefined,
    hidden: dictationActive,
    tabIndex: dictationActive ? -1 : 0,
    onCompositionStart: () => setImeComposing(true),
    onCompositionEnd: () => setImeComposing(false),
    onKeyDown: onTextareaKeyDown,
  };

  const prep = props.variant === "prep";

  return (
    <div
      className="fig-composer fig-travail-composer relative"
      data-testid={prep ? "prep-composer" : "nora-composer"}
      data-composer-surface={props.variant}
      data-composer-locked={composerLocked ? "1" : "0"}
      data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
      data-dictation-active={dictationActive ? "1" : "0"}
    >
      {composerLocked ? (
        <div
          className="fig-travail-composer-lock absolute inset-0 z-10 flex items-center gap-3 rounded-xl px-4"
          style={{ background: "rgba(12, 16, 28, 0.72)" }}
          data-testid="composer-lock-overlay"
        >
          <svg
            className="shrink-0 text-[#7477ed]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden
          >
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          <div className="min-w-0 flex-1 text-xs text-[#a3b0c7]">
            <p className="font-semibold text-[#f3f5ff]" data-testid="composer-lock-title">
              Compositeur temporairement indisponible
            </p>
            <p data-testid="composer-lock-reason">
              {props.composerLockReason ||
                "Nora prépare la trajectoire — saisie et envoi désactivés jusqu'au résultat terminal."}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded border border-[#7477ed55] px-1.5 py-0.5 text-[#7477ed]"
            title={
              props.composerLockReason ||
              "Compositeur temporairement indisponible pendant la qualification de trajectoire."
            }
            aria-label={
              props.composerLockReason ||
              "Compositeur temporairement indisponible pendant la qualification de trajectoire."
            }
            data-testid="composer-lock-info"
          >
            i
          </button>
        </div>
      ) : null}
      {props.dossierAttachment?.attemptId ? (
        <div className="fig-dossier-attachment" data-testid="dossier-composer-attachment">
          <div className="fig-dossier-attachment-body">
            <p className="fig-dossier-attachment-label">Dossier D8 joint</p>
            <p className="fig-dossier-attachment-meta">
              {props.dossierAttachment.attemptId}
              {props.dossierAttachment.dossierVersion != null
                ? ` · v${props.dossierAttachment.dossierVersion}`
                : ""}
              {props.dossierAttachment.verdictD8 ? ` · ${props.dossierAttachment.verdictD8}` : ""}
            </p>
          </div>
          <button
            type="button"
            className="fig-dossier-attachment-remove"
            data-testid="dossier-composer-attachment-remove"
            disabled={composerLocked || props.busy}
            onClick={() => props.onRemoveDossierAttachment?.()}
            aria-label="Retirer la référence du dossier D8"
          >
            Retirer
          </button>
        </div>
      ) : null}
      <div className="fig-travail-composer-row">
        <span
          className="fig-travail-composer-plus"
          aria-hidden
          data-dictation-hide={dictationActive ? "1" : undefined}
        >
          +
        </span>
        <textarea
          {...sharedTextareaProps}
          className="fig-travail-composer-input"
          data-testid={prep ? "prep-draft" : "thread-draft"}
          disabled={composerLocked}
          aria-disabled={composerLocked || dictationActive}
        />
        {dictationControl}
        <button
          type="button"
          className="fig-travail-composer-send"
          disabled={sendDisabled}
          onClick={() => {
            if (canAdmitSend()) props.onSend();
          }}
          data-testid={prep ? "prep-send" : "thread-send"}
          aria-label="Envoyer"
          data-dictation-hide={dictationActive ? "1" : undefined}
          hidden={dictationActive}
          tabIndex={dictationActive ? -1 : 0}
        >
          <img
            src="/figma-dictation/send.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden
            className="fig-travail-composer-send-icon"
          />
        </button>
      </div>
      {props.status ? (
        <p className="sr-only" data-testid="thread-nora-status" role="status">
          {props.status}
        </p>
      ) : null}
    </div>
  );
}
