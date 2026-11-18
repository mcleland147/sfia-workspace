"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

export type TravailViewerResource =
  | {
      kind: "document";
      documentId: string;
      title: string;
      revisionId?: string | null;
      revisionNumber?: number | null;
      /** Explicit when no revisionId was requested — never silent latest substitution. */
      versionSource?: "exact" | "current";
      markdown: string | null;
      available: boolean;
      unavailableReason?: string;
    }
  | {
      kind: "git";
      title: string;
      path?: string | null;
      ref?: string | null;
      commit?: string | null;
      content: string | null;
      available: boolean;
      unavailableReason?: string;
      href?: string | null;
    };

export function TravailViewer(props: {
  resource: TravailViewerResource;
  enlarged: boolean;
  onEnlarge: () => void;
  onReduce: () => void;
  onClose: () => void;
  onOpenInDocuments?: () => void;
}) {
  const { resource } = props;
  const title =
    resource.kind === "document" ? resource.title : resource.title || "Source Git";
  const kicker =
    resource.kind === "document"
      ? "Visionneuse · lecture seule"
      : "Visionneuse · source Git";

  return (
    <div
      className="fig-travail-viewer"
      data-testid="travail-viewer"
      data-viewer-kind={resource.kind}
      data-viewer-enlarged={props.enlarged ? "1" : "0"}
    >
      <header className="fig-travail-viewer-head">
        <div>
          <p className="fig-kicker !mb-0">{kicker}</p>
          <h2 className="fig-inspector-title" data-testid="travail-viewer-title">
            {title}
          </h2>
          {resource.kind === "document" && resource.revisionNumber != null ? (
            <p className="fig-travail-viewer-meta" data-testid="travail-viewer-revision">
              Version {resource.revisionNumber}
              {resource.revisionId ? ` · ${resource.revisionId.slice(0, 8)}` : ""}
              {resource.versionSource === "current"
                ? " · version courante"
                : resource.versionSource === "exact"
                  ? " · révision citée"
                  : ""}
            </p>
          ) : null}
          {resource.kind === "git" ? (
            <p className="fig-travail-viewer-meta">
              {[resource.path, resource.ref, resource.commit?.slice(0, 8)]
                .filter(Boolean)
                .join(" · ") || "Provenance partielle"}
            </p>
          ) : null}
        </div>
        <div className="fig-travail-viewer-actions">
          {props.enlarged ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-reduce"
              onClick={props.onReduce}
            >
              Réduire
            </button>
          ) : (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-enlarge"
              onClick={props.onEnlarge}
            >
              Agrandir
            </button>
          )}
          {resource.kind === "document" && props.onOpenInDocuments ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-open-documents"
              onClick={props.onOpenInDocuments}
              disabled={!resource.available}
            >
              Ouvrir dans Documents
            </button>
          ) : null}
          <button
            type="button"
            className="btn secondary"
            data-testid="travail-viewer-close"
            onClick={props.onClose}
          >
            Fermer
          </button>
        </div>
      </header>

      <div className="fig-travail-viewer-body" data-testid="travail-viewer-body">
        {!resource.available ? (
          <div className="fig-alert" role="alert" data-testid="travail-viewer-unavailable">
            {resource.unavailableReason ??
              "Source indisponible ou droits insuffisants — aucun extrait inventé."}
            {resource.kind === "git" && resource.href ? (
              <p className="mt-2">
                <a href={resource.href} target="_blank" rel="noreferrer">
                  Ouvrir la référence externe
                </a>
              </p>
            ) : null}
          </div>
        ) : resource.kind === "document" ? (
          resource.markdown ? (
            <SafeMarkdown content={resource.markdown} />
          ) : (
            <p className="fig-inspector-card-body">Document sans contenu lisible.</p>
          )
        ) : resource.content ? (
          <pre className="fig-travail-viewer-pre">{resource.content}</pre>
        ) : (
          <p className="fig-inspector-card-body">Aperçu Git vide.</p>
        )}
      </div>
    </div>
  );
}
