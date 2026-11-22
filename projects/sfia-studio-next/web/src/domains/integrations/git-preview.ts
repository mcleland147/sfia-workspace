/**
 * Git file preview capability — driven by effective renderability, not a closed
 * suffix allow/deny list. Extension labels are display-only.
 */

export type GitPreviewUnavailableReason =
  | "BINARY_CONTENT"
  | "FILE_TOO_LARGE"
  | "UNSUPPORTED_ENCODING";

export type GitPreviewAvailable = {
  available: true;
  renderer: "markdown" | "text";
};

export type GitPreviewUnavailable = {
  available: false;
  reason: GitPreviewUnavailableReason;
  title: "Aperçu indisponible";
  message: string;
  hint: string;
  /** Dynamic label for kicker / eyebrow (never hard-coded to PDF). */
  formatLabel: string;
  motifLabel: string;
};

export type GitPreviewState = GitPreviewAvailable | GitPreviewUnavailable;

export type GitFileOpenUrlKind = "permalink" | "ref_browse" | "none";

export type GitFileOpenUrl = {
  href: string | null;
  kind: GitFileOpenUrlKind;
  /** True when href follows a mobile/branch ref that may move. */
  evolvingRef: boolean;
};

const DEFAULT_MESSAGE =
  "Ce format de fichier ne peut pas être affiché directement dans SFIA Studio.";
const DEFAULT_HINT =
  "Consulte le document sur GitHub pour le visualiser ou le télécharger.";

/** Display-only extension token (uppercase); empty when none. */
export function extensionLabelFromPath(path: string): string {
  const base = path.replace(/^.*\//, "");
  const dot = base.lastIndexOf(".");
  if (dot <= 0 || dot === base.length - 1) return "";
  const ext = base.slice(dot + 1).trim();
  if (!ext || ext.length > 12 || !/^[A-Za-z0-9]+$/.test(ext)) return "";
  return ext.toUpperCase();
}

export function buildPreviewUnavailable(
  path: string,
  reason: GitPreviewUnavailableReason,
): GitPreviewUnavailable {
  const ext = extensionLabelFromPath(path);
  let motifLabel: string;
  let message = DEFAULT_MESSAGE;
  switch (reason) {
    case "BINARY_CONTENT":
      motifLabel = ext ? `${ext} · FICHIER BINAIRE` : "FICHIER BINAIRE";
      break;
    case "FILE_TOO_LARGE":
      motifLabel = ext ? `${ext} · FICHIER TROP VOLUMINEUX` : "FICHIER TROP VOLUMINEUX";
      message =
        "Ce fichier dépasse la limite d’aperçu de SFIA Studio et ne peut pas être affiché ici.";
      break;
    case "UNSUPPORTED_ENCODING":
      motifLabel = ext ? `${ext} · ENCODAGE NON PRIS EN CHARGE` : "ENCODAGE NON PRIS EN CHARGE";
      message =
        "L’encodage de ce fichier ne peut pas être interprété de façon sûre dans SFIA Studio.";
      break;
    default: {
      const _exhaustive: never = reason;
      void _exhaustive;
      motifLabel = ext || "FORMAT NON PRIS EN CHARGE";
    }
  }
  const formatLabel = ext ? `FICHIER ${ext}` : "FICHIER";
  return {
    available: false,
    reason,
    title: "Aperçu indisponible",
    message,
    hint: DEFAULT_HINT,
    formatLabel,
    motifLabel,
  };
}

export function buildPreviewAvailable(
  contentKind: "markdown" | "text",
): GitPreviewAvailable {
  return {
    available: true,
    renderer: contentKind === "markdown" ? "markdown" : "text",
  };
}

/**
 * Prefer verified commit permalink; otherwise an honest browse URL at the
 * requested ref (may evolve). Never embeds blobSha as the revision segment.
 */
export function resolveGitFileOpenUrl(input: {
  fullName: string | undefined | null;
  path: string;
  requestedRef: string;
  permalink: string | null;
  blobSha: string;
}): GitFileOpenUrl {
  if (input.permalink) {
    return { href: input.permalink, kind: "permalink", evolvingRef: false };
  }
  const fullName = (input.fullName ?? "").trim();
  const ref = input.requestedRef.trim();
  const path = input.path.replace(/^\/+/, "");
  if (!fullName || !ref || !path) {
    return { href: null, kind: "none", evolvingRef: false };
  }
  if (input.blobSha && ref.toLowerCase() === input.blobSha.toLowerCase()) {
    return { href: null, kind: "none", evolvingRef: false };
  }
  const cleanPath = path
    .split("/")
    .filter((seg) => seg.length > 0)
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  const href = `https://github.com/${fullName}/blob/${encodeURIComponent(ref)}/${cleanPath}`;
  // Guard: blob must never appear as the revision segment.
  if (
    input.blobSha &&
    (href.includes(`/blob/${input.blobSha.toLowerCase()}/`) ||
      href.includes(`/blob/${input.blobSha}/`))
  ) {
    return { href: null, kind: "none", evolvingRef: false };
  }
  const evolvingRef = !/^[0-9a-f]{40}$/i.test(ref);
  return { href, kind: "ref_browse", evolvingRef };
}
