"use client";

import { useEffect, useRef } from "react";
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
import { NoraLiveActivity } from "@/components/figma/NoraLiveActivity";
import { NoraSharedComposer } from "@/components/figma/NoraSharedComposer";

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
  /** ML3 — project id for dictation session admission. */
  projectId?: string;
  /** ML3 — SFIA_COMPOSER_DICTATION mirrored from server (optional). */
  dictationEnabled?: boolean;
}) {
  const n = props.messages.length;
  const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
  const variantLabel =
    n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
  const embedded = Boolean(props.embeddedInStage);
  const composerLocked = Boolean(props.composerLocked);
  const lastMessageId = n > 0 ? props.messages[n - 1]!.id : null;
  const { threadRef, onScroll, scrollToBottom, newBelow } = useNoraThreadScroll({
    messageCount: n,
    lastMessageId,
    activityPreparing: props.activity === "preparing",
    forceStickToken: props.forceStickToken ?? 0,
    focusMessageId: props.focusMessageId,
  });
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
            <div className="fig-msg fig-msg-nora" data-testid="nora-first-empty">
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
          {/* RB-14: single LIVE projection — NoraLiveActivity when events/headline exist;
              legacy preparer only as fallback when no live card is shown. */}
          {(props.activity === "preparing" || (props.liveActivityEvents?.length ?? 0) > 0) &&
          (props.liveActivityHeadline || (props.liveActivityEvents?.length ?? 0) > 0) ? (
            <NoraLiveActivity
              events={props.liveActivityEvents ?? []}
              headline={props.liveActivityHeadline}
              active={props.activity === "preparing"}
              figmaFrame="12.01"
            />
          ) : props.activity === "preparing" && !props.qualificationBanner ? (
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
        <NoraSharedComposer
          variant="travail"
          draft={props.draft}
          onDraft={props.onDraft}
          busy={props.busy}
          onSend={props.onSend}
          projectId={props.projectId}
          dictationEnabled={props.dictationEnabled}
          composerLocked={composerLocked}
          composerLockReason={props.composerLockReason}
          dossierAttachment={props.dossierAttachment}
          onRemoveDossierAttachment={props.onRemoveDossierAttachment}
          status={props.status}
        />
      </div>

      {props.aside ? (
        <aside className="fig-travail-aside" data-testid="nora-aside">
          {props.aside}
        </aside>
      ) : null}
    </div>
  );
}
