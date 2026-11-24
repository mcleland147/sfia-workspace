/**
 * C13 — D8 per-tool provenance journal (not mere toolCallsObserved).
 * Exercises journal wiring via confine layer + recordToolSource semantics.
 */
import { describe, expect, it } from "vitest";
import {
  createToolSourceJournal,
  recordToolSource,
} from "@/domains/conversation/tool-source-journal";
import { classifyManifestHonesty } from "@/domains/execution/handoff-integrity";

describe("ML5 C13 D8 tool journal + handoff honesty", () => {
  it("records distinct piece refs with coverage — not just call counts", () => {
    const journal = createToolSourceJournal();
    recordToolSource(journal, {
      kind: "REPORT",
      ref: "d8:list_realization_evidence:efx_1",
      coverage: "DISCOVERED",
      notes: "metadata only",
    });
    recordToolSource(journal, {
      kind: "REPORT",
      ref: "d8:read_attempt_workspace_file:RESULT.txt",
      coverage: "CONSULTED",
      versionOrSha: "abc",
    });
    recordToolSource(journal, {
      kind: "REPORT",
      ref: "d8:read_attempt_workspace_file:secret.env",
      coverage: "DENIED",
      notes: "secret refused",
    });
    recordToolSource(journal, {
      kind: "REPORT",
      ref: "d8:read_evidence_capture_meta:ecap_1",
      coverage: "DISCOVERED",
      notes: "metadata opened — binary content not consulted",
    });
    expect(journal.entries).toHaveLength(4);
    const consulted = journal.entries.filter((e) => e.coverage === "CONSULTED");
    const denied = journal.entries.filter((e) => e.coverage === "DENIED");
    const discovered = journal.entries.filter((e) => e.coverage === "DISCOVERED");
    expect(consulted).toHaveLength(1);
    expect(denied).toHaveLength(1);
    expect(discovered).toHaveLength(2);
    // Listing ≠ content consultation
    expect(
      journal.entries.find((e) => e.ref.includes("list_realization"))?.coverage,
    ).toBe("DISCOVERED");
  });

  it("upgrades coverage for same ref without duplicating", () => {
    const journal = createToolSourceJournal();
    recordToolSource(journal, {
      kind: "REPORT",
      ref: "d8:read_realization_handoff_report:rhf_1",
      coverage: "PARTIAL",
    });
    recordToolSource(journal, {
      kind: "REPORT",
      ref: "d8:read_realization_handoff_report:rhf_1",
      coverage: "CONSULTED",
    });
    expect(journal.entries).toHaveLength(1);
    expect(journal.entries[0]!.coverage).toBe("CONSULTED");
  });

  it("RESULT file alone does not verify announced unit tests", () => {
    const h = classifyManifestHonesty({
      filesCreated: ["RESULT_C12.txt", "src/add.ts"],
      filesObserved: ["RESULT_C12.txt", "src/add.ts"],
      testsExecuted: ["node --test src/add.test.mjs"],
      testsCaptured: [],
    });
    expect(h.canClaimVerifiedTests).toBe(false);
    expect(h.notes).toContain("TESTS_ANNOUNCED_WITHOUT_CAPTURE");
  });

  it("captured test output allows verified claim", () => {
    const h = classifyManifestHonesty({
      filesObserved: ["src/add.ts"],
      testsExecuted: ["node --test"],
      testsCaptured: ["stdout:C12_TEST_OK exit=0"],
    });
    expect(h.canClaimVerifiedTests).toBe(true);
  });
});
