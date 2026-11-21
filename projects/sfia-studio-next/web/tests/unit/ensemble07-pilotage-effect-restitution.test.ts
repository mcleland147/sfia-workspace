import { describe, expect, it } from "vitest";
import {
  composePilotageEffectRestitution,
  isTechnicalMissionAssistantContent,
  projectMetierMissionMessage,
} from "@/domains/conversation/pilotage-effect-restitution";

describe("E07 post-effect métier restitution", () => {
  it("APPLIED OPEN_CYCLE replaces pending-Studio hedge with confirmation", () => {
    const prior =
      "Je note votre accord. L'ouverture effective reste à confirmer par Studio.";
    const out = composePilotageEffectRestitution({
      priorContent: prior,
      effect: {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "APPLIED",
      },
    });
    expect(out).not.toMatch(/reste à confirmer par Studio/i);
    expect(out).toMatch(/appliquée/i);
    expect(out).toMatch(/cycle demandé est désormais actif/i);
  });

  it("REJECTED INVALID surfaces motif without false success", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Je vais demander l'ouverture du cycle de cadrage.",
      effect: {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "REJECTED",
        reasonCode: "INVALID",
        reason: "Type de cycle requis",
      },
    });
    expect(out).toMatch(/refusée/i);
    expect(out).toMatch(/Type de cycle requis/);
    expect(out).not.toMatch(/appliquée/i);
  });

  it("ALREADY_APPLIED / CONFLICT / UNKNOWN each have distinct métier wording", () => {
    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "RETAIN_TRAJECTORY", status: "ALREADY_APPLIED" },
      }),
    ).toMatch(/déjà appliquée/i);

    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "OPEN_CYCLE", status: "CONFLICT", reason: "revision" },
      }),
    ).toMatch(/conflit/i);

    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "OPEN_CYCLE", status: "UNKNOWN" },
      }),
    ).toMatch(/en vérification/i);
  });

  it("no effect attempted leaves cognitive reply unchanged", () => {
    const prior = "Voici une analyse sans commande.";
    expect(
      composePilotageEffectRestitution({
        priorContent: prior,
        effect: { attempted: false },
      }),
    ).toBe(prior);
  });
});

describe("E07 technical mission message projection", () => {
  const dump =
    "### Suite de mission\nProjet créé (projectId=proj_abc). Aucune étape.\n\n" +
    "### Suite de mission (projection D3 — refs owners)\nstatus=COMPLETED\nclientIntentKey=k1";

  it("detects raw dumps; preserves métier D4 ACK even with mission-continue id", () => {
    expect(isTechnicalMissionAssistantContent(dump, "mission-continue-d2:k1:proj")).toBe(true);
    expect(isTechnicalMissionAssistantContent("Bonjour", "gen-nora-1")).toBe(false);
    expect(
      isTechnicalMissionAssistantContent(
        "Résultat d'enregistrement : document disponible.",
        "mission-continue-d2:k1:proj",
      ),
    ).toBe(false);
  });

  it("projects métier text without projectId leak", () => {
    const projected = projectMetierMissionMessage(dump);
    expect(projected).toMatch(/projet a bien été créé/i);
    expect(projected).not.toMatch(/projectId=/);
    expect(projected).not.toMatch(/clientIntentKey=/);
  });
});
