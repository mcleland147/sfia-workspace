import { createHash } from "crypto";
import { mkdtempSync, readFileSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { resolve } from "path";
import { describe, expect, it } from "vitest";
import { schemaRevision } from "@/db/schema";
import { buildSourceActionKey } from "@/domains/pilotage/command-runner";
import {
  CKI_MANIFEST_FILE,
  CYCLE_CKI,
  CYCLE_TYPES,
  deliveryState,
  listCkiSpecialtyFiles,
  loadCkiManifest,
  resolveForOpen,
  resolvePinnedCki,
} from "@/domains/pilotage/cki-resolve";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import { classifyExplicitInteraction } from "@/domains/pilotage/service";
import { COMMAND_STATUSES } from "@/domains/pilotage/types";

describe("ml3 CKI resolution and intent", () => {
  it("records schema revision 007", () => {
    expect(schemaRevision).toBe("012_auth_concurrency_safety");
    expect(COMMAND_STATUSES).toEqual([
      "APPLIED",
      "ALREADY_APPLIED",
      "REJECTED",
      "CONFLICT",
      "UNKNOWN",
    ]);
  });

  it("maps each cycle type to one CKI specialty file", () => {
    const files = listCkiSpecialtyFiles();
    expect(CYCLE_TYPES).toHaveLength(15);
    expect(files).toHaveLength(15);
    expect(new Set(CYCLE_TYPES.map((type) => `${CYCLE_CKI[type]}.md`))).toEqual(new Set(files));
  });

  it("pins a readable specialty as RESOLVED and delivers only when Nora attaches it", () => {
    const pin = resolveForOpen("CADRAGE");
    expect(pin.ckiId).toBe("01-cadrage");
    expect(pin.availability).toBe("RESOLVED");
    expect(pin.pinnedVersion).toBe("0.2.0");
    expect(pin.contentDigest).toMatch(/^[a-f0-9]{64}$/);
    const bytes = readFileSync(resolve(process.cwd(), "../cki/01-cadrage.md"));
    expect(pin.contentDigest).toBe(createHash("sha256").update(bytes).digest("hex"));
    expect(deliveryState(pin.availability, false)).toBe("RESOLVED");
    expect(deliveryState("RESOLVED", true)).toBe("DELIVERED");
    expect(deliveryState("ASSOCIATED", true)).toBe("ASSOCIATED");
  });

  it("stays ASSOCIATED without a pin and UNAVAILABLE when the digest diverges", () => {
    expect(
      resolvePinnedCki({ ckiId: "01-cadrage", contentDigest: null, pinnedVersion: null }).availability,
    ).toBe("ASSOCIATED");
    expect(
      resolvePinnedCki({
        ckiId: "01-cadrage",
        contentDigest: "ab".repeat(32),
        pinnedVersion: "0.2.0",
      }).availability,
    ).toBe("UNAVAILABLE");

    const previous = process.env.SFIA_CKI_ROOT;
    process.env.SFIA_CKI_ROOT = "/tmp/sfia-cki-missing-ml3";
    try {
      const pin = resolveForOpen("SECURITE");
      expect(pin.ckiId).toBe("10-securite-rssi");
      expect(pin.availability).toBe("ASSOCIATED");
      expect(pin.contentDigest).toBeNull();
      expect(pin.pinnedVersion).toBeNull();
    } finally {
      if (previous === undefined) delete process.env.SFIA_CKI_ROOT;
      else process.env.SFIA_CKI_ROOT = previous;
    }
  });

  it("qualifies a clear GO and rejects ambiguous utterances", () => {
    expect(qualifyPilotageIntent("ouvre le cycle cadrage")).toMatchObject({
      clarity: "CLEAR",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    expect(qualifyPilotageIntent("OK").clarity).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("annule cette méthode").clarity).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("retire la méthode")).toMatchObject({
      clarity: "CLEAR",
      operation: "WITHDRAW_METHOD",
    });
    expect(qualifyPilotageIntent("clôture le cycle cadrage et ouvre le cycle ux")).toMatchObject({
      clarity: "CLEAR",
      operation: "TRANSITION_CYCLE",
      cycleType: "CADRAGE",
      toCycleType: "UX_UI",
    });
    expect(qualifyPilotageIntent("ouvre le cycle cadrage et le cycle sécurité").clarity).toBe("AMBIGUOUS");
  });

  it("F01/F02: qualifies documentary RECORD/REVISE and rejects soft preferences", () => {
    expect(
      qualifyPilotageIntent(
        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
      ),
    ).toMatchObject({
      clarity: "CLEAR",
      operation: "RECORD_DECISION",
      objectRef: expect.stringMatching(/github|connexion/i),
    });
    expect(qualifyPilotageIntent("Finalement, GitHub devient facultatif.")).toMatchObject({
      clarity: "CLEAR",
      operation: "REVISE_DECISION",
    });
    expect(qualifyPilotageIntent("OK").clarity).toBe("AMBIGUOUS");
    expect(
      qualifyPilotageIntent("Ce serait intéressant de commencer.").clarity,
    ).toBe("NONE");
    expect(
      qualifyPilotageIntent("Je décide que GitHub est obligatoire ?").clarity,
    ).toBe("AMBIGUOUS");
  });

  it("C01: exploratory Finalement / questions never CLEAR REVISE", () => {
    expect(
      qualifyPilotageIntent("Finalement, je pense que GitHub pourrait être facultatif.").clarity,
    ).toBe("AMBIGUOUS");
    expect(
      qualifyPilotageIntent("Finalement, et si GitHub devenait facultatif ?").clarity,
    ).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("Je réfléchis à rendre GitHub facultatif.").clarity).toBe(
      "NONE",
    );
    expect(qualifyPilotageIntent("Nora propose de rendre GitHub facultatif.").clarity).toBe(
      "NONE",
    );
    expect(
      qualifyPilotageIntent(
        "Je révise la décision GitHub : la connexion est facultative.",
      ),
    ).toMatchObject({ clarity: "CLEAR", operation: "REVISE_DECISION" });
  });

  it("pins RESOLVED only when the file digest matches the approved manifest", () => {
    const manifest = loadCkiManifest();
    expect(manifest?.version).toBe("0.2.0");
    expect(manifest?.specialties).toHaveLength(15);
    const pin = resolveForOpen("UX_UI");
    const entry = manifest?.specialties.find((item) => item.ckiId === "04-ux-ui");
    expect(pin.availability).toBe("RESOLVED");
    expect(pin.contentDigest).toBe(entry?.sha256);
    expect(pin.manifestRef).toContain(CKI_MANIFEST_FILE);

    const dir = mkdtempSync(resolve(tmpdir(), "sfia-cki-mismatch-"));
    writeFileSync(resolve(dir, "10-securite-rssi.md"), "contenu non approuvé\n");
    writeFileSync(
      resolve(dir, CKI_MANIFEST_FILE),
      JSON.stringify({
        version: "0.2.0",
        specialties: [
          {
            ckiId: "10-securite-rssi",
            file: "10-securite-rssi.md",
            version: "0.2.0",
            sha256: "ab".repeat(32),
          },
        ],
      }),
    );
    const previous = process.env.SFIA_CKI_ROOT;
    process.env.SFIA_CKI_ROOT = dir;
    try {
      const mismatched = resolveForOpen("SECURITE");
      expect(mismatched.availability).toBe("UNAVAILABLE");
      expect(mismatched.contentDigest).toBeNull();
      expect(mismatched.pinnedVersion).toBeNull();
      const fileDigest = createHash("sha256")
        .update(readFileSync(resolve(dir, "10-securite-rssi.md")))
        .digest("hex");
      expect(
        resolvePinnedCki({
          ckiId: "10-securite-rssi",
          contentDigest: fileDigest,
          pinnedVersion: "0.2.0",
        }).availability,
      ).toBe("UNAVAILABLE");
    } finally {
      if (previous === undefined) delete process.env.SFIA_CKI_ROOT;
      else process.env.SFIA_CKI_ROOT = previous;
    }
  });

  it("classifies a natural explicit GO without an operation", () => {
    const clear = classifyExplicitInteraction({
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: "ui:UTTERANCE:act-1",
      utterance: "ouvre le cycle cadrage",
      actInstanceId: "act-1",
    });
    expect(clear?.ok).toBe(true);
    if (clear?.ok) {
      expect(clear.command.operation).toBe("OPEN_CYCLE");
      expect(clear.command.cycleType).toBe("CADRAGE");
      expect(clear.command.actInstanceId).toBe("act-1");
    }
    const ambiguous = classifyExplicitInteraction({
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: "ui:UTTERANCE:act-2",
      utterance: "OK",
      actInstanceId: "act-2",
    });
    expect(ambiguous).toMatchObject({ ok: false, reasonCode: "AMBIGUOUS" });
    expect(
      classifyExplicitInteraction({
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: "ui:open:act-3",
        operation: "OPEN_CYCLE",
        utterance: "ouvre le cycle cadrage",
      }),
    ).toBeNull();
  });

  it("hashes source action keys with the act instance so retries stay stable", () => {
    const first = buildSourceActionKey({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      actInstanceId: "act-stable",
    });
    const retry = buildSourceActionKey({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      actInstanceId: "act-stable",
    });
    const next = buildSourceActionKey({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      actInstanceId: "act-next",
    });
    expect(first).toBe(retry);
    expect(first).not.toBe(next);
    expect(first).toMatch(/^[a-f0-9]{64}$/);
  });
});
