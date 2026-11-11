import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  appendDocumentEffectAck,
  hasCompetingTransactionalClaim,
} from "@/domains/conversation/document-act";
import { emptyMission } from "@/domains/conversation/intent-conduction";
import { appendMissionAck } from "@/domains/conversation/mission-continuity";

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
});
