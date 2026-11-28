"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";
import { PdfViewer } from "@/components/documents/PdfViewer";

export type TravailViewerResource =
  | {
      kind: "document";
      documentId: string;
      title: string;
      revisionId?: string | null;
      revisionNumber?: number | null;
      /** Explicit when no revisionId was requested — never silent latest substitution. */
      versionSource?: "exact" | "current";
      /** Set only while the body is the unsealed candidate. Not a durable revision id. */
      proposalCandidateId?: string | null;
      /** Head known when this view was produced (save or current resolution). */
      knownHeadRevisionId?: string | null;
      /** Documentary base of a proposal — display only. */
      baseRevisionNumber?: number | null;
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
      /** When "pdf", content is base64 of authorized bytes. */
      contentKind?: "text" | "markdown" | "pdf" | "binary" | null;
      /** 1-based page when opening from a Nora citation. */
      initialPage?: number | null;
      available: boolean;
      unavailableReason?: string;
      href?: string | null;
    }
  | {
      /** UAT-18 — public web page must not render as SOURCE GIT. */
      kind: "web";
      title: string;
      href?: string | null;
      content: string | null;
      /** When "pdf", content is base64 of authorized bytes. */
      contentKind?: "text" | "html" | "pdf" | null;
      initialPage?: number | null;
      available: boolean;
      unavailableReason?: string;
      consulted?: boolean;
    };

export function TravailViewer(props: {
  resource: TravailViewerResource;
  enlarged: boolean;
  /** Informational only — does not authorize a write. */
  documentFocusBanner?: "historical" | "proposal" | "other-version" | null;
  /** D4 currency. Exact resolution alone never implies Historique. */
  documentCurrency?: "Courante" | "Historique" | "Non vérifiée" | "Proposition" | null;
  onRestoreProposal?: () => void;
  onEnlarge: () => void;
  onReduce: () => void;
  onClose: () => void;
  onOpenInDocuments?: () => void;
}) {
  const { resource } = props;
  const title =
    resource.kind === "document"
      ? resource.title
      : resource.kind === "web"
        ? resource.title || "Source web"
        : resource.title || "Source Git";
  const isPdf =
    (resource.kind === "git" || resource.kind === "web") &&
    resource.contentKind === "pdf";
  const kicker =
    resource.kind === "document"
      ? "VISIONNEUSE  /  LECTURE SEULE"
      : resource.kind === "web"
        ? isPdf
          ? "VISIONNEUSE  /  SOURCE WEB PDF"
          : "VISIONNEUSE  /  SOURCE WEB"
        : isPdf
          ? "VISIONNEUSE  /  SOURCE GIT PDF"
          : "VISIONNEUSE  /  SOURCE GIT";
  const currencyBadge =
    resource.kind === "document"
      ? props.documentCurrency === "Proposition" || props.documentFocusBanner === "proposal"
        ? "PROPOSITION"
        : props.documentCurrency === "Historique"
          ? "HISTORIQUE"
          : props.documentCurrency === "Non vérifiée"
            ? "NON VÉRIFIÉE"
            : props.documentCurrency === "Courante"
              ? "COURANTE"
              : resource.versionSource === "current"
                ? "COURANTE"
                : "NON VÉRIFIÉE"
      : resource.kind === "web"
        ? resource.consulted
          ? "CONSULTÉE"
          : "DÉCOUVERTE"
        : null;
  const versionLine =
    resource.kind === "document" &&
    (props.documentFocusBanner === "proposal" || props.documentCurrency === "Proposition")
      ? [
          "Proposition non enregistrée",
          resource.baseRevisionNumber != null ? `base v${resource.baseRevisionNumber}` : null,
        ]
          .filter(Boolean)
          .join(" · ")
      : resource.kind === "document" && resource.revisionNumber != null
        ? [
            `Version ${resource.revisionNumber}`,
            resource.versionSource === "exact" ? "révision citée" : null,
            props.documentCurrency === "Historique"
              ? "version historique"
              : props.documentCurrency === "Non vérifiée"
                ? "actualité non vérifiée"
                : "version courante",
          ]
            .filter(Boolean)
            .join(" · ")
        : null;

  return (
    <div
      className="fig-travail-viewer"
      data-testid="travail-viewer"
      data-viewer-kind={resource.kind}
      data-viewer-pdf={isPdf ? "1" : "0"}
      data-viewer-enlarged={props.enlarged ? "1" : "0"}
      data-focus-banner={props.documentFocusBanner ?? ""}
      data-proposal-candidate-id={
        resource.kind === "document" ? resource.proposalCandidateId ?? "" : ""
      }
      data-revision-id={resource.kind === "document" ? resource.revisionId ?? "" : ""}
    >
      <header className="fig-travail-viewer-head">
        <div>
          <p className="fig-kicker !mb-0">{kicker}</p>
          <h2 className="fig-inspector-title" data-testid="travail-viewer-title">
            {title}
          </h2>
          {currencyBadge ? (
            <span
              className={
                currencyBadge === "COURANTE"
                  ? "doc-badge doc-badge-current"
                  : currencyBadge === "PROPOSITION"
                    ? "doc-badge doc-badge-proposal"
                    : currencyBadge === "HISTORIQUE"
                      ? "doc-badge doc-badge-historical"
                      : "doc-badge"
              }
              data-testid="travail-viewer-currency"
            >
              {currencyBadge}
            </span>
          ) : null}
          {versionLine ? (
            <p className="fig-travail-viewer-meta" data-testid="travail-viewer-revision">
              {versionLine}
            </p>
          ) : null}
          {resource.kind === "git" ? (
            <p className="fig-travail-viewer-meta">
              {[resource.path, resource.ref, resource.commit?.slice(0, 8)]
                .filter(Boolean)
                .join(" · ") || "Provenance partielle"}
            </p>
          ) : null}
          {resource.kind === "web" && resource.href ? (
            <p className="fig-travail-viewer-meta" data-testid="travail-viewer-web-href">
              <a href={resource.href} target="_blank" rel="noreferrer noopener">
                {resource.href}
              </a>
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
        {props.documentFocusBanner === "historical" ? (
          <div className="fig-alert" data-testid="document-focus-banner" role="status">
            VERSION PLUS RÉCENTE DISPONIBLE · Aucun changement enregistré
          </div>
        ) : props.documentFocusBanner === "proposal" ? (
          <div className="fig-alert" data-testid="document-focus-banner" role="status">
            PROPOSITION NON ENREGISTRÉE · Pas de publication Git automatique
          </div>
        ) : props.documentFocusBanner === "other-version" ? (
          <div className="fig-alert" data-testid="document-focus-banner" role="status">
            AUTRE VERSION CONSULTÉE · La proposition non enregistrée reste disponible
            {props.onRestoreProposal ? (
              <button
                type="button"
                className="btn secondary"
                data-testid="document-restore-proposal"
                onClick={props.onRestoreProposal}
              >
                Revenir à la proposition
              </button>
            ) : null}
          </div>
        ) : null}
        {!resource.available ? (
          <div className="fig-alert" role="alert" data-testid="travail-viewer-unavailable">
            {resource.unavailableReason ??
              "Source indisponible ou droits insuffisants — aucun extrait inventé."}
            {(resource.kind === "git" || resource.kind === "web") && resource.href ? (
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
        ) : isPdf && resource.content ? (
          <PdfViewer
            base64={resource.content}
            title={title}
            initialPage={resource.initialPage ?? undefined}
          />
        ) : resource.kind === "web" ? (
          resource.content ? (
            <SafeMarkdown content={resource.content} />
          ) : (
            <p className="fig-inspector-card-body">
              {resource.consulted
                ? "Page ouverte — extrait non disponible."
                : "Source découverte — page non encore ouverte."}
            </p>
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
