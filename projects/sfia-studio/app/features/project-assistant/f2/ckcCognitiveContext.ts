/**
 * W1 bounded CKC→Nora semantic seam.
 * Loads resolved product-package CKC through the DoctrinePackage repository seam
 * and derives attributable Recommendations via the existing conversation provider.
 * No live OpenAI · no execution authority · no Morris decision.
 */

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
};

export type ProductCkcCognitiveContent = {
  readonly ckcId: string;
  readonly cycleTypeId: string;
  readonly markdown: string;
  readonly provenance: CkcCognitiveProvenance;
};

const DISTINCTIVE_PHRASES = [
  "anti scope creep",
  "scope creep",
] as const;

function extractDistinctiveGuidance(markdown: string): string | null {
  const lower = markdown.toLowerCase();
  for (const phrase of DISTINCTIVE_PHRASES) {
    if (lower.includes(phrase)) {
      return phrase === "anti scope creep"
        ? "Contrainte CKC : anti scope creep — borner le slice avant toute extension."
        : "Contrainte CKC : surveiller le scope creep — pas d'élargissement non autorisé.";
    }
  }
  return null;
}

export function buildCkcCognitivePromptSection(
  content: ProductCkcCognitiveContent,
  provenance: CkcCognitiveProvenance = content.provenance,
): string {
  const guidance = extractDistinctiveGuidance(content.markdown);
  const lines = [
    `CKC ${provenance.ckcId} (${provenance.cycleTypeId})`,
    `Package ${provenance.doctrinePackageId}@${provenance.packageVersion}`,
    guidance ?? "Guidance delivery : implémentation bornée, pas de redesign.",
  ];
  return lines.join(" · ");
}

export function deriveCkcAttributedRecommendation(input: {
  baseRationale: string;
  content: ProductCkcCognitiveContent | null;
}): string {
  if (!input.content) {
    return input.baseRationale;
  }
  const guidance =
    extractDistinctiveGuidance(input.content.markdown) ??
    "Guidance CKC product package applicable.";
  const marker = `${CKC_ATTRIBUTION_MARKER_PREFIX}${input.content.ckcId.replace(/^ckc:studio:/, "")}]`;
  return `${input.baseRationale} ${marker} ${guidance}`;
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
};

export function isProductStudioNativeCkcProof(
  proof: CkcQualificationProof,
): proof is CkcQualificationProof & {
  doctrineStatus: "product-studio-native";
  packageProvenance: CkcCognitiveProvenance;
} {
  return (
    proof.doctrineStatus === "product-studio-native" &&
    Boolean(proof.packageProvenance?.ckcId)
  );
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
