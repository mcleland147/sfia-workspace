"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";
import {
  buildActivitySteps,
  projectActivityLabel,
} from "@/domains/conversation/activity-labels";

export type PrepMessage = {
  id: string;
  role: string;
  content: string;
  status: string;
};

export type PrepLiveActivityEvent = {
  sequence: number;
  nature: string;
  status: string;
  summary: string;
  phase: string;
  sourceRef?: string | null;
  detail?: Record<string, unknown> | null;
};

export function PreparationConversation(props: {
  messages: PrepMessage[];
  draft: string;
  busy: boolean;
  noraActivity: "idle" | "preparing" | "error";
  onDraftChange: (v: string) => void;
  onSend: () => void;
  /** Resume banner when preparation is reopened (state 05). */
  showResumeBanner?: boolean;
  footer?: React.ReactNode;
  /** C1 / Figma 12.10 — mid-turn activity (same capability as Travail). */
  liveActivityEvents?: PrepLiveActivityEvent[];
  liveActivityHeadline?: string;
}) {
  const empty = props.messages.length === 0;
  const liveEvents = props.liveActivityEvents ?? [];
  const showLive =
    (props.noraActivity === "preparing" || liveEvents.length > 0) &&
    Boolean(props.liveActivityHeadline || liveEvents.length > 0);

  return (
    <section className="sas-thread" data-testid="prep-conversation">
      <div className="sas-thread-scroll" data-testid="prep-message-list">
        {props.showResumeBanner ? (
          <div className="sas-resume-banner" role="status" data-testid="prep-resume-banner">
            <span aria-hidden>●</span>
            <span>Conversation et contexte retrouvés · vous pouvez continuer</span>
          </div>
        ) : null}

        {empty && !showLive ? (
          <article className="sas-msg sas-msg-nora" data-testid="prep-empty-invite">
            <header className="sas-msg-head">
              <span className="sas-msg-avatar sas-msg-avatar-nora" aria-hidden>
                ✦
              </span>
              <span className="sas-msg-role sas-msg-role-nora">NORA</span>
            </header>
            <div className="sas-msg-body">
              <p>
                Bonjour. Racontez-moi ce que vous aimeriez accomplir, même si l&apos;idée est encore
                vague.
              </p>
              <p>
                Je vous aiderai à en dégager une première direction, sans vous demander un cadrage
                complet.
              </p>
            </div>
          </article>
        ) : null}

        {props.messages.map((m, index) => {
          const isNora = m.role === "assistant";
          const highlight =
            isNora &&
            index === props.messages.length - 1 &&
            props.messages.filter((x) => x.role === "assistant").length > 1;
          return (
            <article
              key={m.id}
              className={`sas-msg ${isNora ? "sas-msg-nora" : "sas-msg-pilot"}${
                highlight ? " sas-msg-nora-emphasis" : ""
              }`}
              data-testid={`prep-msg-${m.role}`}
              data-status={m.status}
            >
              <header className="sas-msg-head">
                <span
                  className={`sas-msg-avatar ${isNora ? "sas-msg-avatar-nora" : "sas-msg-avatar-pilot"}`}
                  aria-hidden
                >
                  {isNora ? "✦" : "P"}
                </span>
                <span className={`sas-msg-role ${isNora ? "sas-msg-role-nora" : "sas-msg-role-pilot"}`}>
                  {isNora ? "NORA" : "PILOTE"}
                </span>
              </header>
              <div className="sas-msg-body">
                {isNora ? (
                  <SafeMarkdown content={m.content} />
                ) : (
                  <div className="whitespace-pre-wrap">{m.content}</div>
                )}
              </div>
            </article>
          );
        })}

        {showLive ? (
          <div
            className="fig-nora-live-activity"
            role="status"
            aria-live="polite"
            data-testid="nora-live-activity"
            data-figma-frame="12.10"
          >
            <div className="fig-nora-live-activity-head">
              <p className="fig-nora-live-activity-kicker">ACTIVITÉ NORA</p>
              <span className="fig-nora-live-activity-badge" data-testid="nora-live-activity-badge">
                En cours
              </span>
            </div>
            <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
              {props.liveActivityHeadline ||
                (liveEvents.length
                  ? projectActivityLabel(liveEvents[liveEvents.length - 1]!)
                  : "Activité en cours")}
            </p>
            <p className="fig-nora-live-activity-lead">
              Les principales vérifications sont présentées au fil du travail.
            </p>
            {liveEvents.length > 0 ? (
              <ul className="fig-nora-live-activity-steps" data-testid="nora-live-activity-steps">
                {buildActivitySteps(liveEvents).map((step) => (
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
            ) : null}
          </div>
        ) : null}

        {props.noraActivity === "preparing" && !showLive ? (
          <div className="sas-thread-status" role="status" aria-live="polite">
            Nora prépare une réponse…
          </div>
        ) : null}
        {props.noraActivity === "error" ? (
          <div className="sas-thread-status sas-thread-status-error" role="alert">
            Échec de génération — votre message Pilote est conservé. Vous pouvez renvoyer.
          </div>
        ) : null}
      </div>

      <div className="sas-composer" data-testid="prep-composer">
        <textarea
          className="sas-composer-input"
          value={props.draft}
          onChange={(e) => props.onDraftChange(e.target.value)}
          placeholder="Décrivez votre idée, une question ou une hésitation…"
          aria-label="Message à Nora"
          data-testid="prep-draft"
          rows={2}
          disabled={props.busy}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
              e.preventDefault();
              props.onSend();
            }
          }}
        />
        <div className="sas-composer-bar" aria-hidden={!props.draft.trim()}>
          <span className="sas-composer-hint">
            <span className="sas-composer-plus" aria-hidden>
              ＋
            </span>
            Échanger librement avec Nora
          </span>
          <button
            type="button"
            className="sas-composer-send"
            disabled={props.busy || !props.draft.trim()}
            onClick={props.onSend}
            data-testid="prep-send"
            aria-label="Envoyer le message"
          >
            <span aria-hidden>↑</span>
          </button>
        </div>
      </div>
      {props.footer}
    </section>
  );
}
