/**
 * W1/W2 CKC→Nora cognitive seam.
 * Loads resolved product-package CKC through the DoctrinePackage repository seam
 * and derives attributable Recommendations via the existing conversation provider.
 * No live OpenAI · no execution authority · no Morris decision.
 *
 * Phase B: generic Markdown extraction (no cycleType production branching).
 * Gate aligns with flat OA CkcConsumptionProof product-native fields.
 */

import { createHash } from "node:crypto";
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
} from "@/lib/platform/ai";
import type { CkcQualificationSuccessResult } from "@/lib/oa/cycle";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import { FilesystemDoctrinePackageRepository } from "@/lib/oa/doctrine/infrastructure/filesystemDoctrinePackageRepository";
import {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  PRODUCT_DOCTRINE_PACKAGE_ID,
} from "@/lib/oa/doctrine/product/constants";
import {
  findProductCkcIndexEntry,
  loadProductCkcArtifactContentSync,
  loadProductCkcIndexSync,
} from "@/lib/oa/doctrine/product/productCkcIndex";
import type { QualificationDto } from "./types";

export {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  PRODUCT_DOCTRINE_PACKAGE_ID,
};

/**
 * Historical marker — MUST NOT appear in Pilote-facing Recommendation rationale
 * (R1-03 business-first). Retained for negative assertions only.
 */
export const CKC_ATTRIBUTION_MARKER_PREFIX =
  "[CKC ATTRIBUTABLE · ckc:studio:" as const;

export const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
  "SFIA Studio CKC COGNITIVE REASONING" as const;

export type CkcCognitiveProvenance = {
  readonly ckcId: string;
  readonly cycleTypeId: string;
  readonly doctrinePackageId: string;
  readonly packageVersion: string;
  readonly contentDigest: string;
  readonly doctrineStatus: "product-studio-native";
  /** Optional package pin digest when available from LPS/proof. */
  readonly packageDigest?: string;
};

export type ProductCkcCognitiveContent = {
  readonly ckcId: string;
  readonly cycleTypeId: string;
  readonly markdown: string;
  readonly provenance: CkcCognitiveProvenance;
};

export type ExtractedCkcGuidance = {
  readonly finality: string | null;
  readonly posture: string | null;
  readonly signals: string | null;
  readonly antiClaims: string | null;
  /** Bounded condensed lines for prompt/rationale — derived generically. */
  readonly condensed: readonly string[];
};

/**
 * Generic CKC Markdown section extraction.
 * No cycleTypeId branching — content comes from the product package.
 */
export function extractCkcGuidanceFromMarkdown(
  markdown: string,
): ExtractedCkcGuidance {
  const finality = extractSection(markdown, [
    /^##\s*Finalité\s*$/im,
    /^##\s*Finalite\s*$/im,
  ]);
  const posture = extractSection(markdown, [
    /^##\s*Nora posture(?:\s*&?\s*guidance)?\s*$/im,
    /^##\s*Nora posture\s*$/im,
  ]);
  const signals = extractSection(markdown, [
    /^##\s*Signals?\s*$/im,
    /^##\s*Signaux\s*$/im,
    /^###\s*Guidance(?:\s*\(condensé\))?\s*$/im,
    /^###\s*Guidance strategy/im,
  ]);
  const antiClaims = extractSection(markdown, [
    /^##\s*Anti-claims?\s*$/im,
    /^##\s*Anti-claim\s*$/im,
    /^##\s*Contradictions?\s*$/im,
  ]);

  const condensed: string[] = [];
  pushCondensed(condensed, finality, 180);
  pushCondensed(condensed, posture, 220);
  pushCondensed(condensed, signals, 220);
  pushCondensed(condensed, antiClaims, 160);

  if (condensed.length === 0) {
    const firstMeaningful = markdown
      .split(/\n+/)
      .map((l) => l.trim())
      .find((l) => l.length > 20 && !l.startsWith("#") && !l.startsWith("|") && !l.startsWith(">"));
    if (firstMeaningful) condensed.push(clip(firstMeaningful, 180));
  }

  return Object.freeze({
    finality,
    posture,
    signals,
    antiClaims,
    condensed: Object.freeze([...condensed]),
  });
}

function extractSection(
  markdown: string,
  headers: readonly RegExp[],
): string | null {
  for (const header of headers) {
    const match = header.exec(markdown);
    if (!match || match.index === undefined) continue;
    const start = match.index + match[0].length;
    const rest = markdown.slice(start);
    const nextHeader = rest.search(/\n##\s+/);
    const body = (nextHeader >= 0 ? rest.slice(0, nextHeader) : rest).trim();
    if (body.length > 0) return body;
  }
  return null;
}

function pushCondensed(
  out: string[],
  section: string | null,
  max: number,
): void {
  if (!section) return;
  const line = section
    .split(/\n+/)
    .map((l) => l.replace(/^[-*|>]+\s*/, "").trim())
    .filter((l) => l.length > 0 && !l.startsWith("| ---") && !l.startsWith("|---"))
    .slice(0, 3)
    .join(" · ");
  if (line) out.push(clip(line, max));
}

function clip(text: string, max: number): string {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length <= max ? compact : `${compact.slice(0, max - 1)}…`;
}

export function buildCkcCognitivePromptSection(
  content: ProductCkcCognitiveContent,
  provenance: CkcCognitiveProvenance = content.provenance,
): string {
  const guidance = extractCkcGuidanceFromMarkdown(content.markdown);
  const lines = [
    `CKC ${provenance.ckcId} (${provenance.cycleTypeId})`,
    `Package ${provenance.doctrinePackageId}@${provenance.packageVersion}`,
    `contentDigest ${provenance.contentDigest}`,
    ...guidance.condensed.map((c) => `Guidance: ${c}`),
  ];
  if (guidance.condensed.length === 0) {
    lines.push("Guidance CKC product package applicable.");
  }
  return lines.join(" · ");
}

/**
 * Business-first Recommendation rationale (R1-03).
 * Cognitive guidance may inform the text; CKC IDs / package digests / fingerprints
 * must not appear as Pilote-facing prose. Structured provenance is separate.
 */
export function deriveCkcAttributedRecommendation(input: {
  baseRationale: string;
  content: ProductCkcCognitiveContent | null;
  cognitiveRecommendation?: string | null;
}): string {
  if (!input.content) {
    return input.baseRationale;
  }
  const guidance = extractCkcGuidanceFromMarkdown(input.content.markdown);
  const guidanceText =
    guidance.condensed[0] ??
    "Appliquer la guidance cycle applicable avant toute extension.";
  const cognitive = scrubTechnicalCkcMechanics(
    input.cognitiveRecommendation?.trim() ?? "",
  );
  if (cognitive) {
    return `${input.baseRationale} ${cognitive} · ${guidanceText}`;
  }
  return `${input.baseRationale} ${guidanceText}`;
}

/** Strip technical CKC mechanics that must not leak into Pilote-facing prose. */
function scrubTechnicalCkcMechanics(text: string): string {
  if (!text) return text;
  return text
    .replace(/\[CKC[^\]]*\]/gi, "")
    .replace(/\bckc:studio:[a-z0-9_-]+\b/gi, "")
    .replace(/\bdigest\s*=\s*sha256:[a-f0-9]+\b/gi, "")
    .replace(/\bfp\s*=\s*sha256:[a-f0-9]+\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Stable semantic fingerprint for W2 binding (PB-DLV-01).
 * Excludes raw provider prose — material CKC identity/content only.
 */
export function computeCkcSemanticFingerprint(
  provenance: CkcCognitiveProvenance,
): string {
  const payload = [
    provenance.cycleTypeId,
    provenance.ckcId,
    provenance.doctrinePackageId,
    provenance.packageVersion,
    provenance.contentDigest,
    provenance.packageDigest ?? "",
  ].join("|");
  return `sha256:${createHash("sha256").update(payload, "utf8").digest("hex")}`;
}

export function loadProductCkcCognitiveContent(input: {
  registryRoot: string;
  cycleTypeId: string;
  packagePin: DoctrinePackagePin;
}): ProductCkcCognitiveContent | null {
  const repository = new FilesystemDoctrinePackageRepository({
    registryRoot: input.registryRoot,
  });
  const indexResult = loadProductCkcIndexSync({
    registryRoot: input.registryRoot,
    doctrinePackageId: input.packagePin.doctrinePackageId,
    packageVersion: input.packagePin.version,
    packageDigest: input.packagePin.digest,
  });
  if (!indexResult.ok) return null;

  const indexEntry = findProductCkcIndexEntry(
    indexResult.index,
    input.cycleTypeId,
  );
  if (!indexEntry) return null;

  const entry = repository.findEntrySync(
    input.packagePin.doctrinePackageId,
    input.packagePin.version,
  );
  if (!entry) return null;

  const artifact = loadProductCkcArtifactContentSync(
    repository,
    entry,
    indexEntry.artifactFile,
  );
  if (!artifact.ok) return null;

  const provenance: CkcCognitiveProvenance = Object.freeze({
    ckcId: indexEntry.ckcId,
    cycleTypeId: indexEntry.cycleTypeId,
    doctrinePackageId: input.packagePin.doctrinePackageId,
    packageVersion: indexResult.packageVersion,
    contentDigest: indexEntry.sourceDigest,
    doctrineStatus: "product-studio-native",
    packageDigest: input.packagePin.digest,
  });

  return Object.freeze({
    ckcId: indexEntry.ckcId,
    cycleTypeId: indexEntry.cycleTypeId,
    markdown: artifact.content,
    provenance,
  });
}

/**
 * Bounded post-qualification Nora/provider reasoning using resolved CKC context.
 * Initial cycle qualification MUST remain prior to this call.
 */
export async function reasonWithResolvedCkcContext(input: {
  userContent: string;
  projectSummary: string;
  intentSummary: string;
  ckcPromptSection: string | null;
}): Promise<{
  recommendation: string;
  presentation: "test_provider" | "openai_live";
  model: string | null;
  rawText: string;
}> {
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  const systemContent = input.ckcPromptSection?.trim()
    ? `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nContexte CKC résolu (guidance seulement — pas d'autorité, pas de décision humaine):\n${input.ckcPromptSection.trim()}`
    : `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nAucun contexte CKC package résolu — recommandation générique uniquement.`;

  const completion = await provider.complete([
    { role: "system", content: systemContent },
    {
      role: "user",
      content: `Contexte projet:\n${input.projectSummary}\n\nIntention qualifiée:\n${input.intentSummary}\n\nDemande:\n${input.userContent}`,
    },
  ]);

  return {
    recommendation: completion.text,
    presentation,
    model: completion.usage?.model ?? null,
    rawText: completion.text,
  };
}

export type CkcQualificationProof = CkcQualificationSuccessResult["proof"] & {
  doctrineStatus?: string;
  packageProvenance?: CkcCognitiveProvenance;
  ckcId?: string;
  doctrinePackageId?: string;
  packageVersion?: string;
  sourceDigest?: string;
  packageDigest?: string;
};

/**
 * Defensive consumer gate aligned with canonical OA flat product-native proof
 * (R1-02). Nested packageProvenance alone is NEVER sufficient.
 * Does not mutate / compete with CkcConsumptionProof domain.
 */
export function isProductStudioNativeCkcProof(
  proof: CkcQualificationProof,
): boolean {
  if (proof.doctrineStatus !== "product-studio-native") return false;
  if (proof.detailedStatus !== "resolved_detailed") return false;
  if (proof.level !== "detailed") return false;
  if (proof.status !== "resolved") return false;
  if (proof.source !== "product_package") return false;
  if (proof.fallbackUsed !== false) return false;
  if (proof.executionAuthority !== false) return false;
  if (proof.consumed !== true) return false;

  const ckcId = nonEmpty(proof.ckcId);
  const doctrinePackageId = nonEmpty(proof.doctrinePackageId);
  const packageVersion = nonEmpty(proof.packageVersion);
  const packageDigest = nonEmpty(proof.packageDigest);
  const indexDigest = nonEmpty(proof.indexDigest);
  const ckcContractVersion = nonEmpty(proof.ckcContractVersion);
  const sourceDigest = nonEmpty(proof.sourceDigest);
  if (
    !ckcId ||
    !doctrinePackageId ||
    !packageVersion ||
    !packageDigest ||
    !indexDigest ||
    !ckcContractVersion ||
    !sourceDigest
  ) {
    return false;
  }
  if (proof.usedReference !== ckcId) return false;
  return true;
}

function nonEmpty(value: string | undefined | null): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function enrichQualificationWithCkcSemantics(input: {
  qualification: QualificationDto;
  proof: CkcQualificationProof;
  registryRoot: string;
  packagePin: DoctrinePackagePin;
  ckcCognitiveRecommendation?: string | null;
}): QualificationDto {
  if (!isProductStudioNativeCkcProof(input.proof)) {
    return input.qualification;
  }

  const content = loadProductCkcCognitiveContent({
    registryRoot: input.registryRoot,
    cycleTypeId: input.qualification.cycleTypeId,
    packagePin: input.packagePin,
  });

  if (!content) {
    return input.qualification;
  }

  const rationale = deriveCkcAttributedRecommendation({
    baseRationale: input.qualification.rationale,
    content,
    cognitiveRecommendation: input.ckcCognitiveRecommendation,
  });

  return {
    ...input.qualification,
    rationale,
    isMorrisDecision: false,
    executionAuthority: false,
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    ckcSemanticProvenance: content.provenance,
    ckcCognitiveRecommendation: input.ckcCognitiveRecommendation ?? undefined,
    disclosures: [
      ...input.qualification.disclosures,
      `CKC_SEMANTIC:${content.provenance.ckcId}@${content.provenance.doctrinePackageId}@${content.provenance.packageVersion}`,
    ],
  };
}
