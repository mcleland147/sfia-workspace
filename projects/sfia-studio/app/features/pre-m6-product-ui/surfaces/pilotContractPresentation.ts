/**
 * PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
 * Business-first contract presentation helpers (Truth C stays in technical details).
 * ZERO REAL. Presentation only — no authority widening.
 */

export type PilotContractPresentationInput = {
  action: string;
  target: string;
  scope: string;
  requiredAuthority: string;
  reversibility: string;
  targetPath?: string | null;
  targetRepositoryRef?: string | null;
};

export type PilotContractPresentation = {
  /** Primary headline — what the Pilot is about to produce. */
  nowTitle: string;
  /** Short effect line (local write / reversible / etc.). */
  effectSummary: string;
  /** Artifact path when known, else business target paraphrase. */
  artifactLine: string;
  /** Human authority label — never leak MORRIS as Product runtime default. */
  authorityLabel: string;
  /** Whether this contract qualifies for one-CTA Exécuter orchestration. */
  simplifiedExecutePath: boolean;
  /** Reversibility in Pilot language. */
  reversibilityLabel: string;
};

function basenameFromPath(path: string): string {
  const parts = path.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? path;
}

export function isSimplifiedPilotExecutePath(
  requiredAuthority: string,
): boolean {
  return requiredAuthority === "N1" || requiredAuthority === "N2";
}

export function presentPilotContract(
  input: PilotContractPresentationInput,
): PilotContractPresentation {
  const path = input.targetPath?.trim() || null;
  const fileName = path ? basenameFromPath(path) : null;
  const isDocsWrite =
    input.action.includes("docs_write") ||
    input.target.includes("docs_write");

  const nowTitle = fileName
    ? `Créer / mettre à jour « ${fileName} »`
    : isDocsWrite
      ? "Écrire un livrable documentaire local"
      : "Exécuter le travail préparé";

  const effectParts: string[] = [];
  if (isDocsWrite) {
    effectParts.push("1 fichier");
    effectParts.push("Écriture locale");
  } else {
    effectParts.push("Effet borné");
  }
  if (input.reversibility === "reversible") {
    effectParts.push("Réversible");
  } else if (input.reversibility === "irreversible") {
    effectParts.push("Non réversible");
  }

  const authorityLabel =
    input.requiredAuthority === "N1" || input.requiredAuthority === "N2"
      ? "Pilote — écriture locale"
      : input.requiredAuthority === "MORRIS"
        ? "Morris (gate construction)"
        : input.requiredAuthority === "N3"
          ? "Autorité élevée (N3)"
          : `Autorité ${input.requiredAuthority}`;

  return {
    nowTitle,
    effectSummary: effectParts.join(" · "),
    artifactLine: path
      ? path
      : input.targetRepositoryRef
        ? `Cible projet (${input.targetRepositoryRef})`
        : "Cible dérivée du contrat scellé",
    authorityLabel,
    simplifiedExecutePath: isSimplifiedPilotExecutePath(
      input.requiredAuthority,
    ),
    reversibilityLabel:
      input.reversibility === "reversible"
        ? "Réversible"
        : input.reversibility === "irreversible"
          ? "Non réversible"
          : input.reversibility,
  };
}
