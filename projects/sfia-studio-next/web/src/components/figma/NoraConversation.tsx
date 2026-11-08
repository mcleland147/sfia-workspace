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
      className="fig-workspace fig-nora-responsive"
      data-figma-frame={frame}
      data-figma-mobile-frames="282:468,282:492"
      data-testid="nora-workspace"
    >
      <section className="space-y-3">
        <div className="fig-panel space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <p className="fig-kicker !mb-0">Travail / projet</p>
            <span className="fig-tag fig-tag-accent">PILOTE</span>
            <span className="fig-tag fig-tag-muted">{variantLabel}</span>
            {props.unresolvedPending ? (
              <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
            ) : null}
          </div>
          <div className="space-y-3 max-h-[56vh] overflow-auto pr-1" data-testid="nora-thread">
            {n === 0 ? (
              <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
                <div className="text-xs muted mb-2 uppercase tracking-wide">Nora</div>
                Première conversation — écrivez pour démarrer le fil du projet. Aucun message
                fictif n&apos;est prérempli.
              </div>
            ) : null}
            {props.messages.map((m) => (
              <article
                key={m.id}
                className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
              >
                <div className="text-xs muted mb-1">
                  {m.role === "assistant" ? "NORA" : "PILOTE"} · {m.status}
                </div>
                {m.role === "assistant" ? (
                  <SafeMarkdown content={m.content} />
                ) : (
                  <div className="whitespace-pre-wrap text-sm">{m.content}</div>
                )}
              </article>
            ))}
            {props.activity === "preparing" ? (
              <div className="fig-alert" role="status">
                Nora prépare une réponse…
              </div>
            ) : null}
          </div>
          <div className="fig-composer">
            <textarea
              className="textarea"
              value={props.draft}
              onChange={(e) => props.onDraft(e.target.value)}
              placeholder="Écrire à Nora…"
              aria-label="Message à Nora"
              data-testid="thread-draft"
            />
            <div className="flex flex-wrap gap-2">
              <button
                className="btn"
                disabled={props.busy || !props.draft.trim()}
                onClick={props.onSend}
                data-testid="thread-send"
              >
                Envoyer
              </button>
              <span className="text-xs muted self-center">Joindre un élément · non requis</span>
            </div>
            {props.unresolvedPending && props.onReconcile ? (
              <div className="space-y-1" data-testid="thread-pending-banner">
                <p className="text-xs muted">Tentative non résolue — réconcilier avant un nouveau tour.</p>
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
              <p className="text-xs muted" data-testid="thread-nora-status">
                {props.status}
              </p>
            ) : null}
          </div>
        </div>
      </section>
      {props.aside ? <aside className="space-y-3">{props.aside}</aside> : null}
    </div>
  );
}
