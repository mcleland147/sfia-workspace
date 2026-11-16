"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

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
}) {
  const n = props.messages.length;
  const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
  const variantLabel =
    n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";

  return (
    <div
      className="fig-workspace fig-nora-responsive fig-travail-workspace"
      data-figma-frame={frame}
      data-figma-mobile-frames="282:468,282:492"
      data-testid="nora-workspace"
    >
      <section className="fig-travail-main" data-testid="nora-main">
        <div className="fig-conversation-panel" data-testid="nora-conversation-panel">
          <div className="fig-conversation-head">
            <p className="fig-kicker !mb-0">Conversation du projet</p>
            <span className="fig-tag fig-tag-muted">{variantLabel}</span>
            {props.unresolvedPending ? (
              <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
            ) : null}
          </div>

          <div className="fig-nora-thread-shell" data-testid="nora-thread-shell">
            <div className="fig-nora-thread" data-testid="nora-thread">
              {n === 0 ? (
                <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
                  <div className="fig-msg-meta">
                    <span className="fig-msg-avatar" aria-hidden>
                      N
                    </span>
                    <span className="fig-msg-role">Nora</span>
                  </div>
                  <p className="fig-msg-body">
                    Première conversation — écrivez pour démarrer le fil du projet. Aucun message
                    fictif n&apos;est prérempli.
                  </p>
                </div>
              ) : null}
              {props.messages.map((m) => {
                const isNora = m.role === "assistant";
                return (
                  <article
                    key={m.id}
                    className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
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
                        <SafeMarkdown content={m.content} />
                      </div>
                    ) : (
                      <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
                    )}
                  </article>
                );
              })}
              {props.activity === "preparing" ? (
                <div className="fig-alert" role="status">
                  Nora prépare une réponse…
                </div>
              ) : null}
            </div>

            <div className="fig-composer fig-composer-sticky fig-travail-composer" data-testid="nora-composer">
              <textarea
                className="fig-travail-composer-input"
                value={props.draft}
                onChange={(e) => props.onDraft(e.target.value)}
                placeholder="Écrire à Nora dans ce projet…"
                aria-label="Message à Nora"
                data-testid="thread-draft"
                rows={2}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
                    e.preventDefault();
                    props.onSend();
                  }
                }}
              />
              <div className="fig-travail-composer-bar">
                <span className="fig-travail-composer-hint">
                  Votre message reste rattaché au projet actif
                </span>
                <button
                  type="button"
                  className="fig-travail-composer-send"
                  disabled={props.busy || !props.draft.trim()}
                  onClick={props.onSend}
                  data-testid="thread-send"
                  aria-label="Envoyer"
                >
                  <span aria-hidden>↑</span>
                </button>
              </div>
              {props.unresolvedPending && props.onReconcile ? (
                <div className="space-y-1 mt-2" data-testid="thread-pending-banner">
                  <p className="text-xs muted">
                    Tentative non résolue — réconcilier avant un nouveau tour.
                  </p>
                  <button
                    type="button"
                    className="btn secondary"
                    disabled={props.busy}
                    data-testid="thread-reconcile-pending"
                    onClick={props.onReconcile}
                  >
                    Réconcilier la tentative en cours
                  </button>
                </div>
              ) : null}
              {props.status ? (
                <p className="sr-only" data-testid="thread-nora-status" role="status">
                  {props.status}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {props.aside ? (
        <aside className="fig-travail-aside" data-testid="nora-aside">
          {props.aside}
        </aside>
      ) : null}
    </div>
  );
}
