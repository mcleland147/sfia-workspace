"use client";

import { useEffect, useRef, useState } from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraComposition } from "@/components/figma/NoraComposition";
import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
import type {
  MessageProjectionView,
  TurnChoice,
  TurnReference,
} from "@/domains/conversation/turn-projection";
import { admitConversationalComposition } from "@/domains/conversation/conversational-composition";
import {
  compositionAnchorsChoices,
  compositionAnchorsReferences,
} from "@/domains/conversation/visual-composition";
import {
  buildActivitySteps,
  projectActivityLabel,
} from "@/domains/conversation/activity-labels";

export type NoraMsg = {
  id: string;
  role: string;
  content: string;
  status: string;
};

export function NoraConversation(props: {
  messages: NoraMsg[];
  draft: string;
  busy: boolean;
  unresolvedPending?: boolean;
  activity?: "idle" | "preparing" | "error";
  status?: string;
  onDraft: (v: string) => void;
  onSend: () => void;
  onReconcile?: () => void;
  aside?: React.ReactNode;
  /** When set, participates in project-travail-stage CSS grid via display:contents. */
  embeddedInStage?: boolean;
  projections?: MessageProjectionView[];
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  /** Consultation links — independent of choice lifetime (§6.10). */
  onReference?: (ref: TurnReference) => void;
  choiceFrozen?: boolean;
  forceStickToken?: number;
  layoutMode?: "normal" | "split" | "enlarged";
  /** J-C13 — scroll/highlight exact message without sending. */
  focusMessageId?: string | null;
  onFocusMessageHandled?: () => void;
  focusStatus?: string | null;
  /** Ensemble 07 — verrou qualification initiale (UI + accessibilité). */
  composerLocked?: boolean;
  composerLockReason?: string;
  /** E07 05.17 — bandeau qualification + lien Trajectoire. */
  qualificationBanner?: boolean;
  onOpenTrajectoire?: () => void;
  /** C01/C05/C07 — mid-turn functional activity (polled), distinct from response streaming. */
  liveActivityEvents?: Array<{
    sequence: number;
    nature: string;
    status: string;
    summary: string;
    phase: string;
    sourceRef?: string | null;
    detail?: Record<string, unknown> | null;
  }>;
  liveActivityHeadline?: string;
  /** Figma 12.09 — retirable D8 dossier reference (not free-text). */
  dossierAttachment?: {
    attemptId: string;
    contractId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
  } | null;
  onRemoveDossierAttachment?: () => void;
}) {
  const n = props.messages.length;
  const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
  const variantLabel =
    n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
  const embedded = Boolean(props.embeddedInStage);
  const composerLocked = Boolean(props.composerLocked);
  const hasDossier = Boolean(props.dossierAttachment?.attemptId);
  const sendDisabled =
    props.busy ||
    (!props.draft.trim() && !hasDossier) ||
    composerLocked;
  const lastMessageId = n > 0 ? props.messages[n - 1]!.id : null;
  const { threadRef, onScroll, scrollToBottom, newBelow } = useNoraThreadScroll({
    messageCount: n,
    lastMessageId,
    activityPreparing: props.activity === "preparing",
    forceStickToken: props.forceStickToken ?? 0,
    focusMessageId: props.focusMessageId,
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [imeComposing, setImeComposing] = useState(false);
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

  // Include message id order so Journal→Travail highlight rebinds after a same-length
  // setMessages remount (length-only deps lost data-journal-focus on replaced nodes).
  const messageIdsKey = props.messages.map((m) => m.id).join("\0");
  useEffect(() => {
    const targetId = props.focusMessageId?.trim();
    if (!targetId) return;
    let cancelled = false;
    let highlightTimer: number | undefined;
    let attempts = 0;
    const tryFocus = () => {
      if (cancelled) return;
      const root = threadRef.current;
      const node = root?.querySelector(
        `[data-message-id="${CSS.escape(targetId)}"]`,
      ) as HTMLElement | null;
      if (!node) {
        attempts += 1;
        // Wait for async insert / paint — do not clear focus on first miss (avoids landing on last message).
        if (attempts < 40) {
          window.setTimeout(tryFocus, 50);
          return;
        }
        props.onFocusMessageHandled?.();
        return;
      }
      node.scrollIntoView({ block: "center", behavior: "smooth" });
      node.setAttribute("data-journal-focus", "1");
      node.classList.add("is-journal-focus");
      // Keep focus marker long enough for Journal→Travail deep-link asserts / paint races.
      highlightTimer = window.setTimeout(() => {
        node.classList.remove("is-journal-focus");
        node.removeAttribute("data-journal-focus");
        props.onFocusMessageHandled?.();
      }, 5200);
    };
    tryFocus();
    return () => {
      cancelled = true;
      if (highlightTimer) window.clearTimeout(highlightTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.focusMessageId, messageIdsKey]);

  const projectionByMessage = new Map(
    (props.projections ?? []).map((p) => [p.messageId ?? "", p]),
  );

  return (
    <div
      className={
        embedded
          ? "fig-travail-workspace-embed"
          : "fig-workspace fig-nora-responsive fig-travail-workspace"
      }
      data-figma-frame={frame}
      data-figma-mobile-frames="282:468,282:492"
      data-testid="nora-workspace"
      data-travail-embed={embedded ? "1" : "0"}
      data-travail-layout={props.layoutMode ?? "normal"}
    >
      <section
        className="fig-conversation-panel"
        data-testid="nora-conversation-panel"
        data-nora-main="1"
        id="nora-main"
        hidden={props.layoutMode === "enlarged"}
      >
        <div className="fig-conversation-head">
          <p className="fig-kicker !mb-0">Conversation du projet</p>
          <span className="fig-tag fig-tag-muted">{variantLabel}</span>
          {props.unresolvedPending ? (
            <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
          ) : null}
          {props.focusStatus ? (
            <span className="fig-tag fig-tag-warn" data-testid="nora-focus-status">
              {props.focusStatus}
            </span>
          ) : null}
          {newBelow ? (
            <button
              type="button"
              className="fig-tag fig-tag-ok"
              data-testid="nora-new-below"
              onClick={() => scrollToBottom("smooth")}
            >
              Nouveaux messages ↓
            </button>
          ) : null}
        </div>

        <div
          className="fig-nora-thread"
          data-testid="nora-thread"
          ref={threadRef}
          onScroll={onScroll}
        >
          {n === 0 ? (
            <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
              <div className="fig-msg-meta">
                <span className="fig-msg-avatar" aria-hidden>
                  N
                </span>
                <span className="fig-msg-role">Nora</span>
              </div>
              <p className="fig-msg-body">
                Première conversation — écrivez pour démarrer le fil du projet. Aucun message fictif
                n&apos;est prérempli.
              </p>
            </div>
          ) : null}
          {props.messages.map((m) => {
            const isNora = m.role === "assistant";
            const proj = isNora ? projectionByMessage.get(m.id) : undefined;
            return (
              <article
                key={m.id}
                className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
                data-message-id={m.id}
                data-testid={isNora ? "nora-msg-assistant" : "nora-msg-pilot"}
              >
                <div className="fig-msg-meta">
                  {isNora ? (
                    <span className="fig-msg-avatar" aria-hidden>
                      N
                    </span>
                  ) : null}
                  <span className={`fig-msg-role ${isNora ? "" : "fig-msg-role-pilot"}`}>
                    {isNora ? "Nora" : "Pilote"}
                  </span>
                  <span className="sr-only">{m.status}</span>
                </div>
                {isNora ? (
                  <div className="fig-msg-body">
                    {(() => {
                      const admission = proj?.visualComposition
                        ? admitConversationalComposition(proj.visualComposition, {
                            canonicalText: m.content,
                          })
                        : null;
                      const policy = admission?.bodyPolicy ?? "markdown_only";
                      const compositionEl =
                        proj?.visualComposition && policy !== "markdown_only" ? (
                          <NoraComposition
                            composition={proj.visualComposition}
                            canonicalText={m.content}
                            choices={proj.choices}
                            references={proj.references}
                            actionable={proj.actionable}
                            busy={props.busy}
                            choiceFrozen={props.choiceFrozen}
                            messageId={m.id}
                            onChoice={props.onChoice}
                            onReference={props.onReference}
                          />
                        ) : null;
                      if (policy === "substitute" && compositionEl) {
                        return compositionEl;
                      }
                      if (policy === "complement" && compositionEl) {
                        return (
                          <>
                            <SafeMarkdown content={m.content} />
                            <div
                              className="fig-comp-complement"
                              data-testid="nora-composition-complement"
                            >
                              {compositionEl}
                            </div>
                          </>
                        );
                      }
                      return <SafeMarkdown content={m.content} />;
                    })()}
                  </div>
                ) : (
                  <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
                )}
                {proj?.activity && proj.activity.kind !== "wait" ? (
                  <details className="fig-nora-activity-history" data-testid="nora-activity-history">
                    <summary>Activité de cette réponse</summary>
                    <p>
                      {proj.activity.label}
                      {proj.activity.detail ? ` — ${proj.activity.detail}` : ""}
                    </p>
                  </details>
                ) : null}
                {proj &&
                proj.choices.length > 0 &&
                !compositionAnchorsChoices(proj.visualComposition) ? (
                  <div
                    className="fig-nora-choices"
                    data-testid="nora-choices"
                    data-actionable={proj.actionable ? "1" : "0"}
                    data-message-id={m.id}
                  >
                    {proj.choices.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className="fig-nora-choice"
                        data-testid="nora-choice"
                        data-choice-id={c.id}
                        disabled={!proj.actionable || props.busy || props.choiceFrozen}
                        onClick={() => props.onChoice?.(c, m.id)}
                      >
                        {c.label}
                      </button>
                    ))}
                    {!proj.actionable ? (
                      <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
                        Propositions expirées — consultation seule.
                      </p>
                    ) : null}
                  </div>
                ) : null}
                {proj?.references?.length &&
                !compositionAnchorsReferences(proj.visualComposition) ? (
                  <ul className="fig-nora-refs" data-testid="nora-refs">
                    {proj.references.map((r, i) => (
                      <li key={`${r.kind}-${r.resourceId ?? r.path ?? i}`}>
                        <button
                          type="button"
                          className="fig-nora-ref-link"
                          data-testid="nora-ref-link"
                          data-ref-kind={r.kind}
                          onClick={() => props.onReference?.(r)}
                        >
                          Consulter · {r.label}
                          {r.available === false ? " (à vérifier)" : ""}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
          {props.qualificationBanner ? (
            <div
              className="fig-panel space-y-3 my-3"
              role="status"
              aria-live="polite"
              data-testid="qualification-activity-banner"
              style={{ borderColor: "#7477ed55" }}
            >
              <p className="text-[10px] uppercase tracking-wide text-[#7477ed] font-semibold">
                Nora prépare sa réponse
              </p>
              <div className="space-y-2 text-sm text-[#a3b0c7]">
                <p>✓ Sources et intention du projet consultées</p>
                <p>○ Préparation de la première orientation de trajectoire…</p>
              </div>
              {props.onOpenTrajectoire ? (
                <button
                  type="button"
                  className="text-sm font-semibold text-[#7477ed] hover:underline"
                  data-testid="qualification-voir-trajectoire"
                  onClick={props.onOpenTrajectoire}
                >
                  Voir la trajectoire ↗
                </button>
              ) : null}
            </div>
          ) : null}
          {props.activity === "preparing" && !props.qualificationBanner ? (
            <div
              className="fig-nora-activity"
              role="status"
              aria-live="polite"
              data-testid="nora-activity-preparing"
            >
              <span className="fig-nora-activity-pulse" aria-hidden />
              <span>Nora prépare une réponse…</span>
              <span className="fig-nora-activity-note">
                Attente réelle — aucune étape inventée.
              </span>
            </div>
          ) : null}
          {(props.activity === "preparing" || (props.liveActivityEvents?.length ?? 0) > 0) &&
          (props.liveActivityHeadline || (props.liveActivityEvents?.length ?? 0) > 0) ? (
            <div
              className="fig-nora-live-activity"
              role="status"
              aria-live="polite"
              data-testid="nora-live-activity"
              data-figma-frame="12.01-12.10"
            >
              <div className="fig-nora-live-activity-head">
                <p className="fig-nora-live-activity-kicker">ACTIVITÉ NORA</p>
                <span className="fig-nora-live-activity-badge" data-testid="nora-live-activity-badge">
                  En cours
                </span>
              </div>
              <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
                {props.liveActivityHeadline ||
                  (props.liveActivityEvents?.length
                    ? projectActivityLabel(
                        props.liveActivityEvents[props.liveActivityEvents.length - 1]!,
                      )
                    : "Activité en cours")}
              </p>
              <p className="fig-nora-live-activity-lead">
                Les principales vérifications sont présentées au fil du travail.
              </p>
              {(props.liveActivityEvents?.length ?? 0) > 0 ? (
                <>
                  <ul className="fig-nora-live-activity-steps" data-testid="nora-live-activity-steps">
                    {buildActivitySteps(props.liveActivityEvents!).map((step) => (
                      <li
                        key={step.key}
                        data-state={step.state}
                        data-nature={step.nature}
                        className={`fig-nora-live-activity-step fig-nora-live-activity-step-${step.state}`}
                      >
                        <span className="fig-nora-live-activity-mark" aria-hidden>
                          {step.state === "done" ? "✓" : step.state === "current" ? "◌" : "○"}
                        </span>
                        <span>{step.label}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="fig-nora-live-activity-footnote">
                    Activité fonctionnelle · aucun raisonnement interne exposé
                  </p>
                  <details data-testid="nora-live-activity-detail" className="fig-nora-live-activity-detail">
                    <summary>
                      Détail ({props.liveActivityEvents!.length} événement
                      {props.liveActivityEvents!.length > 1 ? "s" : ""})
                    </summary>
                    <ul>
                      {props.liveActivityEvents!.map((ev) => (
                        <li key={ev.sequence} data-nature={ev.nature} data-phase={ev.phase}>
                          {projectActivityLabel(ev)}
                        </li>
                      ))}
                    </ul>
                  </details>
                </>
              ) : null}
            </div>
          ) : null}
          {props.activity === "error" ? (
            <div className="fig-alert" role="alert" data-testid="nora-activity-error">
              La dernière réponse n&apos;a pas pu être consolidée entièrement. Le texte saisi est
              conservé. Aucune mutation n&apos;est relancée automatiquement — reformulez, ou
              réconciliez seulement si une intention d&apos;effet reste ouverte.
            </div>
          ) : null}
        </div>
      </section>

      {/*
        Pending banner lives outside the Figma-sized composer card so
        max-height never clips reconcile controls under the shell lock.
      */}
      <div
        className="fig-travail-composer-stack"
        data-testid="nora-composer-stack"
        data-pending={props.unresolvedPending ? "1" : "0"}
        hidden={props.layoutMode === "enlarged"}
      >
        {props.unresolvedPending && props.onReconcile ? (
          <div className="fig-travail-pending" data-testid="thread-pending-banner">
            <p className="fig-travail-pending-copy">
              Tentative non résolue — vérifier l&apos;état serveur avant un nouveau tour. Une
              génération cognitive déjà terminée sans effet métier peut être levée ; un effet
              métier incertain reste protégé.
            </p>
            <button
              type="button"
              className="btn secondary"
              disabled={props.busy}
              data-testid="thread-reconcile-pending"
              onClick={props.onReconcile}
            >
              Vérifier et reprendre
            </button>
          </div>
        ) : null}
        <div
          className="fig-composer fig-travail-composer relative"
          data-testid="nora-composer"
          data-composer-locked={composerLocked ? "1" : "0"}
          data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
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
            <div
              className="fig-dossier-attachment"
              data-testid="dossier-composer-attachment"
            >
              <div className="fig-dossier-attachment-body">
                <p className="fig-dossier-attachment-label">Dossier D8 joint</p>
                <p className="fig-dossier-attachment-meta">
                  {props.dossierAttachment.attemptId}
                  {props.dossierAttachment.dossierVersion != null
                    ? ` · v${props.dossierAttachment.dossierVersion}`
                    : ""}
                  {props.dossierAttachment.verdictD8
                    ? ` · ${props.dossierAttachment.verdictD8}`
                    : ""}
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
            <span className="fig-travail-composer-plus" aria-hidden>
              +
            </span>
            <textarea
              ref={textareaRef}
              className="fig-travail-composer-input"
              value={props.draft}
              onChange={(e) => props.onDraft(e.target.value)}
              placeholder="Écrire à Nora dans ce projet…"
              aria-label="Message à Nora"
              data-testid="thread-draft"
              rows={1}
              readOnly={composerLocked}
              disabled={composerLocked}
              aria-disabled={composerLocked}
              onCompositionStart={() => setImeComposing(true)}
              onCompositionEnd={() => setImeComposing(false)}
              onKeyDown={(e) => {
                if (composerLocked) {
                  e.preventDefault();
                  return;
                }
                if (imeComposing || e.nativeEvent.isComposing) return;
                // Mobile: Enter = newline; send via button only.
                if (isMobile) return;
                if (e.key === "Enter" && !e.shiftKey && !props.busy) {
                  e.preventDefault();
                  if (props.draft.trim() || hasDossier) props.onSend();
                }
              }}
            />
            <button
              type="button"
              className="fig-travail-composer-send"
              disabled={sendDisabled}
              onClick={props.onSend}
              data-testid="thread-send"
              aria-label="Envoyer"
            >
              <span aria-hidden>↑</span>
            </button>
          </div>
          {props.status ? (
            <p className="sr-only" data-testid="thread-nora-status" role="status">
              {props.status}
            </p>
          ) : null}
        </div>
      </div>

      {props.aside ? (
        <aside className="fig-travail-aside" data-testid="nora-aside">
          {props.aside}
        </aside>
      ) : null}
    </div>
  );
}
