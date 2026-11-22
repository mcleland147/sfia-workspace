"use client";

import type { GitFileOpenUrl } from "@/domains/integrations/git-preview";
import type { GitPreviewUnavailable as UnavailableState } from "@/domains/integrations/git-preview";

type Props = {
  preview: UnavailableState;
  openUrl: GitFileOpenUrl;
  testId?: string;
};

/**
 * Figma 11.17 — état générique « Aperçu indisponible ».
 * Motifs et formatLabel sont dynamiques ; aucune liste fermée de suffixes.
 */
export function GitPreviewUnavailable({
  preview,
  openUrl,
  testId = "git-preview-unavailable",
}: Props) {
  const href = openUrl.href;
  return (
    <div className="git-preview-unavailable" data-testid={testId} role="status">
      <div className="git-preview-unavailable-icon" aria-hidden="true">
        <img
          src="/icons/git-preview-unavailable.svg"
          alt=""
          width={36}
          height={36}
        />
      </div>
      <p className="git-preview-unavailable-motif">{preview.motifLabel}</p>
      <h3 className="git-preview-unavailable-title">{preview.title}</h3>
      <p className="git-preview-unavailable-message">{preview.message}</p>
      <p className="git-preview-unavailable-hint">{preview.hint}</p>
      {href ? (
        <a
          className="git-btn-secondary git-preview-unavailable-cta"
          href={href}
          target="_blank"
          rel="noreferrer"
          data-testid="git-preview-unavailable-github"
        >
          Ouvrir sur GitHub
        </a>
      ) : (
        <span
          className="git-btn-secondary is-disabled git-preview-unavailable-cta"
          data-testid="git-preview-unavailable-github-disabled"
        >
          Ouvrir sur GitHub
        </span>
      )}
      <p className="git-preview-unavailable-note">
        {href
          ? openUrl.evolvingRef
            ? "Ouverture dans un nouvel onglet · Référence susceptible d’évoluer · Aucun téléchargement dans Studio"
            : "Ouverture dans un nouvel onglet · Aucun téléchargement dans Studio"
          : "Lien GitHub indisponible pour cette sélection — aucune destination inventée."}
      </p>
    </div>
  );
}
