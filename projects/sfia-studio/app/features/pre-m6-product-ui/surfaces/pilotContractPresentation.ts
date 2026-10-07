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
  /** Durable contract constraints — used only to derive Pilot effect class. */
  constraints?: readonly string[];
};

export type PilotContractPresentation = {
  /** Primary headline — what the Pilot is about to produce. */
  nowTitle: string;
  /** Short effect line (local write / reversible / etc.). */
  effectSummary: string;
  /**
   * Impact body for Confirmation sections — effect only, no reversibility
   * (Réversibilité is its own block).
   */
  impactLine: string;
  /** Artifact path when known, else business target paraphrase. */
  artifactLine: string;
  /** Pilot Portée line — never a technical agent/contract id. */
  scopeLine: string;
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

/** Technical channel / capability refs must not surface as Pilot Portée. */
export function isTechnicalProductRef(value: string): boolean {
  const v = value.trim();
  if (!v) return true;
  if (/^(studio\.|product:|cursor\.|workspace\.|cap:|evreq:|xct:)/i.test(v)) {
    return true;
  }
  if (v.includes("authorized_contract")) return true;
  if (v.includes(".") && !v.includes(" ")) return true;
  return false;
}

function effectClassFromConstraints(
  constraints: readonly string[] | undefined,
): string | null {
  if (!constraints) return null;
  for (const c of constraints) {
    if (c.startsWith("EFFECT_CLASS:")) {
      return c.slice("EFFECT_CLASS:".length).trim() || null;
    }
  }
  return null;
}

function isWorkspaceBoundEffect(input: PilotContractPresentationInput): boolean {
  const effectClass = effectClassFromConstraints(input.constraints);
  if (effectClass === "generate-temporary-artifact") return true;
  const target = `${input.target} ${input.scope}`.toLowerCase();
  return (
    target.includes("workspace") ||
    target.includes("project-workspace") ||
    target.includes("generalist")
  );
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
  const effectClass = effectClassFromConstraints(input.constraints);
  const workspaceBound = isWorkspaceBoundEffect(input);

  const nowTitle = fileName
    ? `Créer / mettre à jour « ${fileName} »`
    : isDocsWrite
      ? "Écrire un livrable documentaire local"
      : workspaceBound
        ? "Mettre à jour l'espace projet"
        : "Exécuter le travail préparé";

  const impactLine = isDocsWrite
    ? "1 fichier · Écriture locale"
    : effectClass === "generate-temporary-artifact"
      ? "Artefact temporaire local"
      : workspaceBound
        ? "Mise à jour de l'espace projet"
        : "Effet borné";

  const effectParts: string[] = [impactLine];
  if (input.reversibility === "reversible") {
    effectParts.push("Réversible");
  } else if (input.reversibility === "irreversible") {
    effectParts.push("Non réversible");
  }

  const rawScope = input.scope?.trim() || "";
  const scopeLine = !isTechnicalProductRef(rawScope)
    ? rawScope
    : workspaceBound
      ? "Interface du projet"
      : path
        ? path
        : input.targetRepositoryRef
          ? `Cible projet (${input.targetRepositoryRef})`
          : "Espace projet";

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
    impactLine,
    artifactLine: path
      ? path
      : input.targetRepositoryRef
        ? `Cible projet (${input.targetRepositoryRef})`
        : scopeLine,
    scopeLine,
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
