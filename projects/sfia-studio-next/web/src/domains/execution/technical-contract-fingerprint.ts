import { createHash } from "crypto";
import type { TechnicalContractBody } from "./types";

function canonical(payload: unknown): string {
  return JSON.stringify(payload);
}

export function instructionFingerprint(instructionText: string): string {
  return createHash("sha256").update(instructionText, "utf8").digest("hex");
}

/** Fingerprint of the exact inspectable/authorized/transmitted contract bytes. */
export function technicalContractFingerprint(body: TechnicalContractBody): string {
  return createHash("sha256")
    .update(
      canonical({
        title: body.title,
        engagements: body.engagements,
        volets: body.volets,
        instructionText: body.instructionText,
        instructionFp: instructionFingerprint(body.instructionText),
        risks: body.risks,
        exclusions: body.exclusions,
        acceptance: body.acceptance,
        executor: body.executor,
        stopConditions: body.stopConditions,
        reversibilityLimits: body.reversibilityLimits,
        gitScope: body.gitScope ?? null,
      }),
    )
    .digest("hex");
}

export function isMaterialContractChange(
  authorizedFingerprint: string,
  currentFingerprint: string,
): boolean {
  return authorizedFingerprint !== currentFingerprint;
}
