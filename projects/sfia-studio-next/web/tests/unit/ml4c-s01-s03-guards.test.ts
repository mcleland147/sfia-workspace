import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  appendDocumentEffectAck,
  documentSaveToEffectSummary,
  hasCompetingTransactionalClaim,
  mapOwnerDocumentStatusToEffect,
} from "@/domains/conversation/document-act";
import { emptyMission } from "@/domains/conversation/intent-conduction";
import { appendMissionAck } from "@/domains/conversation/mission-continuity";
import {
  looksLikeIndependentDialogue,
  mayStartNewThreadAct,
  shouldClearThreadPending,
} from "@/domains/pilotage/thread-recovery";

describe("ML4C S01 portfolio — no index-derived status", () => {
  it("portfolio page does not invent Actif/En réflexion/À reprendre by list index", () => {
    const src = readFileSync(
      join(__dirname, "../../src/app/portfolio/page.tsx"),
      "utf8",
    );
    expect(src).not.toMatch(/statusForProject\s*\(\s*index/);
    expect(src).toMatch(/statusForOwnedProject/);
    expect(src).toMatch(/Accessible/);
    expect(src).not.toMatch(/if \(index === 0\) return \{ label: "Actif"/);
  });
});

describe("ML4C S02 create UI — reconcile after ACK loss", () => {
  it("preparations page reconciles create-project with same idempotency key", () => {
    const src = readFileSync(
      join(__dirname, "../../src/app/preparations/[preparationId]/page.tsx"),
      "utf8",
    );
    expect(src).toMatch(/reconcileCreateAfterAckLoss/);
    expect(src).toMatch(/\/reconcile\?idempotencyKey=/);
    expect(src).toMatch(/ALREADY_CREATED \(réconcilié après ACK perdu\)/);
  });
});

describe("ML4C S03 continueAfter composition — document ACK", () => {
  it("AVAILABLE effect with Nora « non enregistré » yields no competing claim after ACK path", () => {
    const noraLie =
      "Je ne peux pas enregistrer le document : les outils disponibles sont en lecture seule. Aucune révision créée.";
    const effect = {
      act: "CREATE" as const,
      status: "AVAILABLE" as const,
      documentId: "doc_1",
      revisionId: "rev_1",
      revisionNumber: 1,
    };
    const composed = appendMissionAck(appendDocumentEffectAck(noraLie, effect), {
      ...emptyMission("ctk_1", "continue after create"),
      status: "COMPLETED",
      restitution: "DELIVERED",
    });
    expect(composed).toMatch(/Résultat applicatif D4/i);
    expect(composed).toMatch(/AVAILABLE/);
    expect(hasCompetingTransactionalClaim(composed, effect)).toBe(false);
  });

  it("maps owner D4 statuses faithfully — never collapses UNKNOWN to FAILED", () => {
    expect(mapOwnerDocumentStatusToEffect("AVAILABLE")).toBe("AVAILABLE");
    expect(mapOwnerDocumentStatusToEffect("FAILED")).toBe("FAILED");
    expect(mapOwnerDocumentStatusToEffect("CONFLICT")).toBe("CONFLICT");
    expect(mapOwnerDocumentStatusToEffect("UNKNOWN")).toBe("UNKNOWN");
    expect(mapOwnerDocumentStatusToEffect("NOT_EXECUTED")).toBe("NOT_EXECUTED");
    expect(mapOwnerDocumentStatusToEffect(undefined)).toBe("UNKNOWN");
    expect(mapOwnerDocumentStatusToEffect("")).toBe("UNKNOWN");
    expect(mapOwnerDocumentStatusToEffect("weird")).toBe("UNKNOWN");

    expect(documentSaveToEffectSummary({ status: "UNKNOWN", reason: "CREATION_IN_FLIGHT" }).status).toBe(
      "UNKNOWN",
    );
    expect(documentSaveToEffectSummary({ status: "CONFLICT", reason: "REV_CONFLICT" }).status).toBe(
      "CONFLICT",
    );
    expect(documentSaveToEffectSummary({}).status).toBe("NOT_EXECUTED");
  });

  it("continueAfterProjectCreated uses documentSaveToEffectSummary (no CONFLICT→FAILED collapse)", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/conversation/intent-conduction.ts"),
      "utf8",
    );
    expect(src).toMatch(/documentSaveToEffectSummary\(/);
    expect(src).not.toMatch(
      /status:\s*documentSave\?\.status\s*===\s*"CONFLICT"\s*\?\s*"CONFLICT"\s*:\s*"FAILED"/,
    );
  });
});

describe("ML4C S05 Decision 1 — independent dialogue vs pending métier", () => {
  const pending = {
    content: "Publie le document sur la branche feature/x",
    clientTurnKey: "ctk_pending",
    clientCommandKey: "conv-auth:ctk_pending",
  };

  it("allows a cognitive question without overwriting the gate", () => {
    expect(looksLikeIndependentDialogue("Quelle est la différence entre blob et commit ?")).toBe(
      true,
    );
    const gate = mayStartNewThreadAct({
      unresolved: pending,
      nextContent: "Quelle est la différence entre blob et commit ?",
      nextIsIndependentDialogue: true,
    });
    expect(gate.ok).toBe(true);
  });

  it("still blocks a distinct métier act while pending is unresolved", () => {
    expect(looksLikeIndependentDialogue("Crée un projet nommé Autre")).toBe(false);
    const gate = mayStartNewThreadAct({
      unresolved: pending,
      nextContent: "Crée un projet nommé Autre",
      nextIsIndependentDialogue: false,
    });
    expect(gate.ok).toBe(false);
  });

  it("interrogative effect requests are not independent (no client bypass)", () => {
    expect(looksLikeIndependentDialogue("Tu peux publier ce document ?")).toBe(false);
    expect(looksLikeIndependentDialogue("Peux-tu créer un autre projet ?")).toBe(false);
    expect(looksLikeIndependentDialogue("Est-ce qu'on peut autoriser cette action ?")).toBe(false);
    expect(looksLikeIndependentDialogue("Ouvre le cycle cadrage.")).toBe(false);
    expect(looksLikeIndependentDialogue("Ouvre L cycle cadrage.")).toBe(false);
  });

  it("COMPLETE on independent turn must not clear unresolved métier pending", () => {
    expect(
      shouldClearThreadPending({
        noraStatus: "COMPLETE",
        effectAttempted: false,
        effectStatus: null,
        preserveUnresolvedMetierPending: true,
      }),
    ).toBe(false);
    expect(
      shouldClearThreadPending({
        noraStatus: "COMPLETE",
        effectAttempted: false,
        effectStatus: null,
        preserveUnresolvedMetierPending: false,
      }),
    ).toBe(true);
  });

  it("project page uses qualifyThreadTurn (not exclusion-only independence)", () => {
    const src = readFileSync(
      join(__dirname, "../../src/app/projects/[projectId]/page.tsx"),
      "utf8",
    );
    expect(src).toMatch(/qualifyThreadTurn/);
    expect(src).toMatch(/preserveUnresolvedMetierPending/);
    expect(src).toMatch(/preserveMetierPending/);
    expect(src).toMatch(/pendingBefore/);
    expect(src).toMatch(/nextTurnKind/);
  });
});
