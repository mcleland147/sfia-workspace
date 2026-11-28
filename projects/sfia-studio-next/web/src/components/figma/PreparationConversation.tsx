"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraLiveActivity } from "@/components/figma/NoraLiveActivity";
import { NoraSharedComposer } from "@/components/figma/NoraSharedComposer";

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
  /** ML3 — optional linked project (dictation prefers project scope when set). */
  projectId?: string | null;
  preparationId?: string;
  dictationEnabled?: boolean;
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
          <NoraLiveActivity
            events={liveEvents}
            headline={props.liveActivityHeadline}
            active={props.noraActivity === "preparing"}
            figmaFrame="12.10"
          />
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

      <div className="sas-composer-slot">
        <NoraSharedComposer
          variant="prep"
          draft={props.draft}
          onDraft={props.onDraftChange}
          busy={props.busy}
          onSend={props.onSend}
          projectId={props.projectId ?? undefined}
          preparationId={props.preparationId}
          dictationEnabled={props.dictationEnabled}
        />
      </div>
      {props.footer}
    </section>
  );
}
