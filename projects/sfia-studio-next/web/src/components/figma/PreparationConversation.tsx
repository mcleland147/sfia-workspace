"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

export type PrepMessage = {
  id: string;
  role: string;
  content: string;
  status: string;
};

export function PreparationConversation(props: {
  messages: PrepMessage[];
  draft: string;
  busy: boolean;
  noraActivity: "idle" | "preparing" | "error";
  onDraftChange: (v: string) => void;
  onSend: () => void;
  footer?: React.ReactNode;
}) {
  const empty = props.messages.length === 0;

  return (
    <section className="fig-panel fig-sas-thread space-y-3" data-testid="prep-conversation">
      <p className="fig-kicker">Discussion</p>
      <div className="space-y-3 max-h-[58vh] overflow-auto pr-1" data-testid="prep-message-list">
        {empty ? (
          <div className="fig-msg fig-msg-nora" data-testid="prep-empty-invite">
            <div className="text-xs muted mb-2 uppercase tracking-wide">Nora</div>
            <p className="text-sm">
              Exposez votre intention librement. Je clarifie avec vous — aucun projet n&apos;est créé
              tant que vous ne le décidez pas explicitement.
            </p>
          </div>
        ) : null}
        {props.messages.map((m) => (
          <article
            key={m.id}
            className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
            data-testid={`prep-msg-${m.role}`}
          >
            <div className="text-xs muted mb-2 flex gap-2 items-center">
              <span className="uppercase tracking-wide">
                {m.role === "assistant" ? "Nora" : "Pilote"}
              </span>
              <span>· {m.status}</span>
            </div>
            {m.role === "assistant" ? (
              <SafeMarkdown content={m.content} />
            ) : (
              <div className="whitespace-pre-wrap text-sm">{m.content}</div>
            )}
          </article>
        ))}
        {props.noraActivity === "preparing" ? (
          <div className="fig-alert" role="status" aria-live="polite">
            Nora prépare une réponse…
          </div>
        ) : null}
        {props.noraActivity === "error" ? (
          <div className="fig-alert" style={{ borderColor: "var(--bad)" }} role="alert">
            Échec de génération — votre message Pilote est conservé. Vous pouvez renvoyer.
          </div>
        ) : null}
      </div>
      <div className="fig-composer">
        <textarea
          className="textarea"
          value={props.draft}
          onChange={(e) => props.onDraftChange(e.target.value)}
          placeholder="Écrire à Nora…"
          aria-label="Message à Nora"
          data-testid="prep-draft"
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
              e.preventDefault();
              props.onSend();
            }
          }}
        />
        <div className="flex flex-wrap gap-2 items-center">
          <button
            type="button"
            className="btn"
            disabled={props.busy || !props.draft.trim()}
            onClick={props.onSend}
            data-testid="prep-send"
          >
            Envoyer
          </button>
          <span className="text-xs muted">⌘/Ctrl+Entrée</span>
        </div>
      </div>
      {props.footer}
    </section>
  );
}
